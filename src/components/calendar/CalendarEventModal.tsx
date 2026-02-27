"use client";

import { useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { UnifiedEvent, CATEGORY_COLORS, CATEGORY_LABELS } from '@/types/calendar';

interface CalendarEventModalProps {
  event: UnifiedEvent | null;
  isOpen: boolean;
  onClose: () => void;
}

export function CalendarEventModal({ event, isOpen, onClose }: CalendarEventModalProps) {
  // Handle escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleKeyDown]);

  if (!event) return null;

  const isPast = event.status === 'past';

  return (
    <>
      {/* Backdrop */}
      <div
        className={`
          fixed inset-0 bg-black/50 z-50 transition-opacity duration-200
          ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={`
          fixed inset-4 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2
          sm:max-w-lg sm:w-full z-50
          bg-white rounded-xl shadow-2xl overflow-hidden
          transition-all duration-300 ease-out
          ${isOpen
            ? 'opacity-100 scale-100'
            : 'opacity-0 scale-95 pointer-events-none'
          }
        `}
      >
        {/* Header with image */}
        {event.imageUrl && (
          <div className="relative h-40 sm:h-48 w-full">
            <Image
              src={event.imageUrl}
              alt={event.title}
              fill
              className="object-cover"
              unoptimized={event.source === 'admin' || event.source === 'meetup.com'}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 p-2 rounded-full bg-black/20 hover:bg-black/40
                text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Category badge over image */}
            <div className="absolute bottom-3 left-4">
              <span
                className="inline-flex items-center px-2.5 py-1 rounded text-xs font-semibold"
                style={{
                  backgroundColor: CATEGORY_COLORS[event.category],
                  color: 'white',
                }}
              >
                {CATEGORY_LABELS[event.category]}
              </span>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="p-4 sm:p-6 max-h-[60vh] overflow-y-auto">
          {/* Header without image */}
          {!event.imageUrl && (
            <div className="flex items-start justify-between mb-4">
              <span
                className="inline-flex items-center px-2.5 py-1 rounded text-xs font-semibold"
                style={{
                  backgroundColor: `${CATEGORY_COLORS[event.category]}20`,
                  color: CATEGORY_COLORS[event.category],
                }}
              >
                {CATEGORY_LABELS[event.category]}
              </span>
              <button
                onClick={onClose}
                className="p-1 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          )}

          {/* Title */}
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            {event.title}
          </h2>

          {/* Date & Time */}
          <div className="flex items-center gap-2 text-gray-600 mb-2">
            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>
              {event.dayOfWeek}, {event.dayOfMonth} {event.monthLong} {event.year}
            </span>
          </div>

          <div className="flex items-center gap-2 text-gray-600 mb-2">
            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>
              {event.startTimeDisplay}
              {event.endTimeDisplay && ` - ${event.endTimeDisplay}`}
            </span>
          </div>

          {/* Location */}
          {event.location && (
            <div className="flex items-center gap-2 text-gray-600 mb-4">
              <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>
                {event.location}
                {event.locationUrl && (
                  <a
                    href={event.locationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-[#c75b4a] hover:underline"
                  >
                    (map)
                  </a>
                )}
              </span>
            </div>
          )}

          {/* Description */}
          <div className="text-gray-700 text-sm leading-relaxed mb-6 whitespace-pre-line">
            {event.description}
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            {/* View event page (only for events that have dedicated local pages) */}
            {event.source !== 'admin' && event.source !== 'meetup.com' && (
              <Link
                href={event.href}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5
                  bg-[#c75b4a] text-white font-medium rounded-lg
                  hover:bg-[#b54a3a] transition-colors"
              >
                View Event
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            )}

            {/* Signup link (for upcoming events) */}
            {!isPast && event.signupLink && (
              <a
                href={event.signupLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5
                  font-medium rounded-lg transition-colors
                  ${event.source === 'admin' || event.source === 'meetup.com'
                    ? 'bg-[#c75b4a] text-white hover:bg-[#b54a3a]'
                    : 'border-2 border-[#c75b4a] text-[#c75b4a] hover:bg-[#c75b4a]/10'
                  }`}
              >
                Sign Up
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>

          {/* Calendar links */}
          <div className="mt-4 pt-4 border-t border-gray-100">
            <p className="text-xs text-gray-500 mb-2">Add to calendar:</p>
            <div className="flex gap-3">
              {event.googleCalendarUrl && (
                <a
                  href={event.googleCalendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#c75b4a] hover:underline"
                >
                  Google Calendar
                </a>
              )}
              {event.icsUrl && (
                <a
                  href={event.icsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#c75b4a] hover:underline"
                >
                  ICS / Outlook
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
