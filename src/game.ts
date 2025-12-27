import * as THREE from "three";
import {
  AudioSystem,
  GAME_CONFIG,
  GameState,
  InputState,
  PlayerData,
  ScoreSystem,
  World,
  PERSISTENCE_KEYS,
} from "./definitions";
import {
  clamp,
  lerp,
  lerpVec3,
  now,
  shakeValue,
} from "./utils";
import {
  createBuildings,
  createCamera,
  createRenderer,
  createRoad,
  createScene,
  createStreetLights,
  createVespaWithRider,
  spawnObstacle,
  spawnRamp,
  spawnCoin,
} from "./entities";
import {
  animateHUDPop,
  flashMessage,
  getUI,
  hideGameOver,
  hideMenu,
  initUI,
  saveHighScoreIfNeeded,
  showGameOver,
  showMenu,
  updateHUD,
} from "./ui";
import { persistence } from "./libs/persistence";

const logDebug = (...args: unknown[]) => {
  if (GAME_CONFIG.debug) console.log(...args);
};

let world: World;
let gameState: GameState = "MENU";
let input: InputState = {
  left: false,
  right: false,
  up: false,
  down: false,
  turbo: false,
};
let scoreSystem: ScoreSystem = {
  score: 0,
  highScore: 0,
  distance: 0,
  coins: 0,
  combo: 1,
  lastComboTime: 0,
};
let audio: AudioSystem = {
  context: null,
  muted: false,
  engineNode: null,
  engineOvertone: null,
  engineGain: null,
  engineFilter: null,
  lastWhooshTime: 0,
};

let lastSpawnZ = -25;
let lastCoinSpawnZ = -25;
let lastRampSpawnZ = -25;
let lastSpawnedLanes: number[] = [];
let lastTime = now();
let turboTimeLeft = 0;
let gameOverCooldown = 0;
let cameraShakeIntensity = 0;
let pendingStart = false;
let startGraceTime = 0;
let hudUpdateTimer = 0;
const HUD_UPDATE_INTERVAL = 1 / 20;
let curveDistance = 0;
let audioInitPromise: Promise<void> | null = null;
const cameraBaseOffset = new THREE.Vector3();
const cameraTargetPos = new THREE.Vector3();
const cameraLookAt = new THREE.Vector3();

function getCurveOffset(): number {
  const straightLen = GAME_CONFIG.curveStraightLength;
  const curveLen = GAME_CONFIG.curveLength;
  const cycleLen = straightLen + curveLen + straightLen;
  const local = curveDistance % cycleLen;
  if (local < straightLen) return 0;
  if (local >= straightLen + curveLen) return 0;
  const curveT = (local - straightLen) / curveLen;
  const direction = Math.floor(curveDistance / cycleLen) % 2 === 0 ? 1 : -1;
  return Math.sin(curveT * Math.PI) * GAME_CONFIG.curveAmplitude * direction;
}

function applyCurveToObject(obj: THREE.Object3D, factor = 1) {
  const baseX = typeof obj.userData.baseX === "number" ? obj.userData.baseX : obj.position.x;
  obj.userData.baseX = baseX;
  obj.position.x = baseX + getCurveOffset() * factor;
}

function isHazard(type: string) {
  return type === "CAR" || type === "BARRIER" || type === "CONE";
}

