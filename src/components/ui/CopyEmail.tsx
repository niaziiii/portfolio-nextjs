"use client";

import { useState } from "react";
import { LuCheck, LuCopy } from "react-icons/lu";

export default function CopyEmail({ email, className = "" }: { email: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const input = document.createElement("textarea");
      input.value = email;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      input.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <button
      type="button"
      onClick={copy}
      className={`inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface px-4 py-2 font-mono text-sm text-ink transition hover:border-ink/40 ${className}`}
      aria-label={copied ? "Email copied" : `Copy ${email}`}
    >
      {copied ? <LuCheck className="text-success" /> : <LuCopy className="text-faint" />}
      <span>{copied ? "Copied to clipboard" : email}</span>
    </button>
  );
}
