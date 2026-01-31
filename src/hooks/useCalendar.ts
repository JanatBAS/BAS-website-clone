"use client";

import { useState, useCallback, useMemo } from 'react';
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
  getEventsForDateRange,
  sortEventsByDate,
} from '@/lib/calendar-utils';

interface UseCalendarOptions {
  events: UnifiedEvent[];
  initialView?: CalendarView;
  initialDate?: Date;
}

interface UseCalendarReturn {
  // Current state
  currentDate: Date;
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

export function useCalendar({
  events,
  initialView = 'month',
  initialDate = new Date(),
}: UseCalendarOptions): UseCalendarReturn {
  const [currentDate, setCurrentDate] = useState(initialDate);
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
        filteredEvents
      ),
    [currentDate, filteredEvents]
  );

  // Generate week days for week view
  const weekStart = useMemo(() => getStartOfWeek(currentDate), [currentDate]);
  const weekDays = useMemo(
    () => generateWeekDays(weekStart, filteredEvents),
    [weekStart, filteredEvents]
  );

  // Get list of events for list view (all events, upcoming first then past)
  const listEvents = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Get events from today onwards, sorted ascending
    const upcoming = filteredEvents.filter(event => {
      const eventDate = new Date(event.dateISO + 'T00:00:00');
      return eventDate >= today;
    });

    // Get all past events, sorted descending (most recent first)
    const past = filteredEvents.filter(event => {
      const eventDate = new Date(event.dateISO + 'T00:00:00');
      return eventDate < today;
    });

    return [
      ...sortEventsByDate(upcoming, true),
      ...sortEventsByDate(past, false),
    ];
  }, [filteredEvents]);

  // Build category filters
  const categoryFilters = useMemo((): CategoryFilter[] => {
    const categories: (EventCategory | 'all')[] = ['all', 'roadshow', 'meetup', 'conference', 'workshop', 'general'];

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
    setCurrentDate(new Date());
  }, []);

  const goToNextMonth = useCallback(() => {
    setCurrentDate(prev => addMonths(prev, 1));
  }, []);

  const goToPrevMonth = useCallback(() => {
    setCurrentDate(prev => addMonths(prev, -1));
  }, []);

  const goToNextWeek = useCallback(() => {
    setCurrentDate(prev => addWeeks(prev, 1));
  }, []);

  const goToPrevWeek = useCallback(() => {
    setCurrentDate(prev => addWeeks(prev, -1));
  }, []);

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
