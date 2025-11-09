
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
  type UIElements,
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
  engineGain: null,
  lastWhooshTime: 0,
};

let lastSpawnZ = -25;
let lastTime = now();
let turboTimeLeft = 0;
let gameOverCooldown = 0;
let cameraShakeIntensity = 0;

function steerPlayer(normalizedX: number, lerpFactor: number) {
  if (!world || gameState !== "RUNNING") return;
  const clamped = THREE.MathUtils.clamp(normalizedX, -1, 1);
  world.player.mesh.position.x = THREE.MathUtils.lerp(
    world.player.mesh.position.x,
    clamped * GAME_CONFIG.laneWidth,
    lerpFactor
  );
}

function tryResumeAudioContext() {
  if (!audio.context) return;
  if (audio.context.state === "suspended") {
    audio.context.resume().catch(() => {
      /* noop */
    });
  }
}

async function initAudio() {
  audio.context = new (window.AudioContext ||
    (window as any).webkitAudioContext)();
  const ctx = audio.context;
  if (!ctx) return;

  const osc = ctx.createOscillator();
  osc.type = "sawtooth";
  const gain = ctx.createGain();
  gain.gain.value = 0.0;

  osc.connect(gain).connect(ctx.destination);
  osc.start();

  audio.engineNode = osc;
  audio.engineGain = gain;

  const muteStored = await persistence.getItem(PERSISTENCE_KEYS.MUTE);
  if (muteStored === "1") {
    audio.muted = true;
    gain.gain.value = 0;
  }
}

function updateEngineSound(speed: number) {
  if (!audio.context || !audio.engineNode || !audio.engineGain) return;
  if (audio.muted) {
    audio.engineGain.gain.value = 0;
    return;
  }
  const norm = clamp((speed - GAME_CONFIG.minSpeed) / (GAME_CONFIG.maxSpeed - GAME_CONFIG.minSpeed), 0, 1);
  const freq = 120 + norm * 260;
  const vol = 0.08 + norm * 0.1;
  audio.engineNode.frequency.setTargetAtTime(freq, audio.context.currentTime, 0.12);
  audio.engineGain.gain.setTargetAtTime(vol, audio.context.currentTime, 0.16);
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
  const scene = createScene();
  const camera = createCamera();
  const renderer = createRenderer();
  const clock = new THREE.Clock();

  addEventListeners();

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

  await initUI();
  await initAudio();

  // Load high score if available
  const hs = await persistence.getItem(PERSISTENCE_KEYS.HIGH_SCORE);
  if (hs) {
    scoreSystem.highScore = parseFloat(hs);
  }

  resetGameState();
  showMenu();

  window.addEventListener("resize", onResize);
  onResize();
  animate();
}

