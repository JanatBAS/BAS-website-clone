import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Board - Bitcoin Association Switzerland",
  description: "Meet the board members of Bitcoin Association Switzerland",
};

interface BoardMember {
  name: string;
  role?: string;
  image: string;
  bio: string[];
  email?: string;
  linkedin?: string;
}

const boardMembers: BoardMember[] = [
  {
    name: "Jan Brzezek",
    role: "President",
    image:
      "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1bc9be6e-d276-4437-8a6a-e4d40faf19ed/Jan_Brzezek.jpg",
    bio: [
      "Jan Brzezek is a Swiss fintech entrepreneur and long-time Bitcoin advocate. He is the founder of Crypto Finance AG, one of Switzerland's leading digital asset companies, which he built from 2017 until its full acquisition by Deutsche Borse Group. Before founding Crypto Finance, Jan held various roles in banking, asset management and innovation, giving him deep experience in regulation, governance, and financial markets.",
      "With a strong background in building and scaling organisations, Jan is committed to strengthening Switzerland's role as a global hub for Bitcoin. His focus lies on education, policy work, community development, and responsible innovation.",
      "As President of the Bitcoin Association Switzerland, Jan aims to bring clarity, transparency and professionalism to the organisation while empowering members and supporting initiatives that drive meaningful Bitcoin adoption.",
    ],
    email: "jan@bitcoinassociation.ch",
  },
  {
    name: "Phil Lojacono",
    role: "Vice President",
    image:
      "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/cb736d37-48c5-4517-af06-a64bcbf6a5db/phil.png",
    bio: [
      "Phil Lojacono is a seasoned entrepreneur with extensive experience in fintech and business development. He is the founder of Berglinde AG, a self-funded Bitcoin company aimed at onboarding businesses to a Bitcoin standard. Previously, Phil served as CEO of Liiva AG, a joint venture between Switzerland's largest bank (Raiffeisen) and its leading insurance company (Mobiliar), where he led the development of a digital real estate platform. Phil also co-founded Advanon AG, a working capital financing platform for SMEs, which he successfully scaled across two juristictions and later sold.",
      "In parallel he started writing the Berglinde (formerly Coprnic) newsletter three years ago with which he regularly writes about Bitcoin and its effects on macroeconomics and politics. He's a regular guest on Bitcoin podcasts with the aim to onboard the next few thousand Bitcoiners.",
    ],
    email: "phil@bitcoinassociation.ch",
    linkedin: "https://www.linkedin.com/in/phillojacono/",
  },
  {
    name: "Lisa Tscherry",
    role: undefined,
    image:
      "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/5ef77c4f-b9e9-4036-837c-0346c6299140/1685636630658.jpeg",
    bio: [
      'Lisa Tscherry holds a Master\'s degree in Psychology and a Master\'s degree in Blockchain and Digital Currency, where she graduated as the top student from the University of Nicosia. With extensive experience in strategic HR roles, she has honed her expertise in conflict resolution, leadership development, and executive coaching, becoming a trusted advisor in navigating complex organizational challenges. Her skill in fostering community engagement and creating inclusive environments is matched by her strategic mindset. As an active advocate for Bitcoin adoption, Lisa is the founder of "SatoShe - Bitcoin for Women," an innovative initiative that empowers women through education, helping to onboard them into the world of Bitcoin and to bridge the gender gap in the space.',
    ],
    email: "lisa@bitcoinassociation.ch",
    linkedin: "https://www.linkedin.com/in/lisa-tscherry/",
  },
  {
    name: "Adriano Bertini",
    role: undefined,
    image:
      "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/6da2b596-2134-43e3-974e-ae0d6f35a24b/1589621280083.jpeg",
    bio: [
      "Adriano Bertini has a robust career in financial services, blockchain, and strategic consulting, currently serving as the Head of Product and Strategy at Ledger Enterprise. He has held various leadership roles in both established corporations and innovative tech companies, driving projects that bridge the gap between traditional finance and blockchain solutions. His experience spans project management, risk management, and regulatory compliance, with a focus on cutting-edge technology and cryptocurrency adoption. Adriano has been instrumental in promoting Bitcoin and blockchain technology through various strategic initiatives. His deep knowledge of both financial systems and blockchain solutions makes him a critical player in the integration of cryptocurrencies into institutional frameworks.",
    ],
    linkedin: "https://www.linkedin.com/in/adriano-bertini/",
  },
  {
    name: "Rahim Taghizadegan",
    role: undefined,
    image:
      "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/fda2babc-fa6f-41b0-838f-c9988e10f9a0/Rahim.jpg",
    bio: [
      "The last Austrian Austrian Economist in the direct tradition, teaching in Austria, Liechtenstein, Switzerland, and Germany. Best-selling book author, speaker, entrepreneur. Among the first economists to analyze and adopt Bitcoin in the earliest days. Founder of scholarium, chief economist of the Free Cities Foundation, investor in Bitcoin citadels.",
    ],
    linkedin: "https://www.linkedin.com/in/rahimt/",
  },
  {
    name: "Luzius Meisser",
    role: "Honorary Board Member",
    image:
      "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/b0ef7510-ae50-42db-b2d6-6a6c68911acb/1623673331849.jpeg",
    bio: [
      "Dr. Luzius Meisser has been a member of the Board of Directors of Bitcoin Suisse since 2017, including two and a half years as Chairman. He has been following Bitcoin since 2011 and founded the Bitcoin Association Switzerland in 2013. He is also a member of the Expert Council of the Swiss Blockchain Federation. After studying computer science at ETH, he co-founded the cloud service Wuala and began investing in Swiss start-ups after its sale. He also holds a master's degree in economics and a doctorate in banking & finance from the University of Zurich, chairs the tokenization service provider Aktionariat and is on the board of the Frankencoin Assocation.",
    ],
    linkedin: "https://www.linkedin.com/in/luziusmeisser/",
  },
];

const sidebarLinks = [
  { label: "About", href: "/about-1" },
  { label: "Board", href: "/board", active: true },
  { label: "Finances", href: "/finances" },
  { label: "Statutes", href: "/statutes" },
  { label: "Media Kit", href: "/media-kit" },
  { label: "Contact", href: "/contact-1" },
];

function BoardMemberCard({ member }: { member: BoardMember }) {
  return (
    <div className="flex flex-col">
      {/* Member Image */}
      <div className="mb-4">
        <div className="relative w-[180px] h-[180px] rounded-md overflow-hidden">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover"
            sizes="180px"
          />
        </div>
      </div>

      {/* Member Info */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-1">
          {member.name}
        </h3>
        {member.role && (
          <p className="font-semibold text-gray-900 mb-4">{member.role}</p>
        )}
        <div className="space-y-4 max-w-3xl">
          {member.bio.map((paragraph, index) => (
            <p key={index} className="text-sm text-gray-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-2 text-sm">
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="text-gray-700 hover:text-[#c75b4a] underline transition-colors"
            >
              Email
            </a>
          )}
          {member.email && member.linkedin && (
            <span className="text-gray-400">-</span>
          )}
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[#c75b4a] underline transition-colors"
            >
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function BoardPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-12">
            {/* Sidebar Navigation */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                  About
                </p>
                <nav className="space-y-2">
                  {sidebarLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block text-sm transition-colors ${
                        link.active
                          ? "text-gray-900 font-medium"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Board Members Content */}
            <div className="space-y-8">
              {boardMembers.map((member, index) => (
                <div key={member.name}>
                  <BoardMemberCard member={member} />
                  {index < boardMembers.length - 1 && (
                    <Separator className="mt-8" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
