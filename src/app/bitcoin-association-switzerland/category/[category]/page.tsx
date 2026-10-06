import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import BlogPostList, { NoPostsMessage } from "@/components/blog/BlogPostList";
import FeaturedPostBanner from "@/components/blog/FeaturedPostBanner";
import ListingFilterChip from "@/components/blog/ListingFilterChip";
import {
  NEWS_PATH,
  getCategories,
  getPostsByCategory,
  getSortedPosts,
} from "@/data/blog-posts";
import type { BlogPost } from "@/types/blog";

const DEFAULT_HEADER_IMAGE = "/images/events/event-default-header.jpg";

interface CategoryPageOptions {
  /** Shown in the filter chip; defaults to the slug with spaces. */
  label?: string;
  /** Show the "<label> ×" filter chip (default true). */
  chip?: boolean;
  /** A featured post at the top: a full banner, or the compact AMA one. */
  banner?: {
    style: "full" | "compact";
    postHref: string;
    image: string;
  };
}

// Category pages that existed before this route (same URL casing). Any other
// category used by a post gets a default page as well.
const CATEGORY_PAGES = new Map<string, CategoryPageOptions>([
  ["Announcement", {}],
  [
    "Ask-Me-Anything",
    {
      label: "Ask Me Anything (AMA)",
      banner: {
        style: "compact",
        postHref: `${NEWS_PATH}/2022/8/10/prudential-treatment-of-cryptoasset-exposures-ii`,
        image: DEFAULT_HEADER_IMAGE,
      },
    },
  ],
  ["Events", {}],
  ["Opinion", {}],
  ["Technical-Analysis", {}],
  [
    "Uncategorized",
    {
      chip: false,
      banner: {
        style: "full",
        postHref: `${NEWS_PATH}/2025/12/8/statement-on-12-point-program`,
        image: DEFAULT_HEADER_IMAGE,
      },
    },
  ],
]);

export const dynamicParams = false;

export function generateStaticParams(): { category: string }[] {
  const categories = new Set([...CATEGORY_PAGES.keys(), ...getCategories()]);
  return [...categories].map((category) => ({ category }));
}

interface PageProps {
  params: Promise<{ category: string }>;
}

function getCategoryPage(category: string) {
  const options = CATEGORY_PAGES.get(category);
  if (!options && !getCategories().includes(category)) notFound();
  return {
    ...options,
    label: options?.label ?? category.replaceAll("-", " "),
    chip: options?.chip ?? true,
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  const { label } = getCategoryPage(category);
  return {
    title: `Category: ${label}`,
    description: `News posts from the Bitcoin Association Switzerland filed under ${label}.`,
  };
}

/** The compact featured-post banner of the Ask Me Anything page. */
function CompactFeaturedBanner({ post, image }: { post: BlogPost; image: string }) {
  return (
    <div className="relative h-[400px] md:h-[500px] lg:h-[500px] overflow-hidden">
      <Image
        src={image}
        alt={post.title}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="text-sm italic mb-2">{post.date}</div>
          <h1 className="text-xl md:text-2xl lg:text-2xl font-semibold uppercase tracking-wider mb-4">
            <Link href={post.href} className="hover:opacity-80">
              {post.title}
            </Link>
          </h1>
          <Link href={post.href} className="text-sm italic hover:opacity-80">
            View Post&rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;
  const { label, chip, banner } = getCategoryPage(category);
  const posts = getPostsByCategory(category);
  const featuredPost = banner
    ? getSortedPosts().find((post) => post.href === banner.postHref)
    : undefined;

  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-white">
        {/* Featured Post Banner */}
        {featuredPost && banner?.style === "full" && (
          <FeaturedPostBanner post={featuredPost} image={banner.image} linkAuthor={false} />
        )}
        {featuredPost && banner?.style === "compact" && (
          <CompactFeaturedBanner post={featuredPost} image={banner.image} />
        )}

        {/* Category Filter */}
        {chip && (
          <div
            className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ${posts.length > 0 || !banner ? "pt-8" : "py-8"}`}
          >
            <ListingFilterChip label={label} />
          </div>
        )}

        {/* Blog Posts List */}
        {(posts.length > 0 || !banner) && (
          <BlogPostList
            posts={posts}
            empty={<NoPostsMessage>No posts found in this category.</NoPostsMessage>}
          />
        )}
      </main>
      <FooterSimple />
    </>
  );
}
