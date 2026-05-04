import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GMeBay — GameStop Is Buying eBay",
  description:
    "Ryan Cohen's GameStop is making a $56 billion unsolicited offer to acquire eBay. Track the deal in real time.",
  openGraph: {
    title: "GMeBay — GameStop Is Buying eBay",
    description:
      "Ryan Cohen's GameStop is making a $56 billion unsolicited offer to acquire eBay. Track the deal in real time.",
    url: "https://gmebay.com",
    siteName: "GMeBay",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GMeBay — GameStop Is Buying eBay",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GMeBay — GameStop Is Buying eBay",
    description:
      "Ryan Cohen's GameStop is making a $56 billion unsolicited offer to acquire eBay.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
