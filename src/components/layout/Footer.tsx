import Link from "next/link";
import { nav, site } from "@/data/site";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold">{site.name}</p>
          <p className="mt-1 text-sm text-faint">
            {site.role} · {site.location} ·{" "}
            <a href={site.repo} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:text-ink hover:underline">
              Built with Next.js & Tailwind CSS
            </a>
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>
        <SocialLinks className="-ml-2 md:ml-0" />
      </div>
    </footer>
  );
}
