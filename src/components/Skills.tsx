import { useState } from "react";
import { SKILL_CATEGORIES } from "../data";
import { CheckCircle2, Award, Zap } from "lucide-react";

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white">
            Competencies & Credentials Mapping
          </h2>
          <p className="mt-4 text-sm text-slate-500 font-medium">
            Interactive skill alignment matched perfectly with industry standards and verifiable credentials.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center flex-wrap gap-2.5 mb-12">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-3 text-xs font-semibold rounded-2xl tracking-wide uppercase transition-all shadow-sm border cursor-pointer ${
                activeTab === idx
                  ? "bg-navy-500 border-navy-500 text-white"
                  : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-950"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Active Competencies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {SKILL_CATEGORIES[activeTab].skills.map((skill, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 shadow-md hover:shadow-lg transition-all text-left space-y-4"
            >
              <div className="flex justify-between items-baseline">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                  {skill.name}
                </h3>
                <span className="text-xs font-mono font-bold text-navy-500 dark:text-sky-400">
                  {skill.level}%
                </span>
              </div>

              {/* Skill Proficiency Bar */}
              <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-navy-500 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              {/* Aligned Certification (Trust Badge) */}
              {skill.certAligned && (
                <div className="flex items-center gap-1.5 pt-1 text-[10.5px] text-slate-500 dark:text-slate-400 font-mono">
                  <Award className="h-4 w-4 text-amber-500 flex-shrink-0" />
                  <span>Aligned Certification: <span className="font-bold text-slate-700 dark:text-slate-200">{skill.certAligned}</span></span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Quick Trust Banner */}
        <div className="mt-16 max-w-3xl mx-auto p-5 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="h-10 w-10 rounded-full bg-emerald-500/15 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
            <CheckCircle2 className="h-5.5 w-5.5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200">Continuous Assessment Standards Compliance</h4>
            <p className="text-[10.5px] text-slate-400 mt-1 leading-relaxed">
              Every displayed metric relates strictly to completed audits, verified academic thesis metrics, and active database sharding benchmarks. Click on the <strong>Certifications</strong> tab below to view verification keys.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
