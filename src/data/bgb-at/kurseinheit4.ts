import { LearningUnit, Exercise } from '../../types/learning';

// KURSEINHEIT 4: AGB und Internet-Verträge (55101-04)
// Basierend auf FernUni Hagen PDF 55101-04-S#1-2001624.pdf
// Autoren: Prof. Dr. Sebastian Kubis, Prof. Dr. Ulrich Eisenhardt

export const kurseinheit4BGBUnits: LearningUnit[] = [
  // 4.1 Allgemeine Geschäftsbedingungen (AGB) (25 Stunden)
  {
    id: 'bgb-ke4-1-agb',
    moduleId: 'bgb-at',
    order: 8,
    title: '4.1 Allgemeine Geschäftsbedingungen (AGB)',
    objectives: [
      {
        id: 'obj-bgb-4-1-1',
        description: 'Den Begriff und die Bedeutung von AGB verstehen und definieren können',
        bloomLevel: 'understand'
      },
      {
        id: 'obj-bgb-4-1-2',
        description: 'Die AGB-Kontrolle systematisch durchführen können',
        bloomLevel: 'apply'
      },
      {
        id: 'obj-bgb-4-1-3',
        description: 'Unterschiede zwischen B2B- und B2C-Verträgen bei AGB analysieren',
        bloomLevel: 'analyze'
      },
      {
        id: 'obj-bgb-4-1-4',
        description: 'Die Wirksamkeit von AGB-Klauseln rechtlich bewerten',
        bloomLevel: 'evaluate'
      }
    ],
    content: {
      id: 'content-bgb-4-1',
      type: 'mixed',
      sections: [
        {
          id: 'section-bgb-4-1-1',
          title: '📋 Begriff und Bedeutung der AGB',
          content: `Allgemeine Geschäftsbedingungen sind vorformulierte Vertragsbedingungen für eine Vielzahl von Verträgen.

**🎯 Definition AGB (§ 305 I BGB):**
Allgemeine Geschäftsbedingungen sind alle für eine Vielzahl von Verträgen vorformulierten Vertragsbedingungen, die eine Vertragspartei (Verwender) der anderen Vertragspartei bei Abschluss eines Vertrags stellt.

**🔑 Merkmale von AGB:**

**1. Vorformulierung:**
- Vor Vertragsschluss aufgestellt
- Nicht für den konkreten Einzelfall
- Standardisierte Textbausteine
- Auch elektronische Formulare

**2. Für eine Vielzahl von Verträgen:**
- Mindestens dreimalige Verwendung
- Geplante Mehrfachverwendung genügt
- Nicht nur einmaliger Gebrauch

**3. Einseitige Stellung:**
- Verwender stellt sie der anderen Partei
- Keine gemeinsame Aushandlung
- Asymmetrische Machtverteilung

**📊 Abgrenzungen:**

| AGB | Individualabrede |
|-----|------------------|
| Vorformuliert | Im Einzelfall ausgehandelt |
| Vielzahl von Verträgen | Für konkreten Vertrag |
| Einseitig gestellt | Beiderseitig entwickelt |

**🏢 Wirtschaftliche Bedeutung:**
- Rationalisierung des Rechtsverkehrs
- Kosteneinsparung durch Standardisierung
- Aber: Risiko einseitiger Benachteiligung
- Daher: Gesetzliche Kontrolle erforderlich

**⚖️ Rechtspolitischer Hintergrund:**
- Schutz vor Machtmissbrauch
- Ausgleich struktureller Unterlegenheit
- Wiederherstellung der Vertragsparität
- Erhaltung funktionsfähigen Wettbewerbs`,
          examples: [
            {
              id: 'ex-bgb-4-1-1',
              title: '🛒 Beispiel: Online-Shop-AGB',
              content: `**Sachverhalt:** 
Online-Händler H verwendet auf seiner Website folgende "Allgemeine Geschäftsbedingungen":
- Lieferzeit: 2-3 Werktage
- Zahlung nur per Vorkasse
- Gewährleistung: 1 Jahr
- Gerichtsstand: Hamburg

**Analyse als AGB:**
1. **Vorformulierung:** ✓ - Vor Vertragsschlüssen erstellt
2. **Vielzahl von Verträgen:** ✓ - Für alle Kunden verwendet
3. **Einseitige Stellung:** ✓ - H stellt sie allen Kunden

**Ergebnis:** Liegt AGB vor → § 305 ff. BGB anwendbar
- Einbeziehungskontrolle erforderlich
- Inhaltskontrolle bei Verbrauchern
- Besondere Transparenzpflichten`,
              explanation: 'Standard-AGB eines Online-Shops unterliegen der vollen AGB-Kontrolle.'
            }
          ]
        },
        {
          id: 'section-bgb-4-1-2',
          title: '🔍 Einbeziehung von AGB (§ 305 II BGB)',
          content: `Damit AGB Vertragsbestandteil werden, müssen sie ordnungsgemäß einbezogen werden.

**📋 Voraussetzungen der Einbeziehung:**

**1. Hinweis (§ 305 II Nr. 1 BGB):**
- Ausdrücklicher Hinweis bei Vertragsschluss
- "Es gelten unsere AGB"
- Auch konkludent möglich (Aushang)
- Bei Online-Verträgen: Deutlich sichtbar

**2. Möglichkeit der Kenntnisnahme (§ 305 II Nr. 2 BGB):**
- **Zumutbare Weise:** Text verfügbar machen
- **Online:** Download oder Anzeige möglich
- **Offline:** Aushang oder Aushändigung
- Nicht: Verweis auf Internet bei Offline-Geschäft

**3. Einverständnis (§ 305 II Nr. 2 BGB):**
- Ausdrücklich oder konkludent
- Bei Online-Shops: Checkbox oder Button
- Stillschweigende Zustimmung möglich
- Aber: Kein überraschendes Verhalten

**❌ Unwirksame Einbeziehung:**

**Überraschende Klauseln (§ 305c I BGB):**
- Ungewöhnliche, unerwartete Klauseln
- Versteckte Kostenfallen
- Widerspruch zu Hauptleistung
- Auch bei ordnungsgemäßem Hinweis unwirksam

**Doppelte Schriftformklausel:**
- Klausel, die Schriftform für Änderungen verlangt
- Kann selbst nicht schriftlich geändert werden
- Rechtsmissbrauch bei AGB

**💻 Besonderheiten im E-Commerce:**

**Button-Lösung (§ 312j BGB):**
- "Kostenpflichtig bestellen", "Kaufen"
- Eindeutige Kennzeichnung Pflicht
- Fehlende Kennzeichnung → Unwirksamkeit

**Click-Wrap vs. Browse-Wrap:**
- **Click-Wrap:** Aktive Zustimmung (Button/Checkbox)
- **Browse-Wrap:** Passive Kenntnisnahme
- Click-Wrap rechtssicherer`,
          examples: [
            {
              id: 'ex-bgb-4-1-2',
              title: '✈️ Beispiel: Flugbuchung mit überraschender Klausel',
              content: `**Sachverhalt:** 
Fluglinie F hat in ihren AGB folgende Klausel: "Bei Verspätung über 3 Stunden wird eine Bearbeitungsgebühr von 50 € fällig." 
Die AGB wurden ordnungsgemäß einbezogen.

**Problem:** Überraschende Klausel nach § 305c I BGB?

**Lösung:**
1. **Gewöhnliche Erwartung:** Entschädigung bei Verspätung (EU-VO)
2. **Klauselinhalt:** Zusätzliche Gebühr bei Verspätung
3. **Bewertung:** Widersprüchlich zur gesetzlichen Regelung
4. **Ergebnis:** Überraschende Klausel → unwirksam

**Folge:** Klausel wird nicht Vertragsbestandteil
- Restlicher Vertrag bleibt wirksam
- Gesetzliche Regelungen treten ein (EU-Fluggastrechte)`,
              explanation: 'Klauseln, die der gewöhnlichen Erwartung widersprechen, können überraschend sein.'
            }
          ]
        },
        {
          id: 'section-bgb-4-1-3',
          title: '⚖️ Inhaltskontrolle von AGB',
          content: `Die Inhaltskontrolle prüft, ob AGB-Klauseln den Vertragspartner unangemessen benachteiligen.

**🎯 System der Inhaltskontrolle:**

**§ 309 BGB - Klauselverbote ohne Wertungsmöglichkeit:**
- **Absolute Verbote** ("schwarze Liste")
- Unwirksam bei Verbraucherverträgen
- Keine Abwägung möglich
- Z.B. Haftungsausschluss für Vorsatz

**§ 308 BGB - Klauselverbote mit Wertungsmöglichkeit:**
- **Widerlegbare Vermutungen** ("graue Liste")
- Unwirksam, wenn unangemessen
- Abwägung möglich
- Z.B. kurze Gewährleistungsfristen

**§ 307 BGB - Generalklausel:**
- **Auffangtatbestand** für alle anderen Klauseln
- Unangemessene Benachteiligung verboten
- Transparenzgebot
- Störung des Interessengleichgewichts

**🔍 Prüfungsschema Inhaltskontrolle:**

\`\`\`
I. Anwendungsbereich
   1. AGB-Eigenschaft (+)
   2. Ordnungsgemäße Einbeziehung (+)
   3. Verbrauchervertrag? (für §§ 308, 309)

II. Spezielle Klauselverbote (§§ 309, 308)
    1. Einschlägiger Verbotstatbestand?
    2. Ausnahme anwendbar?

III. Generalklausel (§ 307 BGB)
     1. Unangemessene Benachteiligung?
        a) Abweichung von Leitbild
        b) Interessenabwägung
     2. Transparenzverstoß?

IV. Rechtsfolge (§ 306 BGB)
    Unwirksame Klausel → Ersetzung durch Gesetz
\`\`\`

**⚖️ Interessenabwägung bei § 307 BGB:**

**Aspekte der Abwägung:**
- Berechtigte Interessen des Verwenders
- Schutzwürdige Belange des Vertragspartners
- Praktische Bedürfnisse des Rechtsverkehrs
- Möglichkeit der Risikoverteilung

**Transparenzgebot (§ 307 I 2 BGB):**
- Verständlichkeit und Klarheit
- Eindeutigkeit der Regelung
- Erkennbarkeit der Belastung
- Nachvollziehbarkeit für Laien`,
          examples: [
            {
              id: 'ex-bgb-4-1-3',
              title: '💰 Beispiel: Bankgebühren-AGB',
              content: `**Sachverhalt:** 
Bank B hat in ihren AGB: "Für jede Überweisung wird eine Bearbeitungsgebühr von 5 € erhoben, auch bei Online-Banking."

**Prüfung nach § 307 BGB:**

1. **Abweichung vom Leitbild:**
   - Gesetzlich: Keine besonderen Überweisungsgebühren
   - Verkehrsüblich: Kostenlose Online-Überweisungen
   - Klausel weicht erheblich ab

2. **Interessenabwägung:**
   - **Bank:** Kostendeckung, Refinanzierung
   - **Kunde:** Zumutbare Gebühren, Verhältnismäßigkeit
   - **5 € pro Überweisung:** Bei Kleinbeträgen unverhältnismäßig

3. **Transparenz:** Höhe klar ersichtlich ✓

**Ergebnis:** Unangemessene Benachteiligung (+)
- Klausel unwirksam nach § 307 I BGB
- Gesetzliche Regelung tritt ein`,
              explanation: 'Pauschale hohe Gebühren können das Interessengleichgewicht stören.'
            }
          ]
        },
        {
          id: 'section-bgb-4-1-4',
          title: '🛡️ Besonderheiten bei Verbraucherverträgen',
          content: `Verbraucher genießen verstärkten Schutz vor unwirksamen AGB-Klauseln.

**👥 Anwendungsbereich des Verbraucherschutzes:**

**Verbraucher (§ 13 BGB):**
- Natürliche Person
- Nicht zu gewerblichen/beruflichen Zwecken
- Private Rechtsgeschäfte
- B2C-Verträge

**Unternehmer (§ 14 BGB):**
- Natürliche/juristische Person
- In Ausübung gewerblicher/beruflicher Tätigkeit
- B2B-Verträge zwischen Unternehmern möglich

**🔒 Verstärkter Schutz bei B2C:**

**Erweiterte Klauselverbote:**
- §§ 308, 309 BGB nur bei Verbrauchern
- Keine Geltung bei B2B-Verträgen
- Aber: § 307 BGB immer anwendbar

**Verschärfte Transparenzanforderungen:**
- Besondere Verständlichkeit erforderlich
- Klarheit über Rechte und Pflichten
- Keine "Kleingedruckten"-Fallen

**Individualabrede-Vermutung:**
- Bei B2B: Vermutung gegen AGB-Eigenschaft
- Unter Kaufleuten: Aushandlungsmöglichkeit
- Beweislast beim Verwender

**💼 AGB im B2B-Verkehr:**

**Besonderheiten zwischen Unternehmern:**
- Nur § 307 BGB anwendbar
- Höhere Sachkunde erwartet
- Geringere Schutzbedürftigkeit
- Aber: Machtungleichgewicht möglich

**Branchenübliche Klauseln:**
- Standard-AGB der Verbände
- Verkehrsübliche Regelungen
- Ausgleich von Interessenlagen
- Meist sachgerecht

**🔄 Geltungserhaltung (§ 306 BGB):**

**Teilnichtigkeit:**
- Unwirksame Klauseln fallen weg
- Vertrag bleibt im Übrigen bestehen
- § 139 BGB (Teilnichtigkeit) ausgeschlossen

**Ersetzung durch Gesetz:**
- Dispositives Recht tritt ein
- Gesetzlicher Interessenausgleich
- Keine ergänzende Vertragsauslegung
- Schutz vor Vertragslücken`,
          memoryAids: [
            {
              id: 'mem-bgb-4-1-1',
              title: '🧠 Merkhilfe AGB-Kontrolle',
              content: `**E**inbeziehung: Hinweis + Kenntnisnahme + Einverständnis
**I**nhalt: 309 (schwarz) → 308 (grau) → 307 (weiß)
**F**olge: Teilnichtigkeit + gesetzliche Ersetzung`
            }
          ]
        }
      ],
      resources: [
        {
          id: 'res-bgb-4-1-1',
          title: '§§ 305-310 BGB - Allgemeine Geschäftsbedingungen',
          url: 'https://www.gesetze-im-internet.de/bgb/__305.html',
          type: 'website',
          description: 'Gesetzliche Regelungen zu AGB-Einbeziehung und Inhaltskontrolle'
        },
        {
          id: 'res-bgb-4-1-2',
          title: 'AGB-Gesetz - Übersicht der Klauselverbote',
          url: 'https://www.gesetze-im-internet.de/bgb/__308.html',
          type: 'website',
          description: 'Übersicht über die gesetzlichen Klauselverbote in AGB'
        }
      ],
      glossary: [
        {
          term: 'Allgemeine Geschäftsbedingungen',
          definition: 'Vorformulierte Vertragsbedingungen für eine Vielzahl von Verträgen, die einseitig gestellt werden'
        },
        {
          term: 'Einbeziehungskontrolle',
          definition: 'Prüfung, ob AGB ordnungsgemäß zum Vertragsbestandteil geworden sind'
        },
        {
          term: 'Inhaltskontrolle',
          definition: 'Prüfung der Wirksamkeit von AGB-Klauseln nach §§ 307-309 BGB'
        },
        {
          term: 'Überraschende Klausel',
          definition: 'AGB-Klausel, die nach den Umständen ungewöhnlich ist und daher unwirksam (§ 305c I BGB)'
        },
        {
          term: 'Transparenzgebot',
          definition: 'Erfordernis verständlicher und klarer Formulierung von AGB-Klauseln (§ 307 I 2 BGB)'
        }
      ]
    },
    requiredMastery: 85,
    estimatedMinutes: 1500,
    exercises: []
  },

  // 4.2 Vertragsschluss im Internet (15 Stunden)
  {
    id: 'bgb-ke4-2-internet',
    moduleId: 'bgb-at',
    order: 9,
    title: '4.2 Vertragsschluss im Internet',
    objectives: [
      {
        id: 'obj-bgb-4-2-1',
        description: 'Die Besonderheiten des Vertragsschlusses im E-Commerce verstehen',
        bloomLevel: 'understand'
      },
      {
        id: 'obj-bgb-4-2-2',
        description: 'Verbraucherschutzvorschriften bei Online-Verträgen anwenden',
        bloomLevel: 'apply'
      },
      {
        id: 'obj-bgb-4-2-3',
        description: 'Probleme bei Internet-Auktionen rechtlich bewerten',
        bloomLevel: 'evaluate'
      }
    ],
    content: {
      id: 'content-bgb-4-2',
      type: 'mixed',
      sections: [
        {
          id: 'section-bgb-4-2-1',
          title: '💻 Grundlagen des elektronischen Geschäftsverkehrs',
          content: `Der Vertragsschluss im Internet folgt grundsätzlich den allgemeinen Regeln, hat aber Besonderheiten.

**🌐 E-Commerce-Grundsätze:**

**Medienneutralität:**
- BGB gilt auch für digitale Verträge
- Kein separates "Internet-Recht"
- Angebot und Annahme wie analog
- Besonderheiten nur bei Zugang

**Informationsgesellschaftsdienste:**
- Elektronische Dienste
- Gegen Entgelt (meist)
- Auf Distanz erbracht
- Auf elektronischem Weg

**🔄 Typischer Online-Vertragsschluss:**

**1. Produktpräsentation:**
- Website mit Warenangebot
- Rechtlich: invitatio ad offerendum
- Keine Bindung des Händlers
- Informationspflichten zu beachten

**2. Bestellvorgang:**
- Kunde füllt Warenkorb
- Eingabe der Bestelldaten
- Rechtlich: Angebot des Kunden
- Button-Lösung erforderlich

**3. Bestellbestätigung:**
- Automatische E-Mail
- Rechtlich: meist nur Empfangsbestätigung
- Noch keine Annahme!
- Prüfung der Verfügbarkeit

**4. Versandbestätigung:**
- Kommissionierung und Versand
- Rechtlich: Annahme durch Versendung
- Vertrag kommt zustande
- Erfüllung beginnt

**📧 Zugang bei elektronischen Erklärungen:**

**E-Mail-Zugang:**
- Bei Abrufbarkeit im Postfach
- Normale Geschäftszeiten
- Technische Empfangsmöglichkeit
- Nicht bei Spam-Filter-Problemen

**Website-Formulare:**
- Zugang beim Absenden
- Server-Bestätigung erforderlich
- Technische Übermittlung
- Beweisproblem bei Störungen`,
          examples: [
            {
              id: 'ex-bgb-4-2-1',
              title: '🛍️ Beispiel: Amazon-Bestellung',
              content: `**Ablauf einer typischen Online-Bestellung:**

1. **K sucht Buch auf Amazon.de**
   - Produktseite = invitatio ad offerendum
   - Preis und Lieferzeit angezeigt

2. **K legt Buch in Warenkorb**
   - Noch kein Rechtsgeschäft
   - Jederzeit änderbar

3. **K geht zur Kasse und bestellt**
   - "Jetzt kaufen" Button
   - = Angebot des K an Amazon

4. **Amazon sendet Bestellbestätigung**
   - "Ihre Bestellung wird bearbeitet"
   - = Nur Empfangsbestätigung

5. **Amazon versendet Buch**
   - Versandbestätigung per E-Mail
   - = Annahme des Angebots

**Ergebnis:** Kaufvertrag kommt erst mit Versand zustande`,
              explanation: 'Der mehrstufige Prozess schützt beide Seiten vor ungewollten Bindungen.'
            }
          ]
        },
        {
          id: 'section-bgb-4-2-2',
          title: '🛡️ Verbraucherschutz im Online-Handel',
          content: `Verbraucher haben bei Online-Käufen besondere Schutzrechte.

**📋 Informationspflichten (§ 312i BGB):**

**Vor Vertragsschluss anzugeben:**
- Wesentliche Eigenschaften der Ware/Dienstleistung
- Identität und Anschrift des Unternehmers
- Gesamtpreis inkl. aller Zusatzkosten
- Zahlungs-, Liefer- und Erfüllungsmodalitäten
- Bestehen eines Widerrufsrechts
- Laufzeit bei Dauerschuldverhältnissen

**Button-Lösung (§ 312j BGB):**
- Eindeutige Kennzeichnung kostenpflichtiger Bestellungen
- "Kaufen", "Kostenpflichtig bestellen", "Zahlungspflichtig bestellen"
- Nicht ausreichend: "Bestellen", "Anmelden", "Weiter"
- Bei Verstoß: Vertrag nicht zustande gekommen

**🔄 Widerrufsrecht (§§ 355 ff. BGB):**

**Widerrufsfrist:**
- 14 Tage ab Erhalt der Ware
- Bei Dienstleistungen: ab Vertragsschluss
- Verlängerung bei fehlender Belehrung
- Formfreier Widerruf möglich

**Widerrufsfolgen:**
- Rückgabe der erhaltenen Leistungen
- Wertersatz bei Verschlechterung
- Rücksendekosten beim Verbraucher (unter 40 €)
- Sofortige Rückzahlung durch Unternehmer

**Ausnahmen vom Widerrufsrecht:**
- Verderbliche Waren
- Maßgefertigte Artikel
- Digitale Inhalte (nach Lieferbeginn)
- Versiegelte Waren aus Gesundheitsschutz

**💳 Zahlungsdienstleistungen:**

**SEPA-Lastschrift:**
- 8 Wochen Rückgabe-Recht
- Bei nicht autorisierten Zahlungen
- Schutz vor Missbrauch

**Kreditkarte:**
- Chargeback-Verfahren
- Schutz bei Nichtlieferung
- Verschiedene Fristen je Kartenanbieter

**🌍 Besonderheiten bei grenzüberschreitenden Verträgen:**

**EU-Binnenmarkt:**
- Einheitliche Verbraucherschutzregeln
- Rom I-VO für anwendbares Recht
- Brüssel Ia-VO für Gerichtsstand

**Drittstaaten:**
- Komplexere Rechtslage
- Durchsetzungsprobleme
- Vorsicht bei Vorkasse`,
          examples: [
            {
              id: 'ex-bgb-4-2-2',
              title: '📱 Beispiel: App-Store-Kauf',
              content: `**Sachverhalt:** 
Verbraucher V kauft über App Store eine kostenpflichtige App für 4,99 €. Der Button zeigt nur "Laden" an. V merkt später, dass es sich um ein Abo handelt.

**Rechtliche Bewertung:**

1. **Button-Lösung (§ 312j BGB):**
   - "Laden" kennzeichnet nicht eindeutig Kostenpflicht
   - Verstoß gegen Button-Lösung

2. **Rechtsfolge:**
   - Vertrag nicht zustande gekommen
   - Keine Zahlungspflicht des V

3. **Alternative bei Heilung:**
   - Nachträgliche Kenntnisnahme der Kosten
   - Verwendung der App = konkludente Annahme?
   - Aber: Widerrufsrecht bleibt

**Praxis:** Apple/Google haben Button-Texte angepasst
- "Kaufen für 4,99 €"
- "Abonnieren für 9,99 €/Monat"`,
              explanation: 'Die Button-Lösung schützt vor versteckten Kostenfallen im digitalen Handel.'
            }
          ]
        },
        {
          id: 'section-bgb-4-2-3',
          title: '🔨 Internet-Auktionen',
          content: `Online-Auktionen haben besondere rechtliche Herausforderungen entwickelt.

**⚖️ eBay-Rechtsprechung:**

**Grundsätzliche Einordnung:**
- Auktionsplattform = Vermittlerin
- Verkäufer macht Angebot
- Höchstbietender erhält Zuschlag
- Kaufvertrag zwischen Privatpersonen/Unternehmen

**🔨 Vertragsschluss bei Auktionen:**

**Klassische Auktion:**
- Angebot durch Auktionator
- Gebote = Annahme-Angebote
- Zuschlag = Annahme
- Vertrag mit Höchstbietendem

**eBay-Auktion:**
- Angebot durch Verkäufer
- Gebote = Annahme-Angebote
- Automatischer Zuschlag an Höchstbietenden
- Vertrag ohne weitere Bestätigung

**Besonderheiten bei eBay:**

**"Sofort-Kaufen"-Option:**
- Fester Preis parallel zur Auktion
- Angebot an unbestimmten Personenkreis
- Annahme durch ersten Klick
- Auktion endet automatisch

**Bewertungssystem:**
- Vertrauensbildung zwischen Fremden
- Rechtlich nicht bindend
- Aber faktisch geschäftsrelevant

**🚫 Probleme und Rechtsmissbrauch:**

**Scheingebote:**
- Künstliche Preistreiberei
- Verstoß gegen eBay-Grundsätze
- Möglicherweise sittenwidrig

**Rücktritt bei Irrtum:**
- Anfechtung nach § 119 BGB möglich
- Aber: Fahrlässigkeit beachten
- eBay-Regeln keine Rechtsnormen

**Verbraucherschutz:**

**Widerrufsrecht:**
- Bei gewerblichen Verkäufern
- Auch bei eBay-Auktionen
- 14 Tage nach Erhalt
- Ausnahme: Versteigerung mit Auktionator

**Gewährleistung:**
- Nach BGB-Regeln
- Unterscheidung privat/gewerblich
- "Gekauft wie gesehen" problematisch`,
          selfTest: {
            questions: [
              {
                id: 'q-bgb-4-2-1',
                question: 'Welche Anforderungen stellt die Button-Lösung nach § 312j BGB?',
                correctAnswer: 'Der Button muss eindeutig kennzeichnen, dass eine kostenpflichtige Bestellung ausgelöst wird, z.B. "Kaufen für X €" oder "Kostenpflichtig bestellen".'
              },
              {
                id: 'q-bgb-4-2-2',
                question: 'Wie lange beträgt die Widerrufsfrist bei Online-Käufen?',
                correctAnswer: '14 Tage ab Erhalt der Ware bei Kaufverträgen bzw. ab Vertragsschluss bei Dienstleistungsverträgen (§ 355 II BGB).'
              }
            ]
          }
        }
      ],
      resources: [
        {
          id: 'res-bgb-4-2-1',
          title: '§ 312j BGB - Button-Lösung',
          url: 'https://www.gesetze-im-internet.de/bgb/__312j.html',
          type: 'website',
          description: 'Verbraucherschutz bei Online-Bestellungen durch eindeutige Kennzeichnung'
        },
        {
          id: 'res-bgb-4-2-2',
          title: '§§ 355 ff. BGB - Widerrufsrecht',
          url: 'https://www.gesetze-im-internet.de/bgb/__355.html',
          type: 'website',
          description: 'Widerrufsrechte bei Verbraucherverträgen und Fernabsatzgeschäften'
        }
      ],
      glossary: [
        {
          term: 'Button-Lösung',
          definition: 'Pflicht zur eindeutigen Kennzeichnung kostenpflichtiger Online-Bestellungen (§ 312j BGB)'
        },
        {
          term: 'Widerrufsrecht',
          definition: 'Recht des Verbrauchers, binnen 14 Tagen vom Fernabsatzvertrag zurückzutreten'
        },
        {
          term: 'Informationspflichten',
          definition: 'Gesetzliche Pflicht zur Aufklärung über wesentliche Vertragsbestandteile vor Vertragsschluss'
        },
        {
          term: 'E-Commerce',
          definition: 'Elektronischer Geschäftsverkehr über das Internet oder andere elektronische Medien'
        }
      ]
    },
    requiredMastery: 85,
    estimatedMinutes: 900,
    exercises: []
  },

  // 4.3 Vertragsauslegung (15 Stunden)
  {
    id: 'bgb-ke4-3-auslegung',
    moduleId: 'bgb-at',
    order: 10,
    title: '4.3 Vertragsauslegung',
    objectives: [
      {
        id: 'obj-bgb-4-3-1',
        description: 'Die Methoden der Vertragsauslegung verstehen und anwenden',
        bloomLevel: 'apply'
      },
      {
        id: 'obj-bgb-4-3-2',
        description: 'Ergänzende Vertragsauslegung von normaler Auslegung abgrenzen',
        bloomLevel: 'analyze'
      },
      {
        id: 'obj-bgb-4-3-3',
        description: 'Besonderheiten bei der AGB-Auslegung bewerten',
        bloomLevel: 'evaluate'
      }
    ],
    content: {
      id: 'content-bgb-4-3',
      type: 'mixed',
      sections: [
        {
          id: 'section-bgb-4-3-1',
          title: '🔍 Grundlagen der Vertragsauslegung',
          content: `Die Vertragsauslegung ermittelt den rechtlich maßgeblichen Inhalt von Willenserklärungen.

**⚖️ Gesetzliche Grundlagen:**

**§ 133 BGB - Auslegung von Willenserklärungen:**
"Bei der Auslegung einer Willenserklärung ist der wirkliche Wille zu erforschen und nicht an dem buchstäblichen Sinne des Ausdrucks zu haften."

**§ 157 BGB - Auslegung von Verträgen:**
"Verträge sind so auszulegen, wie Treu und Glauben mit Rücksicht auf die Verkehrssitte es erfordern."

**🎯 Auslegungsziele:**

**Bei § 133 BGB:**
- Ermittlung des wirklichen Willens
- Nicht: buchstäblicher Wortsinn
- Aber: objektive Erkennbarkeit erforderlich

**Bei § 157 BGB:**
- Objektiver Empfängerhorizont
- Treu und Glauben
- Verkehrssitte beachten

**🔄 Zweistufiges Auslegungssystem:**

**1. Stufe - Einfache Auslegung (§§ 133, 157 BGB):**
- Ermittlung des Vertragsinhalts
- Was haben die Parteien gewollt?
- Lückenlose Verträge

**2. Stufe - Ergänzende Auslegung:**
- Bei Vertragslücken
- Was hätten die Parteien gewollt?
- Hypothetischer Parteiwille

**📊 Auslegungsmethoden:**

**Wortlaut:**
- Sprachlicher Bedeutungsgehalt
- Fachsprachliche Begriffe
- Alltagssprache vs. Rechtssprache

**Systematik:**
- Stellung im Vertragswerk
- Bezug zu anderen Klauseln
- Gesamtzusammenhang

**Entstehungsgeschichte:**
- Verhandlungsverhalten
- Vorverträge und Entwürfe
- Änderungen während Verhandlung

**Zweck und Interessenlage:**
- Wirtschaftlicher Zweck
- Interessenabwägung
- Praktikabilität der Auslegung`,
          examples: [
            {
              id: 'ex-bgb-4-3-1',
              title: '🏠 Beispiel: "Renovierte Wohnung"',
              content: `**Sachverhalt:** 
Mietvertrag beschreibt Wohnung als "renoviert". Nach Einzug stellt sich heraus: Nur gestrichen, aber nicht saniert.

**Auslegung nach §§ 133, 157 BGB:**

1. **Wortlaut "renoviert":**
   - Umgangssprache: Oberflächliche Auffrischung
   - Fachsprache: Umfassende Erneuerung
   - Mehrdeutig → weitere Auslegung erforderlich

2. **Vertragskontext:**
   - Mietpreis der Wohnung
   - Zustand bei Besichtigung
   - Äußerungen des Vermieters

3. **Verkehrssitte:**
   - Was versteht durchschnittlicher Mieter?
   - Branchenübliche Verwendung
   - Erwartungshorizont

**Ergebnis:** Objektive Auslegung maßgebend
- Nicht subjektive Vorstellung der Parteien
- Empfängerhorizont entscheidend`,
              explanation: 'Die Auslegung orientiert sich am objektiven Empfängerverständnis.'
            }
          ]
        },
        {
          id: 'section-bgb-4-3-2',
          title: '🔧 Ergänzende Vertragsauslegung',
          content: `Bei Vertragslücken greift die ergänzende Vertragsauslegung ein.

**🎯 Voraussetzungen ergänzender Auslegung:**

**Planwidrige Unvollständigkeit:**
- Regelungslücke im Vertrag
- Nicht beabsichtigt von Parteien
- Keine bewusste Offenlassung

**Ergänzungsbedürftigkeit:**
- Vertrag nicht durchführbar
- Interessenkonflikt ohne Lösung
- Rechtsunsicherheit

**Ergänzungsfähigkeit:**
- Vertrag nicht nichtig
- Grundlegender Konsens vorhanden
- Ergänzung wirtschaftlich sinnvoll

**🔍 Methoden der Ergänzung:**

**Hypothetischer Parteiwille:**
- Was hätten redliche Vertragspartner vereinbart?
- Bei Kenntnis der Lücke
- Interessengerechte Lösung

**Objektive Kriterien:**
- Natur des Vertrags
- Zweck der Vereinbarung
- Gesetzliches Leitbild
- Verkehrssitte

**Dispositive Gesetzesregeln:**
- Subsidiäre Anwendung
- Nur bei Regelungslücken
- Nicht bei bewusster Abweichung

**⚖️ Abgrenzung zur einfachen Auslegung:**

| Einfache Auslegung | Ergänzende Auslegung |
|--------------------|---------------------|
| Was ist gewollt? | Was wäre gewollt worden? |
| Bestehende Regelung | Fehlende Regelung |
| §§ 133, 157 BGB | Richterrecht |
| Wille erforschen | Wille ergänzen |

**🏗️ Praktische Anwendungsfälle:**

**Preisanpassungsklauseln:**
- Bei langfristigen Verträgen
- Kostensteigerungen nicht vorhergesehen
- Ergänzung um Anpassungsmechanismus

**Störung der Geschäftsgrundlage:**
- § 313 BGB als Kodifikation
- Anpassung statt Auflösung
- Vertragserhaltung bei Änderung der Umstände`,
          examples: [
            {
              id: 'ex-bgb-4-3-2',
              title: '🚛 Beispiel: Liefervertrag ohne Preisstaffel',
              content: `**Sachverhalt:** 
Liefervertrag über 5 Jahre, Preis: "Nach aktueller Preisliste". Nach 2 Jahren steigen Rohstoffkosten um 40%.

**Problem:** Vertrag enthält keine Preisanpassungsklausel

**Ergänzende Vertragsauslegung:**

1. **Planwidrige Unvollständigkeit (+):**
   - Extreme Kostensteigerung nicht bedacht
   - Lücke in der Preisgestaltung

2. **Hypothetischer Parteiwille:**
   - Redliche Vertragspartner hätten Anpassungsregel vereinbart
   - Kostensteigerungen anteilig berücksichtigt
   - Nicht: vollständige Abwälzung

3. **Interessengerechte Lösung:**
   - Teilweise Preisanpassung
   - Berücksichtigung beider Interessen
   - Vertragszweck erhalten

**Ergebnis:** Angemessene Preisanpassung möglich`,
              explanation: 'Die ergänzende Auslegung schließt ungewollte Vertragslücken.'
            }
          ]
        },
        {
          id: 'section-bgb-4-3-3',
          title: '📋 Besonderheiten der AGB-Auslegung',
          content: `AGB unterliegen besonderen Auslegungsregeln zum Schutz der Vertragspartner.

**🎯 Grundsätze der AGB-Auslegung:**

**Objektive Auslegung:**
- Sicht des durchschnittlichen Vertragspartners
- Nicht: besondere Fachkenntnisse
- Verständnis des Laien maßgebend

**Unklarheitenregel (§ 305c II BGB):**
- Zweifel gehen zu Lasten des Verwenders
- Bei mehreren Auslegungsmöglichkeiten
- Kundenfreundlichste Auslegung

**Transparenzgebot beachten:**
- Verständlichkeit erforderlich
- Keine versteckten Belastungen
- Erkennbarkeit der Rechtslage

**📊 AGB-Auslegung vs. Individualvertrag:**

| AGB-Auslegung | Individualvertrag |
|---------------|-------------------|
| Objektiver Maßstab | Subjektiver Wille möglich |
| Unklarheitenregel | Normale Auslegung |
| Laienverständnis | Fachkenntnisse beachtlich |
| Verwenderrisiko | Beiderseitiges Risiko |

**🔍 Praktische Anwendung:**

**Mehrdeutige Begriffe:**
- "Angemessene Frist" → konkrete Bestimmung
- "Übliche Kosten" → Marktvergleich erforderlich
- "Bei Bedarf" → Objektivierung nötig

**Bezugnahmen:**
- Verweise auf andere Dokumente problematisch
- Externe AGB schwer einbeziehbar
- Verweis muss verständlich sein

**Ausnahmen und Einschränkungen:**
- Müssen deutlich erkennbar sein
- Keine versteckten Vorbehalte
- Hauptleistung darf nicht ausgehöhlt werden

**⚠️ Grenzen der AGB-Auslegung:**

**Inhaltskontrolle vorrangig:**
- Erst Auslegung, dann Kontrolle
- Unwirksame Klauseln fallen weg
- Auslegung kann Unwirksamkeit nicht heilen

**Individualabrede geht vor:**
- Ausgehandelte Klauseln
- Auch bei AGB-Verwendung
- Beweislast beim Verwender

**Verbot der geltungserhaltenden Reduktion:**
- Unwirksame AGB nicht "auslegend" retten
- § 306 BGB: Ersetzung durch Gesetz
- Keine Umdeutung in wirksame Klausel`,
          selfTest: {
            questions: [
              {
                id: 'q-bgb-4-3-1',
                question: 'Was besagt die Unklarheitenregel bei AGB?',
                correctAnswer: 'Nach § 305c II BGB gehen Zweifel bei der Auslegung von AGB zu Lasten des Verwenders. Die kundenfreundlichste Auslegung ist zu wählen.'
              },
              {
                id: 'q-bgb-4-3-2',
                question: 'Wann ist ergänzende Vertragsauslegung möglich?',
                correctAnswer: 'Bei planwidriger Unvollständigkeit des Vertrags, wenn der Vertrag ergänzungsbedürftig und ergänzungsfähig ist. Sie ermittelt den hypothetischen Parteiwillen.'
              }
            ]
          }
        }
      ],
      resources: [
        {
          id: 'res-bgb-4-3-1',
          title: '§§ 133, 157 BGB - Vertragsauslegung',
          url: 'https://www.gesetze-im-internet.de/bgb/__133.html',
          type: 'website',
          description: 'Grundsätze der Auslegung von Willenserklärungen und Verträgen'
        },
        {
          id: 'res-bgb-4-3-2',
          title: '§ 305c BGB - AGB-Auslegung',
          url: 'https://www.gesetze-im-internet.de/bgb/__305c.html',
          type: 'website',
          description: 'Besondere Auslegungsregeln für AGB und Unklarheitenregel'
        }
      ],
      glossary: [
        {
          term: 'Vertragsauslegung',
          definition: 'Ermittlung des rechtlich maßgeblichen Inhalts von Willenserklärungen nach §§ 133, 157 BGB'
        },
        {
          term: 'Ergänzende Vertragsauslegung',
          definition: 'Schließung planwidriger Vertragslücken durch Ermittlung des hypothetischen Parteiwillens'
        },
        {
          term: 'Unklarheitenregel',
          definition: 'Grundsatz, dass Zweifel bei AGB-Auslegung zu Lasten des Verwenders gehen (§ 305c II BGB)'
        },
        {
          term: 'Empfängerhorizont',
          definition: 'Maßstab der Vertragsauslegung aus Sicht des objektiven Erklärungsempfängers'
        }
      ]
    },
    requiredMastery: 85,
    estimatedMinutes: 900,
    exercises: []
  }
];

