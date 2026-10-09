import type { Metadata } from "next";
import Link from "next/link";
import { getArchiveMonths, type ArchiveMonth } from "@/data/blog-posts";

const archiveMonths = getArchiveMonths();

export const metadata: Metadata = {
  title: "News Archive",
  description: `All news posts of the Bitcoin Association Switzerland by month, from ${archiveMonths.at(-1)?.label} to ${archiveMonths[0]?.label}.`,
};

// Split archive data into two columns for the layout
const halfLength = Math.ceil(archiveMonths.length / 2);
const leftColumnData = archiveMonths.slice(0, halfLength);
const rightColumnData = archiveMonths.slice(halfLength);

function ArchiveGroup({ group }: { group: ArchiveMonth }) {
  return (
    <div className="mb-6">
      <Link
        id={group.id}
        href={`#${group.id}`}
        className="text-taupe hover:text-[#6b5a45] font-normal text-base block mb-2 scroll-mt-24"
      >
        {group.label}
      </Link>
      <ul className="space-y-1">
        {group.posts.map((item) => (
          <li key={item.href} className="text-sm">
            <Link
              href={item.href}
              className="text-taupe hover:text-[#6b5a45] hover:underline leading-relaxed"
            >
              {item.title}
            </Link>
            <span className="block text-[#999] text-xs mt-0.5">{item.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ArchivePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content Area */}
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            {/* Left Sidebar - News Navigation */}
            <aside className="md:w-48 flex-shrink-0">
              <nav>
                <h2 className="text-[#222] font-normal text-lg mb-4">News</h2>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="/bitcoin-association-switzerland"
                      className="text-[#999] hover:text-[#222] uppercase tracking-wider text-xs"
                    >
                      News
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/archive"
                      className="text-[#222] uppercase tracking-wider text-xs font-medium"
                    >
                      Archive
                    </Link>
                  </li>
                </ul>
              </nav>
            </aside>

            {/* Archive Content - Two Columns */}
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {/* Left Column */}
                <div>
                  {leftColumnData.map((group) => (
                    <ArchiveGroup key={group.id} group={group} />
                  ))}
                </div>

                {/* Right Column */}
                <div>
                  {rightColumnData.map((group) => (
                    <ArchiveGroup key={group.id} group={group} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
