
import { initGame } from "./game";

const startGame = () => {
  initGame().catch((err) => {
    console.error("Errore di inizializzazione del gioco:", err);
  });
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", startGame, { once: true });
} else {
  startGame();
}
