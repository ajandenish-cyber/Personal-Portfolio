import { useState } from "react";
import { PROJECTS } from "../data";
import { Search, Github, ExternalLink, Code, ShieldCheck, CheckCircle2, ChevronRight, FileText } from "lucide-react";

export default function ProjectsShowcase() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "IT Audit Projects",
    "Database Projects",
    "Systems Administration Projects",
    "Power BI Dashboards",
    "Machine Learning Projects",
    "Research Projects"
  ];

  const filteredProjects = PROJECTS.filter((proj) => {
    const matchesQuery = 
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.problem.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.solution.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.results.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === "All" || proj.category === selectedCategory;

    return matchesQuery && matchesCategory;
  });

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white">
            Case Studies & Systems Artifacts
          </h2>
          <p className="mt-4 text-sm text-slate-500 font-medium">
            Browse through concrete systems engineering audits, database sync nodes, and clinical compliance scripts.
          </p>
        </div>

        {/* Filter Toolbar Zone */}
        <div className="max-w-5xl mx-auto mb-12 flex flex-col md:flex-row items-center justify-between gap-6 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 p-5 rounded-2xl shadow-md">
          
          {/* Search Input Box */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search problem, stack, or outcome..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-navy-400"
            />
          </div>

          {/* Category Badges scrollable */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat)}
                className={`text-[10px] tracking-wide font-bold px-3 py-1.5 rounded-xl uppercase border cursor-pointer shrink-0 transition-all ${
                  selectedCategory === cat
                    ? "bg-navy-500 text-white border-navy-500"
                    : "bg-slate-50 dark:bg-slate-800 text-slate-500 border-slate-200 dark:border-slate-700 hover:bg-slate-100"
                }`}
              >
                {cat.replace(" Projects", "").replace(" Dashboards", "")}
              </button>
            ))}
          </div>

        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 text-slate-400 font-mono text-sm max-w-3xl mx-auto bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200/60">
            No projects matched your criteria. Try searching a different technology stack like "PostgreSQL", "Power BI", or "COBIT".
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6.5xl mx-auto">
            {filteredProjects.map((proj) => (
              <div
                key={proj.id}
                className="group relative flex flex-col h-full rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all text-left"
              >
                
                {/* Visual Image / Placeholder Grid Area */}
                <div className="relative h-44 bg-gradient-to-tr from-navy-950 to-navy-800 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-grid-white/[0.04] bg-[size:10px_10px]" />
                  <div className="relative flex flex-col items-center gap-2">
                    <Code className="h-10 w-10 text-sky-400/80 group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] font-mono tracking-widest text-slate-300 uppercase select-none">
                      {proj.category} Module
                    </span>
                  </div>
                </div>

                {/* Info Content Area */}
                <div className="flex-1 p-6 flex flex-col justify-between space-y-5">
                  <div className="space-y-4">
                    <h3 className="text-sm font-extrabold font-display leading-snug text-slate-950 dark:text-white">
                      {proj.title}
                    </h3>
                    
                    {/* Problem / Solution Fields */}
                    <div className="space-y-2.5 text-[11px] leading-relaxed">
                      <div>
                        <span className="font-bold text-rose-500 dark:text-rose-400 uppercase tracking-widest text-[9.5px] font-mono block">Problem:</span>
                        <p className="text-slate-500 dark:text-slate-400 font-medium">{proj.problem}</p>
                      </div>
                      <div>
                        <span className="font-bold text-emerald-500 dark:text-emerald-400 uppercase tracking-widest text-[9.5px] font-mono block">Solution:</span>
                        <p className="text-slate-600 dark:text-slate-300 font-medium">{proj.solution}</p>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-800">
                        <span className="font-bold text-amber-500 dark:text-amber-400 uppercase tracking-widest text-[9.5px] font-mono block">Audited Outcome:</span>
                        <p className="text-slate-600 dark:text-slate-400 text-[10.5px] font-semibold">{proj.results}</p>
                      </div>
                    </div>
                  </div>

                  {/* Skills/Tools & Code triggers */}
                  <div className="space-y-4 pt-3 border-t border-slate-100 dark:border-slate-800 shrink-0">
                    <div className="flex flex-flow gap-1 flex-wrap">
                      {proj.technologies.map((t, i) => (
                        <span
                          key={i}
                          className="text-[9.5px] font-mono bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-500 px-2 py-0.5 rounded-md"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      {proj.githubLink ? (
                        <a
                          href={proj.githubLink}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1.5 text-slate-600 hover:text-navy-500 dark:text-slate-400 dark:hover:text-sky-300 text-xs font-semibold"
                        >
                          <Github className="h-4 w-4" />
                          <span>View Code</span>
                        </a>
                      ) : (
                        <span />
                      )}

                      <a
                        href={proj.liveDemoLink}
                        className="flex items-center gap-1 text-navy-500 hover:text-navy-600 dark:text-sky-400 text-xs font-bold leading-none"
                      >
                        <span>Demo & Specs</span>
                        <ChevronRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
