import type { CrossingState } from "./traffic-rules";

const CAR_STOP_OFFSET = 9;
const CAR_FOLLOWING_GAP = 10;

/** Speed cap for ambient traffic. A signal holds cars until served; people on
 * an active crossing always have priority. The same braking envelope applies
 * to a queued car so it does not run into the car ahead. */
export function florenceTrafficSpeed(
  position: number,
  requested: number,
  dt: number,
  crossings: readonly CrossingState[],
  leaderPosition = Number.POSITIVE_INFINITY,
): number {
  if (requested <= 0) return 0;
  const next = crossings.find((crossing) => !crossing.served && crossing.at >= position - 1);
  let limit = requested;
  if (next && !next.served && next.phase !== "clear") {
    limit = capForStop(position, next.at - CAR_STOP_OFFSET, limit, dt);
  }
  if (Number.isFinite(leaderPosition)) {
    limit = capForStop(position, leaderPosition - CAR_FOLLOWING_GAP, limit, dt);
  }
  return limit;
}

export type TrafficCarSnapshot = { distance: number; laneX: number; speed: number };

/** Keep the player five metres behind the nearest ambient car in the same lane. */
export function playerTrafficSpeedLimit(distance: number, laneX: number, requested: number, dt: number,
  cars: readonly TrafficCarSnapshot[]): number {
  if (requested <= 0) return 0;
  const leader = cars
    .filter((car) => car.distance > distance && Math.abs(car.laneX - laneX) < 1.15)
    .reduce<TrafficCarSnapshot | undefined>((nearest, car) => !nearest || car.distance < nearest.distance ? car : nearest, undefined);
  return leader ? capForStop(distance, leader.distance - 5, requested, dt) : requested;
}

/** True only when the player is stopped behind a car held at a crossing stop point. */
export function playerIsQueuedAtTraffic(distance: number, laneX: number, stopped: boolean,
  crossings: readonly CrossingState[], cars: readonly TrafficCarSnapshot[]): boolean {
  if (!stopped) return false;
  return cars.some((car) => {
    const gap = car.distance - distance;
    if (gap < 4.5 || gap > 20 || Math.abs(car.laneX - laneX) >= 1.15 || car.speed >= 0.15) return false;
    return heldForCrossing(car, crossings, cars, laneX, 0);
  });
}

function heldForCrossing(car: TrafficCarSnapshot, crossings: readonly CrossingState[],
  cars: readonly TrafficCarSnapshot[], laneX: number, depth: number): boolean {
  if (depth > cars.length) return false;
  const crossing = crossings.find((row) => !row.served && row.at >= car.distance - 1);
  if (crossing && crossing.at - car.distance <= 25 && Math.abs((crossing.at - 9) - car.distance) <= 0.5) return true;
  // A car queued behind another held car is part of the same crossing queue.
  return cars.some((leader) => leader.distance > car.distance &&
    Math.abs(leader.laneX - laneX) < 1.15 && leader.distance - car.distance <= 11 && leader.speed < 0.15 &&
    heldForCrossing(leader, crossings, cars, laneX, depth + 1));
}

function capForStop(position: number, stopAt: number, requested: number, dt: number): number {
  const remaining = stopAt - position;
  if (remaining <= 0) return 0;
  return Math.min(requested, Math.sqrt(2 * 5.5 * remaining), remaining / Math.max(dt, 0.016));
}
