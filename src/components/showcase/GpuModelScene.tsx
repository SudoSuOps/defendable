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
import { ContactShadows, PerspectiveCamera } from "@react-three/drei";
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
      onCreated={({ gl }) => {
        // Set the canvas clear colour explicitly so we never get a black
        // canvas before the scene paints.
        gl.setClearColor(0x0a0a0a, 1);
      }}
    >
      {/* Solid background colour as the floor of the scene */}
      <color attach="background" args={["#0a0a0a"]} />

      <PerspectiveCamera makeDefault position={[0, 0.9, 6.5]} fov={38} />

      {/* ─── Lighting · soft showroom recipe ────────────────────────────
        Deliberately HDRI-free · drei's <Environment preset="warehouse"/>
        tries to fetch a remote HDR file at runtime and the canvas goes
        black if that fetch stalls in production. We replicate the
        material-rendering look with explicit lights instead. */}
      <ambientLight intensity={0.5} />
      <hemisphereLight args={["#f7e9c8", "#15171a", 0.35]} />
      <directionalLight
        position={[5, 6, 4]}
        intensity={1.4}
        color={"#f7e9c8"}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <directionalLight position={[-6, 3, 2]} intensity={0.8} color={"#cfd8e3"} />
      <spotLight
        position={[0, 8, 3]}
        intensity={1.6}
        angle={0.6}
        penumbra={0.8}
        color={"#fff8e7"}
        castShadow
      />
      {/* Subtle honey-gold rim from below */}
      <pointLight position={[0, -1.5, 3]} intensity={0.9} color={"#d4aa28"} distance={7} decay={2} />
      {/* Rear back-fill to define the GPU silhouette */}
      <pointLight position={[0, 1.5, -3]} intensity={0.4} color={"#a4b4c8"} distance={8} decay={2} />

      <Suspense fallback={null}>
        {/* ─── The hero object ────────────────────────────────────── */}
        <ProceduralGpu pointer={pointer} />
      </Suspense>

      {/* Soft ground shadow */}
      <ContactShadows
        position={[0, -1.18, 0]}
        opacity={0.55}
        scale={9}
        blur={2.6}
        far={3}
        color={"#000000"}
      />
    </Canvas>
  );
}
