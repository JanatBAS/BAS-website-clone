export function formatTimeDisplay(time24: string): string {
  const [h, m] = time24.split(':').map(Number);
  const period = h >= 12 ? 'pm' : 'am';
  const hour12 = h % 12 || 12;
  return `${hour12}:${m.toString().padStart(2, '0')} ${period}`;
}

export function getDateInfo(dateISO: string) {
  const date = new Date(dateISO + 'T12:00:00');
  return {
    dayOfWeek: date.toLocaleDateString('en-US', { weekday: 'long' }),
    dayOfMonth: date.getDate().toString(),
    monthShort: date.toLocaleDateString('en-US', { month: 'short' }),
    monthLong: date.toLocaleDateString('en-US', { month: 'long' }),
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
