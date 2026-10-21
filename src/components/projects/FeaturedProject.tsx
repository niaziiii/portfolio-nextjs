import Image from "next/image";
import Link from "next/link";
import { LuArrowRight, LuCheck } from "react-icons/lu";
import type { Project } from "@/data/projects";
import { BrowserFrame, Chip } from "@/components/ui/primitives";
import ProjectLinks from "./ProjectLinks";
import CoverFallback from "./CoverFallback";

export default function FeaturedProject({ project, flip = false }: { project: Project; flip?: boolean }) {
  const href = `/projects/${project.slug}`;
  const host = project.links.find((l) => l.kind === "live" || l.kind === "private")?.href;

  return (
    <article className="group grid items-center gap-8 md:grid-cols-12 md:gap-10">
      <Link
        href={href}
        aria-label={`${project.name} case study`}
        className={`block md:col-span-7 ${flip ? "md:order-2" : ""}`}
      >
        <BrowserFrame url={host?.replace(/^https?:\/\//, "")} className="transition duration-500 group-hover:-translate-y-1">
          {project.cover ? (
            <Image
              src={project.cover.src}
              alt={project.cover.alt}
              width={project.cover.width}
              height={project.cover.height}
              sizes="(min-width: 768px) 640px, 100vw"
              className="h-auto w-full"
            />
          ) : (
            <CoverFallback project={project} />
          )}
        </BrowserFrame>
      </Link>

      <div className={`md:col-span-5 ${flip ? "md:order-1" : ""}`}>
        <p className="font-mono text-xs text-faint">{project.context}</p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
          <Link href={href} className="hover:text-accent">
            {project.name}
          </Link>
        </h3>
        <p className="mt-3 text-muted text-pretty">{project.summary}</p>

        <ul className="mt-5 space-y-2.5">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2.5 text-sm text-muted">
              <LuCheck className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 7).map((s) => (
            <Chip key={s}>{s}</Chip>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-4">
          <Link href={href} className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-accent">
            Read the case study <LuArrowRight className="size-4 transition group-hover:translate-x-0.5" />
          </Link>
          <ProjectLinks links={project.links} skipCase />
        </div>
      </div>
    </article>
  );
}
