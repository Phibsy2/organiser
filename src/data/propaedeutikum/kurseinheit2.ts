import { LearningUnit, Exercise } from '../../types/learning';

// KURSEINHEIT 2: Gesetzesauslegung (60 Stunden / 2 ECTS)

export const kurseinheit2Units: LearningUnit[] = [
  // 2.1 Die vier klassischen Auslegungsmethoden (20 Stunden)
  {
    id: 'ke2-1-auslegungsmethoden',
    moduleId: 'propaedeutikum',
    order: 10,
    title: '2.1 Die vier klassischen Auslegungsmethoden (Canones)',
    objectives: [
      {
        id: 'obj-2-1-1',
        description: 'Die vier Auslegungsmethoden nach Savigny verstehen und anwenden',
        bloomLevel: 'apply'
      },
      {
        id: 'obj-2-1-2',
        description: 'Auslegungsargumente systematisch entwickeln',
        bloomLevel: 'create'
      },
      {
        id: 'obj-2-1-3',
        description: 'Methodenpluralität und Auslegungskonkurrenz bewerten',
        bloomLevel: 'evaluate'
      }
    ],
    content: {
      id: 'content-2-1',
      type: 'mixed',
      sections: [
        {
          id: 'section-2-1-1',
          title: 'Grammatische Auslegung (Wortlaut)',
          content: `Die grammatische Auslegung ist der Ausgangspunkt jeder Gesetzesinterpretation.

**Grundlagen:**
- Wortlaut als natürliche Grenze der Auslegung
- Allgemeiner Sprachgebrauch vs. Fachsprache
- Bedeutungswandel im Zeitverlauf
- Sprachliche Eindeutigkeit vs. Mehrdeutigkeit

**Methodisches Vorgehen:**
1. **Wörterbuchdefinition:** Was bedeutet das Wort allgemeinsprachlich?
2. **Juristischer Sprachgebrauch:** Hat der Begriff eine spezielle Rechtsbedeutung?
3. **Kontextuelle Bedeutung:** Wie wird der Begriff in anderen Gesetzen verwendet?
4. **Historische Entwicklung:** Hat sich die Wortbedeutung gewandelt?

**Grenzen der grammatischen Auslegung:**
- Eindeutig klarer Wortlaut: Keine Auslegung contra legem
- Sprachliche Unklarheiten: Andere Methoden erforderlich
- Archaische Begriffe: Anpassung an modernen Sprachgebrauch

**Beispiele aus der Rechtsprechung:**

**1. "Fahrzeug" in der StVO:**
- Allgemeinsprachlich: Fortbewegungsmittel
- Rechtlich: § 1 Abs. 2 StVO definiert genau
- Problem: E-Scooter, Segways → Auslegung erforderlich

**2. "Wohnung" in Art. 13 GG:**
- Allgemeinsprachlich: Privaträume zum Wohnen
- Rechtlich: Alle Räume der privaten Lebensführung
- Ausweitung: Geschäftsräume, Hotelzimmer (teilweise)

**Auslegungsregeln:**
- Fachausdrücke haben Vorrang vor Allgemeinsprache
- Gesetzliche Definitionen sind bindend
- Eindeutige Begriffe bedürfen keiner Auslegung
- Bei Mehrdeutigkeit: Weitere Canones heranziehen`,
          examples: [
            {
              id: 'ex-2-1-1-1',
              title: 'Auslegung "unverzüglich"',
              content: 'Problem: Was bedeutet "unverzüglich" in § 121 BGB?\n\nGrammatische Auslegung:\n- Allgemeinsprachlich: "sofort", "ohne Verzögerung"\n- Rechtssprachlich: "ohne schuldhaftes Zögern"\n- Unterschied zu "sofort": Bedenkzeit erlaubt\n- Legaldefinition: § 121 Abs. 1 S. 1 BGB: "ohne schuldhaftes Zögern"',
              explanation: 'Die grammatische Auslegung zeigt, dass "unverzüglich" nicht "sofort" bedeutet, sondern eine situationsangemessene Bearbeitungszeit erlaubt.'
            }
          ]
        },
        {
          id: 'section-2-1-2',
          title: 'Systematische Auslegung (Normzusammenhang)',
          content: `Die systematische Auslegung betrachtet die Norm im Kontext des gesamten Rechtssystems.

**Ebenen der Systematik:**

**1. Enge Systematik (unmittelbarer Kontext):**
- Stellung im Paragraphen (Absatz, Satz, Nummer)
- Verhältnis zu Nachbarparagraphen
- Aufbau des Abschnitts/Kapitels
- Überschriften und Gliederung

**2. Weite Systematik (Gesetzeszusammenhang):**
- Stellung im Gesetzbuch
- Verhältnis zu anderen Büchern/Teilen
- Gesetzessystematik und -aufbau
- Allgemeiner Teil vs. Besonderer Teil

**3. Rechtsordnungsweite Systematik:**
- Verhältnis zu anderen Gesetzen
- Verfassungsrechtliche Einordnung
- Europarechtliche Bezüge
- Völkerrechtliche Verpflichtungen

**Argumentationsformen:**

**Erst-recht-Schluss (argumentum a maiore ad minus):**
"Wenn schon das Größere gilt, dann erst recht das Kleinere"
Beispiel: Wenn Vorsatz strafbar ist, dann erst recht der direkte Vorsatz
Vorsicht: Nur bei gleicher Schutzrichtung!

**Umkehrschluss (argumentum e contrario):**
"Was das Gesetz nicht regelt, will es nicht regelt wissen"
Beispiel: § 929 BGB regelt nur bewegliche Sachen → Grundstücke ausgeschlossen
Voraussetzung: Abschließender Charakter der Regelung

**Analogie (argumentum a simili):**
"Ähnliche Sachverhalte erfordern ähnliche Rechtsfolgen"
Voraussetzungen: 
- Planwidrige Regelungslücke
- Vergleichbare Interessenlage
- Keine bewusste Nichtregelung

**Systematische Widerspruchsfreiheit:**
- Jede Norm muss ins System passen
- Kollidierende Normen: lex posterior, lex specialis, lex superior
- Verfassungskonforme Auslegung
- Unionsrechtskonforme Auslegung

**Terminologische Konsistenz:**
- Gleiche Begriffe haben gleiche Bedeutung
- Verschiedene Begriffe haben verschiedene Bedeutungen
- Ausnahmen müssen begründet werden
- Legaldefinitionen gelten gesetzesübergreifend

**Praktische Anwendung der Systematik:**

1. **Normhierarchie beachten:**
   - Verfassung > Gesetz > Verordnung
   - EU-Recht > nationales Recht (bei Anwendungsvorrang)
   - Spezialgesetz > allgemeines Gesetz

2. **Gesetzesaufbau analysieren:**
   - Allgemeine vor besonderen Regelungen
   - Regel-Ausnahme-Verhältnisse
   - Verweisungen und Bezugnahmen

3. **Rechtsgebietsübergreifend denken:**
   - Zivilrecht - Öffentliches Recht - Strafrecht
   - Schnittstellen und Überlappungen
   - Einheitliche Rechtsbegriffe`,
          examples: [
            {
              id: 'ex-2-1-2-1',
              title: 'Systematische Auslegung § 935 BGB',
              content: 'Problem: Gilt § 935 BGB (gutgläubiger Erwerb ausgeschlossen) auch für abhanden gekommene Tiere?\n\nSystematische Auslegung:\n- § 90a BGB: "Tiere sind keine Sachen"\n- Aber: "werden wie Sachen behandelt"\n- § 935 BGB steht im Sachenrecht\n- Systematik: Tierrecht folgt Sachenrecht\n→ § 935 BGB gilt auch für Tiere',
              explanation: 'Die Systematik des BGB und § 90a BGB führen zur Anwendung der Sachenrechtsregeln auf Tiere.'
            },
            {
              id: 'ex-2-1-2-2',
              title: 'Lex specialis-Grundsatz',
              content: 'Problem: Verhältnis von § 823 BGB zu § 7 StVG bei Verkehrsunfällen\n\nSystematische Auslegung:\n- § 823 BGB: Allgemeine Deliktshaftung (Verschulden)\n- § 7 StVG: Spezielle Gefährdungshaftung (ohne Verschulden)\n- StVG ist Spezialgesetz für Straßenverkehr\n- Beide Normen nebeneinander anwendbar\n- Aber: StVG mit Haftungshöchstgrenzen',
              explanation: 'Spezialgesetze gehen vor, schließen aber allgemeine Normen nicht immer aus.'
            },
            {
              id: 'ex-2-1-2-3',
              title: 'Verfassungskonforme Auslegung',
              content: 'Problem: Reichweite des § 1004 BGB bei Demonstrationen\n\nSystematische Auslegung:\n- § 1004 BGB: Eigentumsschutz gegen Störungen\n- Art. 8 GG: Versammlungsfreiheit\n- Systematischer Konflikt: Privatrecht vs. Grundrecht\n- Lösung: Einschränkende Auslegung von § 1004\n- Abwägung im Einzelfall erforderlich',
              explanation: 'Die verfassungskonforme Auslegung modifiziert zivilrechtliche Ansprüche.'
            }
          ]
        },
        {
          id: 'section-2-1-3',
          title: 'Historische Auslegung (Entstehungsgeschichte)',
          content: `Die historische Auslegung erforscht den Willen des historischen Gesetzgebers.

**Quellen der historischen Auslegung:**

**1. Gesetzgebungsmaterialien:**
- Gesetzentwürfe und Begründungen
- Ausschussberatungen und Protokolle
- Stellungnahmen und Anhörungen
- Parlamentsdebatten

**2. Entstehungsgeschichte:**
- Anlass der Gesetzgebung
- Reformziele und -zwecke
- Kompromisse und Verhandlungen
- Verworfene Alternativen

**3. Vorbilder und Rechtsvergleichung:**
- Vorbildgesetze anderer Länder
- Internationale Konventionen
- Modellgesetze und Entwürfe
- Wissenschaftliche Vorarbeiten

**Grenzen der historischen Auslegung:**

**Problem des Gesetzgeberwillens:**
- Kollektiver vs. individueller Wille
- Verschiedene Motive der Beteiligten
- Nachträgliche Rationalisierung
- Vergessener oder unklarer Wille

**Zeitbegrenzung:**
- Nur historischer Wille relevant
- Nicht: spätere Äußerungen
- Nicht: gegenwärtige Ansichten
- Aber: Entwicklungsoffenheit möglich

**Wandel der Verhältnisse:**
- Normtext bleibt, Umstände ändern sich
- Historischer Wille kann überholt sein
- Anpassung durch andere Methoden
- Grenzen: Wortlaut und Systematik

**Praktische Anwendung:**
- Materialien kritisch auswerten
- Widersprüche erkennen und auflösen
- Hauptziele von Nebenpunkten trennen
- Mit anderen Methoden kombinieren`,
          examples: [
            {
              id: 'ex-2-1-3-1',
              title: 'Historische Auslegung Art. 3 Abs. 2 GG',
              content: 'Problem: Bedeutung von "Männer und Frauen sind gleichberechtigt" (Art. 3 Abs. 2 GG)\n\nHistorische Auslegung:\n- Entstehung 1949: Revolutionäres Gleichberechtigungsgebot\n- Motive: Überwindung traditioneller Rollenmuster\n- Parlamentarischer Rat: Elisabeth Selbert\'s Initiative\n- Damaliges Verständnis: Formale Gleichberechtigung\n- Heute: Erweitert um materielle Gleichstellung',
              explanation: 'Die historische Auslegung zeigt den revolutionären Charakter, aber auch die Entwicklungsoffenheit der Norm.'
            }
          ]
        },
        {
          id: 'section-2-1-4',
          title: 'Teleologische Auslegung (Sinn und Zweck)',
          content: `Die teleologische Auslegung fragt nach dem Sinn und Zweck der Rechtsnorm.

**Zweckermittlung:**

**1. Objektiver Normzweck:**
- Ratio legis der Norm
- Geschützte Rechtsgüter
- Funktionaler Zusammenhang
- Systematische Einordnung

**2. Subjektiver Gesetzgeberzweck:**
- Erkennbarer Regelungswille
- Konkrete Regelungsabsicht  
- Problemlösungsansatz
- Kompromisscharakter

**Auslegungstechniken:**

**Zweckrationalität:**
- Mittel-Zweck-Relation prüfen
- Effektivität der Regelung
- Verhältnismäßigkeit
- Praktikabilität

**Interessenabwägung:**
- Betroffene Rechtsgüter identifizieren
- Interessenkonflikte analysieren
- Rangverhältnis bestimmen
- Ausgleich schaffen

**Wertungsjurisprudenz:**
- Verfassungsrechtliche Wertungen
- Rechtsprinzipien konkretisieren
- Gerechtigkeitsgesichtspunkte
- Folgenabschätzung

**Grenzen teleologischer Auslegung:**

**Gewaltenteilung:**
- Keine richterliche Rechtsetzung
- Bindung an Gesetzeswortlaut
- Respekt vor Gesetzgeberwillen
- Demokratische Legitimation

**Rechtssicherheit:**
- Vorhersehbarkeit wahren
- Willkür vermeiden
- Konsistenz sicherstellen
- Vertrauen schützen

**Methodische Disziplin:**
- Zweck muss ermittelbar sein
- Nicht: eigene Wertungen
- Intersubjektive Nachvollziehbarkeit
- Argumentative Begründung`,
          examples: [
            {
              id: 'ex-2-1-4-1',
              title: 'Teleologische Auslegung § 242 StGB',
              content: 'Problem: Umfasst "Wegnahme" in § 242 StGB auch digitale Kopien?\n\nTeleologische Auslegung:\n- Schutzzweck: Fremdes Eigentum\n- Bei Kopien: Kein Eigentumsverlust\n- Aber: Neue Schutzinteressen (geistiges Eigentum)\n- Zweck des Diebstahls: Substanzverletzung\n- Ergebnis: Kopieren ist kein Diebstahl\n→ Gesetzgeber schuf § 202a StGB (Datendiebstahl)',
              explanation: 'Die teleologische Auslegung zeigt die Grenzen analoger Anwendung und führt zu eigenständigen Regelungen.'
            }
          ]
        }
      ],
      resources: [
        {
          id: 'res-2-1-1',
          title: 'Auslegungsmethoden-Trainer',
          type: 'interactive',
          url: '/tools/auslegung-trainer',
          description: 'Interaktives Training der vier Auslegungsmethoden'
        },
        {
          id: 'res-2-1-2',
          title: 'Gesetzgebungsmaterialien-Datenbank',
          type: 'database',
          url: '/resources/gesetzgebung',
          description: 'Zugang zu Gesetzgebungsmaterialien und Entstehungsgeschichte'
        },
        {
          id: 'res-2-1-3',
          title: 'Video: Die Canones in der Praxis',
          type: 'video',
          url: '/videos/canones-praxis',
          duration: 45,
          description: 'Praktische Anwendung der Auslegungsmethoden anhand von BGH-Entscheidungen'
        },
        {
          id: 'res-2-1-4',
          title: 'Methodenkonkurrenz-Simulator',
          type: 'interactive',
          url: '/tools/methodenkonkurrenz',
          description: 'Simulation von Fällen mit widersprüchlichen Auslegungsergebnissen'
        },
        {
          id: 'res-2-1-5',
          title: 'Savigny: Originaltext zur Auslegungslehre',
          type: 'article',
          url: '/texts/savigny-auslegung',
          description: 'Auszug aus "System des heutigen Römischen Rechts" (1840)'
        }
      ],
      glossary: [
        {
          term: 'Canones',
          definition: 'Die vier klassischen Auslegungsmethoden nach Savigny',
          relatedTerms: ['Auslegung', 'Hermeneutik', 'Savigny']
        },
        {
          term: 'Grammatische Auslegung',
          definition: 'Auslegung nach dem Wortlaut und Sprachgebrauch',
          relatedTerms: ['Wortlaut', 'Sprachauslegung']
        },
        {
          term: 'Systematische Auslegung',
          definition: 'Auslegung im Kontext des Normzusammenhangs',
          relatedTerms: ['Normzusammenhang', 'Systemdenken']
        },
        {
          term: 'Historische Auslegung',
          definition: 'Auslegung nach der Entstehungsgeschichte und dem Gesetzgeberwillen',
          relatedTerms: ['Gesetzgeberwille', 'Entstehungsgeschichte']
        },
        {
          term: 'Teleologische Auslegung',
          definition: 'Auslegung nach Sinn und Zweck der Rechtsnorm',
          relatedTerms: ['Normzweck', 'Ratio legis', 'Interessenabwägung']
        }
      ]
    },
    exercises: [
      {
        id: 'ex-ke2-1-1',
        type: 'multipleChoice',
        difficulty: 'intermediate',
        points: 20,
        title: 'Auslegungsmethoden zuordnen',
        description: 'Ordnen Sie die Argumente der richtigen Auslegungsmethode zu',
        content: {
          question: 'Welcher Auslegungsmethode entspricht folgendes Argument: "§ 433 BGB steht im Schuldrecht und regelt damit Verpflichtungsgeschäfte"?',
          options: [
            'Grammatische Auslegung',
            'Systematische Auslegung', 
            'Historische Auslegung',
            'Teleologische Auslegung'
          ]
        },
        solution: {
          correct: 1,
          explanation: 'Die Einordnung in das System des BGB und der Verweis auf die Systematik des Schuldrechts ist ein typisches Argument der systematischen Auslegung.'
        },
        hints: [
          {
            id: 'hint-2-1-1',
            text: 'Achten Sie auf Begriffe wie "System", "Einordnung", "Zusammenhang".',
            penaltyPoints: 3
          }
        ],
        feedback: {
          correct: 'Richtig! Systematische Argumente beziehen sich auf den Normzusammenhang.',
          incorrect: 'Denken Sie an die verschiedenen Perspektiven der Auslegungsmethoden.'
        }
      },
      {
        id: 'ex-ke2-1-2',
        type: 'caseAnalysis',
        difficulty: 'advanced',
        points: 40,
        title: 'Alle vier Methoden anwenden',
        description: 'Legen Sie eine Norm mit allen vier Methoden aus',
        content: {
          question: 'Legen Sie § 823 Abs. 1 BGB aus: Was bedeutet "sonstiges Recht"?',
          context: 'Verwenden Sie alle vier Auslegungsmethoden systematisch.',
          sachverhalt: 'A verletzt B in seinem allgemeinen Persönlichkeitsrecht durch Beleidigungen. Ist das allgemeine Persönlichkeitsrecht ein "sonstiges Recht" i.S.d. § 823 Abs. 1 BGB?'
        },
        solution: {
          correct: {
            grammatisch: 'Wortlaut "sonstiges Recht" ist unbestimmt und auslegungsbedürftig. Allgemeinsprachlich: andere Rechte außer den genannten.',
            systematisch: '§ 823 I BGB nennt erst spezielle Rechte, dann "sonstige Rechte" als Auffangtatbestand. Systematik spricht für weite Auslegung.',
            historisch: 'Gesetzgeber 1900 kannte nur klassische absolute Rechte. Allgemeines Persönlichkeitsrecht war unbekannt.',
            teleologisch: 'Schutzzweck: Schutz absoluter Rechte vor Verletzung. APR ist absolutes Recht, verdient daher Schutz.',
            ergebnis: 'APR ist "sonstiges Recht" i.S.d. § 823 I BGB (h.M.)'
          },
          explanation: 'Die vier Methoden führen zu einem einheitlichen Ergebnis, wobei teleologische und systematische Argumente überwiegen.'
        },
        hints: [
          {
            id: 'hint-2-1-2',
            text: 'Arbeiten Sie alle vier Methoden systematisch ab: Wortlaut → System → Geschichte → Zweck.',
            penaltyPoints: 5
          }
        ],
        feedback: {
          correct: 'Hervorragend! Sie beherrschen die methodische Auslegung.',
          incorrect: 'Überprüfen Sie, ob Sie alle vier Methoden verwendet haben.'
        }
      },
      {
        id: 'ex-ke2-1-3',
        type: 'fillInBlanks',
        difficulty: 'beginner',
        points: 20,
        title: 'Methodenrangfolge',
        description: 'Verstehen Sie die Beziehung zwischen den Auslegungsmethoden',
        content: {
          question: 'Ergänzen Sie die Grundsätze zur Methodenrangfolge:',
          template: 'Die Auslegung beginnt stets mit dem [BLANK1]. Dieser bildet die [BLANK2] Grenze der Auslegung. Bei Mehrdeutigkeit sind die anderen [BLANK3] heranzuziehen. Eine Rangfolge ist [BLANK4] festgelegt.'
        },
        solution: {
          correct: {
            BLANK1: 'Wortlaut',
            BLANK2: 'äußerste',
            BLANK3: 'Canones',
            BLANK4: 'nicht'
          },
          explanation: 'Der Wortlaut ist Ausgangspunkt und Grenze. Die vier Methoden stehen grundsätzlich gleichberechtigt nebeneinander.',
          alternativeAnswers: {
            BLANK3: ['Methoden', 'Auslegungsmethoden'],
            BLANK4: ['nicht gesetzlich', 'nicht verbindlich']
          }
        },
        hints: [
          {
            id: 'hint-2-1-3',
            text: 'Der Wortlaut hat eine besondere Stellung in der Methodenlehre.',
            penaltyPoints: 3
          }
        ],
        feedback: {
          correct: 'Richtig! Sie verstehen die Grundlagen der Methodenlehre.',
          incorrect: 'Denken Sie an die Bedeutung des Wortlauts als Ausgangspunkt und Grenze.',
          partial: 'Fast richtig. Überprüfen Sie Ihre Antworten nochmals.'
        }
      },
      {
        id: 'ex-ke2-1-4',
        type: 'dragDrop',
        difficulty: 'intermediate',
        points: 25,
        title: 'Auslegungsargumente zuordnen',
        description: 'Ordnen Sie die Argumente der passenden Auslegungsmethode zu',
        content: {
          question: 'Ziehen Sie die Auslegungsargumente zur richtigen Methode:',
          items: [
            { id: 'item-1', content: 'Blick in die Bundestagsdrucksache', correctCategory: 'Historische Auslegung' },
            { id: 'item-2', content: 'Vergleich mit § 433 BGB', correctCategory: 'Systematische Auslegung' },
            { id: 'item-3', content: 'Schutzzweck der Norm', correctCategory: 'Teleologische Auslegung' },
            { id: 'item-4', content: 'Definition im Duden', correctCategory: 'Grammatische Auslegung' },
            { id: 'item-5', content: 'Stellung im Gesetz', correctCategory: 'Systematische Auslegung' },
            { id: 'item-6', content: 'Effektivität der Regelung', correctCategory: 'Teleologische Auslegung' },
            { id: 'item-7', content: 'Juristischer Fachbegriff', correctCategory: 'Grammatische Auslegung' },
            { id: 'item-8', content: 'Reformdiskussion 1990', correctCategory: 'Historische Auslegung' }
          ],
          categories: ['Grammatische Auslegung', 'Systematische Auslegung', 'Historische Auslegung', 'Teleologische Auslegung']
        },
        solution: {
          correct: {
            'Grammatische Auslegung': ['Definition im Duden', 'Juristischer Fachbegriff'],
            'Systematische Auslegung': ['Vergleich mit § 433 BGB', 'Stellung im Gesetz'],
            'Historische Auslegung': ['Blick in die Bundestagsdrucksache', 'Reformdiskussion 1990'],
            'Teleologische Auslegung': ['Schutzzweck der Norm', 'Effektivität der Regelung']
          },
          explanation: 'Jede Methode hat typische Argumentationsmuster und Erkenntnisquellen.'
        },
        hints: [
          {
            id: 'hint-2-1-4',
            text: 'Achten Sie auf Schlüsselbegriffe: Wortlaut, System, Geschichte, Zweck.',
            penaltyPoints: 4
          }
        ],
        feedback: {
          correct: 'Ausgezeichnet! Sie erkennen die verschiedenen Auslegungsargumente.',
          incorrect: 'Überdenken Sie, welche Erkenntnisquelle zu welcher Methode gehört.',
          partial: ''
        }
      },
      {
        id: 'ex-ke2-1-5',
        type: 'multipleChoice',
        difficulty: 'advanced',
        points: 30,
        title: 'Methodenkonflikt lösen',
        description: 'Wie gehen Sie mit widersprüchlichen Auslegungsergebnissen um?',
        content: {
          question: 'Die grammatische Auslegung spricht für Ergebnis A, die teleologische für Ergebnis B. Wie ist vorzugehen?',
          options: [
            'Grammatische Auslegung hat immer Vorrang',
            'Teleologische Auslegung setzt sich durch',
            'Abwägung im Einzelfall unter Berücksichtigung aller Umstände',
            'Der Richter entscheidet nach persönlicher Überzeugung'
          ]
        },
        solution: {
          correct: 2,
          explanation: 'Bei Methodenkonflikten ist eine Abwägung erforderlich. Dabei spielen Wortlautgrenze, Normzweck und Systematik eine Rolle. Es gibt keine starre Rangfolge.'
        },
        hints: [
          {
            id: 'hint-2-1-5',
            text: 'Denken Sie an die Gleichrangigkeit der Methoden und die Wortlautgrenze.',
            penaltyPoints: 5
          }
        ],
        feedback: {
          correct: 'Sehr gut! Sie verstehen die Komplexität der juristischen Methodik.',
          incorrect: 'Bedenken Sie: Es gibt keine starre Methodenhierarchie.',
          partial: ''
        }
      }
    ],
    estimatedMinutes: 1200, // 20 Stunden
    requiredMastery: 85
  },

  // 2.2 Analogie und Umkehrschluss (20 Stunden)
  {
    id: 'ke2-2-analogie-umkehrschluss',
    moduleId: 'propaedeutikum',
    order: 11,
    title: '2.2 Analogie und Umkehrschluss',
    objectives: [
      {
        id: 'obj-2-2-1',
        description: 'Voraussetzungen und Grenzen der Analogie verstehen',
        bloomLevel: 'understand'
      },
      {
        id: 'obj-2-2-2',
        description: 'Umkehrschlüsse methodisch korrekt durchführen',
        bloomLevel: 'apply'
      },
      {
        id: 'obj-2-2-3',
        description: 'Konflikt zwischen Analogie und Umkehrschluss lösen',
        bloomLevel: 'evaluate'
      }
    ],
    content: {
      id: 'content-2-2',
      type: 'mixed',
      sections: [
        {
          id: 'section-2-2-1',
          title: 'Die Analogie',
          content: `Die Analogie ist ein wichtiges Instrument zur Schließung von Regelungslücken.

**Definition und Grundlagen:**
Analogie = Übertragung einer Rechtsfolge auf einen ähnlichen, nicht geregelten Sachverhalt aufgrund gleicher Interessenlage.

**Voraussetzungen der Analogie:**

**1. Regelungslücke (planwidrige Unvollständigkeit):**
- Sachverhalt ist nicht geregelt
- Regelung war aber "plan"mäßig vorgesehen
- Ungewollte Gesetzeslücke
- Abgrenzung zu bewusster Nichtregelung

**2. Vergleichbare Interessenlage:**
- Ähnlicher Sachverhalt
- Gleiche Schutzrichtung
- Vergleichbare Wertung
- Ratio legis passt

**3. Kein Analogieverbot:**
- Nicht bei Strafgesetzen (Art. 103 Abs. 2 GG)
- Nicht bei Ausnahmevorschriften
- Nicht bei abschließenden Regelungen
- Nicht bei steuerlichen Tatbeständen

**Arten der Analogie:**

**Gesetzesanalogie:**
- Einzelne Norm wird übertragen
- Beispiel: § 985 BGB analog auf Rechte
- Direkte Übertragung

**Rechtsanalogie:**
- Allgemeiner Rechtsgrundsatz
- Mehrere Normen als Grundlage
- Beispiel: Culpa in contrahendo
- Prinzipienebene

**Methodisches Vorgehen:**
1. Lücke identifizieren
2. Ähnlichkeit prüfen
3. Interessenlage vergleichen
4. Analogieverbot ausschließen
5. Rechtsfolge übertragen`,
          examples: [
            {
              id: 'ex-2-2-1-1',
              title: 'Analogie § 985 BGB',
              content: 'Problem: Kann der Inhaber eines Nießbrauchs dessen Herausgabe verlangen?\n\nAnalogieprüfung:\n1. Lücke: § 985 BGB gilt nur für Eigentümer\n2. Ähnlichkeit: Nießbrauch ist absolutes Recht wie Eigentum\n3. Interessenlage: Gleicher Schutz von Herrschaftsrechten\n4. Kein Verbot: Zivilrecht erlaubt Analogie\n→ § 985 BGB analog auf Nießbrauch anwendbar',
              explanation: 'Die Analogie erweitert den Schutz absoluter Rechte über das Eigentum hinaus.'
            }
          ]
        },
        {
          id: 'section-2-2-2',
          title: 'Der Umkehrschluss',
          content: `Der Umkehrschluss schließt aus einer Regelung auf die Nichtregelung des Umgekehrten.

**Grundformel:**
"Was das Gesetz nicht regelt, will es nicht geregelt wissen"
(Argumentum e contrario)

**Logische Struktur:**
- Wenn A → B geregelt ist
- Dann gilt: Nicht-A → Nicht-B
- Beispiel: Nur Kaufmann kann HGB-Kaufmann sein
- Umkehrschluss: Nicht-Kaufmann ist kein HGB-Kaufmann

**Voraussetzungen:**

**1. Abschließende Regelung:**
- Gesetz regelt bewusst nur bestimmte Fälle
- Keine Regelungslücke
- Vollständige Tatbestandserfassung
- Bewusste Begrenzung

**2. Planvolle Beschränkung:**
- Gesetzgeber wollte begrenzen
- Nicht nur zufällige Auswahl
- Systematische Überlegung
- Erkennbarer Wille

**Grenzen des Umkehrschlusses:**

**Beispielhafte Regelung:**
- Norm nennt nur Beispiele
- "Insbesondere", "namentlich"
- Keine Abschließlichkeit
- Umkehrschluss unzulässig

**Praktische Unvollständigkeit:**
- Gesetzgeber konnte nicht alles regeln
- Technische Unmöglichkeit
- Spätere Entwicklungen
- Umkehrschluss fragwürdig

**Analogie vs. Umkehrschluss:**
Konkurrenz zwischen beiden Methoden:
- Analogie: Lücke schließen
- Umkehrschluss: Lücke bestätigen
- Lösung: Gesetzgeberwille ermitteln`,
          examples: [
            {
              id: 'ex-2-2-2-1',
              title: 'Umkehrschluss § 407 BGB',
              content: 'Problem: Kann auch ein zukünftiger Gläubiger die Abtretung einer Forderung vornehmen?\n\nUmkehrschluss aus § 407 BGB:\n- § 407 BGB: "Der Gläubiger kann seine Forderung abtreten"\n- Voraussetzung: bestehende Forderung\n- Umkehrschluss: Zukünftige Forderungen sind nicht erfasst\n- Aber: § 398 BGB lässt Abtretung zukünftiger Forderungen zu\n→ Umkehrschluss zu eng, Analogie möglich',
              explanation: 'Der Umkehrschluss wird durch systematische Betrachtung korrigiert.'
            }
          ]
        }
      ],
      resources: [
        {
          id: 'res-2-2-1',
          title: 'Lücken-Analysator',
          type: 'interactive',
          url: '/tools/luecken-analyse',
          description: 'Tool zur Identifikation und Bewertung von Regelungslücken'
        }
      ],
      glossary: [
        {
          term: 'Analogie',
          definition: 'Übertragung einer Rechtsfolge auf einen ähnlichen ungeregelten Fall',
          relatedTerms: ['Regelungslücke', 'Rechtsfortbildung']
        },
        {
          term: 'Umkehrschluss',
          definition: 'Schluss von der Regelung auf die bewusste Nichtregelung des Gegenteils',
          relatedTerms: ['Argumentum e contrario', 'Abschließende Regelung']
        },
        {
          term: 'Regelungslücke',
          definition: 'Planwidrige Unvollständigkeit des Gesetzes',
          relatedTerms: ['Planwidrigkeit', 'Lückenschließung']
        }
      ]
    },
    exercises: [
      {
        id: 'ex-ke2-2-1',
        type: 'multipleChoice',
        difficulty: 'intermediate',
        points: 25,
        title: 'Analogievoraussetzungen prüfen',
        description: 'Prüfen Sie, ob eine Analogie zulässig ist',
        content: {
          question: 'Welche Voraussetzung ist für eine Analogie NICHT erforderlich?',
          options: [
            'Planwidrige Regelungslücke',
            'Vergleichbare Interessenlage',
            'Ausdrückliche gesetzliche Ermächtigung',
            'Kein Analogieverbot'
          ]
        },
        solution: {
          correct: 2,
          explanation: 'Eine ausdrückliche gesetzliche Ermächtigung ist für die Analogie nicht erforderlich. Die Analogie ist ein allgemeines Rechtsfindungsinstrument.'
        },
        hints: [
          {
            id: 'hint-2-2-1',
            text: 'Analogie ist ein methodisches Instrument, keine gesetzliche Ausnahme.',
            penaltyPoints: 4
          }
        ],
        feedback: {
          correct: 'Richtig! Analogie bedarf keiner gesetzlichen Ermächtigung.',
          incorrect: 'Überdenken Sie die Grundlagen der Analogie als Rechtsfindungsmethode.'
        }
      }
    ],
    estimatedMinutes: 1200, // 20 Stunden
    requiredMastery: 80
  },

  // 2.3 Verfassungskonforme Auslegung (20 Stunden)
  {
    id: 'ke2-3-verfassungskonforme-auslegung',
    moduleId: 'propaedeutikum',
    order: 12,
    title: '2.3 Verfassungskonforme Auslegung',
    objectives: [
      {
        id: 'obj-2-3-1',
        description: 'Prinzip und Technik verfassungskonformer Auslegung verstehen',
        bloomLevel: 'understand'
      },
      {
        id: 'obj-2-3-2',
        description: 'Verfassungsrechtliche Vorgaben in die Auslegung einbeziehen',
        bloomLevel: 'apply'
      },
      {
        id: 'obj-2-3-3',
        description: 'Grenzen verfassungskonformer Auslegung erkennen',
        bloomLevel: 'evaluate'
      }
    ],
    content: {
      id: 'content-2-3',
      type: 'mixed',
      sections: [
        {
          id: 'section-2-3-1',
          title: 'Grundlagen verfassungskonformer Auslegung',
          content: `Die verfassungskonforme Auslegung ist ein zentrales Prinzip der Rechtsfindung.

**Verfassungsrechtliche Grundlagen:**
- Art. 1 Abs. 3 GG: Bindung an Grundrechte
- Art. 20 Abs. 3 GG: Bindung an Recht und Gesetz
- Normenhierarchie: Verfassung über einfachem Recht
- Einheit der Rechtsordnung

**Grundprinzip:**
"Von mehreren möglichen Auslegungen ist diejenige zu wählen, die mit der Verfassung in Einklang steht."

**Funktionen:**

**1. Normerhaltung:**
- Verfassungswidrige Normen vermeiden
- Nichtigkeitserklärung verhindern
- Gesetzgeber-Intention respektieren
- Rechtssicherheit fördern

**2. Grundrechtsoptimierung:**
- Grundrechte maximal verwirklichen
- Grundrechtskonflikte lösen
- Verhältnismäßigkeit sicherstellen
- Wesensgehaltsgarantie beachten

**3. Systemkonformität:**
- Verfassungsrechtliche Wertordnung
- Einheit der Rechtsordnung
- Widerspruchsfreiheit
- Kohärenz schaffen

**Methodische Einordnung:**
- Nicht eigenständige Methode
- Metaprinzip für alle Auslegungsmethoden
- Verfassungsrechtliche Filterung
- Ergebniskontrolle

**Anwendungsbereiche:**
- Mehrdeutige Normen
- Auslegungsspielräume
- Unbestimmte Rechtsbegriffe
- Ermessensspielräume`,
          examples: [
            {
              id: 'ex-2-3-1-1',
              title: 'Verfassungskonforme Auslegung § 1004 BGB',
              content: 'Problem: Gilt § 1004 BGB auch bei Persönlichkeitsrechtsverletzungen?\n\nVerfassungskonforme Auslegung:\n- Art. 2 Abs. 1 i.V.m. Art. 1 Abs. 1 GG: Allgemeines Persönlichkeitsrecht\n- Verfassungsauftrag: Effektiver Persönlichkeitsschutz\n- § 1004 BGB: "Beeinträchtigungen" weit auslegbar\n- Ergebnis: § 1004 BGB analog auf APR-Verletzungen\n→ Verfassungskonformer Persönlichkeitsschutz',
              explanation: 'Die Verfassung verlangt effektiven Persönlichkeitsschutz, der durch weite Auslegung zivilrechtlicher Normen erreicht wird.'
            }
          ]
        },
        {
          id: 'section-2-3-2',
          title: 'Praktische Anwendung',
          content: `Die verfassungskonforme Auslegung erfordert systematisches Vorgehen.

**Methodisches Vorgehen:**

**1. Auslegungsalternativen ermitteln:**
- Alle möglichen Bedeutungen
- Klassische Auslegungsmethoden
- Wortlautgrenzen beachten
- Systematische Einordnung

**2. Verfassungsrechtliche Prüfung:**
- Betroffene Grundrechte identifizieren
- Verfassungsprinzipien beachten
- Kompetenzordnung berücksichtigen
- Organstrukturprinzipien bedenken

**3. Verfassungskonformität bewerten:**
- Grundrechtseingriffe prüfen
- Verhältnismäßigkeit beurteilen
- Wesensgehalt wahren
- Schrankensystematik beachten

**4. Optimale Lösung wählen:**
- Grundrechtsfreundlichste Auslegung
- Systemkonforme Lösung
- Praktikable Handhabung
- Interessenausgleich

**Grenzen verfassungskonformer Auslegung:**

**Wortlautgrenze:**
- Möglicher Wortsinn als Grenze
- Keine contra-legem-Auslegung
- Sprachliche Verständlichkeit
- Demokratische Legitimation

**Gesetzgeberwille:**
- Erkennbare Gesetzgeberintention
- Bewusste Entscheidungen respektieren
- Kompromisscharakter beachten
- Gewaltenteilung

**Normstruktur:**
- Systematik des Gesetzes
- Begriffliche Konsistenz  
- Regelungszusammenhang
- Logische Struktur`,
          examples: [
            {
              id: 'ex-2-3-2-1',
              title: 'Grenzen am Beispiel § 185 StGB',
              content: 'Problem: Kann § 185 StGB (Beleidigung) verfassungskonform eingeschränkt werden?\n\nGrenzen der verfassungskonformen Auslegung:\n- Art. 5 Abs. 1 GG: Meinungsfreiheit\n- Aber: Wortlaut § 185 StGB ist eindeutig\n- Keine Ausnahmen im Gesetzestext\n- Demokratischer Gesetzgeber wollte Schutz\n→ Verfassungskonforme Auslegung an Wortlautgrenze\n→ BVerfG: Abwägung im Einzelfall',
              explanation: 'Die Wortlautgrenze verhindert zu weitgehende richterliche Rechtsfortbildung zugunsten der Gewaltenteilung.'
            }
          ]
        }
      ],
      resources: [
        {
          id: 'res-2-3-1',
          title: 'Grundrechte-Checker',
          type: 'interactive',
          url: '/tools/grundrechte-check',
          description: 'Tool zur Prüfung von Grundrechtsbezügen bei der Auslegung'
        },
        {
          id: 'res-2-3-2',
          title: 'BVerfG-Entscheidungen zur verfassungskonformen Auslegung',
          type: 'database',
          url: '/resources/bverfg-auslegung',
          description: 'Sammlung wichtiger Verfassungsgerichtsentscheidungen'
        }
      ],
      glossary: [
        {
          term: 'Verfassungskonforme Auslegung',
          definition: 'Auslegungsmethode zur Vermeidung von Verfassungswidrigkeiten',
          relatedTerms: ['Grundrechtsbindung', 'Normenhierarchie']
        },
        {
          term: 'Wortlautgrenze',
          definition: 'Grenze der Auslegung am möglichen Wortsinn',
          relatedTerms: ['Gewaltenteilung', 'Demokratieprinzip']
        },
        {
          term: 'Grundrechtsoptimierung',
          definition: 'Maximale Verwirklichung der Grundrechte durch Auslegung',
          relatedTerms: ['Verhältnismäßigkeit', 'Wesensgehalt']
        }
      ]
    },
    exercises: [
      {
        id: 'ex-ke2-3-1',
        type: 'caseAnalysis',
        difficulty: 'advanced',
        points: 40,
        title: 'Verfassungskonforme Auslegung durchführen',
        description: 'Führen Sie eine verfassungskonforme Auslegung durch',
        content: {
          question: 'Legen Sie § 826 BGB verfassungskonform aus.',
          sachverhalt: 'Journalist J veröffentlicht wahre, aber private Tatsachen über Politiker P. P verlangt Schadensersatz wegen sittenwidriger Schädigung.',
          context: 'Berücksichtigen Sie Art. 5 Abs. 1 GG (Pressefreiheit) und Art. 2 Abs. 1 i.V.m. Art. 1 Abs. 1 GG (Persönlichkeitsrecht).'
        },
        solution: {
          correct: {
            grundrechtskonflikt: 'Pressefreiheit (Art. 5 I GG) vs. Allgemeines Persönlichkeitsrecht (Art. 2 I, 1 I GG)',
            auslegung_826: '§ 826 BGB: "Sittenwidrigkeit" verfassungskonform auslegen als Abwägung der Grundrechte',
            abwaegung: 'Öffentliches Informationsinteresse vs. Privatsphäre - Politikerstatus erhöht Informationsinteresse, private Tatsachen schützenswert',
            ergebnis: 'Sittenwidrigkeit nur bei eindeutigem Überwiegen des Persönlichkeitsrechts'
          },
          explanation: 'Die verfassungskonforme Auslegung löst den Grundrechtskonflikt durch verhältnismäßige Abwägung.'
        },
        hints: [
          {
            id: 'hint-2-3-1',
            text: 'Identifizieren Sie zunächst die betroffenen Grundrechte.',
            penaltyPoints: 5
          }
        ],
        feedback: {
          correct: 'Hervorragend! Sie verstehen verfassungskonforme Auslegung.',
          incorrect: 'Arbeiten Sie die Grundrechtsebene systematischer heraus.'
        }
      }
    ],
    estimatedMinutes: 1200, // 20 Stunden
    requiredMastery: 85
  },
  
  // Zusammenfassung Kurseinheit 2
  {
    id: 'ke2-zusammenfassung',
    moduleId: 'propaedeutikum',
    order: 13,
    title: '📚 Zusammenfassung: Gesetzesauslegung und juristische Methodik',
    objectives: [
      {
        id: 'obj-ke2-zusammen-1',
        description: 'Alle Auslegungsmethoden im Überblick verstehen',
        bloomLevel: 'understand'
      },
      {
        id: 'obj-ke2-zusammen-2',
        description: 'Methodenkombination beherrschen',
        bloomLevel: 'apply'
      },
      {
        id: 'obj-ke2-zusammen-3',
        description: 'Prüfungsrelevante Aspekte rekapitulieren',
        bloomLevel: 'remember'
      }
    ],
    content: {
      id: 'content-ke2-zusammen',
      type: 'mixed',
      sections: [
        {
          id: 'section-ke2-zusammen-1',
          title: '🎯 Die Auslegungscanones im Überblick',
          content: `**Die vier klassischen Auslegungsmethoden nach Savigny:**

## 📖 1. Grammatische Auslegung (Wortlautauslegung)
- **Was:** Bedeutung der Worte und Sätze
- **Wie:** Allgemeiner/juristischer Sprachgebrauch
- **Grenze:** Möglicher Wortsinn (Art. 103 II GG im Strafrecht)
- **Beispiel:** "Waffe" = Gefährliches Werkzeug? → Ja, wenn zur Verletzung geeignet

## 🏛️ 2. Systematische Auslegung
- **Was:** Stellung der Norm im Gesetz
- **Wie:** Kontext, Überschriften, Gesamtsystem
- **Prinzip:** Widerspruchsfreiheit der Rechtsordnung
- **Beispiel:** § 985 BGB im Sachenrecht → Eigentumsbezug

## 📜 3. Historische Auslegung
- **Was:** Wille des historischen Gesetzgebers
- **Wie:** Gesetzesbegründungen, Protokolle
- **Bedeutung:** Ausgangspunkt, nicht bindend
- **Entwicklung:** Subjektiv-historisch → objektiv-teleologisch

## 🎯 4. Teleologische Auslegung
- **Was:** Sinn und Zweck der Norm heute
- **Wie:** Schutzzweck, Interessenausgleich
- **Maßstab:** Objektive Zwecke, Gerechtigkeit
- **Vorrang:** Meist ausschlaggebend bei Konflikten

💡 **Merksatz WGHT:**
- **W**ortlaut
- **G**eschichte  
- **H**ierarchie (System)
- **T**elos (Zweck)`
        },
        {
          id: 'section-ke2-zusammen-2',
          title: '🔄 Methodenkombination und -konflikte',
          content: `**Zusammenspiel der Methoden:**

## Regelfall: Übereinstimmung
\`\`\`
Wortlaut → System → Geschichte → Zweck
    ↓         ↓          ↓         ↓
         Einheitliches Ergebnis
\`\`\`

## Konfliktfall: Rangfolge
1. **Wortlautgrenze** = absolute Grenze
2. **Teleologie** meist vorrangig (moderner Ansatz)
3. **System** wichtig für Kohärenz
4. **Historie** nur Ausgangspunkt

## Sondermethoden:

### ➕ Analogie (Lückenfüllung)
**Voraussetzungen:**
1. Planwidrige Regelungslücke
2. Vergleichbare Interessenlage
3. Kein Analogieverbot

### ➖ Umkehrschluss (e contrario)
**Anwendung bei:**
- Abschließenden Aufzählungen
- Bewussten Regelungsentscheidungen
- Ausnahmevorschriften

### 📜 Verfassungskonforme Auslegung
**Prinzip:** Im Zweifel grundrechtsfreundlich
**Grenze:** Wortlaut und Gesetzeszweck
**Vorrang:** Vor Verfassungswidrigkeit`
        },
        {
          id: 'section-ke2-zusammen-3',
          title: '✅ Prüfungsschema Auslegung',
          content: `**Standardschema für Klausuren:**

## 1. Ausgangspunkt: Wortlaut
☐ Allgemeiner Sprachgebrauch prüfen
☐ Fachsprachliche/juristische Bedeutung
☐ Mehrere Bedeutungen? → Weitere Methoden nötig

## 2. Systematik einbeziehen
☐ Stellung im Gesetz (Buch, Abschnitt, Titel)
☐ Zusammenhang mit anderen Normen
☐ Legaldefinitionen beachten

## 3. Historie berücksichtigen
☐ Gesetzesbegründung (BT-Drucksache)
☐ Entstehungsgeschichte
☐ Reformziele des Gesetzgebers

## 4. Teleologie als Korrektiv
☐ Normzweck ermitteln
☐ Interessenausgleich
☐ Praktische Konkordanz

## 5. Verfassungskonformität prüfen
☐ Grundrechtsrelevanz?
☐ Mehrere Auslegungen möglich?
☐ Grundrechtsschonende wählen

⚠️ **Klausurtipp:** Immer alle Methoden ansprechen, auch wenn eindeutig!`
        },
        {
          id: 'section-ke2-zusammen-4',
          title: '📊 Methodenvergleich auf einen Blick',
          content: `**Übersichtstabelle der Auslegungsmethoden:**

| Methode | Fragestellung | Erkenntnisquellen | Stärken | Schwächen |
|---------|---------------|-------------------|---------|-----------|
| **Grammatisch** | Was sagt der Text? | Wörterbücher, Kommentare | Objektiv, nachprüfbar | Mehrdeutigkeiten |
| **Systematisch** | Wo steht die Norm? | Gesetzesstruktur | Kohärenz | Zirkelschlüsse |
| **Historisch** | Was wollte der Gesetzgeber? | BT-Drucksachen | Authentisch | Veraltet |
| **Teleologisch** | Welcher Zweck? | Vernunft, Gerechtigkeit | Flexibel | Subjektiv |
| **Analogie** | Vergleichbare Lage? | Ähnliche Normen | Lückenfüllung | Rechtsunsicherheit |
| **Umkehrschluss** | Bewusste Nichtregelung? | Normstruktur | Eindeutig | Zu formal |
| **Verfassungskonform** | Grundrechtskonform? | Grundgesetz | Grundrechtsschutz | Überdehnung |`
        },
        {
          id: 'section-ke2-zusammen-5',
          title: '🎓 Lernkarten Auslegungsmethoden',
          content: `**Die wichtigsten Begriffe zum Wiederholen:**

**Karte 1:** Canones
→ Die vier klassischen Auslegungsmethoden nach Savigny

**Karte 2:** Wortlautgrenze
→ Äußerste Grenze des möglichen Wortsinns

**Karte 3:** Normzweck
→ Objektiver Sinn und Zweck einer Vorschrift heute

**Karte 4:** Planwidrige Lücke
→ Unbeabsichtigte Nichtregelung eines regelungsbedürftigen Falls

**Karte 5:** Argumentum e contrario
→ Umkehrschluss aus bewusster Nichterwähnung

**Karte 6:** Verfassungskonforme Auslegung
→ Normauslegung im Lichte der Grundrechte

**Karte 7:** Lex specialis
→ Speziellere Norm verdrängt allgemeinere

**Karte 8:** Praktische Konkordanz
→ Schonender Ausgleich kollidierender Rechtsgüter

**Karte 9:** Subjektive Theorie
→ Maßgeblich ist der Wille des historischen Gesetzgebers

**Karte 10:** Objektive Theorie
→ Maßgeblich ist der objektive Sinn des Gesetzes heute`
        },
        {
          id: 'section-ke2-zusammen-6',
          title: '🚀 Verbindung zu anderen Kurseinheiten',
          content: `**Wie die Auslegung Ihre juristische Arbeit prägt:**

## 📝 Verbindung zu Kurseinheit 1 (Gutachtentechnik):
- Auslegung im **Obersatz** bei unklaren Tatbestandsmerkmalen
- Methodische Argumentation in der **Begründung**
- Strukturierte Darstellung der Auslegungsschritte

## ⚖️ Verbindung zu Kurseinheit 3 (Rechtsgebiete):
- **Zivilrecht:** Vertragsauslegung (§§ 133, 157 BGB)
- **Öffentliches Recht:** Verwaltungsaktauslegung
- **Strafrecht:** Strikte Wortlautbindung (Art. 103 II GG)

## 💻 Verbindung zu Zusatzmaterial 1 (Digital):
- Digitale Recherche von Gesetzesmaterialien
- KI-Tools zur Auslegungsunterstützung
- Datenbanken für systematische Zusammenhänge

## 📚 Verbindung zu Zusatzmaterial 2 (Wissenschaft):
- Methodenlehre als Wissenschaftstheorie
- Auslegung in der Dissertation
- Rechtsdogmatik und Methodenkritik

**Fazit:** Die Auslegungsmethoden sind das Herzstück juristischer Arbeit!`
        }
      ],
      resources: [
        {
          id: 'res-ke2-zusammen-1',
          title: '🎥 Video: Alle Auslegungsmethoden in 15 Minuten',
          type: 'video',
          url: 'https://fernuni-hagen.de/videos/ke2-methodenüberblick',
          description: 'Kompakte Wiederholung mit Beispielen'
        },
        {
          id: 'res-ke2-zusammen-2',
          title: '📱 Auslegungs-Trainer App',
          type: 'interactive',
          url: 'https://jurafit.de/auslegungstrainer',
          description: 'Interaktive Übungen zu allen Methoden'
        },
        {
          id: 'res-ke2-zusammen-3',
          title: '📄 Methodenblatt zum Ausdrucken',
          type: 'website',
          url: 'https://fernuni-hagen.de/rewi/methodenblatt-ke2.pdf',
          description: 'Übersicht für die Klausurvorbereitung'
        }
      ],
      glossary: [
        {
          term: 'Methodenlehre',
          definition: 'Systematik der juristischen Auslegung und Rechtsanwendung',
          relatedTerms: ['Canones', 'Hermeneutik', 'Methodenpluralismus']
        }
      ]
    },
    exercises: [
      {
        id: 'ex-ke2-zusammen-1',
        type: 'multipleChoice',
        difficulty: 'intermediate',
        points: 25,
        title: 'Erkenntnisquellen der Auslegung',
        description: 'Welche Erkenntnisquelle gehört zur historischen Auslegung?',
        content: {
          question: 'Welche der folgenden Quellen nutzt man primär für die historische Auslegung?',
          options: [
            'Duden und juristische Wörterbücher',
            'BT-Drucksachen und Gesetzgebungsmaterialien',
            'Stellung der Norm im Gesetz',
            'Sinn und Zweck der Regelung'
          ]
        },
        solution: {
          correct: [1],
          explanation: 'BT-Drucksachen und Gesetzgebungsmaterialien zeigen den Willen des historischen Gesetzgebers. Der Duden gehört zur grammatischen, die Stellung zur systematischen und Sinn/Zweck zur teleologischen Auslegung.'
        },
        hints: [],
        feedback: {
          correct: 'Perfekt! Sie kennen die Erkenntnisquellen der historischen Auslegung.',
          incorrect: 'Überlegen Sie, welche Quelle den Willen des Gesetzgebers zeigt.'
        }
      }
    ],
    estimatedMinutes: 60, // 1 Stunde für Zusammenfassung
    requiredMastery: 80
  }
];

// Export der Gesamtstruktur für Kurseinheit 2
export const kurseinheit2 = {
  id: 'ke2',
  title: 'Kurseinheit 2: Gesetzesauslegung',
  credits: 2,
  estimatedHours: 60,
  units: kurseinheit2Units,
  objectives: [
    'Die vier klassischen Auslegungsmethoden beherrschen',
    'Analogie und Umkehrschluss sicher anwenden',
    'Verfassungskonforme Auslegung durchführen',
    'Methodenkompetenz in der Rechtsfindung entwickeln'
  ],
  assessmentCriteria: [
    'Korrekte Anwendung der Auslegungsmethoden',
    'Systematische Herangehensweise',
    'Verfassungsrechtliche Sensibilität',
    'Methodische Reflexion'
  ]
};