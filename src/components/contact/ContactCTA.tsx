import { FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { LuMail } from "react-icons/lu";
import { site } from "@/data/site";
import { ButtonLink, Container, StatusDot } from "@/components/ui/primitives";
import CopyEmail from "@/components/ui/CopyEmail";

export default function ContactCTA() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-line bg-surface px-6 py-12 text-center sm:px-12 md:py-16">
          <div aria-hidden className="bg-grid absolute inset-0 opacity-70" />
          <div
            aria-hidden
            className="absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl"
          />
          <div className="relative">
            <p className="inline-flex items-center gap-2 text-sm font-medium text-muted">
              <StatusDot /> {site.availability}
            </p>
            <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
              Have a role or a product that needs shipping?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted text-pretty">
              I&apos;m looking for a full-time full-stack or frontend role, remote or with relocation. Email is the
              fastest way to reach me; I reply within a day.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <ButtonLink href={`mailto:${site.email}?subject=Hello%20Muhabat`}>
                <LuMail className="size-4" /> Email me
              </ButtonLink>
              <ButtonLink href={site.linkedin} variant="secondary" external>
                <FaLinkedin className="size-4" /> LinkedIn
              </ButtonLink>
              <ButtonLink href={site.whatsapp} variant="secondary" external>
                <FaWhatsapp className="size-4" /> WhatsApp
              </ButtonLink>
            </div>
            <div className="mt-6 flex justify-center">
              <CopyEmail email={site.email} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