async function initAudio() {
  const AudioContextCtor =
    (window as any).AudioContext || (window as any).webkitAudioContext;

  if (!AudioContextCtor) {
    console.warn("AudioContext non supportato, avvio senza audio.");
    audio.muted = true;
    return;
  }

  try {
    audio.context = new AudioContextCtor();
  } catch (err) {
    console.warn("Impossibile creare l'audio, il gioco prosegue silenzioso.", err);
    audio.muted = true;
    return;
  }
  const ctx = audio.context;
  if (!ctx) return;

  if (ctx.state === "suspended") {
    try {
      await ctx.resume();
    } catch (err) {
      console.warn("Ripresa dell'audio bloccata, verra disabilitato.", err);
      audio.muted = true;
    }
  }

  const mainOsc = ctx.createOscillator();
  mainOsc.type = "sawtooth";

  const overtone = ctx.createOscillator();
  overtone.type = "triangle";
  overtone.detune.value = -120;

  const lfo = ctx.createOscillator();
  lfo.type = "sine";
  lfo.frequency.value = 8;

  const lfoGain = ctx.createGain();
  lfoGain.gain.value = 0.06;

  const mix = ctx.createGain();
  mix.gain.value = 0.0;

  const filter = ctx.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.value = 320;
  filter.Q.value = 0.9;

  lfo.connect(lfoGain).connect(mix.gain);
  mainOsc.connect(mix);
  overtone.connect(mix);
  mix.connect(filter).connect(ctx.destination);

  mainOsc.start();
  overtone.start();
  lfo.start();

  audio.engineNode = mainOsc;
  audio.engineOvertone = overtone;
  audio.engineGain = mix;
  audio.engineFilter = filter;

  if (audio.muted) {
    mix.gain.value = 0;
  }
}

async function ensureAudioReady() {
  if (audio.context) return;
  if (audioInitPromise) return audioInitPromise;
  audioInitPromise = initAudio();
  try {
    await audioInitPromise;
  } finally {
    audioInitPromise = null;
  }
}

async function resumeAudioContext() {
  if (!audio.context) return;
  if (audio.context.state === "suspended") {
    try {
      await audio.context.resume();
    } catch (err) {
      console.warn("Impossibile riprendere AudioContext, il gioco continua senza audio:", err);
      audio.muted = true;
    }
  }
}

function updateEngineSound(speed: number) {
  if (
    !audio.context ||
    !audio.engineNode ||
    !audio.engineGain ||
    !audio.engineOvertone ||
    !audio.engineFilter
  )
    return;
  if (audio.muted) {
    audio.engineGain.gain.value = 0;
    return;
  }
  const norm = clamp((speed - GAME_CONFIG.minSpeed) / (GAME_CONFIG.maxSpeed - GAME_CONFIG.minSpeed), 0, 1);
  const freq = 120 + norm * 240;
  const rumbleFreq = 70 + norm * 90;
  const vol = 0.09 + norm * 0.11;

  audio.engineNode.frequency.setTargetAtTime(freq, audio.context.currentTime, 0.12);
  audio.engineOvertone.frequency.setTargetAtTime(freq * 0.52, audio.context.currentTime, 0.14);
  audio.engineGain.gain.setTargetAtTime(vol, audio.context.currentTime, 0.16);
  audio.engineFilter.frequency.setTargetAtTime(380 + norm * 320, audio.context.currentTime, 0.18);
  audio.engineFilter.Q.setTargetAtTime(0.9 + norm * 0.6, audio.context.currentTime, 0.16);

  // subtle low rumble to evoke a Vespa single-cylinder beat
  audio.engineOvertone.detune.setTargetAtTime(rumbleFreq * -0.1, audio.context.currentTime, 0.18);
}

function playWhoosh() {
  if (!audio.context || audio.muted) return;
  const t = audio.context.currentTime;
  if (t - audio.lastWhooshTime < 0.3) return;
  audio.lastWhooshTime = t;

  const osc = audio.context.createOscillator();
  const gain = audio.context.createGain();
  osc.type = "square";
  osc.frequency.setValueAtTime(280, t);
  osc.frequency.exponentialRampToValueAtTime(80, t + 0.25);
  gain.gain.setValueAtTime(0.18, t);
  gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.25);
  osc.connect(gain).connect(audio.context.destination);
  osc.start(t);
  osc.stop(t + 0.26);
}

function playCrash() {
  if (!audio.context || audio.muted) return;
  const t = audio.context.currentTime;
  const bufferSize = 2 * audio.context.sampleRate;
  const noiseBuffer = audio.context.createBuffer(1, bufferSize, audio.context.sampleRate);
  const output = noiseBuffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    output[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize);
  }
  const whiteNoise = audio.context.createBufferSource();
  whiteNoise.buffer = noiseBuffer;

  const filter = audio.context.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.setValueAtTime(1200, t);
  filter.frequency.exponentialRampToValueAtTime(90, t + 0.6);

  const gain = audio.context.createGain();
  gain.gain.setValueAtTime(0.6, t);
  gain.gain.exponentialRampToValueAtTime(0.01, t + 0.6);

  whiteNoise.connect(filter).connect(gain).connect(audio.context.destination);
  whiteNoise.start(t);
  whiteNoise.stop(t + 0.7);
}

