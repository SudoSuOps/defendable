/**
 * ProceduralGpu — a stylized RTX-PRO-6000-Blackwell-shaped object composed
 * from primitives. The goal is "recognizable premium pro workstation GPU,"
 * not pixel-perfect manufacturer accuracy.
 *
 * Volumes:
 *   · main body shell (matte graphite, subtle bevel)
 *   · slotted heatsink panel (multiple thin fins)
 *   · two intake fans with bladed wheels
 *   · I/O bracket (rear)
 *   · subtle honey-gold accent strip (brand mark, no logo)
 *   · PCIe edge connector (bottom tab)
 *   · backplate
 */
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const GRAPHITE = "#15171a";
const SHELL = "#1d2024";
const ACCENT_HONEY = "#d4aa28";
const FIN = "#0c0d0f";

export function ProceduralGpu({ pointer }: { pointer: { x: number; y: number } }) {
  const root = useRef<THREE.Group>(null!);

  // Cursor parallax · the GPU tilts toward the pointer subtly.
  useFrame((_, delta) => {
    if (!root.current) return;
    const tx = pointer.y * 0.18; // pitch
    const ty = pointer.x * 0.35; // yaw
    root.current.rotation.x = THREE.MathUtils.damp(root.current.rotation.x, tx, 3, delta);
    root.current.rotation.y = THREE.MathUtils.damp(root.current.rotation.y, ty + 0.18, 3, delta);
  });

  // 12 cooling fins built once.
  const fins = useMemo(() => Array.from({ length: 14 }, (_, i) => i), []);

  return (
    <Float speed={0.6} rotationIntensity={0.08} floatIntensity={0.25}>
      <group ref={root} rotation={[0, 0.18, 0]}>
        {/* ── Main body shell ───────────────────────────────────────── */}
        <mesh castShadow receiveShadow>
          <boxGeometry args={[4.6, 1.5, 1.6]} />
          <meshStandardMaterial color={SHELL} metalness={0.55} roughness={0.35} />
        </mesh>

        {/* PCB layer (slightly thinner than shell) */}
        <mesh position={[0, -0.85, 0]} castShadow receiveShadow>
          <boxGeometry args={[4.7, 0.18, 1.7]} />
          <meshStandardMaterial color={"#0a0b0d"} metalness={0.2} roughness={0.7} />
        </mesh>

        {/* PCIe edge connector tab */}
        <mesh position={[0, -1.02, 0.55]} castShadow>
          <boxGeometry args={[3.5, 0.12, 0.12]} />
          <meshStandardMaterial color={ACCENT_HONEY} metalness={0.8} roughness={0.25} />
        </mesh>

        {/* ── Heatsink fin stack (between/around fans) ────────────────── */}
        <group position={[0, 0, 0]}>
          {fins.map((i) => {
            const x = -2.0 + (i * 4.0) / 13;
            return (
              <mesh key={i} position={[x, 0.18, 0]} castShadow>
                <boxGeometry args={[0.05, 0.92, 1.45]} />
                <meshStandardMaterial color={FIN} metalness={0.7} roughness={0.4} />
              </mesh>
            );
          })}
        </group>

        {/* ── Cooler shroud caps · framing the fins ──────────────────── */}
        <mesh position={[0, 0.78, 0]} castShadow>
          <boxGeometry args={[4.6, 0.08, 1.6]} />
          <meshStandardMaterial color={GRAPHITE} metalness={0.5} roughness={0.5} />
        </mesh>

        {/* ── Two intake fans · hub + 7 blades each ─────────────────── */}
        <Fan position={[-1.25, 0.22, 0]} />
        <Fan position={[1.25, 0.22, 0]} />

        {/* ── Subtle brand accent strip (honey-gold sliver) ─────────── */}
        <mesh position={[0, 0, 0.81]}>
          <boxGeometry args={[1.8, 0.06, 0.02]} />
          <meshStandardMaterial
            color={ACCENT_HONEY}
            emissive={ACCENT_HONEY}
            emissiveIntensity={0.4}
            metalness={0.9}
            roughness={0.2}
          />
        </mesh>

        {/* ── Rear I/O bracket (display outputs side) ──────────────── */}
        <mesh position={[-2.35, -0.2, 0]} castShadow>
          <boxGeometry args={[0.12, 1.2, 1.4]} />
          <meshStandardMaterial color={"#202327"} metalness={0.6} roughness={0.3} />
        </mesh>
        {/* I/O port slots (decorative little notches) */}
        {[-0.45, -0.15, 0.15, 0.45].map((y) => (
          <mesh key={y} position={[-2.38, y - 0.2, 0]}>
            <boxGeometry args={[0.05, 0.12, 0.55]} />
            <meshStandardMaterial color={"#050607"} metalness={0.4} roughness={0.8} />
          </mesh>
        ))}

        {/* ── Backplate (rear side, slightly inset) ────────────────── */}
        <mesh position={[0, 0, -0.81]} castShadow>
          <boxGeometry args={[4.55, 1.45, 0.04]} />
          <meshStandardMaterial color={"#0e1013"} metalness={0.4} roughness={0.6} />
        </mesh>

        {/* ── Power connector (top-right corner, recognizable detail) ─ */}
        <mesh position={[1.9, 0.78, 0.55]} castShadow>
          <boxGeometry args={[0.45, 0.18, 0.4]} />
          <meshStandardMaterial color={"#0a0b0d"} metalness={0.3} roughness={0.7} />
        </mesh>
      </group>
    </Float>
  );
}

function Fan({ position }: { position: [number, number, number] }) {
  const blades = useRef<THREE.Group>(null!);
  useFrame((_, delta) => {
    // Very subtle constant spin · workstation idle, not gaming hum.
    if (blades.current) blades.current.rotation.z += delta * 0.35;
  });
  return (
    <group position={position}>
      {/* Fan housing ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
        <torusGeometry args={[0.7, 0.04, 16, 64]} />
        <meshStandardMaterial color={GRAPHITE} metalness={0.6} roughness={0.4} />
      </mesh>
      {/* Hub */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.18, 0.18, 0.05, 24]} />
        <meshStandardMaterial color={"#080a0c"} metalness={0.5} roughness={0.55} />
      </mesh>
      {/* Bladed wheel */}
      <group ref={blades} rotation={[Math.PI / 2, 0, 0]}>
        {Array.from({ length: 7 }, (_, i) => i).map((i) => {
          const a = (i / 7) * Math.PI * 2;
          return (
            <mesh key={i} position={[Math.cos(a) * 0.42, 0, Math.sin(a) * 0.42]} rotation={[0, a + Math.PI / 2.4, 0]}>
              <boxGeometry args={[0.45, 0.03, 0.18]} />
              <meshStandardMaterial color={"#13161a"} metalness={0.55} roughness={0.5} />
            </mesh>
          );
        })}
      </group>
    </group>
  );
}
