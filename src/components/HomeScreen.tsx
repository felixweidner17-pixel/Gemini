import React, { useState, useEffect, useMemo } from 'react';
import {
  ALL_SUBSTANCES_DATABASE,
  getSubstanceById,
} from '../data/allSubstances';
import {
  isCannabinoidSubstance,
  getSubstanceMacroCategory,
} from '../data/cannabinoids';
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
  Clock,
  CheckCircle2,
  AlertCircle,
  Trash2,
  BookOpen,
  SlidersHorizontal,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Search,
  ShieldCheck,
  Activity,
  ArrowRight,
  Droplets,
  Scale,
} from 'lucide-react';

interface HomeScreenProps {
  onNavigateToLibrary: (substanceId?: string) => void;
  onOpenDosageInLibrary: (substanceId: string) => void;
}

const STORAGE_KEY_PROFILE = 'cannapharm_user_anthropometrics_v2';
const STORAGE_KEY_LOG = 'cannapharm_dose_log_entries_v2';

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onNavigateToLibrary,
  onOpenDosageInLibrary,
}) => {
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

  // Quick Clean-Time Estimator state (for ANY substance from the 372 catalog)
  const [estimatorSubstanceId, setEstimatorSubstanceId] = useState<string>('delta9-thc');
  const [estimatorSearch, setEstimatorSearch] = useState<string>('');
  const [estimatorFrequency, setEstimatorFrequency] = useState<UsageFrequency>('single');
  const [showProfileDrawer, setShowProfileDrawer] = useState<boolean>(false);

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

  // Filter substances for the quick estimator search
  const filteredSubstances = useMemo(() => {
    if (!estimatorSearch.trim()) return ALL_SUBSTANCES_DATABASE.slice(0, 50);
    const q = estimatorSearch.toLowerCase();
    return ALL_SUBSTANCES_DATABASE.filter(
      (s) =>
        s.shortName.toLowerCase().includes(q) ||
        s.name.toLowerCase().includes(q) ||
        s.classification.toLowerCase().includes(q)
    ).slice(0, 50);
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
  const isAllClear = !hasActiveLog || (multiDoseResult.isCurrentlyClear50 && multiDoseResult.isCurrentlyClear15);

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12">
      {/* MINIMALIST HERO: HOW LONG TILL I'M CLEAN? */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs relative overflow-hidden">
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
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#007AFF]" />
                Personal Toxicokinetic Status
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                How Long Till I&rsquo;m Clean?
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
                  <div className="text-[10px] text-slate-500 mt-0.5">Active CNS Window</div>
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
                  <div className="text-[10px] text-slate-500 mt-0.5">Roadside Swab</div>
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
                  You have no active doses logged. When you log doses through the Substance Library, your personalized metabolic clearance countdown will appear right here.
                </p>
              </div>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigateToLibrary()}
                  className="px-5 py-2.5 bg-[#007AFF] hover:bg-[#0062CC] text-white text-xs font-bold rounded-full transition-all shadow-xs inline-flex items-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Browse Library to Log a Dose</span>
                </button>
              </div>
            </div>
          )}

          {/* ACTIVE SUBSTANCES IN SYSTEM (LOGGED THROUGH LIBRARY) */}
          {hasActiveLog && (
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-600 font-mono">
                  Active Substances Logged ({logEntries.length})
                </h2>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => onNavigateToLibrary()}
                    className="text-xs font-bold text-[#007AFF] hover:underline flex items-center gap-1"
                  >
                    <span>+ Log from Library</span>
                  </button>
                  <span className="text-slate-300">·</span>
                  <button
                    type="button"
                    onClick={handleClearAllEntries}
                    className="text-xs text-red-600 hover:text-red-700 font-semibold"
                  >
                    Clear All
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                {multiDoseResult.entrySummaries.map((summary) => (
                  <div
                    key={summary.entryId}
                    className="p-3.5 bg-white rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors hover:border-slate-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#007AFF] flex items-center justify-center shrink-0 font-bold text-xs font-mono border border-blue-200/60">
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
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* MINIMALIST QUICK ESTIMATOR: NOT JUST FOR WEED! ANY SUBSTANCE IN THE 372 CATALOG */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-5">
        <div>
          <div className="flex items-center justify-between gap-2">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#007AFF] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Universal Toxicokinetic Calculator
            </span>
            <span className="text-[11px] font-mono text-slate-400">
              372 Substances Supported
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mt-1">
            Check Clean Time For Any Substance
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Look up detection windows for opioids, benzodiazepines, stimulants, dissociatives, psychedelics, alcohol, or cannabinoids without logging a dose.
          </p>
        </div>

        {/* Substance Selector & Frequency Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 block">
              Select Substance:
            </label>
            <div className="relative">
              <select
                value={estimatorSubstanceId}
                onChange={(e) => setEstimatorSubstanceId(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#F2F2F7] border border-slate-300/80 rounded-2xl text-xs font-bold text-slate-900 focus:ring-2 focus:ring-[#007AFF] shadow-2xs"
              >
                {ALL_SUBSTANCES_DATABASE.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.shortName} ({s.classification})
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 block">
              Usage Frequency Pattern:
            </label>
            <div className="grid grid-cols-4 gap-1 p-1 bg-[#F2F2F7] rounded-2xl">
              {(
                [
                  { id: 'single', label: 'Single' },
                  { id: 'occasional', label: '1–2x/wk' },
                  { id: 'moderate', label: '3–4x/wk' },
                  { id: 'heavy_chronic', label: 'Daily' },
                ] as const
              ).map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setEstimatorFrequency(f.id)}
                  className={`py-1.5 px-2 text-[11px] font-bold rounded-xl transition-all ${
                    estimatorFrequency === f.id
                      ? 'bg-white text-slate-900 shadow-2xs'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Minimalist Estimation Output Card */}
        <div className="p-5 bg-[#F8F9FB] rounded-2xl border border-slate-200/80 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
            <div>
              <div className="text-[11px] font-mono text-[#007AFF] font-bold">
                {estimatorSubstance.classification}
              </div>
              <div className="text-lg font-extrabold text-slate-900">
                {estimatorSubstance.shortName}
              </div>
              <div className="text-xs text-slate-500">
                {estimatorSubstance.name} · t½: ~{estimatorSubstance.terminalHalfLifeHours} hours
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => onNavigateToLibrary(estimatorSubstance.id)}
                className="px-3.5 py-1.5 bg-white border border-slate-200 hover:border-slate-300 text-xs font-bold text-slate-800 rounded-xl transition-colors shadow-2xs flex items-center gap-1.5"
              >
                <BookOpen className="w-3.5 h-3.5 text-[#007AFF]" />
                <span>View in Library</span>
              </button>
              <button
                type="button"
                onClick={() => onOpenDosageInLibrary(estimatorSubstance.id)}
                className="px-3.5 py-1.5 bg-[#007AFF] hover:bg-[#0062CC] text-xs font-bold text-white rounded-xl transition-colors shadow-2xs flex items-center gap-1.5"
              >
                <span>Calculate Dose</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Clean Detection Matrices */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 bg-white rounded-xl border border-slate-200/60">
              <div className="text-[10px] font-mono uppercase text-slate-500 font-bold">
                Urine Screen
              </div>
              <div className="text-sm sm:text-base font-extrabold text-[#007AFF] mt-0.5">
                {singleEstimation.windows.urine50.estimatedDaysMin}–{singleEstimation.windows.urine50.estimatedDaysMax} Days
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5">
                {singleEstimation.windows.urine50.detectableOnStandardPanel
                  ? 'Standard immunoassay'
                  : 'Specialized panel needed'}
              </div>
            </div>

            <div className="p-3 bg-white rounded-xl border border-slate-200/60">
              <div className="text-[10px] font-mono uppercase text-slate-500 font-bold">
                Urine GC/MS
              </div>
              <div className="text-sm sm:text-base font-extrabold text-slate-900 mt-0.5">
                {singleEstimation.windows.urine15.estimatedDaysMin}–{singleEstimation.windows.urine15.estimatedDaysMax} Days
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5">Confirmatory limit</div>
            </div>

            <div className="p-3 bg-white rounded-xl border border-slate-200/60">
              <div className="text-[10px] font-mono uppercase text-slate-500 font-bold">
                Whole Blood
              </div>
              <div className="text-sm sm:text-base font-extrabold text-slate-900 mt-0.5">
                {singleEstimation.windows.blood.estimatedDaysMin}–{singleEstimation.windows.blood.estimatedDaysMax} Days
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5">Active bloodstream</div>
            </div>

            <div className="p-3 bg-white rounded-xl border border-slate-200/60">
              <div className="text-[10px] font-mono uppercase text-slate-500 font-bold">
                Oral Fluid / Saliva
              </div>
              <div className="text-sm sm:text-base font-extrabold text-slate-900 mt-0.5">
                {singleEstimation.windows.saliva.estimatedDaysMin}–{singleEstimation.windows.saliva.estimatedDaysMax} Days
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5">Roadside swab window</div>
            </div>
          </div>

          {/* Testing Advisory Note */}
          <div className="p-3 bg-white rounded-xl border border-slate-200/60 text-xs text-slate-600 flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900">Forensic Testing Advisory: </strong>
              {singleEstimation.windows.urine50.notes}
            </div>
          </div>
        </div>

        {/* Minimalist Note on Dose Logging */}
        <div className="pt-2 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            Doses can only be logged directly through the Substance Library & Dosage Workbench.
          </div>
          <button
            type="button"
            onClick={() => onNavigateToLibrary()}
            className="text-xs font-bold text-[#007AFF] hover:underline flex items-center gap-1"
          >
            <span>Open Library Catalog</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </section>
    </div>
  );
};
