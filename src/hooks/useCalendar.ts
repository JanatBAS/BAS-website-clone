"use client";

import { useState, useCallback, useMemo, useSyncExternalStore } from 'react';
import {
  CalendarView,
  CalendarMonth,
  UnifiedEvent,
  EventCategory,
  CategoryFilter,
  CATEGORY_COLORS,
  CATEGORY_LABELS,
} from '@/types/calendar';
import {
  generateCalendarMonth,
  generateWeekDays,
  getStartOfWeek,
  addMonths,
  addWeeks,
  formatDateISO,
  sortEventsByDate,
} from '@/lib/calendar-utils';
import { isEventPast } from '@/lib/event-dates';

interface UseCalendarOptions {
  events: UnifiedEvent[];
  /** Today (YYYY-MM-DD) when the page was rendered on the server. */
  initialTodayISO: string;
  initialView?: CalendarView;
}

interface UseCalendarReturn {
  // Current state
  currentDate: Date;
  /** Today in the visitor's time zone (the server's value until hydration). */
  todayISO: string;
  currentView: CalendarView;
  selectedEvent: UnifiedEvent | null;
  isModalOpen: boolean;

  // Computed data
  calendarMonth: CalendarMonth;
  weekDays: ReturnType<typeof generateWeekDays>;
  listEvents: UnifiedEvent[];
  filteredEvents: UnifiedEvent[];

  // Filters
  categoryFilters: CategoryFilter[];
  activeCategories: Set<EventCategory | 'all'>;

  // Actions
  goToToday: () => void;
  goToNextMonth: () => void;
  goToPrevMonth: () => void;
  goToNextWeek: () => void;
  goToPrevWeek: () => void;
  setView: (view: CalendarView) => void;
  setSelectedEvent: (event: UnifiedEvent | null) => void;
  openModal: (event: UnifiedEvent) => void;
  closeModal: () => void;
  toggleCategory: (category: EventCategory | 'all') => void;
  setActiveCategories: (categories: Set<EventCategory | 'all'>) => void;
}

const noSubscription = () => () => {};

function dateFromISO(dateISO: string): Date {
  const [year, month, day] = dateISO.split('-').map(Number);
  return new Date(year, month - 1, day);
}

export function useCalendar({
  events,
  initialTodayISO,
  initialView = 'month',
}: UseCalendarOptions): UseCalendarReturn {
  // Cached pages can be a day old, so "today" comes from the browser. The
  // server value is used for the server render and hydration, which keeps the
  // two identical; React re-renders with the browser's date right after.
  const todayISO = useSyncExternalStore(
    noSubscription,
    () => formatDateISO(new Date()),
    () => initialTodayISO,
  );

  // null = follow today; set once the visitor navigates.
  const [navigatedDate, setNavigatedDate] = useState<Date | null>(null);
  const currentDate = useMemo(() => navigatedDate ?? dateFromISO(todayISO), [navigatedDate, todayISO]);
  const [currentView, setCurrentView] = useState<CalendarView>(initialView);
  const [selectedEvent, setSelectedEvent] = useState<UnifiedEvent | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategories, setActiveCategories] = useState<Set<EventCategory | 'all'>>(
    new Set(['all'])
  );

  // Filter events based on active categories
  const filteredEvents = useMemo(() => {
    if (activeCategories.has('all')) {
      return events;
    }
    return events.filter(event =>
      activeCategories.has(event.category)
    );
  }, [events, activeCategories]);

  // Generate calendar data
  const calendarMonth = useMemo(
    () =>
      generateCalendarMonth(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        filteredEvents,
        todayISO
      ),
    [currentDate, filteredEvents, todayISO]
  );

  // Generate week days for week view
  const weekStart = useMemo(() => getStartOfWeek(currentDate), [currentDate]);
  const weekDays = useMemo(
    () => generateWeekDays(weekStart, filteredEvents, todayISO),
    [weekStart, filteredEvents, todayISO]
  );

  // Get list of events for list view (all events, upcoming first then past)
  const listEvents = useMemo(() => {
    // Events that have not ended yet, ascending; then past events, most recent first
    const upcoming = filteredEvents.filter(event => !isEventPast(event, todayISO));
    const past = filteredEvents.filter(event => isEventPast(event, todayISO));

    return [
      ...sortEventsByDate(upcoming, true),
      ...sortEventsByDate(past, false),
    ];
  }, [filteredEvents, todayISO]);

  // Build category filters
  const categoryFilters = useMemo((): CategoryFilter[] => {
    const categories: (EventCategory | 'all')[] = ['all', 'conference', 'meetup', 'workshop', 'general'];

    // Only include categories that have events
    const categoriesWithEvents = new Set(events.map(e => e.category));

    return categories
      .filter(cat => cat === 'all' || categoriesWithEvents.has(cat))
      .map(category => ({
        category,
        label: category === 'all' ? 'All Events' : CATEGORY_LABELS[category],
        color: category === 'all' ? '#6b7280' : CATEGORY_COLORS[category],
        isActive: activeCategories.has(category),
      }));
  }, [events, activeCategories]);

  // Navigation actions
  const goToToday = useCallback(() => {
    setNavigatedDate(null);
  }, []);

  const goToNextMonth = useCallback(() => {
    setNavigatedDate(addMonths(currentDate, 1));
  }, [currentDate]);

  const goToPrevMonth = useCallback(() => {
    setNavigatedDate(addMonths(currentDate, -1));
  }, [currentDate]);

  const goToNextWeek = useCallback(() => {
    setNavigatedDate(addWeeks(currentDate, 1));
  }, [currentDate]);

  const goToPrevWeek = useCallback(() => {
    setNavigatedDate(addWeeks(currentDate, -1));
  }, [currentDate]);

  const setView = useCallback((view: CalendarView) => {
    setCurrentView(view);
  }, []);

  // Modal actions
  const openModal = useCallback((event: UnifiedEvent) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    // Delay clearing selected event for animation
    setTimeout(() => setSelectedEvent(null), 200);
  }, []);

  // Category filter actions
  const toggleCategory = useCallback((category: EventCategory | 'all') => {
    setActiveCategories(prev => {
      const next = new Set(prev);

      if (category === 'all') {
        // If clicking "all", clear other filters and set to all
        return new Set(['all']);
      }

      // Remove "all" if it was active
      next.delete('all');

      if (next.has(category)) {
        next.delete(category);
        // If no categories left, default to "all"
        if (next.size === 0) {
          return new Set(['all']);
        }
      } else {
        next.add(category);
      }

      return next;
    });
  }, []);

  return {
    currentDate,
    todayISO,
    currentView,
    selectedEvent,
    isModalOpen,
    calendarMonth,
    weekDays,
    listEvents,
    filteredEvents,
    categoryFilters,
    activeCategories,
    goToToday,
    goToNextMonth,
    goToPrevMonth,
    goToNextWeek,
    goToPrevWeek,
    setView,
    setSelectedEvent,
    openModal,
    closeModal,
    toggleCategory,
    setActiveCategories,
  };
}
