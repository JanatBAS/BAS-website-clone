import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

interface BlogPost {
  id: string;
  author: string;
  date: string;
  title: string;
  excerpt: string;
  href: string;
  image?: string;
  commentCount?: number;
  likeCount?: number;
}

// Posts tagged with "Regulation"
const regulationPosts: BlogPost[] = [
  {
    id: "1",
    author: "Phil Lojacono",
    date: "28 February 2025",
    title:
      "Bitcoin Association Switzerland Welcomes the Federal Council's Endorsement of Enhanced Bitcoin Regulation",
    excerpt:
      "The Bitcoin Association Switzerland, in collaboration with key stakeholders such as the Swiss Blockchain Federation, welcomes the Federal Council's acceptance of a motion and the positive answer to an interpellation introduced by National Councilor Benjamin Fischer. This development marks a significant step forward in enhancing regulatory clarity for Bitcoin and digital assets in Switzerland.",
    href: "/bitcoin-association-switzerland/2025/2/28/bitcoin-association-switzerland-welcomes-the-federal-councils-endorsement-of-enhanced-bitcoin-regulation",
    commentCount: 0,
    likeCount: 0,
  },
  {
    id: "2",
    author: "Roger Darin",
    date: "10 August 2022",
    title: "Prudential Treatment of Cryptoasset Exposures II",
    excerpt:
      "While the Bank for International Settlement / Basel Committee on Banking Supervision continues to propose regulation, they also have developed a habit of not addressing legitimate concerns from the community. That is highly regrettable, but no reason to throw in the towel. So the Bitcoin Association Switzerland continues to provide constructive feedback and - so we think - well argued suggestions on how to improve on the longterm goals of the BIS to make the space safer and allow for more innovation.\n\nThe letter we sent out this week is continuing this tradition.",
    href: "/bitcoin-association-switzerland/2022/8/10/prudential-treatment-of-cryptoasset-exposures-ii",
    image:
      "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1660148501401-GDNI2ZA03O3AI2DBF64S/header7.jpg?format=2500w",
    commentCount: 3,
    likeCount: 10,
  },
  {
    id: "3",
    author: "Luzius Meisser",
    date: "27 June 2021",
    title: "Prudential Treatment of Cryptoasset Exposures",
    excerpt:
      "The Bank for International Settlement (BIS) has recently published a consultative paper on the Prudential Treatment of Crytpoasset Exposure. Being good citizens, we were happy to follow the BIS' call for a response to their proposals with constructive feedback that not only points out where they err, but more importantly how some of the proposed principals will prove detrimental to the stability of the financial system they BIS is trying to protect. Never has a proverb being more fitting than this: the path to hell is paved with good intentions.",
    href: "/bitcoin-association-switzerland/2021/7/3/comments-of-bitcoin-association-switzerland-on-the-draft-revised-vasp-guidance",
    image:
      "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1625316894565-48R3KDJ62EIEK3979TFK/June.jpg?format=2500w",
    commentCount: 1,
    likeCount: 1,
  },
  {
    id: "4",
    author: "Luzius Meisser",
    date: "20 June 2020",
    title:
      "Our Comment on the risk assessment for global Stablecoins of the G20's Financial Stability Board",
    excerpt:
      'Today we sent the following letter to the Financial Stability Board of the G-20 commenting on their risk assessment for "global stablecoins":',
    href: "/bitcoin-association-switzerland/on-the-risk-assessment-for-global-stablecoins-of-the-g20s-financial-stability-board",
    image:
      "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1592639163221-RXP2V0ZPFYHH8B88Z4Z5/fsb2.png?format=2500w",
    commentCount: 1,
    likeCount: 7,
  },
  {
    id: "5",
    author: "Luzius Meisser",
    date: "9 April 2020",
    title: "Our Comment on GWV-FINMA adjustment for FinSA / FinIA",
    excerpt:
      "On the 8th of April 2020 we sent the following comment to FINMA regarding the new money laundering ordinance...",
    href: "/bitcoin-association-switzerland/2020/4/9/our-comment-on-gwv-finma-adjustment-for-finsa-finia",
    image:
      "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1590915938137-1C75QPLGN3SQ2KRXW0UQ/2020-04-07%2BBitcoin%2BAssociation%2BSwitzerland%2B-%2BFinma%2BComment.jpg?format=500w",
    commentCount: 1,
    likeCount: 4,
  },
  {
    id: "6",
    author: "Luzius Meisser",
    date: "13 March 2020",
    title:
      'Our Comment on "Designing a prudential treatment for cryptoassets" of the Basel Committee on Banking Supervision',
    excerpt:
      "In December 2019 the Basel Committee on Banking Supervision published a discussion paper on the design of a prudential treatment for crypto-assets and welcomed comments on its analyses and ideas. The comment submitted by the Bitcoin Association Switzerland are the following...",
    href: "/bitcoin-association-switzerland/our-comment-on-designing-a-prudential-treatment-for-cryptoassets-of-the-basel-committee-on-banking-supervision",
    image:
      "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1584017859238-JP46VXGK5XY26VO0H5X2/basel.jpg?format=2500w",
    commentCount: 1,
    likeCount: 6,
  },
  {
    id: "7",
    author: "Luzius Meisser",
    date: "3 December 2019",
    title: "Crypto Valley Association Issues Questionable Recommendations",
    excerpt:
      'While the Crypto Valley Association\'s paper on "Asset Tokenization" contains many insightful sections, there are other sections that get some fundamental legal considerations embarrassingly wrong. Further questionable is a piece of advice that could make an issued token incompatible with the law. In this blog post, we shed light on the three biggest blunders of the paper.',
    href: "/bitcoin-association-switzerland/2019/12/3/crypto-valley-association-issues-questionable-recommendations",
    commentCount: 1,
    likeCount: 13,
  },
  {
    id: "8",
    author: "Luzius Meisser",
    date: "27 June 2019",
    title: "Our Comment on the Swiss Blockchain Law",
    excerpt:
      "In March, the Federal Council presented a draft for a number of legal adjustments and invited Bitcoin Association Switzerland to take part in the public consultation. The consultation phase ends this month and we have filed an extensive comment, in which we support the position of the Swiss Blockchain Federation and lay out some of our common concerns in more detail. In this blog post, I will summarize the content of the proposed law as well as the comments of both Blockchain Federation and Bitcoin Association.",
    href: "/bitcoin-association-switzerland/2019/6/27/our-comment-on-the-swiss-blockchain-law",
    image:
      "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1561722207919-POHSK01LHZR0HKI1UBU1/bitcoin-regulation-cryptocurrency-exchange.jpg?format=1000w",
    commentCount: 2,
    likeCount: 11,
  },
  {
    id: "9",
    author: "Luzius Meisser",
    date: "14 December 2018",
    title: "On the Federal Council Report",
    excerpt:
      "The federal council published its 170-page report on the legal foundations of the blockchain in Switzerland. It incorporates the findings of the consultation that took place in September and to which the Bitcoin Association also provided some inputs. All in all, it is great that the Swiss government not only recognizes the potential of the blockchain, but also applies the right strategy for allowing the blockchain-ecosystem to flourish.",
    href: "/bitcoin-association-switzerland/2018/12/14/on-the-federal-council-report",
    likeCount: 8,
  },
];

