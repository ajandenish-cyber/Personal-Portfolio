import { X, Printer, CheckCircle2, Award, ClipboardCheck } from "lucide-react";
import { BIO, WORK_EXPERIENCE, EDUCATION_TIMELINE, CERTIFICATIONS } from "../data";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto font-sans">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm" onClick={onClose}></div>

      {/* Main Container */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative w-full max-w-4xl bg-white text-slate-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] print:max-h-none print:shadow-none print:rounded-none">
          
          {/* Top Control Bar (Hidden from print) */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50 text-slate-800 print:hidden shrink-0">
            <div className="flex items-center gap-2">
              <ClipboardCheck className="h-5 w-5 text-navy-600" />
              <span className="font-display font-bold text-sm">ATS-Friendly Recruiter Resume</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                id="print-resume-btn"
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3.5 py-1.5 bg-navy-500 hover:bg-navy-600 text-white rounded-lg text-xs font-semibold shadow-md transition-all cursor-pointer"
              >
                <Printer className="h-4.5 w-4.5" />
                <span>Print or Save PDF</span>
              </button>
              <button
                id="close-resume-btn"
                onClick={onClose}
                className="p-1.5 hover:bg-slate-200 rounded-lg text-slate-500 transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Printable Layout Area */}
          <div id="resume-printable-area" className="flex-1 overflow-y-auto p-8 sm:p-12 space-y-8 print:overflow-visible print:p-0">
            
            {/* Resume Header */}
            <div className="border-b-2 border-slate-800 pb-5 text-center">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 font-display">
                {BIO.fullName}
              </h1>
              <p className="text-sm font-semibold text-navy-600 tracking-wider uppercase font-mono mt-1">
                {BIO.title}
              </p>
              <div className="flex justify-center gap-4 text-[11px] text-slate-500 font-mono mt-3 wrap flex-wrap">
                <span>Email: ayoengud@gmail.com</span>
                <span>•</span>
                <span>Location: Chicago, IL</span>
                <span>•</span>
                <span>Website: portfolios.design/alexchen</span>
              </div>
            </div>

            {/* Career Summary */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 font-mono">
                Professional Profile
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed text-left">
                {BIO.aboutText}
              </p>
            </div>

            {/* Core Competencies */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 font-mono">
                Core Competencies & Technical Stack
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-[11px] text-left">
                <div>
                  <h4 className="font-bold text-slate-800 mb-1">Systems Governance</h4>
                  <p className="text-slate-500 leading-normal">ITGC compliance, SOX 404 controls, COBIT framework, audits auditing templates.</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-1">Databases & Infrastructure</h4>
                  <p className="text-slate-500 leading-normal">PostgreSQL replication, Oracle SQL Server DBA tuning, query sharding, AWS Virtual VPC.</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-1">Systems Operations</h4>
                  <p className="text-slate-500 leading-normal">Ubuntu Enterprise server logs, Bash environment, PowerShell workflows, Active Directory.</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-1">Data & Compliance</h4>
                  <p className="text-slate-500 leading-normal">Power BI dashboards, Python (Pandas/NumPy), Good Clinical Practice (GCP), HIPAA audits.</p>
                </div>
              </div>
            </div>

            {/* Professional Experience */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 font-mono">
                Professional Experience
              </h3>
              <div className="space-y-5 text-left">
                {WORK_EXPERIENCE.map((exp, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline">
                      <h4 className="text-xs font-bold text-slate-900">
                        {exp.position} — <span className="font-semibold text-slate-600">{exp.organization}</span>
                      </h4>
                      <span className="text-[10px] text-slate-400 font-mono font-medium">{exp.duration}</span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-slate-600 text-[11px] leading-relaxed">
                      {exp.achievements.map((ach, aIdx) => (
                        <li key={aIdx} className="pl-1">
                          {ach} <span className="font-semibold text-navy-600">(Outcome: {exp.measurableOutcomes[aIdx]})</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Print block */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 font-mono">
                Key Professional Certifications
              </h3>
              <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-600 text-left">
                {CERTIFICATIONS.map((cert, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3 w-3 text-emerald-600 flex-shrink-0" />
                    <span>{cert.title} — <span className="text-slate-400">{cert.organization} ({cert.date})</span></span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Print block */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 font-mono">
                Education
              </h3>
              {EDUCATION_TIMELINE.map((edu, idx) => (
                <div key={idx} className="text-left space-y-1">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline">
                    <h4 className="text-xs font-bold text-slate-900">
                      {edu.degree} — <span className="font-semibold text-slate-600">{edu.institution}</span>
                    </h4>
                    <span className="text-[10px] text-slate-400 font-mono font-medium">{edu.duration}</span>
                  </div>
                  <p className="text-[10px] text-sky-700 font-semibold font-mono mt-0.5">GPA: {edu.gpa}</p>
                  <p className="text-[11px] text-slate-500 leading-normal">
                    <span className="font-bold text-slate-700">Relevant Coursework:</span> {edu.coursework.join(", ")}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* Footer Print warning */}
          <div className="px-6 py-3 border-t border-slate-100 bg-slate-50 text-[10px] text-slate-400 text-center font-mono print:hidden shrink-0">
            Note: Page structures utilize standard layout classes suitable for direct print spoolers.
          </div>
        </div>
      </div>
    </div>
  );
}
