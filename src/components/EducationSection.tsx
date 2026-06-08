import { EDUCATION_TIMELINE } from "../data";
import { GraduationCap, BookOpen, Medal, Microscope } from "lucide-react";

export default function EducationSection() {
  return (
    <section id="education" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white">
            Education & Academy Foundations
          </h2>
          <p className="mt-4 text-sm text-slate-500 font-medium">
            Solid foundations in computer systems, cryptographic databases, operational compliance modeling, and network architectures.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="max-w-4xl mx-auto space-y-8 text-left">
          {EDUCATION_TIMELINE.map((edu, idx) => (
            <div
              key={idx}
              className="relative p-6 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/80 shadow-md hover:shadow-lg transition-all space-y-6"
            >
              {/* Header Title Information */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="space-y-1.5">
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold font-mono text-navy-600 bg-navy-50 dark:text-sky-300 dark:bg-sky-950/40 px-2.5 py-1 rounded-md uppercase tracking-wider">
                    <GraduationCap className="h-3.5 w-3.5" />
                    <span>Graduated Summa Cum Laude</span>
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold font-display text-slate-900 dark:text-white mt-1">
                    {edu.degree}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">{edu.institution} • Chicago, IL</p>
                </div>
                
                <div className="text-right shrink-0">
                  <span className="text-xs text-slate-400 font-mono font-bold block">{edu.duration}</span>
                  <span className="text-xs text-navy-600 dark:text-sky-400 font-mono font-bold mt-1 block">GPA: {edu.gpa}</span>
                </div>
              </div>

              {/* Coursework & Achievements Split Layout */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-2">
                
                {/* Course List column */}
                <div className="md:col-span-6 space-y-4">
                  <div className="flex items-center gap-2 text-slate-400 font-mono text-xs font-bold uppercase tracking-wider">
                    <BookOpen className="h-4.5 w-4.5 text-navy-500" />
                    <span>Representative Coursework</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="text-[10px] sm:text-[10.5px] font-semibold bg-slate-50 text-slate-600 dark:bg-slate-800 dark:text-slate-300 px-3 py-1.5 rounded-xl border border-slate-100 dark:border-slate-700 hover:border-navy-200/50 transition-colors"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Academic Achievements & Lab Research column */}
                <div className="md:col-span-6 space-y-5">
                  
                  {/* Honors List */}
                  {edu.academicAchievements && (
                    <div className="space-y-2.5">
                      <div className="flex items-center gap-2 text-slate-400 font-mono text-xs font-bold uppercase tracking-wider">
                        <Medal className="h-4.5 w-4.5 text-amber-500" />
                        <span>Awards & Honors</span>
                      </div>
                      <ul className="text-xs text-slate-500 dark:text-slate-400 space-y-1.5 leading-normal">
                        {edu.academicAchievements.map((ach, aIdx) => (
                          <li key={aIdx} className="list-disc list-inside">
                            {ach}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Research Activities */}
                  {edu.researchActivities && (
                    <div className="space-y-2.5">
                      <div className="flex items-center gap-2 text-slate-400 font-mono text-xs font-bold uppercase tracking-wider">
                        <Microscope className="h-4.5 w-4.5 text-sky-500" />
                        <span>Laboratory Affiliations & Research</span>
                      </div>
                      <ul className="text-xs text-slate-500 dark:text-slate-400 space-y-1.5 leading-normal">
                        {edu.researchActivities.map((res, rIdx) => (
                          <li key={rIdx} className="list-disc list-inside">
                            {res}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
