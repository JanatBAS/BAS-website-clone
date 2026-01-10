"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";

export interface BlogPostData {
  title: string;
  date: string;
  author: string;
  authorId?: string;
  tags?: string[];
  likeCount?: number;
  featuredImage?: string;
  newerPost?: {
    title: string;
    href: string;
  };
  olderPost?: {
    title: string;
    href: string;
  };
}

interface BlogPostLayoutProps {
  post: BlogPostData;
  children: React.ReactNode;
}

export default function BlogPostLayout({ post, children }: BlogPostLayoutProps) {
  const [likes, setLikes] = useState(post.likeCount || 0);
  const [hasLiked, setHasLiked] = useState(false);

  const handleLike = () => {
    if (!hasLiked) {
      setLikes(likes + 1);
      setHasLiked(true);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

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
              </h1>
              <div className="mt-4 text-white/90 text-sm">
                {post.date}
              </div>
              <div className="mt-1 text-white/90 text-sm">
                <Link
                  href={`/bitcoin-association-switzerland?author=${post.authorId || post.author.toLowerCase().replace(" ", "-")}`}
                  className="hover:underline"
                >
                  {post.author}
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Article Content */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Post Header (when no featured image) */}
          {!post.featuredImage && (
            <header className="mb-8">
              <div className="text-sm text-[#8b7355] mb-3">
                {post.date}
              </div>
              <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 tracking-wide mb-4">
                {post.title}
              </h1>
              <div className="text-sm text-gray-600">
                <Link
                  href={`/bitcoin-association-switzerland?author=${post.authorId || post.author.toLowerCase().replace(" ", "-")}`}
                  className="hover:text-[#c75b4a]"
                >
                  {post.author}
                </Link>
              </div>
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
            <button
              onClick={handleLike}
              className={`flex items-center gap-2 transition-colors ${
                hasLiked ? "text-[#c75b4a]" : "hover:text-[#c75b4a]"
              }`}
            >
              <svg
                className="w-4 h-4"
                fill={hasLiked ? "currentColor" : "none"}
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              {likes} Likes
            </button>
            <button
              onClick={handleShare}
              className="flex items-center gap-2 hover:text-[#c75b4a] transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
              Share
            </button>
          </div>

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
