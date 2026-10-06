import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cache } from "react";
import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import BlogPostList, { NoPostsMessage } from "@/components/blog/BlogPostList";
import FeaturedPostBanner from "@/components/blog/FeaturedPostBanner";
import {
  NEWS_PATH,
  getAuthorName,
  getPostsByAuthor,
  getSortedPosts,
  isKnownAuthorId,
} from "@/data/blog-posts";
import { getAllPostsWithAdmin } from "@/lib/merge-data";

// Nothing is pre-rendered at build time (so the build reads no admin posts);
// each author page renders on its first visit and then stays cached until
// the admin posts change.
export const dynamicParams = true;

export function generateStaticParams(): { authorId: string }[] {
  return [];
}

interface PageProps {
  params: Promise<{ authorId: string }>;
}

const getAuthorPosts = cache(async (authorId: string) => {
  // Merge admin posts with hardcoded posts
  const allPosts = await getAllPostsWithAdmin(getSortedPosts());
  const posts = getPostsByAuthor(authorId, allPosts);
  if (posts.length === 0 && !isKnownAuthorId(authorId)) notFound();
  return { allPosts, posts, authorName: getAuthorName(authorId) };
});

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { authorId } = await params;
  const { posts, authorName } = await getAuthorPosts(authorId);
  const name = authorName ?? posts[0]?.author;
  return name
    ? {
        title: `Posts by ${name}`,
        description: `Posts by ${name} on the Bitcoin Association Switzerland news page.`,
      }
    : {
        title: "Author Posts",
        description: "Posts by this author on the Bitcoin Association Switzerland news page.",
      };
}

export default async function AuthorPostsPage({ params }: PageProps) {
  const { authorId } = await params;
  const { allPosts, posts, authorName } = await getAuthorPosts(authorId);

  // The newest post is featured when it is by this author
  const featuredPost = allPosts[0];
  const showFeaturedPost = featuredPost?.authorId === authorId;

  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-white">
        {/* Author Filter Banner */}
        {authorName && (
          <div className="bg-gray-100 py-4">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">
                  Showing posts by <span className="font-semibold">{authorName}</span>
                </p>
                <Link
                  href={NEWS_PATH}
                  className="text-sm text-[#c75b4a] hover:underline"
                >
                  Clear filter
                </Link>
              </div>
            </div>
          </div>
        )}

        {showFeaturedPost && <FeaturedPostBanner post={featuredPost} />}

        <BlogPostList
          posts={posts}
          empty={<NoPostsMessage>No posts found for this author.</NoPostsMessage>}
        />
      </main>
      <FooterSimple />
    </>
  );
}
