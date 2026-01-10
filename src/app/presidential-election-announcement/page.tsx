import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Presidential Election Announcement - Bitcoin Association Switzerland",
  description: "Election of the next President and Board of Bitcoin Association Switzerland",
};

export default function PresidentialElectionAnnouncementPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 bg-white min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            {/* Sidebar Navigation */}
            <aside className="md:w-56 flex-shrink-0">
              <h2 className="text-[#8b7355] text-base font-light mb-4 font-serif italic">
                Board Announcements
              </h2>
              <nav className="space-y-1">
                <Link
                  href="/presidential-election-announcement"
                  className="block text-xs tracking-wider text-gray-900 font-semibold uppercase"
                >
                  Presidential Election Announcement
                </Link>
              </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1 max-w-2xl">
              {/* Title */}
              <h1 className="text-2xl md:text-3xl font-normal text-gray-800 mb-6 font-serif">
                <span role="img" aria-label="alarm">🚨</span> Presidential Election Announcement <span role="img" aria-label="alarm">🚨</span>
              </h1>

              {/* Introduction */}
              <div className="text-sm leading-relaxed text-gray-600 mb-6">
                <p>
                  The Bitcoin Association Switzerland (BAS) is entering an exciting new chapter — the{" "}
                  <strong className="text-gray-800">election of our next President and Board</strong>! Several highly qualified candidates have stepped forward to lead our association into the future, and all members will soon have the opportunity to get to know them and vote.
                </p>
              </div>

              <p className="text-sm leading-relaxed text-gray-600 mb-6">
                Here&apos;s how the election process will unfold:
              </p>

              {/* Candidate Presentations */}
              <div className="mb-6">
                <h2 className="text-sm font-semibold text-gray-800 uppercase tracking-wide mb-3">
                  Candidate Presentations
                </h2>
                <p className="text-sm leading-relaxed text-gray-600 mb-2">
                  The application documents of all candidates can be found here:
                </p>
                <p>
                  <Link
                    href="/candidates"
                    className="text-[#5c8a8a] hover:underline text-sm"
                  >
                    Presidential Election 2025 Candidates
                  </Link>
                </p>
              </div>

              {/* Meet the Candidates */}
              <div className="mb-6">
                <h2 className="text-sm font-semibold text-gray-800 uppercase tracking-wide mb-3">
                  Meet the Candidates – November 21st
                </h2>
                <p className="text-sm leading-relaxed text-gray-600">
                  Join us at our next <strong className="text-gray-800">BAS Roadshow event</strong> to hear directly from the candidates and ask your questions. More details will follow soon.
                </p>
              </div>

              {/* Voting Period */}
              <div className="mb-6">
                <p className="text-sm leading-relaxed text-gray-600">
                  <strong className="text-gray-800">Voting Period – Until November 30th</strong>
                </p>
                <p className="text-sm leading-relaxed text-gray-600 mt-2">
                  All BAS members will be able to <strong className="text-gray-800">vote for the new President</strong> before the end of November. Instructions for online voting will be communicated shortly.
                </p>
                <p className="text-sm leading-relaxed text-gray-600 italic mt-2">
                  (Please note: the Presidential vote takes place before the General Assembly.)
                </p>
              </div>

              {/* Board Elections */}
              <div className="mb-6">
                <p className="text-sm leading-relaxed text-gray-600">
                  <strong className="text-gray-800">Board Elections – December 6th (General Assembly)</strong>
                </p>
                <p className="text-sm leading-relaxed text-gray-600 mt-2">
                  Following the Presidential election, we will (re-)elect the other{" "}
                  <strong className="text-gray-800">board members</strong> during the General Assembly.
                </p>
                <p className="text-sm leading-relaxed text-gray-600 mt-2">
                  Existing and new candidates for the board can submit their candidacy{" "}
                  <strong className="text-gray-800">until December 6th</strong>, and a list of all candidates will be published on the website prior to the GA.
                </p>
              </div>

              {/* Encouragement */}
              <p className="text-sm leading-relaxed text-gray-600 mb-6">
                We encourage all members to participate actively — your vote and engagement shape the future of the Bitcoin Association Switzerland!
              </p>

              {/* Contact */}
              <p className="text-sm leading-relaxed text-gray-600 mb-6">
                For any questions or remarks, feel free to reach out to the board.
              </p>

              {/* Closing */}
              <p className="text-sm leading-relaxed text-gray-600">
                Together, let&apos;s continue building Switzerland&apos;s strong and united Bitcoin community. <span role="img" aria-label="lightning">⚡️</span><span role="img" aria-label="swiss flag">🇨🇭</span>
              </p>
            </div>
          </div>
        </div>
      </main>
      <FooterSimple />
    </>
  );
}
