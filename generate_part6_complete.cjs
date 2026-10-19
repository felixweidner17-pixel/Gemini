const { writePartFile } = require('./generate_master_helper.cjs');

const part6Raw = [
  // --- Remaining Barbiturates, Qualudes & Sedatives ---
  ['aprobarbital', 'Aprobarbital (Alurate · Osonal)', 'Aprobarbital', ['Alurate', 'Osonal'], 'Depressant / Barbiturate', 'High', 'Barbiturates', 'Moderate Potency',
    { subcategory: 'Barbiturates', potencyFactor: 65, scheduleStatus: 'Schedule III / Prescription', routes: { oral: { threshold: '20 mg', light: '40-80 mg', common: '80-160 mg', strong: '160-240 mg', heavy: '240+ mg', onset: '20-45 min', peak: '1.5-3 hrs', duration: '8-14 hrs' } } },
    'Intermediate-acting barbiturate sedative with allosteric positive modulation and direct opening of GABA-A chloride channels at elevated concentrations.',
    { urineDetection: '2-5 days', halfLife: '14-34 hours' }
  ],
  ['butabarbital', 'Butabarbital (Butisol · Secbutobarbitone)', 'Butabarbital', ['Butisol', 'Secbutobarbitone'], 'Depressant / Barbiturate', 'High', 'Barbiturates', 'Moderate Potency',
    { subcategory: 'Barbiturates', potencyFactor: 65, scheduleStatus: 'Schedule III', routes: { oral: { threshold: '15 mg', light: '30-60 mg', common: '60-120 mg', strong: '120-200 mg', heavy: '200+ mg', onset: '20-45 min', peak: '1.5-3 hrs', duration: '6-10 hrs' } } },
    'Intermediate duration barbiturate approved for preoperative sedation and daytime anxiety.',
    { urineDetection: '2-5 days', halfLife: '35-50 hours' }
  ],
  ['hexobarbital', 'Hexobarbital (Evipal · Evipan · Citopan)', 'Hexobarbital', ['Evipal', 'Citopan'], 'Depressant / Barbiturate', 'High', 'Barbiturates', 'Moderate Potency',
    { subcategory: 'Barbiturates', potencyFactor: 60, scheduleStatus: 'Schedule IV', routes: { oral: { threshold: '50 mg', light: '100-250 mg', common: '250-500 mg', strong: '500-750 mg', heavy: '750+ mg', onset: '15-30 min', peak: '45-90 min', duration: '3-5 hrs' } } },
    'Rapid-onset short-acting barbiturate anesthetic historically used in intravenous surgical induction.',
    { urineDetection: '1-3 days', halfLife: '4-6 hours' }
  ],
  ['mephobarbital', 'Mephobarbital (Mebaral · Methylphenobarbital)', 'Mephobarbital', ['Mebaral', 'Methylphenobarbital'], 'Depressant / Barbiturate', 'High', 'Barbiturates', 'Moderate Potency',
    { subcategory: 'Barbiturates', potencyFactor: 60, scheduleStatus: 'Schedule IV', routes: { oral: { threshold: '30 mg', light: '50-100 mg', common: '100-200 mg', strong: '200-400 mg', heavy: '400+ mg', onset: '30-60 min', peak: '2-4 hrs', duration: '10-18 hrs' } } },
    'N-methylated prodrug metabolized to phenobarbital by hepatic N-demethylation.',
    { urineDetection: '2-4 weeks (phenobarbital metabolite)', halfLife: '34-50 hours' }
  ],
  ['methohexital', 'Methohexital (Brevital · Brietal)', 'Methohexital', ['Brevital', 'Brietal'], 'Depressant / Barbiturate', 'Very High', 'Barbiturates', 'High Potency',
    { subcategory: 'Barbiturates', potencyFactor: 85, scheduleStatus: 'Schedule IV', routes: { iv: { threshold: '10 mg', light: '25-50 mg', common: '50-100 mg', strong: '100-150 mg', heavy: '150+ mg', onset: '15-30 sec', peak: '1-2 min', duration: '10-20 min' } } },
    'Ultra-short-acting oxybarbiturate anesthetic used in electroconvulsive therapy due to prompt awakening and lack of prolonged sedation.',
    { urineDetection: '1-2 days', halfLife: '1.5-2.5 hours' }
  ],
  ['allobarbital', 'Allobarbital (Dial · Cibalgine active)', 'Allobarbital', ['Dial', 'Diallylbarbiturate'], 'Depressant / Barbiturate', 'High', 'Barbiturates', 'Moderate Potency',
    { subcategory: 'Barbiturates', potencyFactor: 65, scheduleStatus: 'Schedule III', routes: { oral: { threshold: '25 mg', light: '50-100 mg', common: '100-200 mg', strong: '200-300 mg', heavy: '300+ mg', onset: '30-60 min', peak: '2-3 hrs', duration: '8-14 hrs' } } },
    'Diallyl barbituric acid derivative with intermediate duration anticonvulsant and hypnotic properties.',
    { urineDetection: '2-5 days', halfLife: '18-24 hours' }
  ],
  ['cyclobarbital', 'Cyclobarbital (Phanodorm · Cavonyl)', 'Cyclobarbital', ['Phanodorm'], 'Depressant / Barbiturate', 'High', 'Barbiturates', 'Moderate Potency',
    { subcategory: 'Barbiturates', potencyFactor: 65, scheduleStatus: 'Schedule III', routes: { oral: { threshold: '50 mg', light: '100-200 mg', common: '200-400 mg', strong: '400-600 mg', heavy: '600+ mg', onset: '20-40 min', peak: '1.5-2.5 hrs', duration: '6-10 hrs' } } },
    'Cyclohexenyl barbiturate used in Eastern Europe for severe insomnia.',
    { urineDetection: '2-4 days', halfLife: '8-16 hours' }
  ],
  ['mecloqualone', 'Mecloqualone (Nubarene · Casfen)', 'Mecloqualone', ['Nubarene', 'Casfen'], 'Depressant / Quinazolinone', 'Very High', 'Quinazolinone Sedatives', 'High Potency',
    { subcategory: 'Quinazolinones (Quaaludes)', potencyFactor: 80, scheduleStatus: 'Schedule I / Class A', routes: { oral: { threshold: '30 mg', light: '50-100 mg', common: '100-200 mg', strong: '200-300 mg', heavy: '300+ mg', onset: '20-40 min', peak: '1.5-2.5 hrs', duration: '4-7 hrs' } } },
    'Halogenated quinazolinone sedative related to methaqualone with pronounced muscle relaxant and euphoric GABA-A positive modulation.',
    { urineDetection: '2-5 days', halfLife: '10-15 hours' }
  ],
  ['mebroqualone', 'Mebroqualone (MBQ)', 'Mebroqualone', ['MBQ'], 'Depressant / Quinazolinone', 'Very High', 'Quinazolinone Sedatives', 'High Potency',
    { subcategory: 'Quinazolinones (Quaaludes)', potencyFactor: 80, scheduleStatus: 'Controlled analog', routes: { oral: { threshold: '30 mg', light: '50-100 mg', common: '100-200 mg', strong: '200-300 mg', heavy: '300+ mg', onset: '20-40 min', peak: '1-2 hrs', duration: '3-6 hrs' }, smoked: { threshold: '15 mg', light: '30-60 mg', common: '60-120 mg', strong: '120-180 mg', heavy: '180+ mg', onset: '10-30 sec', peak: '2-10 min', duration: '1-3 hrs' } } },
    'Brominated analogue of methaqualone popular in RC communities for rapid vaporization onset.',
    { urineDetection: '2-4 days', halfLife: '8-12 hours' }
  ],
  ['etaqualone', 'Etaqualone (Aethaqualoan · Athinazone)', 'Etaqualone', ['Athinazone'], 'Depressant / Quinazolinone', 'Very High', 'Quinazolinone Sedatives', 'Moderate-High Potency',
    { subcategory: 'Quinazolinones (Quaaludes)', potencyFactor: 75, scheduleStatus: 'Controlled in various countries', routes: { oral: { threshold: '50 mg', light: '100-200 mg', common: '200-350 mg', strong: '350-500 mg', heavy: '500+ mg', onset: '25-45 min', peak: '1.5-2.5 hrs', duration: '4-7 hrs' } } },
    'Ethyl homologue of methaqualone with sedative, hypnotic and central muscle relaxant action.',
    { urineDetection: '2-5 days', halfLife: '8-14 hours' }
  ],
  ['methylmethaqualone', 'Methylmethaqualone (MMQ)', 'Methylmethaqualone', ['MMQ'], 'Depressant / Quinazolinone', 'Extreme', 'Quinazolinone Sedatives', 'Very High Potency (Seizure Risk)',
    { subcategory: 'Quinazolinones (Quaaludes)', potencyFactor: 90, scheduleStatus: 'Controlled analog', routes: { oral: { threshold: '20 mg', light: '40-80 mg', common: '80-150 mg', strong: '150-220 mg', heavy: '220+ mg (Convulsion Risk)', onset: '20-40 min', peak: '1-2 hrs', duration: '3-5 hrs' } } },
    'Methylated quinazolinone notorious for lowering the seizure threshold, causing myoclonic convulsions and status epilepticus even at recreational dosages.',
    { urineDetection: '2-4 days', halfLife: '6-10 hours' }
  ],
  ['tybamate', 'Tybamate (Tybatran · Solacen)', 'Tybamate', ['Solacen', 'Tybatran'], 'Depressant / Carbamate', 'Moderate', 'Carbamate Sedatives', 'Moderate Potency',
    { subcategory: 'Carbamates', potencyFactor: 55, scheduleStatus: 'Prescription obsolete', routes: { oral: { threshold: '100 mg', light: '200-400 mg', common: '400-750 mg', strong: '750-1200 mg', heavy: '1200+ mg', onset: '30-60 min', peak: '1.5-2.5 hrs', duration: '4-7 hrs' } } },
    'Carbamate derivative related to meprobamate with anxiolytic and minor muscle relaxant actions.',
    { urineDetection: '2-4 days', halfLife: '3-5 hours' }
  ],
  ['paraldehyde', 'Paraldehyde (Paral)', 'Paraldehyde', ['Paral', 'Polymer of acetaldehyde'], 'Depressant / Sedative', 'High', 'Non-Barbiturate Sedatives', 'Low Potency (Gram Tier)',
    { subcategory: 'Cyclic Acetals', potencyFactor: 50, scheduleStatus: 'Schedule IV', routes: { oral: { threshold: '1 ml (~1 g)', light: '2-5 ml', common: '5-10 ml', strong: '10-15 ml', heavy: '15+ ml', onset: '10-20 min', peak: '30-60 min', duration: '6-10 hrs' } } },
    'Cyclic trimer of acetaldehyde once widely used for alcohol delirium tremens and intractable status epilepticus. Possesses noxious pungent odor exhaled through the lungs.',
    { urineDetection: '1-2 days (pulmonary excretion)', halfLife: '3.5-9.5 hours' }
  ],

  // --- Missing Dissociatives ---
  ['3-cl-pcp', '3-Cl-PCP (3-Chlorophencyclidine)', '3-Cl-PCP', ['3-Chloro-PCP'], 'Dissociative / Arylcyclohexylamine', 'High', 'Arylcyclohexylamines (PCP/Ketamine Family)', 'High Potency',
    { subcategory: 'Arylcyclohexylamines', potencyFactor: 85, scheduleStatus: 'Controlled analog', routes: { oral: { threshold: '3 mg', light: '8-15 mg', common: '15-30 mg', strong: '30-50 mg', heavy: '50+ mg', onset: '30-60 min', peak: '1.5-3 hrs', duration: '5-8 hrs' } } },
    'Chlorinated PCP analogue with balanced NMDA receptor antagonism and mild dopamine reuptake inhibition.',
    { urineDetection: '2-5 days', halfLife: '6-10 hours' }
  ],
  ['amantadine', 'Amantadine (Gocovri · Symmetrel)', 'Amantadine', ['Symmetrel', 'Gocovri'], 'NMDA Antagonist / Dopaminergic', 'Low', 'Adamantanes', 'Low Potency',
    { subcategory: 'Adamantanes', potencyFactor: 40, scheduleStatus: 'Prescription', routes: { oral: { threshold: '25 mg', light: '50-100 mg', common: '100-200 mg', strong: '200-300 mg', heavy: '300+ mg', onset: '1-2 hrs', peak: '2-4 hrs', duration: '12-24 hrs' } } },
    'Adamantane antiviral and antiparkinsonian agent acting as a low-affinity uncompetitive NMDA channel blocker and dopamine releaser.',
    { urineDetection: '2-4 days', halfLife: '12-18 hours' }
  ],
  ['chloroform', 'Chloroform (Trichloromethane)', 'Chloroform', ['Trichloromethane', 'CHCl3'], 'Depressant / Inhalant Anesthetic', 'Extreme', 'Inhalant Anesthetics', 'High Potency / Severe Hepatotoxicity',
    { subcategory: 'Halogenated Hydrocarbons', potencyFactor: 80, scheduleStatus: 'Toxic chemical / Controlled', routes: { inhaled: { threshold: '1 ml', light: '2-4 ml', common: '4-8 ml', strong: '8-15 ml (Surgical anesthesia)', heavy: '15+ ml (Fatal hepatorenal necrosis)', onset: '10-30 sec', peak: '1-3 min', duration: '10-25 min' } } },
    'Historic halogenated hydrocarbon surgical anesthetic abandoned due to fatal arrhythmias (myocardial sensitization) and delayed centrilobular liver necrosis from phosgene biotransformation.',
    { urineDetection: '1 day', halfLife: '1.5 hours' }
  ],

  // --- Missing Psychedelics: 2C-x, Alephs, NBOMes & Escalines ---
  ['2c-t-4', '2C-T-4 (4-Isopropylthio-2,5-dimethoxyphenethylamine)', '2C-T-4', ['2C-T-4'], 'Psychedelic / Phenethylamine', 'High', '2C-X & Phenethylamines', 'High Potency',
    { subcategory: '2C-X Phenethylamines', potencyFactor: 85, scheduleStatus: 'Schedule I / Class A', routes: { oral: { threshold: '4 mg', light: '8-15 mg', common: '15-25 mg', strong: '25-40 mg', heavy: '40+ mg', onset: '60-120 min', peak: '2.5-4 hrs', duration: '8-14 hrs' } } },
    'Isopropylthio derivative characterized in PiHKAL with dreamlike flowing visuals and somatic serenity.',
    { urineDetection: '2-4 days', halfLife: '5.0 hours' }
  ],
  ['2c-ef', '2C-EF (4-(2-Fluoroethyl)-2,5-dimethoxyphenethylamine)', '2C-EF', ['2C-EF'], 'Psychedelic / Phenethylamine', 'High', '2C-X & Phenethylamines', 'Very High Potency',
    { subcategory: '2C-X Phenethylamines', potencyFactor: 95, scheduleStatus: 'Controlled analog', routes: { oral: { threshold: '2 mg', light: '5-10 mg', common: '10-18 mg', strong: '18-25 mg', heavy: '25+ mg', onset: '45-90 min', peak: '2-3.5 hrs', duration: '8-12 hrs' } } },
    'Fluoroethyl analogue investigated for robust 5-HT2A activation and intricate geometric imagery.',
    { urineDetection: '2-4 days', halfLife: '4.5 hours' }
  ],
  ['2c-tfm', '2C-TFM (4-Trifluoromethyl-2,5-dimethoxyphenethylamine)', '2C-TFM', ['2C-TFM'], 'Psychedelic / Phenethylamine', 'Very High', '2C-X & Phenethylamines', 'Extreme Potency (Milligram Tier)',
    { subcategory: '2C-X Phenethylamines', potencyFactor: 110, scheduleStatus: 'Controlled analog', routes: { oral: { threshold: '0.8 mg', light: '2-4 mg', common: '4-8 mg', strong: '8-12 mg', heavy: '12+ mg', onset: '60-120 min', peak: '3-6 hrs', duration: '12-20 hrs' } } },
    'Trifluoromethyl derivative synthesized in the David Nichols lab with very high 5-HT2A affinity and long duration.',
    { urineDetection: '2-5 days', halfLife: '10 hours' }
  ],
  ['2c-n', '2C-N (4-Nitro-2,5-dimethoxyphenethylamine)', '2C-N', ['4-Nitro-2,5-DMPEA'], 'Psychedelic / Phenethylamine', 'Moderate', '2C-X & Phenethylamines', 'Moderate Potency',
    { subcategory: '2C-X Phenethylamines', potencyFactor: 60, scheduleStatus: 'Schedule I', routes: { oral: { threshold: '20 mg', light: '40-75 mg', common: '75-125 mg', strong: '125-175 mg', heavy: '175+ mg', onset: '30-60 min', peak: '1.5-2.5 hrs', duration: '4-6 hrs' } } },
    '4-Nitro phenethylamine from PiHKAL exhibiting vibrant yellow-orange color tints and mild cognitive shifts.',
    { urineDetection: '2-3 days', halfLife: '3.0 hours' }
  ],
  ['2c-ip', '2C-iP (4-Isopropyl-2,5-dimethoxyphenethylamine)', '2C-iP', ['4-Isopropyl-2,5-DMPEA'], 'Psychedelic / Phenethylamine', 'Moderate', '2C-X & Phenethylamines', 'Moderate Potency',
    { subcategory: '2C-X Phenethylamines', potencyFactor: 65, scheduleStatus: 'Controlled analog', routes: { oral: { threshold: '10 mg', light: '20-40 mg', common: '40-70 mg', strong: '70-100 mg', heavy: '100+ mg', onset: '45-90 min', peak: '2-3.5 hrs', duration: '6-10 hrs' } } },
    'Isopropyl substituted phenethylamine detailed by Shulgin with mellow introspective tone.',
    { urineDetection: '2-4 days', halfLife: '4.0 hours' }
  ],
  ['tma-2', 'TMA-2 (2,4,5-Trimethoxyamphetamine)', 'TMA-2', ['2,4,5-TMA'], 'Psychedelic Amphetamine', 'High', 'DOx & Substituted Amphetamines', 'High Potency',
    { subcategory: 'Substituted Amphetamines', potencyFactor: 85, scheduleStatus: 'Schedule I / Class A', routes: { oral: { threshold: '5 mg', light: '10-20 mg', common: '20-35 mg', strong: '35-50 mg', heavy: '50+ mg', onset: '45-90 min', peak: '2.5-4.5 hrs', duration: '8-12 hrs' } } },
    'Trimethoxyamphetamine structural isomer with potent visionary geometry and aesthetic appreciation.',
    { urineDetection: '2-4 days', halfLife: '6-8 hours' }
  ],
  ['tma-6', 'TMA-6 (2,4,6-Trimethoxyamphetamine)', 'TMA-6', ['2,4,6-TMA'], 'Psychedelic Amphetamine', 'High', 'DOx & Substituted Amphetamines', 'High Potency',
    { subcategory: 'Substituted Amphetamines', potencyFactor: 80, scheduleStatus: 'Schedule I', routes: { oral: { threshold: '8 mg', light: '15-25 mg', common: '25-45 mg', strong: '45-65 mg', heavy: '65+ mg', onset: '45-90 min', peak: '2.5-4 hrs', duration: '8-14 hrs' } } },
    'Symmetrical 2,4,6-trimethoxyamphetamine first synthesized by Shulgin.',
    { urineDetection: '2-4 days', halfLife: '7 hours' }
  ],
  ['aleph-1', 'Aleph-1 (DOT · 4-Methylthio-2,5-dimethoxyamphetamine)', 'Aleph-1', ['DOT', 'Aleph'], 'Psychedelic Amphetamine', 'High', 'DOx & Substituted Amphetamines', 'Extreme Potency (Milligram Tier)',
    { subcategory: 'Aleph Series', potencyFactor: 105, scheduleStatus: 'Schedule I analog', routes: { oral: { threshold: '1 mg', light: '2-4 mg', common: '4-8 mg', strong: '8-12 mg', heavy: '12+ mg', onset: '60-120 min', peak: '3-5 hrs', duration: '10-16 hrs' } } },
    'Methylthio amphetamine described by Shulgin in PiHKAL as a potent psychedelic with intense emotional profundity.',
    { urineDetection: '2-5 days', halfLife: '8-12 hours' }
  ],
  ['aleph-2', 'Aleph-2 (2,5-Dimethoxy-4-ethylthioamphetamine)', 'Aleph-2', ['Aleph-2'], 'Psychedelic Amphetamine', 'High', 'DOx & Substituted Amphetamines', 'High Potency',
    { subcategory: 'Aleph Series', potencyFactor: 95, scheduleStatus: 'Controlled analog', routes: { oral: { threshold: '1.5 mg', light: '3-6 mg', common: '6-10 mg', strong: '10-15 mg', heavy: '15+ mg', onset: '60-120 min', peak: '3-5 hrs', duration: '10-16 hrs' } } },
    'Ethylthio amphetamine from PiHKAL with pronounced sensory lucidity.',
    { urineDetection: '2-5 days', halfLife: '9 hours' }
  ],
  ['aleph-4', 'Aleph-4 (2,5-Dimethoxy-4-isopropylthioamphetamine)', 'Aleph-4', ['Aleph-4'], 'Psychedelic Amphetamine', 'High', 'DOx & Substituted Amphetamines', 'High Potency',
    { subcategory: 'Aleph Series', potencyFactor: 95, scheduleStatus: 'Controlled analog', routes: { oral: { threshold: '2 mg', light: '4-8 mg', common: '8-15 mg', strong: '15-22 mg', heavy: '22+ mg', onset: '60-120 min', peak: '3-5 hrs', duration: '10-18 hrs' } } },
    'Isopropylthio amphetamine characterized by Alexander Shulgin with deep inner contemplation.',
    { urineDetection: '2-5 days', halfLife: '9-12 hours' }
  ],
  ['aleph-7', 'Aleph-7 (2,5-Dimethoxy-4-propylthioamphetamine)', 'Aleph-7', ['Aleph-7'], 'Psychedelic Amphetamine', 'High', 'DOx & Substituted Amphetamines', 'High Potency',
    { subcategory: 'Aleph Series', potencyFactor: 95, scheduleStatus: 'Controlled analog', routes: { oral: { threshold: '1.5 mg', light: '3-6 mg', common: '6-12 mg', strong: '12-18 mg', heavy: '18+ mg', onset: '60-120 min', peak: '3-5 hrs', duration: '12-20 hrs' } } },
    'Propylthio analogue with marathon duration and rich morphing colors.',
    { urineDetection: '2-5 days', halfLife: '10-14 hours' }
  ],
  ['25e-nbome', '25E-NBOMe (2C-E-NBOMe)', '25E-NBOMe', ['25E'], 'Psychedelic / Hallucinogen', 'Extreme', 'NBOMe & NBOH Series', 'Extreme Potency (Microgram Tier)',
    { subcategory: 'NBOMe Series', potencyFactor: 135, scheduleStatus: 'Schedule I / Class A', routes: { sublingual: { threshold: '50 µg', light: '150-350 µg', common: '350-700 µg', strong: '700-1100 µg', heavy: '1100+ µg', onset: '15-40 min', peak: '1.5-3 hrs', duration: '6-10 hrs' } } },
    'Ethyl NBOMe derivative with extreme peripheral vasoconstriction liability.',
    { urineDetection: '2-5 days', halfLife: '3.8 hours' }
  ],
  ['25c-nboh', '25C-NBOH (2C-C-NBOH)', '25C-NBOH', ['NBOH-2C-C'], 'Psychedelic / Hallucinogen', 'Extreme', 'NBOMe & NBOH Series', 'Extreme Potency (Microgram Tier)',
    { subcategory: 'NBOH Series', potencyFactor: 130, scheduleStatus: 'Controlled analog', routes: { sublingual: { threshold: '50 µg', light: '100-250 µg', common: '250-500 µg', strong: '500-800 µg', heavy: '800+ µg', onset: '15-35 min', peak: '1.5-3 hrs', duration: '5-8 hrs' } } },
    'Chlorinated 2-hydroxybenzyl derivative with selective 5-HT2A agonism.',
    { urineDetection: '2-4 days', halfLife: '3.2 hours' }
  ],
  ['25e-nboh', '25E-NBOH (2C-E-NBOH)', '25E-NBOH', ['NBOH-2C-E'], 'Psychedelic / Hallucinogen', 'Extreme', 'NBOMe & NBOH Series', 'Extreme Potency (Microgram Tier)',
    { subcategory: 'NBOH Series', potencyFactor: 130, scheduleStatus: 'Controlled analog', routes: { sublingual: { threshold: '50 µg', light: '150-350 µg', common: '350-700 µg', strong: '700-1000 µg', heavy: '1000+ µg', onset: '15-35 min', peak: '1.5-3 hrs', duration: '5-8 hrs' } } },
    'Ethyl substituted hydroxybenzyl phenethylamine with powerful visual geometry.',
    { urineDetection: '2-4 days', halfLife: '3.5 hours' }
  ],
  ['25i-nbf', '25I-NBF (2C-I-NBF)', '25I-NBF', ['25I-NBF'], 'Psychedelic / Hallucinogen', 'Extreme', 'NBOMe & NBOH Series', 'Extreme Potency (Microgram Tier)',
    { subcategory: 'NBF Series', potencyFactor: 130, scheduleStatus: 'Controlled analog', routes: { sublingual: { threshold: '50 µg', light: '150-350 µg', common: '350-700 µg', strong: '700-1100 µg', heavy: '1100+ µg', onset: '15-40 min', peak: '1.5-3 hrs', duration: '5-8 hrs' } } },
    '2-Fluorobenzyl analogue of 2C-I displaying nanomolar 5-HT2A affinity.',
    { urineDetection: '2-4 days', halfLife: '3.3 hours' }
  ],
  ['proscaline', 'Proscaline (3,5-Dimethoxy-4-propoxyphenethylamine)', 'Proscaline', ['4-Propoxy-mescaline'], 'Psychedelic / Phenethylamine', 'Moderate', 'Mescaline & Phenethylamines', 'High Potency',
    { subcategory: 'Mescaline & Analogues', potencyFactor: 75, scheduleStatus: 'Analog regulated', routes: { oral: { threshold: '10 mg', light: '20-35 mg', common: '35-60 mg', strong: '60-85 mg', heavy: '85+ mg', onset: '45-90 min', peak: '2.5-4 hrs', duration: '8-12 hrs' } } },
    '4-Propoxy substituted mescaline analogue in PiHKAL with tranquil bodily warmth.',
    { urineDetection: '2-4 days', halfLife: '5.5 hours' }
  ],
  ['isoproscaline', 'Isoproscaline (IP · 4-Isopropoxy-3,5-dimethoxyphenethylamine)', 'Isoproscaline', ['IP', 'Isopropoxy-mescaline'], 'Psychedelic / Phenethylamine', 'Moderate', 'Mescaline & Phenethylamines', 'High Potency',
    { subcategory: 'Mescaline & Analogues', potencyFactor: 75, scheduleStatus: 'Analog regulated', routes: { oral: { threshold: '10 mg', light: '25-40 mg', common: '40-70 mg', strong: '70-100 mg', heavy: '100+ mg', onset: '45-90 min', peak: '2.5-4 hrs', duration: '8-12 hrs' } } },
    '4-Isopropoxy analogue known for clean tactile enhancement.',
    { urineDetection: '2-4 days', halfLife: '5.8 hours' }
  ],
  ['3c-p', '3C-P (4-Propoxy-3,5-dimethoxyamphetamine)', '3C-P', ['3C-P'], 'Psychedelic Amphetamine', 'High', 'Mescaline & Phenethylamines', 'High Potency',
    { subcategory: 'Amphetamine Analogues of Mescaline', potencyFactor: 85, scheduleStatus: 'Controlled analog', routes: { oral: { threshold: '5 mg', light: '15-25 mg', common: '25-45 mg', strong: '45-65 mg', heavy: '65+ mg', onset: '60-120 min', peak: '3-5 hrs', duration: '10-16 hrs' } } },
    'Amphetamine analogue of proscaline featuring rich analytical headspace and extended duration.',
    { urineDetection: '2-5 days', halfLife: '8-12 hours' }
  ],
  ['3c-e', '3C-E (4-Ethoxy-3,5-dimethoxyamphetamine)', '3C-E', ['3C-E'], 'Psychedelic Amphetamine', 'High', 'Mescaline & Phenethylamines', 'High Potency',
    { subcategory: 'Amphetamine Analogues of Mescaline', potencyFactor: 85, scheduleStatus: 'Controlled analog', routes: { oral: { threshold: '5 mg', light: '15-30 mg', common: '30-55 mg', strong: '55-80 mg', heavy: '80+ mg', onset: '60-120 min', peak: '3-5 hrs', duration: '10-15 hrs' } } },
    'Amphetamine homologue of escaline characterized in PiHKAL.',
    { urineDetection: '2-5 days', halfLife: '8-11 hours' }
  ],
  ['harmaline', 'Harmaline (Harmidine · Dihydroharmine)', 'Harmaline', ['Harmidine'], 'MAO-A Inhibitor / Oneirogen', 'Moderate', 'Atypical Hallucinogens', 'Moderate Potency',
    { subcategory: 'Harmala Alkaloids & MAOIs', potencyFactor: 65, scheduleStatus: 'Unscheduled in most jurisdictions', routes: { oral: { threshold: '15 mg', light: '30-70 mg', common: '70-130 mg', strong: '130-200 mg', heavy: '200+ mg', onset: '30-60 min', peak: '1.5-2.5 hrs', duration: '4-7 hrs' } } },
    'Dihydro harmala alkaloid occurring in Syrian rue (Peganum harmala). Reversible MAOI approximately twice as potent as harmine with visual flickering and motor tremors at high doses.',
    { urineDetection: '1-3 days', halfLife: '2-4 hours' }
  ],
  ['tetrahydroharmine', 'Tetrahydroharmine (THH)', 'Tetrahydroharmine', ['THH'], 'Weak MAOI / SSRI / Oneirogen', 'Low', 'Atypical Hallucinogens', 'Moderate Potency',
    { subcategory: 'Harmala Alkaloids & MAOIs', potencyFactor: 50, scheduleStatus: 'Unscheduled', routes: { oral: { threshold: '30 mg', light: '50-100 mg', common: '100-200 mg', strong: '200-300 mg', heavy: '300+ mg', onset: '30-60 min', peak: '2-3 hrs', duration: '5-8 hrs' } } },
    'Third major Banisteriopsis caapi alkaloid acting primarily as a weak serotonin reuptake inhibitor contributing to emotional elevation in Ayahuasca brews.',
    { urineDetection: '1-3 days', halfLife: '4-7 hours' }
  ],

  // --- Synthetic Cannabinoids (JWH, AB, ADB, PB, APINACA & CUMYL Series) ---
  ['jwh-073', 'JWH-073 (1-Butyl-3-(1-naphthoyl)indole)', 'JWH-073', ['JWH-073'], 'Synthetic Cannabinoid', 'High', 'Synthetic Cannabinoids (JWH Series)', 'Extreme Potency (Milligram Tier)',
    { subcategory: 'Naphthoylindoles', potencyFactor: 110, scheduleStatus: 'Schedule I / Class B', routes: { smoked: { threshold: '0.5 mg', light: '1-2.5 mg', common: '2.5-5 mg', strong: '5-8 mg', heavy: '8+ mg', onset: '10-30 sec', peak: '5-15 min', duration: '1-2 hrs' } } },
    'First-generation synthetic cannabinoid synthesized by John W. Huffman. High-affinity full agonist at CB1 and CB2.',
    { urineDetection: '2-7 days', halfLife: '2.5 hours' }
  ],
  ['jwh-122', 'JWH-122 (4-Methylnaphthoylindole)', 'JWH-122', ['JWH-122'], 'Synthetic Cannabinoid', 'Very High', 'Synthetic Cannabinoids (JWH Series)', 'Extreme Potency (Milligram Tier)',
    { subcategory: 'Naphthoylindoles', potencyFactor: 125, scheduleStatus: 'Schedule I / Class B', routes: { smoked: { threshold: '0.3 mg', light: '0.6-1.5 mg', common: '1.5-3.5 mg', strong: '3.5-6 mg', heavy: '6+ mg', onset: '10-30 sec', peak: '5-15 min', duration: '1.5-3 hrs' } } },
    '4-Methyl analogue of JWH-018 displaying potent CB1 affinity (Ki = 0.69 nM).',
    { urineDetection: '3-10 days', halfLife: '3.2 hours' }
  ],
  ['jwh-210', 'JWH-210 (4-Ethylnaphthoylindole)', 'JWH-210', ['JWH-210'], 'Synthetic Cannabinoid', 'Very High', 'Synthetic Cannabinoids (JWH Series)', 'Extreme Potency (Milligram Tier)',
    { subcategory: 'Naphthoylindoles', potencyFactor: 130, scheduleStatus: 'Schedule I / Class B', routes: { smoked: { threshold: '0.2 mg', light: '0.5-1.5 mg', common: '1.5-3 mg', strong: '3-5 mg', heavy: '5+ mg', onset: '10-30 sec', peak: '5-20 min', duration: '2-4 hrs' } } },
    '4-Ethyl naphthoylindole with sub-nanomolar CB1 binding (Ki = 0.46 nM).',
    { urineDetection: '3-10 days', halfLife: '3.5 hours' }
  ],
  ['jwh-250', 'JWH-250 (1-Pentyl-3-(2-methoxyphenylacetyl)indole)', 'JWH-250', ['JWH-250'], 'Synthetic Cannabinoid', 'High', 'Synthetic Cannabinoids (JWH Series)', 'Extreme Potency (Milligram Tier)',
    { subcategory: 'Phenylacetylindoles', potencyFactor: 105, scheduleStatus: 'Schedule I / Class B', routes: { smoked: { threshold: '0.8 mg', light: '1.5-3 mg', common: '3-6 mg', strong: '6-10 mg', heavy: '10+ mg', onset: '10-30 sec', peak: '5-15 min', duration: '1-2.5 hrs' } } },
    'Phenylacetylindole cannabinoid lacking the naphthoyl ring, yielding distinct clearance and metabolites.',
    { urineDetection: '2-7 days', halfLife: '2.8 hours' }
  ],
  ['am-2201', 'AM-2201 (1-(5-Fluoropentyl)-3-(1-naphthoyl)indole)', 'AM-2201', ['AM-2201'], 'Synthetic Cannabinoid', 'Extreme', 'Synthetic Cannabinoids (Fluorinated)', 'Extreme Potency (Microgram Tier)',
    { subcategory: 'Fluorinated Cannabinoids', potencyFactor: 145, scheduleStatus: 'Schedule I / Class B', routes: { smoked: { threshold: '0.1 mg (100 µg)', light: '0.2-0.5 mg', common: '0.5-1.2 mg', strong: '1.2-2.2 mg', heavy: '2.2+ mg (SEIZURE RISK)', onset: '10-30 sec', peak: '2-10 min', duration: '1-2.5 hrs' } } },
    'Ultra-potent fluorinated analogue of JWH-018 synthesized by Alexandros Makriyannis. Notorious for precipitating panic attacks, seizures, vomiting, and kidney failure.',
    { urineDetection: '3-10 days', halfLife: '2.4 hours' }
  ],
  ['ur-144', 'UR-144 (KM-X1 · (1-Pentyl-1H-indol-3-yl)(2,2,3,3-tetramethylcyclopropyl)methanone)', 'UR-144', ['KM-X1'], 'Synthetic Cannabinoid', 'High', 'Synthetic Cannabinoids (Cyclopropyl)', 'High Potency',
    { subcategory: 'Cyclopropylindoles', potencyFactor: 100, scheduleStatus: 'Schedule I', routes: { smoked: { threshold: '0.5 mg', light: '1-2.5 mg', common: '2.5-5 mg', strong: '5-8 mg', heavy: '8+ mg', onset: '15-45 sec', peak: '5-15 min', duration: '1-2 hrs' } } },
    'Tetramethylcyclopropylindole designed by Abbott Laboratories with high CB2 selectivity.',
    { urineDetection: '2-7 days', halfLife: '3.0 hours' }
  ],
  ['5f-ur-144', '5F-UR-144 (XLR-11 · 5-Fluoro-UR-144)', '5F-UR-144', ['XLR-11', '5F-UR-144'], 'Synthetic Cannabinoid', 'Extreme', 'Synthetic Cannabinoids (Fluorinated)', 'Extreme Potency / Acute Kidney Injury Liability',
    { subcategory: 'Fluorinated Cannabinoids', potencyFactor: 135, scheduleStatus: 'Schedule I / Class B', routes: { smoked: { threshold: '0.2 mg', light: '0.5-1.2 mg', common: '1.2-2.5 mg', strong: '2.5-4 mg', heavy: '4+ mg (Renal Failure Risk)', onset: '10-30 sec', peak: '5-15 min', duration: '1-2.5 hrs' } } },
    'Fluorinated cyclopropyl cannabinoid linked in CDC epidemiological alerts to numerous outbreaks of acute tubular necrosis and acute kidney injury (AKI).',
    { urineDetection: '3-10 days', halfLife: '2.6 hours' }
  ],
  ['ab-fubinaca', 'AB-FUBINACA (N-(1-Amino-3-methyl-1-oxobutan-2-yl)-1-(4-fluorobenzyl)-1H-indazole-3-carboxamide)', 'AB-FUBINACA', ['AB-FUBINACA'], 'Synthetic Cannabinoid', 'Extreme', 'Synthetic Cannabinoids (Indazole Carboxamides)', 'Extreme Potency (Microgram Tier)',
    { subcategory: 'Indazole Carboxamides', potencyFactor: 145, scheduleStatus: 'Schedule I / Class B', routes: { smoked: { threshold: '0.1 mg (100 µg)', light: '0.25-0.6 mg', common: '0.6-1.5 mg', strong: '1.5-2.5 mg', heavy: '2.5+ mg', onset: '10-30 sec', peak: '5-15 min', duration: '1.5-3 hrs' } } },
    'Potent indazole carboxamide developed by Pfizer. High full agonist CB1 potency (Ki = 0.52 nM).',
    { urineDetection: '3-12 days', halfLife: '4.5 hours' }
  ],
  ['ab-pinaca', 'AB-PINACA (N-(1-Amino-3-methyl-1-oxobutan-2-yl)-1-pentyl-1H-indazole-3-carboxamide)', 'AB-PINACA', ['AB-PINACA'], 'Synthetic Cannabinoid', 'Extreme', 'Synthetic Cannabinoids (Indazole Carboxamides)', 'Extreme Potency (Microgram Tier)',
    { subcategory: 'Indazole Carboxamides', potencyFactor: 140, scheduleStatus: 'Schedule I / Class B', routes: { smoked: { threshold: '0.15 mg', light: '0.3-0.8 mg', common: '0.8-2 mg', strong: '2-3.5 mg', heavy: '3.5+ mg', onset: '10-30 sec', peak: '5-15 min', duration: '1.5-3 hrs' } } },
    'Potent indazole-3-carboxamide CB1 receptor full agonist.',
    { urineDetection: '3-10 days', halfLife: '4.0 hours' }
  ],
  ['ab-chminaca', 'AB-CHMINACA (N-(1-Amino-3-methyl-1-oxobutan-2-yl)-1-(cyclohexylmethyl)-1H-indazole-3-carboxamide)', 'AB-CHMINACA', ['AB-CHMINACA'], 'Synthetic Cannabinoid', 'Extreme', 'Synthetic Cannabinoids (Indazole Carboxamides)', 'Extreme Potency / Severe Toxicity',
    { subcategory: 'Indazole Carboxamides', potencyFactor: 150, scheduleStatus: 'Schedule I / Class B', routes: { smoked: { threshold: '0.1 mg', light: '0.2-0.5 mg', common: '0.5-1.2 mg', strong: '1.2-2.2 mg', heavy: '2.2+ mg', onset: '10-30 sec', peak: '5-15 min', duration: '2-4 hrs' } } },
    'Cyclohexylmethyl indazole carboxamide associated with acute toxic delirium, cardiovascular collapse, and hospitalizations worldwide.',
    { urineDetection: '3-14 days', halfLife: '5.2 hours' }
  ],
  ['5f-ab-pinaca', '5F-AB-PINACA (5-Fluoro-AB-PINACA)', '5F-AB-PINACA', ['5F-AB-PINACA'], 'Synthetic Cannabinoid', 'Extreme', 'Synthetic Cannabinoids (Fluorinated)', 'Extreme Potency (Microgram Tier)',
    { subcategory: 'Fluorinated Cannabinoids', potencyFactor: 150, scheduleStatus: 'Schedule I / Class B', routes: { smoked: { threshold: '0.08 mg (80 µg)', light: '0.15-0.4 mg', common: '0.4-1.0 mg', strong: '1.0-1.8 mg', heavy: '1.8+ mg', onset: '10-30 sec', peak: '5-15 min', duration: '1.5-3 hrs' } } },
    'Fluoropentyl indazole carboxamide displaying intense psychotropic full agonism.',
    { urineDetection: '3-12 days', halfLife: '4.0 hours' }
  ],
  ['adb-fubinaca', 'ADB-FUBINACA (N-(1-Amino-3,3-dimethyl-1-oxobutan-2-yl)-1-(4-fluorobenzyl)-1H-indazole-3-carboxamide)', 'ADB-FUBINACA', ['ADB-FUBINACA'], 'Synthetic Cannabinoid', 'Extreme', 'Synthetic Cannabinoids (Indazole Carboxamides)', 'Extreme Potency (Microgram Tier)',
    { subcategory: 'Indazole Carboxamides', potencyFactor: 155, scheduleStatus: 'Schedule I / Class B', routes: { smoked: { threshold: '0.05 mg (50 µg)', light: '0.1-0.3 mg', common: '0.3-0.8 mg', strong: '0.8-1.5 mg', heavy: '1.5+ mg', onset: '10-30 sec', peak: '5-15 min', duration: '2-4 hrs' } } },
    'Tert-leucinamide indazole carboxamide with sub-nanomolar CB1 potency. Implicated in mass casualty poisoning episodes.',
    { urineDetection: '4-14 days', halfLife: '6.0 hours' }
  ],
  ['adb-pinaca', 'ADB-PINACA (N-(1-Amino-3,3-dimethyl-1-oxobutan-2-yl)-1-pentyl-1H-indazole-3-carboxamide)', 'ADB-PINACA', ['ADB-PINACA'], 'Synthetic Cannabinoid', 'Extreme', 'Synthetic Cannabinoids (Indazole Carboxamides)', 'Extreme Potency (Microgram Tier)',
    { subcategory: 'Indazole Carboxamides', potencyFactor: 150, scheduleStatus: 'Schedule I / Class B', routes: { smoked: { threshold: '0.08 mg', light: '0.15-0.4 mg', common: '0.4-1.0 mg', strong: '1.0-1.8 mg', heavy: '1.8+ mg', onset: '10-30 sec', peak: '5-15 min', duration: '2-4 hrs' } } },
    'Indazole carboxamide designer drug synthesized with high affinity for human cannabinoid receptors.',
    { urineDetection: '3-12 days', halfLife: '5.0 hours' }
  ],
  ['adb-butinaca', 'ADB-BUTINACA (ADB-BINACA · N-(1-Amino-3,3-dimethyl-1-oxobutan-2-yl)-1-butyl-1H-indazole-3-carboxamide)', 'ADB-BUTINACA', ['ADB-BINACA'], 'Synthetic Cannabinoid', 'Extreme', 'Synthetic Cannabinoids (Indazole Carboxamides)', 'Extreme Potency (Microgram Tier)',
    { subcategory: 'Indazole Carboxamides', potencyFactor: 160, scheduleStatus: 'Schedule I / Class B', routes: { smoked: { threshold: '0.04 mg (40 µg)', light: '0.08-0.25 mg', common: '0.25-0.7 mg', strong: '0.7-1.4 mg', heavy: '1.4+ mg', onset: '10-30 sec', peak: '3-12 min', duration: '1.5-3.5 hrs' } } },
    'Butyl-tailed indazole cannabinoid predominant in modern illicit vape liquids and herbal mixtures with severe toxicity reports.',
    { urineDetection: '4-14 days', halfLife: '5.5 hours' }
  ],
  ['adb-4en-pinaca', 'ADB-4en-PINACA (ADB-PENINACA)', 'ADB-4en-PINACA', ['ADB-PENINACA'], 'Synthetic Cannabinoid', 'Extreme', 'Synthetic Cannabinoids (Alkene-Tailed)', 'Extreme Potency (Microgram Tier)',
    { subcategory: 'Alkene-Tailed Cannabinoids', potencyFactor: 160, scheduleStatus: 'Controlled analog', routes: { smoked: { threshold: '0.04 mg (40 µg)', light: '0.08-0.25 mg', common: '0.25-0.7 mg', strong: '0.7-1.3 mg', heavy: '1.3+ mg', onset: '10-30 sec', peak: '3-12 min', duration: '1.5-3 hrs' } } },
    'Terminal alkene-substituted synthetic cannabinoid rapidly introduced after halogenated bans.',
    { urineDetection: '4-14 days', halfLife: '5.2 hours' }
  ],
  ['5f-adb', '5F-ADB (5F-MDMB-PINACA · Methyl 2-(1-(5-fluoropentyl)-1H-indazole-3-carboxamido)-3,3-dimethylbutanoate)', '5F-ADB', ['5F-MDMB-PINACA'], 'Synthetic Cannabinoid', 'Extreme', 'Synthetic Cannabinoids (Fluorinated)', 'Extreme Potency (Microgram Tier / Fatal Overdose Risk)',
    { subcategory: 'Fluorinated Cannabinoids', potencyFactor: 165, scheduleStatus: 'Schedule I / Class B', routes: { smoked: { threshold: '0.03 mg (30 µg)', light: '0.06-0.2 mg', common: '0.2-0.5 mg', strong: '0.5-1.0 mg', heavy: '1.0+ mg (LETHAL RISK)', onset: '10-30 sec', peak: '2-10 min', duration: '1-3 hrs' } } },
    'One of the deadliest synthetic cannabinoids documented in forensic literature. High affinity full agonist responsible for hundreds of fatal intoxications.',
    { urineDetection: '4-14 days', halfLife: '4.8 hours' }
  ],
  ['4f-mdmb-butinaca', '4F-MDMB-BUTINACA (4F-MDMB-BINACA)', '4F-MDMB-BUTINACA', ['4F-MDMB-BINACA'], 'Synthetic Cannabinoid', 'Extreme', 'Synthetic Cannabinoids (Fluorinated)', 'Extreme Potency (Microgram Tier)',
    { subcategory: 'Fluorinated Cannabinoids', potencyFactor: 160, scheduleStatus: 'Schedule I / Class B', routes: { smoked: { threshold: '0.04 mg (40 µg)', light: '0.08-0.25 mg', common: '0.25-0.65 mg', strong: '0.65-1.2 mg', heavy: '1.2+ mg', onset: '10-30 sec', peak: '2-10 min', duration: '1.5-3 hrs' } } },
    'Fluorobutyl methyl ester indazole carboxamide subject to EMCDDA and WHO critical reviews due to widespread mortality.',
    { urineDetection: '4-14 days', halfLife: '5.0 hours' }
  ],
  ['5f-pb-22', '5F-PB-22 (5-Fluoro-PB-22 · Quinolin-8-yl 1-(5-fluoropentyl)-1H-indole-3-carboxylate)', '5F-PB-22', ['5F-QUPIC'], 'Synthetic Cannabinoid', 'Extreme', 'Synthetic Cannabinoids (Quinolinyl Carboxylates)', 'Extreme Potency (Microgram Tier)',
    { subcategory: 'Quinolinyl Carboxylates', potencyFactor: 145, scheduleStatus: 'Schedule I / Class B', routes: { smoked: { threshold: '0.1 mg', light: '0.25-0.6 mg', common: '0.6-1.5 mg', strong: '1.5-2.5 mg', heavy: '2.5+ mg', onset: '10-30 sec', peak: '5-15 min', duration: '1.5-3 hrs' } } },
    'Ester-linked synthetic cannabinoid containing an 8-hydroxyquinoline group.',
    { urineDetection: '3-10 days', halfLife: '3.8 hours' }
  ],
  ['pb-22', 'PB-22 (QUPIC · Quinolin-8-yl 1-pentyl-1H-indole-3-carboxylate)', 'PB-22', ['QUPIC'], 'Synthetic Cannabinoid', 'High', 'Synthetic Cannabinoids (Quinolinyl Carboxylates)', 'High Potency',
    { subcategory: 'Quinolinyl Carboxylates', potencyFactor: 135, scheduleStatus: 'Schedule I / Class B', routes: { smoked: { threshold: '0.15 mg', light: '0.3-0.8 mg', common: '0.8-2 mg', strong: '2-3.5 mg', heavy: '3.5+ mg', onset: '10-30 sec', peak: '5-15 min', duration: '1.5-3 hrs' } } },
    'Non-fluorinated parent quinolinyl ester cannabinoid.',
    { urineDetection: '3-10 days', halfLife: '3.5 hours' }
  ],
  ['apica', 'APICA (SDB-001 · 2NE1 · N-(1-Adamantyl)-1-pentyl-1H-indole-3-carboxamide)', 'APICA', ['SDB-001', '2NE1'], 'Synthetic Cannabinoid', 'High', 'Synthetic Cannabinoids (Adamantyl)', 'High Potency',
    { subcategory: 'Adamantylindoles', potencyFactor: 110, scheduleStatus: 'Schedule I', routes: { smoked: { threshold: '0.5 mg', light: '1-2.5 mg', common: '2.5-5 mg', strong: '5-8 mg', heavy: '8+ mg', onset: '15-45 sec', peak: '5-20 min', duration: '1.5-3 hrs' } } },
    'Adamantyl-bearing indole carboxamide full agonist.',
    { urineDetection: '3-8 days', halfLife: '3.6 hours' }
  ],
  ['5f-apica', '5F-APICA (5F-AKB48 indole analogue · 5F-SDB-001)', '5F-APICA', ['5F-SDB-001'], 'Synthetic Cannabinoid', 'Extreme', 'Synthetic Cannabinoids (Fluorinated)', 'Very High Potency',
    { subcategory: 'Fluorinated Cannabinoids', potencyFactor: 135, scheduleStatus: 'Schedule I', routes: { smoked: { threshold: '0.2 mg', light: '0.5-1.2 mg', common: '1.2-2.5 mg', strong: '2.5-4 mg', heavy: '4+ mg', onset: '10-30 sec', peak: '5-15 min', duration: '1.5-3 hrs' } } },
    '5-Fluoropentyl analogue of APICA with high affinity for CB1 and CB2.',
    { urineDetection: '3-10 days', halfLife: '3.8 hours' }
  ],
  ['apinaca', 'APINACA (AKB48 · N-(1-Adamantyl)-1-pentyl-1H-indazole-3-carboxamide)', 'APINACA (AKB48)', ['AKB48', 'APINACA'], 'Synthetic Cannabinoid', 'High', 'Synthetic Cannabinoids (Adamantyl)', 'High Potency',
    { subcategory: 'Adamantylindazoles', potencyFactor: 115, scheduleStatus: 'Schedule I / Class B', routes: { smoked: { threshold: '0.4 mg', light: '0.8-2 mg', common: '2-4 mg', strong: '4-7 mg', heavy: '7+ mg', onset: '10-30 sec', peak: '5-20 min', duration: '1.5-3 hrs' } } },
    'Indazole carboxamide adamantyl derivative identified in forensic seizures across Japan and Europe.',
    { urineDetection: '3-10 days', halfLife: '4.2 hours' }
  ],
  ['5f-akb48', '5F-AKB48 (5F-APINACA · 5-Fluoro-AKB48)', '5F-AKB48', ['5F-APINACA'], 'Synthetic Cannabinoid', 'Extreme', 'Synthetic Cannabinoids (Fluorinated)', 'Extreme Potency (Microgram Tier)',
    { subcategory: 'Fluorinated Cannabinoids', potencyFactor: 140, scheduleStatus: 'Schedule I / Class B', routes: { smoked: { threshold: '0.15 mg', light: '0.3-0.8 mg', common: '0.8-1.8 mg', strong: '1.8-3 mg', heavy: '3+ mg', onset: '10-30 sec', peak: '5-15 min', duration: '1.5-3 hrs' } } },
    'Fluorinated adamantyl indazole cannabinoid with potent central nervous system effects.',
    { urineDetection: '3-10 days', halfLife: '4.5 hours' }
  ],
  ['cumyl-pegaclone', 'CUMYL-PEGACLONE (SGT-151)', 'CUMYL-PEGACLONE', ['SGT-151'], 'Synthetic Cannabinoid', 'Extreme', 'Synthetic Cannabinoids (Gamma-Carbolinones)', 'Extreme Potency (Microgram Tier)',
    { subcategory: 'Gamma-Carbolinones', potencyFactor: 150, scheduleStatus: 'Controlled in DE, UK, US', routes: { smoked: { threshold: '0.08 mg (80 µg)', light: '0.15-0.4 mg', common: '0.4-1.0 mg', strong: '1.0-2.0 mg', heavy: '2.0+ mg', onset: '10-30 sec', peak: '5-15 min', duration: '2-4 hrs' } } },
    'Gamma-carbolinone-based cannabinoid receptor full agonist featuring a cumyl substituent.',
    { urineDetection: '4-12 days', halfLife: '5.8 hours' }
  ],
  ['cumyl-ch-megaclone', 'CUMYL-CH-MEGACLONE (SGT-270)', 'CUMYL-CH-MEGACLONE', ['SGT-270'], 'Synthetic Cannabinoid', 'Extreme', 'Synthetic Cannabinoids (Gamma-Carbolinones)', 'Extreme Potency (Microgram Tier)',
    { subcategory: 'Gamma-Carbolinones', potencyFactor: 155, scheduleStatus: 'Controlled analog', routes: { smoked: { threshold: '0.06 mg (60 µg)', light: '0.12-0.35 mg', common: '0.35-0.9 mg', strong: '0.9-1.8 mg', heavy: '1.8+ mg', onset: '10-30 sec', peak: '5-15 min', duration: '2-4 hrs' } } },
    'Cyclohexylmethyl substituted gamma-carbolinone cannabinoid displaying intense CB1 affinity.',
    { urineDetection: '4-14 days', halfLife: '6.2 hours' }
  ],

  // --- Deliriants & Anticholinergics (DPH, Scopolamine, Atropine, Datura, etc.) ---
  ['diphenhydramine', 'Diphenhydramine (Benadryl · DPH)', 'Diphenhydramine (DPH)', ['Benadryl', 'DPH', 'Sleep-Eze'], 'Antihistamine / Anticholinergic Deliriant', 'High', 'Deliriants & Anticholinergics', 'Moderate Potency / Severe Delirium at High Doses',
    { subcategory: 'H1 Antihistamines & Anticholinergics', potencyFactor: 65, scheduleStatus: 'OTC Medicine', routes: { oral: { threshold: '12.5 mg (Therapeutic: 25-50 mg)', light: '50-100 mg', common: '100-250 mg', strong: '250-450 mg', heavy: '450-800+ mg (Severe Delirium / Seizure Risk)', onset: '30-60 min', peak: '2-3 hrs', duration: '6-10 hrs' } } },
    'First-generation ethanolamine H1 antagonist and potent competitive muscarinic acetylcholine receptor (mAChR M1-M5) blocker. At supratherapeutic doses, triggers anticholinergic delirium characterized by true hallucinations (e.g. phantom spiders, conversational shadows), hyperthermia, urinary retention, cardiac arrhythmias, and cognitive memory fragmentation.',
    { urineDetection: '2-4 days', halfLife: '4-9 hours' }
  ],
  ['dimenhydrinate', 'Dimenhydrinate (Dramamine · Gravol)', 'Dimenhydrinate', ['Dramamine', 'Gravol'], 'Antihistamine / Anticholinergic Deliriant', 'High', 'Deliriants & Anticholinergics', 'Low-Moderate Potency',
    { subcategory: 'H1 Antihistamines & Anticholinergics', potencyFactor: 55, scheduleStatus: 'OTC Medicine', routes: { oral: { threshold: '25 mg (Therapeutic: 50-100 mg)', light: '100-200 mg', common: '200-400 mg', strong: '400-700 mg', heavy: '700+ mg', onset: '30-60 min', peak: '2-3 hrs', duration: '6-10 hrs' } } },
    'Salt containing diphenhydramine and 8-chlorotheophylline (approx 53-55% diphenhydramine equimolar content).',
    { urineDetection: '2-4 days', halfLife: '5-9 hours' }
  ],
  ['doxylamine', 'Doxylamine (Unisom · Donormyl · Mereprine)', 'Doxylamine', ['Unisom', 'Donormyl'], 'Antihistamine / Anticholinergic Deliriant', 'High', 'Deliriants & Anticholinergics', 'Moderate Potency',
    { subcategory: 'H1 Antihistamines & Anticholinergics', potencyFactor: 70, scheduleStatus: 'OTC Medicine', routes: { oral: { threshold: '6.25 mg (Therapeutic: 12.5-25 mg)', light: '25-50 mg', common: '50-150 mg', strong: '150-300 mg', heavy: '300+ mg (Rhabdomyolysis Risk)', onset: '20-45 min', peak: '1.5-2.5 hrs', duration: '8-12 hrs' } } },
    'Potent first-generation ethanolamine antihistamine and anticholinergic. Supratherapeutic overdoses carry elevated risk of rhabdomyolysis and acute renal failure.',
    { urineDetection: '2-4 days', halfLife: '10-12 hours' }
  ],
  ['promethazine', 'Promethazine (Phenergan · Sominex active)', 'Promethazine', ['Phenergan', 'Avomine'], 'Phenothiazine Antihistamine / Anticholinergic', 'High', 'Deliriants & Anticholinergics', 'Moderate Potency',
    { subcategory: 'Phenothiazines', potencyFactor: 70, scheduleStatus: 'Prescription / Schedule V', routes: { oral: { threshold: '10 mg (Therapeutic: 25-50 mg)', light: '25-75 mg', common: '75-150 mg', strong: '150-250 mg', heavy: '250+ mg', onset: '20-40 min', peak: '1.5-3 hrs', duration: '8-16 hrs' } } },
    'Phenothiazine derivative with strong H1 antihistamine, moderate muscarinic anticholinergic, and antidopaminergic properties. Co-administered with codeine in "purple drank" cough syrups.',
    { urineDetection: '2-5 days', halfLife: '10-19 hours' }
  ],
  ['hydroxyzine', 'Hydroxyzine (Atarax · Vistaril)', 'Hydroxyzine', ['Atarax', 'Vistaril'], 'Antihistamine / Anxiolytic', 'Moderate', 'Deliriants & Anticholinergics', 'Moderate Potency',
    { subcategory: 'Piperazines', potencyFactor: 60, scheduleStatus: 'Prescription', routes: { oral: { threshold: '10 mg', light: '25-50 mg', common: '50-100 mg', strong: '100-200 mg', heavy: '200+ mg', onset: '30-60 min', peak: '2-3 hrs', duration: '8-14 hrs' } } },
    'First-generation piperazine H1 receptor inverse agonist and 5-HT2A antagonist approved for anxiety and pruritus.',
    { urineDetection: '2-4 days (cetirizine metabolite)', halfLife: '14-20 hours' }
  ],
  ['scopolamine', 'Scopolamine (Hyoscine · Devil\'s Breath · Transderm Scop)', 'Scopolamine (Hyoscine)', ['Hyoscine', 'Devil\'s Breath', 'Borrachero active'], 'Anticholinergic Deliriant / Tropane Alkaloid', 'Extreme', 'Deliriants & Anticholinergics', 'Extreme Potency (Microgram Tier / True Delirium)',
    { subcategory: 'Tropane Alkaloids (Solanaceae)', potencyFactor: 140, scheduleStatus: 'Prescription / Regulated', routes: { oral: { threshold: '0.1 mg (100 µg)', light: '0.25-0.5 mg', common: '0.5-1.0 mg', strong: '1.0-2.0 mg', heavy: '2.0+ mg (Severe Central Anticholinergic Syndrome / Amnesia)', onset: '30-60 min', peak: '1.5-3 hrs', duration: '8-24 hrs' }, transdermal: { threshold: '0.5 mg patch (releases 1 mg/72 hrs)', light: '1 patch', common: '1 patch', strong: '2 patches', heavy: '2+ patches', onset: '4-8 hrs', peak: '12-24 hrs', duration: '72 hrs' } } },
    'Naturally occurring belladonna tropane alkaloid from Datura, Brugmansia, and Hyoscyamus niger. High-affinity competitive muscarinic blocker that readily penetrates the blood-brain barrier causing complete anterograde amnesia, somnambulism, hyperthermia, cycloplegia, and intractable delirium.',
    { urineDetection: '2-3 days', halfLife: '4.5-9 hours' }
  ],
  ['hyoscyamine', 'Hyoscyamine (Levsinex · Anaspaz · Daturine)', 'Hyoscyamine', ['Levsinex', 'Daturine', 'L-Atropine'], 'Anticholinergic / Tropane Alkaloid', 'Extreme', 'Deliriants & Anticholinergics', 'Extreme Potency (Microgram Tier)',
    { subcategory: 'Tropane Alkaloids (Solanaceae)', potencyFactor: 135, scheduleStatus: 'Prescription', routes: { oral: { threshold: '0.075 mg (75 µg)', light: '0.125-0.25 mg', common: '0.25-0.5 mg', strong: '0.5-1.0 mg', heavy: '1.0+ mg', onset: '20-40 min', peak: '1-2 hrs', duration: '6-12 hrs' } } },
    'The levorotatory isomer of atropine with twice the antimuscarinic potency of the racemic mixture.',
    { urineDetection: '2-3 days', halfLife: '3.5-5 hours' }
  ],
  ['biperiden', 'Biperiden (Akineton)', 'Biperiden', ['Akineton'], 'Anticholinergic / Antiparkinsonian', 'High', 'Deliriants & Anticholinergics', 'High Potency',
    { subcategory: 'Synthetic Anticholinergics', potencyFactor: 80, scheduleStatus: 'Prescription', routes: { oral: { threshold: '0.5 mg', light: '1-2 mg', common: '2-4 mg', strong: '4-8 mg', heavy: '8+ mg', onset: '30-60 min', peak: '1.5-2.5 hrs', duration: '6-10 hrs' } } },
    'Relatively selective muscarinic M1 receptor antagonist used to manage extrapyramidal symptoms and parkinsonism.',
    { urineDetection: '2-4 days', halfLife: '18-24 hours' }
  ],
  ['trihexyphenidyl', 'Trihexyphenidyl (Artane · Benzhexol)', 'Trihexyphenidyl', ['Artane', 'Benzhexol'], 'Anticholinergic / Antiparkinsonian', 'High', 'Deliriants & Anticholinergics', 'High Potency',
    { subcategory: 'Synthetic Anticholinergics', potencyFactor: 80, scheduleStatus: 'Prescription', routes: { oral: { threshold: '0.5 mg', light: '1-2 mg', common: '2-5 mg', strong: '5-10 mg', heavy: '10+ mg', onset: '30-60 min', peak: '1.5-2 hrs', duration: '6-12 hrs' } } },
    'Synthetic tertiary amine antimuscarinic agent used in Parkinson disease; misused for euphoriant and dissociative effects at high doses.',
    { urineDetection: '2-4 days', halfLife: '5-10 hours' }
  ],
  ['benztropine', 'Benztropine (Cogentin)', 'Benztropine', ['Cogentin'], 'Anticholinergic / Dopamine Reuptake Inhibitor', 'High', 'Deliriants & Anticholinergics', 'High Potency',
    { subcategory: 'Synthetic Anticholinergics', potencyFactor: 85, scheduleStatus: 'Prescription', routes: { oral: { threshold: '0.25 mg', light: '0.5-1 mg', common: '1-2 mg', strong: '2-4 mg', heavy: '4+ mg', onset: '30-60 min', peak: '1.5-3 hrs', duration: '8-14 hrs' } } },
    'Centrally acting muscarinic antagonist combined with weak dopamine reuptake inhibition used in antipsychotic-induced acute dystonia.',
    { urineDetection: '2-5 days', halfLife: '12-24 hours' }
  ],
  ['datura', 'Datura Stramonium (Jimsonweed · Thornapple · Alkaloids)', 'Datura Stramonium (Alkaloids)', ['Jimsonweed', 'Thorn Apple', 'Locoweed', 'Devil\'s Trumpet'], 'Botanical Anticholinergic Deliriant', 'Extreme', 'Deliriants & Anticholinergics', 'Highly Dangerous / Unpredictable Alkaloid Concentration',
    { subcategory: 'Solanaceae Plant Preparations', potencyFactor: 150, scheduleStatus: 'Noxious weed / Toxic botanical', routes: { oral: { threshold: '5-10 seeds (~0.5 mg total alkaloids)', light: '10-25 seeds', common: '25-50 seeds (High Toxicity)', strong: '50-100 seeds (Severe Delirium)', heavy: '100+ seeds (Life-Threatening Poisoning / Coma)', onset: '30-90 min', peak: '3-6 hrs', duration: '24-72 hrs' } } },
    'Potent anticholinergic botanical of the Solanaceae family containing variable concentrations of hyoscyamine, scopolamine, and atropine. Clinical intoxication presents with classic anticholinergic toxidrome ("blind as a bat, mad as a hatter, red as a beet, hot as a hare, dry as a bone"), total loss of reality contact, severe hyperthermia, seizures, and prolonged amnesia.',
    { urineDetection: '3-7 days', halfLife: '4-9 hours (alkaloid mix)' }
  ]
];

writePartFile(6, part6Raw);
console.log('Generated Part 6: ' + part6Raw.length + ' substances in src/data/expandedSubstancesPart6.ts');
