import { describe, expect, it } from "vitest";
import { RunModel } from "./run-model";

describe("RunModel", () => {
  it("scores deterministic distance and coin events", () => {
    const run = new RunModel();

    run.advance(2, 10);
    const snapshot = run.collectCoin();

    expect(snapshot.distance).toBe(20);
    expect(snapshot.score).toBe(21);
    expect(snapshot.coins).toBe(1);
    expect(snapshot.combo).toBeCloseTo(1.15);
  });

  it("tracks near misses and expires the combo window", () => {
    const run = new RunModel();

    expect(run.registerNearMiss()).toMatchObject({ nearMisses: 1, score: 25 });
    expect(run.advance(2.2, 0).combo).toBe(1);
  });

  it("awards explicit mission bonuses without changing combo", () => {
    const run = new RunModel();

    expect(run.awardBonus(500)).toMatchObject({ score: 500, combo: 1 });
    expect(() => run.awardBonus(-1)).toThrow(RangeError);
  });

  it("completes missions only when every configured target is met", () => {
    const run = new RunModel({
      id: "city-warmup",
      targetCoins: 2,
      targetNearMisses: 1,
      targetDistance: 10,
    });

    run.collectCoin(2);
    run.registerNearMiss();
    expect(run.snapshot().mission?.completed).toBe(false);

    expect(run.advance(1, 10).mission?.completed).toBe(true);
  });

  it("resets all run progression", () => {
    const run = new RunModel({ id: "coin", targetCoins: 1 });
    run.collectCoin();
    run.registerNearMiss();

    expect(run.reset()).toMatchObject({
      score: 0,
      distance: 0,
      coins: 0,
      nearMisses: 0,
      combo: 1,
      maxCombo: 1,
    });
    expect(run.snapshot().mission?.completed).toBe(false);
  });

  it("rejects invalid time, speed and coin input", () => {
    const run = new RunModel();

    expect(() => run.advance(-1, 10)).toThrow(RangeError);
    expect(() => run.advance(1, Number.NaN)).toThrow(RangeError);
    expect(() => run.collectCoin(0)).toThrow(RangeError);
  });
});
