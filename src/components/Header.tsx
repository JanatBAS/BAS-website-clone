"use client";

import { useState, useRef, useEffect, useId } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
      { label: "Overview", href: "/events" },
      { label: "Calendar", href: "/calendar" },
      { label: "Roadshow 2025", href: "/roadshow-2025" },
      { label: "Education", href: "/education" },
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
      { label: "Private Individuals", href: "/membership/private-individuals" },
      { label: "Corporations", href: "/membership/corporations" },
      { label: "Our Corporate Members", href: "/our-corporate-members" },
    ],
  },
  {
    label: "Shop",
    href: "/shop",
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
  id,
  items,
  isOpen,
}: {
  id: string;
  items: NonNullable<NavItem["dropdown"]>;
  isOpen: boolean;
}) {
  return (
    <div
      id={id}
      className={`absolute top-full left-0 mt-2 min-w-[200px] bg-white shadow-lg rounded-md py-2 transition-all duration-200 ${
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
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
            >
              {item.label}
              <span className="ml-1 text-xs" aria-hidden="true">&#8599;</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ) : (
            <Link
              href={item.href}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
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
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  // A keyboard activation (detail 0) toggles the menu; a mouse or touch click
  // only opens it, since hovering has usually opened it already.
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    const toggle = e.detail === 0;
    setIsOpen((open) => (toggle ? !open : true));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape" && isOpen) {
      setIsOpen(false);
      buttonRef.current?.focus();
    }
  };

  // Close once keyboard focus moves outside the button and its menu.
  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
      setIsOpen(false);
    }
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
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
      >
        <button
          ref={buttonRef}
          type="button"
          onClick={handleClick}
          aria-expanded={isOpen}
          aria-controls={menuId}
          className="text-white hover:text-white/80 font-medium text-sm uppercase tracking-wider transition-colors flex items-center gap-1 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
        >
          {item.label}
          <svg
            className={`w-3 h-3 transition-transform ${isOpen ? "rotate-180" : ""}`}
            aria-hidden="true"
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
        <DropdownMenu id={menuId} items={item.dropdown} isOpen={isOpen} />
      </div>
    );
  }

  return (
    <Link
      href={item.href || "/"}
      className="text-white hover:text-white/80 font-medium text-sm uppercase tracking-wider transition-colors drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
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
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
          className="w-full flex items-center justify-between px-4 py-3 text-gray-800 font-medium text-sm uppercase tracking-wider"
        >
          {item.label}
          <svg
            className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`}
            aria-hidden="true"
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
                    className="block px-8 py-2 text-sm text-gray-700 hover:text-gray-900"
                  >
                    {subItem.label}
                    <span className="ml-1 text-xs" aria-hidden="true">&#8599;</span>
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                ) : (
                  <Link
                    href={subItem.href}
                    onClick={onClose}
                    className="block px-8 py-2 text-sm text-gray-700 hover:text-gray-900"
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
      className="block px-4 py-3 text-gray-800 font-medium text-sm uppercase tracking-wider border-b border-gray-100"
    >
      {item.label}
    </Link>
  );
}

function HeaderBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Escape" && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
      menuButtonRef.current?.focus();
    }
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/40 to-transparent"
      onKeyDown={handleKeyDown}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/branding/logo-horizontal.png"
              alt="Bitcoin Association Switzerland"
              width={140}
              height={48}
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
            ref={menuButtonRef}
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            className="lg:hidden p-2 text-white hover:text-white/80 transition-colors drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                aria-hidden="true"
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
                aria-hidden="true"
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
      {/* When closed the menu is also invisible, so its links leave the tab order.
          When open it scrolls if it is taller than the space below the header bar. */}
      <div
        id="mobile-menu"
        className={`lg:hidden bg-white shadow-lg transition-all duration-300 ${
          isMobileMenuOpen
            ? "max-h-[calc(100dvh-5rem)] opacity-100 overflow-y-auto"
            : "max-h-0 opacity-0 overflow-hidden invisible"
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

/**
 * The page layouts keep the header mounted across navigations; keying it by
 * path starts every page with closed menus, as a fresh page load would.
 */
export default function Header() {
  const pathname = usePathname();
  return <HeaderBar key={pathname} />;
}
