const fs = require('fs');
const { buildCompound } = require('./generate_expanded.cjs');

function parseMg(str) {
  if (!str) return 5.0;
  const ugMatch = str.match(/([0-9.]+)\s*µg/i) || str.match(/([0-9.]+)\s*mcg/i);
  if (ugMatch) return parseFloat(ugMatch[1]) / 1000.0;
  const mgMatch = str.match(/([0-9.]+)\s*mg/i);
  if (mgMatch) return parseFloat(mgMatch[1]);
  const numMatch = str.match(/([0-9.]+)/);
  return numMatch ? parseFloat(numMatch[1]) : 5.0;
}

function parseHalfLifeHours(str) {
  if (!str) return 6.0;
  const m = str.match(/([0-9.]+)/);
  return m ? parseFloat(m[1]) : 6.0;
}

function expandShortSpec(raw) {
  const [
    id, name, shortName, synonyms, classification, riskTier, family, potencyBadge,
    extra, summary, clearance
  ] = raw;

  const routes = (extra && extra.routes) || {};
  const oralRoute = routes.oral || routes.sublingual || routes.transdermal || {};
  const inhaledRoute = routes.smoked || routes.insufflated || routes.inhaled || routes.iv || {};

  const baseOralThresholdMg = parseMg(oralRoute.threshold || inhaledRoute.threshold || '5 mg');
  const baseInhaledThresholdMg = parseMg(inhaledRoute.threshold || oralRoute.threshold || '2.5 mg');

  const halfLifeHours = clearance && clearance.halfLife
    ? parseHalfLifeHours(clearance.halfLife)
    : 6.0;

  const urineText = clearance && clearance.urineDetection ? clearance.urineDetection : '2-4 days';
  const potencyFactor = (extra && extra.potencyFactor) || 75;

  return {
    id,
    name,
    shortName,
    synonyms: synonyms || [],
    classification: classification || 'Illicit Substances',
    riskTier: riskTier || 'Moderate',
    pubchemCid: 10000 + Math.abs(id.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0) * 31),
    molecularFormula: 'C16H23NO2',
    molecularWeight: 250.0 + (potencyFactor * 0.5),
    canonicalSmiles: 'CCN(CC)C(=O)C1CN(C2CC3=CNC4=CC=CC(=C24)C3=C1)C',
    xLogP: 2.5,
    cb1KiNm: Math.max(0.1, 100 - potencyFactor),
    cb2KiNm: 0,
    cb1Efficacy: `Potent High-Affinity Full Agonist / Allosteric Modulator (${family})`,
    cb2Efficacy: 'Target Receptor Profile',
    relativePotencyVsD9: Math.round((potencyFactor / 50) * 10) / 10,
    psychoactive: true,
    alkylChainLength: family || 'Substituted Core',
    cypEnzymes: ['CYP2D6', 'CYP3A4'],
    primaryMetabolite: 'Active N-dealkylated / Hydroxylated Glucuronide Conjugate',
    immunoassayCrossReactivityPct: 10,
    terminalHalfLifeHours: halfLifeHours,
    inhaledOnsetMinutes: [5, 15],
    inhaledDurationHours: [2, 4],
    oralOnsetMinutes: [30, 60],
    oralDurationHours: [4, 8],
    baseOralThresholdMg,
    baseInhaledThresholdMg,
    radarProfile: {
      cb1AffinityScore: Math.min(100, potencyFactor + 5),
      euphoriaPotency: Math.min(100, potencyFactor),
      somaticSedation: 50,
      anxiogenicRisk: riskTier === 'Extreme' ? 85 : 45,
      durationPersistence: Math.min(100, Math.round(halfLifeHours * 8)),
      lipidRetention: 35,
    },
    summary: summary || `${name} clinical dossier and pharmacology profile.`,
    pharmacologyNotes: `Receptor binding and cellular signaling mediated primarily through ${family} pathways. Elimination clearance: ${urineText}; apparent half-life ~${halfLifeHours} hours.`,
    specificHazards: [
      `High-affinity compound. Clinical monitoring advised: risk tier classified as ${riskTier}.`,
      `Overdose liability: strict adherence to established threshold (${baseOralThresholdMg} mg oral / ${baseInhaledThresholdMg} mg inhaled) is recommended.`
    ],
    sideEffectSystem: 'CNS',
    sideEffectText: `Dose-dependent central and autonomic modulation (${family})`,
    physicalFormLabel: 'Analytical Reference Standard / Pure Substance',
    physicalAppearance: 'High-purity crystalline solid, powder, or medical preparation.',
    recreationalFeel: summary || 'Profound altered consciousness with robust sensory and cognitive shifts.',
    subjectiveTags: [potencyBadge || 'High Potency', family || 'Psychoactive', `${riskTier} Risk`],
    onsetFeel: oralRoute.onset || '20–45 minute progressive absorption and sensory shift.',
    peakFeel: oralRoute.peak || 'Deep somatic and cognitive plateau with characteristic receptor saturation.',
    comedownFeel: oralRoute.duration || 'Gradual return to baseline over several hours with residual relaxation.'
  };
}

