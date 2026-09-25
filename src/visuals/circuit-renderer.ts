import * as THREE from "three";
import { projectRoadPoint, streetLayout } from "../core/road-path";
import { resolveCircuitPosition, type DistrictId } from "../core/circuit";
import { surfaces } from "./surfaces";
import { createDistrictScenery } from "./district-scenery";
import { createPiazza } from "./piazza";
import { animatePerson, createPerson } from "./street-life";
import { createFinishLine } from "./finish-line";
import { RACE_DISTANCE } from "../core/race";

const START = -24, END = 216, STEP = 2, BLOCK = 10;
const ROWS = (END - START) / STEP + 1;

type Ribbon = {mesh: THREE.Mesh; left: number; right: number; height: number};
type ScenerySlot = {root: THREE.Group; index: number; side: -1 | 1; key: string};

/** A bounded road/scenery window sampled from the same route as traffic. */
export class CircuitRenderer {
  private ribbons: Ribbon[] = [];
  private scenery: ScenerySlot[] = [];
  private templates = new Map<string, THREE.Group>();
  private lines: THREE.InstancedMesh;
  private matrix = new THREE.Object3D();
  private pedestrians: {root:THREE.Group;s:number;side:-1|1;direction:number;phase:number}[]=[];
  private time=0;
  private finish = createFinishLine();
  private finishDistance = RACE_DISTANCE;

  constructor(scene: THREE.Scene) {
    scene.add(this.finish);
    this.ribbon(scene,-5.1,5.1,.065,surfaces().asphalt);
    for(const side of [-1,1]) {
      this.ribbon(scene,side*5.1,side*6.9,.28,surfaces().pavement);
      this.ribbon(scene,side*5.1,side*5.27,.31,surfaces().stone);
    }
    this.lines=new THREE.InstancedMesh(new THREE.BoxGeometry(.09,.018,1.8),new THREE.MeshStandardMaterial({color:0xede5cf,roughness:.9}),120);
    this.lines.frustumCulled=false;
    scene.add(this.lines);
    for(let index=-2;index<24;index++) for(const side of [-1,1] as const) {
      const root=new THREE.Group();
      scene.add(root);
      this.scenery.push({root,index,side,key:""});
    }
    for(let i=0;i<12;i++) {
      const root=createPerson(false,i);scene.add(root);
      this.pedestrians.push({root,s:i*20,side:i%2?1:-1,direction:i%3?1:-1,phase:i*1.7});
    }
    this.update(0);
  }

  private ribbon(scene:THREE.Scene,left:number,right:number,height:number,material:THREE.Material) {
    if(left>right) [left,right]=[right,left];
    const geometry=new THREE.BufferGeometry();
    geometry.setAttribute("position",new THREE.BufferAttribute(new Float32Array(ROWS*6),3).setUsage(THREE.DynamicDrawUsage));
    geometry.setAttribute("uv",new THREE.BufferAttribute(new Float32Array(ROWS*4),2).setUsage(THREE.DynamicDrawUsage));
    const normals=new Float32Array(ROWS*6);
    for(let i=0;i<ROWS*2;i++) normals[i*3+1]=1;
    geometry.setAttribute("normal",new THREE.BufferAttribute(normals,3));
    const indices:number[]=[];
    for(let i=0;i<ROWS-1;i++) {const a=i*2;indices.push(a,a+1,a+2,a+1,a+3,a+2);}
    geometry.setIndex(indices);
    const mesh=new THREE.Mesh(geometry,material);
    mesh.frustumCulled=false;mesh.receiveShadow=true;
    scene.add(mesh);this.ribbons.push({mesh,left,right,height});
  }

  reset(distance = 0) {
    this.finishDistance = distance + RACE_DISTANCE;
    this.scenery.forEach((slot,i)=>{slot.index=Math.floor(distance/BLOCK)+Math.floor(i/2)-2;slot.key="";});
    this.pedestrians.forEach((p,i)=>{p.s=distance+i*20;});
    this.update(distance);
  }

  update(distance:number,dt=0) {
    this.finish.visible = this.finishDistance - distance < 210;
    if (this.finish.visible) {
      const point = projectRoadPoint(this.finishDistance, 0, distance);
      this.finish.position.set(point.x, 0, point.z);
      this.finish.rotation.y = point.heading;
      this.finish.scale.x = streetLayout(this.finishDistance).halfWidth;
    }
    this.time+=dt;
    const start=Math.floor(distance/STEP)*STEP+START;
    for(const ribbon of this.ribbons) {
      const geometry=ribbon.mesh.geometry;
      const positions=geometry.attributes.position;
      const uv=geometry.attributes.uv;
      for(let row=0;row<ROWS;row++) for(let edge=0;edge<2;edge++) {
        const s=start+row*STEP;
        const originalOffset=edge?ribbon.right:ribbon.left;
        const layout=streetLayout(s);
        const offset=Math.sign(originalOffset)*(Math.abs(originalOffset)-5.1+layout.halfWidth);
        const p=projectRoadPoint(s,offset,distance);
        positions.setXYZ(row*2+edge,p.x,ribbon.height,p.z);
        uv.setXY(row*2+edge,edge,s/20);
      }
      positions.needsUpdate=true;uv.needsUpdate=true;
    }
    const dashStart=Math.floor((distance+START)/4)*4;
    for(let i=0;i<120;i++) {
      const s=dashStart+Math.floor(i/2)*4;
      const layout=streetLayout(s);
      const p=projectRoadPoint(s,(i%2?1.2:-1.2)*(1-layout.narrow),distance);
      this.matrix.position.set(p.x,.085,p.z);
      this.matrix.scale.setScalar(i%2===1?1-layout.narrow:1);
      this.matrix.rotation.set(0,p.heading,0);
      this.matrix.updateMatrix();this.lines.setMatrixAt(i,this.matrix.matrix);
    }
    this.lines.instanceMatrix.needsUpdate=true;

    for(const slot of this.scenery) {
      while(slot.index*BLOCK-distance < -25) slot.index+=26;
      const s=slot.index*BLOCK;
      const district=resolveCircuitPosition(Math.max(0,s)).district.id;
      const layout=streetLayout(s);
      const variant=((slot.index%3)+3)%3;
      const key=layout.plaza?`piazza:${slot.side}:${layout.church}`:`${district}:${slot.side}:${variant}`;
      if(slot.key!==key) {
        let template=this.templates.get(key);
        if(!template) {
          template=layout.plaza?createPiazza(slot.side,layout.church&&slot.side===1):createDistrictScenery(district as DistrictId,slot.side,variant);
          this.templates.set(key,template);
        }
        slot.root.traverse(object => {
          // Release per-instance GPU buffers, not the shared prototype geometry/materials.
          if (object instanceof THREE.InstancedMesh) object.dispose();
        });
        slot.root.clear();slot.root.add(template.clone(true));slot.key=key;
      }
      const p=projectRoadPoint(s,slot.side*(layout.halfWidth+3.4),distance);
      slot.root.position.set(p.x,0,p.z);
      slot.root.rotation.y=p.heading;
    }
    for(const person of this.pedestrians) {
      person.s+=person.direction*.75*dt;
      while(person.s-distance < -24)person.s+=240;
      const layout=streetLayout(person.s);
      const point=projectRoadPoint(person.s,person.side*(layout.halfWidth+.65),distance);
      person.root.position.set(point.x,.28,point.z);
      person.root.rotation.y=point.heading+(person.direction<0?Math.PI:0);
      animatePerson(person.root,this.time+person.phase);
    }
  }
}
