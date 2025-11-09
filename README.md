# Vespa City Ride 3D

Un gioco 3D dove guidi una Vespa attraverso la città, evitando auto e ostacoli mentre colleziona punti.

## Caratteristiche

- Grafica 3D realizzata con Three.js
- Controlli intuitivi con tastiera
- Sistema di punteggio con moltiplicatore di serie
- Modalità turbo
- Salvataggio del record personale

## Come Giocare

### Controlli

- **← → / A D**: Sterza la Vespa
- **W / ↑**: Accelera
- **S / ↓**: Rallenta
- **Spazio**: Attiva il turbo istantaneo (quando disponibile)

### Obiettivo

Sopravvivi il più a lungo possibile evitando collisioni con auto e ostacoli. Più a lungo sopravvivi senza collisioni, maggiore sarà il tuo moltiplicatore di punti!

## Installazione

### Opzione 1: Apertura Diretta (Consigliata per questo progetto)

Poiché il progetto utilizza moduli ES6 e TypeScript direttamente dal browser tramite CDN:

1. Clona il repository:
   ```bash
   git clone https://github.com/Giuseppe575/giocovespa.git
   cd giocovespa
   ```

2. Apri il file `index.html` con un server locale. Puoi usare:

   - **Python 3**:
     ```bash
     python -m http.server 8000
     ```

   - **Node.js (http-server)**:
     ```bash
     npx http-server -p 8000
     ```

   - **Live Server** (estensione VS Code)

3. Apri il browser all'indirizzo `http://localhost:8000`

### Opzione 2: GitHub Pages

Il gioco può essere hostato direttamente su GitHub Pages:

1. Vai su Settings del repository
2. Nella sezione "Pages", seleziona il branch `main` come source
3. Il gioco sarà disponibile all'indirizzo: `https://giuseppe575.github.io/giocovespa/`

## Struttura del Progetto

```
giocovespa/
├── index.html              # File HTML principale
├── src/
│   ├── main.ts            # Entry point dell'applicazione
│   ├── game.ts            # Logica principale del gioco
│   ├── entities.ts        # Entità del gioco (Vespa, auto, ostacoli)
│   ├── ui.ts              # Gestione dell'interfaccia utente
│   ├── utils.ts           # Funzioni di utilità
│   ├── definitions.ts     # Definizioni e costanti
│   ├── libs/
│   │   └── persistence.ts # Gestione del salvataggio dati
│   └── styles/
│       └── index.css      # Stili CSS
└── README.md
```

## Tecnologie Utilizzate

- **Three.js** (v0.163) - Libreria 3D per il rendering
- **TypeScript** - Linguaggio di programmazione
- **CSS3** - Styling
- **LocalStorage API** - Salvataggio del punteggio

## Licenza

Questo progetto è open source.

## Crediti

Sviluppato come progetto di gioco 3D interattivo.
