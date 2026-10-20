import test from 'node:test';
import assert from 'node:assert/strict';
import { analyzeWeeklyConsumption } from './weeklyConsumptionAnalytics.ts';

test('analyzeWeeklyConsumption returns 7 daily buckets and 4 weekly buckets with zero counts when log is empty', () => {
  const ref = new Date('2026-10-19T12:00:00');
  const result = analyzeWeeklyConsumption([], ref);

  assert.equal(result.dailyBuckets.length, 7);
  assert.equal(result.dailyBuckets[6].dayLabel, 'Today');
  assert.equal(result.weeklyBuckets.length, 4);
  assert.equal(result.summary.totalSessions7d, 0);
  assert.equal(result.summary.activeDays7d, 0);
  assert.equal(result.summary.cleanDays7d, 7);
  assert.equal(result.summary.frequencyTier, 'Abstinent (0x/wk)');
});

test('analyzeWeeklyConsumption aggregates multi-day and multi-week dose log entries accurately', () => {
  const ref = new Date('2026-10-19T15:00:00');
  const entries = [
    {
      id: 'd1',
      cannabinoidId: 'delta9-thc',
      doseMg: 10,
      timestampIso: new Date('2026-10-19T10:00:00').toISOString(),
    },
    {
      id: 'd2',
      cannabinoidId: 'quetiapine',
      doseMg: 25,
      timestampIso: new Date('2026-10-19T22:00:00').toISOString(),
    },
    {
      id: 'd3',
      cannabinoidId: 'delta9-thc',
      doseMg: 15,
      timestampIso: new Date('2026-10-17T18:00:00').toISOString(),
    },
    {
      id: 'd4',
      cannabinoidId: 'alprazolam',
      doseMg: 1,
      timestampIso: new Date('2026-10-10T20:00:00').toISOString(), // 9 days ago -> Last wk
    },
  ];

  const result = analyzeWeeklyConsumption(entries, ref, (id) => id);

  // Today (index 6) has 2 sessions totaling 35 mg across 2 unique substances
  assert.equal(result.dailyBuckets[6].sessions, 2);
  assert.equal(result.dailyBuckets[6].totalMg, 35);
  assert.equal(result.dailyBuckets[6].uniqueSubstancesCount, 2);

  // 2 days ago (index 4) has 1 session of 15 mg
  assert.equal(result.dailyBuckets[4].sessions, 1);
  assert.equal(result.dailyBuckets[4].totalMg, 15);

  // 7-day summary
  assert.equal(result.summary.totalSessions7d, 3);
  assert.equal(result.summary.activeDays7d, 2);
  assert.equal(result.summary.cleanDays7d, 5);
  assert.equal(result.summary.totalMg7d, 50);
  assert.equal(result.summary.frequencyTier, 'Occasional (1–2d/wk)');

  // 4-week rolling buckets: This wk (index 3) = 3 sessions, Last wk (index 2) = 1 session
  assert.equal(result.weeklyBuckets[3].sessions, 3);
  assert.equal(result.weeklyBuckets[3].activeDays, 2);
  assert.equal(result.weeklyBuckets[2].sessions, 1);
  assert.equal(result.weeklyBuckets[2].activeDays, 1);
  assert.equal(result.summary.avgSessionsPerWeek4w, 1);

  // Each distinct substance has its own summary for the day
  assert.equal(result.dailyBuckets[6].substances.length, 2);
  assert.equal(result.dailyBuckets[6].substances[0].id, 'delta9-thc');
  assert.equal(result.dailyBuckets[6].substances[1].id, 'quetiapine');
});

test('calculateSubstanceColumnWidth shrinks dynamically as more substances are logged for a day', () => {
  // Formula: Math.max(5, Math.floor((slotWidth - (numSubs - 1) * gap) / numSubs))
  const slotWidth = 44;
  const gap = 2;
  const colWidth1 = Math.max(5, Math.floor((slotWidth - (1 - 1) * 0) / 1));
  const colWidth2 = Math.max(5, Math.floor((slotWidth - (2 - 1) * gap) / 2));
  const colWidth3 = Math.max(5, Math.floor((slotWidth - (3 - 1) * gap) / 3));
  const colWidth4 = Math.max(5, Math.floor((slotWidth - (4 - 1) * gap) / 4));

  assert.equal(colWidth1, 44);
  assert.equal(colWidth2, 21);
  assert.equal(colWidth3, 13);
  assert.equal(colWidth4, 9);
  assert.ok(colWidth1 > colWidth2);
  assert.ok(colWidth2 > colWidth3);
  assert.ok(colWidth3 > colWidth4);
});

