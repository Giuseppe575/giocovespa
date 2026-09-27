# Avanzamento · Vespa City Ride

Aggiornamento: 27 settembre 2026.

## Correzioni da fotografie · verificate in locale

- Percorso attuale confermato dall'utente: nessuna deviazione verso Corsini/Ponte Vecchio.
- Sezione del centro adattata alle impronte dei palazzi: spazio riservato ai marciapiedi, carreggiata più stretta/asimmetrica dove serve, nessuna linea centrale nelle vie a singola fila. Auto in fila unica e allargamento progressivo; aggiornati sterzo, pedoni e monete alla stessa geometria.
- Pavimentazione meno chiara e giunti in scala; cordoli ribassati. Foto di confronto alle progressive 105, 173, 445, 784, 1363, 1460 e 1958 m; primo controllo mobile senza errori JS.
- Torre della Zecca corretta secondo MUS.E: 25 m mantenuti, merlatura rimossa, archi murati e copertura piatta ricostruiti. Non una chiesa. Dettagli non misurati restano approssimati.
- Dieci tracciati OSM di percorsi pedonali/ciclabili nel verde del lungarno, senza importare immagini Google. Coordinate in src/data/florence-riverside-paths.json; larghezze e quote stimate.
- 5 gruppi pedonali / 7 stop conservati. Coda singola di quattro auto gestita. Audio invariato.
- Verifica finale: 69 test, TypeScript e build superati, bundle index-Z0e-__uS.js. Giro completo Chromium touch non abbreviato: 2003,4 m, FINISHED, velocità 0, gate motore 0, tutti gli attraversamenti risolti e nessun errore JavaScript. Nessun blocco nella coda a quattro auto.
- Confronto visivo finale alle sette progressive, con traffico in fila unica nel centro e marciapiedi leggibili sui due lati. Una prima cattura è scaduta durante build e prove concorrenti; ripetuta a build conclusa con esito positivo. Non è una verifica su telefono fisico.
- NON ancora pubblicato; sito pubblico rimane PR32. Rimangono facciate e vegetazione generiche, quote/larghezze stimate e viali semplificati: non dichiarare una replica fotografica completa.

## Revisione Firenze · pubblicata

- Pubblicata su richiesta dell'utente per prova mobile: codice 3ee4390, PR #32, merge 6d6547a. GitHub Pages completato con successo (run 36260880233).
- Prova sul sito pubblico in Chromium touch 844×390 e 390×844: bundle index-Do4UDAeM.js confermato, partenza Firenze, avanzamento da 12 a 93 m, comando musica e nessun overflow; nessun errore JavaScript, richiesta fallita o risposta HTTP di errore. Telefono fisico da provare dall'utente.

- Audio/musica approvati dall'utente e lasciati invariati.
- Subagente di ricognizione ha consultato Google Earth e fonti primarie; documentato il distacco reale strada–acqua (circa30–86m). Nessuna immagine proprietaria distribuita.
- Aggiunte superfici fotografiche CC0, finestre/soglie/persiane tridimensionali, terreno ritagliato lungo Arno e acqua ribassata, verde e fogliame, ponte San Niccolò e pescaia da coordinate OSM, 49 impronte di edifici della sponda sud.
- Eliminata foschia troppo vicina a Firenze e introdotta visuale più alta sul lungarno, senza spostare il fiume rispetto alla rotta.
- Pedoni: verifica contro impronte degli edifici e margine del corpo; attraversamento solo su segmenti liberi, niente persone dentro facciate.
- Traffico rado: carrozzerie arrotondate, ruote animate, stop prima delle strisce e distanza dalla Vespa; gestione coda per evitare blocchi alle fermate.
- Su nuova richiesta: tutte le 14 strisce restano, pedoni a passaggi alterni, esclusi anche due punti senza un percorso libero dalle facciate: 5 gruppi effettivi. Primo passaggio libero. I rossi rimangono rispettati, con attesa breve di 2 secondi se non ci sono pedoni: 7 fermate complessive invece di 14. Record Firenze v2 separati dalle vecchie regole.
- Verifica finale locale: 65 test, TypeScript e build superati; prova Chromium touch conferma 14 strisce, 5 gruppi sicuri, nessuno stop per pedoni invisibili, partenza e avanzamento senza errori JavaScript. Bundle index-Do4UDAeM.js; avviso non bloccante >500 kB.
- Prima dell'ultima esclusione dei due attraversamenti senza spazio: giro Firenze completo non abbreviato, 2003,4 m, FINISHED, velocità e gate motore a zero, nessun errore JavaScript. Audio/ripresa/mute e regressione cittadina mobile verificati. L'ultima esclusione è coperta da test mirati, non da un secondo giro completo.
- Schermate locali del lungarno controllate; ancora da approvare visivamente e provare su telefono fisico. Non è fotogrammetria né una replica fotografica edificio per edificio. Revisione ora online.

