import { describe, expect, it } from "vitest";
import { getDifficultyProfile } from "./difficulty";

describe("getDifficultyProfile", () => {
  it("starts calm and reaches the configured cap gradually", () => {
    const start = getDifficultyProfile(0);
    const middle = getDifficultyProfile(450);
    const end = getDifficultyProfile(900);

    expect(start).toMatchObject({ maxHazards: 2, maxSpeed: 34 });
    expect(middle.maxSpeed).toBeGreaterThan(start.maxSpeed);
    expect(middle.maxSpeed).toBeLessThan(end.maxSpeed);
    expect(end).toMatchObject({ maxHazards: 4, maxSpeed: 52 });
  });

  it("increases preview while decreasing density spacing", () => {
    const start = getDifficultyProfile(0);
    const end = getDifficultyProfile(900);

    expect(end.hazardSpawnAheadMin).toBeGreaterThan(start.hazardSpawnAheadMin);
    expect(end.hazardSpacingMin).toBeLessThan(start.hazardSpacingMin);
    expect(end.hazardSpacingMin).toBeGreaterThanOrEqual(32);
  });

  it("clamps negative and very long runs to stable endpoints", () => {
    expect(getDifficultyProfile(-500)).toEqual(getDifficultyProfile(0));
    expect(getDifficultyProfile(5_000)).toEqual(getDifficultyProfile(900));
  });
});
