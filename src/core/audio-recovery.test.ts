import { describe, expect, it, vi } from "vitest";
import { AudioRecovery } from "./audio-recovery";

describe("mobile audio recovery", () => {
  it("allows retry when a browser leaves resume pending indefinitely", async () => {
    vi.useFakeTimers();
    try {
      const context = {state:"suspended", resume:vi.fn(() => new Promise<void>(() => {}))};
      const recovery = new AudioRecovery();
      const first = recovery.resume(context,true);
      await vi.advanceTimersByTimeAsync(1500); expect(await first).toBe(false);
      const next = recovery.resume(context,true); expect(context.resume).toHaveBeenCalledTimes(2);
      await vi.advanceTimersByTimeAsync(1500); await next;
    } finally { vi.useRealTimers(); }
  });
  it.each(["suspended", "interrupted"])("resumes %s synchronously from a gesture", async state => {
    const context = {state, resume: vi.fn(async () => {context.state = "running";})};
    const result = new AudioRecovery().resume(context, true);
    expect(context.resume).toHaveBeenCalledOnce(); expect(await result).toBe(true);
  });
  it("does not resume while hidden/muted or closed", async () => {
    const recovery = new AudioRecovery();
    const context = {state:"suspended", resume:vi.fn(async () => {})};
    expect(await recovery.resume(context, false)).toBe(false);
    context.state = "closed"; expect(await recovery.resume(context, true)).toBe(false);
    expect(context.resume).not.toHaveBeenCalled();
  });
  it("retries a rejected attempt on the next gesture", async () => {
    const context = {state:"interrupted", resume:vi.fn().mockRejectedValueOnce(new Error("blocked")).mockImplementation(async () => {context.state="running";})};
    const recovery = new AudioRecovery();
    expect(await recovery.resume(context, true)).toBe(false);
    expect(await recovery.resume(context, true)).toBe(true);
  });
  it("coalesces concurrent resume requests", async () => {
    let resolve!:()=>void;
    const context = {state:"suspended", resume:vi.fn(() => new Promise<void>(r => {resolve=r;}))};
    const recovery = new AudioRecovery();
    const first = recovery.resume(context,true); const second = recovery.resume(context,true);
    expect(context.resume).toHaveBeenCalledOnce(); context.state="running";resolve();
    expect(await first).toBe(true); expect(await second).toBe(true);
  });
});
