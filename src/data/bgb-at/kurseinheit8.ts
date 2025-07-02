import { LearningUnit, Exercise } from '../../types/learning';

// KURSEINHEIT 8: Fristen, Verjährung und Personen
// Basierend auf FernUni Hagen PDF 55101-08-S#1-2001628.pdf  
// Autoren: Prof. Dr. Sebastian Kubis, Prof. Dr. Ulrich Eisenhardt
// 50 Stunden / 1.5 ECTS

export const kurseinheit8BGBUnits: LearningUnit[] = [
  // 8.1 Die Berechnung von Fristen und Terminen (10 Stunden)
  {
    id: 'bgb-ke8-1-fristen-termine',
    moduleId: 'bgb-at',
    order: 23,
    title: '8.1 Die Berechnung von Fristen und Terminen',
    objectives: [
      {
        id: 'obj-bgb-8-1-1',
        description: 'Die Regeln der §§ 187-193 BGB sicher anwenden',
        bloomLevel: 'apply'
      },
      {
        id: 'obj-bgb-8-1-2',
        description: 'Fristbeginne und -enden korrekt berechnen',
        bloomLevel: 'analyze'
      },
      {
        id: 'obj-bgb-8-1-3',
        description: 'Praktische Fristprobleme lösen können',
        bloomLevel: 'evaluate'
      }
    ],
    content: {
      id: 'content-bgb-8-1',
      type: 'mixed',
      sections: [
        {
          id: 'section-bgb-8-1-1',
          title: '⏰ Einleitung und Bedeutung',
          content: `Der Faktor "Zeit" hat im Rechtsleben eine enorme Bedeutung, da er häufig Voraussetzung für den Eintritt oder Nichteintritt einer Rechtswirkung ist.

**📋 Bedeutung von Fristen:**

**Gesetzliche Zeitbestimmungen:**
- Volljährigkeit mit 18 Jahren (§§ 2, 106 BGB)
- Verjährungsfristen (§§ 195 ff. BGB)
- Kündigungsfristen
- Gewährleistungsfristen

**Vertragliche/einseitige Zeitbestimmungen:**
- Annahmefristen (§ 148 BGB)
- Zahlungsfristen
- Liefertermine
- Befristete Verträge

**⚖️ Die §§ 187-193 BGB:**

**Zweck:**
- Bestimmtheit und Einfachheit
- Einheitliche Auslegung
- Vermeidung von Missverständnissen
- Rechtssicherheit

**Charakter:**
- Materielle Auslegungsregeln
- Subsidiär zu §§ 133, 157 BGB
- Gelten für alle Rechtsgebiete
- Abdingbar durch Vereinbarung

**📊 Grundbegriffe:**

| Begriff | Definition | Beispiel |
|---------|------------|----------|
| **Frist** | Zeitraum für Rechtshandlung | "innerhalb von 14 Tagen" |
| **Termin** | Bestimmter Zeitpunkt | "am 15.03.2024" |
| **Ereignisfrist** | Beginnt mit Ereignis | "ab Zugang" |
| **Beginnfrist** | Beginnt mit Tagesbeginn | "ab dem 01.04." |`,
          examples: [
            {
              id: 'ex-bgb-8-1-1',
              title: '📅 Beispiel: Eindeutige vs. auslegungsbedürftige Fristen',
              content: `**Eindeutig (keine §§ 187 ff. nötig):**
- "bis Donnerstag, 7.11., 12 Uhr mittags"
- "bis einschließlich 7.11." → 7.11., 24:00 Uhr

**Auslegungsbedürftig:**
- "bis zum 7.11." → §§ 187 ff. anwenden
- "binnen einer Woche" → Berechnung nötig
- "heute in 8 Tagen" → umgangssprachlich`,
              explanation: 'Die §§ 187 ff. greifen nur bei Auslegungsbedarf ein.'
            }
          ]
        },
        {
          id: 'section-bgb-8-1-2',
          title: '📐 Fristbeginn nach § 187 BGB',
          content: `Die Berechnung des Fristbeginns folgt dem Prinzip der "Zivilkomputation" - Berechnung nach ganzen Kalendertagen.

**🎯 § 187 Abs. 1 - Ereignisfrist:**

**Grundregel:**
Bei Ereignis in den Lauf eines Tages wird dieser Tag NICHT mitgerechnet.

**Grund:**
- Vermeidung von Bruchteilen
- Einheitliche Berechnung
- Klarheit und Einfachheit

**Beispiele für Ereignisse:**
- Zugang einer Erklärung
- Vertragsschluss
- Übergabe einer Sache
- Kenntnis von Umständen

**📅 § 187 Abs. 2 - Tagesbeginn:**

**Satz 1:**
Ist der Anfang eines Tages Fristbeginn, wird dieser Tag MIT eingerechnet.

**Beispiele:**
- "ab dem 1. März"
- "vom 1. April an"
- Pachtbeginn am 1.7.

**Satz 2 - Lebensalter:**
Der Geburtstag wird mitgezählt (Ausnahme von Abs. 1).

**⏱️ Praktische Anwendung:**

\`\`\`
Fristsetzung am 15.03. um 14:00 Uhr für 5 Tage:
- 15.03. zählt nicht mit (§ 187 I)
- Fristbeginn: 16.03., 00:00 Uhr
- Tag 1: 16.03.
- Tag 2: 17.03.
- Tag 3: 18.03.
- Tag 4: 19.03.
- Tag 5: 20.03.
- Fristende: 20.03., 24:00 Uhr
\`\`\``,
          memoryAids: [
            {
              id: 'mem-bgb-8-1-1',
              title: '🧠 Merkhilfe Fristbeginn',
              content: `**E**reignis → **E**rster Tag zählt nicht
**T**agesbeginn → **T**ag zählt mit

Eselsbrücke: "Event - Erstmal warten"`
            }
          ]
        },
        {
          id: 'section-bgb-8-1-3',
          title: '🏁 Fristende nach § 188 BGB',
          content: `Das Fristende bestimmt den letzten Zeitpunkt für die Vornahme einer Handlung.

**📋 § 188 Abs. 1 - Tagesfrist:**

**Grundregel:**
Frist endet mit Ablauf des letzten Tages (24:00 Uhr).

**Wichtig:**
- Nicht "irgendwann" am letzten Tag
- Volle Ausnutzung möglich
- Aber: Praktische Grenzen beachten!

**Praktische Einschränkungen:**
- Geschäftszeiten
- Postlaufzeiten
- Zugang bei Empfänger
- Öffnungszeiten von Behörden

**📅 § 188 Abs. 2 - Wochen-/Monatsfrist:**

**Bei Ereignisfrist (§ 187 I):**
Ende am entsprechenden Tag der letzten Woche/des letzten Monats.

**Beispiel:**
- Ereignis: Donnerstag, 12.09.
- 2-Wochen-Frist
- Ende: Donnerstag, 26.09., 24:00 Uhr

**Bei Beginnfrist (§ 187 II):**
Ende einen Tag früher!

**Beispiel:**
- Beginn: Donnerstag, 12.09.
- 2-Wochen-Frist  
- Ende: Mittwoch, 25.09., 24:00 Uhr

**🚨 § 188 Abs. 3 - Fehlen des Tages:**

**Problem:**
Monat hat keinen entsprechenden Tag.

**Lösung:**
Letzter Tag des Monats.

**Beispiel:**
- 1-Monatsfrist ab 31. Januar
- Februar hat keinen 31.
- Ende: 28./29. Februar`,
          examples: [
            {
              id: 'ex-bgb-8-1-2',
              title: '⚖️ Beispiel: Annahmefrist',
              content: `**Sachverhalt:**
A macht B am 12.09. um 15:00 Uhr ein Angebot.
A: "Sie haben 5 Tage Zeit für die Annahme."
B wohnt in einer anderen Stadt.

**Fristberechnung:**
- Ereignis: 12.09. (zählt nicht mit)
- Fristbeginn: 13.09., 00:00 Uhr
- Fristende: 17.09., 24:00 Uhr

**Aber:** 
- Annahme muss zugehen (§ 130 BGB)
- Innerhalb normaler Geschäftszeiten
- Brief am 17.09., 22:00 Uhr = zu spät!`,
              explanation: 'Die theoretische Frist kann praktisch eingeschränkt sein.'
            }
          ],
          selfTest: {
            questions: [
              {
                id: 'q-bgb-8-1-1',
                question: 'K erhält am Mittwoch, 10.04., 14:00 Uhr eine 1-Wochenfrist. Wann endet sie?',
                correctAnswer: 'Am Mittwoch, 17.04., 24:00 Uhr (§§ 187 I, 188 II BGB).'
              },
              {
                id: 'q-bgb-8-1-2',
                question: 'Was gilt bei einer Monatsfrist ab dem 31. Mai?',
                correctAnswer: 'Sie endet am 30. Juni, 24:00 Uhr, da der Juni keinen 31. Tag hat (§ 188 III BGB).'
              }
            ]
          }
        }
      ],
      resources: [],
      glossary: [
        {
          term: 'Frist',
          definition: 'Zeitraum, innerhalb dessen eine Rechtshandlung vorzunehmen ist'
        },
        {
          term: 'Termin',
          definition: 'Bestimmter Zeitpunkt für eine Rechtshandlung oder Rechtswirkung'
        },
        {
          term: 'Zivilkomputation',
          definition: 'Berechnung nach ganzen Kalendertagen im BGB'
        }
      ]
    },
    requiredMastery: 85,
    estimatedMinutes: 600,
    exercises: []
  },

  // 8.2 Die Verjährung (15 Stunden)
  {
    id: 'bgb-ke8-2-verjaehrung',
    moduleId: 'bgb-at',
    order: 24,
    title: '8.2 Die Verjährung',
    objectives: [
      {
        id: 'obj-bgb-8-2-1',
        description: 'Das Rechtsinstitut der Verjährung verstehen',
        bloomLevel: 'understand'
      },
      {
        id: 'obj-bgb-8-2-2',
        description: 'Verjährungsfristen und -beginn berechnen',
        bloomLevel: 'apply'
      },
      {
        id: 'obj-bgb-8-2-3',
        description: 'Hemmung und Neubeginn analysieren',
        bloomLevel: 'analyze'
      }
    ],
    content: {
      id: 'content-bgb-8-2',
      type: 'mixed',
      sections: [
        {
          id: 'section-bgb-8-2-1',
          title: '⏳ Grundlagen der Verjährung',
          content: `Die Verjährung ist ein fundamentales Rechtsinstitut, das dem Rechtsfrieden und der Rechtssicherheit dient.

**📋 Begriff und Zweck:**

**Definition:**
Verjährung ist der Verlust der gerichtlichen Durchsetzbarkeit eines Anspruchs durch Zeitablauf.

**Zwecke:**
- **Rechtsfrieden:** Irgendwann muss Ruhe einkehren
- **Rechtssicherheit:** Klare Verhältnisse
- **Beweissicherung:** Beweisverlust nach langer Zeit
- **Schuldnerschutz:** Vor "vergessenen" Forderungen

**⚖️ Wirkung der Verjährung (§ 214 BGB):**

**Einrede, nicht Einwendung:**
- Muss vom Schuldner erhoben werden
- Gericht prüft nicht von Amts wegen
- Leistungsverweigerungsrecht

**Nach Verjährung:**
- Anspruch besteht fort
- Aber: Nicht mehr durchsetzbar
- Naturalobligation

**Folgen:**
- Keine Rückforderung bei Zahlung (§ 214 II)
- Aufrechnung möglich (§ 215)
- Sicherheiten bleiben (§ 216)

**📊 Überblick Verjährungsfristen:**

| Frist | Ansprüche | Norm |
|-------|-----------|------|
| 3 Jahre | Regelfrist | § 195 |
| 10 Jahre | Grundstücksrechte | § 196 |
| 30 Jahre | Titel, Familien-, Erbrecht | § 197 |
| 2/5 Jahre | Kauf (beweglich/Bau) | § 438 |
| 2 Jahre | Werkvertrag | § 634a |`,
          examples: [
            {
              id: 'ex-bgb-8-2-1',
              title: '💰 Beispiel: Verjährungseinrede',
              content: `**Sachverhalt:**
G hat 2018 dem S 1.000 € geliehen.
2024 fordert G Rückzahlung.
S: "Das ist doch verjährt!"

**Lösung:**
- Darlehensrückzahlung: § 488 I 2 BGB
- Regelverjährung: 3 Jahre (§ 195)
- Beginn: Ende 2018 (§ 199 I)
- Ende: 31.12.2021, 24:00 Uhr
- S kann Einrede erheben
- Aber: Nur wenn S sie geltend macht!`,
              explanation: 'Die Verjährung wirkt nicht automatisch.'
            }
          ]
        },
        {
          id: 'section-bgb-8-2-2',
          title: '📅 Verjährungsbeginn und -fristen',
          content: `Der Verjährungsbeginn ist entscheidend für die Berechnung der Verjährung.

**🎯 § 199 - Beginn der Regelverjährung:**

**Voraussetzungen (kumulativ):**
1. **Entstehung** des Anspruchs
2. **Fälligkeit** (§ 271 BGB)
3. **Kenntnis** oder grob fahrlässige Unkenntnis

**Kenntnis wovon?**
- Anspruchsbegründende Umstände
- Person des Schuldners
- Nicht: Rechtliche Bewertung

**Jahresende:**
- Verjährung beginnt mit Schluss des Jahres
- Vereinfachung der Berechnung
- Einheitliche Stichtage

**📊 Sonderfristen (Auswahl):**

**§ 196 - Grundstücksrechte:**
- 10 Jahre
- Herausgabe-, Beseitigungsansprüche
- Keine Kenntnis erforderlich

**§ 197 - Titulierte Ansprüche:**
- 30 Jahre ab Rechtskraft
- Vollstreckbare Urkunden
- Familien- und Erbrecht

**§ 438 - Kaufrecht:**
- 2 Jahre: Bewegliche Sachen
- 5 Jahre: Bauwerke
- 30 Jahre: Dingliche Rechte

**⏰ Höchstfristen (§ 199 III, IV):**

**10 Jahre ohne Kenntnis:**
- Schadensersatz
- Bereicherung
- Ab Entstehung/Begehung

**30 Jahre absolut:**
- Verletzung höchstpersönlicher Güter
- Leben, Körper, Gesundheit, Freiheit`,
          memoryAids: [
            {
              id: 'mem-bgb-8-2-1',
              title: '🧠 Merkhilfe Verjährungsbeginn',
              content: `**E**ntstehung
**F**älligkeit  
**K**enntnis
+ **J**ahresende

= **EFKJ** (Einfach für kluge Juristen)`
            }
          ]
        },
        {
          id: 'section-bgb-8-2-3',
          title: '⏸️ Hemmung und Neubeginn',
          content: `Die Verjährung kann durch verschiedene Umstände beeinflusst werden.

**📋 Hemmung (§§ 203-213):**

**Wirkung:**
- Zeitraum wird nicht mitgezählt
- "Die Uhr bleibt stehen"
- Nach Ende: Weiterlauf

**Wichtigste Hemmungsgründe:**

**§ 203 - Verhandlungen:**
- Über Anspruch oder Umstände
- Schwebende Verhandlungen
- Ende: 3 Monate nach Abbruch

**§ 204 - Rechtsverfolgung:**
- Klageerhebung
- Mahnbescheid
- Streitverkündung
- Dauer des Verfahrens

**§ 205 - Leistungsverweigerungsrechte:**
- Zurückbehaltungsrecht
- Leistungsverweigerung

**§ 206 - Höhere Gewalt:**
- Letzte 6 Monate
- Naturkatastrophen
- Krieg

**🔄 Neubeginn (§ 212):**

**Wirkung:**
- Verjährung beginnt von vorn
- "Reset" der Frist
- Volle Fristdauer

**Gründe:**
- Anerkenntnis (§ 212 I Nr. 1)
- Teilzahlung
- Sicherheitsleistung
- Vollstreckungshandlung

**⚖️ Praktische Bedeutung:**

**Unterbrechung der Verjährung:**
- Rechtzeitige Klage
- Anerkenntnis einholen
- Verhandlungen führen
- Titel erwirken`,
          examples: [
            {
              id: 'ex-bgb-8-2-2',
              title: '⏰ Beispiel: Verjährungshemmung',
              content: `**Sachverhalt:**
Forderung entstand am 15.03.2021.
Schuldner zahlungsunfähig.
Am 15.11.2024 Verhandlungen.
Am 20.12.2024 Abbruch.

**Berechnung:**
- Verjährungsbeginn: 31.12.2021
- Normale Verjährung: 31.12.2024
- Hemmung ab 15.11.2024 (§ 203)
- Hemmungsende: 20.03.2025 (3 Monate)
- Restlaufzeit: 46 Tage
- Neue Verjährung: 05.05.2025`,
              explanation: 'Die Hemmung verlängert die Verjährungsfrist.'
            }
          ],
          selfTest: {
            questions: [
              {
                id: 'q-bgb-8-2-1',
                question: 'Was ist der Unterschied zwischen Verjährung und Verwirkung?',
                correctAnswer: 'Verjährung tritt durch Zeitablauf ein und muss eingewendet werden. Verwirkung setzt Zeit + Umstände voraus (Vertrauenstatbestand).'
              },
              {
                id: 'q-bgb-8-2-2',
                question: 'Wann beginnt die Regelverjährung?',
                correctAnswer: 'Mit Schluss des Jahres, in dem Anspruch entstand, fällig wurde und Gläubiger Kenntnis erlangte (§ 199 I BGB).'
              }
            ]
          }
        }
      ],
      resources: [],
      glossary: [
        {
          term: 'Verjährung',
          definition: 'Verlust der gerichtlichen Durchsetzbarkeit eines Anspruchs durch Zeitablauf'
        },
        {
          term: 'Hemmung',
          definition: 'Zeitraum zählt nicht zur Verjährungsfrist (Uhr bleibt stehen)'
        },
        {
          term: 'Naturalobligation',
          definition: 'Rechtlich bestehende, aber nicht durchsetzbare Verbindlichkeit'
        }
      ]
    },
    requiredMastery: 85,
    estimatedMinutes: 900,
    exercises: []
  },

  // 8.3 Die Personen (15 Stunden)
  {
    id: 'bgb-ke8-3-personen',
    moduleId: 'bgb-at',
    order: 25,
    title: '8.3 Die Personen',
    objectives: [
      {
        id: 'obj-bgb-8-3-1',
        description: 'Natürliche und juristische Personen unterscheiden',
        bloomLevel: 'understand'
      },
      {
        id: 'obj-bgb-8-3-2',
        description: 'Persönlichkeitsrechte und deren Schutz verstehen',
        bloomLevel: 'analyze'
      },
      {
        id: 'obj-bgb-8-3-3',
        description: 'Die Struktur juristischer Personen erfassen',
        bloomLevel: 'apply'
      }
    ],
    content: {
      id: 'content-bgb-8-3',
      type: 'mixed',
      sections: [
        {
          id: 'section-bgb-8-3-1',
          title: '👤 Rechtssubjekte und Rechtsfähigkeit',
          content: `Das BGB unterscheidet zwischen natürlichen und juristischen Personen als Träger von Rechten und Pflichten.

**📋 Der Personenbegriff:**

**Rechtssubjekt:**
- Träger von Rechten und Pflichten
- Zurechnungsendpunkt
- Teilnehmer am Rechtsverkehr

**Arten:**
1. **Natürliche Personen** (Menschen)
2. **Juristische Personen** (Organisationen)

**⚖️ Die Rechtsfähigkeit:**

**§ 1 BGB - Beginn:**
- Mit Vollendung der Geburt
- Vollständige Trennung
- Lebend geboren

**Ende:**
- Mit dem Tod
- Hirntod maßgeblich
- Todesvermutung möglich

**Nasciturus (Leibesfrucht):**
- Noch nicht rechtsfähig
- Aber: Bedingte Rechte (§ 1923 II)
- Schutz durch § 1 II BGB analog

**📊 Abgrenzungen:**

| Begriff | Definition | Alter/Voraussetzung |
|---------|------------|---------------------|
| Rechtsfähigkeit | Rechte haben können | Ab Geburt |
| Geschäftsfähigkeit | Rechtsgeschäfte tätigen | Ab 18 (voll) |
| Deliktsfähigkeit | Haften für Schäden | Ab 7/18 |
| Testierfähigkeit | Testament errichten | Ab 16 |

**🛡️ Schutz der Persönlichkeit:**

**Namensrecht (§ 12 BGB):**
- Recht auf den Namen
- Schutz vor Bestreitung
- Schutz vor unbefugtem Gebrauch

**Allgemeines Persönlichkeitsrecht:**
- Verfassungsrechtlich (Art. 2 I, 1 I GG)
- Generalklausel
- Vielfältige Ausprägungen`,
          examples: [
            {
              id: 'ex-bgb-8-3-1',
              title: '👶 Beispiel: Nasciturus',
              content: `**Sachverhalt:**
Schwangere S wird bei Unfall verletzt.
Kind K wird 3 Monate später geboren.
K hat Behinderung durch Unfall.

**Rechtslage:**
- K war bei Unfall nicht rechtsfähig
- Aber: § 823 I BGB analog
- Schadensersatzanspruch möglich
- Rückwirkende Betrachtung

**Alternativ:**
Großvater stirbt während Schwangerschaft.
- K erbt, wenn lebend geboren (§ 1923 II)
- Erbfähigkeit unter Bedingung`,
              explanation: 'Der Nasciturus wird in wichtigen Fällen geschützt.'
            }
          ]
        },
        {
          id: 'section-bgb-8-3-2',
          title: '🏢 Juristische Personen',
          content: `Juristische Personen sind künstliche Rechtssubjekte, die durch Rechtsordnung geschaffen werden.

**📋 Begriff und Bedeutung:**

**Definition:**
Organisationen mit eigener Rechtspersönlichkeit, getrennt von ihren Mitgliedern.

**Arten juristischer Personen:**

**Privatrecht:**
- Verein (e.V.)
- GmbH, AG
- Stiftung
- Genossenschaft

**Öffentliches Recht:**
- Körperschaften (Gemeinden, Unis)
- Anstalten (Rundfunk)
- Stiftungen öffentlichen Rechts

**🎯 Entstehung:**

**Normativbestimmungen:**
- Erfüllung gesetzlicher Voraussetzungen
- Eintragung (konstitutiv)
- Staatliche Mitwirkung

**Konzessionssystem:**
- Staatliche Verleihung
- Nur noch Ausnahme
- Z.B. rechtsfähige Stiftung

**⚖️ Der Verein (§§ 21 ff. BGB):**

**Idealverein (§ 21 BGB):**
- Nicht wirtschaftlicher Zweck
- Mind. 7 Mitglieder
- Satzung erforderlich
- Eintragung → e.V.

**Wirtschaftlicher Verein (§ 22):**
- Wirtschaftlicher Geschäftsbetrieb
- Staatliche Verleihung nötig
- Praktisch bedeutungslos
- Ausweichen auf GmbH

**Nicht rechtsfähiger Verein (§ 54):**
- Keine Eintragung
- BGB-Gesellschaft mit Sonderregeln
- Teilrechtsfähigkeit
- Haftungsrisiken

**📊 Organe des Vereins:**

| Organ | Funktion | Regelung |
|-------|----------|----------|
| Mitgliederversammlung | Oberstes Organ | § 32 |
| Vorstand | Vertretung | §§ 26, 27 |
| Besondere Vertreter | Zusätzlich | § 30 |`,
          memoryAids: [
            {
              id: 'mem-bgb-8-3-1',
              title: '🧠 Merkhilfe Vereinsarten',
              content: `**I**deal = **I**mmer eintragungsfähig (e.V.)
**W**irtschaftlich = **W**arum nicht GmbH?
**N**icht eingetragen = **N**ur Notlösung`
            }
          ]
        },
        {
          id: 'section-bgb-8-3-3',
          title: '🎭 Persönlichkeitsrechte',
          content: `Der Schutz der Persönlichkeit ist fundamental im deutschen Recht.

**📋 Einzelne Persönlichkeitsrechte:**

**Recht am eigenen Bild:**
- §§ 22, 23 KunstUrhG
- Einwilligung erforderlich
- Ausnahmen bei Zeitgeschichte
- Postmortaler Schutz

**Namensrecht (§ 12 BGB):**
- Namensführung
- Namensschutz
- Unterlassungsanspruch
- Schadensersatz

**Ehre und Ruf:**
- Schutz vor Beleidigung
- Schutz vor unwahren Behauptungen
- Gegendarstellung
- Widerruf

**🛡️ Allgemeines Persönlichkeitsrecht (APR):**

**Grundlagen:**
- Art. 2 I i.V.m. Art. 1 I GG
- Richterrechtliche Entwicklung
- Generalklausel
- Lückenfüller

**Schutzbereiche:**
- Privatsphäre
- Datenschutz
- Selbstbestimmung
- Kommerzialisierung

**Rechtsfolgen bei Verletzung:**
- Unterlassung
- Beseitigung
- Schadensersatz
- Geldentschädigung

**⚖️ Juristische Personen:**

**Eingeschränkter Schutz:**
- Kein Menschenwürdekern
- Aber: Sozialer Geltungsanspruch
- Ruf und Ansehen
- Geschäftsehre

**Keine höchstpersönlichen Rechte:**
- Kein Schmerzensgeld
- Kein postmortaler Schutz
- Nur vermögensrechtliche Aspekte`,
          examples: [
            {
              id: 'ex-bgb-8-3-2',
              title: '📸 Beispiel: Bildnisschutz',
              content: `**Fall 1 - Natürliche Person:**
Promi P wird heimlich fotografiert.
Zeitung Z veröffentlicht Fotos.

**Ansprüche:**
- Unterlassung (§§ 823, 1004 analog)
- Schadensersatz (§ 823 I)
- Geldentschädigung (APR)
- Gewinnabschöpfung

**Fall 2 - Juristische Person:**
GmbH wird in Bericht diffamiert.

**Ansprüche:**
- Unterlassung
- Schadensersatz (Umsatzeinbußen)
- Aber: Kein Schmerzensgeld
- Gegendarstellung möglich`,
              explanation: 'Der Persönlichkeitsschutz unterscheidet sich je nach Rechtssubjekt.'
            }
          ],
          selfTest: {
            questions: [
              {
                id: 'q-bgb-8-3-1',
                question: 'Ab wann ist der Mensch rechtsfähig?',
                correctAnswer: 'Mit Vollendung der Geburt, d.h. vollständiger Trennung vom Mutterleib bei Lebendgeburt (§ 1 BGB).'
              },
              {
                id: 'q-bgb-8-3-2',
                question: 'Können juristische Personen Schmerzensgeld verlangen?',
                correctAnswer: 'Nein, nur natürliche Personen können Schmerzensgeld für immaterielle Schäden verlangen.'
              }
            ]
          }
        }
      ],
      resources: [],
      glossary: [
        {
          term: 'Rechtsfähigkeit',
          definition: 'Fähigkeit, Träger von Rechten und Pflichten zu sein'
        },
        {
          term: 'Juristische Person',
          definition: 'Künstliches Rechtssubjekt mit eigener Rechtspersönlichkeit'
        },
        {
          term: 'Nasciturus',
          definition: 'Das ungeborene, aber bereits gezeugte Kind'
        }
      ]
    },
    requiredMastery: 85,
    estimatedMinutes: 900,
    exercises: []
  },

  // 8.4 Subjektive Rechte und Rechtsobjekte (10 Stunden)
  {
    id: 'bgb-ke8-4-rechte-objekte',
    moduleId: 'bgb-at',
    order: 26,
    title: '8.4 Subjektive Rechte und Rechtsobjekte',
    objectives: [
      {
        id: 'obj-bgb-8-4-1',
        description: 'Subjektive Rechte systematisch einordnen',
        bloomLevel: 'analyze'
      },
      {
        id: 'obj-bgb-8-4-2',
        description: 'Grenzen der Rechtsausübung verstehen',
        bloomLevel: 'understand'
      },
      {
        id: 'obj-bgb-8-4-3',
        description: 'Sachen und Rechte als Rechtsobjekte unterscheiden',
        bloomLevel: 'apply'
      }
    ],
    content: {
      id: 'content-bgb-8-4',
      type: 'mixed',
      sections: [
        {
          id: 'section-bgb-8-4-1',
          title: '⚖️ Subjektive Rechte',
          content: `Subjektive Rechte sind die dem Einzelnen zustehenden Rechtspositionen im Unterschied zum objektiven Recht.

**📋 Begriff und Arten:**

**Subjektives Recht:**
Rechtlich geschützte Willensmacht zur Befriedigung menschlicher Interessen.

**Hauptkategorien:**

**1. Persönlichkeitsrechte:**
- Höchstpersönlich
- Unübertragbar
- Unvererblich
- APR, Namensrecht

**2. Familienrechte:**
- Statusrechte
- Unterhaltsansprüche
- Sorgerecht
- Teils vermögensrechtlich

**3. Herrschaftsrechte:**
- Eigentum
- Beschränkt dingliche Rechte
- Immaterialgüterrechte
- Absolute Wirkung

**4. Ansprüche (§ 194 BGB):**
- Recht, von anderen Tun/Unterlassen zu verlangen
- Relative Rechte
- Klagbar
- Verjährbar

**5. Gestaltungsrechte:**
- Einseitige Rechtsänderung
- Anfechtung, Kündigung
- Rücktritt, Widerruf
- Unverjährbar (meist)

**📊 Absolute vs. Relative Rechte:**

| Merkmal | Absolute Rechte | Relative Rechte |
|---------|-----------------|-----------------|
| Wirkung | Gegen jedermann | Gegen bestimmte Person |
| Beispiel | Eigentum | Kaufpreisanspruch |
| Schutz | § 823 I BGB | Vertragsklage |
| Publizität | Oft erforderlich | Nicht erforderlich |`,
          examples: [
            {
              id: 'ex-bgb-8-4-1',
              title: '🔨 Beispiel: Gestaltungsrechte',
              content: `**Verschiedene Gestaltungsrechte:**

**Anfechtung (§§ 119 ff.):**
- Rückwirkende Vernichtung
- Binnen Jahresfrist
- Empfangsbedürftig

**Kündigung:**
- Ex nunc Beendigung
- Dauerschuldverhältnisse
- Formvorschriften beachten

**Rücktritt (§§ 346 ff.):**
- Rückabwicklung
- Gesetzlich oder vertraglich
- Rücktrittserklärung nötig

**Aufrechnung (§§ 387 ff.):**
- Wechselseitige Tilgung
- Einseitige Erklärung
- Rückwirkung möglich`,
              explanation: 'Gestaltungsrechte ändern die Rechtslage einseitig.'
            }
          ]
        },
        {
          id: 'section-bgb-8-4-2',
          title: '🚫 Grenzen der Rechtsausübung',
          content: `Subjektive Rechte unterliegen immanenten Schranken und dürfen nicht missbraucht werden.

**📋 Schikaneverbot (§ 226 BGB):**

**Voraussetzungen:**
- Rechtsausübung
- Kein berechtigtes Interesse
- Nur Schädigungszweck

**Rechtsfolge:**
- Unzulässige Rechtsausübung
- Unterlassungsanspruch
- Schadensersatz

**Seltenheit:**
- Sehr enge Voraussetzungen
- Praktisch kaum relevant
- § 242 BGB wichtiger

**⚖️ Rechtsmissbrauch (§ 242 BGB):**

**Fallgruppen:**

**Verwirkung:**
- Zeitablauf + Umstandsmoment
- Vertrauenstatbestand
- Schutzwürdigkeit

**Widersprüchliches Verhalten:**
- Venire contra factum proprium
- Früher anders verhalten
- Vertrauen erweckt

**Unzulässige Rechtsausübung:**
- Unverhältnismäßigkeit
- Treuwidrigkeit
- Interessenabwägung

**🛡️ Rechtfertigungsgründe:**

**Notwehr (§ 227 BGB):**
- Gegenwärtiger Angriff
- Erforderliche Verteidigung
- Kein Notwehrexzess

**Notstand (§§ 228, 904 BGB):**
- Gefahr für Rechtsgut
- Interessenabwägung
- Duldungspflicht

**Selbsthilfe (§§ 229-231 BGB):**
- Obrigkeitliche Hilfe nicht rechtzeitig
- Sofortiges Handeln nötig
- Verhältnismäßigkeit`,
          memoryAids: [
            {
              id: 'mem-bgb-8-4-1',
              title: '🧠 Merkhilfe Rechtsmissbrauch',
              content: `**V**erwirkung (Zeit + Umstände)
**W**idersprüchliches Verhalten
**U**nverhältnismäßigkeit

= **VWU** (Vorsicht, widersprüchlich, unverhältnismäßig!)`
            }
          ]
        },
        {
          id: 'section-bgb-8-4-3',
          title: '📦 Rechtsobjekte',
          content: `Rechtsobjekte sind die Gegenstände, auf die sich subjektive Rechte beziehen können.

**📋 Sachen (§ 90 BGB):**

**Definition:**
Körperliche Gegenstände.

**Arten von Sachen:**

**Beweglich/Unbeweglich:**
- Grundstücke (§§ 94-96)
- Fahrnisse
- Verschiedene Übereignung

**Vertretbar/Unvertretbar (§ 91):**
- Gattungssachen
- Stücksachen
- Bedeutung für Erfüllung

**Verbrauchbar/Unverbrauchbar (§ 92):**
- Bestimmungsgemäßer Verbrauch
- Bedeutung für Leihe/Darlehen

**🏗️ Sachverbindungen:**

**Wesentliche Bestandteile (§ 93):**
- Nicht ohne Zerstörung trennbar
- Sonderrechtsfähigkeit ausgeschlossen
- Schicksal der Hauptsache

**Grundstücksbestandteile (§§ 94, 95):**
- Fest verbundene Sachen
- Gebäude
- Scheinbestandteile (§ 95)

**Zubehör (§ 97):**
- Wirtschaftlicher Zweck
- Räumliches Verhältnis
- Nicht nur vorübergehend

**💎 Rechte als Rechtsobjekte:**

**Übertragbare Rechte:**
- Forderungen
- Dingliche Rechte
- Immaterialgüterrechte

**Früchte (§ 99):**
- Sachfrüchte
- Rechtsfrüchte (Miete, Zinsen)
- Gebrauchsvorteile

**Vermögen:**
- Gesamtheit der Rechte
- Keine Rechtssubjektivität
- Kein Verfügungsobjekt`,
          examples: [
            {
              id: 'ex-bgb-8-4-2',
              title: '🏠 Beispiel: Bestandteile',
              content: `**Wesentliche Bestandteile:**
- Einbauküche → Teil des Hauses
- Motor → Teil des Autos
- Keine Sonderrechte möglich

**Scheinbestandteile (§ 95):**
- Zu vorübergehendem Zweck
- Mietereinbauten
- Messestand auf Grundstück

**Zubehör:**
- Scheune zum Bauernhof
- Hoteleinrichtung
- Mit Hauptsache veräußert (§ 926)

**Keine Bestandteile/Zubehör:**
- Persönliche Gegenstände
- Nicht dem Zweck dienend
- Nur vorübergehend`,
              explanation: 'Die Einordnung hat wichtige Rechtsfolgen.'
            }
          ],
          selfTest: {
            questions: [
              {
                id: 'q-bgb-8-4-1',
                question: 'Was ist der Unterschied zwischen § 226 und § 242 BGB?',
                correctAnswer: '§ 226 verlangt ausschließliche Schädigungsabsicht (sehr eng), § 242 erfasst jede treuwidrige Rechtsausübung (weiter).'
              },
              {
                id: 'q-bgb-8-4-2',
                question: 'Können Tiere Sachen sein?',
                correctAnswer: 'Tiere sind keine Sachen (§ 90a), werden aber rechtlich wie Sachen behandelt, soweit nichts anderes bestimmt ist.'
              }
            ]
          }
        }
      ],
      resources: [],
      glossary: [
        {
          term: 'Subjektives Recht',
          definition: 'Dem Einzelnen zustehende Rechtsmacht zur Interessenverfolgung'
        },
        {
          term: 'Gestaltungsrecht',
          definition: 'Recht zur einseitigen Änderung der Rechtslage'
        },
        {
          term: 'Verwirkung',
          definition: 'Verlust eines Rechts durch Zeitablauf und Umstände'
        }
      ]
    },
    requiredMastery: 85,
    estimatedMinutes: 600,
    exercises: []
  }
];

