import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import data from "@/data/news.json";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const firstArticle = data[0];


export const metadata: Metadata = {
  title: {
    default: "The Daily — A fresh perspective",
    template: "%s | The Daily",
  },

  description:
    "A little curiosity goes a long way. Explore stories about design, technology, culture, and the world around us.",

  openGraph: {
    type: "website",
    siteName: "The Daily",
    title: "The Daily — A fresh perspective",
    description:
      "A little curiosity goes a long way. Explore stories about design, technology, culture, and the world around us.",
    images: firstArticle
      ? [
          {
            url: firstArticle.image,
            alt: firstArticle.imageAlt,
          },
        ]
      : [],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
