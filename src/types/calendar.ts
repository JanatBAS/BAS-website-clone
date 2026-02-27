export type EventCategory = 'meetup' | 'conference' | 'workshop' | 'general';
export type EventStatus = 'upcoming' | 'past';
export type EventSource = 'most-recent-events' | 'admin' | 'meetup.com';
export type CalendarView = 'month' | 'week' | 'list';

export interface UnifiedEvent {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  dateISO: string;           // "2025-02-21"
  startTime: string;         // "18:00"
  endTime?: string;
  startTimeDisplay: string;  // "6:00 pm"
  endTimeDisplay?: string;
  dayOfWeek: string;
  dayOfMonth: string;
  monthShort: string;
  monthLong: string;
  year: number;
  location?: string;
  locationUrl?: string;
  imageUrl?: string;
  href: string;
  signupLink?: string;
  googleCalendarUrl?: string;
  icsUrl?: string;
  category: EventCategory;
  status: EventStatus;
  source: EventSource;
  accentColor?: string;
}

export interface CalendarDay {
  date: Date;
  dayOfMonth: number;
  isCurrentMonth: boolean;
  isToday: boolean;
  events: UnifiedEvent[];
}

export interface CalendarWeek {
  days: CalendarDay[];
}

export interface CalendarMonth {
  year: number;
  month: number; // 0-indexed
  weeks: CalendarWeek[];
}

export interface CategoryFilter {
  category: EventCategory | 'all';
  label: string;
  color: string;
  isActive: boolean;
}

export const CATEGORY_COLORS: Record<EventCategory, string> = {
  meetup: '#3b82f6',
  conference: '#8b5cf6',
  workshop: '#10b981',
  general: '#6b7280',
};

export const CATEGORY_LABELS: Record<EventCategory, string> = {
  meetup: 'Meetup',
  conference: 'Conference',
  workshop: 'Workshop',
  general: 'General',
};
