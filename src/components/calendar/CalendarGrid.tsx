"use client";

import { CalendarMonth, CalendarDay as CalendarDayType, UnifiedEvent } from '@/types/calendar';
import { getWeekDays } from '@/lib/calendar-utils';
import { CalendarDay } from './CalendarDay';

interface CalendarGridProps {
  month: CalendarMonth;
  onDayClick: (day: CalendarDayType) => void;
  onEventClick: (event: UnifiedEvent) => void;
}

export function CalendarGrid({ month, onDayClick, onEventClick }: CalendarGridProps) {
  const weekDayNames = getWeekDays('short');

  return (
    <div className="calendar-view-transition">
      {/* Week day headers */}
      <div className="grid grid-cols-7 border-b border-gray-200">
        {weekDayNames.map((dayName) => (
          <div
            key={dayName}
            className="py-2 sm:py-3 text-center text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider"
          >
            <span className="hidden sm:inline">{dayName}</span>
            <span className="sm:hidden">{dayName.charAt(0)}</span>
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="border-l border-t border-gray-100">
        {month.weeks.map((week, weekIndex) => (
          <div key={weekIndex} className="grid grid-cols-7">
            {week.days.map((day, dayIndex) => (
              <CalendarDay
                key={`${weekIndex}-${dayIndex}`}
                day={day}
                onDayClick={onDayClick}
                onEventClick={onEventClick}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