export async function initGame() {
  logDebug("initGame() - Avvio inizializzazione gioco...");
  const scene = createScene();
  logDebug("initGame() - Scene creata");
  const camera = createCamera();
  logDebug("initGame() - Camera creata");
  const renderer = createRenderer();
  logDebug("initGame() - Renderer creato e aggiunto al DOM");
  const clock = new THREE.Clock();

  addEventListeners();
  logDebug("initGame() - Event listeners aggiunti");

  const cityFogColor = new THREE.Color(GAME_CONFIG.cityFogColor);
  const playerMesh = createVespaWithRider();

  const player: PlayerData = {
    mesh: playerMesh,
    speed: GAME_CONFIG.baseSpeed,
    targetSpeed: GAME_CONFIG.baseSpeed,
    maxSpeed: GAME_CONFIG.maxSpeed,
    minSpeed: GAME_CONFIG.minSpeed,
    lateralSpeed: GAME_CONFIG.lateralSpeed,
    laneWidth: GAME_CONFIG.laneWidth,
    laneX: 0,
    verticalVelocity: 0,
    isJumping: false,
    turboCharge: 0,
    turboActive: false,
  };

  scene.add(player.mesh);

  const roadSegments = createRoad(scene);
  const worldWidth = GAME_CONFIG.laneWidth * GAME_CONFIG.lanes + 3;
  const buildings = createBuildings(scene, worldWidth);
  const streetLights = createStreetLights(scene, worldWidth);
  addLights(scene);

  const vehiclesPool: THREE.Group[] = [];

  world = {
    scene,
    camera,
    renderer,
    clock,
    player,
    obstacles: [],
    roadSegments,
    buildings,
    streetLights,
    vehiclesPool,
    cityFogColor,
  };
  logDebug("initGame() - World inizializzato:", !!world);

  await initUI();
  logDebug("initGame() - UI inizializzata");

  const muteStored = await persistence.getItem(PERSISTENCE_KEYS.MUTE);
  if (muteStored === "1") {
    audio.muted = true;
  }

  // Load high score if available
  const hs = await persistence.getItem(PERSISTENCE_KEYS.HIGH_SCORE);
  if (hs) {
    scoreSystem.highScore = parseFloat(hs);
  }

  // Setup button handlers (solo mute - play/restart gestiti in main.ts)
  const ui = getUI();
  if (ui) {
    ui.muteBtn.textContent = audio.muted ? "??" : "??";
    ui.muteBtn.onclick = async () => {
      audio.muted = !audio.muted;
      ui.muteBtn.textContent = audio.muted ? "??" : "??";
      if (!audio.muted && !audio.context) {
        await ensureAudioReady();
      }
      if (audio.muted) {
        if (audio.engineGain) audio.engineGain.gain.value = 0;
        await persistence.setItem(PERSISTENCE_KEYS.MUTE, "1");
      } else {
        await persistence.setItem(PERSISTENCE_KEYS.MUTE, "0");
      }
    };

    // Mobile hold controls
    bindHoldButton(ui.mobileAccelerate, () => (input.up = true), () => {
      input.up = false;
    });
    bindHoldButton(ui.mobileBrake, () => (input.down = true), () => {
      input.down = false;
    });
  }

  resetGameState();
  showMenu();

  window.addEventListener("resize", onResize);
  onResize();
  logDebug("initGame() - INIZIALIZZAZIONE COMPLETATA! Avvio animate loop...");
  if (pendingStart) {
    logDebug("initGame() - Avvio accodato trovato, faccio partire il gioco");
    pendingStart = false;
    manualStartGame();
  }
  animate();
}

