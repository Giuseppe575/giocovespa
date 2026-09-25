import * as THREE from "three";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";

// Shared visual-only parts keep the extra traffic and player vehicles cheap.
const chrome = new THREE.MeshStandardMaterial({
  color: 0xd8e1de,
  metalness: 0.86,
  roughness: 0.22,
});
const darkRubber = new THREE.MeshStandardMaterial({
  color: 0x202426,
  metalness: 0.02,
  roughness: 0.92,
});
const glass = new THREE.MeshStandardMaterial({
  color: 0x9fc9c9,
  metalness: 0.15,
  roughness: 0.19,
  transparent: true,
  opacity: 0.72,
});
const trim = new THREE.MeshStandardMaterial({ color: 0x222c2d, roughness: 0.72 });
const scooterPaint = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  metalness: 0.38,
  roughness: 0.29,
});
const wheelHubGeometry = new THREE.CylinderGeometry(0.13, 0.13, 0.17, 20);
const carBodyGeometry = (() => {
  const shape = new THREE.Shape();
  const halfW = 0.6;
  const halfL = 1;
  const radius = 0.16;
  shape.moveTo(-halfW + radius, -halfL);
  shape.lineTo(halfW - radius, -halfL);
  shape.quadraticCurveTo(halfW, -halfL, halfW, -halfL + radius);
  shape.lineTo(halfW, halfL - radius);
  shape.quadraticCurveTo(halfW, halfL, halfW - radius, halfL);
  shape.lineTo(-halfW + radius, halfL);
  shape.quadraticCurveTo(-halfW, halfL, -halfW, halfL - radius);
  shape.lineTo(-halfW, -halfL + radius);
  shape.quadraticCurveTo(-halfW, -halfL, -halfW + radius, -halfL);
  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth: 0.35, bevelEnabled: true, bevelSegments: 2,
    bevelSize: 0.045, bevelThickness: 0.035, curveSegments: 5,
  });
  geometry.rotateX(-Math.PI / 2);
  geometry.translate(0, -0.175, 0);
  return geometry;
})();
const mirrorStemGeometry = new THREE.CylinderGeometry(0.018, 0.022, 0.24, 8);
const mirrorGeometry = new THREE.SphereGeometry(0.105, 16, 10);
const wheelHubMat = new THREE.MeshStandardMaterial({ color: 0xaebcba, metalness: 0.8, roughness: 0.27 });
const hubRingGeometry = new THREE.TorusGeometry(0.135, 0.018, 6, 18);
const carGlassGeometry = new THREE.PlaneGeometry(0.72, 0.31);
const carRearGlassGeometry = new THREE.PlaneGeometry(0.68, 0.27);
const carSideGlassGeometry = new THREE.BoxGeometry(0.018, 0.27, 0.58);
const carDoorSeamGeometry = new THREE.BoxGeometry(0.012, 0.24, 0.012);
const carHandleGeometry = new THREE.BoxGeometry(0.035, 0.025, 0.11);
const carBumperGeometry = new THREE.BoxGeometry(1.12, 0.075, 0.12);
const carGrilleGeometry = new THREE.BoxGeometry(0.34, 0.12, 0.025);
const carBadgeGeometry = new THREE.SphereGeometry(0.045, 12, 8);
const carPlateGeometry = new THREE.BoxGeometry(0.3, 0.09, 0.018);
const carPlateMaterial = new THREE.MeshStandardMaterial({ color: 0xe9e5d6, roughness: 0.6 });
const scooterLampBezelGeometry = new THREE.TorusGeometry(0.12, 0.025, 8, 24);
const scooterForkGeometry = new THREE.CylinderGeometry(0.035, 0.045, 0.58, 10);
const scooterSideRailGeometry = new THREE.CylinderGeometry(0.018, 0.018, 0.78, 8);
const scooterCarrierGeometry = new RoundedBoxGeometry(0.42, 0.035, 0.44, 2, 0.015);
const scooterGripGeometry = new THREE.CylinderGeometry(0.045, 0.045, 0.2, 10);
const scooterFenderGeometry = new THREE.TorusGeometry(0.265, 0.035, 7, 24, Math.PI);
const roundedBoxCache = new Map<string, RoundedBoxGeometry>();

