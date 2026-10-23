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
    company: "Adabra",
    logo: "/logos/stackly.png",
    companyLogo: "/logos/adabra.jpg",
    tagline: "An all-in-one platform for agencies: websites, funnels, CRM and client projects.",
    summary:
      "At Adabra (Dubai, remote) I build core modules of Stackly (Agency Eleva): a GrapesJS page and funnel builder with Magnus Intelligence AI generation, a template gallery, CRM reporting and the client workspace.",
    context: "Adabra · 2024 – present",
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
  {
    slug: "empower-crm",
    name: "EmpowerCRM",
    company: "Smart Engineering & Design Solutions",
    tagline: "A healthcare-staffing ATS/CRM that recruiters run their day inside: jobs, sourcing and client hospital accounts.",
    summary:
      "At Smart Engineering & Design Solutions (SEDS) I kept EmpowerCRM (empower.associates) running and growing for healthcare-staffing recruiters: fixing reported issues, shipping feature requests, and extending the Dashboard, Jobs, Sourcing and Tasks modules of an existing React SPA.",
    context: "Smart Engineering & Design Solutions · 2023 – 2024",
    role: "Software Engineer: issue fixes, feature extensions and CRM maintenance",
    timeline: "Jul 2023 – Jun 2024",
    companyLogo: "/logos/smart-engineering.jpg",
    links: [
      { label: "Sandbox", href: "https://sandbox.crm.empower.associates/", kind: "private", note: "Tenant: Pcsandbox · login required" },
    ],
    stack: ["React", "REST APIs", "JavaScript", "Font Awesome"],
    cover: { src: "/projects/empower-crm/dashboard.webp", alt: "EmpowerCRM dashboard with open jobs, today's tasks and a release-notes panel", caption: "Dashboard: open jobs, today's tasks and an in-app changelog for every release.", width: 800, height: 359 },
    highlights: [
      "Shipped fixes and feature requests across Dashboard, Jobs, Sourcing and Tasks, each release visible to recruiters in an in-app changelog",
      "Maintained a single-bundle React SPA used daily by healthcare-staffing recruiters managing hundreds of candidate and hospital/medical-center records",
      "Made targeted changes inside an existing, tightly coupled codebase without regressing the workflows recruiters already depended on",
    ],
    stats: [
      { value: "7", label: "modules maintained" },
      { value: "500+", label: "candidate records" },
      { value: "1", label: "release changelog, every update" },
    ],
    problem: [
      "EmpowerCRM is the tool healthcare-staffing recruiters work inside all day: posting jobs, sourcing candidates and tracking client hospital accounts. A bug or a slow-to-ship feature request blocks their pipeline directly.",
      "My job wasn't to design the product; it was to keep it reliable and moving — fix what recruiters reported, build the features they asked for, and extend existing modules without breaking the flows the team already relied on.",
    ],
    built: [
      {
        icon: "zap",
        title: "Issue fixes, fast",
        body: "Triaged and fixed reported bugs across the Dashboard, People, Companies, Jobs, Sourcing and Tasks modules, shipped on a cadence recruiters could see for themselves.",
      },
      {
        icon: "sparkles",
        title: "Feature requests",
        body: "Turned recruiter asks into shipped features — list-view responsiveness, job-posting changes and pagination improvements among them — logged in an in-app announcements panel each release.",
      },
      {
        icon: "folder",
        title: "Jobs & sourcing",
        body: "Extended the Jobs pipeline (lead, open, closed, won) and the Sourcing search-task flow that feeds new candidates into it.",
      },
      {
        icon: "users",
        title: "People & companies",
        body: "Worked on the People and Companies modules recruiters use to track candidates, hiring managers and client hospital/medical-center accounts.",
      },
      {
        icon: "chart",
        title: "Tasks & dashboard",
        body: "Kept the task queue and dashboard (open jobs, today's tasks, release announcements) accurate as the underlying modules changed.",
      },
    ],
    decisions: [
      "Treated this as a maintenance engineering job: small, targeted changes over rewrites, since the app carried live recruiter traffic every day.",
      "Shipped fixes and features behind an in-app changelog, so the team could see what changed each release without a separate release process.",
    ],
    gallery: [
      { src: "/projects/empower-crm/dashboard.webp", alt: "EmpowerCRM dashboard", caption: "Dashboard: open jobs, today's tasks and an in-app changelog for every release.", width: 800, height: 359 },
      { src: "/projects/empower-crm/jobs.webp", alt: "Jobs pipeline list", caption: "Jobs: lead, open, closed and won, with per-job application counts.", width: 800, height: 359 },
      { src: "/projects/empower-crm/job-detail.webp", alt: "Job detail view", caption: "Job detail: description, requirements, placement details and contacts.", width: 800, height: 359 },
      { src: "/projects/empower-crm/sourcing.webp", alt: "Sourcing search tasks", caption: "Sourcing: search tasks that feed new candidates into the pipeline.", width: 800, height: 359 },
      { src: "/projects/empower-crm/tasks.webp", alt: "Tasks queue", caption: "Tasks: a shared queue with priority, status and owners.", width: 800, height: 359 },
      { src: "/projects/empower-crm/campaigns.webp", alt: "Campaigns module", caption: "Campaigns: outreach by type, status and launch date.", width: 800, height: 359 },
    ],
  },
  {
    slug: "tryhackme-showcases",
    name: "TryHackMe Showcases",
    tagline: "11 interactive static sites turning cybersecurity concepts into click-through simulations.",
    summary:
      "Eleven standalone sites I designed and built to showcase TryHackMe room concepts as interactive simulations: a working x86 instruction emulator, a STRIDE/PASTA threat-modeling walkthrough, a SIEM-alert triage sim and more, deployed as static pages via GitHub Pages.",
    context: "Personal project · 2024",
    role: "Design and front-end engineering (solo)",
    timeline: "2024",
    links: [
      { label: "Live hub", href: "https://niaziiii.github.io/static-sites-tryhackme/", kind: "live" },
      { label: "Code", href: "https://github.com/niaziiii/static-sites-tryhackme", kind: "code" },
    ],
    stack: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    cover: { src: "/projects/tryhackme/assembly-emulator.webp", alt: "x86 Assembly Emulator with live registers, flags and stack", caption: "x86 Assembly Emulator: registers, flags and the stack update live as instructions run.", width: 800, height: 505 },
    highlights: [
      "A working x86 instruction emulator where registers, flags and the stack update live as a user steps through code",
      "An interactive firewall/zone config builder and a SIEM-style alert dashboard, each turning a security concept into something you click through rather than read",
      "11 sites, zero backend or build step: plain HTML/CSS/JS deployed straight to GitHub Pages",
    ],
    stats: [
      { value: "11", label: "interactive sites" },
      { value: "0", label: "backend or build step" },
      { value: "100%", label: "deployed on GitHub Pages" },
    ],
    problem: [
      "Most TryHackMe room write-ups are static text and screenshots. I wanted each one I built to be something a visitor could actually interact with, so the underlying concept clicks faster than reading about it would.",
      "That meant picking a different interactive mechanic per topic: a real emulator for assembly, a draggable config builder for network security, a quiz-weighted simulator for risk management, and click-through narratives for threat modeling and red-teaming.",
    ],
    built: [
      {
        icon: "zap",
        title: "x86 Assembly Emulator",
        body: "An interactive instruction emulator: registers, flags and the stack update live as instructions run, next to an illustrated puzzle asking what a given instruction does.",
      },
      {
        icon: "chart",
        title: "Risk Management simulator",
        body: "A quiz-style sim that weighs asset value, risk and ALE, then asks the user to decide whether to implement or decline a safeguard.",
      },
      {
        icon: "users",
        title: "Threat Emulation & Red Team game",
        body: "A choose-your-technique game emulating a threat actor across rounds of questions, plus comic-style slides walking through a red-team engagement's planning, execution and reporting stages.",
      },
      {
        icon: "layers",
        title: "STRIDE & PASTA threat modeling",
        body: "Two visual walkthroughs applying the STRIDE and PASTA threat-modeling frameworks to a shared sample scenario.",
      },
      {
        icon: "eye",
        title: "SOC analyst & security engineer sims",
        body: "A SIEM-style alert dashboard for spotting a malicious IP and an inbox simulator that turns unread emails into a security engineer's task list.",
      },
      {
        icon: "shield",
        title: "Secure Network Architecture",
        body: "An interactive firewall and zone config builder: reproduce the visualized packet flow across zones to retrieve the flag.",
      },
    ],
    decisions: [
      "Built with plain HTML, CSS and JavaScript and no backend or build step, so every site loads instantly and deploys as a static GitHub Pages site.",
      "Gave each room its own interactive mechanic instead of a slide deck — a working emulator, a draggable config builder, a weighted quiz — to make the concept something you do, not just read.",
    ],
    gallery: [
      { src: "/projects/tryhackme/assembly-emulator.webp", alt: "x86 Assembly Emulator", caption: "x86 Assembly Emulator: registers, flags and the stack update live.", width: 800, height: 505 },
      { src: "/projects/tryhackme/secure-network-architecture.webp", alt: "Secure Network Architecture builder", caption: "Secure Network Architecture: build a firewall/zone config to match the visualized packet flow.", width: 800, height: 505 },
      { src: "/projects/tryhackme/threat-modeling-stride.webp", alt: "STRIDE threat modeling walkthrough", caption: "Threat Modeling: a visual walkthrough applying the STRIDE framework.", width: 800, height: 500 },
      { src: "/projects/tryhackme/junior-sec-analyst.webp", alt: "Junior security analyst SIEM sim", caption: "A Day in the Life of a Junior Security Analyst: inspect alerts, spot the malicious IP.", width: 800, height: 500 },
      { src: "/projects/tryhackme/red-team-fundamentals.webp", alt: "Red team engagement slides", caption: "A Simple Red Team Engagement: comic-style slides through planning, execution and reporting.", width: 800, height: 500 },
      { src: "/projects/tryhackme/risk-management.webp", alt: "Risk management quiz", caption: "Risk Management: weigh asset, risk and ALE values and decide on a safeguard.", width: 800, height: 500 },
      { src: "/projects/tryhackme/threat-emulation.webp", alt: "Threat emulation game", caption: "Threat Emulation: a choose-your-technique game across rounds of questions.", width: 800, height: 500 },
      { src: "/projects/tryhackme/vulnerabilities101.webp", alt: "Vulnerability walkthrough", caption: "Vulnerabilities Showcase: a pentest-narrative walkthrough of a fictional client's app.", width: 800, height: 500 },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
