# JuraFit - Jura & Fitness Tracker PWA

Eine Progressive Web App zur perfekten Kombination von Jura-Fernstudium, Vollzeitjob und Fitness-Training.

## 🚀 Features

### 📚 Studium-Tracking
- **Modul-Verwaltung**: Verfolge deinen Fortschritt in Propädeutikum und BGB AT
- **Pomodoro-Timer**: Integrierter Timer für effektive Lerneinheiten
- **Wochenziele**: Behalte deine wöchentlichen Lernstunden im Blick
- **Gutachten-Hilfe**: Strukturierte Vorlagen für juristische Gutachten

### 💪 Fitness-Tracking  
- **Workout-Sessions**: Geführte Trainingseinheiten für Oberkörper, Cardio und Unterkörper
- **Übungs-Logger**: Detaillierte Erfassung von Sätzen, Wiederholungen und Gewichten
- **Fortschritts-Charts**: Visualisierung von Gewicht, Kraft, Volumen und Kalorien
- **Ziel-Tracking**: Verfolge deine Fitness-Ziele

### 🎯 Dashboard & Organisation
- **Tagesübersicht**: Aktueller Status von Arbeit, Training und Studium
- **Streak-Tracking**: Motivierende Erfolgsserie
- **Quick Actions**: Schnellzugriff auf wichtige Funktionen
- **Wochenfortschritt**: Übersicht über erreichte Ziele

### 📱 PWA-Features
- **Offline-Fähig**: Funktioniert auch ohne Internetverbindung
- **Installierbar**: Als App auf dem Homescreen
- **Push-Benachrichtigungen**: Erinnerungen für Studium und Training
- **Responsive Design**: Optimiert für alle Geräte

## 🛠️ Technologie-Stack

- **Frontend**: React 18 mit TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Charts**: Chart.js mit react-chartjs-2
- **PWA**: Service Worker mit Workbox
- **Offline Storage**: IndexedDB mit Dexie
- **Benachrichtigungen**: Web Notifications API

## 📦 Installation

```bash
# Dependencies installieren
npm install

# Development Server starten
npm start

# Production Build erstellen
npm run build
```

## 🏗️ Projektstruktur

```
src/
├── components/           # UI-Komponenten
│   ├── Dashboard/       # Dashboard-Komponenten
│   ├── Study/          # Studium-Komponenten
│   ├── Training/       # Training-Komponenten
│   └── Shared/         # Geteilte Komponenten
├── hooks/              # Custom React Hooks
├── store/              # Zustand Stores
├── types/              # TypeScript Definitionen
└── utils/              # Hilfsfunktionen
```

## 🎯 Verwendung

1. **Erste Einrichtung**: Öffne die App und navigiere zu den Einstellungen, um dein Profil einzurichten
2. **Arbeitszeiten**: Konfiguriere deine Arbeitszeiten für automatische Tagesplanung
3. **Module hinzufügen**: Füge deine aktuellen Studienmodule hinzu
4. **Training planen**: Wähle deine bevorzugten Trainingstage
5. **Los geht's**: Nutze das Dashboard für den täglichen Überblick

## 📱 Als PWA installieren

### iOS:
1. Öffne die App in Safari
2. Tippe auf das Teilen-Symbol
3. Wähle "Zum Home-Bildschirm"

### Android:
1. Öffne die App in Chrome
2. Tippe auf das Menü (3 Punkte)
3. Wähle "App installieren"

### Desktop:
1. Öffne die App in Chrome/Edge
2. Klicke auf das Installations-Symbol in der Adressleiste
3. Folge den Anweisungen

## 🔧 Konfiguration

Die App speichert alle Daten lokal im Browser. Wichtige Einstellungen:

- **Benachrichtigungen**: Aktiviere Benachrichtigungen für Erinnerungen
- **Arbeitszeiten**: Passe deine Arbeitszeiten an
- **Pomodoro**: Konfiguriere Arbeits- und Pausenzeiten
- **Ziele**: Setze realistische Wochen- und Monatsziele

## 📈 Weiterentwicklung

Mögliche zukünftige Features:
- Cloud-Synchronisation
- Weitere Statistiken und Analysen
- Integration mit Fitness-Trackern
- Lerngruppen-Features
- Erweiterte Gutachten-Vorlagen

## 📄 Lizenz

Dieses Projekt wurde speziell für die Kombination von Jura-Fernstudium, Vollzeitarbeit und Fitness entwickelt.