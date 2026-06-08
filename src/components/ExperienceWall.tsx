import { WORK_EXPERIENCE } from "../data";
import { Briefcase, MapPin, Calendar, CheckSquare, Zap } from "lucide-react";

export default function ExperienceWall() {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-slate-900 transition-colors font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white">
            Professional Experience & Metrics
          </h2>
          <p className="mt-4 text-sm text-slate-500 font-medium">
            Proven engineering and governance track records, punctuated by measurable, business-critical outcomes.
          </p>
        </div>

        {/* Roles Timeline Feed */}
        <div className="max-w-4xl mx-auto space-y-12">
          {WORK_EXPERIENCE.map((exp, idx) => (
            <div
              key={idx}
              className="relative p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/80 hover:shadow-lg transition-all text-left group"
            >
              {/* Corner Accent Glow */}
              <div className="absolute top-0 right-0 h-2 bg-gradient-to-r from-navy-500 to-sky-400 rounded-tr-3xl rounded-tl-3xl w-full opacity-70" />

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 pb-5 border-b border-slate-200/50 dark:border-slate-700/50">
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold font-mono text-navy-600 bg-navy-50 dark:text-sky-300 dark:bg-sky-950/40 px-2.5 py-1 rounded-md uppercase tracking-wider">
                    {exp.organization}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold font-display text-slate-900 dark:text-white mt-1">
                    {exp.position}
                  </h3>
                </div>
                
                <div className="flex flex-wrap items-center gap-3.5 text-slate-400 dark:text-slate-500 font-mono text-xs font-semibold">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-slate-400" />
                    <span>{exp.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4 text-slate-400" />
                    <span>{exp.duration}</span>
                  </div>
                </div>
              </div>

              {/* Achievements & Metrics */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Achievements Bullet List */}
                <div className="lg:col-span-7 space-y-3">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-mono mb-2">Core Project Achievements</h4>
                  <ul className="space-y-3.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {exp.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2.5">
                        <CheckSquare className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcomes & Technical Tags column */}
                <div className="lg:col-span-5 space-y-5 lg:pl-4 lg:border-l border-slate-200/50 dark:border-slate-700/50">
                  
                  {/* Outcomes Dashboard */}
                  <div className="space-y-3">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-mono mb-2">Measurable Audit Outcomes</h4>
                    <div className="space-y-2.5">
                      {exp.measurableOutcomes.map((mo, oIdx) => (
                        <div key={oIdx} className="p-3 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 rounded-xl flex items-center gap-2.5">
                          <Zap className="h-4 w-4 text-amber-500 shrink-0" />
                          <span className="text-[11px] text-slate-700 dark:text-slate-300 font-bold leading-tight">
                            {mo}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies tags */}
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono mb-2">Skills Exercised</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400 px-2.5 py-1 rounded-md font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
