import { LearningUnit, Exercise } from '../../types/learning';

// ZUSATZMATERIAL 2: Wissenschaftliches Arbeiten im Recht (60 Stunden / 2 ECTS)

export const zusatzmaterial2Units: LearningUnit[] = [
  // 5.1 Grundlagen wissenschaftlichen Arbeitens (20 Stunden)
  {
    id: 'zm2-1-wissenschaftliche-grundlagen',
    moduleId: 'propaedeutikum',
    order: 19,
    title: '5.1 Grundlagen des wissenschaftlichen Arbeitens',
    objectives: [
      {
        id: 'obj-5-1-1',
        description: 'Wissenschaftliche Methoden im Recht verstehen und anwenden',
        bloomLevel: 'apply'
      },
      {
        id: 'obj-5-1-2',
        description: 'Qualität rechtswissenschaftlicher Literatur bewerten',
        bloomLevel: 'evaluate'
      },
      {
        id: 'obj-5-1-3',
        description: 'Wissenschaftliche Fragestellungen entwickeln',
        bloomLevel: 'create'
      }
    ],
    content: {
      id: 'content-5-1',
      type: 'mixed',
      sections: [
        {
          id: 'section-5-1-1',
          title: 'Was ist Rechtswissenschaft?',
          content: `Die Rechtswissenschaft ist eine hermeneutische Wissenschaft, die sich mit der Erkenntnis und Auslegung des Rechts beschäftigt.

**Charakteristische Merkmale der Rechtswissenschaft:**

**1. Normativität:**
- Recht enthält Sollens-Aussagen (normativ)
- Nicht nur beschreibend (deskriptiv), sondern bewertend
- Unterschied zu empirischen Wissenschaften
- Ziel: Ermittlung der "richtigen" Rechtslösung

**2. Hermeneutik (Auslegungskunst):**
- Verstehen und Interpretieren rechtlicher Texte
- Gesetze, Rechtsprechung, Verträge als Texte
- Berücksichtigung historischer und systematischer Kontexte
- Zirkulärer Prozess: Vorverständnis ↔ Text ↔ neues Verständnis

**3. Interdisziplinarität:**
- Verbindung zu anderen Wissenschaften:
  • **Rechtsphilosophie:** Was ist Recht? Naturrecht vs. Positivismus
  • **Rechtssoziologie:** Wie wirkt Recht in der Gesellschaft?
  • **Rechtsgeschichte:** Entwicklung rechtlicher Institutionen
  • **Rechtsvergleichung:** Verschiedene Rechtssysteme
  • **Empirische Rechtsforschung:** Datenbasierte Rechtserkenntnis

**Methodenpluralismus in der Rechtswissenschaft:**

**Traditionelle juristische Methode:**
1. **Grammatische Auslegung:** Wortlaut der Norm
2. **Systematische Auslegung:** Stellung im Rechtssystem
3. **Historische Auslegung:** Wille des Normgebers
4. **Teleologische Auslegung:** Zweck der Norm

**Moderne Ansätze:**
- **Ökonomische Analyse des Rechts:** Effizienzbetrachtungen
- **Feministische Rechtswissenschaft:** Geschlechterperspektive
- **Critical Legal Studies:** Machtkritische Analyse
- **Law & Technology:** Recht und technischer Wandel

**Rechtswissenschaftliche Erkenntnisinteressen:**

**1. Dogmatische Rechtswissenschaft:**
- **Ziel:** Systematisierung geltenden Rechts
- **Methode:** Begriffsjurisprudenz, Subsumtion
- **Beispiel:** Kommentarliteratur zum BGB
- **Kritik:** Praxisferne, fehlende gesellschaftliche Bezüge

**2. Rechtstatsachenforschung:**
- **Ziel:** Empirische Erforschung der Rechtswirklichkeit
- **Methode:** Statistik, Interviews, Beobachtung
- **Beispiel:** Studien zur Rechtsprechung des BGH
- **Nutzen:** Evidenzbasierte Rechtspolitik

**3. Rechtstheorie:**
- **Ziel:** Grundlagen und Struktur des Rechts erforschen
- **Methode:** Begriffliche Analyse, logische Argumentation
- **Beispiel:** Allgemeine Rechtslehre, Rechtsphilosophie
- **Bedeutung:** Fundament für praktische Rechtsdogmatik

**4. Rechtsvergleichung:**
- **Ziel:** Verschiedene Rechtssysteme analysieren und vergleichen
- **Methode:** Funktionale, strukturelle oder kulturelle Vergleiche
- **Beispiel:** Common Law vs. Civil Law
- **Nutzen:** Rechtsentwicklung und -harmonisierung

**Wissenschaftstheoretische Grundlagen:**

**Hermeneutischer Zirkel in der Rechtswissenschaft:**

Vorverständnis → Normtext → Interpretation → neues Verständnis
      ↑                                                    ↓
      ←←←←←←←←←←← Revision ←←←←←←←←←←←←←←←←←←←←←←←←←

**Beispiel: Auslegung von § 242 BGB ("Treu und Glauben")**
1. **Vorverständnis:** Allgemeine Vorstellung von Fairness
2. **Normtext:** "Der Schuldner ist verpflichtet, die Leistung so zu bewirken, wie Treu und Glauben mit Rücksicht auf die Verkehrssitte es erfordern."
3. **Interpretation:** Was bedeutet "Treu und Glauben" konkret?
4. **Neues Verständnis:** Durch Rechtsprechung konkretisierte Fallgruppen
5. **Revision:** Anpassung bei neuen gesellschaftlichen Entwicklungen

**Qualitätskriterien rechtswissenschaftlicher Arbeiten:**

**1. Methodische Strenge:**
✓ Systematisches Vorgehen nach anerkannten Methoden
✓ Nachvollziehbare Argumentationsschritte
✓ Berücksichtigung des aktuellen Diskussionsstands
✓ Kritische Reflexion der eigenen Methode

**2. Quellenbasis:**
✓ Vollständige Erfassung relevanter Rechtsprechung
✓ Berücksichtigung aller einschlägigen Gesetze
✓ Umfassende Literaturauswertung
✓ Aktualität der verwendeten Quellen

**3. Argumentation:**
✓ Logische Konsistenz der Schlussfolgerungen
✓ Berücksichtigung von Gegenargumenten
✓ Praxistauglichkeit der Lösungsvorschläge
✓ Verhältnismäßigkeit der Ergebnisse

**4. Darstellung:**
✓ Verständliche und präzise Sprache
✓ Systematischer Aufbau
✓ Korrekte Zitierweise
✓ Vollständige Quellenangaben

**Abgrenzung zur Rechtspraxis:**

**Rechtswissenschaft vs. Rechtspraxis:**

| Aspekt | Rechtswissenschaft | Rechtspraxis |
|--------|-------------------|--------------|
| **Ziel** | Erkenntnisgewinn | Problemlösung |
| **Methode** | Systematisch-theoretisch | Pragmatisch-lösungsorientiert |
| **Zeithorizont** | Langfristig | Kurzfristig |
| **Objektivität** | Wissenschaftliche Neutralität | Mandanteninteressen |
| **Qualitätskriterium** | Wissenschaftliche Wahrheit | Praktischer Erfolg |

**Beispiel:**
- **Wissenschaftler:** Entwickelt theoretisches System zur Produkthaftung
- **Praktiker:** Vertritt Mandanten in konkretem Produkthaftungsfall

**Beide Bereiche befruchten sich gegenseitig:**
- Wissenschaft liefert dogmatische Grundlagen
- Praxis stellt neue Fragestellungen und testet Theorien`,
          examples: [
            {
              id: 'ex-5-1-1-1',
              title: 'Wissenschaftliche vs. praktische Fragestellung',
              content: 'Thema: Künstliche Intelligenz und Haftung\n\nWissenschaftliche Fragestellung:\n"Welche dogmatischen Grundlagen sind für die Haftung autonomer Systeme erforderlich und wie fügen sich diese in das bestehende Haftungsrecht ein?"\n\nPraktische Fragestellung:\n"Haftet der Halter eines autonom fahrenden Fahrzeugs für einen Unfall, den das KI-System verursacht hat?"\n\nUnterschied:\n• Wissenschaft: Systematische Theorieerweiterung\n• Praxis: Konkrete Falllösung',
              explanation: 'Wissenschaft entwickelt Theorien und Systematiken, während die Praxis konkrete Fälle löst.'
            }
          ]
        },
        {
          id: 'section-5-1-2',
          title: 'Rechtswissenschaftliche Literatur',
          content: `Die Bewertung und Auswahl rechtswissenschaftlicher Literatur ist eine zentrale Kompetenz.

**Publikationsformen in der Rechtswissenschaft:**

**1. Monographien (Einzelwerke):**
- **Lehrbücher:** Systematische Darstellung eines Rechtsgebiets
- **Handbücher:** Praxisorientierte Gesamtdarstellungen
- **Dissertationen:** Wissenschaftliche Qualifizierungsarbeiten
- **Habilitationen:** Umfassende wissenschaftliche Arbeiten

**Qualitätsindikatoren:**
✓ Renommierter Verlag (Beck, Mohr Siebeck, Nomos)
✓ Peer-Review-Verfahren
✓ Zitationshäufigkeit
✓ Aktualität und Auflagenzahl

**2. Zeitschriftenartikel:**
- **Aufsätze:** Wissenschaftliche Abhandlungen
- **Anmerkungen:** Kommentierung aktueller Rechtsprechung
- **Urteilsbesprechungen:** Kritische Würdigung von Entscheidungen
- **Kurzbeiträge:** Aktuelle Entwicklungen und Trends

**Ranking rechtswissenschaftlicher Zeitschriften:**

**Tier 1 (höchstes Ansehen):**
• **JZ (JuristenZeitung):** Allgemeines Recht
• **AcP (Archiv für die civilistische Praxis):** Zivilrecht
• **JuS (Juristische Schulung):** Ausbildung und Methodik
• **NJW (Neue Juristische Wochenschrift):** Aktuelle Rechtsprechung

**Tier 2 (hohes Ansehen):**
• **ZRP (Zeitschrift für Rechtspolitik):** Rechtspolitik
• **RabelsZ (Rabels Zeitschrift):** Rechtsvergleichung
• **AöR (Archiv des öffentlichen Rechts):** Staatsrecht
• **GA (Goltdammer's Archiv):** Strafrecht

**3. Kommentarliteratur:**
- **Großkommentare:** Ausführliche wissenschaftliche Kommentierung
- **Handkommentare:** Praxisorientierte mittlere Kommentierung
- **Kurzkommentare:** Kompakte Erläuterungen für den Alltag

**Beispiele und Ranking:**

**BGB-Kommentare:**
1. **Staudinger:** Wissenschaftlicher Großkommentar (40+ Bände)
2. **Münchener Kommentar (MüKo BGB):** Führender Handkommentar
3. **Palandt:** Klassischer Kurzkommentar für die Praxis
4. **Beck'scher Onlinekommentar (BeckOK):** Digitaler Handkommentar

**4. Rechtsprechungssammlungen:**
- **Amtliche Sammlungen:** BGHZ, BVerfGE, BAGE
- **Private Sammlungen:** NJW-RR, MDR, AnwBl
- **Spezialisierte Sammlungen:** FamRZ, NZA, BB

**Qualitätsbewertung wissenschaftlicher Literatur:**

**Autor/Autorin bewerten:**
- **Qualifikation:** Professor, Richter, Rechtsanwalt?
- **Spezialisierung:** Experte im behandelten Rechtsgebiet?
- **Reputation:** Bekannte Publikationen, Zitationshäufigkeit?
- **Aktualität:** Berücksichtigung neuester Entwicklungen?

**Inhaltliche Qualitätskriterien:**
✓ **Vollständigkeit:** Alle relevanten Aspekte berücksichtigt?
✓ **Aktualität:** Neueste Rechtsprechung und Literatur eingearbeitet?
✓ **Methodik:** Systematisches Vorgehen erkennbar?
✓ **Argumentation:** Logisch nachvollziehbar und konsistent?
✓ **Praxisbezug:** Umsetzbarkeit der Ergebnisse?

**Formale Qualitätskriterien:**
✓ **Zitierweise:** Korrekte und vollständige Quellenangaben?
✓ **Gliederung:** Logischer und übersichtlicher Aufbau?
✓ **Sprache:** Verständlich und präzise?
✓ **Lektorat:** Fehlerfreie Darstellung?

**Publikationsorte und ihre Bedeutung:**

**Universitätsverlage:**
- **Mohr Siebeck:** Traditioneller Wissenschaftsverlag
- **Nomos:** Interdisziplinäre Rechtswissenschaft
- **Duncker & Humblot:** Staatsrecht und Rechtsphilosophie
- **Peter Lang:** Internationale Dissertationen

**Kommerzielle Verlage:**
- **C.H. Beck:** Marktführer bei Kommentaren
- **Otto Schmidt:** Spezialist für Unternehmensrecht
- **Haufe:** Praxisorientierte Literatur
- **Luchterhand:** Arbeits- und Sozialrecht

**Open Access in der Rechtswissenschaft:**
- **Vor-/Nachteile:** Freier Zugang vs. Qualitätskontrolle
- **Repositories:** SSRN, RePEc, Institutional Repositories
- **Zeitschriften:** Zunehmend hybride Modelle
- **Dissertationen:** Pflicht zur Online-Publikation

**Literaturrecherche-Strategien:**

**1. Systematische Suche:**
Ausgangspunkt → Lehrbuch/Kommentar → Spezialliteratur → Rechtsprechung

**2. Citation Tracing:**
- **Forward Citations:** Wer zitiert diese Quelle?
- **Backward Citations:** Welche Quellen werden zitiert?
- **Co-Citations:** Welche Quellen werden gemeinsam zitiert?

**3. Experten-Strategie:**
- Führende Autoren im Fachgebiet identifizieren
- Deren aktuelle Publikationen verfolgen
- Habilitationen und Festschriften beachten

**4. Interdisziplinäre Suche:**
- Rechtswissenschaft + Nachbardisziplinen
- Empirische Studien berücksichtigen
- Internationale Literatur einbeziehen

**Bewertung der Aktualität:**

**Halbwertszeit rechtswissenschaftlicher Literatur:**
- **Verfassungsrecht:** 10-20 Jahre (grundlegende Prinzipien)
- **Zivilrecht:** 5-10 Jahre (kodifiziertes Recht)
- **Steuerrecht:** 1-3 Jahre (häufige Änderungen)
- **IT-Recht:** 6 Monate - 2 Jahre (technischer Wandel)

**Indikatoren für Veralterung:**
⚠ Keine Berücksichtigung aktueller Rechtsprechung
⚠ Überholte Gesetzeslage (vor wichtigen Reformen)
⚠ Methodische Ansätze nicht mehr zeitgemäß
⚠ Gesellschaftliche Entwicklungen ignoriert`,
          examples: [
            {
              id: 'ex-5-1-2-1',
              title: 'Literaturqualität bewerten',
              content: 'Bewertung einer Dissertation zum Thema "KI-Haftung":\n\nPositive Kriterien:\n✓ Autor promoviert an renommierter Universität\n✓ Betreuer ist anerkannter Experte für Haftungsrecht\n✓ Erschienen bei Mohr Siebeck (Wissenschaftsverlag)\n✓ Umfassende Literaturauswertung (400+ Quellen)\n✓ Berücksichtigung internationaler Entwicklungen\n✓ Praxisnahe Lösungsvorschläge\n\nKritische Punkte:\n⚠ Erscheinungsjahr 2019 (schnelle technische Entwicklung)\n⚠ Wenig empirische Daten\n⚠ Schwerpunkt auf deutschem Recht\n\nBewertung: Hochwertige Grundlagenarbeit, aber Aktualität prüfen',
              explanation: 'Qualitätsbewertung erfordert Betrachtung von Autor, Verlag, Methodik und Aktualität.'
            }
          ]
        }
      ],
      resources: [
        {
          id: 'res-5-1-1',
          title: 'DFG-Leitlinien zur guten wissenschaftlichen Praxis',
          type: 'article',
          url: 'https://www.dfg.de/gwp',
          description: 'Verbindliche Standards für wissenschaftliches Arbeiten'
        },
        {
          id: 'res-5-1-2',
          title: 'Juristische Zitierregeln',
          type: 'article',
          url: '/guides/zitierregeln-recht',
          description: 'Umfassende Anleitung zum korrekten juristischen Zitieren'
        },
        {
          id: 'res-5-1-3',
          title: 'Citavi für Juristen',
          type: 'website',
          url: 'https://www.citavi.com',
          description: 'Professionelle Literaturverwaltung mit juristischen Zitierstilen'
        },
        {
          id: 'res-5-1-4',
          title: 'Plagiatssoftware Turnitin',
          type: 'website',
          url: 'https://www.turnitin.com',
          description: 'Führende Software zur Plagiatserkennung'
        },
        {
          id: 'res-5-1-5',
          title: 'JuS-Lernbogen: Wissenschaftliches Arbeiten',
          type: 'article',
          url: '/jus-lernbogen-wissenschaft',
          description: 'Kompakte Einführung der JuristenZeitung für Studierende'
        },
        {
          id: 'res-5-1-6',
          title: 'Rechtswissenschaft als hermeneutische Disziplin',
          type: 'article',
          url: 'https://www.mohr.de/rechtswissenschaft-hermeneutik',
          description: 'Grundlagentexte zur Methodenlehre der Rechtswissenschaft'
        },
        {
          id: 'res-5-1-2',
          title: 'Ranking rechtswissenschaftlicher Zeitschriften',
          type: 'website',
          url: 'https://www.jurawelt.com/zeitschriften-ranking',
          description: 'Übersicht über die Reputation juristischer Fachzeitschriften'
        }
      ],
      glossary: [
        {
          term: 'Hermeneutik',
          definition: 'Wissenschaft und Kunst der Textauslegung und -interpretation'
        },
        {
          term: 'Rechtsdogmatik',
          definition: 'Systematische Aufbereitung und Darstellung geltenden Rechts'
        },
        {
          term: 'Peer Review',
          definition: 'Wissenschaftliches Begutachtungsverfahren durch Fachkollegen'
        }
      ]
    },
    exercises: [
      {
        id: 'ex-5-1-1',
        type: 'multipleChoice',
        difficulty: 'intermediate',
        points: 3,
        title: 'Wissenschaftliche Methoden',
        description: 'Abgrenzung zwischen wissenschaftlichen und praktischen Ansätzen',
        content: {
          question: 'Was charakterisiert die rechtswissenschaftliche Methode im Gegensatz zur praktischen Rechtsanwendung?',
          options: [
            'Ausschließliche Orientierung an Gerichtsentscheidungen',
            'Systematische Theoriebildung und langfristige Erkenntnisgewinnung',
            'Vorrangige Berücksichtigung von Mandanteninteressen',
            'Verzicht auf Auslegungsmethoden zugunsten pragmatischer Lösungen'
          ]
        },
        solution: {
          correct: 1,
          explanation: 'Rechtswissenschaft zielt auf systematische Theoriebildung und langfristige Erkenntnisgewinnung ab, während die Praxis konkrete Problemlösungen im Mandanteninteresse anstrebt.'
        },
        hints: [
          {
            id: 'hint-5-1-1-1',
            text: 'Denken Sie an den Unterschied zwischen Theorie und Praxis',
            penaltyPoints: 1
          }
        ],
        feedback: {
          correct: 'Richtig! Wissenschaft und Praxis haben unterschiedliche Zielsetzungen.',
          incorrect: 'Überprüfen Sie die Charakteristika wissenschaftlicher Methodik.'
        }
      },
      {
        id: 'ex-5-1-2',
        type: 'dragDrop',
        difficulty: 'intermediate',
        points: 4,
        title: 'Wissenschaftliche Erkenntnisinteressen',
        description: 'Zuordnung der rechtswissenschaftlichen Ansätze',
        content: {
          question: 'Ordnen Sie die Beispiele den richtigen wissenschaftlichen Ansätzen zu:',
          categories: ['Dogmatische Rechtswissenschaft', 'Rechtstatsachenforschung', 'Rechtstheorie', 'Rechtsvergleichung'],
          items: [
            {
              id: 'item1',
              content: 'Kommentierung des § 823 BGB',
              correctCategory: 'Dogmatische Rechtswissenschaft'
            },
            {
              id: 'item2',
              content: 'Statistik zur BGH-Rechtsprechung',
              correctCategory: 'Rechtstatsachenforschung'
            },
            {
              id: 'item3',
              content: 'Allgemeine Rechtslehre von Kelsen',
              correctCategory: 'Rechtstheorie'
            },
            {
              id: 'item4',
              content: 'Common Law vs. Civil Law Analyse',
              correctCategory: 'Rechtsvergleichung'
            },
            {
              id: 'item5',
              content: 'Systematisierung des Schuldrechts',
              correctCategory: 'Dogmatische Rechtswissenschaft'
            },
            {
              id: 'item6',
              content: 'Empirische Studie zu Richterverhalten',
              correctCategory: 'Rechtstatsachenforschung'
            }
          ]
        },
        solution: {
          correct: {
            'Dogmatische Rechtswissenschaft': ['item1', 'item5'],
            'Rechtstatsachenforschung': ['item2', 'item6'],
            'Rechtstheorie': ['item3'],
            'Rechtsvergleichung': ['item4']
          },
          explanation: 'Jeder Ansatz hat spezifische Methoden: Dogmatik systematisiert, Empirie erforscht, Theorie analysiert Grundlagen, Vergleichung untersucht verschiedene Systeme.'
        },
        hints: [
          {
            id: 'hint-5-1-2-1',
            text: 'Dogmatik = Systematisierung, Empirie = Daten, Theorie = Grundlagen, Vergleich = verschiedene Systeme',
            penaltyPoints: 1
          }
        ],
        feedback: {
          correct: 'Excellent! Sie verstehen die verschiedenen wissenschaftlichen Ansätze.',
          incorrect: 'Überprüfen Sie die charakteristischen Methoden der einzelnen Ansätze.'
        }
      },
      {
        id: 'ex-5-1-3',
        type: 'fillInBlanks',
        difficulty: 'intermediate',
        points: 3,
        title: 'Hermeneutischer Zirkel',
        description: 'Verstehen des hermeneutischen Prozesses',
        content: {
          question: 'Vervollständigen Sie die Beschreibung des hermeneutischen Zirkels:',
          template: 'Der hermeneutische Zirkel beginnt mit dem ___, geht über den ___ zur ___ und führt zu einem neuen ___. Bei neuen Erkenntnissen erfolgt eine ___ des Verständnisses.'
        },
        solution: {
          correct: ['Vorverständnis', 'Normtext', 'Interpretation', 'Verständnis', 'Revision'],
          explanation: 'Der hermeneutische Zirkel ist ein kontinuierlicher Prozess der Textauslegung, bei dem sich Verständnis und Interpretation wechselseitig beeinflussen.',
          alternativeAnswers: ['Vorwissen', 'Text', 'Auslegung', 'Verstehen', 'Überarbeitung']
        },
        hints: [
          {
            id: 'hint-5-1-3-1',
            text: 'Denken Sie an den zirkulären Prozess der Rechtserkenntnis',
            penaltyPoints: 1
          }
        ],
        feedback: {
          correct: 'Sehr gut! Sie verstehen die Grundlagen der juristischen Hermeneutik.',
          incorrect: 'Wiederholen Sie die Phasen des hermeneutischen Zirkels.'
        }
      },
      {
        id: 'ex-5-1-4',
        type: 'multipleChoice',
        difficulty: 'advanced',
        points: 4,
        title: 'Methodenpluralismus',
        description: 'Moderne Ansätze der Rechtswissenschaft',
        content: {
          question: 'Welcher Ansatz gehört zu den modernen rechtswissenschaftlichen Methoden?',
          options: [
            'Ausschließlich grammatische Auslegung',
            'Nur historische Rechtsquellen',
            'Ökonomische Analyse des Rechts (Law & Economics)',
            'Verzicht auf empirische Forschung'
          ]
        },
        solution: {
          correct: 2,
          explanation: 'Die ökonomische Analyse des Rechts (Law & Economics) ist ein moderner interdisziplinärer Ansatz, der wirtschaftswissenschaftliche Methoden auf rechtliche Fragen anwendet.'
        },
        hints: [
          {
            id: 'hint-5-1-4-1',
            text: 'Denken Sie an interdisziplinäre Ansätze der modernen Rechtswissenschaft',
            penaltyPoints: 1
          }
        ],
        feedback: {
          correct: 'Richtig! Law & Economics ist ein wichtiger moderner Ansatz.',
          incorrect: 'Überprüfen Sie die modernen interdisziplinären Methoden.'
        }
      },
      {
        id: 'ex-5-1-5',
        type: 'caseAnalysis',
        difficulty: 'advanced',
        points: 8,
        title: 'Wissenschaft vs. Praxis Fallstudie',
        description: 'Analyse der verschiedenen Herangehensweisen',
        content: {
          sachverhalt: 'Thema: Haftung für autonome Fahrzeuge. Ein Wissenschaftler möchte eine Dissertation schreiben, ein Rechtsanwalt muss einen konkreten Unfall bewerten. Beide beschäftigen sich mit derselben rechtlichen Problematik.',
          question: 'Analysieren Sie die unterschiedlichen Herangehensweisen von Wissenschaftler und Praktiker an dieses Thema.'
        },
        solution: {
          correct: 'Unterschiedliche methodische Ansätze erforderlich',
          explanation: 'Wissenschaftler: Systematische Analyse aller Haftungsregeln, historische Entwicklung, Rechtsvergleichung, theoretische Modelle, langfristige Rechtsentwicklung.\n\nPraktiker: Konkreter Sachverhalt, anwendbare Normen (§§ 7, 18 StVG, § 823 BGB), Verschuldensprüfung, Kausalität, Schaden, Durchsetzbarkeit.\n\nUnterschied: Wissenschaft entwickelt Theorien und Systeme, Praxis löst konkrete Fälle.',
          evaluationCriteria: [
            'Klare Abgrenzung der Zielsetzungen',
            'Unterschiedliche Methoden erkannt',
            'Zeithorizont berücksichtigt',
            'Praktische vs. theoretische Relevanz',
            'Qualitätskriterien verstanden'
          ]
        },
        hints: [
          {
            id: 'hint-5-1-5-1',
            text: 'Denken Sie an Zielsetzung, Methode, Zeithorizont und Qualitätskriterien',
            penaltyPoints: 2
          }
        ],
        feedback: {
          correct: 'Exzellente Analyse! Sie verstehen die komplementären Rollen von Wissenschaft und Praxis.',
          incorrect: 'Überprüfen Sie die unterschiedlichen Zielsetzungen und Methoden.'
        }
      },
      {
        id: 'ex-5-1-6',
        type: 'multipleChoice',
        difficulty: 'beginner',
        points: 2,
        title: 'Rechtswissenschaft Grundlagen',
        description: 'Basiseigenschaften der Rechtswissenschaft',
        content: {
          question: 'Was macht die Rechtswissenschaft zu einer hermeneutischen Wissenschaft?',
          options: [
            'Sie verwendet nur empirische Methoden',
            'Sie beschäftigt sich mit der Auslegung und Interpretation von Texten',
            'Sie verzichtet auf systematische Methoden',
            'Sie orientiert sich nur an historischen Quellen'
          ]
        },
        solution: {
          correct: 1,
          explanation: 'Hermeneutik ist die Wissenschaft der Textauslegung. Rechtswissenschaft interpretiert Gesetze, Urteile und andere rechtliche Texte.'
        },
        hints: [
          {
            id: 'hint-5-1-6-1',
            text: 'Hermeneutik = Auslegungskunst',
            penaltyPoints: 0
          }
        ],
        feedback: {
          correct: 'Richtig! Rechtswissenschaft ist im Kern Textauslegung.',
          incorrect: 'Überprüfen Sie die Definition von Hermeneutik.'
        }
      }
    ],
    estimatedMinutes: 1200, // 20 Stunden
    requiredMastery: 80
  },

  // 5.2 Zitieren und Quellenarbeit (20 Stunden)
  {
    id: 'zm2-2-zitieren-quellen',
    moduleId: 'propaedeutikum',
    order: 20,
    title: '5.2 Zitieren und Quellenarbeit',
    objectives: [
      {
        id: 'obj-5-2-1',
        description: 'Juristische Zitierregeln korrekt anwenden',
        bloomLevel: 'apply'
      },
      {
        id: 'obj-5-2-2',
        description: 'Quellen kritisch bewerten und auswählen',
        bloomLevel: 'evaluate'
      },
      {
        id: 'obj-5-2-3',
        description: 'Plagiate erkennen und vermeiden',
        bloomLevel: 'analyze'
      }
    ],
    content: {
      id: 'content-5-2',
      type: 'mixed',
      sections: [
        {
          id: 'section-5-2-1',
          title: 'Juristische Zitierweise',
          content: `Das korrekte Zitieren ist in der Rechtswissenschaft besonders wichtig für Nachprüfbarkeit und Redlichkeit.

**Grundprinzipien des juristischen Zitierens:**

**1. Vollständigkeit:**
- Alle verwendeten Quellen müssen nachweisbar sein
- Präzise Fundstellenangabe
- Unterscheidung zwischen direkten und indirekten Zitaten
- Vollständige bibliographische Angaben

**2. Einheitlichkeit:**
- Konsistente Zitierweise throughout das gesamte Werk
- Einheitliche Abkürzungen verwenden
- Systematische Gliederung der Quellenangaben
- Alphabetische oder chronologische Ordnung

**3. Nachprüfbarkeit:**
- Eindeutige Identifizierung der Quelle
- Seitenzahlen bei Printquellen
- Datum bei Online-Quellen
- Vollständige Gerichtsdaten bei Urteilen

**Juristische Abkürzungen:**

**Wichtigste Abkürzungswerke:**
- **Kirchner:** Abkürzungsverzeichnis der Rechtssprache
- **Duden Recht:** Rechtschreibung und Abkürzungen
- **Beck'sches Rechts-Lexikon:** Online-Abkürzungsverzeichnis

**Häufige Abkürzungen:**
- **a.A.** = anderer Ansicht
- **a.F.** = alte Fassung
- **Anm.** = Anmerkung
- **Aufl.** = Auflage
- **BGH** = Bundesgerichtshof
- **Fn.** = Fußnote
- **h.M.** = herrschende Meinung
- **i.V.m.** = in Verbindung mit
- **m.w.N.** = mit weiteren Nachweisen
- **Rn.** = Randnummer
- **s.** = siehe
- **s.o.** = siehe oben
- **s.u.** = siehe unten
- **str.** = streitig
- **u.a.** = unter anderem/und andere
- **vgl.** = vergleiche
- **z.B.** = zum Beispiel

**Zitierregeln für verschiedene Quellentypen:**

**1. Gesetze und Verordnungen:**

**Standardformat:**
§ 823 Abs. 1 BGB
Art. 12 Abs. 1 S. 1 GG
§ 1 Abs. 2 Nr. 3 lit. a StGB

**Bei Gesetzesänderungen:**
§ 630a BGB a.F. (vor dem 26.2.2013)
§ 630a BGB n.F. (ab 26.2.2013)

**Bei noch nicht in Kraft getretenen Gesetzen:**
§ 15 GDSG-E (Regierungsentwurf v. 15.3.2023)

**2. Rechtsprechung:**

**BGH-Urteile:**
BGH, Urt. v. 12.5.2023 - V ZR 123/22, NJW 2023, 1234.
BGH NJW 2023, 1234 (1236). [bei Seitenangabe]
BGHZ 123, 456 (458). [amtliche Sammlung]

**BVerfG-Entscheidungen:**
BVerfG, Beschl. v. 15.6.2023 - 1 BvR 456/23, NJW 2023, 2345.
BVerfGE 156, 123 (145).

**Instanzgerichte:**
LG München I, Urt. v. 3.4.2023 - 12 O 789/22, BeckRS 2023, 12345.
OLG Frankfurt, Beschl. v. 8.7.2023 - 11 U 234/23, unveröffentlicht.

**3. Literatur:**

**Monographien:**
Larenz/Canaris, Schuldrecht II/2, 13. Aufl. 2009, § 76 III.
Medicus/Petersen, Bürgerliches Recht, 25. Aufl. 2017, Rn. 456.

**Zeitschriftenaufsätze:**
Müller, Die Haftung für KI-Systeme, NJW 2023, 1234 (1237).
Schmidt, in: Festschrift für Meyer, 2023, S. 123 (135).

**Kommentare:**
Palandt/Grüneberg, BGB, 82. Aufl. 2023, § 823 Rn. 45.
MüKoBGB/Wagner, BGB, 8. Aufl. 2020, § 823 Rn. 123.
Staudinger/Hager, BGB, Neubearbeitung 2017, § 823 Rn. 456.

**4. Online-Quellen:**

**Juristische Datenbanken:**
BGH, Urt. v. 12.5.2023 - V ZR 123/22, juris Rn. 45.
LG Berlin, Urt. v. 3.6.2023 - 27 O 234/22, Beck-RS 2023, 12345.

**Websites und Blogs:**
Meyer, Neue Entwicklungen im Datenschutzrecht, verfügbar unter:
https://www.datenschutz-blog.de/artikel/123 (zuletzt abgerufen am 15.8.2023).

**Besonderheiten des juristischen Zitierens:**

**1. Fußnotensystem:**
- Juristische Arbeiten verwenden meist Fußnoten statt Klammer-Zitaten
- Vollzitat bei Erstnennung, Kurzzitat bei Wiederholung
- Ebenda (ebd.) bei unmittelbar aufeinanderfolgenden Zitaten

**Beispiel Vollzitat:**
¹ Larenz/Canaris, Schuldrecht II/2, 13. Aufl. 2009, § 76 III 2 b.

**Beispiel Kurzzitat:**
² Larenz/Canaris (Fn. 1), § 76 III 2 c.

**2. Sekundärzitate vermeiden:**
Falsch: Schmidt, NJW 2023, 1234 (1237), zitiert nach Müller, JZ 2023, 567.
Richtig: Schmidt, NJW 2023, 1234 (1237); Müller, JZ 2023, 567.

**3. Stellungnahmen kennzeichnen:**
So auch: Larenz/Canaris (Fn. 1), § 76 III.
A.A.: Medicus/Petersen (Fn. 2), Rn. 456.
Kritisch: Wagner, AcP 223 (2023), 234 (267).

**Häufige Zitierfehlern vermeiden:**

**❌ Häufige Fehler:**
- Unvollständige Quellenangaben
- Inkonsistente Abkürzungen
- Fehlende Seitenangaben
- Veraltete Auflagenangaben
- Falsche Randnummern

**✅ Korrektes Vorgehen:**
- Immer Originalquelle prüfen
- Aktuelle Auflagen verwenden
- Seitenzahlen doppelt kontrollieren
- Einheitliche Abkürzungen
- Vollständige bibliographische Daten

**Literaturverzeichnis erstellen:**

**Systematische Gliederung:**

I. Gesetze und Verordnungen
   - Grundgesetz
   - Bundesgesetze (alphabetisch)
   - Landesgesetze
   - Verordnungen
   - EU-Recht

II. Rechtsprechung
    - Bundesverfassungsgericht
    - Bundesgerichtshof
    - Weitere Bundesgerichte
    - Oberlandesgerichte
    - Landgerichte
    - EU-Rechtsprechung

III. Literatur
     - Monographien (alphabetisch nach Verfassern)
     - Zeitschriftenaufsätze
     - Kommentare
     - Festschriften und Sammelbände

IV. Internetquellen
    - Websites
    - Online-Datenbanken
    - Blogs und soziale Medien

**Beispiel Literaturverzeichnis-Eintrag:**
Canaris, Claus-Wilhelm: Grundrechte und Privatrecht, AcP 184 (1984), S. 201-246.

Larenz, Karl/Canaris, Claus-Wilhelm: Schuldrecht, Band II: Halbband 2: Besonderer Teil, 13. Auflage, München 2009.

Palandt, Otto (Begr.): Bürgerliches Gesetzbuch mit Nebengesetzen, 82. Auflage, München 2023.`,
          examples: [
            {
              id: 'ex-5-2-1-1',
              title: 'Zitierweise-Beispiele',
              content: 'Korrekte Zitation verschiedener Quellen:\n\n1. BGH-Urteil:\nBGH, Urt. v. 15.3.2023 - II ZR 234/22, NJW 2023, 1456 (1458).\n\n2. Kommentar:\nMüKoBGB/Wagner, BGB, 8. Aufl. 2020, § 823 Rn. 145.\n\n3. Zeitschriftenaufsatz:\nSchmidt, Die Entwicklung der Produzentenhaftung, JZ 2023, 567 (570).\n\n4. Gesetz:\n§ 823 Abs. 1 BGB i.V.m. § 1 ProdHaftG.\n\n5. Online-Quelle:\nBMJ, Referentenentwurf GDSG, verfügbar unter: www.bmj.de/gesetze (zuletzt abgerufen am 1.8.2023).',
              explanation: 'Jede Quellenart hat spezifische Zitierregeln, die konsistent angewendet werden müssen.'
            }
          ]
        },
        {
          id: 'section-5-2-2',
          title: 'Plagiatsvermeidung und wissenschaftliche Redlichkeit',
          content: `Wissenschaftliche Redlichkeit ist das Fundament seriöser rechtswissenschaftlicher Arbeit.

**Was ist ein Plagiat?**

**Definition:**
Ein Plagiat liegt vor, wenn fremde Gedanken, Formulierungen oder Ideen ohne entsprechende Kennzeichnung als eigene ausgegeben werden.

**Arten von Plagiaten:**

**1. Vollplagiat:**
- Komplette Übernahme fremder Texte
- Abschreiben ganzer Passagen ohne Quellenangabe
- Copy-Paste aus Internetquellen
- Ghostwriting (fremde Erstellung der Arbeit)

**2. Teilplagiat:**
- Übernahme einzelner Abschnitte oder Kapitel
- Mosaikartiges Zusammenfügen verschiedener Quellen
- Paraphrasierung ohne Quellenangabe
- Strukturplagiat (Übernahme der Gliederung)

**3. Selbstplagiat:**
- Mehrfachverwertung eigener Texte
- Wiederholung ohne Verweis auf Erstpublikation
- Doppeleinreichung derselben Arbeit
- Recycling von Textbausteinen

**4. Zitatplagiat:**
- Falsche oder erfundene Quellenangaben
- Zitate aus zweiter Hand ohne Kennzeichnung
- Übernahme von Zitaten ohne Originalprüfung
- Manipulation von Quellenangaben

**Rechtliche Konsequenzen:**

**Hochschulrecht:**
- Aberkennung von akademischen Graden
- Exmatrikulation
- Verweis von der Hochschule
- Berufsverbot in bestimmten Bereichen

**Urheberrecht (§§ 15 ff. UrhG):**
- Unterlassungsansprüche
- Schadensersatzforderungen
- Strafverfahren (§ 106 UrhG)
- Lizenzschadensersatz

**Berufsrecht:**
- Disziplinarverfahren
- Entzug der Anwaltszulassung
- Rufschädigung
- Karriereende

**Plagiatsvermeidung durch korrekte Techniken:**

**1. Direktes Zitat:**
Wie Larenz/Canaris zutreffend feststellen: "Die Haftung nach § 823 Abs. 1 BGB setzt einen Eingriff in ein absolut geschütztes Rechtsgut voraus."¹

¹ Larenz/Canaris, Schuldrecht II/2, 13. Aufl. 2009, § 75 I 1.

**2. Indirektes Zitat (Paraphrase):**
Nach Ansicht von Larenz/Canaris ist für die Haftung nach § 823 Abs. 1 BGB die Verletzung eines absolut geschützten Rechtsguts erforderlich.¹

¹ Vgl. Larenz/Canaris, Schuldrecht II/2, 13. Aufl. 2009, § 75 I 1.

**3. Gedankenübernahme:**
Die in der Literatur vertretene Auffassung, wonach § 823 Abs. 1 BGB nur absolut geschützte Rechtsgüter erfasst,¹ ist dogmatisch überzeugend.

¹ Larenz/Canaris, Schuldrecht II/2, 13. Aufl. 2009, § 75 I 1; MüKoBGB/Wagner, § 823 Rn. 45.

**4. Strukturübernahme kennzeichnen:**
Für die folgende Darstellung wird der systematische Ansatz von Medicus/Petersen zugrunde gelegt.¹

¹ Medicus/Petersen, Bürgerliches Recht, 25. Aufl. 2017, Rn. 456 ff.

**Grenzfälle und Zweifelsfragen:**

**1. Allgemeinwissen:**
Nicht zitierpflichtig: "Das BGB trat 1900 in Kraft."
Zitierpflichtig: "Die Entstehungsgeschichte des § 242 BGB zeigt..."

**2. Methodische Ansätze:**
Nicht zitierpflichtig: "Zunächst ist zu prüfen..."
Zitierpflichtig: "Nach der von Canaris entwickelten Methode..."

**3. Rechtsprechungsdarstellung:**
Zitierpflichtig: Alle Gerichtsentscheidungen mit genauer Fundstelle
Auch bei "ständiger Rechtsprechung": Beispielurteil angeben

**Plagiatsprüfung und -erkennung:**

**Software-Tools:**
- **Turnitin:** Marktführer im akademischen Bereich
- **PlagScan:** Deutsche Alternative mit DSGVO-Konformität
- **Copyscape:** Webbasierte Plagiatsprüfung
- **Plagscan:** Speziell für Hochschulen entwickelt

**Manuelle Prüfmethoden:**
- Stilwechsel in der Sprache erkennen
- Verdächtige Formulierungen googeln
- Quellenangaben auf Plausibilität prüfen
- Fachterminologie auf Konsistenz überprüfen

**Präventive Maßnahmen:**

**Während der Recherche:**
✓ Sofortige Quellennotation bei jeder Information
✓ Eindeutige Kennzeichnung von Zitaten in Notizen
✓ Vollständige bibliographische Daten sammeln
✓ Screenshots/Kopien von Online-Quellen anfertigen

**Beim Schreiben:**
✓ "Im Zweifel zitieren"-Regel befolgen
✓ Regelmäßige Selbstprüfung der Quellenangaben
✓ Einheitliche Zitierweise von Anfang an
✓ Eigene Gedanken klar von fremden abgrenzen

**Bei der Überarbeitung:**
✓ Vollständigkeit aller Quellenangaben prüfen
✓ Konsistenz der Zitierweise kontrollieren
✓ Literaturverzeichnis mit Zitaten abgleichen
✓ Plagiatsprüfung mit Software durchführen

**Wissenschaftliche Ethik:**

**Grundprinzipien:**
1. **Wahrhaftigkeit:** Keine Erfindung oder Verfälschung von Daten
2. **Nachprüfbarkeit:** Vollständige und korrekte Quellenangaben
3. **Originalität:** Kennzeichnung aller fremden Beiträge
4. **Fairness:** Angemessene Würdigung fremder Leistungen

**Grauzonen vermeiden:**
- Bei Unsicherheit: Lieber zitieren als riskieren
- Mehrere Quellen für wichtige Aussagen
- Eigene Interpretation klar von Quellen abgrenzen
- Beratung durch Betreuer bei Zweifelsfällen

**Internationale Standards:**
- Committee on Publication Ethics (COPE)
- International Committee of Medical Journal Editors (ICMJE)
- Deutsche Forschungsgemeinschaft (DFG) - Leitlinien
- European Science Foundation (ESF) - Good Practice

**Musterformulierungen für korrekte Quellenarbeit:**

**Zustimmung ausdrücken:**
"Zutreffend weist Schmidt darauf hin, dass..."¹
"Wie Wagner überzeugend darlegt..."²
"Der Ansatz von Müller ist sachgerecht..."³

**Kritik äußern:**
"Gegen die Auffassung von Schmidt spricht jedoch..."¹
"Die von Wagner vertretene These ist problematisch, weil..."²
"Müller übersieht dabei, dass..."³

**Neutrale Darstellung:**
"Schmidt vertritt die Ansicht, dass..."¹
"Nach Wagner ist zu berücksichtigen, dass..."²
"Müller unterscheidet zwischen..."³`,
          examples: [
            {
              id: 'ex-5-2-2-1',
              title: 'Plagiatsvermeidung in der Praxis',
              content: 'Beispiel einer korrekten Quellenarbeit:\n\nOriginaltext (Schmidt, NJW 2023, 567):\n"Die Haftung für autonome Fahrzeuge erfordert eine Neukonzeption des Verschuldensprinzips."\n\n❌ Plagiat:\n"Die Haftung für autonome Fahrzeuge erfordert eine Neukonzeption des Verschuldensprinzips."\n\n✅ Direktes Zitat:\n"Wie Schmidt zutreffend feststellt: \'Die Haftung für autonome Fahrzeuge erfordert eine Neukonzeption des Verschuldensprinzips.\'¹"\n\n✅ Indirektes Zitat:\n"Schmidt weist darauf hin, dass die Haftung für autonome Fahrzeuge eine grundlegende Überarbeitung des Verschuldensprinzips notwendig macht.¹"\n\n¹ Schmidt, NJW 2023, 567 (568).',
              explanation: 'Jede Übernahme fremder Gedanken muss durch korrekte Zitation kenntlich gemacht werden.'
            }
          ]
        }
      ],
      resources: [
        {
          id: 'res-5-2-1',
          title: 'Kirchner - Abkürzungsverzeichnis der Rechtssprache',
          type: 'book',
          url: 'https://www.degruyter.com/kirchner',
          description: 'Standardwerk für juristische Abkürzungen'
        },
        {
          id: 'res-5-2-2',
          title: 'DFG-Leitlinien zur Sicherung guter wissenschaftlicher Praxis',
          type: 'article',
          url: 'https://www.dfg.de/gute-wissenschaftliche-praxis',
          description: 'Offizielle Richtlinien zur wissenschaftlichen Redlichkeit'
        }
      ],
      glossary: [
        {
          term: 'Plagiat',
          definition: 'Ungekennzeichnete Übernahme fremder geistiger Leistungen als eigene'
        },
        {
          term: 'Sekundärzitat',
          definition: 'Zitat einer Quelle, die nicht im Original eingesehen wurde'
        },
        {
          term: 'Vollzitat',
          definition: 'Erste vollständige Quellenangabe mit allen bibliographischen Daten'
        }
      ]
    },
    exercises: [
      {
        id: 'ex-5-2-1',
        type: 'fillInBlanks',
        difficulty: 'intermediate',
        points: 4,
        title: 'Korrekte Zitierweise',
        description: 'Vervollständigen Sie die juristischen Zitate',
        content: {
          question: 'Vervollständigen Sie die folgenden Zitate nach den Regeln der juristischen Zitierweise:',
          template: '1. BGH-Urteil: BGH, Urt. v. 15.3.2023 - II ZR 234/22, ___ 2023, 1456.\n2. Kommentar: ___/Wagner, BGB, 8. Aufl. 2020, § 823 ___ 145.\n3. Gesetz: § 823 ___ 1 BGB i.V.m. § 1 ProdHaftG.\n4. Zeitschrift: Schmidt, Die Produzentenhaftung, ___ 2023, 567 (570).'
        },
        solution: {
          correct: ['NJW', 'MüKoBGB', 'Rn.', 'Abs.', 'JZ'],
          explanation: 'Juristische Zitate folgen festen Regeln: NJW für Neue Juristische Wochenschrift, MüKoBGB für Münchener Kommentar, Rn. für Randnummer, Abs. für Absatz, JZ für JuristenZeitung.'
        },
        hints: [
          {
            id: 'hint-5-2-1-1',
            text: 'Verwenden Sie die Standardabkürzungen für Zeitschriften und Kommentare',
            penaltyPoints: 1
          }
        ],
        feedback: {
          correct: 'Excellent! Sie beherrschen die juristische Zitierweise.',
          incorrect: 'Überprüfen Sie die Standardabkürzungen der juristischen Literatur.'
        }
      },
      {
        id: 'ex-5-2-2',
        type: 'multipleChoice',
        difficulty: 'beginner',
        points: 2,
        title: 'Plagiat erkennen',
        description: 'Identifikation problematischer Textpassagen',
        content: {
          question: 'Welche der folgenden Textpassagen stellt ein Plagiat dar?',
          options: [
            '"Nach Larenz/Canaris ist das Schuldrecht systematisch zu gliedern."¹',
            'Das Schuldrecht ist systematisch zu gliedern (vgl. Larenz/Canaris, § 1 I).',
            'Das Schuldrecht ist systematisch zu gliedern.',
            'Wie die herrschende Meinung zutreffend annimmt, ist das Schuldrecht systematisch zu gliedern.²'
          ]
        },
        solution: {
          correct: 2,
          explanation: 'Option 3 übernimmt eine fremde Aussage ohne jede Quellenangabe und stellt damit ein Plagiat dar. Alle anderen Optionen kennzeichnen die Quelle korrekt.'
        },
        hints: [
          {
            id: 'hint-5-2-2-1',
            text: 'Achten Sie auf fehlende Quellenangaben',
            penaltyPoints: 0
          }
        ],
        feedback: {
          correct: 'Richtig! Jede fremde Aussage muss durch Quellenangabe kenntlich gemacht werden.',
          incorrect: 'Überprüfen Sie, welche Passage keine Quellenangabe enthält.'
        }
      },
      {
        id: 'ex-5-2-3',
        type: 'dragDrop',
        difficulty: 'intermediate',
        points: 5,
        title: 'Literaturverzeichnis strukturieren',
        description: 'Korrekte Gliederung des Literaturverzeichnisses',
        content: {
          question: 'Ordnen Sie die Einträge den richtigen Abschnitten des Literaturverzeichnisses zu:',
          categories: ['I. Gesetze', 'II. Rechtsprechung', 'III. Literatur', 'IV. Internetquellen'],
          items: [
            {
              id: 'item1',
              content: 'BGH, Urt. v. 12.5.2023 - V ZR 123/22, NJW 2023, 1234',
              correctCategory: 'II. Rechtsprechung'
            },
            {
              id: 'item2',
              content: '§ 823 BGB',
              correctCategory: 'I. Gesetze'
            },
            {
              id: 'item3',
              content: 'Larenz/Canaris, Schuldrecht II/2, 13. Aufl. 2009',
              correctCategory: 'III. Literatur'
            },
            {
              id: 'item4',
              content: 'BMJ, Referentenentwurf, www.bmj.de (abgerufen am 1.8.2023)',
              correctCategory: 'IV. Internetquellen'
            },
            {
              id: 'item5',
              content: 'Art. 12 Abs. 1 GG',
              correctCategory: 'I. Gesetze'
            },
            {
              id: 'item6',
              content: 'Schmidt, Neue Entwicklungen, JZ 2023, 567',
              correctCategory: 'III. Literatur'
            }
          ]
        },
        solution: {
          correct: {
            'I. Gesetze': ['item2', 'item5'],
            'II. Rechtsprechung': ['item1'],
            'III. Literatur': ['item3', 'item6'],
            'IV. Internetquellen': ['item4']
          },
          explanation: 'Systematische Gliederung: Gesetze, dann Rechtsprechung, dann Literatur (Bücher und Aufsätze), schließlich Internetquellen.'
        },
        hints: [
          {
            id: 'hint-5-2-3-1',
            text: 'Orientieren Sie sich an der Standard-Hierarchie: Gesetze → Urteile → Bücher/Aufsätze → Internet',
            penaltyPoints: 1
          }
        ],
        feedback: {
          correct: 'Perfekt! Sie beherrschen die systematische Gliederung von Literaturverzeichnissen.',
          incorrect: 'Überprüfen Sie die klassische Reihenfolge der Quellentypen.'
        }
      },
      {
        id: 'ex-5-2-4',
        type: 'caseAnalysis',
        difficulty: 'advanced',
        points: 8,
        title: 'Plagiatsvermeidung Praxisfall',
        description: 'Entwicklung einer Zitierstrategie',
        content: {
          sachverhalt: 'Student S schreibt eine Hausarbeit über "Haftung für KI-Systeme". Er findet einen sehr gut passenden Aufsatz von Prof. Müller, der exakt seine Argumentation vorwegnimmt. S möchte die Hauptargumente verwenden, aber eigenständig formulieren und durch eigene Beispiele ergänzen.',
          question: 'Entwickeln Sie eine Strategie für S, wie er den Aufsatz korrekt nutzen kann, ohne zu plagiieren.'
        },
        solution: {
          correct: 'Korrekte Zitier- und Verarbeitungsstrategie erforderlich',
          explanation: '1. Transparente Darstellung: "Die folgende Argumentation folgt dem Ansatz von Müller..."\n2. Indirekte Zitate mit korrekten Verweisen: "Nach Müller ist zu berücksichtigen, dass..."\n3. Eigene Beispiele und Ergänzungen klar markieren: "Ergänzend ist zu bemerken..."\n4. Kritische Auseinandersetzung: "Müllers Ansatz ist überzeugend, jedoch..."\n5. Zusammenfassung mit eigenem Fazit\n6. Vollständige Quellenangabe im Literaturverzeichnis',
          evaluationCriteria: [
            'Transparente Kennzeichnung der Quelle',
            'Korrekte indirekte Zitation',
            'Eigenständige Ergänzungen erkennbar',
            'Kritische Würdigung statt bloßer Übernahme',
            'Vollständige Quellenangaben'
          ]
        },
        hints: [
          {
            id: 'hint-5-2-4-1',
            text: 'Transparenz, indirekte Zitation und eigene Ergänzungen sind der Schlüssel',
            penaltyPoints: 2
          }
        ],
        feedback: {
          correct: 'Exzellente Strategie! Sie verstehen, wie fremde Gedanken korrekt verarbeitet werden.',
          incorrect: 'Überprüfen Sie die Prinzipien der korrekten Quellenverarbeitung.'
        }
      },
      {
        id: 'ex-5-2-5',
        type: 'multipleChoice',
        difficulty: 'intermediate',
        points: 3,
        title: 'Zeitschriften-Ranking',
        description: 'Bewertung rechtswissenschaftlicher Publikationen',
        content: {
          question: 'Welche Zeitschrift hat in der deutschen Rechtswissenschaft das höchste Ansehen?',
          options: [
            'BRAK-Mitteilungen',
            'JuristenZeitung (JZ)',
            'Anwaltsblatt (AnwBl)',
            'Legal Tribune Online (LTO)'
          ]
        },
        solution: {
          correct: 1,
          explanation: 'Die JuristenZeitung (JZ) gilt als eine der renommiertesten rechtswissenschaftlichen Zeitschriften in Deutschland mit höchster wissenschaftlicher Reputation.'
        },
        hints: [
          {
            id: 'hint-5-2-5-1',
            text: 'Denken Sie an traditionelle wissenschaftliche Publikationen',
            penaltyPoints: 1
          }
        ],
        feedback: {
          correct: 'Richtig! Die JZ ist ein Tier-1-Journal der deutschen Rechtswissenschaft.',
          incorrect: 'Überprüfen Sie die Reputation klassischer wissenschaftlicher Zeitschriften.'
        }
      },
      {
        id: 'ex-5-2-6',
        type: 'fillInBlanks',
        difficulty: 'advanced',
        points: 5,
        title: 'Abkürzungen beherrschen',
        description: 'Juristische Standardabkürzungen',
        content: {
          question: 'Vervollständigen Sie die juristischen Abkürzungen:',
          template: '___= anderer Ansicht, ___= herrschende Meinung, ___= mit weiteren Nachweisen, ___= in Verbindung mit, ___= zum Beispiel'
        },
        solution: {
          correct: ['a.A.', 'h.M.', 'm.w.N.', 'i.V.m.', 'z.B.'],
          explanation: 'Diese Standardabkürzungen werden in der juristischen Literatur regelmäßig verwendet und müssen korrekt beherrscht werden.',
          alternativeAnswers: ['a.A', 'h.M', 'm.w.N', 'i.V.m', 'z.B']
        },
        hints: [
          {
            id: 'hint-5-2-6-1',
            text: 'Alle Abkürzungen enden mit Punkten',
            penaltyPoints: 1
          }
        ],
        feedback: {
          correct: 'Sehr gut! Sie beherrschen die wichtigsten juristischen Abkürzungen.',
          incorrect: 'Überprüfen Sie die Standardabkürzungen in Kirchner oder einem Rechtslexikon.'
        }
      }
    ],
    estimatedMinutes: 1200, // 20 Stunden
    requiredMastery: 85
  },

  // 5.3 Wissenschaftliche Texte verfassen (20 Stunden)
  {
    id: 'zm2-3-wissenschaftliche-texte',
    moduleId: 'propaedeutikum',
    order: 21,
    title: '5.3 Wissenschaftliche Texte verfassen',
    objectives: [
      {
        id: 'obj-5-3-1',
        description: 'Wissenschaftliche Hausarbeiten strukturiert verfassen',
        bloomLevel: 'create'
      },
      {
        id: 'obj-5-3-2',
        description: 'Argumentation logisch aufbauen und entwickeln',
        bloomLevel: 'create'
      },
      {
        id: 'obj-5-3-3',
        description: 'Wissenschaftlichen Sprachstil angemessen verwenden',
        bloomLevel: 'apply'
      }
    ],
    content: {
      id: 'content-5-3',
      type: 'mixed',
      sections: [
        {
          id: 'section-5-3-1',
          title: 'Aufbau wissenschaftlicher Arbeiten',
          content: `Eine systematische Struktur ist das Fundament erfolgreicher rechtswissenschaftlicher Arbeiten.

**Standardstruktur einer juristischen Hausarbeit:**

**1. Titelseite:**
- Vollständiger Titel der Arbeit
- Name und Matrikelnummer des Verfassers
- Semesterangabe und Fachbereich
- Name des Betreuers/Dozenten
- Abgabedatum

**2. Inhaltsverzeichnis:**
Inhaltsverzeichnis

A. Einleitung ......................................... 3
   I. Problemstellung ................................. 3
   II. Gang der Untersuchung ......................... 4

B. Hauptteil ......................................... 5
   I. Rechtliche Grundlagen .......................... 5
      1. Gesetzliche Regelungen ...................... 5
      2. Rechtsprechungsstand ........................ 7
   II. Problemanalyse ................................ 9
      1. Erste Streitfrage .......................... 9
      2. Zweite Streitfrage ........................ 12
   III. Lösungsansätze .............................. 15

C. Schluss .......................................... 18
   I. Zusammenfassung der Ergebnisse ................ 18
   II. Ausblick ..................................... 19

Literaturverzeichnis ................................ 20

**3. Einleitung (5-10% der Arbeit):**

**Aufgaben der Einleitung:**
- **Hinführung zum Thema:** Warum ist das Thema relevant?
- **Problemstellung:** Welche Rechtsfrage soll beantwortet werden?
- **Abgrenzung:** Was wird NICHT behandelt?
- **Methodik:** Wie wird vorgegangen?
- **Gang der Untersuchung:** Überblick über die Kapitel

**Beispiel einer gelungenen Einleitung:**
Die zunehmende Digitalisierung führt zu neuen Haftungsfragen, insbesondere beim Einsatz künstlicher Intelligenz. Die vorliegende Arbeit untersucht, ob und unter welchen Voraussetzungen eine Haftung für Schäden durch autonome KI-Systeme nach geltendem Recht möglich ist.

Dabei werden zunächst die bestehenden Haftungsnormen dargestellt (B.I.), bevor die spezifischen Probleme der KI-Haftung analysiert werden (B.II.). Abschließend werden Lösungsansätze für eine angemessene Haftungsverteilung entwickelt (B.III.).

Die Untersuchung beschränkt sich auf die deliktsrechtliche Haftung nach § 823 BGB und klammert vertragsrechtliche Aspekte bewusst aus.

**4. Hauptteil (80-85% der Arbeit):**

**Systematischer Aufbau:**
- **Deduktive Methode:** Vom Allgemeinen zum Besonderen
- **Logische Argumentationskette:** Jeder Punkt baut auf dem vorherigen auf
- **Gleichgewichtete Kapitel:** Keine zu kurzen oder zu langen Abschnitte
- **Zwischenfazite:** Kurze Zusammenfassungen nach größeren Abschnitten

**Argumentationsstrukturen:**

**These-Antithese-Synthese:**
1. These: Herrschende Meinung darstellen
2. Antithese: Gegenmeinungen und Kritik
3. Synthese: Eigene Bewertung und Lösung

**Pro-Contra-Abwägung:**
1. Argumente für Position A
2. Argumente für Position B
3. Bewertung und Entscheidung

**Chronologische Entwicklung:**
1. Historische Entstehung
2. Aktuelle Rechtslage
3. Zukunftsperspektiven

**5. Schluss (5-10% der Arbeit):**

**Elemente des Schlusses:**
- **Zusammenfassung:** Wichtigste Ergebnisse rekapitulieren
- **Bewertung:** Kritische Würdigung der Ergebnisse
- **Ausblick:** Offene Fragen und weitere Forschung
- **Praktische Relevanz:** Bedeutung für die Praxis

**Beispiel eines strukturierten Schlusses:**
Die Untersuchung hat gezeigt, dass das geltende Haftungsrecht nur bedingt geeignet ist, die Risiken autonomer KI-Systeme angemessen zu verteilen. Insbesondere die Verschuldensabhängigkeit des § 823 BGB erweist sich als problematisch.

Als Lösungsansatz wird eine verschuldensunabhängige Gefährdungshaftung vorgeschlagen, die durch eine obligatorische Versicherung flankiert werden sollte. Dies würde sowohl den Opferschutz als auch die Innovationsförderung berücksichtigen.

Weiterer Forschungsbedarf besteht hinsichtlich der internationalen Harmonisierung der KI-Haftung und der Entwicklung technischer Standards.

**Gliederungsprinzipien:**

**1. Dezimalklassifikation:**
1. Hauptkapitel
   1.1 Unterkapitel
      1.1.1 Unterpunkt
      1.1.2 Unterpunkt
   1.2 Unterkapitel
2. Hauptkapitel

**2. Alphanumerische Gliederung (juristisch üblich):**
A. Hauptkapitel
   I. Unterkapitel
      1. Unterpunkt
         a) Detailpunkt
         b) Detailpunkt
      2. Unterpunkt
   II. Unterkapitel
B. Hauptkapitel

**Formale Anforderungen:**

**Seitenlayout:**
- **Schriftart:** Times New Roman 12pt oder Arial 11pt
- **Zeilenabstand:** 1,5-fach im Fließtext
- **Seitenränder:** Links 3 cm, rechts 2,5 cm, oben/unten 2,5 cm
- **Seitennummerierung:** Römisch (Verzeichnisse), arabisch (Haupttext)

**Überschriften:**
- **Konsistente Formatierung:** Einheitliche Schriftgrößen
- **Hierarchische Gestaltung:** Hauptkapitel größer als Unterkapitel
- **Keine Unterstreichungen:** Nur Fettdruck oder Kursiv
- **Nummerierung:** Entsprechend der Gliederungsebene

**Absätze und Textfluss:**
- **Ein Gedanke pro Absatz:** Klare thematische Abgrenzung
- **Übergangsätze:** Verbindung zwischen Absätzen
- **Angemessene Absatzlänge:** 3-8 Sätze pro Absatz
- **Blocksatz mit Silbentrennung:** Professionelles Erscheinungsbild`,
          examples: [
            {
              id: 'ex-5-3-1-1',
              title: 'Gliederungsbeispiel',
              content: 'Beispiel einer systematischen Gliederung zum Thema "Haftung für KI-Systeme":\n\nA. Einleitung\n   I. Problemstellung\n   II. Gang der Untersuchung\n\nB. Rechtliche Grundlagen\n   I. Deliktsrecht (§§ 823 ff. BGB)\n      1. Verschuldenshaftung\n      2. Gefährdungshaftung\n   II. Produkthaftung\n      1. ProdHaftG\n      2. Vertragliche Haftung\n\nC. KI-spezifische Probleme\n   I. Zurechnungsproblematik\n   II. Verschuldensnachweis\n   III. Kausalitätsprobleme\n\nD. Lösungsansätze\n   I. De lege lata\n   II. Reformvorschläge\n\nE. Schluss',
              explanation: 'Eine systematische Gliederung folgt dem Prinzip: Problem → Grundlagen → Analyse → Lösung.'
            }
          ]
        },
        {
          id: 'section-5-3-2',
          title: 'Wissenschaftlicher Sprachstil',
          content: `Der wissenschaftliche Sprachstil unterscheidet sich deutlich von der Alltagssprache und folgt besonderen Regeln.

**Charakteristika des wissenschaftlichen Schreibens:**

**1. Objektivität:**
- Sachliche, unpersönliche Darstellung
- Vermeidung von Ich-Form und subjektiven Wertungen
- Trennung zwischen Darstellung und Bewertung
- Nachprüfbare Argumentation

**Beispiele:**

❌ Subjektiv: "Ich finde, dass § 823 BGB ungerecht ist."
✅ Objektiv: "§ 823 BGB wird in der Literatur kritisiert."

❌ Emotional: "Es ist skandalös, dass..."
✅ Sachlich: "Problematisch erscheint, dass..."


**2. Präzision:**
- Exakte Begriffsdefinitionen
- Eindeutige Formulierungen
- Vermeidung von Mehrdeutigkeiten
- Fachterminologie korrekt verwenden

**Juristische Fachsprache:**

✅ "Der Anspruch ist entstanden und nicht erloschen."
❌ "Es gibt einen Anspruch."

✅ "Die Voraussetzungen des § 823 Abs. 1 BGB sind erfüllt."
❌ "§ 823 BGB passt hier."


**3. Logische Stringenz:**
- Klare Argumentationsketten
- Nachvollziehbare Schlussfolgerungen
- Konsistente Begriffsverwedung
- Systematischer Aufbau

**4. Angemessene Komplexität:**
- Differenzierte Darstellung komplexer Sachverhalte
- Berücksichtigung verschiedener Aspekte
- Angemessene Länge der Sätze
- Präzise Wortwahl

**Stilistische Regeln:**

**1. Tempus:**
- **Präsens:** Für allgemeingültige Aussagen und geltendes Recht
- **Präteritum:** Für historische Entwicklungen und vergangene Ereignisse
- **Perfekt:** Für abgeschlossene Vorgänge mit Gegenwartsbezug

**Beispiele:**

Präsens: "§ 242 BGB verpflichtet zur Rücksichtnahme."
Präteritum: "Das RGericht entschied 1925, dass..."
Perfekt: "Der BGH hat seine Rechtsprechung geändert."


**2. Modus:**
- **Indikativ:** Für Tatsachenbehauptungen
- **Konjunktiv I:** Für indirekte Rede
- **Konjunktiv II:** Für Hypothesen und Möglichkeiten

**Beispiele:**

Indikativ: "Der BGH wendet § 823 BGB an."
Konjunktiv I: "Schmidt behauptet, der BGH wende § 823 BGB falsch an."
Konjunktiv II: "Würde man § 823 BGB extensiv auslegen, ergäbe sich..."


**3. Passiv vs. Aktiv:**
- **Aktiv bevorzugen:** Klarere und direktere Darstellung
- **Passiv sparsam verwenden:** Nur wenn Handelnder unwichtig oder unbekannt

**Beispiele:**

✅ Aktiv: "Der BGH entschied..."
❌ Passiv: "Es wurde entschieden..."

✅ Passiv: "Das Gesetz wurde 2019 novelliert." (Wer unwichtig)


**Häufige Formulierungsmuster:**

**1. Meinungswiedergabe:**

"Schmidt vertritt die Auffassung, dass..."
"Nach Ansicht von Müller..."
"Wagner wendet ein, dass..."
"Wie Meier zutreffend ausführt..."
"Gegen diese Auffassung spricht..."


**2. Eigene Stellungnahme:**

"Vorzuziehen ist die Ansicht, dass..."
"Überzeugend ist der Ansatz von..."
"Problematisch erscheint..."
"Zu Recht wird darauf hingewiesen, dass..."
"Nicht zu folgen ist der Auffassung..."


**3. Übergangsformulierungen:**

"Darüber hinaus ist zu berücksichtigen..."
"Im Gegensatz dazu..."
"Daraus folgt..."
"Allerdings ist einzuwenden..."
"Zusammenfassend lässt sich feststellen..."


**4. Grad der Sicherheit ausdrücken:**

Sicher: "Es steht fest, dass..."
Wahrscheinlich: "Es spricht vieles dafür, dass..."
Möglich: "Denkbar wäre..."
Unsicher: "Fraglich erscheint..."
Ablehnend: "Nicht zu überzeugen vermag..."


**Häufige Sprachfehler vermeiden:**

**1. Umgangssprache:**

❌ "Das kriegt man nicht hin."
✅ "Dies ist nicht durchführbar."

❌ "Das ist total wichtig."
✅ "Dies ist von erheblicher Bedeutung."


**2. Füllwörter:**

❌ "Es ist ja wohl klar, dass..."
✅ "Es ist evident, dass..."

❌ "Eigentlich müsste man sagen..."
✅ "Zutreffend ist..."


**3. Modalpartikel:**

❌ "Das ist halt problematisch."
✅ "Dies erweist sich als problematisch."

❌ "Man könnte mal schauen..."
✅ "Es ist zu prüfen..."


**4. Anglizismen (sparsam verwenden):**

❌ "Das Urteil ist state of the art."
✅ "Das Urteil entspricht dem aktuellen Stand."

✅ "Legal Tech" (etablierter Begriff)
❌ "Shitstorm" (unprofessionell)


**Textdichte und Lesbarkeit:**

**Satzlänge:**
- **Durchschnitt:** 15-20 Wörter pro Satz
- **Maximum:** 30 Wörter
- **Variation:** Kurze und längere Sätze abwechseln

**Satzstruktur:**

✅ Gut: "Der BGH entschied zutreffend, dass § 823 BGB auch bei mittelbaren Schäden anwendbar ist."

❌ Zu komplex: "Der BGH, der in ständiger Rechtsprechung die Anwendbarkeit des § 823 BGB auch in Fällen bejaht, in denen nur mittelbare Schäden entstehen, hat in seinem Urteil vom 15.3.2023 diese Rechtsprechung bestätigt, was in der Literatur überwiegend Zustimmung gefunden hat."


**Fachterminologie konsistent verwenden:**

✅ Konsistent: "Anspruch" → immer "Anspruch"
❌ Inkonsistent: "Anspruch" → "Forderung" → "Berechtigung"


**Revision und Korrektur:**

**Mehrfache Überarbeitung:**
1. **Inhaltliche Revision:** Logik und Vollständigkeit
2. **Sprachliche Überarbeitung:** Stil und Verständlichkeit
3. **Formale Korrektur:** Rechtschreibung und Zitation
4. **Endkontrolle:** Gesamteindruck und Konsistenz

**Hilfsmittel:**
- **Rechtschreibprüfung:** Software zur Fehleridentifikation
- **Stilanalyse:** Tools wie "Hemingway Editor"
- **Vorlesung:** Text laut vorlesen zur Überprüfung des Textflusses
- **Externe Korrektur:** Feedback von Kommilitonen oder Betreuern

**Qualitätsindikatoren:**
✓ Verständlichkeit ohne Fachwissen-Verlust
✓ Logischer und nachvollziehbarer Aufbau
✓ Angemessene Balance zwischen Präzision und Lesbarkeit
✓ Konsistente Begriffsverwedung
✓ Fehlerfreie Rechtschreibung und Grammatik`,
          examples: [
            {
              id: 'ex-5-3-2-1',
              title: 'Stilverbesserung',
              content: 'Stilistische Überarbeitung eines Textes:\n\n❌ Ursprungstext:\n"Ich finde, dass die Entscheidung des BGH total daneben ist. Man sieht ja, dass sie nicht kapiert haben, worum es eigentlich geht. Das ist echt problematisch."\n\n✅ Überarbeitete Fassung:\n"Die Entscheidung des BGH ist nicht überzeugend. Das Gericht verkennt die wesentlichen Aspekte der Problematik. Dies führt zu dogmatischen Inkonsistenzen, die in der Literatur zu Recht kritisiert werden."\n\nVerbesserungen:\n• Objektivität statt Subjektivität\n• Fachsprache statt Umgangssprache\n• Präzise Argumentation statt emotionale Bewertung\n• Quellenangaben ergänzt',
              explanation: 'Wissenschaftlicher Stil erfordert objektive, präzise und sachliche Darstellung.'
            }
          ]
        }
      ],
      resources: [
        {
          id: 'res-5-3-1',
          title: 'Leitfaden für juristische Hausarbeiten',
          type: 'article',
          url: 'https://www.jura.uni-muenchen.de/leitfaden-hausarbeiten',
          description: 'Praktische Anleitung für das Verfassen juristischer Arbeiten'
        },
        {
          id: 'res-5-3-2',
          title: 'Wissenschaftliches Schreiben in der Rechtswissenschaft',
          type: 'book',
          url: 'https://www.utb.de/wissenschaftliches-schreiben-jura',
          description: 'Umfassendes Handbuch für rechtswissenschaftliche Textproduktion'
        }
      ],
      glossary: [
        {
          term: 'Wissenschaftlicher Sprachstil',
          definition: 'Objektive, präzise und sachliche Ausdrucksweise in wissenschaftlichen Texten'
        },
        {
          term: 'Fachterminologie',
          definition: 'Spezifische Begriffe und Wendungen einer wissenschaftlichen Disziplin'
        },
        {
          term: 'Argumentationskette',
          definition: 'Logische Verknüpfung von Argumenten zur Begründung einer These'
        }
      ]
    },
    exercises: [
      {
        id: 'ex-5-3-1',
        type: 'essay',
        difficulty: 'advanced',
        points: 15,
        title: 'Hausarbeits-Gliederung',
        description: 'Entwickeln Sie eine vollständige Gliederung für eine juristische Hausarbeit',
        content: {
          question: 'Erstellen Sie eine detaillierte Gliederung für eine Hausarbeit zum Thema "Die Haftung von Online-Plattformen für nutzergenerierte Inhalte". Die Gliederung soll mindestens drei Hauptteile mit jeweils zwei Unterkapiteln umfassen.',
          requirements: [
            'Systematischer Aufbau von der Problemstellung zur Lösung',
            'Mindestens 3 Gliederungsebenen verwenden',
            'Juristische Gliederungssystematik (A., I., 1., a)) beachten',
            'Logische Verknüpfung der Gliederungspunkte',
            'Angemessene Detaillierung der Unterpunkte'
          ]
        },
        solution: {
          correct: 'Systematische Gliederung erforderlich',
          explanation: 'Eine gelungene Gliederung könnte wie folgt aussehen:\n\nA. Einleitung\n   I. Problemstellung\n   II. Gang der Untersuchung\n\nB. Rechtliche Grundlagen\n   I. Haftung nach TMG\n      1. § 7 TMG (Allgemeine Informationen)\n      2. §§ 8-10 TMG (Privilegierungen)\n   II. Deliktrechtliche Haftung\n      1. § 823 Abs. 1 BGB\n      2. § 824 BGB (Kreditgefährdung)\n\nC. Haftung von Plattformen\n   I. Einordnung als Host-Provider\n      1. Technische Einordnung\n      2. Rechtliche Bewertung\n   II. Prüfungs- und Löschpflichten\n      1. Notice-and-Take-Down\n      2. Proaktive Überwachung\n\nD. Lösungsansätze\n   I. De lege lata\n   II. Reformbedarf\n\nE. Schluss',
          evaluationCriteria: [
            'Vollständige Dreigliederung (Einleitung-Hauptteil-Schluss)',
            'Systematische Entwicklung vom Problem zur Lösung',
            'Korrekte juristische Gliederungssystematik',
            'Angemessene Detaillierung',
            'Logische Verknüpfung der Gliederungspunkte'
          ]
        },
        hints: [
          {
            id: 'hint-5-3-1-1',
            text: 'Beginnen Sie mit den rechtlichen Grundlagen, bevor Sie das spezifische Problem analysieren',
            penaltyPoints: 3
          }
        ],
        feedback: {
          correct: 'Exzellente Gliederung! Sie haben alle wesentlichen Aspekte systematisch erfasst.',
          incorrect: 'Überprüfen Sie die logische Entwicklung von den Grundlagen zum spezifischen Problem.'
        }
      }
    ],
    estimatedMinutes: 1200, // 20 Stunden
    requiredMastery: 85
  }
];