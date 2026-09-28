// Recover OSM building relations omitted by the original way-only importer.
// No photographic imagery is extracted. Coordinates retain the game's OSM origin.
import fs from 'node:fs';
import {pathToFileURL} from 'node:url';

const attrs=s=>Object.fromEntries([...s.matchAll(/([\w:]+)="([^"]*)"/g)].map(m=>[m[1],m[2].replaceAll('&amp;','&').replaceAll('&quot;','"')]));
const tags=s=>Object.fromEntries([...s.matchAll(/<tag\s+([^>]+)>/g)].map(m=>{const a=attrs(m[1]);return [a.k,a.v];}));
const local=p=>[(p[0]-11.257831)*80300,(p[1]-43.772579)*111195];
const same=(a,b)=>a===b;

export function joinRings(parts){
 const pending=parts.map(p=>[...p]),rings=[];
 while(pending.length){
  const ring=pending.shift();
  while(!same(ring[0],ring.at(-1))){
   const index=pending.findIndex(p=>same(p[0],ring.at(-1))||same(p.at(-1),ring.at(-1)));
   if(index<0)throw new Error('Incomplete multipolygon ring');
   const next=pending.splice(index,1)[0];if(!same(next[0],ring.at(-1)))next.reverse();
   ring.push(...next.slice(1));
  }
  if(ring.length<4)throw new Error('Degenerate multipolygon ring');
  rings.push(ring);
 }
 return rings;
}
export function inRing(p,ring){
 let inside=false;
 for(let i=0,j=ring.length-1;i<ring.length;j=i++){
  const a=ring[i],b=ring[j];
  if((a[1]>p[1])!==(b[1]>p[1])&&p[0]<(b[0]-a[0])*(p[1]-a[1])/(b[1]-a[1])+a[0])inside=!inside;
 }
 return inside;
}
export function extractMultipolygons(xml,route){
 const nodes=new Map(),ways=new Map(),buildings=[],replacedWayIds=new Set(),skipped=[];
 for(const m of xml.matchAll(/<node\b([^>]*?)(?:\/>|>([\s\S]*?)<\/node>)/g)){const a=attrs(m[1]);nodes.set(a.id,local([+a.lon,+a.lat]));}
 for(const m of xml.matchAll(/<way\b([^>]+)>([\s\S]*?)<\/way>/g)){const a=attrs(m[1]);ways.set(a.id,{refs:[...m[2].matchAll(/<nd\s+([^>]+)>/g)].map(n=>attrs(n[1]).ref),tags:tags(m[2])});}
 const path=route.geometry.coordinates.map(local),lengths=[0];
 for(let i=1;i<path.length;i++)lengths.push(lengths.at(-1)+Math.hypot(path[i][0]-path[i-1][0],path[i][1]-path[i-1][1]));
 const nearest=p=>{
  let best={distance:Infinity,at:0};
  for(let i=1;i<path.length;i++){
   const a=path[i-1],b=path[i],dx=b[0]-a[0],dy=b[1]-a[1];
   const t=Math.max(0,Math.min(1,((p[0]-a[0])*dx+(p[1]-a[1])*dy)/(dx*dx+dy*dy||1)));
   const distance=Math.hypot(p[0]-a[0]-dx*t,p[1]-a[1]-dy*t);
   if(distance<best.distance)best={distance,at:(lengths[i-1]+t*(lengths[i]-lengths[i-1]))/lengths.at(-1)*route.distanceMeters};
  }
  return best;
 };
 for(const m of xml.matchAll(/<relation\b([^>]+)>([\s\S]*?)<\/relation>/g)){
  const id=attrs(m[1]).id,t=tags(m[2]);
  if(t.type!=='multipolygon'||!(t.building||t['building:part'])||t.building==='no')continue;
  const members=[...m[2].matchAll(/<member\s+([^>]+)>/g)].map(m=>attrs(m[1]));
  try{
   const rings=role=>joinRings(members.filter(m=>m.type==='way'&&(m.role===role||(role==='outer'&&!m.role))).map(m=>{
    const way=ways.get(m.ref);if(!way||way.refs.some(id=>!nodes.has(id)))throw new Error('Missing member geometry');return way.refs;
   })).map(r=>r.map(id=>nodes.get(id)));
   const outers=rings('outer'),inners=rings('inner');if(!outers.length)throw new Error('Missing outer ring');
   // Reject incomplete topology rather than silently filling a real courtyard.
   if(inners.some(r=>outers.filter(o=>inRing(r[0],o)).length!==1))throw new Error('Unassigned courtyard');
   for(let i=0;i<outers.length;i++){
    const points=outers[i];const near=points.map(nearest).reduce((a,b)=>a.distance<b.distance?a:b);
    if(near.distance>105)continue;
    const outerMembers=members.filter(m=>m.type==='way'&&(m.role==='outer'||!m.role));
    const inherited=outerMembers.length===1?ways.get(outerMembers[0].ref).tags:{};
    const meta={...inherited,...t};
    const round=ring=>ring.map(p=>p.map(v=>Math.round(v*10)/10));
    buildings.push({id:`r${id}${outers.length>1?`-${i}`:''}`,name:meta.name||'',points:round(points),holes:inners.filter(r=>inRing(r[0],points)).map(round),height:parseFloat(meta.height)||Number(meta['building:levels'])*3.3||14,estimatedHeight:!meta.height&&!meta['building:levels'],at:Math.round(near.at),kind:meta.building||meta['building:part'],sourceRelation:id});
    for(const member of outerMembers)if(ways.get(member.ref).refs.some(ref=>points.includes(nodes.get(ref))))replacedWayIds.add(member.ref);
   }
  }catch(e){skipped.push({id,reason:e.message});}
 }
 return {attribution:'© OpenStreetMap contributors, ODbL 1.0 — https://www.openstreetmap.org/copyright',retrieved:'2026-09-26',coordinateSystem:'local east/north metres, origin 11.257831,43.772579; longitude scale 80300; latitude scale 111195',buildings,replacedWayIds:[...replacedWayIds],skipped};
}
if(process.argv[1]&&import.meta.url===pathToFileURL(process.argv[1]).href){
 const [source,target]=process.argv.slice(2);if(!source||!target)throw new Error('Provide source OSM and destination JSON paths');
 const result=extractMultipolygons(fs.readFileSync(source,'utf8'),JSON.parse(fs.readFileSync('src/data/florence-route.json','utf8')));
 fs.writeFileSync(target,JSON.stringify(result));
 console.log(JSON.stringify({buildings:result.buildings.length,courtyards:result.buildings.reduce((n,b)=>n+b.holes.length,0),skipped:result.skipped}));
}
