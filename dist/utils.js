// @ts-nocheck
import * as THREE from "three";
export const randRange = (min, max) => min + Math.random() * (max - min);
export const choice = (arr) => arr[Math.floor(Math.random() * arr.length)];
export const ease = {
    cubicOut: (t) => 1 - Math.pow(1 - t, 3),
    cubicInOut: (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
};
export const lerp = (a, b, t) => a + (b - a) * t;
export const lerpVec3 = (v, target, t) => v.lerp(target, t);
export const clamp = (v, min, max) => v < min ? min : v > max ? max : v;
export const now = () => performance.now() / 1000;
export const createEmissiveMaterial = (color, intensity = 1) => new THREE.MeshStandardMaterial({
    color: new THREE.Color(color).multiplyScalar(0.2),
    emissive: new THREE.Color(color),
    emissiveIntensity: intensity,
    metalness: 0.1,
    roughness: 0.4,
});
export const createBasicMetal = (color) => new THREE.MeshStandardMaterial({
    color,
    metalness: 0.7,
    roughness: 0.35,
});
export const createSoftBody = (color) => new THREE.MeshStandardMaterial({
    color,
    metalness: 0.05,
    roughness: 0.85,
});
export const shakeValue = (time, intensity) => (Math.sin(time * 43.7) + Math.sin(time * 31.1)) * 0.5 * intensity;
export const glowColor = (base, factor) => {
    const c = new THREE.Color(base);
    c.multiplyScalar(factor);
    return c.getHex();
};
