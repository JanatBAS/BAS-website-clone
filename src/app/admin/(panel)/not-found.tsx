import Link from 'next/link';

/** Shown inside the admin panel when an edited or duplicated item no longer exists. */
export default function AdminNotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-4">
      <h1 className="text-2xl font-bold">Not found</h1>
      <p className="text-gray-400 text-sm">This item does not exist. It may have been deleted.</p>
      <div className="flex gap-4 text-sm">
        <Link href="/admin/events" className="text-brand-teal hover:underline">
          Back to events
        </Link>
        <Link href="/admin/posts" className="text-brand-teal hover:underline">
          Back to posts
        </Link>
      </div>
    </div>
  );
}
