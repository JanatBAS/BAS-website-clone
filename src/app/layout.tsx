import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bitcoin Association Switzerland",
  description: "The Bitcoin Association Switzerland forms an active community of enthusiasts with regular events, try to resolve open legal questions, and educate the public by providing a contact point for media inquiries.",
  keywords: ["Bitcoin", "Switzerland", "Cryptocurrency", "Association", "Community", "Meetup"],
  authors: [{ name: "Bitcoin Association Switzerland" }],
  openGraph: {
    title: "Bitcoin Association Switzerland",
    description: "The Bitcoin Association Switzerland forms an active community of enthusiasts with regular events, try to resolve open legal questions, and educate the public by providing a contact point for media inquiries.",
    url: "https://www.bitcoinassociation.ch",
    siteName: "Bitcoin Association Switzerland",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/branding/logo-with-name.png",
        width: 227,
        height: 237,
        alt: "Bitcoin Association Switzerland Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Bitcoin Association Switzerland",
    description: "The Bitcoin Association Switzerland forms an active community of enthusiasts with regular events.",
    images: ["/images/branding/logo-with-name.png"],
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
