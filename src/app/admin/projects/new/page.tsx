import { redirect } from "next/navigation";
import Link from "next/link";
import { getAdminSession } from "@/lib/auth";
import AdminNav from "@/components/admin/AdminNav";
import ProjectForm from "@/components/admin/ProjectForm";

export default async function NewProjectPage() {
  const session = await getAdminSession();
  if (!session) redirect("/admin/login");

  return (
    <div className="min-h-screen bg-[#0f1117]">
      <AdminNav />
      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/admin/projects" className="text-sm text-gray-500 hover:text-gray-300 transition">
            ← Projects
          </Link>
          <h1 className="text-2xl font-bold text-white mt-2">New Project</h1>
        </div>
        <ProjectForm />
      </main>
    </div>
  );
}
