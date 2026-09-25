# Checklist pubblicazione · 25 settembre 2026

## Prima del deploy

- [x] Revisione locale e separazione del file personale non tracciato.
- [x] 39 test automatici, controllo TypeScript e build di produzione.
- [x] Prove locali: quartieri, colori, audio incidente, arrivo, risultati e riavvio.
- [x] Layout e touch mobile emulati; limiti hardware documentati in STATUS.
- [x] Aggiornati memoria, avanzamento e istruzioni di avvio.
- [x] Nessuna migrazione database o dipendenza da modelli remoti/segreti.
- [ ] Push della release, PR #30 pronta e merge in master.
- [ ] Build Pages completata e asset pubblici corrispondenti al build locale.
- [ ] Smoke test pubblico: caricamento, scelta colore e partenza.

## Ripristino

Se la pagina pubblica non si avvia, mancano asset o falliscono comandi fondamentali, revertire il commit di merge della release su master e attendere Pages. Non usare reset distruttivi né cancellare dati locali degli utenti. Base master precedente: 541cb3c.

Non è presente telemetria centralizzata: controllo post-deploy tramite stato Pages, HTTP e browser. Non viene dichiarato monitoraggio continuativo non eseguito.
