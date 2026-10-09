import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Live",
  description:
    "Watch live streams and recordings from Bitcoin Association Switzerland events and General Assemblies.",
};

export default function LivePage() {
  return (
    <main className="pt-24 pb-16 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-serif text-[#9a8a78] mb-8">
            Welcome to the BAS Live Stream Page
          </h1>

          {/* Event Information */}
          <p className="text-[#9a8a78] font-serif text-base leading-relaxed mb-6">
            Next event will be the General Assembly the 7th of December 2024
            16:30 to 18:00 and a link to the livestream will be active
            underneath here no later than the beginning time of the event.
          </p>

          {/* Recording Section */}
          <p className="text-[#9a8a78] font-serif text-base mb-2">
            Recording from General Assembly the 7th of December 2024
          </p>
          <a
            href="https://www.youtube.com/watch?v=0NKzd7OK0aE"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4a7c9b] hover:text-[#3a6c8b] font-serif text-base mb-6 inline-block"
          >
            https://www.youtube.com/watch?v=0NKzd7OK0aE
          </a>

          {/* Refresh Note */}
          <p className="text-[#9a8a78] font-serif text-base mt-6">
            If a link isn&apos;t available at the beginning of the event
            please refresh your browser.
          </p>
        </div>
      </div>
    </main>
  );
}
