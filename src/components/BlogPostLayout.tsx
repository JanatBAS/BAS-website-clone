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
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copyFeedback, setCopyFeedback] = useState(false);

  const handleLike = () => {
    if (!hasLiked) {
      setLikes(likes + 1);
      setHasLiked(true);
    }
  };

  const getShareUrl = () => {
    if (typeof window !== "undefined") {
      return window.location.href;
    }
    return "";
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(getShareUrl());
      setCopyFeedback(true);
      setTimeout(() => setCopyFeedback(false), 2000);
    } catch {
      // Fallback for browsers that don't support clipboard API
      const textArea = document.createElement("textarea");
      textArea.value = getShareUrl();
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopyFeedback(true);
      setTimeout(() => setCopyFeedback(false), 2000);
    }
  };

  const shareOnTwitter = () => {
    const url = encodeURIComponent(getShareUrl());
    const text = encodeURIComponent(post.title);
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, "_blank", "noopener,noreferrer");
  };

  const shareOnLinkedIn = () => {
    const url = encodeURIComponent(getShareUrl());
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, "_blank", "noopener,noreferrer");
  };

  const shareOnFacebook = () => {
    const url = encodeURIComponent(getShareUrl());
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank", "noopener,noreferrer");
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
            <div className="relative">
              <button
                onClick={() => setShowShareMenu(!showShareMenu)}
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
              {showShareMenu && (
                <div className="absolute bottom-full left-0 mb-2 bg-white border border-gray-200 rounded-lg shadow-lg py-2 min-w-[160px] z-10">
                  <button
                    onClick={() => { shareOnTwitter(); setShowShareMenu(false); }}
                    className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-3"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    Share on X
                  </button>
                  <button
                    onClick={() => { shareOnLinkedIn(); setShowShareMenu(false); }}
                    className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-3"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    Share on LinkedIn
                  </button>
                  <button
                    onClick={() => { shareOnFacebook(); setShowShareMenu(false); }}
                    className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-3"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    Share on Facebook
                  </button>
                  <div className="border-t border-gray-100 my-1" />
                  <button
                    onClick={() => { handleCopyLink(); setShowShareMenu(false); }}
                    className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-3"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Copy link
                  </button>
                </div>
              )}
              {copyFeedback && (
                <div className="absolute bottom-full left-0 mb-2 bg-gray-900 text-white text-xs px-3 py-1.5 rounded">
                  Link copied!
                </div>
              )}
            </div>
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
