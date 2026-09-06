import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useMediaQuery } from "../hooks/useMediaQuery";

interface DeveloperCoreProps {
  scrollProgress: number; // 0 to 1
  pointer: { x: number; y: number };
}

export function DeveloperCore({ scrollProgress, pointer }: DeveloperCoreProps) {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const coreGroupRef = useRef<THREE.Group>(null);
  const innerMeshRef = useRef<THREE.Mesh>(null);
  const outerCageRef = useRef<THREE.Mesh>(null);
  const coreEnergyRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);
  const floatingCubesRef = useRef<THREE.Group>(null);

  const prevScrollRef = useRef(scrollProgress);
  const scrollVelocityRef = useRef(0);

  // Responsive particle count: 80 on mobile, 220 on desktop
  const particleCount = isMobile ? 80 : 220;
  const particlePositions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = (isMobile ? 1.8 : 2.2) + Math.random() * (isMobile ? 2.0 : 3.5);

      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, [particleCount, isMobile]);

  // Responsive floating orbiting satellites: 4 on mobile, 8 on desktop
  const satelliteCount = isMobile ? 4 : 8;
  const satellites = useMemo(() => {
    return Array.from({ length: satelliteCount }).map((_, i) => {
      const angle = (i / satelliteCount) * Math.PI * 2;
      const radius = (isMobile ? 1.8 : 2.8) + (i % 3) * 0.3;
      return {
        initialAngle: angle,
        radius,
        speed: 0.3 + (i % 4) * 0.15,
        size: (isMobile ? 0.08 : 0.12) + (i % 2) * 0.05,
      };
    });
  }, [satelliteCount, isMobile]);

  useFrame((state, delta) => {
    if (!coreGroupRef.current) return;

    const scrollDiff = Math.abs(scrollProgress - prevScrollRef.current);
    prevScrollRef.current = scrollProgress;
    scrollVelocityRef.current = THREE.MathUtils.lerp(scrollVelocityRef.current, scrollDiff * 40, 0.1);
    const v = scrollVelocityRef.current;
    const time = state.clock.getElapsedTime();

    const baseSpeed = 0.5 + v * 3.0;
    if (innerMeshRef.current) {
      innerMeshRef.current.rotation.y += delta * baseSpeed;
      innerMeshRef.current.rotation.x += delta * (baseSpeed * 0.6);
      
      const mat = innerMeshRef.current.material as THREE.MeshPhysicalMaterial;
      if (mat) {
        const hue = (scrollProgress * 0.6 + 0.55) % 1;
        mat.emissive.setHSL(hue, 0.9, 0.3);
        mat.emissiveIntensity = 0.25 + Math.sin(time * 3) * 0.15 + v * 0.5;
      }
    }

    if (coreEnergyRef.current) {
      const pulseScale = 0.85 + Math.sin(time * 4) * 0.15 + v * 0.2;
      coreEnergyRef.current.scale.set(pulseScale, pulseScale, pulseScale);
      coreEnergyRef.current.rotation.y -= delta * 1.2;
    }

    if (outerCageRef.current) {
      outerCageRef.current.rotation.y -= delta * (baseSpeed * 0.5);
      outerCageRef.current.rotation.z += delta * 0.3;
      const cageScale = 1.0 + Math.cos(time * 2) * 0.05 + v * 0.15;
      outerCageRef.current.scale.set(cageScale, cageScale, cageScale);
    }

    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += delta * (0.6 + v * 2);
      ring1Ref.current.rotation.x = Math.sin(time * 0.8) * 0.4 + Math.PI / 4;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y += delta * (0.8 + v * 2.5);
      ring2Ref.current.rotation.z = Math.cos(time * 0.7) * 0.5 - Math.PI / 3;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.x += delta * (0.7 + v * 2.2);
      ring3Ref.current.rotation.y = Math.sin(time * 1.1) * 0.6;
    }

    if (floatingCubesRef.current) {
      floatingCubesRef.current.children.forEach((child, idx) => {
        const sat = satellites[idx];
        if (sat) {
          const currentAngle = sat.initialAngle + time * sat.speed * (1 + v * 2);
          child.position.x = Math.cos(currentAngle) * sat.radius;
          child.position.z = Math.sin(currentAngle) * sat.radius;
          child.position.y = Math.sin(time * 2 + idx) * 0.4;
          child.rotation.x += delta * 2;
          child.rotation.y += delta * 1.5;
        }
      });
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * (0.1 + v * 0.8);
      particlesRef.current.rotation.x = Math.sin(time * 0.3) * 0.1;
    }

    // Pointer response (reduced strength on mobile)
    const pointerMult = isMobile ? 0.2 : 0.5;
    const targetRotX = pointer.y * pointerMult;
    const targetRotY = pointer.x * pointerMult;
    coreGroupRef.current.rotation.x += (targetRotX - coreGroupRef.current.rotation.x) * 0.08;
    coreGroupRef.current.rotation.y += (targetRotY - coreGroupRef.current.rotation.y) * 0.08;

    // Mobile-optimized Section Target Scales & Positions
    // On mobile, scale is ~0.65x desktop so text is never obscured
    let targetScale = 1.0;
    let targetPosX = 0;
    let targetPosY = 0;

    if (isMobile) {
      if (scrollProgress < 0.15) {
        targetScale = 0.7; targetPosX = 0; targetPosY = 0.8;
      } else if (scrollProgress < 0.35) {
        targetScale = 0.75; targetPosX = 0; targetPosY = 1.0;
      } else if (scrollProgress < 0.55) {
        targetScale = 0.9; targetPosX = 0; targetPosY = 0.4;
      } else if (scrollProgress < 0.75) {
        targetScale = 0.75; targetPosX = 0; targetPosY = 0.9;
      } else if (scrollProgress < 0.9) {
        targetScale = 0.65; targetPosX = 0; targetPosY = 1.1;
      } else {
        targetScale = 0.6; targetPosX = 0; targetPosY = 0.5;
      }
    } else {
      if (scrollProgress < 0.15) {
        targetScale = 1.1; targetPosX = 0; targetPosY = 0;
      } else if (scrollProgress < 0.35) {
        targetScale = 1.35; targetPosX = 1.4; targetPosY = 0.2;
      } else if (scrollProgress < 0.55) {
        targetScale = 1.65; targetPosX = 0; targetPosY = 0;
      } else if (scrollProgress < 0.75) {
        targetScale = 1.2; targetPosX = -1.6; targetPosY = -0.2;
      } else if (scrollProgress < 0.9) {
        targetScale = 0.95; targetPosX = 0; targetPosY = 0.4;
      } else {
        targetScale = 0.85; targetPosX = 0; targetPosY = -0.2;
      }
    }

    targetScale += v * 0.15;

    coreGroupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.08);
    coreGroupRef.current.position.x += (targetPosX - coreGroupRef.current.position.x) * 0.08;
    coreGroupRef.current.position.y += (targetPosY - coreGroupRef.current.position.y) * 0.08;
  });

  return (
    <group ref={coreGroupRef}>
      {/* Crystalline Multi-Faceted Inner Mesh */}
      <mesh ref={innerMeshRef}>
        <icosahedronGeometry args={[isMobile ? 0.8 : 1.1, 2]} />
        <meshPhysicalMaterial
          color="#0b132b"
          emissive="#38bdf8"
          emissiveIntensity={0.35}
          roughness={0.15}
          metalness={0.85}
          flatShading
          clearcoat={1.0}
          clearcoatRoughness={0.1}
        />
      </mesh>

      {/* Pulsing Energy Core */}
      <mesh ref={coreEnergyRef}>
        <octahedronGeometry args={[isMobile ? 0.5 : 0.7, 1]} />
        <meshBasicMaterial color="#38bdf8" wireframe transparent opacity={0.7} />
      </mesh>

      {/* Outer Polyhedral Wireframe */}
      <mesh ref={outerCageRef}>
        <dodecahedronGeometry args={[isMobile ? 1.15 : 1.6, 1]} />
        <meshStandardMaterial color="#38bdf8" wireframe transparent opacity={0.35} />
      </mesh>

      {/* Ring 1 */}
      <mesh ref={ring1Ref} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[isMobile ? 1.5 : 2.1, 0.018, 16, 100]} />
        <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={0.5} roughness={0.1} />
      </mesh>

      {/* Ring 2 */}
      <mesh ref={ring2Ref} rotation={[-Math.PI / 3, Math.PI / 6, 0]}>
        <torusGeometry args={[isMobile ? 1.8 : 2.5, 0.015, 16, 100]} />
        <meshStandardMaterial color="#818cf8" emissive="#818cf8" emissiveIntensity={0.45} roughness={0.1} />
      </mesh>

      {/* Ring 3 */}
      <mesh ref={ring3Ref} rotation={[0, Math.PI / 3, Math.PI / 4]}>
        <torusGeometry args={[isMobile ? 2.1 : 2.9, 0.012, 16, 100]} />
        <meshStandardMaterial color="#34d399" emissive="#34d399" emissiveIntensity={0.4} roughness={0.1} />
      </mesh>

      {/* Orbiting Satellites */}
      <group ref={floatingCubesRef}>
        {satellites.map((sat, i) => (
          <mesh key={i}>
            <boxGeometry args={[sat.size, sat.size, sat.size]} />
            <meshStandardMaterial
              color="#38bdf8"
              emissive="#38bdf8"
              emissiveIntensity={0.5}
              wireframe={i % 2 === 0}
            />
          </mesh>
        ))}
      </group>

      {/* Particle Cloud */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[particlePositions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={isMobile ? 0.035 : 0.045}
          color="#38bdf8"
          transparent
          opacity={0.65}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}
