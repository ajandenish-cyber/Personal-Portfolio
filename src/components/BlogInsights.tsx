import { useState } from "react";
import { BLOG_POSTS } from "../data";
import { BookOpen, Calendar, Clock, ChevronRight, Search, X } from "lucide-react";

export default function BlogInsights() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activePostId, setActivePostId] = useState<string | null>(null);

  const categories = ["All", "IT Audit", "Database Administration", "AI & Machine Learning"];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesQuery =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;

    return matchesQuery && matchesCategory;
  });

  const activePost = BLOG_POSTS.find((p) => p.id === activePostId);

  return (
    <section id="blog" className="py-24 bg-white dark:bg-slate-900 transition-colors font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white">
            Knowledge Sharing & Blog Insights
          </h2>
          <p className="mt-4 text-sm text-slate-500 font-medium">
            Read technical white papers, PowerShell tips, infrastructure audits, and guides detailing digital transformation.
          </p>
        </div>

        {/* Search Bar & Categorization Block */}
        <div className="max-w-4xl mx-auto mb-12 flex flex-col sm:flex-row items-center justify-between gap-5 bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 p-4.5 rounded-2xl">
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search guides and tutorials..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-navy-400"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1.5 sm:pb-0 scrollbar-none">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat)}
                className={`text-[10px] tracking-wide font-bold px-3 py-1.5 rounded-xl uppercase border cursor-pointer shrink-0 transition-all ${
                  selectedCategory === cat
                    ? "bg-navy-500 text-white border-navy-500"
                    : "bg-white dark:bg-slate-900 text-slate-500 border-slate-200 dark:border-slate-800 hover:bg-slate-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col justify-between p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/20 border border-slate-100 dark:border-slate-800/80 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all h-full"
            >
              <div className="space-y-4">
                <span className="text-[9.5px] font-bold font-mono tracking-widest text-navy-500 dark:text-sky-400 uppercase">
                  {post.category}
                </span>
                
                <h3 className="text-sm sm:text-base font-extrabold font-display leading-snug text-slate-950 dark:text-white">
                  {post.title}
                </h3>
                
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                  {post.excerpt}
                </p>
              </div>

              <div className="space-y-4 pt-5 border-t border-slate-200/50 dark:border-slate-705/30 shrink-0 mt-5">
                <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono font-bold">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <button
                  id={`read-article-btn-${post.id}`}
                  onClick={() => setActivePostId(post.id)}
                  className="w-full flex items-center justify-between text-xs font-bold text-navy-500 hover:text-navy-600 dark:text-sky-400 cursor-pointer pt-1"
                >
                  <span>Quick Read Details</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Article Reader Modal */}
        {activePost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm" onClick={() => setActivePostId(null)}></div>
            <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-10 text-left border border-slate-200 dark:border-slate-800">
              <button
                onClick={() => setActivePostId(null)}
                className="absolute top-4 right-4 p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-500 dark:text-slate-400 cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="space-y-4">
                <span className="text-[10px] font-bold font-mono text-navy-500 dark:text-sky-400 uppercase tracking-widest">{activePost.category}</span>
                <h2 className="text-lg sm:text-xl font-display font-extrabold text-slate-950 dark:text-white">{activePost.title}</h2>
                <div className="flex gap-4 text-xs font-mono text-slate-400 pt-1 pb-3 border-b border-slate-100 dark:border-slate-800">
                  <span>Published: {activePost.date}</span>
                  <span>•</span>
                  <span>{activePost.readTime}</span>
                </div>
                <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-wrap max-h-[350px] overflow-y-auto pr-2">
                  {activePost.content}
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
