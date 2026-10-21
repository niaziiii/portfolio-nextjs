import type { IconType } from "react-icons";
import {
  LuBell,
  LuChartColumn,
  LuCreditCard,
  LuEye,
  LuFileText,
  LuFolderKanban,
  LuGlobe,
  LuLayers,
  LuLayoutTemplate,
  LuPlug,
  LuShieldCheck,
  LuSparkles,
  LuUsers,
  LuWorkflow,
  LuZap,
} from "react-icons/lu";
import type { FeatureIcon as FeatureIconName } from "@/data/projects";

const map: Record<FeatureIconName, IconType> = {
  shield: LuShieldCheck,
  billing: LuCreditCard,
  bell: LuBell,
  layers: LuLayers,
  zap: LuZap,
  plug: LuPlug,
  users: LuUsers,
  file: LuFileText,
  eye: LuEye,
  editor: LuLayoutTemplate,
  sparkles: LuSparkles,
  funnel: LuWorkflow,
  chart: LuChartColumn,
  folder: LuFolderKanban,
  globe: LuGlobe,
};

export default function FeatureIcon({ name, className }: { name: FeatureIconName; className?: string }) {
  const Icon = map[name];
  return <Icon className={className} aria-hidden />;
}
