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

const siteUrl = "https://niaziontop.vercel.app";
const siteTitle = "Muhabat Khan – MERN Stack Developer";
const siteDescription =
  "MERN Stack Developer with 3+ years of experience building scalable web applications. Proficient in React, Next.js, TypeScript, Node.js, and cloud deployment.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  icons: {
    icon: ["/fav/favicon.ico"],
    apple: ["/fav/apple-touch-icon.png"],
    shortcut: ["/fav/apple-touch-icon.png"],
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Muhabat Khan Niazi",
    title: siteTitle,
    description: siteDescription,
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Muhabat Khan Niazi — Frontend / MERN Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          backgroundImage: `url(/bg.jpg)`,
          backgroundColor: "black",
        }}
      >
        {children}
      </body>
    </html>
  );
}
