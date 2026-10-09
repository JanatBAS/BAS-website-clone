import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Remote Voting",
  description:
    "Remote voting link for the Bitcoin Association Switzerland General Assembly on 7 December 2024.",
};

export default function RemoteVotingPage() {
  return (
    <main className="pt-20">
      {/* Content Section */}
      <div className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-light text-gray-700 mb-8">
            Welcome to the BAS Remote Voting Page
          </h1>

          <p className="text-gray-500 italic text-base md:text-lg mb-6 leading-relaxed">
            Next event will be the General Assembly the 7th of December 2024 16:30 to 18:00 and a link to the remote voting will be active underneath here no later than the beginning time of the event.
          </p>

          <a
            href="https://app.sli.do/event/8DA4NJZwVqHM3B91UDHLAu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand hover:text-brand-dark text-base md:text-lg transition-colors inline-block mb-6"
          >
            https://app.sli.do/event/8DA4NJZwVqHM3B91UDHLAu
          </a>

          <p className="text-gray-500 italic text-base md:text-lg leading-relaxed">
            If a link isn&apos;t available at the beginning of the event please refresh your browser.
          </p>
        </div>
      </div>
    </main>
  );
}
