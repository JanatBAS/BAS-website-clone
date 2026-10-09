import BlogPostLayout, { type BlogPostComment } from "@/components/BlogPostLayout";
import { getPostPage } from "@/data/blog-posts";
import Image from "next/image";
import { Metadata } from "next";

const post = getPostPage("talk-at-sipug-day");

const comments: BlogPostComment[] = [];

export const metadata: Metadata = {
  title: post.title,
  description:
    "The Bitcoin Association is invited to hold a talk about Bitcoin about twice per month, such as this SIPUG day with 300 registered participants.",
};

export default function TalkAtSipugDayPage() {
  return (
    <BlogPostLayout post={post} comments={comments}>
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
