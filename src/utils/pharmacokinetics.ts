import {
  applyDerivativeModification,
  type CannabinoidProfile,
  type DerivativeModType,
  getCannabinoidById,
  isCannabinoidSubstance,
} from '../data/cannabinoids.ts';
import { getSubstanceById } from '../data/allSubstances.ts';

export type ToleranceLevel = 'naive' | 'occasional' | 'regular' | 'heavy';
export type AdministrationRoute = 'inhalation' | 'sublingual' | 'oral';
export type UsageFrequency =
  | 'single'
  | 'occasional' // 1-2x / week
  | 'moderate' // 3-4x / week
  | 'daily' // 1x / day
  | 'heavy_chronic'; // Multiple times daily

export interface HealthProfileFlags {
  cardiovascularSensitivity: boolean;
  anxietyOrPsychiatricHistory: boolean;
  hepaticCypSlowMetabolizer: boolean;
  respiratorySensitivity: boolean;
}

export interface DosageInput {
  cannabinoidId: string;
  route: AdministrationRoute;
  tolerance: ToleranceLevel;
  weightKg: number;
  heightCm?: number;
  ageYears: number;
  biologicalSex?: 'male' | 'female';
  activityLevel?: 'sedentary' | 'moderate' | 'athletic';
  coAdministerCbdRatio: 'none' | '1:1' | '2:1_cbd_dominant';
  healthFlags: HealthProfileFlags;
}

export interface DosageTierResult {
  microMg: number;
  lowMg: number;
  moderateMg: number;
  strongMg: number;
  safetyCeilingMg: number;
  onsetMinutes: [number, number];
  peakMinutes: [number, number];
  durationHours: [number, number];
  clinicalAdvisories: string[];
  riskAdjustmentFactor: number;
}

export interface ClearanceInput {
  cannabinoidId: string;
  frequency: UsageFrequency;
  lastDoseMg: number;
  weightKg: number;
  heightCm: number;
  ageYears: number;
  biologicalSex: 'male' | 'female';
  activityLevel: 'sedentary' | 'moderate' | 'athletic';
  hydrationLevel: 'low' | 'normal' | 'high';
}

export interface MatrixClearanceWindow {
  matrix: string;
  cutoffLabel: string;
  cutoffNgMl: number;
  estimatedHoursToClear: number;
  estimatedDaysMin: number;
  estimatedDaysMax: number;
  detectableOnStandardPanel: boolean;
  notes: string;
}

export interface DecayPoint {
  day: number;
  hours: number;
  urineConcentrationNgMl: number;
  bloodConcentrationNgMl: number;
}

export interface ClearanceSimulationResult {
  bmi: number;
  estimatedBodyFatPct: number;
  adiposeRetentionIndex: number;
  effectiveHalfLifeHours: number;
  initialPeakUrineNgMl: number;
  windows: {
    urine50: MatrixClearanceWindow;
    urine15: MatrixClearanceWindow;
    blood: MatrixClearanceWindow;
    saliva: MatrixClearanceWindow;
    hair: MatrixClearanceWindow;
  };
  decayCurve: DecayPoint[];
}

export function roundToSignificant(val: number): number {
  if (val <= 0) return 0;
  if (val < 0.1) return Math.round(val * 1000) / 1000;
  if (val < 1) return Math.round(val * 100) / 100;
  if (val < 10) return Math.round(val * 10) / 10;
  return Math.round(val * 2) / 2;
}

export function calculateBMI(weightKg: number, heightCm: number): number {
  const clampedWeight = Math.max(35, Math.min(250, weightKg));
  const clampedHeightM = Math.max(1.2, Math.min(2.3, heightCm / 100));
  const bmi = clampedWeight / (clampedHeightM * clampedHeightM);
  return Math.round(bmi * 10) / 10;
}

/**
 * Deurenberg adult body fat equation adjusted for athletic/sedentary lean mass
 */
export function estimateBodyFatPercentage(
  bmi: number,
  ageYears: number,
  biologicalSex: 'male' | 'female',
  activityLevel: 'sedentary' | 'moderate' | 'athletic'
): number {
  const sexFactor = biologicalSex === 'male' ? 1 : 0;
  const clampedAge = Math.max(18, Math.min(90, ageYears));
  let bf = 1.2 * bmi + 0.23 * clampedAge - 10.8 * sexFactor - 5.4;

  if (activityLevel === 'athletic') bf -= 3.8;
  if (activityLevel === 'sedentary') bf += 2.2;

  const minBf = biologicalSex === 'male' ? 5.0 : 12.0;
  const maxBf = 52.0;
  return Math.round(Math.max(minBf, Math.min(maxBf, bf)) * 10) / 10;
}

