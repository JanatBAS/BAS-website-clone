'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import type { AdminBlogPost } from '@/types/admin';

const knownAuthors: Record<string, string> = {
  'Phil Lojacono': '672bdb3ae0672c1501f39ce8',
  'Roger Darin': '54edd73ae4b04709779918e4',
  'Luzius Meisser': '5a9907f3e4966b72996b9c31',
  'Lucas Betschart': '5895fa2e725e2525b0696fd4',
};

interface PostFormProps {
  mode: 'create' | 'edit';
  initialData?: AdminBlogPost;
}

export default function PostForm({ mode, initialData }: PostFormProps) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [tagsInput, setTagsInput] = useState(
    initialData?.tags?.join(', ') || ''
  );
  const [authorName, setAuthorName] = useState(initialData?.author || '');

  const initialDate = initialData
    ? new Date(initialData.timestamp).toISOString().split('T')[0]
    : '';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSaving(true);
    setError('');

    const form = new FormData(e.currentTarget);
    const name = authorName.trim();
    if (!name) {
      setError('Author name is required');
      setSaving(false);
      return;
    }
    const authorId =
      knownAuthors[name] ||
      (mode === 'edit' && initialData?.author === name
        ? initialData.authorId
        : `custom-${Date.now().toString(36)}`);

    const tags = tagsInput
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    const body = {
      title: form.get('title'),
      author: name,
      authorId,
      date: form.get('date'),
      excerpt: form.get('excerpt'),
      htmlContent: form.get('htmlContent'),
      category: form.get('category') || undefined,
      tags: tags.length ? tags : undefined,
      imageUrl: form.get('imageUrl') || undefined,
    };

    const url =
      mode === 'edit'
        ? `/api/admin/posts?id=${initialData!.id}`
        : '/api/admin/posts';
    const method = mode === 'edit' ? 'PUT' : 'POST';

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        router.push('/admin/posts');
        return;
      }

      let apiError = '';
      try {
        const data = await res.json();
        apiError = data.error || '';
      } catch {
        // Ignore non-JSON error responses and use fallback message below.
      }

      setError(apiError || `Failed to ${mode === 'edit' ? 'update' : 'create'} post`);
    } catch {
      setError(`Failed to ${mode === 'edit' ? 'update' : 'create'} post`);
    } finally {
      setSaving(false);
    }
  };

  const inputClass =
    'w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#2a9d8f] focus:border-transparent text-sm';
  const labelClass = 'block text-sm font-medium text-gray-300 mb-1';

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className={labelClass}>Title *</label>
        <input
          name="title"
          required
          defaultValue={initialData?.title}
          className={inputClass}
          placeholder="Article title"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Author *</label>
          <input
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            list="author-suggestions"
            required
            className={inputClass}
            placeholder="Type or select a name"
          />
          <datalist id="author-suggestions">
            {Object.keys(knownAuthors).map((name) => (
              <option key={name} value={name} />
            ))}
          </datalist>
        </div>
        <div>
          <label className={labelClass}>Date *</label>
          <input
            name="date"
            type="date"
            required
            defaultValue={initialDate}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Category</label>
          <input
            name="category"
            defaultValue={initialData?.category}
            className={inputClass}
            placeholder="Announcement"
          />
        </div>
        <div>
          <label className={labelClass}>Tags (comma-separated)</label>
          <input
            value={tagsInput}
            onChange={(e) => setTagsInput(e.target.value)}
            className={inputClass}
            placeholder="Regulation, Policy"
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>Featured Image URL</label>
        <input
          name="imageUrl"
          type="url"
          defaultValue={initialData?.imageUrl}
          className={inputClass}
          placeholder="https://..."
        />
      </div>

      <div>
        <label className={labelClass}>Excerpt *</label>
        <textarea
          name="excerpt"
          required
          rows={3}
          defaultValue={initialData?.excerpt}
          className={inputClass}
          placeholder="Short summary shown in listings..."
        />
      </div>

      <div>
        <label className={labelClass}>Content (HTML) *</label>
        <textarea
          name="htmlContent"
          required
          rows={12}
          defaultValue={initialData?.htmlContent}
          className={inputClass + ' font-mono'}
          placeholder="<p>Article content...</p>"
        />
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
              : 'Create Post'}
        </button>
        <button
          type="button"
          onClick={() => router.push('/admin/posts')}
          className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium rounded-lg transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
