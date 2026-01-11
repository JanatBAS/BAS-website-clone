"use client";

import { useState, useEffect } from "react";

interface LikeButtonProps {
  /** Unique identifier for this article (used as localStorage key) */
  articleId: string;
  /** Initial like count from the original site */
  initialLikes?: number;
  className?: string;
}

export default function LikeButton({
  articleId,
  initialLikes = 0,
  className = "",
}: LikeButtonProps) {
  const [mounted, setMounted] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Handle mounting and localStorage check
  useEffect(() => {
    setMounted(true);
    try {
      const liked = localStorage.getItem(`like-${articleId}`);
      if (liked === "true") {
        setIsLiked(true);
      }
    } catch (e) {
      // localStorage not available
      console.warn("localStorage not available:", e);
    }
  }, [articleId]);

  const handleLike = () => {
    const newLikedState = !isLiked;
    setIsLiked(newLikedState);

    try {
      if (newLikedState) {
        localStorage.setItem(`like-${articleId}`, "true");
        // Trigger animation
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 300);
      } else {
        localStorage.removeItem(`like-${articleId}`);
      }
    } catch (e) {
      console.warn("localStorage not available:", e);
    }
  };

  // Calculate like count
  const likeCount = initialLikes + (isLiked ? 1 : 0);

  // Render a static version during SSR to avoid hydration mismatch
  if (!mounted) {
    return (
      <button
        type="button"
        className={`flex items-center gap-2 cursor-pointer transition-colors text-gray-500 hover:text-[#c75b4a] ${className}`}
        aria-label="Like this article"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
        <span>{initialLikes} {initialLikes === 1 ? "Like" : "Likes"}</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleLike}
      className={`flex items-center gap-2 cursor-pointer transition-colors ${
        isLiked
          ? "text-[#c75b4a]"
          : "text-gray-500 hover:text-[#c75b4a]"
      } ${className}`}
      aria-label={isLiked ? "Unlike this article" : "Like this article"}
      title={isLiked ? "Click to unlike" : "Click to like"}
    >
      <svg
        className={`w-4 h-4 transition-transform duration-200 ${
          isAnimating ? "scale-125" : "scale-100"
        }`}
        fill={isLiked ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth={isLiked ? 0 : 2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
      <span>
        {likeCount} {likeCount === 1 ? "Like" : "Likes"}
      </span>
    </button>
  );
}