function addLights(scene: THREE.Scene) {
  // delegated to entities.addLights to keep imports consistent
  // But we can't re-import here, so we redefine minimal:
  const ambient = new THREE.AmbientLight(GAME_CONFIG.ambientColor, 0.9);
  scene.add(ambient);

  const hemi = new THREE.HemisphereLight(
    GAME_CONFIG.hemiColorSky,
    GAME_CONFIG.hemiColorGround,
    0.65
  );
  scene.add(hemi);

  const dir = new THREE.DirectionalLight(GAME_CONFIG.sunColor, 1.25);
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

function addEventListeners() {
  window.addEventListener("keydown", (e) => {
    if (e.code === "ArrowLeft" || e.code === "KeyA") input.left = true;
    if (e.code === "ArrowRight" || e.code === "KeyD") input.right = true;
    if (e.code === "ArrowUp" || e.code === "KeyW") input.up = true;
    if (e.code === "ArrowDown" || e.code === "KeyS") input.down = true;
    if (e.code === "Space") {
      input.turbo = true;
      if (gameState === "MENU") {
        startRun().catch((err) => console.error("Errore avvio gioco:", err));
      } else if (gameState === "GAME_OVER" && gameOverCooldown <= 0) {
        restart().catch((err) => console.error("Errore riavvio gioco:", err));
      }
    }
    if (e.code === "Enter" && gameState === "MENU") {
      startRun().catch((err) => console.error("Errore avvio gioco:", err));
    }
  });

  window.addEventListener("keyup", (e) => {
    if (e.code === "ArrowLeft" || e.code === "KeyA") input.left = false;
    if (e.code === "ArrowRight" || e.code === "KeyD") input.right = false;
    if (e.code === "ArrowUp" || e.code === "KeyW") input.up = false;
    if (e.code === "ArrowDown" || e.code === "KeyS") input.down = false;
    if (e.code === "Space") input.turbo = false;
  });

  // Mouse / touch steering
  window.addEventListener("mousemove", (e) => {
    if (!world || gameState !== "RUNNING") return;
    const xNorm = (e.clientX / window.innerWidth) * 2 - 1;
    world.player.laneX = THREE.MathUtils.lerp(
      world.player.laneX,
      xNorm * (GAME_CONFIG.laneWidth),
      0.06
    );
  });

  window.addEventListener("touchmove", (e) => {
    if (!world || gameState !== "RUNNING") return;
    const touch = e.touches[0];
    const xNorm = (touch.clientX / window.innerWidth) * 2 - 1;
    world.player.laneX = THREE.MathUtils.lerp(
      world.player.laneX,
      xNorm * (GAME_CONFIG.laneWidth),
      0.12
    );
  });

}

function resetGameState() {
  // Reset punteggi
  scoreSystem.score = 0;
  scoreSystem.distance = 0;
  scoreSystem.coins = 0;
  scoreSystem.combo = 1;
  scoreSystem.lastComboTime = now();

  // Reset stato gioco
  turboTimeLeft = 0;
  cameraShakeIntensity = 0;
  gameOverCooldown = 0;
  startGraceTime = 2.5; // secondi di strada libera all'avvio
  hudUpdateTimer = 0;
  curveDistance = 0;

  // Reset input
  input.left = false;
  input.right = false;
  input.up = false;
  input.down = false;
  input.turbo = false;

  if (!world) return;

  // Rimuovi TUTTI gli ostacoli
  for (let i = world.obstacles.length - 1; i >= 0; i--) {
    world.scene.remove(world.obstacles[i].mesh);
  }
  world.obstacles.length = 0;

  // Reset player
  world.player.speed = GAME_CONFIG.baseSpeed;
  world.player.targetSpeed = GAME_CONFIG.baseSpeed;
  world.player.turboCharge = 0;
  world.player.turboActive = false;
  world.player.laneX = 0;
  world.player.isJumping = false;
  world.player.verticalVelocity = 0;
  world.player.mesh.position.set(0, 0, -5);
  world.player.mesh.rotation.set(0, 0, 0);

  // Reset spawn - metti lontano per evitare collisioni immediate
  lastSpawnZ = -50;
  lastCoinSpawnZ = -50;
  lastRampSpawnZ = -50;
  lastSpawnedLanes = [];
  lastTime = now();
}

async function startRun() {
  if (!world) return;

  // Resetta completamente lo stato PRIMA di tutto
  resetGameState();

  // Nascondi UI
  hideMenu();
  hideGameOver();

  // Avvia il gioco immediatamente
  gameState = "RUNNING";
  lastTime = now();
  flashMessage("Vai! Evita auto e ostacoli - Carica il turbo", 1.8);

  // Audio in background senza bloccare
  ensureAudioReady().catch(() => {});
  resumeAudioContext().catch(() => {});
}

// Flag per evitare chiamate multiple
let isStartingGame = false;

// Funzione esportata per avvio manuale da main.ts
export function manualStartGame() {
  if (!world) {
    pendingStart = true;
    logDebug("manualStartGame() chiamato ma world non e pronto, accodo start.");
    return;
  }
  if (isStartingGame) return;
  pendingStart = false;

  if (gameState === "MENU" || gameState === "GAME_OVER") {
    isStartingGame = true;

    // Reset sincrono senza async
    resetGameState();
    hideMenu();
    hideGameOver();
    gameState = "RUNNING";
    lastTime = now();
    flashMessage("Vai! Evita auto e ostacoli - Carica il turbo", 1.8);

    // Audio non bloccante
    ensureAudioReady().catch(() => {});
    resumeAudioContext().catch(() => {});

    isStartingGame = false;
  }
}

async function restart() {
  await startRun();
}

function bindHoldButton(
  button: HTMLButtonElement,
  onPress: () => void,
  onRelease: () => void
) {
  const handlePress = (e: Event) => {
    e.preventDefault();
    e.stopPropagation();

    // Feedback visivo
    button.style.transform = 'scale(0.95)';
    button.style.background = 'rgba(100, 200, 255, 0.9)';

    // Se il gioco e in pausa/menu, avvialo subito al primo tap sui controlli mobili
    if (gameState !== "RUNNING") {
      manualStartGame();
    }

    onPress();
  };

  const handleRelease = (e: Event) => {
    e.preventDefault();
    e.stopPropagation();

    // Rimuovi feedback visivo
    button.style.transform = 'scale(1)';
    button.style.background = 'rgba(255, 255, 255, 0.92)';

    onRelease();
  };

  // Usa sia touch che pointer events per massima compatibilita
  button.addEventListener("touchstart", handlePress, { passive: false, capture: true });
  button.addEventListener("touchend", handleRelease, { passive: false, capture: true });
  button.addEventListener("touchcancel", handleRelease, { passive: false, capture: true });

  button.addEventListener("pointerdown", handlePress);
  button.addEventListener("pointerup", handleRelease);
  button.addEventListener("pointercancel", handleRelease);
  button.addEventListener("pointerleave", handleRelease);

  // Fallback per mouse
  button.addEventListener("mousedown", handlePress);
  button.addEventListener("mouseup", handleRelease);
}

function onResize() {
  if (!world) return;
  const { camera, renderer } = world;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);
  if (!world) return;

  const t = now();
  const dt = Math.min(0.05, t - lastTime);
  lastTime = t;
  if (startGraceTime > 0 && gameState === "RUNNING") {
    startGraceTime = Math.max(0, startGraceTime - dt);
  }

  if (gameState === "RUNNING") {
    updatePlayer(dt);
    updateObstacles(dt);
    updateScore(dt);
    checkCollisions();
  } else if (gameState === "GAME_OVER") {
    if (gameOverCooldown > 0) gameOverCooldown -= dt;
  }

  updateCamera(dt);
  world.renderer.render(world.scene, world.camera);
}

