import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer>
      {/* Logo Section - White Background */}
      <div className="bg-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1486226923132-GES7LLNU167XSPW77W83/image-asset.png"
            alt="Bitcoin Association Switzerland"
            width={200}
            height={220}
            className="h-auto"
          />
        </div>
      </div>

      {/* Dark Footer Section */}
      <div className="bg-[#1a1a1a] py-8 md:py-10">
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
                  <path d="M6.98 13.74c-.15.27-.37.5-.67.67-.29.18-.6.27-.93.27-.45 0-.82-.13-1.1-.4-.28-.26-.42-.6-.42-.99 0-.18.03-.37.09-.55.06-.18.15-.37.27-.55.17-.26.4-.49.67-.67.28-.18.6-.27.94-.27.34 0 .63.09.87.26.23.17.35.4.35.68 0 .19-.03.39-.1.58-.07.2-.17.41-.3.62l.33.35zm4.55-.77c-.2.37-.47.69-.79.94-.33.26-.69.45-1.08.58-.39.13-.79.19-1.19.19-.33 0-.62-.06-.87-.17-.25-.11-.44-.27-.57-.47-.13-.2-.19-.43-.19-.69 0-.16.02-.33.06-.52.04-.19.1-.42.19-.68l.72-2.23c.06-.19.1-.35.12-.48.02-.13.03-.24.03-.33 0-.15-.04-.26-.13-.33-.09-.07-.22-.11-.41-.11-.23 0-.48.08-.75.24-.27.16-.52.39-.75.69-.23.3-.43.66-.59 1.07-.16.41-.28.87-.35 1.36l-.54 2.52H3.16l1.36-6.35h1.29l-.27 1.08c.27-.37.56-.65.87-.85.31-.2.63-.35.95-.45.33-.1.65-.15.97-.15.42 0 .74.1.97.31.23.21.34.5.34.87 0 .14-.02.31-.05.51-.03.2-.09.45-.18.75l-.78 2.4c-.05.17-.09.31-.11.42-.02.11-.03.21-.03.28 0 .13.04.23.11.3.07.07.18.1.32.1.22 0 .45-.08.69-.25.24-.17.46-.41.66-.71l.32.28zm5.26 0c-.2.37-.47.69-.79.94-.33.26-.69.45-1.08.58-.39.13-.79.19-1.19.19-.33 0-.62-.06-.87-.17-.25-.11-.44-.27-.57-.47-.13-.2-.19-.43-.19-.69 0-.16.02-.33.06-.52.04-.19.1-.42.19-.68l.72-2.23c.06-.19.1-.35.12-.48.02-.13.03-.24.03-.33 0-.15-.04-.26-.13-.33-.09-.07-.22-.11-.41-.11-.23 0-.48.08-.75.24-.27.16-.52.39-.75.69-.23.3-.43.66-.59 1.07-.16.41-.28.87-.35 1.36l-.54 2.52H8.42l1.36-6.35h1.29l-.27 1.08c.27-.37.56-.65.87-.85.31-.2.63-.35.95-.45.33-.1.65-.15.97-.15.42 0 .74.1.97.31.23.21.34.5.34.87 0 .14-.02.31-.05.51-.03.2-.09.45-.18.75l-.78 2.4c-.05.17-.09.31-.11.42-.02.11-.03.21-.03.28 0 .13.04.23.11.3.07.07.18.1.32.1.22 0 .45-.08.69-.25.24-.17.46-.41.66-.71l.32.28zm4.76-2.99c-.11.24-.25.55-.42.92-.17.37-.37.74-.59 1.11-.22.37-.46.7-.72.99-.26.29-.53.52-.81.69-.28.17-.57.26-.85.26-.28 0-.51-.08-.7-.23-.19-.16-.28-.37-.28-.64 0-.12.01-.26.04-.43.03-.16.08-.37.15-.62l.59-2.08c.06-.21.1-.37.12-.49.02-.12.03-.21.03-.28 0-.12-.04-.22-.11-.28-.07-.07-.18-.1-.32-.1-.14 0-.3.04-.47.13-.17.08-.35.22-.53.4-.18.19-.37.43-.55.72-.19.3-.37.65-.54 1.06l-.66 2.7h-1.29l1.36-6.35h1.23l-.45 1.56c.24-.5.52-.91.84-1.2.33-.3.67-.51 1.02-.64.35-.13.7-.2 1.03-.2.38 0 .68.1.89.3.21.2.32.48.32.83 0 .17-.02.37-.07.6-.05.22-.13.52-.24.88l-.48 1.56c-.05.17-.09.31-.11.42-.02.11-.03.2-.03.27 0 .12.04.22.12.29.08.07.18.11.32.11.17 0 .37-.1.58-.29.21-.19.43-.48.65-.86l.41.38z" />
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

          {/* Legal Links Row */}
          <div className="flex justify-center items-center gap-4 text-xs">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <span className="text-gray-600">|</span>
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
  );
}
