
import { initGame, manualStartGame } from "./game";

let initFailed = false;
let isInitializing = false;
let buttonsController: ReturnType<typeof setupButtonsImmediate> | null = null;

// Imposta handler SUBITO quando il DOM è pronto
function setupButtonsImmediate() {
  const playBtn = document.getElementById("play-btn") as HTMLButtonElement | null;
  const restartBtn = document.getElementById("restart-btn") as HTMLButtonElement | null;
  let startRequested = false;

  // Se l'utente tocca prima che l'init sia finita, accodiamo lo start
  let gameReady = false;
  let queuedStart = false;
  let safetyReleased = false;
  const menuOverlay = document.getElementById("menu-overlay");
  const gameOverOverlay = document.getElementById("game-over-overlay");

  const hideOverlays = () => {
    if (menuOverlay) {
      menuOverlay.classList.remove("visible");
      (menuOverlay as HTMLElement).style.display = "none";
    }
    if (gameOverOverlay) {
      gameOverOverlay.classList.remove("visible");
      (gameOverOverlay as HTMLElement).style.display = "none";
    }
  };

  const handleStart = () => {
    startRequested = true;
    // Nascondi subito gli overlay, anche se il gioco non è ancora pronto
    hideOverlays();

    // Se l'init precedente è fallito, riprova a inizializzare
    if (initFailed) {
      queuedStart = true;
      if (!isInitializing) {
        init();
      }
      return;
    }

    if (!gameReady) {
      queuedStart = true;
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
    safetyReleased = true;
    gameReady = true;
    initFailed = false;
    if (playBtn) {
      playBtn.disabled = false;
      playBtn.textContent = "GIOCA";
    }
    if (restartBtn) {
      restartBtn.disabled = false;
    }
    if (startRequested) {
      hideOverlays();
    }
    if (queuedStart) {
      queuedStart = false;
      hideOverlays();
      manualStartGame();
    }
  };

  const markFailed = () => {
    gameReady = false;
    initFailed = true;
    safetyReleased = true;
    if (playBtn) {
      playBtn.disabled = false;
      playBtn.textContent = "RIPROVA";
    }
    if (restartBtn) {
      restartBtn.disabled = false;
    }
  };

  // Fallback di sicurezza: se init dovesse bloccarsi, riattiva comunque il pulsante
  const safetyTimeout = window.setTimeout(() => {
    if (!safetyReleased) {
      console.warn("Timeout di sicurezza: riattivo il pulsante GIOCA.");
      markReady();
    }
  }, 4000);

  // Permette di cancellare il timeout quando non serve più
  const clearSafety = () => {
    window.clearTimeout(safetyTimeout);
  };

  return { markReady, clearSafety, markFailed };
}

const getButtonsController = () => {
  if (!buttonsController) {
    buttonsController = setupButtonsImmediate();
  }
  return buttonsController;
};

// Inizializza il gioco
async function init() {
  // Setup buttons prima di tutto
  const buttons = getButtonsController();
  isInitializing = true;
  initFailed = false;

  // Poi inizializza il gioco
  try {
    await initGame();
    buttons?.markReady();
  } catch (err) {
    console.error("Errore inizializzazione:", err);
    // In caso di errore, mostra Riprova e riprova l'init alla prossima pressione
    buttons?.markFailed();
  } finally {
    isInitializing = false;
    buttons?.clearSafety();
  }
}

// Avvia quando il DOM è pronto
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init, { once: true });
} else {
  init();
}
