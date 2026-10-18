# Streamline App & Remove Superseded Features

Prune legacy features replaced by the new Cannabinoid Library and custom dropdown pickers, retiring the old SAR Inspector and Potency Matrix views, discarding the redundant top ribbon dock, and establishing a clean 3-tab iOS navigation contract.

### User Review & Critical Decisions

> [!IMPORTANT]
> The user confirmed the following decisions during Phase 1 clarification:
> - **Retire Superseded Views**: Fully remove the old SAR Inspector (`atlas`) and Potency Matrix (`matrix`) views that were superseded by the Cannabinoid Library.
> - **Remove Old Top Filter Ribbon & Dock**: Discard the legacy horizontal series ribbon, compound pills, and derivative dock from the top of the app, relying on the Cannabinoid Library and the custom iOS-styled `CannabinoidSelect` sheets.
> - **Streamline Mobile Navigation to 3 Tabs**: Reconfigure the iPhone 17 Pro bottom tab bar to 3 core ergonomic thumb-zone destinations: **Clearance & Log**, **Library**, and **Dosage Guide**.

---

### 1. Overview & Core Concept

- **What It Does**: Refactors the CannaPharm application to eliminate technical and visual debt. All compound browsing, pharmacological descriptions, 9H/OH derivative switching, and visual assets are now centralized in the rich **Cannabinoid Library**. Routine logging and elimination curves live in **Clearance & Log**, while route/tolerance calculations live in the **Dosage Guide**.
- **Target Persona & Context**: Primary daily mobile user on an iPhone 17 Pro requiring rapid, frictionless dose logging (vaping focus, 0–10s draw duration), real-time clearance estimates based on their specific biometric baseline (55 kg, 172 cm, sedentary), and comprehensive compound reference.
- **Key Value**: Eliminates UI redundancy and visual noise, shrinks bundle size, speeds up screen transitions, and provides an uncluttered, native iOS 27 mobile experience.

---

### 2. User Experience & Visual Design

- **Key User Flows**:
  1. **Quick Logging**: Open the app directly to **Clearance & Log** (the default primary tab) to log recent vape draws or edible intakes with one-tap suggestions and instant clearance countdowns.
  2. **Compound Discovery**: Switch to the **Library** tab to explore all cannabinoids with high-fidelity chemical cards, receptor binding profiles, onset/duration metrics, and direct "Log Dose" / "Dosage Guide" action triggers.
  3. **Dosage Guidance**: Switch to **Dosage Guide** with auto-populated 55 kg / 172 cm / sedentary / vaping defaults and custom iOS bottom-sheet pickers.
- **Visual Identity & Theme**:
  - *Aesthetic Direction*: iOS 27 Cupertino Glass — clean translucent chrome (`backdrop-blur-2xl`), SF Pro typographic hierarchy, and Apple system blue (`#007AFF`) and emerald/teal accents.
  - *Color Palette & Mood*: Strict 60-30-10 distribution: 60% iOS system background (`#F2F2F7`), 30% structural white card surfaces (`bg-white`), and 10% interactive accent colors (`#007AFF`, `#0D9488`).
  - *Navigation Rhythm*: 
    - Desktop top bar: 3 concise single-line links (`Clearance & Log`, `Cannabinoid Library`, `Dosage Guide`) with quick Library action button.
    - Mobile bottom bar: 3 equal touch targets (`grid-cols-3`, $\ge 48\text{px}$ touch hitbox), optimized for one-handed thumb navigation.
- **Interactive Feedback & Motion**:
  - Smooth 150ms settling transitions when switching between the 3 main tabs.
  - Seamless portal-rendered iOS bottom sheet for cannabinoid selection with instant search.

---

### 3. Key Product Decisions & Trade-Offs

- **Retirement of SAR Inspector & Potency Matrix**:
  - *Chosen Approach*: Remove the `'atlas'` and `'matrix'` routes and delete `CompoundInspector.tsx`, `ComparativeMatrix.tsx`, and `PotencyRadarChart.tsx`.
  - *Why*: The new `CannabinoidLibrary.tsx` already delivers comprehensive compound summaries, high-fidelity visual cards, receptor affinities (CB1/CB2/GPR55), and 9H/OH variant switching in an accessible format. The old matrix and inspector tabs created clutter and confusion.
  - *Preserved Elements*: `ChemicalStructure2D.tsx` is preserved as a shared dependency for the Library and the custom `CannabinoidSelect` sheets.
- **Removal of Legacy Top Compound Ribbon**:
  - *Chosen Approach*: Strip out the top compound filter ribbon and derivative dock from `App.tsx`.
  - *Why*: The compound ribbon took up valuable vertical space on mobile and duplicated the purpose of the Cannabinoid Library and custom dropdown selectors.
- **Strict 3-Tab Mobile Architecture**:
  - *Chosen Approach*: Modernize mobile bottom navigation to 3 balanced tabs: Clearance, Library, and Dosage.
  - *Why*: 3 tabs fit comfortably within the natural thumb zone on an iPhone 17 Pro without cramped icons or text truncations.

---

### 4. Technical Architecture & Data Strategy

```
┌──────────────────────────────────────────────────────────┐
│                   App.tsx (Root Shell)                   │
│  - Active Section State: 'clearance' | 'library' | 'dosage'│
│  - Shared Selected Compound State                         │
│  - Desktop 3-Zone Header & Mobile 3-Tab Bottom Bar       │
└───────────────┬──────────────────────────┬───────────────┘
                │                          │
    ┌───────────┴──────────┐   ┌───────────┴──────────┐   ┌──────────────────────┐
    │ ClearanceCalculator  │   │  CannabinoidLibrary  │   │   DosageCalculator   │
    │  - Multi-Dose Log    │   │  - Compound Cards    │   │  - Allometric Dose   │
    │  - 55kg/Sedentary PK │   │  - 9H/OH Switcher    │   │  - 0-10s Vape Slider │
    │  - CannabinoidSelect │   │  - Quick Log/Dose CTA│   │  - CannabinoidSelect │
    └──────────────────────┘   └───────────┬──────────┘   └──────────────────────┘
                                           │
                               ┌───────────┴──────────┐
                               │ ChemicalStructure2D  │
                               └──────────────────────┘
```

- **Files to Clean Up / Delete**:
  - `src/components/CompoundInspector.tsx` (superseded by `CannabinoidLibrary.tsx`)
  - `src/components/ComparativeMatrix.tsx` (superseded by `CannabinoidLibrary.tsx`)
  - `src/components/PotencyRadarChart.tsx` (superseded by `CannabinoidLibrary.tsx`)
- **Files to Update**:
  - `src/App.tsx`: Drop retired routes, legacy dock, and unused imports; streamline header and bottom tab bar to 3 tabs.
  - `src/components/CannabinoidLibrary.tsx`: Remove `onOpenInspector` callback and SAR Inspector button from cards.
- **Verification Plan**:
  - Verify all unit tests continue to pass via `node --test src/utils/pharmacokinetics.test.ts`.
  - Compile the application using `compile_applet`.
  - Inspect iPhone 17 Pro viewport rendering (`402x874`) to verify 3-tab layout and layout integrity.
