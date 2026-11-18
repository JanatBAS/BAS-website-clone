'use client';

import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import type { AdminEvent, RecurrenceFrequency } from '@/types/admin';
import type { EventCategory } from '@/types/calendar';
import { apiErrorMessage } from './api-error';

const categories: { value: EventCategory; label: string }[] = [
  { value: 'meetup', label: 'Meetup' },
  { value: 'conference', label: 'Conference' },
  { value: 'workshop', label: 'Workshop' },
  { value: 'general', label: 'General' },
];

interface EventFormProps {
  mode: 'create' | 'edit';
  initialData?: AdminEvent;
  isDuplicate?: boolean;
}

function formString(form: FormData, name: string): string {
  const value = form.get(name);
  return typeof value === 'string' ? value.trim() : '';
}

function optionalFormString(form: FormData, name: string): string | undefined {
  const value = formString(form, name);
  return value || undefined;
}

export default function EventForm({ mode, initialData, isDuplicate = false }: EventFormProps) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [sessionExpired, setSessionExpired] = useState(false);
  const [isRecurring, setIsRecurring] = useState(Boolean(initialData?.recurrence));
  // Set synchronously, so a second submit before the re-render cannot save again.
  const savingRef = useRef(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (savingRef.current) return;
    savingRef.current = true;
    setSaving(true);
    setError('');
    setSessionExpired(false);

    const form = new FormData(e.currentTarget);
    const recurrence = isRecurring
      ? {
          frequency: formString(form, 'recurrenceFrequency') as RecurrenceFrequency,
          endDate: optionalFormString(form, 'recurrenceEndDate'),
        }
      : undefined;

    const body = {
      title: formString(form, 'title'),
      dateISO: formString(form, 'dateISO'),
      endDateISO: optionalFormString(form, 'endDateISO'),
      startTime: formString(form, 'startTime'),
      endTime: optionalFormString(form, 'endTime'),
      location: optionalFormString(form, 'location'),
      locationUrl: optionalFormString(form, 'locationUrl'),
      imageUrl: optionalFormString(form, 'imageUrl'),
      signupLink: optionalFormString(form, 'signupLink'),
      category: formString(form, 'category') as EventCategory,
      description: formString(form, 'description'),
      recurrence,
    };

    const url = mode === 'edit' ? `/api/admin/events?id=${encodeURIComponent(initialData!.id)}` : '/api/admin/events';
    const method = mode === 'edit' ? 'PUT' : 'POST';
    const fallback = `Failed to ${mode === 'edit' ? 'update' : 'create'} event`;

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        // Stay disabled while navigating away so a second click cannot save again.
        router.push('/admin/events');
        return;
      }

      setSessionExpired(res.status === 401);
      setError(await apiErrorMessage(res, fallback));
    } catch {
      setError(fallback);
    }
    savingRef.current = false;
    setSaving(false);
  };

  const inputClass = 'w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent text-sm';
  const labelClass = 'block text-sm font-medium text-gray-300 mb-1';

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {isDuplicate && (
        <div className="rounded-lg border border-brand-teal/40 bg-brand-teal/10 px-4 py-3 text-sm text-gray-200">
          This form is pre-filled from the selected event. Saving it will create a separate new event.
        </div>
      )}

      <div>
        <label htmlFor="event-title" className={labelClass}>Title *</label>
        <input id="event-title" name="title" required defaultValue={initialData?.title} className={inputClass} placeholder="Bitcoin Meetup Zurich" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label htmlFor="event-dateISO" className={labelClass}>Start Date *</label>
          <input id="event-dateISO" name="dateISO" type="date" required defaultValue={initialData?.dateISO} className={inputClass} />
        </div>
        <div>
          <label htmlFor="event-endDateISO" className={labelClass}>End Date</label>
          <input id="event-endDateISO" name="endDateISO" type="date" defaultValue={initialData?.endDateISO} className={inputClass} />
          <p className="mt-1 text-xs text-gray-500">Leave empty for one-day events.</p>
        </div>
        <div>
          <label htmlFor="event-category" className={labelClass}>Category *</label>
          <select id="event-category" name="category" required defaultValue={initialData?.category || 'meetup'} className={inputClass}>
            {categories.map((c) => (
              <option key={c.value} value={c.value}>{c.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="event-startTime" className={labelClass}>Start Time *</label>
          <input id="event-startTime" name="startTime" type="time" required defaultValue={initialData?.startTime} className={inputClass} />
        </div>
        <div>
          <label htmlFor="event-endTime" className={labelClass}>End Time</label>
          <input id="event-endTime" name="endTime" type="time" defaultValue={initialData?.endTime} className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="event-location" className={labelClass}>Location</label>
          <input id="event-location" name="location" defaultValue={initialData?.location} className={inputClass} placeholder="Zurich" />
        </div>
        <div>
          <label htmlFor="event-locationUrl" className={labelClass}>Location URL</label>
          <input id="event-locationUrl" name="locationUrl" type="url" defaultValue={initialData?.locationUrl} className={inputClass} placeholder="https://maps.google.com/..." />
        </div>
      </div>

      <div>
        <label htmlFor="event-imageUrl" className={labelClass}>Image URL</label>
        <input id="event-imageUrl" name="imageUrl" type="text" inputMode="url" defaultValue={initialData?.imageUrl} className={inputClass} placeholder="https://... or /images/..." />
      </div>

      <div>
        <label htmlFor="event-signupLink" className={labelClass}>Signup Link</label>
        <input id="event-signupLink" name="signupLink" type="url" defaultValue={initialData?.signupLink} className={inputClass} placeholder="https://lu.ma/..." />
      </div>

      <div className="border border-gray-700 rounded-lg p-4 space-y-3">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={isRecurring}
            onChange={(e) => setIsRecurring(e.target.checked)}
            className="rounded border-gray-600 bg-gray-900 text-brand-teal focus:ring-brand-teal"
          />
          <span className="text-sm font-medium text-gray-300">This is a recurring event</span>
        </label>

        {/* Hidden rather than unmounted, so unticking and ticking again keeps the chosen values. */}
        <div hidden={!isRecurring} className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
          <div>
            <label htmlFor="event-recurrenceFrequency" className={labelClass}>Frequency</label>
            <select
              id="event-recurrenceFrequency" name="recurrenceFrequency"
              required
              defaultValue={initialData?.recurrence?.frequency || 'weekly'}
              className={inputClass}
            >
              <option value="weekly">Every week</option>
              <option value="biweekly">Every 2 weeks</option>
              <option value="monthly">Same date each month</option>
            </select>
          </div>
          <div>
            <label htmlFor="event-recurrenceEndDate" className={labelClass}>Recurrence End Date (optional)</label>
            <input
              id="event-recurrenceEndDate" name="recurrenceEndDate"
              type="date"
              defaultValue={initialData?.recurrence?.endDate}
              className={inputClass}
            />
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="event-description" className={labelClass}>Description *</label>
        <textarea id="event-description" name="description" required rows={5} defaultValue={initialData?.description} className={inputClass} placeholder="Event description..." />
      </div>

      {error && (
        <p role="alert" className="text-red-400 text-sm">
          {error}
          {sessionExpired && (
            <>
              {' '}
              {/* A new tab keeps what was typed here; save again after signing in. */}
              <a href="/admin/login" target="_blank" rel="noopener" className="underline hover:text-red-300">
                Sign in (opens a new tab)
              </a>
            </>
          )}
        </p>
      )}

      <div className="flex gap-3 pt-2">
        <button
          type="submit"
          disabled={saving}
          className="px-4 py-2 bg-brand-teal hover:bg-brand-teal-dark disabled:opacity-50 text-white text-sm font-medium rounded-lg transition-colors"
        >
          {saving
            ? mode === 'edit'
              ? 'Saving...'
              : 'Creating...'
            : mode === 'edit'
              ? 'Save Changes'
              : isDuplicate
                ? 'Create Duplicate'
                : 'Create Event'}
        </button>
        <button
          type="button"
          onClick={() => router.push('/admin/events')}
          className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium rounded-lg transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
