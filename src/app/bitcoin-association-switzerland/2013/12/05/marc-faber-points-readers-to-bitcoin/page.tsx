import BlogPostLayout, { BlogPostData } from "@/components/BlogPostLayout";
import Image from "next/image";
import { Metadata } from "next";

const post: BlogPostData = {
  title: "Marc Faber points readers to Bitcoin",
  date: "5 December 2013",
  author: "kronrod",
  authorId: "59025f1030454480d862303f",
  href: "/bitcoin-association-switzerland/2013/12/05/marc-faber-points-readers-to-bitcoin",
  categories: ["Uncategorized"],
  comments: [],
  olderPost: {
    title: "Bitcoin in Echo der Zeit",
    href: "/bitcoin-association-switzerland/2013/12/04/bitcoin-in-echo-der-zeit",
  },
};

export const metadata: Metadata = {
  title: post.title,
  description:
    "Along with his June market commentary, Swiss investment guru Marc Faber sent his subscribers a report on Bitcoin titled \"Dispelling the Myths of Bitcoin\".",
};

export default function MarcFaberPointsReadersToBitcoinPage() {
  return (
    <BlogPostLayout post={post}>
      <div className="mb-8">
        <Image
          src="/images/blog/marc-faber.jpg"
          alt="Marc Faber"
          width={400}
          height={300}
          className="max-w-full h-auto"
        />
      </div>

      <p>
        Swiss investment guru{" "}
        <a
          href="http://en.wikipedia.org/wiki/Marc_Faber"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#c75b4a] hover:underline"
        >
          Marc Faber
        </a>{" "}
        publishes a monthly market commentary. Along with the June commentary, he sent his subscribers a report on Bitcoin, titled &quot;Dispelling the Myths of Bitcoin&quot; and written by{" "}
        <a
          href="http://www.altanawealth.com/our-team/lee-robinson"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#c75b4a] hover:underline"
        >
          Lee Robinson
        </a>{" "}
        from Atlana wealth. I already was in contact with Faber last autumn suggesting that he should send{" "}
        <a
          href="http://bitcoinassociation.ch/Bitcoin-A_Promise_of_Freedom.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#c75b4a] hover:underline"
        >
          my report on Bitcoin
        </a>{" "}
        to his readers - which he unfortunately did not even though he indicated interest. The report he finally attached is an interesting read, containing an excellent collection of quotes (e.g. &quot;Every informed person needs to know about Bitcoin because it might be one of the world&apos;s most important developments.&quot; by Nobel price winner Leon Louw) and showing various charts copied from the internet (e.g. this{" "}
        <a
          href="https://bitcointalk.org/index.php?topic=292068.0"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#c75b4a] hover:underline"
        >
          Bitcoin Ecosystem Snapshot
        </a>
        ). It lists three scenarios and attaches long-term values between 5&apos;714 USD and 119&apos;000 USD per Bitcoin. For the latter, the author randomly assumes that Bitcoin can capture 1% of the global money supply - not a very profound analysis. Nevertheless, I find it notable that Marc Faber finally decided to inform his readers about Bitcoin (without endorsing it). It is a symptom of raising awareness among investors and a good sign for the future.
      </p>
    </BlogPostLayout>
  );
}
