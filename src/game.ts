import * as THREE from "three";
import { setupAtmosphere, updateAtmosphere } from "./visuals/atmosphere";
import { setEngineGate } from "./core/engine-gate";
import { AudioRecovery } from "./core/audio-recovery";
import { BackgroundMusic } from "./audio/music";
import { RaceProgress, RACE_DISTANCE, BEST_LAP_KEY, parseBestLap } from "./core/race";
import { projectRoadPoint, sampleRoad, streetLayout, setRoadRoute, isFlorence } from "./core/road-path";
import { FLORENCE_LENGTH, florenceStreet } from "./core/florence";
import { TrafficRules } from "./core/traffic-rules";
import { TrafficCrossings } from "./visuals/traffic-crossings";
import { resolveCircuitPosition } from "./core/circuit";
import { CircuitRenderer } from "./visuals/circuit-renderer";
import { enhancePlayerModel } from "./visuals/player-model";
import { SCOOTER_COLORS, setScooterColor, type ScooterColor } from "./visuals/classic-scooter";
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
  createCamera,
  createRenderer,
  createScene,
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
import { createRunModel, GameStateMachine, getDifficultyProfile } from "./core";
import type { RunSnapshot } from "./core";

const logDebug = (...args: unknown[]) => {
  if (GAME_CONFIG.debug) console.log(...args);
};

let world: World;
const gameStateMachine = new GameStateMachine();
let gameState: GameState = gameStateMachine.state;
gameStateMachine.subscribe(({ to }) => {
  gameState = to;
});
let input: InputState = {
  left: false,
  right: false,
  up: false,
  down: false,
  turbo: false,
};
let scoreSystem: ScoreSystem = {
  raceDistance: RACE_DISTANCE,
  elapsedSeconds: 0,
  lapCompleted: false,
  bestLapSeconds: null,
  newBestLap: false,
  score: 0,
  highScore: 0,
  distance: 0,
  coins: 0,
  nearMisses: 0,
  combo: 1,
  bestCombo: 1,
  missionCompleted: false,
  lastComboTime: 0,
};
const runModel = createRunModel(
  { id: "lungomare-750", targetDistance: 750 },
  {
    distanceScoreFactor: 0.7,
    coinValue: GAME_CONFIG.coinValue,
    nearMissValue: 75,
    comboStep: 0.15,
    maxCombo: 6,
    comboWindowSeconds: GAME_CONFIG.comboTimeout,
  }
);
let audio: AudioSystem = {
  context: null,
  muted: false,
  engineNode: null,
  engineOvertone: null,
  engineGain: null,
  engineOutputGain: null,
  engineFilter: null,
  lastWhooshTime: 0,
};

let hazardSpawnDistanceLeft = 0;
let coinSpawnDistanceLeft = 0;
let rampSpawnDistanceLeft = 0;
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
let race = new RaceProgress();
const trafficRules = new TrafficRules();
let crossingVisuals: TrafficCrossings;
let bestLapKey = BEST_LAP_KEY;
let highScoreKey = PERSISTENCE_KEYS.HIGH_SCORE;
let resultTimer: ReturnType<typeof setTimeout> | undefined;
let circuitRenderer: CircuitRenderer;
let districtId = "";
const audioRecovery = new AudioRecovery();
let backgroundMusic: BackgroundMusic | null = null;
let musicEnabled = true;
let audioStarted = false;
let documentPaused = document.hidden;
let engineAudible = false;
function silenceEngine() {
  if (audio.context && audio.engineOutputGain) {
    setEngineGate(audio.engineOutputGain.gain, audio.context.currentTime, false);
  }
  engineAudible = false;
}
const cameraBaseOffset = new THREE.Vector3();
const cameraTargetPos = new THREE.Vector3();
const cameraLookAt = new THREE.Vector3();

function trackZ(obstacle: World["obstacles"][number]) {
  return obstacle.mesh.userData.trackZ as number;
}

function isHazard(type: string) {
  return type === "CAR" || type === "BARRIER" || type === "CONE";
}

function randomBetween(min: number, max: number): number {
  return min + Math.random() * (max - min);
}

const TRAFFIC_WHEEL_RADIUS = 0.22;

/**
 * Cars are road users, not parked props: they keep travelling forward while
 * the player's faster Vespa gains on them. The effective speed is capped from
 * the current player speed so an overtake always remains readable, even when
 * the player brakes. Visual suspension is deliberately tiny and never moves
 * the collision centre or changes lane.
 */
