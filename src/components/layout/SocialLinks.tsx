import { FaGithub, FaLinkedin, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { LuMail } from "react-icons/lu";
import { site } from "@/data/site";

const links = [
  { label: "GitHub", href: site.github, icon: FaGithub },
  { label: "LinkedIn", href: site.linkedin, icon: FaLinkedin },
  { label: "Email", href: `mailto:${site.email}`, icon: LuMail },
  { label: "WhatsApp", href: site.whatsapp, icon: FaWhatsapp },
  { label: "X (Twitter)", href: site.x, icon: FaXTwitter },
];

export default function SocialLinks({
  className = "",
  include,
}: {
  className?: string;
  include?: string[];
}) {
  const shown = include ? links.filter((l) => include.includes(l.label)) : links;
  return (
    <ul className={`flex items-center gap-1 ${className}`}>
      {shown.map(({ label, href, icon: Icon }) => (
        <li key={label}>
          <a
            href={href}
            target={href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            className="inline-flex size-9 items-center justify-center rounded-full text-muted transition hover:bg-surface-2 hover:text-ink"
          >
            <Icon className="size-[18px]" />
          </a>
        </li>
      ))}
    </ul>
  );
}
