import Link from "next/link";
import Image from "next/image";
import { authorHref } from "@/data/blog-posts";
import type { BlogPost } from "@/types/blog";

/**
 * Full-width banner for a featured post. Without an image it falls back to the
 * brand teal background.
 */
export default function FeaturedPostBanner({
  post,
  image = post.image,
  linkAuthor = true,
}: {
  post: BlogPost;
  /** Background image; defaults to the post's own image. */
  image?: string;
  /** Link the author name to the author's posts. */
  linkAuthor?: boolean;
}) {
  return (
    <div
      className={`relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden ${!image ? "bg-[#2a9d8f]" : ""}`}
    >
      {image && (
        <>
          <Image
            src={image}
            alt={post.title}
            fill
            className="object-cover"
            priority
            unoptimized={post.unoptimizedImage}
          />
          <div className="absolute inset-0 bg-black/30" />
        </>
      )}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="text-sm uppercase tracking-wider mb-2">{post.date}</div>
          <div className="text-sm mb-2">
            {linkAuthor ? (
              <Link href={authorHref(post.authorId)} className="hover:underline">
                {post.author}
              </Link>
            ) : (
              post.author
            )}
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold uppercase tracking-wider mb-4">
            <Link href={post.href} className="hover:opacity-80">
              {post.title}
            </Link>
          </h1>
          <p className="text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
            {post.excerpt}
          </p>
        </div>
      </div>
    </div>
  );
}
