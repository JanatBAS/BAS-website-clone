import BlogPostLayout, { type BlogPostComment } from "@/components/BlogPostLayout";
import { getPostPage } from "@/data/blog-posts";
import { Metadata } from "next";

const post = getPostPage("fintech-made-in-switzerland");

const comments: BlogPostComment[] = [];

export const metadata: Metadata = {
  title: post.title,
  description:
    "Manual Stagars is creating a Swiss FinTech documentary and talked to Luzius Meisser about the blockchain and opportunities for Switzerland.",
};

export default function FintechMadeInSwitzerlandPage() {
  return (
    <BlogPostLayout post={post} comments={comments}>
      <p>
        Manual Stagars is creating{" "}
        <a
          href="http://fintech-documentary.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand hover:underline"
        >
          a Swiss FinTech documentary
        </a>{" "}
        and talked to Luzius Meisser about the blockchain and opportunities for Switzerland.
      </p>

      {/* YouTube Embed */}
      <div className="my-8">
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/FyYcPhbNtyk"
            title="&quot;FinTech Made in Switzerland&quot;: Interview Luzius Meisser, Bitcoin Association Switzerland"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </BlogPostLayout>
  );
}
