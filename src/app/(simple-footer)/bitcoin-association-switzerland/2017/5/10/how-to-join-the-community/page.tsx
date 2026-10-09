import BlogPostLayout from "@/components/BlogPostLayout";
import { getPostPage } from "@/data/blog-posts";
import Link from "next/link";
import { Metadata } from "next";

const post = getPostPage("how-to-join-the-community");

export const metadata: Metadata = {
  title: post.title,
  description:
    "Get to know the community at our regular meetups in Zurich or Geneva, join our Telegram chat group, follow us on Twitter, or join the Bitcoin Association as a member.",
};

export default function HowToJoinTheCommunityPage() {
  return (
    <BlogPostLayout post={post}>
      <ul className="list-disc pl-6 space-y-4">
        <li>
          Get to know the community members in person by attending one of our regular meetups in Zurich or Geneva:{" "}
          <a
            href="https://www.meetup.com/Bitcoin-Meetup-Switzerland"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand hover:underline"
          >
            https://www.meetup.com/Bitcoin-Meetup-Switzerland
          </a>
        </li>
        <li>
          Join our Telegram chat group with 180+ members to always be up-to-date about the latest things happening in Switzerland and Bitcoin. If you&apos;d like to join ask{" "}
          <a
            href="https://web.telegram.org/#/im?p=@rogerdarin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand hover:underline"
          >
            @rogerdarin
          </a>{" "}
          on Telegram to invite you.
        </li>
        <li>
          Follow us on{" "}
          <a
            href="https://twitter.com/bitcoin_ch"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand hover:underline"
          >
            Twitter
          </a>
        </li>
        <li>
          <Link
            href="/join"
            className="text-brand hover:underline"
          >
            Join
          </Link>{" "}
          the Bitcoin Association as a member
        </li>
        <li>
          Support the Bitcoin Association Switzerland with a donation to our Bitcoin address:{" "}
          <a
            href="bitcoin:32kpHBZCHDUsC1xDCFMB6kAGHcgPaU9bkm?label=Bitcoin+Association+Switzerland+Donation"
            className="text-brand hover:underline break-all"
          >
            32kpHBZCHDUsC1xDCFMB6kAGHcgPaU9bkm
          </a>
        </li>
      </ul>

      <div className="my-12 text-center">
        <div className="text-brand text-4xl mb-4">&ldquo;</div>
        <blockquote className="text-gray-600 italic text-base leading-relaxed max-w-xl mx-auto">
          The Bitcoin Association Switzerland is an important pillar of the global Bitcoin ecosystem.
        </blockquote>
        <div className="mt-4 text-sm text-brand">
          &mdash; Satoshi Nakamoto
        </div>
      </div>
    </BlogPostLayout>
  );
}
