import { notFound } from 'next/navigation';
import PostForm from '@/components/admin/PostForm';
import { getAdminPostById } from '@/lib/blob-store';

export const dynamic = 'force-dynamic';

export default async function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await getAdminPostById(id);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold mb-6">Edit Blog Post</h1>
      <PostForm mode="edit" initialData={post} />
    </div>
  );
}
