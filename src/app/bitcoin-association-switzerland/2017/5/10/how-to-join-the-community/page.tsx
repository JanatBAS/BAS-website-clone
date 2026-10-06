import BlogPostLayout, { BlogPostData } from "@/components/BlogPostLayout";
import Link from "next/link";
import { Metadata } from "next";

const post: BlogPostData = {
  title: "How to participate in the local Bitcoin community",
  date: "10 June 2017",
  author: "Roger Darin",
  authorId: "54edd73ae4b04709779918e4",
  href: "/bitcoin-association-switzerland/2017/5/10/how-to-join-the-community",
  newerPost: {
    title: "Op Ed: Proof of Work, not Proof of Stake",
    href: "/bitcoin-association-switzerland/2017/7/14/proof-of-work-not-proof-of-stake",
  },
  olderPost: {
    title: "Our Regulatory Comment on the new Fintech-Regulation",
    href: "/bitcoin-association-switzerland/2017/5/7/stellungnahme-der-bitcoin-association-switzerland-zur-neuen-fintech-regulierung",
  },
};

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
            className="text-[#c75b4a] hover:underline"
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
            className="text-[#c75b4a] hover:underline"
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
            className="text-[#c75b4a] hover:underline"
          >
            Twitter
          </a>
        </li>
        <li>
          <Link
            href="/join"
            className="text-[#c75b4a] hover:underline"
          >
            Join
          </Link>{" "}
          the Bitcoin Association as a member
        </li>
        <li>
          Support the Bitcoin Association Switzerland with a donation to our Bitcoin address:{" "}
          <a
            href="bitcoin:32kpHBZCHDUsC1xDCFMB6kAGHcgPaU9bkm?label=Bitcoin+Association+Switzerland+Donation"
            className="text-[#c75b4a] hover:underline break-all"
          >
            32kpHBZCHDUsC1xDCFMB6kAGHcgPaU9bkm
          </a>
        </li>
      </ul>

      <div className="my-12 text-center">
        <div className="text-[#c75b4a] text-4xl mb-4">&ldquo;</div>
        <blockquote className="text-gray-600 italic text-base leading-relaxed max-w-xl mx-auto">
          The Bitcoin Association Switzerland is an important pillar of the global Bitcoin ecosystem.
        </blockquote>
        <div className="mt-4 text-sm text-[#c75b4a]">
          &mdash; Satoshi Nakamoto
        </div>
      </div>
    </BlogPostLayout>
  );
}
