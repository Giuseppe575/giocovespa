import * as THREE from 'three';
import {mergeGeometries} from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import {florenceMap,sampleFlorence} from '../core/florence';
import {seaMaterial} from './atmosphere';
import {florenceMaterials} from './florence-materials';

/** Real river outline is cut out of terrain; water sits below the street level. */
export function createFlorenceRiver(){
 const root=new THREE.Group();root.name='florence-river';
 const land=new THREE.Shape([new THREE.Vector2(-950,-1650),new THREE.Vector2(2400,-1650),new THREE.Vector2(2400,1050),new THREE.Vector2(-950,1050)]);
 const stone=florenceMaterials().stone;
 const banks:THREE.BufferGeometry[]=[];
 const water=seaMaterial().clone();water.onBeforeCompile=seaMaterial().onBeforeCompile;water.color.setHex(0x414d28);water.roughness=.4;water.metalness=0;water.envMapIntensity=.3;
 const polygons=florenceMap.water.map(r=>r.points);
 for(const points of polygons){
  land.holes.push(new THREE.Path(points.map(p=>new THREE.Vector2(p[0],p[1]))));
  const shape=new THREE.Shape(points.map(p=>new THREE.Vector2(p[0],p[1])));
  const geometry=new THREE.ShapeGeometry(shape);geometry.rotateX(-Math.PI/2);
  const mesh=new THREE.Mesh(geometry,water);mesh.name='arno-water';mesh.position.y=-4.5;root.add(mesh);
  for(let i=0;i<points.length;i++){
   const a=points[i],b=points[(i+1)%points.length],length=Math.hypot(b[0]-a[0],b[1]-a[1]);if(length<.1)continue;
   const g=new THREE.BoxGeometry(.7,5.1,length),uv=g.attributes.uv;
   for(let j=0;j<uv.count;j++)uv.setXY(j,uv.getX(j)*length/4,uv.getY(j)*2);
   g.rotateY(Math.atan2(b[0]-a[0],-(b[1]-a[1])));g.translate((a[0]+b[0])/2,-2,-(a[1]+b[1])/2);banks.push(g);
  }
 }
 const terrainGeometry=new THREE.ShapeGeometry(land);terrainGeometry.rotateX(-Math.PI/2);
 const terrain=new THREE.Mesh(terrainGeometry,new THREE.MeshStandardMaterial({color:0x938e7b,roughness:1}));terrain.position.y=-.06;terrain.receiveShadow=true;root.add(terrain);
 if(banks.length){const g=mergeGeometries(banks);banks.forEach(g=>g.dispose());const wall=new THREE.Mesh(g,stone);wall.castShadow=true;wall.receiveShadow=true;root.add(wall);}
 // Right-hand bank distance is solved against the survey polygon, not guessed.
 function bankOffset(distance:number){
  const p=sampleFlorence(distance),dx=Math.cos(p.heading),dz=-Math.sin(p.heading);let nearest=Infinity;
  for(const poly of polygons)for(let i=0;i<poly.length;i++){
   const a=poly[i],b=poly[(i+1)%poly.length],ex=b[0]-a[0],ez=-(b[1]-a[1]),ax=a[0]-p.x,az=-a[1]-p.z,det=dx*ez-dz*ex;
   if(Math.abs(det)<.0001)continue;
   const t=(ax*ez-az*ex)/det,u=(ax*dz-az*dx)/det;
   if(t>0&&u>=0&&u<=1)nearest=Math.min(nearest,t);
  }
  return nearest;
 }
 const inner:THREE.Vector2[]=[],outer:THREE.Vector2[]=[];
 const trunks:THREE.BufferGeometry[]=[],leaves:THREE.BufferGeometry[]=[];
 for(let s=1480;s<=2150;s+=10){
  const p=sampleFlorence(s),bank=bankOffset(s);if(!Number.isFinite(bank)||bank<14||bank>160)continue;
  const dx=Math.cos(p.heading),dz=-Math.sin(p.heading);
  inner.push(new THREE.Vector2(p.x+dx*7,-p.z-dz*7));outer.push(new THREE.Vector2(p.x+dx*(bank-2),-p.z-dz*(bank-2)));
  if(s%30===10)for(const off of [12,Math.max(20,bank-8)]){
   const x=p.x+dx*off,z=p.z+dz*off;
   const trunk=new THREE.CylinderGeometry(.17,.3,5.8,7);trunk.translate(x,2.9,z);trunks.push(trunk);
   for(let j=0;j<36;j++){
    const theta=j*2.39996,r=2.8*Math.sqrt((j+.5)/36),cy=5+Math.sin(j*1.71)*1.6;
    const crown=new THREE.PlaneGeometry(2.4,2.4);crown.rotateY(theta);crown.rotateX(Math.sin(j)*.8);crown.translate(x+Math.cos(theta)*r,cy,z+Math.sin(theta)*r);leaves.push(crown);
   }
  }
 }
 if(inner.length>2){const g=new THREE.ShapeGeometry(new THREE.Shape([...inner,...outer.reverse()]));g.rotateX(-Math.PI/2);const uv=g.attributes.uv;for(let i=0;i<uv.count;i++)uv.setXY(i,uv.getX(i)/2,uv.getY(i)/2);const park=new THREE.Mesh(g,florenceMaterials().grass);park.position.y=-.03;park.receiveShadow=true;root.add(park);}
 const canvas=document.createElement('canvas');canvas.width=canvas.height=128;const ctx=canvas.getContext('2d')!;
 let seed=42;const rand=()=>((seed=Math.imul(seed,1664525)+1013904223>>>0)/4294967296);
 for(let i=0;i<230;i++){const x=rand()*128,y=rand()*128;if(Math.hypot(x-64,y-64)>59)continue;ctx.fillStyle=`hsl(${75+rand()*25} 32% ${22+rand()*23}%)`;ctx.beginPath();ctx.ellipse(x,y,2+rand()*5,1+rand()*2,rand()*Math.PI,0,Math.PI*2);ctx.fill();}
 const foliage=new THREE.CanvasTexture(canvas);foliage.colorSpace=THREE.SRGBColorSpace;
 for(const [list,material]of [[trunks,new THREE.MeshStandardMaterial({color:0x66523d,roughness:.97})],[leaves,new THREE.MeshStandardMaterial({map:foliage,alphaTest:.45,side:THREE.DoubleSide,roughness:.92})]] as const)if(list.length){const g=mergeGeometries(list);list.forEach(v=>v.dispose());const mesh=new THREE.Mesh(g,material);mesh.castShadow=true;root.add(mesh);}
 // OSM bridge endpoints (same local east/north frame). Modern single span,
 // not the medieval arches of the bridges farther west.
 const bridge=new THREE.Group();bridge.name='ponte-san-niccolo';
 const a=new THREE.Vector3(1070.49,0,807.45),b=new THREE.Vector3(1051.21,0,921.44),length=a.distanceTo(b);
 bridge.position.copy(a).add(b).multiplyScalar(.5);bridge.rotation.y=Math.atan2(b.x-a.x,b.z-a.z);
 const concrete=new THREE.MeshStandardMaterial({color:0xaaa69b,roughness:.85});
 const deck=new THREE.Mesh(new THREE.BoxGeometry(18,1.1,length),concrete);deck.position.y=-.35;deck.castShadow=true;bridge.add(deck);
 const road=new THREE.Mesh(new THREE.BoxGeometry(14,.05,length),florenceMaterials().asphalt);road.position.y=.24;bridge.add(road);
 for(const side of[-1,1]){
  const rail=new THREE.Mesh(new THREE.BoxGeometry(.23,.9,length),concrete);rail.position.set(side*8.7,.6,0);bridge.add(rail);
  const abutment=new THREE.Mesh(new THREE.BoxGeometry(18,5.5,5),stone);abutment.position.set(0,-2.3,side*(length/2-2));bridge.add(abutment);
 }
 root.add(bridge);
 const approach=new THREE.Mesh(new THREE.BoxGeometry(12,.14,61),florenceMaterials().asphalt);
 approach.position.set(1077.3,.04,778);approach.rotation.y=Math.atan2(1070.49-1084.19,807.45-747.91);root.add(approach);
 // Surveyed diagonal weir upstream of San Niccolo, pale turbulence at its lip.
 const weir=[[822.73,750.72],[743.34,788.55],[678.85,822.13]];
 for(let i=1;i<weir.length;i++){
  const a=weir[i-1],b=weir[i],len=Math.hypot(b[0]-a[0],b[1]-a[1]);
  const foam=new THREE.Mesh(new THREE.BoxGeometry(2.1,.12,len),new THREE.MeshStandardMaterial({color:0xd1d7c4,roughness:.47}));
  foam.rotation.y=Math.atan2(b[0]-a[0],b[1]-a[1]);foam.position.set((a[0]+b[0])/2,-4.25,(a[1]+b[1])/2);root.add(foam);
 }
 return root;
}
