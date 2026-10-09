import Image from "next/image";
import Link from "next/link";
import PostComments from "@/components/blog/PostComments";
import ShareButton from "@/components/ShareButton";
import { authorHref, categoryHref, tagHref, type BlogPostPage } from "@/data/blog-posts";

export interface BlogPostComment {
  /** Commenter name; omitted for anonymous comments. */
  author?: string;
  /** Commenter website, linked from the name. */
  authorUrl?: string;
  /** When the comment was written, as shown on the original site (e.g. "12 years ago"). */
  date: string;
  likes?: number;
  /** The comment was still awaiting moderation on the original site. */
  pending?: boolean;
  body: React.ReactNode;
}

interface BlogPostLayoutProps {
  post: BlogPostPage;
  /** Comments carried over from the original site; when set, a comments section is shown, even if empty. */
  comments?: BlogPostComment[];
  children: React.ReactNode;
}

/** Author link followed by the post's category link. */
function Byline({ post, linkClassName }: { post: BlogPostPage; linkClassName: string }) {
  return (
    <>
      <Link href={authorHref(post.authorId)} className={linkClassName}>
        {post.author}
      </Link>
      {post.category && (
        <>
          <span className="mx-2 opacity-60">/</span>
          <Link href={categoryHref(post.category)} className={linkClassName}>
            {post.category}
          </Link>
        </>
      )}
    </>
  );
}

export default function BlogPostLayout({ post, comments, children }: BlogPostLayoutProps) {
  const date = (
    <Link href={post.href} className="hover:underline">
      {post.date}
    </Link>
  );
  const titleLink = post.titleHref && (
    <>
      {" "}
      <a
        href={post.titleHref}
        target="_blank"
        rel="noopener noreferrer"
        className="text-brand hover:underline"
      >
        &rarr;
      </a>
    </>
  );

  return (
    <main className="pt-20 min-h-screen bg-white">
      {/* Featured Image Banner (if present) */}
      {post.banner && (
        <div className="relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
          <Image
            src={post.banner}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white uppercase tracking-wider max-w-4xl">
              {post.title}
              {titleLink}
            </h1>
            <div className="mt-4 text-white/90 text-sm">
              {date}
            </div>
            <div className="mt-1 text-white/90 text-sm">
              <Byline post={post} linkClassName="hover:underline" />
            </div>
          </div>
        </div>
      )}

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Post Header (when no featured image) */}
        {!post.banner && (
          <header className="mb-8">
            <div className="text-sm text-taupe mb-3">
              {date}
            </div>
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 tracking-wide mb-4">
              {post.title}
              {titleLink}
            </h1>
            <div className="text-sm text-gray-600">
              <Byline post={post} linkClassName="hover:text-brand" />
            </div>
          </header>
        )}

        {/* Post Content */}
        <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-brand prose-a:no-underline hover:prose-a:underline prose-li:text-gray-700">
          {children}
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-10 pt-6 border-t border-gray-200">
            <span className="text-sm text-gray-600">Tagged: </span>
            {post.tags.map((tag, index, tags) => (
              <span key={tag}>
                <Link
                  href={tagHref(tag)}
                  className="text-sm text-brand hover:underline"
                >
                  {tag}
                </Link>
                {index < tags.length - 1 && ", "}
              </span>
            ))}
          </div>
        )}

        {/* Share */}
        <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
          <ShareButton title={post.title} placement="above" />
        </div>

        {/* Comments */}
        {comments && <PostComments comments={comments} />}

        {/* Post Navigation */}
        {(post.newerPost || post.olderPost) && (
          <nav className="mt-12 pt-8 border-t border-gray-200 flex justify-between items-start">
            <div className="text-left">
              {post.newerPost && (
                <>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                    Newer Post
                  </div>
                  <Link
                    href={post.newerPost.href}
                    className="text-brand hover:underline text-sm"
                  >
                    {post.newerPost.title}
                  </Link>
                </>
              )}
            </div>
            <div className="text-right">
              {post.olderPost && (
                <>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                    Older Post
                  </div>
                  <Link
                    href={post.olderPost.href}
                    className="text-brand hover:underline text-sm"
                  >
                    {post.olderPost.title}
                  </Link>
                </>
              )}
            </div>
          </nav>
        )}
      </article>
    </main>
  );
}
