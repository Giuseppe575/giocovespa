import {describe,it,expect} from 'vitest';
import {florenceStreetSection,florenceTrafficLane,florenceLaneDividers} from './florence-street-section';
import {clearOfBuildings,florenceOffsetPoint} from './florence-space';
import {giovineItaliaPlacements} from './giovine-italia-props';

describe('Giovine Italia multi-lane route',()=>{
 it('has three usable lanes separated by two markings on the avenue',()=>{
  for(const at of[1280,1320,1380]){
   const p=florenceStreetSection(at),lines=florenceLaneDividers(at);
   expect(p.laneCount).toBe(3);expect(lines).toHaveLength(2);
   expect(florenceTrafficLane(at,0)).toBeLessThan(lines[0]);
   expect(florenceTrafficLane(at,1)).toBeGreaterThan(lines[0]);
   expect(florenceTrafficLane(at,1)).toBeLessThan(lines[1]);
   expect(florenceTrafficLane(at,2)).toBeGreaterThan(lines[1]);
  }
  expect(florenceLaneDividers(800)).toEqual([]);
  expect(florenceLaneDividers(1550)).toEqual([0]);
 });
 it('opens and merges traffic smoothly while leaving all vehicles on the road',()=>{
  for(let at=1170;at<=1530;at+=.5){
   const p=florenceStreetSection(at),next=florenceStreetSection(at+.5);
   expect(Math.abs(p.halfWidth-next.halfWidth)).toBeLessThan(.09);
   expect(Math.abs(p.pavementLeft-next.pavementLeft)).toBeLessThan(.04);
   for(let i=0;i<4;i++){
    const x=florenceTrafficLane(at,i);
    expect(Math.abs(x)+.85).toBeLessThan(p.halfWidth);
    expect(Math.abs(x-florenceTrafficLane(at+.5,i))).toBeLessThan(.08);
   }
  }
 });
 it('keeps the avenue carriageway and pedestrian waiting strip clear of facades',()=>{
  for(let at=1250;at<=1394;at+=2){const p=florenceStreetSection(at);
   for(const side of[-1,1])expect(clearOfBuildings(florenceOffsetPoint(at,side*(p.halfWidth+.45)),.3),`avenue at ${at}, side ${side}`).toBe(true);
  }
 });
 it('places parked cars and trees outside the road and away from buildings',()=>{
  const props=giovineItaliaPlacements();expect(props.trees.length).toBeGreaterThan(5);expect(props.cars.length).toBeGreaterThan(3);
  for(const p of props.trees)expect(Math.abs(p.offset)-.55).toBeGreaterThan(florenceStreetSection(p.at).halfWidth+.75);
  for(const p of props.cars){
   const section=florenceStreetSection(p.at);
   expect(Math.abs(p.offset)-1).toBeGreaterThan(section.halfWidth+Math.max(section.pavementLeft,section.pavementRight));
   for(const ds of[-2.3,0,2.3])for(const dx of[-1,0,1])expect(clearOfBuildings(florenceOffsetPoint(p.at+ds,p.offset+dx),.25)).toBe(true);
  }
 });
});
