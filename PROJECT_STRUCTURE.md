# Project Structure

```
Dev Build/
├── .git/                            # Git repository
├── .gitignore                       # Git ignore file
├── node_modules/                    # Dependencies (npm packages)
├── public/                          # Static files
│   └── Abhay_Resume.pdf             # Resume document
├── src/
│   ├── app/
│   │   └── layouts/
│   │       └── MainLayout.tsx       # Main layout wrapper
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx           # Navigation component
│   │   │   └── Footer.tsx           # Footer component
│   │   ├── about/                   # About page components
│   │   │   ├── AboutHero.tsx        # About hero section
│   │   │   ├── Achievements.tsx     # Achievements section
│   │   │   ├── Education.tsx        # Education section
│   │   │   ├── Journey.tsx          # Journey section
│   │   │   ├── Resume.tsx           # Resume component
│   │   │   └── TechnicalSkills.tsx  # Technical skills section
│   │   └── Home/                    # Home page components
│   │       ├── Hero.tsx             # Hero section
│   │       ├── OverviewCards.tsx    # Overview cards
│   │       ├── StatsBar.tsx         # Statistics bar
│   │       └── Timeline.tsx         # Timeline component
│   ├── pages/                       # Page components
│   │   ├── Home.tsx                 # Home page
│   │   ├── About.tsx                # About page
│   │   ├── Blog.tsx                 # Blog page
│   │   ├── Projects.tsx             # Projects page
│   │   ├── Contact.tsx              # Contact page
│   │   └── about.css                # About page styles
│   ├── hooks/                       # Custom React hooks
│   │   └── useInView.ts             # Intersection observer hook
│   ├── assets/                      # Images, fonts, etc.
│   ├── content/                     # Static content
│   ├── data/                        # Data files, constants
│   ├── styles/                      # Global styles
│   ├── App.tsx                      # Root component
│   ├── main.tsx                     # Entry point
│   └── index.css                    # Global CSS
├── eslint.config.js                 # ESLint configuration
├── index.html                       # HTML template
├── package.json                     # Dependencies & scripts
├── package-lock.json                # Locked dependency versions
├── PROJECT_STRUCTURE.md             # This file
├── README.md                        # Project documentation
├── tsconfig.json                    # TypeScript config
├── tsconfig.app.json                # App-specific TS config
├── tsconfig.node.json               # Node-specific TS config
└── vite.config.ts                   # Vite configuration
```

## Directory Descriptions

| Directory                | Purpose                                                        |
| ------------------------ | -------------------------------------------------------------- |
| `.git/`                  | Git version control repository                                 |
| `node_modules/`          | Installed npm dependencies                                     |
| `public/`                | Static files served publicly (includes resume PDF)             |
| `src/app/layouts/`       | Page layout components                                         |
| `src/components/layout/` | Layout sub-components (Navbar, Footer)                         |
| `src/components/about/`  | About page specific components (hero, skills, education, etc.) |
| `src/components/Home/`   | Home page specific components (hero, stats, timeline, etc.)    |
| `src/pages/`             | Page/route components                                          |
| `src/hooks/`             | Custom React hooks (e.g., useInView for scroll animations)     |
| `src/assets/`            | Static assets (images, icons, fonts)                           |
| `src/content/`           | Static content and markdown files                              |
| `src/data/`              | Data files, mock data, and constants                           |
| `src/styles/`            | Global and shared CSS files                                    |
