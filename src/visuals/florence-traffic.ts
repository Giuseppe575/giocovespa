import * as THREE from "three";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
import { projectRoadPoint } from "../core/road-path";
import {florenceTrafficLane} from '../core/florence-street-section';
import type { TrafficRules } from "../core/traffic-rules";
import { florenceTrafficSpeed, playerIsQueuedAtTraffic, playerTrafficSpeedLimit, type TrafficCarSnapshot } from "../core/florence-traffic-motion";
import { enhanceCar } from "./vehicle-details";

type TrafficCar = { mesh: THREE.Group; distance: number; speed: number; phase: number; laneX: number; currentSpeed: number };

const paint = [0x527d72, 0xc8b48c, 0x9b5f4a, 0x687c91, 0xddd5c0];

export function makeFlorenceCar(index: number): THREE.Group {
  const car = new THREE.Group();
  const bodyMaterial = new THREE.MeshStandardMaterial({ color: paint[index % paint.length], roughness: 0.3, metalness: 0.34 });
  const dark = new THREE.MeshStandardMaterial({ color: 0x26383a, roughness: 0.4 });
  const wheelMaterial = new THREE.MeshStandardMaterial({ color: 0x171b1b, roughness: 0.88 });
  const body = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.35, 2), bodyMaterial);
  body.position.y = 0.4; body.castShadow = true; car.add(body);
  const cabin = new THREE.Mesh(new RoundedBoxGeometry(0.9, 0.4, 0.8, 3, 0.1), dark);
  cabin.position.set(0, 0.75, -0.1); cabin.castShadow = true; car.add(cabin);
  const wheels: THREE.Mesh[] = [];
  for (const [x, z] of [[-.5, -.8], [.5, -.8], [-.5, .8], [.5, .8]]) {
    const wheel = new THREE.Mesh(new THREE.CylinderGeometry(.22, .22, .15, 12), wheelMaterial);
    wheel.rotation.z = Math.PI / 2; wheel.position.set(x, .22, z); wheel.scale.z = 0.56; wheel.castShadow = true;
    wheels.push(wheel); car.add(wheel);
  }
  car.userData.wheels = wheels;
  const headMat = new THREE.MeshStandardMaterial({ color: 0xfffbd1, emissive: 0x887744, emissiveIntensity: .5 });
  const tailMat = new THREE.MeshStandardMaterial({ color: 0xd73c32, emissive: 0x55100c, emissiveIntensity: .5 });
  for (const x of [-.32, .32]) {
    const head = new THREE.Mesh(new THREE.BoxGeometry(.18, .08, .04), headMat); head.position.set(x, .4, -1.02); car.add(head);
    const tail = new THREE.Mesh(new THREE.BoxGeometry(.2, .1, .045), tailMat); tail.position.set(x, .42, 1.02); car.add(tail);
  }
  enhanceCar(car);
  // Body and cabin proportions become about 1.65 m wide, 1.4 m tall and
  // 3.6 m long, while correcting the tire profile after the length scale.
  car.scale.set(1.375, 1.45, 1.8);
  return car;
}

/** Sparse visual traffic that follows the Florence route and yields at crossings. */
export class FlorenceTraffic {
  readonly root = new THREE.Group();
  private cars: TrafficCar[] = [];
  private initialized = false;
  private playerStopped = false;

  constructor(scene: THREE.Scene) {
    scene.add(this.root);
    this.cars = Array.from({ length: 4 }, (_, i) => ({
      mesh: makeFlorenceCar(i), distance: 0, speed: 10.5 + i * 0.7, phase: i * 1.7, laneX: 0, currentSpeed: 0,
    }));
    for (const car of this.cars) this.root.add(car.mesh);
  }

  reset() {
    this.initialized = false;
    this.playerStopped = false;
    for (const car of this.cars) { car.distance = 0; car.phase = 0; car.currentSpeed = 0; }
  }

  limitPlayerSpeed(distance: number, laneX: number, requested: number, dt: number) {
    const speed = playerTrafficSpeedLimit(distance, laneX, requested, dt, this.carSnapshots());
    this.playerStopped = speed < 0.15;
    return speed;
  }

  isQueued(distance: number, laneX: number, rules: TrafficRules) {
    return playerIsQueuedAtTraffic(distance, laneX, this.playerStopped, rules.crossings, this.carSnapshots());
  }

  update(distance: number, dt: number, rules: TrafficRules, visible: boolean) {
    this.root.visible = visible;
    if (!this.initialized) {
      this.cars.forEach((car, i) => { car.distance = distance + 30 + i * 34; });
      this.initialized = true;
    }
    const step = Math.min(Math.max(dt, 0), .1);
    this.cars.forEach((car, i) => { car.laneX = this.laneFor(car.distance, i); });
    for (const [i, car] of this.cars.entries()) {
      const leader = this.cars
        .filter((other) => other !== car && other.distance > car.distance && Math.abs(other.laneX - car.laneX) < 1.15)
        .reduce<TrafficCar | undefined>((nearest, other) => !nearest || other.distance < nearest.distance ? other : nearest, undefined);
      const requested = florenceTrafficSpeed(car.distance, car.speed, step, rules.crossings, leader?.distance);
      car.currentSpeed = requested;
      car.distance += requested * step;
      // Recycle only after the car is well behind and outside the render window.
      // The new location is beyond the horizon, so it has time to approach before appearing.
      if (car.distance < distance - 75) {
        car.distance = distance + 250 + Math.random() * 110;
        car.currentSpeed = car.speed;
      }
      const lane = this.laneFor(car.distance, i);
      car.laneX = lane;
      const point = projectRoadPoint(car.distance, lane, distance);
      car.mesh.position.set(point.x, 0, point.z);
      car.mesh.rotation.y = point.heading;
      const rolling = requested > 0 ? requested : 0;
      car.phase += rolling * step * 1.8;
      for (const wheel of car.mesh.userData.wheels as THREE.Mesh[]) wheel.rotation.x = car.phase;
      car.mesh.position.y = Math.sin(car.phase * 2) * .008;
      car.mesh.visible = visible && point.z > -145 && point.z < 24;
    }
  }

  private carSnapshots(): TrafficCarSnapshot[] {
    return this.cars.map((car) => ({ distance: car.distance, laneX: car.laneX, speed: car.currentSpeed }));
  }

  private laneFor(distance: number, index: number) {
    return florenceTrafficLane(distance,index);
  }
}
