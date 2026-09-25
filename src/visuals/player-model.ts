import * as THREE from "three";
import { createClassicScooter } from "./classic-scooter";

function ellipsoid(
  material: THREE.Material,
  position: [number, number, number],
  size: [number, number, number],
): THREE.Mesh {
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(1, 24, 16), material);
  mesh.position.set(...position);
  mesh.scale.set(...size);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

function limb(
  material: THREE.Material,
  start: [number, number, number],
  end: [number, number, number],
  startRadius: number,
  endRadius: number,
): THREE.Mesh {
  const from = new THREE.Vector3(...start);
  const to = new THREE.Vector3(...end);
  const mesh = new THREE.Mesh(
    new THREE.CylinderGeometry(startRadius, endRadius, from.distanceTo(to), 14),
    material,
  );
  mesh.position.copy(from).add(to).multiplyScalar(0.5);
  mesh.quaternion.setFromUnitVectors(
    new THREE.Vector3(0, 1, 0),
    from.sub(to).normalize(),
  );
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

// Smooth, tailored rider matching the user's supplied rear-view reference.
function createRider(): THREE.Group {
  const rider = new THREE.Group();
  rider.name = "rider";
  const jacket = new THREE.MeshStandardMaterial({ color: 0x075464, roughness: 0.88 });
  const jacketTrim = new THREE.MeshStandardMaterial({ color: 0x14343b, roughness: 0.9 });
  const trousers = new THREE.MeshStandardMaterial({ color: 0x263238, roughness: 0.94 });
  const boots = new THREE.MeshStandardMaterial({ color: 0x191c1d, roughness: 0.76 });
  const gloves = new THREE.MeshStandardMaterial({ color: 0x191c1d, roughness: 0.8 });
  const helmet = new THREE.MeshStandardMaterial({ color: 0xe9e7df, metalness: 0.2, roughness: 0.31 });
  const visor = new THREE.MeshStandardMaterial({ color: 0x1e3840, metalness: 0.18, roughness: 0.16 });

  // Hips are directly over the saddle; feet reach the scooter floorboard.
  rider.add(ellipsoid(trousers, [0, 0.9, 0.23], [0.23, 0.13, 0.19]));
  const torso = ellipsoid(jacket, [0, 1.22, 0.2], [0.23, 0.33, 0.15]);
  torso.rotation.x = -0.13;
  rider.add(torso);
  rider.add(ellipsoid(jacketTrim, [0, 1.0, 0.2], [0.23, 0.045, 0.15]));
  rider.add(limb(jacketTrim, [0, 1.46, 0.18], [0, 1.53, 0.14], 0.075, 0.066));

  for (const side of [-1, 1]) {
    const x = side * 0.17;
    rider.add(limb(trousers, [x, 0.89, 0.25], [side * 0.24, 0.68, -0.04], 0.11, 0.09));
    rider.add(ellipsoid(trousers, [side * 0.24, 0.67, -0.04], [0.095, 0.095, 0.095]));
    rider.add(limb(trousers, [side * 0.24, 0.65, -0.04], [side * 0.22, 0.39, -0.11], 0.09, 0.07));
    rider.add(ellipsoid(boots, [side * 0.22, 0.34, -0.2], [0.095, 0.065, 0.17]));

    rider.add(ellipsoid(jacket, [side * 0.23, 1.39, 0.17], [0.105, 0.11, 0.105]));
    rider.add(limb(jacket, [side * 0.25, 1.38, 0.15], [side * 0.27, 1.15, -0.1], 0.086, 0.068));
    rider.add(ellipsoid(jacketTrim, [side * 0.27, 1.14, -0.1], [0.067, 0.07, 0.067]));
    rider.add(limb(jacket, [side * 0.27, 1.14, -0.1], [side * 0.28, 1.08, -0.43], 0.066, 0.052));
    rider.add(ellipsoid(gloves, [side * 0.28, 1.08, -0.46], [0.064, 0.041, 0.077]));
  }

  rider.add(ellipsoid(helmet, [0, 1.65, 0.12], [0.155, 0.17, 0.155]));
  rider.add(ellipsoid(visor, [0, 1.65, -0.02], [0.126, 0.067, 0.026]));
  const helmetRim = new THREE.Mesh(
    new THREE.TorusGeometry(0.136, 0.012, 8, 36, Math.PI),
    jacketTrim,
  );
  helmetRim.position.set(0, 1.6, -0.02);
  helmetRim.rotation.z = Math.PI;
  helmetRim.castShadow = true;
  rider.add(helmetRim);
  return rider;
}

/** Replace visual children while preserving the player's gameplay transform. */
export async function enhancePlayerModel(existing: THREE.Group): Promise<void> {
  const scooter=createClassicScooter();
  const rider=createRider();
  existing.clear();
  existing.add(scooter,rider);
}
