import BlogPostLayout, { type BlogPostComment } from "@/components/BlogPostLayout";
import { getPostPage } from "@/data/blog-posts";
import Image from "next/image";
import { Metadata } from "next";

const post = getPostPage("bitcoin-on-rts-and-euronews");

const comments: BlogPostComment[] = [];

export const metadata: Metadata = {
  title: post.title,
  description:
    "Luzius Meisser had a quick appearance on French-speaking Swiss TV RTS as well as on euronews.",
};

export default function BitcoinOnRtsAndEuronewsPage() {
  return (
    <BlogPostLayout post={post} comments={comments}>
      <div className="mb-6">
        <a
          href="http://fr.euronews.com/2013/05/28/bitcoin-la-monnaie-virtuelle-au-fonctionnement-opaque/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/blog/euronews.jpg"
            alt="Luzius Meisser on euronews"
            width={400}
            height={300}
            className="w-auto h-auto max-w-full"
          />
        </a>
        <span className="text-sm text-gray-600 ml-1">Luzius Meisser on euronews</span>
      </div>

      <p>
        I had a quick appearance on French-speaking Swiss TV{" "}
        <a
          href="http://www.rts.ch/video/emissions/ttc/4899012-le-bitcoin-la-nouvelle-monnaie-virtuelle.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand hover:underline"
        >
          RTS
        </a>{" "}
        as well as on{" "}
        <a
          href="http://fr.euronews.com/2013/05/28/bitcoin-la-monnaie-virtuelle-au-fonctionnement-opaque/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand hover:underline"
          title="Euronews"
        >
          euronews
        </a>
        .
      </p>
    </BlogPostLayout>
  );
}
