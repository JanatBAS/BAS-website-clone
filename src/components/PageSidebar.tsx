import Link from "next/link";

export interface SidebarItem {
  label: string;
  href: string;
  active?: boolean;
}

interface PageSidebarProps {
  title: string;
  titleHref?: string;
  items: SidebarItem[];
  titleClassName?: string;
}

export default function PageSidebar({
  title,
  titleHref,
  items,
  titleClassName,
}: PageSidebarProps) {
  return (
    <aside className="md:w-48 flex-shrink-0">
      <h2
        className={`text-lg font-light mb-4 font-serif italic ${
          titleClassName ?? "text-[#8b7355]"
        }`}
      >
        {titleHref ? (
          <Link href={titleHref} className="hover:underline">
            {title}
          </Link>
        ) : (
          title
        )}
      </h2>
      <nav className="space-y-2">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`block text-xs uppercase tracking-wider transition-colors ${
              item.active
                ? "text-gray-900 font-semibold"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