function addLights(scene: THREE.Scene) {
  // delegated to entities.addLights to keep imports consistent
  // But we can't re-import here, so we redefine minimal:
  const ambient = new THREE.AmbientLight(0x222633, 0.9);
  scene.add(ambient);

  const hemi = new THREE.HemisphereLight(0x3f5faf, 0x0d0d12, 0.6);
  scene.add(hemi);

  const dir = new THREE.DirectionalLight(0xffe0b5, 1.1);
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
  const unlockAudio = () => {
    tryResumeAudioContext();
    window.removeEventListener("touchstart", unlockAudio);
    window.removeEventListener("pointerdown", unlockAudio);
  };
  window.addEventListener("touchstart", unlockAudio, { passive: true });
  window.addEventListener("pointerdown", unlockAudio, { passive: true });

  window.addEventListener("keydown", (e) => {
    if (e.code === "ArrowLeft" || e.code === "KeyA") input.left = true;
    if (e.code === "ArrowRight" || e.code === "KeyD") input.right = true;
    if (e.code === "ArrowUp" || e.code === "KeyW") input.up = true;
    if (e.code === "ArrowDown" || e.code === "KeyS") input.down = true;
    if (e.code === "Space") {
      input.turbo = true;
      tryResumeAudioContext();
      if (gameState === "MENU") {
        startRun();
      } else if (gameState === "GAME_OVER" && gameOverCooldown <= 0) {
        restart();
      }
    }
    if (e.code === "Enter" && gameState === "MENU") {
      startRun();
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
    const xNorm = (e.clientX / window.innerWidth) * 2 - 1;
    steerPlayer(xNorm, 0.06);
  });

  const steerFromTouch = (touch: Touch | null, lerpFactor: number, evt: TouchEvent) => {
    if (!touch) return;
    const xNorm = (touch.clientX / window.innerWidth) * 2 - 1;
    steerPlayer(xNorm, lerpFactor);
    if (gameState === "RUNNING") {
      evt.preventDefault();
    }
  };

  window.addEventListener(
    "touchstart",
    (e) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest?.("#touch-controls")) return;
      steerFromTouch(e.touches[0] ?? null, 0.12, e);
    },
    { passive: false }
  );

  window.addEventListener(
    "touchmove",
    (e) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest?.("#touch-controls")) return;
      steerFromTouch(e.touches[0] ?? null, 0.12, e);
    },
    { passive: false }
  );

  // Buttons
  document.addEventListener("DOMContentLoaded", async () => {
    const ui = await initUI();
    setupTouchControls(ui);
    ui.playBtn.onclick = () => {
      tryResumeAudioContext();
      startRun();
    };
    ui.restartBtn.onclick = () => {
      if (gameOverCooldown <= 0) restart();
    };
    ui.muteBtn.onclick = async () => {
      audio.muted = !audio.muted;
      ui.muteBtn.textContent = audio.muted ? "🔇" : "🔊";
      if (audio.muted) {
        if (audio.engineGain) audio.engineGain.gain.value = 0;
        await persistence.setItem(PERSISTENCE_KEYS.MUTE, "1");
      } else {
        await persistence.setItem(PERSISTENCE_KEYS.MUTE, "0");
        tryResumeAudioContext();
      }
    };
  });
}

type TouchControlsElement = HTMLElement & {
  __releaseTouchInputs?: () => void;
};

function setupTouchControls(ui: UIElements) {
  if (!ui.touchControls) return;
  const touchControlsEl = ui.touchControls as TouchControlsElement;
  if (touchControlsEl.dataset.initialized === "1") return;
  touchControlsEl.dataset.initialized = "1";

  const coarseQuery = window.matchMedia("(pointer: coarse)");
  const releases: Array<() => void> = [];

  const releaseInputs = () => {
    releases.forEach((release) => release());
    input.left = false;
    input.right = false;
    input.up = false;
    input.down = false;
    input.turbo = false;
  };

  touchControlsEl.__releaseTouchInputs = releaseInputs;

  const updateVisibility = () => {
    if (coarseQuery.matches) {
      touchControlsEl.classList.add("active");
    } else {
      touchControlsEl.classList.remove("active");
      releaseInputs();
    }
  };

  updateVisibility();

  const queryListener = () => updateVisibility();
  if (typeof coarseQuery.addEventListener === "function") {
    coarseQuery.addEventListener("change", queryListener);
  } else if (typeof coarseQuery.addListener === "function") {
    coarseQuery.addListener(queryListener);
  }

  const bindTouchButton = (
    element: HTMLElement,
    onPress: () => void,
    onRelease: () => void
  ): (() => void) => {
    let active = false;

    const press = () => {
      if (active || !coarseQuery.matches) return;
      active = true;
      element.classList.add("is-active");
      tryResumeAudioContext();
      onPress();
    };

    const release = () => {
      if (!active) return;
      active = false;
      element.classList.remove("is-active");
      onRelease();
    };

    if (window.PointerEvent) {
      element.addEventListener("pointerdown", (event) => {
        const pointerEvent = event as PointerEvent;
        if (
          pointerEvent.pointerType !== "touch" &&
          pointerEvent.pointerType !== "pen"
        ) {
          return;
        }
        if (event.cancelable) {
          event.preventDefault();
        }
        press();
        if (element.setPointerCapture) {
          try {
            element.setPointerCapture(pointerEvent.pointerId);
          } catch (err) {
            // Ignore if pointer capture fails (e.g., Safari quirks).
          }
        }
      });
      const pointerRelease = (event: Event) => {
        const pointerEvent = event as PointerEvent;
        if (
          pointerEvent.pointerType !== "touch" &&
          pointerEvent.pointerType !== "pen"
        ) {
          return;
        }
        if (event.cancelable) {
          event.preventDefault();
        }
        release();
      };
      element.addEventListener("pointerup", pointerRelease);
      element.addEventListener("pointercancel", pointerRelease);
      element.addEventListener("pointerleave", pointerRelease);
    } else {
      element.addEventListener(
        "touchstart",
        (event) => {
          if (event.cancelable) {
            event.preventDefault();
          }
          press();
        },
        { passive: false }
      );
      const touchRelease = (event: Event) => {
        if (event.cancelable) {
          event.preventDefault();
        }
        release();
      };
      element.addEventListener("touchend", touchRelease, { passive: false });
      element.addEventListener("touchcancel", touchRelease, { passive: false });
    }

    element.addEventListener("contextmenu", (event) => event.preventDefault());
    element.addEventListener("click", (event) => event.preventDefault());

    return release;
  };

  if (ui.touchPad) {
    const pad = ui.touchPad;
    const handlePadTouch = (event: TouchEvent) => {
      if (!coarseQuery.matches) return;
      const touch = event.touches[0] ?? event.changedTouches?.[0] ?? null;
      if (!touch) return;
      const rect = pad.getBoundingClientRect();
      if (!rect.width) return;
      const relative = (touch.clientX - rect.left) / rect.width;
      const normalized = relative * 2 - 1;
      steerPlayer(normalized, 0.22);
      if (gameState === "RUNNING") {
        event.preventDefault();
      }
    };
    pad.addEventListener("touchstart", handlePadTouch, { passive: false });
    pad.addEventListener("touchmove", handlePadTouch, { passive: false });
    pad.addEventListener("touchend", (event) => {
      if (gameState === "RUNNING") {
        event.preventDefault();
      }
    });
    pad.addEventListener("contextmenu", (event) => event.preventDefault());
  }

  if (ui.touchAccelerate) {
    releases.push(
      bindTouchButton(
        ui.touchAccelerate,
        () => {
          input.up = true;
        },
        () => {
          input.up = false;
        }
      )
    );
  }

  if (ui.touchBrake) {
    releases.push(
      bindTouchButton(
        ui.touchBrake,
        () => {
          input.down = true;
        },
        () => {
          input.down = false;
        }
      )
    );
  }

  if (ui.touchTurbo) {
    releases.push(
      bindTouchButton(
        ui.touchTurbo,
        () => {
          input.turbo = true;
          if (gameState === "MENU") {
            startRun();
          } else if (gameState === "GAME_OVER" && gameOverCooldown <= 0) {
            restart();
          }
        },
        () => {
          input.turbo = false;
        }
      )
    );
  }
}

