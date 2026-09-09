// ─────────────────────────────────────────────────────────────
// Project data — single source of truth for the Projects section.
// To add a new project, just add an object here. No UI changes needed.
// ─────────────────────────────────────────────────────────────
import fastjoinImage from "../assets/fastjoin.png";
import activepaintsImage from "../assets/activepaints.png";
import expenseTrackerImage from "../assets/expence-tracker.png";

export type ProjectCategory = "personal" | "hackathon";

export interface Project {
  slug: string; // used in the URL: /projects/:slug
  title: string;
  tagline: string; // short description shown on the card
  image?: string; // e.g. '/images/fastjoin.png' (put it in public/) — a gradient placeholder is shown if missing
  techStack: string[];
  category: ProjectCategory;

  // Detail page content
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  role: string; // your role (esp. for team/hackathon projects)
  challenges: string; // challenges & what you learned

  liveUrl?: string; // optional — button hidden if empty
  githubUrl?: string; // optional — button hidden if empty
}

export const projects: Project[] = [
  // ══ Personal projects ═════════════════════════════════════

  {
    slug: "fastjoin",
    title: "FastJoin",
    tagline:
      "A full-stack placement management platform that brings students, recruiters, and placement coordinators into a single workflow — from job creation and eligibility matching to application tracking and selection.",
    image: fastjoinImage,
    liveUrl: "https://fastjoin.vercel.app/",
    githubUrl: "https://github.com/abhiynar2804/fastjoin",
    techStack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "NextAuth",
      "Tailwind CSS",
      "Vercel",
    ],
    category: "personal",
    overview:
      "FastJoin is a full-stack placement and internship management platform designed to simplify the campus recruitment workflow. It provides dedicated experiences for students, recruiters, and placement administrators, allowing opportunities to be created, applications to be managed, and recruitment progress to be tracked from a centralized platform.",
    problem:
      "Campus recruitment is often managed across spreadsheets, emails, messaging groups, and disconnected tools. Students can miss opportunities and deadlines, while placement teams spend significant time manually checking eligibility and tracking applications. Recruiters also lack a centralized view of candidates throughout the hiring process.",
    solution:
      "FastJoin centralizes campus recruitment into one platform. Recruiters can create opportunities with eligibility criteria, students can discover and apply to relevant drives, and placement coordinators can manage candidates across multiple recruitment rounds from a centralized dashboard.",
    features: [
      "Role-based dashboards for students, recruiters, and placement administrators",
      "Job and internship posting with eligibility requirements",
      "Student job discovery, saving, and application tracking",
      "Application management across multiple recruitment stages",
      "Resume upload and secure resume access",
      "Recruiter-side candidate and application management",
      "Admin tools for managing users, jobs, and recruitment activity",
      "Placement analytics and centralized recruitment data",
    ],
    role: "Solo project — designed the application architecture and database schema, developed the backend APIs and frontend, implemented authentication and role-based workflows, integrated PostgreSQL and Prisma, and handled deployment and production configuration.",
    challenges:
      "Designing a reliable application workflow across multiple recruitment stages was the biggest challenge. I had to model application state carefully, avoid inconsistent transitions, and keep the workflow efficient as the number of candidates increased. This project strengthened my understanding of relational database design, API architecture, authentication, role-based access control, and production deployment.",
  },

  {
    slug: "active-paints",
    title: "Active Paints",
    tagline:
      "A modern business website for Active Paints, showcasing its paint and coating solutions through a responsive, product-focused digital experience.",
    image: activepaintsImage,
    liveUrl: "https://active-paints.vercel.app/",
    githubUrl: "https://github.com/abhiynar2804/active-paints-website",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel",
    ],
    category: "personal",
    overview:
      "Active Paints is a responsive business website built to establish a professional online presence for a paint and coatings company. The website presents the company's products, colour options, services, and brand information while providing clear paths for customers to request consultations and get in touch with the business.",
    problem:
      "The business needed a modern digital presence where customers could quickly understand its products, explore available solutions, learn about the company, and reach the team for enquiries. The challenge was presenting a broad product offering in a way that remained clear, responsive, and easy to navigate.",
    solution:
      "Built a responsive, product-focused website that organizes Active Paints offerings into clear categories and guides visitors from product discovery to enquiry. The interface combines structured content, visual product presentation, responsive layouts, and prominent consultation and contact actions to create a smoother customer experience.",
    features: [
      "Responsive design optimized for desktop and mobile",
      "Product catalogue organized by paint and coating categories",
      "Dedicated colour palette and product exploration",
      "Product-focused landing sections with clear calls to action",
      "Company information, experience, and customer statistics",
      "Customer testimonials and trust-building sections",
      "Consultation and quotation enquiry flows",
      "Direct phone and WhatsApp contact integration",
      "Animated UI elements and interactive content",
      "Deployed and optimized for production with Vercel",
    ],
    role: "Designed and developed the website end-to-end, including the responsive UI, page structure, product presentation, navigation, animations, and contact experience. I translated the business requirements into a production-ready website and handled deployment and frontend optimization.",
    challenges:
      "The main challenge was balancing a large amount of business and product information with a clean, easy-to-navigate interface. Building the site strengthened my understanding of responsive design, component-based development, visual hierarchy, animation, and designing frontend experiences around real business requirements rather than purely technical requirements.",
  },

  {
    slug: "expense-tracker",

    title: "Expense Tracker",

    tagline:
      "A lightweight personal finance tracker for recording income and expenses, organizing transactions, and monitoring spending.",

    image: expenseTrackerImage,

    techStack: ["HTML", "CSS", "JavaScript", "LocalStorage"],

    category: "personal",

    overview:
      "A browser-based expense tracking application designed to help users manage everyday finances in one place. Users can record income and expenses, organize transactions by category, monitor their balance, and review spending over time.",

    problem:
      "Tracking daily spending across notes or spreadsheets makes it difficult to maintain a clear view of income, expenses, and overall balance. I wanted a simple interface where transactions could be recorded and reviewed without relying on external tools.",

    solution:
      "Built a client-side expense management application with separate income and expense entries, category-based organization, financial summaries, transaction editing and deletion, and filters for categories and date ranges. Data is persisted in the browser using LocalStorage.",

    features: [
      "Income and expense tracking with transaction details",
      "Automatic calculation of balance, total income, and total expenses",
      "Category-based transaction organization",
      "Edit and delete existing transactions",
      "Filter transactions by category and date range",
      "User login and signup interface",
      "Responsive interface for different screen sizes",
      "Persistent client-side data using LocalStorage",
    ],

    role: "Solo project — designed and developed the frontend, application logic, transaction management, filtering, and client-side data persistence.",

    challenges:
      "Managing transaction state and keeping summaries synchronized with every add, edit, and delete operation was the main challenge. This project strengthened my understanding of JavaScript DOM manipulation, event-driven application logic, localStorage, data filtering, and building interactive interfaces without a framework.",

    liveUrl: "https://dailly-expense-tracker.netlify.app/",

    githubUrl: "https://github.com/abhiynar2804/Daily-Expense-Tracker",
  },

  // ══ Hackathon / team projects ═════════════════════════════

  {
    slug: "herizon",
    title: "Herizon",
    tagline:
      "A hackathon-built platform — describe what Herizon does in one line.",
    image: "/images/herizon.png",
    techStack: ["React", "Node.js", "MongoDB", "Tailwind CSS"], // TODO: confirm stack
    category: "hackathon",
    overview:
      "Built in 24–48 hours at [hackathon name], Herizon is [what the project does and who it serves].", // TODO: fill in
    problem: "[The problem statement your team picked at the hackathon.]", // TODO: fill in
    solution:
      "[How your solution addressed it — the core idea and how you executed it under time pressure.]", // TODO: fill in
    features: [
      "Key feature one", // TODO: fill in
      "Key feature two",
      "Key feature three",
    ],
    role: "Worked in a team of [N] — I was responsible for [frontend / API / integration / pitching].", // TODO: fill in
    challenges:
      "The biggest challenge was scope control — deciding what to cut so we could ship a working demo before the deadline. Learned how to divide work in a team, merge code under pressure, and present a product to judges.",
    liveUrl: "", // TODO: add live URL
    githubUrl: "https://github.com/yourusername/herizon", // TODO: update
  },

  {
    slug: "hackathon-project-2",
    title: "Hackathon Project 2", // TODO: rename (also update the slug)
    tagline: "One-line description of your second hackathon/team project.",
    image: "/images/hackathon-project-2.png",
    techStack: ["Next.js", "PostgreSQL", "Prisma"], // TODO: confirm stack
    category: "hackathon",
    overview:
      "What the project is, which hackathon it was built at, and who it serves.", // TODO: fill in
    problem: "The problem statement your team tackled.", // TODO: fill in
    solution: "Your approach and what you shipped by the deadline.", // TODO: fill in
    features: [
      "Key feature one", // TODO: fill in
      "Key feature two",
      "Key feature three",
    ],
    role: "Your specific role in the team.", // TODO: fill in
    challenges:
      "What was hard about the hackathon and what you learned from it.", // TODO: fill in
    liveUrl: "",
    githubUrl: "", // TODO: update
  },

  {
    slug: "hackathon-project-3",
    title: "Hackathon Project 3", // TODO: rename (also update the slug)
    tagline: "One-line description of your third hackathon/team project.",
    image: "/images/hackathon-project-3.png",
    techStack: ["React", "Firebase"], // TODO: confirm stack
    category: "hackathon",
    overview:
      "What the project is, which hackathon it was built at, and who it serves.", // TODO: fill in
    problem: "The problem statement your team tackled.", // TODO: fill in
    solution: "Your approach and what you shipped by the deadline.", // TODO: fill in
    features: [
      "Key feature one", // TODO: fill in
      "Key feature two",
      "Key feature three",
    ],
    role: "Your specific role in the team.", // TODO: fill in
    challenges:
      "What was hard about the hackathon and what you learned from it.", // TODO: fill in
    liveUrl: "",
    githubUrl: "", // TODO: update
  },
];

// Helper used by the detail page
export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);
