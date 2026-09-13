// ─────────────────────────────────────────────────────────────
// Project data — single source of truth for the Projects section.
// To add a new project, just add an object here. No UI changes needed.
// ─────────────────────────────────────────────────────────────
import fastjoinImage from "../assets/fastjoin.png";
import activepaintsImage from "../assets/activepaints.png";
import velozityDashboardImage from "../assets/velozity-dashboard.png";
import expenseTrackerImage from "../assets/expence-tracker.png";
import herizonImage from "../assets/herizon.png";

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
    slug: "herizon",
    title: "Herizon",
    tagline:
      "A full-stack women’s health and wellness platform that combines menstrual cycle tracking, symptom awareness, personalized wellness guidance, partner sharing, educational resources, and AI-assisted health conversations in a single experience.",
    image: herizonImage,
    liveUrl: "YOUR_HERIZON_LIVE_URL",
    githubUrl: "https://github.com/abhiynar2804/herizon",
    techStack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "NextAuth",
      "Tailwind CSS",
      "Zod",
      "Google Gemini",
      "Vercel",
    ],
    category: "personal",
    overview:
      "Herizon is a full-stack women’s health and wellness platform developed as a final-year project. It provides users with tools for menstrual cycle tracking, symptom awareness, health profile management, educational resources, controlled partner sharing, and AI-assisted general wellness guidance. The platform is built around a privacy-focused architecture with protected APIs, user-specific health data, role-based access, and controlled sharing workflows.",
    problem:
      "Women’s health information and daily wellness tracking are often spread across different applications and disconnected experiences. Users may need separate tools for cycle tracking, symptom awareness, educational information, and sharing relevant updates with trusted partners. This can make it difficult to maintain a centralized view of personal wellness information while keeping sensitive health data private and under the user’s control.",
    solution:
      "Herizon brings these experiences together into a single platform. Users can maintain their health profile, track menstrual cycles, record and evaluate symptoms through a rule-based system, access educational resources, and receive general wellness guidance through an AI assistant. A controlled partner-sharing system allows users to explicitly choose what cycle-related information they want to share, while role-based access and protected APIs help keep personal health information isolated.",
    features: [
      "Personal health profile with essential health and cycle information",
      "Menstrual cycle and period tracking with cycle history",
      "Automatic calculation of next period, ovulation, fertile window, and cycle phase",
      "Database-driven symptom checker with rule-based symptom evaluation",
      "General wellness guidance and professional-care recommendations",
      "AI-assisted conversational women’s health and wellness guidance using Google Gemini",
      "Educational resource and wellness article library",
      "Partner invitation and controlled cycle-information sharing",
      "User-controlled partner access with connection management",
      "Role-based experiences for users, partners, and administrators",
      "Admin dashboard for managing users, symptoms, rules, and educational content",
      "Audit logging and platform-level administrative workflows",
    ],
    role: "Solo project — designed the application architecture and database schema, developed the frontend and backend APIs, implemented authentication and role-based access control, built the cycle calculation and symptom rule engines, integrated PostgreSQL with Prisma, implemented partner-sharing workflows and Gemini AI integration, and handled production deployment and configuration.",
    challenges:
      "The biggest challenge was designing a health-focused platform that combined multiple workflows while maintaining clear data boundaries between users, partners, and administrators. I had to carefully model relational data, protect health-related APIs, implement controlled partner access, and build deterministic cycle and symptom logic instead of relying on AI for medical decisions. Integrating AI while keeping its role limited to general wellness guidance also strengthened my understanding of responsible AI integration, authentication, authorization, database design, API architecture, and production deployment.",
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
    slug: "velozity-dashboard",
    title: "Velozity Dashboard",
    tagline:
      "A full-stack real-time project and task management platform with role-based workflows, secure API authorization, live activity feeds, notifications, and user presence.",
    image: velozityDashboardImage,
    liveUrl: "https://velozity-dashboard-gamma.vercel.app/",
    githubUrl: "YOUR_GITHUB_URL",
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Socket.IO",
      "JWT",
      "Vercel",
      "Railway",
    ],
    category: "personal",
    overview:
      "Velozity Dashboard is a full-stack project and task management platform designed for teams to manage projects, tasks, activity, and notifications through role-specific dashboards. It provides dedicated workflows for Admins, Project Managers, and Developers, with secure backend authorization and real-time collaboration features.",
    problem:
      "Project and task management can become difficult to track when teams rely on disconnected tools and manual updates. Users need different levels of access depending on their responsibilities, while activity, task status changes, notifications, and team presence need to stay synchronized across the application.",
    solution:
      "Velozity Dashboard centralizes project and task management into a single role-based platform. Admins get a global view of the system, Project Managers manage their own projects and teams, and Developers focus on their assigned tasks. Socket.IO provides real-time activity, notifications, and presence, while PostgreSQL acts as the persistent source of truth.",
    features: [
      "Role-based dashboards for Admins, Project Managers, and Developers",
      "Backend-enforced role-based access control and ownership validation",
      "Project, client, and task management",
      "Task status, priority, due-date, and filtering workflows",
      "Persistent activity history for task status changes",
      "Real-time role-filtered activity feeds using Socket.IO",
      "Offline activity recovery from persisted database events",
      "Real-time task assignment and review notifications",
      "Live online user presence with multi-connection aggregation",
      "Backend scheduled processing for overdue tasks",
      "JWT authentication with access and refresh token rotation",
      "HttpOnly refresh-token cookies and secure token storage",
      "Seeded demo environment with realistic users, projects, tasks, activities, and notifications",
      "Security-focused authentication, RBAC, Socket.IO, presence, and overdue-task tests",
    ],
    role: "Solo project — designed the application architecture and database schema, developed the backend APIs and frontend, implemented JWT authentication and role-based authorization, built the Socket.IO real-time architecture, implemented activity tracking, notifications, presence, and scheduled overdue-task processing, and handled database setup, testing, deployment, and production configuration.",
    challenges:
      "The biggest challenge was designing the real-time architecture while keeping activity and notifications secure across different user roles. I had to ensure that Developers could only receive events for their assigned tasks, Project Managers only received activity related to their projects, and Admins retained global visibility. Building persistent activity records alongside WebSocket delivery also required treating the database as the source of truth and supporting recovery after temporary disconnections. This project strengthened my understanding of full-stack architecture, API-level authorization, relational database design, WebSocket systems, authentication, background jobs, and production deployment.",
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
