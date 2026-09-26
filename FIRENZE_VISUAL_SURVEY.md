# Ricognizione visiva Firenze – 26 settembre 2026

Ambito: percorso locale Duomo/Proconsolo → Ghibellina → Giovine Italia → Piazza Piave → Pecori Giraldi → Tempio. Ricognizione per correggere la scena, senza importare fotografie, texture o modelli proprietari.

## Metodo e limiti

Google Earth è stato effettivamente aperto e ispezionato nel browser. Dopo un primo timeout, la vista aerea è arrivata al 100% di caricamento; data dell'immagine indicata nell'interfaccia: **31/10/2024**. Non è una verifica dello stato dei cantieri nel settembre 2026, né un rilievo Street View a quota conducente. Le distanze sotto sono calcoli sul poligono OSM già presente nel progetto, non misure topografiche. Altezze dell'argine, colori di facciata e visibilità esatta dietro ogni albero restano da calibrare.

[Vista aerea Google Earth consultata](https://earth.google.com/web/@43.7657,11.2705,50a,1400d,35y,0h,0t,0r).

## Arno e fascia fra strada e acqua

La vista aerea mostra acqua verde oliva, una sponda nord con fascia verde e alberata, percorsi e spazi di sosta. Il fiume non corre immediatamente a fianco della corsia lungo tutto il tratto. La fascia si allarga avvicinandosi al ponte San Niccolò e al Tempio. Non inserire una cortina di fabbricati sul lato fiume.

Distanza minima planimetrica fra centro della rotta e bordo del poligono acqua, calcolata da `src/data/florence-route.json` e `src/data/florence-map.json`:

| Progressiva percorso | Distanza acqua |
| --- | --- |
| 1.480 m | circa 43 m |
| 1.497 m | circa 30 m |
| 1.534 m | circa 33 m |
| 1.597 m | circa 58 m |
| 1.704 m | circa 83 m |
| 1.767 m | circa 86 m |
| 1.989 m | circa 77 m |

Questa geometria spiega parte della scarsa visibilità a quota bassa. La correzione deve rendere leggibili acqua, argine e orizzonte attraverso aperture nella vegetazione, senza portare artificialmente l'acqua sul bordo della strada. Un piano terreno continuo sopra il poligono acqua, invece, la nasconderebbe interamente e sarebbe un difetto del rendering.

Fonti primarie: [progetto Comune 2024, area prevalentemente verde presso fine Pecori Giraldi](https://affidamenti.comune.fi.it/sites/affidamenti.comune.fi.it/files/profilo/documenti-di-gara/20241104/PG%20241615%20del%2015.07.2024_PROGETTO%20DI%20SERVIZIO_signed.pdf); [PAC Comune, ciclabile nei giardini Caponnetto accanto al marciapiede del Tempio](https://amministrazionetrasparente.comune.firenze.it/system/files/2017-11/Piano_Azione_Comunale_PAC_2016-2019_0.pdf). La [SAS segnala la chiusura della fermata bus di Pecori Giraldi dal 1 luglio 2025](https://www.serviziallastrada.it/le-news-di-firenzesas/bus-turistici-chiusura-temporanea-degli-spazi-di-sosta-viale-xi-agosto): non usare i bus turistici del fotogramma 2024 come prova della situazione attuale.

## Elementi riconoscibili e direzione di marcia

- **Duomo:** il punto di partenza è sul lato orientale, vicino Proconsolo. Procedendo verso sud il Duomo rimane dietro/destra: una facciata monumentale sempre davanti al pilota sarebbe geograficamente sbagliata. Inferenza dalla rotta e dalla posizione dell'edificio.
- **Bargello:** riferimento all'imbocco di Ghibellina, edificio medievale massiccio. Deve distinguersi dalle case intonacate attraverso pietra, massa e profilo della torre; il fronte utile cambia durante la svolta. [Scheda ufficiale FeelFlorence](https://www.feelflorence.it/fr/lieux-dinteret/musee-national-du-bargello).
- **Torre della Zecca:** elemento isolato in Piazza Piave, al termine dell'avvicinamento da Giovine Italia. La sua presenza deve essere evidente prima della svolta sul lungarno; non confonderla con una torre campanaria. [FeelFlorence](https://www.feelflorence.it/en/points-interest/torre-della-zecca-vecchia) e [MUS.E, descrizione degli archi murati sul lato città](https://musefirenze.it/blog/torredellazecca/).
- **Baldissera:** grande isolato a nord del lungarno, quindi a sinistra andando verso Tempio. La vista aerea mostra corpi lunghi con tetti terracotta e cortili; non una successione di palazzine indipendenti. [Documento ufficiale Carabinieri, descrizione del complesso e indirizzo](https://www.carabinieri.it/docs/default-source/gareappalto/2025/cg_cuc_1502_8_5_2025-documento-di-indirizzo-alla-progettazione.pdf?sfvrsn=88825822_2).
- **Ponte San Niccolò:** attraversamento moderno diritto, davanti/destra nell'avvicinamento orientale e poi sul lato destro. Non modellarlo come Ponte Vecchio o una sequenza di archi medievali. A ovest del ponte, la pescaia obliqua è riconoscibile nella vista aerea come linea bianca nell'acqua. Il Ponte Vecchio è a ovest, alle spalle del senso di marcia; non usarlo come fondale frontale del finale.
- **Sponda opposta:** alberi e pendio verde verso Piazzale Michelangelo, con tessuto costruito ai piedi della collina. Visibili in Google Earth; la visibilità dalla singola posizione della Vespa è un'inferenza da verificare nel gioco.

## Sei correzioni concrete

1. Tagliare realmente il terreno al poligono dell'Arno, distinguere acqua più bassa e argine; mantenere il tracciato georeferenziato. La quota verticale esatta non è verificata da questa ricognizione.
2. Estendere visibilità e distanza della foschia per conservare sponda opposta e ponte; ridurre alberi ostruenti solo dove non supportati dalla mappa, mantenendo aperture visuali plausibili.
3. Differenziare i tre caratteri urbani: vie storiche strette con fronti continui; Giovine Italia più largo; lungarno con lato edificato a sinistra e spazio verde/acqua a destra.
4. Dare sagome specifiche a Bargello, Zecca e Baldissera; usare pietra, intonaci terrosi, coppi e ritmo regolare delle finestre invece di colori casuali per edificio.
5. Aggiungere ponte San Niccolò e pescaia nelle posizioni corrette, con materiali chiari/cemento e acqua oliva; nessun ponte storico inventato davanti all'arrivo.
6. Vincolare i pedoni a marciapiedi e attraversamenti effettivamente liberi: verificare ogni segmento contro le impronte degli edifici. Un semplice offset laterale dalla rotta può finire dentro un palazzo su una via stretta o in curva.

La [pagina corrente del Comune sulla tramvia Libertà–Bagno a Ripoli](https://www.comune.firenze.it/novita/notizie/linea-3-tramvia-liberta-bagno-ripoli) documenta lavorazioni che coinvolgono Giovine Italia e i lungarni: la scena può rappresentare coerentemente la città senza cantieri, ma non dovrebbe dichiararsi una replica aggiornata al giorno della ricognizione.