export function calculatePersonalizedDosage(
  input: DosageInput
): DosageTierResult {
  const compound: CannabinoidProfile = getSubstanceById(input.cannabinoidId);
  const clampedWeight = Math.max(40, Math.min(200, input.weightKg));

  // Base threshold dose from compound profile
  let baseThreshold =
    input.route === 'inhalation'
      ? compound.baseInhaledThresholdMg
      : input.route === 'sublingual'
      ? compound.baseOralThresholdMg * 0.8
      : compound.baseOralThresholdMg;

  // Allometric body weight scaling (gentle exponent 0.65 so high weight doesn't linearly overdrive CNS)
  const weightMultiplier = Math.pow(clampedWeight / 70, 0.65);

  // Tolerance scaling
  const toleranceMultipliers: Record<ToleranceLevel, number> = {
    naive: 0.75,
    occasional: 1.0,
    regular: 1.85,
    heavy: 3.4,
  };
  const toleranceMult = toleranceMultipliers[input.tolerance];

  // Health & metabolic risk reduction factors
  let riskAdjustmentFactor = 1.0;
  const clinicalAdvisories: string[] = [];

  if (input.healthFlags.cardiovascularSensitivity) {
    riskAdjustmentFactor *= 0.65;
    clinicalAdvisories.push(
      'Cardiovascular sensitivity active: Dose reduced by 35% to mitigate CB1-mediated reflex sinus tachycardia and orthostatic blood pressure drop.'
    );
  }

  if (input.healthFlags.anxietyOrPsychiatricHistory) {
    riskAdjustmentFactor *= 0.6;
    clinicalAdvisories.push(
      'Anxiogenic / psychiatric caution: Dose reduced by 40%. High CB1 receptor occupancy flips amygdala signaling from anxiolytic to anxiogenic.'
    );
  }

  if (input.healthFlags.hepaticCypSlowMetabolizer) {
    if (input.route === 'oral' || input.route === 'sublingual') {
      riskAdjustmentFactor *= 0.5;
      clinicalAdvisories.push(
        `CYP2C9 / CYP3A4 slow metabolizer adjustment: Oral/sublingual dose halved (50%). Impaired hepatic clearance increases 11-OH metabolite AUC up to 2.5–3x.`
      );
    } else {
      riskAdjustmentFactor *= 0.8;
      clinicalAdvisories.push(
        `Hepatic CYP impairment: Inhaled systemic clearance is prolonged; allow 2x longer interval before redosing.`
      );
    }
  }

  if (
    input.healthFlags.respiratorySensitivity &&
    input.route === 'inhalation'
  ) {
    clinicalAdvisories.push(
      'Pulmonary caution: Avoid combustion and high-temperature dabbing (>230°C). Sublingual or oral administration is strongly preferred.'
    );
  }

  if (
    (compound.id.includes('acetate') || compound.id.endsWith('-mod-oac')) &&
    input.route === 'inhalation'
  ) {
    clinicalAdvisories.push(
      `CRITICAL TOXICOLOGY WARNING: Never inhale, vape, or combust O-acetylated cannabinoids (${compound.shortName}). Pyrolysis above 280°C generates pulmonary-toxic ketene gas (CH2=C=O).`
    );
  }

  if (
    compound.classification === '9H- Enriched Series' ||
    compound.id.startsWith('9h-') ||
    compound.id.endsWith('-mod-9h')
  ) {
    clinicalAdvisories.push(
      `9H Stereoselective (9R)-Enrichment Notice: ${compound.shortName} concentrates the equatorial (9R) stereocenter and removes inactive (9S) epimers. Expect ~25–50% stronger CB1 receptor occupancy per milligram than un-enriched or racemic distillates.`
    );
  }

  if (
    compound.id.startsWith('9-oh-') ||
    compound.id.startsWith('10-oh-') ||
    compound.id.startsWith('8-oh-') ||
    compound.id.endsWith('-mod-9oh') ||
    compound.id.endsWith('-mod-10oh') ||
    compound.id.endsWith('-mod-8oh')
  ) {
    if (input.route === 'oral') {
      clinicalAdvisories.push(
        `Hydroxylated Cannabinoid Phase II Kinetics (${compound.shortName}): Pre-existing hydroxyl (-OH) group undergoes rapid hepatic first-pass UGT glucuronidation when taken orally, shortening duration compared to unhydroxylated parent cannabinoids.`
      );
    } else if (input.route === 'inhalation') {
      clinicalAdvisories.push(
        `Rapid Inhaled Peak (${compound.shortName}): Bypassing first-pass hepatic glucuronidation allows direct CNS delivery of the hydroxylated compound, producing a faster onset and ~40% shorter systemic tail.`
      );
    }
  }

  if (compound.id.startsWith('11-oh-') || compound.id.endsWith('-mod-11oh')) {
    clinicalAdvisories.push(
      `Active C11-Hydroxymethyl Metabolite (${compound.shortName}): Pre-formed 11-OH functionalization crosses the blood-brain barrier more rapidly than parent cannabinoids, amplifying peak CNS potency by ~1.6x.`
    );
  }

  if (compound.classification === 'Synthetic Agonist') {
    clinicalAdvisories.push(
      'FULL CB1 AGONIST HAZARD: Unlike phytocannabinoids, full synthetic agonists lack a partial-agonist ceiling and carry life-threatening seizure and arrhythmia risks above microgram/sub-milligram thresholds.'
    );
  }

  if (compound.classification === 'Benzodiazepine') {
    clinicalAdvisories.push(
      `GABAA Positive Allosteric Modulator (${compound.shortName}): Never combine with opioids, alcohol, or gabapentinoids due to synergistic brainstem respiratory depression.`
    );
  }

  if (compound.classification === 'Opioid Analgesic') {
    clinicalAdvisories.push(
      `μ-Opioid Agonist Respiratory Warning (${compound.shortName}): Dose-dependent medullary respiratory depression; keep Naloxone (Narcan) accessible and avoid co-use with benzodiazepines, pregabalin, or alcohol.`
    );
  }

  if (compound.classification === 'Gabapentinoid') {
    clinicalAdvisories.push(
      `VGCC α2δ-1 Subunit Ligand (${compound.shortName}): Renally excreted unchanged (>95%). Potentiates opioid and sedative respiratory depression and builds rapid tolerance within 48–72 hours.`
    );
  }

  if (
    compound.classification === 'Empathogen / Stimulant' ||
    compound.classification === 'Rx Stimulant'
  ) {
    clinicalAdvisories.push(
      `Monoaminergic Cardiovascular & Thermoregulatory Load (${compound.shortName}): Monitor heart rate and blood pressure; avoid redosing or combining with MAOIs, tramadol, or other sympathomimetics.`
    );
  }

  if (compound.classification === 'Dissociative') {
    clinicalAdvisories.push(
      `NMDA Antagonist Dissociative Notice (${compound.shortName}): Insufflated/inhaled bioavailability (~45–50%) is more than double oral bioavailability (~20%); frequent use risks ulcerative cystitis (ketamine bladder syndrome).`
    );
  }

  if (compound.classification === 'Psychedelic') {
    clinicalAdvisories.push(
      `Serotonergic 5-HT2A Agonist (${compound.shortName}): Steep dose-response curve (${
        compound.id === 'lsd-25'
          ? '0.025 mg = 25 µg microgram scale'
          : 'verify milligram weight carefully'
      }); set, setting, and cardiovascular screening are critical.`
    );
  }

  if (
    compound.classification.includes('Antipsychotic') ||
    compound.id === 'quetiapine'
  ) {
    clinicalAdvisories.push(
      `Atypical Antipsychotic / H1 & α1 Antagonist (${compound.shortName}): Profound somnolence, orthostatic hypotension, and dose-dependent QT prolongation. Avoid co-administration with CNS depressants (alcohol, opioids, benzos) or QT-prolonging drugs.`
    );
  }

  // Co-administered CBD NAM modulation (only applies to cannabinoids)
  let cbdModulator = 1.0;
  if (
    isCannabinoidSubstance(compound) &&
    compound.psychoactive &&
    input.coAdministerCbdRatio !== 'none'
  ) {
    if (input.coAdministerCbdRatio === '1:1') {
      cbdModulator = 1.12;
      clinicalAdvisories.push(
        '1:1 CBD Co-Administration: CBD acts as a negative allosteric modulator (NAM) at CB1, widening the therapeutic window and blunting peak tachycardia/anxiety.'
      );
    } else if (input.coAdministerCbdRatio === '2:1_cbd_dominant') {
      cbdModulator = 1.2;
      clinicalAdvisories.push(
        '2:1 CBD-Dominant Buffer: Negative allosteric CB1 modulation significantly attenuates acute paranoia, though high oral CBD (>50 mg) may slightly extend duration via CYP2C9 competition.'
      );
    }
  }

  // Age adjustment for older adults (>65y)
  if (input.ageYears >= 65) {
    riskAdjustmentFactor *= 0.75;
    clinicalAdvisories.push(
      'Geriatric pharmacokinetic adjustment (65+ yrs): Reduced hepatic blood flow and increased orthostatic fall risk warrant a 25% lower starting dose.'
    );
  }

  // Lean body mass & vaping distribution volume calibration (e.g. 55 kg / 172 cm)
  if (clampedWeight <= 60) {
    const bmiNote =
      input.heightCm && input.heightCm > 120
        ? ` (BMI ${calculateBMI(clampedWeight, input.heightCm)} kg/m²)`
        : '';
    const pctReduction = Math.round((1 - weightMultiplier) * 100);
    clinicalAdvisories.push(
      `Lean Body Mass Calibration (${clampedWeight} kg${bmiNote}): Smaller central plasma volume increases peak arterial cannabinoid concentration per milligram; target doses are scaled down by ${pctReduction}% vs. a 70 kg reference.`
    );
  }

  if (input.activityLevel === 'sedentary') {
    clinicalAdvisories.push(
      'Sedentary / Stay-at-Home Baseline: Resting hepatic portal blood flow and low basal lipolysis prolong terminal metabolite clearance (~1.18× slower elimination tail), so avoid back-to-back redosing.'
    );
  }

  const effectiveLow =
    baseThreshold *
    weightMultiplier *
    toleranceMult *
    riskAdjustmentFactor *
    cbdModulator;

  const microMg = roundToSignificant(effectiveLow * 0.45);
  const lowMg = roundToSignificant(effectiveLow);
  const moderateMg = roundToSignificant(effectiveLow * 2.0);
  const strongMg = roundToSignificant(effectiveLow * 3.6);
  const safetyCeilingMg = roundToSignificant(effectiveLow * 5.2);

  // Route-dependent kinetics
  let onsetMinutes: [number, number] = compound.inhaledOnsetMinutes;
  let peakMinutes: [number, number] = [15, 35];
  let durationHours: [number, number] = compound.inhaledDurationHours;

  if (input.route === 'sublingual') {
    onsetMinutes = [
      Math.round(compound.oralOnsetMinutes[0] * 0.45),
      Math.round(compound.oralOnsetMinutes[1] * 0.5),
    ];
    peakMinutes = [45, 90];
    durationHours = [
      Math.round(compound.oralDurationHours[0] * 0.8 * 10) / 10,
      Math.round(compound.oralDurationHours[1] * 0.85 * 10) / 10,
    ];
  } else if (input.route === 'oral') {
    onsetMinutes = compound.oralOnsetMinutes;
    peakMinutes = [
      compound.oralOnsetMinutes[0] + 45,
      compound.oralOnsetMinutes[1] + 60,
    ];
    durationHours = compound.oralDurationHours;
  }

  return {
    microMg,
    lowMg,
    moderateMg,
    strongMg,
    safetyCeilingMg,
    onsetMinutes,
    peakMinutes,
    durationHours,
    clinicalAdvisories,
    riskAdjustmentFactor: Math.round(riskAdjustmentFactor * 100) / 100,
  };
}

