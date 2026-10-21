import type { Project } from "@/data/projects";
import FeatureIcon from "./FeatureIcon";

/** Shown when a project has no screenshot yet: its modules on a soft gradient. */
export default function CoverFallback({ project }: { project: Project }) {
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-accent/15 via-surface to-teal-400/10">
      <div className="bg-grid absolute inset-0 opacity-60" />
      <div className="relative flex h-full flex-col justify-center gap-5 p-8 sm:p-12">
        <p className="text-3xl font-semibold tracking-tight sm:text-4xl">{project.name}</p>
        <div className="grid max-w-md grid-cols-2 gap-2.5">
          {project.built.slice(0, 4).map((b) => (
            <div key={b.title} className="flex items-center gap-2 rounded-lg border border-line bg-surface/80 px-3 py-2 text-xs font-medium">
              <FeatureIcon name={b.icon} className="size-4 text-accent" />
              <span className="truncate">{b.title.split(":")[0]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
