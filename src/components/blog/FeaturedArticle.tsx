import React from 'react';
import type { BlogArticle } from '../../data/blog';
import { ArrowRight, Clock, Calendar, Tag } from 'lucide-react';

interface FeaturedArticleProps {
  article: BlogArticle;
}

export const FeaturedArticle: React.FC<FeaturedArticleProps> = ({ article }) => {
  return (
    <article className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-8 md:p-10 hover:border-white/20 transition-all duration-500 group">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
              ★ Featured
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">
              {article.category}
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
            {article.title}
          </h2>

          <p className="text-white/70 text-base md:text-lg leading-relaxed mb-6 max-w-2xl">
            {article.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="text-white/40 text-sm flex items-center gap-1.5">
              <Calendar size={14} />
              {new Date(article.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}
            </span>
            <span className="text-white/40 text-sm flex items-center gap-1.5">
              <Clock size={14} />
              {article.readTime} read
            </span>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {article.tags.map((tag) => (
              <span key={tag} className="px-2.5 py-1 rounded-md bg-white/5 text-white/50 text-xs flex items-center gap-1 border border-white/5">
                <Tag size={10} />
                {tag}
              </span>
            ))}
          </div>

          <a
            href={`/blog/${article.slug}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium transition-all duration-300 group/btn"
          >
            Read Article
            <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </article>
  );
};