/**
 * Multi-compartment pharmacokinetic clearance simulator
 */
export function simulateClearanceKinetics(
  input: ClearanceInput
): ClearanceSimulationResult {
  const compound = getSubstanceById(input.cannabinoidId);
  const bmi = calculateBMI(input.weightKg, input.heightCm);
  const estimatedBodyFatPct = estimateBodyFatPercentage(
    bmi,
    input.ageYears,
    input.biologicalSex,
    input.activityLevel
  );

  // Baseline body fat reference: 22%
  // Lipophilic cannabinoids sequester into white adipose tissue proportional to LogP and body fat mass;
  // Polar/hydrophilic pharmaceuticals & illicit substances (LogP < 3.5) have minimal adipose sequestration.
  const isCannabinoid = isCannabinoidSubstance(compound);
  const logPFactor = isCannabinoid
    ? Math.max(0.65, compound.xLogP / 7.0)
    : Math.max(0.45, Math.min(1.0, ( Math.max(0, compound.xLogP) + 2.5 ) / 6.5));
  const bodyFatMultiplier = isCannabinoid
    ? 1 + ((estimatedBodyFatPct - 22) / 100) * 1.45 * logPFactor
    : 1 + ((estimatedBodyFatPct - 22) / 100) * 0.25 * logPFactor;

  const activityMultiplier =
    input.activityLevel === 'athletic'
      ? 0.84
      : input.activityLevel === 'sedentary'
      ? 1.18
      : 1.0;

  const hydrationMultiplier =
    input.hydrationLevel === 'high'
      ? 0.92
      : input.hydrationLevel === 'low'
      ? 1.12
      : 1.0;

  // Frequency determines tissue saturation state (two-compartment fast alpha vs slow beta adipose elimination)
  const frequencySaturationMultipliers: Record<UsageFrequency, number> = isCannabinoid
    ? {
        single: 0.72,
        occasional: 1.0,
        moderate: 1.42,
        daily: 1.95,
        heavy_chronic: 2.55,
      }
    : {
        single: 0.85,
        occasional: 1.0,
        moderate: 1.18,
        daily: 1.38,
        heavy_chronic: 1.65,
      };

  const baseInitialConcentrationsNgMl: Record<UsageFrequency, number> = {
    single: 110,
    occasional: 240,
    moderate: 480,
    daily: 1150,
    heavy_chronic: 2800,
  };

  const doseScaling = Math.pow(
    Math.max(0.01, input.lastDoseMg) / Math.max(0.02, compound.baseOralThresholdMg * 2),
    0.42
  );

  const adiposeRetentionIndex =
    Math.round(
      bodyFatMultiplier *
        logPFactor *
        activityMultiplier *
        hydrationMultiplier *
        100
    ) / 100;

  // Effective terminal half-life in hours
  const effectiveHalfLifeHours = Math.max(
    3,
    Math.round(
      compound.terminalHalfLifeHours *
        (isCannabinoid ? adiposeRetentionIndex * 0.65 : 1.0) *
        frequencySaturationMultipliers[input.frequency]
    )
  );

  const rawInitialUrineNgMl =
    baseInitialConcentrationsNgMl[input.frequency] *
    doseScaling *
    adiposeRetentionIndex;

  const initialPeakUrineNgMl = Math.round(
    Math.max(35, Math.min(6500, rawInitialUrineNgMl))
  );

  // Two-compartment exponential decay: C(t) = A * e^(-k_alpha * t) + B * e^(-k_beta * t)
  // Where t is hours, alpha is rapid plasma/hepatic clearance, beta is slow adipose mobilization
  const kAlpha = Math.LN2 / Math.max(isCannabinoid ? 12 : 2.5, effectiveHalfLifeHours * 0.35);
  const kBeta = Math.LN2 / Math.max(isCannabinoid ? 24 : 4.5, effectiveHalfLifeHours);

  // Chronic users have higher fraction B locked in deep adipose compartment
  const betaFractionByFreq: Record<UsageFrequency, number> = isCannabinoid
    ? {
        single: 0.18,
        occasional: 0.3,
        moderate: 0.45,
        daily: 0.62,
        heavy_chronic: 0.76,
      }
    : {
        single: 0.1,
        occasional: 0.16,
        moderate: 0.24,
        daily: 0.35,
        heavy_chronic: 0.48,
      };

  const fracBeta = betaFractionByFreq[input.frequency];
  const fracAlpha = 1 - fracBeta;

  const evalUrineAtHour = (tHours: number): number => {
    const val =
      initialPeakUrineNgMl *
      (fracAlpha * Math.exp(-kAlpha * tHours) +
        fracBeta * Math.exp(-kBeta * tHours));
    return Math.max(0, Math.round(val * 10) / 10);
  };

  const findHoursToCutoff = (cutoff: number): number => {
    if (initialPeakUrineNgMl <= cutoff) return 12;
    for (let h = 1; h <= 24 * 120; h += 2) {
      if (evalUrineAtHour(h) <= cutoff) {
        return h;
      }
    }
    return 24 * 95;
  };

  const hoursTo50 = findHoursToCutoff(50);
  const hoursTo15 = findHoursToCutoff(15);

  // Blood clearance is much faster than urine metabolite excretion
  const bloodBaseHours: Record<UsageFrequency, number> = {
    single: 18,
    occasional: 36,
    moderate: 72,
    daily: 144,
    heavy_chronic: 336, // up to 14 days in heavy chronic lipid redistribution
  };
  const bloodHours = Math.round(
    bloodBaseHours[input.frequency] * Math.pow(adiposeRetentionIndex, 0.7)
  );

  // Oral fluid (saliva) primarily reflects recent buccal/mucosal deposition
  const salivaBaseHours: Record<UsageFrequency, number> = {
    single: 14,
    occasional: 24,
    moderate: 36,
    daily: 56,
    heavy_chronic: 96,
  };
  const salivaHours = Math.round(
    salivaBaseHours[input.frequency] * Math.pow(doseScaling, 0.35)
  );

  const detectableStandard = compound.immunoassayCrossReactivityPct >= 15;

  const formatDaysRange = (hours: number): [number, number] => {
    const centerDays = hours / 24;
    const minDays = Math.max(0.5, Math.round(centerDays * 0.8 * 10) / 10);
    const maxDays = Math.max(minDays + 0.5, Math.round(centerDays * 1.25 * 10) / 10);
    return [minDays, maxDays];
  };

  const [u50Min, u50Max] = formatDaysRange(hoursTo50);
  const [u15Min, u15Max] = formatDaysRange(hoursTo15);
  const [bloodMin, bloodMax] = formatDaysRange(bloodHours);
  const [salivaMin, salivaMax] = formatDaysRange(salivaHours);

  // Generate 60-point decay curve covering the relevant window
  const maxPlotDays = Math.min(
    90,
    Math.max(10, Math.ceil((hoursTo15 * 1.15) / 24))
  );
  const decayCurve: DecayPoint[] = [];
  const stepDays = maxPlotDays / 30;

  for (let i = 0; i <= 30; i++) {
    const day = Math.round(i * stepDays * 10) / 10;
    const hours = day * 24;
    const uConc = evalUrineAtHour(hours);
    const bConc =
      Math.round(
        Math.max(
          0,
          (initialPeakUrineNgMl * 0.08) *
            Math.exp(-(Math.LN2 / Math.max(6, bloodHours * 0.25)) * hours)
        ) * 100
      ) / 100;
    decayCurve.push({
      day,
      hours: Math.round(hours),
      urineConcentrationNgMl: uConc,
      bloodConcentrationNgMl: bConc,
    });
  }

  return {
    bmi,
    estimatedBodyFatPct,
    adiposeRetentionIndex,
    effectiveHalfLifeHours,
    initialPeakUrineNgMl,
    windows: {
      urine50: {
        matrix: 'Urine Immunoassay (Standard Screen)',
        cutoffLabel: '50 ng/mL Cut-Off',
        cutoffNgMl: 50,
        estimatedHoursToClear: hoursTo50,
        estimatedDaysMin: u50Min,
        estimatedDaysMax: u50Max,
        detectableOnStandardPanel: detectableStandard,
        notes: isCannabinoid
          ? (detectableStandard
              ? `${compound.shortName} exhibits ~${compound.immunoassayCrossReactivityPct}% cross-reactivity on standard 50 ng/mL antibody dipsticks.`
              : `${compound.shortName} has ${compound.immunoassayCrossReactivityPct}% cross-reactivity on standard THC-COOH dipsticks; requires targeted LC-MS/MS panel.`)
          : (compound.id === 'quetiapine'
              ? 'Quetiapine is not screened on standard SAMHSA/NIDA 5-panel or 10-panel workplace drug tests. However, it can cause false positives for Methadone or Tricyclic Antidepressants (TCAs) on rapid immunoassay test cups; confirmatory GC-MS/LC-MS definitively rules out false positives.'
              : (detectableStandard
                  ? `${compound.shortName} cross-reacts on standard workplace drug immunoassay panels (~${compound.immunoassayCrossReactivityPct}% reactivity).`
                  : `${compound.shortName} is not targeted on standard 5/10-panel screens; requires specialized forensic LC-MS/MS quantitation.`)),
      },
      urine15: {
        matrix: 'Urine GC-MS / LC-MS Confirmatory',
        cutoffLabel: '15 ng/mL Cut-Off',
        cutoffNgMl: 15,
        estimatedHoursToClear: hoursTo15,
        estimatedDaysMin: u15Min,
        estimatedDaysMax: u15Max,
        detectableOnStandardPanel: true,
        notes: `High-sensitivity mass spectrometry directly resolves ${compound.primaryMetabolite} down to 15 ng/mL.`,
      },
      blood: {
        matrix: 'Whole Blood / Serum',
        cutoffLabel: '1–2 ng/mL Active Parent',
        cutoffNgMl: 2,
        estimatedHoursToClear: bloodHours,
        estimatedDaysMin: bloodMin,
        estimatedDaysMax: bloodMax,
        detectableOnStandardPanel: true,
        notes:
          compound.id === 'quetiapine'
            ? 'Reflects circulating parent quetiapine (Cmax ~1.5h) and active norquetiapine; systemic levels clear below clinical threshold within 24–36 hours.'
            : (isCannabinoid
                ? 'Reflects circulating parent compound and active 11-OH metabolite; prolonged in daily users due to adipose back-diffusion.'
                : 'Reflects circulating parent drug in systemic circulation; cleared via hepatic metabolism and renal excretion.'),
      },
      saliva: {
        matrix: 'Oral Fluid (Roadside Swab)',
        cutoffLabel: '4 ng/mL Parent Cut-Off',
        cutoffNgMl: 4,
        estimatedHoursToClear: salivaHours,
        estimatedDaysMin: salivaMin,
        estimatedDaysMax: salivaMax,
        detectableOnStandardPanel: detectableStandard,
        notes:
          'Detects direct oral/mucosal sequestration from smoking, vaping, or sublingual administration.',
      },
      hair: {
        matrix: 'Hair Follicle Segment (3.8 cm)',
        cutoffLabel: '0.1 pg/mg Metabolite',
        cutoffNgMl: 0.1,
        estimatedHoursToClear: 2160,
        estimatedDaysMin: 75,
        estimatedDaysMax: 90,
        detectableOnStandardPanel: detectableStandard,
        notes:
          'Incorporates into growing hair shafts via bloodstream & sebum; single low-dose exposures frequently fall below pg/mg limits.',
      },
    },
    decayCurve,
  };
}

