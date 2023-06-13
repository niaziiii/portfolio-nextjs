import "./globals.css";
import { Inter } from "next/font/google";
import { NavigationBar, Footer } from "../components";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Muhabat Khan Software Developer",
  description:
    "Hello! I'm a passionate Next.js and React developer. This platform is a reflection of my journey in the world of web development, showcasing my skills, projects, and experiences",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
      </Head>
      <div
        style={{
          backgroundImage: `url(./bg.jpg)`,
          backgroundColor: "black",
        }}
        className={`${inter.className} min-h-screen overflow-x-hidden`}
      >
        <NavigationBar />
        <main className="w-11/12 lg:w-4/5 m-auto">{children}</main>
        <Footer />
      </div>
    </>
  );
}
