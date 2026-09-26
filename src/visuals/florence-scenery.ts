import * as THREE from "three";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import { florenceMap, sampleFlorence } from "../core/florence";
import { surfaces } from "./surfaces";
import { seaMaterial } from "./atmosphere";

type Bucket={at:number;root:THREE.Group;walls:THREE.BufferGeometry[][];roofs:THREE.BufferGeometry[]};

/** Real OSM building footprints and river bank, with authored facade materials.
 * Heights without source tags are estimates, explicitly disclosed in the UI. */
export class FlorenceScenery {
  readonly root=new THREE.Group();
  private chunks:Bucket[]=[];
  constructor(scene:THREE.Scene) {
    scene.add(this.root);
    const buckets=new Map<number,Bucket>();
    for(const b of florenceMap.buildings) {
      if(b.points.length<3)continue;
      const key=Math.floor(b.at/100);
      let bucket=buckets.get(key);
      if(!bucket){bucket={at:key*100+50,root:new THREE.Group(),walls:[[],[],[],[]],roofs:[]};buckets.set(key,bucket);this.root.add(bucket.root);}
      const points=b.points;
      const height=b.name==="Torre della Zecca"?25:b.name==="Cupola del Brunelleschi"?38:b.height;
      // The dome receives a dedicated octagonal mesh rather than a 114m box.
      if(b.name==="Cupola del Brunelleschi"){
        const xs=points.map(p=>p[0]),ys=points.map(p=>p[1]);
        const cx=(Math.min(...xs)+Math.max(...xs))/2,cz=-(Math.min(...ys)+Math.max(...ys))/2;
        const drum=new THREE.Mesh(new THREE.CylinderGeometry(22,22,18,8),surfaces().stone);drum.position.set(cx,44,cz);bucket.root.add(drum);
        const dome=new THREE.Mesh(new THREE.SphereGeometry(22,16,16,0,Math.PI*2,0,Math.PI/2),surfaces().roof);dome.scale.y=1.65;dome.position.set(cx,53,cz);bucket.root.add(dome);
        const lantern=new THREE.Mesh(new THREE.CylinderGeometry(2.5,4,14,8),surfaces().stone);lantern.position.set(cx,96,cz);bucket.root.add(lantern);
        continue;
      }
      const positions:number[]=[],uv:number[]=[],indices:number[]=[];
      for(let i=0;i<points.length-1;i++){
        const a=points[i],c=points[i+1],width=Math.hypot(c[0]-a[0],c[1]-a[1]);if(width<.05)continue;
        const n=positions.length/3;
        positions.push(a[0],0,-a[1],c[0],0,-c[1],a[0],height,-a[1],c[0],height,-c[1]);
        uv.push(0,0,width/4,0,0,height/3.4,width/4,height/3.4);indices.push(n,n+2,n+1,n+1,n+2,n+3);
      }
      const walls=new THREE.BufferGeometry();walls.setAttribute("position",new THREE.Float32BufferAttribute(positions,3));walls.setAttribute("uv",new THREE.Float32BufferAttribute(uv,2));walls.setIndex(indices);walls.computeVertexNormals();
      const landmark=/Torre della Zecca|Torre Volognana|Cattedrale/.test(b.name);
      if(landmark){
        const stone=surfaces().stone.clone();stone.side=THREE.DoubleSide;
        stone.color.setHex(b.name.includes("Cattedrale")?0xe3e0d1:0x9c8a70);
        const mesh=new THREE.Mesh(walls,stone);mesh.castShadow=true;mesh.receiveShadow=true;bucket.root.add(mesh);
        if(b.name.startsWith("Torre")){
          const xs=points.map(p=>p[0]),zs=points.map(p=>-p[1]);
          const minX=Math.min(...xs),maxX=Math.max(...xs),minZ=Math.min(...zs),maxZ=Math.max(...zs);
          const crenels:THREE.BufferGeometry[]=[];
          for(let i=0;i<5;i++)for(const z of [minZ,maxZ]){
            const g=new THREE.BoxGeometry((maxX-minX)/9,1.3,.65);g.translate(minX+(maxX-minX)*i/4,height+.6,z);crenels.push(g);
          }
          this.merge(bucket.root,crenels,stone);
        }
      }else bucket.walls[Number(b.id)%4].push(walls);
      const shape=new THREE.Shape(points.map(p=>new THREE.Vector2(p[0],p[1])));
      const roof=new THREE.ShapeGeometry(shape);roof.rotateX(-Math.PI/2);roof.translate(0,height+.05,0);
      const roofUV=roof.attributes.uv;for(let i=0;i<roofUV.count;i++)roofUV.setXY(i,roofUV.getX(i)/5,roofUV.getY(i)/5);
      bucket.roofs.push(roof);
    }
    const materials=surfaces().facades.map(m=>{const clone=m.clone();clone.side=THREE.DoubleSide;return clone;});
    for(const b of buckets.values()){
      for(let i=0;i<4;i++)this.merge(b.root,b.walls[i],materials[i]);
      this.merge(b.root,b.roofs,surfaces().roof);this.chunks.push(b);
    }
    const riverMaterial=seaMaterial().clone();riverMaterial.color.setHex(0x426e69);
    riverMaterial.onBeforeCompile=seaMaterial().onBeforeCompile;
    for(const river of florenceMap.water){
      const shape=new THREE.Shape(river.points.map(p=>new THREE.Vector2(p[0],p[1])));
      const geometry=new THREE.ShapeGeometry(shape);geometry.rotateX(-Math.PI/2);
      const mesh=new THREE.Mesh(geometry,riverMaterial);mesh.position.y=-.12;this.root.add(mesh);
      // Stone embankment follows the surveyed bank rather than the road ribbon.
      const bank:THREE.BufferGeometry[]=[];
      for(let i=1;i<river.points.length;i++){
        const a=river.points[i-1],b=river.points[i],length=Math.hypot(b[0]-a[0],b[1]-a[1]);
        if(length>180||length<.1)continue;
        const g=new THREE.BoxGeometry(.65,1.05,length);g.rotateY(Math.atan2(b[0]-a[0],-(b[1]-a[1])));g.translate((a[0]+b[0])/2,.25,-(a[1]+b[1])/2);bank.push(g);
      }
      this.merge(this.root,bank,surfaces().stone);
    }
  }
  private merge(root:THREE.Group,geometries:THREE.BufferGeometry[],material:THREE.Material){
    if(!geometries.length)return;
    const geometry=mergeGeometries(geometries);geometries.forEach(g=>g.dispose());
    const mesh=new THREE.Mesh(geometry,material);mesh.castShadow=true;mesh.receiveShadow=true;root.add(mesh);
  }
  update(distance:number,visible:boolean){
    this.root.visible=visible;if(!visible)return;
    const p=sampleFlorence(distance),c=Math.cos(p.heading),s=Math.sin(p.heading);
    this.root.rotation.y=-p.heading;
    this.root.position.set(-c*p.x+s*p.z,0,-s*p.x-c*p.z-5);
    for(const chunk of this.chunks)chunk.root.visible=Math.abs(chunk.at-distance)<260;
  }
}