export interface UserAnthropometrics {
  weightKg: number;
  heightCm: number;
  ageYears: number;
  biologicalSex: 'male' | 'female';
  activityLevel: 'sedentary' | 'moderate' | 'athletic';
  hydrationLevel: 'low' | 'normal' | 'high';
  priorHabitBaseline?: UsageFrequency;
  standardRoa?: AdministrationRoute;
}

export const DEFAULT_ROA: AdministrationRoute = 'inhalation';

export const DEFAULT_USER_PROFILE: UserAnthropometrics = {
  weightKg: 55,
  heightCm: 172,
  ageYears: 24,
  biologicalSex: 'male',
  activityLevel: 'sedentary',
  hydrationLevel: 'normal',
  priorHabitBaseline: 'single',
  standardRoa: 'inhalation',
};

export interface DoseLogEntry {
  id: string;
  cannabinoidId: string;
  derivativeMod: DerivativeModType;
  route: AdministrationRoute;
  doseMg: number;
  timestampIso: string;
  unitLabel?: string;
}

export interface EntryClearanceSummary {
  entryId: string;
  compound: CannabinoidProfile;
  route: AdministrationRoute;
  doseMg: number;
  timestampIso: string;
  unitLabel?: string;
  hoursSinceDose: number;
  effectiveHalfLifeHours: number;
  currentTotalNgMl: number;
  currentImmunoassayNgMl: number;
  shareOfCurrentLoadPct: number;
  individualHoursFromNowToClear15: number;
}

