import * as THREE from "three";
import { surfaces } from "./surfaces";

const trunkMaterial=new THREE.MeshStandardMaterial({color:0x796950,roughness:1});
const leafMaterial=new THREE.MeshStandardMaterial({color:0x456b39,roughness:.85,side:THREE.DoubleSide});
const trunkGeometry=new THREE.CylinderGeometry(.11,.19,4.3,10,5);
// Each frond includes its leaflets in a single indexed mesh.
const frondGeometry=(()=>{
  const vertices:number[]=[];
  const indices:number[]=[];
  for(let i=0;i<19;i++) {
    const t=i/18, z=t*2.4, y=Math.sin(t*Math.PI)*.45-t*t*.65;
    const width=Math.sin(t*Math.PI)*.42+.015;
    const center=vertices.length/3;
    vertices.push(0,y,z,-width,y-.07,z-.12,width,y-.07,z-.12);
    if(i>0) indices.push(center-3,center,center+1,center-3,center+2,center);
  }
  const g=new THREE.BufferGeometry();
  g.setAttribute("position",new THREE.Float32BufferAttribute(vertices,3));g.setIndex(indices);g.computeVertexNormals();
  return g;
})();
const parasolGeometry=new THREE.ConeGeometry(1.2,.42,24,1,true);
const parasolMaterials=[0xe9dfc8,0x718f8a,0xb27959].map(color=>new THREE.MeshStandardMaterial({color,roughness:.95,side:THREE.DoubleSide}));

export function createPalm() {
  const palm=new THREE.Group();
  const trunk=new THREE.Mesh(trunkGeometry,trunkMaterial);
  trunk.position.set(.13,2.15,0);trunk.rotation.z=-.055;trunk.castShadow=true;
  palm.add(trunk);
  const leaves=new THREE.InstancedMesh(frondGeometry,leafMaterial,9);
  const transform=new THREE.Object3D();
  for(let i=0;i<9;i++) {
    transform.position.set(.25,4.3,0);transform.rotation.set((i%3)*.09,i*Math.PI*2/9,0);
    transform.updateMatrix();leaves.setMatrixAt(i,transform.matrix);
  }
  leaves.castShadow=true;
  palm.add(leaves);
  return palm;
}

export function dressCoast(group: THREE.Group, index: number) {
  const stone=surfaces().stone;
  const rail=new THREE.Mesh(new THREE.BoxGeometry(.16,.14,5),stone);
  rail.position.set(-.7,.91,0);rail.castShadow=true;
  group.add(rail);
  const posts=new THREE.InstancedMesh(new THREE.BoxGeometry(.18,.85,.18),stone,3);
  for(let i=0;i<3;i++) posts.setMatrixAt(i,new THREE.Matrix4().makeTranslation(-.7,.45,i*2-2));
  posts.castShadow=true;group.add(posts);
  if(index%3===0) {
    const parasol=new THREE.Mesh(parasolGeometry,parasolMaterials[index%parasolMaterials.length]);
    parasol.position.set(3.2,2.05,0);parasol.castShadow=true;
    const pole=new THREE.Mesh(new THREE.CylinderGeometry(.025,.035,2,8),stone);
    pole.position.set(3.2,1,0);
    const towel=new THREE.Mesh(new THREE.PlaneGeometry(.8,1.8),parasolMaterials[(index+1)%3]);
    towel.rotation.x=-Math.PI/2;towel.rotation.z=.3;towel.position.set(2.6,.082,.5);
    group.add(parasol,pole,towel);
  }
}
