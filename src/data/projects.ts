export type Shot = {
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
};

export type ProjectLink = {
  label: string;
  href?: string;
  kind: "live" | "preview" | "case" | "code" | "private";
  note?: string;
};

export type FeatureIcon =
  | "shield"
  | "billing"
  | "bell"
  | "layers"
  | "zap"
  | "plug"
  | "users"
  | "file"
  | "eye"
  | "editor"
  | "sparkles"
  | "funnel"
  | "chart"
  | "folder"
  | "globe";

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  context: string;
  role: string;
  timeline: string;
  company?: string;
  /** Product mark shown next to the name. */
  logo?: string;
  /** Employer logo, for work done at a company. */
  companyLogo?: string;
  links: ProjectLink[];
  stack: string[];
  cover?: Shot;
  highlights: string[];
  stats: { value: string; label: string }[];
  problem: string[];
  built: { title: string; body: string; icon: FeatureIcon }[];
  decisions: string[];
  gallery: Shot[];
  mobile?: Shot;
};

const shot = (src: string, alt: string, caption?: string): Shot => ({
  src,
  alt,
  caption,
  width: 1600,
  height: 1000,
});

export const projects: Project[] = [
  {
    slug: "onefeeokr",
    name: "OneFeeOKR",
    logo: "/logos/onefeeokr.svg",
    tagline: "OKR software with one flat fee per company and unlimited users.",
    summary:
      "A multi-tenant OKR platform I designed, built and launched solo: weekly email check-ins, alignment maps, a coach console, nine integrations and billing enforced in the database.",
    context: "Solo product · 2026",
    role: "Product, design and full-stack engineering (solo)",
    timeline: "2026",
    links: [
      { label: "Live site", href: "https://onefeeokr.netlify.app", kind: "live" },
      { label: "Live preview", href: "https://onefeeokr.netlify.app/preview", kind: "preview", note: "No signup" },
      { label: "Code walkthrough on request", kind: "private" },
    ],
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Drizzle ORM",
      "Zustand",
      "Zod",
      "Tailwind CSS",
      "Paddle",
      "Resend",
      "Netlify",
    ],
    cover: shot(
      "/projects/onefeeokr/dashboard.webp",
      "OneFeeOKR company dashboard with progress, check-in rate and at-risk list",
      "Company dashboard: progress against time, check-in rate, at-risk list and team roll-up."
    ),
    highlights: [
      "23 Postgres tables isolated by 39 row-level-security policies, with 5 workspace roles and a coach mode across clients",
      "Paddle billing enforced in SQL: expired or unpaid workspaces turn read-only, plan limits are triggers",
      "Hourly jobs for reminders and Monday summaries; one-click email check-ins with no login",
    ],
    stats: [
      { value: "23", label: "Postgres tables" },
      { value: "39", label: "RLS policies" },
      { value: "9", label: "integrations" },
      { value: "37", label: "OKR templates" },
    ],
    problem: [
      "Teams rarely quit OKRs because the method fails. They quit because nobody updates the numbers, and per-seat pricing makes rolling OKRs out to a whole company expensive.",
      "OneFeeOKR charges one flat fee per company with unlimited users and keeps goals alive by bringing the weekly check-in to people's inbox, so nobody has to remember to open another tool.",
    ],
    built: [
      {
        icon: "shield",
        title: "Multi-tenant by design",
        body: "23 Postgres tables isolated with 39 row-level-security policies. Five workspace roles (Owner, Admin, Member, Viewer, Coach), plus a platform superadmin whose every action lands in an audit log.",
      },
      {
        icon: "billing",
        title: "Billing enforced in the database",
        body: "Paddle subscription webhooks drive plan state. Expired-trial, unpaid or cancelled workspaces turn read-only through SQL guard functions, Starter's three-team cap is a trigger, and data always stays exportable.",
      },
      {
        icon: "bell",
        title: "Check-ins that run themselves",
        body: "Hourly scheduled jobs send reminders, nudges and a Monday summary through Resend. Owners update a key result from a one-click email link without logging in.",
      },
      {
        icon: "layers",
        title: "The OKR engine",
        body: "Cycles that carry unfinished work forward, four key-result types, progress roll-up, suggested status with manual override, @mention comments, an activity log and 37 templates.",
      },
      {
        icon: "zap",
        title: "Real-time workspace",
        body: "A single Zustand store with optimistic updates, kept in sync through Supabase Realtime, so dashboards, the alignment tree and the zoomable map stay live for every user.",
      },
      {
        icon: "plug",
        title: "Integrations and API",
        body: "Slack, Teams, Google Sheets, HubSpot, Pipedrive, Jira and Linear update key results hourly. Signed outbound webhooks for Zapier and Make, a bearer-key REST API, and tokens encrypted with AES-256-GCM.",
      },
      {
        icon: "users",
        title: "Coach console",
        body: "One view across every client workspace with health scores, a template library that pushes to any client, private notes, branded PDF reports and one-click handover.",
      },
      {
        icon: "file",
        title: "Reports and data portability",
        body: "CSV and Excel import; CSV, Excel and JSON export; printable quarterly and weekly PDF reports; end-of-cycle scoring with retrospectives.",
      },
      {
        icon: "eye",
        title: "A live demo that is the real app",
        body: "Visitors get a populated workspace in one click. The server signs them into a seeded demo account with a one-time magic-link token, and restrictive RLS policies keep it read-only.",
      },
    ],
    decisions: [
      "Authorization and plan limits live in Postgres (RLS, guard functions, triggers), not only in API code, so the web app, REST API and cron jobs all obey the same rules.",
      "Typed end to end: a Drizzle schema pulled from the live database, Zod at every boundary and TypeScript on both server and client.",
      "Background work stays simple and observable: hourly Netlify scheduled functions for check-ins and integration syncs, plus a health endpoint.",
      "The public demo runs on production infrastructure and is made safe by database-level read-only policies instead of a mocked copy that can drift.",
    ],
    gallery: [
      shot("/projects/onefeeokr/landing.webp", "OneFeeOKR marketing site hero", "Marketing site: flat-fee positioning with a one-click live preview."),
      shot("/projects/onefeeokr/dashboard.webp", "Company dashboard", "Company dashboard: progress against time, check-in rate, at-risk list and team roll-up."),
      shot("/projects/onefeeokr/alignment-map.webp", "Zoomable alignment map", "Zoomable alignment map showing how team goals ladder up to company priorities."),
      shot("/projects/onefeeokr/alignment-tree.webp", "Alignment tree", "Alignment tree with progress, status and owner for every objective."),
      shot("/projects/onefeeokr/okrs.webp", "All OKRs list", "All OKRs with filters, roll-up progress and suggested status."),
      shot("/projects/onefeeokr/checkins.webp", "Weekly check-ins", "Weekly check-ins: Monday reminders and a live team activity feed."),
      shot("/projects/onefeeokr/cycle-review.webp", "Cycle review", "End-of-cycle review: score each key result from 0 to 1.0 and capture reflections."),
      shot("/projects/onefeeokr/quarterly-report.webp", "Quarterly OKR report", "Quarterly report, printable to PDF."),
      shot("/projects/onefeeokr/integrations.webp", "Integrations", "Integrations: key results that update themselves from Sheets, HubSpot, Pipedrive, Jira and Linear."),
      shot("/projects/onefeeokr/coach-console.webp", "Coach console", "Coach console: every client's health, progress and check-in rate in one view."),
      shot("/projects/onefeeokr/dashboard-dark.webp", "Dashboard in dark mode", "Full dark mode."),
      shot("/projects/onefeeokr/pricing.webp", "Pricing section", "Pricing: one flat fee per company, unlimited users."),
    ],
    mobile: {
      src: "/projects/onefeeokr/mobile-dashboard.webp",
      alt: "OneFeeOKR dashboard on a phone",
      width: 780,
      height: 1688,
    },
  },
  {
    slug: "stackly",
    name: "Stackly",
    company: "Infiniti Business Solutions",
    logo: "/logos/stackly.png",
    companyLogo: "/logos/infiniti.jpg",
    tagline: "An all-in-one platform for agencies: websites, funnels, CRM and client projects.",
    summary:
      "At Infiniti Business Solutions (US, remote) I build core modules of Stackly (Agency Eleva): a GrapesJS page and funnel builder with Magnus Intelligence AI generation, a template gallery, CRM reporting and the client workspace.",
    context: "Infiniti Business Solutions · 2024 – present",
    role: "Full Stack Developer: Pages, AI generation, Funnels, CRM reporting, Clients/Projects",
    timeline: "Jun 2024 – present",
    links: [
      { label: "Case study", href: "/projects/stackly", kind: "case" },
      { label: "dev.agencyeleva.com", href: "https://dev.agencyeleva.com", kind: "private", note: "Login required · access on request" },
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "GrapesJS", "TypeScript", "AI/LLM APIs", "REST APIs"],
    cover: shot(
      "/projects/stackly/pages-editor.webp",
      "Stackly page editor with device previews, motion, layers and publish",
      "Pages editor: device previews, layers, motion and one-click publish."
    ),
    highlights: [
      "GrapesJS editor with device previews, layers, motion, inline rich-text editing, sub-pages and publishing",
      "Magnus Intelligence AI in the editor: full landing pages (standard and 3D) and sections, with file and image context",
      "17 funnel templates, plus CRM dashboards with a report builder (filters, metrics, five chart types)",
    ],
    stats: [
      { value: "4", label: "modules owned" },
      { value: "17", label: "funnel templates" },
      { value: "2", label: "AI page modes" },
      { value: "5", label: "report chart types" },
    ],
    problem: [
      "Agencies juggle separate tools for client websites, landing-page funnels, CRM and project tracking. Stackly puts them in one workspace so an agency can build, publish and report for every client in one place.",
      "My work centres on the builder: making a browser-based editor feel fast and forgiving, letting AI produce a usable first draft, and connecting what gets built to clients, projects and reporting.",
    ],
    built: [
      {
        icon: "editor",
        title: "Pages: a visual site editor",
        body: "A GrapesJS editor with drag-and-drop blocks, desktop, tablet and mobile previews, layers, motion, inline rich-text editing (heading levels, sizes, alignment, colours), sub-pages, a code view and publishing to a custom domain.",
      },
      {
        icon: "sparkles",
        title: "Magnus Intelligence: AI in the editor",
        body: "Generate a full landing page in standard or 3D layouts, or a single section, from a prompt. Files and images can be attached as context and are previewed in the editor before generation.",
      },
      {
        icon: "eye",
        title: "Template gallery",
        body: "Ready-made landing pages with live desktop, tablet and mobile previews and one-click Use template, from minimal layouts to animated 3D-style heroes.",
      },
      {
        icon: "funnel",
        title: "Funnels",
        body: "17 ready-made funnel templates and a funnel editor on the same GrapesJS core, with Magnus AI, save-as-my-template, publish status, form responses and per-funnel analytics.",
      },
      {
        icon: "chart",
        title: "CRM reporting",
        body: "Configurable dashboards (automation performance, overdue tasks, task status by assignee, ticket backlog aging) and a report builder with filters, metric toggles, five chart types and save-as-new-report.",
      },
      {
        icon: "folder",
        title: "Clients and projects",
        body: "A workspace per client with a brief, tasks, boards, notes, media, team members and a built-in chat thread.",
      },
    ],
    decisions: [
      "Pages and Funnels share one GrapesJS editor core, so blocks, styling, motion and publishing behave the same in both and fixes land once.",
      "AI-generated pages open in the same editor as hand-built ones, so users keep full control after generation.",
      "API shapes are agreed alongside the React components that consume them, which keeps server responses and client state in step; hot MongoDB queries get targeted indexes, and every merge runs through CI/CD and peer review.",
    ],
    gallery: [
      shot("/projects/stackly/pages-editor.webp", "Stackly page editor", "Pages editor: device previews, layers, motion and one-click publish."),
      { src: "/projects/stackly/editor-rich-text.webp", alt: "Inline rich-text editing in the page editor", caption: "Inline rich-text editing with a component toolbar and the Magnus AI action.", width: 1366, height: 644 },
      { src: "/projects/stackly/template-ampere.webp", alt: "Template gallery preview", caption: "Template gallery: preview any layout on desktop, tablet or mobile, then use it.", width: 1366, height: 630 },
      { src: "/projects/stackly/template-nomad.webp", alt: "Product designer template with a particle-sphere hero", caption: "Template: product designer portfolio with a particle-sphere hero.", width: 1366, height: 630 },
      { src: "/projects/stackly/template-beacon.webp", alt: "Automation agency template", caption: "Template: automation agency with a light-beam hero.", width: 1066, height: 534 },
      { src: "/projects/stackly/template-ultra.webp", alt: "AI search agency template", caption: "Template: AI search agency landing page.", width: 966, height: 571 },
      { src: "/projects/stackly/template-kineta.webp", alt: "Motion studio template", caption: "Template: motion studio landing page.", width: 696, height: 471 },
      shot("/projects/stackly/funnel-editor.webp", "Stackly funnel editor", "Funnel editor with Magnus Intelligence and save-as-template."),
      shot("/projects/stackly/crm-dashboards.webp", "CRM reporting dashboard", "CRM reporting dashboards (people's names blurred)."),
      { src: "/projects/stackly/crm-report-builder.webp", alt: "CRM report builder", caption: "Report builder: filters, metrics and five chart types.", width: 1366, height: 643 },
      { src: "/projects/stackly/crm-dashboard-tasks-tickets.webp", alt: "Task and ticket widgets", caption: "Task status by assignee and ticket backlog aging.", width: 1366, height: 641 },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
