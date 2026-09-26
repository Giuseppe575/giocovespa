import * as THREE from 'three';
let cache:ReturnType<typeof create>|undefined;
export function florenceMaterials(){return cache??=create();}
function create(){
 const loader=new THREE.TextureLoader();
 function texture(asset:string,channel:string,color=false){
  const map=loader.load(new URL(`textures/florence/${asset}_${channel}.jpg`,document.baseURI).href);
  map.wrapS=map.wrapT=THREE.RepeatWrapping;map.anisotropy=4;
  if(color)map.colorSpace=THREE.SRGBColorSpace;return map;
 }
 const plaster=texture('painted_plaster_wall','Diffuse',true),plasterNormal=texture('painted_plaster_wall','nor_gl');
 const stone=new THREE.MeshStandardMaterial({map:texture('medieval_blocks_05','Diffuse',true),normalMap:texture('medieval_blocks_05','nor_gl'),normalScale:new THREE.Vector2(.6,.6),roughness:.93,side:THREE.DoubleSide});
 const asphalt=new THREE.MeshStandardMaterial({color:0xb6b4ac,map:texture('aerial_asphalt_01','Diffuse',true),normalMap:texture('aerial_asphalt_01','nor_gl'),normalScale:new THREE.Vector2(.4,.4),roughness:.9});
 const walls=[0xcfb791,0xb9b09d,0xd9c7a6,0xbda287].map(color=>new THREE.MeshStandardMaterial({color,map:plaster,normalMap:plasterNormal,normalScale:new THREE.Vector2(.3,.3),roughness:.92,side:THREE.DoubleSide}));
 const grass=new THREE.MeshStandardMaterial({map:texture('grass_path_2','Diffuse',true),color:0x788363,roughness:1});
 return {stone,asphalt,walls,grass,trim:new THREE.MeshStandardMaterial({color:0xb3a28c,roughness:.86}),glass:new THREE.MeshStandardMaterial({color:0x293736,metalness:.18,roughness:.3}),wood:new THREE.MeshStandardMaterial({color:0x38443b,roughness:.83})};
}
