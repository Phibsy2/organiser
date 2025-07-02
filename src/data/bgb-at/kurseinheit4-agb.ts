import { LearningUnit, Exercise } from '../../types/learning';

// KURSEINHEIT 4: AGB und Internet-Verträge (45-60 Stunden)
// Based on FernUniversität Hagen Kurs 55101 - Kurseinheit 4

export const kurseinheit4AGBUnits: LearningUnit[] = [
  // Unit 1: Allgemeine Geschäftsbedingungen (20-25 Stunden)
  {
    id: 'bgb-ke4-agb-1',
    moduleId: 'bgb-at',
    order: 10,
    title: '§ 7 Allgemeine Geschäftsbedingungen als Bestandteile von Verträgen',
    objectives: [
      {
        id: 'obj-bgb-4-agb-1-1',
        description: 'Begriff und Funktion von AGB im Rechtsverkehr verstehen',
        bloomLevel: 'understand'
      },
      {
        id: 'obj-bgb-4-agb-1-2',
        description: 'Einbeziehung von AGB in Verträge prüfen können',
        bloomLevel: 'apply'
      },
      {
        id: 'obj-bgb-4-agb-1-3',
        description: 'Inhaltskontrolle nach §§ 305 ff. BGB durchführen',
        bloomLevel: 'analyze'
      },
      {
        id: 'obj-bgb-4-agb-1-4',
        description: 'AGB-Klauseln auf ihre Wirksamkeit beurteilen',
        bloomLevel: 'evaluate'
      }
    ],
    content: {
      id: 'content-bgb-4-agb-1',
      type: 'mixed',
      sections: [
        {
          id: 'section-bgb-4-agb-1-1',
          title: '📋 Begriff und Bedeutung der AGB',
          content: `Allgemeine Geschäftsbedingungen prägen den modernen Rechtsverkehr. Fast jeder Vertrag enthält heute vorformulierte Klauseln.

**🎯 Definition nach § 305 Abs. 1 BGB:**
AGB sind alle für eine Vielzahl von Verträgen vorformulierten Vertragsbedingungen, die eine Vertragspartei der anderen bei Abschluss eines Vertrages stellt.

**📊 Tatbestandsmerkmale:**

1. **Vorformulierte Vertragsbedingungen:**
   - Vor Vertragsschluss aufgestellt
   - Nicht individuell ausgehandelt
   - Schriftlich, elektronisch oder mündlich

2. **Vielzahl von Verträgen:**
   - Mindestens dreimalige Verwendungsabsicht
   - Bereits erstmalige Verwendung ausreichend
   - Bei Verbraucherverträgen unbeachtlich (§ 310 III Nr. 2)

3. **Stellen durch eine Vertragspartei:**
   - Einseitiges Auferlegen
   - Keine Verhandlung auf Augenhöhe
   - Bei Verbrauchern Vermutung für Unternehmer (§ 310 III Nr. 1)

**💡 Rechtspolitischer Hintergrund:**
- Schutz vor Übervorteilung
- Ausgleich von Machtungleichgewicht
- Wahrung der Privatautonomie
- Transparenz im Rechtsverkehr

**🔍 Abgrenzung Individualvereinbarung:**
Nach § 305 Abs. 1 S. 3 liegen keine AGB vor, wenn die Vertragsbedingungen zwischen den Parteien im Einzelnen ausgehandelt sind. 
- Echter Verhandlungsspielraum erforderlich
- Bloßes "Zur-Kenntnis-Nehmen" genügt nicht
- Beweislast beim Verwender`,
          examples: [
            {
              id: 'ex-bgb-4-agb-1-1',
              title: '🏠 Beispiel: Mietvertrag mit Formularklauseln',
              content: `**Sachverhalt:**
Vermieter V verwendet einen im Internet heruntergeladenen Mietvertrag mit 20 Seiten Klauseln. Bei § 22 "Schönheitsreparaturen" streicht er auf Wunsch des Mieters M das Wort "und Fenster".

**Analyse:**
- Vorformulierte Bedingungen: Internetformular ✓
- Vielzahl: Standardformular für mehrfache Verwendung ✓
- Stellen: Einseitig von V vorgegeben ✓
- Aber: § 22 wurde individuell verhandelt
- Folge: § 22 ist Individualvereinbarung, Rest AGB`,
              explanation: 'Die Streichung macht nur die konkrete Klausel zur Individualvereinbarung, nicht den ganzen Vertrag.'
            }
          ],
          memoryAids: [
            {
              id: 'mem-bgb-4-agb-1-1',
              title: '🧠 Merkhilfe AGB-Prüfung',
              content: `**V**orformuliert
**V**ielzahl (3x)
**V**om Verwender gestellt
= Die drei **V**s der AGB!`
            }
          ]
        },
        {
          id: 'section-bgb-4-agb-1-2',
          title: '📥 Einbeziehung von AGB in den Vertrag',
          content: `Die bloße Existenz von AGB macht sie noch nicht zum Vertragsinhalt. § 305 Abs. 2 BGB stellt strenge Anforderungen.

**✅ Voraussetzungen der Einbeziehung (§ 305 II BGB):**

**1. Ausdrücklicher Hinweis (Nr. 1):**
- Bei Vertragsschluss
- Deutlich sichtbar
- Ausnahme: Aushang bei Massengeschäften
- Online: Deutlicher Link genügt

**2. Möglichkeit der Kenntnisnahme (Nr. 2):**
- Zumutbare Weise
- Vollständiger Text
- Lesbare Form
- Bei Online-Geschäften: Download/Speicherung

**3. Einverständnis:**
- Ausdrücklich oder konkludent
- Schweigen genügt nicht
- Bei Online: Checkbox oder Button

**⚠️ Besonderheiten:**

**Überraschende Klauseln (§ 305c I BGB):**
- Ungewöhnlich nach Umständen
- Überrumpelungseffekt
- Werden nicht Vertragsbestandteil
- Beispiel: Abnahmepflicht beim Kaffeemaschinenkauf

**Unklarheitenregel (§ 305c II BGB):**
- Auslegung contra proferentem
- Zweifel gehen zu Lasten des Verwenders
- Kundenfreundlichste Auslegung

**🌐 Online-Geschäfte:**
- Link zu AGB auf Bestellseite
- Speicher- und Druckmöglichkeit
- Bestätigung vor Bestellung
- § 312i BGB beachten`,
          examples: [
            {
              id: 'ex-bgb-4-agb-1-2',
              title: '💻 Beispiel: Online-Shop AGB',
              content: `**Sachverhalt:**
Kunde K bestellt im Online-Shop. Ganz unten auf der Seite steht in 6pt Schrift grau auf grau: "Mit Bestellung akzeptieren Sie unsere AGB" ohne Link.

**Rechtliche Bewertung:**
- Hinweis nicht ausreichend deutlich
- Keine Möglichkeit der Kenntnisnahme
- AGB nicht wirksam einbezogen
- Folge: Nur gesetzliche Regelungen gelten`,
              explanation: 'Die Einbeziehung scheitert bereits an den formalen Voraussetzungen.'
            }
          ]
        },
        {
          id: 'section-bgb-4-agb-1-3',
          title: '⚖️ Inhaltskontrolle von AGB',
          content: `Die Inhaltskontrolle schützt vor unangemessenen Klauseln. Das BGB enthält ein dreistufiges Kontrollsystem.

**📊 Prüfungsreihenfolge (von hinten nach vorne!):**

**1. Stufe: § 309 BGB - Klauselverbote ohne Wertungsmöglichkeit**
- "Schwarze Liste"
- Absolute Verbote
- Keine Ausnahmen
- Beispiele: Haftungsausschluss für Vorsatz, zu kurze Gewährleistungsfristen

**2. Stufe: § 308 BGB - Klauselverbote mit Wertungsmöglichkeit**
- "Graue Liste"
- Im Zweifel unwirksam
- Einzelfallbetrachtung möglich
- Beispiele: Unangemessene Vertragsstrafen, zu lange Bindungsfristen

**3. Stufe: § 307 BGB - Generalklausel**
- Auffangtatbestand
- Treu und Glauben
- Unangemessene Benachteiligung
- Transparenzgebot (§ 307 I S. 2)

**🔍 Wichtige Grundsätze:**

**Kontrollumfang (§ 307 III BGB):**
- Nur Abweichungen vom dispositiven Recht
- Keine Preiskontrolle
- Keine Leistungsbeschreibung
- Ausnahme: Intransparenz

**Rechtsfolgen (§ 306 BGB):**
- Teilunwirksamkeit der Klausel
- Vertrag bleibt im Übrigen bestehen
- Lücke wird durch Gesetz gefüllt
- Keine geltungserhaltende Reduktion!

**Verbraucherschutz (§ 310 III BGB):**
- Erweiterte Kontrolle
- Auch Individualklauseln erfasst
- Strengere Maßstäbe`,
          selfTest: {
            questions: [
              {
                id: 'q-bgb-4-agb-1-1',
                question: 'Warum prüft man die Inhaltskontrolle "von hinten nach vorne" (309 → 308 → 307)?',
                correctAnswer: 'Weil die spezielleren Verbote (§§ 309, 308) Vorrang vor der Generalklausel (§ 307) haben. Wenn eine Klausel bereits nach § 309 verboten ist, muss nicht mehr nach § 307 geprüft werden.'
              },
              {
                id: 'q-bgb-4-agb-1-2',
                question: 'Was bedeutet "keine geltungserhaltende Reduktion"?',
                correctAnswer: 'Eine unwirksame Klausel kann nicht auf das gerade noch zulässige Maß reduziert werden. Sie ist komplett unwirksam und wird durch das Gesetz ersetzt.'
              }
            ]
          }
        },
        {
          id: 'section-bgb-4-agb-1-4',
          title: '🔧 Praktische Anwendung und Sonderfälle',
          content: `Die AGB-Kontrolle begegnet uns täglich. Einige Bereiche verdienen besondere Aufmerksamkeit.

**🏢 B2B-Bereich (§ 310 I BGB):**
- Eingeschränkte Kontrolle
- §§ 305 II, III, 308, 309 nicht anwendbar
- Nur Generalklausel § 307
- Handelsbrauch zu beachten

**👥 Verbraucherverträge (§ 310 III BGB):**
- Verschärfte Kontrolle
- Auch einmalige Verwendung erfasst
- Unternehmer muss beweisen
- EU-Richtlinie 93/13/EWG

**🔄 Kollidierende AGB:**
Beide Parteien verwenden eigene AGB:
- Teildissens bei Widersprüchen
- Übereinstimmende Teile gelten
- Lücken füllt das Gesetz
- Keine "battle of forms"

**📝 Arbeitsverträge (§ 310 IV S. 2 BGB):**
- Besondere Regelungen
- Einbeziehung erleichtert
- Aber: Inhaltskontrolle verschärft
- BAG-Rechtsprechung beachten

**⚡ Prüfungsschema Kurzübersicht:**
1. Anwendbarkeit der §§ 305 ff.?
2. Vorliegen von AGB?
3. Wirksame Einbeziehung?
4. Keine überraschende Klausel?
5. Inhaltskontrolle bestanden?
6. Rechtsfolgen bei Unwirksamkeit?`,
          examples: [
            {
              id: 'ex-bgb-4-agb-1-3',
              title: '🚗 Beispiel: Gewährleistungsausschluss beim Gebrauchtwagenkauf',
              content: `**Fall:**
Unternehmer U verkauft Verbraucherin V einen 3 Jahre alten Gebrauchtwagen. In den AGB: "Gewährleistung ausgeschlossen."

**Lösung:**
1. B2C-Vertrag → § 310 III anwendbar
2. Kontrolle nach § 309 Nr. 8 b) aa)
3. Genereller Ausschluss unzulässig
4. Klausel unwirksam
5. Gesetzliche Gewährleistung gilt (2 Jahre)
6. Bei Gebrauchtwagen: 1 Jahr möglich (§ 476 II BGB)`,
              explanation: 'Der Verbraucherschutz verhindert den kompletten Gewährleistungsausschluss.'
            }
          ]
        }
      ],
      resources: [
        {
          id: 'res-bgb-4-agb-1',
          title: 'BGH-Rechtsprechung zu AGB',
          type: 'website',
          url: 'https://www.bundesgerichtshof.de',
          description: 'Aktuelle Entscheidungen des BGH zum AGB-Recht'
        }
      ],
      glossary: [
        {
          term: 'AGB',
          definition: 'Allgemeine Geschäftsbedingungen - vorformulierte Vertragsbedingungen für eine Vielzahl von Verträgen'
        },
        {
          term: 'Einbeziehungskontrolle',
          definition: 'Prüfung, ob AGB wirksam Vertragsbestandteil geworden sind (§ 305 II BGB)'
        },
        {
          term: 'Inhaltskontrolle',
          definition: 'Prüfung der Angemessenheit von AGB-Klauseln (§§ 307-309 BGB)'
        },
        {
          term: 'Transparenzgebot',
          definition: 'AGB müssen klar und verständlich formuliert sein (§ 307 I S. 2 BGB)'
        },
        {
          term: 'Überraschende Klausel',
          definition: 'Ungewöhnliche Klausel mit Überrumpelungseffekt (§ 305c I BGB)'
        }
      ]
    },
    requiredMastery: 85,
    estimatedMinutes: 1200, // 20 Stunden
    exercises: []
  },

  // Unit 2: Grundzüge des Vertragsschlusses im Internet (10-15 Stunden)
  {
    id: 'bgb-ke4-agb-2',
    moduleId: 'bgb-at',
    order: 11,
    title: '§ 8 Grundzüge des Vertragsschlusses im Internet',
    objectives: [
      {
        id: 'obj-bgb-4-agb-2-1',
        description: 'Besonderheiten des elektronischen Geschäftsverkehrs verstehen',
        bloomLevel: 'understand'
      },
      {
        id: 'obj-bgb-4-agb-2-2',
        description: 'Vertragsschluss im Internet rechtlich beurteilen',
        bloomLevel: 'analyze'
      },
      {
        id: 'obj-bgb-4-agb-2-3',
        description: 'Verbraucherschutzvorschriften beim Fernabsatz anwenden',
        bloomLevel: 'apply'
      },
      {
        id: 'obj-bgb-4-agb-2-4',
        description: 'Internet-Auktionen rechtlich einordnen',
        bloomLevel: 'evaluate'
      }
    ],
    content: {
      id: 'content-bgb-4-agb-2',
      type: 'mixed',
      sections: [
        {
          id: 'section-bgb-4-agb-2-1',
          title: '🌐 Grundlagen des Online-Vertragsschlusses',
          content: `Der Vertragsschluss im Internet folgt den allgemeinen Regeln, weist aber Besonderheiten auf.

**📋 Rechtliche Einordnung:**
- Normale Willenserklärungen (keine "elektronischen")
- §§ 145 ff. BGB gelten uneingeschränkt
- Besonderheiten durch Medium Internet
- Verbraucherschutz durch §§ 312c ff. BGB

**🔄 Ablauf des Vertragsschlusses:**

1. **Warenpräsentation im Online-Shop:**
   - Regelmäßig nur invitatio ad offerendum
   - Keine bindenden Angebote
   - Vorbehalt der Liefermöglichkeit

2. **Bestellung des Kunden:**
   - Angebot i.S.d. § 145 BGB
   - Durch Absenden des Bestellformulars
   - Bindung an das Angebot

3. **Auftragsbestätigung:**
   - Unterscheiden: Zugangs- vs. Annahmebestätigung
   - Annahme durch eindeutige Erklärung
   - Oder durch Versand der Ware

**💡 Besonderheiten:**
- Willenserklärungen unter Abwesenden
- § 130 BGB: Zugang erforderlich
- Technische Störungen beachten
- Beweisschwierigkeiten

**⚖️ Verträge im elektronischen Geschäftsverkehr (§ 312i BGB):**
Besondere Pflichten für Unternehmer:
- Technische Mittel für Fehlerkorrektur
- Unverzügliche Zugangsbestätigung
- Speichermöglichkeit der Vertragsbedingungen
- Information über Bestellablauf`,
          examples: [
            {
              id: 'ex-bgb-4-agb-2-1',
              title: '🛒 Beispiel: Online-Bestellung mit Tippfehler',
              content: `**Sachverhalt:**
K will 10 USB-Sticks bestellen, tippt versehentlich 100. Das System zeigt Gesamtpreis 2.000 € statt 200 €. K merkt den Fehler erst nach Absenden.

**Rechtslage:**
- Anfechtung wegen Erklärungsirrtums (§ 119 I Alt. 2)
- Aber: § 312i verpflichtet Shop zu Korrekturmöglichkeit
- Bei Verstoß: Schadensersatz nach § 280 I
- Praxistipp: Zusammenfassung vor "Kaufen"-Button`,
              explanation: 'Der Verbraucherschutz verlangt technische Schutzvorkehrungen gegen Eingabefehler.'
            }
          ]
        },
        {
          id: 'section-bgb-4-agb-2-2',
          title: '📱 Fernabsatzverträge (§§ 312c ff. BGB)',
          content: `Fernabsatzverträge sind die Regel im E-Commerce und genießen besonderen Verbraucherschutz.

**📋 Definition Fernabsatzvertrag (§ 312c BGB):**

**Voraussetzungen:**
1. Unternehmer und Verbraucher
2. Vertrag über Waren/Dienstleistungen
3. Ausschließlich Fernkommunikationsmittel
4. Organisiertes Fernabsatzsystem

**Fernkommunikationsmittel (§ 312c II):**
- Internet, E-Mail
- Telefon, SMS
- Brief, Katalog
- Teleshopping

**🛡️ Verbraucherschutz:**

**Informationspflichten (§ 312d BGB):**
- Vor Vertragsschluss
- Wesentliche Merkmale der Ware
- Identität des Unternehmers
- Gesamtpreis inkl. aller Kosten
- Widerrufsrecht

**Widerrufsrecht (§§ 312g, 355 BGB):**
- 14 Tage ab Vertragsschluss/Warenerhalt
- Ohne Angabe von Gründen
- Ausnahmen in § 312g II
- Verlängerung bei fehlender Belehrung

**Button-Lösung (§ 312j III BGB):**
- "Zahlungspflichtig bestellen"
- Hervorhebung der Zahlungspflicht
- Sonst kein Vertrag!
- Schutz vor Kostenfallen`,
          memoryAids: [
            {
              id: 'mem-bgb-4-agb-2-1',
              title: '🧠 Merkhilfe Widerrufsfrist',
              content: `**14** Tage = **2** Wochen
Beginnt bei **W**arenerhalt
**W**iderrufsbelehrung erforderlich
Sonst **12** Monate + **14** Tage!`
            }
          ]
        },
        {
          id: 'section-bgb-4-agb-2-3',
          title: '🔨 Internet-Auktionen',
          content: `Internet-Auktionen werfen besondere rechtliche Fragen auf, insbesondere zur Verbindlichkeit von Geboten.

**⚖️ Rechtliche Einordnung:**

**Nicht § 156 BGB (klassische Versteigerung):**
- Kein Auktionator im rechtlichen Sinne
- Plattform nur technischer Vermittler
- Vertrag zwischen Mitgliedern

**BGH-Rechtsprechung:**
- Einstellen = Angebot unter Bedingung
- Bedingung: Höchstgebot bei Ablauf
- Gebot = bedingte Annahme
- Zuschlag erfolgt automatisch

**📋 Rolle der Plattform-AGB:**

**Auslegungslösung:**
- AGB bestimmen Erklärungswert
- Alle Nutzer kennen die Regeln
- Objektiver Empfängerhorizont
- Beispiel: "verbindliches Angebot" bei eBay

**Keine Rahmenvertragslösung:**
- Zu kompliziert konstruiert
- Überraschende Klausel (§ 305c)
- Praktisch nicht durchsetzbar

**⚠️ Problemfälle:**

**Vorzeitiger Abbruch:**
- Grundsätzlich nicht zulässig
- Ausnahme: Wichtiger Grund
- Schadensersatzpflicht möglich

**Mindestpreis nicht erreicht:**
- Wenn angegeben: Keine Bindung
- Wenn nicht: Verkäufer gebunden
- "Ohne Limit" = volles Risiko

**Rechtsmissbrauch:**
- Spaßbieter
- Preistreiberei
- Eigengebote des Verkäufers`,
          examples: [
            {
              id: 'ex-bgb-4-agb-2-2',
              title: '💰 Beispiel: 1-Euro-Auktion für Neuwagen',
              content: `**Fall:**
V stellt Neuwagen (Wert: 30.000 €) bei eBay ein. Startpreis: 1 €, kein Mindestpreis. Höchstgebot bei Ablauf: 5.000 € von K. V will nicht liefern.

**Lösung:**
1. Verbindliches Angebot durch Einstellen
2. K hat wirksam angenommen
3. Kaufvertrag über 5.000 € besteht
4. V muss liefern oder Schadensersatz leisten
5. Risiko der Preisgestaltung trägt V`,
              explanation: 'Wer ohne Mindestpreis versteigert, trägt das volle Preisrisiko.'
            }
          ],
          selfTest: {
            questions: [
              {
                id: 'q-bgb-4-agb-2-1',
                question: 'Warum ist die Button-Lösung so wichtig?',
                correctAnswer: 'Sie schützt Verbraucher vor versteckten Kosten. Ohne deutlichen Hinweis auf die Zahlungspflicht kommt nach § 312j III BGB kein wirksamer Vertrag zustande.'
              },
              {
                id: 'q-bgb-4-agb-2-2',
                question: 'Wann beginnt die Widerrufsfrist beim Online-Kauf?',
                correctAnswer: 'Bei Warenkauf beginnt sie mit Erhalt der Ware, bei Dienstleistungen mit Vertragsschluss. Voraussetzung ist aber immer eine ordnungsgemäße Widerrufsbelehrung.'
              }
            ]
          }
        },
        {
          id: 'section-bgb-4-agb-2-4',
          title: '🔐 AGB im Internet-Geschäft',
          content: `Die Einbeziehung von AGB im Internet erfordert besondere technische und rechtliche Vorkehrungen.

**📋 Einbeziehung online (§ 305 II BGB):**

**Technische Umsetzung:**
- Deutlich sichtbarer Link/Button
- VOR Vertragsschluss
- Nicht erst nach Bestellung
- Kontrastreiche Darstellung

**Kenntnisnahme ermöglichen:**
- Download als PDF
- Druckfunktion
- Speichermöglichkeit
- Keine Plugins erforderlich

**Einverständnis:**
- Checkbox "AGB akzeptiert"
- Oder: Bestellbutton mit Hinweis
- Opt-in, nicht Opt-out
- Protokollierung empfohlen

**🌐 Besonderheiten E-Commerce:**

**§ 312i I Nr. 4 BGB:**
- Speicherung "in wiedergabefähiger Form"
- Auch nach Vertragsschluss
- Beweissicherung für beide Seiten

**Mehrsprachige Shops:**
- AGB in Vertragssprache
- Bei Zweifeln: Kundensprache
- Übersetzung muss korrekt sein

**Updates von AGB:**
- Alte Kunden: Änderungsvereinbarung nötig
- Neue Kunden: Ab sofort gültig
- Versionierung empfohlen

**⚡ Praxis-Checkliste Online-AGB:**
✓ Link auf jeder Seite
✓ Vor Bestellabschluss einbinden
✓ PDF-Download anbieten
✓ Checkbox oder klare Zustimmung
✓ Versionskontrolle implementieren
✓ Archivierung alter Versionen`,
          examples: [
            {
              id: 'ex-bgb-4-agb-2-3',
              title: '📱 Beispiel: App-Store AGB-Update',
              content: `**Situation:**
App-Store ändert AGB. Nutzer N muss vor nächstem Download zustimmen: "Die neuen AGB gelten ab sofort. Weiter = Zustimmung"

**Bewertung:**
- Für neue Downloads: Wirksam
- Änderung bestehender Verträge: Fraglich
- Kein "Weiterverwenden" ohne Zustimmung
- Alternative: Kündigung
- Kopplungsverbot beachten (§ 308 Nr. 12)`,
              explanation: 'AGB-Änderungen können nicht einseitig durchgesetzt werden, sondern bedürfen der Zustimmung.'
            }
          ]
        }
      ],
      resources: [
        {
          id: 'res-bgb-4-agb-2',
          title: 'EU-Verbraucherrechterichtlinie',
          type: 'article',
          url: 'https://eur-lex.europa.eu',
          description: 'Richtlinie 2011/83/EU über Verbraucherrechte'
        }
      ],
      glossary: [
        {
          term: 'Fernabsatzvertrag',
          definition: 'Vertrag zwischen Unternehmer und Verbraucher unter ausschließlicher Verwendung von Fernkommunikationsmitteln'
        },
        {
          term: 'Button-Lösung',
          definition: 'Pflicht zur deutlichen Kennzeichnung kostenpflichtiger Bestellungen (§ 312j III BGB)'
        },
        {
          term: 'Widerrufsrecht',
          definition: 'Recht des Verbrauchers, binnen 14 Tagen ohne Angabe von Gründen vom Vertrag zurückzutreten'
        },
        {
          term: 'Internet-Auktion',
          definition: 'Online-Versteigerung, bei der das Höchstgebot den Zuschlag erhält'
        }
      ]
    },
    requiredMastery: 80,
    estimatedMinutes: 900, // 15 Stunden
    exercises: []
  },

  // Unit 3: Die Auslegung (15-20 Stunden)
  {
    id: 'bgb-ke4-agb-3',
    moduleId: 'bgb-at',
    order: 12,
    title: '§ 9 Die Auslegung',
    objectives: [
      {
        id: 'obj-bgb-4-agb-3-1',
        description: 'Auslegungsmethoden für Willenserklärungen beherrschen',
        bloomLevel: 'apply'
      },
      {
        id: 'obj-bgb-4-agb-3-2',
        description: 'Vertragsauslegung nach §§ 133, 157 BGB durchführen',
        bloomLevel: 'analyze'
      },
      {
        id: 'obj-bgb-4-agb-3-3',
        description: 'Ergänzende Vertragsauslegung von Lückenfüllung abgrenzen',
        bloomLevel: 'evaluate'
      },
      {
        id: 'obj-bgb-4-agb-3-4',
        description: 'Besonderheiten der AGB-Auslegung anwenden',
        bloomLevel: 'apply'
      }
    ],
    content: {
      id: 'content-bgb-4-agb-3',
      type: 'mixed',
      sections: [
        {
          id: 'section-bgb-4-agb-3-1',
          title: '📖 Grundlagen der Auslegung',
          content: `Die Auslegung ermittelt den rechtlich maßgeblichen Sinn von Erklärungen. Sie ist das tägliche Handwerkszeug des Juristen.

**🎯 Gesetzliche Grundlagen:**

**§ 133 BGB - Auslegung einer Willenserklärung:**
"Bei der Auslegung einer Willenserklärung ist der wirkliche Wille zu erforschen und nicht an dem buchstäblichen Sinne des Ausdrucks zu haften."

**§ 157 BGB - Auslegung von Verträgen:**
"Verträge sind so auszulegen, wie Treu und Glauben mit Rücksicht auf die Verkehrssitte es erfordern."

**📊 Auslegungstheorien:**

| Theorie | Ansatz | Problem |
|---------|--------|---------|
| Willenstheorie | Subjektiver Wille entscheidet | Rechtsunsicherheit |
| Erklärungstheorie | Objektiver Erklärungswert | Ignoriert Parteiwillen |
| Geltungstheorie | Empfängerhorizont maßgeblich | Heute herrschend |

**🔍 Normative Auslegung (h.M.):**
- Objektiver Empfängerhorizont
- Wie durfte/musste Empfänger verstehen?
- Alle Umstände einbeziehen
- Treu und Glauben beachten

**💡 Wichtige Grundsätze:**

**Falsa demonstratio non nocet:**
- Falsche Bezeichnung schadet nicht
- Wenn beide dasselbe meinen
- Übereinstimmender Wille geht vor
- Beispiel: "Haakjöringsköd"-Fall

**Andeutungstheorie:**
- Wille muss irgendwie erkennbar sein
- Nicht notwendig vollständig
- Aber: Anhaltspunkt erforderlich`,
          examples: [
            {
              id: 'ex-bgb-4-agb-3-1',
              title: '🐋 Klassiker: Haakjöringsköd-Fall',
              content: `**RGZ 99, 147:**
Parteien einigen sich auf Lieferung von "Haakjöringsköd". Beide glauben, das bedeute Walfleisch. Tatsächlich heißt es Haifleisch.

**Lösung:**
- Objektiv = Haifleisch
- Subjektiv übereinstimmend = Walfleisch
- Falsa demonstratio non nocet
- Vertrag über Walfleisch geschlossen
- Lieferung von Haifleisch wäre Nichterfüllung`,
              explanation: 'Der übereinstimmende Parteiwille geht dem objektiven Wortsinn vor.'
            }
          ],
          memoryAids: [
            {
              id: 'mem-bgb-4-agb-3-1',
              title: '🧠 Merkhilfe Auslegung',
              content: `**§ 133** = Ein**DREI**hundertdrei**und**dreißig → **EINE** Erklärung
**§ 157** = **Ver**träge → **ZWEI** Parteien`
            }
          ]
        },
        {
          id: 'section-bgb-4-agb-3-2',
          title: '🤝 Auslegung von Verträgen',
          content: `Die Vertragsauslegung ermittelt den Inhalt der vertraglichen Regelung zwischen den Parteien.

**🔄 Arten der Vertragsauslegung:**

**1. Einfache (erläuternde) Auslegung:**
- Klarstellung des Gewollten
- Was bedeutet eine Klausel?
- Begriffe im Kontext verstehen
- Verkehrssitte einbeziehen

**2. Ergänzende Vertragsauslegung:**
- Lückenfüllung
- Hypothetischer Parteiwille
- "Was hätten die Parteien geregelt?"
- Anknüpfung an Vertragszweck

**📋 Auslegungskriterien:**

**Systematik:**
- Gesamtzusammenhang
- Andere Vertragsklauseln
- Präambel/Zweckbestimmung
- Anlagen und Bezugnahmen

**Historie:**
- Vertragsverhandlungen
- Vorkorrespondenz
- Frühere Geschäfte
- Branchenüblichkeit

**Teleologie:**
- Vertragszweck
- Interessenlage
- Risikoverteilung
- Wirtschaftlicher Sinn

**⚖️ Ergänzende Vertragsauslegung:**

**Voraussetzungen:**
1. Planwidrige Regelungslücke
2. Keine dispositiven Normen
3. Hypothetischer Parteiwille ermittelbar
4. Anknüpfung an Vertragsinhalt

**Abgrenzung:**
- ≠ Vertragsanpassung (§ 313)
- ≠ Gesetzliche Lückenfüllung
- ≠ Neugestaltung des Vertrags
- Nur: Was vergessen wurde`,
          examples: [
            {
              id: 'ex-bgb-4-agb-3-2',
              title: '🏪 Beispiel: Wettbewerbsverbot im Mietvertrag',
              content: `**Fall nach RGZ 119, 353:**
Buchhändler mietet Laden. Vertrag enthält Wettbewerbsverbot "im Haus". Vermieter eröffnet Buchhandlung im Kiosk auf dem Vorplatz.

**Ergänzende Auslegung:**
1. Lücke: Vorplatz nicht geregelt
2. Parteizweck: Schutz vor Konkurrenz
3. Hypothetischer Wille: Auch Vorplatz
4. Ergebnis: Verbot erstreckt sich auf Grundstück
5. Kiosk-Vermietung vertragswidrig`,
              explanation: 'Die Lücke wird im Sinne des erkennbaren Vertragszwecks geschlossen.'
            }
          ],
          selfTest: {
            questions: [
              {
                id: 'q-bgb-4-agb-3-1',
                question: 'Wann ist Raum für ergänzende Vertragsauslegung?',
                correctAnswer: 'Nur bei planwidrigen Regelungslücken. Die Parteien müssen etwas übersehen haben, was sie bei Kenntnis geregelt hätten.'
              },
              {
                id: 'q-bgb-4-agb-3-2',
                question: 'Was bedeutet der objektive Empfängerhorizont?',
                correctAnswer: 'Maßgeblich ist, wie ein objektiver Dritter in der Position des Empfängers die Erklärung verstehen durfte und musste.'
              }
            ]
          }
        },
        {
          id: 'section-bgb-4-agb-3-3',
          title: '📜 Auslegung von AGB',
          content: `Die AGB-Auslegung folgt besonderen Regeln, da sie für eine Vielzahl von Fällen gelten.

**🎯 Besonderheiten der AGB-Auslegung:**

**Objektive Auslegung:**
- Kein individueller Parteiwille
- Verständnis des Durchschnittskunden
- Typische Vertragssituation
- Keine Einzelfallumstände

**Kundenfreundlichste Auslegung:**
- § 305c II BGB: Unklarheitenregel
- Contra proferentem
- Zweifel gegen Verwender
- Auch bei gleicher Verhandlungsmacht

**🔍 Auslegungsgrundsätze:**

**Systematische Auslegung:**
- Gesamte AGB betrachten
- Überschriften beachten
- Querverweise prüfen
- Widersprüche auflösen

**Überraschungsschutz:**
- § 305c I BGB
- Ungewöhnlicher Inhalt
- Versteckte Klauseln
- Systematisch deplatziert

**📊 Verhältnis zu Individualvereinbarungen:**

**Vorrang nach § 305b BGB:**
- Individualabrede geht vor
- Auch bei Widerspruch
- Auslegung der Reichweite
- Schriftformklauseln unwirksam

**⚠️ Problemfälle:**

**Salvatorische Klauseln:**
- "Sollte eine Klausel unwirksam sein..."
- Ändert nichts an § 306
- Keine geltungserhaltende Reduktion
- Nur psychologische Wirkung

**Schriftformklauseln:**
- Einfache: Durch mündliche Abrede aufhebbar
- Doppelte: Ebenfalls aufhebbar
- § 305b nicht abdingbar
- BGH-Rechtsprechung eindeutig`,
          examples: [
            {
              id: 'ex-bgb-4-agb-3-3',
              title: '💳 Beispiel: Unklare Preisanpassungsklausel',
              content: `**AGB-Klausel:**
"Der Anbieter kann Preise angemessen anpassen."

**Auslegung nach § 305c II:**
- "Angemessen" ist unklar
- Wann? Wie oft? Wie viel?
- Kundenfreundlichste Auslegung:
  → Nur Kostensteigerungen
  → Nicht öfter als jährlich
  → Nachvollziehbar begründet
- Besser: Klausel zu unklar → unwirksam`,
              explanation: 'Unklare Klauseln werden gegen den Verwender ausgelegt oder sind ganz unwirksam.'
            }
          ]
        },
        {
          id: 'section-bgb-4-agb-3-4',
          title: '🔧 Praktische Auslegungsfragen',
          content: `Die Praxis kennt typische Auslegungsprobleme und hat Lösungen entwickelt.

**📋 Häufige Klauseln und ihre Auslegung:**

**"Wie besichtigt":**
- Gewährleistungsausschluss
- Nur für erkennbare Mängel
- Versteckte Mängel nicht erfasst
- Aufklärungspflichten bleiben

**"Circa-Angaben":**
- Mengen: ±10% üblich
- Zeiten: Branchenabhängig
- Keine Beliebigkeit
- Treu und Glauben

**"Handelsüblich":**
- Verweis auf Handelsbrauch
- Beweislast beim Berufenden
- Auch für Nicht-Kaufleute?
- Auslegung erforderlich

**🌐 Internationale Verträge:**

**Sprachprobleme:**
- Vertragssprache maßgeblich
- Bei mehreren: Auslegung
- Übersetzungsfehler
- Fachbegriffe beachten

**Rechtswahlklauseln:**
- Eindeutigkeit erforderlich
- Teilrechtswahl möglich?
- Verweisungen prüfen
- ROM I-VO beachten

**⚡ Auslegung in der Klausur:**

**Prüfungsaufbau:**
1. Auslegungsbedürftigkeit?
2. Wortlaut
3. Systematik
4. Historie (wenn bekannt)
5. Telos
6. Bei AGB: § 305c II
7. Ergebnis formulieren

**Formulierungsbeispiele:**
- "Auszulegen ist..."
- "Nach dem Wortlaut könnte..."
- "Systematisch spricht dafür..."
- "Nach Sinn und Zweck..."
- "Im Ergebnis ist daher..."`,
          examples: [
            {
              id: 'ex-bgb-4-agb-3-4',
              title: '📅 Beispiel: "Unverzüglich" in AGB',
              content: `**Problem:**
AGB: "Mängel sind unverzüglich anzuzeigen."

**Auslegungsschritte:**
1. Wortlaut: § 121 BGB = ohne schuldhaftes Zögern
2. Aber: Für Verbraucher unklar
3. § 305c II: Kundenfreundlich
4. Angemessene Prüfzeit
5. Ergebnis: Je nach Komplexität 1-4 Wochen
6. Besser wäre: Konkrete Frist`,
              explanation: 'Juristische Fachbegriffe in AGB müssen für Durchschnittskunden verständlich sein.'
            }
          ]
        }
      ],
      resources: [
        {
          id: 'res-bgb-4-agb-3',
          title: 'Palandt-Kommentar §§ 133, 157',
          type: 'book',
          url: '#',
          description: 'Standardkommentar zur Auslegung'
        }
      ],
      glossary: [
        {
          term: 'Auslegung',
          definition: 'Ermittlung des rechtlich maßgeblichen Sinns einer Erklärung'
        },
        {
          term: 'Empfängerhorizont',
          definition: 'Maßstab der Auslegung aus Sicht eines objektiven Empfängers'
        },
        {
          term: 'Falsa demonstratio',
          definition: 'Grundsatz, dass falsche Bezeichnungen bei übereinstimmendem Willen nicht schaden'
        },
        {
          term: 'Ergänzende Vertragsauslegung',
          definition: 'Lückenfüllung durch Ermittlung des hypothetischen Parteiwillens'
        },
        {
          term: 'Unklarheitenregel',
          definition: 'Auslegung von AGB-Zweifeln zu Lasten des Verwenders (§ 305c II BGB)'
        }
      ]
    },
    requiredMastery: 85,
    estimatedMinutes: 1200, // 20 Stunden
    exercises: []
  }
];

