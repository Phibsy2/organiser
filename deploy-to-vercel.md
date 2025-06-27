# JuraFit auf deinem iPhone installieren

## Schritt 1: Vercel Account erstellen

1. Gehe zu https://vercel.com
2. Klicke auf "Sign Up"
3. Wähle "Continue with GitHub" (oder erstelle einen Account mit Email)

## Schritt 2: App deployen

Da ich keinen Zugriff auf deinen Browser habe, musst du diese Schritte selbst ausführen:

### Option A: Über Vercel Dashboard (Empfohlen)

1. Logge dich bei Vercel ein
2. Klicke auf "Add New..." → "Project"
3. Klicke auf "Upload"
4. Ziehe den `build` Ordner (aus `/home/user/JuraFit/jurafit/build`) in das Upload-Feld
5. Gib deinem Projekt einen Namen (z.B. "jurafit")
6. Klicke auf "Deploy"

Nach wenigen Sekunden erhältst du eine URL wie:
`https://jurafit.vercel.app`

### Option B: Über Terminal (Falls du Git verwendest)

1. Erstelle ein GitHub Repository für dein Projekt
2. Pushe den Code zu GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/[dein-username]/jurafit.git
   git push -u origin main
   ```
3. Gehe zu Vercel und wähle "Import Git Repository"
4. Wähle dein Repository aus
5. Klicke auf "Deploy"

## Schritt 3: Auf dem iPhone installieren

1. Öffne Safari auf deinem iPhone
2. Gehe zu deiner Vercel URL (z.B. `https://jurafit.vercel.app`)
3. Tippe auf das Teilen-Symbol (□↑)
4. Scrolle zu "Zum Home-Bildschirm"
5. Benenne die App "JuraFit"
6. Tippe auf "Hinzufügen"

## Fertig! 🎉

Deine App ist jetzt:
- ✅ Dauerhaft online verfügbar
- ✅ Von überall erreichbar
- ✅ Wie eine native App auf deinem iPhone
- ✅ Mit Offline-Funktionalität (PWA)
- ✅ Kostenlos gehostet

## Wichtige Infos

- Alle Daten werden lokal auf deinem iPhone gespeichert
- Die App funktioniert auch offline
- Updates werden automatisch geladen, wenn du online bist
- Du kannst die URL mit anderen teilen

## Updates deployen

Wenn du Änderungen machst:
1. `npm run build`
2. Lade den neuen `build` Ordner bei Vercel hoch
3. Die App aktualisiert sich automatisch