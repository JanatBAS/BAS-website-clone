import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BoardElectionNav from "@/components/candidates/BoardElectionNav";

export const metadata: Metadata = {
  title: "Board Election 2024 Candidates",
  description:
    "Profiles and application documents of the fourteen candidates who stood for election to the board of the Bitcoin Association Switzerland in 2024.",
};

// Dorian Crede has no profile page, so the name is listed without a link.
const candidates: { name: string; href?: string }[] = [
  { name: "Adriano Bertini", href: "/adriano-bertini" },
  { name: "Alexandre Flory Samartino", href: "/alexandre-flory-samartino" },
  { name: "Bastian Feder", href: "/bastian-feder" },
  { name: "Dario Duran", href: "/dario-duran" },
  { name: "Demelza Hays", href: "/demelza-hays" },
  { name: "Dorian Crede" },
  { name: "Eric Wasescha", href: "/eric-wasescha" },
  { name: "Lisa Tscherry", href: "/lisa-tscherry" },
  { name: "Marcel Rapold", href: "/marcel-rapold" },
  { name: "Niklas Nikolajsen", href: "/niklas-nikolajsen" },
  { name: "Phil Lojacono", href: "/phil-lojacono" },
  { name: "Ralph Hofacker", href: "/ralph-hofacker" },
  { name: "Ronald Kogens", href: "/ronald-kogens" },
  { name: "Tobias Kress", href: "/tobias-kress" },
];

export default function CandidatesPage() {
  return (
    <>
      {/* Hero Banner Image */}
      <div className="relative w-full h-[200px] md:h-[300px] mt-20">
        <Image
          src="/images/candidates/candidates-banner.png"
          alt="Candidates"
          fill
          className="object-cover"
          priority
        />
      </div>

      <main className="py-12 bg-white min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            <BoardElectionNav activeHref="/candidates" />

            {/* Main Content */}
            <div className="flex-1 max-w-3xl">
              {/* Page Title */}
              <h1 className="text-xl md:text-2xl font-normal text-gray-800 leading-relaxed mb-8">
                Fourteen candidates have put their name forward and stand for election at the upcoming extra ordinary general assembly:
              </h1>

              {/* Candidates List */}
              <ul className="mb-10 space-y-1">
                {candidates.map((candidate) => (
                  <li key={candidate.name} className="flex items-start">
                    <span className="text-brand mr-2">&#8226;</span>
                    {candidate.href ? (
                      <Link
                        href={candidate.href}
                        className="text-brand hover:underline font-semibold"
                      >
                        {candidate.name}
                      </Link>
                    ) : (
                      <span className="text-gray-800 font-semibold">{candidate.name}</span>
                    )}
                  </li>
                ))}
              </ul>

              {/* Instructions */}
              <div className="mb-8 space-y-4">
                <p className="text-sm font-semibold text-gray-800">
                  Please check out all their profiles and make sure to download the application documents.
                </p>
                <p className="text-sm font-semibold text-gray-800">
                  The summaries provided were written based on these documents but may leave essential information out.
                </p>
                <p className="text-sm text-gray-600">
                  Alternatively, you can download all zipped documents in a{" "}
                  <a
                    href="https://www.dropbox.com/s/i03hhbkzfzdj4e3/All%2014%20candidates.zip?dl=1"
                    className="text-brand hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    single zip file here
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
