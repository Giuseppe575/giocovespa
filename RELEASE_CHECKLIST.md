# Checklist pubblicazione · 26 settembre 2026

## Release frame 1–51 e Giovine Italia · 28 settembre 2026

- [x] Pubblicazione esplicitamente richiesta dopo approvazione visiva dell’utente.
- [x] 85 test, TypeScript, build index-CRL21IEO.js e viste desktop/mobile senza errori.
- [x] Giro finale completo 2003,4 m: FINISHED, velocità 0, motore 0, tutti i 14 attraversamenti risolti, nessun errore JavaScript.
- [x] Memoria, avanzamento, provenienza e limiti aggiornati. Frame personali e palazzigrafica.png esclusi dalla release.
- [x] Codice d2d501d, PR33 integrata su master (62da1a4); Pages run 36419684214 completato con successo.
- [x] Bundle index-CRL21IEO.js confermato sul sito pubblico, partenza/avanzamento touch 26→85 m, comando musica e layout 844x390 / 390x844; nessun overflow, errore JavaScript, errore HTTP o richiesta fallita. Non è una prova su telefono fisico.
- Ripristino: revert del merge di questa release, base pubblica precedente 6d6547a (PR32). Nessuna migrazione o cancellazione dei record locali. Prova hardware da eseguire dai tester.


## Revisione Firenze: scenario, traffico e meno fermate

- [x] Pubblicazione richiesta dall'utente per prova su cellulare.
- [x] Codice 3ee4390: 65 test e TypeScript superati; build index-Do4UDAeM.js.
- [x] Prova touch locale: 14 strisce conservate, 5 gruppi di pedoni sicuri e 7 fermate complessive; nessun errore JavaScript.
- [x] Giro completo verificato prima dell'ultima esclusione di due passaggi senza spazio; esclusione verificata con test mirati.
- [x] Audio invariato, licenze CC0 e provenienza dati registrate; file personale palazzigrafica.png escluso.
- [x] Push, PR32 integrata su master (6d6547a), Pages built senza errori, run 36260880233 success.
- [x] Bundle index-Do4UDAeM.js e asset pubblici confermati; touch 844×390 e 390×844, partenza/avanzamento 12→93 m, musica off, nessun overflow o errore JS/HTTP. Prova su telefono fisico affidata all'utente.
- Ripristino: revert del merge di questa revisione se caricamento o comandi fondamentali falliscono; precedente release PR31. Nessuna migrazione. Nessuna telemetria centralizzata: verifica puntuale, non monitoraggio continuativo.

## Release Firenze e audio

- [x] 51 test automatici e TypeScript superati.
- [x] Giro Firenze completo, senza abbreviazioni: 2003,4 m, 14 attraversamenti, arrivo con velocità/audio motore a zero, nessun errore JS.
- [x] Fonti, licenze musica/dati, limiti della ricostruzione e memoria/avanzamento aggiornati.
- [x] Regressione cittadina (giro abbreviato solo nel test), arrivo, riavvio, menu e mobile portrait/landscape; nessun errore JS o overflow.
- [x] Audio: musica, recupero da sospensione, motore presente con musica spenta, mute e scheda nascosta/visibile.
- [x] Build definitiva: index-DSWV_2Ub.js, index-c1vRUxT9.css; avviso non bloccante bundle >500 kB.
- [x] Commit 20684d6, push, PR #31 integrata (e042e33); Pages built senza errori.
- [x] Browser pubblico touch: hash index-DSWV_2Ub.js, fermata 0 km/h, ripartenza 30 km/h e avanzamento su 2003 m, musica off; nessun errore JS/richiesta fallita.
- Ripristino previsto: revert del nuovo merge di release su master; base pubblica precedente 9fb1648. Nessuna migrazione o segreto, dati utente locali conservati. Non includere palazzigrafica.png.

## Archivio release precedente · 25 settembre

## Prima del deploy

- [x] Revisione locale e separazione del file personale non tracciato.
- [x] 39 test automatici, controllo TypeScript e build di produzione.
- [x] Prove locali: quartieri, colori, audio incidente, arrivo, risultati e riavvio.
- [x] Layout e touch mobile emulati; limiti hardware documentati in STATUS.
- [x] Aggiornati memoria, avanzamento e istruzioni di avvio.
- [x] Nessuna migrazione database o dipendenza da modelli remoti/segreti.
- [x] Push 0f2083e; PR #30 integrata in master (fc0aa65).
- [x] Build Pages completata senza errori; pagina pubblica usa index-B_mMw4D7.js del build locale.
- [x] Smoke test pubblico mobile touch: caricamento, Vespa grigia, partenza dal lungomare, avanzamento su 1800 m; nessun errore JS o richiesta fallita.

## Ripristino

Se la pagina pubblica non si avvia, mancano asset o falliscono comandi fondamentali, revertire il commit di merge della release su master e attendere Pages. Non usare reset distruttivi né cancellare dati locali degli utenti. Base master precedente: 541cb3c.

Non è presente telemetria centralizzata: controllo post-deploy tramite stato Pages, HTTP e browser. Non viene dichiarato monitoraggio continuativo non eseguito.
