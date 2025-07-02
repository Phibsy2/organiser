import { LearningUnit, Exercise } from '../../types/learning';

// ZUSATZMATERIAL 1: Digitale Rechtskompetenz (60 Stunden / 2 ECTS)

export const zusatzmaterial1Units: LearningUnit[] = [
  // 4.1 Grundlagen der digitalen Rechtspraxis (20 Stunden)
  {
    id: 'zm1-1-digitale-grundlagen',
    moduleId: 'propaedeutikum',
    order: 16,
    title: '4.1 Grundlagen der digitalen Rechtspraxis',
    objectives: [
      {
        id: 'obj-4-1-1',
        description: 'Digitale Transformation im Rechtswesen verstehen',
        bloomLevel: 'understand'
      },
      {
        id: 'obj-4-1-2',
        description: 'Rechtliche Datenbanken effektiv nutzen',
        bloomLevel: 'apply'
      },
      {
        id: 'obj-4-1-3',
        description: 'Digitale Rechtsquellen bewerten und einordnen',
        bloomLevel: 'evaluate'
      }
    ],
    content: {
      id: 'content-4-1',
      type: 'mixed',
      sections: [
        {
          id: 'section-4-1-1',
          title: 'Digitalisierung der Justiz',
          content: `Die Digitalisierung hat das Rechtswesen grundlegend verändert und neue Herausforderungen geschaffen.

**Historische Entwicklung:**

**1. Traditionelle Rechtspraxis:**
- Papierdokumente und physische Archive
- Manuelle Recherche in Kommentaren
- Präsenzverhandlungen vor Gericht
- Postversand von Schriftsätzen

**2. Erste Digitalisierungsschritte (1990er-2000er):**
- CD-ROM-Sammlungen (Beck-CD, juris)
- Erste Online-Datenbanken
- E-Mail-Kommunikation
- Textverarbeitungsprogramme

**3. Moderne Digitalisierung (2010er-heute):**
- Cloud-basierte Rechtsdatenbanken
- Elektronische Aktenführung (eAkte)
- Videokonferenzen und Online-Verhandlungen
- Künstliche Intelligenz in der Rechtspraxis

**Aktuelle Entwicklungen:**

**Electronic Government Act (EGovG):**
- Digitalisierung der Verwaltung
- Online-Serviceangebote
- Elektronische Identität (eID)
- Barrierefreie Zugänglichkeit

**Onlinezugangsgesetz (OZG):**
- Bis 2022: Alle Verwaltungsleistungen online
- Einheitliche Digitalisierungsstandards
- Nutzerfreundliche Portale
- Datenschutz und Datensicherheit

**Justizmodernisierungsgesetz:**
- Elektronische Aktenführung
- Strukturierte Datenübertragung
- Automatisierte Verfahren
- Digitale Zustellung

**Auswirkungen auf die Rechtspraxis:**

**Vorteile:**
✓ Schnellere Recherche und Fallbearbeitung
✓ Bessere Verfügbarkeit von Rechtsinformationen
✓ Effizientere Kommunikation mit Mandanten
✓ Kosteneinsparungen durch Automatisierung
✓ Ortsunabhängiges Arbeiten

**Herausforderungen:**
⚠ Datenschutz und Datensicherheit
⚠ Technische Kompetenzanforderungen
⚠ Rechtliche Unsicherheiten bei neuen Technologien
⚠ Digital Divide zwischen verschiedenen Akteuren
⚠ Qualitätssicherung bei automatisierten Prozessen`,
          examples: [
            {
              id: 'ex-4-1-1-1',
              title: 'Digitale vs. analoge Fallbearbeitung',
              content: 'Beispiel Mietrechtsfall:\n\nAnalog:\n• Kommentare und Handbücher durchblättern\n• Rechtsprechung in Zeitschriften suchen\n• Handschriftliche Notizen\n• Schreibmaschine für Schriftsätze\n• Postversand an Gericht\n\nDigital:\n• Online-Recherche in juris/Beck-Online\n• KI-gestützte Rechtsprechungsanalyse\n• Digitale Annotationen und Mindmaps\n• Automatisierte Dokumentenerstellung\n• beA-Versand an Gericht',
              explanation: 'Die Digitalisierung beschleunigt Recherche und Bearbeitung erheblich, erfordert aber neue Kompetenzen.'
            }
          ]
        },
        {
          id: 'section-4-1-2',
          title: 'Rechtsdatenbanken und Recherche',
          content: `Moderne Rechtsdatenbanken sind unverzichtbare Werkzeuge für Juristen.

**Wichtige deutsche Rechtsdatenbanken:**

**1. juris (Bundesrepublik Deutschland):**
- Staatliche Datenbank mit amtlichen Texten
- Gesetze, Rechtsprechung, Verwaltungsvorschriften
- Kostenloser Zugang für Bürger (grundlegende Funktionen)
- Professionelle Version für Anwälte und Gerichte

**Besondere Funktionen:**
• Amtliche Leitsätze und Orientierungssätze
• Verknüpfung mit Gesetzestexten
• Zeitlich strukturierte Suche
• Export-Funktionen für Zitierweise

**2. Beck-Online:**
- Umfassende Kommentarliteratur
- Handbücher und Fachzeitschriften
- Formularbuch und Musterverträge
- Integrierte Rechtsprechungsdatenbank

**Besondere Funktionen:**
• Kommentierung mit Praxisbezug
• Cross-References zwischen Publikationen
• Mobile App für unterwegs
• Personalisierte Arbeitsbereiche

**3. Weitere Anbieter:**
- **Haufe Online:** Schwerpunkt Steuer-/Arbeitsrecht
- **NWB Datenbank:** Fokus auf Steuerrecht
- **Otto Schmidt Online:** Gesellschaftsrecht
- **Nomos eLibrary:** Wissenschaftliche Literatur

**Effektive Recherchestrategie:**

**Phase 1: Problemidentifikation**
1. Sachverhalt analysieren und Rechtsfragen identifizieren
2. Relevante Rechtsgebiete bestimmen
3. Erste Suchbegriffe definieren

**Phase 2: Gesetzliche Grundlagen**
1. Einschlägige Gesetze finden
2. Systematischer Stellenkommentar
3. Querverweise und Verweisungsnormen

**Phase 3: Rechtsprechungsrecherche**
1. Leitentscheidungen identifizieren
2. Aktuelle Rechtsprechung prüfen
3. Instanzenzug und Revisionsurteile

**Phase 4: Literaturauswertung**
1. Kommentarliteratur studieren
2. Aufsätze und Anmerkungen
3. Kritische Stellungnahmen

**Suchoperatoren und -techniken:**

**Boolesche Operatoren:**
- UND / AND: Beide Begriffe müssen vorkommen
- ODER / OR: Mindestens einer der Begriffe
- NICHT / NOT: Begriff darf nicht vorkommen
- Trunkierung (*): Wortendungen variabel

**Erweiterte Suchtechniken:**
- Phrasensuche: "Anspruch auf Schadensersatz"
- Proximity-Suche: Begriff1 NEAR/5 Begriff2
- Feldsuche: Gericht:(BGH) AND Jahr:(2023)
- Fuzzy-Suche: Ähnliche Begriffe finden

**Qualitätsbewertung von Quellen:**

**Zuverlässigkeitskriterien:**
✓ Amtliche vs. private Publikation
✓ Aktualität der Information
✓ Wissenschaftliche Qualität des Autors
✓ Peer-Review-Verfahren
✓ Zitierhäufigkeit und Reputation

**Warnsignale:**
⚠ Veraltete Rechtslage
⚠ Unbekannte Autoren ohne Qualifikation
⚠ Fehlende Quellenangaben
⚠ Widersprüche zu etablierter Meinung
⚠ Kommerziell motivierte Verzerrungen`,
          examples: [
            {
              id: 'ex-4-1-2-1',
              title: 'Recherche-Workflow Beispiel',
              content: 'Aufgabe: Verjährung von Schadensersatzansprüchen\n\n1. Gesetzesrecherche:\n   • § 195 BGB (Regelverjährung)\n   • § 199 BGB (Verjährungsbeginn)\n   • § 852 BGB (Deliktsrecht)\n\n2. juris-Suche:\n   "Verjährung" UND "Schadensersatz" UND "§ 195"\n   → 2.847 Treffer, eingrenzen auf BGH\n\n3. Beck-Online:\n   Palandt-BGB § 195 Rn. 1-15\n   → Kommentierung mit Praxishinweisen\n\n4. Ergebnis:\n   Systematische Übersicht über Verjährungsregeln',
              explanation: 'Systematische Recherche kombiniert Gesetze, Rechtsprechung und Literatur für vollständiges Bild.'
            }
          ]
        },
        {
          id: 'section-4-1-3',
          title: 'Praktische Tools und Software',
          content: `Neben Rechtsdatenbanken gibt es zahlreiche digitale Tools für die juristische Praxis.

**Dokumentenmanagement:**

**1. Kanzleisoftware:**
- **RA-MICRO:** Marktführer in Deutschland
  * Aktenverwaltung und Fristenkalender
  * Integrierte Zeiterfassung
  * Schnittstelle zum beA
  * Automatisierte Gebührenberechnung

- **AdvoWare:** Cloud-basierte Lösung
  * Ortsunabhängiger Zugriff
  * Integrierte Buchhaltung
  * Dokumentenvorlagen
  * Mandantenportal

- **LawFirm:** Speziell für kleine Kanzleien
  * Günstige Einstiegslösung
  * Basisfunktionen kompakt
  * Mobile App verfügbar

**2. Elektronischer Rechtsverkehr:**

**beA (besonderes elektronisches Anwaltspostfach):**
- Pflicht für alle Rechtsanwälte
- Sichere Kommunikation mit Gerichten
- Ende-zu-Ende-Verschlüsselung
- Elektronische Signatur integriert

**Praktische Nutzung:**
1. Einrichtung mit Signaturkarte
2. Integration in Kanzleisoftware
3. Automatischer Empfang von Zustellungen
4. Fristenlauf beginnt bei Eingang

**3. Legal Tech Tools:**

**Dokumentenautomatisierung:**
- **ContractExpress:** Vertragsgenerator
  * Intelligente Vorlagen
  * Bedingte Logik
  * Mehrsprachige Dokumente

- **LAWLIFT:** Deutscher Anbieter
  * No-Code-Dokumentenautomatisierung
  * Entscheidungsbäume
  * API-Schnittstellen

**Recherche-Unterstützung:**
- **Lexis:** KI-gestützte Recherche
  * Semantische Suche
  * Fallanalyse-Tools
  * Präzedenzfall-Finder

- **ROSS Intelligence:** KI-Rechtsassistent
  * Natürlichsprachliche Fragen
  * Zusammenfassungen erstellen
  * Relevanzranking

**4. Collaboration Tools:**

**Sichere Kommunikation:**
- **threema Work:** DSGVO-konform
- **Element:** Ende-zu-Ende-verschlüsselt
- **Wire:** Business-Messenger

**Dokumentenzusammenarbeit:**
- **Cryptpad:** Verschlüsselte Dokumente
- **Nextcloud:** Private Cloud-Lösung
- **OnlyOffice:** DSGVO-konforme Office-Suite

**5. Digitale Signatur:**

**Qualifizierte elektronische Signatur (QES):**
- Rechtlich der handschriftlichen Unterschrift gleichgestellt
- Erforderlich für: Schriftsätze, Verträge, Vollmachten
- Anbieter: Bundesdruckerei, D-Trust

**Fortgeschrittene elektronische Signatur (FES):**
- Für weniger kritische Dokumente
- Einfachere Handhabung
- Anbieter: DocuSign, Adobe Sign

**6. Künstliche Intelligenz im Recht:**

**Anwendungsbereiche:**
- **Due Diligence:** Automatisierte Vertragsanalyse
- **Legal Research:** Intelligente Fallsuche
- **Predictive Analytics:** Erfolgswahrscheinlichkeiten
- **Chatbots:** Erstberatung und Triage

**Ethische und rechtliche Grenzen:**
- Anwaltspflichten bleiben bestehen
- Keine vollautomatisierte Rechtsberatung
- Datenschutz bei KI-Nutzung
- Haftung für KI-Fehler`,
          examples: [
            {
              id: 'ex-4-1-3-1',
              title: 'beA in der Praxis',
              content: 'Tagesablauf mit beA:\n\n08:00 Uhr: beA-Check\n• 3 neue Nachrichten vom Gericht\n• Automatische Fristenberechnung\n• Weiterleitung an Sachbearbeiter\n\n10:00 Uhr: Schriftsatz versenden\n• PDF mit qualifizierter Signatur\n• Anhänge bis 100 MB möglich\n• Empfangsbekenntnis sofort\n\n14:00 Uhr: Akteneinsicht\n• Elektronische Akte anfordern\n• Download der Gerichtsakten\n• Durchsuchbare PDFs',
              explanation: 'Das beA revolutioniert die Kommunikation mit Gerichten durch Geschwindigkeit und Sicherheit.'
            },
            {
              id: 'ex-4-1-3-2',
              title: 'Dokumentenautomatisierung',
              content: 'Mietvertrag mit LAWLIFT erstellen:\n\n1. Template auswählen:\n   → Wohnraummietvertrag\n\n2. Entscheidungsbaum:\n   - Möbliert? [Ja/Nein]\n   - Befristet? [Ja/Nein]\n   - Indexmiete? [Ja/Nein]\n\n3. Daten eingeben:\n   - Parteien, Objekt, Miete\n   - Automatische Plausibilitätsprüfung\n\n4. Ergebnis:\n   - Individueller Vertrag in 5 Minuten\n   - Rechtssicher und aktuell\n   - Exportierbar als Word/PDF',
              explanation: 'Dokumentenautomatisierung spart Zeit und reduziert Fehler bei Standardverträgen.'
            }
          ]
        },
        {
          id: 'section-4-1-4',
          title: 'Datenschutz und IT-Sicherheit',
          content: `Digitale Rechtspraxis erfordert besondere Aufmerksamkeit für Datenschutz und Sicherheit.

**Rechtliche Anforderungen:**

**1. Berufsrechtliche Pflichten:**
- § 43a Abs. 2 BRAO: Verschwiegenheitspflicht
- § 2 BORA: Wahrung von Berufsgeheimnissen
- § 203 StGB: Strafrechtlicher Geheimnisschutz
- Technische Sicherungsmaßnahmen erforderlich

**2. DSGVO-Compliance:**
- Art. 32 DSGVO: Technische und organisatorische Maßnahmen
- Verschlüsselung personenbezogener Daten
- Auftragsverarbeitungsverträge (AVV)
- Datenschutz-Folgenabschätzung bei neuen Tools

**Technische Sicherheitsmaßnahmen:**

**1. Verschlüsselung:**
- **Transport:** TLS 1.3 für Datenübertragung
- **Speicherung:** AES-256 für Festplatten
- **E-Mail:** S/MIME oder PGP
- **Backups:** Verschlüsselte Sicherungen

**2. Zugriffskontrolle:**
- Zwei-Faktor-Authentifizierung (2FA)
- Rollenbasierte Berechtigungen
- Regelmäßige Passwortänderungen
- Biometrische Sicherung für mobile Geräte

**3. Netzwerksicherheit:**
- Firewall und Intrusion Detection
- VPN für Fernzugriff
- Segmentierung von Netzwerken
- Regelmäßige Sicherheitsupdates

**Cloud-Nutzung in der Kanzlei:**

**Vorteile:**
✓ Ortsunabhängiger Zugriff
✓ Automatische Backups
✓ Skalierbarkeit
✓ Professionelle Sicherheit

**Risiken:**
⚠ Kontrollverlust über Daten
⚠ Abhängigkeit vom Anbieter
⚠ Compliance-Fragen
⚠ Datenlokalisierung

**Best Practices:**
1. Nur europäische Anbieter wählen
2. AVV abschließen
3. Verschlüsselung prüfen
4. Exit-Strategie planen

**Incident Response:**

**Notfallplan bei Datenschutzverletzung:**
1. **Sofortmaßnahmen:** Leck abdichten
2. **Dokumentation:** Art und Umfang erfassen
3. **Meldung:** 72h-Frist an Aufsichtsbehörde
4. **Information:** Betroffene benachrichtigen
5. **Analyse:** Ursachen ermitteln
6. **Verbesserung:** Maßnahmen anpassen`,
          examples: [
            {
              id: 'ex-4-1-4-1',
              title: 'DSGVO-konforme Cloud-Nutzung',
              content: 'Prüfschema für Cloud-Anbieter:\n\n1. Serverstandort:\n   ✓ Deutschland/EU\n   ✗ USA (ohne Zusatzvereinbarung)\n\n2. Zertifizierungen:\n   ✓ ISO 27001\n   ✓ BSI C5\n   ✓ TISAX\n\n3. Vertragliche Absicherung:\n   ✓ AVV nach Art. 28 DSGVO\n   ✓ Technische Garantien\n   ✓ Audit-Rechte\n\n4. Praktischer Test:\n   ✓ Verschlüsselung aktiv?\n   ✓ 2FA verfügbar?\n   ✓ Datenzugriff protokolliert?',
              explanation: 'Sorgfältige Prüfung von Cloud-Diensten sichert Mandantendaten und Compliance.'
            }
          ]
        }
      ],
      resources: [
        {
          id: 'res-4-1-1',
          title: 'juris Bundesrepublik Deutschland',
          type: 'database',
          url: 'https://www.juris.de',
          description: 'Staatliche Rechtsdatenbank mit amtlichen Texten und Rechtsprechung'
        },
        {
          id: 'res-4-1-2',
          title: 'Beck-Online Datenbank',
          type: 'database',
          url: 'https://beck-online.beck.de',
          description: 'Umfassende juristische Datenbank mit Kommentaren und Literatur'
        },
        {
          id: 'res-4-1-3',
          title: 'Digitalisierung der Justiz - BMJ',
          type: 'website',
          url: 'https://www.bmj.de/digitalisierung',
          description: 'Informationen zur Digitalisierungsstrategie des Bundesjustizministeriums'
        },
        {
          id: 'res-4-1-4',
          title: 'beA-Portal BRAK',
          type: 'website',
          url: 'https://www.bea.brak.de',
          description: 'Offizielle Informationen zum besonderen elektronischen Anwaltspostfach'
        },
        {
          id: 'res-4-1-5',
          title: 'Legal Tech Verzeichnis',
          type: 'website',
          url: 'https://legal-tech-verzeichnis.de',
          description: 'Übersicht über Legal Tech Tools und Anbieter in Deutschland'
        },
        {
          id: 'res-4-1-6',
          title: 'BSI Grundschutz für Kanzleien',
          type: 'article',
          url: 'https://www.bsi.bund.de/kanzleien',
          description: 'IT-Sicherheitsempfehlungen des BSI speziell für Rechtsanwaltskanzleien'
        }
      ],
      glossary: [
        {
          term: 'juris',
          definition: 'Staatliche Rechtsdatenbank der Bundesrepublik Deutschland mit amtlichen Gesetzes- und Rechtsprechungstexten'
        },
        {
          term: 'Beck-Online',
          definition: 'Kommerzielle Rechtsdatenbank mit umfassender Kommentarliteratur und Fachzeitschriften'
        },
        {
          term: 'Boolesche Operatoren',
          definition: 'Logische Verknüpfungen (UND, ODER, NICHT) für präzise Datenbanksuchen'
        },
        {
          term: 'eAkte',
          definition: 'Elektronische Aktenführung in der Justiz zur Digitalisierung von Gerichtsverfahren'
        }
      ]
    },
    exercises: [
      {
        id: 'ex-4-1-1',
        type: 'multipleChoice',
        difficulty: 'beginner',
        points: 2,
        title: 'Rechtsdatenbanken',
        description: 'Grundlagen der digitalen Rechtsrecherche',
        content: {
          question: 'Welche Aussage über juris ist korrekt?',
          options: [
            'juris ist eine rein kommerzielle Datenbank ohne amtliche Inhalte',
            'juris ist die staatliche Rechtsdatenbank mit amtlichen Texten',
            'juris enthält nur Rechtsprechung, aber keine Gesetze',
            'juris ist ausschließlich für Rechtsanwälte zugänglich'
          ]
        },
        solution: {
          correct: 1,
          explanation: 'juris ist die staatliche Rechtsdatenbank der Bundesrepublik Deutschland und enthält amtliche Gesetzes- und Rechtsprechungstexte. Grundfunktionen sind kostenlos für Bürger verfügbar.'
        },
        hints: [
          {
            id: 'hint-4-1-1-1',
            text: 'Denken Sie an den staatlichen Charakter der Datenbank',
            penaltyPoints: 0
          }
        ],
        feedback: {
          correct: 'Richtig! juris ist die offizielle staatliche Rechtsdatenbank.',
          incorrect: 'Nicht korrekt. juris ist die staatliche Datenbank mit amtlichen Inhalten.'
        }
      },
      {
        id: 'ex-4-1-1a',
        type: 'multipleChoice',
        difficulty: 'intermediate',
        points: 3,
        title: 'Beck-Online vs. juris',
        description: 'Unterschiede zwischen den Hauptrechtsdatenbanken',
        content: {
          question: 'Was ist der Hauptunterschied zwischen Beck-Online und juris?',
          options: [
            'Beck-Online ist kostenlos, juris kostenpflichtig',
            'juris enthält amtliche Texte, Beck-Online fokussiert auf Kommentarliteratur',
            'Beck-Online ist nur für Universitäten, juris für Praktiker',
            'Beide Datenbanken sind identisch aufgebaut'
          ]
        },
        solution: {
          correct: 1,
          explanation: 'juris ist die staatliche Datenbank mit amtlichen Texten (Gesetze, Rechtsprechung), während Beck-Online als kommerzielle Datenbank besonders stark bei Kommentarliteratur und Fachzeitschriften ist.'
        },
        hints: [
          {
            id: 'hint-4-1-1a-1',
            text: 'Denken Sie an staatlich vs. kommerziell',
            penaltyPoints: 1
          }
        ],
        feedback: {
          correct: 'Sehr gut! Sie verstehen die unterschiedlichen Schwerpunkte der Datenbanken.',
          incorrect: 'Überprüfen Sie die verschiedenen Ausrichtungen: amtlich vs. kommerziell.'
        }
      },
      {
        id: 'ex-4-1-1b',
        type: 'dragDrop',
        difficulty: 'intermediate',
        points: 4,
        title: 'Datenbank-Zuordnung',
        description: 'Ordnen Sie die Funktionen den richtigen Datenbanken zu',
        content: {
          question: 'Ordnen Sie die folgenden Merkmale den entsprechenden Datenbanken zu:',
          categories: ['juris', 'Beck-Online', 'Haufe Online'],
          items: [
            {
              id: 'item1',
              content: 'Amtliche Gerichtsentscheidungen',
              correctCategory: 'juris'
            },
            {
              id: 'item2',
              content: 'Münchener Kommentar',
              correctCategory: 'Beck-Online'
            },
            {
              id: 'item3',
              content: 'Steuerrecht-Schwerpunkt',
              correctCategory: 'Haufe Online'
            },
            {
              id: 'item4',
              content: 'Staatliche Datenbank',
              correctCategory: 'juris'
            },
            {
              id: 'item5',
              content: 'Fachzeitschriften-Integration',
              correctCategory: 'Beck-Online'
            },
            {
              id: 'item6',
              content: 'Arbeitsrecht-Spezialist',
              correctCategory: 'Haufe Online'
            }
          ]
        },
        solution: {
          correct: {
            'juris': ['item1', 'item4'],
            'Beck-Online': ['item2', 'item5'],
            'Haufe Online': ['item3', 'item6']
          },
          explanation: 'juris als staatliche Datenbank bietet amtliche Texte, Beck-Online excellt bei Kommentaren und Zeitschriften, Haufe spezialisiert sich auf Steuer- und Arbeitsrecht.'
        },
        hints: [
          {
            id: 'hint-4-1-1b-1',
            text: 'juris = staatlich/amtlich, Beck = Kommentare, Haufe = Steuern/Arbeit',
            penaltyPoints: 1
          }
        ],
        feedback: {
          correct: 'Perfekt! Sie haben die Datenbankprofile richtig zugeordnet.',
          incorrect: 'Denken Sie an die spezifischen Stärken jeder Datenbank.'
        }
      },
      {
        id: 'ex-4-1-2',
        type: 'fillInBlanks',
        difficulty: 'intermediate',
        points: 3,
        title: 'Suchoperatoren',
        description: 'Anwendung von booleschen Operatoren in der Rechtsrecherche',
        content: {
          question: 'Vervollständigen Sie die Suchstrategie für eine Recherche zu "Verjährung von Schadensersatzansprüchen":',
          template: 'Für eine Suche nach Urteilen, die sowohl "Verjährung" als auch "Schadensersatz" enthalten, verwende ich den Operator ___. Um Treffer auszuschließen, die sich auf Strafrecht beziehen, nutze ich den Operator ___. Für eine Suche nach ähnlichen Begriffen wie "Verjährungsfrist" verwende ich das Symbol ___.'
        },
        solution: {
          correct: ['UND', 'NICHT', '*'],
          explanation: 'UND verknüpft beide erforderlichen Begriffe, NICHT schließt unerwünschte Begriffe aus, und * ermöglicht Trunkierung für Wortvarianten.',
          alternativeAnswers: ['AND', 'NOT']
        },
        hints: [
          {
            id: 'hint-4-1-2-1',
            text: 'Boolesche Operatoren: UND/AND, ODER/OR, NICHT/NOT',
            penaltyPoints: 1
          }
        ],
        feedback: {
          correct: 'Sehr gut! Diese Suchoperatoren ermöglichen präzise Recherchen.',
          incorrect: 'Überprüfen Sie die booleschen Operatoren für Datenbanksuchen.'
        }
      },
      {
        id: 'ex-4-1-3',
        type: 'dragDrop',
        difficulty: 'intermediate',
        points: 4,
        title: 'Recherche-Workflow',
        description: 'Ordnen Sie die Schritte einer systematischen Rechtsrecherche',
        content: {
          question: 'Bringen Sie die Schritte einer systematischen Rechtsrecherche in die richtige Reihenfolge:',
          items: [
            {
              id: 'step1',
              content: 'Literaturauswertung und Kommentare',
              correctPosition: 4
            },
            {
              id: 'step2',
              content: 'Sachverhalt analysieren und Rechtsfragen identifizieren',
              correctPosition: 1
            },
            {
              id: 'step3',
              content: 'Rechtsprechungsrecherche durchführen',
              correctPosition: 3
            },
            {
              id: 'step4',
              content: 'Einschlägige Gesetze finden und prüfen',
              correctPosition: 2
            }
          ]
        },
        solution: {
          correct: [2, 4, 3, 1],
          explanation: 'Systematische Recherche beginnt mit der Problemanalyse, geht über Gesetze zur Rechtsprechung und schließt mit Literaturauswertung ab.'
        },
        hints: [
          {
            id: 'hint-4-1-3-1',
            text: 'Beginnen Sie mit der Analyse des Problems',
            penaltyPoints: 1
          }
        ],
        feedback: {
          correct: 'Perfekt! Sie haben den systematischen Recherche-Workflow verstanden.',
          incorrect: 'Die Reihenfolge ist nicht korrekt. Beginnen Sie mit der Problemanalyse.'
        }
      },
      {
        id: 'ex-4-1-4',
        type: 'caseAnalysis',
        difficulty: 'advanced',
        points: 8,
        title: 'Digitalisierungs-Fallstudie',
        description: 'Analyse einer Kanzlei-Digitalisierung',
        content: {
          sachverhalt: 'Die Kanzlei Schmidt & Partner (15 Anwälte) möchte ihre IT-Infrastruktur modernisieren. Bisher arbeitet die Kanzlei mit lokalen Servern, Papierakten und E-Mail ohne Verschlüsselung. Die Partner sind unsicher, welche Digitalisierungsschritte prioritär sind und welche rechtlichen Anforderungen zu beachten sind.',
          question: 'Entwickeln Sie einen systematischen Digitalisierungsplan mit Prioritäten und rechtlichen Compliance-Anforderungen.'
        },
        solution: {
          correct: 'Umfassender Digitalisierungsplan erforderlich',
          explanation: 'Prioritäten: 1. DSGVO-Compliance (E-Mail-Verschlüsselung, Zugriffskontrollen), 2. Cloud-Migration mit deutschen Anbietern, 3. Dokumentenmanagement-System, 4. Backup-Strategie, 5. Mitarbeiterschulungen. Rechtliche Anforderungen: DSGVO Art. 32 (Datensicherheit), BRAO § 43a (Verschwiegenheit), beA-Pflicht für elektronischen Rechtsverkehr.',
          evaluationCriteria: [
            'Systematische Priorisierung der Digitalisierungsschritte',
            'DSGVO-konforme Umsetzung',
            'Berücksichtigung der BRAO-Anforderungen',
            'Praktikabilität der Lösungsvorschläge',
            'Kosten-Nutzen-Betrachtung'
          ]
        },
        hints: [
          {
            id: 'hint-4-1-4-1',
            text: 'Beginnen Sie mit den rechtlich zwingenden Anforderungen',
            penaltyPoints: 2
          }
        ],
        feedback: {
          correct: 'Exzellente Digitalisierungsstrategie! Sie haben alle wichtigen Aspekte berücksichtigt.',
          incorrect: 'Überprüfen Sie die Reihenfolge der Prioritäten und rechtlichen Anforderungen.'
        }
      },
      {
        id: 'ex-4-1-5',
        type: 'multipleChoice',
        difficulty: 'intermediate',
        points: 3,
        title: 'Suchoperatoren Praxis',
        description: 'Anwendung boolescher Operatoren',
        content: {
          question: 'Sie suchen BGH-Urteile zur Produkthaftung aus 2023, aber NICHT zum Arzneimittelrecht. Welche Suchstrategie ist optimal?',
          options: [
            'BGH AND Produkthaftung AND 2023 NOT Arzneimittel',
            'BGH OR Produkthaftung AND 2023 NOT Arzneimittel',
            'BGH AND (Produkthaftung OR 2023) NOT Arzneimittel',
            'BGH Produkthaftung 2023 -Arzneimittel'
          ]
        },
        solution: {
          correct: 0,
          explanation: 'Die Syntax "BGH AND Produkthaftung AND 2023 NOT Arzneimittel" kombiniert alle gewünschten Begriffe und schließt unerwünschte Treffer aus.'
        },
        hints: [
          {
            id: 'hint-4-1-5-1',
            text: 'Alle positiven Begriffe mit AND, Ausschluss mit NOT',
            penaltyPoints: 1
          }
        ],
        feedback: {
          correct: 'Richtig! Sie beherrschen die boolesche Suchlogik.',
          incorrect: 'Überprüfen Sie die Verknüpfung der Suchbegriffe.'
        }
      },
      {
        id: 'ex-4-1-6',
        type: 'fillInBlanks',
        difficulty: 'beginner',
        points: 2,
        title: 'E-Government Begriffe',
        description: 'Vervollständigen Sie die Digitalisierungs-Terminologie',
        content: {
          question: 'Ergänzen Sie die wichtigsten E-Government Begriffe:',
          template: 'Das ___ regelt die Digitalisierung der Verwaltung. Die elektronische ___ ersetzt Papierakten in Gerichtsverfahren. Das ___ ermöglicht elektronische Zustellung zwischen Anwälten und Gerichten.'
        },
        solution: {
          correct: ['OZG', 'Akte', 'beA'],
          explanation: 'OZG = Onlinezugangsgesetz, eAkte = elektronische Akte, beA = besonderes elektronisches Anwaltspostfach.',
          alternativeAnswers: ['Onlinezugangsgesetz', 'eAkte']
        },
        hints: [
          {
            id: 'hint-4-1-6-1',
            text: 'Denken Sie an die wichtigsten Gesetze und Systeme der Justizdigitalisierung',
            penaltyPoints: 1
          }
        ],
        feedback: {
          correct: 'Sehr gut! Sie kennen die zentralen Begriffe der Justizdigitalisierung.',
          incorrect: 'Wiederholen Sie die Grundbegriffe der E-Government-Entwicklung.'
        }
      }
    ],
    estimatedMinutes: 1200, // 20 Stunden
    requiredMastery: 80
  },

  // 4.2 Legal Tech und KI im Recht (20 Stunden)
  {
    id: 'zm1-2-legal-tech',
    moduleId: 'propaedeutikum',
    order: 17,
    title: '4.2 Legal Tech und Künstliche Intelligenz im Recht',
    objectives: [
      {
        id: 'obj-4-2-1',
        description: 'Legal Tech-Anwendungen kategorisieren und bewerten',
        bloomLevel: 'evaluate'
      },
      {
        id: 'obj-4-2-2',
        description: 'KI-Tools in der Rechtspraxis anwenden',
        bloomLevel: 'apply'
      },
      {
        id: 'obj-4-2-3',
        description: 'Rechtliche und ethische Grenzen von Legal Tech analysieren',
        bloomLevel: 'analyze'
      }
    ],
    content: {
      id: 'content-4-2',
      type: 'mixed',
      sections: [
        {
          id: 'section-4-2-1',
          title: 'Legal Tech Kategorien',
          content: `Legal Technology (Legal Tech) umfasst alle technologischen Innovationen im Rechtswesen.

**Hauptkategorien von Legal Tech:**

**1. Document Automation (Dokumentenautomatisierung):**
- Automatische Vertragsgenerierung
- Template-basierte Schriftsatzerstellung  
- Intelligente Formularausfüllung
- Bulk-Processing von Standarddokumenten

**Beispiele:**
• Kanzlei-Software mit Vorlagenmanagement
• Online-Vertragsgeneratoren (LegalZoom, RocketLawyer)
• Automated Contract Analysis
• Due Diligence-Checklisten

**2. Legal Research & Analytics:**
- KI-gestützte Rechtsprechungsanalyse
- Predictive Analytics für Gerichtsentscheidungen  
- Automatische Rechtsprechungsüberwachung
- Citationanalyse und Präzedenzfallsuche

**Beispiele:**
• Lex Machina (Litigation Analytics)
• Ravel Law (Visual Legal Research)
• ROSS Intelligence (KI-Rechtsassistent)
• CaseText (CARA AI Research)

**3. Practice Management:**
- Mandantenverwaltung und CRM
- Zeiterfassung und Billing
- Terminplanung und Deadlinemanagement
- Workflow-Automatisierung

**Beispiele:**
• Clio (Cloud-based Practice Management)
• MyCase (All-in-One Law Firm Software)
• PracticePanther (Legal Practice Management)
• TimeSolv (Legal Time Tracking)

**4. E-Discovery & Data Management:**
- Elektronische Beweismittelerfassung
- Datenanalyse und -klassifikation
- Compliance-Monitoring
- Information Governance

**Beispiele:**
• Relativity (E-Discovery Platform)
• Logikcull (Cloud E-Discovery)
• Everlaw (Litigation Platform)
• Nuix (Investigation and Analytics)

**5. Client-Facing Technology:**
- Client Portals und Kommunikationsplattformen
- Online Legal Services
- Legal Chatbots
- Self-Service Legal Tools

**Beispiele:**
• LegalZoom (Consumer Legal Services)
• DoNotPay (Automated Legal Aid)
• Lawgeex (Contract Review AI)
• Neota Logic (Expert Systems)

**Deutsche Legal Tech Landschaft:**

**Etablierte Anbieter:**
- **LegalTech.de:** Plattform für Rechtsberatung
- **Flightright:** Fluggastrechte automatisiert
- **CONNY:** Rechtsschutzversicherung digital
- **Advocado:** Online-Anwaltsvermittlung

**Innovation Hubs:**
- Berlin Legal Tech (Startup-Szene)
- Frankfurt Legal Tech (Fintech-Fokus)
- Munich Legal Tech (Corporate Focus)
- Hamburg Legal Tech (Maritime/Trade Law)

**Universitäre Forschung:**
- Bucerius Law School (Center for Legal Tech)
- EBS Universität (Legal Tech Lab)
- Universität Passau (Digital Law Lab)
- TU München (Legal Informatics)`,
          examples: [
            {
              id: 'ex-4-2-1-1',
              title: 'Legal Tech in der Anwaltspraxis',
              content: 'Beispiel einer mittelständischen Anwaltskanzlei:\n\nVorher (traditionell):\n• Manuelle Vertragserstellung (8 Stunden)\n• Recherche in physischen Kommentaren (4 Stunden)\n• Papierbasierte Mandantenakten\n• Telefon- und E-Mail-Kommunikation\n\nNachher (Legal Tech):\n• Template-basierte Verträge (2 Stunden)\n• KI-gestützte Recherche (1 Stunde)\n• Digitale Mandantenportale\n• Automated Client Updates\n\nErgebnis: 70% Zeitersparnis, höhere Mandantenzufriedenheit',
              explanation: 'Legal Tech kann repetitive Aufgaben automatisieren und Juristen für komplexe Beratung freistellen.'
            }
          ]
        },
        {
          id: 'section-4-2-2',
          title: 'Künstliche Intelligenz in der Rechtspraxis',
          content: `KI revolutioniert die Rechtspraxis durch intelligente Automatisierung und Datenanalyse.

**KI-Technologien im Recht:**

**1. Natural Language Processing (NLP):**
- Automatische Textanalyse von Verträgen
- Extraktion rechtlicher Informationen
- Übersetzung juristischer Texte
- Sentiment-Analyse von Gerichtsentscheidungen

**Anwendungsbeispiele:**
• Contract Intelligence (Klauselanalyse)
• Legal Document Classification
• Automatic Summarization
• Multi-Language Legal Translation

**2. Machine Learning (ML):**
- Musterkennung in Rechtsprechung
- Vorhersage von Gerichtsentscheidungen
- Risk Assessment für Rechtsstreitigkeiten
- Anomalie-Erkennung in Compliance

**Algorithmustypen:**
• Supervised Learning (überwachtes Lernen)
• Unsupervised Learning (unüberwachtes Lernen)  
• Reinforcement Learning (bestärkendes Lernen)
• Deep Learning (tiefe neuronale Netze)

**3. Expert Systems (Expertensysteme):**
- Regelbasierte Entscheidungsunterstützung
- Automated Legal Reasoning
- Compliance-Prüfung
- Steuerberatungsautomatisierung

**Komponenten:**
• Knowledge Base (Wissensbasis)
• Inference Engine (Inferenzmaschine)
• User Interface (Benutzeroberfläche)
• Explanation Module (Erklärungsmodul)

**Konkrete KI-Anwendungen:**

**1. Vertragsanalyse und -prüfung:**
• **Lawgeex:** KI prüft Verträge auf Standardklauseln
• **Kira Systems:** Due Diligence Automatisierung
• **eBrevia:** Contract Analytics Platform
• **Seal Software:** Contract Discovery & Analytics

**Funktionsweise:**
1. Upload des Vertrags in PDF/Word
2. KI identifiziert Standardklauseln
3. Abweichungen werden markiert
4. Risikobewerting wird generiert
5. Verbesserungsvorschläge werden gemacht

**2. Legal Research (Rechtsrecherche):**
• **ROSS Intelligence:** "IBM Watson for Law"
• **CaseText:** CARA AI Research Assistant
• **Westlaw Edge:** KI-enhanced Legal Research
• **Lexis+ AI:** Intelligent Legal Analytics

**Suchverfahren:**
1. Natural Language Query (normale Sprache)
2. Semantic Search (bedeutungsbasiert)
3. Citation Network Analysis
4. Relevance Ranking mit ML
5. Automatic Case Law Updates

**3. Predictive Analytics:**
• **Lex Machina:** Litigation Analytics
• **Premonition:** Legal Intelligence
• **Gavelytics:** Judicial Analytics
• **Legal Robot:** Regulatory Compliance AI

**Vorhersagetypen:**
• Erfolgswahrscheinlichkeit von Klagen
• Verfahrensdauer-Prognosen
• Schadensersatzhöhe-Schätzungen
• Richter-Entscheidungsverhalten

**Grenzen und Herausforderungen:**

**Technische Limitationen:**
⚠ **Black Box Problem:** KI-Entscheidungen nicht nachvollziehbar
⚠ **Bias in Algorithmen:** Verzerrungen in Trainingsdaten
⚠ **Overfitting:** Überanpassung an historische Daten
⚠ **Data Quality Issues:** Schlechte Datenqualität = schlechte Ergebnisse

**Rechtliche Herausforderungen:**
⚠ **Professional Liability:** Haftung für KI-Fehler
⚠ **Attorney-Client Privilege:** Datenschutz bei Cloud-KI
⚠ **Unauthorized Practice:** KI als Rechtsberatung?
⚠ **Ethical Obligations:** Transparenz gegenüber Mandanten

**Deutsche Rechtslage:**
- Rechtsdienstleistungsgesetz (RDG): KI als Rechtsberatung?
- DSGVO: Datenschutz bei KI-Verarbeitung
- Berufshaftung: Anwaltshaftung für KI-Tools
- Berufsordnung: Sorgfaltspflichten bleiben bestehen

**Best Practices für KI-Einsatz:**

**1. Transparenz:**
✓ Mandanten über KI-Nutzung informieren
✓ Grenzen der KI kommunizieren
✓ Menschliche Überprüfung sicherstellen

**2. Qualitätssicherung:**
✓ Regelmäßige Validierung der KI-Ergebnisse
✓ Kontinuierliche Weiterbildung
✓ Fallback-Strategien entwickeln

**3. Datenschutz:**
✓ DSGVO-konforme KI-Tools wählen
✓ Datensicherheit gewährleisten
✓ Auftragsverarbeitung korrekt gestalten`,
          examples: [
            {
              id: 'ex-4-2-2-1',
              title: 'KI-Vertragsanalyse in der Praxis',
              content: 'M&A-Due Diligence mit KI:\n\nAufgabe: Analyse von 500 Verträgen\n\nTraditionell:\n• 200 Anwaltsstunden à 400€ = 80.000€\n• 4 Wochen Bearbeitungszeit\n• Fehlerrisiko durch Ermüdung\n\nMit KI (Kira Systems):\n• 20 Anwaltsstunden à 400€ = 8.000€\n• 2 Tage Bearbeitungszeit  \n• Standardisierte Qualität\n• 90% Kostenreduktion\n\nVorgang:\n1. Verträge in Kira hochladen\n2. KI identifiziert 200+ Klauseltypen\n3. Anwalt prüft kritische Klauseln\n4. Automated Report Generation',
              explanation: 'KI kann bei standardisierten Aufgaben massive Effizienzgewinne erzielen, ersetzt aber nicht die juristische Bewertung.'
            }
          ]
        }
      ],
      resources: [
        {
          id: 'res-4-2-1',
          title: 'Legal Tech Report Deutschland 2023',
          type: 'article',
          url: 'https://www.legaltech.de/report',
          description: 'Umfassender Überblick über den deutschen Legal Tech Markt'
        },
        {
          id: 'res-4-2-2',
          title: 'Stanford CodeX Legal Informatics',
          type: 'website',
          url: 'https://law.stanford.edu/codex-the-stanford-center-for-legal-informatics/',
          description: 'Forschungszentrum für Legal Tech und KI im Recht'
        },
        {
          id: 'res-4-2-3',
          title: 'Bucerius Center for Legal Technology',
          type: 'website',
          url: 'https://www.law-school.de/legal-technology',
          description: 'Deutsche Forschung zu Legal Tech und Digitalisierung'
        }
      ],
      glossary: [
        {
          term: 'Legal Tech',
          definition: 'Technologische Innovationen und Anwendungen zur Optimierung rechtlicher Prozesse und Services'
        },
        {
          term: 'Natural Language Processing',
          definition: 'KI-Teilgebiet zur automatischen Verarbeitung und Analyse natürlicher Sprache'
        },
        {
          term: 'Document Automation',
          definition: 'Automatisierte Erstellung rechtlicher Dokumente basierend auf Templates und Regeln'
        },
        {
          term: 'Predictive Analytics',
          definition: 'Datenanalytische Verfahren zur Vorhersage zukünftiger Ereignisse oder Entscheidungen'
        }
      ]
    },
    exercises: [
      {
        id: 'ex-4-2-1',
        type: 'multipleChoice',
        difficulty: 'intermediate',
        points: 3,
        title: 'Legal Tech Kategorien',
        description: 'Zuordnung von Legal Tech Anwendungen',
        content: {
          question: 'Welche Legal Tech Kategorie passt zu "Automatische Analyse von 1000 Verträgen auf problematische Klauseln"?',
          options: [
            'Practice Management',
            'Document Automation',
            'Legal Research & Analytics',
            'Client-Facing Technology'
          ]
        },
        solution: {
          correct: 2,
          explanation: 'Die automatische Analyse von Vertragsinhalten zur Identifikation problematischer Klauseln fällt unter Legal Research & Analytics, da hier Datenanalyse und Mustererkennung eingesetzt werden.'
        },
        hints: [
          {
            id: 'hint-4-2-1-1',
            text: 'Es geht um die Analyse und Bewertung rechtlicher Inhalte',
            penaltyPoints: 1
          }
        ],
        feedback: {
          correct: 'Richtig! Contract Analytics gehört zu Legal Research & Analytics.',
          incorrect: 'Nicht korrekt. Bei der Vertragsanalyse geht es um Datenanalyse und Mustererkennung.'
        }
      },
      {
        id: 'ex-4-2-2',
        type: 'caseAnalysis',
        difficulty: 'advanced',
        points: 8,
        title: 'KI-Haftung Fallstudie',
        description: 'Analyse der Anwaltshaftung bei KI-Fehlern',
        content: {
          sachverhalt: 'Rechtsanwalt A verwendet eine KI-Software zur Vertragsanalyse. Die KI übersieht eine wichtige Kündigungsklausel in einem Mietvertrag. Dadurch entsteht dem Mandanten M ein Schaden von 50.000€. A hat M nicht über die Verwendung der KI informiert. Die KI-Software war als "hochpräzise" beworben, hatte aber eine bekannte Schwäche bei Kündigungsklauseln.',
          question: 'Prüfen Sie die Anwaltshaftung nach § 280 BGB i.V.m. dem Rechtsanwaltsvertrag.'
        },
        solution: {
          correct: 'Die Anwaltshaftung ist gegeben',
          explanation: 'A haftet nach § 280 BGB:\n\n1. Schuldverhältnis: Rechtsanwaltsvertrag (+)\n2. Pflichtverletzung: Übersehen der Kündigungsklausel trotz Sorgfaltspflicht (+)\n3. Vertretenmüssen: A wusste um Schwäche der KI bei Kündigungsklauseln (+)\n4. Schaden: 50.000€ (+)\n5. Kausalität: Ohne KI-Fehler wäre Klausel erkannt worden (+)\n\nBesonderheiten:\n- Aufklärungspflicht über KI-Nutzung verletzt\n- Sorgfaltspflicht trotz KI-Einsatz unverändert\n- Organisationsverschulden bei bekannten KI-Schwächen',
          evaluationCriteria: [
            'Korrekte Anwendung von § 280 BGB',
            'Erkennung der besonderen Sorgfaltspflichten bei KI-Einsatz',
            'Berücksichtigung der Aufklärungspflicht',
            'Analyse des Organisationsverschuldens'
          ]
        },
        hints: [
          {
            id: 'hint-4-2-2-1',
            text: 'Denken Sie an die besonderen Sorgfaltspflichten bei KI-Tools',
            penaltyPoints: 2
          }
        ],
        feedback: {
          correct: 'Excellente Analyse! Sie haben die besonderen Aspekte der KI-Haftung richtig erkannt.',
          incorrect: 'Überprüfen Sie die Sorgfaltspflichten bei der Nutzung von KI-Tools.'
        }
      },
      {
        id: 'ex-4-2-3',
        type: 'multipleChoice',
        difficulty: 'intermediate',
        points: 3,
        title: 'Legal Tech Trends',
        description: 'Aktuelle Entwicklungen in der Rechtstechnologie',
        content: {
          question: 'Welche Legal Tech-Innovation hat das größte Potenzial zur Kostensenkung in Anwaltskanzleien?',
          options: [
            'Blockchain für Vertragsabschlüsse',
            'Virtual Reality für Gerichtstermine',
            'Document Automation für Standardverträge',
            'Augmented Reality für Juristenausbildung'
          ]
        },
        solution: {
          correct: 2,
          explanation: 'Document Automation kann repetitive Dokumentenerstellung um bis zu 80% beschleunigen und dabei Fehler reduzieren, was erhebliche Kosteneinsparungen ermöglicht.'
        },
        hints: [
          {
            id: 'hint-4-2-3-1',
            text: 'Denken Sie an die häufigsten wiederkehrenden Aufgaben in Kanzleien',
            penaltyPoints: 1
          }
        ],
        feedback: {
          correct: 'Richtig! Document Automation hat den größten praktischen Impact.',
          incorrect: 'Überdenken Sie, welche Technologie den Kanzleialltag am meisten verändert.'
        }
      },
      {
        id: 'ex-4-2-4',
        type: 'dragDrop',
        difficulty: 'advanced',
        points: 6,
        title: 'Legal Tech Implementierung',
        description: 'Richtige Reihenfolge der Legal Tech Einführung',
        content: {
          question: 'Ordnen Sie die Schritte einer systematischen Legal Tech Einführung in der richtigen Reihenfolge:',
          items: [
            {
              id: 'step1',
              content: 'Mitarbeiterschulung und Change Management',
              correctPosition: 4
            },
            {
              id: 'step2',
              content: 'Bedarfsanalyse und Prozessmapping',
              correctPosition: 1
            },
            {
              id: 'step3',
              content: 'Tool-Auswahl und Proof of Concept',
              correctPosition: 2
            },
            {
              id: 'step4',
              content: 'Vollständige Implementierung und Go-Live',
              correctPosition: 5
            },
            {
              id: 'step5',
              content: 'Pilotprojekt mit ausgewählten Bereichen',
              correctPosition: 3
            }
          ]
        },
        solution: {
          correct: [2, 3, 5, 1, 4],
          explanation: 'Erfolgreiche Legal Tech Einführung beginnt mit Analyse, geht über Tool-Auswahl und Pilotierung zur Schulung und schließlich zur vollständigen Implementierung.'
        },
        hints: [
          {
            id: 'hint-4-2-4-1',
            text: 'Starten Sie immer mit der Analyse der bestehenden Prozesse',
            penaltyPoints: 2
          }
        ],
        feedback: {
          correct: 'Excellent! Sie verstehen den systematischen Implementierungsansatz.',
          incorrect: 'Überprüfen Sie die logische Reihenfolge der Implementierungsphasen.'
        }
      },
      {
        id: 'ex-4-2-5',
        type: 'fillInBlanks',
        difficulty: 'intermediate',
        points: 4,
        title: 'KI-Technologien verstehen',
        description: 'Grundlagen der Künstlichen Intelligenz im Recht',
        content: {
          question: 'Vervollständigen Sie die KI-Technologie-Beschreibungen:',
          template: '___ Processing ermöglicht die automatische Analyse von Rechtstexten. ___ Learning erkennt Muster in Gerichtsentscheidungen. ___ Systems verwenden regelbasierte Entscheidungslogik für Compliance-Prüfungen.'
        },
        solution: {
          correct: ['Natural Language', 'Machine', 'Expert'],
          explanation: 'Natural Language Processing (NLP) analysiert Texte, Machine Learning erkennt Muster, Expert Systems nutzen Regeln.',
          alternativeAnswers: ['NLP', 'ML']
        },
        hints: [
          {
            id: 'hint-4-2-5-1',
            text: 'Denken Sie an die drei Hauptkategorien der KI im Recht',
            penaltyPoints: 1
          }
        ],
        feedback: {
          correct: 'Sehr gut! Sie verstehen die verschiedenen KI-Technologien.',
          incorrect: 'Wiederholen Sie die Grundlagen der KI-Kategorien.'
        }
      }
    ],
    estimatedMinutes: 1200, // 20 Stunden
    requiredMastery: 85
  },

  // 4.3 Datenschutz und IT-Sicherheit im Recht (20 Stunden)
  {
    id: 'zm1-3-datenschutz-sicherheit',
    moduleId: 'propaedeutikum',
    order: 18,
    title: '4.3 Datenschutz und IT-Sicherheit in der Rechtspraxis',
    objectives: [
      {
        id: 'obj-4-3-1',
        description: 'DSGVO-Anforderungen in der Kanzleipraxis umsetzen',
        bloomLevel: 'apply'
      },
      {
        id: 'obj-4-3-2',
        description: 'IT-Sicherheitsrisiken in Kanzleien bewerten',
        bloomLevel: 'evaluate'
      },
      {
        id: 'obj-4-3-3',
        description: 'Compliance-Strategien für Legal Tech entwickeln',
        bloomLevel: 'create'
      }
    ],
    content: {
      id: 'content-4-3',
      type: 'mixed',
      sections: [
        {
          id: 'section-4-3-1',
          title: 'DSGVO in der Anwaltspraxis',
          content: `Die Datenschutz-Grundverordnung stellt besondere Anforderungen an Rechtsanwaltskanzleien.

**Besonderheiten für Anwaltskanzleien:**

**1. Berufsgeheimnisprivileg vs. DSGVO:**
- § 203 StGB: Anwaltsgeheimnis als Strafrecht
- Art. 9 DSGVO: Berufsgeheimnis als Erlaubnistatbestand
- Spannungsfeld zwischen Datenschutz und Mandantenschutz
- Vorrang des Mandantengeheimnisses

**2. Rechtsgrundlagen für Datenverarbeitung:**
- **Art. 6 Abs. 1 lit. b DSGVO:** Vertragserfüllung (Mandatsvertrag)
- **Art. 6 Abs. 1 lit. c DSGVO:** Rechtliche Verpflichtung (Geldwäschegesetz)
- **Art. 6 Abs. 1 lit. f DSGVO:** Berechtigte Interessen (Kanzleiverwaltung)
- **Art. 9 Abs. 2 lit. g DSGVO:** Erhebliches öffentliches Interesse

**3. Mandantenaufklärung nach DSGVO:**
- Datenschutzerklärung bei Mandatsübernahme
- Information über Datenverarbeitung
- Aufklärung über IT-Tools und Cloud-Services
- Widerspruchsrechte und Betroffenenrechte

**Praktische Umsetzung:**

**Technische und organisatorische Maßnahmen (TOMs):**

**1. Zugangskontrollen:**
✓ Sichere Passwörter (min. 12 Zeichen, komplex)
✓ Zwei-Faktor-Authentifizierung (2FA)
✓ Biometrische Systeme (Fingerprint, Face-ID)
✓ Zugangsprotokolle und Monitoring

**2. Zugriffskontrollen:**
✓ Rollenbasierte Berechtigungen
✓ Mandanten-spezifische Datentrennung
✓ Verschlüsselung sensitiver Daten
✓ Clean Desk Policy

**3. Übertragungskontrollen:**
✓ E-Mail-Verschlüsselung (S/MIME, PGP)
✓ VPN für Remote-Zugriff
✓ Sichere Datenübertragung (HTTPS, SFTP)
✓ Verschlüsselte Messenger (Signal, Threema)

**4. Eingabekontrollen:**
✓ Audit-Logs für alle Systemzugriffe
✓ Versionskontrolle bei Dokumentenbearbeitung
✓ Digitale Signaturen
✓ Change-Management-Prozesse

**Auftragsverarbeitung nach Art. 28 DSGVO:**

**Typische Auftragsverarbeiter in Kanzleien:**
- Cloud-Storage-Anbieter (Dropbox, Google Drive, OneDrive)
- E-Mail-Provider (Microsoft, Google)
- Kanzleisoftware-Anbieter (RA-MICRO, LawFirm)
- Backup-Services und Archivierung
- IT-Dienstleister und Support

**Vertragliche Anforderungen:**
✓ Schriftlicher Auftragsverarbeitungsvertrag (AVV)
✓ Detaillierte Beschreibung der Verarbeitung
✓ Technische und organisatorische Maßnahmen
✓ Subunternehmer-Regelungen
✓ Weisungsbefugnis des Verantwortlichen

**Internationale Datentransfers:**

**Drittländer-Problematik:**
⚠ USA: Privacy Shield ungültig (Schrems II)
⚠ Cloud-Services oft US-amerikanisch
⚠ Standardvertragsklauseln (SCC) erforderlich
⚠ Transfer Impact Assessment (TIA) notwendig

**Sichere Alternativen:**
✓ Deutsche/EU-Anbieter bevorzugen
✓ Privacy Shield Nachfolger abwarten
✓ Encryption als zusätzliche Schutzmaßnahme
✓ Data Localization-Optionen nutzen

**Betroffenenrechte in der Kanzlei:**

**Mandanten als Betroffene:**
- Auskunftsrecht (Art. 15 DSGVO)
- Berichtigungsrecht (Art. 16 DSGVO)
- Löschrecht (Art. 17 DSGVO) - begrenzt durch Aufbewahrungspflichten
- Widerspruchsrecht (Art. 21 DSGVO)
- Datenübertragbarkeit (Art. 20 DSGVO)

**Aufbewahrungsfristen vs. Löschpflicht:**
- Steuerrecht: 10 Jahre (§ 147 AO)
- Handelsrecht: 6 Jahre (§ 257 HGB)
- Anwaltsrecht: Angemessene Frist (BRAO)
- DSGVO: Löschung nach Zweckerfüllung

**Datenschutz-Folgenabschätzung (DSFA):**

**Wann erforderlich?**
- Hochrisiko-Verarbeitung
- Neue Technologien (KI, Blockchain)
- Systematische Überwachung
- Große Mengen sensibler Daten

**Durchführung:**
1. Beschreibung der Verarbeitungsvorgänge
2. Bewertung der Notwendigkeit und Verhältnismäßigkeit
3. Risikobewertung für Betroffene
4. Geplante Abhilfemaßnahmen`,
          examples: [
            {
              id: 'ex-4-3-1-1',
              title: 'Cloud-Nutzung DSGVO-konform',
              content: 'Kanzlei möchte Microsoft 365 einsetzen:\n\nProbleme:\n• Server teilweise in USA\n• Telemetriedaten an Microsoft\n• Zugriff durch US-Behörden (CLOUD Act)\n\nLösungsansätze:\n✓ EU-Datencenter wählen (Microsoft EU Data Boundary)\n✓ Auftragsverarbeitungsvertrag abschließen\n✓ Telemetrie deaktivieren\n✓ Zusätzliche Verschlüsselung (Bring Your Own Key)\n✓ Transfer Impact Assessment durchführen\n✓ Mandanten informieren und Einwilligung einholen',
              explanation: 'DSGVO-konforme Cloud-Nutzung erfordert sorgfältige Planung und mehrschichtige Schutzmaßnahmen.'
            }
          ]
        },
        {
          id: 'section-4-3-2',
          title: 'IT-Sicherheit in Kanzleien',
          content: `Anwaltskanzleien sind attraktive Ziele für Cyberangriffe aufgrund sensibler Mandantendaten.

**Bedrohungslandschaft für Kanzleien:**

**1. Ransomware-Angriffe:**
- Verschlüsselung aller Kanzleidaten
- Lösegeldforderungen in Kryptowährung
- Geschäftsunterbrechung wochenlang
- Reputationsschäden durch Datenlecks

**Bekannte Angriffe:**
• 2019: DLA Piper (globale Kanzlei, Petya-Ransomware)
• 2020: Grubman Shire (Entertainment Law, REvil-Ransomware)
• 2021: Campbell Conroy & O'Neil (1,5 GB Mandantendaten)

**2. Phishing und Social Engineering:**
- Gefälschte E-Mails von "Mandanten"
- Fake-Anrufe mit dringenden Geldtransfers
- Kompromittierte E-Mail-Konten (BEC - Business Email Compromise)
- Vishing (Voice Phishing) und Smishing (SMS Phishing)

**3. Insider-Bedrohungen:**
- Unzufriedene Mitarbeiter
- Unabsichtliche Datenlecks
- Schwache Passwörter und Sicherheitspraktiken
- USB-Sticks und mobile Geräte

**IT-Sicherheitsframework für Kanzleien:**

**1. Endpoint Security:**
- **Next-Generation Antivirus (NGAV):** Verhaltensbasierte Erkennung
- **Endpoint Detection and Response (EDR):** Kontinuierliches Monitoring
- **Application Control:** Nur genehmigte Software
- **Device Control:** USB-Ports und Wechselmedien kontrollieren

**Empfohlene Lösungen:**
• CrowdStrike Falcon (Cloud-basiert)
• Microsoft Defender for Business
• Bitdefender GravityZone
• SentinelOne (AI-basierte Erkennung)

**2. E-Mail-Sicherheit:**
- **Anti-Phishing:** URL-Filtering und Sandboxing
- **Advanced Threat Protection:** Zero-Day-Exploits abwehren
- **E-Mail-Verschlüsselung:** S/MIME oder PGP
- **Spam-Filtering:** Machine Learning-basiert

**Anbieter:**
• Microsoft Defender for Office 365
• Proofpoint Email Security
• Mimecast Email Security
• Barracuda Email Security Gateway

**3. Network Security:**
- **Next-Generation Firewall (NGFW):** Deep Packet Inspection
- **Intrusion Detection/Prevention (IDS/IPS):** Anomalie-Erkennung
- **VPN-Lösungen:** Sicherer Remote-Zugriff
- **Network Segmentation:** Mandanten-Daten isolieren

**4. Backup und Recovery:**
- **3-2-1-Regel:** 3 Kopien, 2 verschiedene Medien, 1 offline
- **Air-Gapped Backups:** Nicht mit Netzwerk verbunden
- **Disaster Recovery Plan:** Dokumentierte Wiederherstellungsprozesse
- **Regular Testing:** Backup-Wiederherstellung testen

**Compliance und Frameworks:**

**ISO 27001 für Kanzleien:**
- Informationssicherheits-Managementsystem (ISMS)
- Risk Assessment und Treatment
- Kontinuierliche Verbesserung
- Jährliche Audits und Zertifizierung

**NIST Cybersecurity Framework:**
1. **Identify:** Assets und Risiken identifizieren
2. **Protect:** Schutzmaßnahmen implementieren
3. **Detect:** Sicherheitsereignisse erkennen
4. **Respond:** Incident Response durchführen
5. **Recover:** Normale Geschäftstätigkeit wiederherstellen

**BSI IT-Grundschutz:**
- Deutsche Standards für IT-Sicherheit
- Branchenspezifische Bausteine
- Gefährdungskatalog und Maßnahmenempfehlungen
- Zertifizierung nach ISO 27001 auf Basis IT-Grundschutz

**Incident Response für Kanzleien:**

**Sofortmaßnahmen bei Cyberangriff:**
1. **Containment:** Betroffene Systeme isolieren
2. **Assessment:** Schadensumfang bewerten
3. **Notification:** Mandanten und Behörden informieren
4. **Documentation:** Alle Schritte dokumentieren
5. **Recovery:** Systeme sicher wiederherstellen

**Rechtliche Meldepflichten:**
- DSGVO: Datenschutzverletzung binnen 72h an Aufsichtsbehörde
- Mandanten: Unverzügliche Information bei Betroffenheit
- Versicherung: Cyberversicherung umgehend informieren
- Strafverfolgung: Bei Verdacht auf Straftat Anzeige erstatten

**Cyber-Versicherung für Kanzleien:**

**Abgedeckte Schäden:**
✓ Eigenschäden (IT-Wiederherstellung, Betriebsunterbrechung)
✓ Drittschäden (Haftpflicht gegenüber Mandanten)
✓ Erpressungsschäden (Ransomware-Zahlungen)
✓ Rechtsschutz (Anwaltskosten, Regulierung)

**Ausschlüsse beachten:**
⚠ Vorsätzliche Handlungen
⚠ Kriegs- und Terrorakte
⚠ Nicht gemeldete Sicherheitslücken
⚠ Veraltete Software ohne Updates`,
          examples: [
            {
              id: 'ex-4-3-2-1',
              title: 'Ransomware-Angriff Fallstudie',
              content: 'Mittelständische Kanzlei (50 Mitarbeiter) wird Opfer von Ransomware:\n\nAngriffsverlauf:\n• Montag 08:00: Phishing-E-Mail an Sekretariat\n• Montag 08:15: Malware-Download und -Ausführung\n• Montag 12:00: Laterale Bewegung im Netzwerk\n• Dienstag 02:00: Verschlüsselung aller Dateien\n• Dienstag 08:00: Lösegeldforderung (500.000€)\n\nSofortmaßnahmen:\n1. Alle Systeme vom Netz trennen\n2. IT-Forensik-Experten beauftragen\n3. Cyberversicherung informieren\n4. DSGVO-Meldung an Datenschutzbehörde\n5. Mandanten über mögliche Datenverletzung informieren\n\nLernerfahrungen:\n• Offline-Backups waren entscheidend für Recovery\n• Incident Response Plan verkürzte Reaktionszeit\n• Cyber-Versicherung übernahm 80% der Kosten',
              explanation: 'Erfolgreiche Ransomware-Abwehr erfordert präventive Maßnahmen und vorbereitete Response-Pläne.'
            }
          ]
        }
      ],
      resources: [
        {
          id: 'res-4-3-1',
          title: 'BSI-Leitfaden IT-Sicherheit für Anwaltskanzleien',
          type: 'article',
          url: 'https://www.bsi.bund.de/leitfaden-anwaltskanzleien',
          description: 'Praktische Empfehlungen des Bundesamts für Sicherheit in der Informationstechnik'
        },
        {
          id: 'res-4-3-2',
          title: 'BRAK-Stellungnahme zur DSGVO',
          type: 'article',
          url: 'https://www.brak.de/dsgvo-stellungnahme',
          description: 'Offizielle Stellungnahme der Bundesrechtsanwaltskammer zur DSGVO-Umsetzung'
        },
        {
          id: 'res-4-3-3',
          title: 'ABA Cybersecurity Handbook',
          type: 'book',
          url: 'https://www.americanbar.org/cybersecurity',
          description: 'Umfassendes Handbuch zur Cybersicherheit in Anwaltskanzleien'
        }
      ],
      glossary: [
        {
          term: 'DSGVO',
          definition: 'Datenschutz-Grundverordnung der EU, die den Schutz personenbezogener Daten regelt'
        },
        {
          term: 'Auftragsverarbeitung',
          definition: 'Verarbeitung personenbezogener Daten durch einen Dritten im Auftrag des Verantwortlichen'
        },
        {
          term: 'Ransomware',
          definition: 'Schadprogramm, das Daten verschlüsselt und Lösegeld für die Entschlüsselung fordert'
        },
        {
          term: 'Zero-Day-Exploit',
          definition: 'Angriff auf eine noch nicht bekannte und daher ungepatchte Sicherheitslücke'
        }
      ]
    },
    exercises: [
      {
        id: 'ex-4-3-1',
        type: 'multipleChoice',
        difficulty: 'intermediate',
        points: 3,
        title: 'DSGVO-Rechtsgrundlagen',
        description: 'Auswahl der korrekten Rechtsgrundlage für Datenverarbeitung',
        content: {
          question: 'Eine Kanzlei speichert Mandantendaten zur Vertragsabwicklung. Welche Rechtsgrundlage nach DSGVO ist einschlägig?',
          options: [
            'Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)',
            'Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung)',
            'Art. 6 Abs. 1 lit. c DSGVO (Rechtliche Verpflichtung)',
            'Art. 6 Abs. 1 lit. f DSGVO (Berechtigte Interessen)'
          ]
        },
        solution: {
          correct: 1,
          explanation: 'Art. 6 Abs. 1 lit. b DSGVO ermöglicht die Verarbeitung zur Erfüllung eines Vertrags. Der Mandatsvertrag rechtfertigt die Speicherung der für die Rechtsberatung erforderlichen Daten.'
        },
        hints: [
          {
            id: 'hint-4-3-1-1',
            text: 'Denken Sie an die Vertragsbeziehung zwischen Anwalt und Mandant',
            penaltyPoints: 1
          }
        ],
        feedback: {
          correct: 'Richtig! Die Vertragserfüllung ist die passende Rechtsgrundlage.',
          incorrect: 'Überprüfen Sie die Rechtsgrundlagen für Vertragserfüllung.'
        }
      },
      {
        id: 'ex-4-3-2',
        type: 'caseAnalysis',
        difficulty: 'advanced',
        points: 10,
        title: 'Cybersecurity Incident Response',
        description: 'Entwicklung einer Incident Response Strategie',
        content: {
          sachverhalt: 'Eine Anwaltskanzlei mit 30 Mitarbeitern stellt fest, dass unbekannte Dritte über 3 Monate hinweg Zugriff auf E-Mail-Konten hatten. Betroffen sind E-Mails mit Mandantendaten aus M&A-Transaktionen im Wert von 500 Millionen Euro. Die Angreifer haben vermutlich Insider-Informationen abgegriffen. Der Angriff wurde durch eine verdächtige E-Mail-Weiterleitung entdeckt.',
          question: 'Entwickeln Sie einen strukturierten Incident Response Plan für die ersten 72 Stunden.'
        },
        solution: {
          correct: 'Strukturierter 72h-Response-Plan erforderlich',
          explanation: 'Sofortmaßnahmen (0-4h):\n1. Incident Response Team aktivieren\n2. Betroffene E-Mail-Accounts sperren\n3. Forensische Sicherung der Systeme\n4. Schadensbewertung beginnen\n\nTag 1 (4-24h):\n5. IT-Forensik-Experten beauftragen\n6. Cyberversicherung informieren\n7. Anwaltliche Beratung (Privilege-Schutz)\n8. Erste Mandantenliste erstellen\n\nTag 2-3 (24-72h):\n9. DSGVO-Meldung an Aufsichtsbehörde\n10. Betroffene Mandanten informieren\n11. Behörden informieren (BaFin, etc.)\n12. Krisenkommunikation vorbereiten\n13. Systemhärtung und Monitoring\n14. Recovery-Plan entwickeln',
          evaluationCriteria: [
            'Zeitliche Strukturierung der Maßnahmen',
            'Berücksichtigung rechtlicher Meldepflichten',
            'Mandantenschutz und Attorney-Client Privilege',
            'Einbeziehung externer Experten',
            'Präventive Maßnahmen für die Zukunft'
          ]
        },
        hints: [
          {
            id: 'hint-4-3-2-1',
            text: 'Beachten Sie die 72h-Meldefrist der DSGVO',
            penaltyPoints: 2
          }
        ],
        feedback: {
          correct: 'Exzellente Incident Response Planung! Sie haben alle kritischen Aspekte berücksichtigt.',
          incorrect: 'Überprüfen Sie die zeitkritischen Meldepflichten und Sofortmaßnahmen.'
        }
      },
      {
        id: 'ex-4-3-3',
        type: 'multipleChoice',
        difficulty: 'intermediate',
        points: 3,
        title: 'DSGVO Auftragsverarbeitung',
        description: 'Korrekte Umsetzung der Auftragsverarbeitung',
        content: {
          question: 'Eine Kanzlei möchte ihre E-Mails über Microsoft 365 abwickeln. Was ist ZWINGEND erforderlich?',
          options: [
            'Nur eine einfache Datenschutzerklärung',
            'Auftragsverarbeitungsvertrag (AVV) nach Art. 28 DSGVO',
            'Einwilligung aller Mandanten',
            'Genehmigung der Rechtsanwaltskammer'
          ]
        },
        solution: {
          correct: 1,
          explanation: 'Art. 28 DSGVO verlangt zwingend einen schriftlichen Auftragsverarbeitungsvertrag, wenn ein Dritter (Microsoft) personenbezogene Daten im Auftrag verarbeitet.'
        },
        hints: [
          {
            id: 'hint-4-3-3-1',
            text: 'Denken Sie an die DSGVO-Vorschriften für externe Dienstleister',
            penaltyPoints: 1
          }
        ],
        feedback: {
          correct: 'Richtig! Der AVV ist das zentrale Instrument der Auftragsverarbeitung.',
          incorrect: 'Überprüfen Sie die DSGVO-Anforderungen für externe Datenverarbeitung.'
        }
      },
      {
        id: 'ex-4-3-4',
        type: 'dragDrop',
        difficulty: 'advanced',
        points: 5,
        title: 'IT-Sicherheitsmaßnahmen priorisieren',
        description: 'Richtige Prioritätensetzung bei der IT-Sicherheit',
        content: {
          question: 'Ordnen Sie die IT-Sicherheitsmaßnahmen nach Priorität (1=höchste, 5=niedrigste):',
          items: [
            {
              id: 'measure1',
              content: 'Regelmäßige Backups und Recovery-Tests',
              correctPosition: 2
            },
            {
              id: 'measure2',
              content: 'Zwei-Faktor-Authentifizierung (2FA)',
              correctPosition: 1
            },
            {
              id: 'measure3',
              content: 'Mitarbeiterschulungen zu Phishing',
              correctPosition: 3
            },
            {
              id: 'measure4',
              content: 'Intrusion Detection System (IDS)',
              correctPosition: 5
            },
            {
              id: 'measure5',
              content: 'E-Mail-Verschlüsselung',
              correctPosition: 4
            }
          ]
        },
        solution: {
          correct: [2, 1, 3, 5, 4],
          explanation: 'Prioritäten: 1. 2FA (Grundschutz), 2. Backups (Ausfallsicherheit), 3. Schulungen (Human Firewall), 4. Verschlüsselung (Compliance), 5. IDS (Monitoring).'
        },
        hints: [
          {
            id: 'hint-4-3-4-1',
            text: 'Beginnen Sie mit den kostengünstigen Grundschutzmaßnahmen',
            penaltyPoints: 2
          }
        ],
        feedback: {
          correct: 'Perfekt! Sie verstehen die richtige Sicherheitspriorisierung.',
          incorrect: 'Überdenken Sie, welche Maßnahmen den größten Schutz bei geringsten Kosten bieten.'
        }
      },
      {
        id: 'ex-4-3-5',
        type: 'fillInBlanks',
        difficulty: 'intermediate',
        points: 4,
        title: 'Cyber-Versicherung verstehen',
        description: 'Wichtige Aspekte der Cyber-Versicherung für Kanzleien',
        content: {
          question: 'Vervollständigen Sie die Cyber-Versicherungs-Grundlagen:',
          template: 'Cyber-Versicherungen decken ___ (eigene IT-Kosten), ___ (Haftung gegenüber Dritten) und ___ ab. Wichtig: ___ Handlungen sind typischerweise ausgeschlossen.'
        },
        solution: {
          correct: ['Eigenschäden', 'Drittschäden', 'Erpressungsschäden', 'Vorsätzliche'],
          explanation: 'Cyber-Versicherungen haben drei Hauptdeckungsbereiche plus wichtige Ausschlüsse für vorsätzliche Handlungen.',
          alternativeAnswers: ['Erste-Partei-Schäden', 'Dritte-Partei-Schäden', 'Ransomware']
        },
        hints: [
          {
            id: 'hint-4-3-5-1',
            text: 'Denken Sie an die drei Hauptschadensbereiche plus Ausschlüsse',
            penaltyPoints: 1
          }
        ],
        feedback: {
          correct: 'Sehr gut! Sie verstehen die Struktur von Cyber-Versicherungen.',
          incorrect: 'Wiederholen Sie die verschiedenen Deckungsbereiche der Cyber-Versicherung.'
        }
      },
      {
        id: 'ex-4-3-6',
        type: 'multipleChoice',
        difficulty: 'beginner',
        points: 2,
        title: 'Betroffenenrechte DSGVO',
        description: 'Grundlagen der Betroffenenrechte',
        content: {
          question: 'Ein Mandant verlangt die Löschung seiner Daten nach Art. 17 DSGVO. Kann die Kanzlei die Löschung verweigern?',
          options: [
            'Nein, Löschung muss immer erfolgen',
            'Ja, wenn Aufbewahrungspflichten bestehen (§ 147 AO, § 257 HGB)',
            'Ja, aber nur bei laufenden Verfahren',
            'Nein, es sei denn der Mandant zahlt die Kosten'
          ]
        },
        solution: {
          correct: 1,
          explanation: 'Art. 17 Abs. 3 lit. b DSGVO erlaubt Ausnahmen vom Löschrecht, wenn rechtliche Verpflichtungen zur Aufbewahrung bestehen (Steuerrecht: 10 Jahre, Handelsrecht: 6 Jahre).'
        },
        hints: [
          {
            id: 'hint-4-3-6-1',
            text: 'Denken Sie an die Ausnahmen vom Löschrecht in Art. 17 Abs. 3 DSGVO',
            penaltyPoints: 1
          }
        ],
        feedback: {
          correct: 'Richtig! Aufbewahrungspflichten haben Vorrang vor dem Löschrecht.',
          incorrect: 'Überprüfen Sie die Ausnahmen vom Löschrecht in der DSGVO.'
        }
      }
    ],
    estimatedMinutes: 1200, // 20 Stunden
    requiredMastery: 85
  }
];