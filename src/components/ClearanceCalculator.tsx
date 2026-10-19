import React, { useEffect, useState } from 'react';
import {
  applyDerivativeModification,
  CANNABINOID_DATABASE,
  DERIVATIVE_MOD_DESCRIPTIONS,
  DerivativeModType,
  getCannabinoidById,
  getSubstanceMacroCategory,
  isCannabinoidSubstance,
} from '../data/cannabinoids';
import {
  AdministrationRoute,
  calculateVapeDrawDoseMg,
  decodePortableSyncToken,
  DEFAULT_ROA,
  DEFAULT_USER_PROFILE,
  DoseLogEntry,
  encodePortableSyncToken,
  simulateClearanceKinetics,
  simulateMultiDoseClearance,
  UsageFrequency,
  UserAnthropometrics,
  VapeVoltageTier,
} from '../utils/pharmacokinetics';
import {
  Plus,
  Trash2,
  RotateCcw,
  Clock,
  CheckCircle2,
  AlertCircle,
  Copy,
  Download,
  Upload,
  HardDrive,
  Shield,
  SlidersHorizontal,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import {
  CannabinoidSelect,
  CustomOptionSelect,
} from './CannabinoidSelect';

interface ClearanceCalculatorProps {
  selectedCannabinoidId: string;
  onSelectCannabinoid: (id: string) => void;
}

const STORAGE_KEY_PROFILE = 'cannapharm_user_anthropometrics_v2';
const STORAGE_KEY_LOG = 'cannapharm_dose_log_entries_v2';
const STORAGE_KEY_MODE = 'cannapharm_storage_posture_v1';

const COMPOUND_LINE_COLORS = [
  '#0D9488', // Teal
  '#7C3AED', // Violet
  '#EA580C', // Orange
  '#0284C7', // Sky
  '#BE185D', // Pink
  '#4F46E5', // Indigo
];

function createDefaultSampleEntries(): DoseLogEntry[] {
  const now = Date.now();
  return [
    {
      id: 'sample-1',
      cannabinoidId: '9h-hhcp',
      derivativeMod: 'native',
      route: 'inhalation',
      doseMg: 1.6,
      timestampIso: new Date(now - 38 * 3600000).toISOString(),
      unitLabel: '1 Puff × 3.5s vape hit @ 90%',
    },
    {
      id: 'sample-2',
      cannabinoidId: '10-oh-hhc',
      derivativeMod: 'native',
      route: 'inhalation',
      doseMg: 3.7,
      timestampIso: new Date(now - 18 * 3600000).toISOString(),
      unitLabel: '2 Puffs × 4.0s vape hit @ 90%',
    },
    {
      id: 'sample-3',
      cannabinoidId: 'delta9-thc',
      derivativeMod: 'native',
      route: 'inhalation',
      doseMg: 3.2,
      timestampIso: new Date(now - 4 * 3600000).toISOString(),
      unitLabel: '2 Puffs × 3.5s vape hit @ 90%',
    },
  ];
}

function toLocalDatetimeInputValue(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(
    d.getHours()
  )}:${pad(d.getMinutes())}`;
}

function formatClearDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '—';
  return d.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
}

function formatCountdownHours(hours: number): string {
  if (hours <= 0) return 'Clear Now (0h)';
  if (hours < 24) return `${Math.round(hours)}h remaining`;
  const days = Math.floor(hours / 24);
  const remHours = Math.round(hours % 24);
  return remHours > 0
    ? `${days}d ${remHours}h (${(hours / 24).toFixed(1)} days)`
    : `${days}d (${(hours / 24).toFixed(1)} days)`;
}

export const ClearanceCalculator: React.FC<ClearanceCalculatorProps> = ({
  selectedCannabinoidId,
  onSelectCannabinoid,
}) => {
  const [mode, setMode] = useState<'multi_log' | 'single_frequency'>('multi_log');
  const [showBodyProfileSheet, setShowBodyProfileSheet] =
    useState<boolean>(false);

  // Storage Posture: 'local' (Persistent browser localStorage default) vs 'session_ram' (Ephemeral in-memory only)
  const [storagePosture, setStoragePosture] = useState<'local' | 'session_ram'>(
    () => {
      try {
        const saved = localStorage.getItem(STORAGE_KEY_MODE);
        if (saved === 'session_ram') return 'session_ram';
      } catch {
        // ignore
      }
      return 'local';
    }
  );

  // Portable Cross-Device Sync Drawer State
  const [showSyncPanel, setShowSyncPanel] = useState<boolean>(false);
  const [syncImportInput, setSyncImportInput] = useState<string>('');
  const [syncStatusBanner, setSyncStatusBanner] = useState<string | null>(null);

  // Persistent Personal Anthropometric Profile (Default: 55kg, 172cm, Male, Sedentary / Stay-at-Home, Vaping ROA)
  const [profile, setProfile] = useState<UserAnthropometrics>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_PROFILE);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed.weightKg === 'number') {
          return {
            ...DEFAULT_USER_PROFILE,
            ...parsed,
          };
        }
      }
    } catch {
      // ignore storage errors
    }
    return { ...DEFAULT_USER_PROFILE };
  });

  // Persistent Multi-Cannabinoid Dose Log
  const [logEntries, setLogEntries] = useState<DoseLogEntry[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_LOG);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          return parsed;
        }
      }
    } catch {
      // ignore storage errors
    }
    return createDefaultSampleEntries();
  });

  // Sync to or purge from localStorage depending on storagePosture
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_MODE, storagePosture);
      if (storagePosture === 'local') {
        localStorage.setItem(STORAGE_KEY_PROFILE, JSON.stringify(profile));
        localStorage.setItem(STORAGE_KEY_LOG, JSON.stringify(logEntries));
      } else {
        localStorage.removeItem(STORAGE_KEY_PROFILE);
        localStorage.removeItem(STORAGE_KEY_LOG);
      }
    } catch {
      // ignore
    }
  }, [profile, logEntries, storagePosture]);

  // Automatically restore portable state if URL contains #sync=CP1:...
  useEffect(() => {
    try {
      const hash = window.location.hash || '';
      const match = hash.match(/sync=(CP1:[A-Za-z0-9+/=%_-]+)/);
      if (match && match[1]) {
        const decoded = decodePortableSyncToken(decodeURIComponent(match[1]));
        if (decoded) {
          setProfile(decoded.profile);
          setLogEntries(decoded.entries);
          setSyncStatusBanner(
            `Loaded ${decoded.entries.length} logged dose(s) and body profile from Shareable Sync Link.`
          );
        }
      }
    } catch {
      // ignore
    }
  }, []);

  // New Dose Logger Form State
  const cleanBaseId = selectedCannabinoidId.replace(
    /-mod-(9h|9-oh|9oh|10-oh|10oh|8-oh|8oh|11-oh|11oh|oac|o-acetate)$/,
    ''
  );
  const [draftCompoundId, setDraftCompoundId] = useState<string>(cleanBaseId);
  const [draftMod, setDraftMod] = useState<DerivativeModType>('native');
  const [draftRoute, setDraftRoute] = useState<AdministrationRoute>(DEFAULT_ROA);

  // 0-10s Vape Hit Duration & Puff Calibrator State
  const [vapeDrawSeconds, setVapeDrawSeconds] = useState<number>(3.5);
  const [vapePuffCount, setVapePuffCount] = useState<number>(2);
  const [vapeDistillatePct, setVapeDistillatePct] = useState<number>(90);
  const [vapeVoltage, setVapeVoltage] = useState<VapeVoltageTier>('medium');

  const [draftDoseMg, setDraftDoseMg] = useState<number>(() =>
    calculateVapeDrawDoseMg(3.5, 2, 90, 'medium')
  );
  const [draftUnitLabel, setDraftUnitLabel] = useState<string>(
    '2 Puffs × 3.5s vape hit @ 90%'
  );
  const [draftHoursAgo, setDraftHoursAgo] = useState<number>(2);
  const [useCustomTimestamp, setUseCustomTimestamp] = useState<boolean>(false);
  const [draftCustomIso, setDraftCustomIso] = useState<string>(() =>
    new Date(Date.now() - 2 * 3600000).toISOString()
  );

  // Sync draftCompoundId and draftMod when parent selectedCannabinoidId changes
  useEffect(() => {
    const modMatch = selectedCannabinoidId.match(
      /^(.+)-mod-(9h|9-oh|9oh|10-oh|10oh|8-oh|8oh|11-oh|11oh|oac|o-acetate)$/
    );
    if (modMatch) {
      setDraftCompoundId(modMatch[1]);
      const rawMod = modMatch[2];
      const normalizedMod: DerivativeModType =
        rawMod === '9h'
          ? '9h'
          : rawMod === '9-oh' || rawMod === '9oh'
          ? '9-oh'
          : rawMod === '10-oh' || rawMod === '10oh'
          ? '10-oh'
          : rawMod === '8-oh' || rawMod === '8oh'
          ? '8-oh'
          : rawMod === '11-oh' || rawMod === '11oh'
          ? '11-oh'
          : 'o-acetate';
      setDraftMod(normalizedMod);
    } else {
      setDraftCompoundId(selectedCannabinoidId);
      const selectedObj = getCannabinoidById(selectedCannabinoidId);
      if (!isCannabinoidSubstance(selectedObj)) {
        const defaultNonCannabinoidRoute: AdministrationRoute =
          selectedObj.id === 'ketamine' || selectedObj.id === 'cocaine'
            ? 'inhalation'
            : 'oral';
        const defaultMg =
          defaultNonCannabinoidRoute === 'inhalation'
            ? selectedObj.baseInhaledThresholdMg * 2
            : selectedObj.baseOralThresholdMg * 2;
        setDraftRoute(defaultNonCannabinoidRoute);
        setDraftDoseMg(defaultMg);
        setDraftUnitLabel(
          `${defaultMg} mg ${
            defaultNonCannabinoidRoute === 'inhalation'
              ? 'insufflated / inhaled'
              : 'oral dose'
          }`
        );
      }
    }
  }, [selectedCannabinoidId]);

  // Helper to update vape draw parameters and automatically sync milligrams
  const updateVapeCalibration = (
    nextSeconds: number,
    nextPuffs: number,
    nextPct: number,
    nextVolt: VapeVoltageTier
  ) => {
    setVapeDrawSeconds(nextSeconds);
    setVapePuffCount(nextPuffs);
    setVapeDistillatePct(nextPct);
    setVapeVoltage(nextVolt);
    setDraftRoute('inhalation');
    const computedMg = calculateVapeDrawDoseMg(
      nextSeconds,
      nextPuffs,
      nextPct,
      nextVolt
    );
    setDraftDoseMg(computedMg);
    setDraftUnitLabel(
      `${nextPuffs} Puff${nextPuffs === 1 ? '' : 's'} × ${nextSeconds}s hit @ ${nextPct}% (${nextVolt} V)`
    );
  };

  // Single-compound estimator state (Calibrated for Vaping ROA default: 2 puffs × 3.5s = 3.2 mg)
  const [singleFrequency, setSingleFrequency] =
    useState<UsageFrequency>('occasional');
  const [singleVapeSeconds, setSingleVapeSeconds] = useState<number>(3.5);
  const [singleVapePuffs, setSingleVapePuffs] = useState<number>(2);
  const [singleLastDoseMg, setSingleLastDoseMg] = useState<number>(() =>
    calculateVapeDrawDoseMg(3.5, 2, 90, 'medium')
  );

  // Hover states for SVG charts
  const [hoveredMultiIdx, setHoveredMultiIdx] = useState<number | null>(null);
  const [hoveredSingleIdx, setHoveredSingleIdx] = useState<number | null>(null);

  const draftBaseCompound = getCannabinoidById(draftCompoundId);
  const draftEffectiveCompound = applyDerivativeModification(
    draftBaseCompound,
    draftMod
  );

  const handleAddLogEntry = (e: React.FormEvent) => {
    e.preventDefault();
    const clampedMg = Math.max(0.05, Math.min(1000, Number(draftDoseMg) || 0.1));
    const entryTimestampIso = useCustomTimestamp
      ? new Date(draftCustomIso).toISOString()
      : new Date(Date.now() - draftHoursAgo * 3600000).toISOString();

    const newEntry: DoseLogEntry = {
      id: `dose-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      cannabinoidId: draftCompoundId,
      derivativeMod: draftMod,
      route: draftRoute,
      doseMg: clampedMg,
      timestampIso: entryTimestampIso,
      unitLabel: draftUnitLabel,
    };

    setLogEntries((prev) =>
      [...prev, newEntry].sort(
        (a, b) => Date.parse(a.timestampIso) - Date.parse(b.timestampIso)
      )
    );
  };

  const handleRemoveEntry = (id: string) => {
    setLogEntries((prev) => prev.filter((item) => item.id !== id));
  };

  const handleApplyQuickDosePreset = (
    mg: number,
    route: AdministrationRoute,
    label: string
  ) => {
    setDraftDoseMg(mg);
    setDraftRoute(route);
    setDraftUnitLabel(label);
  };

  const handleApplyHoursAgoPreset = (hoursAgo: number) => {
    setUseCustomTimestamp(false);
    setDraftHoursAgo(hoursAgo);
    setDraftCustomIso(new Date(Date.now() - hoursAgo * 3600000).toISOString());
  };

  const handleCopySyncToken = async () => {
    const token = encodePortableSyncToken(profile, logEntries);
    try {
      await navigator.clipboard.writeText(token);
      setSyncStatusBanner(
        'Copied portable Cross-Device Sync Code to clipboard.'
      );
    } catch {
      setSyncImportInput(token);
      setSyncStatusBanner(
        'Generated Sync Code in the box below — copy it to transfer across devices.'
      );
    }
  };

  const handleCopyShareableSyncUrl = async () => {
    const token = encodePortableSyncToken(profile, logEntries);
    const shareUrl = `${window.location.origin}${window.location.pathname}#sync=${encodeURIComponent(
      token
    )}`;
    try {
      window.history.replaceState(null, '', `#sync=${encodeURIComponent(token)}`);
      await navigator.clipboard.writeText(shareUrl);
      setSyncStatusBanner(
        'Copied Shareable Sync URL (#sync=...) — open on any device to load your log & body metrics.'
      );
    } catch {
      setSyncImportInput(shareUrl);
      setSyncStatusBanner('Generated Shareable Sync URL in the box below.');
    }
  };

  const handleDownloadJsonBackup = () => {
    const payload = {
      version: 1,
      exportedAtIso: new Date().toISOString(),
      profile,
      entries: logEntries,
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `cannapharm-clearance-log-${new Date()
      .toISOString()
      .slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    setSyncStatusBanner('Downloaded JSON backup of profile and intake log.');
  };

  const handleRestoreSyncToken = () => {
    if (!syncImportInput.trim()) return;
    const rawTrimmed = syncImportInput.trim();
    const urlMatch = rawTrimmed.match(/sync=(CP1:[A-Za-z0-9+/=%_-]+)/);
    const candidate = urlMatch ? decodeURIComponent(urlMatch[1]) : rawTrimmed;
    let decoded = decodePortableSyncToken(candidate);
    if (!decoded) {
      try {
        const raw = JSON.parse(candidate);
        if (raw && raw.profile && Array.isArray(raw.entries)) {
          decoded = raw;
        }
      } catch {
        // ignore
      }
    }
    if (decoded) {
      setProfile(decoded.profile);
      setLogEntries(decoded.entries);
      setSyncStatusBanner(
        `Restored ${decoded.entries.length} logged dose(s) and personal body profile (${decoded.profile.weightKg} kg, ${decoded.profile.heightCm} cm).`
      );
      setSyncImportInput('');
    } else {
      setSyncStatusBanner(
        'Invalid Sync Code or JSON format. Please paste a valid CP1:... sync token, Shareable URL, or exported JSON.'
      );
    }
  };

  // Run Multi-Cannabinoid Cumulative Simulation
  const multiSim = simulateMultiDoseClearance(logEntries, profile);

  // Run Single-Compound Simulation
  const singleCompound = getCannabinoidById(selectedCannabinoidId);
  const singleSim = simulateClearanceKinetics({
    cannabinoidId: selectedCannabinoidId,
    frequency: singleFrequency,
    lastDoseMg: singleLastDoseMg,
    weightKg: profile.weightKg,
    heightCm: profile.heightCm,
    ageYears: profile.ageYears,
    biologicalSex: profile.biologicalSex,
    activityLevel: profile.activityLevel,
    hydrationLevel: profile.hydrationLevel,
  });

  // Chart dimensions
  const svgWidth = 680;
  const svgHeight = 250;
  const padLeft = 48;
  const padRight = 20;
  const padTop = 20;
  const padBottom = 34;
  const plotW = svgWidth - padLeft - padRight;
  const plotH = svgHeight - padTop - padBottom;

  return (
    <div className="space-y-4 sm:space-y-5">
      {/* iOS 27 Segmented Header + Quick Body Profile & Storage Status Strip */}
      <div className="ios-card p-3.5 sm:p-5 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="text-[11px] font-mono font-semibold text-[#007AFF] uppercase tracking-wider">
              Clearance Tracker
            </div>
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-0.5">
              Detection & Clearance
            </h2>
          </div>

          {/* iOS 27 Segmented Control */}
          <div
            className="grid grid-cols-2 sm:inline-flex items-center gap-1 p-1 bg-[#E5E5EA]/85 rounded-2xl shrink-0"
            role="tablist"
            aria-label="Clearance Simulator Modes"
          >
            <button
              type="button"
              role="tab"
              aria-selected={mode === 'multi_log'}
              onClick={() => setMode('multi_log')}
              className={`min-h-[36px] px-3 py-1.5 text-xs rounded-xl transition-all text-center leading-tight break-words flex items-center justify-center ${
                mode === 'multi_log'
                  ? 'bg-white text-slate-900 shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900 font-medium'
              }`}
            >
              Log ({logEntries.length})
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={mode === 'single_frequency'}
              onClick={() => setMode('single_frequency')}
              className={`min-h-[36px] px-3 py-1.5 text-xs rounded-xl transition-all text-center leading-tight break-words flex items-center justify-center ${
                mode === 'single_frequency'
                  ? 'bg-white text-slate-900 shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900 font-medium'
              }`}
            >
              Habits
            </button>
          </div>
        </div>

        {/* Compact iOS 27 Body Metrics & Storage / Sync Pill Bar */}
        <div className="pt-2.5 border-t border-slate-200/70 flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => setShowBodyProfileSheet((prev) => !prev)}
              className="min-h-[36px] px-3 py-1.5 text-xs font-semibold text-slate-800 bg-[#F2F2F7] hover:bg-slate-200/80 rounded-2xl transition-colors flex items-center justify-between gap-1.5 w-full sm:w-auto text-left"
            >
              <div className="flex items-center gap-1.5 min-w-0 flex-1">
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#007AFF] shrink-0" />
                <span className="break-words leading-snug">
                  {profile.weightKg}kg · {profile.heightCm}cm ·{' '}
                  {profile.biologicalSex === 'male' ? 'M' : 'F'} ·{' '}
                  {profile.activityLevel === 'sedentary'
                    ? 'Sedentary'
                    : profile.activityLevel}{' '}
                  (~{multiSim.estimatedBodyFatPct}% Fat) · Vape ROA
                </span>
              </div>
              {showBodyProfileSheet ? (
                <ChevronUp className="w-3.5 h-3.5 text-slate-500 shrink-0 ml-1" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5 text-slate-500 shrink-0 ml-1" />
              )}
            </button>

            <div
              className="inline-flex items-center gap-1 p-0.5 bg-[#F2F2F7] rounded-full"
              role="group"
              aria-label="Persistence Mode"
            >
              <button
                type="button"
                onClick={() => setStoragePosture('local')}
                className={`min-h-[32px] px-2.5 py-1 text-[11px] rounded-full transition-all flex items-center gap-1 whitespace-nowrap shrink-0 ${
                  storagePosture === 'local'
                    ? 'bg-white text-slate-900 shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900 font-medium'
                }`}
              >
                <HardDrive className="w-3 h-3 text-[#0D9488]" />
                Local
              </button>
              <button
                type="button"
                onClick={() => setStoragePosture('session_ram')}
                className={`min-h-[32px] px-2.5 py-1 text-[11px] rounded-full transition-all flex items-center gap-1 whitespace-nowrap shrink-0 ${
                  storagePosture === 'session_ram'
                    ? 'bg-white text-slate-900 shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900 font-medium'
                }`}
              >
                <Shield className="w-3 h-3 text-amber-600" />
                RAM
              </button>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
            <button
              type="button"
              onClick={handleCopyShareableSyncUrl}
              className="min-h-[34px] px-3 py-1 text-xs font-semibold text-slate-700 bg-[#F2F2F7] hover:bg-slate-200/80 rounded-full transition-colors flex items-center gap-1 whitespace-nowrap shrink-0"
            >
              <Copy className="w-3.5 h-3.5 text-[#007AFF]" />
              Share URL
            </button>
            <button
              type="button"
              onClick={handleCopySyncToken}
              className="min-h-[34px] px-3 py-1 text-xs font-semibold text-slate-700 bg-[#F2F2F7] hover:bg-slate-200/80 rounded-full transition-colors flex items-center gap-1 whitespace-nowrap shrink-0"
            >
              <Copy className="w-3.5 h-3.5" />
              Code
            </button>
            <button
              type="button"
              onClick={handleDownloadJsonBackup}
              className="min-h-[34px] px-3 py-1 text-xs font-semibold text-slate-700 bg-[#F2F2F7] hover:bg-slate-200/80 rounded-full transition-colors flex items-center gap-1 whitespace-nowrap shrink-0"
            >
              <Download className="w-3.5 h-3.5" />
              Export
            </button>
            <button
              type="button"
              onClick={() => setShowSyncPanel((prev) => !prev)}
              className="min-h-[34px] px-3 py-1 text-xs font-semibold text-[#007AFF] bg-blue-50 hover:bg-blue-100 rounded-full transition-colors flex items-center gap-1 whitespace-nowrap shrink-0"
            >
              <Upload className="w-3.5 h-3.5" />
              {showSyncPanel ? 'Close' : 'Restore'}
            </button>
          </div>
        </div>

        {/* Optional Cross-Device Sync Import Box & Status Feedback */}
        {(showSyncPanel || syncStatusBanner) && (
          <div className="p-3.5 bg-[#F2F2F7] rounded-2xl space-y-2">
            {syncStatusBanner && (
              <div className="flex items-center justify-between text-xs font-mono text-teal-800">
                <span>{syncStatusBanner}</span>
                <button
                  type="button"
                  onClick={() => setSyncStatusBanner(null)}
                  className="text-slate-500 hover:text-slate-900 ml-2 font-sans font-semibold"
                >
                  Done
                </button>
              </div>
            )}
            {showSyncPanel && (
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                <input
                  type="text"
                  aria-label="Paste CP1 Cross-Device Sync Code or JSON backup"
                  placeholder="Paste CP1:... Sync Code, Shareable URL, or JSON here"
                  value={syncImportInput}
                  onChange={(e) => setSyncImportInput(e.target.value)}
                  className="flex-1 min-h-[40px] px-3.5 py-2 text-xs font-mono bg-white border border-slate-200 rounded-xl text-slate-900"
                />
                <button
                  type="button"
                  onClick={handleRestoreSyncToken}
                  className="min-h-[40px] px-4 py-2 text-xs font-bold text-white bg-[#007AFF] hover:bg-[#0062CC] rounded-xl transition-colors whitespace-nowrap shrink-0"
                >
                  Restore Log
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-start">
        {/* LEFT 5 COLUMNS: Dose Logger Form (or Single Controls) + Anthropometric Sliders */}
        <div className="lg:col-span-5 space-y-4 sm:space-y-5">
          {mode === 'multi_log' ? (
            /* MULTI-CANNABINOID DOSE LOGGER CARD (iOS 27 Grouped Card) */
            <form
              onSubmit={handleAddLogEntry}
              className="ios-card p-4 sm:p-6 space-y-4"
            >
              <div className="flex items-center justify-between gap-3 border-b border-slate-200/70 pb-3">
                <div>
                  <h3 className="text-base font-extrabold text-slate-900">
                    Log Dose
                  </h3>
                  <p className="text-xs text-slate-500">
                    Track compound, dose, and timestamp
                  </p>
                </div>
                <span className="text-xs font-mono font-semibold text-[#007AFF] bg-blue-50 px-2.5 py-1 rounded-full whitespace-nowrap shrink-0">
                  {logEntries.length} logged
                </span>
              </div>

              {/* 1. Base Substance Selector (Custom iOS 27 Illustrated Picker) */}
              <div>
                <CannabinoidSelect
                  id="log-compound-select"
                  label="Substance"
                  value={draftCompoundId}
                  compounds={CANNABINOID_DATABASE}
                  onChange={(newId) => {
                    setDraftCompoundId(newId);
                    onSelectCannabinoid(newId);
                  }}
                />
              </div>

              {/* 2. Universal Derivative Functionalization (Weed & Cannabinoids) or Subcategory Info */}
              {isCannabinoidSubstance(draftBaseCompound) ? (
                <div>
                  <span className="block text-xs font-bold text-slate-700 mb-1.5">
                    Variant ({draftBaseCompound.shortName})
                  </span>
                  <div className="flex flex-wrap items-center gap-1.5 pb-0.5">
                    {DERIVATIVE_MOD_DESCRIPTIONS.map((m) => {
                      const active = draftMod === m.id;
                      return (
                        <button
                          key={m.id}
                          type="button"
                          onClick={() => setDraftMod(m.id)}
                          className={`min-h-[36px] px-3 py-1.5 text-xs font-mono rounded-full border transition-all break-words ${
                            active
                              ? 'bg-[#0D9488] text-white border-[#0D9488] font-bold shadow-xs'
                              : 'bg-[#F2F2F7] text-slate-700 border-transparent hover:bg-slate-200/70'
                          }`}
                        >
                          {m.shortTag}
                        </button>
                      );
                    })}
                  </div>
                  <div className="text-[11px] font-mono text-slate-500 mt-1.5 break-words leading-relaxed">
                    Logging as:{' '}
                    <strong className="text-slate-900">
                      {draftEffectiveCompound.shortName}
                    </strong>
                    <span className="block sm:inline sm:ml-1">
                      (XLogP {draftEffectiveCompound.xLogP} · t½ ~
                      {draftEffectiveCompound.terminalHalfLifeHours}h · Screen{' '}
                      {draftEffectiveCompound.immunoassayCrossReactivityPct}%)
                    </span>
                  </div>
                </div>
              ) : (
                <div className="p-3 bg-[#F2F2F7] rounded-2xl space-y-1">
                  <div className="flex flex-wrap items-center justify-between gap-1 text-[11px] font-mono">
                    <span className="font-bold text-[#007AFF] break-words">
                      {getSubstanceMacroCategory(
                        draftEffectiveCompound.classification
                      )}{' '}
                      · {draftEffectiveCompound.classification}
                    </span>
                    <span className="text-slate-600 font-semibold break-words">
                      t½ ~{draftEffectiveCompound.terminalHalfLifeHours}h ·
                      Screen {draftEffectiveCompound.immunoassayCrossReactivityPct}%
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-600 break-words leading-snug">
                    Primary Metabolite:{' '}
                    <strong className="text-slate-800">
                      {draftEffectiveCompound.primaryMetabolite}
                    </strong>
                  </div>
                </div>
              )}

              {/* 3. Route of Administration (iOS 27 Segmented Control) */}
              <div>
                <span className="block text-xs font-bold text-slate-700 mb-1.5">
                  Route
                </span>
                <div className="grid grid-cols-3 gap-1 p-1 bg-[#E5E5EA]/85 rounded-2xl">
                  {(
                    [
                      {
                        id: 'inhalation',
                        label: isCannabinoidSubstance(draftBaseCompound)
                          ? 'Vape'
                          : 'Nasal / Inhaled',
                      },
                      {
                        id: 'oral',
                        label: isCannabinoidSubstance(draftBaseCompound)
                          ? 'Edible'
                          : 'Oral / Pill',
                      },
                      { id: 'sublingual', label: 'Sublingual' },
                    ] as { id: AdministrationRoute; label: string }[]
                  ).map((r) => (
                    <button
                      key={r.id}
                      type="button"
                      onClick={() => setDraftRoute(r.id)}
                      className={`min-h-[38px] px-1.5 sm:px-2.5 py-1 text-xs text-center rounded-xl transition-all leading-tight break-words flex items-center justify-center ${
                        draftRoute === r.id
                          ? 'bg-white text-slate-900 shadow-xs font-bold'
                          : 'text-slate-600 hover:text-slate-900 font-medium'
                      }`}
                    >
                      {r.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 4. Dose Consumed (mg) + 0-10 Second Vape Hit Duration Calibrator */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="log-dose-mg-input"
                    className="text-xs font-bold text-slate-700"
                  >
                    Dose (mg)
                  </label>
                  <div className="flex items-center gap-1.5">
                    <input
                      id="log-dose-mg-input"
                      type="number"
                      min={0}
                      max={1000}
                      step="any"
                      value={draftDoseMg}
                      onChange={(e) => {
                        setDraftDoseMg(
                          Math.max(0, parseFloat(e.target.value) || 0)
                        );
                        setDraftUnitLabel('Custom mg');
                      }}
                      className="w-24 min-h-[38px] px-2.5 py-1 text-xs font-mono font-bold text-right bg-[#F2F2F7] border border-slate-200 rounded-xl text-slate-900 tabular-nums"
                    />
                    <span className="text-xs font-mono text-slate-500">mg</span>
                  </div>
                </div>

                {/* VAPE PUFFS & DRAW DURATION CALCULATOR (Only for Weed & Cannabinoids) */}
                {isCannabinoidSubstance(draftBaseCompound) ? (
                  <>
                    <div className="p-3.5 bg-[#F2F2F7] rounded-[20px] space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-bold text-slate-800">
                          Vape Hit Duration
                        </span>
                        <span className="text-xs font-mono font-bold text-[#007AFF] bg-white px-2.5 py-0.5 rounded-full shadow-2xs tabular-nums break-words">
                          {vapePuffCount} puff{vapePuffCount === 1 ? '' : 's'} ×{' '}
                          {vapeDrawSeconds.toFixed(1)}s ={' '}
                          {calculateVapeDrawDoseMg(
                            vapeDrawSeconds,
                            vapePuffCount,
                            vapeDistillatePct,
                            vapeVoltage
                          )}{' '}
                          mg
                        </span>
                      </div>

                      {/* 0-10 Seconds Slider */}
                      <div>
                        <div className="flex items-center justify-between text-xs mb-1">
                          <label
                            htmlFor="vape-seconds-slider"
                            className="text-slate-600 font-medium"
                          >
                            Draw Duration (0–10s)
                          </label>
                          <span className="font-mono font-bold text-slate-900 tabular-nums">
                            {vapeDrawSeconds.toFixed(1)} sec
                          </span>
                        </div>
                        <input
                          id="vape-seconds-slider"
                          type="range"
                          min={0}
                          max={10}
                          step={0.5}
                          value={vapeDrawSeconds}
                          onChange={(e) =>
                            updateVapeCalibration(
                              parseFloat(e.target.value),
                              vapePuffCount,
                              vapeDistillatePct,
                              vapeVoltage
                            )
                          }
                          className="w-full accent-[#007AFF]"
                        />
                        {/* Quick Second Presets (0s to 10s Blinker) */}
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {[
                            { sec: 0, label: '0s' },
                            { sec: 1.5, label: '1.5s' },
                            { sec: 3.0, label: '3s' },
                            { sec: 5.0, label: '5s' },
                            { sec: 7.5, label: '7.5s' },
                            { sec: 10.0, label: '10s' },
                          ].map((sp) => (
                            <button
                              key={sp.sec}
                              type="button"
                              onClick={() =>
                                updateVapeCalibration(
                                  sp.sec,
                                  vapePuffCount,
                                  vapeDistillatePct,
                                  vapeVoltage
                                )
                              }
                              className={`min-h-[34px] px-2.5 py-1 text-[11px] font-mono rounded-full transition-all whitespace-nowrap shrink-0 ${
                                vapeDrawSeconds === sp.sec &&
                                draftRoute === 'inhalation'
                                  ? 'bg-[#007AFF] text-white font-bold shadow-xs'
                                  : 'bg-white text-slate-700 hover:bg-slate-100'
                              }`}
                            >
                              {sp.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Quick Puff Count Buttons */}
                      <div className="flex flex-wrap items-center gap-1.5 pt-1">
                        <span className="text-[11px] font-mono text-slate-500 mr-1">
                          Puffs:
                        </span>
                        {[1, 2, 3, 5, 8].map((pCount) => (
                          <button
                            key={pCount}
                            type="button"
                            onClick={() =>
                              updateVapeCalibration(
                                vapeDrawSeconds === 0 ? 3.5 : vapeDrawSeconds,
                                pCount,
                                vapeDistillatePct,
                                vapeVoltage
                              )
                            }
                            className={`min-h-[34px] px-2.5 py-1 text-[11px] font-mono rounded-full transition-all whitespace-nowrap shrink-0 ${
                              vapePuffCount === pCount &&
                              draftRoute === 'inhalation'
                                ? 'bg-slate-900 text-white font-bold shadow-xs'
                                : 'bg-white text-slate-700 hover:bg-slate-100'
                            }`}
                          >
                            {pCount}p
                          </button>
                        ))}
                      </div>

                      <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-200/80">
                        <div>
                          <label
                            htmlFor="vape-puffs-input"
                            className="block text-[11px] font-semibold text-slate-600 mb-1"
                          >
                            Hits / Puffs
                          </label>
                          <input
                            id="vape-puffs-input"
                            type="number"
                            min={1}
                            max={30}
                            value={vapePuffCount}
                            onChange={(e) =>
                              updateVapeCalibration(
                                vapeDrawSeconds,
                                Math.max(1, parseInt(e.target.value, 10) || 1),
                                vapeDistillatePct,
                                vapeVoltage
                              )
                            }
                            className="w-full min-h-[38px] px-2.5 py-1 text-xs font-mono font-bold bg-white border border-slate-200 rounded-xl text-slate-900 tabular-nums"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="vape-purity-input"
                            className="block text-[11px] font-semibold text-slate-600 mb-1"
                          >
                            Vape Oil %
                          </label>
                          <input
                            id="vape-purity-input"
                            type="number"
                            min={10}
                            max={99}
                            value={vapeDistillatePct}
                            onChange={(e) =>
                              updateVapeCalibration(
                                vapeDrawSeconds,
                                vapePuffCount,
                                Math.max(
                                  10,
                                  Math.min(99, parseInt(e.target.value, 10) || 90)
                                ),
                                vapeVoltage
                              )
                            }
                            className="w-full min-h-[38px] px-2.5 py-1 text-xs font-mono font-bold bg-white border border-slate-200 rounded-xl text-slate-900 tabular-nums"
                          />
                        </div>

                        <div>
                          <CustomOptionSelect<VapeVoltageTier>
                            id="vape-voltage-select"
                            label="Coil Temp"
                            compact
                            value={vapeVoltage}
                            onChange={(nextVolt) =>
                              updateVapeCalibration(
                                vapeDrawSeconds,
                                vapePuffCount,
                                vapeDistillatePct,
                                nextVolt
                              )
                            }
                            options={[
                              {
                                value: 'low',
                                label: 'Low (2.5V)',
                                sublabel: 'Terpene-preserving (~0.6 mg/s)',
                              },
                              {
                                value: 'medium',
                                label: 'Med (3.0V)',
                                sublabel: 'Standard cartridge (~0.95 mg/s)',
                              },
                              {
                                value: 'high',
                                label: 'High (3.6V)',
                                sublabel: 'Dense cloud (~1.35 mg/s)',
                              },
                            ]}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Quick Edible / Flower / Sublingual Helpers */}
                    <div className="flex flex-wrap items-center gap-1.5 py-0.5">
                      {[
                        {
                          label: '5 mg Gummy',
                          mg: 5,
                          route: 'oral' as AdministrationRoute,
                        },
                        {
                          label: '10 mg Gummy',
                          mg: 10,
                          route: 'oral' as AdministrationRoute,
                        },
                        {
                          label: '25 mg Edible',
                          mg: 25,
                          route: 'oral' as AdministrationRoute,
                        },
                        {
                          label: '7.5 mg Drop',
                          mg: 7.5,
                          route: 'sublingual' as AdministrationRoute,
                        },
                        {
                          label: '15 mg Bowl',
                          mg: 15,
                          route: 'inhalation' as AdministrationRoute,
                        },
                      ].map((preset) => (
                        <button
                          key={preset.label}
                          type="button"
                          onClick={() =>
                            handleApplyQuickDosePreset(
                              preset.mg,
                              preset.route,
                              preset.label
                            )
                          }
                          className={`min-h-[34px] px-3 py-1 text-[11px] font-mono rounded-full transition-all break-words ${
                            draftDoseMg === preset.mg &&
                            draftRoute === preset.route
                              ? 'bg-blue-50 text-[#007AFF] font-bold border border-[#007AFF]'
                              : 'bg-[#F2F2F7] text-slate-600 hover:bg-slate-200/70'
                          }`}
                        >
                          {preset.label}
                        </button>
                      ))}
                    </div>
                  </>
                ) : (
                  /* Quick Dose Presets for Prescription Pharmaceuticals & Illicit Substances */
                  <div className="p-3 bg-[#F2F2F7] rounded-2xl space-y-2">
                    <div className="text-[11px] font-semibold text-slate-600">
                      Quick {draftEffectiveCompound.shortName} Dose Presets
                    </div>
                    <div className="flex flex-wrap items-center gap-1.5">
                      {[
                        {
                          tier: 'Threshold',
                          mg:
                            draftRoute === 'inhalation'
                              ? draftEffectiveCompound.baseInhaledThresholdMg
                              : draftEffectiveCompound.baseOralThresholdMg,
                        },
                        {
                          tier: 'Light',
                          mg:
                            Math.round(
                              (draftRoute === 'inhalation'
                                ? draftEffectiveCompound.baseInhaledThresholdMg
                                : draftEffectiveCompound.baseOralThresholdMg) *
                                1.5 *
                                100
                            ) / 100,
                        },
                        {
                          tier: 'Common',
                          mg:
                            Math.round(
                              (draftRoute === 'inhalation'
                                ? draftEffectiveCompound.baseInhaledThresholdMg
                                : draftEffectiveCompound.baseOralThresholdMg) *
                                2.2 *
                                100
                            ) / 100,
                        },
                        {
                          tier: 'Strong',
                          mg:
                            Math.round(
                              (draftRoute === 'inhalation'
                                ? draftEffectiveCompound.baseInhaledThresholdMg
                                : draftEffectiveCompound.baseOralThresholdMg) *
                                3.5 *
                                100
                            ) / 100,
                        },
                      ].map((p) => {
                        const label = `${p.tier} (${p.mg} mg)`;
                        return (
                          <button
                            key={p.tier}
                            type="button"
                            onClick={() =>
                              handleApplyQuickDosePreset(
                                p.mg,
                                draftRoute,
                                `${p.tier} ${draftEffectiveCompound.shortName} (${p.mg} mg)`
                              )
                            }
                            className={`min-h-[34px] px-3 py-1 text-[11px] font-mono rounded-full transition-all break-words ${
                              draftDoseMg === p.mg
                                ? 'bg-[#007AFF] text-white font-bold shadow-xs'
                                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/70'
                            }`}
                          >
                            {label}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* 5. When Did You Take It? */}
              <div className="space-y-2">
                <span className="block text-xs font-bold text-slate-700">
                  Time Taken
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    { label: 'Just Now', hours: 0 },
                    { label: '2h ago', hours: 2 },
                    { label: '6h ago', hours: 6 },
                    { label: '12h ago', hours: 12 },
                    { label: 'Yesterday', hours: 24 },
                    { label: '2d ago', hours: 48 },
                    { label: '4d ago', hours: 96 },
                    { label: '7d ago', hours: 168 },
                  ].map((t) => (
                    <button
                      key={t.label}
                      type="button"
                      onClick={() => handleApplyHoursAgoPreset(t.hours)}
                      className={`min-h-[34px] px-3 py-1 text-[11px] font-mono rounded-full transition-all whitespace-nowrap shrink-0 ${
                        !useCustomTimestamp && draftHoursAgo === t.hours
                          ? 'bg-slate-900 text-white font-bold shadow-xs'
                          : 'bg-[#F2F2F7] text-slate-700 hover:bg-slate-200/70'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 pt-1">
                  <label
                    htmlFor="custom-timestamp-input"
                    className="text-xs text-slate-600 flex items-center gap-1.5 shrink-0"
                  >
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>Time:</span>
                  </label>
                  <input
                    id="custom-timestamp-input"
                    type="datetime-local"
                    value={toLocalDatetimeInputValue(
                      useCustomTimestamp
                        ? draftCustomIso
                        : new Date(
                            Date.now() - draftHoursAgo * 3600000
                          ).toISOString()
                    )}
                    onChange={(e) => {
                      if (e.target.value) {
                        setUseCustomTimestamp(true);
                        setDraftCustomIso(new Date(e.target.value).toISOString());
                      }
                    }}
                    className="w-full sm:w-auto min-h-[38px] px-3 py-1 text-xs font-mono bg-[#F2F2F7] border border-slate-200 rounded-xl text-slate-900"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full min-h-[48px] py-3 px-4 bg-[#007AFF] hover:bg-[#0062CC] active:scale-[0.99] text-white text-sm font-bold rounded-2xl shadow-sm transition-all flex items-center justify-center gap-2 text-center break-words leading-snug"
              >
                <Plus className="w-4 h-4 stroke-[2.5px] shrink-0" />
                <span>Log {draftEffectiveCompound.shortName} ({draftDoseMg} mg)</span>
              </button>
            </form>
          ) : (
            /* SINGLE-COMPOUND FREQUENCY ESTIMATOR CONTROLS */
            <div className="ios-card p-4 sm:p-6 space-y-4">
              <div className="border-b border-slate-200/70 pb-3">
                <h3 className="text-base font-extrabold text-slate-900">
                  Habit Pattern
                </h3>
                <p className="text-xs text-slate-500">
                  Steady-state clearance estimate
                </p>
              </div>

              <div>
                <CannabinoidSelect
                  id="clearance-compound-select"
                  label="Compound"
                  value={singleCompound.id}
                  compounds={CANNABINOID_DATABASE}
                  dynamicCompound={singleCompound}
                  onChange={(newId) => onSelectCannabinoid(newId)}
                />
              </div>

              <div>
                <span className="block text-xs font-bold text-slate-700 mb-1.5">
                  Frequency
                </span>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-1 p-1 bg-[#E5E5EA]/85 rounded-2xl">
                  {(
                    [
                      { id: 'single', label: 'Single' },
                      { id: 'occasional', label: '1–2x/wk' },
                      { id: 'moderate', label: '3–4x/wk' },
                      { id: 'daily', label: 'Daily' },
                      { id: 'heavy_chronic', label: 'Heavy' },
                    ] as { id: UsageFrequency; label: string }[]
                  ).map((f) => (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() => setSingleFrequency(f.id)}
                      className={`min-h-[36px] px-1.5 py-1 text-xs rounded-xl transition-all text-center leading-tight break-words flex items-center justify-center ${
                        singleFrequency === f.id
                          ? 'bg-white text-slate-900 shadow-xs font-bold'
                          : 'text-slate-600 hover:text-slate-900 font-medium'
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Vape Hit Seconds Converter for Single-Compound Habit Estimator */}
              <div className="p-3 bg-[#F2F2F7] rounded-2xl space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-800">
                    Vape Hit (0–10s)
                  </span>
                  <span className="font-mono font-bold text-[#007AFF] tabular-nums">
                    {singleVapePuffs} puff{singleVapePuffs > 1 ? 's' : ''} ×{' '}
                    {singleVapeSeconds.toFixed(1)}s = {singleLastDoseMg} mg
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2 items-center">
                  <div className="col-span-2">
                    <input
                      aria-label="Single habit vape hit duration in seconds"
                      type="range"
                      min={0.5}
                      max={10}
                      step={0.5}
                      value={singleVapeSeconds}
                      onChange={(e) => {
                        const sec = parseFloat(e.target.value);
                        setSingleVapeSeconds(sec);
                        setSingleLastDoseMg(
                          calculateVapeDrawDoseMg(sec, singleVapePuffs, 90, 'medium')
                        );
                      }}
                      className="w-full accent-[#007AFF]"
                    />
                  </div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 4].map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => {
                          setSingleVapePuffs(p);
                          setSingleLastDoseMg(
                            calculateVapeDrawDoseMg(
                              singleVapeSeconds,
                              p,
                              90,
                              'medium'
                            )
                          );
                        }}
                        className={`flex-1 min-h-[30px] text-[11px] font-mono rounded-lg transition-colors ${
                          singleVapePuffs === p
                            ? 'bg-slate-900 text-white font-bold'
                            : 'bg-white text-slate-700'
                        }`}
                      >
                        {p}p
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label
                    htmlFor="single-last-dose-range"
                    className="text-xs font-bold text-slate-700"
                  >
                    Last Session Dose (mg)
                  </label>
                  <span className="text-xs font-mono font-bold text-slate-900 tabular-nums">
                    {singleLastDoseMg} mg
                  </span>
                </div>
                <input
                  id="single-last-dose-range"
                  type="range"
                  min={0.5}
                  max={100}
                  step={0.5}
                  value={singleLastDoseMg}
                  onChange={(e) =>
                    setSingleLastDoseMg(parseFloat(e.target.value))
                  }
                  className="w-full accent-[#007AFF]"
                />
              </div>
            </div>
          )}

          {/* PERSONAL ANTHROPOMETRIC & METABOLIC PROFILE SLIDERS (Collapsible on iPhone 17 Pro, Always Accessible) */}
          <div
            className={`ios-card p-4 sm:p-6 space-y-4 ${
              showBodyProfileSheet ? 'block' : 'hidden lg:block'
            }`}
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/70 pb-3">
              <div>
                <h3 className="text-base font-extrabold text-slate-900">
                  Personal Body & Metabolic Baseline
                </h3>
                <p className="text-xs text-slate-500">
                  Calibrated: 55 kg · 172 cm · Male · Sedentary (Stay Home) · Vaping
                </p>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-mono font-semibold text-slate-700 bg-[#F2F2F7] px-2.5 py-1 rounded-full tabular-nums">
                  BMI {multiSim.bmi} · ~{multiSim.estimatedBodyFatPct}% Fat
                </span>
                <button
                  type="button"
                  onClick={() => setProfile({ ...DEFAULT_USER_PROFILE })}
                  className="min-h-[30px] px-2.5 py-1 text-[11px] font-semibold text-[#007AFF] bg-blue-50 hover:bg-blue-100 rounded-full transition-colors whitespace-nowrap shrink-0"
                >
                  My Baseline (55kg)
                </button>
              </div>
            </div>

            {mode === 'multi_log' && (
              <div>
                <span className="block text-xs font-bold text-slate-700 mb-1.5">
                  Prior Habit Baseline
                </span>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-1 p-1 bg-[#E5E5EA]/85 rounded-2xl">
                  {(
                    [
                      { id: 'single', label: 'Clean Prior' },
                      { id: 'occasional', label: '1–2x/wk' },
                      { id: 'moderate', label: '3–4x/wk' },
                      { id: 'daily', label: 'Daily' },
                      { id: 'heavy_chronic', label: 'Heavy' },
                    ] as { id: UsageFrequency; label: string }[]
                  ).map((h) => (
                    <button
                      key={h.id}
                      type="button"
                      onClick={() =>
                        setProfile((prev) => ({
                          ...prev,
                          priorHabitBaseline: h.id,
                        }))
                      }
                      className={`min-h-[34px] px-2 py-1 text-xs rounded-xl transition-all whitespace-nowrap shrink-0 ${
                        (profile.priorHabitBaseline || 'single') === h.id
                          ? 'bg-white text-slate-900 shadow-xs font-bold'
                          : 'text-slate-600 hover:text-slate-900 font-medium'
                      }`}
                    >
                      {h.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-3 pt-1">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label
                    htmlFor="profile-weight-slider"
                    className="text-xs font-semibold text-slate-700"
                  >
                    Weight
                  </label>
                  <div className="flex items-center gap-1.5">
                    <input
                      type="number"
                      aria-label="Exact body weight in kilograms"
                      min={40}
                      max={180}
                      value={profile.weightKg}
                      onChange={(e) =>
                        setProfile((p) => ({
                          ...p,
                          weightKg: Math.max(
                            40,
                            Math.min(180, Number(e.target.value) || 70)
                          ),
                        }))
                      }
                      className="w-16 min-h-[32px] px-2 py-0.5 text-xs font-mono font-bold text-right bg-[#F2F2F7] border border-slate-200 rounded-lg tabular-nums"
                    />
                    <span className="text-xs font-mono text-slate-500">
                      kg ({Math.round(profile.weightKg * 2.20462)} lbs)
                    </span>
                  </div>
                </div>
                <input
                  id="profile-weight-slider"
                  type="range"
                  min={42}
                  max={165}
                  step={1}
                  value={profile.weightKg}
                  onChange={(e) =>
                    setProfile((p) => ({
                      ...p,
                      weightKg: parseInt(e.target.value, 10),
                    }))
                  }
                  className="w-full accent-[#007AFF]"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label
                    htmlFor="profile-height-slider"
                    className="text-xs font-semibold text-slate-700"
                  >
                    Height
                  </label>
                  <div className="flex items-center gap-1.5">
                    <input
                      type="number"
                      aria-label="Exact height in centimeters"
                      min={140}
                      max={215}
                      value={profile.heightCm}
                      onChange={(e) =>
                        setProfile((p) => ({
                          ...p,
                          heightCm: Math.max(
                            140,
                            Math.min(215, Number(e.target.value) || 175)
                          ),
                        }))
                      }
                      className="w-16 min-h-[32px] px-2 py-0.5 text-xs font-mono font-bold text-right bg-[#F2F2F7] border border-slate-200 rounded-lg tabular-nums"
                    />
                    <span className="text-xs font-mono text-slate-500">cm</span>
                  </div>
                </div>
                <input
                  id="profile-height-slider"
                  type="range"
                  min={145}
                  max={210}
                  step={1}
                  value={profile.heightCm}
                  onChange={(e) =>
                    setProfile((p) => ({
                      ...p,
                      heightCm: parseInt(e.target.value, 10),
                    }))
                  }
                  className="w-full accent-[#007AFF]"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label
                    htmlFor="profile-age-slider"
                    className="text-xs font-semibold text-slate-700"
                  >
                    Age
                  </label>
                  <span className="text-xs font-mono font-bold text-slate-900 tabular-nums">
                    {profile.ageYears} yrs
                  </span>
                </div>
                <input
                  id="profile-age-slider"
                  type="range"
                  min={18}
                  max={80}
                  step={1}
                  value={profile.ageYears}
                  onChange={(e) =>
                    setProfile((p) => ({
                      ...p,
                      ageYears: parseInt(e.target.value, 10),
                    }))
                  }
                  className="w-full accent-[#007AFF]"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <div>
                <span className="block text-xs font-bold text-slate-700 mb-1">
                  Sex
                </span>
                <div className="grid grid-cols-2 gap-1 p-1 bg-[#E5E5EA]/85 rounded-2xl">
                  {(['male', 'female'] as const).map((sex) => (
                    <button
                      key={sex}
                      type="button"
                      onClick={() =>
                        setProfile((p) => ({ ...p, biologicalSex: sex }))
                      }
                      className={`min-h-[34px] px-2 py-1 text-xs rounded-xl capitalize transition-all whitespace-nowrap shrink-0 ${
                        profile.biologicalSex === sex
                          ? 'bg-white text-slate-900 shadow-xs font-bold'
                          : 'text-slate-600 hover:text-slate-900 font-medium'
                      }`}
                    >
                      {sex}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <span className="block text-xs font-bold text-slate-700 mb-1">
                  Hydration
                </span>
                <div className="grid grid-cols-3 gap-1 p-1 bg-[#E5E5EA]/85 rounded-2xl">
                  {(['low', 'normal', 'high'] as const).map((h) => (
                    <button
                      key={h}
                      type="button"
                      onClick={() =>
                        setProfile((p) => ({ ...p, hydrationLevel: h }))
                      }
                      className={`min-h-[34px] px-1.5 py-1 text-xs rounded-xl capitalize transition-all whitespace-nowrap shrink-0 ${
                        profile.hydrationLevel === h
                          ? 'bg-white text-slate-900 shadow-xs font-bold'
                          : 'text-slate-600 hover:text-slate-900 font-medium'
                      }`}
                    >
                      {h}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <span className="block text-xs font-bold text-slate-700 mb-1">
                Activity Level
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
                    onClick={() =>
                      setProfile((p) => ({ ...p, activityLevel: a.id }))
                    }
                    className={`min-h-[36px] px-2.5 py-1.5 text-xs rounded-xl transition-all whitespace-nowrap shrink-0 ${
                      profile.activityLevel === a.id
                        ? 'bg-white text-slate-900 shadow-xs font-bold'
                        : 'text-slate-600 hover:text-slate-900 font-medium'
                    }`}
                  >
                    {a.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Personal Kinetic Impact Summary Box */}
            <div className="p-3.5 bg-[#F2F2F7] rounded-2xl space-y-1.5 text-xs text-slate-600">
              <div className="font-bold text-slate-900 flex items-center justify-between">
                <span>Profile Summary</span>
                <span className="font-mono text-[11px] text-[#007AFF]">
                  ROA: Vaping · {profile.weightKg}kg / {profile.heightCm}cm
                </span>
              </div>
              <p className="leading-relaxed">
                • <strong className="text-slate-800">Lean Adipose Depot (BMI {multiSim.bmi}, ~{multiSim.estimatedBodyFatPct}% Body Fat):</strong> Lower total white adipose tissue stores less lipophilic cannabinoid than a 22% body-fat baseline, reducing deep-fat sequestration.
              </p>
              <p className="leading-relaxed">
                • <strong className="text-slate-800">55 kg Distribution Volume:</strong> Smaller plasma volume produces a ~19% higher initial peak concentration per vaped milligram, balanced by faster acute α-phase clearance when vaping vs. edibles.
              </p>
              <p className="leading-relaxed">
                • <strong className="text-slate-800">Staying at Home (Sedentary 1.18× Factor):</strong> Minimal aerobic lipolysis and resting hepatic blood flow slow down daily metabolite mobilization by ~18% compared to active workouts.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT 7 COLUMNS: Superimposed SVG Chart, Logged Doses Cards/Table & Specimen Forecast */}
        <div className="lg:col-span-7 space-y-4 sm:space-y-5">
          {mode === 'multi_log' ? (
            <div className="ios-card p-4 sm:p-6 space-y-5">
              {/* 1. SUPERIMPOSED MULTI-CANNABINOID SEMI-LOG DECAY CHART */}
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                  <div>
                    <h4 className="text-base font-extrabold text-slate-900">
                      Elimination Curve
                    </h4>
                    <p className="text-xs text-slate-500">
                      {multiSim.dominantCompoundReason}
                    </p>
                  </div>
                </div>

                {(() => {
                  const pts = multiSim.timelineSeries;
                  const minH = pts[0]?.hoursFromNow ?? -24;
                  const maxH = Math.max(
                    24,
                    pts[pts.length - 1]?.hoursFromNow ?? 72
                  );
                  const spanH = Math.max(12, maxH - minH);

                  const peakVal = Math.max(
                    120,
                    ...pts.map((p) =>
                      Math.max(
                        p.combinedImmunoassayNgMl,
                        p.combinedTotalMetaboliteNgMl
                      )
                    )
                  );

                  const xForH = (h: number) =>
                    padLeft + ((h - minH) / spanH) * plotW;
                  const yForC = (c: number) => {
                    const clamped = Math.max(0, Math.min(peakVal, c));
                    const norm =
                      Math.log10(clamped + 1) / Math.log10(peakVal + 1);
                    return padTop + plotH - norm * plotH;
                  };

                  const combinedImmunoPoly = pts
                    .map(
                      (p) =>
                        `${xForH(p.hoursFromNow).toFixed(1)},${yForC(
                          p.combinedImmunoassayNgMl
                        ).toFixed(1)}`
                    )
                    .join(' ');

                  const combinedTotalPoly = pts
                    .map(
                      (p) =>
                        `${xForH(p.hoursFromNow).toFixed(1)},${yForC(
                          p.combinedTotalMetaboliteNgMl
                        ).toFixed(1)}`
                    )
                    .join(' ');

                  const areaImmuno = `${xForH(minH).toFixed(1)},${(
                    padTop + plotH
                  ).toFixed(1)} ${combinedImmunoPoly} ${xForH(maxH).toFixed(
                    1
                  )},${(padTop + plotH).toFixed(1)}`;

                  const xNow = xForH(0);
                  const y50 = yForC(50);
                  const y15 = yForC(15);

                  const activePt =
                    hoveredMultiIdx !== null && pts[hoveredMultiIdx]
                      ? pts[hoveredMultiIdx]
                      : pts.find((p) => Math.abs(p.hoursFromNow) < 0.5) ||
                        pts[0];

                  return (
                    <div className="bg-[#F2F2F7] rounded-[20px] p-3.5">
                      <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-600 pb-2 border-b border-slate-200/80 mb-2">
                        <span>
                          Probe:{' '}
                          <strong className="text-slate-900">
                            {activePt.hoursFromNow === 0
                              ? 'NOW'
                              : activePt.hoursFromNow > 0
                              ? `Now + ${activePt.dayOffsetFromNow}d (${formatClearDate(
                                  activePt.timestampIso
                                )})`
                              : `${activePt.dayOffsetFromNow}d ago`}
                          </strong>
                        </span>
                        <span>
                          Screen:{' '}
                          <strong className="text-[#007AFF]">
                            {activePt.combinedImmunoassayNgMl} ng/mL
                          </strong>{' '}
                          · LC-MS:{' '}
                          <strong className="text-slate-900">
                            {activePt.combinedTotalMetaboliteNgMl} ng/mL
                          </strong>
                        </span>
                      </div>

                      <svg
                        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
                        className="w-full h-auto select-none overflow-visible"
                        role="img"
                        aria-label="Superimposed multi-cannabinoid urinary clearance curve"
                      >
                        {[0.25, 0.5, 0.75].map((ratio) => {
                          const y = padTop + plotH * ratio;
                          return (
                            <line
                              key={ratio}
                              x1={padLeft}
                              y1={y}
                              x2={svgWidth - padRight}
                              y2={y}
                              stroke="#CBD5E1"
                              strokeOpacity="0.6"
                              strokeWidth="1"
                            />
                          );
                        })}

                        {xNow >= padLeft && xNow <= svgWidth - padRight && (
                          <>
                            <line
                              x1={xNow}
                              y1={padTop}
                              x2={xNow}
                              y2={padTop + plotH}
                              stroke="#0F172A"
                              strokeWidth="1.5"
                              strokeDasharray="3 3"
                            />
                            <text
                              x={xNow + 4}
                              y={padTop + 10}
                              className="fill-slate-900 text-[9.5px] font-mono font-bold"
                            >
                              NOW
                            </text>
                          </>
                        )}

                        <line
                          x1={padLeft}
                          y1={y50}
                          x2={svgWidth - padRight}
                          y2={y50}
                          stroke="#D97706"
                          strokeWidth="1.4"
                          strokeDasharray="5 4"
                        />
                        <text
                          x={svgWidth - padRight - 4}
                          y={Math.max(padTop + 10, y50 - 5)}
                          textAnchor="end"
                          className="fill-amber-700 text-[9.5px] font-mono font-semibold"
                        >
                          50 ng/mL Screen
                        </text>

                        <line
                          x1={padLeft}
                          y1={y15}
                          x2={svgWidth - padRight}
                          y2={y15}
                          stroke="#0D9488"
                          strokeWidth="1.4"
                          strokeDasharray="3 3"
                        />
                        <text
                          x={svgWidth - padRight - 4}
                          y={Math.min(padTop + plotH - 4, y15 + 11)}
                          textAnchor="end"
                          className="fill-teal-700 text-[9.5px] font-mono font-semibold"
                        >
                          15 ng/mL Lab
                        </text>

                        <polygon
                          points={areaImmuno}
                          fill="#007AFF"
                          fillOpacity="0.12"
                        />

                        {multiSim.entrySummaries.map((entrySum, idx) => {
                          const color =
                            COMPOUND_LINE_COLORS[
                              idx % COMPOUND_LINE_COLORS.length
                            ];
                          const poly = pts
                            .map(
                              (p) =>
                                `${xForH(p.hoursFromNow).toFixed(1)},${yForC(
                                  p.perEntryTotalNgMl[entrySum.entryId] || 0
                                ).toFixed(1)}`
                            )
                            .join(' ');
                          return (
                            <polyline
                              key={entrySum.entryId}
                              points={poly}
                              fill="none"
                              stroke={color}
                              strokeWidth="1.5"
                              strokeOpacity="0.85"
                            />
                          );
                        })}

                        <polyline
                          points={combinedTotalPoly}
                          fill="none"
                          stroke="#475569"
                          strokeWidth="1.6"
                          strokeDasharray="4 3"
                        />

                        <polyline
                          points={combinedImmunoPoly}
                          fill="none"
                          stroke="#007AFF"
                          strokeWidth="2.6"
                        />

                        <line
                          x1={padLeft}
                          y1={padTop}
                          x2={padLeft}
                          y2={padTop + plotH}
                          stroke="#94A3B8"
                          strokeWidth="1.2"
                        />
                        <line
                          x1={padLeft}
                          y1={padTop + plotH}
                          x2={svgWidth - padRight}
                          y2={padTop + plotH}
                          stroke="#94A3B8"
                          strokeWidth="1.2"
                        />

                        {pts.map((pt, idx) => {
                          const cx = xForH(pt.hoursFromNow);
                          const cy = yForC(pt.combinedImmunoassayNgMl);
                          const isSelected = activePt === pt;
                          return (
                            <g key={idx}>
                              <circle
                                cx={cx}
                                cy={cy}
                                r={isSelected ? 4.5 : 2.5}
                                className="cursor-pointer"
                                fill={isSelected ? '#0F172A' : '#007AFF'}
                                stroke="#FFFFFF"
                                strokeWidth="1.2"
                                onMouseEnter={() => setHoveredMultiIdx(idx)}
                              />
                              {idx % 8 === 0 && (
                                <text
                                  x={cx}
                                  y={padTop + plotH + 16}
                                  textAnchor="middle"
                                  className="fill-slate-500 text-[9.5px] font-mono"
                                >
                                  {pt.dayOffsetFromNow >= 0
                                    ? `+${pt.dayOffsetFromNow}d`
                                    : `${pt.dayOffsetFromNow}d`}
                                </text>
                              )}
                            </g>
                          );
                        })}

                        <text
                          x={padLeft - 6}
                          y={padTop + 8}
                          textAnchor="end"
                          className="fill-slate-500 text-[9.5px] font-mono"
                        >
                          {Math.round(peakVal)}
                        </text>
                        <text
                          x={padLeft - 6}
                          y={y50 + 3}
                          textAnchor="end"
                          className="fill-amber-700 text-[9.5px] font-mono font-bold"
                        >
                          50
                        </text>
                        <text
                          x={padLeft - 6}
                          y={y15 + 3}
                          textAnchor="end"
                          className="fill-teal-700 text-[9.5px] font-mono font-bold"
                        >
                          15
                        </text>
                      </svg>

                      <div className="flex flex-wrap items-center gap-3 pt-2.5 mt-1 border-t border-slate-200/80 text-[11px] font-mono text-slate-600">
                        <span className="inline-flex items-center gap-1.5 font-bold text-[#007AFF]">
                          <span className="w-3 h-0.5 bg-[#007AFF] inline-block" />
                          Screen
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-slate-600">
                          <span className="w-3 h-0.5 bg-slate-500 inline-block" />
                          LC-MS
                        </span>
                        {multiSim.entrySummaries.map((entrySum, idx) => {
                          const color =
                            COMPOUND_LINE_COLORS[
                              idx % COMPOUND_LINE_COLORS.length
                            ];
                          return (
                            <span
                              key={entrySum.entryId}
                              className="inline-flex items-center gap-1"
                            >
                              <span
                                className="w-2.5 h-2.5 rounded-full inline-block"
                                style={{ backgroundColor: color }}
                              />
                              {entrySum.compound.shortName} ({entrySum.doseMg} mg)
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  );
                })()}
              </div>

              {/* 2. CHRONOLOGICAL LOGGED DOSES (iOS 27 Mobile Cards + Desktop Table) */}
              <div className="pt-1">
                <h4 className="text-sm font-extrabold text-slate-900 mb-2.5">
                  Logged Doses
                </h4>
                {multiSim.entrySummaries.length === 0 ? (
                  <div className="p-6 text-center bg-[#F2F2F7] rounded-2xl text-xs text-slate-500">
                    No doses currently logged. Use the log form above to record a dose.
                  </div>
                ) : (
                  <>
                    {/* Mobile iOS 27 Inset Cards (No horizontal scrolling on iPhone 17 Pro!) */}
                    <div className="sm:hidden space-y-2.5">
                      {multiSim.entrySummaries.map((item, idx) => {
                        const color =
                          COMPOUND_LINE_COLORS[
                            idx % COMPOUND_LINE_COLORS.length
                          ];
                        return (
                          <div
                            key={item.entryId}
                            className="p-3.5 bg-[#F2F2F7] rounded-2xl flex items-center justify-between gap-3"
                          >
                            <div className="min-w-0 flex-1 space-y-1">
                              <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                                <span
                                  className="w-2.5 h-2.5 rounded-full shrink-0"
                                  style={{ backgroundColor: color }}
                                />
                                <span className="font-mono font-bold text-sm text-slate-900 break-words">
                                  {item.compound.shortName}
                                </span>
                                <span className="font-mono text-xs font-semibold text-[#007AFF] break-words">
                                  {item.doseMg} mg
                                </span>
                                <span className="text-[11px] font-mono text-slate-500 break-words">
                                  ·{' '}
                                  {item.hoursSinceDose >= 0
                                    ? `${item.hoursSinceDose}h ago`
                                    : `in ${Math.abs(item.hoursSinceDose)}h`}
                                </span>
                              </div>
                              {item.unitLabel && (
                                <div className="text-[11px] text-slate-600 font-mono break-words leading-snug">
                                  {item.unitLabel}
                                </div>
                              )}
                              <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono text-slate-600">
                                <span>
                                  Now:{' '}
                                  <strong className="text-slate-900">
                                    {item.currentImmunoassayNgMl} ng/mL
                                  </strong>{' '}
                                  ({item.shareOfCurrentLoadPct}%)
                                </span>
                                <span>·</span>
                                <span>
                                  Clears:{' '}
                                  <strong className="text-teal-700">
                                    {item.individualHoursFromNowToClear15 <= 0
                                      ? 'Cleared'
                                      : formatCountdownHours(
                                          item.individualHoursFromNowToClear15
                                        )}
                                  </strong>
                                </span>
                              </div>
                            </div>

                            <button
                              type="button"
                              aria-label={`Remove ${item.compound.shortName} dose`}
                              onClick={() => handleRemoveEntry(item.entryId)}
                              className="min-h-[44px] min-w-[44px] flex items-center justify-center text-slate-400 hover:text-rose-600 bg-white rounded-xl shrink-0"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        );
                      })}
                    </div>

                    {/* Tablet/Desktop Table */}
                    <div className="hidden sm:block overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="border-b border-slate-200 text-xs font-mono uppercase text-slate-500">
                            <th className="py-2 pr-3">Compound</th>
                            <th className="py-2 px-2">Dose</th>
                            <th className="py-2 px-2">Time</th>
                            <th className="py-2 px-2">Current Load</th>
                            <th className="py-2 px-2">Clear Time</th>
                            <th className="py-2 pl-2 text-right">Remove</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200/70 text-xs">
                          {multiSim.entrySummaries.map((item, idx) => {
                            const color =
                              COMPOUND_LINE_COLORS[
                                idx % COMPOUND_LINE_COLORS.length
                              ];
                            return (
                              <tr
                                key={item.entryId}
                                className="hover:bg-slate-50/80"
                              >
                                <td className="py-2.5 pr-3">
                                  <div className="flex items-center gap-2">
                                    <span
                                      className="w-2.5 h-2.5 rounded-full shrink-0"
                                      style={{ backgroundColor: color }}
                                    />
                                    <div>
                                      <div className="font-bold text-slate-900 font-mono">
                                        {item.compound.shortName}
                                      </div>
                                      <div className="text-[11px] text-slate-500">
                                        LogP {item.compound.xLogP} · eff. t½ ~
                                        {item.effectiveHalfLifeHours}h
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className="py-2.5 px-2 font-mono text-slate-800 tabular-nums">
                                  <span className="font-bold">
                                    {item.doseMg} mg
                                  </span>{' '}
                                  <span className="text-slate-500 capitalize">
                                    ({item.route})
                                  </span>
                                  {item.unitLabel && (
                                    <div className="text-[11px] text-slate-500">
                                      {item.unitLabel}
                                    </div>
                                  )}
                                </td>
                                <td className="py-2.5 px-2 font-mono text-slate-600 tabular-nums">
                                  <div>
                                    {item.hoursSinceDose >= 0
                                      ? `${item.hoursSinceDose}h ago`
                                      : `in ${Math.abs(item.hoursSinceDose)}h`}
                                  </div>
                                  <div className="text-[11px] text-slate-400">
                                    {formatClearDate(item.timestampIso)}
                                  </div>
                                </td>
                                <td className="py-2.5 px-2 font-mono tabular-nums">
                                  <div className="font-bold text-slate-900">
                                    {item.currentImmunoassayNgMl} ng/mL screen
                                  </div>
                                  <div className="text-[11px] text-slate-500">
                                    {item.currentTotalNgMl} ng/mL total (
                                    {item.shareOfCurrentLoadPct}% share)
                                  </div>
                                </td>
                                <td className="py-2.5 px-2 font-mono text-slate-800 tabular-nums">
                                  {item.individualHoursFromNowToClear15 <= 0 ? (
                                    <span className="text-emerald-700 font-bold">
                                      Cleared
                                    </span>
                                  ) : (
                                    formatCountdownHours(
                                      item.individualHoursFromNowToClear15
                                    )
                                  )}
                                </td>
                                <td className="py-2.5 pl-2 text-right">
                                  <button
                                    type="button"
                                    aria-label={`Remove ${item.compound.shortName} dose`}
                                    onClick={() =>
                                      handleRemoveEntry(item.entryId)
                                    }
                                    className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </button>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </>
                )}
              </div>

              {/* UNIFIED DETECTION WINDOWS & COUNTDOWN STATUS */}
              <div className="pt-4 border-t border-slate-200/80 space-y-3.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="text-xs font-mono font-semibold text-slate-500 uppercase">
                      Real-Time Matrix Clearance & Detection Windows
                    </div>
                    <h4 className="text-base font-extrabold text-slate-900 mt-0.5">
                      Detection Windows & Countdown Status
                    </h4>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono bg-blue-50 text-[#007AFF] px-2.5 py-1 rounded-full font-bold">
                      BMI {multiSim.bmi} · ~{multiSim.estimatedBodyFatPct}% Fat
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs">
                  {/* Urine 50 ng/mL Standard Screen */}
                  <div className="p-3.5 bg-blue-50/70 border border-blue-200/80 rounded-2xl flex flex-col justify-between space-y-2">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-900">Urine (50 ng/mL)</span>
                        <span className="text-[10px] font-mono font-bold text-[#007AFF] bg-white px-2 py-0.5 rounded-full border border-blue-200">
                          Standard Screen
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-600 mt-0.5">
                        Standard workplace & rapid cup screen
                      </div>
                    </div>
                    <div className="pt-2 border-t border-blue-100 flex items-baseline justify-between font-mono">
                      <div>
                        <span className="text-xs text-slate-500 block">Status:</span>
                        <span className="font-bold text-slate-900 text-sm">
                          {multiSim.isCurrentlyClear50
                            ? 'Negative Now'
                            : formatClearDate(multiSim.clearDate50Iso)}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-extrabold text-[#007AFF]">
                          {formatCountdownHours(multiSim.hoursFromNowToClear50)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Urine 15 ng/mL Confirmatory Lab */}
                  <div className="p-3.5 bg-amber-50/70 border border-amber-200/80 rounded-2xl flex flex-col justify-between space-y-2">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-900">Urine Lab (15 ng/mL)</span>
                        <span className="text-[10px] font-mono font-bold text-amber-700 bg-white px-2 py-0.5 rounded-full border border-amber-200">
                          GC-MS Confirm
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-600 mt-0.5">
                        Confirmatory forensic & laboratory panel
                      </div>
                    </div>
                    <div className="pt-2 border-t border-amber-100 flex items-baseline justify-between font-mono">
                      <div>
                        <span className="text-xs text-slate-500 block">Status:</span>
                        <span className="font-bold text-slate-900 text-sm">
                          {multiSim.isCurrentlyClear15
                            ? 'Negative Now'
                            : formatClearDate(multiSim.clearDate15Iso)}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-extrabold text-amber-700">
                          {formatCountdownHours(multiSim.hoursFromNowToClear15)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Blood Active Panel */}
                  <div className="p-3.5 bg-[#F2F2F7] rounded-2xl flex flex-col justify-between space-y-2">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-900">Blood (2 ng/mL)</span>
                        <span className="text-[10px] font-mono text-slate-600 bg-white px-2 py-0.5 rounded-full border border-slate-200">
                          Active Panel
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5">
                        Serum active concentration
                      </div>
                    </div>
                    <div className="pt-2 border-t border-slate-200/70 flex items-baseline justify-between font-mono">
                      <div>
                        <span className="text-xs text-slate-500 block">Status:</span>
                        <span className="font-bold text-slate-900 text-sm">
                          {multiSim.hoursFromNowToClearBlood <= 0
                            ? 'Negative Now'
                            : formatClearDate(multiSim.clearDateBloodIso)}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-bold text-slate-700">
                          {formatCountdownHours(
                            multiSim.hoursFromNowToClearBlood
                          )}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Saliva Oral Fluid Panel */}
                  <div className="p-3.5 bg-[#F2F2F7] rounded-2xl flex flex-col justify-between space-y-2">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-900">Saliva (4 ng/mL)</span>
                        <span className="text-[10px] font-mono text-slate-600 bg-white px-2 py-0.5 rounded-full border border-slate-200">
                          Oral Fluid
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5">
                        Oral fluid swab test
                      </div>
                    </div>
                    <div className="pt-2 border-t border-slate-200/70 flex items-baseline justify-between font-mono">
                      <div>
                        <span className="text-xs text-slate-500 block">Status:</span>
                        <span className="font-bold text-slate-900 text-sm">
                          {multiSim.hoursFromNowToClearSaliva <= 0
                            ? 'Negative Now'
                            : formatClearDate(multiSim.clearDateSalivaIso)}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-bold text-slate-700">
                          {formatCountdownHours(
                            multiSim.hoursFromNowToClearSaliva
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* SINGLE-COMPOUND FREQUENCY ESTIMATOR VIEW */
            <div className="ios-card p-4 sm:p-6 space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-200/70">
                <div>
                  <div className="text-xs font-mono text-slate-500">
                    Model · {singleCompound.shortName} · {singleFrequency.toUpperCase()}
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 mt-0.5">
                    Detection Windows
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pb-4 border-b border-slate-200/70">
                <div className="p-3.5 bg-[#F2F2F7] rounded-2xl">
                  <div className="text-[11px] uppercase font-mono text-slate-500">
                    BMI & Est. Body Fat
                  </div>
                  <div className="mt-1 flex items-baseline">
                    <span className="text-xl font-mono font-bold text-slate-900 tabular-nums">
                      {singleSim.bmi}
                    </span>
                    <span className="text-xs font-mono text-slate-500 ml-1">
                      kg/m²
                    </span>
                  </div>
                  <div className="text-[11px] font-mono text-slate-500 mt-0.5">
                    ~{singleSim.estimatedBodyFatPct}% Fat
                  </div>
                </div>

                <div className="p-3.5 bg-[#F2F2F7] rounded-2xl">
                  <div className="text-[11px] uppercase font-mono text-slate-500">
                    Effective Terminal t½
                  </div>
                  <div className="mt-1 flex items-baseline">
                    <span className="text-xl font-mono font-bold text-slate-900 tabular-nums">
                      {singleSim.effectiveHalfLifeHours}
                    </span>
                    <span className="text-xs font-mono text-slate-500 ml-1">
                      hrs
                    </span>
                  </div>
                  <div className="text-[11px] font-mono text-slate-500 mt-0.5">
                    Index: {singleSim.adiposeRetentionIndex}×
                  </div>
                </div>

                <div className="p-3.5 bg-blue-50/60 border border-blue-200 rounded-2xl">
                  <div className="text-[11px] uppercase font-mono text-slate-700 font-semibold">
                    Urine 50 ng/mL
                  </div>
                  <div className="mt-1 flex items-baseline">
                    <span className="text-xl font-mono font-bold text-[#007AFF] tabular-nums">
                      {singleSim.windows.urine50.estimatedDaysMin}–
                      {singleSim.windows.urine50.estimatedDaysMax}
                    </span>
                    <span className="text-xs font-mono text-slate-500 ml-1">
                      days
                    </span>
                  </div>
                  <div className="text-[11px] font-mono text-slate-500 mt-0.5">
                    Standard Screen
                  </div>
                </div>

                <div className="p-3.5 bg-amber-50/60 border border-amber-200 rounded-2xl">
                  <div className="text-[11px] uppercase font-mono text-slate-700 font-semibold">
                    Urine 15 ng/mL
                  </div>
                  <div className="mt-1 flex items-baseline">
                    <span className="text-xl font-mono font-bold text-amber-700 tabular-nums">
                      {singleSim.windows.urine15.estimatedDaysMin}–
                      {singleSim.windows.urine15.estimatedDaysMax}
                    </span>
                    <span className="text-xs font-mono text-slate-500 ml-1">
                      days
                    </span>
                  </div>
                  <div className="text-[11px] font-mono text-slate-500 mt-0.5">
                    GC-MS Confirm
                  </div>
                </div>
              </div>

              {/* Single-Compound Decay SVG */}
              {(() => {
                const maxDay =
                  singleSim.decayCurve[singleSim.decayCurve.length - 1]?.day ||
                  30;
                const maxConc = Math.max(100, singleSim.initialPeakUrineNgMl);
                const xForDay = (d: number) => padLeft + (d / maxDay) * plotW;
                const yForConc = (c: number) => {
                  const clamped = Math.max(0, Math.min(maxConc, c));
                  const norm =
                    Math.log10(clamped + 1) / Math.log10(maxConc + 1);
                  return padTop + plotH - norm * plotH;
                };
                const poly = singleSim.decayCurve
                  .map(
                    (pt) =>
                      `${xForDay(pt.day).toFixed(1)},${yForConc(
                        pt.urineConcentrationNgMl
                      ).toFixed(1)}`
                  )
                  .join(' ');
                const activePt =
                  hoveredSingleIdx !== null
                    ? singleSim.decayCurve[hoveredSingleIdx]
                    : singleSim.decayCurve[
                        Math.min(8, singleSim.decayCurve.length - 1)
                      ];

                return (
                  <div className="bg-[#F2F2F7] rounded-[20px] p-3.5">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-600 pb-2 border-b border-slate-200/80 mb-2">
                      <span>Day +{activePt.day}d</span>
                      <span>
                        Urine:{' '}
                        <strong>{activePt.urineConcentrationNgMl} ng/mL</strong>
                      </span>
                    </div>
                    <svg
                      viewBox={`0 0 ${svgWidth} ${svgHeight}`}
                      className="w-full h-auto select-none"
                    >
                      <polyline
                        points={poly}
                        fill="none"
                        stroke="#007AFF"
                        strokeWidth="2.5"
                      />
                      {singleSim.decayCurve.map((pt, idx) => (
                        <circle
                          key={idx}
                          cx={xForDay(pt.day)}
                          cy={yForConc(pt.urineConcentrationNgMl)}
                          r={3}
                          fill="#007AFF"
                          onMouseEnter={() => setHoveredSingleIdx(idx)}
                        />
                      ))}
                    </svg>
                  </div>
                );
              })()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
