import React, { useMemo } from 'react';
import { CannabinoidProfile } from '../data/cannabinoids';
import { ALL_SUBSTANCES_DATABASE } from '../data/allSubstances';
import { ChemicalStructure2D } from './ChemicalStructure2D';
import { SubstancePhotoSpecimen } from './SubstancePhotoSpecimen';
import {
  X,
  ArrowRightLeft,
  Activity,
  Clock,
  ShieldAlert,
  Sparkles,
  Zap,
  Info,
} from 'lucide-react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

interface SubstanceCompareModalProps {
  substanceAId: string;
  substanceBId: string;
  onClose: () => void;
  onSwap: () => void;
  onSelectSubstanceA: (id: string) => void;
  onSelectSubstanceB: (id: string) => void;
  onLogDose: (substanceId: string) => void;
}

export const SubstanceCompareModal: React.FC<SubstanceCompareModalProps> = ({
  substanceAId,
  substanceBId,
  onClose,
  onSwap,
  onSelectSubstanceA,
  onSelectSubstanceB,
  onLogDose,
}) => {
  const substanceA = useMemo(() => {
    return (
      ALL_SUBSTANCES_DATABASE.find((c) => c.id === substanceAId) ||
      ALL_SUBSTANCES_DATABASE[0]
    );
  }, [substanceAId]);

  const substanceB = useMemo(() => {
    return (
      ALL_SUBSTANCES_DATABASE.find((c) => c.id === substanceBId) ||
      ALL_SUBSTANCES_DATABASE[1] ||
      ALL_SUBSTANCES_DATABASE[0]
    );
  }, [substanceBId]);

  // Combined Radar Data across 6 core pharmacological axes
  const radarData = useMemo(() => {
    const axes = [
      { key: 'cb1AffinityScore', label: 'Receptor Binding' },
      { key: 'euphoriaPotency', label: 'Euphoria / Potency' },
      { key: 'somaticSedation', label: 'Sedation' },
      { key: 'anxiogenicRisk', label: 'Stimulant / Anxiety' },
      { key: 'durationPersistence', label: 'Persistence' },
      { key: 'lipidRetention', label: 'Lipid Retention' },
    ] as const;

    return axes.map(({ key, label }) => ({
      axis: label,
      A: substanceA.radarProfile ? (substanceA.radarProfile as any)[key] || 40 : 40,
      B: substanceB.radarProfile ? (substanceB.radarProfile as any)[key] || 40 : 40,
    }));
  }, [substanceA, substanceB]);

  // Calculate Potency & Delta Ratios
  const potencyRatio = useMemo(() => {
    const potA = substanceA.relativePotencyVsD9 || 1.0;
    const potB = substanceB.relativePotencyVsD9 || 1.0;
    if (potB === 0) return { factor: 'N/A', direction: 'equal' };
    const factor = potA / potB;
    if (factor > 1.05) {
      return {
        factor: `${(factor).toFixed(1)}×`,
        direction: 'A_stronger',
        text: `${substanceA.shortName} is ${factor.toFixed(1)}× more potent than ${substanceB.shortName}`,
      };
    } else if (factor < 0.95) {
      const inv = 1 / factor;
      return {
        factor: `${inv.toFixed(1)}×`,
        direction: 'B_stronger',
        text: `${substanceB.shortName} is ${inv.toFixed(1)}× more potent than ${substanceA.shortName}`,
      };
    }
    return {
      factor: '1.0×',
      direction: 'equal',
      text: 'Equivalent baseline potency index',
    };
  }, [substanceA, substanceB]);

  // Half-life Delta
  const halfLifeDelta = useMemo(() => {
    const hlA = substanceA.terminalHalfLifeHours;
    const hlB = substanceB.terminalHalfLifeHours;
    const diff = Math.abs(hlA - hlB);
    const longer = hlA >= hlB ? substanceA.shortName : substanceB.shortName;
    return {
      diffHrs: Math.round(diff),
      longer,
      ratio: hlB > 0 ? (hlA / hlB).toFixed(1) : '1.0',
    };
  }, [substanceA, substanceB]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="compare-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/65 backdrop-blur-md animate-fade-in"
    >
      <div className="bg-white rounded-3xl w-full max-w-5xl max-h-[92vh] flex flex-col shadow-2xl border border-slate-200/90 overflow-hidden">
        {/* Modal Top Bar */}
        <div className="px-5 py-3.5 border-b border-slate-200/80 flex items-center justify-between gap-3 bg-[#F8F9FB] shrink-0">
          <div className="flex items-center gap-2 min-w-0">
            <span className="p-1.5 bg-blue-50 text-[#007AFF] rounded-lg">
              <ArrowRightLeft className="w-4 h-4" />
            </span>
            <div>
              <h2
                id="compare-modal-title"
                className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight flex items-center gap-2 truncate"
              >
                <span>Substance Comparison</span>
                <span className="text-xs font-mono font-medium text-slate-500 hidden sm:inline">
                  · Side-by-Side Potency & Pharmacokinetics
                </span>
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={onSwap}
              title="Swap Substance Positions"
              className="px-3 py-1.5 bg-white hover:bg-slate-100 text-slate-700 text-xs font-bold rounded-xl border border-slate-200 transition-colors flex items-center gap-1.5 shadow-2xs"
            >
              <ArrowRightLeft className="w-3.5 h-3.5 text-slate-500" />
              <span className="hidden sm:inline">Swap</span>
            </button>
            <button
              type="button"
              aria-label="Close comparison"
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-[#F2F2F7] hover:bg-[#E5E5EA] text-slate-700 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Comparison Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          {/* Top Substance Header Cards (Substance A vs Substance B) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Substance A Card */}
            <div className="p-4 bg-blue-50/40 rounded-2xl border-2 border-[#007AFF]/30 space-y-3 relative">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#007AFF]" />
                    <span className="text-[10px] font-mono font-bold uppercase text-[#007AFF] tracking-wider">
                      Substance A
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 truncate">
                    {substanceA.shortName}
                  </h3>
                  <p className="text-xs text-slate-500 truncate">{substanceA.name}</p>
                </div>

                <div className="shrink-0 text-right">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-white border border-blue-200 text-[#007AFF]">
                    {substanceA.classification}
                  </span>
                  <div className="text-[10px] text-slate-400 mt-1 font-mono">
                    {substanceA.molecularFormula} · {substanceA.molecularWeight} g/mol
                  </div>
                </div>
              </div>

              {/* Selector dropdown to change Substance A directly */}
              <div className="flex items-center gap-1.5 pt-1">
                <span className="text-[11px] font-bold text-slate-600 shrink-0">Change:</span>
                <select
                  value={substanceA.id}
                  onChange={(e) => onSelectSubstanceA(e.target.value)}
                  className="w-full text-xs font-bold bg-white border border-slate-200 rounded-lg px-2.5 py-1 text-slate-800 focus:ring-2 focus:ring-[#007AFF]"
                >
                  {ALL_SUBSTANCES_DATABASE.map((sub) => (
                    <option key={`a-${sub.id}`} value={sub.id}>
                      {sub.shortName} ({sub.classification})
                    </option>
                  ))}
                </select>
              </div>

              {/* 3D Visualizer & Photo Specimen */}
              <div className="grid grid-cols-2 gap-2 h-36 pt-1">
                <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-900">
                  <SubstancePhotoSpecimen
                    compound={substanceA}
                    className="w-full h-full"
                    showCaption={false}
                    allowZoom={false}
                  />
                </div>
                <div className="rounded-xl overflow-hidden border border-slate-200 bg-white">
                  <ChemicalStructure2D compound={substanceA} variant="card" />
                </div>
              </div>
            </div>

            {/* Substance B Card */}
            <div className="p-4 bg-purple-50/40 rounded-2xl border-2 border-[#8B5CF6]/30 space-y-3 relative">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#8B5CF6]" />
                    <span className="text-[10px] font-mono font-bold uppercase text-[#8B5CF6] tracking-wider">
                      Substance B
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 truncate">
                    {substanceB.shortName}
                  </h3>
                  <p className="text-xs text-slate-500 truncate">{substanceB.name}</p>
                </div>

                <div className="shrink-0 text-right">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-white border border-purple-200 text-[#8B5CF6]">
                    {substanceB.classification}
                  </span>
                  <div className="text-[10px] text-slate-400 mt-1 font-mono">
                    {substanceB.molecularFormula} · {substanceB.molecularWeight} g/mol
                  </div>
                </div>
              </div>

              {/* Selector dropdown to change Substance B directly */}
              <div className="flex items-center gap-1.5 pt-1">
                <span className="text-[11px] font-bold text-slate-600 shrink-0">Change:</span>
                <select
                  value={substanceB.id}
                  onChange={(e) => onSelectSubstanceB(e.target.value)}
                  className="w-full text-xs font-bold bg-white border border-slate-200 rounded-lg px-2.5 py-1 text-slate-800 focus:ring-2 focus:ring-[#8B5CF6]"
                >
                  {ALL_SUBSTANCES_DATABASE.map((sub) => (
                    <option key={`b-${sub.id}`} value={sub.id}>
                      {sub.shortName} ({sub.classification})
                    </option>
                  ))}
                </select>
              </div>

              {/* 3D Visualizer & Photo Specimen */}
              <div className="grid grid-cols-2 gap-2 h-36 pt-1">
                <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-900">
                  <SubstancePhotoSpecimen
                    compound={substanceB}
                    className="w-full h-full"
                    showCaption={false}
                    allowZoom={false}
                  />
                </div>
                <div className="rounded-xl overflow-hidden border border-slate-200 bg-white">
                  <ChemicalStructure2D compound={substanceB} variant="card" />
                </div>
              </div>
            </div>
          </div>

          {/* DUAL RADAR CHART: 6-Axis Pharmacological Overlay */}
          <div className="p-5 bg-[#F8F9FB] rounded-3xl border border-slate-200/80 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#007AFF] flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5" />
                  Pharmacodynamic Fingerprint
                </span>
                <h4 className="text-base font-extrabold text-slate-900 mt-0.5">
                  Dual Receptor Affinity & Behavioral Radar Overlay
                </h4>
              </div>

              <div className="flex items-center gap-4 text-xs font-bold">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#007AFF]" />
                  <span className="text-slate-800">{substanceA.shortName}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#8B5CF6]" />
                  <span className="text-slate-800">{substanceB.shortName}</span>
                </div>
              </div>
            </div>

            <div className="w-full h-72 sm:h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radarData} outerRadius="75%">
                  <PolarGrid stroke="#E2E8F0" />
                  <PolarAngleAxis
                    dataKey="axis"
                    tick={{ fill: '#475569', fontSize: 11, fontWeight: 600 }}
                  />
                  <PolarRadiusAxis
                    angle={30}
                    domain={[0, 100]}
                    tick={{ fill: '#94A3B8', fontSize: 9 }}
                  />
                  <Radar
                    name={substanceA.shortName}
                    dataKey="A"
                    stroke="#007AFF"
                    fill="#007AFF"
                    fillOpacity={0.35}
                    strokeWidth={2}
                  />
                  <Radar
                    name={substanceB.shortName}
                    dataKey="B"
                    stroke="#8B5CF6"
                    fill="#8B5CF6"
                    fillOpacity={0.35}
                    strokeWidth={2}
                  />
                  <Tooltip
                    content={({ active, payload }) => {
                      if (!active || !payload || !payload.length) return null;
                      const item = payload[0].payload;
                      return (
                        <div className="bg-slate-900 text-white text-xs p-2.5 rounded-xl shadow-lg border border-slate-800 space-y-1">
                          <div className="font-bold border-b border-slate-700 pb-1">
                            {item.axis}
                          </div>
                          <div className="flex items-center justify-between gap-3 text-[#38BDF8]">
                            <span>{substanceA.shortName}:</span>
                            <span className="font-mono font-bold">{item.A}/100</span>
                          </div>
                          <div className="flex items-center justify-between gap-3 text-[#C084FC]">
                            <span>{substanceB.shortName}:</span>
                            <span className="font-mono font-bold">{item.B}/100</span>
                          </div>
                        </div>
                      );
                    }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* POTENCY & THRESHOLD DELTA MATRIX */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-4 bg-white rounded-2xl border border-slate-200/90 space-y-1">
              <div className="text-[10px] font-mono uppercase text-slate-500 font-bold">
                Relative Potency Delta
              </div>
              <div className="text-2xl font-extrabold font-mono text-slate-900 mt-1">
                {potencyRatio.factor}
              </div>
              <p className="text-xs text-slate-600 mt-1">{potencyRatio.text}</p>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-slate-200/90 space-y-1">
              <div className="text-[10px] font-mono uppercase text-slate-500 font-bold">
                Oral Starting Threshold
              </div>
              <div className="flex items-baseline justify-between mt-1">
                <div>
                  <span className="text-[11px] text-slate-500 block">{substanceA.shortName}</span>
                  <span className="text-lg font-mono font-extrabold text-[#007AFF]">
                    {substanceA.baseOralThresholdMg} mg
                  </span>
                </div>
                <span className="text-xs font-mono text-slate-400">vs</span>
                <div className="text-right">
                  <span className="text-[11px] text-slate-500 block">{substanceB.shortName}</span>
                  <span className="text-lg font-mono font-extrabold text-[#8B5CF6]">
                    {substanceB.baseOralThresholdMg} mg
                  </span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-slate-200/90 space-y-1">
              <div className="text-[10px] font-mono uppercase text-slate-500 font-bold">
                Inhaled / Nasal Threshold
              </div>
              <div className="flex items-baseline justify-between mt-1">
                <div>
                  <span className="text-[11px] text-slate-500 block">{substanceA.shortName}</span>
                  <span className="text-lg font-mono font-extrabold text-[#007AFF]">
                    {substanceA.baseInhaledThresholdMg} mg
                  </span>
                </div>
                <span className="text-xs font-mono text-slate-400">vs</span>
                <div className="text-right">
                  <span className="text-[11px] text-slate-500 block">{substanceB.shortName}</span>
                  <span className="text-lg font-mono font-extrabold text-[#8B5CF6]">
                    {substanceB.baseInhaledThresholdMg} mg
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* PHARMACOKINETIC ELIMINATION & TIMELINE COMPARISON */}
          <div className="p-5 bg-white rounded-3xl border border-slate-200/80 space-y-4">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#007AFF] flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                Pharmacokinetics & Drug Testing
              </span>
              <h4 className="text-base font-extrabold text-slate-900 mt-0.5">
                Elimination Half-Life & Detection Windows
              </h4>
            </div>

            <div className="space-y-3">
              {/* Half-Life Bars */}
              <div>
                <div className="flex items-center justify-between text-xs font-semibold mb-1">
                  <span className="text-[#007AFF]">
                    {substanceA.shortName}: {substanceA.terminalHalfLifeHours} hrs half-life
                  </span>
                  <span className="text-slate-400 text-[11px] font-mono">
                    Terminal elimination t½
                  </span>
                </div>
                <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#007AFF] rounded-full transition-all"
                    style={{
                      width: `${Math.min(
                        100,
                        Math.max(
                          6,
                          (substanceA.terminalHalfLifeHours /
                            Math.max(
                              substanceA.terminalHalfLifeHours,
                              substanceB.terminalHalfLifeHours,
                              30
                            )) *
                            100
                        )
                      )}%`,
                    }}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs font-semibold mb-1">
                  <span className="text-[#8B5CF6]">
                    {substanceB.shortName}: {substanceB.terminalHalfLifeHours} hrs half-life
                  </span>
                  <span className="text-slate-400 text-[11px] font-mono">
                    Terminal elimination t½
                  </span>
                </div>
                <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#8B5CF6] rounded-full transition-all"
                    style={{
                      width: `${Math.min(
                        100,
                        Math.max(
                          6,
                          (substanceB.terminalHalfLifeHours /
                            Math.max(
                              substanceA.terminalHalfLifeHours,
                              substanceB.terminalHalfLifeHours,
                              30
                            )) *
                            100
                        )
                      )}%`,
                    }}
                  />
                </div>
              </div>

              <div className="p-3 bg-[#F8F9FB] rounded-xl text-xs text-slate-600 font-medium">
                {halfLifeDelta.diffHrs === 0 ? (
                  <span>Both compounds share equivalent elimination clearance kinetics.</span>
                ) : (
                  <span>
                    <strong className="text-slate-900">{halfLifeDelta.longer}</strong> has a ~
                    {halfLifeDelta.diffHrs} hour longer terminal half-life, extending its metabolic
                    clearance and detection window in biological matrices.
                  </span>
                )}
              </div>
            </div>

            {/* Detailed Table Grid */}
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-400 font-mono text-[10px] uppercase">
                    <th className="py-2 pr-4">Parameter</th>
                    <th className="py-2 px-4 text-[#007AFF] font-bold">
                      {substanceA.shortName}
                    </th>
                    <th className="py-2 pl-4 text-[#8B5CF6] font-bold">
                      {substanceB.shortName}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                  <tr>
                    <td className="py-2.5 pr-4 font-semibold text-slate-900">
                      Primary Target Ki / Binding
                    </td>
                    <td className="py-2.5 px-4 font-mono">{substanceA.cb1KiNm} nM</td>
                    <td className="py-2.5 pl-4 font-mono">{substanceB.cb1KiNm} nM</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-4 font-semibold text-slate-900">
                      Lipophilicity (XLogP)
                    </td>
                    <td className="py-2.5 px-4 font-mono">
                      {substanceA.xLogP} (
                      {substanceA.xLogP > 3 ? 'High Adipose Accumulation' : 'Hydrophilic / Rapid Excretion'}
                      )
                    </td>
                    <td className="py-2.5 pl-4 font-mono">
                      {substanceB.xLogP} (
                      {substanceB.xLogP > 3 ? 'High Adipose Accumulation' : 'Hydrophilic / Rapid Excretion'}
                      )
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-4 font-semibold text-slate-900">
                      Oral Plateau Duration
                    </td>
                    <td className="py-2.5 px-4 font-mono">
                      {substanceA.oralDurationHours[0]}–{substanceA.oralDurationHours[1]} hrs
                    </td>
                    <td className="py-2.5 pl-4 font-mono">
                      {substanceB.oralDurationHours[0]}–{substanceB.oralDurationHours[1]} hrs
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-4 font-semibold text-slate-900">
                      Oral Onset Interval
                    </td>
                    <td className="py-2.5 px-4 font-mono">
                      {substanceA.oralOnsetMinutes[0]}–{substanceA.oralOnsetMinutes[1]} min
                    </td>
                    <td className="py-2.5 pl-4 font-mono">
                      {substanceB.oralOnsetMinutes[0]}–{substanceB.oralOnsetMinutes[1]} min
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-4 font-semibold text-slate-900">
                      Immunoassay Cross-Reactivity
                    </td>
                    <td className="py-2.5 px-4 font-mono">
                      {substanceA.immunoassayCrossReactivityPct}%
                    </td>
                    <td className="py-2.5 pl-4 font-mono">
                      {substanceB.immunoassayCrossReactivityPct}%
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-4 font-semibold text-slate-900">
                      Hepatic CYP Enzymes
                    </td>
                    <td className="py-2.5 px-4 font-mono truncate max-w-[200px]">
                      {substanceA.cypEnzymes.join(', ')}
                    </td>
                    <td className="py-2.5 pl-4 font-mono truncate max-w-[200px]">
                      {substanceB.cypEnzymes.join(', ')}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-4 font-semibold text-slate-900">
                      Risk Classification
                    </td>
                    <td className="py-2.5 px-4">
                      <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-800">
                        {substanceA.riskTier}
                      </span>
                    </td>
                    <td className="py-2.5 pl-4">
                      <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-800">
                        {substanceB.riskTier}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="px-5 py-4 border-t border-slate-200/80 bg-[#F8F9FB] flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-500 font-mono">
            Comparing PubChem CID {substanceA.pubchemCid} vs CID {substanceB.pubchemCid}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                onLogDose(substanceA.id);
                onClose();
              }}
              className="px-3.5 py-2 bg-blue-50 text-[#007AFF] hover:bg-blue-100 text-xs font-bold rounded-xl transition-colors"
            >
              Log {substanceA.shortName}
            </button>
            <button
              type="button"
              onClick={() => {
                onLogDose(substanceB.id);
                onClose();
              }}
              className="px-3.5 py-2 bg-purple-50 text-[#8B5CF6] hover:bg-purple-100 text-xs font-bold rounded-xl transition-colors"
            >
              Log {substanceB.shortName}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-slate-900 hover:bg-black text-white text-xs font-bold rounded-xl transition-colors shadow-xs"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
