import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import type { Components } from 'react-markdown';

interface BlogContentProps {
  content: string;
}

const components: Components = {
  h1: ({ children }) => (
    <h1 className="text-3xl md:text-4xl font-bold text-white mt-14 mb-6 tracking-tight">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl font-semibold text-white mt-12 mb-4 tracking-tight">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl font-semibold text-white/90 mt-10 mb-3">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="text-white/70 leading-[1.8] mb-6 text-base md:text-lg">{children}</p>
  ),
  a: ({ href, children }) => (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-blue-400 hover:text-blue-300 underline underline-offset-4 transition-colors font-medium"
    >
      {children}
    </a>
  ),
  code: ({ inline, className, children, ...props }: any) => {
    if (inline) {
      return (
        <code 
          className="bg-white/10 text-pink-400 px-1.5 py-0.5 rounded-md text-sm font-mono border border-white/10" 
          {...props}
        >
          {children}
        </code>
      );
    }
    
    const match = /language-(\w+)/.exec(className || '');
    
    return (
      <div className="relative group my-8">
        {match && (
          <div className="absolute top-0 right-0 px-3 py-1.5 text-xs text-white/40 font-mono bg-white/5 rounded-bl-lg border-b border-l border-white/10">
            {match[1]}
          </div>
        )}
        <pre className="bg-neutral-900/80 border border-white/10 rounded-xl p-5 overflow-x-auto">
          <code className={`${className} text-sm font-mono leading-relaxed`} {...props}>
            {children}
          </code>
        </pre>
      </div>
    );
  },
  ul: ({ children }) => (
    <ul className="list-disc list-outside text-white/70 mb-6 space-y-2 ml-5 marker:text-white/30">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-outside text-white/70 mb-6 space-y-2 ml-5 marker:text-white/30">{children}</ol>
  ),
  li: ({ children }) => <li className="leading-relaxed pl-1">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-blue-500/50 bg-blue-500/5 pl-6 py-5 pr-5 rounded-r-xl my-8 text-white/80 italic text-lg">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="border-white/10 my-10" />,
  img: ({ src, alt }) => (
    <img src={src} alt={alt} className="rounded-xl border border-white/10 my-8 w-full shadow-lg" loading="lazy" />
  ),
  table: ({ children }) => (
    <div className="overflow-x-auto my-8 rounded-xl border border-white/10">
      <table className="w-full text-left border-collapse">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead className="bg-white/5 text-white/90 border-b border-white/10">{children}</thead>,
  th: ({ children }) => <th className="px-4 py-3 font-semibold text-sm text-white/80">{children}</th>,
  td: ({ children }) => <td className="px-4 py-3 text-white/60 text-sm border-t border-white/5">{children}</td>,
  strong: ({ children }) => <strong className="text-white font-semibold">{children}</strong>,
  em: ({ children }) => <em className="text-white/90">{children}</em>,
};

export const BlogContent: React.FC<BlogContentProps> = ({ content }) => {
  return (
    <div className="max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};