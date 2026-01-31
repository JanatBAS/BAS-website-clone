"use client";

import { CalendarDay as CalendarDayType, UnifiedEvent, CATEGORY_COLORS } from '@/types/calendar';

interface CalendarWeekViewProps {
  days: CalendarDayType[];
  onEventClick: (event: UnifiedEvent) => void;
}

export function CalendarWeekView({ days, onEventClick }: CalendarWeekViewProps) {
  return (
    <div className="calendar-view-transition">
      {/* Week grid */}
      <div className="grid grid-cols-7 gap-2 sm:gap-4">
        {days.map((day, index) => {
          const dayName = day.date.toLocaleDateString('en-US', { weekday: 'short' });
          const hasEvents = day.events.length > 0;

          return (
            <div
              key={index}
              className={`
                min-h-[200px] sm:min-h-[300px] rounded-lg border
                ${day.isToday ? 'border-[#c75b4a] bg-[#c75b4a]/5' : 'border-gray-200 bg-white'}
              `}
            >
              {/* Day header */}
              <div
                className={`
                  p-2 sm:p-3 border-b text-center
                  ${day.isToday ? 'border-[#c75b4a]/20' : 'border-gray-100'}
                `}
              >
                <div className="text-xs text-gray-500 uppercase tracking-wider">
                  {dayName}
                </div>
                <div
                  className={`
                    mt-1 w-8 h-8 mx-auto flex items-center justify-center rounded-full text-lg font-semibold
                    ${day.isToday
                      ? 'bg-[#c75b4a] text-white calendar-today-pulse'
                      : 'text-gray-900'
                    }
                  `}
                >
                  {day.dayOfMonth}
                </div>
              </div>

              {/* Events */}
              <div className="p-2 space-y-2">
                {day.events.map((event) => (
                  <button
                    key={event.id}
                    onClick={() => onEventClick(event)}
                    className="w-full text-left p-2 rounded-lg transition-all duration-200
                      hover:scale-[1.02] hover:shadow-md"
                    style={{
                      backgroundColor: `${CATEGORY_COLORS[event.category]}15`,
                      borderLeft: `3px solid ${CATEGORY_COLORS[event.category]}`,
                    }}
                  >
                    <div
                      className="text-xs font-medium truncate"
                      style={{ color: CATEGORY_COLORS[event.category] }}
                    >
                      {event.startTimeDisplay}
                    </div>
                    <div className="text-sm font-medium text-gray-900 truncate mt-0.5">
                      {event.title}
                    </div>
                    {event.location && (
                      <div className="text-xs text-gray-500 truncate mt-0.5">
                        {event.location}
                      </div>
                    )}
                  </button>
                ))}

                {!hasEvents && (
                  <div className="text-center text-sm text-gray-400 py-4">
                    No events
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
