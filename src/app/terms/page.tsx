import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions - Bitcoin Association Switzerland",
  description: "Terms and Conditions for the Bitcoin Association Switzerland website.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 bg-white min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-normal text-center text-gray-800 mb-4 font-serif">
            Terms and Conditions
          </h1>

          {/* Effective Date */}
          <p className="text-center text-gray-700 text-sm mb-12">
            Effective Date: 11-11-2024
          </p>

          {/* Content */}
          <div className="prose prose-sm max-w-none text-gray-600">
            {/* 1. Introduction */}
            <section className="mb-8">
              <h2 className="text-sm font-semibold text-gray-800 mb-3">
                1. Introduction
              </h2>
              <p className="text-sm leading-relaxed text-gray-700">
                Welcome to the website of Bitcoin Association Switzerland (
                <a
                  href="https://www.bitcoinassociation.ch/"
                  className="text-[#5c8a8a] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.bitcoinassociation.ch/
                </a>
                ). By accessing or using this website, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please refrain from using our website.
              </p>
            </section>

            {/* 2. Website Usage */}
            <section className="mb-8">
              <h2 className="text-sm font-semibold text-gray-800 mb-3">
                2. Website Usage
              </h2>
              <ol className="list-decimal list-inside space-y-4 text-sm">
                <li className="text-gray-700">
                  <span className="font-semibold text-gray-800">Eligibility</span>: This website is intended for users aged 18 and above. By accessing our website, you confirm that you meet this requirement.
                </li>
                <li className="text-gray-700">
                  <span className="font-semibold text-gray-800">Permitted Use</span>: You agree to use this website only for lawful purposes and in compliance with all applicable laws and regulations.
                </li>
                <li className="text-gray-700">
                  <span className="font-semibold text-gray-800">Prohibited Activities</span>: You may not:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Interfere with the website&apos;s functionality.</li>
                    <li>Use the website for fraudulent or malicious purposes.</li>
                    <li>Copy, distribute, or modify any part of the website without prior consent.</li>
                  </ul>
                </li>
              </ol>
            </section>

            {/* 3. Intellectual Property */}
            <section className="mb-8">
              <h2 className="text-sm font-semibold text-gray-800 mb-3">
                3. Intellectual Property
              </h2>
              <ol className="list-decimal list-inside space-y-4 text-sm text-gray-700">
                <li>
                  All content on this website, including but not limited to text, images, graphics, logos, and designs, is the property of Bitcoin Association Switzerland or its licensors and is protected by copyright, trademark, and other intellectual property laws.
                </li>
                <li>
                  You may not reproduce, distribute, or otherwise exploit any content without prior written permission.
                </li>
              </ol>
            </section>

            {/* 4. Disclaimer of Liability */}
            <section className="mb-8">
              <h2 className="text-sm font-semibold text-gray-800 mb-3">
                4. Disclaimer of Liability
              </h2>
              <ol className="list-decimal list-inside space-y-4 text-sm text-gray-700">
                <li>
                  This website is provided on an &quot;as-is&quot; and &quot;as-available&quot; basis. While we strive to ensure the accuracy of the information provided, we do not guarantee its completeness, accuracy, or reliability.
                </li>
                <li>
                  Bitcoin Association Switzerland is not liable for any damages arising from the use or inability to use this website, including but not limited to direct, indirect, or consequential damages.
                </li>
              </ol>
            </section>

            {/* 5. Third-Party Links */}
            <section className="mb-8">
              <h2 className="text-sm font-semibold text-gray-800 mb-3">
                5. Third-Party Links
              </h2>
              <ol className="list-decimal list-inside space-y-4 text-sm text-gray-700">
                <li>
                  This website may contain links to third-party websites or resources. These links are provided for informational purposes only.
                </li>
                <li>
                  We are not responsible for the content, accuracy, or policies of these third-party websites and do not endorse them.
                </li>
              </ol>
            </section>

            {/* 6. Privacy */}
            <section className="mb-8">
              <h2 className="text-sm font-semibold text-gray-800 mb-3">
                6. Privacy
              </h2>
              <p className="text-sm leading-relaxed text-gray-700">
                Your use of this website is also governed by our{" "}
                <Link
                  href="/privacy"
                  className="text-[#5c8a8a] hover:underline"
                >
                  Privacy Policy.
                </Link>{" "}
                By using this website, you consent to the collection and use of your personal data as described in our Privacy Policy.
              </p>
            </section>

            {/* 7. Modifications to the Terms */}
            <section className="mb-8">
              <h2 className="text-sm font-semibold text-gray-800 mb-3">
                7. Modifications to the Terms
              </h2>
              <p className="text-sm leading-relaxed text-gray-700">
                Bitcoin Association Switzerland reserves the right to modify these Terms and Conditions at any time. Any changes will be posted on this page with an updated &quot;Effective Date.&quot; Your continued use of the website constitutes your acceptance of the revised terms.
              </p>
            </section>

            {/* 8. Governing Law and Jurisdiction */}
            <section className="mb-8">
              <h2 className="text-sm font-semibold text-gray-800 mb-3">
                8. Governing Law and Jurisdiction
              </h2>
              <p className="text-sm leading-relaxed text-gray-700">
                These Terms and Conditions are governed by the laws of Switzerland. Any disputes arising from or in connection with the use of this website shall be subject to the exclusive jurisdiction of the courts of Zug.
              </p>
            </section>

            {/* 9. Contact Us */}
            <section className="mb-8">
              <h2 className="text-sm font-semibold text-gray-800 mb-3">
                9. Contact Us
              </h2>
              <p className="text-sm leading-relaxed text-gray-700 mb-4">
                If you have any questions or concerns about these Terms and Conditions, please contact us here.
              </p>
              <div className="text-sm text-gray-700">
                <p className="font-semibold text-gray-800 mb-2">Bitcoin Association Switzerland</p>
                <p>Email:</p>
                <p>Address:</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
