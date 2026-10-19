import { CannabinoidProfile } from './cannabinoids';

export const EXPANDED_SUBSTANCES_PART5: CannabinoidProfile[] = [
  {
    "id": "lsd-25",
    "name": "LSD-25 (Lysergic Acid Diethylamide · Acid · Lucy)",
    "shortName": "LSD-25",
    "synonyms": [
      "Acid",
      "Lucy",
      "Lysergide",
      "LSD"
    ],
    "classification": "Psychedelic / Hallucinogen",
    "riskTier": "High",
    "pubchemCid": 24601,
    "molecularFormula": "C16H23NO2",
    "molecularWeight": 300,
    "canonicalSmiles": "CCN(CC)C(=O)C1CN(C2CC3=CNC4=CC=CC(=C24)C3=C1)C",
    "xLogP": 2.5,
    "cb1KiNm": 0.1,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent High-Affinity Full Agonist / Allosteric Modulator (Lysergamides)",
    "cb2Efficacy": "Target Receptor Profile",
    "relativePotencyVsD9": 2,
    "psychoactive": true,
    "alkylChainLength": "Lysergamides",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "Active N-dealkylated / Hydroxylated Glucuronide Conjugate",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 3.6,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      2,
      4
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      4,
      8
    ],
    "baseOralThresholdMg": 0.015,
    "baseInhaledThresholdMg": 0.015,
    "radarProfile": {
      "cb1AffinityScore": 100,
      "euphoriaPotency": 100,
      "somaticSedation": 50,
      "anxiogenicRisk": 45,
      "durationPersistence": 29,
      "lipidRetention": 35
    },
    "summary": "Potent synthetic ergoline psychedelic discovered by Albert Hofmann in 1938. 5-HT2A receptor agonist causing profound sensory expansion, synesthesia, and cognitive restructuring.",
    "pharmacologyNotes": "Receptor binding and cellular signaling mediated primarily through Lysergamides pathways. Elimination clearance: 1-3 days (low pg cutoff LC-MS); apparent half-life ~3.6 hours.",
    "specificHazards": [
      "High-affinity compound. Clinical monitoring advised: risk tier classified as High.",
      "Overdose liability: strict adherence to established threshold (0.015 mg oral / 0.015 mg inhaled) is recommended."
    ],
    "sideEffects": [
      {
        "effect": "Dose-dependent central and autonomic modulation (Lysergamides)",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Potent High-Affinity Full Agonist / Allosteric Modulator (Lysergamides)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · LSD-25",
      "source": "PubChem CID 24601",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/24601"
    }
  },
  {
    "id": "1p-lsd",
    "name": "1P-LSD (1-Propionyl-LSD)",
    "shortName": "1P-LSD",
    "synonyms": [
      "1-Propionyl-d-lysergic acid diethylamide",
      "1P"
    ],
    "classification": "Psychedelic / Hallucinogen",
    "riskTier": "High",
    "pubchemCid": 26399,
    "molecularFormula": "C16H23NO2",
    "molecularWeight": 295,
    "canonicalSmiles": "CCN(CC)C(=O)C1CN(C2CC3=CNC4=CC=CC(=C24)C3=C1)C",
    "xLogP": 2.5,
    "cb1KiNm": 10,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent High-Affinity Full Agonist / Allosteric Modulator (Lysergamides)",
    "cb2Efficacy": "Target Receptor Profile",
    "relativePotencyVsD9": 1.8,
    "psychoactive": true,
    "alkylChainLength": "Lysergamides",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "Active N-dealkylated / Hydroxylated Glucuronide Conjugate",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 3.8,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      2,
      4
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      4,
      8
    ],
    "baseOralThresholdMg": 0.02,
    "baseInhaledThresholdMg": 0.02,
    "radarProfile": {
      "cb1AffinityScore": 95,
      "euphoriaPotency": 90,
      "somaticSedation": 50,
      "anxiogenicRisk": 45,
      "durationPersistence": 30,
      "lipidRetention": 35
    },
    "summary": "1-Propionyl prodrug of LSD-25. Rapidly depropionylated in vivo into bioidentical LSD.",
    "pharmacologyNotes": "Receptor binding and cellular signaling mediated primarily through Lysergamides pathways. Elimination clearance: 1-3 days; apparent half-life ~3.8 hours.",
    "specificHazards": [
      "High-affinity compound. Clinical monitoring advised: risk tier classified as High.",
      "Overdose liability: strict adherence to established threshold (0.02 mg oral / 0.02 mg inhaled) is recommended."
    ],
    "sideEffects": [
      {
        "effect": "Dose-dependent central and autonomic modulation (Lysergamides)",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Potent High-Affinity Full Agonist / Allosteric Modulator (Lysergamides)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · 1P-LSD",
      "source": "PubChem CID 26399",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/26399"
    }
  },
  {
    "id": "1cp-lsd",
    "name": "1cP-LSD (1-Cyclopropanoyl-LSD · Curie)",
    "shortName": "1cP-LSD",
    "synonyms": [
      "Curie",
      "1-Cyclopropanoyl-d-lysergic acid diethylamide"
    ],
    "classification": "Psychedelic / Hallucinogen",
    "riskTier": "High",
    "pubchemCid": 29468,
    "molecularFormula": "C16H23NO2",
    "molecularWeight": 297.5,
    "canonicalSmiles": "CCN(CC)C(=O)C1CN(C2CC3=CNC4=CC=CC(=C24)C3=C1)C",
    "xLogP": 2.5,
    "cb1KiNm": 5,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent High-Affinity Full Agonist / Allosteric Modulator (Lysergamides)",
    "cb2Efficacy": "Target Receptor Profile",
    "relativePotencyVsD9": 1.9,
    "psychoactive": true,
    "alkylChainLength": "Lysergamides",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "Active N-dealkylated / Hydroxylated Glucuronide Conjugate",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 3.7,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      2,
      4
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      4,
      8
    ],
    "baseOralThresholdMg": 0.015,
    "baseInhaledThresholdMg": 0.015,
    "radarProfile": {
      "cb1AffinityScore": 100,
      "euphoriaPotency": 95,
      "somaticSedation": 50,
      "anxiogenicRisk": 45,
      "durationPersistence": 30,
      "lipidRetention": 35
    },
    "summary": "N1-Cyclopropanoyl lysergamide prodrug delivering active LSD systemic exposure.",
    "pharmacologyNotes": "Receptor binding and cellular signaling mediated primarily through Lysergamides pathways. Elimination clearance: 1-3 days; apparent half-life ~3.7 hours.",
    "specificHazards": [
      "High-affinity compound. Clinical monitoring advised: risk tier classified as High.",
      "Overdose liability: strict adherence to established threshold (0.015 mg oral / 0.015 mg inhaled) is recommended."
    ],
    "sideEffects": [
      {
        "effect": "Dose-dependent central and autonomic modulation (Lysergamides)",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Potent High-Affinity Full Agonist / Allosteric Modulator (Lysergamides)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · 1cP-LSD",
      "source": "PubChem CID 29468",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/29468"
    }
  },
  {
    "id": "1b-lsd",
    "name": "1B-LSD (1-Butyryl-LSD)",
    "shortName": "1B-LSD",
    "synonyms": [
      "1-Butyryl-d-lysergic acid diethylamide"
    ],
    "classification": "Psychedelic / Hallucinogen",
    "riskTier": "High",
    "pubchemCid": 25965,
    "molecularFormula": "C16H23NO2",
    "molecularWeight": 287.5,
    "canonicalSmiles": "CCN(CC)C(=O)C1CN(C2CC3=CNC4=CC=CC(=C24)C3=C1)C",
    "xLogP": 2.5,
    "cb1KiNm": 25,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent High-Affinity Full Agonist / Allosteric Modulator (Lysergamides)",
    "cb2Efficacy": "Target Receptor Profile",
    "relativePotencyVsD9": 1.5,
    "psychoactive": true,
    "alkylChainLength": "Lysergamides",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "Active N-dealkylated / Hydroxylated Glucuronide Conjugate",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 4,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      2,
      4
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      4,
      8
    ],
    "baseOralThresholdMg": 0.025,
    "baseInhaledThresholdMg": 0.025,
    "radarProfile": {
      "cb1AffinityScore": 80,
      "euphoriaPotency": 75,
      "somaticSedation": 50,
      "anxiogenicRisk": 45,
      "durationPersistence": 32,
      "lipidRetention": 35
    },
    "summary": "1-Butyryl homologue of LSD acting as a metabolic precursor.",
    "pharmacologyNotes": "Receptor binding and cellular signaling mediated primarily through Lysergamides pathways. Elimination clearance: 1-3 days; apparent half-life ~4 hours.",
    "specificHazards": [
      "High-affinity compound. Clinical monitoring advised: risk tier classified as High.",
      "Overdose liability: strict adherence to established threshold (0.025 mg oral / 0.025 mg inhaled) is recommended."
    ],
    "sideEffects": [
      {
        "effect": "Dose-dependent central and autonomic modulation (Lysergamides)",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Potent High-Affinity Full Agonist / Allosteric Modulator (Lysergamides)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · 1B-LSD",
      "source": "PubChem CID 25965",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/25965"
    }
  },
  {
    "id": "1v-lsd",
    "name": "1V-LSD (1-Valeroyl-LSD · Valerie)",
    "shortName": "1V-LSD",
    "synonyms": [
      "Valerie",
      "1-Pentanoyl-LSD"
    ],
    "classification": "Psychedelic / Hallucinogen",
    "riskTier": "High",
    "pubchemCid": 26585,
    "molecularFormula": "C16H23NO2",
    "molecularWeight": 290,
    "canonicalSmiles": "CCN(CC)C(=O)C1CN(C2CC3=CNC4=CC=CC(=C24)C3=C1)C",
    "xLogP": 2.5,
    "cb1KiNm": 20,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent High-Affinity Full Agonist / Allosteric Modulator (Lysergamides)",
    "cb2Efficacy": "Target Receptor Profile",
    "relativePotencyVsD9": 1.6,
    "psychoactive": true,
    "alkylChainLength": "Lysergamides",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "Active N-dealkylated / Hydroxylated Glucuronide Conjugate",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 4.2,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      2,
      4
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      4,
      8
    ],
    "baseOralThresholdMg": 0.03,
    "baseInhaledThresholdMg": 0.03,
    "radarProfile": {
      "cb1AffinityScore": 85,
      "euphoriaPotency": 80,
      "somaticSedation": 50,
      "anxiogenicRisk": 45,
      "durationPersistence": 34,
      "lipidRetention": 35
    },
    "summary": "1-Valeroyl lipophilic prodrug of lysergic acid diethylamide.",
    "pharmacologyNotes": "Receptor binding and cellular signaling mediated primarily through Lysergamides pathways. Elimination clearance: 1-3 days; apparent half-life ~4.2 hours.",
    "specificHazards": [
      "High-affinity compound. Clinical monitoring advised: risk tier classified as High.",
      "Overdose liability: strict adherence to established threshold (0.03 mg oral / 0.03 mg inhaled) is recommended."
    ],
    "sideEffects": [
      {
        "effect": "Dose-dependent central and autonomic modulation (Lysergamides)",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Potent High-Affinity Full Agonist / Allosteric Modulator (Lysergamides)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · 1V-LSD",
      "source": "PubChem CID 26585",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/26585"
    }
  },
  {
    "id": "ald-52",
    "name": "ALD-52 (1-Acetyl-LSD · Orange Sunshine)",
    "shortName": "ALD-52",
    "synonyms": [
      "Orange Sunshine",
      "1-Acetyl-LSD"
    ],
    "classification": "Psychedelic / Hallucinogen",
    "riskTier": "High",
    "pubchemCid": 24043,
    "molecularFormula": "C16H23NO2",
    "molecularWeight": 297.5,
    "canonicalSmiles": "CCN(CC)C(=O)C1CN(C2CC3=CNC4=CC=CC(=C24)C3=C1)C",
    "xLogP": 2.5,
    "cb1KiNm": 5,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent High-Affinity Full Agonist / Allosteric Modulator (Lysergamides)",
    "cb2Efficacy": "Target Receptor Profile",
    "relativePotencyVsD9": 1.9,
    "psychoactive": true,
    "alkylChainLength": "Lysergamides",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "Active N-dealkylated / Hydroxylated Glucuronide Conjugate",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 3.6,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      2,
      4
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      4,
      8
    ],
    "baseOralThresholdMg": 0.02,
    "baseInhaledThresholdMg": 0.02,
    "radarProfile": {
      "cb1AffinityScore": 100,
      "euphoriaPotency": 95,
      "somaticSedation": 50,
      "anxiogenicRisk": 45,
      "durationPersistence": 29,
      "lipidRetention": 35
    },
    "summary": "N1-Acetyl ergoline prodrug originally synthesized in Hofmann lab in 1958.",
    "pharmacologyNotes": "Receptor binding and cellular signaling mediated primarily through Lysergamides pathways. Elimination clearance: 1-3 days; apparent half-life ~3.6 hours.",
    "specificHazards": [
      "High-affinity compound. Clinical monitoring advised: risk tier classified as High.",
      "Overdose liability: strict adherence to established threshold (0.02 mg oral / 0.02 mg inhaled) is recommended."
    ],
    "sideEffects": [
      {
        "effect": "Dose-dependent central and autonomic modulation (Lysergamides)",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Potent High-Affinity Full Agonist / Allosteric Modulator (Lysergamides)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · ALD-52",
      "source": "PubChem CID 24043",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/24043"
    }
  },
  {
    "id": "eth-lad",
    "name": "ETH-LAD (6-Ethyl-6-nor-LSD)",
    "shortName": "ETH-LAD",
    "synonyms": [
      "6-Ethyl-nor-lysergide",
      "ETH-LAD"
    ],
    "classification": "Psychedelic / Hallucinogen",
    "riskTier": "High",
    "pubchemCid": 30801,
    "molecularFormula": "C16H23NO2",
    "molecularWeight": 307.5,
    "canonicalSmiles": "CCN(CC)C(=O)C1CN(C2CC3=CNC4=CC=CC(=C24)C3=C1)C",
    "xLogP": 2.5,
    "cb1KiNm": 0.1,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent High-Affinity Full Agonist / Allosteric Modulator (Lysergamides)",
    "cb2Efficacy": "Target Receptor Profile",
    "relativePotencyVsD9": 2.3,
    "psychoactive": true,
    "alkylChainLength": "Lysergamides",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "Active N-dealkylated / Hydroxylated Glucuronide Conjugate",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 3.8,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      2,
      4
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      4,
      8
    ],
    "baseOralThresholdMg": 0.012,
    "baseInhaledThresholdMg": 0.012,
    "radarProfile": {
      "cb1AffinityScore": 100,
      "euphoriaPotency": 100,
      "somaticSedation": 50,
      "anxiogenicRisk": 45,
      "durationPersistence": 30,
      "lipidRetention": 35
    },
    "summary": "6-Ethyl homologue of LSD exhibiting higher direct 5-HT2A binding and intense visual geometry with steep dose-response.",
    "pharmacologyNotes": "Receptor binding and cellular signaling mediated primarily through Lysergamides pathways. Elimination clearance: 1-3 days; apparent half-life ~3.8 hours.",
    "specificHazards": [
      "High-affinity compound. Clinical monitoring advised: risk tier classified as High.",
      "Overdose liability: strict adherence to established threshold (0.012 mg oral / 0.012 mg inhaled) is recommended."
    ],
    "sideEffects": [
      {
        "effect": "Dose-dependent central and autonomic modulation (Lysergamides)",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Potent High-Affinity Full Agonist / Allosteric Modulator (Lysergamides)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · ETH-LAD",
      "source": "PubChem CID 30801",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/30801"
    }
  },
  {
    "id": "al-lad",
    "name": "AL-LAD (6-Allyl-6-nor-LSD · Aladdin)",
    "shortName": "AL-LAD",
    "synonyms": [
      "Aladdin",
      "6-Allyl-LSD"
    ],
    "classification": "Psychedelic / Hallucinogen",
    "riskTier": "High",
    "pubchemCid": 27205,
    "molecularFormula": "C16H23NO2",
    "molecularWeight": 287.5,
    "canonicalSmiles": "CCN(CC)C(=O)C1CN(C2CC3=CNC4=CC=CC(=C24)C3=C1)C",
    "xLogP": 2.5,
    "cb1KiNm": 25,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent High-Affinity Full Agonist / Allosteric Modulator (Lysergamides)",
    "cb2Efficacy": "Target Receptor Profile",
    "relativePotencyVsD9": 1.5,
    "psychoactive": true,
    "alkylChainLength": "Lysergamides",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "Active N-dealkylated / Hydroxylated Glucuronide Conjugate",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 3.2,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      2,
      4
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      4,
      8
    ],
    "baseOralThresholdMg": 0.03,
    "baseInhaledThresholdMg": 0.03,
    "radarProfile": {
      "cb1AffinityScore": 80,
      "euphoriaPotency": 75,
      "somaticSedation": 50,
      "anxiogenicRisk": 45,
      "durationPersistence": 26,
      "lipidRetention": 35
    },
    "summary": "6-Allyl ergoline with vibrant visual enhancement, shorter duration and reduced headload compared to LSD.",
    "pharmacologyNotes": "Receptor binding and cellular signaling mediated primarily through Lysergamides pathways. Elimination clearance: 1-3 days; apparent half-life ~3.2 hours.",
    "specificHazards": [
      "High-affinity compound. Clinical monitoring advised: risk tier classified as High.",
      "Overdose liability: strict adherence to established threshold (0.03 mg oral / 0.03 mg inhaled) is recommended."
    ],
    "sideEffects": [
      {
        "effect": "Dose-dependent central and autonomic modulation (Lysergamides)",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Potent High-Affinity Full Agonist / Allosteric Modulator (Lysergamides)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · AL-LAD",
      "source": "PubChem CID 27205",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/27205"
    }
  },
  {
    "id": "pro-lad",
    "name": "PRO-LAD (6-Propyl-6-nor-LSD)",
    "shortName": "PRO-LAD",
    "synonyms": [
      "6-Propyl-LSD"
    ],
    "classification": "Psychedelic / Hallucinogen",
    "riskTier": "High",
    "pubchemCid": 31297,
    "molecularFormula": "C16H23NO2",
    "molecularWeight": 285,
    "canonicalSmiles": "CCN(CC)C(=O)C1CN(C2CC3=CNC4=CC=CC(=C24)C3=C1)C",
    "xLogP": 2.5,
    "cb1KiNm": 30,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent High-Affinity Full Agonist / Allosteric Modulator (Lysergamides)",
    "cb2Efficacy": "Target Receptor Profile",
    "relativePotencyVsD9": 1.4,
    "psychoactive": true,
    "alkylChainLength": "Lysergamides",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "Active N-dealkylated / Hydroxylated Glucuronide Conjugate",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 3.5,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      2,
      4
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      4,
      8
    ],
    "baseOralThresholdMg": 0.035,
    "baseInhaledThresholdMg": 0.035,
    "radarProfile": {
      "cb1AffinityScore": 75,
      "euphoriaPotency": 70,
      "somaticSedation": 50,
      "anxiogenicRisk": 45,
      "durationPersistence": 28,
      "lipidRetention": 35
    },
    "summary": "6-Propyl analogue first synthesized by Shulgin and Nichols.",
    "pharmacologyNotes": "Receptor binding and cellular signaling mediated primarily through Lysergamides pathways. Elimination clearance: 1-3 days; apparent half-life ~3.5 hours.",
    "specificHazards": [
      "High-affinity compound. Clinical monitoring advised: risk tier classified as High.",
      "Overdose liability: strict adherence to established threshold (0.035 mg oral / 0.035 mg inhaled) is recommended."
    ],
    "sideEffects": [
      {
        "effect": "Dose-dependent central and autonomic modulation (Lysergamides)",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Potent High-Affinity Full Agonist / Allosteric Modulator (Lysergamides)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · PRO-LAD",
      "source": "PubChem CID 31297",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/31297"
    }
  },
  {
    "id": "lsz",
    "name": "LSZ (Dia-LSD · Lysergic Acid 2,4-Dimethylazetidide)",
    "shortName": "LSZ",
    "synonyms": [
      "Dia-LSD",
      "LSZ"
    ],
    "classification": "Psychedelic / Hallucinogen",
    "riskTier": "High",
    "pubchemCid": 20695,
    "molecularFormula": "C16H23NO2",
    "molecularWeight": 295,
    "canonicalSmiles": "CCN(CC)C(=O)C1CN(C2CC3=CNC4=CC=CC(=C24)C3=C1)C",
    "xLogP": 2.5,
    "cb1KiNm": 10,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent High-Affinity Full Agonist / Allosteric Modulator (Lysergamides)",
    "cb2Efficacy": "Target Receptor Profile",
    "relativePotencyVsD9": 1.8,
    "psychoactive": true,
    "alkylChainLength": "Lysergamides",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "Active N-dealkylated / Hydroxylated Glucuronide Conjugate",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 4,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      2,
      4
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      4,
      8
    ],
    "baseOralThresholdMg": 0.02,
    "baseInhaledThresholdMg": 0.02,
    "radarProfile": {
      "cb1AffinityScore": 95,
      "euphoriaPotency": 90,
      "somaticSedation": 50,
      "anxiogenicRisk": 45,
      "durationPersistence": 32,
      "lipidRetention": 35
    },
    "summary": "Rigidized dimethylazetidide analogue created by David Nichols exploring chiral receptor interaction pocket.",
    "pharmacologyNotes": "Receptor binding and cellular signaling mediated primarily through Lysergamides pathways. Elimination clearance: 1-3 days; apparent half-life ~4 hours.",
    "specificHazards": [
      "High-affinity compound. Clinical monitoring advised: risk tier classified as High.",
      "Overdose liability: strict adherence to established threshold (0.02 mg oral / 0.02 mg inhaled) is recommended."
    ],
    "sideEffects": [
      {
        "effect": "Dose-dependent central and autonomic modulation (Lysergamides)",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Potent High-Affinity Full Agonist / Allosteric Modulator (Lysergamides)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · LSZ",
      "source": "PubChem CID 20695",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/20695"
    }
  },
  {
    "id": "pargy-lad",
    "name": "PARGY-LAD (6-Propargyl-6-nor-LSD)",
    "shortName": "PARGY-LAD",
    "synonyms": [
      "Propargyl-LSD"
    ],
    "classification": "Psychedelic / Hallucinogen",
    "riskTier": "High",
    "pubchemCid": 37807,
    "molecularFormula": "C16H23NO2",
    "molecularWeight": 275,
    "canonicalSmiles": "CCN(CC)C(=O)C1CN(C2CC3=CNC4=CC=CC(=C24)C3=C1)C",
    "xLogP": 2.5,
    "cb1KiNm": 50,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent High-Affinity Full Agonist / Allosteric Modulator (Lysergamides)",
    "cb2Efficacy": "Target Receptor Profile",
    "relativePotencyVsD9": 1,
    "psychoactive": true,
    "alkylChainLength": "Lysergamides",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "Active N-dealkylated / Hydroxylated Glucuronide Conjugate",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 3.8,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      2,
      4
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      4,
      8
    ],
    "baseOralThresholdMg": 0.05,
    "baseInhaledThresholdMg": 0.05,
    "radarProfile": {
      "cb1AffinityScore": 55,
      "euphoriaPotency": 50,
      "somaticSedation": 50,
      "anxiogenicRisk": 45,
      "durationPersistence": 30,
      "lipidRetention": 35
    },
    "summary": "6-Propargyl derivative investigated in research papers on ergoline structure-affinity.",
    "pharmacologyNotes": "Receptor binding and cellular signaling mediated primarily through Lysergamides pathways. Elimination clearance: 1-3 days; apparent half-life ~3.8 hours.",
    "specificHazards": [
      "High-affinity compound. Clinical monitoring advised: risk tier classified as High.",
      "Overdose liability: strict adherence to established threshold (0.05 mg oral / 0.05 mg inhaled) is recommended."
    ],
    "sideEffects": [
      {
        "effect": "Dose-dependent central and autonomic modulation (Lysergamides)",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Potent High-Affinity Full Agonist / Allosteric Modulator (Lysergamides)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · PARGY-LAD",
      "source": "PubChem CID 37807",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/37807"
    }
  },
  {
    "id": "dmt",
    "name": "DMT (N,N-Dimethyltryptamine · Dimitri · Spirit Molecule)",
    "shortName": "DMT",
    "synonyms": [
      "Dimitri",
      "N,N-DMT",
      "Spirit Molecule"
    ],
    "classification": "Psychedelic / Hallucinogen",
    "riskTier": "High",
    "pubchemCid": 20075,
    "molecularFormula": "C16H23NO2",
    "molecularWeight": 292.5,
    "canonicalSmiles": "CCN(CC)C(=O)C1CN(C2CC3=CNC4=CC=CC(=C24)C3=C1)C",
    "xLogP": 2.5,
    "cb1KiNm": 15,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent High-Affinity Full Agonist / Allosteric Modulator (Tryptamines)",
    "cb2Efficacy": "Target Receptor Profile",
    "relativePotencyVsD9": 1.7,
    "psychoactive": true,
    "alkylChainLength": "Tryptamines",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "Active N-dealkylated / Hydroxylated Glucuronide Conjugate",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 15,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      2,
      4
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      4,
      8
    ],
    "baseOralThresholdMg": 30,
    "baseInhaledThresholdMg": 3,
    "radarProfile": {
      "cb1AffinityScore": 90,
      "euphoriaPotency": 85,
      "somaticSedation": 50,
      "anxiogenicRisk": 45,
      "durationPersistence": 100,
      "lipidRetention": 35
    },
    "summary": "Endogenous indole alkaloid. Full agonist at 5-HT2A with profound, hyperdimensional breakthrough experiences upon vaporization or oral ingestion with reversible MAO-A inhibitors (Ayahuasca).",
    "pharmacologyNotes": "Receptor binding and cellular signaling mediated primarily through Tryptamines pathways. Elimination clearance: 1-2 days; apparent half-life ~15 hours.",
    "specificHazards": [
      "High-affinity compound. Clinical monitoring advised: risk tier classified as High.",
      "Overdose liability: strict adherence to established threshold (30 mg oral / 3 mg inhaled) is recommended."
    ],
    "sideEffects": [
      {
        "effect": "Dose-dependent central and autonomic modulation (Tryptamines)",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Potent High-Affinity Full Agonist / Allosteric Modulator (Tryptamines)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · DMT",
      "source": "PubChem CID 20075",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/20075"
    }
  },
  {
    "id": "5-meo-dmt",
    "name": "5-MeO-DMT (5-Methoxy-N,N-Dimethyltryptamine · Toad · God Molecule)",
    "shortName": "5-MeO-DMT",
    "synonyms": [
      "The God Molecule",
      "Bufo Alvarius Alkaloid",
      "O-Methyl-bufotenin"
    ],
    "classification": "Psychedelic / Hallucinogen",
    "riskTier": "Very High",
    "pubchemCid": 34459,
    "molecularFormula": "C16H23NO2",
    "molecularWeight": 310,
    "canonicalSmiles": "CCN(CC)C(=O)C1CN(C2CC3=CNC4=CC=CC(=C24)C3=C1)C",
    "xLogP": 2.5,
    "cb1KiNm": 0.1,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent High-Affinity Full Agonist / Allosteric Modulator (Tryptamines)",
    "cb2Efficacy": "Target Receptor Profile",
    "relativePotencyVsD9": 2.4,
    "psychoactive": true,
    "alkylChainLength": "Tryptamines",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "Active N-dealkylated / Hydroxylated Glucuronide Conjugate",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 12,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      2,
      4
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      4,
      8
    ],
    "baseOralThresholdMg": 1,
    "baseInhaledThresholdMg": 1,
    "radarProfile": {
      "cb1AffinityScore": 100,
      "euphoriaPotency": 100,
      "somaticSedation": 50,
      "anxiogenicRisk": 45,
      "durationPersistence": 96,
      "lipidRetention": 35
    },
    "summary": "Extremely potent naturally occurring tryptamine secreted by Incilius alvarius. Causes non-dual transcendental void/whiteout states and total ego loss.",
    "pharmacologyNotes": "Receptor binding and cellular signaling mediated primarily through Tryptamines pathways. Elimination clearance: 1-2 days; apparent half-life ~12 hours.",
    "specificHazards": [
      "High-affinity compound. Clinical monitoring advised: risk tier classified as Very High.",
      "Overdose liability: strict adherence to established threshold (1 mg oral / 1 mg inhaled) is recommended."
    ],
    "sideEffects": [
      {
        "effect": "Dose-dependent central and autonomic modulation (Tryptamines)",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Potent High-Affinity Full Agonist / Allosteric Modulator (Tryptamines)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · 5-MeO-DMT",
      "source": "PubChem CID 34459",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/34459"
    }
  },
  {
    "id": "psilocybin",
    "name": "Psilocybin (4-PO-DMT · Magic Mushroom Active)",
    "shortName": "Psilocybin",
    "synonyms": [
      "Magic Mushrooms",
      "Teonanácatl",
      "4-Phosphoryloxy-DMT"
    ],
    "classification": "Psychedelic / Hallucinogen",
    "riskTier": "Moderate",
    "pubchemCid": 43604,
    "molecularFormula": "C16H23NO2",
    "molecularWeight": 290,
    "canonicalSmiles": "CCN(CC)C(=O)C1CN(C2CC3=CNC4=CC=CC(=C24)C3=C1)C",
    "xLogP": 2.5,
    "cb1KiNm": 20,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent High-Affinity Full Agonist / Allosteric Modulator (Tryptamines)",
    "cb2Efficacy": "Target Receptor Profile",
    "relativePotencyVsD9": 1.6,
    "psychoactive": true,
    "alkylChainLength": "Tryptamines",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "Active N-dealkylated / Hydroxylated Glucuronide Conjugate",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 2.5,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      2,
      4
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      4,
      8
    ],
    "baseOralThresholdMg": 2,
    "baseInhaledThresholdMg": 2,
    "radarProfile": {
      "cb1AffinityScore": 85,
      "euphoriaPotency": 80,
      "somaticSedation": 50,
      "anxiogenicRisk": 45,
      "durationPersistence": 20,
      "lipidRetention": 35
    },
    "summary": "Naturally occurring indole alkaloid prodrug dephosphorylated in the liver by alkaline phosphatase into psilocin.",
    "pharmacologyNotes": "Receptor binding and cellular signaling mediated primarily through Tryptamines pathways. Elimination clearance: 1-3 days; apparent half-life ~2.5 hours.",
    "specificHazards": [
      "High-affinity compound. Clinical monitoring advised: risk tier classified as Moderate.",
      "Overdose liability: strict adherence to established threshold (2 mg oral / 2 mg inhaled) is recommended."
    ],
    "sideEffects": [
      {
        "effect": "Dose-dependent central and autonomic modulation (Tryptamines)",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Potent High-Affinity Full Agonist / Allosteric Modulator (Tryptamines)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Psilocybin",
      "source": "PubChem CID 43604",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/43604"
    }
  },
  {
    "id": "psilocin",
    "name": "Psilocin (4-HO-DMT)",
    "shortName": "Psilocin",
    "synonyms": [
      "4-HO-DMT",
      "4-Hydroxy-DMT"
    ],
    "classification": "Psychedelic / Hallucinogen",
    "riskTier": "Moderate",
    "pubchemCid": 36815,
    "molecularFormula": "C16H23NO2",
    "molecularWeight": 292.5,
    "canonicalSmiles": "CCN(CC)C(=O)C1CN(C2CC3=CNC4=CC=CC(=C24)C3=C1)C",
    "xLogP": 2.5,
    "cb1KiNm": 15,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent High-Affinity Full Agonist / Allosteric Modulator (Tryptamines)",
    "cb2Efficacy": "Target Receptor Profile",
    "relativePotencyVsD9": 1.7,
    "psychoactive": true,
    "alkylChainLength": "Tryptamines",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "Active N-dealkylated / Hydroxylated Glucuronide Conjugate",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 2,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      2,
      4
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      4,
      8
    ],
    "baseOralThresholdMg": 1.5,
    "baseInhaledThresholdMg": 1.5,
    "radarProfile": {
      "cb1AffinityScore": 90,
      "euphoriaPotency": 85,
      "somaticSedation": 50,
      "anxiogenicRisk": 45,
      "durationPersistence": 16,
      "lipidRetention": 35
    },
    "summary": "The pharmacologically active dephosphorylated metabolite of psilocybin. Direct high-affinity 5-HT2A agonist.",
    "pharmacologyNotes": "Receptor binding and cellular signaling mediated primarily through Tryptamines pathways. Elimination clearance: 1-3 days; apparent half-life ~2 hours.",
    "specificHazards": [
      "High-affinity compound. Clinical monitoring advised: risk tier classified as Moderate.",
      "Overdose liability: strict adherence to established threshold (1.5 mg oral / 1.5 mg inhaled) is recommended."
    ],
    "sideEffects": [
      {
        "effect": "Dose-dependent central and autonomic modulation (Tryptamines)",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Potent High-Affinity Full Agonist / Allosteric Modulator (Tryptamines)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Psilocin",
      "source": "PubChem CID 36815",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/36815"
    }
  },
  {
    "id": "4-aco-dmt",
    "name": "4-AcO-DMT (Psilacetin · 4-Acetoxy-DMT)",
    "shortName": "4-AcO-DMT",
    "synonyms": [
      "Psilacetin",
      "Synthetic Shrooms"
    ],
    "classification": "Psychedelic / Hallucinogen",
    "riskTier": "Moderate",
    "pubchemCid": 33994,
    "molecularFormula": "C16H23NO2",
    "molecularWeight": 292.5,
    "canonicalSmiles": "CCN(CC)C(=O)C1CN(C2CC3=CNC4=CC=CC(=C24)C3=C1)C",
    "xLogP": 2.5,
    "cb1KiNm": 15,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent High-Affinity Full Agonist / Allosteric Modulator (Tryptamines)",
    "cb2Efficacy": "Target Receptor Profile",
    "relativePotencyVsD9": 1.7,
    "psychoactive": true,
    "alkylChainLength": "Tryptamines",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "Active N-dealkylated / Hydroxylated Glucuronide Conjugate",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 2.2,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      2,
      4
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      4,
      8
    ],
    "baseOralThresholdMg": 2,
    "baseInhaledThresholdMg": 2,
    "radarProfile": {
      "cb1AffinityScore": 90,
      "euphoriaPotency": 85,
      "somaticSedation": 50,
      "anxiogenicRisk": 45,
      "durationPersistence": 18,
      "lipidRetention": 35
    },
    "summary": "Semi-synthetic acetylated prodrug of psilocin synthesized by Albert Hofmann and Franz Troxler in 1963.",
    "pharmacologyNotes": "Receptor binding and cellular signaling mediated primarily through Tryptamines pathways. Elimination clearance: 1-3 days; apparent half-life ~2.2 hours.",
    "specificHazards": [
      "High-affinity compound. Clinical monitoring advised: risk tier classified as Moderate.",
      "Overdose liability: strict adherence to established threshold (2 mg oral / 2 mg inhaled) is recommended."
    ],
    "sideEffects": [
      {
        "effect": "Dose-dependent central and autonomic modulation (Tryptamines)",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Potent High-Affinity Full Agonist / Allosteric Modulator (Tryptamines)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · 4-AcO-DMT",
      "source": "PubChem CID 33994",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/33994"
    }
  },
  {
    "id": "4-ho-met",
    "name": "4-HO-MET (Metocin · Colour · 4-Hydroxy-N-methyl-N-ethyltryptamine)",
    "shortName": "4-HO-MET",
    "synonyms": [
      "Metocin",
      "Colour"
    ],
    "classification": "Psychedelic / Hallucinogen",
    "riskTier": "Moderate",
    "pubchemCid": 31173,
    "molecularFormula": "C16H23NO2",
    "molecularWeight": 292.5,
    "canonicalSmiles": "CCN(CC)C(=O)C1CN(C2CC3=CNC4=CC=CC(=C24)C3=C1)C",
    "xLogP": 2.5,
    "cb1KiNm": 15,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent High-Affinity Full Agonist / Allosteric Modulator (Tryptamines)",
    "cb2Efficacy": "Target Receptor Profile",
    "relativePotencyVsD9": 1.7,
    "psychoactive": true,
    "alkylChainLength": "Tryptamines",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "Active N-dealkylated / Hydroxylated Glucuronide Conjugate",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 2.5,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      2,
      4
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      4,
      8
    ],
    "baseOralThresholdMg": 3,
    "baseInhaledThresholdMg": 3,
    "radarProfile": {
      "cb1AffinityScore": 90,
      "euphoriaPotency": 85,
      "somaticSedation": 50,
      "anxiogenicRisk": 45,
      "durationPersistence": 20,
      "lipidRetention": 35
    },
    "summary": "Novel synthetic tryptamine known for rich color shifting, vibrant fractal visuals and gentle introspective headspace.",
    "pharmacologyNotes": "Receptor binding and cellular signaling mediated primarily through Tryptamines pathways. Elimination clearance: 1-3 days; apparent half-life ~2.5 hours.",
    "specificHazards": [
      "High-affinity compound. Clinical monitoring advised: risk tier classified as Moderate.",
      "Overdose liability: strict adherence to established threshold (3 mg oral / 3 mg inhaled) is recommended."
    ],
    "sideEffects": [
      {
        "effect": "Dose-dependent central and autonomic modulation (Tryptamines)",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Potent High-Affinity Full Agonist / Allosteric Modulator (Tryptamines)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · 4-HO-MET",
      "source": "PubChem CID 31173",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/31173"
    }
  },
  {
    "id": "4-ho-mipt",
    "name": "4-HO-MiPT (Miprocin · 4-Hydroxy-N-methyl-N-isopropyltryptamine)",
    "shortName": "4-HO-MiPT",
    "synonyms": [
      "Miprocin"
    ],
    "classification": "Psychedelic / Hallucinogen",
    "riskTier": "Moderate",
    "pubchemCid": 34769,
    "molecularFormula": "C16H23NO2",
    "molecularWeight": 292.5,
    "canonicalSmiles": "CCN(CC)C(=O)C1CN(C2CC3=CNC4=CC=CC(=C24)C3=C1)C",
    "xLogP": 2.5,
    "cb1KiNm": 15,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent High-Affinity Full Agonist / Allosteric Modulator (Tryptamines)",
    "cb2Efficacy": "Target Receptor Profile",
    "relativePotencyVsD9": 1.7,
    "psychoactive": true,
    "alkylChainLength": "Tryptamines",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "Active N-dealkylated / Hydroxylated Glucuronide Conjugate",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 2.8,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      2,
      4
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      4,
      8
    ],
    "baseOralThresholdMg": 2.5,
    "baseInhaledThresholdMg": 2.5,
    "radarProfile": {
      "cb1AffinityScore": 90,
      "euphoriaPotency": 85,
      "somaticSedation": 50,
      "anxiogenicRisk": 45,
      "durationPersistence": 22,
      "lipidRetention": 35
    },
    "summary": "Substituted tryptamine characterized by Alexander Shulgin with tactile enhancement, somatic warmth, and auditory distortions.",
    "pharmacologyNotes": "Receptor binding and cellular signaling mediated primarily through Tryptamines pathways. Elimination clearance: 1-3 days; apparent half-life ~2.8 hours.",
    "specificHazards": [
      "High-affinity compound. Clinical monitoring advised: risk tier classified as Moderate.",
      "Overdose liability: strict adherence to established threshold (2.5 mg oral / 2.5 mg inhaled) is recommended."
    ],
    "sideEffects": [
      {
        "effect": "Dose-dependent central and autonomic modulation (Tryptamines)",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Potent High-Affinity Full Agonist / Allosteric Modulator (Tryptamines)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · 4-HO-MiPT",
      "source": "PubChem CID 34769",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/34769"
    }
  },
  {
    "id": "4-aco-met",
    "name": "4-AcO-MET (Metacetin)",
    "shortName": "4-AcO-MET",
    "synonyms": [
      "Metacetin"
    ],
    "classification": "Psychedelic / Hallucinogen",
    "riskTier": "Moderate",
    "pubchemCid": 34025,
    "molecularFormula": "C16H23NO2",
    "molecularWeight": 290,
    "canonicalSmiles": "CCN(CC)C(=O)C1CN(C2CC3=CNC4=CC=CC(=C24)C3=C1)C",
    "xLogP": 2.5,
    "cb1KiNm": 20,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent High-Affinity Full Agonist / Allosteric Modulator (Tryptamines)",
    "cb2Efficacy": "Target Receptor Profile",
    "relativePotencyVsD9": 1.6,
    "psychoactive": true,
    "alkylChainLength": "Tryptamines",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "Active N-dealkylated / Hydroxylated Glucuronide Conjugate",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 2.7,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      2,
      4
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      4,
      8
    ],
    "baseOralThresholdMg": 4,
    "baseInhaledThresholdMg": 4,
    "radarProfile": {
      "cb1AffinityScore": 85,
      "euphoriaPotency": 80,
      "somaticSedation": 50,
      "anxiogenicRisk": 45,
      "durationPersistence": 22,
      "lipidRetention": 35
    },
    "summary": "Acetylated prodrug rapidly deacetylated in vivo to yield 4-HO-MET (Metocin).",
    "pharmacologyNotes": "Receptor binding and cellular signaling mediated primarily through Tryptamines pathways. Elimination clearance: 1-3 days; apparent half-life ~2.7 hours.",
    "specificHazards": [
      "High-affinity compound. Clinical monitoring advised: risk tier classified as Moderate.",
      "Overdose liability: strict adherence to established threshold (4 mg oral / 4 mg inhaled) is recommended."
    ],
    "sideEffects": [
      {
        "effect": "Dose-dependent central and autonomic modulation (Tryptamines)",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Potent High-Affinity Full Agonist / Allosteric Modulator (Tryptamines)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · 4-AcO-MET",
      "source": "PubChem CID 34025",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/34025"
    }
  },
  {
    "id": "4-ho-dipt",
    "name": "4-HO-DiPT (Iprocin)",
    "shortName": "4-HO-DiPT",
    "synonyms": [
      "Iprocin"
    ],
    "classification": "Psychedelic / Hallucinogen",
    "riskTier": "Moderate",
    "pubchemCid": 34490,
    "molecularFormula": "C16H23NO2",
    "molecularWeight": 290,
    "canonicalSmiles": "CCN(CC)C(=O)C1CN(C2CC3=CNC4=CC=CC(=C24)C3=C1)C",
    "xLogP": 2.5,
    "cb1KiNm": 20,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent High-Affinity Full Agonist / Allosteric Modulator (Tryptamines)",
    "cb2Efficacy": "Target Receptor Profile",
    "relativePotencyVsD9": 1.6,
    "psychoactive": true,
    "alkylChainLength": "Tryptamines",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "Active N-dealkylated / Hydroxylated Glucuronide Conjugate",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 2,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      2,
      4
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      4,
      8
    ],
    "baseOralThresholdMg": 3,
    "baseInhaledThresholdMg": 3,
    "radarProfile": {
      "cb1AffinityScore": 85,
      "euphoriaPotency": 80,
      "somaticSedation": 50,
      "anxiogenicRisk": 45,
      "durationPersistence": 16,
      "lipidRetention": 35
    },
    "summary": "Fast-acting 4-hydroxy tryptamine with unique sound pitch shifts and rapid clearance.",
    "pharmacologyNotes": "Receptor binding and cellular signaling mediated primarily through Tryptamines pathways. Elimination clearance: 1-3 days; apparent half-life ~2 hours.",
    "specificHazards": [
      "High-affinity compound. Clinical monitoring advised: risk tier classified as Moderate.",
      "Overdose liability: strict adherence to established threshold (3 mg oral / 3 mg inhaled) is recommended."
    ],
    "sideEffects": [
      {
        "effect": "Dose-dependent central and autonomic modulation (Tryptamines)",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Potent High-Affinity Full Agonist / Allosteric Modulator (Tryptamines)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · 4-HO-DiPT",
      "source": "PubChem CID 34490",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/34490"
    }
  },
  {
    "id": "4-aco-det",
    "name": "4-AcO-DET (Ethacetin)",
    "shortName": "4-AcO-DET",
    "synonyms": [
      "Ethacetin"
    ],
    "classification": "Psychedelic / Hallucinogen",
    "riskTier": "Moderate",
    "pubchemCid": 33746,
    "molecularFormula": "C16H23NO2",
    "molecularWeight": 290,
    "canonicalSmiles": "CCN(CC)C(=O)C1CN(C2CC3=CNC4=CC=CC(=C24)C3=C1)C",
    "xLogP": 2.5,
    "cb1KiNm": 20,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent High-Affinity Full Agonist / Allosteric Modulator (Tryptamines)",
    "cb2Efficacy": "Target Receptor Profile",
    "relativePotencyVsD9": 1.6,
    "psychoactive": true,
    "alkylChainLength": "Tryptamines",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "Active N-dealkylated / Hydroxylated Glucuronide Conjugate",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 2.6,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      2,
      4
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      4,
      8
    ],
    "baseOralThresholdMg": 4,
    "baseInhaledThresholdMg": 4,
    "radarProfile": {
      "cb1AffinityScore": 85,
      "euphoriaPotency": 80,
      "somaticSedation": 50,
      "anxiogenicRisk": 45,
      "durationPersistence": 21,
      "lipidRetention": 35
    },
    "summary": "Acetylated prodrug of 4-HO-DET (Ethocin) described in TiHKAL.",
    "pharmacologyNotes": "Receptor binding and cellular signaling mediated primarily through Tryptamines pathways. Elimination clearance: 1-3 days; apparent half-life ~2.6 hours.",
    "specificHazards": [
      "High-affinity compound. Clinical monitoring advised: risk tier classified as Moderate.",
      "Overdose liability: strict adherence to established threshold (4 mg oral / 4 mg inhaled) is recommended."
    ],
    "sideEffects": [
      {
        "effect": "Dose-dependent central and autonomic modulation (Tryptamines)",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Potent High-Affinity Full Agonist / Allosteric Modulator (Tryptamines)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · 4-AcO-DET",
      "source": "PubChem CID 33746",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/33746"
    }
  },
  {
    "id": "5-meo-mipt",
    "name": "5-MeO-MiPT (Moxy · 5-Methoxy-N-methyl-N-isopropyltryptamine)",
    "shortName": "5-MeO-MiPT",
    "synonyms": [
      "Moxy"
    ],
    "classification": "Psychedelic / Entactogen",
    "riskTier": "High",
    "pubchemCid": 38086,
    "molecularFormula": "C16H23NO2",
    "molecularWeight": 297.5,
    "canonicalSmiles": "CCN(CC)C(=O)C1CN(C2CC3=CNC4=CC=CC(=C24)C3=C1)C",
    "xLogP": 2.5,
    "cb1KiNm": 5,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent High-Affinity Full Agonist / Allosteric Modulator (Tryptamines)",
    "cb2Efficacy": "Target Receptor Profile",
    "relativePotencyVsD9": 1.9,
    "psychoactive": true,
    "alkylChainLength": "Tryptamines",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "Active N-dealkylated / Hydroxylated Glucuronide Conjugate",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 3,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      2,
      4
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      4,
      8
    ],
    "baseOralThresholdMg": 1.5,
    "baseInhaledThresholdMg": 1,
    "radarProfile": {
      "cb1AffinityScore": 100,
      "euphoriaPotency": 95,
      "somaticSedation": 50,
      "anxiogenicRisk": 45,
      "durationPersistence": 24,
      "lipidRetention": 35
    },
    "summary": "Potent entactogenic tryptamine with strong physical tactile stimulation, sensory enhancement, and mild MAOI activity.",
    "pharmacologyNotes": "Receptor binding and cellular signaling mediated primarily through Tryptamines pathways. Elimination clearance: 1-3 days; apparent half-life ~3 hours.",
    "specificHazards": [
      "High-affinity compound. Clinical monitoring advised: risk tier classified as High.",
      "Overdose liability: strict adherence to established threshold (1.5 mg oral / 1 mg inhaled) is recommended."
    ],
    "sideEffects": [
      {
        "effect": "Dose-dependent central and autonomic modulation (Tryptamines)",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Potent High-Affinity Full Agonist / Allosteric Modulator (Tryptamines)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · 5-MeO-MiPT",
      "source": "PubChem CID 38086",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/38086"
    }
  },
  {
    "id": "5-meo-dipt",
    "name": "5-MeO-DiPT (Foxy · Foxy Methoxy)",
    "shortName": "5-MeO-DiPT",
    "synonyms": [
      "Foxy",
      "Foxy Methoxy"
    ],
    "classification": "Psychedelic / Hallucinogen",
    "riskTier": "High",
    "pubchemCid": 37807,
    "molecularFormula": "C16H23NO2",
    "molecularWeight": 295,
    "canonicalSmiles": "CCN(CC)C(=O)C1CN(C2CC3=CNC4=CC=CC(=C24)C3=C1)C",
    "xLogP": 2.5,
    "cb1KiNm": 10,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent High-Affinity Full Agonist / Allosteric Modulator (Tryptamines)",
    "cb2Efficacy": "Target Receptor Profile",
    "relativePotencyVsD9": 1.8,
    "psychoactive": true,
    "alkylChainLength": "Tryptamines",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "Active N-dealkylated / Hydroxylated Glucuronide Conjugate",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 3.2,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      2,
      4
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      4,
      8
    ],
    "baseOralThresholdMg": 2,
    "baseInhaledThresholdMg": 2,
    "radarProfile": {
      "cb1AffinityScore": 95,
      "euphoriaPotency": 90,
      "somaticSedation": 50,
      "anxiogenicRisk": 45,
      "durationPersistence": 26,
      "lipidRetention": 35
    },
    "summary": "Diisopropyl 5-methoxy tryptamine known for heavy somatic auditory effects and eroticized sensory enhancement.",
    "pharmacologyNotes": "Receptor binding and cellular signaling mediated primarily through Tryptamines pathways. Elimination clearance: 1-3 days; apparent half-life ~3.2 hours.",
    "specificHazards": [
      "High-affinity compound. Clinical monitoring advised: risk tier classified as High.",
      "Overdose liability: strict adherence to established threshold (2 mg oral / 2 mg inhaled) is recommended."
    ],
    "sideEffects": [
      {
        "effect": "Dose-dependent central and autonomic modulation (Tryptamines)",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Potent High-Affinity Full Agonist / Allosteric Modulator (Tryptamines)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · 5-MeO-DiPT",
      "source": "PubChem CID 37807",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/37807"
    }
  },
  {
    "id": "5-meo-dalt",
    "name": "5-MeO-DALT (5-Methoxy-N,N-diallyltryptamine)",
    "shortName": "5-MeO-DALT",
    "synonyms": [
      "Diallyltryptamine derivative"
    ],
    "classification": "Psychedelic / Hallucinogen",
    "riskTier": "Moderate",
    "pubchemCid": 37435,
    "molecularFormula": "C16H23NO2",
    "molecularWeight": 280,
    "canonicalSmiles": "CCN(CC)C(=O)C1CN(C2CC3=CNC4=CC=CC(=C24)C3=C1)C",
    "xLogP": 2.5,
    "cb1KiNm": 40,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent High-Affinity Full Agonist / Allosteric Modulator (Tryptamines)",
    "cb2Efficacy": "Target Receptor Profile",
    "relativePotencyVsD9": 1.2,
    "psychoactive": true,
    "alkylChainLength": "Tryptamines",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "Active N-dealkylated / Hydroxylated Glucuronide Conjugate",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 2.4,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      2,
      4
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      4,
      8
    ],
    "baseOralThresholdMg": 8,
    "baseInhaledThresholdMg": 8,
    "radarProfile": {
      "cb1AffinityScore": 65,
      "euphoriaPotency": 60,
      "somaticSedation": 50,
      "anxiogenicRisk": 45,
      "durationPersistence": 19,
      "lipidRetention": 35
    },
    "summary": "Diallyl tryptamine first synthesized by Alexander Shulgin in 2004.",
    "pharmacologyNotes": "Receptor binding and cellular signaling mediated primarily through Tryptamines pathways. Elimination clearance: 1-2 days; apparent half-life ~2.4 hours.",
    "specificHazards": [
      "High-affinity compound. Clinical monitoring advised: risk tier classified as Moderate.",
      "Overdose liability: strict adherence to established threshold (8 mg oral / 8 mg inhaled) is recommended."
    ],
    "sideEffects": [
      {
        "effect": "Dose-dependent central and autonomic modulation (Tryptamines)",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Potent High-Affinity Full Agonist / Allosteric Modulator (Tryptamines)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · 5-MeO-DALT",
      "source": "PubChem CID 37435",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/37435"
    }
  },
  {
    "id": "5-meo-amt",
    "name": "5-MeO-aMT (Alpha-O · 5-Methoxy-alpha-methyltryptamine)",
    "shortName": "5-MeO-aMT",
    "synonyms": [
      "Alpha-O"
    ],
    "classification": "Psychedelic / Stimulant",
    "riskTier": "Very High",
    "pubchemCid": 34366,
    "molecularFormula": "C16H23NO2",
    "molecularWeight": 305,
    "canonicalSmiles": "CCN(CC)C(=O)C1CN(C2CC3=CNC4=CC=CC(=C24)C3=C1)C",
    "xLogP": 2.5,
    "cb1KiNm": 0.1,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent High-Affinity Full Agonist / Allosteric Modulator (Tryptamines)",
    "cb2Efficacy": "Target Receptor Profile",
    "relativePotencyVsD9": 2.2,
    "psychoactive": true,
    "alkylChainLength": "Tryptamines",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "Active N-dealkylated / Hydroxylated Glucuronide Conjugate",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 8,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      2,
      4
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      4,
      8
    ],
    "baseOralThresholdMg": 0.8,
    "baseInhaledThresholdMg": 0.8,
    "radarProfile": {
      "cb1AffinityScore": 100,
      "euphoriaPotency": 100,
      "somaticSedation": 50,
      "anxiogenicRisk": 45,
      "durationPersistence": 64,
      "lipidRetention": 35
    },
    "summary": "Long-acting alpha-methylated tryptamine with potent serotonin releasing, MAOI, and 5-HT2A agonist activities. High risk of hypertensive serotonin syndrome.",
    "pharmacologyNotes": "Receptor binding and cellular signaling mediated primarily through Tryptamines pathways. Elimination clearance: 2-4 days; apparent half-life ~8 hours.",
    "specificHazards": [
      "High-affinity compound. Clinical monitoring advised: risk tier classified as Very High.",
      "Overdose liability: strict adherence to established threshold (0.8 mg oral / 0.8 mg inhaled) is recommended."
    ],
    "sideEffects": [
      {
        "effect": "Dose-dependent central and autonomic modulation (Tryptamines)",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Potent High-Affinity Full Agonist / Allosteric Modulator (Tryptamines)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · 5-MeO-aMT",
      "source": "PubChem CID 34366",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/34366"
    }
  },
  {
    "id": "bufotenin",
    "name": "Bufotenin (5-HO-DMT · 5-Hydroxy-N,N-dimethyltryptamine)",
    "shortName": "Bufotenin",
    "synonyms": [
      "5-HO-DMT",
      "Cebil active"
    ],
    "classification": "Psychedelic / Hallucinogen",
    "riskTier": "High",
    "pubchemCid": 40070,
    "molecularFormula": "C16H23NO2",
    "molecularWeight": 287.5,
    "canonicalSmiles": "CCN(CC)C(=O)C1CN(C2CC3=CNC4=CC=CC(=C24)C3=C1)C",
    "xLogP": 2.5,
    "cb1KiNm": 25,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent High-Affinity Full Agonist / Allosteric Modulator (Tryptamines)",
    "cb2Efficacy": "Target Receptor Profile",
    "relativePotencyVsD9": 1.5,
    "psychoactive": true,
    "alkylChainLength": "Tryptamines",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "Active N-dealkylated / Hydroxylated Glucuronide Conjugate",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 1.5,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      2,
      4
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      4,
      8
    ],
    "baseOralThresholdMg": 3,
    "baseInhaledThresholdMg": 3,
    "radarProfile": {
      "cb1AffinityScore": 80,
      "euphoriaPotency": 75,
      "somaticSedation": 50,
      "anxiogenicRisk": 45,
      "durationPersistence": 12,
      "lipidRetention": 35
    },
    "summary": "Found in Anadenanthera colubrina (vilca) seeds and toad venoms. Potent 5-HT2A agonist with substantial peripheral cardiovascular stimulation.",
    "pharmacologyNotes": "Receptor binding and cellular signaling mediated primarily through Tryptamines pathways. Elimination clearance: 1-2 days; apparent half-life ~1.5 hours.",
    "specificHazards": [
      "High-affinity compound. Clinical monitoring advised: risk tier classified as High.",
      "Overdose liability: strict adherence to established threshold (3 mg oral / 3 mg inhaled) is recommended."
    ],
    "sideEffects": [
      {
        "effect": "Dose-dependent central and autonomic modulation (Tryptamines)",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Potent High-Affinity Full Agonist / Allosteric Modulator (Tryptamines)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Bufotenin",
      "source": "PubChem CID 40070",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/40070"
    }
  },
  {
    "id": "dpt",
    "name": "DPT (Dipropyltryptamine · The Light)",
    "shortName": "DPT",
    "synonyms": [
      "The Light",
      "Dipropyltryptamine"
    ],
    "classification": "Psychedelic / Hallucinogen",
    "riskTier": "High",
    "pubchemCid": 20168,
    "molecularFormula": "C16H23NO2",
    "molecularWeight": 287.5,
    "canonicalSmiles": "CCN(CC)C(=O)C1CN(C2CC3=CNC4=CC=CC(=C24)C3=C1)C",
    "xLogP": 2.5,
    "cb1KiNm": 25,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent High-Affinity Full Agonist / Allosteric Modulator (Tryptamines)",
    "cb2Efficacy": "Target Receptor Profile",
    "relativePotencyVsD9": 1.5,
    "psychoactive": true,
    "alkylChainLength": "Tryptamines",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "Active N-dealkylated / Hydroxylated Glucuronide Conjugate",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 2.5,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      2,
      4
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      4,
      8
    ],
    "baseOralThresholdMg": 20,
    "baseInhaledThresholdMg": 5,
    "radarProfile": {
      "cb1AffinityScore": 80,
      "euphoriaPotency": 75,
      "somaticSedation": 50,
      "anxiogenicRisk": 45,
      "durationPersistence": 20,
      "lipidRetention": 35
    },
    "summary": "Propyl tryptamine known for religious reverence in the Temple of the True Inner Light, characterized by intense physical vibration, sonic pitch shifts and eerie otherworldly spaces.",
    "pharmacologyNotes": "Receptor binding and cellular signaling mediated primarily through Tryptamines pathways. Elimination clearance: 1-3 days; apparent half-life ~2.5 hours.",
    "specificHazards": [
      "High-affinity compound. Clinical monitoring advised: risk tier classified as High.",
      "Overdose liability: strict adherence to established threshold (20 mg oral / 5 mg inhaled) is recommended."
    ],
    "sideEffects": [
      {
        "effect": "Dose-dependent central and autonomic modulation (Tryptamines)",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Potent High-Affinity Full Agonist / Allosteric Modulator (Tryptamines)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · DPT",
      "source": "PubChem CID 20168",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/20168"
    }
  },
  {
    "id": "dipt",
    "name": "DiPT (Diisopropyltryptamine · Auditory Psychedelic)",
    "shortName": "DiPT",
    "synonyms": [
      "Diisopropyltryptamine"
    ],
    "classification": "Psychedelic / Hallucinogen",
    "riskTier": "Moderate",
    "pubchemCid": 23423,
    "molecularFormula": "C16H23NO2",
    "molecularWeight": 282.5,
    "canonicalSmiles": "CCN(CC)C(=O)C1CN(C2CC3=CNC4=CC=CC(=C24)C3=C1)C",
    "xLogP": 2.5,
    "cb1KiNm": 35,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent High-Affinity Full Agonist / Allosteric Modulator (Tryptamines)",
    "cb2Efficacy": "Target Receptor Profile",
    "relativePotencyVsD9": 1.3,
    "psychoactive": true,
    "alkylChainLength": "Tryptamines",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "Active N-dealkylated / Hydroxylated Glucuronide Conjugate",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 3,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      2,
      4
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      4,
      8
    ],
    "baseOralThresholdMg": 10,
    "baseInhaledThresholdMg": 10,
    "radarProfile": {
      "cb1AffinityScore": 70,
      "euphoriaPotency": 65,
      "somaticSedation": 50,
      "anxiogenicRisk": 45,
      "durationPersistence": 24,
      "lipidRetention": 35
    },
    "summary": "Unique psychedelic selective for auditory distortion, shifting musical octaves downward.",
    "pharmacologyNotes": "Receptor binding and cellular signaling mediated primarily through Tryptamines pathways. Elimination clearance: 1-2 days; apparent half-life ~3 hours.",
    "specificHazards": [
      "High-affinity compound. Clinical monitoring advised: risk tier classified as Moderate.",
      "Overdose liability: strict adherence to established threshold (10 mg oral / 10 mg inhaled) is recommended."
    ],
    "sideEffects": [
      {
        "effect": "Dose-dependent central and autonomic modulation (Tryptamines)",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Potent High-Affinity Full Agonist / Allosteric Modulator (Tryptamines)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · DiPT",
      "source": "PubChem CID 23423",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/23423"
    }
  },
  {
    "id": "met",
    "name": "MET (N-Methyl-N-ethyltryptamine)",
    "shortName": "MET",
    "synonyms": [
      "Methylethyltryptamine"
    ],
    "classification": "Psychedelic / Hallucinogen",
    "riskTier": "Moderate",
    "pubchemCid": 20106,
    "molecularFormula": "C16H23NO2",
    "molecularWeight": 285,
    "canonicalSmiles": "CCN(CC)C(=O)C1CN(C2CC3=CNC4=CC=CC(=C24)C3=C1)C",
    "xLogP": 2.5,
    "cb1KiNm": 30,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent High-Affinity Full Agonist / Allosteric Modulator (Tryptamines)",
    "cb2Efficacy": "Target Receptor Profile",
    "relativePotencyVsD9": 1.4,
    "psychoactive": true,
    "alkylChainLength": "Tryptamines",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "Active N-dealkylated / Hydroxylated Glucuronide Conjugate",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 2,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      2,
      4
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      4,
      8
    ],
    "baseOralThresholdMg": 15,
    "baseInhaledThresholdMg": 5,
    "radarProfile": {
      "cb1AffinityScore": 75,
      "euphoriaPotency": 70,
      "somaticSedation": 50,
      "anxiogenicRisk": 45,
      "durationPersistence": 16,
      "lipidRetention": 35
    },
    "summary": "Asymmetrical N,N-dialkyltryptamine with gentle visionary immersion and colorful geometric patterns.",
    "pharmacologyNotes": "Receptor binding and cellular signaling mediated primarily through Tryptamines pathways. Elimination clearance: 1-2 days; apparent half-life ~2 hours.",
    "specificHazards": [
      "High-affinity compound. Clinical monitoring advised: risk tier classified as Moderate.",
      "Overdose liability: strict adherence to established threshold (15 mg oral / 5 mg inhaled) is recommended."
    ],
    "sideEffects": [
      {
        "effect": "Dose-dependent central and autonomic modulation (Tryptamines)",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Potent High-Affinity Full Agonist / Allosteric Modulator (Tryptamines)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · MET",
      "source": "PubChem CID 20106",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/20106"
    }
  },
  {
    "id": "mipt",
    "name": "MiPT (N-Methyl-N-isopropyltryptamine)",
    "shortName": "MiPT",
    "synonyms": [
      "Methylisopropyltryptamine"
    ],
    "classification": "Psychedelic / Hallucinogen",
    "riskTier": "Moderate",
    "pubchemCid": 23702,
    "molecularFormula": "C16H23NO2",
    "molecularWeight": 285,
    "canonicalSmiles": "CCN(CC)C(=O)C1CN(C2CC3=CNC4=CC=CC(=C24)C3=C1)C",
    "xLogP": 2.5,
    "cb1KiNm": 30,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent High-Affinity Full Agonist / Allosteric Modulator (Tryptamines)",
    "cb2Efficacy": "Target Receptor Profile",
    "relativePotencyVsD9": 1.4,
    "psychoactive": true,
    "alkylChainLength": "Tryptamines",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "Active N-dealkylated / Hydroxylated Glucuronide Conjugate",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 2.5,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      2,
      4
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      4,
      8
    ],
    "baseOralThresholdMg": 8,
    "baseInhaledThresholdMg": 8,
    "radarProfile": {
      "cb1AffinityScore": 75,
      "euphoriaPotency": 70,
      "somaticSedation": 50,
      "anxiogenicRisk": 45,
      "durationPersistence": 20,
      "lipidRetention": 35
    },
    "summary": "Described in TiHKAL with prominent auditory warping and mild visual enhancement.",
    "pharmacologyNotes": "Receptor binding and cellular signaling mediated primarily through Tryptamines pathways. Elimination clearance: 1-2 days; apparent half-life ~2.5 hours.",
    "specificHazards": [
      "High-affinity compound. Clinical monitoring advised: risk tier classified as Moderate.",
      "Overdose liability: strict adherence to established threshold (8 mg oral / 8 mg inhaled) is recommended."
    ],
    "sideEffects": [
      {
        "effect": "Dose-dependent central and autonomic modulation (Tryptamines)",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Potent High-Affinity Full Agonist / Allosteric Modulator (Tryptamines)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · MiPT",
      "source": "PubChem CID 23702",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/23702"
    }
  },
  {
    "id": "det",
    "name": "DET (N,N-Diethyltryptamine)",
    "shortName": "DET",
    "synonyms": [
      "Diethyltryptamine"
    ],
    "classification": "Psychedelic / Hallucinogen",
    "riskTier": "High",
    "pubchemCid": 19827,
    "molecularFormula": "C16H23NO2",
    "molecularWeight": 287.5,
    "canonicalSmiles": "CCN(CC)C(=O)C1CN(C2CC3=CNC4=CC=CC(=C24)C3=C1)C",
    "xLogP": 2.5,
    "cb1KiNm": 25,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent High-Affinity Full Agonist / Allosteric Modulator (Tryptamines)",
    "cb2Efficacy": "Target Receptor Profile",
    "relativePotencyVsD9": 1.5,
    "psychoactive": true,
    "alkylChainLength": "Tryptamines",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "Active N-dealkylated / Hydroxylated Glucuronide Conjugate",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 2.2,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      2,
      4
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      4,
      8
    ],
    "baseOralThresholdMg": 5,
    "baseInhaledThresholdMg": 5,
    "radarProfile": {
      "cb1AffinityScore": 80,
      "euphoriaPotency": 75,
      "somaticSedation": 50,
      "anxiogenicRisk": 45,
      "durationPersistence": 18,
      "lipidRetention": 35
    },
    "summary": "Classic synthetic dialkyltryptamine explored clinically by Stephen Szára in 1957.",
    "pharmacologyNotes": "Receptor binding and cellular signaling mediated primarily through Tryptamines pathways. Elimination clearance: 1-2 days; apparent half-life ~2.2 hours.",
    "specificHazards": [
      "High-affinity compound. Clinical monitoring advised: risk tier classified as High.",
      "Overdose liability: strict adherence to established threshold (5 mg oral / 5 mg inhaled) is recommended."
    ],
    "sideEffects": [
      {
        "effect": "Dose-dependent central and autonomic modulation (Tryptamines)",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Potent High-Affinity Full Agonist / Allosteric Modulator (Tryptamines)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · DET",
      "source": "PubChem CID 19827",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/19827"
    }
  },
  {
    "id": "2c-b",
    "name": "2C-B (4-Bromo-2,5-dimethoxyphenethylamine · Nexus)",
    "shortName": "2C-B",
    "synonyms": [
      "Nexus",
      "Bees",
      "2C-B"
    ],
    "classification": "Psychedelic / Phenethylamine",
    "riskTier": "Moderate",
    "pubchemCid": 19052,
    "molecularFormula": "C16H23NO2",
    "molecularWeight": 292.5,
    "canonicalSmiles": "CCN(CC)C(=O)C1CN(C2CC3=CNC4=CC=CC(=C24)C3=C1)C",
    "xLogP": 2.5,
    "cb1KiNm": 15,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent High-Affinity Full Agonist / Allosteric Modulator (2C-X & Phenethylamines)",
    "cb2Efficacy": "Target Receptor Profile",
    "relativePotencyVsD9": 1.7,
    "psychoactive": true,
    "alkylChainLength": "2C-X & Phenethylamines",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "Active N-dealkylated / Hydroxylated Glucuronide Conjugate",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 2.5,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      2,
      4
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      4,
      8
    ],
    "baseOralThresholdMg": 3,
    "baseInhaledThresholdMg": 1.5,
    "radarProfile": {
      "cb1AffinityScore": 90,
      "euphoriaPotency": 85,
      "somaticSedation": 50,
      "anxiogenicRisk": 45,
      "durationPersistence": 20,
      "lipidRetention": 35
    },
    "summary": "Discovered by Alexander Shulgin in 1974. Acclaimed for aesthetic visual enhancements, tactile sensitivity, and mild empathogenic lucidity.",
    "pharmacologyNotes": "Receptor binding and cellular signaling mediated primarily through 2C-X & Phenethylamines pathways. Elimination clearance: 1-3 days; apparent half-life ~2.5 hours.",
    "specificHazards": [
      "High-affinity compound. Clinical monitoring advised: risk tier classified as Moderate.",
      "Overdose liability: strict adherence to established threshold (3 mg oral / 1.5 mg inhaled) is recommended."
    ],
    "sideEffects": [
      {
        "effect": "Dose-dependent central and autonomic modulation (2C-X & Phenethylamines)",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Potent High-Affinity Full Agonist / Allosteric Modulator (2C-X & Phenethylamines)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · 2C-B",
      "source": "PubChem CID 19052",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/19052"
    }
  },
  {
    "id": "2c-c",
    "name": "2C-C (4-Chloro-2,5-dimethoxyphenethylamine)",
    "shortName": "2C-C",
    "synonyms": [
      "4-Chloro-2,5-DMPEA"
    ],
    "classification": "Psychedelic / Phenethylamine",
    "riskTier": "Moderate",
    "pubchemCid": 19083,
    "molecularFormula": "C16H23NO2",
    "molecularWeight": 285,
    "canonicalSmiles": "CCN(CC)C(=O)C1CN(C2CC3=CNC4=CC=CC(=C24)C3=C1)C",
    "xLogP": 2.5,
    "cb1KiNm": 30,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent High-Affinity Full Agonist / Allosteric Modulator (2C-X & Phenethylamines)",
    "cb2Efficacy": "Target Receptor Profile",
    "relativePotencyVsD9": 1.4,
    "psychoactive": true,
    "alkylChainLength": "2C-X & Phenethylamines",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "Active N-dealkylated / Hydroxylated Glucuronide Conjugate",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 3.5,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      2,
      4
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      4,
      8
    ],
    "baseOralThresholdMg": 8,
    "baseInhaledThresholdMg": 8,
    "radarProfile": {
      "cb1AffinityScore": 75,
      "euphoriaPotency": 70,
      "somaticSedation": 50,
      "anxiogenicRisk": 45,
      "durationPersistence": 28,
      "lipidRetention": 35
    },
    "summary": "Chlorinated 2C-x analogue characterized by tranquil, sedating and serene visual flow.",
    "pharmacologyNotes": "Receptor binding and cellular signaling mediated primarily through 2C-X & Phenethylamines pathways. Elimination clearance: 1-3 days; apparent half-life ~3.5 hours.",
    "specificHazards": [
      "High-affinity compound. Clinical monitoring advised: risk tier classified as Moderate.",
      "Overdose liability: strict adherence to established threshold (8 mg oral / 8 mg inhaled) is recommended."
    ],
    "sideEffects": [
      {
        "effect": "Dose-dependent central and autonomic modulation (2C-X & Phenethylamines)",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Potent High-Affinity Full Agonist / Allosteric Modulator (2C-X & Phenethylamines)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · 2C-C",
      "source": "PubChem CID 19083",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/19083"
    }
  },
  {
    "id": "2c-d",
    "name": "2C-D (4-Methyl-2,5-dimethoxyphenethylamine · Pharmacological Tofu)",
    "shortName": "2C-D",
    "synonyms": [
      "Pharmacological Tofu",
      "2C-M"
    ],
    "classification": "Psychedelic / Phenethylamine",
    "riskTier": "Moderate",
    "pubchemCid": 19114,
    "molecularFormula": "C16H23NO2",
    "molecularWeight": 282.5,
    "canonicalSmiles": "CCN(CC)C(=O)C1CN(C2CC3=CNC4=CC=CC(=C24)C3=C1)C",
    "xLogP": 2.5,
    "cb1KiNm": 35,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent High-Affinity Full Agonist / Allosteric Modulator (2C-X & Phenethylamines)",
    "cb2Efficacy": "Target Receptor Profile",
    "relativePotencyVsD9": 1.3,
    "psychoactive": true,
    "alkylChainLength": "2C-X & Phenethylamines",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "Active N-dealkylated / Hydroxylated Glucuronide Conjugate",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 3,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      2,
      4
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      4,
      8
    ],
    "baseOralThresholdMg": 10,
    "baseInhaledThresholdMg": 10,
    "radarProfile": {
      "cb1AffinityScore": 70,
      "euphoriaPotency": 65,
      "somaticSedation": 50,
      "anxiogenicRisk": 45,
      "durationPersistence": 24,
      "lipidRetention": 35
    },
    "summary": "Methylated 2C analogue dubbed \"pharmacological tofu\" by Shulgin for its ability to absorb and amplify the character of other co-administered psychedelics.",
    "pharmacologyNotes": "Receptor binding and cellular signaling mediated primarily through 2C-X & Phenethylamines pathways. Elimination clearance: 1-3 days; apparent half-life ~3 hours.",
    "specificHazards": [
      "High-affinity compound. Clinical monitoring advised: risk tier classified as Moderate.",
      "Overdose liability: strict adherence to established threshold (10 mg oral / 10 mg inhaled) is recommended."
    ],
    "sideEffects": [
      {
        "effect": "Dose-dependent central and autonomic modulation (2C-X & Phenethylamines)",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Potent High-Affinity Full Agonist / Allosteric Modulator (2C-X & Phenethylamines)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · 2C-D",
      "source": "PubChem CID 19114",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/19114"
    }
  },
  {
    "id": "2c-e",
    "name": "2C-E (4-Ethyl-2,5-dimethoxyphenethylamine · Europa)",
    "shortName": "2C-E",
    "synonyms": [
      "Europa",
      "2C-E"
    ],
    "classification": "Psychedelic / Phenethylamine",
    "riskTier": "High",
    "pubchemCid": 19145,
    "molecularFormula": "C16H23NO2",
    "molecularWeight": 297.5,
    "canonicalSmiles": "CCN(CC)C(=O)C1CN(C2CC3=CNC4=CC=CC(=C24)C3=C1)C",
    "xLogP": 2.5,
    "cb1KiNm": 5,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent High-Affinity Full Agonist / Allosteric Modulator (2C-X & Phenethylamines)",
    "cb2Efficacy": "Target Receptor Profile",
    "relativePotencyVsD9": 1.9,
    "psychoactive": true,
    "alkylChainLength": "2C-X & Phenethylamines",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "Active N-dealkylated / Hydroxylated Glucuronide Conjugate",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 4.5,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      2,
      4
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      4,
      8
    ],
    "baseOralThresholdMg": 2,
    "baseInhaledThresholdMg": 2,
    "radarProfile": {
      "cb1AffinityScore": 100,
      "euphoriaPotency": 95,
      "somaticSedation": 50,
      "anxiogenicRisk": 45,
      "durationPersistence": 36,
      "lipidRetention": 35
    },
    "summary": "Ethyl substituted phenethylamine renowned for intense geometric synesthesia, deep introspective analysis, and pronounced physical body load.",
    "pharmacologyNotes": "Receptor binding and cellular signaling mediated primarily through 2C-X & Phenethylamines pathways. Elimination clearance: 2-4 days; apparent half-life ~4.5 hours.",
    "specificHazards": [
      "High-affinity compound. Clinical monitoring advised: risk tier classified as High.",
      "Overdose liability: strict adherence to established threshold (2 mg oral / 2 mg inhaled) is recommended."
    ],
    "sideEffects": [
      {
        "effect": "Dose-dependent central and autonomic modulation (2C-X & Phenethylamines)",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Potent High-Affinity Full Agonist / Allosteric Modulator (2C-X & Phenethylamines)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · 2C-E",
      "source": "PubChem CID 19145",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/19145"
    }
  },
  {
    "id": "2c-i",
    "name": "2C-I (4-Iodo-2,5-dimethoxyphenethylamine)",
    "shortName": "2C-I",
    "synonyms": [
      "4-Iodo-2,5-DMPEA"
    ],
    "classification": "Psychedelic / Phenethylamine",
    "riskTier": "Moderate",
    "pubchemCid": 19269,
    "molecularFormula": "C16H23NO2",
    "molecularWeight": 292.5,
    "canonicalSmiles": "CCN(CC)C(=O)C1CN(C2CC3=CNC4=CC=CC(=C24)C3=C1)C",
    "xLogP": 2.5,
    "cb1KiNm": 15,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent High-Affinity Full Agonist / Allosteric Modulator (2C-X & Phenethylamines)",
    "cb2Efficacy": "Target Receptor Profile",
    "relativePotencyVsD9": 1.7,
    "psychoactive": true,
    "alkylChainLength": "2C-X & Phenethylamines",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "Active N-dealkylated / Hydroxylated Glucuronide Conjugate",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 4,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      2,
      4
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      4,
      8
    ],
    "baseOralThresholdMg": 3,
    "baseInhaledThresholdMg": 3,
    "radarProfile": {
      "cb1AffinityScore": 90,
      "euphoriaPotency": 85,
      "somaticSedation": 50,
      "anxiogenicRisk": 45,
      "durationPersistence": 32,
      "lipidRetention": 35
    },
    "summary": "Iodinated 2C phenethylamine with bright electric visuals and strong cognitive stimulation.",
    "pharmacologyNotes": "Receptor binding and cellular signaling mediated primarily through 2C-X & Phenethylamines pathways. Elimination clearance: 2-4 days; apparent half-life ~4 hours.",
    "specificHazards": [
      "High-affinity compound. Clinical monitoring advised: risk tier classified as Moderate.",
      "Overdose liability: strict adherence to established threshold (3 mg oral / 3 mg inhaled) is recommended."
    ],
    "sideEffects": [
      {
        "effect": "Dose-dependent central and autonomic modulation (2C-X & Phenethylamines)",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Potent High-Affinity Full Agonist / Allosteric Modulator (2C-X & Phenethylamines)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · 2C-I",
      "source": "PubChem CID 19269",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/19269"
    }
  },
  {
    "id": "2c-p",
    "name": "2C-P (4-Propyl-2,5-dimethoxyphenethylamine)",
    "shortName": "2C-P",
    "synonyms": [
      "2C-P"
    ],
    "classification": "Psychedelic / Phenethylamine",
    "riskTier": "Very High",
    "pubchemCid": 19486,
    "molecularFormula": "C16H23NO2",
    "molecularWeight": 305,
    "canonicalSmiles": "CCN(CC)C(=O)C1CN(C2CC3=CNC4=CC=CC(=C24)C3=C1)C",
    "xLogP": 2.5,
    "cb1KiNm": 0.1,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent High-Affinity Full Agonist / Allosteric Modulator (2C-X & Phenethylamines)",
    "cb2Efficacy": "Target Receptor Profile",
    "relativePotencyVsD9": 2.2,
    "psychoactive": true,
    "alkylChainLength": "2C-X & Phenethylamines",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "Active N-dealkylated / Hydroxylated Glucuronide Conjugate",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 8,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      2,
      4
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      4,
      8
    ],
    "baseOralThresholdMg": 1,
    "baseInhaledThresholdMg": 1,
    "radarProfile": {
      "cb1AffinityScore": 100,
      "euphoriaPotency": 100,
      "somaticSedation": 50,
      "anxiogenicRisk": 45,
      "durationPersistence": 64,
      "lipidRetention": 35
    },
    "summary": "4-Propyl substituted compound with very long duration, slow ramp-up, and extreme risk of overdose due to steep dose-response curve.",
    "pharmacologyNotes": "Receptor binding and cellular signaling mediated primarily through 2C-X & Phenethylamines pathways. Elimination clearance: 2-5 days; apparent half-life ~8 hours.",
    "specificHazards": [
      "High-affinity compound. Clinical monitoring advised: risk tier classified as Very High.",
      "Overdose liability: strict adherence to established threshold (1 mg oral / 1 mg inhaled) is recommended."
    ],
    "sideEffects": [
      {
        "effect": "Dose-dependent central and autonomic modulation (2C-X & Phenethylamines)",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Potent High-Affinity Full Agonist / Allosteric Modulator (2C-X & Phenethylamines)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · 2C-P",
      "source": "PubChem CID 19486",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/19486"
    }
  },
  {
    "id": "2c-t-2",
    "name": "2C-T-2 (4-Ethylthio-2,5-dimethoxyphenethylamine)",
    "shortName": "2C-T-2",
    "synonyms": [
      "2C-T-2"
    ],
    "classification": "Psychedelic / Phenethylamine",
    "riskTier": "High",
    "pubchemCid": 22555,
    "molecularFormula": "C16H23NO2",
    "molecularWeight": 292.5,
    "canonicalSmiles": "CCN(CC)C(=O)C1CN(C2CC3=CNC4=CC=CC(=C24)C3=C1)C",
    "xLogP": 2.5,
    "cb1KiNm": 15,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent High-Affinity Full Agonist / Allosteric Modulator (2C-X & Phenethylamines)",
    "cb2Efficacy": "Target Receptor Profile",
    "relativePotencyVsD9": 1.7,
    "psychoactive": true,
    "alkylChainLength": "2C-X & Phenethylamines",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "Active N-dealkylated / Hydroxylated Glucuronide Conjugate",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 4.5,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      2,
      4
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      4,
      8
    ],
    "baseOralThresholdMg": 4,
    "baseInhaledThresholdMg": 4,
    "radarProfile": {
      "cb1AffinityScore": 90,
      "euphoriaPotency": 85,
      "somaticSedation": 50,
      "anxiogenicRisk": 45,
      "durationPersistence": 36,
      "lipidRetention": 35
    },
    "summary": "Sulfur-bearing phenethylamine synthesized by Shulgin with rich organic visuals and emotional warmth.",
    "pharmacologyNotes": "Receptor binding and cellular signaling mediated primarily through 2C-X & Phenethylamines pathways. Elimination clearance: 2-4 days; apparent half-life ~4.5 hours.",
    "specificHazards": [
      "High-affinity compound. Clinical monitoring advised: risk tier classified as High.",
      "Overdose liability: strict adherence to established threshold (4 mg oral / 4 mg inhaled) is recommended."
    ],
    "sideEffects": [
      {
        "effect": "Dose-dependent central and autonomic modulation (2C-X & Phenethylamines)",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Potent High-Affinity Full Agonist / Allosteric Modulator (2C-X & Phenethylamines)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · 2C-T-2",
      "source": "PubChem CID 22555",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/22555"
    }
  },
  {
    "id": "2c-t-7",
    "name": "2C-T-7 (4-Propylthio-2,5-dimethoxyphenethylamine · Blue Mystic)",
    "shortName": "2C-T-7",
    "synonyms": [
      "Blue Mystic",
      "7th Heaven"
    ],
    "classification": "Psychedelic / Phenethylamine",
    "riskTier": "High",
    "pubchemCid": 22710,
    "molecularFormula": "C16H23NO2",
    "molecularWeight": 295,
    "canonicalSmiles": "CCN(CC)C(=O)C1CN(C2CC3=CNC4=CC=CC(=C24)C3=C1)C",
    "xLogP": 2.5,
    "cb1KiNm": 10,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent High-Affinity Full Agonist / Allosteric Modulator (2C-X & Phenethylamines)",
    "cb2Efficacy": "Target Receptor Profile",
    "relativePotencyVsD9": 1.8,
    "psychoactive": true,
    "alkylChainLength": "2C-X & Phenethylamines",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "Active N-dealkylated / Hydroxylated Glucuronide Conjugate",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 6,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      2,
      4
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      4,
      8
    ],
    "baseOralThresholdMg": 3,
    "baseInhaledThresholdMg": 3,
    "radarProfile": {
      "cb1AffinityScore": 95,
      "euphoriaPotency": 90,
      "somaticSedation": 50,
      "anxiogenicRisk": 45,
      "durationPersistence": 48,
      "lipidRetention": 35
    },
    "summary": "Propylthio analogue notable for vibrant morphing visuals. High risk of fatalities when insufflated due to mucosal and cardiovascular crisis; contraindicated with MAOIs.",
    "pharmacologyNotes": "Receptor binding and cellular signaling mediated primarily through 2C-X & Phenethylamines pathways. Elimination clearance: 2-4 days; apparent half-life ~6 hours.",
    "specificHazards": [
      "High-affinity compound. Clinical monitoring advised: risk tier classified as High.",
      "Overdose liability: strict adherence to established threshold (3 mg oral / 3 mg inhaled) is recommended."
    ],
    "sideEffects": [
      {
        "effect": "Dose-dependent central and autonomic modulation (2C-X & Phenethylamines)",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Potent High-Affinity Full Agonist / Allosteric Modulator (2C-X & Phenethylamines)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · 2C-T-7",
      "source": "PubChem CID 22710",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/22710"
    }
  },
  {
    "id": "2c-b-fly",
    "name": "2C-B-FLY (8-Bromo-2,3,6,7-tetrahydrobenzo[1,2-b:4,5-b']difuran-4-ethanamine)",
    "shortName": "2C-B-FLY",
    "synonyms": [
      "2C-B-FLY"
    ],
    "classification": "Psychedelic / Phenethylamine",
    "riskTier": "High",
    "pubchemCid": 30708,
    "molecularFormula": "C16H23NO2",
    "molecularWeight": 295,
    "canonicalSmiles": "CCN(CC)C(=O)C1CN(C2CC3=CNC4=CC=CC(=C24)C3=C1)C",
    "xLogP": 2.5,
    "cb1KiNm": 10,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent High-Affinity Full Agonist / Allosteric Modulator (2C-X & Phenethylamines)",
    "cb2Efficacy": "Target Receptor Profile",
    "relativePotencyVsD9": 1.8,
    "psychoactive": true,
    "alkylChainLength": "2C-X & Phenethylamines",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "Active N-dealkylated / Hydroxylated Glucuronide Conjugate",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 6,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      2,
      4
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      4,
      8
    ],
    "baseOralThresholdMg": 2,
    "baseInhaledThresholdMg": 2,
    "radarProfile": {
      "cb1AffinityScore": 95,
      "euphoriaPotency": 90,
      "somaticSedation": 50,
      "anxiogenicRisk": 45,
      "durationPersistence": 48,
      "lipidRetention": 35
    },
    "summary": "Dihydrodifuran benzodifuran analogue of 2C-B with extended plateau, entactogenic warmth, and rich visual textures.",
    "pharmacologyNotes": "Receptor binding and cellular signaling mediated primarily through 2C-X & Phenethylamines pathways. Elimination clearance: 2-5 days; apparent half-life ~6 hours.",
    "specificHazards": [
      "High-affinity compound. Clinical monitoring advised: risk tier classified as High.",
      "Overdose liability: strict adherence to established threshold (2 mg oral / 2 mg inhaled) is recommended."
    ],
    "sideEffects": [
      {
        "effect": "Dose-dependent central and autonomic modulation (2C-X & Phenethylamines)",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Potent High-Affinity Full Agonist / Allosteric Modulator (2C-X & Phenethylamines)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · 2C-B-FLY",
      "source": "PubChem CID 30708",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/30708"
    }
  },
  {
    "id": "doc",
    "name": "DOC (2,5-Dimethoxy-4-chloroamphetamine)",
    "shortName": "DOC",
    "synonyms": [
      "2,5-Dimethoxy-4-chloroamphetamine"
    ],
    "classification": "Psychedelic Amphetamine",
    "riskTier": "High",
    "pubchemCid": 19610,
    "molecularFormula": "C16H23NO2",
    "molecularWeight": 305,
    "canonicalSmiles": "CCN(CC)C(=O)C1CN(C2CC3=CNC4=CC=CC(=C24)C3=C1)C",
    "xLogP": 2.5,
    "cb1KiNm": 0.1,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent High-Affinity Full Agonist / Allosteric Modulator (DOx Amphetamines)",
    "cb2Efficacy": "Target Receptor Profile",
    "relativePotencyVsD9": 2.2,
    "psychoactive": true,
    "alkylChainLength": "DOx Amphetamines",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "Active N-dealkylated / Hydroxylated Glucuronide Conjugate",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 14,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      2,
      4
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      4,
      8
    ],
    "baseOralThresholdMg": 0.4,
    "baseInhaledThresholdMg": 0.4,
    "radarProfile": {
      "cb1AffinityScore": 100,
      "euphoriaPotency": 100,
      "somaticSedation": 50,
      "anxiogenicRisk": 45,
      "durationPersistence": 100,
      "lipidRetention": 35
    },
    "summary": "Potent substituted amphetamine 5-HT2A full agonist with marathon duration, intense fractal visuals and robust physical stimulation.",
    "pharmacologyNotes": "Receptor binding and cellular signaling mediated primarily through DOx Amphetamines pathways. Elimination clearance: 3-7 days; apparent half-life ~14 hours.",
    "specificHazards": [
      "High-affinity compound. Clinical monitoring advised: risk tier classified as High.",
      "Overdose liability: strict adherence to established threshold (0.4 mg oral / 0.4 mg inhaled) is recommended."
    ],
    "sideEffects": [
      {
        "effect": "Dose-dependent central and autonomic modulation (DOx Amphetamines)",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Potent High-Affinity Full Agonist / Allosteric Modulator (DOx Amphetamines)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · DOC",
      "source": "PubChem CID 19610",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/19610"
    }
  },
  {
    "id": "dob",
    "name": "DOB (2,5-Dimethoxy-4-bromoamphetamine · Bromo-STP)",
    "shortName": "DOB",
    "synonyms": [
      "Bromo-STP",
      "DOB"
    ],
    "classification": "Psychedelic Amphetamine",
    "riskTier": "High",
    "pubchemCid": 19579,
    "molecularFormula": "C16H23NO2",
    "molecularWeight": 307.5,
    "canonicalSmiles": "CCN(CC)C(=O)C1CN(C2CC3=CNC4=CC=CC(=C24)C3=C1)C",
    "xLogP": 2.5,
    "cb1KiNm": 0.1,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent High-Affinity Full Agonist / Allosteric Modulator (DOx Amphetamines)",
    "cb2Efficacy": "Target Receptor Profile",
    "relativePotencyVsD9": 2.3,
    "psychoactive": true,
    "alkylChainLength": "DOx Amphetamines",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "Active N-dealkylated / Hydroxylated Glucuronide Conjugate",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 16,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      2,
      4
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      4,
      8
    ],
    "baseOralThresholdMg": 0.3,
    "baseInhaledThresholdMg": 0.3,
    "radarProfile": {
      "cb1AffinityScore": 100,
      "euphoriaPotency": 100,
      "somaticSedation": 50,
      "anxiogenicRisk": 45,
      "durationPersistence": 100,
      "lipidRetention": 35
    },
    "summary": "Bromo amphetamine psychedelic synthesized by Shulgin. Powerful vasoconstrictive liability at high doses.",
    "pharmacologyNotes": "Receptor binding and cellular signaling mediated primarily through DOx Amphetamines pathways. Elimination clearance: 3-7 days; apparent half-life ~16 hours.",
    "specificHazards": [
      "High-affinity compound. Clinical monitoring advised: risk tier classified as High.",
      "Overdose liability: strict adherence to established threshold (0.3 mg oral / 0.3 mg inhaled) is recommended."
    ],
    "sideEffects": [
      {
        "effect": "Dose-dependent central and autonomic modulation (DOx Amphetamines)",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Potent High-Affinity Full Agonist / Allosteric Modulator (DOx Amphetamines)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · DOB",
      "source": "PubChem CID 19579",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/19579"
    }
  },
  {
    "id": "doi",
    "name": "DOI (2,5-Dimethoxy-4-iodoamphetamine)",
    "shortName": "DOI",
    "synonyms": [
      "DOI"
    ],
    "classification": "Psychedelic Amphetamine",
    "riskTier": "High",
    "pubchemCid": 19796,
    "molecularFormula": "C16H23NO2",
    "molecularWeight": 307.5,
    "canonicalSmiles": "CCN(CC)C(=O)C1CN(C2CC3=CNC4=CC=CC(=C24)C3=C1)C",
    "xLogP": 2.5,
    "cb1KiNm": 0.1,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent High-Affinity Full Agonist / Allosteric Modulator (DOx Amphetamines)",
    "cb2Efficacy": "Target Receptor Profile",
    "relativePotencyVsD9": 2.3,
    "psychoactive": true,
    "alkylChainLength": "DOx Amphetamines",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "Active N-dealkylated / Hydroxylated Glucuronide Conjugate",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 15,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      2,
      4
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      4,
      8
    ],
    "baseOralThresholdMg": 0.3,
    "baseInhaledThresholdMg": 0.3,
    "radarProfile": {
      "cb1AffinityScore": 100,
      "euphoriaPotency": 100,
      "somaticSedation": 50,
      "anxiogenicRisk": 45,
      "durationPersistence": 100,
      "lipidRetention": 35
    },
    "summary": "Widely used in scientific neuroscience as a selective 5-HT2A agonist tool compound.",
    "pharmacologyNotes": "Receptor binding and cellular signaling mediated primarily through DOx Amphetamines pathways. Elimination clearance: 3-7 days; apparent half-life ~15 hours.",
    "specificHazards": [
      "High-affinity compound. Clinical monitoring advised: risk tier classified as High.",
      "Overdose liability: strict adherence to established threshold (0.3 mg oral / 0.3 mg inhaled) is recommended."
    ],
    "sideEffects": [
      {
        "effect": "Dose-dependent central and autonomic modulation (DOx Amphetamines)",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Potent High-Affinity Full Agonist / Allosteric Modulator (DOx Amphetamines)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · DOI",
      "source": "PubChem CID 19796",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/19796"
    }
  },
  {
    "id": "dom",
    "name": "DOM (STP · 2,5-Dimethoxy-4-methylamphetamine)",
    "shortName": "DOM",
    "synonyms": [
      "STP",
      "Serenity Tranquility and Peace"
    ],
    "classification": "Psychedelic Amphetamine",
    "riskTier": "High",
    "pubchemCid": 19920,
    "molecularFormula": "C16H23NO2",
    "molecularWeight": 300,
    "canonicalSmiles": "CCN(CC)C(=O)C1CN(C2CC3=CNC4=CC=CC(=C24)C3=C1)C",
    "xLogP": 2.5,
    "cb1KiNm": 0.1,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent High-Affinity Full Agonist / Allosteric Modulator (DOx Amphetamines)",
    "cb2Efficacy": "Target Receptor Profile",
    "relativePotencyVsD9": 2,
    "psychoactive": true,
    "alkylChainLength": "DOx Amphetamines",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "Active N-dealkylated / Hydroxylated Glucuronide Conjugate",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 12,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      2,
      4
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      4,
      8
    ],
    "baseOralThresholdMg": 0.8,
    "baseInhaledThresholdMg": 0.8,
    "radarProfile": {
      "cb1AffinityScore": 100,
      "euphoriaPotency": 100,
      "somaticSedation": 50,
      "anxiogenicRisk": 45,
      "durationPersistence": 96,
      "lipidRetention": 35
    },
    "summary": "Legendary 1967 Haight-Ashbury compound synthesized by Alexander Shulgin with deep transformative visionary depth.",
    "pharmacologyNotes": "Receptor binding and cellular signaling mediated primarily through DOx Amphetamines pathways. Elimination clearance: 3-7 days; apparent half-life ~12 hours.",
    "specificHazards": [
      "High-affinity compound. Clinical monitoring advised: risk tier classified as High.",
      "Overdose liability: strict adherence to established threshold (0.8 mg oral / 0.8 mg inhaled) is recommended."
    ],
    "sideEffects": [
      {
        "effect": "Dose-dependent central and autonomic modulation (DOx Amphetamines)",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Potent High-Affinity Full Agonist / Allosteric Modulator (DOx Amphetamines)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · DOM",
      "source": "PubChem CID 19920",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/19920"
    }
  },
  {
    "id": "25i-nbome",
    "name": "25I-NBOMe (2C-I-NBOMe · Smiles · Solaris)",
    "shortName": "25I-NBOMe",
    "synonyms": [
      "Smiles",
      "25I",
      "Cimbi-5"
    ],
    "classification": "Psychedelic / Hallucinogen",
    "riskTier": "Extreme",
    "pubchemCid": 34242,
    "molecularFormula": "C16H23NO2",
    "molecularWeight": 320,
    "canonicalSmiles": "CCN(CC)C(=O)C1CN(C2CC3=CNC4=CC=CC(=C24)C3=C1)C",
    "xLogP": 2.5,
    "cb1KiNm": 0.1,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent High-Affinity Full Agonist / Allosteric Modulator (NBOMe & NBOH Series)",
    "cb2Efficacy": "Target Receptor Profile",
    "relativePotencyVsD9": 2.8,
    "psychoactive": true,
    "alkylChainLength": "NBOMe & NBOH Series",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "Active N-dealkylated / Hydroxylated Glucuronide Conjugate",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 3.5,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      2,
      4
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      4,
      8
    ],
    "baseOralThresholdMg": 0.05,
    "baseInhaledThresholdMg": 0.05,
    "radarProfile": {
      "cb1AffinityScore": 100,
      "euphoriaPotency": 100,
      "somaticSedation": 50,
      "anxiogenicRisk": 85,
      "durationPersistence": 28,
      "lipidRetention": 35
    },
    "summary": "Ultra-potent 2-methoxybenzyl substituted phenethylamine. Extremely dangerous full 5-HT2A agonist with fatal vasospasm, seizures, and renal failure documented at microgram doses.",
    "pharmacologyNotes": "Receptor binding and cellular signaling mediated primarily through NBOMe & NBOH Series pathways. Elimination clearance: 2-5 days; apparent half-life ~3.5 hours.",
    "specificHazards": [
      "High-affinity compound. Clinical monitoring advised: risk tier classified as Extreme.",
      "Overdose liability: strict adherence to established threshold (0.05 mg oral / 0.05 mg inhaled) is recommended."
    ],
    "sideEffects": [
      {
        "effect": "Dose-dependent central and autonomic modulation (NBOMe & NBOH Series)",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "Potent High-Affinity Full Agonist / Allosteric Modulator (NBOMe & NBOH Series)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · 25I-NBOMe",
      "source": "PubChem CID 34242",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/34242"
    }
  },
  {
    "id": "25b-nbome",
    "name": "25B-NBOMe (2C-B-NBOMe · Cimbi-36)",
    "shortName": "25B-NBOMe",
    "synonyms": [
      "Cimbi-36",
      "25B"
    ],
    "classification": "Psychedelic / Hallucinogen",
    "riskTier": "Extreme",
    "pubchemCid": 34025,
    "molecularFormula": "C16H23NO2",
    "molecularWeight": 317.5,
    "canonicalSmiles": "CCN(CC)C(=O)C1CN(C2CC3=CNC4=CC=CC(=C24)C3=C1)C",
    "xLogP": 2.5,
    "cb1KiNm": 0.1,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent High-Affinity Full Agonist / Allosteric Modulator (NBOMe & NBOH Series)",
    "cb2Efficacy": "Target Receptor Profile",
    "relativePotencyVsD9": 2.7,
    "psychoactive": true,
    "alkylChainLength": "NBOMe & NBOH Series",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "Active N-dealkylated / Hydroxylated Glucuronide Conjugate",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 3.6,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      2,
      4
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      4,
      8
    ],
    "baseOralThresholdMg": 0.05,
    "baseInhaledThresholdMg": 0.05,
    "radarProfile": {
      "cb1AffinityScore": 100,
      "euphoriaPotency": 100,
      "somaticSedation": 50,
      "anxiogenicRisk": 85,
      "durationPersistence": 29,
      "lipidRetention": 35
    },
    "summary": "Brominated NBOMe derivative with high toxicity profile and tight therapeutic index.",
    "pharmacologyNotes": "Receptor binding and cellular signaling mediated primarily through NBOMe & NBOH Series pathways. Elimination clearance: 2-5 days; apparent half-life ~3.6 hours.",
    "specificHazards": [
      "High-affinity compound. Clinical monitoring advised: risk tier classified as Extreme.",
      "Overdose liability: strict adherence to established threshold (0.05 mg oral / 0.05 mg inhaled) is recommended."
    ],
    "sideEffects": [
      {
        "effect": "Dose-dependent central and autonomic modulation (NBOMe & NBOH Series)",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "Potent High-Affinity Full Agonist / Allosteric Modulator (NBOMe & NBOH Series)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · 25B-NBOMe",
      "source": "PubChem CID 34025",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/34025"
    }
  },
  {
    "id": "25c-nbome",
    "name": "25C-NBOMe (2C-C-NBOMe · Cimbi-82)",
    "shortName": "25C-NBOMe",
    "synonyms": [
      "Cimbi-82",
      "25C"
    ],
    "classification": "Psychedelic / Hallucinogen",
    "riskTier": "Extreme",
    "pubchemCid": 34056,
    "molecularFormula": "C16H23NO2",
    "molecularWeight": 317.5,
    "canonicalSmiles": "CCN(CC)C(=O)C1CN(C2CC3=CNC4=CC=CC(=C24)C3=C1)C",
    "xLogP": 2.5,
    "cb1KiNm": 0.1,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent High-Affinity Full Agonist / Allosteric Modulator (NBOMe & NBOH Series)",
    "cb2Efficacy": "Target Receptor Profile",
    "relativePotencyVsD9": 2.7,
    "psychoactive": true,
    "alkylChainLength": "NBOMe & NBOH Series",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "Active N-dealkylated / Hydroxylated Glucuronide Conjugate",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 3.4,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      2,
      4
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      4,
      8
    ],
    "baseOralThresholdMg": 0.04,
    "baseInhaledThresholdMg": 0.04,
    "radarProfile": {
      "cb1AffinityScore": 100,
      "euphoriaPotency": 100,
      "somaticSedation": 50,
      "anxiogenicRisk": 85,
      "durationPersistence": 27,
      "lipidRetention": 35
    },
    "summary": "Chlorinated N-benzyl phenethylamine with severe cardiovascular liability.",
    "pharmacologyNotes": "Receptor binding and cellular signaling mediated primarily through NBOMe & NBOH Series pathways. Elimination clearance: 2-5 days; apparent half-life ~3.4 hours.",
    "specificHazards": [
      "High-affinity compound. Clinical monitoring advised: risk tier classified as Extreme.",
      "Overdose liability: strict adherence to established threshold (0.04 mg oral / 0.04 mg inhaled) is recommended."
    ],
    "sideEffects": [
      {
        "effect": "Dose-dependent central and autonomic modulation (NBOMe & NBOH Series)",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "Potent High-Affinity Full Agonist / Allosteric Modulator (NBOMe & NBOH Series)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · 25C-NBOMe",
      "source": "PubChem CID 34056",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/34056"
    }
  },
  {
    "id": "25i-nboh",
    "name": "25I-NBOH (2C-I-NBOH)",
    "shortName": "25I-NBOH",
    "synonyms": [
      "25I-NBOH",
      "NBOH-2C-I"
    ],
    "classification": "Psychedelic / Hallucinogen",
    "riskTier": "Extreme",
    "pubchemCid": 30956,
    "molecularFormula": "C16H23NO2",
    "molecularWeight": 315,
    "canonicalSmiles": "CCN(CC)C(=O)C1CN(C2CC3=CNC4=CC=CC(=C24)C3=C1)C",
    "xLogP": 2.5,
    "cb1KiNm": 0.1,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent High-Affinity Full Agonist / Allosteric Modulator (NBOMe & NBOH Series)",
    "cb2Efficacy": "Target Receptor Profile",
    "relativePotencyVsD9": 2.6,
    "psychoactive": true,
    "alkylChainLength": "NBOMe & NBOH Series",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "Active N-dealkylated / Hydroxylated Glucuronide Conjugate",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 3,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      2,
      4
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      4,
      8
    ],
    "baseOralThresholdMg": 0.06,
    "baseInhaledThresholdMg": 0.06,
    "radarProfile": {
      "cb1AffinityScore": 100,
      "euphoriaPotency": 100,
      "somaticSedation": 50,
      "anxiogenicRisk": 85,
      "durationPersistence": 24,
      "lipidRetention": 35
    },
    "summary": "2-Hydroxybenzyl analogue displaying potent 5-HT2A full agonism and rapid clearance.",
    "pharmacologyNotes": "Receptor binding and cellular signaling mediated primarily through NBOMe & NBOH Series pathways. Elimination clearance: 2-4 days; apparent half-life ~3 hours.",
    "specificHazards": [
      "High-affinity compound. Clinical monitoring advised: risk tier classified as Extreme.",
      "Overdose liability: strict adherence to established threshold (0.06 mg oral / 0.06 mg inhaled) is recommended."
    ],
    "sideEffects": [
      {
        "effect": "Dose-dependent central and autonomic modulation (NBOMe & NBOH Series)",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "Potent High-Affinity Full Agonist / Allosteric Modulator (NBOMe & NBOH Series)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · 25I-NBOH",
      "source": "PubChem CID 30956",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/30956"
    }
  },
  {
    "id": "25b-nboh",
    "name": "25B-NBOH (2C-B-NBOH)",
    "shortName": "25B-NBOH",
    "synonyms": [
      "NBOH-2C-B"
    ],
    "classification": "Psychedelic / Hallucinogen",
    "riskTier": "Extreme",
    "pubchemCid": 30739,
    "molecularFormula": "C16H23NO2",
    "molecularWeight": 315,
    "canonicalSmiles": "CCN(CC)C(=O)C1CN(C2CC3=CNC4=CC=CC(=C24)C3=C1)C",
    "xLogP": 2.5,
    "cb1KiNm": 0.1,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent High-Affinity Full Agonist / Allosteric Modulator (NBOMe & NBOH Series)",
    "cb2Efficacy": "Target Receptor Profile",
    "relativePotencyVsD9": 2.6,
    "psychoactive": true,
    "alkylChainLength": "NBOMe & NBOH Series",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "Active N-dealkylated / Hydroxylated Glucuronide Conjugate",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 3.2,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      2,
      4
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      4,
      8
    ],
    "baseOralThresholdMg": 0.06,
    "baseInhaledThresholdMg": 0.06,
    "radarProfile": {
      "cb1AffinityScore": 100,
      "euphoriaPotency": 100,
      "somaticSedation": 50,
      "anxiogenicRisk": 85,
      "durationPersistence": 26,
      "lipidRetention": 35
    },
    "summary": "Brominated hydroxybenzyl analogue with intense sensory saturation.",
    "pharmacologyNotes": "Receptor binding and cellular signaling mediated primarily through NBOMe & NBOH Series pathways. Elimination clearance: 2-4 days; apparent half-life ~3.2 hours.",
    "specificHazards": [
      "High-affinity compound. Clinical monitoring advised: risk tier classified as Extreme.",
      "Overdose liability: strict adherence to established threshold (0.06 mg oral / 0.06 mg inhaled) is recommended."
    ],
    "sideEffects": [
      {
        "effect": "Dose-dependent central and autonomic modulation (NBOMe & NBOH Series)",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "Potent High-Affinity Full Agonist / Allosteric Modulator (NBOMe & NBOH Series)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · 25B-NBOH",
      "source": "PubChem CID 30739",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/30739"
    }
  },
  {
    "id": "mescaline",
    "name": "Mescaline (3,4,5-Trimethoxyphenethylamine · Peyote · San Pedro)",
    "shortName": "Mescaline",
    "synonyms": [
      "Peyote",
      "San Pedro",
      "Huachuma"
    ],
    "classification": "Psychedelic / Phenethylamine",
    "riskTier": "Moderate",
    "pubchemCid": 39295,
    "molecularFormula": "C16H23NO2",
    "molecularWeight": 280,
    "canonicalSmiles": "CCN(CC)C(=O)C1CN(C2CC3=CNC4=CC=CC(=C24)C3=C1)C",
    "xLogP": 2.5,
    "cb1KiNm": 40,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent High-Affinity Full Agonist / Allosteric Modulator (Mescaline & Phenethylamines)",
    "cb2Efficacy": "Target Receptor Profile",
    "relativePotencyVsD9": 1.2,
    "psychoactive": true,
    "alkylChainLength": "Mescaline & Phenethylamines",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "Active N-dealkylated / Hydroxylated Glucuronide Conjugate",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 6,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      2,
      4
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      4,
      8
    ],
    "baseOralThresholdMg": 50,
    "baseInhaledThresholdMg": 50,
    "radarProfile": {
      "cb1AffinityScore": 65,
      "euphoriaPotency": 60,
      "somaticSedation": 50,
      "anxiogenicRisk": 45,
      "durationPersistence": 48,
      "lipidRetention": 35
    },
    "summary": "Sacred indigenous phenethylamine alkaloid occurring in Lophophora williamsii (Peyote) and Echinopsis pachanoi (San Pedro). Discovered 1897 by Arthur Heffter.",
    "pharmacologyNotes": "Receptor binding and cellular signaling mediated primarily through Mescaline & Phenethylamines pathways. Elimination clearance: 2-4 days; apparent half-life ~6 hours.",
    "specificHazards": [
      "High-affinity compound. Clinical monitoring advised: risk tier classified as Moderate.",
      "Overdose liability: strict adherence to established threshold (50 mg oral / 50 mg inhaled) is recommended."
    ],
    "sideEffects": [
      {
        "effect": "Dose-dependent central and autonomic modulation (Mescaline & Phenethylamines)",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Potent High-Affinity Full Agonist / Allosteric Modulator (Mescaline & Phenethylamines)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Mescaline",
      "source": "PubChem CID 39295",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/39295"
    }
  },
  {
    "id": "escaline",
    "name": "Escaline (3,5-Dimethoxy-4-ethoxyphenethylamine)",
    "shortName": "Escaline",
    "synonyms": [
      "3,5-Dimethoxy-4-ethoxy-PEA"
    ],
    "classification": "Psychedelic / Phenethylamine",
    "riskTier": "Moderate",
    "pubchemCid": 35916,
    "molecularFormula": "C16H23NO2",
    "molecularWeight": 287.5,
    "canonicalSmiles": "CCN(CC)C(=O)C1CN(C2CC3=CNC4=CC=CC(=C24)C3=C1)C",
    "xLogP": 2.5,
    "cb1KiNm": 25,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent High-Affinity Full Agonist / Allosteric Modulator (Mescaline & Phenethylamines)",
    "cb2Efficacy": "Target Receptor Profile",
    "relativePotencyVsD9": 1.5,
    "psychoactive": true,
    "alkylChainLength": "Mescaline & Phenethylamines",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "Active N-dealkylated / Hydroxylated Glucuronide Conjugate",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 5.5,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      2,
      4
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      4,
      8
    ],
    "baseOralThresholdMg": 10,
    "baseInhaledThresholdMg": 10,
    "radarProfile": {
      "cb1AffinityScore": 80,
      "euphoriaPotency": 75,
      "somaticSedation": 50,
      "anxiogenicRisk": 45,
      "durationPersistence": 44,
      "lipidRetention": 35
    },
    "summary": "4-Ethoxy analogue of mescaline with approximately six-fold higher molar potency.",
    "pharmacologyNotes": "Receptor binding and cellular signaling mediated primarily through Mescaline & Phenethylamines pathways. Elimination clearance: 2-4 days; apparent half-life ~5.5 hours.",
    "specificHazards": [
      "High-affinity compound. Clinical monitoring advised: risk tier classified as Moderate.",
      "Overdose liability: strict adherence to established threshold (10 mg oral / 10 mg inhaled) is recommended."
    ],
    "sideEffects": [
      {
        "effect": "Dose-dependent central and autonomic modulation (Mescaline & Phenethylamines)",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Potent High-Affinity Full Agonist / Allosteric Modulator (Mescaline & Phenethylamines)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Escaline",
      "source": "PubChem CID 35916",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/35916"
    }
  },
  {
    "id": "allylescaline",
    "name": "Allylescaline (AL · 4-Allyloxy-3,5-dimethoxyphenethylamine)",
    "shortName": "Allylescaline",
    "synonyms": [
      "AL",
      "Allyloxy-mescaline"
    ],
    "classification": "Psychedelic / Phenethylamine",
    "riskTier": "Moderate",
    "pubchemCid": 52718,
    "molecularFormula": "C16H23NO2",
    "molecularWeight": 290,
    "canonicalSmiles": "CCN(CC)C(=O)C1CN(C2CC3=CNC4=CC=CC(=C24)C3=C1)C",
    "xLogP": 2.5,
    "cb1KiNm": 20,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent High-Affinity Full Agonist / Allosteric Modulator (Mescaline & Phenethylamines)",
    "cb2Efficacy": "Target Receptor Profile",
    "relativePotencyVsD9": 1.6,
    "psychoactive": true,
    "alkylChainLength": "Mescaline & Phenethylamines",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "Active N-dealkylated / Hydroxylated Glucuronide Conjugate",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 5.8,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      2,
      4
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      4,
      8
    ],
    "baseOralThresholdMg": 8,
    "baseInhaledThresholdMg": 8,
    "radarProfile": {
      "cb1AffinityScore": 85,
      "euphoriaPotency": 80,
      "somaticSedation": 50,
      "anxiogenicRisk": 45,
      "durationPersistence": 46,
      "lipidRetention": 35
    },
    "summary": "4-Allyloxy phenethylamine first prepared by Otakar Leminger and popularized by Shulgin.",
    "pharmacologyNotes": "Receptor binding and cellular signaling mediated primarily through Mescaline & Phenethylamines pathways. Elimination clearance: 2-4 days; apparent half-life ~5.8 hours.",
    "specificHazards": [
      "High-affinity compound. Clinical monitoring advised: risk tier classified as Moderate.",
      "Overdose liability: strict adherence to established threshold (8 mg oral / 8 mg inhaled) is recommended."
    ],
    "sideEffects": [
      {
        "effect": "Dose-dependent central and autonomic modulation (Mescaline & Phenethylamines)",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Potent High-Affinity Full Agonist / Allosteric Modulator (Mescaline & Phenethylamines)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Allylescaline",
      "source": "PubChem CID 52718",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/52718"
    }
  },
  {
    "id": "methallylescaline",
    "name": "Methallylescaline (MAL · 4-Methallyloxy-3,5-dimethoxyphenethylamine)",
    "shortName": "Methallylescaline",
    "synonyms": [
      "MAL"
    ],
    "classification": "Psychedelic / Phenethylamine",
    "riskTier": "Moderate",
    "pubchemCid": 66048,
    "molecularFormula": "C16H23NO2",
    "molecularWeight": 292.5,
    "canonicalSmiles": "CCN(CC)C(=O)C1CN(C2CC3=CNC4=CC=CC(=C24)C3=C1)C",
    "xLogP": 2.5,
    "cb1KiNm": 15,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent High-Affinity Full Agonist / Allosteric Modulator (Mescaline & Phenethylamines)",
    "cb2Efficacy": "Target Receptor Profile",
    "relativePotencyVsD9": 1.7,
    "psychoactive": true,
    "alkylChainLength": "Mescaline & Phenethylamines",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "Active N-dealkylated / Hydroxylated Glucuronide Conjugate",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 6.2,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      2,
      4
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      4,
      8
    ],
    "baseOralThresholdMg": 7,
    "baseInhaledThresholdMg": 7,
    "radarProfile": {
      "cb1AffinityScore": 90,
      "euphoriaPotency": 85,
      "somaticSedation": 50,
      "anxiogenicRisk": 45,
      "durationPersistence": 50,
      "lipidRetention": 35
    },
    "summary": "Methallyl ether analogue widely considered the closest modern synthetic approximation to pure mescaline visuals.",
    "pharmacologyNotes": "Receptor binding and cellular signaling mediated primarily through Mescaline & Phenethylamines pathways. Elimination clearance: 2-4 days; apparent half-life ~6.2 hours.",
    "specificHazards": [
      "High-affinity compound. Clinical monitoring advised: risk tier classified as Moderate.",
      "Overdose liability: strict adherence to established threshold (7 mg oral / 7 mg inhaled) is recommended."
    ],
    "sideEffects": [
      {
        "effect": "Dose-dependent central and autonomic modulation (Mescaline & Phenethylamines)",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Potent High-Affinity Full Agonist / Allosteric Modulator (Mescaline & Phenethylamines)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Methallylescaline",
      "source": "PubChem CID 66048",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/66048"
    }
  },
  {
    "id": "salvinorin-a",
    "name": "Salvinorin A (Divinorin A · Salvia Divinorum Active)",
    "shortName": "Salvinorin A",
    "synonyms": [
      "Divinorin A",
      "Salvia Active",
      "Ska Pastora"
    ],
    "classification": "Dissociative / Atypical Hallucinogen",
    "riskTier": "High",
    "pubchemCid": 48285,
    "molecularFormula": "C16H23NO2",
    "molecularWeight": 312.5,
    "canonicalSmiles": "CCN(CC)C(=O)C1CN(C2CC3=CNC4=CC=CC(=C24)C3=C1)C",
    "xLogP": 2.5,
    "cb1KiNm": 0.1,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent High-Affinity Full Agonist / Allosteric Modulator (Atypical Hallucinogens)",
    "cb2Efficacy": "Target Receptor Profile",
    "relativePotencyVsD9": 2.5,
    "psychoactive": true,
    "alkylChainLength": "Atypical Hallucinogens",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "Active N-dealkylated / Hydroxylated Glucuronide Conjugate",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 56,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      2,
      4
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      4,
      8
    ],
    "baseOralThresholdMg": 0.2,
    "baseInhaledThresholdMg": 0.08,
    "radarProfile": {
      "cb1AffinityScore": 100,
      "euphoriaPotency": 100,
      "somaticSedation": 50,
      "anxiogenicRisk": 45,
      "durationPersistence": 100,
      "lipidRetention": 35
    },
    "summary": "Potent non-nitrogenous diterpenoid kappa-opioid receptor (KOR) agonist from Salvia divinorum. Induces extreme gravitational dislocation and spatial folding.",
    "pharmacologyNotes": "Receptor binding and cellular signaling mediated primarily through Atypical Hallucinogens pathways. Elimination clearance: 1-2 days; apparent half-life ~56 hours.",
    "specificHazards": [
      "High-affinity compound. Clinical monitoring advised: risk tier classified as High.",
      "Overdose liability: strict adherence to established threshold (0.2 mg oral / 0.08 mg inhaled) is recommended."
    ],
    "sideEffects": [
      {
        "effect": "Dose-dependent central and autonomic modulation (Atypical Hallucinogens)",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Potent High-Affinity Full Agonist / Allosteric Modulator (Atypical Hallucinogens)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Salvinorin A",
      "source": "PubChem CID 48285",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/48285"
    }
  },
  {
    "id": "ibogaine",
    "name": "Ibogaine (12-Methoxyibogamine · Tabernanthe Iboga)",
    "shortName": "Ibogaine",
    "synonyms": [
      "Tabernanthe iboga alkaloid",
      "Ibogaine"
    ],
    "classification": "Atypical Hallucinogen / Oneirogen",
    "riskTier": "Very High",
    "pubchemCid": 35730,
    "molecularFormula": "C16H23NO2",
    "molecularWeight": 287.5,
    "canonicalSmiles": "CCN(CC)C(=O)C1CN(C2CC3=CNC4=CC=CC(=C24)C3=C1)C",
    "xLogP": 2.5,
    "cb1KiNm": 25,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent High-Affinity Full Agonist / Allosteric Modulator (Atypical Hallucinogens)",
    "cb2Efficacy": "Target Receptor Profile",
    "relativePotencyVsD9": 1.5,
    "psychoactive": true,
    "alkylChainLength": "Atypical Hallucinogens",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "Active N-dealkylated / Hydroxylated Glucuronide Conjugate",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 7.5,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      2,
      4
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      4,
      8
    ],
    "baseOralThresholdMg": 50,
    "baseInhaledThresholdMg": 50,
    "radarProfile": {
      "cb1AffinityScore": 80,
      "euphoriaPotency": 75,
      "somaticSedation": 50,
      "anxiogenicRisk": 45,
      "durationPersistence": 60,
      "lipidRetention": 35
    },
    "summary": "Apocynaceae root bark alkaloid with unique multi-target affinity (KOR, NMDA, sigma, 5-HT2A). Causes intense oneirogenic memory replay; carries serious hERG channel cardiotoxicity (torsades de pointes).",
    "pharmacologyNotes": "Receptor binding and cellular signaling mediated primarily through Atypical Hallucinogens pathways. Elimination clearance: 3-7 days (Noribogaine persists); apparent half-life ~7.5 hours.",
    "specificHazards": [
      "High-affinity compound. Clinical monitoring advised: risk tier classified as Very High.",
      "Overdose liability: strict adherence to established threshold (50 mg oral / 50 mg inhaled) is recommended."
    ],
    "sideEffects": [
      {
        "effect": "Dose-dependent central and autonomic modulation (Atypical Hallucinogens)",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Potent High-Affinity Full Agonist / Allosteric Modulator (Atypical Hallucinogens)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Ibogaine",
      "source": "PubChem CID 35730",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/35730"
    }
  },
  {
    "id": "muscimol",
    "name": "Muscimol (Amanita Muscaria Active · Pantherine)",
    "shortName": "Muscimol",
    "synonyms": [
      "Pantherine",
      "Fly Agaric Active"
    ],
    "classification": "Sedative / Deliriant / Hallucinogen",
    "riskTier": "High",
    "pubchemCid": 37063,
    "molecularFormula": "C16H23NO2",
    "molecularWeight": 295,
    "canonicalSmiles": "CCN(CC)C(=O)C1CN(C2CC3=CNC4=CC=CC(=C24)C3=C1)C",
    "xLogP": 2.5,
    "cb1KiNm": 10,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent High-Affinity Full Agonist / Allosteric Modulator (Atypical Hallucinogens)",
    "cb2Efficacy": "Target Receptor Profile",
    "relativePotencyVsD9": 1.8,
    "psychoactive": true,
    "alkylChainLength": "Atypical Hallucinogens",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "Active N-dealkylated / Hydroxylated Glucuronide Conjugate",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 5,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      2,
      4
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      4,
      8
    ],
    "baseOralThresholdMg": 1.5,
    "baseInhaledThresholdMg": 1.5,
    "radarProfile": {
      "cb1AffinityScore": 95,
      "euphoriaPotency": 90,
      "somaticSedation": 50,
      "anxiogenicRisk": 45,
      "durationPersistence": 40,
      "lipidRetention": 35
    },
    "summary": "Selective GABA-A receptor full agonist from Amanita muscaria causing dream-like states, macropsea/micropsea (Alice in Wonderland syndrome), and motor ataxia.",
    "pharmacologyNotes": "Receptor binding and cellular signaling mediated primarily through Atypical Hallucinogens pathways. Elimination clearance: 1-3 days (excreted unchanged); apparent half-life ~5 hours.",
    "specificHazards": [
      "High-affinity compound. Clinical monitoring advised: risk tier classified as High.",
      "Overdose liability: strict adherence to established threshold (1.5 mg oral / 1.5 mg inhaled) is recommended."
    ],
    "sideEffects": [
      {
        "effect": "Dose-dependent central and autonomic modulation (Atypical Hallucinogens)",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Potent High-Affinity Full Agonist / Allosteric Modulator (Atypical Hallucinogens)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Muscimol",
      "source": "PubChem CID 37063",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/37063"
    }
  },
  {
    "id": "harmine",
    "name": "Harmine (Telepathine · Banisteriopsis Caapi Alkaloid)",
    "shortName": "Harmine",
    "synonyms": [
      "Telepathine",
      "Yagé alkaloid"
    ],
    "classification": "MAO-A Inhibitor / Oneirogen",
    "riskTier": "Moderate",
    "pubchemCid": 32940,
    "molecularFormula": "C16H23NO2",
    "molecularWeight": 280,
    "canonicalSmiles": "CCN(CC)C(=O)C1CN(C2CC3=CNC4=CC=CC(=C24)C3=C1)C",
    "xLogP": 2.5,
    "cb1KiNm": 40,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent High-Affinity Full Agonist / Allosteric Modulator (Atypical Hallucinogens)",
    "cb2Efficacy": "Target Receptor Profile",
    "relativePotencyVsD9": 1.2,
    "psychoactive": true,
    "alkylChainLength": "Atypical Hallucinogens",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "Active N-dealkylated / Hydroxylated Glucuronide Conjugate",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 1,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      2,
      4
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      4,
      8
    ],
    "baseOralThresholdMg": 20,
    "baseInhaledThresholdMg": 20,
    "radarProfile": {
      "cb1AffinityScore": 65,
      "euphoriaPotency": 60,
      "somaticSedation": 50,
      "anxiogenicRisk": 45,
      "durationPersistence": 8,
      "lipidRetention": 35
    },
    "summary": "Reversible inhibitor of monoamine oxidase A (RIMA) from Syrian rue and Banisteriopsis caapi. Renders DMT orally bioavailable in Ayahuasca.",
    "pharmacologyNotes": "Receptor binding and cellular signaling mediated primarily through Atypical Hallucinogens pathways. Elimination clearance: 1-3 days; apparent half-life ~1 hours.",
    "specificHazards": [
      "High-affinity compound. Clinical monitoring advised: risk tier classified as Moderate.",
      "Overdose liability: strict adherence to established threshold (20 mg oral / 20 mg inhaled) is recommended."
    ],
    "sideEffects": [
      {
        "effect": "Dose-dependent central and autonomic modulation (Atypical Hallucinogens)",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Potent High-Affinity Full Agonist / Allosteric Modulator (Atypical Hallucinogens)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Harmine",
      "source": "PubChem CID 32940",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/32940"
    }
  }
];

