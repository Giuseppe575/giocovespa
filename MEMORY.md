# Memoria del progetto

## Preferenze confermate

- Italiano, comunicazione non tecnica; aggiornare memoria e avanzamento prima di commit/push.
- Gioco online e mobile. Usare agenti/modelli economici quando utili, limitando consumi.
- No enormi pannelli sulle facciate: locali aperti, tavolini, persone; centro con due corsie, piazza e chiesa.
- Centro, lungomare (spiaggia, mare, palme), mercato e collina; curve riconoscibili, difficoltà graduale e ostacoli evitabili.
- Ultimo riferimento Vespa prevalente: classica rossa, casco chiaro, giacca petrolio; scelta rosso/bianco/grigio.
- Giro finito: FINISH largo quanto strada, arresto mezzo/audio, riepilogo e record tempo.

## Decisioni e punti di ingresso

- src/core/race.ts: 1800 m, cronometro, limite finale, formattazione e validazione record.
- src/core/road-path.ts: traiettoria periodica, coordinate locali, transizione due/tre corsie.
- src/visuals/circuit-renderer.ts: finestra limitata di strada/scenari, pedoni e arrivo un giro dopo la partenza scelta.
- classic-scooter.ts e player-model.ts: modelli originali, nessun GLB remoto né immagine personale distribuita.
- game.ts coordina loop/input/collisioni/audio/risultati. Stati MENU, RUNNING, GAME_OVER, FINISHED.
- engine-gate.ts: chiudere il gain finale non modulato, non soltanto quello precedente modulato dall'LFO.
- LocalStorage: punteggio, mute, vespa_body_color, vespa_best_lap_seconds. Nessuna classifica server.
- STATUS.md registra avanzamento/verifiche; PRD.md requisiti; VISUAL_DESIGN.md e ASSET_LICENSES.md direzione e provenienza.

## Consegna e cautele

- Giuseppe575/giocovespa, PR #30, codex/vespa-modernization verso master.
- Pages legge master:/docs, NON main. Compilare con npm run build e includere gli asset di docs.
- Controlli: npm run typecheck, npm test, npm run build; push/merge, stato Pages, hash pubblici e smoke test.
- Il file personale non tracciato palazzigrafica.png resta intatto e fuori dai commit.
- QA locale in output/playwright/, ignorato da Git. I test con giro abbreviato intercettano solo risposte di sviluppo: mai trasferire l'abbreviazione in produzione.
- Prove mobile emulate non equivalgono a prova hardware o certificazione Safari iOS.
