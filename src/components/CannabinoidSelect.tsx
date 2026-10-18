import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  CannabinoidClass,
  CannabinoidProfile,
  getSubstanceMacroCategory,
  isCannabinoidSubstance,
  MACRO_CATEGORY_GROUPS,
  SubstanceMacroCategory,
} from '../data/cannabinoids';
import { ChemicalStructure2D } from './ChemicalStructure2D';
import {
  ChevronDown,
  Search,
  Check,
  X,
} from 'lucide-react';

interface CannabinoidSelectProps {
  id?: string;
  label?: string;
  value: string;
  compounds: CannabinoidProfile[];
  dynamicCompound?: CannabinoidProfile;
  onChange: (id: string) => void;
  compact?: boolean;
  ariaLabel?: string;
}

export const CannabinoidSelect: React.FC<CannabinoidSelectProps> = ({
  id,
  label,
  value,
  compounds,
  dynamicCompound,
  onChange,
  compact = false,
  ariaLabel,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [macroFilter, setMacroFilter] = useState<'All' | SubstanceMacroCategory>('All');
  const [categoryFilter, setCategoryFilter] = useState<'All' | CannabinoidClass>('All');
  const containerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const selectedCompound =
    compounds.find((c) => c.id === value) ||
    (dynamicCompound && dynamicCompound.id === value ? dynamicCompound : undefined) ||
    compounds[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        containerRef.current &&
        !containerRef.current.contains(target) &&
        (!dropdownRef.current || !dropdownRef.current.contains(target))
      ) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 60);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const getClassAccent = (cls: CannabinoidClass) => {
    switch (cls) {
      case 'Phytocannabinoid':
        return {
          bg: 'bg-emerald-50/90',
          border: 'border-emerald-200/80',
          text: 'text-emerald-700',
          short: 'Natural Weed',
        };
      case '9H- Enriched Series':
        return {
          bg: 'bg-blue-50/90',
          border: 'border-blue-200/80',
          text: 'text-[#007AFF]',
          short: '9H Series',
        };
      case '9-OH / 10-OH / 11-OH Series':
        return {
          bg: 'bg-teal-50/90',
          border: 'border-teal-200/80',
          text: 'text-teal-700',
          short: 'OH Cannabinoid',
        };
      case 'Semi-Synthetic':
        return {
          bg: 'bg-amber-50/90',
          border: 'border-amber-200/80',
          text: 'text-amber-700',
          short: 'Homolog / Ester',
        };
      case 'Synthetic Agonist':
        return {
          bg: 'bg-rose-50/90',
          border: 'border-rose-200/80',
          text: 'text-rose-700',
          short: 'Synthetic CB1',
        };
      case 'Benzodiazepine':
        return {
          bg: 'bg-indigo-50/90',
          border: 'border-indigo-200/80',
          text: 'text-indigo-700',
          short: 'Benzodiazepine',
        };
      case 'Opioid Analgesic':
        return {
          bg: 'bg-rose-50/90',
          border: 'border-rose-200/80',
          text: 'text-rose-700',
          short: 'Opioid / Opiate',
        };
      case 'Gabapentinoid':
        return {
          bg: 'bg-cyan-50/90',
          border: 'border-cyan-200/80',
          text: 'text-cyan-700',
          short: 'Gabapentinoid',
        };
      case 'Rx Stimulant':
        return {
          bg: 'bg-orange-50/90',
          border: 'border-orange-200/80',
          text: 'text-orange-700',
          short: 'Rx Stimulant',
        };
      case 'Dissociative':
        return {
          bg: 'bg-purple-50/90',
          border: 'border-purple-200/80',
          text: 'text-purple-700',
          short: 'Dissociative',
        };
      case 'Empathogen / Stimulant':
        return {
          bg: 'bg-fuchsia-50/90',
          border: 'border-fuchsia-200/80',
          text: 'text-fuchsia-700',
          short: 'MDMA / Stimulant',
        };
      case 'Psychedelic':
        return {
          bg: 'bg-violet-50/90',
          border: 'border-violet-200/80',
          text: 'text-violet-700',
          short: 'Psychedelic',
        };
    }
  };

  const getRiskBadgeColor = (tier: CannabinoidProfile['riskTier']) => {
    switch (tier) {
      case 'Low':
        return 'text-emerald-700 bg-emerald-50';
      case 'Moderate':
        return 'text-amber-700 bg-amber-50';
      case 'High':
        return 'text-orange-700 bg-orange-50';
      case 'Extreme':
        return 'text-rose-700 bg-rose-50 font-bold';
    }
  };

  const filteredCompounds = compounds.filter((c) => {
    const macro = getSubstanceMacroCategory(c.classification);
    const matchesMacro = macroFilter === 'All' || macro === macroFilter;
    const matchesCat =
      categoryFilter === 'All' || c.classification === categoryFilter;
    const q = searchQuery.trim().toLowerCase();
    if (!q) return matchesMacro && matchesCat;
    return (
      matchesMacro &&
      matchesCat &&
      (c.shortName.toLowerCase().includes(q) ||
        c.name.toLowerCase().includes(q) ||
        c.classification.toLowerCase().includes(q) ||
        macro.toLowerCase().includes(q) ||
        c.summary.toLowerCase().includes(q) ||
        c.synonyms.some((s) => s.toLowerCase().includes(q)))
    );
  });

  const activeMacroGroup =
    macroFilter === 'All'
      ? null
      : MACRO_CATEGORY_GROUPS.find((g) => g.id === macroFilter) || null;

  const visibleSubcategories = activeMacroGroup
    ? activeMacroGroup.subcategories
    : MACRO_CATEGORY_GROUPS.flatMap((g) => g.subcategories);

  const selectedAccent = getClassAccent(selectedCompound.classification);

  const dropdownModalContent = isOpen ? (
    <div className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center p-0 sm:p-4">
      {/* Translucent iOS 27 Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/35 backdrop-blur-[3px] transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      {/* Glassmorphic iOS 27 Sheet on iPhone 17 Pro / Centered Modal on Desktop */}
      <div
        ref={dropdownRef}
        role="listbox"
        aria-label="Substance Options"
        className="relative z-10 w-full sm:max-w-xl max-h-[85vh] sm:max-h-[600px] bg-white/96 backdrop-blur-2xl border-t sm:border border-slate-200/90 rounded-t-[28px] sm:rounded-[28px] shadow-2xl flex flex-col overflow-hidden pb-safe"
      >
        {/* iOS 27 Sheet Grabber Handle (Mobile) */}
        <div className="w-10 h-1.5 bg-slate-300/90 rounded-full mx-auto mt-2.5 mb-1 sm:hidden shrink-0" />

        {/* Top Search & Filter Header */}
        <div className="px-3.5 pt-2.5 pb-3 border-b border-slate-200/80 bg-[#F2F2F7]/75 space-y-2 shrink-0">
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-extrabold text-slate-800">
              Select Substance ({filteredCompounds.length})
            </span>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="min-h-[32px] px-3 py-1 text-xs font-bold text-[#007AFF] bg-blue-50 hover:bg-blue-100/80 rounded-full whitespace-nowrap shrink-0"
            >
              Done
            </button>
          </div>

          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search weed, benzos, opioids, pregabalin, ketamine, MDMA, 2C-B..."
              className="w-full min-h-[40px] pl-8 pr-8 py-1.5 text-xs bg-white border border-slate-200/90 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#007AFF]"
            />
            {searchQuery && (
              <button
                type="button"
                aria-label="Clear search"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Tier 1: Macro-Category Tabs (Weed / Prescription Pharmaceuticals / Illicit Substances) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 p-1 bg-[#E5E5EA]/90 rounded-xl">
            {(
              [
                { id: 'All', label: 'All Substances' },
                { id: 'Weed & Cannabinoids', label: 'Weed & THC' },
                { id: 'Prescription Pharmaceuticals', label: 'Rx Pharma' },
                { id: 'Illicit Substances', label: 'Illicit Drugs' },
              ] as const
            ).map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => {
                  setMacroFilter(m.id);
                  setCategoryFilter('All');
                }}
                className={`min-h-[30px] px-2 py-1 text-[11px] rounded-lg transition-all text-center break-words leading-tight ${
                  macroFilter === m.id
                    ? 'bg-white text-slate-900 font-bold shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900 font-medium'
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>

          {/* Tier 2: Subcategory Filter Strip */}
          <div className="flex flex-wrap items-center gap-1 pt-0.5">
            <button
              type="button"
              onClick={() => setCategoryFilter('All')}
              className={`min-h-[28px] px-2.5 py-1 text-[10px] font-semibold rounded-full transition-all break-words leading-tight ${
                categoryFilter === 'All'
                  ? 'bg-[#007AFF] text-white shadow-2xs'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200/70'
              }`}
            >
              All Subcategories
            </button>
            {visibleSubcategories.map((sub) => (
              <button
                key={sub.id}
                type="button"
                onClick={() => setCategoryFilter(sub.id)}
                className={`min-h-[28px] px-2.5 py-1 text-[10px] font-semibold rounded-full transition-all break-words leading-tight ${
                  categoryFilter === sub.id
                    ? 'bg-[#007AFF] text-white shadow-2xs'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200/70'
                }`}
              >
                {sub.shortLabel}
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable Rich Substance Option List */}
        <div className="flex-1 overflow-y-auto divide-y divide-slate-100 p-2">
          {filteredCompounds.length === 0 ? (
            <div className="py-10 px-4 text-center text-xs text-slate-500">
              No substances match &ldquo;{searchQuery}&rdquo;. Try searching by class or reset the filter.
            </div>
          ) : (
            filteredCompounds.map((c) => {
              const isSelected = c.id === selectedCompound.id;
              const accent = getClassAccent(c.classification);
              return (
                <button
                  key={c.id}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => {
                    onChange(c.id);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left p-2.5 sm:p-3 rounded-2xl transition-all flex items-start gap-3 ${
                    isSelected
                      ? 'bg-blue-50/85 ring-1 ring-[#007AFF]/40'
                      : 'hover:bg-[#F2F2F7]/80'
                  }`}
                >
                  {/* Left Mini Structure Card */}
                  <div
                    className={`w-12 h-12 rounded-xl border ${accent.border} ${accent.bg} flex items-center justify-center shrink-0 overflow-hidden p-0.5 mt-0.5`}
                  >
                    <div className="w-full h-full flex items-center justify-center scale-[0.85] origin-center pointer-events-none">
                      <ChemicalStructure2D compound={c} />
                    </div>
                  </div>

                  {/* Middle Compound Info + Description */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5 flex-wrap min-w-0">
                        <span className="text-xs sm:text-sm font-extrabold text-slate-900 font-mono break-words leading-tight">
                          {c.shortName}
                        </span>
                        <span
                          className={`text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded break-words ${accent.bg} ${accent.text}`}
                        >
                          {accent.short}
                        </span>
                        <span
                          className={`text-[10px] font-mono px-1.5 py-0.5 rounded break-words ${getRiskBadgeColor(
                            c.riskTier
                          )}`}
                        >
                          {c.riskTier} Risk
                        </span>
                      </div>

                      {isSelected && (
                        <span className="w-5 h-5 rounded-full bg-[#007AFF] text-white flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 stroke-[3px]" />
                        </span>
                      )}
                    </div>

                    <div className="text-xs font-semibold text-slate-700 break-words leading-tight mt-0.5">
                      {c.name}
                    </div>

                    <p className="text-[11px] text-slate-500 line-clamp-2 leading-tight mt-0.5">
                      {c.summary}
                    </p>

                    {/* Micro Bio-Metrics Bar */}
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[10px] font-mono text-slate-500 mt-1">
                      <span className="font-bold text-[#007AFF] break-words">
                        {isCannabinoidSubstance(c)
                          ? `${c.relativePotencyVsD9}× vs Δ9`
                          : `Threshold ~${c.baseOralThresholdMg} mg`}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="break-words">
                        t½ ~{c.terminalHalfLifeHours}h
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="break-words">
                        LogP {c.xLogP}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="break-words">
                        Screen {c.immunoassayCrossReactivityPct}%
                      </span>
                    </div>
                  </div>
                </button>
              );
            })
          )}
        </div>
      </div>
    </div>
  ) : null;

  return (
    <div ref={containerRef} className="relative w-full">
      {label && (
        <label
          htmlFor={id}
          className="block text-xs font-bold text-slate-700 mb-1.5"
        >
          {label}
        </label>
      )}

      {/* Custom iOS 27 Tactile Picker Trigger Button */}
      <button
        id={id}
        type="button"
        aria-label={ariaLabel || label || 'Select substance'}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className={`w-full text-left transition-all flex items-center justify-between gap-2.5 border ${
          compact
            ? 'min-h-[42px] px-3 py-1.5 rounded-2xl bg-[#F2F2F7] hover:bg-slate-200/70 border-slate-200/90'
            : 'min-h-[58px] p-2.5 sm:px-3.5 sm:py-2.5 rounded-[20px] bg-[#F2F2F7]/90 hover:bg-[#E5E5EA]/70 border-slate-200/90 shadow-2xs'
        } ${isOpen ? 'ring-2 ring-[#007AFF] bg-white border-[#007AFF]/40' : ''}`}
      >
        <div className="flex items-center gap-2.5 min-w-0 flex-1">
          {/* Mini 2D Structure Thumbnail Preview */}
          {!compact && (
            <div
              className={`w-11 h-11 rounded-2xl border ${selectedAccent.border} ${selectedAccent.bg} flex items-center justify-center shrink-0 overflow-hidden p-0.5`}
            >
              <div className="w-full h-full flex items-center justify-center scale-[0.85] origin-center pointer-events-none">
                <ChemicalStructure2D compound={selectedCompound} />
              </div>
            </div>
          )}

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-xs sm:text-sm font-extrabold text-slate-900 font-mono break-words leading-tight">
                {selectedCompound.shortName}
              </span>
              <span
                className={`text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded-md ${selectedAccent.bg} ${selectedAccent.text} break-words`}
              >
                {selectedAccent.short}
              </span>
              <span className="text-[10px] font-mono font-bold text-[#007AFF] bg-blue-50 px-1.5 py-0.5 rounded-md break-words">
                {isCannabinoidSubstance(selectedCompound)
                  ? `${selectedCompound.relativePotencyVsD9}× Δ9`
                  : `~${selectedCompound.baseOralThresholdMg} mg`}
              </span>
            </div>

            {!compact && (
              <div className="text-[11px] text-slate-500 mt-0.5 flex flex-wrap items-center gap-x-1.5 gap-y-0.5">
                <span className="break-words leading-tight">{selectedCompound.name}</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono break-words leading-tight">
                  t½ ~{selectedCompound.terminalHalfLifeHours}h
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Right Action Pill + Animated Chevron */}
        <div className="flex items-center gap-1.5 shrink-0">
          {!compact && (
            <span className="hidden sm:inline-block text-[11px] font-semibold text-[#007AFF] bg-blue-50/90 px-2.5 py-1 rounded-full">
              Change
            </span>
          )}
          <div
            className={`w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-150 ${
              isOpen
                ? 'bg-[#007AFF] text-white rotate-180'
                : 'bg-white text-slate-600 shadow-2xs'
            }`}
          >
            <ChevronDown className="w-4 h-4 stroke-[2.2px]" />
          </div>
        </div>
      </button>

      {typeof document !== 'undefined' &&
        dropdownModalContent &&
        createPortal(dropdownModalContent, document.body)}
    </div>
  );
};

