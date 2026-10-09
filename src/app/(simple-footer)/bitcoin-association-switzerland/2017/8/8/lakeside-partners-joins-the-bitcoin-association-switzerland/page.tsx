import BlogPostLayout from "@/components/BlogPostLayout";
import { getPostPage } from "@/data/blog-posts";
import { Metadata } from "next";

const post = getPostPage("lakeside-partners-joins-the-bitcoin-association-switzerland");

export const metadata: Metadata = {
  title: post.title,
  description:
    "Lakeside Partners set up a mining operation in-house and paid the annual membership fee for the Bitcoin Association Switzerland with Bitcoin they mined themselves.",
};

export default function LakesidePartnersJoinsPage() {
  return (
    <BlogPostLayout post={post}>
      <p>
        Some people take pride in being self-made, though it can mean different things to different people.{" "}
        <a
          href="https://www.youtube.com/watch?v=hSH9aVGIsWo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand hover:underline"
        >
          Building a company from scratch
        </a>
        ,{" "}
        <a
          href="http://www.thesimpledollar.com/a-walkthrough-and-cost-breakdown-of-brewing-your-own-beer/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand hover:underline"
        >
          brewing your own beer
        </a>{" "}
        at home or{" "}
        <a
          href="http://www.mackcollier.com/so-you-want-to-write-a-book-heres-10-things-you-need-to-know-to-get-published/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand hover:underline"
        >
          writing and publishing a book
        </a>
        .
      </p>

      <p>
        But it&apos;s rarer to find someone who not only has earned their fortune by the sweat of their brow, but who has also produced the money in that fortune. With the advent of cryptocurrencies, the entire idea of &quot;making money&quot; has been turned on its head, as has the idea of money itself.
      </p>

      <p>And as Dostoyevsky said, &quot;Money is coined freedom&quot;.</p>

      <p>
        So if you come up against a situation where you need to pay for something – like the membership fee to the Bitcoin Association of Switzerland, for instance – and you are loathe to &quot;pull the money&quot; out of your own pocket, you could always &quot;make your own&quot; i.e. mine it and pay with it.
      </p>

      <p>
        Yes, it might sound funny, but why not? After all, there is no better way get to the bottom of something than to &quot;get your hands dirty&quot; and learn first-hand.
      </p>

      <p>
        This was the approach that{" "}
        <a
          href="http://lakeside.partners/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand hover:underline"
        >
          Lakeside Partners
        </a>{" "}
        decided to take. After making the decision to get into the blockchain and crypto space, the obvious next step was to set up a mining operation in-house. Nothing extreme, mind you – but enough to get a handle on how things work and pay the annual membership fee for the Bitcoin Association Switzerland (we famously only accept Bitcoin for{" "}
        <a
          href="https://www.bitcoinassociation.ch/join/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand hover:underline"
        >
          membership
        </a>{" "}
        fees).
      </p>

      <p>
        Admittedly, this wasn&apos;t Lakeside Partners first foray into cryptocurrencies: earlier this year, their sister company{" "}
        <a
          href="http://inacta.ch/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand hover:underline"
        >
          inacta AG
        </a>{" "}
        assisted in{" "}
        <a
          href="http://www.luzernerzeitung.ch/nachrichten/wirtschaft/weinhaendler-akzeptiert-bitcoin;art9642,1056053"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand hover:underline"
        >
          bringing Bitcoin payments
        </a>{" "}
        to one of the most popular specialty shops in Zug -{" "}
        <a
          href="http://www.houseofwines.ch/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand hover:underline"
        >
          House of Wines
        </a>
        . Lakeside Partners is also the company behing Europe&apos;s largest{" "}
        <a
          href="http://www.blockchaincompetition.ch/en/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand hover:underline"
        >
          blockchain startup contest
        </a>
        .
      </p>

      <p>
        Let&apos;s close this blog post with a quote from Ralf Glabschnig, one of the partners at the firm: &quot;When we do something, we want to do it whole-heartedly. We see great potential in the blockchain and crypto space here in Switzerland - and if you want to be a part of that, you have to get involved, see first-hand how it works. And of course, joining the Bitcoin Association is part of that.&quot;
      </p>

      <p>
        Naturally, the Bitcoin Assocation Switzerland is happy about every new member joining our ranks, whether you&apos;ve mined the coins all by yourself, or bought them in exchange for crypto or old fashioned currency. Just as Ralf said above: &quot;if you want to be a part of that, you have to get involved&quot;.
      </p>
    </BlogPostLayout>
  );
}
