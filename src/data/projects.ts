// ─────────────────────────────────────────────────────────────
// Project data — single source of truth for the Projects section.
// To add a new project, just add an object here. No UI changes needed.
// ─────────────────────────────────────────────────────────────

export type ProjectCategory = 'personal' | 'hackathon';

export interface Project {
  slug: string;          // used in the URL: /projects/:slug
  title: string;
  tagline: string;       // short description shown on the card
  image?: string;        // e.g. '/images/fastjoin.png' (put it in public/) — a gradient placeholder is shown if missing
  techStack: string[];
  category: ProjectCategory;

  // Detail page content
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  role: string;          // your role (esp. for team/hackathon projects)
  challenges: string;    // challenges & what you learned

  liveUrl?: string;      // optional — button hidden if empty
  githubUrl?: string;    // optional — button hidden if empty
}

export const projects: Project[] = [
  // ══ Personal projects ═════════════════════════════════════

  {
    slug: 'fastjoin',
    title: 'FastJoin',
    tagline: 'A placement & internship management platform connecting students, recruiters and coordinators in one place.',
    image: '/src/assets/Screenshot (56).png',
    techStack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS'],
    category: 'personal',
    overview:
      'FastJoin is a full-stack placement and internship management platform that digitizes the entire campus hiring workflow — from posting opportunities and managing applications to tracking interview rounds and final offers.',
    problem:
      'Campus placement drives typically run on scattered spreadsheets, emails and WhatsApp groups. Students miss deadlines, coordinators manually filter eligible candidates, and recruiters have no single view of the pipeline.',
    solution:
      'FastJoin centralizes the workflow: recruiters post drives with eligibility criteria, eligible students are matched and notified automatically, and coordinators track every application through each round on a single dashboard.',
    features: [
      'Role-based dashboards for students, recruiters and placement coordinators',
      'Automatic eligibility matching based on CGPA, branch and skills',
      'Application tracking across rounds (aptitude → technical → HR → offer)',
      'Real-time notifications for new drives, shortlists and deadlines',
      'Analytics on placement statistics, package trends and company-wise data',
    ],
    role: 'Solo project — designed the schema, built the REST API and the entire React frontend, and handled deployment.',
    challenges:
      'The hardest part was modeling the multi-round application pipeline in PostgreSQL without duplicating state, and keeping eligibility filtering fast as the number of students grew. Learned a lot about database indexing, transaction handling, and structuring a large Express codebase.',
    liveUrl: '', // TODO: add live URL
    githubUrl: 'https://github.com/yourusername/fastjoin', // TODO: update
  },

  {
    slug: 'expense-tracker',
    title: 'Expense Tracker',
    tagline: 'A clean, fast expense tracker with categories, monthly budgets and spending insights — all stored locally.',
    image: '/src/assets/Screenshot (56).png',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'LocalStorage'],
    category: 'personal',
    overview:
      'A personal finance app to log daily expenses, set monthly budgets per category and visualize where the money goes — no sign-up needed, everything persists in the browser.',
    problem:
      'Most expense apps require accounts and sync to a server, which is overkill for quickly tracking daily spending. I wanted something instant, private and offline-friendly.',
    solution:
      'A lightweight React app that stores all data in LocalStorage, with instant add/edit/delete of transactions and charts that update in real time as you log expenses.',
    features: [
      'Add, edit and delete transactions with categories and notes',
      'Monthly budget per category with progress indicators',
      'Spending breakdown charts by category and day',
      'Fully offline — data persists in LocalStorage',
      'Responsive design for mobile and desktop',
    ],
    role: 'Solo project — UI design, state management and data persistence logic.',
    challenges:
      'Designing a clean state model for transactions and budgets that stays in sync with LocalStorage without race conditions taught me a lot about useEffect discipline and derived state. Also practiced chart rendering without heavy libraries.',
    liveUrl: '', // TODO: add live URL
    githubUrl: 'https://github.com/yourusername/expense-tracker', // TODO: update
  },

  {
    slug: 'portfolio-website',
    title: 'Portfolio Website',
    tagline: 'This very site — a fully responsive personal portfolio built with React, TypeScript and Tailwind CSS.',
    image: '/src/assets/Screenshot (56).png',
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Router'],
    category: 'personal',
    overview:
      'My personal portfolio showcasing my projects, skills, education and journey — built from scratch with a component-driven architecture and dynamic routing for project detail pages.',
    problem:
      'A resume PDF alone can\'t show live projects, writing, or personality. I needed a central place that presents my work the way I want and is easy to extend as I build more.',
    solution:
      'A Vite + React + TypeScript single-page app with route-based pages, reusable section components, scroll-triggered animations via a custom useInView hook, and data-driven project pages.',
    features: [
      'Dynamic project detail routes driven by a single data file',
      'Scroll-triggered reveal animations with a custom IntersectionObserver hook',
      'Fully responsive layout from mobile to desktop',
      'Component-driven structure for easy maintenance',
      'Resume download and contact section',
    ],
    role: 'Solo project — design, development and deployment.',
    challenges:
      'Getting smooth scroll animations without jank taught me how IntersectionObserver works under the hood and when to unobserve elements. Structuring the project so new sections and projects require zero routing changes was a great exercise in data-driven UI.',
    liveUrl: '', // TODO: add live URL
    githubUrl: 'https://github.com/yourusername/portfolio', // TODO: update
  },

  // ══ Hackathon / team projects ═════════════════════════════

  {
    slug: 'herizon',
    title: 'Herizon',
    tagline: 'A hackathon-built platform — describe what Herizon does in one line.',
    image: '/images/herizon.png',
    techStack: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'], // TODO: confirm stack
    category: 'hackathon',
    overview:
      'Built in 24–48 hours at [hackathon name], Herizon is [what the project does and who it serves].', // TODO: fill in
    problem:
      '[The problem statement your team picked at the hackathon.]', // TODO: fill in
    solution:
      '[How your solution addressed it — the core idea and how you executed it under time pressure.]', // TODO: fill in
    features: [
      'Key feature one', // TODO: fill in
      'Key feature two',
      'Key feature three',
    ],
    role: 'Worked in a team of [N] — I was responsible for [frontend / API / integration / pitching].', // TODO: fill in
    challenges:
      'The biggest challenge was scope control — deciding what to cut so we could ship a working demo before the deadline. Learned how to divide work in a team, merge code under pressure, and present a product to judges.',
    liveUrl: '', // TODO: add live URL
    githubUrl: 'https://github.com/yourusername/herizon', // TODO: update
  },

  {
    slug: 'hackathon-project-2',
    title: 'Hackathon Project 2', // TODO: rename (also update the slug)
    tagline: 'One-line description of your second hackathon/team project.',
    image: '/images/hackathon-project-2.png',
    techStack: ['Next.js', 'PostgreSQL', 'Prisma'], // TODO: confirm stack
    category: 'hackathon',
    overview: 'What the project is, which hackathon it was built at, and who it serves.', // TODO: fill in
    problem: 'The problem statement your team tackled.', // TODO: fill in
    solution: 'Your approach and what you shipped by the deadline.', // TODO: fill in
    features: [
      'Key feature one', // TODO: fill in
      'Key feature two',
      'Key feature three',
    ],
    role: 'Your specific role in the team.', // TODO: fill in
    challenges: 'What was hard about the hackathon and what you learned from it.', // TODO: fill in
    liveUrl: '',
    githubUrl: '', // TODO: update
  },

  {
    slug: 'hackathon-project-3',
    title: 'Hackathon Project 3', // TODO: rename (also update the slug)
    tagline: 'One-line description of your third hackathon/team project.',
    image: '/images/hackathon-project-3.png',
    techStack: ['React', 'Firebase'], // TODO: confirm stack
    category: 'hackathon',
    overview: 'What the project is, which hackathon it was built at, and who it serves.', // TODO: fill in
    problem: 'The problem statement your team tackled.', // TODO: fill in
    solution: 'Your approach and what you shipped by the deadline.', // TODO: fill in
    features: [
      'Key feature one', // TODO: fill in
      'Key feature two',
      'Key feature three',
    ],
    role: 'Your specific role in the team.', // TODO: fill in
    challenges: 'What was hard about the hackathon and what you learned from it.', // TODO: fill in
    liveUrl: '',
    githubUrl: '', // TODO: update
  },
];

// Helper used by the detail page
export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);