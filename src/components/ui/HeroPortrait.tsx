import { useState } from "react";
import { soundManager } from "../../utils/sound";
import { Sparkles, Terminal, Code2, Cpu } from "lucide-react";

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

    const rotateX = (centerY - y) / 10;
    const rotateY = (x - centerX) / 10;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div
      className="relative group perspective-1000 w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[400px] mx-auto select-none"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => {
        setIsHovered(true);
        soundManager.playHover();
      }}
      onMouseLeave={handleMouseLeave}
      data-cursor="SUBHAPRIYAM"
    >
      {/* 3D Holographic Neon Rings behind Portrait */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] rounded-full border border-cyan-400/30 animate-spin-slow shadow-[0_0_50px_rgba(56,189,248,0.2)]" />
        <div className="absolute w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] rounded-full border border-indigo-500/30 animate-reverse-spin" />
        <div className="absolute w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] rounded-full border border-emerald-400/20" />
      </div>

      {/* Main Interactive 3D Holographic Card */}
      <div
        className="relative z-10 transition-transform duration-200 ease-out transform-gpu"
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(${
            isHovered ? 1.04 : 1
          }, ${isHovered ? 1.04 : 1}, 1)`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Top Floating Cyber Badge */}
        <div
          className="absolute -top-4 left-1/2 -translate-x-1/2 z-30 px-4 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-cyan-400/50 text-[10px] sm:text-xs font-mono text-cyan-300 shadow-[0_0_15px_rgba(56,189,248,0.3)] flex items-center gap-2 whitespace-nowrap"
          style={{ transform: "translateZ(35px) translateX(-50%)" }}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>SUBHAPRIYAM DASH // DEV</span>
        </div>

        {/* Holographic Portrait Container with Radial Background Fade Mask */}
        <div className="relative rounded-3xl overflow-hidden p-2 bg-gradient-to-b from-cyan-500/20 via-indigo-500/10 to-transparent border border-cyan-500/30 shadow-[0_0_40px_rgba(56,189,248,0.2)]">
          {/* Scanning Beam Animation */}
          <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent z-20 animate-scan pointer-events-none" />

          {/* Masked Image Frame - Soft Masking to remove boxy background feeling */}
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#0a0c10]">
            <img
              src={imageSrc}
              alt={name}
              className={`w-full h-full object-cover object-top transition-all duration-700 ${
                isHovered
                  ? "scale-105 contrast-110 brightness-105"
                  : "scale-100 contrast-100 brightness-95"
              }`}
              style={{
                // Mask edges so the photo merges seamlessly into the 3D dark theme
                maskImage: "radial-gradient(circle at 50% 45%, black 60%, transparent 100%)",
                WebkitMaskImage: "radial-gradient(circle at 50% 45%, black 60%, transparent 100%)",
              }}
            />

            {/* Cyan/Indigo Neon Holographic Glitch Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-cyan-950/20 to-transparent opacity-90 z-10 pointer-events-none" />
          </div>

          {/* Card Footprint Info */}
          <div className="p-4 flex items-center justify-between z-20 relative">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Cpu size={16} />
              </div>
              <div>
                <span className="font-mono text-[9px] text-cyan-400 block uppercase font-bold">
                  FULL STACK ENGINEER
                </span>
                <span className="font-display text-xs font-bold text-white uppercase">
                  REACT • NODE • JAVA
                </span>
              </div>
            </div>

            <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <Terminal size={16} />
            </div>
          </div>
        </div>

        {/* Orbiting Floating 3D HUD Widgets */}
        <div
          className="absolute -bottom-3 -right-2 z-30 px-3.5 py-1.5 rounded-xl bg-cyan-500 text-black font-mono font-extrabold text-[10px] shadow-[0_0_15px_#38bdf8] flex items-center gap-1.5 transition-transform duration-300"
          style={{ transform: "translateZ(30px)" }}
        >
          <Sparkles size={13} /> REACT & SPRING
        </div>

        <div
          className="absolute top-1/3 -left-4 z-30 px-3 py-1 rounded-xl glass-panel border border-indigo-400/50 text-indigo-300 font-mono font-bold text-[10px] shadow-lg flex items-center gap-1.5 transition-transform duration-300"
          style={{ transform: "translateZ(25px)" }}
        >
          <Code2 size={12} className="text-cyan-400" /> KUBERNETES
        </div>
      </div>
    </div>
  );
}
