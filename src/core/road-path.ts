const TAU = Math.PI * 2;
import { sampleFlorence } from "./florence";
export type RoadRoute = "city" | "florence";
let activeRoute: RoadRoute = "city";
export function setRoadRoute(route: RoadRoute) { activeRoute=route; }
export function isFlorence() { return activeRoute==="florence"; }

export function streetLayout(distance: number) {
  if(isFlorence()) {
    const t=Math.max(0,Math.min(1,(distance-1170)/80));
    return {halfWidth:2.8+1.6*t,laneSpacing:1.3+.9*t,lanes:[0,2],narrow:1,plaza:false,church:false};
  }
  const s = ((distance % 1800) + 1800) % 1800;
  const smooth = (v: number) => {const t=Math.max(0,Math.min(1,v)); return t*t*(3-2*t);};
  const narrow = s < 300 ? 1 : s < 420 ? 1-smooth((s-300)/120) : s > 1720 ? smooth((s-1720)/80) : 0;
  return { halfWidth:5.1-1.9*narrow, laneSpacing:2.4-.9*narrow,
    lanes: narrow>.5 ? [0,2] : [0,1,2], narrow,
    plaza: s>=110 && s<=180,
    church: Math.abs(s-150)<.1 };
}

/** Continuous, periodic route. Units are metres along the longitudinal track. */
export function sampleRoad(distance: number) {
  if(isFlorence()) return sampleFlorence(distance);
  const a = distance * TAU / 600;
  const b = distance * TAU / 900;
  const x = 36 * Math.sin(a) + 18 * Math.sin(b);
  const slope = 36 * TAU / 600 * Math.cos(a) + 18 * TAU / 900 * Math.cos(b);
  return { x, z:-distance, heading: -Math.atan(slope) };
}

/** Camera-relative coordinates; lane offset is perpendicular to the route. */
export function projectRoadPoint(distance: number, laneOffset: number, playerDistance: number) {
  const point = sampleRoad(distance);
  const origin = sampleRoad(playerDistance);
  const dx = point.x - origin.x + laneOffset * Math.cos(point.heading);
  const dz = point.z-origin.z - laneOffset * Math.sin(point.heading);
  const c = Math.cos(origin.heading), s = Math.sin(origin.heading);
  return {
    x: c * dx - s * dz,
    z: s * dx + c * dz - 5,
    heading: point.heading - origin.heading,
  };
}
