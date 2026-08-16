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

const PALETTE = {
  sky: 0x9dd9e8,
  haze: 0xb9e1df,
  asphalt: 0x35464a,
  asphaltEdge: 0xe8d8b5,
  lane: 0xfff3cf,
  terracotta: 0xc86143,
  coral: 0xe76f51,
  cream: 0xf1dfbd,
  sand: 0xd5ad78,
  petrol: 0x176b72,
  sage: 0x78956f,
  shutters: 0x315e5d,
  hazardRed: 0xe63b32,
  hazardAmber: 0xffb000,
} as const;

const sharedGeometry = {
  laneDash: new THREE.BoxGeometry(0.09, 0.025, 1.35),
  window: new THREE.BoxGeometry(0.3, 0.42, 0.045),
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
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.08;
  renderer.setClearColor(new THREE.Color(PALETTE.sky));

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
  scene.background = new THREE.Color(PALETTE.sky);
  scene.fog = new THREE.Fog(
    PALETTE.haze,
    GAME_CONFIG.fogNear,
    GAME_CONFIG.fogFar
  );
  return scene;
}

export function addLights(scene: THREE.Scene): void {
  const ambient = new THREE.AmbientLight(0xffead1, 0.72);
  scene.add(ambient);

  const hemi = new THREE.HemisphereLight(
    0xc7f2ff,
    0xb78c62,
    0.88
  );
  scene.add(hemi);

  const dir = new THREE.DirectionalLight(0xffd59a, 2.1);
  dir.position.set(-18, 28, 22);
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
  const bodyMat = createBasicMetal(PALETTE.coral);
  const floorMat = createBasicMetal(0x26383a);

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
  const shirt = createSoftBody(PALETTE.petrol);
  const pants = createSoftBody(0x26383a);
  const helmetMat = createSoftBody(PALETTE.cream);

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
    color: PALETTE.asphalt,
    roughness: 0.94,
    metalness: 0,
  });
  const lineMat = new THREE.MeshStandardMaterial({ color: PALETTE.lane, roughness: 0.82 });
  const curbLightMat = new THREE.MeshStandardMaterial({ color: PALETTE.cream, roughness: 0.9 });
  const curbRedMat = new THREE.MeshStandardMaterial({ color: PALETTE.coral, roughness: 0.9 });
  const walkMat = new THREE.MeshStandardMaterial({ color: PALETTE.asphaltEdge, roughness: 0.98 });

  const width = GAME_CONFIG.laneWidth * GAME_CONFIG.lanes + 3;

  for (
    let z = 0;
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

    // Markings and pavements follow the recycled road tile as children.
    const dashStep = 2.45;
    const dashesPerLane = Math.ceil(GAME_CONFIG.roadSegmentLength / dashStep);
    for (let lane = 1; lane < GAME_CONFIG.lanes; lane++) {
      const x = (lane - GAME_CONFIG.lanes / 2) * GAME_CONFIG.laneWidth;
      const dashes = new THREE.InstancedMesh(sharedGeometry.laneDash, lineMat, dashesPerLane);
      const matrix = new THREE.Matrix4();
      for (let i = 0; i < dashesPerLane; i++) {
        matrix.makeTranslation(x, 0.085, -GAME_CONFIG.roadSegmentLength / 2 + i * dashStep + 0.8);
        dashes.setMatrixAt(i, matrix);
      }
      dashes.instanceMatrix.needsUpdate = true;
      dashes.frustumCulled = false;
      mesh.add(dashes);
    }

    for (const side of [-1, 1]) {
      const pavement = new THREE.Mesh(
        new THREE.BoxGeometry(1.8, 0.28, GAME_CONFIG.roadSegmentLength),
        walkMat
      );
      pavement.position.set(side * (width / 2 + 0.9), 0.16, 0);
      pavement.receiveShadow = true;
      mesh.add(pavement);

      const tileIndex = Math.abs(Math.round(z / GAME_CONFIG.roadSegmentLength));
      const curb = new THREE.Mesh(
        new THREE.BoxGeometry(0.22, 0.16, GAME_CONFIG.roadSegmentLength),
        tileIndex % 2 ? curbRedMat : curbLightMat
      );
      curb.position.set(side * (width / 2 + 0.11), 0.13, 0);
      curb.receiveShadow = true;
      mesh.add(curb);
    }
    scene.add(mesh);
    segments.push(mesh);
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
  const transforms: THREE.Matrix4[] = [];
  for (let r = 0; r < rows; r++) {
    const y = 0.8 + r * (height / rows);
    for (let c = 0; c < cols; c++) {
      const z = zMin + c * ((zMax - zMin) / Math.max(1, cols - 1));
      if (Math.random() < 0.12) continue; // piccoli vuoti casuali
      transforms.push(new THREE.Matrix4().makeTranslation(x, y, z));
    }
  }
  const windows = new THREE.InstancedMesh(sharedGeometry.window, windowMat, transforms.length);
  transforms.forEach((matrix, index) => windows.setMatrixAt(index, matrix));
  windows.instanceMatrix.needsUpdate = true;
  windows.castShadow = false;
  windows.receiveShadow = false;
  parent.add(windows);
}

