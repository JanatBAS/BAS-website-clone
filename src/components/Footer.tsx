import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer>
      {/* Logo Section - White Background */}
      <div className="bg-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1486226923132-GES7LLNU167XSPW77W83/image-asset.png"
            alt="Bitcoin Association Switzerland"
            width={280}
            height={80}
            className="h-auto"
          />
        </div>
      </div>

      {/* Dark Footer Section */}
      <div className="bg-[#1a1a1a] py-8 md:py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Social Icons Row */}
          <div className="flex justify-center items-center space-x-6 mb-6">
            {/* Meetup Icon */}
            <a
              href="https://www.meetup.com/Bitcoin-Meetup-Switzerland"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="Meetup"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M6.98 14.77c-.1.26-.26.6-.53.83-.26.24-.6.35-.98.35-.56 0-.96-.22-1.2-.62-.15-.26-.2-.58-.2-.94 0-.56.15-1.1.44-1.6.33-.57.78-.87 1.35-.87.4 0 .72.13.95.38.24.26.36.6.36 1.02 0 .56-.13 1.1-.38 1.61l.2-.16zm4.3-1.7c-.13.42-.4.97-.8 1.55-.56.8-1.1 1.2-1.64 1.2-.32 0-.57-.1-.76-.32-.2-.22-.3-.48-.3-.8 0-.2.03-.4.08-.6l.9-3.54c.06-.24.1-.44.1-.6 0-.3-.12-.44-.36-.44-.2 0-.42.1-.66.32-.24.22-.46.5-.68.86-.22.36-.4.74-.54 1.14-.14.4-.28.93-.42 1.6l-.44 1.9H4.4l1.36-5.8h1.42l-.22.92c.38-.38.7-.64.97-.8.26-.16.54-.24.82-.24.34 0 .6.1.78.32.18.22.27.52.27.9 0 .22-.03.46-.1.72l-.4 1.7zm4.98.22c-.1.26-.26.6-.53.83-.26.24-.6.35-.98.35-.56 0-.96-.22-1.2-.62-.15-.26-.2-.58-.2-.94 0-.56.15-1.1.44-1.6.33-.57.78-.87 1.35-.87.4 0 .72.13.95.38.24.26.36.6.36 1.02 0 .56-.13 1.1-.38 1.61l.2-.16zm5.86-3.2c-.08.3-.24.82-.48 1.54l-.76 2.34c-.22.64-.5 1.1-.84 1.4-.34.28-.76.42-1.26.42-.4 0-.72-.1-.96-.32-.24-.22-.36-.5-.36-.86 0-.16.02-.34.06-.54l.6-2.36c.1-.38.15-.66.15-.84 0-.3-.12-.44-.36-.44-.24 0-.5.16-.76.48-.26.32-.5.74-.7 1.26-.2.52-.38 1.16-.52 1.94l-.4 1.72h-1.42l.96-4.08c.18-.76.27-1.28.27-1.56 0-.24-.1-.36-.3-.36-.24 0-.5.18-.78.54-.28.36-.52.8-.72 1.34l-.04.12h-1.3c.16-.5.4-1 .72-1.5.32-.5.7-.9 1.14-1.2.44-.3.9-.44 1.38-.44.36 0 .64.1.84.32.2.22.3.52.3.9v.24c.36-.48.74-.84 1.14-1.1.4-.24.82-.36 1.26-.36.44 0 .78.12 1.02.36.24.24.36.58.36 1.02 0 .24-.04.52-.12.84z" />
              </svg>
            </a>

            {/* YouTube Icon */}
            <a
              href="https://www.youtube.com/channel/UC5nVX9C2vM1dFg0BvatKEOg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="YouTube - Bitcoin Lectures"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                <path d="m10 15 5-3-5-3z" />
              </svg>
            </a>

            {/* X (Twitter) Icon */}
            <a
              href="https://x.com/bitcoin_ch"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="X (Twitter)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>

          {/* Legal Links Row */}
          <div className="flex justify-center items-center space-x-4 text-sm">
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
};

export default Footer;