// Exercises for all units in Kurseinheit 8
const exercisesKE8: Exercise[] = [
  // Exercises for 8.1 Fristen
  {
    id: 'ex-bgb-ke8-1-1',
    type: 'multipleChoice',
    difficulty: 'intermediate',
    points: 15,
    content: {
      question: 'V setzt K am Montag, 03.04., 15:00 Uhr eine Frist von 10 Tagen. Wann endet die Frist?',
      options: [
        'Mittwoch, 12.04., 15:00 Uhr',
        'Donnerstag, 13.04., 24:00 Uhr',
        'Donnerstag, 13.04., 15:00 Uhr',
        'Freitag, 14.04., 24:00 Uhr'
      ]
    },
    hints: [
      {
        id: 'hint-1',
        text: 'Denken Sie an § 187 I und § 188 I BGB.',
        penaltyPoints: 0
      }
    ],
    solution: {
      correct: 'Donnerstag, 13.04., 24:00 Uhr',
      explanation: 'Der 03.04. wird nicht mitgerechnet (§ 187 I). Die Frist beginnt am 04.04. und endet nach 10 Tagen am 13.04., 24:00 Uhr (§ 188 I).'
    }
  },
  {
    id: 'ex-bgb-ke8-1-2',
    type: 'caseAnalysis',
    difficulty: 'advanced',
    points: 25,
    content: {
      question: 'Berechnen Sie die Fristen:',
      scenario: `1. Mietvertrag beginnt "ab dem 01. Juli" - wann ist erste Miete fällig?
2. Kündigung mit 3-Monatsfrist zum Monatsende am 15. März erklärt - wann endet das Arbeitsverhältnis?
3. Kind geboren am 31.12.2006, 23:55 Uhr - wann wird es volljährig?`,
      tasks: [
        'Berechnen Sie jede Frist genau',
        'Nennen Sie die anwendbaren Normen',
        'Begründen Sie Ihre Berechnung'
      ]
    },
    solution: {
      correct: {
        structure: `1. Mietbeginn 01. Juli:
   - § 187 II S. 1: Tag wird mitgerechnet
   - Miete für Juli fällig
   - Fälligkeit: 01.07.

2. Kündigung zum Monatsende:
   - Zugang am 15.03.
   - 3 Monate ab Zugang
   - Ende: 30.06., 24:00 Uhr

3. Volljährigkeit:
   - § 187 II S. 2: Geburtstag zählt mit
   - Geboren "am" 31.12.2006
   - 18. Geburtstag: 31.12.2024
   - Volljährig ab 31.12.2024, 00:00 Uhr`,
        keyPoints: [
          'Unterschied Ereignis-/Beginnfrist',
          'Lebensalter-Sonderregel',
          'Monatsende-Berechnung'
        ]
      },
      explanation: 'Die Fristberechnung folgt klaren Regeln, hat aber wichtige Sonderfälle.'
    }
  },

  // Exercises for 8.2 Verjährung
  {
    id: 'ex-bgb-ke8-2-1',
    type: 'dragDrop',
    difficulty: 'intermediate',
    points: 20,
    content: {
      question: 'Ordnen Sie die Verjährungsfristen zu:',
      items: [
        'Kaufpreisforderung',
        'Rechtskräftiges Urteil',
        'Mängelansprüche Bauwerk',
        'Arbeitslohn',
        'Grundstücksherausgabe'
      ],
      targets: [
        '3 Jahre (§ 195)',
        '30 Jahre (§ 197)',
        '5 Jahre (§ 438)',
        '3 Jahre (§ 195)',
        '10 Jahre (§ 196)'
      ]
    },
    solution: {
      correct: {
        'Kaufpreisforderung': '3 Jahre (§ 195)',
        'Rechtskräftiges Urteil': '30 Jahre (§ 197)',
        'Mängelansprüche Bauwerk': '5 Jahre (§ 438)',
        'Arbeitslohn': '3 Jahre (§ 195)',
        'Grundstücksherausgabe': '10 Jahre (§ 196)'
      },
      explanation: 'Die Verjährungsfristen sind je nach Art des Anspruchs unterschiedlich.'
    }
  },
  {
    id: 'ex-bgb-ke8-2-2',
    type: 'fillInBlanks',
    difficulty: 'intermediate',
    points: 15,
    content: {
      question: 'Ergänzen Sie die Verjährungsberechnung:',
      context: 'Die Regelverjährung beginnt mit Schluss des Jahres, in dem der Anspruch _____ ist, _____ wurde und der Gläubiger _____ erlangt hat. Die Verjährung kann durch _____ gehemmt werden.',
      blanks: 4
    },
    solution: {
      correct: ['entstanden', 'fällig', 'Kenntnis', 'Verhandlungen'],
      explanation: '§ 199 I BGB nennt die drei Voraussetzungen für den Verjährungsbeginn. § 203 regelt die Hemmung.'
    }
  },

  // Exercises for 8.3 Personen
  {
    id: 'ex-bgb-ke8-3-1',
    type: 'trueFalse',
    difficulty: 'beginner',
    points: 10,
    content: {
      question: 'Ein 6 Monate alter Säugling kann Eigentümer sein.'
    },
    solution: {
      correct: true,
      explanation: 'Rechtsfähigkeit beginnt mit Geburt (§ 1 BGB). Auch Säuglinge können Rechte haben, sie üben sie nur nicht selbst aus.'
    }
  },
  {
    id: 'ex-bgb-ke8-3-2',
    type: 'multipleChoice',
    difficulty: 'advanced',
    points: 20,
    content: {
      question: 'Welche Aussage über juristische Personen ist FALSCH?',
      options: [
        'Sie können Eigentum erwerben',
        'Sie können Schmerzensgeld verlangen',
        'Sie können klagen und verklagt werden',
        'Sie haben Grundrechtsschutz'
      ]
    },
    hints: [
      {
        id: 'hint-1',
        text: 'Denken Sie an höchstpersönliche Rechte.',
        penaltyPoints: 0
      }
    ],
    solution: {
      correct: 'Sie können Schmerzensgeld verlangen',
      explanation: 'Juristische Personen haben kein Schmerzempfinden und können daher kein Schmerzensgeld verlangen. Nur Vermögensschäden sind ersatzfähig.'
    }
  },

  // Exercises for 8.4 Rechte und Objekte
  {
    id: 'ex-bgb-ke8-4-1',
    type: 'conceptMap',
    difficulty: 'advanced',
    points: 25,
    content: {
      question: 'Erstellen Sie eine Übersicht der subjektiven Rechte',
      centralConcept: 'Subjektive Rechte',
      requiredConcepts: [
        'Absolute Rechte',
        'Relative Rechte',
        'Gestaltungsrechte',
        'Ansprüche',
        'Eigentum'
      ],
      minConnections: 7
    },
    solution: {
      correct: {
        connections: [
          'Subjektive Rechte → Absolute Rechte → Eigentum',
          'Subjektive Rechte → Relative Rechte → Ansprüche',
          'Subjektive Rechte → Gestaltungsrechte → Anfechtung',
          'Absolute Rechte → Wirkung gegen jedermann',
          'Relative Rechte → Wirkung gegen Schuldner',
          'Ansprüche → § 194 BGB Definition',
          'Gestaltungsrechte → Einseitige Rechtsänderung'
        ]
      },
      explanation: 'Die Systematik der subjektiven Rechte ist grundlegend für das Verständnis des BGB.'
    }
  },
  {
    id: 'ex-bgb-ke8-4-2',
    type: 'essay',
    difficulty: 'intermediate',
    points: 20,
    content: {
      question: 'Erläutern Sie den Unterschied zwischen wesentlichen Bestandteilen und Zubehör.',
      minWords: 150,
      maxWords: 300,
      keywords: ['§ 93 BGB', '§ 97 BGB', 'Sonderrechte', 'Trennbarkeit']
    },
    solution: {
      correct: 'comparison',
      explanation: 'Wesentliche Bestandteile vs. Zubehör',
      sampleAnswer: `Wesentliche Bestandteile (§ 93 BGB) sind Sachen, die nicht ohne Zerstörung oder Wesensveränderung getrennt werden können. Sie verlieren ihre rechtliche Selbständigkeit und können nicht Gegenstand besonderer Rechte sein. Beispiele sind die Einbauküche im Haus oder der Motor im Auto.

Zubehör (§ 97 BGB) sind bewegliche Sachen, die dem wirtschaftlichen Zweck der Hauptsache zu dienen bestimmt sind und in einem entsprechenden räumlichen Verhältnis stehen. Sie bleiben rechtlich selbständig und können Gegenstand besonderer Rechte sein. Beispiele sind landwirtschaftliche Geräte zum Hof oder die Hoteleinrichtung.

Der Hauptunterschied liegt in der rechtlichen Selbständigkeit: Bestandteile verschmelzen rechtlich mit der Hauptsache, während Zubehör selbständig bleibt. Dies hat Bedeutung für Verfügungen - Bestandteile werden automatisch mitveräußert, Zubehör nur im Zweifel (§ 926 BGB).`,
      keyPoints: [
        'Trennbarkeit als Kriterium',
        'Rechtliche Selbständigkeit',
        'Sonderrechtsfähigkeit',
        'Rechtsfolgen bei Verfügung'
      ]
    }
  }
];

// Add exercises to units
kurseinheit8BGBUnits[0].exercises = exercisesKE8.slice(0, 2);
kurseinheit8BGBUnits[1].exercises = exercisesKE8.slice(2, 4);  
kurseinheit8BGBUnits[2].exercises = exercisesKE8.slice(4, 6);
kurseinheit8BGBUnits[3].exercises = exercisesKE8.slice(6, 8);