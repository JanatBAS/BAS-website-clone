import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Archive data structure
interface ArchiveItem {
  date: string;
  title: string;
  href: string;
}

interface ArchiveGroup {
  month: string;
  monthFilter: string;
  items: ArchiveItem[];
}

// Archive data based on the original website
const archiveData: ArchiveGroup[] = [
  {
    month: "December 2025",
    monthFilter: "12-2025",
    items: [
      {
        date: "Dec 9, 2025",
        title: "Bitcoin in 10vor10",
        href: "/bitcoin-association-switzerland/2014/01/14/bitcoin-in-10vor10",
      },
      {
        date: "Dec 9, 2025",
        title: "Marc Faber points readers to Bitcoin",
        href: "/bitcoin-association-switzerland/2014/06/04/marc-faber-points-readers-to-bitcoin",
      },
    ],
  },
  {
    month: "May 2025",
    monthFilter: "05-2025",
    items: [
      {
        date: "May 31, 2025",
        title: "Statement on the 12-Point Program for a Forward-Looking Digital Financial Center",
        href: "/bitcoin-association-switzerland/2025/12/8/statement-on-12-point-program",
      },
    ],
  },
  {
    month: "February 2025",
    monthFilter: "02-2025",
    items: [
      {
        date: "Feb 28, 2025",
        title: "Bitcoin Association Switzerland Welcomes the Federal Council's Endorsement of Enhanced Bitcoin Regulation",
        href: "/bitcoin-association-switzerland/2025/2/28/bitcoin-association-switzerland-welcomes-the-federal-councils-endorsement-of-enhanced-bitcoin-regulation",
      },
    ],
  },
  {
    month: "November 2024",
    monthFilter: "11-2024",
    items: [
      {
        date: "Nov 13, 2024",
        title: "Bitcoin Association Switzerland appoints new board, sets bold vision for the future",
        href: "/bitcoin-association-switzerland/2025/12/8/bitcoin-association-switzerland-appoints-new-board-sets-bold-vision-for-the-future",
      },
    ],
  },
  {
    month: "October 2024",
    monthFilter: "10-2024",
    items: [
      {
        date: "Oct 27, 2024",
        title: "Announcement from the Board of the Bitcoin Association Switzerland",
        href: "/bitcoin-association-switzerland/2025/12/8/announcement-from-the-board-of-the-bitcoin-association-switzerland",
      },
    ],
  },
  {
    month: "August 2022",
    monthFilter: "08-2022",
    items: [
      {
        date: "Aug 10, 2022",
        title: "Prudential Treatment of Cryptoasset Exposures II",
        href: "/bitcoin-association-switzerland/2022/8/10/prudential-treatment-of-cryptoasset-exposures-ii",
      },
    ],
  },
  {
    month: "June 2021",
    monthFilter: "06-2021",
    items: [
      {
        date: "Jun 27, 2021",
        title: "Prudential Treatment of Cryptoasset Exposures",
        href: "/bitcoin-association-switzerland/2021/7/3/comments-of-bitcoin-association-switzerland-on-the-draft-revised-vasp-guidance",
      },
    ],
  },
  {
    month: "April 2021",
    monthFilter: "04-2021",
    items: [
      {
        date: "Apr 20, 2021",
        title: "Comments of Bitcoin Association Switzerland on the draft revised VASP Guidance",
        href: "/bitcoin-association-switzerland/2021/6/23/comments-on-draft-revised-vasp-guidance",
      },
    ],
  },
  {
    month: "June 2020",
    monthFilter: "06-2020",
    items: [
      {
        date: "Jun 20, 2020",
        title: "Our Comment on the risk assessment for global Stablecoins of the G20's Financial Stability Board",
        href: "/bitcoin-association-switzerland/on-the-risk-assessment-for-global-stablecoins-of-the-g20s-financial-stability-board",
      },
    ],
  },
  {
    month: "April 2020",
    monthFilter: "04-2020",
    items: [
      {
        date: "Apr 9, 2020",
        title: "Our Comment on GWV-FINMA adjustment for FinSA / FinIA",
        href: "/bitcoin-association-switzerland/2020/4/9/our-comment-on-gwv-finma-adjustment-for-finsa-finia",
      },
    ],
  },
  {
    month: "March 2020",
    monthFilter: "03-2020",
    items: [
      {
        date: "Mar 13, 2020",
        title: "Our Comment on \"Designing a prudential treatment for cryptoassets\" of the Basel Committee on Banking Supervision",
        href: "/bitcoin-association-switzerland/our-comment-on-designing-a-prudential-treatment-for-cryptoassets-of-the-basel-committee-on-banking-supervision",
      },
    ],
  },
  {
    month: "December 2019",
    monthFilter: "12-2019",
    items: [
      {
        date: "Dec 3, 2019",
        title: "Crypto Valley Association Issues Questionable Recommendations",
        href: "/bitcoin-association-switzerland/2019/12/3/crypto-valley-association-issues-questionable-recommendations",
      },
    ],
  },
  {
    month: "June 2019",
    monthFilter: "06-2019",
    items: [
      {
        date: "Jun 27, 2019",
        title: "Our Comment on the Swiss Blockchain Law",
        href: "/bitcoin-association-switzerland/2019/6/27/our-comment-on-the-swiss-blockchain-law",
      },
    ],
  },
  {
    month: "December 2018",
    monthFilter: "12-2018",
    items: [
      {
        date: "Dec 14, 2018",
        title: "On the Federal Council Report",
        href: "/bitcoin-association-switzerland/2018/12/14/on-the-federal-council-report",
      },
    ],
  },
  {
    month: "September 2018",
    monthFilter: "09-2018",
    items: [
      {
        date: "Sep 26, 2018",
        title: "Is the Ethereum system a legal subject?",
        href: "/bitcoin-association-switzerland/2018/9/24/is-the-ethereum-system-a-legal-subject",
      },
    ],
  },
  {
    month: "June 2018",
    monthFilter: "06-2018",
    items: [
      {
        date: "Jun 1, 2018",
        title: "Why storing Bitcoins for clients does not make you a bank",
        href: "/bitcoin-association-switzerland/2018/5/31/why-storing-bitcoins-for-clients-does-not-make-you-a-bank",
      },
    ],
  },
  {
    month: "May 2018",
    monthFilter: "05-2018",
    items: [
      {
        date: "May 17, 2018",
        title: "Bitcoin Association Switzerland 2018: General Assembly",
        href: "/bitcoin-association-switzerland/2018/5/17/bitcoin-association-switzerland-2018-general-assembly",
      },
    ],
  },
  {
    month: "April 2018",
    monthFilter: "04-2018",
    items: [
      {
        date: "Apr 19, 2018",
        title: "Better legal protection for clients of Bitcoin firms coming?",
        href: "/bitcoin-association-switzerland/2018/4/19/better-legal-protection-for-clients-of-bitcoin-firms-coming",
      },
    ],
  },
  {
    month: "March 2018",
    monthFilter: "03-2018",
    items: [
      {
        date: "Mar 3, 2018",
        title: "The Latest Regulatory Threat",
        href: "/bitcoin-association-switzerland/2018/3/2/the-latest-regulatory-threat",
      },
    ],
  },
  {
    month: "October 2017",
    monthFilter: "10-2017",
    items: [
      {
        date: "Oct 31, 2017",
        title: "Bitcoin Gold - Do we need it and if yes, how many?",
        href: "/bitcoin-association-switzerland/2017/10/30/bitcoin-gold-do-we-need-it-and-if-yes-how-many-s7kaj",
      },
      {
        date: "Oct 2, 2017",
        title: "Tone Vays Meetup in Zurich September 2017",
        href: "/bitcoin-association-switzerland/2017/9/13/tone-vays-meetup-in-zurich-september-2017",
      },
    ],
  },
  {
    month: "August 2017",
    monthFilter: "08-2017",
    items: [
      {
        date: "Aug 9, 2017",
        title: "Self-made",
        href: "/bitcoin-association-switzerland/2017/8/8/lakeside-partners-joins-the-bitcoin-association-switzerland",
      },
    ],
  },
  {
    month: "July 2017",
    monthFilter: "07-2017",
    items: [
      {
        date: "Jul 15, 2017",
        title: "Op Ed: Proof of Work, not Proof of Stake",
        href: "/bitcoin-association-switzerland/2017/7/14/proof-of-work-not-proof-of-stake",
      },
    ],
  },
  {
    month: "June 2017",
    monthFilter: "06-2017",
    items: [
      {
        date: "Jun 10, 2017",
        title: "How to participate in the local Bitcoin community",
        href: "/bitcoin-association-switzerland/2017/5/10/how-to-join-the-community",
      },
    ],
  },
  {
    month: "May 2017",
    monthFilter: "05-2017",
    items: [
      {
        date: "May 15, 2017",
        title: "Our Regulatory Comment on the new Fintech-Regulation",
        href: "/bitcoin-association-switzerland/2017/5/7/stellungnahme-der-bitcoin-association-switzerland-zur-neuen-fintech-regulierung",
      },
      {
        date: "May 14, 2017",
        title: "Alexis Roussel, CEO of Bity SA, warns about centralized money advertised as Crypto Currency on Swiss TV",
        href: "/bitcoin-association-switzerland/2017/5/5/alexis-roussel-warns-about-centralized-money-advertised-as-crypto-currency-on-swiss-tv",
      },
      {
        date: "May 13, 2017",
        title: "Welcoming new board members",
        href: "/bitcoin-association-switzerland/2017/4/27/welcoming-new-board-members",
      },
    ],
  },
  {
    month: "August 2016",
    monthFilter: "08-2016",
    items: [
      {
        date: "Aug 5, 2016",
        title: "FinTech Made in Switzerland",
        href: "/bitcoin-association-switzerland/2016/08/05/fintech-made-in-switzerland",
      },
    ],
  },
  {
    month: "June 2016",
    monthFilter: "06-2016",
    items: [
      {
        date: "Jun 20, 2016",
        title: "Swiss Move to Reduce Blockchain Regulation",
        href: "/bitcoin-association-switzerland/2016/06/20/swiss-parliamentary-motion-to-reduce-blockchain-regulation",
      },
    ],
  },
  {
    month: "December 2014",
    monthFilter: "12-2014",
    items: [
      {
        date: "Dec 5, 2014",
        title: "Talk at SIPUG day",
        href: "/bitcoin-association-switzerland/2014/12/05/talk-at-sipug-day",
      },
    ],
  },
  {
    month: "June 2014",
    monthFilter: "06-2014",
    items: [
      {
        date: "Jun 25, 2014",
        title: "Federal Council report: No special regulation needed",
        href: "/bitcoin-association-switzerland/2014/06/25/federal-council-report-no-special-regulation-needed",
      },
      {
        date: "Jun 15, 2014",
        title: "Miner's \"luck smoothing\" excuse does not hold up to scrutiny",
        href: "/bitcoin-association-switzerland/2014/06/15/miners-luck-smoothing-excuse-does-not-hold-up-to-scrutiny",
      },
    ],
  },
  {
    month: "May 2014",
    monthFilter: "05-2014",
    items: [
      {
        date: "May 7, 2014",
        title: "Finma comments on Bitcoin",
        href: "/bitcoin-association-switzerland/2014/05/07/finma-comments-on-bitcoin",
      },
    ],
  },
  {
    month: "February 2014",
    monthFilter: "02-2014",
    items: [
      {
        date: "Feb 25, 2014",
        title: "The MtGox debacle would not have happened in a free market",
        href: "/bitcoin-association-switzerland/2014/02/25/the-mtgox-debacle-would-not-have-happened-in-a-free-market",
      },
      {
        date: "Feb 17, 2014",
        title: "General Assembly 2014",
        href: "/bitcoin-association-switzerland/2014/02/17/general-assembly-2014",
      },
    ],
  },
  {
    month: "December 2013",
    monthFilter: "12-2013",
    items: [
      {
        date: "Dec 4, 2013",
        title: "Bitcoin in Echo der Zeit",
        href: "/bitcoin-association-switzerland/2013/12/04/bitcoin-in-echo-der-zeit",
      },
    ],
  },
  {
    month: "November 2013",
    monthFilter: "11-2013",
    items: [
      {
        date: "Nov 8, 2013",
        title: "General Discussion Meetup",
        href: "/bitcoin-association-switzerland/2013/11/08/general-discussion-meetup",
      },
      {
        date: "Nov 7, 2013",
        title: "Bitcoin on RTS and Euronews",
        href: "/bitcoin-association-switzerland/2013/11/07/bitcoin-on-rts-and-euronews",
      },
    ],
  },
];

