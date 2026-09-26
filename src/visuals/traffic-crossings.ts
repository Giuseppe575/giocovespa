import * as THREE from "three";
import { FLORENCE_CROSSINGS } from "../core/florence";
import { projectRoadPoint,streetLayout } from "../core/road-path";
import type { TrafficRules } from "../core/traffic-rules";
import {createPerson,animatePerson} from "./street-life";

export class TrafficCrossings {
 readonly root=new THREE.Group();
 private rows:{root:THREE.Group;people:THREE.Group[];lamps:THREE.Mesh[]}[]=[];
 constructor(scene:THREE.Scene){
  scene.add(this.root);
  const white=new THREE.MeshStandardMaterial({color:0xeee9d6,roughness:.9});
  const iron=new THREE.MeshStandardMaterial({color:0x292e2b,roughness:.7});
  FLORENCE_CROSSINGS.forEach((crossing,index)=>{
   const root=new THREE.Group(),width=streetLayout(crossing.at).halfWidth;
   // Width is refreshed on update; all objects use unit half-road coordinates.
   for(let x=-.92;x<1;x+=.2){const stripe=new THREE.Mesh(new THREE.BoxGeometry(.11,.016,3.4),white);stripe.position.set(x,.092,0);root.add(stripe);}
   const stopLine=new THREE.Mesh(new THREE.BoxGeometry(2,.016,.22),white);stopLine.position.set(0,.095,7);root.add(stopLine);
   const lamps:THREE.Mesh[]=[];
   if(crossing.signal)for(const side of[-1,1]){
    const post=new THREE.Mesh(new THREE.CylinderGeometry(.045,.05,3.5,8),iron);post.position.set(side*1.17,1.75,-.7);root.add(post);
    const housing=new THREE.Mesh(new THREE.BoxGeometry(.1,1,.25),iron);housing.position.set(side*1.17,3,-.7);root.add(housing);
    for(let light=0;light<3;light++){const material=new THREE.MeshStandardMaterial({color:0x1c2521,emissive:0x000000});const lamp=new THREE.Mesh(new THREE.SphereGeometry(.12,10,8),material);lamp.scale.x=1/width;lamp.position.set(side*1.17,3.32-light*.3,-.54);root.add(lamp);lamps.push(lamp);}
   }
   const people=[createPerson(false,index),createPerson(false,index+2)];
   // People are siblings so stretching the zebra never stretches their bodies.
   for(const p of people)this.root.add(p);
   this.root.add(root);this.rows.push({root,people,lamps});
  });
 }
 update(distance:number,rules:TrafficRules,visible:boolean){
  this.root.visible=visible;if(!visible)return;
  this.rows.forEach((row,i)=>{
   const state=rules.crossings[i];if(!state)return;
   const active=state.at-distance>-20&&state.at-distance<170;
   row.root.visible=active;row.people.forEach(p=>p.visible=active);if(!active)return;
   const width=streetLayout(state.at).halfWidth;
   const point=projectRoadPoint(state.at,0,distance);row.root.position.set(point.x,0,point.z);row.root.rotation.y=point.heading;row.root.scale.x=width;
   row.lamps.forEach((lamp,j)=>{const material=lamp.material as THREE.MeshStandardMaterial;const on=j%3===(state.light==="red"?0:2);const color=j%3===0?0xff3023:j%3===1?0xffbc28:0x32ee88;material.color.setHex(on?color:0x26302b);material.emissive.setHex(on?color:0);material.emissiveIntensity=on?2:0;});
   row.people.forEach((person,j)=>{
    const progress=state.phase==="waiting"?0:state.phase==="clear"?1:Math.min(1,Math.max(0,(state.elapsed-j*.5)/6));
    const offset=(width+.65)*(1-2*progress);
    const p=projectRoadPoint(state.at+(j-.5)*1.1,offset,distance);
    person.position.set(p.x,progress>0&&progress<1?.1:.28,p.z);person.rotation.y=p.heading+Math.PI/2;
    animatePerson(person,state.phase==="crossing"?state.elapsed*1.6+j:0);
   });
  });
 }
}
