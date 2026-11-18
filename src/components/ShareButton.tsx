"use client";

import { useEffect, useRef, useState } from "react";
import { CopyLinkIcon, FacebookIcon, LinkedInIcon, ShareIcon, XIcon } from "@/components/icons/ShareIcons";

type ShareNetwork = "x" | "linkedin" | "facebook";

const NETWORKS: { network: ShareNetwork; label: string; icon: () => React.ReactNode; height: number }[] = [
  { network: "x", label: "Share on X", icon: XIcon, height: 400 },
  { network: "linkedin", label: "Share on LinkedIn", icon: LinkedInIcon, height: 600 },
  { network: "facebook", label: "Share on Facebook", icon: FacebookIcon, height: 400 },
];

/** Absolute URL of `path`, or of the current page without one. */
function pageUrl(path?: string): string {
  return path ? new URL(path, window.location.origin).href : window.location.href;
}

function shareUrl(network: ShareNetwork, title: string, path?: string): string {
  const url = encodeURIComponent(pageUrl(path));
  switch (network) {
    case "x":
      return `https://twitter.com/intent/tweet?url=${url}&text=${encodeURIComponent(title)}`;
    case "linkedin":
      return `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    case "facebook":
      return `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  }
}

/** Copies the URL, falling back to execCommand where the Clipboard API is unavailable. */
async function copyUrl(url: string) {
  try {
    await navigator.clipboard.writeText(url);
  } catch {
    const textArea = document.createElement("textarea");
    textArea.value = url;
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
  /** Path of the shared page; defaults to the current page. Set it where a listing shows several posts. */
  url?: string;
  /** Where the menu opens; "above" for buttons near the bottom of a page. */
  placement?: "above" | "below";
}

/** "Share" button with a menu for X, LinkedIn, Facebook and copying the link. */
export default function ShareButton({ title, url, placement = "below" }: ShareButtonProps) {
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copyFeedback, setCopyFeedback] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const position = placement === "above" ? "bottom-full mb-2" : "top-full mt-2";

  // Close the menu on a click outside of it or on Escape.
  useEffect(() => {
    if (!showShareMenu) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setShowShareMenu(false);
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setShowShareMenu(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showShareMenu]);

  const share = (network: ShareNetwork, height: number) => {
    window.open(shareUrl(network, title, url), "_blank", `noopener,noreferrer,width=600,height=${height}`);
    setShowShareMenu(false);
  };

  const handleCopyLink = async () => {
    setShowShareMenu(false);
    await copyUrl(pageUrl(url));
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
