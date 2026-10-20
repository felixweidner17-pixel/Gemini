# Implementation Plan: Universal Substance Parity, Popularity Sorting & Compare Tool

Deliver complete clinical parity across all substances so that alcohol, nicotine, caffeine, pharmaceuticals (benzodiazepines, opioids, ADHD stimulants), and recreational compounds (MDMA, ketamine, cocaine, psychedelics) receive the exact same depth, visual richness, and attention as cannabinoids; sort substances by empirical popularity from high to low; add the side-by-side **Compare** tool; and completely eliminate the obsolete Dosage Workbench.

---

## 1. Core Objectives & Parity Alignment

### A. Equal Attention & Substance Parity (Eliminating Cannabinoid Bias)
- **Neutral Terminology & Classification**:
  - Replace any remaining cannabis-skewed phrasing (e.g. `isCannabinoid`, "vs Δ9-THC baseline", "Weed Subcategories") with universal pharmacological standards:
    - Potency index is presented as **"Relative Potency (Indexed)"** or **"Target Potency Index"** with clear receptor-specific context (e.g., GABA-A PAM for benzos, $\mu$-Opioid for opioids, NET/DAT for stimulants, 5-HT2A for psychedelics, NMDA for dissociatives).
    - Thresholds and onset/duration intervals calibrated across all clinical classes.
- **Visual Specimen & Conformer Parity**:
  - Ensure every popular substance in the library features its high-resolution clinical photograph (e.g., pharmaceutical blister/tablets, botanical/crystal specimen) and interactive 3D ball-and-stick molecular model.
  - Remove preferential variant banners that only spotlight weed. If subcategory filters are used, all categories (Rx Pharmaceuticals, Illicit/NPS, Botanicals & Cannabinoids) are presented with equal prominence and structured layout.
- **Universal Pharmacological Profiles**:
  - Ensure radar profiles across all 373 substances are scaled equitably across the 6 universal axes:
    1. Primary Receptor Binding / Target Affinity
    2. Euphoria / Intoxication Potency
    3. Somatic Sedation
    4. Anxiogenic / Stimulant Risk
    5. Duration / Action Persistence
    6. Lipophilicity / Adipose Partitioning

---

## 2. Feature Specifications

### B. Popularity Ranking & Default Sort Order
- Create an empirical popularity scoring system (`src/utils/substancePopularity.ts`):
  - **Tier 1 (Everyday Global Prevalence / Primary Clinical)**:
    - Alcohol (Ethanol), Caffeine, Nicotine, Δ9-THC, Cannabidiol (CBD).
  - **Tier 2 (High-Prevalence Prescription & Recreational)**:
    - Alprazolam (Xanax), Diazepam (Valium), Clonazepam, Lorazepam.
    - Amphetamine (Adderall), Methylphenidate (Ritalin), MDMA, Cocaine.
    - Ketamine, Psilocybin, LSD, Oxycodone, Hydrocodone, Morphine, Fentanyl.
    - Pregabalin, Gabapentin, Zolpidem, Modafinil.
  - **Tier 3 (Widely Known Secondary & Botanical Compounds)**:
    - CBG, CBN, THCV, Kratom (Mitragynine), Codeine, Tramadol, DMT, 2C-B, Methamphetamine.
  - **Tier 4 (Secondary Pharmaceuticals & Minor Cannabinoids)**:
    - HHC, CBC, Buprenorphine, Methadone, Armodafinil, Dexmethylphenidate.
  - **Tier 5 (Designer Analogues, Synthetic Cannabinoids & NPS)**:
    - Niche research compounds, fluorinated phenidates, substituted cathinones, synthetic cannabinoids (JWH, MDMB-4en-PINACA, etc.).
- Default the Library sort to **Popularity (High to Low)** (`popularity_desc`).

