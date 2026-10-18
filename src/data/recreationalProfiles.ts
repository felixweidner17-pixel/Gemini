import { CannabinoidProfile, isCannabinoidSubstance } from './cannabinoids';

export interface RecreationalSubstanceProfile {
  physicalFormLabel: string;
  physicalAppearance: string;
  recreationalFeel: string;
  subjectiveTags: string[];
  phases: {
    onsetFeel: string;
    peakFeel: string;
    comedownFeel: string;
  };
}

const BASE_RECREATIONAL_PROFILES: Record<string, RecreationalSubstanceProfile> = {
  // ======================== PHYTOCANNABINOIDS ========================
  'delta9-thc': {
    physicalFormLabel: 'Trichome Flower & Live Resin',
    physicalAppearance:
      'Frosty green-and-purple Cannabis sativa flower buds dusted with milky/amber trichome heads, golden-amber vape distillate, or infused edibles.',
    recreationalFeel:
      'Produces the classic, warm, multifaceted cannabis high: an immediate wave of behind-the-eyes pressure and facial relaxation followed by uplifted euphoria, heightened sensory appreciation (music sounds deeper, food tastes richer, colors pop), associative daydreaming, and spontaneous laughter. As the peak settles, a cozy physical heaviness melts muscle tension while time perception slows down.',
    subjectiveTags: [
      'Euphoric Mood Lift & Giggliness',
      'Deep Music & Taste Enhancement',
      'Warm Behind-the-Eyes Relaxation',
      'Time Dilation & Associative Thoughts',
    ],
    phases: {
      onsetFeel: 'Tingling behind the eyes and temples with an immediate drop in physical tension.',
      peakFeel: 'Immersive cerebral euphoria, vivid sensory depth, hunger ("munchies"), and cozy body warmth.',
      comedownFeel: 'Dreamy, tranquil couch-lock tapering into restful sleepiness.',
    },
  },
  cbd: {
    physicalFormLabel: 'Amber Tincture & Softgel',
    physicalAppearance:
      'Golden-amber hemp extract oil in dropper bottles, translucent softgel capsules, or pale crystalline isolate powder.',
    recreationalFeel:
      'Does not produce a classic "stoned" or intoxicating head high. Instead, recreationally or socially it feels like taking the sharp edges off stress: shoulders drop, racing thoughts quiet down, physical restlessness loosens into a calm, grounded body comfort, and if paired with THC, it smooths out paranoia and heart racing into a mellow, balanced chill.',
    subjectiveTags: [
      'Clear-Headed Stress Relief',
      'Physical Muscle Unwinding',
      'Smooths Out THC Anxiety',
      'Zero Cognitive Fog or Intoxication',
    ],
    phases: {
      onsetFeel: 'Subtle softening of chest/shoulder tension and quieter background anxiety.',
      peakFeel: 'Grounded, clear-headed physical relaxation and emotional steadiness.',
      comedownFeel: 'Seamless return to baseline or easier transition into natural sleep.',
    },
  },
  cbn: {
    physicalFormLabel: 'Amber Night Oil & Gummy',
    physicalAppearance:
      'Deep ruby-amber oxidized cannabinoid oil in night-time dropper vials, pink/white crystalline isolate, or dark berry sleep gummies.',
    recreationalFeel:
      'Feels like the heavy, sleepy tail-end of an aged indica strain without the racing cerebral peak. Recreationally, it produces a warm, weighted "heavy-eyelids" body sedation, gentle mental quietude, and a cozy gravitational pull toward the couch or bed, making it feel like a mild, dreamy nightcap.',
    subjectiveTags: [
      'Heavy Eyelids & Nighttime Sedation',
      'Warm Weighted Blanket Body Feel',
      'Minimal Racing Thoughts',
      'Cozy Pre-Sleep Tranquility',
    ],
    phases: {
      onsetFeel: 'Gradual physical slowing and warm heaviness across the limbs.',
      peakFeel: 'Deep somatic calm, heavy eyelids, and mild, hazy daydreaming.',
      comedownFeel: 'Long, restful sleepiness (can leave mild morning grogginess at high doses).',
    },
  },
  cbg: {
    physicalFormLabel: 'White Isolate & Frosty Bud',
    physicalAppearance:
      'Fluffy pearlescent white crystalline isolate powder ("Mother Cannabinoid") or pale, sugar-frosted hemp flower buds.',
    recreationalFeel:
      'Non-intoxicating on its own, but noticeably uplifting and centering compared to CBD. Users describe a clean, focused daytime calm—like a gentle mental reset that lifts brain fog and physical tension without any heaviness, sedation, or altered perception.',
    subjectiveTags: [
      'Crisp Daytime Mental Clarity',
      'Light Uplifted Mood',
      'Physical Tension Release',
      'Non-Intoxicating & Alert',
    ],
    phases: {
      onsetFeel: 'Gentle clearing of mental clutter and physical tightness.',
      peakFeel: 'Calm, alert focus with a light sense of physical well-being.',
      comedownFeel: 'Clean fade with no crash or drowsiness.',
    },
  },
  thcv: {
    physicalFormLabel: 'Clear-Gold Sativa Vape Cart',
    physicalAppearance:
      'Clear pale-gold distillate in glass vape cartridges or bright green African landrace sativa flower (such as Durban Poison).',
    recreationalFeel:
      'Often called "diet weed" or the "espresso of cannabinoids." At low doses it feels crisp, alert, and appetite-suppressing with zero couch-lock; at higher recreational doses it delivers a fast, sparkling, clear-headed cerebral buzz with energized focus, visual crispness, and no munchies or heavy lethargy.',
    subjectiveTags: [
      'Sparkling Clear-Headed Buzz',
      'Energized Sativa-Like Focus',
      'Suppresses Appetite (No Munchies)',
      'Fast Onset & Clean Short Finish',
    ],
    phases: {
      onsetFeel: 'Brisk, uplifting cerebral rush within minutes of inhalation.',
      peakFeel: 'Bright, energetic, clear-headed euphoria with zero body heaviness.',
      comedownFeel: 'Crisp, rapid return to sobriety without mental fog or grogginess.',
    },
  },

  // ======================== 9H- ENRICHED SERIES ========================
  '9h-hhcp': {
    physicalFormLabel: 'Heavy Amber 9H-HHCP Cart & Jar',
    physicalAppearance:
      'Ultra-thick, slow-moving golden-amber distillate oil in glass CCELL vape cartridges and borosilicate concentrate jars.',
    recreationalFeel:
      'One of the heaviest, longest-lasting cannabinoid experiences available. Recreationally, it builds slowly over 30–60 minutes into a massive, enveloping full-body melt and intense, dreamy cerebral immersion. Gravity feels doubled, limbs feel warmly weighted into the couch, time stretches dramatically, and the deep euphoric stone can persist for an entire day and into the next morning.',
    subjectiveTags: [
      'Massive Full-Body Couch-Lock',
      'Intense Multi-Hour Euphoric Peak',
      'Slow-Building Creeping Rush',
      'Next-Day Afterglow / Heavy Stone',
    ],
    phases: {
      onsetFeel: 'Deceptively smooth start for 15–30 minutes before a deep, rising wave of warmth.',
      peakFeel: 'Profound, narcotic-like cannabinoid body melt, vivid daydreaming, and heavy eyelids.',
      comedownFeel: 'Extended 12–24+ hour dreamy afterglow and deep sleep.',
    },
  },
  '9h-hhc': {
    physicalFormLabel: 'Golden 9H-HHC Vape & Syringe',
    physicalAppearance:
      'Bright honey-gold viscous distillate in vape cartridges and glass Luer-lock syringes.',
    recreationalFeel:
      'Feels remarkably close to premium Δ9-THC flower distillate, but with a slightly smoother, less anxious headspace. Because the inactive (9S) isomer is removed, it delivers a reliable, warm euphoric head buzz, upbeat social mood, enhanced music/visuals, and a relaxing body stone without the erratic weak batches of standard racemic HHC.',
    subjectiveTags: [
      'True Δ9-THC-Strength Euphoria',
      'Lower Paranoia / Smoother Headspace',
      'Warm Social & Creative Lift',
      'Balanced Body Relaxation',
    ],
    phases: {
      onsetFeel: 'Warm head rush and facial relaxation within 3–8 minutes.',
      peakFeel: 'Full-bodied euphoria, uplifting mood, and comfortable physical calm.',
      comedownFeel: 'Clean, cozy 3-hour taper into light relaxation.',
    },
  },
  '9h-thch': {
    physicalFormLabel: 'Copper-Gold 9H-THCH Distillate',
    physicalAppearance:
      'Rich copper-to-amber hexyl cannabinoid distillate in ceramic vape pods and glass jars.',
    recreationalFeel:
      'Hits the sweet spot between standard THC and ultra-heavy HHCP: recreationally it produces a deeply euphoric, floating body high and a giggly, immersive, almost psychedelic cannabis headspace that lasts roughly twice as long as regular weed without locking you out for two full days.',
    subjectiveTags: [
      'Deep Floating Body Euphoria',
      'Long 6–10 Hour Immersive High',
      'Giggly & Sensory-Rich Peak',
      'Strong Couch-Lock at Moderate Doses',
    ],
    phases: {
      onsetFeel: 'Steady, warming wave spreading from the head down through the shoulders.',
      peakFeel: 'Rich, floating euphoria, vivid closed-eye imagery, and heavy limb relaxation.',
      comedownFeel: 'Long, cushioned descent into deep sleep.',
    },
  },
  '9h-thcb': {
    physicalFormLabel: 'Champagne-Gold 9H-THCB Cart',
    physicalAppearance:
      'Light champagne-gold distillate in glass cartridges and dab applicators.',
    recreationalFeel:
      'Feels like a fast, punchy "dab rush" in a cartridge. The 4-carbon butyl chain docks quickly at CB1 receptors, giving an immediate, bright cerebral head rush and intense sensory buzz that peaks hard and wraps up cleaner and faster than traditional Δ9-THC.',
    subjectiveTags: [
      'Fast Punchy Cerebral Head Rush',
      'Bright Euphoric Peak',
      'Shorter, Cleaner Duration',
      'Less Lingering Brain Fog',
    ],
    phases: {
      onsetFeel: 'Immediate 2–5 minute cerebral tingle and head rush.',
      peakFeel: 'Punchy, upbeat euphoria and heightened visual/auditory focus.',
      comedownFeel: 'Brisk, clean taper over 2–3 hours.',
    },
  },
  '9h-thcv': {
    physicalFormLabel: 'Lemon-Gold 9H-THCV Cart',
    physicalAppearance:
      'Pale lemon-gold distillate oil in slim daytime vape cartridges.',
    recreationalFeel:
      'Delivers a crisp, motivating, clear-headed buzz with zero couch-lock. Ideal for daytime recreational use—colors and music feel sharper, mood is buoyant and talkative, and appetite stays suppressed.',
    subjectiveTags: [
      'Motivating Daytime Head Buzz',
      'Zero Couch-Lock or Lethargy',
      'Talkative & Creative Focus',
      'Appetite Suppressing',
    ],
    phases: {
      onsetFeel: 'Quick, refreshing mental lift and alertness.',
      peakFeel: 'Clear-headed, upbeat euphoria with light physical energy.',
      comedownFeel: 'Smooth, fatigue-free return to baseline.',
    },
  },
  h4cbd: {
    physicalFormLabel: 'Thick Amber H4-CBD Distillate',
    physicalAppearance:
      'Dense, golden-amber hydrogenated CBD oil in glass jars and oral tinctures.',
    recreationalFeel:
      'Often described as "CBD that you can actually feel." Recreationally it delivers a warm, unmistakable physical body buzz and heavy shoulder relaxation—similar to a 3:1 CBD-to-THC edible—calming the body and lightly tinting the mood with cozy contentment while keeping your mind clear and anxiety-free.',
    subjectiveTags: [
      'Noticeable Warm Body Buzz',
      'Deep Muscle & Shoulder Relaxation',
      'Calm, Anxiety-Free Headspace',
      'Feels Like a 3:1 CBD:THC Blend',
    ],
    phases: {
      onsetFeel: 'Warm physical wave releasing tension in the neck and back.',
      peakFeel: 'Cozy, weighted body comfort with a lightly dreamy, peaceful mood.',
      comedownFeel: 'Gentle, grounding calm with no paranoia.',
    },
  },

  // ======================== HYDROXYLATED SERIES ========================
  '9-oh-thc': {
    physicalFormLabel: 'Honey-Crystalline 9-OH Isolate',
    physicalAppearance:
      'Golden honey-colored semi-crystalline cannabinoid oil in vape cartridges and glass vials.',
    recreationalFeel:
      'Produces a mellow, friendly, functional cannabis buzz. Recreationally it feels lighter and more forgiving than Δ9-THC—offering a warm mood lift, gentle body relaxation, and easygoing social comfort that clears out of your system quickly without a heavy hangover.',
    subjectiveTags: [
      'Mellow Functional Head Buzz',
      'Low Anxiety & Easygoing Mood',
      'Gentle Physical Relaxation',
      'Short, Clean 2-Hour Duration',
    ],
    phases: {
      onsetFeel: 'Fast, gentle warmth behind the eyes.',
      peakFeel: 'Light, pleasant euphoria and relaxed social flow.',
      comedownFeel: 'Quick, clear-headed fade within 2–3 hours.',
    },
  },
  '9-oh-thcp': {
    physicalFormLabel: 'Amber 9-OH-THCP Resin Vial',
    physicalAppearance:
      'Deep golden-amber hydroxylated heptyl resin in calibrated cartridges and concentrate jars.',
    recreationalFeel:
      'Gives you the deep, luxurious body euphoria and heavy relaxation of a heptyl cannabinoid (-P series), but without the 36-hour "hangover coma." Recreationally it feels rich, sedating, and deeply euphoric for an evening, while letting you wake up much clearer the next day.',
    subjectiveTags: [
      'Potent Heptyl Euphoria',
      'Deep Evening Couch-Lock',
      'No Multi-Day Hangover Lock',
      'Warm Full-Body Blanket',
    ],
    phases: {
      onsetFeel: 'Strong, steady wave of cerebral and physical warmth over 10 minutes.',
      peakFeel: 'Heavy, blissful body melt and immersive mental relaxation.',
      comedownFeel: 'Deep sleep followed by a manageable morning recovery.',
    },
  },
  '10-oh-hhc': {
    physicalFormLabel: 'Golden 10-OH-HHC Vape & Wax',
    physicalAppearance:
      'Pale golden distillate or honeycomb crystalline wax in European vape cartridges and dab jars.',
    recreationalFeel:
      'When vaped, it hits remarkably fast—delivering a bright, upbeat, clear-headed cannabis euphoria within minutes. It feels slightly lighter and cleaner than traditional Δ9-THC, with a cheerful mood lift, pleasant body lightness, and a crisp 2-to-3 hour duration that doesn’t leave you groggy.',
    subjectiveTags: [
      'Fast-Hitting Inhaled Euphoria',
      'Cheerful, Upbeat Headspace',
      'Clean 2–3 Hour Duration',
      'Minimal Next-Day Grogginess',
    ],
    phases: {
      onsetFeel: 'Rapid 2–5 minute head rush when vaped.',
      peakFeel: 'Bright, sociable euphoria and light physical relaxation.',
      comedownFeel: 'Fast, clean taper with a clear head.',
    },
  },
  '10-oh-hhcp': {
    physicalFormLabel: 'Deep-Gold 10-OH-HHCP Cart',
    physicalAppearance:
      'Rich golden-amber distillate in high-potency vape cartridges and concentrate jars.',
    recreationalFeel:
      'A powerhouse evening cannabinoid: it combines the fast onset of a 10-hydroxy compound with the heavy, velvety CB1 punch of HHCP. Expect a strong wave of euphoria, heavy eyelids, deep music immersion, and a plush full-body stone lasting 4–7 hours.',
    subjectiveTags: [
      'Strong Velvety Euphoric Rush',
      'Heavy Full-Body Relaxation',
      'Immersive Music & Visual Depth',
      '4–7 Hour Evening Stone',
    ],
    phases: {
      onsetFeel: 'Fast-building cerebral warmth within 5–10 minutes.',
      peakFeel: 'Potent, enveloping body stone and blissful mental drift.',
      comedownFeel: 'Heavy, restful sleepiness.',
    },
  },
  '10-oh-thch': {
    physicalFormLabel: 'Warm Amber 10-OH-THCH Cart',
    physicalAppearance:
      'Warm amber hexyl-hydroxylated distillate in vape cartridges and infused edibles.',
    recreationalFeel:
      'Delivers a strong, well-rounded recreational high (~2.4x Δ9-THC) that blends cheerful cerebral euphoria with a warm, floating body buzz. Feels more potent and immersive than standard HHC, yet wraps up cleanly within a single evening.',
    subjectiveTags: [
      'Strong Balanced Head & Body High',
      'Warm Floating Sensation',
      'Enhanced Humor & Sensory Detail',
      'Manageable Evening Duration',
    ],
    phases: {
      onsetFeel: 'Quick, uplifting head rush and shoulder drop.',
      peakFeel: 'Rich, floating euphoria and cozy physical relaxation.',
      comedownFeel: 'Smooth 3–4 hour wind-down.',
    },
  },
  '8-oh-hhc': {
    physicalFormLabel: 'Honey 8-OH-HHC Isolate & Cart',
    physicalAppearance:
      'Translucent honey-colored metabolite isolate in glass vials and mild vape cartridges.',
    recreationalFeel:
      'A gentle, beginner-friendly cannabinoid buzz (~45% of Δ9-THC). Recreationally it feels like sipping a light session beer vs. taking shots: warm, tranquil, lightly giggly, and physically relaxing with very low risk of anxiety or overwhelm.',
    subjectiveTags: [
      'Gentle Session-Strength Buzz',
      'Very Low Paranoia Risk',
      'Light Muscle Relaxation',
      'Short & Easygoing',
    ],
    phases: {
      onsetFeel: 'Soft, gradual warming sensation.',
      peakFeel: 'Mellow contentment and light physical ease.',
      comedownFeel: 'Quick, effortless return to baseline.',
    },
  },
  '11-oh-thc': {
    physicalFormLabel: 'Infused Edible Gummies & Chocolate',
    physicalAppearance:
      'Sugared cannabis-infused fruit gummy cubes, chocolate squares, or amber hepatic metabolite reference oil.',
    recreationalFeel:
      'This is the exact compound responsible for the legendary "edible high." Recreationally, it feels noticeably deeper, heavier, and more psychedelic than smoking flower: a full-body gravitational wave, intense closed-eye dreaminess, profound time dilation, and a warm, all-encompassing stone that lasts 5–9 hours.',
    subjectiveTags: [
      'Deep "Edible-Style" Full-Body Stone',
      'Borderline Psychedelic Headspace',
      'Strong Time Dilation & Munchies',
      'Long 5–9 Hour Immersion',
    ],
    phases: {
      onsetFeel: 'Gradual, unmistakable wave of warmth rising from the core.',
      peakFeel: 'Heavy, immersive cerebral and somatic euphoria with vivid closed-eye imagery.',
      comedownFeel: 'Long, sleepy afterglow.',
    },
  },

  // ======================== SEMI-SYNTHETICS ========================
  'delta8-thc': {
    physicalFormLabel: 'Clear-Rose Δ8-THC Distillate',
    physicalAppearance:
      'Water-clear to pale pink/amber viscous distillate in vape cartridges, dab jars, and gummies.',
    recreationalFeel:
      'Nicknamed "diet weed" or "weekday THC." Recreationally it delivers all the warm physical relaxation, appetite stimulation, and gentle mood lift of regular cannabis, but with roughly 60% of the intensity and a noticeably calmer, less paranoid mental space.',
    subjectiveTags: [
      'Smooth Body-Focused Relaxation',
      'Calmer & Less Anxious Than Δ9-THC',
      'Functional Mood Lift & Munchies',
      'Cozy Evening Unwind',
    ],
    phases: {
      onsetFeel: 'Gentle behind-the-eyes relaxation and warm limb heaviness.',
      peakFeel: 'Plush physical calm, upbeat mood, and strong appetite boost.',
      comedownFeel: 'Easy, restful taper into sleep.',
    },
  },
  hhc: {
    physicalFormLabel: 'Golden-Amber HHC Cart & Jar',
    physicalAppearance:
      'Golden-to-dark amber hydrogenated distillate in CCELL cartridges and concentrate jars.',
    recreationalFeel:
      'Feels like a slightly more clear-headed, hybrid version of Δ9-THC (~75% potency). It produces a warm, uplifting head buzz, sociable mood, and relaxing body comfort without getting too foggy or overwhelming.',
    subjectiveTags: [
      'Hybrid-Like Euphoria & Clarity',
      'Warm Relaxing Body Buzz',
      'Sociable & Easygoing Headspace',
      'Slightly Less Foggy Than Δ9-THC',
    ],
    phases: {
      onsetFeel: 'Smooth 5-minute build of head and facial warmth.',
      peakFeel: 'Balanced hybrid euphoria, music appreciation, and physical ease.',
      comedownFeel: 'Gentle 3-hour fade.',
    },
  },
  'delta9-thcp': {
    physicalFormLabel: 'Ruby-Amber Δ9-THC-P Concentrate',
    physicalAppearance:
      'Deep amber-ruby heptyl cannabinoid distillate in micro-dosed cartridges and potent edibles.',
    recreationalFeel:
      'Extremely potent (~8–10x Δ9-THC in practice). Even a tiny dose produces a soaring, almost psychedelic cannabis peak with intense euphoria, heavy sensory magnification, and a massive physical couch-lock that can last well into the next day.',
    subjectiveTags: [
      'Soaring High-Potency Euphoria',
      'Borderline Psychedelic Sensory Shift',
      'Heavy Full-Body Couch-Lock',
      '12–36 Hour Extended Duration',
    ],
    phases: {
      onsetFeel: 'Slow, creeping build over 20–45 minutes that keeps climbing.',
      peakFeel: 'Intense cerebral immersion, heavy eyelids, and deep somatic sedation.',
      comedownFeel: 'Multi-hour or next-day hazy afterglow.',
    },
  },
  hhcp: {
    physicalFormLabel: 'Viscous Dark-Amber HHC-P Jar',
    physicalAppearance:
      'Extremely thick, dark golden-amber distillate in concentrate jars and heavy vape blends.',
    recreationalFeel:
      'Delivers a slow-building, powerhouse stone that wraps the entire body in a heavy, warm blanket while launching a long, dreamy, euphoric headspace. Because of its saturated ring and 7-carbon tail, the peak lasts for hours and transitions into deep, prolonged sedation.',
    subjectiveTags: [
      'Ultra-Heavy Somatic Blanket',
      'Long-Lasting Euphoric Peak',
      'Profound Time Dilation',
      'Multi-Hour Sedative Tail',
    ],
    phases: {
      onsetFeel: 'Gradual 20–40 minute climb into deep physical heaviness.',
      peakFeel: 'Powerful, narcotic-like cannabinoid euphoria and couch-lock.',
      comedownFeel: 'Very long, sleepy 16–36 hour recovery.',
    },
  },
  'thc-h': {
    physicalFormLabel: 'Golden-Orange Δ9-THC-H Cart',
    physicalAppearance:
      'Golden-orange 6-carbon hexyl distillate in vape cartridges and edibles.',
    recreationalFeel:
      'Known for an exceptionally euphoric, giggly, and mood-brightening high (~4x Δ9-THC). Users describe a warm, floating physical sensation paired with a colourful, immersive headspace that lasts roughly twice as long as standard THC.',
    subjectiveTags: [
      'Intensely Giggly & Euphoric',
      'Warm Floating Body High',
      'Long 6–10 Hour Duration',
      'Rich Sensory & Music Immersion',
    ],
    phases: {
      onsetFeel: 'Warm, rising wave of euphoria over 10–15 minutes.',
      peakFeel: 'Buoyant, floating body stone and vibrant cerebral uplift.',
      comedownFeel: 'Long, cozy evening taper.',
    },
  },
  'thc-b': {
    physicalFormLabel: 'Light-Gold Δ9-THC-B Vape Cart',
    physicalAppearance:
      'Crisp light-gold 4-carbon butyl distillate in vape cartridges and resin blends.',
    recreationalFeel:
      'Hits fast and hard with a bright, cerebral "headband" rush around the temples and forehead. Feels slightly stronger than Δ9-THC at the peak, but clears out faster and leaves less heavy couch-lock behind.',
    subjectiveTags: [
      'Fast "Headband" Temple Rush',
      'Punchy Cerebral Euphoria',
      'Brisk 2-Hour Peak',
      'Clean Finish Without Lethargy',
    ],
    phases: {
      onsetFeel: 'Immediate 2–5 minute rush behind the eyes and forehead.',
      peakFeel: 'Crisp, energetic euphoria and heightened sensory focus.',
      comedownFeel: 'Quick, clean return to baseline.',
    },
  },
  'thco-acetate': {
    physicalFormLabel: 'Pale Ester Oil (Oral Only)',
    physicalAppearance:
      'Thin, nearly water-clear to pale yellow liquid ester oil in oral tincture bottles and edibles.',
    recreationalFeel:
      'Famous for its "creeping" 30-minute delayed onset followed by an intensely immersive, almost psychedelic cannabis experience (~2x Δ9-THC). Produces vivid closed-eye visuals, deep introspection, and a floating, weightless body buzz. (Oral use only—never vape due to ketene gas formation).',
    subjectiveTags: [
      'Delayed 30-Min "Creeping" Onset',
      'Introspective & Visually Trippy',
      'Floating Weightless Body High',
      'Oral Only (Never Vape/Heat)',
    ],
    phases: {
      onsetFeel: 'Little effect for 25–45 minutes, then a sudden, surging wave.',
      peakFeel: 'Deeply immersive, dreamy, borderline-psychedelic euphoria.',
      comedownFeel: 'Long, heavy 6–10 hour taper.',
    },
  },
  'hhco-acetate': {
    physicalFormLabel: 'Pale Honey HHC-O Oral Oil',
    physicalAppearance:
      'Low-viscosity pale honey ester oil in oral dropper vials and softgel capsules.',
    recreationalFeel:
      'Takes 25–40 minutes to kick in as your liver cleaves the acetate group, then unfolds into a long, plush, full-body stone and warm, dreamy euphoria that feels ~1.5x stronger and longer than regular HHC. (Oral use only).',
    subjectiveTags: [
      'Delayed Prodrug Wave',
      'Plush Full-Body Relaxation',
      'Long-Lasting Dreamy Headspace',
      'Oral Only (No Vaping)',
    ],
    phases: {
      onsetFeel: 'Slow 30-minute prodrug conversion before a warm surge.',
      peakFeel: 'Deep, cushioned body stone and relaxed euphoria.',
      comedownFeel: 'Extended, sleepy evening fade.',
    },
  },

  // ======================== SYNTHETIC AGONISTS ========================
  'jwh-018': {
    physicalFormLabel: 'White Indole Powder & Foil Blend',
    physicalAppearance:
      'Fine white-to-off-white crystalline powder in lab vials, historically sprayed onto dried plant matter in foil sachets ("Spice / K2").',
    recreationalFeel:
      'Unlike natural cannabis (which is a partial agonist with a built-in safety ceiling), JWH-018 is a full CB1 agonist. At tiny doses it produces an abrupt, intense, disorienting rush of euphoria and sensory distortion; however, even slightly higher doses frequently feel overwhelming—triggering racing heart, tunnel vision, dissociation, and intense panic.',
    subjectiveTags: [
      'Abrupt, Intense Full-Agonist Rush',
      'No Natural Safety Ceiling',
      'High Risk of Panic & Racing Heart',
      'Intense Dissociation at High Doses',
    ],
    phases: {
      onsetFeel: 'Immediate, jarring 1–3 minute cerebral slam.',
      peakFeel: 'Overwhelming CB1 saturation, time distortion, and intense autonomic rush.',
      comedownFeel: 'Steep drop leaving exhaustion and mental fog.',
    },
  },
  'mdmb-4en-pinaca': {
    physicalFormLabel: 'Microgram Indazole Standard',
    physicalAppearance:
      'Crystalline white/yellowish indazole powder active at microgram doses, or clear adulterated black-market vape liquid.',
    recreationalFeel:
      'Does NOT feel like natural weed. Because it is a super-agonist (>250% efficacy at CB1), it slams into the brain within 60 seconds with overwhelming sedation, severe confusion, motor disconnection, and either frantic delirium or rapid loss of consciousness ("zombie-like" stupor).',
    subjectiveTags: [
      'Extreme Microgram Super-Agonist',
      'Instant Disorienting Slam',
      'Heavy Stupor & Delirium Risk',
      'Common Counterfeit Vape Adulterant',
    ],
    phases: {
      onsetFeel: 'Instantaneous, overpowering rush within 30–90 seconds.',
      peakFeel: 'Profound disorientation, heavy stupor, and severe cardiovascular/CNS strain.',
      comedownFeel: 'Abrupt crash with lingering confusion and headache.',
    },
  },

  // ======================== BENZODIAZEPINES ========================
  alprazolam: {
    physicalFormLabel: '2mg Scored Bar & 1mg Blue Oval',
    physicalAppearance:
      'Recognizable white, yellow, or green 4-part scored rectangular 2 mg bars ("Xanax bars") or pastel blue/peach oval 0.5–1 mg ("football") tablets.',
    recreationalFeel:
      'Produces a fast, heavy wave of "emotional silence" and profound relief from anxiety within 20–30 minutes. Recreationally, users describe feeling completely unbothered, loose-limbed, warm, and carefree—as if a heavy soundproof blanket was thrown over every worry. At higher doses, it causes slurred speech, wobbly coordination, lowered inhibitions, and "time-travel" blackouts (anterograde amnesia) where hours vanish from memory.',
    subjectiveTags: [
      'Rapid "Anxiety Eraser" Relief',
      'Loose-Limbed Physical Calm',
      'Unbothered Carefree Disinhibition',
      'High Risk of Memory Blackouts',
    ],
    phases: {
      onsetFeel: 'Fast 15–25 minute wave that melts chest tightness and racing thoughts.',
      peakFeel: 'Heavy, carefree tranquility, physical looseness, and sleepy sedation.',
      comedownFeel: 'Deep sleep or abrupt rebound anxiety if used repeatedly.',
    },
  },
  diazepam: {
    physicalFormLabel: 'Sky-Blue 10mg & Yellow 5mg Tablets',
    physicalAppearance:
      'Classic round sky-blue 10 mg tablets or pale yellow 5 mg scored tablets (Valium), sometimes with a signature V-cut or score line.',
    recreationalFeel:
      'Often considered the warmest and most physically relaxing of the classic benzodiazepines. Compared to Xanax’s sharp cognitive knockout, Diazepam feels like sinking into a warm hot tub: deep skeletal muscle melt, a floaty, cozy sense of physical comfort, gentle mood warmth, and a long, unhurried calm that lingers into the next day.',
    subjectiveTags: [
      'Deep "Hot-Tub" Muscle Melt',
      'Warm, Floaty Physical Comfort',
      'Smooth Long-Lasting Calm',
      'Next-Day Mellow Afterglow',
    ],
    phases: {
      onsetFeel: 'Quick 20-minute wave of physical warmth and shoulder relaxation.',
      peakFeel: 'Plush full-body muscle looseness, serene mood, and gentle drowsiness.',
      comedownFeel: 'Very long, gradual 12–24+ hour fade via active metabolites.',
    },
  },
  clonazepam: {
    physicalFormLabel: 'Mint-Green 1mg & White 2mg Scored',
    physicalAppearance:
      'Round mint-green, blue, or orange scored tablets (Klonopin) or white cross-scored 2 mg tablets (Rivotril) with a faintly sweet minty taste.',
    recreationalFeel:
      'Unfolds slowly and smoothly without a sudden "hit." Recreationally it feels like a steady, all-day invisible shield against stress and physical tension: muscles feel relaxed, social anxiety disappears, and mood feels cool and level-headed for 8–12 hours, with less immediate grogginess than Xanax at low doses.',
    subjectiveTags: [
      'Smooth, Gradual All-Day Calm',
      'Cool Social Confidence & Ease',
      'Physical & Jaw Tension Relief',
      'Long 8–12 Hour Steady Plateau',
    ],
    phases: {
      onsetFeel: 'Slow, subtle 30–60 minute easing of background tension.',
      peakFeel: 'Steady, unshakeable calm and physical relaxation without a sharp spike.',
      comedownFeel: 'Gradual, almost imperceptible multi-hour taper.',
    },
  },
  lorazepam: {
    physicalFormLabel: 'White Ativan Shield & Tavor Wafer',
    physicalAppearance:
      'Small white 5-sided shield or round scored tablets (Ativan) or fast-dissolving sublingual wafers (Tavor Expidet).',
    recreationalFeel:
      'Produces a clean, dreamy, intermediate-length sedation and mental quietude. Recreationally it feels slightly more hypnotic and dreamy than clonazepam—quieting overthinking, softening sensory overload, and wrapping the mind in a cozy, slightly hazy bubble for 6–8 hours.',
    subjectiveTags: [
      'Clean, Dreamy Mental Quietude',
      'Softens Sensory Overload & Panic',
      'Cozy Hypnotic Relaxation',
      'Predictable 6–8 Hour Duration',
    ],
    phases: {
      onsetFeel: 'Smooth 20–30 minute sublingual/oral wave of mental quiet.',
      peakFeel: 'Dreamy, peaceful detachment from stress and gentle body heaviness.',
      comedownFeel: 'Clean transition into sleep with minimal next-day buildup.',
    },
  },
  midazolam: {
    physicalFormLabel: 'Dormicum 7.5/15mg & Clear Ampoule',
    physicalAppearance:
      'Recognizable blue-grey oblong scored 7.5 mg or white 15 mg tablets (Dormicum), or clear sterile glass ampoules for clinical sedation (Versed).',
    recreationalFeel:
      'Known as the most rapidly intoxicating and amnesic pharmaceutical benzodiazepine. Hits with the suddenness of an elevator drop—within 10–15 minutes, an overwhelming wave of hypnotic sedation and physical heaviness washes over the body. All stress instantly dissolves into a dizzy, giggly carelessness, quickly followed by total anterograde amnesia where users can remain awake and talking yet remember absolutely nothing the next morning.',
    subjectiveTags: [
      'Rapid-Fire Hypnotic Sedation',
      'Instant Emotional Silence & Carelessness',
      'Heavy Motor Coordination Drop',
      'Extreme "Time-Slip" Anterograde Amnesia',
    ],
    phases: {
      onsetFeel: 'Sudden 10–15 minute wave of heaviness, wobbly feet, and dropping eyelids.',
      peakFeel: 'Profound sedation, slurred speech, disinhibition, and rapid memory blackout.',
      comedownFeel: 'Quick 2–3 hour clearance leaving minimal morning hangover compared to long-acting benzos.',
    },
  },

  // ======================== OPIOIDS & OPIATES ========================
  oxycodone: {
    physicalFormLabel: 'Blue M30 Scored & Green OC80 Tablets',
    physicalAppearance:
      'Small round pale-blue 30 mg scored immediate-release tablets ("M30") or round film-coated green (80 mg), yellow (40 mg), or pink (10 mg) tablets.',
    recreationalFeel:
      'Unlike morphine’s heavy, sluggish sedation, Oxycodone is famous for a bright, energetic, "upbeat" opioid euphoria at low-to-moderate doses. It starts with a warm golden wave spreading from the stomach through the chest and limbs, erasing all physical pain and emotional worry while making tasks and conversation feel effortless. At higher doses, it transitions into heavy, blissful "nodding" (drifting in and out of vivid waking dreams) accompanied by an itchy nose and pinpoint pupils.',
    subjectiveTags: [
      'Warm "Golden Blanket" Euphoria',
      'Upbeat, Motivating Initial Rush',
      'Complete Pain & Worry Erasure',
      'Dreamy "Nodding" & Histamine Itch',
    ],
    phases: {
      onsetFeel: 'Warm, glowing flush rising from the abdomen into the chest and face.',
      peakFeel: 'Intense euphoria, emotional invulnerability, and dreamy half-awake "nods" at high doses.',
      comedownFeel: 'Gradual fade into heavy drowsiness or mild irritability.',
    },
  },
  oxymorphone: {
    physicalFormLabel: 'Octagonal Stop-Sign & Coral Tablets',
    physicalAppearance:
      'Iconic octagonal ("stop-sign") or round film-coated tablets in coral-orange (40 mg G74) or pink (10 mg Opana).',
    recreationalFeel:
      'Widely regarded as one of the most intensely euphoric and deeply sedating prescription morphinan opioids. Recreationally it delivers a profound, heavy, velvety wave of warmth and full-body bliss—combining the bright rush of oxycodone with the heavy, dreamy, narcotic "nod" of hydromorphone.',
    subjectiveTags: [
      'Intense Velvety Full-Body Bliss',
      'Profound Heavy Opioid "Nod"',
      'Deep Physical & Emotional Warmth',
      'Extreme Potency & Overdose Risk',
    ],
    phases: {
      onsetFeel: 'Powerful, enveloping rush of warmth and muscle relaxation.',
      peakFeel: 'Deep, hypnotic euphoria, heavy eyelids, and intense dream-like nodding.',
      comedownFeel: 'Prolonged, heavy sedation and nausea risk in non-tolerant users.',
    },
  },
  hydromorphone: {
    physicalFormLabel: 'Dilaudid 8 Triangle Shield & Yellow 4mg',
    physicalAppearance:
      'Recognizable white rounded-triangle 8 mg shield tablets ("D | 8"), round yellow 4 mg tablets, or sterile hospital ampoules.',
    recreationalFeel:
      'Known for an exceptionally fast, powerful, "pins-and-needles" warm rush followed by deep, dreamy tranquility. Compared to oxycodone, hydromorphone is more physically sedating and rush-oriented—delivering an intense wave of chest-and-limb warmth that quickly melts into a shorter, heavy 3–4 hour nod.',
    subjectiveTags: [
      'Intense Fast-Onset Warm Rush',
      'Heavy Physical Melt & Sedation',
      'Dreamy Waking-Sleep "Nod"',
      'Shorter 3–4 Hour Duration',
    ],
    phases: {
      onsetFeel: 'Rapid, intense wave of warmth and heavy relaxation.',
      peakFeel: 'Deep, floating euphoria and heavy physical stillness.',
      comedownFeel: 'Relatively brisk 3–4 hour taper.',
    },
  },
  hydrocodone: {
    physicalFormLabel: 'Oblong White/Speckled Norco & Yellow Oval',
    physicalAppearance:
      'Capsule-shaped oblong white tablets (often with pink/red speckles) or yellow oval scored tablets (Vicodin / Norco 5–10 mg with 325 mg acetaminophen).',
    recreationalFeel:
      'Produces a classic, warm, cozy "couch-blanket" euphoria that feels slightly mellower and dreamier than oxycodone. Users feel a soothing wave of physical comfort, lifted mood, talkative friendliness at low doses, and a fuzzy, contented detachment from stress or aches.',
    subjectiveTags: [
      'Cozy, Fuzzy "Warm Blanket" High',
      'Friendly, Content Mood Lift',
      'Soothing Full-Body Pain Relief',
      'Warm Itchy Nose & Drowsiness',
    ],
    phases: {
      onsetFeel: '25-minute warming glow in the stomach and shoulders.',
      peakFeel: 'Fuzzy, contented euphoria, physical comfort, and cozy relaxation.',
      comedownFeel: 'Sleepy, mellow wind-down over 4–6 hours.',
    },
  },
  fentanyl: {
    physicalFormLabel: 'Transdermal Patch & Citrate Ampoule',
    physicalAppearance:
      'Translucent adhesive transdermal matrix patches (12–100 mcg/h), hospital citrate glass ampoules, or (illicitly) counterfeit pressed pills.',
    recreationalFeel:
      'Unlike natural opiates (morphine/oxycodone) which produce a warm, soulful, long-lasting euphoria, fentanyl feels predominantly like a cold, heavy, overwhelming anesthetic knockdown. It hits rapidly with intense physical numbness, heavy chest sedation, and an abrupt transition into deep nodding or unconsciousness, followed by a short duration that quickly triggers cravings.',
    subjectiveTags: [
      'Heavy Anesthetic Sedation Knockdown',
      'Less "Warm/Soulful" Than Morphine/Oxy',
      'Short Duration & Rapid Craving',
      'Extreme Instant Overdose / Apnea Risk',
    ],
    phases: {
      onsetFeel: 'Immediate, heavy wave of numbness and dizzying sedation.',
      peakFeel: 'Profound stupor, heavy nodding, and severe respiratory slowing.',
      comedownFeel: 'Fast 1–2 hour drop leaving coldness and rapid rebound craving.',
    },
  },
  methadone: {
    physicalFormLabel: 'Cherry-Red Oral Liquid & 40mg Wafer',
    physicalAppearance:
      'Syrupy cherry-red or green oral clinic liquid (10 mg/mL) in graduated cups or large 40 mg 4-way scored dispersible orange/white diskettes.',
    recreationalFeel:
      'Builds very slowly over 2–3 hours without a sharp initial rush, settling into an ultra-long, heavy, grounding body warmth and steady mood contentment that lasts an entire day. At higher doses, it produces a heavy, sluggish, leaden sedation that persists for 24–36 hours.',
    subjectiveTags: [
      'Slow-Building All-Day Body Warmth',
      'Heavy, Grounded Physical Sedation',
      'No Sharp Peak Rush',
      '24–36 Hour Extended Duration',
    ],
    phases: {
      onsetFeel: 'Slow, gradual 45–90 minute warming and physical calming.',
      peakFeel: 'Heavy, steady opioid comfort and somnolence lasting 6–12 hours.',
      comedownFeel: 'Extremely slow 24–36 hour elimination tail.',
    },
  },
  buprenorphine: {
    physicalFormLabel: 'Orange Hexagon Tablet & Blue Film Strip',
    physicalAppearance:
      'Orange hexagonal sublingual tablets (Subutex / Suboxone 8 mg) or small rectangular blue/orange sublingual dissolving film strips.',
    recreationalFeel:
      'Because it is a partial agonist, its feel depends heavily on opioid tolerance: in opioid-naive users, even 1–2 mg produces a very long (24+ hour), slightly energetic opioid warmth, heavy nodding, and frequent nausea; in opioid-tolerant users, it produces a clear-headed "normalcy" and mild mood lift with a strict ceiling on euphoria.',
    subjectiveTags: [
      'Ceiling on Peak Euphoria',
      'Long 24-Hour Steady Warmth',
      'Strong Nausea in Non-Tolerant Users',
      'Precipitates Withdrawal if Dependent',
    ],
    phases: {
      onsetFeel: 'Slow 30–60 minute sublingual build.',
      peakFeel: 'Long, level plateau of warmth and analgesia (heavy sedation if opioid-naive).',
      comedownFeel: 'Multi-day gradual fade.',
    },
  },
  morphine: {
    physicalFormLabel: 'Purple MS 30 Tablet & Sulfate Vial',
    physicalAppearance:
      'Round purple (30 mg), blue (15 mg), or orange (60 mg) extended-release tablets (MS Contin), oral solution, or glass injection vials.',
    recreationalFeel:
      'The archetypal "dreamy opium" experience: deeply somatic, heavy, and sedating. It begins with a warm, prickly histamine flush across the skin and face, melting into a profound, floating physical heaviness where limbs feel weightless, pain and anxiety dissolve completely, and the mind drifts into vivid, peaceful hypnagogic daydreams ("pipedreams").',
    subjectiveTags: [
      'Classic Dreamy "Pipedream" Nod',
      'Heavy, Floating Body Sedation',
      'Warm Prickly Histamine Flush',
      'Complete Emotional & Physical Peace',
    ],
    phases: {
      onsetFeel: 'Warm, flushing histamine tingle across the skin and deep stomach warmth.',
      peakFeel: 'Profound physical heaviness, emotional serenity, and vivid closed-eye daydreams.',
      comedownFeel: 'Long, drowsy afterglow with heavy eyelids and dry mouth.',
    },
  },
  codeine: {
    physicalFormLabel: 'White Tylenol #3 & Purple Syrup',
    physicalAppearance:
      'Round white scored tablets (30 mg) or thick violet/magenta promethazine-codeine oral syrup ("Lean / Purple Drank").',
    recreationalFeel:
      'As a gentler morphine prodrug, codeine produces a soft, syrupy, slow-motion body warmth and dreamy relaxation. Users describe feeling like they are moving underwater in warm honey—limbs feel heavy and relaxed, music sounds slowed and atmospheric, and mood is peaceful and floaty, accompanied by a characteristic itchy warmth.',
    subjectiveTags: [
      'Soft, Syrupy Slow-Motion Calm',
      'Warm Underwater Body Float',
      'Mellow Morphine-Like Dreaminess',
      'Strong Histamine Itch at High Doses',
    ],
    phases: {
      onsetFeel: '30–45 minute hepatic conversion into a warm, itchy body glow.',
      peakFeel: 'Mellow, dreamy euphoria and cozy couch-bound relaxation.',
      comedownFeel: 'Sleepy, relaxed 4-hour fade.',
    },
  },
  dihydrocodeine: {
    physicalFormLabel: 'White Paracodin Tablet & Oral Drops',
    physicalAppearance:
      'Small white scored tablets (30 mg or 60/90/120 mg DHC Contin extended-release) or clear viscous oral solution / drops (Paracodin).',
    recreationalFeel:
      'Offers a richer, warmer, and more reliably euphoric opioid experience than codeine. Users describe feeling wrapped in a soft, heated wool sweater: a cozy golden glow spreads through the stomach and limbs, aches and stress evaporate, and breathing slows into a blissful calm. Unlike codeine, it produces significantly less uncomfortable histamine itching while delivering a deeper, more comforting "nod" at higher doses.',
    subjectiveTags: [
      'Warm Heated-Sweater Euphoria',
      'Deeper Body Melt than Codeine',
      'Significantly Less Histamine Itch',
      'Dreamy Calming Twilight Nods',
    ],
    phases: {
      onsetFeel: '20–30 minute warm flush beginning in the abdomen and relaxing neck muscles.',
      peakFeel: 'Deep euphoric contentment, peaceful waking dreams, and relaxed heavy limbs.',
      comedownFeel: 'Gentle, soothing taper over 4–5 hours into restful sleep.',
    },
  },
  tramadol: {
    physicalFormLabel: 'Green/Yellow Capsule & White Oblong',
    physicalAppearance:
      'Classic two-tone green-and-yellow 50 mg hard gelatin capsules (Tramal) or white oblong scored tablets (Ultram).',
    recreationalFeel:
      'Uniquely blends a mild antidepressant-like mood lift (from its SNRI activity) with a delayed, cozy opioid body warmth (as your liver converts it into O-DSMT). The first 1–2 hours feel surprisingly upbeat, talkative, and lightly energizing, which then transitions into a warm, dreamy, 6-hour opioid relaxation.',
    subjectiveTags: [
      'Upbeat SNRI Mood Lift First',
      'Delayed Warm O-DSMT Opioid Glow',
      'Talkative & Lightly Energizing',
      'Long 6–8 Hour Cozy Tail',
    ],
    phases: {
      onsetFeel: '45-minute serotonergic/noradrenergic mood brightness and energy.',
      peakFeel: 'Warm O-DSMT opioid comfort blended with upbeat, sociable contentment.',
      comedownFeel: 'Long, dreamy evening taper (avoid high doses due to seizure risk).',
    },
  },
  tapentadol: {
    physicalFormLabel: 'Coral-Orange & Yellow Palexia Tablets',
    physicalAppearance:
      'Round or oblong film-coated tablets in warm yellow (50 mg), coral-orange (75–100 mg), or brick-red (Nucynta / Palexia).',
    recreationalFeel:
      'Feels faster, heavier, and more distinctly opioid-like than tramadol because it doesn’t wait for CYP2D6 liver conversion. It produces a warm, comforting μ-opioid body blanket paired with a crisp noradrenergic mental alertness, and at higher doses is uniquely known for vivid, dreamlike closed-eye hypnagogic visuals.',
    subjectiveTags: [
      'Fast Direct Warm Opioid Blanket',
      'Dreamlike Hypnagogic Closed-Eye Visuals',
      'Less Nausea & Itch Than Morphine',
      'Balanced Warmth & Alertness',
    ],
    phases: {
      onsetFeel: 'Crisp 25–35 minute wave of physical relief and warmth.',
      peakFeel: 'Cozy opioid euphoria with unusually vivid closed-eye daydreaming.',
      comedownFeel: 'Smooth 4–5 hour return to baseline.',
    },
  },
  tilidine: {
    physicalFormLabel: 'Valoron Dropper Bottle & Retard Tablet',
    physicalAppearance:
      'Clear oral solution in amber dropper bottles (Valoron N drops) or white oblong prolonged-release tablets (50/4 mg or 100/8 mg with naloxone).',
    recreationalFeel:
      'When taken orally (Especially as liquid drops), it converts rapidly into active nortilidine within 15–20 minutes, producing a remarkably bright, warm, sociable, and motivating euphoria before settling into a cozy, itch-prone physical relaxation.',
    subjectiveTags: [
      'Fast 15-Min Oral Onset (Drops)',
      'Bright, Sociable Euphoric Lift',
      'Warm Cozy Physical Relaxation',
      'Moderate Opioid Duration (4h)',
    ],
    phases: {
      onsetFeel: 'Fast first-pass conversion into a warm, upbeat chest and head glow.',
      peakFeel: 'Cheerful, talkative euphoria and warm muscle comfort.',
      comedownFeel: 'Mellow 3.5–5 hour fade into light drowsiness.',
    },
  },

  // ======================== GABAPENTINOIDS ========================
  pregabalin: {
    physicalFormLabel: 'Red & White Lyrica Capsule (PGN 300)',
    physicalAppearance:
      'Recognizable two-tone red-and-white or all-white hard gelatin capsules imprinted with Pfizer / PGN (75 mg, 150 mg, 300 mg Lyrica).',
    recreationalFeel:
      'Often described as a cross between a clean alcohol buzz, low-dose MDMA, and a benzodiazepine—without the sloppiness or depression of alcohol. Recreationally it takes 60–90 minutes to build into a buoyant, chatty, socially fearless euphoria with a floaty, "rubbery" body lightness, enhanced music appreciation, and subtle closed-eye color swirls at higher doses.',
    subjectiveTags: [
      'Buoyant "Alcohol + Light MDMA" Buzz',
      'Chatty, Zero-Anxiety Social Flow',
      'Floaty, Bouncy Physical Sensation',
      'Music Enhancement & Deep Sleep',
    ],
    phases: {
      onsetFeel: 'Slow 60–90 minute climb starting with light dizziness and a big grin.',
      peakFeel: 'Sociable, empathetic euphoria, rubbery/floaty limbs, and complete anxiety relief.',
      comedownFeel: 'Long 8-hour glow followed by unusually deep, restorative sleep.',
    },
  },
  gabapentin: {
    physicalFormLabel: 'Yellow 300mg Capsule & White 600mg Oval',
    physicalAppearance:
      'Bright yellow (300 mg), orange (400 mg), or white (100 mg) hard gelatin capsules or large white 600–800 mg scored oval tablets (Neurontin).',
    recreationalFeel:
      'A gentler, softer cousin to Pregabalin. Because intestinal absorption saturates at high single doses, recreational users often stagger 300 mg every 30 minutes, which gradually builds into a warm, floaty, talkative body buzz, physical looseness, and a calm, upbeat mood.',
    subjectiveTags: [
      'Warm, Floaty Body Looseness',
      'Calm, Talkative Social Mood',
      'Gradual Staggered-Dose Build',
      'Cozy Physical & Nerve Comfort',
    ],
    phases: {
      onsetFeel: 'Slow 90–120 minute build into a warm, slightly wobbly body calm.',
      peakFeel: 'Mellow, chatty contentment and relaxed physical floatiness.',
      comedownFeel: 'Gentle, sleepy evening wind-down.',
    },
  },

  // ======================== RX STIMULANTS ========================
  dextroamphetamine: {
    physicalFormLabel: 'Orange XR Bead Capsule & Blue Scored Pill',
    physicalAppearance:
      'Half-transparent orange extended-release capsules filled with tiny white/orange beads (Adderall XR) or round blue/orange 4-way scored tablets.',
    recreationalFeel:
      'Produces a clean, laser-focused wave of dopamine-driven confidence, motivation, and mental clarity. Recreationally, users feel a warm tingling scalp rush ("goosebumps"), effortless verbal fluency, deep absorption in tasks or music, and a buoyant sense of capability—with smoother physical stimulation than racemic speed because it lacks the jittery levo-isomer.',
    subjectiveTags: [
      'Laser-Sharp Focus & Drive',
      'Warm Dopamine Confidence & Scalp Tingle',
      'Effortless Conversation & Flow State',
      'Appetite Suppression & Wakefulness',
    ],
    phases: {
      onsetFeel: '30-minute wave of mental clearing, warm goosebumps, and rising energy.',
      peakFeel: 'High motivation, talkative confidence, and deep task/music immersion.',
      comedownFeel: 'Gradual fatigue, dry mouth, and quiet mental tiredness after 5–8 hours.',
    },
  },
  methylphenidate: {
    physicalFormLabel: 'Concerta OROS Cylinder & Ritalin 10 Tablet',
    physicalAppearance:
      'Small round pale-yellow/greenish scored 10 mg tablets (Ritalin) or cylindrical laser-drilled osmotic barrel tablets (Concerta alza 36).',
    recreationalFeel:
      'Feels crisper, more robotic/analytical, and more physically brisk than dextroamphetamine. Orally it gives a sharp 2–3 hour window of alert concentration and task drive; when insufflated, it produces a fast, punchy, cocaine-like dopaminergic rush lasting 45–90 minutes followed by a steeper comedown.',
    subjectiveTags: [
      'Crisp, Alert Analytical Focus',
      'Brisk Cocaine-Like Rush (Insufflated)',
      'Strong Task & Study Drive',
      'Shorter Duration & Sharper Comedown',
    ],
    phases: {
      onsetFeel: 'Fast 20-minute switch into crisp alertness and wakefulness.',
      peakFeel: 'Intense task engagement, mental speed, and physical energy.',
      comedownFeel: 'Noticeable drop in energy and mild irritability after 3–4 hours.',
    },
  },

  // ======================== ILLICIT SUBSTANCES ========================
  ketamine: {
    physicalFormLabel: 'Needle Crystal Shards & Sterile Vial',
    physicalAppearance:
      'Translucent needle-like crystalline shards ("ketamine shards"), fine white powder when crushed, or clear liquid in 50 mg/mL glass medical vials.',
    recreationalFeel:
      'Dose-dependent like almost no other substance. At low "bump" doses (15–35 mg), it feels like a wonky, floaty, psychedelic alcohol buzz where your body feels light/numb, gravity feels tilted, and music sounds 3D and cavernous. At moderate doses (50–80 mg), thoughts detach from the physical body in a dreamy, slow-motion cartoon world. At high doses (100–150+ mg), it induces the "K-Hole": complete ego and body dissolution where you feel like pure consciousness floating through vast geometric architectures and cosmic spaces, returning to baseline within 60–90 minutes.',
    subjectiveTags: [
      'Floaty "Wonky" Low-Gravity Body Feel',
      'Cavernous 3D Music Immersion',
      'Dreamlike Detachment from Body',
      'Full Out-of-Body "K-Hole" at High Doses',
    ],
    phases: {
      onsetFeel: '5-minute numbing tingle in the face and extremities as the room begins to tilt.',
      peakFeel: 'Profound sensory disconnection, weightless floating, and vivid internal landscapes.',
      comedownFeel: 'Rapid 45–60 minute re-entry with a calm, antidepressant afterglow.',
    },
  },
  mdma: {
    physicalFormLabel: 'Champagne Crystal Rocks & Ecstasy Press',
    physicalAppearance:
      'Translucent champagne, tan, or quartz-like crystalline rocks ("Molly") or brightly colored, intricately embossed pressed tablets ("Ecstasy").',
    recreationalFeel:
      'The gold-standard empathogen ("rolling"). After a 30–45 minute come-up (often with butterflies in the stomach and a sudden deep exhale), a massive, breathtaking wave of pure warmth, safety, and unconditional love washes over the body. Every insecurity and social barrier vanishes; deep, honest conversations flow effortlessly; skin touch feels electric and velvety; and music becomes a full-body emotional experience, accompanied by dilated pupils and jaw clenching.',
    subjectiveTags: [
      'Overwhelming Emotional Warmth & Empathy',
      'Electric Tactile & Music Enhancement',
      'Complete Dissolution of Fear/Insecurity',
      'Jaw Clenching & Dilated Pupils',
    ],
    phases: {
      onsetFeel: 'Warm stomach butterflies and tingling palms before a sudden, euphoric exhale.',
      peakFeel: '3–4 hours of radiant love, emotional openness, tactile bliss, and music euphoria.',
      comedownFeel: 'Gentle tired glow (can cause a flat "Tuesday blues" dip if over-dosed).',
    },
  },
  cocaine: {
    physicalFormLabel: 'Pearlescent Fishscale Flakes & Powder',
    physicalAppearance:
      'Iridescent, pearlescent flaky white crystalline blocks ("fishscale") that crush into a soft, slightly oily white hydrochloride powder.',
    recreationalFeel:
      'Within 2–5 minutes of insufflation, it delivers a crisp, surging wave of supreme confidence, mental sharpness, and talkative euphoria—accompanied by a signature numbing of the front teeth, gums, and back of the throat. You feel witty, charismatic, energized, and on top of the world for 30–45 minutes, before the effect drops off rapidly and triggers a strong urge to take another line.',
    subjectiveTags: [
      'Surging Charismatic Confidence & Rush',
      'Signature Gum & Throat Numbing',
      'Hyper-Talkative Social Energy',
      'Short 40-Min Peak & Strong Redose Urge',
    ],
    phases: {
      onsetFeel: '2–4 minute local anesthetic numbness and an immediate surge of alertness.',
      peakFeel: '30–45 minutes of high-octane confidence, euphoria, and rapid conversation.',
      comedownFeel: 'Steep drop after 60 minutes with restlessness and strong craving to redose.',
    },
  },
  'amphetamine-racemic': {
    physicalFormLabel: 'Matte White Sulfate Powder & Capsule',
    physicalAppearance:
      'Matte white, off-white, or faintly pinkish crystalline sulfate powder or damp European "speed paste."',
    recreationalFeel:
      'Clean, utilitarian, high-endurance stimulation. Compared to cocaine’s short, flashy ego rush, racemic amphetamine feels like strapping a rocket engine to your stamina for 6–8 hours: total elimination of fatigue, brisk physical energy for dancing or working, rapid-fire conversation, and sharp alertness with a stronger physical heart-rate boost than pure dextroamphetamine.',
    subjectiveTags: [
      '6–8 Hours of High-Octane Stamina',
      'Complete Erasure of Fatigue & Sleepiness',
      'Fast, Energetic Social & Dance Drive',
      'Strong Physical Adrenaline Boost',
    ],
    phases: {
      onsetFeel: 'Fast wakefulness, goosebumps, and a surge of physical readiness.',
      peakFeel: 'Sustained, tireless energy, talkative focus, and elevated heart rate.',
      comedownFeel: 'Long, wired tail that can prevent sleep for 8–12 hours after the last dose.',
    },
  },
  '2cb': {
    physicalFormLabel: 'Neon Embossed Tablet & White HBr Capsule',
    physicalAppearance:
      'Small neon-pink/purple/yellow embossed tablets (12–22 mg) or fine white crystalline HBr/HCl powder in measured capsules.',
    recreationalFeel:
      'Often described as the lovechild of LSD and MDMA—but with a much lighter, more controllable headspace. At low doses (8–14 mg) it feels warm, sensual, tactile, and giggly like an empathogen; at 16–24 mg it blossoms into vibrant neon geometric visuals, breathing surfaces, and synesthesia while keeping your ego and thoughts surprisingly clear, playful, and grounded.',
    subjectiveTags: [
      'Vivid Neon Visuals & Breathing Surfaces',
      'Clear, Playful & Manageable Headspace',
      'Heightened Tactile & Sensual Warmth',
      'Endless Laughing Fits & Music Depth',
    ],
    phases: {
      onsetFeel: '45-minute come-up with mild stomach butterflies/chills before colors brighten.',
      peakFeel: '2.5–3.5 hours of glowing neon visuals, tactile euphoria, and infectious laughter.',
      comedownFeel: 'Remarkably clean 4–5 hour finish with zero hangover and easy sleep.',
    },
  },
  psilocybin: {
    physicalFormLabel: 'Dried Golden-Cap Mushrooms (Blue Bruising)',
    physicalAppearance:
      'Dried golden-brown capped Psilocybe cubensis mushrooms with fibrous ivory stems showing characteristic indigo-blue bruising.',
    recreationalFeel:
      'Feels ancient, organic, emotional, and deeply connected to nature. Recreationally it comes in waves: starting with yawning, watery eyes, and a warm body buzz, then opening into breathing organic patterns, vivid saturated colors, uncontrollable childlike laughter, deep emotional catharsis, and a profound sense of wonder and interconnectedness with the world.',
    subjectiveTags: [
      'Organic Breathing Visuals & Color Depth',
      'Childlike Wonder & Deep Laughing Fits',
      'Emotional Catharsis & Nature Connection',
      'Wave-Like 4–6 Hour Journey',
    ],
    phases: {
      onsetFeel: '25–45 minute build with frequent yawning, body heaviness, and brightening colors.',
      peakFeel: '2–3 hours of flowing organic visuals, deep emotional insight, and timeless wonder.',
      comedownFeel: 'Peaceful, grounded "mental reset" afterglow with zero toxicity.',
    },
  },
  'lsd-25': {
    physicalFormLabel: 'Perforated Geometric Blotter Art Tabs',
    physicalAppearance:
      'Tiny 6×6 mm perforated absorbent paper squares ("blotter tabs") printed with colorful artwork, microdots, or clear liquid drops.',
    recreationalFeel:
      'Electric, cosmic, and kaleidoscopic. Compared to mushrooms’ earthy, inward warmth, LSD feels brighter, more energetic, and more "steerable": an 8–12 hour journey of intricate fractal geometry, color-shifting tracers, synesthesia (seeing music), profound philosophical and creative breakthroughs, and a tingling, high-voltage energy running through the body.',
    subjectiveTags: [
      'Intricate Kaleidoscopic Fractal Visuals',
      'Electric, Stimulating 10-Hour Journey',
      'Deep Music Synesthesia & Creativity',
      'Profound Cosmic & Philosophical Insight',
    ],
    phases: {
      onsetFeel: '30–60 minute build of electric body tingles, smiling, and sharpening visual edges.',
      peakFeel: '4–5 hours of full-spectrum fractal visuals, time dilation, and ego expansion.',
      comedownFeel: 'Long, reflective 4–5 hour glide back to earth with vivid after-imagery.',
    },
  },
};

