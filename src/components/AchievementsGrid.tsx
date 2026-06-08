import { ACHIEVEMENTS } from "../data";
import { Award, Compass, Heart, Users, Star } from "lucide-react";

export default function AchievementsGrid() {
  
  const getIcon = (cat: string) => {
    switch (cat) {
      case "Awards":
        return <Award className="h-5.5 w-5.5 text-amber-500" />;
      case "Scholarships":
        return <Star className="h-5.5 w-5.5 text-sky-400" />;
      case "Leadership":
        return <Compass className="h-5.5 w-5.5 text-indigo-500" />;
      case "Community Impact":
      case "Volunteer":
        return <Heart className="h-5.5 w-5.5 text-rose-500" />;
      default:
        return <Users className="h-5.5 w-5.5 text-navy-500" />;
    }
  };

  return (
    <section id="achievements" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white">
            Wider Impact & Achievements
          </h2>
          <p className="mt-4 text-sm text-slate-500 font-medium">
            Review merit-based research awards, governance scholarships, volunteer projects, and local community leadership achievements.
          </p>
        </div>

        {/* Achievements Card Deck */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6.5xl mx-auto text-left">
          {ACHIEVEMENTS.map((ach, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/80 hover:border-navy-200/50 shadow-sm hover:shadow-md transition-all h-full"
            >
              
              {/* Category Icon and Header */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center">
                    {getIcon(ach.category)}
                  </div>
                  <span className="text-[10px] font-bold font-mono text-slate-400 dark:text-slate-500 uppercase tracking-widest">{ach.year}</span>
                </div>

                <div className="space-y-1.5">
                  <span className="text-[9px] font-bold font-mono text-navy-500 dark:text-sky-400 uppercase tracking-widest block">
                    {ach.category} Block
                  </span>
                  <h3 className="text-xs sm:text-sm font-extrabold leading-snug text-slate-950 dark:text-white group-hover:text-navy-500 dark:group-hover:text-sky-300 transition-colors">
                    {ach.title}
                  </h3>
                  <p className="text-[10px] text-slate-400 font-semibold">{ach.organization}</p>
                </div>
              </div>

              {/* Description summary */}
              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 shrink-0">
                {ach.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
