import {clearOfBuildings,florenceOffsetPoint} from './florence-space';

// Cross-section reconstruction, NOT surveyed widths. Preserve OSM footprints;
// reserve pavement space before sizing the carriageway. The historic streets
// use one traffic stream; the broad eastern avenue/lungarno stays two-lane.
const START=-30,END=1250;
let sections:{left:number;right:number;spaceLeft:number;spaceRight:number}[]|undefined;
function prepare(){
 const rows=[];
 for(let s=START;s<=END;s++){
  const extent=(side:number)=>{for(let x=.5;x<4;x+=.1)if(!clearOfBuildings(florenceOffsetPoint(s,x*side),.4))return x-.1;return 4;};
  const spaceLeft=extent(-1),spaceRight=extent(1);
  rows.push({left:Math.min(1.9,spaceLeft-.8),right:Math.min(1.9,spaceRight-.8),spaceLeft,spaceRight});
 }
 // A conservative envelope avoids abrupt steering shifts near facade corners.
 for(const side of ['left','right'] as const){
  for(let i=1;i<rows.length;i++)rows[i][side]=Math.min(rows[i][side],rows[i-1][side]+.045);
  for(let i=rows.length-2;i>=0;i--)rows[i][side]=Math.min(rows[i][side],rows[i+1][side]+.045);
 }
 return rows;
}
export function florenceStreetSection(distance:number){
 const t=Math.max(0,Math.min(1,(distance-1170)/80));
 if(t>=1)return {halfWidth:4.4,centerOffset:0,pavementLeft:1.8,pavementRight:1.8,laneSpacing:2.2,lanes:[0,2],laneCount:2};
 sections??=prepare();
 const index=Math.max(0,Math.min(sections.length-1,distance-START));
 const a=sections[Math.floor(index)],b=sections[Math.min(sections.length-1,Math.floor(index)+1)],f=index%1;
 const mix=(x:number,y:number)=>x+(y-x)*f;
 const left=mix(a.left,b.left),right=mix(a.right,b.right);
 const halfWidth=(left+right)/2*(1-t)+4.4*t;
 return {halfWidth,centerOffset:(right-left)/2*(1-t),
  pavementLeft:Math.min(1.5,mix(a.spaceLeft,b.spaceLeft)-left)*(1-t)+1.8*t,
  pavementRight:Math.min(1.5,mix(a.spaceRight,b.spaceRight)-right)*(1-t)+1.8*t,
  laneSpacing:Math.max(0,halfWidth-.9),lanes:t<.8?[1]:[0,2],laneCount:t<.8?1:2};
}
