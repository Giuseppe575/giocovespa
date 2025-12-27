import * as THREE from "three";
import { GAME_CONFIG, Obstacle, ObstacleType, World } from "./definitions";
import {
  choice,
  createBasicMetal,
  createEmissiveMaterial,
  createSoftBody,
  randRange,
} from "./utils";

const logDebug = (...args: unknown[]) => {
  if (GAME_CONFIG.debug) console.log(...args);
};

export function createRenderer(): THREE.WebGLRenderer {
  logDebug("createRenderer() - Inizio creazione renderer");

  const createCanvasErrorOverlay = (message: string) => {
    const errorDiv = document.createElement('div');
    errorDiv.style.position = 'fixed';
    errorDiv.style.top = '50%';
    errorDiv.style.left = '50%';
    errorDiv.style.transform = 'translate(-50%, -50%)';
    errorDiv.style.background = 'rgba(255, 0, 0, 0.9)';
    errorDiv.style.color = 'white';
    errorDiv.style.padding = '20px';
    errorDiv.style.borderRadius = '10px';
    errorDiv.style.zIndex = '9999';
    errorDiv.style.maxWidth = '90%';
    errorDiv.style.textAlign = 'center';
    errorDiv.innerHTML = `
      <h3>Errore WebGL</h3>
      <p>${message}</p>
      <p style="font-size: 12px; margin-top: 10px;">Prova a ricaricare la pagina o abilita WebGL nelle impostazioni del browser.</p>
    `;
    document.body.appendChild(errorDiv);
  };

  const rendererOptions: THREE.WebGLRendererParameters = {
    antialias: true,
    alpha: false,
    powerPreference: "high-performance",
    failIfMajorPerformanceCaveat: false,
  };

  let renderer: THREE.WebGLRenderer | null = null;

  try {
    renderer = new THREE.WebGLRenderer(rendererOptions);
    logDebug("createRenderer() - WebGLRenderer creato");
  } catch (error) {
    console.warn("createRenderer() - WebGLRenderer fallito, provo WebGL1 con canvas manuale", error);
    try {
      const fallbackCanvas = document.createElement('canvas');
      const fallbackContext = fallbackCanvas.getContext('webgl', {
        antialias: true,
        preserveDrawingBuffer: false,
      });

      if (!fallbackContext) {
        throw new Error("Fallback WebGL context non disponibile");
      }

      renderer = new THREE.WebGLRenderer({
        ...rendererOptions,
        canvas: fallbackCanvas,
        context: fallbackContext as WebGLRenderingContext,
      });
      logDebug("createRenderer() - Renderer creato con contesto WebGL1 fallback");
    } catch (fallbackError) {
      console.error("ERRORE nella creazione del renderer WebGL:", fallbackError);
      createCanvasErrorOverlay("Il tuo dispositivo non riesce a creare un contesto WebGL.");
      throw fallbackError;
    }
  }

  if (!renderer.getContext()) {
    console.error("createRenderer() - Context WebGL non disponibile");
    createCanvasErrorOverlay("Impossibile inizializzare WebGL: contesto non disponibile.");
    throw new Error("WebGL context unavailable");
  }

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.setClearColor(new THREE.Color(GAME_CONFIG.cityFogColor));

  // Gestisci perdita del contesto su device vecchi o lenti
  renderer.domElement.addEventListener(
    "webglcontextlost",
    (event) => {
      event.preventDefault();
      console.error("WebGL context lost - mostro messaggio all'utente");
      createCanvasErrorOverlay(
        "Il rendering 3D e stato disattivato dal browser (contesto WebGL perso). Chiudi altre app o ricarica la pagina."
      );
    },
    { passive: false }
  );

  // Stile canvas per posizionamento corretto
  const canvas = renderer.domElement;
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.zIndex = '0';
  canvas.id = 'game-canvas';

  // Inserisci il canvas PRIMA dell'HUD per assicurarsi che sia dietro
  const hud = document.getElementById('hud');
  if (hud && hud.parentNode) {
    hud.parentNode.insertBefore(canvas, hud);
    logDebug("Renderer canvas inserito prima dell'HUD");
  } else {
    document.body.insertBefore(canvas, document.body.firstChild);
    logDebug("Renderer canvas inserito come primo elemento del body");
  }

  logDebug(`Canvas dimensioni: ${canvas.width}x${canvas.height}, style: ${canvas.style.width}x${canvas.style.height}`);
  return renderer;
}

