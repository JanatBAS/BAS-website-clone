import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

interface BlogPost {
  id: string;
  author: string;
  authorId: string;
  date: string;
  category?: string;
  title: string;
  excerpt: string;
  href: string;
  image?: string;
  tags?: string[];
  commentCount?: number;
  likeCount?: number;
}

// Author ID mapping (matching original Squarespace IDs)
const authorIds: Record<string, string> = {
  "kronrod": "59025f1030454480d862303f",
  "Phil Lojacono": "672bdb3ae0672c1501f39ce8",
  "Roger Darin": "54edd73ae4b04709779918e4",
  "Luzius Meisser": "5a9907f3e4966b72996b9c31",
  "Lucas Betschart": "5895fa2e725e2525b0696fd4",
};

// Reverse mapping for lookup
const authorNames: Record<string, string> = Object.fromEntries(
  Object.entries(authorIds).map(([name, id]) => [id, name])
);

const featuredPost: BlogPost = {
  id: "featured",
  author: "Roger Darin",
  authorId: "54edd73ae4b04709779918e4",
  date: "10 August 2022",
  title: "Prudential Treatment of Cryptoasset Exposures II",
  excerpt:
    "While the Bank for International Settlement / Basel Committee on Banking Supervision continues to propose regulation, they also have developed a habit of not addressing legitimate concerns from the community. That is highly regrettable, but no reason to throw in the towel. So the Bitcoin Association Switzerland continues to provide constructive feedback and - so we think - well argued suggestions on how to improve on the longterm goals of the BIS to make the space safer and allow for more innovation.",
  href: "/bitcoin-association-switzerland/2022/8/10/prudential-treatment-of-cryptoasset-exposures-ii",
  image:
    "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1660148501401-GDNI2ZA03O3AI2DBF64S/header7.jpg?format=2500w",
};

