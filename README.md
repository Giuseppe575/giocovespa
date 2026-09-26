# Vespa City Ride

Due esperienze: Firenze–Arno da 2003,4 m su tracciato geografico reale, oppure il circuito cittadino da 1800 m attraverso centro storico, lungomare, mercato e collina.

[Gioca online](https://giuseppe575.github.io/giocovespa/)

## Come giocare

Scegli la Vespa rossa, bianca o grigia e il percorso. All'arrivo il mezzo si ferma: punteggio, tempo e record vengono salvati nel browser, separatamente per Firenze e circuito cittadino.

Firenze parte da Via del Proconsolo, accanto al Duomo, attraversa Via Ghibellina, Giovine Italia e Piazza Piave, proseguendo sui lungarni Pecori Giraldi e del Tempio. Frenata automatica prima di semafori/strisce: attendi i pedoni, poi riparti. Il tempo include le attese. Non ci sono ostacoli casuali in questa modalità. Il circuito cittadino conserva traffico e difficoltà progressiva.

Geometria stradale, impronte degli edifici, sponde e attraversamenti derivano da OpenStreetMap; tre impianti semaforici dai dati comunali. Facciate, altezze mancanti, larghezze e fasi semaforiche sono ricostruzioni di gioco: non una scansione fotografica né un navigatore.

- Tastiera: A/D o frecce per sterzare; W/S o frecce su/giù per accelerare/frenare; Spazio per turbo carico.
- Mobile: trascina sulla strada per sterzare e tieni premuti i pedali. Sterzo e acceleratore funzionano anche con due dita. Tocca Turbo quando carico.
- Orizzontale consigliato; menu e risultati funzionano anche in verticale.
- Nascondere la scheda sospende la corsa e silenzia il motore.
- Musica Carefree di Kevin MacLeod (CC BY 4.0), disattivabile separatamente; mute generale per tutto l'audio. Un tocco riattiva l'audio dopo un'interruzione del browser.

## Sviluppo

Servono Node.js e npm. Il sorgente TypeScript richiede Vite: non aprire direttamente index.html con un semplice server statico.

```sh
npm ci
npm run dev
```

Aprire l'indirizzo indicato da Vite. Per controllare e compilare:

```sh
npm run typecheck
npm test
npm run build
```

Il build viene scritto in docs/. GitHub Pages pubblica **master:/docs**. Includere gli asset compilati nel commit della release.

## Struttura

- src/core/: stato partita, punteggi, difficoltà, circuito, fine giro e test.
- src/visuals/: strada curva, quartieri, persone, Vespa, materiali e traguardo.
- src/game.ts: coordinamento simulazione, audio e controlli.
- src/ui.ts, index.html, src/styles/: menu, HUD e riepilogo responsive.
- [STATUS.md](STATUS.md): avanzamento e verifiche.
- [MEMORY.md](MEMORY.md): preferenze e decisioni da conservare.
- [ASSET_LICENSES.md](ASSET_LICENSES.md): provenienza degli asset.

Three.js, TypeScript, Vite e Vitest. Record conservati localmente, nessun account richiesto. Le prove mobile emulate non sostituiscono quelle su dispositivi fisici.