function updatePlayer(dt: number) {
  const p = world.player;

  // Speed control
  if (input.up) {
    p.targetSpeed += 18 * dt;
  }
  if (input.down) {
    p.targetSpeed -= 26 * dt;
  }
  p.targetSpeed = clamp(p.targetSpeed, p.minSpeed, p.maxSpeed);

  // Turbo activation
  if (input.turbo && !p.turboActive && p.turboCharge >= 0.999) {
    p.turboActive = true;
    turboTimeLeft = GAME_CONFIG.turboDuration;
    p.turboCharge = 0;
    p.targetSpeed = clamp(
      p.targetSpeed + GAME_CONFIG.turboBoost,
      p.minSpeed,
      p.maxSpeed + GAME_CONFIG.turboBoost
    );
    cameraShakeIntensity = 0.6;
    playWhoosh();
    flashMessage("TURBO!", 0.5);
    const ui = getUI();
    if (ui) animateHUDPop(ui.score);
  }

  if (p.turboActive) {
    turboTimeLeft -= dt;
    if (turboTimeLeft <= 0) {
      p.turboActive = false;
      p.targetSpeed = clamp(p.targetSpeed, p.minSpeed, p.maxSpeed);
    }
  } else {
    // recharge
    p.turboCharge = clamp(
      p.turboCharge + GAME_CONFIG.turboRechargeRate * dt,
      0,
      1
    );
  }

  p.speed = lerp(p.speed, p.targetSpeed, 0.9 * dt);

  // Jump physics
  if (p.isJumping) {
    p.verticalVelocity -= GAME_CONFIG.gravity * dt;
    p.mesh.position.y += p.verticalVelocity * dt;
    if (p.mesh.position.y <= 0) {
      p.mesh.position.y = 0;
      p.verticalVelocity = 0;
      p.isJumping = false;
    }
  }

  // Lateral movement
  let lateral = 0;
  if (input.left) lateral -= 1;
  if (input.right) lateral += 1;

  const maxX =
    ((GAME_CONFIG.lanes - 1) / 2) * GAME_CONFIG.laneWidth + 0.4;
  p.laneX += lateral * p.lateralSpeed * dt;
  p.laneX = clamp(p.laneX, -maxX, maxX);
  p.mesh.position.x = p.laneX + getCurveOffset();

  // Lean effect
  const targetRotZ = -lateral * 0.25;
  p.mesh.rotation.z = lerp(p.mesh.rotation.z, targetRotZ, 10 * dt);

  // Slight forward tilt with speed
  const targetRotX = -0.05 - (p.speed - GAME_CONFIG.baseSpeed) * 0.002;
  p.mesh.rotation.x = lerp(p.mesh.rotation.x, targetRotX, 2 * dt);

  updateEngineSound(p.speed);
  hudUpdateTimer += dt;
  if (hudUpdateTimer >= HUD_UPDATE_INTERVAL) {
    hudUpdateTimer = 0;
    const ui = getUI();
    if (ui) updateHUD(scoreSystem, p.speed, p.turboCharge);
  }
}

