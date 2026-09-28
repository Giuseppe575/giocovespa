# Memoria del progetto

## Pubblicazione approvata · 28 settembre 2026

- L’utente approva la versione fino a Giovine Italia e richiede la pubblicazione per test esterni.
- Versione candidata: build index-CRL21IEO.js; 85 test, TypeScript, confronto desktop/mobile e giro completo 2003,4 m superati. Nessuna modifica al codice dopo queste verifiche.
- Include tutte le correzioni locali successive a PR32: impronte mancanti, marciapiedi, facciate Proconsolo/Ghibellina e viale a tre corsie.
- Pubblicazione GitHub Pages e controllo pubblico in corso. Le sezioni precedenti “solo locale” descrivono lo stato al momento dei rispettivi interventi.


## Nuovi frame fino a Giovine Italia · 28 settembre 2026

- Ricevuto Vespa_Firenze_20_frame_32_51.zip. L'utente sottolinea che Giovine Italia ha più corsie. Tutti i 20 frame esaminati; file estratti solo in output/references-32-51, ignorato da Git. Non copiare le immagini nella distribuzione.
- Continuazione implementata localmente: facciate fino all'uscita di Ghibellina, lastre nel nuovo tratto, viale a tre corsie con segnaletica e traffico coerenti nel tratto pieno, filari e parcheggi laterali. Schema/larghezze sono interpretazioni dei frame. Non modificare la parte Proconsolo approvata.
- Percorso e impronte invariati. Nessuna modifica audio/musica o ai tempi degli attraversamenti. Resa ancora stilizzata; non dichiarare identità con i riferimenti.
- 85 test, TypeScript/build e viste desktop/mobile superati; giro definitivo completo 2003,4 m con FINISHED, velocità e motore a zero, tutti gli attraversamenti risolti e nessun errore JavaScript. Dettagli in STATUS.md. Non pubblicato, sito pubblico ancora PR32.

## Secondo tratto approvato come direzione · 27 settembre 2026

- L'utente ha approvato la prima parte e fornito 11 nuovi frame da Frame_01_Screenshot_21.png a Frame_11_Screenshot_31.png, più lo ZIP Via Ghibellina; gli otto frame precedenti sono duplicati. Conservare il tratto Proconsolo approvato. Nuovi frame usati solo come riferimenti, nessun pixel importato o distribuito.
- Esteso il dettaglio alle facciate affacciate su Ghibellina, progressive 235–420m: parete del Bargello in pietra con aperture rade, basi dei palazzi in bugnato, portoni arcuati, inferriate, persiane, gronde e piccole insegne originali. Il selettore opera per facciata e protegge i fronti Proconsolo degli edifici d'angolo. Impronte OSM e percorso invariati.
- Lastre in Proconsolo, transizione verso asfalto a 230–238m dopo la svolta; anche il rilievo delle lastre viene disattivato sull'asfalto. Dettagli e insegne sono interpretazioni artistiche, non rilievi esatti. Tavolini, file di mezzi parcheggiati e persone dei frame non sono stati ricostruiti in questa fase.
- Corretto un errore browser dovuto all'unione di archi estrusi e geometrie indicizzate; normalizzazione solo dei gruppi misti e test di regressione. 81 test, TypeScript, build e viste desktop/mobile superati. Giro reale completo 2003,4m: FINISHED, velocità 0, motore 0, nessun errore JS. Audio/musica e 5 gruppi/7 fermate invariati.
- Solo anteprima locale, non pubblicato. Build index-eCZ76GL_.js. Il pubblico resta PR32; nessun push o commit effettuato per questi prototipi.

## Frame di riferimento e primo prototipo · 27 settembre 2026

- L'utente ha fornito Frame_01.png–Frame_08.png in Downloads e chiede una resa identica. Ha dichiarato che sono rielaborati con ChatGPT Immagini; non ha precisato la provenienza delle immagini di base. Usarli come direzione estetica, NON come rilievo metrico/fotogrammetrico né incorporare i pixel nel gioco. Non sono stati copiati nel repository.
- Primo prototipo locale: dettaglio architettonico in Proconsolo (edifici con progressiva <240m), portoni ad arco/pannelli, inferriate, persiane a lamelle, cornicioni, lanterne, vetrine e materiali originali per lastre/bugnato. Geometrie e materiali ancora semplificati: NON promettere il fotorealismo dei frame. Vespa/personaggi non modificati in questo passaggio; audio e tracciato invariati.
- Individuata e corretta la causa dei grandi vuoti: l'importatore originale trattava solo way OSM, ignorando multipolygon. scripts/florence-multipolygons.mjs recupera 66 edifici/94 cortili dal precedente estratto OSM del 26/09, inclusi Nonfinito, Borghese, Borghese-Aldobrandini e Bargello. Runtime: 883 edifici nel dataset principale (prima 817), oltre ai 49 della sponda sud. 13 relazioni incomplete nell'estratto vengono segnalate e scartate, non inventate.
- Le impronte e i cortili sono condivisi da renderer e controllo ingombri. Punto più stretto ricalcolato ~1,99m a 150–152m: carrozzeria 1,65m + almeno 15cm per lato; specchi verificati rispetto alle facciate, possono sporgere sopra il cordolo. Nessuna autorizzazione a spostare gli edifici per allargare il gioco.
- Nessun push/pubblicazione effettuato in questa fase. Il sito pubblico rimane PR32; b336c6a e questo prototipo sono solo locali. Consultare STATUS.md per verifiche finali.

