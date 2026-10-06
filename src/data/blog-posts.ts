import type { BlogPost } from "@/types/blog";

/**
 * The posts of the News section: the News index, the author, category and tag
 * listings and the archive all read them from here. Admin-created posts are
 * merged in at request time by getAllPostsWithAdmin() in '@/lib/merge-data'.
 *
 * `id` is only used as a React key.
 */

export const NEWS_PATH = "/bitcoin-association-switzerland";

/** A listing page: a category ("category/<slug>"), a tag ("tag/<tag>") or the archive. */
export type ListingKey = `category/${string}` | `tag/${string}` | "archive";

/**
 * Before this file existed, some listings kept their own copy of the posts and
 * showed a post with a different excerpt, image, comment count or date than
 * the News index. Those values are kept per listing, so every page still
 * renders exactly as before.
 */
export type ListingOverrides = Partial<
  Record<ListingKey, Partial<Omit<BlogPost, "id" | "href">>>
>;

export interface BlogPostEntry extends BlogPost {
  overrides?: ListingOverrides;
}

/** Display names of the original Squarespace author ids. */
const authorNames = new Map<string, string>([
  ["59025f1030454480d862303f", "kronrod"],
  ["672bdb3ae0672c1501f39ce8", "Phil Lojacono"],
  ["lisa-tscherry", "Lisa Tscherry"],
  ["54edd73ae4b04709779918e4", "Roger Darin"],
  ["5a9907f3e4966b72996b9c31", "Luzius Meisser"],
  ["5895fa2e725e2525b0696fd4", "Lucas Betschart"],
  ["5968efd7f14aa14e4bef8611", "Bernhard Muller Hug"],
]);

/**
 * Author ids that post pages link to although no post below carries them and
 * no display name is known. (The post pages name them Marc Bettinger for the
 * Tone Vays meetup and Lewin Boehnke for Bitcoin Gold, while this list
 * credits both posts to kronrod.)
 */
const linkedAuthorIds = new Set([
  "59b547881f318d4561a56cc2",
  "59f7754108466514fa33b9ab",
]);