export interface MultiDoseTimelinePoint {
  hoursFromNow: number;
  dayOffsetFromNow: number;
  timestampIso: string;
  combinedImmunoassayNgMl: number;
  combinedTotalMetaboliteNgMl: number;
  combinedBloodNgMl: number;
  perEntryImmunoNgMl: Record<string, number>;
  perEntryTotalNgMl: Record<string, number>;
}

export interface MultiDoseClearanceResult {
  bmi: number;
  estimatedBodyFatPct: number;
  referenceNowIso: string;
  currentImmunoassayNgMl: number;
  currentTotalMetaboliteNgMl: number;
  currentBloodNgMl: number;
  isCurrentlyClear50: boolean;
  isCurrentlyClear15: boolean;
  hoursFromNowToClear50: number;
  hoursFromNowToClear15: number;
  hoursFromNowToClearBlood: number;
  hoursFromNowToClearSaliva: number;
  clearDate50Iso: string;
  clearDate15Iso: string;
  clearDateBloodIso: string;
  clearDateSalivaIso: string;
  dominantCompoundShortName: string;
  dominantCompoundReason: string;
  entrySummaries: EntryClearanceSummary[];
  timelineSeries: MultiDoseTimelinePoint[];
}

/**
 * Multi-Cannabinoid Cumulative Superposition & Clearance Forecast Engine.
 * Evaluates any number of timestamped cannabinoid doses across different scaffolds,
 * routes, and 9H / 9-OH / 10-OH / 11-OH modifications, and calculates the exact
 * timestamp when the user will test negative again on 50 ng/mL and 15 ng/mL panels.
 */
