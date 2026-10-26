import type { Metadata } from "next";
import { FaGithub } from "react-icons/fa6";
import { LuArrowUpRight, LuCode } from "react-icons/lu";
import FeaturedProject from "@/components/projects/FeaturedProject";
import ContactCTA from "@/components/contact/ContactCTA";
import Reveal from "@/components/ui/Reveal";
import { Container, Eyebrow } from "@/components/ui/primitives";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies: OneFeeOKR, a multi-tenant OKR SaaS built solo, and Stackly, an agency platform with a GrapesJS page and funnel builder, AI generation and CRM reporting.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <section className="pb-8 pt-16 md:pt-24">
        <Container>
          <Eyebrow>Work</Eyebrow>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Case studies from real products
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted text-pretty">
            What each product does, what I built, and the engineering decisions behind it, with screenshots and interface illustrations.
          </p>
        </Container>
      </section>

      <section className="py-12 md:py-16">
        <Container>
          <div className="space-y-20 md:space-y-28">
            {projects.map((project, i) => (
              <Reveal key={project.slug}>
                <FeaturedProject project={project} flip={i % 2 === 1} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="grid gap-4 md:grid-cols-2">
            <a
              href={site.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-line bg-surface/60 p-6 transition hover:border-line-strong"
            >
              <LuCode className="size-5 text-accent" aria-hidden />
              <h2 className="mt-4 flex items-center gap-1.5 font-semibold">
                This portfolio <LuArrowUpRight className="size-4 text-faint transition group-hover:text-ink" />
              </h2>
              <p className="mt-2 text-sm text-muted">
                Next.js 16, React 19, Tailwind CSS v4 and TypeScript. Static, typed content, light and dark themes,
                and structured data for search. The source is open.
              </p>
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-line bg-surface/60 p-6 transition hover:border-line-strong"
            >
              <FaGithub className="size-5 text-accent" aria-hidden />
              <h2 className="mt-4 flex items-center gap-1.5 font-semibold">
                More on GitHub <LuArrowUpRight className="size-4 text-faint transition group-hover:text-ink" />
              </h2>
              <p className="mt-2 text-sm text-muted">
                Earlier side projects and experiments with React, Next.js, Redux and GraphQL.
              </p>
            </a>
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
