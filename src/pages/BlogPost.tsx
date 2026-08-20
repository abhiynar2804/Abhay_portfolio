import React, { useEffect, useMemo, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { blogArticles } from '../data/blog';
import { blogContentMap } from '../content/blog';
import { BlogContent } from '../components/blog/BlogContent';
import { ArrowLeft, Clock, Calendar, Tag, ChevronLeft, ChevronRight } from 'lucide-react';

export const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  const article = useMemo(() => 
    blogArticles.find(a => a.slug === slug),
    [slug]
  );

  const content = useMemo(() => 
    slug ? blogContentMap[slug] : null,
    [slug]
  );

  // Reading progress bar
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setProgress(Math.min(progress, 100));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reset scroll on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <div className="min-h-screen bg-neutral-950 text-white pt-32 text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
        <p className="text-white/60 mb-8">The article you're looking for doesn't exist.</p>
        <button 
          onClick={() => navigate('/blog')}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors text-white font-medium"
        >
          <ArrowLeft size={18} /> Back to Blog
        </button>
      </div>
    );
  }

  const currentIndex = blogArticles.findIndex(a => a.slug === slug);
  const prevArticle = currentIndex > 0 ? blogArticles[currentIndex - 1] : null;
  const nextArticle = currentIndex < blogArticles.length - 1 ? blogArticles[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-white/5 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Back Link */}
          <button
            onClick={() => navigate('/blog')}
            className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-10 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to all articles
          </button>

          {/* Article Header */}
          <header className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                {article.category}
              </span>
              {article.featured && (
                <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
                  ★ Featured
                </span>
              )}
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-[1.15] tracking-tight">
              {article.title}
            </h1>

            <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-8">
              {article.description}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-white/40 border-y border-white/10 py-4">
              <span className="flex items-center gap-2">
                <Calendar size={15} />
                {new Date(article.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={15} />
                {article.readTime} read
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {article.tags.map(tag => (
                <span key={tag} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 text-white/50 text-xs border border-white/5 hover:border-white/10 transition-colors">
                  <Tag size={10} />
                  {tag}
                </span>
              ))}
            </div>
          </header>

          {/* Content */}
          <article className="mb-16">
            {content ? (
              <BlogContent content={content} />
            ) : (
              <div className="text-center py-20">
                <div className="inline-block w-8 h-8 border-2 border-white/20 border-t-blue-500 rounded-full animate-spin mb-4" />
                <p className="text-white/40">Loading article content...</p>
              </div>
            )}
          </article>

          {/* Author Box */}
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 mb-12 flex items-start gap-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl shrink-0">
              A
            </div>
            <div>
              <p className="text-white font-semibold text-lg mb-1">Abhay</p>
              <p className="text-white/50 text-sm leading-relaxed">
                Engineering student & full-stack developer. Writing about code, systems, and the journey in between.
              </p>
            </div>
          </div>

          {/* Prev/Next Navigation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {prevArticle ? (
              <button
                onClick={() => navigate(`/blog/${prevArticle.slug}`)}
                className="text-left p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] hover:border-white/20 transition-all group"
              >
                <span className="text-white/40 text-xs uppercase tracking-wider flex items-center gap-1 mb-3">
                  <ChevronLeft size={14} /> Previous Article
                </span>
                <p className="text-white font-medium group-hover:text-blue-400 transition-colors line-clamp-2">
                  {prevArticle.title}
                </p>
              </button>
            ) : <div />}
            
            {nextArticle ? (
              <button
                onClick={() => navigate(`/blog/${nextArticle.slug}`)}
                className="text-right p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] hover:border-white/20 transition-all group"
              >
                <span className="text-white/40 text-xs uppercase tracking-wider flex items-center justify-end gap-1 mb-3">
                  Next Article <ChevronRight size={14} />
                </span>
                <p className="text-white font-medium group-hover:text-blue-400 transition-colors line-clamp-2">
                  {nextArticle.title}
                </p>
              </button>
            ) : <div />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;