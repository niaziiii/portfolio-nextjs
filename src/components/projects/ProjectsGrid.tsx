"use client";
import React, { useState } from "react";
import type { DBProject } from "@/types/project";

function ProjectCard({ project }: { project: DBProject }) {
  const coverUrl =
    project.images.length > 0
      ? `/api/projects/${project._id}/image/0`
      : null;

  return (
    <div className="group flex flex-col bg-[#1a1f2e] border border-white/10 rounded-2xl overflow-hidden hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
      {/* Cover image */}
      <div className="relative h-44 bg-[#0f1117] overflow-hidden shrink-0">
        {coverUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={coverUrl}
            alt={project.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-white/10">
            {project.name.charAt(0)}
          </div>
        )}
        {project.featured && (
          <span className="absolute top-3 left-3 bg-yellow-500/20 text-yellow-400 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-yellow-500/30">
            Featured
          </span>
        )}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-primary/80"
          >
            View ↗
          </a>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <div className="mb-3">
          <h3 className="font-bold text-white text-lg leading-snug">{project.name}</h3>
          {project.company && (
            <span className="inline-block mt-1 text-xs text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded-full">
              {project.company}
            </span>
          )}
        </div>

        <p className="text-sm text-gray-400 line-clamp-2 mb-4 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="text-xs bg-white/5 text-gray-300 px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="text-xs text-gray-500 px-2 py-0.5">
              +{project.tags.length - 4}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsGrid({ projects }: { projects: DBProject[] }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const allTags = Array.from(new Set(projects.flatMap((p) => p.tags))).sort();

  const filtered =
    activeFilter === "All"
      ? projects
      : activeFilter === "Featured"
      ? projects.filter((p) => p.featured)
      : projects.filter((p) => p.tags.includes(activeFilter));

  const filters = ["All", "Featured", ...allTags];

  return (
    <div>
      {/* Filter bar */}
      <div className="flex flex-wrap gap-2 mb-8">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`text-sm px-4 py-1.5 rounded-full font-medium transition-colors ${
              activeFilter === f
                ? "bg-primary text-white"
                : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
            }`}
          >
            {f}
            {f === "All" && (
              <span className="ml-1.5 text-xs opacity-60">{projects.length}</span>
            )}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          No projects found for &quot;{activeFilter}&quot;.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <ProjectCard key={p._id} project={p} />
          ))}
        </div>
      )}
    </div>
  );
}
