import { ScoreSystem, PERSISTENCE_KEYS } from "./definitions";
import { persistence } from "./libs/persistence";

type RunStats = ScoreSystem & {
  nearMisses?: number;
  bestCombo?: number;
  missionCompleted?: boolean;
};

type UIElements = {
  score: HTMLElement;
  speed: HTMLElement;
  streak: HTMLElement;
  coins: HTMLElement;
  message: HTMLElement;
  highScore: HTMLElement;
  menuHighScore: HTMLElement;
  menuOverlay: HTMLElement;
  gameOverOverlay: HTMLElement;
  playBtn: HTMLButtonElement;
  restartBtn: HTMLButtonElement;
  finalScore: HTMLElement;
  bestScore: HTMLElement;
  muteBtn: HTMLButtonElement;
  mobileAccelerate: HTMLButtonElement;
  mobileBrake: HTMLButtonElement;
  mobileTurbo: HTMLButtonElement;
  missionValue: HTMLElement;
  missionProgress: HTMLElement;
  missionProgressFill: HTMLElement;
  turboValue: HTMLElement;
  turboProgress: HTMLElement;
  turboProgressFill: HTMLElement;
  recapDistance: HTMLElement;
  recapCoins: HTMLElement;
  recapNearMisses: HTMLElement;
  recapBestCombo: HTMLElement;
  recapMission: HTMLElement;
};

const MISSION_DISTANCE = 750;
let ui: UIElements | null = null;

const queryRequired = <T extends HTMLElement>(id: string): T => {
  const element = document.getElementById(id);
  if (!element) throw new Error(`Elemento UI mancante: #${id}`);
  return element as T;
};

const setOverlayVisibility = (overlay: HTMLElement, visible: boolean) => {
  overlay.classList.toggle("visible", visible);
  overlay.style.display = visible ? "flex" : "none";
  overlay.setAttribute("aria-hidden", visible ? "false" : "true");
};

const setProgress = (
  track: HTMLElement,
  fill: HTMLElement,
  value: number,
  max: number
) => {
  const safeValue = Math.max(0, Math.min(value, max));
  const percent = max > 0 ? (safeValue / max) * 100 : 0;
  fill.style.width = `${percent}%`;
  track.setAttribute("aria-valuenow", `${Math.round(safeValue)}`);
};

const dispatchTurboKey = (type: "keydown" | "keyup") => {
  window.dispatchEvent(
    new KeyboardEvent(type, {
      code: "Space",
      key: " ",
      bubbles: true,
      cancelable: true,
    })
  );
};

const bindMobileTurbo = (button: HTMLButtonElement) => {
  const press = (event: PointerEvent) => {
    event.preventDefault();
    event.stopPropagation();
    button.classList.add("is-pressed");
    button.setPointerCapture?.(event.pointerId);
    dispatchTurboKey("keydown");
  };
  const release = (event: PointerEvent) => {
    event.preventDefault();
    event.stopPropagation();
    button.classList.remove("is-pressed");
    dispatchTurboKey("keyup");
  };

  button.addEventListener("pointerdown", press);
  button.addEventListener("pointerup", release);
  button.addEventListener("pointercancel", release);
  button.addEventListener("lostpointercapture", () => {
    button.classList.remove("is-pressed");
    dispatchTurboKey("keyup");
  });
};

const bindAccessibleMuteState = (button: HTMLButtonElement) => {
  button.addEventListener("click", () => {
    const willBeMuted = button.getAttribute("aria-pressed") !== "true";
    queueMicrotask(() => {
      button.setAttribute("aria-pressed", willBeMuted ? "true" : "false");
      button.setAttribute(
        "aria-label",
        willBeMuted ? "Attiva audio" : "Disattiva audio"
      );
    });
  });
};

const keepPrimaryCtaCopy = (button: HTMLButtonElement) => {
  const renderReadyLabel = () => {
    if (button.textContent?.trim() !== "GIOCA") return;
    button.innerHTML = '<span>Parti</span><span aria-hidden="true">→</span>';
    if (ui?.menuOverlay.classList.contains("visible")) button.focus();
  };
  new MutationObserver(renderReadyLabel).observe(button, {
    childList: true,
    characterData: true,
    subtree: true,
  });
  renderReadyLabel();
};

