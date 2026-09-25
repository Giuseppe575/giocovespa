import { describe, expect, it } from "vitest";
import { projectRoadPoint, sampleRoad, streetLayout } from "./road-path";

describe("curved route", () => {
  it("narrows the historic centre to two lanes, keeping other districts at three", () => {
    expect(streetLayout(150).lanes).toEqual([0,2]);
    expect(streetLayout(150).halfWidth).toBeCloseTo(3.2);
    expect(streetLayout(600).lanes).toEqual([0,1,2]);
    expect(streetLayout(1950).plaza).toBe(true);
    for(let s=0;s<3600;s+=1) {
      expect(Math.abs(streetLayout(s+1).halfWidth-streetLayout(s).halfWidth)).toBeLessThan(.04);
      const layout=streetLayout(s);
      for(const lane of layout.lanes) expect(Math.abs((lane-1)*layout.laneSpacing)+.65).toBeLessThan(layout.halfWidth);
    }
  });
  it("keeps player and all lanes registered at any point including lap boundaries", () => {
    for(let s=0;s<=3600;s+=17) for(const lane of [-2.4,0,2.4]) {
      const point=projectRoadPoint(s,lane,s);
      expect(point.x).toBeCloseTo(lane,8);
      expect(point.z).toBeCloseTo(-5,8);
      expect(point.heading).toBeCloseTo(0,8);
    }
  });
  it("has no jump in position or tangent when the 1800m circuit repeats", () => {
    for(const s of [0,419.99,420,940,1300,1800]) {
      expect(sampleRoad(s).x).toBeCloseTo(sampleRoad(s+1800).x,8);
      expect(sampleRoad(s).heading).toBeCloseTo(sampleRoad(s+1800).heading,8);
      expect(Math.abs(sampleRoad(s+.001).x-sampleRoad(s-.001).x)).toBeLessThan(.002);
    }
  });
  it("produces visible left and right curves and keeps the preview ahead", () => {
    const bends=Array.from({length:36},(_,i)=>projectRoadPoint(i*50+100,0,i*50));
    expect(Math.max(...bends.map(p=>p.x))).toBeGreaterThan(10);
    expect(Math.min(...bends.map(p=>p.x))).toBeLessThan(-10);
    expect(bends.every(p=>p.z < -50)).toBe(true);
  });
});
