
import { initGame, manualStartGame } from "./game";

// Imposta handler SUBITO quando il DOM è pronto
const setupButtonsImmediate = () => {
  const playBtn = document.getElementById('play-btn');
  const restartBtn = document.getElementById('restart-btn');

  // Funzione che gestisce il click/touch
  const handleStart = () => {
    manualStartGame();
  };

  if (playBtn) {
    // Usa addEventListener che è più affidabile su iOS
    playBtn.addEventListener('touchstart', (e) => {
      e.preventDefault();
      handleStart();
    }, { passive: false, capture: true });

    playBtn.addEventListener('click', handleStart, { capture: true });
  }

  if (restartBtn) {
    restartBtn.addEventListener('touchstart', (e) => {
      e.preventDefault();
      handleStart();
    }, { passive: false, capture: true });

    restartBtn.addEventListener('click', handleStart, { capture: true });
  }
};

// Inizializza il gioco
const init = async () => {
  // Setup buttons prima di tutto
  setupButtonsImmediate();

  // Poi inizializza il gioco
  try {
    await initGame();
  } catch (err) {
    console.error("Errore inizializzazione:", err);
  }
};

// Avvia quando il DOM è pronto
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init, { once: true });
} else {
  init();
}
