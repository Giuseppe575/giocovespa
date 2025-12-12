
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
let lastSpawnedLanes: number[] = []; // Track last spawned lanes to avoid blocking all lanes
let lastTime = now();
let turboTimeLeft = 0;
let gameOverCooldown = 0;
let cameraShakeIntensity = 0;

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
    console.warn("Impossibile creare l'audio, il gioco proseguirà silenzioso.", err);
    audio.muted = true;
    return;
  }
  const ctx = audio.context;
  if (!ctx) return;

  if (ctx.state === "suspended") {
    try {
      await ctx.resume();
    } catch (err) {
      console.warn("Ripresa dell'audio bloccata, verrà disabilitato.", err);
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

  const muteStored = await persistence.getItem(PERSISTENCE_KEYS.MUTE);
  if (muteStored === "1") {
    audio.muted = true;
    mix.gain.value = 0;
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
  console.log("initGame() - Avvio inizializzazione gioco...");
  const scene = createScene();
  console.log("initGame() - Scene creata");
  const camera = createCamera();
  console.log("initGame() - Camera creata");
  const renderer = createRenderer();
  console.log("initGame() - Renderer creato e aggiunto al DOM");
  const clock = new THREE.Clock();

  addEventListeners();
  console.log("initGame() - Event listeners aggiunti");

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
  console.log("initGame() - World inizializzato:", !!world);

  await initUI();
  console.log("initGame() - UI inizializzata");
  try {
    await initAudio();
  } catch (err) {
    console.warn("Audio disabilitato, il gioco prosegue senza suoni.", err);
    audio.muted = true;
  }

  // Load high score if available
  const hs = await persistence.getItem(PERSISTENCE_KEYS.HIGH_SCORE);
  if (hs) {
    scoreSystem.highScore = parseFloat(hs);
  }

  // Setup button handlers
  const ui = getUI();
  console.log("initGame() - getUI() restituito:", !!ui);
  if (ui) {
    ui.muteBtn.textContent = audio.muted ? "🔇" : "🔊";
    console.log("initGame() - Assegnando event handlers a playBtn...");

    // Funzione per avviare il gioco (usata sia da click che da touch)
    const handlePlayClick = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
      console.log("Pulsante GIOCA attivato (evento:", e.type, ")");
      startRun().catch((err) => {
        console.error("Errore durante l'avvio del gioco:", err);
      });
    };

    // Supporto sia click che touch per iOS
    ui.playBtn.addEventListener('click', handlePlayClick);
    ui.playBtn.addEventListener('touchend', handlePlayClick);

    console.log("initGame() - event handlers assegnati a playBtn");

    // Funzione per riavviare il gioco
    const handleRestartClick = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
      console.log("Pulsante RIPROVA attivato (evento:", e.type, ")");
      if (gameOverCooldown <= 0) {
        restart().catch((err) => {
          console.error("Errore durante il riavvio del gioco:", err);
        });
      }
    };

    ui.restartBtn.addEventListener('click', handleRestartClick);
    ui.restartBtn.addEventListener('touchend', handleRestartClick);
    ui.muteBtn.onclick = async () => {
      audio.muted = !audio.muted;
      ui.muteBtn.textContent = audio.muted ? "🔇" : "🔊";
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
  console.log("initGame() - INIZIALIZZAZIONE COMPLETATA! Avvio animate loop...");
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
    world.player.mesh.position.x = THREE.MathUtils.lerp(
      world.player.mesh.position.x,
      xNorm * (GAME_CONFIG.laneWidth),
      0.06
    );
  });

  window.addEventListener("touchmove", (e) => {
    if (!world || gameState !== "RUNNING") return;
    const touch = e.touches[0];
    const xNorm = (touch.clientX / window.innerWidth) * 2 - 1;
    world.player.mesh.position.x = THREE.MathUtils.lerp(
      world.player.mesh.position.x,
      xNorm * (GAME_CONFIG.laneWidth),
      0.12
    );
  });

}

