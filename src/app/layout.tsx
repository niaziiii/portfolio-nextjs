import "./globals.css";
import { Inter } from "next/font/google";
import { NavigationBar, Footer } from "../components";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Muhabat Khan Software Developer",
  description:
    "Hello! I'm a passionate Next.js and React developer. This platform is a reflection of my journey in the world of web development, showcasing my skills, projects, and experiences",
  icons: {
    icon: ["/fav/favicon.ico"],
    apple: ["/fav/apple-touch-icon.png"],
    shortcut: ["/fav/apple-touch-icon.png"],
  },
  manifest: "/fav/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          backgroundImage: `url(./bg.jpg)`,
          backgroundColor: "black",
        }}
        className={`${inter.className} min-h-screen overflow-x-hidden`}
      >
        <NavigationBar />
        <main className="   w-11/12 lg:w-4/5 m-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
