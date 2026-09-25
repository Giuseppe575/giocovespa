import * as THREE from "three";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";

export const SCOOTER_COLORS = {red:0xb90912,white:0xeeeae1,gray:0x686d72} as const;
export type ScooterColor = keyof typeof SCOOTER_COLORS;

/** Rounded steel bodywork, proportions and rear view based on the supplied reference. */
export function createClassicScooter() {
  const scooter=new THREE.Group();scooter.name="classic-scooter";
  const paint=new THREE.MeshPhysicalMaterial({color:SCOOTER_COLORS.red,metalness:.16,roughness:.33,clearcoat:.8,clearcoatRoughness:.26,envMapIntensity:.4});
  paint.name="scooter-paint";
  const chrome=new THREE.MeshStandardMaterial({color:0xbfc6c7,metalness:.93,roughness:.18});
  const rubber=new THREE.MeshStandardMaterial({color:0x181b1d,roughness:.9});
  const leather=new THREE.MeshStandardMaterial({color:0x20262a,roughness:.57});
  const redLens=new THREE.MeshPhysicalMaterial({color:0x7b0205,roughness:.22,clearcoat:1,emissive:0xb2070a,emissiveIntensity:.45});
  const sphere=new THREE.SphereGeometry(1,32,24);
  const add=(geometry:THREE.BufferGeometry,material:THREE.Material,x:number,y:number,z:number)=>{
    const mesh=new THREE.Mesh(geometry,material);mesh.position.set(x,y,z);mesh.castShadow=true;mesh.receiveShadow=true;scooter.add(mesh);return mesh;
  };
  const rounded=(w:number,h:number,d:number,r=.06)=>new RoundedBoxGeometry(w,h,d,4,r);
  add(rounded(.54,.17,1.22),paint,0,.48,.01);
  const shield=add(rounded(.58,.76,.18,.085),paint,0,.84,-.49);shield.rotation.x=.15;
  for(const side of [-1,1]) {
    const fairing=add(sphere,paint,side*.18,.64,.46);fairing.scale.set(.20,.325,.5);
    const trimPath=new THREE.CatmullRomCurve3([
      new THREE.Vector3(side*.3,.89,.37),new THREE.Vector3(side*.402,.67,.76),new THREE.Vector3(side*.33,.34,.72),
    ]);
    add(new THREE.TubeGeometry(trimPath,24,.014,8,false),chrome,0,0,0);
    const mirrorStem=add(new THREE.CylinderGeometry(.014,.014,.27,10),chrome,side*.34,1.22,-.47);mirrorStem.rotation.z=-side*.22;
    const mirror=add(new THREE.SphereGeometry(.085,24,16),chrome,side*.39,1.36,-.47);mirror.scale.set(1,1,.22);
    add(rounded(.14,.065,.095,.025),rubber,side*.3,1.15,-.49);
  }
  add(rounded(.29,.66,.25,.12),paint,0,.62,.79);
  add(rounded(.49,.14,.71,.065),leather,0,1.00,.29);
  add(rounded(.5,.024,.69,.01),chrome,0,.929,.3);
  add(rounded(.24,.25,.055,.025),chrome,0,.61,.952);
  add(rounded(.19,.20,.058,.024),redLens,0,.61,.988);
  add(rounded(.7,.07,.09,.03),paint,0,1.15,-.48);
  const lamp=add(new THREE.CylinderGeometry(.1,.1,.07,24),chrome,0,1.16,-.56);lamp.rotation.x=Math.PI/2;
  for(const z of [-.63,.65]) {
    const tire=add(new THREE.CylinderGeometry(.235,.235,.145,32),rubber,0,.255,z);tire.rotation.z=Math.PI/2;
    const hub=add(new THREE.CylinderGeometry(.12,.12,.15,24),chrome,0,.255,z);hub.rotation.z=Math.PI/2;
  }
  const mudguard=add(sphere,paint,0,.49,-.63);mudguard.scale.set(.14,.09,.31);
  const exhaust=add(new THREE.CylinderGeometry(.055,.065,.49,20),chrome,.26,.25,.59);exhaust.rotation.x=Math.PI/2;
  return scooter;
}

export function setScooterColor(player:THREE.Group,color:ScooterColor) {
  player.traverse(object=>{
    if(!(object instanceof THREE.Mesh))return;
    for(const mat of Array.isArray(object.material)?object.material:[object.material]) {
      if(mat instanceof THREE.MeshStandardMaterial && mat.name==="scooter-paint")mat.color.setHex(SCOOTER_COLORS[color]);
    }
  });
}
