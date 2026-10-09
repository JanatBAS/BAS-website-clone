import Link from 'next/link';
import AdminPostsList from '@/components/admin/AdminPostsList';
import { getAdminPosts } from '@/lib/blob-store';

export const dynamic = 'force-dynamic';

export default async function AdminPostsPage() {
  const posts = await getAdminPosts();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Blog Posts</h1>
        <Link
          href="/admin/posts/new"
          className="px-4 py-2 bg-brand-teal hover:bg-brand-teal-dark text-white text-sm font-medium rounded-lg transition-colors"
        >
          New Post
        </Link>
      </div>
      <AdminPostsList posts={posts} />
    </div>
  );
}
