"use client";

import { useState, useRef, useEffect } from "react";
import { copyCurrentUrl, openShareWindow } from "@/components/blog/share-actions";
import { CopyLinkIcon, FacebookIcon, LinkedInIcon, ShareIcon, XIcon } from "@/components/blog/ShareIcons";

interface ShareButtonProps {
  title: string;
  className?: string;
}

export default function ShareButton({ title, className = "" }: ShareButtonProps) {
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copyFeedback, setCopyFeedback] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setShowShareMenu(false);
      }
    };

    if (showShareMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showShareMenu]);

  const handleCopyLink = async () => {
    await copyCurrentUrl();
    setCopyFeedback(true);
    setTimeout(() => setCopyFeedback(false), 2000);
    setShowShareMenu(false);
  };

  const shareOnTwitter = () => {
    openShareWindow("x", title, "noopener,noreferrer,width=600,height=400");
    setShowShareMenu(false);
  };

  const shareOnLinkedIn = () => {
    openShareWindow("linkedin", title, "noopener,noreferrer,width=600,height=600");
    setShowShareMenu(false);
  };

  const shareOnFacebook = () => {
    openShareWindow("facebook", title, "noopener,noreferrer,width=600,height=400");
    setShowShareMenu(false);
  };

  return (
    <div className={`relative ${className}`}>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setShowShareMenu(!showShareMenu)}
        className="flex items-center gap-1 cursor-pointer hover:text-[#c75b4a] transition-colors"
        aria-expanded={showShareMenu}
        aria-haspopup="true"
      >
        <ShareIcon />
        Share
      </button>

      {showShareMenu && (
        <div
          ref={menuRef}
          className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl py-2 min-w-[180px] z-[100]"
          role="menu"
        >
          <button
            type="button"
            onClick={shareOnTwitter}
            className="w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-3 cursor-pointer"
            role="menuitem"
          >
            <XIcon />
            Share on X
          </button>
          <button
            type="button"
            onClick={shareOnLinkedIn}
            className="w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-3 cursor-pointer"
            role="menuitem"
          >
            <LinkedInIcon />
            Share on LinkedIn
          </button>
          <button
            type="button"
            onClick={shareOnFacebook}
            className="w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-3 cursor-pointer"
            role="menuitem"
          >
            <FacebookIcon />
            Share on Facebook
          </button>
          <div className="border-t border-gray-100 my-1" />
          <button
            type="button"
            onClick={handleCopyLink}
            className="w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-3 cursor-pointer"
            role="menuitem"
          >
            <CopyLinkIcon />
            Copy link
          </button>
        </div>
      )}

      {copyFeedback && (
        <div className="absolute top-full left-0 mt-2 bg-gray-900 text-white text-xs px-3 py-1.5 rounded z-[101]">
          Link copied!
        </div>
      )}
    </div>
  );
}
