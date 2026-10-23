import type { Metadata } from "next";
import { LuAward, LuDownload, LuGraduationCap, LuLanguages } from "react-icons/lu";
import ExperienceList from "@/components/experience/ExperienceList";
import ContactCTA from "@/components/contact/ContactCTA";
import Logo from "@/components/ui/Logo";
import { ButtonLink, Container, Eyebrow } from "@/components/ui/primitives";
import { certifications, education, languages } from "@/data/experience";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Full Stack Developer at Adabra (Dubai, remote), previously Software Engineer at Smart Engineering & Design Solutions and Software Engineer Intern at Pixako Technologies.",
  alternates: { canonical: "/experience" },
};

export default function ExperiencePage() {
  return (
    <>
      <section className="pb-8 pt-16 md:pt-24">
        <Container>
          <Eyebrow>Experience</Eyebrow>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            3.5+ years shipping production web apps
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted text-pretty">
            Full-stack work across React, Next.js, Node.js, MongoDB and PostgreSQL, from internal retail systems to
            agency SaaS used by teams in the US.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={site.resumes.fullStack} external>
              <LuDownload className="size-4" /> Full-stack résumé
            </ButtonLink>
            <ButtonLink href={site.resumes.frontend} variant="secondary" external>
              Frontend résumé
            </ButtonLink>
            <ButtonLink href={site.resumes.backend} variant="secondary" external>
              Backend résumé
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="py-8">
        <Container>
          <ExperienceList />
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-line bg-surface/60 p-6">
              {education.logo ? (
                <Logo src={education.logo} alt={`${education.school} logo`} className="size-12" />
              ) : (
                <LuGraduationCap className="size-5 text-accent" aria-hidden />
              )}
              <h2 className="mt-4 font-semibold">Education</h2>
              <p className="mt-2 text-sm">{education.degree}</p>
              <p className="text-sm text-muted">{education.school}</p>
              <p className="mt-1 font-mono text-xs text-faint">
                {education.start} — {education.end}
              </p>
              <p className="mt-3 text-sm text-faint">{education.focus}</p>
            </div>
            <div className="rounded-2xl border border-line bg-surface/60 p-6">
              {certifications[0]?.logo ? (
                <Logo src={certifications[0].logo} alt={`${certifications[0].issuer} logo`} className="size-12" />
              ) : (
                <LuAward className="size-5 text-accent" aria-hidden />
              )}
              <h2 className="mt-4 font-semibold">Certification</h2>
              {certifications.map((c) => (
                <div key={c.name} className="mt-2">
                  <p className="text-sm">{c.name}</p>
                  <p className="text-sm text-muted">{c.issuer}</p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-line bg-surface/60 p-6">
              <LuLanguages className="size-5 text-accent" aria-hidden />
              <h2 className="mt-4 font-semibold">Languages</h2>
              <ul className="mt-2 space-y-1 text-sm">
                {languages.map((l) => (
                  <li key={l.name}>
                    {l.name} <span className="text-faint">· {l.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