const blogPosts: BlogPost[] = [
  {
    id: "1",
    author: "kronrod",
    authorId: "59025f1030454480d862303f",
    date: "9 December 2025",
    category: "Uncategorized",
    title: "Bitcoin in 10vor10",
    excerpt:
      "Bitcoin in 10vor10\nA long 10vor10 segment about Bitcoin. Well done.",
    href: "/bitcoin-association-switzerland/2014/01/14/bitcoin-in-10vor10",
    commentCount: 1,
    likeCount: 0,
  },
  {
    id: "2",
    author: "kronrod",
    authorId: "59025f1030454480d862303f",
    date: "9 December 2025",
    category: "Uncategorized",
    title: "Marc Faber points readers to Bitcoin",
    excerpt:
      'Swiss investment guru Marc Faber publishes a monthly market commentary. Along with the June commentary, he sent his subscribers a report on Bitcoin, titled "Dispelling the Myths of Bitcoin" and written by Lee Robinson from Atlana wealth. I already was in contact with Faber last autumn suggesting that he should send my report on Bitcoin to his readers - which he unfortunately did not even though he indicated interest. The report he finally attached is an interesting read, containing an excellent collection of quotes...',
    href: "/bitcoin-association-switzerland/2014/06/04/marc-faber-points-readers-to-bitcoin",
    image:
      "http://static4.businessinsider.com/image/4d40343ccadcbb1d1a010000/marc-faber-moral-decay-among-the-elites-proves-america-is-a-failed-state.jpg",
    commentCount: 0,
    likeCount: 0,
  },
  {
    id: "3",
    author: "Phil Lojacono",
    authorId: "672bdb3ae0672c1501f39ce8",
    date: "31 May 2025",
    title:
      "Statement on the 12-Point Program for a Forward-Looking Digital Financial Center",
    excerpt:
      "The Bitcoin Association Switzerland supports the 12-point program jointly developed by leading industry associations to foster a strong and future-oriented environment for digital innovation in Switzerland. We believe this framework is an important step toward ensuring regulatory clarity, technological advancement, and an open, competitive financial system that empowers individuals and businesses alike.",
    href: "/bitcoin-association-switzerland/2025/12/8/-",
    commentCount: 0,
    likeCount: 0,
  },
  {
    id: "4",
    author: "Phil Lojacono",
    authorId: "672bdb3ae0672c1501f39ce8",
    date: "28 February 2025",
    title:
      "Bitcoin Association Switzerland Welcomes the Federal Council's Endorsement of Enhanced Bitcoin Regulation",
    excerpt:
      "The Bitcoin Association Switzerland, in collaboration with key stakeholders such as the Swiss Blockchain Federation, welcomes the Federal Council's acceptance of a motion and the positive answer to an interpellation introduced by National Councilor Benjamin Fischer. This development marks a significant step forward in enhancing regulatory clarity for Bitcoin and digital assets in Switzerland.",
    href: "/bitcoin-association-switzerland/2025/2/28/bitcoin-association-switzerland-welcomes-the-federal-councils-endorsement-of-enhanced-bitcoin-regulation",
    tags: ["Regulation"],
    commentCount: 0,
    likeCount: 0,
  },
  {
    id: "5",
    author: "Phil Lojacono",
    authorId: "672bdb3ae0672c1501f39ce8",
    date: "13 November 2024",
    title:
      "Bitcoin Association Switzerland appoints new board, sets bold vision for the future",
    excerpt:
      "Bitcoin Association Switzerland (BAS) is proud to announce the appointment of a new board, marking a fresh chapter in its long-standing commitment to Bitcoin advocacy and innovation. Founded in 2013, BAS has a rich history of being at the forefront of global Bitcoin adoption. As one of the earliest Bitcoin associations, it played a pivotal role in positioning Switzerland as a global leader in Bitcoin and Blockchain technology.",
    href: "/bitcoin-association-switzerland/2025/12/8/bitcoin-association-switzerland-appoints-new-board-sets-bold-vision-for-the-future",
    commentCount: 0,
    likeCount: 0,
  },
  {
    id: "6",
    author: "Phil Lojacono",
    authorId: "672bdb3ae0672c1501f39ce8",
    date: "27 October 2024",
    title: "Announcement from the Board of the Bitcoin Association Switzerland",
    excerpt:
      "Dear Members of Bitcoin Association Switzerland,\n\nWe are excited to share our first update with you as your newly appointed board. We recently held our first board meeting, and we want to ensure transparent communication with all of you as we begin this journey together.",
    href: "/bitcoin-association-switzerland/2025/12/8/announcement-from-the-board-of-the-bitcoin-association-switzerland",
    commentCount: 0,
    likeCount: 0,
  },
  {
    id: "7",
    author: "Roger Darin",
    authorId: "54edd73ae4b04709779918e4",
    date: "10 August 2022",
    title: "Prudential Treatment of Cryptoasset Exposures II",
    excerpt:
      "While the Bank for International Settlement / Basel Committee on Banking Supervision continues to propose regulation, they also have developed a habit of not addressing legitimate concerns from the community. That is highly regrettable, but no reason to throw in the towel. So the Bitcoin Association Switzerland continues to provide constructive feedback and - so we think - well argued suggestions on how to improve on the longterm goals of the BIS to make the space safer and allow for more innovation.",
    href: "/bitcoin-association-switzerland/2022/8/10/prudential-treatment-of-cryptoasset-exposures-ii",
    image:
      "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1660148501401-GDNI2ZA03O3AI2DBF64S/header7.jpg?format=2500w",
    tags: ["Regulation"],
    commentCount: 3,
    likeCount: 10,
  },
  {
    id: "8",
    author: "Luzius Meisser",
    authorId: "5a9907f3e4966b72996b9c31",
    date: "27 June 2021",
    title: "Prudential Treatment of Cryptoasset Exposures",
    excerpt:
      "The Bank for International Settlement (BIS) has recently published a consultative paper on the Prudential Treatment of Crytpoasset Exposure. Being good citizens, we were happy to follow the BIS' call for a response to their proposals with constructive feedback that not only points out where they err, but more importantly how some of the proposed principals will prove detrimental to the stability of the financial system they BIS is trying to protect. Never has a proverb being more fitting than this: the path to hell is paved with good intentions.",
    href: "/bitcoin-association-switzerland/2021/7/3/comments-of-bitcoin-association-switzerland-on-the-draft-revised-vasp-guidance",
    image:
      "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1625316894565-48R3KDJ62EIEK3979TFK/June.jpg?format=2500w",
    tags: ["Regulation"],
    commentCount: 1,
    likeCount: 1,
  },
  {
    id: "9",
    author: "Luzius Meisser",
    authorId: "5a9907f3e4966b72996b9c31",
    date: "20 April 2021",
    title:
      "Comments of Bitcoin Association Switzerland on the draft revised VASP Guidance",
    excerpt:
      'The Bitcoin Association Switzerland has sent a comment on the FATF\'s revised draft guidance on crypto assets. In a consciously "expansive" approach, the FATF proposes to classify participants in decentralized systems as financial intermediaries even if they do not engage in financial intermediation. This would erode the benefits of disintermediation and cause great harm to the nascent sector of Decentralized Finance (DeFi). We criticize this approach and suggest a number of measures to contain the potential damage of imprudent regulation.',
    href: "/bitcoin-association-switzerland/2021/6/23/01ts1e8cggntafbag86wvwbztvudvh",
    image:
      "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1625317027225-0V2QI222IZBXZV25EUYN/april.jpg?format=2500w",
    commentCount: 1,
    likeCount: 0,
  },
  {
    id: "10",
    author: "Luzius Meisser",
    authorId: "5a9907f3e4966b72996b9c31",
    date: "20 June 2020",
    title:
      "Our Comment on the risk assessment for global Stablecoins of the G20's Financial Stability Board",
    excerpt:
      'Today we sent the following letter to the Financial Stability Board of the G-20 commenting on their risk assessment for "global stablecoins":',
    href: "/bitcoin-association-switzerland/on-the-risk-assessment-for-global-stablecoins-of-the-g20s-financial-stability-board",
    image:
      "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1592639163221-RXP2V0ZPFYHH8B88Z4Z5/fsb2.png?format=2500w",
    tags: ["Regulation"],
    commentCount: 1,
    likeCount: 7,
  },
  {
    id: "11",
    author: "Luzius Meisser",
    authorId: "5a9907f3e4966b72996b9c31",
    date: "9 April 2020",
    title: "Our Comment on GWV-FINMA adjustment for FinSA / FinIA",
    excerpt:
      "On the 8th of April 2020 we sent the following comment to FINMA regarding the new money laundering ordinance...",
    href: "/bitcoin-association-switzerland/2020/4/9/our-comment-on-gwv-finma-adjustment-for-finsa-finia",
    image:
      "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1590915938137-1C75QPLGN3SQ2KRXW0UQ/2020-04-07%2BBitcoin%2BAssociation%2BSwitzerland%2B-%2BFinma%2BComment.jpg?format=500w",
    tags: ["Regulation"],
    commentCount: 1,
    likeCount: 4,
  },
  {
    id: "12",
    author: "Luzius Meisser",
    authorId: "5a9907f3e4966b72996b9c31",
    date: "13 March 2020",
    title:
      'Our Comment on "Designing a prudential treatment for cryptoassets" of the Basel Committee on Banking Supervision',
    excerpt:
      "In December 2019 the Basel Committee on Banking Supervision published a discussion paper on the design of a prudential treatment for crypto-assets and welcomed comments on its analyses and ideas. The comment submitted by the Bitcoin Association Switzerland are the following...",
    href: "/bitcoin-association-switzerland/our-comment-on-designing-a-prudential-treatment-for-cryptoassets-of-the-basel-committee-on-banking-supervision",
    image:
      "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1584017859238-JP46VXGK5XY26VO0H5X2/basel.jpg?format=2500w",
    tags: ["Regulation"],
    commentCount: 1,
    likeCount: 6,
  },
  {
    id: "13",
    author: "Luzius Meisser",
    authorId: "5a9907f3e4966b72996b9c31",
    date: "3 December 2019",
    title: "Crypto Valley Association Issues Questionable Recommendations",
    excerpt:
      'While the Crypto Valley Association\'s paper on "Asset Tokenization" contains many insightful sections, there are other sections that get some fundamental legal considerations embarrassingly wrong. Further questionable is a piece of advice that could make an issued token incompatible with the law. In this blog post, we shed light on the three biggest blunders of the paper.',
    href: "/bitcoin-association-switzerland/2019/12/3/crypto-valley-association-issues-questionable-recommendations",
    tags: ["Regulation"],
    commentCount: 1,
    likeCount: 13,
  },
  {
    id: "14",
    author: "Luzius Meisser",
    authorId: "5a9907f3e4966b72996b9c31",
    date: "27 June 2019",
    title: "Our Comment on the Swiss Blockchain Law",
    excerpt:
      "In March, the Federal Council presented a draft for a number of legal adjustments and invited Bitcoin Association Switzerland to take part in the public consultation. The consultation phase ends this month and we have filed an extensive comment, in which we support the position of the Swiss Blockchain Federation and lay out some of our common concerns in more detail. In this blog post, I will summarize the content of the proposed law as well as the comments of both Blockchain Federation and Bitcoin Association.",
    href: "/bitcoin-association-switzerland/2019/6/27/our-comment-on-the-swiss-blockchain-law",
    image:
      "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1561722207919-POHSK01LHZR0HKI1UBU1/bitcoin-regulation-cryptocurrency-exchange.jpg?format=1000w",
    tags: ["Regulation"],
    commentCount: 2,
    likeCount: 11,
  },
  {
    id: "15",
    author: "Luzius Meisser",
    authorId: "5a9907f3e4966b72996b9c31",
    date: "14 December 2018",
    title: "On the Federal Council Report",
    excerpt:
      "The federal council published its 170-page report on the legal foundations of the blockchain in Switzerland. It incorporates the findings of the consultation that took place in September and to which the Bitcoin Association also provided some inputs. All in all, it is great that the Swiss government not only recognizes the potential of the blockchain, but also applies the right strategy for allowing the blockchain-ecosystem to flourish.",
    href: "/bitcoin-association-switzerland/2018/12/14/on-the-federal-council-report",
    tags: ["Regulation"],
    likeCount: 8,
  },
  {
    id: "16",
    author: "Luzius Meisser",
    authorId: "5a9907f3e4966b72996b9c31",
    date: "26 September 2018",
    title: "Is the Ethereum system a legal subject?",
    excerpt:
      "There are some hints that abstract systems like Ethereum should legally be treated like their own entities. The latest such hints comes from the context of value-added tax (VAT or MWST in German), where the taxation of transaction fees is practically impossible when trying to find a taxable relationship between miners and users.",
    href: "/bitcoin-association-switzerland/2018/9/24/is-the-ethereum-system-a-legal-subject",
    likeCount: 6,
  },
  {
    id: "17",
    author: "Luzius Meisser",
    authorId: "5a9907f3e4966b72996b9c31",
    date: "1 June 2018",
    title: "Why storing Bitcoins for clients does not make you a bank",
    excerpt:
      "The last few weeks have been very busy in the regulatory debate about Bitcoin and its consequences within the legal framework.",
    href: "/bitcoin-association-switzerland/2018/5/31/why-storing-bitcoins-for-clients-does-not-make-you-a-bank",
    image:
      "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1527748625110-S7D6CZO6B91C41JI82GK/ADWhiteReadingRoom%2C_CornellUniversity.jpg?format=2500w",
    likeCount: 9,
  },
  {
    id: "18",
    author: "Lucas Betschart",
    authorId: "5895fa2e725e2525b0696fd4",
    date: "17 May 2018",
    title: "Bitcoin Association Switzerland 2018: General Assembly",
    excerpt:
      "The Bitcoin scene in Switzerland has been strong since Mike Hearn, former Bitcoin developer and author of Bitcoinj, organized the first local Bitcoin meetup in February 2011. Over the years we have grown from a handful of people to over 5'500 Bitcoiners, making Switzerland home to one of the biggest Bitcoin communities in the world.",
    href: "/bitcoin-association-switzerland/2018/5/17/bitcoin-association-switzerland-2018-general-assembly",
    likeCount: 6,
  },
  {
    id: "19",
    author: "Luzius Meisser",
    authorId: "5a9907f3e4966b72996b9c31",
    date: "19 April 2018",
    title: "Better legal protection for clients of Bitcoin firms coming?",
    excerpt:
      "Marcel Dobler, member of the Swiss national parliament and co-founder of digitec.ch, proposed a law that could turn out to be very helpful for Crypto Nation Switzerland. It would give you the right to get your digital assets back in case you have stored them with a provider that goes bankrupt.",
    href: "/bitcoin-association-switzerland/2018/4/19/better-legal-protection-for-clients-of-bitcoin-firms-coming",
    image:
      "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1523969241135-TUY8W4QZU5PR74BWYIRT/insurance-1991213_960_720.jpg?format=1000w",
    likeCount: 1,
  },
  {
    id: "20",
    author: "Luzius Meisser",
    authorId: "5a9907f3e4966b72996b9c31",
    date: "3 March 2018",
    category: "Opinion",
    title: "The Latest Regulatory Threat",
    excerpt:
      "The Swiss government has proposed a law that inadvertently threatens Switzerland's excellent position in the international race for becoming the preferred jurisdiction for crypto startups.",
    href: "/bitcoin-association-switzerland/2018/3/2/the-latest-regulatory-threat",
    image:
      "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1520018401057-PP4IGOKSSYDZZHRO7R8O/threat.jpg?format=750w",
    commentCount: 3,
    likeCount: 20,
  },
];