export function createCamera(): THREE.PerspectiveCamera {
  const camera = new THREE.PerspectiveCamera(
    GAME_CONFIG.fov,
    window.innerWidth / window.innerHeight,
    0.1,
    300
  );
  return camera;
}

export function createScene(): THREE.Scene {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(GAME_CONFIG.cityFogColor);
  scene.fog = new THREE.Fog(
    GAME_CONFIG.cityFogColor,
    GAME_CONFIG.fogNear,
    GAME_CONFIG.fogFar
  );
  return scene;
}

export function addLights(scene: THREE.Scene): void {
  const ambient = new THREE.AmbientLight(GAME_CONFIG.ambientColor, 0.9);
  scene.add(ambient);

  const hemi = new THREE.HemisphereLight(
    GAME_CONFIG.hemiColorSky,
    GAME_CONFIG.hemiColorGround,
    0.6
  );
  scene.add(hemi);

  const dir = new THREE.DirectionalLight(GAME_CONFIG.sunColor, 1.1);
  dir.position.set(-12, 25, 30);
  dir.castShadow = true;
  dir.shadow.mapSize.set(1024, 1024);
  dir.shadow.camera.near = 5;
  dir.shadow.camera.far = 80;
  dir.shadow.camera.left = -40;
  dir.shadow.camera.right = 40;
  dir.shadow.camera.top = 40;
  dir.shadow.camera.bottom = -40;
  scene.add(dir);
}

/**
 * Stylized Vespa 5 with rider.
 * Low-poly, built from primitives but with good silhouette.
 */
