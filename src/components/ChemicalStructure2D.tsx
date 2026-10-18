import React from 'react';
import { CannabinoidProfile } from '../data/cannabinoids';

interface ChemicalStructure2DProps {
  compound: CannabinoidProfile;
}

export const ChemicalStructure2D: React.FC<ChemicalStructure2DProps> = ({
  compound,
}) => {
  const id = compound.id;

  // Determine structural features for accurate 2D skeletal depiction across all catalog and dynamic derivatives
  const isIndoleOrIndazole = compound.classification === 'Synthetic Agonist';
  const isOpenRingCbd =
    id.startsWith('cbd') ||
    id.startsWith('9h-cbd') ||
    id.startsWith('h4cbd') ||
    id.startsWith('cbg') ||
    id.startsWith('10-oh-cbg');
  const isAromaticCbn = id.startsWith('cbn');
  const is9R =
    compound.classification === '9H- Enriched Series' ||
    id.startsWith('9h-') ||
    id.endsWith('-mod-9h');
  const hasC9Oh = id.startsWith('9-oh-') || id.endsWith('-mod-9oh');
  const hasC10Oh = id.startsWith('10-oh-') || id.endsWith('-mod-10oh');
  const hasC8Oh = id.startsWith('8-oh-') || id.endsWith('-mod-8oh');
  const hasC11Oh = id.startsWith('11-oh-') || id.endsWith('-mod-11oh');
  const isAcetate = id.includes('acetate') || id.endsWith('-mod-oac');

  const isDelta9 =
    !is9R &&
    (id.startsWith('delta9-') ||
      id.startsWith('thc-h') ||
      id.startsWith('thc-b') ||
      id.startsWith('thcv') ||
      id.startsWith('thco-') ||
      id.startsWith('9-oh-thc') ||
      id.startsWith('10-oh-thc') ||
      id.startsWith('11-oh-thc'));
  const isDelta8 = !is9R && id.startsWith('delta8-');

  // Alkyl chain carbon count (3 = propyl, 4 = butyl, 5 = pentyl, 6 = hexyl, 7 = heptyl)
  const chainCarbons = id.includes('thcv')
    ? 3
    : id.includes('thcb') || id.includes('thc-b')
    ? 4
    : id.includes('thch') || id.includes('thc-h') || id.includes('hhch')
    ? 6
    : id.includes('thcp') || id.includes('hhcp')
    ? 7
    : 5;

  // Build zig-zag alkyl chain path starting from (162, 108)
  const buildAlkylPath = (carbons: number) => {
    const pts: string[] = ['162,108'];
    let x = 162;
    let y = 108;
    for (let i = 1; i <= carbons; i++) {
      x += 13;
      y += i % 2 === 1 ? -9 : 9;
      pts.push(`${x},${y}`);
    }
    return {
      points: pts.join(' '),
      endX: x,
      endY: y,
    };
  };

  const alkyl = buildAlkylPath(chainCarbons);

  if (isIndoleOrIndazole) {
    return (
      <svg
        viewBox="0 0 280 175"
        className="w-full h-40 select-none"
        role="img"
        aria-label={`2D skeletal chemical structure of ${compound.name}`}
      >
        {/* Indole / Indazole Core */}
        <polygon
          points="55,65 80,50 105,65 105,95 80,110 55,95"
          fill="none"
          stroke="#0F172A"
          strokeWidth="2"
        />
        <circle
          cx="80"
          cy="80"
          r="15"
          fill="none"
          stroke="#64748B"
          strokeWidth="1.2"
          strokeDasharray="3 2"
        />
        <polygon
          points="105,65 132,56 146,80 132,104 105,95"
          fill="none"
          stroke="#0F172A"
          strokeWidth="2"
        />
        <text
          x="130"
          y="116"
          className="fill-blue-700 text-[10px] font-mono font-bold"
        >
          N
        </text>
        {/* N-Pentyl / Pentenyl Chain */}
        <polyline
          points="132,104 142,125 160,132 172,150 190,155"
          fill="none"
          stroke="#1A73E8"
          strokeWidth="2"
        />
        {/* Carbonyl / Carboxamide Linker */}
        <polyline
          points="146,80 172,72 195,88"
          fill="none"
          stroke="#0F172A"
          strokeWidth="2"
        />
        <line
          x1="170"
          y1="72"
          x2="170"
          y2="52"
          stroke="#DC2626"
          strokeWidth="1.8"
        />
        <line
          x1="174"
          y1="72"
          x2="174"
          y2="52"
          stroke="#DC2626"
          strokeWidth="1.8"
        />
        <text
          x="168"
          y="48"
          className="fill-rose-700 text-[10px] font-mono font-bold"
        >
          O
        </text>
        {/* Naphthoyl / tert-Leucine Methyl Ester Group */}
        <polygon
          points="195,88 220,75 242,88 242,115 220,128 195,115"
          fill="none"
          stroke="#0F172A"
          strokeWidth="2"
        />
        <text
          x="14"
          y="22"
          className="fill-rose-700 text-[9px] font-mono font-semibold"
        >
          {id.startsWith('jwh-018')
            ? 'Naphthoylindole Scaffold (Full CB1 Agonist)'
            : 'Indazole-3-Carboxamide (Super-Agonist)'}
        </text>
      </svg>
    );
  }

  // Benzodiazepine 1,4-diazepine + 5-phenyl scaffold
  if (compound.classification === 'Benzodiazepine') {
    const isTriazolo = id === 'alprazolam';
    const isNitro = id === 'clonazepam';
    const has3Oh = id === 'lorazepam';
    return (
      <svg
        viewBox="0 0 280 175"
        className="w-full h-40 select-none"
        role="img"
        aria-label={`2D skeletal chemical structure of ${compound.name}`}
      >
        {/* Fused Benzene Ring A */}
        <polygon
          points="52,65 76,50 100,65 100,95 76,110 52,95"
          fill="none"
          stroke="#0F172A"
          strokeWidth="2"
        />
        <circle
          cx="76"
          cy="80"
          r="14"
          fill="none"
          stroke="#64748B"
          strokeWidth="1.2"
          strokeDasharray="3 2"
        />
        {/* C7 Substituent (Cl or NO2) */}
        <line x1="52" y1="65" x2="34" y2="54" stroke="#0D9488" strokeWidth="2" />
        <text x="12" y="53" className="fill-teal-700 text-[10px] font-mono font-bold">
          {isNitro ? 'O2N' : 'Cl'}
        </text>
        {/* 7-Membered 1,4-Diazepine Ring B */}
        <polyline
          points="100,65 128,54 150,72 146,100 124,114 100,95"
          fill="none"
          stroke="#1A73E8"
          strokeWidth="2"
        />
        <text x="124" y="49" className="fill-blue-700 text-[10px] font-mono font-bold">
          N1
        </text>
        <text x="121" y="126" className="fill-blue-700 text-[10px] font-mono font-bold">
          N4
        </text>
        {/* Triazolo ring (Alprazolam) or C2=O carbonyl */}
        {isTriazolo ? (
          <>
            <polygon
              points="128,54 146,34 166,46 150,72"
              fill="none"
              stroke="#7C3AED"
              strokeWidth="2"
            />
            <text x="145" y="29" className="fill-violet-700 text-[9px] font-mono font-bold">
              N—N (Triazolo)
            </text>
          </>
        ) : (
          <>
            <line x1="150" y1="72" x2="168" y2="64" stroke="#DC2626" strokeWidth="2" />
            <text x="171" y="66" className="fill-rose-700 text-[10px] font-mono font-bold">
              =O
            </text>
          </>
        )}
        {/* C3-OH group on Lorazepam */}
        {has3Oh && (
          <>
            <line x1="146" y1="100" x2="168" y2="108" stroke="#0D9488" strokeWidth="2" />
            <text x="171" y="112" className="fill-teal-700 text-[10px] font-mono font-bold">
              OH (C3)
            </text>
          </>
        )}
        {/* Pendant 5-Phenyl Ring C */}
        <polygon
          points="124,114 144,126 144,150 124,162 104,150 104,126"
          fill="none"
          stroke="#0F172A"
          strokeWidth="1.8"
        />
        <text x="14" y="21" className="fill-indigo-700 text-[9px] font-mono font-semibold">
          {compound.shortName} · 1,4-Benzodiazepine GABAA PAM
        </text>
      </svg>
    );
  }

  // Opioid Analgesics (Morphinan or Phenylcyclohexanol/ene)
  if (compound.classification === 'Opioid Analgesic') {
    const isCyclohexylOpioid = id === 'tramadol' || id === 'tilidine';
    return (
      <svg
        viewBox="0 0 280 175"
        className="w-full h-40 select-none"
        role="img"
        aria-label={`2D skeletal chemical structure of ${compound.name}`}
      >
        {isCyclohexylOpioid ? (
          <>
            {/* Phenyl Ring */}
            <polygon
              points="55,68 79,54 103,68 103,96 79,110 55,96"
              fill="none"
              stroke="#0F172A"
              strokeWidth="2"
            />
            <circle cx="79" cy="82" r="14" fill="none" stroke="#64748B" strokeWidth="1.2" strokeDasharray="3 2" />
            {/* C-C Bridge to Cyclohexane / Cyclohexene Ring */}
            <line x1="103" y1="82" x2="128" y2="82" stroke="#1A73E8" strokeWidth="2.2" />
            <polygon
              points="128,82 148,64 176,64 190,82 176,104 148,104"
              fill="none"
              stroke="#0F172A"
              strokeWidth="2"
            />
            {/* Dimethylaminoethyl Side Chain */}
            <polyline points="176,104 198,122 220,116" fill="none" stroke="#1A73E8" strokeWidth="2" />
            <text x="223" y="120" className="fill-blue-700 text-[10px] font-mono font-bold">
              N(CH3)2
            </text>
            <text x="122" y="54" className="fill-teal-700 text-[10px] font-mono font-bold">
              {id === 'tramadol' ? 'HO (C1) · OCH3' : 'COOC2H5 (Ester)'}
            </text>
          </>
        ) : (
          <>
            {/* Phenanthrene Morphinan Core (Rings A, B, C, D) */}
            <polygon
              points="50,65 74,51 98,65 98,93 74,107 50,93"
              fill="none"
              stroke="#0F172A"
              strokeWidth="2"
            />
            <polygon
              points="98,65 122,51 146,65 146,93 122,107 98,93"
              fill="none"
              stroke="#0F172A"
              strokeWidth="2"
            />
            <polygon
              points="122,107 146,93 170,107 170,135 146,149 122,135"
              fill="none"
              stroke="#1A73E8"
              strokeWidth="2"
            />
            {/* 4,5-Epoxy Bridge */}
            <polyline points="74,107 92,128 122,135" fill="none" stroke="#DC2626" strokeWidth="1.8" />
            <text x="84" y="140" className="fill-rose-700 text-[9px] font-mono font-bold">
              -O-
            </text>
            {/* Piperidine N-CH3 */}
            <text x="175" y="112" className="fill-blue-700 text-[10px] font-mono font-bold">
              N-CH3
            </text>
            {/* C3 Phenolic OH or OCH3 */}
            <text x="15" y="62" className="fill-teal-700 text-[10px] font-mono font-bold">
              {id === 'morphine' ? 'HO (C3)' : 'H3CO (C3)'}
            </text>
          </>
        )}
        <text x="14" y="21" className="fill-rose-700 text-[9px] font-mono font-semibold">
          {compound.shortName} · μ-Opioid Receptor (MOR) Agonist
        </text>
      </svg>
    );
  }

  // Gabapentinoids (Pregabalin / Gabapentin)
  if (compound.classification === 'Gabapentinoid') {
    const isPregabalin = id === 'pregabalin';
    return (
      <svg
        viewBox="0 0 280 175"
        className="w-full h-40 select-none"
        role="img"
        aria-label={`2D skeletal chemical structure of ${compound.name}`}
      >
        {/* GABA Backbone Chain */}
        <polyline
          points="65,98 100,76 138,98 176,76 210,98"
          fill="none"
          stroke="#1A73E8"
          strokeWidth="2.4"
        />
        <text x="32" y="103" className="fill-blue-700 text-[10px] font-mono font-bold">
          H2N
        </text>
        <text x="214" y="103" className="fill-rose-700 text-[10px] font-mono font-bold">
          COOH
        </text>
        {isPregabalin ? (
          <>
            {/* (S)-3-Isobutyl Branch */}
            <polyline
              points="138,98 138,128 116,144 138,128 160,144"
              fill="none"
              stroke="#0F172A"
              strokeWidth="2"
            />
            <text x="108" y="160" className="fill-slate-700 text-[9px] font-mono font-semibold">
              (3S)-Isobutyl Group
            </text>
          </>
        ) : (
          <>
            {/* Spiro Cyclohexane Ring at C3 */}
            <polygon
              points="138,98 158,116 152,142 124,142 118,116"
              fill="none"
              stroke="#0F172A"
              strokeWidth="2"
            />
            <text x="105" y="158" className="fill-slate-700 text-[9px] font-mono font-semibold">
              3,3-Cyclohexyl Ring
            </text>
          </>
        )}
        <text x="14" y="21" className="fill-teal-700 text-[9px] font-mono font-semibold">
          {compound.shortName} · VGCC α2δ-1 Subunit Ligand
        </text>
      </svg>
    );
  }

  // Dissociatives (Ketamine Arylcyclohexylamine)
  if (compound.classification === 'Dissociative') {
    return (
      <svg
        viewBox="0 0 280 175"
        className="w-full h-40 select-none"
        role="img"
        aria-label={`2D skeletal chemical structure of ${compound.name}`}
      >
        {/* 2-Chlorophenyl Ring */}
        <polygon
          points="56,66 80,52 104,66 104,94 80,108 56,94"
          fill="none"
          stroke="#0F172A"
          strokeWidth="2"
        />
        <circle cx="80" cy="80" r="14" fill="none" stroke="#64748B" strokeWidth="1.2" strokeDasharray="3 2" />
        <text x="98" y="45" className="fill-teal-700 text-[10px] font-mono font-bold">
          Cl (ortho)
        </text>
        {/* C-C Bond to Cyclohexanone Ring */}
        <line x1="104" y1="80" x2="134" y2="80" stroke="#1A73E8" strokeWidth="2.2" />
        <polygon
          points="134,80 156,60 184,68 184,98 156,108"
          fill="none"
          stroke="#0F172A"
          strokeWidth="2"
        />
        {/* Ketone =O at C1 */}
        <line x1="156" y1="60" x2="156" y2="40" stroke="#DC2626" strokeWidth="2" />
        <text x="151" y="36" className="fill-rose-700 text-[10px] font-mono font-bold">
          =O
        </text>
        {/* Methylamino Group (-NHCH3) at C2 */}
        <line x1="134" y1="80" x2="124" y2="115" stroke="#1A73E8" strokeWidth="2" />
        <text x="108" y="130" className="fill-blue-700 text-[10px] font-mono font-bold">
          HN—CH3
        </text>
        <text x="14" y="21" className="fill-purple-700 text-[9px] font-mono font-semibold">
          {compound.shortName} · Arylcyclohexylamine NMDA Antagonist
        </text>
      </svg>
    );
  }

  // Empathogens, Rx Stimulants & Psychedelics
  if (
    compound.classification === 'Empathogen / Stimulant' ||
    compound.classification === 'Rx Stimulant' ||
    compound.classification === 'Psychedelic'
  ) {
    const isMdma = id === 'mdma';
    const isCocaine = id === 'cocaine';
    const is2cb = id === '2cb';
    const isLsd = id === 'lsd-25';
    const isPsilocybin = id === 'psilocybin';

    return (
      <svg
        viewBox="0 0 280 175"
        className="w-full h-40 select-none"
        role="img"
        aria-label={`2D skeletal chemical structure of ${compound.name}`}
      >
        {/* Methylenedioxy 5-membered ring for MDMA */}
        {isMdma && (
          <>
            <polygon
              points="50,66 32,78 50,94"
              fill="none"
              stroke="#DC2626"
              strokeWidth="1.8"
            />
            <text x="14" y="83" className="fill-rose-700 text-[9px] font-mono font-bold">
              O-CH2-O
            </text>
          </>
        )}
        {/* Core Aromatic / Tropane / Ergoline Ring */}
        <polygon
          points="56,64 82,49 108,64 108,94 82,109 56,94"
          fill="none"
          stroke="#0F172A"
          strokeWidth="2"
        />
        <circle cx="82" cy="79" r="14" fill="none" stroke="#64748B" strokeWidth="1.2" strokeDasharray="3 2" />

        {/* 2C-B Br and OCH3 substituents */}
        {is2cb && (
          <>
            <text x="24" y="64" className="fill-rose-700 text-[10px] font-mono font-bold">
              Br (C4)
            </text>
            <text x="72" y="42" className="fill-teal-700 text-[9px] font-mono font-bold">
              OCH3
            </text>
            <text x="72" y="124" className="fill-teal-700 text-[9px] font-mono font-bold">
              OCH3
            </text>
          </>
        )}

        {/* Indole / Ergoline second ring for Psilocybin or LSD-25 */}
        {(isPsilocybin || isLsd) && (
          <polygon
            points="108,64 134,55 148,79 134,103 108,94"
            fill="none"
            stroke="#7C3AED"
            strokeWidth="2"
          />
        )}

        {/* Side Chain (Ethyl-amine / Isopropylamine / Tropane Ester / Diethylamide) */}
        <polyline
          points="108,79 142,66 174,86 206,70"
          fill="none"
          stroke="#1A73E8"
          strokeWidth="2.2"
        />
        <text x="210" y="74" className="fill-blue-700 text-[10px] font-mono font-bold">
          {isCocaine
            ? 'Tropane-COOCH3'
            : isLsd
            ? 'CON(C2H5)2'
            : isPsilocybin
            ? 'N(CH3)2 · OPO3H2'
            : isMdma
            ? 'NH-CH3'
            : 'NH2'}
        </text>
        <text x="14" y="21" className="fill-blue-700 text-[9px] font-mono font-semibold">
          {compound.shortName} · {compound.classification}
        </text>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 280 175"
      className="w-full h-40 select-none"
      role="img"
      aria-label={`2D skeletal chemical structure of ${compound.name}`}
    >
      {/* Ring A: Cyclohexyl / Terpene Ring (Left) */}
      <polygon
        points="42,62 67,47 92,62 92,92 67,107 42,92"
        fill="none"
        stroke="#0F172A"
        strokeWidth="2"
      />

      {/* Unsaturation indicator in Ring A */}
      {isDelta9 && (
        <line
          x1="70"
          y1="53"
          x2="87"
          y2="63"
          stroke="#1A73E8"
          strokeWidth="2"
        />
      )}
      {isDelta8 && (
        <line
          x1="47"
          y1="63"
          x2="65"
          y2="53"
          stroke="#1A73E8"
          strokeWidth="2"
        />
      )}
      {isAromaticCbn && (
        <circle
          cx="67"
          cy="77"
          r="14"
          fill="none"
          stroke="#64748B"
          strokeWidth="1.2"
          strokeDasharray="3 2"
        />
      )}

      {/* C9 Methyl & Stereochemistry / C9-OH / C11-OH at top vertex (67,47) */}
      {is9R ? (
        <>
          <polygon points="67,47 63,25 71,25" fill="#1A73E8" />
          <text
            x="75"
            y="28"
            className="fill-[#1A73E8] text-[9px] font-mono font-bold"
          >
            9H / (9R)-CH3
          </text>
        </>
      ) : hasC9Oh ? (
        <>
          <line
            x1="67"
            y1="47"
            x2="55"
            y2="27"
            stroke="#0F172A"
            strokeWidth="1.8"
          />
          <line
            x1="67"
            y1="47"
            x2="80"
            y2="27"
            stroke="#0D9488"
            strokeWidth="2.2"
          />
          <text
            x="83"
            y="28"
            className="fill-teal-700 text-[9.5px] font-mono font-bold"
          >
            9-OH
          </text>
        </>
      ) : hasC11Oh ? (
        <>
          <polyline
            points="67,47 67,29 82,21"
            fill="none"
            stroke="#0D9488"
            strokeWidth="2.2"
          />
          <text
            x="85"
            y="23"
            className="fill-teal-700 text-[9.5px] font-mono font-bold"
          >
            11-OH (C11-CH2OH)
          </text>
        </>
      ) : (
        <>
          <line
            x1="67"
            y1="47"
            x2="67"
            y2="26"
            stroke="#0F172A"
            strokeWidth="2"
          />
          <text
            x="72"
            y="30"
            className="fill-slate-500 text-[8.5px] font-mono"
          >
            C9
          </text>
        </>
      )}

      {/* C8-OH substituent if 8-OH-HHC */}
      {hasC8Oh && (
        <>
          <line
            x1="42"
            y1="62"
            x2="22"
            y2="50"
            stroke="#0D9488"
            strokeWidth="2.2"
          />
          <text
            x="8"
            y="46"
            className="fill-teal-700 text-[9.5px] font-mono font-bold"
          >
            8-OH
          </text>
        </>
      )}

      {/* C10-OH substituent if 10-OH-HHC or 10-OH-HHCP */}
      {hasC10Oh && (
        <>
          <line
            x1="92"
            y1="62"
            x2="103"
            y2="42"
            stroke="#0D9488"
            strokeWidth="2.2"
          />
          <text
            x="92"
            y="38"
            className="fill-teal-700 text-[9.5px] font-mono font-bold"
          >
            10-OH
          </text>
        </>
      )}

      {/* Ring B: Dihydropyran Ring (Closed in THC/HHC, Open in CBD/H4CBD) */}
      {!isOpenRingCbd ? (
        <>
          <polyline
            points="92,62 117,47 142,62 142,92 117,107 92,92"
            fill="none"
            stroke="#0F172A"
            strokeWidth="2"
          />
          {/* Pyran Oxygen & gem-dimethyl at C6 */}
          <circle cx="117" cy="107" r="4" fill="#FFFFFF" />
          <text
            x="113"
            y="111"
            className="fill-rose-700 text-[9.5px] font-mono font-bold"
          >
            O
          </text>
          <line
            x1="92"
            y1="92"
            x2="80"
            y2="115"
            stroke="#0F172A"
            strokeWidth="1.8"
          />
          <line
            x1="92"
            y1="92"
            x2="100"
            y2="116"
            stroke="#0F172A"
            strokeWidth="1.8"
          />
        </>
      ) : (
        <>
          {/* Open ring link & isopropenyl/isopropyl group for CBD / H4-CBD */}
          <line
            x1="92"
            y1="77"
            x2="117"
            y2="77"
            stroke="#0F172A"
            strokeWidth="2"
          />
          <line
            x1="67"
            y1="107"
            x2="67"
            y2="128"
            stroke="#0F172A"
            strokeWidth="2"
          />
          <text
            x="45"
            y="142"
            className="fill-teal-700 text-[9px] font-mono font-semibold"
          >
            {id === 'h4cbd' ? 'Saturated H4-Ring' : 'Open Pyran (NAM)'}
          </text>
        </>
      )}

      {/* Ring C: Resorcinol / Phenolic Benzene Ring */}
      <polygon
        points="117,47 142,33 167,47 167,78 142,92 117,78"
        fill="none"
        stroke="#0F172A"
        strokeWidth="2"
      />
      <circle
        cx="142"
        cy="62"
        r="13"
        fill="none"
        stroke="#64748B"
        strokeWidth="1.2"
        strokeDasharray="3 2"
      />

      {/* Phenolic C1-OH or O-Acetyl Ester */}
      <line
        x1="142"
        y1="33"
        x2="142"
        y2="16"
        stroke={isAcetate ? '#D97706' : '#0D9488'}
        strokeWidth="2"
      />
      <text
        x="146"
        y="16"
        className={`text-[9.5px] font-mono font-bold ${
          isAcetate ? 'fill-amber-700' : 'fill-teal-700'
        }`}
      >
        {isAcetate ? 'O-C(=O)CH3 (Ester)' : 'OH'}
      </text>

      {/* Alkyl Side Chain at C3 */}
      <polyline
        points={`167,78 162,108 ${alkyl.points}`}
        fill="none"
        stroke="#1A73E8"
        strokeWidth="2.2"
      />
      <circle cx={alkyl.endX} cy={alkyl.endY} r="2.5" fill="#1A73E8" />
      <text
        x={Math.min(205, alkyl.endX - 18)}
        y={alkyl.endY + 16}
        className="fill-[#1A73E8] text-[9px] font-mono font-bold"
      >
        C{chainCarbons} ({compound.alkylChainLength.split(' ')[0]})
      </text>
    </svg>
  );
};
