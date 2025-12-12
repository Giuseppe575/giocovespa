
import { initGame, manualStartGame } from "./game";

// Setup handlers UNA sola volta
let buttonsSetup = false;

const setupButtons = () => {
  if (buttonsSetup) return;
  buttonsSetup = true;

  const playBtn = document.getElementById('play-btn');
  const restartBtn = document.getElementById('restart-btn');

  if (playBtn) {
    playBtn.ontouchstart = (e) => {
      e.preventDefault();
      manualStartGame();
    };
    playBtn.onclick = () => manualStartGame();
  }

  if (restartBtn) {
    restartBtn.ontouchstart = (e) => {
      e.preventDefault();
      manualStartGame();
    };
    restartBtn.onclick = () => manualStartGame();
  }
};

const startGame = async () => {
  try {
    await initGame();
    setupButtons();
  } catch (err) {
    console.error("Errore:", err);
  }
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", startGame, { once: true });
} else {
  startGame();
}
