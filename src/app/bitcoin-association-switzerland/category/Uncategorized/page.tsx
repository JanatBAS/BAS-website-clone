import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

interface BlogPost {
  id: string;
  author: string;
  date: string;
  category?: string;
  title: string;
  excerpt: string;
  href: string;
  image?: string;
  commentCount?: number;
  likeCount?: number;
}

const featuredPost: BlogPost = {
  id: "featured",
  author: "Phil Lojacono",
  date: "31 May 2025",
  title: "Statement on the 12-Point Program for a Forward-Looking Digital Financial Center",
  excerpt:
    "The Bitcoin Association Switzerland supports the 12-point program jointly developed by leading industry associations to foster a strong and future-oriented environment for digital innovation in Switzerland. We believe this framework is an important step toward ensuring regulatory clarity, technological advancement, and an open, competitive financial system that empowers individuals and businesses alike.",
  href: "/bitcoin-association-switzerland/2025/12/8/statement-on-12-point-program",
  image:
    "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1660148501401-GDNI2ZA03O3AI2DBF64S/header7.jpg?format=2500w",
};

const uncategorizedPosts: BlogPost[] = [
  {
    id: "3",
    author: "kronrod",
    date: "5 August 2016",
    category: "Uncategorized",
    title: "FinTech Made in Switzerland",
    excerpt:
      "Manual Stagars is creating a Swiss FinTech documentary and talked to Luzius Meisser about the blockchain and opportunities for Switzerland.",
    href: "/bitcoin-association-switzerland/2016/08/05/fintech-made-in-switzerland",
    commentCount: 0,
    likeCount: 0,
  },
  {
    id: "4",
    author: "kronrod",
    date: "20 June 2016",
    category: "Uncategorized",
    title: "Swiss Move to Reduce Blockchain Regulation",
    excerpt:
      'Together with 23 co-signatories from all major parties, Swiss member of parliament Franz Gruter filed a parliamentary motion to reduce regulatory burdens of blockchain startups by restricting the legal definition of "client deposit". Today, firms that handle client money - regardless of whether in Swiss Francs, Bitcoin, or any other currency - get very quickly classified as banks, even if their risk profile fundamentally differs from that of typical banks. Being classified as a bank comes with regulatory and capital requirements that are practically impossible to fulfill for startups. That might be the primary reason why there is not a single operationally active cryptocurrency exchange in the style of bitstamp or bitfinex in Switzerland despite having an otherwise lively ecosystem of crypto startups. Luzius Meisser, founder of Bitcoin Association Switzerland comments: "This motion is a strong signal to blockchain startups all around the world that the Swiss parliament wants Switzerland to be at the forefront of fintech innovation."',
    href: "/bitcoin-association-switzerland/2016/06/20/swiss-parliamentary-motion-to-reduce-blockchain-regulation",
    image:
      "http://static1.squarespace.com/static/5895d62d2994ca86b0cd9807/59025f1030454480d862303c/59025f1a30454480d86230c0/1493327642012/parliament.jpg?format=original",
    commentCount: 1,
    likeCount: 0,
  },
  {
    id: "5",
    author: "kronrod",
    date: "5 December 2014",
    category: "Uncategorized",
    title: "Talk at SIPUG day",
    excerpt:
      "The Bitcoin Assocation is invited to hold a talk about Bitcoin about twice per month at average. Here is a picture of one of the more notable events with 300 registered participants.",
    href: "/bitcoin-association-switzerland/2014/12/05/talk-at-sipug-day",
    image:
      "http://static1.squarespace.com/static/5895d62d2994ca86b0cd9807/59025f1030454480d862303c/59025f1930454480d86230be/1493327641772/sipug.jpg?format=original",
    commentCount: 0,
    likeCount: 0,
  },
  {
    id: "6",
    author: "kronrod",
    date: "25 June 2014",
    category: "Uncategorized",
    title: "Federal Council report: No special regulation needed",
    excerpt:
      'In a report published today, the Swiss government answers questions raised in two parliamentary postulates. The report concludes that Bitcoin is covered by existing laws and that no new regulation is needed. This is excellent news and in full accordance with our views. Furthermore, the report confirms that Bitcoins are neither a good nor a service - which is relevant when deciding whether VAT applies when selling Bitcoins (it should not). Furthermore, the report says that the only thing Bitcoin currently lacks to be money like other currencies is low volatility. As volatility is decreasing, is should thus only be a matter of time until Bitcoin officially gets the legal status of "money".\nA side remark regarding miners: On question the report leaves unanswered is whether miners should be classified as financial intermediaries. Probably, the federal council sees this as a detail to be left to FINMA. In our view, miners do not require such a license because miners never take possession of the Bitcoins they process. So unlike with banks, there is no risk of embezzlement and thus no necessity to protect consumers from that. Also note that technically, most miners do not process transactions - it is the mining pool that does that for them. Instead, miners should be legally seen as someone selling computing power to a mining pool.',
    href: "/bitcoin-association-switzerland/2014/06/25/federal-council-report-no-special-regulation-needed",
    commentCount: 1,
    likeCount: 0,
  },
  {
    id: "7",
    author: "kronrod",
    date: "15 June 2014",
    category: "Uncategorized",
    title: "Miner's \"luck smoothing\" excuse does not hold up to scrutiny",
    excerpt:
      'The enormous computing power of the GHash.IO pool sparked another debate about 51%-attacks. Pools with such a large share of the total hash rate threaten Bitcoin\'s decentralized nature and make Bitcoin depend on the benevolence of the dominating pool - in this case GHash.IO. Obviously, it is not in the self-interest of miners to all mine in the same pool, as it undermines Bitcoins value. When asked, why they do so anyway, one frequent answer is "luck smoothing". In this post, I want to dispel this argument.',
    href: "/bitcoin-association-switzerland/2014/06/15/miners-luck-smoothing-excuse-does-not-hold-up-to-scrutiny",
    image:
      "http://static1.squarespace.com/static/5895d62d2994ca86b0cd9807/59025f1030454480d862303c/59025f1730454480d862309c/1493327639051/pools.png?format=original",
    commentCount: 2,
    likeCount: 1,
  },
  {
    id: "8",
    author: "kronrod",
    date: "7 May 2014",
    category: "Uncategorized",
    title: "Finma comments on Bitcoin",
    excerpt:
      'In a recently published guide titled "how consumers can protect themselves from financial market actors that operate without permit", the Swiss financial market authorities commented on Bitcoin. Generally, it does not contain any surprises. They see risks for consumers in its irreversibility, anonymity and volatility - which are valid concerns. They also note that money laundering laws and banking laws might apply when running a business such as a Bitcoin exchange. This is in line with our view that Bitcoin should be treated like other currencies.\n\nOne could criticize their focus on risks alone - neglecting potential advantages of the mentioned properties and Bitcoin in general. But that\'s their mission. Regulatory agencies are created to mitigate risks - and not to identify opportunities.',
    href: "/bitcoin-association-switzerland/2014/05/07/finma-comments-on-bitcoin",
    commentCount: 0,
    likeCount: 0,
  },
  {
    id: "9",
    author: "kronrod",
    date: "25 February 2014",
    category: "Uncategorized",
    title: "The MtGox debacle would not have happened in a free market",
    excerpt:
      "As other places reported, MtGox failed spectacularly and ceased operations today. Some will blame this on a lack of regulation. Nothing could be further from the truth.\nThe main reason for this failure being so spectacular is a long history of lacking competition. Even though MtGox repeatedly faced problems like days of suspended trading, customers did not have many viable alternatives. In many countries, the legal costs of setting up a financial service website like a Bitcoin exchange are prohibitive. The Internet thrives on people being able to experiment - otherwise, sites like ebay.com, doodle.com or yahoo.com would never habe been created. I personally have repeatedly met motivated enthusiasts who wanted to setup their own Bitcoin exchanges. Unfortunately, regulation is holding them back. Had they been able to create their exchange websites, MtGox would have seen much more competition much earlier - giving customers the opportunity to diversify and reducing their exposure to a single operator.\n\nHowever, in an ironic twist, the very regulation that seeks to protect customers potentiated their risks by preventing them from effectively diversifying. The financial services industry is in an ongoing vicious circle of market failures that make politicians enact more rigorous regulation, which stiffles competition, which again leads to more market failures and regulation.\n\n- Written by Luzius Meisser, President of Bitcoin Association Switzerland",
    href: "/bitcoin-association-switzerland/2014/02/25/the-mtgox-debacle-would-not-have-happened-in-a-free-market",
    commentCount: 2,
    likeCount: 0,
  },
  {
    id: "10",
    author: "kronrod",
    date: "17 February 2014",
    category: "Uncategorized",
    title: "General Assembly 2014",
    excerpt:
      'As announced, our general assembly will take place on 2014-02-23 at Colab Zurich (Zentralstrasse 37, colab-zurich.ch). The doors open at 14:00 and the assembly formally starts at 14:15. You can find the agenda and comment on it here.\nIn particular, I\'d like to point you to traktandum 7 (as we Swiss call agenda items) "Where to spend your Bitcoins?". Send me an image/screenshot of your favorite underappreciated Bitcoin service and we\'ll present it at the assembly. You may also use this opportunity to advertise own stuff for sale (e.g. your car).\n\nFurther highlights are an intro to Ethereum by the founders themselves and a quick presentation of Veeting, a Swiss secure video conference software accepting Bitcoin. Also, we have an ATM project getting more concrete and consider launching a Bureaucracy Relief Fund.\n\nThen, most importantly, we finally have our membership application form online on our join page. Fill it in to formally become a member!\n\nWe also would like to thank colab zurich for providing this excellent event location!',
    href: "/bitcoin-association-switzerland/2014/02/17/general-assembly-2014",
    image:
      "http://static1.squarespace.com/static/5895d62d2994ca86b0cd9807/59025f1030454480d862303c/59025f1430454480d8623078/1493327636432/colab_zurich_logo.png?format=original",
    commentCount: 0,
    likeCount: 0,
  },
  {
    id: "11",
    author: "kronrod",
    date: "5 December 2013",
    category: "Uncategorized",
    title: "Marc Faber points readers to Bitcoin",
    excerpt:
      'Swiss investment guru Marc Faber publishes a monthly market commentary. Along with the June commentary, he sent his subscribers a report on Bitcoin, titled "Dispelling the Myths of Bitcoin" and written by Lee Robinson from Atlana wealth. I already was in contact with Faber last autumn suggesting that he should send my report on Bitcoin to his readers - which he unfortunately did not even though he indicated interest. The report he finally attached is an interesting read...',
    href: "/bitcoin-association-switzerland/2013/12/05/marc-faber-points-readers-to-bitcoin",
    image:
      "http://static4.businessinsider.com/image/4d40343ccadcbb1d1a010000/marc-faber-moral-decay-among-the-elites-proves-america-is-a-failed-state.jpg",
    commentCount: 0,
    likeCount: 0,
  },
  {
    id: "12",
    author: "kronrod",
    date: "4 December 2013",
    category: "Uncategorized",
    title: "Bitcoin in Echo der Zeit",
    excerpt:
      "One of the most relevant news segments on Swiss national radio - Echo der Zeit - reported about Bitcoin and talked to Luzius Meisser.",
    href: "/bitcoin-association-switzerland/2013/12/04/bitcoin-in-echo-der-zeit",
    commentCount: 0,
    likeCount: 0,
  },
  {
    id: "13",
    author: "kronrod",
    date: "8 November 2013",
    category: "Uncategorized",
    title: "General Discussion Meetup",
    excerpt:
      "The November 20th meetup will be dedicated to discussing our association. If you want to help shaping its future, please join us on that evening. We also plan to stream the event on Google plus.",
    href: "/bitcoin-association-switzerland/2013/11/08/general-discussion-meetup",
    commentCount: 1,
    likeCount: 0,
  },
  {
    id: "14",
    author: "kronrod",
    date: "7 November 2013",
    category: "Uncategorized",
    title: "Bitcoin on RTS and Euronews",
    excerpt:
      "I had a quick appearance on French-speaking Swiss TV RTS as well as on euronews.",
    href: "/bitcoin-association-switzerland/2013/11/07/bitcoin-on-rts-and-euronews",
    image:
      "http://static1.squarespace.com/static/5895d62d2994ca86b0cd9807/59025f1030454480d862303c/59025f1230454480d8623057/1493327634184/euronews.jpg?format=original",
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
        <button className="flex items-center gap-1 hover:text-[#c75b4a]">
          Share
        </button>
      </div>
    </article>
  );
}

export default function UncategorizedCategoryPage() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-white">
        {/* Featured Post Banner */}
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
              <div className="text-sm mb-2">{featuredPost.author}</div>
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

        {/* Blog Posts List */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {uncategorizedPosts.map((post, index) => (
            <div key={post.id}>
              <BlogPostCard post={post} />
              {index < uncategorizedPosts.length - 1 && (
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
