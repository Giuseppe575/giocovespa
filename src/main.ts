
import { initGame } from "./game";

// Debug per iOS - mostra che lo script è caricato
console.log("main.ts caricato");

const startGame = () => {
  console.log("startGame() chiamato");
  initGame().catch((err) => {
    console.error("Errore di inizializzazione del gioco:", err);
    alert("Errore caricamento gioco: " + (err as Error).message);
  });
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", startGame, { once: true });
} else {
  startGame();
}
