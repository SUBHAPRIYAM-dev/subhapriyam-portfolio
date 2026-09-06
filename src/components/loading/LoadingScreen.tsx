import { useState, useEffect } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 1200; // Fast initial load, not artificially delaying user

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(timer);
        setIsFading(true);
        setTimeout(() => {
          onComplete();
        }, 500);
      }
    }, 20);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#070709] flex flex-col items-center justify-center transition-opacity duration-500 ${
        isFading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-6 max-w-sm w-full px-6">
        {/* Core Loading Icon Graphic */}
        <div className="relative w-16 h-16 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-cyan-500/20 animate-ping" />
          <div className="w-10 h-10 rounded-full border-2 border-t-cyan-400 border-r-transparent border-b-indigo-500 border-l-transparent animate-spin" />
        </div>

        {/* Text Metadata */}
        <div className="flex flex-col items-center gap-1 text-center">
          <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase">
            INITIALIZING EXPERIENCE
          </span>
          <span className="font-display text-4xl font-extrabold text-white tracking-wider">
            {progress < 10 ? `0${progress}` : progress}%
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500 transition-all duration-75 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
