import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

export function Container({ className = "", children }: { className?: string; children: ReactNode }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">{children}</p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
}) {
  return (
    <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">{title}</h2>
        {description ? <p className="mt-3 text-base text-muted text-pretty sm:text-lg">{description}</p> : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}

export function Chip({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-line bg-surface-2/60 px-2.5 py-0.5 font-mono text-[11px] font-medium text-muted ${className}`}
    >
      {children}
    </span>
  );
}

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-canvas hover:opacity-90 shadow-sm",
  secondary:
    "border border-line-strong bg-surface text-ink hover:border-ink/40 hover:bg-surface-2",
  ghost: "text-muted hover:text-ink",
};

type ButtonLinkProps = Omit<ComponentProps<typeof Link>, "className"> & {
  variant?: Variant;
  className?: string;
  external?: boolean;
};

export function ButtonLink({ variant = "primary", className = "", external, children, ...props }: ButtonLinkProps) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition ${variants[variant]} ${className}`;
  if (/^(mailto|tel):/.test(String(props.href))) {
    return (
      <a href={String(props.href)} className={cls}>
        {children}
      </a>
    );
  }
  if (external) {
    return (
      <a href={String(props.href)} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link {...props} className={cls}>
      {children}
    </Link>
  );
}

export function BrowserFrame({
  url,
  children,
  className = "",
}: {
  url?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-line bg-surface shadow-[0_24px_60px_-28px_rgb(0_0_0/0.45)] ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-line bg-surface-2/70 px-3.5 py-2.5">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
        {url ? (
          <span className="ml-3 truncate rounded-md bg-canvas/70 px-2.5 py-0.5 font-mono text-[11px] text-faint">
            {url}
          </span>
        ) : null}
      </div>
      {children}
    </div>
  );
}

export function StatusDot({ className = "" }: { className?: string }) {
  return (
    <span className={`relative inline-flex size-2 ${className}`} aria-hidden>
      <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-60 motion-reduce:animate-none" />
      <span className="relative inline-flex size-2 rounded-full bg-success" />
    </span>
  );
}
