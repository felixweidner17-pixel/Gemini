# Implementation Plan: New Substances & Uploaded Real Photos Integration

Integrate the newly uploaded photographs in `/public/medications/`, establish complete clinical and recreational pharmacology profiles for **Dihydrocodeine** and **Midazolam**, and connect the newly added cannabinoid photographs (**9H-HHC**, **9H-HHCP**, **CBG**, **CBN**) along with updated photos for existing compounds.

---

## 1. Overview of Detected Photos

The `/public/medications/` directory has been inspected, confirming the following user-uploaded image files:
1. **`dihydrocodein.jpg`** (1.15 MB): High-resolution photo of Dihydrocodeine (Paracodin / DHC) pharmaceutical formulation.
2. **`midazolam.jpg`** (96 KB): Real clinical photo of Midazolam (Dormicum / Versed).
3. **`9h-hhc.jpg`** (131 KB): Authentic specimen photo of 9H-HHC.
4. **`9h-hhcp.jpg`** (133 KB): Authentic specimen photo of 9H-HHCP.
5. **`cbg.jpg`** (138 KB): Authentic botanical/crystal photo of Cannabigerol (CBG).
6. **`cbn.jpg`** (119 KB): Authentic pharmaceutical/isolate photo of Cannabinol (CBN).
7. **`alprazolam.jpg`** (694 KB): User's updated Alprazolam pharmaceutical photo.
8. **`clonazepam.jpg`** (102 KB): User's updated Clonazepam / Rivotril photo.
9. **`ketamine.jpg`** (4.96 MB): Ultra-high-resolution Ketamine specimen photo.
10. **`mdma.jpg`** (782 KB): Authentic MDMA specimen photo.
11. **`oxycodone.jpg`** (642 KB): User's updated Oxycodone / OxyContin photo.

---

## 2. Proposed Changes

### A. Pharmacological Database Expansion (`src/data/cannabinoids.ts`)
- **Add Dihydrocodeine Profile**:
  - `id: 'dihydrocodeine'`, name: `Dihydrocodeine (Paracodin · DHC Contin)`, shortName: `Dihydrocodeine`.
  - Classification: `Opioid Analgesic` (macro: `Prescription Pharmaceuticals`, subgroup: `Opiates & Opioids`).
  - Molecular Formula: `C18H23NO3`, MW: `301.38 g/mol`, PubChem CID: `5284538`, XLogP: `1.2`.
  - Receptors: $\mu$-Opioid Receptor (MOR agonist, $K_i \approx 150\text{ nm}$), $\delta$ and $\kappa$ weak affinity.
  - Elimination Half-life: $t_{1/2} = 4.0\text{ hours}$ (extended release tail up to 12h), active metabolite: Dihydromorphine (CYP2D6).
  - Oral Dosages: Threshold $10\text{ mg}$, Light $15\text{–}30\text{ mg}$, Moderate $30\text{–}60\text{ mg}$, Strong $60\text{–}120\text{ mg}$.
  - Clearance Windows: Urine $2\text{–}3\text{ days}$ (cross-reacts on standard opiate immunoassays), Saliva $24\text{–}36\text{ h}$, Blood $12\text{–}24\text{ h}$.
- **Add Midazolam Profile**:
  - `id: 'midazolam'`, name: `Midazolam (Dormicum · Versed · Rapid Hypnotic)`, shortName: `Midazolam`.
  - Classification: `Benzodiazepine` (macro: `Prescription Pharmaceuticals`, subgroup: `Benzodiazepines`).
  - Molecular Formula: `C18H13ClFN3`, MW: `325.77 g/mol`, PubChem CID: `4192`, XLogP: `3.1`.
  - Receptors: $\text{GABA}_A$ receptor positive allosteric modulator ($\alpha_1, \alpha_2, \alpha_3, \alpha_5$, $K_i \approx 5\text{ nm}$).
  - Elimination Half-life: $t_{1/2} = 2.0\text{ hours}$ (ultra-short, rapid hepatic oxidation via CYP3A4 to 1-hydroxymidazolam).
  - Oral Dosages: Threshold $2.5\text{ mg}$, Light $3.75\text{–}7.5\text{ mg}$, Moderate $7.5\text{–}15\text{ mg}$, Strong $15\text{–}20\text{ mg}$.
  - Clearance Windows: Urine $1\text{–}2\text{ days}$ (1-hydroxymidazolam glucuronide), Saliva $12\text{–}18\text{ h}$, Blood $6\text{–}12\text{ h}$.

