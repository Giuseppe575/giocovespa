import * as THREE from "three";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import { florenceMap, sampleFlorence } from "../core/florence";
import { surfaces } from "./surfaces";
import {florenceMaterials} from './florence-materials';
import {createFlorenceRiver} from './florence-river';
import southbank from '../data/florence-southbank.json';

type Bucket={at:number;root:THREE.Group;walls:THREE.BufferGeometry[][];roofs:THREE.BufferGeometry[];details:THREE.BufferGeometry[][]};

/** Real OSM building footprints and river bank, with authored facade materials.
 * Heights without source tags are estimates, explicitly disclosed in the UI. */
export class FlorenceScenery {
  readonly root=new THREE.Group();
  private chunks:Bucket[]=[];
  constructor(scene:THREE.Scene) {
    scene.add(this.root);
    const distantIds=new Set(southbank.buildings.map(b=>b.id));
    const buckets=new Map<number,Bucket>();
    for(const b of [...florenceMap.buildings,...southbank.buildings]) {
      if(b.points.length<3)continue;
      const key=Math.floor(b.at/100);
      let bucket=buckets.get(key);
      if(!bucket){bucket={at:key*100+50,root:new THREE.Group(),walls:Array.from({length:8},()=>[]),roofs:[],details:[[],[],[]]};buckets.set(key,bucket);this.root.add(bucket.root);}
      const points=b.points;
      const centreX=b.points.reduce((sum,p)=>sum+p[0],0)/b.points.length;
      const centreZ=-b.points.reduce((sum,p)=>sum+p[1],0)/b.points.length;
      const routePoint=sampleFlorence(b.at);
      const lateral=(centreX-routePoint.x)*Math.cos(routePoint.heading)-(centreZ-routePoint.z)*Math.sin(routePoint.heading);
      // Unsurveyed riverside kiosks must not become 14m apartment blocks that
      // occlude the river. This is an explicit low-rise estimate, not a measured height.
      const parkPavilion=b.estimatedHeight&&b.at>1480&&lateral>8&&lateral<100;
      const height=b.name==="Torre della Zecca"?25:b.name==="Cupola del Brunelleschi"?38:parkPavilion?3.6:b.height;
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
      const area=points.reduce((sum,a,i)=>{const c=points[(i+1)%points.length];return sum+a[0]*c[1]-c[0]*a[1];},0);
      for(let i=0;i<points.length-1;i++){
        const a=points[i],c=points[i+1],width=Math.hypot(c[0]-a[0],c[1]-a[1]);if(width<.05)continue;
        const n=positions.length/3;
        positions.push(a[0],0,-a[1],c[0],0,-c[1],a[0],height,-a[1],c[0],height,-c[1]);
        uv.push(0,0,width/4,0,0,height/3.4,width/4,height/3.4);indices.push(n,n+2,n+1,n+1,n+2,n+3);
        // Recessed glazing, real reveals/sills and shutters replace flat repeated windows.
        const mx=(a[0]+c[0])/2,mz=-(a[1]+c[1])/2;
        const nx=(c[1]-a[1])/width*Math.sign(area),nz=(c[0]-a[0])/width*Math.sign(area);
        const route=sampleFlorence(b.at),toward=(route.x-mx)*nx+(route.z-mz)*nz;
        if(width>2.7&&width<130&&toward>0&&Math.hypot(route.x-mx,route.z-mz)<55&&height<45&&!/Torre|Cattedrale/.test(b.name)){
          const angle=Math.atan2(nx,nz),columns=Math.max(1,Math.floor(width/3.2));
          const box=(target:number,x:number,y:number,z:number,w:number,h:number,d:number)=>{const g=new THREE.BoxGeometry(w,h,d);g.rotateY(angle);g.translate(x,y,z);bucket!.details[target].push(g);};
          for(let col=0;col<columns;col++){
            const t=(col+.5)/columns,x=a[0]+(c[0]-a[0])*t,z=-a[1]-(c[1]-a[1])*t;
            for(let y=1.65;y<height-1.1;y+=3.3){
              const ground=y<2,w=ground?1.5:1.05,h=ground?2.8:1.85;
              box(0,x+nx*.04,y,z+nz*.04,w+.32,h+.34,.17);
              box(1,x+nx*.14,y,z+nz*.14,w,h,.03);
              box(0,x+nx*.18,y-h/2-.06,z+nz*.18,w+.44,.13,.38);
              if(!ground){
                const tx=Math.cos(angle),tz=-Math.sin(angle);
                for(const side of[-1,1])box(2,x+nx*.19+side*tx*(w/2+.34),y,z+nz*.19+side*tz*(w/2+.34),.42,h,.11);
                box(0,x+nx*.17,y,z+nz*.17,.05,h,.05);
              }
            }
          }
          box(0,mx+nx*.1,height-.1,mz+nz*.1,width,.22,.4);
        }
      }
      const walls=new THREE.BufferGeometry();walls.setAttribute("position",new THREE.Float32BufferAttribute(positions,3));walls.setAttribute("uv",new THREE.Float32BufferAttribute(uv,2));walls.setIndex(indices);walls.computeVertexNormals();
      const landmark=/Torre della Zecca|Torre Volognana|Cattedrale/.test(b.name);
      if(landmark){
        const stone=florenceMaterials().stone.clone();stone.side=THREE.DoubleSide;
        stone.color.setHex(b.name.includes("Cattedrale")?0xe3e0d1:0x9c8a70);
        const mesh=new THREE.Mesh(walls,stone);mesh.castShadow=true;mesh.receiveShadow=true;bucket.root.add(mesh);
        if(b.name==="Torre della Zecca"){
          // MUS.E: 25m, blocked city-facing arches, no surviving battlements.
          // Opening dimensions are an authored approximation, not a survey.
          const neutral=stone.clone();neutral.color.setHex(0xc3bcad);mesh.material=neutral;
          const recess=new THREE.MeshStandardMaterial({color:0x524e45,roughness:1});
          for(let i=0;i<points.length-1;i++){
            const a=points[i],c=points[i+1],w=Math.hypot(c[0]-a[0],c[1]-a[1]);if(w<2)continue;
            const nx=(c[1]-a[1])/w*Math.sign(area),nz=(c[0]-a[0])/w*Math.sign(area),angle=Math.atan2(nx,nz);
            const mx=(a[0]+c[0])/2,mz=-(a[1]+c[1])/2;
            const detail=(geometry:THREE.BufferGeometry,material:THREE.Material,y:number,depth=.08)=>{
              const part=new THREE.Mesh(geometry,material);part.rotation.y=angle;part.position.set(mx+nx*depth,y,mz+nz*depth);bucket!.root.add(part);
            };
            detail(new THREE.BoxGeometry(w,.4,.3),neutral,24.65);
            if(nz<-.5){
              for(const base of[1,11]){
                const arch=new THREE.Shape();arch.moveTo(-2.4,0);arch.lineTo(-2.4,5.4);arch.quadraticCurveTo(-2.4,7.4,0,8.4);arch.quadraticCurveTo(2.4,7.4,2.4,5.4);arch.lineTo(2.4,0);arch.closePath();
                const hole=new THREE.Path();hole.moveTo(-2.1,.3);hole.lineTo(2.1,.3);hole.lineTo(2.1,5.4);hole.quadraticCurveTo(2.1,7.2,0,8.05);hole.quadraticCurveTo(-2.1,7.2,-2.1,5.4);hole.closePath();arch.holes.push(hole);
                detail(new THREE.ShapeGeometry(arch),recess,base);
              }
              detail(new THREE.BoxGeometry(1.3,2.3,.06),recess,1.15,.12);
            }else for(const y of[7,14,21])detail(new THREE.BoxGeometry(.24,1.1,.04),recess,y);
          }
        }else if(b.name.startsWith("Torre")){
          const xs=points.map(p=>p[0]),zs=points.map(p=>-p[1]);
          const minX=Math.min(...xs),maxX=Math.max(...xs),minZ=Math.min(...zs),maxZ=Math.max(...zs);
          const crenels:THREE.BufferGeometry[]=[];
          for(let i=0;i<5;i++)for(const z of [minZ,maxZ]){
            const g=new THREE.BoxGeometry((maxX-minX)/9,1.3,.65);g.translate(minX+(maxX-minX)*i/4,height+.6,z);crenels.push(g);
          }
          this.merge(bucket.root,crenels,stone);
        }
      }else bucket.walls[Number(b.id)%4+(distantIds.has(b.id)?4:0)].push(walls);
      const shape=new THREE.Shape(points.map(p=>new THREE.Vector2(p[0],p[1])));
      const roof=new THREE.ShapeGeometry(shape);roof.rotateX(-Math.PI/2);roof.translate(0,height+.05,0);
      const roofUV=roof.attributes.uv;for(let i=0;i<roofUV.count;i++)roofUV.setXY(i,roofUV.getX(i)/5,roofUV.getY(i)/5);
      if(b.name==='Torre della Zecca')bucket.root.add(new THREE.Mesh(roof,new THREE.MeshStandardMaterial({color:0x807b70,roughness:1})));
      else bucket.roofs.push(roof);
    }
    const materials=[...florenceMaterials().walls,...surfaces().facades];
    for(const b of buckets.values()){
      for(let i=0;i<8;i++)this.merge(b.root,b.walls[i],materials[i]);
      this.merge(b.root,b.roofs,surfaces().roof);this.chunks.push(b);
      [florenceMaterials().trim,florenceMaterials().glass,florenceMaterials().wood].forEach((m,i)=>this.merge(b.root,b.details[i],m));
    }
    this.root.add(createFlorenceRiver());
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
    for(const chunk of this.chunks)chunk.root.visible=Math.abs(chunk.at-distance)<560;
  }
}
