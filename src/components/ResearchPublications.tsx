import { useState } from "react";
import { RESEARCH_PUBLICATIONS } from "../data";
import { FileText, ChevronDown, ChevronUp, Link2, Calendar } from "lucide-react";

export default function ResearchPublications() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleAbstract = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section id="publications" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white">
            Research & Academic Publications
          </h2>
          <p className="mt-4 text-sm text-slate-500 font-medium">
            Published blueprints and scientific papers covering continuous system compliance, HIPAA safeguards, and privacy-preserving machine learning.
          </p>
        </div>

        {/* Paper Cards Feed */}
        <div className="max-w-4xl mx-auto space-y-6 text-left">
          {RESEARCH_PUBLICATIONS.map((pub, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/80 shadow-md hover:shadow-lg transition-all space-y-4"
              >
                
                {/* Header info */}
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold font-mono text-navy-500 dark:text-sky-400 uppercase tracking-widest block">
                      {pub.venue}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold font-display text-slate-900 dark:text-white mt-1 leading-snug">
                      {pub.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-mono mt-0.5">Authors: {pub.authors}</p>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono font-medium shrink-0 pt-1">
                    <Calendar className="h-4 w-4" />
                    <span>{pub.date}</span>
                  </div>
                </div>

                {/* Tags cluster */}
                <div className="flex flex-flow gap-1.5 flex-wrap">
                  {pub.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[9.5px] font-mono tracking-wide px-2.5 py-1 bg-slate-50 text-slate-500 dark:bg-slate-850 dark:text-slate-400 border border-slate-100 dark:border-slate-800 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Abstract Area toggle */}
                <div className="space-y-2">
                  <button
                    id={`toggle-abstract-btn-${idx}`}
                    onClick={() => toggleAbstract(idx)}
                    className="flex items-center gap-1.5 text-xs font-bold text-navy-500 hover:text-navy-600 dark:text-sky-400 cursor-pointer"
                  >
                    <span>{isExpanded ? "Hide Paper Abstract" : "Read Paper Abstract"}</span>
                    {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </button>

                  {isExpanded && (
                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-800/80 text-[11.5px] text-slate-500 dark:text-slate-400 leading-relaxed text-left">
                      <p className="font-semibold text-slate-700 dark:text-slate-300 mb-2 font-display uppercase tracking-wider text-[9px] font-mono">Abstract Abstract Summary</p>
                      {pub.abstract}
                    </div>
                  )}
                </div>

                {/* Outbound Link */}
                {pub.doiLink && (
                  <div className="pt-2 text-right">
                    <a
                      href={pub.doiLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-navy-500 dark:hover:text-sky-300 transform transition-colors"
                    >
                      <Link2 className="h-3.5 w-3.5 text-slate-400" />
                      <span>Direct DOI Registry Link</span>
                    </a>
                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
