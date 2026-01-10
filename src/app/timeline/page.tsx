import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const boardElectionNavItems = [
  { label: "FAQ", href: "/faq" },
  { label: "Timeline", href: "/timeline", active: true },
  { label: "Candidates", href: "/candidates" },
  { label: "- Adriano Bertini", href: "/adriano-bertini", indent: true },
  { label: "- Dario Duran", href: "/dario-duran", indent: true },
  { label: "- Bastian Feder", href: "/bastian-feder", indent: true },
  { label: "- Demelza Hays", href: "/demelza-hays", indent: true },
  { label: "- Ralph Hofacker", href: "/ralph-hofacker", indent: true },
  { label: "- Ronald Kogens", href: "/ronald-kogens", indent: true },
  { label: "- Tobias Kress", href: "/tobias-kress", indent: true },
  { label: "- Phil Lojacono", href: "/phil-lojacono", indent: true },
  { label: "- Niklas Nikolajsen", href: "/niklas-nikolajsen", indent: true },
  { label: "- Marcel Rapold", href: "/marcel-rapold", indent: true },
  { label: "- Alexandre Flory Samartino", href: "/alexandre-flory-samartino", indent: true },
  { label: "- Lisa Tscherry", href: "/lisa-tscherry", indent: true },
  { label: "- Eric Wasescha", href: "/eric-wasescha", indent: true },
  { label: "How to vote", href: "/how-to-vote" },
];

interface TimelineItem {
  title: string;
  dayRange?: string;
  actualDate: string;
  details?: string[];
}

const timelineItems: TimelineItem[] = [
  {
    title: "1. Announcement (Day 1):",
    actualDate: "Actual Date: (no later than) 6 August 2024",
  },
  {
    title: "2. Membership Confirmations and Process Explanations (Days 1-3):",
    actualDate: "Actual Dates: 6-8 August 2024",
    details: [
      "Members and former members receive email invitations to the extra ordinary general assembly and are encouraged to check out the BAS website on how to participate in the election",
      "Instructions for membership fee payment are provided",
    ],
  },
  {
    title: "3. Candidacy Submission Phase (Days 16-30):",
    actualDate: "Actual Dates: 21 August - 4 September 2024",
    details: [
      "Candidates can submit profiles, motivation letters, and qualifications. Check the FAQ for details on what is expected in the submissions",
      "Candidate profiles will be published on the BAS website",
      "Anonymous and insufficient submissions will be ignored",
    ],
  },
  {
    title: "4. Evaluation and Getting-to-Know Phase:",
    dayRange: "Day 31-60:",
    actualDate: "Actual Dates: 5 September - 4 October 2024",
    details: [
      "Members evaluate profiles and get to know candidates",
      "An online session with members and all candidates is scheduled for the evening of 11 September 2024",
    ],
  },
  {
    title: "5. Registration Deadline for Eligible Voters (Day 51):",
    actualDate: "Actual Date: 25 September 2024",
    details: [
      "Deadline for accepting new members wishing to vote",
      "Membership confirmed by paying the membership fee",
    ],
  },
  {
    title: "6. Election DaY (Day 61):",
    actualDate: "Actual Date: 5 October 2024, 14.00",
    details: [
      'The extra ordinary, single topic general assembly takes place in Zurich at Karl der Grosse, Kirchgasse 14, 8001 Zurich. We have booked the room "Erkerzimmer" which allows for up to 60 people. Unfortunately, the outgoing board could not agree on the viability of a hybrid assembly where participants can vote through an online conference system such as Zoom',
      "Only members who have paid their membership fee are eligible to vote, this applies to both individual and corporate members. It is possible for an individual to represent both, herself and a company during the voting process",
    ],
  },
  {
    title: "7. Announcement of Results (Day 62):",
    actualDate: "Actual Date: 6 October 2024",
    details: ["Announcement of new board members on the BAS website"],
  },
];

export default function TimelinePage() {
  return (
    <>
      <Header />

      {/* Hero Banner Image */}
      <div className="relative w-full h-[200px] md:h-[300px] mt-20">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1722764266654-ROAUQDRVS2YED5Q5SE0M/timeline.png"
          alt="Timeline"
          fill
          className="object-cover"
          priority
        />
      </div>

      <main className="py-12 bg-white min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            {/* Sidebar Navigation */}
            <aside className="md:w-56 flex-shrink-0">
              <h2 className="text-[#8b7355] text-base font-light mb-4 font-serif italic">
                Board Election 2024
              </h2>
              <nav className="space-y-1">
                {boardElectionNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block text-xs tracking-wider transition-colors ${
                      item.active
                        ? "text-gray-900 font-semibold"
                        : "text-gray-500 hover:text-gray-900"
                    } ${item.indent ? "pl-2" : ""}`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1 max-w-3xl">
              {/* Page Title */}
              <h1 className="text-xl md:text-2xl font-bold text-gray-800 leading-relaxed mb-4">
                Bitcoin Association Switzerland
                <br />
                Board Election Timeline
              </h1>

              {/* Introduction */}
              <p className="text-lg md:text-xl font-normal text-gray-800 leading-relaxed mb-10">
                As many of you are aware, we are preparing to elect a new board
                for the Bitcoin Association Switzerland. We aim for a
                transparent process that gives everyone an opportunity to stand
                for election.
              </p>

              {/* Timeline Items */}
              <div className="space-y-8">
                {timelineItems.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
                      {item.title}
                    </h3>
                    {item.dayRange && (
                      <p className="text-sm text-gray-600">{item.dayRange}</p>
                    )}
                    <p className="text-sm text-gray-600">{item.actualDate}</p>
                    {item.details && item.details.length > 0 && (
                      <ul className="space-y-2 mt-2">
                        {item.details.map((detail, detailIndex) => (
                          <li
                            key={detailIndex}
                            className="text-sm text-gray-600 leading-relaxed"
                          >
                            <span className="mr-2">&#8226;</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>

              {/* Note at the bottom */}
              <p className="text-sm text-gray-600 leading-relaxed mt-10">
                In case of doubt: all dates refer to Swiss dates, so the
                deadline for example for candidacy submission is 4th September
                2024 23:59 Swiss time (though why would you wait until the last
                moment?).
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
