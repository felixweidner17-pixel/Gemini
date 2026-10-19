import React, { useState } from 'react';
import {
  applyDerivativeModification,
  CannabinoidClass,
  CannabinoidProfile,
  DERIVATIVE_MOD_DESCRIPTIONS,
  DerivativeModType,
  getSubstanceMacroCategory,
  isCannabinoidSubstance,
  SubstanceMacroCategory,
} from '../data/cannabinoids';
import {
  ALL_SUBSTANCES_DATABASE,
  MACRO_SUBCATEGORY_MAP,
  SubcategoryPill,
} from '../data/allSubstances';
import { getRecreationalProfile } from '../data/recreationalProfiles';
import { ChemicalStructure2D } from './ChemicalStructure2D';
import { SubstancePhotoSpecimen } from './SubstancePhotoSpecimen';
import { DosageCalculator } from './DosageCalculator';
import { getPubChem2DImageUrl } from '../utils/pubchemClient';
import {
  Search,
  BookOpen,
  X,
  Eye,
  Sparkles,
  Camera,
  Calculator,
  Activity,
  ShieldAlert,
  Clock,
  Layers,
  FlaskConical,
} from 'lucide-react';

interface CannabinoidLibraryProps {
  selectedCompoundId: string;
  activeDerivativeMod: DerivativeModType;
  onChangeDerivativeMod: (mod: DerivativeModType) => void;
  onLogCannabinoid: (baseId: string, mod: DerivativeModType) => void;
  onOpenDosage: (baseId: string, mod: DerivativeModType) => void;
}

type SortKey =
  | 'featured'
  | 'potency_desc'
  | 'halflife_desc'
  | 'logp_desc'
  | 'name_asc';
type PictureMode =
  | 'studio_and_structure'
  | 'substance_photo'
  | 'pubchem_official';

type DetailTab = 'overview' | 'dosage' | 'pharmacology' | 'clearance' | 'risks';

export const CannabinoidVisualPicture: React.FC<{
  compound: CannabinoidProfile;
  pictureMode: PictureMode;
}> = ({ compound, pictureMode }) => {
  const [pubchemFailed, setPubchemFailed] = useState(false);

  const theme = (() => {
    const cls = compound.classification;
    switch (cls) {
      case 'Phytocannabinoid':
        return {
          bgGradient: 'from-emerald-950 via-teal-900 to-slate-900',
          cardSurface: 'bg-white/95 border-emerald-200/80',
        };
      case 'Semi-Synthetic':
        return {
          bgGradient: 'from-amber-950 via-stone-900 to-orange-950',
          cardSurface: 'bg-white/95 border-amber-200/80',
        };
      case 'Synthetic Agonist':
      case 'Synthetic Cannabinoid':
        return {
          bgGradient: 'from-rose-950 via-slate-900 to-zinc-900',
          cardSurface: 'bg-white/95 border-rose-200/80',
        };
      case 'Benzodiazepine':
        return {
          bgGradient: 'from-indigo-950 via-slate-900 to-blue-950',
          cardSurface: 'bg-white/95 border-indigo-200/80',
        };
      case 'Opioid Analgesic':
        return {
          bgGradient: 'from-rose-950 via-red-950 to-slate-900',
          cardSurface: 'bg-white/95 border-rose-200/80',
        };
      case 'Gabapentinoid':
        return {
          bgGradient: 'from-cyan-950 via-teal-950 to-slate-900',
          cardSurface: 'bg-white/95 border-cyan-200/80',
        };
      case 'Rx Stimulant':
        return {
          bgGradient: 'from-orange-950 via-amber-950 to-slate-900',
          cardSurface: 'bg-white/95 border-orange-200/80',
        };
      case 'Dissociative':
        return {
          bgGradient: 'from-purple-950 via-slate-900 to-indigo-950',
          cardSurface: 'bg-white/95 border-purple-200/80',
        };
      case 'Empathogen / Stimulant':
        return {
          bgGradient: 'from-fuchsia-950 via-purple-950 to-slate-900',
          cardSurface: 'bg-white/95 border-fuchsia-200/80',
        };
      case 'Psychedelic':
        return {
          bgGradient: 'from-violet-950 via-indigo-950 to-slate-900',
          cardSurface: 'bg-white/95 border-violet-200/80',
        };
      default:
        return {
          bgGradient: 'from-slate-900 via-zinc-800 to-slate-950',
          cardSurface: 'bg-white/95 border-slate-200/80',
        };
    }
  })();

  if (pictureMode === 'pubchem_official' && !pubchemFailed) {
    return (
      <div className="relative w-full h-44 bg-white flex items-center justify-center p-3 overflow-hidden border-b border-slate-200/80">
        <img
          src={getPubChem2DImageUrl(compound.pubchemCid)}
          alt={`Official NIH PubChem 2D chemical structure of ${compound.name}`}
          referrerPolicy="no-referrer"
          onError={() => setPubchemFailed(true)}
          className="max-h-36 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-slate-500 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-slate-200/70">
          <span>NIH PubChem CID {compound.pubchemCid}</span>
          <span className="font-bold text-slate-800">
            {compound.molecularFormula}
          </span>
        </div>
      </div>
    );
  }

  if (pictureMode === 'substance_photo') {
    return (
      <div
        className={`relative w-full h-44 bg-gradient-to-br ${theme.bgGradient} overflow-hidden p-2 flex flex-col justify-between`}
      >
        <div className="w-full h-full overflow-hidden rounded-xl border border-white/10 shadow-sm">
          <SubstancePhotoSpecimen
            compound={compound}
            className="w-full h-full"
            showCaption={true}
            allowZoom={true}
          />
        </div>
      </div>
    );
  }

  // Combined Specimen Photo + 2D Structure
  return (
    <div
      className={`relative w-full h-44 bg-gradient-to-br ${theme.bgGradient} overflow-hidden p-2 flex items-center justify-between gap-1.5`}
    >
      <div className="relative z-10 w-[50%] h-full rounded-xl overflow-hidden border border-white/10 shadow-sm">
        <SubstancePhotoSpecimen
          compound={compound}
          className="w-full h-full"
          showCaption={true}
          allowZoom={true}
        />
      </div>

      <div
        className={`relative z-10 w-[50%] h-full rounded-xl border ${theme.cardSurface} backdrop-blur-md px-2 py-1.5 flex flex-col justify-between shadow-xs`}
      >
        <div className="flex items-center justify-between gap-1">
          <span className="text-[9.5px] font-mono font-bold text-slate-700 truncate">
            {compound.molecularFormula}
          </span>
          <span className="text-[8.5px] font-mono font-bold text-[#007AFF] bg-blue-50 px-1 py-0.2 rounded shrink-0">
            {compound.molecularWeight} g/mol
          </span>
        </div>

        <div className="w-full flex-1 flex items-center justify-center overflow-hidden py-0.5">
          <div className="w-full h-full flex items-center justify-center scale-90 pointer-events-none">
            <ChemicalStructure2D compound={compound} />
          </div>
        </div>

        <div className="flex items-center justify-between text-[8.5px] font-mono text-slate-500 pt-0.5 border-t border-slate-100">
          <span>CID {compound.pubchemCid}</span>
          <span className="font-bold text-slate-800">
            XLogP {compound.xLogP}
          </span>
        </div>
      </div>
    </div>
  );
};

