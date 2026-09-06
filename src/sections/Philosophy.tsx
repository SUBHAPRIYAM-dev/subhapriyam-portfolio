import { personalData } from "../data/personal";
import { soundManager } from "../utils/sound";
import { ShieldCheck, Cpu, Zap, Layers, RefreshCw, Sparkles } from "lucide-react";

export function Philosophy() {
  const icons = [Layers, Zap, Cpu, ShieldCheck, RefreshCw, Sparkles];

  return (
    <section className="relative min-h-screen py-24 px-6 flex items-center">
      <div className="max-w-7xl mx-auto w-full text-center">
        {/* Header Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-cyan-500/20 mb-8">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="font-mono text-xs text-cyan-300 tracking-widest uppercase">
            ENGINEERING PHILOSOPHY
          </span>
        </div>

        {/* Large Typography Statement */}
        <h2 className="font-display text-4xl sm:text-6xl lg:text-8xl font-extrabold text-white uppercase tracking-tight leading-none mb-6">
          I DON'T JUST WRITE CODE.
        </h2>
        <div className="font-display text-4xl sm:text-6xl lg:text-8xl font-extrabold text-cyan-400 uppercase tracking-tight leading-none mb-16">
          I DESIGN SYSTEMS.
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {personalData.philosophies.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={item.title}
                onMouseEnter={() => soundManager.playHover()}
                className="glass-card p-8 rounded-2xl border border-white/10 hover:border-cyan-400/40 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:scale-110 transition-transform">
                    <Icon size={22} />
                  </div>
                  <span className="font-mono text-xs text-gray-500">PILLAR 0{idx + 1}</span>
                </div>

                <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-300 font-mono leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
