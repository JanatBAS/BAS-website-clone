"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";

export default function MembershipFormPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    txId: "",
    telegram: "",
    comments: "",
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
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          {/* Form Section */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Fields */}
            <div>
              <label className="block text-sm text-[#1a1a1a] mb-1">
                Name <span className="text-gray-400 text-xs">(required)</span>
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
                Email <span className="text-gray-400 text-xs">(required)</span>
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

            {/* Bitcoin Transaction ID Field */}
            <div>
              <label className="block text-sm text-[#1a1a1a] mb-1">
                Bitcoin Transaction ID (TxID){" "}
                <span className="text-gray-400 text-xs">(required)</span>
              </label>
              <input
                type="text"
                name="txId"
                value={formData.txId}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-none focus:outline-none focus:border-gray-400 text-sm bg-white"
              />
            </div>

            {/* Telegram Username Field */}
            <div>
              <label className="block text-sm text-[#1a1a1a] mb-1">
                Telegram Username (To be added to our BAS chat)
              </label>
              <input
                type="text"
                name="telegram"
                value={formData.telegram}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-none focus:outline-none focus:border-gray-400 text-sm bg-white"
              />
            </div>

            {/* Comments Field */}
            <div>
              <label className="block text-sm text-[#1a1a1a] mb-1">
                Comments
              </label>
              <textarea
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                rows={4}
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