function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <article className="py-8">
      {/* Meta above title */}
      <div className="text-xs text-gray-500 uppercase tracking-wider mb-2 space-y-1">
        <div>
          <Link
            href={`/bitcoin-association-switzerland?author=${post.authorId}`}
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
        {post.category && (
          <div>
            <Link
              href={`/bitcoin-association-switzerland/category/${post.category}`}
              className="hover:text-[#c75b4a]"
            >
              {post.category}
            </Link>
          </div>
        )}
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
      {post.tags && post.tags.length > 0 && (
        <div className="text-xs text-gray-500 mb-3">
          Tagged:{" "}
          {post.tags.map((tag, index) => (
            <span key={tag}>
              <Link
                href={`/bitcoin-association-switzerland/tag/${tag}`}
                className="text-[#c75b4a] hover:underline"
              >
                {tag}
              </Link>
              {index < post.tags!.length - 1 && ", "}
            </span>
          ))}
        </div>
      )}

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

interface PageProps {
  searchParams: Promise<{ author?: string; offset?: string }>;
}

export default async function BlogPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const authorFilter = params.author;

  // Get author name from ID
  const authorName = authorFilter ? authorNames[authorFilter] : null;

  // Filter posts by author if filter is active
  const filteredPosts = authorFilter
    ? blogPosts.filter((post) => post.authorId === authorFilter)
    : blogPosts;

  // Check if featured post matches filter (or show if no filter)
  const showFeaturedPost = !authorFilter || featuredPost.authorId === authorFilter;

  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-white">
        {/* Author Filter Banner */}
        {authorFilter && authorName && (
          <div className="bg-gray-100 py-4">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">
                  Showing posts by <span className="font-semibold">{authorName}</span>
                </p>
                <Link
                  href="/bitcoin-association-switzerland"
                  className="text-sm text-[#c75b4a] hover:underline"
                >
                  Clear filter
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Featured Post Banner - only show if no filter or matches author */}
        {showFeaturedPost && (
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
            <Image
              src={featuredPost.image!}
              alt={featuredPost.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                <div className="text-sm uppercase tracking-wider mb-2">
                  {featuredPost.date}
                </div>
                <div className="text-sm mb-2">
                  <Link
                    href={`/bitcoin-association-switzerland?author=${featuredPost.authorId}`}
                    className="hover:underline"
                  >
                    {featuredPost.author}
                  </Link>
                </div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold uppercase tracking-wider mb-4">
                  <Link href={featuredPost.href} className="hover:opacity-80">
                    {featuredPost.title}
                  </Link>
                </h1>
                <p className="text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
                  {featuredPost.excerpt}
                </p>
                <p className="text-sm mt-4">
                  The{" "}
                  <Link
                    href="https://www.bitcoinassociation.ch/s/2022-08-07-BAS-comment-on-BIS-final.pdf"
                    className="underline hover:opacity-80"
                    target="_blank"
                  >
                    letter
                  </Link>{" "}
                  we sent out this week is continuing this tradition.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Blog Posts List */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {filteredPosts.length === 0 ? (
            <div className="py-12 text-center text-gray-500">
              <p>No posts found for this author.</p>
              <Link
                href="/bitcoin-association-switzerland"
                className="text-[#c75b4a] hover:underline mt-2 inline-block"
              >
                View all posts
              </Link>
            </div>
          ) : (
            filteredPosts.map((post, index) => (
              <div key={post.id}>
                <BlogPostCard post={post} />
                {index < filteredPosts.length - 1 && (
                  <Separator className="bg-gray-200" />
                )}
              </div>
            ))
          )}

          {/* Older Posts Link - only show if no filter */}
          {!authorFilter && (
            <div className="py-8 text-center">
              <Link
                href="/bitcoin-association-switzerland?offset=1520060400561"
                className="text-sm text-gray-600 hover:text-[#c75b4a] uppercase tracking-wider"
              >
                Older Posts
              </Link>
            </div>
          )}
        </div>
      </main>
      <FooterSimple />
    </>
  );
}
