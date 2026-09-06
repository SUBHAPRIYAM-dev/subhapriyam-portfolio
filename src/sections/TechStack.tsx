import { useState } from "react";
import { technologiesData, type Technology } from "../data/technologies";
import { soundManager } from "../utils/sound";
import { Cpu, Server, Database, Cloud } from "lucide-react";

export function TechStack() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedTech, setSelectedTech] = useState<Technology>(technologiesData[0]);

  const categories = ["All", "Frontend", "Backend", "Database", "Cloud & DevOps"];

  const filteredTechs = activeCategory === "All"
    ? technologiesData
    : technologiesData.filter((t) => t.category === activeCategory);

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case "Frontend": return Cpu;
      case "Backend": return Server;
      case "Database": return Database;
      case "Cloud & DevOps": return Cloud;
      default: return Cpu;
    }
  };

  return (
    <section id="stack" className="relative min-h-screen py-16 sm:py-24 px-4 sm:px-6 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-cyan-400 font-bold tracking-widest">02 / STACK</span>
          <div className="h-[1px] w-12 bg-cyan-400/30" />
        </div>

        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight uppercase mb-8">
          TECHNOLOGY <span className="text-cyan-400">ECOSYSTEM</span>
        </h2>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                soundManager.playClick();
                setActiveCategory(cat);
              }}
              onMouseEnter={() => soundManager.playHover()}
              data-cursor="FILTER"
              className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full font-mono text-[11px] sm:text-xs transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-cyan-500 text-black font-bold shadow-[0_0_15px_rgba(56,189,248,0.4)]"
                  : "glass-panel border border-white/10 text-gray-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Tech Grid Matrix */}
          <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
            {filteredTechs.map((tech) => {
              const isSelected = selectedTech.name === tech.name;
              return (
                <div
                  key={tech.name}
                  onClick={() => {
                    soundManager.playClick();
                    setSelectedTech(tech);
                  }}
                  onMouseEnter={() => {
                    soundManager.playHover();
                  }}
                  data-cursor="INSPECT"
                  className={`p-3.5 sm:p-4 rounded-xl glass-card cursor-pointer border transition-all duration-300 flex flex-col justify-between h-24 sm:h-28 ${
                    isSelected
                      ? "border-cyan-400 bg-cyan-500/10 shadow-[0_0_20px_rgba(56,189,248,0.2)]"
                      : "border-white/10 hover:border-cyan-400/40"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] sm:text-[10px] text-cyan-400/70 uppercase truncate max-w-[80%]">
                      {tech.category.split(" ")[0]}
                    </span>
                    <span className={`w-2 h-2 rounded-full shrink-0 ${tech.featured ? "bg-cyan-400" : "bg-gray-600"}`} />
                  </div>
                  <div className="font-display font-bold text-xs sm:text-sm text-white group-hover:text-cyan-400 truncate">
                    {tech.name}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Detailed Inspector Panel */}
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-cyan-500/20 lg:sticky lg:top-28">
            <div className="flex items-center gap-3 mb-4">
              {(() => {
                const Icon = getCategoryIcon(selectedTech.category);
                return (
                  <div className="p-2.5 sm:p-3 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
                    <Icon size={22} />
                  </div>
                );
              })()}
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white">{selectedTech.name}</h3>
                <span className="font-mono text-xs text-cyan-400">{selectedTech.category}</span>
              </div>
            </div>

            <div className="mb-6">
              <span className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 mb-3">
                PROFICIENCY: {selectedTech.level}
              </span>
              <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                {selectedTech.description}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-gray-400">
              <span>STATUS: READY</span>
              <span className="text-cyan-400 font-bold">VERIFIED</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
