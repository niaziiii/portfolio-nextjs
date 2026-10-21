import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight">This page doesn&apos;t exist</h1>
      <p className="mt-3 max-w-md text-muted">The link may be old, or the page may have moved.</p>
      <div className="mt-8 flex gap-3">
        <Link href="/" className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-canvas">
          Go home
        </Link>
        <Link href="/projects" className="rounded-full border border-line-strong px-5 py-2.5 text-sm font-semibold">
          See my work
        </Link>
      </div>
    </main>
  );
}
