import Link from "next/link";
import SocialIconsBar from "@/components/SocialIconsBar";

export default function FooterSimple() {
  return (
    <footer>
      {/* Social Icons Section - Medium Gray Background */}
      <div className="bg-[#4a4a4a] py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SocialIconsBar />
        </div>
      </div>

      {/* Legal Links Section - Darker Gray Background */}
      <div className="bg-[#2a2a2a] py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
  );
}
