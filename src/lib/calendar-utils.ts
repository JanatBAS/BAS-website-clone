import { CalendarDay, CalendarWeek, CalendarMonth, UnifiedEvent } from '@/types/calendar';
import { isDateWithinEventRange } from './event-dates';

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

/**
 * Moves by whole calendar months, clamping the day to the target month's
 * length (Jan 31 + 1 month = Feb 28/29, not Mar 3).
 */
export function addMonths(date: Date, months: number): Date {
  const firstOfTarget = new Date(date.getFullYear(), date.getMonth() + months, 1);
  const lastDay = getEndOfMonth(firstOfTarget.getFullYear(), firstOfTarget.getMonth()).getDate();
  return new Date(firstOfTarget.getFullYear(), firstOfTarget.getMonth(), Math.min(date.getDate(), lastDay));
}

export function addWeeks(date: Date, weeks: number): Date {
  return addDays(date, weeks * 7);
}

export function formatDateISO(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function getEventsForDate(events: UnifiedEvent[], date: Date): UnifiedEvent[] {
  const dateISO = formatDateISO(date);
  return sortEventsByDate(events.filter(event => isDateWithinEventRange(event, dateISO)), true);
}

export function generateCalendarMonth(
  year: number,
  month: number,
  events: UnifiedEvent[],
  todayISO: string
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
        isToday: formatDateISO(currentDate) === todayISO,
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
  events: UnifiedEvent[],
  todayISO: string
): CalendarDay[] {
  const days: CalendarDay[] = [];
  let currentDate = new Date(weekStart);

  for (let i = 0; i < 7; i++) {
    const dayEvents = getEventsForDate(events, currentDate);

    days.push({
      date: new Date(currentDate),
      dayOfMonth: currentDate.getDate(),
      isCurrentMonth: true,
      isToday: formatDateISO(currentDate) === todayISO,
      events: dayEvents,
    });

    currentDate = addDays(currentDate, 1);
  }

  return days;
}

export function sortEventsByDate(events: UnifiedEvent[], ascending = true): UnifiedEvent[] {
  return [...events].sort((a, b) => {
    const dateA = new Date(`${a.dateISO}T${a.startTime || '00:00'}`);
    const dateB = new Date(`${b.dateISO}T${b.startTime || '00:00'}`);
    return ascending ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime();
  });
}

export function getMonthYearLabel(year: number, month: number): string {
  return `${getMonthName(month)} ${year}`;
}
