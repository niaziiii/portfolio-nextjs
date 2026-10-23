export type Role = {
  company: string;
  companyUrl?: string;
  logo?: string;
  title: string;
  start: string;
  end: string;
  location: string;
  type: string;
  summary: string;
  highlights: string[];
  stack: string[];
  project?: { label: string; href: string };
};

export const experience: Role[] = [
  {
    company: "Adabra",
    logo: "/logos/adabra.jpg",
    title: "Full Stack Developer",
    start: "Jun 2024",
    end: "Present",
    location: "Remote · Dubai, UAE",
    type: "Full-time",
    summary:
      "Building Stackly, an all-in-one platform for agencies that covers websites, funnels, CRM and client projects.",
    highlights: [
      "Built and own four core Stackly modules (Pages, Funnels, CRM reporting and Clients/Projects) on React, Node.js/Express and MongoDB, from schema and API design through code review, QA and release.",
      "Engineered a GrapesJS visual editor with drag-and-drop blocks, device previews, layers, motion, inline rich-text editing, sub-pages and publishing to custom domains.",
      "Integrated Magnus Intelligence (AI) into the editor: prompt-to-landing-page in standard and 3D layouts, section-level generation, and file and image attachments previewed in the editor.",
      "Delivered 17 ready-made funnel templates on the shared editor core, CRM dashboards with a report builder (filters, metrics, five chart types) and the client workspace (brief, tasks, boards, notes, media, chat).",
      "Designed REST contracts with typed React consumers, tuned hot MongoDB queries with targeted indexes, and set up CI/CD and peer-review standards for the team.",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "GrapesJS", "TypeScript", "AI/LLM APIs"],
    project: { label: "Stackly case study", href: "/projects/stackly" },
  },
  {
    company: "Smart Engineering & Design Solutions",
    logo: "/logos/smart-engineering.jpg",
    title: "Software Engineer",
    start: "Jul 2023",
    end: "Jun 2024",
    location: "Islamabad, Pakistan",
    type: "Full-time · On-site",
    summary:
      "Built a multi-store retail management platform and maintained EmpowerCRM, a healthcare-staffing ATS/CRM, across inventory, sales and recruiter-facing modules.",
    highlights: [
      "Built the retail platform end to end: React and Redux interface, Node.js/Express services and the relational schema behind both.",
      "Modelled 10–15 interconnected modules (inventory, sales, purchasing, suppliers, customers, accounts) for 10,000+ records with referential integrity across subsystems.",
      "Developed REST APIs for real-time inventory, stock transfers between stores and consolidated cross-location reporting.",
      "Maintained and extended EmpowerCRM, a healthcare-staffing CRM: triaged and fixed reported issues and shipped feature requests across its Dashboard, Jobs, Sourcing and Tasks modules.",
      "Kept data-heavy dashboards responsive with normalized Redux state, memoized selectors and optimized queries, and standardized shared UI components across modules.",
    ],
    stack: ["React", "Redux", "Node.js", "Express", "SQL", "REST APIs"],
    project: { label: "EmpowerCRM case study", href: "/projects/empower-crm" },
  },
  {
    company: "Pixako Technologies (Pvt.) Ltd",
    logo: "/logos/pixako.jpg",
    title: "Software Engineer Intern",
    start: "Feb 2023",
    end: "Jul 2023",
    location: "Islamabad, Pakistan",
    type: "Full-time · On-site",
    summary: "Frontend-focused internship on client web apps and analytics dashboards.",
    highlights: [
      "Built a reusable React component library that standardized UI patterns and sped up feature delivery across the team's projects.",
      "Implemented server-side rendering with Next.js on public pages to improve SEO indexing and first-load performance.",
      "Integrated GraphQL (Apollo) queries for real-time analytics dashboards without over-fetching.",
      "Shipped features in two-week sprints alongside design and backend engineers.",
    ],
    stack: ["React", "Next.js", "GraphQL", "Apollo", "JavaScript"],
  },
];

export const education = {
  school: "University of Southern Punjab, Multan",
  logo: "/logos/usp.jpg",
  degree: "BS in Computer Science",
  start: "Oct 2018",
  end: "Oct 2022",
  focus: "Object-oriented programming, data structures & algorithms, database systems, web engineering",
};

export const certifications = [
  { name: "MERN Stack Development", issuer: "Pakistan Software Export Board (PSEB)", logo: "/logos/pseb.jpg" },
];

export const languages = [
  { name: "English", level: "Professional working" },
  { name: "Urdu", level: "Native" },
  { name: "Punjabi", level: "Proficient" },
];
