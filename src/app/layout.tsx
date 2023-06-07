import "./globals.css";
import { Inter } from "next/font/google";
import BackgroundAnimation from "../components/BackgroundAnimation/index";

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
      <body className={`${inter.className}`}>
        <BackgroundAnimation />
        <main className="bg-backgroundMain min-h-screen">{children}</main>
      </body>
    </html>
  );
}
