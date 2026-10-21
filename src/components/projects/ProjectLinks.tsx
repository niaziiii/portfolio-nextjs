import Link from "next/link";
import { LuArrowUpRight, LuEye, LuFileText, LuGlobe, LuLock } from "react-icons/lu";
import { FaGithub } from "react-icons/fa6";
import type { ProjectLink } from "@/data/projects";

const icons = { live: LuGlobe, preview: LuEye, case: LuFileText, code: FaGithub, private: LuLock };

export default function ProjectLinks({ links, skipCase = false }: { links: ProjectLink[]; skipCase?: boolean }) {
  return (
    <ul className="flex flex-wrap items-center gap-2">
      {links
        .filter((l) => !(skipCase && l.kind === "case"))
        .map((link) => {
          const Icon = icons[link.kind];
          const body = (
            <>
              <Icon className="size-3.5" aria-hidden />
              <span>{link.label}</span>
              {link.note ? <span className="text-faint">· {link.note}</span> : null}
              {link.href && link.kind !== "case" ? <LuArrowUpRight className="size-3.5 text-faint" aria-hidden /> : null}
            </>
          );
          const cls =
            "inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-xs font-medium text-muted transition";
          if (!link.href) {
            return (
              <li key={link.label}>
                <span className={`${cls} border-dashed`}>{body}</span>
              </li>
            );
          }
          if (link.href.startsWith("/")) {
            return (
              <li key={link.label}>
                <Link href={link.href} className={`${cls} hover:border-line-strong hover:text-ink`}>
                  {body}
                </Link>
              </li>
            );
          }
          return (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${cls} hover:border-line-strong hover:text-ink`}
              >
                {body}
              </a>
            </li>
          );
        })}
    </ul>
  );
}
