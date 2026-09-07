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

    const rotateX = (centerY - y) / 8;
    const rotateY = (x - centerX) / 8;

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
      data-cursor="SUBHAPRIYAM"
    >
      {/* 3D Holographic Ambient Rings & Glowing Light Portal behind silhouette */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] rounded-full border border-cyan-400/40 animate-spin-slow shadow-[0_0_60px_rgba(56,189,248,0.3)]" />
        <div className="absolute w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] rounded-full border border-indigo-500/40 animate-reverse-spin" />
        <div className="absolute w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] rounded-full border border-emerald-400/30" />
        <div className="absolute w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] bg-cyan-500/10 blur-3xl rounded-full animate-pulse" />
      </div>

      {/* Main 3D Floating Transparent Silhouette Container - NO harsh square box background */}
      <div
        className="relative z-10 flex flex-col items-center transition-transform duration-200 ease-out transform-gpu"
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(${
            isHovered ? 1.05 : 1
          }, ${isHovered ? 1.05 : 1}, 1)`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Top Floating Cyber HUD Badge */}
        <div
          className="absolute -top-6 z-30 px-4 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-cyan-400/50 text-[10px] sm:text-xs font-mono text-cyan-300 shadow-[0_0_20px_rgba(56,189,248,0.4)] flex items-center gap-2 whitespace-nowrap"
          style={{ transform: "translateZ(40px)" }}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>{name.toUpperCase()} // 3D PORTRAIT</span>
        </div>

        {/* 3D Transparent Silhouette Cutout Image */}
        <div className="relative w-full aspect-[3/4] flex items-end justify-center drop-shadow-[0_20px_35px_rgba(56,189,248,0.3)]">
          {/* Laser Scanning Line Effect */}
          <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent z-20 animate-scan pointer-events-none opacity-80" />

          <img
            src={imageSrc}
            alt={name}
            className={`w-full h-full object-contain object-bottom transition-all duration-500 filter ${
              isHovered
                ? "brightness-110 contrast-110 drop-shadow-[0_0_30px_rgba(56,189,248,0.6)]"
                : "brightness-100 contrast-105 drop-shadow-[0_0_15px_rgba(56,189,248,0.3)]"
            }`}
            style={{
              transform: "translateZ(20px)",
            }}
          />

          {/* 3D Holographic Light Pedestal Base */}
          <div
            className="absolute bottom-0 w-3/4 h-8 bg-gradient-to-t from-cyan-500/40 via-cyan-400/10 to-transparent rounded-full blur-md border-t border-cyan-400/60"
            style={{ transform: "translateZ(10px) rotateX(75deg)" }}
          />
        </div>

        {/* Floating Technical Badge Bar at Base */}
        <div
          className="mt-2 px-4 py-2 rounded-2xl glass-panel border border-cyan-500/40 shadow-xl flex items-center justify-between gap-4 w-full"
          style={{ transform: "translateZ(30px)" }}
        >
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <Cpu size={15} />
            </div>
            <div>
              <span className="font-mono text-[9px] text-cyan-400 block uppercase font-bold">
                FULL STACK ARCHITECT
              </span>
              <span className="font-display text-xs font-bold text-white uppercase">
                REACT • NODE • JAVA
              </span>
            </div>
          </div>

          <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <Terminal size={15} />
          </div>
        </div>

        {/* Orbiting 3D Floating HUD Pill Widgets */}
        <div
          className="absolute -bottom-3 -right-3 z-30 px-3.5 py-1.5 rounded-xl bg-cyan-500 text-black font-mono font-extrabold text-[10px] shadow-[0_0_15px_#38bdf8] flex items-center gap-1.5 transition-transform duration-300"
          style={{ transform: "translateZ(45px)" }}
        >
          <Sparkles size={13} /> REACT & SPRING
        </div>

        <div
          className="absolute top-1/3 -left-5 z-30 px-3 py-1.5 rounded-xl glass-panel border border-indigo-400/50 text-indigo-300 font-mono font-bold text-[10px] shadow-lg flex items-center gap-1.5 transition-transform duration-300"
          style={{ transform: "translateZ(35px)" }}
        >
          <Code2 size={13} className="text-cyan-400" /> KUBERNETES
        </div>
      </div>
    </div>
  );
}
