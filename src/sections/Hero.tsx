import { personalData } from "../data/personal";
import { soundManager } from "../utils/sound";
import { HeroPortrait } from "../components/ui/HeroPortrait";
import { ChevronDown, Sparkles, Terminal, ArrowUpRight } from "lucide-react";

export function Hero() {
  const techBadges = ["FULL STACK", "REACT", "NODE", "JAVA", "AWS", "KUBERNETES"];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 overflow-hidden"
    >
      {/* Floating HUD Technical Badges - Desktop */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <div className="absolute top-1/4 left-8 glass-panel px-3 py-1.5 rounded-full border border-cyan-500/20 text-[11px] font-mono text-cyan-300 flex items-center gap-2 animate-bounce-slow">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          SYS_STATUS: ONLINE
        </div>
        <div className="absolute bottom-1/4 right-8 glass-panel px-3 py-1.5 rounded-full border border-indigo-500/20 text-[11px] font-mono text-indigo-300 flex items-center gap-2">
          <Terminal size={12} />
          ENV: PRODUCTION
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Kinetic Typography & Copy */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Top Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass-panel border border-white/10 mb-6 max-w-full">
              <Sparkles size={14} className="text-cyan-400 shrink-0" />
              <span className="font-mono text-[10px] sm:text-xs text-gray-300 tracking-wider truncate">
                PORTFOLIO 2026 / FULL STACK ARCHITECTURE
              </span>
            </div>

            {/* Hero Name */}
            <h1 className="font-display text-4xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white uppercase leading-none mb-3 drop-shadow-2xl max-w-full break-words">
              <span className="bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent">
                {personalData.name.split(" ")[0]}
              </span>
            </h1>

            {/* Role Subtitle */}
            <div className="font-display text-xl sm:text-3xl lg:text-4xl font-bold tracking-widest text-cyan-400 uppercase mb-6">
              {personalData.role}
            </div>

            {/* Headline */}
            <p className="max-w-xl text-sm sm:text-lg text-gray-300 font-light leading-relaxed mb-8 px-2 lg:px-0">
              {personalData.headline}
            </p>

            {/* Floating Tech Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-2.5 max-w-xl mb-10">
              {techBadges.map((badge) => (
                <span
                  key={badge}
                  onMouseEnter={() => soundManager.playHover()}
                  data-cursor="STACK"
                  className="px-3 sm:px-3.5 py-1 rounded-full glass-panel border border-white/10 text-[10px] sm:text-xs font-mono text-gray-300 hover:border-cyan-400/50 hover:text-cyan-300 transition-all duration-300"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
              <a
                href="#projects"
                onClick={() => soundManager.playClick()}
                onMouseEnter={() => soundManager.playHover()}
                data-cursor="PROJECTS"
                className="px-6 py-3 rounded-full bg-cyan-500 text-black font-mono font-bold text-xs hover:bg-cyan-400 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(56,189,248,0.4)]"
              >
                EXPLORE PROJECTS <ArrowUpRight size={15} />
              </a>

              <a
                href="#contact"
                onClick={() => soundManager.playClick()}
                onMouseEnter={() => soundManager.playHover()}
                data-cursor="CONTACT"
                className="px-6 py-3 rounded-full glass-panel border border-white/10 font-mono text-xs text-gray-300 hover:text-white hover:border-cyan-400/50 transition-all"
              >
                LET'S TALK
              </a>
            </div>
          </div>

          {/* Right Column: Gen Z 3D Interactive Portrait */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <HeroPortrait
              imageSrc={personalData.avatarUrl}
              name={personalData.name}
            />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-12">
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
      </div>
    </section>
  );
}
