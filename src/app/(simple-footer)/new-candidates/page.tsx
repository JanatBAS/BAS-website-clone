import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "New Board Candidates",
  description:
    "Five candidates stand for election to the board of the Bitcoin Association Switzerland at the general assembly: Cedric A. Schmid, Tobias Kress, Ralph Hofacker, Rahim Taghizadegan and Alexandre Flory Samartino.",
};

// Names link to the candidate's Board Election 2024 profile where one exists.
const candidates: { name: string; href?: string }[] = [
  { name: "CEDRIC A. SCHMID" },
  { name: "TOBIAS KRESS", href: "/tobias-kress" },
  { name: "RALPH HOFACKER", href: "/ralph-hofacker" },
  { name: "RAHIM TAGHIZADEGAN" },
  { name: "ALEXANDRE FLORY SAMARTINO", href: "/alexandre-flory-samartino" },
];

export default function NewCandidatesPage() {
  return (
    <main className="pt-20 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page Title */}
        <h1 className="text-2xl md:text-3xl font-light text-gray-800 mb-8 font-serif">
          Five candidates stand for election at the upcoming general assembly:
        </h1>

        {/* Candidates List */}
        <ul className="space-y-2 ml-4">
          {candidates.map((candidate) => (
            <li key={candidate.name} className="flex items-start">
              <span className="text-[#40c4b4] mr-3 font-bold">&#8226;</span>
              {candidate.href ? (
                <Link
                  href={candidate.href}
                  className="text-[#40c4b4] hover:underline font-semibold text-sm tracking-wide uppercase"
                >
                  {candidate.name}
                </Link>
              ) : (
                <span className="text-gray-800 font-semibold text-sm tracking-wide uppercase">
                  {candidate.name}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
