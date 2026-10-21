"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const GitHubCalendar = dynamic(() => import("react-github-calendar"), {
  ssr: false,
  loading: () => <div className="h-36 w-full animate-pulse rounded-lg bg-surface-2" />,
});

export default function GithubActivity({ username }: { username: string }) {
  const [scheme, setScheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const read = () => setScheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
    read();
    const observer = new MutationObserver(read);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-x-auto pb-2">
      <GitHubCalendar username={username} colorScheme={scheme} fontSize={12} blockSize={11} blockMargin={4} />
    </div>
  );
}
