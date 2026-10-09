import Link from "next/link";
import {
  boardElectionNavItems,
  boardElectionNavTitle,
} from "@/data/board-election-nav";

interface BoardElectionNavProps {
  /** Path of the current page; its entry is highlighted. */
  activeHref: string;
  /** Show the labels in capitals. */
  uppercase?: boolean;
}

export default function BoardElectionNav({
  activeHref,
  uppercase = false,
}: BoardElectionNavProps) {
  return (
    <aside className="md:w-56 flex-shrink-0">
      <h2 className="text-taupe text-base font-light mb-4 font-serif italic">
        {boardElectionNavTitle}
      </h2>
      <nav className="space-y-1">
        {boardElectionNavItems.map((item) => {
          const active = item.href === activeHref;
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={`block text-xs tracking-wider transition-colors ${
                active
                  ? "text-gray-900 font-semibold"
                  : "text-gray-500 hover:text-gray-900"
              } ${item.indent ? "pl-2" : ""}`}
            >
              {uppercase ? item.label.toUpperCase() : item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
