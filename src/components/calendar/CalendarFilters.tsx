"use client";

import { CategoryFilter, EventCategory } from '@/types/calendar';

interface CalendarFiltersProps {
  filters: CategoryFilter[];
  onToggle: (category: EventCategory | 'all') => void;
}

export function CalendarFilters({ filters, onToggle }: CalendarFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {filters.map((filter) => (
        <button
          key={filter.category}
          onClick={() => onToggle(filter.category)}
          className={`
            inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium
            transition-all duration-200 ease-out
            ${filter.isActive
              ? 'shadow-md scale-105'
              : 'hover:scale-102 opacity-60 hover:opacity-100'
            }
          `}
          style={{
            backgroundColor: filter.isActive ? `${filter.color}20` : 'transparent',
            color: filter.color,
            border: `1.5px solid ${filter.isActive ? filter.color : `${filter.color}50`}`,
          }}
        >
          {/* Color dot */}
          <span
            className={`
              w-2 h-2 rounded-full transition-transform duration-200
              ${filter.isActive ? 'scale-125' : 'scale-100'}
            `}
            style={{ backgroundColor: filter.color }}
          />
          {filter.label}
          {filter.isActive && (
            <svg
              className="w-3.5 h-3.5 ml-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </button>
      ))}
    </div>
  );
}
