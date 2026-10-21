"use client";

import { useState, type FormEvent } from "react";
import { LuSend } from "react-icons/lu";
import { site } from "@/data/site";

/** Composes an email in the visitor's mail app: no backend, nothing to break. */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const subject = `Hello from ${name}${company ? ` (${company})` : ""}`;
    const body = `${message}\n\n— ${name}${company ? `, ${company}` : ""}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const field =
    "mt-1.5 w-full rounded-xl border border-line-strong bg-canvas px-3.5 py-2.5 text-sm text-ink placeholder:text-faint focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium">
          Your name
          <input name="name" required autoComplete="name" className={field} placeholder="Jane Doe" />
        </label>
        <label className="block text-sm font-medium">
          Company <span className="font-normal text-faint">(optional)</span>
          <input name="company" autoComplete="organization" className={field} placeholder="Acme Inc." />
        </label>
      </div>
      <label className="block text-sm font-medium">
        Message
        <textarea
          name="message"
          required
          rows={6}
          className={`${field} resize-y`}
          placeholder="Tell me about the role or project, the team and the timeline."
        />
      </label>
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-canvas transition hover:opacity-90"
        >
          <LuSend className="size-4" /> Open in my email app
        </button>
        <p className="text-xs text-faint" aria-live="polite">
          {sent ? "Your email app should open with the message ready to send." : `Goes straight to ${site.email}.`}
        </p>
      </div>
    </form>
  );
}
