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
    <html lang="en">
      <Head>
        <meta
          property="og:image"
          content="https://lh3.googleusercontent.com/a-/AD_cMMS_9EcMPb9JnC6qxUDEcka65Vo1T-LtqNDpPGw1sg=s64-p-k-rw-no"
        />
      </Head>
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
