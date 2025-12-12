
import { initGame, manualStartGame } from "./game";

// Aggiungi handler al pulsante SUBITO, prima di tutto
const setupButton = () => {
  const playBtn = document.getElementById('play-btn');
  const restartBtn = document.getElementById('restart-btn');

  if (playBtn) {
    // Rimuovi qualsiasi handler esistente e aggiungi il nuovo
    playBtn.onclick = null;
    playBtn.ontouchstart = null;

    const startHandler = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
      manualStartGame();
    };

    playBtn.addEventListener('touchstart', startHandler, { passive: false });
    playBtn.addEventListener('click', startHandler);
  }

  if (restartBtn) {
    const restartHandler = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
      manualStartGame();
    };

    restartBtn.addEventListener('touchstart', restartHandler, { passive: false });
    restartBtn.addEventListener('click', restartHandler);
  }
};

const startGame = async () => {
  try {
    // Setup pulsanti prima di tutto
    setupButton();

    await initGame();

    // Setup di nuovo dopo initGame nel caso siano stati sovrascritti
    setupButton();
  } catch (err) {
    console.error("Errore:", err);
  }
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", startGame, { once: true });
} else {
  startGame();
}
