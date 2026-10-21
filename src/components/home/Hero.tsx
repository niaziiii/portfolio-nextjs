import Image from "next/image";
import { LuArrowRight, LuDownload, LuMapPin } from "react-icons/lu";
import { site } from "@/data/site";
import { heroStack } from "@/data/skills";
import { ButtonLink, Container, StatusDot } from "@/components/ui/primitives";
import SocialLinks from "@/components/layout/SocialLinks";

export default function Hero() {
  return (
    <section className="relative pb-6 pt-14 sm:pt-20 md:pb-10 md:pt-24">
      <Container>
        <a
          href="/contact"
          className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/70 px-3.5 py-1.5 text-xs font-medium text-muted backdrop-blur transition hover:border-line-strong hover:text-ink"
        >
          <StatusDot />
          {site.availability}
        </a>

        <div className="mt-8 flex items-center gap-4">
          <Image
            src="/me.jpg"
            alt={site.name}
            width={64}
            height={64}
            priority
            className="size-14 rounded-full object-cover ring-2 ring-line sm:size-16"
          />
          <div>
            <p className="text-base font-semibold sm:text-lg">{site.name}</p>
            <p className="flex flex-col gap-x-1.5 text-sm text-faint sm:flex-row sm:flex-wrap sm:items-center">
              <span className="whitespace-nowrap">{site.role}</span>
              <span aria-hidden className="hidden sm:inline">
                ·
              </span>
              <span className="inline-flex items-center gap-1 whitespace-nowrap">
                <LuMapPin className="size-3.5" aria-hidden />
                {site.location}
              </span>
            </p>
          </div>
        </div>

        <h1 className="mt-8 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-6xl md:text-[4.25rem]">
          I build SaaS products{" "}
          <span className="bg-gradient-to-r from-accent via-sky-400 to-teal-400 bg-clip-text text-transparent">
            end to end
          </span>
          , from the database to the last pixel.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted text-pretty">
          3.5+ years shipping React, Next.js, Node.js and TypeScript. I build Stackly&apos;s page and funnel
          builder (with AI generation) for a US-based company, and I designed and launched{" "}
          <a href="/projects/onefeeokr" className="font-medium text-ink underline decoration-line-strong underline-offset-4 hover:decoration-accent">
            OneFeeOKR
          </a>{" "}
          solo: a multi-tenant OKR platform with database-enforced billing and nine integrations.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <ButtonLink href="/projects">
            View my work <LuArrowRight className="size-4" />
          </ButtonLink>
          <ButtonLink href={site.resumes.fullStack} variant="secondary" external>
            <LuDownload className="size-4" /> Download résumé
          </ButtonLink>
          <SocialLinks className="ml-1" include={["GitHub", "LinkedIn", "Email", "WhatsApp"]} />
        </div>

        <div className="mt-14 border-t border-line pt-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">Daily stack</p>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
            {heroStack.map(({ name, icon: Icon, color }) => (
              <li key={name} className="flex items-center gap-2 text-sm text-muted">
                <Icon className="size-[18px]" style={{ color }} aria-hidden />
                {name}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
