# Implementation Plan: Ultra-Compact Library Cards & Tabbed Details Modal

Streamline the substance cards in the Library to show only essential identification metrics (photo, name, classification, risk tier, potency/threshold), completely hiding in-depth descriptions and bio-metrics from the surface cards and moving them exclusively into an organized, full-screen tabbed Details modal.

---

## 1. User Alignment & Constraints

- **On the Surface Substance Card**:
  - Keep: Real Photo / 2D Structure visual, substance short name & full name, classification badge, risk tier pill, relative potency / oral threshold badge.
  - Action buttons: `[Log]`, `[Dose]`, and a prominent `[Details]` button.
  - Remove entirely from the card:
    - Recreational feel description (`How It Feels Recreationally`)
    - Subjective tags
    - Appearance & synonyms text
    - Clinical summary paragraph
    - Pharmacology mechanism paragraph
    - 4-metric bio-grid (Target Ki, Half-Life, Hold duration, Urine test cross-reactivity).
- **In the Details Modal**:
  - Full-screen modal with organized tabs:
    - **Tab 1: Recreational Profile**: Subjective feel, physical appearance, onset/peak/comedown timeline, and tags.
    - **Tab 2: Clinical Pharmacology**: Mechanism of action, clinical summary, receptor Ki binding, CYP metabolism, and half-life.
    - **Tab 3: Drug Testing & Clearance**: Immunoassay cross-reactivity, primary metabolites, and detection windows.
    - **Tab 4: Harm Reduction**: Specific hazards, poly-drug interactions, and clinical side effects by organ system.

---

## 2. Proposed Changes

### `src/components/CannabinoidLibrary.tsx`
- **Streamline Card Body**:
  - Refactor `<article>` card body from ~150 lines of nested text down to a tight, clean ~25-line header containing:
    1. Visual thumbnail / structure (`CannabinoidVisualPicture`)
    2. Header with Category, Risk Tier pill, and Potency/Threshold badge
    3. Substance title (`shortName` + subtle `name`)
    4. Action footer buttons: `[Log]`, `[Dose]`, and `[Details]` (styled with high visual emphasis).
- **Upgrade Details Modal**:
  - Add active tab state: `'recreational' | 'pharmacology' | 'clearance' | 'safety'`.
  - Present a tab bar with icons and clear labels:
    - *Recreational & Feel*: Appearance, subjective feel description, timeline phases, tags.
    - *Pharmacology & Bio*: Clinical summary, mechanism of action, receptor binding Ki values, half-life, CYP enzymes, canonical SMILES, PubChem CID.
    - *Detection & Clearance*: Immunoassay cross-reactivity %, detection duration, urinary excretion.
    - *Safety & Hazards*: Black box warnings, poly-drug interactions, side effects breakdown.
  - Keep sticky footer buttons for quick logging or navigating to Dosage Calculator.

---

## 3. Verification Plan

### Automated Verification
- Run `compile_applet` to ensure zero compilation or syntax errors.
- Run `lint_applet` to verify strict TypeScript adherence.
- Run `npm run build` to confirm production bundling.

### Interactive Visual Verification
- Verify the Library view presents a clean, dense, responsive grid without walls of text.
- Verify clicking `[Details]` opens the full-screen modal with tabs.
- Verify switching between tabs presents all recreational, pharmacological, clearance, and safety details smoothly.
