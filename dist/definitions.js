// @ts-nocheck
import * as THREE from "three";
export const GAME_CONFIG = {
    lanes: 3,
    laneWidth: 2.4,
    roadLength: 200,
    roadSegmentLength: 20,
    spawnDistanceMin: 30,
    spawnDistanceMax: 65,
    obstacleCleanupZ: 15,
    baseSpeed: 18,
    maxSpeed: 52,
    minSpeed: 6,
    lateralSpeed: 18,
    turboBoost: 16,
    turboDuration: 0.5,
    turboRechargeRate: 0.12,
    comboTimeout: 2.1,
    obstacleSafeRadius: 3.2,
    cameraBaseOffset: new THREE.Vector3(0, 3.5, 8.2),
    cameraLookAt: new THREE.Vector3(0, 1.5, -6),
    fov: 60,
    fogNear: 8,
    fogFar: 120,
    ambientColor: 0x222633,
    hemiColorSky: 0x3f5faf,
    hemiColorGround: 0x0d0d12,
    sunColor: 0xffe0b5,
    cityFogColor: 0x050810,
};
export const PERSISTENCE_KEYS = {
    HIGH_SCORE: "vespa_city_highscore",
    MUTE: "vespa_city_mute",
};
