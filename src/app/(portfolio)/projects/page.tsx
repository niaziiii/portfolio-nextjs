import ProjectsGrid from "@/components/projects/ProjectsGrid";
import type { DBProject } from "@/types/project";

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

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="text-white max-w-6xl mx-auto px-4 py-12">
      <div className="mb-10">
        <div className="relative inline-block mb-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            My <span className="text-primary">Projects</span>
          </h1>
          <div className="absolute bottom-0 left-0 w-24 h-1 bg-primary" />
        </div>
        <p className="text-gray-300 text-lg max-w-2xl mt-4">
          A collection of products and tools I&apos;ve built across different roles and
          technologies.
        </p>
      </div>

      {projects.length === 0 ? (
        <div className="text-center py-20 text-gray-500 border border-dashed border-gray-700 rounded-xl">
          <p className="text-lg">No projects yet.</p>
          <p className="text-sm mt-1">
            Add projects via the{" "}
            <a href="/admin" className="text-blue-400 hover:underline">
              admin dashboard
            </a>
            .
          </p>
        </div>
      ) : (
        <ProjectsGrid projects={projects} />
      )}
    </div>
  );
}