// Exercises for all units in Kurseinheit 4
const exercisesKE4: Exercise[] = [
  // Exercises for 4.1 AGB
  {
    id: 'ex-bgb-ke4-1-1',
    type: 'multipleChoice',
    difficulty: 'beginner',
    points: 10,
    content: {
      question: 'Welche Voraussetzung ist für AGB nach § 305 I BGB NICHT erforderlich?',
      options: [
        'Vorformulierung für eine Vielzahl von Verträgen',
        'Einseitige Stellung durch eine Vertragspartei',
        'Notarielle Beurkundung der Geschäftsbedingungen',
        'Verwendung bei Vertragsschluss'
      ]
    },
    solution: {
      correct: 'Notarielle Beurkundung der Geschäftsbedingungen',
      explanation: 'AGB sind grundsätzlich formfrei. Eine notarielle Beurkundung ist nicht erforderlich, außer das zugrunde liegende Rechtsgeschäft ist formbedürftig.'
    }
  },
  {
    id: 'ex-bgb-ke4-1-2',
    type: 'caseAnalysis',
    difficulty: 'advanced',
    points: 25,
    content: {
      question: 'Prüfen Sie die Wirksamkeit folgender AGB-Klausel:',
      scenario: `Fitnessstudio F hat in seinen AGB: "Die Mitgliedschaft verlängert sich automatisch um jeweils 2 Jahre, wenn nicht 6 Monate vor Ablauf gekündigt wird. Bei vorzeitiger Kündigung sind 80% der Restbeiträge zu zahlen."

Verbraucher V wird Mitglied, übersieht die Klausel und möchte nach 6 Monaten kündigen.`,
      tasks: [
        'Prüfen Sie die Einbeziehung der AGB',
        'Prüfen Sie die Wirksamkeit der Verlängerungsklausel',
        'Prüfen Sie die Wirksamkeit der Stornogebühr-Klausel'
      ]
    },
    solution: {
      correct: {
        structure: `I. Einbeziehung der AGB (§ 305 II BGB)
   Voraussetzungen müssen geprüft werden:
   - Hinweis bei Vertragsschluss
   - Möglichkeit der Kenntnisnahme
   - Einverständnis des V

II. Verlängerungsklausel
    1. § 309 Nr. 9 BGB: Laufzeit und Kündigung
       - 2 Jahre Laufzeit noch hinnehmbar
       - 6 Monate Kündigungsfrist überlang
       - Verstoß gegen § 309 Nr. 9 lit. b BGB
    
    2. Ergebnis: Klausel unwirksam
       - Gesetzliche Regelung tritt ein
       - Angemessene Kündigungsfrist

III. Stornogebühr-Klausel (80% der Restbeiträge)
     1. § 309 Nr. 6 BGB: Vertragsstrafe
        - 80% der Restbeiträge unverhältnismäßig hoch
        - Keine Verschuldensabwägung
     
     2. § 307 BGB: Unangemessene Benachteiligung
        - Erhebliche Abweichung vom Leitbild
        - Interessenabwägung eindeutig
     
     3. Ergebnis: Klausel unwirksam`,
        keyPoints: [
          'Fitnessstudio-AGB unterliegen strenger Kontrolle',
          '§ 309 Nr. 9 BGB begrenzt Laufzeit- und Kündigungsklauseln',
          'Hohe Stornogebühren sind meist unangemessen',
          'Unwirksame Klauseln werden durch Gesetz ersetzt'
        ]
      },
      explanation: 'Fitnessstudio-AGB sind ein klassischer Fall übermäßiger Kundenbindung und werden streng kontrolliert.'
    }
  },
  {
    id: 'ex-bgb-ke4-1-3',
    type: 'dragDrop',
    difficulty: 'intermediate',
    points: 15,
    content: {
      question: 'Ordnen Sie die Klauselverbote den richtigen Kategorien zu:',
      items: [
        'Haftungsausschluss für Vorsatz',
        'Kurze Gewährleistungsfrist (6 Monate)',
        'Unbestimmte Preisänderungsklausel',
        'Verwirkungsklausel bei Verbrauchern'
      ],
      targets: [
        '§ 309 BGB (schwarze Liste)',
        '§ 308 BGB (graue Liste)',
        '§ 307 BGB (Generalklausel)',
        '§ 309 BGB (schwarze Liste)'
      ]
    },
    solution: {
      correct: {
        'Haftungsausschluss für Vorsatz': '§ 309 BGB (schwarze Liste)',
        'Kurze Gewährleistungsfrist (6 Monate)': '§ 308 BGB (graue Liste)',
        'Unbestimmte Preisänderungsklausel': '§ 307 BGB (Generalklausel)',
        'Verwirkungsklausel bei Verbrauchern': '§ 309 BGB (schwarze Liste)'
      },
      explanation: 'Die dreistufige AGB-Kontrolle erfasst verschiedene Klauseltypen mit unterschiedlicher Strenge.'
    }
  },
  {
    id: 'ex-bgb-ke4-1-4',
    type: 'trueFalse',
    difficulty: 'beginner',
    points: 10,
    content: {
      question: 'Überraschende Klauseln nach § 305c I BGB werden nicht Vertragsbestandteil, auch wenn die AGB ordnungsgemäß einbezogen wurden.'
    },
    solution: {
      correct: true,
      explanation: 'Richtig. Nach § 305c I BGB werden Bestimmungen in AGB nicht Vertragsbestandteil, wenn sie nach den Umständen ungewöhnlich sind und der Vertragspartner mit ihnen nicht zu rechnen brauchte.'
    }
  },

  // Exercises for 4.2 Internet-Verträge
  {
    id: 'ex-bgb-ke4-2-1',
    type: 'multipleChoice',
    difficulty: 'intermediate',
    points: 15,
    content: {
      question: 'Welcher Button-Text erfüllt NICHT die Anforderungen des § 312j BGB?',
      options: [
        '"Kostenpflichtig bestellen"',
        '"Kaufen für 29,99 €"',
        '"Jetzt anmelden"',
        '"Zahlungspflichtig herunterladen"'
      ]
    },
    solution: {
      correct: '"Jetzt anmelden"',
      explanation: '"Jetzt anmelden" kennzeichnet nicht eindeutig eine kostenpflichtige Bestellung. Nach § 312j BGB muss die Kostenpflicht deutlich erkennbar sein.'
    }
  },
  {
    id: 'ex-bgb-ke4-2-2',
    type: 'caseAnalysis',
    difficulty: 'advanced',
    points: 25,
    content: {
      question: 'Lösen Sie folgenden E-Commerce-Fall:',
      scenario: `Verbraucher V bestellt bei Online-Shop S ein Smartphone für 599 €. Der Bestellbutton zeigt "Bestellen" an. Nach der Bestellung erhält V eine E-Mail: "Vielen Dank! Ihr Smartphone wird in 2-3 Tagen geliefert."

Am nächsten Tag bereut V den Kauf und möchte widerrufen. S behauptet, ein Vertrag sei zustande gekommen und Widerruf ausgeschlossen.`,
      tasks: [
        'Ist ein wirksamer Kaufvertrag zustande gekommen?',
        'Welche Rolle spielt die Button-Lösung?',
        'Welche Rechte hat V bezüglich Widerruf?'
      ]
    },
    solution: {
      correct: {
        structure: `I. Vertragsschluss zwischen V und S?
   1. Button-Lösung (§ 312j BGB)
      a) Kostenpflichtige Bestellung (+) - 599 €
      b) Eindeutige Kennzeichnung (-)
         - "Bestellen" kennzeichnet nicht Kostenpflicht
         - Verstoß gegen § 312j BGB
      c) Rechtsfolge: Vertrag nicht zustande gekommen

   2. Alternative: Heilung durch Verhalten?
      a) E-Mail kündigt Lieferung an
      b) Möglicherweise konkludente Annahme
      c) Aber: Widerrufsrecht bleibt bestehen

II. Widerrufsrecht des V (§§ 355 ff. BGB)
    1. Fernabsatzvertrag (+)
    2. Verbraucher (+)
    3. 14-Tage-Frist ab Erhalt
    4. Keine Ausnahme ersichtlich
    5. Widerruf formfrei möglich

III. Ergebnis
     - Kein wirksamer Vertrag wegen Button-Lösung
     - Oder: Vertrag mit Widerrufsrecht
     - S kann Zahlung nicht verlangen`,
        keyPoints: [
          'Button-Lösung schützt vor versteckten Kostenfallen',
          'Widerrufsrecht bei Fernabsatzverträgen immer prüfen',
          'Verbraucherschutz geht vor Händlerinteressen',
          'Formfehler führen zur Unwirksamkeit'
        ]
      },
      explanation: 'Die Button-Lösung und das Widerrufsrecht bieten umfassenden Verbraucherschutz im E-Commerce.'
    }
  },
  {
    id: 'ex-bgb-ke4-2-3',
    type: 'fillInBlanks',
    difficulty: 'beginner',
    points: 15,
    content: {
      question: 'Vervollständigen Sie die Aussagen zum Widerrufsrecht:',
      context: 'Das Widerrufsrecht bei Fernabsatzverträgen beträgt _____ Tage ab _____ der Ware. Der Widerruf kann _____ erfolgen. Die Kosten der Rücksendung trägt grundsätzlich der _____, außer bei Waren über _____ €.',
      blanks: 5
    },
    solution: {
      correct: ['14', 'Erhalt', 'formfrei', 'Verbraucher', '40'],
      explanation: 'Diese Eckdaten des Widerrufsrechts sind fundamental für den Verbraucherschutz.'
    }
  },

  // Exercises for 4.3 Vertragsauslegung
  {
    id: 'ex-bgb-ke4-3-1',
    type: 'multipleChoice',
    difficulty: 'intermediate',
    points: 15,
    content: {
      question: 'Was gilt bei mehrdeutigen AGB-Klauseln nach § 305c II BGB?',
      options: [
        'Die Auslegung, die dem Verwender am günstigsten ist',
        'Die Auslegung geht zu Lasten des Vertragspartners',
        'Zweifel gehen zu Lasten des Verwenders (Unklarheitenregel)',
        'Eine ergänzende Vertragsauslegung ist durchzuführen'
      ]
    },
    solution: {
      correct: 'Zweifel gehen zu Lasten des Verwenders (Unklarheitenregel)',
      explanation: 'Nach § 305c II BGB gilt die Unklarheitenregel: Zweifel bei der Auslegung von AGB gehen zu Lasten des Verwenders.'
    }
  },
  {
    id: 'ex-bgb-ke4-3-2',
    type: 'caseAnalysis',
    difficulty: 'advanced',
    points: 25,
    content: {
      question: 'Führen Sie eine Vertragsauslegung durch:',
      scenario: `Bauvertrag zwischen Unternehmer U und Hausbesitzer H über "Komplettsanierung des Daches". Nach Vertragsschluss entsteht Streit: U meint nur äußere Reparaturen, H erwartet auch Dämmung und Innensanierung.

Der Vertrag enthält keine weiteren Details. Beide Parteien sind erfahrene Geschäftsleute.`,
      tasks: [
        'Legen Sie den Begriff "Komplettsanierung" aus',
        'Welche Auslegungsmethoden wenden Sie an?',
        'Zu welchem Ergebnis kommen Sie?'
      ]
    },
    solution: {
      correct: {
        structure: `I. Auslegung "Komplettsanierung" (§§ 133, 157 BGB)

1. Wortlautauslegung
   a) "Komplett" = vollständig, umfassend
   b) "Sanierung" = Wiederherstellung/Verbesserung
   c) Sprachlich: Umfassende Erneuerung

2. Systematische Auslegung
   a) Keine weiteren Vertragsklauseln
   b) Bauvertrag nach VOB oder BGB?
   c) Leistungsbeschreibung fehlt

3. Zweck und Interessenlage
   a) H möchte funktionsfähiges Dach
   b) U kalkulierte nur äußere Arbeiten?
   c) Wirtschaftlicher Zweck unklar

4. Verkehrssitte/Branchenübung
   a) Was versteht Baubranche unter "Komplettsanierung"?
   b) Üblicher Leistungsumfang
   c) Erfahrung beider Parteien

II. Ergebnis der Auslegung
   - "Komplettsanierung" spricht für umfassende Arbeiten
   - Erfahrene Geschäftsleute: Klarstellungspflicht
   - Objektiver Empfängerhorizont: Vollsanierung
   - U hätte präzisieren müssen

III. Eventuelle ergänzende Auslegung
    Bei Unklarheit: Was hätten Parteien vereinbart?
    → Angemessener Leistungsumfang entsprechend Bezeichnung`,
        keyPoints: [
          'Objektive Auslegung aus Empfängersicht',
          'Wortlaut hat starke Indizwirkung',
          'Verkehrssitte in Fachbereichen wichtig',
          'Erfahrene Geschäftsleute haben höhere Klarstellungspflicht'
        ]
      },
      explanation: 'Bei mehrdeutigen Begriffen ist eine umfassende Auslegung nach allen Methoden erforderlich.'
    }
  },
  {
    id: 'ex-bgb-ke4-3-3',
    type: 'dragDrop',
    difficulty: 'intermediate',
    points: 20,
    content: {
      question: 'Ordnen Sie die Auslegungsmethoden den korrekten Beschreibungen zu:',
      items: [
        'Wortlautauslegung',
        'Systematische Auslegung',
        'Historische Auslegung',
        'Teleologische Auslegung'
      ],
      targets: [
        'Sprachlicher Bedeutungsgehalt der Begriffe',
        'Stellung im Gesamtzusammenhang des Vertrags',
        'Entstehungsgeschichte und Verhandlungsverlauf',
        'Zweck und Interessenlage der Parteien'
      ]
    },
    solution: {
      correct: {
        'Wortlautauslegung': 'Sprachlicher Bedeutungsgehalt der Begriffe',
        'Systematische Auslegung': 'Stellung im Gesamtzusammenhang des Vertrags',
        'Historische Auslegung': 'Entstehungsgeschichte und Verhandlungsverlauf',
        'Teleologische Auslegung': 'Zweck und Interessenlage der Parteien'
      },
      explanation: 'Diese vier Auslegungsmethoden ergänzen sich bei der Ermittlung des Vertragsinhalts.'
    }
  }
];

// Add exercises to units (distribute exercises across units)
kurseinheit4BGBUnits[0].exercises = exercisesKE4.slice(0, 4); // First 4 exercises for unit 1 (AGB)
kurseinheit4BGBUnits[1].exercises = exercisesKE4.slice(4, 7); // Next 3 exercises for unit 2 (Internet)
kurseinheit4BGBUnits[2].exercises = exercisesKE4.slice(7);   // Remaining 3 exercises for unit 3 (Auslegung)