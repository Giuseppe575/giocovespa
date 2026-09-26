import {afterEach,describe,expect,it} from "vitest";
import {FLORENCE_LENGTH,FLORENCE_CROSSINGS,sampleFlorence,florenceStreet} from "./florence";
import {projectRoadPoint,setRoadRoute} from "./road-path";
import {TrafficRules} from "./traffic-rules";
afterEach(()=>setRoadRoute("city"));
describe("Florence route and crossings",()=>{
 it("skips unsafe pedestrian paths without ignoring red signals",()=>{
  const r=new TrafficRules();r.reset([{id:'a',at:100,signal:false,source:'test'},{id:'b',at:200,signal:true,source:'test'}],false,()=>false);
  expect(r.crossings[0].served).toBe(true);expect(r.crossings[1].hasPedestrians).toBe(false);
  expect(r.limitSpeed(93,10,.1)).toBe(10);expect(r.limitSpeed(193,10,.1)).toBe(0);
  r.update(193,0,2);expect(r.crossings[1].served).toBe(true);
 });
 it("alternates occupied zebras without removing markings, while still respecting reds",()=>{
  const r=new TrafficRules();r.reset([{id:'a',at:20,signal:false,source:'test'},{id:'b',at:100,signal:false,source:'test'},{id:'c',at:200,signal:true,source:'test'},{id:'d',at:300,signal:false,source:'test'}],true);
  expect(r.crossings.map(c=>c.hasPedestrians)).toEqual([false,true,false,true]);
  expect(r.crossings[0].served).toBe(true);expect(r.limitSpeed(13,10,.1)).toBe(10);
  expect(r.limitSpeed(93,10,.1)).toBe(0);r.update(93,0,7.1);
  expect(r.limitSpeed(193,10,.1)).toBe(0);r.update(193,0,2.1);
  expect(r.crossings[2].light).toBe('green');
 });
 it("uses the surveyed route and destination",()=>{expect(FLORENCE_LENGTH).toBe(2003.4);expect(florenceStreet(1900)).toBe("Lungarno del Tempio");expect(sampleFlorence(0).x).toBeCloseTo(0);});
 it("keeps camera and player registered across every bend",()=>{setRoadRoute("florence");for(let s=0;s<FLORENCE_LENGTH;s+=7){const p=projectRoadPoint(s,1,s);expect(p.x).toBeCloseTo(1);expect(p.z).toBeCloseTo(-5);expect(Number.isFinite(p.heading)).toBe(true);}});
 it("includes municipal signals and deduplicates crossing nodes",()=>{expect(FLORENCE_CROSSINGS.filter(c=>c.source==="Comune di Firenze")).toHaveLength(3);for(let i=1;i<FLORENCE_CROSSINGS.length;i++)expect(FLORENCE_CROSSINGS[i].at-FLORENCE_CROSSINGS[i-1].at).toBeGreaterThanOrEqual(16);});
 it("stops even turbo at a red and waits for all pedestrians",()=>{const r=new TrafficRules();r.reset([{id:"x",at:100,signal:true,source:"test"}]);expect(r.limitSpeed(93,100,.05)).toBe(0);r.update(93,0,3);expect(r.crossings[0].phase).toBe("crossing");expect(r.limitSpeed(93,100,.05)).toBe(0);r.update(93,0,4.1);expect(r.crossings[0].light).toBe("green");expect(r.limitSpeed(93,20,.05)).toBe(20);});
 it("never releases pedestrians into moving traffic",()=>{const r=new TrafficRules();r.reset([{id:"x",at:100,signal:false,source:"test"}]);r.update(92,10,20);expect(r.crossings[0].phase).toBe("waiting");});
 it("releases a stopped queue without demanding the scooter pass through cars",()=>{const r=new TrafficRules();r.reset([{id:"x",at:100,signal:true,source:"test"}]);r.update(76,0,7.1,true);expect(r.crossings[0].served).toBe(true);});
 it("cannot skip a stop on a long frame and resets for a new run",()=>{const r=new TrafficRules();r.reset([{id:"x",at:100,signal:true,source:"test"}]);expect(92+r.limitSpeed(92,100,2)*2).toBeLessThanOrEqual(93);r.update(93,0,8);r.reset([{id:"x",at:100,signal:true,source:"test"}]);expect(r.crossings[0].served).toBe(false);});
});
