'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminNav from '@/components/admin/AdminNav';

const authors = [
  { name: 'Phil Lojacono', id: '672bdb3ae0672c1501f39ce8' },
  { name: 'Roger Darin', id: '54edd73ae4b04709779918e4' },
  { name: 'Luzius Meisser', id: '5a9907f3e4966b72996b9c31' },
  { name: 'Lucas Betschart', id: '5895fa2e725e2525b0696fd4' },
];

export default function NewPostPage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [tagsInput, setTagsInput] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSaving(true);
    setError('');

    const form = new FormData(e.currentTarget);
    const authorIndex = parseInt(form.get('authorIndex') as string);
    const author = authors[authorIndex] || authors[0];

    const tags = tagsInput
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    const body = {
      title: form.get('title'),
      author: author.name,
      authorId: author.id,
      date: form.get('date'),
      excerpt: form.get('excerpt'),
      htmlContent: form.get('htmlContent'),
      category: form.get('category') || undefined,
      tags: tags.length ? tags : undefined,
      imageUrl: form.get('imageUrl') || undefined,
    };

    const res = await fetch('/api/admin/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (res.ok) {
      router.push('/admin/posts');
    } else {
      const data = await res.json();
      setError(data.error || 'Failed to create post');
      setSaving(false);
    }
  };

  const inputClass = 'w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#2a9d8f] focus:border-transparent text-sm';
  const labelClass = 'block text-sm font-medium text-gray-300 mb-1';

  return (
    <>
      <AdminNav />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold mb-6">New Blog Post</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className={labelClass}>Title *</label>
            <input name="title" required className={inputClass} placeholder="Article title" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Author *</label>
              <select name="authorIndex" required className={inputClass}>
                {authors.map((a, i) => (
                  <option key={a.id} value={i}>{a.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelClass}>Date * (e.g. &quot;20 February 2026&quot;)</label>
              <input name="date" required className={inputClass} placeholder="20 February 2026" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Category</label>
              <input name="category" className={inputClass} placeholder="Announcement" />
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
            <input name="imageUrl" type="url" className={inputClass} placeholder="https://..." />
          </div>

          <div>
            <label className={labelClass}>Excerpt *</label>
            <textarea name="excerpt" required rows={3} className={inputClass} placeholder="Short summary shown in listings..." />
          </div>

          <div>
            <label className={labelClass}>Content (HTML) *</label>
            <textarea name="htmlContent" required rows={12} className={inputClass + ' font-mono'} placeholder="<p>Article content...</p>" />
          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              disabled={saving}
              className="px-4 py-2 bg-[#2a9d8f] hover:bg-[#238b7f] disabled:opacity-50 text-white text-sm font-medium rounded-lg transition-colors"
            >
              {saving ? 'Creating...' : 'Create Post'}
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
      </div>
    </>
  );
}
