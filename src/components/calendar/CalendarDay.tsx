"use client";

import { CalendarDay as CalendarDayType, UnifiedEvent, CATEGORY_COLORS } from '@/types/calendar';

interface CalendarDayProps {
  day: CalendarDayType;
  onDayClick: (day: CalendarDayType) => void;
  onEventClick: (event: UnifiedEvent) => void;
}

export function CalendarDay({ day, onDayClick, onEventClick }: CalendarDayProps) {
  const hasEvents = day.events.length > 0;

  return (
    <div
      onClick={() => hasEvents && onDayClick(day)}
      className={`
        min-h-[80px] sm:min-h-[100px] p-1 sm:p-2 border-b border-r border-gray-100
        transition-colors duration-200
        ${day.isCurrentMonth ? 'bg-white' : 'bg-gray-50'}
        ${hasEvents ? 'cursor-pointer hover:bg-gray-50' : ''}
      `}
    >
      {/* Day number */}
      <div className="flex items-center justify-center mb-1">
        <span
          className={`
            w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full text-sm
            transition-all duration-300
            ${day.isToday
              ? 'bg-[#c75b4a] text-white font-semibold calendar-today-pulse'
              : day.isCurrentMonth
                ? 'text-gray-900'
                : 'text-gray-400'
            }
          `}
        >
          {day.dayOfMonth}
        </span>
      </div>

      {/* Event indicators */}
      {hasEvents && (
        <div className="space-y-1">
          {/* Show event dots on mobile */}
          <div className="flex justify-center gap-1 sm:hidden">
            {day.events.slice(0, 3).map((event) => (
              <span
                key={event.id}
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: CATEGORY_COLORS[event.category] }}
              />
            ))}
            {day.events.length > 3 && (
              <span className="text-[10px] text-gray-500">+{day.events.length - 3}</span>
            )}
          </div>

          {/* Show event pills on desktop */}
          <div className="hidden sm:block space-y-1">
            {day.events.slice(0, 2).map((event) => (
              <button
                key={event.id}
                onClick={(e) => {
                  e.stopPropagation();
                  onEventClick(event);
                }}
                className="w-full text-left px-1.5 py-0.5 rounded text-[11px] font-medium truncate
                  transition-all duration-200 hover:opacity-80 hover:scale-[1.02]"
                style={{
                  backgroundColor: `${CATEGORY_COLORS[event.category]}20`,
                  color: CATEGORY_COLORS[event.category],
                  borderLeft: `2px solid ${CATEGORY_COLORS[event.category]}`,
                }}
              >
                {event.title}
              </button>
            ))}
            {day.events.length > 2 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onDayClick(day);
                }}
                className="w-full text-center text-[10px] text-gray-500 hover:text-gray-700"
              >
                +{day.events.length - 2} more
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
