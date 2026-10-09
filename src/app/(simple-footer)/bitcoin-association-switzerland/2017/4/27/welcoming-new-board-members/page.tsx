import BlogPostLayout from "@/components/BlogPostLayout";
import { getPostPage } from "@/data/blog-posts";
import Image from "next/image";
import { Metadata } from "next";

const post = getPostPage("welcoming-new-board-members");

export const metadata: Metadata = {
  title: post.title,
  description:
    "At the annual general assembly of the Bitcoin Association Switzerland on the 28th of March 2017, our members appointed two new board members.",
};

export default function WelcomingNewBoardMembersPage() {
  return (
    <BlogPostLayout post={post}>
      <p>
        At the{" "}
        <a
          href="https://www.meetup.com/Bitcoin-Meetup-Switzerland/events/237929042/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand hover:underline"
        >
          annual general assembly
        </a>{" "}
        of the Bitcoin Association Switzerland on the 28th of March 2017, our members appointed two new board members who both both stand out through their contributions to the local Swiss Bitcoin and Fintech ecosystem and community.
      </p>

      <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-4 uppercase tracking-wide">
        Roger Darin as Community Manager
      </h2>

      <p>
        <a
          href="https://www.linkedin.com/in/rogerdarin/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand hover:underline"
        >
          Roger
        </a>{" "}
        has been helping us since January 2016 with co-organizing events and putting endless hours of work in editing the videos for our YouTube Channel{" "}
        <a
          href="https://www.youtube.com/channel/UC5nVX9C2vM1dFg0BvatKEOg"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand hover:underline"
        >
          bitcoinlectures.tv
        </a>
        . Since early 2017 he is also managing the social media presence of the BAS on{" "}
        <a
          href="https://twitter.com/bitcoin_ch"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand hover:underline"
        >
          Twitter
        </a>{" "}
        and LinkedIn.
      </p>

      {/* Roger Darin Image */}
      <div className="my-8">
        <Image
          src="/images/blog/roger-darin.jpeg"
          alt="BAS Community Manager Roger Darin"
          width={600}
          height={400}
          className="w-full h-auto"
        />
        <p className="text-xs text-gray-500 mt-2 italic">
          BAS Community Manager Roger Darin
        </p>
      </div>

      <p>
        Roger is also connecting our association with the wider Swiss finance and technology scene through his involvement in{" "}
        <a
          href="http://www.sictic.ch/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand hover:underline"
        >
          SICTIC
        </a>{" "}
        and the{" "}
        <a
          href="https://swissfinte.ch/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand hover:underline"
        >
          SFTA
        </a>
        . As the probably best connected person in the local Fintech scene, we&apos;re very honoured to have him on our board.
      </p>

      <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-4 uppercase tracking-wide">
        Isabella Brom as Treasurer
      </h2>

      <p>
        <a
          href="https://www.linkedin.com/in/isabella-brom-9a363a4a/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand hover:underline"
        >
          Isabella
        </a>{" "}
        works as IT advisor at Ernst & Young, where she is the driving force behind EY&apos;s Blockchain and Bitcoin projects. Most prominently, she lead the launch of a EY-branded Bitcoin wallet application in combination with placing a Bitcoin ATM in the Zurich EY offices and enabling her firm to accept Bitcoin as payment for their services.
      </p>

      {/* Isabella Brom Image */}
      <div className="my-8">
        <Image
          src="/images/branding/blog-default.png"
          alt="Isabella demonstrating the EY Bitcoin ATM in Zurich"
          width={600}
          height={400}
          className="w-full h-auto"
        />
        <p className="text-xs text-gray-500 mt-2 italic">
          Isabella demonstrating the EY Bitcoin ATM in Zurich
        </p>
      </div>

      <p>
        Isabella&apos;s engagement in the Digital Switzerland initiative connects us further with the broader Swiss ecosystem and enables us to bring Bitcoin to the corporate world.
      </p>
    </BlogPostLayout>
  );
}
