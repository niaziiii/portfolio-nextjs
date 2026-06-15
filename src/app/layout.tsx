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
  title: "Muhabat Khan – MERN Stack Developer",
  description:
    "MERN Stack Developer with 3+ years of experience building scalable web applications. Proficient in React, Next.js, TypeScript, Node.js, and cloud deployment.",
  icons: {
    icon: ["/fav/favicon.ico"],
    apple: ["/fav/apple-touch-icon.png"],
    shortcut: ["/fav/apple-touch-icon.png"],
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
          backgroundImage: `url(../bg.jpg)`,
          backgroundColor: "black",
        }}
      >
        {children}
      </body>
    </html>
  );
}
