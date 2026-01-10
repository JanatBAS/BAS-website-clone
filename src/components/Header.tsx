"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface NavItem {
  label: string;
  href?: string;
  dropdown?: {
    label: string;
    href: string;
    external?: boolean;
  }[];
}

const navigationItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "News",
    dropdown: [
      { label: "News", href: "/bitcoin-association-switzerland" },
      { label: "Archive", href: "/archive" },
    ],
  },
  {
    label: "Events",
    dropdown: [
      { label: "Roadshow 2025", href: "/roadshow-2025" },
      {
        label: "Bitcoin Meetup Zurich",
        href: "https://www.meetup.com/bitcoin-meetup-switzerland/",
        external: true,
      },
      {
        label: "Bitcoin Meetup Geneva",
        href: "https://www.meetup.com/bitcoin-meetup-geneva/",
        external: true,
      },
      {
        label: "Bitcoin Meetup Luzern",
        href: "https://www.meetup.com/bitcoin-meetup-luzern/",
        external: true,
      },
      {
        label: "Bitcoin Meetup Neuchatel",
        href: "https://www.meetup.com/bitcoin-meetup-neuchatel/",
        external: true,
      },
      {
        label: "Bitcoin Meetup Basel",
        href: "https://www.meetup.com/bitcoin-meetup-basel/",
        external: true,
      },
    ],
  },
  {
    label: "Membership",
    dropdown: [
      { label: "Private", href: "/private" },
      { label: "Corporate", href: "/corporate" },
      { label: "Our Corporate Members", href: "/our-corporate-members" },
    ],
  },
  {
    label: "Participate",
    dropdown: [{ label: "Meetups & Events", href: "/meetups-events" }],
  },
  {
    label: "About",
    dropdown: [
      { label: "About", href: "/about-1" },
      { label: "Board", href: "/board" },
      { label: "Finances", href: "/finances" },
      { label: "Statutes", href: "/statutes" },
      { label: "Media Kit", href: "/media-kit" },
      { label: "Contact", href: "/contact-1" },
    ],
  },
];

function DropdownMenu({
  items,
  isOpen,
}: {
  items: NonNullable<NavItem["dropdown"]>;
  isOpen: boolean;
}) {
  return (
    <div
      className={`absolute top-full left-0 mt-2 min-w-[200px] bg-white/95 backdrop-blur-sm shadow-lg rounded-md py-2 transition-all duration-200 ${
        isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
      }`}
    >
      {items.map((item) => (
        <div key={item.href}>
          {item.external ? (
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#c75b4a] transition-colors"
            >
              {item.label}
              <span className="ml-1 text-xs">&#8599;</span>
            </a>
          ) : (
            <Link
              href={item.href}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#c75b4a] transition-colors"
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}

function NavItemComponent({ item }: { item: NavItem }) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  if (item.dropdown) {
    return (
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button className="text-[#c75b4a] hover:text-[#a84a3b] font-medium text-sm uppercase tracking-wider transition-colors flex items-center gap-1">
          {item.label}
          <svg
            className={`w-3 h-3 transition-transform ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <DropdownMenu items={item.dropdown} isOpen={isOpen} />
      </div>
    );
  }

  return (
    <Link
      href={item.href || "/"}
      className="text-[#c75b4a] hover:text-[#a84a3b] font-medium text-sm uppercase tracking-wider transition-colors"
    >
      {item.label}
    </Link>
  );
}

function MobileNavItem({ item, onClose }: { item: NavItem; onClose: () => void }) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (item.dropdown) {
    return (
      <div className="border-b border-gray-100">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between px-4 py-3 text-[#c75b4a] font-medium text-sm uppercase tracking-wider"
        >
          {item.label}
          <svg
            className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {isExpanded && (
          <div className="bg-gray-50 py-2">
            {item.dropdown.map((subItem) => (
              <div key={subItem.href}>
                {subItem.external ? (
                  <a
                    href={subItem.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className="block px-8 py-2 text-sm text-gray-700 hover:text-[#c75b4a]"
                  >
                    {subItem.label}
                    <span className="ml-1 text-xs">&#8599;</span>
                  </a>
                ) : (
                  <Link
                    href={subItem.href}
                    onClick={onClose}
                    className="block px-8 py-2 text-sm text-gray-700 hover:text-[#c75b4a]"
                  >
                    {subItem.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      href={item.href || "/"}
      onClick={onClose}
      className="block px-4 py-3 text-[#c75b4a] font-medium text-sm uppercase tracking-wider border-b border-gray-100"
    >
      {item.label}
    </Link>
  );
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/fe5fab46-02c5-44d0-8de7-74185cd0904c/Bitcoin+Association+Switzerland.png?format=500w"
              alt="Bitcoin Association Switzerland"
              width={200}
              height={50}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <NavItemComponent key={item.label} item={item} />
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#c75b4a] hover:text-[#a84a3b] transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white/95 backdrop-blur-sm shadow-lg transition-all duration-300 ${
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <nav className="max-w-7xl mx-auto">
          {navigationItems.map((item) => (
            <MobileNavItem
              key={item.label}
              item={item}
              onClose={() => setIsMobileMenuOpen(false)}
            />
          ))}
        </nav>
      </div>
    </header>
  );
}
