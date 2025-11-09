
import { initGame } from "./game";

initGame().catch((err) => {
  console.error("Errore di inizializzazione del gioco:", err);
});
