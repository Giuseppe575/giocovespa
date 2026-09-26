# Checklist pubblicazione · 26 settembre 2026

## Release Firenze e audio

- [x] 51 test automatici e TypeScript superati.
- [x] Giro Firenze completo, senza abbreviazioni: 2003,4 m, 14 attraversamenti, arrivo con velocità/audio motore a zero, nessun errore JS.
- [x] Fonti, licenze musica/dati, limiti della ricostruzione e memoria/avanzamento aggiornati.
- [x] Regressione cittadina (giro abbreviato solo nel test), arrivo, riavvio, menu e mobile portrait/landscape; nessun errore JS o overflow.
- [x] Audio: musica, recupero da sospensione, motore presente con musica spenta, mute e scheda nascosta/visibile.
- [x] Build definitiva: index-DSWV_2Ub.js, index-c1vRUxT9.css; avviso non bloccante bundle >500 kB.
- [ ] Commit/push e pubblicazione Pages; verifica HTTP e browser pubblico.
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
