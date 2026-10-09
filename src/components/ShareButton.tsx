"use client";

import { useEffect, useRef, useState } from "react";
import { CopyLinkIcon, FacebookIcon, LinkedInIcon, ShareIcon, XIcon } from "@/components/icons/ShareIcons";

type ShareNetwork = "x" | "linkedin" | "facebook";

const NETWORKS: { network: ShareNetwork; label: string; icon: () => React.ReactNode; height: number }[] = [
  { network: "x", label: "Share on X", icon: XIcon, height: 400 },
  { network: "linkedin", label: "Share on LinkedIn", icon: LinkedInIcon, height: 600 },
  { network: "facebook", label: "Share on Facebook", icon: FacebookIcon, height: 400 },
];

function shareUrl(network: ShareNetwork, title: string): string {
  const url = encodeURIComponent(window.location.href);
  switch (network) {
    case "x":
      return `https://twitter.com/intent/tweet?url=${url}&text=${encodeURIComponent(title)}`;
    case "linkedin":
      return `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    case "facebook":
      return `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  }
}

/** Copies the page URL, falling back to execCommand where the Clipboard API is unavailable. */
async function copyCurrentUrl() {
  try {
    await navigator.clipboard.writeText(window.location.href);
  } catch {
    const textArea = document.createElement("textarea");
    textArea.value = window.location.href;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  }
}

const itemClassName =
  "w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-3 cursor-pointer";

interface ShareButtonProps {
  title: string;
  /** Where the menu opens; "above" for buttons near the bottom of a page. */
  placement?: "above" | "below";
}

/** "Share" button with a menu for X, LinkedIn, Facebook and copying the link. */
export default function ShareButton({ title, placement = "below" }: ShareButtonProps) {
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copyFeedback, setCopyFeedback] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const position = placement === "above" ? "bottom-full mb-2" : "top-full mt-2";

  // Close the menu on a click outside of it.
  useEffect(() => {
    if (!showShareMenu) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setShowShareMenu(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showShareMenu]);

  const share = (network: ShareNetwork, height: number) => {
    window.open(shareUrl(network, title), "_blank", `noopener,noreferrer,width=600,height=${height}`);
    setShowShareMenu(false);
  };

  const handleCopyLink = async () => {
    setShowShareMenu(false);
    await copyCurrentUrl();
    setCopyFeedback(true);
    setTimeout(() => setCopyFeedback(false), 2000);
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setShowShareMenu(!showShareMenu)}
        className="flex items-center gap-1 cursor-pointer hover:text-brand transition-colors"
        aria-expanded={showShareMenu}
        aria-haspopup="true"
      >
        <ShareIcon />
        Share
      </button>

      {showShareMenu && (
        <div
          className={`absolute ${position} left-0 bg-white border border-gray-200 rounded-lg shadow-xl py-2 min-w-[180px] z-[100]`}
          role="menu"
        >
          {NETWORKS.map(({ network, label, icon: Icon, height }) => (
            <button
              key={network}
              type="button"
              onClick={() => share(network, height)}
              className={itemClassName}
              role="menuitem"
            >
              <Icon />
              {label}
            </button>
          ))}
          <div className="border-t border-gray-100 my-1" />
          <button type="button" onClick={handleCopyLink} className={itemClassName} role="menuitem">
            <CopyLinkIcon />
            Copy link
          </button>
        </div>
      )}

      {copyFeedback && (
        <div className={`absolute ${position} left-0 bg-gray-900 text-white text-xs px-3 py-1.5 rounded z-[101]`}>
          Link copied!
        </div>
      )}
    </div>
  );
}