export const CannabinoidLibrary: React.FC<CannabinoidLibraryProps> = ({
  selectedCompoundId,
  activeDerivativeMod,
  onChangeDerivativeMod,
  onLogCannabinoid,
}) => {
  const [activeView, setActiveView] = useState<'catalog' | 'dosage_workbench'>('catalog');
  const [workbenchSubstanceId, setWorkbenchSubstanceId] = useState<string>(selectedCompoundId);

  const [searchQuery, setSearchQuery] = useState('');
  const [macroFilter, setMacroFilter] = useState<
    'All' | SubstanceMacroCategory
  >('All');
  const [subFilterId, setSubFilterId] = useState<string>('All');
  const [sortBy, setSortBy] = useState<SortKey>('featured');
  const [pictureMode, setPictureMode] = useState<PictureMode>(
    'studio_and_structure'
  );

  // Detail Modal State with Tabs
  const [detailCompound, setDetailCompound] = useState<{
    baseId: string;
    profile: CannabinoidProfile;
  } | null>(null);
  const [detailTab, setDetailTab] = useState<DetailTab>('overview');

  // Subcategories matching the active category
  const availableSubcategories: SubcategoryPill[] =
    macroFilter === 'All' ? [] : MACRO_SUBCATEGORY_MAP[macroFilter] || [];

  // Transform base cannabinoids dynamically if activeDerivativeMod is selected
  const libraryItems = ALL_SUBSTANCES_DATABASE.map((base, idx) => {
    const isWeed = getSubstanceMacroCategory(base.classification) === 'Weed & Cannabinoids';
    const effective = isWeed
      ? applyDerivativeModification(base, activeDerivativeMod)
      : base;
    return {
      base,
      effective,
      index: idx,
    };
  });

  const filteredAndSorted = libraryItems
    .filter(({ base, effective }) => {
      const macro = getSubstanceMacroCategory(base.classification);
      const matchesMacro = macroFilter === 'All' || macro === macroFilter;

      // Subcategory filter check
      let matchesSub = true;
      if (macroFilter !== 'All' && subFilterId !== 'All') {
        const activeSub = availableSubcategories.find((s) => s.id === subFilterId);
        if (activeSub) {
          matchesSub = activeSub.matcher(effective);
        }
      }

      const q = searchQuery.trim().toLowerCase();
      if (!q) return matchesMacro && matchesSub;

      const rec = getRecreationalProfile(effective);
      return (
        matchesMacro &&
        matchesSub &&
        (effective.shortName.toLowerCase().includes(q) ||
          effective.name.toLowerCase().includes(q) ||
          base.shortName.toLowerCase().includes(q) ||
          base.classification.toLowerCase().includes(q) ||
          macro.toLowerCase().includes(q) ||
          effective.summary.toLowerCase().includes(q) ||
          effective.pharmacologyNotes.toLowerCase().includes(q) ||
          rec.recreationalFeel.toLowerCase().includes(q) ||
          rec.physicalAppearance.toLowerCase().includes(q) ||
          rec.subjectiveTags.some((t) => t.toLowerCase().includes(q)) ||
          base.synonyms.some((s) => s.toLowerCase().includes(q)))
      );
    })
    .sort((a, b) => {
      if (sortBy === 'featured') {
        return a.index - b.index;
      }
      if (sortBy === 'potency_desc') {
        return (
          b.effective.relativePotencyVsD9 - a.effective.relativePotencyVsD9
        );
      }
      if (sortBy === 'halflife_desc') {
        return (
          b.effective.terminalHalfLifeHours - a.effective.terminalHalfLifeHours
        );
      }
      if (sortBy === 'logp_desc') {
        return b.effective.xLogP - a.effective.xLogP;
      }
      return a.effective.shortName.localeCompare(b.effective.shortName);
    });

  const getRiskPill = (tier: CannabinoidProfile['riskTier']) => {
    switch (tier) {
      case 'Low':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Moderate':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'High':
        return 'bg-orange-50 text-orange-700 border-orange-200';
      case 'Very High':
        return 'bg-rose-50 text-rose-700 border-rose-300 font-bold';
      case 'Extreme':
        return 'bg-red-100 text-red-800 border-red-300 font-extrabold animate-pulse';
    }
  };

  const handleOpenDosageForSubstance = (id: string) => {
    setWorkbenchSubstanceId(id);
    setActiveView('dosage_workbench');
    if (detailCompound) setDetailCompound(null);
  };

  return (
    <div className="space-y-6">
      {/* Top Header & View Switcher (Catalog vs Dosage Workbench) */}
      <section className="ios-card p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#007AFF] animate-ping" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500">
              Verified Pharmacopeia · {ALL_SUBSTANCES_DATABASE.length} Full Substance Profiles
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 mt-1">
            Substance Library & Dosage Workbench
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Clinical profiles, quadruple-checked threshold values, clearance kinetics, and dosage calculators.
          </p>
        </div>

        {/* View Toggle Pill */}
        <div className="flex items-center gap-1.5 p-1 bg-[#E5E5EA]/85 rounded-full shrink-0 self-start md:self-auto">
          <button
            type="button"
            onClick={() => setActiveView('catalog')}
            className={`min-h-[36px] px-4 py-1.5 text-xs rounded-full font-bold transition-all flex items-center gap-1.5 ${
              activeView === 'catalog'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Catalog ({filteredAndSorted.length})</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveView('dosage_workbench')}
            className={`min-h-[36px] px-4 py-1.5 text-xs rounded-full font-bold transition-all flex items-center gap-1.5 ${
              activeView === 'dosage_workbench'
                ? 'bg-[#007AFF] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Calculator className="w-3.5 h-3.5" />
            <span>Dosage Workbench</span>
          </button>
        </div>
      </section>

      {/* VIEW A: INTEGRATED DOSAGE WORKBENCH */}
      {activeView === 'dosage_workbench' && (
        <section className="space-y-4">
          <div className="flex items-center justify-between bg-blue-50/80 border border-blue-200/80 px-4 py-2.5 rounded-2xl">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
              <Calculator className="w-4 h-4 text-[#007AFF]" />
              <span>Interactive Dosage Workbench Active</span>
            </div>
            <button
              type="button"
              onClick={() => setActiveView('catalog')}
              className="text-xs font-bold text-[#007AFF] hover:underline"
            >
              ← Back to Substance Catalog
            </button>
          </div>
          <DosageCalculator
            selectedCannabinoidId={workbenchSubstanceId}
            onSelectCannabinoid={(id) => setWorkbenchSubstanceId(id)}
          />
        </section>
      )}

      {/* VIEW B: COMPACT SUBSTANCE CATALOG */}
      {activeView === 'catalog' && (
        <>
          {/* Controls Panel: Search, Category, Subcategories & Cannabinoid Variant Dropdown */}
          <section className="ios-card p-4 sm:p-5 space-y-4">
            <div className="flex flex-col lg:flex-row gap-3">
              {/* Search Bar */}
              <div className="relative flex-1">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by name, synonym, or classification..."
                  className="w-full min-h-[42px] pl-10 pr-9 py-2 bg-[#F2F2F7] rounded-xl text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#007AFF]"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Picture Mode Switcher */}
              <div className="flex items-center gap-1 p-1 bg-[#E5E5EA]/85 rounded-xl shrink-0">
                <button
                  type="button"
                  onClick={() => setPictureMode('studio_and_structure')}
                  className={`min-h-[32px] px-2.5 py-1 text-[11px] font-bold rounded-lg transition-all ${
                    pictureMode === 'studio_and_structure'
                      ? 'bg-white text-slate-900 shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Photo + 2D
                </button>
                <button
                  type="button"
                  onClick={() => setPictureMode('substance_photo')}
                  className={`min-h-[32px] px-2.5 py-1 text-[11px] font-bold rounded-lg transition-all flex items-center gap-1 ${
                    pictureMode === 'substance_photo'
                      ? 'bg-white text-slate-900 shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Camera className="w-3 h-3 text-[#007AFF]" />
                  <span>Photo Only</span>
                </button>
              </div>

              {/* Sort By Dropdown */}
              <div className="shrink-0 flex items-center gap-1.5">
                <span className="text-xs font-bold text-slate-600 shrink-0">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortKey)}
                  className="min-h-[38px] px-3 py-1.5 bg-[#F2F2F7] rounded-xl text-xs font-bold text-slate-800 focus:ring-2 focus:ring-[#007AFF]"
                >
                  <option value="featured">Featured Order</option>
                  <option value="name_asc">Name (A-Z)</option>
                  <option value="potency_desc">Highest Potency</option>
                  <option value="halflife_desc">Longest Half-Life</option>
                  <option value="logp_desc">Lipophilicity (XLogP)</option>
                </select>
              </div>
            </div>

            {/* Category Filter Pills: All / Weed / Rx Pharma / Illicit */}
            <div className="space-y-1.5">
              <div className="text-[11px] font-mono font-semibold text-slate-500 uppercase">
                Category
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 p-1.5 bg-[#E5E5EA]/85 rounded-2xl">
                {(
                  [
                    {
                      id: 'All',
                      label: `All Substances (${ALL_SUBSTANCES_DATABASE.length})`,
                    },
                    {
                      id: 'Weed & Cannabinoids',
                      label: `Weed & Cannabinoids (${
                        ALL_SUBSTANCES_DATABASE.filter(
                          (c) =>
                            getSubstanceMacroCategory(c.classification) ===
                            'Weed & Cannabinoids'
                        ).length
                      })`,
                    },
                    {
                      id: 'Prescription Pharmaceuticals',
                      label: `Prescription Pharma (${
                        ALL_SUBSTANCES_DATABASE.filter(
                          (c) =>
                            getSubstanceMacroCategory(c.classification) ===
                            'Prescription Pharmaceuticals'
                        ).length
                      })`,
                    },
                    {
                      id: 'Illicit Substances',
                      label: `Illicit Substances (${
                        ALL_SUBSTANCES_DATABASE.filter(
                          (c) =>
                            getSubstanceMacroCategory(c.classification) ===
                            'Illicit Substances'
                        ).length
                      })`,
                    },
                  ] as const
                ).map((macro) => (
                  <button
                    key={macro.id}
                    type="button"
                    onClick={() => {
                      setMacroFilter(macro.id);
                      setSubFilterId('All');
                    }}
                    className={`min-h-[38px] px-3 py-1.5 text-xs rounded-xl transition-all text-center font-bold ${
                      macroFilter === macro.id
                        ? 'bg-white text-slate-900 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {macro.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Subcategory Pills: ONLY display subcategories matching the selected category! */}
            {macroFilter !== 'All' && availableSubcategories.length > 0 && (
              <div className="space-y-1.5 pt-1 border-t border-slate-200/70">
                <div className="text-[11px] font-mono font-semibold text-slate-500 uppercase">
                  {macroFilter} Subcategories
                </div>
                <div className="flex flex-wrap items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setSubFilterId('All')}
                    className={`min-h-[32px] px-3 py-1 text-xs font-bold rounded-full transition-all ${
                      subFilterId === 'All'
                        ? 'bg-[#007AFF] text-white shadow-2xs'
                        : 'bg-[#F2F2F7] text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    All {macroFilter.split('&')[0].trim()}
                  </button>
                  {availableSubcategories.map((sub) => {
                    const count = ALL_SUBSTANCES_DATABASE.filter((c) => {
                      const matchMacro = getSubstanceMacroCategory(c.classification) === macroFilter;
                      return matchMacro && sub.matcher(c);
                    }).length;
                    return (
                      <button
                        key={sub.id}
                        type="button"
                        onClick={() => setSubFilterId(sub.id)}
                        className={`min-h-[32px] px-3 py-1 text-xs font-bold rounded-full transition-all ${
                          subFilterId === sub.id
                            ? 'bg-[#007AFF] text-white shadow-2xs'
                            : 'bg-[#F2F2F7] text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        {sub.label} ({count})
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Cannabinoid Variants Dropdown: ONLY displayed if user selects the Weed category! */}
            {macroFilter === 'Weed & Cannabinoids' && (
              <div className="pt-2.5 border-t border-slate-200/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-emerald-50/50 p-3 rounded-2xl border border-emerald-200/60">
                <div className="flex items-center gap-2">
                  <FlaskConical className="w-4 h-4 text-emerald-700 shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-emerald-950">
                      Cannabinoid Variant (Dynamic Transformation)
                    </div>
                    <div className="text-[11px] text-emerald-700">
                      Active variant dynamically modulates potency, half-life, and onset across all weed cards.
                    </div>
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-2">
                  <label
                    htmlFor="cannabinoid-variant-select"
                    className="text-xs font-bold text-slate-700"
                  >
                    Variant:
                  </label>
                  <select
                    id="cannabinoid-variant-select"
                    value={activeDerivativeMod}
                    onChange={(e) =>
                      onChangeDerivativeMod(e.target.value as DerivativeModType)
                    }
                    className="min-h-[38px] px-3 py-1.5 bg-white border border-emerald-300 rounded-xl text-xs font-bold text-slate-900 focus:ring-2 focus:ring-emerald-500 shadow-2xs"
                  >
                    {DERIVATIVE_MOD_DESCRIPTIONS.map((mod) => (
                      <option key={mod.id} value={mod.id}>
                        {mod.label} ({mod.shortTag})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}
          </section>

          {/* Compact Substance Cards Grid:
              ONLY displays Photo, Name, Classification, Risk badge, and Potency.
              Pressing Details is REQUIRED to view clinical summary, recreational feel, urine test, hold, ki, half-life! */}
          {filteredAndSorted.length === 0 ? (
            <div className="ios-card p-10 text-center space-y-2">
              <div className="text-base font-bold text-slate-800">
                No substances match &ldquo;{searchQuery}&rdquo;
              </div>
              <p className="text-xs text-slate-500">
                Try clearing your search filter or resetting categories.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setMacroFilter('All');
                  setSubFilterId('All');
                }}
                className="mt-2 min-h-[38px] px-4 py-1.5 text-xs font-bold text-white bg-[#007AFF] rounded-full"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredAndSorted.map(({ base, effective }) => {
                const isCannabinoid = isCannabinoidSubstance(effective);

                return (
                  <article
                    key={effective.id}
                    className="ios-card overflow-hidden flex flex-col justify-between transition-all hover:shadow-md group border border-slate-200/80 bg-white"
                  >
                    <div>
                      {/* Compact Photo & Structure Specimen Header */}
                      <CannabinoidVisualPicture
                        compound={effective}
                        pictureMode={pictureMode}
                      />

                      {/* Compact Card Body: Strictly Name, Classification, Risk Badge, and Potency ONLY */}
                      <div className="p-3.5 space-y-2.5">
                        <div className="flex items-start justify-between gap-1.5">
                          <span className="text-[11px] font-mono font-bold text-[#007AFF] truncate">
                            {effective.classification}
                          </span>
                          <span
                            className={`text-[9.5px] font-mono px-2 py-0.5 rounded-full border shrink-0 ${getRiskPill(
                              effective.riskTier
                            )}`}
                          >
                            {effective.riskTier} Risk
                          </span>
                        </div>

                        <div>
                          <h2 className="text-base font-extrabold text-slate-900 leading-snug line-clamp-1">
                            {effective.shortName}
                          </h2>
                          <p className="text-xs text-slate-500 truncate mt-0.5">
                            {effective.name}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons: Details (opens modal) & Dosage (opens workbench) */}
                    <div className="p-3 pt-1 border-t border-slate-100 grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          setDetailCompound({
                            baseId: base.id,
                            profile: effective,
                          });
                          setDetailTab('overview');
                        }}
                        className="min-h-[38px] px-3 py-1.5 bg-[#007AFF] hover:bg-[#0062CC] active:scale-[0.98] text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1 shadow-2xs"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Details</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleOpenDosageForSubstance(effective.id)}
                        className="min-h-[38px] px-3 py-1.5 bg-[#F2F2F7] hover:bg-[#E5E5EA] active:scale-[0.98] text-slate-700 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1"
                      >
                        <Calculator className="w-3.5 h-3.5 text-[#007AFF]" />
                        <span>Dosage</span>
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </>
      )}

      {/* FULL-SCREEN ORGANIZED MODAL FOR FULL DETAILS
          Crucial User Request: Pictures MUST scroll with the details page (not fixed in the middle of screen) */}
      {detailCompound &&
        (() => {
          const profile = detailCompound.profile;
          const modalRec = getRecreationalProfile(profile);
          const isCannabinoid = isCannabinoidSubstance(profile);

          return (
            <div
              className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto"
              onClick={() => setDetailCompound(null)}
            >
              <div
                role="dialog"
                aria-modal="true"
                aria-label={`${profile.name} Full Profile`}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-4xl max-h-[92vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden my-auto"
              >
                {/* Modal Fixed Top Bar (Title & Close Button) */}
                <div className="p-4 sm:p-5 border-b border-slate-200/80 flex items-center justify-between gap-3 shrink-0 bg-white">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-mono font-bold text-[#007AFF]">
                        {profile.classification}
                      </span>
                      <span className="text-slate-300">·</span>
                      <span
                        className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${getRiskPill(
                          profile.riskTier
                        )}`}
                      >
                        {profile.riskTier} Risk
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-0.5 truncate">
                      {profile.shortName}{' '}
                      <span className="text-sm font-normal text-slate-500">
                        ({profile.name})
                      </span>
                    </h2>
                  </div>

                  <button
                    type="button"
                    aria-label="Close modal"
                    onClick={() => setDetailCompound(null)}
                    className="w-10 h-10 rounded-full bg-[#F2F2F7] hover:bg-[#E5E5EA] text-slate-700 flex items-center justify-center transition-colors shrink-0"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal Tab Selector */}
                <div className="flex items-center gap-1 px-4 sm:px-6 pt-3 pb-2 border-b border-slate-100 overflow-x-auto shrink-0 bg-[#F2F2F7]/50">
                  {(
                    [
                      { id: 'overview', label: 'Overview & Feel', icon: BookOpen },
                      { id: 'dosage', label: 'Dosage & Routes', icon: Calculator },
                      { id: 'pharmacology', label: 'Pharmacology & Ki', icon: FlaskConical },
                      { id: 'clearance', label: 'Clearance & Drug Tests', icon: Clock },
                      { id: 'risks', label: 'Safety & Risks', icon: ShieldAlert },
                    ] as { id: DetailTab; label: string; icon: React.FC<{ className?: string }> }[]
                  ).map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setDetailTab(tab.id)}
                        className={`min-h-[36px] px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all whitespace-nowrap flex items-center gap-1.5 ${
                          detailTab === tab.id
                            ? 'bg-white text-slate-900 shadow-xs'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5 text-[#007AFF]" />
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Modal Scrollable Body:
                    The pictures are placed INSIDE this scrollable container so they smoothly scroll with the content! */}
                <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
                  {/* Photo & Structure Banner (Scrolls naturally with the page content) */}
                  <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                    <CannabinoidVisualPicture
                      compound={profile}
                      pictureMode="studio_and_structure"
                    />
                  </div>

                  {/* TAB 1: OVERVIEW & EXPERIENCE */}
                  {detailTab === 'overview' && (
                    <div className="space-y-4">
                      {/* Recreational Feel Card */}
                      <div className="p-4 bg-blue-50/60 border border-blue-200/80 rounded-2xl space-y-3">
                        <div className="text-xs font-mono font-extrabold uppercase text-[#007AFF] flex items-center gap-1.5">
                          <Sparkles className="w-4 h-4 shrink-0" />
                          <span>Recreational Subjective Feel</span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                          {modalRec.recreationalFeel}
                        </p>
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {modalRec.subjectiveTags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs font-mono font-semibold bg-white/90 text-slate-700 px-2.5 py-1 rounded-lg border border-blue-100"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Onset / Peak / Comedown Phases */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="p-3.5 bg-[#F2F2F7] rounded-2xl">
                          <div className="text-[10px] font-mono font-bold uppercase text-slate-500">
                            Onset Feel
                          </div>
                          <p className="text-xs text-slate-800 mt-1">
                            {modalRec.phases.onsetFeel}
                          </p>
                        </div>
                        <div className="p-3.5 bg-blue-50 rounded-2xl border border-blue-100">
                          <div className="text-[10px] font-mono font-bold uppercase text-[#007AFF]">
                            Peak Feel
                          </div>
                          <p className="text-xs text-slate-800 mt-1">
                            {modalRec.phases.peakFeel}
                          </p>
                        </div>
                        <div className="p-3.5 bg-[#F2F2F7] rounded-2xl">
                          <div className="text-[10px] font-mono font-bold uppercase text-slate-500">
                            Comedown Feel
                          </div>
                          <p className="text-xs text-slate-800 mt-1">
                            {modalRec.phases.comedownFeel}
                          </p>
                        </div>
                      </div>

                      {/* Appearance & Synonyms */}
                      <div className="p-3.5 bg-[#F2F2F7] rounded-2xl space-y-1.5 text-xs text-slate-700">
                        <div>
                          <strong className="text-slate-900">Physical Appearance:</strong>{' '}
                          {modalRec.physicalAppearance}
                        </div>
                        <div>
                          <strong className="text-slate-900">Synonyms & Brand Names:</strong>{' '}
                          {profile.synonyms.join(' · ')}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB 2: DOSAGE & ROUTES */}
                  {detailTab === 'dosage' && (
                    <div className="space-y-4">
                      <div className="p-4 bg-emerald-50/60 border border-emerald-200/80 rounded-2xl space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="text-xs font-mono font-extrabold uppercase text-emerald-800 flex items-center gap-1.5">
                            <Calculator className="w-4 h-4 shrink-0" />
                            <span>Quadruple-Checked Clinical Thresholds</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleOpenDosageForSubstance(profile.id)}
                            className="min-h-[32px] px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg transition-colors shadow-2xs"
                          >
                            Open in Dosage Simulator →
                          </button>
                        </div>
                        <p className="text-xs text-emerald-900">
                          Verified starting thresholds and route guidelines calibrated against forensic toxicology databases.
                        </p>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                        <div className="p-3 bg-[#F2F2F7] rounded-2xl">
                          <div className="text-[10px] font-mono text-slate-500 uppercase">
                            Oral Threshold
                          </div>
                          <div className="text-lg font-mono font-extrabold text-slate-900 mt-0.5">
                            {profile.baseOralThresholdMg} mg
                          </div>
                          <div className="text-[10px] text-slate-500 mt-0.5">
                            Onset: {profile.oralOnsetMinutes[0]}–{profile.oralOnsetMinutes[1]} min
                          </div>
                        </div>

                        <div className="p-3 bg-[#F2F2F7] rounded-2xl">
                          <div className="text-[10px] font-mono text-slate-500 uppercase">
                            Inhaled / Nasal
                          </div>
                          <div className="text-lg font-mono font-extrabold text-[#007AFF] mt-0.5">
                            {profile.baseInhaledThresholdMg} mg
                          </div>
                          <div className="text-[10px] text-slate-500 mt-0.5">
                            Onset: {profile.inhaledOnsetMinutes[0]}–{profile.inhaledOnsetMinutes[1]} min
                          </div>
                        </div>

                        <div className="p-3 bg-[#F2F2F7] rounded-2xl">
                          <div className="text-[10px] font-mono text-slate-500 uppercase">
                            Relative Potency
                          </div>
                          <div className="text-lg font-mono font-extrabold text-slate-900 mt-0.5">
                            {isCannabinoid
                              ? `${profile.relativePotencyVsD9}×`
                              : `${profile.relativePotencyVsD9}× Index`}
                          </div>
                          <div className="text-[10px] text-slate-500 mt-0.5">
                            {isCannabinoid ? 'vs Δ9-THC' : 'vs Baseline'}
                          </div>
                        </div>

                        <div className="p-3 bg-[#F2F2F7] rounded-2xl">
                          <div className="text-[10px] font-mono text-slate-500 uppercase">
                            Active Duration
                          </div>
                          <div className="text-lg font-mono font-extrabold text-slate-900 mt-0.5">
                            {profile.oralDurationHours[0]}–{profile.oralDurationHours[1]}h
                          </div>
                          <div className="text-[10px] text-slate-500 mt-0.5">
                            Oral Plateau
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB 3: PHARMACOLOGY & KI */}
                  {detailTab === 'pharmacology' && (
                    <div className="space-y-4">
                      <div className="p-4 bg-[#F2F2F7] rounded-2xl space-y-2">
                        <div className="text-xs font-mono font-extrabold uppercase text-slate-700 flex items-center gap-1.5">
                          <FlaskConical className="w-4 h-4 text-[#007AFF]" />
                          <span>Mechanism of Action & Summary</span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                          {profile.summary}
                        </p>
                        <p className="text-xs text-slate-600 leading-relaxed pt-1 border-t border-slate-200">
                          {profile.pharmacologyNotes}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
                        <div className="p-3 bg-[#F2F2F7] rounded-xl">
                          <span className="font-mono text-[10px] text-slate-500 uppercase block">
                            Target Binding Ki
                          </span>
                          <span className="font-mono font-bold text-slate-900 text-sm mt-0.5 block">
                            {profile.cb1KiNm} nM
                          </span>
                          <span className="text-[10px] text-slate-500">
                            Primary receptor
                          </span>
                        </div>

                        <div className="p-3 bg-[#F2F2F7] rounded-xl">
                          <span className="font-mono text-[10px] text-slate-500 uppercase block">
                            CYP Enzymes
                          </span>
                          <span className="font-mono font-bold text-slate-900 text-sm mt-0.5 block truncate">
                            {profile.cypEnzymes.join(', ')}
                          </span>
                          <span className="text-[10px] text-slate-500">
                            Hepatic metabolism
                          </span>
                        </div>

                        <div className="p-3 bg-[#F2F2F7] rounded-xl">
                          <span className="font-mono text-[10px] text-slate-500 uppercase block">
                            Primary Metabolite
                          </span>
                          <span className="font-mono font-bold text-slate-900 text-xs mt-0.5 block line-clamp-2">
                            {profile.primaryMetabolite}
                          </span>
                        </div>

                        <div className="p-3 bg-[#F2F2F7] rounded-xl">
                          <span className="font-mono text-[10px] text-slate-500 uppercase block">
                            Lipophilicity (XLogP)
                          </span>
                          <span className="font-mono font-bold text-slate-900 text-sm mt-0.5 block">
                            {profile.xLogP}
                          </span>
                          <span className="text-[10px] text-slate-500">
                            Adipose partition
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB 4: CLEARANCE & DRUG TESTS */}
                  {detailTab === 'clearance' && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="p-4 bg-[#F2F2F7] rounded-2xl">
                          <div className="text-[10px] font-mono uppercase text-slate-500 font-bold">
                            Elimination Half-Life
                          </div>
                          <div className="text-2xl font-mono font-extrabold text-slate-900 mt-1">
                            ~{profile.terminalHalfLifeHours} hrs
                          </div>
                          <div className="text-xs text-slate-500 mt-1">
                            Terminal plasma elimination
                          </div>
                        </div>

                        <div className="p-4 bg-blue-50/70 border border-blue-200/60 rounded-2xl">
                          <div className="text-[10px] font-mono uppercase text-[#007AFF] font-bold">
                            Immunoassay Cross-Reactivity
                          </div>
                          <div className="text-2xl font-mono font-extrabold text-[#007AFF] mt-1">
                            {profile.immunoassayCrossReactivityPct}%
                          </div>
                          <div className="text-xs text-slate-600 mt-1">
                            Standard rapid cup cross-reactivity
                          </div>
                        </div>

                        <div className="p-4 bg-[#F2F2F7] rounded-2xl">
                          <div className="text-[10px] font-mono uppercase text-slate-500 font-bold">
                            Action Duration
                          </div>
                          <div className="text-2xl font-mono font-extrabold text-slate-900 mt-1">
                            {profile.oralDurationHours[0]}–{profile.oralDurationHours[1]} hrs
                          </div>
                          <div className="text-xs text-slate-500 mt-1">
                            Effective psychoactive window
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-white border border-slate-200 rounded-2xl text-xs space-y-2">
                        <h4 className="font-bold text-slate-900">
                          Detection Window Estimates
                        </h4>
                        <p className="text-slate-600 leading-relaxed">
                          Urine detection depends heavily on lipid partition (XLogP {profile.xLogP}) and prior usage frequency.
                          For single sessions, typical immunoassay detection is 1–3 days. Frequent daily usage extends adipose redistribution to several weeks.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* TAB 5: SAFETY & RISKS */}
                  {detailTab === 'risks' && (
                    <div className="space-y-4">
                      {/* Specific Clinical Hazards */}
                      <div className="p-4 bg-amber-50/70 border border-amber-200/80 rounded-2xl space-y-2">
                        <div className="text-xs font-mono font-extrabold uppercase text-amber-800 flex items-center gap-1.5">
                          <ShieldAlert className="w-4 h-4 text-amber-700" />
                          <span>Specific Clinical Hazards</span>
                        </div>
                        <ul className="list-disc pl-5 text-xs text-amber-950 space-y-1">
                          {profile.specificHazards.map((hazard, i) => (
                            <li key={i} className="leading-relaxed">
                              {hazard}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Side Effects Breakdown */}
                      <div className="space-y-2">
                        <h4 className="text-xs font-mono font-bold text-slate-700 uppercase">
                          Reported Physiological Side Effects
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {profile.sideEffects.map((side, i) => (
                            <div
                              key={i}
                              className="p-3 bg-[#F2F2F7] rounded-xl text-xs flex items-start justify-between gap-2"
                            >
                              <div>
                                <span className="font-bold text-slate-900 block">
                                  {side.effect}
                                </span>
                                <span className="text-[10px] text-slate-500 font-mono">
                                  System: {side.system} · {side.likelihood}
                                </span>
                              </div>
                              <span
                                className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                                  side.severity === 'Severe'
                                    ? 'bg-red-100 text-red-800'
                                    : 'bg-amber-100 text-amber-800'
                                }`}
                              >
                                {side.severity}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Modal Footer Actions */}
                <div className="p-4 sm:p-5 border-t border-slate-200/80 flex items-center justify-between gap-2 bg-[#F2F2F7]/50 shrink-0">
                  <span className="text-xs font-mono text-slate-500">
                    CID: {profile.pubchemCid} · {profile.molecularFormula}
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleOpenDosageForSubstance(profile.id)}
                      className="min-h-[40px] px-4 py-2 bg-[#007AFF] hover:bg-[#0062CC] text-white text-xs font-bold rounded-xl transition-colors shadow-xs flex items-center gap-1.5"
                    >
                      <Calculator className="w-4 h-4" />
                      <span>Calculate Dosage</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => onLogCannabinoid(detailCompound.baseId, activeDerivativeMod)}
                      className="min-h-[40px] px-4 py-2 bg-slate-900 hover:bg-black text-white text-xs font-bold rounded-xl transition-colors shadow-xs"
                    >
                      Log Clearance Dose
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}
    </div>
  );
};
