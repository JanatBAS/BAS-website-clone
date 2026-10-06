import BlogPostLayout, { BlogPostData } from "@/components/BlogPostLayout";
import { Metadata } from "next";

const post: BlogPostData = {
  title: "Statement on the 12-Point Program for a Forward-Looking Digital Financial Center",
  date: "31 May 2025",
  author: "Phil Lojacono",
  authorId: "672bdb3ae0672c1501f39ce8",
  href: "/bitcoin-association-switzerland/2025/12/8/statement-on-12-point-program",
  comments: [],
  olderPost: {
    title:
      "Bitcoin Association Switzerland Welcomes the Federal Council's Endorsement of Enhanced Bitcoin Regulation",
    href: "/bitcoin-association-switzerland/2025/2/28/bitcoin-association-switzerland-welcomes-the-federal-councils-endorsement-of-enhanced-bitcoin-regulation",
  },
};

export const metadata: Metadata = {
  title: post.title,
  description:
    "The Bitcoin Association Switzerland supports the 12-point program jointly developed by leading industry associations, but strongly opposes the introduction of Central Bank Digital Currencies (CBDCs).",
};

export default function StatementOn12PointProgramPage() {
  return (
    <BlogPostLayout post={post}>
      <p className="mb-6">
        The Bitcoin Association Switzerland supports the 12-point program jointly developed by leading industry associations to foster a strong and future-oriented environment for digital innovation in Switzerland. We believe this framework is an important step toward ensuring regulatory clarity, technological advancement, and an open, competitive financial system that empowers individuals and businesses alike.
      </p>

      <p className="mb-6">
        We are proud to have contributed to this initiative and remain committed to working collaboratively with all stakeholders - associations, policymakers, regulators, and entrepreneurs - to make Switzerland a global leader in the Bitcoin economy.
      </p>

      <p className="mb-6">
        <strong className="text-gray-900">
          However, we also wish to express a clear and principled stance as this was unclear in the communication of other involved parties
        </strong>
        :
      </p>

      <p className="mb-6">
        <strong className="text-gray-900">
          We strongly oppose the introduction of Central Bank Digital Currencies (CBDCs)
        </strong>
        . Such instruments pose a grave risk to financial privacy, individual freedom, and the principle of self-sovereignty that lies at the heart of the Bitcoin ethos. We believe that the development of CBDCs - especially those that enable centralized control or surveillance - would accelerate the erosion of civil liberties and contradict the open and decentralized values we work to protect.
      </p>

      <p className="mb-6">
        Our commitment is to a financial future rooted in freedom, privacy, and individual empowerment. We invite all stakeholders to join us in upholding these principles as we shape the future of digital finance in Switzerland.
      </p>

      <p className="mb-2">
        <a
          href="/pdfs/12PointsForStrongFinancialCEntre_Manifest_EN.pdf"
          className="text-[#c75b4a] hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download ENG version
        </a>
      </p>
      <p className="mb-8">
        <a
          href="/pdfs/12PointsForStrongFinancialCentres_Manifest_DE.pdf"
          className="text-[#c75b4a] hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download GER version
        </a>
      </p>
    </BlogPostLayout>
  );
}
