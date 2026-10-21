import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LuArrowLeft, LuArrowRight, LuCheck } from "react-icons/lu";
import ContactCTA from "@/components/contact/ContactCTA";
import FeatureIcon from "@/components/projects/FeatureIcon";
import Gallery from "@/components/projects/Gallery";
import ProjectLinks from "@/components/projects/ProjectLinks";
import CoverFallback from "@/components/projects/CoverFallback";
import Reveal from "@/components/ui/Reveal";
import Logo from "@/components/ui/Logo";
import { BrowserFrame, Chip, Container, Eyebrow } from "@/components/ui/primitives";
import { getProject, projects } from "@/data/projects";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.name} case study`,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.name}: ${project.tagline}`,
      description: project.summary,
      images: project.cover ? [{ url: project.cover.src, width: project.cover.width, height: project.cover.height }] : undefined,
    },
  };
}

function Heading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-8">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
    </div>
  );
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];
  const host = project.links.find((l) => l.kind === "live" || l.kind === "private")?.href;

  const meta: { label: string; value: string; logo?: string }[] = [
    { label: "Role", value: project.role },
    { label: "Timeline", value: project.timeline },
    project.company
      ? { label: "Company", value: project.company, logo: project.companyLogo }
      : { label: "Type", value: "Independent product" },
  ];

  return (
    <>
      <article>
        <header className="pb-10 pt-12 md:pt-16">
          <Container>
            <Link href="/projects" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-ink">
              <LuArrowLeft className="size-4" /> All work
            </Link>
            <p className="mt-8 font-mono text-xs text-faint">{project.context}</p>
            <div className="mt-3 flex items-center gap-4">
              {project.logo ? (
                <Logo
                  src={project.logo}
                  alt={`${project.name} logo`}
                  bare={project.logo.endsWith(".svg")}
                  className="size-12 rounded-xl sm:size-16 sm:rounded-2xl"
                />
              ) : null}
              <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">{project.name}</h1>
            </div>
            <p className="mt-4 max-w-3xl text-xl text-muted text-pretty">{project.tagline}</p>
            <div className="mt-6">
              <ProjectLinks links={project.links} skipCase />
            </div>

            <dl className="mt-10 grid gap-6 border-y border-line py-6 sm:grid-cols-3">
              {meta.map((m) => (
                <div key={m.label}>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">{m.label}</dt>
                  <dd className="mt-1.5 flex items-center gap-2 text-sm">
                    {m.logo ? <Logo src={m.logo} alt="" className="size-8 rounded-lg" /> : null}
                    {m.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Container>
        </header>

        <Container>
          <BrowserFrame url={host?.replace(/^https?:\/\//, "")}>
            {project.cover ? (
              <Image
                src={project.cover.src}
                alt={project.cover.alt}
                width={project.cover.width}
                height={project.cover.height}
                priority
                sizes="(min-width: 1152px) 1088px, 100vw"
                className="h-auto w-full"
              />
            ) : (
              <CoverFallback project={project} />
            )}
          </BrowserFrame>

          <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {project.stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-line bg-surface/60 p-5">
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block text-3xl font-semibold tracking-tight">{s.value}</span>
                  <span className="mt-1 block text-sm text-faint">{s.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </Container>

        <section className="py-16 md:py-20">
          <Container className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-7">
              <Heading eyebrow="Overview" title="The problem" />
              <div className="space-y-4 text-lg leading-relaxed text-muted">
                {project.problem.map((p) => (
                  <p key={p} className="text-pretty">
                    {p}
                  </p>
                ))}
              </div>
            </div>
            <aside className="md:col-span-5">
              <div className="rounded-2xl border border-line bg-surface/60 p-6">
                <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">Stack</h2>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack.map((s) => (
                    <Chip key={s}>{s}</Chip>
                  ))}
                </div>
              </div>
            </aside>
          </Container>
        </section>

        <section className="py-12 md:py-16">
          <Container>
            <Heading eyebrow="What I built" title="Highlights" />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {project.built.map((b, i) => (
                <Reveal key={b.title} delay={(i % 3) * 0.05}>
                  <div className="h-full rounded-2xl border border-line bg-surface/60 p-6">
                    <span className="inline-flex size-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                      <FeatureIcon name={b.icon} className="size-5" />
                    </span>
                    <h3 className="mt-4 font-semibold">{b.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{b.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-12 md:py-16">
          <Container className="max-w-4xl">
            <Heading eyebrow="Engineering" title="Decisions that shaped it" />
            <ul className="space-y-4">
              {project.decisions.map((d) => (
                <li key={d} className="flex gap-3 text-muted">
                  <LuCheck className="mt-1 size-5 shrink-0 text-accent" aria-hidden />
                  <span className="leading-relaxed text-pretty">{d}</span>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        {project.gallery.length ? (
          <section className="py-12 md:py-16">
            <Container>
              <Heading eyebrow="Screens" title="A closer look" />
              <Gallery shots={project.gallery} title={project.name} />
            </Container>
          </section>
        ) : null}

        {project.mobile ? (
          <section className="py-12 md:py-16">
            <Container className="grid items-center gap-10 md:grid-cols-2">
              <div>
                <Heading eyebrow="Responsive" title="Built for every screen" />
                <p className="text-lg leading-relaxed text-muted text-pretty">
                  The whole workspace collapses to a single column with a mobile navigation, so people can check in and
                  review progress from a phone.
                </p>
              </div>
              <div className="mx-auto w-56 overflow-hidden rounded-[2.2rem] border-[6px] border-line-strong bg-surface shadow-2xl sm:w-64">
                <Image
                  src={project.mobile.src}
                  alt={project.mobile.alt}
                  width={project.mobile.width}
                  height={project.mobile.height}
                  sizes="256px"
                  className="h-auto w-full"
                />
              </div>
            </Container>
          </section>
        ) : null}

        {next && next.slug !== project.slug ? (
          <section className="py-12">
            <Container>
              <Link
                href={`/projects/${next.slug}`}
                className="group grid items-center gap-6 overflow-hidden rounded-2xl border border-line bg-surface/60 p-5 transition hover:border-line-strong sm:grid-cols-[1fr_minmax(0,22rem)] sm:p-8"
              >
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">Next case study</p>
                  <div className="mt-3 flex items-center gap-3">
                    {next.logo ? (
                      <Logo src={next.logo} alt="" bare={next.logo.endsWith(".svg")} className="size-10 rounded-xl" />
                    ) : null}
                    <p className="text-2xl font-semibold tracking-tight">{next.name}</p>
                  </div>
                  <p className="mt-2 text-muted text-pretty">{next.tagline}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink group-hover:text-accent">
                    Read the case study
                    <LuArrowRight className="size-4 transition group-hover:translate-x-1" />
                  </span>
                </div>
                {next.cover ? (
                  <div className="overflow-hidden rounded-xl border border-line shadow-[0_18px_40px_-24px_rgb(0_0_0/0.6)]">
                    <Image
                      src={next.cover.src}
                      alt={next.cover.alt}
                      width={next.cover.width}
                      height={next.cover.height}
                      sizes="(min-width: 640px) 352px, 100vw"
                      className="aspect-[16/10] w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                ) : null}
              </Link>
            </Container>
          </section>
        ) : null}
      </article>

      <ContactCTA />
    </>
  );
}
