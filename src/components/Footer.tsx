import Image from "next/image";
import Link from "next/link";
import SocialIconsBar from "@/components/SocialIconsBar";

export default function Footer() {
  return (
    <footer>
      {/* Logo Section - White Background */}
      <div className="bg-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <Image
            src="/images/branding/logo-footer.png"
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
          {/* Social Icons Row */}
          <div className="mb-6">
            <SocialIconsBar />
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
