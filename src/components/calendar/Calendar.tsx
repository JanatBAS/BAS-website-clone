"use client";

import { useCallback, useState, useEffect, useRef } from 'react';
import { UnifiedEvent, CalendarDay as CalendarDayType } from '@/types/calendar';
import { useCalendar } from '@/hooks/useCalendar';
import { CalendarHeader } from './CalendarHeader';
import { CalendarFilters } from './CalendarFilters';
import { CalendarGrid } from './CalendarGrid';
import { CalendarWeekView } from './CalendarWeekView';
import { CalendarListView } from './CalendarListView';
import { CalendarEventModal } from './CalendarEventModal';

interface CalendarProps {
  events: UnifiedEvent[];
}

export function Calendar({ events }: CalendarProps) {
  const {
    currentDate,
    currentView,
    selectedEvent,
    isModalOpen,
    calendarMonth,
    weekDays,
    listEvents,
    categoryFilters,
    goToToday,
    goToNextMonth,
    goToPrevMonth,
    goToNextWeek,
    goToPrevWeek,
    setView,
    openModal,
    closeModal,
    toggleCategory,
  } = useCalendar({ events });

  // Track swipe gestures for mobile
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;

    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;

    const deltaX = touchEndX - touchStartX.current;
    const deltaY = touchEndY - touchStartY.current;

    // Only trigger if horizontal swipe is dominant
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        // Swipe right - go to previous
        if (currentView === 'week') {
          goToPrevWeek();
        } else if (currentView === 'month') {
          goToPrevMonth();
        }
      } else {
        // Swipe left - go to next
        if (currentView === 'week') {
          goToNextWeek();
        } else if (currentView === 'month') {
          goToNextMonth();
        }
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
  }, [currentView, goToPrevWeek, goToNextWeek, goToPrevMonth, goToNextMonth]);

  // Handle day click (shows first event or all events for that day)
  const handleDayClick = useCallback((day: CalendarDayType) => {
    if (day.events.length === 1) {
      openModal(day.events[0]);
    } else if (day.events.length > 1) {
      // For multiple events, open the first one
      // In a full implementation, you might show a popover with all events
      openModal(day.events[0]);
    }
  }, [openModal]);

  // Determine navigation handlers based on current view
  const handlePrev = currentView === 'week' ? goToPrevWeek : goToPrevMonth;
  const handleNext = currentView === 'week' ? goToNextWeek : goToNextMonth;

  return (
    <div
      ref={containerRef}
      className="w-full"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Header with navigation and view toggle */}
      <CalendarHeader
        currentDate={currentDate}
        currentView={currentView}
        onPrev={handlePrev}
        onNext={handleNext}
        onToday={goToToday}
        onViewChange={setView}
      />

      {/* Category filters */}
      <CalendarFilters
        filters={categoryFilters}
        onToggle={toggleCategory}
      />

      {/* Calendar view */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {currentView === 'month' && (
          <CalendarGrid
            month={calendarMonth}
            onDayClick={handleDayClick}
            onEventClick={openModal}
          />
        )}

        {currentView === 'week' && (
          <div className="p-4">
            <CalendarWeekView
              days={weekDays}
              onEventClick={openModal}
            />
          </div>
        )}

        {currentView === 'list' && (
          <div className="p-4">
            <CalendarListView
              events={listEvents}
              onEventClick={openModal}
            />
          </div>
        )}
      </div>

      {/* Event detail modal */}
      <CalendarEventModal
        event={selectedEvent}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
}