// Split archive data into two columns for the layout
const halfLength = Math.ceil(archiveData.length / 2);
const leftColumnData = archiveData.slice(0, halfLength);
const rightColumnData = archiveData.slice(halfLength);

function ArchiveGroup({ group }: { group: ArchiveGroup }) {
  return (
    <div className="mb-6">
      <Link
        href={`/bitcoin-association-switzerland?month=${group.monthFilter}`}
        className="text-[#8b7355] hover:text-[#6b5a45] font-normal text-base block mb-2"
      >
        {group.month}
      </Link>
      <ul className="space-y-1">
        {group.items.map((item, index) => (
          <li key={index} className="text-sm">
            <Link
              href={item.href}
              className="text-[#8b7355] hover:text-[#6b5a45] hover:underline leading-relaxed"
            >
              {item.title}
            </Link>
            <span className="block text-[#999] text-xs mt-0.5">{item.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ArchivePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Main Content Area */}
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            {/* Left Sidebar - News Navigation */}
            <aside className="md:w-48 flex-shrink-0">
              <nav>
                <h2 className="text-[#222] font-normal text-lg mb-4">News</h2>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="/bitcoin-association-switzerland"
                      className="text-[#999] hover:text-[#222] uppercase tracking-wider text-xs"
                    >
                      News
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/archive"
                      className="text-[#222] uppercase tracking-wider text-xs font-medium"
                    >
                      Archive
                    </Link>
                  </li>
                </ul>
              </nav>
            </aside>

            {/* Archive Content - Two Columns */}
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {/* Left Column */}
                <div>
                  {leftColumnData.map((group, index) => (
                    <ArchiveGroup key={index} group={group} />
                  ))}
                </div>

                {/* Right Column */}
                <div>
                  {rightColumnData.map((group, index) => (
                    <ArchiveGroup key={index} group={group} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
