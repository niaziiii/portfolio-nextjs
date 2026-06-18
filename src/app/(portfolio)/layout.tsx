import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="w-11/12 xl:w-4/5 m-auto">{children}</main>
      <Footer />
    </>
  );
}