export function simulateMultiDoseClearance(
  entries: DoseLogEntry[],
  anthropometrics: UserAnthropometrics,
  referenceNowIso?: string
): MultiDoseClearanceResult {
  const nowMs = referenceNowIso ? Date.parse(referenceNowIso) : Date.now();
  const safeNowMs = Number.isNaN(nowMs) ? Date.now() : nowMs;
  const safeNowIso = new Date(safeNowMs).toISOString();

  const bmi = calculateBMI(anthropometrics.weightKg, anthropometrics.heightCm);
  const estimatedBodyFatPct = estimateBodyFatPercentage(
    bmi,
    anthropometrics.ageYears,
    anthropometrics.biologicalSex,
    anthropometrics.activityLevel
  );

  if (entries.length === 0) {
    return {
      bmi,
      estimatedBodyFatPct,
      referenceNowIso: safeNowIso,
      currentImmunoassayNgMl: 0,
      currentTotalMetaboliteNgMl: 0,
      currentBloodNgMl: 0,
      isCurrentlyClear50: true,
      isCurrentlyClear15: true,
      hoursFromNowToClear50: 0,
      hoursFromNowToClear15: 0,
      hoursFromNowToClearBlood: 0,
      hoursFromNowToClearSaliva: 0,
      clearDate50Iso: safeNowIso,
      clearDate15Iso: safeNowIso,
      clearDateBloodIso: safeNowIso,
      clearDateSalivaIso: safeNowIso,
      dominantCompoundShortName: 'None Logged',
      dominantCompoundReason: 'Log one or more doses to compute cumulative clearance.',
      entrySummaries: [],
      timelineSeries: [
        {
          hoursFromNow: 0,
          dayOffsetFromNow: 0,
          timestampIso: safeNowIso,
          combinedImmunoassayNgMl: 0,
          combinedTotalMetaboliteNgMl: 0,
          combinedBloodNgMl: 0,
          perEntryImmunoNgMl: {},
          perEntryTotalNgMl: {},
        },
      ],
    };
  }

  const activityMultiplier =
    anthropometrics.activityLevel === 'athletic'
      ? 0.84
      : anthropometrics.activityLevel === 'sedentary'
      ? 1.18
      : 1.0;

  const hydrationMultiplier =
    anthropometrics.hydrationLevel === 'high'
      ? 0.92
      : anthropometrics.hydrationLevel === 'low'
      ? 1.12
      : 1.0;

  // Determine cumulative dosing density factor from baseline habit + number of recent logged events
  const baselineHabit = anthropometrics.priorHabitBaseline || 'single';
  const habitSaturationMult: Record<UsageFrequency, number> = {
    single: 0.78,
    occasional: 1.0,
    moderate: 1.35,
    daily: 1.85,
    heavy_chronic: 2.4,
  };
  const habitBetaBase: Record<UsageFrequency, number> = {
    single: 0.2,
    occasional: 0.32,
    moderate: 0.46,
    daily: 0.62,
    heavy_chronic: 0.75,
  };

  // Additional saturation from multiple logged events within the log
  const logDensityBoost = Math.min(0.65, Math.max(0, (entries.length - 1) * 0.09));
  const saturationMultiplier = habitSaturationMult[baselineHabit] + logDensityBoost;
  const weightVolumeFactor = Math.pow(75 / Math.max(40, anthropometrics.weightKg), 0.55);

  // Precompute kinetic parameters for each logged dose
  const preparedEntries = entries.map((entry) => {
    const baseCompound = getSubstanceById(entry.cannabinoidId);
    const compound = applyDerivativeModification(
      baseCompound,
      entry.derivativeMod || 'native'
    );
    const entryMs = Date.parse(entry.timestampIso);
    const safeEntryMs = Number.isNaN(entryMs) ? safeNowMs : entryMs;

    const isCannabinoid = isCannabinoidSubstance(compound);
    const logPFactor = isCannabinoid
      ? Math.max(0.62, compound.xLogP / 7.0)
      : Math.max(0.45, Math.min(1.0, (Math.max(0, compound.xLogP) + 2.5) / 6.5));
    const bodyFatMultiplier = isCannabinoid
      ? 1 + ((estimatedBodyFatPct - 22) / 100) * 1.45 * logPFactor
      : 1 + ((estimatedBodyFatPct - 22) / 100) * 0.25 * logPFactor;

    const adiposeRetentionIndex =
      bodyFatMultiplier *
      logPFactor *
      activityMultiplier *
      hydrationMultiplier;

    const effectiveHalfLifeHours = Math.max(
      isCannabinoid ? 10 : 3,
      Math.round(
        compound.terminalHalfLifeHours *
          (isCannabinoid ? adiposeRetentionIndex * saturationMultiplier * 0.65 : Math.min(1.45, saturationMultiplier * 0.9))
      )
    );

    // Route-specific urinary metabolite conversion & peak timing
    const routeMetaboliteYield =
      entry.route === 'oral'
        ? 1.25 // first-pass hepatic oxidation produces higher initial urinary carboxy/glucuronide peak
        : entry.route === 'sublingual'
        ? 1.08
        : 1.0;

    const kAbs =
      entry.route === 'inhalation'
        ? 1.15 // peaks within ~2-3h in urine
        : entry.route === 'sublingual'
        ? 0.65 // peaks within ~3.5-5h
        : 0.42; // oral peaks within ~5-7h

    // Peak urinary concentration (ng/mL) generated by this single logged dose
    const normalizedDoseRatio =
      Math.max(0.005, entry.doseMg) /
      Math.max(0.015, compound.baseOralThresholdMg * 2);
    const dosePeakNgMl =
      155 *
      Math.pow(normalizedDoseRatio, 0.58) *
      routeMetaboliteYield *
      weightVolumeFactor *
      adiposeRetentionIndex *
      (baselineHabit === 'single'
        ? 1.0
        : baselineHabit === 'occasional'
        ? 1.35
        : baselineHabit === 'moderate'
        ? 1.85
        : baselineHabit === 'daily'
        ? 2.6
        : 3.5);

    const kAlpha = Math.LN2 / Math.max(isCannabinoid ? 8 : 2.5, effectiveHalfLifeHours * 0.32);
    const kBeta = Math.LN2 / Math.max(isCannabinoid ? 16 : 4.5, effectiveHalfLifeHours);
    const fracBeta = isCannabinoid
      ? Math.min(
          0.82,
          habitBetaBase[baselineHabit] + Math.min(0.22, (entries.length - 1) * 0.04)
        )
      : Math.min(
          0.45,
          habitBetaBase[baselineHabit] * 0.5 + Math.min(0.15, (entries.length - 1) * 0.03)
        );
    const fracAlpha = 1 - fracBeta;

    const evalTotalUrineAtMs = (targetMs: number): number => {
      const deltaHours = (targetMs - safeEntryMs) / 3600000;
      if (deltaHours < 0) return 0;
      const absorption = 1 - Math.exp(-kAbs * (deltaHours + 0.35));
      const elimination =
        fracAlpha * Math.exp(-kAlpha * deltaHours) +
        fracBeta * Math.exp(-kBeta * deltaHours);
      return Math.max(0, dosePeakNgMl * absorption * elimination);
    };

    const evalImmunoUrineAtMs = (targetMs: number): number => {
      return (
        evalTotalUrineAtMs(targetMs) *
        (compound.immunoassayCrossReactivityPct / 100)
      );
    };

    const evalBloodAtMs = (targetMs: number): number => {
      const deltaHours = (targetMs - safeEntryMs) / 3600000;
      if (deltaHours < 0) return 0;
      const bloodHalfLife = Math.max(
        4,
        effectiveHalfLifeHours *
          (baselineHabit === 'daily' || baselineHabit === 'heavy_chronic'
            ? 0.28
            : 0.14)
      );
      const kBlood = Math.LN2 / bloodHalfLife;
      const absorption = 1 - Math.exp(-kAbs * 1.5 * (deltaHours + 0.25));
      return Math.max(0, dosePeakNgMl * 0.075 * absorption * Math.exp(-kBlood * deltaHours));
    };

    const evalSalivaAtMs = (targetMs: number): number => {
      const deltaHours = (targetMs - safeEntryMs) / 3600000;
      if (deltaHours < 0) return 0;
      const salivaHalfLife = entry.route === 'oral' ? 5.5 : 8.5;
      const kSaliva = Math.LN2 / salivaHalfLife;
      return Math.max(0, dosePeakNgMl * 0.09 * Math.exp(-kSaliva * deltaHours));
    };

    return {
      entry,
      compound,
      safeEntryMs,
      effectiveHalfLifeHours,
      evalTotalUrineAtMs,
      evalImmunoUrineAtMs,
      evalBloodAtMs,
      evalSalivaAtMs,
    };
  });

  const evalCombinedAtMs = (targetMs: number) => {
    let immuno = 0;
    let total = 0;
    let blood = 0;
    let saliva = 0;
    const perEntryImmuno: Record<string, number> = {};
    const perEntryTotal: Record<string, number> = {};

    for (const p of preparedEntries) {
      const iVal = p.evalImmunoUrineAtMs(targetMs);
      const tVal = p.evalTotalUrineAtMs(targetMs);
      const bVal = p.evalBloodAtMs(targetMs);
      const sVal = p.evalSalivaAtMs(targetMs);
      immuno += iVal;
      total += tVal;
      blood += bVal;
      saliva += sVal;
      perEntryImmuno[p.entry.id] = Math.round(iVal * 10) / 10;
      perEntryTotal[p.entry.id] = Math.round(tVal * 10) / 10;
    }

    return {
      immuno: Math.round(immuno * 10) / 10,
      total: Math.round(total * 10) / 10,
      blood: Math.round(blood * 100) / 100,
      saliva: Math.round(saliva * 100) / 100,
      perEntryImmuno,
      perEntryTotal,
    };
  };

  const nowSnapshot = evalCombinedAtMs(safeNowMs);

  // Scan forward from safeNowMs up to 120 days (2880 hours) to find exact hour when level permanently stays <= cutoff
  const maxScanHours = 24 * 120;
  let lastHourAbove50 = -1;
  let lastHourAbove15 = -1;
  let lastHourAboveBlood2 = -1;
  let lastHourAboveSaliva4 = -1;

  for (let h = 0; h <= maxScanHours; h += 1) {
    const tMs = safeNowMs + h * 3600000;
    const snap = evalCombinedAtMs(tMs);
    if (snap.immuno > 50) lastHourAbove50 = h;
    // Confirmatory 15 ng/mL checks either immunoassay cross-reactive or targeted LC-MS total metabolite
    if (Math.max(snap.immuno, snap.total) > 15) lastHourAbove15 = h;
    if (snap.blood > 2) lastHourAboveBlood2 = h;
    if (snap.saliva > 4) lastHourAboveSaliva4 = h;
  }

  const hoursFromNowToClear50 = lastHourAbove50 < 0 ? 0 : lastHourAbove50 + 1;
  const hoursFromNowToClear15 = lastHourAbove15 < 0 ? 0 : lastHourAbove15 + 1;
  const hoursFromNowToClearBlood =
    lastHourAboveBlood2 < 0 ? 0 : lastHourAboveBlood2 + 1;
  const hoursFromNowToClearSaliva =
    lastHourAboveSaliva4 < 0 ? 0 : lastHourAboveSaliva4 + 1;

  const clearDate50Iso = new Date(
    safeNowMs + hoursFromNowToClear50 * 3600000
  ).toISOString();
  const clearDate15Iso = new Date(
    safeNowMs + hoursFromNowToClear15 * 3600000
  ).toISOString();
  const clearDateBloodIso = new Date(
    safeNowMs + hoursFromNowToClearBlood * 3600000
  ).toISOString();
  const clearDateSalivaIso = new Date(
    safeNowMs + hoursFromNowToClearSaliva * 3600000
  ).toISOString();

  // Summarize each entry and identify dominant bottleneck compound
  let dominantCompoundShortName = preparedEntries[0].compound.shortName;
  let maxIndividualClearHours = -1;
  let dominantCompoundReason = '';

  const entrySummaries: EntryClearanceSummary[] = preparedEntries.map((p) => {
    const curTotal = Math.round(p.evalTotalUrineAtMs(safeNowMs) * 10) / 10;
    const curImmuno = Math.round(p.evalImmunoUrineAtMs(safeNowMs) * 10) / 10;
    const sharePct =
      nowSnapshot.total > 0
        ? Math.round((curTotal / nowSnapshot.total) * 100)
        : 0;

    let lastIndivAbove15 = -1;
    for (let h = 0; h <= maxScanHours; h += 2) {
      const tMs = safeNowMs + h * 3600000;
      if (p.evalTotalUrineAtMs(tMs) > 15) {
        lastIndivAbove15 = h;
      }
    }
    const indivHoursToClear15 =
      lastIndivAbove15 < 0 ? 0 : lastIndivAbove15 + 1;

    if (
      indivHoursToClear15 > maxIndividualClearHours ||
      (indivHoursToClear15 === maxIndividualClearHours &&
        curTotal > 0)
    ) {
      maxIndividualClearHours = indivHoursToClear15;
      dominantCompoundShortName = p.compound.shortName;
      dominantCompoundReason = `${p.compound.shortName} (XLogP ${p.compound.xLogP}, effective t½ ~${p.effectiveHalfLifeHours}h) governs the terminal elimination tail.`;
    }

    return {
      entryId: p.entry.id,
      compound: p.compound,
      route: p.entry.route,
      doseMg: p.entry.doseMg,
      timestampIso: p.entry.timestampIso,
      unitLabel: p.entry.unitLabel,
      hoursSinceDose:
        Math.round(((safeNowMs - p.safeEntryMs) / 3600000) * 10) / 10,
      effectiveHalfLifeHours: p.effectiveHalfLifeHours,
      currentTotalNgMl: curTotal,
      currentImmunoassayNgMl: curImmuno,
      shareOfCurrentLoadPct: sharePct,
      individualHoursFromNowToClear15: indivHoursToClear15,
    };
  });

  // Build timeline series spanning from earliest dose (clamped to -14 days before Now) to clearance tail after Now
  const earliestDoseMs = Math.min(...preparedEntries.map((p) => p.safeEntryMs));
  const startHoursFromNow = Math.max(
    -24 * 14,
    Math.min(0, Math.floor((earliestDoseMs - safeNowMs) / 3600000) - 2)
  );
  const endHoursFromNow = Math.max(
    72,
    Math.min(24 * 90, Math.ceil(hoursFromNowToClear15 * 1.18) + 24)
  );

  const totalSpanHours = endHoursFromNow - startHoursFromNow;
  const numSteps = 40;
  const timelineSeries: MultiDoseTimelinePoint[] = [];

  for (let i = 0; i <= numSteps; i++) {
    const hFromNow =
      startHoursFromNow + (i / numSteps) * totalSpanHours;
    const tMs = safeNowMs + hFromNow * 3600000;
    const snap = evalCombinedAtMs(tMs);
    timelineSeries.push({
      hoursFromNow: Math.round(hFromNow * 10) / 10,
      dayOffsetFromNow: Math.round((hFromNow / 24) * 10) / 10,
      timestampIso: new Date(tMs).toISOString(),
      combinedImmunoassayNgMl: snap.immuno,
      combinedTotalMetaboliteNgMl: snap.total,
      combinedBloodNgMl: snap.blood,
      perEntryImmunoNgMl: snap.perEntryImmuno,
      perEntryTotalNgMl: snap.perEntryTotal,
    });
  }

  // Ensure exact T = 0 (Now) point is included in sorted order
  if (!timelineSeries.some((pt) => Math.abs(pt.hoursFromNow) < 0.2)) {
    timelineSeries.push({
      hoursFromNow: 0,
      dayOffsetFromNow: 0,
      timestampIso: safeNowIso,
      combinedImmunoassayNgMl: nowSnapshot.immuno,
      combinedTotalMetaboliteNgMl: nowSnapshot.total,
      combinedBloodNgMl: nowSnapshot.blood,
      perEntryImmunoNgMl: nowSnapshot.perEntryImmuno,
      perEntryTotalNgMl: nowSnapshot.perEntryTotal,
    });
    timelineSeries.sort((a, b) => a.hoursFromNow - b.hoursFromNow);
  }

  return {
    bmi,
    estimatedBodyFatPct,
    referenceNowIso: safeNowIso,
    currentImmunoassayNgMl: nowSnapshot.immuno,
    currentTotalMetaboliteNgMl: nowSnapshot.total,
    currentBloodNgMl: nowSnapshot.blood,
    isCurrentlyClear50: hoursFromNowToClear50 === 0,
    isCurrentlyClear15: hoursFromNowToClear15 === 0,
    hoursFromNowToClear50,
    hoursFromNowToClear15,
    hoursFromNowToClearBlood,
    hoursFromNowToClearSaliva,
    clearDate50Iso,
    clearDate15Iso,
    clearDateBloodIso,
    clearDateSalivaIso,
    dominantCompoundShortName,
    dominantCompoundReason,
    entrySummaries,
    timelineSeries,
  };
}

