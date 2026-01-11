import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "General Assembly - Bitcoin Association Switzerland",
  description: "General Assembly of Bitcoin Association Switzerland 2025",
};

export default function GeneralAssemblyPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 bg-white min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-8">
            Bitcoin Association Switzerland - General Assembly
          </h1>

          {/* Introduction */}
          <div className="text-sm leading-relaxed text-gray-700 mb-8">
            <p>
              We are very much looking forward to welcoming you at this year&apos;s General Assembly of Bitcoin Association Switzerland, which will take place during the Bitcoin Baden Konferenz.
            </p>
          </div>

          {/* Date, Time, and Location */}
          <div className="mb-8">
            <h2 className="text-sm font-semibold text-gray-800 mb-4 underline">
              Date, Time, and Location:
            </h2>
            <div className="text-sm leading-relaxed text-gray-700 space-y-2">
              <p>
                <span className="font-semibold text-gray-800">&#9679; Date:</span> 06/12/2025
              </p>
              <p>
                <span className="font-semibold text-gray-800">&#9679; Time:</span> 17:00 - 19:00
              </p>
              <p>
                <span className="font-semibold text-gray-800">&#9679; Location:</span>{" "}
                <a
                  href="https://maps.google.com/?q=BBB+Martinsberg+Wiesenstrasse+32+5400+Baden"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#5c8a8a] underline"
                >
                  BBB Martinsberg, Wiesenstrasse 32, 5400 Baden.
                </a>{" "}
                The General Assembly will also be available by livestream.
              </p>
              <p>
                <span className="font-semibold text-gray-800">&#9679; Registration for the General Assembly:</span>{" "}
                Follow:{" "}
                <a
                  href="https://luma.com/cwokgqnp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#5c8a8a] hover:underline"
                >
                  https://luma.com/cwokgqnp
                </a>{" "}
                for registration and more info. Members may join the GA without a ticket for the Bitcoin Baden event. It&apos;s not mandatory to get a ticket for the whole day, but we obviously encourage you to do so.
              </p>
            </div>
          </div>

          {/* Agenda */}
          <div className="mb-8">
            <h2 className="text-sm font-semibold text-gray-800 mb-4 underline">
              Agenda:
            </h2>
            <ol className="text-sm leading-relaxed space-y-3">
              <li className="text-gray-800 font-semibold">
                1. Welcome
              </li>
              <li>
                <span className="text-gray-800 font-semibold">2. Mandatory General Assembly Topics</span>
                <ul className="mt-2 ml-6 space-y-1 text-gray-700">
                  <li>a. Approval of the Agenda</li>
                  <li>b. Approval of Minutes from Previous General Assembly</li>
                  <li>c. Financial Report 2025</li>
                  <li>d. Official discharge of former BAS Board</li>
                </ul>
              </li>
              <li className="text-gray-800 font-semibold">
                3. What happened in 2025
              </li>
              <li className="text-gray-800 font-semibold">
                4. Welcome and Confirmation by the new President
              </li>
              <li className="text-gray-800 font-semibold">
                5. BAS Board Election
              </li>
              <li className="text-gray-800 font-semibold">
                6. Miscellaneous / Motions from Members
              </li>
              <li className="text-gray-800 font-semibold">
                7. Good Bye and Apero
              </li>
            </ol>
          </div>

          {/* Notes */}
          <div className="mb-8">
            <h2 className="text-sm font-semibold text-gray-800 mb-4">
              NOTES:
            </h2>
            <ol className="text-sm leading-relaxed space-y-3">
              <li className="text-gray-700">
                <span className="font-semibold text-gray-800">1. Minutes:</span>{" "}
                The Secretary records detailed minutes of decisions, votes, and discussions to comply with legal requirements.
              </li>
              <li className="text-gray-700">
                <span className="font-semibold text-gray-800">2. Voting Process:</span>{" "}
                Will be conducted digitally only.
              </li>
              <li className="text-gray-700">
                <span className="font-semibold text-gray-800">3. Online Participation:</span>{" "}
                Livestream with active voting via secure platform.
              </li>
              <li className="text-gray-700">
                <span className="font-semibold text-gray-800">4. Apero:</span>{" "}
                Networking with wine, beer &amp; snacks after the GA.
              </li>
              <li className="text-gray-700">
                <span className="font-semibold text-gray-800">5. Recording:</span>{" "}
                A recap video will be made for those who missed it.
              </li>
            </ol>
          </div>

          {/* Download Link */}
          <div className="mt-8">
            <a
              href="https://www.bitcoinassociation.ch/s/BAS_GeneralAssembly_06122025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5c8a8a] hover:underline text-sm"
            >
              Download the announcement PDF here
            </a>
          </div>
        </div>
      </main>
      <FooterSimple />
    </>
  );
}
