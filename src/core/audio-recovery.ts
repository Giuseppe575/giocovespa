type RecoverableAudioContext = { readonly state: string; resume(): Promise<void> };

/** A failed browser permission/interruption is not a user preference to mute. */
export class AudioRecovery {
  private pending = new WeakMap<RecoverableAudioContext, Promise<boolean>>();
  resume(context: RecoverableAudioContext, allowed: boolean): Promise<boolean> {
    if (!allowed || context.state === "closed") return Promise.resolve(false);
    if (context.state === "running") return Promise.resolve(true);
    const current = this.pending.get(context);
    if (current) return current;
    // Call resume synchronously in the gesture's stack, before any await.
    let timeout: ReturnType<typeof setTimeout>;
    const attempt = Promise.race([
      context.resume().then(() => context.state === "running", () => false),
      new Promise<boolean>(resolve => { timeout = setTimeout(() => resolve(false), 1500); }),
    ]);
    this.pending.set(context, attempt);
    void attempt.finally(() => {
      clearTimeout(timeout);
      if (this.pending.get(context) === attempt) this.pending.delete(context);
    });
    return attempt;
  }
}
