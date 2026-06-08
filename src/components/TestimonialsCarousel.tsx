import { useState } from "react";
import { TESTIMONIALS } from "../data";
import { Quote, Star, ArrowLeft, ArrowRight, ShieldCheck } from "lucide-react";

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const activeReview = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-slate-900 transition-colors font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white">
            References & Endorsements
          </h2>
          <p className="mt-4 text-sm text-slate-500 font-medium">
            Read key testimonials and references from supervisors, academic principal investigators, and enterprise colleagues.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto relative px-4">
          <div className="relative overflow-hidden p-8 sm:p-12 rounded-3xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/80 text-left space-y-6 shadow-md transition-all">
            
            {/* Quote Icon Overlay */}
            <Quote className="absolute right-8 top-8 text-slate-200/50 dark:text-slate-700/30 h-16 w-16 pointer-events-none" />

            {/* Ratings Bar */}
            <div className="flex items-center gap-1">
              {[...Array(activeReview.rating)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
              <span className="text-[10px] text-slate-400 font-mono font-bold uppercase ml-2">Verified Validation</span>
            </div>

            {/* Quote Text */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 italic leading-relaxed font-medium">
              "{activeReview.quote}"
            </p>

            {/* Author Credits Block */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-6 border-t border-slate-200/50 dark:border-slate-705/30">
              <div>
                <h4 className="text-sm font-extrabold text-slate-900 dark:text-white">
                  {activeReview.author}
                </h4>
                <p className="text-xs text-slate-400 font-medium">
                  {activeReview.relationship}
                </p>
              </div>

              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-bold font-mono text-emerald-600 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-950/20 uppercase tracking-widest border border-emerald-100/40 dark:border-emerald-950/20">
                <ShieldCheck className="h-3.5 w-3.5" />
                <span>{activeReview.roleType} Reference</span>
              </span>
            </div>

          </div>

          {/* Nav buttons floating left/right */}
          <div className="flex justify-center gap-3.5 mt-8">
            <button
              id="prev-testimonial-btn"
              onClick={prevSlide}
              className="p-3.5 rounded-full border border-slate-200 bg-white shadow-sm hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-950 text-slate-600 dark:text-slate-300 transition-all cursor-pointer"
              aria-label="Previous endorsement slide"
            >
              <ArrowLeft className="h-4.5 w-4.5" />
            </button>
            <button
              id="next-testimonial-btn"
              onClick={nextSlide}
              className="p-3.5 rounded-full border border-slate-200 bg-white shadow-sm hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-950 text-slate-600 dark:text-slate-300 transition-all cursor-pointer"
              aria-label="Next endorsement slide"
            >
              <ArrowRight className="h-4.5 w-4.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
