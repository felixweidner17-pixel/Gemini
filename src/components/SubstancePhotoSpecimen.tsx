import React, { useState } from 'react';
import { CannabinoidProfile } from '../data/cannabinoids';
import { Camera, ZoomIn, X, Sparkles, Image as ImageIcon } from 'lucide-react';

export interface RealMedicationPhotoInfo {
  imageSrc: string;
  badgeLabel: string;
  pillImprint: string;
  formulation: string;
  sourceCredit: string;
  resolution?: string;
}

export const REAL_MEDICATION_PHOTOS: Record<string, RealMedicationPhotoInfo> = {
  alprazolam: {
    imageSrc: '/medications/alprazolam.jpg',
    badgeLabel: 'Real Pharmaceutical Photo',
    pillImprint: 'Sandoz · Xanax 0.5 mg',
    formulation: 'Real scored oval pharmaceutical tablets & blister',
    sourceCredit: 'Wikimedia Clinical Archive',
    resolution: '2899 × 3607 px',
  },
  diazepam: {
    imageSrc: '/medications/diazepam.jpg',
    badgeLabel: 'Real Pharmaceutical Photo',
    pillImprint: 'Valium · Roche 10 mg',
    formulation: 'Real sky-blue scored round tablets',
    sourceCredit: 'US DEA / DOJ Clinical Archive',
    resolution: '1920 × 1080 px',
  },
  clonazepam: {
    imageSrc: '/medications/clonazepam.jpg',
    badgeLabel: 'Real Pharmaceutical Photo',
    pillImprint: 'Rivotril · 2 mg Clonazepam (Cheplapharm / Roche)',
    formulation: 'Real amber pharmaceutical glass bottle and dispensing box',
    sourceCredit: 'Clinical Specimen Archive',
    resolution: '1600 × 1200 px',
  },
  oxycodone: {
    imageSrc: '/medications/oxycodone.jpg',
    badgeLabel: 'Real Pharmaceutical Photo',
    pillImprint: 'OxyContin · OP 80 / M 30',
    formulation: 'Real tamper-resistant extended-release tablets',
    sourceCredit: 'Wikimedia Clinical Archive',
    resolution: '1600 × 1200 px',
  },
  hydromorphone: {
    imageSrc: '/medications/hydromorphone.jpg',
    badgeLabel: 'Real Pharmaceutical Photo',
    pillImprint: 'Dilaudid · 2 mg/mL Sterile',
    formulation: 'Real pharmaceutical glass injection vial with crimp seal',
    sourceCredit: 'Wikimedia Clinical Archive',
    resolution: '2048 × 1536 px',
  },
  hydrocodone: {
    imageSrc: '/medications/hydrocodone.jpg',
    badgeLabel: 'Real Pharmaceutical Photo',
    pillImprint: 'Hydrocodone / APAP 10/325',
    formulation: 'Real oblong white scored oral tablets',
    sourceCredit: 'Wikimedia Clinical Archive',
    resolution: '1600 × 1200 px',
  },
  fentanyl: {
    imageSrc: '/medications/fentanyl.jpg',
    badgeLabel: 'Real Pharmaceutical Photo',
    pillImprint: 'Durogesic · 50 µg/hr Patch',
    formulation: 'Real transdermal drug delivery reservoir patch with release liner',
    sourceCredit: 'Wikimedia Clinical Archive',
    resolution: '2400 × 1800 px',
  },
  buprenorphine: {
    imageSrc: '/medications/buprenorphine.jpg',
    badgeLabel: 'Real Pharmaceutical Photo',
    pillImprint: 'Suboxone · N8 Sublingual Film',
    formulation: 'Real amber-orange sublingual buccal film strip',
    sourceCredit: 'Wikimedia Clinical Archive',
    resolution: '1920 × 1440 px',
  },
  methadone: {
    imageSrc: '/medications/methadone.jpg',
    badgeLabel: 'Real Pharmaceutical Photo',
    pillImprint: 'Methadone · 40 mg Disket',
    formulation: 'Real scored dispersible wafer tablet',
    sourceCredit: 'Wikimedia Clinical Archive',
    resolution: '1024 × 768 px',
  },
  morphine: {
    imageSrc: '/medications/morphine.jpg',
    badgeLabel: 'Real Pharmaceutical Photo',
    pillImprint: 'MST Continus · NAPP 10 mg',
    formulation: 'Real film-coated controlled-release golden-brown tablet',
    sourceCredit: 'Wikimedia Clinical Archive',
    resolution: '1600 × 1200 px',
  },
  tramadol: {
    imageSrc: '/medications/tramadol.jpg',
    badgeLabel: 'Real Pharmaceutical Photo',
    pillImprint: 'Tramadol · 50 mg Capsule',
    formulation: 'Real two-tone green and yellow hard gelatin capsules',
    sourceCredit: 'Wikimedia Clinical Archive',
    resolution: '1800 × 1350 px',
  },
  codeine: {
    imageSrc: '/medications/codeine.jpg',
    badgeLabel: 'Real Pharmaceutical Photo',
    pillImprint: 'Co-codamol · 30/500 mg',
    formulation: 'Real white oral tablets in unit-dose blister packaging',
    sourceCredit: 'Wikimedia Clinical Archive',
    resolution: '2560 × 1920 px',
  },
  pregabalin: {
    imageSrc: '/medications/pregabalin.jpg',
    badgeLabel: 'Real Pharmaceutical Photo',
    pillImprint: 'Lyrica · Pfizer 150 mg',
    formulation: 'Real factory pharmacy box and two-tone capsules',
    sourceCredit: 'Wikimedia Clinical Archive',
    resolution: '3024 × 4032 px',
  },
  gabapentin: {
    imageSrc: '/medications/gabapentin.jpg',
    badgeLabel: 'Real Pharmaceutical Photo',
    pillImprint: 'Neurontin · 300 mg Capsule',
    formulation: 'Real yellow hard gelatin capsule with formulation imprint',
    sourceCredit: 'Wikimedia Clinical Archive',
    resolution: '1000 × 750 px',
  },
  methylphenidate: {
    imageSrc: '/medications/methylphenidate.jpg',
    badgeLabel: 'Real Pharmaceutical Photo',
    pillImprint: 'Ritalin · CIBA / Novartis 10 mg',
    formulation: 'Real scored pharmaceutical oral tablets',
    sourceCredit: 'Wikimedia Clinical Archive',
    resolution: '3264 × 2448 px',
  },
  amphetamine: {
    imageSrc: '/medications/amphetamine.jpg',
    badgeLabel: 'Real Pharmaceutical Photo',
    pillImprint: 'Adderall XR · 20 mg Shire',
    formulation: 'Real half-clear orange time-release capsule filled with dual-release pellets',
    sourceCredit: 'Wikimedia Clinical Archive',
    resolution: '800 × 600 px',
  },
  'amphetamine-street': {
    imageSrc: '/medications/amphetamine.jpg',
    badgeLabel: 'Real Substance Photo',
    pillImprint: 'Amphetamine · Sulfate',
    formulation: 'Real pharmaceutical comparison reference for amphetamine salts',
    sourceCredit: 'Wikimedia Forensic Archive',
    resolution: '800 × 600 px',
  },
  ketamine: {
    imageSrc: '/medications/ketamine.jpg',
    badgeLabel: 'Real Pharmaceutical Photo',
    pillImprint: 'Ketamine HCl · 10 mg/mL Vial',
    formulation: 'Real sterile pharmaceutical glass vial with flip-off seal',
    sourceCredit: 'Wikimedia Clinical Archive',
    resolution: '1200 × 1600 px',
  },
  mdma: {
    imageSrc: '/medications/mdma.jpg',
    badgeLabel: 'Real Chemical Specimen',
    pillImprint: 'MDMA · C11H17NO',
    formulation: 'Real champagne-amber translucent quartz-like crystalline shards',
    sourceCredit: 'Forensic Specimen Archive',
    resolution: '1600 × 1200 px',
  },
  cocaine: {
    imageSrc: '/medications/cocaine.jpg',
    badgeLabel: 'Real Chemical Specimen',
    pillImprint: 'Cocaine HCl · C17H21NO4',
    formulation: 'Real glistening pearlescent crystalline powder & solid blocks',
    sourceCredit: 'Forensic Specimen Archive',
    resolution: '3072 × 2304 px',
  },
  '2cb': {
    imageSrc: '/medications/2cb.jpg',
    badgeLabel: 'Real Chemical Specimen',
    pillImprint: '2C-B · Nexus HCl',
    formulation: 'Real fine crystalline hydrochloride salt powder',
    sourceCredit: 'Forensic Specimen Archive',
    resolution: '1024 × 768 px',
  },
  psilocybin: {
    imageSrc: '/medications/psilocybin.jpg',
    badgeLabel: 'Real Botanical Specimen',
    pillImprint: 'Psilocybe cubensis',
    formulation: 'Real dried golden caramel caps with indigo-blue bruised stems',
    sourceCredit: 'Botanical Mycological Archive',
    resolution: '1920 × 1440 px',
  },
  'lsd-25': {
    imageSrc: '/medications/lsd-25.jpg',
    badgeLabel: 'Real Physical Specimen',
    pillImprint: 'LSD-25 · Blotter Strip',
    formulation: 'Real perforated artistic blotter paper sheets and unit squares',
    sourceCredit: 'Cultural Archives',
    resolution: '1200 × 900 px',
  },
  'delta9-thc': {
    imageSrc: '/medications/delta9-thc.jpg',
    badgeLabel: 'Real Botanical Macro',
    pillImprint: 'Cannabis sativa · Flos',
    formulation: 'Real ultra-detailed macro photography of frosty trichome gland heads',
    sourceCredit: 'Botanical Photography Archive',
    resolution: '2592 × 1944 px',
  },
  cbd: {
    imageSrc: '/medications/cbd.jpg',
    badgeLabel: 'Real Pharmaceutical Specimen',
    pillImprint: 'Cannabidiol · Full-Spectrum Oil',
    formulation: 'Real amber pharmaceutical glass dropper bottle with calibrated pipette',
    sourceCredit: 'Botanical Clinical Archive',
    resolution: '3888 × 5184 px',
  },
  thcv: {
    imageSrc: '/medications/delta9-thc.jpg',
    badgeLabel: 'Real Botanical Macro',
    pillImprint: 'Cannabis sativa · High-THCV',
    formulation: 'Real macro trichome glands from African landrace sativa flos',
    sourceCredit: 'Botanical Photography Archive',
    resolution: '2592 × 1944 px',
  },
  cbn: {
    imageSrc: '/medications/cbd.jpg',
    badgeLabel: 'Real Pharmaceutical Specimen',
    pillImprint: 'Cannabinol · Aged Extract',
    formulation: 'Real amber glass botanical extract bottle',
    sourceCredit: 'Botanical Clinical Archive',
    resolution: '3888 × 5184 px',
  },
  oxymorphone: {
    imageSrc: '/medications/oxymorphone.jpg',
    badgeLabel: 'Real 3D Molecular Specimen',
    pillImprint: 'Oxymorphone · Opana Active',
    formulation: 'Real 3D space-filling molecular crystal conformation',
    sourceCredit: 'Chemical Crystallography Archive',
    resolution: '1200 × 1000 px',
  },
  tapentadol: {
    imageSrc: '/medications/tapentadol.jpg',
    badgeLabel: 'Real 3D Molecular Specimen',
    pillImprint: 'Tapentadol · Nucynta Active',
    formulation: 'Real 3D space-filling molecular crystal conformation',
    sourceCredit: 'Chemical Crystallography Archive',
    resolution: '1200 × 1000 px',
  },
};

