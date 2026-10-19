import { CannabinoidProfile } from './cannabinoids';

export const EXPANDED_SUBSTANCES_PART4: CannabinoidProfile[] = [
  {
    "id": "esketamine",
    "name": "Esketamine (Spravato · (S)-Ketamine)",
    "shortName": "Esketamine",
    "synonyms": [
      "Spravato",
      "S-Ketamine",
      "Ketanest-S"
    ],
    "classification": "Dissociative",
    "riskTier": "High",
    "pubchemCid": 9553,
    "molecularFormula": "C13H16ClNO",
    "molecularWeight": 237.72,
    "canonicalSmiles": "CN1CCCCC1(C2=CC=CC=C2Cl)=O",
    "xLogP": 2.8,
    "cb1KiNm": 0.4,
    "cb2KiNm": 0,
    "cb1Efficacy": "Enantiopure Non-Competitive NMDA Receptor Channel Blocker (~2x Racemic Ketamine Potency)",
    "cb2Efficacy": "Active (S)-(+)-Enantiomer of Ketamine",
    "relativePotencyVsD9": 2,
    "psychoactive": true,
    "alkylChainLength": "2-(2-Chlorophenyl)-2-(methylamino)cyclohexan-1-one",
    "cypEnzymes": [
      "CYP2B6",
      "CYP3A4"
    ],
    "primaryMetabolite": "(S)-Norketamine",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 2,
    "inhaledOnsetMinutes": [
      2,
      5
    ],
    "inhaledDurationHours": [
      0.75,
      1.5
    ],
    "oralOnsetMinutes": [
      15,
      30
    ],
    "oralDurationHours": [
      1.5,
      2.5
    ],
    "baseOralThresholdMg": 15,
    "baseInhaledThresholdMg": 3,
    "radarProfile": {
      "cb1AffinityScore": 84,
      "euphoriaPotency": 90,
      "somaticSedation": 85,
      "anxiogenicRisk": 42,
      "durationPersistence": 18,
      "lipidRetention": 24
    },
    "summary": "Enantiopure (S)-(+)-stereoisomer of ketamine (Spravato nasal spray). Binds the NMDA receptor phencyclidine site with ~2–3x higher affinity than the (R)-enantiomer, delivering rapid-acting synaptogenic antidepressant effects, profound analgesia, and dissociative immersion at half the racemic dose.",
    "pharmacologyNotes": "Faster recovery and less lethargy than racemic ketamine.",
    "specificHazards": [
      "Dissociative disorientation, elevation in blood pressure, and bladder cystitis with chronic high-frequency use."
    ],
    "sideEffects": [
      {
        "effect": "Lucid Dissociation, Spatial Warping & Antidepressant Reset",
        "system": "Psychiatric",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Enantiopure Non-Competitive NMDA Receptor Channel Blocker (~2x Racemic Ketamine Potency)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Esketamine",
      "source": "PubChem CID 9553",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/9553"
    }
  },
  {
    "id": "2-fdck",
    "name": "2-FDCK (2-Fluorodeschloroketamine · 2-Fluoro-Ketamine)",
    "shortName": "2-FDCK",
    "synonyms": [
      "2-Fluoro-Ketamine",
      "2-FDCK"
    ],
    "classification": "Dissociative",
    "riskTier": "High",
    "pubchemCid": 13783682,
    "molecularFormula": "C13H16FNO",
    "molecularWeight": 221.27,
    "canonicalSmiles": "CN1CCCCC1(C2=CC=CC=C2F)=O",
    "xLogP": 2.3,
    "cb1KiNm": 0.9,
    "cb2KiNm": 0,
    "cb1Efficacy": "Non-Competitive NMDA Receptor Blocker (Fluorine Bioisostere of Ketamine)",
    "cb2Efficacy": "ortho-Fluorinated Ketamine Analog",
    "relativePotencyVsD9": 1.2,
    "psychoactive": true,
    "alkylChainLength": "2-(2-Fluorophenyl)-2-(methylamino)cyclohexan-1-one",
    "cypEnzymes": [
      "CYP2B6",
      "CYP3A4"
    ],
    "primaryMetabolite": "2-Fluoro-Norketamine",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 3,
    "inhaledOnsetMinutes": [
      3,
      8
    ],
    "inhaledDurationHours": [
      1,
      2
    ],
    "oralOnsetMinutes": [
      15,
      35
    ],
    "oralDurationHours": [
      2,
      3.5
    ],
    "baseOralThresholdMg": 15,
    "baseInhaledThresholdMg": 10,
    "radarProfile": {
      "cb1AffinityScore": 78,
      "euphoriaPotency": 84,
      "somaticSedation": 82,
      "anxiogenicRisk": 34,
      "durationPersistence": 28,
      "lipidRetention": 22
    },
    "summary": "Fluorine bioisostere of ketamine where the ortho-chlorine is replaced by fluorine. Highly unique because its oral bioavailability is significantly higher (~80%) than parent ketamine (~17–20%), making swallowing a dose just as effective as snorting.",
    "pharmacologyNotes": "Slightly longer 2–3 hour duration than standard ketamine.",
    "specificHazards": [
      "Motor ataxia and bladder mucosal strain with heavy chronic use."
    ],
    "sideEffects": [
      {
        "effect": "Warm Floaty Dissociation & Excellent Oral Bioavailability",
        "system": "Psychiatric",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Non-Competitive NMDA Receptor Blocker (Fluorine Bioisostere of Ketamine)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · 2-FDCK",
      "source": "PubChem CID 13783682",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/13783682"
    }
  },
  {
    "id": "dck",
    "name": "DCK (Deschloroketamine · DXE · 2-Phenyl-2-(methylamino)cyclohexanone)",
    "shortName": "DCK",
    "synonyms": [
      "DXE",
      "Deschloro-Ketamine",
      "O-PCM"
    ],
    "classification": "Dissociative",
    "riskTier": "Extreme",
    "pubchemCid": 13783683,
    "molecularFormula": "C13H17NO",
    "molecularWeight": 203.28,
    "canonicalSmiles": "CN1CCCCC1(C2=CC=CC=C2)=O",
    "xLogP": 2.1,
    "cb1KiNm": 0.25,
    "cb2KiNm": 0,
    "cb1Efficacy": "High-Potency NMDA Receptor Antagonist (~3–5x Ketamine Potency; Long-Acting)",
    "cb2Efficacy": "Deschlorinated Ketamine Core",
    "relativePotencyVsD9": 3.5,
    "psychoactive": true,
    "alkylChainLength": "2-Phenyl-2-(methylamino)cyclohexan-1-one",
    "cypEnzymes": [
      "CYP3A4",
      "CYP2B6"
    ],
    "primaryMetabolite": "Nordeschloroketamine",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 7,
    "inhaledOnsetMinutes": [
      3,
      8
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
    "baseOralThresholdMg": 3,
    "baseInhaledThresholdMg": 2,
    "radarProfile": {
      "cb1AffinityScore": 92,
      "euphoriaPotency": 92,
      "somaticSedation": 94,
      "anxiogenicRisk": 38,
      "durationPersistence": 56,
      "lipidRetention": 26
    },
    "summary": "Deschlorinated parent scaffold of ketamine (~3–5x more potent than ketamine; active at 3–15 mg). Delivers deep, heavy, immersive dissociation with a long 4–7 hour duration and strong analgesic body numbness.",
    "pharmacologyNotes": "Much longer recovery time than standard ketamine.",
    "specificHazards": [
      "ACCIDENTAL OVER-DISSOCIATION: Milligram potency (15–25 mg is a heavy hole) and 5+ hour duration require precision milligram scales."
    ],
    "sideEffects": [
      {
        "effect": "Deep Immersive Hole, Heavy Body Numbness & 5-Hour Duration",
        "system": "Psychiatric",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "High-Potency NMDA Receptor Antagonist (~3–5x Ketamine Potency; Long-Acting)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · DCK",
      "source": "PubChem CID 13783683",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/13783683"
    }
  },
  {
    "id": "pcp",
    "name": "PCP (Phencyclidine · Angel Dust · Sernyl · Piperidinylcyclohexylbenzene)",
    "shortName": "PCP (Phencyclidine)",
    "synonyms": [
      "Angel Dust",
      "Sernyl",
      "Peace Pill",
      "Wet",
      "KJ"
    ],
    "classification": "Dissociative",
    "riskTier": "Extreme",
    "pubchemCid": 6441,
    "molecularFormula": "C17H25N",
    "molecularWeight": 243.39,
    "canonicalSmiles": "C1CCC(CC1)(C2=CC=CC=C2)N3CCCCC3",
    "xLogP": 4.7,
    "cb1KiNm": 0.05,
    "cb2KiNm": 0,
    "cb1Efficacy": "High-Affinity Open-Channel NMDA Blocker (Ki ~59 nM) + Dopamine Reuptake Inhibitor (DAT Ki ~100 nM)",
    "cb2Efficacy": "Archetypal Arylcyclohexylamine Dissociative",
    "relativePotencyVsD9": 6,
    "psychoactive": true,
    "alkylChainLength": "1-(1-Phenylcyclohexyl)piperidine",
    "cypEnzymes": [
      "CYP3A4",
      "CYP2B6"
    ],
    "primaryMetabolite": "PPC (4-Phenyl-4-piperidinocyclohexanol) & PCHP",
    "immunoassayCrossReactivityPct": 95,
    "terminalHalfLifeHours": 21,
    "inhaledOnsetMinutes": [
      1,
      5
    ],
    "inhaledDurationHours": [
      4,
      8
    ],
    "oralOnsetMinutes": [
      15,
      35
    ],
    "oralDurationHours": [
      6,
      12
    ],
    "baseOralThresholdMg": 1,
    "baseInhaledThresholdMg": 0.5,
    "radarProfile": {
      "cb1AffinityScore": 99,
      "euphoriaPotency": 90,
      "somaticSedation": 50,
      "anxiogenicRisk": 96,
      "durationPersistence": 85,
      "lipidRetention": 55
    },
    "summary": "Archetypal arylcyclohexylamine anesthetic (synthesized 1926; Sernyl / \"Angel Dust\"). Combines potent open-channel NMDA receptor blockade with significant dopamine reuptake inhibition, producing intense analgesia, invincible mania, and catatonic dissociation.",
    "pharmacologyNotes": "Extreme lipophilicity (xLogP 4.7) leads to brain tissue sequestration and episodic flashbacks.",
    "specificHazards": [
      "EXCITED DELIRIUM & PSYCHOSIS HAZARD: Severe anesthesia combined with dopaminergic mania can trigger violent agitation, insensitivity to pain, hyperthermia, and rhabdomyolysis."
    ],
    "sideEffects": [
      {
        "effect": "Invincible Physical Strength, Anesthesia & Manic Dissociation",
        "system": "Psychiatric",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "High-Affinity Open-Channel NMDA Blocker (Ki ~59 nM) + Dopamine Reuptake Inhibitor (DAT Ki ~100 nM)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · PCP (Phencyclidine)",
      "source": "PubChem CID 6441",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/6441"
    }
  },
  {
    "id": "3-meo-pcp",
    "name": "3-MeO-PCP (3-Methoxyphencyclidine)",
    "shortName": "3-MeO-PCP",
    "synonyms": [
      "3-MeO"
    ],
    "classification": "Dissociative",
    "riskTier": "Extreme",
    "pubchemCid": 24967343,
    "molecularFormula": "C18H27NO",
    "molecularWeight": 273.41,
    "canonicalSmiles": "COC1=CC=CC(=C1)C2(CCCCC2)N3CCCCC3",
    "xLogP": 4.4,
    "cb1KiNm": 0.04,
    "cb2KiNm": 0,
    "cb1Efficacy": "High-Potency NMDA Antagonist (Ki ~20 nM) + SERT & DAT Reuptake Inhibitor",
    "cb2Efficacy": "meta-Methoxy Substituted PCP",
    "relativePotencyVsD9": 7,
    "psychoactive": true,
    "alkylChainLength": "1-[1-(3-Methoxyphenyl)cyclohexyl]piperidine",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "3-HO-PCP (Active Metabolite)",
    "immunoassayCrossReactivityPct": 75,
    "terminalHalfLifeHours": 11,
    "inhaledOnsetMinutes": [
      3,
      8
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
      6,
      10
    ],
    "baseOralThresholdMg": 0.5,
    "baseInhaledThresholdMg": 0.3,
    "radarProfile": {
      "cb1AffinityScore": 98,
      "euphoriaPotency": 94,
      "somaticSedation": 35,
      "anxiogenicRisk": 92,
      "durationPersistence": 72,
      "lipidRetention": 48
    },
    "summary": "Potent 3-methoxy derivative of PCP synthesized by David Nichols in 1999 (active at 1–5 mg). Produces a clear-headed, energetic, walking dissociation accompanied by a powerful euphoric manic drive and sharp music appreciation.",
    "pharmacologyNotes": "Metabolized via O-demethylation into active 3-HO-PCP.",
    "specificHazards": [
      "SEVERE DELUSION OF SOBER-GODLINESS: Users feel completely rational while acting out grandiose, manic behaviors on redosing binges."
    ],
    "sideEffects": [
      {
        "effect": "Electric Manic Euphoria, Walking Dissociation & High Energy",
        "system": "Psychiatric",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "High-Potency NMDA Antagonist (Ki ~20 nM) + SERT & DAT Reuptake Inhibitor"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · 3-MeO-PCP",
      "source": "PubChem CID 24967343",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/24967343"
    }
  },
  {
    "id": "4-meo-pcp",
    "name": "4-MeO-PCP (para-Methoxyphencyclidine · Methoxydine)",
    "shortName": "4-MeO-PCP",
    "synonyms": [
      "Methoxydine",
      "d-Lysine analog"
    ],
    "classification": "Dissociative",
    "riskTier": "Moderate",
    "pubchemCid": 24967344,
    "molecularFormula": "C18H27NO",
    "molecularWeight": 273.41,
    "canonicalSmiles": "COC1=CC=C(C=C1)C2(CCCCC2)N3CCCCC3",
    "xLogP": 4.4,
    "cb1KiNm": 0.8,
    "cb2KiNm": 0,
    "cb1Efficacy": "Moderate-Potency NMDA Antagonist (~1/10th PCP Potency; First RC Dissociative in 2008)",
    "cb2Efficacy": "para-Methoxy Phencyclidine Analog",
    "relativePotencyVsD9": 1.2,
    "psychoactive": true,
    "alkylChainLength": "1-[1-(4-Methoxyphenyl)cyclohexyl]piperidine",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "4-HO-PCP & O-Demethylated Metabolites",
    "immunoassayCrossReactivityPct": 50,
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
      45
    ],
    "oralDurationHours": [
      4,
      7
    ],
    "baseOralThresholdMg": 15,
    "baseInhaledThresholdMg": 10,
    "radarProfile": {
      "cb1AffinityScore": 72,
      "euphoriaPotency": 78,
      "somaticSedation": 70,
      "anxiogenicRisk": 30,
      "durationPersistence": 48,
      "lipidRetention": 45
    },
    "summary": "The very first synthetic dissociative research chemical to appear online in late 2008. Moving the methoxy group to the para-position lowers NMDA affinity ~10-fold compared to PCP, requiring 30–70 mg for full dissociative effects.",
    "pharmacologyNotes": "Elimination half-life ~8 hours.",
    "specificHazards": [
      "High active milligram doses strain nasal membranes."
    ],
    "sideEffects": [
      {
        "effect": "Warm Dreamy Dissociation & Physical Numbing",
        "system": "Psychiatric",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Moderate-Potency NMDA Antagonist (~1/10th PCP Potency; First RC Dissociative in 2008)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · 4-MeO-PCP",
      "source": "PubChem CID 24967344",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/24967344"
    }
  },
  {
    "id": "3-ho-pcp",
    "name": "3-HO-PCP (3-Hydroxyphencyclidine · Opioid-Affinity Dissociative)",
    "shortName": "3-HO-PCP",
    "synonyms": [
      "3-HO",
      "Hydroxyphencyclidine"
    ],
    "classification": "Dissociative",
    "riskTier": "Extreme",
    "pubchemCid": 24869408,
    "molecularFormula": "C17H25NO",
    "molecularWeight": 259.39,
    "canonicalSmiles": "OC1=CC=CC(=C1)C2(CCCCC2)N3CCCCC3",
    "xLogP": 3.7,
    "cb1KiNm": 0.03,
    "cb2KiNm": 0,
    "cb1Efficacy": "Ultra-Potent NMDA Antagonist (Ki ~30 nM) + High-Affinity μ-Opioid Receptor Ligand (Ki ~39–60 nM)",
    "cb2Efficacy": "Phenolic Hydroxy Arylcyclohexylamine",
    "relativePotencyVsD9": 8,
    "psychoactive": true,
    "alkylChainLength": "3-[1-(Piperidin-1-yl)cyclohexyl]phenol",
    "cypEnzymes": [
      "UGT2B7",
      "CYP2D6"
    ],
    "primaryMetabolite": "3-HO-PCP-Glucuronide",
    "immunoassayCrossReactivityPct": 65,
    "terminalHalfLifeHours": 8,
    "inhaledOnsetMinutes": [
      3,
      8
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
    "baseInhaledThresholdMg": 0.3,
    "radarProfile": {
      "cb1AffinityScore": 99,
      "euphoriaPotency": 96,
      "somaticSedation": 88,
      "anxiogenicRisk": 65,
      "durationPersistence": 62,
      "lipidRetention": 42
    },
    "summary": "Phenolic metabolite and analog of PCP discovered in 1980 by Morris & Wallach. Unique among dissociatives for possessing high affinity for both the NMDA receptor and the human μ-opioid receptor (Ki ~39–60 nM), producing deep, warm, opiate-tinged dissociative bliss.",
    "pharmacologyNotes": "Active at 1–4 mg.",
    "specificHazards": [
      "RESPIRATORY DEPRESSION AT HIGH DOSES: Dual NMDA blockade + MOR activation suppresses respiration at supratherapeutic doses."
    ],
    "sideEffects": [
      {
        "effect": "Warm Opiate-Tinged Dissociative Bliss & Body Numbness",
        "system": "Pulmonary",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "Ultra-Potent NMDA Antagonist (Ki ~30 nM) + High-Affinity μ-Opioid Receptor Ligand (Ki ~39–60 nM)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · 3-HO-PCP",
      "source": "PubChem CID 24869408",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/24869408"
    }
  },
  {
    "id": "3-me-pcp",
    "name": "3-Me-PCP (3-Methylphencyclidine)",
    "shortName": "3-Me-PCP",
    "synonyms": [
      "3-Methyl-PCP"
    ],
    "classification": "Dissociative",
    "riskTier": "High",
    "pubchemCid": 145721936,
    "molecularFormula": "C18H27N",
    "molecularWeight": 257.41,
    "canonicalSmiles": "CC1=CC=CC(=C1)C2(CCCCC2)N3CCCCC3",
    "xLogP": 4.9,
    "cb1KiNm": 0.05,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent NMDA Antagonist + Norepinephrine/Dopamine Reuptake Inhibitor",
    "cb2Efficacy": "meta-Methyl Substituted PCP",
    "relativePotencyVsD9": 6,
    "psychoactive": true,
    "alkylChainLength": "1-[1-(3-Methylphenyl)cyclohexyl]piperidine",
    "cypEnzymes": [
      "CYP3A4"
    ],
    "primaryMetabolite": "Hydroxymethyl-3-Me-PCP",
    "immunoassayCrossReactivityPct": 75,
    "terminalHalfLifeHours": 9,
    "inhaledOnsetMinutes": [
      3,
      8
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
    "baseOralThresholdMg": 1,
    "baseInhaledThresholdMg": 0.5,
    "radarProfile": {
      "cb1AffinityScore": 94,
      "euphoriaPotency": 92,
      "somaticSedation": 45,
      "anxiogenicRisk": 82,
      "durationPersistence": 65,
      "lipidRetention": 50
    },
    "summary": "3-Methyl analog of PCP. Possesses high NMDA receptor affinity with a crisper, more lucid, slightly shorter stimulating profile than 3-MeO-PCP.",
    "pharmacologyNotes": "Active at 2–8 mg.",
    "specificHazards": [
      "Mania and sleep disruption if taken late."
    ],
    "sideEffects": [
      {
        "effect": "Crisp Stimulating Dissociation, Euphoria & Music Immersion",
        "system": "Psychiatric",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Potent NMDA Antagonist + Norepinephrine/Dopamine Reuptake Inhibitor"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · 3-Me-PCP",
      "source": "PubChem CID 145721936",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/145721936"
    }
  },
  {
    "id": "3-f-pcp",
    "name": "3-F-PCP (3-Fluorophencyclidine)",
    "shortName": "3-F-PCP",
    "synonyms": [
      "3-Fluoro-PCP"
    ],
    "classification": "Dissociative",
    "riskTier": "High",
    "pubchemCid": 145721937,
    "molecularFormula": "C17H24FN",
    "molecularWeight": 261.38,
    "canonicalSmiles": "FC1=CC=CC(=C1)C2(CCCCC2)N3CCCCC3",
    "xLogP": 4.5,
    "cb1KiNm": 0.08,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent Selective NMDA Receptor Channel Blocker (meta-Fluorinated PCP)",
    "cb2Efficacy": "3-Fluoro Arylcyclohexylamine",
    "relativePotencyVsD9": 4.5,
    "psychoactive": true,
    "alkylChainLength": "1-[1-(3-Fluorophenyl)cyclohexyl]piperidine",
    "cypEnzymes": [
      "CYP3A4"
    ],
    "primaryMetabolite": "4-Hydroxy-3-F-PCP",
    "immunoassayCrossReactivityPct": 70,
    "terminalHalfLifeHours": 8,
    "inhaledOnsetMinutes": [
      3,
      8
    ],
    "inhaledDurationHours": [
      3.5,
      5.5
    ],
    "oralOnsetMinutes": [
      20,
      45
    ],
    "oralDurationHours": [
      5,
      7
    ],
    "baseOralThresholdMg": 1.5,
    "baseInhaledThresholdMg": 1,
    "radarProfile": {
      "cb1AffinityScore": 90,
      "euphoriaPotency": 88,
      "somaticSedation": 60,
      "anxiogenicRisk": 55,
      "durationPersistence": 58,
      "lipidRetention": 46
    },
    "summary": "meta-Fluorinated analog of PCP. More sedating and ketamine-like than 3-MeO-PCP, offering comfortable physical numbness with lower mania risk.",
    "pharmacologyNotes": "Active at 4–15 mg.",
    "specificHazards": [
      "Motor clumsiness at higher doses."
    ],
    "sideEffects": [
      {
        "effect": "Relaxed Physical Numbness & Spatial Warping",
        "system": "Psychiatric",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Potent Selective NMDA Receptor Channel Blocker (meta-Fluorinated PCP)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · 3-F-PCP",
      "source": "PubChem CID 145721937",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/145721937"
    }
  },
  {
    "id": "pce",
    "name": "PCE (Eticyclidine · CI-400 · N-Ethylcyclohexylbenzene)",
    "shortName": "PCE (Eticyclidine)",
    "synonyms": [
      "Eticyclidine",
      "CI-400"
    ],
    "classification": "Dissociative",
    "riskTier": "Extreme",
    "pubchemCid": 24869409,
    "molecularFormula": "C14H21N",
    "molecularWeight": 203.32,
    "canonicalSmiles": "CCNC1(CCCCC1)C2=CC=CC=C2",
    "xLogP": 3.8,
    "cb1KiNm": 0.03,
    "cb2KiNm": 0,
    "cb1Efficacy": "Ultra-Potent High-Affinity Open-Channel NMDA Blocker (~1.5x PCP Potency)",
    "cb2Efficacy": "Archetypal N-Ethyl Arylcyclohexylamine",
    "relativePotencyVsD9": 7,
    "psychoactive": true,
    "alkylChainLength": "N-Ethyl-1-phenylcyclohexan-1-amine",
    "cypEnzymes": [
      "CYP3A4",
      "CYP2B6"
    ],
    "primaryMetabolite": "Nor-PCE & Hydroxylated Metabolites",
    "immunoassayCrossReactivityPct": 85,
    "terminalHalfLifeHours": 15,
    "inhaledOnsetMinutes": [
      2,
      5
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
      6,
      10
    ],
    "baseOralThresholdMg": 1,
    "baseInhaledThresholdMg": 0.5,
    "radarProfile": {
      "cb1AffinityScore": 99,
      "euphoriaPotency": 92,
      "somaticSedation": 65,
      "anxiogenicRisk": 95,
      "durationPersistence": 78,
      "lipidRetention": 45
    },
    "summary": "N-ethyl homolog of phencyclidine developed by Parke-Davis in the 1950s (CI-400). Approximately 1.5x more potent than PCP (active at 1–5 mg), producing intense catatonic anesthesia, amnesia, and prolonged manic delirium.",
    "pharmacologyNotes": "Long 8–12 hour active duration.",
    "specificHazards": [
      "EXCITED DELIRIUM & PROLONGED CATATONIA: Extreme disorientation and insensitivity to pain."
    ],
    "sideEffects": [
      {
        "effect": "Intense Anesthetic Dissociation, Catatonia & Manic Delirium",
        "system": "Psychiatric",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "Ultra-Potent High-Affinity Open-Channel NMDA Blocker (~1.5x PCP Potency)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · PCE (Eticyclidine)",
      "source": "PubChem CID 24869409",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/24869409"
    }
  },
  {
    "id": "3-meo-pce",
    "name": "3-MeO-PCE (Methoxetamine Scaffolding Analog · Methoxy-Eticyclidine)",
    "shortName": "3-MeO-PCE",
    "synonyms": [
      "Methoxieticyclidine"
    ],
    "classification": "Dissociative",
    "riskTier": "High",
    "pubchemCid": 71750085,
    "molecularFormula": "C15H23NO",
    "molecularWeight": 233.35,
    "canonicalSmiles": "CCN(C1(CCCCC1)C2=CC(=CC=C2)OC)",
    "xLogP": 3.6,
    "cb1KiNm": 0.06,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent NMDA Antagonist + SERT Serotonin Reuptake Inhibitor (~2x MXE Potency)",
    "cb2Efficacy": "N-Ethyl Arylcyclohexylamine",
    "relativePotencyVsD9": 5,
    "psychoactive": true,
    "alkylChainLength": "N-Ethyl-1-(3-methoxyphenyl)cyclohexan-1-amine",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "3-HO-PCE & N-Deethyl metabolites",
    "immunoassayCrossReactivityPct": 50,
    "terminalHalfLifeHours": 9,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      4,
      6
    ],
    "oralOnsetMinutes": [
      25,
      50
    ],
    "oralDurationHours": [
      6,
      10
    ],
    "baseOralThresholdMg": 1.5,
    "baseInhaledThresholdMg": 1,
    "radarProfile": {
      "cb1AffinityScore": 92,
      "euphoriaPotency": 94,
      "somaticSedation": 60,
      "anxiogenicRisk": 55,
      "durationPersistence": 68,
      "lipidRetention": 38
    },
    "summary": "N-ethyl homolog of 3-MeO-PCP and direct parent scaffold of methoxetamine (MXE). Combines potent NMDA antagonism with strong serotonin reuptake inhibition, producing colorful, lucid, emotionally warm psychedelic dissociation.",
    "pharmacologyNotes": "Active at 3–12 mg.",
    "specificHazards": [
      "Mania and serotonin interaction risk with SSRIs/MAOIs."
    ],
    "sideEffects": [
      {
        "effect": "Lucid Psychedelic Dissociation, Colorful Insights & Warmth",
        "system": "Psychiatric",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Potent NMDA Antagonist + SERT Serotonin Reuptake Inhibitor (~2x MXE Potency)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · 3-MeO-PCE",
      "source": "PubChem CID 71750085",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/71750085"
    }
  },
  {
    "id": "o-pce",
    "name": "O-PCE (2-Oxo-PCE · Eticyclidone · Deschloro-N-ethyl-ketamine)",
    "shortName": "O-PCE",
    "synonyms": [
      "Eticyclidone",
      "2-Oxo-PCE"
    ],
    "classification": "Dissociative",
    "riskTier": "Extreme",
    "pubchemCid": 13783684,
    "molecularFormula": "C14H19NO",
    "molecularWeight": 217.31,
    "canonicalSmiles": "CCNC1(CCCCC1=O)C2=CC=CC=C2",
    "xLogP": 2.5,
    "cb1KiNm": 0.2,
    "cb2KiNm": 0,
    "cb1Efficacy": "Ultra-Potent High-Affinity NMDA Receptor Blocker (~5x Ketamine Potency; Vaporizable)",
    "cb2Efficacy": "2-Oxo N-Ethyl Arylcyclohexylamine",
    "relativePotencyVsD9": 5,
    "psychoactive": true,
    "alkylChainLength": "2-(Ethylamino)-2-phenylcyclohexan-1-one",
    "cypEnzymes": [
      "CYP3A4",
      "CYP2B6"
    ],
    "primaryMetabolite": "Nor-O-PCE",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 8,
    "inhaledOnsetMinutes": [
      2,
      5
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
      5,
      8
    ],
    "baseOralThresholdMg": 1.5,
    "baseInhaledThresholdMg": 1,
    "radarProfile": {
      "cb1AffinityScore": 96,
      "euphoriaPotency": 90,
      "somaticSedation": 98,
      "anxiogenicRisk": 48,
      "durationPersistence": 70,
      "lipidRetention": 32
    },
    "summary": "2-Oxo derivative of eticyclidine (O-PCM / O-PCE). One of the most potent and efficient \"hole\" dissociatives ever created (active at 2–10 mg), with exceptional vaporizability and deep, silent anesthetic immersion.",
    "pharmacologyNotes": "Produces complete motor anesthesia at 15–20 mg.",
    "specificHazards": [
      "CATASTROPHIC ANESTHETIC HOLE AT LOW DOSES: Vaporizing or snorting >15 mg causes instant catatonic hole with long residual amnesia."
    ],
    "sideEffects": [
      {
        "effect": "Deep Silent Anesthetic Hole, Zero-Gravity Float & Long Tail",
        "system": "Psychiatric",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "Ultra-Potent High-Affinity NMDA Receptor Blocker (~5x Ketamine Potency; Vaporizable)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · O-PCE",
      "source": "PubChem CID 13783684",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/13783684"
    }
  },
  {
    "id": "tiletamine",
    "name": "Tiletamine (Telazol · Thiophene Arylcyclohexylamine Anesthetic)",
    "shortName": "Tiletamine",
    "synonyms": [
      "Telazol",
      "CI-634",
      "Zoletil"
    ],
    "classification": "Dissociative",
    "riskTier": "High",
    "pubchemCid": 25488,
    "molecularFormula": "C12H17NOS",
    "molecularWeight": 223.33,
    "canonicalSmiles": "CCNC1(CCCC1=O)C2=CC=CS2",
    "xLogP": 2.6,
    "cb1KiNm": 0.35,
    "cb2KiNm": 0,
    "cb1Efficacy": "High-Potency NMDA Antagonist (~2–3x Ketamine Potency; Thiophene Bioisostere)",
    "cb2Efficacy": "Thiophene-Fused Ketamine Analog",
    "relativePotencyVsD9": 3,
    "psychoactive": true,
    "alkylChainLength": "2-(Ethylamino)-2-(thiophen-2-yl)cyclohexan-1-one",
    "cypEnzymes": [
      "CYP3A4"
    ],
    "primaryMetabolite": "Nortiletamine",
    "immunoassayCrossReactivityPct": 10,
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
      35
    ],
    "oralDurationHours": [
      3,
      5
    ],
    "baseOralThresholdMg": 5,
    "baseInhaledThresholdMg": 2.5,
    "radarProfile": {
      "cb1AffinityScore": 86,
      "euphoriaPotency": 84,
      "somaticSedation": 94,
      "anxiogenicRisk": 42,
      "durationPersistence": 38,
      "lipidRetention": 28
    },
    "summary": "Veterinary dissociative anesthetic compounded with zolazepam in Telazol. Acts as a thiophene bioisostere of ketamine with ~2–3x higher milligram potency and deeper physical anesthesia.",
    "pharmacologyNotes": "Elimination half-life ~4 hours.",
    "specificHazards": [
      "Heavy motor ataxia and emerging salivation."
    ],
    "sideEffects": [
      {
        "effect": "Deep Anesthetic Immersion & Heavy Bodily Numbness",
        "system": "Psychiatric",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "High-Potency NMDA Antagonist (~2–3x Ketamine Potency; Thiophene Bioisostere)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Tiletamine",
      "source": "PubChem CID 25488",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/25488"
    }
  },
  {
    "id": "ephenidine",
    "name": "Ephenidine (NEDPA · Diarylethylamine NMDA Antagonist)",
    "shortName": "Ephenidine",
    "synonyms": [
      "NEDPA",
      "EPE"
    ],
    "classification": "Dissociative",
    "riskTier": "High",
    "pubchemCid": 71750089,
    "molecularFormula": "C16H19N",
    "molecularWeight": 225.33,
    "canonicalSmiles": "CCNC(CC1=CC=CC=C1)C2=CC=CC=C2",
    "xLogP": 3.6,
    "cb1KiNm": 0.45,
    "cb2KiNm": 0,
    "cb1Efficacy": "Non-Arylcyclohexylamine Open-Channel NMDA Receptor Antagonist (Ki ~66 nM)",
    "cb2Efficacy": "Diarylethylamine Dissociative Class",
    "relativePotencyVsD9": 1.8,
    "psychoactive": true,
    "alkylChainLength": "N-Ethyl-1,2-diphenylethan-1-amine",
    "cypEnzymes": [
      "CYP3A4",
      "CYP2D6"
    ],
    "primaryMetabolite": "Deethyl-ephenidine & Hydroxylated metabolites",
    "immunoassayCrossReactivityPct": 0,
    "terminalHalfLifeHours": 8,
    "inhaledOnsetMinutes": [
      15,
      30
    ],
    "inhaledDurationHours": [
      5,
      8
    ],
    "oralOnsetMinutes": [
      30,
      75
    ],
    "oralDurationHours": [
      6,
      12
    ],
    "baseOralThresholdMg": 20,
    "baseInhaledThresholdMg": 15,
    "radarProfile": {
      "cb1AffinityScore": 82,
      "euphoriaPotency": 92,
      "somaticSedation": 65,
      "anxiogenicRisk": 30,
      "durationPersistence": 72,
      "lipidRetention": 35
    },
    "summary": "Diarylethylamine dissociative developed to avoid arylcyclohexylamine bladder toxicity. Binds the NMDA receptor channel without inhibiting monoamine transporters, producing an exceptionally lucid, peaceful, philosophical dissociation with crystal-clear thinking.",
    "pharmacologyNotes": "Oral administration is the gold standard route (onset 45–75 min).",
    "specificHazards": [
      "Long 6–12 hour duration requires clear schedule."
    ],
    "sideEffects": [
      {
        "effect": "Lucid Philosophical Dissociation, Crystal-Clear Insights & Music Bliss",
        "system": "Psychiatric",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Non-Arylcyclohexylamine Open-Channel NMDA Receptor Antagonist (Ki ~66 nM)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Ephenidine",
      "source": "PubChem CID 71750089",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/71750089"
    }
  },
  {
    "id": "diphenidine",
    "name": "Diphenidine (1-(1,2-Diphenylethyl)piperidine · DND)",
    "shortName": "Diphenidine",
    "synonyms": [
      "DND",
      "DEP"
    ],
    "classification": "Dissociative",
    "riskTier": "High",
    "pubchemCid": 71750090,
    "molecularFormula": "C19H23N",
    "molecularWeight": 265.39,
    "canonicalSmiles": "C1CCN(CC1)C(CC2=CC=CC=C2)C3=CC=CC=C3",
    "xLogP": 4.4,
    "cb1KiNm": 0.5,
    "cb2KiNm": 0,
    "cb1Efficacy": "Open-Channel NMDA Receptor Antagonist (Ki ~28 nM) + Dopamine Transporter Ligand",
    "cb2Efficacy": "Piperidine Diarylethylamine Dissociative",
    "relativePotencyVsD9": 2,
    "psychoactive": true,
    "alkylChainLength": "1-(1,2-Diphenylethyl)piperidine",
    "cypEnzymes": [
      "CYP3A4",
      "CYP2D6"
    ],
    "primaryMetabolite": "Hydroxydiphenidine",
    "immunoassayCrossReactivityPct": 0,
    "terminalHalfLifeHours": 6,
    "inhaledOnsetMinutes": [
      1,
      5
    ],
    "inhaledDurationHours": [
      2,
      4
    ],
    "oralOnsetMinutes": [
      25,
      60
    ],
    "oralDurationHours": [
      4,
      7
    ],
    "baseOralThresholdMg": 15,
    "baseInhaledThresholdMg": 10,
    "radarProfile": {
      "cb1AffinityScore": 84,
      "euphoriaPotency": 84,
      "somaticSedation": 75,
      "anxiogenicRisk": 55,
      "durationPersistence": 52,
      "lipidRetention": 42
    },
    "summary": "Piperidine-based diarylethylamine synthesized in 1989. When vaporized, it produces an instantaneous, intense dissociative flash accompanied by profound audio distortions and retrograde amnesia.",
    "pharmacologyNotes": "Vaporization produces effects in under 10 seconds.",
    "specificHazards": [
      "SEVERE SHORT-TERM AMNESIA: Vaping high doses triggers total memory loop blackouts and compulsive redosing."
    ],
    "sideEffects": [
      {
        "effect": "Instantaneous Vaporized Dissociative Flash & Auditory Flanging",
        "system": "Psychiatric",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Open-Channel NMDA Receptor Antagonist (Ki ~28 nM) + Dopamine Transporter Ligand"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Diphenidine",
      "source": "PubChem CID 71750090",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/71750090"
    }
  },
  {
    "id": "mxp",
    "name": "MXP (Methoxphenidine · 2-MeO-Diphenidine)",
    "shortName": "MXP",
    "synonyms": [
      "2-MeO-Diphenidine",
      "Methoxphenidine"
    ],
    "classification": "Dissociative",
    "riskTier": "High",
    "pubchemCid": 71750091,
    "molecularFormula": "C20H25NO",
    "molecularWeight": 295.42,
    "canonicalSmiles": "COC1=CC=CC=C1C(CC2=CC=CC=C2)N3CCCCC3",
    "xLogP": 4.3,
    "cb1KiNm": 0.6,
    "cb2KiNm": 0,
    "cb1Efficacy": "Diarylethylamine NMDA Receptor Blocker (ortho-Methoxy Diphenidine Analog)",
    "cb2Efficacy": "ortho-Methoxy Diarylethylamine",
    "relativePotencyVsD9": 1.8,
    "psychoactive": true,
    "alkylChainLength": "1-[1-(2-Methoxyphenyl)-2-phenylethyl]piperidine",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "O-Demethylated Metabolites",
    "immunoassayCrossReactivityPct": 0,
    "terminalHalfLifeHours": 7.5,
    "inhaledOnsetMinutes": [
      10,
      25
    ],
    "inhaledDurationHours": [
      3,
      6
    ],
    "oralOnsetMinutes": [
      30,
      75
    ],
    "oralDurationHours": [
      5,
      9
    ],
    "baseOralThresholdMg": 15,
    "baseInhaledThresholdMg": 10,
    "radarProfile": {
      "cb1AffinityScore": 80,
      "euphoriaPotency": 82,
      "somaticSedation": 70,
      "anxiogenicRisk": 42,
      "durationPersistence": 65,
      "lipidRetention": 40
    },
    "summary": "ortho-Methoxy analog of diphenidine developed as an MXE alternative in 2013. Has a slow, steady oral onset (45–75 minutes) and provides 5–8 hours of calm, spatial dissociation with less amnesia than parent diphenidine.",
    "pharmacologyNotes": "Elimination half-life ~7.5 hours.",
    "specificHazards": [
      "Slow onset leads to accidental redosing."
    ],
    "sideEffects": [
      {
        "effect": "Spatial Dissociative Shifting & Dreamy Music Depth",
        "system": "Psychiatric",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Diarylethylamine NMDA Receptor Blocker (ortho-Methoxy Diphenidine Analog)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · MXP",
      "source": "PubChem CID 71750091",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/71750091"
    }
  },
  {
    "id": "mxe",
    "name": "MXE (Methoxetamine · 3-MeO-2-Oxo-PCE · Mexxy)",
    "shortName": "MXE (Methoxetamine)",
    "synonyms": [
      "Mexxy",
      "MXE",
      "3-MeO-2-Oxo-PCE"
    ],
    "classification": "Dissociative",
    "riskTier": "High",
    "pubchemCid": 53384518,
    "molecularFormula": "C15H21NO2",
    "molecularWeight": 247.33,
    "canonicalSmiles": "CCNC1(CCCCC1=O)C2=CC(=CC=C2)OC",
    "xLogP": 2.4,
    "cb1KiNm": 0.25,
    "cb2KiNm": 0,
    "cb1Efficacy": "Designed Multimodal Dissociative (NMDA Blocker + Serotonin Transporter Blocker + MOR Agonist)",
    "cb2Efficacy": "Designer 3-Methoxy-2-Oxo PCE",
    "relativePotencyVsD9": 3,
    "psychoactive": true,
    "alkylChainLength": "2-(Ethylamino)-2-(3-methoxyphenyl)cyclohexan-1-one",
    "cypEnzymes": [
      "CYP2B6",
      "CYP3A4",
      "O-Demethylation"
    ],
    "primaryMetabolite": "O-Desmethylmethoxetamine & Normethoxetamine",
    "immunoassayCrossReactivityPct": 25,
    "terminalHalfLifeHours": 4.5,
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
      45
    ],
    "oralDurationHours": [
      4,
      7
    ],
    "baseOralThresholdMg": 5,
    "baseInhaledThresholdMg": 3,
    "radarProfile": {
      "cb1AffinityScore": 95,
      "euphoriaPotency": 98,
      "somaticSedation": 86,
      "anxiogenicRisk": 30,
      "durationPersistence": 48,
      "lipidRetention": 28
    },
    "summary": "Legendary designer dissociative synthesized in 2010 by Hamilton Morris’s collaborator Academician (\"The M-Hole\"). Masterfully engineered to have higher oral bioavailability, warmer opioid-like physical euphoria, less bladder toxicity, and a smoother 4–6 hour M-Hole than ketamine.",
    "pharmacologyNotes": "Elimination half-life ~4.5 hours.",
    "specificHazards": [
      "Compulsive redosing and mania if dosed repeatedly over a night."
    ],
    "sideEffects": [
      {
        "effect": "Warm Golden Dissociative Blanket, Visual Geometry & The \"M-Hole\"",
        "system": "Psychiatric",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Designed Multimodal Dissociative (NMDA Blocker + Serotonin Transporter Blocker + MOR Agonist)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · MXE (Methoxetamine)",
      "source": "PubChem CID 53384518",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/53384518"
    }
  },
  {
    "id": "mxpr",
    "name": "MXPr (Methoxpropamine · 3-MeO-2-Oxo-PCPr)",
    "shortName": "MXPr",
    "synonyms": [
      "Methoxpropamine",
      "2-Oxo-3-MeO-PCPr"
    ],
    "classification": "Dissociative",
    "riskTier": "High",
    "pubchemCid": 145721938,
    "molecularFormula": "C16H23NO2",
    "molecularWeight": 261.36,
    "canonicalSmiles": "CCCNC1(CCCCC1=O)C2=CC(=CC=C2)OC",
    "xLogP": 2.8,
    "cb1KiNm": 0.35,
    "cb2KiNm": 0,
    "cb1Efficacy": "N-Propyl Homolog of MXE (NMDA Receptor Channel Blocker + SERT Modulator)",
    "cb2Efficacy": "3-Methoxy-2-Oxo Propylcyclohexylamine",
    "relativePotencyVsD9": 2.8,
    "psychoactive": true,
    "alkylChainLength": "2-(3-Methoxyphenyl)-2-(propylamino)cyclohexan-1-one",
    "cypEnzymes": [
      "CYP3A4"
    ],
    "primaryMetabolite": "Nor-MXPr",
    "immunoassayCrossReactivityPct": 15,
    "terminalHalfLifeHours": 4,
    "inhaledOnsetMinutes": [
      5,
      15
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
      3.5,
      6
    ],
    "baseOralThresholdMg": 5,
    "baseInhaledThresholdMg": 3,
    "radarProfile": {
      "cb1AffinityScore": 90,
      "euphoriaPotency": 92,
      "somaticSedation": 84,
      "anxiogenicRisk": 28,
      "durationPersistence": 42,
      "lipidRetention": 30
    },
    "summary": "N-propyl homolog of methoxetamine (MXE). Possesses a rich, warm, musical body high that closely mirrors MXE with a slightly more sedating, physical weight.",
    "pharmacologyNotes": "Fast nasal absorption.",
    "specificHazards": [
      "Motor ataxia at hole doses."
    ],
    "sideEffects": [
      {
        "effect": "Warm Cozy Dissociative Melt, Physical Euphoria & Music Immersion",
        "system": "Psychiatric",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "N-Propyl Homolog of MXE (NMDA Receptor Channel Blocker + SERT Modulator)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · MXPr",
      "source": "PubChem CID 145721938",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/145721938"
    }
  },
  {
    "id": "mxipr",
    "name": "MXiPr (Methoxisopropamine · 3-MeO-2-Oxo-PCiPr)",
    "shortName": "MXiPr",
    "synonyms": [
      "Methoxisopropamine"
    ],
    "classification": "Dissociative",
    "riskTier": "High",
    "pubchemCid": 145721939,
    "molecularFormula": "C16H23NO2",
    "molecularWeight": 261.36,
    "canonicalSmiles": "CC(C)NC1(CCCCC1=O)C2=CC(=CC=C2)OC",
    "xLogP": 2.7,
    "cb1KiNm": 0.3,
    "cb2KiNm": 0,
    "cb1Efficacy": "Branched N-Isopropyl Analog of MXE (High-Potency NMDA Blocker with Psychedelic Undertones)",
    "cb2Efficacy": "3-Methoxy-2-Oxo Isopropylcyclohexylamine",
    "relativePotencyVsD9": 3,
    "psychoactive": true,
    "alkylChainLength": "2-(Isopropylamino)-2-(3-methoxyphenyl)cyclohexan-1-one",
    "cypEnzymes": [
      "CYP3A4"
    ],
    "primaryMetabolite": "Nor-MXiPr",
    "immunoassayCrossReactivityPct": 15,
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
      15,
      35
    ],
    "oralDurationHours": [
      3,
      5
    ],
    "baseOralThresholdMg": 4,
    "baseInhaledThresholdMg": 2.5,
    "radarProfile": {
      "cb1AffinityScore": 92,
      "euphoriaPotency": 95,
      "somaticSedation": 80,
      "anxiogenicRisk": 34,
      "durationPersistence": 38,
      "lipidRetention": 28
    },
    "summary": "Branched N-isopropyl isomer of MXPr. Highly celebrated for having a brisk, intensely visual, slightly strange and alien psychedelic hole experience with profound music enhancement.",
    "pharmacologyNotes": "Slightly shorter, more intense peak than MXPr.",
    "specificHazards": [
      "Disorientation and speech slurring during the 90-minute peak."
    ],
    "sideEffects": [
      {
        "effect": "Vibrant Psychedelic Geometry, Alien Dissociation & Music Rush",
        "system": "Psychiatric",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Branched N-Isopropyl Analog of MXE (High-Potency NMDA Blocker with Psychedelic Undertones)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · MXiPr",
      "source": "PubChem CID 145721939",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/145721939"
    }
  },
  {
    "id": "dmxe",
    "name": "DMXE (Deoxymethoxetamine · 3-Methyl-2-Oxo-PCE)",
    "shortName": "DMXE",
    "synonyms": [
      "3-Me-2-Oxo-PCE",
      "Deoxymethoxetamine"
    ],
    "classification": "Dissociative",
    "riskTier": "High",
    "pubchemCid": 145721935,
    "molecularFormula": "C15H21NO",
    "molecularWeight": 231.33,
    "canonicalSmiles": "CCNC1(CCCCC1=O)C2=CC(=CC=C2)C",
    "xLogP": 2.7,
    "cb1KiNm": 0.4,
    "cb2KiNm": 0,
    "cb1Efficacy": "Designer NMDA Antagonist (Methyl Bioisostere of Methoxetamine — Warm & Musical)",
    "cb2Efficacy": "3-Methyl-2-Oxo Arylcyclohexylamine",
    "relativePotencyVsD9": 2.8,
    "psychoactive": true,
    "alkylChainLength": "2-(Ethylamino)-2-(3-methylphenyl)cyclohexan-1-one",
    "cypEnzymes": [
      "CYP3A4",
      "CYP2B6"
    ],
    "primaryMetabolite": "Nor-DMXE",
    "immunoassayCrossReactivityPct": 15,
    "terminalHalfLifeHours": 4,
    "inhaledOnsetMinutes": [
      5,
      15
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
      3.5,
      6
    ],
    "baseOralThresholdMg": 5,
    "baseInhaledThresholdMg": 3,
    "radarProfile": {
      "cb1AffinityScore": 90,
      "euphoriaPotency": 94,
      "somaticSedation": 82,
      "anxiogenicRisk": 25,
      "durationPersistence": 42,
      "lipidRetention": 26
    },
    "summary": "Direct methyl bioisostere of MXE where the 3-methoxy is replaced by a 3-methyl group. Successfully captures MXE’s warm, glowing bodily euphoria, music enhancement, and colorful hole experience.",
    "pharmacologyNotes": "Smooth 3.5–5 hour duration.",
    "specificHazards": [
      "Motor ataxia and redose cravings."
    ],
    "sideEffects": [
      {
        "effect": "Warm Musical Dissociative Glow, Visual Shimmer & MXE Nostalgia",
        "system": "Psychiatric",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Designer NMDA Antagonist (Methyl Bioisostere of Methoxetamine — Warm & Musical)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · DMXE",
      "source": "PubChem CID 145721935",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/145721935"
    }
  },
  {
    "id": "hxe",
    "name": "HXE (Hydroxetamine · 3-HO-2-Oxo-PCE)",
    "shortName": "HXE",
    "synonyms": [
      "Hydroxetamine",
      "3-HO-2-Oxo-PCE"
    ],
    "classification": "Dissociative",
    "riskTier": "High",
    "pubchemCid": 145721940,
    "molecularFormula": "C14H19NO2",
    "molecularWeight": 233.31,
    "canonicalSmiles": "CCNC1(CCCCC1=O)C2=CC(=CC=C2)O",
    "xLogP": 1.8,
    "cb1KiNm": 0.5,
    "cb2KiNm": 0,
    "cb1Efficacy": "Phenolic Hydroxy Analog of MXE (Direct Phase II Glucuronidation Pathway)",
    "cb2Efficacy": "3-Hydroxy-2-Oxo PCE",
    "relativePotencyVsD9": 2.5,
    "psychoactive": true,
    "alkylChainLength": "2-(Ethylamino)-2-(3-hydroxyphenyl)cyclohexan-1-one",
    "cypEnzymes": [
      "UGT2B7"
    ],
    "primaryMetabolite": "HXE-Glucuronide",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 4,
    "inhaledOnsetMinutes": [
      5,
      15
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
      3.5,
      6
    ],
    "baseOralThresholdMg": 8,
    "baseInhaledThresholdMg": 5,
    "radarProfile": {
      "cb1AffinityScore": 86,
      "euphoriaPotency": 90,
      "somaticSedation": 86,
      "anxiogenicRisk": 22,
      "durationPersistence": 38,
      "lipidRetention": 20
    },
    "summary": "Phenolic 3-hydroxy analog and direct active metabolite bioisostere of MXE. Cleared via direct Phase II glucuronidation, delivering a warm, velvety, physical body numbness with lower mania risk.",
    "pharmacologyNotes": "Direct UGT clearance avoids CYP bottlenecks.",
    "specificHazards": [
      "Motor sluggishness at high doses."
    ],
    "sideEffects": [
      {
        "effect": "Velvety Body Numbness, Warmth & Low-Mania Dissociation",
        "system": "Psychiatric",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Phenolic Hydroxy Analog of MXE (Direct Phase II Glucuronidation Pathway)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · HXE",
      "source": "PubChem CID 145721940",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/145721940"
    }
  },
  {
    "id": "fxe",
    "name": "FXE (Fluorexetamine · 3-Fluoro-2-Oxo-PCE)",
    "shortName": "FXE",
    "synonyms": [
      "3-F-2-Oxo-PCE",
      "Fluoroketamine Analog"
    ],
    "classification": "Dissociative",
    "riskTier": "High",
    "pubchemCid": 154729940,
    "molecularFormula": "C14H18FNO",
    "molecularWeight": 235.3,
    "canonicalSmiles": "CCNC1(CCCCC1=O)C2=CC(=CC=C2)F",
    "xLogP": 2.4,
    "cb1KiNm": 0.5,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent NMDA Receptor Blocker (3-Fluoro Analog of MXE / 2-Oxo-PCE)",
    "cb2Efficacy": "meta-Fluorinated 2-Oxo PCE",
    "relativePotencyVsD9": 2.5,
    "psychoactive": true,
    "alkylChainLength": "2-(Ethylamino)-2-(3-fluorophenyl)cyclohexan-1-one",
    "cypEnzymes": [
      "CYP3A4"
    ],
    "primaryMetabolite": "Nor-FXE",
    "immunoassayCrossReactivityPct": 15,
    "terminalHalfLifeHours": 4,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      2.5,
      4
    ],
    "oralOnsetMinutes": [
      20,
      40
    ],
    "oralDurationHours": [
      3.5,
      6
    ],
    "baseOralThresholdMg": 8,
    "baseInhaledThresholdMg": 5,
    "radarProfile": {
      "cb1AffinityScore": 88,
      "euphoriaPotency": 90,
      "somaticSedation": 80,
      "anxiogenicRisk": 28,
      "durationPersistence": 40,
      "lipidRetention": 25
    },
    "summary": "3-Fluorinated analog of 2-oxo-PCE (\"Fluorexetamine\"). Rapidly became a crowd favorite for having a brisk, sparkling, highly euphoric onset with vibrant closed-eye visuals and an easy, functional landing.",
    "pharmacologyNotes": "Often distributed with trace stimulant stimulants in illicit markets.",
    "specificHazards": [
      "Check purity; motor clumsiness at hole doses."
    ],
    "sideEffects": [
      {
        "effect": "Sparkling Euphoric Dissociation, Music Immersion & Bright Colors",
        "system": "Psychiatric",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Potent NMDA Receptor Blocker (3-Fluoro Analog of MXE / 2-Oxo-PCE)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · FXE",
      "source": "PubChem CID 154729940",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/154729940"
    }
  },
  {
    "id": "dxm",
    "name": "Dextromethorphan (DXM · Robitussin · Morphinan Dissociative)",
    "shortName": "Dextromethorphan (DXM)",
    "synonyms": [
      "Robo",
      "Dextro",
      "Dex",
      "Triple C",
      "DXM"
    ],
    "classification": "Dissociative",
    "riskTier": "High",
    "pubchemCid": 5360696,
    "molecularFormula": "C18H25NO",
    "molecularWeight": 271.4,
    "canonicalSmiles": "CN1CCC23CCCCC2C1CC4=C3C=C(C=C4)OC",
    "xLogP": 3.8,
    "cb1KiNm": 1.2,
    "cb2KiNm": 0,
    "cb1Efficacy": "Dual Prodrug (Weak SERT/Sigma-1 Agonist → Metabolized by CYP2D6 into Potent NMDA Blocker Dextrorphan / DXO)",
    "cb2Efficacy": "Archetypal Morphinan Dissociative",
    "relativePotencyVsD9": 1,
    "psychoactive": true,
    "alkylChainLength": "(4bS,8aR,9S)-3-Methoxy-11-methyl-6,7,8,8a,9,10-hexahydro-5H-9,4b-(epiminoethano)phenanthrene",
    "cypEnzymes": [
      "CYP2D6 (O-Demethylation to DXO)",
      "CYP3A4"
    ],
    "primaryMetabolite": "Dextrorphan (DXO — High-Affinity NMDA Blocker)",
    "immunoassayCrossReactivityPct": 15,
    "terminalHalfLifeHours": 4,
    "inhaledOnsetMinutes": [
      20,
      45
    ],
    "inhaledDurationHours": [
      4,
      7
    ],
    "oralOnsetMinutes": [
      30,
      90
    ],
    "oralDurationHours": [
      5,
      9
    ],
    "baseOralThresholdMg": 30,
    "baseInhaledThresholdMg": 30,
    "radarProfile": {
      "cb1AffinityScore": 78,
      "euphoriaPotency": 84,
      "somaticSedation": 74,
      "anxiogenicRisk": 55,
      "durationPersistence": 65,
      "lipidRetention": 36
    },
    "summary": "Classic OTC antitussive morphinan (Robitussin). Ingested orally, it is O-demethylated via CYP2D6 into dextrorphan (DXO), which potently blocks NMDA receptors while parent DXM blocks serotonin reuptake (SERT) and activates sigma-1 receptors. Famous for its distinct dose-dependent \"Plateaus\" (1st to 4th).",
    "pharmacologyNotes": "CYP2D6 poor metabolizers experience prolonged, dysphoric serotonergic intoxication.",
    "specificHazards": [
      "LETHAL SEROTONIN SYNDROME: Never combine DXM with MAOIs, SSRIs, or MDMA. Avoid formulations containing acetaminophen, chlorpheniramine, or guaifenesin."
    ],
    "sideEffects": [
      {
        "effect": "Robowalk Ataxia, Flanging Audio, Euphoria & Distinct Plateau Levels",
        "system": "Psychiatric",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Dual Prodrug (Weak SERT/Sigma-1 Agonist → Metabolized by CYP2D6 into Potent NMDA Blocker Dextrorphan / DXO)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Dextromethorphan (DXM)",
      "source": "PubChem CID 5360696",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/5360696"
    }
  },
  {
    "id": "memantine",
    "name": "Memantine (Namenda · Ebixa · Low-Affinity Voltage-Dependent NMDA Antagonist)",
    "shortName": "Memantine",
    "synonyms": [
      "Namenda",
      "Ebixa",
      "Axura"
    ],
    "classification": "Dissociative",
    "riskTier": "Low",
    "pubchemCid": 4054,
    "molecularFormula": "C12H21N",
    "molecularWeight": 179.3,
    "canonicalSmiles": "CC12CC3CC(C1)(CC(C3)(C2)N)C",
    "xLogP": 3.3,
    "cb1KiNm": 15,
    "cb2KiNm": 0,
    "cb1Efficacy": "Low-Affinity Uncompetitive Open-Channel NMDA Blocker (Rapid Off-Rate; Spares Physiological Signaling)",
    "cb2Efficacy": "Adamantane Neuroprotective NMDA Antagonist",
    "relativePotencyVsD9": 0.5,
    "psychoactive": true,
    "alkylChainLength": "3,5-Dimethyladamantan-1-amine",
    "cypEnzymes": [
      "Renal Excretion (>80% Unchanged)"
    ],
    "primaryMetabolite": "Direct Renal Excretion",
    "immunoassayCrossReactivityPct": 0,
    "terminalHalfLifeHours": 70,
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
      150
    ],
    "oralDurationHours": [
      24,
      72
    ],
    "baseOralThresholdMg": 5,
    "baseInhaledThresholdMg": 5,
    "radarProfile": {
      "cb1AffinityScore": 45,
      "euphoriaPotency": 55,
      "somaticSedation": 35,
      "anxiogenicRisk": 22,
      "durationPersistence": 98,
      "lipidRetention": 35
    },
    "summary": "Adamantane derivative prescribed for Alzheimer’s dementia (Namenda). Unlike PCP or ketamine, memantine has a fast off-rate from the NMDA receptor channel, blocking pathological tonic glutamate excitotoxicity while preserving normal physiological synaptic transmission.",
    "pharmacologyNotes": "Immense 60–80 hour elimination half-life.",
    "specificHazards": [
      "Recreational doses (50–100 mg) cause prolonged 24–48 hour mild dissociation and insomnia."
    ],
    "sideEffects": [
      {
        "effect": "Clean Neuroprotective Anxiolysis, Brain Fog Relief & Marathon Arc",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Low-Affinity Uncompetitive Open-Channel NMDA Blocker (Rapid Off-Rate; Spares Physiological Signaling)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Memantine",
      "source": "PubChem CID 4054",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/4054"
    }
  },
  {
    "id": "nitrous-oxide",
    "name": "Nitrous Oxide (Lachgas · N2O · Whippets · Laughing Gas)",
    "shortName": "Nitrous Oxide",
    "synonyms": [
      "Lachgas",
      "Whippets",
      "Nos",
      "Laughing Gas",
      "N2O"
    ],
    "classification": "Dissociative",
    "riskTier": "High",
    "pubchemCid": 948,
    "molecularFormula": "N2O",
    "molecularWeight": 44.01,
    "canonicalSmiles": "[N-]=[N+]=O",
    "xLogP": 0.4,
    "cb1KiNm": 25000,
    "cb2KiNm": 0,
    "cb1Efficacy": "Non-Competitive NMDA Antagonist + GABAA Enhancer & Endogenous Dynorphin/Opioid Releaser",
    "cb2Efficacy": "Inhalational Anesthetic Gas",
    "relativePotencyVsD9": 1,
    "psychoactive": true,
    "alkylChainLength": "Nitrous oxide",
    "cypEnzymes": [
      "Exhaled Unchanged via Lungs (>99%)"
    ],
    "primaryMetabolite": "Exhaled Intact (Oxidizes Vitamin B12 Cobalt)",
    "immunoassayCrossReactivityPct": 0,
    "terminalHalfLifeHours": 0.05,
    "inhaledOnsetMinutes": [
      0.1,
      0.3
    ],
    "inhaledDurationHours": [
      0.03,
      0.08
    ],
    "oralOnsetMinutes": [
      0.1,
      0.3
    ],
    "oralDurationHours": [
      0.03,
      0.08
    ],
    "baseOralThresholdMg": 8000,
    "baseInhaledThresholdMg": 8000,
    "radarProfile": {
      "cb1AffinityScore": 78,
      "euphoriaPotency": 96,
      "somaticSedation": 90,
      "anxiogenicRisk": 12,
      "durationPersistence": 2,
      "lipidRetention": 4
    },
    "summary": "Inhaled anesthetic gas (N2O / \"Whippets\"). Inhaled from balloons or dispensers, it dissolves into arterial blood instantly, producing a 60–90 second burst of overwhelming vibrating euphoria, auditory wah-wah flanging, laughing hysteria, and complete bodily tingling.",
    "pharmacologyNotes": "Clears completely through exhalation in 3–5 minutes.",
    "specificHazards": [
      "IRREVERSIBLE VITAMIN B12 INACTIVATION & NEUROPATHY: Irreversibly oxidizes the cobalt core of Vitamin B12. Chronic daily use causes subacute combined spinal cord degeneration and paralysis. Never inhale directly from pressurized tanks!"
    ],
    "sideEffects": [
      {
        "effect": "60-Second \"Wah-Wah\" Auditory Vibrations, Ecstatic Laughing Euphoria & Body Tingling",
        "system": "Pulmonary",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Non-Competitive NMDA Antagonist + GABAA Enhancer & Endogenous Dynorphin/Opioid Releaser"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Nitrous Oxide",
      "source": "PubChem CID 948",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/948"
    }
  },
  {
    "id": "xenon",
    "name": "Xenon (Noble Gas General Anesthetic · Neuroprotective NMDA Blocker)",
    "shortName": "Xenon",
    "synonyms": [
      "Noble Gas Anesthetic"
    ],
    "classification": "Dissociative",
    "riskTier": "Moderate",
    "pubchemCid": 23991,
    "molecularFormula": "Xe",
    "molecularWeight": 131.29,
    "canonicalSmiles": "[Xe]",
    "xLogP": 1.3,
    "cb1KiNm": 18000,
    "cb2KiNm": 0,
    "cb1Efficacy": "Pure Competitive NMDA Antagonist (Glycine Site Blocker) + TREK-1 Potassium Channel Activator",
    "cb2Efficacy": "Inert Noble Gas Anesthetic",
    "relativePotencyVsD9": 1.2,
    "psychoactive": true,
    "alkylChainLength": "Elemental Xenon Gas",
    "cypEnzymes": [
      "Exhaled Intact (>99.9%)"
    ],
    "primaryMetabolite": "Completely Inert (Exhaled Intact)",
    "immunoassayCrossReactivityPct": 0,
    "terminalHalfLifeHours": 0.03,
    "inhaledOnsetMinutes": [
      0.1,
      0.3
    ],
    "inhaledDurationHours": [
      0.05,
      0.12
    ],
    "oralOnsetMinutes": [
      0.1,
      0.3
    ],
    "oralDurationHours": [
      0.05,
      0.12
    ],
    "baseOralThresholdMg": 15000,
    "baseInhaledThresholdMg": 15000,
    "radarProfile": {
      "cb1AffinityScore": 75,
      "euphoriaPotency": 92,
      "somaticSedation": 94,
      "anxiogenicRisk": 8,
      "durationPersistence": 3,
      "lipidRetention": 12
    },
    "summary": "Naturally occurring noble gas that functions as an ideal, non-toxic inhalational anesthetic. Competitively blocks the NMDA glycine site and activates TREK-1 potassium channels, producing warm, peaceful dissociation without neurotoxicity or cardiac depression.",
    "pharmacologyNotes": "Completely chemically inert; exhaled unchanged.",
    "specificHazards": [
      "Heavy gas lowers voice pitch; requires co-administration with oxygen to prevent hypoxia."
    ],
    "sideEffects": [
      {
        "effect": "Pure Warm Noble-Gas Dissociation & Voice Deepening",
        "system": "Pulmonary",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Pure Competitive NMDA Antagonist (Glycine Site Blocker) + TREK-1 Potassium Channel Activator"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Xenon",
      "source": "PubChem CID 23991",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/23991"
    }
  },
  {
    "id": "diethyl-ether",
    "name": "Diethyl Ether (Ether · Sweet Vitriol · Historic Surgical Inhalant)",
    "shortName": "Diethyl Ether",
    "synonyms": [
      "Ether",
      "Ethane, 1,1'-oxybis-"
    ],
    "classification": "Dissociative",
    "riskTier": "High",
    "pubchemCid": 3283,
    "molecularFormula": "C4H10O",
    "molecularWeight": 74.12,
    "canonicalSmiles": "CCOCC",
    "xLogP": 0.9,
    "cb1KiNm": 8000,
    "cb2KiNm": 0,
    "cb1Efficacy": "GABAA PAM + Glycine Receptor Activator + NMDA Antagonist + 2P Potassium Opener",
    "cb2Efficacy": "Historic Volatile Surgical Anesthetic",
    "relativePotencyVsD9": 0.8,
    "psychoactive": true,
    "alkylChainLength": "1,1'-Oxybisethane",
    "cypEnzymes": [
      "Exhaled via Lungs (>90%)",
      "CYP2E1"
    ],
    "primaryMetabolite": "Ethanol & Acetic Acid",
    "immunoassayCrossReactivityPct": 0,
    "terminalHalfLifeHours": 0.5,
    "inhaledOnsetMinutes": [
      0.5,
      1.5
    ],
    "inhaledDurationHours": [
      0.25,
      0.5
    ],
    "oralOnsetMinutes": [
      1,
      3
    ],
    "oralDurationHours": [
      0.5,
      1
    ],
    "baseOralThresholdMg": 2000,
    "baseInhaledThresholdMg": 2000,
    "radarProfile": {
      "cb1AffinityScore": 70,
      "euphoriaPotency": 84,
      "somaticSedation": 92,
      "anxiogenicRisk": 18,
      "durationPersistence": 8,
      "lipidRetention": 16
    },
    "summary": "Historic surgical anesthetic first used by Crawford Long and William Morton in the 1840s (\"Sweet Vitriol\"). Inhaled from a rag or mask, it enhances GABAA and glycine currents while blocking NMDA receptors, producing an intensely intoxicating, drunken, disorienting dissociative state.",
    "pharmacologyNotes": "Highly volatile and extremely flammable.",
    "specificHazards": [
      "EXTREME FIRE/EXPLOSION HAZARD: Heavy vapors pool on floors and ignite from static electricity; severe sweet-pungent breath for 24 hours."
    ],
    "sideEffects": [
      {
        "effect": "Drunken Dreamy Stupor, Pungent Sweet Aroma & Extreme Flammability",
        "system": "Pulmonary",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "GABAA PAM + Glycine Receptor Activator + NMDA Antagonist + 2P Potassium Opener"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Diethyl Ether",
      "source": "PubChem CID 3283",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/3283"
    }
  },
  {
    "id": "amyl-nitrite",
    "name": "Amyl Nitrite (Poppers · Isoamyl Nitrite · Snappers)",
    "shortName": "Amyl Nitrite (Poppers)",
    "synonyms": [
      "Poppers",
      "Snappers",
      "Amyl",
      "Isoamyl Nitrite"
    ],
    "classification": "Dissociative",
    "riskTier": "Moderate",
    "pubchemCid": 10185,
    "molecularFormula": "C5H11NO2",
    "molecularWeight": 117.15,
    "canonicalSmiles": "CC(C)CCONO",
    "xLogP": 1.8,
    "cb1KiNm": 15000,
    "cb2KiNm": 0,
    "cb1Efficacy": "Nitric Oxide (NO) Donor → Vascular Smooth Muscle Guanylyl Cyclase Activation (Rapid Vasodilation)",
    "cb2Efficacy": "Volatile Alkyl Nitrite Vasodilator",
    "relativePotencyVsD9": 0.8,
    "psychoactive": true,
    "alkylChainLength": "3-Methylbutyl nitrite",
    "cypEnzymes": [
      "Red Blood Cell Esterases / Glutathione Transferase"
    ],
    "primaryMetabolite": "Isoamyl Alcohol & Nitrite Ion",
    "immunoassayCrossReactivityPct": 0,
    "terminalHalfLifeHours": 0.05,
    "inhaledOnsetMinutes": [
      0.1,
      0.2
    ],
    "inhaledDurationHours": [
      0.03,
      0.08
    ],
    "oralOnsetMinutes": [
      0.1,
      0.2
    ],
    "oralDurationHours": [
      0.03,
      0.08
    ],
    "baseOralThresholdMg": 100,
    "baseInhaledThresholdMg": 100,
    "radarProfile": {
      "cb1AffinityScore": 60,
      "euphoriaPotency": 86,
      "somaticSedation": 45,
      "anxiogenicRisk": 25,
      "durationPersistence": 2,
      "lipidRetention": 10
    },
    "summary": "Classic volatile alkyl nitrite (\"Poppers\" / \"Snappers\"). Inhaling the sweet fruity vapor releases nitric oxide (NO) directly into pulmonary capillaries, causing instantaneous vascular smooth muscle relaxation, dramatic drop in blood pressure, intense facial flush, anal/vaginal sphincter relaxation, and a 60-second euphoric head rush.",
    "pharmacologyNotes": "Metabolized within 60 seconds.",
    "specificHazards": [
      "LETHAL PDE5 INHIBITOR INTERACTION: Combining poppers with Viagra (sildenafil) or Cialis causes catastrophic, fatal cardiovascular collapse.",
      "Risk of methemoglobinemia on excessive inhalation."
    ],
    "sideEffects": [
      {
        "effect": "Instantaneous 60-Second Head Rush, Facial Flushing & Sphincter Relaxation",
        "system": "Cardiovascular",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Nitric Oxide (NO) Donor → Vascular Smooth Muscle Guanylyl Cyclase Activation (Rapid Vasodilation)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Amyl Nitrite (Poppers)",
      "source": "PubChem CID 10185",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/10185"
    }
  },
  {
    "id": "isobutyl-nitrite",
    "name": "Isobutyl Nitrite (Modern Poppers · Rush · Jungle Juice)",
    "shortName": "Isobutyl Nitrite",
    "synonyms": [
      "Rush",
      "Jungle Juice",
      "Hardware Cleaner"
    ],
    "classification": "Dissociative",
    "riskTier": "Moderate",
    "pubchemCid": 10995,
    "molecularFormula": "C4H9NO2",
    "molecularWeight": 103.12,
    "canonicalSmiles": "CC(C)CONO",
    "xLogP": 1.5,
    "cb1KiNm": 16000,
    "cb2KiNm": 0,
    "cb1Efficacy": "Vascular Smooth Muscle Relaxant (Direct Nitric Oxide Donor → cGMP Vasodilation)",
    "cb2Efficacy": "Commercial Alkyl Nitrite \"Video Head Cleaner\"",
    "relativePotencyVsD9": 0.8,
    "psychoactive": true,
    "alkylChainLength": "2-Methylpropyl nitrite",
    "cypEnzymes": [
      "Serum Esterases"
    ],
    "primaryMetabolite": "Isobutanol & Nitrite",
    "immunoassayCrossReactivityPct": 0,
    "terminalHalfLifeHours": 0.05,
    "inhaledOnsetMinutes": [
      0.1,
      0.2
    ],
    "inhaledDurationHours": [
      0.03,
      0.08
    ],
    "oralOnsetMinutes": [
      0.1,
      0.2
    ],
    "oralDurationHours": [
      0.03,
      0.08
    ],
    "baseOralThresholdMg": 100,
    "baseInhaledThresholdMg": 100,
    "radarProfile": {
      "cb1AffinityScore": 60,
      "euphoriaPotency": 84,
      "somaticSedation": 42,
      "anxiogenicRisk": 25,
      "durationPersistence": 2,
      "lipidRetention": 10
    },
    "summary": "Primary chemical constituent of commercial retail poppers (\"Rush\" / \"Jungle Juice\"). Provides a brisk, warm 60-second head rush, sensory intensification, and smooth muscle relaxation.",
    "pharmacologyNotes": "Rapidly cleared by serum esterases.",
    "specificHazards": [
      "Fatal hypotension when combined with PDE5 inhibitors (Viagra)."
    ],
    "sideEffects": [
      {
        "effect": "60-Second Head Rush & Smooth Muscle Relaxation",
        "system": "Cardiovascular",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Vascular Smooth Muscle Relaxant (Direct Nitric Oxide Donor → cGMP Vasodilation)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Isobutyl Nitrite",
      "source": "PubChem CID 10995",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/10995"
    }
  },
  {
    "id": "butyl-nitrite",
    "name": "Butyl Nitrite (n-Butyl Nitrite · Classic Leather Cleaner Poppers)",
    "shortName": "Butyl Nitrite",
    "synonyms": [
      "n-Butyl Nitrite"
    ],
    "classification": "Dissociative",
    "riskTier": "Moderate",
    "pubchemCid": 8027,
    "molecularFormula": "C4H9NO2",
    "molecularWeight": 103.12,
    "canonicalSmiles": "CCCCONO",
    "xLogP": 1.6,
    "cb1KiNm": 16000,
    "cb2KiNm": 0,
    "cb1Efficacy": "Direct Nitric Oxide Donor & Smooth Muscle Relaxant",
    "cb2Efficacy": "Linear Alkyl Nitrite Inhalant",
    "relativePotencyVsD9": 0.8,
    "psychoactive": true,
    "alkylChainLength": "Butyl nitrite",
    "cypEnzymes": [
      "Serum Esterases"
    ],
    "primaryMetabolite": "1-Butanol & Nitrite",
    "immunoassayCrossReactivityPct": 0,
    "terminalHalfLifeHours": 0.05,
    "inhaledOnsetMinutes": [
      0.1,
      0.2
    ],
    "inhaledDurationHours": [
      0.03,
      0.08
    ],
    "oralOnsetMinutes": [
      0.1,
      0.2
    ],
    "oralDurationHours": [
      0.03,
      0.08
    ],
    "baseOralThresholdMg": 100,
    "baseInhaledThresholdMg": 100,
    "radarProfile": {
      "cb1AffinityScore": 60,
      "euphoriaPotency": 82,
      "somaticSedation": 40,
      "anxiogenicRisk": 25,
      "durationPersistence": 2,
      "lipidRetention": 10
    },
    "summary": "Straight-chain four-carbon alkyl nitrite providing rapid vascular relaxation.",
    "pharmacologyNotes": "Cleared in seconds.",
    "specificHazards": [
      "Dangerous hypotension with ED medications."
    ],
    "sideEffects": [
      {
        "effect": "Rapid Vasodilation & 60-Second Head Rush",
        "system": "Cardiovascular",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Direct Nitric Oxide Donor & Smooth Muscle Relaxant"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Butyl Nitrite",
      "source": "PubChem CID 8027",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/8027"
    }
  }
];

export const EXPANDED_RECREATIONAL_PART4 = {
  "esketamine": {
    "physicalFormLabel": "FDA Spravato 28mg Nasal Inhaler or Crystalline Salt",
    "physicalAppearance": "Spravato pre-dosed nasal device or fine crystalline powder.",
    "recreationalFeel": "Feels cleaner, lighter, and more psychedelic than racemic Ketamine—brings a sparkling, weightless dissociation with crisp geometric visuals and an immediate lifting of mental heaviness.",
    "subjectiveTags": [
      "3.0 mg Nasal / 15 mg Oral Threshold",
      "2× NMDA Binding Affinity vs Racemic Ketamine",
      "FDA-Approved Spravato Nasal Spray",
      "Fast 45–60 Min Acute Plateau"
    ],
    "phases": {
      "onsetFeel": "2–4 minutes (nasal) into a feeling of bodily weightlessness.",
      "peakFeel": "45–60 minutes of lucid dissociative float, geometric textures, and perspective shifts.",
      "comedownFeel": "Smooth 45-minute landing with a clear, refreshed mood."
    }
  },
  "2-fdck": {
    "physicalFormLabel": "Sugar-Like Clear Crystalline Shards",
    "physicalAppearance": "Translucent sugar-like crystalline shards.",
    "recreationalFeel": "Feels like a warmer, softer, slightly longer-lasting Ketamine that works wonderfully when swallowed orally: gentle bodily numbing, floaty music immersion, and low confusion.",
    "subjectiveTags": [
      "10 mg Nasal / 15 mg Oral Threshold",
      "High Oral Bioavailability vs Ketamine",
      "Warm Cozy Dissociative Body Stone",
      "2–3.5 Hour Duration"
    ],
    "phases": {
      "onsetFeel": "5–15 minutes (nasal) or 25 minutes (oral) into bodily lightness.",
      "peakFeel": "90–120 minutes of warm, drifting dissociation and music depth.",
      "comedownFeel": "Gentle 1-hour descent."
    }
  },
  "dck": {
    "physicalFormLabel": "Dense White/Tan Crystalline Rocks",
    "physicalAppearance": "Hard crystalline chunks or fine white powder.",
    "recreationalFeel": "Produces a deep, velvety, profound hole experience at just 15–25 mg: gravity dissolves, physical limbs vanish into comfortable numbness, and the mind drifts through vast mental landscapes for hours.",
    "subjectiveTags": [
      "2.0 mg Nasal / 3.0 mg Oral Threshold",
      "3–5× Potency vs Ketamine",
      "Long 4–7 Hour Plateau",
      "Deep Immersion at Milligram Doses"
    ],
    "phases": {
      "onsetFeel": "5–10 minutes into heavy limb numbness.",
      "peakFeel": "3–4 hours of profound, silent dissociative space.",
      "comedownFeel": "Slow 2-hour grounding back to baseline."
    }
  },
  "pcp": {
    "physicalFormLabel": "White Crystalline Powder or Smoked \"Dipper\" Mint Leaf",
    "physicalAppearance": "White crystalline powder or liquid soaked onto cigarettes/mint leaves.",
    "recreationalFeel": "Completely erases all physical pain and self-doubt, imbuing the mind with a sense of godlike invulnerability, superhuman stamina, and intense sensory detachment.",
    "subjectiveTags": [
      "0.5 mg Smoked/Nasal / 1.0 mg Oral Threshold",
      "Dual NMDA Blocker + Dopamine Reuptake Inhibitor",
      "Invincible Manic Strength Sensation",
      "Long 6–12 Hour Total Arc"
    ],
    "phases": {
      "onsetFeel": "2–5 minutes into complete bodily numbing.",
      "peakFeel": "4–6 hours of electric, invincible, manic dissociation.",
      "comedownFeel": "Slow 6-hour emergence with lingering stimulation."
    }
  },
  "3-meo-pcp": {
    "physicalFormLabel": "White/Off-White Crystalline Powder",
    "physicalAppearance": "Fine crystalline white powder.",
    "recreationalFeel": "An electric, walking dissociative: unlike the heavy couch-melt of ketamine, 3-MeO-PCP makes you feel weightless, energized, hyper-confident, and buzzing with cosmic insights.",
    "subjectiveTags": [
      "300 µg (0.3 mg) Nasal / 0.5 mg Oral Threshold",
      "Extreme Milligram Potency (1–5 mg Range)",
      "Stimulating \"Walking\" Dissociative",
      "High Manic Psychosis Risk on Binges"
    ],
    "phases": {
      "onsetFeel": "10–20 minute wave of scalp tingling and energy.",
      "peakFeel": "4–6 hours of electric, clear-headed manic euphoria and music depth.",
      "comedownFeel": "Long 4-hour stimulated comedown."
    }
  },
  "4-meo-pcp": {
    "physicalFormLabel": "White/Tan Crystalline Powder",
    "physicalAppearance": "Fluffy off-white powder.",
    "recreationalFeel": "Produces a warm, comfortable, slightly nostalgic dissociative blanket that feels closer to ketamine than PCP, lasting 4–6 hours.",
    "subjectiveTags": [
      "10 mg Nasal / 15 mg Oral Threshold",
      "~1/10th Potency vs PCP",
      "Historic 2008 First RC Dissociative",
      "4–6 Hour Duration"
    ],
    "phases": {
      "onsetFeel": "15–25 minute warm physical easing.",
      "peakFeel": "3–4 hours of relaxed, dreamy dissociation.",
      "comedownFeel": "Smooth 2-hour taper."
    }
  },
  "3-ho-pcp": {
    "physicalFormLabel": "Fluffy White Crystalline Powder",
    "physicalAppearance": "Snow-white crystalline powder.",
    "recreationalFeel": "Combines the warm, cozy physical euphoria of a strong opioid with the floating, dreamlike mental detachment of an arylcyclohexylamine at just 2–5 mg.",
    "subjectiveTags": [
      "300 µg (0.3 mg) Nasal / 0.5 mg Oral Threshold",
      "Dual NMDA Antagonist + μ-Opioid Ligand",
      "Warm Cozy Body Stone vs 3-MeO-PCP",
      "Milligram Precision Scale Required"
    ],
    "phases": {
      "onsetFeel": "10–20 minute warm flush through limbs.",
      "peakFeel": "4–5 hours of cozy, floaty, pain-free dissociative warmth.",
      "comedownFeel": "Smooth, peaceful 2-hour taper."
    }
  },
  "3-me-pcp": {
    "physicalFormLabel": "Dense White Crystalline Solid",
    "physicalAppearance": "White crystalline powder.",
    "recreationalFeel": "Sharp, lucid, and dance-floor friendly: 3–6 mg brings a floating sense of physical agility and vivid musical enjoyment.",
    "subjectiveTags": [
      "0.5 mg Nasal / 1.0 mg Oral Threshold",
      "Crisp Lucid Walking Dissociation",
      "Strong Music Connection",
      "4–6 Hour Active Plateau"
    ],
    "phases": {
      "onsetFeel": "10–20 minute energetic rise.",
      "peakFeel": "3–5 hours of lucid, musical dissociation.",
      "comedownFeel": "3-hour stimulated landing."
    }
  },
  "3-f-pcp": {
    "physicalFormLabel": "White Crystalline Powder",
    "physicalAppearance": "White powder.",
    "recreationalFeel": "A calmer, less manic cousin in the PCP family: provides 4–5 hours of comfortable physical numbness and floating mental calm.",
    "subjectiveTags": [
      "1.0 mg Nasal / 1.5 mg Oral Threshold",
      "Lower Mania Risk than 3-MeO-PCP",
      "Warm Physical Anesthesia",
      "4–6 Hour Duration"
    ],
    "phases": {
      "onsetFeel": "10–20 minute calming numbness.",
      "peakFeel": "3–4 hours of relaxed, spatial dissociation.",
      "comedownFeel": "Gentle 2-hour comedown."
    }
  },
  "pce": {
    "physicalFormLabel": "Fine White Powder",
    "physicalAppearance": "Fine white powder.",
    "recreationalFeel": "Extremely potent: 2–5 mg disconnects the mind completely from physical sensory input into a surreal, alien landscape.",
    "subjectiveTags": [
      "0.5 mg Nasal / 1.0 mg Oral Threshold",
      "1.5× Potency vs PCP",
      "High Catatonic Anesthesia Risk",
      "6–10 Hour Marathon Arc"
    ],
    "phases": {
      "onsetFeel": "5–10 minutes into total sensory disconnection.",
      "peakFeel": "4–6 hours of profound catatonic dissociation.",
      "comedownFeel": "Long 4-hour re-grounding."
    }
  },
  "3-meo-pce": {
    "physicalFormLabel": "White Crystalline Powder",
    "physicalAppearance": "Fluffy white crystalline powder.",
    "recreationalFeel": "Feels like a colorful, lucid, slightly psychedelic cousin of MXE: 5–10 mg brings flowing musical euphoria, sensory enhancement, and sparkling geometric textures.",
    "subjectiveTags": [
      "1.0 mg Nasal / 1.5 mg Oral Threshold",
      "Strong Serotonin Reuptake Blockade",
      "Psychedelic Visual Texture & Warmth",
      "5–8 Hour Total Arc"
    ],
    "phases": {
      "onsetFeel": "15–30 minute warm tingling in hands and spine.",
      "peakFeel": "4–6 hours of lucid, colorful, musical dissociation.",
      "comedownFeel": "Smooth 2-hour landing."
    }
  },
  "o-pce": {
    "physicalFormLabel": "Dense White Crystalline Shards",
    "physicalAppearance": "Translucent glass-like shards or white powder.",
    "recreationalFeel": "Pulls you effortlessly into a silent, zero-gravity, deep-space anesthetic void at just 8–15 mg: thoughts stop, physical sensations vanish, and you drift through pure geometry.",
    "subjectiveTags": [
      "1.0 mg Nasal / 1.5 mg Oral Threshold",
      "Vaporizable Anesthetic Dissociative",
      "Deep Space \"Zero-Gravity\" Hole",
      "Long 5–8 Hour Duration"
    ],
    "phases": {
      "onsetFeel": "3–8 minutes (nasal/vaped) into weightless stillness.",
      "peakFeel": "3–4 hours of profound, silent dissociative void.",
      "comedownFeel": "Slow 3-hour gradual reconnect with reality."
    }
  },
  "tiletamine": {
    "physicalFormLabel": "White Crystalline Powder or Reconstituted Solution",
    "physicalAppearance": "White powder or surgical vial.",
    "recreationalFeel": "Produces heavy, rapid physical anesthesia within minutes, leading into an unmoving, silent dissociative hole.",
    "subjectiveTags": [
      "2.5 mg Nasal / 5.0 mg Oral Threshold",
      "~2.5× Potency vs Ketamine",
      "Veterinary Telazol Anesthetic Component",
      "3–5 Hour Duration"
    ],
    "phases": {
      "onsetFeel": "5–10 minutes into heavy anesthesia.",
      "peakFeel": "2–3 hours of deep, unmoving dissociative void.",
      "comedownFeel": "1.5-hour recovery."
    }
  },
  "ephenidine": {
    "physicalFormLabel": "White Crystalline Powder or 50mg Pellets",
    "physicalAppearance": "Fine white crystalline powder or pressed pellets.",
    "recreationalFeel": "Renowned for its crystal-clear mental lucidity: 50–100 mg orally produces 6–8 hours of serene, peaceful, philosophical detachment without mental confusion or slurred thinking.",
    "subjectiveTags": [
      "15 mg Nasal / 20 mg Oral Threshold (50–100 mg Standard)",
      "Non-Arylcyclohexylamine Diarylethylamine Structure",
      "Crystal-Clear Philosophical Lucidity",
      "6–10 Hour Marathon Plateau"
    ],
    "phases": {
      "onsetFeel": "30–60 minute gradual lifting of physical weight.",
      "peakFeel": "4–6 hours of profound, peaceful, lucid philosophical immersion.",
      "comedownFeel": "Gentle 3-hour glow into sleep."
    }
  },
  "diphenidine": {
    "physicalFormLabel": "Fluffy White Crystalline Powder",
    "physicalAppearance": "White powder with a faint amine odor.",
    "recreationalFeel": "Hits in 10 seconds when vaporized with an intense buzzing dissociative rush, vibrating auditory echoes, and physical floating.",
    "subjectiveTags": [
      "10 mg Vaped / 15 mg Oral Threshold",
      "Instantaneous 10-Second Vaped Flash",
      "Distinct Flanging Audio Distortions",
      "Severe Short-Term Memory Gaps"
    ],
    "phases": {
      "onsetFeel": "Under 30 seconds (vaped) or 30 min (oral).",
      "peakFeel": "2–3 hours of heavy, buzzing dissociative detachment.",
      "comedownFeel": "Clean 1.5-hour taper."
    }
  },
  "mxp": {
    "physicalFormLabel": "White Powder or 50mg Pellets",
    "physicalAppearance": "Fine white crystalline powder.",
    "recreationalFeel": "Takes a full hour to develop orally, blooming into a peaceful, floaty 6-hour dissociative space with rich music appreciation.",
    "subjectiveTags": [
      "10 mg Nasal / 15 mg Oral Threshold",
      "Slow 60-Minute Oral Build",
      "5–8 Hour Peaceful Dissociation",
      "Lower Amnesia than Diphenidine"
    ],
    "phases": {
      "onsetFeel": "45–75 minute gradual onset.",
      "peakFeel": "3–5 hours of spacious, peaceful dissociation.",
      "comedownFeel": "Slow 2-hour fade."
    }
  },
  "mxe": {
    "physicalFormLabel": "Fine White Fluffy Crystalline Powder",
    "physicalAppearance": "Fluffy snow-white powder with a sweet-chemical taste.",
    "recreationalFeel": "Widely considered the holy grail of dissociatives: wraps the body in a warm golden blanket while the mind floats into an awe-inspiring, deeply spiritual, and colorful \"M-Hole\" filled with emotional healing.",
    "subjectiveTags": [
      "3.0 mg Nasal / 5.0 mg Oral Threshold",
      "Golden-Age Designer Dissociative",
      "Profound Emotional Healing & M-Hole",
      "4–6 Hour Perfect Arc"
    ],
    "phases": {
      "onsetFeel": "10–20 minute wave of tingling warmth.",
      "peakFeel": "3–4 hours of awe-inspiring, colorful, therapeutic M-Hole float.",
      "comedownFeel": "Gently glowing 2-hour landing with zero hangover."
    }
  },
  "mxpr": {
    "physicalFormLabel": "White/Cream Crystalline Powder",
    "physicalAppearance": "White to off-white crystalline solid.",
    "recreationalFeel": "Warm, gooey, and musical: 20–35 mg brings a comfortable physical melt, glowing closed-eye geometric visuals, and rich music depth for 3–5 hours.",
    "subjectiveTags": [
      "3.0 mg Nasal / 5.0 mg Oral Threshold",
      "N-Propyl MXE Homolog",
      "Warm Cozy Physical Body High",
      "3.5–5.5 Hour Total Arc"
    ],
    "phases": {
      "onsetFeel": "10–20 minute warm onset.",
      "peakFeel": "2.5–3.5 hours of cozy, musical dissociation.",
      "comedownFeel": "Smooth 1.5-hour taper."
    }
  },
  "mxipr": {
    "physicalFormLabel": "White/Off-White Powder",
    "physicalAppearance": "Fine white crystalline powder.",
    "recreationalFeel": "Hits with a rush of intense, sparkling visual geometry and surreal mental immersion—feels slightly more psychedelic and kaleidoscopic than MXE.",
    "subjectiveTags": [
      "2.5 mg Nasal / 4.0 mg Oral Threshold",
      "Branched N-Isopropyl Isomer",
      "Kaleidoscopic Visual Geometry",
      "3–4.5 Hour Duration"
    ],
    "phases": {
      "onsetFeel": "5–15 minute fast rush of color.",
      "peakFeel": "2–3 hours of sparkling, alien, music-saturated dissociation.",
      "comedownFeel": "Clean 1-hour landing."
    }
  },
  "dmxe": {
    "physicalFormLabel": "Sandy Tan/White Crystalline Powder",
    "physicalAppearance": "Off-white to light sandy tan powder.",
    "recreationalFeel": "The closest modern successor to MXE: delivers a warm, cheerful, musical dissociation with vibrant geometric closed-eye visuals and zero cold edge.",
    "subjectiveTags": [
      "3.0 mg Nasal / 5.0 mg Oral Threshold",
      "Direct Methyl Bioisostere of MXE",
      "Warm Glowing Musical Euphoria",
      "3.5–5.5 Hour Total Arc"
    ],
    "phases": {
      "onsetFeel": "10–20 minute warm lift.",
      "peakFeel": "2.5–3.5 hours of colorful, music-drenched dissociative bliss.",
      "comedownFeel": "Smooth 1.5-hour afterglow."
    }
  },
  "hxe": {
    "physicalFormLabel": "Off-White Powder",
    "physicalAppearance": "Off-white powder.",
    "recreationalFeel": "A softer, cozier, very physical cousin of MXE: 30–50 mg provides velvety physical anesthesia, music immersion, and peaceful mental stillness.",
    "subjectiveTags": [
      "5.0 mg Nasal / 8.0 mg Oral Threshold",
      "Phenolic Hydroxy Analog of MXE",
      "Direct Phase II UGT Clearance",
      "Warm Physical Velvet Stone"
    ],
    "phases": {
      "onsetFeel": "10–20 minute warm descent.",
      "peakFeel": "2.5–3.5 hours of soft, velvety dissociative calm.",
      "comedownFeel": "Clean 1-hour taper."
    }
  },
  "fxe": {
    "physicalFormLabel": "Clear Glass-Like Translucent Shards",
    "physicalAppearance": "Sparkling clear crystalline glass shards.",
    "recreationalFeel": "Bright, cheerful, and sparkling: 20–40 mg brings an immediate wave of physical lightness, vivid music immersion, and floaty cartoon-like visuals.",
    "subjectiveTags": [
      "5.0 mg Nasal / 8.0 mg Oral Threshold",
      "Sparkling Visual Textures & Music Lift",
      "2.5–4 Hour Plateau",
      "Smooth Re-Entry"
    ],
    "phases": {
      "onsetFeel": "8–15 minute bright onset.",
      "peakFeel": "2–3 hours of floating musical euphoria and colorful geometry.",
      "comedownFeel": "Gentle 1-hour fade."
    }
  },
  "dxm": {
    "physicalFormLabel": "RoboHbr White Tablets or Cough Syrup Solution",
    "physicalAppearance": "Small white 30 mg freebase/HBr tablets (Robotabs) or viscous red syrup.",
    "recreationalFeel": "Dose-bifurcated into four distinct plateaus: Plat 1 (100–200 mg) feels like warm, buzzy, musical alcohol; Plat 2 (200–400 mg) brings heavy \"robowalk\" drunkenness and closed-eye visuals; Plat 3 (400–800 mg) triggers profound out-of-body dissociation.",
    "subjectiveTags": [
      "30 mg Therapeutic / 100 mg Plateau 1 Threshold",
      "Multi-Plateau Dose Escalation Curve",
      "Active Metabolite is Dextrorphan (DXO)",
      "Severe Serotonin Syndrome Hazard with SSRIs"
    ],
    "phases": {
      "onsetFeel": "30–60 minute warm stomach flutter and rising music depth.",
      "peakFeel": "3–5 hours of heavy \"robowalk\" float, music enhancement, and flanged audio.",
      "comedownFeel": "Gentle 3-hour descent with a glowing next-day afterglow."
    }
  },
  "memantine": {
    "physicalFormLabel": "Small White Round 5mg/10mg Tablets or Solution",
    "physicalAppearance": "White oval scored tablets.",
    "recreationalFeel": "Produces a quiet, lucid, background emotional resilience and subtle float lasting 24–48 hours, clearing obsessive thought loops with zero motor stumbling at low doses.",
    "subjectiveTags": [
      "5.0 mg Therapeutic Threshold (10–20 mg Standard)",
      "Massive 60–80 Hour Half-Life",
      "Fast Off-Rate Spares Normal Synapses",
      "Neuroprotective Anti-Tolerance Tool"
    ],
    "phases": {
      "onsetFeel": "60–120 minute very slow build.",
      "peakFeel": "24+ hours of steady mental calm and emotional detachment.",
      "comedownFeel": "Multi-day lingering taper."
    }
  },
  "nitrous-oxide": {
    "physicalFormLabel": "Steel Cream Charger Bulb (8g N2O) or Blue Cylinders",
    "physicalAppearance": "Small silver 8g steel chargers or large pressurized tanks dispensed into latex balloons.",
    "recreationalFeel": "Hits within 10 seconds of inhaling a balloon: an electric, humming \"wah-wah-wah\" vibration floods hearing, limbs dissolve into warm tingling static, and ecstatic hilarity takes over for 60 golden seconds before reality snaps cleanly back into focus.",
    "subjectiveTags": [
      "8 g (1 standard charger) Inhaled Threshold",
      "Instantaneous 10-Second Onset",
      "60–90 Second Flash Arc",
      "Severe Vitamin B12 Paralysis Risk with Chronic Use"
    ],
    "phases": {
      "onsetFeel": "5–10 seconds into vibrating auditory echoes and tingling.",
      "peakFeel": "45–75 seconds of ecstatic laughter, float, and time-distortion.",
      "comedownFeel": "Clean return to complete baseline within 2–3 minutes."
    }
  },
  "xenon": {
    "physicalFormLabel": "Compressed Gas Cylinder (Noble Gas)",
    "physicalAppearance": "Colorless, odorless heavy gas administered with 30%+ oxygen.",
    "recreationalFeel": "Produces a remarkably clean, velvety, warm physical dissociation within breaths, accompanied by a dramatically deepened voice (due to its high density).",
    "subjectiveTags": [
      "30% Inspired Fraction Threshold",
      "Chemically Inert Noble Gas",
      "Zero Biochemical Toxicity",
      "Rapid 3-Minute Clearance"
    ],
    "phases": {
      "onsetFeel": "15–30 seconds into warm tingling and deep voice.",
      "peakFeel": "2–4 minutes of velvety, peaceful dissociation.",
      "comedownFeel": "Complete recovery within 3 minutes of breathing air."
    }
  },
  "diethyl-ether": {
    "physicalFormLabel": "Clear Volatile Liquid in Amber Glass Bottle",
    "physicalAppearance": "Clear, highly volatile liquid with a penetrating sweet chemical aroma.",
    "recreationalFeel": "Inhaling sweet ether fumes brings an immediate rushing in the ears, floating limb weightlessness, and bizarre dreamlike drunkenness, leaving a sweet chemical taste on the breath for hours.",
    "subjectiveTags": [
      "2.0 mL Inhaled Liquid Threshold",
      "Historic 1840s Surgical Anesthetic",
      "Extreme Flammability & Explosion Risk",
      "20–40 Minute Inhalational Arc"
    ],
    "phases": {
      "onsetFeel": "30–60 seconds into rushing ears and rubbery limbs.",
      "peakFeel": "15–25 minutes of bizarre, floaty, drunken dissociation.",
      "comedownFeel": "Gradual 30-minute recovery with strong ether breath."
    }
  },
  "amyl-nitrite": {
    "physicalFormLabel": "Small Amber Glass Bottle with Fruity Chemical Odor",
    "physicalAppearance": "Amber glass bottle containing sweet, pungent yellow liquid.",
    "recreationalFeel": "Hits within 5 seconds of sniffing the bottle neck: an intense surge of heat rushes to the face, the heart pounds with a thumping beat, muscles melt into complete relaxation, and sensations intensify for 60 to 90 seconds.",
    "subjectiveTags": [
      "0.1 mL Inhaled Vapor Threshold",
      "Instantaneous 5-Second Head Rush",
      "FATAL if Combined with Viagra/Cialis",
      "Rapid 60–90 Second Offset"
    ],
    "phases": {
      "onsetFeel": "5–10 seconds into a rushing thumping heartbeat and facial flush.",
      "peakFeel": "45–75 seconds of warm, floating, sensual euphoria and relaxation.",
      "comedownFeel": "Complete return to baseline in 2 minutes."
    }
  },
  "isobutyl-nitrite": {
    "physicalFormLabel": "Small Amber/Black Glass Bottle",
    "physicalAppearance": "Clear yellow volatile liquid.",
    "recreationalFeel": "Produces an immediate 60-second warm rush with muscle release and intense sensory focus.",
    "subjectiveTags": [
      "0.1 mL Inhaled Threshold",
      "Direct Nitric Oxide Donor",
      "Lethal with PDE5 Inhibitors",
      "60-Second Duration"
    ],
    "phases": {
      "onsetFeel": "5–10 seconds.",
      "peakFeel": "45–60 seconds of warm head rush.",
      "comedownFeel": "Quick 2-minute offset."
    }
  },
  "butyl-nitrite": {
    "physicalFormLabel": "Amber Glass Vial",
    "physicalAppearance": "Volatile yellow liquid.",
    "recreationalFeel": "Produces a warm 60-second vasodilatory head rush and physical relaxation.",
    "subjectiveTags": [
      "0.1 mL Inhaled Threshold",
      "60-Second Flash Arc",
      "Lethal with Viagra",
      "Rapid Offset"
    ],
    "phases": {
      "onsetFeel": "5–10 seconds.",
      "peakFeel": "45–60 seconds.",
      "comedownFeel": "Quick offset."
    }
  }
};
