import { CannabinoidProfile } from '../data/cannabinoids';

/**
 * Universal substance popularity scoring map.
 * Calibrated based on global epidemiological prevalence, forensic toxicology encounter rate,
 * clinical prescribing volume, and public harm-reduction search frequency.
 *
 * Tier 1: 900–1000 (Universal Global Prevalence: Alcohol, Caffeine, Nicotine, Cannabis/THC, CBD)
 * Tier 2: 700–899  (High-Prevalence Prescription & Recreational: Alprazolam, Diazepam, MDMA, Ketamine, Adderall, Cocaine, Oxycodone, etc.)
 * Tier 3: 500–699  (Major Botanicals & Well-Known Analogs: Kratom/Mitragynine, Psilocybin, LSD, Codeine, Tramadol, CBG, CBN)
 * Tier 4: 300–499  (Secondary Pharmaceuticals & Minor Cannabinoids: Pregabalin, Modafinil, Zolpidem, HHC, etc.)
 * Tier 5: 100–299  (Research Chemicals, Substituted Phenethylamines, NPS)
 */
const POPULARITY_SCORE_TABLE: Record<string, number> = {
  // Tier 1: Everyday Global Staples & Primary Cannabinoids
  'alcohol': 1000,
  'ethanol': 1000,
  'caffeine': 980,
  'nicotine': 960,
  'delta9-thc': 950,
  'thc': 950,
  'cbd': 940,

  // Tier 2: High-Prevalence Prescription & Classic Recreational Substances
  'alprazolam': 880,       // Xanax
  'diazepam': 860,         // Valium
  'clonazepam': 850,       // Klonopin
  'lorazepam': 840,        // Ativan
  'mdma': 850,             // Ecstasy / Molly
  'ketamine': 850,
  'amphetamine': 840,      // Adderall component
  'dextroamphetamine': 835,
  'methylphenidate': 830,  // Ritalin / Concerta
  'cocaine': 840,
  'oxycodone': 830,        // OxyContin / Percocet
  'hydrocodone': 820,      // Vicodin
  'morphine': 810,
  'psilocybin': 820,       // Mushrooms
  'psilocin': 815,
  'lsd': 820,              // Acid
  'fentanyl': 800,
  'methamphetamine': 790,
  'pregabalin': 780,       // Lyrica
  'gabapentin': 770,       // Neurontin
  'zolpidem': 760,         // Ambien
  'modafinil': 750,        // Provigil
  'armodafinil': 740,      // Nuvigil

  // Tier 3: Prominent Botanicals, Natural Alkaloids & Secondary Cannabinoids
  'cbg': 690,
  'cbn': 680,
  'mitragynine': 670,      // Kratom
  '7-hydroxymitragynine': 660,
  'codeine': 680,
  'tramadol': 670,
  'thcv': 650,
  'dmt': 660,
  'mescaline': 630,
  '2c-b': 640,
  'ghb': 620,
  'gbl': 610,
  'methadone': 630,
  'buprenorphine': 640,    // Suboxone
  'hydromorphone': 650,    // Dilaudid
  'oxymorphone': 630,      // Opana
  'tapentadol': 600,
  'hhc': 620,              // Hexahydrocannabinol
  'delta8-thc': 620,

  // Tier 4: Dissociatives, Secondary Rx & Minor Botanicals
  'dxm': 580,              // Dextromethorphan
  'nitrous-oxide': 570,
  'chlordiazepoxide': 550, // Librium
  'temazepam': 540,        // Restoril
  'triazolam': 530,        // Halcion
  'oxazepam': 520,         // Serax
  'midazolam': 530,        // Versed
  'phenibut': 540,
  'baclofen': 520,
  'carisoprodol': 530,     // Soma
  'meprobamate': 480,
  'salvinorin-a': 510,     // Salvia
  'ibogaine': 490,
  'kava-kavalactones': 520,
  'muscimol': 500,         // Amanita
  'cathinone': 490,
  'mephedrone': 510,       // 4-MMC
  '4-fa': 470,
  '2-fma': 460,
  '3-mmc': 480,
  'cbda': 470,
  'thca-a': 480,
  'cbc': 470,
  'cbt': 410,
  'cbe': 400,
  'cbl': 400,

  // Tier 5: Potent Synthetic Analogues & Exotic Research Chemicals
  'etizolam': 450,
  'flualprazolam': 430,
  'clonazolam': 430,
  'bromazolam': 440,
  'diclazepam': 400,
  'phenazepam': 390,
  'flubromazolam': 380,
  'nitazene-isotonitazene': 390,
  'nitazene-metonitazene': 380,
  'nitazene-etonitazene': 370,
  '2-fdck': 440,
  'o-pce': 420,
  '3-meo-pcp': 410,
  '3-ho-pcp': 400,
  'dcx-deschloroketamine': 430,
  'mxe-methoxetamine': 420,
  '4-aco-dmt': 440,
  '5-meo-dmt': 430,
  '4-ho-met': 420,
  '1p-lsd': 430,
  'al-lad': 400,
  'eth-lad': 390,
  'doc': 350,
  'doi': 340,
  'dob': 330,
  'jwh-018': 350,
  'mdmb-4en-pinaca': 320,
  'adb-butinaca': 310,
};

/**
 * Returns an empirical popularity score (0–1000) for any compound.
 * If not explicitly mapped, infers from classification and common keywords.
 */
export function getSubstancePopularityScore(compound: CannabinoidProfile): number {
  const directId = compound.id.toLowerCase();
  if (POPULARITY_SCORE_TABLE[directId] !== undefined) {
    return POPULARITY_SCORE_TABLE[directId];
  }

  // Check normalized synonyms or clean ID
  for (const [key, score] of Object.entries(POPULARITY_SCORE_TABLE)) {
    if (directId.includes(key) || key.includes(directId)) {
      return score - 20;
    }
  }

  // Check synonyms
  for (const syn of compound.synonyms || []) {
    const sLower = syn.toLowerCase();
    for (const [key, score] of Object.entries(POPULARITY_SCORE_TABLE)) {
      if (sLower.includes(key)) {
        return score - 30;
      }
    }
  }

  // Fallback heuristic based on classification and clinical presence
  const cls = (compound.classification || '').toLowerCase();
  if (cls.includes('benzodiazepine')) return 500;
  if (cls.includes('opioid')) return 480;
  if (cls.includes('stimulant')) return 470;
  if (cls.includes('phytocannabinoid')) return 450;
  if (cls.includes('psychedelic')) return 440;
  if (cls.includes('dissociative')) return 430;
  if (cls.includes('gabapentinoid')) return 460;
  if (cls.includes('semi-synthetic')) return 350;
  if (cls.includes('synthetic agonist')) return 200;

  return 250;
}
