import { describe, expect, it } from "vitest";
import { RaceProgress, RACE_DISTANCE, formatRaceTime, parseBestLap } from "./race";
import { VESPA_CITY_CIRCUIT } from "./circuit";

describe("finite race", () => {
  it("matches the complete city circuit", () => expect(RACE_DISTANCE).toBe(VESPA_CITY_CIRCUIT.totalLength));
  it("clamps the final movement and timing at the finish", () => {
    const race = new RaceProgress(100);
    race.advance(9, 10);
    expect(race.advance(2, 10)).toBe(1);
    expect(race.distance).toBe(100);
    expect(race.elapsed).toBe(10);
    expect(race.finished).toBe(true);
    expect(race.advance(10, 100)).toBe(0);
    expect(race.elapsed).toBe(10);
  });
  it("counts active wall time even when rendering is slow", () => {
    const race = new RaceProgress(); race.advance(.05, 20, .1);
    expect(race.elapsed).toBeCloseTo(.1); expect(race.distance).toBe(1);
  });
  it("resets distance and time for a rematch", () => {
    const race = new RaceProgress(1); race.advance(1, 2); race.reset();
    expect(race.finished).toBe(false); expect(race.elapsed).toBe(0); expect(race.distance).toBe(0);
  });
  it("formats minutes, seconds and hundredths", () => {
    expect(formatRaceTime(65.25)).toBe("1:05.25"); expect(formatRaceTime(null)).toBe("—");
  });
  it("rejects invalid saved records", () => {
    for (const value of [null, "", "0", "-2", "NaN", "Infinity"]) expect(parseBestLap(value)).toBeNull();
    expect(parseBestLap("65.25")).toBe(65.25);
  });
});