export function getRecreationalProfile(
  compound: CannabinoidProfile
): RecreationalSubstanceProfile {
  const modMatch = compound.id.match(
    /^(.+)-mod-(9h|9-oh|9oh|10-oh|10oh|8-oh|8oh|11-oh|11oh|oac|o-acetate)$/
  );
  const baseId = modMatch ? modMatch[1] : compound.id;
  const modType = modMatch ? modMatch[2] : null;

  const baseProfile = BASE_RECREATIONAL_PROFILES[baseId] || {
    physicalFormLabel: isCannabinoidSubstance(compound)
      ? 'Golden Cannabinoid Distillate'
      : 'Reference Standard',
    physicalAppearance: `${compound.name} analytical reference specimen.`,
    recreationalFeel: compound.summary,
    subjectiveTags: [
      compound.cb1Efficacy.split('(')[0].trim(),
      `Half-Life ~${compound.terminalHalfLifeHours}h`,
    ],
    phases: {
      onsetFeel: `Onset within ${compound.oralOnsetMinutes[0]}–${compound.oralOnsetMinutes[1]} minutes orally.`,
      peakFeel: `Sustained peak activity across ${compound.oralDurationHours[0]}–${compound.oralDurationHours[1]} hours.`,
      comedownFeel: `Gradual elimination with a ~${compound.terminalHalfLifeHours}h terminal half-life.`,
    },
  };

  if (!modType || !isCannabinoidSubstance(compound)) {
    return baseProfile;
  }

  // Dynamically tailor the recreational feel for 9H-, 9-OH-, 10-OH-, 8-OH-, 11-OH-, and -O-Acetate variants
  if (modType === '9h') {
    return {
      ...baseProfile,
      physicalFormLabel: `Purified (9R) ${compound.shortName} Distillate`,
      recreationalFeel: `${baseProfile.recreationalFeel} As the stereoselectively purified 9H- ((9R)-isomer) form, it feels ~30% stronger, deeper, and more physically sedating per milligram than standard racemic batches.`,
      subjectiveTags: [
        'Purified (9R) +30% Stronger Peak',
        ...baseProfile.subjectiveTags.slice(0, 3),
      ],
    };
  }

  if (modType === '9-oh' || modType === '9oh') {
    return {
      ...baseProfile,
      physicalFormLabel: `Golden ${compound.shortName} Isolate & Cart`,
      recreationalFeel: `As the C9-hydroxylated (${compound.shortName}) variant, it delivers a smoother, faster-acting, and more forgiving version of ${baseProfile.recreationalFeel.charAt(0).toLowerCase() + baseProfile.recreationalFeel.slice(1)} Because your liver clears the -OH group ~40% faster, it wraps up cleanly with minimal next-day fog.`,
      subjectiveTags: [
        'Faster Onset & 40% Shorter Tail',
        ...baseProfile.subjectiveTags.slice(0, 3),
      ],
    };
  }

  if (modType === '10-oh' || modType === '10oh') {
    return {
      ...baseProfile,
      physicalFormLabel: `Crystalline ${compound.shortName} Vape & Wax`,
      recreationalFeel: `As the C10-hydroxylated (${compound.shortName}) derivative, it crosses the blood-brain barrier rapidly when vaped—producing a crisp, fast-hitting head rush within 2–7 minutes, ~70% of parent potency, and a clean, hangover-free finish.`,
      subjectiveTags: [
        'Rapid 2–7 Min Inhaled Rush',
        'Clean Hangover-Free Comedown',
        ...baseProfile.subjectiveTags.slice(0, 2),
      ],
    };
  }

  if (modType === '11-oh' || modType === '11oh') {
    return {
      ...baseProfile,
      physicalFormLabel: `Active ${compound.shortName} Edible Metabolite`,
      recreationalFeel: `As the active C11-hydroxy hepatic metabolite (${compound.shortName}), it penetrates the brain faster and hits ~1.65x harder than the parent cannabinoid—producing a heavy, deeply immersive, "edible-strength" full-body stone and vivid closed-eye dreaminess.`,
      subjectiveTags: [
        '1.65× Stronger "Edible-Style" Peak',
        'Deep Full-Body Immersion',
        ...baseProfile.subjectiveTags.slice(0, 2),
      ],
    };
  }

  if (modType === 'oac' || modType === 'o-acetate') {
    return {
      ...baseProfile,
      physicalFormLabel: `${compound.shortName} Ester Oil (Oral Only)`,
      recreationalFeel: `As the O-acetate ester prodrug (${compound.shortName}), it exhibits a 20–35 minute delayed "creeping" onset followed by a surging, borderline-psychedelic peak ~1.75x stronger and longer-lasting than the unmodified compound. (Oral use only—never vape).`,
      subjectiveTags: [
        'Delayed 30-Min Creeping Surge',
        '1.75× Stronger Prodrug Peak',
        'Oral Only (Do Not Vape)',
        baseProfile.subjectiveTags[0],
      ],
    };
  }

  return baseProfile;
}
