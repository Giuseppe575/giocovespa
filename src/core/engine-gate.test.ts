import { describe, expect, it, vi } from "vitest";
import { setEngineGate } from "./engine-gate";

describe("engine output gate", () => {
  it("cancels pending fades and cuts the complete engine signal at game over/mute", () => {
    const gain={cancelScheduledValues:vi.fn(),setValueAtTime:vi.fn(),setTargetAtTime:vi.fn()};
    setEngineGate(gain as never,12,false);
    expect(gain.cancelScheduledValues).toHaveBeenCalledWith(12);
    expect(gain.setValueAtTime).toHaveBeenCalledWith(0,12);
    expect(gain.setTargetAtTime).not.toHaveBeenCalled();
    expect(gain.cancelScheduledValues.mock.invocationCallOrder[0]).toBeLessThan(gain.setValueAtTime.mock.invocationCallOrder[0]);
  });
  it("reopens smoothly on restart", () => {
    const gain={cancelScheduledValues:vi.fn(),setValueAtTime:vi.fn(),setTargetAtTime:vi.fn()};
    setEngineGate(gain as never,12,false);
    setEngineGate(gain as never,14,true);
    expect(gain.setTargetAtTime).toHaveBeenCalledWith(1,14,.04);
  });
});
