import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import Link from "next/link";
import Image from "next/image";

interface BlogPost {
  id: string;
  author: string;
  date: string;
  title: string;
  excerpt: string;
  href: string;
  image?: string;
}

const featuredPost: BlogPost = {
  id: "featured",
  author: "Roger Darin",
  date: "10 August 2022",
  title: "Prudential Treatment of Cryptoasset Exposures II",
  excerpt:
    "While the Bank for International Settlement / Basel Committee on Banking Supervision continues to propose regulation, they also have developed a habit of not addressing legitimate concerns from the community. That is highly regrettable, but no reason to throw in the towel. So the Bitcoin Association Switzerland continues to provide constructive feedback and - so we think - well argued suggestions on how to improve on the longterm goals of the BIS to make the space safer and allow for more innovation.",
  href: "/bitcoin-association-switzerland/2022/8/10/prudential-treatment-of-cryptoasset-exposures-ii",
  image:
    "/images/events/event-default-header.jpg",
};

export default function AskMeAnythingCategoryPage() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-white">
        {/* Featured Post Banner */}
        <div className="relative h-[400px] md:h-[500px] lg:h-[500px] overflow-hidden">
          <Image
            src={featuredPost.image!}
            alt={featuredPost.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
              <div className="text-sm italic mb-2">{featuredPost.date}</div>
              <h1 className="text-xl md:text-2xl lg:text-2xl font-semibold uppercase tracking-wider mb-4">
                <Link href={featuredPost.href} className="hover:opacity-80">
                  {featuredPost.title}
                </Link>
              </h1>
              <Link
                href={featuredPost.href}
                className="text-sm italic hover:opacity-80"
              >
                View Post&rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="inline-flex items-center border-b border-gray-400 pb-1">
            <span className="text-xs uppercase tracking-wider text-gray-600">
              Ask Me Anything (AMA)
            </span>
            <Link
              href="/bitcoin-association-switzerland"
              className="ml-2 text-gray-600 hover:text-gray-800 text-xs"
            >
              &times;
            </Link>
          </div>
        </div>
      </main>
      <FooterSimple />
    </>
  );
}
