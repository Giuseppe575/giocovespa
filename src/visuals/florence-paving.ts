import * as THREE from 'three';

export function createFlorenceAshlar(){
 const canvas=document.createElement('canvas');canvas.width=canvas.height=512;
 const c=canvas.getContext('2d')!;let seed=38;
 const rand=()=>((seed=(Math.imul(seed,1664525)+1013904223)>>>0)/4294967296);
 c.fillStyle='#625e55';c.fillRect(0,0,512,512);
 for(let row=0;row<8;row++)for(let col=-1;col<5;col++){
  const x=col*128+row%2*64,y=row*64,n=Math.floor(rand()*12);
  const fill=c.createLinearGradient(x,y,x,y+64);
  fill.addColorStop(0,`rgb(${175+n},${166+n},${148+n})`);
  fill.addColorStop(.13,`rgb(${151+n},${141+n},${125+n})`);
  fill.addColorStop(.9,`rgb(${143+n},${134+n},${118+n})`);
  fill.addColorStop(1,'#736d60');c.fillStyle=fill;c.fillRect(x+1,y+1,126,62);
 }
 for(let i=0;i<42000;i++){c.fillStyle=rand()>.5?'rgba(232,224,204,.13)':'rgba(40,36,30,.12)';c.fillRect(rand()*512,rand()*512,1+rand(),1+rand());}
 const map=new THREE.CanvasTexture(canvas);map.colorSpace=THREE.SRGBColorSpace;map.wrapS=map.wrapT=THREE.RepeatWrapping;map.anisotropy=4;
 const bump=map.clone();bump.colorSpace=THREE.NoColorSpace;
 return new THREE.MeshStandardMaterial({map,bumpMap:bump,bumpScale:.045,roughness:.95,side:THREE.DoubleSide});
}

/** Original, deterministic stonework; no source photograph is embedded. */
export function createFlorencePaving(){
 const canvas=document.createElement('canvas');canvas.width=canvas.height=1024;
 const c=canvas.getContext('2d')!;let seed=127;
 const rand=()=>((seed=(Math.imul(seed,1664525)+1013904223)>>>0)/4294967296);
 c.fillStyle='#494943';c.fillRect(0,0,1024,1024);
 for(let row=-1;row<9;row++)for(let col=-1;col<5;col++){
  const x=col*256+(row%2)*128,y=row*128,n=Math.floor(rand()*20);
  const fill=c.createLinearGradient(x,y,x+210,y+128);
  fill.addColorStop(0,`rgb(${104+n},${105+n},${101+n})`);fill.addColorStop(1,`rgb(${88+n},${91+n},${89+n})`);
  c.fillStyle=fill;c.beginPath();c.moveTo(x+3,y+3);c.lineTo(x+250,y+2+rand()*4);c.lineTo(x+253,y+123);c.lineTo(x+3,y+125);c.closePath();c.fill();
  c.strokeStyle='rgba(220,211,185,.28)';c.lineWidth=2;c.stroke();
  for(let k=0;k<5;k++){
   c.strokeStyle=`rgba(228,219,197,${.02+rand()*.07})`;c.lineWidth=1+rand()*3;c.beginPath();
   const sy=y+rand()*125;c.moveTo(x+8,sy);c.lineTo(x+100,sy+rand()*18);c.lineTo(x+245,sy-10+rand()*20);c.stroke();
  }
 }
 for(let i=0;i<95000;i++){
  const light=rand()>.5;c.fillStyle=light?'rgba(224,219,206,.09)':'rgba(35,36,34,.1)';c.fillRect(rand()*1024,rand()*1024,1+rand()*2,1+rand()*2);
 }
 const map=new THREE.CanvasTexture(canvas);map.wrapS=map.wrapT=THREE.RepeatWrapping;map.colorSpace=THREE.SRGBColorSpace;map.anisotropy=4;
 // The road uses metre-scaled UVs. The diagonal laying recalls the reference
 // without baking perspective, vehicles, people or shadows into the surface.
 map.rotation=Math.PI/4;
 const bump=map.clone();bump.colorSpace=THREE.NoColorSpace;
 return new THREE.MeshStandardMaterial({map,bumpMap:bump,bumpScale:.025,roughness:.84,color:0xc6c7c4});
}
