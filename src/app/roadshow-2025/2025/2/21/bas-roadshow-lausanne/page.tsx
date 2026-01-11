import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import Image from "next/image";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export default function BASRoadshowLausannePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      {/* Main Content */}
      <main className="flex-1 pt-24">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back to All Events Link */}
          <Link
            href="/roadshow-2025"
            className="inline-block text-[13px] text-gray-500 hover:text-[#c75b4a] mb-8 transition-colors"
          >
            &larr; Back to All Events
          </Link>

          {/* Event Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 md:gap-12">
            {/* Left Column - Title and Meta */}
            <div>
              <h1 className="text-2xl md:text-3xl font-light text-gray-900 mb-6 leading-tight">
                BAS Roadshow – Lausanne
              </h1>

              {/* Meta Info */}
              <ul className="text-[13px] text-gray-500 space-y-1 mb-4">
                <li>Friday 21 February 2025</li>
                <li>
                  <span className="hidden sm:inline">6:00 pm - 11:00 pm</span>
                  <span className="sm:hidden">18:00 - 23:00</span>
                </li>
              </ul>

              {/* Location */}
              <ul className="text-[13px] text-gray-500 space-y-1 mb-4">
                <li>BAS Roadshow</li>
                <li>
                  Lausanne{" "}
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

              {/* Calendar Links */}
              <div className="text-[13px] flex items-center gap-2">
                <a
                  href="http://www.google.com/calendar/event?action=TEMPLATE&text=BAS%20Roadshow%20%E2%80%93%20Lausanne&dates=20250221T170000Z/20250221T220000Z&location=Lausanne"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c75b4a] hover:underline"
                >
                  Google Calendar
                </a>
                <span className="text-gray-300">|</span>
                <a
                  href="/roadshow-2025/2025/2/21/bas-roadshow-lausanne?format=ical"
                  className="text-[#c75b4a] hover:underline"
                >
                  ICS
                </a>
              </div>
            </div>

            {/* Right Column - Description */}
            <div>
              <div className="text-[15px] text-gray-700 leading-relaxed space-y-4">
                <p>
                  <strong>
                    The Bitcoin Association Switzerland invites you: Roadshow in Lausanne on February
                    21, 2025
                  </strong>
                </p>
                <p>
                  The Bitcoin Association Switzerland is launching its official Roadshow 2025, and
                  the next stop will take place in the vibrant city of Lausanne!
                </p>
                <p>
                  <strong>Sign up for the roadshow event in Lausanne</strong>{" "}
                  <a
                    href="https://lu.ma/t5cz4fos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c75b4a] hover:underline font-semibold"
                  >
                    here
                  </a>
                </p>
                <p>
                  <strong>Best regards,</strong>
                  <br />
                  The BAS Board
                </p>
              </div>

              {/* Roadshow Image */}
              <div className="mt-8">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/6bb0f5c0-1021-4992-9b30-032a5cd98c92/BAS+Roadshow+2025.jpg"
                  alt="BAS Roadshow 2025"
                  width={500}
                  height={707}
                  className="max-w-full h-auto"
                />
              </div>

              {/* Share */}
              <div className="flex items-center gap-4 mt-8 text-xs text-gray-400">
                <ShareButton title="BAS Roadshow – Lausanne" />
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 my-10" />

          {/* Earlier/Later Event Navigation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Earlier Event */}
            <div className="text-[13px]">
              <div className="text-gray-500 mb-1">Earlier Event: 21 January</div>
              <Link
                href="/roadshow-2025/2025/1/21/bas-roadshow-bern"
                className="text-[#c75b4a] hover:underline"
              >
                BAS Roadshow – Bern
              </Link>
            </div>

            {/* Later Event */}
            <div className="text-[13px] md:text-right">
              <div className="text-gray-500 mb-1">Later Event: 21 March</div>
              <Link
                href="/roadshow-2025/2025/3/21/bas-roadshow-lake-zurich"
                className="text-[#c75b4a] hover:underline"
              >
                BAS Roadshow Lake Zurich
              </Link>
            </div>
          </div>
        </div>
      </main>

      <FooterSimple />
    </div>
  );
}
