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
    title: "Senior Frontend Engineer",
    start: "Jun 2024",
    end: "Oct 2026",
    location: "Remote · Dubai, UAE",
    type: "Full-time",
    summary:
      "Built the frontend of Stackly, an all-in-one platform for agencies that covers websites, funnels, CRM and client projects. Joined as Associate Frontend Engineer and was promoted to Senior Frontend Engineer.",
    highlights: [
      "Worked with the Stackly agency platform (settings, workspaces and modules) in React and Vite, and built the Pages, Funnels, CRM reporting and Clients/Projects modules from component design and state through code review, QA and release.",
      "Introduced Redux Toolkit across the platform, replacing scattered localStorage state (including login data) with one predictable store, and maintained the multi-workspace workflow.",
      "Built the GrapesJS page and funnel builders: drag-and-drop sections, interactive blocks, custom video handling, inline rich-text editing, device previews, layers, motion, sub-pages and publishing to custom domains.",
      "Shipped 30+ page templates and 17 funnel step types, each with its own templates (from portfolios to lead capture), plus a custom editor in the Projects and Clients modules.",
      "Integrated Magnus Intelligence (AI) throughout the builders: prompt-to-landing-page in standard and 3D layouts, section-level generation, and file and image attachments previewed in the editor.",
      "Built the CRM reporting suite: 10 report types, each configured through an 8–10 step builder (filters, metrics, five chart types), and the client workspace (brief, tasks, boards, notes, media, chat).",
    ],
    stack: ["React", "Vite", "GrapesJS", "TypeScript", "AI/LLM APIs"],
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
      "Built a multi-store retail management platform and 40+ interactive TryHackMe training sites, and maintained EmpowerCRM, a healthcare-staffing ATS/CRM.",
    highlights: [
      "Built the retail platform end to end: React and Redux interface, Node.js/Express services and the relational schema behind both.",
      "Modelled 10–15 interconnected modules (inventory, sales, purchasing, suppliers, customers, accounts) for 10,000+ records with referential integrity across subsystems.",
      "Developed REST APIs for real-time inventory, stock transfers between stores and consolidated cross-location reporting.",
      "Built 40+ interactive TryHackMe training sites from content specs in HTML, CSS and JavaScript: an x86 emulator, SIEM, firewall and inbox simulators, and quiz games (11 are live on GitHub Pages).",
      "Maintained and extended EmpowerCRM, a healthcare-staffing CRM: fixed reported issues and shipped feature requests through Jira across its Dashboard, Jobs, Sourcing and Tasks modules.",
      "Delivered client WordPress and PHP sites alongside the product work.",
      "Kept data-heavy dashboards responsive with normalized Redux state, memoized selectors and optimized queries, and standardized shared UI components across modules.",
    ],
    stack: ["React", "Redux", "Node.js", "Express", "SQL", "REST APIs", "HTML/CSS/JS", "WordPress"],
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
    summary: "Internship building management systems, client web apps and analytics dashboards.",
    highlights: [
      "Built two management systems in Next.js and SQL, including an employee attendance system with biometric-style check-in and check-out.",
      "Built a reusable React component library that standardized UI patterns and sped up feature delivery across the team's projects.",
      "Implemented server-side rendering with Next.js on public pages to improve SEO indexing and first-load performance.",
      "Integrated GraphQL (Apollo) queries for real-time analytics dashboards without over-fetching.",
      "Shipped features in two-week sprints alongside design and backend engineers.",
    ],
    stack: ["React", "Next.js", "SQL", "GraphQL", "Apollo", "JavaScript"],
  },
  {
    company: "Freelance",
    title: "Full-Stack Developer",
    start: "2020",
    end: "2024",
    location: "Remote",
    type: "Part-time · during university and on weekends",
    summary: "Paid client projects built end to end, in whatever stack the client needed.",
    highlights: [
      "Delivered e-commerce and merchant stores, inventory and management systems, CRMs, web scrapers, landing pages and portfolio sites for clients.",
      "Worked across MERN, Next.js, WordPress (4+ sites), PHP projects and Python backends and scrapers.",
    ],
    stack: ["React", "Node.js", "MongoDB", "Next.js", "WordPress", "PHP", "Python"],
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
