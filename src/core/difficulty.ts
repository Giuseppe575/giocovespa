export type DifficultyProfile = {
  cruiseSpeed: number;
  maxSpeed: number;
  maxHazards: number;
  hazardSpacingMin: number;
  hazardSpacingMax: number;
  hazardSpawnAheadMin: number;
  hazardSpawnAheadMax: number;
  rampSpacingMin: number;
  rampSpacingMax: number;
  rampChance: number;
};

const mix = (from: number, to: number, amount: number) =>
  from + (to - from) * amount;

/** Smooth, monotonic difficulty curve for the opening 900 metres. */
export function getDifficultyProfile(
  distance: number,
  baseSpeed = 18,
  configuredMaxSpeed = 52
): DifficultyProfile {
  const linearProgress = Math.max(0, Math.min(distance / 900, 1));
  const progress = linearProgress * linearProgress * (3 - 2 * linearProgress);

  return {
    cruiseSpeed: mix(baseSpeed, 28, progress),
    maxSpeed: mix(34, configuredMaxSpeed, progress),
    maxHazards: distance < 250 ? 2 : distance < 600 ? 3 : 4,
    hazardSpacingMin: mix(58, 32, progress),
    hazardSpacingMax: mix(76, 44, progress),
    hazardSpawnAheadMin: mix(82, 96, progress),
    hazardSpawnAheadMax: mix(98, 116, progress),
    rampSpacingMin: mix(115, 78, progress),
    rampSpacingMax: mix(145, 105, progress),
    rampChance: mix(0.32, 0.52, progress),
  };
}
