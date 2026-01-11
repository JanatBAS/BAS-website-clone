import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export default function AnnouncementFromBoardPage() {
  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen bg-white">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Meta info */}
          <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">
            <Link
              href="/bitcoin-association-switzerland?author=672bdb3ae0672c1501f39ce8"
              className="hover:text-[#c75b4a]"
            >
              Phil Lojacono
            </Link>
          </div>
          <div className="text-xs text-gray-500 uppercase tracking-wider mb-6">
            <span>27 October 2024</span>
          </div>

          {/* Title */}
          <h1 className="text-xl md:text-2xl font-semibold text-gray-900 mb-8 tracking-wide uppercase leading-tight">
            Announcement from the Board of the Bitcoin Association Switzerland
          </h1>

          {/* Meta repeated */}
          <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">
            <Link
              href="/bitcoin-association-switzerland?author=672bdb3ae0672c1501f39ce8"
              className="hover:text-[#c75b4a]"
            >
              Phil Lojacono
            </Link>
          </div>
          <div className="text-xs text-gray-500 uppercase tracking-wider mb-8">
            <span>27 October 2024</span>
          </div>

          {/* Content */}
          <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6">
              <strong>Dear Members of Bitcoin Association Switzerland,</strong>
            </p>

            <p className="mb-6">
              We are excited to share our first update with you as your newly appointed board. We recently held our first board meeting, and we want to ensure transparent communication with all of you as we begin this journey together.
            </p>

            <p className="mb-6">
              The board met for the first time on Friday, October 18th, for a half-day session. We&apos;d like to share our perspective on the current state of the association and what transpired since the General Assembly on October 5th, 2024.
            </p>

            <p className="mb-6">
              As most of you know, the newly constituted board is composed entirely of new members, none of whom have previously served. We are honored by the trust you have given us and are fully committed to the work ahead. Since the Extraordinary General Assembly and board election, we have been onboarding and familiarizing ourselves with the association&apos;s affairs, a process that will continue over the coming months.
            </p>

            <p className="mb-8">
              Here&apos;s what you can expect moving forward:
            </p>

            <p className="mb-6">
              <strong>1. Quarterly written updates (minimum):</strong>
            </p>

            <p className="mb-6">
              We are committed to keeping you informed. Moving forward, we&apos;ll provide a quarterly summary of our decisions and activities. This will include updates on our progress and our decision-making process, ensuring transparency within the association.
            </p>

            <p className="mb-6">
              <strong>2. Decision-making protocols:</strong>
            </p>

            <p className="mb-6">
              We aim to make our decision-making process transparent. Any major decisions will be clearly communicated to the community, with opportunities for member input and, where appropriate, votes on key issues.
            </p>

            <p className="mb-6">
              <strong>3. Bi-weekly board meetings:</strong>
            </p>

            <p className="mb-6">
              Recognizing the amount of work needing to be addressed, the board will now meet every 14 days to stay on track with our priorities and goals.
            </p>

            <p className="mb-6">
              <strong>4. Focus on key priorities:</strong>
            </p>

            <p className="mb-6">
              We&apos;re focusing on several key priorities that, while not exhaustive, are of primary importance:
            </p>

            <p className="mb-4 pl-4">
              <strong>&#8226; Priority 1:</strong> Organizing essential administrative tasks, such as platform and membership management, and enhancing internal processes and tools. This includes establishing a Bitcoin infrastructure for the association, including the Lightning Network where applicable.
            </p>

            <p className="mb-4 pl-4">
              <strong>&#8226; Priority 2:</strong> Activating and growing the membership base across Switzerland. This will include a &ldquo;BAS Roadshow&rdquo; starting in January 2025, with monthly meetups across different cities to connect with stakeholders.
            </p>

            <p className="mb-4 pl-4">
              <strong>&#8226; Priority 3:</strong> Building a vibrant community across Switzerland by organizing events, meetups, forums, and quarterly keynote speakers, ensuring representation from the association.
            </p>

            <p className="mb-6 pl-4">
              <strong>&#8226; Priority 4:</strong> Defining roles and responsibilities of board members. This process is partially complete and will be communicated later this year.
            </p>

            <p className="mb-6">
              <strong>5. Working groups and community involvement:</strong>
            </p>

            <p className="mb-6">
              We intend to establish working groups focused on technical, legal, and other aspects. With only four board members, we welcome broad engagement from the membership. We encourage all members who wish to play an active role to get involved, as our goal is to decentralize work and decision-making.
            </p>

            <p className="mb-6">
              <strong>6. New member-only Telegram group:</strong>
            </p>

            <p className="mb-6">
              A Telegram group exclusively for members will be launched to serve as a platform for updates, discussions, and community engagement. To support this, we will be improving our membership administration to ensure only registered members have access. We&apos;ll also update the administration guidelines of the &ldquo;Bitcoin Switzerland&rdquo; Telegram group and discuss the future of the &ldquo;Altcoins Switzerland&rdquo; channel.
            </p>

            <p className="mb-6">
              <strong>7. Announcements across platforms:</strong>
            </p>

            <p className="mb-6">
              Major announcements will be shared in the Telegram group, on the website, and via email to ensure all members have access to important updates and can engage with the board and the community.
            </p>

            <p className="mb-6">
              <strong>8. General Assembly before year-end:</strong>
            </p>

            <p className="mb-8">
              We commit to holding a General Assembly before the end of this year (2024). Details will be announced soon, offering a valuable opportunity for members to connect and discuss the association&apos;s future. The assembly will address updates to the association&apos;s by-laws, mission statement, focus, and operational improvements.
            </p>

            <p className="mb-6">***</p>

            <p className="mb-6">
              As the board has just begun its work, we kindly ask for your patience as we organize our membership list and handle foundational administrative tasks that are critical to a functioning association. We are committed to building a stronger, more engaged community, and ultimately a thriving association. We look forward to working with you all to advance the goals of Bitcoin Association Switzerland.
            </p>

            <p className="mb-6">
              Thank you for your support. Vires in Numeris.
            </p>

            <p className="mb-6">Sincerely,</p>

            <p className="mb-4">
              <strong>The BAS Board</strong>
            </p>

            <p className="mb-1">
              <strong>ADRIANO BERTINI</strong>
            </p>
            <p className="mb-4">Head of Strategy - Ledger Enterprise</p>

            <p className="mb-1">
              <strong>LISA TSCHERRY</strong>
            </p>
            <p className="mb-4">MSc in Blockchain &amp; Digital Currency, Founder of SatoShe</p>

            <p className="mb-1">
              <strong>PHIL LOJACONO</strong>
            </p>
            <p className="mb-4">CEO &amp; Co-Founder Berglinde AG</p>

            <p className="mb-1">
              <strong>NIKLAS NIKOLAJSEN</strong>
            </p>
            <p className="mb-8">President of the Bitcoin Association Switzerland</p>

            <p className="mb-8">
              <a
                href="https://www.bitcoinassociation.ch/s/BAS_Announcement_Oct27th2024-xxmm.pdf"
                className="text-[#c75b4a] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download PDF of announcement here
              </a>
            </p>
          </div>

          {/* Like and Share */}
          <div className="flex items-center gap-4 text-xs text-gray-500 py-6 border-t border-gray-200">
            <span className="flex items-center gap-1">
              <svg
                className="w-4 h-4"
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
              0 Likes
            </span>
            <ShareButton title="Announcement from the Board of the Bitcoin Association Switzerland" />
          </div>

          {/* Comments Section */}
          <div className="py-6 border-t border-gray-200">
            <h3 className="text-sm font-medium text-gray-900 mb-4">COMMENTS (0)</h3>

            <div className="flex items-center gap-4 text-xs text-gray-500 mb-6">
              <span>Newest First</span>
            </div>

            {/* Comment Form */}
            <div className="bg-gray-50 p-4 rounded">
              <textarea
                className="w-full border border-gray-300 rounded p-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#c75b4a] focus:border-transparent"
                rows={4}
                placeholder="Post Comment..."
              />
              <div className="flex justify-end mt-3">
                <button className="bg-[#40c3b6] text-white px-6 py-2 text-sm font-medium rounded hover:bg-[#36a99e] transition-colors">
                  POST COMMENT
                </button>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between py-8 border-t border-gray-200 text-xs">
            <div>
              <span className="text-gray-400 uppercase tracking-wider">Newer Post</span>
              <Link
                href="/bitcoin-association-switzerland/2025/12/8/bitcoin-association-switzerland-appoints-new-board-sets-bold-vision-for-the-future"
                className="block text-[#c75b4a] hover:underline mt-1"
              >
                Bitcoin Association Switzerland appoints new board, sets bold vision for the future
              </Link>
            </div>
            <div className="text-right">
              <span className="text-gray-400 uppercase tracking-wider">Older Post</span>
              <Link
                href="/bitcoin-association-switzerland/2022/8/10/prudential-treatment-of-cryptoasset-exposures-ii"
                className="block text-[#c75b4a] hover:underline mt-1"
              >
                Prudential Treatment of Cryptoasset Exposures II
              </Link>
            </div>
          </div>
        </article>
      </main>
      <FooterSimple />
    </>
  );
}
