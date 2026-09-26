/** Stream the licensed track instead of decoding a whole song into mobile RAM. */
export class BackgroundMusic {
  readonly element: HTMLAudioElement;
  private source: MediaElementAudioSourceNode;
  private gain: GainNode;
  private pending: Promise<void> | null = null;
  private wanted = false;

  constructor(private context: AudioContext) {
    this.element = new Audio(new URL("audio/carefree.mp3", document.baseURI).href);
    this.element.loop = true;
    this.element.preload = "none";
    this.element.setAttribute("playsinline", "");
    this.source = context.createMediaElementSource(this.element);
    this.gain = context.createGain();
    this.gain.gain.value = 0;
    this.source.connect(this.gain).connect(context.destination);
  }

  sync(allowed: boolean) {
    this.wanted = allowed;
    this.gain.gain.cancelScheduledValues(this.context.currentTime);
    this.gain.gain.setValueAtTime(allowed ? .16 : 0, this.context.currentTime);
    if (!allowed) { this.element.pause(); return; }
    if (!this.element.paused || this.pending) return;
    // Must run directly inside a user gesture when the browser requires one.
    this.pending = this.element.play().catch(() => {
      // Network/autoplay failures must not disable the engine or the game.
    }).finally(() => {
      this.pending = null;
      if (!this.wanted) this.element.pause();
    });
  }

  dispose() {
    this.wanted = false; this.element.pause(); this.element.removeAttribute("src"); this.element.load();
    this.source.disconnect(); this.gain.disconnect();
  }
}
