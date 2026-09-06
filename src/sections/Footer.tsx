import { personalData } from "../data/personal";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/10 py-12 px-6 bg-[#050507]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="font-display font-extrabold text-lg text-white tracking-wider block">
            {personalData.name.toUpperCase()}
          </span>
          <span className="font-mono text-xs text-gray-500">
            {personalData.role.toUpperCase()} — © {currentYear}
          </span>
        </div>

        <div className="h-[1px] w-full md:w-32 bg-gradient-to-r from-cyan-500/50 to-indigo-500/50" />

        <div className="font-mono text-xs text-gray-400 text-center md:text-right">
          BUILT WITH <span className="text-cyan-400 font-bold">REACT</span> •{" "}
          <span className="text-indigo-400 font-bold">THREE.JS</span> •{" "}
          <span className="text-emerald-400 font-bold">TYPESCRIPT</span>
        </div>
      </div>
    </footer>
  );
}
