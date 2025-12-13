# 🐛 Debug: Problema Pagina Bianca e Controlli Mobile

## 📋 Sintomi del Problema

### Comportamento Attuale
1. **Pagina Bianca/Grigia**: Quando si avvia il gioco, lo sfondo appare bianco/grigio chiaro invece di mostrare la grafica 3D
2. **HUD Visibile**: L'interfaccia utente (punteggio, velocità, serie, record) viene visualizzata correttamente
3. **Messaggio Visibile**: Il testo "Vai! Evita auto e ostacoli • Carica il turbo" appare
4. **Pulsanti Non Funzionanti**: I pulsanti ACCELERA e FRENO non rispondono al tocco
5. **Manca Grafica 3D**: Non si vedono: strada, vespa, edifici, luci, ostacoli

### Screenshot Ricevuto
- URL: `ppe575.github.io` (GitHub Pages)
- Browser: Mobile (iOS/Android)
- Stato: Gioco avviato (menu nascosto, HUD visibile)
- Canvas 3D: **NON VISIBILE**

---

## 🔧 Modifiche Implementate

### Commit 1: `9913a68` - Fix pulsanti mobile
**File modificati**: `src/game.ts`

**Cambiamenti**:
```typescript
// PRIMA (solo pointer events)
button.addEventListener("pointerdown", handlePointerDown);
button.addEventListener("pointerup", handlePointerUp);

// DOPO (touch + pointer + mouse)
button.addEventListener("touchstart", handlePress, { passive: false, capture: true });
button.addEventListener("touchend", handleRelease, { passive: false, capture: true });
button.addEventListener("touchcancel", handleRelease, { passive: false, capture: true });
button.addEventListener("pointerdown", handlePress);
button.addEventListener("pointerup", handleRelease);
button.addEventListener("mousedown", handlePress);
button.addEventListener("mouseup", handleRelease);
```

**Obiettivo**: Massima compatibilità con iOS e Android usando eventi touch, pointer e mouse

---

### Commit 2: `f53d9b8` - Debug logging e fix canvas
**File modificati**: `src/entities.ts`, `src/game.ts`

#### Modifiche a `src/entities.ts:12-74`
```typescript
export function createRenderer(): THREE.WebGLRenderer {
  console.log("createRenderer() - Inizio creazione renderer");

  try {
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
    });

    // Inserimento canvas PRIMA dell'HUD
    const canvas = renderer.domElement;
    canvas.id = 'game-canvas';
    const hud = document.getElementById('hud');
    if (hud && hud.parentNode) {
      hud.parentNode.insertBefore(canvas, hud);
    }

  } catch (error) {
    // Mostra box rosso con errore WebGL
    const errorDiv = document.createElement('div');
    errorDiv.innerHTML = `<h3>Errore WebGL</h3>...`;
    document.body.appendChild(errorDiv);
    throw error;
  }
}
```

**Obiettivo**:
- Assicurare che canvas sia inserito nel DOM PRIMA dell'HUD
- Mostrare errore visibile se WebGL non è supportato
- Logging dettagliato per debug

#### Modifiche a `src/game.ts:501-545`
```typescript
function bindHoldButton(...) {
  const handlePress = (e: Event) => {
    console.log(`Pulsante ${button.textContent} premuto`);

    // Feedback visivo
    button.style.transform = 'scale(0.95)';
    button.style.background = 'rgba(100, 200, 255, 0.9)';

    onPress();
  };

  const handleRelease = (e: Event) => {
    console.log(`Pulsante ${button.textContent} rilasciato`);
    button.style.transform = 'scale(1)';
    button.style.background = 'rgba(255, 255, 255, 0.92)';
    onRelease();
  };
}
```

**Obiettivo**:
- Feedback visivo quando si preme un pulsante (diventa blu)
- Logging in console per verificare eventi

