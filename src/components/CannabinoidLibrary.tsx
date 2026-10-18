import React, { useState } from 'react';
import {
  applyDerivativeModification,
  CANNABINOID_DATABASE,
  CannabinoidClass,
  CannabinoidProfile,
  DERIVATIVE_MOD_DESCRIPTIONS,
  DerivativeModType,
  getSubstanceMacroCategory,
  isCannabinoidSubstance,
  MACRO_CATEGORY_GROUPS,
  SubstanceMacroCategory,
} from '../data/cannabinoids';
import { getRecreationalProfile } from '../data/recreationalProfiles';
import { ChemicalStructure2D } from './ChemicalStructure2D';
import { SubstancePhotoSpecimen } from './SubstancePhotoSpecimen';
import { CustomOptionSelect } from './CannabinoidSelect';
import { getPubChem2DImageUrl } from '../utils/pubchemClient';
import {
  Search,
  Sliders,
  PlusCircle,
  BookOpen,
  AlertTriangle,
  X,
  Eye,
  Sparkles,
  Camera,
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

/* Recognizable High-Contrast Studio Picture of Each Substance + 2D Structure */
const CannabinoidVisualPicture: React.FC<{
  compound: CannabinoidProfile;
  pictureMode: PictureMode;
}> = ({ compound, pictureMode }) => {
  const [pubchemFailed, setPubchemFailed] = useState(false);

  const cls = compound.classification;
  const recProfile = getRecreationalProfile(compound);

  // Palette and physical specimen backdrop per substance class
  const theme = (() => {
    switch (cls) {
      case 'Phytocannabinoid':
        return {
          bgGradient: 'from-emerald-950 via-teal-900 to-emerald-800',
          cardSurface: 'bg-white/95 border-emerald-200/70',
        };
      case '9H- Enriched Series':
        return {
          bgGradient: 'from-slate-950 via-blue-950 to-indigo-900',
          cardSurface: 'bg-white/95 border-blue-200/80',
        };
      case '9-OH / 10-OH / 11-OH Series':
        return {
          bgGradient: 'from-teal-950 via-cyan-900 to-slate-900',
          cardSurface: 'bg-white/95 border-teal-200/80',
        };
      case 'Semi-Synthetic':
        return {
          bgGradient: 'from-amber-950 via-stone-900 to-orange-950',
          cardSurface: 'bg-white/95 border-amber-200/80',
        };
      case 'Synthetic Agonist':
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
    }
  })();

  if (pictureMode === 'pubchem_official' && !pubchemFailed) {
    return (
      <div className="relative w-full h-52 bg-white flex items-center justify-center p-3 overflow-hidden border-b border-slate-200/80">
        <img
          src={getPubChem2DImageUrl(compound.pubchemCid)}
          alt={`Official NIH PubChem 2D chemical structure of ${compound.name}`}
          referrerPolicy="no-referrer"
          onError={() => setPubchemFailed(true)}
          className="max-h-40 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
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
        className={`relative w-full h-60 bg-gradient-to-br ${theme.bgGradient} overflow-hidden p-2.5 flex flex-col justify-between`}
      >
        <div className="w-full h-full overflow-hidden rounded-2xl border border-white/10 shadow-lg">
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

  return (
    <div
      className={`relative w-full h-52 bg-gradient-to-br ${theme.bgGradient} overflow-hidden p-2.5 sm:p-3 flex items-center justify-between gap-2`}
    >
      {/* Left: Real High-Resolution Medication Picture */}
      <div className="relative z-10 w-[49%] h-full rounded-2xl overflow-hidden border border-white/10 shadow-md">
        <SubstancePhotoSpecimen
          compound={compound}
          className="w-full h-full"
          showCaption={true}
          allowZoom={true}
        />
      </div>

      {/* Right: Interactive 2D Skeletal Chemical Structure Card */}
      <div
        className={`relative z-10 w-[51%] h-full rounded-2xl border ${theme.cardSurface} backdrop-blur-md px-2.5 py-2 flex flex-col justify-between shadow-lg`}
      >
        <div className="flex items-center justify-between gap-1.5">
          <span className="text-[10px] font-mono font-bold text-slate-700 break-words leading-tight">
            {compound.molecularFormula} · {compound.molecularWeight} g/mol
          </span>
          <span className="text-[9px] font-mono font-bold text-[#007AFF] bg-blue-50 px-1.5 py-0.5 rounded whitespace-nowrap shrink-0">
            2D SAR
          </span>
        </div>

        <div className="flex-1 flex items-center justify-center overflow-hidden">
          <div className="w-full h-28 flex items-center justify-center">
            <ChemicalStructure2D compound={compound} />
          </div>
        </div>

        <div className="flex items-center justify-between gap-2 text-[9.5px] font-mono text-slate-500 border-t border-slate-100 pt-1">
          <span className="break-words leading-tight">
            {compound.alkylChainLength}
          </span>
          <span className="font-bold text-slate-800 whitespace-nowrap shrink-0">
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
  onOpenDosage,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [macroFilter, setMacroFilter] = useState<
    'All' | SubstanceMacroCategory
  >('All');
  const [categoryFilter, setCategoryFilter] = useState<
    'All' | CannabinoidClass
  >('All');
  const [sortBy, setSortBy] = useState<SortKey>('featured');
  const [pictureMode, setPictureMode] = useState<PictureMode>(
    'studio_and_structure'
  );
  const [detailCompound, setDetailCompound] = useState<{
    baseId: string;
    profile: CannabinoidProfile;
  } | null>(null);

  // Apply active derivative modifier (Native, 9H-, 9-OH-, 10-OH-, etc.) across cannabinoid library items
  const libraryItems = CANNABINOID_DATABASE.map((base, idx) => ({
    base,
    effective: applyDerivativeModification(base, activeDerivativeMod),
    index: idx,
  }));

  const filteredAndSorted = libraryItems
    .filter(({ base, effective }) => {
      const macro = getSubstanceMacroCategory(base.classification);
      const matchesMacro = macroFilter === 'All' || macro === macroFilter;
      const matchesCat =
        categoryFilter === 'All' || base.classification === categoryFilter;
      const q = searchQuery.trim().toLowerCase();
      if (!q) return matchesMacro && matchesCat;
      const rec = getRecreationalProfile(effective);
      return (
        matchesMacro &&
        matchesCat &&
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

  const activeMacroGroup =
    macroFilter === 'All'
      ? null
      : MACRO_CATEGORY_GROUPS.find((g) => g.id === macroFilter) || null;

  const visibleSubcategories = activeMacroGroup
    ? activeMacroGroup.subcategories
    : MACRO_CATEGORY_GROUPS.flatMap((g) => g.subcategories);

  const getRiskPill = (tier: CannabinoidProfile['riskTier']) => {
    switch (tier) {
      case 'Low':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Moderate':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'High':
        return 'bg-orange-50 text-orange-700 border-orange-200';
      case 'Extreme':
        return 'bg-rose-50 text-rose-700 border-rose-200 font-bold';
    }
  };

  return (
    <div className="space-y-4 sm:space-y-5">
      {/* iOS 27 Library Hero & Filter Control Card */}
      <section className="ios-card p-4 sm:p-6 space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 border-b border-slate-200/70 pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#007AFF] font-semibold">
              <BookOpen className="w-3.5 h-3.5 shrink-0" />
              <span>
                Encyclopedia · {CANNABINOID_DATABASE.length} Substances
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mt-0.5">
              Substance Library
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Recognizable substance visuals, recreational feel & subjective effects, and clinical pharmacology.
            </p>
          </div>

          {/* Picture Mode Segmented Toggle */}
          <div className="flex flex-wrap items-center gap-1 p-1 bg-[#E5E5EA]/85 rounded-2xl self-start lg:self-auto shrink-0">
            <button
              type="button"
              onClick={() => setPictureMode('studio_and_structure')}
              className={`min-h-[36px] px-3 py-1.5 text-xs rounded-xl transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                pictureMode === 'studio_and_structure'
                  ? 'bg-white text-slate-900 font-bold shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900 font-medium'
              }`}
            >
              <Camera className="w-3.5 h-3.5 text-emerald-600" />
              <span>Real Photo + SAR</span>
            </button>
            <button
              type="button"
              onClick={() => setPictureMode('substance_photo')}
              className={`min-h-[36px] px-3 py-1.5 text-xs rounded-xl transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                pictureMode === 'substance_photo'
                  ? 'bg-white text-slate-900 font-bold shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900 font-medium'
              }`}
            >
              <Eye className="w-3.5 h-3.5 text-[#007AFF]" />
              <span>Real Photo Focus</span>
            </button>
            <button
              type="button"
              onClick={() => setPictureMode('pubchem_official')}
              className={`min-h-[36px] px-3 py-1.5 text-xs rounded-xl transition-all whitespace-nowrap shrink-0 ${
                pictureMode === 'pubchem_official'
                  ? 'bg-white text-slate-900 font-bold shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900 font-medium'
              }`}
            >
              PubChem 2D
            </button>
          </div>
        </div>

        {/* Search + Custom Sort Dropdown Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
          <div className="md:col-span-8 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              aria-label="Search substances in library"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search weed, xanax, rivotril, midazolam, dihydrocodeine, oxycodone, ketamine, MDMA..."
              className="w-full min-h-[44px] pl-10 pr-9 py-2 text-xs sm:text-sm bg-[#F2F2F7] border border-slate-200/90 rounded-2xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:bg-white transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                aria-label="Clear library search"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="md:col-span-4">
            <CustomOptionSelect<SortKey>
              id="library-sort-select"
              value={sortBy}
              onChange={setSortBy}
              options={[
                {
                  value: 'featured',
                  label: 'Featured',
                  sublabel: 'Grouped by class & subcategory',
                },
                {
                  value: 'potency_desc',
                  label: 'Highest Potency',
                  sublabel: 'Relative potency index',
                },
                {
                  value: 'halflife_desc',
                  label: 'Longest Half-Life',
                  sublabel: 'Terminal elimination t½',
                },
                {
                  value: 'logp_desc',
                  label: 'Highest Lipophilicity',
                  sublabel: 'XLogP3 adipose affinity',
                },
                {
                  value: 'name_asc',
                  label: 'Name (A → Z)',
                  sublabel: 'Alphabetical by compound',
                },
              ]}
            />
          </div>
        </div>

        {/* Tier 1: Macro-Category Segmented Filter (Weed / Prescription Pharmaceuticals / Illicit Substances) */}
        <div className="space-y-2">
          <div className="text-[11px] font-mono font-semibold text-slate-500 uppercase">
            Category
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-1.5 p-1.5 bg-[#E5E5EA]/85 rounded-2xl">
            {(
              [
                {
                  id: 'All',
                  label: `All Substances (${CANNABINOID_DATABASE.length})`,
                },
                {
                  id: 'Weed & Cannabinoids',
                  label: `Weed & THC (${
                    CANNABINOID_DATABASE.filter(
                      (c) =>
                        getSubstanceMacroCategory(c.classification) ===
                        'Weed & Cannabinoids'
                    ).length
                  })`,
                },
                {
                  id: 'Prescription Pharmaceuticals',
                  label: `Prescription Pharma (${
                    CANNABINOID_DATABASE.filter(
                      (c) =>
                        getSubstanceMacroCategory(c.classification) ===
                        'Prescription Pharmaceuticals'
                    ).length
                  })`,
                },
                {
                  id: 'Illicit Substances',
                  label: `Illicit Substances (${
                    CANNABINOID_DATABASE.filter(
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
                  setCategoryFilter('All');
                }}
                className={`min-h-[38px] px-3 py-1.5 text-xs rounded-xl transition-all text-center break-words leading-tight ${
                  macroFilter === macro.id
                    ? 'bg-white text-slate-900 font-extrabold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 font-semibold'
                }`}
              >
                {macro.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tier 2: Subcategory Filter Pills */}
        <div className="space-y-1.5">
          <div className="text-[11px] font-mono font-semibold text-slate-500 uppercase">
            Subcategory
          </div>
          <div className="flex flex-wrap items-center gap-1.5 py-0.5">
            <button
              type="button"
              onClick={() => setCategoryFilter('All')}
              className={`min-h-[34px] px-3 py-1.5 text-xs font-semibold rounded-full transition-all break-words leading-tight ${
                categoryFilter === 'All'
                  ? 'bg-[#007AFF] text-white shadow-xs'
                  : 'bg-[#F2F2F7] text-slate-600 hover:text-slate-900'
              }`}
            >
              All {activeMacroGroup ? activeMacroGroup.shortLabel : 'Subcategories'}
            </button>
            {visibleSubcategories.map((sub) => {
              const count = CANNABINOID_DATABASE.filter(
                (c) => c.classification === sub.id
              ).length;
              return (
                <button
                  key={sub.id}
                  type="button"
                  onClick={() => setCategoryFilter(sub.id)}
                  className={`min-h-[34px] px-3 py-1.5 text-xs font-semibold rounded-full transition-all break-words leading-tight ${
                    categoryFilter === sub.id
                      ? 'bg-[#007AFF] text-white shadow-xs'
                      : 'bg-[#F2F2F7] text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {sub.label} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Universal 9H / 9-OH / 10-OH Structural Variant Bar (Applies to Weed & Cannabinoids) */}
        <div className="pt-2.5 border-t border-slate-200/70 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          {macroFilter === 'All' || macroFilter === 'Weed & Cannabinoids' ? (
            <div className="flex flex-wrap items-center gap-1.5 py-0.5">
              <span className="text-[11px] font-mono font-semibold text-slate-500 mr-1 break-words">
                Cannabinoid Variant:
              </span>
              {DERIVATIVE_MOD_DESCRIPTIONS.map((mod) => {
                const active = activeDerivativeMod === mod.id;
                return (
                  <button
                    key={mod.id}
                    type="button"
                    onClick={() => onChangeDerivativeMod(mod.id)}
                    className={`min-h-[34px] px-3 py-1 text-xs font-mono rounded-full transition-all break-words border ${
                      active
                        ? 'bg-[#0D9488] text-white border-[#0D9488] font-bold shadow-xs'
                        : 'bg-[#F2F2F7] text-slate-700 border-transparent hover:bg-teal-50'
                    }`}
                  >
                    {mod.shortTag}
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="text-[11px] font-mono text-slate-500">
              Showing {activeMacroGroup?.label} · Select any compound to log clearance or calculate dosage.
            </div>
          )}
          <span className="text-[11px] font-mono text-slate-500 shrink-0">
            Showing {filteredAndSorted.length} substances
          </span>
        </div>
      </section>

      {/* Library Visual Card Grid */}
      {filteredAndSorted.length === 0 ? (
        <div className="ios-card p-10 text-center space-y-2">
          <div className="text-base font-bold text-slate-800">
            No substances match &ldquo;{searchQuery}&rdquo;
          </div>
          <p className="text-xs text-slate-500">
            Try clearing your search filter or switching the category pill above.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setMacroFilter('All');
              setCategoryFilter('All');
            }}
            className="mt-2 min-h-[38px] px-4 py-1.5 text-xs font-bold text-white bg-[#007AFF] rounded-full"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
          {filteredAndSorted.map(({ base, effective }) => {
            const isCurrentlySelected =
              base.id === selectedCompoundId ||
              effective.id === selectedCompoundId;
            const isCannabinoid = isCannabinoidSubstance(effective);
            const recProfile = getRecreationalProfile(effective);

            return (
              <article
                key={effective.id}
                className={`ios-card overflow-hidden flex flex-col justify-between transition-all group ${
                  isCurrentlySelected
                    ? 'ring-2 ring-[#007AFF]'
                    : 'hover:shadow-md'
                }`}
              >
                <div>
                  {/* Card Picture & Molecular Header */}
                  <CannabinoidVisualPicture
                    compound={effective}
                    pictureMode={pictureMode}
                  />

                  {/* Card Body: Title, Physical Appearance, Recreational Feel & Pharmacology */}
                  <div className="p-4 sm:p-5 space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="text-[11px] font-mono font-bold text-[#007AFF] break-words">
                            {effective.classification}
                          </span>
                          <span aria-hidden="true" className="text-slate-300">
                            ·
                          </span>
                          <span
                            className={`text-[10px] font-mono px-2 py-0.5 rounded-full border break-words ${getRiskPill(
                              effective.riskTier
                            )}`}
                          >
                            {effective.riskTier} Risk
                          </span>
                        </div>

                        <h2 className="text-lg font-extrabold text-slate-900 mt-1 leading-snug break-words">
                          {effective.shortName}{' '}
                          <span className="text-xs font-normal text-slate-500 block">
                            ({effective.name})
                          </span>
                        </h2>
                      </div>

                      <div className="text-right shrink-0 bg-blue-50/80 border border-blue-200/70 px-2.5 py-1 rounded-xl">
                        <div className="text-sm font-mono font-extrabold text-[#007AFF] tabular-nums whitespace-nowrap">
                          {isCannabinoid
                            ? `${effective.relativePotencyVsD9}×`
                            : `${effective.baseOralThresholdMg} mg`}
                        </div>
                        <div className="text-[9px] font-mono text-slate-500 uppercase whitespace-nowrap">
                          {isCannabinoid ? 'vs Δ9-THC' : 'Threshold'}
                        </div>
                      </div>
                    </div>

                    {/* Synonyms & Physical Form */}
                    <div className="text-[11px] text-slate-500 font-mono break-words leading-snug space-y-0.5">
                      <div>
                        Also known as: {effective.synonyms.slice(0, 3).join(' · ')}
                      </div>
                      <div className="text-slate-600">
                        <strong className="text-slate-800">Appearance:</strong>{' '}
                        {recProfile.physicalAppearance}
                      </div>
                    </div>

                    {/* Highlighted Recreational & Subjective Feel Section */}
                    <div className="p-3.5 bg-blue-50/55 border border-blue-200/75 rounded-2xl space-y-2">
                      <div className="flex items-center justify-between gap-1.5">
                        <span className="text-[11px] font-mono font-extrabold uppercase text-[#007AFF] flex items-center gap-1">
                          <Sparkles className="w-3.5 h-3.5 shrink-0" />
                          <span>How It Feels Recreationally</span>
                        </span>
                      </div>
                      <p className="text-xs text-slate-800 leading-relaxed break-words">
                        {recProfile.recreationalFeel}
                      </p>
                      <div className="pt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-[10.5px] font-mono text-slate-600 border-t border-blue-200/60">
                        {recProfile.subjectiveTags.map((tag, idx) => (
                          <React.Fragment key={tag}>
                            {idx > 0 && (
                              <span aria-hidden="true" className="text-slate-300">
                                ·
                              </span>
                            )}
                            <span className="font-semibold text-slate-700 break-words">
                              {tag}
                            </span>
                          </React.Fragment>
                        ))}
                      </div>
                    </div>

                    {/* Clinical Summary & Pharmacology */}
                    <div className="p-3 bg-[#F2F2F7] rounded-2xl space-y-1.5">
                      <p className="text-[11px] text-slate-700 leading-relaxed break-words">
                        <strong className="text-slate-900">Clinical Summary:</strong>{' '}
                        {effective.summary}
                      </p>
                      <p className="text-[11px] text-slate-600 leading-relaxed break-words">
                        <strong className="text-slate-800">Pharmacology:</strong>{' '}
                        {effective.pharmacologyNotes}
                      </p>
                    </div>

                    {/* 4-Metric Quick Bio-Grid */}
                    <div className="grid grid-cols-4 gap-1.5 pt-1 text-center">
                      <div className="p-2 bg-[#F2F2F7]/80 rounded-xl flex flex-col justify-center">
                        <div className="text-[9px] font-mono text-slate-500 uppercase leading-tight break-words">
                          {isCannabinoid ? 'CB1 Ki' : 'Target Ki'}
                        </div>
                        <div className="text-xs font-mono font-bold text-slate-900 tabular-nums mt-0.5 break-words leading-tight">
                          {effective.cb1KiNm} nM
                        </div>
                      </div>
                      <div className="p-2 bg-[#F2F2F7]/80 rounded-xl flex flex-col justify-center">
                        <div className="text-[9px] font-mono text-slate-500 uppercase leading-tight break-words">
                          Half-Life
                        </div>
                        <div className="text-xs font-mono font-bold text-slate-900 tabular-nums mt-0.5 break-words leading-tight">
                          ~{effective.terminalHalfLifeHours}h
                        </div>
                      </div>
                      <div className="p-2 bg-[#F2F2F7]/80 rounded-xl flex flex-col justify-center">
                        <div className="text-[9px] font-mono text-slate-500 uppercase leading-tight break-words">
                          {isCannabinoid ? 'Vape Hold' : 'Oral Hold'}
                        </div>
                        <div className="text-xs font-mono font-bold text-slate-900 tabular-nums mt-0.5 break-words leading-tight">
                          {isCannabinoid
                            ? `${effective.inhaledDurationHours[0]}–${effective.inhaledDurationHours[1]}h`
                            : `${effective.oralDurationHours[0]}–${effective.oralDurationHours[1]}h`}
                        </div>
                      </div>
                      <div className="p-2 bg-[#F2F2F7]/80 rounded-xl flex flex-col justify-center">
                        <div className="text-[9px] font-mono text-slate-500 uppercase leading-tight break-words">
                          Urine Test
                        </div>
                        <div className="text-xs font-mono font-bold text-slate-900 tabular-nums mt-0.5 break-words leading-tight">
                          {effective.immunoassayCrossReactivityPct}%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Footer Buttons (44px+ iPhone 17 Pro Touch Ergonomics) */}
                <div className="px-4 pb-4 pt-2 border-t border-slate-100 grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      onLogCannabinoid(base.id, activeDerivativeMod)
                    }
                    className="min-h-[42px] px-2 py-1.5 bg-[#007AFF] hover:bg-[#0062CC] active:scale-[0.98] text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1 text-center break-words leading-tight shadow-2xs"
                  >
                    <PlusCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>Log</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onOpenDosage(base.id, activeDerivativeMod)}
                    className="min-h-[42px] px-2 py-1.5 bg-[#F2F2F7] hover:bg-slate-200/80 text-slate-800 text-xs font-semibold rounded-xl transition-all flex items-center justify-center gap-1 text-center break-words leading-tight"
                  >
                    <Sliders className="w-3.5 h-3.5 shrink-0 text-slate-600" />
                    <span>Dose</span>
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setDetailCompound({ baseId: base.id, profile: effective })
                    }
                    className="min-h-[42px] px-2 py-1.5 bg-[#F2F2F7] hover:bg-slate-200/80 text-slate-800 text-xs font-semibold rounded-xl transition-all flex items-center justify-center gap-1 text-center break-words leading-tight"
                  >
                    <Eye className="w-3.5 h-3.5 shrink-0 text-[#007AFF]" />
                    <span>Details</span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      )}

      {/* iOS 27 Full Substance Illustrated Modal / Bottom Sheet */}
      {detailCompound &&
        (() => {
          const modalRec = getRecreationalProfile(detailCompound.profile);
          return (
            <div
              className="fixed inset-0 z-50 bg-slate-900/45 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4"
              onClick={() => setDetailCompound(null)}
            >
              <div
                role="dialog"
                aria-modal="true"
                aria-label={`${detailCompound.profile.name} Full Guide`}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-2xl max-h-[88vh] bg-white rounded-t-[28px] sm:rounded-[28px] shadow-2xl overflow-hidden flex flex-col"
              >
                {/* Visual Header */}
                <div className="relative shrink-0">
                  <CannabinoidVisualPicture
                    compound={detailCompound.profile}
                    pictureMode="studio_and_structure"
                  />
                  <button
                    type="button"
                    aria-label="Close substance guide"
                    onClick={() => setDetailCompound(null)}
                    className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-md"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Scrollable Illustrated Dossier Content */}
                <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-xs font-mono font-bold text-[#007AFF]">
                        {detailCompound.profile.classification} · CID{' '}
                        {detailCompound.profile.pubchemCid}
                      </span>
                      <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-0.5 break-words">
                        {detailCompound.profile.name} (
                        {detailCompound.profile.shortName})
                      </h2>
                      <p className="text-xs text-slate-500 font-mono mt-0.5 break-words">
                        Synonyms: {detailCompound.profile.synonyms.join(' · ')}
                      </p>
                      <p className="text-xs text-slate-600 mt-1 break-words">
                        <strong className="text-slate-900">
                          Physical Appearance:
                        </strong>{' '}
                        {modalRec.physicalAppearance}
                      </p>
                    </div>

                    <span
                      className={`text-xs font-mono px-3 py-1 rounded-full border shrink-0 ${getRiskPill(
                        detailCompound.profile.riskTier
                      )}`}
                    >
                      {detailCompound.profile.riskTier} Risk
                    </span>
                  </div>

                  {/* Recreational & Subjective Experience Card */}
                  <div className="p-4 bg-blue-50/60 border border-blue-200/80 rounded-2xl space-y-2.5">
                    <div className="text-xs font-mono font-extrabold uppercase text-[#007AFF] flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 shrink-0" />
                      <span>How It Feels Recreationally (Subjective Effects)</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-800 leading-relaxed break-words">
                      {modalRec.recreationalFeel}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                      <div className="p-2.5 bg-white/90 rounded-xl border border-blue-100">
                        <div className="text-[10px] font-mono font-bold uppercase text-slate-500">
                          Onset Feel
                        </div>
                        <p className="text-[11px] text-slate-700 mt-0.5 leading-snug break-words">
                          {modalRec.phases.onsetFeel}
                        </p>
                      </div>
                      <div className="p-2.5 bg-white/90 rounded-xl border border-blue-100">
                        <div className="text-[10px] font-mono font-bold uppercase text-[#007AFF]">
                          Peak Experience
                        </div>
                        <p className="text-[11px] text-slate-700 mt-0.5 leading-snug break-words">
                          {modalRec.phases.peakFeel}
                        </p>
                      </div>
                      <div className="p-2.5 bg-white/90 rounded-xl border border-blue-100">
                        <div className="text-[10px] font-mono font-bold uppercase text-slate-500">
                          Comedown / Afterglow
                        </div>
                        <p className="text-[11px] text-slate-700 mt-0.5 leading-snug break-words">
                          {modalRec.phases.comedownFeel}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Overview & Pharmacology */}
                  <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <p>{detailCompound.profile.summary}</p>
                    <div className="p-3.5 bg-[#F2F2F7] rounded-2xl space-y-1">
                      <div className="text-xs font-extrabold text-slate-900">
                        Metabolism & Kinetics
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {detailCompound.profile.pharmacologyNotes}
                      </p>
                      <div className="text-[11px] font-mono text-slate-500 pt-1">
                        Enzymes: {detailCompound.profile.cypEnzymes.join(', ')} ·
                        Primary Metabolite:{' '}
                        {detailCompound.profile.primaryMetabolite}
                      </div>
                    </div>
                  </div>

                  {/* Official PubChem 2D Structure Plate + Kinetics */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3.5 bg-[#F2F2F7] rounded-2xl flex flex-col items-center justify-center">
                      <div className="text-[11px] font-mono font-bold text-slate-600 mb-2 self-start">
                        PubChem 2D
                      </div>
                      <img
                        src={getPubChem2DImageUrl(
                          detailCompound.profile.pubchemCid
                        )}
                        alt={`PubChem 2D structure of ${detailCompound.profile.name}`}
                        referrerPolicy="no-referrer"
                        className="h-32 w-auto object-contain rounded-xl bg-white p-2 border border-slate-200/80"
                      />
                    </div>

                    <div className="p-3.5 bg-[#F2F2F7] rounded-2xl space-y-2 text-xs">
                      <div className="text-[11px] font-mono font-bold text-slate-600">
                        Kinetics
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-200/70">
                        <span className="text-slate-500">Inhaled / Nasal Onset:</span>
                        <span className="font-mono font-bold text-slate-900">
                          {detailCompound.profile.inhaledOnsetMinutes[0]}–
                          {detailCompound.profile.inhaledOnsetMinutes[1]} min
                        </span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-200/70">
                        <span className="text-slate-500">Inhaled Duration:</span>
                        <span className="font-mono font-bold text-slate-900">
                          {detailCompound.profile.inhaledDurationHours[0]}–
                          {detailCompound.profile.inhaledDurationHours[1]} hrs
                        </span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-200/70">
                        <span className="text-slate-500">
                          Oral Duration:
                        </span>
                        <span className="font-mono font-bold text-slate-900">
                          {detailCompound.profile.oralDurationHours[0]}–
                          {detailCompound.profile.oralDurationHours[1]} hrs
                        </span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-slate-500">
                          Half-Life (t½):
                        </span>
                        <span className="font-mono font-bold text-[#007AFF]">
                          ~{detailCompound.profile.terminalHalfLifeHours} hours
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Specific Hazards */}
                  <div className="p-3.5 bg-amber-50/70 border border-amber-200/80 rounded-2xl space-y-1.5">
                    <div className="text-xs font-extrabold text-amber-900 flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>Precautions</span>
                    </div>
                    <ul className="space-y-1 text-xs text-slate-700 list-disc list-inside">
                      {detailCompound.profile.specificHazards.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Sticky Sheet Action Bar */}
                <div className="p-4 border-t border-slate-200/80 bg-[#F2F2F7]/80 flex flex-wrap items-center justify-between gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => {
                      const { baseId } = detailCompound;
                      setDetailCompound(null);
                      onLogCannabinoid(baseId, activeDerivativeMod);
                    }}
                    className="flex-1 min-h-[44px] px-4 py-2.5 bg-[#007AFF] hover:bg-[#0062CC] text-white text-xs sm:text-sm font-bold rounded-2xl flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <PlusCircle className="w-4 h-4" />
                    <span>Log Intake</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      const { baseId } = detailCompound;
                      setDetailCompound(null);
                      onOpenDosage(baseId, activeDerivativeMod);
                    }}
                    className="min-h-[44px] px-4 py-2.5 bg-white hover:bg-slate-100 active:scale-[0.98] text-slate-800 border border-slate-200 text-xs sm:text-sm font-semibold rounded-2xl flex items-center justify-center gap-1.5 transition-all"
                  >
                    <Sliders className="w-4 h-4 text-slate-600" />
                    <span>Dosage</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })()}
    </div>
  );
};