### B. Recreational & Subjective Effects (`src/data/recreationalProfiles.ts`)
- Add **Dihydrocodeine** recreational profile:
  - Subjective sensations: Warm euphoric body heaviness, gentle soothing calm, less intense histamine release/itching than codeine, dry mouth, mild miosis.
  - Duration: Onset 20–30 min, Peak 1.5–2.5 hours, Total duration 4–6 hours.
  - Risk indicators: High addiction liability, severe respiratory depression when combined with other CNS depressants.
- Add **Midazolam** recreational profile:
  - Subjective sensations: Rapid onset hypnotic wave, profound muscle relaxation, rapid anterograde amnesia ("instant time slip"), heavy motor incoordination.
  - Duration: Onset 10–15 min, Peak 30–60 min, Total duration 2–4 hours.
  - Risk indicators: High blackout risk, respiratory arrest when combined with opioids/alcohol.

### C. Photo Registration & Badging (`src/components/SubstancePhotoSpecimen.tsx`)
- Register all 11 user-uploaded photos in `REAL_MEDICATION_PHOTOS`:
  - `dihydrocodeine`: `/medications/dihydrocodein.jpg`, imprint `Paracodin · DHC 60 / 120 mg`, label `Authentic Dihydrocodeine formulation photo`.
  - `midazolam`: `/medications/midazolam.jpg`, imprint `Dormicum · 7.5 / 15 mg (Roche)`, label `Authentic Midazolam packaging & blister photo`.
  - `9h-hhc`: `/medications/9h-hhc.jpg`, imprint `9H-HHC · Analytical Specimen`, label `Purified 9H-Hexahydrocannabinol`.
  - `9h-hhcp`: `/medications/9h-hhcp.jpg`, imprint `9H-HHCP · Heptyl Homolog`, label `9H-Hexahydrocannabiphorol concentrate`.
  - `cbg`: `/medications/cbg.jpg`, imprint `CBG · Pure Cannabigerol`, label `Cannabigerol isolate crystals / extract`.
  - `cbn`: `/medications/cbn.jpg`, imprint `CBN · Pure Cannabinol`, label `Cannabinol distillate / crystalline formulation`.
  - Verify and link the updated files for `alprazolam`, `clonazepam`, `ketamine`, `mdma`, and `oxycodone`.
- Add 2D vector fallback molecular graphs for `dihydrocodeine` and `midazolam` in `renderSpecimenSvg()`.

### D. Calculator & Cross-Tolerance Integration (`DosageCalculator.tsx` & `ClearanceCalculator.tsx`)
- Support Dihydrocodeine and Midazolam in the substance selector dropdowns.
- Add route-specific bioavailabilities (e.g. Midazolam oral ~36% vs sublingual/nasal ~55–75%).
- Ensure the live multi-dose clearance simulator correctly superimposes their kinetic curves.

---

## 3. Verification Plan

### Automated Tests & Compiles
1. Run `compile_applet` to verify TypeScript builds with zero compilation errors.
2. Run `lint_applet` to verify zero type mismatches or unresolved imports.
3. Run `npm run build` to verify asset bundling into `dist/medications/`.

### Interactive Visual Verification
1. Open the applet in headless Chromium via `playwright-cli`.
2. Inspect the **Library** tab under:
   - "Opiates & Opioids" to confirm **Dihydrocodeine** card with user's photo and clinical details.
   - "Benzodiazepines" to confirm **Midazolam** card with user's photo and clinical details.
   - "9H- Series" and "Natural Weed" to confirm **9H-HHC**, **9H-HHCP**, **CBG**, and **CBN** real photos.
3. Click into **Dosage Calculator** and select Dihydrocodeine and Midazolam to verify correct dose ranges and route adjustments.
4. Click into **Clearance Tracker** to verify half-life simulation and multi-log superposition for the new compounds.
