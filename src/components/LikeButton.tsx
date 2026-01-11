"use client";

import { useState, useEffect, useCallback } from "react";

interface LikeButtonProps {
  articleId: string;
  initialLikes?: number;
  className?: string;
}

export default function LikeButton({
  articleId,
  initialLikes = 0,
  className = "",
}: LikeButtonProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Check localStorage on mount (client-side only)
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const liked = window.localStorage.getItem(`like-${articleId}`);
        if (liked === "true") {
          setIsLiked(true);
        }
      } catch (e) {
        console.warn("localStorage not available:", e);
      }
    }
  }, [articleId]);

  const handleClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const newLikedState = !isLiked;
    setIsLiked(newLikedState);

    if (typeof window !== "undefined") {
      try {
        if (newLikedState) {
          window.localStorage.setItem(`like-${articleId}`, "true");
          setIsAnimating(true);
          setTimeout(() => setIsAnimating(false), 300);
        } else {
          window.localStorage.removeItem(`like-${articleId}`);
        }
      } catch (e) {
        console.warn("localStorage not available:", e);
      }
    }
  }, [isLiked, articleId]);

  const likeCount = initialLikes + (isLiked ? 1 : 0);

  return (
    <button
      type="button"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
      className={`flex items-center gap-2 transition-colors select-none ${
        isLiked
          ? "text-[#c75b4a]"
          : "text-gray-500 hover:text-[#c75b4a]"
      } ${className}`}
      aria-pressed={isLiked}
      aria-label={isLiked ? "Unlike this article" : "Like this article"}
    >
      <svg
        className={`w-4 h-4 transition-transform duration-200 pointer-events-none ${
          isAnimating ? "scale-125" : "scale-100"
        }`}
        fill={isLiked ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth={isLiked ? 0 : 2}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
      <span className="pointer-events-none">
        {likeCount} {likeCount === 1 ? "Like" : "Likes"}
      </span>
    </button>
  );
}
