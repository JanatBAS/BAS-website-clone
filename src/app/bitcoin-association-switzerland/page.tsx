import type { Metadata } from "next";
import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import BlogPostList from "@/components/blog/BlogPostList";
import FeaturedPostBanner from "@/components/blog/FeaturedPostBanner";
import { getSortedPosts } from "@/data/blog-posts";
import { getAllPostsWithAdmin } from "@/lib/merge-data";

export const metadata: Metadata = {
  title: "News",
  description:
    "News, statements and regulatory comments from the Bitcoin Association Switzerland.",
};

export default async function BlogPage() {
  // Merge admin posts with hardcoded posts
  const allPosts = await getAllPostsWithAdmin(getSortedPosts());

  // Featured post is always the newest post
  const featuredPost = allPosts[0];

  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-white">
        {featuredPost && <FeaturedPostBanner post={featuredPost} />}
        <BlogPostList posts={allPosts} />
      </main>
      <FooterSimple />
    </>
  );
}
