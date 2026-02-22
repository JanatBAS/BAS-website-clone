import Header from "@/components/Header";
import Footer from "@/components/Footer";

const candidates = [
  {
    name: "Adriano Bertini",
    href: "/pdfs/AdrianoBertini_BAS_PresidentApplication_2025.pdf",
  },
  {
    name: "Jan Brzezek",
    href: "/pdfs/JanBrzezek_BAS_PresidentApplication_2025.pdf",
  },
  {
    name: "Alexandre Flory Samartino",
    href: "/pdfs/AlexandreFlorySamartino_BAS_PresidentApplication_2025.pdf",
  },
  {
    name: "Rahim Taghizadegan",
    href: "/pdfs/RahimTaghizagedan_BAS_PresidentApplication_2025.pdf",
  },
];

export default function PresidentialElection2025CandidatesPage() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Page Title */}
          <h1 className="text-[#5a9e9e] font-serif text-2xl md:text-3xl mb-6">
            Presidential Election 2025 Candidates
          </h1>

          {/* Introduction Text */}
          <p className="text-gray-500 mb-8 font-serif italic">
            Below you will find the application documents of the four candidates for the 2025 presidential election:
          </p>

          {/* Candidates List */}
          <ul className="space-y-2">
            {candidates.map((candidate) => (
              <li key={candidate.name} className="flex items-start">
                <span className="text-gray-500 mr-2">&bull;</span>
                <a
                  href={candidate.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#5a9e9e] hover:text-[#4a8e8e] font-serif transition-colors"
                >
                  {candidate.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
