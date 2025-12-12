
// Mostra subito che lo script parte
try {
  console.log("main.ts - Script iniziato");
} catch (e) {
  // ignore
}

import { initGame } from "./game";

const startGame = async () => {
  try {
    console.log("startGame() chiamato");
    await initGame();
    console.log("initGame() completato con successo");
  } catch (err) {
    console.error("Errore di inizializzazione del gioco:", err);
    // Mostra errore su schermo
    const errorDiv = document.createElement('div');
    errorDiv.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:red;color:white;padding:20px;z-index:9999;font-size:16px;max-width:90%;text-align:center;';
    errorDiv.textContent = "Errore: " + (err as Error).message;
    document.body.appendChild(errorDiv);
  }
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", startGame, { once: true });
} else {
  startGame();
}