#### Modifiche a `src/game.ts:555-584`
```typescript
let animateFrameCount = 0;

function animate() {
  animateFrameCount++;
  if (animateFrameCount === 1) {
    console.log("animate() - Primo frame!");
  }
  if (animateFrameCount % 100 === 0) {
    console.log(`animate() - Frame ${animateFrameCount}, gameState=${gameState}, speed=${world.player.speed.toFixed(1)}`);
  }
  // ...
  world.renderer.render(world.scene, world.camera);
}

function updatePlayer(dt: number) {
  if (input.up) {
    p.targetSpeed += 18 * dt;
    if (Math.random() < 0.1) console.log(`ACCELERA: targetSpeed=${p.targetSpeed.toFixed(1)}`);
  }
  if (input.down) {
    p.targetSpeed -= 26 * dt;
    if (Math.random() < 0.1) console.log(`FRENA: targetSpeed=${p.targetSpeed.toFixed(1)}`);
  }
}
```

**Obiettivo**:
- Logging frame di animazione per verificare che il loop funzioni
- Logging accelerazione/frenata per verificare input

---

## 🔍 Log Attesi nella Console

Se tutto funziona correttamente, nella console dovresti vedere:

### All'avvio del gioco:
```
createRenderer() - Inizio creazione renderer
createRenderer() - WebGLRenderer creato
Renderer canvas inserito prima dell'HUD
Canvas dimensioni: 1920x1080, style: 100%x100%
initGame() - Scene creata
initGame() - Camera creata
initGame() - Renderer creato e aggiunto al DOM
initGame() - Event listeners aggiunti
initGame() - World inizializzato: true
initGame() - UI inizializzata
Event listeners aggiunti al pulsante ACCELERA
Event listeners aggiunti al pulsante FRENO
initGame() - INIZIALIZZAZIONE COMPLETATA! Avvio animate loop...
animate() - Primo frame!
```

### Quando premi GIOCA:
```
hideMenu() chiamato, ui: true
hideMenu() - Rimuovo classe 'visible' dal menu overlay...
hideMenu() - Menu nascosto
```

### Quando premi ACCELERA:
```
Pulsante ACCELERA premuto
ACCELERA: targetSpeed=19.2
ACCELERA: targetSpeed=23.5
...
Pulsante ACCELERA rilasciato
```

### Ogni 100 frame (circa 1.6 secondi):
```
animate() - Frame 100, gameState=RUNNING, speed=18.5
animate() - Frame 200, gameState=RUNNING, speed=24.3
```

---

## ❌ Possibili Cause del Problema

### 1. **WebGL non supportato**
- **Sintomo**: Box rosso con "Errore WebGL" visibile
- **Causa**: Browser/dispositivo non supporta WebGL
- **Soluzione**: Testare su dispositivo/browser diverso

### 2. **Canvas non viene aggiunto al DOM**
- **Sintomo**: No log "Renderer canvas inserito..."
- **Causa**: Errore JavaScript prima dell'inserimento
- **Verifica console**: Cercare errori prima del log del renderer

### 3. **Canvas coperto da altro elemento**
- **Sintomo**: Canvas esiste ma non è visibile
- **Causa**: z-index errato o elemento sovrapposto
- **Debug**: Ispezionare DOM e verificare presenza di `<canvas id="game-canvas">`

### 4. **Canvas con dimensioni 0x0**
- **Sintomo**: Canvas esiste ma ha dimensioni zero
- **Causa**: CSS o resize errato
- **Verifica log**: Controllare "Canvas dimensioni" nel log

### 5. **Animate loop non parte**
- **Sintomo**: No log "animate() - Primo frame!"
- **Causa**: Errore nella funzione `initGame()` o `animate()`
- **Verifica**: Cercare errori JavaScript in console

### 6. **Eventi touch bloccati**
- **Sintomo**: No log "Pulsante ACCELERA premuto" quando tocchi
- **Causa**: Eventi touch bloccati da browser policy
- **Test**: Provare click con mouse se disponibile

### 7. **Rendering avviene ma schermo bianco**
- **Sintomo**: Log mostrano tutto OK ma schermo bianco
- **Causa possibile**: Background color sovrascrive rendering
- **Debug**: Verificare che `scene.background` sia impostato correttamente

---

## 🧪 Checklist Debug

