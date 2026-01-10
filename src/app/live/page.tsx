import Header from "@/components/Header";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Live - Bitcoin Association Switzerland",
  description:
    "Watch live streams and recordings from Bitcoin Association Switzerland events and General Assemblies.",
};

export default function LivePage() {
  return (
    <>
      <Header />
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

      {/* Footer */}
      <footer>
        {/* Social Icons Section - Dark Gray Background */}
        <div className="bg-[#2a2a2a] py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center items-center gap-3">
              {/* Meetup Icon */}
              <a
                href="https://www.meetup.com/Bitcoin-Meetup-Switzerland"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Meetup"
                className="w-10 h-10 rounded-full bg-gray-500 hover:bg-gray-400 flex items-center justify-center transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-white"
                >
                  <path d="M6.3 12.6c-.1.2-.2.4-.4.6-.2.2-.4.3-.7.3-.4 0-.7-.2-.9-.5-.1-.2-.2-.4-.2-.7 0-.4.1-.8.3-1.2.3-.4.6-.6 1-.6.3 0 .5.1.7.3.2.2.3.4.3.7 0 .4-.1.8-.3 1.2l.2-.1zm3.2-1.3c-.1.3-.3.7-.6 1.2-.4.6-.8.9-1.2.9-.2 0-.4-.1-.6-.2-.1-.2-.2-.4-.2-.6 0-.1 0-.3.1-.5l.7-2.7c0-.2.1-.3.1-.5 0-.2-.1-.3-.3-.3-.2 0-.3.1-.5.2-.2.2-.3.4-.5.7-.2.3-.3.6-.4.9-.1.3-.2.7-.3 1.2l-.3 1.4h-1l1-4.4h1.1l-.2.7c.3-.3.5-.5.7-.6.2-.1.4-.2.6-.2.3 0 .5.1.6.2.1.2.2.4.2.7 0 .2 0 .4-.1.6l-.3 1.3zm3.8.2c-.1.2-.2.4-.4.6-.2.2-.4.3-.7.3-.4 0-.7-.2-.9-.5-.1-.2-.2-.4-.2-.7 0-.4.1-.8.3-1.2.3-.4.6-.6 1-.6.3 0 .5.1.7.3.2.2.3.4.3.7 0 .4-.1.8-.3 1.2l.2-.1zm4.4-2.4c-.1.2-.2.6-.4 1.2l-.6 1.8c-.2.5-.4.8-.6 1.1-.3.2-.6.3-1 .3-.3 0-.5-.1-.7-.2-.2-.2-.3-.4-.3-.7 0-.1 0-.3 0-.4l.5-1.8c.1-.3.1-.5.1-.6 0-.2-.1-.3-.3-.3-.2 0-.4.1-.6.4-.2.2-.4.6-.5 1-.2.4-.3.9-.4 1.5l-.3 1.3h-1.1l.7-3.1c.1-.6.2-1 .2-1.2 0-.2-.1-.3-.2-.3-.2 0-.4.1-.6.4-.2.3-.4.6-.5 1l-.1.1h-1c.1-.4.3-.8.5-1.1.2-.4.5-.7.9-.9.3-.2.7-.3 1-.3.3 0 .5.1.6.2.2.2.2.4.2.7v.2c.3-.4.6-.6.9-.8.3-.2.6-.3 1-.3.3 0 .6.1.8.3.2.2.3.4.3.8 0 .2 0 .4-.1.6z" />
                </svg>
              </a>

              {/* YouTube Icon */}
              <a
                href="https://www.youtube.com/channel/UC5nVX9C2vM1dFg0BvatKEOg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube - Bitcoin Lectures"
                className="w-10 h-10 rounded-full bg-gray-500 hover:bg-gray-400 flex items-center justify-center transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-white"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* X (Twitter) Icon */}
              <a
                href="https://x.com/bitcoin_ch"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-10 h-10 rounded-full bg-gray-500 hover:bg-gray-400 flex items-center justify-center transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-white"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Legal Links Section - Very Dark Background */}
        <div className="bg-[#1a1a1a] py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center items-center gap-6 text-xs tracking-wider">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors uppercase"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors uppercase"
              >
                Terms and Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
