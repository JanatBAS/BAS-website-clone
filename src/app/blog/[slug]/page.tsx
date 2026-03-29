import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import FooterSimple from '@/components/FooterSimple';
import { getAdminPostBySlug } from '@/lib/blob-store';

export const revalidate = 300;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function AdminBlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getAdminPostBySlug(slug);

  if (!post) notFound();

  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-white">
        {/* Featured Image Banner — uses plain img to support arbitrary hosts */}
        {post.imageUrl && (
          <div className="relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.imageUrl}
              alt={post.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white uppercase tracking-wider max-w-4xl">
                {post.title}
              </h1>
              <div className="mt-4 text-white/90 text-sm">{post.date}</div>
              <div className="mt-1 text-white/90 text-sm">
                <Link
                  href={`/bitcoin-association-switzerland?author=${post.authorId}`}
                  className="hover:underline"
                >
                  {post.author}
                </Link>
              </div>
            </div>
          </div>
        )}

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header when no featured image */}
          {!post.imageUrl && (
            <header className="mb-8">
              <div className="text-sm text-[#8b7355] mb-3">{post.date}</div>
              <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 tracking-wide mb-4">
                {post.title}
              </h1>
              <div className="text-sm text-gray-600">
                <Link
                  href={`/bitcoin-association-switzerland?author=${post.authorId}`}
                  className="hover:text-[#c75b4a]"
                >
                  {post.author}
                </Link>
              </div>
            </header>
          )}

          {/* Post content */}
          <div
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-[#c75b4a] prose-a:no-underline hover:prose-a:underline prose-li:text-gray-700"
            dangerouslySetInnerHTML={{ __html: post.htmlContent }}
          />

          {/* Tags — plain text (no links) since admin tags may not have matching pages */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-10 pt-6 border-t border-gray-200">
              <span className="text-sm text-gray-600">Tagged: </span>
              <span className="text-sm text-[#c75b4a]">{post.tags.join(', ')}</span>
            </div>
          )}

          {/* Back to blog link */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <Link
              href="/bitcoin-association-switzerland"
              className="text-sm text-[#c75b4a] hover:underline"
            >
              &larr; Back to all posts
            </Link>
          </div>
        </article>
      </main>
      <FooterSimple />
    </>
  );
}
