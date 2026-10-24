import type { Metadata } from "next";
import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import { LuArrowUpRight, LuBookOpen, LuChefHat, LuMountain } from "react-icons/lu";
import GithubActivity from "@/components/about/GithubActivity";
import SkillsGrid from "@/components/skills/SkillsGrid";
import ContactCTA from "@/components/contact/ContactCTA";
import { Container, Eyebrow, SectionHeading } from "@/components/ui/primitives";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name}: a full-stack engineer from Multan, Pakistan who builds SaaS products end to end.`,
  alternates: { canonical: "/about" },
};

const hobbies = [
  { icon: LuBookOpen, label: "Documentaries" },
  { icon: LuChefHat, label: "Cooking" },
  { icon: LuMountain, label: "Hiking" },
];

export default function AboutPage() {
  return (
    <>
      <section className="pb-12 pt-16 md:pt-24">
        <Container className="grid items-start gap-12 md:grid-cols-12">
          <div className="md:col-span-8">
            <Eyebrow>About</Eyebrow>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              Hi, I&apos;m Muhabat. I like owning a product from the first table to the last pixel.
            </h1>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted">
              <p className="text-pretty">
                I&apos;m a full-stack engineer from Multan, Pakistan with 5+ years of experience, freelance since 2020 and full-time since 2023. I
                started on frontend work, building component libraries and server-rendered pages with React and
                Next.js, and grew into owning whole features: data models, APIs, background jobs and the interfaces on
                top.
              </p>
              <p className="text-pretty">
                From 2024 to 2026 I worked remotely for Adabra (Dubai) as Senior Frontend Engineer on Stackly, an
                all-in-one platform for agencies, where I built the GrapesJS page and funnel builder, its AI
                generation, CRM reporting and the client workspace. In 2026 I designed and launched{" "}
                <a href="/projects/onefeeokr" className="font-medium text-ink underline decoration-line-strong underline-offset-4 hover:decoration-accent">
                  OneFeeOKR
                </a>{" "}
                on my own: a multi-tenant OKR platform on Next.js and Supabase with row-level security, database-enforced
                billing, scheduled jobs and nine integrations.
              </p>
              <p className="text-pretty">
                I care about software that is easy to change: typed boundaries, rules enforced where they can&apos;t be
                bypassed, and interfaces that feel fast. I work well async, write things down, and I&apos;m comfortable
                overlapping with European and US hours.
              </p>
            </div>
          </div>
          <div className="md:col-span-4">
            <div className="overflow-hidden rounded-3xl border border-line bg-surface">
              <Image src="/me.jpg" alt={site.name} width={320} height={320} className="aspect-square w-full object-cover" />
              <div className="space-y-1 p-5 text-sm">
                <p className="font-semibold">{site.name}</p>
                <p className="text-muted">{site.role}</p>
                <p className="text-faint">
                  {site.location} · {site.timezone}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12 md:py-16">
        <Container>
          <SectionHeading eyebrow="Toolbox" title="Skills and tools" />
          <SkillsGrid />
        </Container>
      </section>

      <section className="py-12 md:py-16">
        <Container>
          <SectionHeading
            eyebrow="Open source"
            title="GitHub activity"
            action={
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted hover:text-ink"
              >
                <FaGithub className="size-4" /> @{site.githubUser} <LuArrowUpRight className="size-4" />
              </a>
            }
          />
          <div className="rounded-2xl border border-line bg-surface/60 p-6">
            <GithubActivity username={site.githubUser} />
          </div>
        </Container>
      </section>

      <section className="py-12 md:py-16">
        <Container>
          <SectionHeading eyebrow="Away from the keyboard" title="Beyond code" />
          <ul className="grid gap-4 sm:grid-cols-3">
            {hobbies.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3 rounded-2xl border border-line bg-surface/60 p-5">
                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <Icon className="size-5" aria-hidden />
                </span>
                <span className="font-medium">{label}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
