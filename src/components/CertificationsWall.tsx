import { CERTIFICATIONS } from "../data";
import { Award, CheckCircle, ShieldAlert, BookOpen, ExternalLink } from "lucide-react";

export default function CertificationsWall() {
  return (
    <section id="certifications" className="py-24 bg-white dark:bg-slate-900 transition-colors font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white">
            Professional Certifications & Badges
          </h2>
          <p className="mt-4 text-sm text-slate-500 font-medium">
            Verifiable evidence of operational competence, research compliance, and corporate systems governance parameters.
          </p>
        </div>

        {/* Certifications Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {CERTIFICATIONS.map((cert, idx) => {
            return (
              <div
                key={idx}
                className="group relative flex items-start gap-4 p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/80 hover:border-navy-200 hover:shadow-md transition-all text-left"
              >
                {/* Visual Category Badge */}
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-navy-500/10 text-navy-600 dark:text-sky-300 flex items-center justify-center shrink-0">
                  <Award className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>

                {/* Info Text */}
                <div className="space-y-1.5 flex-1 pr-4">
                  <span className="text-[9px] font-bold font-mono text-navy-500 dark:text-sky-400 uppercase tracking-widest block">
                    {cert.category} Framework
                  </span>
                  <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white leading-snug">
                    {cert.title}
                  </h3>
                  <div className="flex flex-flow items-center gap-2 text-[10px] text-slate-400 font-medium">
                    <span>{cert.organization}</span>
                    <span>•</span>
                    <span>{cert.date}</span>
                  </div>
                </div>

                {/* Verification Trigger action */}
                {cert.verificationLink && (
                  <a
                    href={cert.verificationLink}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 hover:text-navy-500 dark:hover:bg-slate-800 dark:hover:text-white transition-all cursor-pointer"
                    title="Verify academic certificate alignment"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}

              </div>
            );
          })}
        </div>

        {/* Audit Compliance Footer */}
        <div className="mt-12 text-center text-[11px] text-slate-400 font-mono">
          All external credentials verify directly against university databases and global certifying bodies.
        </div>

      </div>
    </section>
  );
}