export function createVespaWithRider(): THREE.Group {
  const group = new THREE.Group();

  // Body
  const bodyMat = createBasicMetal(0x1f7cff);
  const floorMat = createBasicMetal(0x111111);

  const chassis = new THREE.Mesh(
    new THREE.BoxGeometry(0.6, 0.25, 1.3),
    bodyMat
  );
  chassis.position.set(0, 0.6, 0);
  chassis.castShadow = true;
  chassis.receiveShadow = true;
  group.add(chassis);

  const frontShield = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 0.9, 0.18),
    bodyMat
  );
  frontShield.position.set(0, 0.9, -0.45);
  frontShield.castShadow = true;
  group.add(frontShield);

  const floor = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 0.06, 0.9),
    floorMat
  );
  floor.position.set(0, 0.5, 0.1);
  floor.castShadow = true;
  floor.receiveShadow = true;
  group.add(floor);

  const rearSide = new THREE.Mesh(
    new THREE.BoxGeometry(0.65, 0.55, 0.7),
    bodyMat
  );
  rearSide.position.set(0, 0.8, 0.5);
  rearSide.castShadow = true;
  group.add(rearSide);

  // Seat
  const seat = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 0.12, 0.7),
    createSoftBody(0x111111)
  );
  seat.position.set(0, 1.05, 0.3);
  seat.castShadow = true;
  group.add(seat);

  // Wheels
  const wheelMat = createBasicMetal(0x111111);
  const tireGeom = new THREE.CylinderGeometry(0.23, 0.23, 0.14, 16);
  const frontWheel = new THREE.Mesh(tireGeom, wheelMat);
  frontWheel.rotation.z = Math.PI / 2;
  frontWheel.position.set(0, 0.32, -0.55);
  frontWheel.castShadow = true;

  const rearWheel = new THREE.Mesh(tireGeom, wheelMat);
  rearWheel.rotation.z = Math.PI / 2;
  rearWheel.position.set(0, 0.32, 0.55);
  rearWheel.castShadow = true;

  group.add(frontWheel, rearWheel);

  // Handlebar
  const bar = new THREE.Mesh(
    new THREE.BoxGeometry(0.7, 0.08, 0.08),
    bodyMat
  );
  bar.position.set(0, 1.18, -0.45);
  bar.castShadow = true;
  group.add(bar);

  const headlight = new THREE.Mesh(
    new THREE.CylinderGeometry(0.11, 0.11, 0.09, 20),
    createEmissiveMaterial(0xfff8d1, 3.2)
  );
  headlight.rotation.x = Math.PI / 2;
  headlight.position.set(0, 1.2, -0.54);
  headlight.castShadow = false;
  group.add(headlight);

  // Tail light
  const tail = new THREE.Mesh(
    new THREE.BoxGeometry(0.22, 0.14, 0.04),
    createEmissiveMaterial(0xff2640, 1.2)
  );
  tail.position.set(0, 0.9, 0.9);
  group.add(tail);

  // Rider (stylized human)
  const skin = createSoftBody(0xf4c9a5);
  const shirt = createSoftBody(0x202439);
  const pants = createSoftBody(0x19191c);
  const helmetMat = createSoftBody(0xffffff);

  // Legs
  const legGeom = new THREE.BoxGeometry(0.13, 0.45, 0.13);
  const leftLeg = new THREE.Mesh(legGeom, pants);
  leftLeg.position.set(-0.09, 0.8, 0.15);
  const rightLeg = leftLeg.clone();
  rightLeg.position.x = 0.09;

  // Torso
  const torso = new THREE.Mesh(
    new THREE.BoxGeometry(0.32, 0.42, 0.2),
    shirt
  );
  torso.position.set(0, 1.25, 0.1);

  // Arms
  const armGeom = new THREE.BoxGeometry(0.11, 0.35, 0.11);
  const leftArm = new THREE.Mesh(armGeom, shirt);
  leftArm.position.set(-0.26, 1.3, -0.2);
  const rightArm = leftArm.clone();
  rightArm.position.x = 0.26;

  // Head + helmet
  const head = new THREE.Mesh(
    new THREE.SphereGeometry(0.12, 16, 16),
    skin
  );
  head.position.set(0, 1.6, -0.02);

  const helmet = new THREE.Mesh(
    new THREE.SphereGeometry(0.14, 20, 20, 0, Math.PI * 2, 0, Math.PI / 1.2),
    helmetMat
  );
  helmet.position.copy(head.position);
  helmet.position.y += 0.01;

  const visor = new THREE.Mesh(
    new THREE.BoxGeometry(0.16, 0.06, 0.02),
    createSoftBody(0x1a3b4f)
  );
  visor.position.set(0, 1.58, -0.13);

  [leftLeg, rightLeg, torso, leftArm, rightArm, head, helmet, visor].forEach(
    (m) => {
      m.castShadow = true;
      group.add(m);
    }
  );

  group.position.set(0, 0, -5);
  group.traverse((obj) => {
    if ((obj as THREE.Mesh).isMesh) {
      (obj as THREE.Mesh).receiveShadow = true;
    }
  });

  return group;
}

