"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdminNav() {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
  }

  return (
    <nav className="bg-[#1a1f2e] border-b border-white/10 px-4 py-3">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/admin/projects" className="text-white font-bold text-lg">
            Portfolio Admin
          </Link>
          <Link href="/admin/projects" className="text-sm text-gray-400 hover:text-white transition">
            Projects
          </Link>
          <Link href="/" target="_blank" className="text-sm text-gray-400 hover:text-white transition">
            View Site ↗
          </Link>
        </div>
        <button
          onClick={handleLogout}
          className="text-sm text-gray-400 hover:text-red-400 transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
