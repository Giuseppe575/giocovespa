# Vespa City Ride

Un giro di 1800 m attraverso centro storico, lungomare, mercato e collina: curve, traffico, monete e turbo, fino a FINISH.

[Gioca online](https://giuseppe575.github.io/giocovespa/)

## Come giocare

Scegli la Vespa rossa, bianca o grigia e il quartiere di partenza. Completa il giro evitando gli ostacoli. All'arrivo il mezzo si ferma: punteggio, tempo e record vengono salvati nel browser. Il traguardo si trova sempre a 1800 m dalla partenza scelta.

- Tastiera: A/D o frecce per sterzare; W/S o frecce su/giù per accelerare/frenare; Spazio per turbo carico.
- Mobile: trascina sulla strada per sterzare e tieni premuti i pedali. Sterzo e acceleratore funzionano anche con due dita. Tocca Turbo quando carico.
- Orizzontale consigliato; menu e risultati funzionano anche in verticale.
- Nascondere la scheda sospende la corsa e silenzia il motore.

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