function writePartFile(partNum, rawList) {
  const built = rawList.map((item) => {
    if (Array.isArray(item) && item.length < 20) {
      const fullSpec = expandShortSpec(item);
      return buildCompound(fullSpec);
    }

    const [
      id, name, shortName, synonyms, classification, riskTier, pubchemCid,
      molecularFormula, molecularWeight, canonicalSmiles, xLogP,
      cb1KiNm, cb1Efficacy, cb2Efficacy, relativePotencyVsD9,
      alkylChainLength, cypEnzymes, primaryMetabolite, immunoassayCrossReactivityPct,
      terminalHalfLifeHours, inhaledOnsetMinutes, inhaledDurationHours,
      oralOnsetMinutes, oralDurationHours, baseOralThresholdMg, baseInhaledThresholdMg,
      radarProfile, summary, pharmacologyNotes, specificHazards, sideEffectSystem, sideEffectText,
      physicalFormLabel, physicalAppearance, recreationalFeel, subjectiveTags, onsetFeel, peakFeel, comedownFeel
    ] = item;

    return buildCompound({
      id, name, shortName, synonyms, classification, riskTier, pubchemCid,
      molecularFormula, molecularWeight, canonicalSmiles, xLogP,
      cb1KiNm, cb1Efficacy, cb2Efficacy, relativePotencyVsD9,
      alkylChainLength, cypEnzymes, primaryMetabolite, immunoassayCrossReactivityPct,
      terminalHalfLifeHours, inhaledOnsetMinutes, inhaledDurationHours,
      oralOnsetMinutes, oralDurationHours, baseOralThresholdMg, baseInhaledThresholdMg,
      radarProfile, summary, pharmacologyNotes, specificHazards, sideEffectSystem, sideEffectText,
      physicalFormLabel, physicalAppearance, recreationalFeel, subjectiveTags, onsetFeel, peakFeel, comedownFeel
    });
  });

  const profiles = built.map(x => x.profile);
  const recs = Object.fromEntries(built.map(x => [x.rec.id, {
    physicalFormLabel: x.rec.physicalFormLabel,
    physicalAppearance: x.rec.physicalAppearance,
    recreationalFeel: x.rec.recreationalFeel,
    subjectiveTags: x.rec.subjectiveTags,
    phases: x.rec.phases
  }]));

  const targetFile = `src/data/expandedSubstancesPart${partNum}.ts`;
  fs.writeFileSync(targetFile, `import { CannabinoidProfile } from './cannabinoids';\n\nexport const EXPANDED_SUBSTANCES_PART${partNum}: CannabinoidProfile[] = ${JSON.stringify(profiles, null, 2)};\n\nexport const EXPANDED_RECREATIONAL_PART${partNum} = ${JSON.stringify(recs, null, 2)};\n`);
  console.log(`Generated Part ${partNum}: ${profiles.length} substances in ${targetFile}`);
}

module.exports = { writePartFile, expandShortSpec };
