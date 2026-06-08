import { motion } from "motion/react";
import { Award, Compass, Heart, Calendar, GraduationCap, Server, TrendingUp, Cpu } from "lucide-react";
import { BIO } from "../data";

export default function About() {
  const coreValues = [
    { title: "Technical Precision", desc: "Approaching server configuration, compliance protocols, and database schema layouts with mathematical exactness.", icon: Cpu },
    { title: "Risk Mitigation", desc: "Understanding that every unoptimized database port or automated patch latency represents a potential security exploit vector.", icon: Award },
    { title: "Governance Integrity", desc: "Translating loose system configurations into hardened, validated audit parameters matching ISACA standard audits.", icon: Compass }
  ];

  const journeySteps = [
    {
      year: "2024 - Present",
      title: "Senior Systems Engineer & IT Audit Analyst",
      org: "Apex Enterprise Solutions",
      desc: "Architecting zero-loss failovers, executing complex IT general control audits, and configuring centralized compliance networks.",
      icon: TrendingUp
    },
    {
      year: "2022 - 2024",
      title: "Database Administrator & Data Analyst",
      org: "Innova Tech Laboratories",
      desc: "Managed multi-terabyte SQL Server systems, engineered custom PowerShell automation scripts, and deployed Power BI telemetry dashboards.",
      icon: Server
    },
    {
      year: "2020 - 2024",
      title: "Academic Scholar (BS Computer Science)",
      org: "University of Illinois at Chicago",
      desc: "Graduated Summa Cum Laude (GPA 3.92/4.0). Conducted intensive laboratory research on secure federated learning algorithms.",
      icon: GraduationCap
    }
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900 transition-colors font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white">
            About Me & Career Journey
          </h2>
          <p className="mt-4 text-sm text-slate-500 font-medium">
            Bridging operational engineering and rigorous regulatory compliance.
          </p>
        </div>

        {/* Biography Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Bio Text Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white">
              Professional Biography
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {BIO.aboutText}
            </p>
            
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/55 border border-slate-100 dark:border-slate-800">
              <span className="text-xs font-bold text-navy-500 dark:text-sky-400 font-mono uppercase tracking-wider block mb-2">My Professional Mission</span>
              <p className="text-xs text-slate-500 dark:text-slate-400 italic leading-relaxed">
                "{BIO.mission}"
              </p>
            </div>

            {/* Core Values Dashboard */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {coreValues.map((v, i) => {
                const Icon = v.icon;
                return (
                  <div key={i} className="p-4 rounded-xl border border-slate-100 dark:border-slate-800 hover:shadow-sm transition-all bg-white dark:bg-slate-900">
                    <div className="h-8 w-8 rounded-lg bg-navy-500/10 text-navy-600 dark:text-sky-300 flex items-center justify-center mb-3">
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200">{v.title}</h4>
                    <p className="text-[10.5px] text-slate-400 dark:text-slate-500 mt-1.5 leading-relaxed">{v.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action Metrics & Career Timeline Column */}
          <div className="lg:col-span-5 space-y-10">
            
            {/* Recruiting Statistics Dashboard */}
            <div className="grid grid-cols-2 gap-4">
              {BIO.stats.map((stat, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100/60 dark:from-slate-800/40 dark:to-slate-900 border border-slate-100 dark:border-slate-800 text-center shadow-sm">
                  <div className="text-2xl sm:text-3xl font-display font-extrabold text-navy-600 dark:text-sky-400">
                    {stat.value}
                  </div>
                  <div className="mt-1.5 text-[10px] sm:text-[11px] font-semibold text-slate-500 dark:text-slate-400 font-mono uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Career Timeline */}
            <div className="space-y-6 text-left">
              <h4 className="text-xs font-bold font-mono text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                Career Progression Timeline
              </h4>
              <div className="relative border-l border-slate-200 dark:border-slate-800 ml-3.5 space-y-6">
                {journeySteps.map((step, idx) => {
                  const StepIcon = step.icon;
                  return (
                    <div key={idx} className="relative pl-7">
                      {/* Timeline Dot Icon */}
                      <span className="absolute -left-3.5 top-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-navy-500 dark:text-sky-400 shadow-sm">
                        <StepIcon className="h-3.5 w-3.5" />
                      </span>
                      <div className="space-y-1">
                        <span className="text-[10px] text-navy-500 dark:text-sky-400 font-bold font-mono tracking-wider">{step.year}</span>
                        <h5 className="text-xs font-bold text-slate-900 dark:text-white leading-tight">{step.title}</h5>
                        <p className="text-[10px] text-slate-400 font-medium">{step.org}</p>
                        <p className="text-[10.5px] text-slate-500 dark:text-slate-400 leading-normal pt-1">{step.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
