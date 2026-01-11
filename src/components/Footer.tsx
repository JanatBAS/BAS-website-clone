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
              className="rounded-full w-10 h-10 bg-[#6b6b6b] hover:bg-[#7b7b7b] border-0"
            >
              <a
                href="https://www.meetup.com/Bitcoin-Meetup-Switzerland"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Meetup"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                  className="w-5 h-5"
                >
                  <path
                    fill="white"
                    d="M30.8,33.4c0-6.3,1.9-11.9,3.5-15.3c0.5-1.1,0.9-1.4,1.9-1.4c1.3,0,2.9,0.2,4.1,0.4 c1.1,0.2,1.5,1.6,1.7,2.5c1.2,4.5,4.7,18.7,5.5,22.4c0.2,0.8,0.6,2,0.1,2.3c-0.4,0.2-2.5,0.9-3.9,1c-0.6,0.1-1.1-0.6-1.4-1.5 c-1.5-4.6-3.5-11.8-5.2-16.6c0,3.7-0.3,10.8-0.4,12c-0.1,1.7-0.4,3.7-1.8,3.9c-1.1,0.2-2.4,0.4-4,0.4c-1.3,0-1.8-0.9-2.4-1.8 c-1-1.4-3.1-4.8-4.1-6.9c0.3,2.3,0.7,4.7,0.9,5.8c0.1,0.8,0,1.5-0.6,1.9c-1,0.7-3.2,1.4-4.1,1.4c-0.8,0-1.5-0.8-1.6-1.6 c-0.7-3.4-1.2-8-1.1-11.1c0-2.8,0-5.9,0.2-8.3c0-0.7,0.3-1.1,0.9-1.4c1.2-0.5,3-0.6,4.7-0.3c0.8,0.1,1,0.8,1.4,1.4 C26.9,25.5,28.9,29.5,30.8,33.4z"
                  />
                </svg>
              </a>
            </Button>

            {/* YouTube Icon */}
            <Button
              asChild
              variant="secondary"
              size="icon"
              className="rounded-full w-10 h-10 bg-[#6b6b6b] hover:bg-[#7b7b7b] border-0"
            >
              <a
                href="https://www.youtube.com/channel/UC5nVX9C2vM1dFg0BvatKEOg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube - Bitcoin Lectures"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                  className="w-5 h-5"
                >
                  <path
                    fill="white"
                    d="M46.7,26c0,0-0.3-2.1-1.2-3c-1.1-1.2-2.4-1.2-3-1.3C38.3,21.4,32,21.4,32,21.4h0 c0,0-6.3,0-10.5,0.3c-0.6,0.1-1.9,0.1-3,1.3c-0.9,0.9-1.2,3-1.2,3S17,28.4,17,30.9v2.3c0,2.4,0.3,4.9,0.3,4.9s0.3,2.1,1.2,3 c1.1,1.2,2.6,1.2,3.3,1.3c2.4,0.2,10.2,0.3,10.2,0.3s6.3,0,10.5-0.3c0.6-0.1,1.9-0.1,3-1.3c0.9-0.9,1.2-3,1.2-3s0.3-2.4,0.3-4.9 v-2.3C47,28.4,46.7,26,46.7,26z M28.9,35.9l0-8.4l8.1,4.2L28.9,35.9z"
                  />
                </svg>
              </a>
            </Button>

            {/* X (Twitter) Icon */}
            <Button
              asChild
              variant="secondary"
              size="icon"
              className="rounded-full w-10 h-10 bg-[#6b6b6b] hover:bg-[#7b7b7b] border-0"
            >
              <a
                href="https://x.com/bitcoin_ch"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                  className="w-4 h-4"
                >
                  <path
                    fill="white"
                    d="M34.426 29.9327L43.9189 18.5H41.6694L33.4267 28.4268L26.8432 18.5H19.25L29.2055 33.5111L19.25 45.5H21.4997L30.2042 35.0169L37.1568 45.5H44.75L34.426 29.9327ZM22.3102 20.2546H25.7656L41.6704 43.8252H38.2151L22.3102 20.2546Z"
                  />
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