## Correzioni da fotografie · 27 settembre 2026

- L'utente conferma di MANTENERE il percorso Pecori Giraldi–del Tempio. Le sue foto Acciaiuoli/Corsini sono riferimenti di confronto, non autorizzano a cambiare itinerario o collocare Ponte Vecchio davanti all'arrivo.
- Problemi segnalati: facciate sulla carreggiata, marciapiedi invisibili, due file di auto nelle vie strette, torre confusa con chiesa. Correzione locale: sezione stradale adattata allo spazio fra impronte OSM, marciapiedi su entrambi i lati e traffico in fila unica nel centro; allargamento progressivo verso i viali.
- Nessuno spostamento di edifici, Arno o percorso. Larghezze/marciapiedi sono ricostruzioni con controllo di ingombro, NON misure topografiche. Viali ancora semplificati; non promettere corrispondenza esatta di ogni corsia/facciata/cantiere.
- Torre della Zecca: MUS.E conferma altezza 25 m, sommità senza merlatura, archi murati sul lato città. Rimossi merli inventati, aggiunti riferimenti agli archi e copertura piatta; non è una chiesa né sostituisce il Duomo.
- Aggiunti 10 percorsi pedonali/ciclabili del lungarno da OSM acquisito il 26/09; piante decorative escluse da questi percorsi. Dimensioni/quote ricostruite, non rilevate. Foto Google dell'utente NON distribuite come texture.
- Conservato il programma con 5 gruppi di pedoni e 7 fermate; coda singola fino a quattro auto gestita senza obbligare la Vespa a raggiungere la prima auto. Audio/musica invariati. Verifiche finali superate: 69 test, TypeScript/build, sette schermate touch e giro completo non abbreviato 2003,4 m, FINISHED, velocità/motore a zero, nessun errore JS. Queste nuove correzioni non sono ancora online (pubblico PR32).

## Richiesta corrente · 26 settembre 2026

- Dopo la release PR31 l'utente conferma audio e musica funzionanti. Non modificarli in questa fase.
- Nuovo feedback: Firenze non riconoscibile, Arno non visibile, pedoni dentro muri, città senza auto. Richiesta esplicita di subagente per panoramica Google Earth: eseguita, risultati in FIRENZE_VISUAL_SURVEY.md (vista2024, non cantieri2026).
- Revisione locale in corso: materiali fotografici CC0, finestre geometriche, terreno con foro reale per Arno, argini/verde, ponte San Niccolò/pescaia, 49 edifici sulla sponda opposta, pedoni validati contro impronte, traffico rado con fermate/code. Non chiamare fotorealistica o replica completa questa ricostruzione ancora semplificata.
- L'utente ha richiesto esplicitamente la pubblicazione per prova sul cellulare: completata con PR32, merge 6d6547a, Pages success. Sul sito pubblico verificato index-Do4UDAeM.js, partenza/avanzamento Firenze, musica disattivabile e layout touch orizzontale/verticale senza errori. Attendere feedback sul telefono fisico.
- Ultimo feedback recepito: troppi stop per pedoni. Tutte le 14 strisce restano, pedoni a passaggi alterni; esclusi anche i due punti a 415 e 1087 m senza spazio sicuro: 5 gruppi, 7 fermate totali compresi i rossi senza pedoni. Nessuna fermata per persone invisibili. Prima striscia libera, semafori rossi ancora vincolanti. Regole Firenze v2 per i record.
- Revisione verificata: 65 test, TypeScript/build e controllo browser touch superati. Giro completo prima dell'ultima esclusione dei due punti, poi test mirati dell'esclusione. Audio invariato e controllato. Release pubblica ora PR32 su https://giuseppe575.github.io/giocovespa/.

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
