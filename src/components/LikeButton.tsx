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
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(initialLikes);
  const [isAnimating, setIsAnimating] = useState(false);

  // Check localStorage on mount
  useEffect(() => {
    const liked = localStorage.getItem(`like-${articleId}`);
    if (liked === "true") {
      setIsLiked(true);
      setLikeCount(initialLikes + 1);
    }
  }, [articleId, initialLikes]);

  const handleLike = () => {
    if (isLiked) {
      // Unlike
      setIsLiked(false);
      setLikeCount(initialLikes);
      localStorage.removeItem(`like-${articleId}`);
    } else {
      // Like
      setIsLiked(true);
      setLikeCount(initialLikes + 1);
      localStorage.setItem(`like-${articleId}`, "true");
      // Trigger animation
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

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
        className={`w-4 h-4 transition-transform ${
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
