import Image from "next/image";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import { experience } from "@/data/experience";
import { getProject } from "@/data/projects";
import { Chip } from "@/components/ui/primitives";
import Logo from "@/components/ui/Logo";

export default function ExperienceList({ compact = false }: { compact?: boolean }) {
  return (
    <ol className="relative space-y-4">
      {experience.map((role) => {
        const project = role.project ? getProject(role.project.href.split("/").pop() ?? "") : undefined;
        return (
          <li
            key={`${role.company}-${role.start}`}
            className="group grid gap-4 rounded-2xl border border-transparent p-5 transition hover:border-line hover:bg-surface/60 sm:grid-cols-[10rem_1fr] sm:gap-8 sm:p-6"
          >
            <div className="flex items-center gap-3 sm:sticky sm:top-24 sm:flex-col sm:items-start sm:gap-4 sm:self-start">
              {role.logo ? (
                <Logo src={role.logo} alt={`${role.company} logo`} className="size-11 sm:order-2 sm:size-14" />
              ) : null}
              <div className="sm:order-1 sm:pt-1">
                <p className="font-mono text-xs uppercase tracking-wider text-faint">
                  {role.start} — {role.end}
                </p>
                {role.end === "Present" ? (
                  <span className="mt-1.5 inline-flex items-center rounded-full bg-success/15 px-2 py-0.5 text-[10px] font-semibold text-success">
                    Now
                  </span>
                ) : null}
              </div>
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
                  <li
                    key={h}
                    className="relative pl-4 text-sm leading-relaxed text-muted before:absolute before:left-0 before:top-[0.6em] before:size-1.5 before:rounded-full before:bg-line-strong"
                  >
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap items-center gap-1.5">
                {role.stack.map((s) => (
                  <Chip key={s}>{s}</Chip>
                ))}
              </div>
              {role.project && project ? (
                <Link
                  href={role.project.href}
                  className="group/project mt-5 flex items-center gap-4 rounded-xl border border-line bg-canvas/50 p-3 pr-4 transition hover:border-line-strong sm:max-w-lg"
                >
                  {project.cover ? (
                    <span className="relative w-28 shrink-0 overflow-hidden rounded-lg border border-line sm:w-40">
                      <Image
                        src={project.cover.src}
                        alt=""
                        width={project.cover.width}
                        height={project.cover.height}
                        sizes="160px"
                        className="aspect-[16/10] w-full object-cover object-top transition duration-500 group-hover/project:scale-105"
                      />
                    </span>
                  ) : null}
                  <span className="min-w-0">
                    <span className="flex items-center gap-2 text-sm font-semibold">
                      {project.logo ? <Logo src={project.logo} alt="" className="size-5 rounded-md" /> : null}
                      {project.name}
                    </span>
                    <span className="mt-1 line-clamp-2 block text-xs leading-relaxed text-muted">{project.tagline}</span>
                    <span className="mt-1.5 inline-flex items-center gap-1 text-xs font-semibold text-ink group-hover/project:text-accent">
                      {role.project.label} <LuArrowRight className="size-3.5" />
                    </span>
                  </span>
                </Link>
              ) : null}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
