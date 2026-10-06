import BlogPostLayout, { BlogPostData } from "@/components/BlogPostLayout";
import Image from "next/image";
import { Metadata } from "next";

const post: BlogPostData = {
  title: "Bitcoin on RTS and Euronews",
  date: "7 November 2013",
  author: "kronrod",
  authorId: "59025f1030454480d862303f",
  href: "/bitcoin-association-switzerland/2013/11/07/bitcoin-on-rts-and-euronews",
  categories: ["Uncategorized"],
  comments: [],
  newerPost: {
    title: "General Discussion Meetup",
    href: "/bitcoin-association-switzerland/2013/11/08/general-discussion-meetup",
  },
};

export const metadata: Metadata = {
  title: post.title,
  description:
    "Luzius Meisser had a quick appearance on French-speaking Swiss TV RTS as well as on euronews.",
};

export default function BitcoinOnRtsAndEuronewsPage() {
  return (
    <BlogPostLayout post={post}>
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
          className="text-[#c75b4a] hover:underline"
        >
          RTS
        </a>{" "}
        as well as on{" "}
        <a
          href="http://fr.euronews.com/2013/05/28/bitcoin-la-monnaie-virtuelle-au-fonctionnement-opaque/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#c75b4a] hover:underline"
          title="Euronews"
        >
          euronews
        </a>
        .
      </p>
    </BlogPostLayout>
  );
}
