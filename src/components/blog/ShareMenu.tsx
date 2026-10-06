"use client";

import { useState } from "react";
import { copyCurrentUrl, openShareWindow, type ShareNetwork } from "@/components/blog/share-actions";
import { CopyLinkIcon, FacebookIcon, LinkedInIcon, ShareIcon, XIcon } from "@/components/blog/ShareIcons";

interface ShareMenuProps {
  title: string;
}

const itemClassName =
  "w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-3";

/** Share button with a menu that opens above it, used at the end of a blog post. */
export default function ShareMenu({ title }: ShareMenuProps) {
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copyFeedback, setCopyFeedback] = useState(false);

  const share = (network: ShareNetwork) => {
    openShareWindow(network, title);
    setShowShareMenu(false);
  };

  const handleCopyLink = async () => {
    setShowShareMenu(false);
    await copyCurrentUrl();
    setCopyFeedback(true);
    setTimeout(() => setCopyFeedback(false), 2000);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowShareMenu(!showShareMenu)}
        className="flex items-center gap-2 hover:text-[#c75b4a] transition-colors"
      >
        <ShareIcon />
        Share
      </button>
      {showShareMenu && (
        <div className="absolute bottom-full left-0 mb-2 bg-white border border-gray-200 rounded-lg shadow-lg py-2 min-w-[160px] z-10">
          <button onClick={() => share("x")} className={itemClassName}>
            <XIcon />
            Share on X
          </button>
          <button onClick={() => share("linkedin")} className={itemClassName}>
            <LinkedInIcon />
            Share on LinkedIn
          </button>
          <button onClick={() => share("facebook")} className={itemClassName}>
            <FacebookIcon />
            Share on Facebook
          </button>
          <div className="border-t border-gray-100 my-1" />
          <button onClick={handleCopyLink} className={itemClassName}>
            <CopyLinkIcon />
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
  );
}