/* Generic iOS 27 Sleek Popover Select for Non-Cannabinoid Options (Voltage, CBD Buffer, Sort, etc.) */
export interface CustomSelectOption<T extends string> {
  value: T;
  label: string;
  sublabel?: string;
  badge?: string;
}

interface CustomOptionSelectProps<T extends string> {
  id?: string;
  label?: string;
  value: T;
  options: CustomSelectOption<T>[];
  onChange: (value: T) => void;
  compact?: boolean;
}

export function CustomOptionSelect<T extends string>({
  id,
  label,
  value,
  options,
  onChange,
  compact = false,
}: CustomOptionSelectProps<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOpt = options.find((o) => o.value === value) || options[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={containerRef} className="relative w-full">
      {label && (
        <label
          htmlFor={id}
          className={`block font-semibold text-slate-600 ${
            compact ? 'text-[11px] mb-1' : 'text-xs font-bold text-slate-700 mb-1.5'
          }`}
        >
          {label}
        </label>
      )}

      <button
        id={id}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className={`w-full text-left flex items-center justify-between gap-2 transition-all border ${
          compact
            ? 'min-h-[38px] px-2.5 py-1 text-xs rounded-xl bg-white border-slate-200'
            : 'min-h-[44px] px-3.5 py-2 text-xs rounded-2xl bg-[#F2F2F7] border-slate-200/90 hover:bg-slate-200/60'
        } ${isOpen ? 'ring-2 ring-[#007AFF] bg-white' : ''}`}
      >
        <div className="min-w-0 flex-1">
          <div className="font-mono font-bold text-slate-900 break-words leading-tight">
            {selectedOpt.label}
          </div>
          {!compact && selectedOpt.sublabel && (
            <div className="text-[11px] text-slate-500 break-words leading-tight mt-0.5">
              {selectedOpt.sublabel}
            </div>
          )}
        </div>
        <ChevronDown
          className={`w-3.5 h-3.5 text-slate-500 shrink-0 transition-transform ${
            isOpen ? 'rotate-180 text-[#007AFF]' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div
          role="listbox"
          className="absolute left-0 right-0 top-[calc(100%+6px)] z-50 bg-white/96 backdrop-blur-2xl border border-slate-200/90 rounded-2xl shadow-xl p-1.5 space-y-1 min-w-[200px]"
        >
          {options.map((opt) => {
            const active = opt.value === value;
            return (
              <button
                key={opt.value}
                type="button"
                role="option"
                aria-selected={active}
                onClick={() => {
                  onChange(opt.value);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-3 py-2 rounded-xl text-xs transition-all flex items-center justify-between gap-2 ${
                  active
                    ? 'bg-blue-50/90 text-[#007AFF] font-bold'
                    : 'text-slate-700 hover:bg-[#F2F2F7]'
                }`}
              >
                <div className="min-w-0 flex-1">
                  <div className="font-mono font-semibold break-words leading-tight">
                    {opt.label}
                  </div>
                  {opt.sublabel && (
                    <div className="text-[10px] text-slate-500 break-words leading-tight mt-0.5">
                      {opt.sublabel}
                    </div>
                  )}
                </div>
                {active && (
                  <Check className="w-3.5 h-3.5 text-[#007AFF] shrink-0 stroke-[2.5px]" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