export const blogPosts: BlogPostEntry[] = [
  {
    id: "1",
    author: "Lisa Tscherry",
    authorId: "lisa-tscherry",
    date: "2 April 2026",
    timestamp: 1775131200000, // Apr 2, 2026
    category: "Events",
    title: "BAS Members Meetup at the Swiss Bitcoin Conference",
    excerpt:
      "Dear BAS members, we are launching a series of member meetups alongside selected Bitcoin conferences this year. Our first stop will be at the Swiss Bitcoin Conference in Kreuzlingen, where we invite you to an informal BAS member get-together on Saturday, 25 April 2026 from 17:00.",
    href: "/bitcoin-association-switzerland/2026/4/2/bas-members-meetup-at-the-swiss-bitcoin-conference",
    image: "/images/branding/bas-people.jpg",
    commentCount: 0,
    likeCount: 0,
  },
  {
    id: "3",
    author: "Phil Lojacono",
    authorId: "672bdb3ae0672c1501f39ce8",
    date: "31 May 2025",
    timestamp: 1748649600000, // May 31, 2025
    title:
      "Statement on the 12-Point Program for a Forward-Looking Digital Financial Center",
    excerpt:
      "The Bitcoin Association Switzerland supports the 12-point program jointly developed by leading industry associations to foster a strong and future-oriented environment for digital innovation in Switzerland. We believe this framework is an important step toward ensuring regulatory clarity, technological advancement, and an open, competitive financial system that empowers individuals and businesses alike.",
    href: "/bitcoin-association-switzerland/2025/12/8/statement-on-12-point-program",
    commentCount: 0,
    likeCount: 0,
  },
  {
    id: "4",
    author: "Phil Lojacono",
    authorId: "672bdb3ae0672c1501f39ce8",
    date: "28 February 2025",
    timestamp: 1740700800000, // Feb 28, 2025
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
    timestamp: 1731456000000, // Nov 13, 2024
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
    timestamp: 1729987200000, // Oct 27, 2024
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
    timestamp: 1660147200000, // Aug 10, 2022
    title: "Prudential Treatment of Cryptoasset Exposures II",
    excerpt:
      "While the Bank for International Settlement / Basel Committee on Banking Supervision continues to propose regulation, they also have developed a habit of not addressing legitimate concerns from the community. That is highly regrettable, but no reason to throw in the towel. So the Bitcoin Association Switzerland continues to provide constructive feedback and - so we think - well argued suggestions on how to improve on the longterm goals of the BIS to make the space safer and allow for more innovation.",
    href: "/bitcoin-association-switzerland/2022/8/10/prudential-treatment-of-cryptoasset-exposures-ii",
    tags: ["Regulation"],
    commentCount: 3,
    likeCount: 10,
    overrides: {
      "tag/Regulation": {
        excerpt:
          "While the Bank for International Settlement / Basel Committee on Banking Supervision continues to propose regulation, they also have developed a habit of not addressing legitimate concerns from the community. That is highly regrettable, but no reason to throw in the towel. So the Bitcoin Association Switzerland continues to provide constructive feedback and - so we think - well argued suggestions on how to improve on the longterm goals of the BIS to make the space safer and allow for more innovation.\n\nThe letter we sent out this week is continuing this tradition.",
        image: "/images/events/event-default-header.jpg",
      },
    },
  },
  {
    id: "8",
    author: "Luzius Meisser",
    authorId: "5a9907f3e4966b72996b9c31",
    date: "27 June 2021",
    timestamp: 1624752000000, // Jun 27, 2021
    title: "Prudential Treatment of Cryptoasset Exposures",
    excerpt:
      "The Bank for International Settlement (BIS) has recently published a consultative paper on the Prudential Treatment of Crytpoasset Exposure. Being good citizens, we were happy to follow the BIS' call for a response to their proposals with constructive feedback that not only points out where they err, but more importantly how some of the proposed principals will prove detrimental to the stability of the financial system they BIS is trying to protect. Never has a proverb being more fitting than this: the path to hell is paved with good intentions.",
    href: "/bitcoin-association-switzerland/2021/7/3/comments-of-bitcoin-association-switzerland-on-the-draft-revised-vasp-guidance",
    tags: ["Regulation"],
    commentCount: 1,
    likeCount: 1,
    overrides: {
      "tag/Regulation": {
        image: "/images/events/june-meetup.jpg",
      },
    },
  },
  {
    id: "9",
    author: "Luzius Meisser",
    authorId: "5a9907f3e4966b72996b9c31",
    date: "20 April 2021",
    timestamp: 1618876800000, // Apr 20, 2021
    title:
      "Comments of Bitcoin Association Switzerland on the draft revised VASP Guidance",
    excerpt:
      'The Bitcoin Association Switzerland has sent a comment on the FATF\'s revised draft guidance on crypto assets. In a consciously "expansive" approach, the FATF proposes to classify participants in decentralized systems as financial intermediaries even if they do not engage in financial intermediation. This would erode the benefits of disintermediation and cause great harm to the nascent sector of Decentralized Finance (DeFi). We criticize this approach and suggest a number of measures to contain the potential damage of imprudent regulation.',
    href: "/bitcoin-association-switzerland/2021/6/23/comments-on-draft-revised-vasp-guidance",
    commentCount: 1,
    likeCount: 0,
  },
  {
    id: "10",
    author: "Luzius Meisser",
    authorId: "5a9907f3e4966b72996b9c31",
    date: "20 June 2020",
    timestamp: 1592611200000, // Jun 20, 2020
    title:
      "Our Comment on the risk assessment for global Stablecoins of the G20's Financial Stability Board",
    excerpt:
      'Today we sent the following letter to the Financial Stability Board of the G-20 commenting on their risk assessment for "global stablecoins":',
    href: "/bitcoin-association-switzerland/on-the-risk-assessment-for-global-stablecoins-of-the-g20s-financial-stability-board",
    tags: ["Regulation"],
    commentCount: 1,
    likeCount: 7,
    overrides: {
      "tag/Regulation": {
        image: "/images/blog/g20-stablecoin-report.png",
      },
    },
  },
  {
    id: "11",
    author: "Luzius Meisser",
    authorId: "5a9907f3e4966b72996b9c31",
    date: "9 April 2020",
    timestamp: 1586390400000, // Apr 9, 2020
    title: "Our Comment on GWV-FINMA adjustment for FinSA / FinIA",
    excerpt:
      "On the 8th of April 2020 we sent the following comment to FINMA regarding the new money laundering ordinance...",
    href: "/bitcoin-association-switzerland/2020/4/9/our-comment-on-gwv-finma-adjustment-for-finsa-finia",
    tags: ["Regulation"],
    commentCount: 1,
    likeCount: 4,
    overrides: {
      "tag/Regulation": {
        image: "/images/blog/finma-comment.jpg",
      },
    },
  },
  {
    id: "12",
    author: "Luzius Meisser",
    authorId: "5a9907f3e4966b72996b9c31",
    date: "13 March 2020",
    timestamp: 1584057600000, // Mar 13, 2020
    title:
      'Our Comment on "Designing a prudential treatment for cryptoassets" of the Basel Committee on Banking Supervision',
    excerpt:
      "In December 2019 the Basel Committee on Banking Supervision published a discussion paper on the design of a prudential treatment for crypto-assets and welcomed comments on its analyses and ideas. The comment submitted by the Bitcoin Association Switzerland are the following...",
    href: "/bitcoin-association-switzerland/our-comment-on-designing-a-prudential-treatment-for-cryptoassets-of-the-basel-committee-on-banking-supervision",
    image: "/images/blog/basel.jpg",
    tags: ["Regulation"],
    commentCount: 1,
    likeCount: 6,
  },
  {
    id: "13",
    author: "Luzius Meisser",
    authorId: "5a9907f3e4966b72996b9c31",
    date: "3 December 2019",
    timestamp: 1575331200000, // Dec 3, 2019
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
    timestamp: 1561593600000, // Jun 27, 2019
    title: "Our Comment on the Swiss Blockchain Law",
    excerpt:
      "In March, the Federal Council presented a draft for a number of legal adjustments and invited Bitcoin Association Switzerland to take part in the public consultation. The consultation phase ends this month and we have filed an extensive comment, in which we support the position of the Swiss Blockchain Federation and lay out some of our common concerns in more detail. In this blog post, I will summarize the content of the proposed law as well as the comments of both Blockchain Federation and Bitcoin Association.",
    href: "/bitcoin-association-switzerland/2019/6/27/our-comment-on-the-swiss-blockchain-law",
    image: "/images/blog/bitcoin-regulation.jpg",
    tags: ["Regulation"],
    commentCount: 2,
    likeCount: 11,
  },
  {
    id: "15",
    author: "Luzius Meisser",
    authorId: "5a9907f3e4966b72996b9c31",
    date: "14 December 2018",
    timestamp: 1544745600000, // Dec 14, 2018
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
    timestamp: 1537920000000, // Sep 26, 2018
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
    timestamp: 1527811200000, // Jun 1, 2018
    title: "Why storing Bitcoins for clients does not make you a bank",
    excerpt:
      "The last few weeks have been very busy in the regulatory debate about Bitcoin and its consequences within the legal framework.",
    href: "/bitcoin-association-switzerland/2018/5/31/why-storing-bitcoins-for-clients-does-not-make-you-a-bank",
    image: "/images/blog/cornell-reading-room.jpg",
    likeCount: 9,
  },
  {
    id: "18",
    author: "Lucas Betschart",
    authorId: "5895fa2e725e2525b0696fd4",
    date: "17 May 2018",
    timestamp: 1526515200000, // May 17, 2018
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
    timestamp: 1524096000000, // Apr 19, 2018
    title: "Better legal protection for clients of Bitcoin firms coming?",
    excerpt:
      "Marcel Dobler, member of the Swiss national parliament and co-founder of digitec.ch, proposed a law that could turn out to be very helpful for Crypto Nation Switzerland. It would give you the right to get your digital assets back in case you have stored them with a provider that goes bankrupt.",
    href: "/bitcoin-association-switzerland/2018/4/19/better-legal-protection-for-clients-of-bitcoin-firms-coming",
    image: "/images/blog/insurance.jpg",
    likeCount: 1,
  },
  {
    id: "20",
    author: "Luzius Meisser",
    authorId: "5a9907f3e4966b72996b9c31",
    date: "3 March 2018",
    timestamp: 1520035200000, // Mar 3, 2018
    category: "Opinion",
    title: "The Latest Regulatory Threat",
    excerpt:
      "The Swiss government has proposed a law that inadvertently threatens Switzerland's excellent position in the international race for becoming the preferred jurisdiction for crypto startups.",
    href: "/bitcoin-association-switzerland/2018/3/2/the-latest-regulatory-threat",
    image: "/images/blog/threat.jpg",
    commentCount: 3,
    likeCount: 20,
  },
  // 2017 Posts
  {
    id: "21",
    author: "kronrod",
    authorId: "59025f1030454480d862303f",
    date: "30 October 2017",
    timestamp: 1509321600000, // Oct 30, 2017
    category: "Events",
    title: "Bitcoin Gold - Do we need it and if yes, how many?",
    excerpt:
      "BCash/Bitcoin cash did it on August 1st 2017, Bitcoin2x/Segwit2x does it at block 494,784. For better or worse, creating a new cryptocurrency by forking off of Bitcoin seems to be this season's fashion.",
    href: "/bitcoin-association-switzerland/2017/10/30/bitcoin-gold-do-we-need-it-and-if-yes-how-many-s7kaj",
    commentCount: 0,
    likeCount: 0,
    overrides: {
      archive: {
        date: "31 October 2017",
        timestamp: 1509408000000, // Oct 31, 2017
      },
    },
  },
  {
    id: "22",
    author: "kronrod",
    authorId: "59025f1030454480d862303f",
    date: "13 September 2017",
    timestamp: 1505260800000, // Sep 13, 2017
    category: "Events",
    title: "Tone Vays Meetup in Zurich September 2017",
    excerpt:
      "Record attendance for Bitcoin Meetup with Tony Vays in Zurich. The event with Tony Vays was attended by more than 330 Bitcoin enthusiast in Volkshaus Zurich.",
    href: "/bitcoin-association-switzerland/2017/9/13/tone-vays-meetup-in-zurich-september-2017",
    commentCount: 0,
    likeCount: 0,
    overrides: {
      archive: {
        date: "2 October 2017",
        timestamp: 1506902400000, // Oct 2, 2017
      },
    },
  },
  {
    id: "23",
    author: "Roger Darin",
    authorId: "54edd73ae4b04709779918e4",
    date: "9 August 2017",
    timestamp: 1502236800000, // Aug 9, 2017
    title: "Self-made",
    excerpt:
      "Lakeside Partners joins the Bitcoin Association Switzerland by mining their own Bitcoin to pay membership fees.",
    href: "/bitcoin-association-switzerland/2017/8/8/lakeside-partners-joins-the-bitcoin-association-switzerland",
    commentCount: 0,
    likeCount: 0,
  },
  {
    id: "24",
    author: "Bernhard Muller Hug",
    authorId: "5968efd7f14aa14e4bef8611",
    date: "15 July 2017",
    timestamp: 1500076800000, // Jul 15, 2017
    category: "Opinion",
    title: "Op Ed: Proof of Work, not Proof of Stake",
    excerpt:
      "A personal journey through the Bitcoin world, exploring encounters with key figures and investigating the identity of Satoshi Nakamoto.",
    href: "/bitcoin-association-switzerland/2017/7/14/proof-of-work-not-proof-of-stake",
    commentCount: 1,
    likeCount: 4,
  },
  {
    id: "25",
    author: "Roger Darin",
    authorId: "54edd73ae4b04709779918e4",
    date: "10 June 2017",
    timestamp: 1497052800000, // Jun 10, 2017
    title: "How to participate in the local Bitcoin community",
    excerpt:
      "Learn how to get involved with the Bitcoin community in Switzerland through meetups, Telegram, Twitter, membership, and donations.",
    href: "/bitcoin-association-switzerland/2017/5/10/how-to-join-the-community",
    commentCount: 0,
    likeCount: 0,
  },
  {
    id: "26",
    author: "Lucas Betschart",
    authorId: "5895fa2e725e2525b0696fd4",
    date: "15 May 2017",
    timestamp: 1494806400000, // May 15, 2017
    title: "Our Regulatory Comment on the new Fintech-Regulation",
    excerpt:
      "The Bitcoin Association Switzerland comments on the latest proposal to improve regulation for fintech startups in Switzerland.",
    href: "/bitcoin-association-switzerland/2017/5/7/stellungnahme-der-bitcoin-association-switzerland-zur-neuen-fintech-regulierung",
    tags: ["Regulation"],
    commentCount: 0,
    likeCount: 0,
  },
  {
    id: "27",
    author: "kronrod",
    authorId: "59025f1030454480d862303f",
    date: "14 May 2017",
    timestamp: 1494720000000, // May 14, 2017
    title: "Alexis Roussel, CEO of Bity SA, warns about centralized money advertised as Crypto Currency on Swiss TV",
    excerpt:
      "Alexis Roussel, cofondateur de Bity, discusses the difference between true cryptocurrencies like Bitcoin and centralized alternatives on Leman Bleu TV.",
    href: "/bitcoin-association-switzerland/2017/5/5/alexis-roussel-warns-about-centralized-money-advertised-as-crypto-currency-on-swiss-tv",
    commentCount: 0,
    likeCount: 0,
  },
  {
    id: "28",
    author: "Lucas Betschart",
    authorId: "5895fa2e725e2525b0696fd4",
    date: "13 May 2017",
    timestamp: 1494633600000, // May 13, 2017
    category: "Announcement",
    title: "Welcoming new board members",
    excerpt:
      "At the annual general assembly of the Bitcoin Association Switzerland on the 28th of March 2017, our members appointed two new board members.",
    href: "/bitcoin-association-switzerland/2017/4/27/welcoming-new-board-members",
    commentCount: 0,
    likeCount: 0,
  },
  // 2016 Posts
  {
    id: "29",
    author: "kronrod",
    authorId: "59025f1030454480d862303f",
    date: "5 August 2016",
    timestamp: 1470355200000, // Aug 5, 2016
    category: "Uncategorized",
    title: "FinTech Made in Switzerland",
    excerpt:
      "Manual Stagars is creating a Swiss FinTech documentary and talked to Luzius Meisser about the blockchain and opportunities for Switzerland.",
    href: "/bitcoin-association-switzerland/2016/08/05/fintech-made-in-switzerland",
    commentCount: 0,
    likeCount: 0,
  },
  {
    id: "30",
    author: "kronrod",
    authorId: "59025f1030454480d862303f",
    date: "20 June 2016",
    timestamp: 1466380800000, // Jun 20, 2016
    category: "Uncategorized",
    title: "Swiss Move to Reduce Blockchain Regulation",
    excerpt:
      "Together with 23 co-signatories from all major parties, Swiss member of parliament Franz Gruter filed a parliamentary motion to reduce regulatory burdens of blockchain startups by restricting the legal definition of 'client deposit'.",
    href: "/bitcoin-association-switzerland/2016/06/20/swiss-parliamentary-motion-to-reduce-blockchain-regulation",
    image: "/images/blog/parliament.jpg",
    commentCount: 1,
    likeCount: 0,
    overrides: {
      "category/Uncategorized": {
        excerpt:
          'Together with 23 co-signatories from all major parties, Swiss member of parliament Franz Gruter filed a parliamentary motion to reduce regulatory burdens of blockchain startups by restricting the legal definition of "client deposit". Today, firms that handle client money - regardless of whether in Swiss Francs, Bitcoin, or any other currency - get very quickly classified as banks, even if their risk profile fundamentally differs from that of typical banks. Being classified as a bank comes with regulatory and capital requirements that are practically impossible to fulfill for startups. That might be the primary reason why there is not a single operationally active cryptocurrency exchange in the style of bitstamp or bitfinex in Switzerland despite having an otherwise lively ecosystem of crypto startups. Luzius Meisser, founder of Bitcoin Association Switzerland comments: "This motion is a strong signal to blockchain startups all around the world that the Swiss parliament wants Switzerland to be at the forefront of fintech innovation."',
      },
    },
  },
  // 2014 Posts
  {
    id: "31",
    author: "kronrod",
    authorId: "59025f1030454480d862303f",
    date: "5 December 2014",
    timestamp: 1417737600000, // Dec 5, 2014
    category: "Uncategorized",
    title: "Talk at SIPUG day",
    excerpt:
      "The Bitcoin Association is invited to hold a talk about Bitcoin about twice per month at average. Here is a picture of one of the more notable events with 300 registered participants.",
    href: "/bitcoin-association-switzerland/2014/12/05/talk-at-sipug-day",
    commentCount: 0,
    likeCount: 0,
    overrides: {
      "category/Uncategorized": {
        excerpt:
          "The Bitcoin Assocation is invited to hold a talk about Bitcoin about twice per month at average. Here is a picture of one of the more notable events with 300 registered participants.",
        image: "/images/blog/sipug.jpg",
      },
    },
  },
  {
    id: "32",
    author: "kronrod",
    authorId: "59025f1030454480d862303f",
    date: "25 June 2014",
    timestamp: 1403654400000, // Jun 25, 2014
    category: "Uncategorized",
    title: "Federal Council report: No special regulation needed",
    excerpt:
      "In a report published today, the Swiss government answers questions raised in two parliamentary postulates. The report concludes that Bitcoin is covered by existing laws and that no new regulation is needed.",
    href: "/bitcoin-association-switzerland/2014/06/25/federal-council-report-no-special-regulation-needed",
    commentCount: 1,
    likeCount: 0,
    overrides: {
      "category/Uncategorized": {
        excerpt:
          'In a report published today, the Swiss government answers questions raised in two parliamentary postulates. The report concludes that Bitcoin is covered by existing laws and that no new regulation is needed. This is excellent news and in full accordance with our views. Furthermore, the report confirms that Bitcoins are neither a good nor a service - which is relevant when deciding whether VAT applies when selling Bitcoins (it should not). Furthermore, the report says that the only thing Bitcoin currently lacks to be money like other currencies is low volatility. As volatility is decreasing, is should thus only be a matter of time until Bitcoin officially gets the legal status of "money".\nA side remark regarding miners: On question the report leaves unanswered is whether miners should be classified as financial intermediaries. Probably, the federal council sees this as a detail to be left to FINMA. In our view, miners do not require such a license because miners never take possession of the Bitcoins they process. So unlike with banks, there is no risk of embezzlement and thus no necessity to protect consumers from that. Also note that technically, most miners do not process transactions - it is the mining pool that does that for them. Instead, miners should be legally seen as someone selling computing power to a mining pool.',
      },
    },
  },
  {
    id: "33",
    author: "kronrod",
    authorId: "59025f1030454480d862303f",
    date: "15 June 2014",
    timestamp: 1402790400000, // Jun 15, 2014
    category: "Uncategorized",
    title: "Miner's \"luck smoothing\" excuse does not hold up to scrutiny",
    excerpt:
      "The enormous computing power of the GHash.IO pool sparked another debate about 51%-attacks. In this post, I want to dispel the 'luck smoothing' argument.",
    href: "/bitcoin-association-switzerland/2014/06/15/miners-luck-smoothing-excuse-does-not-hold-up-to-scrutiny",
    image: "/images/blog/pools.png",
    commentCount: 2,
    likeCount: 0,
    overrides: {
      "category/Uncategorized": {
        excerpt:
          'The enormous computing power of the GHash.IO pool sparked another debate about 51%-attacks. Pools with such a large share of the total hash rate threaten Bitcoin\'s decentralized nature and make Bitcoin depend on the benevolence of the dominating pool - in this case GHash.IO. Obviously, it is not in the self-interest of miners to all mine in the same pool, as it undermines Bitcoins value. When asked, why they do so anyway, one frequent answer is "luck smoothing". In this post, I want to dispel this argument.',
        likeCount: 1,
      },
    },
  },
  {
    id: "34",
    author: "kronrod",
    authorId: "59025f1030454480d862303f",
    date: "7 May 2014",
    timestamp: 1399420800000, // May 7, 2014
    category: "Uncategorized",
    title: "Finma comments on Bitcoin",
    excerpt:
      "In a recently published guide titled 'how consumers can protect themselves from financial market actors that operate without permit', the Swiss financial market authorities commented on Bitcoin.",
    href: "/bitcoin-association-switzerland/2014/05/07/finma-comments-on-bitcoin",
    commentCount: 0,
    likeCount: 0,
    overrides: {
      "category/Uncategorized": {
        excerpt:
          'In a recently published guide titled "how consumers can protect themselves from financial market actors that operate without permit", the Swiss financial market authorities commented on Bitcoin. Generally, it does not contain any surprises. They see risks for consumers in its irreversibility, anonymity and volatility - which are valid concerns. They also note that money laundering laws and banking laws might apply when running a business such as a Bitcoin exchange. This is in line with our view that Bitcoin should be treated like other currencies.\n\nOne could criticize their focus on risks alone - neglecting potential advantages of the mentioned properties and Bitcoin in general. But that\'s their mission. Regulatory agencies are created to mitigate risks - and not to identify opportunities.',
      },
    },
  },
  {
    id: "35",
    author: "kronrod",
    authorId: "59025f1030454480d862303f",
    date: "25 February 2014",
    timestamp: 1393286400000, // Feb 25, 2014
    category: "Uncategorized",
    title: "The MtGox debacle would not have happened in a free market",
    excerpt:
      "In this guest article, Luzius Meisser reflects on MtGox's collapse and argues that fewer regulations would have enabled better market mechanisms to prevent such failures.",
    href: "/bitcoin-association-switzerland/2014/02/25/the-mtgox-debacle-would-not-have-happened-in-a-free-market",
    commentCount: 1,
    likeCount: 0,
    overrides: {
      "category/Uncategorized": {
        excerpt:
          "As other places reported, MtGox failed spectacularly and ceased operations today. Some will blame this on a lack of regulation. Nothing could be further from the truth.\nThe main reason for this failure being so spectacular is a long history of lacking competition. Even though MtGox repeatedly faced problems like days of suspended trading, customers did not have many viable alternatives. In many countries, the legal costs of setting up a financial service website like a Bitcoin exchange are prohibitive. The Internet thrives on people being able to experiment - otherwise, sites like ebay.com, doodle.com or yahoo.com would never habe been created. I personally have repeatedly met motivated enthusiasts who wanted to setup their own Bitcoin exchanges. Unfortunately, regulation is holding them back. Had they been able to create their exchange websites, MtGox would have seen much more competition much earlier - giving customers the opportunity to diversify and reducing their exposure to a single operator.\n\nHowever, in an ironic twist, the very regulation that seeks to protect customers potentiated their risks by preventing them from effectively diversifying. The financial services industry is in an ongoing vicious circle of market failures that make politicians enact more rigorous regulation, which stiffles competition, which again leads to more market failures and regulation.\n\n- Written by Luzius Meisser, President of Bitcoin Association Switzerland",
        commentCount: 2,
      },
    },
  },
  {
    id: "36",
    author: "kronrod",
    authorId: "59025f1030454480d862303f",
    date: "17 February 2014",
    timestamp: 1392595200000, // Feb 17, 2014
    category: "Uncategorized",
    title: "General Assembly 2014",
    excerpt:
      "Our general assembly will take place on 2014-02-23 at Colab Zurich. Highlights include an intro to Ethereum and membership application form.",
    href: "/bitcoin-association-switzerland/2014/02/17/general-assembly-2014",
    commentCount: 0,
    likeCount: 0,
    overrides: {
      "category/Uncategorized": {
        excerpt:
          'As announced, our general assembly will take place on 2014-02-23 at Colab Zurich (Zentralstrasse 37, colab-zurich.ch). The doors open at 14:00 and the assembly formally starts at 14:15. You can find the agenda and comment on it here.\nIn particular, I\'d like to point you to traktandum 7 (as we Swiss call agenda items) "Where to spend your Bitcoins?". Send me an image/screenshot of your favorite underappreciated Bitcoin service and we\'ll present it at the assembly. You may also use this opportunity to advertise own stuff for sale (e.g. your car).\n\nFurther highlights are an intro to Ethereum by the founders themselves and a quick presentation of Veeting, a Swiss secure video conference software accepting Bitcoin. Also, we have an ATM project getting more concrete and consider launching a Bureaucracy Relief Fund.\n\nThen, most importantly, we finally have our membership application form online on our join page. Fill it in to formally become a member!\n\nWe also would like to thank colab zurich for providing this excellent event location!',
        image: "/images/blog/colab-zurich-logo.png",
      },
    },
  },
  // 2013 Posts
  {
    id: "37",
    author: "kronrod",
    authorId: "59025f1030454480d862303f",
    date: "5 December 2013",
    timestamp: 1386201600000, // Dec 5, 2013
    category: "Uncategorized",
    title: "Marc Faber points readers to Bitcoin",
    excerpt:
      'Swiss investment guru Marc Faber publishes a monthly market commentary. Along with the June commentary, he sent his subscribers a report on Bitcoin, titled "Dispelling the Myths of Bitcoin" and written by Lee Robinson from Atlana wealth. I already was in contact with Faber last autumn suggesting that he should send my report on Bitcoin to his readers - which he unfortunately did not even though he indicated interest. The report he finally attached is an interesting read, containing an excellent collection of quotes...',
    href: "/bitcoin-association-switzerland/2013/12/05/marc-faber-points-readers-to-bitcoin",
    image: "/images/blog/marc-faber.jpg",
    commentCount: 0,
    likeCount: 0,
    overrides: {
      "category/Uncategorized": {
        excerpt:
          'Swiss investment guru Marc Faber publishes a monthly market commentary. Along with the June commentary, he sent his subscribers a report on Bitcoin, titled "Dispelling the Myths of Bitcoin" and written by Lee Robinson from Atlana wealth. I already was in contact with Faber last autumn suggesting that he should send my report on Bitcoin to his readers - which he unfortunately did not even though he indicated interest. The report he finally attached is an interesting read...',
      },
    },
  },
  {
    id: "38",
    author: "kronrod",
    authorId: "59025f1030454480d862303f",
    date: "4 December 2013",
    timestamp: 1386115200000, // Dec 4, 2013
    category: "Uncategorized",
    title: "Bitcoin in Echo der Zeit",
    excerpt:
      "Luzius Meisser appears on Swiss radio program Echo der Zeit to discuss Bitcoin.",
    href: "/bitcoin-association-switzerland/2013/12/04/bitcoin-in-echo-der-zeit",
    commentCount: 1,
    likeCount: 0,
    overrides: {
      "category/Uncategorized": {
        excerpt:
          "One of the most relevant news segments on Swiss national radio - Echo der Zeit - reported about Bitcoin and talked to Luzius Meisser.",
        commentCount: 0,
      },
    },
  },
  {
    id: "39",
    author: "kronrod",
    authorId: "59025f1030454480d862303f",
    date: "8 November 2013",
    timestamp: 1383868800000, // Nov 8, 2013
    category: "Uncategorized",
    title: "General Discussion Meetup",
    excerpt:
      "Join us for a general discussion meetup to talk about Bitcoin and the cryptocurrency ecosystem.",
    href: "/bitcoin-association-switzerland/2013/11/08/general-discussion-meetup",
    commentCount: 1,
    likeCount: 0,
    overrides: {
      "category/Uncategorized": {
        excerpt:
          "The November 20th meetup will be dedicated to discussing our association. If you want to help shaping its future, please join us on that evening. We also plan to stream the event on Google plus.",
      },
    },
  },
  {
    id: "40",
    author: "kronrod",
    authorId: "59025f1030454480d862303f",
    date: "7 November 2013",
    timestamp: 1383782400000, // Nov 7, 2013
    category: "Uncategorized",
    title: "Bitcoin on RTS and Euronews",
    excerpt:
      "Luzius Meisser had a quick appearance on French-speaking Swiss TV RTS as well as on euronews.",
    href: "/bitcoin-association-switzerland/2013/11/07/bitcoin-on-rts-and-euronews",
    commentCount: 0,
    likeCount: 0,
    overrides: {
      "category/Uncategorized": {
        excerpt:
          "I had a quick appearance on French-speaking Swiss TV RTS as well as on euronews.",
        image: "/images/blog/euronews.jpg",
      },
    },
  },
];

