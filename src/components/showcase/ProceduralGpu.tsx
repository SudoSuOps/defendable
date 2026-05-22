/**
 * ProceduralGpu — flagship 3D model of the NVIDIA RTX PRO 6000 Blackwell.
 *
 * v2 (2026-05-22) · Sotheby's-tier marketing render.
 * Built from primitives but graded with meshPhysicalMaterial: clearcoat on
 * the shroud, anisotropic brushed metal on the heatsink, anodized gold on
 * the PCIe fingers, emissive heat-glow at the rear vents. The cursor
 * parallax is overlaid on a slow autonomous drift so the asset reads as
 * "alive on a turntable" without ever feeling jittery.
 *
 * Premium volumes:
 *   · main body shell (graphite · clearcoat)
 *   · slotted heatsink fin stack (brushed dark steel)
 *   · two intake fans with bladed wheels
 *   · rear I/O bracket (matte black) + port slots
 *   · honey-gold accent strip (brand wordmark, no logo asset)
 *   · PCIe edge fingers (anodized gold, prominent)
 *   · backplate with diagonal vent cuts (heat-glow emissive)
 *   · 12V-2x6 power connector top-rear
 *   · subtle backlit DEFENDABLE etch on the shroud side
 */
import { useFrame } from "@react-three/fiber";
import { Float, Text } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const GRAPHITE = "#13151a";
const SHELL = "#1c1f24";
const ACCENT_HONEY = "#d4aa28";
const ACCENT_HONEY_HOT = "#f4cf4d";
const FIN = "#0a0b0d";
const HEAT_GLOW = "#ff7a3d";

