import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import ExperienceWall from "./components/ExperienceWall";
import ProjectsShowcase from "./components/ProjectsShowcase";
import CertificationsWall from "./components/CertificationsWall";
import EducationSection from "./components/EducationSection";
import TestimonialsCarousel from "./components/TestimonialsCarousel";
import ResearchPublications from "./components/ResearchPublications";
import BlogInsights from "./components/BlogInsights";
import AchievementsGrid from "./components/AchievementsGrid";
import ContactForm from "./components/ContactForm";
import AIChatbot from "./components/AIChatbot";
import ResumeModal from "./components/ResumeModal";

import { ShieldCheck, ArrowUp, Briefcase } from "lucide-react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll height to show back-to-top button
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300">
      
      {/* 1. Header Navigation */}
      <Navigation
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        openResumeModal={() => setResumeOpen(true)}
      />

      <main className="space-y-0.5">
        
        {/* 2. Hero Section */}
        <Hero openResumeModal={() => setResumeOpen(true)} />

        {/* 3. About Me & Timeline */}
        <About />

        {/* 4. Skills & Competencies Mapping */}
        <Skills />

        {/* 5. Professional Experience & Metrics */}
        <ExperienceWall />

        {/* 6. Projects Bento Showcase */}
        <ProjectsShowcase />

        {/* 7. Certifications & Verifications */}
        <CertificationsWall />

        {/* 8. Education & course outlines */}
        <EducationSection />

        {/* 9. Endorsements carousel */}
        <TestimonialsCarousel />

        {/* 10. Research Papers & abstracts */}
        <ResearchPublications />

        {/* 11. Blog & Insights */}
        <BlogInsights />

        {/* 12. Wider Impact & Achievements */}
        <AchievementsGrid />

        {/* 13. Contact Portal & appointment schedulers */}
        <ContactForm />

      </main>

      {/* Corporate Footers */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="font-display font-bold text-lg text-white">Alex Chen</h4>
            <p className="text-xs text-slate-500 font-mono mt-1">IT Auditor, DBA & SysAdmin Expert</p>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-500 font-mono font-bold uppercase tracking-wider">
            <ShieldCheck className="h-4.5 w-4.5 text-emerald-500 animate-pulse" />
            <span>Standard SSL Secured • UIC Academic Alliance</span>
          </div>
          <div className="text-[11px] text-slate-600 font-mono">
            &copy; {new Date().getFullYear()} Alex Chen. All Rights Reserved.
          </div>
        </div>
      </footer>

      {/* Floating AI Representative Chatbot */}
      <AIChatbot />

      {/* Full printable ATS Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />

      {/* Back to top scroll shortcut button */}
      {showScrollTop && (
        <button
          id="scroll-to-top-btn"
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-40 p-3 h-11 w-11 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Back to top"
        >
          <ArrowUp className="h-4.5 w-4.5" />
        </button>
      )}

    </div>
  );
}
