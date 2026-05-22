/**
 * GpuModelScene — gallery-grade R3F canvas for the showcase hero.
 *
 * v2 (2026-05-22) · Sotheby's-tier scene grading.
 *   · MeshReflectorMaterial floor (the GPU casts a soft mirror beneath)
 *   · three-point gallery lighting · warm key / cool fill / honey rim
 *   · slow cinematic camera drift overlaid on parallax (handled in the model)
 *   · brushed-brass museum plaque in front of the asset
 *     etched with: deed reference · status · record-hash prefix
 *   · accent rim spot from below for the honey-gold strip
 *   · NO HDRI fetch · all lights are explicit (avoids dark-canvas bug)
 */
import { Canvas, useFrame } from "@react-three/fiber";
import {
  ContactShadows,
  MeshReflectorMaterial,
  PerspectiveCamera,
  Text,
} from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

import { ProceduralGpu } from "./ProceduralGpu";

interface GpuModelSceneProps {
  pointer: { x: number; y: number };
  /** Optional in-scene plaque data · falls back to compute defaults if absent */
  plaque?: {
    deedReference: string;
    statusLine: string;
    recordHashShort: string;
    operatorAskDisplay?: string | null;
  };
}

export function GpuModelScene({ pointer, plaque }: GpuModelSceneProps) {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0.9, 6.5], fov: 38 }}
      gl={{ antialias: true, powerPreference: "high-performance" }}
      onCreated={({ gl }) => {
        // Clear colour explicitly · never a black frame before the first paint.
        gl.setClearColor(0x07080a, 1);
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.toneMappingExposure = 1.05;
      }}
    >
      <color attach="background" args={["#07080a"]} />
      <fog attach="fog" args={["#07080a", 8, 22]} />

      <PerspectiveCamera makeDefault position={[0, 0.9, 6.5]} fov={38} />
      <CameraDrift />

      {/* ─── Gallery lighting · explicit · HDRI-free ──────────────────── */}
      <ambientLight intensity={0.35} />
      <hemisphereLight args={["#f7e9c8", "#0a0c0f", 0.3]} />
      {/* Key · warm tungsten from upper-front-left */}
      <directionalLight
        position={[5, 6.5, 4]}
        intensity={1.5}
        color={"#fbe9c0"}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0002}
      />
      {/* Fill · cool slate from upper-front-right */}
      <directionalLight position={[-6, 3.5, 2]} intensity={0.75} color={"#c8d4e3"} />
      {/* Rim · honey edge separation from behind */}
      <directionalLight position={[0, 2.5, -6]} intensity={0.55} color={"#d4aa28"} />
      {/* Soft top key spot · museum vitrine feel */}
      <spotLight
        position={[0, 9, 3]}
        intensity={1.7}
        angle={0.5}
        penumbra={0.85}
        color={"#fff6e0"}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      {/* Underglow · catches the front bevel + PCIe gold */}
      <pointLight position={[0, -1.4, 3]} intensity={0.85} color={"#d4aa28"} distance={7} decay={2} />
      {/* Rear backlight bar · silhouette definer */}
      <pointLight position={[0, 1.4, -3.5]} intensity={0.4} color={"#9ab0c8"} distance={8} decay={2} />

      <Suspense fallback={null}>
        <ProceduralGpu pointer={pointer} />
        <BrassPlaque
          deedReference={plaque?.deedReference ?? "DDEED-DOV-COMPUTE-000001-v3"}
          statusLine={plaque?.statusLine ?? "DRAFT REVIEW RECORD · NOT ISSUED"}
          recordHashShort={plaque?.recordHashShort ?? ""}
          operatorAskDisplay={plaque?.operatorAskDisplay ?? null}
        />
      </Suspense>

      {/* ─── Reflector floor · the asset earns its mirror ─────────────── */}
      <mesh
        receiveShadow
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1.32, 0]}
      >
        <planeGeometry args={[40, 40]} />
        <MeshReflectorMaterial
          blur={[260, 80]}
          resolution={1024}
          mixBlur={1.0}
          mixStrength={1.6}
          roughness={0.85}
          depthScale={0.7}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#0a0c10"
          metalness={0.55}
          mirror={0.45}
        />
      </mesh>

      {/* Soft ground shadow directly under the GPU */}
      <ContactShadows
        position={[0, -1.31, 0]}
        opacity={0.7}
        scale={9}
        blur={2.8}
        far={3}
        color={"#000000"}
      />
    </Canvas>
  );
}

