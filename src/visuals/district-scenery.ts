import * as THREE from "three";
import type { DistrictId } from "../core/circuit";
import { createPalm } from "./coast";
import { seaMaterial } from "./atmosphere";
import { facadeGeometry, surfaces } from "./surfaces";
import { createPerson } from "./street-life";

const box = new THREE.BoxGeometry(1, 1, 1);
const signTextures = new Map<string, THREE.CanvasTexture>();
const signMaterials = new Map<string, THREE.MeshStandardMaterial>();
const trim = new THREE.MeshStandardMaterial({ color: 0xe4d7bf, roughness: 0.88 });
const glass = new THREE.MeshStandardMaterial({ color: 0xadc4c4, roughness: 0.2, metalness: 0.05, transparent:true, opacity:.16, depthWrite:false });
const dark = new THREE.MeshStandardMaterial({ color: 0x302c26, roughness: 0.9 });
const awnings = [0xb86648, 0x667f79, 0xd3b273, 0x7c6254].map(color => new THREE.MeshStandardMaterial({ color, roughness: 0.94 }));
const marketCloth = [0xc4a46c, 0x9e6247, 0x71857a].map(color => new THREE.MeshStandardMaterial({ color, roughness: 1, side: THREE.DoubleSide }));
const hillGreen = new THREE.MeshStandardMaterial({ color: 0x36533b, roughness: 1 });
const tableTop = new THREE.MeshStandardMaterial({ color: 0xd4c6a8, roughness: 0.9 });
const umbrellaGeometry = new THREE.ConeGeometry(1.35, 0.46, 20, 1, true);
const umbrellaPoleGeometry = new THREE.CylinderGeometry(0.025, 0.035, 1.9, 8);
const umbrellaMaterials = [0xe6ddca, 0xb86e50].map(color => new THREE.MeshStandardMaterial({ color, roughness: 0.95, side: THREE.DoubleSide }));

function signMaterial(label: string) {
  let material = signMaterials.get(label);
  if (material) return material;
  let map = signTextures.get(label);
  if (!map) {
    const canvas = document.createElement("canvas"); canvas.width = 512; canvas.height = 128;
    const context = canvas.getContext("2d")!;
    context.fillStyle = "#35463f"; context.fillRect(0, 0, 512, 128);
    context.strokeStyle = "#d6bd8d"; context.lineWidth = 7; context.strokeRect(7, 7, 498, 114);
    context.fillStyle = "#f4ead4"; context.font = "bold 56px Georgia"; context.textAlign = "center"; context.textBaseline = "middle";
    context.fillText(label, 256, 66, 460);
    map = new THREE.CanvasTexture(canvas); map.colorSpace = THREE.SRGBColorSpace; map.anisotropy = 4;
    signTextures.set(label, map);
  }
  material = new THREE.MeshStandardMaterial({ map, roughness: 0.72 }); signMaterials.set(label, material);
  return material;
}

function mesh(geometry: THREE.BufferGeometry, material: THREE.Material, parent: THREE.Group, x: number, y: number, z: number, sx = 1, sy = 1, sz = 1) {
  const item = new THREE.Mesh(geometry, material);
  item.position.set(x, y, z); item.scale.set(sx, sy, sz); item.castShadow = true; item.receiveShadow = true;
  item.userData.sharedResources = true; parent.add(item); return item;
}

function boxAt(parent: THREE.Group, material: THREE.Material, x: number, y: number, z: number, sx: number, sy: number, sz: number) {
  return mesh(box, material, parent, x, y, z, sx, sy, sz);
}

function instanced(parent: THREE.Group, geometry: THREE.BufferGeometry, material: THREE.Material, transforms: THREE.Matrix4[]) {
  const items = new THREE.InstancedMesh(geometry, material, transforms.length);
  transforms.forEach((matrix, index) => items.setMatrixAt(index, matrix));
  items.castShadow = true; items.receiveShadow = true; items.userData.sharedResources = true; parent.add(items);
}

