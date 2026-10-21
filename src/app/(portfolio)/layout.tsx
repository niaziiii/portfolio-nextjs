import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Spotlight from "@/components/ui/Spotlight";

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative isolate min-h-dvh overflow-x-clip">
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-x-0 top-0 -z-10 h-[48rem]" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-16rem] -z-10 h-[32rem] w-[64rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
      />
      <Spotlight />
      <a
        href="#content"
        className="sr-only z-50 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-canvas focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <Header />
      <main id="content">{children}</main>
      <Footer />
    </div>
  );
}
