import * as THREE from 'three';
import {sampleFlorence} from '../core/florence';
import {florenceOffsetPoint} from '../core/florence-space';
import {giovineItaliaPlacements} from '../core/giovine-italia-props';
import {makeFlorenceCar} from './florence-traffic';
import {mergeGeometryBatch} from './geometry-batch';
import {florenceMaterials} from './florence-materials';

/** Static dressing, batched by material; no source frame pixels are embedded. */
export function createGiovineItalia(){
 const root=new THREE.Group();root.name='giovine-italia';
 const buckets=new Map<THREE.Material,THREE.BufferGeometry[]>();
 const add=(g:THREE.BufferGeometry,m:THREE.Material)=>{const list=buckets.get(m)||[];list.push(g);buckets.set(m,list);};
 const bark=new THREE.MeshStandardMaterial({color:0x6a604b,roughness:1});
 const canvas=document.createElement('canvas');canvas.width=canvas.height=128;
 const c=canvas.getContext('2d')!;let seed=73;
 const rand=()=>((seed=(Math.imul(seed,1664525)+1013904223)>>>0)/4294967296);
 for(let i=0;i<330;i++){
  const x=rand()*128,y=rand()*128;if(Math.hypot(x-64,y-64)>58)continue;
  c.fillStyle=`hsl(${72+rand()*27} 34% ${23+rand()*23}%)`;
  c.beginPath();c.ellipse(x,y,2+rand()*5,1+rand()*3,rand()*Math.PI,0,Math.PI*2);c.fill();
 }
 const map=new THREE.CanvasTexture(canvas);map.colorSpace=THREE.SRGBColorSpace;
 const leaf=new THREE.MeshStandardMaterial({map,alphaTest:.45,side:THREE.DoubleSide,roughness:.92});
 const {trees,cars}=giovineItaliaPlacements();
 for(const {at,offset} of trees){
  const p=florenceOffsetPoint(at,offset);
  const trunk=new THREE.CylinderGeometry(.17,.3,6.4,7);trunk.translate(p.x,3.2,p.z);add(trunk,bark);
  for(let j=0;j<60;j++){
   const angle=j*2.39996,r=2.5*Math.sqrt((j+.5)/60),y=7+Math.sin(j*1.71)*2.3;
   const g=new THREE.PlaneGeometry(2.7,2.7);g.rotateY(angle);g.rotateX(Math.sin(j)*.9);
   g.translate(p.x+Math.cos(angle)*r,y,p.z+Math.sin(angle)*r);add(g,leaf);
  }
  // Small planting grate; the inner pedestrian strip remains unobstructed.
  const grate=new THREE.BoxGeometry(.9,.025,.9);grate.translate(p.x,.2,p.z);add(grate,florenceMaterials().iron);
 }
 const templates=Array.from({length:5},(_,i)=>makeFlorenceCar(i));
 cars.forEach(({at,offset},index)=>{
  const p=florenceOffsetPoint(at,offset),heading=sampleFlorence(at).heading;
  const car=templates[index%templates.length];car.position.set(p.x,0,p.z);car.rotation.y=heading;car.updateMatrixWorld(true);
  car.traverse(obj=>{if(obj instanceof THREE.Mesh)add(obj.geometry.clone().applyMatrix4(obj.matrixWorld),obj.material as THREE.Material);});
  const bay=new THREE.BoxGeometry(2.25,.04,5.2);bay.rotateY(heading);bay.translate(p.x,.025,p.z);add(bay,florenceMaterials().asphalt);
 });
 for(const [material,geometries]of buckets){
  const mesh=new THREE.Mesh(mergeGeometryBatch(geometries),material);geometries.forEach(g=>g.dispose());
  mesh.castShadow=true;mesh.receiveShadow=true;root.add(mesh);
 }
 return root;
}
