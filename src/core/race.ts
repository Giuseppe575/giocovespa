export const RACE_DISTANCE = 1800;
export const BEST_LAP_KEY = "vespa_best_lap_seconds";

/** One finite lap; movement cannot overshoot and completed results are immutable. */
export class RaceProgress {
  distance = 0;
  elapsed = 0;
  constructor(readonly length = RACE_DISTANCE) {}
  get finished() { return this.distance >= this.length; }
  reset() { this.distance = 0; this.elapsed = 0; }
  advance(dt: number, speed: number, elapsedDt = dt): number {
    if (this.finished || dt <= 0) return 0;
    const simulatedDt = speed > 0 ? Math.min(dt, (this.length - this.distance) / speed) : dt;
    this.distance = Math.min(this.length, this.distance + Math.max(0, speed) * simulatedDt);
    this.elapsed += Math.max(0, elapsedDt) * simulatedDt / dt;
    return simulatedDt;
  }
}

export function formatRaceTime(seconds: number | null | undefined): string {
  if (seconds == null || !Number.isFinite(seconds) || seconds < 0) return "—";
  const centiseconds = Math.floor(seconds * 100);
  return `${Math.floor(centiseconds / 6000)}:${String(Math.floor(centiseconds / 100) % 60).padStart(2, "0")}.${String(centiseconds % 100).padStart(2, "0")}`;
}

export function parseBestLap(value: string | null): number | null {
  const number = Number(value);
  return Number.isFinite(number) && number > 0 ? number : null;
}
