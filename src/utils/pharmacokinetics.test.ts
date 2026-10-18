import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateBMI,
  estimateBodyFatPercentage,
  calculatePersonalizedDosage,
  calculateVapeDrawDoseMg,
  decodePortableSyncToken,
  DEFAULT_ROA,
  DEFAULT_USER_PROFILE,
  encodePortableSyncToken,
  estimateVapeHitsForTargetMg,
  simulateClearanceKinetics,
  simulateMultiDoseClearance,
} from './pharmacokinetics.ts';
import {
  applyDerivativeModification,
  CANNABINOID_DATABASE,
  getCannabinoidById,
} from '../data/cannabinoids.ts';

test('cannabinoid database contains all 28 core phyto, 9H- enriched, 9-OH/10-OH/11-OH hydroxylated, semi-synthetic, and synthetic profiles', () => {
  assert.equal(CANNABINOID_DATABASE.length, 28);

  // Verify 9H- Enriched Series entries across HHCP/THCP, HHC/THC, THCH, THCB, THCV, and CBD
  const nineHHhcp = getCannabinoidById('9h-hhcp');
  const nineHHhc = getCannabinoidById('9h-hhc');
  const nineHThch = getCannabinoidById('9h-thch');
  const nineHThcb = getCannabinoidById('9h-thcb');
  const nineHThcv = getCannabinoidById('9h-thcv');
  const nineHCbd = getCannabinoidById('h4cbd');

  assert.equal(nineHHhcp.classification, '9H- Enriched Series');
  assert.equal(nineHHhc.classification, '9H- Enriched Series');
  assert.equal(nineHThch.classification, '9H- Enriched Series');
  assert.equal(nineHThcb.classification, '9H- Enriched Series');
  assert.equal(nineHThcv.classification, '9H- Enriched Series');
  assert.equal(nineHCbd.classification, '9H- Enriched Series');

  // Verify 9-OH / 10-OH / 8-OH / 11-OH Hydroxylated Series entries across THC, THCP, THCH, and HHC
  const nineOhThc = getCannabinoidById('9-oh-thc');
  const nineOhThcp = getCannabinoidById('9-oh-thcp');
  const tenOhHhc = getCannabinoidById('10-oh-hhc');
  const tenOhHhcp = getCannabinoidById('10-oh-hhcp');
  const tenOhThch = getCannabinoidById('10-oh-thch');
  const eightOhHhc = getCannabinoidById('8-oh-hhc');
  const elevenOhThc = getCannabinoidById('11-oh-thc');

  assert.equal(nineOhThc.classification, '9-OH / 10-OH / 11-OH Series');
  assert.equal(nineOhThcp.classification, '9-OH / 10-OH / 11-OH Series');
  assert.equal(tenOhHhc.classification, '9-OH / 10-OH / 11-OH Series');
  assert.equal(tenOhHhcp.classification, '9-OH / 10-OH / 11-OH Series');
  assert.equal(tenOhThch.classification, '9-OH / 10-OH / 11-OH Series');
  assert.equal(eightOhHhc.classification, '9-OH / 10-OH / 11-OH Series');
  assert.equal(elevenOhThc.classification, '9-OH / 10-OH / 11-OH Series');
});

test('universal applyDerivativeModification generates 9H-, 9-OH-, 10-OH-, 8-OH-, 11-OH-, and O-Acetate analogs for ANY cannabinoid', () => {
  for (const base of CANNABINOID_DATABASE) {
    const mod9h = applyDerivativeModification(base, '9h');
    const mod9oh = applyDerivativeModification(base, '9-oh');
    const mod10oh = applyDerivativeModification(base, '10-oh');
    const mod8oh = applyDerivativeModification(base, '8-oh');
    const mod11oh = applyDerivativeModification(base, '11-oh');
    const modOac = applyDerivativeModification(base, 'o-acetate');

    assert.ok(mod9h.shortName.length > 0);
    assert.ok(mod9oh.shortName.startsWith('9-OH-'));
    assert.ok(mod10oh.shortName.startsWith('10-OH-'));
    assert.ok(mod8oh.shortName.startsWith('8-OH-'));
    assert.ok(mod11oh.shortName.startsWith('11-OH-'));
    assert.ok(modOac.shortName.endsWith('-O'));

    // Hydroxylated 9-OH and 10-OH forms always have lower lipophilicity (xLogP) and shorter half-life than base
    assert.ok(mod9oh.xLogP < base.xLogP);
    assert.ok(mod10oh.xLogP < base.xLogP);
    assert.ok(mod9oh.terminalHalfLifeHours <= base.terminalHalfLifeHours);
  }

  // Verify dynamic ID resolution through getCannabinoidById for arbitrary cannabinoids (e.g. THCV, CBN, CBG)
  const nineHThcv = getCannabinoidById('thcv-mod-9h');
  const nineOhCbn = getCannabinoidById('cbn-mod-9oh');
  const tenOhCbg = getCannabinoidById('cbg-mod-10oh');
  assert.equal(nineHThcv.shortName, '9H-THCV');
  assert.equal(nineOhCbn.shortName, '9-OH-CBN');
  assert.equal(tenOhCbg.shortName, '10-OH-CBG');
});