## Release pubblicata · audio e Firenze

- L'utente conferma che la release online funziona sul proprio cellulare; segnala audio motore intermittente.
- Corretta la gestione di AudioContext sospeso/interrotto, ripresa tramite gesto e rientro nella scheda, timeout/retry senza mute permanente. Tono motore più basso e pulsazione meno profonda.
- Inserita Carefree di Kevin MacLeod, CC BY 4.0, distribuita localmente con crediti, volume basso e comando musica separato.
- 51 test automatici e controllo TypeScript superati; prova browser touch con musica in riproduzione, sospensione/ripresa, musica off con segnale motore presente, mute/unmute e scheda nascosta/visibile: superata, nessun errore JavaScript. Da riprovare sul cellulare dell'utente.
- Nuovo percorso richiesto: Duomo di Santa Maria del Fiore → Arno, senza zone pedonali. Calcolato tracciato da 2003,4 m, acquisito in src/data/florence-route.json. Individuati tre impianti semaforici nei dati comunali.
- Firenze è giocabile e selezionabile: traiettoria geografica reale, impronte/parti di 817 edifici, sponde dell'Arno, cupola/torri semplificate, marciapiedi e persone. Facciate, larghezze e altezze mancanti sono stimate, non una replica fotografica.
- 14 gruppi di attraversamenti OSM/comunali con arresto assistito, attraversamento dopo fermata e ripartenza; fasi rosso/verde a tempi di gioco. Niente ostacoli casuali in Firenze. Record separati dal circuito cittadino.
- Giro completo locale non abbreviato su Chromium touch: 2003,4 m, 14 fermate servite, FINISHED, velocità 0 e gain motore 0; nessun errore JavaScript. Build e pubblicazione in preparazione.
- Regressione cittadina superata con giro abbreviato esclusivamente nel test: arrivo, record, timer congelato, riavvio e ritorno al menu. Firenze in verticale 390×844: partenza touch, nessun overflow. Audio ricontrollato: ripresa dopo sospensione, musica indipendente e mute funzionanti, segnale motore rilevato.
- Build definitiva completata: index-DSWV_2Ub.js e index-c1vRUxT9.css. Resta avviso non bloccante >500 kB. Mobile fisico/Safari da riverificare; nessuna dichiarazione di fotorealismo.
- Pubblicata il 26 settembre 2026: codice 20684d6, PR #31, merge e042e33. Pages built senza errori; smoke pubblico touch: bundle corretto, fermata a 0 km/h, ripartenza e avanzamento su 2003 m, musica disattivabile; nessun errore JS o richiesta fallita.

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
- La verifica automatizzata del 25 settembre era soltanto emulata; il 26 settembre l'utente conferma giocabilità sul proprio telefono, con il problema audio descritto sopra. Modello e browser non comunicati.

## Pubblicazione precedente (archivio)

Release pubblicata tramite PR #30, integrata in master il 25 settembre 2026 alle 22:53 CEST. GitHub Pages usa master:/docs.
https://giuseppe575.github.io/giocovespa/
Commit codice: 0f2083e; merge: fc0aa65. GitHub Pages: build completata senza errori.
Verificato sul sito pubblico il bundle index-B_mMw4D7.js e la partenza mobile touch con Vespa grigia dal lungomare, progresso su 1800 m, nessun errore JavaScript o richiesta fallita. Memoria e avanzamento sono inclusi nei commit.

## Prossimi controlli

- Giro completo su telefoni fisici, soprattutto economici e Safari iOS.
- Profilazione draw call/geometrie per eventuale livello grafico ridotto.
- Lo stile resta 3D procedurale rifinito, non fotorealismo da scansioni.
