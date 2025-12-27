import * as THREE from "three";

export type GameState = "MENU" | "RUNNING" | "GAME_OVER";

export type InputState = {
  left: boolean;
  right: boolean;
  up: boolean;
  down: boolean;
  turbo: boolean;
};

export type PlayerData = {
  mesh: THREE.Group;
  speed: number;
  targetSpeed: number;
  maxSpeed: number;
  minSpeed: number;
  lateralSpeed: number;
  laneWidth: number;
  laneX: number;
  verticalVelocity: number;
  isJumping: boolean;
  turboCharge: number; // 0 - 1
  turboActive: boolean;
};

export type ObstacleType = "CAR" | "BARRIER" | "CONE" | "RAMP" | "COIN";

export type Obstacle = {
  mesh: THREE.Group;
  type: ObstacleType;
  laneOffset: number;
  laneIndex: number;
  length: number;
  collisionRadius: number;
  passed: boolean;
  awarded: boolean;
};

export type World = {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  clock: THREE.Clock;
  player: PlayerData;
  obstacles: Obstacle[];
  roadSegments: THREE.Mesh[];
  buildings: THREE.Mesh[];
  streetLights: THREE.Group[];
  vehiclesPool: THREE.Group[];
  cityFogColor: THREE.Color;
};

export type ScoreSystem = {
  score: number;
  highScore: number;
  distance: number;
  coins: number;
  combo: number;
  lastComboTime: number;
};

export type AudioSystem = {
  context: AudioContext | null;
  muted: boolean;
  engineNode: OscillatorNode | null;
  engineOvertone: OscillatorNode | null;
  engineGain: GainNode | null;
  engineFilter: BiquadFilterNode | null;
  lastWhooshTime: number;
};

export const GAME_CONFIG = {
  lanes: 3,
  laneWidth: 2.4,
  roadLength: 200,
  roadSegmentLength: 20,
  spawnDistanceMin: 60,
  spawnDistanceMax: 100,
  obstacleCleanupZ: 15,
  baseSpeed: 18,
  maxSpeed: 52,
  minSpeed: 6,
  lateralSpeed: 18,
  jumpVelocity: 12.2,
  gravity: 28,
  jumpSafeHeight: 0.9,
  turboBoost: 16,
  turboDuration: 0.5,
  turboRechargeRate: 0.12,
  comboTimeout: 2.1,
  obstacleSafeRadius: 2.0,
  rampSpawnDistanceMin: 65,
  rampSpawnDistanceMax: 110,
  rampSpawnChance: 0.6,
  coinSpawnDistanceMin: 24,
  coinSpawnDistanceMax: 55,
  coinValue: 14,
  curveAmplitude: 1.2,
  curveSpeed: 0.85,
  curveStraightLength: 260,
  curveLength: 180,
  cameraBaseOffset: new THREE.Vector3(0, 3.5, 8.2),
  cameraLookAt: new THREE.Vector3(0, 1.5, -6),
  fov: 60,
  fogNear: 8,
  fogFar: 160,
  ambientColor: 0xe5edf7,
  hemiColorSky: 0xcbe7ff,
  hemiColorGround: 0x9cb7c5,
  sunColor: 0xfff2c8,
  cityFogColor: 0xb8ddff,
  debug: false,
};

export const PERSISTENCE_KEYS = {
  HIGH_SCORE: "vespa_city_highscore",
  MUTE: "vespa_city_mute",
};
