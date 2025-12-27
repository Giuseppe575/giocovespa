# Stato modifiche Vespa City Ride

## Ultimo aggiornamento
- Curve: pattern a blocchi (rettilineo -> curva lunga -> rettilineo) con progress basato sulla distanza.
- Parametri attuali:
  - curveAmplitude: 1.6
  - curveSpeed: 1.4
  - curveStraightLength: 80
  - curveLength: 180
- Rampe e monete: attive e visibili.
- Audio: creato/riattivato solo dopo gesto utente.
- Favicon: placeholder in root e in docs/.

## Build e deploy
- Output Vite pubblicato in `docs/` per GitHub Pages.
- Ultimo bundle: `docs/assets/index-B5uLrJLu.js`.

## Problema aperto
- L’utente segnala che non vede ancora le curve sulla pagina pubblicata.
- Azione suggerita: hard refresh o disable cache; se persiste, calibrare frequenza/ampiezza in base al tempo di gioco.

## Note operative
- Repo remoto segnala spostamento a: https://github.com/Giuseppe575/giocovespa.git