function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <article className="py-8">
      {/* Meta above title */}
      <div className="text-xs text-gray-500 uppercase tracking-wider mb-2 space-y-1">
        <div>
          <Link
            href={`/bitcoin-association-switzerland?author=${post.author.toLowerCase().replace(" ", "-")}`}
            className="hover:text-[#c75b4a]"
          >
            {post.author}
          </Link>
        </div>
        <div>
          <Link href={post.href} className="hover:text-[#c75b4a]">
            {post.date}
          </Link>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 tracking-wide uppercase">
        <Link href={post.href} className="hover:text-[#c75b4a] transition-colors">
          {post.title}
        </Link>
      </h2>

      {/* Image (if present) */}
      {post.image && (
        <div className="mb-4">
          <Link href={post.href}>
            <Image
              src={post.image}
              alt={post.title}
              width={800}
              height={400}
              className="w-full h-auto object-cover"
            />
          </Link>
        </div>
      )}

      {/* Excerpt */}
      <div className="text-sm text-gray-700 leading-relaxed mb-4 whitespace-pre-line">
        {post.excerpt}
      </div>

      {/* Tags */}
      <div className="text-xs text-gray-500 mb-3">
        Tagged:{" "}
        <Link
          href="/bitcoin-association-switzerland/tag/Regulation"
          className="text-[#c75b4a] hover:underline"
        >
          Regulation
        </Link>
      </div>

      {/* Footer actions */}
      <div className="flex items-center gap-4 text-xs text-gray-500">
        {post.commentCount !== undefined && (
          <Link href={`${post.href}#comments`} className="hover:text-[#c75b4a]">
            {post.commentCount === 0
              ? "Comment"
              : post.commentCount === 1
                ? "1 Comment"
                : `${post.commentCount} Comments`}
          </Link>
        )}
        {post.likeCount !== undefined && (
          <span className="flex items-center gap-1">
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            {post.likeCount} Likes
          </span>
        )}
        <button className="flex items-center gap-1 hover:text-[#c75b4a]">
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
            />
          </svg>
          Share
        </button>
      </div>
    </article>
  );
}

export default function RegulationTagPage() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-white">
        {/* Featured Header Banner - styled like a document/letter reference */}
        <div className="bg-[#5a7a7a] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col md:flex-row items-start gap-8">
              {/* Left side - Letter header info */}
              <div className="flex-shrink-0">
                <div className="text-right text-sm">
                  <p>Zurich, 2022-08-07</p>
                </div>
                <div className="mt-4 text-sm">
                  <p className="font-semibold">To:</p>
                  <p>Bank for International Settlements (BIS)</p>
                  <p>Basel Committee on Banking Supervision</p>
                </div>
              </div>

              {/* Right side - Title */}
              <div className="flex-1">
                <h1 className="text-xl md:text-2xl font-semibold tracking-wide uppercase">
                  Prudential Treatment of Cryptoasset Exposures II
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts List */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {regulationPosts.map((post, index) => (
            <div key={post.id}>
              <BlogPostCard post={post} />
              {index < regulationPosts.length - 1 && (
                <Separator className="bg-gray-200" />
              )}
            </div>
          ))}
        </div>
      </main>
      <FooterSimple />
    </>
  );
}
