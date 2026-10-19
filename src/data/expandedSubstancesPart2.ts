import { CannabinoidProfile } from './cannabinoids';

export const EXPANDED_SUBSTANCES_PART2: CannabinoidProfile[] = [
  {
    "id": "heroin",
    "name": "Heroin (Diacetylmorphine · Diamorphine)",
    "shortName": "Heroin (Diacetylmorphine)",
    "synonyms": [
      "Diamorphine",
      "Diacetylmorphine",
      "Smack",
      "H",
      "Diaphin"
    ],
    "classification": "Opioid Analgesic",
    "riskTier": "Extreme",
    "pubchemCid": 5462328,
    "molecularFormula": "C21H23NO5",
    "molecularWeight": 369.41,
    "canonicalSmiles": "CC(=O)OC1C=CC2C3CC4=C5C2(C1OC5=C(C=C4)OC(=O)C)CCN3C",
    "xLogP": 1.5,
    "cb1KiNm": 4,
    "cb2KiNm": 0,
    "cb1Efficacy": "Lipophilic 3,6-Diacetyl Prodrug → Rapid Brain Hydrolysis to 6-MAM & Morphine (MOR Full Agonist)",
    "cb2Efficacy": "Potent μ-Opioid Receptor Agonist",
    "relativePotencyVsD9": 4.5,
    "psychoactive": true,
    "alkylChainLength": "3,6-Diacetylmorphine",
    "cypEnzymes": [
      "Plasma/Brain Carboxylesterases",
      "UGT2B7"
    ],
    "primaryMetabolite": "6-Monoacetylmorphine (6-MAM) & Morphine",
    "immunoassayCrossReactivityPct": 95,
    "terminalHalfLifeHours": 3.5,
    "inhaledOnsetMinutes": [
      1,
      3
    ],
    "inhaledDurationHours": [
      3,
      5
    ],
    "oralOnsetMinutes": [
      15,
      30
    ],
    "oralDurationHours": [
      4,
      6
    ],
    "baseOralThresholdMg": 5,
    "baseInhaledThresholdMg": 2,
    "radarProfile": {
      "cb1AffinityScore": 95,
      "euphoriaPotency": 98,
      "somaticSedation": 96,
      "anxiogenicRisk": 12,
      "durationPersistence": 38,
      "lipidRetention": 24
    },
    "summary": "3,6-Diacetylated ester prodrug of morphine (Diamorphine). Dual acetyl groups mask morphine’s polar phenolic and allylic hydroxyls, increasing lipophilicity ~100x to flash across the blood-brain barrier before instant deacetylation into active 6-monoacetylmorphine (6-MAM) and morphine.",
    "pharmacologyNotes": "Forensic urine screens identify unique 6-MAM for ~8–24 hours alongside morphine-3/6-glucuronides for 2–4 days.",
    "specificHazards": [
      "EXTREME RESPIRATORY DEPRESSION & FENTANYL/NITAZENE ADULTERATION HAZARD: Street supplies frequently contain lethal hotspots of fentanyl or nitazenes.",
      "Rapid physical dependence and fatal overdose risk when combined with benzodiazepines, alcohol, or gabapentinoids."
    ],
    "sideEffects": [
      {
        "effect": "Profound Euphoria, Miosis, Nodding & Fatal Respiratory Depression",
        "system": "Pulmonary",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "Lipophilic 3,6-Diacetyl Prodrug → Rapid Brain Hydrolysis to 6-MAM & Morphine (MOR Full Agonist)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Heroin (Diacetylmorphine)",
      "source": "PubChem CID 5462328",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/5462328"
    }
  },
  {
    "id": "o-dsmt",
    "name": "O-Desmethyltramadol (O-DSMT · M1 Active Tramadol Metabolite)",
    "shortName": "O-Desmethyltramadol (O-DSMT)",
    "synonyms": [
      "O-DSMT",
      "M1 Metabolite",
      "Desmetramadol"
    ],
    "classification": "Opioid Analgesic",
    "riskTier": "High",
    "pubchemCid": 130829,
    "molecularFormula": "C15H23NO2",
    "molecularWeight": 249.35,
    "canonicalSmiles": "CN(C)CC1CCCCC1(C2=CC(=CC=C2)O)O",
    "xLogP": 1.7,
    "cb1KiNm": 18,
    "cb2KiNm": 0,
    "cb1Efficacy": "Direct μ-Opioid Agonist (~200x Parent Tramadol MOR Affinity) + (-)-Isomer NRI",
    "cb2Efficacy": "Bypass-CYP2D6 Active Tramadol Metabolite",
    "relativePotencyVsD9": 1.8,
    "psychoactive": true,
    "alkylChainLength": "3-[2-[(Dimethylamino)methyl]-1-hydroxycyclohexyl]phenol",
    "cypEnzymes": [
      "UGT2B7",
      "CYP3A4"
    ],
    "primaryMetabolite": "O-DSMT-Glucuronide & N,O-Didesmethyltramadol",
    "immunoassayCrossReactivityPct": 80,
    "terminalHalfLifeHours": 7,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      4,
      6
    ],
    "oralOnsetMinutes": [
      20,
      40
    ],
    "oralDurationHours": [
      6,
      9
    ],
    "baseOralThresholdMg": 5,
    "baseInhaledThresholdMg": 3,
    "radarProfile": {
      "cb1AffinityScore": 78,
      "euphoriaPotency": 82,
      "somaticSedation": 74,
      "anxiogenicRisk": 18,
      "durationPersistence": 56,
      "lipidRetention": 22
    },
    "summary": "Primary active phenolic metabolite of tramadol (M1). Unlike parent tramadol, O-DSMT binds directly to μ-opioid receptors without requiring CYP2D6 bioactivation and lacks parent tramadol’s SERT blockade, substantially reducing seizure risk while delivering reliable 6–9 hour analgesia.",
    "pharmacologyNotes": "Cleared primarily via Phase II UGT2B7 glucuronidation with a ~7-hour half-life.",
    "specificHazards": [
      "Dose-dependent respiratory depression; (-)-enantiomer retains norepinephrine reuptake inhibition.",
      "Long 6–9 hour duration can cause cumulative sedation on redosing."
    ],
    "sideEffects": [
      {
        "effect": "Warm 7-Hour Opioid Euphoria, Itching & Late Sedation",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Direct μ-Opioid Agonist (~200x Parent Tramadol MOR Affinity) + (-)-Isomer NRI"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · O-Desmethyltramadol (O-DSMT)",
      "source": "PubChem CID 130829",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/130829"
    }
  },
  {
    "id": "sufentanil",
    "name": "Sufentanil (Sufenta · Dsuvia · Thienyl Fentanyl Analog)",
    "shortName": "Sufentanil",
    "synonyms": [
      "Sufenta",
      "Dsuvia",
      "R30730"
    ],
    "classification": "Opioid Analgesic",
    "riskTier": "Extreme",
    "pubchemCid": 41693,
    "molecularFormula": "C22H30N2O2S",
    "molecularWeight": 386.55,
    "canonicalSmiles": "CCC(=O)N(C1=CC=CC=C1)C2(CCN(CC2)CCC3=CC=CS3)COC",
    "xLogP": 3.9,
    "cb1KiNm": 0.14,
    "cb2KiNm": 0,
    "cb1Efficacy": "Ultra-Potent Selective μ-Opioid Full Agonist (~5–10x Fentanyl / ~500–1000x Morphine)",
    "cb2Efficacy": "4-Methoxymethyl-Thienylpiperidine Opioid",
    "relativePotencyVsD9": 8,
    "psychoactive": true,
    "alkylChainLength": "N-[4-(Methoxymethyl)-1-(2-thiophen-2-ylethyl)piperidin-4-yl]-N-phenylpropanamide",
    "cypEnzymes": [
      "CYP3A4"
    ],
    "primaryMetabolite": "N-Dealkylated Nor-sufentanil",
    "immunoassayCrossReactivityPct": 5,
    "terminalHalfLifeHours": 2.7,
    "inhaledOnsetMinutes": [
      1,
      3
    ],
    "inhaledDurationHours": [
      0.5,
      1.5
    ],
    "oralOnsetMinutes": [
      10,
      20
    ],
    "oralDurationHours": [
      1,
      2.5
    ],
    "baseOralThresholdMg": 0.002,
    "baseInhaledThresholdMg": 0.001,
    "radarProfile": {
      "cb1AffinityScore": 99,
      "euphoriaPotency": 92,
      "somaticSedation": 99,
      "anxiogenicRisk": 15,
      "durationPersistence": 18,
      "lipidRetention": 44
    },
    "summary": "Hospital ICU and sublingual surgical opioid (Sufenta / Dsuvia) roughly 5–10x more potent than fentanyl (threshold ~1–2 µg = 0.001–0.002 mg). Exhibits the highest therapeutic index in preclinical models among fentanyls but causes immediate human apnea at microgram doses.",
    "pharmacologyNotes": "High lipophilicity (xLogP 3.9) enables rapid sublingual/mucosal equilibration within minutes.",
    "specificHazards": [
      "MICROGRAM LETHALITY: 10–30 µg (0.01–0.03 mg) can induce complete respiratory arrest and wooden-chest muscle rigidity in non-tolerant individuals."
    ],
    "sideEffects": [
      {
        "effect": "Immediate Microgram Anesthesia, Chest Wall Rigidity & Apnea",
        "system": "Pulmonary",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "Ultra-Potent Selective μ-Opioid Full Agonist (~5–10x Fentanyl / ~500–1000x Morphine)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Sufentanil",
      "source": "PubChem CID 41693",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/41693"
    }
  },
  {
    "id": "alfentanil",
    "name": "Alfentanil (Alfenta · Rapifen · Tetrazole Fentanyl Analog)",
    "shortName": "Alfentanil",
    "synonyms": [
      "Alfenta",
      "Rapifen",
      "R39209"
    ],
    "classification": "Opioid Analgesic",
    "riskTier": "Extreme",
    "pubchemCid": 51263,
    "molecularFormula": "C21H32N6O3",
    "molecularWeight": 416.52,
    "canonicalSmiles": "CCC(=O)N(C1=CC=CC=C1)C2(CCN(CC2)CCN3C(=O)N(N=N3)CC)COC",
    "xLogP": 2.2,
    "cb1KiNm": 1.8,
    "cb2KiNm": 0,
    "cb1Efficacy": "Ultra-Rapid Onset μ-Opioid Agonist (~1/4 Fentanyl Potency; pKa 6.5 → 89% Un-ionized at pH 7.4)",
    "cb2Efficacy": "Low-pKa Fast-Equilibrating Anilidopiperidine",
    "relativePotencyVsD9": 4.5,
    "psychoactive": true,
    "alkylChainLength": "Tetrazole-Substituted Methoxymethyl-Fentanyl",
    "cypEnzymes": [
      "CYP3A4"
    ],
    "primaryMetabolite": "Noralfentanil",
    "immunoassayCrossReactivityPct": 5,
    "terminalHalfLifeHours": 1.5,
    "inhaledOnsetMinutes": [
      0.5,
      2
    ],
    "inhaledDurationHours": [
      0.3,
      0.8
    ],
    "oralOnsetMinutes": [
      5,
      15
    ],
    "oralDurationHours": [
      0.5,
      1.2
    ],
    "baseOralThresholdMg": 0.1,
    "baseInhaledThresholdMg": 0.05,
    "radarProfile": {
      "cb1AffinityScore": 90,
      "euphoriaPotency": 85,
      "somaticSedation": 92,
      "anxiogenicRisk": 15,
      "durationPersistence": 10,
      "lipidRetention": 20
    },
    "summary": "Anilidopiperidine surgical opioid (~1/4 to 1/5 as potent as fentanyl, threshold ~50 µg = 0.05 mg). Because its pKa is 6.5, 89% of the drug is un-ionized at physiological blood pH 7.4, allowing it to cross the blood-brain barrier 4x faster than fentanyl despite lower lipophilicity.",
    "pharmacologyNotes": "Metabolized exclusively via hepatic CYP3A4 with a short 90-minute half-life.",
    "specificHazards": [
      "Instantaneous respiratory depression and bradycardia."
    ],
    "sideEffects": [
      {
        "effect": "60-Second Peak Opioid Rush & Short Duration",
        "system": "Pulmonary",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "Ultra-Rapid Onset μ-Opioid Agonist (~1/4 Fentanyl Potency; pKa 6.5 → 89% Un-ionized at pH 7.4)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Alfentanil",
      "source": "PubChem CID 51263",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/51263"
    }
  },
  {
    "id": "remifentanil",
    "name": "Remifentanil (Ultiva · Esterase-Cleaved Ultra-Short Opioid)",
    "shortName": "Remifentanil",
    "synonyms": [
      "Ultiva",
      "GI-87084B"
    ],
    "classification": "Opioid Analgesic",
    "riskTier": "Extreme",
    "pubchemCid": 60815,
    "molecularFormula": "C20H28N2O5",
    "molecularWeight": 376.45,
    "canonicalSmiles": "CCC(=O)N(C1=CC=CC=C1)C2(CCN(CC2)CCC(=O)OC)C(=O)OC",
    "xLogP": 1.4,
    "cb1KiNm": 1.2,
    "cb2KiNm": 0,
    "cb1Efficacy": "Ultra-Short μ-Opioid Agonist (Cleaved by Blood/Tissue Esterases; Context-Sensitive t½ ~3–4 min)",
    "cb2Efficacy": "Methyl Ester Soft-Drug Fentanyl Analog",
    "relativePotencyVsD9": 5.5,
    "psychoactive": true,
    "alkylChainLength": "Methyl 1-(3-methoxy-3-oxopropyl)-4-(N-phenylpropanamido)piperidine-4-carboxylate",
    "cypEnzymes": [
      "Non-Specific Blood & Tissue Esterases"
    ],
    "primaryMetabolite": "Remifentanil Acid (GI-90291 — 1/4600th Potency)",
    "immunoassayCrossReactivityPct": 0,
    "terminalHalfLifeHours": 0.25,
    "inhaledOnsetMinutes": [
      0.5,
      1.5
    ],
    "inhaledDurationHours": [
      0.1,
      0.25
    ],
    "oralOnsetMinutes": [
      5,
      10
    ],
    "oralDurationHours": [
      0.2,
      0.4
    ],
    "baseOralThresholdMg": 0.025,
    "baseInhaledThresholdMg": 0.01,
    "radarProfile": {
      "cb1AffinityScore": 94,
      "euphoriaPotency": 86,
      "somaticSedation": 95,
      "anxiogenicRisk": 18,
      "durationPersistence": 4,
      "lipidRetention": 10
    },
    "summary": "Unique \"soft-drug\" methyl ester analog of fentanyl (~1–2x fentanyl potency, threshold ~10 µg = 0.01 mg) that is rapidly hydrolyzed by non-specific blood and tissue esterases, giving an elimination half-life of just 3–10 minutes regardless of infusion duration.",
    "pharmacologyNotes": "Independent of liver or kidney function.",
    "specificHazards": [
      "Apnea and severe chest wall rigidity occur within 60 seconds; effects vanish within 10 minutes of stopping."
    ],
    "sideEffects": [
      {
        "effect": "Ultra-Brief 10-Minute Opioid Peak & Apnea Risk",
        "system": "Pulmonary",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "Ultra-Short μ-Opioid Agonist (Cleaved by Blood/Tissue Esterases; Context-Sensitive t½ ~3–4 min)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Remifentanil",
      "source": "PubChem CID 60815",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/60815"
    }
  },
  {
    "id": "meperidine",
    "name": "Meperidine (Pethidine · Demerol · Phenylpiperidine Opioid)",
    "shortName": "Meperidine",
    "synonyms": [
      "Pethidine",
      "Demerol",
      "Dolantin"
    ],
    "classification": "Opioid Analgesic",
    "riskTier": "High",
    "pubchemCid": 4058,
    "molecularFormula": "C15H21NO2",
    "molecularWeight": 247.33,
    "canonicalSmiles": "CCOC(=O)C1(CCN(CC1)C)C2=CC=CC=C2",
    "xLogP": 2.5,
    "cb1KiNm": 120,
    "cb2KiNm": 0,
    "cb1Efficacy": "μ-Opioid Agonist (~1/10th Morphine) + Serotonin Reuptake Inhibitor & Anticholinergic",
    "cb2Efficacy": "Archetypal Synthetic Phenylpiperidine Opioid",
    "relativePotencyVsD9": 0.5,
    "psychoactive": true,
    "alkylChainLength": "Ethyl 1-methyl-4-phenylpiperidine-4-carboxylate",
    "cypEnzymes": [
      "CYP2B6",
      "CYP3A4",
      "CES1"
    ],
    "primaryMetabolite": "Normeperidine (Neurotoxic Convulsant Metabolite; t½ ~15–30h)",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 3.5,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      1.5,
      3
    ],
    "oralOnsetMinutes": [
      20,
      40
    ],
    "oralDurationHours": [
      2,
      4
    ],
    "baseOralThresholdMg": 15,
    "baseInhaledThresholdMg": 10,
    "radarProfile": {
      "cb1AffinityScore": 58,
      "euphoriaPotency": 78,
      "somaticSedation": 65,
      "anxiogenicRisk": 48,
      "durationPersistence": 28,
      "lipidRetention": 24
    },
    "summary": "First fully synthetic opioid (synthesized 1939; Demerol / Pethidine). Possesses ~10% of morphine’s analgesic potency alongside anticholinergic (atropine-like) and serotonin-reuptake-inhibiting properties.",
    "pharmacologyNotes": "N-demethylated via CYP2B6/3A4 to normeperidine, a CNS-excitatory metabolite with a 15–30 hour half-life.",
    "specificHazards": [
      "LETHAL MAOI & SEROTONIN SYNDROME INTERACTION: Co-administration with MAOIs or SSRIs causes fatal serotonin syndrome.",
      "Repeated dosing accumulates neurotoxic normeperidine, causing tremors, myoclonus, and grand mal seizures."
    ],
    "sideEffects": [
      {
        "effect": "Upbeat Atropine-Tinged Opioid Rush & Normeperidine Seizure Risk",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "μ-Opioid Agonist (~1/10th Morphine) + Serotonin Reuptake Inhibitor & Anticholinergic"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Meperidine",
      "source": "PubChem CID 4058",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/4058"
    }
  },
  {
    "id": "tianeptine",
    "name": "Tianeptine (Stablon · Coaxil · Atypical Tricyclic MOR Agonist)",
    "shortName": "Tianeptine",
    "synonyms": [
      "Stablon",
      "Coaxil",
      "Tatinol",
      "ZaZa"
    ],
    "classification": "Opioid Analgesic",
    "riskTier": "High",
    "pubchemCid": 68870,
    "molecularFormula": "C21H25ClN2O4S",
    "molecularWeight": 436.95,
    "canonicalSmiles": "CN1C2=CC=CC=C2S(=O)(=O)N(C3=C1C=CC(=C3)Cl)CCCCCCC(=O)O",
    "xLogP": 1.1,
    "cb1KiNm": 383,
    "cb2KiNm": 0,
    "cb1Efficacy": "Selective μ-Opioid Receptor Full Agonist (EC50 ~194–383 nM) & Glutamatergic AMPA/NMDA Modulator",
    "cb2Efficacy": "Atypical Tricyclic Antidepressant / Opioid",
    "relativePotencyVsD9": 0.6,
    "psychoactive": true,
    "alkylChainLength": "Heptanoic Acid-Substituted Dibenzothiazepine",
    "cypEnzymes": [
      "Mitochondrial β-Oxidation (Not CYP450)"
    ],
    "primaryMetabolite": "MC5 (Pentanoic Acid Side-Chain Active Metabolite)",
    "immunoassayCrossReactivityPct": 0,
    "terminalHalfLifeHours": 2.5,
    "inhaledOnsetMinutes": [
      10,
      20
    ],
    "inhaledDurationHours": [
      1.5,
      2.5
    ],
    "oralOnsetMinutes": [
      15,
      30
    ],
    "oralDurationHours": [
      2,
      3.5
    ],
    "baseOralThresholdMg": 12.5,
    "baseInhaledThresholdMg": 10,
    "radarProfile": {
      "cb1AffinityScore": 62,
      "euphoriaPotency": 84,
      "somaticSedation": 58,
      "anxiogenicRisk": 42,
      "durationPersistence": 22,
      "lipidRetention": 16
    },
    "summary": "Atypical tricyclic antidepressant (prescribed at 12.5 mg TID as Stablon/Coaxil) discovered in 2014 to act as a direct full agonist at the human μ-opioid receptor. Metabolized via mitochondrial β-oxidation rather than hepatic CYP450 enzymes.",
    "pharmacologyNotes": "Sodium salt absorbs in 15–20 minutes and clears in 2–3 hours; Sulfate salt absorbs slowly over 4–6 hours.",
    "specificHazards": [
      "SEVERE RAPID DEPENDENCE: Supratherapeutic doses (100+ mg) produce intense, short-lived oxycodone-like euphoria followed by rapid tolerance and severe opioid-plus-tricyclic withdrawal."
    ],
    "sideEffects": [
      {
        "effect": "Fast 2-Hour Oxycodone-Like Warmth & Rapid Rebound Craving",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Selective μ-Opioid Receptor Full Agonist (EC50 ~194–383 nM) & Glutamatergic AMPA/NMDA Modulator"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Tianeptine",
      "source": "PubChem CID 68870",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/68870"
    }
  },
  {
    "id": "mitragynine",
    "name": "Mitragynine (Kratom Primary Alkaloid · Mitragyna speciosa)",
    "shortName": "Mitragynine (Kratom)",
    "synonyms": [
      "Kratom",
      "Biak-Biak",
      "Maeng Da",
      "9-Methoxycorynantheidine"
    ],
    "classification": "Opioid Analgesic",
    "riskTier": "Moderate",
    "pubchemCid": 3034396,
    "molecularFormula": "C23H30N2O4",
    "molecularWeight": 398.5,
    "canonicalSmiles": "CCC1CN2CCC3=C(C2CC1C(=COC)C(=O)OC)NC4=C3C(=CC=C4)OC",
    "xLogP": 4.1,
    "cb1KiNm": 230,
    "cb2KiNm": 0,
    "cb1Efficacy": "G-Protein-Biased Partial μ-Opioid Agonist (Minimal β-Arrestin-2 Recruitment) + α2-Adrenergic Agonist",
    "cb2Efficacy": "Corynanthe-Type Indole Alkaloid",
    "relativePotencyVsD9": 0.25,
    "psychoactive": true,
    "alkylChainLength": "Indole Alkaloid (Mitragyna speciosa)",
    "cypEnzymes": [
      "CYP3A4 (Converts ~2–5% to 7-Hydroxymitragynine)",
      "CYP2D6"
    ],
    "primaryMetabolite": "7-Hydroxymitragynine (Active Metabolite) & 9-O-Demethylmitragynine",
    "immunoassayCrossReactivityPct": 0,
    "terminalHalfLifeHours": 24,
    "inhaledOnsetMinutes": [
      10,
      20
    ],
    "inhaledDurationHours": [
      2,
      4
    ],
    "oralOnsetMinutes": [
      20,
      45
    ],
    "oralDurationHours": [
      3,
      6
    ],
    "baseOralThresholdMg": 10,
    "baseInhaledThresholdMg": 10,
    "radarProfile": {
      "cb1AffinityScore": 52,
      "euphoriaPotency": 68,
      "somaticSedation": 54,
      "anxiogenicRisk": 24,
      "durationPersistence": 46,
      "lipidRetention": 38
    },
    "summary": "Primary indole alkaloid (~66% of total alkaloids) in Southeast Asian Mitragyna speciosa (Kratom) leaves (~10–15 mg mitragynine per 1 gram of dried leaf). Acts as a G-protein-biased partial MOR agonist and CYP3A4 prodrug to potent 7-hydroxymitragynine.",
    "pharmacologyNotes": "Does not recruit β-arrestin-2 significantly, yielding a ceiling on respiratory depression when used alone.",
    "specificHazards": [
      "Inhibits CYP2D6 and CYP3A4; combining high-dose extracts with CNS depressants or tramadol can cause severe toxicity.",
      "Daily use causes physical opioid withdrawal."
    ],
    "sideEffects": [
      {
        "effect": "Dose-Dependent Stimulant-to-Opioid Warmth, Nausea (\"Wobbles\") & Miosis",
        "system": "Gastrointestinal",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "G-Protein-Biased Partial μ-Opioid Agonist (Minimal β-Arrestin-2 Recruitment) + α2-Adrenergic Agonist"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Mitragynine (Kratom)",
      "source": "PubChem CID 3034396",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/3034396"
    }
  },
  {
    "id": "7-hydroxymitragynine",
    "name": "7-Hydroxymitragynine (7-OH · Active Kratom Terpenoid Indole)",
    "shortName": "7-Hydroxymitragynine",
    "synonyms": [
      "7-OH",
      "7-OH-MG",
      "7-Hydroxymitragynine Extract"
    ],
    "classification": "Opioid Analgesic",
    "riskTier": "High",
    "pubchemCid": 44301524,
    "molecularFormula": "C23H30N2O5",
    "molecularWeight": 414.5,
    "canonicalSmiles": "CCC1CN2CCC3=C(C2CC1C(=COC)C(=O)OC)N=C4C3(C(=CC=C4)OC)O",
    "xLogP": 2.8,
    "cb1KiNm": 13.5,
    "cb2KiNm": 0,
    "cb1Efficacy": "High-Potency Partial-to-Full μ-Opioid Agonist (~10–13x Oral Morphine Potency; Ki ~13.5 nM)",
    "cb2Efficacy": "C7-Hydroxylated Active Mitragynine Metabolite",
    "relativePotencyVsD9": 2.5,
    "psychoactive": true,
    "alkylChainLength": "7-Hydroxy-9-methoxycorynantheidine",
    "cypEnzymes": [
      "CYP3A4",
      "UGT"
    ],
    "primaryMetabolite": "Mitragynine Pseudoindoxyl (Blood Rearrangement Product — ~3x Stronger)",
    "immunoassayCrossReactivityPct": 0,
    "terminalHalfLifeHours": 3.5,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      2,
      3.5
    ],
    "oralOnsetMinutes": [
      15,
      30
    ],
    "oralDurationHours": [
      3,
      5
    ],
    "baseOralThresholdMg": 1,
    "baseInhaledThresholdMg": 0.5,
    "radarProfile": {
      "cb1AffinityScore": 86,
      "euphoriaPotency": 88,
      "somaticSedation": 78,
      "anxiogenicRisk": 22,
      "durationPersistence": 34,
      "lipidRetention": 28
    },
    "summary": "C7-hydroxylated active oxidative metabolite and trace leaf constituent (<0.05% of natural leaf) of Kratom. Exhibits ~10–13x the oral analgesic potency of morphine and rearranges in human plasma into even more potent mitragynine pseudoindoxyl.",
    "pharmacologyNotes": "Rapidly absorbed sublingually/orally (threshold 1.0 mg; common tablet 7–15 mg).",
    "specificHazards": [
      "Isolated 7-OH tablets (14–20 mg) bypass natural leaf ceilings, causing rapid tolerance and severe oxycodone-scale withdrawal within days."
    ],
    "sideEffects": [
      {
        "effect": "Potent Oxycodone-Scale Euphoria, Pinpoint Pupils & Rapid Tolerance",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "High-Potency Partial-to-Full μ-Opioid Agonist (~10–13x Oral Morphine Potency; Ki ~13.5 nM)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · 7-Hydroxymitragynine",
      "source": "PubChem CID 44301524",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/44301524"
    }
  },
  {
    "id": "levorphanol",
    "name": "Levorphanol (Levo-Dromoran · L-3-Hydroxy-N-methylmorphinan)",
    "shortName": "Levorphanol",
    "synonyms": [
      "Levo-Dromoran",
      "Levorphan"
    ],
    "classification": "Opioid Analgesic",
    "riskTier": "Extreme",
    "pubchemCid": 5359272,
    "molecularFormula": "C17H23NO",
    "molecularWeight": 257.37,
    "canonicalSmiles": "CN1CCC23CCCCC2C1CC4=C3C=C(C=C4)O",
    "xLogP": 3.1,
    "cb1KiNm": 0.42,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent μ / δ / κ-Opioid Agonist (~4–8x Morphine) + NMDA Receptor Antagonist + SNRI",
    "cb2Efficacy": "Levorotatory Enantiomer of Racemorphan (DXM Stereoisomer)",
    "relativePotencyVsD9": 3.5,
    "psychoactive": true,
    "alkylChainLength": "(-)-3-Hydroxy-N-methylmorphinan",
    "cypEnzymes": [
      "UGT2B7"
    ],
    "primaryMetabolite": "Levorphanol-3-Glucuronide",
    "immunoassayCrossReactivityPct": 25,
    "terminalHalfLifeHours": 14,
    "inhaledOnsetMinutes": [
      10,
      20
    ],
    "inhaledDurationHours": [
      5,
      8
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      6,
      12
    ],
    "baseOralThresholdMg": 0.5,
    "baseInhaledThresholdMg": 0.25,
    "radarProfile": {
      "cb1AffinityScore": 92,
      "euphoriaPotency": 88,
      "somaticSedation": 86,
      "anxiogenicRisk": 20,
      "durationPersistence": 78,
      "lipidRetention": 36
    },
    "summary": "Levorotatory enantiomer of racemorphan (whereas the dextrorotatory isomer is DXO/DXM). Combines sub-nanomolar μ-opioid agonism (~4–8x morphine potency) with non-competitive NMDA antagonism and serotonin/norepinephrine reuptake inhibition.",
    "pharmacologyNotes": "Long 11–16 hour terminal half-life exceeds its 6–8 hour analgesic duration.",
    "specificHazards": [
      "CUMULATIVE OVERDOSE HAZARD: Like methadone, plasma half-life (11–16 h) is longer than analgesic duration, causing delayed respiratory depression on day 2–3 of repeated dosing."
    ],
    "sideEffects": [
      {
        "effect": "Long-Acting Morphinan Analgesia, Sedation & Cumulative Respiratory Risk",
        "system": "Pulmonary",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "Potent μ / δ / κ-Opioid Agonist (~4–8x Morphine) + NMDA Receptor Antagonist + SNRI"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Levorphanol",
      "source": "PubChem CID 5359272",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/5359272"
    }
  },
  {
    "id": "dextromoramide",
    "name": "Dextromoramide (Palfium · Jetrium · R-875)",
    "shortName": "Dextromoramide",
    "synonyms": [
      "Palfium",
      "Jetrium",
      "Dimorlin",
      "MCP-875"
    ],
    "classification": "Opioid Analgesic",
    "riskTier": "Extreme",
    "pubchemCid": 9449,
    "molecularFormula": "C25H32N2O2",
    "molecularWeight": 392.53,
    "canonicalSmiles": "CC(CN1CCCC1)C(C2=CC=CC=C2)(C3=CC=CC=C3)C(=O)N4CCOCC4",
    "xLogP": 3.5,
    "cb1KiNm": 0.8,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent Full μ-Opioid Agonist (~3x Morphine with ~90% Oral Bioavailability)",
    "cb2Efficacy": "Diphenylpropylamine Pyrrolidine/Morpholine Opioid",
    "relativePotencyVsD9": 4,
    "psychoactive": true,
    "alkylChainLength": "(+)-1-(3-Methyl-4-morpholino-2,2-diphenylbutyryl)pyrrolidine",
    "cypEnzymes": [
      "CYP3A4"
    ],
    "primaryMetabolite": "N-Dealkylated & Hydroxylated Metabolites",
    "immunoassayCrossReactivityPct": 0,
    "terminalHalfLifeHours": 3.5,
    "inhaledOnsetMinutes": [
      3,
      8
    ],
    "inhaledDurationHours": [
      2,
      3.5
    ],
    "oralOnsetMinutes": [
      10,
      20
    ],
    "oralDurationHours": [
      3,
      5
    ],
    "baseOralThresholdMg": 1.5,
    "baseInhaledThresholdMg": 1,
    "radarProfile": {
      "cb1AffinityScore": 94,
      "euphoriaPotency": 98,
      "somaticSedation": 88,
      "anxiogenicRisk": 14,
      "durationPersistence": 32,
      "lipidRetention": 38
    },
    "summary": "Diphenylpropylamine structural relative of methadone (Palfium, synthesized by Paul Janssen in 1956). Famous for possessing nearly 100% oral/sublingual bioavailability, producing an intravenous-like rush within 10–15 minutes of swallowing a tablet.",
    "pharmacologyNotes": "Unlike methadone, has a short 3–4 hour duration and minimal lipid accumulation.",
    "specificHazards": [
      "Legendary addiction liability due to its near-instantaneous oral/sublingual rush; potent respiratory depressant."
    ],
    "sideEffects": [
      {
        "effect": "Intense Oral/Sublingual Opioid Rush & Respiratory Depression",
        "system": "Pulmonary",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "Potent Full μ-Opioid Agonist (~3x Morphine with ~90% Oral Bioavailability)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Dextromoramide",
      "source": "PubChem CID 9449",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/9449"
    }
  },
  {
    "id": "dipipanone",
    "name": "Dipipanone (Diconal · Wellconal · Piperidine Methadone Analog)",
    "shortName": "Dipipanone",
    "synonyms": [
      "Diconal",
      "Wellconal",
      "Pipadone"
    ],
    "classification": "Opioid Analgesic",
    "riskTier": "Extreme",
    "pubchemCid": 10200,
    "molecularFormula": "C24H31NO",
    "molecularWeight": 349.51,
    "canonicalSmiles": "CCC(=O)C(CC(C)N1CCCCC1)(C2=CC=CC=C2)C3=CC=CC=C3",
    "xLogP": 4.6,
    "cb1KiNm": 2.5,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent μ-Opioid Receptor Full Agonist (Piperidine Ring Analog of Methadone)",
    "cb2Efficacy": "Diphenylheptanone Opioid",
    "relativePotencyVsD9": 2.5,
    "psychoactive": true,
    "alkylChainLength": "4,4-Diphenyl-6-(piperidin-1-yl)heptan-3-one",
    "cypEnzymes": [
      "CYP3A4",
      "CYP2B6"
    ],
    "primaryMetabolite": "Nor-dipipanone",
    "immunoassayCrossReactivityPct": 35,
    "terminalHalfLifeHours": 8,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      3,
      5
    ],
    "oralOnsetMinutes": [
      20,
      40
    ],
    "oralDurationHours": [
      4,
      6
    ],
    "baseOralThresholdMg": 2.5,
    "baseInhaledThresholdMg": 1.5,
    "radarProfile": {
      "cb1AffinityScore": 88,
      "euphoriaPotency": 94,
      "somaticSedation": 86,
      "anxiogenicRisk": 16,
      "durationPersistence": 48,
      "lipidRetention": 46
    },
    "summary": "Piperidine analog of methadone formerly compounded with cyclizine as Diconal / Wellconal. Produces a faster, more euphoric peak than methadone with a 4–6 hour analgesic duration.",
    "pharmacologyNotes": "High lipophilicity (xLogP 4.6).",
    "specificHazards": [
      "Crushing and injecting Diconal tablets causes severe venous sclerosis and pulmonary granulomas; high respiratory depression risk."
    ],
    "sideEffects": [
      {
        "effect": "Heavy Euphoric Rush, Sedation & Respiratory Depression",
        "system": "Pulmonary",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "Potent μ-Opioid Receptor Full Agonist (Piperidine Ring Analog of Methadone)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Dipipanone",
      "source": "PubChem CID 10200",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/10200"
    }
  },
  {
    "id": "ketobemidone",
    "name": "Ketobemidone (Ketogan · Cliradon · Hydroxyphenylpiperidine + NMDA Blocker)",
    "shortName": "Ketobemidone",
    "synonyms": [
      "Ketogan",
      "Cliradon",
      "Cymidon"
    ],
    "classification": "Opioid Analgesic",
    "riskTier": "Extreme",
    "pubchemCid": 22266,
    "molecularFormula": "C15H21NO2",
    "molecularWeight": 247.33,
    "canonicalSmiles": "CCC(=O)C1(CCN(CC1)C)C2=CC(=CC=C2)O",
    "xLogP": 2,
    "cb1KiNm": 2.2,
    "cb2KiNm": 0,
    "cb1Efficacy": "Dual μ-Opioid Full Agonist (~1–2x Morphine) + Non-Competitive NMDA Receptor Antagonist",
    "cb2Efficacy": "meta-Hydroxyphenylpiperidine Opioid",
    "relativePotencyVsD9": 2.5,
    "psychoactive": true,
    "alkylChainLength": "1-[4-(3-Hydroxyphenyl)-1-methylpiperidin-4-yl]propan-1-one",
    "cypEnzymes": [
      "UGT2B7",
      "CYP2C9",
      "CYP3A4"
    ],
    "primaryMetabolite": "Ketobemidone-Glucuronide & Norketobemidone",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 2.8,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      2,
      3.5
    ],
    "oralOnsetMinutes": [
      15,
      30
    ],
    "oralDurationHours": [
      3,
      5
    ],
    "baseOralThresholdMg": 2.5,
    "baseInhaledThresholdMg": 1.5,
    "radarProfile": {
      "cb1AffinityScore": 88,
      "euphoriaPotency": 94,
      "somaticSedation": 82,
      "anxiogenicRisk": 15,
      "durationPersistence": 30,
      "lipidRetention": 22
    },
    "summary": "3-Hydroxyphenylpiperidine opioid (Ketogan, clinically used in Scandinavia). Uniquely combines morphine-equivalent μ-opioid agonism with significant NMDA receptor antagonism, making it highly effective against refractory neuropathic pain.",
    "pharmacologyNotes": "Elimination half-life ~2.5–3.5 hours.",
    "specificHazards": [
      "Very high psychological and physical addiction potential; severe respiratory depression on overdose."
    ],
    "sideEffects": [
      {
        "effect": "Euphoric Dual MOR + NMDA Analgesia & Respiratory Depression",
        "system": "Pulmonary",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "Dual μ-Opioid Full Agonist (~1–2x Morphine) + Non-Competitive NMDA Receptor Antagonist"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Ketobemidone",
      "source": "PubChem CID 22266",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/22266"
    }
  },
  {
    "id": "piritramide",
    "name": "Piritramide (Dipidolor · R-3365 · Bipiperidine Opioid)",
    "shortName": "Piritramide",
    "synonyms": [
      "Dipidolor",
      "Piridolan",
      "R-3365"
    ],
    "classification": "Opioid Analgesic",
    "riskTier": "High",
    "pubchemCid": 13344,
    "molecularFormula": "C27H34N4O",
    "molecularWeight": 430.59,
    "canonicalSmiles": "C1CCN(CC1)C2(CCN(CC2)CCC(C#N)(C3=CC=CC=C3)C4=CC=CC=C4)C(=O)N",
    "xLogP": 3.8,
    "cb1KiNm": 3.5,
    "cb2KiNm": 0,
    "cb1Efficacy": "Selective μ-Opioid Agonist (~0.75x Morphine Potency with Low Histamine Release)",
    "cb2Efficacy": "4-Carbamoyl-4-piperidinopiperidine Diphenylbutyronitrile",
    "relativePotencyVsD9": 1.8,
    "psychoactive": true,
    "alkylChainLength": "1'-(3-Cyano-3,3-diphenylpropyl)-[1,4'-bipiperidine]-4'-carboxamide",
    "cypEnzymes": [
      "CYP3A4"
    ],
    "primaryMetabolite": "Carboxylated & N-dealkylated metabolites",
    "immunoassayCrossReactivityPct": 0,
    "terminalHalfLifeHours": 7.5,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      4,
      6
    ],
    "oralOnsetMinutes": [
      20,
      40
    ],
    "oralDurationHours": [
      5,
      7
    ],
    "baseOralThresholdMg": 3,
    "baseInhaledThresholdMg": 2,
    "radarProfile": {
      "cb1AffinityScore": 80,
      "euphoriaPotency": 76,
      "somaticSedation": 88,
      "anxiogenicRisk": 12,
      "durationPersistence": 52,
      "lipidRetention": 38
    },
    "summary": "Synthetic diphenylpropylamine/bipiperidine post-operative opioid (Dipidolor, synthesized at Janssen in 1960 and widely used in Germany/Benelux). Delivers ~0.75x morphine potency for 5–7 hours with minimal histamine-induced itching or hypotension.",
    "pharmacologyNotes": "Plasma half-life ~6–10 hours.",
    "specificHazards": [
      "Pronounced respiratory depression and sedation; slow redistribution."
    ],
    "sideEffects": [
      {
        "effect": "Deep Sedating 6-Hour Analgesia with Minimal Itching",
        "system": "Pulmonary",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Selective μ-Opioid Agonist (~0.75x Morphine Potency with Low Histamine Release)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Piritramide",
      "source": "PubChem CID 13344",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/13344"
    }
  },
  {
    "id": "carfentanil",
    "name": "Carfentanil (Wildnil · 4-Carbomethoxyfentanyl)",
    "shortName": "Carfentanil",
    "synonyms": [
      "Wildnil",
      "R33799",
      "4-Carbomethoxyfentanyl"
    ],
    "classification": "Synthetic Opioid & Nitazene",
    "riskTier": "Extreme",
    "pubchemCid": 62156,
    "molecularFormula": "C24H30N2O3",
    "molecularWeight": 394.51,
    "canonicalSmiles": "CCC(=O)N(C1=CC=CC=C1)C2(CCN(CC2)CCC3=CC=CC=C3)C(=O)OC",
    "xLogP": 3.8,
    "cb1KiNm": 0.024,
    "cb2KiNm": 0,
    "cb1Efficacy": "Ultra-Potent Sub-Picomolar μ-Opioid Full Agonist (Ki = 0.024 nM — ~100x Fentanyl / ~10,000x Morphine)",
    "cb2Efficacy": "4-Methoxycarbonyl Anilidopiperidine",
    "relativePotencyVsD9": 10,
    "psychoactive": true,
    "alkylChainLength": "Methyl 1-(2-phenylethyl)-4-(N-phenylpropanamido)piperidine-4-carboxylate",
    "cypEnzymes": [
      "CYP3A4"
    ],
    "primaryMetabolite": "Norcarfentanil",
    "immunoassayCrossReactivityPct": 0,
    "terminalHalfLifeHours": 5.7,
    "inhaledOnsetMinutes": [
      1,
      3
    ],
    "inhaledDurationHours": [
      3,
      5
    ],
    "oralOnsetMinutes": [
      5,
      15
    ],
    "oralDurationHours": [
      4,
      7
    ],
    "baseOralThresholdMg": 0.0001,
    "baseInhaledThresholdMg": 0.0001,
    "radarProfile": {
      "cb1AffinityScore": 100,
      "euphoriaPotency": 85,
      "somaticSedation": 100,
      "anxiogenicRisk": 25,
      "durationPersistence": 48,
      "lipidRetention": 45
    },
    "summary": "Large-animal veterinary immobilizing agent (Wildnil) and one of the most potent opioids ever synthesized (~10,000x morphine, ~100x fentanyl). Active in humans at 0.1–1 microgram (0.0001–0.001 mg = 100 nanograms).",
    "pharmacologyNotes": "Tight receptor binding requires repeated high-dose (4–10+ mg) naloxone boluses to reverse.",
    "specificHazards": [
      "LETHAL AT MICROGRAM/NANOGRAM LEVELS: 10–20 micrograms (0.01–0.02 mg — invisible to the naked eye) is fatal in humans.",
      "High resistance to single-dose naloxone reversal due to picomolar receptor affinity (Ki = 0.024 nM)."
    ],
    "sideEffects": [
      {
        "effect": "Immediate Microgram Coma, Wooden-Chest Syndrome & Fatal Apnea",
        "system": "Pulmonary",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "Ultra-Potent Sub-Picomolar μ-Opioid Full Agonist (Ki = 0.024 nM — ~100x Fentanyl / ~10,000x Morphine)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Carfentanil",
      "source": "PubChem CID 62156",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/62156"
    }
  },
  {
    "id": "lofentanil",
    "name": "Lofentanil (cis-3-Methylcarfentanil · R34995)",
    "shortName": "Lofentanil",
    "synonyms": [
      "R34995",
      "(-)-cis-3-Methylcarfentanil"
    ],
    "classification": "Synthetic Opioid & Nitazene",
    "riskTier": "Extreme",
    "pubchemCid": 6432502,
    "molecularFormula": "C25H32N2O3",
    "molecularWeight": 408.53,
    "canonicalSmiles": "CCC(=O)N(C1=CC=CC=C1)C2(CCN(CC2C)CCC3=CC=CC=C3)C(=O)OC",
    "xLogP": 4.2,
    "cb1KiNm": 0.023,
    "cb2KiNm": 0,
    "cb1Efficacy": "Pseudo-Irreversible μ-Opioid Full Agonist (Ki = 0.023 nM; Dissociation t½ > 10 Hours)",
    "cb2Efficacy": "cis-3-Methyl-4-carbomethoxyfentanyl",
    "relativePotencyVsD9": 10,
    "psychoactive": true,
    "alkylChainLength": "Methyl (3R,4S)-3-methyl-1-(2-phenylethyl)-4-(N-phenylpropanamido)piperidine-4-carboxylate",
    "cypEnzymes": [
      "CYP3A4"
    ],
    "primaryMetabolite": "Norlofentanil",
    "immunoassayCrossReactivityPct": 0,
    "terminalHalfLifeHours": 12,
    "inhaledOnsetMinutes": [
      1,
      4
    ],
    "inhaledDurationHours": [
      8,
      14
    ],
    "oralOnsetMinutes": [
      10,
      20
    ],
    "oralDurationHours": [
      10,
      18
    ],
    "baseOralThresholdMg": 0.0005,
    "baseInhaledThresholdMg": 0.0005,
    "radarProfile": {
      "cb1AffinityScore": 100,
      "euphoriaPotency": 82,
      "somaticSedation": 100,
      "anxiogenicRisk": 25,
      "durationPersistence": 82,
      "lipidRetention": 50
    },
    "summary": "cis-3-Methyl derivative of carfentanil (R34995). Slightly more potent than carfentanil with extremely slow receptor dissociation kinetics, locking onto the μ-opioid receptor for 10–18 hours.",
    "pharmacologyNotes": "Outlasts naloxone half-life by many hours, causing recurrent renarcotization.",
    "specificHazards": [
      "EXTREME RENARCOTIZATION HAZARD: Receptor dissociation is so slow that patients revive briefly with naloxone and slip back into fatal apnea 45 minutes later."
    ],
    "sideEffects": [
      {
        "effect": "Prolonged 12-Hour Microgram Immobilization & Naloxone-Resistant Apnea",
        "system": "Pulmonary",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "Pseudo-Irreversible μ-Opioid Full Agonist (Ki = 0.023 nM; Dissociation t½ > 10 Hours)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Lofentanil",
      "source": "PubChem CID 6432502",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/6432502"
    }
  },
  {
    "id": "acetylfentanyl",
    "name": "Acetylfentanyl (Desmethylfentanyl · N-Phenylacetamide Analog)",
    "shortName": "Acetylfentanyl",
    "synonyms": [
      "Acetyl Fentanyl",
      "Desmethylfentanyl",
      "NIH 10485"
    ],
    "classification": "Synthetic Opioid & Nitazene",
    "riskTier": "Extreme",
    "pubchemCid": 117032,
    "molecularFormula": "C21H26N2O",
    "molecularWeight": 322.44,
    "canonicalSmiles": "CC(=O)N(C1=CC=CC=C1)C2CCN(CC2)CCC3=CC=CC=C3",
    "xLogP": 3.5,
    "cb1KiNm": 4.2,
    "cb2KiNm": 0,
    "cb1Efficacy": "Selective μ-Opioid Receptor Full Agonist (~1/3 Fentanyl / ~15–30x Morphine Potency)",
    "cb2Efficacy": "Acetamide Homolog of Fentanyl",
    "relativePotencyVsD9": 5,
    "psychoactive": true,
    "alkylChainLength": "N-Phenyl-N-[1-(2-phenylethyl)piperidin-4-yl]acetamide",
    "cypEnzymes": [
      "CYP3A4",
      "CYP2D6"
    ],
    "primaryMetabolite": "Noracetylfentanyl & 4'-Hydroxyacetylfentanyl",
    "immunoassayCrossReactivityPct": 65,
    "terminalHalfLifeHours": 3.5,
    "inhaledOnsetMinutes": [
      1,
      4
    ],
    "inhaledDurationHours": [
      1,
      2
    ],
    "oralOnsetMinutes": [
      10,
      25
    ],
    "oralDurationHours": [
      1.5,
      3
    ],
    "baseOralThresholdMg": 0.05,
    "baseInhaledThresholdMg": 0.03,
    "radarProfile": {
      "cb1AffinityScore": 94,
      "euphoriaPotency": 88,
      "somaticSedation": 92,
      "anxiogenicRisk": 18,
      "durationPersistence": 22,
      "lipidRetention": 36
    },
    "summary": "Acetamide homolog of fentanyl (one carbon shorter on the amide chain) with ~15–30x morphine potency (~1/3 fentanyl). Frequently encountered as an illicit fentanyl synthesis byproduct or standalone designer opioid.",
    "pharmacologyNotes": "Cross-reacts on standard fentanyl immunoassay strips.",
    "specificHazards": [
      "Narrow therapeutic margin (~30 µg threshold vs ~1–2 mg lethal dose in non-tolerant users)."
    ],
    "sideEffects": [
      {
        "effect": "Short-Acting Fentanyl-Like Sedation & Respiratory Depression",
        "system": "Pulmonary",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "Selective μ-Opioid Receptor Full Agonist (~1/3 Fentanyl / ~15–30x Morphine Potency)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Acetylfentanyl",
      "source": "PubChem CID 117032",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/117032"
    }
  },
  {
    "id": "butyrylfentanyl",
    "name": "Butyrylfentanyl (Butyrfentanyl · N-Butanoyl Analog)",
    "shortName": "Butyrylfentanyl",
    "synonyms": [
      "Butyrfentanyl",
      "BF",
      "NIH 10486"
    ],
    "classification": "Synthetic Opioid & Nitazene",
    "riskTier": "Extreme",
    "pubchemCid": 62562,
    "molecularFormula": "C23H30N2O",
    "molecularWeight": 350.5,
    "canonicalSmiles": "CCCC(=O)N(C1=CC=CC=C1)C2CCN(CC2)CCC3=CC=CC=C3",
    "xLogP": 4.4,
    "cb1KiNm": 3.2,
    "cb2KiNm": 0,
    "cb1Efficacy": "Selective μ-Opioid Full Agonist (~1/4 Fentanyl / ~25–30x Morphine Potency)",
    "cb2Efficacy": "Butanamide Homolog of Fentanyl",
    "relativePotencyVsD9": 5.2,
    "psychoactive": true,
    "alkylChainLength": "N-Phenyl-N-[1-(2-phenylethyl)piperidin-4-yl]butanamide",
    "cypEnzymes": [
      "CYP3A4"
    ],
    "primaryMetabolite": "Norbutyrylfentanyl & Carboxybutyrylfentanyl",
    "immunoassayCrossReactivityPct": 60,
    "terminalHalfLifeHours": 4,
    "inhaledOnsetMinutes": [
      1,
      4
    ],
    "inhaledDurationHours": [
      1.5,
      2.5
    ],
    "oralOnsetMinutes": [
      10,
      25
    ],
    "oralDurationHours": [
      2,
      3.5
    ],
    "baseOralThresholdMg": 0.06,
    "baseInhaledThresholdMg": 0.04,
    "radarProfile": {
      "cb1AffinityScore": 94,
      "euphoriaPotency": 86,
      "somaticSedation": 94,
      "anxiogenicRisk": 18,
      "durationPersistence": 26,
      "lipidRetention": 42
    },
    "summary": "Four-carbon butanamide homolog of fentanyl possessing ~25% of fentanyl’s potency (~25–30x morphine) and higher lipophilicity.",
    "pharmacologyNotes": "Cross-reacts on fentanyl lateral flow test strips.",
    "specificHazards": [
      "High fatal respiratory depression risk above 400–800 µg in non-tolerant individuals."
    ],
    "sideEffects": [
      {
        "effect": "Heavy Sedation, Miosis & Respiratory Depression",
        "system": "Pulmonary",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "Selective μ-Opioid Full Agonist (~1/4 Fentanyl / ~25–30x Morphine Potency)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Butyrylfentanyl",
      "source": "PubChem CID 62562",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/62562"
    }
  },
  {
    "id": "furanylfentanyl",
    "name": "Furanylfentanyl (Fu-F · 2-Furancarboxamide Fentanyl)",
    "shortName": "Furanylfentanyl",
    "synonyms": [
      "Fu-F",
      "Furanyl Fentanyl"
    ],
    "classification": "Synthetic Opioid & Nitazene",
    "riskTier": "Extreme",
    "pubchemCid": 13711152,
    "molecularFormula": "C24H26N2O2",
    "molecularWeight": 374.48,
    "canonicalSmiles": "C1=COC(=C1)C(=O)N(C2=CC=CC=C2)C3CCN(CC3)CCC4=CC=CC=C4",
    "xLogP": 4.1,
    "cb1KiNm": 0.028,
    "cb2KiNm": 0,
    "cb1Efficacy": "High-Affinity μ-Opioid Agonist (~1/2 to 1/5 Fentanyl In Vivo; Sub-Nanomolar Ki)",
    "cb2Efficacy": "2-Furamide Analog of Fentanyl",
    "relativePotencyVsD9": 5.5,
    "psychoactive": true,
    "alkylChainLength": "N-Phenyl-N-[1-(2-phenylethyl)piperidin-4-yl]furan-2-carboxamide",
    "cypEnzymes": [
      "CYP3A4 (Furan Ring Epoxidation / Hydrolysis)"
    ],
    "primaryMetabolite": "4-ANPP & Dihydrodiol Metabolite",
    "immunoassayCrossReactivityPct": 55,
    "terminalHalfLifeHours": 3.5,
    "inhaledOnsetMinutes": [
      1,
      3
    ],
    "inhaledDurationHours": [
      1,
      2
    ],
    "oralOnsetMinutes": [
      10,
      20
    ],
    "oralDurationHours": [
      1.5,
      3
    ],
    "baseOralThresholdMg": 0.03,
    "baseInhaledThresholdMg": 0.02,
    "radarProfile": {
      "cb1AffinityScore": 96,
      "euphoriaPotency": 92,
      "somaticSedation": 94,
      "anxiogenicRisk": 18,
      "durationPersistence": 22,
      "lipidRetention": 40
    },
    "summary": "2-Furancarboxamide analog of fentanyl (\"Fu-F\") exhibiting sub-nanomolar MOR affinity and a short 1–2 hour duration.",
    "pharmacologyNotes": "Metabolized via amide hydrolysis to 4-ANPP and furan ring opening.",
    "specificHazards": [
      "Short duration drives frequent redosing and acute respiratory arrest."
    ],
    "sideEffects": [
      {
        "effect": "Fast Euphoric Rush & Acute Respiratory Depression",
        "system": "Pulmonary",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "High-Affinity μ-Opioid Agonist (~1/2 to 1/5 Fentanyl In Vivo; Sub-Nanomolar Ki)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Furanylfentanyl",
      "source": "PubChem CID 13711152",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/13711152"
    }
  },
  {
    "id": "valerylfentanyl",
    "name": "Valerylfentanyl (Pentanoyl Fentanyl)",
    "shortName": "Valerylfentanyl",
    "synonyms": [
      "Pentanoylfentanyl",
      "VF"
    ],
    "classification": "Synthetic Opioid & Nitazene",
    "riskTier": "Extreme",
    "pubchemCid": 2799395,
    "molecularFormula": "C24H32N2O",
    "molecularWeight": 364.52,
    "canonicalSmiles": "CCCCC(=O)N(C1=CC=CC=C1)C2CCN(CC2)CCC3=CC=CC=C3",
    "xLogP": 4.9,
    "cb1KiNm": 12,
    "cb2KiNm": 0,
    "cb1Efficacy": "Moderate-Potency Anilidopiperidine MOR Agonist (~1/10th to 1/15th Fentanyl)",
    "cb2Efficacy": "C5-Pentanamide Fentanyl Homolog",
    "relativePotencyVsD9": 3.5,
    "psychoactive": true,
    "alkylChainLength": "N-Phenyl-N-[1-(2-phenylethyl)piperidin-4-yl]pentanamide",
    "cypEnzymes": [
      "CYP3A4"
    ],
    "primaryMetabolite": "Norvalerylfentanyl",
    "immunoassayCrossReactivityPct": 50,
    "terminalHalfLifeHours": 4.5,
    "inhaledOnsetMinutes": [
      2,
      5
    ],
    "inhaledDurationHours": [
      1.5,
      3
    ],
    "oralOnsetMinutes": [
      15,
      30
    ],
    "oralDurationHours": [
      2,
      4
    ],
    "baseOralThresholdMg": 0.15,
    "baseInhaledThresholdMg": 0.1,
    "radarProfile": {
      "cb1AffinityScore": 86,
      "euphoriaPotency": 78,
      "somaticSedation": 86,
      "anxiogenicRisk": 18,
      "durationPersistence": 30,
      "lipidRetention": 46
    },
    "summary": "Five-carbon pentanamide homolog of fentanyl. Steric bulk of the C5 acyl chain reduces MOR efficacy to ~1/10th–1/15th of fentanyl (~7–10x morphine).",
    "pharmacologyNotes": "High lipophilicity.",
    "specificHazards": [
      "Still active in the 100–500 µg range; causes fatal respiratory depression when overdosed."
    ],
    "sideEffects": [
      {
        "effect": "Sedating Analgesia & Respiratory Depression",
        "system": "Pulmonary",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "Moderate-Potency Anilidopiperidine MOR Agonist (~1/10th to 1/15th Fentanyl)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Valerylfentanyl",
      "source": "PubChem CID 2799395",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/2799395"
    }
  },
  {
    "id": "acrylfentanyl",
    "name": "Acrylfentanyl (Acryloylfentanyl · Unsaturated Acrylamide Analog)",
    "shortName": "Acrylfentanyl",
    "synonyms": [
      "Acryloylfentanyl",
      "ACF"
    ],
    "classification": "Synthetic Opioid & Nitazene",
    "riskTier": "Extreme",
    "pubchemCid": 13783668,
    "molecularFormula": "C22H26N2O",
    "molecularWeight": 334.45,
    "canonicalSmiles": "C=CC(=O)N(C1=CC=CC=C1)C2CCN(CC2)CCC3=CC=CC=C3",
    "xLogP": 3.7,
    "cb1KiNm": 0.7,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent μ-Opioid Full Agonist (~1.0–1.5x Fentanyl / ~160x Morphine; Covalent Michael Acceptor)",
    "cb2Efficacy": "Unsaturated Propenamide Fentanyl Analog",
    "relativePotencyVsD9": 6.5,
    "psychoactive": true,
    "alkylChainLength": "N-Phenyl-N-[1-(2-phenylethyl)piperidin-4-yl]prop-2-enamide",
    "cypEnzymes": [
      "CYP3A4",
      "Glutathione Conjugation"
    ],
    "primaryMetabolite": "Noracrylfentanyl",
    "immunoassayCrossReactivityPct": 65,
    "terminalHalfLifeHours": 4.5,
    "inhaledOnsetMinutes": [
      1,
      3
    ],
    "inhaledDurationHours": [
      2,
      3.5
    ],
    "oralOnsetMinutes": [
      10,
      20
    ],
    "oralDurationHours": [
      3,
      4.5
    ],
    "baseOralThresholdMg": 0.012,
    "baseInhaledThresholdMg": 0.008,
    "radarProfile": {
      "cb1AffinityScore": 98,
      "euphoriaPotency": 88,
      "somaticSedation": 96,
      "anxiogenicRisk": 22,
      "durationPersistence": 34,
      "lipidRetention": 38
    },
    "summary": "Unsaturated acrylamide analog of fentanyl (~1.0–1.5x fentanyl potency, threshold ~8–12 µg = 0.008–0.012 mg). The α,β-unsaturated carbonyl acts as a reactive Michael acceptor and binds tightly to MOR for 3–4 hours.",
    "pharmacologyNotes": "Higher naloxone doses required than standard fentanyl.",
    "specificHazards": [
      "EXTREME APNEA RISK: Slightly more potent and longer-lasting than fentanyl; reactive acrylamide group is also cytotoxic."
    ],
    "sideEffects": [
      {
        "effect": "Potent 3-Hour Opioid Immobilization & Apnea",
        "system": "Pulmonary",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "Potent μ-Opioid Full Agonist (~1.0–1.5x Fentanyl / ~160x Morphine; Covalent Michael Acceptor)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Acrylfentanyl",
      "source": "PubChem CID 13783668",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/13783668"
    }
  },
  {
    "id": "ocfentanil",
    "name": "Ocfentanil (A-3217 · 2'-Fluoromethoxyacetylfentanyl)",
    "shortName": "Ocfentanil",
    "synonyms": [
      "A-3217",
      "ortho-Fluoromethoxyacetylfentanyl"
    ],
    "classification": "Synthetic Opioid & Nitazene",
    "riskTier": "Extreme",
    "pubchemCid": 65869,
    "molecularFormula": "C22H27FN2O2",
    "molecularWeight": 370.46,
    "canonicalSmiles": "COCC(=O)N(C1=CC=CC=C1F)C2CCN(CC2)CCC3=CC=CC=C3",
    "xLogP": 3.1,
    "cb1KiNm": 0.35,
    "cb2KiNm": 0,
    "cb1Efficacy": "Ultra-Potent μ-Opioid Full Agonist (~2.5x Fentanyl / ~200x Morphine)",
    "cb2Efficacy": "2-Fluorophenyl Methoxyacetamide Fentanyl",
    "relativePotencyVsD9": 7,
    "psychoactive": true,
    "alkylChainLength": "N-(2-Fluorophenyl)-2-methoxy-N-[1-(2-phenylethyl)piperidin-4-yl]acetamide",
    "cypEnzymes": [
      "CYP3A4 (O-Demethylation)"
    ],
    "primaryMetabolite": "O-Desmethylocfentanil",
    "immunoassayCrossReactivityPct": 40,
    "terminalHalfLifeHours": 2.5,
    "inhaledOnsetMinutes": [
      1,
      3
    ],
    "inhaledDurationHours": [
      1,
      2
    ],
    "oralOnsetMinutes": [
      10,
      20
    ],
    "oralDurationHours": [
      1.5,
      3
    ],
    "baseOralThresholdMg": 0.008,
    "baseInhaledThresholdMg": 0.005,
    "radarProfile": {
      "cb1AffinityScore": 98,
      "euphoriaPotency": 90,
      "somaticSedation": 96,
      "anxiogenicRisk": 18,
      "durationPersistence": 20,
      "lipidRetention": 32
    },
    "summary": "Methoxyacetamide ortho-fluorinated fentanyl analog (A-3217) evaluated clinically in the 1990s at 1–3 µg/kg and found to be ~2.5x more potent than fentanyl (threshold ~5 µg = 0.005 mg).",
    "pharmacologyNotes": "Rapidly cleared via O-demethylation.",
    "specificHazards": [
      "Lethal respiratory arrest at doses under 50–100 micrograms."
    ],
    "sideEffects": [
      {
        "effect": "Rapid 5-Microgram Analgesia & Respiratory Arrest Risk",
        "system": "Pulmonary",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "Ultra-Potent μ-Opioid Full Agonist (~2.5x Fentanyl / ~200x Morphine)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Ocfentanil",
      "source": "PubChem CID 65869",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/65869"
    }
  },
  {
    "id": "3-methylfentanyl",
    "name": "3-Methylfentanyl (3-MF · TMF · Mephentanyl)",
    "shortName": "3-Methylfentanyl",
    "synonyms": [
      "3-MF",
      "TMF",
      "F-7209",
      "China White"
    ],
    "classification": "Synthetic Opioid & Nitazene",
    "riskTier": "Extreme",
    "pubchemCid": 62564,
    "molecularFormula": "C23H30N2O",
    "molecularWeight": 350.5,
    "canonicalSmiles": "CCC(=O)N(C1=CC=CC=C1)C2CCN(CC2C)CCC3=CC=CC=C3",
    "xLogP": 4.3,
    "cb1KiNm": 0.08,
    "cb2KiNm": 0,
    "cb1Efficacy": "Ultra-Potent Stereoselective μ-Opioid Agonist ((+)-cis Isomer ~6,000x Morphine; Racemate ~400–1000x Morphine)",
    "cb2Efficacy": "3-Methylpiperidine Fentanyl Analog",
    "relativePotencyVsD9": 8.5,
    "psychoactive": true,
    "alkylChainLength": "N-(3-Methyl-1-(2-phenylethyl)piperidin-4-yl)-N-phenylpropanamide",
    "cypEnzymes": [
      "CYP3A4"
    ],
    "primaryMetabolite": "Nor-3-methylfentanyl",
    "immunoassayCrossReactivityPct": 50,
    "terminalHalfLifeHours": 4,
    "inhaledOnsetMinutes": [
      1,
      3
    ],
    "inhaledDurationHours": [
      1.5,
      3
    ],
    "oralOnsetMinutes": [
      10,
      20
    ],
    "oralDurationHours": [
      2,
      4
    ],
    "baseOralThresholdMg": 0.004,
    "baseInhaledThresholdMg": 0.002,
    "radarProfile": {
      "cb1AffinityScore": 99,
      "euphoriaPotency": 92,
      "somaticSedation": 98,
      "anxiogenicRisk": 20,
      "durationPersistence": 28,
      "lipidRetention": 44
    },
    "summary": "3-Methylated piperidine analog of fentanyl discovered in 1974 (\"China White\"). Adding a single methyl group at the C3 position of the piperidine ring increases potency 4- to 15-fold over fentanyl (threshold ~2 µg = 0.002 mg).",
    "pharmacologyNotes": "cis-Isomer is ~15x more potent than the trans-isomer.",
    "specificHazards": [
      "MICROGRAM LETHALITY: Responsible for waves of fatal overdoses at doses of 10–25 micrograms."
    ],
    "sideEffects": [
      {
        "effect": "Microgram Euphoria, Pinpoint Pupils & Fatal Apnea",
        "system": "Pulmonary",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "Ultra-Potent Stereoselective μ-Opioid Agonist ((+)-cis Isomer ~6,000x Morphine; Racemate ~400–1000x Morphine)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · 3-Methylfentanyl",
      "source": "PubChem CID 62564",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/62564"
    }
  },
  {
    "id": "4-fibf",
    "name": "4-FIBF (4-Fluoroisobutyrylfentanyl · para-Fluoro-iBF)",
    "shortName": "4-FIBF",
    "synonyms": [
      "p-FIBF",
      "4-Fluoroisobutyrfentanyl"
    ],
    "classification": "Synthetic Opioid & Nitazene",
    "riskTier": "Extreme",
    "pubchemCid": 118796315,
    "molecularFormula": "C23H29FN2O",
    "molecularWeight": 368.49,
    "canonicalSmiles": "CC(C)C(=O)N(C1=CC=C(C=C1)F)C2CCN(CC2)CCC3=CC=CC=C3",
    "xLogP": 4.3,
    "cb1KiNm": 2.8,
    "cb2KiNm": 0,
    "cb1Efficacy": "Selective μ-Opioid Receptor Agonist (~1/3 Fentanyl Potency with Extended Half-Life)",
    "cb2Efficacy": "para-Fluorinated Isobutyramide Fentanyl",
    "relativePotencyVsD9": 5,
    "psychoactive": true,
    "alkylChainLength": "N-(4-Fluorophenyl)-2-methyl-N-[1-(2-phenylethyl)piperidin-4-yl]propanamide",
    "cypEnzymes": [
      "CYP3A4"
    ],
    "primaryMetabolite": "Nor-4-FIBF",
    "immunoassayCrossReactivityPct": 55,
    "terminalHalfLifeHours": 5,
    "inhaledOnsetMinutes": [
      2,
      5
    ],
    "inhaledDurationHours": [
      2,
      3.5
    ],
    "oralOnsetMinutes": [
      10,
      25
    ],
    "oralDurationHours": [
      3,
      5
    ],
    "baseOralThresholdMg": 0.05,
    "baseInhaledThresholdMg": 0.03,
    "radarProfile": {
      "cb1AffinityScore": 94,
      "euphoriaPotency": 84,
      "somaticSedation": 94,
      "anxiogenicRisk": 18,
      "durationPersistence": 36,
      "lipidRetention": 44
    },
    "summary": "para-Fluorinated isobutyryl analog of fentanyl (~1/3 fentanyl potency, threshold ~30 µg = 0.03 mg) where fluorine at the 4-position slows aromatic hydroxylation, extending duration to 3–4 hours.",
    "pharmacologyNotes": "Detected on fentanyl immunoassay strips.",
    "specificHazards": [
      "Respiratory depression and wooden-chest rigidity."
    ],
    "sideEffects": [
      {
        "effect": "3-Hour Sedating Analgesia & Respiratory Depression",
        "system": "Pulmonary",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "Selective μ-Opioid Receptor Agonist (~1/3 Fentanyl Potency with Extended Half-Life)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · 4-FIBF",
      "source": "PubChem CID 118796315",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/118796315"
    }
  },
  {
    "id": "thf-f",
    "name": "THF-F (Tetrahydrofuranylfentanyl · THF-Fentanyl)",
    "shortName": "THF-F",
    "synonyms": [
      "Tetrahydrofuranylfentanyl",
      "THFF"
    ],
    "classification": "Synthetic Opioid & Nitazene",
    "riskTier": "Extreme",
    "pubchemCid": 12937781,
    "molecularFormula": "C24H30N2O2",
    "molecularWeight": 378.51,
    "canonicalSmiles": "C1CC(OC1)C(=O)N(C2=CC=CC=C2)C3CCN(CC3)CCC4=CC=CC=C4",
    "xLogP": 3.5,
    "cb1KiNm": 4.5,
    "cb2KiNm": 0,
    "cb1Efficacy": "μ-Opioid Receptor Agonist (~1/5th Fentanyl / ~15–20x Morphine)",
    "cb2Efficacy": "Saturated Tetrahydrofuran-2-carboxamide Fentanyl",
    "relativePotencyVsD9": 4.5,
    "psychoactive": true,
    "alkylChainLength": "N-Phenyl-N-[1-(2-phenylethyl)piperidin-4-yl]oxolane-2-carboxamide",
    "cypEnzymes": [
      "CYP3A4"
    ],
    "primaryMetabolite": "Nor-THF-F & 4-ANPP",
    "immunoassayCrossReactivityPct": 50,
    "terminalHalfLifeHours": 3.5,
    "inhaledOnsetMinutes": [
      2,
      5
    ],
    "inhaledDurationHours": [
      1.5,
      2.5
    ],
    "oralOnsetMinutes": [
      10,
      25
    ],
    "oralDurationHours": [
      2,
      3.5
    ],
    "baseOralThresholdMg": 0.08,
    "baseInhaledThresholdMg": 0.05,
    "radarProfile": {
      "cb1AffinityScore": 90,
      "euphoriaPotency": 86,
      "somaticSedation": 90,
      "anxiogenicRisk": 18,
      "durationPersistence": 24,
      "lipidRetention": 36
    },
    "summary": "Saturated tetrahydrofuran-2-carboxamide analog of furanylfentanyl (~1/5 fentanyl potency, threshold ~50 µg = 0.05 mg).",
    "pharmacologyNotes": "Cleared via CYP3A4 N-dealkylation to nor-THF-F.",
    "specificHazards": [
      "Fatal respiratory depression at sub-milligram doses."
    ],
    "sideEffects": [
      {
        "effect": "Warm Opioid Sedation & Respiratory Depression",
        "system": "Pulmonary",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "μ-Opioid Receptor Agonist (~1/5th Fentanyl / ~15–20x Morphine)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · THF-F",
      "source": "PubChem CID 12937781",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/12937781"
    }
  },
  {
    "id": "isotonitazene",
    "name": "Isotonitazene (Iso · Isopropoxy-Nitazene)",
    "shortName": "Isotonitazene",
    "synonyms": [
      "Iso",
      "N-Desethylisotonitazene Parent"
    ],
    "classification": "Synthetic Opioid & Nitazene",
    "riskTier": "Extreme",
    "pubchemCid": 145721925,
    "molecularFormula": "C23H30N4O3",
    "molecularWeight": 410.51,
    "canonicalSmiles": "CCN(CC)CCN1C(=NC2=C1C=CC(=C2)[N+](=O)[O-])CC3=CC=C(C=C3)OC(C)C",
    "xLogP": 4.5,
    "cb1KiNm": 0.08,
    "cb2KiNm": 0,
    "cb1Efficacy": "Ultra-Potent 2-Benzylbenzimidazole μ-Opioid Super-Agonist (~5x Fentanyl / ~500x Morphine)",
    "cb2Efficacy": "para-Isopropoxy 5-Nitro-2-benzylbenzimidazole",
    "relativePotencyVsD9": 8.5,
    "psychoactive": true,
    "alkylChainLength": "N,N-Diethyl-2-[2-[(4-isopropoxyphenyl)methyl]-5-nitrobenzimidazol-1-yl]ethanamine",
    "cypEnzymes": [
      "CYP3A4",
      "CYP2C8"
    ],
    "primaryMetabolite": "N-Desethylisotonitazene (Active Metabolite — Even More Potent than Parent!)",
    "immunoassayCrossReactivityPct": 0,
    "terminalHalfLifeHours": 6,
    "inhaledOnsetMinutes": [
      1,
      3
    ],
    "inhaledDurationHours": [
      3,
      5
    ],
    "oralOnsetMinutes": [
      10,
      25
    ],
    "oralDurationHours": [
      4,
      7
    ],
    "baseOralThresholdMg": 0.01,
    "baseInhaledThresholdMg": 0.005,
    "radarProfile": {
      "cb1AffinityScore": 99,
      "euphoriaPotency": 94,
      "somaticSedation": 99,
      "anxiogenicRisk": 22,
      "durationPersistence": 46,
      "lipidRetention": 46
    },
    "summary": "2-Benzylbenzimidazole (\"Nitazene\") opioid synthesized by CIBA in 1957 (~500x morphine, ~5x fentanyl; threshold ~5 µg = 0.005 mg). Critically, hepatic N-deethylation produces N-desethylisotonitazene, an active metabolite that is even more potent than parent isotonitazene.",
    "pharmacologyNotes": "DOES NOT CROSS-REACT on fentanyl test strips (requires dedicated nitazene test strips).",
    "specificHazards": [
      "EXTREME OVERDOSE & ACTIVE METABOLITE HAZARD: 5x stronger than fentanyl, invisible to standard fentanyl test strips, and forms an ultra-potent N-desethyl active metabolite."
    ],
    "sideEffects": [
      {
        "effect": "Profound Microgram Nod, Miosis & Naloxone-Resistant Apnea",
        "system": "Pulmonary",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "Ultra-Potent 2-Benzylbenzimidazole μ-Opioid Super-Agonist (~5x Fentanyl / ~500x Morphine)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Isotonitazene",
      "source": "PubChem CID 145721925",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/145721925"
    }
  },
  {
    "id": "metonitazene",
    "name": "Metonitazene (para-Methoxy-Nitazene)",
    "shortName": "Metonitazene",
    "synonyms": [
      "Meto",
      "4'-Methoxynitazene"
    ],
    "classification": "Synthetic Opioid & Nitazene",
    "riskTier": "Extreme",
    "pubchemCid": 53316364,
    "molecularFormula": "C21H26N4O3",
    "molecularWeight": 382.46,
    "canonicalSmiles": "CCN(CC)CCN1C(=NC2=C1C=CC(=C2)[N+](=O)[O-])CC3=CC=C(C=C3)OC",
    "xLogP": 3.7,
    "cb1KiNm": 0.45,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent 2-Benzylbenzimidazole μ-Opioid Full Agonist (~1x Fentanyl / ~100x Morphine)",
    "cb2Efficacy": "para-Methoxy 5-Nitro-2-benzylbenzimidazole",
    "relativePotencyVsD9": 6.5,
    "psychoactive": true,
    "alkylChainLength": "N,N-Diethyl-2-[2-[(4-methoxyphenyl)methyl]-5-nitrobenzimidazol-1-yl]ethanamine",
    "cypEnzymes": [
      "CYP3A4",
      "CYP2D6"
    ],
    "primaryMetabolite": "N-Desethylmetonitazene & 4'-Hydroxynitazene",
    "immunoassayCrossReactivityPct": 0,
    "terminalHalfLifeHours": 4.5,
    "inhaledOnsetMinutes": [
      1,
      4
    ],
    "inhaledDurationHours": [
      2.5,
      4
    ],
    "oralOnsetMinutes": [
      10,
      25
    ],
    "oralDurationHours": [
      3.5,
      6
    ],
    "baseOralThresholdMg": 0.03,
    "baseInhaledThresholdMg": 0.015,
    "radarProfile": {
      "cb1AffinityScore": 96,
      "euphoriaPotency": 92,
      "somaticSedation": 96,
      "anxiogenicRisk": 20,
      "durationPersistence": 38,
      "lipidRetention": 38
    },
    "summary": "para-Methoxy analog in the CIBA 2-benzylbenzimidazole series (~100x morphine, roughly equipotent to fentanyl; threshold ~15 µg = 0.015 mg intranasal, 30 µg oral). Tested clinically in humans in 1958 where 1 mg parenteral doses caused profound analgesia and respiratory depression.",
    "pharmacologyNotes": "Not detected by standard fentanyl immunoassay strips.",
    "specificHazards": [
      "Rapid tolerance escalation (benzimidazole super-agonists rapidly internalize/desensitize MOR) and high fatal apnea risk."
    ],
    "sideEffects": [
      {
        "effect": "Fentanyl-Scale Benzimidazole Euphoria & Apnea",
        "system": "Pulmonary",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "Potent 2-Benzylbenzimidazole μ-Opioid Full Agonist (~1x Fentanyl / ~100x Morphine)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Metonitazene",
      "source": "PubChem CID 53316364",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/53316364"
    }
  },
  {
    "id": "etonitazene",
    "name": "Etonitazene (para-Ethoxy-Nitazene · CIBA 20684)",
    "shortName": "Etonitazene",
    "synonyms": [
      "Ba-20684",
      "4'-Ethoxynitazene"
    ],
    "classification": "Synthetic Opioid & Nitazene",
    "riskTier": "Extreme",
    "pubchemCid": 15327,
    "molecularFormula": "C22H28N4O3",
    "molecularWeight": 396.48,
    "canonicalSmiles": "CCN(CC)CCN1C(=NC2=C1C=CC(=C2)[N+](=O)[O-])CC3=CC=C(C=C3)OCC",
    "xLogP": 4.1,
    "cb1KiNm": 0.04,
    "cb2KiNm": 0,
    "cb1Efficacy": "Ultra-Potent 2-Benzylbenzimidazole μ-Opioid Super-Agonist (~10–15x Fentanyl / ~1000–1500x Morphine)",
    "cb2Efficacy": "Archetypal para-Ethoxy 5-Nitro-2-benzylbenzimidazole",
    "relativePotencyVsD9": 9.5,
    "psychoactive": true,
    "alkylChainLength": "N,N-Diethyl-2-[2-[(4-ethoxyphenyl)methyl]-5-nitrobenzimidazol-1-yl]ethanamine",
    "cypEnzymes": [
      "CYP3A4"
    ],
    "primaryMetabolite": "N-Desethyletonitazene",
    "immunoassayCrossReactivityPct": 0,
    "terminalHalfLifeHours": 5,
    "inhaledOnsetMinutes": [
      1,
      3
    ],
    "inhaledDurationHours": [
      3,
      5
    ],
    "oralOnsetMinutes": [
      10,
      20
    ],
    "oralDurationHours": [
      4,
      6
    ],
    "baseOralThresholdMg": 0.002,
    "baseInhaledThresholdMg": 0.001,
    "radarProfile": {
      "cb1AffinityScore": 100,
      "euphoriaPotency": 98,
      "somaticSedation": 99,
      "anxiogenicRisk": 22,
      "durationPersistence": 42,
      "lipidRetention": 42
    },
    "summary": "The zenith of the 1957 Hunger/CIBA benzimidazole series (Ba-20684). Possesses ~1,000–1,500x the potency of morphine (~10–15x fentanyl; threshold ~1 µg = 0.001 mg) alongside extreme super-agonist intrinsic efficacy.",
    "pharmacologyNotes": "Requires specialized nitazene strips or LC-MS/MS for detection.",
    "specificHazards": [
      "MICROGRAM LETHALITY: Active at 1–2 µg; doses of 10–30 µg can be fatal in opioid-naive humans."
    ],
    "sideEffects": [
      {
        "effect": "Overwhelming Microgram Euphoria & Immediate Respiratory Arrest",
        "system": "Pulmonary",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "Ultra-Potent 2-Benzylbenzimidazole μ-Opioid Super-Agonist (~10–15x Fentanyl / ~1000–1500x Morphine)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Etonitazene",
      "source": "PubChem CID 15327",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/15327"
    }
  },
  {
    "id": "protonitazene",
    "name": "Protonitazene (para-Propoxy-Nitazene)",
    "shortName": "Protonitazene",
    "synonyms": [
      "Proto",
      "4'-Propoxynitazene"
    ],
    "classification": "Synthetic Opioid & Nitazene",
    "riskTier": "Extreme",
    "pubchemCid": 154729932,
    "molecularFormula": "C23H30N4O3",
    "molecularWeight": 410.51,
    "canonicalSmiles": "CCCOC1=CC=C(C=C1)CC2=NC3=C(N2CCN(CC)CC)C=CC(=C3)[N+](=O)[O-]",
    "xLogP": 4.6,
    "cb1KiNm": 0.1,
    "cb2KiNm": 0,
    "cb1Efficacy": "Ultra-Potent 2-Benzylbenzimidazole μ-Opioid Super-Agonist (~2–3x Fentanyl / ~200x Morphine)",
    "cb2Efficacy": "n-Propoxy Structural Isomer of Isotonitazene",
    "relativePotencyVsD9": 7.5,
    "psychoactive": true,
    "alkylChainLength": "N,N-Diethyl-2-[5-nitro-2-[(4-propoxyphenyl)methyl]benzimidazol-1-yl]ethanamine",
    "cypEnzymes": [
      "CYP3A4"
    ],
    "primaryMetabolite": "N-Desethylprotonitazene",
    "immunoassayCrossReactivityPct": 0,
    "terminalHalfLifeHours": 5.5,
    "inhaledOnsetMinutes": [
      1,
      3
    ],
    "inhaledDurationHours": [
      3,
      5
    ],
    "oralOnsetMinutes": [
      10,
      25
    ],
    "oralDurationHours": [
      4,
      7
    ],
    "baseOralThresholdMg": 0.01,
    "baseInhaledThresholdMg": 0.005,
    "radarProfile": {
      "cb1AffinityScore": 98,
      "euphoriaPotency": 92,
      "somaticSedation": 98,
      "anxiogenicRisk": 22,
      "durationPersistence": 45,
      "lipidRetention": 46
    },
    "summary": "Straight-chain n-propoxy structural isomer of isotonitazene (~200x morphine, ~2–3x fentanyl; threshold ~5 µg = 0.005 mg).",
    "pharmacologyNotes": "Forms active N-desethyl metabolite.",
    "specificHazards": [
      "High incidence of fatal respiratory arrest in counterfeit pressed tablets."
    ],
    "sideEffects": [
      {
        "effect": "Microgram Benzimidazole Sedation & Fatal Apnea",
        "system": "Pulmonary",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "Ultra-Potent 2-Benzylbenzimidazole μ-Opioid Super-Agonist (~2–3x Fentanyl / ~200x Morphine)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Protonitazene",
      "source": "PubChem CID 154729932",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/154729932"
    }
  },
  {
    "id": "butonitazene",
    "name": "Butonitazene (para-Butoxy-Nitazene)",
    "shortName": "Butonitazene",
    "synonyms": [
      "4'-Butoxynitazene"
    ],
    "classification": "Synthetic Opioid & Nitazene",
    "riskTier": "Extreme",
    "pubchemCid": 154729935,
    "molecularFormula": "C24H32N4O3",
    "molecularWeight": 424.54,
    "canonicalSmiles": "CCCCOC1=CC=C(C=C1)CC2=NC3=C(N2CCN(CC)CC)C=CC(=C3)[N+](=O)[O-]",
    "xLogP": 5.1,
    "cb1KiNm": 0.9,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent 2-Benzylbenzimidazole μ-Opioid Agonist (~0.5x Fentanyl / ~50x Morphine)",
    "cb2Efficacy": "para-Butoxy 5-Nitro-2-benzylbenzimidazole",
    "relativePotencyVsD9": 5.5,
    "psychoactive": true,
    "alkylChainLength": "2-[2-[(4-Butoxyphenyl)methyl]-5-nitrobenzimidazol-1-yl]-N,N-diethylethanamine",
    "cypEnzymes": [
      "CYP3A4"
    ],
    "primaryMetabolite": "N-Desethylbutonitazene & 4'-Hydroxybutonitazene",
    "immunoassayCrossReactivityPct": 0,
    "terminalHalfLifeHours": 5,
    "inhaledOnsetMinutes": [
      2,
      5
    ],
    "inhaledDurationHours": [
      2.5,
      4
    ],
    "oralOnsetMinutes": [
      10,
      25
    ],
    "oralDurationHours": [
      4,
      6
    ],
    "baseOralThresholdMg": 0.05,
    "baseInhaledThresholdMg": 0.03,
    "radarProfile": {
      "cb1AffinityScore": 94,
      "euphoriaPotency": 88,
      "somaticSedation": 94,
      "anxiogenicRisk": 20,
      "durationPersistence": 40,
      "lipidRetention": 50
    },
    "summary": "Four-carbon n-butoxy homolog in the nitazene series. Lengthening the para-alkoxy chain to C4 reduces potency to ~50x morphine (~1/2 fentanyl; threshold ~30 µg = 0.03 mg nasal, 50 µg oral).",
    "pharmacologyNotes": "High lipophilicity.",
    "specificHazards": [
      "Severe respiratory depression and rapid tolerance build-up."
    ],
    "sideEffects": [
      {
        "effect": "Heavy Benzimidazole Sedation & Apnea Risk",
        "system": "Pulmonary",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "Potent 2-Benzylbenzimidazole μ-Opioid Agonist (~0.5x Fentanyl / ~50x Morphine)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Butonitazene",
      "source": "PubChem CID 154729935",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/154729935"
    }
  },
  {
    "id": "flunitazene",
    "name": "Flunitazene (para-Fluoro-Nitazene)",
    "shortName": "Flunitazene",
    "synonyms": [
      "Fluoro-nitazene",
      "4'-Fluoronitazene"
    ],
    "classification": "Synthetic Opioid & Nitazene",
    "riskTier": "High",
    "pubchemCid": 154729938,
    "molecularFormula": "C20H23FN4O2",
    "molecularWeight": 370.42,
    "canonicalSmiles": "CCN(CC)CCN1C(=NC2=C1C=CC(=C2)[N+](=O)[O-])CC3=CC=C(C=C3)F",
    "xLogP": 3.8,
    "cb1KiNm": 15,
    "cb2KiNm": 0,
    "cb1Efficacy": "Moderate-Potency Benzimidazole MOR Agonist (~1–5x Morphine — Least Potent Nitazene)",
    "cb2Efficacy": "para-Fluoro 5-Nitro-2-benzylbenzimidazole",
    "relativePotencyVsD9": 2,
    "psychoactive": true,
    "alkylChainLength": "N,N-Diethyl-2-[2-[(4-fluorophenyl)methyl]-5-nitrobenzimidazol-1-yl]ethanamine",
    "cypEnzymes": [
      "CYP3A4"
    ],
    "primaryMetabolite": "N-Desethylflunitazene",
    "immunoassayCrossReactivityPct": 0,
    "terminalHalfLifeHours": 4,
    "inhaledOnsetMinutes": [
      3,
      8
    ],
    "inhaledDurationHours": [
      2,
      3.5
    ],
    "oralOnsetMinutes": [
      15,
      30
    ],
    "oralDurationHours": [
      3,
      5
    ],
    "baseOralThresholdMg": 0.5,
    "baseInhaledThresholdMg": 0.2,
    "radarProfile": {
      "cb1AffinityScore": 76,
      "euphoriaPotency": 78,
      "somaticSedation": 82,
      "anxiogenicRisk": 18,
      "durationPersistence": 32,
      "lipidRetention": 38
    },
    "summary": "para-Fluorinated member of the nitazene family. Replacing the crucial para-alkoxy ether group with a fluorine atom drops potency ~200-fold down to ~1–5x morphine (threshold ~0.2 mg = 200 µg nasal, 0.5 mg oral).",
    "pharmacologyNotes": "Still carries respiratory depression hazard.",
    "specificHazards": [
      "Potency variation between flunitazene (~2x morphine) and isotonitazene (~500x morphine) makes unverified nitazene powders extremely hazardous."
    ],
    "sideEffects": [
      {
        "effect": "Morphine-Scale Benzimidazole Sedation",
        "system": "Pulmonary",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Moderate-Potency Benzimidazole MOR Agonist (~1–5x Morphine — Least Potent Nitazene)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Flunitazene",
      "source": "PubChem CID 154729938",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/154729938"
    }
  },
  {
    "id": "etazene",
    "name": "Etazene (Etodesnitazene · Desnitro-Etonitazene)",
    "shortName": "Etazene",
    "synonyms": [
      "Etodesnitazene",
      "Desnitroetonitazene"
    ],
    "classification": "Synthetic Opioid & Nitazene",
    "riskTier": "Extreme",
    "pubchemCid": 145721928,
    "molecularFormula": "C22H29N3O",
    "molecularWeight": 351.49,
    "canonicalSmiles": "CCN(CC)CCN1C(=NC2=CC=CC=C21)CC3=CC=C(C=C3)OCC",
    "xLogP": 4.2,
    "cb1KiNm": 0.7,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent Desnitro-Benzimidazole μ-Opioid Agonist (~70x Morphine / ~0.7x Fentanyl)",
    "cb2Efficacy": "5-Desnitro Analog of Etonitazene",
    "relativePotencyVsD9": 6,
    "psychoactive": true,
    "alkylChainLength": "2-[2-[(4-Ethoxyphenyl)methyl]benzimidazol-1-yl]-N,N-diethylethanamine",
    "cypEnzymes": [
      "CYP3A4"
    ],
    "primaryMetabolite": "N-Desethyletazene",
    "immunoassayCrossReactivityPct": 0,
    "terminalHalfLifeHours": 2.5,
    "inhaledOnsetMinutes": [
      1,
      3
    ],
    "inhaledDurationHours": [
      1,
      2
    ],
    "oralOnsetMinutes": [
      10,
      20
    ],
    "oralDurationHours": [
      1.5,
      3
    ],
    "baseOralThresholdMg": 0.05,
    "baseInhaledThresholdMg": 0.025,
    "radarProfile": {
      "cb1AffinityScore": 95,
      "euphoriaPotency": 95,
      "somaticSedation": 92,
      "anxiogenicRisk": 18,
      "durationPersistence": 20,
      "lipidRetention": 40
    },
    "summary": "Desnitro analog of etonitazene lacking the 5-nitro group (~70x morphine potency; threshold ~25 µg = 0.025 mg nasal, 50 µg oral). Has a shorter 1–2 hour duration and higher euphoria-to-sedation ratio than nitro-nitazenes.",
    "pharmacologyNotes": "Rapid hepatic clearance.",
    "specificHazards": [
      "Short 60–90 minute duration drives compulsive redosing and rapid tolerance spike."
    ],
    "sideEffects": [
      {
        "effect": "Intense 90-Minute Benzimidazole Rush & Apnea Risk",
        "system": "Pulmonary",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "Potent Desnitro-Benzimidazole μ-Opioid Agonist (~70x Morphine / ~0.7x Fentanyl)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Etazene",
      "source": "PubChem CID 145721928",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/145721928"
    }
  },
  {
    "id": "u-47700",
    "name": "U-47700 (trans-3,4-Dichloro-N-(2-(dimethylamino)cyclohexyl)-N-methylbenzamide · Pink)",
    "shortName": "U-47700",
    "synonyms": [
      "Pink",
      "Pinky",
      "U4"
    ],
    "classification": "Synthetic Opioid & Nitazene",
    "riskTier": "Extreme",
    "pubchemCid": 13556565,
    "molecularFormula": "C16H22Cl2N2O",
    "molecularWeight": 329.26,
    "canonicalSmiles": "CN(C)C1CCCCC1N(C)C(=O)C2=CC(=C(C=C2)Cl)Cl",
    "xLogP": 3.4,
    "cb1KiNm": 5.3,
    "cb2KiNm": 0,
    "cb1Efficacy": "Selective μ-Opioid Full Agonist (~7.5x Morphine Potency; Ki ~5.3 nM) with Low κ-Affinity",
    "cb2Efficacy": "Upjohn Cyclohexanediamine Benzamide Opioid",
    "relativePotencyVsD9": 3.2,
    "psychoactive": true,
    "alkylChainLength": "3,4-Dichloro-N-[2-(dimethylamino)cyclohexyl]-N-methylbenzamide",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "N-Desmethyl-U-47700 & N,N-Didesmethyl-U-47700",
    "immunoassayCrossReactivityPct": 0,
    "terminalHalfLifeHours": 2.2,
    "inhaledOnsetMinutes": [
      2,
      5
    ],
    "inhaledDurationHours": [
      1,
      2
    ],
    "oralOnsetMinutes": [
      15,
      25
    ],
    "oralDurationHours": [
      1.5,
      3
    ],
    "baseOralThresholdMg": 1.5,
    "baseInhaledThresholdMg": 1,
    "radarProfile": {
      "cb1AffinityScore": 90,
      "euphoriaPotency": 95,
      "somaticSedation": 86,
      "anxiogenicRisk": 24,
      "durationPersistence": 18,
      "lipidRetention": 32
    },
    "summary": "Selective μ-opioid receptor agonist developed by Upjohn in 1978 as a non-addictive structural regioisomer of κ-selective spiradoline (U-50488). Possesses ~7.5x morphine potency (threshold 1.0–1.5 mg) and a very short 1–2 hour duration.",
    "pharmacologyNotes": "Does not cross-react on standard opiate or fentanyl tests.",
    "specificHazards": [
      "HIGHLY CAUSTIC & COMPULSIVE (\"Opioid Crack\"): Causes severe mucosal/rectal/venous tissue necrosis and intense 90-minute compulsive redosing cycles."
    ],
    "sideEffects": [
      {
        "effect": "Explosive 60-Minute Hydromorphone-Like Rush, Caustic Burn & Apnea",
        "system": "Pulmonary",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "Selective μ-Opioid Full Agonist (~7.5x Morphine Potency; Ki ~5.3 nM) with Low κ-Affinity"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · U-47700",
      "source": "PubChem CID 13556565",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/13556565"
    }
  },
  {
    "id": "u-48800",
    "name": "U-48800 (2,4-Dichlorophenyl Phenylacetamide Cyclohexanediamine)",
    "shortName": "U-48800",
    "synonyms": [
      "2,4-Dichloro-U-47700 Homolog"
    ],
    "classification": "Synthetic Opioid & Nitazene",
    "riskTier": "High",
    "pubchemCid": 137796512,
    "molecularFormula": "C17H24Cl2N2O",
    "molecularWeight": 343.3,
    "canonicalSmiles": "CN(C)C1CCCCC1N(C)C(=O)CC2=C(C=C(C=C2)Cl)Cl",
    "xLogP": 3.7,
    "cb1KiNm": 35,
    "cb2KiNm": 0,
    "cb1Efficacy": "Weak-to-Moderate μ / κ-Opioid Modulator (Methylene-Bridged 2,4-Dichloro Homolog of U-47700)",
    "cb2Efficacy": "Phenylacetamide Upjohn Analog",
    "relativePotencyVsD9": 1.5,
    "psychoactive": true,
    "alkylChainLength": "2-(2,4-Dichlorophenyl)-N-[2-(dimethylamino)cyclohexyl]-N-methylacetamide",
    "cypEnzymes": [
      "CYP3A4"
    ],
    "primaryMetabolite": "N-Desmethyl-U-48800",
    "immunoassayCrossReactivityPct": 0,
    "terminalHalfLifeHours": 3,
    "inhaledOnsetMinutes": [
      5,
      10
    ],
    "inhaledDurationHours": [
      1.5,
      2.5
    ],
    "oralOnsetMinutes": [
      20,
      40
    ],
    "oralDurationHours": [
      2,
      3.5
    ],
    "baseOralThresholdMg": 2.5,
    "baseInhaledThresholdMg": 1.5,
    "radarProfile": {
      "cb1AffinityScore": 72,
      "euphoriaPotency": 62,
      "somaticSedation": 74,
      "anxiogenicRisk": 42,
      "durationPersistence": 24,
      "lipidRetention": 35
    },
    "summary": "Methylene-extended 2,4-dichlorophenylacetamide analog of U-47700. Adding the CH2 spacer shifts receptor selectivity partially back toward κ-opioid receptors while lowering μ-opioid potency.",
    "pharmacologyNotes": "Caustic HCl salt.",
    "specificHazards": [
      "Caustic mucosal damage, dysphoric κ-opioid side effects at high doses, and respiratory depression."
    ],
    "sideEffects": [
      {
        "effect": "Sedating Analgesia with Mild Kappa-Opioid Dreaminess",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Weak-to-Moderate μ / κ-Opioid Modulator (Methylene-Bridged 2,4-Dichloro Homolog of U-47700)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · U-48800",
      "source": "PubChem CID 137796512",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/137796512"
    }
  },
  {
    "id": "ah-7921",
    "name": "AH-7921 (Doxylam · 3,4-Dichloro-N-((1-(dimethylamino)cyclohexyl)methyl)benzamide)",
    "shortName": "AH-7921",
    "synonyms": [
      "Doxylam"
    ],
    "classification": "Synthetic Opioid & Nitazene",
    "riskTier": "High",
    "pubchemCid": 2799398,
    "molecularFormula": "C16H22Cl2N2O",
    "molecularWeight": 329.26,
    "canonicalSmiles": "CN(C)C1(CCCCC1)CNC(=O)C2=CC(=C(C=C2)Cl)Cl",
    "xLogP": 3.5,
    "cb1KiNm": 10,
    "cb2KiNm": 0,
    "cb1Efficacy": "Mixed μ-Opioid (~0.8x Morphine) & κ-Opioid Agonist",
    "cb2Efficacy": "Allen & Hanburys Cyclohexylmethylbenzamide Opioid",
    "relativePotencyVsD9": 1.6,
    "psychoactive": true,
    "alkylChainLength": "3,4-Dichloro-N-[[1-(dimethylamino)cyclohexyl]methyl]benzamide",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "N-Desmethyl-AH-7921",
    "immunoassayCrossReactivityPct": 0,
    "terminalHalfLifeHours": 5,
    "inhaledOnsetMinutes": [
      10,
      20
    ],
    "inhaledDurationHours": [
      3,
      4
    ],
    "oralOnsetMinutes": [
      25,
      45
    ],
    "oralDurationHours": [
      4,
      6
    ],
    "baseOralThresholdMg": 5,
    "baseInhaledThresholdMg": 3,
    "radarProfile": {
      "cb1AffinityScore": 78,
      "euphoriaPotency": 72,
      "somaticSedation": 84,
      "anxiogenicRisk": 32,
      "durationPersistence": 42,
      "lipidRetention": 35
    },
    "summary": "Structural isomer of U-47700 patented by Allen & Hanburys in 1974 (~80% of morphine’s potency; threshold 3–5 mg). Exhibits significant κ-opioid receptor agonism alongside μ-opioid activation.",
    "pharmacologyNotes": "Longer 4–6 hour duration than U-47700.",
    "specificHazards": [
      "Narrow margin between analgesia and respiratory arrest due to κ-opioid sedation masking μ-opioid respiratory depression."
    ],
    "sideEffects": [
      {
        "effect": "Heavy Morphine-Scale Sedation & Respiratory Depression",
        "system": "Pulmonary",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Mixed μ-Opioid (~0.8x Morphine) & κ-Opioid Agonist"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · AH-7921",
      "source": "PubChem CID 2799398",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/2799398"
    }
  },
  {
    "id": "mt-45",
    "name": "MT-45 (IC-6 · 1-Cyclohexyl-4-(1,2-diphenylethyl)piperazine)",
    "shortName": "MT-45",
    "synonyms": [
      "IC-6",
      "DDEP"
    ],
    "classification": "Synthetic Opioid & Nitazene",
    "riskTier": "Extreme",
    "pubchemCid": 11529512,
    "molecularFormula": "C24H32N2",
    "molecularWeight": 348.52,
    "canonicalSmiles": "C1CCC(CC1)N2CCN(CC2)C(CC3=CC=CC=C3)C4=CC=CC=C4",
    "xLogP": 5.5,
    "cb1KiNm": 14,
    "cb2KiNm": 0,
    "cb1Efficacy": "Mixed μ / δ / κ-Opioid Agonist (~0.8x Morphine) + Sigma-1/NMDA Modulator",
    "cb2Efficacy": "Diphenylethylpiperazine Opioid",
    "relativePotencyVsD9": 1.5,
    "psychoactive": true,
    "alkylChainLength": "1-Cyclohexyl-4-(1,2-diphenylethyl)piperazine",
    "cypEnzymes": [
      "CYP3A4"
    ],
    "primaryMetabolite": "Hydroxylated & N-dealkylated metabolites",
    "immunoassayCrossReactivityPct": 0,
    "terminalHalfLifeHours": 7,
    "inhaledOnsetMinutes": [
      15,
      30
    ],
    "inhaledDurationHours": [
      3,
      5
    ],
    "oralOnsetMinutes": [
      45,
      90
    ],
    "oralDurationHours": [
      5,
      8
    ],
    "baseOralThresholdMg": 5,
    "baseInhaledThresholdMg": 3,
    "radarProfile": {
      "cb1AffinityScore": 76,
      "euphoriaPotency": 66,
      "somaticSedation": 86,
      "anxiogenicRisk": 52,
      "durationPersistence": 56,
      "lipidRetention": 55
    },
    "summary": "N,N'-Disubstituted piperazine opioid developed by Dainippon Pharmaceutical in the 1970s (~0.8x morphine potency; threshold 3–5 mg) with a slow 60–90 minute oral onset.",
    "pharmacologyNotes": "Extreme lipophilicity (xLogP 5.5) causes accumulation in hair, skin, and inner-ear cochlea.",
    "specificHazards": [
      "SEVERE OTOTOXICITY & ALOPECIA HAZARD: Uniquely causes acute bilateral hearing loss / deafness, cataracts, hair depigmentation, and alopecia alongside fatal respiratory depression."
    ],
    "sideEffects": [
      {
        "effect": "Slow-Onset Opioid Sedation, Dissociation & Ototoxic Deafness Risk",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "Mixed μ / δ / κ-Opioid Agonist (~0.8x Morphine) + Sigma-1/NMDA Modulator"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · MT-45",
      "source": "PubChem CID 11529512",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/11529512"
    }
  },
  {
    "id": "brorphine",
    "name": "Brorphine (para-Bromo-Bezitramide / J-113397 Analog)",
    "shortName": "Brorphine",
    "synonyms": [
      "Purple Heroin",
      "Bromo-bezitramide analog"
    ],
    "classification": "Synthetic Opioid & Nitazene",
    "riskTier": "Extreme",
    "pubchemCid": 145721931,
    "molecularFormula": "C20H22BrClN3O",
    "molecularWeight": 435.77,
    "canonicalSmiles": "C1CN(CCC1N2C3=CC=CC=C3NC2=O)C(CC4=CC=C(C=C4)Br)C5=CC=C(C=C5)Cl",
    "xLogP": 5.2,
    "cb1KiNm": 0.7,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent G-Protein-Biased μ-Opioid Full Agonist (~1x Fentanyl / ~100x Morphine) + hERG K+ Channel Blocker",
    "cb2Efficacy": "Piperidinyl-Benzimidazolone Opioid",
    "relativePotencyVsD9": 6.5,
    "psychoactive": true,
    "alkylChainLength": "1-[1-[1-(4-Bromophenyl)ethyl]piperidin-4-yl]-1,3-dihydro-2H-benzimidazol-2-one",
    "cypEnzymes": [
      "CYP3A4"
    ],
    "primaryMetabolite": "N-Dealkylated Benzimidazolone Metabolite",
    "immunoassayCrossReactivityPct": 0,
    "terminalHalfLifeHours": 8,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      4,
      6
    ],
    "oralOnsetMinutes": [
      20,
      45
    ],
    "oralDurationHours": [
      6,
      10
    ],
    "baseOralThresholdMg": 0.05,
    "baseInhaledThresholdMg": 0.025,
    "radarProfile": {
      "cb1AffinityScore": 96,
      "euphoriaPotency": 86,
      "somaticSedation": 96,
      "anxiogenicRisk": 32,
      "durationPersistence": 64,
      "lipidRetention": 52
    },
    "summary": "Halogenated piperidinyl-benzimidazolone opioid synthesized by Laura Bohn’s group in 2018 (~100x morphine potency; threshold ~25 µg = 0.025 mg smoked/nasal, 50 µg oral). Combines potent MOR agonism with strong cardiac hERG potassium channel inhibition.",
    "pharmacologyNotes": "Longer 6–10 hour duration than fentanyl.",
    "specificHazards": [
      "DUAL APNEA + QT CARDIOTOXICITY: Potently blocks cardiac hERG channels, risking lethal Torsades de Pointes arrhythmia on top of μ-opioid respiratory arrest."
    ],
    "sideEffects": [
      {
        "effect": "Long 8-Hour Heavy Sedation, Apnea & QT Prolongation",
        "system": "Cardiovascular",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "Potent G-Protein-Biased μ-Opioid Full Agonist (~1x Fentanyl / ~100x Morphine) + hERG K+ Channel Blocker"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Brorphine",
      "source": "PubChem CID 145721931",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/145721931"
    }
  }
];

export const EXPANDED_RECREATIONAL_PART2 = {
  "heroin": {
    "physicalFormLabel": "White #4 HCl Powder or Brown #3 Base",
    "physicalAppearance": "White/off-white powder (#4 hydrochloride salt) or tan/brown granular base (#3).",
    "recreationalFeel": "Wraps the entire body and mind in an immediate, heavy velvet blanket of golden warmth, erasing all physical pain, anxiety, and emotional distress into a dreamlike \"nod\" where waking thoughts blend with serene half-sleep.",
    "subjectiveTags": [
      "Immediate Golden Warmth Rush",
      "Deep Dreamlike \"Nodding\"",
      "Complete Pain & Anxiety Erasure",
      "Extreme Overdose & Dependence Risk"
    ],
    "phases": {
      "onsetFeel": "Seconds (smoked/IV) or 3–5 min (nasal) wave of heavy warmth from chest to limbs.",
      "peakFeel": "3–4 hours of profound sedation, floating euphoria, itchy skin (histamine), and pinpoint pupils.",
      "comedownFeel": "Gradual return of aches, drowsiness, and strong craving."
    }
  },
  "o-dsmt": {
    "physicalFormLabel": "Fine White Crystalline HCl Powder",
    "physicalAppearance": "Fine white crystalline powder with a bitter taste.",
    "recreationalFeel": "Starts with 2–3 hours of upbeat, motivated, slightly energetic opioid warmth (thanks to mild norepinephrine activity) before melting into 4–5 hours of heavy, cozy couch-nodding.",
    "subjectiveTags": [
      "No CYP2D6 Enzyme Bottleneck",
      "Upbeat Early Warmth → Heavy Late Nod",
      "Long 6–9 Hour Duration",
      "Lower Seizure Risk than Tramadol"
    ],
    "phases": {
      "onsetFeel": "20–35 minute onset of warm mood lift and pain relief.",
      "peakFeel": "Long, steady wave of cozy opioid euphoria and physical comfort.",
      "comedownFeel": "Slow, sleepy taper over 3 hours."
    }
  },
  "sufentanil": {
    "physicalFormLabel": "Sublingual Micro-Tablets (Dsuvia 30 µg) & Ampoules",
    "physicalAppearance": "Tiny sublingual tablets in single-dose applicators or clear ICU ampoules.",
    "recreationalFeel": "At 1–5 micrograms, produces an almost instantaneous wave of heavy surgical sedation and analgesia.",
    "subjectiveTags": [
      "1–2 µg (0.001 mg) Threshold",
      "5–10× Potency vs Fentanyl",
      "Rapid Sublingual/Parenteral Onset",
      "Severe Apnea & Chest Rigidity Hazard"
    ],
    "phases": {
      "onsetFeel": "1–3 minutes into heavy sedation.",
      "peakFeel": "30–60 minutes of intense surgical analgesia and nod.",
      "comedownFeel": "Rapid 1-hour clearance."
    }
  },
  "alfentanil": {
    "physicalFormLabel": "Clear Glass Surgical Ampoules",
    "physicalAppearance": "Clear aqueous injectable solution.",
    "recreationalFeel": "Hits peak brain concentration within 60 seconds—faster than fentanyl—followed by a very short 20–40 minute plateau.",
    "subjectiveTags": [
      "50 µg (0.05 mg) Threshold",
      "4× Faster Brain Entry than Fentanyl",
      "Very Short 30–45 Min Duration",
      "CYP3A4 Dependent Clearance"
    ],
    "phases": {
      "onsetFeel": "Under 60 seconds.",
      "peakFeel": "20–30 minutes of heavy opioid warmth.",
      "comedownFeel": "Rapid 30-minute offset."
    }
  },
  "remifentanil": {
    "physicalFormLabel": "Lyophilized White Powder Vial (Ultiva)",
    "physicalAppearance": "Lyophilized white cake in glass vials.",
    "recreationalFeel": "Produces an intense, immediate 5–10 minute opioid wave that vanishes completely within 15 minutes.",
    "subjectiveTags": [
      "10 µg (0.01 mg) Threshold",
      "3–10 Minute Blood Esterase Half-Life",
      "Zero Cumulative Tissue Storage",
      "High Acute Apnea Risk"
    ],
    "phases": {
      "onsetFeel": "30–60 seconds.",
      "peakFeel": "5–10 minutes of intense opioid anesthesia.",
      "comedownFeel": "Complete offset within 10–15 minutes."
    }
  },
  "meperidine": {
    "physicalFormLabel": "White Scored Demerol 50/100mg Tablets",
    "physicalAppearance": "White round scored tablets or injectable solution.",
    "recreationalFeel": "Produces a fast, slightly lightheaded, less nauseating rush than morphine with wider pupils (due to anticholinergic effects), lasting only 2–3 hours.",
    "subjectiveTags": [
      "15 mg Oral Threshold",
      "Fast 2–3 Hour Duration",
      "Dangerous with MAOIs / SSRIs",
      "Cumulative Normeperidine Seizure Hazard"
    ],
    "phases": {
      "onsetFeel": "15–25 minute rapid warm rush.",
      "peakFeel": "90–120 minutes of lightheaded, warm euphoria.",
      "comedownFeel": "Quick offset; avoid repeated redosing."
    }
  },
  "tianeptine": {
    "physicalFormLabel": "White Oval 12.5mg Coated Tablets or Hygroscopic Sodium Powder",
    "physicalAppearance": "Small white oval coated tablets (Stablon 12.5 mg) or clumpy white sodium powder.",
    "recreationalFeel": "At 12.5–25 mg gives a subtle, bright mood lift; at higher doses, Tianeptine Sodium hits in 15 minutes with a surprisingly strong, energetic oxycodone-like rush that vanishes within 2 hours.",
    "subjectiveTags": [
      "12.5 mg Therapeutic / Threshold Dose",
      "Fast 15-Min Sodium Salt Rush",
      "Short 2–3 Hour Duration",
      "High Rapid Dependence Risk"
    ],
    "phases": {
      "onsetFeel": "15–20 minute warm rush (Sodium) or 60 min (Sulfate).",
      "peakFeel": "60–90 minutes of energetic opioid warmth and mood elevation.",
      "comedownFeel": "Abrupt drop-off at 2.5 hours."
    }
  },
  "mitragynine": {
    "physicalFormLabel": "Green Botanical Leaf Powder or Alkaloid Extract",
    "physicalAppearance": "Finely ground bitter green leaf powder or amber liquid extract.",
    "recreationalFeel": "Dose-bifurcated: 10–30 mg mitragynine (1–2 g leaf) feels like warm, pain-relieving coffee with sociable focus, while 50–100 mg (4–7 g leaf) shifts into a cozy, sedating opioid blanket.",
    "subjectiveTags": [
      "10 mg Pure Alkaloid (~0.7g Leaf) Threshold",
      "Low Dose = Energizing / High Dose = Sedating",
      "G-Protein Biased Partial MOR Agonist",
      "Eye \"Wobbles\" & Nausea if Overdosed"
    ],
    "phases": {
      "onsetFeel": "20–35 minute warm mood lift and pain relief.",
      "peakFeel": "3–4 hours of sociable motivation or cozy opioid relaxation.",
      "comedownFeel": "Gentle taper over 2 hours."
    }
  },
  "7-hydroxymitragynine": {
    "physicalFormLabel": "Scored 14–18mg Extract Tablets or Amber Powder",
    "physicalAppearance": "Small scored pressed tablets or golden-orange alkaloid powder.",
    "recreationalFeel": "Feels dramatically stronger and cleaner than raw Kratom leaf—5 to 15 mg delivers a direct, unmistakable oxycodone-like wave of warm euphoria without the stomach bulk or \"eye wobbles\" of plant powder.",
    "subjectiveTags": [
      "1.0 mg Oral / 0.5 mg Sublingual Threshold",
      "~10× Stronger than Parent Mitragynine",
      "Fast 15–25 Minute Onset",
      "High Rapid Dependence Liability"
    ],
    "phases": {
      "onsetFeel": "15–25 minute rapid wave of opioid warmth.",
      "peakFeel": "2.5–3.5 hours of clean, heavy euphoria and analgesia.",
      "comedownFeel": "Brisk offset with strong urge to redose."
    }
  },
  "levorphanol": {
    "physicalFormLabel": "White Scored 2mg Tablets",
    "physicalAppearance": "Small white scored 2 mg tablets.",
    "recreationalFeel": "Delivers a deep, smooth, 8-hour morphinan blanket that relieves both physical and neuropathic pain with less nausea than morphine.",
    "subjectiveTags": [
      "0.5 mg Oral Threshold (2 mg Tablet)",
      "4–8× Morphine Potency",
      "Dual MOR Agonist + NMDA Antagonist",
      "Long 11–16 Hour Half-Life"
    ],
    "phases": {
      "onsetFeel": "30–45 minute smooth onset.",
      "peakFeel": "6–8 hours of deep analgesia and calm warmth.",
      "comedownFeel": "Slow, extended taper."
    }
  },
  "dextromoramide": {
    "physicalFormLabel": "White Peach/Round Palfium 5mg/10mg Tablets",
    "physicalAppearance": "White round or peach-tinted 5 mg and 10 mg tablets.",
    "recreationalFeel": "Historically renowned in Europe and Australia as one of the most euphoric oral pharmaceuticals ever made: a 5 mg tablet dissolved under the tongue hits in 10 minutes with a heroin-like wave of golden euphoria.",
    "subjectiveTags": [
      "1.5 mg Oral / 1.0 mg Sublingual Threshold",
      "~90% Oral Bioavailability",
      "Fast 10–15 Minute Oral Rush",
      "3× Morphine Analgesic Potency"
    ],
    "phases": {
      "onsetFeel": "10–15 minute rapid oral/sublingual rush.",
      "peakFeel": "2.5–3.5 hours of intense, clear-headed opioid bliss.",
      "comedownFeel": "Clean 1.5-hour offset."
    }
  },
  "dipipanone": {
    "physicalFormLabel": "Pink Diconal 10mg Tablets",
    "physicalAppearance": "Distinctive coral-pink film-coated tablets (10 mg dipipanone + 30 mg cyclizine).",
    "recreationalFeel": "Produces a heavy, dreamy, intensely euphoric rush—especially when combined with cyclizine in Diconal—followed by 4–5 hours of deep sedation.",
    "subjectiveTags": [
      "2.5 mg Oral Threshold (10 mg Tablet)",
      "Piperidine Analog of Methadone",
      "Intense Euphoric Rush",
      "4–6 Hour Duration"
    ],
    "phases": {
      "onsetFeel": "20–30 minute heavy wave of warmth.",
      "peakFeel": "3–4 hours of deep nodding euphoria.",
      "comedownFeel": "Slow 2-hour fade."
    }
  },
  "ketobemidone": {
    "physicalFormLabel": "Ketogan Tablets / Suppositories / Ampoules",
    "physicalAppearance": "White tablets or injectable ampoules.",
    "recreationalFeel": "Combines a fast, warm phenylpiperidine rush with a floaty, pain-dissolving NMDA warmth lasting 3–5 hours.",
    "subjectiveTags": [
      "2.5 mg Oral Threshold (5 mg Tablet)",
      "Dual MOR Agonist + NMDA Antagonist",
      "Fast 15–25 Minute Onset",
      "3–5 Hour Duration"
    ],
    "phases": {
      "onsetFeel": "15–25 minute rapid warm rush.",
      "peakFeel": "2.5–3.5 hours of floaty, euphoric analgesia.",
      "comedownFeel": "Brisk 1.5-hour taper."
    }
  },
  "piritramide": {
    "physicalFormLabel": "Dipidolor 15mg/2mL Glass Ampoules",
    "physicalAppearance": "Clear injectable solution in 2 mL glass ampoules.",
    "recreationalFeel": "Produces a remarkably calm, heavy, nausea-free post-operative sedation and pain relief lasting 6 hours with less itching than morphine.",
    "subjectiveTags": [
      "3.0 mg Threshold (7.5–15 mg Clinical Dose)",
      "0.75× Morphine Potency",
      "Low Histamine / Low Nausea Profile",
      "5–7 Hour Duration"
    ],
    "phases": {
      "onsetFeel": "10–20 minute smooth wave of heavy calm.",
      "peakFeel": "4–5 hours of deep, quiet sedation and analgesia.",
      "comedownFeel": "Slow 3-hour taper."
    }
  },
  "carfentanil": {
    "physicalFormLabel": "Veterinary Vial or Invisible Adulterant Trace",
    "physicalAppearance": "Trace crystalline powder invisible to the naked eye.",
    "recreationalFeel": "Produces instantaneous loss of consciousness and heavy anesthesia at microgram levels with almost no margin between sedation and respiratory arrest.",
    "subjectiveTags": [
      "0.1 µg (0.0001 mg / 100 ng) Threshold",
      "100× Fentanyl / 10,000× Morphine Potency",
      "Requires Multiple Naloxone Doses",
      "Extreme Fatal Overdose Hazard"
    ],
    "phases": {
      "onsetFeel": "1–2 minutes into deep immobilization.",
      "peakFeel": "3–5 hours of heavy coma-bordering sedation.",
      "comedownFeel": "Slow dissociation from μ-opioid receptors."
    }
  },
  "lofentanil": {
    "physicalFormLabel": "Trace Research Standard",
    "physicalAppearance": "Crystalline trace solid.",
    "recreationalFeel": "Locks onto opioid receptors for 10–18 hours at sub-microgram doses.",
    "subjectiveTags": [
      "0.5 µg (0.0005 mg) Threshold",
      "Ultra-Slow Receptor Dissociation",
      "10–18 Hour Duration",
      "Extreme Renarcotization Risk"
    ],
    "phases": {
      "onsetFeel": "2–4 minutes.",
      "peakFeel": "8–12 hours of deep receptor lock.",
      "comedownFeel": "Slow 6-hour offset."
    }
  },
  "acetylfentanyl": {
    "physicalFormLabel": "White/Tan Powder or Pressed Pills",
    "physicalAppearance": "White to off-white powder.",
    "recreationalFeel": "Produces a fast, heavy 60–90 minute opioid nod with slightly more warmth than fentanyl.",
    "subjectiveTags": [
      "30 µg (0.03 mg) Nasal / 50 µg Oral Threshold",
      "~1/3 Fentanyl Potency (~20× Morphine)",
      "Short 1–2 Hour Duration",
      "High Respiratory Arrest Risk"
    ],
    "phases": {
      "onsetFeel": "2–4 minutes.",
      "peakFeel": "60–90 minutes of heavy sedation.",
      "comedownFeel": "Quick 1-hour drop-off."
    }
  },
  "butyrylfentanyl": {
    "physicalFormLabel": "White Crystalline Powder",
    "physicalAppearance": "White crystalline powder.",
    "recreationalFeel": "Delivers a 2-hour wave of heavy, sedating analgesia active from 40–60 micrograms.",
    "subjectiveTags": [
      "40 µg (0.04 mg) Nasal / 60 µg Oral Threshold",
      "~1/4 Fentanyl Potency",
      "1.5–3 Hour Duration",
      "Detected by Fentanyl Test Strips"
    ],
    "phases": {
      "onsetFeel": "2–5 minutes.",
      "peakFeel": "90–120 minutes of heavy opioid sedation.",
      "comedownFeel": "1-hour taper."
    }
  },
  "furanylfentanyl": {
    "physicalFormLabel": "White/Off-White Powder",
    "physicalAppearance": "Fine white powder.",
    "recreationalFeel": "Known among fentanyl analogs for a warmer, more euphoric initial rush lasting 60–90 minutes, active at 20–30 micrograms.",
    "subjectiveTags": [
      "20 µg (0.02 mg) Nasal / 30 µg Oral Threshold",
      "Warm Fast Rush vs Standard Fentanyl",
      "Short 1–2 Hour Duration",
      "High Overdose Risk"
    ],
    "phases": {
      "onsetFeel": "1–3 minutes.",
      "peakFeel": "60–90 minutes of warm, heavy euphoria.",
      "comedownFeel": "Brisk 1-hour offset."
    }
  },
  "valerylfentanyl": {
    "physicalFormLabel": "White Powder",
    "physicalAppearance": "White powder.",
    "recreationalFeel": "Produces a 2–3 hour sedating opioid effect at 100–300 micrograms.",
    "subjectiveTags": [
      "100 µg (0.1 mg) Nasal / 150 µg Oral Threshold",
      "~1/10th Fentanyl Potency (~8× Morphine)",
      "2–3 Hour Duration",
      "High Lipophilicity"
    ],
    "phases": {
      "onsetFeel": "3–5 minutes.",
      "peakFeel": "90–120 minutes of sedation.",
      "comedownFeel": "1.5-hour taper."
    }
  },
  "acrylfentanyl": {
    "physicalFormLabel": "White Crystalline Powder or Nasal Spray",
    "physicalAppearance": "White powder or illicit nasal spray solution.",
    "recreationalFeel": "Hits within minutes at 8–20 micrograms with heavy sedation lasting longer than standard fentanyl (3–4 hours).",
    "subjectiveTags": [
      "8 µg (0.008 mg) Nasal / 12 µg Oral Threshold",
      "1.0–1.5× Fentanyl Potency",
      "Longer 3–4 Hour Duration than Fentanyl",
      "Tight Receptor Binding"
    ],
    "phases": {
      "onsetFeel": "1–3 minutes.",
      "peakFeel": "2–3 hours of heavy sedation.",
      "comedownFeel": "1.5-hour offset."
    }
  },
  "ocfentanil": {
    "physicalFormLabel": "White Powder (Heroin Adulterant)",
    "physicalAppearance": "Fine white powder.",
    "recreationalFeel": "Produces a rapid, fentanyl-like wave of analgesia and heavy sedation at just 5–15 micrograms.",
    "subjectiveTags": [
      "5 µg (0.005 mg) Nasal / 8 µg Oral Threshold",
      "2.5× Fentanyl Potency (~200× Morphine)",
      "Short 1–2 Hour Duration",
      "High Acute Overdose Risk"
    ],
    "phases": {
      "onsetFeel": "1–3 minutes.",
      "peakFeel": "60–90 minutes of intense sedation.",
      "comedownFeel": "Rapid 1-hour clearance."
    }
  },
  "3-methylfentanyl": {
    "physicalFormLabel": "White Powder",
    "physicalAppearance": "Fine white powder.",
    "recreationalFeel": "Hits with overwhelming μ-opioid warmth and sedation at just 2–10 micrograms.",
    "subjectiveTags": [
      "2 µg (0.002 mg) Nasal / 4 µg Oral Threshold",
      "4–15× Fentanyl Potency",
      "Cis-Isomer ~6,000× Morphine",
      "Extreme Fatal Apnea Risk"
    ],
    "phases": {
      "onsetFeel": "1–3 minutes.",
      "peakFeel": "1.5–2.5 hours of heavy nodding sedation.",
      "comedownFeel": "1.5-hour offset."
    }
  },
  "4-fibf": {
    "physicalFormLabel": "White Powder",
    "physicalAppearance": "White crystalline powder.",
    "recreationalFeel": "Delivers a heavy, slightly longer-lasting (3–4 hour) sedating opioid plateau active from 30–50 micrograms.",
    "subjectiveTags": [
      "30 µg (0.03 mg) Nasal / 50 µg Oral Threshold",
      "~1/3 Fentanyl Potency",
      "3–4 Hour Extended Duration",
      "High Overdose Risk"
    ],
    "phases": {
      "onsetFeel": "2–5 minutes.",
      "peakFeel": "2–3 hours of heavy sedation.",
      "comedownFeel": "1.5-hour taper."
    }
  },
  "thf-f": {
    "physicalFormLabel": "White/Off-White Powder",
    "physicalAppearance": "Off-white crystalline powder.",
    "recreationalFeel": "A saturated cousin of Furanylfentanyl active at 50–150 micrograms with a 2-hour warm opioid arc.",
    "subjectiveTags": [
      "50 µg (0.05 mg) Nasal / 80 µg Oral Threshold",
      "~1/5 Fentanyl Potency (~18× Morphine)",
      "1.5–3 Hour Duration",
      "Sub-Milligram Overdose Risk"
    ],
    "phases": {
      "onsetFeel": "2–5 minutes.",
      "peakFeel": "90 minutes of warm opioid sedation.",
      "comedownFeel": "1-hour taper."
    }
  },
  "isotonitazene": {
    "physicalFormLabel": "Yellowish/Off-White Powder or Counterfeit M30/Dilaudid Pills",
    "physicalAppearance": "Pale yellow to off-white powder often pressed into counterfeit oxycodone or hydromorphone tablets.",
    "recreationalFeel": "Hits with frightening speed and weight at just 5–15 micrograms, delivering a deep, 4–5 hour heavy nod with severe respiratory depression.",
    "subjectiveTags": [
      "5 µg (0.005 mg) Nasal / 10 µg Oral Threshold",
      "~5× Fentanyl / ~500× Morphine Potency",
      "Forms Ultra-Potent N-Desethyl Metabolite",
      "Negative on Fentanyl Strips (Use Nitazene Strips)"
    ],
    "phases": {
      "onsetFeel": "1–3 minutes.",
      "peakFeel": "3–4 hours of heavy, immobilizing sedation.",
      "comedownFeel": "Slow 2–3 hour taper due to active metabolite."
    }
  },
  "metonitazene": {
    "physicalFormLabel": "Pale Yellow/Tan Powder or Counterfeit Tablets",
    "physicalAppearance": "Off-white to pale yellowish powder.",
    "recreationalFeel": "Delivers a warm, heavy, 3–5 hour opioid nod at 15–50 micrograms that rapidly sky-rockets opioid tolerance within days.",
    "subjectiveTags": [
      "15 µg (0.015 mg) Nasal / 30 µg Oral Threshold",
      "~1× Fentanyl / ~100× Morphine Potency",
      "3–5 Hour Duration",
      "Rapid Receptor Tolerance Escalation"
    ],
    "phases": {
      "onsetFeel": "2–4 minutes.",
      "peakFeel": "2.5–3.5 hours of heavy warm sedation.",
      "comedownFeel": "1.5-hour offset."
    }
  },
  "etonitazene": {
    "physicalFormLabel": "Yellowish Crystalline Powder or Nasal Solution",
    "physicalAppearance": "Pale yellow crystalline solid.",
    "recreationalFeel": "Combines extreme 1-microgram potency with intense euphoria and life-threatening respiratory depression.",
    "subjectiveTags": [
      "1 µg (0.001 mg) Nasal / 2 µg Oral Threshold",
      "~10–15× Fentanyl / ~1,000× Morphine Potency",
      "3–5 Hour Duration",
      "Requires Multiple Naloxone Doses"
    ],
    "phases": {
      "onsetFeel": "1–2 minutes.",
      "peakFeel": "3–4 hours of profound sedation and euphoria.",
      "comedownFeel": "2-hour taper."
    }
  },
  "protonitazene": {
    "physicalFormLabel": "Pale Yellow Powder or Counterfeit Pills",
    "physicalAppearance": "Off-white to yellow powder.",
    "recreationalFeel": "Active at 5–20 micrograms with a heavy 4–6 hour sedative nod.",
    "subjectiveTags": [
      "5 µg (0.005 mg) Nasal / 10 µg Oral Threshold",
      "~2–3× Fentanyl / ~200× Morphine Potency",
      "4–6 Hour Duration",
      "High Fatal Overdose Risk"
    ],
    "phases": {
      "onsetFeel": "1–3 minutes.",
      "peakFeel": "3–4 hours of heavy sedation.",
      "comedownFeel": "2-hour taper."
    }
  },
  "butonitazene": {
    "physicalFormLabel": "Yellowish Powder",
    "physicalAppearance": "Pale yellow powder.",
    "recreationalFeel": "Delivers a 3–5 hour sedating opioid nod starting at 30–50 micrograms.",
    "subjectiveTags": [
      "30 µg (0.03 mg) Nasal / 50 µg Oral Threshold",
      "~0.5× Fentanyl / ~50× Morphine Potency",
      "3–5 Hour Duration",
      "High Lipophilicity"
    ],
    "phases": {
      "onsetFeel": "2–5 minutes.",
      "peakFeel": "2.5–3.5 hours of heavy sedation.",
      "comedownFeel": "1.5-hour taper."
    }
  },
  "flunitazene": {
    "physicalFormLabel": "Off-White/Yellowish Powder",
    "physicalAppearance": "Pale yellow crystalline powder.",
    "recreationalFeel": "The weakest of the nitazenes, active in the 0.2–2 mg range rather than low micrograms.",
    "subjectiveTags": [
      "200 µg (0.2 mg) Nasal / 0.5 mg Oral Threshold",
      "~1–5× Morphine Potency",
      "2.5–4 Hour Duration",
      "Lacks para-Alkoxy Super-Potency"
    ],
    "phases": {
      "onsetFeel": "3–6 minutes.",
      "peakFeel": "2–3 hours of warm opioid sedation.",
      "comedownFeel": "1.5-hour taper."
    }
  },
  "etazene": {
    "physicalFormLabel": "White/Grey Crystalline Powder or Nasal Spray",
    "physicalAppearance": "White to light-grey powder.",
    "recreationalFeel": "Produces a fast, intensely euphoric 60–90 minute opioid rush at 25–100 micrograms followed by rapid tolerance build-up.",
    "subjectiveTags": [
      "25 µg (0.025 mg) Nasal / 50 µg Oral Threshold",
      "~70× Morphine Potency",
      "Fast 60–90 Min Euphoric Peak",
      "High Compulsive Redosing"
    ],
    "phases": {
      "onsetFeel": "1–3 minutes.",
      "peakFeel": "60–90 minutes of intense warm euphoria.",
      "comedownFeel": "Rapid 1-hour drop-off."
    }
  },
  "u-47700": {
    "physicalFormLabel": "Pinkish-White Crystalline Powder (\"Pink\")",
    "physicalAppearance": "Fluffy white or slightly pinkish crystalline powder.",
    "recreationalFeel": "Nicknamed the \"Crack of Opioids\": 3–8 mg delivers an explosive, hydromorphone-like wave of warm euphoria for 45–60 minutes that vanishes abruptly into fierce cravings and caustic nasal burn.",
    "subjectiveTags": [
      "1.0 mg Nasal / 1.5 mg Oral Threshold",
      "~7.5× Morphine Potency",
      "Explosive 45–60 Min Hydromorphone-Like Rush",
      "Highly Caustic to Mucous Membranes"
    ],
    "phases": {
      "onsetFeel": "2–5 minutes into a heavy warm rush.",
      "peakFeel": "45–75 minutes of intense euphoria and itching.",
      "comedownFeel": "Abrupt crash at 90 minutes triggering redosing."
    }
  },
  "u-48800": {
    "physicalFormLabel": "White/Off-White Powder",
    "physicalAppearance": "White crystalline powder.",
    "recreationalFeel": "Less euphoric and more sedating/dreamy than U-47700 due to mixed κ-opioid activity, lasting 2–3 hours.",
    "subjectiveTags": [
      "1.5 mg Nasal / 2.5 mg Oral Threshold",
      "Mixed μ / κ-Opioid Profile",
      "2–3 Hour Duration",
      "Caustic HCl Salt"
    ],
    "phases": {
      "onsetFeel": "5–15 minutes.",
      "peakFeel": "90–120 minutes of heavy, dreamy sedation.",
      "comedownFeel": "1-hour taper."
    }
  },
  "ah-7921": {
    "physicalFormLabel": "Off-White Crystalline Powder",
    "physicalAppearance": "Off-white crystalline powder.",
    "recreationalFeel": "Feels heavier, more sedating, and longer-lasting (4–6 hours) than U-47700 with ~80% of morphine’s strength.",
    "subjectiveTags": [
      "3.0 mg Nasal / 5.0 mg Oral Threshold",
      "~0.8× Morphine Potency",
      "4–6 Hour Duration",
      "Mixed μ + κ-Opioid Sedation"
    ],
    "phases": {
      "onsetFeel": "25–40 minute onset.",
      "peakFeel": "3–4 hours of heavy physical sedation.",
      "comedownFeel": "2-hour taper."
    }
  },
  "mt-45": {
    "physicalFormLabel": "White Crystalline HCl Powder",
    "physicalAppearance": "Snow-white crystalline powder.",
    "recreationalFeel": "Takes a full 60–90 minutes to kick in orally, producing a heavy, slightly dissociative 6-hour opioid sedation, but notorious for causing sudden hearing loss and hair/eyelash whitening.",
    "subjectiveTags": [
      "3.0 mg Nasal / 5.0 mg Oral Threshold",
      "Slow 60–90 Minute Oral Onset",
      "Severe Hearing Loss (Ototoxicity) Hazard",
      "5–8 Hour Duration"
    ],
    "phases": {
      "onsetFeel": "Delayed 60–90 minute oral onset.",
      "peakFeel": "4–5 hours of heavy, slightly dissociative sedation.",
      "comedownFeel": "Slow 3-hour offset."
    }
  },
  "brorphine": {
    "physicalFormLabel": "Purple/Grey/White Powder",
    "physicalAppearance": "Often dyed purple (\"Purple Fentanyl/Heroin\") or white powder.",
    "recreationalFeel": "Produces a slow-building, heavy 6–10 hour sedation at 25–100 micrograms with minimal rush.",
    "subjectiveTags": [
      "25 µg (0.025 mg) Nasal / 50 µg Oral Threshold",
      "~1× Fentanyl / ~100× Morphine Potency",
      "6–10 Hour Duration",
      "Cardiac hERG QT Prolongation Hazard"
    ],
    "phases": {
      "onsetFeel": "10–20 minute gradual onset.",
      "peakFeel": "5–7 hours of heavy, immobilizing sedation.",
      "comedownFeel": "Slow 3-hour taper."
    }
  }
};