export async function initUI(): Promise<UIElements> {
  if (ui) return ui;

  const missionProgress = queryRequired("mission-progress");
  const turboProgress = queryRequired("turbo-progress");

  ui = {
    score: queryRequired("score-value"),
    speed: queryRequired("speed-value"),
    streak: queryRequired("streak-value"),
    coins: queryRequired("coins-value"),
    message: queryRequired("message"),
    highScore: queryRequired("highscore-value"),
    menuHighScore: queryRequired("menu-highscore-value"),
    menuOverlay: queryRequired("menu-overlay"),
    gameOverOverlay: queryRequired("game-over-overlay"),
    playBtn: queryRequired<HTMLButtonElement>("play-btn"),
    restartBtn: queryRequired<HTMLButtonElement>("restart-btn"),
    finalScore: queryRequired("final-score"),
    bestScore: queryRequired("best-score"),
    muteBtn: queryRequired<HTMLButtonElement>("mute-btn"),
    mobileAccelerate: queryRequired<HTMLButtonElement>("mobile-accelerate"),
    mobileBrake: queryRequired<HTMLButtonElement>("mobile-brake"),
    mobileTurbo: queryRequired<HTMLButtonElement>("mobile-turbo"),
    missionValue: queryRequired("mission-value"),
    missionProgress,
    missionProgressFill: missionProgress.querySelector<HTMLElement>(".progress-fill")!,
    turboValue: queryRequired("turbo-value"),
    turboProgress,
    turboProgressFill: turboProgress.querySelector<HTMLElement>(".progress-fill")!,
    recapDistance: queryRequired("recap-distance"),
    recapCoins: queryRequired("recap-coins"),
    recapNearMisses: queryRequired("recap-near-misses"),
    recapBestCombo: queryRequired("recap-best-combo"),
    recapMission: queryRequired("recap-mission"),
  };

  const [savedHigh, savedMute] = await Promise.all([
    persistence.getItem(PERSISTENCE_KEYS.HIGH_SCORE),
    persistence.getItem(PERSISTENCE_KEYS.MUTE),
  ]);
  if (savedHigh) {
    ui.highScore.textContent = savedHigh;
    ui.menuHighScore.textContent = savedHigh;
  }
  const muted = savedMute === "1";
  ui.muteBtn.setAttribute("aria-pressed", muted ? "true" : "false");
  ui.muteBtn.setAttribute("aria-label", muted ? "Attiva audio" : "Disattiva audio");

  bindMobileTurbo(ui.mobileTurbo);
  bindAccessibleMuteState(ui.muteBtn);
  keepPrimaryCtaCopy(ui.playBtn);
  return ui;
}

export function showMenu() {
  if (!ui) return;
  setOverlayVisibility(ui.menuOverlay, true);
  setOverlayVisibility(ui.gameOverOverlay, false);
  window.setTimeout(() => ui?.playBtn.focus(), 0);
}

export function hideMenu() {
  if (!ui) {
    console.error("hideMenu: ui e null!");
    return;
  }
  setOverlayVisibility(ui.menuOverlay, false);
  if (ui.menuOverlay.contains(document.activeElement)) {
    (document.activeElement as HTMLElement | null)?.blur();
  }
}