/* ───────────────────────────────────────────────────────────────────────
 * BrassPlaque · etched museum placard sitting on the marble floor.
 * ────────────────────────────────────────────────────────────────────── */
function BrassPlaque({
  deedReference,
  statusLine,
  recordHashShort,
  operatorAskDisplay,
}: {
  deedReference: string;
  statusLine: string;
  recordHashShort: string;
  operatorAskDisplay: string | null;
}) {
  // Slightly taller plinth when there's an asking-price line, so the
  // text never crowds the bottom edge.
  const plinthDepth = operatorAskDisplay ? 1.3 : 1.05;
  return (
    <group position={[0, -1.305, 1.85]} rotation={[-Math.PI / 2.4, 0, 0]}>
      {/* Plinth — brushed brass base */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[3.0, 0.04, plinthDepth]} />
        <meshPhysicalMaterial
          color={"#7d6429"}
          metalness={0.95}
          roughness={0.32}
          clearcoat={0.55}
          clearcoatRoughness={0.35}
          reflectivity={0.7}
        />
      </mesh>
      {/* Bevel rim · slightly darker */}
      <mesh position={[0, 0.005, 0]}>
        <boxGeometry args={[3.04, 0.005, plinthDepth + 0.04]} />
        <meshStandardMaterial color={"#5e4b1d"} metalness={0.85} roughness={0.4} />
      </mesh>

      {/* Etched eyebrow */}
      <Text
        position={[0, 0.025, -0.36]}
        fontSize={0.085}
        color={"#1d1610"}
        letterSpacing={0.32}
        anchorX="center"
        anchorY="middle"
      >
        PROOF OF VALUE
      </Text>

      {/* Deed reference */}
      <Text
        position={[0, 0.025, -0.18]}
        fontSize={0.13}
        color={"#1d1610"}
        letterSpacing={0.06}
        anchorX="center"
        anchorY="middle"
        outlineColor={"#3a2a10"}
        outlineWidth={0.003}
      >
        {deedReference}
      </Text>

      {/* Asset name (always RTX PRO 6000 in the compute scene) */}
      <Text
        position={[0, 0.025, 0.02]}
        fontSize={0.075}
        color={"#2a1f0d"}
        letterSpacing={0.04}
        anchorX="center"
        anchorY="middle"
      >
        NVIDIA RTX PRO 6000 BLACKWELL
      </Text>

      {/* Status line */}
      <Text
        position={[0, 0.025, 0.2]}
        fontSize={0.062}
        color={"#3b2c12"}
        letterSpacing={0.22}
        anchorX="center"
        anchorY="middle"
      >
        {statusLine}
      </Text>

      {/* Record-hash prefix · mono feel */}
      <Text
        position={[0, 0.025, 0.36]}
        fontSize={0.055}
        color={"#5a4520"}
        letterSpacing={0.18}
        anchorX="center"
        anchorY="middle"
      >
        SHA-256 · {recordHashShort}…
      </Text>

      {/* Operator asking price · only when set */}
      {operatorAskDisplay && (
        <>
          <Text
            position={[0, 0.025, 0.54]}
            fontSize={0.072}
            color={"#1d1610"}
            letterSpacing={0.12}
            anchorX="center"
            anchorY="middle"
            outlineColor={"#3a2a10"}
            outlineWidth={0.002}
          >
            {`OPERATOR ASKING · ${operatorAskDisplay}`}
          </Text>
          <Text
            position={[0, 0.025, 0.62]}
            fontSize={0.04}
            color={"#5a4520"}
            letterSpacing={0.18}
            anchorX="center"
            anchorY="middle"
          >
            OPERATOR CLAIM ONLY · NOT VALIDATED
          </Text>
        </>
      )}
    </group>
  );
}

/* ───────────────────────────────────────────────────────────────────────
 * CameraDrift · subtle dolly + height oscillation for product-shot feel.
 * ────────────────────────────────────────────────────────────────────── */
function CameraDrift() {
  const baseY = useRef(0.9);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const cam = state.camera;
    cam.position.y = baseY.current + Math.sin(t * 0.22) * 0.06;
    cam.position.z = 6.5 + Math.sin(t * 0.13) * 0.18;
    cam.lookAt(0, 0.05, 0);
  });
  return null;
}