export function createRoad(scene: THREE.Scene): THREE.Mesh[] {
  const segments: THREE.Mesh[] = [];
  const material = new THREE.MeshStandardMaterial({
    color: 0x3a3f45,
    roughness: 0.85,
    metalness: 0.04,
  });

  const width = GAME_CONFIG.laneWidth * GAME_CONFIG.lanes + 3;

  for (
    let z = -GAME_CONFIG.roadSegmentLength * 2;
    z > -GAME_CONFIG.roadLength;
    z -= GAME_CONFIG.roadSegmentLength
  ) {
    const geom = new THREE.BoxGeometry(
      width,
      0.12,
      GAME_CONFIG.roadSegmentLength
    );
    const mesh = new THREE.Mesh(geom, material);
    mesh.position.set(0, 0, z);
    mesh.userData.baseX = 0;
    mesh.receiveShadow = true;
    scene.add(mesh);
    segments.push(mesh);
  }

  // lane lines
  const lineMat = new THREE.MeshStandardMaterial({
    color: 0xf8f8f8,
    roughness: 0.7,
  });
  const dashLength = 1.2;
  const dashGap = 1;
  const laneCount = GAME_CONFIG.lanes;
  const laneWidth = GAME_CONFIG.laneWidth;

  for (let lane = 1; lane < laneCount; lane++) {
    const x = (lane - laneCount / 2) * laneWidth;
    for (let i = 0; i < 120; i++) {
      const geom = new THREE.BoxGeometry(0.08, 0.02, dashLength);
      const mesh = new THREE.Mesh(geom, lineMat);
      mesh.position.set(x, 0.07, -i * (dashLength + dashGap));
      mesh.userData.baseX = x;
      mesh.receiveShadow = false;
      mesh.castShadow = false;
      scene.add(mesh);
      segments.push(mesh);
    }
  }

  // Side sidewalks
  const sideMat = new THREE.MeshStandardMaterial({
    color: 0xced4da,
    roughness: 0.85,
  });

  for (let i = 0; i < 40; i++) {
    const geom = new THREE.BoxGeometry(2, 0.3, 5);
    const left = new THREE.Mesh(geom, sideMat);
    const right = new THREE.Mesh(geom, sideMat);
    left.position.set(-width / 2 - 1, 0.15, -i * 5);
    right.position.set(width / 2 + 1, 0.15, -i * 5);
    left.userData.baseX = left.position.x;
    right.userData.baseX = right.position.x;
    left.receiveShadow = true;
    right.receiveShadow = true;
    scene.add(left, right);
    segments.push(left, right);
  }

  return segments;
}

/**
 * Create simple futuristic / Italian city-style buildings.
 */
function addFacadeWindows(parent: THREE.Group, width: number, height: number, depth: number, side: number, windowMat: THREE.Material) {
  const cols = Math.max(2, Math.floor(width / 0.9));
  const rows = Math.max(3, Math.floor(height / 0.9));
  const zMin = -depth / 2 + 0.35;
  const zMax = depth / 2 - 0.35;
  const x = side > 0 ? -(width / 2 - 0.05) : width / 2 - 0.05;
  for (let r = 0; r < rows; r++) {
    const y = 0.8 + r * (height / rows);
    for (let c = 0; c < cols; c++) {
      const z = zMin + c * ((zMax - zMin) / Math.max(1, cols - 1));
      if (Math.random() < 0.12) continue; // piccoli vuoti casuali
      const win = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.36, 0.04), windowMat);
      win.position.set(x, y, z);
      win.castShadow = false;
      win.receiveShadow = false;
      parent.add(win);
    }
  }
}

function createBuildingForSide(side: number, worldWidth: number): THREE.Group {
  const style = choice<"brick" | "concrete" | "glass" | "mixed">(["brick", "concrete", "glass", "mixed"]);
  const group = new THREE.Group();

  const params = {
    brick: {
      color: 0x8b4a3a,
      roughness: 0.9,
      metalness: 0.25,
      winColor: 0xa9c7df,
      winEmissive: 0x183247,
    },
    concrete: {
      color: 0xb7b9bd,
      roughness: 0.82,
      metalness: 0.15,
      winColor: 0x9cb6c8,
      winEmissive: 0x1f2e3a,
    },
    glass: {
      color: 0x6e869a,
      roughness: 0.4,
      metalness: 0.35,
      winColor: 0xa7c5dd,
      winEmissive: 0x2a3e54,
    },
    mixed: {
      color: 0xc4c4c4,
      roughness: 0.78,
      metalness: 0.2,
      winColor: 0xa7c5dd,
      winEmissive: 0x2a3e54,
    },
  }[style];

  const w = randRange(2.8, style === "glass" ? 6.2 : 4.8);
  const h = randRange(style === "glass" ? 8 : 5, style === "glass" ? 15 : 11);
  const d = randRange(2.4, 4.8);

  const body = new THREE.Mesh(
    new THREE.BoxGeometry(w, h, d),
    new THREE.MeshStandardMaterial({
      color: params.color,
      metalness: params.metalness,
      roughness: params.roughness,
    })
  );
  body.position.y = h / 2;
  body.castShadow = true;
  body.receiveShadow = true;
  group.add(body);

  // Facciata lato strada
  const windowMat = new THREE.MeshStandardMaterial({
    color: params.winColor,
    emissive: params.winEmissive,
    emissiveIntensity: 0.15,
    metalness: 0.1,
    roughness: 0.35,
  });
  addFacadeWindows(group, w, h, d, side, windowMat);

  // Bordo cornice superiore per dare piu "massa"
  const crown = new THREE.Mesh(
    new THREE.BoxGeometry(w + 0.2, 0.25, d + 0.2),
    new THREE.MeshStandardMaterial({
      color: params.color,
      metalness: params.metalness * 0.6,
      roughness: Math.min(1, params.roughness + 0.05),
    })
  );
  crown.position.set(0, h + 0.12, 0);
  crown.castShadow = true;
  group.add(crown);

  return group;
}

