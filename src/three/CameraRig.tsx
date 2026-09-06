import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface CameraRigProps {
  scrollProgress: number; // 0 to 1
}

export function CameraRig({ scrollProgress }: CameraRigProps) {
  const targetCamPos = useRef(new THREE.Vector3(0, 0, 6));
  const targetLookAt = useRef(new THREE.Vector3(0, 0, 0));
  const prevScrollRef = useRef(scrollProgress);
  const scrollVelRef = useRef(0);

  useFrame(({ camera, clock }) => {
    // Scroll velocity
    const deltaScroll = Math.abs(scrollProgress - prevScrollRef.current);
    prevScrollRef.current = scrollProgress;
    scrollVelRef.current = THREE.MathUtils.lerp(scrollVelRef.current, deltaScroll * 20, 0.1);
    const vel = scrollVelRef.current;

    const time = clock.getElapsedTime();

    // Section-based camera coordinates
    let px = 0;
    let py = 0;
    let pz = 6;
    let lx = 0;
    let ly = 0;
    let lz = 0;

    if (scrollProgress < 0.15) {
      px = 0; py = 0; pz = 6;
    } else if (scrollProgress < 0.35) {
      px = 1.4; py = 0.4; pz = 5.2;
      lx = 0.6; ly = 0.2;
    } else if (scrollProgress < 0.55) {
      px = 0; py = 0; pz = 4.2;
    } else if (scrollProgress < 0.75) {
      px = -1.8; py = -0.4; pz = 5.5;
      lx = -0.8; ly = -0.2;
    } else if (scrollProgress < 0.90) {
      px = 0; py = 0.8; pz = 5.2;
      ly = 0.3;
    } else {
      px = 0; py = -0.4; pz = 5.8;
    }

    // Add subtle continuous floating sway to camera position
    const swayX = Math.sin(time * 0.8) * 0.15;
    const swayY = Math.cos(time * 0.6) * 0.15;
    const velOffset = vel * 0.5;

    targetCamPos.current.set(px + swayX, py + swayY, pz + velOffset);
    targetLookAt.current.set(lx, ly, lz);

    camera.position.lerp(targetCamPos.current, 0.06);
    camera.lookAt(targetLookAt.current);

    // Dynamic camera roll angle on fast scroll
    camera.rotation.z = Math.sin(time * 2) * 0.02 + (scrollProgress - 0.5) * 0.05;
  });

  return null;
}
