import React, { useState, useMemo } from 'react';
import { blogArticles } from '../data/blog';
import type { BlogCategory } from '../data/blog';
import { BlogCard } from '../components/blog/BlogCard';
import { FeaturedArticle } from '../components/blog/FeaturedArticle';
import { Search, Filter } from 'lucide-react';

const categories: BlogCategory[] = ['All', 'DSA', 'Development', 'Projects', 'Hackathons', 'Journey'];

export const Blog: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<BlogCategory>('All');

  const featuredArticle = useMemo(() => 
    blogArticles.find(a => a.featured) || blogArticles[0],
    []
  );

  const filteredArticles = useMemo(() => {
    let filtered = blogArticles.filter(a => a.id !== featuredArticle.id);

    if (activeCategory !== 'All') {
      filtered = filtered.filter(a => a.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(a => 
        a.title.toLowerCase().includes(query) ||
        a.description.toLowerCase().includes(query) ||
        a.tags.some(t => t.toLowerCase().includes(query))
      );
    }

    return filtered;
  }, [activeCategory, searchQuery, featuredArticle]);

  return (
    <div className="min-h-screen bg-neutral-950 text-white pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
            Blog
          </h1>
          <p className="text-lg text-white/60 max-w-2xl">
            My progress, experiments, failures, and thoughts while becoming an engineer.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="mb-10 space-y-4">
          <div className="relative max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 focus:bg-white/[0.07] transition-all"
            />
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <Filter size={16} className="text-white/30 mr-1" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-white text-neutral-950 shadow-lg shadow-white/10'
                    : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Article */}
        {!searchQuery && activeCategory === 'All' && (
          <section className="mb-14">
            <h2 className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-4">
              Featured / Pinned
            </h2>
            <FeaturedArticle article={featuredArticle} />
          </section>
        )}

        {/* Articles Grid */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-sm font-semibold text-white/40 uppercase tracking-wider">
              {searchQuery ? 'Search Results' : 'All Articles'}
            </h2>
            <span className="text-white/30 text-sm">
              {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''}
            </span>
          </div>

          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article) => (
                <BlogCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-white/20 text-5xl mb-4">¯\_(ツ)_/¯</div>
              <p className="text-white/40 text-lg">No articles found matching your criteria.</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                className="mt-4 text-blue-400 hover:text-blue-300 text-sm font-medium"
              >
                Clear filters
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Blog;