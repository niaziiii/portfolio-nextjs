import { redirect } from "next/navigation";
import Link from "next/link";
import { getAdminSession } from "@/lib/auth";
import { connectDB } from "@/lib/mongodb";
import Project from "@/models/Project";
import AdminNav from "@/components/admin/AdminNav";
import DeleteProjectButton from "@/components/admin/DeleteProjectButton";

export const dynamic = "force-dynamic";

export default async function AdminProjectsPage() {
  const session = await getAdminSession();
  if (!session) redirect("/admin/login");

  await connectDB();
  const projects = await Project.find({}, { "images.data": 0 })
    .sort({ order: 1, createdAt: -1 })
    .lean();

  return (
    <div className="min-h-screen bg-[#0f1117]">
      <AdminNav />
      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white">Projects</h1>
            <p className="text-sm text-gray-400 mt-1">{projects.length} project{projects.length !== 1 ? "s" : ""}</p>
          </div>
          <Link
            href="/admin/projects/new"
            className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition"
          >
            + New Project
          </Link>
        </div>

        {projects.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            <p className="text-lg">No projects yet.</p>
            <Link href="/admin/projects/new" className="text-blue-400 hover:underline mt-2 inline-block">
              Add your first project
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {projects.map((p) => {
              const id = p._id!.toString();
              const imageCount = (p.images ?? []).length;
              return (
                <div key={id} className="bg-[#1a1f2e] border border-white/10 rounded-xl p-5 flex items-start gap-4">
                  {/* Image preview placeholder */}
                  <div className="w-16 h-16 rounded-lg bg-[#0f1117] border border-white/10 flex items-center justify-center text-gray-600 shrink-0 text-xs text-center">
                    {imageCount > 0 ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={`/api/projects/${id}/image/0`}
                        alt={p.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <span>No img</span>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h2 className="font-semibold text-white">{p.name}</h2>
                        {p.company && <p className="text-xs text-blue-400 mt-0.5">{p.company}</p>}
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        {p.featured && (
                          <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-0.5 rounded-full">
                            Featured
                          </span>
                        )}
                        <Link
                          href={`/admin/projects/${id}`}
                          className="text-sm bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg transition text-gray-300"
                        >
                          Edit
                        </Link>
                        <DeleteProjectButton id={id} name={p.name} />
                      </div>
                    </div>
                    <p className="text-sm text-gray-400 mt-1 line-clamp-2">{p.description}</p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {(p.tags ?? []).slice(0, 6).map((tag: string) => (
                        <span key={tag} className="text-xs bg-blue-500/10 text-blue-300 px-2 py-0.5 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
