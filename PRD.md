# PRD — Vespa City Ride: Cartolina italiana in corsa

**Stato:** vertical slice approvata per implementazione  
**Data:** 16 agosto 2026  
**Piattaforme:** browser desktop e mobile landscape  
**Stack confermato:** TypeScript, Three.js, Vite

## 1. Visione

Un arcade runner 3D immediato ambientato in una città mediterranea stilizzata. Il giocatore guida uno scooter italiano, concatena sorpassi eleganti, raccoglie monete e usa il turbo per completare brevi obiettivi ad alta rigiocabilità.

La promessa non è “simulazione realistica”, ma **la dolce vita su due ruote**: leggibilità arcade, identità italiana originale e una presentazione da cartolina animata.

> Nota di prodotto: prima di un rilascio commerciale il nome “Vespa” e gli elementi riconoscibili del marchio devono essere verificati. L’architettura e la UI useranno un’identità sostituibile con “scooter italiano”.

## 2. Problema

La versione attuale è giocabile, ma presenta quattro limiti:

1. gameplay piatto, senza obiettivi finiti, difficoltà guidata o progressione;
2. identità visiva generica e non coerente con l’immaginario italiano;
3. HUD e controlli mobile incompleti, con turbo poco leggibile e nessuna pausa;
4. architettura monolitica: loop, input, audio, spawn, collisioni e stato condividono lo stesso modulo.

## 3. Target

- Pubblico casual 10+, sessioni da 1–3 minuti.
- Desktop: tastiera e puntatore; mobile: landscape, grandi target touch.
- Giocatori attratti da arcade accessibili, stile low-poly e collezionabili cosmetici.
- Nessun account richiesto nella prima release.

## 4. Pilastri

### Flow arcade

Sterzo preciso, accelerazione/freno, salto, turbo, sorpassi ravvicinati e combo “Bella Figura”. Ogni evento importante usa almeno due canali tra visuale, testo, suono e vibrazione.

### Viaggio italiano

Centro storico, lungomare, mercato e collina al tramonto. Terracotta, intonaci caldi, pini marittimi, archi, panni stesi, insegne originali e una palette solare sostituiscono lo skyline generico.

### Progressione leggera

Missioni brevi, record locale, monete spendibili in futuro nel garage, colori/accessori cosmetici e recap che mostra cosa è migliorato.

## 5. Vertical slice — scope

La prima slice deve mantenere il loop endless esistente e aggiungere:

- menu principale visuale con CTA unica “Parti”; 
- HUD desktop e mobile con punti, combo, monete, velocità, missione e barra turbo;
- obiettivo di run iniziale: percorrere 750 m;
- sistema near-miss che premia rischio senza collisione;
- recap con punteggio, distanza, monete, near-miss e record;
- controlli mobile completi, incluso turbo;
- pausa automatica quando la pagina perde visibilità;
- direzione grafica mediterranea low-poly e migliore leggibilità degli hazard;
- fondazioni tecniche: stato di dominio testabile, typecheck e test unitari.

Non sono inclusi nella slice: account, classifiche online, multiplayer, acquisti, open world, garage completo o nuovi asset 3D esterni.

## 6. Core loop

1. Il giocatore vede missione e record nel menu.
2. Preme “Parti” e riceve 2,5 secondi di strada libera.
3. Guida, evita hazard, raccoglie monete e costruisce combo.
4. Un passaggio ravvicinato assegna un near-miss e carica il turbo.
5. Il turbo crea un breve picco di velocità e punteggio.
6. A 750 m la missione è completata, ma la run può continuare.
7. Alla collisione compare il recap e il giocatore può ripartire in meno di 5 secondi.

## 7. Regole gameplay della slice

- Tre corsie leggibili; sterzo continuo conservato nella slice per non cambiare insieme troppe variabili.
- Near-miss: hazard superato senza collisione, con distanza laterale entro una soglia di rischio.
- Near-miss: +75 punti, incremento combo, +12% turbo.
- Moneta: +14 punti, incremento combo.
- Combo decade dopo un breve periodo senza azioni.
- Missione: 750 m, completamento una sola volta per run, bonus +500 punti.
- Collisione: game over immediato; in una fase successiva si valuterà una seconda chance.

## 8. UX e schermate

### Menu

- scooter/città restano visibili dietro un velo leggero;
- eyebrow “Cartolina italiana in corsa”; titolo grande su due righe;
- missione del giorno, record e comandi sintetici;
- CTA primaria di almeno 48 px;
- mute accessibile con icona SVG/testo, mai emoji o caratteri dipendenti dall’encoding.

### HUD

- in alto: punti, combo e monete;
- al centro: obiettivo e messaggi evento;
- in basso: velocità e turbo;
- mobile: sterzo nell’area sinistra, accelera/freno/turbo sulla destra con safe-area;
- testo minimo 14 px su mobile, contrasto WCAG AA per gli elementi essenziali.

### Recap

- punteggio e nuovo record;
- griglia con distanza, monete, near-miss e miglior combo;
- stato missione;
- CTA “Ancora un giro”.

