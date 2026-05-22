'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import type { AdminEvent, RecurrenceFrequency } from '@/types/admin';
import type { EventCategory } from '@/types/calendar';

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
  const [isRecurring, setIsRecurring] = useState(Boolean(initialData?.recurrence));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSaving(true);
    setError('');

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

    const url = mode === 'edit' ? `/api/admin/events?id=${initialData!.id}` : '/api/admin/events';
    const method = mode === 'edit' ? 'PUT' : 'POST';

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        router.push('/admin/events');
        return;
      }

      let apiError = '';
      try {
        const data = await res.json();
        apiError = data.error || '';
      } catch {
        // Ignore non-JSON error responses and use fallback message below.
      }

      setError(apiError || `Failed to ${mode === 'edit' ? 'update' : 'create'} event`);
    } catch {
      setError(`Failed to ${mode === 'edit' ? 'update' : 'create'} event`);
    } finally {
      setSaving(false);
    }
  };

  const inputClass = 'w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#2a9d8f] focus:border-transparent text-sm';
  const labelClass = 'block text-sm font-medium text-gray-300 mb-1';

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {isDuplicate && (
        <div className="rounded-lg border border-[#2a9d8f]/40 bg-[#2a9d8f]/10 px-4 py-3 text-sm text-gray-200">
          This form is pre-filled from the selected event. Saving it will create a separate new event.
        </div>
      )}

      <div>
        <label className={labelClass}>Title *</label>
        <input name="title" required defaultValue={initialData?.title} className={inputClass} placeholder="Bitcoin Meetup Zurich" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className={labelClass}>Start Date *</label>
          <input name="dateISO" type="date" required defaultValue={initialData?.dateISO} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>End Date</label>
          <input name="endDateISO" type="date" defaultValue={initialData?.endDateISO} className={inputClass} />
          <p className="mt-1 text-xs text-gray-500">Leave empty for one-day events.</p>
        </div>
        <div>
          <label className={labelClass}>Category *</label>
          <select name="category" required defaultValue={initialData?.category || 'meetup'} className={inputClass}>
            {categories.map((c) => (
              <option key={c.value} value={c.value}>{c.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Start Time *</label>
          <input name="startTime" type="time" required defaultValue={initialData?.startTime} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>End Time</label>
          <input name="endTime" type="time" defaultValue={initialData?.endTime} className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Location</label>
          <input name="location" defaultValue={initialData?.location} className={inputClass} placeholder="Zurich" />
        </div>
        <div>
          <label className={labelClass}>Location URL</label>
          <input name="locationUrl" type="url" defaultValue={initialData?.locationUrl} className={inputClass} placeholder="https://maps.google.com/..." />
        </div>
      </div>

      <div>
        <label className={labelClass}>Image URL</label>
        <input name="imageUrl" type="url" defaultValue={initialData?.imageUrl} className={inputClass} placeholder="https://..." />
      </div>

      <div>
        <label className={labelClass}>Signup Link</label>
        <input name="signupLink" type="url" defaultValue={initialData?.signupLink} className={inputClass} placeholder="https://lu.ma/..." />
      </div>

      <div className="border border-gray-700 rounded-lg p-4 space-y-3">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={isRecurring}
            onChange={(e) => setIsRecurring(e.target.checked)}
            className="rounded border-gray-600 bg-gray-900 text-[#2a9d8f] focus:ring-[#2a9d8f]"
          />
          <span className="text-sm font-medium text-gray-300">This is a recurring event</span>
        </label>

        {isRecurring && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            <div>
              <label className={labelClass}>Frequency</label>
              <select
                name="recurrenceFrequency"
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
              <label className={labelClass}>Recurrence End Date (optional)</label>
              <input
                name="recurrenceEndDate"
                type="date"
                defaultValue={initialData?.recurrence?.endDate}
                className={inputClass}
              />
            </div>
          </div>
        )}
      </div>

      <div>
        <label className={labelClass}>Description *</label>
        <textarea name="description" required rows={5} defaultValue={initialData?.description} className={inputClass} placeholder="Event description..." />
      </div>

      {error && <p className="text-red-400 text-sm">{error}</p>}

      <div className="flex gap-3 pt-2">
        <button
          type="submit"
          disabled={saving}
          className="px-4 py-2 bg-[#2a9d8f] hover:bg-[#238b7f] disabled:opacity-50 text-white text-sm font-medium rounded-lg transition-colors"
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
