import { personalData } from "../data/personal";
import { soundManager } from "../utils/sound";
import { Code, Database, Cloud, Cpu, Server, Layers, CheckCircle2 } from "lucide-react";

export function About() {
  const capabilityCards = [
    { title: "FRONTEND ARCHITECTURE", icon: Code, desc: "React, TypeScript, Vite, Angular, Responsive UI, Micro-animations" },
    { title: "BACKEND APIS", icon: Server, desc: "Node.js, Express.js, Java, Spring Boot, REST APIs, Authentication" },
    { title: "DATABASES", icon: Database, desc: "MySQL, MongoDB, Relational Schema Design, Hibernate JPA, Query Tuning" },
    { title: "CLOUD & DEVOPS", icon: Cloud, desc: "AWS, AWS EKS, Amazon ECR, Docker Containers, Kubernetes Orchestration" },
    { title: "AUTOMATION", icon: Cpu, desc: "GitHub Actions CI/CD, Automated Build & Test Pipelines" },
    { title: "SYSTEM DESIGN", icon: Layers, desc: "Scalable Microservices, Decoupled Architecture, Performance & Security" },
  ];

  return (
    <section id="about" className="relative min-h-screen py-20 sm:py-24 px-4 sm:px-6 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Counter & Tag */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-cyan-400 font-bold tracking-widest">01 / ABOUT</span>
          <div className="h-[1px] w-12 bg-cyan-400/30" />
        </div>

        {/* Section Title */}
        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight uppercase mb-12">
          I BUILD <span className="text-cyan-400">DIGITAL SYSTEMS</span>
        </h2>

        {/* Profile Feature Card */}
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-cyan-500/20 mb-16 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Avatar Circle Frame */}
            <div className="relative shrink-0 w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-cyan-400/50 p-1 shadow-[0_0_20px_rgba(56,189,248,0.25)]">
              <img
                src={personalData.avatarUrl}
                alt={personalData.name}
                className="w-full h-full object-cover object-center rounded-xl filter contrast-105"
              />
              <span className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-emerald-400 border-2 border-black animate-pulse" />
            </div>

            {/* Statement Quote */}
            <div className="flex-1 text-center md:text-left">
              <p className="font-display text-lg sm:text-2xl lg:text-3xl font-bold text-gray-100 leading-snug mb-4">
                "{personalData.aboutStatement}"
              </p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                <span className="text-xs sm:text-sm text-cyan-400 font-mono font-bold">
                  — Subhapriyam Dash, Full Stack Developer
                </span>
                <span className="px-3 py-1 rounded-full text-[10px] font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 flex items-center gap-1.5">
                  <CheckCircle2 size={12} className="text-cyan-400" /> VERIFIED CREATOR
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {capabilityCards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                onMouseEnter={() => soundManager.playHover()}
                data-cursor="CAPABILITY"
                className="glass-card p-6 rounded-2xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:scale-110 transition-transform">
                      <Icon size={22} />
                    </div>
                    <span className="font-mono text-xs text-gray-500">0{idx + 1}</span>
                  </div>
                  <h3 className="font-display text-base sm:text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed font-mono">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
