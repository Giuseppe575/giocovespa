# Architettura di modernizzazione

## Stato corrente

`game.ts` orchestra stato, loop, input, audio, spawn, collisioni, scoring e camera; `entities.ts` contiene renderer e quasi tutte le factory procedurali. Il sistema funziona, ma non ha lifecycle/dispose, test o confini di dominio.

## Strategia

Evoluzione per strangler pattern: estrarre logica pura e servizi uno alla volta, mantenendo il gioco avviabile dopo ogni commit.

```text
DOM UI <— typed events —> GameApp
                         ├─ GameStateMachine
                         ├─ InputManager
                         ├─ RunModel
                         ├─ SpawnDirector
                         ├─ WorldSystem
                         ├─ CollisionSystem
                         ├─ AudioManager
                         └─ RendererManager (Three.js)
```

## Prima slice

- introdurre `src/core/` per stato e logica di run testabili senza WebGL;
- aggiungere typecheck e unit test;
- mantenere `game.ts` come adapter temporaneo;
- far transitare UI e gameplay su snapshot espliciti invece di mutare il DOM da sistemi profondi;
- preparare lifecycle idempotente e dispose nella slice successiva.

## Regole

- niente nuove variabili globali non incapsulate;
- casualità iniettata nei nuovi sistemi;
- funzioni di dominio pure quando possibile;
- Three.js confinato a rendering/world/entity;
- UI DOM ignora oggetti Three.js;
- ogni nuova meccanica critica ha almeno un test unitario.
