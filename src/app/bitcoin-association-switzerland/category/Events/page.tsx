import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function EventsCategoryPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Spacer for fixed header */}
        <div className="h-20" />

        {/* 404 Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-gray-600 font-light">
            <p className="text-lg mb-6">
              We couldn&apos;t find the page you were looking for. This is either because:
            </p>

            <ul className="list-disc list-inside space-y-2 mb-8 ml-4">
              <li>
                There is an error in the URL entered into your web browser. Please check the URL and try again.
              </li>
              <li>
                The page you are looking for has been moved or deleted.
              </li>
            </ul>

            <p className="text-lg">
              You can return to our homepage by{" "}
              <Link href="/" className="text-[#c75b4a] hover:underline">
                clicking here
              </Link>
              , or you can try searching for the content you are seeking by{" "}
              <Link href="/most-recent-events" className="text-[#c75b4a] hover:underline">
                clicking here
              </Link>
              .
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
