import BlogPostLayout, { BlogPostData } from "@/components/BlogPostLayout";
import { Metadata } from "next";

const post: BlogPostData = {
  title: "Bitcoin in Echo der Zeit",
  date: "4 December 2013",
  author: "kronrod",
  authorId: "59025f1030454480d862303f",
  href: "/bitcoin-association-switzerland/2013/12/04/bitcoin-in-echo-der-zeit",
  categories: ["Uncategorized"],
  comments: [],
  newerPost: {
    title: "General Assembly 2014",
    href: "/bitcoin-association-switzerland/2014/02/17/general-assembly-2014",
  },
  olderPost: {
    title: "General Discussion Meetup",
    href: "/bitcoin-association-switzerland/2013/11/08/general-discussion-meetup",
  },
};

export const metadata: Metadata = {
  title: post.title,
  description:
    "One of the most relevant news segments on Swiss national radio - Echo der Zeit - reported about Bitcoin and talked to Luzius Meisser.",
};

export default function BitcoinInEchoDerZeitPage() {
  return (
    <BlogPostLayout post={post}>
      <p>
        <a
          href="http://www.srf.ch/sendungen/echo-der-zeit/keine-visa-erleichterungen-mehr-fuer-syrienfluechtlinge"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#c75b4a] hover:underline"
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