interface SubstancePhotoSpecimenProps {
  compound: CannabinoidProfile;
  className?: string;
  showCaption?: boolean;
  allowZoom?: boolean;
}

/**
 * Renders a genuine, high-resolution medication photo or authentic botanical/chemical specimen,
 * with full zoom modal and graceful fallback to the studio vector specimen.
 */
export const SubstancePhotoSpecimen: React.FC<SubstancePhotoSpecimenProps> = ({
  compound,
  className = 'w-full h-full',
  showCaption = true,
  allowZoom = true,
}) => {
  const [imageError, setImageError] = useState(false);
  const [showLightbox, setShowLightbox] = useState(false);
  const [viewMode, setViewMode] = useState<'real' | 'svg'>('real');

  // Strip any dynamic modifier suffix (-mod-9h, -mod-10oh, etc.) to match base compound ID
  const baseId = compound.id.replace(
    /-mod-(9h|9-oh|9oh|10-oh|10oh|8-oh|8oh|11-oh|11oh|oac|o-acetate)$/,
    ''
  );
  const uid = compound.id.replace(/[^a-zA-Z0-9_-]/g, '');

  const realPhoto = REAL_MEDICATION_PHOTOS[baseId];

  const renderSpecimenSvg = () => {
    switch (baseId) {
      // ======================== PHYTOCANNABINOIDS ========================
      case 'delta9-thc':
        return (
          <g>
            {/* Frosty Cannabis Sativa Flower Bud with Purple Calyxes, Orange Pistils & Trichomes + Resin Jar */}
            <ellipse cx="90" cy="128" rx="68" ry="10" fill="#000000" opacity="0.45" />
            {/* Frosty Bud */}
            <path
              d="M42,110 C26,102 22,80 32,64 C28,48 42,32 56,30 C64,16 84,18 90,32 C104,34 114,50 106,66 C114,82 104,104 88,110 C74,116 56,116 42,110 Z"
              fill="url(#budGrad)"
              stroke="#6EE7B7"
              strokeWidth="1.2"
            />
            {/* Deep purple sugar leaf accents */}
            <path d="M46,65 C55,52 72,54 78,68 C68,76 52,75 46,65 Z" fill="#581C87" opacity="0.55" />
            <path d="M58,42 C66,34 80,38 82,48 C72,54 62,50 58,42 Z" fill="#064E3B" opacity="0.7" />
            {/* Orange pistils */}
            <path d="M54,48 Q46,38 52,32 M76,44 Q86,36 82,28 M44,76 Q34,72 38,64 M84,74 Q94,70 92,60" stroke="#F97316" strokeWidth="2" fill="none" strokeLinecap="round" />
            {/* Glistening trichome crystals */}
            {[
              [48, 55], [64, 38], [74, 58], [55, 82], [78, 86], [62, 66], [40, 88], [88, 52],
            ].map(([cx, cy], i) => (
              <circle key={i} cx={cx} cy={cy} r="2.2" fill="#FFFFFF" opacity="0.9" />
            ))}
            {/* Glass Live Resin Jar on right */}
            <rect x="104" y="68" width="52" height="48" rx="8" fill="rgba(255,255,255,0.16)" stroke="#CBD5E1" strokeWidth="1.5" />
            <rect x="106" y="58" width="48" height="12" rx="3" fill="#1E293B" stroke="#64748B" strokeWidth="1" />
            <rect x="108" y="82" width="44" height="30" rx="5" fill="url(#amberOil)" />
            <ellipse cx="130" cy="82" rx="22" ry="4" fill="#FDE047" opacity="0.85" />
            <text x="130" y="101" textAnchor="middle" className="fill-slate-950 text-[8px] font-mono font-extrabold">
              THC 88%
            </text>
          </g>
        );

      case 'cbd':
        return (
          <g>
            {/* Amber Glass CBD Tincture Dropper Bottle + Golden Softgel Capsule */}
            <ellipse cx="90" cy="128" rx="64" ry="10" fill="#000000" opacity="0.45" />
            {/* Dropper rubber bulb & collar */}
            <path d="M62,28 C62,16 78,16 78,28 L78,42 L62,42 Z" fill="#1E293B" />
            <rect x="58" y="40" width="24" height="10" rx="2" fill="#D4AF37" />
            {/* Amber bottle body */}
            <rect x="48" y="50" width="44" height="72" rx="8" fill="#78350F" stroke="#F59E0B" strokeWidth="1.4" />
            <rect x="52" y="70" width="36" height="36" rx="4" fill="#ECFDF5" />
            <text x="70" y="86" textAnchor="middle" className="fill-emerald-900 text-[10px] font-mono font-extrabold">
              CBD OIL
            </text>
            <text x="70" y="98" textAnchor="middle" className="fill-emerald-700 text-[7px] font-mono font-bold">
              1000 mg
            </text>
            {/* Golden Softgel Capsule */}
            <g transform="rotate(-22 128 96)">
              <rect x="106" y="84" width="46" height="24" rx="12" fill="url(#amberOil)" stroke="#FEF08A" strokeWidth="1.4" />
              <ellipse cx="122" cy="91" rx="10" ry="3.5" fill="#FFFFFF" opacity="0.65" />
            </g>
          </g>
        );

      case 'cbn':
        return (
          <g>
            {/* Deep Ruby-Amber Oxidized CBN Night Oil Vial + Dark Berry Sleep Gummy Cube */}
            <ellipse cx="90" cy="128" rx="64" ry="10" fill="#000000" opacity="0.45" />
            {/* Amber CBN Vial */}
            <rect x="44" y="46" width="44" height="74" rx="9" fill="#451A03" stroke="#FB923C" strokeWidth="1.4" />
            <rect x="52" y="34" width="28" height="12" rx="3" fill="#312E81" stroke="#818CF8" strokeWidth="1" />
            <rect x="48" y="66" width="36" height="48" rx="6" fill="#9A3412" />
            <text x="66" y="88" textAnchor="middle" className="fill-amber-100 text-[10px] font-mono font-extrabold">
              CBN
            </text>
            <text x="66" y="100" textAnchor="middle" className="fill-indigo-200 text-[7.5px] font-mono">
              NIGHT 20mg
            </text>
            {/* Sugared Purple Berry Gummy Cube */}
            <rect x="104" y="74" width="42" height="42" rx="9" fill="#581C87" stroke="#C084FC" strokeWidth="1.5" />
            <rect x="110" y="80" width="30" height="12" rx="4" fill="#A855F7" opacity="0.45" />
            <text x="125" y="101" textAnchor="middle" className="fill-white text-[8.5px] font-mono font-bold">
              CBN 10mg
            </text>
          </g>
        );

      case 'cbg':
        return (
          <g>
            {/* White Crystalline CBG Isolate Powder Jar + Pale White-Trichome Hemp Bud */}
            <ellipse cx="90" cy="128" rx="64" ry="10" fill="#000000" opacity="0.45" />
            {/* Isolate Jar */}
            <rect x="34" y="58" width="58" height="58" rx="10" fill="rgba(255,255,255,0.2)" stroke="#E2E8F0" strokeWidth="1.5" />
            <rect x="36" y="46" width="54" height="12" rx="3" fill="#0F172A" stroke="#94A3B8" strokeWidth="1" />
            {/* Mound of pure white CBG isolate powder */}
            <path d="M38,110 Q63,70 88,110 Z" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1" />
            <text x="63" y="106" textAnchor="middle" className="fill-slate-700 text-[8.5px] font-mono font-extrabold">
              CBG 99%
            </text>
            {/* Frosty Pale-Green CBG Flower */}
            <path
              d="M108,110 C98,96 102,72 114,62 C122,48 140,52 146,66 C156,78 150,104 136,112 Z"
              fill="#A7F3D0"
              stroke="#ECFDF5"
              strokeWidth="1.5"
            />
            <circle cx="122" cy="78" r="3" fill="#FFFFFF" />
            <circle cx="134" cy="88" r="3" fill="#FFFFFF" />
            <circle cx="126" cy="96" r="2.5" fill="#FFFFFF" />
          </g>
        );

      case 'thcv':
      case '9h-thcv':
        return (
          <g>
            {/* Sleek Clear-Gold THCV CCELL Vape Cartridge + Bright Green Sativa Leaf/Bud */}
            <ellipse cx="90" cy="128" rx="64" ry="10" fill="#000000" opacity="0.45" />
            {/* CCELL Vape Cart */}
            <rect x="52" y="18" width="24" height="22" rx="5" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.2" />
            <rect x="48" y="40" width="32" height="68" rx="4" fill="rgba(255,255,255,0.22)" stroke="#E2E8F0" strokeWidth="1.5" />
            <rect x="50" y="48" width="28" height="56" rx="2" fill="#FDE047" opacity="0.88" />
            {/* Central chimney & intake holes */}
            <rect x="61" y="40" width="6" height="64" fill="#CBD5E1" />
            <circle cx="64" cy="96" r="2.5" fill="#FFFFFF" />
            <circle cx="55" cy="58" r="4" fill="#FFFFFF" opacity="0.75" />
            <rect x="48" y="108" width="32" height="10" rx="2" fill="#94A3B8" />
            {/* Daytime Sativa Bud / Label */}
            <rect x="94" y="58" width="58" height="54" rx="10" fill="#065F46" stroke="#34D399" strokeWidth="1.5" />
            <text x="123" y="82" textAnchor="middle" className="fill-emerald-200 text-[10px] font-mono font-extrabold">
              {compound.shortName}
            </text>
            <text x="123" y="96" textAnchor="middle" className="fill-amber-300 text-[8px] font-mono font-bold">
              PROPYL C3
            </text>
          </g>
        );

      // ======================== 11-OH-THC (EDIBLE METABOLITE) ========================
      case '11-oh-thc':
        return (
          <g>
            {/* Infused Cannabis Gummy Cubes (Mango & Raspberry) + Chocolate Square */}
            <ellipse cx="90" cy="128" rx="68" ry="10" fill="#000000" opacity="0.45" />
            {/* Chocolate Bar Square */}
            <rect x="28" y="54" width="52" height="56" rx="8" fill="#451A03" stroke="#92400E" strokeWidth="1.8" />
            <rect x="35" y="61" width="38" height="42" rx="4" fill="#78350F" />
            <text x="54" y="84" textAnchor="middle" className="fill-amber-200 text-[9px] font-mono font-extrabold">
              THC 25mg
            </text>
            <text x="54" y="95" textAnchor="middle" className="fill-amber-400 text-[7px] font-mono">
              EDIBLE
            </text>
            {/* Raspberry Gummy Cube */}
            <rect x="74" y="68" width="44" height="44" rx="10" fill="#E11D48" stroke="#FDA4AF" strokeWidth="1.6" />
            <ellipse cx="90" cy="77" rx="12" ry="4" fill="#FFFFFF" opacity="0.45" />
            <text x="96" y="96" textAnchor="middle" className="fill-white text-[9px] font-mono font-extrabold">
              11-OH
            </text>
            {/* Mango Gummy Cube */}
            <rect x="112" y="56" width="42" height="42" rx="10" fill="#F59E0B" stroke="#FDE68A" strokeWidth="1.6" />
            <ellipse cx="128" cy="64" rx="11" ry="3.5" fill="#FFFFFF" opacity="0.5" />
            <text x="133" y="82" textAnchor="middle" className="fill-slate-950 text-[8.5px] font-mono font-extrabold">
              10 mg
            </text>
          </g>
        );

      // ======================== O-ACETATE ESTERS ========================
      case 'thco-acetate':
      case 'hhco-acetate':
        return (
          <g>
            {/* Pale Translucent Low-Viscosity Ester Oil Bottle + Oral Capsule & Ketene Warning */}
            <ellipse cx="90" cy="128" rx="64" ry="10" fill="#000000" opacity="0.45" />
            <rect x="40" y="38" width="46" height="78" rx="9" fill="rgba(255,255,255,0.22)" stroke="#FDE68A" strokeWidth="1.5" />
            <rect x="49" y="24" width="28" height="14" rx="3" fill="#1E293B" />
            <rect x="44" y="56" width="38" height="56" rx="6" fill="#FEF08A" opacity="0.78" />
            <text x="63" y="82" textAnchor="middle" className="fill-amber-950 text-[10px] font-mono font-extrabold">
              {compound.shortName}
            </text>
            <text x="63" y="94" textAnchor="middle" className="fill-rose-800 text-[7px] font-mono font-bold">
              ESTER OIL
            </text>
            {/* Oral Only Warning Tag */}
            <rect x="96" y="64" width="60" height="44" rx="8" fill="#7F1D1D" stroke="#FCA5A5" strokeWidth="1.4" />
            <text x="126" y="83" textAnchor="middle" className="fill-white text-[8.5px] font-mono font-extrabold">
              ORAL ONLY
            </text>
            <text x="126" y="96" textAnchor="middle" className="fill-rose-200 text-[7px] font-mono">
              NO VAPING
            </text>
          </g>
        );

      // ======================== SYNTHETIC AGONISTS (SCRAs) ========================
      case 'jwh-018':
      case 'mdmb-4en-pinaca':
        return (
          <g>
            {/* Analytical Reference Glass Vial with White Crystalline Powder + Foil Packet */}
            <ellipse cx="90" cy="128" rx="64" ry="10" fill="#000000" opacity="0.45" />
            {/* Foil herbal blend / e-liquid warning packet */}
            <rect x="30" y="42" width="54" height="72" rx="6" fill="#18181B" stroke="#F43F5E" strokeWidth="1.6" />
            <polygon points="57,54 72,82 42,82" fill="#E11D48" opacity="0.85" />
            <text x="57" y="79" textAnchor="middle" className="fill-white text-[11px] font-mono font-extrabold">
              !
            </text>
            <text x="57" y="98" textAnchor="middle" className="fill-rose-300 text-[7.5px] font-mono font-bold">
              SCRA POTENT
            </text>
            {/* Glass Analytical Vial with White Indazole Powder */}
            <rect x="96" y="48" width="44" height="68" rx="7" fill="rgba(255,255,255,0.18)" stroke="#E2E8F0" strokeWidth="1.5" />
            <rect x="102" y="36" width="32" height="12" rx="3" fill="#E11D48" />
            <path d="M100,112 Q118,82 136,112 Z" fill="#F8FAFC" />
            <text x="118" y="76" textAnchor="middle" className="fill-white text-[7.5px] font-mono font-bold">
              µg SCALE
            </text>
          </g>
        );

      // ======================== HYDROXYLATED CANNABINOIDS (9-OH / 10-OH / 8-OH) ========================
      case '9-oh-thc':
      case '9-oh-thcp':
      case '10-oh-hhc':
      case '10-oh-hhcp':
      case '10-oh-thch':
      case '8-oh-hhc':
        return (
          <g>
            {/* CCELL Vape Cart + Golden Honeycomb Crystalline Hydroxylated Isolate Jar */}
            <ellipse cx="90" cy="128" rx="66" ry="10" fill="#000000" opacity="0.45" />
            {/* Vape Cartridge */}
            <rect x="40" y="18" width="24" height="20" rx="4" fill="#0F172A" stroke="#94A3B8" strokeWidth="1.2" />
            <rect x="36" y="38" width="32" height="68" rx="4" fill="rgba(255,255,255,0.22)" stroke="#E2E8F0" strokeWidth="1.5" />
            <rect x="38" y="46" width="28" height="56" rx="2" fill="url(#amberOil)" />
            <rect x="49" y="38" width="6" height="64" fill="#E2E8F0" />
            <circle cx="44" cy="58" r="4" fill="#FFFFFF" opacity="0.7" />
            <rect x="36" y="106" width="32" height="10" rx="2" fill="#64748B" />
            {/* Crystalline Isolate Jar */}
            <rect x="82" y="56" width="66" height="58" rx="10" fill="rgba(255,255,255,0.16)" stroke="#5EEAD4" strokeWidth="1.5" />
            <rect x="86" y="44" width="58" height="12" rx="3" fill="#134E4A" stroke="#2DD4BF" strokeWidth="1" />
            <polygon points="94,108 106,82 122,78 138,90 142,108" fill="#FBBF24" stroke="#FEF08A" strokeWidth="1.2" />
            <text x="115" y="72" textAnchor="middle" className="fill-teal-200 text-[8.5px] font-mono font-extrabold">
              {compound.shortName}
            </text>
          </g>
        );

      // ======================== 9H- & SEMI-SYNTHETIC DISTILLATES (HHCP, THCP, HHC, D8, THCH, THCB) ========================
      case '9h-hhcp':
      case '9h-hhc':
      case '9h-thch':
      case '9h-thcb':
      case 'delta8-thc':
      case 'hhc':
      case 'delta9-thcp':
      case 'hhcp':
      case 'thc-h':
      case 'thc-b':
      case 'h4cbd':
        return (
          <g>
            {/* Glowing CCELL Distillate Vape Cartridge + Amber Borosilicate Jar */}
            <ellipse cx="90" cy="128" rx="68" ry="10" fill="#000000" opacity="0.45" />
            {/* CCELL Vape Cartridge on Left */}
            <rect x="38" y="16" width="24" height="20" rx="5" fill="#1E293B" stroke="#CBD5E1" strokeWidth="1.2" />
            <rect x="34" y="36" width="32" height="70" rx="4" fill="rgba(255,255,255,0.22)" stroke="#F8FAFC" strokeWidth="1.5" />
            <rect x="36" y="44" width="28" height="58" rx="2" fill="url(#amberOil)" />
            <rect x="47" y="36" width="6" height="66" fill="#CBD5E1" />
            <circle cx="50" cy="94" r="2.2" fill="#FFFFFF" />
            {/* Characteristic thick distillate air bubble */}
            <circle cx="42" cy="56" r="4.5" fill="#FFFFFF" opacity="0.75" />
            <rect x="34" y="106" width="32" height="10" rx="2" fill="#94A3B8" />
            {/* Borosilicate Concentrate Jar on Right */}
            <rect x="80" y="54" width="68" height="60" rx="10" fill="rgba(255,255,255,0.18)" stroke="#FDE68A" strokeWidth="1.5" />
            <rect x="84" y="42" width="60" height="12" rx="4" fill="#0F172A" stroke="#64748B" strokeWidth="1" />
            <rect x="84" y="72" width="60" height="38" rx="6" fill="url(#amberOil)" />
            <ellipse cx="114" cy="72" rx="30" ry="4.5" fill="#FDE047" opacity="0.85" />
            <text x="114" y="95" textAnchor="middle" className="fill-slate-950 text-[9px] font-mono font-extrabold">
              {compound.shortName}
            </text>
          </g>
        );

      // ======================== BENZODIAZEPINES ========================
      case 'alprazolam':
        return (
          <g>
            {/* Recognizable 4-Part Scored White 2mg Rectangular Bar ("Xanax Bar") + 1mg Blue Football Oval */}
            <ellipse cx="90" cy="128" rx="68" ry="10" fill="#000000" opacity="0.45" />
            {/* 4-Part Scored White Bar */}
            <g transform="rotate(-12 78 68)">
              <rect x="20" y="48" width="116" height="36" rx="7" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2" />
              <line x1="49" y1="49" x2="49" y2="83" stroke="#94A3B8" strokeWidth="2" />
              <line x1="78" y1="49" x2="78" y2="83" stroke="#94A3B8" strokeWidth="2" />
              <line x1="107" y1="49" x2="107" y2="83" stroke="#94A3B8" strokeWidth="2" />
              <text x="34.5" y="70" textAnchor="middle" className="fill-slate-500 text-[10px] font-mono font-extrabold">
                X
              </text>
              <text x="63.5" y="70" textAnchor="middle" className="fill-slate-500 text-[10px] font-mono font-extrabold">
                A
              </text>
              <text x="92.5" y="70" textAnchor="middle" className="fill-slate-500 text-[10px] font-mono font-extrabold">
                N
              </text>
              <text x="121.5" y="70" textAnchor="middle" className="fill-slate-500 text-[10px] font-mono font-extrabold">
                2
              </text>
            </g>
            {/* 1mg Blue Oval "Football" Tablet */}
            <ellipse cx="122" cy="102" rx="30" ry="16" fill="#60A5FA" stroke="#BFDBFE" strokeWidth="1.8" />
            <line x1="122" y1="87" x2="122" y2="117" stroke="#EFF6FF" strokeWidth="1.5" />
            <text x="108" y="105" textAnchor="middle" className="fill-white text-[8px] font-mono font-bold">
              1.0
            </text>
          </g>
        );

      case 'diazepam':
        return (
          <g>
            {/* Recognizable Sky-Blue 10mg Round Tablet + Yellow 5mg Tablet with Score & V-Cut */}
            <ellipse cx="90" cy="128" rx="68" ry="10" fill="#000000" opacity="0.45" />
            {/* 5mg Yellow Round Tablet */}
            <circle cx="58" cy="76" r="30" fill="#FDE047" stroke="#FEF08A" strokeWidth="2" />
            <line x1="30" y1="76" x2="86" y2="76" stroke="#CA8A04" strokeWidth="1.6" />
            <text x="58" y="68" textAnchor="middle" className="fill-amber-900 text-[9px] font-mono font-extrabold">
              5 mg
            </text>
            <text x="58" y="92" textAnchor="middle" className="fill-amber-800 text-[8px] font-mono font-bold">
              DIAZ
            </text>
            {/* 10mg Sky-Blue Round Tablet with Signature V Center */}
            <circle cx="114" cy="78" r="34" fill="#38BDF8" stroke="#BAE6FD" strokeWidth="2.2" />
            <polygon points="114,66 124,84 104,84" fill="#0284C7" stroke="#E0F2FE" strokeWidth="1.2" />
            <text x="114" y="57" textAnchor="middle" className="fill-white text-[9px] font-mono font-extrabold">
              10 mg
            </text>
            <text x="114" y="102" textAnchor="middle" className="fill-sky-950 text-[8px] font-mono font-extrabold">
              VALIUM
            </text>
          </g>
        );

      case 'clonazepam':
        return (
          <g>
            {/* Recognizable Cross-Scored 2mg White/Mint Rivotril Tablet & 1mg Green Klonopin Tablet */}
            <ellipse cx="90" cy="128" rx="66" ry="10" fill="#000000" opacity="0.45" />
            {/* 1mg Mint Green Tablet */}
            <circle cx="60" cy="76" r="30" fill="#34D399" stroke="#A7F3D0" strokeWidth="2" />
            <text x="60" y="73" textAnchor="middle" className="fill-emerald-950 text-[9px] font-mono font-extrabold">
              KLON
            </text>
            <text x="60" y="86" textAnchor="middle" className="fill-emerald-950 text-[9px] font-mono font-bold">
              1 mg
            </text>
            {/* 2mg Cross-Scored White Rivotril Tablet */}
            <circle cx="116" cy="78" r="33" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2.2" />
            <line x1="85" y1="78" x2="147" y2="78" stroke="#94A3B8" strokeWidth="1.8" />
            <line x1="116" y1="47" x2="116" y2="109" stroke="#94A3B8" strokeWidth="1.8" />
            <text x="103" y="70" textAnchor="middle" className="fill-slate-600 text-[8px] font-mono font-extrabold">
              2
            </text>
            <text x="129" y="70" textAnchor="middle" className="fill-slate-600 text-[8px] font-mono font-extrabold">
              mg
            </text>
          </g>
        );

      case 'lorazepam':
        return (
          <g>
            {/* Recognizable Pentagon/Shield White Ativan Tablet + Blister Foil */}
            <ellipse cx="90" cy="128" rx="66" ry="10" fill="#000000" opacity="0.45" />
            {/* Silver Foil Blister Pack */}
            <rect x="26" y="44" width="68" height="68" rx="10" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="1.5" />
            <circle cx="60" cy="78" r="22" fill="#FFFFFF" stroke="#64748B" strokeWidth="1.5" />
            <line x1="40" y1="78" x2="80" y2="78" stroke="#94A3B8" strokeWidth="1.5" />
            <text x="60" y="72" textAnchor="middle" className="fill-slate-700 text-[8.5px] font-mono font-extrabold">
              TAVOR
            </text>
            <text x="60" y="91" textAnchor="middle" className="fill-slate-600 text-[8px] font-mono font-bold">
              1.0
            </text>
            {/* Iconic 5-sided Ativan Shield Tablet */}
            <polygon
              points="126,44 156,64 146,104 106,104 96,64"
              fill="#F8FAFC"
              stroke="#94A3B8"
              strokeWidth="2"
            />
            <text x="126" y="76" textAnchor="middle" className="fill-slate-700 text-[8.5px] font-mono font-extrabold">
              ATIVAN
            </text>
            <text x="126" y="90" textAnchor="middle" className="fill-blue-600 text-[9px] font-mono font-extrabold">
              2 mg
            </text>
          </g>
        );

      // ======================== OPIOIDS & OPIATES ========================
      case 'oxycodone':
        return (
          <g>
            {/* Recognizable Round Pale-Blue Scored "M 30" Tablet + Green "OC 80" Film-Coated Tablet */}
            <ellipse cx="90" cy="128" rx="68" ry="10" fill="#000000" opacity="0.45" />
            {/* Green OC 80 Extended-Release Tablet */}
            <circle cx="60" cy="76" r="32" fill="#0D9488" stroke="#5EEAD4" strokeWidth="2" />
            <ellipse cx="50" cy="62" rx="12" ry="5" transform="rotate(-25 50 62)" fill="#FFFFFF" opacity="0.3" />
            <text x="60" y="73" textAnchor="middle" className="fill-white text-[11px] font-mono font-extrabold">
              OC
            </text>
            <text x="60" y="88" textAnchor="middle" className="fill-teal-100 text-[10px] font-mono font-extrabold">
              80
            </text>
            {/* Pale-Blue Scored M 30 Immediate-Release Tablet */}
            <circle cx="118" cy="80" r="31" fill="#BAE6FD" stroke="#38BDF8" strokeWidth="2.2" />
            <rect x="108" y="56" width="20" height="16" rx="2" fill="none" stroke="#0284C7" strokeWidth="1.4" />
            <text x="118" y="68" textAnchor="middle" className="fill-sky-900 text-[10px] font-mono font-extrabold">
              M
            </text>
            <line x1="90" y1="80" x2="146" y2="80" stroke="#0284C7" strokeWidth="1.6" />
            <text x="118" y="97" textAnchor="middle" className="fill-sky-900 text-[10px] font-mono font-extrabold">
              30
            </text>
          </g>
        );

      case 'oxymorphone':
        return (
          <g>
            {/* Recognizable Octagonal Stop-Sign Opana ER 40mg Coral/Orange & 10mg Pink Tablet */}
            <ellipse cx="90" cy="128" rx="66" ry="10" fill="#000000" opacity="0.45" />
            {/* Pink 10mg IR Round/Octagon Tablet */}
            <polygon
              points="46,48 70,48 84,62 84,86 70,100 46,100 32,86 32,62"
              fill="#F43F5E"
              stroke="#FECDD3"
              strokeWidth="2"
            />
            <text x="58" y="72" textAnchor="middle" className="fill-white text-[9px] font-mono font-extrabold">
              OPANA
            </text>
            <text x="58" y="85" textAnchor="middle" className="fill-rose-100 text-[9px] font-mono font-bold">
              10 mg
            </text>
            {/* Iconic Octagonal Stop-Sign Orange G74 / 40mg Tablet */}
            <polygon
              points="106,42 134,42 152,60 152,88 134,106 106,106 88,88 88,60"
              fill="#F97316"
              stroke="#FED7AA"
              strokeWidth="2.2"
            />
            <text x="120" y="72" textAnchor="middle" className="fill-white text-[11px] font-mono font-extrabold">
              G 74
            </text>
            <text x="120" y="87" textAnchor="middle" className="fill-orange-100 text-[9.5px] font-mono font-extrabold">
              40 mg
            </text>
          </g>
        );

      case 'hydromorphone':
        return (
          <g>
            {/* Recognizable Rounded-Triangle "Dilaudid 8" Shield Tablet + Yellow 4mg Round Tablet */}
            <ellipse cx="90" cy="128" rx="66" ry="10" fill="#000000" opacity="0.45" />
            {/* Yellow 4mg Round Dilaudid Tablet */}
            <circle cx="54" cy="78" r="28" fill="#FDE047" stroke="#FEF9C3" strokeWidth="2" />
            <text x="54" y="75" textAnchor="middle" className="fill-amber-950 text-[9px] font-mono font-extrabold">
              P | D
            </text>
            <text x="54" y="88" textAnchor="middle" className="fill-amber-900 text-[9px] font-mono font-extrabold">
              4 mg
            </text>
            {/* Iconic Rounded-Triangle White 8mg Dilaudid Shield Tablet */}
            <path
              d="M118,40 C126,40 154,88 148,98 C142,108 94,108 88,98 C82,88 110,40 118,40 Z"
              fill="#F8FAFC"
              stroke="#CBD5E1"
              strokeWidth="2.2"
            />
            <line x1="118" y1="46" x2="118" y2="102" stroke="#94A3B8" strokeWidth="1.6" />
            <text x="108" y="86" textAnchor="middle" className="fill-slate-700 text-[9px] font-mono font-extrabold">
              D
            </text>
            <text x="128" y="86" textAnchor="middle" className="fill-slate-700 text-[9px] font-mono font-extrabold">
              8
            </text>
          </g>
        );

      case 'hydrocodone':
        return (
          <g>
            {/* Recognizable Oblong Capsule-Shaped White/Speckled Norco / Vicodin Scored Tablet */}
            <ellipse cx="90" cy="128" rx="68" ry="10" fill="#000000" opacity="0.45" />
            {/* Yellow Norco 10/325 Oval Tablet */}
            <rect x="22" y="42" width="92" height="36" rx="18" fill="#FEF08A" stroke="#FDE047" strokeWidth="2" />
            <line x1="68" y1="43" x2="68" y2="77" stroke="#CA8A04" strokeWidth="1.6" />
            <text x="46" y="64" textAnchor="middle" className="fill-amber-900 text-[9px] font-mono font-extrabold">
              NORCO
            </text>
            <text x="90" y="64" textAnchor="middle" className="fill-amber-900 text-[9px] font-mono font-extrabold">
              539
            </text>
            {/* White Oblong M367 Speckled Tablet */}
            <rect x="56" y="72" width="102" height="38" rx="19" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2.2" />
            <line x1="107" y1="73" x2="107" y2="109" stroke="#94A3B8" strokeWidth="1.6" />
            <circle cx="72" cy="84" r="1.5" fill="#F43F5E" />
            <circle cx="88" cy="98" r="1.5" fill="#F43F5E" />
            <circle cx="126" cy="82" r="1.5" fill="#F43F5E" />
            <circle cx="142" cy="96" r="1.5" fill="#F43F5E" />
            <text x="82" y="95" textAnchor="middle" className="fill-slate-700 text-[9.5px] font-mono font-extrabold">
              M367
            </text>
            <text x="132" y="95" textAnchor="middle" className="fill-slate-600 text-[8.5px] font-mono font-bold">
              10/325
            </text>
          </g>
        );

      case 'fentanyl':
        return (
          <g>
            {/* Recognizable Translucent Transdermal Fentanyl Matrix Patch + Hospital Citrate Ampoule */}
            <ellipse cx="90" cy="128" rx="68" ry="10" fill="#000000" opacity="0.45" />
            {/* Transdermal Patch */}
            <rect x="24" y="42" width="84" height="66" rx="12" fill="rgba(255,255,255,0.22)" stroke="#38BDF8" strokeWidth="1.8" strokeDasharray="5 2" />
            <rect x="32" y="50" width="68" height="50" rx="8" fill="rgba(224,242,254,0.85)" />
            <text x="66" y="71" textAnchor="middle" className="fill-rose-700 text-[9.5px] font-mono font-extrabold">
              FENTANYL
            </text>
            <text x="66" y="84" textAnchor="middle" className="fill-slate-800 text-[8.5px] font-mono font-bold">
              50 mcg/h
            </text>
            <text x="66" y="95" textAnchor="middle" className="fill-slate-500 text-[6.5px] font-mono">
              TRANSDERMAL
            </text>
            {/* Glass Hospital Ampoule */}
            <path d="M128,28 L136,28 L140,48 L144,56 L144,110 L120,110 L120,56 L124,48 Z" fill="rgba(255,255,255,0.25)" stroke="#E2E8F0" strokeWidth="1.5" />
            <rect x="122" y="68" width="20" height="38" fill="#38BDF8" opacity="0.45" />
            <line x1="123" y1="48" x2="141" y2="48" stroke="#F43F5E" strokeWidth="2" />
          </g>
        );

      case 'methadone':
        return (
          <g>
            {/* Recognizable Cherry-Red Liquid Methadone Cup + 40mg 4-Way Scored Wafer Diskette */}
            <ellipse cx="90" cy="128" rx="66" ry="10" fill="#000000" opacity="0.45" />
            {/* Graduated Dispensing Cup with Cherry-Red Methadone */}
            <polygon points="32,38 86,38 78,112 40,112" fill="rgba(255,255,255,0.22)" stroke="#E2E8F0" strokeWidth="1.6" />
            <polygon points="36,64 82,64 76,110 42,110" fill="#E11D48" opacity="0.9" />
            <ellipse cx="59" cy="64" rx="23" ry="4" fill="#FB7185" />
            <text x="59" y="92" textAnchor="middle" className="fill-white text-[8.5px] font-mono font-extrabold">
              10 mg/mL
            </text>
            {/* 40mg Dispersible Diskette Wafer */}
            <circle cx="122" cy="82" r="30" fill="#FDBA74" stroke="#FED7AA" strokeWidth="2" />
            <line x1="94" y1="82" x2="150" y2="82" stroke="#C2410C" strokeWidth="1.5" />
            <line x1="122" y1="54" x2="122" y2="110" stroke="#C2410C" strokeWidth="1.5" />
            <text x="122" y="76" textAnchor="middle" className="fill-orange-950 text-[8.5px] font-mono font-extrabold">
              METHADONE
            </text>
            <text x="122" y="96" textAnchor="middle" className="fill-orange-950 text-[9px] font-mono font-extrabold">
              40 mg
            </text>
          </g>
        );

      case 'buprenorphine':
        return (
          <g>
            {/* Recognizable Orange Sublingual Hexagon Tablet + Suboxone 8mg/2mg Film Strip */}
            <ellipse cx="90" cy="128" rx="68" ry="10" fill="#000000" opacity="0.45" />
            {/* Suboxone Sublingual Film Strip */}
            <rect x="24" y="42" width="66" height="48" rx="6" fill="#0284C7" stroke="#BAE6FD" strokeWidth="1.6" />
            <rect x="34" y="52" width="46" height="28" rx="4" fill="#F97316" />
            <text x="57" y="69" textAnchor="middle" className="fill-white text-[9px] font-mono font-extrabold">
              N8 | 8/2
            </text>
            {/* Orange Hexagonal Sublingual Tablet */}
            <polygon
              points="122,48 150,64 150,96 122,112 94,96 94,64"
              fill="#FB923C"
              stroke="#FFEDD5"
              strokeWidth="2"
            />
            <text x="122" y="79" textAnchor="middle" className="fill-orange-950 text-[10px] font-mono font-extrabold">
              B 8
            </text>
            <text x="122" y="92" textAnchor="middle" className="fill-orange-950 text-[8px] font-mono font-bold">
              8 mg SL
            </text>
          </g>
        );

      case 'morphine':
        return (
          <g>
            {/* Recognizable Purple MS Contin 30mg Film-Coated Tablet + Glass Morphine Vial */}
            <ellipse cx="90" cy="128" rx="66" ry="10" fill="#000000" opacity="0.45" />
            {/* Purple 30mg MS Contin Round Tablet */}
            <circle cx="58" cy="80" r="31" fill="#9333EA" stroke="#E9D5FF" strokeWidth="2.2" />
            <ellipse cx="48" cy="66" rx="11" ry="4.5" transform="rotate(-25 48 66)" fill="#FFFFFF" opacity="0.35" />
            <text x="58" y="77" textAnchor="middle" className="fill-white text-[10px] font-mono font-extrabold">
              ABG
            </text>
            <text x="58" y="91" textAnchor="middle" className="fill-purple-100 text-[10px] font-mono font-extrabold">
              30
            </text>
            {/* Morphine Sulfate Injection Vial */}
            <rect x="102" y="46" width="44" height="66" rx="7" fill="rgba(255,255,255,0.2)" stroke="#CBD5E1" strokeWidth="1.5" />
            <rect x="108" y="34" width="32" height="12" rx="3" fill="#7E22CE" />
            <rect x="105" y="64" width="38" height="36" rx="3" fill="#F8FAFC" />
            <text x="124" y="80" textAnchor="middle" className="fill-purple-950 text-[7.5px] font-mono font-extrabold">
              MORPHINE
            </text>
            <text x="124" y="92" textAnchor="middle" className="fill-slate-700 text-[8px] font-mono font-bold">
              15 mg/mL
            </text>
          </g>
        );

      case 'codeine':
        return (
          <g>
            {/* Recognizable White Round "Tylenol #3" Tablet + Amber Bottle with Purple Codeine Syrup */}
            <ellipse cx="90" cy="128" rx="66" ry="10" fill="#000000" opacity="0.45" />
            {/* Amber Pharmacy Syrup Bottle with Purple Liquid */}
            <rect x="34" y="44" width="48" height="70" rx="8" fill="#451A03" stroke="#F59E0B" strokeWidth="1.4" />
            <rect x="44" y="30" width="28" height="14" rx="3" fill="#F8FAFC" />
            <rect x="38" y="66" width="40" height="44" rx="5" fill="#7E22CE" opacity="0.85" />
            <text x="58" y="86" textAnchor="middle" className="fill-purple-100 text-[8px] font-mono font-extrabold">
              CODEINE
            </text>
            <text x="58" y="98" textAnchor="middle" className="fill-purple-200 text-[7px] font-mono">
              SYRUP
            </text>
            {/* White Round Tylenol #3 Tablet */}
            <circle cx="120" cy="82" r="30" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2.2" />
            <text x="120" y="76" textAnchor="middle" className="fill-slate-700 text-[9px] font-mono font-extrabold">
              TYLENOL
            </text>
            <text x="120" y="94" textAnchor="middle" className="fill-slate-900 text-[13px] font-mono font-extrabold">
              3
            </text>
          </g>
        );

      case 'tramadol':
        return (
          <g>
            {/* Recognizable Yellow & Green Two-Tone Hard Gelatin Capsule (50mg Tramal) + White Oblong Tablet */}
            <ellipse cx="90" cy="128" rx="66" ry="10" fill="#000000" opacity="0.45" />
            {/* Two-Tone Green & Yellow Capsule */}
            <g transform="rotate(-18 76 66)">
              <rect x="24" y="50" width="52" height="30" rx="15" fill="#15803D" stroke="#86EFAC" strokeWidth="1.5" />
              <rect x="64" y="50" width="52" height="30" rx="15" fill="#FACC15" stroke="#FEF08A" strokeWidth="1.5" />
              <rect x="60" y="50" width="12" height="30" fill="#FACC15" />
              <line x1="66" y1="50" x2="66" y2="80" stroke="#CA8A04" strokeWidth="1.5" />
              <text x="46" y="69" textAnchor="middle" className="fill-white text-[9px] font-mono font-extrabold">
                TRAM
              </text>
              <text x="90" y="69" textAnchor="middle" className="fill-amber-950 text-[9px] font-mono font-extrabold">
                50 mg
              </text>
            </g>
            {/* White Scored Tablet */}
            <ellipse cx="122" cy="98" rx="32" ry="16" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.8" />
            <text x="122" y="102" textAnchor="middle" className="fill-slate-700 text-[9px] font-mono font-extrabold">
              377 | 50
            </text>
          </g>
        );

      case 'tapentadol':
        return (
          <g>
            {/* Recognizable Coral-Orange & Warm Yellow Film-Coated Nucynta / Palexia Tablets */}
            <ellipse cx="90" cy="128" rx="66" ry="10" fill="#000000" opacity="0.45" />
            {/* 50mg Yellow Round Tablet */}
            <circle cx="56" cy="76" r="28" fill="#FBBF24" stroke="#FDE68A" strokeWidth="2" />
            <text x="56" y="74" textAnchor="middle" className="fill-amber-950 text-[9px] font-mono font-extrabold">
              O-M
            </text>
            <text x="56" y="88" textAnchor="middle" className="fill-amber-950 text-[10px] font-mono font-extrabold">
              50
            </text>
            {/* 100mg Coral-Orange Oblong Tablet */}
            <rect x="82" y="62" width="76" height="38" rx="19" fill="#EA580C" stroke="#FDBA74" strokeWidth="2" />
            <text x="120" y="79" textAnchor="middle" className="fill-white text-[9px] font-mono font-extrabold">
              PALEXIA
            </text>
            <text x="120" y="91" textAnchor="middle" className="fill-orange-100 text-[9px] font-mono font-bold">
              100 mg
            </text>
          </g>
        );

      case 'tilidine':
        return (
          <g>
            {/* Recognizable Valoron N Oral Dropper Bottle + White Oblong Retard Tablet */}
            <ellipse cx="90" cy="128" rx="66" ry="10" fill="#000000" opacity="0.45" />
            {/* Amber Dropper Bottle */}
            <rect x="34" y="44" width="46" height="70" rx="8" fill="#78350F" stroke="#FBBF24" strokeWidth="1.5" />
            <rect x="44" y="30" width="26" height="14" rx="3" fill="#DC2626" />
            <rect x="38" y="64" width="38" height="36" rx="4" fill="#FFFBEB" />
            <text x="57" y="79" textAnchor="middle" className="fill-slate-900 text-[8px] font-mono font-extrabold">
              TILIDIN
            </text>
            <text x="57" y="91" textAnchor="middle" className="fill-rose-700 text-[7px] font-mono font-bold">
              +NALOXON
            </text>
            {/* White Oblong Retard Tablet */}
            <rect x="88" y="68" width="68" height="36" rx="18" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2" />
            <line x1="122" y1="69" x2="122" y2="103" stroke="#94A3B8" strokeWidth="1.5" />
            <text x="105" y="90" textAnchor="middle" className="fill-slate-700 text-[8.5px] font-mono font-extrabold">
              100
            </text>
            <text x="139" y="90" textAnchor="middle" className="fill-slate-700 text-[8.5px] font-mono font-extrabold">
              8
            </text>
          </g>
        );

      // ======================== GABAPENTINOIDS ========================
      case 'pregabalin':
        return (
          <g>
            {/* Recognizable Red & White Hard-Shell Lyrica Capsule (PGN 150 / 300) */}
            <ellipse cx="90" cy="128" rx="68" ry="10" fill="#000000" opacity="0.45" />
            {/* Blister Foil Backing */}
            <rect x="24" y="36" width="132" height="78" rx="14" fill="rgba(226,232,240,0.2)" stroke="#94A3B8" strokeWidth="1.4" strokeDasharray="4 3" />
            {/* Red & White Two-Tone Capsule */}
            <g transform="rotate(-10 90 75)">
              <rect x="30" y="54" width="64" height="38" rx="19" fill="#DC2626" stroke="#FCA5A5" strokeWidth="1.8" />
              <rect x="82" y="54" width="68" height="38" rx="19" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.8" />
              <rect x="78" y="54" width="14" height="38" fill="#DC2626" />
              <line x1="92" y1="54" x2="92" y2="92" stroke="#991B1B" strokeWidth="2" />
              {/* Specular capsule shine */}
              <rect x="40" y="60" width="44" height="6" rx="3" fill="#FFFFFF" opacity="0.4" />
              <text x="60" y="79" textAnchor="middle" className="fill-white text-[10px] font-mono font-extrabold">
                LYRICA
              </text>
              <text x="118" y="79" textAnchor="middle" className="fill-slate-800 text-[10px] font-mono font-extrabold">
                PGN 300
              </text>
            </g>
          </g>
        );

      case 'gabapentin':
        return (
          <g>
            {/* Recognizable Bright Yellow Neurontin 300mg Hard Capsule + White 600mg Oval Tablet */}
            <ellipse cx="90" cy="128" rx="68" ry="10" fill="#000000" opacity="0.45" />
            {/* Yellow 300mg Hard Gelatin Capsule */}
            <g transform="rotate(-14 78 64)">
              <rect x="24" y="46" width="106" height="34" rx="17" fill="#FACC15" stroke="#FEF08A" strokeWidth="1.8" />
              <line x1="77" y1="46" x2="77" y2="80" stroke="#CA8A04" strokeWidth="2" />
              <rect x="34" y="52" width="76" height="5" rx="2.5" fill="#FFFFFF" opacity="0.45" />
              <text x="52" y="67" textAnchor="middle" className="fill-amber-950 text-[9px] font-mono font-extrabold">
                GABA
              </text>
              <text x="102" y="67" textAnchor="middle" className="fill-amber-950 text-[9px] font-mono font-extrabold">
                300 mg
              </text>
            </g>
            {/* White 600mg Scored Oval Tablet */}
            <ellipse cx="118" cy="98" rx="36" ry="17" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.8" />
            <line x1="118" y1="82" x2="118" y2="114" stroke="#94A3B8" strokeWidth="1.5" />
            <text x="102" y="102" textAnchor="middle" className="fill-slate-700 text-[8.5px] font-mono font-extrabold">
              600
            </text>
            <text x="134" y="102" textAnchor="middle" className="fill-slate-700 text-[8.5px] font-mono font-extrabold">
              mg
            </text>
          </g>
        );

      // ======================== RX STIMULANTS ========================
      case 'dextroamphetamine':
        return (
          <g>
            {/* Recognizable Half-Transparent Orange Adderall XR Bead Capsule + Blue 4-Way Scored Tablet */}
            <ellipse cx="90" cy="128" rx="68" ry="10" fill="#000000" opacity="0.45" />
            {/* Half-Clear Orange XR Capsule with Visible Time-Release Micro-Beads */}
            <g transform="rotate(-14 78 62)">
              {/* Transparent right half filled with beads */}
              <rect x="68" y="44" width="60" height="34" rx="17" fill="rgba(255,255,255,0.28)" stroke="#FED7AA" strokeWidth="1.8" />
              {[
                [82, 54], [92, 52], [102, 56], [112, 54], [86, 64], [96, 62], [108, 65], [116, 62], [80, 70], [94, 71], [104, 70],
              ].map(([bx, by], i) => (
                <circle key={i} cx={bx} cy={by} r="3.5" fill={i % 2 === 0 ? '#FB923C' : '#FFFFFF'} />
              ))}
              {/* Solid orange left cap */}
              <rect x="24" y="44" width="54" height="34" rx="17" fill="#EA580C" stroke="#FDBA74" strokeWidth="1.8" />
              <rect x="64" y="44" width="14" height="34" fill="#EA580C" />
              <text x="50" y="65" textAnchor="middle" className="fill-white text-[8.5px] font-mono font-extrabold">
                XR 20
              </text>
            </g>
            {/* Round Blue 4-Way Scored IR Tablet */}
            <circle cx="122" cy="96" r="26" fill="#60A5FA" stroke="#BFDBFE" strokeWidth="2" />
            <line x1="98" y1="96" x2="146" y2="96" stroke="#1D4ED8" strokeWidth="1.5" />
            <line x1="122" y1="72" x2="122" y2="120" stroke="#1D4ED8" strokeWidth="1.5" />
            <text x="112" y="90" textAnchor="middle" className="fill-white text-[8px] font-mono font-extrabold">
              d
            </text>
            <text x="132" y="90" textAnchor="middle" className="fill-white text-[8px] font-mono font-extrabold">
              10
            </text>
          </g>
        );

      case 'methylphenidate':
        return (
          <g>
            {/* Recognizable Cylindrical Concerta OROS Laser-Drilled Tablet + Pale Yellow Ritalin 10mg */}
            <ellipse cx="90" cy="128" rx="68" ry="10" fill="#000000" opacity="0.45" />
            {/* Concerta OROS Barrel Tablet */}
            <rect x="24" y="48" width="84" height="36" rx="16" fill="#FEF3C7" stroke="#FDE68A" strokeWidth="2" />
            {/* Laser-drilled osmotic delivery pore */}
            <circle cx="36" cy="66" r="2.8" fill="#475569" />
            <text x="70" y="70" textAnchor="middle" className="fill-amber-950 text-[9.5px] font-mono font-extrabold">
              alza 36
            </text>
            {/* Pale Greenish-Yellow Ritalin 10mg Scored Round Tablet */}
            <circle cx="122" cy="88" r="29" fill="#ECFCCB" stroke="#BEF264" strokeWidth="2" />
            <line x1="95" y1="88" x2="149" y2="88" stroke="#65A30D" strokeWidth="1.6" />
            <text x="122" y="81" textAnchor="middle" className="fill-lime-950 text-[8.5px] font-mono font-extrabold">
              RITALIN
            </text>
            <text x="122" y="102" textAnchor="middle" className="fill-lime-900 text-[9.5px] font-mono font-extrabold">
              10
            </text>
          </g>
        );

      // ======================== ILLICIT SUBSTANCES: DISSOCIATIVES, EMPATHOGENS & PSYCHEDELICS ========================
      case 'ketamine':
        return (
          <g>
            {/* Recognizable Translucent Needle-Like Ketamine Crystal Shards + Medical Vial */}
            <ellipse cx="90" cy="128" rx="68" ry="10" fill="#000000" opacity="0.45" />
            {/* Medical Ketamine HCl Vial on Left */}
            <rect x="28" y="44" width="44" height="68" rx="6" fill="rgba(255,255,255,0.2)" stroke="#CBD5E1" strokeWidth="1.5" />
            <rect x="36" y="30" width="28" height="14" rx="3" fill="#2563EB" stroke="#93C5FD" strokeWidth="1" />
            <rect x="31" y="62" width="38" height="36" rx="3" fill="#F8FAFC" />
            <text x="50" y="77" textAnchor="middle" className="fill-slate-900 text-[7px] font-mono font-extrabold">
              KETAMINE
            </text>
            <text x="50" y="89" textAnchor="middle" className="fill-blue-700 text-[7px] font-mono font-bold">
              50 mg/mL
            </text>
            {/* Translucent Needle-Like Crystal Shards on Right */}
            <g stroke="#E0F2FE" strokeWidth="1.2" fill="rgba(224,242,254,0.75)">
              <polygon points="88,108 104,58 110,60 96,110" />
              <polygon points="104,112 128,50 135,54 112,114" />
              <polygon points="118,110 148,68 154,73 126,114" />
              <polygon points="84,96 122,82 125,88 88,102" />
              <polygon points="98,114 144,96 146,103 102,118" />
            </g>
          </g>
        );

      case 'mdma':
        return (
          <g>
            {/* Recognizable Champagne/Amber MDMA Quartz Crystal Rocks + Geometric Embossed Ecstasy Press */}
            <ellipse cx="90" cy="128" rx="68" ry="10" fill="#000000" opacity="0.45" />
            {/* Champagne/Amber MDMA Crystal Rock Cluster */}
            <polygon
              points="28,98 38,60 64,48 84,68 78,106 46,112"
              fill="url(#champagneCrystal)"
              stroke="#FDE68A"
              strokeWidth="1.6"
            />
            <polyline points="38,60 58,78 84,68 M58,78 46,112" fill="none" stroke="#FEF3C7" strokeWidth="1.2" opacity="0.8" />
            <polygon
              points="68,112 76,82 96,78 104,104 86,116"
              fill="url(#champagneCrystal)"
              stroke="#FDE68A"
              strokeWidth="1.4"
            />
            {/* Geometric Embossed Shield / Diamond Ecstasy Tablet */}
            <polygon
              points="126,46 156,66 144,108 108,108 96,66"
              fill="#EC4899"
              stroke="#FBCFE8"
              strokeWidth="2"
            />
            <polygon
              points="126,54 148,69 138,100 114,100 104,69"
              fill="none"
              stroke="#FCE7F3"
              strokeWidth="1.2"
            />
            <text x="126" y="82" textAnchor="middle" className="fill-white text-[9.5px] font-mono font-extrabold">
              MDMA
            </text>
            <text x="126" y="94" textAnchor="middle" className="fill-pink-100 text-[7.5px] font-mono font-bold">
              120 mg
            </text>
          </g>
        );

      case 'cocaine':
        return (
          <g>
            {/* Recognizable Iridescent Pearlescent "Fishscale" Flaky Hydrochloride Block & Fine Powder */}
            <ellipse cx="90" cy="128" rx="68" ry="10" fill="#000000" opacity="0.45" />
            {/* Dark Obsidian Mirror Plate */}
            <rect x="20" y="42" width="140" height="76" rx="12" fill="#090D16" stroke="#334155" strokeWidth="1.6" />
            {/* PearlescentLayered Fishscale Block */}
            <polygon
              points="34,98 46,58 80,52 96,74 86,106 48,108"
              fill="#F8FAFC"
              stroke="#E2E8F0"
              strokeWidth="1.6"
            />
            <polygon points="46,58 72,72 80,52" fill="#E0F2FE" opacity="0.7" />
            <polygon points="34,98 72,72 86,106 48,108" fill="#F1F5F9" />
            {/* Iridescent sheen lines */}
            <line x1="48" y1="66" x2="76" y2="62" stroke="#BAE6FD" strokeWidth="1.5" />
            <line x1="44" y1="82" x2="80" y2="78" stroke="#E0E7FF" strokeWidth="1.5" />
            {/* Fine Crystalline Mound & Two Calibrated Lines */}
            <line x1="108" y1="64" x2="144" y2="64" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" />
            <line x1="108" y1="78" x2="144" y2="78" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" />
            <text x="126" y="102" textAnchor="middle" className="fill-slate-400 text-[8px] font-mono font-bold">
              HCl 92%
            </text>
          </g>
        );

      case 'amphetamine-racemic':
        return (
          <g>
            {/* Recognizable Matte White Sulfate Powder Mound + Clear Weighted Capsule */}
            <ellipse cx="90" cy="128" rx="66" ry="10" fill="#000000" opacity="0.45" />
            <rect x="22" y="46" width="136" height="70" rx="12" fill="#0F172A" stroke="#475569" strokeWidth="1.5" />
            {/* White Sulfate Powder Mound */}
            <path d="M32,104 Q66,52 100,104 Z" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.4" />
            <path d="M46,104 Q66,70 86,104 Z" fill="#F1F5F9" />
            {/* Clear Capsule Half-Filled with White Sulfate */}
            <g transform="rotate(-20 126 78)">
              <rect x="102" y="66" width="48" height="22" rx="11" fill="rgba(255,255,255,0.25)" stroke="#E2E8F0" strokeWidth="1.5" />
              <rect x="104" y="68" width="26" height="18" rx="9" fill="#FFFFFF" />
            </g>
            <text x="66" y="98" textAnchor="middle" className="fill-slate-600 text-[8px] font-mono font-extrabold">
              d/l-SO4
            </text>
          </g>
        );

      case '2cb':
        return (
          <g>
            {/* Recognizable Small Neon-Pink Embossed "2C-B 20mg" Tablet + Clear Milligram Capsule */}
            <ellipse cx="90" cy="128" rx="66" ry="10" fill="#000000" opacity="0.45" />
            {/* Clear Capsule with Measured White 2C-B HBr Powder */}
            <g transform="rotate(-15 62 74)">
              <rect x="26" y="58" width="72" height="30" rx="15" fill="rgba(255,255,255,0.25)" stroke="#E2E8F0" strokeWidth="1.6" />
              <rect x="28" y="60" width="38" height="26" rx="13" fill="#F8FAFC" />
              <text x="48" y="77" textAnchor="middle" className="fill-slate-800 text-[8.5px] font-mono font-extrabold">
                18 mg
              </text>
            </g>
            {/* Small Neon-Magenta Embossed 2C-B Press */}
            <circle cx="122" cy="80" r="28" fill="#D946EF" stroke="#F5D0FE" strokeWidth="2.2" />
            <circle cx="122" cy="80" r="22" fill="none" stroke="#FAE8FF" strokeWidth="1.2" strokeDasharray="3 2" />
            <text x="122" y="77" textAnchor="middle" className="fill-white text-[10px] font-mono font-extrabold">
              2C-B
            </text>
            <text x="122" y="90" textAnchor="middle" className="fill-fuchsia-100 text-[8px] font-mono font-bold">
              NEXUS
            </text>
          </g>
        );

      case 'psilocybin':
        return (
          <g>
            {/* Recognizable Dried Golden-Capped Psilocybe Cubensis Mushrooms with Indigo-Blue Bruised Stems */}
            <ellipse cx="90" cy="128" rx="68" ry="10" fill="#000000" opacity="0.45" />
            {/* Left Mushroom */}
            <path d="M52,66 C50,86 44,102 48,114 L62,114 C60,100 62,84 64,66 Z" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1.2" />
            {/* Characteristic Psilocin Blue Bruising on Stem */}
            <path d="M50,92 C52,86 58,88 59,98 C56,106 50,104 50,92 Z" fill="#1D4ED8" opacity="0.55" />
            {/* Golden Caramel Cap */}
            <path d="M24,68 C24,42 58,32 58,32 C58,32 92,42 92,68 C74,72 42,72 24,68 Z" fill="url(#amberOil)" stroke="#FDE68A" strokeWidth="1.5" />
            {/* Right Smaller Mushroom */}
            <path d="M114,76 C114,92 110,104 112,114 L126,114 C124,102 124,90 124,76 Z" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1.2" />
            <path d="M114,98 C116,94 122,94 123,104 C118,110 114,106 114,98 Z" fill="#1D4ED8" opacity="0.6" />
            <path d="M92,78 C94,54 119,46 119,46 C119,46 144,54 146,78 C130,82 108,82 92,78 Z" fill="url(#amberOil)" stroke="#FDE68A" strokeWidth="1.5" />
          </g>
        );

      case 'lsd-25':
        return (
          <g>
            {/* Recognizable Perforated 3x3 LSD Blotter Art Sheet + Single 100µg Tab */}
            <ellipse cx="90" cy="128" rx="68" ry="10" fill="#000000" opacity="0.45" />
            {/* 3x3 Perforated Blotter Sheet */}
            <g transform="rotate(-8 74 74)">
              <rect x="30" y="32" width="84" height="84" rx="4" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="4 2" />
              {/* Geometric psychedelic prism artwork on sheet */}
              <rect x="34" y="36" width="76" height="76" fill="url(#blotterGrad)" />
              <circle cx="72" cy="74" r="24" fill="none" stroke="#FFFFFF" strokeWidth="1.8" opacity="0.85" />
              <polygon points="72,48 96,88 48,88" fill="none" stroke="#FDE047" strokeWidth="1.8" />
              {/* Perforation grid lines */}
              <line x1="58" y1="32" x2="58" y2="116" stroke="#FFFFFF" strokeWidth="1.2" strokeDasharray="3 2" />
              <line x1="86" y1="32" x2="86" y2="116" stroke="#FFFFFF" strokeWidth="1.2" strokeDasharray="3 2" />
              <line x1="30" y1="60" x2="114" y2="60" stroke="#FFFFFF" strokeWidth="1.2" strokeDasharray="3 2" />
              <line x1="30" y1="88" x2="114" y2="88" stroke="#FFFFFF" strokeWidth="1.2" strokeDasharray="3 2" />
            </g>
            {/* Detached Single 100µg Blotter Square */}
            <rect x="122" y="64" width="34" height="34" rx="3" fill="#4F46E5" stroke="#FFFFFF" strokeWidth="1.8" strokeDasharray="3 1.5" />
            <text x="139" y="80" textAnchor="middle" className="fill-white text-[8.5px] font-mono font-extrabold">
              LSD
            </text>
            <text x="139" y="91" textAnchor="middle" className="fill-amber-300 text-[7.5px] font-mono font-bold">
              100µg
            </text>
          </g>
        );

      default:
        return (
          <g>
            <circle cx="90" cy="74" r="36" fill="url(#amberOil)" stroke="#FFFFFF" strokeWidth="1.8" />
            <text x="90" y="78" textAnchor="middle" className="fill-slate-950 text-[11px] font-mono font-extrabold">
              {compound.shortName}
            </text>
          </g>
        );
    }
  };

  const renderVectorSvg = () => (
    <svg
      viewBox="0 0 180 140"
      className="w-full h-full select-none drop-shadow-md"
      role="img"
      aria-label={`Recognizable physical specimen illustration of ${compound.name}`}
    >
      <defs>
        <linearGradient id={`budGrad-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="55%" stopColor="#059669" />
          <stop offset="100%" stopColor="#064E3B" />
        </linearGradient>
        <linearGradient id="budGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="55%" stopColor="#059669" />
          <stop offset="100%" stopColor="#064E3B" />
        </linearGradient>
        <linearGradient id="amberOil" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FDE047" />
          <stop offset="50%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#B45309" />
        </linearGradient>
        <linearGradient id="champagneCrystal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FEF3C7" />
          <stop offset="50%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#92400E" />
        </linearGradient>
        <linearGradient id="blotterGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#EC4899" />
          <stop offset="50%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      {renderSpecimenSvg()}
    </svg>
  );

  // If a verified real photograph exists and is active
  const hasRealPhoto = Boolean(realPhoto && !imageError);

  return (
    <>
      <div className={`relative ${className} group overflow-hidden rounded-2xl bg-[#090D16] border border-white/10 shadow-inner flex items-center justify-center`}>
        {hasRealPhoto && viewMode === 'real' ? (
          <div className="relative w-full h-full flex flex-col justify-between overflow-hidden">
            {/* Real High-Resolution Photo */}
            <img
              src={realPhoto.imageSrc}
              alt={`${realPhoto.pillImprint} - ${realPhoto.formulation}`}
              referrerPolicy="no-referrer"
              loading="lazy"
              onError={() => setImageError(true)}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Subtle Vignette Overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/55 pointer-events-none" />

            {/* Top Bar: Real Photo Badge & View Switcher */}
            <div className="relative z-10 w-full p-2 flex items-center justify-between gap-1.5 pointer-events-auto">
              <span className="flex items-center gap-1 text-[9px] font-mono font-bold text-white bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-full border border-emerald-400/30 shadow-xs">
                <Camera className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
                <span className="truncate">REAL PHOTO</span>
              </span>

              <div className="flex items-center gap-1">
                {allowZoom && (
                  <button
                    type="button"
                    title="Inspect high-resolution photo"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowLightbox(true);
                    }}
                    className="p-1 rounded-full bg-black/60 hover:bg-black/85 text-white/90 hover:text-white border border-white/15 backdrop-blur-md transition-colors"
                  >
                    <ZoomIn className="w-3 h-3" />
                  </button>
                )}
                <button
                  type="button"
                  title="Switch to Vector Specimen"
                  onClick={(e) => {
                    e.stopPropagation();
                    setViewMode('svg');
                  }}
                  className="px-1.5 py-0.5 rounded-full bg-black/60 hover:bg-black/85 text-[8.5px] font-mono text-white/80 hover:text-white border border-white/15 backdrop-blur-md transition-colors"
                >
                  Diagram
                </button>
              </div>
            </div>

            {/* Bottom Bar: Pill Imprint / Specimen Label */}
            {showCaption && (
              <div className="relative z-10 w-full p-2 flex flex-col gap-0.5 pointer-events-auto">
                <div className="flex items-center justify-between text-[9px] font-mono font-bold text-amber-300 drop-shadow-sm">
                  <span className="truncate">{realPhoto.pillImprint}</span>
                  {realPhoto.resolution && (
                    <span className="text-[8px] font-normal text-slate-400 shrink-0">
                      {realPhoto.resolution}
                    </span>
                  )}
                </div>
                <div className="text-[8.5px] font-mono text-slate-200 line-clamp-1 opacity-90">
                  {realPhoto.formulation}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="relative w-full h-full flex items-center justify-center p-1.5">
            {renderVectorSvg()}

            {hasRealPhoto && (
              <div className="absolute top-2 right-2 z-10">
                <button
                  type="button"
                  title="Switch to Real High-Res Medication Photo"
                  onClick={(e) => {
                    e.stopPropagation();
                    setViewMode('real');
                  }}
                  className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/60 hover:bg-black/85 text-[8.5px] font-mono text-emerald-300 border border-emerald-400/30 backdrop-blur-md transition-colors shadow-sm"
                >
                  <Camera className="w-2.5 h-2.5" />
                  <span>Real Photo</span>
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Lightbox High-Resolution Inspector Modal */}
      {showLightbox && realPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setShowLightbox(false)}
          className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-[#0F172A] border border-slate-700 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
          >
            {/* Lightbox Header */}
            <div className="p-4 border-b border-slate-800 bg-slate-900/90 flex items-center justify-between gap-3 shrink-0">
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="p-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <Camera className="w-4 h-4" />
                </span>
                <div className="truncate">
                  <h3 className="text-sm sm:text-base font-bold text-white truncate">
                    {compound.name} — Real High-Resolution Specimen
                  </h3>
                  <p className="text-xs text-amber-300 font-mono">
                    {realPhoto.pillImprint} · {realPhoto.resolution || 'High Resolution'}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowLightbox(false)}
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center shrink-0 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Lightbox Image Container */}
            <div className="flex-1 overflow-auto bg-black flex items-center justify-center p-4">
              <img
                src={realPhoto.imageSrc}
                alt={`${compound.name} real high-resolution photograph`}
                referrerPolicy="no-referrer"
                className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
              />
            </div>

            {/* Lightbox Footer & Details */}
            <div className="p-4 border-t border-slate-800 bg-slate-900/80 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-300 shrink-0">
              <div className="space-y-0.5">
                <div className="text-white font-semibold">
                  {realPhoto.formulation}
                </div>
                <div className="text-slate-400 text-[11px]">
                  Archive: {realPhoto.sourceCredit}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-300">
                  Formula: {compound.molecularFormula}
                </span>
                <button
                  type="button"
                  onClick={() => setShowLightbox(false)}
                  className="px-3 py-1.5 rounded-xl bg-[#007AFF] hover:bg-[#0062CC] text-white font-bold transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