function mesh(geometry: THREE.BufferGeometry, material: THREE.Material, position: THREE.Vector3, name: string) {
  const part = new THREE.Mesh(geometry, material);
  part.position.copy(position);
  part.name = name;
  part.castShadow = true;
  part.receiveShadow = true;
  return part;
}

function addMirror(group: THREE.Group, x: number, y: number, z: number, name: string) {
  const stem = mesh(mirrorStemGeometry, chrome, new THREE.Vector3(x, y, z), `${name}-stem`);
  stem.rotation.z = x < 0 ? 0.38 : -0.38;
  const mirror = mesh(mirrorGeometry, chrome, new THREE.Vector3(x * 1.22, y + 0.11, z - 0.04), `${name}-mirror`);
  mirror.scale.set(1.25, 0.78, 0.42);
  group.add(stem, mirror);
}

function roundCarBody(group: THREE.Group) {
  const body = group.children.find((child): child is THREE.Mesh => {
    if (!(child instanceof THREE.Mesh) || !(child.geometry instanceof THREE.BoxGeometry)) return false;
    return Math.abs(child.position.y - 0.4) < 0.02;
  });
  if (!body) return;
  body.geometry.dispose();
  body.geometry = carBodyGeometry;
  if (body.material instanceof THREE.MeshStandardMaterial) {
    body.material.roughness = 0.3;
    body.material.metalness = 0.34;
  }
}

export function enhanceCar(group: THREE.Group): void {
  if (group.userData.vehicleDetailsEnhanced) return;
  group.userData.vehicleDetailsEnhanced = true;

  roundCarBody(group);
  group.traverse((obj) => {
    if (!(obj instanceof THREE.Mesh)) return;
    const materials = Array.isArray(obj.material) ? obj.material : [obj.material];
    for (const material of materials) {
      if (material instanceof THREE.MeshStandardMaterial && material.roughness > 0.65 && obj.position.y > 0.25) {
        material.roughness = 0.3;
        material.metalness = 0.34;
      }
    }
  });

  // Glass panes sit on the cabin faces; the cabin remains as a dark surround.
  const windshield = mesh(carGlassGeometry, glass, new THREE.Vector3(0, 0.76, -0.515), "car-windshield");
  windshield.rotation.set(0.24, Math.PI, 0);
  windshield.castShadow = false;
  const rearGlass = mesh(carRearGlassGeometry, glass, new THREE.Vector3(0, 0.76, 0.315), "car-rear-glass");
  rearGlass.rotation.x = -0.24;
  rearGlass.castShadow = false;
  group.add(windshield, rearGlass);

  for (const side of [-1, 1]) {
    const pane = mesh(carSideGlassGeometry, glass,
      new THREE.Vector3(side * 0.458, 0.77, -0.1), `car-side-glass-${side}`);
    pane.castShadow = false;
    addMirror(group, side * 0.57, 0.78, -0.39, `car-mirror-${side}`);

    // Slim door cut lines and handles make the flank read as a car body.
    const seam = mesh(carDoorSeamGeometry, trim,
      new THREE.Vector3(side * 0.603, 0.42, 0.02), `car-door-seam-${side}`);
    const handle = mesh(carHandleGeometry, chrome,
      new THREE.Vector3(side * 0.611, 0.49, -0.16), `car-door-handle-${side}`);
    group.add(pane, seam, handle);
  }

  const bumperFront = mesh(carBumperGeometry, chrome,
    new THREE.Vector3(0, 0.24, -1.01), "car-front-bumper");
  const bumperRear = mesh(carBumperGeometry, chrome,
    new THREE.Vector3(0, 0.24, 1.01), "car-rear-bumper");
  const grille = mesh(carGrilleGeometry, trim,
    new THREE.Vector3(0, 0.36, -1.025), "car-grille");
  const badge = mesh(carBadgeGeometry, chrome,
    new THREE.Vector3(0, 0.37, -1.045), "car-grille-badge");
  const plate = mesh(carPlateGeometry, carPlateMaterial,
    new THREE.Vector3(0, 0.34, 1.024), "car-rear-plate");
  group.add(bumperFront, bumperRear, grille, badge, plate);

  // Bright inset hubs and a second inner ring add definition to the tires.
  for (const wheel of group.userData.wheels as THREE.Mesh[] | undefined ?? []) {
    const hub = mesh(wheelHubGeometry, wheelHubMat, wheel.position.clone(), "car-wheel-hub");
    hub.rotation.z = Math.PI / 2;
    hub.scale.y = 1.2;
    const ring = mesh(hubRingGeometry, chrome, wheel.position.clone(), "car-wheel-hub-ring");
    ring.rotation.y = Math.PI / 2;
    ring.scale.x = 1.2;
    group.add(hub, ring);
  }
}

