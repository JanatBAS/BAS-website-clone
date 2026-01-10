import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import Link from "next/link";

export default function BASRoadshowBaselPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Event Content */}
          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 md:gap-12 py-8">
            {/* Left Column - Title, Date, Calendar Links */}
            <div>
              <h1 className="text-2xl font-normal text-gray-800 mb-6">
                BAS Roadshow – Basel
              </h1>

              {/* Date and Time */}
              <div className="text-sm text-gray-500 mb-4">
                <p>Sunday 21 September 2025</p>
                <p>18:30 – 22:30</p>
              </div>

              {/* Calendar Links */}
              <div className="flex items-center gap-2 text-sm">
                <a
                  href="http://www.google.com/calendar/event?action=TEMPLATE&text=BAS%20Roadshow%20%E2%80%93%20Basel&dates=20250921T163000Z/20250921T203000Z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-[#c75b4a] transition-colors"
                >
                  Google Calendar
                </a>
                <span className="text-gray-400">|</span>
                <a
                  href="/roadshow-2025/2025/9/21/bas-roadshow-basel?format=ical"
                  className="text-gray-500 hover:text-[#c75b4a] transition-colors"
                >
                  ICS
                </a>
              </div>
            </div>

            {/* Right Column - Event Details */}
            <div>
              {/* Bold intro text */}
              <p className="text-[#c75b4a] font-semibold mb-4">
                The Bitcoin Association Switzerland invites you: Roadshow in Basel on September, 21, 2025
              </p>

              {/* Event details list */}
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                <li>Time: 18:00 22:30</li>
                <li>
                  Location:{" "}
                  <a
                    href="http://maps.google.com/?q=%20Lausanne"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c75b4a] hover:underline"
                  >
                    (map)
                  </a>
                </li>
              </ul>

              {/* Description */}
              <p className="text-gray-600 mb-4">
                The Bitcoin Association Switzerland is launching its official Roadshow 2025, and the next stop will take place in the great city of Basel!
              </p>

              {/* Signup link */}
              <p className="text-gray-600 mb-4">
                <strong>Sign up for the roadshow event in Lausanne</strong>{" "}
                <a
                  href="https://luma.com/7pewjjp3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c75b4a] hover:underline font-semibold"
                >
                  here
                </a>
              </p>

              {/* Closing */}
              <p className="text-gray-600">
                <strong>Best regards,</strong>
                <br />
                The BAS Board
              </p>
            </div>
          </div>

          {/* Earlier Event Navigation */}
          <div className="mt-32 pt-8">
            <div className="text-sm text-gray-500">
              <span>Earlier Event: 21 March</span>
              <br />
              <Link
                href="/roadshow-2025/2025/3/21/dvlfc1pg9tmpthqclelqcp2tmosgpg"
                className="text-gray-700 hover:text-[#c75b4a] transition-colors"
              >
                BAS Roadshow Lake Zurich
              </Link>
            </div>
          </div>
        </div>
      </main>
      <FooterSimple />
    </>
  );
}
