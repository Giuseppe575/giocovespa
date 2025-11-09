
import * as THREE from "three";

export const randRange = (min: number, max: number): number =>
  min + Math.random() * (max - min);

export const choice = <T>(arr: T[]): T =>
  arr[Math.floor(Math.random() * arr.length)];

export const ease = {
  cubicOut: (t: number) => 1 - Math.pow(1 - t, 3),
  cubicInOut: (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
};

export const lerp = (a: number, b: number, t: number): number =>
  a + (b - a) * t;

export const lerpVec3 = (v: THREE.Vector3, target: THREE.Vector3, t: number) =>
  v.lerp(target, t);

export const clamp = (v: number, min: number, max: number): number =>
  v < min ? min : v > max ? max : v;

export const now = (): number => performance.now() / 1000;

export const createEmissiveMaterial = (
  color: number,
  intensity = 1
): THREE.MeshStandardMaterial =>
  new THREE.MeshStandardMaterial({
    color: new THREE.Color(color).multiplyScalar(0.2),
    emissive: new THREE.Color(color),
    emissiveIntensity: intensity,
    metalness: 0.1,
    roughness: 0.4,
  });

export const createBasicMetal = (color: number): THREE.MeshStandardMaterial =>
  new THREE.MeshStandardMaterial({
    color,
    metalness: 0.7,
    roughness: 0.35,
  });

export const createSoftBody = (color: number): THREE.MeshStandardMaterial =>
  new THREE.MeshStandardMaterial({
    color,
    metalness: 0.05,
    roughness: 0.85,
  });

export const shakeValue = (time: number, intensity: number): number =>
  (Math.sin(time * 43.7) + Math.sin(time * 31.1)) * 0.5 * intensity;

export const glowColor = (base: number, factor: number): number => {
  const c = new THREE.Color(base);
  c.multiplyScalar(factor);
  return c.getHex();
};
