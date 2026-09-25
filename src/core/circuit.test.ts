import { describe, expect, it } from "vitest";
import {
  VESPA_CITY_CIRCUIT,
  createCircuit,
  resolveCircuitPosition,
} from "./circuit";

describe("VESPA_CITY_CIRCUIT", () => {
  it("keeps the intended district sequence and derives metadata", () => {
    expect(VESPA_CITY_CIRCUIT.districts.map(({ name }) => name)).toEqual([
      "Centro storico",
      "Lungomare",
      "Mercato",
      "Collina",
    ]);
    expect(VESPA_CITY_CIRCUIT.totalLength).toBe(1_800);
    expect(VESPA_CITY_CIRCUIT.milestones.map(({ distance }) => distance)).toEqual([
      0, 420, 940, 1_300,
    ]);
    expect(VESPA_CITY_CIRCUIT.districts[1]).toMatchObject({
      decorations: expect.arrayContaining(["mare", "spiaggia", "palme"]),
      difficulty: { speedMultiplier: 1.06 },
    });
  });
});

describe("resolveCircuitPosition", () => {
  it.each([
    [0, "historic-center", 0, 0],
    [419.999, "historic-center", 0, 419.999],
    [420, "seafront", 1, 0],
    [939.999, "seafront", 1, 519.999],
    [940, "market", 2, 0],
    [1_299.999, "market", 2, 359.999],
    [1_300, "hillside", 3, 0],
    [1_799.999, "hillside", 3, 499.999],
  ])(
    "resolves boundary distance %s to %s",
    (distance, districtId, districtIndex, districtDistance) => {
      const position = resolveCircuitPosition(distance as number);

      expect(position.district.id).toBe(districtId);
      expect(position.districtIndex).toBe(districtIndex);
      expect(position.districtDistance).toBeCloseTo(districtDistance as number);
      expect(position.districtProgress).toBeGreaterThanOrEqual(0);
      expect(position.districtProgress).toBeLessThan(1);
    }
  );

  it("loops exactly at the circuit length and remains deterministic", () => {
    const firstStart = resolveCircuitPosition(0);
    const secondStart = resolveCircuitPosition(1_800);
    const thirdSeafront = resolveCircuitPosition(4_020);

    expect(secondStart).toMatchObject({
      lap: 1,
      lapDistance: 0,
      districtDistance: 0,
      district: { id: "historic-center" },
    });
    expect(secondStart.district).toBe(firstStart.district);
    expect(thirdSeafront).toMatchObject({
      lap: 2,
      lapDistance: 420,
      district: { id: "seafront" },
      currentMilestone: { id: "seafront-promenade" },
      nextMilestone: { id: "market-arches" },
    });
  });

  it("reports the current and wrapping next milestone", () => {
    const hillside = resolveCircuitPosition(1_450);

    expect(hillside.currentMilestone).toMatchObject({
      distance: 1_300,
      districtId: "hillside",
    });
    expect(hillside.nextMilestone).toMatchObject({
      distance: 0,
      districtId: "historic-center",
    });
  });

  it.each([-1, Number.NaN, Number.POSITIVE_INFINITY])(
    "rejects invalid distance %s",
    (distance) => {
      expect(() => resolveCircuitPosition(distance)).toThrow(RangeError);
    }
  );
});

describe("createCircuit", () => {
  it("rejects invalid layouts before they enter gameplay", () => {
    expect(() =>
      createCircuit({
        id: "broken",
        name: "Broken circuit",
        districts: [],
      })
    ).toThrow("at least one district");

    expect(() =>
      createCircuit({
        id: "broken",
        name: "Broken circuit",
        districts: [{ ...VESPA_CITY_CIRCUIT.districts[0], length: 0 }],
      })
    ).toThrow(RangeError);
  });
});
