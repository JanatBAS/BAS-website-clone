import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import Link from "next/link";

export default function BASRoadshowBernPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Two Column Layout */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            {/* Left Column - Title and Meta */}
            <div className="md:w-1/3">
              <h1 className="text-2xl font-normal text-gray-800 mb-6">
                BAS Roadshow – Bern
              </h1>

              {/* Date and Time */}
              <div className="text-sm text-gray-500 mb-4">
                <p className="mb-1">Tuesday 21 January 2025</p>
                <p className="text-[#c75b4a]">18:00 – 20:00</p>
              </div>

              {/* Calendar Links */}
              <div className="text-sm text-gray-500">
                <a
                  href="http://www.google.com/calendar/event?action=TEMPLATE&text=BAS%20Roadshow%20%E2%80%93%20Bern&dates=20250121T170000Z/20250121T190000Z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c75b4a] hover:underline"
                >
                  Google Calendar
                </a>
                <span className="mx-2 text-gray-400">|</span>
                <a
                  href="/roadshow-2025/2025/1/21/bas-roadshow-bern?format=ical"
                  className="text-[#c75b4a] hover:underline"
                >
                  ICS
                </a>
              </div>
            </div>

            {/* Right Column - Event Details */}
            <div className="md:w-2/3">
              {/* Event Description */}
              <div className="text-sm text-gray-600 space-y-4">
                <p className="font-semibold text-gray-700">
                  The Bitcoin Association Switzerland invites you: Roadshow in Bern on January, 21, 2025
                </p>

                <ul className="list-disc list-inside space-y-1 text-gray-500">
                  <li>Sunday 21 September 2025</li>
                  <li>18:00 23:00</li>
                </ul>

                <ul className="list-disc list-inside space-y-1 text-gray-500">
                  <li>Time: 18:00 23:00</li>
                  <li>
                    Location:{" "}
                    <a
                      href="https://maps.app.goo.gl/4JqGTXYT8Xe3ZnbR8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#c75b4a] hover:underline"
                    >
                      (map)
                    </a>
                  </li>
                </ul>

                <p className="text-gray-600">
                  The Bitcoin Association Switzerland is launching its first official Roadshow 2025, and the first stop will take place in the capital - Bern!
                </p>

                <p>
                  <strong className="text-gray-700">Sign up for the roadshow event in Bern</strong>{" "}
                  <a
                    href="https://luma.com/8tsyroom"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c75b4a] hover:underline font-semibold"
                  >
                    here
                  </a>
                </p>

                <p>
                  <strong className="text-gray-700">Best regards,</strong>
                  <br />
                  The BAS Board
                </p>
              </div>
            </div>
          </div>

          {/* Later Event Navigation */}
          <div className="mt-24 text-right">
            <div className="text-sm text-gray-500">
              <span className="block">Later Event: 21 February</span>
              <Link
                href="/roadshow-2025/2025/2/21/bas-roadshow-lausanne"
                className="text-gray-700 hover:text-[#c75b4a] transition-colors"
              >
                BAS Roadshow – Lausanne
              </Link>
            </div>
          </div>
        </div>
      </main>
      <FooterSimple />
    </>
  );
}