export function enhanceScooter(group: THREE.Group): void {
  if (group.userData.vehicleDetailsEnhanced) return;
  group.userData.vehicleDetailsEnhanced = true;

  // Tune painted panels while leaving the rider's fabric, skin, and helmet matte.
  for (const child of group.children) {
    if (!(child instanceof THREE.Mesh)) continue;
    if (child.geometry instanceof THREE.BoxGeometry) {
      const { width, height, depth } = child.geometry.parameters;
      const radius = Math.min(width, height, depth) * 0.22;
      const key = `${width}:${height}:${depth}:${radius}`;
      let rounded = roundedBoxCache.get(key);
      if (!rounded) {
        rounded = new RoundedBoxGeometry(width, height, depth, 3, radius);
        roundedBoxCache.set(key, rounded);
      }
      child.geometry.dispose();
      child.geometry = rounded;
    }
    if (!(child.material instanceof THREE.MeshStandardMaterial)) continue;
    if (child.position.y > 0.48 && child.position.y < 1.4 && child.position.z < 0.6 && child.material.roughness < 0.5) {
      child.material.roughness = 0.28;
      child.material.metalness = 0.42;
    }
  }

  // Chrome headlamp bezel, fork legs, side trim, rear carrier and rubber grips.
  const headlampRing = mesh(scooterLampBezelGeometry, chrome,
    new THREE.Vector3(0, 1.2, -0.595), "scooter-headlamp-bezel");
  const fork = new THREE.Group();
  for (const side of [-1, 1]) {
    const forkLeg = mesh(scooterForkGeometry, chrome,
      new THREE.Vector3(side * 0.09, 0.59, -0.55), `scooter-fork-${side}`);
    forkLeg.rotation.x = -0.13;
    fork.add(forkLeg);
  }
  const sideRail = new THREE.Mesh(scooterSideRailGeometry, chrome);
  sideRail.rotation.x = Math.PI / 2;
  sideRail.position.set(0.31, 0.7, 0.47);
  sideRail.name = "scooter-side-rail";
  const carrier = new THREE.Mesh(scooterCarrierGeometry, chrome);
  carrier.position.set(0, 1.08, 0.69);
  carrier.name = "scooter-rear-carrier";
  const grips = new THREE.Mesh(scooterGripGeometry, darkRubber);
  grips.rotation.z = Math.PI / 2;
  grips.position.set(0.34, 1.18, -0.45);
  grips.name = "scooter-handle-grips";

  group.add(headlampRing, fork, sideRail, carrier, grips);
  addMirror(group, -0.38, 1.27, -0.45, "scooter-mirror-left");
  addMirror(group, 0.38, 1.27, -0.45, "scooter-mirror-right");

  const frontFender = mesh(scooterFenderGeometry,
    scooterPaint, new THREE.Vector3(0, 0.34, -0.55), "scooter-front-fender");
  frontFender.rotation.y = Math.PI / 2;
  frontFender.rotation.z = Math.PI;
  group.add(frontFender);
}
