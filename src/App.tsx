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
import { Home, BookOpen, Sparkles, X } from 'lucide-react';

type ActiveSection = 'home' | 'library';

export function App() {
  const [activeSection, setActiveSection] = useState<ActiveSection>('home');
  const [selectedId, setSelectedId] = useState<string>('delta9-thc');
  const [derivativeMod, setDerivativeMod] = useState<DerivativeModType>('native');

  // Center Taskbar Gemini AI Modal State
  const [isGeminiOpen, setIsGeminiOpen] = useState(false);
  const [geminiMessages, setGeminiMessages] = useState<Array<{ role: 'user' | 'assistant'; text: string }>>([
    {
      role: 'assistant',
      text: 'Hello! I am your clinical pharmacology and harm-reduction expert powered by Gemini 3.8 Flash. Ask me any question or prompt regarding substances, clearance kinetics, or health guidelines.'
    }
  ]);
  const [geminiInput, setGeminiInput] = useState('');
  const [isGeminiLoading, setIsGeminiLoading] = useState(false);

  const handleSendGeminiMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!geminiInput.trim() || isGeminiLoading) return;

    const userMsg = geminiInput.trim();
    setGeminiInput('');
    const newHistory = [...geminiMessages, { role: 'user' as const, text: userMsg }];
    setGeminiMessages(newHistory);
    setIsGeminiLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMsg,
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

  // Retrieve compound from database
  const primaryCompound =
    ALL_SUBSTANCES_DATABASE.find((c) => c.id === selectedId) ||
    getCannabinoidById(selectedId) ||
    CANNABINOID_DATABASE[0];

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

        {/* Center Taskbar Gemini Toggle Switch */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center">
          <button
            type="button"
            onClick={() => setIsGeminiOpen(!isGeminiOpen)}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border text-xs font-bold transition-all shadow-xs ${
              isGeminiOpen
                ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-blue-500/30'
                : 'bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 text-blue-700 border-blue-200'
            }`}
            title="Toggle Gemini AI Expert Assistant"
          >
            <Sparkles className={`w-3.5 h-3.5 text-amber-500 ${isGeminiOpen ? 'animate-spin' : 'animate-pulse'}`} />
            <span>Gemini AI</span>
          </button>
        </div>

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

      {/* GEMINI AI EXPERT CONSULTATION MODAL (TOGGLED FROM CENTER TASKBAR) */}
      {isGeminiOpen && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity"
            onClick={() => setIsGeminiOpen(false)}
          />
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 flex flex-col max-h-[85vh] animate-slide-up">
            {/* Modal Header */}
            <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 animate-pulse" />
                </span>
                <div>
                  <h3 className="text-sm font-extrabold">
                    Gemini AI Expert Assistant
                  </h3>
                  <p className="text-[11px] font-mono text-slate-400">
                    Powered by Gemini 3.8 Flash · Clinical Pharmacology & Harm Reduction
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsGeminiOpen(false)}
                className="p-1.5 rounded-full bg-slate-800 text-slate-300 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-slate-50/50">
              {geminiMessages.map((msg, mIdx) => (
                <div
                  key={`gemini-global-msg-${mIdx}`}
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
                    <span>Gemini is generating evidence-based guidance...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Prompt Chips */}
            <div className="px-4 py-2 bg-white border-t border-slate-100 flex flex-wrap gap-1.5 text-[11px]">
              <span className="text-slate-400 font-mono text-[10px] self-center">Ask:</span>
              {[
                'How do I calculate clearance half-life?',
                'What are safe dosage thresholds for cannabinoids?',
                'Pharmacokinetics of synthetic vs natural agonists?',
                'Harm reduction & risk mitigation guidelines'
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
                placeholder="Ask Gemini any question or prompt..."
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
}

export default App;
