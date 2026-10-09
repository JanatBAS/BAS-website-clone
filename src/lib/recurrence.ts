import type { AdminEvent, RecurrenceRule } from '@/types/admin';
import { addDaysToDateISO, daysBetweenDateISO } from './event-dates';
import { formatDateISO, getEndOfMonth } from './calendar-utils';

const RECURRENCE_PAST_MONTHS = 3;
const RECURRENCE_FUTURE_MONTHS = 12;

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
  windowStart.setMonth(windowStart.getMonth() - RECURRENCE_PAST_MONTHS);
  const windowEnd = new Date(now);
  windowEnd.setMonth(windowEnd.getMonth() + RECURRENCE_FUTURE_MONTHS);

  const seriesEnd = endDate ? new Date(endDate + 'T23:59:59') : windowEnd;
  const cutoff = seriesEnd < windowEnd ? seriesEnd : windowEnd;

  const startDate = new Date(event.dateISO + 'T12:00:00');
  const hasEndDate = Boolean(event.endDateISO && event.endDateISO >= event.dateISO);
  const durationDays = hasEndDate ? daysBetweenDateISO(event.dateISO, event.endDateISO!) : 0;
  const occurrences: AdminEvent[] = [];

  for (let index = 0; ; index++) {
    const current = occurrenceDate(startDate, frequency, index);
    if (current > cutoff) break;
    const iso = formatDateISO(current);

    if (current >= windowStart && !excluded.has(iso)) {
      occurrences.push({
        ...event,
        id: `${event.id}__${iso}`,
        dateISO: iso,
        endDateISO: hasEndDate ? addDaysToDateISO(iso, durationDays) : undefined,
      });
    }
  }

  return occurrences;
}

/**
 * The `index`-th occurrence counted from the series start. Monthly series keep
 * the start's day of month, clamped to short months (Jan 31 -> Feb 28 -> Mar 31),
 * so no month is skipped and the day never drifts.
 */
function occurrenceDate(origin: Date, frequency: RecurrenceRule['frequency'], index: number): Date {
  if (frequency === 'monthly') {
    const year = origin.getFullYear();
    const month = origin.getMonth() + index;
    const lastDay = getEndOfMonth(year, month).getDate();
    return new Date(year, month, Math.min(origin.getDate(), lastDay), 12);
  }

  const days = (frequency === 'weekly' ? 7 : 14) * index;
  return new Date(origin.getFullYear(), origin.getMonth(), origin.getDate() + days, 12);
}
