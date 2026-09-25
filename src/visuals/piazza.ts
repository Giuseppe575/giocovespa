import * as THREE from "three";
import { surfaces } from "./surfaces";
import { createPerson } from "./street-life";

const box=new THREE.BoxGeometry(1,1,1);
const warmStone=new THREE.MeshStandardMaterial({color:0xd9cbb0,roughness:.95});
const doorMat=new THREE.MeshStandardMaterial({color:0x51402c,roughness:.8});
const windowMat=new THREE.MeshStandardMaterial({color:0x547782,metalness:.2,roughness:.25});
function block(parent:THREE.Group,mat:THREE.Material,x:number,y:number,z:number,w:number,h:number,d:number) {
  const mesh=new THREE.Mesh(box,mat);mesh.position.set(x,y,z);mesh.scale.set(w,h,d);mesh.castShadow=true;mesh.receiveShadow=true;parent.add(mesh);return mesh;
}
function arch(width:number,height:number) {
  const r=width/2,shape=new THREE.Shape();shape.moveTo(-r,0);shape.lineTo(r,0);shape.lineTo(r,height-r);shape.absarc(0,height-r,r,0,Math.PI,false);shape.closePath();
  return new THREE.ExtrudeGeometry(shape,{depth:.12,bevelEnabled:false,curveSegments:16});
}

export function createPiazza(side:-1|1,church:boolean) {
  const root=new THREE.Group(),s=surfaces();
  block(root,s.pavement,side*7,.13,0,21,.26,10);
  if(!church) return root;
  const chapel=new THREE.Group();chapel.position.set(side*12,0,0);chapel.rotation.y=-side*Math.PI/2;root.add(chapel);
  block(chapel,warmStone,0,4.8,0,8.5,9.6,12);
  block(chapel,s.stone,0,.32,6.3,9.2,.3,1.5);
  block(chapel,s.stone,0,.15,7,9.8,.3,1.8);
  const roof=new THREE.Mesh(new THREE.ConeGeometry(6.9,3.6,4),s.roof);
  roof.rotation.y=Math.PI/4;roof.scale.z=1.42;roof.position.y=11.35;roof.castShadow=true;chapel.add(roof);
  const entry=new THREE.Mesh(arch(2.1,3.7),doorMat);entry.position.set(0,.45,6.025);chapel.add(entry);
  block(chapel,s.stone,0,.44,6.12,2.6,.12,.2);
  for(const x of [-3.5,3.5]) {block(chapel,s.stone,x,4.8,6.1,.34,9.6,.25);block(chapel,s.stone,x,8.4,6.17,.65,.25,.35);}
  const rose=new THREE.Mesh(new THREE.CircleGeometry(1.03,32),windowMat);rose.position.set(0,6.4,6.08);chapel.add(rose);
  const ring=new THREE.Mesh(new THREE.TorusGeometry(1.08,.14,8,32),s.stone);ring.position.copy(rose.position);chapel.add(ring);
  for(let i=0;i<8;i++){const spoke=block(chapel,s.stone,0,6.4,6.12,.07,2,.08);spoke.rotation.z=i*Math.PI/4;}
  block(chapel,doorMat,0,13.5,0,.14,1.4,.14);block(chapel,doorMat,0,13.8,0,.85,.14,.14);
  // Bell tower, open dark belfry with four columns and a pyramidal roof.
  block(chapel,warmStone,5.5,6,-2.5,2.7,12,2.7);
  block(chapel,doorMat,5.5,13.1,-2.5,2.1,2.2,2.1);
  for(const x of [4.25,6.75]) for(const z of [-3.75,-1.25]) block(chapel,s.stone,x,13.2,z,.32,2.4,.32);
  block(chapel,s.stone,5.5,14.5,-2.5,3.15,.35,3.15);
  const towerRoof=new THREE.Mesh(new THREE.ConeGeometry(2.2,2.1,4),s.roof);towerRoof.rotation.y=Math.PI/4;towerRoof.position.set(5.5,15.7,-2.5);chapel.add(towerRoof);
  // Fountain and residents make the foreground recognisably a public square.
  const basin=new THREE.Mesh(new THREE.CylinderGeometry(1.65,1.8,.45,24),s.stone);basin.position.set(side*3,.35,-2);root.add(basin);
  const water=new THREE.Mesh(new THREE.CircleGeometry(1.45,32),windowMat);water.rotation.x=-Math.PI/2;water.position.set(side*3,.59,-2);root.add(water);
  block(root,s.stone,side*3,1.05,-2,.35,1,.35);
  block(root,doorMat,side*3,.62,3,2.4,.14,.6);block(root,doorMat,side*3,.98,3.25,2.4,.7,.08);
  const resident=createPerson(true,1);resident.position.set(side*3,.24,3);root.add(resident);
  return root;
}
