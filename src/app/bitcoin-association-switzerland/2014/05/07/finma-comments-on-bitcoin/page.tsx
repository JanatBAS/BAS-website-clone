import BlogPostLayout, { BlogPostData } from "@/components/BlogPostLayout";
import Link from "next/link";
import { Metadata } from "next";

const post: BlogPostData = {
  title: "Finma comments on Bitcoin",
  date: "7 May 2014",
  author: "kronrod",
  authorId: "59025f1030454480d862303f",
  href: "/bitcoin-association-switzerland/2014/05/07/finma-comments-on-bitcoin",
  categories: ["Uncategorized"],
  comments: [],
  newerPost: {
    title: "Miner's \"luck smoothing\" excuse does not hold up to scrutiny",
    href: "/bitcoin-association-switzerland/2014/06/15/miners-luck-smoothing-excuse-does-not-hold-up-to-scrutiny",
  },
  olderPost: {
    title: "The MtGox debacle would not have happened in a free market",
    href: "/bitcoin-association-switzerland/2014/02/25/the-mtgox-debacle-would-not-have-happened-in-a-free-market",
  },
};

export const metadata: Metadata = {
  title: post.title,
  description:
    "In a recently published guide titled 'how consumers can protect themselves from financial market actors that operate without permit', the Swiss financial market authorities commented on Bitcoin.",
};

export default function FinmaCommentsOnBitcoinPage() {
  return (
    <BlogPostLayout post={post}>
      <p>
        <Link
          href="http://www.finma.ch/d/privatpersonen/Documents/kundenschutz-d.pdf"
          className="text-[#c75b4a] hover:underline"
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
