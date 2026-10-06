"use client";

import { useState } from "react";

interface LikeButtonProps {
  initialCount: number;
}

/** Like counter shown under a blog post; the count is kept in local state only. */
export default function LikeButton({ initialCount }: LikeButtonProps) {
  const [likes, setLikes] = useState(initialCount);
  const [hasLiked, setHasLiked] = useState(false);

  const handleLike = () => {
    if (!hasLiked) {
      setLikes(likes + 1);
      setHasLiked(true);
    }
  };

  return (
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
  );
}
