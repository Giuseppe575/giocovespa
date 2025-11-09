import { initGame } from "./game.js";
initGame().catch((err) => {
    console.error("Errore di inizializzazione del gioco:", err);
});
