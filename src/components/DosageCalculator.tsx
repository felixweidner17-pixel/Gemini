import React, { useEffect, useState } from 'react';
import {
  CANNABINOID_DATABASE,
  CannabinoidProfile,
  getCannabinoidById,
  getSubstanceMacroCategory,
  isCannabinoidSubstance,
} from '../data/cannabinoids';
import {
  AdministrationRoute,
  calculateBMI,
  calculatePersonalizedDosage,
  calculateVapeDrawDoseMg,
  DEFAULT_ROA,
  DEFAULT_USER_PROFILE,
  estimateBodyFatPercentage,
  estimateVapeHitsForTargetMg,
  HealthProfileFlags,
  ToleranceLevel,
  VapeVoltageTier,
} from '../utils/pharmacokinetics';
import { AlertTriangle, ShieldAlert } from 'lucide-react';
import {
  CannabinoidSelect,
  CustomOptionSelect,
} from './CannabinoidSelect';

interface DosageCalculatorProps {
  selectedCannabinoidId: string;
  onSelectCannabinoid: (id: string) => void;
}

export const DosageCalculator: React.FC<DosageCalculatorProps> = ({
  selectedCannabinoidId,
  onSelectCannabinoid,
}) => {
  const [route, setRoute] = useState<AdministrationRoute>(DEFAULT_ROA);
  const [tolerance, setTolerance] = useState<ToleranceLevel>('occasional');
  const [weightKg, setWeightKg] = useState<number>(
    DEFAULT_USER_PROFILE.weightKg
  );
  const [heightCm, setHeightCm] = useState<number>(
    DEFAULT_USER_PROFILE.heightCm
  );
  const [ageYears, setAgeYears] = useState<number>(
    DEFAULT_USER_PROFILE.ageYears
  );
  const [activityLevel, setActivityLevel] = useState<
    'sedentary' | 'moderate' | 'athletic'
  >(DEFAULT_USER_PROFILE.activityLevel);
  const [coAdministerCbdRatio, setCoAdministerCbdRatio] = useState<
    'none' | '1:1' | '2:1_cbd_dominant'
  >('none');

  // 0-10s Vape Draw Simulator state for Dosage Guide
  const [vapeSimSeconds, setVapeSimSeconds] = useState<number>(3.0);
  const [vapeSimPuffs, setVapeSimPuffs] = useState<number>(1);
  const [vapeSimPurityPct, setVapeSimPurityPct] = useState<number>(90);
  const [vapeSimVoltage, setVapeSimVoltage] =
    useState<VapeVoltageTier>('medium');

  const [healthFlags, setHealthFlags] = useState<HealthProfileFlags>({
    cardiovascularSensitivity: false,
    anxietyOrPsychiatricHistory: false,
    hepaticCypSlowMetabolizer: false,
    respiratorySensitivity: false,
  });

  const compound: CannabinoidProfile = getCannabinoidById(selectedCannabinoidId);
  const isCannabinoid = isCannabinoidSubstance(compound);
  const macroCategory = getSubstanceMacroCategory(compound.classification);

  useEffect(() => {
    if (!isCannabinoidSubstance(compound)) {
      if (compound.id === 'ketamine' || compound.id === 'cocaine') {
        setRoute('sublingual');
      } else {
        setRoute('oral');
      }
    }
  }, [compound.id]);

  const currentBmi = calculateBMI(weightKg, heightCm);
  const currentBodyFat = estimateBodyFatPercentage(
    currentBmi,
    ageYears,
    'male',
    activityLevel
  );
  const result = calculatePersonalizedDosage({
    cannabinoidId: selectedCannabinoidId,
    route,
    tolerance,
    weightKg,
    heightCm,
    ageYears,
    biologicalSex: 'male',
    activityLevel,
    coAdministerCbdRatio,
    healthFlags,
  });

  const simulatedVapeMg = calculateVapeDrawDoseMg(
    vapeSimSeconds,
    vapeSimPuffs,
    vapeSimPurityPct,
    vapeSimVoltage
  );
  const lowVapeEq = estimateVapeHitsForTargetMg(
    result.lowMg,
    vapeSimPurityPct,
    vapeSimVoltage
  );
  const modVapeEq = estimateVapeHitsForTargetMg(
    result.moderateMg,
    vapeSimPurityPct,
    vapeSimVoltage
  );

  const toggleFlag = (key: keyof HealthProfileFlags) => {
    setHealthFlags((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleReset = () => {
    setRoute(DEFAULT_ROA);
    setTolerance('occasional');
    setWeightKg(DEFAULT_USER_PROFILE.weightKg);
    setHeightCm(DEFAULT_USER_PROFILE.heightCm);
    setAgeYears(DEFAULT_USER_PROFILE.ageYears);
    setActivityLevel(DEFAULT_USER_PROFILE.activityLevel);
    setCoAdministerCbdRatio('none');
    setVapeSimSeconds(3.0);
    setVapeSimPuffs(1);
    setVapeSimPurityPct(90);
    setVapeSimVoltage('medium');
    setHealthFlags({
      cardiovascularSensitivity: false,
      anxietyOrPsychiatricHistory: false,
      hepaticCypSlowMetabolizer: false,
      respiratorySensitivity: false,
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-start">
      {/* Right 7 Cols on Desktop, Shown FIRST on Mobile for instant iOS 27 Dosing Readout */}
      <div className="lg:col-span-7 lg:order-2 space-y-4 sm:space-y-5">
        <div className="ios-card p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-200/70">
            <div>
              <div className="text-[11px] font-mono font-semibold text-[#007AFF] uppercase break-words leading-tight">
                Regimen · {compound.shortName} ·{' '}
                {route === 'inhalation'
                  ? isCannabinoid
                    ? 'Vaping'
                    : 'Inhaled'
                  : route === 'sublingual' && !isCannabinoid
                  ? 'Sublingual / Nasal'
                  : route}{' '}
                · {weightKg}kg / {heightCm}cm
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-0.5 break-words">
                Dosage Guide
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-1.5">
              <div className="text-xs font-mono text-slate-700 bg-[#F2F2F7] px-3 py-1 rounded-full break-words">
                BMI {currentBmi} · {currentBodyFat}% Fat
              </div>
              <div className="text-xs font-mono text-slate-600 bg-[#F2F2F7] px-3 py-1 rounded-full break-words">
                Scale:{' '}
                <span className="font-bold text-slate-900">
                  {Math.round(Math.pow(weightKg / 70, 0.65) * 100)}%
                </span>
              </div>
            </div>
          </div>

          {/* 4-Column Apple Health Dosage Tier Matrix */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3.5 py-4 border-b border-slate-200/70">
            <div className="p-3.5 bg-[#F2F2F7] rounded-[20px]">
              <div className="text-[11px] uppercase font-mono font-semibold text-slate-500 break-words leading-tight">
                {isCannabinoid ? 'Micro' : 'Threshold'}
              </div>
              <div className="mt-1.5 flex items-baseline">
                <span
                  data-testid="dose-micro"
                  className="text-xl sm:text-2xl font-mono font-bold text-slate-900 tabular-nums"
                >
                  {result.microMg}
                </span>
                <span className="text-xs font-mono text-slate-500 ml-1">mg</span>
              </div>
              <p className="text-[11px] font-mono text-slate-500 mt-1 break-words leading-tight">
                {isCannabinoid
                  ? estimateVapeHitsForTargetMg(
                      result.microMg,
                      vapeSimPurityPct,
                      vapeSimVoltage
                    ).description
                  : 'Sub-perceptual / threshold'}
              </p>
            </div>

            <div className="p-3.5 bg-blue-50/70 border border-blue-200 rounded-[20px]">
              <div className="text-[11px] uppercase font-mono text-[#007AFF] font-bold break-words leading-tight">
                Low
              </div>
              <div className="mt-1.5 flex items-baseline">
                <span
                  data-testid="dose-low"
                  className="text-xl sm:text-2xl font-mono font-bold text-[#007AFF] tabular-nums"
                >
                  {result.lowMg}
                </span>
                <span className="text-xs font-mono text-blue-700 ml-1">mg</span>
              </div>
              <p className="text-[11px] font-mono text-slate-700 mt-1 break-words leading-tight">
                {isCannabinoid ? lowVapeEq.description : 'Light / starting dose'}
              </p>
            </div>

            <div className="p-3.5 bg-[#F2F2F7] rounded-[20px]">
              <div className="text-[11px] uppercase font-mono font-semibold text-slate-500 break-words leading-tight">
                Moderate
              </div>
              <div className="mt-1.5 flex items-baseline">
                <span
                  data-testid="dose-moderate"
                  className="text-xl sm:text-2xl font-mono font-bold text-slate-900 tabular-nums"
                >
                  {result.moderateMg}
                </span>
                <span className="text-xs font-mono text-slate-500 ml-1">mg</span>
              </div>
              <p className="text-[11px] font-mono text-slate-500 mt-1 break-words leading-tight">
                {isCannabinoid ? modVapeEq.description : 'Common / standard dose'}
              </p>
            </div>

            <div className="p-3.5 bg-amber-50/70 border border-amber-200 rounded-[20px]">
              <div className="text-[11px] uppercase font-mono font-bold text-amber-900 break-words leading-tight">
                High
              </div>
              <div className="mt-1.5 flex items-baseline">
                <span
                  data-testid="dose-strong"
                  className="text-xl sm:text-2xl font-mono font-bold text-amber-800 tabular-nums"
                >
                  {result.strongMg}
                </span>
                <span className="text-xs font-mono text-amber-700 ml-1">mg</span>
              </div>
              <p className="text-[11px] font-mono text-amber-800 mt-1 break-words leading-tight">
                Ceiling: {result.safetyCeilingMg} mg max
              </p>
            </div>
          </div>

          {/* Pharmacokinetic Onset, Peak, and Duration Windows */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 py-4 border-b border-slate-200/70">
            <div className="p-2.5 sm:p-3 bg-[#F2F2F7] rounded-2xl">
              <span className="text-[10px] sm:text-xs uppercase font-mono text-slate-500 block">
                Onset
              </span>
              <span className="text-xs sm:text-lg font-mono font-bold text-slate-900 tabular-nums break-words leading-tight block mt-0.5">
                {result.onsetMinutes[0]}–{result.onsetMinutes[1]} min
              </span>
              <span className="text-[10px] sm:text-[11px] text-slate-500 block mt-1 break-words leading-tight">
                Wait {result.onsetMinutes[1] + 30}m to redose
              </span>
            </div>
            <div className="p-2.5 sm:p-3 bg-[#F2F2F7] rounded-2xl">
              <span className="text-[10px] sm:text-xs uppercase font-mono text-slate-500 block">
                Peak
              </span>
              <span className="text-xs sm:text-lg font-mono font-bold text-slate-900 tabular-nums break-words leading-tight block mt-0.5">
                {result.peakMinutes[0]}–{result.peakMinutes[1]} min
              </span>
              <span className="text-[10px] sm:text-[11px] text-slate-500 block mt-1 break-words leading-tight">
                {isCannabinoid ? 'Max CB1 occupancy' : 'Peak plasma Cmax'}
              </span>
            </div>
            <div className="p-2.5 sm:p-3 bg-[#F2F2F7] rounded-2xl">
              <span className="text-[10px] sm:text-xs uppercase font-mono text-slate-500 block">
                Duration
              </span>
              <span className="text-xs sm:text-lg font-mono font-bold text-slate-900 tabular-nums break-words leading-tight block mt-0.5">
                {result.durationHours[0]}–{result.durationHours[1]} hrs
              </span>
              <span className="text-[10px] sm:text-[11px] text-slate-500 block mt-1 break-words leading-tight">
                +{Math.round(result.durationHours[1] * 0.4)}h afterglow
              </span>
            </div>
          </div>

          {/* Clinical Advisories & Contraindication Output */}
          <div className="pt-4 space-y-2.5">
            <h4 className="text-xs font-bold uppercase font-mono text-slate-700 flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-[#007AFF]" />
              <span>Safety Notes</span>
            </h4>
            {result.clinicalAdvisories.length === 0 ? (
              <p className="text-xs text-slate-600 bg-[#F2F2F7] rounded-2xl p-3.5">
                No special contraindication flags active. Standard harm-reduction protocol applies: start at the Low tier ({result.lowMg} mg) and do not stack doses prior to peak plasma window ({result.peakMinutes[1]} min).
              </p>
            ) : (
              <ul className="space-y-2">
                {result.clinicalAdvisories.map((adv, idx) => (
                  <li
                    key={idx}
                    className="p-3.5 bg-amber-50/70 border border-amber-200 rounded-2xl text-xs text-slate-800 flex items-start gap-2"
                  >
                    <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <span>{adv}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Cross-Tolerance & Receptor Potency Equivalence Table */}
        <div className="ios-card p-4 sm:p-6">
          <h3 className="text-sm font-extrabold text-slate-900">
            Equivalent Doses ({isCannabinoid ? 'Cannabinoids' : compound.classification})
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            {isCannabinoid ? (
              <>
                Equivalent CB1 potency to{' '}
                <strong className="font-mono text-slate-800">
                  {result.lowMg} mg {compound.shortName}
                </strong>{' '}
                Low tier:
              </>
            ) : (
              <>
                Approximate equipotent comparison within{' '}
                <strong className="font-mono text-slate-800">
                  {compound.classification}
                </strong>{' '}
                relative to {result.lowMg} mg {compound.shortName}:
              </>
            )}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-3.5">
            {CANNABINOID_DATABASE.filter((c) =>
              isCannabinoid
                ? isCannabinoidSubstance(c) && c.psychoactive
                : c.classification === compound.classification
            ).map((other) => {
              const ratio = isCannabinoid
                ? compound.relativePotencyVsD9 /
                  Math.max(0.05, other.relativePotencyVsD9)
                : other.baseOralThresholdMg /
                  Math.max(0.01, compound.baseOralThresholdMg);
              const eqDose = Math.round(result.lowMg * ratio * 100) / 100;
              return (
                <div
                  key={other.id}
                  className={`p-3 rounded-2xl text-xs ${
                    other.id === compound.id
                      ? 'bg-blue-50/70 border border-blue-200'
                      : 'bg-[#F2F2F7]'
                  }`}
                >
                  <div className="font-bold text-slate-800 flex flex-wrap items-center justify-between gap-1">
                    <span className="break-words leading-tight">{other.shortName}</span>
                    <span className="font-mono text-slate-500 text-[11px]">
                      {isCannabinoid
                        ? `${other.relativePotencyVsD9}x`
                        : `t½ ${other.terminalHalfLifeHours}h`}
                    </span>
                  </div>
                  <div className="text-base font-mono font-bold text-slate-900 mt-1 tabular-nums">
                    {eqDose < 0.05 ? '<0.05' : eqDose} mg
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Left 5 Cols: Parameter Configuration Panel */}
      <div className="lg:col-span-5 lg:order-1 ios-card p-4 sm:p-6 space-y-5">
        <div className="flex items-center justify-between border-b border-slate-200/70 pb-3">
          <div>
            <h2 className="text-base sm:text-lg font-extrabold text-slate-900">
              Dosing Settings
            </h2>
            <p className="text-xs text-slate-500">
              Tolerance, body mass & vape calibration
            </p>
          </div>
          <button
            type="button"
            onClick={handleReset}
            className="min-h-[34px] px-3 py-1 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-[#F2F2F7] rounded-full transition-colors whitespace-nowrap shrink-0"
          >
            Reset
          </button>
        </div>

        {/* Target Cannabinoid (Custom iOS 27 Picker) */}
        <div>
          <CannabinoidSelect
            id="dosage-compound-select"
            label="Compound"
            value={compound.id}
            compounds={CANNABINOID_DATABASE}
            dynamicCompound={compound}
            onChange={(newId) => onSelectCannabinoid(newId)}
          />
        </div>

        {/* Route of Administration */}
        <div>
          <span className="block text-xs font-bold text-slate-700 mb-1.5">
            Route ({isCannabinoid ? 'Cannabinoid' : compound.classification})
          </span>
          <div
            className="grid grid-cols-3 gap-1 p-1 bg-[#E5E5EA]/85 rounded-2xl"
            role="group"
            aria-label="Route of Administration"
          >
            {(
              isCannabinoid
                ? ([
                    { id: 'inhalation', label: 'Vape' },
                    { id: 'sublingual', label: 'Sublingual' },
                    { id: 'oral', label: 'Edible' },
                  ] as { id: AdministrationRoute; label: string }[])
                : ([
                    { id: 'oral', label: 'Oral (Pill/Cap)' },
                    { id: 'sublingual', label: 'Sublingual / Nasal' },
                    { id: 'inhalation', label: 'Inhaled / Vapor' },
                  ] as { id: AdministrationRoute; label: string }[])
            ).map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setRoute(item.id)}
                className={`min-h-[38px] px-1.5 sm:px-2.5 py-1 text-xs text-center rounded-xl transition-all leading-tight break-words flex items-center justify-center ${
                  route === item.id
                    ? 'bg-white text-slate-900 shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900 font-medium'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive 0-10 Second Vape Hit Duration & Puff Calibrator (Cannabinoids Only) */}
        {isCannabinoid && (
        <div className="p-3.5 bg-[#F2F2F7] rounded-[20px] space-y-2.5">
          <div className="flex flex-wrap items-center justify-between gap-1.5">
            <span className="text-xs font-bold text-slate-800">
              Vape Estimator
            </span>
            <span className="text-xs font-mono font-bold text-[#007AFF] tabular-nums break-words leading-tight">
              {vapeSimPuffs} puff{vapeSimPuffs > 1 ? 's' : ''} ×{' '}
              {vapeSimSeconds.toFixed(1)}s = {simulatedVapeMg} mg
            </span>
          </div>

          <div>
            <div className="flex items-center justify-between text-xs mb-1">
              <label
                htmlFor="dosage-vape-seconds"
                className="text-slate-600 font-medium"
              >
                Hit Duration (0–10s)
              </label>
              <span className="font-mono font-bold text-slate-900 tabular-nums">
                {vapeSimSeconds.toFixed(1)} sec
              </span>
            </div>
            <input
              id="dosage-vape-seconds"
              type="range"
              min={0}
              max={10}
              step={0.5}
              value={vapeSimSeconds}
              onChange={(e) => {
                setVapeSimSeconds(parseFloat(e.target.value));
                setRoute('inhalation');
              }}
              className="w-full accent-[#007AFF]"
            />
            <div className="flex flex-wrap justify-between text-[10px] font-mono text-slate-400 mt-0.5 gap-x-1">
              <span>0s</span>
              <span>2s Light</span>
              <span>4s Std</span>
              <span>6s Deep</span>
              <span>8s Heavy</span>
              <span>10s Blinker</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 pt-1">
            <div>
              <label
                htmlFor="dosage-vape-puffs"
                className="block text-[11px] font-semibold text-slate-600 mb-0.5"
              >
                Puffs
              </label>
              <input
                id="dosage-vape-puffs"
                type="number"
                min={1}
                max={25}
                value={vapeSimPuffs}
                onChange={(e) => {
                  setVapeSimPuffs(
                    Math.max(1, Math.min(25, parseInt(e.target.value, 10) || 1))
                  );
                  setRoute('inhalation');
                }}
                className="w-full min-h-[38px] px-2.5 py-1 text-xs font-mono font-bold bg-white border border-slate-200 rounded-xl tabular-nums"
              />
            </div>
            <div>
              <label
                htmlFor="dosage-vape-purity"
                className="block text-[11px] font-semibold text-slate-600 mb-0.5"
              >
                Distillate %
              </label>
              <input
                id="dosage-vape-purity"
                type="number"
                min={10}
                max={99}
                value={vapeSimPurityPct}
                onChange={(e) =>
                  setVapeSimPurityPct(
                    Math.max(
                      10,
                      Math.min(99, parseInt(e.target.value, 10) || 90)
                    )
                  )
                }
                className="w-full min-h-[38px] px-2.5 py-1 text-xs font-mono font-bold bg-white border border-slate-200 rounded-xl tabular-nums"
              />
            </div>
            <div>
              <CustomOptionSelect<VapeVoltageTier>
                id="dosage-vape-volt"
                label="Voltage"
                compact
                value={vapeSimVoltage}
                onChange={(nextVolt) => setVapeSimVoltage(nextVolt)}
                options={[
                  { value: 'low', label: 'Low (2.5V)', sublabel: '~0.6 mg/s' },
                  { value: 'medium', label: 'Med (3.0V)', sublabel: '~0.95 mg/s' },
                  { value: 'high', label: 'High (3.6V)', sublabel: '~1.35 mg/s' },
                ]}
              />
            </div>
          </div>
        </div>
        )}

        {/* Tolerance Tier */}
        <div>
          <span className="block text-xs font-bold text-slate-700 mb-1.5">
            Tolerance
          </span>
          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-1 p-1 bg-[#E5E5EA]/85 rounded-2xl"
            role="group"
            aria-label="Tolerance Level"
          >
            {(
              [
                { id: 'naive', label: 'Naive' },
                { id: 'occasional', label: 'Occasional' },
                { id: 'regular', label: 'Regular' },
                { id: 'heavy', label: 'Heavy' },
              ] as { id: ToleranceLevel; label: string }[]
            ).map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTolerance(t.id)}
                className={`min-h-[36px] px-1.5 py-1 text-xs rounded-xl transition-all text-center leading-tight break-words flex items-center justify-center ${
                  tolerance === t.id
                    ? 'bg-white text-slate-900 shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900 font-medium'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Body Weight, Height & Activity Sliders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <div className="flex flex-wrap justify-between items-baseline text-xs mb-1 gap-1">
              <label htmlFor="dosage-weight" className="font-bold text-slate-700">
                Weight
              </label>
              <span className="font-mono font-bold text-slate-900 tabular-nums break-words">
                {weightKg} kg ({Math.round(weightKg * 2.20462)} lbs)
              </span>
            </div>
            <input
              id="dosage-weight"
              type="range"
              min={42}
              max={160}
              value={weightKg}
              onChange={(e) => setWeightKg(Number(e.target.value))}
              className="w-full accent-[#007AFF]"
            />
          </div>

          <div>
            <div className="flex flex-wrap justify-between items-baseline text-xs mb-1 gap-1">
              <label htmlFor="dosage-height" className="font-bold text-slate-700">
                Height
              </label>
              <span className="font-mono font-bold text-slate-900 tabular-nums break-words">
                {heightCm} cm (BMI {currentBmi})
              </span>
            </div>
            <input
              id="dosage-height"
              type="range"
              min={145}
              max={210}
              value={heightCm}
              onChange={(e) => setHeightCm(Number(e.target.value))}
              className="w-full accent-[#007AFF]"
            />
          </div>
        </div>

        <div>
          <span className="block text-xs font-bold text-slate-700 mb-1.5">
            Activity
          </span>
          <div className="grid grid-cols-3 gap-1 p-1 bg-[#E5E5EA]/85 rounded-2xl">
            {(
              [
                { id: 'sedentary', label: 'Sedentary' },
                { id: 'moderate', label: 'Moderate' },
                { id: 'athletic', label: 'Athletic' },
              ] as const
            ).map((a) => (
              <button
                key={a.id}
                type="button"
                onClick={() => setActivityLevel(a.id)}
                className={`min-h-[36px] px-2 py-1.5 text-xs rounded-xl transition-all whitespace-nowrap shrink-0 ${
                  activityLevel === a.id
                    ? 'bg-white text-slate-900 shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900 font-medium'
                }`}
              >
                {a.label}
              </button>
            ))}
          </div>
        </div>

        {/* Co-Administered CBD Allosteric Buffer (Cannabinoids only) */}
        {isCannabinoid && (
          <div>
            <CustomOptionSelect<'none' | '1:1' | '2:1_cbd_dominant'>
              id="cbd-buffer-select"
              label="CBD Buffer"
              value={coAdministerCbdRatio}
              onChange={(val) => setCoAdministerCbdRatio(val)}
              options={[
                {
                  value: 'none',
                  label: `None (Pure ${compound.shortName})`,
                  sublabel: 'Unbuffered CB1 agonist response',
                },
                {
                  value: '1:1',
                  label: `1:1 Ratio (Balanced CBD)`,
                  sublabel: 'Moderates peak tachycardia & anxiety',
                },
                {
                  value: '2:1_cbd_dominant',
                  label: '2:1 CBD (Harm Reduction)',
                  sublabel: 'Strong buffering at CB1 receptor',
                },
              ]}
            />
          </div>
        )}

        {/* Clinical Health & Metabolic Sensitivity Profile Checkboxes */}
        <div className="pt-2 border-t border-slate-200/70 space-y-2.5">
          <div className="text-xs font-bold text-slate-800">
            Health Sensitivities
          </div>

          <label className="flex items-start gap-2.5 text-xs text-slate-700 cursor-pointer">
            <input
              type="checkbox"
              checked={healthFlags.cardiovascularSensitivity}
              onChange={() => toggleFlag('cardiovascularSensitivity')}
              className="mt-0.5 w-4 h-4 rounded border-slate-300 text-[#007AFF] focus:ring-[#007AFF]"
            />
            <span>
              <strong className="text-slate-900">Heart Sensitivity</strong> — Reduces dose by 35%.
            </span>
          </label>

          <label className="flex items-start gap-2.5 text-xs text-slate-700 cursor-pointer">
            <input
              type="checkbox"
              checked={healthFlags.anxietyOrPsychiatricHistory}
              onChange={() => toggleFlag('anxietyOrPsychiatricHistory')}
              className="mt-0.5 w-4 h-4 rounded border-slate-300 text-[#007AFF] focus:ring-[#007AFF]"
            />
            <span>
              <strong className="text-slate-900">Anxiety History</strong> — Reduces dose by 40%.
            </span>
          </label>

          <label className="flex items-start gap-2.5 text-xs text-slate-700 cursor-pointer">
            <input
              type="checkbox"
              checked={healthFlags.hepaticCypSlowMetabolizer}
              onChange={() => toggleFlag('hepaticCypSlowMetabolizer')}
              className="mt-0.5 w-4 h-4 rounded border-slate-300 text-[#007AFF] focus:ring-[#007AFF]"
            />
            <span>
              <strong className="text-slate-900">CYP Slow Metabolizer</strong> — Halves oral dose.
            </span>
          </label>

          <label className="flex items-start gap-2.5 text-xs text-slate-700 cursor-pointer">
            <input
              type="checkbox"
              checked={healthFlags.respiratorySensitivity}
              onChange={() => toggleFlag('respiratorySensitivity')}
              className="mt-0.5 w-4 h-4 rounded border-slate-300 text-[#007AFF] focus:ring-[#007AFF]"
            />
            <span>
              <strong className="text-slate-900">Respiratory / Asthma</strong> — Thermal aerosol alert.
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};
