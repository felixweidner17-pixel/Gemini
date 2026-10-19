import { CannabinoidProfile } from './cannabinoids';

export const EXPANDED_SUBSTANCES_PART1: CannabinoidProfile[] = [
  {
    "id": "methamphetamine",
    "name": "Methamphetamine (Desoxyn · N-Methylamphetamine)",
    "shortName": "Methamphetamine",
    "synonyms": [
      "Desoxyn",
      "Crystal Meth",
      "Ice",
      "Pervitin",
      "d-Methamphetamine"
    ],
    "classification": "Amphetamine & Fluorinated",
    "riskTier": "Extreme",
    "pubchemCid": 10836,
    "molecularFormula": "C10H15N",
    "molecularWeight": 149.23,
    "canonicalSmiles": "CC(CC1=CC=CC=C1)NC",
    "xLogP": 2.1,
    "cb1KiNm": 12,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent TAAR1 Agonist & VMAT2 / DAT / NET Releasing Agent",
    "cb2Efficacy": "Monoamine Efflux Inducer",
    "relativePotencyVsD9": 4.5,
    "psychoactive": true,
    "alkylChainLength": "N-Methyl-α-methylphenethylamine",
    "cypEnzymes": [
      "CYP2D6"
    ],
    "primaryMetabolite": "Amphetamine & 4-Hydroxymethamphetamine",
    "immunoassayCrossReactivityPct": 95,
    "terminalHalfLifeHours": 10.5,
    "inhaledOnsetMinutes": [
      2,
      5
    ],
    "inhaledDurationHours": [
      6,
      12
    ],
    "oralOnsetMinutes": [
      20,
      40
    ],
    "oralDurationHours": [
      8,
      14
    ],
    "baseOralThresholdMg": 2.5,
    "baseInhaledThresholdMg": 2.5,
    "radarProfile": {
      "cb1AffinityScore": 92,
      "euphoriaPotency": 96,
      "somaticSedation": 6,
      "anxiogenicRisk": 82,
      "durationPersistence": 78,
      "lipidRetention": 32
    },
    "summary": "Highly lipophilic N-methylated phenethylamine psychostimulant (Desoxyn). Rapidly crosses the blood-brain barrier and reverses DAT, NET, and VMAT2 transport, flooding synaptic clefts with cytosolic dopamine and norepinephrine.",
    "pharmacologyNotes": "Oral bioavailability ~67%; vaporized/intranasal bioavailability ~79–90%. Metabolized via hepatic CYP2D6 N-demethylation to active amphetamine and 4-hydroxylation; urinary excretion is strongly pH-dependent.",
    "specificHazards": [
      "High neurotoxicity to striatal dopaminergic terminals at binge doses via oxidative stress and hyperthermia.",
      "Severe cardiovascular strain (hypertension, tachycardia, vasospasm) and stimulant psychosis upon sleep deprivation."
    ],
    "sideEffects": [
      {
        "effect": "Tachycardia, Hypertension & Hyperthermic Sympathomimetic Surge",
        "system": "Cardiovascular",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "Potent TAAR1 Agonist & VMAT2 / DAT / NET Releasing Agent"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Methamphetamine",
      "source": "PubChem CID 10836",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/10836"
    }
  },
  {
    "id": "lisdexamfetamine",
    "name": "Lisdexamfetamine Dimesylate (Vyvanse · Elvanse)",
    "shortName": "Lisdexamfetamine",
    "synonyms": [
      "Vyvanse",
      "Elvanse",
      "L-Lysine-d-amphetamine"
    ],
    "classification": "Rx Stimulant",
    "riskTier": "High",
    "pubchemCid": 11597698,
    "molecularFormula": "C15H25N3O",
    "molecularWeight": 263.38,
    "canonicalSmiles": "CC(CC1=CC=CC=C1)NC(=O)C(CCCCN)N",
    "xLogP": 1.8,
    "cb1KiNm": 45,
    "cb2KiNm": 0,
    "cb1Efficacy": "Inactive Prodrug → Red Blood Cell Hydrolysis to Dextroamphetamine",
    "cb2Efficacy": "Rate-Limited DAT / NET Releasing Agent",
    "relativePotencyVsD9": 2,
    "psychoactive": true,
    "alkylChainLength": "L-Lysine-conjugated d-Amphetamine",
    "cypEnzymes": [
      "Red Blood Cell Aminopeptidases",
      "CYP2D6"
    ],
    "primaryMetabolite": "Dextroamphetamine & L-Lysine",
    "immunoassayCrossReactivityPct": 85,
    "terminalHalfLifeHours": 11,
    "inhaledOnsetMinutes": [
      45,
      90
    ],
    "inhaledDurationHours": [
      8,
      12
    ],
    "oralOnsetMinutes": [
      60,
      120
    ],
    "oralDurationHours": [
      10,
      14
    ],
    "baseOralThresholdMg": 10,
    "baseInhaledThresholdMg": 10,
    "radarProfile": {
      "cb1AffinityScore": 76,
      "euphoriaPotency": 72,
      "somaticSedation": 8,
      "anxiogenicRisk": 54,
      "durationPersistence": 82,
      "lipidRetention": 24
    },
    "summary": "Rate-limited amino acid prodrug consisting of dextroamphetamine covalently bonded to L-lysine (Vyvanse / Elvanse). Pharmacologically inactive until cleaved by erythrocyte peptidase enzymes in the bloodstream.",
    "pharmacologyNotes": "Intranasal or parenteral administration does NOT accelerate onset because enzymatic cleavage occurs strictly inside red blood cells after absorption (~10 mg Lisdexamfetamine ≈ 3.0 mg pure d-amphetamine base).",
    "specificHazards": [
      "Long 10–14 hour duration causes severe late-night insomnia if taken after morning hours.",
      "Sympathomimetic hypertension and appetite suppression."
    ],
    "sideEffects": [
      {
        "effect": "Sustained Wakefulness, Appetite Suppression & Dry Mouth",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Inactive Prodrug → Red Blood Cell Hydrolysis to Dextroamphetamine"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Lisdexamfetamine",
      "source": "PubChem CID 11597698",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/11597698"
    }
  },
  {
    "id": "propylhexedrine",
    "name": "Propylhexedrine (Benzedrex · Hexahydromethamphetamine)",
    "shortName": "Propylhexedrine",
    "synonyms": [
      "Benzedrex",
      "Obesin",
      "Cyclohexylisopropylmethylamine"
    ],
    "classification": "Amphetamine & Fluorinated",
    "riskTier": "High",
    "pubchemCid": 4940,
    "molecularFormula": "C10H21N",
    "molecularWeight": 155.28,
    "canonicalSmiles": "CC(CC1CCCCC1)NC",
    "xLogP": 2.6,
    "cb1KiNm": 55,
    "cb2KiNm": 0,
    "cb1Efficacy": "Noradrenergic & Dopaminergic Releasing Agent + Strong α-Adrenergic Vasoconstrictor",
    "cb2Efficacy": "Peripheral & Central Sympathomimetic",
    "relativePotencyVsD9": 1.6,
    "psychoactive": true,
    "alkylChainLength": "Cyclohexyl Analog of Methamphetamine",
    "cypEnzymes": [
      "CYP2D6"
    ],
    "primaryMetabolite": "Norpropylhexedrine & 4-Hydroxypropylhexedrine",
    "immunoassayCrossReactivityPct": 40,
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
      25,
      50
    ],
    "oralDurationHours": [
      4,
      7
    ],
    "baseOralThresholdMg": 25,
    "baseInhaledThresholdMg": 15,
    "radarProfile": {
      "cb1AffinityScore": 65,
      "euphoriaPotency": 66,
      "somaticSedation": 10,
      "anxiogenicRisk": 78,
      "durationPersistence": 38,
      "lipidRetention": 28
    },
    "summary": "Al脂cyclic cyclohexyl analog of methamphetamine used as an OTC nasal decongestant (Benzedrex). Retains central monoamine releasing properties alongside pronounced peripheral α1-adrenergic vasoconstriction.",
    "pharmacologyNotes": "Metabolized via hepatic CYP2D6. Can cross-react on standard amphetamine/methamphetamine urine immunoassays.",
    "specificHazards": [
      "Severe peripheral vasoconstriction, pounding headaches, and rebound tachycardia.",
      "Never inject propylhexedrine extracts—causes fatal brainstem diplopia, pulmonary hypertension, and stroke."
    ],
    "sideEffects": [
      {
        "effect": "Pronounced Vasoconstriction, Scalp Tingling & Tachycardia",
        "system": "Cardiovascular",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Noradrenergic & Dopaminergic Releasing Agent + Strong α-Adrenergic Vasoconstrictor"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Propylhexedrine",
      "source": "PubChem CID 4940",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/4940"
    }
  },
  {
    "id": "mda",
    "name": "MDA (3,4-Methylenedioxyamphetamine · Sass)",
    "shortName": "MDA",
    "synonyms": [
      "Sass",
      "Sassafras",
      "Tenamfetamine",
      "Love Drug"
    ],
    "classification": "Empathogen / Stimulant",
    "riskTier": "High",
    "pubchemCid": 1614,
    "molecularFormula": "C10H13NO2",
    "molecularWeight": 179.22,
    "canonicalSmiles": "CC(CC1=CC2=C(C=C1)OCO2)N",
    "xLogP": 1.6,
    "cb1KiNm": 18,
    "cb2KiNm": 0,
    "cb1Efficacy": "Triple Monoamine Releasing Agent (SERT / DAT / NET) + 5-HT2A Agonist",
    "cb2Efficacy": "Dual Entactogen & Psychedelic Phenethylamine",
    "relativePotencyVsD9": 2.2,
    "psychoactive": true,
    "alkylChainLength": "Primary N-Demethylated MDMA Metabolite",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "α-Methyldopamine (HHA) & HMMA",
    "immunoassayCrossReactivityPct": 90,
    "terminalHalfLifeHours": 8.5,
    "inhaledOnsetMinutes": [
      10,
      20
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
      6,
      8
    ],
    "baseOralThresholdMg": 20,
    "baseInhaledThresholdMg": 10,
    "radarProfile": {
      "cb1AffinityScore": 84,
      "euphoriaPotency": 92,
      "somaticSedation": 24,
      "anxiogenicRisk": 52,
      "durationPersistence": 54,
      "lipidRetention": 26
    },
    "summary": "Primary N-demethylated active metabolite of MDMA and classic entactogen-psychedelic (\"Sass\"). Exhibits stronger 5-HT2A receptor agonism and dopamine release than MDMA, yielding longer duration (6–8 h) and pronounced open/closed-eye visuals.",
    "pharmacologyNotes": "Undergoes O-demethylenation via CYP2D6 to α-methyldopamine; higher serotonergic oxidative stress per mg than MDMA.",
    "specificHazards": [
      "Higher serotonergic neurotoxicity and hyperthermia risk than MDMA.",
      "Dangerous serotonin syndrome with MAOIs or SSRIs."
    ],
    "sideEffects": [
      {
        "effect": "Entactogenic Euphoria, Visual Trails, Hyperthermia & Bruxism",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Triple Monoamine Releasing Agent (SERT / DAT / NET) + 5-HT2A Agonist"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · MDA",
      "source": "PubChem CID 1614",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/1614"
    }
  },
  {
    "id": "mdea",
    "name": "MDEA (3,4-Methylenedioxy-N-ethylamphetamine · Eve)",
    "shortName": "MDEA",
    "synonyms": [
      "Eve",
      "MDE",
      "N-Ethyl-MDA"
    ],
    "classification": "Empathogen / Stimulant",
    "riskTier": "High",
    "pubchemCid": 104850,
    "molecularFormula": "C12H17NO2",
    "molecularWeight": 207.27,
    "canonicalSmiles": "CCNC(C)CC1=CC2=C(C=C1)OCO2",
    "xLogP": 2.4,
    "cb1KiNm": 28,
    "cb2KiNm": 0,
    "cb1Efficacy": "Selective Serotonin Releasing Agent (SERT >> DAT)",
    "cb2Efficacy": "Stoned Stoning Empathogen",
    "relativePotencyVsD9": 1.5,
    "psychoactive": true,
    "alkylChainLength": "N-Ethyl Homolog of MDMA",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "MDA & 4-Hydroxy-3-methoxy-N-ethylamphetamine",
    "immunoassayCrossReactivityPct": 85,
    "terminalHalfLifeHours": 6.5,
    "inhaledOnsetMinutes": [
      10,
      20
    ],
    "inhaledDurationHours": [
      2.5,
      4
    ],
    "oralOnsetMinutes": [
      30,
      50
    ],
    "oralDurationHours": [
      3,
      5
    ],
    "baseOralThresholdMg": 40,
    "baseInhaledThresholdMg": 25,
    "radarProfile": {
      "cb1AffinityScore": 74,
      "euphoriaPotency": 80,
      "somaticSedation": 58,
      "anxiogenicRisk": 32,
      "durationPersistence": 34,
      "lipidRetention": 30
    },
    "summary": "N-ethyl homolog of MDMA (\"Eve\"). Releases serotonin powerfully with significantly lower dopamine efflux than MDMA, resulting in a calmer, more sedating, shorter-acting (3–5 hour) entactogenic state.",
    "pharmacologyNotes": "De-ethylated via CYP3A4/2D6 into active MDA.",
    "specificHazards": [
      "Serotonin syndrome risk with monoaminergic medications; hyperthermia in warm environments."
    ],
    "sideEffects": [
      {
        "effect": "Calm Serotonergic Warmth, Mild Jaw Tension & Relaxation",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Selective Serotonin Releasing Agent (SERT >> DAT)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · MDEA",
      "source": "PubChem CID 104850",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/104850"
    }
  },
  {
    "id": "mbdb",
    "name": "MBDB (N-Methyl-1-(1,3-benzodioxol-5-yl)-2-butanamine · Eden)",
    "shortName": "MBDB",
    "synonyms": [
      "Eden",
      "Methyl-J",
      "α-Ethyl-MDMA"
    ],
    "classification": "Empathogen / Stimulant",
    "riskTier": "High",
    "pubchemCid": 123903,
    "molecularFormula": "C12H17NO2",
    "molecularWeight": 207.27,
    "canonicalSmiles": "CCC(CC1=CC2=C(C=C1)OCO2)NC",
    "xLogP": 2.5,
    "cb1KiNm": 35,
    "cb2KiNm": 0,
    "cb1Efficacy": "Pure Entactogen (Selective SERT / NET Releaser with Negligible DAT Effect)",
    "cb2Efficacy": "Non-Stimulant Empathogen Prototype",
    "relativePotencyVsD9": 1.3,
    "psychoactive": true,
    "alkylChainLength": "α-Ethyl Homolog of MDMA",
    "cypEnzymes": [
      "CYP2D6"
    ],
    "primaryMetabolite": "BDB (3,4-Methylenedioxy-α-ethylphenethylamine)",
    "immunoassayCrossReactivityPct": 75,
    "terminalHalfLifeHours": 6,
    "inhaledOnsetMinutes": [
      15,
      25
    ],
    "inhaledDurationHours": [
      3,
      4
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      4,
      6
    ],
    "baseOralThresholdMg": 50,
    "baseInhaledThresholdMg": 35,
    "radarProfile": {
      "cb1AffinityScore": 68,
      "euphoriaPotency": 74,
      "somaticSedation": 62,
      "anxiogenicRisk": 28,
      "durationPersistence": 38,
      "lipidRetention": 32
    },
    "summary": "α-Ethyl homolog of MDMA synthesized by David Nichols to define the \"entactogen\" class. Virtually devoid of dopamine release, producing pure emotional openness and calmness without amphetamine rush.",
    "pharmacologyNotes": "Metabolized via N-demethylation to active BDB.",
    "specificHazards": [
      "Serotonergic toxicity if combined with MAOIs, SSRIs, or other releasers."
    ],
    "sideEffects": [
      {
        "effect": "Introspective Emotional Openness & Serotonergic Relaxation",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Pure Entactogen (Selective SERT / NET Releaser with Negligible DAT Effect)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · MBDB",
      "source": "PubChem CID 123903",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/123903"
    }
  },
  {
    "id": "mmda",
    "name": "MMDA (3-Methoxy-4,5-methylenedioxyamphetamine)",
    "shortName": "MMDA",
    "synonyms": [
      "3-Methoxy-MDA"
    ],
    "classification": "Empathogen / Stimulant",
    "riskTier": "High",
    "pubchemCid": 18244,
    "molecularFormula": "C11H15NO3",
    "molecularWeight": 209.24,
    "canonicalSmiles": "CC(CC1=CC(=C2C(=C1)OCO2)OC)N",
    "xLogP": 1.5,
    "cb1KiNm": 24,
    "cb2KiNm": 0,
    "cb1Efficacy": "Serotonin Releaser & 5-HT2A Agonist (Oneirogenic Empathogen)",
    "cb2Efficacy": "Closed-Eye Dream-Movie Generator",
    "relativePotencyVsD9": 1.8,
    "psychoactive": true,
    "alkylChainLength": "Methoxy-Methylenedioxy Hybrid (Nutmeg Myristicin Analog)",
    "cypEnzymes": [
      "CYP2D6"
    ],
    "primaryMetabolite": "O-Demethylated Catechol Metabolites",
    "immunoassayCrossReactivityPct": 65,
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
      30,
      60
    ],
    "oralDurationHours": [
      6,
      8
    ],
    "baseOralThresholdMg": 30,
    "baseInhaledThresholdMg": 20,
    "radarProfile": {
      "cb1AffinityScore": 76,
      "euphoriaPotency": 82,
      "somaticSedation": 54,
      "anxiogenicRisk": 38,
      "durationPersistence": 50,
      "lipidRetention": 28
    },
    "summary": "Shulgin phenethylamine bridging mescaline and MDA. Famous for producing \"brain movies\"—vivid, coherent closed-eye dream scenes alongside calm empathic warmth.",
    "pharmacologyNotes": "Metabolized hepatically via CYP2D6.",
    "specificHazards": [
      "MAOIs and serotonergic drugs pose severe interaction hazards."
    ],
    "sideEffects": [
      {
        "effect": "Closed-Eye Imagery (\"Brain Movies\") & Calm Empathy",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Serotonin Releaser & 5-HT2A Agonist (Oneirogenic Empathogen)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · MMDA",
      "source": "PubChem CID 18244",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/18244"
    }
  },
  {
    "id": "5-apb",
    "name": "5-APB (5-(2-Aminopropyl)benzofuran)",
    "shortName": "5-APB",
    "synonyms": [
      "5-Aminopropylbenzofuran"
    ],
    "classification": "Empathogen / Stimulant",
    "riskTier": "High",
    "pubchemCid": 44361693,
    "molecularFormula": "C11H13NO",
    "molecularWeight": 175.23,
    "canonicalSmiles": "CC(CC1=CC2=C(C=C1)OC=C2)N",
    "xLogP": 2.3,
    "cb1KiNm": 14,
    "cb2KiNm": 0,
    "cb1Efficacy": "Triple Monoamine Releaser (SERT > DAT > NET) + 5-HT2B/2A Agonist",
    "cb2Efficacy": "Unsaturated Benzofuran Entactogen",
    "relativePotencyVsD9": 2.4,
    "psychoactive": true,
    "alkylChainLength": "Benzofuran Bioisostere of MDA",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "Hydroxy-5-APB conjugates",
    "immunoassayCrossReactivityPct": 50,
    "terminalHalfLifeHours": 9,
    "inhaledOnsetMinutes": [
      15,
      30
    ],
    "inhaledDurationHours": [
      5,
      7
    ],
    "oralOnsetMinutes": [
      45,
      90
    ],
    "oralDurationHours": [
      7,
      10
    ],
    "baseOralThresholdMg": 20,
    "baseInhaledThresholdMg": 15,
    "radarProfile": {
      "cb1AffinityScore": 84,
      "euphoriaPotency": 88,
      "somaticSedation": 35,
      "anxiogenicRisk": 50,
      "durationPersistence": 65,
      "lipidRetention": 36
    },
    "summary": "Benzofuran analog of MDA where one oxygen of the methylenedioxy ring is replaced by a methine group. Potent triple monoamine releaser with a long 7–10 hour duration.",
    "pharmacologyNotes": "Slow oral onset (60–90 min); high affinity for cardiac 5-HT2B receptors.",
    "specificHazards": [
      "Slow onset leads to accidental redosing; potent 5-HT2B agonism carries valvulopathy risk with frequent use."
    ],
    "sideEffects": [
      {
        "effect": "Prolonged Entactogenic Euphoria, Jaw Clenching & Tachycardia",
        "system": "Cardiovascular",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Triple Monoamine Releaser (SERT > DAT > NET) + 5-HT2B/2A Agonist"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · 5-APB",
      "source": "PubChem CID 44361693",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/44361693"
    }
  },
  {
    "id": "6-apb",
    "name": "6-APB (6-(2-Aminopropyl)benzofuran · Benzofury)",
    "shortName": "6-APB",
    "synonyms": [
      "Benzofury",
      "6-Aminopropylbenzofuran"
    ],
    "classification": "Empathogen / Stimulant",
    "riskTier": "High",
    "pubchemCid": 44593524,
    "molecularFormula": "C11H13NO",
    "molecularWeight": 175.23,
    "canonicalSmiles": "CC(CC1=CC2=C(C=C1)C=CO2)N",
    "xLogP": 2.3,
    "cb1KiNm": 11,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent Triple Releaser (DAT / NET / SERT) + 5-HT2B/2A Agonist",
    "cb2Efficacy": "Long-Acting MDA Bioisostere",
    "relativePotencyVsD9": 2.6,
    "psychoactive": true,
    "alkylChainLength": "6-Positional Benzofuran Isomer",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "Carboxy & Hydroxy metabolites",
    "immunoassayCrossReactivityPct": 50,
    "terminalHalfLifeHours": 10,
    "inhaledOnsetMinutes": [
      15,
      30
    ],
    "inhaledDurationHours": [
      6,
      8
    ],
    "oralOnsetMinutes": [
      45,
      100
    ],
    "oralDurationHours": [
      8,
      12
    ],
    "baseOralThresholdMg": 25,
    "baseInhaledThresholdMg": 15,
    "radarProfile": {
      "cb1AffinityScore": 88,
      "euphoriaPotency": 93,
      "somaticSedation": 20,
      "anxiogenicRisk": 56,
      "durationPersistence": 72,
      "lipidRetention": 38
    },
    "summary": "Positional isomer of 5-APB (\"Benzofury\") with stronger dopaminergic and noradrenergic release alongside powerful serotonin efflux, delivering an 8–12 hour festival roll combining MDMA empathy with MDA visuals.",
    "pharmacologyNotes": "Note: Succinate salt batches weigh ~35% more per mole than HCl salt.",
    "specificHazards": [
      "High 5-HT2B receptor affinity—strictly space sessions by months to avoid cardiac valve fibrosis."
    ],
    "sideEffects": [
      {
        "effect": "Intense 10-Hour Entactogenic Roll, Mydriasis & Hyperthermia",
        "system": "Cardiovascular",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Potent Triple Releaser (DAT / NET / SERT) + 5-HT2B/2A Agonist"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · 6-APB",
      "source": "PubChem CID 44593524",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/44593524"
    }
  },
  {
    "id": "5-apdb",
    "name": "5-APDB (5-(2-Aminopropyl)-2,3-dihydrobenzofuran)",
    "shortName": "5-APDB",
    "synonyms": [
      "3-Desoxy-MDA"
    ],
    "classification": "Empathogen / Stimulant",
    "riskTier": "High",
    "pubchemCid": 14257662,
    "molecularFormula": "C11H15NO",
    "molecularWeight": 177.24,
    "canonicalSmiles": "CC(CC1=CC2=C(C=C1)OCC2)N",
    "xLogP": 2.1,
    "cb1KiNm": 22,
    "cb2KiNm": 0,
    "cb1Efficacy": "Highly Selective Serotonin Releaser (SERT >> NET/DAT)",
    "cb2Efficacy": "Sedating Dihydrobenzofuran Entactogen",
    "relativePotencyVsD9": 1.6,
    "psychoactive": true,
    "alkylChainLength": "Dihydrobenzofuran MDA Analog",
    "cypEnzymes": [
      "CYP2D6"
    ],
    "primaryMetabolite": "Hydroxylated dihydrobenzofurans",
    "immunoassayCrossReactivityPct": 45,
    "terminalHalfLifeHours": 7.5,
    "inhaledOnsetMinutes": [
      15,
      30
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
      7
    ],
    "baseOralThresholdMg": 25,
    "baseInhaledThresholdMg": 15,
    "radarProfile": {
      "cb1AffinityScore": 74,
      "euphoriaPotency": 78,
      "somaticSedation": 65,
      "anxiogenicRisk": 28,
      "durationPersistence": 46,
      "lipidRetention": 30
    },
    "summary": "Dihydrobenzofuran analog of MDA with high selectivity for serotonin release over dopamine, producing a warm, dreamy, sedating empathogenic state.",
    "pharmacologyNotes": "Rapidly absorbed orally.",
    "specificHazards": [
      "Serotonin syndrome risk when combined with other serotonergics."
    ],
    "sideEffects": [
      {
        "effect": "Dreamy Serotonergic Sedation & Warmth",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Highly Selective Serotonin Releaser (SERT >> NET/DAT)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · 5-APDB",
      "source": "PubChem CID 14257662",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/14257662"
    }
  },
  {
    "id": "6-apdb",
    "name": "6-APDB (6-(2-Aminopropyl)-2,3-dihydrobenzofuran)",
    "shortName": "6-APDB",
    "synonyms": [
      "4-Desoxy-MDA"
    ],
    "classification": "Empathogen / Stimulant",
    "riskTier": "High",
    "pubchemCid": 14257661,
    "molecularFormula": "C11H15NO",
    "molecularWeight": 177.24,
    "canonicalSmiles": "CC(CC1=CC2=C(C=C1)CCO2)N",
    "xLogP": 2.1,
    "cb1KiNm": 18,
    "cb2KiNm": 0,
    "cb1Efficacy": "Balanced Triple Monoamine Releaser (SERT / DAT / NET)",
    "cb2Efficacy": "Dihydrobenzofuran Empathogen",
    "relativePotencyVsD9": 2,
    "psychoactive": true,
    "alkylChainLength": "Dihydrobenzofuran Analog of 6-APB",
    "cypEnzymes": [
      "CYP2D6"
    ],
    "primaryMetabolite": "Hydroxylated metabolites",
    "immunoassayCrossReactivityPct": 45,
    "terminalHalfLifeHours": 8,
    "inhaledOnsetMinutes": [
      15,
      30
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
      6,
      8
    ],
    "baseOralThresholdMg": 25,
    "baseInhaledThresholdMg": 15,
    "radarProfile": {
      "cb1AffinityScore": 80,
      "euphoriaPotency": 85,
      "somaticSedation": 36,
      "anxiogenicRisk": 42,
      "durationPersistence": 52,
      "lipidRetention": 32
    },
    "summary": "2,3-Dihydro analog of 6-APB with slightly faster onset and a 6–8 hour entactogenic duration.",
    "pharmacologyNotes": "Hepatic oxidative metabolism.",
    "specificHazards": [
      "Hyperthermia and bruxism at high doses."
    ],
    "sideEffects": [
      {
        "effect": "Warm Entactogenic Euphoria & Visual Brightening",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Balanced Triple Monoamine Releaser (SERT / DAT / NET)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · 6-APDB",
      "source": "PubChem CID 14257661",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/14257661"
    }
  },
  {
    "id": "5-mapb",
    "name": "5-MAPB (1-(Benzofuran-5-yl)-N-methylpropan-2-amine)",
    "shortName": "5-MAPB",
    "synonyms": [
      "N-Methyl-5-APB"
    ],
    "classification": "Empathogen / Stimulant",
    "riskTier": "High",
    "pubchemCid": 56603655,
    "molecularFormula": "C12H15NO",
    "molecularWeight": 189.25,
    "canonicalSmiles": "CC(CC1=CC2=C(C=C1)OC=C2)NC",
    "xLogP": 2.7,
    "cb1KiNm": 9.5,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent Triple Releaser (SERT / DAT / NET) — Direct MDMA Benzofuran Analog",
    "cb2Efficacy": "Non-Quinone-Forming MDMA Bioisostere",
    "relativePotencyVsD9": 2.8,
    "psychoactive": true,
    "alkylChainLength": "N-Methylated 5-APB (Benzofuran MDMA)",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "5-APB (active N-demethylated metabolite)",
    "immunoassayCrossReactivityPct": 55,
    "terminalHalfLifeHours": 8.5,
    "inhaledOnsetMinutes": [
      10,
      20
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
      8
    ],
    "baseOralThresholdMg": 15,
    "baseInhaledThresholdMg": 10,
    "radarProfile": {
      "cb1AffinityScore": 90,
      "euphoriaPotency": 95,
      "somaticSedation": 38,
      "anxiogenicRisk": 45,
      "durationPersistence": 56,
      "lipidRetention": 36
    },
    "summary": "N-methylated derivative of 5-APB and direct structural bioisostere of MDMA. Combines intense serotonergic euphoria with substantial dopamine release over a 6–8 hour window.",
    "pharmacologyNotes": "N-demethylated in vivo to active 5-APB.",
    "specificHazards": [
      "High potency per mg (~2x stronger by weight than MDMA)—dose carefully to avoid overwhelming serotonin flood."
    ],
    "sideEffects": [
      {
        "effect": "Profound MDMA-Like Empathic Rush, Eye Wiggles & Jaw Tension",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Potent Triple Releaser (SERT / DAT / NET) — Direct MDMA Benzofuran Analog"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · 5-MAPB",
      "source": "PubChem CID 56603655",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/56603655"
    }
  },
  {
    "id": "6-mapb",
    "name": "6-MAPB (1-(Benzofuran-6-yl)-N-methylpropan-2-amine)",
    "shortName": "6-MAPB",
    "synonyms": [
      "N-Methyl-6-APB"
    ],
    "classification": "Empathogen / Stimulant",
    "riskTier": "High",
    "pubchemCid": 71300938,
    "molecularFormula": "C12H15NO",
    "molecularWeight": 189.25,
    "canonicalSmiles": "CC(CC1=CC2=C(C=C1)C=CO2)NC",
    "xLogP": 2.7,
    "cb1KiNm": 10,
    "cb2KiNm": 0,
    "cb1Efficacy": "Energetic Triple Monoamine Releaser (SERT / DAT / NET)",
    "cb2Efficacy": "Stimulating Benzofuran Entactogen",
    "relativePotencyVsD9": 2.6,
    "psychoactive": true,
    "alkylChainLength": "N-Methylated 6-APB",
    "cypEnzymes": [
      "CYP2D6"
    ],
    "primaryMetabolite": "6-APB",
    "immunoassayCrossReactivityPct": 55,
    "terminalHalfLifeHours": 9,
    "inhaledOnsetMinutes": [
      10,
      20
    ],
    "inhaledDurationHours": [
      5,
      7
    ],
    "oralOnsetMinutes": [
      25,
      50
    ],
    "oralDurationHours": [
      6,
      9
    ],
    "baseOralThresholdMg": 20,
    "baseInhaledThresholdMg": 12,
    "radarProfile": {
      "cb1AffinityScore": 88,
      "euphoriaPotency": 93,
      "somaticSedation": 24,
      "anxiogenicRisk": 52,
      "durationPersistence": 60,
      "lipidRetention": 36
    },
    "summary": "N-methylated analog of 6-APB combining the fast onset of MDMA with the energetic dopaminergic push of 6-APB.",
    "pharmacologyNotes": "N-demethylates to active 6-APB.",
    "specificHazards": [
      "Cardiovascular strain and hyperthermia in hot environments."
    ],
    "sideEffects": [
      {
        "effect": "Energetic Euphoric Roll, Tachycardia & Bruxism",
        "system": "Cardiovascular",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Energetic Triple Monoamine Releaser (SERT / DAT / NET)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · 6-MAPB",
      "source": "PubChem CID 71300938",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/71300938"
    }
  },
  {
    "id": "mephedrone",
    "name": "Mephedrone (4-Methylmethcathinone · 4-MMC)",
    "shortName": "Mephedrone (4-MMC)",
    "synonyms": [
      "4-MMC",
      "Meow Meow",
      "M-Cat",
      "Drone"
    ],
    "classification": "Cathinone & Pyrrolidine",
    "riskTier": "Extreme",
    "pubchemCid": 45266826,
    "molecularFormula": "C11H15NO",
    "molecularWeight": 177.24,
    "canonicalSmiles": "CC1=CC=C(C=C1)C(=O)C(C)NC",
    "xLogP": 1.9,
    "cb1KiNm": 14,
    "cb2KiNm": 0,
    "cb1Efficacy": "Rapid Triple Monoamine Releasing Agent (500% Dopamine / 950% Serotonin Surge)",
    "cb2Efficacy": "β-Keto-para-Methylmethamphetamine",
    "relativePotencyVsD9": 2.5,
    "psychoactive": true,
    "alkylChainLength": "para-Methyl-β-ketomethamphetamine",
    "cypEnzymes": [
      "CYP2D6"
    ],
    "primaryMetabolite": "4-Methylephedrine & Nor-mephedrone",
    "immunoassayCrossReactivityPct": 30,
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
      35
    ],
    "oralDurationHours": [
      2.5,
      4
    ],
    "baseOralThresholdMg": 25,
    "baseInhaledThresholdMg": 10,
    "radarProfile": {
      "cb1AffinityScore": 90,
      "euphoriaPotency": 98,
      "somaticSedation": 8,
      "anxiogenicRisk": 78,
      "durationPersistence": 22,
      "lipidRetention": 18
    },
    "summary": "Archetypal synthetic β-keto-amphetamine (4-MMC) that triggers simultaneous massive striatal dopamine (+500%) and nucleus accumbens serotonin (+950%) efflux with a rapid 2.2-hour half-life.",
    "pharmacologyNotes": "Rapidly crosses the BBB and clears within hours, driving intense compulsive redosing.",
    "specificHazards": [
      "EXTREME COMPULSIVE REDOSING (\"Fiending\"): Short 60–90 min peak triggers multi-gram binges.",
      "Peripheral vasoconstriction (blue knees/fingers) and characteristic cat-urine sweat odor."
    ],
    "sideEffects": [
      {
        "effect": "Explosive Dopamine/Serotonin Rush, Tachycardia & Compulsive Redosing",
        "system": "Cardiovascular",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "Rapid Triple Monoamine Releasing Agent (500% Dopamine / 950% Serotonin Surge)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Mephedrone (4-MMC)",
      "source": "PubChem CID 45266826",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/45266826"
    }
  },
  {
    "id": "3-mmc",
    "name": "3-MMC (3-Methylmethcathinone · Metaphedrone)",
    "shortName": "3-MMC",
    "synonyms": [
      "Metaphedrone",
      "3-Methyl-MC"
    ],
    "classification": "Cathinone & Pyrrolidine",
    "riskTier": "Extreme",
    "pubchemCid": 71749867,
    "molecularFormula": "C11H15NO",
    "molecularWeight": 177.24,
    "canonicalSmiles": "CC1=CC(=CC=C1)C(=O)C(C)NC",
    "xLogP": 1.9,
    "cb1KiNm": 16,
    "cb2KiNm": 0,
    "cb1Efficacy": "Dopaminergic/Noradrenergic-Biased Triple Releaser (DAT/NET > SERT)",
    "cb2Efficacy": "meta-Methyl Methcathinone Isomer",
    "relativePotencyVsD9": 2.4,
    "psychoactive": true,
    "alkylChainLength": "3-Positional Isomer of Mephedrone",
    "cypEnzymes": [
      "CYP2D6"
    ],
    "primaryMetabolite": "3-Methylephedrine & 3-Methylcathinone",
    "immunoassayCrossReactivityPct": 25,
    "terminalHalfLifeHours": 2,
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
      35
    ],
    "oralDurationHours": [
      2.5,
      4
    ],
    "baseOralThresholdMg": 25,
    "baseInhaledThresholdMg": 10,
    "radarProfile": {
      "cb1AffinityScore": 88,
      "euphoriaPotency": 94,
      "somaticSedation": 8,
      "anxiogenicRisk": 76,
      "durationPersistence": 20,
      "lipidRetention": 18
    },
    "summary": "3-Positional isomer of mephedrone (3-MMC). Exhibits a higher dopamine-to-serotonin release ratio than 4-MMC, making it sharper, more cocaine-like, and slightly clearer-headed while retaining warm entactogenic edges.",
    "pharmacologyNotes": "Rapidly metabolized with a ~2.0 hour elimination half-life.",
    "specificHazards": [
      "Intense nasal mucosa damage and fierce compulsive redosing liability."
    ],
    "sideEffects": [
      {
        "effect": "Sharp Dopaminergic Euphoria, Tachycardia & Compulsive Craving",
        "system": "Cardiovascular",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "Dopaminergic/Noradrenergic-Biased Triple Releaser (DAT/NET > SERT)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · 3-MMC",
      "source": "PubChem CID 71749867",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/71749867"
    }
  },
  {
    "id": "2-mmc",
    "name": "2-MMC (2-Methylmethcathinone · Orthophedrone)",
    "shortName": "2-MMC",
    "synonyms": [
      "2-Methyl-MC",
      "Orthophedrone"
    ],
    "classification": "Cathinone & Pyrrolidine",
    "riskTier": "High",
    "pubchemCid": 71749922,
    "molecularFormula": "C11H15NO",
    "molecularWeight": 177.24,
    "canonicalSmiles": "CC1=CC=CC=C1C(=O)C(C)NC",
    "xLogP": 1.9,
    "cb1KiNm": 28,
    "cb2KiNm": 0,
    "cb1Efficacy": "Selective Dopamine/Norepinephrine Releasing Agent (DAT/NET >> SERT)",
    "cb2Efficacy": "ortho-Methyl Methcathinone Isomer",
    "relativePotencyVsD9": 1.8,
    "psychoactive": true,
    "alkylChainLength": "2-Positional Isomer of Mephedrone",
    "cypEnzymes": [
      "CYP2D6"
    ],
    "primaryMetabolite": "2-Methylephedrine",
    "immunoassayCrossReactivityPct": 20,
    "terminalHalfLifeHours": 2,
    "inhaledOnsetMinutes": [
      3,
      6
    ],
    "inhaledDurationHours": [
      1,
      2
    ],
    "oralOnsetMinutes": [
      20,
      40
    ],
    "oralDurationHours": [
      2.5,
      3.5
    ],
    "baseOralThresholdMg": 30,
    "baseInhaledThresholdMg": 15,
    "radarProfile": {
      "cb1AffinityScore": 76,
      "euphoriaPotency": 78,
      "somaticSedation": 10,
      "anxiogenicRisk": 68,
      "durationPersistence": 20,
      "lipidRetention": 18
    },
    "summary": "ortho-Methyl isomer of mephedrone. Because steric hindrance at the 2-position reduces SERT affinity, 2-MMC acts primarily as a clean dopaminergic/noradrenergic stimulant rather than a heavy serotonergic roll.",
    "pharmacologyNotes": "Short 2-hour half-life.",
    "specificHazards": [
      "Tachycardia, vasoconstriction, and compulsive redosing."
    ],
    "sideEffects": [
      {
        "effect": "Clean Stimulant Alertness & Sympathomimetic Elevation",
        "system": "Cardiovascular",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Selective Dopamine/Norepinephrine Releasing Agent (DAT/NET >> SERT)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · 2-MMC",
      "source": "PubChem CID 71749922",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/71749922"
    }
  },
  {
    "id": "4-mec",
    "name": "4-MEC (4-Methylethcathinone)",
    "shortName": "4-MEC",
    "synonyms": [
      "4-Methyl-N-ethylcathinone"
    ],
    "classification": "Cathinone & Pyrrolidine",
    "riskTier": "High",
    "pubchemCid": 44361717,
    "molecularFormula": "C12H17NO",
    "molecularWeight": 191.27,
    "canonicalSmiles": "CCNC(C)C(=O)C1=CC=C(C=C1)C",
    "xLogP": 2.3,
    "cb1KiNm": 24,
    "cb2KiNm": 0,
    "cb1Efficacy": "Hybrid SERT Releaser & DAT Reuptake Inhibitor",
    "cb2Efficacy": "N-Ethyl Homolog of Mephedrone",
    "relativePotencyVsD9": 1.8,
    "psychoactive": true,
    "alkylChainLength": "para-Methyl-N-ethylcathinone",
    "cypEnzymes": [
      "CYP2D6"
    ],
    "primaryMetabolite": "4-Methylcathinone & dihydro metabolites",
    "immunoassayCrossReactivityPct": 25,
    "terminalHalfLifeHours": 2.5,
    "inhaledOnsetMinutes": [
      3,
      8
    ],
    "inhaledDurationHours": [
      1,
      2
    ],
    "oralOnsetMinutes": [
      20,
      40
    ],
    "oralDurationHours": [
      2.5,
      4
    ],
    "baseOralThresholdMg": 30,
    "baseInhaledThresholdMg": 15,
    "radarProfile": {
      "cb1AffinityScore": 78,
      "euphoriaPotency": 82,
      "somaticSedation": 18,
      "anxiogenicRisk": 65,
      "durationPersistence": 22,
      "lipidRetention": 22
    },
    "summary": "N-ethyl homolog of mephedrone (4-MEC). Acts as a serotonin releasing agent while functioning as a dopamine reuptake blocker rather than releaser.",
    "pharmacologyNotes": "Rapidly cleared hepatically.",
    "specificHazards": [
      "Compulsive redosing and cardiovascular strain."
    ],
    "sideEffects": [
      {
        "effect": "Rushing Serotonergic Warmth & Tachycardia",
        "system": "Cardiovascular",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Hybrid SERT Releaser & DAT Reuptake Inhibitor"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · 4-MEC",
      "source": "PubChem CID 44361717",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/44361717"
    }
  },
  {
    "id": "3-mec",
    "name": "3-MEC (3-Methylethcathinone)",
    "shortName": "3-MEC",
    "synonyms": [
      "3-Methyl-N-ethylcathinone"
    ],
    "classification": "Cathinone & Pyrrolidine",
    "riskTier": "High",
    "pubchemCid": 71301146,
    "molecularFormula": "C12H17NO",
    "molecularWeight": 191.27,
    "canonicalSmiles": "CCNC(C)C(=O)C1=CC(=CC=C1)C",
    "xLogP": 2.3,
    "cb1KiNm": 25,
    "cb2KiNm": 0,
    "cb1Efficacy": "DAT / NET Reuptake Inhibitor & Moderate SERT Modulator",
    "cb2Efficacy": "N-Ethyl Homolog of 3-MMC",
    "relativePotencyVsD9": 1.8,
    "psychoactive": true,
    "alkylChainLength": "meta-Methyl-N-ethylcathinone",
    "cypEnzymes": [
      "CYP2D6"
    ],
    "primaryMetabolite": "Nor-3-MEC",
    "immunoassayCrossReactivityPct": 20,
    "terminalHalfLifeHours": 2.4,
    "inhaledOnsetMinutes": [
      3,
      8
    ],
    "inhaledDurationHours": [
      1,
      2
    ],
    "oralOnsetMinutes": [
      20,
      40
    ],
    "oralDurationHours": [
      2.5,
      4
    ],
    "baseOralThresholdMg": 25,
    "baseInhaledThresholdMg": 15,
    "radarProfile": {
      "cb1AffinityScore": 76,
      "euphoriaPotency": 80,
      "somaticSedation": 14,
      "anxiogenicRisk": 66,
      "durationPersistence": 22,
      "lipidRetention": 22
    },
    "summary": "N-ethyl analog of 3-MMC offering short-acting dopaminergic stimulation.",
    "pharmacologyNotes": "Rapid beta-ketone reduction in vivo.",
    "specificHazards": [
      "Tachycardia and nasal irritation."
    ],
    "sideEffects": [
      {
        "effect": "Short-Acting Stimulant Rush & Vasoconstriction",
        "system": "Cardiovascular",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "DAT / NET Reuptake Inhibitor & Moderate SERT Modulator"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · 3-MEC",
      "source": "PubChem CID 71301146",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/71301146"
    }
  },
  {
    "id": "methylone",
    "name": "Methylone (bk-MDMA · 3,4-Methylenedioxymethcathinone)",
    "shortName": "Methylone (bk-MDMA)",
    "synonyms": [
      "bk-MDMA",
      "M1",
      "MDMC"
    ],
    "classification": "Cathinone & Pyrrolidine",
    "riskTier": "High",
    "pubchemCid": 45789647,
    "molecularFormula": "C11H13NO3",
    "molecularWeight": 207.23,
    "canonicalSmiles": "CC(C(=O)C1=CC2=C(C=C1)OCO2)NC",
    "xLogP": 1.4,
    "cb1KiNm": 22,
    "cb2KiNm": 0,
    "cb1Efficacy": "Balanced Triple Monoamine Releaser (DAT / NET / SERT)",
    "cb2Efficacy": "β-Keto Analog of MDMA",
    "relativePotencyVsD9": 1.8,
    "psychoactive": true,
    "alkylChainLength": "β-Keto-MDMA",
    "cypEnzymes": [
      "CYP2D6"
    ],
    "primaryMetabolite": "bk-MDA & HMMC",
    "immunoassayCrossReactivityPct": 40,
    "terminalHalfLifeHours": 3.5,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      1.5,
      2.5
    ],
    "oralOnsetMinutes": [
      20,
      45
    ],
    "oralDurationHours": [
      3,
      4.5
    ],
    "baseOralThresholdMg": 40,
    "baseInhaledThresholdMg": 20,
    "radarProfile": {
      "cb1AffinityScore": 82,
      "euphoriaPotency": 88,
      "somaticSedation": 18,
      "anxiogenicRisk": 58,
      "durationPersistence": 28,
      "lipidRetention": 20
    },
    "summary": "β-Keto analog of MDMA (\"M1\") first synthesized by Peyton Jacob & Alexander Shulgin. Releases roughly 1/3 the serotonin of MDMA alongside robust dopamine/norepinephrine efflux.",
    "pharmacologyNotes": "Shorter 3.5-hour half-life than MDMA.",
    "specificHazards": [
      "Compulsive redosing increases hyperthermia and cardiovascular toxicity."
    ],
    "sideEffects": [
      {
        "effect": "Warm Empathic Stimulation, Jaw Clenching & Tachycardia",
        "system": "Cardiovascular",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Balanced Triple Monoamine Releaser (DAT / NET / SERT)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Methylone (bk-MDMA)",
      "source": "PubChem CID 45789647",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/45789647"
    }
  },
  {
    "id": "ethylone",
    "name": "Ethylone (bk-MDEA · 3,4-Methylenedioxy-N-ethylcathinone)",
    "shortName": "Ethylone",
    "synonyms": [
      "bk-MDEA",
      "MDEC"
    ],
    "classification": "Cathinone & Pyrrolidine",
    "riskTier": "High",
    "pubchemCid": 53384514,
    "molecularFormula": "C12H15NO3",
    "molecularWeight": 221.25,
    "canonicalSmiles": "CCNC(C)C(=O)C1=CC2=C(C=C1)OCO2",
    "xLogP": 1.8,
    "cb1KiNm": 30,
    "cb2KiNm": 0,
    "cb1Efficacy": "Serotonin Releaser & DAT/NET Reuptake Blocker",
    "cb2Efficacy": "β-Keto Analog of MDEA",
    "relativePotencyVsD9": 1.5,
    "psychoactive": true,
    "alkylChainLength": "β-Keto-MDEA",
    "cypEnzymes": [
      "CYP2D6"
    ],
    "primaryMetabolite": "bk-MDA & demethylated catechols",
    "immunoassayCrossReactivityPct": 35,
    "terminalHalfLifeHours": 3.8,
    "inhaledOnsetMinutes": [
      10,
      20
    ],
    "inhaledDurationHours": [
      1.5,
      2.5
    ],
    "oralOnsetMinutes": [
      25,
      50
    ],
    "oralDurationHours": [
      3,
      4.5
    ],
    "baseOralThresholdMg": 50,
    "baseInhaledThresholdMg": 25,
    "radarProfile": {
      "cb1AffinityScore": 74,
      "euphoriaPotency": 78,
      "somaticSedation": 30,
      "anxiogenicRisk": 52,
      "durationPersistence": 28,
      "lipidRetention": 22
    },
    "summary": "β-Keto analog of MDEA offering a milder, more relaxed entactogenic-stimulant profile than methylone.",
    "pharmacologyNotes": "Hepatic O-demethylenation.",
    "specificHazards": [
      "Cardiovascular strain and serotonin syndrome risk with MAOIs."
    ],
    "sideEffects": [
      {
        "effect": "Mellow Empathic Warmth & Mild Stimulation",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Serotonin Releaser & DAT/NET Reuptake Blocker"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Ethylone",
      "source": "PubChem CID 53384514",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/53384514"
    }
  },
  {
    "id": "butylone",
    "name": "Butylone (bk-MBDB · β-Keto-N-methylbenzodioxolylbutanamine)",
    "shortName": "Butylone",
    "synonyms": [
      "bk-MBDB",
      "B1"
    ],
    "classification": "Cathinone & Pyrrolidine",
    "riskTier": "High",
    "pubchemCid": 56841524,
    "molecularFormula": "C12H15NO3",
    "molecularWeight": 221.25,
    "canonicalSmiles": "CCC(C(=O)C1=CC2=C(C=C1)OCO2)NC",
    "xLogP": 1.9,
    "cb1KiNm": 28,
    "cb2KiNm": 0,
    "cb1Efficacy": "Hybrid Monoamine Reuptake Inhibitor (DAT/NET) & Mild SERT Releaser",
    "cb2Efficacy": "β-Keto Analog of MBDB",
    "relativePotencyVsD9": 1.6,
    "psychoactive": true,
    "alkylChainLength": "α-Ethyl Homolog of Methylone",
    "cypEnzymes": [
      "CYP2D6"
    ],
    "primaryMetabolite": "bk-BDB",
    "immunoassayCrossReactivityPct": 30,
    "terminalHalfLifeHours": 4,
    "inhaledOnsetMinutes": [
      10,
      20
    ],
    "inhaledDurationHours": [
      2,
      3
    ],
    "oralOnsetMinutes": [
      25,
      50
    ],
    "oralDurationHours": [
      3,
      5
    ],
    "baseOralThresholdMg": 35,
    "baseInhaledThresholdMg": 20,
    "radarProfile": {
      "cb1AffinityScore": 75,
      "euphoriaPotency": 76,
      "somaticSedation": 22,
      "anxiogenicRisk": 62,
      "durationPersistence": 32,
      "lipidRetention": 24
    },
    "summary": "α-Ethyl homolog of methylone and β-keto analog of MBDB. Extending the alpha carbon chain shifts pharmacology toward dopamine/norepinephrine reuptake inhibition.",
    "pharmacologyNotes": "Cleared hepatically.",
    "specificHazards": [
      "Lingering residual stimulation and insomnia after the euphoric peak fades."
    ],
    "sideEffects": [
      {
        "effect": "Focused Stimulation, Warmth & Residual Wakefulness",
        "system": "Cardiovascular",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Hybrid Monoamine Reuptake Inhibitor (DAT/NET) & Mild SERT Releaser"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Butylone",
      "source": "PubChem CID 56841524",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/56841524"
    }
  },
  {
    "id": "pentylone",
    "name": "Pentylone (bk-MBDP · β-Keto-methylenedioxypentanamine)",
    "shortName": "Pentylone",
    "synonyms": [
      "bk-MBDP"
    ],
    "classification": "Cathinone & Pyrrolidine",
    "riskTier": "High",
    "pubchemCid": 60196394,
    "molecularFormula": "C13H17NO3",
    "molecularWeight": 235.28,
    "canonicalSmiles": "CCCC(C(=O)C1=CC2=C(C=C1)OCO2)NC",
    "xLogP": 2.4,
    "cb1KiNm": 18,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent NDRI (Dopamine/Norepinephrine Reuptake Inhibitor) with Weak SERT Activity",
    "cb2Efficacy": "α-Propyl Methylenedioxycathinone",
    "relativePotencyVsD9": 2.2,
    "psychoactive": true,
    "alkylChainLength": "α-Propyl Homolog of Methylone",
    "cypEnzymes": [
      "CYP2D6"
    ],
    "primaryMetabolite": "Demethylated metabolites",
    "immunoassayCrossReactivityPct": 25,
    "terminalHalfLifeHours": 5,
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
      4,
      6
    ],
    "baseOralThresholdMg": 15,
    "baseInhaledThresholdMg": 10,
    "radarProfile": {
      "cb1AffinityScore": 80,
      "euphoriaPotency": 78,
      "somaticSedation": 10,
      "anxiogenicRisk": 78,
      "durationPersistence": 42,
      "lipidRetention": 28
    },
    "summary": "α-Propyl methylenedioxycathinone that acts predominantly as a potent dopamine/norepinephrine reuptake inhibitor rather than a serotonin releaser.",
    "pharmacologyNotes": "Longer residual stimulation than methylone.",
    "specificHazards": [
      "High doses cause prolonged tachycardia, anxiety, and insomnia."
    ],
    "sideEffects": [
      {
        "effect": "Energetic NDRI Rush, Tachycardia & Insomnia",
        "system": "Cardiovascular",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Potent NDRI (Dopamine/Norepinephrine Reuptake Inhibitor) with Weak SERT Activity"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Pentylone",
      "source": "PubChem CID 60196394",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/60196394"
    }
  },
  {
    "id": "ephylone",
    "name": "N-Ethylpentylone (Ephylone · bk-EBDP)",
    "shortName": "N-Ethylpentylone (Ephylone)",
    "synonyms": [
      "Ephylone",
      "bk-EBDP",
      "N-Ethylnorpentylone"
    ],
    "classification": "Cathinone & Pyrrolidine",
    "riskTier": "Extreme",
    "pubchemCid": 118796281,
    "molecularFormula": "C14H19NO3",
    "molecularWeight": 249.31,
    "canonicalSmiles": "CCCC(C(=O)C1=CC2=C(C=C1)OCO2)NCC",
    "xLogP": 2.8,
    "cb1KiNm": 12,
    "cb2KiNm": 0,
    "cb1Efficacy": "High-Potency Dopamine / Norepinephrine Reuptake Inhibitor (DAT IC50 ~37 nM)",
    "cb2Efficacy": "Potent N-Ethyl α-Propyl Cathinone",
    "relativePotencyVsD9": 3,
    "psychoactive": true,
    "alkylChainLength": "N-Ethyl Homolog of Pentylone",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "Norpentylone & dihydropentylone",
    "immunoassayCrossReactivityPct": 20,
    "terminalHalfLifeHours": 6.5,
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
      6,
      10
    ],
    "baseOralThresholdMg": 10,
    "baseInhaledThresholdMg": 5,
    "radarProfile": {
      "cb1AffinityScore": 86,
      "euphoriaPotency": 80,
      "somaticSedation": 6,
      "anxiogenicRisk": 88,
      "durationPersistence": 58,
      "lipidRetention": 32
    },
    "summary": "High-potency N-ethylated methylenedioxycathinone (~3x stronger by weight than methylone) that frequently masquerades as MDMA in unadulterated street crystals.",
    "pharmacologyNotes": "Produces prolonged 8–12 hour sympathomimetic stimulation.",
    "specificHazards": [
      "FREQUENT MDMA ADULTERANT HAZARD: Taking an MDMA-sized dose (100+ mg) of Ephylone causes dangerous 24-hour insomnia, severe hypertension, and psychosis."
    ],
    "sideEffects": [
      {
        "effect": "Intense Sympathomimetic Stimulation, Tachycardia & 12h Insomnia",
        "system": "Cardiovascular",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "High-Potency Dopamine / Norepinephrine Reuptake Inhibitor (DAT IC50 ~37 nM)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · N-Ethylpentylone (Ephylone)",
      "source": "PubChem CID 118796281",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/118796281"
    }
  },
  {
    "id": "hexedrone",
    "name": "Hexedrone (α-Methylaminohexanophenone)",
    "shortName": "Hexedrone",
    "synonyms": [
      "α-Methylamino-valerophenone homolog"
    ],
    "classification": "Cathinone & Pyrrolidine",
    "riskTier": "High",
    "pubchemCid": 118701279,
    "molecularFormula": "C13H19NO",
    "molecularWeight": 205.3,
    "canonicalSmiles": "CCCCC(C(=O)C1=CC=CC=C1)NC",
    "xLogP": 2.9,
    "cb1KiNm": 22,
    "cb2KiNm": 0,
    "cb1Efficacy": "Selective Norepinephrine-Dopamine Reuptake Inhibitor (NDRI)",
    "cb2Efficacy": "Straight-Chain Hexanophenone Cathinone",
    "relativePotencyVsD9": 2,
    "psychoactive": true,
    "alkylChainLength": "C6-Alkyl Chain Cathinone",
    "cypEnzymes": [
      "CYP2D6"
    ],
    "primaryMetabolite": "Nor-hexedrone",
    "immunoassayCrossReactivityPct": 15,
    "terminalHalfLifeHours": 3,
    "inhaledOnsetMinutes": [
      3,
      8
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
      3,
      4
    ],
    "baseOralThresholdMg": 15,
    "baseInhaledThresholdMg": 10,
    "radarProfile": {
      "cb1AffinityScore": 76,
      "euphoriaPotency": 76,
      "somaticSedation": 8,
      "anxiogenicRisk": 72,
      "durationPersistence": 26,
      "lipidRetention": 28
    },
    "summary": "Six-carbon chain substituted cathinone acting as a selective dopamine and norepinephrine reuptake blocker.",
    "pharmacologyNotes": "Rapidly metabolized.",
    "specificHazards": [
      "Vasoconstriction and nasal mucosal damage."
    ],
    "sideEffects": [
      {
        "effect": "Short-Acting NDRI Stimulation & Tachycardia",
        "system": "Cardiovascular",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Selective Norepinephrine-Dopamine Reuptake Inhibitor (NDRI)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Hexedrone",
      "source": "PubChem CID 118701279",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/118701279"
    }
  },
  {
    "id": "hexen",
    "name": "N-Ethylhexedrone (Hexen · NEH)",
    "shortName": "N-Ethylhexedrone (Hexen)",
    "synonyms": [
      "Hexen",
      "NEH"
    ],
    "classification": "Cathinone & Pyrrolidine",
    "riskTier": "Extreme",
    "pubchemCid": 118796285,
    "molecularFormula": "C14H21NO",
    "molecularWeight": 219.32,
    "canonicalSmiles": "CCCCC(C(=O)C1=CC=CC=C1)NCC",
    "xLogP": 3.3,
    "cb1KiNm": 14,
    "cb2KiNm": 0,
    "cb1Efficacy": "High-Affinity Dopamine & Norepinephrine Reuptake Inhibitor (DAT/NET Blocker)",
    "cb2Efficacy": "Potent N-Ethyl Hexanophenone Cathinone",
    "relativePotencyVsD9": 2.8,
    "psychoactive": true,
    "alkylChainLength": "N-Ethyl-α-butylcathinone",
    "cypEnzymes": [
      "CYP2D6"
    ],
    "primaryMetabolite": "Dihydro-NEH & Nor-hexedrone",
    "immunoassayCrossReactivityPct": 15,
    "terminalHalfLifeHours": 3.2,
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
      35
    ],
    "oralDurationHours": [
      2.5,
      4
    ],
    "baseOralThresholdMg": 10,
    "baseInhaledThresholdMg": 5,
    "radarProfile": {
      "cb1AffinityScore": 86,
      "euphoriaPotency": 88,
      "somaticSedation": 6,
      "anxiogenicRisk": 85,
      "durationPersistence": 28,
      "lipidRetention": 30
    },
    "summary": "Potent N-ethylated hexanophenone cathinone (\"Hexen\") acting as a pure, high-affinity dopamine/norepinephrine reuptake inhibitor with local anesthetic numbing.",
    "pharmacologyNotes": "Short 60–90 min euphoric peak followed by lingering noradrenergic stimulation.",
    "specificHazards": [
      "Caustic to nasal membranes; rapid tolerance and fiendish redosing ceiling after 2–3 doses."
    ],
    "sideEffects": [
      {
        "effect": "Intense Cocaine-Like Rush, Numbing & Residual Tachycardia",
        "system": "Cardiovascular",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "High-Affinity Dopamine & Norepinephrine Reuptake Inhibitor (DAT/NET Blocker)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · N-Ethylhexedrone (Hexen)",
      "source": "PubChem CID 118796285",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/118796285"
    }
  },
  {
    "id": "pentedrone",
    "name": "Pentedrone (α-Methylaminovalerophenone)",
    "shortName": "Pentedrone",
    "synonyms": [
      "α-Methylamino-valerophenone"
    ],
    "classification": "Cathinone & Pyrrolidine",
    "riskTier": "High",
    "pubchemCid": 56603651,
    "molecularFormula": "C12H17NO",
    "molecularWeight": 191.27,
    "canonicalSmiles": "CCCC(C(=O)C1=CC=CC=C1)NC",
    "xLogP": 2.4,
    "cb1KiNm": 20,
    "cb2KiNm": 0,
    "cb1Efficacy": "Selective Dopamine & Norepinephrine Reuptake Inhibitor (NDRI)",
    "cb2Efficacy": "Valerophenone Cathinone",
    "relativePotencyVsD9": 2.2,
    "psychoactive": true,
    "alkylChainLength": "C5-Alkyl Chain Cathinone",
    "cypEnzymes": [
      "CYP2D6"
    ],
    "primaryMetabolite": "Dihydropentedrone",
    "immunoassayCrossReactivityPct": 15,
    "terminalHalfLifeHours": 2.8,
    "inhaledOnsetMinutes": [
      3,
      8
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
      3,
      4
    ],
    "baseOralThresholdMg": 10,
    "baseInhaledThresholdMg": 5,
    "radarProfile": {
      "cb1AffinityScore": 78,
      "euphoriaPotency": 80,
      "somaticSedation": 8,
      "anxiogenicRisk": 74,
      "durationPersistence": 26,
      "lipidRetention": 24
    },
    "summary": "Five-carbon valerophenone cathinone acting as a pure NDRI without serotonin release.",
    "pharmacologyNotes": "Cleared via carbonyl reduction.",
    "specificHazards": [
      "Tachycardia and compulsive redosing."
    ],
    "sideEffects": [
      {
        "effect": "Crisp NDRI Stimulation & Vasoconstriction",
        "system": "Cardiovascular",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Selective Dopamine & Norepinephrine Reuptake Inhibitor (NDRI)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Pentedrone",
      "source": "PubChem CID 56603651",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/56603651"
    }
  },
  {
    "id": "nep",
    "name": "N-Ethylpentedrone (NEP · N-Ethylnorpentedrone)",
    "shortName": "N-Ethylpentedrone (NEP)",
    "synonyms": [
      "NEP",
      "N-Ethylnorpentedrone"
    ],
    "classification": "Cathinone & Pyrrolidine",
    "riskTier": "Extreme",
    "pubchemCid": 118796283,
    "molecularFormula": "C13H19NO",
    "molecularWeight": 205.3,
    "canonicalSmiles": "CCCC(C(=O)C1=CC=CC=C1)NCC",
    "xLogP": 2.8,
    "cb1KiNm": 12,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent Dopamine-Biased NDRI (Smoother DAT/NET Ratio than Hexen)",
    "cb2Efficacy": "N-Ethyl Valerophenone Cathinone",
    "relativePotencyVsD9": 2.9,
    "psychoactive": true,
    "alkylChainLength": "N-Ethyl-α-propylcathinone",
    "cypEnzymes": [
      "CYP2D6"
    ],
    "primaryMetabolite": "Dihydro-NEP & Nor-pentedrone",
    "immunoassayCrossReactivityPct": 15,
    "terminalHalfLifeHours": 3,
    "inhaledOnsetMinutes": [
      2,
      5
    ],
    "inhaledDurationHours": [
      1.5,
      2.5
    ],
    "oralOnsetMinutes": [
      15,
      35
    ],
    "oralDurationHours": [
      3,
      4.5
    ],
    "baseOralThresholdMg": 10,
    "baseInhaledThresholdMg": 5,
    "radarProfile": {
      "cb1AffinityScore": 88,
      "euphoriaPotency": 90,
      "somaticSedation": 6,
      "anxiogenicRisk": 78,
      "durationPersistence": 28,
      "lipidRetention": 28
    },
    "summary": "N-ethylated valerophenone cathinone (\"NEP\"). Widely noted for having a cleaner, more dopaminergic, less jittery DAT/NET ratio than Hexen.",
    "pharmacologyNotes": "Rapidly crosses the BBB when insufflated or vaporized.",
    "specificHazards": [
      "High addiction and compulsive redosing potential especially when vaporized."
    ],
    "sideEffects": [
      {
        "effect": "Smooth Dopaminergic Rush, Euphoria & Tachycardia",
        "system": "Cardiovascular",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "Potent Dopamine-Biased NDRI (Smoother DAT/NET Ratio than Hexen)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · N-Ethylpentedrone (NEP)",
      "source": "PubChem CID 118796283",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/118796283"
    }
  },
  {
    "id": "mdpv",
    "name": "MDPV (3,4-Methylenedioxypyrovalerone)",
    "shortName": "MDPV",
    "synonyms": [
      "Monkey Dust",
      "Bath Salts",
      "Methylenedioxypyrovalerone"
    ],
    "classification": "Cathinone & Pyrrolidine",
    "riskTier": "Extreme",
    "pubchemCid": 11148955,
    "molecularFormula": "C16H21NO3",
    "molecularWeight": 275.34,
    "canonicalSmiles": "CCCC(C(=O)C1=CC2=C(C=C1)OCO2)N3CCCC3",
    "xLogP": 3.1,
    "cb1KiNm": 4.1,
    "cb2KiNm": 0,
    "cb1Efficacy": "Ultra-Potent Selective NDRI (DAT Ki ~4.1 nM / NET Ki ~26 nM — ~10–50x Cocaine)",
    "cb2Efficacy": "Pyrrolidinophenethylamine Blocker",
    "relativePotencyVsD9": 6,
    "psychoactive": true,
    "alkylChainLength": "3,4-Methylenedioxy-α-pyrrolidinovalerophenone",
    "cypEnzymes": [
      "CYP2D6",
      "CYP2C19",
      "COMT"
    ],
    "primaryMetabolite": "Demethylenyl-MDPV & Catechol glucuronides",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 4.5,
    "inhaledOnsetMinutes": [
      2,
      5
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
      4,
      7
    ],
    "baseOralThresholdMg": 2,
    "baseInhaledThresholdMg": 1,
    "radarProfile": {
      "cb1AffinityScore": 98,
      "euphoriaPotency": 92,
      "somaticSedation": 4,
      "anxiogenicRisk": 98,
      "durationPersistence": 48,
      "lipidRetention": 42
    },
    "summary": "Archetypal pyrrolidinophenone NDRI (\"Bath Salts\"). Exhibits nanomolar affinity at DAT (Ki ~4.1 nM), blocking dopamine reuptake ~50x more potently than cocaine.",
    "pharmacologyNotes": "Active at 2–5 mg; high blood-brain barrier permeability.",
    "specificHazards": [
      "EXTREME DELIRIUM & PSYCHOSIS RISK: Redosing rapidly induces paranoid psychosis, severe hyperthermia, rhabdomyolysis, and excited delirium."
    ],
    "sideEffects": [
      {
        "effect": "Intense Dopaminergic Rush, Severe Paranoia & Tachycardia",
        "system": "Psychiatric",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "Ultra-Potent Selective NDRI (DAT Ki ~4.1 nM / NET Ki ~26 nM — ~10–50x Cocaine)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · MDPV",
      "source": "PubChem CID 11148955",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/11148955"
    }
  },
  {
    "id": "alpha-pvp",
    "name": "alpha-PVP (α-Pyrrolidinopentiophenone · Flakka)",
    "shortName": "alpha-PVP (Flakka)",
    "synonyms": [
      "Flakka",
      "Gravel",
      "O-2387",
      "β-Keto-prolintane"
    ],
    "classification": "Cathinone & Pyrrolidine",
    "riskTier": "Extreme",
    "pubchemCid": 11148954,
    "molecularFormula": "C15H21NO",
    "molecularWeight": 231.33,
    "canonicalSmiles": "CCCC(C(=O)C1=CC=CC=C1)N2CCCC2",
    "xLogP": 3.3,
    "cb1KiNm": 4.5,
    "cb2KiNm": 0,
    "cb1Efficacy": "Ultra-Potent DAT / NET Inverse-Like Blocker (DAT Ki ~4.5 nM)",
    "cb2Efficacy": "Desmethylenedioxy Analog of MDPV",
    "relativePotencyVsD9": 6,
    "psychoactive": true,
    "alkylChainLength": "α-Pyrrolidinovalerophenone",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "2\"-Oxo-α-PVP & OH-α-PVP",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 4.2,
    "inhaledOnsetMinutes": [
      1,
      4
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
      3,
      6
    ],
    "baseOralThresholdMg": 2,
    "baseInhaledThresholdMg": 1,
    "radarProfile": {
      "cb1AffinityScore": 98,
      "euphoriaPotency": 92,
      "somaticSedation": 4,
      "anxiogenicRisk": 98,
      "durationPersistence": 42,
      "lipidRetention": 40
    },
    "summary": "Desmethylenedioxy analog of MDPV (\"Flakka\"). Ultra-potent selective dopamine and norepinephrine transporter blocker active at 1–5 mg.",
    "pharmacologyNotes": "Vaporization crosses the BBB in seconds, producing a fierce rush.",
    "specificHazards": [
      "High incidence of stimulant psychosis, hyperthermia (>41°C), and rhabdomyolysis on binges."
    ],
    "sideEffects": [
      {
        "effect": "Explosive Dopamine Rush, Hypervigilance & Paranoid Psychosis",
        "system": "Psychiatric",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "Ultra-Potent DAT / NET Inverse-Like Blocker (DAT Ki ~4.5 nM)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · alpha-PVP (Flakka)",
      "source": "PubChem CID 11148954",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/11148954"
    }
  },
  {
    "id": "alpha-php",
    "name": "alpha-PHP (α-Pyrrolidinohexiophenone)",
    "shortName": "alpha-PHP",
    "synonyms": [
      "PV-7",
      "α-Pyrrolidinohexanophenone"
    ],
    "classification": "Cathinone & Pyrrolidine",
    "riskTier": "Extreme",
    "pubchemCid": 71750076,
    "molecularFormula": "C16H23NO",
    "molecularWeight": 245.36,
    "canonicalSmiles": "CCCCC(C(=O)C1=CC=CC=C1)N2CCCC2",
    "xLogP": 3.8,
    "cb1KiNm": 5,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent Selective DAT / NET Blocker (C6 Pyrrolidinophenone)",
    "cb2Efficacy": "Hexanophenone Homolog of α-PVP",
    "relativePotencyVsD9": 5.5,
    "psychoactive": true,
    "alkylChainLength": "α-Pyrrolidinohexanophenone",
    "cypEnzymes": [
      "CYP2D6"
    ],
    "primaryMetabolite": "2\"-Oxo-α-PHP & Dihydro-α-PHP",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 4.5,
    "inhaledOnsetMinutes": [
      1,
      4
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
      3.5,
      6
    ],
    "baseOralThresholdMg": 2.5,
    "baseInhaledThresholdMg": 1.5,
    "radarProfile": {
      "cb1AffinityScore": 96,
      "euphoriaPotency": 90,
      "somaticSedation": 4,
      "anxiogenicRisk": 95,
      "durationPersistence": 44,
      "lipidRetention": 44
    },
    "summary": "Six-carbon chain homolog of alpha-PVP. Retains high-affinity DAT inhibition with slightly shorter peak and high lipophilicity.",
    "pharmacologyNotes": "Cleared via pyrrolidine ring oxidation and carbonyl reduction.",
    "specificHazards": [
      "Severe compulsive redosing, paranoia, and cardiovascular stress."
    ],
    "sideEffects": [
      {
        "effect": "Intense Dopaminergic Rush, Tachycardia & Paranoia",
        "system": "Cardiovascular",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "Potent Selective DAT / NET Blocker (C6 Pyrrolidinophenone)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · alpha-PHP",
      "source": "PubChem CID 71750076",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/71750076"
    }
  },
  {
    "id": "alpha-pihp",
    "name": "alpha-PiHP (α-Pyrrolidinoisohexanophenone)",
    "shortName": "alpha-PiHP",
    "synonyms": [
      "4-Methyl-α-PHP isomer"
    ],
    "classification": "Cathinone & Pyrrolidine",
    "riskTier": "Extreme",
    "pubchemCid": 118796295,
    "molecularFormula": "C16H23NO",
    "molecularWeight": 245.36,
    "canonicalSmiles": "CC(C)CC(C(=O)C1=CC=CC=C1)N2CCCC2",
    "xLogP": 3.7,
    "cb1KiNm": 6,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent Branched-Chain Pyrrolidinophenone NDRI",
    "cb2Efficacy": "Isohexanophenone Isomer of α-PHP",
    "relativePotencyVsD9": 5,
    "psychoactive": true,
    "alkylChainLength": "Branched Isohexyl Pyrrolidinophenone",
    "cypEnzymes": [
      "CYP2D6"
    ],
    "primaryMetabolite": "OH-α-PiHP",
    "immunoassayCrossReactivityPct": 10,
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
      "cb1AffinityScore": 94,
      "euphoriaPotency": 88,
      "somaticSedation": 4,
      "anxiogenicRisk": 92,
      "durationPersistence": 40,
      "lipidRetention": 42
    },
    "summary": "Branched isohexanophenone positional isomer of alpha-PHP with high DAT selectivity.",
    "pharmacologyNotes": "Rapid onset and 4-hour half-life.",
    "specificHazards": [
      "High addiction and psychosis liability on multi-day binges."
    ],
    "sideEffects": [
      {
        "effect": "Sharp Dopaminergic Rush & Sympathomimetic Strain",
        "system": "Cardiovascular",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "Potent Branched-Chain Pyrrolidinophenone NDRI"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · alpha-PiHP",
      "source": "PubChem CID 118796295",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/118796295"
    }
  },
  {
    "id": "mdphp",
    "name": "MDPHP (3',4'-Methylenedioxy-α-pyrrolidinohexiophenone)",
    "shortName": "MDPHP",
    "synonyms": [
      "Monkey Dust",
      "Homo-MDPV"
    ],
    "classification": "Cathinone & Pyrrolidine",
    "riskTier": "Extreme",
    "pubchemCid": 71750078,
    "molecularFormula": "C17H23NO3",
    "molecularWeight": 289.37,
    "canonicalSmiles": "CCCCC(C(=O)C1=CC2=C(C=C1)OCO2)N3CCCC3",
    "xLogP": 3.6,
    "cb1KiNm": 5.5,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent Methylenedioxy Pyrrolidinophenone NDRI",
    "cb2Efficacy": "C6 Homolog of MDPV",
    "relativePotencyVsD9": 5,
    "psychoactive": true,
    "alkylChainLength": "Hexanophenone Homolog of MDPV",
    "cypEnzymes": [
      "CYP2D6"
    ],
    "primaryMetabolite": "Demethylenyl-MDPHP",
    "immunoassayCrossReactivityPct": 10,
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
      "cb1AffinityScore": 95,
      "euphoriaPotency": 88,
      "somaticSedation": 6,
      "anxiogenicRisk": 94,
      "durationPersistence": 48,
      "lipidRetention": 45
    },
    "summary": "Six-carbon chain homolog of MDPV (\"Monkey Dust\"). Potent nanomolar dopamine and norepinephrine reuptake blocker.",
    "pharmacologyNotes": "Hepatic demethylenation.",
    "specificHazards": [
      "Prolonged insomnia, paranoia, and hyperthermia on repeated dosing."
    ],
    "sideEffects": [
      {
        "effect": "Potent NDRI Stimulation, Tachycardia & Paranoia",
        "system": "Psychiatric",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "Potent Methylenedioxy Pyrrolidinophenone NDRI"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · MDPHP",
      "source": "PubChem CID 71750078",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/71750078"
    }
  },
  {
    "id": "mdpbp",
    "name": "MDPBP (3',4'-Methylenedioxy-α-pyrrolidinobutiophenone)",
    "shortName": "MDPBP",
    "synonyms": [
      "C4-MDPV"
    ],
    "classification": "Cathinone & Pyrrolidine",
    "riskTier": "High",
    "pubchemCid": 44361721,
    "molecularFormula": "C15H19NO3",
    "molecularWeight": 261.32,
    "canonicalSmiles": "CCC(C(=O)C1=CC2=C(C=C1)OCO2)N3CCCC3",
    "xLogP": 2.6,
    "cb1KiNm": 15,
    "cb2KiNm": 0,
    "cb1Efficacy": "Moderate-to-Potent Pyrrolidinophenone NDRI",
    "cb2Efficacy": "Butiophenone Homolog of MDPV",
    "relativePotencyVsD9": 3.5,
    "psychoactive": true,
    "alkylChainLength": "C4 Chain Homolog of MDPV",
    "cypEnzymes": [
      "CYP2D6"
    ],
    "primaryMetabolite": "Demethylenyl-MDPBP",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 3.5,
    "inhaledOnsetMinutes": [
      3,
      8
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
      3,
      5
    ],
    "baseOralThresholdMg": 5,
    "baseInhaledThresholdMg": 3,
    "radarProfile": {
      "cb1AffinityScore": 84,
      "euphoriaPotency": 80,
      "somaticSedation": 8,
      "anxiogenicRisk": 82,
      "durationPersistence": 34,
      "lipidRetention": 34
    },
    "summary": "Four-carbon chain butyrophenone lower homolog of MDPV (~3x less potent than MDPV).",
    "pharmacologyNotes": "Shorter duration than MDPV.",
    "specificHazards": [
      "Tachycardia, vasoconstriction, and compulsive redosing."
    ],
    "sideEffects": [
      {
        "effect": "NDRI Stimulation & Sympathomimetic Elevation",
        "system": "Cardiovascular",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Moderate-to-Potent Pyrrolidinophenone NDRI"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · MDPBP",
      "source": "PubChem CID 44361721",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/44361721"
    }
  },
  {
    "id": "alpha-pcyp",
    "name": "alpha-PCYP (α-Pyrrolidinocyclohexylphenone)",
    "shortName": "alpha-PCYP",
    "synonyms": [
      "Cyclohexyl-α-PVP"
    ],
    "classification": "Cathinone & Pyrrolidine",
    "riskTier": "Extreme",
    "pubchemCid": 145721912,
    "molecularFormula": "C17H23NO",
    "molecularWeight": 257.37,
    "canonicalSmiles": "C1CCC(CC1)C(C(=O)C2=CC=CC=C2)N3CCCC3",
    "xLogP": 4.1,
    "cb1KiNm": 4,
    "cb2KiNm": 0,
    "cb1Efficacy": "High-Affinity Cyclohexyl Pyrrolidinophenone NDRI (~2x α-PVP DAT Affinity)",
    "cb2Efficacy": "Sterically Bulky Pyrrolidinophenone",
    "relativePotencyVsD9": 5.5,
    "psychoactive": true,
    "alkylChainLength": "α-Cyclohexyl Pyrrolidinophenone",
    "cypEnzymes": [
      "CYP2D6"
    ],
    "primaryMetabolite": "Hydroxy-α-PCYP",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 5.5,
    "inhaledOnsetMinutes": [
      2,
      6
    ],
    "inhaledDurationHours": [
      2,
      4
    ],
    "oralOnsetMinutes": [
      20,
      40
    ],
    "oralDurationHours": [
      4,
      7
    ],
    "baseOralThresholdMg": 3,
    "baseInhaledThresholdMg": 2,
    "radarProfile": {
      "cb1AffinityScore": 96,
      "euphoriaPotency": 86,
      "somaticSedation": 4,
      "anxiogenicRisk": 92,
      "durationPersistence": 52,
      "lipidRetention": 48
    },
    "summary": "Cyclohexyl-substituted pyrrolidinophenone NDRI with roughly twice the in vitro DAT binding affinity of alpha-PVP.",
    "pharmacologyNotes": "High lipophilicity (xLogP 4.1) extends duration to 4–7 hours.",
    "specificHazards": [
      "Caustic when vaporized; severe vasoconstriction and insomnia."
    ],
    "sideEffects": [
      {
        "effect": "Long-Acting NDRI Stimulation & Vasoconstriction",
        "system": "Cardiovascular",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "High-Affinity Cyclohexyl Pyrrolidinophenone NDRI (~2x α-PVP DAT Affinity)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · alpha-PCYP",
      "source": "PubChem CID 145721912",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/145721912"
    }
  },
  {
    "id": "2-fa",
    "name": "2-FA (2-Fluoroamphetamine)",
    "shortName": "2-FA",
    "synonyms": [
      "ortho-Fluoroamphetamine"
    ],
    "classification": "Amphetamine & Fluorinated",
    "riskTier": "High",
    "pubchemCid": 12309026,
    "molecularFormula": "C9H12FN",
    "molecularWeight": 153.2,
    "canonicalSmiles": "CC(CC1=CC=CC=C1F)N",
    "xLogP": 1.9,
    "cb1KiNm": 22,
    "cb2KiNm": 0,
    "cb1Efficacy": "Selective Dopamine & Norepinephrine Releasing Agent (DAT/NET >> SERT)",
    "cb2Efficacy": "ortho-Fluorinated Amphetamine",
    "relativePotencyVsD9": 2.2,
    "psychoactive": true,
    "alkylChainLength": "2-Fluoro-α-methylphenethylamine",
    "cypEnzymes": [
      "CYP2D6"
    ],
    "primaryMetabolite": "4-Hydroxy-2-fluoroamphetamine",
    "immunoassayCrossReactivityPct": 75,
    "terminalHalfLifeHours": 4.5,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      2,
      3.5
    ],
    "oralOnsetMinutes": [
      20,
      40
    ],
    "oralDurationHours": [
      3.5,
      5.5
    ],
    "baseOralThresholdMg": 10,
    "baseInhaledThresholdMg": 5,
    "radarProfile": {
      "cb1AffinityScore": 80,
      "euphoriaPotency": 78,
      "somaticSedation": 6,
      "anxiogenicRisk": 58,
      "durationPersistence": 36,
      "lipidRetention": 24
    },
    "summary": "ortho-Fluorinated analog of amphetamine. Selective catecholamine (DA/NE) releaser with virtually zero serotonergic activity and a crisp, short 4-hour duration.",
    "pharmacologyNotes": "Cross-reacts on standard amphetamine urine screens.",
    "specificHazards": [
      "Hypertension, tachycardia, and nasal burn if insufflated."
    ],
    "sideEffects": [
      {
        "effect": "Crisp Functional Focus & Sympathomimetic Alertness",
        "system": "Cardiovascular",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Selective Dopamine & Norepinephrine Releasing Agent (DAT/NET >> SERT)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · 2-FA",
      "source": "PubChem CID 12309026",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/12309026"
    }
  },
  {
    "id": "3-fa",
    "name": "3-FA (3-Fluoroamphetamine)",
    "shortName": "3-FA",
    "synonyms": [
      "meta-Fluoroamphetamine"
    ],
    "classification": "Amphetamine & Fluorinated",
    "riskTier": "High",
    "pubchemCid": 12309027,
    "molecularFormula": "C9H12FN",
    "molecularWeight": 153.2,
    "canonicalSmiles": "CC(CC1=CC(=CC=C1)F)N",
    "xLogP": 1.9,
    "cb1KiNm": 16,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent Dopamine-Biased Releasing Agent (DAT > NET >> SERT)",
    "cb2Efficacy": "meta-Fluorinated Amphetamine",
    "relativePotencyVsD9": 2.6,
    "psychoactive": true,
    "alkylChainLength": "3-Fluoro-α-methylphenethylamine",
    "cypEnzymes": [
      "CYP2D6"
    ],
    "primaryMetabolite": "Hydroxy-3-FA",
    "immunoassayCrossReactivityPct": 75,
    "terminalHalfLifeHours": 5.5,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      3,
      4.5
    ],
    "oralOnsetMinutes": [
      20,
      40
    ],
    "oralDurationHours": [
      4.5,
      7
    ],
    "baseOralThresholdMg": 10,
    "baseInhaledThresholdMg": 5,
    "radarProfile": {
      "cb1AffinityScore": 85,
      "euphoriaPotency": 86,
      "somaticSedation": 8,
      "anxiogenicRisk": 64,
      "durationPersistence": 44,
      "lipidRetention": 26
    },
    "summary": "meta-Fluorinated amphetamine isomer exhibiting stronger dopamine releasing potency than 2-FA with mild serotonergic warmth.",
    "pharmacologyNotes": "Elimination half-life ~5.5 hours.",
    "specificHazards": [
      "Cardiovascular strain and compulsive redosing at high doses."
    ],
    "sideEffects": [
      {
        "effect": "Euphoric Dopaminergic Drive & Tachycardia",
        "system": "Cardiovascular",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Potent Dopamine-Biased Releasing Agent (DAT > NET >> SERT)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · 3-FA",
      "source": "PubChem CID 12309027",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/12309027"
    }
  },
  {
    "id": "4-fa",
    "name": "4-FA (4-Fluoroamphetamine · Flux)",
    "shortName": "4-FA",
    "synonyms": [
      "Flux",
      "PAL-303",
      "para-Fluoroamphetamine"
    ],
    "classification": "Amphetamine & Fluorinated",
    "riskTier": "High",
    "pubchemCid": 12202,
    "molecularFormula": "C9H12FN",
    "molecularWeight": 153.2,
    "canonicalSmiles": "CC(CC1=CC=C(C=C1)F)N",
    "xLogP": 1.9,
    "cb1KiNm": 20,
    "cb2KiNm": 0,
    "cb1Efficacy": "Dual-Phase Triple Releaser (Balanced SERT + DAT + NET Efflux)",
    "cb2Efficacy": "para-Fluorinated Empathogenic Amphetamine",
    "relativePotencyVsD9": 2,
    "psychoactive": true,
    "alkylChainLength": "4-Fluoro-α-methylphenethylamine",
    "cypEnzymes": [
      "CYP2D6"
    ],
    "primaryMetabolite": "Unchanged 4-FA (C4-Fluorine blocks para-hydroxylation)",
    "immunoassayCrossReactivityPct": 80,
    "terminalHalfLifeHours": 8,
    "inhaledOnsetMinutes": [
      10,
      20
    ],
    "inhaledDurationHours": [
      4,
      6
    ],
    "oralOnsetMinutes": [
      30,
      50
    ],
    "oralDurationHours": [
      6,
      9
    ],
    "baseOralThresholdMg": 25,
    "baseInhaledThresholdMg": 15,
    "radarProfile": {
      "cb1AffinityScore": 84,
      "euphoriaPotency": 90,
      "somaticSedation": 18,
      "anxiogenicRisk": 52,
      "durationPersistence": 58,
      "lipidRetention": 28
    },
    "summary": "para-Fluorinated amphetamine (\"Flux\") famous for a two-stage subjective profile: a 3-hour warm serotonergic roll (\"MDMA-lite\") followed by 4 hours of clean dopaminergic stimulation.",
    "pharmacologyNotes": "Because fluorine blocks para-hydroxylation, 4-FA is excreted largely unchanged.",
    "specificHazards": [
      "SEVERE CEREBROVASCULAR HEADACHE RISK: High doses (>150 mg) have caused acute thunderclap headaches and hemorrhagic stroke from sudden blood pressure spikes."
    ],
    "sideEffects": [
      {
        "effect": "Warm Two-Stage Empathogenic Roll & Blood Pressure Elevation",
        "system": "Cardiovascular",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Dual-Phase Triple Releaser (Balanced SERT + DAT + NET Efflux)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · 4-FA",
      "source": "PubChem CID 12202",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/12202"
    }
  },
  {
    "id": "2-fma",
    "name": "2-FMA (2-Fluoromethamphetamine)",
    "shortName": "2-FMA",
    "synonyms": [
      "ortho-Fluoromethamphetamine"
    ],
    "classification": "Amphetamine & Fluorinated",
    "riskTier": "High",
    "pubchemCid": 2799391,
    "molecularFormula": "C10H14FN",
    "molecularWeight": 167.22,
    "canonicalSmiles": "CC(CC1=CC=CC=C1F)NC",
    "xLogP": 2.3,
    "cb1KiNm": 18,
    "cb2KiNm": 0,
    "cb1Efficacy": "Selective Catecholamine Releaser (Long-Acting Functional DAT/NET Agonist)",
    "cb2Efficacy": "ortho-Fluorinated Methamphetamine",
    "relativePotencyVsD9": 2.5,
    "psychoactive": true,
    "alkylChainLength": "2-Fluoro-N-methylamphetamine",
    "cypEnzymes": [
      "CYP2D6"
    ],
    "primaryMetabolite": "2-FA & 4-Hydroxy-2-FMA",
    "immunoassayCrossReactivityPct": 85,
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
      25,
      45
    ],
    "oralDurationHours": [
      6,
      9
    ],
    "baseOralThresholdMg": 5,
    "baseInhaledThresholdMg": 3,
    "radarProfile": {
      "cb1AffinityScore": 82,
      "euphoriaPotency": 72,
      "somaticSedation": 6,
      "anxiogenicRisk": 56,
      "durationPersistence": 62,
      "lipidRetention": 28
    },
    "summary": "ortho-Fluorinated analog of methamphetamine. Paradoxically lacks methamphetamine’s chaotic euphoria rush, acting instead as a remarkably smooth, 7–9 hour functional focus aid.",
    "pharmacologyNotes": "N-demethylated via CYP2D6 to active 2-FA.",
    "specificHazards": [
      "Long duration causes insomnia if dosed late; cardiovascular strain at high doses."
    ],
    "sideEffects": [
      {
        "effect": "Smooth 8-Hour Functional Focus & Appetite Suppression",
        "system": "Cardiovascular",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Selective Catecholamine Releaser (Long-Acting Functional DAT/NET Agonist)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · 2-FMA",
      "source": "PubChem CID 2799391",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/2799391"
    }
  },
  {
    "id": "3-fma",
    "name": "3-FMA (3-Fluoromethamphetamine)",
    "shortName": "3-FMA",
    "synonyms": [
      "meta-Fluoromethamphetamine"
    ],
    "classification": "Amphetamine & Fluorinated",
    "riskTier": "High",
    "pubchemCid": 12937721,
    "molecularFormula": "C10H14FN",
    "molecularWeight": 167.22,
    "canonicalSmiles": "CC(CC1=CC(=CC=C1)F)NC",
    "xLogP": 2.3,
    "cb1KiNm": 14,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent Dopamine/Norepinephrine Releaser with Moderate SERT Activity",
    "cb2Efficacy": "meta-Fluorinated Methamphetamine",
    "relativePotencyVsD9": 2.8,
    "psychoactive": true,
    "alkylChainLength": "3-Fluoro-N-methylamphetamine",
    "cypEnzymes": [
      "CYP2D6"
    ],
    "primaryMetabolite": "3-FA",
    "immunoassayCrossReactivityPct": 85,
    "terminalHalfLifeHours": 8.5,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      5,
      8
    ],
    "oralOnsetMinutes": [
      25,
      45
    ],
    "oralDurationHours": [
      7,
      11
    ],
    "baseOralThresholdMg": 5,
    "baseInhaledThresholdMg": 3,
    "radarProfile": {
      "cb1AffinityScore": 88,
      "euphoriaPotency": 88,
      "somaticSedation": 8,
      "anxiogenicRisk": 70,
      "durationPersistence": 68,
      "lipidRetention": 30
    },
    "summary": "meta-Fluorinated methamphetamine analog combining strong dopaminergic euphoria with a long 8–11 hour duration.",
    "pharmacologyNotes": "Metabolized to active 3-FA.",
    "specificHazards": [
      "Prolonged residual stimulation and insomnia."
    ],
    "sideEffects": [
      {
        "effect": "Long-Lasting Dopaminergic Euphoria & Tachycardia",
        "system": "Cardiovascular",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Potent Dopamine/Norepinephrine Releaser with Moderate SERT Activity"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · 3-FMA",
      "source": "PubChem CID 12937721",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/12937721"
    }
  },
  {
    "id": "4-fma",
    "name": "4-FMA (4-Fluoromethamphetamine)",
    "shortName": "4-FMA",
    "synonyms": [
      "para-Fluoromethamphetamine"
    ],
    "classification": "Amphetamine & Fluorinated",
    "riskTier": "High",
    "pubchemCid": 11529504,
    "molecularFormula": "C10H14FN",
    "molecularWeight": 167.22,
    "canonicalSmiles": "CC(CC1=CC=C(C=C1)F)NC",
    "xLogP": 2.3,
    "cb1KiNm": 16,
    "cb2KiNm": 0,
    "cb1Efficacy": "Heavy Triple Monoamine Releasing Agent (Strong SERT + DAT + NET)",
    "cb2Efficacy": "para-Fluorinated Methamphetamine",
    "relativePotencyVsD9": 2.4,
    "psychoactive": true,
    "alkylChainLength": "4-Fluoro-N-methylamphetamine",
    "cypEnzymes": [
      "CYP2D6"
    ],
    "primaryMetabolite": "4-FA",
    "immunoassayCrossReactivityPct": 85,
    "terminalHalfLifeHours": 9,
    "inhaledOnsetMinutes": [
      10,
      20
    ],
    "inhaledDurationHours": [
      5,
      7
    ],
    "oralOnsetMinutes": [
      25,
      50
    ],
    "oralDurationHours": [
      6,
      9
    ],
    "baseOralThresholdMg": 15,
    "baseInhaledThresholdMg": 10,
    "radarProfile": {
      "cb1AffinityScore": 86,
      "euphoriaPotency": 90,
      "somaticSedation": 20,
      "anxiogenicRisk": 64,
      "durationPersistence": 62,
      "lipidRetention": 32
    },
    "summary": "N-methylated homolog of 4-FA. Releases heavy amounts of serotonin alongside dopamine and norepinephrine for 6–9 hours.",
    "pharmacologyNotes": " Partially N-demethylated to 4-FA.",
    "specificHazards": [
      "High hyperthermia, bruxism, and serotonergic depletion risk."
    ],
    "sideEffects": [
      {
        "effect": "Heavy Serotonergic/Dopaminergic Rush, Sweating & Jaw Clenching",
        "system": "Cardiovascular",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Heavy Triple Monoamine Releasing Agent (Strong SERT + DAT + NET)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · 4-FMA",
      "source": "PubChem CID 11529504",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/11529504"
    }
  },
  {
    "id": "2-fea",
    "name": "2-FEA (2-Fluoroethamphetamine)",
    "shortName": "2-FEA",
    "synonyms": [
      "N-Ethyl-2-fluoroamphetamine"
    ],
    "classification": "Amphetamine & Fluorinated",
    "riskTier": "High",
    "pubchemCid": 56603647,
    "molecularFormula": "C11H16FN",
    "molecularWeight": 181.25,
    "canonicalSmiles": "CCNC(C)CC1=CC=CC=C1F",
    "xLogP": 2.7,
    "cb1KiNm": 26,
    "cb2KiNm": 0,
    "cb1Efficacy": "Selective Dopamine & Norepinephrine Releaser",
    "cb2Efficacy": "ortho-Fluoro-N-ethylamphetamine",
    "relativePotencyVsD9": 1.8,
    "psychoactive": true,
    "alkylChainLength": "2-Fluoro-N-ethylamphetamine",
    "cypEnzymes": [
      "CYP2D6"
    ],
    "primaryMetabolite": "2-FA",
    "immunoassayCrossReactivityPct": 65,
    "terminalHalfLifeHours": 5,
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
      4,
      6
    ],
    "baseOralThresholdMg": 15,
    "baseInhaledThresholdMg": 10,
    "radarProfile": {
      "cb1AffinityScore": 76,
      "euphoriaPotency": 74,
      "somaticSedation": 8,
      "anxiogenicRisk": 58,
      "durationPersistence": 38,
      "lipidRetention": 26
    },
    "summary": "N-ethylated analog of 2-FA providing smooth catecholamine stimulation over 4–6 hours.",
    "pharmacologyNotes": "De-ethylated via CYP2D6/3A4 to 2-FA.",
    "specificHazards": [
      "Tachycardia and vasoconstriction."
    ],
    "sideEffects": [
      {
        "effect": "Clean Catecholamine Stimulation",
        "system": "Cardiovascular",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Selective Dopamine & Norepinephrine Releaser"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · 2-FEA",
      "source": "PubChem CID 56603647",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/56603647"
    }
  },
  {
    "id": "3-fea",
    "name": "3-FEA (3-Fluoroethamphetamine)",
    "shortName": "3-FEA",
    "synonyms": [
      "N-Ethyl-3-fluoroamphetamine"
    ],
    "classification": "Amphetamine & Fluorinated",
    "riskTier": "High",
    "pubchemCid": 56603648,
    "molecularFormula": "C11H16FN",
    "molecularWeight": 181.25,
    "canonicalSmiles": "CCNC(C)CC1=CC(=CC=C1)F",
    "xLogP": 2.7,
    "cb1KiNm": 20,
    "cb2KiNm": 0,
    "cb1Efficacy": "Serotonin-Biased Triple Monoamine Releaser (SERT > DAT > NET)",
    "cb2Efficacy": "meta-Fluoro-N-ethylamphetamine",
    "relativePotencyVsD9": 2,
    "psychoactive": true,
    "alkylChainLength": "3-Fluoro-N-ethylamphetamine",
    "cypEnzymes": [
      "CYP2D6"
    ],
    "primaryMetabolite": "3-FA",
    "immunoassayCrossReactivityPct": 65,
    "terminalHalfLifeHours": 6,
    "inhaledOnsetMinutes": [
      10,
      20
    ],
    "inhaledDurationHours": [
      3,
      5
    ],
    "oralOnsetMinutes": [
      25,
      45
    ],
    "oralDurationHours": [
      4.5,
      7
    ],
    "baseOralThresholdMg": 15,
    "baseInhaledThresholdMg": 10,
    "radarProfile": {
      "cb1AffinityScore": 80,
      "euphoriaPotency": 84,
      "somaticSedation": 42,
      "anxiogenicRisk": 44,
      "durationPersistence": 44,
      "lipidRetention": 28
    },
    "summary": "N-ethylated analog of 3-FA. Adding the N-ethyl group shifts selectivity strongly toward serotonin release, creating a warm, sedating, entactogenic experience.",
    "pharmacologyNotes": "De-ethylates partially to active 3-FA.",
    "specificHazards": [
      "Serotonin syndrome risk with other serotonergics."
    ],
    "sideEffects": [
      {
        "effect": "Warm Serotonergic Roll & Relaxed Euphoria",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Serotonin-Biased Triple Monoamine Releaser (SERT > DAT > NET)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · 3-FEA",
      "source": "PubChem CID 56603648",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/56603648"
    }
  },
  {
    "id": "4-fea",
    "name": "4-FEA (4-Fluoroethamphetamine)",
    "shortName": "4-FEA",
    "synonyms": [
      "N-Ethyl-4-fluoroamphetamine"
    ],
    "classification": "Amphetamine & Fluorinated",
    "riskTier": "High",
    "pubchemCid": 12937722,
    "molecularFormula": "C11H16FN",
    "molecularWeight": 181.25,
    "canonicalSmiles": "CCNC(C)CC1=CC=C(C=C1)F",
    "xLogP": 2.7,
    "cb1KiNm": 25,
    "cb2KiNm": 0,
    "cb1Efficacy": "Predominantly Serotonergic Releasing Agent (SERT >> DAT)",
    "cb2Efficacy": "para-Fluoro-N-ethylamphetamine",
    "relativePotencyVsD9": 1.6,
    "psychoactive": true,
    "alkylChainLength": "4-Fluoro-N-ethylamphetamine",
    "cypEnzymes": [
      "CYP2D6"
    ],
    "primaryMetabolite": "4-FA",
    "immunoassayCrossReactivityPct": 65,
    "terminalHalfLifeHours": 6.5,
    "inhaledOnsetMinutes": [
      10,
      20
    ],
    "inhaledDurationHours": [
      3,
      5
    ],
    "oralOnsetMinutes": [
      25,
      50
    ],
    "oralDurationHours": [
      4.5,
      7
    ],
    "baseOralThresholdMg": 20,
    "baseInhaledThresholdMg": 15,
    "radarProfile": {
      "cb1AffinityScore": 76,
      "euphoriaPotency": 78,
      "somaticSedation": 58,
      "anxiogenicRisk": 38,
      "durationPersistence": 44,
      "lipidRetention": 28
    },
    "summary": "N-ethyl homolog of 4-FA with heavily serotonergic, almost sedating entactogenic properties.",
    "pharmacologyNotes": "Partially de-ethylated to 4-FA.",
    "specificHazards": [
      "Serotonergic toxicity if combined with MAOIs."
    ],
    "sideEffects": [
      {
        "effect": "Heavy Serotonergic Drowsiness & Warmth",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Predominantly Serotonergic Releasing Agent (SERT >> DAT)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · 4-FEA",
      "source": "PubChem CID 12937722",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/12937722"
    }
  },
  {
    "id": "pma",
    "name": "PMA (para-Methoxyamphetamine · 4-MA)",
    "shortName": "PMA",
    "synonyms": [
      "Death",
      "Dr. Death",
      "4-Methoxyamphetamine",
      "Chicken Yellow"
    ],
    "classification": "Amphetamine & Fluorinated",
    "riskTier": "Extreme",
    "pubchemCid": 4894,
    "molecularFormula": "C10H15NO",
    "molecularWeight": 165.23,
    "canonicalSmiles": "CC(CC1=CC=C(C=C1)OC)N",
    "xLogP": 1.8,
    "cb1KiNm": 35,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent Selective SERT Releaser + Reversible MAO-A Inhibitor (Lethal Hyperthermia)",
    "cb2Efficacy": "Toxic para-Methoxyphenethylamine",
    "relativePotencyVsD9": 2,
    "psychoactive": true,
    "alkylChainLength": "4-Methoxy-α-methylphenethylamine",
    "cypEnzymes": [
      "CYP2D6 (Polymorphic O-demethylation)"
    ],
    "primaryMetabolite": "4-Hydroxyamphetamine",
    "immunoassayCrossReactivityPct": 75,
    "terminalHalfLifeHours": 6,
    "inhaledOnsetMinutes": [
      20,
      40
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
    "baseOralThresholdMg": 15,
    "baseInhaledThresholdMg": 10,
    "radarProfile": {
      "cb1AffinityScore": 78,
      "euphoriaPotency": 42,
      "somaticSedation": 28,
      "anxiogenicRisk": 96,
      "durationPersistence": 48,
      "lipidRetention": 26
    },
    "summary": "Lethal adulterant sold as counterfeit MDMA (\"Death\"). Combines potent serotonin release with simultaneous MAO-A inhibition and delayed 60–90 min onset.",
    "pharmacologyNotes": "Metabolized strictly via CYP2D6 O-demethylation; CYP2D6 poor metabolizers accumulate toxic levels.",
    "specificHazards": [
      "EXTREME LETHAL HYPERTHERMIA: Delayed onset tricks users into taking a second pill, triggering fatal serotonin syndrome and core temperatures >42°C at doses as low as 50–80 mg."
    ],
    "sideEffects": [
      {
        "effect": "Fatal Hyperthermia (>41°C), Serotonin Syndrome & Hypertensive Crisis",
        "system": "Autonomic",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "Potent Selective SERT Releaser + Reversible MAO-A Inhibitor (Lethal Hyperthermia)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · PMA",
      "source": "PubChem CID 4894",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/4894"
    }
  },
  {
    "id": "pmma",
    "name": "PMMA (para-Methoxymethamphetamine)",
    "shortName": "PMMA",
    "synonyms": [
      "4-MMA",
      "Methyl-MA",
      "N-Methyl-PMA"
    ],
    "classification": "Amphetamine & Fluorinated",
    "riskTier": "Extreme",
    "pubchemCid": 91753,
    "molecularFormula": "C11H17NO",
    "molecularWeight": 179.26,
    "canonicalSmiles": "CC(CC1=CC=C(C=C1)OC)NC",
    "xLogP": 2.2,
    "cb1KiNm": 30,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent Serotonin Releaser + MAO-A Inhibitor",
    "cb2Efficacy": "N-Methylated PMA",
    "relativePotencyVsD9": 2,
    "psychoactive": true,
    "alkylChainLength": "4-Methoxy-N-methylamphetamine",
    "cypEnzymes": [
      "CYP2D6"
    ],
    "primaryMetabolite": "PMA & 4-Hydroxymethamphetamine",
    "immunoassayCrossReactivityPct": 75,
    "terminalHalfLifeHours": 6.5,
    "inhaledOnsetMinutes": [
      20,
      40
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
    "baseOralThresholdMg": 15,
    "baseInhaledThresholdMg": 10,
    "radarProfile": {
      "cb1AffinityScore": 78,
      "euphoriaPotency": 45,
      "somaticSedation": 28,
      "anxiogenicRisk": 96,
      "durationPersistence": 50,
      "lipidRetention": 28
    },
    "summary": "N-methylated homolog of PMA that is N-demethylated into active PMA in vivo. Shares PMA’s narrow margin between active dose and fatal hyperthermic serotonin syndrome.",
    "pharmacologyNotes": "CYP2D6-dependent clearance.",
    "specificHazards": [
      "EXTREME HYPERTHERMIA & SEROTONIN SYNDROME HAZARD: Never consume tablets testing positive for PMMA/PMA."
    ],
    "sideEffects": [
      {
        "effect": "Life-Threatening Hyperthermia, Rigidity & Serotonin Toxicity",
        "system": "Autonomic",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "Potent Serotonin Releaser + MAO-A Inhibitor"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · PMMA",
      "source": "PubChem CID 91753",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/91753"
    }
  },
  {
    "id": "4-ma",
    "name": "4-MA (4-Methylamphetamine · PAL-313)",
    "shortName": "4-MA",
    "synonyms": [
      "PAL-313",
      "para-Methylamphetamine",
      "Aptrol"
    ],
    "classification": "Amphetamine & Fluorinated",
    "riskTier": "Extreme",
    "pubchemCid": 12553,
    "molecularFormula": "C10H15N",
    "molecularWeight": 149.23,
    "canonicalSmiles": "CC1=CC=C(C=C1)CC(C)N",
    "xLogP": 2.4,
    "cb1KiNm": 22,
    "cb2KiNm": 0,
    "cb1Efficacy": "Non-Selective Triple Releaser (Equipotent SERT / DAT / NET) + MAO-A Inhibitor",
    "cb2Efficacy": "para-Methyl Amphetamine",
    "relativePotencyVsD9": 2.2,
    "psychoactive": true,
    "alkylChainLength": "4-Methyl-α-methylphenethylamine",
    "cypEnzymes": [
      "CYP2D6"
    ],
    "primaryMetabolite": "4-Hydroxymethylamphetamine",
    "immunoassayCrossReactivityPct": 75,
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
      30,
      60
    ],
    "oralDurationHours": [
      6,
      9
    ],
    "baseOralThresholdMg": 15,
    "baseInhaledThresholdMg": 10,
    "radarProfile": {
      "cb1AffinityScore": 82,
      "euphoriaPotency": 68,
      "somaticSedation": 20,
      "anxiogenicRisk": 92,
      "durationPersistence": 55,
      "lipidRetention": 30
    },
    "summary": "para-Methylated analog of amphetamine (\"Speed paste adulterant\"). Unlike amphetamine, 4-MA releases massive serotonin alongside inhibits MAO-A, causing fatal hyperthermia.",
    "pharmacologyNotes": "Slow hepatic clearance.",
    "specificHazards": [
      "Contaminated European speed batches caused numerous fatal hyperthermic overdoses."
    ],
    "sideEffects": [
      {
        "effect": "Severe Hyperthermia, Serotonin Toxicity & Hypertension",
        "system": "Autonomic",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "Non-Selective Triple Releaser (Equipotent SERT / DAT / NET) + MAO-A Inhibitor"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · 4-MA",
      "source": "PubChem CID 12553",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/12553"
    }
  },
  {
    "id": "4-mta",
    "name": "4-MTA (4-Methylthioamphetamine · Flatliners)",
    "shortName": "4-MTA",
    "synonyms": [
      "Flatliners",
      "para-Methylthioamphetamine",
      "S41"
    ],
    "classification": "Amphetamine & Fluorinated",
    "riskTier": "Extreme",
    "pubchemCid": 124441,
    "molecularFormula": "C10H15NS",
    "molecularWeight": 181.3,
    "canonicalSmiles": "CC(CC1=CC=C(C=C1)SC)N",
    "xLogP": 2.6,
    "cb1KiNm": 18,
    "cb2KiNm": 0,
    "cb1Efficacy": "Ultra-Selective Serotonin Releaser + Potent Reversible MAO-A Inhibitor (IC50 ~0.25 µM)",
    "cb2Efficacy": "para-Methylthio Amphetamine",
    "relativePotencyVsD9": 2,
    "psychoactive": true,
    "alkylChainLength": "4-Methylthio-α-methylphenethylamine",
    "cypEnzymes": [
      "CYP2D6"
    ],
    "primaryMetabolite": "4-Methylsulfinylamphetamine",
    "immunoassayCrossReactivityPct": 60,
    "terminalHalfLifeHours": 7.5,
    "inhaledOnsetMinutes": [
      20,
      40
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
      9
    ],
    "baseOralThresholdMg": 15,
    "baseInhaledThresholdMg": 10,
    "radarProfile": {
      "cb1AffinityScore": 84,
      "euphoriaPotency": 50,
      "somaticSedation": 35,
      "anxiogenicRisk": 98,
      "durationPersistence": 58,
      "lipidRetention": 34
    },
    "summary": "para-Methylthio derivative of amphetamine (\"Flatliners\") synthesized by David Nichols as a laboratory SERT probe and never intended for human consumption due to potent MAO-A inhibition.",
    "pharmacologyNotes": "Blocks MAO-A while dumping synaptic serotonin.",
    "specificHazards": [
      "EXTREME SEROTONIN SYNDROME HAZARD: Single-agent 4-MTA can trigger lethal serotonin syndrome, hyperpyrexia, and multiorgan failure."
    ],
    "sideEffects": [
      {
        "effect": "Lethal Serotonin Syndrome, Hyperpyrexia & Diaphoresis",
        "system": "Autonomic",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "Ultra-Selective Serotonin Releaser + Potent Reversible MAO-A Inhibitor (IC50 ~0.25 µM)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · 4-MTA",
      "source": "PubChem CID 124441",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/124441"
    }
  },
  {
    "id": "bzp",
    "name": "BZP (N-Benzylpiperazine)",
    "shortName": "BZP",
    "synonyms": [
      "1-Benzylpiperazine",
      "A2",
      "Party Pills"
    ],
    "classification": "Tropane & Piperazine",
    "riskTier": "High",
    "pubchemCid": 13653,
    "molecularFormula": "C11H16N2",
    "molecularWeight": 176.26,
    "canonicalSmiles": "C1CN(CCN1)CC2=CC=CC=C2",
    "xLogP": 1.3,
    "cb1KiNm": 45,
    "cb2KiNm": 0,
    "cb1Efficacy": "Dopamine & Norepinephrine Releasing Agent (1/10th d-Amphetamine Potency)",
    "cb2Efficacy": "Benzylpiperazine Stimulant",
    "relativePotencyVsD9": 1.2,
    "psychoactive": true,
    "alkylChainLength": "N-Benzylpiperazine",
    "cypEnzymes": [
      "CYP2D6",
      "COMT"
    ],
    "primaryMetabolite": "4-Hydroxy-BZP & 3-Hydroxy-BZP",
    "immunoassayCrossReactivityPct": 15,
    "terminalHalfLifeHours": 5.5,
    "inhaledOnsetMinutes": [
      15,
      30
    ],
    "inhaledDurationHours": [
      3,
      5
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      5,
      8
    ],
    "baseOralThresholdMg": 30,
    "baseInhaledThresholdMg": 20,
    "radarProfile": {
      "cb1AffinityScore": 68,
      "euphoriaPotency": 66,
      "somaticSedation": 10,
      "anxiogenicRisk": 76,
      "durationPersistence": 46,
      "lipidRetention": 18
    },
    "summary": "Piperazine psychostimulant formerly sold in New Zealand \"party pills\". Releases dopamine and norepinephrine at ~10% the potency of dextroamphetamine with pronounced peripheral sympathomimetic effects.",
    "pharmacologyNotes": "Excreted renally and via CYP2D6.",
    "specificHazards": [
      "High incidence of pounding migraines, nausea, tachycardia, and insomnia during the comedown."
    ],
    "sideEffects": [
      {
        "effect": "Tachycardia, Jittery Stimulation & Post-Dose Migraine",
        "system": "Cardiovascular",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Dopamine & Norepinephrine Releasing Agent (1/10th d-Amphetamine Potency)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · BZP",
      "source": "PubChem CID 13653",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/13653"
    }
  },
  {
    "id": "tfmpp",
    "name": "TFMPP (3-Trifluoromethylphenylpiperazine)",
    "shortName": "TFMPP",
    "synonyms": [
      "1-(3-Trifluoromethylphenyl)piperazine"
    ],
    "classification": "Tropane & Piperazine",
    "riskTier": "High",
    "pubchemCid": 4100,
    "molecularFormula": "C11H13F3N2",
    "molecularWeight": 230.23,
    "canonicalSmiles": "C1CN(CCN1)C2=CC=CC(=C2)C(F)(F)F",
    "xLogP": 2.4,
    "cb1KiNm": 38,
    "cb2KiNm": 0,
    "cb1Efficacy": "Non-Selective 5-HT1B/1D/2A/2C Agonist & SERT Releaser",
    "cb2Efficacy": "Serotonergic Phenylpiperazine",
    "relativePotencyVsD9": 1.3,
    "psychoactive": true,
    "alkylChainLength": "meta-Trifluoromethyl-phenylpiperazine",
    "cypEnzymes": [
      "CYP2D6",
      "CYP1A2",
      "CYP3A4"
    ],
    "primaryMetabolite": "4-Hydroxy-TFMPP",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 6,
    "inhaledOnsetMinutes": [
      20,
      40
    ],
    "inhaledDurationHours": [
      3,
      5
    ],
    "oralOnsetMinutes": [
      40,
      75
    ],
    "oralDurationHours": [
      5,
      8
    ],
    "baseOralThresholdMg": 15,
    "baseInhaledThresholdMg": 10,
    "radarProfile": {
      "cb1AffinityScore": 66,
      "euphoriaPotency": 58,
      "somaticSedation": 30,
      "anxiogenicRisk": 78,
      "durationPersistence": 48,
      "lipidRetention": 28
    },
    "summary": "Serotonergic phenylpiperazine frequently combined with BZP to mimic MDMA. Activates 5-HT2C and 5-HT1B receptors while releasing serotonin.",
    "pharmacologyNotes": "Inhibits CYP2D6 metabolism of co-administered BZP.",
    "specificHazards": [
      "Causes pronounced nausea, body temperature fluctuations, and migraine headaches."
    ],
    "sideEffects": [
      {
        "effect": "Nausea, Shivering, Visual Shimmer & Migraine",
        "system": "Gastrointestinal",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Non-Selective 5-HT1B/1D/2A/2C Agonist & SERT Releaser"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · TFMPP",
      "source": "PubChem CID 4100",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/4100"
    }
  },
  {
    "id": "mcpp",
    "name": "mCPP (meta-Chlorophenylpiperazine)",
    "shortName": "mCPP",
    "synonyms": [
      "1-(3-Chlorophenyl)piperazine"
    ],
    "classification": "Tropane & Piperazine",
    "riskTier": "High",
    "pubchemCid": 1355,
    "molecularFormula": "C10H13ClN2",
    "molecularWeight": 196.68,
    "canonicalSmiles": "C1CN(CCN1)C2=CC(=CC=C2)Cl",
    "xLogP": 2.1,
    "cb1KiNm": 32,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent 5-HT2C / 5-HT1B Agonist & SERT Releaser (Active Trazodone Metabolite)",
    "cb2Efficacy": "Anxiogenic Serotonergic Piperazine",
    "relativePotencyVsD9": 1.2,
    "psychoactive": true,
    "alkylChainLength": "3-Chlorophenylpiperazine",
    "cypEnzymes": [
      "CYP2D6"
    ],
    "primaryMetabolite": "p-Hydroxy-mCPP",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 4.5,
    "inhaledOnsetMinutes": [
      20,
      40
    ],
    "inhaledDurationHours": [
      3,
      5
    ],
    "oralOnsetMinutes": [
      40,
      75
    ],
    "oralDurationHours": [
      4,
      7
    ],
    "baseOralThresholdMg": 10,
    "baseInhaledThresholdMg": 10,
    "radarProfile": {
      "cb1AffinityScore": 64,
      "euphoriaPotency": 30,
      "somaticSedation": 35,
      "anxiogenicRisk": 92,
      "durationPersistence": 42,
      "lipidRetention": 24
    },
    "summary": "Active hepatic metabolite of the antidepressant trazodone and notorious ecstasy adulterant. Strong 5-HT2C agonism frequently induces panic, nausea, dizziness, and severe migraines.",
    "pharmacologyNotes": "Metabolized exclusively via CYP2D6.",
    "specificHazards": [
      "Used clinically as a panic/migraine challenge agent—recreationally unpleasant at high doses."
    ],
    "sideEffects": [
      {
        "effect": "5-HT2C-Mediated Anxiety, Dizziness, Nausea & Severe Migraine",
        "system": "Psychiatric",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Potent 5-HT2C / 5-HT1B Agonist & SERT Releaser (Active Trazodone Metabolite)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · mCPP",
      "source": "PubChem CID 1355",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/1355"
    }
  },
  {
    "id": "meopp",
    "name": "MeOPP (para-Methoxyphenylpiperazine)",
    "shortName": "MeOPP",
    "synonyms": [
      "1-(4-Methoxyphenyl)piperazine",
      "pMeOPP"
    ],
    "classification": "Tropane & Piperazine",
    "riskTier": "Moderate",
    "pubchemCid": 77965,
    "molecularFormula": "C11H16N2O",
    "molecularWeight": 192.26,
    "canonicalSmiles": "COC1=CC=C(C=C1)N2CCNCC2",
    "xLogP": 1.3,
    "cb1KiNm": 50,
    "cb2KiNm": 0,
    "cb1Efficacy": "Serotonin Reuptake Inhibitor & 5-HT1A Agonist",
    "cb2Efficacy": "para-Methoxyphenylpiperazine",
    "relativePotencyVsD9": 1.1,
    "psychoactive": true,
    "alkylChainLength": "4-Methoxyphenylpiperazine",
    "cypEnzymes": [
      "CYP2D6"
    ],
    "primaryMetabolite": "4-Hydroxyphenylpiperazine",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 5,
    "inhaledOnsetMinutes": [
      20,
      40
    ],
    "inhaledDurationHours": [
      3,
      4
    ],
    "oralOnsetMinutes": [
      40,
      70
    ],
    "oralDurationHours": [
      4,
      6
    ],
    "baseOralThresholdMg": 40,
    "baseInhaledThresholdMg": 30,
    "radarProfile": {
      "cb1AffinityScore": 60,
      "euphoriaPotency": 64,
      "somaticSedation": 35,
      "anxiogenicRisk": 48,
      "durationPersistence": 38,
      "lipidRetention": 20
    },
    "summary": "Mildest and least anxiogenic of the phenylpiperazines due to 5-HT1A receptor agonism.",
    "pharmacologyNotes": "O-demethylated via CYP2D6.",
    "specificHazards": [
      "Headache and nausea at high doses."
    ],
    "sideEffects": [
      {
        "effect": "Mild Serotonergic Relaxation & Warmth",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Serotonin Reuptake Inhibitor & 5-HT1A Agonist"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · MeOPP",
      "source": "PubChem CID 77965",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/77965"
    }
  },
  {
    "id": "pfpp",
    "name": "pFPP (4-Fluorophenylpiperazine)",
    "shortName": "pFPP",
    "synonyms": [
      "1-(4-Fluorophenyl)piperazine",
      "Flipper"
    ],
    "classification": "Tropane & Piperazine",
    "riskTier": "Moderate",
    "pubchemCid": 75249,
    "molecularFormula": "C10H13FN2",
    "molecularWeight": 180.22,
    "canonicalSmiles": "C1CN(CCN1)C2=CC=C(C=C2)F",
    "xLogP": 1.6,
    "cb1KiNm": 42,
    "cb2KiNm": 0,
    "cb1Efficacy": "Serotonergic 5-HT1A/2A/2C Modulator & Mild SERT Releaser",
    "cb2Efficacy": "para-Fluorophenylpiperazine",
    "relativePotencyVsD9": 1.2,
    "psychoactive": true,
    "alkylChainLength": "4-Fluorophenylpiperazine",
    "cypEnzymes": [
      "CYP2D6"
    ],
    "primaryMetabolite": "Hydroxy-pFPP",
    "immunoassayCrossReactivityPct": 10,
    "terminalHalfLifeHours": 5,
    "inhaledOnsetMinutes": [
      20,
      40
    ],
    "inhaledDurationHours": [
      3,
      4.5
    ],
    "oralOnsetMinutes": [
      40,
      70
    ],
    "oralDurationHours": [
      4,
      6
    ],
    "baseOralThresholdMg": 25,
    "baseInhaledThresholdMg": 20,
    "radarProfile": {
      "cb1AffinityScore": 64,
      "euphoriaPotency": 65,
      "somaticSedation": 32,
      "anxiogenicRisk": 54,
      "durationPersistence": 38,
      "lipidRetention": 22
    },
    "summary": "para-Fluorinated phenylpiperazine producing mild entactogenic and color-brightening effects.",
    "pharmacologyNotes": "Hepatic oxidation.",
    "specificHazards": [
      "Migraines and nausea at high doses."
    ],
    "sideEffects": [
      {
        "effect": "Dreamy Serotonergic Buzz & Visual Brightening",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Serotonergic 5-HT1A/2A/2C Modulator & Mild SERT Releaser"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · pFPP",
      "source": "PubChem CID 75249",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/75249"
    }
  },
  {
    "id": "dexmethylphenidate",
    "name": "Dexmethylphenidate (Focalin · d-threo-Methylphenidate)",
    "shortName": "Dexmethylphenidate",
    "synonyms": [
      "Focalin",
      "Focalin XR",
      "(2R,2'R)-(+)-threo-Methylphenidate"
    ],
    "classification": "Phenidate & Eugeroic",
    "riskTier": "High",
    "pubchemCid": 154101,
    "molecularFormula": "C14H19NO2",
    "molecularWeight": 233.31,
    "canonicalSmiles": "COC(=O)C(C1CCCCN1)C2=CC=CC=C2",
    "xLogP": 2.3,
    "cb1KiNm": 12,
    "cb2KiNm": 0,
    "cb1Efficacy": "Enantiopure DAT / NET Reuptake Inhibitor (~2x Racemic Ritalin Potency)",
    "cb2Efficacy": "Active d-threo Enantiomer of Methylphenidate",
    "relativePotencyVsD9": 2.4,
    "psychoactive": true,
    "alkylChainLength": "Enantiopure d-threo-Methylphenidate",
    "cypEnzymes": [
      "CES1A1 (Carboxylesterase-1)"
    ],
    "primaryMetabolite": "d-Ritalinic Acid (Inactive)",
    "immunoassayCrossReactivityPct": 5,
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
      3,
      5
    ],
    "baseOralThresholdMg": 2.5,
    "baseInhaledThresholdMg": 1.5,
    "radarProfile": {
      "cb1AffinityScore": 84,
      "euphoriaPotency": 80,
      "somaticSedation": 6,
      "anxiogenicRisk": 64,
      "durationPersistence": 32,
      "lipidRetention": 20
    },
    "summary": "Enantiopure active d-threo isomer of methylphenidate (Focalin). Removing the inactive/peripheral l-threo isomer doubles milligram potency and reduces peripheral jitteriness.",
    "pharmacologyNotes": "Hydrolyzed by hepatic carboxylesterase CES1A1 to inactive ritalinic acid.",
    "specificHazards": [
      "Co-ingestion with alcohol transesterifies dexmethylphenidate into active ethylphenidate."
    ],
    "sideEffects": [
      {
        "effect": "Crisp Dopaminergic Focus, Alertness & Tachycardia",
        "system": "Cardiovascular",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Enantiopure DAT / NET Reuptake Inhibitor (~2x Racemic Ritalin Potency)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Dexmethylphenidate",
      "source": "PubChem CID 154101",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/154101"
    }
  },
  {
    "id": "ethylphenidate",
    "name": "Ethylphenidate (EPH · Ethyl Ester of Ritalin Acid)",
    "shortName": "Ethylphenidate (EPH)",
    "synonyms": [
      "EPH",
      "Nopaine"
    ],
    "classification": "Phenidate & Eugeroic",
    "riskTier": "High",
    "pubchemCid": 9842172,
    "molecularFormula": "C15H21NO2",
    "molecularWeight": 247.33,
    "canonicalSmiles": "CCOC(=O)C(C1CCCCN1)C2=CC=CC=C2",
    "xLogP": 2.7,
    "cb1KiNm": 15,
    "cb2KiNm": 0,
    "cb1Efficacy": "Dopamine-Selective NDRI (Higher DAT-to-NET Ratio than Methylphenidate)",
    "cb2Efficacy": "Active Ethanol + Methylphenidate Transesterification Metabolite",
    "relativePotencyVsD9": 2.2,
    "psychoactive": true,
    "alkylChainLength": "Ethyl phenyl(piperidin-2-yl)acetate",
    "cypEnzymes": [
      "CES1"
    ],
    "primaryMetabolite": "Ritalinic Acid & Methylphenidate",
    "immunoassayCrossReactivityPct": 5,
    "terminalHalfLifeHours": 2.5,
    "inhaledOnsetMinutes": [
      3,
      8
    ],
    "inhaledDurationHours": [
      1,
      2
    ],
    "oralOnsetMinutes": [
      20,
      35
    ],
    "oralDurationHours": [
      2.5,
      4
    ],
    "baseOralThresholdMg": 10,
    "baseInhaledThresholdMg": 5,
    "radarProfile": {
      "cb1AffinityScore": 82,
      "euphoriaPotency": 82,
      "somaticSedation": 6,
      "anxiogenicRisk": 68,
      "durationPersistence": 24,
      "lipidRetention": 22
    },
    "summary": "Ethyl ester homolog of methylphenidate formed in vivo via hepatic CES1 transesterification when methylphenidate is co-ingested with alcohol, and synthesized as a standalone NDRI.",
    "pharmacologyNotes": "More selective for DAT over NET than methylphenidate.",
    "specificHazards": [
      "HIGHLY CAUSTIC NASALLY: Repeated insufflation causes severe nasal septum ulceration and epistaxis."
    ],
    "sideEffects": [
      {
        "effect": "Euphoric Dopaminergic Rush & Severe Nasal Mucosa Irritation",
        "system": "Cardiovascular",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Dopamine-Selective NDRI (Higher DAT-to-NET Ratio than Methylphenidate)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Ethylphenidate (EPH)",
      "source": "PubChem CID 9842172",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/9842172"
    }
  },
  {
    "id": "isopropylphenidate",
    "name": "Isopropylphenidate (IPH · IPPD)",
    "shortName": "Isopropylphenidate (IPH)",
    "synonyms": [
      "IPH",
      "IPPD",
      "RTP-128"
    ],
    "classification": "Phenidate & Eugeroic",
    "riskTier": "Moderate",
    "pubchemCid": 71301215,
    "molecularFormula": "C16H23NO2",
    "molecularWeight": 261.36,
    "canonicalSmiles": "CC(C)OC(=O)C(C1CCCCN1)C2=CC=CC=C2",
    "xLogP": 3.1,
    "cb1KiNm": 22,
    "cb2KiNm": 0,
    "cb1Efficacy": "Pure Dopamine-Biased Reuptake Inhibitor (DAT >> NET) with CES1 Resistance",
    "cb2Efficacy": "Sterically Hindered Isopropyl Phenidate Ester",
    "relativePotencyVsD9": 1.8,
    "psychoactive": true,
    "alkylChainLength": "Isopropyl phenyl(piperidin-2-yl)acetate",
    "cypEnzymes": [
      "CES1 (Slow Hydrolysis)"
    ],
    "primaryMetabolite": "Ritalinic Acid",
    "immunoassayCrossReactivityPct": 5,
    "terminalHalfLifeHours": 4.5,
    "inhaledOnsetMinutes": [
      10,
      20
    ],
    "inhaledDurationHours": [
      3,
      4.5
    ],
    "oralOnsetMinutes": [
      25,
      45
    ],
    "oralDurationHours": [
      5,
      7
    ],
    "baseOralThresholdMg": 5,
    "baseInhaledThresholdMg": 3,
    "radarProfile": {
      "cb1AffinityScore": 76,
      "euphoriaPotency": 62,
      "somaticSedation": 6,
      "anxiogenicRisk": 38,
      "durationPersistence": 48,
      "lipidRetention": 28
    },
    "summary": "Isopropyl ester analog of methylphenidate developed as a low-abuse-liability ADHD/narcolepsy candidate. The bulky isopropyl group slows CES1 hydrolysis (extending duration to 5–7 hours) and dramatically lowers NET binding.",
    "pharmacologyNotes": "Does not form ethylphenidate with alcohol.",
    "specificHazards": [
      "Insomnia if taken late in the day."
    ],
    "sideEffects": [
      {
        "effect": "Calm, Jitter-Free 6-Hour Concentration",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Pure Dopamine-Biased Reuptake Inhibitor (DAT >> NET) with CES1 Resistance"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Isopropylphenidate (IPH)",
      "source": "PubChem CID 71301215",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/71301215"
    }
  },
  {
    "id": "4f-mph",
    "name": "4F-MPH (4-Fluoromethylphenidate)",
    "shortName": "4F-MPH",
    "synonyms": [
      "para-Fluoromethylphenidate",
      "4-FMPH"
    ],
    "classification": "Phenidate & Eugeroic",
    "riskTier": "High",
    "pubchemCid": 71301218,
    "molecularFormula": "C14H18FNO2",
    "molecularWeight": 251.3,
    "canonicalSmiles": "COC(=O)C(C1CCCCN1)C2=CC=C(C=C2)F",
    "xLogP": 2.5,
    "cb1KiNm": 7,
    "cb2KiNm": 0,
    "cb1Efficacy": "High-Potency DAT / NET Reuptake Inhibitor (~3.3x Methylphenidate Potency)",
    "cb2Efficacy": "para-Fluorinated Methylphenidate",
    "relativePotencyVsD9": 3.2,
    "psychoactive": true,
    "alkylChainLength": "Methyl (4-fluorophenyl)(piperidin-2-yl)acetate",
    "cypEnzymes": [
      "CES1"
    ],
    "primaryMetabolite": "4-Fluororitalinic Acid",
    "immunoassayCrossReactivityPct": 5,
    "terminalHalfLifeHours": 6,
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
      45
    ],
    "oralDurationHours": [
      6,
      9
    ],
    "baseOralThresholdMg": 2.5,
    "baseInhaledThresholdMg": 1.5,
    "radarProfile": {
      "cb1AffinityScore": 90,
      "euphoriaPotency": 78,
      "somaticSedation": 4,
      "anxiogenicRisk": 76,
      "durationPersistence": 60,
      "lipidRetention": 28
    },
    "summary": "para-Fluorinated analog of methylphenidate exhibiting ~3.3x higher DAT binding efficiency and a much longer 6–9 hour duration.",
    "pharmacologyNotes": "Slow ester hydrolysis.",
    "specificHazards": [
      "Long residual tail (8–12 hours) easily causes insomnia and anxiety if redosed."
    ],
    "sideEffects": [
      {
        "effect": "Intense 8-Hour Laser Focus, Tachycardia & Residual Insomnia",
        "system": "Cardiovascular",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "High-Potency DAT / NET Reuptake Inhibitor (~3.3x Methylphenidate Potency)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · 4F-MPH",
      "source": "PubChem CID 71301218",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/71301218"
    }
  },
  {
    "id": "3-4-ctmp",
    "name": "3,4-CTMP (3,4-Dichloromethylphenidate)",
    "shortName": "3,4-CTMP",
    "synonyms": [
      "3,4-Dichloromethylphenidate"
    ],
    "classification": "Phenidate & Eugeroic",
    "riskTier": "Extreme",
    "pubchemCid": 44393409,
    "molecularFormula": "C14H17Cl2NO2",
    "molecularWeight": 302.2,
    "canonicalSmiles": "COC(=O)C(C1CCCCN1)C2=CC(=C(C=C2)Cl)Cl",
    "xLogP": 3.6,
    "cb1KiNm": 1.5,
    "cb2KiNm": 0,
    "cb1Efficacy": "Ultra-Potent Long-Acting NDRI (~7x Methylphenidate Potency; Ki ~1.5 nM)",
    "cb2Efficacy": "3,4-Dichloro-Substituted Methylphenidate",
    "relativePotencyVsD9": 5,
    "psychoactive": true,
    "alkylChainLength": "Methyl (3,4-dichlorophenyl)(piperidin-2-yl)acetate",
    "cypEnzymes": [
      "CES1",
      "CYP2D6"
    ],
    "primaryMetabolite": "3,4-Dichlororitalinic Acid",
    "immunoassayCrossReactivityPct": 5,
    "terminalHalfLifeHours": 9,
    "inhaledOnsetMinutes": [
      15,
      30
    ],
    "inhaledDurationHours": [
      8,
      12
    ],
    "oralOnsetMinutes": [
      45,
      90
    ],
    "oralDurationHours": [
      10,
      16
    ],
    "baseOralThresholdMg": 1,
    "baseInhaledThresholdMg": 0.5,
    "radarProfile": {
      "cb1AffinityScore": 95,
      "euphoriaPotency": 68,
      "somaticSedation": 4,
      "anxiogenicRisk": 88,
      "durationPersistence": 86,
      "lipidRetention": 42
    },
    "summary": "3,4-Dichloro analog of methylphenidate synthesized by Mark Froimowitz (~7x stronger at DAT than Ritalin) with a slow 60–90 minute onset and 12–16 hour duration.",
    "pharmacologyNotes": "High lipophilicity.",
    "specificHazards": [
      "Slow onset + 1–5 mg potency causes severe multi-day insomnia and cardiovascular strain if redosed."
    ],
    "sideEffects": [
      {
        "effect": "12–16 Hour Persistent Stimulation, Vasoconstriction & Insomnia",
        "system": "Cardiovascular",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "Ultra-Potent Long-Acting NDRI (~7x Methylphenidate Potency; Ki ~1.5 nM)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · 3,4-CTMP",
      "source": "PubChem CID 44393409",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/44393409"
    }
  },
  {
    "id": "hdmp-28",
    "name": "HDMP-28 (Methylnaphthidate)",
    "shortName": "HDMP-28",
    "synonyms": [
      "Methylnaphthidate",
      "Naphthyl-MPH"
    ],
    "classification": "Phenidate & Eugeroic",
    "riskTier": "High",
    "pubchemCid": 10348324,
    "molecularFormula": "C18H21NO2",
    "molecularWeight": 283.37,
    "canonicalSmiles": "COC(=O)C(C1CCCCN1)C2=CC3=CC=CC=C3C=C2",
    "xLogP": 3.4,
    "cb1KiNm": 10,
    "cb2KiNm": 0,
    "cb1Efficacy": "Triple Monoamine Reuptake Inhibitor (SNDRI — Blocks SERT, DAT & NET)",
    "cb2Efficacy": "Naphthyl Analog of Methylphenidate",
    "relativePotencyVsD9": 2.5,
    "psychoactive": true,
    "alkylChainLength": "Methyl (naphthalen-2-yl)(piperidin-2-yl)acetate",
    "cypEnzymes": [
      "CES1"
    ],
    "primaryMetabolite": "Naphthylritalinic Acid",
    "immunoassayCrossReactivityPct": 5,
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
      25,
      45
    ],
    "oralDurationHours": [
      4,
      6
    ],
    "baseOralThresholdMg": 5,
    "baseInhaledThresholdMg": 2.5,
    "radarProfile": {
      "cb1AffinityScore": 84,
      "euphoriaPotency": 78,
      "somaticSedation": 10,
      "anxiogenicRisk": 66,
      "durationPersistence": 40,
      "lipidRetention": 36
    },
    "summary": "Naphthalene bioisostere of methylphenidate. Replacing the phenyl ring with a 2-naphthyl ring adds significant serotonin transporter (SERT) inhibition alongside DAT and NET blockade.",
    "pharmacologyNotes": "Cleared via esterase hydrolysis.",
    "specificHazards": [
      "Caustic nasally; serotonergic interaction risk with MAOIs."
    ],
    "sideEffects": [
      {
        "effect": "Balanced SNDRI Stimulation & Warmth",
        "system": "Cardiovascular",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Triple Monoamine Reuptake Inhibitor (SNDRI — Blocks SERT, DAT & NET)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · HDMP-28",
      "source": "PubChem CID 10348324",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/10348324"
    }
  },
  {
    "id": "desoxypipradrol",
    "name": "Desoxypipradrol (2-DPMP · 2-Diphenylmethylpiperidine)",
    "shortName": "Desoxypipradrol (2-DPMP)",
    "synonyms": [
      "2-DPMP",
      " Ivory Wave"
    ],
    "classification": "Phenidate & Eugeroic",
    "riskTier": "Extreme",
    "pubchemCid": 94435,
    "molecularFormula": "C18H21N",
    "molecularWeight": 251.37,
    "canonicalSmiles": "C1CCNC(C1)C(C2=CC=CC=C2)C3=CC=CC=C3",
    "xLogP": 4.3,
    "cb1KiNm": 2.5,
    "cb2KiNm": 0,
    "cb1Efficacy": "Ultra-Long-Acting NDRI (No Ester Group → Immune to CES1 Hydrolysis; t½ ~16–24h)",
    "cb2Efficacy": "Deoxygenated Pipradrol / Non-Ester Methylphenidate Analog",
    "relativePotencyVsD9": 6,
    "psychoactive": true,
    "alkylChainLength": "2-(Diphenylmethyl)piperidine",
    "cypEnzymes": [
      "CYP2D6"
    ],
    "primaryMetabolite": "Hydroxydesoxypipradrol",
    "immunoassayCrossReactivityPct": 5,
    "terminalHalfLifeHours": 20,
    "inhaledOnsetMinutes": [
      15,
      30
    ],
    "inhaledDurationHours": [
      16,
      24
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      20,
      36
    ],
    "baseOralThresholdMg": 0.5,
    "baseInhaledThresholdMg": 0.5,
    "radarProfile": {
      "cb1AffinityScore": 95,
      "euphoriaPotency": 74,
      "somaticSedation": 2,
      "anxiogenicRisk": 95,
      "durationPersistence": 98,
      "lipidRetention": 55
    },
    "summary": "Lacks methylphenidate’s metabolically labile methyl ester group, preventing CES1 hydrolysis and resulting in a 20–36 hour duration from a single 1–2 mg dose.",
    "pharmacologyNotes": "Elimination half-life ~16–24 hours.",
    "specificHazards": [
      "EXTREME MULTI-DAY INSOMNIA & PSYCHOSIS: Single doses >3–5 mg prevent sleep for 48+ hours and frequently trigger acute stimulant psychosis."
    ],
    "sideEffects": [
      {
        "effect": "24–36 Hour Unrelenting Wakefulness & Sleep-Deprivation Psychosis",
        "system": "Psychiatric",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "Ultra-Long-Acting NDRI (No Ester Group → Immune to CES1 Hydrolysis; t½ ~16–24h)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Desoxypipradrol (2-DPMP)",
      "source": "PubChem CID 94435",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/94435"
    }
  },
  {
    "id": "modafinil",
    "name": "Modafinil (Provigil · Diphenylmethylsulfinylacetamide)",
    "shortName": "Modafinil",
    "synonyms": [
      "Provigil",
      "Modiodal",
      "Alertec",
      "CRL-40476"
    ],
    "classification": "Phenidate & Eugeroic",
    "riskTier": "Low",
    "pubchemCid": 4236,
    "molecularFormula": "C15H15NO2S",
    "molecularWeight": 273.35,
    "canonicalSmiles": "C1=CC=C(C=C1)C(C2=CC=CC=C2)S(=O)CC(=O)N",
    "xLogP": 1.5,
    "cb1KiNm": 4000,
    "cb2KiNm": 0,
    "cb1Efficacy": "Selective Weak DAT Blocker (Ki ~4 µM) + Hypothalamic Orexin/Histamine Activator",
    "cb2Efficacy": "Archetypal Wakefulness-Promoting Eugeroic",
    "relativePotencyVsD9": 0.4,
    "psychoactive": true,
    "alkylChainLength": "2-[(Diphenylmethyl)sulfinyl]acetamide",
    "cypEnzymes": [
      "CYP3A4 (Inducer)",
      "Amidase"
    ],
    "primaryMetabolite": "Modafinil Acid & Modafinil Sulfone",
    "immunoassayCrossReactivityPct": 0,
    "terminalHalfLifeHours": 13,
    "inhaledOnsetMinutes": [
      20,
      40
    ],
    "inhaledDurationHours": [
      8,
      12
    ],
    "oralOnsetMinutes": [
      45,
      90
    ],
    "oralDurationHours": [
      10,
      14
    ],
    "baseOralThresholdMg": 50,
    "baseInhaledThresholdMg": 50,
    "radarProfile": {
      "cb1AffinityScore": 35,
      "euphoriaPotency": 24,
      "somaticSedation": 4,
      "anxiogenicRisk": 34,
      "durationPersistence": 82,
      "lipidRetention": 22
    },
    "summary": "First-line eugeroic (wakefulness-promoting agent) for narcolepsy and shift-work disorder. Weakly occupies DAT while increasing hypothalamic histamine, orexin, and cortical glutamate without classical amphetamine euphoria or rebound hypersomnia.",
    "pharmacologyNotes": "Induces hepatic CYP3A4 (reducing hormonal contraceptive efficacy); t½ ~12–15 hours.",
    "specificHazards": [
      "Rare Stevens-Johnson syndrome / severe skin rash; reduces oral contraceptive effectiveness via CYP3A4 induction."
    ],
    "sideEffects": [
      {
        "effect": "Clean 12-Hour Wakefulness, Headache & Mild Dry Mouth",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Selective Weak DAT Blocker (Ki ~4 µM) + Hypothalamic Orexin/Histamine Activator"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Modafinil",
      "source": "PubChem CID 4236",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/4236"
    }
  },
  {
    "id": "armodafinil",
    "name": "Armodafinil (Nuvigil · (R)-(-)-Modafinil)",
    "shortName": "Armodafinil",
    "synonyms": [
      "Nuvigil",
      "Waklert",
      "(R)-Modafinil"
    ],
    "classification": "Phenidate & Eugeroic",
    "riskTier": "Low",
    "pubchemCid": 9690109,
    "molecularFormula": "C15H15NO2S",
    "molecularWeight": 273.35,
    "canonicalSmiles": "C1=CC=C(C=C1)C(C2=CC=CC=C2)S(=O)CC(=O)N",
    "xLogP": 1.5,
    "cb1KiNm": 3200,
    "cb2KiNm": 0,
    "cb1Efficacy": "Enantiopure Long-Acting (R)-Modafinil DAT & Orexin Modulator",
    "cb2Efficacy": "Active Longer-Half-Life Enantiomer of Modafinil",
    "relativePotencyVsD9": 0.5,
    "psychoactive": true,
    "alkylChainLength": "(R)-(-)-2-[(Diphenylmethyl)sulfinyl]acetamide",
    "cypEnzymes": [
      "CYP3A4"
    ],
    "primaryMetabolite": "Modafinil Acid",
    "immunoassayCrossReactivityPct": 0,
    "terminalHalfLifeHours": 15,
    "inhaledOnsetMinutes": [
      20,
      40
    ],
    "inhaledDurationHours": [
      10,
      14
    ],
    "oralOnsetMinutes": [
      45,
      90
    ],
    "oralDurationHours": [
      12,
      15
    ],
    "baseOralThresholdMg": 25,
    "baseInhaledThresholdMg": 25,
    "radarProfile": {
      "cb1AffinityScore": 40,
      "euphoriaPotency": 26,
      "somaticSedation": 4,
      "anxiogenicRisk": 34,
      "durationPersistence": 86,
      "lipidRetention": 22
    },
    "summary": "Enantiopure (R)-enantiomer of modafinil (Nuvigil / Waklert). Cleared 3x slower than the (S)-enantiomer, delivering higher late-day plasma concentrations at ~75% of the racemic dose.",
    "pharmacologyNotes": "Elimination half-life ~15 hours.",
    "specificHazards": [
      "Late-day dosing prevents nighttime sleep; induces CYP3A4."
    ],
    "sideEffects": [
      {
        "effect": "Sustained 14-Hour Wakefulness & Executive Focus",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Enantiopure Long-Acting (R)-Modafinil DAT & Orexin Modulator"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Armodafinil",
      "source": "PubChem CID 9690109",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/9690109"
    }
  },
  {
    "id": "cyclazodone",
    "name": "Cyclazodone (N-Cyclopropylpemoline)",
    "shortName": "Cyclazodone",
    "synonyms": [
      "2-(Cyclopropylamino)-5-phenyl-4(5H)-oxazolone"
    ],
    "classification": "Phenidate & Eugeroic",
    "riskTier": "High",
    "pubchemCid": 70173,
    "molecularFormula": "C12H12N2O2",
    "molecularWeight": 216.24,
    "canonicalSmiles": "C1CC1NC2=NC(=O)C(O2)C3=CC=CC=C3",
    "xLogP": 1.4,
    "cb1KiNm": 25,
    "cb2KiNm": 0,
    "cb1Efficacy": "Dopamine & Norepinephrine Releasing/Reuptake Modulator (~3–5x Pemoline Potency)",
    "cb2Efficacy": "N-Cyclopropyl Oxazolinone Stimulant",
    "relativePotencyVsD9": 2,
    "psychoactive": true,
    "alkylChainLength": "N-Cyclopropyl-5-phenyloxazolin-4-one",
    "cypEnzymes": [
      "Hepatic Oxidation"
    ],
    "primaryMetabolite": "5-Phenyl-2,4-oxazolidinedione",
    "immunoassayCrossReactivityPct": 5,
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
      60
    ],
    "oralDurationHours": [
      6,
      10
    ],
    "baseOralThresholdMg": 5,
    "baseInhaledThresholdMg": 5,
    "radarProfile": {
      "cb1AffinityScore": 76,
      "euphoriaPotency": 68,
      "somaticSedation": 6,
      "anxiogenicRisk": 58,
      "durationPersistence": 62,
      "lipidRetention": 24
    },
    "summary": "N-cyclopropyl derivative of pemoline patented by American Cyanamid in 1963. Approximately 3–5x more potent than pemoline as a central psychostimulant.",
    "pharmacologyNotes": "Shares structural core with hepatotoxic pemoline.",
    "specificHazards": [
      "STRUCTURAL HEPATOTOXICITY WARNING: As a 5-phenyloxazolinone analog of pemoline, frequent use carries risk of idiosyncratic drug-induced liver injury (DILI)."
    ],
    "sideEffects": [
      {
        "effect": "Strong 8-Hour Functional Drive & Hepatic Enzyme Elevation Risk",
        "system": "Gastrointestinal",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Dopamine & Norepinephrine Releasing/Reuptake Modulator (~3–5x Pemoline Potency)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Cyclazodone",
      "source": "PubChem CID 70173",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/70173"
    }
  },
  {
    "id": "n-methylcyclazodone",
    "name": "N-Methylcyclazodone (NMC)",
    "shortName": "N-Methylcyclazodone",
    "synonyms": [
      "NMC",
      "N-Methyl-N-cyclopropylpemoline"
    ],
    "classification": "Phenidate & Eugeroic",
    "riskTier": "High",
    "pubchemCid": 12937755,
    "molecularFormula": "C13H14N2O2",
    "molecularWeight": 230.26,
    "canonicalSmiles": "CN(C1CC1)C2=NC(=O)C(O2)C3=CC=CC=C3",
    "xLogP": 1.8,
    "cb1KiNm": 30,
    "cb2KiNm": 0,
    "cb1Efficacy": "Long-Acting Oxazolinone Catecholamine Stimulant (Prodrug/Analog of Cyclazodone)",
    "cb2Efficacy": "N-Methylated Cyclazodone",
    "relativePotencyVsD9": 1.8,
    "psychoactive": true,
    "alkylChainLength": "N-Methyl-N-cyclopropyl-pemoline",
    "cypEnzymes": [
      "CYP2D6",
      "CYP3A4"
    ],
    "primaryMetabolite": "Cyclazodone",
    "immunoassayCrossReactivityPct": 5,
    "terminalHalfLifeHours": 11,
    "inhaledOnsetMinutes": [
      20,
      40
    ],
    "inhaledDurationHours": [
      7,
      10
    ],
    "oralOnsetMinutes": [
      45,
      90
    ],
    "oralDurationHours": [
      9,
      14
    ],
    "baseOralThresholdMg": 5,
    "baseInhaledThresholdMg": 5,
    "radarProfile": {
      "cb1AffinityScore": 72,
      "euphoriaPotency": 62,
      "somaticSedation": 6,
      "anxiogenicRisk": 54,
      "durationPersistence": 76,
      "lipidRetention": 28
    },
    "summary": "N-methylated derivative of cyclazodone that acts partially as a slower-onset, longer-duration (9–14 hour) prodrug to cyclazodone.",
    "pharmacologyNotes": "N-demethylated hepatically to cyclazodone.",
    "specificHazards": [
      "Hepatotoxicity risk with chronic use; long duration causes insomnia."
    ],
    "sideEffects": [
      {
        "effect": "9–14 Hour Smooth Focus & Hepatic Strain Risk",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Long-Acting Oxazolinone Catecholamine Stimulant (Prodrug/Analog of Cyclazodone)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · N-Methylcyclazodone",
      "source": "PubChem CID 12937755",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/12937755"
    }
  },
  {
    "id": "pemoline",
    "name": "Pemoline (Cylert · 2-Amino-5-phenyl-4(5H)-oxazolone)",
    "shortName": "Pemoline",
    "synonyms": [
      "Cylert",
      "Tradon",
      "Betanamin"
    ],
    "classification": "Phenidate & Eugeroic",
    "riskTier": "High",
    "pubchemCid": 4723,
    "molecularFormula": "C9H8N2O2",
    "molecularWeight": 176.17,
    "canonicalSmiles": "C1=CC=C(C=C1)C2C(=O)N=C(O2)N",
    "xLogP": 0.6,
    "cb1KiNm": 65,
    "cb2KiNm": 0,
    "cb1Efficacy": "Selective Central Dopaminergic Stimulant (Minimal Peripheral Sympathomimetic Effect)",
    "cb2Efficacy": "Archetypal Oxazolinone ADHD Stimulant",
    "relativePotencyVsD9": 1.2,
    "psychoactive": true,
    "alkylChainLength": "2-Amino-5-phenyl-1,3-oxazol-4(5H)-one",
    "cypEnzymes": [
      "Hepatic Oxidation"
    ],
    "primaryMetabolite": "5-Phenyl-2,4-oxazolidinedione & Mandelic Acid",
    "immunoassayCrossReactivityPct": 0,
    "terminalHalfLifeHours": 12,
    "inhaledOnsetMinutes": [
      30,
      60
    ],
    "inhaledDurationHours": [
      6,
      9
    ],
    "oralOnsetMinutes": [
      60,
      120
    ],
    "oralDurationHours": [
      8,
      12
    ],
    "baseOralThresholdMg": 10,
    "baseInhaledThresholdMg": 10,
    "radarProfile": {
      "cb1AffinityScore": 62,
      "euphoriaPotency": 52,
      "somaticSedation": 6,
      "anxiogenicRisk": 38,
      "durationPersistence": 72,
      "lipidRetention": 18
    },
    "summary": "Oxazolinone central stimulant formerly prescribed for ADHD and narcolepsy (Cylert). Stimulates central dopamine synthesis and release with minimal peripheral heart rate or blood pressure elevation.",
    "pharmacologyNotes": "Withdrawn in the US/EU due to rare but fatal idiosyncratic hepatic failure.",
    "specificHazards": [
      "BLACK BOX HEPATOTOXICITY: Associated with rare, unpredictable acute liver failure."
    ],
    "sideEffects": [
      {
        "effect": "Calm Central Focus & Idiosyncratic Hepatotoxicity Risk",
        "system": "Gastrointestinal",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Selective Central Dopaminergic Stimulant (Minimal Peripheral Sympathomimetic Effect)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Pemoline",
      "source": "PubChem CID 4723",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/4723"
    }
  },
  {
    "id": "dimethocaine",
    "name": "Dimethocaine (Larocaine)",
    "shortName": "Dimethocaine",
    "synonyms": [
      "Larocaine",
      "DMC"
    ],
    "classification": "Tropane & Piperazine",
    "riskTier": "High",
    "pubchemCid": 21319,
    "molecularFormula": "C16H26N2O2",
    "molecularWeight": 278.39,
    "canonicalSmiles": "CCN(CC)CC(C)(C)COC(=O)C1=CC=C(C=C1)N",
    "xLogP": 3,
    "cb1KiNm": 35,
    "cb2KiNm": 0,
    "cb1Efficacy": "Dopamine Reuptake Inhibitor (~30% Cocaine DAT Potency) + Strong Sodium Channel Blocker",
    "cb2Efficacy": "Non-Tropane Local Anesthetic Cocaine Analog",
    "relativePotencyVsD9": 1.4,
    "psychoactive": true,
    "alkylChainLength": "4-Aminobenzoic Acid Diethylamino-neopentyl Ester",
    "cypEnzymes": [
      "Plasma Pseudocholinesterase"
    ],
    "primaryMetabolite": "4-Aminobenzoic Acid (PABA)",
    "immunoassayCrossReactivityPct": 5,
    "terminalHalfLifeHours": 1.5,
    "inhaledOnsetMinutes": [
      2,
      5
    ],
    "inhaledDurationHours": [
      0.5,
      1
    ],
    "oralOnsetMinutes": [
      15,
      30
    ],
    "oralDurationHours": [
      1,
      2
    ],
    "baseOralThresholdMg": 50,
    "baseInhaledThresholdMg": 25,
    "radarProfile": {
      "cb1AffinityScore": 68,
      "euphoriaPotency": 68,
      "somaticSedation": 12,
      "anxiogenicRisk": 76,
      "durationPersistence": 14,
      "lipidRetention": 26
    },
    "summary": "Synthetic local anesthetic (\"Larocaine\") possessing ~30% of cocaine’s dopamine reuptake inhibition potency alongside strong Nav1.5 cardiac sodium channel blockade.",
    "pharmacologyNotes": "Rapidly hydrolyzed by plasma esterases.",
    "specificHazards": [
      "HIGH CARDIOTOXICITY AT HIGH DOSES: Because it is weaker at DAT than cocaine but equally potent at blocking sodium channels, taking large doses risks cardiac arrhythmia."
    ],
    "sideEffects": [
      {
        "effect": "Intense Local Numbing, Short Dopamine Lift & Sodium Channel Cardiotoxicity",
        "system": "Cardiovascular",
        "likelihood": "Common",
        "severity": "Moderate",
        "mechanism": "Dopamine Reuptake Inhibitor (~30% Cocaine DAT Potency) + Strong Sodium Channel Blocker"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Dimethocaine",
      "source": "PubChem CID 21319",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/21319"
    }
  },
  {
    "id": "troparil",
    "name": "Troparil (β-CIT · WIN 35,065-2)",
    "shortName": "Troparil",
    "synonyms": [
      "β-CIT",
      "WIN 35,065-2",
      "2β-Carbomethoxy-3β-phenyltropane"
    ],
    "classification": "Tropane & Piperazine",
    "riskTier": "Extreme",
    "pubchemCid": 6604100,
    "molecularFormula": "C16H21NO2",
    "molecularWeight": 259.34,
    "canonicalSmiles": "CN1C2CCC1C(C(C2)C3=CC=CC=C3)C(=O)OC",
    "xLogP": 2.9,
    "cb1KiNm": 5,
    "cb2KiNm": 0,
    "cb1Efficacy": "High-Potency Phenyltropane NDRI (~3–5x Cocaine Potency; Lacks Ester Linkage)",
    "cb2Efficacy": "Non-Anesthetic Phenyltropane Stimulant",
    "relativePotencyVsD9": 3.8,
    "psychoactive": true,
    "alkylChainLength": "3β-Phenyltropane Analog of Cocaine",
    "cypEnzymes": [
      "CYP3A4"
    ],
    "primaryMetabolite": "Nortroparil",
    "immunoassayCrossReactivityPct": 45,
    "terminalHalfLifeHours": 4.5,
    "inhaledOnsetMinutes": [
      3,
      8
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
      4,
      6
    ],
    "baseOralThresholdMg": 5,
    "baseInhaledThresholdMg": 2.5,
    "radarProfile": {
      "cb1AffinityScore": 92,
      "euphoriaPotency": 92,
      "somaticSedation": 4,
      "anxiogenicRisk": 82,
      "durationPersistence": 42,
      "lipidRetention": 32
    },
    "summary": "Phenyltropane analog of cocaine where the benzoyloxy ester is replaced by a direct carbon-carbon bond to the phenyl ring. ~4x more potent and 4x longer-lasting than cocaine without sodium-channel cardiotoxicity.",
    "pharmacologyNotes": "Cannot be hydrolyzed by plasma esterases.",
    "specificHazards": [
      "High addiction liability and sympathomimetic hypertension."
    ],
    "sideEffects": [
      {
        "effect": "Long-Acting 4-Hour Cocaine-Like Euphoria & Tachycardia",
        "system": "Cardiovascular",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "High-Potency Phenyltropane NDRI (~3–5x Cocaine Potency; Lacks Ester Linkage)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · Troparil",
      "source": "PubChem CID 6604100",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/6604100"
    }
  },
  {
    "id": "rti-111",
    "name": "RTI-111 (Dichloropane · O-401)",
    "shortName": "RTI-111",
    "synonyms": [
      "Dichloropane",
      "O-401",
      "3β-(3,4-Dichlorophenyl)tropane-2β-carboxylic acid methyl ester"
    ],
    "classification": "Tropane & Piperazine",
    "riskTier": "Extreme",
    "pubchemCid": 9951363,
    "molecularFormula": "C16H19Cl2NO2",
    "molecularWeight": 328.23,
    "canonicalSmiles": "CN1C2CCC1C(C(C2)C3=CC(=C(C=C3)Cl)Cl)C(=O)OC",
    "xLogP": 4.1,
    "cb1KiNm": 0.8,
    "cb2KiNm": 0,
    "cb1Efficacy": "Ultra-Potent Triple Monoamine Reuptake Inhibitor (SNDRI: DAT Ki ~0.79 nM / SERT Ki ~3.1 nM)",
    "cb2Efficacy": "3,4-Dichlorophenyltropane",
    "relativePotencyVsD9": 5,
    "psychoactive": true,
    "alkylChainLength": "3,4-Dichloro Analog of Troparil",
    "cypEnzymes": [
      "CYP3A4"
    ],
    "primaryMetabolite": "Nor-RTI-111",
    "immunoassayCrossReactivityPct": 40,
    "terminalHalfLifeHours": 6,
    "inhaledOnsetMinutes": [
      5,
      15
    ],
    "inhaledDurationHours": [
      3,
      5
    ],
    "oralOnsetMinutes": [
      25,
      45
    ],
    "oralDurationHours": [
      5,
      8
    ],
    "baseOralThresholdMg": 5,
    "baseInhaledThresholdMg": 2.5,
    "radarProfile": {
      "cb1AffinityScore": 96,
      "euphoriaPotency": 88,
      "somaticSedation": 8,
      "anxiogenicRisk": 84,
      "durationPersistence": 54,
      "lipidRetention": 44
    },
    "summary": "3,4-Dichlorophenyltropane synthesized by Frank Carroll (Research Triangle Institute). Sub-nanomolar SNDRI blocking DAT, NET, and SERT for 5–8 hours.",
    "pharmacologyNotes": "Slow onset (15–30 min) despite high potency.",
    "specificHazards": [
      "Severe nasal mucosal burn; slow onset leads to dangerous redosing."
    ],
    "sideEffects": [
      {
        "effect": "Long-Acting SNDRI Stimulation & Severe Nasal Burn",
        "system": "Cardiovascular",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "Ultra-Potent Triple Monoamine Reuptake Inhibitor (SNDRI: DAT Ki ~0.79 nM / SERT Ki ~3.1 nM)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · RTI-111",
      "source": "PubChem CID 9951363",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/9951363"
    }
  },
  {
    "id": "rti-121",
    "name": "RTI-121 (IPCIT)",
    "shortName": "RTI-121",
    "synonyms": [
      "IPCIT",
      "3β-(4-Iodophenyl)tropane-2β-carboxylic acid isopropyl ester"
    ],
    "classification": "Tropane & Piperazine",
    "riskTier": "Extreme",
    "pubchemCid": 104856,
    "molecularFormula": "C18H24INO2",
    "molecularWeight": 413.3,
    "canonicalSmiles": "CC(C)OC(=O)C1C2CCC(N2C)CC1C3=CC=C(C=C3)I",
    "xLogP": 4.6,
    "cb1KiNm": 0.43,
    "cb2KiNm": 0,
    "cb1Efficacy": "Ultra-Selective Dopamine Transporter Inhibitor (DAT Ki ~0.43 nM; >1000x Selective vs SERT)",
    "cb2Efficacy": "Selective PET Radioligand & Phenyltropane",
    "relativePotencyVsD9": 5.5,
    "psychoactive": true,
    "alkylChainLength": "4-Iodophenyl-2β-carboisopropoxytropane",
    "cypEnzymes": [
      "CYP3A4"
    ],
    "primaryMetabolite": "De-esterified metabolites",
    "immunoassayCrossReactivityPct": 35,
    "terminalHalfLifeHours": 7.5,
    "inhaledOnsetMinutes": [
      10,
      25
    ],
    "inhaledDurationHours": [
      4,
      7
    ],
    "oralOnsetMinutes": [
      30,
      60
    ],
    "oralDurationHours": [
      6,
      10
    ],
    "baseOralThresholdMg": 5,
    "baseInhaledThresholdMg": 2.5,
    "radarProfile": {
      "cb1AffinityScore": 98,
      "euphoriaPotency": 86,
      "somaticSedation": 4,
      "anxiogenicRisk": 80,
      "durationPersistence": 64,
      "lipidRetention": 50
    },
    "summary": "Highly selective DAT inhibitor (Ki = 0.43 nM) with slow brain entry and prolonged occupancy (~6–10 hours).",
    "pharmacologyNotes": "Slow kinetic association/dissociation at DAT.",
    "specificHazards": [
      "Prolonged insomnia and dopaminergic overstimulation."
    ],
    "sideEffects": [
      {
        "effect": "Sustained Selective Dopaminergic Elevation & Insomnia",
        "system": "CNS",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "Ultra-Selective Dopamine Transporter Inhibitor (DAT Ki ~0.43 nM; >1000x Selective vs SERT)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · RTI-121",
      "source": "PubChem CID 104856",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/104856"
    }
  },
  {
    "id": "win-35428",
    "name": "WIN-35,428 (β-CFT · Ioflupane Fluorine Analog)",
    "shortName": "WIN-35,428",
    "synonyms": [
      "β-CFT",
      "2β-Carbomethoxy-3β-(4-fluorophenyl)tropane"
    ],
    "classification": "Tropane & Piperazine",
    "riskTier": "Extreme",
    "pubchemCid": 107994,
    "molecularFormula": "C16H20FNO2",
    "molecularWeight": 277.33,
    "canonicalSmiles": "CN1C2CCC1C(C(C2)C3=CC=C(C=C3)F)C(=O)OC",
    "xLogP": 3.1,
    "cb1KiNm": 11,
    "cb2KiNm": 0,
    "cb1Efficacy": "Potent Phenyltropane NDRI (~4–6x Cocaine Potency)",
    "cb2Efficacy": "4-Fluorophenyltropane",
    "relativePotencyVsD9": 4,
    "psychoactive": true,
    "alkylChainLength": "4-Fluoro Analog of Troparil",
    "cypEnzymes": [
      "CYP3A4"
    ],
    "primaryMetabolite": "Nor-β-CFT",
    "immunoassayCrossReactivityPct": 45,
    "terminalHalfLifeHours": 4.5,
    "inhaledOnsetMinutes": [
      3,
      10
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
      4,
      6
    ],
    "baseOralThresholdMg": 5,
    "baseInhaledThresholdMg": 2.5,
    "radarProfile": {
      "cb1AffinityScore": 92,
      "euphoriaPotency": 90,
      "somaticSedation": 4,
      "anxiogenicRisk": 80,
      "durationPersistence": 42,
      "lipidRetention": 34
    },
    "summary": "4-Fluorinated phenyltropane analog of cocaine (β-CFT) with ~4–6x higher potency and longer duration than cocaine.",
    "pharmacologyNotes": "Resistant to plasma esterases.",
    "specificHazards": [
      "High addiction and cardiovascular strain risk."
    ],
    "sideEffects": [
      {
        "effect": "Potent 4-Hour Tropane Euphoria & Tachycardia",
        "system": "Cardiovascular",
        "likelihood": "Common",
        "severity": "Severe",
        "mechanism": "Potent Phenyltropane NDRI (~4–6x Cocaine Potency)"
      }
    ],
    "provenanceCitation": {
      "label": "Clinical & Forensic Toxicology Reference · WIN-35,428",
      "source": "PubChem CID 107994",
      "pmidOrUrl": "https://pubchem.ncbi.nlm.nih.gov/compound/107994"
    }
  }
];

export const EXPANDED_RECREATIONAL_PART1 = {
  "methamphetamine": {
    "physicalFormLabel": "Clear Crystalline Shards & White Desoxyn 5mg Tablets",
    "physicalAppearance": "Translucent glass-like crystalline hydrochloride shards (\"Ice\") or small white round 5 mg prescription tablets.",
    "recreationalFeel": "Delivers an immediate, laser-focused surge of boundless confidence, mental clarity, and physical stamina accompanied by a warm dopaminergic rush down the spine. Time accelerates, fatigue vanishes completely for 8–12+ hours, and every task feels deeply rewarding, though followed by a harsh, depleted crash.",
    "subjectiveTags": [
      "Intense Dopaminergic Rush",
      "10–14 Hour Laser Focus",
      "Complete Fatigue Erasure",
      "High Compulsive Redosing Risk"
    ],
    "phases": {
      "onsetFeel": "Immediate rush of scalp tingling, chest warmth, and razor-sharp alertness.",
      "peakFeel": "Hours of unstoppable productivity, euphoria, talkativeness, and heightened libido.",
      "comedownFeel": "Prolonged adrenergic exhaustion, jaw tension, insomnia, and flat mood."
    }
  },
  "lisdexamfetamine": {
    "physicalFormLabel": "Two-Tone Vyvanse / Elvanse Hard Capsules",
    "physicalAppearance": "Recognizable two-tone orange/white (30 mg), blue/white (50 mg), or blue/orange (70 mg) capsules printed with S489.",
    "recreationalFeel": "Produces the smoothest, most gradual stimulant arc of any prescription amphetamine: instead of a sudden jolt, a warm, steady wave of motivation, organized focus, and upbeat sociability builds over 90 minutes and holds a level plateau all day without jagged peaks.",
    "subjectiveTags": [
      "Smooth 90-Min Prodrug Onset",
      "12-Hour Steady Focus Plateau",
      "Clean Talkative Confidence",
      "Soft Gradual Comedown"
    ],
    "phases": {
      "onsetFeel": "Gradual 60–90 minute lifting of brain fog into warm alertness.",
      "peakFeel": "Steady, unhurried concentration, positive mood, and effortless task execution.",
      "comedownFeel": "Slow, gentle evening taper with reduced crash intensity."
    }
  },
  "propylhexedrine": {
    "physicalFormLabel": "Inhaler Cotton Rod & HCl Extract",
    "physicalAppearance": "Plastic nasal inhaler tube containing a lavender/menthol-scented cotton rod.",
    "recreationalFeel": "Feels like a heavy, physical cousin of amphetamine—waves of goosebumps and scalp tingling pair with chatty euphoria and alertness, though accompanied by strong peripheral vasoconstriction and a noticeable physical heartbeat.",
    "subjectiveTags": [
      "Warm Scalp Tingling & Goosebumps",
      "Chatty Alert Euphoria",
      "Strong Peripheral Vasoconstriction",
      "4–6 Hour Duration"
    ],
    "phases": {
      "onsetFeel": "25–40 minute build of warm skin tingles and heart rate elevation.",
      "peakFeel": "Energetic, talkative euphoria with cold hands/feet from vasoconstriction.",
      "comedownFeel": "Tired, heavy-limbed adrenergic crash and headache risk."
    }
  },
  "mda": {
    "physicalFormLabel": "Root-Beer Brown Crystalline Powder",
    "physicalAppearance": "Tan to root-beer amber crystalline powder with a faint sweet sassafras aroma.",
    "recreationalFeel": "More grounded, psychedelic, and dance-oriented than MDMA: combines a rich, warm heart-opening body buzz with shimmering visual trails, color saturation, and a 6–8 hour mystical festival glow.",
    "subjectiveTags": [
      "Rich Psychedelic Visual Shimmer",
      "Deep Musical & Tactile Immersion",
      "6–8 Hour Entactogenic Arc",
      "Warm Sassafras Body Glow"
    ],
    "phases": {
      "onsetFeel": "30–60 minute warm stomach flutter and rising visual brightness.",
      "peakFeel": "Euphoric body high, vivid tracers, emotional openness, and rhythmic energy.",
      "comedownFeel": "Gradual 2-hour fade with depleted serotonin fatigue."
    }
  },
  "mdea": {
    "physicalFormLabel": "Off-White Crystalline Powder",
    "physicalAppearance": "White to off-white crystalline powder or pressed tablets.",
    "recreationalFeel": "Feels like a softer, dreamier, couch-friendly version of MDMA (\"stoned rolling\"): wraps you in a heavy, peaceful blanket of contentment and gentle empathy without the frantic urge to dance or talk non-stop.",
    "subjectiveTags": [
      "Dreamy Couch-Lock Empathy",
      "Gentle Serotonergic Blanket",
      "Less Pushy Stimulation than MDMA",
      "Compact 3–5 Hour Duration"
    ],
    "phases": {
      "onsetFeel": "Smooth 35-minute wave of physical relaxation and warmth.",
      "peakFeel": "Peaceful, introspective emotional warmth and tactile comfort.",
      "comedownFeel": "Gentle, sleepy taper with milder next-day hangover."
    }
  },
  "mbdb": {
    "physicalFormLabel": "White Crystalline Powder",
    "physicalAppearance": "Fine white crystalline hydrochloride salt.",
    "recreationalFeel": "Delivers pure, quiet emotional honesty and warm interpersonal closeness with almost zero stimulant rush—ideal for calm conversation rather than high-energy clubbing.",
    "subjectiveTags": [
      "Quiet Emotional Openness",
      "Zero Stimulant Jitters",
      "Warm Tactile Serenity",
      "4–5 Hour Therapeutic Feel"
    ],
    "phases": {
      "onsetFeel": "40-minute softening of emotional defenses and muscle tension.",
      "peakFeel": "Deep calm, honesty, and warm empathy without euphoria spikes.",
      "comedownFeel": "Smooth, quiet return to baseline."
    }
  },
  "mmda": {
    "physicalFormLabel": "Cream-White Crystalline Powder",
    "physicalAppearance": "Off-white crystalline solid.",
    "recreationalFeel": "Uniquely induces vivid, narrative \"waking dreams\" behind closed eyelids while keeping the mind calm, warm, and emotionally centered.",
    "subjectiveTags": [
      "Vivid Closed-Eye \"Brain Movies\"",
      "Dreamy Meditative Empathy",
      "Gentle Physical Warmth",
      "6–8 Hour Duration"
    ],
    "phases": {
      "onsetFeel": "45-minute onset of physical warmth and dreamy relaxation.",
      "peakFeel": "Immersive closed-eye visual narratives and peaceful insight.",
      "comedownFeel": "Tranquil, sleepy afterglow."
    }
  },
  "5-apb": {
    "physicalFormLabel": "Tan/White Succinate or HCl Powder",
    "physicalAppearance": "Fluffy white to light-tan succinate or hydrochloride powder.",
    "recreationalFeel": "Builds slowly over 90 minutes into a long, lush, 8-hour serotonergic roll with warm body tingling, visual color enhancement, and deep musical euphoria.",
    "subjectiveTags": [
      "Long 7–10 Hour Roll",
      "Warm Serotonergic Body Melt",
      "Rich Color & Music Enhancement",
      "Slow 90-Minute Come-Up"
    ],
    "phases": {
      "onsetFeel": "Slow 60–90 minute build of warmth and pupil dilation.",
      "peakFeel": "Sustained, deeply euphoric entactogenic plateau with mild visuals.",
      "comedownFeel": "Extended tired afterglow."
    }
  },
  "6-apb": {
    "physicalFormLabel": "Tan Succinate Powder or Pellets",
    "physicalAppearance": "Light tan powder or pressed pellets.",
    "recreationalFeel": "Often described as the closest legal-era rival to MDA+MDMA combined: an electric, 10-hour wave of rushing euphoria, tactile bliss, and neon visual trails.",
    "subjectiveTags": [
      "Electric 8–12 Hour Euphoria",
      "Balanced Dopamine + Serotonin Rush",
      "Vivid Neon Visual Trails",
      "High Dance Floor Stamina"
    ],
    "phases": {
      "onsetFeel": "60–90 minute climb with butterfly tingles in the chest.",
      "peakFeel": "6+ hours of peak rolling euphoria, music immersion, and empathy.",
      "comedownFeel": "Gradual 3-hour descent requiring hydration and rest."
    }
  },
  "5-apdb": {
    "physicalFormLabel": "White Crystalline Powder",
    "physicalAppearance": "Fine white crystalline powder.",
    "recreationalFeel": "A very mellow, pillowy, couch-melting roll that emphasizes serene emotional warmth over physical stimulation.",
    "subjectiveTags": [
      "Pillowy Serotonergic Warmth",
      "Calm Dreamy Introspection",
      "Minimal Stimulant Push",
      "5–7 Hour Duration"
    ],
    "phases": {
      "onsetFeel": "30–45 minute warm body relaxation.",
      "peakFeel": "Cozy, dreamy emotional contentment and tactile softness.",
      "comedownFeel": "Easy transition into sleep."
    }
  },
  "6-apdb": {
    "physicalFormLabel": "Off-White Crystalline Powder",
    "physicalAppearance": "Off-white crystalline solid.",
    "recreationalFeel": "Delivers a warm, upbeat, ligeramente psychedelic roll that feels slightly lighter and shorter than 6-APB.",
    "subjectiveTags": [
      "Upbeat Empathic Glow",
      "Soft Visual Color Shift",
      "6–8 Hour Balanced Arc",
      "Tactile Enhancement"
    ],
    "phases": {
      "onsetFeel": "35-minute warm rush.",
      "peakFeel": "Sociable, affectionate euphoria and light visual shimmer.",
      "comedownFeel": "Smooth 2-hour taper."
    }
  },
  "5-mapb": {
    "physicalFormLabel": "White Crystalline HCl Powder",
    "physicalAppearance": "Fine white crystalline powder.",
    "recreationalFeel": "Widely regarded as the closest benzofuran match to pure MDMA, delivering intense eye-wiggling (nystagmus) serotonergic bliss, profound emotional bonding, and a longer 6–8 hour plateau.",
    "subjectiveTags": [
      "Intense Eye-Wiggling Bliss",
      "Deep Heart-Opening Empathy",
      "2× Potency by Weight vs MDMA",
      "6–8 Hour Plateau"
    ],
    "phases": {
      "onsetFeel": "25–45 minute warm rush and pupil dilation.",
      "peakFeel": "Overwhelming waves of tactile and emotional euphoria.",
      "comedownFeel": "Soft, lingering afterglow with moderate jaw fatigue."
    }
  },
  "6-mapb": {
    "physicalFormLabel": "Off-White Crystalline Powder",
    "physicalAppearance": "White to tan crystalline powder.",
    "recreationalFeel": "Combines the fast, loving rush of 5-MAPB with the upbeat, dance-ready energy of 6-APB for 6–9 hours.",
    "subjectiveTags": [
      "Energetic Loving Rush",
      "Fast 30-Minute Onset",
      "High Musical & Social Drive",
      "6–9 Hour Duration"
    ],
    "phases": {
      "onsetFeel": "30-minute surge of warmth and energy.",
      "peakFeel": "Vibrant, talkative, dance-oriented roll.",
      "comedownFeel": "Gradual 2.5-hour comedown."
    }
  },
  "mephedrone": {
    "physicalFormLabel": "White Needle Shards / Rice-Crystal Powder",
    "physicalAppearance": "Fine white needles or crystalline shards with a distinct sweet-chemical odor.",
    "recreationalFeel": "Feels like Cocaine and MDMA fused into a 90-minute rocket: an explosive, confidence-flooded rush of pure euphoria, intense chattiness, and heightened libido that vanishes abruptly, leaving an overwhelming urge to take another line.",
    "subjectiveTags": [
      "Explosive MDMA + Cocaine Hybrid Rush",
      "Intense Talkative Confidence",
      "Sharp 60–90 Min Peak",
      "Severe Compulsive Redosing Urge"
    ],
    "phases": {
      "onsetFeel": "2–5 minutes (nasal) or 20 minutes (oral) into a blinding rush of warmth and energy.",
      "peakFeel": "Blissful, hyper-social, music-drenched euphoria and physical stimulation.",
      "comedownFeel": "Sudden drop-off at 90–120 minutes triggering strong cravings."
    }
  },
  "3-mmc": {
    "physicalFormLabel": "Translucent Crystalline Rocks & Powder",
    "physicalAppearance": "Translucent white/clear crystalline rocks that crush into a fluffy powder.",
    "recreationalFeel": "Slightly crispier and more cocaine-like than 4-MMC: delivers a clean, electric rush of social confidence, tactile sensitivity, and focus without the heavy serotonergic eye-wiggles, though just as fiendish to redose.",
    "subjectiveTags": [
      "Crisp Cocaine-Plus-Empathy Rush",
      "Electric Social & Club Energy",
      "Clearer Headspace than 4-MMC",
      "Fast 2-Hour Cycle"
    ],
    "phases": {
      "onsetFeel": "Immediate nasal burn followed by a 3-minute wave of confidence.",
      "peakFeel": "Sharp, chatty, high-energy euphoria and social disinhibition.",
      "comedownFeel": "Abrupt comedown after 90 minutes with strong redose craving."
    }
  },
  "2-mmc": {
    "physicalFormLabel": "White Crystalline Shards",
    "physicalAppearance": "Clear to white crystalline shards or pressed pellets.",
    "recreationalFeel": "Feels like a clean, upbeat amphetamine-cathinone hybrid with a mild mood lift and talkative energy, lacking the heavy serotonergic roll of 4-MMC.",
    "subjectiveTags": [
      "Clean Dopaminergic Drive",
      "Chatty Upbeat Focus",
      "Minimal Serotonergic Fog",
      "2–3 Hour Duration"
    ],
    "phases": {
      "onsetFeel": "5–20 minute lift in energy and talkativeness.",
      "peakFeel": "Crisp, sociable stimulation and alertness.",
      "comedownFeel": "Mild 2-hour fade into tiredness."
    }
  },
  "4-mec": {
    "physicalFormLabel": "White Crystalline Shards",
    "physicalAppearance": "Crystalline shards or powder.",
    "recreationalFeel": "Produces a warm, slightly more relaxed serotonergic rush than 4-MMC with a shorter 90-minute plateau.",
    "subjectiveTags": [
      "Warm Serotonergic Rush",
      "Mellow Tactile Buzz",
      "Short 1.5–3 Hour Duration",
      "High Redose Urge"
    ],
    "phases": {
      "onsetFeel": "Fast 5–15 minute warm flush.",
      "peakFeel": "Cozy, chatty euphoria.",
      "comedownFeel": "Quick drop-off within 2 hours."
    }
  },
  "3-mec": {
    "physicalFormLabel": "White Crystalline Powder",
    "physicalAppearance": "Crystalline powder.",
    "recreationalFeel": "Delivers a brisk, cocaine-like 90-minute boost in talkativeness and energy.",
    "subjectiveTags": [
      "Brisk Dopaminergic Lift",
      "Sociable Alertness",
      "Short 1.5–2.5 Hour Duration",
      "Moderate Vasoconstriction"
    ],
    "phases": {
      "onsetFeel": "Fast 5-minute nasal rush.",
      "peakFeel": "Focused, chatty stimulation.",
      "comedownFeel": "Quick fade into fatigue."
    }
  },
  "methylone": {
    "physicalFormLabel": "Off-White to Tan Crystalline Powder",
    "physicalAppearance": "Fine white to pale-yellow crystalline powder.",
    "recreationalFeel": "Feels like \"MDMA-Lite\" crossed with a clean stimulant: a cheerful, clear-headed, affectionate roll that peaks quickly and wraps up in 3–4 hours with less emotional overwhelm.",
    "subjectiveTags": [
      "Clear-Headed \"MDMA-Lite\" Glow",
      "Cheerful Talkative Empathy",
      "Energetic Dopamine Push",
      "Compact 3–4 Hour Duration"
    ],
    "phases": {
      "onsetFeel": "20–35 minute warm rush and bright mood.",
      "peakFeel": "Upbeat, affectionate, clear-headed social euphoria.",
      "comedownFeel": "Faster, cleaner comedown than MDMA unless redosed."
    }
  },
  "ethylone": {
    "physicalFormLabel": "White/Tan Powder",
    "physicalAppearance": "Off-white crystalline powder.",
    "recreationalFeel": "A gentler, calmer cousin of methylone with a warm body buzz and sociable mood lift lasting 3–4 hours.",
    "subjectiveTags": [
      "Mellow Empathic Buzz",
      "Gentle Social Warmth",
      "3–4 Hour Duration",
      "Moderate Jaw Tension"
    ],
    "phases": {
      "onsetFeel": "30-minute warm body tingle.",
      "peakFeel": "Relaxed, talkative contentment.",
      "comedownFeel": "Smooth 2-hour fade."
    }
  },
  "butylone": {
    "physicalFormLabel": "White Crystalline Powder",
    "physicalAppearance": "Fine white crystalline powder.",
    "recreationalFeel": "Starts with a 2-hour warm, chatty empathogenic lift followed by 2–3 hours of clean, focused stimulant alertness.",
    "subjectiveTags": [
      "Warm 2-Hour Empathic Peak",
      "Crisp Stimulant Tail",
      "Enhanced Music Appreciation",
      "3–5 Hour Total Arc"
    ],
    "phases": {
      "onsetFeel": "30-minute lift in mood and energy.",
      "peakFeel": "Chatty, warm euphoria with alert focus.",
      "comedownFeel": "Lingering 2-hour wakefulness."
    }
  },
  "pentylone": {
    "physicalFormLabel": "White Crystalline Powder",
    "physicalAppearance": "White crystalline powder.",
    "recreationalFeel": "Acts much more like a sharp, fast-acting stimulant than an empathogen, giving a strong rush of alertness and energy with a long residual tail.",
    "subjectiveTags": [
      "Sharp NDRI Energy Rush",
      "Alert Focus & Drive",
      "Minimal Serotonergic Softness",
      "Long Residual Stimulation"
    ],
    "phases": {
      "onsetFeel": "15–30 minute surge of energy.",
      "peakFeel": "Intense, focused stimulation and talkativeness.",
      "comedownFeel": "Prolonged jittery wakefulness."
    }
  },
  "ephylone": {
    "physicalFormLabel": "Yellowish/Tan Crystalline Rocks",
    "physicalAppearance": "Tan or yellowish crystalline chunks often sold as MDMA.",
    "recreationalFeel": "Delivers an intense, rushing 2-hour stimulant peak followed by 6–10 hours of relentless, heart-pounding wakefulness—very dangerous if mistaken for MDMA at 100+ mg doses.",
    "subjectiveTags": [
      "Potent 10–30 mg Active Range",
      "Intense Initial Dopamine Rush",
      "Long 8–12 Hour Residual Wakefulness",
      "High Anxiety Risk if Overdosed"
    ],
    "phases": {
      "onsetFeel": "20-minute surge of heart rate and alertness.",
      "peakFeel": "High-energy stimulation and euphoria.",
      "comedownFeel": "Long, wired 6+ hour tail with insomnia."
    }
  },
  "hexedrone": {
    "physicalFormLabel": "White Powder",
    "physicalAppearance": "Fine white crystalline powder.",
    "recreationalFeel": "Produces a clean, short-lived cocaine-like rush of alertness and chatty focus lasting 1.5–3 hours.",
    "subjectiveTags": [
      "Clean NDRI Alertness",
      "Fast Nasal Onset",
      "1.5–3 Hour Duration",
      "Mild Euphoric Lift"
    ],
    "phases": {
      "onsetFeel": "5-minute nasal lift.",
      "peakFeel": "Focused, talkative energy.",
      "comedownFeel": "2-hour taper."
    }
  },
  "hexen": {
    "physicalFormLabel": "Fluffy White Crystalline Needles",
    "physicalAppearance": "Fluffy white needle-like crystals.",
    "recreationalFeel": "Produces an immediate, numbing, cocaine-like rush of confidence and dopaminergic euphoria for 45–60 minutes, followed by a lingering wired feeling that resists further redosing.",
    "subjectiveTags": [
      "Fast Cocaine-Like Rush & Numbing",
      "45–60 Min Peak Euphoria",
      "Rapid Tolerance Ceiling",
      "Caustic Nasal Burn"
    ],
    "phases": {
      "onsetFeel": "2–4 minute rush with slight throat numbing.",
      "peakFeel": "Intense, chatty, confident dopaminergic peak.",
      "comedownFeel": "2–3 hours of residual heart-rate elevation."
    }
  },
  "pentedrone": {
    "physicalFormLabel": "White Crystalline Powder",
    "physicalAppearance": "White crystalline powder.",
    "recreationalFeel": "A brisk, functional-to-euphoric NDRI stimulant with a 2–3 hour arc.",
    "subjectiveTags": [
      "Crisp NDRI Focus",
      "Fast Onset",
      "2–3 Hour Duration",
      "Zero Serotonergic Crash"
    ],
    "phases": {
      "onsetFeel": "5–10 minute lift.",
      "peakFeel": "Alert, energetic stimulation.",
      "comedownFeel": "Gradual 2-hour fade."
    }
  },
  "nep": {
    "physicalFormLabel": "Translucent White Crystals",
    "physicalAppearance": "Translucent white/clear crystal chunks.",
    "recreationalFeel": "Often described as a smoother, less jittery version of Hexen or Cocaine—delivering a warm, confident, laser-focused dopaminergic high for 90–120 minutes.",
    "subjectiveTags": [
      "Smoother Dopamine Rush than Hexen",
      "Clean Confident Focus",
      "90–120 Minute Peak",
      "High Redose Compulsion"
    ],
    "phases": {
      "onsetFeel": "2–5 minute smooth wave of alertness and mood lift.",
      "peakFeel": "Calm yet powerful dopaminergic confidence and sociability.",
      "comedownFeel": "Moderate 2-hour adrenergic taper."
    }
  },
  "mdpv": {
    "physicalFormLabel": "Fine White to Tan Hygroscopic Powder",
    "physicalAppearance": "Fine white to ivory/tan powder with a characteristic earthy odor.",
    "recreationalFeel": "At 2–5 mg, produces a razor-sharp, hyper-alert dopaminergic rush; however, redosing quickly spirals into intense paranoia, shadow hallucinations, and racing heart.",
    "subjectiveTags": [
      "Milligram-Potency NDRI (2–5 mg)",
      "Intense Dopaminergic Rush",
      "Severe Paranoia & Insomnia Risk",
      "Extreme Redose Compulsion"
    ],
    "phases": {
      "onsetFeel": "2–5 minute jolt of hyper-vigilance and rush.",
      "peakFeel": "1.5–2.5 hours of intense stimulation and focus.",
      "comedownFeel": "4+ hours of heavy anxiety, vasoconstriction, and cravings."
    }
  },
  "alpha-pvp": {
    "physicalFormLabel": "Pink/White Translucent Crystalline Gravel",
    "physicalAppearance": "White or pink crystalline chunks (\"Gravel\") with a strong pyrrolidine odor.",
    "recreationalFeel": "Hits within seconds when vaporized or minutes nasally with an overwhelming surge of dopaminergic euphoria and power, followed by intense fiending and rapid paranoia if redosed.",
    "subjectiveTags": [
      "1–5 mg Ultra-Potent Range",
      "Instantaneous Dopamine Surge",
      "Severe Paranoid Psychosis Risk",
      "Extreme Vaporized Addiction Liability"
    ],
    "phases": {
      "onsetFeel": "Seconds (vaped) or 3 min (nasal) into an electric rush.",
      "peakFeel": "60–90 minutes of intense euphoria and hyper-stimulation.",
      "comedownFeel": "Harsh, anxious crash with fierce cravings."
    }
  },
  "alpha-php": {
    "physicalFormLabel": "Crystalline Chunks or Tan Powder",
    "physicalAppearance": "Translucent tan or off-white crystalline chunks.",
    "recreationalFeel": "Closely mirrors alpha-PVP with a powerful 60-minute dopaminergic rush and heavy residual vasoconstriction.",
    "subjectiveTags": [
      "2.5–10 mg Potent Active Range",
      "Fierce Dopaminergic Rush",
      "High Vasoconstriction",
      "Compulsive Redosing"
    ],
    "phases": {
      "onsetFeel": "1–5 minute rapid onset.",
      "peakFeel": "1–2 hours of intense stimulation.",
      "comedownFeel": "3–4 hours of residual jitteriness."
    }
  },
  "alpha-pihp": {
    "physicalFormLabel": "White/Off-White Clumpy Powder",
    "physicalAppearance": "Clumpy white crystalline powder with a strong spermatic/pyrrolidine scent.",
    "recreationalFeel": "Produces a sharp, rushing dopaminergic high with slightly less peripheral jitteriness than straight-chain alpha-PVP at low doses, but equally compulsive.",
    "subjectiveTags": [
      "Strong Dopaminergic Rush",
      "2.5–10 mg Potency",
      "Fast 60–90 Min Peak",
      "High Binge Risk"
    ],
    "phases": {
      "onsetFeel": "2–5 minute rush.",
      "peakFeel": "60–90 minutes of intense focus and euphoria.",
      "comedownFeel": "2–3 hour wired comedown."
    }
  },
  "mdphp": {
    "physicalFormLabel": "Tan to Brown Powder",
    "physicalAppearance": "Tan or sandy-brown crystalline powder.",
    "recreationalFeel": "Delivers a heavy, long-lasting dopaminergic rush similar to MDPV with a 4–7 hour total arc.",
    "subjectiveTags": [
      "3–15 mg Active Range",
      "Strong Dopaminergic Rush",
      "4–7 Hour Duration",
      "High Paranoia Risk on Redose"
    ],
    "phases": {
      "onsetFeel": "5–15 minute rapid onset.",
      "peakFeel": "2 hours of intense stimulation.",
      "comedownFeel": "3–4 hours of residual wakefulness."
    }
  },
  "mdpbp": {
    "physicalFormLabel": "Off-White Powder",
    "physicalAppearance": "Off-white crystalline powder.",
    "recreationalFeel": "A shorter, slightly milder cousin of MDPV lasting 3–4 hours.",
    "subjectiveTags": [
      "5–20 mg Active Range",
      "Brisk NDRI Focus",
      "3–4 Hour Duration",
      "Vasoconstriction"
    ],
    "phases": {
      "onsetFeel": "5–15 minute onset.",
      "peakFeel": "90-minute stimulant peak.",
      "comedownFeel": "2-hour taper."
    }
  },
  "alpha-pcyp": {
    "physicalFormLabel": "White Crystalline Solid",
    "physicalAppearance": "Dense white crystalline chunks.",
    "recreationalFeel": "Produces a long, laser-focused, heavy dopaminergic stimulation with less immediate rush than alpha-PVP but a longer 5-hour plateau.",
    "subjectiveTags": [
      "3–12 mg Potent Range",
      "Long 4–7 Hour Plateau",
      "Intense Laser Focus",
      "Strong Vasoconstriction"
    ],
    "phases": {
      "onsetFeel": "5–15 minute climb.",
      "peakFeel": "2–3 hours of heavy dopaminergic focus.",
      "comedownFeel": "3-hour wired comedown."
    }
  },
  "2-fa": {
    "physicalFormLabel": "White Crystalline HCl/Sulfate Powder",
    "physicalAppearance": "Fine white crystalline powder.",
    "recreationalFeel": "Often praised as a short-acting, clean, no-nonsense cousin of Dexedrine—delivering 4 hours of crisp productivity and upbeat sociability with minimal hangover.",
    "subjectiveTags": [
      "Crisp 4-Hour Productivity",
      "Clean Dopamine/NE Focus",
      "Minimal Comedown",
      "Fast 20-Minute Onset"
    ],
    "phases": {
      "onsetFeel": "20-minute clean lift in focus.",
      "peakFeel": "2.5 hours of clear, motivated concentration.",
      "comedownFeel": "Smooth 1-hour return to baseline."
    }
  },
  "3-fa": {
    "physicalFormLabel": "White Crystalline Powder",
    "physicalAppearance": "Fine white powder.",
    "recreationalFeel": "More euphoric and recreational than 2-FA, bridged between pure dextroamphetamine and a light touch of warm sociability for 5–6 hours.",
    "subjectiveTags": [
      "Strong Dopaminergic Euphoria",
      "Chatty Confident Drive",
      "5–7 Hour Duration",
      "Clean Mental Clarity"
    ],
    "phases": {
      "onsetFeel": "20–30 minute warm dopaminergic rush.",
      "peakFeel": "3–4 hours of upbeat euphoria and focus.",
      "comedownFeel": "Gradual 2-hour taper."
    }
  },
  "4-fa": {
    "physicalFormLabel": "White Crystalline Powder or Pressed Pills",
    "physicalAppearance": "White powder or capsules.",
    "recreationalFeel": "Famous for its unique two-act arc: the first 3 hours feel like a clear-headed, joyful, affectionate MDMA roll, which seamlessly transitions into 4 hours of clean, upbeat amphetamine energy.",
    "subjectiveTags": [
      "3-Hour Warm Serotonergic Roll",
      "4-Hour Clean Amphetamine Tail",
      "Clear-Headed Social Bliss",
      "Less Serotonin Hangover than MDMA"
    ],
    "phases": {
      "onsetFeel": "30–45 minute warm tingling wave.",
      "peakFeel": "3 hours of affectionate, music-loving entactogenic euphoria.",
      "comedownFeel": "3–4 hours of clean stimulant alertness tapering smoothly."
    }
  },
  "2-fma": {
    "physicalFormLabel": "White Crystalline Powder",
    "physicalAppearance": "Fine white crystalline shards or powder.",
    "recreationalFeel": "Renowned as the \"gold standard\" functional research stimulant: delivers 7–9 hours of calm, laser-sharp concentration and stamina similar to Vyvanse with minimal distraction or crash.",
    "subjectiveTags": [
      "7–9 Hour Smooth Vyvanse-Like Focus",
      "Low Distraction / Low Rush",
      "Steady Task Endurance",
      "Gentle Comedown"
    ],
    "phases": {
      "onsetFeel": "30-minute quiet, steady clearing of fatigue.",
      "peakFeel": "5–6 hours of level, unhurried productivity.",
      "comedownFeel": "Gradual evening taper."
    }
  },
  "3-fma": {
    "physicalFormLabel": "White Crystalline Powder",
    "physicalAppearance": "White crystalline powder.",
    "recreationalFeel": "Significantly more euphoric and recreational than 2-FMA, offering a strong 8–10 hour wave of confidence, stamina, and upbeat mood.",
    "subjectiveTags": [
      "Strong Dopaminergic Euphoria",
      "8–11 Hour Duration",
      "High Social & Physical Stamina",
      "Lingering Wakefulness"
    ],
    "phases": {
      "onsetFeel": "25-minute warm rush of energy.",
      "peakFeel": "5 hours of strong, confident stimulation.",
      "comedownFeel": "3–4 hours of residual alertness."
    }
  },
  "4-fma": {
    "physicalFormLabel": "White Crystalline Powder or Pellets",
    "physicalAppearance": "White powder or pressed tablets.",
    "recreationalFeel": "Feels like a heavier, sweatier, more intense version of 4-FA with strong eye-wiggles, warm rolling euphoria, and powerful stimulation.",
    "subjectiveTags": [
      "Intense Serotonin + Dopamine Roll",
      "Strong Eye Wiggles & Body Rush",
      "6–9 Hour Duration",
      "Heavy Jaw Tension"
    ],
    "phases": {
      "onsetFeel": "30-minute warm serotonergic surge.",
      "peakFeel": "4 hours of intense, energetic rolling euphoria.",
      "comedownFeel": "3-hour stimulated tail and tired next day."
    }
  },
  "2-fea": {
    "physicalFormLabel": "White Crystalline Powder",
    "physicalAppearance": "White crystalline powder.",
    "recreationalFeel": "Provides a mild, focused 4–5 hour boost in alertness and mood.",
    "subjectiveTags": [
      "Clean Alertness",
      "4–6 Hour Duration",
      "Mild Euphoria",
      "Smooth Taper"
    ],
    "phases": {
      "onsetFeel": "25-minute onset.",
      "peakFeel": "3 hours of clean focus.",
      "comedownFeel": "Smooth fade."
    }
  },
  "3-fea": {
    "physicalFormLabel": "White Crystalline Powder",
    "physicalAppearance": "Fine white powder.",
    "recreationalFeel": "Surprisingly warm and roly-poly: feels like a cozy, couch-melting serotonergic roll with gentle visual softness for 5 hours.",
    "subjectiveTags": [
      "Warm Cozy Serotonin Roll",
      "Relaxed Body Melt",
      "4.5–7 Hour Duration",
      "Soft Comedown"
    ],
    "phases": {
      "onsetFeel": "30-minute warm flush.",
      "peakFeel": "3 hours of peaceful, affectionate serotonergic bliss.",
      "comedownFeel": "Calm 2-hour fade."
    }
  },
  "4-fea": {
    "physicalFormLabel": "White Crystalline Powder",
    "physicalAppearance": "White powder.",
    "recreationalFeel": "Produces a dreamy, heavy-eyelids serotonergic glow with minimal stimulant push.",
    "subjectiveTags": [
      "Dreamy Serotonergic Glow",
      "Heavy Physical Relaxation",
      "5–6 Hour Duration",
      "Low Adrenergic Push"
    ],
    "phases": {
      "onsetFeel": "35-minute warm wave.",
      "peakFeel": "3 hours of sleepy, warm contentment.",
      "comedownFeel": "Gentle taper."
    }
  },
  "pma": {
    "physicalFormLabel": "Counterfeit Pressed Tablets or Cream Powder",
    "physicalAppearance": "Often found in counterfeit ecstasy tablets; detected via Marquis/Simon/Robadope reagent testing.",
    "recreationalFeel": "Produces a slow, uncomfortable, drunken warmth with minimal euphoria, rapidly escalating into profuse sweating, pounding blood pressure, and life-threatening overheating.",
    "subjectiveTags": [
      "Lethal Counterfeit Ecstasy Adulterant",
      "Delayed 60–90 Min Onset",
      "Severe Hyperthermia & MAO-A Blockade",
      "Minimal Euphoria vs High Toxicity"
    ],
    "phases": {
      "onsetFeel": "Delayed 60–90 minute onset of dizziness and heat.",
      "peakFeel": "Uncomfortable sweating, muscle rigidity, and blood pressure spike.",
      "comedownFeel": "Prolonged autonomic exhaustion."
    }
  },
  "pmma": {
    "physicalFormLabel": "Counterfeit Pressed Ecstasy Tablets",
    "physicalAppearance": "Found in adulterated ecstasy pills.",
    "recreationalFeel": "Produces a delayed, muted serotonergic heaviness accompanied by dangerous core body temperature elevation and cardiovascular strain.",
    "subjectiveTags": [
      "High-Risk Ecstasy Adulterant",
      "Delayed Onset Trap",
      "Simultaneous SERT Release + MAO-A Inhibition",
      "Narrow Therapeutic Index"
    ],
    "phases": {
      "onsetFeel": "Delayed 60-minute wave of heat and nausea.",
      "peakFeel": "Heavy serotonergic intoxication with overheating risk.",
      "comedownFeel": "Slow, toxic recovery."
    }
  },
  "4-ma": {
    "physicalFormLabel": "White/Yellowish Paste or Powder",
    "physicalAppearance": "Often found as an adulterant in illicit amphetamine paste.",
    "recreationalFeel": "Initially feels like a warm, serotonergic amphetamine before escalating into dangerous overheating and blood pressure elevation.",
    "subjectiveTags": [
      "High Hyperthermia Risk",
      "Potent Serotonin + Dopamine Efflux",
      "MAO-A Inhibition",
      "Dangerous Speed Adulterant"
    ],
    "phases": {
      "onsetFeel": "30–45 minute warm flush.",
      "peakFeel": "Heavy serotonergic and adrenergic stimulation.",
      "comedownFeel": "Prolonged hyperthermic strain."
    }
  },
  "4-mta": {
    "physicalFormLabel": "Pressed Tablets or Off-White Powder",
    "physicalAppearance": "Pressed tablets (\"Flatliners\") or off-white powder.",
    "recreationalFeel": "Produces a slow, deceptively mild onset that suddenly triggers overwhelming serotonergic flooding, profuse sweating, nystagmus, and life-threatening hyperthermia.",
    "subjectiveTags": [
      "Potent MAO-A Inhibitor + SERT Releaser",
      "Severe Serotonin Syndrome Risk",
      "Slow Deceptive Onset",
      "High Fatality Rate"
    ],
    "phases": {
      "onsetFeel": "Delayed 60–90 minute onset.",
      "peakFeel": "Intense serotonergic flooding and hyperthermia.",
      "comedownFeel": "Prolonged toxic recovery."
    }
  },
  "bzp": {
    "physicalFormLabel": "White Alkaline Powder or Party Pills",
    "physicalAppearance": "Caustic, bitter white powder or capsules.",
    "recreationalFeel": "Produces a buzzy, jittery, physical amphetamine-like stimulation for 5–7 hours, often accompanied by a racing heart and a notorious next-day headache.",
    "subjectiveTags": [
      "Jittery Physical Energy",
      "5–8 Hour Wakefulness",
      "Frequent Comedown Headache",
      "Caustic Nasal Burn"
    ],
    "phases": {
      "onsetFeel": "40-minute build of jittery alertness.",
      "peakFeel": "3–4 hours of talkative, physical stimulation.",
      "comedownFeel": "Lingering insomnia and throbbing headache risk."
    }
  },
  "tfmpp": {
    "physicalFormLabel": "Pressed Tablets or White Powder",
    "physicalAppearance": "Usually combined with BZP in pressed tablets.",
    "recreationalFeel": "Alone it feels dreamy, shivery, and slightly psychedelic; combined with BZP it creates a rough, synthetic approximation of an MDMA roll.",
    "subjectiveTags": [
      "Mild Visual Shimmer",
      "Serotonergic Body Warmth/Chills",
      "Frequent Nausea & Migraine",
      "5–8 Hour Duration"
    ],
    "phases": {
      "onsetFeel": "45–60 minute onset with stomach queasiness.",
      "peakFeel": "Warm, slightly trippy serotonergic buzz.",
      "comedownFeel": "Heavy fatigue and headache risk."
    }
  },
  "mcpp": {
    "physicalFormLabel": "Adulterated Tablets or White Powder",
    "physicalAppearance": "White crystalline powder.",
    "recreationalFeel": "Produces a dizzy, shivery, semi-psychedelic serotonergic intoxication often marred by anxiety, hot/cold flashes, and a severe throbbing migraine.",
    "subjectiveTags": [
      "Dizzy Serotonergic Intoxication",
      "High 5-HT2C Anxiety & Nausea",
      "Severe Throbbing Migraine Risk",
      "Active Trazodone Metabolite"
    ],
    "phases": {
      "onsetFeel": "45-minute wave of dizziness and warmth.",
      "peakFeel": "Heavy, disorienting serotonergic buzz.",
      "comedownFeel": "Protracted migraine headache."
    }
  },
  "meopp": {
    "physicalFormLabel": "White Crystalline Powder",
    "physicalAppearance": "White crystalline powder.",
    "recreationalFeel": "The gentlest piperazine, offering a mellow, warm mood lift with far less anxiety or nausea than mCPP.",
    "subjectiveTags": [
      "Mild Serotonergic Warmth",
      "Lower Anxiety than mCPP",
      "4–6 Hour Duration",
      "Light Tactile Enhancement"
    ],
    "phases": {
      "onsetFeel": "45-minute gentle onset.",
      "peakFeel": "Mellow, relaxed mood lift.",
      "comedownFeel": "Smooth fade."
    }
  },
  "pfpp": {
    "physicalFormLabel": "White Powder",
    "physicalAppearance": "White powder.",
    "recreationalFeel": "Produces a dreamy, floaty serotonergic headspace with mild color enhancement.",
    "subjectiveTags": [
      "Dreamy Floaty Headspace",
      "Subtle Color Brightening",
      "4–6 Hour Duration",
      "Mild Nausea Risk"
    ],
    "phases": {
      "onsetFeel": "45-minute onset.",
      "peakFeel": "Warm, slightly trippy relaxation.",
      "comedownFeel": "Gentle comedown."
    }
  },
  "dexmethylphenidate": {
    "physicalFormLabel": "Blue/Yellow/White Focalin Tablets &XR Beads",
    "physicalAppearance": "Small scored tablets or bead-filled XR capsules.",
    "recreationalFeel": "Feels cleaner, sharper, and twice as potent per milligram as standard Ritalin, delivering a brisk 3.5-hour wave of laser concentration and confidence.",
    "subjectiveTags": [
      "2× Potency vs Racemic Ritalin",
      "Cleaner Dopaminergic Focus",
      "Fast 20-Minute Onset",
      "3–5 Hour Crisp Duration"
    ],
    "phases": {
      "onsetFeel": "15–25 minute sharp clearing of mental fog.",
      "peakFeel": "2–3 hours of crisp, motivated productivity.",
      "comedownFeel": "Brisk 1-hour drop-off."
    }
  },
  "ethylphenidate": {
    "physicalFormLabel": "Clear/White Crystalline Shards",
    "physicalAppearance": "Sharp translucent crystalline shards.",
    "recreationalFeel": "More euphoric and cocaine-like than Ritalin due to its higher dopamine selectivity, delivering a brisk 90-minute rush of chatty confidence, though notorious for burning the nose.",
    "subjectiveTags": [
      "Higher Dopamine Selectivity than Ritalin",
      "Brisk 90-Minute Euphoric Peak",
      "Severe Nasal Burn if Snorted",
      "Formed In Vivo by Ritalin + Alcohol"
    ],
    "phases": {
      "onsetFeel": "5–15 minute sharp rush.",
      "peakFeel": "60–90 minutes of upbeat, chatty focus.",
      "comedownFeel": "Abrupt 1-hour crash calling for redosing."
    }
  },
  "isopropylphenidate": {
    "physicalFormLabel": "White Crystalline Powder",
    "physicalAppearance": "Fine white powder.",
    "recreationalFeel": "The most purely functional member of the phenidate family: provides 5–7 hours of quiet, clear-headed focus with almost zero heart-racing or crash.",
    "subjectiveTags": [
      "Very Low Norepinephrine Jitters",
      "5–7 Hour Smooth Focus",
      "Minimal Euphoria or Crash",
      "Gentle Nasal/Oral Profile"
    ],
    "phases": {
      "onsetFeel": "30-minute subtle clearing of distraction.",
      "peakFeel": "4–5 hours of calm, steady concentration.",
      "comedownFeel": "Seamless return to baseline."
    }
  },
  "4f-mph": {
    "physicalFormLabel": "Fine White Crystalline Powder or 15mg Pellets",
    "physicalAppearance": "Fine white powder or pressed pellets.",
    "recreationalFeel": "Feels like \"super-charged Ritalin XR\": 5–10 mg locks you into 7–8 hours of intense, robotic task absorption, though redosing leaves you wired long into the night.",
    "subjectiveTags": [
      "3.3× Potency vs Ritalin",
      "7–9 Hour Robotic Task Focus",
      "2.5–10 mg Active Range",
      "Long Residual Insomnia Tail"
    ],
    "phases": {
      "onsetFeel": "25-minute sharp rise in alertness.",
      "peakFeel": "5 hours of intense, unbreakable concentration.",
      "comedownFeel": "3–4 hours of wired residual stimulation."
    }
  },
  "3-4-ctmp": {
    "physicalFormLabel": "White Crystalline Powder",
    "physicalAppearance": "White powder.",
    "recreationalFeel": "A marathon 12–16 hour NDRI active at just 1–4 mg; feels cold, robotic, and relentlessly wakeful.",
    "subjectiveTags": [
      "1–4 mg Milligram Potency",
      "10–16 Hour Marathon Duration",
      "Slow 60–90 Min Onset",
      "High Overdose/Insomnia Risk"
    ],
    "phases": {
      "onsetFeel": "60-minute gradual build.",
      "peakFeel": "8+ hours of rigid, persistent wakefulness.",
      "comedownFeel": "Slow 6-hour taper."
    }
  },
  "hdmp-28": {
    "physicalFormLabel": "Off-White Crystalline Powder",
    "physicalAppearance": "Off-white powder.",
    "recreationalFeel": "Unlike standard phenidates, its SERT blockade adds a warm, slightly serene emotional cushion to a 4–5 hour stimulant focus.",
    "subjectiveTags": [
      "Rare Triple Reuptake Inhibitor (SNDRI)",
      "Warm Mood Lift + Focus",
      "4–6 Hour Duration",
      "Caustic if Snorted"
    ],
    "phases": {
      "onsetFeel": "25-minute warm lift.",
      "peakFeel": "3 hours of calm, focused stimulation.",
      "comedownFeel": "2-hour taper."
    }
  },
  "desoxypipradrol": {
    "physicalFormLabel": "White Crystalline Powder",
    "physicalAppearance": "Fine white powder.",
    "recreationalFeel": "Active at just 0.5–2 mg: locks the brain into 24+ hours of wide-awake alertness that refuses to shut off at night.",
    "subjectiveTags": [
      "500 µg – 2 mg Micro-Potency",
      "20–36 Hour Duration from One Dose",
      "Immune to Esterase Breakdown",
      "High Multi-Day Insomnia Risk"
    ],
    "phases": {
      "onsetFeel": "45-minute subtle rise in alertness.",
      "peakFeel": "12–18 hours of unyielding wakefulness.",
      "comedownFeel": "Very slow 12-hour fade."
    }
  },
  "modafinil": {
    "physicalFormLabel": "White Oblong Scored 100/200mg Tablets",
    "physicalAppearance": "White capsule-shaped scored tablets (Modafinil 100/200 mg) with characteristic sulfur urine odor.",
    "recreationalFeel": "Does not feel like a \"high\"—instead, it feels like you suddenly got 9 hours of perfect sleep: fatigue switches off for 12 hours, allowing sustained deep work without jitteriness or crash.",
    "subjectiveTags": [
      "Zero Classical Stimulant Rush",
      "10–14 Hour Fatigue Erasure",
      "Clear-Headed Executive Focus",
      "Minimal Rebound Crash"
    ],
    "phases": {
      "onsetFeel": "60-minute quiet disappearance of sleepiness.",
      "peakFeel": "8–10 hours of crisp, Tireless mental stamina.",
      "comedownFeel": "Gradual evening return to natural sleepiness."
    }
  },
  "armodafinil": {
    "physicalFormLabel": "White Round/Oval Nuvigil 150mg Tablets",
    "physicalAppearance": "White oval tablets imprinted with C 150 or Waklert.",
    "recreationalFeel": "Slightly sharper and longer-lasting in the late afternoon than racemic Modafinil, requiring only 75–150 mg for a full 14-hour day of wakefulness.",
    "subjectiveTags": [
      "1.5× Potency vs Racemic Modafinil",
      "Stronger Late-Afternoon Stamina",
      "12–15 Hour Clean Wakefulness",
      "Zero Euphoric Crash"
    ],
    "phases": {
      "onsetFeel": "45–60 minute crisp onset.",
      "peakFeel": "10+ hours of laser-steady wakefulness.",
      "comedownFeel": "Slow evening fade."
    }
  },
  "cyclazodone": {
    "physicalFormLabel": "Fine White Crystalline Powder",
    "physicalAppearance": "Fine white crystalline powder.",
    "recreationalFeel": "Bridges the gap between Modafinil and Amphetamine: 10–25 mg delivers a surprisingly strong, motivated, 7-hour drive without amphetamine jitters.",
    "subjectiveTags": [
      "Stronger Motivation than Modafinil",
      "6–10 Hour Clean Focus",
      "5–25 mg Active Range",
      "Pemoline-Class Liver Warning"
    ],
    "phases": {
      "onsetFeel": "35-minute build of motivation and clarity.",
      "peakFeel": "5 hours of strong, focused task drive.",
      "comedownFeel": "Gradual 2-hour taper."
    }
  },
  "n-methylcyclazodone": {
    "physicalFormLabel": "White Powder",
    "physicalAppearance": "White crystalline powder.",
    "recreationalFeel": "Smoother and longer-lasting than Cyclazodone, providing a 10–12 hour background drive.",
    "subjectiveTags": [
      "9–14 Hour Extended Duration",
      "Smooth Prodrug Curve",
      "Steady Task Endurance",
      "Avoid Chronic Daily Use"
    ],
    "phases": {
      "onsetFeel": "60-minute smooth onset.",
      "peakFeel": "7–9 hours of steady focus.",
      "comedownFeel": "Slow evening fade."
    }
  },
  "pemoline": {
    "physicalFormLabel": "White/Yellow Scored Cylert Tablets",
    "physicalAppearance": "Small scored tablets (18.75 / 37.5 / 75 mg).",
    "recreationalFeel": "Produces a remarkably calm, non-jittery, peripheral-sparing mental focus over 8–10 hours.",
    "subjectiveTags": [
      "Minimal Heart Rate Elevation",
      "8–12 Hour Calm Focus",
      "Slow 1–2 Hour Onset",
      "Historical Hepatotoxicity Warning"
    ],
    "phases": {
      "onsetFeel": "60–90 minute gradual onset.",
      "peakFeel": "6–8 hours of calm concentration.",
      "comedownFeel": "Gentle fade."
    }
  },
  "dimethocaine": {
    "physicalFormLabel": "White Crystalline Powder",
    "physicalAppearance": "Fluffy white powder.",
    "recreationalFeel": "Numbs the nose and throat heavily like benzocaine while delivering a short, 30–45 minute cocaine-lite rush.",
    "subjectiveTags": [
      "Strong Local Numbing",
      "30–45 Minute Short Rush",
      " ~30% Cocaine Potency",
      "High Sodium-Channel Cardiotoxicity"
    ],
    "phases": {
      "onsetFeel": "3-minute onset with heavy numbing.",
      "peakFeel": "30–45 minutes of mild cocaine-like euphoria.",
      "comedownFeel": "Quick 45-minute crash."
    }
  },
  "troparil": {
    "physicalFormLabel": "White Crystalline Powder",
    "physicalAppearance": "Fine white crystalline powder.",
    "recreationalFeel": "Feels like clean, long-acting cocaine without the nasal numbing: 10–25 mg produces 4 hours of smooth, confident dopaminergic euphoria.",
    "subjectiveTags": [
      "3–5× Potency vs Cocaine",
      "4–6 Hour Duration",
      "Lacks Sodium-Channel Numbing/Cardiotoxicity",
      "High Dopaminergic Euphoria"
    ],
    "phases": {
      "onsetFeel": "5–10 minute smooth rush.",
      "peakFeel": "3 hours of confident, cocaine-like euphoria.",
      "comedownFeel": "Gradual 2-hour taper."
    }
  },
  "rti-111": {
    "physicalFormLabel": "White Crystalline Powder",
    "physicalAppearance": "Fine white powder.",
    "recreationalFeel": "A long-lasting, potent phenyltropane that blends cocaine-like drive with serotonergic warmth over 5–7 hours.",
    "subjectiveTags": [
      "Sub-Nanomolar DAT/SERT Affinity",
      "5–8 Hour Duration",
      "5–20 mg Active Range",
      "Severe Nasal Burn"
    ],
    "phases": {
      "onsetFeel": "15-minute gradual climb.",
      "peakFeel": "4 hours of strong, confident stimulation.",
      "comedownFeel": "2.5-hour comedown."
    }
  },
  "rti-121": {
    "physicalFormLabel": "White Crystalline Solid",
    "physicalAppearance": "White crystalline powder.",
    "recreationalFeel": "Delivers a slow-building, ultra-pure dopaminergic focus and drive lasting 6–10 hours.",
    "subjectiveTags": [
      "Ultra-Selective Pure DAT Blocker",
      "6–10 Hour Duration",
      "Slow Smooth Onset",
      "5–15 mg Active Range"
    ],
    "phases": {
      "onsetFeel": "30-minute gradual onset.",
      "peakFeel": "5 hours of pure dopaminergic focus.",
      "comedownFeel": "Slow 3-hour taper."
    }
  },
  "win-35428": {
    "physicalFormLabel": "White Crystalline Powder",
    "physicalAppearance": "White crystalline powder.",
    "recreationalFeel": "Produces a clean, potent, 4–5 hour cocaine-like high without local anesthetic toxicity.",
    "subjectiveTags": [
      "4–6× Potency vs Cocaine",
      "4–6 Hour Duration",
      "5–20 mg Active Range",
      "Clean Dopaminergic Euphoria"
    ],
    "phases": {
      "onsetFeel": "5–10 minute rush.",
      "peakFeel": "3 hours of confident euphoria.",
      "comedownFeel": "2-hour taper."
    }
  }
};
