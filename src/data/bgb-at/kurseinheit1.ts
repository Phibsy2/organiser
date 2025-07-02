import { LearningUnit, Exercise } from '../../types/learning';

// KURSEINHEIT 1: Einleitung und Methodologie (55101-01)
// Basierend auf FernUni Hagen PDF 55101-01-S#1-2001621.pdf
// Autoren: Prof. Dr. Sebastian Kubis, Prof. Dr. Ulrich Eisenhardt

export const kurseinheit1BGBUnits: LearningUnit[] = [
  // 1.1 Einleitung in das bürgerliche Recht (25 Stunden)
  {
    id: 'bgb-ke1-1-einleitung',
    moduleId: 'bgb-at',
    order: 1,
    title: '1.1 Einleitung in das bürgerliche Recht',
    objectives: [
      {
        id: 'obj-bgb-1-1-1',
        description: 'Den Begriff des bürgerlichen Rechts verstehen und abgrenzen können',
        bloomLevel: 'understand'
      },
      {
        id: 'obj-bgb-1-1-2',
        description: 'Die fünf Bücher des BGB und ihre Systematik erläutern können',
        bloomLevel: 'analyze'
      },
      {
        id: 'obj-bgb-1-1-3',
        description: 'Die historische Entstehung des BGB und ihre Bedeutung einordnen',
        bloomLevel: 'evaluate'
      },
      {
        id: 'obj-bgb-1-1-4',
        description: 'Den Grundsatz der Privatautonomie und seine Grenzen verstehen',
        bloomLevel: 'understand'
      }
    ],
    content: {
      id: 'content-bgb-1-1',
      type: 'mixed',
      sections: [
        {
          id: 'section-bgb-1-1-1',
          title: '📖 Der Begriff des bürgerlichen Rechts',
          content: `Das bürgerliche Recht regelt die Rechtsbeziehungen zwischen gleichgeordneten Rechtssubjekten.

**🎯 Definition Bürgerliches Recht:**
Das bürgerliche Recht (Zivilrecht) ist das Recht der Privatpersonen und regelt deren Rechtsverhältnisse untereinander auf der Grundlage der Gleichordnung.

**🔑 Kernmerkmale:**
1. **Gleichordnung** der Beteiligten (keine Über-/Unterordnung wie im öffentlichen Recht)
2. **Privatautonomie** als Grundprinzip
3. **Regelung privater Lebensverhältnisse**
4. **Dispositive Rechtsnormen** (grundsätzlich abdingbar)

**⚖️ Abgrenzung zu anderen Rechtsgebieten:**

| Rechtsgebiet | Charakteristikum | Beispiel |
|--------------|------------------|----------|
| **Bürgerliches Recht** | Gleichordnung | Kaufvertrag zwischen Privaten |
| **Öffentliches Recht** | Über-/Unterordnung | Steuerbescheid |
| **Strafrecht** | Staatlicher Strafanspruch | Diebstahl |

**💡 Merksatz:** "Bürgerliches Recht = Privatrecht zwischen Gleichgeordneten"`,
          examples: [
            {
              id: 'ex-bgb-1-1-1',
              title: '🏪 Beispiel: Brötchenkauf',
              content: `**Sachverhalt:** Student S kauft beim Bäcker B zwei Brötchen für 1,20 €.

**Rechtliche Einordnung:**
- **Beteiligte:** S und B (beide Privatpersonen)
- **Verhältnis:** Gleichordnung (keiner hat Hoheitsgewalt)
- **Rechtsgebiet:** Bürgerliches Recht
- **Rechtsgrundlage:** § 433 BGB (Kaufvertrag)

**Abgrenzung:** Würde die Stadt C eine Parkgebühr erheben, läge öffentliches Recht vor (Über-/Unterordnung).`,
              explanation: 'Klassisches Beispiel für privatrechtliche Gleichordnung im Alltag.'
            }
          ]
        },
        {
          id: 'section-bgb-1-1-2',
          title: '📚 Die fünf Bücher des BGB - Systematischer Überblick',
          content: `Das BGB gliedert sich in fünf systematisch aufgebaute Bücher.

**🏛️ Systematik des BGB:**

**1. Buch: Allgemeiner Teil (§§ 1-240)**
- Rechtssubjekte (Personen)
- Rechtsgeschäfte und Willenserklärungen
- Vollmacht und Stellvertretung
- Fristen und Verjährung

**2. Buch: Schuldrecht (§§ 241-853)**
- Allgemeines Schuldrecht (§§ 241-432)
- Besondere Schuldverhältnisse (§§ 433-853)
- Vertragstypen (Kauf, Miete, Dienst-, Werkvertrag etc.)

**3. Buch: Sachenrecht (§§ 854-1296)**
- Besitz und Eigentum
- Grundstücksrecht
- Pfandrechte und Hypotheken

**4. Buch: Familienrecht (§§ 1297-1921)**
- Eheschließung und -scheidung
- Verwandtschaft und Unterhalt
- Vormundschaft und Betreuung

**5. Buch: Erbrecht (§§ 1922-2385)**
- Gesetzliche und gewillkürte Erbfolge
- Testament und Erbvertrag
- Pflichtteil und Erbschein

**🔗 Verhältnis der Bücher zueinander:**
- **Allgemeiner Teil:** Gilt für alle anderen Bücher
- **Speziellere Regelungen:** Gehen allgemeinen vor (lex specialis)
- **Systematische Ergänzung:** Die Bücher ergänzen sich gegenseitig`,
          memoryAids: [
            {
              id: 'mem-bgb-1-1-1',
              title: '🧠 Merkhilfe: Die 5 Bücher des BGB',
              content: `**A**llgemeiner Teil
**S**chuldrecht  
**S**achenrecht
**F**amilienrecht
**E**rbrecht

= **ASSFE** (A-S-S-F-E)`
            }
          ]
        },
        {
          id: 'section-bgb-1-1-3',
          title: '⏳ Entstehung des BGB - Historischer Kontext',
          content: `Das BGB entstand in einem langwierigen Gesetzgebungsverfahren Ende des 19. Jahrhunderts.

**📅 Historischer Überblick:**

**Vor 1900: Rechtszersplitterung**
- Vielzahl verschiedener Privatrechtsordnungen
- Römisches Recht, Partikularrechte
- Handelsbedürfnis nach Rechtseinheit

**1874-1888: Erste Kommission**
- Entstehung des ersten Entwurfs
- Starke romanistische Prägung
- Kritik wegen Bürgerferne

**1890-1896: Zweite Kommission**
- Überarbeitung unter Berücksichtigung der Kritik
- Stärkere Berücksichtigung deutschen Rechts
- Anpassung an gesellschaftliche Bedürfnisse

**1. Januar 1900: Inkrafttreten**
- Gleichzeitig mit dem BGB trat das EG BGB in Kraft
- Ablösung der bisherigen Partikularrechte
- Schaffung einer einheitlichen Privatrechtsordnung

**🎯 Bedeutung der Kodifikation:**
1. **Rechtseinheit** im deutschen Reich
2. **Rechtssicherheit** durch Verschriftlichung
3. **Systematische Ordnung** des Privatrechts
4. **Anpassungsfähigkeit** an gesellschaftlichen Wandel

**💬 Zitat von Windscheid:**
"Das BGB ist nicht das beste denkbare, aber das beste zur Zeit mögliche Gesetzbuch."`,
          selfTest: {
            questions: [
              {
                id: 'q-bgb-1-1-1',
                question: 'Wann trat das BGB in Kraft und was war der Hauptgrund für seine Entstehung?',
                correctAnswer: 'Das BGB trat am 1. Januar 1900 in Kraft. Hauptgrund war die Rechtszersplitterung im deutschen Reich und das Bedürfnis nach einer einheitlichen Privatrechtsordnung.'
              }
            ]
          }
        },
        {
          id: 'section-bgb-1-1-4',
          title: '🔓 Der Grundsatz der Privatautonomie',
          content: `Die Privatautonomie ist das zentrale Prinzip des bürgerlichen Rechts.

**🎯 Definition Privatautonomie:**
Privatautonomie ist die rechtlich gewährleistete Befugnis des Einzelnen, seine Rechtsverhältnisse durch eigenen Willen zu gestalten.

**📊 Erscheinungsformen der Privatautonomie:**

**1. Abschlussfreiheit:**
- Entscheidung OB ein Vertrag geschlossen wird
- Auswahl des Vertragspartners
- Keine Kontrahierungspflicht (außer gesetzliche Ausnahmen)

**2. Gestaltungsfreiheit (Inhaltsfreiheit):**
- Bestimmung WIE der Vertrag gestaltet wird
- Wahl des Vertragstypus
- Vereinbarung von Nebenabreden

**3. Formfreiheit:**
- Grundsätzlich keine Formvorschriften
- Mündliche Verträge sind wirksam
- Ausnahmen bei gesetzlichem Formzwang

**4. Beendigungsfreiheit:**
- Aufhebung durch einvernehmliche Vereinbarung
- Kündigung nach vertraglichen/gesetzlichen Regeln

**⚠️ Grenzen der Privatautonomie:**

**Gesetzliche Grenzen:**
- § 134 BGB: Verstoß gegen gesetzliches Verbot
- § 138 BGB: Sittenwidrigkeit
- Schutzgesetze (Verbraucherschutz, AGB-Recht)

**Faktische Grenzen:**
- Marktmacht und wirtschaftliche Abhängigkeit
- Standardisierung (AGB, Formularverträge)
- Informationsasymmetrien

**🎯 Bedeutung heute:**
Die Privatautonomie bleibt Grundprinzip, wird aber zunehmend durch Schutzvorschriften modifiziert, um strukturelle Ungleichgewichte auszugleichen.`,
          examples: [
            {
              id: 'ex-bgb-1-1-2',
              title: '⚖️ Beispiel: Grenzen der Privatautonomie',
              content: `**Fall:** Vermieter V will in Mietvertrag folgende Klausel aufnehmen: "Mieter haftet für alle Schäden, auch bei fehlendem Verschulden."

**Rechtliche Bewertung:**
- **Grundsatz:** Privatautonomie erlaubt freie Vertragsgestaltung
- **Grenze:** § 309 Nr. 7 BGB verbietet Haftungsausschluss für Vorsatz/grobe Fahrlässigkeit
- **AGB-Kontrolle:** Unangemessene Benachteiligung nach § 307 BGB
- **Ergebnis:** Klausel unwirksam, gesetzliche Haftungsregeln greifen

**Lehre:** Privatautonomie findet ihre Grenzen im Schutz der schwächeren Vertragspartei.`,
              explanation: 'Zeigt das Spannungsfeld zwischen Vertragsfreiheit und Verbraucherschutz.'
            }
          ]
        }
      ],
      resources: [
        {
          id: 'res-bgb-1-1-1',
          title: 'Historische Materialien zum BGB',
          type: 'website',
          url: 'https://www.bgb-portal.de/geschichte',
          description: 'Umfassende Sammlung zur Entstehungsgeschichte des BGB'
        }
      ],
      glossary: [
        {
          term: 'Privatautonomie',
          definition: 'Rechtlich gewährleistete Befugnis, Rechtsverhältnisse durch eigenen Willen zu gestalten'
        },
        {
          term: 'Bürgerliches Recht',
          definition: 'Recht der Privatpersonen; regelt Rechtsverhältnisse zwischen Gleichgeordneten'
        },
        {
          term: 'Kodifikation',
          definition: 'Systematische, vollständige Zusammenfassung eines Rechtsgebiets in einem Gesetzbuch'
        }
      ]
    },
    estimatedMinutes: 900, // 15 Stunden
    requiredMastery: 80,
    exercises: [] // Werden am Ende hinzugefügt
  },

  // 1.2 Juristische Methodologie und Gutachtenstil (20 Stunden)
  {
    id: 'bgb-ke1-2-methodologie',
    moduleId: 'bgb-at',
    order: 2,
    title: '1.2 Juristische Methodologie und Gutachtenstil',
    objectives: [
      {
        id: 'obj-bgb-1-2-1',
        description: 'Die juristische Methodologie verstehen und anwenden können',
        bloomLevel: 'apply'
      },
      {
        id: 'obj-bgb-1-2-2',
        description: 'Den Gutachtenstil sicher beherrschen',
        bloomLevel: 'apply'
      },
      {
        id: 'obj-bgb-1-2-3',
        description: 'Rechtsnormen richtig interpretieren und auf Sachverhalte anwenden',
        bloomLevel: 'analyze'
      },
      {
        id: 'obj-bgb-1-2-4',
        description: 'Zwischen Gutachten- und Urteilsstil unterscheiden können',
        bloomLevel: 'analyze'
      }
    ],
    content: {
      id: 'content-bgb-1-2',
      type: 'mixed',
      sections: [
        {
          id: 'section-bgb-1-2-1',
          title: '🎯 Der Gutachtenstil - Grundlagen',
          content: `Der Gutachtenstil ist die juristische Methode zur strukturierten Lösung von Rechtsfällen.

**🏗️ Aufbau des Gutachtenstils:**

**1. Obersatz (Hypothese):**
- Formulierung einer rechtlichen Behauptung
- Meist als Frage: "A könnte gegen B einen Anspruch auf ... aus § ... haben"
- Enthält alle wesentlichen Elemente der zu prüfenden Norm

**2. Definition:**
- Abstrakte Darstellung der Tatbestandsmerkmale
- Verwendung anerkannter Rechtsbegriffe
- Oft aus Gesetz, Rechtsprechung oder Literatur

**3. Subsumtion:**
- Unterordnung des konkreten Sachverhalts unter die abstrakte Definition
- Vergleich der Lebenswirklichkeit mit den Rechtsbegriffen
- Berücksichtigung von Auslegungsproblemen

**4. Ergebnis:**
- Logische Schlussfolgerung aus der Subsumtion
- Beantwortung der im Obersatz gestellten Frage
- Sollte eindeutig sein (ja/nein, gegeben/nicht gegeben)

**📝 Sprachliche Kennzeichen:**

| Prüfungsschritt | Typische Formulierungen |
|-----------------|------------------------|
| **Obersatz** | "A könnte gegen B...", "Es fragt sich, ob..." |
| **Definition** | "Hierzu ist erforderlich...", "...setzt voraus..." |
| **Subsumtion** | "Hier...", "Im vorliegenden Fall...", "Vorliegend..." |
| **Ergebnis** | "Folglich...", "Somit...", "Daher..." |

**🎯 Zweck des Gutachtenstils:**
- Strukturierte und nachvollziehbare Argumentation
- Vollständige Erfassung aller rechtlichen Probleme
- Methodische Sicherheit bei der Falllösung`,
          examples: [
            {
              id: 'ex-bgb-1-2-1',
              title: '📋 Musterbeispiel: Gutachtenstil',
              content: `**Sachverhalt:** K kauft bei V ein Fahrrad für 500 €. V übergibt das Rad, K zahlt den Kaufpreis.

**Gutachten:**

**I. Anspruch des K gegen V auf Übereignung des Fahrrads aus § 433 I 1 BGB**

K könnte gegen V einen Anspruch auf Übereignung des Fahrrads aus § 433 I 1 BGB haben.

**1. Kaufvertrag**
Dies setzt einen wirksamen Kaufvertrag voraus. Ein Kaufvertrag ist ein schuldrechtlicher Vertrag, durch den sich der Verkäufer verpflichtet, dem Käufer eine Sache zu übereignen und zu übergeben, und der Käufer sich verpflichtet, den vereinbarten Kaufpreis zu zahlen.

Hier haben sich K und V über Kaufgegenstand (Fahrrad) und Kaufpreis (500 €) geeinigt. Ein Kaufvertrag liegt vor.

**2. Keine Einwendungen ersichtlich**

**Ergebnis:** K hat gegen V einen Anspruch auf Übereignung aus § 433 I 1 BGB.`,
              explanation: 'Zeigt den klassischen vierstufigen Aufbau des Gutachtenstils.'
            }
          ]
        },
        {
          id: 'section-bgb-1-2-2',
          title: '⚖️ Gutachtenstil vs. Urteilsstil',
          content: `Gutachten- und Urteilsstil sind zwei verschiedene juristische Darstellungsformen.

**📊 Vergleich der Darstellungsformen:**

| Aspekt | Gutachtenstil | Urteilsstil |
|--------|---------------|-------------|
| **Aufbau** | Hypothese → Prüfung → Ergebnis | Ergebnis → Begründung |
| **Sprachform** | "A könnte..." | "A hat..." |
| **Verwendung** | Problematische Punkte | Unproblematische Punkte |
| **Zielsetzung** | Vollständige Analyse | Knappe Darstellung |

**🎯 Wann verwende ich welchen Stil?**

**Gutachtenstil bei:**
- Streitigen oder problematischen Rechtsfragen
- Unklaren Sachverhaltsangaben
- Komplizierten Rechtsanwendungen
- Hauptproblemen der Klausur

**Urteilsstil bei:**
- Offensichtlichen, unproblematischen Punkten
- Nebensächlichen Prüfungspunkten
- Wiederholung bereits geklärter Rechtsfragen
- Zeitknappheit in der Klausur

**💡 Praktischer Tipp:**
In Klausuren sollten die Hauptprobleme im Gutachtenstil, unproblematische Punkte im Urteilsstil abgehandelt werden.

**🔄 Mischformen:**
Oft wird eine Mischung beider Stile verwendet:
- Gutachtenstil für das Hauptproblem
- Urteilsstil für unstreitige Voraussetzungen`,
          examples: [
            {
              id: 'ex-bgb-1-2-2',
              title: '🔄 Vergleich: Gutachten- vs. Urteilsstil',
              content: `**Derselbe Sachverhalt in beiden Stilen:**

**Gutachtenstil:**
A könnte gegen B einen Anspruch auf Zahlung von 1000 € aus § 433 II BGB haben. Dies setzt einen wirksamen Kaufvertrag voraus. Ein Kaufvertrag kommt durch Angebot und Annahme zustande. Hier bot A dem B das Auto für 1000 € an. B nahm durch Handschlag an. Ein Kaufvertrag liegt vor. Somit hat A einen Anspruch aus § 433 II BGB.

**Urteilsstil:**
A hat gegen B einen Anspruch auf Zahlung von 1000 € aus § 433 II BGB, da zwischen den Parteien ein wirksamer Kaufvertrag über das Auto geschlossen wurde.`,
              explanation: 'Derselbe Inhalt, unterschiedliche Darstellungsform je nach Problematik.'
            }
          ]
        },
        {
          id: 'section-bgb-1-2-3',
          title: '📖 Umgang mit Gesetzen - Auslegungsmethoden',
          content: `Die richtige Interpretation von Rechtsnormen ist fundamental für die Rechtsanwendung.

**🔍 Die vier klassischen Auslegungsmethoden:**

**1. Grammatische Auslegung (Wortlaut):**
- Ausgangspunkt jeder Auslegung
- Ermittlung des möglichen Wortsinns
- Grenzen des Wortlauts sind nicht überschreitbar
- Verwendung von Wörterbüchern, Sprachgebrauch

**2. Systematische Auslegung:**
- Stellung der Norm im Gesetz
- Zusammenhang mit anderen Vorschriften
- Verhältnis zu Ober- und Unterbegriffen
- Einordnung in die Gesetzessystematik

**3. Historische Auslegung:**
- Entstehungsgeschichte der Norm
- Gesetzgebungsverfahren und Materialien
- Wandel der Regelungsabsicht
- Vergleich mit Vorgängerregelungen

**4. Teleologische Auslegung (Zweck):**
- Sinn und Zweck der Norm
- Interessenabwägung
- Berücksichtigung der Rechtsfolgen
- Anpassung an veränderte Umstände

**⚖️ Rangfolge der Auslegungsmethoden:**
1. **Wortlaut** als äußere Grenze
2. **Systematik** zur Einordnung
3. **Historie** zur Entstehung
4. **Teleologie** zur Zweckbestimmung

**🎯 Praktisches Vorgehen:**
- Beginne immer mit dem Wortlaut
- Prüfe die Systematik
- Bei Unklarheiten: Historie und Zweck
- Gesamtbetrachtung aller Aspekte`,
          memoryAids: [
            {
              id: 'mem-bgb-1-2-1',
              title: '🧠 Merkhilfe: Auslegungsmethoden',
              content: `**G**rammatisch (Wortlaut)
**S**ystematisch (Zusammenhang)
**H**istorisch (Entstehung)
**T**eleologisch (Zweck)

= **GSHT** (Gesetz Sollte Hier Teleologisch verstanden werden)`
            }
          ]
        },
        {
          id: 'section-bgb-1-2-4',
          title: '🏛️ Anspruchsaufbau und Klausurtechnik',
          content: `Der systematische Anspruchsaufbau ist das Grundgerüst jeder Zivilrechtsklausur.

**🏗️ Grundschema des Anspruchsaufbaus:**

**I. Anspruchsgrundlage identifizieren**
- Wer will was von wem?
- Welche Rechtsgrundlage kommt in Betracht?
- Vertragliche oder gesetzliche Ansprüche?

**II. Anspruchsentstehung prüfen**
- Sind alle Tatbestandsvoraussetzungen erfüllt?
- Systematische Prüfung aller Merkmale
- Gutachtenstil bei problematischen Punkten

**III. Anspruchsdurchsetzbarkeit**
- Einwendungen (rechtshindernde Einwände)
- Einreden (rechtshemmende Einwände)
- Besondere Durchsetzungsvoraussetzungen

**🎯 Systematische Prüfungsreihenfolge:**

**1. Vertragliche Ansprüche**
- Primäransprüche (Erfüllung)
- Sekundäransprüche (Schadensersatz, Rücktritt)

**2. Gesetzliche Ansprüche**
- Bereicherungsrecht (§§ 812 ff. BGB)
- Deliktsrecht (§§ 823 ff. BGB)
- Geschäftsführung ohne Auftrag (§§ 677 ff. BGB)

**3. Ansprüche aus Eigentum und Besitz**
- Herausgabeansprüche (§§ 985, 1007 BGB)
- Besitzschutzansprüche (§§ 861, 862 BGB)

**📝 Klausurtechnik - Praktische Tipps:**

**Zeitmanagement:**
- 10% Sachverhaltsanalyse
- 75% Lösung im Gutachtenstil  
- 15% Überprüfung und Korrektur

**Strukturierung:**
- Klare Gliederung mit römischen Zahlen
- Zwischenüberschriften verwenden
- Absätze für bessere Lesbarkeit

**Sprache:**
- Präzise juristische Terminologie
- Kurze, klare Sätze
- Vermeidung umgangssprachlicher Ausdrücke`,
          selfTest: {
            questions: [
              {
                id: 'q-bgb-1-2-1',
                question: 'Nennen Sie die vier Schritte des Gutachtenstils in der richtigen Reihenfolge.',
                correctAnswer: '1. Obersatz (Hypothese), 2. Definition, 3. Subsumtion, 4. Ergebnis'
              },
              {
                id: 'q-bgb-1-2-2',
                question: 'Wann verwenden Sie den Gutachtenstil und wann den Urteilsstil?',
                correctAnswer: 'Gutachtenstil bei problematischen/streitigen Punkten, Urteilsstil bei unproblematischen/offensichtlichen Punkten.'
              }
            ]
          }
        }
      ],
      resources: [
        {
          id: 'res-bgb-1-2-1',
          title: 'Methodenlehre der Rechtswissenschaft',
          type: 'book',
          url: 'https://beck-online.de',
          description: 'Larenz/Canaris: Methodenlehre der Rechtswissenschaft'
        }
      ],
      glossary: [
        {
          term: 'Gutachtenstil',
          definition: 'Juristische Darstellungsform: Obersatz - Definition - Subsumtion - Ergebnis'
        },
        {
          term: 'Subsumtion',
          definition: 'Unterordnung eines konkreten Sachverhalts unter abstrakte Rechtsbegriffe'
        },
        {
          term: 'Teleologische Auslegung',
          definition: 'Interpretation einer Rechtsnorm nach ihrem Sinn und Zweck'
        }
      ]
    },
    estimatedMinutes: 1200, // 20 Stunden  
    requiredMastery: 85,
    exercises: [] // Werden am Ende hinzugefügt
  }
];

