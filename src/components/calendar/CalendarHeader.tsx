"use client";

import { CalendarView } from '@/types/calendar';
import { getMonthYearLabel } from '@/lib/calendar-utils';

interface CalendarHeaderProps {
  currentDate: Date;
  currentView: CalendarView;
  onPrev: () => void;
  onNext: () => void;
  onToday: () => void;
  onViewChange: (view: CalendarView) => void;
}

export function CalendarHeader({
  currentDate,
  currentView,
  onPrev,
  onNext,
  onToday,
  onViewChange,
}: CalendarHeaderProps) {
  const monthYearLabel = getMonthYearLabel(
    currentDate.getFullYear(),
    currentDate.getMonth()
  );

  const views: { key: CalendarView; label: string }[] = [
    { key: 'month', label: 'Month' },
    { key: 'week', label: 'Week' },
    { key: 'list', label: 'List' },
  ];

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
      {/* Navigation */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Prev/Next buttons */}
        <div className="flex items-center gap-1">
          <button
            onClick={onPrev}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label={currentView === 'week' ? 'Previous week' : 'Previous month'}
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={onNext}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label={currentView === 'week' ? 'Next week' : 'Next month'}
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Month/Year label */}
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
          {monthYearLabel}
        </h2>

        {/* Today button */}
        <button
          onClick={onToday}
          className="px-3 py-1.5 text-sm font-medium text-[#c75b4a] border border-[#c75b4a] rounded-lg
            hover:bg-[#c75b4a] hover:text-white transition-colors"
        >
          Today
        </button>
      </div>

      {/* View toggle */}
      <div className="flex items-center bg-gray-100 rounded-lg p-1">
        {views.map((view) => (
          <button
            key={view.key}
            onClick={() => onViewChange(view.key)}
            className={`
              px-3 sm:px-4 py-1.5 text-sm font-medium rounded-md transition-all duration-200
              ${currentView === view.key
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
              }
            `}
          >
            {view.label}
          </button>
        ))}
      </div>
    </div>
  );
}