function updateObstacles(dt: number) {
  const p = world.player;
  const cameraZ = world.player.mesh.position.z + 4;

  // Move world backwards based on speed.
  const dz = p.speed * dt;

  // Road + decor scroll
  world.roadSegments.forEach((seg) => {
    seg.position.z += dz;
    if (seg.position.z > 10) {
      seg.position.z -= GAME_CONFIG.roadLength;
    }
  });
  world.buildings.forEach((b) => {
    b.position.z += dz * 0.96;
    if (b.position.z > 5) {
      b.position.z -= 200;
    }
  });
  world.streetLights.forEach((l) => {
    l.position.z += dz * 0.98;
    if (l.position.z > 5) {
      l.position.z -= 400;
    }
  });

  curveDistance += dz * GAME_CONFIG.curveSpeed;
  world.roadSegments.forEach((seg) => applyCurveToObject(seg, 1));
  world.buildings.forEach((b) => applyCurveToObject(b, 0.7));
  world.streetLights.forEach((l) => applyCurveToObject(l, 0.9));

  // Spawn new obstacles ahead of player
  // IMPORTANT: Limit max obstacles on screen to ensure playability
  const MAX_HAZARDS = 4; // Only allow 4 hazards at a time
  const MAX_RAMPS = 3;
  const MAX_COINS = 30;
  let hazardCount = 0;
  let rampCount = 0;
  let coinCount = 0;
  for (const o of world.obstacles) {
    if (isHazard(o.type)) {
      hazardCount++;
    } else if (o.type === "RAMP") {
      rampCount++;
    } else if (o.type === "COIN") {
      coinCount++;
    }
  }

  const forwardZ = cameraZ - GAME_CONFIG.spawnDistanceMax;
  if (startGraceTime <= 0 && lastSpawnZ > forwardZ && hazardCount < MAX_HAZARDS) {
    const spawnZ =
      cameraZ -
      (GAME_CONFIG.spawnDistanceMin +
        Math.random() *
          (GAME_CONFIG.spawnDistanceMax -
            GAME_CONFIG.spawnDistanceMin));
    lastSpawnZ = spawnZ;

    const spawnedObstacle = spawnObstacle(world, spawnZ, lastSpawnedLanes);

    // Track last 3 spawned lanes to ensure variety
    lastSpawnedLanes.push(spawnedObstacle.laneIndex);
    if (lastSpawnedLanes.length > 2) {
      lastSpawnedLanes.shift();
    }
  }

  const rampForwardZ = cameraZ - GAME_CONFIG.rampSpawnDistanceMax;
  if (startGraceTime <= 0 && rampCount < MAX_RAMPS && lastRampSpawnZ > rampForwardZ) {
    const rampZ =
      cameraZ -
      (GAME_CONFIG.rampSpawnDistanceMin +
        Math.random() *
          (GAME_CONFIG.rampSpawnDistanceMax -
            GAME_CONFIG.rampSpawnDistanceMin));
    lastRampSpawnZ = rampZ;
    if (Math.random() < GAME_CONFIG.rampSpawnChance) {
      spawnRamp(world, rampZ, lastSpawnedLanes);
    }
  }

  const coinForwardZ = cameraZ - GAME_CONFIG.coinSpawnDistanceMax;
  if (coinCount < MAX_COINS && lastCoinSpawnZ > coinForwardZ) {
    const coinZ =
      cameraZ -
      (GAME_CONFIG.coinSpawnDistanceMin +
        Math.random() *
          (GAME_CONFIG.coinSpawnDistanceMax -
            GAME_CONFIG.coinSpawnDistanceMin));
    lastCoinSpawnZ = coinZ;
    const laneIndex = Math.floor(Math.random() * GAME_CONFIG.lanes);
    spawnCoin(world, coinZ, laneIndex);
    spawnCoin(world, coinZ - 1.6, laneIndex);
    spawnCoin(world, coinZ - 3.2, laneIndex);
    spawnCoin(world, coinZ - 4.8, laneIndex);
  }

  // Move cars slightly or keep static; cleanup passed obstacles
  for (let i = world.obstacles.length - 1; i >= 0; i--) {
    const o = world.obstacles[i];
    o.mesh.position.z += dz;
    o.mesh.position.x = o.laneOffset + getCurveOffset();

    if (o.type === "COIN") {
      o.mesh.rotation.y += dt * 3;
      o.mesh.position.y = 0.6 + Math.sin((now() + o.mesh.position.z) * 2) * 0.08;
    }

    // More aggressive cleanup - remove obstacles that are behind the player
    if (o.mesh.position.z > p.mesh.position.z + 10) {
      world.scene.remove(o.mesh);
      world.obstacles.splice(i, 1);
      continue;
    }

    // Mark as "passed" for scoring
    if (!o.passed && o.mesh.position.z > p.mesh.position.z) {
      o.passed = true;
      if (isHazard(o.type)) {
        scoreSystem.distance += 1;
        scoreSystem.combo = clamp(scoreSystem.combo + 0.1, 1, 5);
        scoreSystem.lastComboTime = now();
        const ui = getUI();
        if (ui) animateHUDPop(ui.streak, 0.16, 1.15);
      }
    }
  }
}

