import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ALL_SUBSTANCES_DATABASE,
  getSubstanceById,
} from '../data/allSubstances';
import {
  calculateBMI,
  DEFAULT_USER_PROFILE,
  DoseLogEntry,
  estimateBodyFatPercentage,
  simulateClearanceKinetics,
  simulateMultiDoseClearance,
  UsageFrequency,
  UserAnthropometrics,
} from '../utils/pharmacokinetics';
import {
  CheckCircle2,
  Trash2,
  SlidersHorizontal,
  ChevronDown,
  ChevronUp,
  Sparkles,
  ShieldCheck,
  BarChart3,
  Calendar,
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import {
  analyzeWeeklyConsumption,
  getSubstanceColor,
  SubstanceDaySummary,
} from '../utils/weeklyConsumptionAnalytics';

const STORAGE_KEY_PROFILE = 'cannapharm_user_anthropometrics_v2';
const STORAGE_KEY_LOG = 'cannapharm_dose_log_entries_v2';

export const HomeScreen: React.FC = () => {
  // Load anthropometric profile from storage
  const [profile, setProfile] = useState<UserAnthropometrics>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_PROFILE);
      if (saved) return { ...DEFAULT_USER_PROFILE, ...JSON.parse(saved) };
    } catch {
      // Fallback
    }
    return DEFAULT_USER_PROFILE;
  });

  // Load dose entries from storage
  const [logEntries, setLogEntries] = useState<DoseLogEntry[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_LOG);
      if (saved) return JSON.parse(saved);
    } catch {
      // Fallback
    }
    return [];
  });

  // Sync log and profile changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_PROFILE, JSON.stringify(profile));
    } catch {
      // ignore
    }
  }, [profile]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_LOG, JSON.stringify(logEntries));
    } catch {
      // ignore
    }
  }, [logEntries]);

  // Listen for storage events (e.g. when dose is logged from Library)
  useEffect(() => {
    const handleStorageChange = () => {
      try {
        const saved = localStorage.getItem(STORAGE_KEY_LOG);
        if (saved) setLogEntries(JSON.parse(saved));
        else setLogEntries([]);
      } catch {
        // ignore
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Quick Clean-Time Estimator state (integrated with all 373 catalog substances)
  const [estimatorSubstanceId, setEstimatorSubstanceId] = useState<string>('quetiapine');
  const [estimatorSearch, setEstimatorSearch] = useState<string>('');
  const [estimatorFrequency, setEstimatorFrequency] = useState<UsageFrequency>('single');
  const [showProfileDrawer, setShowProfileDrawer] = useState<boolean>(false);
  const [chartTimeframe, setChartTimeframe] = useState<'7d_daily' | '4w_weekly'>('7d_daily');
  const [chartMetric, setChartMetric] = useState<'sessions' | 'totalMg'>('sessions');

  // Weekly consumption frequency analytics from cannapharm_dose_log_entries_v2
  const weeklyAnalytics = useMemo(() => {
    return analyzeWeeklyConsumption(
      logEntries,
      new Date(),
      (id) => getSubstanceById(id).shortName
    );
  }, [logEntries]);

  // Multi-dose cumulative clearance simulation for currently logged substances
  const multiDoseResult = useMemo(() => {
    return simulateMultiDoseClearance(logEntries, profile);
  }, [logEntries, profile]);

  // Single-substance quick clearance estimation
  const estimatorSubstance = useMemo(() => {
    return getSubstanceById(estimatorSubstanceId);
  }, [estimatorSubstanceId]);

  const singleEstimation = useMemo(() => {
    return simulateClearanceKinetics({
      cannabinoidId: estimatorSubstance.id,
      frequency: estimatorFrequency,
      lastDoseMg: estimatorSubstance.baseOralThresholdMg * 2,
      weightKg: profile.weightKg,
      heightCm: profile.heightCm,
      ageYears: profile.ageYears,
      biologicalSex: profile.biologicalSex,
      activityLevel: profile.activityLevel,
      hydrationLevel: profile.hydrationLevel,
    });
  }, [estimatorSubstance, estimatorFrequency, profile]);

  // Filter substances for the integrated estimator search
  const filteredSubstances = useMemo(() => {
    if (!estimatorSearch.trim()) return ALL_SUBSTANCES_DATABASE;
    const q = estimatorSearch.toLowerCase();
    return ALL_SUBSTANCES_DATABASE.filter(
      (s) =>
        s.shortName.toLowerCase().includes(q) ||
        s.name.toLowerCase().includes(q) ||
        s.classification.toLowerCase().includes(q)
    );
  }, [estimatorSearch]);

  const handleDeleteEntry = (entryId: string) => {
    setLogEntries((prev) => prev.filter((e) => e.id !== entryId));
  };

  const handleClearAllEntries = () => {
    if (window.confirm('Clear all logged doses from your tracker?')) {
      setLogEntries([]);
    }
  };

  // Helper formatting for countdown
  const formatCountdown = (hours: number) => {
    if (hours <= 0) return 'All Clear';
    const d = Math.floor(hours / 24);
    const h = Math.round(hours % 24);
    if (d === 0) return `${h} hours`;
    if (h === 0) return `${d} days`;
    return `${d}d ${h}h`;
  };

  const currentBmi = calculateBMI(profile.weightKg, profile.heightCm);
  const currentBf = estimateBodyFatPercentage(
    currentBmi,
    profile.ageYears,
    profile.biologicalSex,
    profile.activityLevel
  );

  const hasActiveLog = logEntries.length > 0;
  const isAllClear =
    !hasActiveLog ||
    (multiDoseResult.isCurrentlyClear50 && multiDoseResult.isCurrentlyClear15);

  // Maximum value for chart Y-axis scaling
  const activeBuckets =
    chartTimeframe === '7d_daily'
      ? weeklyAnalytics.dailyBuckets
      : weeklyAnalytics.weeklyBuckets;

  const maxVal = useMemo(() => {
    let peak = 0;
    for (const b of activeBuckets) {
      if (b.substances && b.substances.length > 0) {
        for (const s of b.substances) {
          const val = chartMetric === 'sessions' ? s.count : s.totalMg;
          if (val > peak) peak = val;
        }
      } else {
        const val = chartMetric === 'sessions' ? b.sessions : b.totalMg;
        if (val > peak) peak = val;
      }
    }
    return Math.max(chartMetric === 'sessions' ? 4 : 20, Math.ceil(peak * 1.15));
  }, [activeBuckets, chartMetric]);

  // Unique substances present in the active period for the legend
  const activeSubstancesInChart = useMemo(() => {
    const map = new Map<string, string>();
    for (const b of activeBuckets) {
      if (b.substances) {
        for (const s of b.substances) {
          map.set(s.id, s.name);
        }
      }
    }
    return Array.from(map.entries()).map(([id, name]) => ({ id, name }));
  }, [activeBuckets]);

  /**
   * Custom Recharts Bar Shape Component:
   * "Each new substance gets its own column for the day, but only if required,
   * and for every new column you have to shrink the size of each one"
   */
  const renderMultiSubstanceDayBar = (props: any) => {
    const { x, width, payload, background } = props;
    if (!payload) return null;

    const substances: SubstanceDaySummary[] = payload.substances || [];
    const numSubs = substances.length;

    const baselineY = background
      ? background.y + background.height
      : (props.y || 0) + (props.height || 0);
    const plotHeight = background?.height || 180;

    if (numSubs === 0) {
      // Zero substances on this day: clean quiet 4px baseline dash
      return (
        <rect
          x={x + width * 0.5 - 2}
          y={baselineY - 2}
          width={4}
          height={2}
          rx={1}
          fill="#CBD5E1"
        />
      );
    }

    // Dynamic per-substance column sizing:
    // Slot width allocated for the day
    const slotWidth = Math.min(width || 44, 48);
    const gap = numSubs > 1 ? 2 : 0;
    // Shrink column width as the number of substances grows
    const colWidth = Math.max(
      5,
      Math.floor((slotWidth - (numSubs - 1) * gap) / numSubs)
    );
    const totalGroupWidth = numSubs * colWidth + (numSubs - 1) * gap;
    const startX = x + (width - totalGroupWidth) * 0.5;

    return (
      <g>
        {substances.map((sub, idx) => {
          const val = chartMetric === 'sessions' ? sub.count : sub.totalMg;
          const ratio = maxVal > 0 ? Math.min(1, val / maxVal) : 0;
          const barHeight = Math.max(4, Math.round(ratio * (plotHeight - 16)));
          const colX = startX + idx * (colWidth + gap);
          const colY = baselineY - barHeight;
          const color = getSubstanceColor(sub.id);

          return (
            <rect
              key={`${sub.id}-${idx}`}
              x={colX}
              y={colY}
              width={colWidth}
              height={barHeight}
              rx={Math.min(3, Math.floor(colWidth / 2))}
              fill={color}
              onClick={() => setEstimatorSubstanceId(sub.id)}
              className="transition-all hover:opacity-85 cursor-pointer"
            >
              <title>{`${sub.name}: ${sub.count} session(s), ${sub.totalMg} mg (Click to inspect clean time)`}</title>
            </rect>
          );
        })}
      </g>
    );
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12">
      {/* HERO: Time till negative */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs relative overflow-hidden"
      >
        {/* Subtle decorative background gradient */}
        <div
          className={`absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20 transition-all opacity-40 ${
            isAllClear ? 'bg-emerald-200/50' : 'bg-blue-200/50'
          }`}
        />

        <div className="relative z-10 space-y-5">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Time till negative
              </h1>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setShowProfileDrawer(!showProfileDrawer)}
                className="px-3.5 py-1.5 bg-[#F2F2F7] hover:bg-[#E5E5EA] text-slate-700 text-xs font-semibold rounded-full transition-colors flex items-center gap-1.5"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Body & Metabolism</span>
                {showProfileDrawer ? (
                  <ChevronUp className="w-3.5 h-3.5" />
                ) : (
                  <ChevronDown className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          </div>

          {/* Collapsible Personal Anthropometrics Drawer */}
          {showProfileDrawer && (
            <div className="p-4 bg-[#F2F2F7]/70 rounded-2xl border border-slate-200/60 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-800">
                  Metabolic Parameters (Calibrates Adipose Retention & Renal Excretion)
                </span>
                <span className="text-[11px] font-mono text-slate-500">
                  BMI: {currentBmi} kg/m² · Body Fat: ~{currentBf}%
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div>
                  <label className="text-[11px] text-slate-600 font-semibold block mb-1">
                    Weight (kg)
                  </label>
                  <input
                    type="number"
                    value={profile.weightKg}
                    min={35}
                    max={200}
                    onChange={(e) =>
                      setProfile({
                        ...profile,
                        weightKg: Number(e.target.value) || 70,
                      })
                    }
                    className="w-full px-3 py-1.5 text-xs bg-white border border-slate-300 rounded-xl font-mono font-bold"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-slate-600 font-semibold block mb-1">
                    Height (cm)
                  </label>
                  <input
                    type="number"
                    value={profile.heightCm}
                    min={120}
                    max={230}
                    onChange={(e) =>
                      setProfile({
                        ...profile,
                        heightCm: Number(e.target.value) || 175,
                      })
                    }
                    className="w-full px-3 py-1.5 text-xs bg-white border border-slate-300 rounded-xl font-mono font-bold"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-slate-600 font-semibold block mb-1">
                    Activity Level
                  </label>
                  <select
                    value={profile.activityLevel}
                    onChange={(e) =>
                      setProfile({
                        ...profile,
                        activityLevel: e.target.value as any,
                      })
                    }
                    className="w-full px-3 py-1.5 text-xs bg-white border border-slate-300 rounded-xl font-bold"
                  >
                    <option value="sedentary">Sedentary</option>
                    <option value="moderate">Moderate</option>
                    <option value="athletic">Athletic / Lean</option>
                  </select>
                </div>
                <div>
                  <label className="text-[11px] text-slate-600 font-semibold block mb-1">
                    Hydration
                  </label>
                  <select
                    value={profile.hydrationLevel}
                    onChange={(e) =>
                      setProfile({
                        ...profile,
                        hydrationLevel: e.target.value as any,
                      })
                    }
                    className="w-full px-3 py-1.5 text-xs bg-white border border-slate-300 rounded-xl font-bold"
                  >
                    <option value="low">Low</option>
                    <option value="normal">Normal</option>
                    <option value="high">High (Hyper-Hydrated)</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* MAIN COUNTDOWN CARD */}
          {hasActiveLog ? (
            <div className="bg-[#F8F9FB] rounded-2xl p-5 sm:p-6 border border-slate-200/80 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200/70 pb-4">
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider font-mono">
                    Standard Workplace Screen (50 ng/mL Cut-Off)
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1 flex items-baseline gap-2">
                    <span className="text-[#007AFF]">
                      {multiDoseResult.isCurrentlyClear50
                        ? 'Negative / Clean'
                        : formatCountdown(multiDoseResult.hoursFromNowToClear50)}
                    </span>
                    {!multiDoseResult.isCurrentlyClear50 && (
                      <span className="text-xs font-mono font-medium text-slate-500">
                        (~{Math.round(multiDoseResult.hoursFromNowToClear50)}h remaining)
                      </span>
                    )}
                  </div>
                </div>

                {!multiDoseResult.isCurrentlyClear50 && (
                  <div className="text-right sm:text-right">
                    <div className="text-[11px] text-slate-500 font-medium">Estimated Clear Date</div>
                    <div className="text-xs font-mono font-bold text-slate-800">
                      {new Date(multiDoseResult.clearDate50Iso).toLocaleDateString('en-US', {
                        weekday: 'short',
                        month: 'short',
                        day: 'numeric',
                        hour: 'numeric',
                        minute: '2-digit',
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Biological Matrices Elimination Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                <div className="p-3 bg-white rounded-xl border border-slate-200/60">
                  <div className="text-[10px] font-mono uppercase text-slate-500 font-bold">
                    Urine (Immuno)
                  </div>
                  <div className="text-sm sm:text-base font-extrabold text-slate-900 mt-0.5">
                    {multiDoseResult.isCurrentlyClear50
                      ? 'Clean'
                      : formatCountdown(multiDoseResult.hoursFromNowToClear50)}
                  </div>
                  <div className="text-[10px] text-slate-500 mt-0.5">50 ng/mL standard</div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-slate-200/60">
                  <div className="text-[10px] font-mono uppercase text-slate-500 font-bold">
                    Urine (Confirmatory)
                  </div>
                  <div className="text-sm sm:text-base font-extrabold text-slate-900 mt-0.5">
                    {multiDoseResult.isCurrentlyClear15
                      ? 'Clean'
                      : formatCountdown(multiDoseResult.hoursFromNowToClear15)}
                  </div>
                  <div className="text-[10px] text-slate-500 mt-0.5">15 ng/mL GC/LC-MS</div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-slate-200/60">
                  <div className="text-[10px] font-mono uppercase text-slate-500 font-bold">
                    Whole Blood
                  </div>
                  <div className="text-sm sm:text-base font-extrabold text-slate-900 mt-0.5">
                    {multiDoseResult.hoursFromNowToClearBlood <= 0
                      ? 'Clean'
                      : formatCountdown(multiDoseResult.hoursFromNowToClearBlood)}
                  </div>
                  <div className="text-[10px] text-slate-500 mt-0.5">Active bloodstream</div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-slate-200/60">
                  <div className="text-[10px] font-mono uppercase text-slate-500 font-bold">
                    Oral Fluid (Saliva)
                  </div>
                  <div className="text-sm sm:text-base font-extrabold text-slate-900 mt-0.5">
                    {multiDoseResult.hoursFromNowToClearSaliva <= 0
                      ? 'Clean'
                      : formatCountdown(multiDoseResult.hoursFromNowToClearSaliva)}
                  </div>
                  <div className="text-[10px] text-slate-500 mt-0.5">Roadside swab</div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-[#F8F9FB] rounded-2xl p-6 sm:p-8 border border-slate-200/80 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">All Systems Clear</h3>
                <p className="text-xs text-slate-500 max-w-md mx-auto mt-1">
                  You have no active doses logged. When doses are logged from the Substance Library tab, your personalized metabolic clearance countdown and matrix elimination timeline will appear here.
                </p>
              </div>
            </div>
          )}

          {/* ACTIVE SUBSTANCES IN SYSTEM */}
          {hasActiveLog && (
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-600 font-mono">
                  Active Substances Logged ({logEntries.length})
                </h2>
                <button
                  type="button"
                  onClick={handleClearAllEntries}
                  className="text-xs text-red-600 hover:text-red-700 font-semibold"
                >
                  Clear All
                </button>
              </div>

              <div className="space-y-2">
                <AnimatePresence mode="popLayout">
                  {multiDoseResult.entrySummaries.map((summary, sIdx) => (
                    <motion.div
                      key={summary.entryId}
                      layout
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{
                        duration: 0.25,
                        ease: [0.16, 1, 0.3, 1],
                        delay: Math.min(sIdx * 0.03, 0.15),
                      }}
                      className="p-3.5 bg-white rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors hover:border-slate-300"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-9 h-9 rounded-xl text-white flex items-center justify-center shrink-0 font-bold text-xs font-mono shadow-2xs"
                          style={{ backgroundColor: getSubstanceColor(summary.compound.id) }}
                        >
                          {summary.compound.shortName.slice(0, 3)}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-slate-900">
                              {summary.compound.shortName}
                            </span>
                            <span className="text-[10px] font-mono text-[#007AFF] bg-blue-50 px-2 py-0.5 rounded-full">
                              {summary.doseMg} mg · {summary.route}
                            </span>
                          </div>
                          <div className="text-[11px] text-slate-500 mt-0.5">
                            Taken{' '}
                            {new Date(summary.timestampIso).toLocaleString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              hour: 'numeric',
                              minute: '2-digit',
                            })}{' '}
                            ({Math.round(summary.hoursSinceDose)}h ago)
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
                        <div className="text-right">
                          <div className="text-[10px] font-mono text-slate-500 uppercase">
                            Clean In
                          </div>
                          <div className="text-xs font-mono font-bold text-slate-900">
                            {summary.individualHoursFromNowToClear15 <= 0
                              ? 'Cleared'
                              : `~${formatCountdown(summary.individualHoursFromNowToClear15)}`}
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => handleDeleteEntry(summary.entryId)}
                          title="Remove dose entry"
                          aria-label={`Remove dose entry for ${summary.compound.shortName}`}
                          className="p-2 text-slate-400 hover:text-red-600 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          )}
        </div>
      </motion.section>

      {/* MERGED: WEEKLY CONSUMPTION FREQUENCY & CLEAN TIME ESTIMATOR CONSOLE */}
      <motion.section
        data-testid="weekly-consumption-graph-section"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6"
      >
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between gap-3">
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#007AFF] flex items-center gap-1.5">
                <BarChart3 className="w-3.5 h-3.5" />
                Consumption & Clearance Telemetry · {weeklyAnalytics.summary.frequencyTier}
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mt-1">
                Weekly Consumption & Clearance Telemetry
              </h2>
            </div>
          </div>

          {/* Timeframe & Metric Segmented Controls - Full Line */}
          <div className="flex items-center justify-between gap-2">
            <div
              role="group"
              aria-label="Chart Timeframe"
              className="flex items-center gap-1 p-1 bg-[#F2F2F7] rounded-xl"
            >
              <button
                type="button"
                onClick={() => setChartTimeframe('7d_daily')}
                className={`px-2.5 py-1 text-[11px] font-bold rounded-lg transition-all ${
                  chartTimeframe === '7d_daily'
                    ? 'bg-white text-slate-900 shadow-2xs'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                Last 7 Days
              </button>
              <button
                type="button"
                onClick={() => setChartTimeframe('4w_weekly')}
                className={`px-2.5 py-1 text-[11px] font-bold rounded-lg transition-all ${
                  chartTimeframe === '4w_weekly'
                    ? 'bg-white text-slate-900 shadow-2xs'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                4-Week Trend
              </button>
            </div>

            <div
              role="group"
              aria-label="Chart Metric"
              className="flex items-center gap-1 p-1 bg-[#F2F2F7] rounded-xl"
            >
              <button
                type="button"
                onClick={() => setChartMetric('sessions')}
                className={`px-2.5 py-1 text-[11px] font-bold rounded-lg transition-all ${
                  chartMetric === 'sessions'
                    ? 'bg-white text-slate-900 shadow-2xs'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                Sessions
              </button>
              <button
                type="button"
                onClick={() => setChartMetric('totalMg')}
                className={`px-2.5 py-1 text-[11px] font-bold rounded-lg transition-all ${
                  chartMetric === 'totalMg'
                    ? 'bg-white text-slate-900 shadow-2xs'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                Total mg
              </button>
            </div>
          </div>
        </div>

        {/* 4-Column Summary KPI Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-3.5 bg-[#F8F9FB] rounded-2xl border border-slate-200/70">
            <div className="text-[10px] font-mono uppercase text-slate-500 font-bold">
              7-Day Doses
            </div>
            <div className="text-lg sm:text-xl font-extrabold text-slate-900 font-mono mt-0.5">
              {weeklyAnalytics.summary.totalSessions7d}
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">
              {weeklyAnalytics.summary.frequencyTier}
            </div>
          </div>

          <div className="p-3.5 bg-[#F8F9FB] rounded-2xl border border-slate-200/70">
            <div className="text-[10px] font-mono uppercase text-slate-500 font-bold">
              Active vs Clean Days
            </div>
            <div className="text-lg sm:text-xl font-extrabold text-[#007AFF] font-mono mt-0.5">
              {weeklyAnalytics.summary.activeDays7d} / 7 Days
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">
              {weeklyAnalytics.summary.cleanDays7d} clean days this week
            </div>
          </div>

          <div className="p-3.5 bg-[#F8F9FB] rounded-2xl border border-slate-200/70">
            <div className="text-[10px] font-mono uppercase text-slate-500 font-bold">
              7-Day Cumulative
            </div>
            <div className="text-lg sm:text-xl font-extrabold text-slate-900 font-mono mt-0.5">
              {weeklyAnalytics.summary.totalMg7d} mg
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">
              Peak: {weeklyAnalytics.summary.peakDayLabel}
            </div>
          </div>

          <div className="p-3.5 bg-[#F8F9FB] rounded-2xl border border-slate-200/70">
            <div className="text-[10px] font-mono uppercase text-slate-500 font-bold">
              4-Week Rolling Avg
            </div>
            <div className="text-lg sm:text-xl font-extrabold text-slate-900 font-mono mt-0.5">
              {weeklyAnalytics.summary.avgSessionsPerWeek4w} / wk
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">
              28-day session cadence
            </div>
          </div>
        </div>

        {/* Dynamic Multi-Substance Recharts BarChart Viewport */}
        <div className="p-4 sm:p-5 bg-[#F8F9FB] rounded-2xl border border-slate-200/80 space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-600">
            <span className="font-semibold">
              {chartTimeframe === '7d_daily'
                ? 'Daily Intake'
                : '4-Week Rolling Window'}
            </span>
          </div>

          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={activeBuckets as any}
                margin={{ top: 12, right: 12, left: -16, bottom: 4 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#E2E8F0"
                />
                <XAxis
                  dataKey={chartTimeframe === '7d_daily' ? 'dayLabel' : 'weekLabel'}
                  tick={{ fill: '#475569', fontSize: 11, fontFamily: 'ui-monospace, monospace' }}
                  axisLine={{ stroke: '#CBD5E1' }}
                  tickLine={false}
                />
                <YAxis
                  domain={[0, maxVal]}
                  allowDecimals={chartMetric === 'totalMg'}
                  tick={{ fill: '#64748B', fontSize: 11, fontFamily: 'ui-monospace, monospace' }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  cursor={{ fill: 'rgba(0, 122, 255, 0.04)' }}
                  content={({ active, payload }) => {
                    if (!active || !payload || !payload.length) return null;
                    const d: any = payload[0].payload;
                    const title = d.fullDateLabel || `${d.weekLabel} (${d.rangeLabel})`;
                    return (
                      <div className="bg-slate-900 text-white px-3 py-2.5 rounded-xl shadow-lg border border-slate-700 text-xs space-y-1.5 min-w-[170px]">
                        <div className="font-mono font-bold text-sky-400">
                          {title}
                        </div>
                        <div className="font-semibold text-slate-200">
                          {d.sessions} {d.sessions === 1 ? 'Session' : 'Sessions'} · {d.totalMg} mg total
                        </div>
                        {d.substances && d.substances.length > 0 ? (
                          <div className="pt-1.5 border-t border-slate-700/80 space-y-1 text-[11px] font-mono">
                            {d.substances.map((s: SubstanceDaySummary, sIdx: number) => (
                              <div
                                key={`tooltip-${s.id}-${sIdx}`}
                                className="flex items-center justify-between gap-2"
                              >
                                <span className="flex items-center gap-1.5">
                                  <span
                                    className="w-2 h-2 rounded-full shrink-0"
                                    style={{ backgroundColor: getSubstanceColor(s.id) }}
                                  />
                                  <span>{s.name}</span>
                                </span>
                                <span className="text-slate-300 font-bold">
                                  {chartMetric === 'sessions'
                                    ? `${s.count}×`
                                    : `${s.totalMg} mg`}
                                </span>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="text-[11px] text-slate-400 font-mono">
                            No substances logged
                          </div>
                        )}
                      </div>
                    );
                  }}
                />
                <Bar
                  dataKey={chartMetric}
                  name="MultiSubstance"
                  shape={renderMultiSubstanceDayBar}
                  maxBarSize={48}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Active Substances Legend (if any substances are active in the view) */}
          {activeSubstancesInChart.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-200/70 text-xs">
              <span className="text-[10px] font-mono uppercase text-slate-500 font-bold">
                Logged Substances:
              </span>
              {activeSubstancesInChart.map((s, legIdx) => (
                <button
                  key={`legend-sub-${s.id}-${legIdx}`}
                  type="button"
                  onClick={() => setEstimatorSubstanceId(s.id)}
                  className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md font-mono text-[11px] transition-all border ${
                    estimatorSubstanceId === s.id
                      ? 'bg-slate-900 text-white border-slate-900 shadow-2xs font-bold'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                  }`}
                  title="Click to inspect clearance windows below"
                >
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: getSubstanceColor(s.id) }}
                  />
                  <span>{s.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>

      </motion.section>
    </div>
  );
};
