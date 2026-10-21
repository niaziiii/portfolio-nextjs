import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import { experience } from "@/data/experience";
import { Chip } from "@/components/ui/primitives";

export default function ExperienceList({ compact = false }: { compact?: boolean }) {
  return (
    <ol className="relative space-y-4">
      {experience.map((role) => (
        <li
          key={`${role.company}-${role.start}`}
          className="group grid gap-3 rounded-2xl border border-transparent p-5 transition hover:border-line hover:bg-surface/60 sm:grid-cols-[10rem_1fr] sm:gap-8 sm:p-6"
        >
          <div className="font-mono text-xs uppercase tracking-wider text-faint sm:pt-1">
            {role.start} — {role.end}
            {role.end === "Present" ? (
              <span className="ml-2 inline-flex items-center rounded-full bg-success/15 px-1.5 py-0.5 text-[10px] font-semibold text-success normal-case tracking-normal">
                Now
              </span>
            ) : null}
          </div>
          <div>
            <h3 className="text-lg font-semibold leading-snug">
              {role.title} <span className="text-faint">·</span>{" "}
              <span className="text-accent">{role.company}</span>
            </h3>
            <p className="mt-1 text-sm text-faint">
              {role.location} · {role.type}
            </p>
            <p className="mt-3 text-muted text-pretty">{role.summary}</p>
            <ul className="mt-3 space-y-2">
              {(compact ? role.highlights.slice(0, 2) : role.highlights).map((h) => (
                <li key={h} className="relative pl-4 text-sm leading-relaxed text-muted before:absolute before:left-0 before:top-[0.6em] before:size-1.5 before:rounded-full before:bg-line-strong">
                  {h}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap items-center gap-1.5">
              {role.stack.map((s) => (
                <Chip key={s}>{s}</Chip>
              ))}
              {role.project ? (
                <Link
                  href={role.project.href}
                  className="ml-1 inline-flex items-center gap-1 text-xs font-semibold text-ink hover:text-accent"
                >
                  {role.project.label} <LuArrowRight className="size-3.5" />
                </Link>
              ) : null}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
