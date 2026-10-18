/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  applyDerivativeModification,
  DerivativeModType,
  getCannabinoidById,
} from './data/cannabinoids';
import { DosageCalculator } from './components/DosageCalculator';
import { ClearanceCalculator } from './components/ClearanceCalculator';
import { CannabinoidLibrary } from './components/CannabinoidLibrary';
import { Clock, Sliders, BookOpen } from 'lucide-react';

type ActiveSection = 'clearance' | 'library' | 'dosage';

export default function App() {
  const [selectedId, setSelectedId] = useState<string>('9h-hhcp');
  const [derivativeMod, setDerivativeMod] = useState<DerivativeModType>('native');
  const [activeSection, setActiveSection] = useState<ActiveSection>('clearance');

  const basePrimaryCompound = getCannabinoidById(selectedId);
  const primaryCompound = applyDerivativeModification(
    basePrimaryCompound,
    derivativeMod
  );

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

  return (
    <div className="min-h-screen flex flex-col bg-[#F2F2F7] text-slate-900 pb-24 md:pb-10">
      {/* iOS 27 Translucent Top App Bar (Strict 3-Zone Contract, Compact 52px Height) */}
      <header className="h-[52px] flex items-center justify-between gap-2 sm:gap-4 px-3 sm:px-6 bg-white/85 backdrop-blur-2xl border-b border-slate-200/70 sticky top-0 z-30">
        {/* Zone 1: Wordmark */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            setActiveSection('clearance');
          }}
          className="text-base sm:text-lg font-extrabold tracking-tight text-slate-900 flex items-center gap-1.5 sm:gap-2 min-w-0"
        >
          <span>CannaPharm</span>
          <span className="text-[11px] font-mono font-semibold text-[#007AFF] bg-blue-50 px-2 py-0.5 rounded-full break-words">
            {primaryCompound.shortName}
          </span>
        </a>

        {/* Zone 2: Desktop Segmented Navigation Links */}
        <nav
          aria-label="Primary Workspace Sections"
          className="hidden md:flex items-center gap-1 p-1 bg-[#E5E5EA]/70 rounded-full text-xs font-semibold text-slate-600"
        >
          {(
            [
              { id: 'clearance', label: 'Clearance' },
              { id: 'library', label: 'Library' },
              { id: 'dosage', label: 'Dosage' },
            ] as { id: ActiveSection; label: string }[]
          ).map((nav) => (
            <a
              key={nav.id}
              href={`#${nav.id}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveSection(nav.id);
              }}
              className={`px-3.5 py-1.5 rounded-full transition-all whitespace-nowrap shrink-0 ${
                activeSection === nav.id
                  ? 'bg-white text-slate-900 shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {nav.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action / Quick Toggle */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() =>
              setActiveSection(
                activeSection === 'library' ? 'clearance' : 'library'
              )
            }
            className="min-h-[34px] px-3.5 py-1 text-xs font-semibold text-white bg-[#007AFF] hover:bg-[#0062CC] active:scale-[0.98] rounded-full transition-all whitespace-nowrap shrink-0 shadow-xs flex items-center gap-1.5"
          >
            {activeSection === 'library' ? (
              <>
                <Clock className="w-3.5 h-3.5" />
                <span>Clearance</span>
              </>
            ) : (
              <>
                <BookOpen className="w-3.5 h-3.5" />
                <span>Library</span>
              </>
            )}
          </button>
        </div>
      </header>

      {/* Main Content Container */}
      <main
        id="top"
        className="flex-1 max-w-[1360px] w-full mx-auto px-3 sm:px-6 pt-3 sm:pt-5 space-y-4 sm:space-y-5 overflow-x-hidden"
      >
        {/* Active Module Content */}
        {activeSection === 'clearance' && (
          <ClearanceCalculator
            selectedCannabinoidId={primaryCompound.id}
            onSelectCannabinoid={(id) => {
              setDerivativeMod('native');
              handleSelectQuickTry(id);
            }}
          />
        )}

        {activeSection === 'library' && (
          <CannabinoidLibrary
            selectedCompoundId={primaryCompound.id}
            activeDerivativeMod={derivativeMod}
            onChangeDerivativeMod={setDerivativeMod}
            onLogCannabinoid={(baseId, mod) => {
              setSelectedId(baseId);
              setDerivativeMod(mod);
              setActiveSection('clearance');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenDosage={(baseId, mod) => {
              setSelectedId(baseId);
              setDerivativeMod(mod);
              setActiveSection('dosage');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeSection === 'dosage' && (
          <DosageCalculator
            selectedCannabinoidId={primaryCompound.id}
            onSelectCannabinoid={(id) => {
              setDerivativeMod('native');
              handleSelectQuickTry(id);
            }}
          />
        )}
      </main>

      {/* Desktop Footer */}
      <footer className="hidden md:block border-t border-slate-200/80 bg-white/70 backdrop-blur-md py-4 px-6 mt-8">
        <div className="max-w-[1360px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <div>
            CannaPharm Analytical Workbench · Harm-Reduction Pharmacology & Toxicokinetic Reference
          </div>
          <div className="font-mono">
            Ki & Pharmacokinetic Data: PubChem PUG REST · Citti et al. · Persson et al. · Huestis
          </div>
        </div>
      </footer>

      {/* iOS 27 Translucent Bottom Tab Bar (3-Tab Thumb-Zone Ergonomics for iPhone 17 Pro) */}
      <nav
        aria-label="iOS Bottom Tab Bar"
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-2xl border-t border-slate-200/80 pb-safe"
      >
        <div className="grid grid-cols-3 items-center h-[58px] max-w-md mx-auto px-3">
          {(
            [
              {
                id: 'clearance',
                label: 'Clearance',
                icon: Clock,
              },
              {
                id: 'library',
                label: 'Library',
                icon: BookOpen,
              },
              {
                id: 'dosage',
                label: 'Dosage',
                icon: Sliders,
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
                <span className="text-[10px] tracking-tight mt-0.5">
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