test('calculateBMI and estimateBodyFatPercentage produce accurate anthropometric values', () => {
  const bmi = calculateBMI(75, 180);
  assert.equal(bmi, 23.1);

  const maleBf = estimateBodyFatPercentage(bmi, 30, 'male', 'moderate');
  const femaleBf = estimateBodyFatPercentage(bmi, 30, 'female', 'moderate');
  assert.ok(femaleBf > maleBf, 'Female baseline body fat at identical BMI/age is higher');
});

test('calculatePersonalizedDosage scales properly for 9H-HHCP, 9-OH-THCP, dynamic 9-OH-THCV, and health flags', () => {
  const naive9hHhcp = calculatePersonalizedDosage({
    cannabinoidId: '9h-hhcp',
    route: 'oral',
    tolerance: 'naive',
    weightKg: 70,
    ageYears: 30,
    coAdministerCbdRatio: 'none',
    healthFlags: {
      cardiovascularSensitivity: false,
      anxietyOrPsychiatricHistory: false,
      hepaticCypSlowMetabolizer: false,
      respiratorySensitivity: false,
    },
  });

  assert.ok(
    naive9hHhcp.lowMg <= 0.2,
    '9H-HHCP low oral dose for naive user must be <= 0.2 mg'
  );
  assert.ok(
    naive9hHhcp.clinicalAdvisories.some((a) => a.includes('9H Stereoselective')),
    '9H-HHCP must surface 9R stereoselective enrichment clinical advisory'
  );

  const dynamicOral9OhThcv = calculatePersonalizedDosage({
    cannabinoidId: 'thcv-mod-9oh',
    route: 'oral',
    tolerance: 'occasional',
    weightKg: 70,
    ageYears: 30,
    coAdministerCbdRatio: 'none',
    healthFlags: {
      cardiovascularSensitivity: false,
      anxietyOrPsychiatricHistory: false,
      hepaticCypSlowMetabolizer: false,
      respiratorySensitivity: false,
    },
  });

  assert.ok(
    dynamicOral9OhThcv.clinicalAdvisories.some((a) =>
      a.includes('Phase II Kinetics')
    ),
    'Dynamic 9-OH-THCV must surface Phase II UGT glucuronidation advisory'
  );
});

test('simulateClearanceKinetics models faster clearance for 9-OH / 10-OH derivatives vs 9H- derivatives across any scaffold', () => {
  const nineOhThcpDaily = simulateClearanceKinetics({
    cannabinoidId: '9-oh-thcp',
    frequency: 'daily',
    lastDoseMg: 10,
    weightKg: 78,
    heightCm: 175,
    ageYears: 32,
    biologicalSex: 'male',
    activityLevel: 'moderate',
    hydrationLevel: 'normal',
  });

  const nineHHhcpDaily = simulateClearanceKinetics({
    cannabinoidId: '9h-hhcp',
    frequency: 'daily',
    lastDoseMg: 10,
    weightKg: 78,
    heightCm: 175,
    ageYears: 32,
    biologicalSex: 'male',
    activityLevel: 'moderate',
    hydrationLevel: 'normal',
  });

  assert.ok(
    nineHHhcpDaily.windows.urine15.estimatedHoursToClear >
      nineOhThcpDaily.windows.urine15.estimatedHoursToClear * 1.5,
    '9H-HHCP takes significantly longer to clear than polar 9-OH-THCP'
  );
});

test('simulateMultiDoseClearance superimposes multiple cannabinoids at different timestamps and predicts exact negative test dates', () => {
  const refNow = '2026-10-18T12:00:00.000Z';
  const refNowMs = Date.parse(refNow);

  const profile = {
    weightKg: 78,
    heightCm: 176,
    ageYears: 29,
    biologicalSex: 'male' as const,
    activityLevel: 'moderate' as const,
    hydrationLevel: 'normal' as const,
    priorHabitBaseline: 'single' as const,
  };

  // Single polar 10-OH-HHC dose taken 18h ago
  const singleDoseSim = simulateMultiDoseClearance(
    [
      {
        id: 'e1',
        cannabinoidId: '10-oh-hhc',
        derivativeMod: 'native',
        route: 'oral',
        doseMg: 15,
        timestampIso: new Date(refNowMs - 18 * 3600000).toISOString(),
      },
    ],
    profile,
    refNow
  );

  // Multi-cannabinoid log adding 9H-HHCP (36h ago) + Delta-9-THC (4h ago) on top of 10-OH-HHC
  const multiDoseSim = simulateMultiDoseClearance(
    [
      {
        id: 'e1',
        cannabinoidId: '10-oh-hhc',
        derivativeMod: 'native',
        route: 'oral',
        doseMg: 15,
        timestampIso: new Date(refNowMs - 18 * 3600000).toISOString(),
      },
      {
        id: 'e2',
        cannabinoidId: '9h-hhcp',
        derivativeMod: 'native',
        route: 'inhalation',
        doseMg: 2.5,
        timestampIso: new Date(refNowMs - 36 * 3600000).toISOString(),
      },
      {
        id: 'e3',
        cannabinoidId: 'delta9-thc',
        derivativeMod: '9h', // Dynamic 9H-THC derivative logged!
        route: 'inhalation',
        doseMg: 8,
        timestampIso: new Date(refNowMs - 4 * 3600000).toISOString(),
      },
    ],
    profile,
    refNow
  );

  assert.equal(multiDoseSim.entrySummaries.length, 3);
  assert.ok(
    multiDoseSim.currentImmunoassayNgMl > singleDoseSim.currentImmunoassayNgMl,
    'Combined multi-cannabinoid log must produce higher current urinary level than single dose'
  );
  assert.ok(
    multiDoseSim.hoursFromNowToClear15 > singleDoseSim.hoursFromNowToClear15,
    'Adding 9H-HHCP and 9H-THC extends time to test negative (<15 ng/mL)'
  );
  assert.ok(
    Date.parse(multiDoseSim.clearDate15Iso) > refNowMs,
    'Clear date for 15 ng/mL must be in the future'
  );
  assert.equal(
    multiDoseSim.dominantCompoundShortName,
    '9H-HHCP',
    '9H-HHCP should be identified as the dominant limiting bottleneck compound'
  );
});

