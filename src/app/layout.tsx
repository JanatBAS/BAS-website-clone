import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SITE_OPEN_GRAPH, SITE_URL } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Only a few pages use the monospace font, so it is not preloaded on every page.
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Bitcoin Association Switzerland",
    // Child pages set a plain title; the site name is appended here.
    template: "%s - Bitcoin Association Switzerland",
  },
  description: "The Bitcoin Association Switzerland forms an active community of enthusiasts with regular events, try to resolve open legal questions, and educate the public by providing a contact point for media inquiries.",
  keywords: ["Bitcoin", "Switzerland", "Cryptocurrency", "Association", "Community", "Meetup"],
  authors: [{ name: "Bitcoin Association Switzerland" }],
  // Only the shared fields: og/twitter title and description fall back to each
  // page's own, and og:url is left to the pages that set it (home, blog posts).
  openGraph: SITE_OPEN_GRAPH,
  twitter: {
    card: "summary",
    images: [SITE_OPEN_GRAPH.images[0].url],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