export function createBuildings(scene: THREE.Scene, worldWidth: number) {
  const buildings: THREE.Group[] = [];

  for (let side = -1; side <= 1; side += 2) {
    for (let i = 0; i < 40; i++) {
      const b = createBuildingForSide(side, worldWidth);
      b.position.set(
        side * (worldWidth / 2 + 3 + randRange(0, 2)),
        0,
        -i * 5 - randRange(0, 5)
      );
      b.userData.baseX = b.position.x;

      b.traverse((obj) => {
        if ((obj as THREE.Mesh).isMesh) {
          obj.castShadow = true;
          obj.receiveShadow = true;
        }
      });

      scene.add(b);
      buildings.push(b);
    }
  }

  return buildings;
}

export function createStreetLights(scene: THREE.Scene, worldWidth: number) {
  const lights: THREE.Group[] = [];
  const count = 40;
  for (let i = 0; i < count; i++) {
    const z = -i * 10 - 5;
    for (const side of [-1, 1]) {
      const pole = new THREE.Group();
      const poleMat = createBasicMetal(0x7b838d);
      const lampMat = createEmissiveMaterial(0xfff2d1, 0.4);

      const base = new THREE.Mesh(
        new THREE.CylinderGeometry(0.08, 0.12, 0.4, 8),
        poleMat
      );
      base.position.y = 0.2;
      base.castShadow = true;
      base.receiveShadow = true;

      const stem = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 3, 10),
        poleMat
      );
      stem.position.y = 1.9;
      stem.castShadow = true;
      stem.receiveShadow = true;

      const arm = new THREE.Mesh(
        new THREE.BoxGeometry(0.8, 0.05, 0.05),
        poleMat
      );
      arm.position.set(side > 0 ? -0.35 : 0.35, 3.3, 0);
      arm.castShadow = true;

      const lamp = new THREE.Mesh(
        new THREE.SphereGeometry(0.13, 12, 12),
        lampMat
      );
      lamp.position.set(side > 0 ? -0.7 : 0.7, 3.3, 0);
      lamp.castShadow = false;

      pole.add(base, stem, arm, lamp);

      const lightX = side * (worldWidth / 2 + 1.2);
      pole.position.set(lightX, 0, z);
      pole.userData.baseX = pole.position.x;

      const l = new THREE.PointLight(0xfff2d1, 0.2, 18, 1.4);
      l.position.set(
        lamp.position.x,
        lamp.position.y - 0.08,
        lamp.position.z
      );
      pole.add(l);

      scene.add(pole);
      lights.push(pole);
    }
  }
  return lights;
}

/**
 * Simplified-but-cool car shapes as obstacles.
 */