function updateTrafficCar(car: THREE.Group, playerSpeed: number, dt: number): number {
  const preferredSpeed =
    typeof car.userData.trafficCruiseSpeed === "number"
      ? car.userData.trafficCruiseSpeed
      : 10;
  const trafficSpeed = Math.min(preferredSpeed, Math.max(2.5, playerSpeed * 0.72));
  const phase =
    (typeof car.userData.motionPhase === "number" ? car.userData.motionPhase : 0) +
    dt * (3.2 + trafficSpeed * 0.08);
  car.userData.motionPhase = phase;

  const wheelSpin = (trafficSpeed / TRAFFIC_WHEEL_RADIUS) * dt;
  const wheels = car.userData.wheels as THREE.Object3D[] | undefined;
  wheels?.forEach((wheel) => {
    // Cylinder axle is its local Y axis before the 90 degree alignment.
    wheel.rotateY(wheelSpin);
  });

  car.position.y = Math.sin(phase * 2) * 0.012;
  car.rotation.x = Math.sin(phase) * 0.007;
  car.rotation.z = Math.sin(phase * 0.7) * 0.012;
  return trafficSpeed;
}

function occupiedHazardLanesAt(z: number, segmentLength = 16): Set<number> {
  const lanes = new Set<number>();
  for (const obstacle of world.obstacles) {
    if (isHazard(obstacle.type) && Math.abs(trackZ(obstacle) - z) <= segmentLength / 2) {
      lanes.add(obstacle.laneIndex);
    }
  }
  return lanes;
}

function pickReadableCoinLane(z: number): number {
  const blocked = occupiedHazardLanesAt(z, 20);
  const openLanes: number[] = [];
  const allowedLanes = streetLayout(curveDistance - 5 - z).lanes;
  for (const lane of allowedLanes) {
    if (!blocked.has(lane)) openLanes.push(lane);
  }
  const candidates = openLanes.length > 0 ? openLanes : allowedLanes;
  return candidates[Math.floor(Math.random() * candidates.length)];
}

function syncRunSnapshot(snapshot: RunSnapshot) {
  scoreSystem.score = snapshot.score;
  scoreSystem.distance = snapshot.distance;
  scoreSystem.coins = snapshot.coins;
  scoreSystem.nearMisses = snapshot.nearMisses;
  scoreSystem.combo = snapshot.combo;
  scoreSystem.bestCombo = snapshot.maxCombo;
  scoreSystem.missionCompleted = snapshot.mission?.completed ?? false;
  scoreSystem.lastComboTime = now();
}

function initAudio() {
  const AudioContextCtor =
    (window as any).AudioContext || (window as any).webkitAudioContext;

  if (!AudioContextCtor) {
    console.warn("AudioContext non supportato, avvio senza audio.");
    return;
  }

  try {
    audio.context = new AudioContextCtor();
  } catch (err) {
    console.warn("Impossibile creare l'audio, il gioco prosegue silenzioso.", err);
    return;
  }
  const ctx = audio.context;
  if (!ctx) return;

  const mainOsc = ctx.createOscillator();
  mainOsc.type = "sawtooth";

  const overtone = ctx.createOscillator();
  overtone.type = "triangle";
  overtone.detune.value = -120;

  const lfo = ctx.createOscillator();
  lfo.type = "sine";
  lfo.frequency.value = 22;

  const lfoGain = ctx.createGain();
  lfoGain.gain.value = 0.025;

  const mix = ctx.createGain();
  mix.gain.value = 0.11;

  const filter = ctx.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.value = 320;
  filter.Q.value = 0.9;

  lfo.connect(lfoGain).connect(mix.gain);
  mainOsc.connect(mix);
  overtone.connect(mix);
  const output = ctx.createGain();
  output.gain.value = 0;
  mix.connect(filter).connect(output).connect(ctx.destination);
  audio.engineOutputGain = output;

  mainOsc.start();
  overtone.start();
  lfo.start();

  audio.engineNode = mainOsc;
  audio.engineOvertone = overtone;
  audio.engineGain = mix;
  audio.engineFilter = filter;
  engineAudible = false;
  backgroundMusic?.dispose();
  backgroundMusic = new BackgroundMusic(ctx);
  ctx.onstatechange = () => {
    if (ctx !== audio.context) return;
    if (ctx.state !== "running") silenceEngine();
    else {
      if (world) updateEngineSound(world.player.speed);
      syncMusic();
    }
  };

  if (audio.muted) {
    mix.gain.value = 0;
  }
}

