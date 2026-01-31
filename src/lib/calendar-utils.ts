import { CalendarDay, CalendarWeek, CalendarMonth, UnifiedEvent } from '@/types/calendar';

export function getMonthName(month: number, format: 'long' | 'short' = 'long'): string {
  const date = new Date(2000, month, 1);
  return date.toLocaleDateString('en-US', { month: format });
}

export function getDayName(dayIndex: number, format: 'long' | 'short' = 'short'): string {
  const date = new Date(2000, 0, 2 + dayIndex); // Jan 2, 2000 is Sunday
  return date.toLocaleDateString('en-US', { weekday: format });
}

export function getWeekDays(format: 'long' | 'short' = 'short'): string[] {
  return Array.from({ length: 7 }, (_, i) => getDayName(i, format));
}

export function isSameDay(date1: Date, date2: Date): boolean {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}

export function isToday(date: Date): boolean {
  return isSameDay(date, new Date());
}

export function getStartOfMonth(year: number, month: number): Date {
  return new Date(year, month, 1);
}

export function getEndOfMonth(year: number, month: number): Date {
  return new Date(year, month + 1, 0);
}

export function getStartOfWeek(date: Date): Date {
  const d = new Date(date);
  const day = d.getDay();
  d.setDate(d.getDate() - day);
  d.setHours(0, 0, 0, 0);
  return d;
}

export function getEndOfWeek(date: Date): Date {
  const d = new Date(date);
  const day = d.getDay();
  d.setDate(d.getDate() + (6 - day));
  d.setHours(23, 59, 59, 999);
  return d;
}

export function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

export function addMonths(date: Date, months: number): Date {
  const result = new Date(date);
  result.setMonth(result.getMonth() + months);
  return result;
}

export function addWeeks(date: Date, weeks: number): Date {
  return addDays(date, weeks * 7);
}

export function formatDateISO(date: Date): string {
  return date.toISOString().split('T')[0];
}

export function parseISODate(dateStr: string): Date {
  const [year, month, day] = dateStr.split('-').map(Number);
  return new Date(year, month - 1, day);
}

export function getEventsForDate(events: UnifiedEvent[], date: Date): UnifiedEvent[] {
  const dateISO = formatDateISO(date);
  return events.filter(event => event.dateISO === dateISO);
}

export function getEventsForDateRange(
  events: UnifiedEvent[],
  startDate: Date,
  endDate: Date
): UnifiedEvent[] {
  const startISO = formatDateISO(startDate);
  const endISO = formatDateISO(endDate);
  return events.filter(event => event.dateISO >= startISO && event.dateISO <= endISO);
}

export function generateCalendarMonth(
  year: number,
  month: number,
  events: UnifiedEvent[]
): CalendarMonth {
  const firstDayOfMonth = getStartOfMonth(year, month);
  const lastDayOfMonth = getEndOfMonth(year, month);

  // Start from the Sunday of the week containing the first day of the month
  const startDate = getStartOfWeek(firstDayOfMonth);

  // End at the Saturday of the week containing the last day of the month
  const endDate = getEndOfWeek(lastDayOfMonth);

  const weeks: CalendarWeek[] = [];
  let currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    const week: CalendarWeek = { days: [] };

    for (let i = 0; i < 7; i++) {
      const dayEvents = getEventsForDate(events, currentDate);

      week.days.push({
        date: new Date(currentDate),
        dayOfMonth: currentDate.getDate(),
        isCurrentMonth: currentDate.getMonth() === month,
        isToday: isToday(currentDate),
        events: dayEvents,
      });

      currentDate = addDays(currentDate, 1);
    }

    weeks.push(week);
  }

  return { year, month, weeks };
}

export function generateWeekDays(
  weekStart: Date,
  events: UnifiedEvent[]
): CalendarDay[] {
  const days: CalendarDay[] = [];
  let currentDate = new Date(weekStart);

  for (let i = 0; i < 7; i++) {
    const dayEvents = getEventsForDate(events, currentDate);

    days.push({
      date: new Date(currentDate),
      dayOfMonth: currentDate.getDate(),
      isCurrentMonth: true,
      isToday: isToday(currentDate),
      events: dayEvents,
    });

    currentDate = addDays(currentDate, 1);
  }

  return days;
}

export function formatTime12Hour(time24: string): string {
  const [hours, minutes] = time24.split(':').map(Number);
  const period = hours >= 12 ? 'pm' : 'am';
  const hours12 = hours % 12 || 12;
  return `${hours12}:${minutes.toString().padStart(2, '0')} ${period}`;
}

export function sortEventsByDate(events: UnifiedEvent[], ascending = true): UnifiedEvent[] {
  return [...events].sort((a, b) => {
    const dateA = new Date(`${a.dateISO}T${a.startTime || '00:00'}`);
    const dateB = new Date(`${b.dateISO}T${b.startTime || '00:00'}`);
    return ascending ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime();
  });
}

export function groupEventsByMonth(events: UnifiedEvent[]): Map<string, UnifiedEvent[]> {
  const grouped = new Map<string, UnifiedEvent[]>();

  for (const event of events) {
    const key = event.dateISO.substring(0, 7); // YYYY-MM
    const existing = grouped.get(key) || [];
    existing.push(event);
    grouped.set(key, existing);
  }

  return grouped;
}

export function getMonthYearLabel(year: number, month: number): string {
  return `${getMonthName(month)} ${year}`;
}
