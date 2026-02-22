import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

// Sidebar navigation items for the Board Election 2024 section
const sidebarNavItems = [
  { label: "FAQ", href: "/faq" },
  { label: "Timeline", href: "/timeline" },
  { label: "Candidates", href: "/candidates" },
  { label: "- Adriano Bertini", href: "/adriano-bertini" },
  { label: "- Dario Duran", href: "/dario-duran" },
  { label: "- Bastian Feder", href: "/bastian-feder" },
  { label: "- Demelza Hays", href: "/demelza-hays" },
  { label: "- Ralph Hofacker", href: "/ralph-hofacker" },
  { label: "- Ronald Kogens", href: "/ronald-kogens" },
  { label: "- Tobias Kress", href: "/tobias-kress" },
  { label: "- Phil Lojacono", href: "/phil-lojacono" },
  { label: "- Niklas Nikolajsen", href: "/niklas-nikolajsen" },
  { label: "- Marcel Rapold", href: "/marcel-rapold" },
  { label: "- Alexandre Flory Samartino", href: "/alexandre-flory-samartino" },
  { label: "- Lisa Tscherry", href: "/lisa-tscherry" },
  { label: "- Eric Wasescha", href: "/eric-wasescha" },
  { label: "How to vote", href: "/how-to-vote", active: true },
];

export default function HowToVotePage() {
  return (
    <>
      <Header />

      {/* Banner Image */}
      <div className="relative w-full h-[300px] md:h-[350px]">
        <Image
          src="/images/misc/faq.png"
          alt="FAQ Banner"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Main Content Area */}
      <main className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">

            {/* Sidebar Navigation */}
            <aside className="md:w-64 flex-shrink-0">
              <nav className="sticky top-24">
                <h2 className="text-[#c75b4a] font-semibold text-sm uppercase tracking-wider mb-4">
                  Board Election 2024
                </h2>
                <ul className="space-y-1">
                  {sidebarNavItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`block py-1.5 text-sm transition-colors ${
                          item.active
                            ? "text-[#c75b4a] font-medium"
                            : "text-gray-600 hover:text-[#c75b4a]"
                        } ${item.label.startsWith("-") ? "pl-4" : ""}`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1 max-w-3xl">
              {/* Update Notice */}
              <div className="mb-6">
                <h3 className="text-base md:text-lg font-semibold text-gray-800">
                  <strong>Update 6.10.24: The new board has been elected at the extra ordinary general assembly in Zurich on the 5th October 2024. You can see the new board members{" "}
                  <Link href="/board" className="text-[#c75b4a] hover:underline">
                    here
                  </Link>
                  .</strong>
                </h3>
              </div>

              <Separator className="my-6" />

              {/* Main Heading */}
              <h1 className="text-2xl md:text-3xl font-normal text-gray-800 mb-6 leading-relaxed">
                You have checked out the candidates&apos; profiles and would like to cast your vote now? Here is how the process works.
              </h1>

              {/* Two Ways to Vote */}
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 uppercase tracking-wide">
                There are two ways to cast your Vote:
              </h3>

              <ol className="list-decimal list-outside ml-6 space-y-6 mb-8 text-gray-700">
                <li>
                  <p className="mb-2">
                    <strong>In person at the upcoming extra ordinary general assembly</strong>
                  </p>
                  <p className="text-gray-600">
                    We meet on the 5th October at 14.00 at Karl der Grosse, Kirchgasse 14, 8001 Zurich (you may be asked to identify yourself)
                  </p>
                </li>
                <li>
                  <p className="mb-2">
                    <strong>Via mail</strong>
                  </p>
                  <p className="text-gray-600 mb-2">
                    <a
                      href="https://www.bitcoinassociation.ch/s/BAS-Voting-Form-Board-Election-2024-with-Email-Option.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#c75b4a] hover:underline"
                    >
                      Download the voting ballot
                    </a>
                    , fill it out according to the instructions in the form and mail it to LEXR Law Switzerland, Att. Christian Meisser, Langstrasse 64, 8004 Zurich. Alternatively, you can mail it as a PDF to the mentioned email address of the lawyer.
                  </p>
                  <p className="text-gray-600 italic">
                    In order for your vote to count, it needs to arrive no later than 4th October
                  </p>
                </li>
              </ol>

              {/* How Does It Work */}
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 uppercase tracking-wide">
                How does it work, exactly?
              </h3>

              <p className="text-gray-700 mb-6 leading-relaxed">
                The goal is to elect five board members, though four to six will be acceptable as well. A candidate needs to reach 50% of the vote to become elected. The voting ballot consists of all 14 candidates, with each name having a separate check box next to the name. If you want to vote for a candidate, you check the box next to the name. Voters who use the mail-in ballot will also be asked to express their preferences (1 for the strongest preference to 10 for the weakest preference) in case there is a second round of voting required.
              </p>

              {/* First Voting Round */}
              <h4 className="text-base font-semibold text-gray-800 mb-3">
                First voting round
              </h4>

              <p className="text-gray-700 mb-4 leading-relaxed">
                You can check up to six (6) boxes, it is not possible to give a candidate more than one vote. This is identical for voters present at the assembly and mail-in voters.
              </p>

              <p className="text-gray-700 mb-6 leading-relaxed">
                All votes (mailed in and present) get counted and a candidate is considered elected when he has more than 50% of the votes cast. If at least four candidates have been elected, the election ends.
              </p>

              {/* Second Voting Round */}
              <h4 className="text-base font-semibold text-gray-800 mb-3">
                Second voting round
              </h4>

              <p className="text-gray-700 mb-4 leading-relaxed">
                If fewer than four seats have been filled after the first round of voting, a second round will take place where the elected board members and the two weakest candidates get removed from the ballot. Each member will then have three (3) votes to give to three different candidates from the pool of remaining candidates. For mail-in voters, their preference is being applied in casting the three new votes with those already elected being ignored.
              </p>

              <p className="text-gray-700 mb-6 leading-relaxed">
                All candidates with 50% or more of the vote will be elected.
              </p>

              {/* Third Voting Round */}
              <h4 className="text-base font-semibold text-gray-800 mb-3">
                Third voting round
              </h4>

              <p className="text-gray-700 mb-4 leading-relaxed">
                If fewer than four seats have been filled after two rounds of voting, a third round will take place where the elected board members and the weakest candidate from the second round get removed from the ballot. Each member will then have three (3) votes to give to three different candidates from the pool of remaining candidates. For mail-in voters, their preference is being applied in casting the three new votes with those already elected being ignored.
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed">
                All candidates with 50% or more of the vote will be elected.
              </p>

              <p className="text-gray-700 mb-8 leading-relaxed">
                Additional voting rounds can be held until four board seats have been filled, using the same principle as outlined in the third voting round (weakest candidate gets eliminated).
              </p>

              {/* President Election */}
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 uppercase tracking-wide">
                How will the President get elected?
              </h3>

              <p className="text-gray-700 leading-relaxed">
                Once all board members have been elected, a second vote will take place for the election of the President from amongst all board members. The person with the most member votes will then become President. Elected board members are not allowed to vote in this process but get to briefly verbally express their preferences, if any. A tie in the election for the Presidency will result in a second round of voting with all but the two strongest candidates being removed from consideration. If the second round also ends in a tie, the toss of a coin will decide. For mail-in voters, their preference numbers will be applied with the lowest number being the strongest preference for President.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