function syncMusic() {
  backgroundMusic?.sync(audioStarted && musicEnabled && !audio.muted && !documentPaused);
}

function activateAudio() {
  if (audio.muted || documentPaused) return;
  audioStarted = true;
  if (!audio.context || audio.context.state === "closed") initAudio();
  const context = audio.context;
  if (!context) return;
  void audioRecovery.resume(context, true).then(running => {
    if (running && context === audio.context && world) updateEngineSound(world.player.speed);
  });
  syncMusic();
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
  if (audio.muted || gameState !== "RUNNING" || documentPaused || audio.context.state !== "running") {
    silenceEngine();
    return;
  }
  if (audio.engineOutputGain && !engineAudible) {
    setEngineGate(audio.engineOutputGain.gain, audio.context.currentTime, true);
    engineAudible = true;
  }
  const norm = clamp((speed - GAME_CONFIG.minSpeed) / (GAME_CONFIG.maxSpeed - GAME_CONFIG.minSpeed), 0, 1);
  const freq = 85 + norm * 150;
  const rumbleFreq = 70 + norm * 90;
  const vol = 0.11 + norm * 0.07;

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
  await enhancePlayerModel(playerMesh);
  let selectedColor: ScooterColor = "red";
  try {
    const stored = localStorage.getItem("vespa_body_color");
    if (stored && stored in SCOOTER_COLORS) selectedColor = stored as ScooterColor;
  } catch { /* Private browsing may disable persistence. */ }
  setScooterColor(playerMesh, selectedColor);
  document.querySelectorAll<HTMLInputElement>('input[name="scooter-color"]').forEach(radio => {
    radio.checked = radio.value === selectedColor;
    radio.addEventListener("change", () => {
      if (!(radio.value in SCOOTER_COLORS)) return;
      setScooterColor(playerMesh, radio.value as ScooterColor);
      try { localStorage.setItem("vespa_body_color", radio.value); } catch { /* Keep selection for this session. */ }
    });
  });

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

  const roadSegments: THREE.Mesh[] = [];
  const buildings: THREE.Group[] = [];
  const streetLights: THREE.Group[] = [];
  circuitRenderer = new CircuitRenderer(scene);
  crossingVisuals = new TrafficCrossings(scene);
  setupAtmosphere(scene, renderer);

  const vehiclesPool: THREE.Group[] = [];

  world = {
    trackDistance: 0,
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
  try { musicEnabled = localStorage.getItem("vespa_music_enabled") !== "0"; } catch { /* Default on. */ }
  const musicToggle = document.getElementById("music-enabled") as HTMLInputElement;
  musicToggle.checked = musicEnabled;
  const musicButton = document.getElementById("music-btn") as HTMLButtonElement;
  const updateMusicControls = () => {
    musicToggle.checked = musicEnabled;
    musicButton.setAttribute("aria-pressed", String(musicEnabled));
    musicButton.setAttribute("aria-label", musicEnabled ? "Disattiva musica" : "Attiva musica");
  };
  const setMusicEnabled = (enabled: boolean) => {
    musicEnabled = enabled;
    try { localStorage.setItem("vespa_music_enabled", enabled ? "1" : "0"); } catch { /* Keep session setting. */ }
    updateMusicControls();
    if (enabled) activateAudio(); else syncMusic();
  };
  musicToggle.addEventListener("change", () => setMusicEnabled(musicToggle.checked));
  musicButton.addEventListener("click", () => setMusicEnabled(!musicEnabled));
  updateMusicControls();
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
    document.getElementById("menu-return-btn")?.addEventListener("click", () => {
      if (gameState === "RUNNING") return;
      clearTimeout(resultTimer);
      gameStateMachine.dispatch("RETURN_TO_MENU");
      resetGameState();
      showMenu();
    });
    ui.muteBtn.setAttribute("aria-pressed", audio.muted ? "true" : "false");
    ui.muteBtn.setAttribute("aria-label", audio.muted ? "Attiva audio" : "Disattiva audio");
    ui.muteBtn.onclick = async () => {
      audio.muted = !audio.muted;
      ui.muteBtn.setAttribute("aria-pressed", audio.muted ? "true" : "false");
      ui.muteBtn.setAttribute("aria-label", audio.muted ? "Attiva audio" : "Disattiva audio");
      if (!audio.muted) activateAudio();
      if (audio.muted) {
        silenceEngine();
        syncMusic();
        await persistence.setItem(PERSISTENCE_KEYS.MUTE, "1").catch(() => {});
      } else {
        await persistence.setItem(PERSISTENCE_KEYS.MUTE, "0").catch(() => {});
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

  const routeSelect=document.getElementById("route-select") as HTMLSelectElement;
  const updateRouteCopy=()=>{
    const florence=routeSelect.value==="florence";
    const summary=document.getElementById("route-summary");
    if(summary)summary.textContent=florence?"Firenze · 2003 m":"Un giro · 1800 m";
    const description=document.getElementById("route-description");
    if(description)description.textContent=florence?"Dal Duomo all'Arno, con fermate e attraversamenti.":"Quattro quartieri, un traguardo. Batti il tuo tempo!";
    document.querySelector<HTMLElement>(".route-note")!.hidden=!florence;
  };
  routeSelect.addEventListener("change",()=>{updateRouteCopy();if(gameState==="MENU")resetGameState();});
  updateRouteCopy();

  window.addEventListener("resize", onResize);
  document.addEventListener("visibilitychange", () => {
    documentPaused = document.hidden;
    if (documentPaused) { silenceEngine(); clearInput(); }
    syncMusic();
    lastTime = now();
    if (!documentPaused && audioStarted) activateAudio();
    if (!documentPaused && gameState === "RUNNING") {
      flashMessage("Bentornato — riprendi la corsa", 1.1);
    }
  });
  // Mobile audio can be interrupted by calls, screen lock or another app.
  const recoverOnGesture = () => { if (audioStarted || gameState === "RUNNING") activateAudio(); };
  window.addEventListener("pointerdown", recoverOnGesture, {passive:true});
  window.addEventListener("touchend", recoverOnGesture, {passive:true});
  window.addEventListener("keydown", recoverOnGesture);
  window.addEventListener("pageshow", () => {
    documentPaused = document.hidden;
    if (audioStarted) activateAudio();
  });
  onResize();
  logDebug("initGame() - INIZIALIZZAZIONE COMPLETATA! Avvio animate loop...");
  if (pendingStart) {
    logDebug("initGame() - Avvio accodato trovato, faccio partire il gioco");
    pendingStart = false;
    manualStartGame();
  }
  animate();
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
      } else if ((gameState === "GAME_OVER" || gameState === "FINISHED") && gameOverCooldown <= 0) {
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
    if ((e as MouseEvent & {sourceCapabilities?: {firesTouchEvents?: boolean}}).sourceCapabilities?.firesTouchEvents) return;
    if ((e.target as Element)?.closest?.("button, #mobile-controls")) return;
    const xNorm = (e.clientX / window.innerWidth) * 2 - 1;
    world.player.laneX = THREE.MathUtils.lerp(
      world.player.laneX,
      xNorm * (GAME_CONFIG.laneWidth),
      0.06
    );
  });

  window.addEventListener("touchmove", (e) => {
    if (!world || gameState !== "RUNNING") return;
    const touch = Array.from(e.touches).find(t => !(t.target as Element)?.closest?.("button, #mobile-controls"));
    if (!touch) return;
    const xNorm = (touch.clientX / window.innerWidth) * 2 - 1;
    world.player.laneX = THREE.MathUtils.lerp(
      world.player.laneX,
      xNorm * (GAME_CONFIG.laneWidth),
      0.12
    );
  });

  window.addEventListener("blur", clearInput);

}

function resetGameState() {
  clearTimeout(resultTimer);
  const selection=(document.getElementById("route-select") as HTMLSelectElement | null)?.value ?? "0";
  setRoadRoute(selection==="florence"?"florence":"city");
  race = new RaceProgress(isFlorence()?FLORENCE_LENGTH:RACE_DISTANCE);
  trafficRules.reset();
  scoreSystem.raceDistance = race.length;
  bestLapKey = isFlorence()?`${BEST_LAP_KEY}_florence_v1`:BEST_LAP_KEY;
  highScoreKey = isFlorence()?`${PERSISTENCE_KEYS.HIGH_SCORE}_florence_v1`:PERSISTENCE_KEYS.HIGH_SCORE;
  scoreSystem.elapsedSeconds = 0;
  scoreSystem.lapCompleted = false;
  scoreSystem.newBestLap = false;
  try {
    scoreSystem.bestLapSeconds = parseBestLap(localStorage.getItem(bestLapKey));
    scoreSystem.highScore = Math.max(0,Number(localStorage.getItem(highScoreKey))||0);
  } catch { scoreSystem.bestLapSeconds=null;scoreSystem.highScore=0; }
  silenceEngine();
  // Reset punteggi
  scoreSystem.score = 0;
  scoreSystem.distance = 0;
  scoreSystem.coins = 0;
  scoreSystem.nearMisses = 0;
  scoreSystem.combo = 1;
  scoreSystem.bestCombo = 1;
  scoreSystem.missionCompleted = false;
  scoreSystem.lastComboTime = now();
  syncRunSnapshot(runModel.reset());

  // Reset stato gioco
  turboTimeLeft = 0;
  cameraShakeIntensity = 0;
  gameOverCooldown = 0;
  startGraceTime = 2.5; // secondi di strada libera all'avvio
  hudUpdateTimer = 0;
  const selectedStart = Number(selection);
  curveDistance = [0,120,420,940,1300].includes(selectedStart) ? selectedStart : 0;
  districtId = "";
  circuitRenderer?.reset(curveDistance,race.length);
  crossingVisuals?.update(curveDistance,trafficRules,isFlorence());
  const routeLabel = document.getElementById("district-value");
  if (routeLabel) routeLabel.textContent = isFlorence()?florenceStreet(0):resolveCircuitPosition(curveDistance).district.name;
  document.getElementById("route-attribution")?.classList.toggle("visible",isFlorence());

  // Reset input
  input.left = false;
  input.right = false;
  input.up = false;
  input.down = false;
  input.turbo = false;

  if (!world) return;

  // Rimuovi TUTTI gli ostacoli
  world.trackDistance = curveDistance;
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

  // Distance-based scheduling avoids frame bursts and gives a calm opening.
  hazardSpawnDistanceLeft = 52;
  coinSpawnDistanceLeft = 18;
  rampSpawnDistanceLeft = 105;
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
  gameStateMachine.dispatch(gameState === "MENU" ? "START" : "RESTART");
  lastTime = now();
  flashMessage("Vai! Evita auto e ostacoli - Carica il turbo", 1.8);

  // Audio in background senza bloccare
  activateAudio();
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

  if (gameState === "MENU" || gameState === "GAME_OVER" || gameState === "FINISHED") {
    isStartingGame = true;

    // Reset sincrono senza async
    resetGameState();
    hideMenu();
    hideGameOver();
    gameStateMachine.dispatch(gameState === "MENU" ? "START" : "RESTART");
    lastTime = now();
    flashMessage("Vai! Evita auto e ostacoli - Carica il turbo", 1.8);

    // Audio non bloccante
    activateAudio();

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
  const handlePress = (e: PointerEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (gameState !== "RUNNING") return;
    button.setPointerCapture(e.pointerId);
    button.classList.add("is-pressed");
    onPress();
  };

  const handleRelease = (e: Event) => {
    e.preventDefault();
    e.stopPropagation();

    button.classList.remove("is-pressed");
    onRelease();
  };

  button.addEventListener("pointerdown", handlePress);
  button.addEventListener("pointerup", handleRelease);
  button.addEventListener("pointercancel", handleRelease);
  button.addEventListener("lostpointercapture", handleRelease);
}

function clearInput() {
  input = {left: false, right: false, up: false, down: false, turbo: false};
  document.querySelectorAll(".is-pressed").forEach(el => el.classList.remove("is-pressed"));
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
  const elapsedDt = Math.max(0, t - lastTime);
  const dt = Math.min(0.05, elapsedDt);
  lastTime = t;
  if (documentPaused) {
    world.renderer.render(world.scene, world.camera);
    return;
  }
  if (startGraceTime > 0 && gameState === "RUNNING") {
    startGraceTime = Math.max(0, startGraceTime - dt);
  }

  if (gameState === "RUNNING") {
    updatePlayer(dt);
    const movementDt = race.advance(dt, world.player.speed, elapsedDt);
    scoreSystem.elapsedSeconds = race.elapsed;
    updateObstacles(movementDt);
    updateScore(movementDt);
    checkCollisions();
    if (race.finished && gameStateMachine.state === "RUNNING") finishRun();
  } else if (gameState === "GAME_OVER" || gameState === "FINISHED") {
    if (gameOverCooldown > 0) gameOverCooldown -= dt;
  }

  updateCamera(dt);
  updateAtmosphere(t);
  world.renderer.render(world.scene, world.camera);
}

function updatePlayer(dt: number) {
  const p = world.player;
  if(isFlorence())trafficRules.update(curveDistance,p.speed,dt);
  const difficulty = getDifficultyProfile(
    scoreSystem.distance,
    GAME_CONFIG.baseSpeed,
    GAME_CONFIG.maxSpeed
  );

  // The available top speed opens up with the run instead of starting at the
  // hardest pace. When the player is not braking, the cruise speed follows the
  // same gradual curve.
  p.maxSpeed = difficulty.maxSpeed;
  if(isFlorence())p.maxSpeed=24;

  // Speed control
  if (input.up) {
    p.targetSpeed += 18 * dt;
  }
  if (input.down) {
    p.targetSpeed -= 26 * dt;
  } else if (!p.turboActive && p.targetSpeed < difficulty.cruiseSpeed) {
    p.targetSpeed = lerp(p.targetSpeed, difficulty.cruiseSpeed, 0.45 * dt);
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
  if(isFlorence()) {
    const speed=trafficRules.limitSpeed(curveDistance,p.speed,dt);
    if(speed<p.speed){p.targetSpeed=Math.min(p.targetSpeed,Math.max(speed,p.minSpeed));p.turboActive=false;turboTimeLeft=0;}
    p.speed=speed;
  }

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

  const maxX = streetLayout(curveDistance).laneSpacing + 0.4;
  p.laneX += lateral * p.lateralSpeed * dt;
  p.laneX = clamp(p.laneX, -maxX, maxX);
  p.mesh.position.x = p.laneX;

  // Lean effect
  const bend = sampleRoad(curveDistance + 5).heading - sampleRoad(curveDistance).heading;
  const targetRotZ = p.speed<.1?0:-lateral * 0.25 + clamp(Math.atan2(Math.sin(bend),Math.cos(bend))*2,-.28,.28);
  p.mesh.rotation.z = lerp(p.mesh.rotation.z, targetRotZ, 10 * dt);

  // Slight forward tilt with speed
  const targetRotX = p.speed<.1?0:-0.05 - (p.speed - GAME_CONFIG.baseSpeed) * 0.002;
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
  const difficulty = getDifficultyProfile(
    scoreSystem.distance,
    GAME_CONFIG.baseSpeed,
    GAME_CONFIG.maxSpeed
  );

  // Move world backwards based on speed.
  const dz = p.speed * dt;
  hazardSpawnDistanceLeft -= dz;
  rampSpawnDistanceLeft -= dz;
  coinSpawnDistanceLeft -= dz;

  curveDistance += dz;
  world.trackDistance = curveDistance;
  circuitRenderer.update(curveDistance, dt);
  crossingVisuals.update(curveDistance,trafficRules,isFlorence());
  const circuitPosition = resolveCircuitPosition(curveDistance);
  const routeLabel = document.getElementById("district-value");
  const street = isFlorence()?florenceStreet(curveDistance):circuitPosition.district.name;
  if (districtId !== street) {
    districtId = street;
    if (routeLabel) routeLabel.textContent = street;
    flashMessage(street, 1.8);
  }
  if(isFlorence()) {
    const message=trafficRules.message(curveDistance);
    if(message){const ui=getUI();if(ui){ui.message.textContent=message;ui.message.style.opacity="1";}}
  }

  // Spawn new obstacles ahead of player
  // IMPORTANT: Limit max obstacles on screen to ensure playability
  const MAX_HAZARDS = difficulty.maxHazards;
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

  let spawnedHazardThisTick = false;
  if (!isFlorence() && race.distance < race.length - 160 && startGraceTime <= 0 && hazardSpawnDistanceLeft <= 0 && hazardCount < MAX_HAZARDS) {
    const spawnZ = cameraZ - randomBetween(
      difficulty.hazardSpawnAheadMin,
      difficulty.hazardSpawnAheadMax
    );
    const occupiedLanes = occupiedHazardLanesAt(spawnZ);

    // Never add the third blocked lane in a road segment. In the unlikely case
    // two lanes are already occupied, give the player another short breather.
    if (occupiedLanes.size < streetLayout(curveDistance - 5 - spawnZ).lanes.length - 1) {
      const spawnedObstacle = spawnObstacle(world, spawnZ, lastSpawnedLanes);
      spawnedHazardThisTick = true;

      // Remember two recent lanes: this produces readable alternating patterns
      // while the generous longitudinal gap preserves a visible escape route.
      lastSpawnedLanes.push(spawnedObstacle.laneIndex);
      if (lastSpawnedLanes.length > 2) {
        lastSpawnedLanes.shift();
      }
      hazardSpawnDistanceLeft = randomBetween(
        difficulty.hazardSpacingMin,
        difficulty.hazardSpacingMax
      );
    } else {
      hazardSpawnDistanceLeft = 12;
    }
  }

  if (
    startGraceTime <= 0 &&
    !isFlorence() && race.distance < race.length - 160 &&
    !spawnedHazardThisTick &&
    rampCount < MAX_RAMPS &&
    rampSpawnDistanceLeft <= 0
  ) {
    const rampZ = cameraZ - randomBetween(
      difficulty.hazardSpawnAheadMin,
      difficulty.hazardSpawnAheadMax
    );
    const occupiedLanes = occupiedHazardLanesAt(rampZ);
    rampSpawnDistanceLeft = randomBetween(
      difficulty.rampSpacingMin,
      difficulty.rampSpacingMax
    );
    // A ramp is optional, never the piece that visually closes the last lane.
    if (
      occupiedLanes.size < streetLayout(curveDistance - 5 - rampZ).lanes.length - 1 &&
      Math.random() < difficulty.rampChance
    ) {
      spawnRamp(world, rampZ, lastSpawnedLanes);
    }
  } else if (spawnedHazardThisTick && rampSpawnDistanceLeft <= 0) {
    // Do not create two new gameplay rows in the same frame.
    rampSpawnDistanceLeft = 10;
  }

  if (coinCount < MAX_COINS && coinSpawnDistanceLeft <= 0) {
    const coinZ = cameraZ - randomBetween(
      GAME_CONFIG.coinSpawnDistanceMin,
      GAME_CONFIG.coinSpawnDistanceMax
    );
    coinSpawnDistanceLeft = randomBetween(22, 34);
    const laneIndex = pickReadableCoinLane(coinZ);
    spawnCoin(world, coinZ, laneIndex);
    spawnCoin(world, coinZ - 1.6, laneIndex);
    spawnCoin(world, coinZ - 3.2, laneIndex);
    spawnCoin(world, coinZ - 4.8, laneIndex);
  }

  // Traffic has its own forward speed. Static hazards and pickups scroll at
  // the full player speed; cars approach more slowly because both vehicles
  // travel in the same direction.
  for (let i = world.obstacles.length - 1; i >= 0; i--) {
    const o = world.obstacles[i];
    o.mesh.userData.previousZ = trackZ(o);
    const obstacleDz =
      o.type === "CAR"
        ? Math.max(0, p.speed - updateTrafficCar(o.mesh, p.speed, dt)) * dt
        : dz;
    o.mesh.userData.trackZ += obstacleDz;
    const obstacleDistance = curveDistance - 5 - trackZ(o);
    o.laneOffset = (o.laneIndex - 1) * streetLayout(obstacleDistance).laneSpacing;
    const projected = projectRoadPoint(obstacleDistance, o.laneOffset, curveDistance);
    o.mesh.position.x = projected.x;
    o.mesh.position.z = projected.z;
    if (o.type !== "COIN") o.mesh.rotation.y = projected.heading;

    if (o.type === "COIN") {
      o.mesh.rotation.y += dt * 3;
      o.mesh.position.y = 0.6 + Math.sin((now() + o.mesh.position.z) * 2) * 0.08;
    }

    // More aggressive cleanup - remove obstacles that are behind the player
    if (trackZ(o) > p.mesh.position.z + 10) {
      world.scene.remove(o.mesh);
      world.obstacles.splice(i, 1);
      continue;
    }

    // Mark as "passed" for scoring
    if (!o.passed && trackZ(o) > p.mesh.position.z) {
      o.passed = true;
      if (isHazard(o.type)) {
        const lateralGap = Math.abs(p.laneX - o.laneOffset);
        const nearMissLimit = o.collisionRadius + 1.15;
        if (
          !p.isJumping &&
          lateralGap > o.collisionRadius &&
          lateralGap <= nearMissLimit
        ) {
          syncRunSnapshot(runModel.registerNearMiss());
          p.turboCharge = clamp(p.turboCharge + 0.12, 0, 1);
          flashMessage("BELLA FIGURA · NEAR-MISS +75", 0.9);
          const ui = getUI();
          if (ui) animateHUDPop(ui.streak, 0.18, 1.22);
        }
      }
    }
  }
}

function updateScore(dt: number) {
  const wasComplete = scoreSystem.missionCompleted;
  let snapshot = runModel.advance(dt, world.player.speed);
  if (!wasComplete && snapshot.mission?.completed) {
    snapshot = runModel.awardBonus(500);
    flashMessage("MISSIONE COMPLETATA · +500", 1.8);
  }
  syncRunSnapshot(snapshot);
}

function awardCoin() {
  syncRunSnapshot(runModel.collectCoin());
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
  const px = p.laneX;
  const pz = p.mesh.position.z;
  const py = p.mesh.position.y;

  for (let i = world.obstacles.length - 1; i >= 0; i--) {
    const o = world.obstacles[i];
    const oz = trackZ(o);
    const relZ = oz - pz;
    const previousZ =
      typeof o.mesh.userData.previousZ === "number"
        ? o.mesh.userData.previousZ
        : oz;
    const previousRelZ = previousZ - pz;

    // Use the obstacle's specific collision radius
    const radius = o.collisionRadius;

    // Only check obstacles that are close in Z axis
    const crossedPlayer = previousRelZ * relZ <= 0;
    const closestRelZ = crossedPlayer
      ? 0
      : Math.abs(previousRelZ) < Math.abs(relZ)
        ? previousRelZ
        : relZ;
    if (Math.abs(closestRelZ) > radius * 2.5) continue;

    const ox = o.laneOffset;
    const dx = px - ox;
    const distSq = dx * dx + closestRelZ * closestRelZ;

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
  gameStateMachine.dispatch("CRASH");
  silenceEngine();
  clearInput();
  world.player.speed = 0;
  world.player.targetSpeed = 0;
  world.player.turboActive = false;
  updateHUD(scoreSystem, 0, world.player.turboCharge);
  gameOverCooldown = 0.5;
  cameraShakeIntensity = 1.2;

  playCrash();

  const final = scoreSystem.score;
  const best = await saveHighScoreIfNeeded(final,highScoreKey).catch(() => scoreSystem.highScore);
  scoreSystem.highScore = Math.max(best, final);

  const ui = getUI();
  if (ui) {
    resultTimer = setTimeout(() => {
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
  cameraBaseOffset.z = 7.4 + speedFactor * 2.5;
  cameraBaseOffset.y = 3.2 + speedFactor * 0.7;

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
    p.mesh.position.x * .5 + projectRoadPoint(curveDistance + 20, 0, curveDistance).x * .45,
    p.mesh.position.y + 1.5,
    p.mesh.position.z - 10
  );
  cam.lookAt(cameraLookAt);
}

function finishRun() {
  if (gameState !== "RUNNING") return;
  gameStateMachine.dispatch("FINISH");
  silenceEngine();
  clearInput();
  world.player.speed = world.player.targetSpeed = 0;
  world.player.turboActive = false;
  world.player.mesh.position.y = 0;
  world.player.mesh.rotation.set(0, 0, 0);
  scoreSystem.distance = race.length;
  scoreSystem.lapCompleted = true;
  scoreSystem.newBestLap = scoreSystem.bestLapSeconds === null || race.elapsed < scoreSystem.bestLapSeconds;
  if (scoreSystem.newBestLap) {
    scoreSystem.bestLapSeconds = race.elapsed;
    try { localStorage.setItem(bestLapKey, String(race.elapsed)); } catch { /* Keep the record for this session. */ }
  }
  scoreSystem.highScore = Math.max(scoreSystem.highScore, scoreSystem.score);
  void saveHighScoreIfNeeded(scoreSystem.score,highScoreKey).catch(() => {});
  gameOverCooldown = 1.2;
  updateHUD(scoreSystem, 0, world.player.turboCharge);
  flashMessage("FINISH · Giro completato!", 1.2);
  resultTimer = setTimeout(() => showGameOver(scoreSystem), 1200);
}
