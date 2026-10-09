import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostList from "@/components/blog/BlogPostList";
import ListingFilterChip from "@/components/blog/ListingFilterChip";
import { getPostsByTag, getTags } from "@/data/blog-posts";

export const dynamicParams = false;

export function generateStaticParams(): { tag: string }[] {
  return getTags().map((tag) => ({ tag }));
}

interface PageProps {
  params: Promise<{ tag: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { tag } = await params;
  return {
    title: `Tag: ${tag}`,
    description: `News posts from the Bitcoin Association Switzerland tagged ${tag}.`,
  };
}

/** Header of the Regulation tag page, styled like the letter to the BIS. */
function RegulationLetterBanner() {
  return (
    <div className="bg-[#5a7a7a] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Left side - Letter header info */}
          <div className="flex-shrink-0">
            <div className="text-right text-sm">
              <p>Zurich, 2022-08-07</p>
            </div>
            <div className="mt-4 text-sm">
              <p className="font-semibold">To:</p>
              <p>Bank for International Settlements (BIS)</p>
              <p>Basel Committee on Banking Supervision</p>
            </div>
          </div>

          {/* Right side - Title */}
          <div className="flex-1">
            <h1 className="text-xl md:text-2xl font-semibold tracking-wide uppercase">
              Prudential Treatment of Cryptoasset Exposures II
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default async function TagPage({ params }: PageProps) {
  const { tag } = await params;
  const posts = getPostsByTag(tag);
  if (posts.length === 0) notFound();

  return (
    <main className="pt-20 min-h-screen bg-white">
      {tag === "Regulation" ? (
        <RegulationLetterBanner />
      ) : (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <ListingFilterChip label={tag} />
        </div>
      )}

      {/* Blog Posts List */}
      <BlogPostList posts={posts} />
    </main>
  );
}
