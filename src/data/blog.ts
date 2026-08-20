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
    id: '1',
    title: 'Building a Real-time Collaborative Editor with WebSockets',
    description: 'How I architected a Google Docs-like editor using React, Yjs, and WebSockets. Exploring CRDTs, operational transforms, and the challenges of real-time synchronization.',
    category: 'Projects',
    date: '2026-08-15',
    readTime: '12 min',
    slug: 'real-time-collaborative-editor',
    featured: true,
    tags: ['React', 'WebSockets', 'CRDT', 'TypeScript']
  },
  {
    id: '2',
    title: 'My First Hackathon: What I Learned in 48 Hours',
    description: 'From idea to demo in a weekend. The sleep deprivation, the pivot moments, and why our authentication system failed 10 minutes before judging.',
    category: 'Hackathons',
    date: '2026-07-28',
    readTime: '8 min',
    slug: 'first-hackathon-lessons',
    tags: ['Hackathon', 'Teamwork', 'Rapid Prototyping']
  },
  {
    id: '3',
    title: 'Understanding Dynamic Programming Through Failure',
    description: 'I failed 7 DP problems in a row before it clicked. Here is the mental model that finally made dynamic programming intuitive for me.',
    category: 'DSA',
    date: '2026-07-10',
    readTime: '10 min',
    slug: 'dp-through-failure',
    tags: ['Algorithms', 'Dynamic Programming', 'Problem Solving']
  },
  {
    id: '4',
    title: 'Why I Switched from Create React App to Vite',
    description: 'A performance comparison and the developer experience improvements that made me migrate my entire portfolio mid-semester.',
    category: 'Development',
    date: '2026-06-22',
    readTime: '6 min',
    slug: 'cra-to-vite',
    tags: ['Vite', 'Build Tools', 'Performance']
  },
  {
    id: '5',
    title: 'From Zero to Full Stack: My 6-Month Journey',
    description: 'The roadmap I followed, the resources that actually helped, and the misconceptions I had about becoming a software engineer.',
    category: 'Journey',
    date: '2026-06-01',
    readTime: '15 min',
    slug: 'six-month-journey',
    tags: ['Career', 'Learning', 'Full Stack']
  },
  {
    id: '6',
    title: 'Optimizing React Renders: A Deep Dive',
    description: 'Profiling, memoization, and the one-line change that reduced our re-render count by 80%. Lessons from shipping production code.',
    category: 'Development',
    date: '2026-05-18',
    readTime: '9 min',
    slug: 'optimizing-react-renders',
    tags: ['React', 'Performance', 'Profiling']
  },
  {
    id: '7',
    title: 'Graph Algorithms in Competitive Programming',
    description: 'DFS, BFS, Dijkstra, and when to use each. A practical guide with problem patterns I have encountered repeatedly.',
    category: 'DSA',
    date: '2026-05-05',
    readTime: '11 min',
    slug: 'graph-algorithms-cp',
    tags: ['Graphs', 'Competitive Programming', 'Algorithms']
  },
  {
    id: '8',
    title: 'Building a Chrome Extension from Scratch',
    description: 'Manifest V3, content scripts, and the surprising complexity of injecting UI into other people\'s websites.',
    category: 'Projects',
    date: '2026-04-20',
    readTime: '7 min',
    slug: 'chrome-extension-build',
    tags: ['Browser Extension', 'JavaScript', 'DOM']
  }
];