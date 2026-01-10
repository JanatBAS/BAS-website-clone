import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const aboutNavItems = [
  { label: "About", href: "/about-1", active: true },
  { label: "Board", href: "/board", active: false },
  { label: "Finances", href: "/finances", active: false },
  { label: "Statutes", href: "/statutes", active: false },
  { label: "Media Kit", href: "/media-kit", active: false },
  { label: "Contact", href: "/contact-1", active: false },
];

interface Quote {
  text: string;
  author: string;
  title?: string;
}

const quotes: Quote[] = [
  {
    text: "I really like Bitcoin. I own Bitcoins. It's a store of value, a distributed ledger. It's a great place to put assets, especially in places like Argentina with 40 percent inflation, where $1 today is worth 60 cents in a year, and a government's currency does not hold value.",
    author: "David Marcus",
    title: "CEO of Paypal",
  },
  {
    text: "Bitcoin is a technological tour de force.",
    author: "Bill Gates",
  },
  {
    text: "Bitcoin is the beginning of something great: a currency without a government, something necessary and imperative.",
    author: "Nassim Taleb",
  },
];

function QuoteIcon() {
  return (
    <svg
      className="w-6 h-6 text-[#c9a882] mb-4"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M11 7.5c0 2.21-1.79 4-4 4-.78 0-1.5-.22-2.13-.59C5.5 12.68 6.5 14 8 14v2c-3.31 0-6-2.69-6-6V7c0-1.66 1.34-3 3-3s3 1.34 3 3c0 .18-.02.36-.05.53.02-.18.05-.35.05-.53zm9 0c0 2.21-1.79 4-4 4-.78 0-1.5-.22-2.13-.59C14.5 12.68 15.5 14 17 14v2c-3.31 0-6-2.69-6-6V7c0-1.66 1.34-3 3-3s3 1.34 3 3c0 .18-.02.36-.05.53.02-.18.05-.35.05-.53z" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 bg-white min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            {/* Sidebar Navigation */}
            <aside className="md:w-48 flex-shrink-0">
              <h2 className="text-[#8b7355] text-lg font-light mb-4 font-serif italic">
                About
              </h2>
              <nav className="space-y-2">
                {aboutNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block text-xs uppercase tracking-wider transition-colors ${
                      item.active
                        ? "text-gray-900 font-semibold"
                        : "text-gray-500 hover:text-gray-900"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1 max-w-2xl">
              {/* About Us Section */}
              <section className="mb-12">
                <h2 className="text-sm uppercase tracking-wider text-gray-800 font-semibold mb-6">
                  About Us
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Founded in late 2013, the Bitcoin Association Switzerland is
                  the oldest Fintech association in Switzerland and one of the
                  oldest still active Bitcoin Associations in the world.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We form an active community of enthusiasts who organize
                  events, resolve open legal questions, and educate the public
                  by providing a contact point for media inquiries.
                </p>
              </section>

              {/* Divider */}
              <hr className="border-gray-200 mb-12" />

              {/* About Bitcoin Section */}
              <section>
                <h2 className="text-sm uppercase tracking-wider text-gray-800 font-semibold mb-6">
                  About Bitcoin
                </h2>

                {/* YouTube Video Embed */}
                <div className="mb-12">
                  <div className="relative w-full aspect-video bg-gray-100 rounded overflow-hidden">
                    <iframe
                      src="https://www.youtube.com/embed/Gc2en3nHxA4"
                      title="What is Bitcoin? (v2)"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                </div>

                {/* Quotes Section */}
                <div className="grid md:grid-cols-2 gap-8">
                  {/* First quote - full width on left column */}
                  <div className="flex flex-col items-center text-center">
                    <QuoteIcon />
                    <blockquote className="text-[#8b7355] text-sm leading-relaxed italic font-serif mb-4">
                      {quotes[0].text}
                    </blockquote>
                    <cite className="text-gray-400 text-xs not-italic">
                      &mdash; {quotes[0].author}
                      {quotes[0].title && `, ${quotes[0].title}`}
                    </cite>
                  </div>

                  {/* Right column - two quotes stacked */}
                  <div className="flex flex-col gap-8">
                    {/* Second quote */}
                    <div className="flex flex-col items-center text-center">
                      <QuoteIcon />
                      <blockquote className="text-[#8b7355] text-sm leading-relaxed italic font-serif mb-4">
                        {quotes[1].text}
                      </blockquote>
                      <cite className="text-gray-400 text-xs not-italic">
                        &mdash; {quotes[1].author}
                      </cite>
                    </div>

                    {/* Third quote */}
                    <div className="flex flex-col items-center text-center">
                      <QuoteIcon />
                      <blockquote className="text-[#8b7355] text-sm leading-relaxed italic font-serif mb-4">
                        {quotes[2].text}
                      </blockquote>
                      <cite className="text-gray-400 text-xs not-italic">
                        &mdash; {quotes[2].author}
                      </cite>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
