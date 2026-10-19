const fs = require('fs');

function buildCompound(spec) {
  const {
    id, name, shortName, synonyms, classification, riskTier, pubchemCid,
    molecularFormula, molecularWeight, canonicalSmiles, xLogP,
    cb1KiNm, cb1Efficacy, cb2Efficacy, relativePotencyVsD9,
    alkylChainLength, cypEnzymes, primaryMetabolite, immunoassayCrossReactivityPct,
    terminalHalfLifeHours, inhaledOnsetMinutes, inhaledDurationHours,
    oralOnsetMinutes, oralDurationHours, baseOralThresholdMg, baseInhaledThresholdMg,
    radarProfile, summary, pharmacologyNotes, specificHazards, sideEffectSystem, sideEffectText,
    recreationalFeel, physicalFormLabel, physicalAppearance, subjectiveTags, onsetFeel, peakFeel, comedownFeel
  } = spec;

  return {
    profile: {
      id,
      name,
      shortName,
      synonyms,
      classification,
      riskTier,
      pubchemCid,
      molecularFormula,
      molecularWeight,
      canonicalSmiles,
      xLogP,
      cb1KiNm,
      cb2KiNm: 0,
      cb1Efficacy,
      cb2Efficacy,
      relativePotencyVsD9,
      psychoactive: true,
      alkylChainLength,
      cypEnzymes,
      primaryMetabolite,
      immunoassayCrossReactivityPct,
      terminalHalfLifeHours,
      inhaledOnsetMinutes,
      inhaledDurationHours,
      oralOnsetMinutes,
      oralDurationHours,
      baseOralThresholdMg,
      baseInhaledThresholdMg,
      radarProfile,
      summary,
      pharmacologyNotes,
      specificHazards,
      sideEffects: [
        {
          effect: sideEffectText || 'Dose-Dependent Central & Autonomic Modulation',
          system: sideEffectSystem || 'CNS',
          likelihood: 'Common',
          severity: riskTier === 'Extreme' ? 'Severe' : 'Moderate',
          mechanism: cb1Efficacy,
        },
      ],
      provenanceCitation: {
        label: `Clinical & Forensic Toxicology Reference · ${shortName}`,
        source: `PubChem CID ${pubchemCid}`,
        pmidOrUrl: `https://pubchem.ncbi.nlm.nih.gov/compound/${pubchemCid}`,
      },
    },
    rec: {
      id,
      physicalFormLabel,
      physicalAppearance,
      recreationalFeel,
      subjectiveTags,
      phases: {
        onsetFeel,
        peakFeel,
        comedownFeel,
      },
    }
  };
}

module.exports = { buildCompound };
