import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Bitcoin Association Switzerland",
  description:
    "Privacy Policy for the Bitcoin Association Switzerland website. Learn how we collect, use, and protect your personal data.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 bg-white min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-normal text-gray-900 mb-3">
              Privacy Policy
            </h1>
            <p className="text-[#9a8a78] text-sm">Effective Date: 11-11-2024</p>
          </div>

          {/* Content */}
          <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed">
            {/* Section 1 */}
            <section className="mb-8">
              <h2 className="text-sm font-semibold text-gray-900 mb-3">
                1. Introduction
              </h2>
              <p className="text-sm leading-relaxed mb-4">
                Welcome to the website of Bitcoin Association Switzerland (
                <Link
                  href="https://www.bitcoinassociation.ch/"
                  className="text-[#9a8a78] hover:text-[#7d6e5f] underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.bitcoinassociation.ch/
                </Link>
                ). We are committed to protecting your privacy and handling your
                personal data transparently and securely. This Privacy Policy
                outlines how we collect, use, and protect your information.
              </p>
            </section>

            {/* Section 2 */}
            <section className="mb-8">
              <h2 className="text-sm font-semibold text-gray-900 mb-3">
                2. Information We Collect
              </h2>
              <p className="text-sm leading-relaxed mb-3">
                We may collect the following types of personal data:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>
                  <strong className="text-gray-900">
                    Contact Information
                  </strong>
                  : Name, email address, phone number, or mailing address (if
                  provided through forms or subscriptions).
                </li>
                <li>
                  <strong className="text-gray-900">
                    Website Usage Information
                  </strong>
                  : IP addresses, browser type, device information, and browsing
                  activity on our website (via cookies or analytics tools).
                </li>
                <li>
                  <strong className="text-gray-900">Communications</strong>: Any
                  correspondence via email or contact forms.
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="mb-8">
              <h2 className="text-sm font-semibold text-gray-900 mb-3">
                3. How We Use Your Data
              </h2>
              <p className="text-sm leading-relaxed mb-3">
                We use your data for the following purposes:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>To provide and improve our website and services.</li>
                <li>
                  To communicate with you, including sending newsletters or
                  event updates (if you have subscribed).
                </li>
                <li>To comply with legal obligations.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="mb-8">
              <h2 className="text-sm font-semibold text-gray-900 mb-3">
                4. Legal Basis for Processing
              </h2>
              <p className="text-sm leading-relaxed mb-3">
                We process personal data based on the following legal grounds:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>
                  Your consent (e.g., when subscribing to a newsletter).
                </li>
                <li>
                  Legitimate interests (e.g., website analytics to improve user
                  experience).
                </li>
                <li>Compliance with legal obligations.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="mb-8">
              <h2 className="text-sm font-semibold text-gray-900 mb-3">
                5. Cookies and Tracking
              </h2>
              <p className="text-sm leading-relaxed mb-3">
                We use cookies to enhance your browsing experience. These may
                include:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>
                  <strong className="text-gray-900">Essential Cookies</strong>:
                  Required for the website to function.
                </li>
                <li>
                  <strong className="text-gray-900">Analytical Cookies</strong>:
                  To understand how visitors use the site (e.g., via Google
                  Analytics).
                </li>
                <li>
                  <strong className="text-gray-900">Marketing Cookies</strong>:
                  To provide personalized content and advertisements.
                </li>
              </ul>
              <p className="text-sm leading-relaxed mt-4">
                <strong className="text-gray-900">Managing Cookies</strong>: You
                can manage cookie preferences through your browser settings. For
                more details, visit our{" "}
                <Link
                  href="/privacy"
                  className="text-[#9a8a78] hover:text-[#7d6e5f] underline"
                >
                  Cookie Policy
                </Link>
                .
              </p>
            </section>

            {/* Section 6 */}
            <section className="mb-8">
              <h2 className="text-sm font-semibold text-gray-900 mb-3">
                6. Data Sharing and Transfers
              </h2>
              <p className="text-sm leading-relaxed mb-3">
                We do not sell or share your personal data with third parties
                except:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>
                  To trusted service providers (e.g., hosting providers or email
                  marketing tools).
                </li>
                <li>To comply with legal obligations.</li>
              </ul>
              <p className="text-sm leading-relaxed mt-4">
                If we transfer your data outside the European Economic Area
                (EEA), we ensure it is protected by appropriate safeguards.
              </p>
            </section>

            {/* Section 7 */}
            <section className="mb-8">
              <h2 className="text-sm font-semibold text-gray-900 mb-3">
                7. Your Rights
              </h2>
              <p className="text-sm leading-relaxed mb-3">
                Under GDPR, you have the following rights:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>
                  <strong className="text-gray-900">Access</strong>: Request a
                  copy of your personal data.
                </li>
                <li>
                  <strong className="text-gray-900">Rectification</strong>:
                  Correct any inaccuracies in your data.
                </li>
                <li>
                  <strong className="text-gray-900">Erasure</strong>: Request
                  that we delete your data.
                </li>
                <li>
                  <strong className="text-gray-900">Restriction</strong>: Limit
                  how your data is processed.
                </li>
                <li>
                  <strong className="text-gray-900">Objection</strong>: Object
                  to data processing for specific purposes.
                </li>
                <li>
                  <strong className="text-gray-900">Data Portability</strong>:
                  Receive your data in a structured, machine-readable format.
                </li>
              </ul>
              <p className="text-sm leading-relaxed mt-4">
                To exercise your rights, contact us{" "}
                <Link
                  href="/contact-1"
                  className="text-[#9a8a78] hover:text-[#7d6e5f] underline"
                >
                  here
                </Link>
                .
              </p>
            </section>

            {/* Section 8 */}
            <section className="mb-8">
              <h2 className="text-sm font-semibold text-gray-900 mb-3">
                8. Data Retention
              </h2>
              <p className="text-sm leading-relaxed">
                We retain your personal data only as long as necessary for the
                purposes outlined in this policy or as required by law.
              </p>
            </section>

            {/* Section 9 */}
            <section className="mb-8">
              <h2 className="text-sm font-semibold text-gray-900 mb-3">
                9. Security
              </h2>
              <p className="text-sm leading-relaxed">
                We implement appropriate technical and organizational measures
                to protect your personal data from unauthorized access,
                alteration, or loss.
              </p>
            </section>

            {/* Section 10 */}
            <section className="mb-8">
              <h2 className="text-sm font-semibold text-gray-900 mb-3">
                10. Contact Us
              </h2>
              <p className="text-sm leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or your
                data, please contact us{" "}
                <Link
                  href="/contact-1"
                  className="text-[#9a8a78] hover:text-[#7d6e5f] underline"
                >
                  here
                </Link>
              </p>
              <div className="text-sm">
                <p className="font-semibold text-gray-900 mb-2">
                  Bitcoin Association Switzerland
                </p>
                <p className="text-gray-600">Email:</p>
                <p className="text-gray-600">Address:</p>
              </div>
            </section>

            {/* Section 11 */}
            <section className="mb-8">
              <h2 className="text-sm font-semibold text-gray-900 mb-3">
                11. Changes to This Policy
              </h2>
              <p className="text-sm leading-relaxed">
                We reserve the right to update this Privacy Policy at any time.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
