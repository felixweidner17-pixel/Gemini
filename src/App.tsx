import React, { useState } from 'react';
import {
  CANNABINOID_DATABASE,
  DerivativeModType,
  getCannabinoidById,
} from './data/cannabinoids';
import { ALL_SUBSTANCES_DATABASE } from './data/allSubstances';
import { HomeScreen } from './components/HomeScreen';
import { CannabinoidLibrary } from './components/CannabinoidLibrary';
import { DoseLogEntry } from './utils/pharmacokinetics';
import { Home, BookOpen, Clock, Sparkles } from 'lucide-react';

type ActiveSection = 'home' | 'library';

export function App() {
  const [activeSection, setActiveSection] = useState<ActiveSection>('home');
  const [selectedId, setSelectedId] = useState<string>('delta9-thc');
  const [derivativeMod, setDerivativeMod] = useState<DerivativeModType>('native');

  // Retrieve compound from database
  const primaryCompound =
    ALL_SUBSTANCES_DATABASE.find((c) => c.id === selectedId) ||
    getCannabinoidById(selectedId) ||
    CANNABINOID_DATABASE[0];

  const handleSelectQuickTry = (id: string) => {
    const modMatch = id.match(
      /^(.+)-mod-(9h|9-oh|9oh|10-oh|10oh|8-oh|8oh|11-oh|11oh|oac|o-acetate)$/
    );
    if (modMatch) {
      setSelectedId(modMatch[1]);
    } else {
      setSelectedId(id);
    }
  };

  const handleLogFromLibrary = (baseId: string, mod: DerivativeModType) => {
    const compound =
      ALL_SUBSTANCES_DATABASE.find((c) => c.id === baseId) ||
      getCannabinoidById(baseId) ||
      CANNABINOID_DATABASE[0];
    const defaultDose = Math.round(compound.baseOralThresholdMg * 1.5 * 10) / 10;
    const entry: DoseLogEntry = {
      id: `dose-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      cannabinoidId: baseId,
      derivativeMod: mod,
      route: 'oral',
      doseMg: defaultDose,
      timestampIso: new Date().toISOString(),
      unitLabel: `${defaultDose} mg · oral`,
    };
    try {
      const existing = localStorage.getItem('cannapharm_dose_log_entries_v2');
      const parsed: DoseLogEntry[] = existing ? JSON.parse(existing) : [];
      localStorage.setItem(
        'cannapharm_dose_log_entries_v2',
        JSON.stringify([entry, ...parsed])
      );
      window.dispatchEvent(new Event('storage'));
    } catch {
      // ignore
    }
    setActiveSection('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F2F2F7] text-slate-900 pb-24 md:pb-10">
      {/* iOS Translucent Top App Bar */}
      <header className="h-[52px] flex items-center justify-between gap-2 sm:gap-4 px-3 sm:px-6 bg-white/85 backdrop-blur-2xl border-b border-slate-200/70 sticky top-0 z-30">
        {/* Zone 1: Wordmark */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            setActiveSection('home');
          }}
          className="text-base sm:text-lg font-extrabold tracking-tight text-slate-900 flex items-center gap-2 min-w-0"
        >
          <span>Daddy’s Little Helper</span>
        </a>

        {/* Zone 2: Desktop Segmented Navigation Links */}
        <nav
          aria-label="Primary Workspace Sections"
          className="hidden md:flex items-center gap-1 p-1 bg-[#E5E5EA]/70 rounded-full text-xs font-semibold text-slate-600"
        >
          {(
            [
              { id: 'home', label: 'Home · Clean Status' },
              { id: 'library', label: 'Substance Library' },
            ] as { id: ActiveSection; label: string }[]
          ).map((nav) => (
            <a
              key={nav.id}
              href={`#${nav.id}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveSection(nav.id);
              }}
              className={`px-4 py-1.5 rounded-full transition-all whitespace-nowrap shrink-0 ${
                activeSection === nav.id
                  ? 'bg-white text-slate-900 shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {nav.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Metadata Badge */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-[11px] font-mono font-semibold text-slate-500 hidden sm:inline">
            373 Substances
          </span>
        </div>
      </header>

      {/* Main Content Container */}
      <main
        id="top"
        className="flex-1 max-w-[1360px] w-full mx-auto px-3 sm:px-6 pt-3 sm:pt-5 space-y-4 sm:space-y-5 overflow-x-hidden"
      >
        {activeSection === 'home' && (
          <HomeScreen />
        )}

        {activeSection === 'library' && (
          <CannabinoidLibrary
            selectedCompoundId={primaryCompound.id}
            activeDerivativeMod={derivativeMod}
            onChangeDerivativeMod={setDerivativeMod}
            onLogCannabinoid={(baseId, mod) => {
              handleLogFromLibrary(baseId, mod);
            }}
          />
        )}
      </main>

      {/* Desktop Footer */}
      <footer className="hidden md:block border-t border-slate-200/80 bg-white/70 backdrop-blur-md py-4 px-6 mt-8">
        <div className="max-w-[1360px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <div>
            Daddy’s Little Helper · Clinical Pharmacology & Elimination Reference
          </div>
          <div className="font-mono">
            373 Substances · Forensic Detection Windows & Half-Life Standards
          </div>
        </div>
      </footer>

      {/* iOS Translucent Bottom Tab Bar (2-Tab Thumb-Zone Ergonomics) */}
      <nav
        aria-label="iOS Bottom Tab Bar"
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-2xl border-t border-slate-200/80 pb-safe"
      >
        <div className="grid grid-cols-2 items-center h-[58px] max-w-sm mx-auto px-3">
          {(
            [
              {
                id: 'home',
                label: 'Clean Status',
                icon: Home,
              },
              {
                id: 'library',
                label: 'Substances',
                icon: BookOpen,
              },
            ] as const
          ).map((tab) => {
            const Icon = tab.icon;
            const isActive = activeSection === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => {
                  setActiveSection(tab.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`min-h-[48px] flex flex-col items-center justify-center rounded-2xl transition-colors ${
                  isActive
                    ? 'text-[#007AFF] font-bold'
                    : 'text-slate-400 hover:text-slate-700 font-medium'
                }`}
              >
                <Icon
                  className={`w-5 h-5 ${
                    isActive ? 'stroke-[2.4px]' : 'stroke-[1.8px]'
                  }`}
                />
                <span className="text-[10.5px] tracking-tight mt-0.5">
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

export default App;
