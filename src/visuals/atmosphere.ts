import * as THREE from "three";
import { Sky } from "three/examples/jsm/objects/Sky.js";

const waterTime = {value: 0};
let water: THREE.MeshStandardMaterial | undefined;

export function seaMaterial() {
  if(water) return water;
  water=new THREE.MeshStandardMaterial({color:0x1a7680,metalness:.15,roughness:.3,envMapIntensity:.75});
  water.onBeforeCompile=shader=>{
    shader.uniforms.coastTime=waterTime;
    shader.vertexShader="varying vec3 coastPosition;\n"+shader.vertexShader;
    shader.vertexShader=shader.vertexShader.replace("#include <begin_vertex>","#include <begin_vertex>\n coastPosition = (modelMatrix * vec4(position,1.0)).xyz;");
    shader.fragmentShader="uniform float coastTime;\nvarying vec3 coastPosition;\n"+shader.fragmentShader;
    shader.fragmentShader=shader.fragmentShader.replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
      float drift=sin(coastPosition.x*.63+coastPosition.z*.39+coastTime*.3);
      float waveA=cos(coastPosition.x*2.8+coastPosition.z*1.1+drift+coastTime*.9);
      float waveB=sin(coastPosition.z*4.5-coastPosition.x*.7+drift-coastTime*1.4);
      vec3 waveNormal=normalize(vec3(waveA*.032,1.,waveB*.024));
      normal=normalize(mat3(viewMatrix)*waveNormal);
    `);
  };
  return water;
}

export function updateAtmosphere(time: number) {waterTime.value=time;}

export function setupAtmosphere(scene: THREE.Scene, renderer: THREE.WebGLRenderer) {
  const sky=new Sky();
  sky.scale.setScalar(450);
  sky.material.uniforms.turbidity.value=3.4;
  sky.material.uniforms.rayleigh.value=1.3;
  sky.material.uniforms.mieCoefficient.value=.004;
  sky.material.uniforms.mieDirectionalG.value=.82;
  sky.material.uniforms.sunPosition.value.set(-.55,.48,-.68);
  // Bake the sky only once for paint, chrome and water reflections.
  const environmentScene=new THREE.Scene();
  environmentScene.add(sky);
  const pmrem=new THREE.PMREMGenerator(renderer);
  const environment=pmrem.fromScene(environmentScene,.025,.1,1000);
  scene.environment=environment.texture;
  scene.environmentIntensity=.55;
  scene.userData.environmentTarget=environment;
  pmrem.dispose();
  scene.add(sky);
  scene.background=null;
  scene.fog=new THREE.Fog(0xc7d6d6,32,180);

  // Ground closes the old sky-coloured gaps underneath buildings and pavements.
  const ground=new THREE.Mesh(new THREE.PlaneGeometry(650,650),new THREE.MeshStandardMaterial({color:0xb7ae92,roughness:1}));
  ground.rotation.x=-Math.PI/2;
  ground.position.set(0,-.24,-150);
  ground.receiveShadow=true;
  scene.add(ground);

  scene.add(new THREE.HemisphereLight(0xd9edff,0xa28d70,1.15));
  const sun=new THREE.DirectionalLight(0xffe4bd,3.1);
  sun.position.set(-32,48,-4);
  sun.target.position.set(0,0,-38);
  sun.castShadow=true;
  const compact=window.matchMedia("(pointer: coarse)").matches;
  sun.shadow.mapSize.setScalar(compact?1024:2048);
  Object.assign(sun.shadow.camera,{near:1,far:130,left:-30,right:30,top:48,bottom:-48});
  sun.shadow.normalBias=.035;
  sun.shadow.bias=-.00012;
  sun.shadow.radius=2;
  scene.add(sun,sun.target);
}
