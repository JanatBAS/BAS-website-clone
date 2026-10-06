import BlogPostLayout, { BlogPostData } from "@/components/BlogPostLayout";
import Link from "next/link";
import { Metadata } from "next";

const post: BlogPostData = {
  title: "Our Comment on GWV-FINMA adjustment for FinSA / FinIA",
  date: "9 April 2020",
  author: "Luzius Meisser",
  authorId: "5a9907f3e4966b72996b9c31",
  href: "/bitcoin-association-switzerland/2020/4/9/our-comment-on-gwv-finma-adjustment-for-finsa-finia",
  tags: ["Regulation"],
  featuredImage: "/images/blog/finma-comment.jpg",
  comments: [
    {
      author: "Pocket",
      date: "6 years ago",
      likes: 0,
      body: (
        <p className="text-sm text-[#87a4ad] leading-relaxed">
          Thank you for taking a stance here. Seems unreasonable to think that reducing an
          already low limit would reduce shady transactions. This change would only harm
          responsible intermediaries and force genuine customers to foreign platforms.
        </p>
      ),
    },
  ],
  newerPost: {
    title:
      "Our Comment on the risk assessment for global Stablecoins of the G20's Financial Stability Board",
    href: "/bitcoin-association-switzerland/on-the-risk-assessment-for-global-stablecoins-of-the-g20s-financial-stability-board",
  },
  olderPost: {
    title:
      "Our Comment on \"Designing a prudential treatment for cryptoassets\" of the Basel Committee on Banking Supervision",
    href: "/bitcoin-association-switzerland/our-comment-on-designing-a-prudential-treatment-for-cryptoassets-of-the-basel-committee-on-banking-supervision",
  },
};

export const metadata: Metadata = {
  title: post.title,
  description:
    "On the 8th of April 2020 we sent a comment to FINMA regarding the new money laundering ordinance, recommending to remove article 51a or to set the new threshold of CHF 1'000 for all currencies.",
};

export default function GwvFinmaCommentPage() {
  return (
    <BlogPostLayout post={post}>
      <p className="mb-6">
        On the 8th of April 2020 we sent the{" "}
        <Link
          href="#"
          className="text-[#87a4ad] hover:opacity-80"
        >
          following comment to FINMA regarding the new money laundering ordinance
        </Link>
        :
      </p>

      <p className="mb-6">
        On February 7th 2020, FINMA has published an ordinance project as well as several partial
        ordinance revision projects including the{" "}
        <Link
          href="#"
          className="text-[#87a4ad] hover:opacity-80"
        >
          Geldwaschereiverordnung-FINMA (GWV-FINMA)
        </Link>
        . We greatly appreciate this opportunity to take part in the public consultation and want to
        point out a specific detail that affects crypto currencies.
      </p>

      <p className="mb-6">
        The proposed article 51a GvW-FINMA would{" "}
        <strong className="text-gray-900">
          create a legal difference between virtual currencies and traditional currencies
        </strong>
        , imposing different limits to the exception of identifying the parties in an exchange
        transaction. This goes against the principle of technological neutrality FINMA usually
        adheres to. Furthermore, it is unclear whether &quot;virtual currency&quot; refers to the technical
        form (so it would for example also apply to a blockchain-based dollar, but not to the
        transfer of a contractual claim denominated in Bitcoin) or to the denomination (so it
        would apply to the claim in Bitcoin, but not to the blockchain-based dollar).
      </p>

      <p className="mb-6">
        We recommend FINMA to <strong className="text-gray-900">remove article 51a</strong> or to{" "}
        <strong className="text-gray-900">change article 51</strong> to set the new threshold of
        CHF 1&apos;000 to all currencies in order to preserve{" "}
        <Link
          href="#"
          className="text-[#87a4ad] hover:opacity-80"
        >
          technical neutrality
        </Link>{" "}
        and to avoid unnecessary{" "}
        <Link
          href="#"
          className="text-[#87a4ad] hover:opacity-80"
        >
          uncertainty
        </Link>
        .
      </p>
    </BlogPostLayout>
  );
}
