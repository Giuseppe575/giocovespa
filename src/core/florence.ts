import route from "../data/florence-route.json";
import map from "../data/florence-map.json";

export const FLORENCE_LENGTH = route.distanceMeters;
export const florenceMap = map;
export const toFlorenceMetres = (lon: number, lat: number) => ({x:(lon-11.257831)*80300,z:-(lat-43.772579)*111195});
const points = route.geometry.coordinates.map(([lon,lat])=>toFlorenceMetres(lon,lat));
const distances=[0];
for(let i=1;i<points.length;i++) distances.push(distances[i-1]+Math.hypot(points[i].x-points[i-1].x,points[i].z-points[i-1].z));
const scale=distances[distances.length-1]/FLORENCE_LENGTH;

function position(distance:number) {
  const s=distance*scale;
  let lo=0,hi=distances.length-1;
  while(hi-lo>1){const mid=(lo+hi)>>1;if(distances[mid]<=s)lo=mid;else hi=mid;}
  const a=points[lo],b=points[hi],t=(s-distances[lo])/(distances[hi]-distances[lo]||1);
  return {x:a.x+(b.x-a.x)*t,z:a.z+(b.z-a.z)*t};
}

export function sampleFlorence(distance:number) {
  const p=position(distance),a=position(distance-5),b=position(distance+5);
  return {...p,heading:Math.atan2(-(b.x-a.x),-(b.z-a.z))};
}

export function florenceStreet(distance:number) {
  let offset=0;
  for(const street of route.streets){offset+=street.distanceMeters;if(distance<offset)return street.name;}
  return "Lungarno del Tempio";
}

export type Crossing = {id:string;at:number;signal:boolean;source:string};
// Merge opposite-side nodes of the same crossing. Unknown/unmarked nodes are
// deliberately not rendered as invented zebra crossings.
const candidates=map.crossings.filter(c=>c.markings!=="no"&&c.markings!=="unknown")
  .map(c=>({id:c.id,at:c.at,signal:c.signals,source:"OpenStreetMap"}));
for(const s of route.trafficSignals)candidates.push({id:`signal-${s.id}`,at:s.approximateDistanceMeters,signal:true,source:"Comune di Firenze"});
// OSM also maps the signal-controlled crossing at the end of Via Ghibellina.
for(const c of map.crossings.filter(c=>c.signals))candidates.push({id:c.id,at:c.at,signal:true,source:"OpenStreetMap"});
export const FLORENCE_CROSSINGS: Crossing[]=[];
for(const c of candidates.sort((a,b)=>a.at-b.at)){
  const previous=FLORENCE_CROSSINGS[FLORENCE_CROSSINGS.length-1];
  if(previous&&c.at-previous.at<16){previous.signal ||= c.signal;if(c.source==="Comune di Firenze"){previous.at=c.at;previous.source=c.source;}}
  else FLORENCE_CROSSINGS.push({...c});
}
