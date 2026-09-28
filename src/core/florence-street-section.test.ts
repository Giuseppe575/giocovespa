import {describe,it,expect} from 'vitest';
import {florenceStreetSection} from './florence-street-section';
import {clearOfBuildings,florenceOffsetPoint} from './florence-space';
describe('Florence street and pavement cross sections',()=>{
 it('uses one traffic stream in the photographed historic streets',()=>{
  for(const s of [105,173,445,784,1087]){const p=florenceStreetSection(s);expect(p.lanes).toEqual([1]);expect(p.laneCount).toBe(1);expect(p.halfWidth*2).toBeLessThanOrEqual(3.8);}
  expect(florenceStreetSection(1800).laneCount).toBe(2);
 });
 it('reserves walkable strips on BOTH sides, clear of mapped facades',()=>{
  for(let s=0;s<1170;s+=.5){const p=florenceStreetSection(s);
   // 1.65m compact car body + 15cm clearance per side. Mirrors can overhang
   // the kerb, but are separately checked against the actual building walls.
   expect(p.halfWidth*2).toBeGreaterThan(1.65+.3);
   expect(clearOfBuildings(florenceOffsetPoint(s,p.centerOffset),1.15),`mirrors at ${s}`).toBe(true);
   for(const side of[-1,1]){
    const width=side<0?p.pavementLeft:p.pavementRight;expect(width).toBeGreaterThanOrEqual(.79);
    const point=florenceOffsetPoint(s,p.centerOffset+side*(p.halfWidth+.4));
    expect(clearOfBuildings(point,.3),`pavement at ${s} side ${side}`).toBe(true);
   }
  }
 });
 it('does not introduce abrupt lateral steps',()=>{
  for(let s=0;s<1170;s++){const a=florenceStreetSection(s),b=florenceStreetSection(s+1);expect(Math.abs(a.centerOffset-b.centerOffset)).toBeLessThan(.05);expect(Math.abs(a.halfWidth-b.halfWidth)).toBeLessThan(.05);}
 });
});
