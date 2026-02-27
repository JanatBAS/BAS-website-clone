'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminNav from '@/components/admin/AdminNav';
import type { EventCategory } from '@/types/calendar';

const categories: { value: EventCategory; label: string }[] = [
  { value: 'meetup', label: 'Meetup' },
  { value: 'conference', label: 'Conference' },
  { value: 'workshop', label: 'Workshop' },
  { value: 'general', label: 'General' },
];

export default function NewEventPage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [isRecurring, setIsRecurring] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSaving(true);
    setError('');

    const form = new FormData(e.currentTarget);
    const recurrence = isRecurring
      ? {
          frequency: form.get('recurrenceFrequency') as string,
          endDate: (form.get('recurrenceEndDate') as string) || undefined,
        }
      : undefined;

    const body = {
      title: form.get('title'),
      dateISO: form.get('dateISO'),
      startTime: form.get('startTime'),
      endTime: form.get('endTime') || undefined,
      location: form.get('location') || undefined,
      locationUrl: form.get('locationUrl') || undefined,
      imageUrl: form.get('imageUrl') || undefined,
      signupLink: form.get('signupLink') || undefined,
      category: form.get('category'),
      description: form.get('description'),
      recurrence,
    };

    const res = await fetch('/api/admin/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (res.ok) {
      router.push('/admin/events');
    } else {
      const data = await res.json();
      setError(data.error || 'Failed to create event');
      setSaving(false);
    }
  };

  const inputClass = 'w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#2a9d8f] focus:border-transparent text-sm';
  const labelClass = 'block text-sm font-medium text-gray-300 mb-1';

  return (
    <>
      <AdminNav />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold mb-6">New Event</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className={labelClass}>Title *</label>
            <input name="title" required className={inputClass} placeholder="Bitcoin Meetup Zurich" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Date *</label>
              <input name="dateISO" type="date" required className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Category *</label>
              <select name="category" required className={inputClass}>
                {categories.map((c) => (
                  <option key={c.value} value={c.value}>{c.label}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Start Time *</label>
              <input name="startTime" type="time" required className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>End Time</label>
              <input name="endTime" type="time" className={inputClass} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Location</label>
              <input name="location" className={inputClass} placeholder="Zurich" />
            </div>
            <div>
              <label className={labelClass}>Location URL</label>
              <input name="locationUrl" type="url" className={inputClass} placeholder="https://maps.google.com/..." />
            </div>
          </div>

          <div>
            <label className={labelClass}>Image URL</label>
            <input name="imageUrl" type="url" className={inputClass} placeholder="https://..." />
          </div>

          <div>
            <label className={labelClass}>Signup Link</label>
            <input name="signupLink" type="url" className={inputClass} placeholder="https://lu.ma/..." />
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
              <div className="grid grid-cols-2 gap-4 pt-1">
                <div>
                  <label className={labelClass}>Frequency</label>
                  <select name="recurrenceFrequency" required className={inputClass}>
                    <option value="weekly">Every week</option>
                    <option value="biweekly">Every 2 weeks</option>
                    <option value="monthly">Same date each month</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>End Date (optional)</label>
                  <input name="recurrenceEndDate" type="date" className={inputClass} />
                </div>
              </div>
            )}
          </div>

          <div>
            <label className={labelClass}>Description *</label>
            <textarea name="description" required rows={5} className={inputClass} placeholder="Event description..." />
          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              disabled={saving}
              className="px-4 py-2 bg-[#2a9d8f] hover:bg-[#238b7f] disabled:opacity-50 text-white text-sm font-medium rounded-lg transition-colors"
            >
              {saving ? 'Creating...' : 'Create Event'}
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
      </div>
    </>
  );
}
