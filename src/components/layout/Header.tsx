"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LuDownload, LuMenu, LuX } from "react-icons/lu";
import { nav, site } from "@/data/site";
import ThemeToggle from "./ThemeToggle";
import SocialLinks from "./SocialLinks";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors duration-300 ${
        scrolled || open ? "border-line bg-canvas/80 backdrop-blur-xl" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="group flex items-center gap-2.5" aria-label={`${site.name}, home`}>
          <span className="flex size-8 items-center justify-center rounded-lg bg-ink font-mono text-xs font-bold text-canvas transition group-hover:rotate-[-6deg]">
            {site.initials}
          </span>
          <span className="text-sm font-semibold tracking-tight">{site.shortName}</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition ${
                isActive(item.href) ? "bg-surface-2 text-ink" : "text-muted hover:text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <a
            href={site.resumes.fullStack}
            target="_blank"
            rel="noopener noreferrer"
            className="mr-1 hidden items-center gap-1.5 rounded-full border border-line-strong px-3.5 py-1.5 text-sm font-medium transition hover:border-ink/40 sm:inline-flex"
          >
            <LuDownload className="size-3.5" />
            Résumé
          </a>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex size-9 items-center justify-center rounded-full text-muted transition hover:bg-surface-2 hover:text-ink md:hidden"
          >
            {open ? <LuX className="size-5" /> : <LuMenu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div id="mobile-menu" className="h-[calc(100dvh-4rem)] border-t border-line bg-canvas md:hidden">
          <nav aria-label="Mobile" className="mx-auto flex max-w-6xl flex-col px-5 py-6">
            {[{ label: "Home", href: "/" }, ...nav].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`border-b border-line py-4 text-2xl font-semibold tracking-tight ${
                  (item.href === "/" ? pathname === "/" : isActive(item.href)) ? "text-ink" : "text-muted"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={site.resumes.fullStack}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-canvas"
            >
              <LuDownload className="size-4" />
              Download résumé
            </a>
            <SocialLinks className="mt-6 justify-center" />
          </nav>
        </div>
      ) : null}
    </header>
  );
}