function resetGameState() {
  scoreSystem.score = 0;
  scoreSystem.distance = 0;
  scoreSystem.combo = 1;
  scoreSystem.lastComboTime = now();
  turboTimeLeft = 0;
  cameraShakeIntensity = 0;
  gameOverCooldown = 0;

  if (!world) return;
  world.obstacles.forEach((o) => world.scene.remove(o.mesh));
  world.obstacles.length = 0;

  world.player.speed = GAME_CONFIG.baseSpeed;
  world.player.targetSpeed = GAME_CONFIG.baseSpeed;
  world.player.turboCharge = 0;
  world.player.turboActive = false;
  world.player.mesh.position.set(0, 0, -5);
  world.player.mesh.rotation.set(0, 0, 0);

  lastSpawnZ = -25;
  lastSpawnedLanes = []; // Reset lane tracking
  lastTime = now();
}

async function startRun() {
  console.log("startRun() chiamato, world:", !!world);
  if (!world) {
    console.error("startRun: world non inizializzato, impossibile avviare il gioco");
    return;
  }

  try {
    await resumeAudioContext();
  } catch (err) {
    console.warn("startRun: errore audio ignorato, il gioco continua:", err);
  }

  hideMenu();
  hideGameOver();
  resetGameState();
  gameState = "RUNNING";
  console.log("Gioco avviato! gameState:", gameState);
  flashMessage("Vai! Evita auto e ostacoli • Carica il turbo", 1.8);
}

async function restart() {
  await startRun();
}

