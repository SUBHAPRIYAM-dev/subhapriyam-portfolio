import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { DeveloperCore } from "./DeveloperCore";
import { CameraRig } from "./CameraRig";
import { TechBackgroundIcons } from "./TechBackgroundIcons";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { useMediaQuery } from "../hooks/useMediaQuery";

interface GlobalCanvasProps {
  scrollProgress: number;
}

export function GlobalCanvas({ scrollProgress }: GlobalCanvasProps) {
  const [hasWebGL, setHasWebGL] = useState<boolean>(true);
  const [pointer, setPointer] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const reducedMotion = useReducedMotion();
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) {
        setHasWebGL(false);
      }
    } catch {
      setHasWebGL(false);
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPointer({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!hasWebGL || reducedMotion) {
    return (
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center opacity-30">
        <div className="w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full border border-cyan-500/20 animate-spin-slow flex items-center justify-center">
          <div className="w-[220px] h-[220px] sm:w-[380px] sm:h-[380px] rounded-full border border-indigo-500/20 animate-reverse-spin">
            <div className="w-[140px] h-[140px] sm:w-[240px] sm:h-[240px] rounded-full border border-emerald-500/30"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: isMobile ? 55 : 45 }}
        dpr={isMobile ? [1, 1.25] : [1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#38bdf8" />
        <directionalLight position={[-5, -5, -5]} intensity={0.6} color="#818cf8" />
        <pointLight position={[0, 0, 3]} intensity={0.8} color="#0284c7" />

        <DeveloperCore scrollProgress={scrollProgress} pointer={pointer} />
        <TechBackgroundIcons scrollProgress={scrollProgress} />
        <CameraRig scrollProgress={scrollProgress} />
      </Canvas>
    </div>
  );
}
