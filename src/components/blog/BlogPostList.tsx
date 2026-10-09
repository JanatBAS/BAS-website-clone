import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import BlogPostCard from "@/components/blog/BlogPostCard";
import { NEWS_PATH } from "@/data/blog-posts";
import type { BlogPost } from "@/types/blog";

/** Post cards separated by rules, or `empty` when there are no posts. */
export default function BlogPostList({
  posts,
  empty,
}: {
  posts: BlogPost[];
  empty?: React.ReactNode;
}) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {posts.length === 0
        ? empty
        : posts.map((post, index) => (
            <div key={post.id}>
              <BlogPostCard post={post} />
              {index < posts.length - 1 && <Separator className="bg-gray-200" />}
            </div>
          ))}
    </div>
  );
}

export function NoPostsMessage({ children }: { children: React.ReactNode }) {
  return (
    <div className="py-12 text-center text-gray-500">
      <p>{children}</p>
      <Link
        href={NEWS_PATH}
        className="text-brand hover:underline mt-2 inline-block"
      >
        View all posts
      </Link>
    </div>
  );
}