function front(side: -1 | 1) { return -side; }
function buildShop(group: THREE.Group, side: -1 | 1, variant: number, label: string, stories: number) {
  const s = surfaces(), face = front(side), height = stories * 2.5 + 0.25;
  const facade = s.facades[(variant + 1) % s.facades.length];
  mesh(facadeGeometry(3.8, height-2.7, 9.5), facade, group, 0, 2.7+(height-2.7) / 2, 0);
  boxAt(group, s.stone, 0, 0.17, 0, 4.05, 0.34, 9.75);
  boxAt(group, s.roof, 0, height + 0.12, 0, 4.05, 0.24, 9.75);
  boxAt(group, trim, face * 1.96, height + 0.34, 0, 0.12, 0.2, 9.8);
  // Open ground-floor rooms with actual depth, masonry piers and small clear panes.
  boxAt(group, trim, -face*1.7,1.45,0,.16,2.6,9.5);
  boxAt(group, s.pavement,0,.28,0,3.8,.15,9.5);
  boxAt(group, trim,0,1.45,-4.68,3.8,2.6,.15);
  boxAt(group, trim,0,1.45,4.68,3.8,2.6,.15);
  const piers:THREE.Matrix4[]=[];
  for(const z of [-4.5,-1.5,1.5,4.5]) {
    const p=new THREE.Object3D();p.position.set(face*1.85,1.48,z);p.scale.set(.38,2.55,.35);p.updateMatrix();piers.push(p.matrix.clone());
  }
  instanced(group,box,s.stone,piers);
  boxAt(group,dark,-face*.6,.8,0,.6,1.1,3.6);
  boxAt(group,tableTop,-face*.6,1.39,0,.75,.1,3.8);
  for(const z of [-3,3]) {
    const pane=boxAt(group,glass,face*1.9,1.45,z,.025,1.65,1.1);pane.castShadow=false;
    boxAt(group,dark,face*1.92,.64,z,.045,.045,1.2);
    boxAt(group,dark,face*1.92,2.27,z,.045,.045,1.2);
  }
  boxAt(group, trim, face * 2.0, 2.52, 0, 0.2, 0.3, 9.65);
  boxAt(group, dark, face * 2.08, 2.68, 0, 0.12, 0.58, 3.9);
  const sign = mesh(new THREE.PlaneGeometry(3.7, 0.46), signMaterial(label), group, face * 2.15, 2.68, 0, 1, 1, 1);
  sign.rotation.y = face * Math.PI / 2;
  // A striped canvas awning shades the frontage above the shop windows.
  const stripes: THREE.Matrix4[][] = [[], []];
  for (let i = 0; i < 12; i++) {
    const o = new THREE.Object3D(); o.position.set(face * 2.48, 2.48, -3.3 + i * 0.6);
    o.rotation.z = face * 0.13; o.scale.set(1.1, 0.1, 0.6); o.updateMatrix(); stripes[i % 2].push(o.matrix.clone());
  }
  instanced(group, box, awnings[variant % awnings.length], stripes[0]);
  instanced(group, box, trim, stripes[1]);
  // The facade texture supplies upper windows; rails add depth without obscuring them.
  const balconyMatrices: THREE.Matrix4[] = [];
  for (let floor = 0; floor < stories; floor++) for (let bay = 0; bay < 3; bay++) {
    const y = 2.65 + floor * 2.5, z = -3 + bay * 3;
    if ((floor + bay + variant) % 3 === 0) {
      const rail = new THREE.Object3D(); rail.position.set(face * 2.13, y - 0.48, z); rail.rotation.y = face * Math.PI / 2; rail.scale.set(1.4, 0.08, 0.32); rail.updateMatrix(); balconyMatrices.push(rail.matrix.clone());
    }
  }
  if (balconyMatrices.length) instanced(group, box, s.iron, balconyMatrices);
  // Compact tables and stools stay inside the four metre frontage strip.
  const legs: THREE.Matrix4[] = [], tops: THREE.Matrix4[] = [];
  for (const z of [-3.4, 3.3]) {
    const t = new THREE.Object3D(); t.position.set(face * 2.65, 1, z); t.scale.set(0.72, 0.09, 0.72); t.updateMatrix(); tops.push(t.matrix.clone());
    for (const dz of [-0.24, 0.24]) { const l = new THREE.Object3D(); l.position.set(face * 2.65, 0.64, z + dz); l.scale.set(0.06, 0.7, 0.06); l.updateMatrix(); legs.push(l.matrix.clone()); }
    for (const dz of [-0.62, 0.62]) {
      const seat = new THREE.Object3D(); seat.position.set(face * 2.65, 0.71, z + dz); seat.scale.set(0.44, 0.08, 0.44); seat.updateMatrix(); tops.push(seat.matrix.clone());
      const chairLeg = new THREE.Object3D(); chairLeg.position.set(face * 2.65, 0.49, z + dz); chairLeg.scale.set(0.06, 0.42, 0.06); chairLeg.updateMatrix(); legs.push(chairLeg.matrix.clone());
    }
  }
  instanced(group, box, tableTop, tops); instanced(group, box, dark, legs);
  if(label!=="BOTTEGA") {
    for(const [i,z] of [-3.4,3.3].entries()) {
      const person=createPerson(true,variant+i);
      person.position.set(face*2.65,.28,z+.62);group.add(person);
      const cup=mesh(new THREE.CylinderGeometry(.045,.035,.1,10),trim,group,face*2.65,1.11,z);
      cup.castShadow=false;
    }
  }
}

