import BlogPostLayout, { type BlogPostComment } from "@/components/BlogPostLayout";
import { getPostPage } from "@/data/blog-posts";
import Link from "next/link";
import { Metadata } from "next";

const post = getPostPage("finma-comments-on-bitcoin");

const comments: BlogPostComment[] = [];

export const metadata: Metadata = {
  title: post.title,
  description:
    "In a recently published guide titled 'how consumers can protect themselves from financial market actors that operate without permit', the Swiss financial market authorities commented on Bitcoin.",
};

export default function FinmaCommentsOnBitcoinPage() {
  return (
    <BlogPostLayout post={post} comments={comments}>
      <p>
        <Link
          href="http://www.finma.ch/d/privatpersonen/Documents/kundenschutz-d.pdf"
          className="text-brand hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Finma comments on Bitcoin
        </Link>{" "}
        In a recently published guide titled &quot;how consumers can protect
        themselves from financial market actors that operate without
        permit&quot;, the Swiss financial market authorities commented on
        Bitcoin. Generally, it does not contain any surprises. They see
        risks for consumers in its irreversibility, anonymity and
        volatility - which are valid concerns. They also note that money
        laundering laws and banking laws might apply when running a
        business such as a Bitcoin exchange. This is in line with our view
        that Bitcoin should be treated like other currencies.
      </p>

      <p>
        One could criticize their focus on risks alone - neglecting
        potential advantages of the mentioned properties and Bitcoin in
        general. But that&apos;s their mission. Regulatory agencies are created
        to mitigate risks - and not to identify opportunities.
      </p>
    </BlogPostLayout>
  );
}
