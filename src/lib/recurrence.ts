import type { AdminEvent } from '@/types/admin';

/**
 * Expand a recurring event into individual occurrences.
 * Non-recurring events are returned as-is in a single-element array.
 */
export function expandRecurringEvent(event: AdminEvent): AdminEvent[] {
  if (!event.recurrence) return [event];

  const { frequency, endDate } = event.recurrence;
  const excluded = new Set(event.excludedDates ?? []);

  const now = new Date();
  const windowStart = new Date(now);
  windowStart.setMonth(windowStart.getMonth() - 3);
  const windowEnd = new Date(now);
  windowEnd.setMonth(windowEnd.getMonth() + 12);

  const seriesEnd = endDate ? new Date(endDate + 'T23:59:59') : windowEnd;
  const cutoff = seriesEnd < windowEnd ? seriesEnd : windowEnd;

  const startDate = new Date(event.dateISO + 'T12:00:00');
  const occurrences: AdminEvent[] = [];

  let current = new Date(startDate);

  while (current <= cutoff) {
    const iso = toISO(current);

    if (current >= windowStart && !excluded.has(iso)) {
      occurrences.push({
        ...event,
        id: `${event.id}__${iso}`,
        dateISO: iso,
      });
    }

    current = nextDate(current, startDate, frequency);
  }

  return occurrences;
}

function nextDate(
  current: Date,
  origin: Date,
  frequency: 'weekly' | 'biweekly' | 'monthly',
): Date {
  const next = new Date(current);
  if (frequency === 'weekly') {
    next.setDate(next.getDate() + 7);
  } else if (frequency === 'biweekly') {
    next.setDate(next.getDate() + 14);
  } else {
    // monthly: same day-of-month, clamped for short months
    next.setMonth(next.getMonth() + 1);
    const targetDay = origin.getDate();
    const maxDay = daysInMonth(next.getFullYear(), next.getMonth());
    next.setDate(Math.min(targetDay, maxDay));
  }
  return next;
}

function daysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

function toISO(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}
