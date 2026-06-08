import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Briefcase, FileDown, ShieldCheck } from "lucide-react";

interface NavigationProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  openResumeModal: () => void;
}

export default function Navigation({ darkMode, toggleDarkMode, openResumeModal }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Certs", href: "#certifications" },
    { name: "Education", href: "#education" },
    { name: "Publications", href: "#publications" },
    { name: "Insights", href: "#blog" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 font-sans ${
        scrolled
          ? "bg-white/90 dark:bg-slate-900/90 shadow-md backdrop-blur-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo Branding */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <a href="#" className="flex items-center gap-2 group">
              <span className="h-8 w-8 rounded-lg bg-navy-500 flex items-center justify-center text-white font-display font-black text-sm shadow-md group-hover:bg-navy-600 transition-all">
                AC
              </span>
              <div className="flex flex-col">
                <span className="font-display font-bold text-[15px] leading-none text-slate-900 dark:text-white pb-0.5">
                  Alex Chen
                </span>
                <span className="text-[10px] text-navy-500 dark:text-sky-400 font-medium tracking-wide font-mono uppercase">
                  IT Audit & Systems
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Nav Actions */}
          <div className="hidden lg:flex items-center gap-7">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-600 hover:text-navy-500 dark:text-slate-300 dark:hover:text-sky-400 text-sm font-medium tracking-wide transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Separator */}
            <span className="h-5 w-px bg-slate-200 dark:bg-slate-800"></span>

            {/* Dark Mode, CV Button, Call to Action */}
            <div className="flex items-center gap-3">
              <button
                id="brightness-theme-toggle"
                onClick={toggleDarkMode}
                aria-label="Toggle structural light and dark mode colors"
                className="p-2 rounded-xl border border-slate-200 bg-white/50 text-slate-500 hover:bg-slate-50 hover:text-slate-700 dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-400 dark:hover:bg-slate-950 dark:hover:text-white transition-all cursor-pointer"
              >
                {darkMode ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
              </button>

              <button
                id="header-cv-download-btn"
                onClick={openResumeModal}
                className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl text-navy-600 bg-navy-50 dark:text-sky-300 dark:bg-sky-950/40 hover:bg-navy-100 dark:hover:bg-sky-900/30 transition-all border border-navy-200/50 dark:border-sky-900/40 cursor-pointer"
              >
                <FileDown className="h-4 w-4" />
                <span>Resume</span>
              </button>

              <a
                href="#contact"
                className="px-4 py-2 text-xs font-semibold rounded-xl text-white bg-navy-500 shadow-md hover:bg-navy-600 transition-all"
              >
                Hire Me
              </a>
            </div>
          </div>

          {/* Mobile Actions Container */}
          <div className="flex items-center gap-2.5 lg:hidden">
            <button
              id="brightness-theme-toggle-mobile"
              onClick={toggleDarkMode}
              className="p-2 rounded-xl border border-slate-200 bg-white/50 text-slate-500 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-400 transition-colors"
            >
              {darkMode ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
            </button>

            <button
              id="mobile-menu-btn"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl border border-slate-200 bg-white/50 text-slate-600 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-400 transition-colors"
            >
              {isOpen ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slideout Navigation */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-xl py-4 transition-all">
          <div className="px-4 space-y-2 text-center pb-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-slate-600 hover:text-navy-500 dark:text-slate-300 dark:hover:text-sky-400 text-sm font-medium tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="border-t border-slate-100 dark:border-slate-800 px-4 pt-3.5 flex flex-col gap-2">
            <button
              id="mobile-resume-download-trigger"
              onClick={() => {
                setIsOpen(false);
                openResumeModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-navy-600 bg-navy-50 border border-navy-200/50 text-sm font-semibold"
            >
              <FileDown className="h-4 w-4" />
              <span>Preview & Print Resume</span>
            </button>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-2.5 rounded-xl text-white bg-navy-500 hover:bg-navy-600 text-sm font-semibold shadow-md inline-block"
            >
              Connect Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
