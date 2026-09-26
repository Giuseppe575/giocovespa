import { describe, expect, it } from "vitest";
import { FLORENCE_CROSSINGS } from "./florence";
import { florenceTrafficSpeed, playerIsQueuedAtTraffic, playerTrafficSpeedLimit } from "./florence-traffic-motion";
import type { CrossingState } from "./traffic-rules";

function state(at: number, signal: boolean, phase: CrossingState["phase"], served = false): CrossingState {
  return { id: "test", at, signal, source: "test", phase, elapsed: 0, progress: 0,
    light: phase === "clear" ? "green" : "red", served };
}

describe("Florence ambient traffic motion", () => {
  it("brakes and remains stopped before an unserved red signal", () => {
    const crossings = [state(100, true, "waiting")];
    expect(florenceTrafficSpeed(86, 8, 1, crossings)).toBeLessThan(8);
    expect(florenceTrafficSpeed(91, 8, 1, crossings)).toBe(0);
    expect(florenceTrafficSpeed(91, 8, 1, [state(100, true, "clear", true)])).toBe(8);
  });

  it("holds at every unserved crossing and releases cars after it is served", () => {
    expect(florenceTrafficSpeed(91, 8, 1, [state(100, false, "crossing")])).toBe(0);
    expect(florenceTrafficSpeed(91, 8, 1, [state(100, false, "waiting")])).toBe(0);
    expect(florenceTrafficSpeed(91, 8, 1, [state(100, false, "clear", true)])).toBe(8);
  });

  it("keeps a queued car at least ten metres behind its leader", () => {
    expect(florenceTrafficSpeed(50, 8, 1, [], 60)).toBe(0);
    expect(florenceTrafficSpeed(40, 8, 1, [], 60)).toBe(8);
  });

  it("accepts the route's crossing states without mutating them", () => {
    const crossings = FLORENCE_CROSSINGS.map((crossing) => ({ ...crossing, phase: "waiting" as const,
      elapsed: 0, progress: 0, light: crossing.signal ? "red" as const : "green" as const, served: false }));
    const before = crossings[0] ? { ...crossings[0] } : undefined;
    expect(florenceTrafficSpeed(0, 8, 1, crossings)).toBeGreaterThanOrEqual(0);
    expect(crossings[0]).toEqual(before);
  });

  it("caps the player five metres behind same-lane cars only", () => {
    const cars = [{ distance: 60, laneX: 1, speed: 0 }];
    expect(playerTrafficSpeedLimit(50, 1, 8, 1, cars)).toBe(5);
    expect(playerTrafficSpeedLimit(50, -1, 8, 1, cars)).toBe(8);
  });

  it("reports a stopped player queued behind a car held at an unserved crossing", () => {
    const crossings = [state(100, true, "waiting")];
    const cars = [{ distance: 91, laneX: 1, speed: 0 }];
    expect(playerIsQueuedAtTraffic(76, 1, true, crossings, cars)).toBe(true);
    expect(playerIsQueuedAtTraffic(76, 1, false, crossings, cars)).toBe(false);
    expect(playerIsQueuedAtTraffic(76, -1, true, crossings, cars)).toBe(false);
  });

  it("detects a two-lane queue without linking cars from the other lane", () => {
    const crossings = [state(100, true, "waiting")];
    const cars = [
      { distance: 91, laneX: 1, speed: 0 }, { distance: 81, laneX: 1, speed: 0 },
      { distance: 91, laneX: -1, speed: 0 }, { distance: 81, laneX: -1, speed: 0 },
    ];
    expect(playerIsQueuedAtTraffic(76, 1, true, crossings, cars)).toBe(true);
    expect(playerIsQueuedAtTraffic(76, -1, true, crossings, cars)).toBe(true);
    expect(playerIsQueuedAtTraffic(76, 2.3, true, crossings, cars)).toBe(false);
  });
});
