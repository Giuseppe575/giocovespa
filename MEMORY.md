# Memoria del progetto

## Richiesta corrente · 26 settembre 2026

- Utente conferma giocabilità su cellulare; audio motore talvolta assente. Correzioni audio e musica pubblicate con Firenze il 26 settembre 2026; da riprovare sul telefono fisico.
- Musica scelta: Carefree, Kevin MacLeod, CC BY 4.0; crediti menu e public/audio/CREDITS.md. Pulsante separato musica, mute generale invariato.
- Il percorso Santa Maria Novella–Palazzo Vecchio è SUPERATO. Partenza confermata: Duomo / Santa Maria del Fiore, sulla strada carrabile adiacente; percorso circa 2 km verso e lungo l'Arno, senza zone pedonali.
- Richiesta forte: scenario fedele alla realtà, marciapiedi con persone, attraversamenti e semafori reali; Vespa si ferma al rosso e lascia passare i pedoni.
- Percorso acquisito: Proconsolo → Ghibellina → Giovine Italia → Piazza Piave → Pecori Giraldi → Tempio, 2003,4 m. Dati e attribuzione in src/data/florence-route.json; piano e verifiche ancora necessarie in FIRENZE_PLAN.md.
- Firenze è ora integrato nel menu: 2003,4 m, curve geografiche, 817 impronte/parti di edifici OSM, Arno, 14 attraversamenti raggruppati e fermate assistite. Record separati dal circuito cittadino. Nessun ostacolo casuale in Firenze.
- Non presentare le facciate procedurali come repliche fotografiche: altezze mancanti, larghezze stradali e tempi semaforici sono ricostruiti. Il dataset semaforico indica impianti, non linee d'arresto o tempi. La verifica preliminare delle aree pedonali non certifica ZTL/cantieri.
- L'utente autorizza completamento del tratto Firenze e pubblicazione. Seguire RELEASE_CHECKLIST.md e registrare l'esito effettivo, senza confondere build locale e sito pubblico.

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

## Ultima consegna verificata

26 settembre 2026: PR #31 integrata e Pages pubblicato. Codice 20684d6, merge e042e33; asset pubblico index-DSWV_2Ub.js. 51 test, TypeScript e build superati; giro completo Firenze 2003,4 m con 14 fermate e arrivo silenzioso. Smoke pubblico mobile touch: arresto/ripartenza e musica off, nessun errore JS o richiesta fallita. Vedere STATUS.md e RELEASE_CHECKLIST.md per test e limiti. La precedente release PR #30 resta il riferimento di ripristino (master 9fb1648).
