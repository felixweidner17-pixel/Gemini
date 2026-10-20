export interface DoseLogEntryLike {
  id: string;
  cannabinoidId: string;
  doseMg: number;
  timestampIso: string;
  route?: string;
}

export interface SubstanceDaySummary {
  id: string;
  name: string;
  totalMg: number;
  count: number;
}

export interface DailyConsumptionBucket {
  dateKey: string;
  dayLabel: string;
  fullDateLabel: string;
  sessions: number;
  totalMg: number;
  uniqueSubstancesCount: number;
  substances: SubstanceDaySummary[];
}

export interface WeeklyConsumptionBucket {
  weekIndex: number;
  weekLabel: string;
  rangeLabel: string;
  sessions: number;
  activeDays: number;
  totalMg: number;
  substances: SubstanceDaySummary[];
}

export interface WeeklyConsumptionAnalysis {
  dailyBuckets: DailyConsumptionBucket[];
  weeklyBuckets: WeeklyConsumptionBucket[];
  summary: {
    totalSessions7d: number;
    activeDays7d: number;
    cleanDays7d: number;
    totalMg7d: number;
    avgSessionsPerWeek4w: number;
    peakDayLabel: string;
    frequencyTier: string;
  };
}

export function getSubstanceColor(substanceId: string): string {
  const PALETTE = [
    '#007AFF', // Cobalt Blue
    '#0D9488', // Teal
    '#6366F1', // Indigo
    '#D97706', // Amber
    '#10B981', // Emerald
    '#8B5CF6', // Purple
    '#EC4899', // Pink
    '#0284C7', // Sky
    '#E11D48', // Rose
    '#059669', // Forest
  ];
  let hash = 0;
  for (let i = 0; i < substanceId.length; i++) {
    hash = (hash << 5) - hash + substanceId.charCodeAt(i);
    hash |= 0;
  }
  return PALETTE[Math.abs(hash) % PALETTE.length];
}

const SHORT_WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const SHORT_MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

function toLocalDateKey(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function startOfLocalDay(d: Date): Date {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate(), 0, 0, 0, 0);
}

/**
 * Analyzes `cannapharm_dose_log_entries_v2` entries into a 7-day daily frequency breakdown
 * and a 4-week rolling weekly frequency trend for Recharts visualization.
 */