### Step 1: Aprire Console Browser
- **iOS Safari**: Impostazioni → Safari → Avanzate → Abilita "Console Web", poi collega a Mac con Safari
- **Android Chrome**: Menu (⋮) → Altri strumenti → Strumenti per sviluppatori → scheda Console
- **Desktop**: F12 → scheda Console

### Step 2: Ricaricare Pagina
1. Apri console
2. Ricarica pagina (pull to refresh o forza refresh)
3. Copia TUTTI i log dalla console

### Step 3: Testare Pulsante GIOCA
1. Clicca/tocca "GIOCA"
2. Verifica se appare log "hideMenu() chiamato"
3. Verifica se appare "animate() - Primo frame!"

### Step 4: Testare Pulsanti ACCELERA/FRENO
1. Tieni premuto ACCELERA per 2-3 secondi
2. Verifica:
   - Il pulsante diventa BLU?
   - Appare log "Pulsante ACCELERA premuto"?
   - Appare log "ACCELERA: targetSpeed=..."?
3. Ripeti con FRENO

### Step 5: Ispezionare DOM
1. Vai nella scheda Elements/Elementi degli strumenti sviluppatore
2. Cerca `<canvas id="game-canvas">`
3. Verifica gli stili:
   ```
   position: fixed
   top: 0
   left: 0
   width: 100%
   height: 100%
   z-index: 0
   ```
4. Verifica le dimensioni effettive (width/height in pixel)

---

## 📊 Informazioni da Fornire per Debug

Per risolvere il problema, ho bisogno di:

### 1. **Console Log Completi**
```
Copia e incolla TUTTO il contenuto della console dopo aver:
- Ricaricato la pagina
- Premuto GIOCA
- Provato ACCELERA per 2-3 secondi
```

### 2. **Screenshot Console**
- Screenshot della console con tutti i log visibili

### 3. **Ispeziona Canvas**
- Screenshot della scheda Elements/Elementi con il `<canvas>` selezionato
- Mostra gli stili applicati e le dimensioni

### 4. **Informazioni Dispositivo**
- Dispositivo: (es. iPhone 13, Samsung Galaxy S21)
- Sistema Operativo: (es. iOS 17.2, Android 13)
- Browser: (es. Safari 17, Chrome 120)

### 5. **Errori visibili**
- Vedi il box rosso "Errore WebGL"? (SI/NO)
- I pulsanti diventano BLU quando li tocchi? (SI/NO)
- La velocità cambia nell'HUD quando premi ACCELERA? (SI/NO)

---

## 🚀 Prossimi Passi

Una volta ricevuti i log della console, possiamo:

1. **Identificare il punto esatto** dove il codice si blocca
2. **Capire se WebGL** è supportato sul dispositivo
3. **Verificare se gli eventi touch** vengono ricevuti
4. **Controllare se il canvas** viene effettivamente renderizzato
5. **Implementare fix specifico** basato sui log

---

## 📝 Note Tecniche

### Struttura Rendering
```
<body>
  <canvas id="game-canvas" style="z-index: 0">  ← Deve essere QUI e VISIBILE
  <div id="hud" style="z-index: 10">            ← Sopra il canvas
  <div id="mobile-controls" style="z-index: 12"> ← Sopra tutto
  <div id="menu-overlay">                        ← Overlay menu
  <div id="game-over-overlay">                   ← Overlay game over
</body>
```

### CSS Critico
```css
body {
  background: radial-gradient(...);  /* Gradiente azzurro */
}

#game-canvas {
  position: fixed;
  z-index: 0;  /* SOTTO tutto */
  width: 100%;
  height: 100%;
}
```

### Three.js Scene Background
```typescript
scene.background = new THREE.Color(0xb8ddff);  // Azzurro chiaro
```

Questo colore potrebbe apparire "quasi bianco" su alcuni schermi, MA dovrebbe comunque mostrare la grafica 3D sopra.

---

**Data**: 2025-12-13
**Commits**: 9913a68, f53d9b8
**Branch**: claude/fix-white-page-brake-01LbLGGmVqKbt5p2YR5C5gYq → master
