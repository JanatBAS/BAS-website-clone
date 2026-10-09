import BlogPostLayout, { type BlogPostComment } from "@/components/BlogPostLayout";
import { getPostPage } from "@/data/blog-posts";
import { Metadata } from "next";

const post = getPostPage("the-latest-regulatory-threat");

const comments: BlogPostComment[] = [
  {
    author: "charona",
    date: "8 years ago",
    pending: true,
    likes: 0,
    body: (
      <p className="text-sm text-gray-700">
        Well we could try Bank Frick in Liechtenstein, Swissquote, which is a
        bank that allows crypto trading, or even Julius Bar: the CEO&apos;s name
        is Hodler :) I agree that the proposed law doesn&apos;t make any sense
        though.
      </p>
    ),
  },
  {
    author: "David Gerard",
    authorUrl: "https://davidgerard.co.uk/blockchain/",
    date: "8 years ago",
    pending: true,
    likes: 0,
    body: (
      <p className="text-sm text-gray-700">
        Isn&apos;t that from over two years ago? &quot;Last modification
        05.01.2016&quot;
      </p>
    ),
  },
  {
    author: "Urs",
    authorUrl: "http://bolt-now.com/",
    date: "8 years ago",
    pending: true,
    likes: 0,
    body: (
      <>
        <p className="text-sm text-gray-700">
          Thanks for your observations, Luzius. As you, I try not fall into a
          conspiracy trap, but I believe that the the financial sector
          implicitly agrees that a decentralised money system is a threat.
          Their lobby tries to suppress by pushing for new regulations.
        </p>
        <p className="text-sm text-gray-700 mt-2">
          It&apos;s the empire striking back.
        </p>
      </>
    ),
  },
];

export const metadata: Metadata = {
  title: post.title,
  description:
    "The Swiss government has proposed a law that inadvertently threatens Switzerland's excellent position in the international race for becoming the preferred jurisdiction for crypto startups.",
};

export default function TheLatestRegulatoryThreatPage() {
  return (
    <BlogPostLayout post={post} comments={comments}>
      <p>
        The Swiss government has{" "}
        <a
          href="https://www.admin.ch/gov/en/start/documentation/media-releases.msg-id-69518.html"
          className="text-brand hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          proposed a law
        </a>{" "}
        that inadvertently threatens Switzerland&apos;s excellent position in the
        international race for becoming the preferred jurisdiction for crypto
        startups. In particular, the federal council drafted legislation to
        comply with the latest recommendations of the &quot;Global Forum for
        Transparency and Taxation&quot; of the OECD. In order to increase
        transparency regarding the beneficiary owners of Swiss companies, the
        draft proposes (among other things) to make bank accounts mandatory for
        all legal persons! This law threatens our very existence. If enacted,
        Bitcoin Association Switzerland would not be allowed to exist any longer
        as it is unlikely that we would find a Swiss bank that provides us with
        an account. Getting a bank account sounds simple, but for crypto startups
        it is not. Most Swiss banks refuse to enter into a business relationship
        with any entity that has &quot;Bitcoin&quot; in its name or is otherwise
        related to crypto currencies or blockchain technology. This is not unlike
        the situation in Israel, where bank Leumi tried to close the bank
        accounts of a local exchange, but was fortunately{" "}
        <a
          href="https://www.coindesk.com/israeli-supreme-court-rules-for-bitcoin-broker-in-bank-dispute/"
          className="text-brand hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          stopped by the supreme court
        </a>
        .
      </p>

      <p>
        However, there is no need to panic as this stage. The proposed law is
        just that: an early proposal. It currently is in the stage of public
        review. At this stage, anyone can send their comments about the law to
        the department of finance, who reviews them and may or may not adjust
        the proposal in response to these comments. We greatly appreciate this
        opportunity and{" "}
        <a
          href="https://github.com/meisserecon/www/raw/gh-pages/drafts/StellungnahmeGlobalForum.pdf"
          className="text-brand hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          have formally handed in an according comment today
        </a>
        . It points at a much lighter, less invasive variant that would not give
        banks a new supervisory role and still satisfy the demands of the global
        forum. However, our preferred resolution would be to discard the proposal
        entirely, as already today the cost of regulation in the financial sector
        greatly outweighs its benefits. Interestingly, the accompanying comment
        by the federal council does not even try to argue that the proposed law
        is a good idea in itself, the only argument they bring forward in favor
        of the law is that it would reduce international pressure to provide more
        Swiss corporate data to foreign governments. Maybe I&apos;m naive, but I
        think this is a pitiful reason to create a law. Laws should be created
        because one is convinced that they are good and sensible measures to
        improve the legal framework of a country, and not because of
        international peer pressure. Also, I do not believe that this is a
        sustainable way to reduce international pressure. Committees like the
        &quot;global forum&quot; would lose their raison d&apos;etre if they ever
        came to the conclusion that there is enough transparency, so they come up
        with new and stricter regulation at every round of reviews. Fortunately,
        some of the major parties (the SVP and the CVP) have previously{" "}
        <a
          href="https://www.newsd.admin.ch/newsd/message/attachments/51080.pdf"
          className="text-brand hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          commented critically on a similar proposal
        </a>
        , so there is a good chance it will be watered down on its way through
        the parliament (if it even gets that far).
      </p>

      <p>
        <strong>Update 25/11/2018</strong>: Great news! After having reviewed all
        comments,{" "}
        <a
          href="https://www.newsd.admin.ch/newsd/message/attachments/54721.pdf"
          className="text-brand hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          the federal council has decided
        </a>{" "}
        to drop compulsory bank accounts (art. 958g) from the proposal. We thank
        everyone who filed similar comments as we did, thereby helping to avert
        this potential problem.
      </p>
    </BlogPostLayout>
  );
}
