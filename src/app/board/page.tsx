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

const placeholderBoardImage = "/images/misc/default-avatar.png";

const boardMembers: BoardMember[] = [
  {
    name: "Jan Brzezek",
    role: "President",
    image:
      "/images/board/jan-brzezek.jpg",
    bio: [
      "Jan Brzezek is a Swiss fintech entrepreneur and long-time Bitcoin advocate. He is the founder of Crypto Finance AG, one of Switzerland's leading digital asset companies, which he built from 2017 until its full acquisition by Deutsche Borse Group. Before founding Crypto Finance, Jan held various roles in banking, asset management and innovation, giving him deep experience in regulation, governance, and financial markets.",
      "With a strong background in building and scaling organisations, Jan is committed to strengthening Switzerland's role as a global hub for Bitcoin. His focus lies on education, policy work, community development, and responsible innovation.",
      "As President of the Bitcoin Association Switzerland, Jan aims to bring clarity, transparency and professionalism to the organisation while empowering members and supporting initiatives that drive meaningful Bitcoin adoption.",
    ],
    email: "jan@bitcoinassociation.ch",
  },
  {
    name: "Lisa Tscherry",
    role: undefined,
    image:
      "/images/candidates/lisa-tscherry.jpeg",
    bio: [
      'Lisa Tscherry holds a Master\'s degree in Psychology and a Master\'s degree in Blockchain and Digital Currency, where she graduated as the top student from the University of Nicosia. With extensive experience in strategic HR roles, she has honed her expertise in conflict resolution, leadership development, and executive coaching, becoming a trusted advisor in navigating complex organizational challenges. Her skill in fostering community engagement and creating inclusive environments is matched by her strategic mindset. As an active advocate for Bitcoin adoption, Lisa is the founder of "SatoShe - Bitcoin for Women," an innovative initiative that empowers women through education, helping to onboard them into the world of Bitcoin and to bridge the gender gap in the space.',
    ],
    email: "lisa@bitcoinassociation.ch",
    linkedin: "https://www.linkedin.com/in/lisa-tscherry/",
  },
  {
    name: "Lewin Boehnke",
    role: "Board Member",
    image: placeholderBoardImage,
    bio: [
      "Dr. Lewin Boehnke is Chief Strategy Officer at Crypto Finance, part of Deutsche Boerse Group, where he focuses on long-term strategy, innovation, and the evolution of digital asset market infrastructure.",
      "He joined Crypto Finance in 2017 as one of its first employees and initially served as Head of Research and Chief Technology Officer of the crypto infrastructure division, leading the build-out of institutional-grade crypto custody and security systems.",
      "Lewin holds a PhD in theoretical and computational physics and has been active in the Bitcoin space since 2011. He brings deep hands-on experience across Bitcoin, cryptography, and financial infrastructure, with a strong interest in sound money, open networks, and building robust, scalable foundations for Bitcoin adoption.",
    ],
  },
  {
    name: "Ronald Kogens",
    role: "Secretary of the Board",
    image: placeholderBoardImage,
    bio: [
      "Ronald Kogens is a Swiss lawyer specializing in Bitcoin and Web3 with over 10 years of experience in the digital asset space.",
      "He is a strong advocate of Bitcoin maximalism and economic freedom and focuses on legal frameworks that preserve Bitcoin's integrity and decentralized nature.",
      "He serves as Secretary of the Board of the Bitcoin Association Switzerland.",
    ],
  },
  {
    name: "Timo Frick",
    role: "Head of Regulation & Policy",
    image: placeholderBoardImage,
    bio: [
      "Timo Frick is an attorney at law and founder of frick.legal, a boutique law firm in Liechtenstein focusing on Bitcoin, financial regulation and dispute resolution, as well as selected mandates for private clients. He gained industry experience at Bank Frick AG and Bitcoin Suisse AG.",
      "Bitcoin has accompanied him since the beginning of his studies, academically, professionally and out of conviction. At the intersection of Bitcoin and international arbitration, his core interests converge: to him, Bitcoin means the separation of state and money, arbitration the separation of state and law.",
      "As Head of Regulation & Policy of the Bitcoin Association Switzerland, he advocates for technology-neutral, risk-based regulatory frameworks and supports initiatives that strengthen Switzerland's standing as a Bitcoin hub.",
    ],
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
