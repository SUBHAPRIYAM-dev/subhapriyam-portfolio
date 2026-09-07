import { useState } from "react";
import { soundManager } from "../../utils/sound";
import { Sparkles, Terminal, Code2 } from "lucide-react";

interface HeroPortraitProps {
  imageSrc: string;
  name: string;
}

export function HeroPortrait({ imageSrc, name }: HeroPortraitProps) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    const centerX = box.width / 2;
    const centerY = box.height / 2;

    const rotateX = (centerY - y) / 12;
    const rotateY = (x - centerX) / 12;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div
      className="relative group perspective-1000 w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] mx-auto select-none"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => {
        setIsHovered(true);
        soundManager.playHover();
      }}
      onMouseLeave={handleMouseLeave}
      data-cursor="DEVELOPER"
    >
      {/* Outer Holographic Ambient Glow */}
      <div
        className={`absolute -inset-2 rounded-3xl bg-gradient-to-r from-cyan-500/30 via-indigo-500/30 to-emerald-500/30 blur-2xl transition-opacity duration-500 ${
          isHovered ? "opacity-100 scale-105" : "opacity-40 scale-100"
        }`}
      />

      {/* Main 3D Card Container */}
      <div
        className="relative rounded-3xl p-3 sm:p-4 glass-panel border border-cyan-500/30 shadow-[0_0_30px_rgba(56,189,248,0.15)] transition-transform duration-200 ease-out transform-gpu"
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(${
            isHovered ? 1.03 : 1
          }, ${isHovered ? 1.03 : 1}, 1)`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Cyber HUD Corner Badges */}
        <div className="absolute top-6 left-6 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-cyan-400/40 text-[10px] font-mono text-cyan-300 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>STATUS: ONLINE</span>
        </div>

        <div className="absolute bottom-6 right-6 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-indigo-400/40 text-[10px] font-mono text-indigo-300 shadow-lg">
          <Terminal size={11} className="text-cyan-400" />
          <span>FULL STACK</span>
        </div>

        {/* Image Frame Container */}
        <div className="relative rounded-2xl overflow-hidden aspect-[3/4] border border-white/10 bg-[#0c0d12]">
          {/* Laser Scanning Line Animation */}
          <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent z-20 animate-scan pointer-events-none opacity-80" />

          {/* Holographic Mesh Overlay */}
          <div className="absolute inset-0 bg-noise opacity-20 z-10 pointer-events-none" />

          {/* Profile Image */}
          <img
            src={imageSrc}
            alt={name}
            className={`w-full h-full object-cover object-center transition-all duration-700 filter ${
              isHovered
                ? "scale-105 brightness-110 contrast-105"
                : "scale-100 brightness-95 grayscale-[15%]"
            }`}
            loading="eager"
          />

          {/* Dark Gradient Overlay for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-transparent opacity-80 z-10" />

          {/* Bottom Card Title Overlay */}
          <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-col">
            <span className="font-mono text-[10px] text-cyan-400 font-semibold tracking-widest uppercase">
              {name}
            </span>
            <span className="font-display font-extrabold text-lg text-white tracking-wider">
              FULL STACK DEVELOPER
            </span>
          </div>
        </div>

        {/* Orbiting Floating 3D HUD Pills */}
        <div
          className="absolute -top-3 -right-3 z-30 px-3 py-1 rounded-xl bg-cyan-500 text-black font-mono font-extrabold text-[10px] shadow-[0_0_15px_#38bdf8] flex items-center gap-1.5 transition-transform duration-300"
          style={{ transform: "translateZ(30px)" }}
        >
          <Sparkles size={12} /> REACT & SPRING
        </div>

        <div
          className="absolute -bottom-3 -left-3 z-30 px-3 py-1 rounded-xl glass-panel border border-indigo-400/50 text-indigo-300 font-mono font-bold text-[10px] shadow-lg flex items-center gap-1.5 transition-transform duration-300"
          style={{ transform: "translateZ(25px)" }}
        >
          <Code2 size={12} className="text-cyan-400" /> CLOUD & DEVOPS
        </div>
      </div>
    </div>
  );
}
