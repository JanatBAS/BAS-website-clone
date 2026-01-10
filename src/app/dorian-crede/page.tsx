import type { Metadata } from "next";
import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found - Bitcoin Association Switzerland",
  description: "The page you are looking for could not be found.",
};

export default function DorianCredePage() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-3xl font-light text-gray-900 mb-6">
              Page Not Found
            </h1>
            <p className="text-gray-600 mb-4">
              We couldn&apos;t find the page you were looking for. This is either because:
            </p>
            <ul className="text-gray-600 mb-8 list-disc list-inside">
              <li>There is an error in the URL entered into your web browser. Please check the URL and try again.</li>
              <li>The page you are looking for has been moved or deleted.</li>
            </ul>
            <p className="text-gray-600">
              You can return to our homepage by{" "}
              <Link href="/" className="text-[#c75b4a] hover:underline">
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