function buildMarket(group: THREE.Group, side: -1 | 1, variant: number) {
  const s = surfaces();
  mesh(facadeGeometry(4, 7.5, 9.5), s.facades[variant % 4], group, side * 5, 3.75, 0);
  boxAt(group, s.roof, side * 5, 7.65, 0, 4.25, .3, 9.8);
  boxAt(group, s.pavement, 0, 0.04, 0, 4.1, 0.08, 10);
  for (let stall = 0; stall < 2; stall++) {
    const z = stall ? 2.45 : -2.45, cloth = marketCloth[(variant + stall) % marketCloth.length];
    boxAt(group, s.stone, 0, 0.65, z, 1.15, 1.2, 3.8);
    boxAt(group, cloth, 0, 2.35, z, 2.5, 0.12, 4.5);
    const supports: THREE.Matrix4[] = [];
    for (const x of [-1.05, 1.05]) for (const dz of [-1.95, 1.95]) { const o = new THREE.Object3D(); o.position.set(x, 1.17, z + dz); o.scale.set(0.07, 2.34, 0.07); o.updateMatrix(); supports.push(o.matrix.clone()); }
    instanced(group, box, s.iron, supports);
    const produce: THREE.Matrix4[] = [];
    for (let i = 0; i < 6; i++) { const o = new THREE.Object3D(); o.position.set(-0.18 + (i % 3) * 0.18, 1.32 + (i % 2) * 0.08, z - 1.2 + Math.floor(i / 3) * 0.55); o.scale.set(0.16, 0.16, 0.16); o.updateMatrix(); produce.push(o.matrix.clone()); }
    instanced(group, new THREE.SphereGeometry(0.5, 8, 6), awnings[(variant + stall) % awnings.length], produce);
  }
}

function buildHill(group: THREE.Group, side: -1 | 1, variant: number) {
  const s = surfaces(), face = front(side), villa = s.facades[(variant + 2) % s.facades.length];
  mesh(facadeGeometry(3.35, 4.5, 7.2), villa, group, 0, 2.25, 0);
  boxAt(group, s.roof, 0, 4.62, 0, 3.7, 0.35, 7.6);
  boxAt(group, s.stone, face * 2, 0.48, 0, 0.55, 0.96, 9.8);
  const cypressGeometry = new THREE.ConeGeometry(0.65, 5.7, 7);
  for (const z of [-3.4, 3.5]) mesh(cypressGeometry, hillGreen, group, face * 2.7, 2.85, z, 1, 1, 1);
  boxAt(group, s.iron, face * 2.15, 1.22, 0, 0.08, 0.08, 8.4);
}

function buildBeach(group: THREE.Group, variant: number) {
  const s = surfaces();
  // Sand meets the promenade; the broad sea strip overlaps neighboring templates along the route.
  boxAt(group, s.sand, 3.2, 0.015, 0, 8.5, 0.03, 10);
  boxAt(group, seaMaterial(), 62.45, 0.02, 0, 110, 0.06, 24);
  const palm = createPalm(); palm.position.set(2.9, 0, variant % 2 ? -3.7 : 3.7); palm.scale.setScalar(0.82); palm.userData.sharedResources = true; group.add(palm);
  const palms = createPalm(); palms.position.set(11.5, 0, variant % 2 ? 3.7 : -3.7); palms.scale.setScalar(0.72); palms.userData.sharedResources = true; group.add(palms);
  const umbrellaPoles: THREE.Matrix4[] = [];
  for (const z of [-2.65, 2.65]) {
    const umbrella = mesh(umbrellaGeometry, umbrellaMaterials[(variant + (z > 0 ? 1 : 0)) % 2], group, 4.65, 2.15, z);
    umbrella.rotation.y = z > 0 ? 0.35 : -0.25;
    const pole = new THREE.Object3D(); pole.position.set(4.65, 1, z); pole.updateMatrix(); umbrellaPoles.push(pole.matrix.clone());
  }
  instanced(group, umbrellaPoleGeometry, s.iron, umbrellaPoles);
  // Low beach wall and evenly spaced balusters along the promenade edge.
  boxAt(group, s.stone, 0.5, 0.5, 0, 0.18, 0.18, 9.8);
  const posts: THREE.Matrix4[] = [];
  for (let i = 0; i < 9; i++) { const o = new THREE.Object3D(); o.position.set(0.5, 0.28, -4.4 + i * 1.1); o.scale.set(0.2, 0.55, 0.2); o.updateMatrix(); posts.push(o.matrix.clone()); }
  instanced(group, box, s.stone, posts);
}

/** Creates a deterministic ten metre roadside block, with its shopfront facing the road. */
export function createDistrictScenery(districtId: DistrictId, side: -1 | 1, variant: number): THREE.Group {
  const group = new THREE.Group(); group.userData.sharedResources = true;
  if (districtId === "historic-center") buildShop(group, side, variant, ["BAR", "BOTTEGA", "RISTORANTE", "CAFFÈ"][variant % 4], 2 + (variant % 3));
  else if (districtId === "market") buildMarket(group, side, variant);
  else if (districtId === "hillside") buildHill(group, side, variant);
  else if (side === 1) buildBeach(group, variant);
  else buildShop(group, side, variant, variant % 2 ? "ALBERGO" : "RISTORANTE", 2);
  return group;
}
