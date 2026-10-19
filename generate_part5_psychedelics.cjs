const { writePartFile } = require('./generate_master_helper.cjs');

const part5Raw = [
  // --- Lysergamides ---
  ['lsd-25', 'LSD-25 (Lysergic Acid Diethylamide · Acid · Lucy)', 'LSD-25', ['Acid', 'Lucy', 'Lysergide', 'LSD'], 'Psychedelic / Hallucinogen', 'High', 'Lysergamides', 'Extreme Potency (Microgram Tier)',
    { subcategory: 'Lysergamides', potencyFactor: 100, scheduleStatus: 'Schedule I / Class A', routes: { sublingual: { threshold: '15 µg', light: '25-75 µg', common: '75-150 µg', strong: '150-300 µg', heavy: '300+ µg', onset: '20-60 min', peak: '2-3 hrs', duration: '8-12 hrs' } } },
    'Potent synthetic ergoline psychedelic discovered by Albert Hofmann in 1938. 5-HT2A receptor agonist causing profound sensory expansion, synesthesia, and cognitive restructuring.',
    { urineDetection: '1-3 days (low pg cutoff LC-MS)', halfLife: '3.6 - 5.1 hours' }
  ],
  ['1p-lsd', '1P-LSD (1-Propionyl-LSD)', '1P-LSD', ['1-Propionyl-d-lysergic acid diethylamide', '1P'], 'Psychedelic / Hallucinogen', 'High', 'Lysergamides', 'Extreme Potency (Microgram Tier)',
    { subcategory: 'Lysergamides', potencyFactor: 90, scheduleStatus: 'Controlled in several jurisdictions', routes: { sublingual: { threshold: '20 µg', light: '35-75 µg', common: '75-150 µg', strong: '150-300 µg', heavy: '300+ µg', onset: '30-70 min', peak: '2-3.5 hrs', duration: '8-12 hrs' } } },
    '1-Propionyl prodrug of LSD-25. Rapidly depropionylated in vivo into bioidentical LSD.',
    { urineDetection: '1-3 days', halfLife: '3.8 hours' }
  ],
  ['1cp-lsd', '1cP-LSD (1-Cyclopropanoyl-LSD · Curie)', '1cP-LSD', ['Curie', '1-Cyclopropanoyl-d-lysergic acid diethylamide'], 'Psychedelic / Hallucinogen', 'High', 'Lysergamides', 'Extreme Potency (Microgram Tier)',
    { subcategory: 'Lysergamides', potencyFactor: 95, scheduleStatus: 'Unscheduled in US, NPSG Germany regulated', routes: { sublingual: { threshold: '15 µg', light: '25-75 µg', common: '75-150 µg', strong: '150-250 µg', heavy: '250+ µg', onset: '25-60 min', peak: '2-3 hrs', duration: '8-12 hrs' } } },
    'N1-Cyclopropanoyl lysergamide prodrug delivering active LSD systemic exposure.',
    { urineDetection: '1-3 days', halfLife: '3.7 hours' }
  ],
  ['1b-lsd', '1B-LSD (1-Butyryl-LSD)', '1B-LSD', ['1-Butyryl-d-lysergic acid diethylamide'], 'Psychedelic / Hallucinogen', 'High', 'Lysergamides', 'High Potency',
    { subcategory: 'Lysergamides', potencyFactor: 75, scheduleStatus: 'Analog Act regulated', routes: { sublingual: { threshold: '25 µg', light: '50-100 µg', common: '100-200 µg', strong: '200-350 µg', heavy: '350+ µg', onset: '30-80 min', peak: '2.5-4 hrs', duration: '8-12 hrs' } } },
    '1-Butyryl homologue of LSD acting as a metabolic precursor.',
    { urineDetection: '1-3 days', halfLife: '4.0 hours' }
  ],
  ['1v-lsd', '1V-LSD (1-Valeroyl-LSD · Valerie)', '1V-LSD', ['Valerie', '1-Pentanoyl-LSD'], 'Psychedelic / Hallucinogen', 'High', 'Lysergamides', 'High Potency',
    { subcategory: 'Lysergamides', potencyFactor: 80, scheduleStatus: 'Regulated Germany/Japan', routes: { sublingual: { threshold: '30 µg', light: '50-110 µg', common: '110-180 µg', strong: '180-300 µg', heavy: '300+ µg', onset: '30-80 min', peak: '2-3.5 hrs', duration: '8-12 hrs' } } },
    '1-Valeroyl lipophilic prodrug of lysergic acid diethylamide.',
    { urineDetection: '1-3 days', halfLife: '4.2 hours' }
  ],
  ['ald-52', 'ALD-52 (1-Acetyl-LSD · Orange Sunshine)', 'ALD-52', ['Orange Sunshine', '1-Acetyl-LSD'], 'Psychedelic / Hallucinogen', 'High', 'Lysergamides', 'Extreme Potency (Microgram Tier)',
    { subcategory: 'Lysergamides', potencyFactor: 95, scheduleStatus: 'Schedule I analog', routes: { sublingual: { threshold: '20 µg', light: '35-75 µg', common: '75-150 µg', strong: '150-250 µg', heavy: '250+ µg', onset: '30-60 min', peak: '2-3 hrs', duration: '8-12 hrs' } } },
    'N1-Acetyl ergoline prodrug originally synthesized in Hofmann lab in 1958.',
    { urineDetection: '1-3 days', halfLife: '3.6 hours' }
  ],
  ['eth-lad', 'ETH-LAD (6-Ethyl-6-nor-LSD)', 'ETH-LAD', ['6-Ethyl-nor-lysergide', 'ETH-LAD'], 'Psychedelic / Hallucinogen', 'High', 'Lysergamides', 'Extreme Potency (Microgram Tier)',
    { subcategory: 'Lysergamides', potencyFactor: 115, scheduleStatus: 'Analog Act regulated', routes: { sublingual: { threshold: '12 µg', light: '20-60 µg', common: '60-120 µg', strong: '120-200 µg', heavy: '200+ µg', onset: '20-50 min', peak: '2-3.5 hrs', duration: '7-10 hrs' } } },
    '6-Ethyl homologue of LSD exhibiting higher direct 5-HT2A binding and intense visual geometry with steep dose-response.',
    { urineDetection: '1-3 days', halfLife: '3.8 hours' }
  ],
  ['al-lad', 'AL-LAD (6-Allyl-6-nor-LSD · Aladdin)', 'AL-LAD', ['Aladdin', '6-Allyl-LSD'], 'Psychedelic / Hallucinogen', 'High', 'Lysergamides', 'High Potency',
    { subcategory: 'Lysergamides', potencyFactor: 75, scheduleStatus: 'Analog Act regulated', routes: { sublingual: { threshold: '30 µg', light: '50-100 µg', common: '100-225 µg', strong: '225-350 µg', heavy: '350+ µg', onset: '20-45 min', peak: '2-3 hrs', duration: '6-9 hrs' } } },
    '6-Allyl ergoline with vibrant visual enhancement, shorter duration and reduced headload compared to LSD.',
    { urineDetection: '1-3 days', halfLife: '3.2 hours' }
  ],
  ['pro-lad', 'PRO-LAD (6-Propyl-6-nor-LSD)', 'PRO-LAD', ['6-Propyl-LSD'], 'Psychedelic / Hallucinogen', 'High', 'Lysergamides', 'High Potency',
    { subcategory: 'Lysergamides', potencyFactor: 70, scheduleStatus: 'Controlled analog', routes: { sublingual: { threshold: '35 µg', light: '60-120 µg', common: '120-200 µg', strong: '200-300 µg', heavy: '300+ µg', onset: '30-60 min', peak: '2-3.5 hrs', duration: '6-9 hrs' } } },
    '6-Propyl analogue first synthesized by Shulgin and Nichols.',
    { urineDetection: '1-3 days', halfLife: '3.5 hours' }
  ],
  ['lsz', 'LSZ (Dia-LSD · Lysergic Acid 2,4-Dimethylazetidide)', 'LSZ', ['Dia-LSD', 'LSZ'], 'Psychedelic / Hallucinogen', 'High', 'Lysergamides', 'Extreme Potency (Microgram Tier)',
    { subcategory: 'Lysergamides', potencyFactor: 90, scheduleStatus: 'Analog regulated', routes: { sublingual: { threshold: '20 µg', light: '40-80 µg', common: '80-150 µg', strong: '150-250 µg', heavy: '250+ µg', onset: '25-50 min', peak: '2-3 hrs', duration: '8-11 hrs' } } },
    'Rigidized dimethylazetidide analogue created by David Nichols exploring chiral receptor interaction pocket.',
    { urineDetection: '1-3 days', halfLife: '4.0 hours' }
  ],
  ['pargy-lad', 'PARGY-LAD (6-Propargyl-6-nor-LSD)', 'PARGY-LAD', ['Propargyl-LSD'], 'Psychedelic / Hallucinogen', 'High', 'Lysergamides', 'Moderate-High Potency',
    { subcategory: 'Lysergamides', potencyFactor: 50, scheduleStatus: 'Analog regulated', routes: { sublingual: { threshold: '50 µg', light: '80-160 µg', common: '160-350 µg', strong: '350-500 µg', heavy: '500+ µg', onset: '30-60 min', peak: '2-3.5 hrs', duration: '7-10 hrs' } } },
    '6-Propargyl derivative investigated in research papers on ergoline structure-affinity.',
    { urineDetection: '1-3 days', halfLife: '3.8 hours' }
  ],

  // --- Tryptamines (Simple, 4-Substituted & 5-Substituted) ---
  ['dmt', 'DMT (N,N-Dimethyltryptamine · Dimitri · Spirit Molecule)', 'DMT', ['Dimitri', 'N,N-DMT', 'Spirit Molecule'], 'Psychedelic / Hallucinogen', 'High', 'Tryptamines', 'Very High Potency',
    { subcategory: 'Tryptamines', potencyFactor: 85, scheduleStatus: 'Schedule I / Class A', routes: { smoked: { threshold: '3 mg', light: '5-15 mg', common: '15-30 mg', strong: '30-50 mg (Breakthrough)', heavy: '50+ mg', onset: '10-30 sec', peak: '1-5 min', duration: '10-25 min' }, oral: { threshold: '30 mg (with MAOI)', light: '30-50 mg', common: '50-100 mg', strong: '100-150 mg', heavy: '150+ mg', onset: '30-60 min', peak: '1.5-2.5 hrs', duration: '4-6 hrs' } } },
    'Endogenous indole alkaloid. Full agonist at 5-HT2A with profound, hyperdimensional breakthrough experiences upon vaporization or oral ingestion with reversible MAO-A inhibitors (Ayahuasca).',
    { urineDetection: '1-2 days', halfLife: '15 minutes' }
  ],
  ['5-meo-dmt', '5-MeO-DMT (5-Methoxy-N,N-Dimethyltryptamine · Toad · God Molecule)', '5-MeO-DMT', ['The God Molecule', 'Bufo Alvarius Alkaloid', 'O-Methyl-bufotenin'], 'Psychedelic / Hallucinogen', 'Very High', 'Tryptamines', 'Extreme Potency (Milligram Tier)',
    { subcategory: 'Tryptamines', potencyFactor: 120, scheduleStatus: 'Schedule I / Class A', routes: { smoked: { threshold: '1 mg', light: '2-5 mg', common: '5-12 mg', strong: '12-20 mg (Ego dissolution)', heavy: '20+ mg', onset: '5-15 sec', peak: '1-4 min', duration: '15-35 min' }, insufflated: { threshold: '3 mg', light: '5-10 mg', common: '10-20 mg', strong: '20-30 mg', heavy: '30+ mg', onset: '2-5 min', peak: '10-25 min', duration: '45-90 min' } } },
    'Extremely potent naturally occurring tryptamine secreted by Incilius alvarius. Causes non-dual transcendental void/whiteout states and total ego loss.',
    { urineDetection: '1-2 days', halfLife: '12-19 minutes' }
  ],
  ['psilocybin', 'Psilocybin (4-PO-DMT · Magic Mushroom Active)', 'Psilocybin', ['Magic Mushrooms', 'Teonanácatl', '4-Phosphoryloxy-DMT'], 'Psychedelic / Hallucinogen', 'Moderate', 'Tryptamines', 'High Potency',
    { subcategory: 'Tryptamines', potencyFactor: 80, scheduleStatus: 'Schedule I / Class A', routes: { oral: { threshold: '2 mg', light: '4-10 mg', common: '10-20 mg', strong: '20-35 mg', heavy: '35+ mg', onset: '20-40 min', peak: '1.5-2.5 hrs', duration: '4-6 hrs' } } },
    'Naturally occurring indole alkaloid prodrug dephosphorylated in the liver by alkaline phosphatase into psilocin.',
    { urineDetection: '1-3 days', halfLife: '2.5 hours' }
  ],
  ['psilocin', 'Psilocin (4-HO-DMT)', 'Psilocin', ['4-HO-DMT', '4-Hydroxy-DMT'], 'Psychedelic / Hallucinogen', 'Moderate', 'Tryptamines', 'High Potency',
    { subcategory: 'Tryptamines', potencyFactor: 85, scheduleStatus: 'Schedule I / Class A', routes: { oral: { threshold: '1.5 mg', light: '3-8 mg', common: '8-16 mg', strong: '16-25 mg', heavy: '25+ mg', onset: '15-30 min', peak: '1-2 hrs', duration: '4-5 hrs' } } },
    'The pharmacologically active dephosphorylated metabolite of psilocybin. Direct high-affinity 5-HT2A agonist.',
    { urineDetection: '1-3 days', halfLife: '2.0 hours' }
  ],
  ['4-aco-dmt', '4-AcO-DMT (Psilacetin · 4-Acetoxy-DMT)', '4-AcO-DMT', ['Psilacetin', 'Synthetic Shrooms'], 'Psychedelic / Hallucinogen', 'Moderate', 'Tryptamines', 'High Potency',
    { subcategory: 'Tryptamines', potencyFactor: 85, scheduleStatus: 'Controlled analog in several jurisdictions', routes: { oral: { threshold: '2 mg', light: '5-12 mg', common: '12-25 mg', strong: '25-40 mg', heavy: '40+ mg', onset: '20-45 min', peak: '1.5-2.5 hrs', duration: '4-7 hrs' } } },
    'Semi-synthetic acetylated prodrug of psilocin synthesized by Albert Hofmann and Franz Troxler in 1963.',
    { urineDetection: '1-3 days', halfLife: '2.2 hours' }
  ],
  ['4-ho-met', '4-HO-MET (Metocin · Colour · 4-Hydroxy-N-methyl-N-ethyltryptamine)', '4-HO-MET', ['Metocin', 'Colour'], 'Psychedelic / Hallucinogen', 'Moderate', 'Tryptamines', 'High Potency',
    { subcategory: 'Tryptamines', potencyFactor: 85, scheduleStatus: 'Analog Act regulated', routes: { oral: { threshold: '3 mg', light: '5-15 mg', common: '15-25 mg', strong: '25-40 mg', heavy: '40+ mg', onset: '20-40 min', peak: '1.5-2.5 hrs', duration: '4-6 hrs' } } },
    'Novel synthetic tryptamine known for rich color shifting, vibrant fractal visuals and gentle introspective headspace.',
    { urineDetection: '1-3 days', halfLife: '2.5 hours' }
  ],
  ['4-ho-mipt', '4-HO-MiPT (Miprocin · 4-Hydroxy-N-methyl-N-isopropyltryptamine)', '4-HO-MiPT', ['Miprocin'], 'Psychedelic / Hallucinogen', 'Moderate', 'Tryptamines', 'High Potency',
    { subcategory: 'Tryptamines', potencyFactor: 85, scheduleStatus: 'Analog regulated', routes: { oral: { threshold: '2.5 mg', light: '5-12 mg', common: '12-22 mg', strong: '22-35 mg', heavy: '35+ mg', onset: '20-45 min', peak: '1.5-2.5 hrs', duration: '4-6 hrs' } } },
    'Substituted tryptamine characterized by Alexander Shulgin with tactile enhancement, somatic warmth, and auditory distortions.',
    { urineDetection: '1-3 days', halfLife: '2.8 hours' }
  ],
  ['4-aco-met', '4-AcO-MET (Metacetin)', '4-AcO-MET', ['Metacetin'], 'Psychedelic / Hallucinogen', 'Moderate', 'Tryptamines', 'High Potency',
    { subcategory: 'Tryptamines', potencyFactor: 80, scheduleStatus: 'Analog regulated', routes: { oral: { threshold: '4 mg', light: '8-15 mg', common: '15-25 mg', strong: '25-40 mg', heavy: '40+ mg', onset: '25-50 min', peak: '1.5-2.5 hrs', duration: '4-6.5 hrs' } } },
    'Acetylated prodrug rapidly deacetylated in vivo to yield 4-HO-MET (Metocin).',
    { urineDetection: '1-3 days', halfLife: '2.7 hours' }
  ],
  ['4-ho-dipt', '4-HO-DiPT (Iprocin)', '4-HO-DiPT', ['Iprocin'], 'Psychedelic / Hallucinogen', 'Moderate', 'Tryptamines', 'High Potency',
    { subcategory: 'Tryptamines', potencyFactor: 80, scheduleStatus: 'Analog regulated', routes: { oral: { threshold: '3 mg', light: '6-14 mg', common: '14-25 mg', strong: '25-40 mg', heavy: '40+ mg', onset: '15-35 min', peak: '1-2 hrs', duration: '3-5 hrs' } } },
    'Fast-acting 4-hydroxy tryptamine with unique sound pitch shifts and rapid clearance.',
    { urineDetection: '1-3 days', halfLife: '2.0 hours' }
  ],
  ['4-aco-det', '4-AcO-DET (Ethacetin)', '4-AcO-DET', ['Ethacetin'], 'Psychedelic / Hallucinogen', 'Moderate', 'Tryptamines', 'High Potency',
    { subcategory: 'Tryptamines', potencyFactor: 80, scheduleStatus: 'Analog regulated', routes: { oral: { threshold: '4 mg', light: '8-15 mg', common: '15-25 mg', strong: '25-45 mg', heavy: '45+ mg', onset: '25-45 min', peak: '1.5-2.5 hrs', duration: '4-6 hrs' } } },
    'Acetylated prodrug of 4-HO-DET (Ethocin) described in TiHKAL.',
    { urineDetection: '1-3 days', halfLife: '2.6 hours' }
  ],
  ['5-meo-mipt', '5-MeO-MiPT (Moxy · 5-Methoxy-N-methyl-N-isopropyltryptamine)', '5-MeO-MiPT', ['Moxy'], 'Psychedelic / Entactogen', 'High', 'Tryptamines', 'Very High Potency',
    { subcategory: 'Tryptamines', potencyFactor: 95, scheduleStatus: 'Schedule I analog', routes: { oral: { threshold: '1.5 mg', light: '3-6 mg', common: '6-12 mg', strong: '12-18 mg', heavy: '18+ mg', onset: '20-45 min', peak: '1.5-3 hrs', duration: '4-7 hrs' }, smoked: { threshold: '1 mg', light: '2-5 mg', common: '5-10 mg', strong: '10-15 mg', heavy: '15+ mg', onset: '1-3 min', peak: '15-45 min', duration: '2-4 hrs' } } },
    'Potent entactogenic tryptamine with strong physical tactile stimulation, sensory enhancement, and mild MAOI activity.',
    { urineDetection: '1-3 days', halfLife: '3.0 hours' }
  ],
  ['5-meo-dipt', '5-MeO-DiPT (Foxy · Foxy Methoxy)', '5-MeO-DiPT', ['Foxy', 'Foxy Methoxy'], 'Psychedelic / Hallucinogen', 'High', 'Tryptamines', 'Very High Potency',
    { subcategory: 'Tryptamines', potencyFactor: 90, scheduleStatus: 'Schedule I / Class A', routes: { oral: { threshold: '2 mg', light: '4-8 mg', common: '8-15 mg', strong: '15-25 mg', heavy: '25+ mg', onset: '20-40 min', peak: '1.5-2.5 hrs', duration: '4-7 hrs' } } },
    'Diisopropyl 5-methoxy tryptamine known for heavy somatic auditory effects and eroticized sensory enhancement.',
    { urineDetection: '1-3 days', halfLife: '3.2 hours' }
  ],
  ['5-meo-dalt', '5-MeO-DALT (5-Methoxy-N,N-diallyltryptamine)', '5-MeO-DALT', ['Diallyltryptamine derivative'], 'Psychedelic / Hallucinogen', 'Moderate', 'Tryptamines', 'Moderate Potency',
    { subcategory: 'Tryptamines', potencyFactor: 60, scheduleStatus: 'Controlled analog in UK/DE', routes: { oral: { threshold: '8 mg', light: '15-25 mg', common: '25-45 mg', strong: '45-70 mg', heavy: '70+ mg', onset: '20-40 min', peak: '1-2 hrs', duration: '3-5 hrs' } } },
    'Diallyl tryptamine first synthesized by Alexander Shulgin in 2004.',
    { urineDetection: '1-2 days', halfLife: '2.4 hours' }
  ],
  ['5-meo-amt', '5-MeO-aMT (Alpha-O · 5-Methoxy-alpha-methyltryptamine)', '5-MeO-aMT', ['Alpha-O'], 'Psychedelic / Stimulant', 'Very High', 'Tryptamines', 'Extreme Potency (Milligram Tier)',
    { subcategory: 'Tryptamines', potencyFactor: 110, scheduleStatus: 'Schedule I', routes: { oral: { threshold: '0.8 mg', light: '1.5-3 mg', common: '3-5 mg', strong: '5-9 mg', heavy: '9+ mg', onset: '45-90 min', peak: '3-6 hrs', duration: '12-18 hrs' } } },
    'Long-acting alpha-methylated tryptamine with potent serotonin releasing, MAOI, and 5-HT2A agonist activities. High risk of hypertensive serotonin syndrome.',
    { urineDetection: '2-4 days', halfLife: '8-12 hours' }
  ],
  ['bufotenin', 'Bufotenin (5-HO-DMT · 5-Hydroxy-N,N-dimethyltryptamine)', 'Bufotenin', ['5-HO-DMT', 'Cebil active'], 'Psychedelic / Hallucinogen', 'High', 'Tryptamines', 'High Potency',
    { subcategory: 'Tryptamines', potencyFactor: 75, scheduleStatus: 'Schedule I / Class A', routes: { smoked: { threshold: '3 mg', light: '6-15 mg', common: '15-30 mg', strong: '30-50 mg', heavy: '50+ mg', onset: '1-3 min', peak: '5-15 min', duration: '30-60 min' } } },
    'Found in Anadenanthera colubrina (vilca) seeds and toad venoms. Potent 5-HT2A agonist with substantial peripheral cardiovascular stimulation.',
    { urineDetection: '1-2 days', halfLife: '1.5 hours' }
  ],
  ['dpt', 'DPT (Dipropyltryptamine · The Light)', 'DPT', ['The Light', 'Dipropyltryptamine'], 'Psychedelic / Hallucinogen', 'High', 'Tryptamines', 'High Potency',
    { subcategory: 'Tryptamines', potencyFactor: 75, scheduleStatus: 'Controlled analog', routes: { insufflated: { threshold: '5 mg', light: '10-25 mg', common: '25-50 mg', strong: '50-80 mg', heavy: '80+ mg', onset: '5-15 min', peak: '30-60 min', duration: '2-4 hrs' }, oral: { threshold: '20 mg', light: '35-75 mg', common: '75-150 mg', strong: '150-250 mg', heavy: '250+ mg', onset: '20-45 min', peak: '1.5-2.5 hrs', duration: '4-6 hrs' } } },
    'Propyl tryptamine known for religious reverence in the Temple of the True Inner Light, characterized by intense physical vibration, sonic pitch shifts and eerie otherworldly spaces.',
    { urineDetection: '1-3 days', halfLife: '2.5 hours' }
  ],
  ['dipt', 'DiPT (Diisopropyltryptamine · Auditory Psychedelic)', 'DiPT', ['Diisopropyltryptamine'], 'Psychedelic / Hallucinogen', 'Moderate', 'Tryptamines', 'Moderate Potency',
    { subcategory: 'Tryptamines', potencyFactor: 65, scheduleStatus: 'Controlled analog', routes: { oral: { threshold: '10 mg', light: '20-40 mg', common: '40-80 mg', strong: '80-120 mg', heavy: '120+ mg', onset: '20-45 min', peak: '1.5-2.5 hrs', duration: '4-7 hrs' } } },
    'Unique psychedelic selective for auditory distortion, shifting musical octaves downward.',
    { urineDetection: '1-2 days', halfLife: '3.0 hours' }
  ],
  ['met', 'MET (N-Methyl-N-ethyltryptamine)', 'MET', ['Methylethyltryptamine'], 'Psychedelic / Hallucinogen', 'Moderate', 'Tryptamines', 'Moderate Potency',
    { subcategory: 'Tryptamines', potencyFactor: 70, scheduleStatus: 'Analog regulated', routes: { smoked: { threshold: '5 mg', light: '10-20 mg', common: '20-35 mg', strong: '35-50 mg', heavy: '50+ mg', onset: '1-3 min', peak: '10-25 min', duration: '45-90 min' }, oral: { threshold: '15 mg', light: '30-50 mg', common: '50-90 mg', strong: '90-130 mg', heavy: '130+ mg', onset: '20-40 min', peak: '1-2 hrs', duration: '3-5 hrs' } } },
    'Asymmetrical N,N-dialkyltryptamine with gentle visionary immersion and colorful geometric patterns.',
    { urineDetection: '1-2 days', halfLife: '2.0 hours' }
  ],
  ['mipt', 'MiPT (N-Methyl-N-isopropyltryptamine)', 'MiPT', ['Methylisopropyltryptamine'], 'Psychedelic / Hallucinogen', 'Moderate', 'Tryptamines', 'Moderate Potency',
    { subcategory: 'Tryptamines', potencyFactor: 70, scheduleStatus: 'Analog regulated', routes: { oral: { threshold: '8 mg', light: '15-25 mg', common: '25-45 mg', strong: '45-65 mg', heavy: '65+ mg', onset: '20-45 min', peak: '1.5-2 hrs', duration: '3-5 hrs' } } },
    'Described in TiHKAL with prominent auditory warping and mild visual enhancement.',
    { urineDetection: '1-2 days', halfLife: '2.5 hours' }
  ],
  ['det', 'DET (N,N-Diethyltryptamine)', 'DET', ['Diethyltryptamine'], 'Psychedelic / Hallucinogen', 'High', 'Tryptamines', 'Moderate-High Potency',
    { subcategory: 'Tryptamines', potencyFactor: 75, scheduleStatus: 'Schedule I / Class A', routes: { smoked: { threshold: '5 mg', light: '10-20 mg', common: '20-40 mg', strong: '40-60 mg', heavy: '60+ mg', onset: '1-3 min', peak: '15-30 min', duration: '1-2 hrs' } } },
    'Classic synthetic dialkyltryptamine explored clinically by Stephen Szára in 1957.',
    { urineDetection: '1-2 days', halfLife: '2.2 hours' }
  ],

  // --- 2C-X Family ---
  ['2c-b', '2C-B (4-Bromo-2,5-dimethoxyphenethylamine · Nexus)', '2C-B', ['Nexus', 'Bees', '2C-B'], 'Psychedelic / Phenethylamine', 'Moderate', '2C-X & Phenethylamines', 'High Potency',
    { subcategory: '2C-X Phenethylamines', potencyFactor: 85, scheduleStatus: 'Schedule I / Class A', routes: { oral: { threshold: '3 mg', light: '5-15 mg', common: '15-25 mg', strong: '25-40 mg', heavy: '40+ mg', onset: '30-60 min', peak: '1.5-2.5 hrs', duration: '4-8 hrs' }, insufflated: { threshold: '1.5 mg', light: '3-7 mg', common: '7-15 mg', strong: '15-25 mg', heavy: '25+ mg', onset: '2-8 min', peak: '30-75 min', duration: '2-4 hrs' } } },
    'Discovered by Alexander Shulgin in 1974. Acclaimed for aesthetic visual enhancements, tactile sensitivity, and mild empathogenic lucidity.',
    { urineDetection: '1-3 days', halfLife: '2.5 - 4 hours' }
  ],
  ['2c-c', '2C-C (4-Chloro-2,5-dimethoxyphenethylamine)', '2C-C', ['4-Chloro-2,5-DMPEA'], 'Psychedelic / Phenethylamine', 'Moderate', '2C-X & Phenethylamines', 'Moderate Potency',
    { subcategory: '2C-X Phenethylamines', potencyFactor: 70, scheduleStatus: 'Schedule I', routes: { oral: { threshold: '8 mg', light: '15-25 mg', common: '25-45 mg', strong: '45-65 mg', heavy: '65+ mg', onset: '30-60 min', peak: '1.5-2.5 hrs', duration: '4-7 hrs' } } },
    'Chlorinated 2C-x analogue characterized by tranquil, sedating and serene visual flow.',
    { urineDetection: '1-3 days', halfLife: '3.5 hours' }
  ],
  ['2c-d', '2C-D (4-Methyl-2,5-dimethoxyphenethylamine · Pharmacological Tofu)', '2C-D', ['Pharmacological Tofu', '2C-M'], 'Psychedelic / Phenethylamine', 'Moderate', '2C-X & Phenethylamines', 'Moderate Potency',
    { subcategory: '2C-X Phenethylamines', potencyFactor: 65, scheduleStatus: 'Schedule I', routes: { oral: { threshold: '10 mg', light: '20-40 mg', common: '40-75 mg', strong: '75-120 mg', heavy: '120+ mg', onset: '30-60 min', peak: '1.5-2.5 hrs', duration: '4-6 hrs' } } },
    'Methylated 2C analogue dubbed "pharmacological tofu" by Shulgin for its ability to absorb and amplify the character of other co-administered psychedelics.',
    { urineDetection: '1-3 days', halfLife: '3.0 hours' }
  ],
  ['2c-e', '2C-E (4-Ethyl-2,5-dimethoxyphenethylamine · Europa)', '2C-E', ['Europa', '2C-E'], 'Psychedelic / Phenethylamine', 'High', '2C-X & Phenethylamines', 'Very High Potency',
    { subcategory: '2C-X Phenethylamines', potencyFactor: 95, scheduleStatus: 'Schedule I / Class A', routes: { oral: { threshold: '2 mg', light: '5-10 mg', common: '10-18 mg', strong: '18-28 mg', heavy: '28+ mg', onset: '40-80 min', peak: '2-3.5 hrs', duration: '8-12 hrs' } } },
    'Ethyl substituted phenethylamine renowned for intense geometric synesthesia, deep introspective analysis, and pronounced physical body load.',
    { urineDetection: '2-4 days', halfLife: '4.5 hours' }
  ],
  ['2c-i', '2C-I (4-Iodo-2,5-dimethoxyphenethylamine)', '2C-I', ['4-Iodo-2,5-DMPEA'], 'Psychedelic / Phenethylamine', 'Moderate', '2C-X & Phenethylamines', 'High Potency',
    { subcategory: '2C-X Phenethylamines', potencyFactor: 85, scheduleStatus: 'Schedule I / Class A', routes: { oral: { threshold: '3 mg', light: '6-12 mg', common: '12-22 mg', strong: '22-30 mg', heavy: '30+ mg', onset: '45-90 min', peak: '2-3 hrs', duration: '6-10 hrs' } } },
    'Iodinated 2C phenethylamine with bright electric visuals and strong cognitive stimulation.',
    { urineDetection: '2-4 days', halfLife: '4.0 hours' }
  ],
  ['2c-p', '2C-P (4-Propyl-2,5-dimethoxyphenethylamine)', '2C-P', ['2C-P'], 'Psychedelic / Phenethylamine', 'Very High', '2C-X & Phenethylamines', 'Extreme Potency (Milligram Tier)',
    { subcategory: '2C-X Phenethylamines', potencyFactor: 110, scheduleStatus: 'Schedule I', routes: { oral: { threshold: '1 mg', light: '2-5 mg', common: '5-10 mg', strong: '10-15 mg', heavy: '15+ mg', onset: '60-120 min', peak: '3-6 hrs', duration: '12-18 hrs' } } },
    '4-Propyl substituted compound with very long duration, slow ramp-up, and extreme risk of overdose due to steep dose-response curve.',
    { urineDetection: '2-5 days', halfLife: '8-10 hours' }
  ],
  ['2c-t-2', '2C-T-2 (4-Ethylthio-2,5-dimethoxyphenethylamine)', '2C-T-2', ['2C-T-2'], 'Psychedelic / Phenethylamine', 'High', '2C-X & Phenethylamines', 'High Potency',
    { subcategory: '2C-X Phenethylamines', potencyFactor: 85, scheduleStatus: 'Schedule I / Class A', routes: { oral: { threshold: '4 mg', light: '8-15 mg', common: '15-25 mg', strong: '25-35 mg', heavy: '35+ mg', onset: '45-90 min', peak: '2-3.5 hrs', duration: '6-10 hrs' } } },
    'Sulfur-bearing phenethylamine synthesized by Shulgin with rich organic visuals and emotional warmth.',
    { urineDetection: '2-4 days', halfLife: '4.5 hours' }
  ],
  ['2c-t-7', '2C-T-7 (4-Propylthio-2,5-dimethoxyphenethylamine · Blue Mystic)', '2C-T-7', ['Blue Mystic', '7th Heaven'], 'Psychedelic / Phenethylamine', 'High', '2C-X & Phenethylamines', 'High Potency',
    { subcategory: '2C-X Phenethylamines', potencyFactor: 90, scheduleStatus: 'Schedule I / Class A', routes: { oral: { threshold: '3 mg', light: '8-15 mg', common: '15-30 mg', strong: '30-45 mg', heavy: '45+ mg', onset: '60-120 min', peak: '2.5-4.5 hrs', duration: '8-14 hrs' } } },
    'Propylthio analogue notable for vibrant morphing visuals. High risk of fatalities when insufflated due to mucosal and cardiovascular crisis; contraindicated with MAOIs.',
    { urineDetection: '2-4 days', halfLife: '6 hours' }
  ],
  ['2c-b-fly', '2C-B-FLY (8-Bromo-2,3,6,7-tetrahydrobenzo[1,2-b:4,5-b\']difuran-4-ethanamine)', '2C-B-FLY', ['2C-B-FLY'], 'Psychedelic / Phenethylamine', 'High', '2C-X & Phenethylamines', 'High Potency',
    { subcategory: '2C-X Phenethylamines', potencyFactor: 90, scheduleStatus: 'Controlled analog', routes: { oral: { threshold: '2 mg', light: '5-10 mg', common: '10-18 mg', strong: '18-25 mg', heavy: '25+ mg', onset: '45-90 min', peak: '2-4 hrs', duration: '8-14 hrs' } } },
    'Dihydrodifuran benzodifuran analogue of 2C-B with extended plateau, entactogenic warmth, and rich visual textures.',
    { urineDetection: '2-5 days', halfLife: '6-8 hours' }
  ],

  // --- DOx Amphetamines (DOC, DOB, DOI, DOM) ---
  ['doc', 'DOC (2,5-Dimethoxy-4-chloroamphetamine)', 'DOC', ['2,5-Dimethoxy-4-chloroamphetamine'], 'Psychedelic Amphetamine', 'High', 'DOx Amphetamines', 'Extreme Potency (Milligram Tier)',
    { subcategory: 'DOx Amphetamines', potencyFactor: 110, scheduleStatus: 'Schedule I / Class A', routes: { oral: { threshold: '0.4 mg', light: '1-1.8 mg', common: '1.8-3.5 mg', strong: '3.5-5.5 mg', heavy: '5.5+ mg', onset: '60-150 min', peak: '3-6 hrs', duration: '14-24 hrs' } } },
    'Potent substituted amphetamine 5-HT2A full agonist with marathon duration, intense fractal visuals and robust physical stimulation.',
    { urineDetection: '3-7 days', halfLife: '14-18 hours' }
  ],
  ['dob', 'DOB (2,5-Dimethoxy-4-bromoamphetamine · Bromo-STP)', 'DOB', ['Bromo-STP', 'DOB'], 'Psychedelic Amphetamine', 'High', 'DOx Amphetamines', 'Extreme Potency (Milligram Tier)',
    { subcategory: 'DOx Amphetamines', potencyFactor: 115, scheduleStatus: 'Schedule I / Class A', routes: { oral: { threshold: '0.3 mg', light: '0.7-1.5 mg', common: '1.5-2.8 mg', strong: '2.8-4 mg', heavy: '4+ mg', onset: '60-180 min', peak: '3-7 hrs', duration: '18-30 hrs' } } },
    'Bromo amphetamine psychedelic synthesized by Shulgin. Powerful vasoconstrictive liability at high doses.',
    { urineDetection: '3-7 days', halfLife: '16-22 hours' }
  ],
  ['doi', 'DOI (2,5-Dimethoxy-4-iodoamphetamine)', 'DOI', ['DOI'], 'Psychedelic Amphetamine', 'High', 'DOx Amphetamines', 'Extreme Potency (Milligram Tier)',
    { subcategory: 'DOx Amphetamines', potencyFactor: 115, scheduleStatus: 'Schedule I / Class A', routes: { oral: { threshold: '0.3 mg', light: '0.8-1.6 mg', common: '1.6-3 mg', strong: '3-4.5 mg', heavy: '4.5+ mg', onset: '60-120 min', peak: '3-6 hrs', duration: '16-26 hrs' } } },
    'Widely used in scientific neuroscience as a selective 5-HT2A agonist tool compound.',
    { urineDetection: '3-7 days', halfLife: '15-20 hours' }
  ],
  ['dom', 'DOM (STP · 2,5-Dimethoxy-4-methylamphetamine)', 'DOM', ['STP', 'Serenity Tranquility and Peace'], 'Psychedelic Amphetamine', 'High', 'DOx Amphetamines', 'Extreme Potency (Milligram Tier)',
    { subcategory: 'DOx Amphetamines', potencyFactor: 100, scheduleStatus: 'Schedule I / Class A', routes: { oral: { threshold: '0.8 mg', light: '2-4 mg', common: '4-8 mg', strong: '8-12 mg', heavy: '12+ mg', onset: '60-120 min', peak: '3-6 hrs', duration: '14-20 hrs' } } },
    'Legendary 1967 Haight-Ashbury compound synthesized by Alexander Shulgin with deep transformative visionary depth.',
    { urineDetection: '3-7 days', halfLife: '12-16 hours' }
  ],

  // --- NBOMe & NBOH Series ---
  ['25i-nbome', '25I-NBOMe (2C-I-NBOMe · Smiles · Solaris)', '25I-NBOMe', ['Smiles', '25I', 'Cimbi-5'], 'Psychedelic / Hallucinogen', 'Extreme', 'NBOMe & NBOH Series', 'Extreme Potency (Microgram Tier)',
    { subcategory: 'NBOMe Series', potencyFactor: 140, scheduleStatus: 'Schedule I / Class A', routes: { sublingual: { threshold: '50 µg', light: '150-350 µg', common: '350-700 µg', strong: '700-1100 µg', heavy: '1100+ µg (LETHAL OVERDOSE RISK)', onset: '15-40 min', peak: '1.5-3 hrs', duration: '6-10 hrs' } } },
    'Ultra-potent 2-methoxybenzyl substituted phenethylamine. Extremely dangerous full 5-HT2A agonist with fatal vasospasm, seizures, and renal failure documented at microgram doses.',
    { urineDetection: '2-5 days', halfLife: '3.5 hours' }
  ],
  ['25b-nbome', '25B-NBOMe (2C-B-NBOMe · Cimbi-36)', '25B-NBOMe', ['Cimbi-36', '25B'], 'Psychedelic / Hallucinogen', 'Extreme', 'NBOMe & NBOH Series', 'Extreme Potency (Microgram Tier)',
    { subcategory: 'NBOMe Series', potencyFactor: 135, scheduleStatus: 'Schedule I / Class A', routes: { sublingual: { threshold: '50 µg', light: '150-300 µg', common: '300-600 µg', strong: '600-1000 µg', heavy: '1000+ µg', onset: '15-40 min', peak: '1.5-3 hrs', duration: '6-10 hrs' } } },
    'Brominated NBOMe derivative with high toxicity profile and tight therapeutic index.',
    { urineDetection: '2-5 days', halfLife: '3.6 hours' }
  ],
  ['25c-nbome', '25C-NBOMe (2C-C-NBOMe · Cimbi-82)', '25C-NBOMe', ['Cimbi-82', '25C'], 'Psychedelic / Hallucinogen', 'Extreme', 'NBOMe & NBOH Series', 'Extreme Potency (Microgram Tier)',
    { subcategory: 'NBOMe Series', potencyFactor: 135, scheduleStatus: 'Schedule I / Class A', routes: { sublingual: { threshold: '40 µg', light: '100-250 µg', common: '250-500 µg', strong: '500-800 µg', heavy: '800+ µg', onset: '15-40 min', peak: '1.5-3 hrs', duration: '6-10 hrs' } } },
    'Chlorinated N-benzyl phenethylamine with severe cardiovascular liability.',
    { urineDetection: '2-5 days', halfLife: '3.4 hours' }
  ],
  ['25i-nboh', '25I-NBOH (2C-I-NBOH)', '25I-NBOH', ['25I-NBOH', 'NBOH-2C-I'], 'Psychedelic / Hallucinogen', 'Extreme', 'NBOMe & NBOH Series', 'Extreme Potency (Microgram Tier)',
    { subcategory: 'NBOH Series', potencyFactor: 130, scheduleStatus: 'Controlled analog', routes: { sublingual: { threshold: '60 µg', light: '150-400 µg', common: '400-800 µg', strong: '800-1200 µg', heavy: '1200+ µg', onset: '15-35 min', peak: '1.5-3 hrs', duration: '5-8 hrs' } } },
    '2-Hydroxybenzyl analogue displaying potent 5-HT2A full agonism and rapid clearance.',
    { urineDetection: '2-4 days', halfLife: '3.0 hours' }
  ],
  ['25b-nboh', '25B-NBOH (2C-B-NBOH)', '25B-NBOH', ['NBOH-2C-B'], 'Psychedelic / Hallucinogen', 'Extreme', 'NBOMe & NBOH Series', 'Extreme Potency (Microgram Tier)',
    { subcategory: 'NBOH Series', potencyFactor: 130, scheduleStatus: 'Controlled analog', routes: { sublingual: { threshold: '60 µg', light: '150-350 µg', common: '350-700 µg', strong: '700-1100 µg', heavy: '1100+ µg', onset: '15-35 min', peak: '1.5-3 hrs', duration: '5-8 hrs' } } },
    'Brominated hydroxybenzyl analogue with intense sensory saturation.',
    { urineDetection: '2-4 days', halfLife: '3.2 hours' }
  ],

  // --- Mescaline & Escalines ---
  ['mescaline', 'Mescaline (3,4,5-Trimethoxyphenethylamine · Peyote · San Pedro)', 'Mescaline', ['Peyote', 'San Pedro', 'Huachuma'], 'Psychedelic / Phenethylamine', 'Moderate', 'Mescaline & Phenethylamines', 'Moderate Potency',
    { subcategory: 'Mescaline & Analogues', potencyFactor: 60, scheduleStatus: 'Schedule I / Class A', routes: { oral: { threshold: '50 mg', light: '100-200 mg', common: '200-350 mg', strong: '350-500 mg', heavy: '500+ mg', onset: '45-90 min', peak: '2.5-4.5 hrs', duration: '8-14 hrs' } } },
    'Sacred indigenous phenethylamine alkaloid occurring in Lophophora williamsii (Peyote) and Echinopsis pachanoi (San Pedro). Discovered 1897 by Arthur Heffter.',
    { urineDetection: '2-4 days', halfLife: '6 hours' }
  ],
  ['escaline', 'Escaline (3,5-Dimethoxy-4-ethoxyphenethylamine)', 'Escaline', ['3,5-Dimethoxy-4-ethoxy-PEA'], 'Psychedelic / Phenethylamine', 'Moderate', 'Mescaline & Phenethylamines', 'High Potency',
    { subcategory: 'Mescaline & Analogues', potencyFactor: 75, scheduleStatus: 'Analog regulated', routes: { oral: { threshold: '10 mg', light: '20-35 mg', common: '35-60 mg', strong: '60-85 mg', heavy: '85+ mg', onset: '45-90 min', peak: '2.5-4 hrs', duration: '8-12 hrs' } } },
    '4-Ethoxy analogue of mescaline with approximately six-fold higher molar potency.',
    { urineDetection: '2-4 days', halfLife: '5.5 hours' }
  ],
  ['allylescaline', 'Allylescaline (AL · 4-Allyloxy-3,5-dimethoxyphenethylamine)', 'Allylescaline', ['AL', 'Allyloxy-mescaline'], 'Psychedelic / Phenethylamine', 'Moderate', 'Mescaline & Phenethylamines', 'High Potency',
    { subcategory: 'Mescaline & Analogues', potencyFactor: 80, scheduleStatus: 'Analog regulated', routes: { oral: { threshold: '8 mg', light: '15-25 mg', common: '25-45 mg', strong: '45-65 mg', heavy: '65+ mg', onset: '40-80 min', peak: '2-4 hrs', duration: '8-12 hrs' } } },
    '4-Allyloxy phenethylamine first prepared by Otakar Leminger and popularized by Shulgin.',
    { urineDetection: '2-4 days', halfLife: '5.8 hours' }
  ],
  ['methallylescaline', 'Methallylescaline (MAL · 4-Methallyloxy-3,5-dimethoxyphenethylamine)', 'Methallylescaline', ['MAL'], 'Psychedelic / Phenethylamine', 'Moderate', 'Mescaline & Phenethylamines', 'High Potency',
    { subcategory: 'Mescaline & Analogues', potencyFactor: 85, scheduleStatus: 'Analog regulated', routes: { oral: { threshold: '7 mg', light: '15-25 mg', common: '25-45 mg', strong: '45-65 mg', heavy: '65+ mg', onset: '45-90 min', peak: '2.5-4.5 hrs', duration: '8-14 hrs' } } },
    'Methallyl ether analogue widely considered the closest modern synthetic approximation to pure mescaline visuals.',
    { urineDetection: '2-4 days', halfLife: '6.2 hours' }
  ],

  // --- Botanical & Atypical Psychedelics ---
  ['salvinorin-a', 'Salvinorin A (Divinorin A · Salvia Divinorum Active)', 'Salvinorin A', ['Divinorin A', 'Salvia Active', 'Ska Pastora'], 'Dissociative / Atypical Hallucinogen', 'High', 'Atypical Hallucinogens', 'Extreme Potency (Microgram Tier)',
    { subcategory: 'Kappa-Opioid Agonists', potencyFactor: 125, scheduleStatus: 'Controlled in many jurisdictions', routes: { smoked: { threshold: '80 µg', light: '150-250 µg', common: '250-500 µg', strong: '500-800 µg', heavy: '800+ µg', onset: '10-30 sec', peak: '1-3 min', duration: '8-20 min' }, sublingual: { threshold: '200 µg', light: '400-800 µg', common: '800-1500 µg', strong: '1500-2500 µg', heavy: '2500+ µg', onset: '10-20 min', peak: '30-45 min', duration: '60-90 min' } } },
    'Potent non-nitrogenous diterpenoid kappa-opioid receptor (KOR) agonist from Salvia divinorum. Induces extreme gravitational dislocation and spatial folding.',
    { urineDetection: '1-2 days', halfLife: '56-75 minutes' }
  ],
  ['ibogaine', 'Ibogaine (12-Methoxyibogamine · Tabernanthe Iboga)', 'Ibogaine', ['Tabernanthe iboga alkaloid', 'Ibogaine'], 'Atypical Hallucinogen / Oneirogen', 'Very High', 'Atypical Hallucinogens', 'Moderate Potency',
    { subcategory: 'Oneirogens & Anti-Addictive Alkaloids', potencyFactor: 75, scheduleStatus: 'Schedule I in US, clinical use elsewhere', routes: { oral: { threshold: '50 mg', light: '100-300 mg', common: '300-600 mg', strong: '600-1000 mg (Flood dose)', heavy: '1000+ mg (Cardiac QTc risk)', onset: '45-90 min', peak: '3-6 hrs', duration: '24-36 hrs' } } },
    'Apocynaceae root bark alkaloid with unique multi-target affinity (KOR, NMDA, sigma, 5-HT2A). Causes intense oneirogenic memory replay; carries serious hERG channel cardiotoxicity (torsades de pointes).',
    { urineDetection: '3-7 days (Noribogaine persists)', halfLife: '7.5 hours (Noribogaine: 24-48 hrs)' }
  ],
  ['muscimol', 'Muscimol (Amanita Muscaria Active · Pantherine)', 'Muscimol', ['Pantherine', 'Fly Agaric Active'], 'Sedative / Deliriant / Hallucinogen', 'High', 'Atypical Hallucinogens', 'Very High Potency',
    { subcategory: 'GABA-A Agonists', potencyFactor: 90, scheduleStatus: 'Unscheduled', routes: { oral: { threshold: '1.5 mg', light: '3-6 mg', common: '6-12 mg', strong: '12-18 mg', heavy: '18+ mg', onset: '30-90 min', peak: '2-3.5 hrs', duration: '5-8 hrs' } } },
    'Selective GABA-A receptor full agonist from Amanita muscaria causing dream-like states, macropsea/micropsea (Alice in Wonderland syndrome), and motor ataxia.',
    { urineDetection: '1-3 days (excreted unchanged)', halfLife: '5-6 hours' }
  ],
  ['harmine', 'Harmine (Telepathine · Banisteriopsis Caapi Alkaloid)', 'Harmine', ['Telepathine', 'Yagé alkaloid'], 'MAO-A Inhibitor / Oneirogen', 'Moderate', 'Atypical Hallucinogens', 'Moderate Potency',
    { subcategory: 'Harmala Alkaloids & MAOIs', potencyFactor: 60, scheduleStatus: 'Unscheduled in most countries', routes: { oral: { threshold: '20 mg', light: '40-80 mg', common: '80-150 mg', strong: '150-250 mg', heavy: '250+ mg', onset: '30-60 min', peak: '1.5-2.5 hrs', duration: '4-6 hrs' } } },
    'Reversible inhibitor of monoamine oxidase A (RIMA) from Syrian rue and Banisteriopsis caapi. Renders DMT orally bioavailable in Ayahuasca.',
    { urineDetection: '1-3 days', halfLife: '1-3 hours' }
  ]
];

writePartFile(5, part5Raw);
console.log('Generated Part 5: ' + part5Raw.length + ' substances in src/data/expandedSubstancesPart5.ts');
