import type { Metadata } from "next";
import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import PageSidebar, { type SidebarItem } from "@/components/PageSidebar";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Bitcoin Association Switzerland, including press inquiries.",
};

const sidebarLinks: SidebarItem[] = [
  { label: "About", href: "/about-1" },
  { label: "Board", href: "/board" },
  { label: "Finances", href: "/finances" },
  { label: "Statutes", href: "/statutes" },
  { label: "Media Kit", href: "/media-kit" },
  { label: "Contact", href: "/contact-1", active: true },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <PageSidebar title="About" items={sidebarLinks} />

            {/* Main Content */}
            <div className="flex-1 max-w-2xl">
              {/* Contact Us Header */}
              <h1 className="text-3xl md:text-4xl font-serif text-[#8b7355] mb-6 italic">
                Contact Us
              </h1>

              {/* Press Inquiries */}
              <p className="text-[#8b7355] mb-4 font-serif text-lg">
                Press Inquiries:{" "}
                <a
                  href="mailto:info@bitcoinassociation.ch"
                  className="text-[#4a7c9b] hover:underline"
                >
                  info@bitcoinassociation.ch
                </a>
              </p>

              {/* Description Text */}
              <p className="text-[#8b7355] mb-4 font-serif text-lg">
                If you&apos;d like to get in touch with us please use the form below.
              </p>

              <p className="text-[#8b7355] mb-4 font-serif text-lg">
                We are not interested in your ICO. We also don&apos;t organize events
                for ICOs.
              </p>

              <p className="text-[#8b7355] mb-8 font-serif text-lg">
                We don&apos;t want to advertise anything on our website, blog or
                YouTube channel.
              </p>

              {/* Form Section */}
              <div className="mt-8">
                <h3 className="text-sm font-semibold tracking-wider text-[#1a1a1a] mb-6 uppercase">
                  Please complete the form below
                </h3>

                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </main>

      <FooterSimple />
    </>
  );
}
