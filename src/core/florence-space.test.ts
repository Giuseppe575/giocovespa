import {describe,it,expect} from 'vitest';
import {FLORENCE_CROSSINGS,FLORENCE_QUIET_CROSSINGS,florenceMap} from './florence';
import {clearOfBuildings,florenceOffsetPoint,safeCrossing,safePavementOffset} from './florence-space';
import {TrafficRules} from './traffic-rules';
import {setRoadRoute,streetLayout} from './road-path';
describe('Florence pedestrian clearance',()=>{
 it('only stops for visible walkers, or for a real signal, keeping all stripes',()=>{
  setRoadRoute('florence');
  try{
   const rules=new TrafficRules();
   rules.reset(undefined,true,c=>!FLORENCE_QUIET_CROSSINGS.has(c.id)&&safeCrossing(c.at,streetLayout(c.at).halfWidth,s=>streetLayout(s).centerOffset)!==null);
   expect(rules.crossings).toHaveLength(FLORENCE_CROSSINGS.length);
   expect(rules.crossings.filter(c=>c.hasPedestrians)).toHaveLength(5);
   rules.crossings.forEach((c,index)=>{
    if(c.hasPedestrians){expect(index%2).toBe(1);expect(safeCrossing(c.at,streetLayout(c.at).halfWidth,s=>streetLayout(s).centerOffset)).not.toBeNull();}
    else expect(c.served).toBe(!c.signal);
   });
  }finally{setRoadRoute('city');}
 });
 it('rejects footprint vertices and a body touching a wall',()=>{const p=florenceMap.buildings[0].points[0];expect(clearOfBuildings({x:p[0],z:-p[1]})).toBe(false);});
 it('never places a crossing pedestrian inside a facade',()=>{
  let count=0;
  for(const crossing of FLORENCE_CROSSINGS){const w=2.8+1.6*Math.max(0,Math.min(1,(crossing.at-1170)/80));const path=safeCrossing(crossing.at,w);if(!path)continue;count++;
   for(let t=0;t<=1;t+=.025)expect(clearOfBuildings(florenceOffsetPoint(path.distance,path.left+(path.right-path.left)*t),.3)).toBe(true);
  }
  expect(count).toBeGreaterThanOrEqual(10);
 });
 it('checks walking pavement anchors across the whole route',()=>{for(let s=0;s<2004;s+=3)for(const side of[-1,1]){const w=2.8+1.6*Math.max(0,Math.min(1,(s-1170)/80));const offset=safePavementOffset(s,side,w);if(offset!==null)expect(clearOfBuildings(florenceOffsetPoint(s,offset),.3)).toBe(true);}});
});
