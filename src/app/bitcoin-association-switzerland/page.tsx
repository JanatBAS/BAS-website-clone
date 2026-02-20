import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { getAllPostsWithAdmin } from "@/lib/merge-data";

export const dynamic = 'force-dynamic';

interface BlogPost {
  id: string;
  author: string;
  authorId: string;
  date: string;
  timestamp: number; // Unix timestamp in milliseconds for pagination
  category?: string;
  title: string;
  excerpt: string;
  href: string;
  image?: string;
  tags?: string[];
  commentCount?: number;
  likeCount?: number;
  unoptimizedImage?: boolean;
}

// Author ID mapping (matching original Squarespace IDs)
const authorIds: Record<string, string> = {
  "kronrod": "59025f1030454480d862303f",
  "Phil Lojacono": "672bdb3ae0672c1501f39ce8",
  "Roger Darin": "54edd73ae4b04709779918e4",
  "Luzius Meisser": "5a9907f3e4966b72996b9c31",
  "Lucas Betschart": "5895fa2e725e2525b0696fd4",
  "Bernhard Muller Hug": "5968efd7f14aa14e4bef8611",
};

// Reverse mapping for lookup
const authorNames: Record<string, string> = Object.fromEntries(
  Object.entries(authorIds).map(([name, id]) => [id, name])
);

const FEATURED_FALLBACK_IMAGE =
  "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1660148501401-GDNI2ZA03O3AI2DBF64S/header7.jpg?format=2500w";

const blogPosts: BlogPost[] = [
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
    timestamp: 1624752000000, // Jun 27, 2021
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
    timestamp: 1618876800000, // Apr 20, 2021
    title:
      "Comments of Bitcoin Association Switzerland on the draft revised VASP Guidance",
    excerpt:
      'The Bitcoin Association Switzerland has sent a comment on the FATF\'s revised draft guidance on crypto assets. In a consciously "expansive" approach, the FATF proposes to classify participants in decentralized systems as financial intermediaries even if they do not engage in financial intermediation. This would erode the benefits of disintermediation and cause great harm to the nascent sector of Decentralized Finance (DeFi). We criticize this approach and suggest a number of measures to contain the potential damage of imprudent regulation.',
    href: "/bitcoin-association-switzerland/2021/6/23/comments-on-draft-revised-vasp-guidance",
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
    timestamp: 1592611200000, // Jun 20, 2020
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
    timestamp: 1586390400000, // Apr 9, 2020
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
    timestamp: 1584057600000, // Mar 13, 2020
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
    image:
      "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1527748625110-S7D6CZO6B91C41JI82GK/ADWhiteReadingRoom%2C_CornellUniversity.jpg?format=2500w",
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
    image:
      "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1523969241135-TUY8W4QZU5PR74BWYIRT/insurance-1991213_960_720.jpg?format=1000w",
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
    image:
      "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1520018401057-PP4IGOKSSYDZZHRO7R8O/threat.jpg?format=750w",
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
    image:
      "http://static1.squarespace.com/static/5895d62d2994ca86b0cd9807/59025f1030454480d862303c/59025f1a30454480d86230c0/1493327642012/parliament.jpg?format=original",
    commentCount: 1,
    likeCount: 0,
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
    image:
      "http://static1.squarespace.com/static/5895d62d2994ca86b0cd9807/59025f1030454480d862303c/59025f1730454480d862309c/1493327639051/pools.png?format=original",
    commentCount: 2,
    likeCount: 0,
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
    image:
      "http://static4.businessinsider.com/image/4d40343ccadcbb1d1a010000/marc-faber-moral-decay-among-the-elites-proves-america-is-a-failed-state.jpg",
    commentCount: 0,
    likeCount: 0,
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
  },
  {
    id: "39",
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
            {post.href.startsWith('/blog/') ? (
              <span>{post.category}</span>
            ) : (
              <Link
                href={`/bitcoin-association-switzerland/category/${post.category}`}
                className="hover:text-[#c75b4a]"
              >
                {post.category}
              </Link>
            )}
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
              unoptimized={post.unoptimizedImage}
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
          {post.href.startsWith('/blog/') ? (
            <span className="text-[#c75b4a]">{post.tags.join(', ')}</span>
          ) : (
            post.tags.map((tag, index) => (
              <span key={tag}>
                <Link
                  href={`/bitcoin-association-switzerland/tag/${tag}`}
                  className="text-[#c75b4a] hover:underline"
                >
                  {tag}
                </Link>
                {index < post.tags!.length - 1 && ", "}
              </span>
            ))
          )}
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
        
<ShareButton title={post.title} />
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
  const offsetFilter = params.offset ? parseInt(params.offset, 10) : null;

  // Merge admin posts with hardcoded posts
  const allPosts = await getAllPostsWithAdmin(blogPosts);

  // Featured post is always the newest post
  const featuredPost = allPosts[0] ?? null;

  // Get author name from ID
  const authorName = authorFilter ? authorNames[authorFilter] : null;

  // Filter posts by author if filter is active, then by offset (timestamp)
  let filteredPosts = authorFilter
    ? allPosts.filter((post) => post.authorId === authorFilter)
    : allPosts;

  // Apply offset filter - show posts with timestamp less than offset
  if (offsetFilter) {
    filteredPosts = filteredPosts.filter((post) => post.timestamp < offsetFilter);
  }

  // Check if featured post matches filter (or show if no filter and no offset)
  const showFeaturedPost = featuredPost && (!authorFilter && !offsetFilter || (authorFilter && featuredPost.authorId === authorFilter && !offsetFilter));

  // Get the timestamp of the last post for "Older Posts" link
  const lastPost = filteredPosts[filteredPosts.length - 1];
  // Check if there are actually more posts older than the last visible one
  const postsOlderThanLast = lastPost
    ? allPosts.filter((post) => post.timestamp < lastPost.timestamp)
    : [];
  const hasMorePosts = postsOlderThanLast.length > 0;

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
              src={featuredPost.image ?? FEATURED_FALLBACK_IMAGE}
              alt={featuredPost.title}
              fill
              className="object-cover"
              priority
              unoptimized={featuredPost.unoptimizedImage}
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

          {/* Older Posts Link - only show if there are more posts */}
          {!authorFilter && hasMorePosts && (
            <div className="py-8 text-center">
              <Link
                href={`/bitcoin-association-switzerland?offset=${lastPost.timestamp}`}
                className="text-sm text-gray-600 hover:text-[#c75b4a] uppercase tracking-wider"
              >
                Older Posts
              </Link>
            </div>
          )}

          {/* Back to all posts link when viewing older posts */}
          {offsetFilter && (
            <div className="py-8 text-center">
              <Link
                href="/bitcoin-association-switzerland"
                className="text-sm text-gray-600 hover:text-[#c75b4a] uppercase tracking-wider"
              >
                Back to Newer Posts
              </Link>
            </div>
          )}
        </div>
      </main>
      <FooterSimple />
    </>
  );
}
