import type { Metadata } from "next";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { LuClock, LuDownload, LuMapPin, LuPhone } from "react-icons/lu";
import ContactForm from "@/components/contact/ContactForm";
import CopyEmail from "@/components/ui/CopyEmail";
import { Container, Eyebrow, StatusDot } from "@/components/ui/primitives";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name} about full-time roles or projects. Email ${site.email}.`,
  alternates: { canonical: "/contact" },
};

const channels = [
  { icon: FaLinkedin, label: "LinkedIn", value: "Muhabat Khan Niazi", href: site.linkedin },
  { icon: FaWhatsapp, label: "WhatsApp", value: site.phone, href: site.whatsapp },
  { icon: LuPhone, label: "Phone", value: site.phone, href: site.phoneHref },
  { icon: FaGithub, label: "GitHub", value: `@${site.githubUser}`, href: site.github },
];

export default function ContactPage() {
  return (
    <section className="pb-8 pt-16 md:pt-24">
      <Container className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">Let&apos;s talk</h1>
          <p className="mt-5 text-lg text-muted text-pretty">
            Hiring for a full-stack or frontend role, or need a product built? Send a note. I reply within a day.
          </p>
          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3.5 py-1.5 text-xs font-medium text-muted">
            <StatusDot /> {site.availability}
          </p>

          <div className="mt-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">Email</p>
            <CopyEmail email={site.email} className="mt-2" />
          </div>

          <ul className="mt-8 divide-y divide-line rounded-2xl border border-line bg-surface/60">
            {channels.map(({ icon: Icon, label, value, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("tel:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 px-5 py-4 transition hover:bg-surface-2/60"
                >
                  <Icon className="size-5 text-faint" aria-hidden />
                  <span className="text-sm text-faint">{label}</span>
                  <span className="ml-auto text-sm font-medium">{value}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-6 space-y-2 text-sm text-muted">
            <p className="flex items-center gap-2">
              <LuMapPin className="size-4 text-faint" /> {site.location} · open to remote and relocation
            </p>
            <p className="flex items-center gap-2">
              <LuClock className="size-4 text-faint" /> {site.timezone} · overlaps with EU and US mornings
            </p>
            <p className="flex items-center gap-2">
              <LuDownload className="size-4 text-faint" />
              <a href={site.resumes.fullStack} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-ink">
                Download my résumé (PDF)
              </a>
            </p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-3xl border border-line bg-surface p-6 shadow-[0_24px_60px_-36px_rgb(0_0_0/0.5)] sm:p-8">
            <h2 className="text-xl font-semibold">Send a message</h2>
            <p className="mt-1 text-sm text-faint">This opens your email app with everything filled in.</p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
