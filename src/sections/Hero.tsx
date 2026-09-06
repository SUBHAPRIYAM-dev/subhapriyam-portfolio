import { personalData } from "../data/personal";
import { soundManager } from "../utils/sound";
import { ChevronDown, Sparkles, Terminal } from "lucide-react";

export function Hero() {
  const techBadges = ["FULL STACK", "REACT", "NODE", "JAVA", "AWS", "KUBERNETES"];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 overflow-hidden"
    >
      {/* Floating HUD Technical Badges - Hidden on mobile, active on desktop */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <div className="absolute top-1/4 left-12 glass-panel px-3 py-1.5 rounded-full border border-cyan-500/20 text-[11px] font-mono text-cyan-300 flex items-center gap-2 animate-bounce-slow">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          SYS_STATUS: ONLINE
        </div>
        <div className="absolute bottom-1/3 right-12 glass-panel px-3 py-1.5 rounded-full border border-indigo-500/20 text-[11px] font-mono text-indigo-300 flex items-center gap-2">
          <Terminal size={12} />
          ENV: PRODUCTION
        </div>
      </div>

      <div className="max-w-6xl mx-auto text-center z-10 flex flex-col items-center w-full">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass-panel border border-white/10 mb-6 sm:mb-8 max-w-full">
          <Sparkles size={14} className="text-cyan-400 shrink-0" />
          <span className="font-mono text-[10px] sm:text-xs text-gray-300 tracking-wider truncate">
            PORTFOLIO 2026 / FULL STACK ARCHITECTURE
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="font-display text-4xl sm:text-7xl lg:text-9xl font-extrabold tracking-tight text-white uppercase leading-none mb-3 sm:mb-4 drop-shadow-2xl max-w-full break-words">
          <span className="bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent">
            {personalData.name.split(" ")[0]}
          </span>
        </h1>

        <div className="font-display text-lg sm:text-3xl lg:text-5xl font-bold tracking-widest text-cyan-400 uppercase mb-6 sm:mb-8">
          {personalData.role}
        </div>

        {/* Hero Description */}
        <p className="max-w-2xl text-sm sm:text-lg text-gray-300 font-light leading-relaxed mb-8 sm:mb-12 px-2">
          {personalData.headline}
        </p>

        {/* Tech HUD Floating Tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-3xl mb-12 sm:mb-16">
          {techBadges.map((badge) => (
            <span
              key={badge}
              onMouseEnter={() => soundManager.playHover()}
              data-cursor="STACK"
              className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full glass-panel border border-white/10 text-[10px] sm:text-xs font-mono text-gray-300 hover:border-cyan-400/50 hover:text-cyan-300 transition-all duration-300"
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Scroll Indicator */}
        <a
          href="#about"
          onClick={() => soundManager.playClick()}
          className="flex flex-col items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors group cursor-pointer"
          data-cursor="SCROLL"
        >
          <span className="font-mono text-[9px] sm:text-[10px] tracking-widest uppercase text-gray-500 group-hover:text-cyan-400">
            SCROLL TO EXPLORE
          </span>
          <ChevronDown size={18} className="animate-bounce text-cyan-400" />
        </a>
      </div>
    </section>
  );
}
