import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { soundManager } from "../utils/sound";
import {
  Atom,
  Server,
  Database,
  Cloud,
  Container,
  Box,
  Code2,
  Cpu,
  ShieldCheck,
  HardDrive,
} from "lucide-react";

interface TechNode {
  name: string;
  category: string;
  icon: typeof Atom;
  position: [number, number, number];
  color: string;
}

export function TechBackgroundIcons({ scrollProgress }: { scrollProgress: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

  // 10 Key Technologies positioned in 3D Space surrounding the Developer Core
  const techNodes: TechNode[] = useMemo(() => {
    return [
      { name: "React", category: "Frontend", icon: Atom, position: [-3.8, 2.2, -1.0], color: "#38bdf8" },
      { name: "Node.js", category: "Backend", icon: Server, position: [3.8, 2.4, -0.8], color: "#34d399" },
      { name: "MongoDB", category: "Database", icon: Database, position: [-4.2, -1.8, -1.2], color: "#10b981" },
      { name: "Java", category: "Backend", icon: Cpu, position: [4.0, -1.6, -1.0], color: "#f97316" },
      { name: "AWS", category: "Cloud", icon: Cloud, position: [0.0, 3.4, -1.5], color: "#fbbf24" },
      { name: "Docker", category: "DevOps", icon: Container, position: [-3.4, 0.2, -1.8], color: "#38bdf8" },
      { name: "Kubernetes", category: "Cloud", icon: Box, position: [3.5, 0.4, -1.6], color: "#818cf8" },
      { name: "TypeScript", category: "Frontend", icon: Code2, position: [-2.2, 3.2, -1.4], color: "#60a5fa" },
      { name: "Spring Boot", category: "Backend", icon: ShieldCheck, position: [2.2, -3.2, -1.2], color: "#4ade80" },
      { name: "MySQL", category: "Database", icon: HardDrive, position: [-2.4, -3.0, -1.4], color: "#f43f5e" },
    ];
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();

    // Gentle floating background rotation & scroll parallax
    groupRef.current.rotation.y = Math.sin(time * 0.15) * 0.1 + (scrollProgress - 0.5) * 0.3;
    groupRef.current.position.y = Math.cos(time * 0.2) * 0.15 - (scrollProgress * 2.0);

    // Animate children individual floating bobs
    groupRef.current.children.forEach((child, i) => {
      child.position.y += Math.sin(time * 1.5 + i) * delta * 0.12;
    });
  });

  if (isMobile) {
    // Render a lightweight subset on mobile to ensure crisp 60fps performance
    return null;
  }

  return (
    <group ref={groupRef}>
      {techNodes.map((node) => {
        const Icon = node.icon;
        return (
          <group key={node.name} position={node.position}>
            <Html
              center
              distanceFactor={8}
              zIndexRange={[10, 0]}
              className="pointer-events-none select-none"
            >
              <div
                onMouseEnter={() => soundManager.playHover()}
                className="group relative flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-[#0c0d13]/70 backdrop-blur-md border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-cyan-400/60 hover:scale-110"
                style={{
                  boxShadow: `0 0 20px ${node.color}20`,
                }}
              >
                {/* Glowing Icon Container */}
                <div
                  className="p-1.5 rounded-xl flex items-center justify-center border"
                  style={{
                    backgroundColor: `${node.color}15`,
                    borderColor: `${node.color}40`,
                    color: node.color,
                  }}
                >
                  <Icon size={16} />
                </div>

                {/* Tech Label & Category */}
                <div className="flex flex-col">
                  <span className="font-display font-extrabold text-xs text-white tracking-wider">
                    {node.name}
                  </span>
                  <span className="font-mono text-[9px] text-gray-400 uppercase tracking-widest">
                    {node.category}
                  </span>
                </div>

                {/* Subtle Ambient Pulse Dot */}
                <span
                  className="w-1.5 h-1.5 rounded-full animate-ping"
                  style={{ backgroundColor: node.color }}
                />
              </div>
            </Html>
          </group>
        );
      })}
    </group>
  );
}
