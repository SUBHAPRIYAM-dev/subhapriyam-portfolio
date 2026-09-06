import { soundManager } from "../utils/sound";
import { GithubIcon } from "../components/ui/SocialIcons";
import { GitCommit, GitFork, Star, ExternalLink, Code2 } from "lucide-react";

export function GithubSection() {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const generateContributionDays = () => {
    const days = [];
    for (let i = 0; i < 52 * 7; i++) {
      const intensity = (i * 7 + 3) % 5;
      days.push(intensity);
    }
    return days;
  };
  const contributionDays = generateContributionDays();

  const getIntensityColor = (level: number) => {
    switch (level) {
      case 0: return "bg-white/5 border border-white/5";
      case 1: return "bg-cyan-950/80 border border-cyan-800/30";
      case 2: return "bg-cyan-800/80 border border-cyan-700/40";
      case 3: return "bg-cyan-600 border border-cyan-500/50";
      case 4: return "bg-cyan-400 shadow-[0_0_8px_#38bdf8]";
      default: return "bg-white/5";
    }
  };

  const stats = [
    { label: "PRIMARY STACK", value: "React • TS • Java", icon: Code2 },
    { label: "DEVOPS & CLOUD", value: "Docker • K8s • AWS", icon: Star },
    { label: "CI/CD PIPELINES", value: "GitHub Actions", icon: GitCommit },
    { label: "ARCHITECTURE", value: "REST & Microservices", icon: GitFork },
  ];

  return (
    <section className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Tag */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-cyan-400 font-bold tracking-widest">05 / REPOSITORY ACTIVITY</span>
          <div className="h-[1px] w-12 bg-cyan-400/30" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight uppercase">
              ENGINEERING <span className="text-cyan-400">ACTIVITY</span>
            </h2>
            <p className="text-sm text-gray-400 font-mono mt-2">
              Continuous commit history, open-source repositories, and code metrics.
            </p>
          </div>

          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => soundManager.playHover()}
            onClick={() => soundManager.playClick()}
            data-cursor="GITHUB"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 px-6 py-3 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all shadow-[0_0_15px_rgba(56,189,248,0.2)]"
          >
            <GithubIcon size={16} /> VIEW GITHUB PROFILE <ExternalLink size={14} />
          </a>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="glass-panel p-6 rounded-2xl border border-white/10 flex items-center gap-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Icon size={20} />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-gray-400 uppercase block">{stat.label}</span>
                  <span className="font-display text-sm font-bold text-white">{stat.value}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* GitHub Contribution Heatmap Simulation */}
        <div className="glass-panel p-8 rounded-2xl border border-white/10 overflow-x-auto">
          <div className="flex items-center justify-between mb-6 min-w-[650px]">
            <span className="font-mono text-xs text-gray-300 flex items-center gap-2">
              <GitCommit size={16} className="text-cyan-400" />
              ANNUAL COMMIT ACTIVITY MATRIX
            </span>
            <div className="flex items-center gap-2 text-[10px] font-mono text-gray-400">
              <span>Less</span>
              {[0, 1, 2, 3, 4].map((lvl) => (
                <span key={lvl} className={`w-3 h-3 rounded-sm ${getIntensityColor(lvl)}`} />
              ))}
              <span>More</span>
            </div>
          </div>

          {/* Grid */}
          <div className="min-w-[650px]">
            <div className="flex justify-between font-mono text-[10px] text-gray-500 mb-2 px-1">
              {months.map((m) => (
                <span key={m}>{m}</span>
              ))}
            </div>
            <div className="grid grid-rows-7 grid-flow-col gap-1.5 justify-between">
              {contributionDays.map((level, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-sm transition-transform hover:scale-125 ${getIntensityColor(level)}`}
                  title={`Activity level ${level}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
