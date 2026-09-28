import * as THREE from 'three';
import type {GhibellinaFacadeKind} from '../core/ghibellina-presentation';
import {addFlorenceFacade} from './florence-facade';

/** Original geometry inspired by the supplied Ghibellina frames. Details are
 * approximations, not a claim of measured shop/entrance locations. */
export function addGhibellinaFacade(details:THREE.BufferGeometry[][],a:number[],b:number[],height:number,nx:number,nz:number,kind:GhibellinaFacadeKind,seed:number){
 const width=Math.hypot(b[0]-a[0],b[1]-a[1]),angle=Math.atan2(nx,nz);
 const tx=Math.cos(angle),tz=-Math.sin(angle),mx=(a[0]+b[0])/2,mz=-(a[1]+b[1])/2;
 const put=(slot:number,g:THREE.BufferGeometry,u:number,y:number,depth:number)=>{
  g.rotateY(angle);g.translate(mx+tx*u+nx*depth,y,mz+tz*u+nz*depth);details[slot].push(g);
 };
 const box=(slot:number,u:number,y:number,w:number,h:number,d:number,depth=.08)=>put(slot,new THREE.BoxGeometry(w,h,d),u,y,depth);
 const contour=(w:number,h:number,pointed=false)=>{
  const s=new THREE.Shape();s.moveTo(-w/2,0);s.lineTo(w/2,0);s.lineTo(w/2,h-w/2);
  if(pointed){s.quadraticCurveTo(w/2,h-.3,0,h);s.quadraticCurveTo(-w/2,h-.3,-w/2,h-w/2);}
  else s.absarc(0,h-w/2,w/2,0,Math.PI,false);
  s.closePath();return s;
 };
 const arch=(slot:number,u:number,base:number,w:number,h:number,depth:number,pointed=false)=>put(slot,new THREE.ShapeGeometry(contour(w,h,pointed),10),u,base,depth);
 const surround=(u:number,base:number,w:number,h:number,pointed=false)=>{
  const shape=contour(w+.34,h+.22,pointed),hole=contour(w,h,pointed);
  shape.holes.push(new THREE.Path(hole.getPoints(10)));
  put(7,new THREE.ExtrudeGeometry(shape,{depth:.14,bevelEnabled:true,bevelSegments:1,steps:1,bevelSize:.025,bevelThickness:.025,curveSegments:10}),u,base,.09);
 };
 if(kind==='street'){
  addFlorenceFacade(details,a,b,height,nx,nz,false,seed);
  // Drainpipes and window rails break up the repeated vertical bays.
  const pipe=new THREE.CylinderGeometry(.04,.04,height-.4,6);put(3,pipe,width/2-.25,height/2,.15);
  if(width>8){
   box(4,0,5.6,2.15,.045,.35,.3);
   box(4,0,6.2,2.15,.045,.045,.49);
   for(let x=-1;x<=1;x+=.22)box(4,x,5.9,.025,.6,.025,.49);
  }
  if(width>5&&seed%3===0){
   const canopy=new THREE.BoxGeometry(1.85,.06,.55);canopy.rotateX(.17);
   put(2,canopy,0,3.05,.35);
   box(2,0,2.94,1.85,.16,.04,.59);
  }
  return;
 }
 if(kind==='bargello'){
  // Fortress wall: deliberately no ground-floor shop grid or shutters.
  box(7,0,.3,width,.6,.1,.025);
  box(7,0,7.2,width,.14,.22,.07);
  const bays=Math.max(1,Math.floor(width/7));
  for(let i=0;i<bays;i++){
   const u=-width/2+(i+.5)*width/bays;
   arch(1,u,7.6,1.05,2.05,.035,true);surround(u,7.6,1.05,2.05,true);
   for(let dx=-.4;dx<.5;dx+=.2)box(4,u+dx,8.37,.024,1.5,.035,.19);
   box(4,u,8.3,.93,.028,.035,.19);
   for(const y of[3.5,5.9,11.2])box(1,u+.9,y,.14,.18,.02,.025);
   if(i%2===0){
    const ring=new THREE.TorusGeometry(.11,.025,5,12);put(4,ring,u-.8,1.1,.12);
   }
  }
  if(width>15){
   const u=width*.15;arch(3,u,.17,2.1,4.4,.055,true);surround(u,.17,2.1,4.4,true);
   for(let x=-.88;x<1;x+=.22)box(4,u+x,1.9,.022,3.2,.025,.12);
   for(const y of[.55,1.3,2.05,2.8])for(const x of[-.83,0,.83])box(4,u+x,y,.065,.065,.035,.14);
  }
  box(7,0,height-.35,width,.25,.48,.13);
  return;
 }
 // Palazzo: rusticated base, tall arched openings, and upper residential bays.
 const columns=Math.max(1,Math.floor(width/4.7));
 box(7,0,.2,width,.4,.13,.03);box(7,0,4.7,width,.21,.34,.14);
 box(7,0,height-.2,width,.28,.46,.15);
 for(let col=0;col<columns;col++){
  const u=-width/2+(col+.5)*width/columns;
  const entrance=col===Math.floor(columns/2),w=entrance?2.65:1.7,h=entrance?4.25:3.5;
  arch(entrance?1:3,u,.2,w,h,.04);surround(u,.2,w,h);
  if(entrance){
   // Lit garage vestibule impression, kept wholly inside the facade footprint.
   box(5,u,2,w-.35,.1,.025,.065);
   box(3,u,1.25,.1,2.1,.05,.075);
   box(4,u,.4,w-.3,.08,.05,.075);
   // Small original plaque, not a screenshot pasted over the building.
   const plaque=new THREE.PlaneGeometry(w,.4),uv=plaque.attributes.uv;
   const row=seed===1598079?0:1;
   for(let i=0;i<uv.count;i++)uv.setY(i,(uv.getY(i)+1-row)/2);
   put(8,plaque,u,3.18,.16);
  }else{
   for(const dx of[-.32,.32])for(const y of[.75,1.55,2.35]){
    box(7,u+dx,y,.47,.57,.035,.095);box(3,u+dx,y,.4,.5,.025,.12);
   }
   // Radial fanlight bars, not a solid panel in front of the shop.
   for(let j=0;j<7;j++){
    const theta=j*Math.PI/6,r=.69;
    const bar=new THREE.BoxGeometry(.025,r,.025);bar.rotateZ(Math.PI/2-theta);
    put(4,bar,u+Math.cos(theta)*r/2,2.7+Math.sin(theta)*r/2,.15);
   }
  }
  for(let y=6.2;y<height-1;y+=3.35){
   box(7,u,y,1.5,2.3,.12,.07);box(1,u,y,1.15,1.95,.025,.15);
   box(7,u,y-1.1,1.75,.16,.4,.14);box(3,u,y,.07,1.95,.04,.18);
   box(7,u,y+1.22,1.8,.14,.34,.12);
   if(seed%2===0)for(const side of[-1,1]){
    box(2,u+side*.88,y,.43,1.95,.09,.17);
    for(let dy=-.83;dy<.9;dy+=.2)box(2,u+side*.88,y+dy,.38,.055,.12,.22);
   }
  }
 }
}
