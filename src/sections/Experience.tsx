import { experienceData } from "../data/experience";
import { soundManager } from "../utils/sound";
import { Briefcase, Cloud, Database, Code2, Milestone } from "lucide-react";

export function Experience() {
  const getIcon = (type: string) => {
    switch (type) {
      case "Development": return Code2;
      case "Cloud": return Cloud;
      case "Data": return Database;
      case "Milestone": return Milestone;
      default: return Briefcase;
    }
  };

  return (
    <section id="experience" className="relative min-h-screen py-24 px-6">
      <div className="max-w-5xl mx-auto w-full">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-cyan-400 font-bold tracking-widest">04 / EXPERIENCE</span>
          <div className="h-[1px] w-12 bg-cyan-400/30" />
        </div>

        <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight uppercase mb-16">
          DEVELOPER <span className="text-cyan-400">JOURNEY</span>
        </h2>

        {/* Vertical Connected Timeline */}
        <div className="relative pl-6 sm:pl-10 border-l border-cyan-500/30 space-y-12">
          {experienceData.map((item) => {
            const Icon = getIcon(item.type);
            return (
              <div
                key={item.year + item.role}
                onMouseEnter={() => soundManager.playHover()}
                className="relative group"
              >
                {/* Timeline Dot Node */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#070709] border-2 border-cyan-400 flex items-center justify-center group-hover:scale-125 group-hover:bg-cyan-400 transition-all duration-300 shadow-[0_0_10px_#38bdf8]">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:bg-black" />
                </div>

                {/* Timeline Content Card */}
                <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 group-hover:border-cyan-400/50 transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-lg font-extrabold text-cyan-400">
                        {item.year}
                      </span>
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
                        {item.period}
                      </span>
                    </div>
                    <div className="p-2 rounded-lg bg-white/5 text-gray-400">
                      <Icon size={16} />
                    </div>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                    {item.role}
                  </h3>
                  <span className="font-mono text-xs text-indigo-400 block mb-4">
                    FOCUS: {item.focus}
                  </span>

                  <p className="text-sm text-gray-300 font-light leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {item.keySkills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded text-[10px] font-mono bg-white/5 border border-white/10 text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
