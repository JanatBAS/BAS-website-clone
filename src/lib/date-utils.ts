export function formatTimeDisplay(time24: string): string {
  const [h = NaN, m = NaN] = time24.split(':').map(Number);
  const period = h >= 12 ? 'pm' : 'am';
  const hour12 = h % 12 || 12;
  return `${hour12}:${m.toString().padStart(2, '0')} ${period}`;
}

// Built once: toLocaleDateString() with options creates a new formatter on
// every call, and getDateInfo() runs for every event occurrence.
const weekdayLong = new Intl.DateTimeFormat('en-US', { weekday: 'long' });
const monthShort = new Intl.DateTimeFormat('en-US', { month: 'short' });
const monthLong = new Intl.DateTimeFormat('en-US', { month: 'long' });

export function getDateInfo(dateISO: string) {
  const date = new Date(dateISO + 'T12:00:00');
  // Intl throws for an invalid date; toLocaleDateString() returned this text.
  const format = (formatter: Intl.DateTimeFormat) =>
    Number.isNaN(date.getTime()) ? 'Invalid Date' : formatter.format(date);
  return {
    dayOfWeek: format(weekdayLong),
    dayOfMonth: date.getDate().toString(),
    monthShort: format(monthShort),
    monthLong: format(monthLong),
    year: date.getFullYear(),
  };
}

export function truncateDescription(description: string, maxLength = 150): string {
  if (description.length <= maxLength) return description;
  // Do not cut an emoji (or other astral character) in half.
  const lastCode = description.charCodeAt(maxLength - 1);
  const end = lastCode >= 0xd800 && lastCode <= 0xdbff ? maxLength - 1 : maxLength;
  return description.substring(0, end).trim() + '...';
}