function createBuildingForSide(side: number, _worldWidth: number): THREE.Group {
  const style = choice<"terracotta" | "cream" | "petrol" | "sand">([
    "terracotta", "terracotta", "cream", "cream", "petrol", "sand",
  ]);
  const group = new THREE.Group();

  const params = {
    terracotta: {
      color: PALETTE.terracotta,
      roughness: 0.94,
      metalness: 0,
      winColor: 0xa9d6d2,
      winEmissive: 0x264a4a,
    },
    cream: {
      color: PALETTE.cream,
      roughness: 0.96,
      metalness: 0,
      winColor: 0x77a7aa,
      winEmissive: 0x254747,
    },
    petrol: {
      color: PALETTE.petrol,
      roughness: 0.9,
      metalness: 0.02,
      winColor: 0xd7e3cf,
      winEmissive: 0x344a41,
    },
    sand: {
      color: PALETTE.sand,
      roughness: 0.96,
      metalness: 0,
      winColor: 0x8ab5b2,
      winEmissive: 0x284a49,
    },
  }[style];

  const w = randRange(3.2, 5.4);
  const h = randRange(5.2, style === "petrol" ? 12.5 : 10.5);
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

  // Sparse balconies create an Italian facade rhythm without visual noise.
  if (Math.random() > 0.45) {
    const accentMat = new THREE.MeshStandardMaterial({
      color: style === "petrol" ? PALETTE.cream : PALETTE.shutters,
      roughness: 0.9,
    });
    const balcony = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.12, d * 0.62), accentMat);
    balcony.position.set(side > 0 ? -w / 2 - 0.08 : w / 2 + 0.08, h * 0.46, 0);
    balcony.castShadow = true;
    group.add(balcony);
  }

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

  if (Math.random() > 0.72) {
    const roof = new THREE.Mesh(
      new THREE.ConeGeometry(Math.max(w, d) * 0.62, 0.9, 4),
      new THREE.MeshStandardMaterial({ color: 0xa94d35, roughness: 1 })
    );
    roof.rotation.y = Math.PI / 4;
    roof.position.y = h + 0.65;
    roof.scale.z = d / w;
    roof.castShadow = true;
    group.add(roof);
  }

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
  const count = 20;
  for (let i = 0; i < count; i++) {
    const z = -i * 20 - 5;
    for (const side of [-1, 1]) {
      const pole = new THREE.Group();
      const poleMat = createBasicMetal(PALETTE.petrol);
      const lampMat = createEmissiveMaterial(0xffdf9a, 1.25);

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
  const bodyColor = choice([PALETTE.coral, PALETTE.petrol, PALETTE.cream, PALETTE.sage]);
  const body = new THREE.Mesh(
    new THREE.BoxGeometry(1.2, 0.35, 2),
    createSoftBody(bodyColor)
  );
  body.position.y = 0.4;
  body.castShadow = true;
  car.add(body);

  const cabin = new THREE.Mesh(
    new THREE.BoxGeometry(0.9, 0.4, 0.8),
    createSoftBody(0x26383a)
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
    createSoftBody(PALETTE.cream)
  );
  base.castShadow = true;
  base.receiveShadow = true;

  const stripes = new THREE.Mesh(
    new THREE.BoxGeometry(1.6, 0.22, 0.42),
    createEmissiveMaterial(PALETTE.hazardRed, 0.45)
  );
  stripes.position.y = 0.16;
  stripes.castShadow = true;

  const beaconMat = createEmissiveMaterial(PALETTE.hazardAmber, 1.2);
  const beaconGeometry = new THREE.SphereGeometry(0.09, 8, 6);
  const leftBeacon = new THREE.Mesh(beaconGeometry, beaconMat);
  leftBeacon.position.set(-0.62, 0.38, 0);
  const rightBeacon = leftBeacon.clone();
  rightBeacon.position.x = 0.62;

  group.add(base, stripes, leftBeacon, rightBeacon);
  return group;
}

function createCone(): THREE.Group {
  const group = new THREE.Group();
  const base = new THREE.Mesh(
    new THREE.CylinderGeometry(0.12, 0.18, 0.06, 16),
    createSoftBody(PALETTE.cream)
  );
  base.position.y = 0.03;
  const cone = new THREE.Mesh(
    new THREE.ConeGeometry(0.16, 0.42, 16),
    createEmissiveMaterial(PALETTE.hazardAmber, 0.25)
  );
  cone.position.y = 0.27;
  cone.castShadow = true;
  base.castShadow = true;
  const collar = new THREE.Mesh(
    new THREE.CylinderGeometry(0.13, 0.15, 0.08, 12),
    createSoftBody(PALETTE.cream)
  );
  collar.position.y = 0.25;
  group.add(base, cone, collar);
  return group;
}

function createRamp(): THREE.Group {
  const group = new THREE.Group();
  const mat = createSoftBody(PALETTE.petrol);
  const base = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.2, 2.5), mat);
  base.position.y = 0.09;
  base.castShadow = true;
  base.receiveShadow = true;

  const slope = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.32, 1.9), mat);
  slope.position.set(0, 0.32, -0.25);
  slope.rotation.x = -Math.PI / 10;
  slope.castShadow = true;

  const arrow = new THREE.Mesh(
    new THREE.BoxGeometry(0.7, 0.035, 0.35),
    createEmissiveMaterial(PALETTE.lane, 0.65)
  );
  arrow.position.set(0, 0.51, -0.45);
  arrow.rotation.x = slope.rotation.x;

  group.add(base, slope, arrow);
  return group;
}

function createCoin(): THREE.Group {
  const group = new THREE.Group();
  const coin = new THREE.Mesh(
    new THREE.TorusGeometry(0.26, 0.09, 12, 20),
    createEmissiveMaterial(0xffcf40, 1.7)
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
