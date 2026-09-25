export type GainControl = Pick<AudioParam, "cancelScheduledValues" | "setValueAtTime" | "setTargetAtTime">;

/** An unmodulated output gate sits AFTER the engine LFO/filter, before speakers. */
export function setEngineGate(gain: GainControl, time: number, audible: boolean): void {
  gain.cancelScheduledValues(time);
  if (audible) gain.setTargetAtTime(1, time, 0.04);
  else gain.setValueAtTime(0, time);
}