export function ProceduralGpu({ pointer }: { pointer: { x: number; y: number } }) {
  const root = useRef<THREE.Group>(null!);

  // Cursor parallax overlaid on a slow autonomous turntable drift.
  // Feels like the asset is on a museum lazy-Susan and reacts to you.
  useFrame((state, delta) => {
    if (!root.current) return;
    const t = state.clock.elapsedTime;
    const driftY = Math.sin(t * 0.18) * 0.32 + 0.18;
    const driftX = Math.sin(t * 0.09) * 0.05;

    const tx = pointer.y * 0.18 + driftX;
    const ty = pointer.x * 0.35 + driftY;
    root.current.rotation.x = THREE.MathUtils.damp(root.current.rotation.x, tx, 2.5, delta);
    root.current.rotation.y = THREE.MathUtils.damp(root.current.rotation.y, ty, 2.5, delta);
  });

  const fins = useMemo(() => Array.from({ length: 18 }, (_, i) => i), []);
  const vents = useMemo(() => Array.from({ length: 8 }, (_, i) => i), []);

  return (
    <Float speed={0.5} rotationIntensity={0.06} floatIntensity={0.2}>
      <group ref={root} rotation={[0, 0.18, 0]}>
        {/* ─── Main body shell · clearcoat graphite ───────────────────── */}
        <mesh castShadow receiveShadow>
          <boxGeometry args={[4.6, 1.5, 1.6]} />
          <meshPhysicalMaterial
            color={SHELL}
            metalness={0.6}
            roughness={0.32}
            clearcoat={0.7}
            clearcoatRoughness={0.25}
            reflectivity={0.6}
          />
        </mesh>

        {/* ─── Top shroud cap with bevel ─────────────────────────────── */}
        <mesh position={[0, 0.78, 0]} castShadow>
          <boxGeometry args={[4.6, 0.08, 1.6]} />
          <meshPhysicalMaterial
            color={GRAPHITE}
            metalness={0.55}
            roughness={0.42}
            clearcoat={0.5}
          />
        </mesh>

        {/* ─── Side bevel strips (catch the rim light) ────────────────── */}
        <mesh position={[0, 0.5, 0.81]}>
          <boxGeometry args={[4.55, 0.04, 0.02]} />
          <meshStandardMaterial color={"#2a2f37"} metalness={0.85} roughness={0.18} />
        </mesh>
        <mesh position={[0, -0.5, 0.81]}>
          <boxGeometry args={[4.55, 0.04, 0.02]} />
          <meshStandardMaterial color={"#2a2f37"} metalness={0.85} roughness={0.18} />
        </mesh>

        {/* ─── PCB layer ────────────────────────────────────────────── */}
        <mesh position={[0, -0.85, 0]} castShadow receiveShadow>
          <boxGeometry args={[4.7, 0.18, 1.7]} />
          <meshStandardMaterial color={"#0a0b0d"} metalness={0.2} roughness={0.7} />
        </mesh>

        {/* ─── PCIe edge fingers · prominent anodized gold ────────────── */}
        <mesh position={[0, -1.02, 0.55]} castShadow>
          <boxGeometry args={[3.6, 0.14, 0.18]} />
          <meshPhysicalMaterial
            color={ACCENT_HONEY}
            metalness={0.95}
            roughness={0.18}
            clearcoat={0.4}
            emissive={ACCENT_HONEY}
            emissiveIntensity={0.08}
          />
        </mesh>
        {/* Finger separations · thin dark grooves */}
        {Array.from({ length: 22 }, (_, i) => i).map((i) => {
          const x = -1.7 + (i * 3.4) / 21;
          return (
            <mesh key={`pcie-${i}`} position={[x, -1.02, 0.64]}>
              <boxGeometry args={[0.015, 0.15, 0.005]} />
              <meshStandardMaterial color={"#040506"} />
            </mesh>
          );
        })}

        {/* ─── Heatsink fin stack ───────────────────────────────────── */}
        <group position={[0, 0, 0]}>
          {fins.map((i) => {
            const x = -2.05 + (i * 4.1) / 17;
            return (
              <mesh key={i} position={[x, 0.18, 0]} castShadow>
                <boxGeometry args={[0.04, 0.92, 1.45]} />
                <meshPhysicalMaterial
                  color={FIN}
                  metalness={0.85}
                  roughness={0.35}
                  clearcoat={0.3}
                />
              </mesh>
            );
          })}
        </group>

        {/* ─── Two intake fans ──────────────────────────────────────── */}
        <Fan position={[-1.25, 0.22, 0]} />
        <Fan position={[1.25, 0.22, 0]} />

        {/* ─── Honey-gold brand accent strip ────────────────────────── */}
        <mesh position={[0, 0, 0.815]}>
          <boxGeometry args={[1.9, 0.07, 0.022]} />
          <meshPhysicalMaterial
            color={ACCENT_HONEY}
            metalness={0.95}
            roughness={0.15}
            emissive={ACCENT_HONEY_HOT}
            emissiveIntensity={0.55}
            clearcoat={0.6}
          />
        </mesh>

        {/* ─── Subtle laser-etched DEFENDABLE wordmark on shroud side ── */}
        <Text
          position={[0, 0, 0.83]}
          fontSize={0.08}
          color={"#1a1c1f"}
          letterSpacing={0.32}
          anchorX="center"
          anchorY="middle"
          maxWidth={3}
          outlineColor={"#3a2c10"}
          outlineWidth={0.002}
        >
          DEFENDABLE · COMPUTE
        </Text>

        {/* ─── Rear I/O bracket ─────────────────────────────────────── */}
        <mesh position={[-2.35, -0.2, 0]} castShadow>
          <boxGeometry args={[0.12, 1.2, 1.4]} />
          <meshStandardMaterial color={"#1c2025"} metalness={0.7} roughness={0.28} />
        </mesh>
        {/* DP ports */}
        {[-0.45, -0.15, 0.15, 0.45].map((y) => (
          <mesh key={`io-${y}`} position={[-2.38, y - 0.2, 0]}>
            <boxGeometry args={[0.05, 0.12, 0.55]} />
            <meshStandardMaterial color={"#040506"} metalness={0.3} roughness={0.85} />
          </mesh>
        ))}
        {/* Bracket screw heads */}
        <mesh position={[-2.4, 0.55, 0.62]}>
          <cylinderGeometry args={[0.025, 0.025, 0.02, 8]} />
          <meshStandardMaterial color={"#3a3f47"} metalness={0.9} roughness={0.2} />
        </mesh>
        <mesh position={[-2.4, 0.55, -0.62]}>
          <cylinderGeometry args={[0.025, 0.025, 0.02, 8]} />
          <meshStandardMaterial color={"#3a3f47"} metalness={0.9} roughness={0.2} />
        </mesh>

        {/* ─── Backplate with diagonal vent cuts (heat-glow emissive) ── */}
        <mesh position={[0, 0, -0.81]} castShadow>
          <boxGeometry args={[4.55, 1.45, 0.04]} />
          <meshPhysicalMaterial
            color={"#0c0e11"}
            metalness={0.55}
            roughness={0.48}
            clearcoat={0.3}
          />
        </mesh>
        {/* Glowing rear-vent slits · subtle heat tone */}
        {vents.map((i) => {
          const x = -1.9 + (i * 3.8) / 7;
          return (
            <mesh key={`vent-${i}`} position={[x, 0.45, -0.835]}>
              <boxGeometry args={[0.32, 0.06, 0.005]} />
              <meshStandardMaterial
                color={HEAT_GLOW}
                emissive={HEAT_GLOW}
                emissiveIntensity={0.55}
                toneMapped={false}
              />
            </mesh>
          );
        })}

        {/* ─── 12V-2x6 power connector top-rear ─────────────────────── */}
        <mesh position={[1.9, 0.78, 0.55]} castShadow>
          <boxGeometry args={[0.5, 0.2, 0.42]} />
          <meshStandardMaterial color={"#08090b"} metalness={0.35} roughness={0.75} />
        </mesh>
        {/* power-connector keying tab */}
        <mesh position={[1.9, 0.9, 0.55]}>
          <boxGeometry args={[0.42, 0.04, 0.34]} />
          <meshStandardMaterial color={"#1a1c1f"} metalness={0.5} roughness={0.55} />
        </mesh>

        {/* ─── Front-edge subtle highlight notch (catches the key) ───── */}
        <mesh position={[2.305, 0.45, 0]}>
          <boxGeometry args={[0.005, 0.08, 1.5]} />
          <meshStandardMaterial
            color={ACCENT_HONEY}
            emissive={ACCENT_HONEY}
            emissiveIntensity={0.35}
            toneMapped={false}
          />
        </mesh>
      </group>
    </Float>
  );
}

