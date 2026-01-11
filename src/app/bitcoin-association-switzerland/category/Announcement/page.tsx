import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import Link from "next/link";

export default function AnnouncementCategoryPage() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-white">
        {/* 404 Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            We couldn&apos;t find the page you were looking for. This is either because:
          </p>

          <ul className="list-disc list-inside text-gray-600 text-base leading-relaxed mb-6 space-y-2">
            <li>
              There is an error in the URL entered into your web browser. Please check the URL and try again.
            </li>
            <li>
              The page you are looking for has been moved or deleted.
            </li>
          </ul>

          <p className="text-gray-600 text-base leading-relaxed">
            You can return to our homepage by{" "}
            <Link href="/" className="text-[#c75b4a] hover:underline">
              clicking here
            </Link>
            , or you can try searching for the content you are seeking by{" "}
            <Link href="/archive" className="text-[#c75b4a] hover:underline">
              clicking here
            </Link>
            .
          </p>
        </div>
      </main>
      <FooterSimple />
    </>
  );
}
