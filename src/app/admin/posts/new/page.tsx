'use client';

import AdminNav from '@/components/admin/AdminNav';
import PostForm from '@/components/admin/PostForm';

export default function NewPostPage() {
  return (
    <>
      <AdminNav />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold mb-6">New Blog Post</h1>
        <PostForm mode="create" />
      </div>
    </>
  );
}
