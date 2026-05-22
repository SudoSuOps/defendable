/**
 * GpuModelScene — the R3F canvas that hosts the procedural GPU.
 *
 * Lighting recipe (premium showroom feel · no neon, no bloom spam):
 *   · directional key light from upper-left
 *   · directional fill from lower-right (cooler tone)
 *   · spotlight overhead for a soft product highlight on the shell
 *   · ambient floor light for honey-gold rim
 *   · subtle ContactShadows below the GPU
 *
 * The pointer is tracked at the HTML container level and forwarded into the
 * R3F tree so the parent layout can also use the value to parallax cards.
 */
import { Canvas } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  PerspectiveCamera,
} from "@react-three/drei";
import { Suspense } from "react";

import { ProceduralGpu } from "./ProceduralGpu";

interface GpuModelSceneProps {
  pointer: { x: number; y: number };
}

export function GpuModelScene({ pointer }: GpuModelSceneProps) {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0.9, 6.5], fov: 38 }}
      gl={{ antialias: true, powerPreference: "high-performance" }}
    >
      <Suspense fallback={null}>
        <PerspectiveCamera makeDefault position={[0, 0.9, 6.5]} fov={38} />

        {/* ─── Lighting · soft showroom recipe ─────────────────────── */}
        <ambientLight intensity={0.25} />
        <directionalLight
          position={[5, 6, 4]}
          intensity={1.1}
          color={"#f7e9c8"}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <directionalLight position={[-6, 3, 2]} intensity={0.5} color={"#cfd8e3"} />
        <spotLight
          position={[0, 8, 3]}
          intensity={1.2}
          angle={0.5}
          penumbra={0.8}
          color={"#fff8e7"}
          castShadow
        />
        {/* Subtle honey-gold rim from below */}
        <pointLight position={[0, -1.5, 3]} intensity={0.6} color={"#d4aa28"} distance={6} decay={2} />

        {/* HDRI-style env for material reflections · drei provides a preset */}
        <Environment preset="warehouse" />

        {/* ─── The hero object ─────────────────────────────────────── */}
        <ProceduralGpu pointer={pointer} />

        {/* Soft ground shadow */}
        <ContactShadows
          position={[0, -1.18, 0]}
          opacity={0.55}
          scale={9}
          blur={2.6}
          far={3}
          color={"#000000"}
        />
      </Suspense>
    </Canvas>
  );
}