export type VapeVoltageTier = 'low' | 'medium' | 'high';

/**
 * Calculates inhaled cannabinoid milligrams (mg) based on vape hit duration (0–10 seconds),
 * number of puffs, distillate concentration (%), and coil voltage tier.
 * Models thermal coil ramp-up (0–1s), steady-state vaporization (1–5s), and high-temp deep draw (5–10s).
 */
export function calculateVapeDrawDoseMg(
  drawSeconds: number,
  puffCount: number = 1,
  distillatePurityPct: number = 90,
  voltageTier: VapeVoltageTier = 'medium'
): number {
  const clampedSec = Math.max(0, Math.min(10, drawSeconds));
  const clampedPuffs = Math.max(0, Math.min(50, puffCount));
  const clampedPurity = Math.max(5, Math.min(99.9, distillatePurityPct)) / 100;

  if (clampedSec === 0 || clampedPuffs === 0) {
    return 0;
  }

  // Three-phase ceramic coil aerosolization physics (mg of raw oil vaporized per puff)
  // Phase 1 (0 - 1.0s): coil heating ramp-up (~0.22 mg/s)
  const phase1Sec = Math.min(1.0, clampedSec);
  // Phase 2 (1.0 - 5.0s): steady-state laminar draw (~0.52 mg/s)
  const phase2Sec = Math.max(0, Math.min(4.0, clampedSec - 1.0));
  // Phase 3 (5.0 - 10.0s): saturated high-temp blinker draw (~0.68 mg/s)
  const phase3Sec = Math.max(0, clampedSec - 5.0);

  const rawOilMgPerPuff =
    phase1Sec * 0.22 + phase2Sec * 0.52 + phase3Sec * 0.68;

  const voltageMult: Record<VapeVoltageTier, number> = {
    low: 0.76, // 2.4V - 2.7V terpene/flavor setting
    medium: 1.0, // 2.8V - 3.2V standard setting
    high: 1.32, // 3.4V - 4.0V cloud/high-output setting
  };

  const totalActiveMg =
    rawOilMgPerPuff *
    voltageMult[voltageTier] *
    clampedPurity *
    clampedPuffs;

  return Math.round(totalActiveMg * 100) / 100;
}

