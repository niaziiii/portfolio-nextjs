import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
// import bgImage from "@/assets/images/bg.jpg"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhabat Khan Software Developer",
  description:
    "Hello! I'm a passionate Next.js and React developer. This platform is a reflection of my journey in the world of web development, showcasing my skills, projects, and experiences",
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
        <Header />
        <main className="   w-11/12 lg:w-4/5 m-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