test('calculateVapeDrawDoseMg (0-10s vape hit physics) and portable sync token roundtrip work accurately', () => {
  assert.equal(calculateVapeDrawDoseMg(0, 2, 90, 'medium'), 0);

  const shortHit = calculateVapeDrawDoseMg(2.0, 1, 90, 'medium');
  const normalHit = calculateVapeDrawDoseMg(4.0, 1, 90, 'medium');
  const blinkerHit = calculateVapeDrawDoseMg(10.0, 1, 90, 'medium');
  const highVoltBlinker = calculateVapeDrawDoseMg(10.0, 1, 90, 'high');

  assert.ok(shortHit > 0.5 && shortHit < 1.2);
  assert.ok(normalHit > shortHit * 2);
  assert.ok(blinkerHit > normalHit * 2.5);
  assert.ok(highVoltBlinker > blinkerHit);

  // Portable Cross-Device Sync Token roundtrip
  const profile = {
    weightKg: 82,
    heightCm: 181,
    ageYears: 27,
    biologicalSex: 'male' as const,
    activityLevel: 'athletic' as const,
    hydrationLevel: 'high' as const,
    priorHabitBaseline: 'occasional' as const,
  };
  const entries = [
    {
      id: 'sync-1',
      cannabinoidId: '9h-hhcp',
      derivativeMod: 'native' as const,
      route: 'inhalation' as const,
      doseMg: blinkerHit,
      timestampIso: '2026-10-18T10:00:00.000Z',
      unitLabel: '1 Puff × 10s Blinker',
    },
  ];
  const token = encodePortableSyncToken(profile, entries);
  assert.ok(token.startsWith('CP1:'));
  const decoded = decodePortableSyncToken(token);
  assert.ok(decoded !== null);
  assert.equal(decoded.profile.weightKg, 82);
  assert.equal(decoded.entries.length, 1);
  assert.equal(decoded.entries[0].doseMg, blinkerHit);
});

test('personal baseline profile (55kg, 172cm, male, sedentary, vaping ROA) calibrates BMI, body fat, and dosage accurately', () => {
  assert.equal(DEFAULT_ROA, 'inhalation');
  assert.equal(DEFAULT_USER_PROFILE.weightKg, 55);
  assert.equal(DEFAULT_USER_PROFILE.heightCm, 172);
  assert.equal(DEFAULT_USER_PROFILE.biologicalSex, 'male');
  assert.equal(DEFAULT_USER_PROFILE.activityLevel, 'sedentary');

  const bmi = calculateBMI(
    DEFAULT_USER_PROFILE.weightKg,
    DEFAULT_USER_PROFILE.heightCm
  );
  assert.equal(bmi, 18.6);

  const dosage = calculatePersonalizedDosage({
    cannabinoidId: 'delta9-thc',
    route: DEFAULT_ROA,
    tolerance: 'occasional',
    weightKg: DEFAULT_USER_PROFILE.weightKg,
    heightCm: DEFAULT_USER_PROFILE.heightCm,
    ageYears: DEFAULT_USER_PROFILE.ageYears,
    biologicalSex: DEFAULT_USER_PROFILE.biologicalSex,
    activityLevel: DEFAULT_USER_PROFILE.activityLevel,
    coAdministerCbdRatio: 'none',
    healthFlags: {
      cardiovascularSensitivity: false,
      anxietyOrPsychiatricHistory: false,
      hepaticCypSlowMetabolizer: false,
      respiratorySensitivity: false,
    },
  });

  assert.ok(
    dosage.clinicalAdvisories.some((a) =>
      a.includes('Lean Body Mass Calibration (55 kg')
    ),
    'Should include 55 kg lean body mass calibration advisory'
  );
  assert.ok(
    dosage.clinicalAdvisories.some((a) =>
      a.includes('Sedentary / Stay-at-Home Baseline')
    ),
    'Should include sedentary stay-at-home metabolism advisory'
  );
});



