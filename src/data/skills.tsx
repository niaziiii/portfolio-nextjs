import type { IconType } from "react-icons";
import {
  SiAmazonwebservices,
  SiApollographql,
  SiDocker,
  SiDrizzle,
  SiExpress,
  SiGithub,
  SiGraphql,
  SiJavascript,
  SiJest,
  SiJira,
  SiMongodb,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiPaddle,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiRedux,
  SiResend,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiTestinglibrary,
  SiTypescript,
  SiVercel,
  SiZod,
} from "react-icons/si";
import { LuLayoutTemplate, LuSparkles, LuWorkflow } from "react-icons/lu";

export type Skill = { name: string; icon: IconType; color: string };
export type SkillGroup = { title: string; blurb: string; items: Skill[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    blurb: "Component architecture, state, editors and performance.",
    items: [
      { name: "React", icon: SiReact, color: "#58c4dc" },
      { name: "Next.js", icon: SiNextdotjs, color: "currentColor" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
      { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
      { name: "Redux", icon: SiRedux, color: "#764abc" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8" },
      { name: "GrapesJS", icon: LuLayoutTemplate, color: "#e5527a" },
    ],
  },
  {
    title: "Backend",
    blurb: "APIs, background jobs, webhooks and integrations.",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5fa04e" },
      { name: "Express", icon: SiExpress, color: "currentColor" },
      { name: "REST APIs", icon: LuWorkflow, color: "#60a5fa" },
      { name: "GraphQL", icon: SiGraphql, color: "#e10098" },
      { name: "Apollo", icon: SiApollographql, color: "currentColor" },
      { name: "Socket.io", icon: SiSocketdotio, color: "currentColor" },
      { name: "AI / LLM APIs", icon: LuSparkles, color: "#a78bfa" },
    ],
  },
  {
    title: "Data",
    blurb: "Schema design, row-level security and query tuning.",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169e1" },
      { name: "Supabase", icon: SiSupabase, color: "#3ecf8e" },
      { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
      { name: "Drizzle ORM", icon: SiDrizzle, color: "#c5f74f" },
      { name: "Zod", icon: SiZod, color: "#3e67b1" },
    ],
  },
  {
    title: "Cloud & tooling",
    blurb: "Shipping, testing and the services around the product.",
    items: [
      { name: "Vercel", icon: SiVercel, color: "currentColor" },
      { name: "Netlify", icon: SiNetlify, color: "#00c7b7" },
      { name: "AWS", icon: SiAmazonwebservices, color: "#ff9900" },
      { name: "Docker", icon: SiDocker, color: "#2496ed" },
      { name: "Git & GitHub", icon: SiGithub, color: "currentColor" },
      { name: "Jest", icon: SiJest, color: "#c21325" },
      { name: "Testing Library", icon: SiTestinglibrary, color: "#e33332" },
      { name: "Postman", icon: SiPostman, color: "#ff6c37" },
      { name: "Jira", icon: SiJira, color: "#2684ff" },
      { name: "Paddle", icon: SiPaddle, color: "#fddd35" },
      { name: "Resend", icon: SiResend, color: "currentColor" },
    ],
  },
];

/** Compact row shown under the hero. */
export const heroStack: Skill[] = [
  { name: "React", icon: SiReact, color: "#58c4dc" },
  { name: "Next.js", icon: SiNextdotjs, color: "currentColor" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5fa04e" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169e1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
  { name: "Supabase", icon: SiSupabase, color: "#3ecf8e" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8" },
];
