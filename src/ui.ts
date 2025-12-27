import { ScoreSystem, PERSISTENCE_KEYS } from "./definitions";
import { persistence } from "./libs/persistence";
type UIElements = {
  score: HTMLElement;
  speed: HTMLElement;
  streak: HTMLElement;
  coins: HTMLElement;
  message: HTMLElement;
  highScore: HTMLElement;
  menuOverlay: HTMLElement;
  gameOverOverlay: HTMLElement;
  playBtn: HTMLButtonElement;
  restartBtn: HTMLButtonElement;
  finalScore: HTMLElement;
  bestScore: HTMLElement;
  muteBtn: HTMLButtonElement;
  mobileAccelerate: HTMLButtonElement;
  mobileBrake: HTMLButtonElement;
};

let ui: UIElements | null = null;

export async function initUI(): Promise<UIElements> {
  if (ui) return ui;
  const qs = (id: string) => document.getElementById(id)!;

  ui = {
    score: qs("score-value"),
    speed: qs("speed-value"),
    streak: qs("streak-value"),
    coins: qs("coins-value"),
    message: qs("message"),
    highScore: qs("highscore-value"),
    menuOverlay: qs("menu-overlay"),
    gameOverOverlay: qs("game-over-overlay"),
    playBtn: qs("play-btn") as HTMLButtonElement,
    restartBtn: qs("restart-btn") as HTMLButtonElement,
    finalScore: qs("final-score"),
    bestScore: qs("best-score"),
    muteBtn: qs("mute-btn") as HTMLButtonElement,
    mobileAccelerate: qs("mobile-accelerate") as HTMLButtonElement,
    mobileBrake: qs("mobile-brake") as HTMLButtonElement,
  };

  const savedHigh = await persistence.getItem(PERSISTENCE_KEYS.HIGH_SCORE);
  if (savedHigh) {
    ui.highScore.textContent = savedHigh;
  }

  return ui;
}

export function showMenu() {
  if (!ui) return;
  ui.menuOverlay.style.display = "flex";
  ui.menuOverlay.classList.add("visible");
  ui.gameOverOverlay.classList.remove("visible");
  ui.gameOverOverlay.style.display = "none";
}

export function hideMenu() {
  if (!ui) {
    console.error("hideMenu: ui e null!");
    return;
  }
  ui.menuOverlay.classList.remove("visible");
  ui.menuOverlay.style.display = "none";
}

export function showGameOver(scoreSystem: ScoreSystem) {
  if (!ui) return;
  ui.gameOverOverlay.style.display = "flex";
  ui.gameOverOverlay.classList.add("visible");
  ui.menuOverlay.classList.remove("visible");
  ui.menuOverlay.style.display = "none";
  ui.finalScore.textContent = `Punteggio: ${Math.floor(scoreSystem.score)}`;
  ui.bestScore.textContent = `Record: ${Math.floor(scoreSystem.highScore)}`;
}

export function hideGameOver() {
  if (!ui) return;
  ui.gameOverOverlay.classList.remove("visible");
  ui.gameOverOverlay.style.display = "none";
}

export function updateHUD(
  scoreSystem: ScoreSystem,
  speed: number,
  turboCharge: number
) {
  if (!ui) return;
  ui.score.textContent = `${Math.floor(scoreSystem.score)}`;
  ui.speed.textContent = `${Math.round(speed * 3)} km/h`;
  ui.streak.textContent = `x${scoreSystem.combo.toFixed(1)}`;
  ui.coins.textContent = `${scoreSystem.coins}`;
  ui.highScore.textContent = `${Math.floor(scoreSystem.highScore)}`;

  // Subtle turbo cue via message opacity
  if (turboCharge >= 0.99) {
    ui.message.textContent = "TURBO PRONTO - SPAZIO";
    ui.message.style.opacity = "1";
  } else if (turboCharge > 0.3) {
    ui.message.textContent = "Evita gli ostacoli, carica il turbo";
    ui.message.style.opacity = "0.75";
  } else {
    ui.message.textContent = "Guida la tua Vespa 5 nella notte di citta";
    ui.message.style.opacity = "0.5";
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
  setTimeout(() => {
    element.style.transform = "scale(1)";
  }, duration * 1000);
}

export function flashMessage(text: string, duration = 0.8) {
  if (!ui) return;
  ui.message.textContent = text;
  ui.message.style.opacity = "1";
  ui.message.style.transition = "opacity 0.3s ease";
  setTimeout(() => {
    ui && (ui.message.style.opacity = "0.7");
  }, duration * 1000);
}

export function getUI(): UIElements | null {
  return ui;
}
