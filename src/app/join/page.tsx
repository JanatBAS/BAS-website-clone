import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found - Bitcoin Association Switzerland",
  description: "The page you are looking for has been moved or deleted.",
};

export default function JoinPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 bg-white min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 404 Content */}
          <div className="py-12">
            <p className="text-[#9a8a78] text-base mb-6">
              We couldn&apos;t find the page you were looking for. This is either because:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-[#9a8a78] text-base mb-8">
              <li>
                There is an error in the URL entered into your web browser. Please check the URL and try again.
              </li>
              <li>
                The page you are looking for has been moved or deleted.
              </li>
            </ul>

            <p className="text-[#9a8a78] text-base">
              You can return to our homepage by{" "}
              <Link
                href="/"
                className="text-[#9a8a78] hover:text-[#7d6e5f] underline"
              >
                clicking here
              </Link>
              , or you can try searching for the content you are seeking by{" "}
              <Link
                href="/search"
                className="text-[#9a8a78] hover:text-[#7d6e5f] underline"
              >
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
