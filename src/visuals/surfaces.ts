import * as THREE from "three";

// Small, deterministic textures are generated once; no downloads or per-frame uploads.
function texture(paint: (c: CanvasRenderingContext2D, rand: () => number) => void) {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 512;
  const c = canvas.getContext("2d")!;
  let seed = 1947;
  const rand = () => ((seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0) / 4294967296);
  paint(c, rand);
  const map = new THREE.CanvasTexture(canvas);
  map.wrapS = map.wrapT = THREE.RepeatWrapping;
  map.colorSpace = THREE.SRGBColorSpace;
  map.anisotropy = 4;
  return map;
}

function grain(c: CanvasRenderingContext2D, rand: () => number, count: number, alpha: number) {
  for (let i = 0; i < count; i++) {
    c.fillStyle = `rgba(${rand() > 0.5 ? "255,249,229" : "20,22,21"},${rand() * alpha})`;
    c.fillRect(rand() * 512, rand() * 512, 1 + rand() * 2, 1 + rand() * 2);
  }
}

let cached: ReturnType<typeof createSurfaces> | undefined;
export function surfaces() { return cached ??= createSurfaces(); }

function createSurfaces() {
  const asphalt = texture((c, r) => {
    c.fillStyle = "#737675"; c.fillRect(0, 0, 512, 512);
    grain(c, r, 62000, 0.4);
    c.strokeStyle = "rgba(25,28,28,.2)"; c.lineWidth = 1;
    c.beginPath(); c.moveTo(65, 0); c.lineTo(73, 88); c.lineTo(55, 160);
    c.lineTo(80, 209); c.stroke();
  });
  asphalt.repeat.set(2, 4);
  const pavement = texture((c, r) => {
    c.fillStyle = "#c6bca5"; c.fillRect(0, 0, 512, 512);
    for (let row = 0; row < 8; row++) for (let col = -1; col < 5; col++) {
      const x = col * 128 + (row % 2) * 64;
      const n = Math.floor(r() * 15);
      c.fillStyle = `rgb(${192+n},${182+n},${162+n})`;
      c.fillRect(x+2, row*64+2, 124, 60);
    }
    grain(c, r, 26000, 0.18);
  });
  pavement.repeat.set(1, 8);
  const sand = texture((c, r) => {
    c.fillStyle = "#e3cb9f"; c.fillRect(0, 0, 512, 512);
    grain(c, r, 44000, 0.22);
    for (let i=0; i<24; i++) {
      c.strokeStyle="rgba(255,245,210,.13)";
      c.beginPath(); c.moveTo(0,i*24); c.bezierCurveTo(140,i*24-15,370,i*24+15,512,i*24); c.stroke();
    }
  });
  sand.repeat.set(3, 2);
  const roof = texture((c, r) => {
    c.fillStyle = "#845643"; c.fillRect(0,0,512,512);
    for(let y=0; y<512; y+=32) for(let x=0;x<512;x+=32) {
      const g=c.createLinearGradient(x,0,x+30,0);
      g.addColorStop(0,"#81523f"); g.addColorStop(.5,`hsl(19 34% ${42+r()*12}%)`); g.addColorStop(1,"#654537");
      c.fillStyle=g; c.fillRect(x+1,y+1,30,30);
    }
  });
  const facadeMaps = ["#d4b295", "#dfd5bc", "#b6c0b3", "#d5bf95"].map((base, index) => texture((c,r) => {
    c.fillStyle=base; c.fillRect(0,0,512,512);
    grain(c,r,24000,.065);
    // One storey / two windows per repeat. Reveals, sills and shutters give depth.
    c.fillStyle="rgba(68,52,34,.19)"; c.fillRect(0,0,512,13);
    c.fillStyle="#e6dbc6"; c.fillRect(0,13,512,10);
    for (const x of [76, 332]) {
      c.fillStyle="rgba(45,40,29,.16)"; c.fillRect(x-22,88,158,315);
      c.fillStyle="#eee1c7"; c.fillRect(x-12,78,126,298);
      c.fillStyle="#253c40"; c.fillRect(x,90,102,270);
      const glass=c.createLinearGradient(x,90,x+102,350);
      glass.addColorStop(0,"#7b979c"); glass.addColorStop(.45,"#425f64"); glass.addColorStop(1,"#273c40");
      c.fillStyle=glass; c.fillRect(x+5,94,92,258);
      c.fillStyle="rgba(222,229,217,.27)"; c.fillRect(x+8,99,32,238);
      c.fillStyle="#c3bdab"; c.fillRect(x+48,92,5,266); c.fillRect(x+3,205,96,5);
      c.fillStyle=index===2?"#626c65":"#48675e";
      c.fillRect(x-42,91,27,268); c.fillRect(x+116,91,27,268);
      c.strokeStyle="rgba(13,37,32,.4)"; c.lineWidth=2;
      for(let y=100;y<355;y+=12) {c.beginPath();c.moveTo(x-39,y);c.lineTo(x-18,y);c.moveTo(x+119,y);c.lineTo(x+140,y);c.stroke();}
      c.fillStyle="#f0e5ce"; c.fillRect(x-21,364,145,15);
      c.fillStyle="rgba(52,41,30,.25)"; c.fillRect(x-17,379,140,8);
    }
  }));
  return {
    asphalt: new THREE.MeshStandardMaterial({color:0x777a78,map:asphalt,bumpMap:asphalt,bumpScale:.024,roughness:.89}),
    pavement: new THREE.MeshStandardMaterial({map:pavement,bumpMap:pavement,bumpScale:.018,roughness:.94}),
    sand: new THREE.MeshStandardMaterial({map:sand,bumpMap:sand,bumpScale:.035,roughness:1}),
    roof: new THREE.MeshStandardMaterial({map:roof,bumpMap:roof,bumpScale:.06,roughness:.88}),
    facades: facadeMaps.map(map=>new THREE.MeshStandardMaterial({map,bumpMap:map,bumpScale:.025,roughness:.88})),
    stone: new THREE.MeshStandardMaterial({color:0xc8bdac,roughness:.93}),
    iron: new THREE.MeshStandardMaterial({color:0x344944,metalness:.65,roughness:.45}),
  };
}

/** Scale UVs in metres so every facade has human-sized windows, including end walls. */
export function facadeGeometry(width: number, height: number, depth: number) {
  const geometry = new THREE.BoxGeometry(width,height,depth);
  const uv=geometry.attributes.uv;
  for(let face=0;face<6;face++) {
    const span=face<2?depth:width;
    for(let i=face*4;i<face*4+4;i++) uv.setXY(i,uv.getX(i)*span/4,uv.getY(i)*height/3);
  }
  return geometry;
}
