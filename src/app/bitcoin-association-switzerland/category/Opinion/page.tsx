import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import Link from "next/link";

export default function OpinionCategoryPage() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-white">
        {/* 404 Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-gray-600">
            <p className="mb-6 text-base leading-relaxed">
              We couldn&apos;t find the page you were looking for. This is either because:
            </p>

            <ul className="list-disc pl-8 mb-6 space-y-2 text-base leading-relaxed">
              <li>
                There is an error in the URL entered into your web browser. Please check the URL and try again.
              </li>
              <li>
                The page you are looking for has been moved or deleted.
              </li>
            </ul>

            <p className="text-base leading-relaxed">
              You can return to our homepage by{" "}
              <Link
                href="/"
                className="text-[#c75b4a] hover:underline"
              >
                clicking here
              </Link>
              , or you can try searching for the content you are seeking by{" "}
              <Link
                href="/bitcoin-association-switzerland"
                className="text-[#c75b4a] hover:underline"
              >
                clicking here
              </Link>
              .
            </p>
          </div>
        </div>
      </main>
      <FooterSimple />
    </>
  );
}