const byNewest = (a: BlogPost, b: BlogPost) => b.timestamp - a.timestamp;

function toPost(entry: BlogPostEntry, listing?: ListingKey): BlogPost {
  const { overrides, ...post } = entry;
  return listing ? { ...post, ...overrides?.[listing] } : post;
}

function getListingPosts(
  listing: ListingKey,
  include: (post: BlogPost) => boolean,
): BlogPost[] {
  return blogPosts
    .map((entry) => toPost(entry, listing))
    .filter(include)
    .sort(byNewest);
}

/** All posts, newest first, as the News index shows them. */
export function getSortedPosts(): BlogPost[] {
  return blogPosts.map((entry) => toPost(entry)).sort(byNewest);
}

/** Posts by one author. Pass the merged list to include admin-created posts. */
export function getPostsByAuthor(
  authorId: string,
  posts: BlogPost[] = getSortedPosts(),
): BlogPost[] {
  return posts.filter((post) => post.authorId === authorId);
}

/** Posts in a category (the URL slug, e.g. "Uncategorized"), newest first. */
export function getPostsByCategory(category: string): BlogPost[] {
  return getListingPosts(
    `category/${category}`,
    (post) => post.category === category,
  );
}

/** Posts with a tag, newest first. */
export function getPostsByTag(tag: string): BlogPost[] {
  return getListingPosts(`tag/${tag}`, (post) => post.tags?.includes(tag) ?? false);
}

