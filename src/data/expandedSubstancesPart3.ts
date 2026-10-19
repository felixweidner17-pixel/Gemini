import { CannabinoidProfile } from './cannabinoids';

export const EXPANDED_SUBSTANCES_PART3: CannabinoidProfile[] = [
  {
    "id": "temazepam",
    "name": "Temazepam (Restoril · Normison · 3-Hydroxy-1,4-Benzodiazepine)",
    "shortName": "Temazepam",
    "synonyms": [
      "Restoril",
      "Normison",
      "Euhypnos",
      "Tenox"
    ],
    "classification": "Benzodiazepine",
    "riskTier": "High",
    "pubchemCid": 5391,
    "molecularFormula": "C16H13ClN2O2",
    "molecularWeight": 300.74,
    "canonicalSmiles": "CN1C2=C(C=C(C=C2)Cl)C(=NC(C1=O)O)C3=CC=CC=C3",
    "xLogP": 2.2,
    "cb1KiNm": 5,
    "cb2KiNm": 0,
    "cb1Efficacy": "GABAA Positive Allosteric Modulator (α1/α2/α3/α5 PAM)",
    "cb2Efficacy": "Hypnotic 3-Hydroxybenzodiazepine",
    "relativePotencyVsD9": 1,
    "psychoactive": true,
    "alkylChainLength": "3-Hydroxy-N-methyldiazepam",
    "cypEnzymes": [
      "CYP3A4",
      "UGT2B7"
    ],
    "primaryMetabolite": "Temazepam-O-Glucuronide (Inactive)",
    "immunoassayCrossReactivityPct": 90,
    "terminalHalfLifeHours": 10,
    "inhaledOnsetMinutes": [
      20,
      45
    ],
    "inhaledDurationHours": [
      6,
      8
    ],
    "oralOnsetMinutes": [
      25,
      60
    ],
    "oralDurationHours": [
      7,
      10
    ],
    "baseOralThresholdMg": 7.5,
    "baseInhaledThresholdMg": 5,
    "radarProfile": {
      "cb1AffinityScore": 40,
      "euphoriaPotency": 78,
      "somaticSedation": 88,
      "anxiogenicRisk": 10,
      "durationPersistence": 52,
      "lipidRetention": 28
    },
    "summary": "Classic 3-hydroxy hypnotic benzodiazepine (Restoril). Highly effective sleep inducer with rapid oral absorption, delivering cozy physical sedation and warm muscular relaxation without prolonged next-day hangover.",
    "pharmacologyNotes": "Cleared primarily via direct Phase II glucuronidation, making it safer in patients with hepatic impairment.",
    "specificHazards": [
      "Anterograde amnesia and physical dependence with regular nightly use."
    ],
    "sideEffects": [
      {
        "effect": "Cozy Hypnotic Muscle Relaxation & Rapid Sleep Induction",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "GABAA Positive Allosteric Modulator (α1/α2/α3/α5 PAM)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Temazepam",
      "source": "PubChem CID 5391",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/5391"
    }
  },
  {
    "id": "triazolam",
    "name": "Triazolam (Halcion · Ultra-Short Triazolobenzodiazepine)",
    "shortName": "Triazolam",
    "synonyms": [
      "Halcion",
      "Novodorm"
    ],
    "classification": "Benzodiazepine",
    "riskTier": "Extreme",
    "pubchemCid": 5556,
    "molecularFormula": "C17H12Cl2N4",
    "molecularWeight": 343.21,
    "canonicalSmiles": "CC1=NN=C2CN=C(C3=C(C=CC(=C3)Cl)N12)C4=CC=CC=C4Cl",
    "xLogP": 2.4,
    "cb1KiNm": 0.5,
    "cb2KiNm": 0,
    "cb1Efficacy": "High-Potency GABAA α1-Selective Triazolobenzodiazepine PAM",
    "cb2Efficacy": "Ultra-Short Hypnotic Triazolam",
    "relativePotencyVsD9": 4.5,
    "psychoactive": true,
    "alkylChainLength": "1-Methyl-triazolo-1,4-benzodiazepine",
    "cypEnzymes": [
      "CYP3A4"
    ],
    "primaryMetabolite": "1-Hydroxytriazolam & 4-Hydroxytriazolam",
    "immunoassayCrossReactivityPct": 85,
    "terminalHalfLifeHours": 2.5,
    "inhaledOnsetMinutes": [
      10,
      20
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
    "baseOralThresholdMg": 0.125,
    "baseInhaledThresholdMg": 0.1,
    "radarProfile": {
      "cb1AffinityScore": 82,
      "euphoriaPotency": 82,
      "somaticSedation": 98,
      "anxiogenicRisk": 14,
      "durationPersistence": 18,
      "lipidRetention": 24
    },
    "summary": "High-potency, ultra-short-acting triazolobenzodiazepine (Halcion) active at 0.125–0.25 mg. Rapidly knocks out insomnia but known for anterograde amnesia and rebound daytime anxiety due to its steep 2-hour half-life.",
    "pharmacologyNotes": "Rapidly hydroxylated by CYP3A4.",
    "specificHazards": [
      "SEVERE ANTEROGRADE AMNESIA (\"Halcion Blackout\"): High risk of total memory wiping and sleep-walking activities."
    ],
    "sideEffects": [
      {
        "effect": "Sudden Hypnotic Sleep, Deep Amnesia & Rapid Clearance",
        "system": "Psychiatric",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "High-Potency GABAA α1-Selective Triazolobenzodiazepine PAM"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Triazolam",
      "source": "PubChem CID 5556",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/5556"
    }
  },
  {
    "id": "chlordiazepoxide",
    "name": "Chlordiazepoxide (Librium · Archetypal Benzodiazepine)",
    "shortName": "Chlordiazepoxide",
    "synonyms": [
      "Librium",
      "Klopoxide",
      "Tropium"
    ],
    "classification": "Benzodiazepine",
    "riskTier": "Moderate",
    "pubchemCid": 2712,
    "molecularFormula": "C16H14ClN3O",
    "molecularWeight": 299.75,
    "canonicalSmiles": "CN=C1CN=C(C2=C(C=C(C=C2)Cl)[N+]1=O)C3=CC=CC=C3",
    "xLogP": 2.4,
    "cb1KiNm": 25,
    "cb2KiNm": 0,
    "cb1Efficacy": "Classic GABAA PAM (First Benzodiazepine Synthesized by Leo Sternbach in 1955)",
    "cb2Efficacy": "Archetypal Long-Acting 1,4-Benzodiazepine",
    "relativePotencyVsD9": 0.4,
    "psychoactive": true,
    "alkylChainLength": "7-Chloro-2-methylamino-5-phenyl-3H-1,4-benzodiazepine-4-oxide",
    "cypEnzymes": [
      "CYP3A4",
      "CYP2C19"
    ],
    "primaryMetabolite": "Desmethylchlordiazepoxide, Demoxepam & Desmethyldiazepam",
    "immunoassayCrossReactivityPct": 90,
    "terminalHalfLifeHours": 24,
    "inhaledOnsetMinutes": [
      30,
      60
    ],
    "inhaledDurationHours": [
      8,
      14
    ],
    "oralOnsetMinutes": [
      45,
      90
    ],
    "oralDurationHours": [
      12,
      24
    ],
    "baseOralThresholdMg": 5,
    "baseInhaledThresholdMg": 5,
    "radarProfile": {
      "cb1AffinityScore": 40,
      "euphoriaPotency": 55,
      "somaticSedation": 65,
      "anxiogenicRisk": 8,
      "durationPersistence": 85,
      "lipidRetention": 32
    },
    "summary": "The grandfather of all benzodiazepines (synthesized 1955; Librium). Cleared through multiple active hepatic metabolites (nordazepam), giving a smooth 24–48 hour therapeutic tail used as the clinical gold standard for acute alcohol withdrawal detoxification.",
    "pharmacologyNotes": "Long-acting prodrug cascade prevents withdrawal seizures.",
    "specificHazards": [
      "Accumulates significantly upon daily dosing."
    ],
    "sideEffects": [
      {
        "effect": "Steady 24-Hour Calm, Tremor Suppression & Anti-Seizure Protection",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Classic GABAA PAM (First Benzodiazepine Synthesized by Leo Sternbach in 1955)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Chlordiazepoxide",
      "source": "PubChem CID 2712",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/2712"
    }
  },
  {
    "id": "oxazepam",
    "name": "Oxazepam (Serax · Sobril · Active Polar Benzodiazepine Metabolite)",
    "shortName": "Oxazepam",
    "synonyms": [
      "Serax",
      "Sobril",
      "Alepam",
      "Praxiten"
    ],
    "classification": "Benzodiazepine",
    "riskTier": "Moderate",
    "pubchemCid": 4616,
    "molecularFormula": "C15H11ClN2O2",
    "molecularWeight": 286.71,
    "canonicalSmiles": "C1=CC=C(C=C1)C2=NC(C(=O)NC3=C2C=CC(=C3)Cl)O",
    "xLogP": 2.2,
    "cb1KiNm": 18,
    "cb2KiNm": 0,
    "cb1Efficacy": "Direct GABAA PAM (Polar 3-Hydroxy Terminal Benzodiazepine)",
    "cb2Efficacy": "Slow-Absorption Phase II Glucuronidation Anxiolytic",
    "relativePotencyVsD9": 0.5,
    "psychoactive": true,
    "alkylChainLength": "3-Hydroxy-nordiazepam",
    "cypEnzymes": [
      "UGT2B7",
      "UGT1A9"
    ],
    "primaryMetabolite": "Oxazepam-Glucuronide (Inactive)",
    "immunoassayCrossReactivityPct": 90,
    "terminalHalfLifeHours": 8,
    "inhaledOnsetMinutes": [
      30,
      60
    ],
    "inhaledDurationHours": [
      4,
      6
    ],
    "oralOnsetMinutes": [
      45,
      90
    ],
    "oralDurationHours": [
      6,
      8
    ],
    "baseOralThresholdMg": 7.5,
    "baseInhaledThresholdMg": 5,
    "radarProfile": {
      "cb1AffinityScore": 42,
      "euphoriaPotency": 52,
      "somaticSedation": 68,
      "anxiogenicRisk": 8,
      "durationPersistence": 42,
      "lipidRetention": 22
    },
    "summary": "Final active polar 3-hydroxy metabolite of diazepam and chlordiazepoxide (Serax). Because it has relatively low lipid solubility, it absorbs slowly over 60–90 minutes, minimizing rush or abuse potential, and clears entirely via direct Phase II glucuronidation.",
    "pharmacologyNotes": "Ideal for elderly patients or those with liver disease.",
    "specificHazards": [
      "Slow onset makes it unsuitable for acute panic attacks."
    ],
    "sideEffects": [
      {
        "effect": "Gentle, Unhurried Anxiolysis & Low Abuse Liability",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Direct GABAA PAM (Polar 3-Hydroxy Terminal Benzodiazepine)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Oxazepam",
      "source": "PubChem CID 4616",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/4616"
    }
  },
  {
    "id": "nitrazepam",
    "name": "Nitrazepam (Mogadon · Hypnotic 7-Nitrobenzodiazepine)",
    "shortName": "Nitrazepam",
    "synonyms": [
      "Mogadon",
      "Alodorm",
      "Pacisyn"
    ],
    "classification": "Benzodiazepine",
    "riskTier": "High",
    "pubchemCid": 4507,
    "molecularFormula": "C15H11N3O3",
    "molecularWeight": 281.27,
    "canonicalSmiles": "C1=CC=C(C=C1)C2=NC(C(=O)NC3=C2C=CC(=C3)[N+](=O)[O-])",
    "xLogP": 2.3,
    "cb1KiNm": 3.5,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent GABAA Hypnotic & Anticonvulsant PAM (7-Nitro-1,4-Benzodiazepine)",
    "cb2Efficacy": "Classic European Sleep Inducer",
    "relativePotencyVsD9": 1.4,
    "psychoactive": true,
    "alkylChainLength": "7-Nitro-5-phenyl-1,3-dihydro-2H-1,4-benzodiazepin-2-one",
    "cypEnzymes": [
      "Hepatic Nitroreduction (NAT2)"
    ],
    "primaryMetabolite": "7-Aminonitrazepam (Inactive)",
    "immunoassayCrossReactivityPct": 90,
    "terminalHalfLifeHours": 26,
    "inhaledOnsetMinutes": [
      20,
      40
    ],
    "inhaledDurationHours": [
      8,
      12
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      10,
      16
    ],
    "baseOralThresholdMg": 2.5,
    "baseInhaledThresholdMg": 2,
    "radarProfile": {
      "cb1AffinityScore": 68,
      "euphoriaPotency": 74,
      "somaticSedation": 92,
      "anxiogenicRisk": 10,
      "durationPersistence": 78,
      "lipidRetention": 30
    },
    "summary": "Classic 7-nitro hypnotic benzodiazepine (Mogadon). Delivers powerful, long-lasting sedation (t½ ~26 h) that guarantees uninterrupted 8-hour sleep, though often causes morning drowsiness.",
    "pharmacologyNotes": "Metabolized via hepatic nitroreduction into inactive 7-aminonitrazepam.",
    "specificHazards": [
      "Next-day motor sluggishness and impairment when driving in the morning."
    ],
    "sideEffects": [
      {
        "effect": "Heavy All-Night Sleep & Morning Hangover Sluggishness",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Potent GABAA Hypnotic & Anticonvulsant PAM (7-Nitro-1,4-Benzodiazepine)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Nitrazepam",
      "source": "PubChem CID 4507",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/4507"
    }
  },
  {
    "id": "flurazepam",
    "name": "Flurazepam (Dalmane · Long-Acting Fluorinated Hypnotic)",
    "shortName": "Flurazepam",
    "synonyms": [
      "Dalmane",
      "Dalmadorm"
    ],
    "classification": "Benzodiazepine",
    "riskTier": "High",
    "pubchemCid": 3393,
    "molecularFormula": "C21H23ClFN3O",
    "molecularWeight": 387.88,
    "canonicalSmiles": "CCN(CC)CCN1C(=O)CN=C(C2=C1C=CC(=C2)Cl)C3=CC=CC=C3F",
    "xLogP": 3,
    "cb1KiNm": 4,
    "cb2KiNm": 0,
    "cb1Efficacy": "Lipophilic Fluorinated GABAA PAM Prodrug → Ultra-Long-Acting Active Metabolite",
    "cb2Efficacy": "Long-Acting Dialkylaminoethyl Hypnotic",
    "relativePotencyVsD9": 1,
    "psychoactive": true,
    "alkylChainLength": "7-Chloro-1-(2-diethylaminoethyl)-5-(2-fluorophenyl)benzodiazepin-2-one",
    "cypEnzymes": [
      "CYP3A4",
      "CYP2C19"
    ],
    "primaryMetabolite": "N-Desalkylflurazepam (Active; t½ ~40–100 Hours)",
    "immunoassayCrossReactivityPct": 90,
    "terminalHalfLifeHours": 60,
    "inhaledOnsetMinutes": [
      20,
      45
    ],
    "inhaledDurationHours": [
      8,
      14
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      12,
      24
    ],
    "baseOralThresholdMg": 7.5,
    "baseInhaledThresholdMg": 5,
    "radarProfile": {
      "cb1AffinityScore": 65,
      "euphoriaPotency": 70,
      "somaticSedation": 90,
      "anxiogenicRisk": 10,
      "durationPersistence": 92,
      "lipidRetention": 38
    },
    "summary": "Fluorinated hypnotic benzodiazepine (Dalmane). Rapidly dealkylated in the liver into N-desalkylflurazepam, an active metabolite with an enormous 40–100 hour half-life.",
    "pharmacologyNotes": "Accumulates steadily over multi-night use, increasing daytime calm.",
    "specificHazards": [
      "Cumulative daytime sedation and ataxia after 3–4 consecutive nights."
    ],
    "sideEffects": [
      {
        "effect": "Deep Nighttime Sleep & Multi-Day Background Calm",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Lipophilic Fluorinated GABAA PAM Prodrug → Ultra-Long-Acting Active Metabolite"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Flurazepam",
      "source": "PubChem CID 3393",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/3393"
    }
  },
  {
    "id": "clobazam",
    "name": "Clobazam (Onfi · Frisium · 1,5-Benzodiazepine Anticonvulsant)",
    "shortName": "Clobazam",
    "synonyms": [
      "Onfi",
      "Frisium",
      "Urbanyl"
    ],
    "classification": "Benzodiazepine",
    "riskTier": "Moderate",
    "pubchemCid": 2789,
    "molecularFormula": "C16H13ClN2O2",
    "molecularWeight": 300.74,
    "canonicalSmiles": "CN1C2=C(C=C(C=C2)Cl)N(C(=O)CC1=O)C3=CC=CC=C3",
    "xLogP": 2.1,
    "cb1KiNm": 14,
    "cb2KiNm": 0,
    "cb1Efficacy": "Partial GABAA Receptor PAM (1,5-Benzodiazepine Series — Spares Motor Function)",
    "cb2Efficacy": "1,5-Regioisomer Benzodiazepine",
    "relativePotencyVsD9": 0.6,
    "psychoactive": true,
    "alkylChainLength": "7-Chloro-1-methyl-5-phenyl-1,5-benzodiazepine-2,4-dione",
    "cypEnzymes": [
      "CYP3A4",
      "CYP2C19"
    ],
    "primaryMetabolite": "N-Desmethylclobazam (Active; t½ ~40–80 Hours)",
    "immunoassayCrossReactivityPct": 90,
    "terminalHalfLifeHours": 36,
    "inhaledOnsetMinutes": [
      30,
      60
    ],
    "inhaledDurationHours": [
      6,
      10
    ],
    "oralOnsetMinutes": [
      45,
      90
    ],
    "oralDurationHours": [
      10,
      18
    ],
    "baseOralThresholdMg": 5,
    "baseInhaledThresholdMg": 5,
    "radarProfile": {
      "cb1AffinityScore": 48,
      "euphoriaPotency": 56,
      "somaticSedation": 52,
      "anxiogenicRisk": 8,
      "durationPersistence": 80,
      "lipidRetention": 26
    },
    "summary": "Unique 1,5-benzodiazepine regioisomer (Onfi / Frisium). Moving the second nitrogen atom to position 5 makes it a partial agonist that selectively relieves anxiety and suppresses seizures with far less sedation, ataxia, or muscle weakness than classic 1,4-benzodiazepines.",
    "pharmacologyNotes": "CYP2C19 poor metabolizers accumulate high levels of N-desmethylclobazam.",
    "specificHazards": [
      "Interacts with CYP2D6 substrates; milder dependence liability than alprazolam."
    ],
    "sideEffects": [
      {
        "effect": "Clean Mental Calm, Anti-Seizure Protection & Minimal Daytime Sluggishness",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Partial GABAA Receptor PAM (1,5-Benzodiazepine Series — Spares Motor Function)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Clobazam",
      "source": "PubChem CID 2789",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/2789"
    }
  },
  {
    "id": "clotiazepam",
    "name": "Clotiazepam (Trecalmo · Rize · Thienodiazepine)",
    "shortName": "Clotiazepam",
    "synonyms": [
      "Trecalmo",
      "Rize",
      "Clozan"
    ],
    "classification": "Benzodiazepine",
    "riskTier": "Moderate",
    "pubchemCid": 2816,
    "molecularFormula": "C16H15ClN2OS",
    "molecularWeight": 318.82,
    "canonicalSmiles": "CCC1=C(SC2=C1N(C(=O)CN=C2C3=CC=CC=C3Cl)C)C",
    "xLogP": 3.2,
    "cb1KiNm": 8,
    "cb2KiNm": 0,
    "cb1Efficacy": "Thienodiazepine GABAA PAM (~2x Diazepam Potency with Short Half-Life)",
    "cb2Efficacy": "Thiophene Ring-Fused Benzodiazepine Bioisostere",
    "relativePotencyVsD9": 1.2,
    "psychoactive": true,
    "alkylChainLength": "Thieno[2,3-b][1,4]diazepin-2-one",
    "cypEnzymes": [
      "CYP3A4",
      "CYP2C19"
    ],
    "primaryMetabolite": "Hydroxyclotiazepam & Desmethylclotiazepam",
    "immunoassayCrossReactivityPct": 85,
    "terminalHalfLifeHours": 6.5,
    "inhaledOnsetMinutes": [
      15,
      30
    ],
    "inhaledDurationHours": [
      3,
      5
    ],
    "oralOnsetMinutes": [
      20,
      45
    ],
    "oralDurationHours": [
      4,
      7
    ],
    "baseOralThresholdMg": 2.5,
    "baseInhaledThresholdMg": 2,
    "radarProfile": {
      "cb1AffinityScore": 56,
      "euphoriaPotency": 68,
      "somaticSedation": 62,
      "anxiogenicRisk": 10,
      "durationPersistence": 32,
      "lipidRetention": 32
    },
    "summary": "Thienodiazepine analog where the benzene ring is replaced by a thiophene ring (Trecalmo / Rize). Rapidly absorbed within 20–30 minutes to provide brisk, short-acting (4–6 hour) anxiolysis with minimal next-day hangover.",
    "pharmacologyNotes": "Short 6.5-hour half-life.",
    "specificHazards": [
      "Fast onset can foster psychological reliance for situational stress."
    ],
    "sideEffects": [
      {
        "effect": "Rapid 30-Minute Anxiolysis & Short Clean Duration",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Thienodiazepine GABAA PAM (~2x Diazepam Potency with Short Half-Life)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Clotiazepam",
      "source": "PubChem CID 2816",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/2816"
    }
  },
  {
    "id": "delorazepam",
    "name": "Delorazepam (EN · Dadumir · Chlordesmethyldiazepam)",
    "shortName": "Delorazepam",
    "synonyms": [
      "EN",
      "Dadumir",
      "Chlordesmethyldiazepam"
    ],
    "classification": "Benzodiazepine",
    "riskTier": "High",
    "pubchemCid": 2984,
    "molecularFormula": "C15H10Cl2N2O",
    "molecularWeight": 305.16,
    "canonicalSmiles": "C1=CC=C(C=C1Cl)C2=NC(C(=O)NC3=C2C=CC(=C3)Cl)O",
    "xLogP": 2.8,
    "cb1KiNm": 1.2,
    "cb2KiNm": 0,
    "cb1Efficacy": "High-Potency GABAA PAM (ortho-Chloro Desmethyldiazepam — ~5x Diazepam Potency)",
    "cb2Efficacy": "Long-Acting Chlorinated Diazepam Analog",
    "relativePotencyVsD9": 2.5,
    "psychoactive": true,
    "alkylChainLength": "7-Chloro-5-(2-chlorophenyl)-1,3-dihydro-2H-1,4-benzodiazepin-2-one",
    "cypEnzymes": [
      "CYP3A4",
      "UGT2B7"
    ],
    "primaryMetabolite": "Lorazepam (Active 3-Hydroxylated Metabolite; t½ ~12h)",
    "immunoassayCrossReactivityPct": 90,
    "terminalHalfLifeHours": 80,
    "inhaledOnsetMinutes": [
      25,
      50
    ],
    "inhaledDurationHours": [
      12,
      24
    ],
    "oralOnsetMinutes": [
      40,
      75
    ],
    "oralDurationHours": [
      18,
      36
    ],
    "baseOralThresholdMg": 0.5,
    "baseInhaledThresholdMg": 0.5,
    "radarProfile": {
      "cb1AffinityScore": 74,
      "euphoriaPotency": 72,
      "somaticSedation": 80,
      "anxiogenicRisk": 8,
      "durationPersistence": 95,
      "lipidRetention": 35
    },
    "summary": "ortho-Chloro derivative of nordiazepam (EN / Dadumir). ~5x more potent than diazepam with an extraordinary 60–100 hour elimination half-life, providing multi-day anxiety relief.",
    "pharmacologyNotes": "Metabolized via 3-hydroxylation into active lorazepam.",
    "specificHazards": [
      "Cumulative accumulation across consecutive days of dosing."
    ],
    "sideEffects": [
      {
        "effect": "Potent Multi-Day Anxiolysis & Physical Muscle Relaxation",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "High-Potency GABAA PAM (ortho-Chloro Desmethyldiazepam — ~5x Diazepam Potency)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Delorazepam",
      "source": "PubChem CID 2984",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/2984"
    }
  },
  {
    "id": "estazolam",
    "name": "Estazolam (ProSom · Eurodin · Triazolobenzodiazepine Hypnotic)",
    "shortName": "Estazolam",
    "synonyms": [
      "ProSom",
      "Eurodin",
      "Tasedan"
    ],
    "classification": "Benzodiazepine",
    "riskTier": "High",
    "pubchemCid": 3261,
    "molecularFormula": "C16H11ClN4",
    "molecularWeight": 294.74,
    "canonicalSmiles": "C1=CC=C(C=C1)C2=NC3=C(C=C(C=C3)Cl)N4C=NN=C4C2",
    "xLogP": 2.2,
    "cb1KiNm": 2,
    "cb2KiNm": 0,
    "cb1Efficacy": "GABAA Receptor PAM (Desmethyl Triazolam Analog — Intermediate Hypnotic)",
    "cb2Efficacy": "Triazolobenzodiazepine Sleep Inducer",
    "relativePotencyVsD9": 2,
    "psychoactive": true,
    "alkylChainLength": "8-Chloro-6-phenyl-4H-[1,2,4]triazolo[4,3-a][1,4]benzodiazepine",
    "cypEnzymes": [
      "CYP3A4"
    ],
    "primaryMetabolite": "1-Oxoestazolam & 4-Hydroxyestazolam",
    "immunoassayCrossReactivityPct": 85,
    "terminalHalfLifeHours": 17,
    "inhaledOnsetMinutes": [
      20,
      40
    ],
    "inhaledDurationHours": [
      6,
      10
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      8,
      14
    ],
    "baseOralThresholdMg": 0.5,
    "baseInhaledThresholdMg": 0.5,
    "radarProfile": {
      "cb1AffinityScore": 70,
      "euphoriaPotency": 72,
      "somaticSedation": 90,
      "anxiogenicRisk": 10,
      "durationPersistence": 62,
      "lipidRetention": 28
    },
    "summary": "Triazolobenzodiazepine hypnotic (ProSom / Eurodin) structurally identical to triazolam but lacking the ortho-chloro and 1-methyl groups, giving it an intermediate 10–24 hour half-life.",
    "pharmacologyNotes": "Maintains sleep continuity without triazolam’s rebound amnesia.",
    "specificHazards": [
      "Moderate next-day sedation if taken late."
    ],
    "sideEffects": [
      {
        "effect": "Uninterrupted 7-Hour Sleep & Smooth Hypnotic Induction",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "GABAA Receptor PAM (Desmethyl Triazolam Analog — Intermediate Hypnotic)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Estazolam",
      "source": "PubChem CID 3261",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/3261"
    }
  },
  {
    "id": "halazepam",
    "name": "Halazepam (Paxipam · Trifluoroethyl Benzodiazepine Prodrug)",
    "shortName": "Halazepam",
    "synonyms": [
      "Paxipam",
      "Alapryl"
    ],
    "classification": "Benzodiazepine",
    "riskTier": "Moderate",
    "pubchemCid": 3567,
    "molecularFormula": "C17H12ClF3N2O",
    "molecularWeight": 352.74,
    "canonicalSmiles": "C1=CC=C(C=C1)C2=NCC(=O)N(C3=C2C=CC(=C3)Cl)CC(F)(F)F",
    "xLogP": 3.1,
    "cb1KiNm": 30,
    "cb2KiNm": 0,
    "cb1Efficacy": "Low-Potency GABAA PAM Prodrug (Slowly Dealkylated to Nordazepam)",
    "cb2Efficacy": "N-Trifluoroethyl Benzodiazepine",
    "relativePotencyVsD9": 0.4,
    "psychoactive": true,
    "alkylChainLength": "7-Chloro-1-(2,2,2-trifluoroethyl)-5-phenyl-1,3-dihydro-2H-1,4-benzodiazepin-2-one",
    "cypEnzymes": [
      "CYP3A4",
      "CYP2C19"
    ],
    "primaryMetabolite": "Nordazepam (Active; t½ ~50–100 Hours)",
    "immunoassayCrossReactivityPct": 90,
    "terminalHalfLifeHours": 14,
    "inhaledOnsetMinutes": [
      45,
      90
    ],
    "inhaledDurationHours": [
      8,
      14
    ],
    "oralOnsetMinutes": [
      60,
      120
    ],
    "oralDurationHours": [
      12,
      24
    ],
    "baseOralThresholdMg": 10,
    "baseInhaledThresholdMg": 10,
    "radarProfile": {
      "cb1AffinityScore": 38,
      "euphoriaPotency": 48,
      "somaticSedation": 55,
      "anxiogenicRisk": 8,
      "durationPersistence": 86,
      "lipidRetention": 35
    },
    "summary": "N-trifluoroethyl substituted benzodiazepine prodrug (Paxipam). The bulky fluorinated ethyl group slows absorption and hepatic dealkylation into nordazepam, delivering a very gentle, slow-climbing anxiolysis.",
    "pharmacologyNotes": "Low abuse potential due to delayed onset.",
    "specificHazards": [
      "Requires high milligram doses (20–40 mg) due to lower intrinsic receptor affinity."
    ],
    "sideEffects": [
      {
        "effect": "Slow-Building Gentle Calm & Low Abuse Liability",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Low-Potency GABAA PAM Prodrug (Slowly Dealkylated to Nordazepam)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Halazepam",
      "source": "PubChem CID 3567",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/3567"
    }
  },
  {
    "id": "ketazolam",
    "name": "Ketazolam (Anxon · Loftran · Oxazino-Benzodiazepine Prodrug)",
    "shortName": "Ketazolam",
    "synonyms": [
      "Anxon",
      "Loftran",
      "Solatran"
    ],
    "classification": "Benzodiazepine",
    "riskTier": "Moderate",
    "pubchemCid": 3827,
    "molecularFormula": "C20H17ClN2O3",
    "molecularWeight": 368.81,
    "canonicalSmiles": "CC1(OC2C(=O)N(C3=C2C=CC(=C3)Cl)C4=CC=CC=C4N1)C",
    "xLogP": 3.3,
    "cb1KiNm": 20,
    "cb2KiNm": 0,
    "cb1Efficacy": "Oxazino-Fused Prodrug (Gradual Conversion to Diazepam & Nordazepam)",
    "cb2Efficacy": "1,3-Oxazino-1,4-benzodiazepine",
    "relativePotencyVsD9": 0.6,
    "psychoactive": true,
    "alkylChainLength": "11-Chloro-2,8-dimethyl-12b-phenyl-8,12b-dihydro-4H-[1,3]oxazino[3,2-d][1,4]benzodiazepine-4,7(6H)-dione",
    "cypEnzymes": [
      "CYP3A4",
      "Plasma Esterases"
    ],
    "primaryMetabolite": "Diazepam, Nordazepam & Temazepam",
    "immunoassayCrossReactivityPct": 90,
    "terminalHalfLifeHours": 30,
    "inhaledOnsetMinutes": [
      30,
      60
    ],
    "inhaledDurationHours": [
      8,
      14
    ],
    "oralOnsetMinutes": [
      45,
      90
    ],
    "oralDurationHours": [
      12,
      24
    ],
    "baseOralThresholdMg": 7.5,
    "baseInhaledThresholdMg": 5,
    "radarProfile": {
      "cb1AffinityScore": 48,
      "euphoriaPotency": 55,
      "somaticSedation": 62,
      "anxiogenicRisk": 8,
      "durationPersistence": 82,
      "lipidRetention": 34
    },
    "summary": "Oxazino-ring-fused prodrug of diazepam (Anxon). Cleaved slowly in the intestinal wall and liver, releasing active diazepam and nordazepam in a steady, non-spiking stream that provides reliable all-day relief.",
    "pharmacologyNotes": "Reduced peak sedation compared to parent diazepam.",
    "specificHazards": [
      "Cumulative accumulation across consecutive days."
    ],
    "sideEffects": [
      {
        "effect": "Smooth Sustained Anti-Anxiety Shield with Low Drowsiness",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Oxazino-Fused Prodrug (Gradual Conversion to Diazepam & Nordazepam)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Ketazolam",
      "source": "PubChem CID 3827",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/3827"
    }
  },
  {
    "id": "lormetazepam",
    "name": "Lormetazepam (Noctamid · Pronoctan · N-Methyl-Lorazepam)",
    "shortName": "Lormetazepam",
    "synonyms": [
      "Noctamid",
      "Pronoctan",
      "Minias"
    ],
    "classification": "Benzodiazepine",
    "riskTier": "High",
    "pubchemCid": 3968,
    "molecularFormula": "C16H12Cl2N2O2",
    "molecularWeight": 335.18,
    "canonicalSmiles": "CN1C(=O)C(N=C(C2=C1C=CC(=C2)Cl)C3=CC=CC=C3Cl)O",
    "xLogP": 2.8,
    "cb1KiNm": 1,
    "cb2KiNm": 0,
    "cb1Efficacy": "High-Potency 3-Hydroxy Hypnotic GABAA PAM (~10x Diazepam Potency)",
    "cb2Efficacy": "N-Methylated Lorazepam Bioisostere",
    "relativePotencyVsD9": 2,
    "psychoactive": true,
    "alkylChainLength": "7-Chloro-5-(2-chlorophenyl)-3-hydroxy-1-methyl-1,3-dihydro-2H-1,4-benzodiazepin-2-one",
    "cypEnzymes": [
      "UGT2B7"
    ],
    "primaryMetabolite": "Lormetazepam-Glucuronide (Inactive)",
    "immunoassayCrossReactivityPct": 90,
    "terminalHalfLifeHours": 11,
    "inhaledOnsetMinutes": [
      15,
      30
    ],
    "inhaledDurationHours": [
      6,
      9
    ],
    "oralOnsetMinutes": [
      25,
      45
    ],
    "oralDurationHours": [
      7,
      10
    ],
    "baseOralThresholdMg": 0.5,
    "baseInhaledThresholdMg": 0.5,
    "radarProfile": {
      "cb1AffinityScore": 78,
      "euphoriaPotency": 78,
      "somaticSedation": 94,
      "anxiogenicRisk": 8,
      "durationPersistence": 48,
      "lipidRetention": 30
    },
    "summary": "N-methylated derivative of lorazepam (Noctamid). Widely prescribed in Europe as a premier short-to-intermediate hypnotic (threshold 0.5 mg; standard dose 1–2 mg) that induces deep sleep within 25 minutes.",
    "pharmacologyNotes": "Glucuronidated directly by UGT2B7 without CYP involvement.",
    "specificHazards": [
      "Anterograde amnesia and tolerance with chronic nightly use."
    ],
    "sideEffects": [
      {
        "effect": "Fast 25-Minute Sleep Induction, Deep Relaxation & Zero Morning Fog",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "High-Potency 3-Hydroxy Hypnotic GABAA PAM (~10x Diazepam Potency)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Lormetazepam",
      "source": "PubChem CID 3968",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/3968"
    }
  },
  {
    "id": "medazepam",
    "name": "Medazepam (Nobrium · Rudotel · Non-Carbonyl Benzodiazepine Prodrug)",
    "shortName": "Medazepam",
    "synonyms": [
      "Nobrium",
      "Rudotel",
      "Anxitol"
    ],
    "classification": "Benzodiazepine",
    "riskTier": "Moderate",
    "pubchemCid": 4026,
    "molecularFormula": "C16H15ClN2",
    "molecularWeight": 270.76,
    "canonicalSmiles": "CN1CCNC(C2=C1C=CC(=C2)Cl)C3=CC=CC=C3",
    "xLogP": 2.7,
    "cb1KiNm": 45,
    "cb2KiNm": 0,
    "cb1Efficacy": "Lipophilic Benzodiazepine Prodrug (Rapidly Converted to Diazepam & Nordazepam)",
    "cb2Efficacy": "Tetrahydro-1,4-benzodiazepine",
    "relativePotencyVsD9": 0.5,
    "psychoactive": true,
    "alkylChainLength": "7-Chloro-1-methyl-5-phenyl-2,3-dihydro-1H-1,4-benzodiazepine",
    "cypEnzymes": [
      "CYP3A4",
      "CYP2C19"
    ],
    "primaryMetabolite": "Diazepam, Nordazepam, Temazepam & Oxazepam",
    "immunoassayCrossReactivityPct": 90,
    "terminalHalfLifeHours": 2,
    "inhaledOnsetMinutes": [
      20,
      40
    ],
    "inhaledDurationHours": [
      8,
      14
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      12,
      24
    ],
    "baseOralThresholdMg": 5,
    "baseInhaledThresholdMg": 5,
    "radarProfile": {
      "cb1AffinityScore": 45,
      "euphoriaPotency": 58,
      "somaticSedation": 55,
      "anxiogenicRisk": 8,
      "durationPersistence": 85,
      "lipidRetention": 34
    },
    "summary": "Non-carbonyl 2,3-dihydrobenzodiazepine prodrug (Nobrium / Rudotel). Rapidly oxidized in the liver into diazepam, which subsequently breaks down into nordazepam and oxazepam.",
    "pharmacologyNotes": "Provides all-day daytime tension relief without sedation.",
    "specificHazards": [
      "High cumulative active metabolite load."
    ],
    "sideEffects": [
      {
        "effect": "Daytime Tranquility & Sustained Anti-Anxiety Shield",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Lipophilic Benzodiazepine Prodrug (Rapidly Converted to Diazepam & Nordazepam)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Medazepam",
      "source": "PubChem CID 4026",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/4026"
    }
  },
  {
    "id": "nimetazepam",
    "name": "Nimetazepam (Erimin · Happy 5 · 7-Nitro-1-methylbenzodiazepine)",
    "shortName": "Nimetazepam",
    "synonyms": [
      "Erimin",
      "Happy 5",
      "Erimin-5"
    ],
    "classification": "Benzodiazepine",
    "riskTier": "Extreme",
    "pubchemCid": 4500,
    "molecularFormula": "C16H13N3O3",
    "molecularWeight": 295.3,
    "canonicalSmiles": "CN1C(=O)CN=C(C2=C1C=CC(=C2)[N+](=O)[O-])C3=CC=CC=C3",
    "xLogP": 2.6,
    "cb1KiNm": 1.5,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent GABAA Hypnotic PAM (N-Methylated Nitrazepam — High Euphoria)",
    "cb2Efficacy": "1-Methyl-7-nitro-1,4-benzodiazepine",
    "relativePotencyVsD9": 2.5,
    "psychoactive": true,
    "alkylChainLength": "1-Methyl-7-nitro-5-phenyl-1,3-dihydro-2H-1,4-benzodiazepin-2-one",
    "cypEnzymes": [
      "Hepatic Nitroreduction",
      "CYP3A4"
    ],
    "primaryMetabolite": "Nitrazepam & 7-Aminonimetazepam",
    "immunoassayCrossReactivityPct": 90,
    "terminalHalfLifeHours": 20,
    "inhaledOnsetMinutes": [
      15,
      30
    ],
    "inhaledDurationHours": [
      6,
      10
    ],
    "oralOnsetMinutes": [
      20,
      45
    ],
    "oralDurationHours": [
      8,
      14
    ],
    "baseOralThresholdMg": 1.5,
    "baseInhaledThresholdMg": 1,
    "radarProfile": {
      "cb1AffinityScore": 78,
      "euphoriaPotency": 92,
      "somaticSedation": 88,
      "anxiogenicRisk": 12,
      "durationPersistence": 65,
      "lipidRetention": 32
    },
    "summary": "N-methylated derivative of nitrazepam (Erimin / \"Happy 5\"). Extremely popular in East Asia for having a significantly higher euphoria-to-sedation ratio than almost any other clinical benzodiazepine.",
    "pharmacologyNotes": "Rapidly dealkylates partially to nitrazepam.",
    "specificHazards": [
      "VERY HIGH ABUSE LIABILITY: Known for euphoric disinhibition; severe counterfeit market in Asia."
    ],
    "sideEffects": [
      {
        "effect": "Warm Euphoric Disinhibition, Muscle Melt & Sound Sleep",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "Potent GABAA Hypnotic PAM (N-Methylated Nitrazepam — High Euphoria)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Nimetazepam",
      "source": "PubChem CID 4500",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/4500"
    }
  },
  {
    "id": "nordazepam",
    "name": "Nordazepam (Nordiazepam · Desmethyldiazepam · Calmday)",
    "shortName": "Nordazepam",
    "synonyms": [
      "Nordiazepam",
      "Desmethyldiazepam",
      "Calmday",
      "Madar"
    ],
    "classification": "Benzodiazepine",
    "riskTier": "High",
    "pubchemCid": 4514,
    "molecularFormula": "C15H11ClN2O",
    "molecularWeight": 270.71,
    "canonicalSmiles": "C1=CC=C(C=C1)C2=NC(=O)CNC3=C2C=CC(=C3)Cl",
    "xLogP": 2.7,
    "cb1KiNm": 3.5,
    "cb2KiNm": 0,
    "cb1Efficacy": "Major Active Metabolite of Diazepam, Chlordiazepoxide & Clorazepate (GABAA PAM)",
    "cb2Efficacy": "Long-Acting Primary N-Desmethyl 1,4-Benzodiazepine",
    "relativePotencyVsD9": 1,
    "psychoactive": true,
    "alkylChainLength": "7-Chloro-5-phenyl-1,3-dihydro-2H-1,4-benzodiazepin-2-one",
    "cypEnzymes": [
      "CYP3A4",
      "CYP2C19",
      "UGT2B7"
    ],
    "primaryMetabolite": "Oxazepam (Active 3-Hydroxy Metabolite)",
    "immunoassayCrossReactivityPct": 90,
    "terminalHalfLifeHours": 65,
    "inhaledOnsetMinutes": [
      30,
      60
    ],
    "inhaledDurationHours": [
      12,
      24
    ],
    "oralOnsetMinutes": [
      45,
      90
    ],
    "oralDurationHours": [
      18,
      36
    ],
    "baseOralThresholdMg": 2.5,
    "baseInhaledThresholdMg": 2,
    "radarProfile": {
      "cb1AffinityScore": 62,
      "euphoriaPotency": 64,
      "somaticSedation": 74,
      "anxiogenicRisk": 8,
      "durationPersistence": 95,
      "lipidRetention": 36
    },
    "summary": "Major circulating active metabolite (Nordiazepam) of diazepam, chlordiazepoxide, prazepam, and clorazepate. Has an enormous 50–120 hour elimination half-life.",
    "pharmacologyNotes": "Maintains steady-state anxiolysis with minimal fluctuation.",
    "specificHazards": [
      "Severe accumulation over weeks of daily use, leading to delayed withdrawal on cessation."
    ],
    "sideEffects": [
      {
        "effect": "Steady Multi-Day Anti-Panic Shield & Emotional Stability",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Major Active Metabolite of Diazepam, Chlordiazepoxide & Clorazepate (GABAA PAM)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Nordazepam",
      "source": "PubChem CID 4514",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/4514"
    }
  },
  {
    "id": "prazepam",
    "name": "Prazepam (Centrax · Lysanxia · Cyclopropylmethyl Benzodiazepine)",
    "shortName": "Prazepam",
    "synonyms": [
      "Centrax",
      "Lysanxia",
      "Demetrin"
    ],
    "classification": "Benzodiazepine",
    "riskTier": "Moderate",
    "pubchemCid": 4890,
    "molecularFormula": "C19H17ClN2O",
    "molecularWeight": 324.81,
    "canonicalSmiles": "C1CC1CN2C(=O)CN=C(C3=C2C=CC(=C3)Cl)C4=CC=CC=C4",
    "xLogP": 3.7,
    "cb1KiNm": 20,
    "cb2KiNm": 0,
    "cb1Efficacy": "Lipophilic Prodrug (Slowly Cleaved by CYP3A4 to Active Nordazepam)",
    "cb2Efficacy": "N-Cyclopropylmethyl Benzodiazepine",
    "relativePotencyVsD9": 0.6,
    "psychoactive": true,
    "alkylChainLength": "7-Chloro-1-(cyclopropylmethyl)-5-phenyl-1,3-dihydro-2H-1,4-benzodiazepin-2-one",
    "cypEnzymes": [
      "CYP3A4",
      "CYP2C19"
    ],
    "primaryMetabolite": "Nordazepam (t½ ~60 Hours) & 3-Hydroxyprazepam",
    "immunoassayCrossReactivityPct": 90,
    "terminalHalfLifeHours": 1.5,
    "inhaledOnsetMinutes": [
      45,
      90
    ],
    "inhaledDurationHours": [
      8,
      14
    ],
    "oralOnsetMinutes": [
      60,
      120
    ],
    "oralDurationHours": [
      12,
      24
    ],
    "baseOralThresholdMg": 5,
    "baseInhaledThresholdMg": 5,
    "radarProfile": {
      "cb1AffinityScore": 45,
      "euphoriaPotency": 52,
      "somaticSedation": 58,
      "anxiogenicRisk": 8,
      "durationPersistence": 88,
      "lipidRetention": 38
    },
    "summary": "N-cyclopropylmethyl prodrug of nordazepam (Centrax / Lysanxia). Due to high lipophilicity (xLogP 3.7) and slow enzymatic dealkylation, it provides very smooth, all-day anxiety management without peaks or sedation.",
    "pharmacologyNotes": "Elimination driven by nordazepam (t½ ~60 h).",
    "specificHazards": [
      "Slow onset makes it ineffective for immediate acute panic attacks."
    ],
    "sideEffects": [
      {
        "effect": "All-Day Smooth Anxiolysis & Low Euphoric Spike",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Lipophilic Prodrug (Slowly Cleaved by CYP3A4 to Active Nordazepam)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Prazepam",
      "source": "PubChem CID 4890",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/4890"
    }
  },
  {
    "id": "quazepam",
    "name": "Quazepam (Doral · Trifluoroethyl-Thione Hypnotic)",
    "shortName": "Quazepam",
    "synonyms": [
      "Doral",
      "Dimate",
      "Sch-16134"
    ],
    "classification": "Benzodiazepine",
    "riskTier": "High",
    "pubchemCid": 4988,
    "molecularFormula": "C17H12ClF3N2S",
    "molecularWeight": 368.8,
    "canonicalSmiles": "C1=CC=C(C=C1F)C2=NCC(=S)N(C3=C2C=CC(=C3)Cl)CC(F)(F)F",
    "xLogP": 3.8,
    "cb1KiNm": 2.5,
    "cb2KiNm": 0,
    "cb1Efficacy": "Subtype-Selective GABAA α1 PAM (Thione/Trifluoroethyl Hypnotic)",
    "cb2Efficacy": "2-Thione Fluorinated Benzodiazepine",
    "relativePotencyVsD9": 1.2,
    "psychoactive": true,
    "alkylChainLength": "7-Chloro-5-(2-fluorophenyl)-1-(2,2,2-trifluoroethyl)-1,3-dihydro-2H-1,4-benzodiazepine-2-thione",
    "cypEnzymes": [
      "CYP3A4",
      "CYP2C19"
    ],
    "primaryMetabolite": "2-Oxoquazepam & N-Desalkyl-2-oxoquazepam (Active; t½ ~70h)",
    "immunoassayCrossReactivityPct": 85,
    "terminalHalfLifeHours": 39,
    "inhaledOnsetMinutes": [
      20,
      45
    ],
    "inhaledDurationHours": [
      7,
      10
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      8,
      14
    ],
    "baseOralThresholdMg": 3.75,
    "baseInhaledThresholdMg": 2.5,
    "radarProfile": {
      "cb1AffinityScore": 65,
      "euphoriaPotency": 66,
      "somaticSedation": 90,
      "anxiogenicRisk": 10,
      "durationPersistence": 82,
      "lipidRetention": 40
    },
    "summary": "Unique 2-thione (C=S) benzodiazepine hypnotic (Doral). Exhibits higher binding selectivity for GABAA receptors containing the α1 subunit, promoting rapid sleep induction with less muscle relaxation.",
    "pharmacologyNotes": "Active metabolite has a 70-hour half-life.",
    "specificHazards": [
      "Daytime sedation upon repeated nightly use."
    ],
    "sideEffects": [
      {
        "effect": "Targeted α1 Sleep Induction & Reduced Motor Impairment",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Subtype-Selective GABAA α1 PAM (Thione/Trifluoroethyl Hypnotic)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Quazepam",
      "source": "PubChem CID 4988",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/4988"
    }
  },
  {
    "id": "tetrazepam",
    "name": "Tetrazepam (Myolastan · Musaril · Cyclohexenyl Muscle Relaxant)",
    "shortName": "Tetrazepam",
    "synonyms": [
      "Myolastan",
      "Musaril",
      "Clinoxan"
    ],
    "classification": "Benzodiazepine",
    "riskTier": "Moderate",
    "pubchemCid": 5418,
    "molecularFormula": "C16H17ClN2O",
    "molecularWeight": 288.77,
    "canonicalSmiles": "CN1C(=O)CN=C(C2=C1C=CC(=C2)Cl)C3=CCCCC3",
    "xLogP": 3.2,
    "cb1KiNm": 12,
    "cb2KiNm": 0,
    "cb1Efficacy": "Myorelaxant-Biased GABAA PAM (Cyclohexenyl Substituted — High Muscle Selectivity)",
    "cb2Efficacy": "Cyclohexenyl-1,4-benzodiazepine",
    "relativePotencyVsD9": 0.8,
    "psychoactive": true,
    "alkylChainLength": "7-Chloro-5-(cyclohexen-1-yl)-1-methyl-1,3-dihydro-2H-1,4-benzodiazepin-2-one",
    "cypEnzymes": [
      "CYP3A4"
    ],
    "primaryMetabolite": "Nortetrazepam & Hydroxytetrazepam",
    "immunoassayCrossReactivityPct": 85,
    "terminalHalfLifeHours": 15,
    "inhaledOnsetMinutes": [
      20,
      40
    ],
    "inhaledDurationHours": [
      6,
      8
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      6,
      10
    ],
    "baseOralThresholdMg": 12.5,
    "baseInhaledThresholdMg": 10,
    "radarProfile": {
      "cb1AffinityScore": 50,
      "euphoriaPotency": 62,
      "somaticSedation": 86,
      "anxiogenicRisk": 8,
      "durationPersistence": 55,
      "lipidRetention": 32
    },
    "summary": "Cyclohexenyl-substituted benzodiazepine formerly widely used across Europe as a premier muscle relaxant (Myolastan / Musaril). Selectively relieves muscle spasms, back stiffness, and tension with moderate anxiolysis.",
    "pharmacologyNotes": "Withdrawn in the EU due to rare cutaneous adverse reactions (Stevens-Johnson syndrome).",
    "specificHazards": [
      "Rare but severe skin rash / SJS risk led to EU market withdrawal in 2013."
    ],
    "sideEffects": [
      {
        "effect": "Deep Skeletal Muscle Relaxation & Antispasmodic Relief",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Myorelaxant-Biased GABAA PAM (Cyclohexenyl Substituted — High Muscle Selectivity)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Tetrazepam",
      "source": "PubChem CID 5418",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/5418"
    }
  },
  {
    "id": "tofisopam",
    "name": "Tofisopam (Grandaxin · Emandaxin · Non-Sedating 2,3-Benzodiazepine)",
    "shortName": "Tofisopam",
    "synonyms": [
      "Grandaxin",
      "Emandaxin",
      "Seriel"
    ],
    "classification": "Benzodiazepine",
    "riskTier": "Low",
    "pubchemCid": 5502,
    "molecularFormula": "C22H26N2O4",
    "molecularWeight": 382.45,
    "canonicalSmiles": "CCC1(C(=NN=C1C2=CC(=C(C=C2)OC)OC)C)C3=CC(=C(C=C3)OC)OC",
    "xLogP": 2.3,
    "cb1KiNm": 5000,
    "cb2KiNm": 0,
    "cb1Efficacy": "Atypical 2,3-Benzodiazepine (Does NOT Bind GABAA Benzodiazepine Site; PDE10A Inhibitor)",
    "cb2Efficacy": "Non-Sedating Non-Myorelaxant Anxiolytic",
    "relativePotencyVsD9": 0.2,
    "psychoactive": true,
    "alkylChainLength": "1-(3,4-Dimethoxyphenyl)-4-methyl-5-ethyl-7,8-dimethoxy-5H-2,3-benzodiazepine",
    "cypEnzymes": [
      "CYP3A4"
    ],
    "primaryMetabolite": "Demethylated & Hydroxylated Metabolites",
    "immunoassayCrossReactivityPct": 0,
    "terminalHalfLifeHours": 6,
    "inhaledOnsetMinutes": [
      20,
      40
    ],
    "inhaledDurationHours": [
      4,
      6
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      5,
      8
    ],
    "baseOralThresholdMg": 25,
    "baseInhaledThresholdMg": 25,
    "radarProfile": {
      "cb1AffinityScore": 20,
      "euphoriaPotency": 32,
      "somaticSedation": 8,
      "anxiogenicRisk": 6,
      "durationPersistence": 36,
      "lipidRetention": 22
    },
    "summary": "Remarkable 2,3-benzodiazepine (Grandaxin). Because the nitrogen atoms are at positions 2 and 3 rather than 1 and 4, it does NOT bind the classic GABAA benzodiazepine site at all! Produces clean, non-sedating, non-ataxic anxiolysis with mild alertness.",
    "pharmacologyNotes": "Zero physical withdrawal, motor impairment, or respiratory depression.",
    "specificHazards": [
      "Not effective for stopping acute seizures or panic attacks."
    ],
    "sideEffects": [
      {
        "effect": "Alert, Non-Sedating Daytime Anxiolysis & Autonomic Regulation",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Atypical 2,3-Benzodiazepine (Does NOT Bind GABAA Benzodiazepine Site; PDE10A Inhibitor)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Tofisopam",
      "source": "PubChem CID 5502",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/5502"
    }
  },
  {
    "id": "adinazolam",
    "name": "Adinazolam (Deracyn · Dimethylaminomethyl Triazolobenzodiazepine)",
    "shortName": "Adinazolam",
    "synonyms": [
      "Deracyn",
      "U-41123"
    ],
    "classification": "Benzodiazepine",
    "riskTier": "High",
    "pubchemCid": 39868,
    "molecularFormula": "C19H20ClN5",
    "molecularWeight": 353.85,
    "canonicalSmiles": "CN(C)CC1=NN=C2CN=C(C3=C(C=CC(=C3)Cl)N12)C4=CC=CC=C4",
    "xLogP": 2.1,
    "cb1KiNm": 4,
    "cb2KiNm": 0,
    "cb1Efficacy": "GABAA PAM + Dual Monoaminergic Reuptake Modulator (Antidepressant Triazolam)",
    "cb2Efficacy": "Triazolobenzodiazepine Antidepressant",
    "relativePotencyVsD9": 1.8,
    "psychoactive": true,
    "alkylChainLength": "1-[(Dimethylamino)methyl]-6-phenyl-4H-[1,2,4]triazolo[4,3-a][1,4]benzodiazepine",
    "cypEnzymes": [
      "CYP3A4",
      "CYP2D6"
    ],
    "primaryMetabolite": "N-Desmethyladinazolam (Active; t½ ~10h)",
    "immunoassayCrossReactivityPct": 80,
    "terminalHalfLifeHours": 3,
    "inhaledOnsetMinutes": [
      15,
      30
    ],
    "inhaledDurationHours": [
      3,
      5
    ],
    "oralOnsetMinutes": [
      20,
      45
    ],
    "oralDurationHours": [
      4,
      7
    ],
    "baseOralThresholdMg": 2.5,
    "baseInhaledThresholdMg": 2,
    "radarProfile": {
      "cb1AffinityScore": 68,
      "euphoriaPotency": 78,
      "somaticSedation": 70,
      "anxiogenicRisk": 10,
      "durationPersistence": 36,
      "lipidRetention": 26
    },
    "summary": "Dimethylaminomethyl triazolobenzodiazepine developed by Upjohn (Deracyn). Combines potent anxiolytic GABAA positive allosteric modulation with monoamine reuptake inhibition, conferring antidepressant properties alongside rapid anxiety relief.",
    "pharmacologyNotes": "Metabolized into active N-desmethyladinazolam.",
    "specificHazards": [
      "Compulsive redosing and dependence liability."
    ],
    "sideEffects": [
      {
        "effect": "Bright Uplifting Anxiolysis & Muscular Relaxation",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "GABAA PAM + Dual Monoaminergic Reuptake Modulator (Antidepressant Triazolam)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Adinazolam",
      "source": "PubChem CID 39868",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/39868"
    }
  },
  {
    "id": "loprazolam",
    "name": "Loprazolam (Dormonoct · Triazolo-Piperazine Hypnotic)",
    "shortName": "Loprazolam",
    "synonyms": [
      "Dormonoct",
      "Havlane",
      "Sonin"
    ],
    "classification": "Benzodiazepine",
    "riskTier": "High",
    "pubchemCid": 3939,
    "molecularFormula": "C23H21ClN6O3",
    "molecularWeight": 464.9,
    "canonicalSmiles": "CN1CCN(CC1)C(=O)C2=NC3=C(C=C(C=C3)Cl)N4C=NN=C4C2C5=CC=CC=C5",
    "xLogP": 2.5,
    "cb1KiNm": 1.2,
    "cb2KiNm": 0,
    "cb1Efficacy": "High-Potency GABAA Hypnotic PAM (Piperazinyl Triazolobenzodiazepine)",
    "cb2Efficacy": "Piperazine-Fused Triazolobenzodiazepine",
    "relativePotencyVsD9": 2.2,
    "psychoactive": true,
    "alkylChainLength": "6-(2-Chlorophenyl)-2,4-dihydro-2-[(4-methyl-1-piperazinyl)methylene]-8-nitro-1H-imidazo[1,2-a][1,4]benzodiazepin-1-one",
    "cypEnzymes": [
      "CYP3A4"
    ],
    "primaryMetabolite": "Loprazolam-N-oxide & Desmethylloprazolam",
    "immunoassayCrossReactivityPct": 85,
    "terminalHalfLifeHours": 15,
    "inhaledOnsetMinutes": [
      20,
      40
    ],
    "inhaledDurationHours": [
      6,
      9
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      8,
      12
    ],
    "baseOralThresholdMg": 0.5,
    "baseInhaledThresholdMg": 0.5,
    "radarProfile": {
      "cb1AffinityScore": 75,
      "euphoriaPotency": 76,
      "somaticSedation": 94,
      "anxiogenicRisk": 10,
      "durationPersistence": 55,
      "lipidRetention": 28
    },
    "summary": "Potent imidazobenzodiazepine / triazolo-piperazine hypnotic (Dormonoct / Havlane). Prescribed across Europe at 1 mg to induce rapid, deep sleep with minimal next-day hangover.",
    "pharmacologyNotes": "Elimination half-life ~15 hours.",
    "specificHazards": [
      "Anterograde amnesia and dependence with chronic nightly use."
    ],
    "sideEffects": [
      {
        "effect": "Rapid Deep Sleep Induction & Clean Awakening",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "High-Potency GABAA Hypnotic PAM (Piperazinyl Triazolobenzodiazepine)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Loprazolam",
      "source": "PubChem CID 3939",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/3939"
    }
  },
  {
    "id": "mexazolam",
    "name": "Mexazolam (Melex · Sedoxil · Oxazolo-Benzodiazepine Prodrug)",
    "shortName": "Mexazolam",
    "synonyms": [
      "Melex",
      "Sedoxil"
    ],
    "classification": "Benzodiazepine",
    "riskTier": "Moderate",
    "pubchemCid": 4165,
    "molecularFormula": "C18H16Cl2N2O2",
    "molecularWeight": 363.24,
    "canonicalSmiles": "C1=CC=C(C=C1Cl)C2(NC3=C(C=C(C=C3)Cl)N(C(=O)O2)C)O",
    "xLogP": 3.1,
    "cb1KiNm": 15,
    "cb2KiNm": 0,
    "cb1Efficacy": "Lipophilic Oxazolo-Benzodiazepine Prodrug (Converts to Lorazepam Analogs)",
    "cb2Efficacy": "1,3-Oxazolo-1,4-benzodiazepine",
    "relativePotencyVsD9": 0.8,
    "psychoactive": true,
    "alkylChainLength": "10-Chloro-11b-(2-chlorophenyl)-2,8-dimethyl-7,11b-dihydro-[1,3]oxazolo[3,2-d][1,4]benzodiazepin-6(5H)-one",
    "cypEnzymes": [
      "CYP3A4",
      "CYP2C19"
    ],
    "primaryMetabolite": "Chlordesmethyldiazepam & Lorazepam",
    "immunoassayCrossReactivityPct": 90,
    "terminalHalfLifeHours": 75,
    "inhaledOnsetMinutes": [
      30,
      60
    ],
    "inhaledDurationHours": [
      10,
      18
    ],
    "oralOnsetMinutes": [
      45,
      90
    ],
    "oralDurationHours": [
      14,
      28
    ],
    "baseOralThresholdMg": 0.5,
    "baseInhaledThresholdMg": 0.5,
    "radarProfile": {
      "cb1AffinityScore": 55,
      "euphoriaPotency": 62,
      "somaticSedation": 65,
      "anxiogenicRisk": 8,
      "durationPersistence": 90,
      "lipidRetention": 34
    },
    "summary": "Oxazolo-ring-fused prodrug (Melex / Sedoxil) that undergoes slow hepatic ring cleavage to deliver active delorazepam and lorazepam.",
    "pharmacologyNotes": "Provides ultra-steady long-acting anxiolysis with low abuse spikes.",
    "specificHazards": [
      "Slow elimination; caution in renal/hepatic insufficiency."
    ],
    "sideEffects": [
      {
        "effect": "Smooth Long-Acting Emotional Balance",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Lipophilic Oxazolo-Benzodiazepine Prodrug (Converts to Lorazepam Analogs)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Mexazolam",
      "source": "PubChem CID 4165",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/4165"
    }
  },
  {
    "id": "pinazepam",
    "name": "Pinazepam (Domar · Propargyl-Substituted Benzodiazepine)",
    "shortName": "Pinazepam",
    "synonyms": [
      "Domar",
      "Duna"
    ],
    "classification": "Benzodiazepine",
    "riskTier": "Moderate",
    "pubchemCid": 4843,
    "molecularFormula": "C18H13ClN2O",
    "molecularWeight": 308.76,
    "canonicalSmiles": "C#CCN1C(=O)CN=C(C2=C1C=CC(=C2)Cl)C3=CC=CC=C3",
    "xLogP": 2.9,
    "cb1KiNm": 15,
    "cb2KiNm": 0,
    "cb1Efficacy": "GABAA PAM Anxiolytic (N-Propargyl Substituted Benzodiazepine)",
    "cb2Efficacy": "Alkyne-Substituted 1,4-Benzodiazepine",
    "relativePotencyVsD9": 0.8,
    "psychoactive": true,
    "alkylChainLength": "7-Chloro-1-(prop-2-yn-1-yl)-5-phenyl-1,3-dihydro-2H-1,4-benzodiazepin-2-one",
    "cypEnzymes": [
      "CYP3A4"
    ],
    "primaryMetabolite": "Nordazepam (Active; t½ ~60 Hours)",
    "immunoassayCrossReactivityPct": 90,
    "terminalHalfLifeHours": 15,
    "inhaledOnsetMinutes": [
      30,
      60
    ],
    "inhaledDurationHours": [
      6,
      10
    ],
    "oralOnsetMinutes": [
      45,
      90
    ],
    "oralDurationHours": [
      10,
      18
    ],
    "baseOralThresholdMg": 2.5,
    "baseInhaledThresholdMg": 2.5,
    "radarProfile": {
      "cb1AffinityScore": 50,
      "euphoriaPotency": 58,
      "somaticSedation": 60,
      "anxiogenicRisk": 8,
      "durationPersistence": 80,
      "lipidRetention": 32
    },
    "summary": "Propargyl (alkyne) substituted benzodiazepine (Domar). Provides clean daytime anxiolysis with significantly lower sedative and motor impairing properties than diazepam.",
    "pharmacologyNotes": "Slowly dealkylated to nordazepam.",
    "specificHazards": [
      "Low abuse liability; accumulation upon chronic daily dosing."
    ],
    "sideEffects": [
      {
        "effect": "Clean Daytime Anxiolysis & Low Sedation Profile",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "GABAA PAM Anxiolytic (N-Propargyl Substituted Benzodiazepine)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Pinazepam",
      "source": "PubChem CID 4843",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/4843"
    }
  },
  {
    "id": "etizolam",
    "name": "Etizolam (Etilaam · Etizest · Thienotriazolodiazepine)",
    "shortName": "Etizolam",
    "synonyms": [
      "Etilaam",
      "Etizest",
      "Pasaden",
      "Depas"
    ],
    "classification": "Designer Benzodiazepine & Z-Drug",
    "riskTier": "High",
    "pubchemCid": 3307,
    "molecularFormula": "C17H15ClN4S",
    "molecularWeight": 342.85,
    "canonicalSmiles": "CCC1=C(SC2=C1N3C(=NN=C3CN=C2C4=CC=CC=C4Cl)C)C",
    "xLogP": 2.5,
    "cb1KiNm": 1.5,
    "cb2KiNm": 0,
    "cb1Efficacy": "High-Affinity Thienotriazolodiazepine GABAA α1/α2/α3 PAM (~6–10x Diazepam Potency)",
    "cb2Efficacy": "Thieno-Triazolo Hybrid Anxiolytic",
    "relativePotencyVsD9": 2.5,
    "psychoactive": true,
    "alkylChainLength": "7-(2-Chlorophenyl)-4-ethyl-13-methyl-3-thia-1,8,11,12-tetraazatricyclo trideca-pentaene",
    "cypEnzymes": [
      "CYP3A4",
      "CYP2C19"
    ],
    "primaryMetabolite": "alpha-Hydroxyetizolam & 8-Hydroxyetizolam",
    "immunoassayCrossReactivityPct": 70,
    "terminalHalfLifeHours": 7,
    "inhaledOnsetMinutes": [
      15,
      30
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
      5,
      8
    ],
    "baseOralThresholdMg": 0.5,
    "baseInhaledThresholdMg": 0.5,
    "radarProfile": {
      "cb1AffinityScore": 78,
      "euphoriaPotency": 90,
      "somaticSedation": 75,
      "anxiogenicRisk": 10,
      "durationPersistence": 38,
      "lipidRetention": 28
    },
    "summary": "Thienotriazolodiazepine analogue prescribed in Japan (Depas) and legendary in the research chemical space. Fast 20–30 minute onset, potent anxiolysis, warm euphoric disinhibition, and a short 6–8 hour duration with minimal morning hangover.",
    "pharmacologyNotes": "Metabolized via CYP3A4 to active alpha-hydroxyetizolam (t½ ~8.2 h).",
    "specificHazards": [
      "HIGH COMPULSIVE REDOSING & DELUSION OF SOBRIETY: Users often feel completely sober while displaying obvious motor intoxication."
    ],
    "sideEffects": [
      {
        "effect": "Fast Euphoric Warmth, Social Disinhibition & Muscle Melt",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "High-Affinity Thienotriazolodiazepine GABAA α1/α2/α3 PAM (~6–10x Diazepam Potency)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Etizolam",
      "source": "PubChem CID 3307",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/3307"
    }
  },
  {
    "id": "clonazolam",
    "name": "Clonazolam (Clonitrazolam · Ultra-Potent Nitro-Triazolo Hybrid)",
    "shortName": "Clonazolam",
    "synonyms": [
      "Clonitrazolam",
      "C-lam"
    ],
    "classification": "Designer Benzodiazepine & Z-Drug",
    "riskTier": "Extreme",
    "pubchemCid": 12317920,
    "molecularFormula": "C17H12ClN5O2",
    "molecularWeight": 353.76,
    "canonicalSmiles": "CC1=NN=C2CN=C(C3=C(C=CC(=C3)[N+](=O)[O-])N12)C4=CC=CC=C4Cl",
    "xLogP": 2.6,
    "cb1KiNm": 0.2,
    "cb2KiNm": 0,
    "cb1Efficacy": "Ultra-Potent Triazolo-Benzodiazepine PAM (Clonazepam + Alprazolam Hybrid; ~2.5x Alprazolam)",
    "cb2Efficacy": "Nitro-Triazolobenzodiazepine Super-PAM",
    "relativePotencyVsD9": 6,
    "psychoactive": true,
    "alkylChainLength": "6-(2-Chlorophenyl)-1-methyl-8-nitro-4H-[1,2,4]triazolo[4,3-a][1,4]benzodiazepine",
    "cypEnzymes": [
      "CYP3A4",
      "Hepatic Nitroreduction"
    ],
    "primaryMetabolite": "Amino-clonazolam & Hydroxy-clonazolam",
    "immunoassayCrossReactivityPct": 75,
    "terminalHalfLifeHours": 14,
    "inhaledOnsetMinutes": [
      10,
      25
    ],
    "inhaledDurationHours": [
      6,
      10
    ],
    "oralOnsetMinutes": [
      20,
      45
    ],
    "oralDurationHours": [
      8,
      14
    ],
    "baseOralThresholdMg": 0.05,
    "baseInhaledThresholdMg": 0.05,
    "radarProfile": {
      "cb1AffinityScore": 98,
      "euphoriaPotency": 92,
      "somaticSedation": 98,
      "anxiogenicRisk": 15,
      "durationPersistence": 65,
      "lipidRetention": 32
    },
    "summary": "Fuses the 7-nitro group of clonazepam with the triazole ring of alprazolam. Active in humans at 50–100 micrograms (0.05–0.1 mg; standard dose 0.25–0.5 mg), making it one of the most potent recreational GABAergic compounds ever synthesized.",
    "pharmacologyNotes": "Slow recovery; extreme tolerance escalation.",
    "specificHazards": [
      "EXTREME BLACKOUT & REBOUND SEIZURE LIABILITY: 500 µg can trigger a 24-hour total amnesia blackout with catastrophic motor disinhibition and life-threatening withdrawal."
    ],
    "sideEffects": [
      {
        "effect": "Microgram Hypnotic Blitz, Total Amnesia & Disinhibition",
        "system": "Psychiatric",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "Ultra-Potent Triazolo-Benzodiazepine PAM (Clonazepam + Alprazolam Hybrid; ~2.5x Alprazolam)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Clonazolam",
      "source": "PubChem CID 12317920",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/12317920"
    }
  },
  {
    "id": "flualprazolam",
    "name": "Flualprazolam (FluAlp · 2'-Fluoro-Alprazolam)",
    "shortName": "Flualprazolam",
    "synonyms": [
      "FluAlp",
      "Flualp"
    ],
    "classification": "Designer Benzodiazepine & Z-Drug",
    "riskTier": "Extreme",
    "pubchemCid": 13783670,
    "molecularFormula": "C17H12ClFN4",
    "molecularWeight": 326.75,
    "canonicalSmiles": "CC1=NN=C2CN=C(C3=C(C=CC(=C3)Cl)N12)C4=CC=CC=C4F",
    "xLogP": 2.5,
    "cb1KiNm": 0.4,
    "cb2KiNm": 0,
    "cb1Efficacy": "High-Potency Fluorinated Triazolobenzodiazepine (~2x Alprazolam Potency with Heavy Sedation)",
    "cb2Efficacy": "ortho-Fluorinated Alprazolam Analog",
    "relativePotencyVsD9": 4.5,
    "psychoactive": true,
    "alkylChainLength": "8-Chloro-6-(2-fluorophenyl)-1-methyl-4H-[1,2,4]triazolo[4,3-a][1,4]benzodiazepine",
    "cypEnzymes": [
      "CYP3A4"
    ],
    "primaryMetabolite": "4-Hydroxyflualprazolam",
    "immunoassayCrossReactivityPct": 85,
    "terminalHalfLifeHours": 12,
    "inhaledOnsetMinutes": [
      10,
      25
    ],
    "inhaledDurationHours": [
      6,
      9
    ],
    "oralOnsetMinutes": [
      20,
      45
    ],
    "oralDurationHours": [
      7,
      12
    ],
    "baseOralThresholdMg": 0.125,
    "baseInhaledThresholdMg": 0.1,
    "radarProfile": {
      "cb1AffinityScore": 92,
      "euphoriaPotency": 84,
      "somaticSedation": 98,
      "anxiogenicRisk": 12,
      "durationPersistence": 58,
      "lipidRetention": 30
    },
    "summary": "ortho-Fluorinated analog of alprazolam (Xanax). Adding fluorine doubles milligram potency (threshold 0.125 mg) and shifts the subjective effect profile dramatically toward heavy hypnotic sedation and motor ataxia.",
    "pharmacologyNotes": "Duration is ~1.5x longer than standard Xanax.",
    "specificHazards": [
      "Heavy motor ataxia, slurred speech, and severe amnesia at doses above 0.5 mg."
    ],
    "sideEffects": [
      {
        "effect": "Heavy Sedating \"Super-Xanax\" Body Melt & Sleep Induction",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "High-Potency Fluorinated Triazolobenzodiazepine (~2x Alprazolam Potency with Heavy Sedation)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Flualprazolam",
      "source": "PubChem CID 13783670",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/13783670"
    }
  },
  {
    "id": "flubromazolam",
    "name": "Flubromazolam (Liquid Amnesia · Ultra-Potent Triazolam Analog)",
    "shortName": "Flubromazolam",
    "synonyms": [
      "Clam-sister",
      "Flubro"
    ],
    "classification": "Designer Benzodiazepine & Z-Drug",
    "riskTier": "Extreme",
    "pubchemCid": 13783671,
    "molecularFormula": "C17H12BrFN4",
    "molecularWeight": 371.21,
    "canonicalSmiles": "CC1=NN=C2CN=C(C3=C(C=CC(=C3)Br)N12)C4=CC=CC=C4F",
    "xLogP": 2.9,
    "cb1KiNm": 0.15,
    "cb2KiNm": 0,
    "cb1Efficacy": "Ultra-Potent Bromo-Fluoro Triazolobenzodiazepine PAM (Active at 50–100 µg; t½ ~18h)",
    "cb2Efficacy": "Brominated Fluorinated Triazolobenzodiazepine",
    "relativePotencyVsD9": 7,
    "psychoactive": true,
    "alkylChainLength": "8-Bromo-6-(2-fluorophenyl)-1-methyl-4H-[1,2,4]triazolo[4,3-a][1,4]benzodiazepine",
    "cypEnzymes": [
      "CYP3A4"
    ],
    "primaryMetabolite": "Hydroxylated flubromazolam",
    "immunoassayCrossReactivityPct": 70,
    "terminalHalfLifeHours": 18,
    "inhaledOnsetMinutes": [
      15,
      30
    ],
    "inhaledDurationHours": [
      10,
      18
    ],
    "oralOnsetMinutes": [
      25,
      60
    ],
    "oralDurationHours": [
      14,
      24
    ],
    "baseOralThresholdMg": 0.05,
    "baseInhaledThresholdMg": 0.05,
    "radarProfile": {
      "cb1AffinityScore": 99,
      "euphoriaPotency": 88,
      "somaticSedation": 100,
      "anxiogenicRisk": 15,
      "durationPersistence": 85,
      "lipidRetention": 38
    },
    "summary": "Perhaps the most relentlessly sedating benzodiazepine ever cataloged (threshold ~50 µg = 0.05 mg; standard dose 150–250 µg). Produces total hypnotic sedation and memory loss lasting up to 18–24 hours from a single sub-milligram dose.",
    "pharmacologyNotes": "High receptor affinity causes multi-day tolerance lock.",
    "specificHazards": [
      "CATASTROPHIC MULTI-DAY BLACKOUT RISK: Doses >0.4 mg easily wipe 24–48 hours of memory with severe motor incoordination."
    ],
    "sideEffects": [
      {
        "effect": "Microgram Hypnotic Coma, 24-Hour Blackout & Heavy Ataxia",
        "system": "Psychiatric",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "Ultra-Potent Bromo-Fluoro Triazolobenzodiazepine PAM (Active at 50–100 µg; t½ ~18h)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Flubromazolam",
      "source": "PubChem CID 13783671",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/13783671"
    }
  },
  {
    "id": "flubromazepam",
    "name": "Flubromazepam (Long-Acting Bromo-Fluorinated Benzodiazepine)",
    "shortName": "Flubromazepam",
    "synonyms": [
      "F-Pam"
    ],
    "classification": "Designer Benzodiazepine & Z-Drug",
    "riskTier": "High",
    "pubchemCid": 13783672,
    "molecularFormula": "C15H10BrFN2O",
    "molecularWeight": 333.16,
    "canonicalSmiles": "C1=CC=C(C=C1F)C2=NCC(=O)NC3=C2C=CC(=C3)Br",
    "xLogP": 3.1,
    "cb1KiNm": 4.5,
    "cb2KiNm": 0,
    "cb1Efficacy": "Long-Acting GABAA PAM (Elimination Half-Life ~100–120 Hours)",
    "cb2Efficacy": "Fluorinated Bromazepam Analog",
    "relativePotencyVsD9": 1,
    "psychoactive": true,
    "alkylChainLength": "7-Bromo-5-(2-fluorophenyl)-1,3-dihydro-2H-1,4-benzodiazepin-2-one",
    "cypEnzymes": [
      "CYP3A4",
      "CYP2C19"
    ],
    "primaryMetabolite": "3-Hydroxyflubromazepam",
    "immunoassayCrossReactivityPct": 90,
    "terminalHalfLifeHours": 106,
    "inhaledOnsetMinutes": [
      30,
      60
    ],
    "inhaledDurationHours": [
      18,
      36
    ],
    "oralOnsetMinutes": [
      60,
      120
    ],
    "oralDurationHours": [
      24,
      72
    ],
    "baseOralThresholdMg": 2,
    "baseInhaledThresholdMg": 2,
    "radarProfile": {
      "cb1AffinityScore": 65,
      "euphoriaPotency": 72,
      "somaticSedation": 78,
      "anxiogenicRisk": 8,
      "durationPersistence": 98,
      "lipidRetention": 42
    },
    "summary": "Long-acting bromo-fluorinated 1,4-benzodiazepine with an extraordinary 100+ hour elimination half-life. Takes 1–2 hours to kick in, building a thick, smooth, multi-day cushion against stress.",
    "pharmacologyNotes": "Slow onset tricks users into redosing.",
    "specificHazards": [
      "ACCIDENTAL MULTI-DAY ACCUMULATION: Because it takes up to 2 hours to peak and lasts 3 days, redosing on day 1 causes severe motor intoxication on day 2."
    ],
    "sideEffects": [
      {
        "effect": "Multi-Day Smooth Tranquility, Muscle Softening & Low Spiking",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Long-Acting GABAA PAM (Elimination Half-Life ~100–120 Hours)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Flubromazepam",
      "source": "PubChem CID 13783672",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/13783672"
    }
  },
  {
    "id": "diclazepam",
    "name": "Diclazepam (Chlorodiazepam · 2'-Chlorodiazepam)",
    "shortName": "Diclazepam",
    "synonyms": [
      "Chlorodiazepam",
      "Ro 5-3448"
    ],
    "classification": "Designer Benzodiazepine & Z-Drug",
    "riskTier": "High",
    "pubchemCid": 12317921,
    "molecularFormula": "C16H12Cl2N2O",
    "molecularWeight": 319.18,
    "canonicalSmiles": "CN1C(=O)CN=C(C2=C1C=CC(=C2)Cl)C3=CC=CC=C3Cl",
    "xLogP": 3.3,
    "cb1KiNm": 1.2,
    "cb2KiNm": 0,
    "cb1Efficacy": "High-Potency GABAA PAM Prodrug (~10x Diazepam; Converts to Delorazepam & Lorazepam)",
    "cb2Efficacy": "ortho-Chlorinated Diazepam",
    "relativePotencyVsD9": 2,
    "psychoactive": true,
    "alkylChainLength": "7-Chloro-5-(2-chlorophenyl)-1-methyl-1,3-dihydro-2H-1,4-benzodiazepin-2-one",
    "cypEnzymes": [
      "CYP3A4",
      "CYP2C19"
    ],
    "primaryMetabolite": "Delorazepam (t½ ~80h), Lormetazepam & Lorazepam",
    "immunoassayCrossReactivityPct": 90,
    "terminalHalfLifeHours": 42,
    "inhaledOnsetMinutes": [
      20,
      45
    ],
    "inhaledDurationHours": [
      10,
      18
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      14,
      28
    ],
    "baseOralThresholdMg": 0.5,
    "baseInhaledThresholdMg": 0.5,
    "radarProfile": {
      "cb1AffinityScore": 72,
      "euphoriaPotency": 70,
      "somaticSedation": 76,
      "anxiogenicRisk": 8,
      "durationPersistence": 90,
      "lipidRetention": 38
    },
    "summary": "ortho-Chloro derivative of diazepam (~10x diazepam potency; threshold 0.5 mg). Highly valued in harm-reduction communities as the premier tapering tool due to its smooth breakdown into delorazepam, lormetazepam, and lorazepam.",
    "pharmacologyNotes": "Ideal pharmacokinetics for safe, step-down benzodiazepine cessation.",
    "specificHazards": [
      "Cumulative motor sluggishness with frequent redosing."
    ],
    "sideEffects": [
      {
        "effect": "Level Anti-Anxiety Shield & Gold Standard Tapering Benzodiazepine",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "High-Potency GABAA PAM Prodrug (~10x Diazepam; Converts to Delorazepam & Lorazepam)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Diclazepam",
      "source": "PubChem CID 12317921",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/12317921"
    }
  },
  {
    "id": "pyrazolam",
    "name": "Pyrazolam (Water-Soluble Pure Anxiolytic · Pyridinyl Triazolodiazepine)",
    "shortName": "Pyrazolam",
    "synonyms": [
      "Pure Anxiolytic"
    ],
    "classification": "Designer Benzodiazepine & Z-Drug",
    "riskTier": "Moderate",
    "pubchemCid": 56841530,
    "molecularFormula": "C16H12BrN5",
    "molecularWeight": 354.21,
    "canonicalSmiles": "CC1=NN=C2CN=C(C3=C(C=CC(=C3)Br)N12)C4=CC=CC=N4",
    "xLogP": 1.8,
    "cb1KiNm": 1.4,
    "cb2KiNm": 0,
    "cb1Efficacy": "Selective Anxiolytic GABAA α2/α3 Preferential PAM (Virtually Devoid of Sedation or Ataxia)",
    "cb2Efficacy": "Pyridinyl-Triazolobenzodiazepine",
    "relativePotencyVsD9": 1.5,
    "psychoactive": true,
    "alkylChainLength": "8-Bromo-1-methyl-6-(pyridin-2-yl)-4H-[1,2,4]triazolo[4,3-a][1,4]benzodiazepine",
    "cypEnzymes": [
      "Renal Excretion (>60% Unchanged)"
    ],
    "primaryMetabolite": "Direct Renal Elimination (Minimal CYP Oxidation)",
    "immunoassayCrossReactivityPct": 50,
    "terminalHalfLifeHours": 17,
    "inhaledOnsetMinutes": [
      15,
      30
    ],
    "inhaledDurationHours": [
      5,
      8
    ],
    "oralOnsetMinutes": [
      20,
      45
    ],
    "oralDurationHours": [
      6,
      10
    ],
    "baseOralThresholdMg": 0.5,
    "baseInhaledThresholdMg": 0.5,
    "radarProfile": {
      "cb1AffinityScore": 60,
      "euphoriaPotency": 55,
      "somaticSedation": 22,
      "anxiogenicRisk": 6,
      "durationPersistence": 55,
      "lipidRetention": 18
    },
    "summary": "Pyridinyl-triazolobenzodiazepine developed at Hoffman-La Roche in the 1970s. Remarkably, it selectively activates GABAA α2 and α3 subunits over α1, producing pure anxiety relief with almost zero sedation, muscle weakness, or memory fog!",
    "pharmacologyNotes": "Over 60% excreted unchanged by the kidneys without hepatic CYP metabolism.",
    "specificHazards": [
      "Low abuse liability; not effective as a primary sleep aid."
    ],
    "sideEffects": [
      {
        "effect": "Laser-Targeted Daytime Anxiolysis with Zero Sleepiness or Clumsiness",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Selective Anxiolytic GABAA α2/α3 Preferential PAM (Virtually Devoid of Sedation or Ataxia)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Pyrazolam",
      "source": "PubChem CID 56841530",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/56841530"
    }
  },
  {
    "id": "bromazolam",
    "name": "Bromazolam (Bromo-Alprazolam · Phenazepam Triazolo Analog)",
    "shortName": "Bromazolam",
    "synonyms": [
      "X-bar bromo analog"
    ],
    "classification": "Designer Benzodiazepine & Z-Drug",
    "riskTier": "High",
    "pubchemCid": 13783673,
    "molecularFormula": "C17H13BrN4",
    "molecularWeight": 353.22,
    "canonicalSmiles": "CC1=NN=C2CN=C(C3=C(C=CC(=C3)Br)N12)C4=CC=CC=C4",
    "xLogP": 2.6,
    "cb1KiNm": 0.8,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent GABAA PAM (Bromine Bioisostere of Alprazolam — ~1.2x Xanax Potency with Warm Sedation)",
    "cb2Efficacy": "8-Bromo Triazolobenzodiazepine",
    "relativePotencyVsD9": 2.5,
    "psychoactive": true,
    "alkylChainLength": "8-Bromo-1-methyl-6-phenyl-4H-[1,2,4]triazolo[4,3-a][1,4]benzodiazepine",
    "cypEnzymes": [
      "CYP3A4"
    ],
    "primaryMetabolite": "alpha-Hydroxybromazolam & 4-Hydroxybromazolam",
    "immunoassayCrossReactivityPct": 85,
    "terminalHalfLifeHours": 12,
    "inhaledOnsetMinutes": [
      15,
      30
    ],
    "inhaledDurationHours": [
      6,
      9
    ],
    "oralOnsetMinutes": [
      25,
      50
    ],
    "oralDurationHours": [
      8,
      12
    ],
    "baseOralThresholdMg": 0.5,
    "baseInhaledThresholdMg": 0.5,
    "radarProfile": {
      "cb1AffinityScore": 82,
      "euphoriaPotency": 88,
      "somaticSedation": 90,
      "anxiogenicRisk": 10,
      "durationPersistence": 56,
      "lipidRetention": 32
    },
    "summary": "Bromine bioisostere of alprazolam (Xanax). Replacing the 8-chloro group with bromine creates a warm, deeply relaxing, slightly longer-acting (8–12 hour) anxiolytic-hypnotic that has become the dominant counterfeit \"Xanax\" component worldwide.",
    "pharmacologyNotes": "Smooth 10–14 hour half-life.",
    "specificHazards": [
      "Widely pressed into counterfeit \"Xanax\" bars; motor incoordination and amnesia at doses >2 mg."
    ],
    "sideEffects": [
      {
        "effect": "Warm \"Super-Xanax\" Muscle Melt, Euphoria & Sound Sleep",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Potent GABAA PAM (Bromine Bioisostere of Alprazolam — ~1.2x Xanax Potency with Warm Sedation)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Bromazolam",
      "source": "PubChem CID 13783673",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/13783673"
    }
  },
  {
    "id": "meclonazepam",
    "name": "Meclonazepam (Ro 11-3128 · Antischistosomal Benzodiazepine)",
    "shortName": "Meclonazepam",
    "synonyms": [
      "Ro 11-3128",
      "Methylclonazepam"
    ],
    "classification": "Designer Benzodiazepine & Z-Drug",
    "riskTier": "High",
    "pubchemCid": 13783674,
    "molecularFormula": "C16H12ClN3O3",
    "molecularWeight": 329.74,
    "canonicalSmiles": "CN1C(=O)CN=C(C2=C1C=CC(=C2)[N+](=O)[O-])C3=CC=CC=C3Cl",
    "xLogP": 2.8,
    "cb1KiNm": 1.2,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent GABAA PAM + Parasitic Tegument Disrupter (~2x Clonazepam Potency)",
    "cb2Efficacy": "N-Methylated ortho-Chloro Nitrazepam",
    "relativePotencyVsD9": 2,
    "psychoactive": true,
    "alkylChainLength": "5-(2-Chlorophenyl)-1-methyl-7-nitro-1,3-dihydro-2H-1,4-benzodiazepin-2-one",
    "cypEnzymes": [
      "Hepatic Nitroreduction",
      "CYP3A4"
    ],
    "primaryMetabolite": "7-Aminomeclonazepam",
    "immunoassayCrossReactivityPct": 85,
    "terminalHalfLifeHours": 18,
    "inhaledOnsetMinutes": [
      20,
      45
    ],
    "inhaledDurationHours": [
      8,
      12
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      10,
      18
    ],
    "baseOralThresholdMg": 0.25,
    "baseInhaledThresholdMg": 0.25,
    "radarProfile": {
      "cb1AffinityScore": 78,
      "euphoriaPotency": 80,
      "somaticSedation": 86,
      "anxiogenicRisk": 10,
      "durationPersistence": 72,
      "lipidRetention": 34
    },
    "summary": "N-methylated derivative of clonazepam synthesized by Roche in the 1970s with antiparasitic (antischistosomal) properties alongside potent, long-lasting benzodiazepine sedation.",
    "pharmacologyNotes": "Elimination half-life ~18 hours.",
    "specificHazards": [
      "Strong motor ataxia and anterograde amnesia."
    ],
    "sideEffects": [
      {
        "effect": "Long-Acting Physical Relaxation & Anticonvulsant Shield",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Potent GABAA PAM + Parasitic Tegument Disrupter (~2x Clonazepam Potency)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Meclonazepam",
      "source": "PubChem CID 13783674",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/13783674"
    }
  },
  {
    "id": "nifoxipam",
    "name": "Nifoxipam (3-Hydroxydesmethylflunitrazepam · DP-370)",
    "shortName": "Nifoxipam",
    "synonyms": [
      "DP-370",
      "3-OH-desmethylflunitrazepam"
    ],
    "classification": "Designer Benzodiazepine & Z-Drug",
    "riskTier": "High",
    "pubchemCid": 13783675,
    "molecularFormula": "C15H10FN3O4",
    "molecularWeight": 315.26,
    "canonicalSmiles": "C1=CC=C(C=C1F)C2=NC(C(=O)NC3=C2C=CC(=C3)[N+](=O)[O-])O",
    "xLogP": 2.4,
    "cb1KiNm": 1,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent 3-Hydroxy GABAA Hypnotic PAM (Flunitrazepam/Roofies Active Metabolite)",
    "cb2Efficacy": "3-Hydroxy-7-nitro-1,4-benzodiazepine",
    "relativePotencyVsD9": 2.2,
    "psychoactive": true,
    "alkylChainLength": "5-(2-Fluorophenyl)-3-hydroxy-7-nitro-1,3-dihydro-2H-1,4-benzodiazepin-2-one",
    "cypEnzymes": [
      "UGT2B7",
      "Hepatic Nitroreduction"
    ],
    "primaryMetabolite": "Nifoxipam-Glucuronide",
    "immunoassayCrossReactivityPct": 85,
    "terminalHalfLifeHours": 12,
    "inhaledOnsetMinutes": [
      15,
      30
    ],
    "inhaledDurationHours": [
      5,
      8
    ],
    "oralOnsetMinutes": [
      25,
      50
    ],
    "oralDurationHours": [
      7,
      11
    ],
    "baseOralThresholdMg": 0.5,
    "baseInhaledThresholdMg": 0.5,
    "radarProfile": {
      "cb1AffinityScore": 76,
      "euphoriaPotency": 82,
      "somaticSedation": 94,
      "anxiogenicRisk": 10,
      "durationPersistence": 50,
      "lipidRetention": 30
    },
    "summary": "3-Hydroxylated minor active metabolite of flunitrazepam (Rohypnol). Delivers powerful hypnotic sedation and physical relaxation with direct Phase II glucuronidation and minimal daytime hangover.",
    "pharmacologyNotes": "Glucuronidated without requiring CYP enzymes.",
    "specificHazards": [
      "Strong hypnotic amnesia; extreme sedation when mixed with alcohol."
    ],
    "sideEffects": [
      {
        "effect": "Deep Hypnotic Muscle Melt & Rapid Sleep Induction",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Potent 3-Hydroxy GABAA Hypnotic PAM (Flunitrazepam/Roofies Active Metabolite)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Nifoxipam",
      "source": "PubChem CID 13783675",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/13783675"
    }
  },
  {
    "id": "desalkylgidazepam",
    "name": "Desalkylgidazepam (Bromonordiazepam · Active Gidazepam Metabolite)",
    "shortName": "Desalkylgidazepam",
    "synonyms": [
      "Bromonordiazepam"
    ],
    "classification": "Designer Benzodiazepine & Z-Drug",
    "riskTier": "Moderate",
    "pubchemCid": 13783676,
    "molecularFormula": "C15H11BrN2O",
    "molecularWeight": 315.17,
    "canonicalSmiles": "C1=CC=C(C=C1)C2=NC(=O)CNC3=C2C=CC(=C3)Br",
    "xLogP": 2.8,
    "cb1KiNm": 4,
    "cb2KiNm": 0,
    "cb1Efficacy": "Long-Acting Brominated Nordiazepam Bioisostere (GABAA PAM; t½ ~80–100 Hours)",
    "cb2Efficacy": "Active Metabolite of Ukrainian Gidazepam",
    "relativePotencyVsD9": 0.8,
    "psychoactive": true,
    "alkylChainLength": "7-Bromo-5-phenyl-1,3-dihydro-2H-1,4-benzodiazepin-2-one",
    "cypEnzymes": [
      "CYP3A4",
      "UGT2B7"
    ],
    "primaryMetabolite": "3-Hydroxydesalkylgidazepam & Oxazepam Analogs",
    "immunoassayCrossReactivityPct": 90,
    "terminalHalfLifeHours": 86,
    "inhaledOnsetMinutes": [
      30,
      60
    ],
    "inhaledDurationHours": [
      18,
      36
    ],
    "oralOnsetMinutes": [
      45,
      90
    ],
    "oralDurationHours": [
      24,
      72
    ],
    "baseOralThresholdMg": 1.5,
    "baseInhaledThresholdMg": 1.5,
    "radarProfile": {
      "cb1AffinityScore": 55,
      "euphoriaPotency": 58,
      "somaticSedation": 62,
      "anxiogenicRisk": 8,
      "durationPersistence": 95,
      "lipidRetention": 38
    },
    "summary": "Primary circulating active metabolite of the Ukrainian anxiolytic gidazepam. Acts as a brominated bioisostere of nordazepam with an enormous 80–100 hour elimination half-life, providing smooth, non-sedating, all-day anxiety suppression.",
    "pharmacologyNotes": "Ideal for long-term tapering protocols.",
    "specificHazards": [
      "Very slow clearance; accumulates over weeks of daily use."
    ],
    "sideEffects": [
      {
        "effect": "Smooth Multi-Day Daytime Calm & Tapering Tool",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Long-Acting Brominated Nordiazepam Bioisostere (GABAA PAM; t½ ~80–100 Hours)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Desalkylgidazepam",
      "source": "PubChem CID 13783676",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/13783676"
    }
  },
  {
    "id": "norflurazepam",
    "name": "Norflurazepam (N-Desalkylflurazepam · Active Dalmane Metabolite)",
    "shortName": "Norflurazepam",
    "synonyms": [
      "N-Desalkylflurazepam"
    ],
    "classification": "Designer Benzodiazepine & Z-Drug",
    "riskTier": "High",
    "pubchemCid": 13783677,
    "molecularFormula": "C15H10ClFN2O",
    "molecularWeight": 288.7,
    "canonicalSmiles": "C1=CC=C(C=C1F)C2=NC(=O)CNC3=C2C=CC(=C3)Cl",
    "xLogP": 2.9,
    "cb1KiNm": 1.5,
    "cb2KiNm": 0,
    "cb1Efficacy": "High-Potency Long-Acting GABAA PAM (Active Dalmane/Midazolam Metabolite; t½ ~60–100h)",
    "cb2Efficacy": "Active Desalkyl Flurazepam Metabolite",
    "relativePotencyVsD9": 2,
    "psychoactive": true,
    "alkylChainLength": "7-Chloro-5-(2-fluorophenyl)-1,3-dihydro-2H-1,4-benzodiazepin-2-one",
    "cypEnzymes": [
      "CYP3A4",
      "UGT2B7"
    ],
    "primaryMetabolite": "3-Hydroxynorflurazepam",
    "immunoassayCrossReactivityPct": 90,
    "terminalHalfLifeHours": 75,
    "inhaledOnsetMinutes": [
      20,
      45
    ],
    "inhaledDurationHours": [
      14,
      24
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      18,
      36
    ],
    "baseOralThresholdMg": 1,
    "baseInhaledThresholdMg": 1,
    "radarProfile": {
      "cb1AffinityScore": 75,
      "euphoriaPotency": 78,
      "somaticSedation": 84,
      "anxiogenicRisk": 8,
      "durationPersistence": 94,
      "lipidRetention": 36
    },
    "summary": "Direct active metabolite responsible for the therapeutic effects of flurazepam (Dalmane) and ethyl loflazepate. Possesses ~2–3x diazepam potency and an immense 60–100 hour half-life.",
    "pharmacologyNotes": "Combines strong muscle relaxation with reliable sleep promotion.",
    "specificHazards": [
      "Cumulative sedation if dosed nightly."
    ],
    "sideEffects": [
      {
        "effect": "Deep Muscle Relaxation, Sleep Continuity & Multi-Day Calm",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "High-Potency Long-Acting GABAA PAM (Active Dalmane/Midazolam Metabolite; t½ ~60–100h)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Norflurazepam",
      "source": "PubChem CID 13783677",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/13783677"
    }
  },
  {
    "id": "nitrazolam",
    "name": "Nitrazolam (1-Methyl-8-nitro-triazolam · Potent Hypnotic)",
    "shortName": "Nitrazolam",
    "synonyms": [
      "Triazolo-nitrazepam"
    ],
    "classification": "Designer Benzodiazepine & Z-Drug",
    "riskTier": "Extreme",
    "pubchemCid": 13783678,
    "molecularFormula": "C16H11N5O2",
    "molecularWeight": 305.3,
    "canonicalSmiles": "CC1=NN=C2CN=C(C3=C(C=CC(=C3)[N+](=O)[O-])N12)C4=CC=CC=C4",
    "xLogP": 2.2,
    "cb1KiNm": 0.4,
    "cb2KiNm": 0,
    "cb1Efficacy": "High-Potency Nitro-Triazolobenzodiazepine PAM (~2–3x Alprazolam Potency)",
    "cb2Efficacy": "Triazolo-Fused Nitrazepam Analog",
    "relativePotencyVsD9": 5,
    "psychoactive": true,
    "alkylChainLength": "1-Methyl-8-nitro-6-phenyl-4H-[1,2,4]triazolo[4,3-a][1,4]benzodiazepine",
    "cypEnzymes": [
      "Hepatic Nitroreduction",
      "CYP3A4"
    ],
    "primaryMetabolite": "Amino-nitrazolam",
    "immunoassayCrossReactivityPct": 80,
    "terminalHalfLifeHours": 14,
    "inhaledOnsetMinutes": [
      15,
      30
    ],
    "inhaledDurationHours": [
      6,
      10
    ],
    "oralOnsetMinutes": [
      20,
      45
    ],
    "oralDurationHours": [
      8,
      14
    ],
    "baseOralThresholdMg": 0.25,
    "baseInhaledThresholdMg": 0.25,
    "radarProfile": {
      "cb1AffinityScore": 92,
      "euphoriaPotency": 88,
      "somaticSedation": 98,
      "anxiogenicRisk": 12,
      "durationPersistence": 62,
      "lipidRetention": 30
    },
    "summary": "Triazolo-fused analog of nitrazepam (~3x alprazolam potency; threshold 0.25 mg). Extremely potent hypnotic and muscle relaxant with a warm, euphoric rush leading to rapid sleep induction.",
    "pharmacologyNotes": "Elimination half-life ~14 hours.",
    "specificHazards": [
      "Blackout hazard and motor incoordination at doses above 1 mg."
    ],
    "sideEffects": [
      {
        "effect": "Warm Euphoric Sedation, Muscle Melt & Deep Sleep",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "High-Potency Nitro-Triazolobenzodiazepine PAM (~2–3x Alprazolam Potency)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Nitrazolam",
      "source": "PubChem CID 13783678",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/13783678"
    }
  },
  {
    "id": "flunitrazolam",
    "name": "Flunitrazolam (Ultra-Potent Fluorinated Nitro-Triazolam)",
    "shortName": "Flunitrazolam",
    "synonyms": [
      "F-Nitraz",
      "Triazolo-Rohypnol"
    ],
    "classification": "Designer Benzodiazepine & Z-Drug",
    "riskTier": "Extreme",
    "pubchemCid": 13783679,
    "molecularFormula": "C16H10FN5O2",
    "molecularWeight": 323.29,
    "canonicalSmiles": "CC1=NN=C2CN=C(C3=C(C=CC(=C3)[N+](=O)[O-])N12)C4=CC=CC=C4F",
    "xLogP": 2.4,
    "cb1KiNm": 0.1,
    "cb2KiNm": 0,
    "cb1Efficacy": "Ultra-Potent Hypnotic Super-PAM (Triazolo-Fused Flunitrazepam; Active at 50 µg)",
    "cb2Efficacy": "ortho-Fluoro-Nitrazolam Analog",
    "relativePotencyVsD9": 8,
    "psychoactive": true,
    "alkylChainLength": "6-(2-Fluorophenyl)-1-methyl-8-nitro-4H-[1,2,4]triazolo[4,3-a][1,4]benzodiazepine",
    "cypEnzymes": [
      "Hepatic Nitroreduction",
      "CYP3A4"
    ],
    "primaryMetabolite": "Amino-flunitrazolam",
    "immunoassayCrossReactivityPct": 75,
    "terminalHalfLifeHours": 8,
    "inhaledOnsetMinutes": [
      10,
      20
    ],
    "inhaledDurationHours": [
      3,
      5
    ],
    "oralOnsetMinutes": [
      15,
      35
    ],
    "oralDurationHours": [
      4,
      7
    ],
    "baseOralThresholdMg": 0.05,
    "baseInhaledThresholdMg": 0.05,
    "radarProfile": {
      "cb1AffinityScore": 100,
      "euphoriaPotency": 90,
      "somaticSedation": 100,
      "anxiogenicRisk": 15,
      "durationPersistence": 35,
      "lipidRetention": 28
    },
    "summary": "Triazolo-fused analog of flunitrazepam (Rohypnol). Active in humans at 50–100 micrograms (0.05–0.1 mg), making it one of the most potent hypnotic sleep inducers in existence.",
    "pharmacologyNotes": "Rapid 4–6 hour clearance.",
    "specificHazards": [
      "SEIZURE REBOUND & BLACKOUT RISK: Steep drop-off after 4–6 hours has been reported to trigger paradoxical convulsions and seizures upon abrupt cessation."
    ],
    "sideEffects": [
      {
        "effect": "Microgram Hypnotic Blitz, Deep Sleep & Rebound Seizure Risk",
        "system": "Psychiatric",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "Ultra-Potent Hypnotic Super-PAM (Triazolo-Fused Flunitrazepam; Active at 50 µg)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Flunitrazolam",
      "source": "PubChem CID 13783679",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/13783679"
    }
  },
  {
    "id": "bretazenil",
    "name": "Bretazenil (Ro 16-6028 · Imidazobenzodiazepine Low-Tolerance PAM)",
    "shortName": "Bretazenil",
    "synonyms": [
      "Ro 16-6028"
    ],
    "classification": "Designer Benzodiazepine & Z-Drug",
    "riskTier": "Low",
    "pubchemCid": 119580,
    "molecularFormula": "C19H20BrN3O3",
    "molecularWeight": 418.29,
    "canonicalSmiles": "CCOC(=O)C1=C2N=C(C3=C(C=C(C=C3)Br)N2C(=O)C4(CC4)C1)N",
    "xLogP": 2.3,
    "cb1KiNm": 0.4,
    "cb2KiNm": 0,
    "cb1Efficacy": "High-Affinity Partial GABAA Agonist (Sub-Nanomolar Binding with Low Intrinsic Efficacy)",
    "cb2Efficacy": "Low-Tolerance Imidazo-Pyrrolodiazepine",
    "relativePotencyVsD9": 0.8,
    "psychoactive": true,
    "alkylChainLength": "Ethyl 8-bromo-11,12,13,13a-tetrahydro-9-oxo-9H-imidazo[1,5-a]pyrrolo[2,1-c][1,4]benzodiazepine-1-carboxylate",
    "cypEnzymes": [
      "CYP3A4",
      "Esterases"
    ],
    "primaryMetabolite": "Hydrolyzed Carboxylic Acid Metabolites",
    "immunoassayCrossReactivityPct": 0,
    "terminalHalfLifeHours": 2.5,
    "inhaledOnsetMinutes": [
      10,
      25
    ],
    "inhaledDurationHours": [
      2.5,
      4
    ],
    "oralOnsetMinutes": [
      15,
      35
    ],
    "oralDurationHours": [
      3,
      5
    ],
    "baseOralThresholdMg": 0.25,
    "baseInhaledThresholdMg": 0.25,
    "radarProfile": {
      "cb1AffinityScore": 65,
      "euphoriaPotency": 48,
      "somaticSedation": 35,
      "anxiogenicRisk": 6,
      "durationPersistence": 22,
      "lipidRetention": 20
    },
    "summary": "High-affinity partial agonist at the GABAA benzodiazepine site developed by Roche (Ro 16-6028). Binds with sub-nanomolar affinity but only activates receptor channels to ~40–50% of full agonists, producing clean anxiolysis with virtually zero tolerance, dependence, or respiratory depression.",
    "pharmacologyNotes": "Acts as an antidote to full agonists by displacing them.",
    "specificHazards": [
      "Short 2.5-hour half-life requires multiple doses for all-day coverage."
    ],
    "sideEffects": [
      {
        "effect": "Clean Anti-Anxiety Relief with Zero Tolerance or Addiction Liability",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "High-Affinity Partial GABAA Agonist (Sub-Nanomolar Binding with Low Intrinsic Efficacy)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Bretazenil",
      "source": "PubChem CID 119580",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/119580"
    }
  },
  {
    "id": "rilmazafone",
    "name": "Rilmazafone (Rhythmy · Water-Soluble Amino-Peptide Benzodiazepine Prodrug)",
    "shortName": "Rilmazafone",
    "synonyms": [
      "Rhythmy",
      "Water-Soluble Benzo"
    ],
    "classification": "Designer Benzodiazepine & Z-Drug",
    "riskTier": "Moderate",
    "pubchemCid": 5064,
    "molecularFormula": "C21H20Cl2N6O2",
    "molecularWeight": 459.33,
    "canonicalSmiles": "CN(C)CC(=O)NC1=CC=C(C=C1Cl)C(=O)C2=NC(=NN2C)CN",
    "xLogP": 1.8,
    "cb1KiNm": 1000,
    "cb2KiNm": 0,
    "cb1Efficacy": "Water-Soluble Peptide Prodrug (Hydrolyzed in GI Tract by Aminopeptidases to Rilmazolam)",
    "cb2Efficacy": "Peptide-Conjugated Benzodiazepine Prodrug",
    "relativePotencyVsD9": 1.2,
    "psychoactive": true,
    "alkylChainLength": "5-[(2-Aminoacetamido)methyl]-1-[4-chloro-2-(2-chlorobenzoyl)phenyl]-N,N-dimethyl-1H-1,2,4-triazole-3-carboxamide",
    "cypEnzymes": [
      "Intestinal Aminopeptidases",
      "CYP3A4"
    ],
    "primaryMetabolite": "Rilmazolam (M-1 Active Triazolobenzodiazepine; t½ ~10h)",
    "immunoassayCrossReactivityPct": 0,
    "terminalHalfLifeHours": 10.5,
    "inhaledOnsetMinutes": [
      25,
      50
    ],
    "inhaledDurationHours": [
      6,
      9
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      8,
      12
    ],
    "baseOralThresholdMg": 1,
    "baseInhaledThresholdMg": 1,
    "radarProfile": {
      "cb1AffinityScore": 65,
      "euphoriaPotency": 72,
      "somaticSedation": 86,
      "anxiogenicRisk": 8,
      "durationPersistence": 52,
      "lipidRetention": 22
    },
    "summary": "Water-soluble amino-peptide prodrug prescribed in Japan (Rhythmy). Pharmacologically inactive until cleaved in the small intestine by aminopeptidase enzymes into the active triazolobenzodiazepine rilmazolam (M-1).",
    "pharmacologyNotes": "Cannot be snorted or injected effectively because cleavage requires intestinal enzymes.",
    "specificHazards": [
      "Safe and smooth sleep inducer with low abuse potential."
    ],
    "sideEffects": [
      {
        "effect": "Smooth 30-Minute Sleep Induction & Natural Wakefulness",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Water-Soluble Peptide Prodrug (Hydrolyzed in GI Tract by Aminopeptidases to Rilmazolam)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Rilmazafone",
      "source": "PubChem CID 5064",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/5064"
    }
  },
  {
    "id": "pagoclone",
    "name": "Pagoclone (Selective GABAA α2/α3 Partial PAM · Stuttering & Anxiety Drug)",
    "shortName": "Pagoclone",
    "synonyms": [
      "Non-Sedating Anxiolytic"
    ],
    "classification": "Designer Benzodiazepine & Z-Drug",
    "riskTier": "Low",
    "pubchemCid": 133034,
    "molecularFormula": "C23H22ClN3O2",
    "molecularWeight": 407.89,
    "canonicalSmiles": "CCN(CC)C(=O)C1=CC2=C(C=C1)N(C(=O)C3=C2C=CC(=C3)Cl)C4=NC=CS4",
    "xLogP": 2.6,
    "cb1KiNm": 12,
    "cb2KiNm": 0,
    "cb1Efficacy": "Subunit-Selective GABAA α2/α3 Partial PAM (Cyclopyrrolone Scaffold — Reduces Stuttering)",
    "cb2Efficacy": "Non-Benzodiazepine Cyclopyrrolone Anxiolytic",
    "relativePotencyVsD9": 0.6,
    "psychoactive": true,
    "alkylChainLength": "2-(7-Chloro-1,8-naphthyridin-2-yl)-3-(5-methyl-2-oxohexyl)isoindolin-1-one",
    "cypEnzymes": [
      "CYP3A4"
    ],
    "primaryMetabolite": "5-Hydroxypagoclone (Active Metabolite)",
    "immunoassayCrossReactivityPct": 0,
    "terminalHalfLifeHours": 5,
    "inhaledOnsetMinutes": [
      20,
      40
    ],
    "inhaledDurationHours": [
      4,
      6
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      5,
      8
    ],
    "baseOralThresholdMg": 1,
    "baseInhaledThresholdMg": 1,
    "radarProfile": {
      "cb1AffinityScore": 45,
      "euphoriaPotency": 48,
      "somaticSedation": 25,
      "anxiogenicRisk": 6,
      "durationPersistence": 36,
      "lipidRetention": 24
    },
    "summary": "Cyclopyrrolone non-benzodiazepine developed for generalized anxiety disorder and speech dysfluency (stuttering). Selectively modulates GABAA α2 and α3 subunits with partial intrinsic efficacy, producing calm, fluent verbal confidence without sedation.",
    "pharmacologyNotes": "Virtually zero abuse potential or physical dependence.",
    "specificHazards": [
      "Mild headache or dry mouth at high doses."
    ],
    "sideEffects": [
      {
        "effect": "Fluent Verbal Confidence, Anti-Stuttering & Non-Drowsy Calm",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Subunit-Selective GABAA α2/α3 Partial PAM (Cyclopyrrolone Scaffold — Reduces Stuttering)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Pagoclone",
      "source": "PubChem CID 133034",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/133034"
    }
  },
  {
    "id": "zolpidem",
    "name": "Zolpidem (Ambien · Stilnox · Selective GABAA α1 Imidazopyridine Hypnotic)",
    "shortName": "Zolpidem",
    "synonyms": [
      "Ambien",
      "Stilnox",
      "Sublinox",
      "Myslee"
    ],
    "classification": "Designer Benzodiazepine & Z-Drug",
    "riskTier": "High",
    "pubchemCid": 5732,
    "molecularFormula": "C19H21N3O",
    "molecularWeight": 307.39,
    "canonicalSmiles": "CC1=CC=C(C=C1)C2=C(N3C=C(C=CC3=N2)C)CC(=O)N(C)C",
    "xLogP": 1.8,
    "cb1KiNm": 19,
    "cb2KiNm": 0,
    "cb1Efficacy": "Highly Selective GABAA α1 Subunit Agonist (Imidazopyridine Z-Drug — Rapid Sleep Inducer)",
    "cb2Efficacy": "Archetypal Non-Benzodiazepine Z-Drug",
    "relativePotencyVsD9": 1.5,
    "psychoactive": true,
    "alkylChainLength": "N,N-Dimethyl-2-[6-methyl-2-(4-methylphenyl)imidazo[1,2-a]pyridin-3-yl]acetamide",
    "cypEnzymes": [
      "CYP3A4",
      "CYP2C9"
    ],
    "primaryMetabolite": "Carboxylic Acid Metabolites (Inactive)",
    "immunoassayCrossReactivityPct": 0,
    "terminalHalfLifeHours": 2.5,
    "inhaledOnsetMinutes": [
      10,
      20
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
      2.5,
      4.5
    ],
    "baseOralThresholdMg": 2.5,
    "baseInhaledThresholdMg": 2.5,
    "radarProfile": {
      "cb1AffinityScore": 78,
      "euphoriaPotency": 84,
      "somaticSedation": 98,
      "anxiogenicRisk": 14,
      "durationPersistence": 20,
      "lipidRetention": 18
    },
    "summary": "First-line non-benzodiazepine Z-drug (Ambien / Stilnox). Selectively targets the GABAA α1 subunit responsible for sedation, producing rapid sleep onset within 15–20 minutes with minimal muscle relaxation or anti-seizure effect.",
    "pharmacologyNotes": "Short 2.5-hour half-life avoids next-day grogginess.",
    "specificHazards": [
      "SLEEP-DRIVING & PARADOXICAL DELIRIUM (\"Ambien Walrus\"): Staying awake past the 20-minute window induces hallucination-like disinhibition and unremembered nocturnal activities."
    ],
    "sideEffects": [
      {
        "effect": "15-Minute Sleep Induction, Dreamy Disinhibition & Somnambulism",
        "system": "Psychiatric",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Highly Selective GABAA α1 Subunit Agonist (Imidazopyridine Z-Drug — Rapid Sleep Inducer)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Zolpidem",
      "source": "PubChem CID 5732",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/5732"
    }
  },
  {
    "id": "zopiclone",
    "name": "Zopiclone (Imovane · Datolan · Cyclopyrrolone Hypnotic)",
    "shortName": "Zopiclone",
    "synonyms": [
      "Imovane",
      "Datolan",
      "Zimovane"
    ],
    "classification": "Designer Benzodiazepine & Z-Drug",
    "riskTier": "High",
    "pubchemCid": 5735,
    "molecularFormula": "C17H17ClN6O3",
    "molecularWeight": 388.81,
    "canonicalSmiles": "CN1CCN(CC1)C(=O)OC2C3=NC=CN=C3C(=O)N2C4=CC=C(C=C4)Cl",
    "xLogP": 1.3,
    "cb1KiNm": 30,
    "cb2KiNm": 0,
    "cb1Efficacy": "GABAA Receptor PAM (Cyclopyrrolone Hypnotic Acting Across α1/α2/α3/α5)",
    "cb2Efficacy": "Racemic Cyclopyrrolone Sleep Aid",
    "relativePotencyVsD9": 1,
    "psychoactive": true,
    "alkylChainLength": "4-Methylpiperazine-1-carboxylate of 6-(5-chloropyridin-2-yl)-7-hydroxy-6,7-dihydropyrrolo[3,4-b]pyrazin-5-one",
    "cypEnzymes": [
      "CYP3A4",
      "CYP2C8"
    ],
    "primaryMetabolite": "N-Desmethylzopiclone & Zopiclone N-Oxide",
    "immunoassayCrossReactivityPct": 0,
    "terminalHalfLifeHours": 5.5,
    "inhaledOnsetMinutes": [
      15,
      30
    ],
    "inhaledDurationHours": [
      5,
      8
    ],
    "oralOnsetMinutes": [
      20,
      45
    ],
    "oralDurationHours": [
      6,
      9
    ],
    "baseOralThresholdMg": 2.5,
    "baseInhaledThresholdMg": 2.5,
    "radarProfile": {
      "cb1AffinityScore": 68,
      "euphoriaPotency": 74,
      "somaticSedation": 92,
      "anxiogenicRisk": 10,
      "durationPersistence": 42,
      "lipidRetention": 22
    },
    "summary": "Cyclopyrrolone hypnotic (Imovane). Unlike zolpidem, zopiclone binds across multiple GABAA subunits (α1, α2, α3, α5), providing longer 6–8 hour sleep maintenance alongside muscle relaxation, though notorious for causing an intense bitter metallic taste in the mouth.",
    "pharmacologyNotes": "Elimination half-life ~5.5 hours.",
    "specificHazards": [
      "Bitter metallic taste secretions in saliva and morning dry mouth."
    ],
    "sideEffects": [
      {
        "effect": "Sound 7-Hour Sleep Maintenance & Bitter Metallic Taste",
        "system": "Gastrointestinal",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "GABAA Receptor PAM (Cyclopyrrolone Hypnotic Acting Across α1/α2/α3/α5)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Zopiclone",
      "source": "PubChem CID 5735",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/5735"
    }
  },
  {
    "id": "zaleplon",
    "name": "Zaleplon (Sonata · Starnoc · Ultra-Short Pyrazolopyrimidine)",
    "shortName": "Zaleplon",
    "synonyms": [
      "Sonata",
      "Starnoc"
    ],
    "classification": "Designer Benzodiazepine & Z-Drug",
    "riskTier": "Moderate",
    "pubchemCid": 5734,
    "molecularFormula": "C17H15N5O",
    "molecularWeight": 305.34,
    "canonicalSmiles": "CCN(C(=O)C)C1=CC=CC(=C1)C2=NC=C3C(=NN3C2)C#N",
    "xLogP": 1.7,
    "cb1KiNm": 45,
    "cb2KiNm": 0,
    "cb1Efficacy": "Ultra-Short Selective GABAA α1 PAM (Pyrazolopyrimidine — 1-Hour Half-Life)",
    "cb2Efficacy": "Ultra-Short Sleep Onset Inducer",
    "relativePotencyVsD9": 1.2,
    "psychoactive": true,
    "alkylChainLength": "N-[3-(3-Cyanopyrazolo[1,5-a]pyrimidin-7-yl)phenyl]-N-ethylacetamide",
    "cypEnzymes": [
      "Aldehyde Oxidase (Primary)",
      "CYP3A4"
    ],
    "primaryMetabolite": "5-Oxozaleplon (Inactive)",
    "immunoassayCrossReactivityPct": 0,
    "terminalHalfLifeHours": 1,
    "inhaledOnsetMinutes": [
      5,
      15
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
    "baseOralThresholdMg": 2.5,
    "baseInhaledThresholdMg": 2.5,
    "radarProfile": {
      "cb1AffinityScore": 70,
      "euphoriaPotency": 72,
      "somaticSedation": 95,
      "anxiogenicRisk": 10,
      "durationPersistence": 12,
      "lipidRetention": 14
    },
    "summary": "Pyrazolopyrimidine Z-drug (Sonata) with the shortest elimination half-life of any sleep medication (~1.0 hour). Can be taken in the middle of the night upon waking with as little as 4 hours of sleep remaining without causing morning hangover.",
    "pharmacologyNotes": "Metabolized primarily by aldehyde oxidase.",
    "specificHazards": [
      "Does not help with middle-of-the-night awakenings if taken at bedtime due to short 1-hour half-life."
    ],
    "sideEffects": [
      {
        "effect": "Instantaneous 15-Minute Sleep Induction with 60-Minute Clearance",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Ultra-Short Selective GABAA α1 PAM (Pyrazolopyrimidine — 1-Hour Half-Life)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Zaleplon",
      "source": "PubChem CID 5734",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/5734"
    }
  },
  {
    "id": "eszopiclone",
    "name": "Eszopiclone (Lunesta · Pure (S)-Enantiomer of Zopiclone)",
    "shortName": "Eszopiclone",
    "synonyms": [
      "Lunesta"
    ],
    "classification": "Designer Benzodiazepine & Z-Drug",
    "riskTier": "High",
    "pubchemCid": 9801824,
    "molecularFormula": "C17H17ClN6O3",
    "molecularWeight": 388.81,
    "canonicalSmiles": "CN1CCN(CC1)C(=O)OC2C3=NC=CN=C3C(=O)N2C4=CC=C(C=C4)Cl",
    "xLogP": 1.3,
    "cb1KiNm": 15,
    "cb2KiNm": 0,
    "cb1Efficacy": "Enantiopure (S)-Zopiclone GABAA PAM (~2x Racemic Zopiclone Potency)",
    "cb2Efficacy": "Enantiopure Cyclopyrrolone Hypnotic",
    "relativePotencyVsD9": 1.4,
    "psychoactive": true,
    "alkylChainLength": "(S)-4-Methylpiperazine-1-carboxylate of 6-(5-chloropyridin-2-yl)-7-hydroxy-6,7-dihydropyrrolo[3,4-b]pyrazin-5-one",
    "cypEnzymes": [
      "CYP3A4",
      "CYP2E1"
    ],
    "primaryMetabolite": "(S)-N-Desmethylzopiclone & (S)-Zopiclone N-Oxide",
    "immunoassayCrossReactivityPct": 0,
    "terminalHalfLifeHours": 6,
    "inhaledOnsetMinutes": [
      15,
      30
    ],
    "inhaledDurationHours": [
      6,
      9
    ],
    "oralOnsetMinutes": [
      20,
      45
    ],
    "oralDurationHours": [
      7,
      10
    ],
    "baseOralThresholdMg": 1,
    "baseInhaledThresholdMg": 1,
    "radarProfile": {
      "cb1AffinityScore": 72,
      "euphoriaPotency": 76,
      "somaticSedation": 94,
      "anxiogenicRisk": 10,
      "durationPersistence": 44,
      "lipidRetention": 22
    },
    "summary": "Enantiopure (S)-stereoisomer of zopiclone (Lunesta). Removing the inactive (R)-enantiomer doubles milligram potency (threshold 1 mg; standard dose 2–3 mg) and improves sleep architecture with slightly less bitter taste.",
    "pharmacologyNotes": "Approved in the US for long-term insomnia treatment.",
    "specificHazards": [
      "Bitter metallic taste; physical dependence with chronic use."
    ],
    "sideEffects": [
      {
        "effect": "7–8 Hour Deep Restorative Sleep & Mild Metallic Aftertaste",
        "system": "Gastrointestinal",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Enantiopure (S)-Zopiclone GABAA PAM (~2x Racemic Zopiclone Potency)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Eszopiclone",
      "source": "PubChem CID 9801824",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/9801824"
    }
  },
  {
    "id": "phenibut",
    "name": "Phenibut (Noofen · Anvifen · β-Phenyl-GABA)",
    "shortName": "Phenibut",
    "synonyms": [
      "Noofen",
      "Anvifen",
      "Fenibut",
      "β-Phenyl-GABA"
    ],
    "classification": "Gabapentinoid & GABAergic",
    "riskTier": "High",
    "pubchemCid": 4725,
    "molecularFormula": "C10H13NO2",
    "molecularWeight": 179.22,
    "canonicalSmiles": "C1=CC=C(C=C1)C(CC(=O)O)CN",
    "xLogP": 1.1,
    "cb1KiNm": 1000,
    "cb2KiNm": 0,
    "cb1Efficacy": "Dual GABAB Agonist + α2δ Voltage-Gated Calcium Channel Blocker (~4x Baclofen VDCC Potency)",
    "cb2Efficacy": "β-Phenyl GABA Derivative",
    "relativePotencyVsD9": 0.8,
    "psychoactive": true,
    "alkylChainLength": "4-Amino-3-phenylbutanoic acid",
    "cypEnzymes": [
      "Renal Excretion (>65% Unchanged)"
    ],
    "primaryMetabolite": "Direct Renal Elimination",
    "immunoassayCrossReactivityPct": 0,
    "terminalHalfLifeHours": 5.5,
    "inhaledOnsetMinutes": [
      30,
      60
    ],
    "inhaledDurationHours": [
      8,
      14
    ],
    "oralOnsetMinutes": [
      60,
      150
    ],
    "oralDurationHours": [
      12,
      24
    ],
    "baseOralThresholdMg": 250,
    "baseInhaledThresholdMg": 150,
    "radarProfile": {
      "cb1AffinityScore": 68,
      "euphoriaPotency": 88,
      "somaticSedation": 65,
      "anxiogenicRisk": 12,
      "durationPersistence": 90,
      "lipidRetention": 22
    },
    "summary": "Synthesized in the USSR in 1963 for cosmonauts (Noofen). Fuses a phenyl ring to GABA, allowing it to cross the blood-brain barrier and act as both an α2δ voltage-gated calcium channel blocker (like gabapentin) and a direct GABAB receptor agonist.",
    "pharmacologyNotes": "Very slow oral absorption (peaks at 3–4 hours) and long 12–24 hour duration.",
    "specificHazards": [
      "SEVERE RAPID PHYSICAL DEPENDENCE: Daily use for as little as 5–7 days produces severe rebound anxiety, insomnia, and delirium tremens on cessation."
    ],
    "sideEffects": [
      {
        "effect": "Euphoric Pro-Social Motivation, Deep Restorative Sleep & Music Enhancement",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Dual GABAB Agonist + α2δ Voltage-Gated Calcium Channel Blocker (~4x Baclofen VDCC Potency)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Phenibut",
      "source": "PubChem CID 4725",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/4725"
    }
  },
  {
    "id": "f-phenibut",
    "name": "F-Phenibut (Fluorophenibut · 4-Fluorophenibut · Baclofen Homolog)",
    "shortName": "F-Phenibut",
    "synonyms": [
      "Fluorophenibut",
      "4F-Phenibut"
    ],
    "classification": "Gabapentinoid & GABAergic",
    "riskTier": "High",
    "pubchemCid": 13783680,
    "molecularFormula": "C10H12FNO2",
    "molecularWeight": 197.21,
    "canonicalSmiles": "C1=CC(=CC=C1F)C(CC(=O)O)CN",
    "xLogP": 1.3,
    "cb1KiNm": 150,
    "cb2KiNm": 0,
    "cb1Efficacy": "High-Potency GABAB Agonist + α2δ Calcium Channel Blocker (~5–10x Phenibut Potency)",
    "cb2Efficacy": "para-Fluorinated Phenibut Analog",
    "relativePotencyVsD9": 2.5,
    "psychoactive": true,
    "alkylChainLength": "4-Amino-3-(4-fluorophenyl)butanoic acid",
    "cypEnzymes": [
      "Renal Excretion"
    ],
    "primaryMetabolite": "Unchanged Renal Excretion",
    "immunoassayCrossReactivityPct": 0,
    "terminalHalfLifeHours": 5,
    "inhaledOnsetMinutes": [
      15,
      30
    ],
    "inhaledDurationHours": [
      5,
      8
    ],
    "oralOnsetMinutes": [
      25,
      60
    ],
    "oralDurationHours": [
      6,
      10
    ],
    "baseOralThresholdMg": 25,
    "baseInhaledThresholdMg": 20,
    "radarProfile": {
      "cb1AffinityScore": 78,
      "euphoriaPotency": 85,
      "somaticSedation": 75,
      "anxiogenicRisk": 14,
      "durationPersistence": 55,
      "lipidRetention": 24
    },
    "summary": "para-Fluorinated analog of phenibut (~5–10x more potent than standard phenibut; threshold 25 mg; standard dose 100–200 mg). Kicks in significantly faster (30–60 minutes vs 2–3 hours) with a more baclofen-like muscle relaxant feel.",
    "pharmacologyNotes": "Short 6–10 hour duration.",
    "specificHazards": [
      "Fast tolerance build-up; withdrawal on abrupt cessation."
    ],
    "sideEffects": [
      {
        "effect": "Fast 45-Minute Onset, Muscular Ease & Anxiolytic Warmth",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "High-Potency GABAB Agonist + α2δ Calcium Channel Blocker (~5–10x Phenibut Potency)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · F-Phenibut",
      "source": "PubChem CID 13783680",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/13783680"
    }
  },
  {
    "id": "tolibut",
    "name": "Tolibut (4-Methylphenibut)",
    "shortName": "Tolibut",
    "synonyms": [
      "Methylphenibut"
    ],
    "classification": "Gabapentinoid & GABAergic",
    "riskTier": "Moderate",
    "pubchemCid": 13783681,
    "molecularFormula": "C11H15NO2",
    "molecularWeight": 193.24,
    "canonicalSmiles": "CC1=CC=C(C=C1)C(CC(=O)O)CN",
    "xLogP": 1.5,
    "cb1KiNm": 450,
    "cb2KiNm": 0,
    "cb1Efficacy": "Dual α2δ Calcium Channel Blocker & GABAB Modulator (~2x Phenibut Potency)",
    "cb2Efficacy": "para-Methyl Phenibut Analog",
    "relativePotencyVsD9": 1.5,
    "psychoactive": true,
    "alkylChainLength": "4-Amino-3-(4-methylphenyl)butanoic acid",
    "cypEnzymes": [
      "Renal Excretion"
    ],
    "primaryMetabolite": "Direct Renal Excretion",
    "immunoassayCrossReactivityPct": 0,
    "terminalHalfLifeHours": 5,
    "inhaledOnsetMinutes": [
      20,
      45
    ],
    "inhaledDurationHours": [
      6,
      10
    ],
    "oralOnsetMinutes": [
      45,
      90
    ],
    "oralDurationHours": [
      8,
      14
    ],
    "baseOralThresholdMg": 100,
    "baseInhaledThresholdMg": 75,
    "radarProfile": {
      "cb1AffinityScore": 65,
      "euphoriaPotency": 78,
      "somaticSedation": 68,
      "anxiogenicRisk": 10,
      "durationPersistence": 65,
      "lipidRetention": 26
    },
    "summary": "para-Methylated analog of phenibut evaluated in Russia (~2x potency of phenibut; threshold 100 mg; standard dose 250–500 mg). Acts with a smoother, slightly more relaxing and analgesic profile than parent phenibut.",
    "pharmacologyNotes": "Renal excretion.",
    "specificHazards": [
      "Physical dependence with daily use."
    ],
    "sideEffects": [
      {
        "effect": "Relaxed Physical Ease & Pro-Social Warmth",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Dual α2δ Calcium Channel Blocker & GABAB Modulator (~2x Phenibut Potency)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Tolibut",
      "source": "PubChem CID 13783681",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/13783681"
    }
  },
  {
    "id": "picamilon",
    "name": "Picamilon (Pikamilon · Nicotinoyl-GABA Prodrug)",
    "shortName": "Picamilon",
    "synonyms": [
      "Pikamilon",
      "Nicotinoyl-GABA"
    ],
    "classification": "Gabapentinoid & GABAergic",
    "riskTier": "Low",
    "pubchemCid": 68761,
    "molecularFormula": "C10H12N2O3",
    "molecularWeight": 208.21,
    "canonicalSmiles": "C1=CC(=CN=C1)C(=O)NCCCC(=O)O",
    "xLogP": 0.6,
    "cb1KiNm": 5000,
    "cb2KiNm": 0,
    "cb1Efficacy": "Cerebrovascular Vasodilator + GABA Prodrug (Hydrolyzed in Brain to GABA + Niacin)",
    "cb2Efficacy": "Niacin-Conjugated GABA Nootropic",
    "relativePotencyVsD9": 0.2,
    "psychoactive": true,
    "alkylChainLength": "4-[(Pyridine-3-carbonyl)amino]butanoic acid",
    "cypEnzymes": [
      "Brain Amidase Enzymes"
    ],
    "primaryMetabolite": "GABA & Nicotinic Acid (Niacin / Vitamin B3)",
    "immunoassayCrossReactivityPct": 0,
    "terminalHalfLifeHours": 1.5,
    "inhaledOnsetMinutes": [
      15,
      30
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
      5
    ],
    "baseOralThresholdMg": 50,
    "baseInhaledThresholdMg": 50,
    "radarProfile": {
      "cb1AffinityScore": 30,
      "euphoriaPotency": 42,
      "somaticSedation": 15,
      "anxiogenicRisk": 6,
      "durationPersistence": 25,
      "lipidRetention": 12
    },
    "summary": "Synthesized in the Soviet Union in 1969 by attaching niacin (vitamin B3) to GABA. Enables GABA to cross the blood-brain barrier via niacin transporters, where enzymes cleave it into free GABA and niacin, improving cerebral blood flow and producing clean, alert anxiolysis.",
    "pharmacologyNotes": "Zero addiction, tolerance, or sedation.",
    "specificHazards": [
      "Mild flushing from niacin release at very high doses."
    ],
    "sideEffects": [
      {
        "effect": "Clean Alert Anxiolysis & Enhanced Cerebral Blood Flow",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Cerebrovascular Vasodilator + GABA Prodrug (Hydrolyzed in Brain to GABA + Niacin)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Picamilon",
      "source": "PubChem CID 68761",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/68761"
    }
  },
  {
    "id": "baclofen",
    "name": "Baclofen (Lioresal · Kemstro · Selective GABAB Agonist)",
    "shortName": "Baclofen",
    "synonyms": [
      "Lioresal",
      "Gablofen",
      "Kemstro"
    ],
    "classification": "Gabapentinoid & GABAergic",
    "riskTier": "High",
    "pubchemCid": 2284,
    "molecularFormula": "C10H12ClNO2",
    "molecularWeight": 213.66,
    "canonicalSmiles": "C1=CC(=CC=C1Cl)C(CC(=O)O)CN",
    "xLogP": 1.3,
    "cb1KiNm": 130,
    "cb2KiNm": 0,
    "cb1Efficacy": "Archetypal Selective GABAB Receptor Full Agonist (Spasticity & Alcohol Dependence)",
    "cb2Efficacy": "para-Chlorinated Phenibut Analog",
    "relativePotencyVsD9": 3,
    "psychoactive": true,
    "alkylChainLength": "4-Amino-3-(4-chlorophenyl)butanoic acid",
    "cypEnzymes": [
      "Renal Excretion (>85% Unchanged)"
    ],
    "primaryMetabolite": "Direct Renal Excretion",
    "immunoassayCrossReactivityPct": 0,
    "terminalHalfLifeHours": 3.5,
    "inhaledOnsetMinutes": [
      15,
      30
    ],
    "inhaledDurationHours": [
      4,
      6
    ],
    "oralOnsetMinutes": [
      25,
      60
    ],
    "oralDurationHours": [
      5,
      8
    ],
    "baseOralThresholdMg": 5,
    "baseInhaledThresholdMg": 5,
    "radarProfile": {
      "cb1AffinityScore": 68,
      "euphoriaPotency": 72,
      "somaticSedation": 86,
      "anxiogenicRisk": 10,
      "durationPersistence": 42,
      "lipidRetention": 22
    },
    "summary": "para-Chloro derivative of phenibut (Lioresal). The chlorine atom increases GABAB receptor affinity ~100-fold over phenibut (threshold 5 mg; clinical dose 10–25 mg) while drastically reducing α2δ calcium channel binding, making it the archetypal clinical GABAB muscle relaxant.",
    "pharmacologyNotes": "Rapidly suppresses alcohol cravings in addicted individuals.",
    "specificHazards": [
      "DANGEROUS GABAB WITHDRAWAL: Abrupt cessation after high-dose use causes life-threatening hyperthermia, seizures, and visual delirium."
    ],
    "sideEffects": [
      {
        "effect": "Deep Muscle Slackness, Craving Suppression & Sedation",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Archetypal Selective GABAB Receptor Full Agonist (Spasticity & Alcohol Dependence)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Baclofen",
      "source": "PubChem CID 2284",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/2284"
    }
  },
  {
    "id": "ghb",
    "name": "GHB (gamma-Hydroxybutyrate · Xyrem · G · Liquid Ecstasy)",
    "shortName": "GHB (gamma-Hydroxybutyrate)",
    "synonyms": [
      "Xyrem",
      "Liquid Ecstasy",
      "G",
      "Georgia Home Boy",
      "Liquid X"
    ],
    "classification": "Gabapentinoid & GABAergic",
    "riskTier": "Extreme",
    "pubchemCid": 3037032,
    "molecularFormula": "C4H8O3",
    "molecularWeight": 104.1,
    "canonicalSmiles": "C(CC(=O)O)CO",
    "xLogP": -0.8,
    "cb1KiNm": 12000,
    "cb2KiNm": 0,
    "cb1Efficacy": "Dual Endogenous GHB Receptor Agonist + Low-Affinity GABAB Receptor Agonist",
    "cb2Efficacy": "Endogenous Neurotransmitter / Fast Depressant",
    "relativePotencyVsD9": 2,
    "psychoactive": true,
    "alkylChainLength": "4-Hydroxybutanoic acid",
    "cypEnzymes": [
      "Alcohol Dehydrogenase",
      "Succinic Semialdehyde Dehydrogenase"
    ],
    "primaryMetabolite": "Succinic Acid → Krebs Cycle (CO2 + H2O)",
    "immunoassayCrossReactivityPct": 0,
    "terminalHalfLifeHours": 0.75,
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
    "baseOralThresholdMg": 500,
    "baseInhaledThresholdMg": 500,
    "radarProfile": {
      "cb1AffinityScore": 82,
      "euphoriaPotency": 96,
      "somaticSedation": 96,
      "anxiogenicRisk": 12,
      "durationPersistence": 18,
      "lipidRetention": 8
    },
    "summary": "Endogenous human neurotransmitter and FDA-approved narcolepsy medication (Xyrem). At low doses (0.5–1.5 g) activates high-affinity GHB receptors, releasing dopamine and producing intense pro-social, musical, and aphrodisiac euphoria; at higher doses (2–4 g), activates GABAB receptors, inducing deep, sudden coma-like sleep.",
    "pharmacologyNotes": "Rapid clearance (t½ ~40 min); completely metabolized into CO2 and water.",
    "specificHazards": [
      "EXTREME OVERDOSE & G-OUT HAZARD: Milliliter precision required. A dose 20% too high instantly triggers complete unconsciousness, vomiting, and respiratory arrest (\"G-Out\"). Never mix with alcohol!"
    ],
    "sideEffects": [
      {
        "effect": "Explosive Euphoric Warmth, Extreme Libido, Music Bliss & Sudden \"G-Out\" Coma",
        "system": "Pulmonary",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "Dual Endogenous GHB Receptor Agonist + Low-Affinity GABAB Receptor Agonist"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · GHB (gamma-Hydroxybutyrate)",
      "source": "PubChem CID 3037032",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/3037032"
    }
  },
  {
    "id": "gbl",
    "name": "GBL (gamma-Butyrolactone · Rapid Industrial GHB Prodrug)",
    "shortName": "GBL (gamma-Butyrolactone)",
    "synonyms": [
      "GBL",
      "Butyrolactone"
    ],
    "classification": "Gabapentinoid & GABAergic",
    "riskTier": "Extreme",
    "pubchemCid": 7302,
    "molecularFormula": "C4H6O2",
    "molecularWeight": 86.09,
    "canonicalSmiles": "C1CC(=O)OC1",
    "xLogP": -0.2,
    "cb1KiNm": 10000,
    "cb2KiNm": 0,
    "cb1Efficacy": "Lipophilic Lactone Prodrug (Instantaneously Cleaved by Blood Lactonase to GHB)",
    "cb2Efficacy": "Endogenous Lactonase-Cleaved Solvent Prodrug",
    "relativePotencyVsD9": 2.5,
    "psychoactive": true,
    "alkylChainLength": "Dihydrofuran-2(3H)-one",
    "cypEnzymes": [
      "Blood Paraoxonase / Serum Lactonase"
    ],
    "primaryMetabolite": "GHB (100% Bioavailability within Minutes)",
    "immunoassayCrossReactivityPct": 0,
    "terminalHalfLifeHours": 0.8,
    "inhaledOnsetMinutes": [
      5,
      12
    ],
    "inhaledDurationHours": [
      1.5,
      2.5
    ],
    "oralOnsetMinutes": [
      10,
      20
    ],
    "oralDurationHours": [
      2,
      3
    ],
    "baseOralThresholdMg": 350,
    "baseInhaledThresholdMg": 350,
    "radarProfile": {
      "cb1AffinityScore": 85,
      "euphoriaPotency": 98,
      "somaticSedation": 98,
      "anxiogenicRisk": 15,
      "durationPersistence": 18,
      "lipidRetention": 12
    },
    "summary": "Cyclic lactone solvent and direct prodrug to GHB. Because it is uncharged and lipophilic, GBL absorbs dramatically faster through the stomach than GHB, where serum lactonase enzymes convert 100% of it into GHB within 60 seconds of entering the bloodstream.",
    "pharmacologyNotes": "Roughly 1.6x more potent by volume than pure GHB (~1 mL GBL ≈ 1.6 g GHB).",
    "specificHazards": [
      "HIGHLY CAUSTIC & INSTANT G-OUT: Burns the throat/stomach unless diluted in at least 250 mL of water; hits within 10 minutes and causes sudden coma if mismeasured."
    ],
    "sideEffects": [
      {
        "effect": "Fast 10-Minute Euphoric Rush, Heavy Libido & Sudden Knockout",
        "system": "Pulmonary",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "Lipophilic Lactone Prodrug (Instantaneously Cleaved by Blood Lactonase to GHB)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · GBL (gamma-Butyrolactone)",
      "source": "PubChem CID 7302",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/7302"
    }
  },
  {
    "id": "1-4-bdo",
    "name": "1,4-BDO (1,4-Butanediol · Two-Step Hepatic GHB Prodrug)",
    "shortName": "1,4-BDO (1,4-Butanediol)",
    "synonyms": [
      "1,4-Butanediol",
      "BDO",
      "Liquid Gold"
    ],
    "classification": "Gabapentinoid & GABAergic",
    "riskTier": "Extreme",
    "pubchemCid": 8064,
    "molecularFormula": "C4H10O2",
    "molecularWeight": 90.12,
    "canonicalSmiles": "C(CCO)CO",
    "xLogP": -0.6,
    "cb1KiNm": 9000,
    "cb2KiNm": 0,
    "cb1Efficacy": "Two-Step Enzymatic Prodrug (Alcohol Dehydrogenase → Aldehyde Dehydrogenase → GHB)",
    "cb2Efficacy": "Glycol Industrial GHB Prodrug",
    "relativePotencyVsD9": 2,
    "psychoactive": true,
    "alkylChainLength": "Butane-1,4-diol",
    "cypEnzymes": [
      "Alcohol Dehydrogenase (ADH)",
      "Aldehyde Dehydrogenase (ALDH)"
    ],
    "primaryMetabolite": "gamma-Hydroxybutyraldehyde → GHB",
    "immunoassayCrossReactivityPct": 0,
    "terminalHalfLifeHours": 1.5,
    "inhaledOnsetMinutes": [
      15,
      30
    ],
    "inhaledDurationHours": [
      2.5,
      4
    ],
    "oralOnsetMinutes": [
      25,
      60
    ],
    "oralDurationHours": [
      3,
      5
    ],
    "baseOralThresholdMg": 500,
    "baseInhaledThresholdMg": 500,
    "radarProfile": {
      "cb1AffinityScore": 80,
      "euphoriaPotency": 92,
      "somaticSedation": 96,
      "anxiogenicRisk": 14,
      "durationPersistence": 28,
      "lipidRetention": 14
    },
    "summary": "Industrial diol solvent that acts as a two-step enzymatic prodrug to GHB. Liver alcohol dehydrogenase (ADH) oxidizes it to gamma-hydroxybutyraldehyde, which aldehyde dehydrogenase (ALDH) rapidly converts to GHB.",
    "pharmacologyNotes": "Competes directly with alcohol for ADH enzymes.",
    "specificHazards": [
      "LETHAL ALCOHOL COMPETITION: Co-ingesting even tiny amounts of alcohol completely blocks 1,4-BDO metabolism; once the alcohol clears hours later, the entire accumulated BDO suddenly converts to GHB, causing fatal delayed coma."
    ],
    "sideEffects": [
      {
        "effect": "Warm 4-Hour GHB-Like Euphoria & Toxic Alcohol Enzyme Blockade",
        "system": "Pulmonary",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "Two-Step Enzymatic Prodrug (Alcohol Dehydrogenase → Aldehyde Dehydrogenase → GHB)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · 1,4-BDO (1,4-Butanediol)",
      "source": "PubChem CID 8064",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/8064"
    }
  },
  {
    "id": "alcohol",
    "name": "Alcohol (Ethanol · Ethyl Alcohol)",
    "shortName": "Alcohol (Ethanol)",
    "synonyms": [
      "Ethanol",
      "Drinking Alcohol",
      "Booze"
    ],
    "classification": "Gabapentinoid & GABAergic",
    "riskTier": "High",
    "pubchemCid": 702,
    "molecularFormula": "C2H6O",
    "molecularWeight": 46.07,
    "canonicalSmiles": "CCO",
    "xLogP": -0.3,
    "cb1KiNm": 20000,
    "cb2KiNm": 0,
    "cb1Efficacy": "Non-Selective GABAA PAM + NMDA Receptor Antagonist + Glycine / 5-HT3 Modulator",
    "cb2Efficacy": "Archetypal Social Beverage Depressant",
    "relativePotencyVsD9": 0.2,
    "psychoactive": true,
    "alkylChainLength": "Ethanol",
    "cypEnzymes": [
      "Alcohol Dehydrogenase (ADH)",
      "CYP2E1",
      "ALDH2"
    ],
    "primaryMetabolite": "Acetaldehyde (Toxic Carcinogen) → Acetate",
    "immunoassayCrossReactivityPct": 0,
    "terminalHalfLifeHours": 0.25,
    "inhaledOnsetMinutes": [
      5,
      15
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
      2,
      4
    ],
    "baseOralThresholdMg": 3000,
    "baseInhaledThresholdMg": 3000,
    "radarProfile": {
      "cb1AffinityScore": 60,
      "euphoriaPotency": 78,
      "somaticSedation": 80,
      "anxiogenicRisk": 22,
      "durationPersistence": 22,
      "lipidRetention": 10
    },
    "summary": "The world’s most widely consumed psychoactive substance. Exhibits multi-target pharmacology: enhances GABAA inhibitory currents, potently inhibits NMDA glutamate receptors (causing amnesia and drunkenness), and modulates dopamine in the nucleus accumbens.",
    "pharmacologyNotes": "Elimination follows zero-order kinetics (~7–10 grams of pure ethanol cleared per hour).",
    "specificHazards": [
      "ACUTE TOXICITY & LETHAL SYNERGY: Synergizes lethally with opioids, benzos, and GHB. Chronic use causes liver cirrhosis, acetaldehyde-mediated neurotoxicity, and fatal delirium tremens."
    ],
    "sideEffects": [
      {
        "effect": "Social Disinhibition, Motor Incoordination, Amnesia & Next-Day Hangover",
        "system": "Gastrointestinal",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Non-Selective GABAA PAM + NMDA Receptor Antagonist + Glycine / 5-HT3 Modulator"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Alcohol (Ethanol)",
      "source": "PubChem CID 702",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/702"
    }
  },
  {
    "id": "secobarbital",
    "name": "Secobarbital (Seconal · Red Devils · Short-Acting Barbiturate)",
    "shortName": "Secobarbital",
    "synonyms": [
      "Seconal",
      "Red Devils",
      "Seco"
    ],
    "classification": "Barbiturate & Non-Barb Sedative",
    "riskTier": "Extreme",
    "pubchemCid": 5193,
    "molecularFormula": "C12H18N2O3",
    "molecularWeight": 238.28,
    "canonicalSmiles": "CCCC(C)C1(C(=O)NC(=O)NC1=O)CC=C",
    "xLogP": 2,
    "cb1KiNm": 8,
    "cb2KiNm": 0,
    "cb1Efficacy": "Direct GABAA Receptor Agonist & Allosteric Modulator (Opens Cl- Channels Directly Without GABA)",
    "cb2Efficacy": "Archetypal Short-Acting Barbiturate Hypnotic",
    "relativePotencyVsD9": 2,
    "psychoactive": true,
    "alkylChainLength": "5-(Pent-2-yl)-5-prop-2-enyl-1,3-diazinane-2,4,6-trione",
    "cypEnzymes": [
      "CYP2C9",
      "CYP2C19",
      "CYP3A4 (Potent Inducer)"
    ],
    "primaryMetabolite": "Hydroxylated secobarbital metabolites",
    "immunoassayCrossReactivityPct": 0,
    "terminalHalfLifeHours": 28,
    "inhaledOnsetMinutes": [
      15,
      30
    ],
    "inhaledDurationHours": [
      4,
      7
    ],
    "oralOnsetMinutes": [
      20,
      45
    ],
    "oralDurationHours": [
      5,
      9
    ],
    "baseOralThresholdMg": 30,
    "baseInhaledThresholdMg": 30,
    "radarProfile": {
      "cb1AffinityScore": 75,
      "euphoriaPotency": 92,
      "somaticSedation": 98,
      "anxiogenicRisk": 14,
      "durationPersistence": 58,
      "lipidRetention": 28
    },
    "summary": "Legendary short-acting barbiturate (Seconal / \"Red Devils\"). Unlike benzodiazepines which require endogenous GABA to open chloride channels, barbiturates directly lock GABAA chloride channels open at higher doses, conferring a terrifyingly narrow therapeutic index.",
    "pharmacologyNotes": "Induces hepatic CYP enzymes massively.",
    "specificHazards": [
      "EXTREME LETHALITY & NARROW THERAPEUTIC INDEX: Overdose margin is tiny; fatal respiratory arrest and cardiovascular collapse occur easily, especially with alcohol."
    ],
    "sideEffects": [
      {
        "effect": "Intense Drunken Euphoria, Heavy Motor Slurring & Fatal Respiratory Arrest",
        "system": "Pulmonary",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "Direct GABAA Receptor Agonist & Allosteric Modulator (Opens Cl- Channels Directly Without GABA)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Secobarbital",
      "source": "PubChem CID 5193",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/5193"
    }
  },
  {
    "id": "pentobarbital",
    "name": "Pentobarbital (Nembutal · Yellow Jackets · Intermediate Barbiturate)",
    "shortName": "Pentobarbital",
    "synonyms": [
      "Nembutal",
      "Yellow Jackets"
    ],
    "classification": "Barbiturate & Non-Barb Sedative",
    "riskTier": "Extreme",
    "pubchemCid": 4737,
    "molecularFormula": "C11H18N2O3",
    "molecularWeight": 226.27,
    "canonicalSmiles": "CCCC(C)C1(C(=O)NC(=O)NC1=O)CC",
    "xLogP": 2.1,
    "cb1KiNm": 7.5,
    "cb2KiNm": 0,
    "cb1Efficacy": "GABAA Receptor Direct Agonist & AMPA/Kainate Glutamate Receptor Antagonist",
    "cb2Efficacy": "Intermediate Barbiturate Anesthetic",
    "relativePotencyVsD9": 2,
    "psychoactive": true,
    "alkylChainLength": "5-Ethyl-5-(pent-2-yl)-1,3-diazinane-2,4,6-trione",
    "cypEnzymes": [
      "CYP2C19",
      "CYP3A4"
    ],
    "primaryMetabolite": "3-Hydroxypentobarbital",
    "immunoassayCrossReactivityPct": 0,
    "terminalHalfLifeHours": 25,
    "inhaledOnsetMinutes": [
      15,
      30
    ],
    "inhaledDurationHours": [
      5,
      8
    ],
    "oralOnsetMinutes": [
      20,
      45
    ],
    "oralDurationHours": [
      6,
      10
    ],
    "baseOralThresholdMg": 30,
    "baseInhaledThresholdMg": 30,
    "radarProfile": {
      "cb1AffinityScore": 78,
      "euphoriaPotency": 90,
      "somaticSedation": 99,
      "anxiogenicRisk": 14,
      "durationPersistence": 62,
      "lipidRetention": 28
    },
    "summary": "Intermediate-acting barbiturate (Nembutal / \"Yellow Jackets\"). Blocks excitatory AMPA/kainate glutamate receptors while directly opening inhibitory GABAA chloride channels, used clinically for lethal injection protocols and physician-assisted dying.",
    "pharmacologyNotes": "Potent enzyme inducer.",
    "specificHazards": [
      "EXTREME OVERDOSE HAZARD: No reversal agent exists (flumazenil does not work against barbiturates). Overdose requires mechanical life support."
    ],
    "sideEffects": [
      {
        "effect": "Profound Hypnotic Coma, Medullary Depression & Apnea",
        "system": "Pulmonary",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "GABAA Receptor Direct Agonist & AMPA/Kainate Glutamate Receptor Antagonist"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Pentobarbital",
      "source": "PubChem CID 4737",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/4737"
    }
  },
  {
    "id": "phenobarbital",
    "name": "Phenobarbital (Luminal · Gardenal · Long-Acting Anticonvulsant Barbiturate)",
    "shortName": "Phenobarbital",
    "synonyms": [
      "Luminal",
      "Gardenal",
      "Lepinal"
    ],
    "classification": "Barbiturate & Non-Barb Sedative",
    "riskTier": "High",
    "pubchemCid": 4749,
    "molecularFormula": "C12H12N2O3",
    "molecularWeight": 232.23,
    "canonicalSmiles": "CCC1(C(=O)NC(=O)NC1=O)C2=CC=CC=C2",
    "xLogP": 1.5,
    "cb1KiNm": 25,
    "cb2KiNm": 0,
    "cb1Efficacy": "Long-Acting GABAA PAM & Anticonvulsant (Massive CYP450 Inducer; t½ ~75–120 Hours)",
    "cb2Efficacy": "Archetypal Long-Acting Phenylbarbiturate",
    "relativePotencyVsD9": 0.6,
    "psychoactive": true,
    "alkylChainLength": "5-Ethyl-5-phenyl-1,3-diazinane-2,4,6-trione",
    "cypEnzymes": [
      "CYP2C9",
      "CYP2C19"
    ],
    "primaryMetabolite": "p-Hydroxyphenobarbital",
    "immunoassayCrossReactivityPct": 0,
    "terminalHalfLifeHours": 100,
    "inhaledOnsetMinutes": [
      45,
      90
    ],
    "inhaledDurationHours": [
      14,
      24
    ],
    "oralOnsetMinutes": [
      60,
      150
    ],
    "oralDurationHours": [
      18,
      48
    ],
    "baseOralThresholdMg": 30,
    "baseInhaledThresholdMg": 30,
    "radarProfile": {
      "cb1AffinityScore": 50,
      "euphoriaPotency": 52,
      "somaticSedation": 85,
      "anxiogenicRisk": 10,
      "durationPersistence": 98,
      "lipidRetention": 26
    },
    "summary": "Oldest continuously prescribed anticonvulsant (synthesized 1912; Luminal). Possesses an enormous 75–120 hour elimination half-life and acts as one of the most potent chemical inducers of hepatic CYP450 enzymes known in pharmacology.",
    "pharmacologyNotes": "Used globally as first-line anti-seizure medication in low-income nations.",
    "specificHazards": [
      "MASSIVE DRUG-DRUG INTERACTIONS: Induces its own metabolism and drastically lowers blood levels of dozens of medications (anticoagulants, birth control, antiretrovirals)."
    ],
    "sideEffects": [
      {
        "effect": "All-Day Motor Sluggishness, Seizure Blockade & Sedation",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Long-Acting GABAA PAM & Anticonvulsant (Massive CYP450 Inducer; t½ ~75–120 Hours)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Phenobarbital",
      "source": "PubChem CID 4749",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/4749"
    }
  },
  {
    "id": "amobarbital",
    "name": "Amobarbital (Amytal · Blue Heavens · Truth Serum Barbiturate)",
    "shortName": "Amobarbital",
    "synonyms": [
      "Amytal",
      "Blue Heavens",
      "Blue Birds",
      "Truth Serum"
    ],
    "classification": "Barbiturate & Non-Barb Sedative",
    "riskTier": "High",
    "pubchemCid": 2164,
    "molecularFormula": "C11H18N2O3",
    "molecularWeight": 226.27,
    "canonicalSmiles": "CCC1(C(=O)NC(=O)NC1=O)CCC(C)C",
    "xLogP": 2.1,
    "cb1KiNm": 10,
    "cb2KiNm": 0,
    "cb1Efficacy": "Intermediate-Acting Barbiturate GABAA Direct Agonist & PAM (\"Truth Serum\")",
    "cb2Efficacy": "Isoamyl Barbiturate Anesthetic",
    "relativePotencyVsD9": 1.8,
    "psychoactive": true,
    "alkylChainLength": "5-Ethyl-5-(3-methylbutyl)-1,3-diazinane-2,4,6-trione",
    "cypEnzymes": [
      "CYP2C19",
      "CYP3A4"
    ],
    "primaryMetabolite": "3'-Hydroxyamobarbital",
    "immunoassayCrossReactivityPct": 0,
    "terminalHalfLifeHours": 20,
    "inhaledOnsetMinutes": [
      15,
      30
    ],
    "inhaledDurationHours": [
      5,
      8
    ],
    "oralOnsetMinutes": [
      20,
      45
    ],
    "oralDurationHours": [
      6,
      10
    ],
    "baseOralThresholdMg": 30,
    "baseInhaledThresholdMg": 30,
    "radarProfile": {
      "cb1AffinityScore": 72,
      "euphoriaPotency": 88,
      "somaticSedation": 94,
      "anxiogenicRisk": 12,
      "durationPersistence": 60,
      "lipidRetention": 28
    },
    "summary": "Intermediate-acting barbiturate (Amytal / \"Blue Heavens\"). Historically famous as the primary drug used in psychiatric \"narcoanalysis\" (\"truth serum\") and the Wada test because it temporarily disables conscious inhibitions and deceptive faculties.",
    "pharmacologyNotes": "Compounded with secobarbital in Tuinal.",
    "specificHazards": [
      "Overdose causes fatal medullary respiratory arrest; high addiction liability."
    ],
    "sideEffects": [
      {
        "effect": "Total Psychological Disinhibition, Warmth & \"Truth Serum\" Flow",
        "system": "Psychiatric",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Intermediate-Acting Barbiturate GABAA Direct Agonist & PAM (\"Truth Serum\")"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Amobarbital",
      "source": "PubChem CID 2164",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/2164"
    }
  },
  {
    "id": "butalbital",
    "name": "Butalbital (Fioricet · Fiorinal · Headache Barbiturate)",
    "shortName": "Butalbital",
    "synonyms": [
      "Fioricet",
      "Fiorinal",
      "Sandoptal"
    ],
    "classification": "Barbiturate & Non-Barb Sedative",
    "riskTier": "High",
    "pubchemCid": 2479,
    "molecularFormula": "C11H16N2O3",
    "molecularWeight": 224.26,
    "canonicalSmiles": "CC(C)CC1(C(=O)NC(=O)NC1=O)CC=C",
    "xLogP": 1.6,
    "cb1KiNm": 15,
    "cb2KiNm": 0,
    "cb1Efficacy": "Intermediate GABAA Modulator (Compounded with Acetaminophen/Aspirin & Caffeine for Migraines)",
    "cb2Efficacy": "Isobutyl-Allyl Barbiturate",
    "relativePotencyVsD9": 1.2,
    "psychoactive": true,
    "alkylChainLength": "5-(2-Methylpropyl)-5-prop-2-enyl-1,3-diazinane-2,4,6-trione",
    "cypEnzymes": [
      "CYP2C19",
      "CYP3A4"
    ],
    "primaryMetabolite": "Norbutalbital & Hydroxybutalbital",
    "immunoassayCrossReactivityPct": 0,
    "terminalHalfLifeHours": 35,
    "inhaledOnsetMinutes": [
      20,
      40
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
    "baseOralThresholdMg": 25,
    "baseInhaledThresholdMg": 25,
    "radarProfile": {
      "cb1AffinityScore": 62,
      "euphoriaPotency": 74,
      "somaticSedation": 82,
      "anxiogenicRisk": 10,
      "durationPersistence": 65,
      "lipidRetention": 24
    },
    "summary": "Intermediate barbiturate widely prescribed in North America compounded with acetaminophen/caffeine (Fioricet) or aspirin (Fiorinal) for tension headaches and refractory migraines.",
    "pharmacologyNotes": "Elimination half-life ~35 hours.",
    "specificHazards": [
      "REBOUND HEADACHE & ACETAMINOPHEN TOXICITY: Taking extra Fioricet capsules risks acute liver failure from the acetaminophen component and severe rebound headaches."
    ],
    "sideEffects": [
      {
        "effect": "Tension Headache Dissolution, Sedation & Acetaminophen Risk",
        "system": "Gastrointestinal",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Intermediate GABAA Modulator (Compounded with Acetaminophen/Aspirin & Caffeine for Migraines)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Butalbital",
      "source": "PubChem CID 2479",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/2479"
    }
  },
  {
    "id": "thiopental",
    "name": "Thiopental (Pentothal · Ultra-Short Thiobarbiturate Anesthetic)",
    "shortName": "Thiopental",
    "synonyms": [
      "Sodium Pentothal",
      "Trapanal",
      "Nesdonal"
    ],
    "classification": "Barbiturate & Non-Barb Sedative",
    "riskTier": "Extreme",
    "pubchemCid": 23665711,
    "molecularFormula": "C11H18N2O2S",
    "molecularWeight": 242.34,
    "canonicalSmiles": "CCCC(C)C1(C(=O)NC(=S)NC1=O)CC",
    "xLogP": 2.8,
    "cb1KiNm": 4,
    "cb2KiNm": 0,
    "cb1Efficacy": "Ultra-Rapid Onset Thiobarbiturate GABAA Direct Agonist (Clears via Brain Redistribution)",
    "cb2Efficacy": "Lipophilic Sulfur-Substituted Thiobarbiturate",
    "relativePotencyVsD9": 2.5,
    "psychoactive": true,
    "alkylChainLength": "5-Ethyl-5-(pent-2-yl)-2-sulfanylidene-1,3-diazinane-4,6-dione",
    "cypEnzymes": [
      "CYP2B6",
      "CYP2C19",
      "CYP3A4"
    ],
    "primaryMetabolite": "Pentobarbital (Minor) & Hydroxythiopental",
    "immunoassayCrossReactivityPct": 0,
    "terminalHalfLifeHours": 11,
    "inhaledOnsetMinutes": [
      0.2,
      0.5
    ],
    "inhaledDurationHours": [
      0.15,
      0.35
    ],
    "oralOnsetMinutes": [
      10,
      20
    ],
    "oralDurationHours": [
      1,
      3
    ],
    "baseOralThresholdMg": 25,
    "baseInhaledThresholdMg": 25,
    "radarProfile": {
      "cb1AffinityScore": 85,
      "euphoriaPotency": 85,
      "somaticSedation": 100,
      "anxiogenicRisk": 15,
      "durationPersistence": 8,
      "lipidRetention": 42
    },
    "summary": "Sulfur-substituted analog of pentobarbital (Sodium Pentothal). Because sulfur replaces oxygen at C2, it crosses the blood-brain barrier within 20 seconds, knocking a patient unconscious on one arm-brain circulation cycle before redistributing into fat.",
    "pharmacologyNotes": "Historic lethal injection agent.",
    "specificHazards": [
      "Laryngospasm, profound respiratory arrest, and severe tissue necrosis if injected intra-arterially."
    ],
    "sideEffects": [
      {
        "effect": "20-Second Surgical Coma & Rapid Redistribution Offset",
        "system": "Pulmonary",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "Ultra-Rapid Onset Thiobarbiturate GABAA Direct Agonist (Clears via Brain Redistribution)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Thiopental",
      "source": "PubChem CID 23665711",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/23665711"
    }
  },
  {
    "id": "methaqualone",
    "name": "Methaqualone (Quaalude · Mandrax · 714 · Sopor)",
    "shortName": "Methaqualone",
    "synonyms": [
      "Quaalude",
      "Mandrax",
      "714",
      "Lemmon 714",
      "Sopor"
    ],
    "classification": "Barbiturate & Non-Barb Sedative",
    "riskTier": "Extreme",
    "pubchemCid": 4095,
    "molecularFormula": "C16H14N2O",
    "molecularWeight": 250.3,
    "canonicalSmiles": "CC1=CC=CC=C1N2C(=O)C3=CC=CC=C3N=C2C",
    "xLogP": 2.5,
    "cb1KiNm": 4,
    "cb2KiNm": 0,
    "cb1Efficacy": "Positive Allosteric Modulator at GABAA (Distinct β+α- Transmembrane Site) + KV Channel Blocker",
    "cb2Efficacy": "Archetypal Quinazolinone Hypnotic",
    "relativePotencyVsD9": 3,
    "psychoactive": true,
    "alkylChainLength": "2-Methyl-3-(2-methylphenyl)quinazolin-4-one",
    "cypEnzymes": [
      "CYP3A4",
      "CYP2C9"
    ],
    "primaryMetabolite": "Hydroxymethaqualone Metabolites",
    "immunoassayCrossReactivityPct": 0,
    "terminalHalfLifeHours": 40,
    "inhaledOnsetMinutes": [
      15,
      30
    ],
    "inhaledDurationHours": [
      4,
      7
    ],
    "oralOnsetMinutes": [
      20,
      45
    ],
    "oralDurationHours": [
      5,
      9
    ],
    "baseOralThresholdMg": 50,
    "baseInhaledThresholdMg": 50,
    "radarProfile": {
      "cb1AffinityScore": 82,
      "euphoriaPotency": 98,
      "somaticSedation": 94,
      "anxiogenicRisk": 10,
      "durationPersistence": 55,
      "lipidRetention": 34
    },
    "summary": "Legendary quinazolinone sedative-hypnotic synthesized in India in 1951 (Quaalude / Lemmon 714 / Mandrax). Binds to a unique pocket on the GABAA receptor, producing an unmistakable tingling numbness, intense aphrodisiac euphoria, and motor \"jelly legs\" that earned it near-mythical status.",
    "pharmacologyNotes": "Long 20–60 hour terminal half-life.",
    "specificHazards": [
      "Severe motor ataxia (\"jelly legs\"), respiratory depression with alcohol, and motor convulsions at overdose levels."
    ],
    "sideEffects": [
      {
        "effect": "Tingling Euphoric Warmth, \"Jelly Legs\" Motor Melt & Powerful Aphrodisia",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "Positive Allosteric Modulator at GABAA (Distinct β+α- Transmembrane Site) + KV Channel Blocker"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Methaqualone",
      "source": "PubChem CID 4095",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/4095"
    }
  },
  {
    "id": "carisoprodol",
    "name": "Carisoprodol (Soma · Sanoma · Isopropyl Meprobamate Prodrug)",
    "shortName": "Carisoprodol",
    "synonyms": [
      "Soma",
      "Sanoma",
      "Carisoma"
    ],
    "classification": "Barbiturate & Non-Barb Sedative",
    "riskTier": "High",
    "pubchemCid": 2576,
    "molecularFormula": "C12H24N2O4",
    "molecularWeight": 260.33,
    "canonicalSmiles": "CCCC(C)(COC(=O)N)COC(=O)NC(C)C",
    "xLogP": 2.1,
    "cb1KiNm": 8,
    "cb2KiNm": 0,
    "cb1Efficacy": "Direct GABAA Agonist / Modulator (Active In Vivo + Hydrolyzed to Meprobamate by CYP2C19)",
    "cb2Efficacy": "N-Isopropyl Dicarbamate Muscle Relaxant",
    "relativePotencyVsD9": 2,
    "psychoactive": true,
    "alkylChainLength": "[2-(Carbamoyloxymethyl)-2-methylpentyl] N-propan-2-ylcarbamate",
    "cypEnzymes": [
      "CYP2C19"
    ],
    "primaryMetabolite": "Meprobamate (Active; t½ ~10h)",
    "immunoassayCrossReactivityPct": 0,
    "terminalHalfLifeHours": 2,
    "inhaledOnsetMinutes": [
      15,
      30
    ],
    "inhaledDurationHours": [
      2.5,
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
    "baseOralThresholdMg": 150,
    "baseInhaledThresholdMg": 150,
    "radarProfile": {
      "cb1AffinityScore": 74,
      "euphoriaPotency": 88,
      "somaticSedation": 90,
      "anxiogenicRisk": 10,
      "durationPersistence": 36,
      "lipidRetention": 24
    },
    "summary": "Centrally acting muscle relaxant (Soma). Acts directly on GABAA receptors with barbiturate-like direct gating at high doses, and is rapidly metabolized in the liver via CYP2C19 into active meprobamate.",
    "pharmacologyNotes": "Produces a distinct bodily intoxication known on the street as the \"Soma Coma\".",
    "specificHazards": [
      "CYP2C19 poor metabolizers experience prolonged carisoprodol sedation; severe respiratory depression when combined with opioids (\"Holy Trinity\")."
    ],
    "sideEffects": [
      {
        "effect": "Loose Rubbery Muscles, Warm Body Stone & \"Soma Coma\"",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Direct GABAA Agonist / Modulator (Active In Vivo + Hydrolyzed to Meprobamate by CYP2C19)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Carisoprodol",
      "source": "PubChem CID 2576",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/2576"
    }
  },
  {
    "id": "meprobamate",
    "name": "Meprobamate (Miltown · Equanil · Archetypal Dicarbamate Tranquilizer)",
    "shortName": "Meprobamate",
    "synonyms": [
      "Miltown",
      "Equanil"
    ],
    "classification": "Barbiturate & Non-Barb Sedative",
    "riskTier": "High",
    "pubchemCid": 4064,
    "molecularFormula": "C9H18N2O4",
    "molecularWeight": 218.25,
    "canonicalSmiles": "CCCC(C)(COC(=O)N)COC(=O)N",
    "xLogP": 0.7,
    "cb1KiNm": 12,
    "cb2KiNm": 0,
    "cb1Efficacy": "GABAA Receptor Positive Allosteric Modulator & Direct Chloride Channel Activator",
    "cb2Efficacy": "Archetypal Dicarbamate Anxiolytic",
    "relativePotencyVsD9": 1,
    "psychoactive": true,
    "alkylChainLength": "[2-(Carbamoyloxymethyl)-2-methylpentyl] carbamate",
    "cypEnzymes": [
      "CYP2C19",
      "UGT"
    ],
    "primaryMetabolite": "Hydroxymeprobamate & Glucuronide Conjugates",
    "immunoassayCrossReactivityPct": 0,
    "terminalHalfLifeHours": 10,
    "inhaledOnsetMinutes": [
      25,
      50
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
      10
    ],
    "baseOralThresholdMg": 100,
    "baseInhaledThresholdMg": 100,
    "radarProfile": {
      "cb1AffinityScore": 65,
      "euphoriaPotency": 78,
      "somaticSedation": 85,
      "anxiogenicRisk": 10,
      "durationPersistence": 50,
      "lipidRetention": 18
    },
    "summary": "The world’s first blockbuster psychiatric minor tranquilizer (synthesized 1950; Miltown / Equanil). Replaced barbiturates in 1950s America, acting via GABAA chloride channel opening to provide calm muscle relaxation.",
    "pharmacologyNotes": "Elimination half-life ~10 hours.",
    "specificHazards": [
      "Significant physical dependence and life-threatening withdrawal convulsions with chronic use."
    ],
    "sideEffects": [
      {
        "effect": "1950s Tranquility, Muscle Softening & Daytime Composure",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "GABAA Receptor Positive Allosteric Modulator & Direct Chloride Channel Activator"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Meprobamate",
      "source": "PubChem CID 4064",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/4064"
    }
  },
  {
    "id": "chloral-hydrate",
    "name": "Chloral Hydrate (Noctec · Mickey Finn · Gem-Diol Sedative)",
    "shortName": "Chloral Hydrate",
    "synonyms": [
      "Noctec",
      "Mickey Finn",
      "Knockout Drops"
    ],
    "classification": "Barbiturate & Non-Barb Sedative",
    "riskTier": "High",
    "pubchemCid": 2707,
    "molecularFormula": "C2H3Cl3O2",
    "molecularWeight": 165.4,
    "canonicalSmiles": "C(C(Cl)(Cl)Cl)(O)O",
    "xLogP": 1,
    "cb1KiNm": 15,
    "cb2KiNm": 0,
    "cb1Efficacy": "GABAA Receptor Positive Modulator (Gem-Diol Rapidly Converted by ADH to Trichloroethanol)",
    "cb2Efficacy": "Historic Geminal Diol Sedative",
    "relativePotencyVsD9": 1,
    "psychoactive": true,
    "alkylChainLength": "2,2,2-Trichloroethane-1,1-diol",
    "cypEnzymes": [
      "Alcohol Dehydrogenase (ADH)"
    ],
    "primaryMetabolite": "Trichloroethanol (Active; t½ ~8h) & Trichloroacetic Acid",
    "immunoassayCrossReactivityPct": 0,
    "terminalHalfLifeHours": 8,
    "inhaledOnsetMinutes": [
      10,
      25
    ],
    "inhaledDurationHours": [
      4,
      7
    ],
    "oralOnsetMinutes": [
      15,
      35
    ],
    "oralDurationHours": [
      5,
      9
    ],
    "baseOralThresholdMg": 250,
    "baseInhaledThresholdMg": 250,
    "radarProfile": {
      "cb1AffinityScore": 65,
      "euphoriaPotency": 70,
      "somaticSedation": 96,
      "anxiogenicRisk": 10,
      "durationPersistence": 48,
      "lipidRetention": 16
    },
    "summary": "Historic geminal diol synthesized in 1832 (Noctec / \"Mickey Finn\" knockout drops). Rapidly reduced in the liver by alcohol dehydrogenase into trichloroethanol, which powerfully enhances GABAA currents to induce sleep within 20 minutes.",
    "pharmacologyNotes": "Caustic to stomach mucosa; distinct pungent chloral aroma.",
    "specificHazards": [
      "SEVERE CARDIAC ARRHYTHMIAS: Sensitizes myocardium to catecholamines, causing ventricular arrhythmias on overdose; caustic gastritis."
    ],
    "sideEffects": [
      {
        "effect": "Rapid 20-Minute Sleep Induction & Myocardial Sensitization Risk",
        "system": "Cardiovascular",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "GABAA Receptor Positive Modulator (Gem-Diol Rapidly Converted by ADH to Trichloroethanol)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Chloral Hydrate",
      "source": "PubChem CID 2707",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/2707"
    }
  },
  {
    "id": "clomethiazole",
    "name": "Clomethiazole (Heminevrin · Distraneurin · Thiazole Hypnotic)",
    "shortName": "Clomethiazole",
    "synonyms": [
      "Heminevrin",
      "Distraneurin"
    ],
    "classification": "Barbiturate & Non-Barb Sedative",
    "riskTier": "High",
    "pubchemCid": 2786,
    "molecularFormula": "C6H8ClNS",
    "molecularWeight": 161.65,
    "canonicalSmiles": "CC1=C(SC=N1)CCCl",
    "xLogP": 2.1,
    "cb1KiNm": 5,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent GABAA Receptor PAM (Binds at Unique Barbiturate-Adjacent Pocket; Alcohol Detox)",
    "cb2Efficacy": "Chloroethyl-Methylthiazole Hypnotic",
    "relativePotencyVsD9": 1.8,
    "psychoactive": true,
    "alkylChainLength": "4-Methyl-5-(2-chloroethyl)thiazole",
    "cypEnzymes": [
      "CYP2E1",
      "CYP2A6"
    ],
    "primaryMetabolite": "Hydroxylated Thiazole Metabolites",
    "immunoassayCrossReactivityPct": 0,
    "terminalHalfLifeHours": 4,
    "inhaledOnsetMinutes": [
      10,
      25
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
      3.5,
      6
    ],
    "baseOralThresholdMg": 100,
    "baseInhaledThresholdMg": 100,
    "radarProfile": {
      "cb1AffinityScore": 70,
      "euphoriaPotency": 82,
      "somaticSedation": 96,
      "anxiogenicRisk": 10,
      "durationPersistence": 30,
      "lipidRetention": 22
    },
    "summary": "Thiazole derivative related to vitamin B1 (Heminevrin). Binds to a unique site on the GABAA receptor, acting as a powerful anticonvulsant and hypnotic used across Europe for acute alcohol withdrawal delirium tremens.",
    "pharmacologyNotes": "Produces a characteristic nasal tingling/sneezing sensation upon onset.",
    "specificHazards": [
      "FATAL RESPIRATORY ARREST WITH ALCOHOL: High fatal overdose rate when mixed with alcohol due to bronchial hypersecretion and respiratory arrest."
    ],
    "sideEffects": [
      {
        "effect": "Nasal Tingling, Rapid Sleep Induction & Dangerous Alcohol Synergy",
        "system": "Pulmonary",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Potent GABAA Receptor PAM (Binds at Unique Barbiturate-Adjacent Pocket; Alcohol Detox)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Clomethiazole",
      "source": "PubChem CID 2786",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/2786"
    }
  }
];

export const EXPANDED_RECREATIONAL_PART3 = {
  "temazepam": {
    "physicalFormLabel": "Yellow/Blue Restoril 15/30mg Gel Capsules",
    "physicalAppearance": "Opaque capsule with red/blue bands containing powder/gel.",
    "recreationalFeel": "Produces a warm, heavy, deeply relaxing body stone that gently pulls eyelids closed within 30 minutes without the cold robotic detachment of some other benzos.",
    "subjectiveTags": [
      "Warm Cozy Body Melt",
      "Fast 30-Min Sleep Induction",
      "Phase II Glucuronidation Pathway",
      "7.5–15 mg Active Range"
    ],
    "phases": {
      "onsetFeel": "20–35 minute gentle heaviness in limbs.",
      "peakFeel": "4–6 hours of peaceful, sound sleep.",
      "comedownFeel": "Mild next-morning grogginess."
    }
  },
  "triazolam": {
    "physicalFormLabel": "Small Oval Blue/White 0.125/0.25mg Tablets",
    "physicalAppearance": "Small pale-blue (0.25 mg) or white (0.125 mg) scored tablets.",
    "recreationalFeel": "Acts like an immediate off-switch: 15 minutes after taking 0.25 mg, consciousness fades into deep dreamless sleep.",
    "subjectiveTags": [
      "125 µg (0.125 mg) Threshold",
      "Instant \"Off-Switch\" Sleep",
      "Short 2–3 Hour Duration",
      "Severe Anterograde Amnesia"
    ],
    "phases": {
      "onsetFeel": "10–20 minute rapid drop into sleepiness.",
      "peakFeel": "2–3 hours of deep, unarousable sleep.",
      "comedownFeel": "Rapid awakening, occasional early-morning rebound."
    }
  },
  "chlordiazepoxide": {
    "physicalFormLabel": "Green/Yellow Librium 10mg/25mg Capsules",
    "physicalAppearance": "Two-tone green/yellow hard gelatin capsules.",
    "recreationalFeel": "Produces a very smooth, low-euphoria, steady blanket of emotional calmness and muscle relaxation that quietly unwinds physical tension without knocking you out.",
    "subjectiveTags": [
      "Gold Standard for Alcohol Detox",
      "Smooth 24–48 Hour Taper",
      "Low Compulsive Abuse Urge",
      "5–10 mg Active Threshold"
    ],
    "phases": {
      "onsetFeel": "45–60 minute gradual calm.",
      "peakFeel": "12+ hours of steady anti-anxiety and tremor control.",
      "comedownFeel": "Multi-day gentle dissipation."
    }
  },
  "oxazepam": {
    "physicalFormLabel": "Small White/Pink Scored 10/15mg Tablets",
    "physicalAppearance": "Small scored round tablets.",
    "recreationalFeel": "Takes a leisurely 60 minutes to work, bringing a quiet, un-intoxicating sense of peace and emotional stability.",
    "subjectiveTags": [
      "Bypasses Hepatic CYP Enzymes",
      "Low Abuse / Low Rush Profile",
      "Safe in Hepatic Impairment",
      "7.5–15 mg Active Range"
    ],
    "phases": {
      "onsetFeel": "45–75 minute slow onset.",
      "peakFeel": "4–6 hours of calm, non-sedating emotional relief.",
      "comedownFeel": "Clean fade without hangover."
    }
  },
  "nitrazepam": {
    "physicalFormLabel": "White Round Scored Mogadon 5mg Tablets",
    "physicalAppearance": "White round flat tablets scored with Mogadon 5.",
    "recreationalFeel": "Produces a heavy, velvety wave of drowsiness that guarantees a solid 8–9 hours of deep sleep, with a noticeable cozy grogginess the next morning.",
    "subjectiveTags": [
      "2.5–5 mg Threshold Dose",
      "Guaranteed All-Night Sleep",
      "Long 26-Hour Half-Life",
      "Morning \"Benzodiazepine Fog\""
    ],
    "phases": {
      "onsetFeel": "30–45 minute heavy descent into sleep.",
      "peakFeel": "8–10 hours of deep, unmoving slumber.",
      "comedownFeel": "Lingering morning grogginess."
    }
  },
  "flurazepam": {
    "physicalFormLabel": "Two-Tone Dalmane 15mg/30mg Capsules",
    "physicalAppearance": "Orange/ivory or red/ivory hard capsules.",
    "recreationalFeel": "Takes you into deep sleep within 45 minutes and leaves an unmistakable, tranquilizing background calm that cushions stress for the entire next day.",
    "subjectiveTags": [
      "7.5–15 mg Threshold Dose",
      "Enormous 40–100 Hour Metabolite Half-Life",
      "Multi-Day Cumulative Calming",
      "Next-Day Coordination Slowing"
    ],
    "phases": {
      "onsetFeel": "30–45 minute heavy eyelids.",
      "peakFeel": "8 hours of solid sleep.",
      "comedownFeel": "Mellow, unbothered daytime calm."
    }
  },
  "clobazam": {
    "physicalFormLabel": "White Scored 10mg/20mg Frisium Tablets",
    "physicalAppearance": "Small white round scored tablets.",
    "recreationalFeel": "Provides clear-headed anxiety relief: shuts down racing thoughts and panic without making limbs heavy or slurring speech.",
    "subjectiveTags": [
      "Unique 1,5-Benzodiazepine Structure",
      "High Anti-Seizure / Low Sedation Ratio",
      "Clean Mental Clarity",
      "5–10 mg Active Threshold"
    ],
    "phases": {
      "onsetFeel": "45–60 minute gentle emotional smoothing.",
      "peakFeel": "8–12 hours of clear-headed tranquility.",
      "comedownFeel": "Smooth dissipation."
    }
  },
  "clotiazepam": {
    "physicalFormLabel": "Small Blue/White 5mg Tablets",
    "physicalAppearance": "Small blue scored 5 mg tablets.",
    "recreationalFeel": "Kicks in within 20 minutes to quickly dissolve acute stress or stage fright, leaving you calm and sharp for 4–5 hours.",
    "subjectiveTags": [
      "Fast 20-Min Absorption",
      "Short 4–6 Hour Duration",
      "Zero Morning Hangover",
      "2.5–5 mg Active Range"
    ],
    "phases": {
      "onsetFeel": "15–25 minute rapid calming.",
      "peakFeel": "3–4 hours of bright, relaxed confidence.",
      "comedownFeel": "Clean return to baseline."
    }
  },
  "delorazepam": {
    "physicalFormLabel": "Small White Scored 0.5/1/2mg Tablets or Drops",
    "physicalAppearance": "White scored tablets or oral drops.",
    "recreationalFeel": "A single 1 mg dose sets up a rock-solid, multi-day wall against panic and anxiety without intense intoxication.",
    "subjectiveTags": [
      "0.5 mg Active Threshold",
      "5× Potency vs Diazepam",
      "Enormous 60–100 Hour Half-Life",
      "Metabolizes to Lorazepam"
    ],
    "phases": {
      "onsetFeel": "30–45 minute onset.",
      "peakFeel": "18+ hours of deep, unshakeable calm.",
      "comedownFeel": "Multi-day lingering protection."
    }
  },
  "estazolam": {
    "physicalFormLabel": "White/Orange Scored 1mg/2mg Tablets",
    "physicalAppearance": "White (1 mg) or peach/orange (2 mg) scored tablets.",
    "recreationalFeel": "Induces sleep within 30 minutes and holds you asleep all night, with a smoother, less jagged awakening than Halcion.",
    "subjectiveTags": [
      "0.5–1 mg Active Threshold",
      "Triazolo Ring Structure",
      "Intermediate 15-Hour Half-Life",
      "High Sleep Continuity"
    ],
    "phases": {
      "onsetFeel": "25–40 minute heavy eyelids.",
      "peakFeel": "7–8 hours of sound sleep.",
      "comedownFeel": "Mild morning grogginess."
    }
  },
  "halazepam": {
    "physicalFormLabel": "Orange/White Paxipam 20mg/40mg Tablets",
    "physicalAppearance": "Orange round scored tablets.",
    "recreationalFeel": "Builds so gradually over 2 hours that you barely feel it kick in—anxiety just quietly recedes into the background.",
    "subjectiveTags": [
      "10–20 mg Threshold Dose",
      "Very Slow Onset (60–90 min)",
      "Metabolizes to Long-Acting Nordazepam",
      "Extremely Low Abuse Potential"
    ],
    "phases": {
      "onsetFeel": "60–90 minute gradual softening.",
      "peakFeel": "12+ hours of steady calm.",
      "comedownFeel": "Multi-day gentle fade."
    }
  },
  "ketazolam": {
    "physicalFormLabel": "Yellow/Blue Capsules 15mg/30mg",
    "physicalAppearance": "Hard gelatin capsules.",
    "recreationalFeel": "Provides 12–24 hours of tranquil composure with minimal grogginess or muscle slackness.",
    "subjectiveTags": [
      "7.5–15 mg Active Threshold",
      "Oxazino-Ring Prodrug",
      "Steady Diazepam Release",
      "Low Abuse Spikes"
    ],
    "phases": {
      "onsetFeel": "45–60 minute gradual calm.",
      "peakFeel": "12+ hours of smooth stability.",
      "comedownFeel": "Smooth fade."
    }
  },
  "lormetazepam": {
    "physicalFormLabel": "Small White Scored 1mg/2mg Tablets",
    "physicalAppearance": "Small white round scored tablets.",
    "recreationalFeel": "A gold-standard European sleep aid: 1 mg melts away racing thoughts in 25 minutes, leads into 7–8 hours of restful sleep, and clears cleanly by morning.",
    "subjectiveTags": [
      "0.5 mg Active Threshold",
      "Direct Phase II UGT Clearance",
      "10× Diazepam Potency",
      "Minimal Morning Hangover"
    ],
    "phases": {
      "onsetFeel": "20–30 minute rapid relaxation.",
      "peakFeel": "7–8 hours of deep, refreshing sleep.",
      "comedownFeel": "Clean morning wake-up."
    }
  },
  "medazepam": {
    "physicalFormLabel": "Blue/Orange Capsules or White Tablets",
    "physicalAppearance": "Small capsules or round white tablets.",
    "recreationalFeel": "Acts as an invisible shield against stress throughout the workday—calms the nervous system without impairing alertness or concentration.",
    "subjectiveTags": [
      "5–10 mg Active Threshold",
      "Prodrug to Diazepam & Nordazepam",
      "Low Daytime Drowsiness",
      "All-Day Tension Relief"
    ],
    "phases": {
      "onsetFeel": "30–45 minute gentle wave of relaxation.",
      "peakFeel": "10–14 hours of steady emotional balance.",
      "comedownFeel": "Smooth multi-day taper."
    }
  },
  "nimetazepam": {
    "physicalFormLabel": "Red Aluminum Foil Blister / Orange 5mg Tablets",
    "physicalAppearance": "Orange round scored 5 mg tablets in red foil blisters.",
    "recreationalFeel": "Renowned as one of the most euphoric, warm, and sociable benzodiazepines in existence—5 mg brings a floating body melt and bubbly social happiness before peaceful sleep.",
    "subjectiveTags": [
      "1.5–2.5 mg Threshold Dose",
      "Distinctly Euphoric Disinhibition (\"Happy 5\")",
      "High East Asian Abuse Status",
      "6–10 Hour Warm Glow"
    ],
    "phases": {
      "onsetFeel": "15–30 minute warm wave of pleasant detachment.",
      "peakFeel": "4–6 hours of smiling social euphoria and physical relaxation.",
      "comedownFeel": "Smooth transition into sleep."
    }
  },
  "nordazepam": {
    "physicalFormLabel": "White Scored 5mg/10mg Tablets or Drops",
    "physicalAppearance": "White round scored tablets.",
    "recreationalFeel": "Produces a quiet, dependable, long-lasting blanket of emotional stability that insulates against anxiety for days at a time.",
    "subjectiveTags": [
      "2.5–5 mg Threshold Dose",
      "50–120 Hour Massive Half-Life",
      "Smooth Non-Fluctuating Action",
      "Primary Diazepam Metabolite"
    ],
    "phases": {
      "onsetFeel": "40–60 minute gradual onset.",
      "peakFeel": "24+ hours of steady, dependable calm.",
      "comedownFeel": "Multi-day lingering taper."
    }
  },
  "prazepam": {
    "physicalFormLabel": "Blue/White Centrax 10mg Tablets or Drops",
    "physicalAppearance": "Small blue-green scored tablets.",
    "recreationalFeel": "Gentle, level, all-day calm with zero feeling of being \"drugged\" or drowsy.",
    "subjectiveTags": [
      "5–10 mg Active Threshold",
      "Prodrug to Nordazepam",
      "Smooth Non-Spiking Curve",
      "Low Addiction Liability"
    ],
    "phases": {
      "onsetFeel": "60–90 minute gradual calm.",
      "peakFeel": "12–18 hours of smooth tranquility.",
      "comedownFeel": "Long multi-day fade."
    }
  },
  "quazepam": {
    "physicalFormLabel": "White/Orange Scored 7.5mg/15mg Doral Tablets",
    "physicalAppearance": "White or orange capsule-shaped scored tablets.",
    "recreationalFeel": "Quickly induces sleep within 30 minutes with less clumsiness or stumbling than non-selective benzos.",
    "subjectiveTags": [
      "3.75–7.5 mg Threshold Dose",
      "α1-Subunit Preferential PAM",
      "Thione (C=S) Chemical Class",
      "Long Active Metabolite Tail"
    ],
    "phases": {
      "onsetFeel": "30–45 minute descent into sleep.",
      "peakFeel": "7–8 hours of solid sleep.",
      "comedownFeel": "Mellow daytime calm."
    }
  },
  "tetrazepam": {
    "physicalFormLabel": "Orange Scored 50mg Tablets",
    "physicalAppearance": "Orange round scored 50 mg tablets.",
    "recreationalFeel": "Feels like a hot water bottle for your muscles—releases knots, back tension, and physical stress without turning your brain into mush.",
    "subjectiveTags": [
      "12.5–25 mg Threshold Dose",
      "Premier Skeletal Muscle Relaxant",
      "Cyclohexenyl Ring Core",
      "Historical Skin Reaction Warning"
    ],
    "phases": {
      "onsetFeel": "30–45 minute release of physical stiffness.",
      "peakFeel": "6–8 hours of comfortable, loose muscles.",
      "comedownFeel": "Gentle fade."
    }
  },
  "tofisopam": {
    "physicalFormLabel": "Small White Round 50mg Tablets",
    "physicalAppearance": "Small white round scored 50 mg tablets.",
    "recreationalFeel": "The \"anti-benzo benzo\": erases nervous jitters, sweatiness, and social tension while keeping you 100% awake, alert, and functional with zero muscle weakness.",
    "subjectiveTags": [
      "25–50 mg Therapeutic Threshold",
      "Zero Sedation or Motor Impairment",
      "Unique 2,3-Benzodiazepine Scaffold",
      "No Abuse Liability or GABAA Withdrawal"
    ],
    "phases": {
      "onsetFeel": "30–45 minute subtle clearing of tension.",
      "peakFeel": "4–6 hours of clear, calm composure.",
      "comedownFeel": "Seamless return to baseline."
    }
  },
  "adinazolam": {
    "physicalFormLabel": "White/Peach Scored Tablets",
    "physicalAppearance": "White crystalline powder or tablets.",
    "recreationalFeel": "Produces a cheerful, buoyant anxiolytic state with less emotional flatness than standard benzos.",
    "subjectiveTags": [
      "2.5–5 mg Active Threshold",
      "Dual Anxiolytic + Antidepressant Profile",
      "Upjohn Triazolobenzodiazepine",
      "4–7 Hour Duration"
    ],
    "phases": {
      "onsetFeel": "20–30 minute warm lift.",
      "peakFeel": "3–5 hours of cheerful, calm tranquility.",
      "comedownFeel": "Smooth 2-hour fade."
    }
  },
  "loprazolam": {
    "physicalFormLabel": "Small Yellow Scored 1mg Tablets",
    "physicalAppearance": "Small yellow round scored 1 mg tablets.",
    "recreationalFeel": "Induces heavy, peaceful sleep in 30 minutes, keeping you soundly asleep for 7–8 hours.",
    "subjectiveTags": [
      "0.5 mg Active Threshold (1 mg Tablet)",
      "High-Potency European Hypnotic",
      "Intermediate 15-Hour Half-Life",
      "Low Morning Hangover"
    ],
    "phases": {
      "onsetFeel": "25–35 minute descent into sleep.",
      "peakFeel": "7–8 hours of uninterrupted sleep.",
      "comedownFeel": "Clean morning wake-up."
    }
  },
  "mexazolam": {
    "physicalFormLabel": "Small White Scored 1mg/2mg Tablets",
    "physicalAppearance": "Small white tablets.",
    "recreationalFeel": "Smooth, invisible emotional stabilization lasting 24+ hours.",
    "subjectiveTags": [
      "0.5–1 mg Active Threshold",
      "Oxazolo-Fused Prodrug",
      "Metabolizes to Lorazepam & Delorazepam",
      "Multi-Day Smooth Arc"
    ],
    "phases": {
      "onsetFeel": "45–60 minute gradual calm.",
      "peakFeel": "16+ hours of level tranquility.",
      "comedownFeel": "Multi-day lingering taper."
    }
  },
  "pinazepam": {
    "physicalFormLabel": "White Scored 5mg/10mg Tablets or Drops",
    "physicalAppearance": "Small white tablets.",
    "recreationalFeel": "Takes the edge off stressful days without making you feel sleepy or impaired.",
    "subjectiveTags": [
      "2.5–5 mg Active Threshold",
      "N-Propargyl Chemical Modification",
      "Low Motor Impairment",
      "Daytime Functional Calm"
    ],
    "phases": {
      "onsetFeel": "40–60 minute gentle calming.",
      "peakFeel": "8–12 hours of composed tranquility.",
      "comedownFeel": "Smooth dissipation."
    }
  },
  "etizolam": {
    "physicalFormLabel": "Blue/Pink Etilaam/Etizest 1mg Pellets or Blisters",
    "physicalAppearance": "Small round pink (1 mg) or blue (1 mg) coated pellets.",
    "recreationalFeel": "Renowned as one of the warmest, most cheerful, and functional benzos: hits within 20 minutes with a pleasant wave of smiling confidence, loose muscles, and total anxiety relief.",
    "subjectiveTags": [
      "0.5 mg Active Threshold (1–2 mg Standard)",
      "Fast 20–30 Minute Onset",
      "High Euphoria / Low Hangover Ratio",
      "6–8 Hour Duration"
    ],
    "phases": {
      "onsetFeel": "15–30 minute rapid wave of calm.",
      "peakFeel": "3–4 hours of bright, chatty, relaxed euphoria.",
      "comedownFeel": "Clean 2-hour fade into sleepiness."
    }
  },
  "clonazolam": {
    "physicalFormLabel": "Yellow Pressed 0.5mg Pellets or Liquid Volumetric Solution",
    "physicalAppearance": "Yellow or green pressed pellets or clear propylene glycol liquid.",
    "recreationalFeel": "At 100–250 micrograms, obliterates every trace of anxiety and tension, but anything over 500 µg leads straight into a multi-day blackout where you wake up days later with no memory of what happened.",
    "subjectiveTags": [
      "50 µg (0.05 mg) Microgram Threshold",
      "Extreme Potency (~2.5× Alprazolam)",
      "Massive Anterograde Blackout Hazard",
      "Severe Rapid Tolerance Escalation"
    ],
    "phases": {
      "onsetFeel": "15–25 minute rapid descent.",
      "peakFeel": "6–8 hours of heavy, totally disinhibited sedation.",
      "comedownFeel": "Slow 6-hour emergence with amnesia."
    }
  },
  "flualprazolam": {
    "physicalFormLabel": "Pressed Counterfeit Xanax Bars or Pellets",
    "physicalAppearance": "Often found in counterfeit pressed \"Xanax\" bars.",
    "recreationalFeel": "Feels like a much heavier, more sedating version of Xanax: 0.25–0.5 mg brings a heavy wave of drowsiness and makes standing up feel like walking through deep water.",
    "subjectiveTags": [
      "125 µg (0.125 mg) Threshold",
      "2× Potency vs Alprazolam",
      "Heavier Hypnotic Sedation than Xanax",
      "High Counterfeit Bar Prevalence"
    ],
    "phases": {
      "onsetFeel": "15–30 minute rapid onset.",
      "peakFeel": "5–7 hours of heavy sedation and unbothered calm.",
      "comedownFeel": "Slow 4-hour morning fade."
    }
  },
  "flubromazolam": {
    "physicalFormLabel": "Pellets or Propylene Glycol Liquid",
    "physicalAppearance": "Tiny pressed pellets or liquid solution.",
    "recreationalFeel": "At just 100 micrograms, pulls you down into a deep, immovable sleep that lasts 10–14 hours, followed by a heavy daytime sedation fog.",
    "subjectiveTags": [
      "50 µg (0.05 mg) Microgram Threshold",
      "Extreme Sedating Hypnotic Power",
      "18–24 Hour Long Duration",
      "Catastrophic Blackout Liability"
    ],
    "phases": {
      "onsetFeel": "20–35 minute relentless descent.",
      "peakFeel": "10–14 hours of deep, unmoving sleep.",
      "comedownFeel": "Extended 8-hour daytime grogginess."
    }
  },
  "flubromazepam": {
    "physicalFormLabel": "White/Tan Pellets 4mg/8mg",
    "physicalAppearance": "White or light tan pressed pellets.",
    "recreationalFeel": "Builds slowly into a heavy, warm, peaceful blanket that lasts for 2 to 3 full days from a single dose.",
    "subjectiveTags": [
      "2–4 mg Threshold Dose",
      "Massive 100+ Hour Half-Life",
      "Slow 90-Minute Onset",
      "Smooth Multi-Day Anti-Panic Shield"
    ],
    "phases": {
      "onsetFeel": "60–120 minute gradual build.",
      "peakFeel": "24–48 hours of level calmness and muscle ease.",
      "comedownFeel": "Multi-day lingering taper."
    }
  },
  "diclazepam": {
    "physicalFormLabel": "Small White Pellets 1mg/2mg",
    "physicalAppearance": "Small white pressed pellets.",
    "recreationalFeel": "Feels remarkably functional, clear-headed, and steady—eliminates anxiety and muscle knots with zero urge to party or redose.",
    "subjectiveTags": [
      "0.5 mg Active Threshold (1–2 mg Standard)",
      "10× Potency vs Diazepam",
      "Premier Tapering Pharmacokinetics",
      "Breaks Down to Lorazepam & Delorazepam"
    ],
    "phases": {
      "onsetFeel": "30–50 minute smooth onset.",
      "peakFeel": "12–18 hours of steady anxiety suppression.",
      "comedownFeel": "Multi-day gentle fade."
    }
  },
  "pyrazolam": {
    "physicalFormLabel": "Small Blue/White Pellets 0.5mg/1mg",
    "physicalAppearance": "Blue pressed pellets or powder.",
    "recreationalFeel": "The absolute cleanest functional anxiolytic in existence: erases panic, stage fright, and social anxiety completely while leaving you 100% sharp, awake, and coordinated.",
    "subjectiveTags": [
      "0.5 mg Active Threshold (1 mg Standard)",
      "Zero Sedation or Motor Impairment",
      "Over 60% Renally Excreted Unchanged",
      "Pure α2/α3 Subunit Selectivity"
    ],
    "phases": {
      "onsetFeel": "20–35 minute clear lifting of anxiety.",
      "peakFeel": "6–8 hours of sharp, unshakeable calm.",
      "comedownFeel": "Smooth return to baseline."
    }
  },
  "bromazolam": {
    "physicalFormLabel": "Green/White Counterfeit Bars or 2mg Pellets",
    "physicalAppearance": "Green rectangular scored bars or round pellets.",
    "recreationalFeel": "Feels like a warmer, cozier, slightly longer-lasting version of Xanax: 1–2 mg brings a heavy wave of smiling contentment and physical relaxation.",
    "subjectiveTags": [
      "0.5 mg Active Threshold (1–2 mg Standard)",
      "Warm Muscle Relaxation vs Xanax",
      "8–12 Hour Total Duration",
      "Dominant Counterfeit \"Xanax\" Bar Ingredient"
    ],
    "phases": {
      "onsetFeel": "20–35 minute warm wave of relaxation.",
      "peakFeel": "5–7 hours of smiling, heavy contentment and anti-anxiety relief.",
      "comedownFeel": "Gentle transition into sleep."
    }
  },
  "meclonazepam": {
    "physicalFormLabel": "White Pellets 1mg",
    "physicalAppearance": "White pressed pellets.",
    "recreationalFeel": "Delivers a heavy, long-lasting (10–14 hour) muscular relaxation and mental calm similar to clonazepam.",
    "subjectiveTags": [
      "0.25 mg Active Threshold",
      "N-Methylated Clonazepam Structure",
      "10–14 Hour Duration",
      "Antiparasitic Research History"
    ],
    "phases": {
      "onsetFeel": "30–45 minute steady onset.",
      "peakFeel": "8–10 hours of solid muscle relaxation and calm.",
      "comedownFeel": "Slow 4-hour taper."
    }
  },
  "nifoxipam": {
    "physicalFormLabel": "Yellow Pressed Pellets 0.5mg/1mg",
    "physicalAppearance": "Pale yellow pellets.",
    "recreationalFeel": "Induces a warm, heavy, physical relaxation within 30 minutes, guiding you smoothly into deep sleep.",
    "subjectiveTags": [
      "0.5 mg Active Threshold",
      "Active Flunitrazepam Metabolite",
      "Direct Glucuronidation Pathway",
      "Minimal Morning Hangover"
    ],
    "phases": {
      "onsetFeel": "20–35 minute heavy relaxation.",
      "peakFeel": "6–8 hours of sound sleep.",
      "comedownFeel": "Clean morning wake-up."
    }
  },
  "desalkylgidazepam": {
    "physicalFormLabel": "White/Orange Pellets 3mg",
    "physicalAppearance": "Small round pellets.",
    "recreationalFeel": "Provides an invisible, multi-day cushion against stress with minimal cognitive or motor impairment.",
    "subjectiveTags": [
      "1.5–3 mg Active Threshold",
      "Massive 80–100 Hour Half-Life",
      "Smooth Non-Intoxicating Calm",
      "Excellent Tapering Pharmacokinetics"
    ],
    "phases": {
      "onsetFeel": "45–60 minute gentle calming.",
      "peakFeel": "24+ hours of steady tranquility.",
      "comedownFeel": "Multi-day gentle dissipation."
    }
  },
  "norflurazepam": {
    "physicalFormLabel": "White/Peach Pellets 2mg/5mg",
    "physicalAppearance": "Small round pressed pellets.",
    "recreationalFeel": "Hits with a warm wave of physical muscle relaxation in 30 minutes, followed by a long, steady plateau of calm.",
    "subjectiveTags": [
      "1–2 mg Active Threshold",
      "60–100 Hour Half-Life",
      "Powerful Muscle Relaxation",
      "Active Metabolite of Dalmane"
    ],
    "phases": {
      "onsetFeel": "30–45 minute warm physical ease.",
      "peakFeel": "16–24 hours of deep relaxation.",
      "comedownFeel": "Multi-day lingering taper."
    }
  },
  "nitrazolam": {
    "physicalFormLabel": "Green/White Pellets 1mg",
    "physicalAppearance": "Small green pressed pellets.",
    "recreationalFeel": "250–500 micrograms dissolves all anxiety and physical tension, pulling you into deep, restorative sleep.",
    "subjectiveTags": [
      "250 µg (0.25 mg) Active Threshold",
      "Triazolo-Nitrazepam Hybrid",
      "High Hypnotic Efficacy",
      "8–12 Hour Total Arc"
    ],
    "phases": {
      "onsetFeel": "20–30 minute warm descent.",
      "peakFeel": "6–8 hours of heavy, peaceful sleep.",
      "comedownFeel": "Clean morning wake-up."
    }
  },
  "flunitrazolam": {
    "physicalFormLabel": "Tiny Pellets 0.25mg or Volumetric Liquid",
    "physicalAppearance": "Tiny white or yellow pellets.",
    "recreationalFeel": "An absolute sledgehammer: 100 micrograms shuts down the nervous system and induces deep sleep within 20 minutes.",
    "subjectiveTags": [
      "50 µg (0.05 mg) Microgram Threshold",
      "Triazolo-Rohypnol Super-Hypnotic",
      "Short 4–6 Hour Knockout Arc",
      "Severe Rebound Seizure Warning"
    ],
    "phases": {
      "onsetFeel": "10–20 minute rapid sleepiness.",
      "peakFeel": "3–5 hours of unarousable sleep.",
      "comedownFeel": "Abrupt wake-up with potential rebound anxiety."
    }
  },
  "bretazenil": {
    "physicalFormLabel": "White Crystalline Powder or Pellets",
    "physicalAppearance": "Fine white powder.",
    "recreationalFeel": "Produces calm, clear-headed relief from anxiety without making you feel drowsy, intoxicated, or addicted.",
    "subjectiveTags": [
      "250 µg (0.25 mg) Active Threshold",
      "Partial GABAA Agonist Profile",
      "Virtually Zero Tolerance Escalation",
      "Safe Non-Addictive Anxiolytic"
    ],
    "phases": {
      "onsetFeel": "15–25 minute clean calming.",
      "peakFeel": "2.5–3.5 hours of clear tranquility.",
      "comedownFeel": "Seamless return to baseline."
    }
  },
  "rilmazafone": {
    "physicalFormLabel": "Small White Round Rhythmy 1mg/2mg Tablets",
    "physicalAppearance": "White round scored Japanese pharmaceutical tablets.",
    "recreationalFeel": "Produces a very smooth, natural feeling of sleepiness over 30–45 minutes, leading into 7–8 hours of sound sleep with zero nasal or injection abuse risk.",
    "subjectiveTags": [
      "1.0 mg Active Threshold (1–2 mg Standard)",
      "Water-Soluble GI Prodrug",
      "Immune to Snorting / Injection Abuse",
      "Japanese Clinical Sleep Medication"
    ],
    "phases": {
      "onsetFeel": "30–45 minute gradual sleepiness.",
      "peakFeel": "7–8 hours of restorative sleep.",
      "comedownFeel": "Clean morning wake-up."
    }
  },
  "pagoclone": {
    "physicalFormLabel": "White Crystalline Powder or Pellets",
    "physicalAppearance": "Fine white powder.",
    "recreationalFeel": "Remarkably frees up speech and reduces social anxiety without slowing down thinking or making limbs heavy.",
    "subjectiveTags": [
      "1.0 mg Active Threshold (2–5 mg Dose)",
      "Tested Clinically for Stuttering",
      "High Verbal & Social Fluency",
      "Zero Motor Sluggishness"
    ],
    "phases": {
      "onsetFeel": "30–45 minute smooth release of tension.",
      "peakFeel": "4–6 hours of articulate, relaxed focus.",
      "comedownFeel": "Smooth return to baseline."
    }
  },
  "zolpidem": {
    "physicalFormLabel": "White Oblong Scored Ambien 5mg/10mg Tablets",
    "physicalAppearance": "White oblong film-coated tablets imprinted with AMB 10.",
    "recreationalFeel": "Takes you from wide awake to sound asleep in 15 minutes; however, staying awake produces a strange, floaty, dreamlike delirium with visual morphing and total amnesia.",
    "subjectiveTags": [
      "2.5 mg Threshold (5–10 mg Standard Dose)",
      "Selective α1 Subunit Sleep Switch",
      "Short 2.5-Hour Half-Life",
      "High Sleepwalking / Amnesia Risk"
    ],
    "phases": {
      "onsetFeel": "10–20 minute rapid wave of dreamy sedation.",
      "peakFeel": "2.5–4 hours of deep, unarousable sleep.",
      "comedownFeel": "Clean awakening without morning fog."
    }
  },
  "zopiclone": {
    "physicalFormLabel": "White/Blue Oval Scored 3.75mg/7.5mg Tablets",
    "physicalAppearance": "White or blue oval film-coated tablets.",
    "recreationalFeel": "Puts you to sleep within 30 minutes and keeps you asleep through the night, accompanied by a distinct bitter copper taste in the back of the throat.",
    "subjectiveTags": [
      "2.5–3.75 mg Threshold Dose (7.5 mg Standard)",
      "Broad Subunit Hypnotic Maintenance",
      "Distinct Bitter Metallic Taste in Saliva",
      "5–8 Hour Solid Sleep Arc"
    ],
    "phases": {
      "onsetFeel": "20–35 minute heavy descent into sleep.",
      "peakFeel": "6–8 hours of steady, uninterrupted sleep.",
      "comedownFeel": "Mild next-morning metallic taste."
    }
  },
  "zaleplon": {
    "physicalFormLabel": "White/Green/Brown Sonata 5mg/10mg Capsules",
    "physicalAppearance": "Hard gelatin capsules.",
    "recreationalFeel": "Acts like a lightning bolt: 10 minutes after swallowing, sleepiness hits immediately, and by 2 hours it has completely vanished from the bloodstream.",
    "subjectiveTags": [
      "2.5–5 mg Threshold Dose (10 mg Standard)",
      "Ultra-Short 1-Hour Elimination Half-Life",
      "Safe for Middle-of-the-Night Waking",
      "Zero Morning Hangover"
    ],
    "phases": {
      "onsetFeel": "10–20 minute lightning descent into sleep.",
      "peakFeel": "2–3 hours of sleep induction.",
      "comedownFeel": "Vanishes completely within 3 hours."
    }
  },
  "eszopiclone": {
    "physicalFormLabel": "Blue Round Film-Coated 1mg/2mg/3mg Lunesta Tablets",
    "physicalAppearance": "Round blue film-coated tablets.",
    "recreationalFeel": "Provides a full 7–8 hours of uninterrupted, restorative sleep with a clean morning awakening.",
    "subjectiveTags": [
      "1.0 mg Active Threshold (2–3 mg Dose)",
      "2× Potency vs Racemic Zopiclone",
      "Approved for Long-Term Sleep Maintenance",
      "Milder Metallic Taste than Zopiclone"
    ],
    "phases": {
      "onsetFeel": "20–30 minute descent into sleep.",
      "peakFeel": "7–8 hours of deep, continuous sleep.",
      "comedownFeel": "Clean morning wake-up."
    }
  },
  "phenibut": {
    "physicalFormLabel": "White Sour Crystalline HCl Powder or FAA Powder",
    "physicalAppearance": "Fine sour white crystals (HCl) or bitter fluffy white powder (FAA).",
    "recreationalFeel": "Known for having the most pro-social, music-enhancing, and motivating euphoric glow of any GABAergic: music sounds 3D, social anxiety completely evaporates, and you sleep like a baby for 10 hours.",
    "subjectiveTags": [
      "250 mg Threshold Dose (750–1500 mg Standard)",
      "Slow 2–3 Hour Come-Up",
      "Deep Music Immersion & Pro-Social Drive",
      "Severe Multi-Day Physical Dependence Risk"
    ],
    "phases": {
      "onsetFeel": "60–120 minute slow build of music appreciation.",
      "peakFeel": "6–10 hours of glowing confidence, empathy, and motivation.",
      "comedownFeel": "Profound 10-hour deep sleep and warm afterglow."
    }
  },
  "f-phenibut": {
    "physicalFormLabel": "White Crystalline Powder",
    "physicalAppearance": "Fine white powder with a slightly sour-bitter taste.",
    "recreationalFeel": "Hits much faster than regular Phenibut (45 minutes instead of 3 hours), bringing a cozy wave of loose muscles, upbeat sociability, and calm.",
    "subjectiveTags": [
      "25 mg Threshold Dose (100–250 mg Standard)",
      "5–10× Stronger than Phenibut",
      "Fast 45-Minute Onset",
      "6–10 Hour Total Arc"
    ],
    "phases": {
      "onsetFeel": "30–45 minute rapid warming.",
      "peakFeel": "4–6 hours of sociable euphoria and muscle ease.",
      "comedownFeel": "Smooth descent into sleep."
    }
  },
  "tolibut": {
    "physicalFormLabel": "White Crystalline Powder",
    "physicalAppearance": "White powder.",
    "recreationalFeel": "A smoother, slightly more physical cousin of Phenibut lasting 8–12 hours.",
    "subjectiveTags": [
      "100 mg Threshold Dose",
      "~2× Potency vs Phenibut",
      "Balanced GABAB + α2δ Profile",
      "8–12 Hour Duration"
    ],
    "phases": {
      "onsetFeel": "45–75 minute onset.",
      "peakFeel": "5–7 hours of sociable calm.",
      "comedownFeel": "Smooth sleepiness."
    }
  },
  "picamilon": {
    "physicalFormLabel": "Small White Round 50mg Tablets",
    "physicalAppearance": "Small white tablets.",
    "recreationalFeel": "Brings a subtle, refreshing clarity—clears brain fog and relaxes nervous tension while gently boosting focus.",
    "subjectiveTags": [
      "50 mg Active Threshold (100–200 mg Standard)",
      "Zero Dependence or Sedation",
      "Cleaves into GABA + Vitamin B3 Niacin",
      "Soviet Nootropic / Vasodilator"
    ],
    "phases": {
      "onsetFeel": "20–35 minute gentle clearing of tension.",
      "peakFeel": "2–4 hours of calm, focused mental clarity.",
      "comedownFeel": "Seamless return to baseline."
    }
  },
  "baclofen": {
    "physicalFormLabel": "White Scored 10mg/20mg Lioresal Tablets",
    "physicalAppearance": "White round scored tablets.",
    "recreationalFeel": "Releases muscle stiffness, spasms, and tension completely within 45 minutes, creating a comfortable, heavy physical relaxation.",
    "subjectiveTags": [
      "5–10 mg Active Threshold",
      "Archetypal Pure GABAB Agonist",
      "Deep Muscle Spasm Relief",
      "Severe Withdrawal on Abrupt Cessation"
    ],
    "phases": {
      "onsetFeel": "30–50 minute release of muscle tightness.",
      "peakFeel": "4–6 hours of loose, comfortable physical ease.",
      "comedownFeel": "Clean taper."
    }
  },
  "ghb": {
    "physicalFormLabel": "Clear Salty Liquid (Sodium Salt) or Crystalline Powder",
    "physicalAppearance": "Viscous, clear, intensely salty liquid.",
    "recreationalFeel": "Feels like pure liquid euphoria: combines the social confidence of alcohol with the sensual warmth of MDMA without the next-day hangover—until the dose is slightly exceeded, instantly knocking you unconscious.",
    "subjectiveTags": [
      "500 mg Threshold (1.5–2.5 g Standard)",
      "Intense Euphoric & Aphrodisiac Rush",
      "Razor-Thin Overdose Margin (\"G-Out\")",
      "Completely Clears via Krebs Cycle in 3 Hours"
    ],
    "phases": {
      "onsetFeel": "15–25 minute rapid wave of tingling warmth.",
      "peakFeel": "60–90 minutes of overwhelming social, physical, and musical bliss.",
      "comedownFeel": "Abrupt drop-off with a bright dopamine rebound."
    }
  },
  "gbl": {
    "physicalFormLabel": "Clear Bitter Chemical Liquid (Industrial Solvent)",
    "physicalAppearance": "Pungent, bitter, chemical-tasting clear oily liquid.",
    "recreationalFeel": "Hits with shocking speed—within 10 minutes an electric wave of euphoria, music appreciation, and sensual disinhibition floods the body, followed by rapid sleep.",
    "subjectiveTags": [
      "350–500 mg (~0.4 mL) Threshold",
      "Converts to GHB in Blood in 60 Seconds",
      "Hits 2× Faster than GHB",
      "Severe Caustic Burn if Undiluted"
    ],
    "phases": {
      "onsetFeel": "8–15 minute rapid surge of tingling warmth.",
      "peakFeel": "60–90 minutes of intense, euphoric disinhibition.",
      "comedownFeel": "Sudden drop-off with dopamine wakefulness."
    }
  },
  "1-4-bdo": {
    "physicalFormLabel": "Clear Viscous Liquid (Freezes at 20°C)",
    "physicalAppearance": "Thick, sweet-plastic tasting clear liquid that freezes into solid crystals at room temperature (20°C).",
    "recreationalFeel": "Feels almost identical to GHB once it kicks in—deep bodily warmth, music immersion, and sexual disinhibition—lasting slightly longer (3–4 hours) due to the enzymatic rate limit.",
    "subjectiveTags": [
      "500 mg (~0.5 mL) Active Threshold",
      "Requires Liver ADH Enzymes",
      "Lethal Delayed Overdose if Mixed with Alcohol",
      "Freezes Solid Below 20°C (68°F)"
    ],
    "phases": {
      "onsetFeel": "25–45 minute gradual onset.",
      "peakFeel": "2–3 hours of euphoric warmth and physical relaxation.",
      "comedownFeel": "Smooth 1.5-hour taper."
    }
  },
  "alcohol": {
    "physicalFormLabel": "Fermented & Distilled Beverages",
    "physicalAppearance": "Clear or amber intoxicating liquid.",
    "recreationalFeel": "Starts with a pleasant, talkative, confidence-boosting warmth that gradually progresses into slurred speech, clumsy motor coordination, emotional amplification, and next-day headache/nausea.",
    "subjectiveTags": [
      "3–5 g Pure Alcohol (~1/3 standard beer) Threshold",
      "Dual GABAA PAM + NMDA Antagonist",
      "Zero-Order Hepatic Clearance (~1 Drink/hr)",
      "Toxic Acetaldehyde Hangover"
    ],
    "phases": {
      "onsetFeel": "10–25 minute rapid rise in warmth and social talkativeness.",
      "peakFeel": "60–120 minutes of disinhibited euphoria and looseness.",
      "comedownFeel": "Gradual 2-hour descent into tiredness and next-day dehydration."
    }
  },
  "secobarbital": {
    "physicalFormLabel": "Bright Scarlet Red \"Red Devil\" Seconal 100mg Capsules",
    "physicalAppearance": "Vibrant scarlet-red bullet-shaped capsules.",
    "recreationalFeel": "Produces an intoxicating, drunken, deeply euphoric sedation that feels significantly warmer and heavier than any benzodiazepine—slurring speech within 30 minutes before heavy sleep.",
    "subjectiveTags": [
      "30 mg Threshold (50–100 mg Clinical Dose)",
      "Direct GABAA Chloride Channel Opener",
      "Tiny Overdose Margin vs Benzodiazepines",
      "Massive Hepatic CYP Induction"
    ],
    "phases": {
      "onsetFeel": "15–30 minute rapid heavy drunkenness.",
      "peakFeel": "4–6 hours of deep, unshakeable sedation and euphoria.",
      "comedownFeel": "Lingering next-day grogginess."
    }
  },
  "pentobarbital": {
    "physicalFormLabel": "Bright Yellow Nembutal 100mg Capsules or Solution",
    "physicalAppearance": "Bright yellow hard capsules or clear injectable solution.",
    "recreationalFeel": "Pulls consciousness down into heavy, dreamless anesthesia at therapeutic doses; lethal at multi-gram quantities.",
    "subjectiveTags": [
      "30 mg Active Threshold (50–100 mg Dose)",
      "Direct GABAA Activation + AMPA Blockade",
      "Zero Reversal Antidote (Flumazenil Fails)",
      "High Fatal Apnea Risk"
    ],
    "phases": {
      "onsetFeel": "20–35 minute heavy descent.",
      "peakFeel": "5–7 hours of deep, unarousable sleep.",
      "comedownFeel": "Sluggish morning fade."
    }
  },
  "phenobarbital": {
    "physicalFormLabel": "Small White Scored Luminal 15/30/60/100mg Tablets",
    "physicalAppearance": "Small white round scored tablets.",
    "recreationalFeel": "A slow, heavy, non-euphoric anti-seizure blanket that keeps brain waves sedated for days at a time.",
    "subjectiveTags": [
      "30 mg Active Threshold",
      "Massive 75–120 Hour Half-Life",
      "Powerful Anticonvulsant Protection",
      "Enormous Liver Enzyme Induction"
    ],
    "phases": {
      "onsetFeel": "60–120 minute slow build of heaviness.",
      "peakFeel": "24+ hours of steady motor dampening and sedation.",
      "comedownFeel": "Multi-day lingering taper."
    }
  },
  "amobarbital": {
    "physicalFormLabel": "Bright Blue Amytal Capsules or Tuinal (Blue/Red)",
    "physicalAppearance": "Bright sky-blue bullet-shaped capsules.",
    "recreationalFeel": "Produces an overwhelming wave of emotional openness, talkativeness, and physical warmth where secrets and repressed memories spill out effortlessly before sleep.",
    "subjectiveTags": [
      "30 mg Active Threshold (50–100 mg Dose)",
      "Historical \"Truth Serum\" Narcoanalysis",
      "Heavy Intoxicating Disinhibition",
      "4–8 Hour Duration"
    ],
    "phases": {
      "onsetFeel": "15–30 minute rapid loosening of defenses.",
      "peakFeel": "4–6 hours of warm, chatty, heavy euphoria.",
      "comedownFeel": "Slow descent into sleep."
    }
  },
  "butalbital": {
    "physicalFormLabel": "Blue Round Scored Tablets or Blue/Yellow Capsules",
    "physicalAppearance": "Blue round tablets stamped with 787 or blue/white capsules.",
    "recreationalFeel": "Melts away pulsing headache pain and shoulder tension into a warm, heavy, relaxed barbiturate calm.",
    "subjectiveTags": [
      "25 mg Active Threshold (50 mg Capsule)",
      "Compounded with Caffeine & Tylenol",
      "Relieves Severe Migraines & Muscle Knots",
      "Acetaminophen Overdose Hazard"
    ],
    "phases": {
      "onsetFeel": "25–40 minute relief of head pain.",
      "peakFeel": "5–7 hours of relaxed, drowsy comfort.",
      "comedownFeel": "Slow fade."
    }
  },
  "thiopental": {
    "physicalFormLabel": "Yellowish Powder Vial for Injection",
    "physicalAppearance": "Pale yellow powder that reconstitutes into a clear injectable solution.",
    "recreationalFeel": "Knocks you unconscious within 20 seconds of injection; consciousness returns 10 minutes later as the drug redistributes from the brain into body fat.",
    "subjectiveTags": [
      "25 mg Threshold (100–300 mg Surgical Dose)",
      "20-Second Brain Entry",
      "Sulfur-Substituted Thiobarbiturate",
      "Historic Surgical Induction Agent"
    ],
    "phases": {
      "onsetFeel": "Under 30 seconds.",
      "peakFeel": "5–10 minutes of complete unconsciousness.",
      "comedownFeel": "Rapid redistribution recovery."
    }
  },
  "methaqualone": {
    "physicalFormLabel": "Large White Scored Lemmon 714 Tablets",
    "physicalAppearance": "Large thick white round scored tablets stamped with LEMMON 714 or Mandrax.",
    "recreationalFeel": "Often described as the pinnacle of recreational sedatives: 150–300 mg produces a wave of buzzing tingling warmth through the chest and thighs, turns limbs into rubber (\"jelly legs\"), and sparks playful sexual euphoria.",
    "subjectiveTags": [
      "50 mg Active Threshold (150–300 mg Standard)",
      "Mythical Lemmon 714 Quinazolinone",
      "Unique GABAA Transmembrane Binding Site",
      "Intense Body Tingling & Motor Rubber Legs"
    ],
    "phases": {
      "onsetFeel": "15–30 minute warm tingling in hands and face.",
      "peakFeel": "4–6 hours of smiling euphoric body-melt and aphrodisia.",
      "comedownFeel": "Deep, sound sleep and mellow morning calm."
    }
  },
  "carisoprodol": {
    "physicalFormLabel": "White Round Convex Soma 350mg Tablets",
    "physicalAppearance": "White round convex tablets imprinted with SOMA 350 or Wallace 2000.",
    "recreationalFeel": "Within 30 minutes, releases all spinal and skeletal muscle tightness, turning limbs delightfully loose and rubbly accompanied by a warm, buzzy mental calm.",
    "subjectiveTags": [
      "150 mg Threshold Dose (350 mg Standard Tablet)",
      "Barbiturate-Like GABAA Channel Gating",
      "Rapidly Converts to Meprobamate",
      "Core of the \"Holy Trinity\" Pharma Mix"
    ],
    "phases": {
      "onsetFeel": "20–35 minute rapid loosening of spine and neck.",
      "peakFeel": "2.5–4 hours of heavy, rubbery muscular bliss.",
      "comedownFeel": "Smooth transition into sleep."
    }
  },
  "meprobamate": {
    "physicalFormLabel": "White Scored Miltown 200mg/400mg Tablets",
    "physicalAppearance": "White round scored tablets.",
    "recreationalFeel": "Produces a heavy, tranquil, unbothered composure where physical tension drains out of the shoulders and neck.",
    "subjectiveTags": [
      "100 mg Active Threshold (200–400 mg Dose)",
      "Historic Miltown Blockbuster Tranquilizer",
      "Dicarbamate GABAA Mechanism",
      "6–10 Hour Duration"
    ],
    "phases": {
      "onsetFeel": "30–45 minute release of physical stress.",
      "peakFeel": "5–7 hours of steady, tranquil calm.",
      "comedownFeel": "Smooth taper."
    }
  },
  "chloral-hydrate": {
    "physicalFormLabel": "Red Oblong Noctec 500mg Gelatin Capsules or Flavored Syrup",
    "physicalAppearance": "Red soft gelatin capsules or pungent syrup.",
    "recreationalFeel": "Acts rapidly: 20 minutes after drinking, heavy eyelids and bodily warmth lead straight into deep sleep.",
    "subjectiveTags": [
      "250 mg Threshold (500–1000 mg Clinical Dose)",
      "Historic \"Mickey Finn\" Knockout Drops",
      "Active Metabolite is Trichloroethanol",
      "Cardiac Arrhythmia Hazard on Overdose"
    ],
    "phases": {
      "onsetFeel": "15–25 minute heavy descent into sleep.",
      "peakFeel": "5–7 hours of deep, unmoving sleep.",
      "comedownFeel": "Clean awakening, occasional gastric sourness."
    }
  },
  "clomethiazole": {
    "physicalFormLabel": "Brown Heminevrin 192mg Capsules or Syrup",
    "physicalAppearance": "Brown soft gelatin capsules with a characteristic pungent smell.",
    "recreationalFeel": "Produces a unique, warm tickling in the nose and throat within 15 minutes, rapidly followed by deep, heavy sedation.",
    "subjectiveTags": [
      "100 mg Active Threshold (192–384 mg Clinical Dose)",
      "Historic European Alcohol Detox Medication",
      "Unique Nasal/Pharyngeal Tingling Onset",
      "Lethal Bronchial Secretions with Alcohol"
    ],
    "phases": {
      "onsetFeel": "10–20 minute rapid onset with nasal prickling.",
      "peakFeel": "3–5 hours of heavy, peaceful sleep.",
      "comedownFeel": "Clean offset."
    }
  }
};