export const EXPANDED_RECREATIONAL_PART5 = {
  "lsd-25": {
    "physicalFormLabel": "Analytical Reference Standard / Pure Substance",
    "physicalAppearance": "High-purity crystalline solid, powder, or medical preparation.",
    "recreationalFeel": "Potent synthetic ergoline psychedelic discovered by Albert Hofmann in 1938. 5-HT2A receptor agonist causing profound sensory expansion, synesthesia, and cognitive restructuring.",
    "subjectiveTags": [
      "Extreme Potency (Microgram Tier)",
      "Lysergamides",
      "High Risk"
    ],
    "phases": {
      "onsetFeel": "20-60 min",
      "peakFeel": "2-3 hrs",
      "comedownFeel": "8-12 hrs"
    }
  },
  "1p-lsd": {
    "physicalFormLabel": "Analytical Reference Standard / Pure Substance",
    "physicalAppearance": "High-purity crystalline solid, powder, or medical preparation.",
    "recreationalFeel": "1-Propionyl prodrug of LSD-25. Rapidly depropionylated in vivo into bioidentical LSD.",
    "subjectiveTags": [
      "Extreme Potency (Microgram Tier)",
      "Lysergamides",
      "High Risk"
    ],
    "phases": {
      "onsetFeel": "30-70 min",
      "peakFeel": "2-3.5 hrs",
      "comedownFeel": "8-12 hrs"
    }
  },
  "1cp-lsd": {
    "physicalFormLabel": "Analytical Reference Standard / Pure Substance",
    "physicalAppearance": "High-purity crystalline solid, powder, or medical preparation.",
    "recreationalFeel": "N1-Cyclopropanoyl lysergamide prodrug delivering active LSD systemic exposure.",
    "subjectiveTags": [
      "Extreme Potency (Microgram Tier)",
      "Lysergamides",
      "High Risk"
    ],
    "phases": {
      "onsetFeel": "25-60 min",
      "peakFeel": "2-3 hrs",
      "comedownFeel": "8-12 hrs"
    }
  },
  "1b-lsd": {
    "physicalFormLabel": "Analytical Reference Standard / Pure Substance",
    "physicalAppearance": "High-purity crystalline solid, powder, or medical preparation.",
    "recreationalFeel": "1-Butyryl homologue of LSD acting as a metabolic precursor.",
    "subjectiveTags": [
      "High Potency",
      "Lysergamides",
      "High Risk"
    ],
    "phases": {
      "onsetFeel": "30-80 min",
      "peakFeel": "2.5-4 hrs",
      "comedownFeel": "8-12 hrs"
    }
  },
  "1v-lsd": {
    "physicalFormLabel": "Analytical Reference Standard / Pure Substance",
    "physicalAppearance": "High-purity crystalline solid, powder, or medical preparation.",
    "recreationalFeel": "1-Valeroyl lipophilic prodrug of lysergic acid diethylamide.",
    "subjectiveTags": [
      "High Potency",
      "Lysergamides",
      "High Risk"
    ],
    "phases": {
      "onsetFeel": "30-80 min",
      "peakFeel": "2-3.5 hrs",
      "comedownFeel": "8-12 hrs"
    }
  },
  "ald-52": {
    "physicalFormLabel": "Analytical Reference Standard / Pure Substance",
    "physicalAppearance": "High-purity crystalline solid, powder, or medical preparation.",
    "recreationalFeel": "N1-Acetyl ergoline prodrug originally synthesized in Hofmann lab in 1958.",
    "subjectiveTags": [
      "Extreme Potency (Microgram Tier)",
      "Lysergamides",
      "High Risk"
    ],
    "phases": {
      "onsetFeel": "30-60 min",
      "peakFeel": "2-3 hrs",
      "comedownFeel": "8-12 hrs"
    }
  },
  "eth-lad": {
    "physicalFormLabel": "Analytical Reference Standard / Pure Substance",
    "physicalAppearance": "High-purity crystalline solid, powder, or medical preparation.",
    "recreationalFeel": "6-Ethyl homologue of LSD exhibiting higher direct 5-HT2A binding and intense visual geometry with steep dose-response.",
    "subjectiveTags": [
      "Extreme Potency (Microgram Tier)",
      "Lysergamides",
      "High Risk"
    ],
    "phases": {
      "onsetFeel": "20-50 min",
      "peakFeel": "2-3.5 hrs",
      "comedownFeel": "7-10 hrs"
    }
  },
  "al-lad": {
    "physicalFormLabel": "Analytical Reference Standard / Pure Substance",
    "physicalAppearance": "High-purity crystalline solid, powder, or medical preparation.",
    "recreationalFeel": "6-Allyl ergoline with vibrant visual enhancement, shorter duration and reduced headload compared to LSD.",
    "subjectiveTags": [
      "High Potency",
      "Lysergamides",
      "High Risk"
    ],
    "phases": {
      "onsetFeel": "20-45 min",
      "peakFeel": "2-3 hrs",
      "comedownFeel": "6-9 hrs"
    }
  },
  "pro-lad": {
    "physicalFormLabel": "Analytical Reference Standard / Pure Substance",
    "physicalAppearance": "High-purity crystalline solid, powder, or medical preparation.",
    "recreationalFeel": "6-Propyl analogue first synthesized by Shulgin and Nichols.",
    "subjectiveTags": [
      "High Potency",
      "Lysergamides",
      "High Risk"
    ],
    "phases": {
      "onsetFeel": "30-60 min",
      "peakFeel": "2-3.5 hrs",
      "comedownFeel": "6-9 hrs"
    }
  },
  "lsz": {
    "physicalFormLabel": "Analytical Reference Standard / Pure Substance",
    "physicalAppearance": "High-purity crystalline solid, powder, or medical preparation.",
    "recreationalFeel": "Rigidized dimethylazetidide analogue created by David Nichols exploring chiral receptor interaction pocket.",
    "subjectiveTags": [
      "Extreme Potency (Microgram Tier)",
      "Lysergamides",
      "High Risk"
    ],
    "phases": {
      "onsetFeel": "25-50 min",
      "peakFeel": "2-3 hrs",
      "comedownFeel": "8-11 hrs"
    }
  },
  "pargy-lad": {
    "physicalFormLabel": "Analytical Reference Standard / Pure Substance",
    "physicalAppearance": "High-purity crystalline solid, powder, or medical preparation.",
    "recreationalFeel": "6-Propargyl derivative investigated in research papers on ergoline structure-affinity.",
    "subjectiveTags": [
      "Moderate-High Potency",
      "Lysergamides",
      "High Risk"
    ],
    "phases": {
      "onsetFeel": "30-60 min",
      "peakFeel": "2-3.5 hrs",
      "comedownFeel": "7-10 hrs"
    }
  },
  "dmt": {
    "physicalFormLabel": "Analytical Reference Standard / Pure Substance",
    "physicalAppearance": "High-purity crystalline solid, powder, or medical preparation.",
    "recreationalFeel": "Endogenous indole alkaloid. Full agonist at 5-HT2A with profound, hyperdimensional breakthrough experiences upon vaporization or oral ingestion with reversible MAO-A inhibitors (Ayahuasca).",
    "subjectiveTags": [
      "Very High Potency",
      "Tryptamines",
      "High Risk"
    ],
    "phases": {
      "onsetFeel": "30-60 min",
      "peakFeel": "1.5-2.5 hrs",
      "comedownFeel": "4-6 hrs"
    }
  },
  "5-meo-dmt": {
    "physicalFormLabel": "Analytical Reference Standard / Pure Substance",
    "physicalAppearance": "High-purity crystalline solid, powder, or medical preparation.",
    "recreationalFeel": "Extremely potent naturally occurring tryptamine secreted by Incilius alvarius. Causes non-dual transcendental void/whiteout states and total ego loss.",
    "subjectiveTags": [
      "Extreme Potency (Milligram Tier)",
      "Tryptamines",
      "Very High Risk"
    ],
    "phases": {
      "onsetFeel": "20–45 minute progressive absorption and sensory shift.",
      "peakFeel": "Deep somatic and cognitive plateau with characteristic receptor saturation.",
      "comedownFeel": "Gradual return to baseline over several hours with residual relaxation."
    }
  },
  "psilocybin": {
    "physicalFormLabel": "Analytical Reference Standard / Pure Substance",
    "physicalAppearance": "High-purity crystalline solid, powder, or medical preparation.",
    "recreationalFeel": "Naturally occurring indole alkaloid prodrug dephosphorylated in the liver by alkaline phosphatase into psilocin.",
    "subjectiveTags": [
      "High Potency",
      "Tryptamines",
      "Moderate Risk"
    ],
    "phases": {
      "onsetFeel": "20-40 min",
      "peakFeel": "1.5-2.5 hrs",
      "comedownFeel": "4-6 hrs"
    }
  },
  "psilocin": {
    "physicalFormLabel": "Analytical Reference Standard / Pure Substance",
    "physicalAppearance": "High-purity crystalline solid, powder, or medical preparation.",
    "recreationalFeel": "The pharmacologically active dephosphorylated metabolite of psilocybin. Direct high-affinity 5-HT2A agonist.",
    "subjectiveTags": [
      "High Potency",
      "Tryptamines",
      "Moderate Risk"
    ],
    "phases": {
      "onsetFeel": "15-30 min",
      "peakFeel": "1-2 hrs",
      "comedownFeel": "4-5 hrs"
    }
  },
  "4-aco-dmt": {
    "physicalFormLabel": "Analytical Reference Standard / Pure Substance",
    "physicalAppearance": "High-purity crystalline solid, powder, or medical preparation.",
    "recreationalFeel": "Semi-synthetic acetylated prodrug of psilocin synthesized by Albert Hofmann and Franz Troxler in 1963.",
    "subjectiveTags": [
      "High Potency",
      "Tryptamines",
      "Moderate Risk"
    ],
    "phases": {
      "onsetFeel": "20-45 min",
      "peakFeel": "1.5-2.5 hrs",
      "comedownFeel": "4-7 hrs"
    }
  },
  "4-ho-met": {
    "physicalFormLabel": "Analytical Reference Standard / Pure Substance",
    "physicalAppearance": "High-purity crystalline solid, powder, or medical preparation.",
    "recreationalFeel": "Novel synthetic tryptamine known for rich color shifting, vibrant fractal visuals and gentle introspective headspace.",
    "subjectiveTags": [
      "High Potency",
      "Tryptamines",
      "Moderate Risk"
    ],
    "phases": {
      "onsetFeel": "20-40 min",
      "peakFeel": "1.5-2.5 hrs",
      "comedownFeel": "4-6 hrs"
    }
  },
  "4-ho-mipt": {
    "physicalFormLabel": "Analytical Reference Standard / Pure Substance",
    "physicalAppearance": "High-purity crystalline solid, powder, or medical preparation.",
    "recreationalFeel": "Substituted tryptamine characterized by Alexander Shulgin with tactile enhancement, somatic warmth, and auditory distortions.",
    "subjectiveTags": [
      "High Potency",
      "Tryptamines",
      "Moderate Risk"
    ],
    "phases": {
      "onsetFeel": "20-45 min",
      "peakFeel": "1.5-2.5 hrs",
      "comedownFeel": "4-6 hrs"
    }
  },
  "4-aco-met": {
    "physicalFormLabel": "Analytical Reference Standard / Pure Substance",
    "physicalAppearance": "High-purity crystalline solid, powder, or medical preparation.",
    "recreationalFeel": "Acetylated prodrug rapidly deacetylated in vivo to yield 4-HO-MET (Metocin).",
    "subjectiveTags": [
      "High Potency",
      "Tryptamines",
      "Moderate Risk"
    ],
    "phases": {
      "onsetFeel": "25-50 min",
      "peakFeel": "1.5-2.5 hrs",
      "comedownFeel": "4-6.5 hrs"
    }
  },
  "4-ho-dipt": {
    "physicalFormLabel": "Analytical Reference Standard / Pure Substance",
    "physicalAppearance": "High-purity crystalline solid, powder, or medical preparation.",
    "recreationalFeel": "Fast-acting 4-hydroxy tryptamine with unique sound pitch shifts and rapid clearance.",
    "subjectiveTags": [
      "High Potency",
      "Tryptamines",
      "Moderate Risk"
    ],
    "phases": {
      "onsetFeel": "15-35 min",
      "peakFeel": "1-2 hrs",
      "comedownFeel": "3-5 hrs"
    }
  },
  "4-aco-det": {
    "physicalFormLabel": "Analytical Reference Standard / Pure Substance",
    "physicalAppearance": "High-purity crystalline solid, powder, or medical preparation.",
    "recreationalFeel": "Acetylated prodrug of 4-HO-DET (Ethocin) described in TiHKAL.",
    "subjectiveTags": [
      "High Potency",
      "Tryptamines",
      "Moderate Risk"
    ],
    "phases": {
      "onsetFeel": "25-45 min",
      "peakFeel": "1.5-2.5 hrs",
      "comedownFeel": "4-6 hrs"
    }
  },
  "5-meo-mipt": {
    "physicalFormLabel": "Analytical Reference Standard / Pure Substance",
    "physicalAppearance": "High-purity crystalline solid, powder, or medical preparation.",
    "recreationalFeel": "Potent entactogenic tryptamine with strong physical tactile stimulation, sensory enhancement, and mild MAOI activity.",
    "subjectiveTags": [
      "Very High Potency",
      "Tryptamines",
      "High Risk"
    ],
    "phases": {
      "onsetFeel": "20-45 min",
      "peakFeel": "1.5-3 hrs",
      "comedownFeel": "4-7 hrs"
    }
  },
  "5-meo-dipt": {
    "physicalFormLabel": "Analytical Reference Standard / Pure Substance",
    "physicalAppearance": "High-purity crystalline solid, powder, or medical preparation.",
    "recreationalFeel": "Diisopropyl 5-methoxy tryptamine known for heavy somatic auditory effects and eroticized sensory enhancement.",
    "subjectiveTags": [
      "Very High Potency",
      "Tryptamines",
      "High Risk"
    ],
    "phases": {
      "onsetFeel": "20-40 min",
      "peakFeel": "1.5-2.5 hrs",
      "comedownFeel": "4-7 hrs"
    }
  },
  "5-meo-dalt": {
    "physicalFormLabel": "Analytical Reference Standard / Pure Substance",
    "physicalAppearance": "High-purity crystalline solid, powder, or medical preparation.",
    "recreationalFeel": "Diallyl tryptamine first synthesized by Alexander Shulgin in 2004.",
    "subjectiveTags": [
      "Moderate Potency",
      "Tryptamines",
      "Moderate Risk"
    ],
    "phases": {
      "onsetFeel": "20-40 min",
      "peakFeel": "1-2 hrs",
      "comedownFeel": "3-5 hrs"
    }
  },
  "5-meo-amt": {
    "physicalFormLabel": "Analytical Reference Standard / Pure Substance",
    "physicalAppearance": "High-purity crystalline solid, powder, or medical preparation.",
    "recreationalFeel": "Long-acting alpha-methylated tryptamine with potent serotonin releasing, MAOI, and 5-HT2A agonist activities. High risk of hypertensive serotonin syndrome.",
    "subjectiveTags": [
      "Extreme Potency (Milligram Tier)",
      "Tryptamines",
      "Very High Risk"
    ],
    "phases": {
      "onsetFeel": "45-90 min",
      "peakFeel": "3-6 hrs",
      "comedownFeel": "12-18 hrs"
    }
  },
  "bufotenin": {
    "physicalFormLabel": "Analytical Reference Standard / Pure Substance",
    "physicalAppearance": "High-purity crystalline solid, powder, or medical preparation.",
    "recreationalFeel": "Found in Anadenanthera colubrina (vilca) seeds and toad venoms. Potent 5-HT2A agonist with substantial peripheral cardiovascular stimulation.",
    "subjectiveTags": [
      "High Potency",
      "Tryptamines",
      "High Risk"
    ],
    "phases": {
      "onsetFeel": "20–45 minute progressive absorption and sensory shift.",
      "peakFeel": "Deep somatic and cognitive plateau with characteristic receptor saturation.",
      "comedownFeel": "Gradual return to baseline over several hours with residual relaxation."
    }
  },
  "dpt": {
    "physicalFormLabel": "Analytical Reference Standard / Pure Substance",
    "physicalAppearance": "High-purity crystalline solid, powder, or medical preparation.",
    "recreationalFeel": "Propyl tryptamine known for religious reverence in the Temple of the True Inner Light, characterized by intense physical vibration, sonic pitch shifts and eerie otherworldly spaces.",
    "subjectiveTags": [
      "High Potency",
      "Tryptamines",
      "High Risk"
    ],
    "phases": {
      "onsetFeel": "20-45 min",
      "peakFeel": "1.5-2.5 hrs",
      "comedownFeel": "4-6 hrs"
    }
  },
  "dipt": {
    "physicalFormLabel": "Analytical Reference Standard / Pure Substance",
    "physicalAppearance": "High-purity crystalline solid, powder, or medical preparation.",
    "recreationalFeel": "Unique psychedelic selective for auditory distortion, shifting musical octaves downward.",
    "subjectiveTags": [
      "Moderate Potency",
      "Tryptamines",
      "Moderate Risk"
    ],
    "phases": {
      "onsetFeel": "20-45 min",
      "peakFeel": "1.5-2.5 hrs",
      "comedownFeel": "4-7 hrs"
    }
  },
  "met": {
    "physicalFormLabel": "Analytical Reference Standard / Pure Substance",
    "physicalAppearance": "High-purity crystalline solid, powder, or medical preparation.",
    "recreationalFeel": "Asymmetrical N,N-dialkyltryptamine with gentle visionary immersion and colorful geometric patterns.",
    "subjectiveTags": [
      "Moderate Potency",
      "Tryptamines",
      "Moderate Risk"
    ],
    "phases": {
      "onsetFeel": "20-40 min",
      "peakFeel": "1-2 hrs",
      "comedownFeel": "3-5 hrs"
    }
  },
  "mipt": {
    "physicalFormLabel": "Analytical Reference Standard / Pure Substance",
    "physicalAppearance": "High-purity crystalline solid, powder, or medical preparation.",
    "recreationalFeel": "Described in TiHKAL with prominent auditory warping and mild visual enhancement.",
    "subjectiveTags": [
      "Moderate Potency",
      "Tryptamines",
      "Moderate Risk"
    ],
    "phases": {
      "onsetFeel": "20-45 min",
      "peakFeel": "1.5-2 hrs",
      "comedownFeel": "3-5 hrs"
    }
  },
  "det": {
    "physicalFormLabel": "Analytical Reference Standard / Pure Substance",
    "physicalAppearance": "High-purity crystalline solid, powder, or medical preparation.",
    "recreationalFeel": "Classic synthetic dialkyltryptamine explored clinically by Stephen Szára in 1957.",
    "subjectiveTags": [
      "Moderate-High Potency",
      "Tryptamines",
      "High Risk"
    ],
    "phases": {
      "onsetFeel": "20–45 minute progressive absorption and sensory shift.",
      "peakFeel": "Deep somatic and cognitive plateau with characteristic receptor saturation.",
      "comedownFeel": "Gradual return to baseline over several hours with residual relaxation."
    }
  },
  "2c-b": {
    "physicalFormLabel": "Analytical Reference Standard / Pure Substance",
    "physicalAppearance": "High-purity crystalline solid, powder, or medical preparation.",
    "recreationalFeel": "Discovered by Alexander Shulgin in 1974. Acclaimed for aesthetic visual enhancements, tactile sensitivity, and mild empathogenic lucidity.",
    "subjectiveTags": [
      "High Potency",
      "2C-X & Phenethylamines",
      "Moderate Risk"
    ],
    "phases": {
      "onsetFeel": "30-60 min",
      "peakFeel": "1.5-2.5 hrs",
      "comedownFeel": "4-8 hrs"
    }
  },
  "2c-c": {
    "physicalFormLabel": "Analytical Reference Standard / Pure Substance",
    "physicalAppearance": "High-purity crystalline solid, powder, or medical preparation.",
    "recreationalFeel": "Chlorinated 2C-x analogue characterized by tranquil, sedating and serene visual flow.",
    "subjectiveTags": [
      "Moderate Potency",
      "2C-X & Phenethylamines",
      "Moderate Risk"
    ],
    "phases": {
      "onsetFeel": "30-60 min",
      "peakFeel": "1.5-2.5 hrs",
      "comedownFeel": "4-7 hrs"
    }
  },
  "2c-d": {
    "physicalFormLabel": "Analytical Reference Standard / Pure Substance",
    "physicalAppearance": "High-purity crystalline solid, powder, or medical preparation.",
    "recreationalFeel": "Methylated 2C analogue dubbed \"pharmacological tofu\" by Shulgin for its ability to absorb and amplify the character of other co-administered psychedelics.",
    "subjectiveTags": [
      "Moderate Potency",
      "2C-X & Phenethylamines",
      "Moderate Risk"
    ],
    "phases": {
      "onsetFeel": "30-60 min",
      "peakFeel": "1.5-2.5 hrs",
      "comedownFeel": "4-6 hrs"
    }
  },
  "2c-e": {
    "physicalFormLabel": "Analytical Reference Standard / Pure Substance",
    "physicalAppearance": "High-purity crystalline solid, powder, or medical preparation.",
    "recreationalFeel": "Ethyl substituted phenethylamine renowned for intense geometric synesthesia, deep introspective analysis, and pronounced physical body load.",
    "subjectiveTags": [
      "Very High Potency",
      "2C-X & Phenethylamines",
      "High Risk"
    ],
    "phases": {
      "onsetFeel": "40-80 min",
      "peakFeel": "2-3.5 hrs",
      "comedownFeel": "8-12 hrs"
    }
  },
  "2c-i": {
    "physicalFormLabel": "Analytical Reference Standard / Pure Substance",
    "physicalAppearance": "High-purity crystalline solid, powder, or medical preparation.",
    "recreationalFeel": "Iodinated 2C phenethylamine with bright electric visuals and strong cognitive stimulation.",
    "subjectiveTags": [
      "High Potency",
      "2C-X & Phenethylamines",
      "Moderate Risk"
    ],
    "phases": {
      "onsetFeel": "45-90 min",
      "peakFeel": "2-3 hrs",
      "comedownFeel": "6-10 hrs"
    }
  },
  "2c-p": {
    "physicalFormLabel": "Analytical Reference Standard / Pure Substance",
    "physicalAppearance": "High-purity crystalline solid, powder, or medical preparation.",
    "recreationalFeel": "4-Propyl substituted compound with very long duration, slow ramp-up, and extreme risk of overdose due to steep dose-response curve.",
    "subjectiveTags": [
      "Extreme Potency (Milligram Tier)",
      "2C-X & Phenethylamines",
      "Very High Risk"
    ],
    "phases": {
      "onsetFeel": "60-120 min",
      "peakFeel": "3-6 hrs",
      "comedownFeel": "12-18 hrs"
    }
  },
  "2c-t-2": {
    "physicalFormLabel": "Analytical Reference Standard / Pure Substance",
    "physicalAppearance": "High-purity crystalline solid, powder, or medical preparation.",
    "recreationalFeel": "Sulfur-bearing phenethylamine synthesized by Shulgin with rich organic visuals and emotional warmth.",
    "subjectiveTags": [
      "High Potency",
      "2C-X & Phenethylamines",
      "High Risk"
    ],
    "phases": {
      "onsetFeel": "45-90 min",
      "peakFeel": "2-3.5 hrs",
      "comedownFeel": "6-10 hrs"
    }
  },
  "2c-t-7": {
    "physicalFormLabel": "Analytical Reference Standard / Pure Substance",
    "physicalAppearance": "High-purity crystalline solid, powder, or medical preparation.",
    "recreationalFeel": "Propylthio analogue notable for vibrant morphing visuals. High risk of fatalities when insufflated due to mucosal and cardiovascular crisis; contraindicated with MAOIs.",
    "subjectiveTags": [
      "High Potency",
      "2C-X & Phenethylamines",
      "High Risk"
    ],
    "phases": {
      "onsetFeel": "60-120 min",
      "peakFeel": "2.5-4.5 hrs",
      "comedownFeel": "8-14 hrs"
    }
  },
  "2c-b-fly": {
    "physicalFormLabel": "Analytical Reference Standard / Pure Substance",
    "physicalAppearance": "High-purity crystalline solid, powder, or medical preparation.",
    "recreationalFeel": "Dihydrodifuran benzodifuran analogue of 2C-B with extended plateau, entactogenic warmth, and rich visual textures.",
    "subjectiveTags": [
      "High Potency",
      "2C-X & Phenethylamines",
      "High Risk"
    ],
    "phases": {
      "onsetFeel": "45-90 min",
      "peakFeel": "2-4 hrs",
      "comedownFeel": "8-14 hrs"
    }
  },
  "doc": {
    "physicalFormLabel": "Analytical Reference Standard / Pure Substance",
    "physicalAppearance": "High-purity crystalline solid, powder, or medical preparation.",
    "recreationalFeel": "Potent substituted amphetamine 5-HT2A full agonist with marathon duration, intense fractal visuals and robust physical stimulation.",
    "subjectiveTags": [
      "Extreme Potency (Milligram Tier)",
      "DOx Amphetamines",
      "High Risk"
    ],
    "phases": {
      "onsetFeel": "60-150 min",
      "peakFeel": "3-6 hrs",
      "comedownFeel": "14-24 hrs"
    }
  },
  "dob": {
    "physicalFormLabel": "Analytical Reference Standard / Pure Substance",
    "physicalAppearance": "High-purity crystalline solid, powder, or medical preparation.",
    "recreationalFeel": "Bromo amphetamine psychedelic synthesized by Shulgin. Powerful vasoconstrictive liability at high doses.",
    "subjectiveTags": [
      "Extreme Potency (Milligram Tier)",
      "DOx Amphetamines",
      "High Risk"
    ],
    "phases": {
      "onsetFeel": "60-180 min",
      "peakFeel": "3-7 hrs",
      "comedownFeel": "18-30 hrs"
    }
  },
  "doi": {
    "physicalFormLabel": "Analytical Reference Standard / Pure Substance",
    "physicalAppearance": "High-purity crystalline solid, powder, or medical preparation.",
    "recreationalFeel": "Widely used in scientific neuroscience as a selective 5-HT2A agonist tool compound.",
    "subjectiveTags": [
      "Extreme Potency (Milligram Tier)",
      "DOx Amphetamines",
      "High Risk"
    ],
    "phases": {
      "onsetFeel": "60-120 min",
      "peakFeel": "3-6 hrs",
      "comedownFeel": "16-26 hrs"
    }
  },
  "dom": {
    "physicalFormLabel": "Analytical Reference Standard / Pure Substance",
    "physicalAppearance": "High-purity crystalline solid, powder, or medical preparation.",
    "recreationalFeel": "Legendary 1967 Haight-Ashbury compound synthesized by Alexander Shulgin with deep transformative visionary depth.",
    "subjectiveTags": [
      "Extreme Potency (Milligram Tier)",
      "DOx Amphetamines",
      "High Risk"
    ],
    "phases": {
      "onsetFeel": "60-120 min",
      "peakFeel": "3-6 hrs",
      "comedownFeel": "14-20 hrs"
    }
  },
  "25i-nbome": {
    "physicalFormLabel": "Analytical Reference Standard / Pure Substance",
    "physicalAppearance": "High-purity crystalline solid, powder, or medical preparation.",
    "recreationalFeel": "Ultra-potent 2-methoxybenzyl substituted phenethylamine. Extremely dangerous full 5-HT2A agonist with fatal vasospasm, seizures, and renal failure documented at microgram doses.",
    "subjectiveTags": [
      "Extreme Potency (Microgram Tier)",
      "NBOMe & NBOH Series",
      "Extreme Risk"
    ],
    "phases": {
      "onsetFeel": "15-40 min",
      "peakFeel": "1.5-3 hrs",
      "comedownFeel": "6-10 hrs"
    }
  },
  "25b-nbome": {
    "physicalFormLabel": "Analytical Reference Standard / Pure Substance",
    "physicalAppearance": "High-purity crystalline solid, powder, or medical preparation.",
    "recreationalFeel": "Brominated NBOMe derivative with high toxicity profile and tight therapeutic index.",
    "subjectiveTags": [
      "Extreme Potency (Microgram Tier)",
      "NBOMe & NBOH Series",
      "Extreme Risk"
    ],
    "phases": {
      "onsetFeel": "15-40 min",
      "peakFeel": "1.5-3 hrs",
      "comedownFeel": "6-10 hrs"
    }
  },
  "25c-nbome": {
    "physicalFormLabel": "Analytical Reference Standard / Pure Substance",
    "physicalAppearance": "High-purity crystalline solid, powder, or medical preparation.",
    "recreationalFeel": "Chlorinated N-benzyl phenethylamine with severe cardiovascular liability.",
    "subjectiveTags": [
      "Extreme Potency (Microgram Tier)",
      "NBOMe & NBOH Series",
      "Extreme Risk"
    ],
    "phases": {
      "onsetFeel": "15-40 min",
      "peakFeel": "1.5-3 hrs",
      "comedownFeel": "6-10 hrs"
    }
  },
  "25i-nboh": {
    "physicalFormLabel": "Analytical Reference Standard / Pure Substance",
    "physicalAppearance": "High-purity crystalline solid, powder, or medical preparation.",
    "recreationalFeel": "2-Hydroxybenzyl analogue displaying potent 5-HT2A full agonism and rapid clearance.",
    "subjectiveTags": [
      "Extreme Potency (Microgram Tier)",
      "NBOMe & NBOH Series",
      "Extreme Risk"
    ],
    "phases": {
      "onsetFeel": "15-35 min",
      "peakFeel": "1.5-3 hrs",
      "comedownFeel": "5-8 hrs"
    }
  },
  "25b-nboh": {
    "physicalFormLabel": "Analytical Reference Standard / Pure Substance",
    "physicalAppearance": "High-purity crystalline solid, powder, or medical preparation.",
    "recreationalFeel": "Brominated hydroxybenzyl analogue with intense sensory saturation.",
    "subjectiveTags": [
      "Extreme Potency (Microgram Tier)",
      "NBOMe & NBOH Series",
      "Extreme Risk"
    ],
    "phases": {
      "onsetFeel": "15-35 min",
      "peakFeel": "1.5-3 hrs",
      "comedownFeel": "5-8 hrs"
    }
  },
  "mescaline": {
    "physicalFormLabel": "Analytical Reference Standard / Pure Substance",
    "physicalAppearance": "High-purity crystalline solid, powder, or medical preparation.",
    "recreationalFeel": "Sacred indigenous phenethylamine alkaloid occurring in Lophophora williamsii (Peyote) and Echinopsis pachanoi (San Pedro). Discovered 1897 by Arthur Heffter.",
    "subjectiveTags": [
      "Moderate Potency",
      "Mescaline & Phenethylamines",
      "Moderate Risk"
    ],
    "phases": {
      "onsetFeel": "45-90 min",
      "peakFeel": "2.5-4.5 hrs",
      "comedownFeel": "8-14 hrs"
    }
  },
  "escaline": {
    "physicalFormLabel": "Analytical Reference Standard / Pure Substance",
    "physicalAppearance": "High-purity crystalline solid, powder, or medical preparation.",
    "recreationalFeel": "4-Ethoxy analogue of mescaline with approximately six-fold higher molar potency.",
    "subjectiveTags": [
      "High Potency",
      "Mescaline & Phenethylamines",
      "Moderate Risk"
    ],
    "phases": {
      "onsetFeel": "45-90 min",
      "peakFeel": "2.5-4 hrs",
      "comedownFeel": "8-12 hrs"
    }
  },
  "allylescaline": {
    "physicalFormLabel": "Analytical Reference Standard / Pure Substance",
    "physicalAppearance": "High-purity crystalline solid, powder, or medical preparation.",
    "recreationalFeel": "4-Allyloxy phenethylamine first prepared by Otakar Leminger and popularized by Shulgin.",
    "subjectiveTags": [
      "High Potency",
      "Mescaline & Phenethylamines",
      "Moderate Risk"
    ],
    "phases": {
      "onsetFeel": "40-80 min",
      "peakFeel": "2-4 hrs",
      "comedownFeel": "8-12 hrs"
    }
  },
  "methallylescaline": {
    "physicalFormLabel": "Analytical Reference Standard / Pure Substance",
    "physicalAppearance": "High-purity crystalline solid, powder, or medical preparation.",
    "recreationalFeel": "Methallyl ether analogue widely considered the closest modern synthetic approximation to pure mescaline visuals.",
    "subjectiveTags": [
      "High Potency",
      "Mescaline & Phenethylamines",
      "Moderate Risk"
    ],
    "phases": {
      "onsetFeel": "45-90 min",
      "peakFeel": "2.5-4.5 hrs",
      "comedownFeel": "8-14 hrs"
    }
  },
  "salvinorin-a": {
    "physicalFormLabel": "Analytical Reference Standard / Pure Substance",
    "physicalAppearance": "High-purity crystalline solid, powder, or medical preparation.",
    "recreationalFeel": "Potent non-nitrogenous diterpenoid kappa-opioid receptor (KOR) agonist from Salvia divinorum. Induces extreme gravitational dislocation and spatial folding.",
    "subjectiveTags": [
      "Extreme Potency (Microgram Tier)",
      "Atypical Hallucinogens",
      "High Risk"
    ],
    "phases": {
      "onsetFeel": "10-20 min",
      "peakFeel": "30-45 min",
      "comedownFeel": "60-90 min"
    }
  },
  "ibogaine": {
    "physicalFormLabel": "Analytical Reference Standard / Pure Substance",
    "physicalAppearance": "High-purity crystalline solid, powder, or medical preparation.",
    "recreationalFeel": "Apocynaceae root bark alkaloid with unique multi-target affinity (KOR, NMDA, sigma, 5-HT2A). Causes intense oneirogenic memory replay; carries serious hERG channel cardiotoxicity (torsades de pointes).",
    "subjectiveTags": [
      "Moderate Potency",
      "Atypical Hallucinogens",
      "Very High Risk"
    ],
    "phases": {
      "onsetFeel": "45-90 min",
      "peakFeel": "3-6 hrs",
      "comedownFeel": "24-36 hrs"
    }
  },
  "muscimol": {
    "physicalFormLabel": "Analytical Reference Standard / Pure Substance",
    "physicalAppearance": "High-purity crystalline solid, powder, or medical preparation.",
    "recreationalFeel": "Selective GABA-A receptor full agonist from Amanita muscaria causing dream-like states, macropsea/micropsea (Alice in Wonderland syndrome), and motor ataxia.",
    "subjectiveTags": [
      "Very High Potency",
      "Atypical Hallucinogens",
      "High Risk"
    ],
    "phases": {
      "onsetFeel": "30-90 min",
      "peakFeel": "2-3.5 hrs",
      "comedownFeel": "5-8 hrs"
    }
  },
  "harmine": {
    "physicalFormLabel": "Analytical Reference Standard / Pure Substance",
    "physicalAppearance": "High-purity crystalline solid, powder, or medical preparation.",
    "recreationalFeel": "Reversible inhibitor of monoamine oxidase A (RIMA) from Syrian rue and Banisteriopsis caapi. Renders DMT orally bioavailable in Ayahuasca.",
    "subjectiveTags": [
      "Moderate Potency",
      "Atypical Hallucinogens",
      "Moderate Risk"
    ],
    "phases": {
      "onsetFeel": "30-60 min",
      "peakFeel": "1.5-2.5 hrs",
      "comedownFeel": "4-6 hrs"
    }
  }
};