function updateScore(dt: number) {
  scoreSystem.distance += world.player.speed * dt * 0.02;
  scoreSystem.score +=
    (world.player.speed * 0.35 + scoreSystem.combo * 4) * dt;

  // Combo decay over time if nothing new happens
  if (now() - scoreSystem.lastComboTime > GAME_CONFIG.comboTimeout) {
    scoreSystem.combo = lerp(scoreSystem.combo, 1, 0.6 * dt);
  }
}

function awardCoin() {
  scoreSystem.coins += 1;
  scoreSystem.score += GAME_CONFIG.coinValue;
  scoreSystem.combo = clamp(scoreSystem.combo + 0.15, 1, 6);
  scoreSystem.lastComboTime = now();
  const ui = getUI();
  if (ui) animateHUDPop(ui.score, 0.12, 1.1);
}

function triggerJump() {
  const p = world.player;
  if (p.isJumping) return;
  p.isJumping = true;
  p.verticalVelocity = GAME_CONFIG.jumpVelocity;
  cameraShakeIntensity = Math.max(cameraShakeIntensity, 0.4);
  playWhoosh();
  flashMessage("SALTO!", 0.6);
}

function checkCollisions() {
  if (startGraceTime > 0) return;

  const p = world.player;
  const px = p.mesh.position.x;
  const pz = p.mesh.position.z;
  const py = p.mesh.position.y;

  for (let i = world.obstacles.length - 1; i >= 0; i--) {
    const o = world.obstacles[i];
    const oz = o.mesh.position.z;
    const relZ = oz - pz;

    // Use the obstacle's specific collision radius
    const radius = o.collisionRadius;

    // Only check obstacles that are close in Z axis
    if (Math.abs(relZ) > radius * 2.5) continue;

    const ox = o.mesh.position.x;
    const dx = px - ox;
    const dz = pz - oz;
    const distSq = dx * dx + dz * dz;

    if (distSq < radius * radius) {
      if (o.type === "COIN") {
        if (!o.awarded) {
          o.awarded = true;
          awardCoin();
        }
        world.scene.remove(o.mesh);
        world.obstacles.splice(i, 1);
        continue;
      }

      if (o.type === "RAMP") {
        world.scene.remove(o.mesh);
        world.obstacles.splice(i, 1);
        triggerJump();
        continue;
      }

      if (py > GAME_CONFIG.jumpSafeHeight) {
        continue;
      }

      triggerGameOver();
      return;
    }
  }
}

