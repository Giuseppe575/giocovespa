
import { initGame, manualStartGame } from "./game";

// Imposta handler SUBITO quando il DOM è pronto
const setupButtonsImmediate = () => {
  const playBtn = document.getElementById("play-btn") as HTMLButtonElement | null;
  const restartBtn = document.getElementById("restart-btn") as HTMLButtonElement | null;

  // Se l'utente tocca prima che l'init sia finita, accodiamo lo start
  let gameReady = false;
  let queuedStart = false;

  const handleStart = () => {
    if (!gameReady) {
      queuedStart = true;
      console.log("Start richiesto prima che l'init sia completata: accodo.");
      return;
    }
    manualStartGame();
  };

  if (playBtn) {
    playBtn.disabled = true;
    playBtn.textContent = "CARICAMENTO...";
    // Usa addEventListener che è più affidabile su iOS
    playBtn.addEventListener(
      "touchstart",
      (e) => {
        e.preventDefault();
        handleStart();
      },
      { passive: false, capture: true }
    );

    playBtn.addEventListener("click", handleStart, { capture: true });
  }

  if (restartBtn) {
    restartBtn.disabled = true;
    restartBtn.addEventListener(
      "touchstart",
      (e) => {
        e.preventDefault();
        handleStart();
      },
      { passive: false, capture: true }
    );

    restartBtn.addEventListener("click", handleStart, { capture: true });
  }

  // Funzione da richiamare dopo l'init per riattivare i pulsanti
  const markReady = () => {
    gameReady = true;
    if (playBtn) {
      playBtn.disabled = false;
      playBtn.textContent = "GIOCA";
    }
    if (restartBtn) {
      restartBtn.disabled = false;
    }
    if (queuedStart) {
      queuedStart = false;
      manualStartGame();
    }
  };

  return { markReady };
};

// Inizializza il gioco
const init = async () => {
  // Setup buttons prima di tutto
  const buttons = setupButtonsImmediate();

  // Poi inizializza il gioco
  try {
    await initGame();
    buttons?.markReady();
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
