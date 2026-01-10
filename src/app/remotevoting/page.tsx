import Header from "@/components/Header";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function RemoteVotingPage() {
  return (
    <>
      <Header />
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
              className="text-[#c75b4a] hover:text-[#a84a3b] text-base md:text-lg transition-colors inline-block mb-6"
            >
              https://app.sli.do/event/8DA4NJZwVqHM3B91UDHLAu
            </a>

            <p className="text-gray-500 italic text-base md:text-lg leading-relaxed">
              If a link isn&apos;t available at the beginning of the event please refresh your browser.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer>
        {/* Dark Footer Section */}
        <div className="bg-[#2d2d2d] py-8 md:py-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Social Icons Row - Circular buttons */}
            <div className="flex justify-center items-center gap-3 mb-6">
              {/* Meetup Icon */}
              <Button
                asChild
                variant="secondary"
                size="icon"
                className="rounded-full w-10 h-10 bg-gray-500 hover:bg-gray-400"
              >
                <a
                  href="https://www.meetup.com/Bitcoin-Meetup-Switzerland"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Meetup"
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
              </Button>

              {/* YouTube Icon */}
              <Button
                asChild
                variant="secondary"
                size="icon"
                className="rounded-full w-10 h-10 bg-gray-500 hover:bg-gray-400"
              >
                <a
                  href="https://www.youtube.com/channel/UC5nVX9C2vM1dFg0BvatKEOg"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube - Bitcoin Lectures"
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
              </Button>

              {/* X (Twitter) Icon */}
              <Button
                asChild
                variant="secondary"
                size="icon"
                className="rounded-full w-10 h-10 bg-gray-500 hover:bg-gray-400"
              >
                <a
                  href="https://x.com/bitcoin_ch"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
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
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer with Links */}
        <div className="bg-[#1a1a1a] py-8 md:py-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Legal Links Row */}
            <div className="flex justify-center items-center gap-8 text-xs uppercase tracking-wider">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors duration-200"
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
