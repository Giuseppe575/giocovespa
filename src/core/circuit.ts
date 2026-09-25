export type DistrictId =
  | "historic-center"
  | "seafront"
  | "market"
  | "hillside";

export type DistrictPalette = Readonly<{
  sky: string;
  road: string;
  roadside: string;
  accent: string;
}>;

export type DistrictDifficulty = Readonly<{
  trafficMultiplier: number;
  hazardMultiplier: number;
  speedMultiplier: number;
}>;

export type DistrictDefinition = Readonly<{
  id: DistrictId;
  name: string;
  length: number;
  palette: DistrictPalette;
  decorations: readonly string[];
  difficulty: DistrictDifficulty;
  milestone: Readonly<{
    id: string;
    label: string;
  }>;
}>;

export type CircuitMilestone = Readonly<{
  id: string;
  label: string;
  distance: number;
  districtId: DistrictId;
}>;

export type CircuitDefinition = Readonly<{
  id: string;
  name: string;
  districts: readonly DistrictDefinition[];
  totalLength: number;
  milestones: readonly CircuitMilestone[];
}>;

export type CircuitPosition = Readonly<{
  absoluteDistance: number;
  lap: number;
  lapDistance: number;
  districtIndex: number;
  district: DistrictDefinition;
  districtDistance: number;
  districtProgress: number;
  currentMilestone: CircuitMilestone;
  nextMilestone: CircuitMilestone;
}>;

const requirePositiveFinite = (value: number, label: string): void => {
  if (!Number.isFinite(value) || value <= 0) {
    throw new RangeError(`${label} must be a finite positive number`);
  }
};

/** Builds an immutable circuit and derives its length and entry milestones. */
export function createCircuit(
  definition: Readonly<{
    id: string;
    name: string;
    districts: readonly DistrictDefinition[];
  }>
): CircuitDefinition {
  if (!definition.id.trim()) throw new Error("Circuit id cannot be empty");
  if (!definition.name.trim()) throw new Error("Circuit name cannot be empty");
  if (definition.districts.length === 0) {
    throw new Error("Circuit requires at least one district");
  }

  let distance = 0;
  const milestoneIds = new Set<string>();
  const milestones = definition.districts.map((district, index) => {
    requirePositiveFinite(district.length, `District ${district.id} length`);
    if (!district.id.trim() || !district.name.trim()) {
      throw new Error(`District at index ${index} requires an id and name`);
    }
    if (!district.milestone.id.trim() || !district.milestone.label.trim()) {
      throw new Error(`District ${district.id} requires a milestone`);
    }
    if (milestoneIds.has(district.milestone.id)) {
      throw new Error(`Duplicate milestone id: ${district.milestone.id}`);
    }
    milestoneIds.add(district.milestone.id);

    const milestone: CircuitMilestone = {
      ...district.milestone,
      distance,
      districtId: district.id,
    };
    distance += district.length;
    return Object.freeze(milestone);
  });

  return Object.freeze({
    id: definition.id,
    name: definition.name,
    districts: Object.freeze([...definition.districts]),
    totalLength: distance,
    milestones: Object.freeze(milestones),
  });
}

/** Resolves a run distance to a deterministic position in a looping circuit. */
export function resolveCircuitPosition(
  distance: number,
  circuit: CircuitDefinition = VESPA_CITY_CIRCUIT
): CircuitPosition {
  if (!Number.isFinite(distance) || distance < 0) {
    throw new RangeError("Distance must be a finite non-negative number");
  }
  requirePositiveFinite(circuit.totalLength, "Circuit total length");

  const lap = Math.floor(distance / circuit.totalLength);
  const lapDistance = distance % circuit.totalLength;
  let districtStart = 0;

  for (let index = 0; index < circuit.districts.length; index += 1) {
    const district = circuit.districts[index];
    const districtEnd = districtStart + district.length;
    if (lapDistance < districtEnd) {
      const districtDistance = lapDistance - districtStart;
      return {
        absoluteDistance: distance,
        lap,
        lapDistance,
        districtIndex: index,
        district,
        districtDistance,
        districtProgress: districtDistance / district.length,
        currentMilestone: circuit.milestones[index],
        nextMilestone: circuit.milestones[(index + 1) % circuit.milestones.length],
      };
    }
    districtStart = districtEnd;
  }

  // The modulo operation keeps lapDistance inside the circuit. This guards
  // malformed external circuit objects while preserving an exhaustive return.
  throw new Error("Circuit districts do not cover the declared total length");
}

export const VESPA_CITY_CIRCUIT = createCircuit({
  id: "vespa-city-loop",
  name: "Giro della Citta",
  districts: [
    {
      id: "historic-center",
      name: "Centro storico",
      length: 420,
      palette: {
        sky: "#79C8E8",
        road: "#454B56",
        roadside: "#D99863",
        accent: "#F6C453",
      },
      decorations: ["facciate", "balconi", "piazzetta", "lampioni"],
      difficulty: {
        trafficMultiplier: 0.85,
        hazardMultiplier: 0.8,
        speedMultiplier: 0.92,
      },
      milestone: { id: "old-town-gate", label: "Porta del centro" },
    },
    {
      id: "seafront",
      name: "Lungomare",
      length: 520,
      palette: {
        sky: "#79C8E8",
        road: "#505966",
        roadside: "#E9D28F",
        accent: "#177E78",
      },
      decorations: ["mare", "spiaggia", "palme", "cabine"],
      difficulty: {
        trafficMultiplier: 0.9,
        hazardMultiplier: 0.85,
        speedMultiplier: 1.06,
      },
      milestone: { id: "seafront-promenade", label: "Passeggiata sul mare" },
    },
    {
      id: "market",
      name: "Mercato",
      length: 360,
      palette: {
        sky: "#74BED9",
        road: "#424A54",
        roadside: "#C96F4A",
        accent: "#F05A47",
      },
      decorations: ["bancarelle", "tende", "cassette", "insegne"],
      difficulty: {
        trafficMultiplier: 1.12,
        hazardMultiplier: 1.15,
        speedMultiplier: 0.94,
      },
      milestone: { id: "market-arches", label: "Archi del mercato" },
    },
    {
      id: "hillside",
      name: "Collina",
      length: 500,
      palette: {
        sky: "#82BBD4",
        road: "#3F4650",
        roadside: "#788C5C",
        accent: "#FFF5DD",
      },
      decorations: ["cipressi", "muretti", "ville", "belvedere"],
      difficulty: {
        trafficMultiplier: 0.95,
        hazardMultiplier: 1.08,
        speedMultiplier: 1.02,
      },
      milestone: { id: "hilltop-view", label: "Belvedere" },
    },
  ],
});
