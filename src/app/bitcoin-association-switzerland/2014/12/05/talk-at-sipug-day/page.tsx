import BlogPostLayout, { BlogPostData } from "@/components/BlogPostLayout";
import Image from "next/image";
import { Metadata } from "next";

const post: BlogPostData = {
  title: "Talk at SIPUG day",
  date: "5 December 2014",
  author: "kronrod",
  authorId: "59025f1030454480d862303f",
  href: "/bitcoin-association-switzerland/2014/12/05/talk-at-sipug-day",
  categories: ["Uncategorized"],
  comments: [],
  newerPost: {
    title: "Swiss Move to Reduce Blockchain Regulation",
    href: "/bitcoin-association-switzerland/2016/06/20/swiss-parliamentary-motion-to-reduce-blockchain-regulation",
  },
  olderPost: {
    title: "Federal Council report: No special regulation needed",
    href: "/bitcoin-association-switzerland/2014/06/25/federal-council-report-no-special-regulation-needed",
  },
};

export const metadata: Metadata = {
  title: post.title,
  description:
    "The Bitcoin Association is invited to hold a talk about Bitcoin about twice per month, such as this SIPUG day with 300 registered participants.",
};

export default function TalkAtSipugDayPage() {
  return (
    <BlogPostLayout post={post}>
      <p>
        The Bitcoin Assocation is invited to hold a talk about Bitcoin about twice per month at average. Here is a picture of one of the more notable events with 300 registered participants.
      </p>

      <div className="mt-6 mb-8">
        <a
          href="http://www.sipug.ch/de/sipugday/sipug-day-archiv/103-sipug-day-2014-fotos"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/blog/sipug.jpg"
            alt="SIPUG day presentation"
            width={800}
            height={500}
            className="w-full h-auto"
          />
        </a>
      </div>
    </BlogPostLayout>
  );
}