export function analyzeWeeklyConsumption(
  entries: DoseLogEntryLike[],
  referenceDate: Date = new Date(),
  resolveSubstanceName: (id: string) => string = (id) => id.toUpperCase()
): WeeklyConsumptionAnalysis {
  const refDayStart = startOfLocalDay(referenceDate);

  // 1. Build 7-day daily buckets (from 6 days ago through Today)
  const dailyBuckets: DailyConsumptionBucket[] = [];
  const bucketByDateKey = new Map<string, DailyConsumptionBucket>();

  for (let offset = 6; offset >= 0; offset--) {
    const dayDate = new Date(refDayStart);
    dayDate.setDate(refDayStart.getDate() - offset);
    const dateKey = toLocalDateKey(dayDate);
    const weekday = SHORT_WEEKDAYS[dayDate.getDay()];
    const monthName = SHORT_MONTHS[dayDate.getMonth()];
    const dayNum = dayDate.getDate();

    const bucket: DailyConsumptionBucket = {
      dateKey,
      dayLabel: offset === 0 ? 'Today' : weekday,
      fullDateLabel: `${weekday}, ${monthName} ${dayNum}`,
      sessions: 0,
      totalMg: 0,
      uniqueSubstancesCount: 0,
      substances: [],
    };
    dailyBuckets.push(bucket);
    bucketByDateKey.set(dateKey, bucket);
  }

  // 2. Build 4-week rolling weekly buckets (3w ago, 2w ago, Last wk, This wk)
  const weekLabels = ['3w ago', '2w ago', 'Last wk', 'This wk'];
  const weeklyBuckets: WeeklyConsumptionBucket[] = [];
  const activeDaySetsPerWeek: Set<string>[] = [
    new Set(),
    new Set(),
    new Set(),
    new Set(),
  ];

  for (let w = 0; w < 4; w++) {
    const weeksBack = 3 - w;
    const endDay = new Date(refDayStart);
    endDay.setDate(refDayStart.getDate() - weeksBack * 7);
    const startDay = new Date(endDay);
    startDay.setDate(endDay.getDate() - 6);

    const rangeLabel = `${SHORT_MONTHS[startDay.getMonth()]} ${startDay.getDate()} – ${SHORT_MONTHS[endDay.getMonth()]} ${endDay.getDate()}`;
    weeklyBuckets.push({
      weekIndex: w,
      weekLabel: weekLabels[w],
      rangeLabel,
      sessions: 0,
      activeDays: 0,
      totalMg: 0,
      substances: [],
    });
  }

  // 3. Populate buckets from valid dose log entries
  const msPerDay = 24 * 60 * 60 * 1000;

  for (const entry of entries) {
    if (!entry || !entry.timestampIso) continue;
    const parsedDate = new Date(entry.timestampIso);
    if (Number.isNaN(parsedDate.getTime())) continue;

    const doseMg =
      typeof entry.doseMg === 'number' && Number.isFinite(entry.doseMg) && entry.doseMg > 0
        ? entry.doseMg
        : 0;
    const entryDayStart = startOfLocalDay(parsedDate);
    const dateKey = toLocalDateKey(entryDayStart);

    // Check 7-day daily bucket
    const dailyBucket = bucketByDateKey.get(dateKey);
    if (dailyBucket) {
      dailyBucket.sessions += 1;
      dailyBucket.totalMg = Math.round((dailyBucket.totalMg + doseMg) * 10) / 10;

      const existingSub = dailyBucket.substances.find(
        (s) => s.id === entry.cannabinoidId
      );
      if (existingSub) {
        existingSub.count += 1;
        existingSub.totalMg =
          Math.round((existingSub.totalMg + doseMg) * 10) / 10;
      } else {
        dailyBucket.substances.push({
          id: entry.cannabinoidId,
          name: resolveSubstanceName(entry.cannabinoidId),
          totalMg: Math.round(doseMg * 10) / 10,
          count: 1,
        });
      }
      dailyBucket.uniqueSubstancesCount = dailyBucket.substances.length;
    }

    // Check 4-week rolling window (0 to 27 days back from refDayStart)
    const diffDays = Math.round(
      (refDayStart.getTime() - entryDayStart.getTime()) / msPerDay
    );
    if (diffDays >= 0 && diffDays < 28) {
      const weeksBack = Math.floor(diffDays / 7); // 0 = This wk, 1 = Last wk, 2 = 2w ago, 3 = 3w ago
      const wIdx = 3 - weeksBack;
      const wBucket = weeklyBuckets[wIdx];
      if (wBucket) {
        wBucket.sessions += 1;
        wBucket.totalMg = Math.round((wBucket.totalMg + doseMg) * 10) / 10;
        activeDaySetsPerWeek[wIdx].add(dateKey);

        const existingSub = wBucket.substances.find(
          (s) => s.id === entry.cannabinoidId
        );
        if (existingSub) {
          existingSub.count += 1;
          existingSub.totalMg =
            Math.round((existingSub.totalMg + doseMg) * 10) / 10;
        } else {
          wBucket.substances.push({
            id: entry.cannabinoidId,
            name: resolveSubstanceName(entry.cannabinoidId),
            totalMg: Math.round(doseMg * 10) / 10,
            count: 1,
          });
        }
      }
    }
  }

  for (let w = 0; w < 4; w++) {
    weeklyBuckets[w].activeDays = activeDaySetsPerWeek[w].size;
  }

  // 4. Compute 7-day and 4-week summary metrics
  let totalSessions7d = 0;
  let activeDays7d = 0;
  let totalMg7d = 0;
  let peakSessions = 0;
  let peakDayLabel = 'None';

  for (const b of dailyBuckets) {
    totalSessions7d += b.sessions;
    totalMg7d += b.totalMg;
    if (b.sessions > 0) {
      activeDays7d += 1;
    }
    if (b.sessions > peakSessions) {
      peakSessions = b.sessions;
      peakDayLabel = `${b.dayLabel} (${b.sessions})`;
    }
  }
  totalMg7d = Math.round(totalMg7d * 10) / 10;

  const totalSessions4w = weeklyBuckets.reduce((acc, w) => acc + w.sessions, 0);
  const avgSessionsPerWeek4w = Math.round((totalSessions4w / 4) * 10) / 10;

  let frequencyTier = 'Abstinent (0x/wk)';
  if (totalSessions7d === 1 && activeDays7d === 1) {
    frequencyTier = 'Single Session (1x/wk)';
  } else if (activeDays7d >= 1 && activeDays7d <= 2) {
    frequencyTier = 'Occasional (1–2d/wk)';
  } else if (activeDays7d >= 3 && activeDays7d <= 4) {
    frequencyTier = 'Moderate (3–4d/wk)';
  } else if (activeDays7d >= 5) {
    frequencyTier = 'Frequent / Daily (5+d/wk)';
  }

  return {
    dailyBuckets,
    weeklyBuckets,
    summary: {
      totalSessions7d,
      activeDays7d,
      cleanDays7d: 7 - activeDays7d,
      totalMg7d,
      avgSessionsPerWeek4w,
      peakDayLabel,
      frequencyTier,
    },
  };
}