/**
 * Given a target milligram dose, estimates a practical vape puff count and draw duration (0–10s)
 * at a given distillate concentration (%) and voltage setting.
 */
export function estimateVapeHitsForTargetMg(
  targetMg: number,
  distillatePurityPct: number = 90,
  voltageTier: VapeVoltageTier = 'medium'
): { puffs: number; secondsPerPuff: number; description: string } {
  if (targetMg <= 0) {
    return { puffs: 0, secondsPerPuff: 0, description: '0s (0 mg)' };
  }

  // Test single puff from 0.5s to 6.0s in 0.5s steps for micro/low doses
  for (let sec = 0.5; sec <= 6.0; sec += 0.5) {
    const mg = calculateVapeDrawDoseMg(sec, 1, distillatePurityPct, voltageTier);
    if (mg >= targetMg * 0.92) {
      return {
        puffs: 1,
        secondsPerPuff: sec,
        description: `1 puff × ${sec.toFixed(1)}s hit`,
      };
    }
  }

  // Otherwise use standard 3.5s draws or 5.0s deep draws across multiple puffs
  const single35Mg = Math.max(
    0.2,
    calculateVapeDrawDoseMg(3.5, 1, distillatePurityPct, voltageTier)
  );
  const puffsNeeded = Math.max(1, Math.round(targetMg / single35Mg));
  if (puffsNeeded <= 8) {
    const exactSec = Math.min(
      10,
      Math.max(1.5, Math.round(((targetMg / puffsNeeded) / single35Mg) * 3.5 * 2) / 2)
    );
    return {
      puffs: puffsNeeded,
      secondsPerPuff: exactSec,
      description: `${puffsNeeded} puff${puffsNeeded > 1 ? 's' : ''} × ${exactSec.toFixed(1)}s hit`,
    };
  }

  const single60Mg = Math.max(
    0.4,
    calculateVapeDrawDoseMg(6.0, 1, distillatePurityPct, voltageTier)
  );
  const deepPuffs = Math.max(1, Math.round(targetMg / single60Mg));
  return {
    puffs: deepPuffs,
    secondsPerPuff: 6.0,
    description: `${deepPuffs} puffs × 6.0s deep hit`,
  };
}

export interface PortableSyncPayload {
  version: 1;
  exportedAtIso: string;
  profile: UserAnthropometrics;
  entries: DoseLogEntry[];
}

export function encodePortableSyncToken(
  profile: UserAnthropometrics,
  entries: DoseLogEntry[]
): string {
  const payload: PortableSyncPayload = {
    version: 1,
    exportedAtIso: new Date().toISOString(),
    profile,
    entries,
  };
  const json = JSON.stringify(payload);
  if (typeof Buffer !== 'undefined') {
    return `CP1:${Buffer.from(json, 'utf-8').toString('base64')}`;
  }
  return `CP1:${btoa(encodeURIComponent(json))}`;
}

export function decodePortableSyncToken(
  token: string
): PortableSyncPayload | null {
  try {
    const trimmed = token.trim();
    const rawBase64 = trimmed.startsWith('CP1:') ? trimmed.slice(4) : trimmed;
    let json = '';
    if (typeof Buffer !== 'undefined') {
      json = Buffer.from(rawBase64, 'base64').toString('utf-8');
    } else {
      try {
        json = decodeURIComponent(atob(rawBase64));
      } catch {
        json = atob(rawBase64);
      }
    }
    const parsed = JSON.parse(json);
    if (
      parsed &&
      parsed.profile &&
      typeof parsed.profile.weightKg === 'number' &&
      Array.isArray(parsed.entries)
    ) {
      return parsed as PortableSyncPayload;
    }
    return null;
  } catch {
    return null;
  }
}


