"use client";

import { useState } from "react";
import { debug } from "@/lib/debug";
import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import PageSidebar, { type SidebarItem } from "@/components/PageSidebar";
import { Button } from "@/components/ui/button";

const sidebarLinks: SidebarItem[] = [
  { label: "About", href: "/about-1" },
  { label: "Board", href: "/board" },
  { label: "Finances", href: "/finances" },
  { label: "Statutes", href: "/statutes" },
  { label: "Media Kit", href: "/media-kit" },
  { label: "Contact", href: "/contact-1", active: true },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    debug("Form submitted:", formData);
  };

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
                  href="mailto:phil@bitcoinassociation.ch"
                  className="text-[#4a7c9b] hover:underline"
                >
                  phil@bitcoinassociation.ch
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

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Fields */}
                  <div>
                    <label className="block text-sm text-[#1a1a1a] mb-1">
                      Name{" "}
                      <span className="text-gray-400 text-xs">(required)</span>
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-gray-500 mb-1">
                          First Name
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-none focus:outline-none focus:border-gray-400 text-sm bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-500 mb-1">
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-none focus:outline-none focus:border-gray-400 text-sm bg-white"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-sm text-[#1a1a1a] mb-1">
                      Email Address{" "}
                      <span className="text-gray-400 text-xs">(required)</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-none focus:outline-none focus:border-gray-400 text-sm bg-white"
                    />
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label className="block text-sm text-[#1a1a1a] mb-1">
                      Subject{" "}
                      <span className="text-gray-400 text-xs">(required)</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-none focus:outline-none focus:border-gray-400 text-sm bg-white"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-sm text-[#1a1a1a] mb-1">
                      Message{" "}
                      <span className="text-gray-400 text-xs">(required)</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-3 py-2 border border-gray-300 rounded-none focus:outline-none focus:border-gray-400 text-sm bg-white resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <div>
                    <Button
                      type="submit"
                      className="bg-[#1a1a1a] text-white px-8 py-2 text-sm tracking-widest uppercase hover:bg-[#333] rounded-none transition-colors"
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <FooterSimple />
    </>
  );
}