function bindHoldButton(
  button: HTMLButtonElement,
  onPress: () => void,
  onRelease: () => void
) {
  const handlePointerDown = (e: PointerEvent) => {
    e.preventDefault();
    onPress();
  };

  const handlePointerUp = (e: PointerEvent) => {
    e.preventDefault();
    onRelease();
  };

  button.addEventListener("pointerdown", handlePointerDown);
  button.addEventListener("pointerup", handlePointerUp);
  button.addEventListener("pointercancel", handlePointerUp);
  button.addEventListener("pointerleave", handlePointerUp);
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
  if (input.up) p.targetSpeed += 18 * dt;
  if (input.down) p.targetSpeed -= 26 * dt;
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

  // Lateral movement
  let lateral = 0;
  if (input.left) lateral -= 1;
  if (input.right) lateral += 1;

  const maxX =
    ((GAME_CONFIG.lanes - 1) / 2) * GAME_CONFIG.laneWidth + 0.4;
  p.mesh.position.x += lateral * p.lateralSpeed * dt;
  p.mesh.position.x = clamp(p.mesh.position.x, -maxX, maxX);

  // Lean effect
  const targetRotZ = -lateral * 0.25;
  p.mesh.rotation.z = lerp(p.mesh.rotation.z, targetRotZ, 10 * dt);

  // Slight forward tilt with speed
  const targetRotX = -0.05 - (p.speed - GAME_CONFIG.baseSpeed) * 0.002;
  p.mesh.rotation.x = lerp(p.mesh.rotation.x, targetRotX, 2 * dt);

  updateEngineSound(p.speed);

  const ui = getUI();
  if (ui) updateHUD(scoreSystem, p.speed, p.turboCharge);
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

  // Spawn new obstacles ahead of player
  // IMPORTANT: Limit max obstacles on screen to ensure playability
  const MAX_OBSTACLES = 4; // Only allow 4 obstacles at a time

  const forwardZ = cameraZ - GAME_CONFIG.spawnDistanceMax;
  if (lastSpawnZ > forwardZ && world.obstacles.length < MAX_OBSTACLES) {
    const spawnZ =
      cameraZ -
      (GAME_CONFIG.spawnDistanceMin +
        Math.random() *
          (GAME_CONFIG.spawnDistanceMax -
            GAME_CONFIG.spawnDistanceMin));
    lastSpawnZ = spawnZ;

    console.log(`Attempting to spawn obstacle. Current count: ${world.obstacles.length}/${MAX_OBSTACLES}`);
    const spawnedObstacle = spawnObstacle(world, spawnZ, lastSpawnedLanes);

    // Track last 3 spawned lanes to ensure variety
    lastSpawnedLanes.push(spawnedObstacle.laneIndex);
    if (lastSpawnedLanes.length > 2) {
      lastSpawnedLanes.shift();
    }
  }

  // Move cars slightly or keep static; cleanup passed obstacles
  for (let i = world.obstacles.length - 1; i >= 0; i--) {
    const o = world.obstacles[i];
    o.mesh.position.z += dz;

    // More aggressive cleanup - remove obstacles that are behind the player
    if (o.mesh.position.z > p.mesh.position.z + 10) {
      console.log(`Removing obstacle behind player at z=${o.mesh.position.z.toFixed(2)}`);
      world.scene.remove(o.mesh);
      world.obstacles.splice(i, 1);
      continue;
    }

    // Mark as "passed" for scoring
    if (!o.passed && o.mesh.position.z > p.mesh.position.z) {
      o.passed = true;
      scoreSystem.distance += 1;
      scoreSystem.combo = clamp(scoreSystem.combo + 0.1, 1, 5);
      scoreSystem.lastComboTime = now();
      const ui = getUI();
      if (ui) animateHUDPop(ui.streak, 0.16, 1.15);
    }
  }

  // Debug: log all obstacle positions
  if (Math.random() < 0.02) { // Log occasionally
    console.log(`Active obstacles: ${world.obstacles.length}`);
    world.obstacles.forEach((o, i) => {
      const relZ = o.mesh.position.z - p.mesh.position.z;
      console.log(`  [${i}] lane=${o.laneIndex}, x=${o.mesh.position.x.toFixed(2)}, relZ=${relZ.toFixed(2)}`);
    });
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

function checkCollisions() {
  const p = world.player;
  const px = p.mesh.position.x;
  const pz = p.mesh.position.z;

  for (const o of world.obstacles) {
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
    const dist = Math.sqrt(distSq);

    if (distSq < radius * radius) {
      console.error(`COLLISION DETECTED!`);
      console.error(`  Player: x=${px.toFixed(2)}, z=${pz.toFixed(2)}`);
      console.error(`  Obstacle: x=${ox.toFixed(2)}, z=${oz.toFixed(2)}, lane=${o.laneIndex}, type=${o.type}`);
      console.error(`  Distance: ${dist.toFixed(2)} (threshold: ${radius.toFixed(2)} for ${o.type})`);
      console.error(`  Relative Z: ${relZ.toFixed(2)}`);
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
  const baseOffset = GAME_CONFIG.cameraBaseOffset.clone();

  const speedFactor = clamp(
    (p.speed - GAME_CONFIG.baseSpeed) /
      (GAME_CONFIG.maxSpeed + GAME_CONFIG.turboBoost - GAME_CONFIG.baseSpeed),
    0,
    1
  );

  // dynamic camera distance
  baseOffset.z = 8.2 + speedFactor * 3.5;
  baseOffset.y = 3.4 + speedFactor * 0.9;

  const targetPos = new THREE.Vector3(
    p.mesh.position.x * 0.35,
    p.mesh.position.y + baseOffset.y,
    p.mesh.position.z + baseOffset.z
  );

  // camera shake
  if (cameraShakeIntensity > 0) {
    const t = now() * 8;
    targetPos.x += shakeValue(t, 0.25 * cameraShakeIntensity);
    targetPos.y += shakeValue(t + 10, 0.18 * cameraShakeIntensity);
    cameraShakeIntensity = Math.max(
      0,
      cameraShakeIntensity - dt * 2.3
    );
  }

  lerpVec3(cam.position, targetPos, 5 * dt);

  const lookAt = new THREE.Vector3(
    p.mesh.position.x,
    p.mesh.position.y + 1.5,
    p.mesh.position.z - 6
  );
  cam.lookAt(lookAt);
}