function resetGameState() {
  input.left = false;
  input.right = false;
  input.up = false;
  input.down = false;
  input.turbo = false;
  const ui = getUI();
  const touchControlsEl = ui?.touchControls as TouchControlsElement | null | undefined;
  touchControlsEl?.__releaseTouchInputs?.();
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
  lastTime = now();
}

function startRun() {
  if (!world) return;
  tryResumeAudioContext();
  hideMenu();
  hideGameOver();
  resetGameState();
  gameState = "RUNNING";
  flashMessage("Vai! Evita auto e ostacoli • Carica il turbo", 1.8);
}

function restart() {
  startRun();
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
  const forwardZ = cameraZ - GAME_CONFIG.spawnDistanceMax;
  if (lastSpawnZ > forwardZ) {
    const spawnZ =
      cameraZ -
      (GAME_CONFIG.spawnDistanceMin +
        Math.random() *
          (GAME_CONFIG.spawnDistanceMax -
            GAME_CONFIG.spawnDistanceMin));
    lastSpawnZ = spawnZ;
    spawnObstacle(world, spawnZ);
  }

  // Move cars slightly or keep static; cleanup passed obstacles
  for (let i = world.obstacles.length - 1; i >= 0; i--) {
    const o = world.obstacles[i];
    o.mesh.position.z += dz;

    if (o.mesh.position.z > cameraZ + GAME_CONFIG.obstacleCleanupZ) {
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

  const radius = GAME_CONFIG.obstacleSafeRadius;

  for (const o of world.obstacles) {
    const oz = o.mesh.position.z;
    if (Math.abs(oz - pz) > radius * 2.2) continue;
    const ox = o.mesh.position.x;
    const dx = px - ox;
    const dz = pz - oz;
    const distSq = dx * dx + dz * dz;
    if (distSq < radius * radius) {
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

