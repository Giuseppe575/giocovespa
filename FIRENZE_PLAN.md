# Piano attivo · audio e circuito Firenze–Arno

Aggiornato il 26 settembre 2026. Il percorso verso Palazzo Vecchio è superato dalla nuova richiesta: Duomo, strade non pedonali, lungarni, circa 2 km. Il circuito cittadino esistente deve restare disponibile.

## 1. Audio — implementato localmente, verifica hardware da ripetere

- Gestire AudioContext sia sospeso sia interrotto, senza trasformare un errore temporaneo in mute permanente.
- Ripresa dal gesto dell'utente e al rientro nella scheda; richieste concorrenti accorpate, nuovo tentativo dopo timeout o rifiuto.
- Pulsazione del motore meno profonda e tono più basso; chiusura immediata del gain finale dopo incidente/arrivo e in background.
- Musica: Carefree, Kevin MacLeod, CC BY 4.0, file locale in streaming con gain dedicato basso; interruttore musica separato dal mute generale. Crediti e licenza visibili dal menu.
- La musica continua tra corsa, risultati e menu dopo il primo gesto; tutto si sospende quando si nasconde la pagina. Nessun autoplay prima dell'interazione.

## 2. Tracciato geografico — integrato nel menu e giocabile

Lunghezza calcolata dal servizio OSRM su OpenStreetMap: **2003,4 m**.

| Tratto | Metri circa |
| --- | ---: |
| Via del Proconsolo, partenza presso Via dell'Oriuolo | 218 |
| Via Ghibellina | 980 |
| Viale della Giovine Italia | 196 |
| Piazza Piave | 109 |
| Lungarno Guglielmo Pecori Giraldi | 255 |
| Lungarno del Tempio, arrivo | 245 |

Partenza geografica: 43.772579, 11.257831. Arrivo: 43.765724, 11.274365. Il Duomo resta il riferimento visivo, ma la Vespa parte sulla strada adiacente, non sul sagrato pedonale.

Geometria e provenienza: src/data/florence-route.json. Controllo preliminare ogni 2 m contro i poligoni comunali delle aree pedonali: nessuna sovrapposizione rilevata. Non è una verifica di permessi ZTL, cantieri o accessibilità odierna: il gioco non è un navigatore.

Impianti individuati entro 30 m dal percorso nei dati comunali:

- Ghibellina–Verdi, circa m 517 (id 41).
- Pecori Giraldi–Giovine Italia, circa m 1528 (id 218).
- Pecori Giraldi–Amendola, circa m 1756 (id 217).

I punti descrivono gli impianti, non le linee di arresto precise. Posizioni delle strisce, orientamento delle lanterne, tempi reali e relative corsie non sono ancora verificati. Non aggiungere semafori inventati dichiarandoli reali.

## 3. Fedeltà dello scenario — prima ricostruzione geografica implementata

Implementati traiettoria reale, 817 impronte/parti di edifici OSM, sagoma dell'Arno e sponde. Modelli dedicati semplificati per cupola e torri. Rendering per blocchi vicini. Le seguenti attività descrivono il percorso verso una replica visiva più fedele: non sono tutte soddisfatte dalla prima versione, che usa materiali procedurali e altezze stimate quando mancanti.

1. Convertire la polilinea geografica in metri locali; conservare svolte e proporzioni, senza sostituirla con le sinusoidi del circuito attuale.
2. Acquisire impronte degli edifici e dati disponibili sulle carreggiate/marciapiedi con licenze compatibili. Verificare larghezze, corsie, sensi e parapetti.
3. Preparare riferimenti riutilizzabili per Duomo, facciate di Proconsolo/Ghibellina, Torre della Zecca, Piazza Piave, lungarni e ponti visibili. Foto originali dell'utente, rilievi o asset autorizzati aiutano a ottenere la fedeltà richiesta.
4. Modellare i fronti lungo il percorso e confrontare viste del gioco con i riferimenti. Materiali generici non costituiscono una ricostruzione fedele edificio per edificio.
5. Renderizzare soltanto i blocchi vicini, con livelli di dettaglio e budget adatto ai telefoni. Nessun download/estrazione di modelli da Google Maps/Street View.

## 4. Semafori e attraversamenti — implementati con fasi di gioco

Versione pubblicabile: 14 gruppi di attraversamenti da OSM/impianti comunali, arresto assistito prima della linea, pedoni che entrano solo a Vespa ferma, attesa di 7 secondi e ripartenza. Semafori rosso/verde; il giallo descritto sotto resta un miglioramento futuro. Nessun traffico/ostacolo casuale in Firenze, così non ci sono tamponamenti inevitabili durante gli stop. Record separati e cronometro comprensivo delle attese. Le specifiche originarie seguenti restano il riferimento per evoluzioni successive.

- Frenata assistita prima della linea al rosso; velocità effettivamente zero, sterzo confinato alla carreggiata, turbo incapace di aggirare lo stop.
- Giallo: arresto se la distanza di frenata lo consente; niente inchiodata dentro l'incrocio. Ripartenza dolce al verde.
- Pedoni camminano sui marciapiedi e attendono al bordo delle strisce; attraversano quando la Vespa è ferma e il passaggio è sicuro. Con semaforo pedonale rispettano la loro fase.
- Vespa ferma finché l'ultimo pedone non ha liberato il passaggio. Evitare stalli reciproci e persone che compaiono improvvisamente in strada.
- Fermare anche il traffico dietro il giocatore; niente tamponamenti inevitabili o ostacoli generati sulla linea di arresto.
- Motore al minimo durante gli stop, spento a fine corsa; musica continua. Il cronometro include le attese e i record restano separati per percorso e regole semaforiche.

## 5. Integrazione e accettazione

Prova completa locale su Chromium touch emulato: 2003,4 m percorsi, tutti i 14 gruppi serviti, stato FINISHED, velocità 0 e gain motore 0; nessun errore JavaScript. 51 test automatici e controllo TypeScript superati. Circuito cittadino da 1800 m ancora selezionabile. Mobile fisico e Safari iOS da riverificare dopo questa release.

- Introdurre una definizione di percorso selezionabile (lunghezza, geometria, scenari, eventi) e togliere il vincolo globale 1800 m soltanto per Firenze.
- Mantenere il circuito esistente invariato. Esporre Firenze nel menu solo quando strada, scenario e stop sono effettivamente integrati.
- Test: rosso, verde, giallo, pedoni in coda/in attraversamento, turbo durante stop, ripartenza, pausa scheda, arrivo e riavvio.
- Prova completa del tragitto desktop/mobile e confronto visivo con i riferimenti. Poi aggiornamento memoria/progress, build e pubblicazione concordata.

## Fonti

- OpenStreetMap, licenza e attribuzione: https://www.openstreetmap.org/copyright
- OSRM: https://project-osrm.org/ — geometria acquisita il 26 settembre 2026.
- Comune di Firenze, aree pedonali: https://opendata.comune.fi.it/page_dataset_show?id=4b49d9a5-6b91-451d-b7c3-73ea6cd3e83b
- Comune di Firenze, semafori: https://opendata.comune.fi.it/page_dataset_show?id=0d9fc6ec-cd6c-4bad-b7b1-a4ef70e82c2b
- Condizioni Google Maps: https://cloud.google.com/maps-platform/terms
- Stato AudioContext e interruzioni Safari: https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/state
- Carefree e licenza: https://incompetech.com/music/royalty-free/index.html?gt=&isrc=USUAN1400037
