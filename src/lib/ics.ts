import { addDaysToDateISO } from './event-dates';

export interface IcsEventInput {
  uid: string;
  title: string;
  dateISO: string;
  endDateISO?: string;
  startTime: string;
  endTime?: string;
  location?: string;
  description?: string;
  url?: string;
}

const DEFAULT_DURATION_MINUTES = 120;

function escapeText(value: string): string {
  return value
    .replace(/\\/g, '\\\\')
    .replace(/\r?\n/g, '\\n')
    .replace(/,/g, '\\,')
    .replace(/;/g, '\\;');
}

/** Folds content lines longer than 75 octets, as required by RFC 5545. */
function foldLine(line: string): string {
  const bytes = new TextEncoder().encode(line);
  if (bytes.length <= 75) return line;

  const parts: string[] = [];
  let current = '';
  let currentBytes = 0;
  for (const char of line) {
    const charBytes = new TextEncoder().encode(char).length;
    const limit = parts.length === 0 ? 75 : 74;
    if (currentBytes + charBytes > limit) {
      parts.push(current);
      current = '';
      currentBytes = 0;
    }
    current += char;
    currentBytes += charBytes;
  }
  parts.push(current);
  return parts.join('\r\n ');
}

function toMinutes(time24: string): number {
  const [h, m] = time24.split(':').map(Number);
  return h * 60 + m;
}

function formatLocal(dateISO: string, minutes: number): string {
  const dayOffset = Math.floor(minutes / 1440);
  const normalized = ((minutes % 1440) + 1440) % 1440;
  const date = addDaysToDateISO(dateISO, dayOffset).replace(/-/g, '');
  const h = String(Math.floor(normalized / 60)).padStart(2, '0');
  const m = String(normalized % 60).padStart(2, '0');
  return `${date}T${h}${m}00`;
}

/**
 * Builds an iCalendar file for a single event. Times are Swiss wall-clock
 * times, so they are emitted with TZID=Europe/Zurich.
 */
export function buildIcs(event: IcsEventInput): string {
  const startMinutes = toMinutes(event.startTime);
  const endDateISO = event.endDateISO || event.dateISO;
  let end: string;

  if (event.endTime) {
    const endMinutes = toMinutes(event.endTime);
    const crossesMidnight = !event.endDateISO && endMinutes < startMinutes;
    end = formatLocal(endDateISO, endMinutes + (crossesMidnight ? 1440 : 0));
  } else {
    end = formatLocal(event.dateISO, startMinutes + DEFAULT_DURATION_MINUTES);
  }

  const description = [event.description, event.url].filter(Boolean).join('\n\n');
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Bitcoin Association Switzerland//Events//EN',
    'CALSCALE:GREGORIAN',
    'BEGIN:VEVENT',
    `UID:${event.uid}@bitcoinassociation.ch`,
    `DTSTAMP:${event.dateISO.replace(/-/g, '')}T000000Z`,
    `DTSTART;TZID=Europe/Zurich:${formatLocal(event.dateISO, startMinutes)}`,
    `DTEND;TZID=Europe/Zurich:${end}`,
    `SUMMARY:${escapeText(event.title)}`,
    event.location ? `LOCATION:${escapeText(event.location)}` : '',
    description ? `DESCRIPTION:${escapeText(description)}` : '',
    event.url ? `URL:${event.url}` : '',
    'END:VEVENT',
    'END:VCALENDAR',
  ].filter(Boolean);

  return lines.map(foldLine).join('\r\n') + '\r\n';
}

/** A `data:` URL for an `<a download>` link, so no server route is needed. */
export function icsDataUrl(event: IcsEventInput): string {
  return `data:text/calendar;charset=utf-8,${encodeURIComponent(buildIcs(event))}`;
}

/** File name for the `download` attribute of an ICS link. */
export function icsFileName(slugOrTitle: string): string {
  const base = slugOrTitle
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
  return `${base || 'event'}.ics`;
}
