import { motion } from "motion/react";
import { ArrowRight, FileText, BadgeCheck, ShieldAlert, Cpu, Terminal, Database } from "lucide-react";
import { BIO } from "../data";

interface HeroProps {
  openResumeModal: () => void;
}

export default function Hero({ openResumeModal }: HeroProps) {
  const floatingTags = [
    { text: "ITGC Audit", icon: BadgeCheck, color: "text-emerald-500", bg: "bg-emerald-500/10" },
    { text: "Cybersecurity", icon: ShieldAlert, color: "text-rose-500", bg: "bg-rose-500/10" },
    { text: "SQL Server / Postgres DBA", icon: Database, color: "text-amber-500", bg: "bg-amber-500/10" },
    { text: "Linux SysAdmin", icon: Terminal, color: "text-sky-500", bg: "bg-sky-500/10" },
    { text: "Python Automation", icon: Cpu, color: "text-violet-500", bg: "bg-violet-500/10" }
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-slate-50 dark:bg-slate-950 font-sans transition-colors">
      
      {/* Dynamic Animated Grid Mesh */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35 dark:opacity-25" />

      {/* Radiant Glowing Background Spheres */}
      <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-navy-400/15 dark:bg-navy-700/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-sky-400/10 dark:bg-sky-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        
        {/* Verification Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-200/60 bg-emerald-50 text-emerald-800 dark:border-emerald-950/40 dark:bg-emerald-950/20 dark:text-emerald-300 text-[11.5px] font-semibold tracking-wide uppercase mb-6"
        >
          <BadgeCheck className="h-4 w-4" />
          <span>Active Candidate • Fully Verified Certifications</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6.5xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight max-w-4xl mx-auto"
        >
          {BIO.headline}
        </motion.h1>

        {/* Subheading Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-6 text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 max-w-2.5xl mx-auto font-medium"
        >
          {BIO.subheading}
        </motion.p>

        {/* CTA Actions Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4.5"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto px-7 py-4 text-xs font-bold uppercase tracking-wider rounded-2xl text-white bg-navy-500 hover:bg-navy-600 shadow-lg text-center transition-all group shrink-0"
          >
            <span>Book Interview Call</span>
            <ArrowRight className="inline-block ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <button
            id="hero-resume-trigger"
            onClick={openResumeModal}
            className="w-full sm:w-auto px-7 py-4 text-xs font-bold uppercase tracking-wider rounded-2xl text-slate-800 bg-white hover:bg-slate-100 dark:text-white dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 shadow-md text-center transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <FileText className="h-4 w-4 text-navy-500" />
            <span>Download Certified CV (PDF)</span>
          </button>
        </motion.div>

        {/* Dynamic Tag Particle Loop Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 border-t border-slate-200/60 dark:border-slate-800/60 pt-10"
        >
          <p className="text-[10px] sm:text-xs font-mono font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase">
            Validated Enterprise Competencies
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3 sm:gap-4.5">
            {floatingTags.map((tag, idx) => {
              const TagIcon = tag.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold ${tag.bg} ${tag.color} border border-slate-200/10 shadow-sm`}
                >
                  <TagIcon className="h-4 w-4" />
                  <span>{tag.text}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
