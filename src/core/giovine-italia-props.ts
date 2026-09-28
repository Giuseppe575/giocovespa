import {FLORENCE_CROSSINGS} from './florence';
import {clearOfBuildings,florenceOffsetPoint} from './florence-space';
import {florenceStreetSection} from './florence-street-section';

/** Authored roadside dressing from frames 47–51. Do not occupy crossings,
 * the walking strip or mapped buildings. This is not a parking survey. */
export function giovineItaliaPlacements(){
 const trees:{at:number;offset:number}[]=[],cars:{at:number;offset:number}[]=[];
 for(let at=1256;at<=1386;at+=13)for(const side of[-1,1]){
  if(FLORENCE_CROSSINGS.some(c=>Math.abs(c.at-at)<12))continue;
  const p=florenceStreetSection(at),walk=side<0?p.pavementLeft:p.pavementRight;
  const treeOffset=side*(p.halfWidth+walk-.5);
  if(clearOfBuildings(florenceOffsetPoint(at,treeOffset),.55))trees.push({at,offset:treeOffset});
  const offset=side*(p.halfWidth+walk+1.2);
  // Full parked vehicle envelope, including ends and both sides.
  if([-2.3,0,2.3].every(ds=>[-1,0,1].every(dx=>clearOfBuildings(florenceOffsetPoint(at+ds,offset+dx),.25))))cars.push({at,offset});
 }
 return {trees,cars};
}
