import Link from "next/link";
import Image from "next/image";
import ShareButton from "@/components/ShareButton";
import { authorHref, categoryHref, tagHref } from "@/data/blog-posts";
import type { BlogPost } from "@/types/blog";

export default function BlogPostCard({ post }: { post: BlogPost }) {
  // Admin-created posts live under /blog/ and have no category or tag pages.
  const isAdminPost = post.href.startsWith("/blog/");

  return (
    <article className="py-8">
      {/* Meta above title */}
      <div className="text-xs text-gray-500 uppercase tracking-wider mb-2 space-y-1">
        <div>
          <Link href={authorHref(post.authorId)} className="hover:text-[#c75b4a]">
            {post.author}
          </Link>
        </div>
        <div>
          <Link href={post.href} className="hover:text-[#c75b4a]">
            {post.date}
          </Link>
        </div>
        {post.category && (
          <div>
            {isAdminPost ? (
              <span>{post.category}</span>
            ) : (
              <Link
                href={categoryHref(post.category)}
                className="hover:text-[#c75b4a]"
              >
                {post.category}
              </Link>
            )}
          </div>
        )}
      </div>

      {/* Title */}
      <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 tracking-wide uppercase">
        <Link href={post.href} className="hover:text-[#c75b4a] transition-colors">
          {post.title}
        </Link>
      </h2>

      {/* Image (if present) */}
      {post.image && (
        <div className="mb-4">
          <Link href={post.href}>
            <Image
              src={post.image}
              alt={post.title}
              width={800}
              height={400}
              className="w-full h-auto object-cover"
              unoptimized={post.unoptimizedImage}
            />
          </Link>
        </div>
      )}

      {/* Excerpt */}
      <div className="text-sm text-gray-700 leading-relaxed mb-4 whitespace-pre-line">
        {post.excerpt}
      </div>

      {/* Tags */}
      {post.tags && post.tags.length > 0 && (
        <div className="text-xs text-gray-500 mb-3">
          Tagged:{" "}
          {isAdminPost ? (
            <span className="text-[#c75b4a]">{post.tags.join(", ")}</span>
          ) : (
            post.tags.map((tag, index, tags) => (
              <span key={tag}>
                <Link
                  href={tagHref(tag)}
                  className="text-[#c75b4a] hover:underline"
                >
                  {tag}
                </Link>
                {index < tags.length - 1 && ", "}
              </span>
            ))
          )}
        </div>
      )}

      {/* Footer actions */}
      <div className="flex items-center gap-4 text-xs text-gray-500">
        {post.commentCount !== undefined && (
          <Link href={`${post.href}#comments`} className="hover:text-[#c75b4a]">
            {post.commentCount === 0
              ? "Comment"
              : post.commentCount === 1
                ? "1 Comment"
                : `${post.commentCount} Comments`}
          </Link>
        )}
        <ShareButton title={post.title} />
      </div>
    </article>
  );
}