## 9. Direzione artistica

- **Stile:** low-poly premium/cel-shaded, forme morbide da modellino.
- **Palette:** navy `#12233F`, crema `#FFF5DD`, corallo `#F05A47`, sole `#F6C453`, petrolio `#177E78`, cielo `#79C8E8`, terracotta `#C96F4A`.
- **Tipografia:** display geometrica/retro ove disponibile; fallback di prodotto `Avenir Next`, `Montserrat`, system sans. Numeri tabulari.
- **Materiali UI:** pannelli crema satinati, contorni navy, ombre corte; blur limitato agli overlay.
- **Motion:** scia turbo, coin burst, HUD pop controllato; rispetto di `prefers-reduced-motion`.

## 10. Architettura target

La modernizzazione è incrementale, senza riscrittura big bang:

- `GameApp`: bootstrap, lifecycle e dispose;
- `GameStateMachine`: loading/menu/running/paused/game-over;
- `InputManager`: tastiera, pointer e touch normalizzati;
- `RunModel`: punteggio, combo, missione, turbo e statistiche;
- `SpawnDirector`: pattern fair e difficoltà deterministica;
- `WorldSystem`, `CollisionSystem`, `AudioManager`, `RendererManager`;
- event bus tipizzato tra gameplay e DOM UI.

Nella slice si introduce prima il dominio puro (`RunModel` e state machine), mantenendo compatibilità con il loop Three.js attuale.

## 11. Accessibilità e performance

- focus visibile, dialog semantics, `aria-live` per eventi importanti;
- target touch almeno 48 CSS px e safe-area iOS;
- pausa su `visibilitychange`;
- modalità riduzione movimento;
- budget: 60 fps desktop, minimo 30 fps sui device mobile target;
- progressiva riduzione di point light, draw call e ombre; quality preset in una fase successiva.

## 12. KPI e criteri di accettazione

- primo input in meno di 10 secondi;
- restart possibile in meno di 5 secondi;
- turbo comprensibile senza leggere istruzioni lunghe;
- 100% dei pattern generati percorribili;
- meno del 5% di collisioni percepite come ingiuste nei playtest;
- build, typecheck e test unitari verdi;
- UI verificata a 1440×900 e mobile landscape 844×390;
- nessun errore console bloccante all’avvio, game over o restart.

## 13. Roadmap

1. **Slice 1:** fondazioni, UI, near-miss, missione, recap, refresh del quartiere.
2. **Slice 2:** spline reale, spawn director a pattern, feedback audio/particellare, onboarding.
3. **Tour:** quattro distretti, missioni da 60–180 secondi, garage cosmetico e cartoline.
4. **Hardening:** gamepad, quality preset, PWA, test real-device, CI e verifica marchio.

## 14. Benchmark di riferimento

- Traffic Rider: missioni, rischio/ricompensa e progressione del mezzo.
- Subway Surfers City: distretti e sfide finite senza perdere l’immediatezza endless.
- #DRIVE: identità low-poly memorabile e collezione.
- Sayonara Wild Hearts: colore, ritmo e momenti scenografici.
- Wheels of Aurelia: italianità e sessioni brevi.
- Slow Roads: accesso immediato e valore del viaggio browser-first.

Fonti ufficiali e link sono raccolti in `RESEARCH.md`.

## 15. Stato di avanzamento — 16 agosto 2026

### Completato

- audit del prodotto, benchmark e architettura incrementale;
- redesign accessibile di menu, HUD desktop/mobile e recap;
- missione dei 750 m, near-miss, miglior combo e turbo mobile;
- dominio testabile con `GameStateMachine` e `RunModel`;
- refresh mediterraneo low-poly di scooter, strada, edifici e hazard;
- monete premium stratificate con bordo metallico e marchio in rilievo;
- primo distretto lungomare con spiaggia, battigia, mare e palme;
- difficulty director progressivo sui primi 900 m, con apertura più tranquilla;
- scheduler anti-burst con almeno una corsia libera e monete su traiettorie leggibili;
- ottimizzazione di finestre, segnaletica stradale e illuminazione;
- fondazioni Figma: 30 token, quattro stili tipografici, effetto card, Cover, Getting Started e pagina Foundations;
- verifiche automatiche: test unitari, typecheck e build di produzione.

### In corso / bloccato esternamente

- componenti Figma `Button`, `Stat Chip`, `Mission Card` e `Turbo Meter`;
- mockup Figma Menu, HUD desktop, HUD mobile landscape e Recap;
- verifica screenshot del file Figma.

Queste attività sono sospese esclusivamente perché è stato raggiunto il limite di chiamate MCP del piano Figma Starter. Il lavoro può riprendere dallo stato registrato senza ricreare le fondazioni.

### Prossima slice

- strada realmente spline-based con curve visibili;
- circuiti cittadini distinti: centro storico, lungomare, mercato e collina;
- `SpawnDirector` evoluto con pattern concatenati e solver di percorribilità;
- feedback audio, particelle e onboarding contestuale;
- playtest mobile e desktop sui KPI definiti in questo PRD.
