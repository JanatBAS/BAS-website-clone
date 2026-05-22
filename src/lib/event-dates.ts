import type { UnifiedEvent } from '@/types/calendar';

const DATE_ISO_PATTERN = /^\d{4}-\d{2}-\d{2}$/;
const DAY_MS = 24 * 60 * 60 * 1000;

export function parseDateISO(dateISO: string): Date | null {
  if (!DATE_ISO_PATTERN.test(dateISO)) return null;

  const [year, month, day] = dateISO.split('-').map(Number);
  const date = new Date(Date.UTC(year, month - 1, day, 12, 0, 0));

  if (
    date.getUTCFullYear() !== year ||
    date.getUTCMonth() + 1 !== month ||
    date.getUTCDate() !== day
  ) {
    return null;
  }

  return date;
}

export function isValidDateISO(dateISO: string | undefined): dateISO is string {
  return typeof dateISO === 'string' && parseDateISO(dateISO) !== null;
}

export function addDaysToDateISO(dateISO: string, days: number): string {
  const parsed = parseDateISO(dateISO);
  if (!parsed) return dateISO;

  parsed.setUTCDate(parsed.getUTCDate() + days);
  return toDateISO(parsed);
}

export function daysBetweenDateISO(startDateISO: string, endDateISO: string): number {
  const start = parseDateISO(startDateISO);
  const end = parseDateISO(endDateISO);
  if (!start || !end) return 0;

  const startMidnight = Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate());
  const endMidnight = Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate());
  return Math.round((endMidnight - startMidnight) / DAY_MS);
}

export function isDateWithinEventRange(event: Pick<UnifiedEvent, 'dateISO' | 'endDateISO'>, dateISO: string): boolean {
  const endDateISO = event.endDateISO || event.dateISO;
  return event.dateISO <= dateISO && dateISO <= endDateISO;
}

export function eventOverlapsDateRange(
  event: Pick<UnifiedEvent, 'dateISO' | 'endDateISO'>,
  startDateISO: string,
  endDateISO: string,
): boolean {
  const eventEndDateISO = event.endDateISO || event.dateISO;
  return event.dateISO <= endDateISO && eventEndDateISO >= startDateISO;
}

export function hasMultiDayRange(event: Pick<UnifiedEvent, 'dateISO' | 'endDateISO'>): boolean {
  return Boolean(event.endDateISO && event.endDateISO !== event.dateISO);
}

export function formatEventDateRange(startDateISO: string, endDateISO?: string): string {
  if (!endDateISO || endDateISO === startDateISO) {
    return formatDateLong(startDateISO);
  }

  return `${formatDateLong(startDateISO)} - ${formatDateLong(endDateISO)}`;
}

function formatDateLong(dateISO: string): string {
  const parsed = parseDateISO(dateISO);
  if (!parsed) return dateISO;

  const date = new Date(`${dateISO}T12:00:00`);
  return `${date.toLocaleDateString('en-US', { weekday: 'long' })}, ${date.getDate()} ${date.toLocaleDateString('en-US', { month: 'long' })} ${date.getFullYear()}`;
}

function toDateISO(date: Date): string {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const day = String(date.getUTCDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}
