import {florenceMap, sampleFlorence} from './florence';

type Point={x:number;z:number};
const polygons=florenceMap.buildings.map(b=>b.points.map(p=>({x:p[0],z:-p[1]})));
const grid=new Map<string,number[]>();
polygons.forEach((p,index)=>{
 const xs=p.map(v=>v.x),zs=p.map(v=>v.z);
 for(let x=Math.floor(Math.min(...xs)/20);x<=Math.floor(Math.max(...xs)/20);x++)
 for(let z=Math.floor(Math.min(...zs)/20);z<=Math.floor(Math.max(...zs)/20);z++){
  const key=`${x}:${z}`;const list=grid.get(key)||[];list.push(index);grid.set(key,list);
 }
});
function segmentDistance(p:Point,a:Point,b:Point){const dx=b.x-a.x,dz=b.z-a.z;const t=Math.max(0,Math.min(1,((p.x-a.x)*dx+(p.z-a.z)*dz)/(dx*dx+dz*dz||1)));return Math.hypot(p.x-a.x-t*dx,p.z-a.z-t*dz);}
export function clearOfBuildings(p:Point,radius=.35){
 const ids=new Set<number>();
 for(let x=Math.floor((p.x-radius)/20);x<=Math.floor((p.x+radius)/20);x++)for(let z=Math.floor((p.z-radius)/20);z<=Math.floor((p.z+radius)/20);z++)for(const id of grid.get(`${x}:${z}`)||[])ids.add(id);
 for(const id of ids){const poly=polygons[id];let inside=false;
  for(let i=0,j=poly.length-1;i<poly.length;j=i++){
   const a=poly[i],b=poly[j];if(segmentDistance(p,a,b)<radius)return false;
   if((a.z>p.z)!==(b.z>p.z)&&p.x<(b.x-a.x)*(p.z-a.z)/(b.z-a.z)+a.x)inside=!inside;
  }
  if(inside)return false;
 }
 return true;
}
export function florenceOffsetPoint(distance:number,offset:number){const p=sampleFlorence(distance);return {x:p.x+Math.cos(p.heading)*offset,z:p.z-Math.sin(p.heading)*offset};}

/** Pedestrians must fit completely on the pavement, not just their centre. */
export function safePavementOffset(distance:number,side:number,halfWidth:number,centerOffset=0):number|null {
 for(const inset of [.55,.35,.75,1,1.25]){
  const offset=side*(halfWidth+inset);
  if(clearOfBuildings(florenceOffsetPoint(distance,offset+centerOffset),.4))return offset;
 }
 return null;
}
/** Validate the entire crossing, including both waiting positions and walkers' radius. */
export function safeCrossing(distance:number,halfWidth:number,centerAt:(s:number)=>number=()=>0):{distance:number;left:number;right:number}|null {
 for(const shift of [0,-1,1,-2,2,-3,3,-4,4]){
  const s=distance+shift,left=safePavementOffset(s,-1,halfWidth,centerAt(s)),right=safePavementOffset(s,1,halfWidth,centerAt(s));
  if(left===null||right===null)continue;
  let clear=true;
  for(const along of[-.55,0,.55])for(let x=left;x<=right;x+=.3)if(!clearOfBuildings(florenceOffsetPoint(s+along,x+centerAt(s+along)),.4)){clear=false;break;}
  if(clear)return {distance:s,left,right};
 }
 return null;
}