async function triggerGameOver() {
  if (gameState !== "RUNNING") return;
  gameState = "GAME_OVER";
  gameOverCooldown = 0.5;
  cameraShakeIntensity = 1.2;

  playCrash();

  const final = scoreSystem.score;
  const best = await saveHighScoreIfNeeded(final);
  scoreSystem.highScore = Math.max(best, final);

  const ui = getUI();
  if (ui) {
    setTimeout(() => {
      showGameOver(scoreSystem);
    }, 400);
  }
}

function updateCamera(dt: number) {
  const p = world.player;
  const cam = world.camera;
  cameraBaseOffset.copy(GAME_CONFIG.cameraBaseOffset);

  const speedFactor = clamp(
    (p.speed - GAME_CONFIG.baseSpeed) /
      (GAME_CONFIG.maxSpeed + GAME_CONFIG.turboBoost - GAME_CONFIG.baseSpeed),
    0,
    1
  );

  // dynamic camera distance
  cameraBaseOffset.z = 8.2 + speedFactor * 3.5;
  cameraBaseOffset.y = 3.4 + speedFactor * 0.9;

  cameraTargetPos.set(
    p.mesh.position.x * 0.35,
    p.mesh.position.y + cameraBaseOffset.y,
    p.mesh.position.z + cameraBaseOffset.z
  );

  // camera shake
  if (cameraShakeIntensity > 0) {
    const t = now() * 8;
    cameraTargetPos.x += shakeValue(t, 0.25 * cameraShakeIntensity);
    cameraTargetPos.y += shakeValue(t + 10, 0.18 * cameraShakeIntensity);
    cameraShakeIntensity = Math.max(
      0,
      cameraShakeIntensity - dt * 2.3
    );
  }

  lerpVec3(cam.position, cameraTargetPos, 5 * dt);

  cameraLookAt.set(
    p.mesh.position.x,
    p.mesh.position.y + 1.5,
    p.mesh.position.z - 6
  );
  cam.lookAt(cameraLookAt);
}
