# Avanzamento · Vespa City Ride

Aggiornamento: 25 settembre 2026.

## Completato

- Circuito da 1800 m con curve condivise da strada, scenario e traffico.
- Centro a due corsie con restringimenti graduali, bar e ristoranti aperti, clienti seduti e pedoni; piazza con chiesa e fontana.
- Lungomare con mare, spiaggia e palme; mercato e collina. Partenza selezionabile.
- Vespa classica e guidatore originali seguendo il riferimento utente: casco chiaro, giacca petrolio, sella scura e cromature. Scelta rosso/bianco/grigio persistente.
- Traffico in movimento, difficoltà progressiva e corsia libera nei gruppi di ostacoli.
- FINISH a tutta carreggiata: mezzo fermo, motore silenzioso e risultati congelati dopo il giro.
- Risultati: punti/record, distanza, monete, near-miss, combo, tempo e miglior giro. Record tempo aggiornato solo completando il circuito; riavvio e ritorno al menu.
- Motore silenziato anche dopo incidente, mute e scheda nascosta.
- Touch con cattura puntatore, sterzo indipendente dal secondo dito, rilascio/cancellazione senza comandi bloccati.

## Verifiche della release

- TypeScript e build Vite superati; 39 test Vitest superati.
- Rimane avviso non bloccante bundle JS >500 kB.
- Chromium con emulazione mobile/touch, 844×390 e 390×844: partenza, arrivo, risultati, riavvio e menu verificati, nessun errore JavaScript.
- Integrazione arrivo con giro abbreviato a 60 m SOLO nella risposta HTTP di sviluppo intercettata dal test: codice e build pubblicati restano a 1800 m. Verificati velocità 0, gate motore 0, tempo congelato e record salvato.
- Multitouch browser emulato: accelerazione + sterzo contemporanei, rilascio, freno/cancellazione e pressione/rilascio turbo.
- Nessuna prova su iPhone/Android fisici: fluidità, consumo e Safari iOS da confermare sul dispositivo.

## Pubblicazione

Release tramite PR #30 verso master; GitHub Pages usa master:/docs.
https://giuseppe575.github.io/giocovespa/
Completamento deploy da confermare con stato Pages e asset serviti dopo push/merge.

## Prossimi controlli

- Giro completo su telefoni fisici, soprattutto economici e Safari iOS.
- Profilazione draw call/geometrie per eventuale livello grafico ridotto.
- Lo stile resta 3D procedurale rifinito, non fotorealismo da scansioni.
