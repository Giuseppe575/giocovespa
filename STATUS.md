# Avanzamento · Vespa City Ride

## Pubblicazione approvata · 28 settembre 2026

- L’utente approva la versione fino a Giovine Italia e richiede la pubblicazione per test esterni.
- Versione candidata: build index-CRL21IEO.js; 85 test, TypeScript, confronto desktop/mobile e giro completo 2003,4 m superati. Nessuna modifica al codice dopo queste verifiche.
- Include tutte le correzioni locali successive a PR32: impronte mancanti, marciapiedi, facciate Proconsolo/Ghibellina e viale a tre corsie.
- Pubblicazione GitHub Pages e controllo pubblico in corso. Le sezioni precedenti “solo locale” descrivono lo stato al momento dei rispettivi interventi.


Aggiornamento: 28 settembre 2026.

## Ghibellina e Giovine Italia dai frame 32–51 · anteprima locale

- Archivio utente esaminato integralmente: frame 32–45 vie storiche, 46 imbocco del viale, 47–51 viale alberato verso Torre della Zecca. Riferimenti rielaborati, non un rilievo metrico; nessun pixel incluso negli asset distribuiti.
- Estesi i dettagli delle facciate da 420 a circa 1188 m, con persiane, portoni, vetrine, pluviali e tende. Lastre dopo il tratto già lavorato, transizione all'asfalto all'uscita di Ghibellina. Gli intervalli sono una ricostruzione artistica, non una geolocalizzazione certificata dei frame.
- Giovine Italia: tre corsie di gioco da circa 1234 m attraverso il viale, carreggiata fino a 10,2 m, due linee tratteggiate, traffico distribuito lateralmente con apertura graduale e ritorno a due corsie verso il lungarno. Larghezze e schema sono stimati dai riferimenti, non segnaletica reale verificata.
- 22 alberi con fogliame originale e 22 auto nei parcheggi laterali; posizionamento controllato contro impronte degli edifici e attraversamenti, lasciando libera la fascia pedonale interna. Modelli statici uniti per materiale. Nessun nuovo spartitraffico inventato dalla sola prospettiva delle immagini.
- Fronte sinistro del viale: due edifici OSM con altezza originariamente stimata a 14 m ridotti a 7,8 m come interpretazione visiva, base in mattoni originale e aperture superiori rade. Impronte conservate; altezza non misurata.
- 85 test e TypeScript superati. Build index-CRL21IEO.js, 837,85 kB / gzip 225,62 kB; consueto avviso non bloccante oltre 500 kB.
- Verifica browser: nove progressive fra 85 e 1390 m e formato verticale 390×844 a 1320 m, senza errori JavaScript o shader. Screenshot output/playwright/avenue-*.png. Ultime tre viste del viale e mobile ripetute dopo la correzione del fronte sinistro, ancora senza errori. Giro definitivo completo non abbreviato superato: FINISHED a 2003,4 m, velocità 0, gate motore 0, tutti i 14 attraversamenti risolti, nessun errore JavaScript. La precedente prova interrotta dal ricaricamento è stata sostituita da questo giro sulla revisione finale.
- Prima parte Proconsolo conservata; audio e musica non modificati. Nessuna pubblicazione. Modelli di auto/persone e facciate ancora semplificati: non è una replica fotorealistica dei frame. Prova su telefono fisico ancora necessaria.

## Via Ghibellina dai nuovi frame · verificata solo in locale

- Prima parte Proconsolo approvata dall'utente e mantenuta. Gli 11 nuovi riferimenti guidano il tratto dopo la curva, circa 235–420m: Bargello con muratura e aperture rade, palazzi con basi in bugnato, portoni ad arco, inferriate e piccole insegne. Selezione per fronte per non alterare il lato Proconsolo degli edifici d'angolo.
- Asfalto dopo la svolta, con transizione a 230–238m e rimozione del rilievo delle lastre; tracciato, impronte e marciapiedi invariati. Non è ancora fotorealismo: vegetazione, persone, veicoli e dettagli commerciali restano semplificati; i frame non vengono distribuiti.
- Risolto il crash delle geometrie miste negli archi con conversione dei soli gruppi incompatibili. 81 test automatici, TypeScript e build superati. Build index-eCZ76GL_.js, 834,49kB / gzip 224,36kB; resta avviso non bloccante oltre 500kB.
- Controllo finale browser a 85/205/240/265/315/365/410m e mobile verticale 390×844 a 280m: nessun errore JavaScript o console. Screenshot in output/playwright/ghibellina-*.png. Emulazione, non prova su telefono fisico.
- Giro completo non abbreviato sulla revisione finale: FINISHED a 2003,4m, velocità 0, gate motore 0, 14 attraversamenti risolti, nessun errore JavaScript. Questa prova chiude la verifica dell'arrivo rimasta pendente nel primo prototipo sotto. Programma 5 gruppi / 7 fermate e audio/musica invariati.
- Anteprima disponibile su http://127.0.0.1:5174/. Nessun push/pubblicazione; pubblico sempre PR32.

## Prototipo dai frame · solo locale

- Frame_01–08 dell'utente: obiettivo estetico, non texture distribuite né rilievo certificato. Richiesta: avvicinare il primo tratto alla qualità delle immagini; non dichiarare raggiunta una replica fotografica.
- Recuperati 66 edifici OSM multipolygon e 94 cortili; risolti i grandi vuoti dovuti a Palazzo Nonfinito, Borghese e altri palazzi mancanti. Geometria incompleta di 13 relazioni segnalata dal generatore e non aggiunta.
- Nuovi dettagli tridimensionali nel tratto Proconsolo: portoni ad arco, inferriate, cornici, persiane a lamelle, gronde, lanterne e vetrine. Lastre stradali e bugnato originali; facciate specializzate per Nonfinito/Pazzi/Bargello. Dimensioni dei dettagli stimate, non riproduzione esatta dei monumenti.
- Ombre/materiali ancora da affinare; Vespa e persone restano stilizzate. Dettagli delle facciate lontane nascosti per contenere il carico grafico.
- 74 test automatici superati dopo l'importazione, inclusi regressioni dei cortili, marciapiedi e ingombro degli specchi; programma pedoni invariato (5 gruppi/7 fermate). TypeScript e build finale superati: index-CEHdWVyF.js, 829,18kB (gzip 222,34kB), avviso non bloccante sul bundle >500kB.
- Confronto visivo finale a 0/85/150/314/1363/1958m e formato verticale 390×844 senza errori JavaScript o shader. Nel campione iniziale, disattivare dettagli lontani riduce i triangoli disegnati da ~805mila a ~500mila; NON equivale a un benchmark su telefono fisico. Immagini in output/playwright/frame-pilot-*.png.
- Giro touch: avanzamento e rilascio code osservati fino a ~473m; prova interrotta dal ricaricamento automatico durante un'ulteriore modifica grafica. Secondo tentativo terminato per timeout iniziale di navigazione (30s). NON dichiarare completato un giro su questa revisione: l'arrivo completo va ricontrollato prima della pubblicazione. La precedente revisione b336c6a aveva già superato il giro reale di 2003,4m.
- Nessuna pubblicazione. Audio/musica e percorso invariati.

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