function Fan({ position }: { position: [number, number, number] }) {
  const blades = useRef<THREE.Group>(null!);
  useFrame((_, delta) => {
    if (blades.current) blades.current.rotation.z += delta * 0.42;
  });
  return (
    <group position={position}>
      {/* Fan housing ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
        <torusGeometry args={[0.7, 0.045, 16, 64]} />
        <meshPhysicalMaterial color={GRAPHITE} metalness={0.7} roughness={0.32} clearcoat={0.4} />
      </mesh>
      {/* Inner ring lip */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
        <torusGeometry args={[0.62, 0.012, 8, 48]} />
        <meshStandardMaterial
          color={ACCENT_HONEY}
          emissive={ACCENT_HONEY}
          emissiveIntensity={0.18}
          metalness={0.95}
          roughness={0.2}
        />
      </mesh>
      {/* Hub */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.18, 0.18, 0.06, 24]} />
        <meshPhysicalMaterial color={"#06070a"} metalness={0.55} roughness={0.5} clearcoat={0.3} />
      </mesh>
      {/* Hub centre dot */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0.04, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 0.02, 16]} />
        <meshStandardMaterial
          color={ACCENT_HONEY}
          emissive={ACCENT_HONEY}
          emissiveIntensity={0.45}
        />
      </mesh>
      {/* Bladed wheel */}
      <group ref={blades} rotation={[Math.PI / 2, 0, 0]}>
        {Array.from({ length: 9 }, (_, i) => i).map((i) => {
          const a = (i / 9) * Math.PI * 2;
          return (
            <mesh
              key={i}
              position={[Math.cos(a) * 0.42, 0, Math.sin(a) * 0.42]}
              rotation={[0, a + Math.PI / 2.4, 0]}
            >
              <boxGeometry args={[0.45, 0.025, 0.16]} />
              <meshPhysicalMaterial
                color={"#15181c"}
                metalness={0.5}
                roughness={0.45}
                clearcoat={0.3}
              />
            </mesh>
          );
        })}
      </group>
    </group>
  );
}
