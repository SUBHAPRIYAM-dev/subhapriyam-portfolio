import { personalData } from "../data/personal";
import { soundManager } from "../utils/sound";
import { Code, Database, Cloud, Cpu, Server, Layers } from "lucide-react";

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
    <section id="about" className="relative min-h-screen py-24 px-6 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Counter & Tag */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-cyan-400 font-bold tracking-widest">01 / ABOUT</span>
          <div className="h-[1px] w-12 bg-cyan-400/30" />
        </div>

        {/* Section Title */}
        <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight uppercase mb-8">
          I BUILD <span className="text-cyan-400">DIGITAL SYSTEMS</span>
        </h2>

        {/* Statement Quote */}
        <div className="glass-panel p-8 sm:p-12 rounded-2xl border-l-4 border-l-cyan-400 mb-16 relative overflow-hidden">
          <p className="font-display text-xl sm:text-3xl font-bold text-gray-100 leading-snug">
            "{personalData.aboutStatement}"
          </p>
          <p className="mt-4 text-sm text-gray-400 font-mono">
            — Subhapriyam Dash, Full Stack Developer
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilityCards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                onMouseEnter={() => soundManager.playHover()}
                data-cursor="CAPABILITY"
                className="glass-card p-6 rounded-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:scale-110 transition-transform">
                      <Icon size={22} />
                    </div>
                    <span className="font-mono text-xs text-gray-500">0{idx + 1}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
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
