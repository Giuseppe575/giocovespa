import {clearOfBuildings,florenceOffsetPoint} from './florence-space';

// Cross-section reconstruction, NOT surveyed widths. Preserve OSM footprints;
// reserve pavement space before sizing the carriageway. The historic streets
// use one traffic stream; Giovine Italia has three game lanes, the lungarno two.
const smooth=(a:number,b:number,s:number)=>{const t=Math.max(0,Math.min(1,(s-a)/(b-a)));return t*t*(3-2*t);};
export function florenceAvenueWeight(distance:number){return smooth(1198.8,1250,distance)*(1-smooth(1394.9,1495,distance));}

/** Same lane centres for traffic and paint. Widths are authored estimates. */
export function florenceLaneDividers(distance:number){
 const p=florenceStreetSection(distance);
 return p.laneCount===1?[]:p.laneCount===3?[-p.halfWidth/3,p.halfWidth/3]:[0];
}
export function florenceTrafficLane(distance:number,index:number){
 const p=florenceStreetSection(distance);
 if(p.laneCount===1)return 0;
 const split=smooth(1234,1274,distance),avenue=florenceAvenueWeight(distance);
 const two=(index%2? -1:1)*2.2;
 const three=(index%3-1)*3.4;
 return split*(two*(1-avenue)+three*avenue);
}
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
 const avenue=florenceAvenueWeight(distance),broadWidth=4.4+.7*avenue;
 if(t>=1)return {halfWidth:broadWidth,centerOffset:0,pavementLeft:1.8+.6*avenue,pavementRight:1.8+.6*avenue,laneSpacing:avenue>.5?broadWidth*2/3:broadWidth/2,lanes:avenue>.5?[0,1,2]:[0,2],laneCount:avenue>.5?3:2};
 sections??=prepare();
 const index=Math.max(0,Math.min(sections.length-1,distance-START));
 const a=sections[Math.floor(index)],b=sections[Math.min(sections.length-1,Math.floor(index)+1)],f=index%1;
 const mix=(x:number,y:number)=>x+(y-x)*f;
 const left=mix(a.left,b.left),right=mix(a.right,b.right);
 const halfWidth=(left+right)/2*(1-t)+broadWidth*t;
 return {halfWidth,centerOffset:(right-left)/2*(1-t),
  pavementLeft:Math.min(1.5,mix(a.spaceLeft,b.spaceLeft)-left)*(1-t)+(1.8+.6*avenue)*t,
  pavementRight:Math.min(1.5,mix(a.spaceRight,b.spaceRight)-right)*(1-t)+(1.8+.6*avenue)*t,
  laneSpacing:Math.max(0,halfWidth-.9),lanes:t<.8?[1]:avenue>.5?[0,1,2]:[0,2],laneCount:t<.8?1:avenue>.5?3:2};
}
