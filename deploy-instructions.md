# JuraFit Deployment Anleitung

## Option 1: Lokales Netzwerk (Empfohlen für Tests)

1. Stelle sicher, dass die App läuft:
   ```bash
   npm start
   ```

2. Öffne auf deinem iPhone Safari und gehe zu:
   ```
   http://192.168.178.27:3000
   ```

3. Installiere als Web-App:
   - Tippe auf das Teilen-Symbol
   - Wähle "Zum Home-Bildschirm"
   - Benenne die App und tippe "Hinzufügen"

## Option 2: Build für Production

1. Erstelle einen Production Build:
   ```bash
   npm run build
   ```

2. Teste den Build lokal:
   ```bash
   npm install -g serve
   serve -s build -p 3000
   ```

## Option 3: Kostenlose Hosting-Optionen

### Vercel (Empfohlen)
1. Installiere Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Folge den Anweisungen und du erhältst eine öffentliche URL

### Netlify
1. Build erstellen:
   ```bash
   npm run build
   ```

2. Gehe zu https://app.netlify.com
3. Ziehe den `build` Ordner in das Netlify Dashboard
4. Du erhältst sofort eine öffentliche URL

### GitHub Pages
1. Installiere gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Füge zu package.json hinzu:
   ```json
   "homepage": "https://[dein-username].github.io/jurafit",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## PWA Funktionen

Die App ist bereits als Progressive Web App konfiguriert und bietet:
- Offline-Funktionalität
- App-Icon
- Vollbildmodus
- Push-Benachrichtigungen (wenn aktiviert)
- Lokale Datenspeicherung

## Wichtige Hinweise

- Die App speichert alle Daten lokal im Browser (localStorage)
- Beim Wechsel des Geräts gehen die Daten verloren
- Für Datensynchronisation zwischen Geräten wäre ein Backend nötig