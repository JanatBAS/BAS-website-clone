import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import Link from "next/link";

export default function BitcoinAssociationGABoardExpansionPage() {
  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen bg-white">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Date and Title */}
          <p className="text-sm text-gray-700 mb-4">
            <strong>27 NOV 2024 Bitcoin Association GA Board Expansion</strong>
          </p>

          <p className="text-sm text-gray-700 mb-6">
            <strong>Announcement Re: Potential Board Expansion – November 27th 2024</strong>
          </p>

          {/* Content */}
          <div className="prose prose-sm max-w-none text-gray-600 leading-relaxed space-y-6">
            <p>
              On the upcoming general assembly (GA) Dec 7th 2024, members shall be asked to vote on determining the exact number of board members of the Board of the Bitcoin Association Switzerland.
            </p>

            <p>
              The Board currently comprises four members, but at the extraordinary general assembly on Oct 5th 2024, many members expressed the view that this was too few.
            </p>

            <p>
              If the members vote to expand the board at the upcoming GA, we would enter the appointed number into the Articles of Association. We would then also move directly to voting for the member(s) to join the board.
            </p>

            <p>
              We ask all who would consider to stand as candidates to send a short CV and motivational letter (1/2 page maximum) to:{" "}
              <a
                href="mailto:info@bitcoinassociation.ch"
                className="text-[#5a9e9e] hover:underline"
              >
                info@bitcoinassociation.ch
              </a>
              , CC:{" "}
              <a
                href="mailto:phil@bitcoinassociation.ch"
                className="text-[#5a9e9e] hover:underline"
              >
                phil@bitcoinassociation.ch
              </a>
              . This should be done before December 3rd 2024.
            </p>

            <p>
              We would then publish the candidate list (including CVs and motivational letters), along with the detailed agenda, to all members subscribed to attend the general assembly.
            </p>

            <p>Sincerely</p>

            <p>
              <strong>The BAS Board</strong>
            </p>

            <div className="space-y-4">
              <div>
                <p className="mb-0">
                  <strong>NIKLAS NIKOLAJSEN</strong>
                </p>
                <p className="text-[#5a9e9e] mt-0">President</p>
              </div>

              <div>
                <p className="mb-0">
                  <strong>PHIL LOJACONO</strong>
                </p>
                <p className="text-[#5a9e9e] mt-0">Vice President</p>
              </div>

              <div>
                <p className="mb-0">
                  <strong>ADRIANO BERTINI</strong>
                </p>
              </div>

              <div>
                <p className="mb-0">
                  <strong>LISA TSCHERRY</strong>
                </p>
              </div>
            </div>

            <div className="pt-4 space-y-3">
              <p>
                Information regarding General Assembly:{" "}
                <a
                  href="https://www.bitcoinassociation.ch/general-assembly"
                  className="text-[#5a9e9e] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.bitcoinassociation.ch/general-assembly
                </a>
              </p>

              <p>
                Registration for the General Assembly:{" "}
                <a
                  href="https://forms.gle/8huTPkS4cfa4M5QB7"
                  className="text-[#5a9e9e] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://forms.gle/8huTPkS4cfa4M5QB7
                </a>
              </p>

              <p>
                Become a member:{" "}
                <a
                  href="https://www.bitcoinassociation.ch/membership"
                  className="text-[#5a9e9e] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.bitcoinassociation.ch/membership
                </a>
              </p>

              <p>
                <a
                  href="/pdfs/27NOV2024-Bitcoin-Association-GA-Board-Expansion-wcgk.pdf"
                  className="text-[#5a9e9e] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download the PDF document here
                </a>
              </p>
            </div>
          </div>
        </article>
      </main>
      <FooterSimple />
    </>
  );
}
