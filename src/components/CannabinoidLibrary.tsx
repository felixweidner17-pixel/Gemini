import React, { useState, useMemo, useDeferredValue } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
import { SubstanceCompareModal } from './SubstanceCompareModal';
import { getSubstancePopularityScore } from '../utils/substancePopularity';
import { getPubChem2DImageUrl } from '../utils/pubchemClient';
import {
  Search,
  BookOpen,
  X,
  Eye,
  Sparkles,
  Camera,
  Activity,
  ShieldAlert,
  Clock,
  Layers,
  FlaskConical,
  ArrowRightLeft,
  Check,
} from 'lucide-react';

interface CannabinoidLibraryProps {
  selectedCompoundId: string;
  activeDerivativeMod: DerivativeModType;
  onChangeDerivativeMod: (mod: DerivativeModType) => void;
  onLogCannabinoid: (baseId: string, mod: DerivativeModType) => void;
}

type SortKey =
  | 'popularity_desc'
  | 'featured'
  | 'potency_desc'
  | 'halflife_desc'
  | 'logp_desc'
  | 'name_asc';
type PictureMode =
  | 'studio_and_structure'
  | 'structure_3d_only'
  | 'substance_photo'
  | 'pubchem_official';

type DetailTab = 'overview' | 'pharmacology' | 'clearance' | 'risks';

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

  if (pictureMode === 'structure_3d_only') {
    return (
      <div
        className={`relative w-full h-44 bg-gradient-to-br ${theme.bgGradient} overflow-hidden p-2 flex flex-col justify-between`}
      >
        <div
          className={`relative z-10 w-full h-full rounded-xl border ${theme.cardSurface} px-2.5 py-1.5 flex flex-col justify-between shadow-xs`}
        >
          <div className="flex items-center justify-between gap-1">
            <span className="text-[10px] font-mono font-bold text-slate-700 truncate">
              {compound.molecularFormula} · 3D Structure
            </span>
            <span className="text-[9px] font-mono font-bold text-[#007AFF] bg-blue-50 px-1.5 py-0.5 rounded shrink-0">
              {compound.molecularWeight} g/mol · CID {compound.pubchemCid}
            </span>
          </div>

          <div className="w-full flex-1 flex items-center justify-center overflow-hidden py-0.5">
            <ChemicalStructure2D compound={compound} variant="card" />
          </div>
        </div>
      </div>
    );
  }

  // Combined Specimen Photo + Interactive 3D Molecular Structure
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
        className={`relative z-10 w-[50%] h-full rounded-xl border ${theme.cardSurface} px-1.5 py-1 flex flex-col justify-between shadow-xs`}
      >
        <div className="flex items-center justify-between gap-1 px-0.5">
          <span className="text-[9.5px] font-mono font-bold text-slate-700 truncate">
            {compound.molecularFormula}
          </span>
          <span className="text-[8.5px] font-mono font-bold text-[#007AFF] bg-blue-50 px-1 py-0.2 rounded shrink-0">
            {compound.molecularWeight} g/mol
          </span>
        </div>

        <div className="w-full flex-1 flex items-center justify-center overflow-hidden">
          <ChemicalStructure2D compound={compound} variant="card" />
        </div>

        <div className="flex items-center justify-between text-[8.5px] font-mono text-slate-500 pt-0.5 px-0.5 border-t border-slate-100">
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
  const [searchQuery, setSearchQuery] = useState('');
  const [macroFilter, setMacroFilter] = useState<
    'All' | SubstanceMacroCategory
  >('All');
  const [subFilterId, setSubFilterId] = useState<string>('All');
  const [sortBy, setSortBy] = useState<SortKey>('popularity_desc');
  const [pictureMode, setPictureMode] = useState<PictureMode>(
    'studio_and_structure'
  );

  // Compare Selection State [SubstanceA, SubstanceB?]
  const [compareList, setCompareList] = useState<string[]>([]);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

  // Detail Modal State with Tabs
  const [detailCompound, setDetailCompound] = useState<{
    baseId: string;
    profile: CannabinoidProfile;
  } | null>(null);
  const [detailTab, setDetailTab] = useState<DetailTab>('overview');

  // Gemini AI Expert Consultation Modal State
  const [geminiModalCompound, setGeminiModalCompound] = useState<{
    baseId: string;
    profile: CannabinoidProfile;
  } | null>(null);
  const [geminiMessages, setGeminiMessages] = useState<Array<{ role: 'user' | 'assistant'; text: string }>>([]);
  const [geminiInput, setGeminiInput] = useState('');
  const [isGeminiLoading, setIsGeminiLoading] = useState(false);

  const handleSendGeminiMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!geminiInput.trim() || isGeminiLoading || !geminiModalCompound) return;

    const userMsg = geminiInput.trim();
    setGeminiInput('');
    const newHistory = [...geminiMessages, { role: 'user' as const, text: userMsg }];
    setGeminiMessages(newHistory);
    setIsGeminiLoading(true);

    try {
      const substanceContext = `[Context: User is asking about substance "${geminiModalCompound.profile.shortName}" (${geminiModalCompound.profile.name}), classification: ${geminiModalCompound.profile.classification}, summary: ${geminiModalCompound.profile.summary}, half-life: ${geminiModalCompound.profile.terminalHalfLifeHours}h, relative potency vs D9: ${geminiModalCompound.profile.relativePotencyVsD9}x, risk tier: ${geminiModalCompound.profile.riskTier}, oral threshold: ${geminiModalCompound.profile.baseOralThresholdMg}mg, XLogP: ${geminiModalCompound.profile.xLogP}, pubchem CID: ${geminiModalCompound.profile.pubchemCid}, pharmacology notes: ${geminiModalCompound.profile.pharmacologyNotes}].`;

      const fullPrompt = `${substanceContext}\n\nUser Question: ${userMsg}`;

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: fullPrompt,
          history: newHistory.slice(0, -1).map(m => ({
            role: m.role === 'user' ? 'user' : 'model',
            parts: [{ text: m.text }]
          }))
        })
      });

      const data = await res.json();
      if (data.text) {
        setGeminiMessages(prev => [...prev, { role: 'assistant', text: data.text }]);
      } else {
        setGeminiMessages(prev => [...prev, { role: 'assistant', text: 'Sorry, I encountered an error communicating with Gemini.' }]);
      }
    } catch (err) {
      setGeminiMessages(prev => [...prev, { role: 'assistant', text: 'Network error connecting to Gemini API.' }]);
    } finally {
      setIsGeminiLoading(false);
    }
  };

  // Subcategories matching the active category
  const availableSubcategories: SubcategoryPill[] =
    macroFilter === 'All' ? [] : MACRO_SUBCATEGORY_MAP[macroFilter] || [];

  // Toggle substance in compare list (max 2)
  const handleToggleCompare = (id: string) => {
    setCompareList((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }
      if (prev.length >= 2) {
        // Replace second substance
        return [prev[0], id];
      }
      return [...prev, id];
    });
  };

  // Deferred search value to ensure butter-smooth real-time keystroke input without frame drops
  const deferredSearchQuery = useDeferredValue(searchQuery);

  // Transform base cannabinoids and precompute normalized search tokens
  const libraryItems = useMemo(() => {
    return ALL_SUBSTANCES_DATABASE.map((base, idx) => {
      const isWeed = getSubstanceMacroCategory(base.classification) === 'Weed & Cannabinoids';
      const effective = isWeed
        ? applyDerivativeModification(base, activeDerivativeMod)
        : base;
      const macro = getSubstanceMacroCategory(base.classification);
      const rec = getRecreationalProfile(effective);

      // Precompute normalized searchable text string
      const searchIndex = [
        effective.shortName,
        effective.name,
        base.shortName,
        base.name,
        base.classification,
        macro,
        effective.molecularFormula,
        `cid ${effective.pubchemCid}`,
        effective.summary,
        effective.pharmacologyNotes,
        rec.recreationalFeel,
        rec.physicalAppearance,
        ...(effective.synonyms || []),
        ...(base.synonyms || []),
        ...(rec.subjectiveTags || []),
      ]
        .join(' ')
        .toLowerCase();

      return {
        base,
        effective,
        index: idx,
        macro,
        searchIndex,
        popularityScore: getSubstancePopularityScore(effective),
      };
    });
  }, [activeDerivativeMod]);

  const filteredAndSorted = useMemo(() => {
    const rawTokens = deferredSearchQuery.trim().toLowerCase().split(/\s+/).filter(Boolean);

    return libraryItems
      .filter(({ base, effective, macro, searchIndex }) => {
        const matchesMacro = macroFilter === 'All' || macro === macroFilter;

        // Subcategory filter check
        let matchesSub = true;
        if (macroFilter !== 'All' && subFilterId !== 'All') {
          const activeSub = availableSubcategories.find((s) => s.id === subFilterId);
          if (activeSub) {
            matchesSub = activeSub.matcher(effective);
          }
        }

        if (!matchesMacro || !matchesSub) return false;
        if (rawTokens.length === 0) return true;

        // Multi-token real-time matching
        return rawTokens.every((token) => searchIndex.includes(token));
      })
      .sort((a, b) => {
        if (sortBy === 'popularity_desc') {
          return b.popularityScore - a.popularityScore;
        }
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
  }, [libraryItems, deferredSearchQuery, macroFilter, subFilterId, availableSubcategories, sortBy]);

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

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <section className="ios-card p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#007AFF] animate-ping" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500">
              Verified Pharmacopeia · {ALL_SUBSTANCES_DATABASE.length} Full Substance Profiles
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 mt-1">
            Substance Library & Atlas
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Universal pharmacology atlas, 3D molecular conformers, receptor potencies, and side-by-side comparative kinetics.
          </p>
        </div>

        {/* Compare Quick Action if substances selected */}
        <div className="flex items-center gap-2">
          {compareList.length > 0 && (
            <button
              type="button"
              onClick={() => setIsCompareModalOpen(true)}
              className="min-h-[38px] px-4 py-1.5 bg-[#007AFF] hover:bg-[#0062CC] text-white text-xs font-bold rounded-full transition-all flex items-center gap-1.5 shadow-xs"
            >
              <ArrowRightLeft className="w-3.5 h-3.5" />
              <span>Compare Selected ({compareList.length}/2)</span>
            </button>
          )}
        </div>
      </section>
        <>
          {/* Controls Panel: Search, Category, Subcategories & Cannabinoid Variant Dropdown */}
          <section className="ios-card p-4 sm:p-5 space-y-4">
            <div className="flex flex-col lg:flex-row gap-3">
              {/* Real-time Search Input */}
              <div className="relative flex-1">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter 373 substances by name, synonym, category, or formula..."
                  className="w-full min-h-[44px] pl-10 pr-24 py-2 bg-[#F2F2F7] hover:bg-[#EBEBEF] focus:bg-white rounded-xl text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#007AFF] transition-all border border-transparent focus:border-blue-200"
                />
                <div className="absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
                  {searchQuery ? (
                    <>
                      <span className="text-[10px] font-mono font-bold text-slate-500 bg-white px-1.5 py-0.5 rounded shadow-2xs border border-slate-200">
                        {filteredAndSorted.length} match{filteredAndSorted.length === 1 ? '' : 'es'}
                      </span>
                      <button
                        type="button"
                        onClick={() => setSearchQuery('')}
                        aria-label="Clear search query"
                        className="p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-200 transition-colors"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </>
                  ) : (
                    <span className="text-[10px] font-mono font-semibold text-slate-400 px-1.5 py-0.5 rounded border border-slate-200/60 hidden sm:inline">
                      {filteredAndSorted.length} items
                    </span>
                  )}
                </div>
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
                  Photo + 3D
                </button>
                <button
                  type="button"
                  onClick={() => setPictureMode('structure_3d_only')}
                  className={`min-h-[32px] px-2.5 py-1 text-[11px] font-bold rounded-lg transition-all ${
                    pictureMode === 'structure_3d_only'
                      ? 'bg-white text-slate-900 shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  3D Model Only
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
                  <option value="popularity_desc">Popularity (High to Low)</option>
                  <option value="featured">Standard Catalog</option>
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
                      label: `Cannabinoids & Botanicals (${
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
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            >
              <AnimatePresence mode="popLayout">
                {filteredAndSorted.map(({ base, effective }, idx) => {
                  const isCannabinoid = isCannabinoidSubstance(effective);

                  return (
                    <motion.article
                      key={effective.id}
                      layout
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{
                        duration: 0.24,
                        ease: [0.16, 1, 0.3, 1],
                        delay: Math.min(idx * 0.02, 0.2),
                      }}
                      className="ios-card overflow-hidden flex flex-col justify-between transition-shadow hover:shadow-md group border border-slate-200/80 bg-white"
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

                      {/* Action Buttons: Details, Gemini, and Compare */}
                      <div className="p-3 pt-1 border-t border-slate-100 grid grid-cols-3 gap-1.5">
                        <button
                          type="button"
                          onClick={() => {
                            setDetailCompound({
                              baseId: base.id,
                              profile: effective,
                            });
                            setDetailTab('overview');
                          }}
                          className="min-h-[38px] px-2 py-1.5 bg-[#007AFF] hover:bg-[#0062CC] active:scale-[0.98] text-white text-[11px] font-bold rounded-xl transition-all flex items-center justify-center gap-1 shadow-2xs"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Details</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => {
                            setGeminiModalCompound({
                              baseId: base.id,
                              profile: effective,
                            });
                            setGeminiMessages([
                              {
                                role: 'assistant',
                                text: `Hello! I am your Gemini harm-reduction and clinical pharmacology expert powered by Gemini 3.8 Flash. I have full knowledge of **${effective.shortName}** (${effective.name}, Class: ${effective.classification}, Risk: ${effective.riskTier}, Half-Life: ${effective.terminalHalfLifeHours}h, Potency vs D9: ${effective.relativePotencyVsD9}x). What would you like to know or discuss regarding its pharmacology, clearance, or harm reduction?`
                              }
                            ]);
                          }}
                          className="min-h-[38px] px-2 py-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:scale-[0.98] text-white text-[11px] font-bold rounded-xl transition-all flex items-center justify-center gap-1 shadow-2xs"
                        >
                          <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
                          <span>Gemini</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => handleToggleCompare(effective.id)}
                          className={`min-h-[38px] px-2 py-1.5 active:scale-[0.98] text-[11px] font-bold rounded-xl transition-all flex items-center justify-center gap-1 border ${
                            compareList.includes(effective.id)
                              ? 'bg-purple-50 text-[#8B5CF6] border-purple-300 font-extrabold shadow-2xs'
                              : 'bg-[#F2F2F7] hover:bg-[#E5E5EA] text-slate-700 border-transparent'
                          }`}
                        >
                          {compareList.includes(effective.id) ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-[#8B5CF6]" />
                              <span>Selected</span>
                            </>
                          ) : (
                            <>
                              <ArrowRightLeft className="w-3.5 h-3.5 text-[#007AFF]" />
                              <span>Compare</span>
                            </>
                          )}
                        </button>
                      </div>
                    </motion.article>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          )}
        </>

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
                  {/* Specimen Photo & Interactive 3D Molecular Conformer Workbench */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-stretch">
                    <div className="md:col-span-5 h-64 sm:h-72 rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-900">
                      <SubstancePhotoSpecimen
                        compound={profile}
                        className="w-full h-full"
                        showCaption={true}
                        allowZoom={true}
                      />
                    </div>
                    <div className="md:col-span-7 h-64 sm:h-72">
                      <ChemicalStructure2D
                        compound={profile}
                        variant="modal"
                      />
                    </div>
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

                      {/* Clinical Potency & Starting Thresholds */}
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
                            {profile.relativePotencyVsD9}×
                          </div>
                          <div className="text-[10px] text-slate-500 mt-0.5">
                            Potency index
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
                      onClick={() => {
                        handleToggleCompare(profile.id);
                        if (!compareList.includes(profile.id) && compareList.length === 1) {
                          setDetailCompound(null);
                          setIsCompareModalOpen(true);
                        }
                      }}
                      className={`min-h-[40px] px-4 py-2 text-xs font-bold rounded-xl transition-colors shadow-xs flex items-center gap-1.5 ${
                        compareList.includes(profile.id)
                          ? 'bg-purple-100 text-[#8B5CF6] border border-purple-300'
                          : 'bg-[#007AFF] hover:bg-[#0062CC] text-white'
                      }`}
                    >
                      <ArrowRightLeft className="w-4 h-4" />
                      <span>
                        {compareList.includes(profile.id)
                          ? 'Selected for Comparison'
                          : 'Compare Substance'}
                      </span>
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

      {/* FLOATING BOTTOM COMPARISON DOCK (Appears when 1 or 2 substances are selected) */}
      {compareList.length > 0 && (
        <div className="fixed bottom-16 md:bottom-6 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-lg bg-slate-900/95 text-white backdrop-blur-xl px-4 py-3 rounded-2xl shadow-2xl border border-slate-700/80 flex items-center justify-between gap-3 animate-slide-up">
          <div className="flex items-center gap-2 min-w-0">
            <span className="w-8 h-8 rounded-xl bg-blue-500/20 text-[#38BDF8] flex items-center justify-center shrink-0">
              <ArrowRightLeft className="w-4 h-4" />
            </span>
            <div className="min-w-0">
              <div className="text-[11px] font-mono text-slate-400 uppercase font-semibold">
                Compare Tray ({compareList.length}/2)
              </div>
              <div className="flex items-center gap-1.5 truncate text-xs font-bold mt-0.5">
                {compareList.map((id, idx) => {
                  const item = ALL_SUBSTANCES_DATABASE.find((c) => c.id === id);
                  return (
                    <span
                      key={`tray-${id}-${idx}`}
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-800 text-slate-200 border border-slate-700 font-mono text-[11px]"
                    >
                      {item ? item.shortName : id}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleToggleCompare(id);
                        }}
                        className="text-slate-400 hover:text-white"
                        title="Remove from comparison"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  );
                })}
                {compareList.length === 1 && (
                  <span className="text-[11px] text-slate-400 font-medium italic">
                    + Select 2nd substance
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setCompareList([])}
              className="text-xs text-slate-400 hover:text-slate-200 px-2 py-1 font-medium"
            >
              Clear
            </button>
            <button
              type="button"
              onClick={() => {
                if (compareList.length === 1) {
                  // Pick default secondary if only 1 chosen
                  const fallbackSecond =
                    compareList[0] === 'delta9-thc' ? 'cbd' : 'delta9-thc';
                  setCompareList([compareList[0], fallbackSecond]);
                }
                setIsCompareModalOpen(true);
              }}
              className="px-3.5 py-1.5 bg-[#007AFF] hover:bg-[#0062CC] text-white text-xs font-bold rounded-xl transition-all shadow-xs flex items-center gap-1"
            >
              <span>Compare</span>
              <ArrowRightLeft className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* SUBSTANCE COMPARE MODAL */}
      {isCompareModalOpen && compareList.length > 0 && (
        <SubstanceCompareModal
          substanceAId={compareList[0]}
          substanceBId={
            compareList[1] ||
            (compareList[0] === 'delta9-thc' ? 'cbd' : 'delta9-thc')
          }
          onClose={() => setIsCompareModalOpen(false)}
          onSwap={() => {
            if (compareList.length >= 2) {
              setCompareList([compareList[1], compareList[0]]);
            }
          }}
          onSelectSubstanceA={(id) => {
            setCompareList((prev) => [id, prev[1] || (id === 'delta9-thc' ? 'cbd' : 'delta9-thc')]);
          }}
          onSelectSubstanceB={(id) => {
            setCompareList((prev) => [prev[0] || 'delta9-thc', id]);
          }}
          onLogDose={(subId) => {
            onLogCannabinoid(subId, activeDerivativeMod);
          }}
        />
      )}

      {/* GEMINI AI EXPERT CONSULTATION MODAL */}
      {geminiModalCompound && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity"
            onClick={() => setGeminiModalCompound(null)}
          />
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 flex flex-col max-h-[85vh]">
            {/* Modal Header */}
            <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
                  <Sparkles className="w-4 h-4" />
                </span>
                <div>
                  <h3 className="text-sm font-extrabold">
                    Gemini Expert · {geminiModalCompound.profile.shortName}
                  </h3>
                  <p className="text-[11px] font-mono text-slate-400">
                    {geminiModalCompound.profile.classification} · Powered by Gemini 3.8 Flash
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setGeminiModalCompound(null)}
                className="p-1.5 rounded-full bg-slate-800 text-slate-300 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-slate-50/50">
              {geminiMessages.map((msg, mIdx) => (
                <div
                  key={`gemini-msg-${mIdx}`}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs sm:text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-[#007AFF] text-white font-medium shadow-xs'
                        : 'bg-white text-slate-800 border border-slate-200/80 shadow-xs'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isGeminiLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-slate-200/80 rounded-2xl px-4 py-3 text-xs text-slate-500 flex items-center gap-2 shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
                    <span>Gemini is analyzing full pharmacological & clearance profile...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Prompt Chips */}
            <div className="px-4 py-2 bg-white border-t border-slate-100 flex flex-wrap gap-1.5 text-[11px]">
              <span className="text-slate-400 font-mono text-[10px] self-center">Ask:</span>
              {[
                'What are the primary toxicity risks?',
                'How long is the clearance window?',
                'Receptor binding & Ki profile?',
                'Harm reduction precautions?'
              ].map((qPrompt, qIdx) => (
                <button
                  key={`prompt-${qIdx}`}
                  type="button"
                  onClick={() => setGeminiInput(qPrompt)}
                  className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-medium transition-colors"
                >
                  {qPrompt}
                </button>
              ))}
            </div>

            {/* Chat Input Form */}
            <form
              onSubmit={handleSendGeminiMessage}
              className="p-3 bg-white border-t border-slate-200 flex items-center gap-2"
            >
              <input
                type="text"
                value={geminiInput}
                onChange={(e) => setGeminiInput(e.target.value)}
                placeholder={`Ask Gemini anything about ${geminiModalCompound.profile.shortName}...`}
                className="flex-1 min-h-[40px] px-3.5 py-2 bg-[#F2F2F7] rounded-xl text-xs text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#007AFF]"
              />
              <button
                type="submit"
                disabled={!geminiInput.trim() || isGeminiLoading}
                className="min-h-[40px] px-4 py-2 bg-[#007AFF] hover:bg-[#0062CC] disabled:opacity-50 text-white text-xs font-bold rounded-xl transition-all shadow-xs shrink-0"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
