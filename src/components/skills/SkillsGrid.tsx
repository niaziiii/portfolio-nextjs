import { skillGroups } from "@/data/skills";

export default function SkillsGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {skillGroups.map((group) => (
        <div key={group.title} className="rounded-2xl border border-line bg-surface/60 p-6">
          <h3 className="font-semibold">{group.title}</h3>
          <p className="mt-1 text-sm text-faint">{group.blurb}</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {group.items.map(({ name, icon: Icon, color }) => (
              <li
                key={name}
                className="inline-flex items-center gap-2 rounded-lg border border-line bg-canvas/60 px-3 py-1.5 text-sm"
              >
                <Icon className="size-4" style={{ color }} aria-hidden />
                {name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
