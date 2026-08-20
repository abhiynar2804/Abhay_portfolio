import React from 'react';
import type { BlogArticle } from '../../data/blog';
import { ArrowRight, Clock, Tag } from 'lucide-react';

interface BlogCardProps {
  article: BlogArticle;
}

const categoryColors: Record<string, string> = {
  DSA: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  Development: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  Projects: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  Hackathons: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  Journey: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
};

export const BlogCard: React.FC<BlogCardProps> = ({ article }) => {
  return (
    <article className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20">
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-3 mb-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${categoryColors[article.category]}`}>
            {article.category}
          </span>
          <span className="text-white/40 text-xs flex items-center gap-1">
            <Clock size={12} />
            {article.readTime}
          </span>
        </div>

        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
          {article.title}
        </h3>

        <p className="text-white/60 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
          {article.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {article.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="text-white/30 text-xs flex items-center gap-1">
              <Tag size={10} />
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          <span className="text-white/40 text-xs">
            {new Date(article.date).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            })}
          </span>
          <a
            href={`/blog/${article.slug}`}
            className="inline-flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 transition-colors font-medium"
          >
            Read <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </article>
  );
};