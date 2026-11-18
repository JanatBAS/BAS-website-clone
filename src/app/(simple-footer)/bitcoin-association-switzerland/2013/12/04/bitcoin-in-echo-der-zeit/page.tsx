import BlogPostLayout, { type BlogPostComment } from "@/components/BlogPostLayout";
import { getPostPage, postMetadata } from "@/data/blog-posts";
import { Metadata } from "next";

const post = getPostPage("bitcoin-in-echo-der-zeit");

const comments: BlogPostComment[] = [];

export const metadata: Metadata = postMetadata(
  post,
  "One of the most relevant news segments on Swiss national radio - Echo der Zeit - reported about Bitcoin and talked to Luzius Meisser.",
);

export default function BitcoinInEchoDerZeitPage() {
  return (
    <BlogPostLayout post={post} comments={comments}>
      <p>
        <a
          href="https://web.archive.org/web/20131206030624/http://www.srf.ch/sendungen/echo-der-zeit/keine-visa-erleichterungen-mehr-fuer-syrienfluechtlinge"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand hover:underline"
        >
          Bitcoin in Echo der Zeit
        </a>
      </p>

      <p>
        One of the most relevant news segments on Swiss national radio - Echo der Zeit - reported about Bitcoin and talked to Luzius Meisser.
      </p>
    </BlogPostLayout>
  );
}