/** Every category used by a post. */
export function getCategories(): string[] {
  return [...new Set(blogPosts.flatMap((post) => post.category ?? []))];
}

/** Every tag used by a post. */
export function getTags(): string[] {
  return [...new Set(blogPosts.flatMap((post) => post.tags ?? []))];
}

/** The display name of an author id, if known. */
export function getAuthorName(authorId: string): string | undefined {
  return authorNames.get(authorId);
}

/** Every author id that has posts, a display name, or is linked from a post page. */
export function getAuthorIds(): string[] {
  return [
    ...new Set([
      ...blogPosts.map((post) => post.authorId),
      ...authorNames.keys(),
      ...linkedAuthorIds,
    ]),
  ];
}

/** Whether an author id is one of getAuthorIds(). */
export function isKnownAuthorId(authorId: string): boolean {
  return (
    authorNames.has(authorId) ||
    linkedAuthorIds.has(authorId) ||
    blogPosts.some((post) => post.authorId === authorId)
  );
}

export function authorHref(authorId: string): string {
  return `${NEWS_PATH}/author/${encodeURIComponent(authorId)}`;
}

export function categoryHref(category: string): string {
  return `${NEWS_PATH}/category/${category}`;
}

export function tagHref(tag: string): string {
  return `${NEWS_PATH}/tag/${tag}`;
}

export interface ArchiveMonth {
  /** "2017-05"; also the anchor id of the month heading. */
  id: string;
  /** "May 2017" */
  label: string;
  /** Newest first; `date` reads like "May 15, 2017". */
  posts: { title: string; href: string; date: string }[];
}

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/** All posts grouped by month (UTC), newest month first, for the archive. */
export function getArchiveMonths(): ArchiveMonth[] {
  const months: ArchiveMonth[] = [];
  for (const post of getListingPosts("archive", () => true)) {
    const date = new Date(post.timestamp);
    const year = date.getUTCFullYear();
    const monthName = MONTH_NAMES[date.getUTCMonth()];
    const id = `${year}-${String(date.getUTCMonth() + 1).padStart(2, "0")}`;

    let month = months.at(-1);
    if (month?.id !== id) {
      month = { id, label: `${monthName} ${year}`, posts: [] };
      months.push(month);
    }
    month.posts.push({
      title: post.title,
      href: post.href,
      date: `${monthName.slice(0, 3)} ${date.getUTCDate()}, ${year}`,
    });
  }
  return months;
}
