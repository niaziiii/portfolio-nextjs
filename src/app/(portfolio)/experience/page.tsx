import Experience from "@/components/experience/Experience";
import type { DBProject } from "@/types/project";
import React from "react";

export type { DBProject };

async function getProjects(): Promise<DBProject[]> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/projects`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export default async function Page() {
  const dbProjects = await getProjects();
  return (
    <div>
      <Experience dbProjects={dbProjects} />
    </div>
  );
}
