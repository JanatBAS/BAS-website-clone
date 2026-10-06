import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import LikeButton from "@/components/blog/LikeButton";
import PostComments from "@/components/blog/PostComments";
import ShareMenu from "@/components/blog/ShareMenu";

export interface BlogPostLink {
  title: string;
  href: string;
}

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

export interface BlogPostData {
  title: string;
  date: string;
  /** Omitted for posts published without a byline. */
  author?: string;
  authorId?: string;
  /** The post's own URL; when set, the date links to it. */
  href?: string;
  /** Source of a link post, shown as an arrow after the title. */
  titleHref?: string;
  categories?: string[];
  tags?: string[];
  /** Initial like count; the like button is only shown when this is set. */
  likeCount?: number;
  featuredImage?: string;
  /** Comments carried over from the original site; when set, a comments section is shown, even if empty. */
  comments?: BlogPostComment[];
  newerPost?: BlogPostLink;
  olderPost?: BlogPostLink;
}

interface BlogPostLayoutProps {
  post: BlogPostData;
  children: React.ReactNode;
}

function authorHref(post: BlogPostData) {
  const id = post.authorId || (post.author ?? "").toLowerCase().replace(/\s+/g, "-");
  return `/bitcoin-association-switzerland/author/${encodeURIComponent(id)}`;
}

/** Author link followed by the post's category links. */
function Byline({ post, linkClassName }: { post: BlogPostData; linkClassName: string }) {
  return (
    <>
      {post.author && (
        <Link href={authorHref(post)} className={linkClassName}>
          {post.author}
        </Link>
      )}
      {post.categories?.map((category, index) => (
        <Fragment key={category}>
          {(post.author || index > 0) && <span className="mx-2 opacity-60">/</span>}
          <Link
            href={`/bitcoin-association-switzerland/category/${category}`}
            className={linkClassName}
          >
            {category}
          </Link>
        </Fragment>
      ))}
    </>
  );
}

export default function BlogPostLayout({ post, children }: BlogPostLayoutProps) {
  const hasByline = Boolean(post.author || post.categories?.length);
  const date = post.href ? (
    <Link href={post.href} className="hover:underline">
      {post.date}
    </Link>
  ) : (
    post.date
  );
  const titleLink = post.titleHref && (
    <>
      {" "}
      <a
        href={post.titleHref}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#c75b4a] hover:underline"
      >
        &rarr;
      </a>
    </>
  );

  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-white">
        {/* Featured Image Banner (if present) */}
        {post.featuredImage && (
          <div className="relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
            <Image
              src={post.featuredImage}
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
              {hasByline && (
                <div className="mt-1 text-white/90 text-sm">
                  <Byline post={post} linkClassName="hover:underline" />
                </div>
              )}
            </div>
          </div>
        )}

        {/* Article Content */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Post Header (when no featured image) */}
          {!post.featuredImage && (
            <header className="mb-8">
              <div className="text-sm text-[#8b7355] mb-3">
                {date}
              </div>
              <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 tracking-wide mb-4">
                {post.title}
                {titleLink}
              </h1>
              {hasByline && (
                <div className="text-sm text-gray-600">
                  <Byline post={post} linkClassName="hover:text-[#c75b4a]" />
                </div>
              )}
            </header>
          )}

          {/* Post Content */}
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-[#c75b4a] prose-a:no-underline hover:prose-a:underline prose-li:text-gray-700">
            {children}
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-10 pt-6 border-t border-gray-200">
              <span className="text-sm text-gray-600">Tagged: </span>
              {post.tags.map((tag, index) => (
                <span key={tag}>
                  <Link
                    href={`/bitcoin-association-switzerland/tag/${tag}`}
                    className="text-sm text-[#c75b4a] hover:underline"
                  >
                    {tag}
                  </Link>
                  {index < post.tags!.length - 1 && ", "}
                </span>
              ))}
            </div>
          )}

          {/* Like and Share */}
          <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
            {post.likeCount !== undefined && <LikeButton initialCount={post.likeCount} />}
            <ShareMenu title={post.title} />
          </div>

          {/* Comments */}
          {post.comments && <PostComments comments={post.comments} />}

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
                      className="text-[#c75b4a] hover:underline text-sm"
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
                      className="text-[#c75b4a] hover:underline text-sm"
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
      <FooterSimple />
    </>
  );
}
