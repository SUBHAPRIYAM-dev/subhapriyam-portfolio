import { useState } from "react";
import { projectsData, type Project } from "../data/projects";
import { soundManager } from "../utils/sound";
import { Modal } from "../components/ui/Modal";
import { GithubIcon } from "../components/ui/SocialIcons";
import { ExternalLink, ArrowUpRight, CheckCircle2, Terminal } from "lucide-react";

export function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative min-h-screen py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-cyan-400 font-bold tracking-widest">03 / WORK</span>
          <div className="h-[1px] w-12 bg-cyan-400/30" />
        </div>

        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight uppercase mb-12 sm:mb-16">
          FEATURED <span className="text-cyan-400">ENGINEERING PROJECTS</span>
        </h2>

        {/* Projects Showcase Cards */}
        <div className="flex flex-col gap-12 sm:gap-20">
          {projectsData.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={project.id}
                onMouseEnter={() => soundManager.playHover()}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center glass-panel p-6 sm:p-12 rounded-2xl sm:rounded-3xl border border-white/10 hover:border-cyan-400/40 transition-all duration-500 group`}
              >
                {/* Browser Mockup / Graphic Display */}
                <div
                  className={`lg:col-span-7 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  } relative overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 bg-[#0d0e12] p-3 sm:p-4 group-hover:border-cyan-500/30 transition-all`}
                >
                  {/* Browser Bar */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-2 sm:pb-3 mb-3 sm:mb-4">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500/80" />
                      <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500/80" />
                      <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="font-mono text-[9px] sm:text-[11px] text-gray-500 flex items-center gap-1.5 px-2.5 py-0.5 sm:py-1 rounded bg-black/40 border border-white/5 truncate max-w-[200px] sm:max-w-none">
                      <Terminal size={10} className="text-cyan-400 shrink-0" />
                      <span className="truncate">https://{project.id}.subhapriyam.dev</span>
                    </div>
                  </div>

                  {/* Dark Synthetic Architecture Preview Canvas */}
                  <div className="relative h-52 sm:h-80 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#12141a] via-[#090b0e] to-[#070709] border border-white/5 p-4 sm:p-6 flex flex-col justify-between overflow-hidden">
                    <div className="flex justify-between items-start">
                      <span className="font-mono text-3xl sm:text-4xl font-extrabold text-white/10">
                        {project.number}
                      </span>
                      <span
                        className="px-2.5 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-mono border truncate max-w-[160px]"
                        style={{
                          borderColor: `${project.accentColor}50`,
                          color: project.accentColor,
                          backgroundColor: `${project.accentColor}10`,
                        }}
                      >
                        {project.category}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-display text-xl sm:text-2xl font-extrabold text-white mb-1.5 group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-gray-400 font-mono line-clamp-2">
                        {project.shortDescription}
                      </p>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded text-[9px] sm:text-[10px] font-mono bg-white/5 border border-white/10 text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Details Column */}
                <div className={`lg:col-span-5 ${isEven ? "lg:order-2" : "lg:order-1"} flex flex-col justify-between`}>
                  <div>
                    <span className="font-mono text-xs text-cyan-400 font-bold tracking-widest block mb-1 sm:mb-2">
                      CASE STUDY {project.number}
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed mb-4 sm:mb-6">
                      {project.fullDescription}
                    </p>

                    <div className="mb-6 sm:mb-8">
                      <span className="font-mono text-[11px] sm:text-xs text-gray-400 block mb-2 sm:mb-3 font-semibold uppercase">
                        Key Engineering Highlights:
                      </span>
                      <ul className="space-y-1.5 sm:space-y-2">
                        {project.highlights.map((highlight) => (
                          <li key={highlight} className="flex items-start gap-2 text-[11px] sm:text-xs font-mono text-gray-300">
                            <CheckCircle2 size={13} className="text-cyan-400 shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
                    <button
                      onClick={() => {
                        soundManager.playClick();
                        setActiveProject(project);
                      }}
                      onMouseEnter={() => soundManager.playHover()}
                      data-cursor="CASE STUDY"
                      className="px-5 sm:px-6 py-2.5 rounded-full bg-cyan-500 text-black font-mono font-bold text-xs hover:bg-cyan-400 transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(56,189,248,0.3)]"
                    >
                      CASE STUDY <ArrowUpRight size={14} />
                    </button>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        onMouseEnter={() => soundManager.playHover()}
                        data-cursor="GITHUB"
                        className="p-2.5 rounded-full glass-panel border border-white/10 text-gray-300 hover:text-white hover:border-cyan-400 transition-colors"
                        title="View Source Repository"
                      >
                        <GithubIcon size={16} />
                      </a>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        onMouseEnter={() => soundManager.playHover()}
                        data-cursor="DEMO"
                        className="p-2.5 rounded-full glass-panel border border-white/10 text-gray-300 hover:text-white hover:border-cyan-400 transition-colors"
                        title="View Live Demo"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Study Detailed Modal */}
      {activeProject && (
        <Modal
          isOpen={!!activeProject}
          onClose={() => setActiveProject(null)}
          title={`Case Study: ${activeProject.title}`}
        >
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h4 className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-2">Project Overview</h4>
              <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-light">{activeProject.fullDescription}</p>
            </div>

            <div className="glass-panel p-4 sm:p-6 rounded-xl border border-cyan-500/20">
              <h4 className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-2">System Architecture</h4>
              <p className="text-xs font-mono text-gray-300 leading-relaxed">{activeProject.architectureOverview}</p>
            </div>

            <div>
              <h4 className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-3">Core Features & Capabilities</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeProject.features.map((feat) => (
                  <div key={feat} className="flex items-center gap-2 p-2.5 sm:p-3 rounded-lg glass-panel border border-white/5 text-xs text-gray-200">
                    <CheckCircle2 size={13} className="text-cyan-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-3">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {activeProject.technologies.map((tech) => (
                  <span key={tech} className="px-2.5 py-1 rounded-full glass-panel border border-cyan-500/30 text-[11px] font-mono text-cyan-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}
