# Project Structure

```
Dev Build/
├── public/                          # Static files
├── src/
│   ├── app/
│   │   └── layouts/
│   │       └── MainLayout.tsx       # Main layout wrapper
│   ├── components/
│   │   └── layout/
│   │       ├── Navbar.tsx           # Navigation component
│   │       └── Footer.tsx           # Footer component
│   ├── pages/                       # Page components
│   │   ├── Home.tsx                 # Home page
│   │   ├── About.tsx                # About page
│   │   ├── Blog.tsx                 # Blog page
│   │   ├── Projects.tsx             # Projects page
│   │   └── Contact.tsx              # Contact page
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
├── tsconfig.json                    # TypeScript config
├── tsconfig.app.json                # App-specific TS config
├── tsconfig.node.json               # Node-specific TS config
├── vite.config.ts                   # Vite configuration
└── README.md                        # Project documentation
```

## Directory Descriptions

| Directory               | Purpose                                |
| ----------------------- | -------------------------------------- |
| `src/app/layouts`       | Page layout components                 |
| `src/components/layout` | Layout sub-components (Navbar, Footer) |
| `src/pages`             | Page/route components                  |
| `src/assets`            | Static assets (images, icons, fonts)   |
| `src/content`           | Static content and markdown files      |
| `src/data`              | Data files, mock data, and constants   |
| `src/styles`            | Global and shared CSS files            |
| `public`                | Public static files                    |
