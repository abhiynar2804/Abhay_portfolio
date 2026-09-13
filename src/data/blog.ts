export type BlogCategory = 'All' | 'DSA' | 'Development' | 'Projects' | 'Hackathons' | 'Journey';

export interface BlogArticle {
  id: string;
  title: string;
  description: string;
  category: Exclude<BlogCategory, 'All'>;
  date: string;
  readTime: string;
  slug: string;
  featured?: boolean;
  tags: string[];
}

export const blogArticles: BlogArticle[] = [
  {
    id: 'fastjoin-v1',
    title: 'FastJoin V1 Is Live 🚀',
    description: 'After weeks of development, FastJoin V1 is finally live. Simplifying the campus placement process.',
    category: 'Projects',
    date: '2026-09-09',
    readTime: '5 min',
    slug: 'fastjoin-v1-live',
    featured: true,
    tags: ['FastJoin', 'V1', 'Launch', 'Placement']
  },
  {
    id: 'velozity-dashboard',
    title: 'Velozity Dashboard',
    description: 'Introducing the new Velozity Dashboard for enhanced analytics and reporting.',
    category: 'Development',
    date: '2026-09-12',
    readTime: '5 min',
    slug: 'velozity-dashboard',
    featured: true,
    tags: ['Velozity', 'Dashboard', 'Analytics', 'Reporting']
  }
];