function createCar(): THREE.Group {
  const car = new THREE.Group();
  const bodyColor = Math.random() > 0.5 ? 0xff5733 : 0x1abc9c;
  const body = new THREE.Mesh(
    new THREE.BoxGeometry(1.2, 0.35, 2),
    createSoftBody(bodyColor)
  );
  body.position.y = 0.4;
  body.castShadow = true;
  car.add(body);

  const cabin = new THREE.Mesh(
    new THREE.BoxGeometry(0.9, 0.4, 0.8),
    createSoftBody(0x111111)
  );
  cabin.position.set(0, 0.75, -0.1);
  cabin.castShadow = true;
  car.add(cabin);

  const wheelGeom = new THREE.CylinderGeometry(0.22, 0.22, 0.15, 12);
  const wheelMat = createBasicMetal(0x151515);
  const wheelPositions: [number, number, number][] = [
    [-0.5, 0.22, -0.8],
    [0.5, 0.22, -0.8],
    [-0.5, 0.22, 0.8],
    [0.5, 0.22, 0.8],
  ];
  wheelPositions.forEach(([x, y, z]) => {
    const w = new THREE.Mesh(wheelGeom, wheelMat);
    w.rotation.z = Math.PI / 2;
    w.position.set(x, y, z);
    w.castShadow = true;
    car.add(w);
  });

  const headLights = new THREE.Mesh(
    new THREE.BoxGeometry(0.18, 0.08, 0.04),
    createEmissiveMaterial(0xfffbd1, 1.6)
  );
  headLights.position.set(0.32, 0.4, -1.02);

  const headLightsLeft = headLights.clone();
  headLightsLeft.position.set(-0.32, 0.4, -1.02);

  car.add(headLights, headLightsLeft);

  return car;
}

function createBarrier(): THREE.Group {
  const group = new THREE.Group();
  const base = new THREE.Mesh(
    new THREE.BoxGeometry(1.6, 0.5, 0.4),
    createSoftBody(0xd0d3d8)
  );
  base.castShadow = true;
  base.receiveShadow = true;

  const stripes = new THREE.Mesh(
    new THREE.BoxGeometry(1.6, 0.22, 0.42),
    createSoftBody(0xff4f4f)
  );
  stripes.position.y = 0.16;
  stripes.castShadow = true;

  group.add(base, stripes);
  return group;
}

function createCone(): THREE.Group {
  const group = new THREE.Group();
  const base = new THREE.Mesh(
    new THREE.CylinderGeometry(0.12, 0.18, 0.06, 16),
    createSoftBody(0xffffff)
  );
  base.position.y = 0.03;
  const cone = new THREE.Mesh(
    new THREE.ConeGeometry(0.16, 0.42, 16),
    createSoftBody(0xff7a1b)
  );
  cone.position.y = 0.27;
  cone.castShadow = true;
  base.castShadow = true;
  group.add(base, cone);
  return group;
}

function createRamp(): THREE.Group {
  const group = new THREE.Group();
  const mat = createSoftBody(0x8c939d);
  const base = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.2, 2.5), mat);
  base.position.y = 0.09;
  base.castShadow = true;
  base.receiveShadow = true;

  const slope = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.32, 1.9), mat);
  slope.position.set(0, 0.32, -0.25);
  slope.rotation.x = -Math.PI / 10;
  slope.castShadow = true;

  group.add(base, slope);
  return group;
}

function createCoin(): THREE.Group {
  const group = new THREE.Group();
  const coin = new THREE.Mesh(
    new THREE.TorusGeometry(0.26, 0.09, 12, 20),
    createEmissiveMaterial(0xffd85a, 1.1)
  );
  coin.rotation.x = Math.PI / 2;
  coin.castShadow = false;
  group.add(coin);
  return group;
}

function pickLaneIndex(
  world: World,
  zSpawn: number,
  checkDistance: number,
  avoidLanes: Set<number> = new Set()
): number {
  const laneOccupancy = new Map<number, number>();
  for (let i = 0; i < GAME_CONFIG.lanes; i++) {
    laneOccupancy.set(i, 0);
  }

  for (const obstacle of world.obstacles) {
    if (obstacle.type === "COIN") continue;
    const obstacleZ = obstacle.mesh.position.z;
    if (obstacleZ < zSpawn && obstacleZ > zSpawn - checkDistance) {
      const lane = obstacle.laneIndex;
      laneOccupancy.set(lane, (laneOccupancy.get(lane) || 0) + 1);
    }
  }

  const freeLanes: number[] = [];
  for (let i = 0; i < GAME_CONFIG.lanes; i++) {
    if (laneOccupancy.get(i) === 0 && !avoidLanes.has(i)) {
      freeLanes.push(i);
    }
  }

  if (freeLanes.length > 0) {
    return freeLanes[Math.floor(Math.random() * freeLanes.length)];
  }

  let minOccupancy = Infinity;
  let laneIndex = 0;
  for (let i = 0; i < GAME_CONFIG.lanes; i++) {
    if (avoidLanes.has(i)) continue;
    const occupancy = laneOccupancy.get(i) || 0;
    if (occupancy < minOccupancy) {
      minOccupancy = occupancy;
      laneIndex = i;
    }
  }

  return laneIndex;
}

