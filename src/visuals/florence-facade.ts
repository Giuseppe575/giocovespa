import * as THREE from 'three';

/** Authored architectural detail for the Proconsolo pilot, not a photo projection.
 * All dimensions here are artistic estimates; the outer walls stay on OSM outlines.
 * Material slots: stone, glass, green shutters, brown wood, iron, warm interior, roof. */
export function addFlorenceFacade(details:THREE.BufferGeometry[][],a:number[],b:number[],height:number,nx:number,nz:number,masonry:boolean,seed:number){
 const width=Math.hypot(b[0]-a[0],b[1]-a[1]),angle=Math.atan2(nx,nz);
 const tx=(b[0]-a[0])/width,tz=-(b[1]-a[1])/width;
 const mx=(a[0]+b[0])/2,mz=-(a[1]+b[1])/2;
 const put=(slot:number,g:THREE.BufferGeometry,u:number,y:number,depth:number)=>{
  g.rotateY(angle);g.translate(mx+tx*u+nx*depth,y,mz+tz*u+nz*depth);details[slot].push(g);
 };
 const box=(slot:number,u:number,y:number,w:number,h:number,d:number,depth=.1)=>put(slot,new THREE.BoxGeometry(w,h,d),u,y,depth);
 const arch=(slot:number,u:number,base:number,w:number,h:number,depth:number)=>{
  const s=new THREE.Shape();s.moveTo(-w/2,0);s.lineTo(w/2,0);s.lineTo(w/2,h-w/2);s.absarc(0,h-w/2,w/2,0,Math.PI,false);s.closePath();
  put(slot,new THREE.ShapeGeometry(s,10),u,base,depth);
 };
 // Stone plinth, floor string courses and a projecting timber/terracotta eave.
 box(0,0,.24,width,.48,.12,.03);
 box(0,0,4.15,width,.18,.32,.1);
 box(3,0,height-.18,width,.22,.7,.2);
 box(6,0,height+.04,width+.15,.16,.9,.24);
 for(let u=-width/2+.4;u<width/2;u+=.8)box(3,u,height-.37,.13,.3,.56,.15);
 const columns=Math.max(1,Math.floor(width/(masonry?4.1:3.25)));
 for(let col=0;col<columns;col++){
  const u=-width/2+(col+.5)*width/columns;
  const door=col===Math.floor(columns/2),openingWidth=door?1.55:1.45;
  if(door){
   arch(0,u,.18,openingWidth+.48,3.8,.12);
   arch(3,u,.24,openingWidth,3.5,.145);
   for(const side of[-1,1])for(const y of[.8,1.65,2.5]){
    box(0,u+side*.36,y,.55,.64,.035,.17);
    box(3,u+side*.36,y,.46,.55,.05,.2);
   }
   box(4,u,1.3,.045,2.1,.03,.22);
   for(const side of[-1,1])box(4,u+side*.12,1.45,.05,.21,.06,.24);
  }else{
   const h=masonry?2.2:2.85,y=masonry?2.55:1.72;
   box(0,u,y,openingWidth+.32,h+.32,.13,.075);
   box(1,u,y,openingWidth,h,.025,.15);
   // Warm shop backing, behind subdivided dark glazing. No billboard panels.
   if(!masonry){
    box(5,u,y-.25,openingWidth-.22,h-.75,.015,.17);
    for(const side of[-1,1])box(3,u+side*openingWidth/2,y,.09,h,.09,.2);
    box(3,u,y+.38,openingWidth,.09,.09,.2);
    box(3,u,y,.07,h,.09,.2);
    box(3,u,.3,openingWidth,.32,.1,.2);
    for(let j=0;j<3;j++)box(3,u+(j-1)*.36,.63,.22,.3,.04,.2);
   }else{
    for(let x=-.6;x<=.6;x+=.2)box(4,u+x,y,.035,h,.035,.24);
    for(const dy of[-.8,0,.8])box(4,u,y+dy,openingWidth,.035,.035,.24);
    box(0,u,y-h/2-.1,openingWidth+.55,.21,.48,.19);
    for(const side of[-1,1])box(0,u+side*.55,y-h/2-.36,.2,.4,.3,.1);
   }
  }
  for(let y=6;y<height-1.2;y+=3.35){
   const w=masonry?1.35:1.03,h=1.95;
   box(0,u,y,w+.27,h+.28,.13,.065);
   box(1,u,y,w,h,.025,.15);
   box(0,u,y-h/2-.1,w+.46,.16,.42,.17);
   box(3,u,y,.065,h,.04,.18);box(3,u,y-.1,w,.065,.04,.18);
   if(masonry){
    box(0,u,y+h/2+.15,w+.5,.15,.34,.13);
    box(0,u,y+h/2+.3,w+.28,.14,.24,.1);
   }else{
    const slot=(seed+col)%3===0?2:3;
    for(const side of[-1,1]){
     const x=u+side*(w/2+.32);box(slot,x,y,.46,h,.09,.18);
     for(let dy=-.84;dy<.9;dy+=.17)box(slot,x,y+dy,.4,.065,.13,.23);
    }
   }
  }
 }
 // Sparse wall lanterns create a human-scale detail without blocking the pavement.
 if(width>5){
  const u=-width/2+.65;
  box(4,u,3.65,.075,.075,.62,.34);
  box(4,u,3.44,.075,.45,.075,.64);
  box(5,u,3.17,.2,.34,.2,.64);
  for(const side of[-1,1])box(4,u+side*.13,3.17,.035,.4,.29,.64);
  box(4,u,3.4,.34,.1,.34,.64);box(4,u,2.97,.29,.07,.29,.64);
 }
}
