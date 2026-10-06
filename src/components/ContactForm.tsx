"use client";

import { Button } from "@/components/ui/button";

const contactEmail = "info@bitcoinassociation.ch";
const fallbackMailtoHref = `mailto:${contactEmail}?subject=BAS%20contact%20request`;

function getFormValue(formData: FormData, name: string): string {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim() : "";
}

function buildMailtoHref(formData: FormData): string {
  const firstName = getFormValue(formData, "firstName");
  const lastName = getFormValue(formData, "lastName");
  const email = getFormValue(formData, "email");
  const subject = getFormValue(formData, "subject") || "BAS contact request";
  const message = getFormValue(formData, "message");
  const body = [
    "Submitted via the BAS contact form",
    "",
    `Name: ${firstName} ${lastName}`,
    `Email: ${email}`,
    "",
    message,
  ].join("\n");

  return `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/** Opens the visitor's mail client with the form contents (no server involved). */
export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    window.location.href = buildMailtoHref(new FormData(e.currentTarget));
  };

  return (
      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
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

        <p className="text-[#8b7355] font-serif text-sm">
          You can also email{" "}
          <a
            href={fallbackMailtoHref}
            className="text-[#4a7c9b] hover:underline"
          >
            {contactEmail}
          </a>
          .
        </p>
      </form>
  );
}
