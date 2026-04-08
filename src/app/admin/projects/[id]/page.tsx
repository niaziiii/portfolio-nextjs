import { redirect, notFound } from "next/navigation";
import Link from "next/link";
import { getAdminSession } from "@/lib/auth";
import { connectDB } from "@/lib/mongodb";
import Project from "@/models/Project";
import AdminNav from "@/components/admin/AdminNav";
import ProjectForm from "@/components/admin/ProjectForm";

type Params = { params: Promise<{ id: string }> };

export const dynamic = "force-dynamic";

export default async function EditProjectPage({ params }: Params) {
  const session = await getAdminSession();
  if (!session) redirect("/admin/login");

  const { id } = await params;
  await connectDB();
  const project = await Project.findById(id, { "images.data": 0 }).lean();
  if (!project) notFound();

  const defaultValues = {
    name: project.name,
    description: project.description,
    tags: (project.tags ?? []).join(", "),
    highlights: (project.highlights ?? []).join("\n"),
    link: project.link ?? "",
    company: project.company ?? "",
    featured: project.featured ?? false,
    order: project.order ?? 0,
    images: (project.images ?? []).map((img: { _id?: unknown; contentType: string; filename: string }) => ({
      _id: img._id?.toString() ?? "",
      contentType: img.contentType,
      filename: img.filename,
    })),
  };

  return (
    <div className="min-h-screen bg-[#0f1117]">
      <AdminNav />
      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/admin/projects" className="text-sm text-gray-500 hover:text-gray-300 transition">
            ← Projects
          </Link>
          <h1 className="text-2xl font-bold text-white mt-2">Edit Project</h1>
          <p className="text-sm text-gray-400 mt-1">{project.name}</p>
        </div>
        <ProjectForm projectId={id} defaultValues={defaultValues} />
      </main>
    </div>
  );
}