### C. Complete Removal of Dosage Workbench
- Remove Dosage Workbench toggle pill and view (`dosage_workbench`) from `CannabinoidLibrary.tsx`.
- Remove "Dosage" card action buttons in substance grid and replace with a **"Compare"** button.
- Remove "Dosage" tab from the substance detail modal; replace footer "Calculate Dosage" button with **"Compare Substance"**.
- Update navigation header and tab bar in `App.tsx` and `CannabinoidLibrary.tsx` from "Substance Library & Dosage" to **"Substance Library"**.
- Remove unused `workbenchSubstanceId` and associated handlers.

### D. Side-by-Side Substance Compare Feature
- **Card Selection Trigger**:
  - Each substance card displays a **"Compare"** button next to "Details".
  - Active comparison state visual indicators (blue border, checkmark, or active label).
  - Clicking a substance toggles its inclusion in `compareSelection: [string, string?]`.
- **Floating Bottom Comparison Dock**:
  - Floats above the mobile tab bar / desktop bottom when 1 or 2 substances are selected.
  - When 1 selected: shows substance tag, photo badge, and "Select 2nd substance to compare".
  - When 2 selected: shows both substance tags, clear button, and prominent **"Compare Now (2/2)"** action.
- **Side-by-Side Comparison Drawer / Modal (`SubstanceCompareModal.tsx`)**:
  - **Header & 3D Visualizer**: Dual side-by-side cards with formula, molecular weight, risk tier, and stationary 3D structures.
  - **Dual Radar Chart (Recharts Radar / Polar Grid)**: Overlaying both compounds across all 6 pharmacological axes with distinct colors (Cobalt `#007AFF` vs. Violet `#8B5CF6`).
  - **Potency Delta Ratios & Thresholds**:
    - Relative potency ratio ($A \text{ vs } B$).
    - Oral & Inhaled/Nasal threshold dose delta.
    - Target binding affinity ($\text{K}_i$ in $nM$) or receptor mechanism comparison.
  - **Elimination & Pharmacokinetic Timeline**:
    - Terminal plasma elimination half-life ($t_{1/2}$) comparison bar.
    - Onset and active plateau duration intervals.
    - Lipophilicity ($\text{XLogP}$) comparison for adipose retention.
    - Immunoassay detection window comparison.
  - **Direct Swap & Substance Picker**: Quick in-modal search to swap either substance without closing the comparison.

---

## 3. Visual & Typographic System (Clinical Precision)

- **Palette**: Pristine lab slate background (`#F8F9FB`), hairline borders (`border-slate-200/80`), Cobalt (`#007AFF`) for Substance A and Violet (`#8B5CF6`) for Substance B.
- **Typography**: Tabular numerals with `font-mono tabular-nums` for all numeric metrics, half-lives, and thresholds.
- **Anti-Slop Discipline**: Zero decorative pill enclosures for static metadata; clean typography with `·` separators; minimum $44\text{px}$ touch targets.

---

## 4. Implementation Steps

1. **`src/utils/substancePopularity.ts`**:
   - Create popularity ranking mapping and helper `getPopularityScore(compound: CannabinoidProfile): number`.
   - Implement sort function for `popularity_desc`.
2. **`src/components/SubstanceCompareModal.tsx`**:
   - Create the side-by-side comparison modal with 3D models, dual Recharts `RadarChart`, potency delta ratio cards, and pharmacokinetic elimination comparison bars.
3. **`src/components/CannabinoidLibrary.tsx`**:
   - Remove Dosage Workbench toggle pill, view switcher, and detail modal dosage tab.
   - Set default sort to `'popularity_desc'`.
   - Update card actions to `Details` and `Compare`.
   - Add floating bottom comparison dock.
   - Replace cannabis-exclusive banner with clean neutral category filters.
4. **`src/App.tsx`**:
   - Update top navigation and bottom mobile tab bar labels to "Substance Library".
5. **Verification**:
   - Run compilation and tests.
   - Verify that Alcohol, Caffeine, Nicotine, Xanax, Adderall, Ketamine, MDMA, and THC appear at the top in popularity order with identical rich specimen photos, 3D structures, and clinical telemetry.
   - Verify that comparison drawer functions smoothly with dual radar chart and delta comparisons.