export function showGameOver(scoreSystem: ScoreSystem) {
  if (!ui) return;
  const stats = scoreSystem as RunStats;
  const score = Math.floor(stats.score);
  const highScore = Math.floor(stats.highScore);
  const distance = Math.max(0, Math.floor(stats.distance));
  const completed = stats.missionCompleted ?? distance >= MISSION_DISTANCE;

  setOverlayVisibility(ui.gameOverOverlay, true);
  setOverlayVisibility(ui.menuOverlay, false);
  ui.finalScore.innerHTML = `Punteggio <strong>${score}</strong>`;
  ui.bestScore.textContent = score >= highScore && score > 0
    ? `Nuovo record · ${highScore}`
    : `Record · ${highScore}`;
  ui.recapDistance.textContent = `${distance} m`;
  ui.recapCoins.textContent = `${stats.coins}`;
  ui.recapNearMisses.textContent = `${stats.nearMisses ?? 0}`;
  ui.recapBestCombo.textContent = `x${(stats.bestCombo ?? stats.combo).toFixed(1)}`;
  ui.recapMission.textContent = completed
    ? "Missione completata: 750 m di bella guida!"
    : `Ancora ${Math.max(0, MISSION_DISTANCE - distance)} m per completare la missione.`;
  ui.recapMission.classList.toggle("is-complete", completed);
  window.setTimeout(() => ui?.restartBtn.focus(), 0);
}

export function hideGameOver() {
  if (!ui) return;
  setOverlayVisibility(ui.gameOverOverlay, false);
  if (ui.gameOverOverlay.contains(document.activeElement)) {
    (document.activeElement as HTMLElement | null)?.blur();
  }
}

export function updateHUD(
  scoreSystem: ScoreSystem,
  speed: number,
  turboCharge: number
) {
  if (!ui) return;
  const score = Math.floor(scoreSystem.score);
  const distance = Math.max(0, scoreSystem.distance);
  const turboPercent = Math.round(Math.max(0, Math.min(turboCharge, 1)) * 100);
  const missionComplete = distance >= MISSION_DISTANCE;

  ui.score.textContent = `${score}`;
  ui.speed.textContent = `${Math.round(speed * 3)} km/h`;
  ui.streak.textContent = `x${scoreSystem.combo.toFixed(1)}`;
  ui.coins.textContent = `${scoreSystem.coins}`;
  ui.highScore.textContent = `${Math.floor(scoreSystem.highScore)}`;
  ui.menuHighScore.textContent = `${Math.floor(scoreSystem.highScore)}`;
  ui.turboValue.textContent = `${turboPercent}%`;
  setProgress(ui.turboProgress, ui.turboProgressFill, turboPercent, 100);
  setProgress(ui.missionProgress, ui.missionProgressFill, distance, MISSION_DISTANCE);
  ui.missionValue.textContent = missionComplete
    ? "Missione completata!"
    : `${Math.floor(distance)} / ${MISSION_DISTANCE} m`;
  ui.missionProgress.classList.toggle("is-complete", missionComplete);
  ui.turboProgress.classList.toggle("is-ready", turboCharge >= 0.99);

  if (turboCharge >= 0.99) {
    ui.message.textContent = "Turbo pronto — premi Spazio";
    ui.message.style.opacity = "1";
  } else if (turboCharge > 0.3) {
    ui.message.textContent = "Sfiora gli ostacoli e carica il turbo";
    ui.message.style.opacity = "0.82";
  } else {
    ui.message.textContent = "Guida con stile verso il lungomare";
    ui.message.style.opacity = "0.7";
  }
}

export async function saveHighScoreIfNeeded(score: number): Promise<number> {
  const existing = await persistence.getItem(PERSISTENCE_KEYS.HIGH_SCORE);
  const prev = existing ? parseFloat(existing) : 0;
  if (score > prev) {
    await persistence.setItem(
      PERSISTENCE_KEYS.HIGH_SCORE,
      Math.floor(score).toString()
    );
    return score;
  }
  return prev;
}

export function animateHUDPop(
  element: HTMLElement,
  duration = 0.2,
  scale = 1.2
) {
  element.style.transition = "transform 0.12s ease-out";
  element.style.transform = `scale(${scale})`;
  window.setTimeout(() => {
    element.style.transform = "scale(1)";
  }, duration * 1000);
}

export function flashMessage(text: string, duration = 0.8) {
  if (!ui) return;
  ui.message.textContent = text;
  ui.message.style.opacity = "1";
  ui.message.style.transition = "opacity 0.3s ease";
  window.setTimeout(() => {
    if (ui) ui.message.style.opacity = "0.75";
  }, duration * 1000);
}

export function getUI(): UIElements | null {
  return ui;
}
