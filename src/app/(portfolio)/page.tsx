import Link from "next/link";
import { LuArrowRight, LuGauge, LuShieldCheck, LuWorkflow } from "react-icons/lu";
import Hero from "@/components/home/Hero";
import FeaturedProject from "@/components/projects/FeaturedProject";
import ExperienceList from "@/components/experience/ExperienceList";
import SkillsGrid from "@/components/skills/SkillsGrid";
import ContactCTA from "@/components/contact/ContactCTA";
import Reveal from "@/components/ui/Reveal";
import { Container, SectionHeading } from "@/components/ui/primitives";
import { projects } from "@/data/projects";

const principles = [
  {
    icon: LuWorkflow,
    title: "Own the whole feature",
    body: "From the table and its access rules to the API, the UI and the release, so nothing gets lost between hand-offs.",
  },
  {
    icon: LuShieldCheck,
    title: "Put rules where they can't be skipped",
    body: "Authorization, plan limits and billing state live in the database and typed boundaries, not scattered through UI code.",
  },
  {
    icon: LuGauge,
    title: "Make it fast, then make it feel fast",
    body: "Indexes and lean queries first; optimistic updates, skeletons and real-time sync on top.",
  },
];

function MoreLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted transition hover:text-ink">
      {children} <LuArrowRight className="size-4" />
    </Link>
  );
}

export default function Home() {
  return (
    <>
      <Hero />

      <section id="work" className="py-16 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Selected work"
            title="Products I've built recently"
            description="Two real products: one I built alone from scratch, one I build with a team for a US company."
            action={<MoreLink href="/projects">All work</MoreLink>}
          />
          <div className="space-y-20 md:space-y-28">
            {projects.map((project, i) => (
              <Reveal key={project.slug}>
                <FeaturedProject project={project} flip={i % 2 === 1} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="experience" className="py-16 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Experience"
            title="5+ years building for the web"
            action={<MoreLink href="/experience">Full experience</MoreLink>}
          />
          <Reveal>
            <ExperienceList compact />
          </Reveal>
        </Container>
      </section>

      <section id="how-i-work" className="py-16 md:py-24">
        <Container>
          <SectionHeading eyebrow="How I work" title="Principles I bring to a team" />
          <div className="grid gap-4 md:grid-cols-3">
            {principles.map(({ icon: Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-line bg-surface/60 p-6">
                  <span className="inline-flex size-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="mt-4 font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="skills" className="py-16 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Toolbox"
            title="The stack I ship with"
            action={<MoreLink href="/about">More about me</MoreLink>}
          />
          <Reveal>
            <SkillsGrid />
          </Reveal>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
