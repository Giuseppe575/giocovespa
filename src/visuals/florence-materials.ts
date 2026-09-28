import * as THREE from 'three';
import {surfaces} from './surfaces';
import {createFlorencePaving,createFlorenceAshlar} from './florence-paving';
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
 const paving=surfaces().pavement.map!.clone();paving.repeat.set(1,1);
 const pavement=new THREE.MeshStandardMaterial({color:0xa8aaa6,map:paving,bumpMap:paving,bumpScale:.015,roughness:.95});
 const brownWood=new THREE.MeshStandardMaterial({color:0x39291e,roughness:.76});
 const iron=new THREE.MeshStandardMaterial({color:0x242522,metalness:.65,roughness:.5});
 const interior=new THREE.MeshStandardMaterial({color:0x62482a,emissive:0x7d4215,emissiveIntensity:.2,roughness:.8});
 const historicRoad=createFlorencePaving();
 // Blend by absolute route UV, not camera distance: the change of surface
 // stays fixed after the Proconsolo turn, as shown in the Ghibellina frames.
 historicRoad.onBeforeCompile=shader=>{
  shader.uniforms.florenceAsphalt={value:asphalt.map};
  shader.fragmentShader='uniform sampler2D florenceAsphalt;\n'+shader.fragmentShader;
  shader.fragmentShader=shader.fragmentShader.replace('#include <map_fragment>',`#include <map_fragment>
   float routeMetres=vUv.y*3.;
   float avenue=smoothstep(230.,238.,routeMetres)*(1.-smoothstep(425.,455.,routeMetres))+smoothstep(1175.,1195.,routeMetres);
   vec4 asphaltSample=texture2D(florenceAsphalt,vUv);
   diffuseColor.rgb=mix(diffuseColor.rgb,asphaltSample.rgb*diffuse,avenue);
  `);
  // Do not retain the slab relief over the asphalt farther along the route.
  shader.fragmentShader=shader.fragmentShader.replace('#include <normal_fragment_maps>',THREE.ShaderChunk.normal_fragment_maps.replace('dHdxy_fwd()', 'dHdxy_fwd() * (1. - avenue)'));
 };
 // vUv is required independently of the texture's rotated vMapUv.
 historicRoad.defines={USE_UV:''};
 const ashlar=createFlorenceAshlar();
 const bargello=stone.clone();bargello.color.setHex(0xd6c9ab);
 bargello.map=stone.map!.clone();bargello.map.repeat.set(1.8,1.4);
 bargello.normalMap=stone.normalMap!.clone();bargello.normalMap.repeat.set(1.8,1.4);
 const ghibellinaPlaster=[0xe2cda4,0xcfbd9c,0xe4dac4].map(color=>{const m=walls[0].clone();m.color.setHex(color);return m;});
 const palace=ghibellinaPlaster[2].clone();
 palace.onBeforeCompile=shader=>{
  shader.uniforms.rusticatedBase={value:ashlar.map};
  shader.fragmentShader='uniform sampler2D rusticatedBase;\n'+shader.fragmentShader;
  shader.fragmentShader=shader.fragmentShader.replace('#include <map_fragment>',`#include <map_fragment>
   float base=1.-smoothstep(4.55,4.7,vMapUv.y*3.4);
   diffuseColor.rgb=mix(diffuseColor.rgb,texture2D(rusticatedBase,vMapUv).rgb*vec3(1.06,.94,.78),base);
  `);
 };
 const signCanvas=document.createElement('canvas');signCanvas.width=512;signCanvas.height=128;
 const signContext=signCanvas.getContext('2d')!;
 for(const [row,label] of ['GARAGE','OSTERIA'].entries()){
  signContext.fillStyle='#e2d6b9';signContext.fillRect(0,row*64,512,64);
  signContext.strokeStyle='#5c4b36';signContext.lineWidth=3;signContext.strokeRect(4,row*64+4,504,56);
  signContext.fillStyle='#322d25';signContext.textAlign='center';signContext.font='bold 32px Georgia';signContext.fillText(label,256,row*64+43);
 }
 const signMap=new THREE.CanvasTexture(signCanvas);signMap.colorSpace=THREE.SRGBColorSpace;signMap.anisotropy=4;
 const ghibellinaSigns=new THREE.MeshStandardMaterial({map:signMap,roughness:.85});
 const ghibellinaTrim=ashlar.clone();ghibellinaTrim.color.setHex(0xe2cbae);
 const brickCanvas=document.createElement('canvas');brickCanvas.width=brickCanvas.height=256;
 const bc=brickCanvas.getContext('2d')!;bc.fillStyle='#99836c';bc.fillRect(0,0,256,256);
 for(let row=0;row<16;row++)for(let col=-1;col<5;col++){
  const shade=(row*13+col*7+35)%23;
  bc.fillStyle=`rgb(${139+shade},${78+shade},${53+shade})`;bc.fillRect(col*64+row%2*32+1,row*16+1,62,14);
 }
 const brickMap=new THREE.CanvasTexture(brickCanvas);brickMap.colorSpace=THREE.SRGBColorSpace;brickMap.wrapS=brickMap.wrapT=THREE.RepeatWrapping;brickMap.anisotropy=4;
 const avenueWall=walls[2].clone();avenueWall.color.setHex(0xe6d8b9);
 avenueWall.onBeforeCompile=shader=>{
  shader.uniforms.avenueBrick={value:brickMap};shader.fragmentShader='uniform sampler2D avenueBrick;\n'+shader.fragmentShader;
  shader.fragmentShader=shader.fragmentShader.replace('#include <map_fragment>',`#include <map_fragment>
   float wallBase=1.-smoothstep(3.35,3.45,vMapUv.y*3.4);
   diffuseColor.rgb=mix(diffuseColor.rgb,texture2D(avenueBrick,vMapUv*vec2(4.,3.4)).rgb,wallBase);
  `);
 };
 return {stone,ashlar,avenueWall,ghibellinaWalls:[bargello,palace,...ghibellinaPlaster],ghibellinaTrim,ghibellinaSigns,asphalt,historicRoad,walls,grass,pavement,brownWood,iron,interior,trim:new THREE.MeshStandardMaterial({color:0xa39379,map:plaster,normalMap:plasterNormal,normalScale:new THREE.Vector2(.18,.18),roughness:.86}),glass:new THREE.MeshStandardMaterial({color:0x14201f,metalness:.1,roughness:.38}),wood:new THREE.MeshStandardMaterial({color:0x38443b,roughness:.83})};
}
