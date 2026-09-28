import {sampleFlorence} from './florence';

export const GHIBELLINA_PILOT_START=235;
export const GHIBELLINA_PILOT_END=1188;
export type GhibellinaFacadeKind='bargello'|'palace'|'street';

/** Select street-facing edges, not entire buildings: the approved Proconsolo
 * face of a corner building must keep its previous appearance. */
export function ghibellinaFacadeProfile(id:string,a:number[],b:number[],nx:number,nz:number){
 const x=(a[0]+b[0])/2,z=-(a[1]+b[1])/2;
 let distance=Infinity,at=0;
 for(let s=180;s<=1220;s+=2){const p=sampleFlorence(s),d=Math.hypot(p.x-x,p.z-z);if(d<distance){distance=d;at=s;}}
 if(at<GHIBELLINA_PILOT_START||at>GHIBELLINA_PILOT_END||distance>18)return null;
 const p=sampleFlorence(at);
 if((p.x-x)*nx+(p.z-z)*nz<=0)return null;
 // Ghibellina runs approximately east here. Do not retheme the west-facing
 // Proconsolo frontage even if its corner falls inside the transition zone.
 if(Math.abs(nz)<.65)return null;
 const kind:GhibellinaFacadeKind=id==='r1461750'?'bargello':id==='r1598079'||id==='r4098965'?'palace':'street';
 return {at,distance,kind};
}