// Exercises for Kurseinheit 1 - basierend auf FernUni Selbsttestaufgaben
const exercisesKE1: Exercise[] = [
  // Übungen zu 1.1 Einleitung
  {
    id: 'ex-bgb-ke1-1-1',
    type: 'multipleChoice',
    difficulty: 'beginner',
    points: 10,
    title: 'Grundlagen des bürgerlichen Rechts',
    description: 'Testen Sie Ihr Verständnis der Grundbegriffe',
    content: {
      question: 'Was kennzeichnet das bürgerliche Recht im Unterschied zum öffentlichen Recht?',
      options: [
        'Die Gleichordnung der Beteiligten',
        'Die Über- und Unterordnung der Beteiligten',
        'Die staatliche Zwangsgewalt',
        'Die Anwendung nur auf Kaufleute'
      ]
    },
    solution: {
      correct: 'Die Gleichordnung der Beteiligten',
      explanation: 'Das bürgerliche Recht ist durch die Gleichordnung der Rechtssubjekte gekennzeichnet, während im öffentlichen Recht ein Über-/Unterordnungsverhältnis besteht.'
    },
    hints: [
      {
        id: 'hint-1',
        text: 'Denken Sie an den Unterschied zwischen Privatrecht und öffentlichem Recht.',
        penaltyPoints: 2
      }
    ],
    feedback: {
      correct: 'Richtig! Das ist das zentrale Unterscheidungsmerkmal.',
      incorrect: 'Das ist nicht korrekt. Überlegen Sie, was Privatrecht auszeichnet.'
    }
  },
  {
    id: 'ex-bgb-ke1-1-2',
    type: 'dragDrop',
    difficulty: 'intermediate',
    points: 15,
    title: 'Die fünf Bücher des BGB',
    description: 'Ordnen Sie die Rechtsgebiete den BGB-Büchern zu',
    content: {
      question: 'Ordnen Sie die folgenden Rechtsgebiete den entsprechenden BGB-Büchern zu:',
      items: [
        'Kaufvertrag',
        'Eigentum',
        'Willenserklärung',
        'Eheschließung',
        'Testament'
      ],
      targets: [
        '1. Buch: Allgemeiner Teil',
        '2. Buch: Schuldrecht',
        '3. Buch: Sachenrecht',
        '4. Buch: Familienrecht',
        '5. Buch: Erbrecht'
      ]
    },
    solution: {
      correct: {
        'Willenserklärung': '1. Buch: Allgemeiner Teil',
        'Kaufvertrag': '2. Buch: Schuldrecht',
        'Eigentum': '3. Buch: Sachenrecht',
        'Eheschließung': '4. Buch: Familienrecht',
        'Testament': '5. Buch: Erbrecht'
      },
      explanation: 'Die BGB-Bücher folgen einer systematischen Ordnung vom Allgemeinen zum Besonderen.'
    }
  },
  {
    id: 'ex-bgb-ke1-1-3',
    type: 'fillInBlanks',
    difficulty: 'intermediate',
    points: 12,
    title: 'Privatautonomie',
    description: 'Vervollständigen Sie die Definition der Privatautonomie',
    content: {
      question: 'Vervollständigen Sie die Definition:',
      context: 'Privatautonomie ist die rechtlich gewährleistete _____ des Einzelnen, seine _____ durch eigenen _____ zu gestalten. Sie umfasst die _____, _____ und _____.',
      blanks: 6
    },
    solution: {
      correct: ['Befugnis', 'Rechtsverhältnisse', 'Willen', 'Abschlussfreiheit', 'Gestaltungsfreiheit', 'Formfreiheit'],
      explanation: 'Die Privatautonomie ist das zentrale Prinzip des Privatrechts und umfasst verschiedene Freiheiten bei der Vertragsgestaltung.'
    }
  },

  // Übungen zu 1.2 Methodologie
  {
    id: 'ex-bgb-ke1-2-1',
    type: 'caseAnalysis',
    difficulty: 'advanced',
    points: 25,
    title: 'Gutachtenstil anwenden',
    description: 'Lösen Sie den Fall im Gutachtenstil',
    content: {
      question: 'Wenden Sie den Gutachtenstil korrekt an:',
      scenario: `Student S möchte von Buchhändler B das Lehrbuch "BGB AT" für 45 € kaufen. S sagt: "Ich nehme das Buch für 45 €." B antwortet: "Einverstanden" und übergibt das Buch. S zahlt den Preis.

Prüfen Sie, ob zwischen S und B ein wirksamer Kaufvertrag zustande gekommen ist.`,
      tasks: [
        'Formulieren Sie einen korrekten Obersatz',
        'Definieren Sie die erforderlichen Tatbestandsmerkmale',
        'Nehmen Sie die Subsumtion vor',
        'Ziehen Sie ein klares Ergebnis'
      ]
    },
    solution: {
      correct: {
        structure: `I. Kaufvertrag zwischen S und B

S und B könnten einen wirksamen Kaufvertrag geschlossen haben.

1. Definition
Ein Kaufvertrag ist ein schuldrechtlicher Vertrag, bei dem sich der Verkäufer verpflichtet, dem Käufer eine Sache zu übereignen und zu übergeben, und der Käufer sich verpflichtet, den vereinbarten Kaufpreis zu zahlen (§ 433 BGB).

2. Angebot des B
Ein Angebot liegt vor. B hat das Buch zu einem festen Preis ausgestellt.

3. Annahme durch S
S hat durch die Erklärung "Ich nehme das Buch für 45 €" das Angebot angenommen.

4. Einigung
Die Parteien haben sich über Kaufgegenstand (Lehrbuch) und Kaufpreis (45 €) geeinigt.

Ergebnis: Zwischen S und B ist ein wirksamer Kaufvertrag zustande gekommen.`,
        keyPoints: [
          'Korrekter Obersatz mit Rechtsfrage',
          'Präzise Definition des Kaufvertrags',
          'Systematische Prüfung von Angebot und Annahme',
          'Eindeutiges Ergebnis'
        ]
      },
      explanation: 'Dies ist ein klassisches Beispiel für die Anwendung des Gutachtenstils bei einem einfachen Vertragsschluss.'
    }
  },
  {
    id: 'ex-bgb-ke1-2-2',
    type: 'trueFalse',
    difficulty: 'intermediate',
    points: 8,
    title: 'Gutachten- vs. Urteilsstil',
    description: 'Bewerten Sie die Aussagen zur juristischen Methodologie',
    content: {
      question: 'Der Gutachtenstil sollte nur bei unproblematischen Rechtsfragen verwendet werden.'
    },
    solution: {
      correct: false,
      explanation: 'Falsch. Der Gutachtenstil wird gerade bei problematischen und streitigen Rechtsfragen verwendet, während unproblematische Punkte im Urteilsstil abgehandelt werden können.'
    },
    hints: [
      {
        id: 'hint-1',
        text: 'Überlegen Sie, wann eine ausführliche Begründung nötig ist.',
        penaltyPoints: 1
      }
    ]
  },
  {
    id: 'ex-bgb-ke1-2-3',
    type: 'multipleChoice',
    difficulty: 'advanced',
    points: 15,
    title: 'Auslegungsmethoden',
    description: 'Anwendung der juristischen Auslegungsmethoden',
    content: {
      question: 'Welche Auslegungsmethode steht bei der Interpretation von Rechtsnormen an erster Stelle?',
      options: [
        'Die teleologische Auslegung (Sinn und Zweck)',
        'Die historische Auslegung (Entstehungsgeschichte)',
        'Die grammatische Auslegung (Wortlaut)',
        'Die systematische Auslegung (Stellung im Gesetz)'
      ]
    },
    solution: {
      correct: 'Die grammatische Auslegung (Wortlaut)',
      explanation: 'Die grammatische Auslegung ist stets der Ausgangspunkt, da der Wortlaut die äußere Grenze jeder Auslegung bildet. Andere Methoden ergänzen, können aber den möglichen Wortsinn nicht überschreiten.'
    }
  }
];

// Add exercises to units
kurseinheit1BGBUnits[0].exercises = exercisesKE1.slice(0, 3); // Erste 3 Übungen für 1.1
kurseinheit1BGBUnits[1].exercises = exercisesKE1.slice(3); // Restliche Übungen für 1.2