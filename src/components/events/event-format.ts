import { getDateInfo } from "@/lib/date-utils";
import type { EventRecord } from "@/data/events";

/** "Thursday 6 June 2019" */
export function formatEventDate(dateISO: string): string {
  const { dayOfWeek, dayOfMonth, monthLong, year } = getDateInfo(dateISO);
  return `${dayOfWeek} ${dayOfMonth} ${monthLong} ${year}`;
}

/** "6 June" */
export function formatEventDay(dateISO: string): string {
  const { dayOfMonth, monthLong } = getDateInfo(dateISO);
  return `${dayOfMonth} ${monthLong}`;
}

/** Day of month and short month name for date badges. */
export function getEventBadge(event: EventRecord): { day: string; month: string } {
  const { dayOfMonth, monthShort } = getDateInfo(event.dateISO);
  return { day: dayOfMonth, month: event.monthShort ?? monthShort };
}