// Exercises for all units
const exercisesKE4AGB: Exercise[] = [
  // Exercises for AGB Unit
  {
    id: 'ex-bgb-ke4-agb-1-1',
    type: 'multipleChoice',
    difficulty: 'beginner',
    points: 10,
    content: {
      question: 'Welche Aussage zu AGB ist richtig?',
      options: [
        'AGB müssen immer schriftlich vorliegen',
        'Für Unternehmer gilt keine AGB-Kontrolle',
        'Eine dreimalige Verwendungsabsicht genügt für das Merkmal "Vielzahl"',
        'Individualvereinbarungen unterliegen auch der AGB-Kontrolle'
      ]
    },
    hints: [
      {
        id: 'hint-1',
        text: 'Denken Sie an die Definition in § 305 I BGB.',
        penaltyPoints: 2
      }
    ],
    solution: {
      correct: 'Eine dreimalige Verwendungsabsicht genügt für das Merkmal "Vielzahl"',
      explanation: 'Die Rechtsprechung sieht bereits bei dreimaliger Verwendungsabsicht das Merkmal "Vielzahl" als erfüllt an. AGB können auch mündlich gestellt werden, für Unternehmer gilt eine eingeschränkte Kontrolle (§ 310 I), und Individualvereinbarungen unterliegen gerade nicht der AGB-Kontrolle.'
    }
  },
  {
    id: 'ex-bgb-ke4-agb-1-2',
    type: 'caseAnalysis',
    difficulty: 'advanced',
    points: 30,
    content: {
      question: 'Prüfen Sie die AGB-Klausel auf Wirksamkeit:',
      scenario: `Autohändler A verkauft an Verbraucherin V einen Neuwagen. In seinen AGB findet sich folgende Klausel:
"Die Gewährleistungsfrist beträgt 12 Monate ab Übergabe. Schadensersatzansprüche sind ausgeschlossen, es sei denn, sie beruhen auf einer vorsätzlichen oder grob fahrlässigen Pflichtverletzung."`,
      tasks: [
        'Prüfen Sie die Einbeziehung der AGB (unterstellen Sie ordnungsgemäßen Hinweis)',
        'Führen Sie eine vollständige Inhaltskontrolle durch',
        'Welche Rechtsfolgen ergeben sich?'
      ]
    },
    solution: {
      correct: {
        structure: `I. Einbeziehung
   - Unterstellt als wirksam
   
II. Inhaltskontrolle
   1. Gewährleistungsfrist
      a) § 309 Nr. 8 b) ff) BGB
      - Verkürzung bei Neuwaren auf 12 Monate
      - Verstoß gegen Klauselverbot
      - Unwirksam
      
   2. Haftungsausschluss
      a) § 309 Nr. 7 b) BGB
      - Ausschluss bei einfacher Fahrlässigkeit
      - Für Körperschäden verboten
      - Teilunwirksam
      
      b) Für Sachschäden
      - Nach § 309 Nr. 7 b) zulässig
      - Wirksam
      
III. Rechtsfolgen (§ 306)
    - Gewährleistung: 2 Jahre (§ 438 I Nr. 3)
    - Haftung: Gesetzliche Regelung für Körperschäden`,
        keyPoints: [
          'Verkürzung der Gewährleistung bei Neuwaren unter 2 Jahre ist unzulässig',
          'Haftungsausschluss für Körperschäden immer unwirksam',
          'Unwirksame Klauseln werden durch Gesetz ersetzt'
        ]
      },
      explanation: 'Die Klausel verstößt in Teilen gegen zwingende Klauselverbote. Die Aufspaltung in wirksame und unwirksame Teile ist möglich.'
    }
  },
  
  // Exercises for Internet Contracts Unit
  {
    id: 'ex-bgb-ke4-agb-2-1',
    type: 'trueFalse',
    difficulty: 'intermediate',
    points: 10,
    content: {
      question: 'Bei Internet-Auktionen ist das Einstellen der Ware nur eine unverbindliche invitatio ad offerendum.'
    },
    hints: [
      {
        id: 'hint-1',
        text: 'Was sagt die BGH-Rechtsprechung zu eBay-Auktionen?',
        penaltyPoints: 3
      }
    ],
    solution: {
      correct: false,
      explanation: 'Nach der BGH-Rechtsprechung ist das Einstellen bei eBay ein verbindliches Angebot unter der aufschiebenden Bedingung des Höchstgebots bei Auktionsende. Die AGB der Plattform bestimmen den Erklärungswert.'
    }
  },
  {
    id: 'ex-bgb-ke4-agb-2-2',
    type: 'fillInBlanks',
    difficulty: 'beginner',
    points: 15,
    content: {
      question: 'Ergänzen Sie die Regelungen zum Fernabsatz:',
      context: 'Das Widerrufsrecht beträgt ____ Tage und beginnt bei Waren mit ____. Ohne ordnungsgemäße Belehrung verlängert sich die Frist auf maximal ____ Monate und ____ Tage.',
      blanks: 4
    },
    hints: [
      {
        id: 'hint-1',
        text: 'Schauen Sie in §§ 355, 356 BGB.',
        penaltyPoints: 2
      }
    ],
    solution: {
      correct: ['14', 'Erhalt der Ware', '12', '14'],
      explanation: 'Die Grundfrist beträgt 14 Tage ab Warenerhalt. Bei fehlender oder fehlerhafter Widerrufsbelehrung erlischt das Widerrufsrecht spätestens 12 Monate und 14 Tage nach Vertragsschluss.'
    }
  },
  {
    id: 'ex-bgb-ke4-agb-2-3',
    type: 'problemSolving',
    difficulty: 'intermediate',
    points: 20,
    content: {
      question: 'Lösen Sie das Problem der Button-Lösung:',
      context: `Online-Shop O hat einen Bestellbutton mit der Aufschrift "Bestellung abschließen". Darunter steht klein: "Kostenpflichtige Bestellung". 
Kunde K bestellt Waren für 500 €. Nach Lieferung verweigert K die Zahlung und beruft sich auf § 312j III BGB.`,
      tasks: ['Hat K einen Zahlungsanspruch? Begründen Sie Ihre Antwort!']
    },
    solution: {
      correct: {
        answer: 'K muss nicht zahlen',
        reasoning: `§ 312j III BGB verlangt, dass der Button selbst mit "zahlungspflichtig bestellen" oder einer entsprechend eindeutigen Formulierung beschriftet ist. 
        
Der Text darunter genügt nicht. "Bestellung abschließen" macht die Zahlungspflicht nicht deutlich.
        
Rechtsfolge: Kein wirksamer Vertrag, O hat keinen Zahlungsanspruch.`
      },
      explanation: 'Die Button-Lösung soll Kostenfallen verhindern. Die Anforderungen sind streng und formalistisch.'
    }
  },
  
  // Exercises for Auslegung Unit
  {
    id: 'ex-bgb-ke4-agb-3-1',
    type: 'conceptMap',
    difficulty: 'intermediate',
    points: 20,
    content: {
      question: 'Ordnen Sie die Auslegungsmethoden den richtigen Paragraphen zu:',
      centralConcept: 'Auslegung BGB',
      requiredConcepts: [
        '§ 133 BGB',
        '§ 157 BGB',
        '§ 305c II BGB',
        'Wirklicher Wille',
        'Treu und Glauben',
        'Unklarheitenregel',
        'Einzelne Willenserklärung',
        'Verträge',
        'AGB'
      ]
    },
    solution: {
      correct: {
        relationships: [
          ['§ 133 BGB', 'regelt', 'Einzelne Willenserklärung'],
          ['§ 133 BGB', 'erforscht', 'Wirklicher Wille'],
          ['§ 157 BGB', 'regelt', 'Verträge'],
          ['§ 157 BGB', 'berücksichtigt', 'Treu und Glauben'],
          ['§ 305c II BGB', 'regelt', 'AGB'],
          ['§ 305c II BGB', 'enthält', 'Unklarheitenregel']
        ]
      },
      explanation: 'Die drei Normen regeln unterschiedliche Auslegungssituationen mit jeweils eigenen Schwerpunkten.'
    }
  },
  {
    id: 'ex-bgb-ke4-agb-3-2',
    type: 'complexCase',
    difficulty: 'advanced',
    points: 35,
    content: {
      question: 'Lösen Sie den Auslegungsfall:',
      scenario: `Computergroßhändler C und Einzelhändler E schließen einen "Kaufvertrag über 100 Notebooks Typ ThinkPad". 
      
Im E-Mail-Verkehr war immer von "ThinkPad T14" die Rede. Im unterschriebenen Vertrag fehlt die Typbezeichnung. 
C liefert 100 ThinkPad E14 (Einsteiger-Modell, 400 € günstiger). 
E verlangt Lieferung der T14-Modelle.

In Cs AGB heißt es: "Bei unklaren Bestellungen bestimmt C die Ausführung nach billigem Ermessen."`,
      tasks: [
        'Welcher Vertragsinhalt wurde vereinbart?',
        'Wie ist die AGB-Klausel zu bewerten?',
        'Welche Ansprüche hat E?'
      ]
    },
    solution: {
      correct: {
        structure: `I. Vertragsinhalt durch Auslegung
   1. Wortlaut: "ThinkPad" - mehrdeutig
   2. Auslegung nach §§ 133, 157 BGB
      - Vorkorrespondenz: eindeutig T14
      - Empfängerhorizont: C musste wissen
      - Keine falsa demonstratio (einseitig)
   3. Ergebnis: Vertrag über T14
   
II. AGB-Klausel
   1. Einbeziehung (unterstellt)
   2. Inhaltskontrolle
      - § 307 I BGB: Unangemessene Benachteiligung
      - Kernbereich der Leistung
      - Einseitige Bestimmung
   3. Unwirksam
   
III. Ansprüche des E
    - § 433 I: Lieferung von 100 ThinkPad T14
    - C hat E14 geliefert = Schlechtleistung
    - §§ 437 Nr. 1, 439: Nacherfüllung`,
        keyPoints: [
          'E-Mail-Verkehr ist Teil der Auslegungsgrundlage',
          'AGB können Hauptleistung nicht einseitig ändern',
          'Lieferung falscher Modelle = Sachmangel'
        ]
      },
      explanation: 'Die Auslegung muss alle Umstände einbeziehen. Die AGB-Klausel kann die durch Auslegung ermittelte Hauptleistungspflicht nicht aushebeln.'
    }
  },
  {
    id: 'ex-bgb-ke4-agb-3-3',
    type: 'multipleChoice',
    difficulty: 'intermediate',
    points: 15,
    content: {
      question: 'In welchem Fall liegt KEINE ergänzende Vertragsauslegung vor?',
      options: [
        'Parteien haben Kündigungsfristen vergessen zu regeln',
        'Gesetz enthält dispositive Norm für die Frage',
        'Parteien konnten sich nicht einigen und ließen Punkt offen',
        'Nachträgliche Umstände erfordern Anpassung'
      ]
    },
    hints: [
      {
        id: 'hint-1',
        text: 'Ergänzende Auslegung setzt planwidrige Lücke voraus.',
        penaltyPoints: 3
      }
    ],
    solution: {
      correct: 'Parteien konnten sich nicht einigen und ließen Punkt offen',
      explanation: 'Wenn die Parteien bewusst einen Punkt offen gelassen haben, liegt keine planwidrige, sondern eine geplante Lücke vor. Diese kann nicht durch ergänzende Auslegung gefüllt werden.'
    }
  }
];

// Add exercises to units
kurseinheit4AGBUnits[0].exercises = exercisesKE4AGB.slice(0, 2); // AGB exercises
kurseinheit4AGBUnits[1].exercises = exercisesKE4AGB.slice(2, 5); // Internet exercises
kurseinheit4AGBUnits[2].exercises = exercisesKE4AGB.slice(5); // Auslegung exercises