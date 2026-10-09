import BlogPostLayout, { type BlogPostComment } from "@/components/BlogPostLayout";
import { getPostPage } from "@/data/blog-posts";
import { Metadata } from "next";

const post = getPostPage("the-mtgox-debacle-would-not-have-happened-in-a-free-market");

const comments: BlogPostComment[] = [
  {
    author: "Hans Loepfe",
    date: "12 years ago",
    likes: 0,
    body: (
      <p className="text-sm text-gray-600">
        A sad truth very well expressed.
      </p>
    ),
  },
  {
    author: "Strässle Max",
    date: "12 years ago",
    likes: 0,
    body: (
      <p className="text-sm text-gray-600">
        Gibt es keine derivative Produkte Futures/Options auf Bitcoin? Zu
        Absicherungszwecken gäbe das grösseren Spielraum für
        Institutionelle Anleger und höheren Open Interest was sich
        wiederum stabilisierend auf den Preis auswirken sollte.
      </p>
    ),
  },
];

export const metadata: Metadata = {
  title: post.title,
  description:
    "Some will blame the spectacular failure of MtGox on a lack of regulation, but the main reason is a long history of lacking competition.",
};

export default function MtGoxDebacleFreemarketPage() {
  return (
    <BlogPostLayout post={post} comments={comments}>
      <p>
        As{" "}
        <a
          href="http://blog.blockchain.info/2014/02/25/joint-statement/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand hover:underline"
        >
          other places reported
        </a>
        , MtGox failed spectacularly and ceased operations today. Some will blame
        this on a lack of regulation. Nothing could be further from the truth.
        The main reason for this failure being so spectacular is a long history
        of lacking competition. Even though MtGox repeatedly faced problems like
        days of suspended trading, customers did not have many viable
        alternatives. In many countries, the legal costs of setting up a
        financial service website like a Bitcoin exchange are prohibitive. The
        Internet thrives on people being able to experiment - otherwise, sites
        like{" "}
        <a
          href="http://ebay.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand hover:underline"
        >
          ebay.com
        </a>
        ,{" "}
        <a
          href="http://doodle.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand hover:underline"
        >
          doodle.com
        </a>{" "}
        or{" "}
        <a
          href="http://yahoo.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand hover:underline"
        >
          yahoo.com
        </a>{" "}
        would never habe been created. I personally have repeatedly met
        motivated enthusiasts who wanted to setup their own Bitcoin exchanges.
        Unfortunately, regulation is holding them back. Had they been able to
        create their exchange websites, MtGox would have seen much more
        competition much earlier - giving customers the opportunity to diversify
        and reducing their exposure to a single operator.
      </p>

      <p>
        However, in an ironic twist, the very regulation that seeks to protect
        customers potentiated their risks by preventing them from effectively
        diversifying. The financial services industry is in an ongoing vicious
        circle of market failures that make politicians enact more rigorous
        regulation, which stiffles competition, which again leads to more market
        failures and regulation.
      </p>

      <p>
        - Written by Luzius Meisser, President of Bitcoin Association
        Switzerland
      </p>
    </BlogPostLayout>
  );
}
