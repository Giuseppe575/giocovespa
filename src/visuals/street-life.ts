import * as THREE from "three";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";

const sphere = new THREE.SphereGeometry(1,12,10);
const cylinder = new THREE.CylinderGeometry(1,1,1,10);
const skin = new THREE.MeshStandardMaterial({color:0xb98c70,roughness:.85});
const hair = new THREE.MeshStandardMaterial({color:0x342c26,roughness:1});
const clothes = [0x737b70,0x9f694f,0x455c6c,0xc5b698].map(color=>new THREE.MeshStandardMaterial({color,roughness:.95}));
const trousers = new THREE.MeshStandardMaterial({color:0x343a3d,roughness:.95});

function ellipsoid(parent:THREE.Group,mat:THREE.Material,x:number,y:number,z:number,sx:number,sy:number,sz:number) {
  const part=new THREE.Mesh(sphere,mat);part.position.set(x,y,z);part.scale.set(sx,sy,sz);part.castShadow=true;parent.add(part);return part;
}
function limb(parent:THREE.Group,mat:THREE.Material,a:THREE.Vector3,b:THREE.Vector3,r:number) {
  const part=new THREE.Mesh(cylinder,mat);
  part.position.copy(a).add(b).multiplyScalar(.5);
  part.scale.set(r,a.distanceTo(b),r);
  part.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),b.clone().sub(a).normalize());
  part.castShadow=true;parent.add(part);
}
const seatedCache=new Map<number,THREE.Group>();

export function createPerson(seated:boolean,variant:number) {
  const key=variant%clothes.length;
  if(seated&&seatedCache.has(key)) return seatedCache.get(key)!.clone(true);
  const root=new THREE.Group(),shirt=clothes[key],hip=seated?.55:.9;
  ellipsoid(root,shirt,0,hip+.28,0,.2,.3,.12);
  ellipsoid(root,skin,0,hip+.71,-.015,.105,.135,.11);
  ellipsoid(root,hair,0,hip+.78,.016,.108,.085,.105);
  ellipsoid(root,trousers,0,hip,0,.17,.12,.12);
  for(const side of [-1,1]) {
    const leg=new THREE.Group();leg.name=side===-1?"leg-left":"leg-right";
    leg.position.set(side*.095,hip,0);root.add(leg);
    if(seated) {
      limb(leg,trousers,new THREE.Vector3(),new THREE.Vector3(0,-.1,-.32),.075);
      limb(leg,trousers,new THREE.Vector3(0,-.1,-.32),new THREE.Vector3(0,-.5,-.32),.055);
      ellipsoid(leg,hair,0,-.51,-.39,.07,.045,.13);
    } else {
      limb(leg,trousers,new THREE.Vector3(),new THREE.Vector3(0,-.76,0),.065);
      ellipsoid(leg,hair,0,-.8,-.06,.07,.055,.13);
    }
    const arm=new THREE.Group();arm.name=side===-1?"arm-left":"arm-right";
    arm.position.set(side*.2,hip+.42,0);root.add(arm);
    const elbow=new THREE.Vector3(side*.035,-.23,seated?-.12:0);
    const hand=new THREE.Vector3(side*.015,seated?-.27:-.48,seated?-.3:-.015);
    limb(arm,shirt,new THREE.Vector3(),elbow,.054);limb(arm,skin,elbow,hand,.039);
    ellipsoid(arm,skin,hand.x,hand.y,hand.z,.043,.06,.035);
  }
  if(!seated) return root;
  // Seated customers are static: merge by material instead of drawing every limb.
  root.updateMatrixWorld(true);
  const buckets=new Map<THREE.Material,THREE.BufferGeometry[]>();
  root.traverse(part=>{
    if(!(part instanceof THREE.Mesh)) return;
    const material=part.material as THREE.Material;
    if(!buckets.has(material)) buckets.set(material,[]);
    buckets.get(material)!.push(part.geometry.clone().applyMatrix4(part.matrixWorld));
  });
  const merged=new THREE.Group();
  for(const [mat,geometries] of buckets) {
    const geo=mergeGeometries(geometries);geometries.forEach(g=>g.dispose());
    if(geo){const item=new THREE.Mesh(geo,mat);item.castShadow=true;merged.add(item);}
  }
  seatedCache.set(key,merged);
  return merged.clone(true);
}

export function animatePerson(person:THREE.Group,time:number) {
  const stride=Math.sin(time*4.8)*.38;
  for(const [name,value] of [["leg-left",stride],["leg-right",-stride],["arm-left",-stride*.7],["arm-right",stride*.7]] as const) {
    const part=person.getObjectByName(name);if(part) part.rotation.x=value;
  }
}
