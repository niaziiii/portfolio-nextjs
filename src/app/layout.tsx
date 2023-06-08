import "./globals.css";
import { Inter } from "next/font/google";
import { BackgroundCoverImage, NavigationBar, Footer } from "../components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio NextJs",
  description:
    "Hello! I'm a passionate Next.js and React developer. This platform is a reflection of my journey in the world of web development, showcasing my skills, projects, and experiences",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-main-2 min-h-screen overflow-x-hidden`}
      >
        <BackgroundCoverImage />
        <NavigationBar />
        <main className="   w-11/12 lg:w-4/5 m-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
