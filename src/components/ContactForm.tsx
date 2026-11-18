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
        <fieldset className="min-w-0">
          <legend className="block text-sm text-ink mb-1">
            Name{" "}
            <span className="text-gray-400 text-xs">(required)</span>
          </legend>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-first-name" className="block text-xs text-gray-500 mb-1">
                First Name
              </label>
              <input
                id="contact-first-name"
                type="text"
                name="firstName"
                autoComplete="given-name"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-none focus:outline-none focus:border-gray-700 text-sm bg-white"
              />
            </div>
            <div>
              <label htmlFor="contact-last-name" className="block text-xs text-gray-500 mb-1">
                Last Name
              </label>
              <input
                id="contact-last-name"
                type="text"
                name="lastName"
                autoComplete="family-name"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-none focus:outline-none focus:border-gray-700 text-sm bg-white"
              />
            </div>
          </div>
        </fieldset>

        {/* Email Field */}
        <div>
          <label htmlFor="contact-email" className="block text-sm text-ink mb-1">
            Email Address{" "}
            <span className="text-gray-400 text-xs">(required)</span>
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            autoComplete="email"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-none focus:outline-none focus:border-gray-700 text-sm bg-white"
          />
        </div>

        {/* Subject Field */}
        <div>
          <label htmlFor="contact-subject" className="block text-sm text-ink mb-1">
            Subject{" "}
            <span className="text-gray-400 text-xs">(required)</span>
          </label>
          <input
            id="contact-subject"
            type="text"
            name="subject"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-none focus:outline-none focus:border-gray-700 text-sm bg-white"
          />
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="contact-message" className="block text-sm text-ink mb-1">
            Message{" "}
            <span className="text-gray-400 text-xs">(required)</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            className="w-full px-3 py-2 border border-gray-300 rounded-none focus:outline-none focus:border-gray-700 text-sm bg-white resize-y"
          />
        </div>

        {/* Submit Button */}
        <div>
          <Button
            type="submit"
            className="bg-ink text-white px-8 py-2 text-sm tracking-widest uppercase hover:bg-[#333] rounded-none transition-colors"
          >
            Submit
          </Button>
        </div>

        <p className="text-taupe font-serif text-sm">
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