export function spawnObstacle(world: World, zSpawn: number, lastSpawnedLanes: number[] = []): Obstacle {
  const type: ObstacleType = choice(["CAR", "BARRIER", "CONE"]);
  let mesh: THREE.Group;
  let length = 2;
  let collisionRadius = 2.0;

  if (type === "CAR") {
    mesh = createCar();
    length = 3;
    collisionRadius = 1.8; // Cars are big
  } else if (type === "BARRIER") {
    mesh = createBarrier();
    length = 1.6;
    collisionRadius = 1.4; // Barriers are medium
  } else {
    mesh = createCone();
    length = 0.6;
    collisionRadius = 0.8; // Cones are SMALL - much smaller collision
  }

  const checkDistance = 35;
  const laneIndex = pickLaneIndex(
    world,
    zSpawn,
    checkDistance,
    new Set(lastSpawnedLanes)
  );

  const laneOffset =
    (laneIndex - (GAME_CONFIG.lanes - 1) / 2) * GAME_CONFIG.laneWidth;

  mesh.position.set(laneOffset, 0, zSpawn);
  mesh.traverse((obj) => {
    if ((obj as THREE.Mesh).isMesh) {
      obj.castShadow = true;
      obj.receiveShadow = true;
    }
  });

  world.scene.add(mesh);

  const obstacle: Obstacle = {
    mesh,
    type,
    laneOffset,
    laneIndex,
    length,
    collisionRadius,
    passed: false,
    awarded: false,
  };

  world.obstacles.push(obstacle);
  return obstacle;
}

export function spawnRamp(world: World, zSpawn: number, lastSpawnedLanes: number[] = []): Obstacle {
  const mesh = createRamp();
  const checkDistance = 30;
  const laneIndex = pickLaneIndex(
    world,
    zSpawn,
    checkDistance,
    new Set(lastSpawnedLanes)
  );

  const laneOffset =
    (laneIndex - (GAME_CONFIG.lanes - 1) / 2) * GAME_CONFIG.laneWidth;

  mesh.position.set(laneOffset, 0, zSpawn);
  mesh.traverse((obj) => {
    if ((obj as THREE.Mesh).isMesh) {
      obj.castShadow = true;
      obj.receiveShadow = true;
    }
  });

  world.scene.add(mesh);

  const obstacle: Obstacle = {
    mesh,
    type: "RAMP",
    laneOffset,
    laneIndex,
    length: 2.5,
    collisionRadius: 1.5,
    passed: false,
    awarded: false,
  };

  world.obstacles.push(obstacle);
  return obstacle;
}

export function spawnCoin(world: World, zSpawn: number, laneIndex?: number): Obstacle {
  const mesh = createCoin();
  const lane = typeof laneIndex === "number"
    ? laneIndex
    : pickLaneIndex(world, zSpawn, 20);

  const laneOffset =
    (lane - (GAME_CONFIG.lanes - 1) / 2) * GAME_CONFIG.laneWidth;

  mesh.position.set(laneOffset, 0.6, zSpawn);
  mesh.traverse((obj) => {
    if ((obj as THREE.Mesh).isMesh) {
      obj.castShadow = false;
      obj.receiveShadow = false;
    }
  });

  world.scene.add(mesh);

  const obstacle: Obstacle = {
    mesh,
    type: "COIN",
    laneOffset,
    laneIndex: lane,
    length: 0.2,
    collisionRadius: 0.6,
    passed: false,
    awarded: false,
  };

  world.obstacles.push(obstacle);
  return obstacle;
}
