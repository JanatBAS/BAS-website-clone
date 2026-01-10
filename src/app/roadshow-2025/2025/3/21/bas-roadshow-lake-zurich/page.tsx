import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import Link from "next/link";

export default function BASRoadshowLakeZurichPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Main Content */}
      <main className="flex-1 pt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-12 lg:gap-16">
            {/* Left Column - Event Details */}
            <div>
              <h1 className="text-3xl lg:text-4xl font-serif text-[#5c5c5c] leading-tight mb-8">
                BAS Roadshow Lake Zurich
              </h1>

              <div className="text-[#8c8c8c] space-y-1 mb-6">
                <p className="text-sm">Friday 21 March 2025</p>
                <p className="text-sm">18:30 – 23:00</p>
              </div>

              <div className="flex items-center gap-2 text-sm text-[#8c8c8c]">
                <a
                  href="http://www.google.com/calendar/event?action=TEMPLATE&text=BAS%20Roadshow%20Lake%20Zurich&dates=20250321T173000Z/20250321T220000Z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#c75b4a] transition-colors"
                >
                  Google Calendar
                </a>
                <span className="text-[#c0c0c0]">-</span>
                <a
                  href="/roadshow-2025/2025/3/21/bas-roadshow-lake-zurich?format=ical"
                  className="hover:text-[#c75b4a] transition-colors"
                >
                  ICS
                </a>
              </div>
            </div>

            {/* Right Column - Event Description */}
            <div className="text-[#5c5c5c]">
              <p className="text-lg font-semibold mb-6">
                The Roadshow is coming to Lake Zurich!
              </p>

              <p className="leading-relaxed mb-6">
                The <strong>Bitcoin Association Switzerland</strong> invites you to the next{" "}
                <strong>BAS Roadshow</strong> – this time on a{" "}
                <strong>boat in Rapperswil on March 21, 2025</strong>, starting at{" "}
                <strong>6:30 PM</strong>.
              </p>

              <p className="mb-8">
                Sign up for the roadshow event in Lake Zurich{" "}
                <a
                  href="https://lu.ma/pa1cmg9y"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c75b4a] hover:underline"
                >
                  here
                </a>
              </p>

              <div className="mt-8">
                <p className="font-semibold">Best regards,</p>
                <p>The BAS Board</p>
              </div>
            </div>
          </div>

          {/* Event Navigation */}
          <div className="mt-24 pt-8 border-t border-gray-100">
            <div className="flex justify-between items-start">
              {/* Earlier Event */}
              <div className="text-left">
                <p className="text-sm text-[#8c8c8c] mb-1">Earlier Event: 21 February</p>
                <Link
                  href="/roadshow-2025/2025/2/21/bas-roadshow-lausanne"
                  className="text-[#c75b4a] hover:underline"
                >
                  BAS Roadshow – Lausanne
                </Link>
              </div>

              {/* Later Event */}
              <div className="text-right">
                <p className="text-sm text-[#8c8c8c] mb-1">Later Event: 21 September</p>
                <Link
                  href="/roadshow-2025/2025/9/21/bas-roadshow-basel"
                  className="text-[#c75b4a] hover:underline"
                >
                  BAS Roadshow – Basel
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <FooterSimple />
    </div>
  );
}
