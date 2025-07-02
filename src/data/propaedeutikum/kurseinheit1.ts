import { LearningUnit, Exercise } from '../../types/learning';

// KURSEINHEIT 1: Fallbearbeitung und Gutachtentechnik (90 Stunden / 3 ECTS)

export const kurseinheit1Units: LearningUnit[] = [
  // Lernblock 1.1: Grundbegriffe der Rechtsanwendung (20 Stunden)
  {
    id: 'ke1-1-1-juristischer-fall',
    moduleId: 'propaedeutikum',
    order: 1,
    title: '1.1.1 Der juristische Fall',
    objectives: [
      {
        id: 'obj-1-1-1',
        description: 'Unterscheidung zwischen sozialem Konflikt und Rechtsfall verstehen',
        bloomLevel: 'understand'
      },
      {
        id: 'obj-1-1-2',
        description: 'Transformation von Lebenssachverhalten in juristische Fragestellungen durchführen',
        bloomLevel: 'apply'
      },
      {
        id: 'obj-1-1-3',
        description: 'Verschiedene Falltypen einordnen und kategorisieren',
        bloomLevel: 'analyze'
      }
    ],
    content: {
      id: 'content-1-1-1',
      type: 'mixed',
      sections: [
        {
          id: 'section-1-1-1-1',
          title: 'Konfliktlehre - Einführung',
          content: `Die juristische Fallbearbeitung beginnt mit dem Verständnis, was einen Fall zu einem rechtlichen Fall macht.

**Soziale Konflikte vs. rechtliche Konflikte:**
Ein sozialer Konflikt entsteht, wenn die Interessen verschiedener Personen aufeinandertreffen. Nicht jeder soziale Konflikt ist jedoch ein Rechtsfall. 

**Beispiel:** Wenn Nachbar A sich über die laute Musik von Nachbar B ärgert, ist dies zunächst ein sozialer Konflikt. Erst wenn rechtliche Normen (z.B. § 906 BGB - Immissionen) betroffen sind, wird daraus ein Rechtsfall.

**Die Rolle des Rechts in der Konfliktlösung:**
Das Recht bietet verbindliche Regeln zur Konfliktlösung. Es transformiert soziale Konflikte in rechtliche Fragestellungen, die nach objektiven Kriterien entschieden werden können.

**Der Justizgewährungsanspruch:**
Jeder Bürger hat das Recht, seine Konflikte vor Gericht austragen zu lassen (Art. 19 Abs. 4 GG, Art. 101 GG). Dies macht aus privaten Streitigkeiten justiziable Fälle.`,
          examples: [
            {
              id: 'ex-1-1-1-1',
              title: 'Vom Streit zum Rechtsfall',
              content: 'Ausgangslage: A parkt regelmäßig vor der Einfahrt von B.\nSozialer Konflikt: B ärgert sich und beschwert sich bei A.\nRechtlicher Konflikt: B kann Unterlassung verlangen (§ 1004 BGB) und notfalls Klage erheben.',
              explanation: 'Die Transformation erfolgt durch die Identifikation der relevanten Rechtsnorm (hier: Eigentumsschutz) und der möglichen Rechtsfolgen.'
            }
          ]
        },
        {
          id: 'section-1-1-1-2',
          title: 'Der Rechtsfall',
          content: `**Definition des Rechtsfalls:**
Ein Rechtsfall ist ein Lebenssachverhalt, der einer rechtlichen Bewertung und Entscheidung bedarf. Er zeichnet sich durch folgende Merkmale aus:
- Bezug zu Rechtsnormen
- Möglichkeit rechtlicher Konsequenzen
- Justiziabilität (gerichtliche Durchsetzbarkeit)

**Typen von Rechtsfällen:**

1. **Zivilrechtliche Streitigkeiten:**
   - Vertragsstreitigkeiten (Kauf, Miete, Werkvertrag)
   - Schadensersatzforderungen (Delikt, Vertragsverletzung)
   - Familienrechtliche Konflikte (Scheidung, Unterhalt)
   - Erbstreitigkeiten

2. **Verwaltungsrechtliche Verfahren:**
   - Genehmigungsverfahren (Baugenehmigung, Gewerberlaubnis)
   - Widerspruchsverfahren gegen Verwaltungsakte
   - Sozialrechtliche Ansprüche (Rente, Arbeitslosengeld)

3. **Strafrechtliche Fälle:**
   - Strafanzeigen und Ermittlungsverfahren
   - Ordnungswidrigkeiten
   - Privatklagedelikte

**Der Fall als didaktisches Instrument:**
In der juristischen Ausbildung dient der Fall als zentrales Lehrmittel. Er ermöglicht:
- Anwendung theoretischen Wissens
- Training der juristischen Methodik
- Entwicklung von Problemlösungskompetenz
- Vorbereitung auf die Praxis`,
          examples: [
            {
              id: 'ex-1-1-1-2',
              title: 'Typisierung von Fällen',
              content: 'Fall 1: A kauft bei B ein defektes Handy → Zivilrecht (Kaufrecht)\nFall 2: C erhält Bußgeldbescheid wegen Falschparkens → Öffentliches Recht (OWiG)\nFall 3: D schlägt E → Strafrecht (Körperverletzung)',
              explanation: 'Die Einordnung erfolgt nach dem betroffenen Rechtsgebiet und der Art des Konflikts.'
            },
            {
              id: 'ex-1-1-1-3',
              title: 'Komplexer Fall mit mehreren Rechtsgebieten',
              content: 'Sachverhalt: Bauunternehmer B errichtet ohne Baugenehmigung ein Haus für Kunde K. Das Bauamt ordnet den Abriss an. K verlangt Schadensersatz von B.\n\nRechtliche Einordnung:\n- Öffentliches Recht: Baugenehmigungsverfahren, Abrissverfügung\n- Zivilrecht: Werkvertrag zwischen B und K, Schadensersatzanspruch\n- Ggf. Strafrecht: Bauen ohne Genehmigung (landesrechtliche Strafvorschriften)',
              explanation: 'Viele praktische Fälle berühren mehrere Rechtsgebiete gleichzeitig. Diese müssen sauber getrennt und jeweils nach den spezifischen Regeln behandelt werden.'
            },
            {
              id: 'ex-1-1-1-4',
              title: 'Grenzfall: Sozialkonflikt oder Rechtsfall?',
              content: 'Familie Schmidt lädt Familie Müller nicht mehr zu Geburtstagsfeiern ein, nachdem es Streit um die Erziehungsmethoden gab.\n\nAnalyse:\n- Reiner Sozialkonflikt: Keine rechtliche Verpflichtung zu Einladungen\n- Kein Rechtsfall: Keine Rechtsnorm betroffen, keine Justiziabilität\n- Lösung nur auf sozialer Ebene möglich',
              explanation: 'Nicht jeder Konflikt ist ein Rechtsfall. Das Recht regelt nur bestimmte Lebensbereiche.'
            }
          ]
        },
        {
          id: 'section-1-1-1-3',
          title: 'Die Transformation zum Rechtsfall',
          content: `**Der Prozess der Verrechtlichung:**

Die Transformation eines sozialen Konflikts in einen Rechtsfall durchläuft mehrere Stufen:

**1. Identifikation des Problems:**
- Feststellung eines Interessenkonflikts
- Prüfung, ob rechtlich relevante Interessen betroffen sind
- Abgrenzung von rein moralischen oder gesellschaftlichen Fragen

**2. Rechtliche Qualifikation:**
- Suche nach einschlägigen Rechtsnormen
- Prüfung der Anwendbarkeit auf den Sachverhalt
- Identifikation möglicher Anspruchsgrundlagen

**3. Subsumtion:**
- Zuordnung des Lebenssachverhalts unter die Rechtsnorm
- Prüfung aller Tatbestandsmerkmale
- Feststellung der Rechtsfolgen

**4. Durchsetzung:**
- Außergerichtliche Geltendmachung
- Gerichtliche Durchsetzung bei Erfolglosigkeit
- Vollstreckung des Urteils

**Praktische Herangehensweise:**

1. **Sachverhaltsanalyse:**
   - Wer ist beteiligt?
   - Was ist geschehen?
   - Welche Interessen stehen sich gegenüber?

2. **Anspruchsidentifikation:**
   - Wer will was von wem?
   - Aus welchem rechtlichen Grund?

3. **Normsuche:**
   - Welche Gesetze könnten einschlägig sein?
   - Gibt es Verträge zwischen den Parteien?
   - Bestehen gesetzliche Schuldverhältnisse?

**Fallstricke bei der Transformation:**
- Verwechslung von Moral und Recht
- Übersehen relevanter Rechtsnormen
- Fehlerhafte Sachverhaltserfassung
- Unzutreffende rechtliche Würdigung`,
          examples: [
            {
              id: 'ex-1-1-1-5',
              title: 'Schrittweise Transformation',
              content: 'Ausgangslage: Nachbar N mäht sonntags regelmäßig seinen Rasen, Nachbar R fühlt sich gestört.\n\nSchritt 1 - Problem: Lärmbelästigung an Ruhetagen\nSchritt 2 - Rechtliche Qualifikation: Landesimmissionsschutzgesetz, ggf. § 906 BGB\nSchritt 3 - Subsumtion: Wesentliche Beeinträchtigung? Ortsüblichkeit?\nSchritt 4 - Durchsetzung: Unterlassungsanspruch, ggf. Ordnungsbehörde',
              explanation: 'Die systematische Herangehensweise führt vom diffusen Ärgernis zum konkreten rechtlichen Vorgehen.'
            }
          ]
        },
        {
          id: 'section-1-1-1-4',
          title: 'Bedeutung für die juristische Praxis',
          content: `**Der Rechtsfall in verschiedenen juristischen Berufen:**

**1. Rechtsanwalt:**
- Mandantenberatung: Einschätzung der Erfolgsaussichten
- Strategieentwicklung: Prozessführung oder außergerichtliche Einigung
- Risikobewertung: Kosten-Nutzen-Analyse
- Mandatsgestaltung: Vollmacht, Vergütungsvereinbarung

**2. Richter:**
- Neutralität: Unparteiische Bewertung des Falls
- Sachverhaltsaufklärung: Beweisaufnahme und -würdigung
- Rechtsanwendung: Subsumtion unter die einschlägigen Normen
- Urteilsfindung: Gerechte und gesetzeskonforme Entscheidung

**3. Staatsanwalt:**
- Legalitätsprinzip: Verfolgungszwang bei Straftaten
- Ermittlungsführung: Aufklärung des Sachverhalts
- Anklagerhebung: Bei hinreichendem Tatverdacht
- Strafmaß: Angemessene Sanktion fordern

**4. Verwaltungsjurist:**
- Rechtmäßigkeitsprüfung: Einhaltung von Gesetzen
- Ermessensentscheidungen: Abwägung im Einzelfall
- Verfahrensgestaltung: Formelle Anforderungen beachten
- Bürgerkontakt: Verständliche Kommunikation

**Interdisziplinäre Aspekte:**
- Betriebswirtschaft: Wirtschaftliche Folgen rechtlicher Entscheidungen
- Psychologie: Verhandlungsführung, Zeugenvernehmung
- Technik: Sachverständigengutachten verstehen
- Medizin: Personenschäden beurteilen`,
          examples: [
            {
              id: 'ex-1-1-1-6',
              title: 'Ein Fall - verschiedene Perspektiven',
              content: 'Verkehrsunfall mit Personenschaden:\n\nAnwalt des Geschädigten: Schmerzensgeldhöhe maximieren\nAnwalt des Schädigers: Mitverschulden geltend machen\nRichter: Gerechten Ausgleich finden\nVersicherung: Regulierung nach Vertragsbedingungen\nStaatsanwalt: Strafrechtliche Relevanz prüfen',
              explanation: 'Derselbe Sachverhalt wird je nach Rolle unterschiedlich bewertet und bearbeitet.'
            }
          ]
        }
      ],
      resources: [
        {
          id: 'res-1-1-1-1',
          title: 'Was ist Recht? - Einführungsvideo',
          type: 'video',
          url: '/videos/was-ist-recht.mp4',
          duration: 15,
          description: 'Grundlegende Einführung in den Rechtsbegriff und die Funktion des Rechts'
        },
        {
          id: 'res-1-1-1-2',
          title: 'Interaktives Schaubild: Vom Konflikt zum Rechtsfall',
          type: 'interactive',
          url: '/interactive/konflikt-rechtsfall',
          description: 'Visualisierung der Transformation sozialer Konflikte in Rechtsfälle'
        },
        {
          id: 'res-1-1-1-3',
          title: 'Fallbeispielsammlung: Typische Rechtsfälle',
          type: 'article',
          url: '/articles/fallbeispielsammlung-rechtsfaelle',
          description: 'Sammlung von 50 typischen Rechtsfällen aus allen Rechtsgebieten mit Lösungshinweisen'
        },
        {
          id: 'res-1-1-1-4',
          title: 'Podcast: Berühmte Rechtsfälle der Geschichte',
          type: 'video',
          url: '/podcasts/beruehmte-rechtsfaelle',
          duration: 30,
          description: 'Historische Fälle, die das Recht geprägt haben'
        },
        {
          id: 'res-1-1-1-5',
          title: 'Interaktiver Fallgenerator',
          type: 'interactive',
          url: '/interactive/fallgenerator',
          description: 'Erstellen Sie eigene Übungsfälle und testen Sie Ihre Fähigkeit zur rechtlichen Einordnung'
        }
      ],
      glossary: [
        {
          term: 'Rechtsfall',
          definition: 'Ein Lebenssachverhalt, der einer rechtlichen Bewertung und Entscheidung bedarf',
          relatedTerms: ['Sachverhalt', 'Justiziabilität']
        },
        {
          term: 'Justiziabilität',
          definition: 'Die Eigenschaft eines Konflikts, gerichtlich entscheidbar zu sein',
          relatedTerms: ['Justizgewährungsanspruch', 'Rechtsweg']
        },
        {
          term: 'Justizgewährungsanspruch',
          definition: 'Das verfassungsrechtlich garantierte Recht auf Zugang zu den Gerichten',
          relatedTerms: ['Art. 19 Abs. 4 GG', 'Rechtsschutz']
        },
        {
          term: 'Transformation',
          definition: 'Die Überführung eines sozialen Konflikts in einen justiziablen Rechtsfall',
          relatedTerms: ['Verrechtlichung', 'Qualifikation']
        },
        {
          term: 'Anspruchsgrundlage',
          definition: 'Rechtsnorm, aus der sich ein Anspruch auf ein bestimmtes Tun oder Unterlassen ergibt',
          relatedTerms: ['Anspruch', 'Tatbestand', 'Rechtsfolge']
        },
        {
          term: 'Subsumtion',
          definition: 'Die Unterordnung eines konkreten Lebenssachverhalts unter eine abstrakte Rechtsnorm',
          relatedTerms: ['Syllogismus', 'Tatbestandsmerkmal']
        }
      ]
    },
    exercises: [
      {
        id: 'ex-ke1-1-1-1',
        type: 'multipleChoice',
        difficulty: 'beginner',
        points: 10,
        title: 'Merkmale eines Rechtsfalls',
        description: 'Identifizieren Sie die wesentlichen Merkmale eines Rechtsfalls',
        content: {
          question: 'Welche der folgenden Merkmale machen aus einem sozialen Konflikt einen Rechtsfall?',
          options: [
            'Die Beteiligten sind sich uneinig',
            'Es gibt anwendbare Rechtsnormen und mögliche Rechtsfolgen',
            'Der Konflikt ist emotional aufgeladen',
            'Mindestens drei Personen sind beteiligt'
          ]
        },
        solution: {
          correct: 1,
          explanation: 'Ein Rechtsfall zeichnet sich dadurch aus, dass Rechtsnormen anwendbar sind und rechtliche Konsequenzen möglich sind. Die bloße Uneinigkeit oder emotionale Komponente macht noch keinen Rechtsfall aus.'
        },
        hints: [
          {
            id: 'hint-1-1-1-1',
            text: 'Denken Sie daran: Was unterscheidet einen Streit unter Nachbarn von einer Klage vor Gericht?',
            penaltyPoints: 2
          }
        ],
        feedback: {
          correct: 'Sehr gut! Sie haben die juristische Dimension eines Konflikts erkannt.',
          incorrect: 'Nicht ganz. Ein Rechtsfall erfordert mehr als nur einen Konflikt - es müssen rechtliche Normen betroffen sein.',
          partial: ''
        }
      },
      {
        id: 'ex-ke1-1-1-2',
        type: 'caseAnalysis',
        difficulty: 'intermediate',
        points: 20,
        title: 'Konflikt oder Rechtsfall?',
        description: 'Analysieren Sie, ob es sich um einen rechtlichen Fall handelt',
        content: {
          question: 'Bewerten Sie den folgenden Sachverhalt: Handelt es sich um einen Rechtsfall? Wenn ja, welchem Rechtsgebiet ist er zuzuordnen?',
          sachverhalt: 'Frau Müller ärgert sich seit Wochen über ihren Nachbarn Herrn Schmidt, der jeden Morgen um 6 Uhr seine Kaffeemaschine so laut bedient, dass sie davon aufwacht. Als sie ihn darauf anspricht, antwortet er nur: "Das ist mein gutes Recht in meiner eigenen Wohnung!"',
          context: 'Prüfen Sie, ob rechtliche Normen betroffen sind und welche Rechtsfolgen möglich wären.'
        },
        solution: {
          correct: {
            isRechtsfall: true,
            rechtsgebiet: 'Zivilrecht',
            begruendung: 'Es handelt sich um einen Rechtsfall, da § 906 BGB (Immissionen) und mietrechtliche Vorschriften betroffen sein könnten. Frau Müller könnte Unterlassung verlangen.'
          },
          explanation: 'Lärmbelästigungen in Mietwohnungen sind klassische zivilrechtliche Streitigkeiten. Die Grenze zwischen sozial üblichem und rechtswidrigem Lärm ist rechtlich geregelt.',
          commonMistakes: [
            'Verwechslung mit Ordnungswidrigkeitenrecht (Lärmschutz ist primär zivilrechtlich)',
            'Annahme, dass jede Belästigung automatisch rechtswidrig ist'
          ]
        },
        hints: [
          {
            id: 'hint-1-1-1-2',
            text: 'Überlegen Sie: Welche Rechte hat man in der eigenen Wohnung? Gibt es Grenzen?',
            penaltyPoints: 3
          },
          {
            id: 'hint-1-1-1-3',
            text: 'Denken Sie an das Nachbarrecht und Immissionsschutz im BGB.',
            penaltyPoints: 5
          }
        ],
        feedback: {
          correct: 'Ausgezeichnet! Sie haben erkannt, dass Lärmbelästigung rechtlich relevant sein kann.',
          incorrect: 'Denken Sie nochmal nach: Auch in der eigenen Wohnung gibt es rechtliche Grenzen.',
          partial: 'Teilweise richtig. Vergessen Sie nicht, das konkrete Rechtsgebiet zu benennen.'
        }
      },
      {
        id: 'ex-ke1-1-1-3',
        type: 'dragDrop',
        difficulty: 'beginner',
        points: 15,
        title: 'Zuordnung von Falltypen',
        description: 'Ordnen Sie die Fälle den richtigen Rechtsgebieten zu',
        content: {
          question: 'Ziehen Sie die Fälle in die richtige Kategorie',
          items: [
            { id: 'item-1', content: 'Kündigungsschutzklage', correctCategory: 'Zivilrecht' },
            { id: 'item-2', content: 'Baugenehmigung', correctCategory: 'Öffentliches Recht' },
            { id: 'item-3', content: 'Ladendiebstahl', correctCategory: 'Strafrecht' },
            { id: 'item-4', content: 'Kaufpreisforderung', correctCategory: 'Zivilrecht' },
            { id: 'item-5', content: 'Führerscheinentzug', correctCategory: 'Öffentliches Recht' },
            { id: 'item-6', content: 'Körperverletzung', correctCategory: 'Strafrecht' }
          ],
          categories: ['Zivilrecht', 'Öffentliches Recht', 'Strafrecht']
        },
        solution: {
          correct: {
            'Zivilrecht': ['Kündigungsschutzklage', 'Kaufpreisforderung'],
            'Öffentliches Recht': ['Baugenehmigung', 'Führerscheinentzug'],
            'Strafrecht': ['Ladendiebstahl', 'Körperverletzung']
          },
          explanation: 'Die Zuordnung erfolgt danach, welches Rechtsverhältnis betroffen ist: Privatpersonen untereinander (Zivilrecht), Staat-Bürger (Öffentliches Recht) oder strafrechtliche Sanktionen (Strafrecht).'
        },
        hints: [
          {
            id: 'hint-1-1-1-4',
            text: 'Zivilrecht regelt Beziehungen zwischen Privatpersonen, Öffentliches Recht das Verhältnis Staat-Bürger.',
            penaltyPoints: 3
          }
        ],
        feedback: {
          correct: 'Perfekt! Sie können Fälle den Rechtsgebieten zuordnen.',
          incorrect: 'Überprüfen Sie Ihre Zuordnung. Denken Sie an die Beteiligten und die Art des Konflikts.',
          partial: ''
        }
      },
      {
        id: 'ex-ke1-1-1-4',
        type: 'gutachten',
        difficulty: 'advanced',
        points: 35,
        title: 'Erste Falllösung',
        description: 'Erstellen Sie ein kurzes Gutachten zur rechtlichen Einordnung',
        content: {
          question: 'Prüfen Sie, ob folgender Sachverhalt einen Rechtsfall darstellt und welchem Rechtsgebiet er zuzuordnen ist.',
          sachverhalt: 'Student S mietet bei Vermieterin V ein WG-Zimmer. Nach 3 Monaten stellt S fest, dass die im Mietvertrag angegebene Wohnfläche von 20 qm tatsächlich nur 16 qm beträgt. S möchte nun weniger Miete zahlen. V behauptet, S habe das Zimmer doch vorher besichtigt und müsse den vereinbarten Preis zahlen.',
          context: 'Beachten Sie: Es geht zunächst nur um die Frage, ob ein Rechtsfall vorliegt und welchem Rechtsgebiet er zuzuordnen ist. Eine detaillierte Anspruchsprüfung ist noch nicht erforderlich.'
        },
        solution: {
          correct: {
            structure: [
              'Frage 1: Liegt ein Rechtsfall vor?',
              'Prüfung der Merkmale eines Rechtsfalls',
              'Ergebnis zu Frage 1',
              'Frage 2: Welchem Rechtsgebiet ist der Fall zuzuordnen?',
              'Prüfung der Beteiligten und des Streitgegenstands',
              'Ergebnis zu Frage 2'
            ],
            keyPoints: [
              'Rechtsfall (+): Rechtsnormen betroffen (Mietrecht)',
              'Justiziabilität gegeben: Mietstreit gerichtlich entscheidbar',
              'Mögliche Rechtsfolgen: Mietminderung, Anpassung',
              'Zivilrecht: Streit zwischen Privatpersonen',
              'Konkret: Mietrecht (§§ 535 ff. BGB)'
            ]
          },
          explanation: 'Ein klassischer zivilrechtlicher Fall aus dem Mietrecht. Die falschen Flächenangaben können zu Mietminderungsansprüchen führen.'
        },
        hints: [
          {
            id: 'hint-1-1-1-5',
            text: 'Prüfen Sie systematisch: Sind Rechtsnormen betroffen? Ist der Konflikt justiziabel?',
            penaltyPoints: 5
          },
          {
            id: 'hint-1-1-1-6',
            text: 'Denken Sie an die Beteiligten: Wer streitet mit wem worüber?',
            penaltyPoints: 7
          }
        ],
        feedback: {
          correct: 'Hervorragende erste Fallanalyse! Sie haben die wesentlichen Punkte erfasst.',
          incorrect: 'Arbeiten Sie systematischer. Prüfen Sie erst, ob ein Rechtsfall vorliegt, dann die Zuordnung.',
          partial: 'Guter Ansatz! Achten Sie auf vollständige Prüfung aller Merkmale.'
        }
      },
      {
        id: 'ex-ke1-1-1-5',
        type: 'multipleChoice',
        difficulty: 'intermediate',
        points: 20,
        title: 'Transformation zum Rechtsfall',
        description: 'Verstehen Sie den Transformationsprozess',
        content: {
          question: 'In welcher Reihenfolge sollte man bei der Transformation eines sozialen Konflikts in einen Rechtsfall vorgehen?',
          options: [
            '1. Klage einreichen, 2. Anwalt beauftragen, 3. Rechtsnorm suchen, 4. Sachverhalt erfassen',
            '1. Problemidentifikation, 2. Rechtliche Qualifikation, 3. Subsumtion, 4. Durchsetzung',
            '1. Durchsetzung planen, 2. Subsumtion, 3. Problemidentifikation, 4. Qualifikation',
            '1. Rechtsnorm auswendig lernen, 2. Fall daran anpassen, 3. Klage schreiben'
          ]
        },
        solution: {
          correct: 1,
          explanation: 'Die systematische Reihenfolge ist: Erst das Problem verstehen, dann rechtlich einordnen, subsumieren und schließlich durchsetzen.'
        },
        hints: [
          {
            id: 'hint-1-1-1-7',
            text: 'Denken Sie logisch: Was muss man zuerst wissen, bevor man handeln kann?',
            penaltyPoints: 3
          }
        ],
        feedback: {
          correct: 'Genau richtig! Diese systematische Vorgehensweise führt zum Erfolg.',
          incorrect: 'Denken Sie an die logische Reihenfolge: Erst verstehen, dann handeln.',
          partial: ''
        }
      }
    ],
    estimatedMinutes: 300, // 5 Stunden
    requiredMastery: 80
  },

  // 1.1.2 Rechtsanwendung als Syllogismus (8 Stunden)
  {
    id: 'ke1-1-2-syllogismus',
    moduleId: 'propaedeutikum',
    order: 2,
    title: '1.1.2 Rechtsanwendung als Syllogismus',
    objectives: [
      {
        id: 'obj-1-1-2-1',
        description: 'Den juristischen Syllogismus verstehen und anwenden',
        bloomLevel: 'apply'
      },
      {
        id: 'obj-1-1-2-2',
        description: 'Die logische Struktur juristischer Argumentation analysieren',
        bloomLevel: 'analyze'
      },
      {
        id: 'obj-1-1-2-3',
        description: 'Vollständige Syllogismen selbstständig bilden',
        bloomLevel: 'create'
      }
    ],
    content: {
      id: 'content-1-1-2',
      type: 'mixed',
      sections: [
        {
          id: 'section-1-1-2-1',
          title: 'Logische Grundlagen',
          content: `Der juristische Syllogismus basiert auf der klassischen aristotelischen Logik. Er ist das Herzstück der juristischen Methodik.

**Die aristotelische Logik:**
Aristoteles entwickelte die formale Logik als Lehre vom korrekten Schließen. Der Syllogismus ist dabei die Grundform des deduktiven Schlusses:
- Vom Allgemeinen zum Besonderen
- Wenn die Prämissen wahr sind, muss auch die Konklusion wahr sein

**Modus ponens:**
Die häufigste Form in der Rechtswissenschaft:
- Wenn A, dann B (Regel)
- A liegt vor (Tatsache)
- Also B (Schlussfolgerung)

**Beispiel aus der Logik:**
- Alle Menschen sind sterblich (Obersatz)
- Sokrates ist ein Mensch (Untersatz)
- Also ist Sokrates sterblich (Schluss)

**Deduktive Schlüsse im Recht:**
Das Recht arbeitet primär deduktiv:
1. Die Norm gibt die allgemeine Regel vor
2. Der Sachverhalt liefert den konkreten Fall
3. Die Rechtsfolge ergibt sich logisch zwingend`,
          examples: [
            {
              id: 'ex-1-1-2-1',
              title: 'Klassischer Syllogismus',
              content: 'Logisch: Alle Vögel können fliegen. Der Pinguin ist ein Vogel. Also kann der Pinguin fliegen.\nProblem: Die Prämisse ist falsch!\nLehre: Im Recht müssen wir die Prämissen (Normen) genau prüfen.',
              explanation: 'Dieser Fehlschluss zeigt, wie wichtig die korrekte Norminterpretation ist.'
            }
          ]
        },
        {
          id: 'section-1-1-2-2',
          title: 'Der Justizsyllogismus',
          content: `**Definition:**
Der Justizsyllogismus ist die Anwendung der logischen Schlussform auf rechtliche Probleme. Er verbindet abstrakte Rechtsnormen mit konkreten Lebenssachverhalten.

**Die drei Bestandteile:**

**1. Obersatz (Prämisse maior) - Die abstrakte Rechtsnorm:**
- Enthält die gesetzliche Regelung
- Struktur: "Wenn [Tatbestand], dann [Rechtsfolge]"
- Beispiel: "Wer eine fremde bewegliche Sache einem anderen in der Absicht wegnimmt, die Sache sich oder einem Dritten rechtswidrig zuzueignen, wird [...] bestraft." (§ 242 StGB)

**2. Untersatz (Prämisse minor) - Die Subsumtion:**
- Zuordnung des Sachverhalts unter die Norm
- Feststellung, dass die Tatbestandsmerkmale erfüllt sind
- Beispiel: "A hat die fremde bewegliche Sache (das Fahrrad des B) in Zueignungsabsicht weggenommen."

**3. Schluss (Conclusio) - Die Rechtsfolge:**
- Logische Ableitung aus Ober- und Untersatz
- Die im Gesetz vorgesehene Rechtsfolge tritt ein
- Beispiel: "Also hat sich A wegen Diebstahls strafbar gemacht."

**Formalisiert:**
- Obersatz: Wenn T, dann R
- Untersatz: T ist gegeben
- Schluss: Also R

**Praktische Bedeutung:**
Der Syllogismus zwingt zu:
- Strukturiertem Denken
- Vollständiger Prüfung
- Nachvollziehbarer Argumentation
- Objektivität`,
          examples: [
            {
              id: 'ex-1-1-2-2',
              title: 'Kaufvertrag-Syllogismus',
              content: 'Obersatz: Ein Kaufvertrag kommt durch zwei übereinstimmende Willenserklärungen (Angebot und Annahme) zustande, §§ 433, 145 ff. BGB.\n\nUntersatz: A bot B den Verkauf seines gebrauchten Laptops für 500 € an (Angebot). B erklärte: "Einverstanden, ich kaufe" (Annahme). Die Willenserklärungen stimmen überein.\n\nSchluss: Zwischen A und B ist ein Kaufvertrag zustande gekommen.',
              explanation: 'Dieser Syllogismus zeigt die praktische Anwendung auf einen alltäglichen Rechtsvorgang.'
            },
            {
              id: 'ex-1-1-2-3',
              title: 'Notwehr-Syllogismus',
              content: 'Obersatz: Wer eine Tat begeht, die durch Notwehr geboten ist, handelt nicht rechtswidrig, § 32 StGB.\n\nUntersatz: A schlug den B, um dessen rechtswidrigen Angriff auf sich abzuwehren. Die Verteidigung war erforderlich.\n\nSchluss: A handelte nicht rechtswidrig.',
              explanation: 'Hier zeigt sich, wie Rechtfertigungsgründe im Syllogismus funktionieren.'
            }
          ]
        },
        {
          id: 'section-1-1-2-3',
          title: 'Erweiterte Formen des Syllogismus',
          content: `**Enthymeme - verkürzte Syllogismen:**
In der Praxis werden oft Teile des Syllogismus weggelassen, weil sie selbstverständlich erscheinen.

Beispiel: "A hat gestohlen, also wird er bestraft."
- Weggelassen: Der Obersatz (Diebstahl ist strafbar)
- Gefahr: Wichtige Prüfungsschritte könnten übersehen werden

**Kettensyllogismen:**
Komplexe Rechtsfragen erfordern mehrere aufeinanderfolgende Syllogismen.

Beispiel Stellvertretung:
1. Syllogismus: V handelt im Namen des A → Stellvertretung
2. Syllogismus: V hat Vertretungsmacht → wirksame Stellvertretung  
3. Syllogismus: Wirksame Stellvertretung → A wird verpflichtet

**Mehrgliedrige Prüfungen:**
Viele Normen haben mehrere Tatbestandsmerkmale, die jeweils einen eigenen Syllogismus erfordern.

§ 823 Abs. 1 BGB:
- Verletzungshandlung
- Rechtsgut
- Kausalität
- Rechtswidrigkeit
- Verschulden

Jedes Merkmal erfordert eine eigene syllogistische Prüfung.

**Alternative Syllogismen:**
Bei mehreren möglichen Anspruchsgrundlagen:
- Entweder Anspruch aus Vertrag ODER aus Delikt
- Prüfung nacheinander bis zum ersten erfolgreichen Ergebnis
- Hilfsweise Prüfung bei Unsicherheiten

**Negative Syllogismen:**
Prüfung von Ausschlussgründen:
- Obersatz: Wenn Verjährung, dann kein Anspruch
- Untersatz: Verjährung liegt vor
- Schluss: Kein Anspruch

**Induktive Elemente:**
Vom Einzelfall zur Regel (bei Rechtsfortbildung):
- Sammlung ähnlicher Fälle
- Abstraktion gemeinsamer Merkmale
- Bildung neuer Rechtssätze (Richterrecht)`,
          examples: [
            {
              id: 'ex-1-1-2-4',
              title: 'Kettensyllogismus Eigentumserwerb',
              content: '1. Einigung über Eigentumsübergang liegt vor\n2. Übergabe ist erfolgt\n3. Veräußerer war Eigentümer\n4. Also: Erwerber ist Eigentümer geworden (§ 929 S. 1 BGB)',
              explanation: 'Jede Voraussetzung bildet einen eigenen Mini-Syllogismus.'
            }
          ]
        }
      ],
      resources: [
        {
          id: 'res-1-1-2-1',
          title: 'Interaktiver Syllogismus-Trainer',
          type: 'interactive',
          url: '/interactive/syllogismus-trainer',
          description: 'Üben Sie die Bildung juristischer Syllogismen'
        },
        {
          id: 'res-1-1-2-2',
          title: 'Video: Logik für Juristen',
          type: 'video',
          url: '/videos/logik-juristen.mp4',
          duration: 20,
          description: 'Einführung in die formale Logik für die Rechtswissenschaft'
        }
      ],
      glossary: [
        {
          term: 'Syllogismus',
          definition: 'Logischer Schluss vom Allgemeinen auf das Besondere mit Obersatz, Untersatz und Schluss',
          relatedTerms: ['Deduktion', 'Subsumtion']
        },
        {
          term: 'Subsumtion',
          definition: 'Die Unterordnung eines konkreten Lebenssachverhalts unter eine abstrakte Rechtsnorm',
          relatedTerms: ['Untersatz', 'Tatbestand']
        },
        {
          term: 'Prämisse',
          definition: 'Voraussetzung eines logischen Schlusses; im Justizsyllogismus: Obersatz (Norm) und Untersatz (Sachverhalt)',
          relatedTerms: ['Obersatz', 'Untersatz']
        }
      ]
    },
    exercises: [
      {
        id: 'ex-ke1-1-2-1',
        type: 'fillInBlanks',
        difficulty: 'beginner',
        points: 20,
        title: 'Bestandteile des Syllogismus',
        description: 'Ergänzen Sie die Bestandteile des juristischen Syllogismus',
        content: {
          question: 'Der juristische Syllogismus besteht aus drei Teilen. Ergänzen Sie die Lücken:',
          template: 'Der [BLANK1] enthält die abstrakte Rechtsnorm. Im [BLANK2] wird der Sachverhalt unter die Norm subsumiert. Der [BLANK3] zieht die logische Konsequenz und nennt die Rechtsfolge.'
        },
        solution: {
          correct: {
            BLANK1: 'Obersatz',
            BLANK2: 'Untersatz',
            BLANK3: 'Schluss'
          },
          explanation: 'Obersatz (Prämisse maior) - Untersatz (Prämisse minor) - Schluss (Conclusio) bilden die klassische Dreiteilung.',
          alternativeAnswers: {
            BLANK3: ['Schlusssatz', 'Conclusio', 'Ergebnis']
          }
        },
        hints: [
          {
            id: 'hint-1-1-2-1',
            text: 'Denken Sie an die lateinischen Begriffe: maior, minor, conclusio',
            penaltyPoints: 3
          }
        ],
        feedback: {
          correct: 'Perfekt! Sie kennen die Struktur des Syllogismus.',
          incorrect: 'Noch nicht ganz. Merken Sie sich: Obersatz - Untersatz - Schluss.',
          partial: 'Fast richtig! Überprüfen Sie die Fachbegriffe nochmal.'
        }
      },
      {
        id: 'ex-ke1-1-2-2',
        type: 'multipleChoice',
        difficulty: 'intermediate',
        points: 15,
        title: 'Syllogismus erkennen',
        description: 'Identifizieren Sie den korrekten Justizsyllogismus',
        content: {
          question: 'Welcher der folgenden Syllogismen ist formal korrekt aufgebaut?',
          options: [
            'A hat B geschlagen. Körperverletzung ist strafbar. Also hat A sich strafbar gemacht.',
            'Wer vorsätzlich die Gesundheit eines anderen schädigt, wird bestraft (§ 223 StGB). A hat vorsätzlich die Gesundheit des B durch einen Schlag geschädigt. Also wird A bestraft.',
            'A wird bestraft. Er hat nämlich B geschlagen. Das ist Körperverletzung.',
            'Körperverletzung liegt vor. A und B haben sich gestritten. Daher § 223 StGB.'
          ]
        },
        solution: {
          correct: 1,
          explanation: 'Nur Option 2 folgt der korrekten Reihenfolge: Obersatz (Norm) → Untersatz (Subsumtion) → Schluss (Rechtsfolge). Die anderen Optionen sind entweder unvollständig oder in falscher Reihenfolge.'
        },
        hints: [
          {
            id: 'hint-1-1-2-2',
            text: 'Achten Sie auf die Reihenfolge: Erst die Norm, dann der Sachverhalt, dann die Folgerung.',
            penaltyPoints: 3
          }
        ],
        feedback: {
          correct: 'Ausgezeichnet! Sie erkennen einen korrekt aufgebauten Syllogismus.',
          incorrect: 'Schauen Sie nochmal genau hin: Wo steht die Norm, wo der Sachverhalt?',
          partial: ''
        }
      },
      {
        id: 'ex-ke1-1-2-3',
        type: 'caseAnalysis',
        difficulty: 'intermediate',
        points: 30,
        title: 'Syllogismus konstruieren',
        description: 'Bilden Sie einen vollständigen Syllogismus',
        content: {
          question: 'Konstruieren Sie einen vollständigen juristischen Syllogismus für folgenden Sachverhalt. Verwenden Sie § 823 Abs. 1 BGB.',
          sachverhalt: 'Autofahrer A fährt bei Rot über die Ampel und kollidiert mit dem Fahrzeug des B, der bei Grün fuhr. Das Auto des B wird erheblich beschädigt, Reparaturkosten: 5.000 €.',
          context: '§ 823 Abs. 1 BGB: Wer vorsätzlich oder fahrlässig das Leben, den Körper, die Gesundheit, die Freiheit, das Eigentum oder ein sonstiges Recht eines anderen widerrechtlich verletzt, ist dem anderen zum Ersatz des daraus entstehenden Schadens verpflichtet.'
        },
        solution: {
          correct: {
            obersatz: 'Wer vorsätzlich oder fahrlässig das Eigentum eines anderen widerrechtlich verletzt, ist zum Schadensersatz verpflichtet (§ 823 Abs. 1 BGB).',
            untersatz: 'A hat durch das Überfahren der roten Ampel fahrlässig das Eigentum des B (dessen Auto) widerrechtlich verletzt und einen Schaden von 5.000 € verursacht.',
            schluss: 'A ist dem B zum Ersatz des Schadens in Höhe von 5.000 € verpflichtet.'
          },
          explanation: 'Der Syllogismus muss alle relevanten Tatbestandsmerkmale (Eigentumsverletzung, Fahrlässigkeit, Widerrechtlichkeit, Schaden) aufgreifen.',
          commonMistakes: [
            'Vergessen der Fahrlässigkeit im Untersatz',
            'Keine konkrete Schadensbezifferung im Schluss',
            'Vermischung von Ober- und Untersatz'
          ]
        },
        hints: [
          {
            id: 'hint-1-1-2-3',
            text: 'Beginnen Sie mit der abstrakten Norm aus § 823 Abs. 1 BGB.',
            penaltyPoints: 3
          },
          {
            id: 'hint-1-1-2-4',
            text: 'Vergessen Sie nicht, alle Tatbestandsmerkmale im Untersatz zu subsumieren.',
            penaltyPoints: 5
          }
        ],
        feedback: {
          correct: 'Hervorragend! Ihr Syllogismus ist vollständig und logisch korrekt.',
          incorrect: 'Überprüfen Sie, ob alle Teile vorhanden und in der richtigen Reihenfolge sind.',
          partial: 'Guter Ansatz! Achten Sie darauf, alle Tatbestandsmerkmale zu erfassen.'
        }
      },
      {
        id: 'ex-ke1-1-2-4',
        type: 'dragDrop',
        difficulty: 'advanced',
        points: 25,
        title: 'Kettensyllogismus ordnen',
        description: 'Bringen Sie die Teile eines Kettensyllogismus in die richtige Reihenfolge',
        content: {
          question: 'Ordnen Sie die Schritte für den Eigentumserwerb nach § 929 S. 1 BGB in der richtigen syllogistischen Reihenfolge:',
          items: [
            { id: 'item-1', content: 'V war Eigentümer der Sache', correctPosition: 4 },
            { id: 'item-2', content: 'Also ist K Eigentümer geworden', correctPosition: 6 },
            { id: 'item-3', content: 'Übereignung setzt Einigung und Übergabe voraus', correctPosition: 0 },
            { id: 'item-4', content: 'K und V haben sich über den Eigentumsübergang geeinigt', correctPosition: 1 },
            { id: 'item-5', content: 'Kein Rechtsverlust durch Geschäftsunfähigkeit', correctPosition: 5 },
            { id: 'item-6', content: 'Die Sache wurde an K übergeben', correctPosition: 2 },
            { id: 'item-7', content: 'Berechtigung des Veräußerers ist erforderlich', correctPosition: 3 }
          ]
        },
        solution: {
          correct: [
            'Übereignung setzt Einigung und Übergabe voraus',
            'K und V haben sich über den Eigentumsübergang geeinigt',
            'Die Sache wurde an K übergeben',
            'Berechtigung des Veräußerers ist erforderlich',
            'V war Eigentümer der Sache',
            'Kein Rechtsverlust durch Geschäftsunfähigkeit',
            'Also ist K Eigentümer geworden'
          ],
          explanation: 'Die Prüfung folgt der Struktur des § 929 S. 1 BGB: Erst die Voraussetzungen nennen, dann subsumieren, schließlich die Rechtsfolge ziehen.'
        },
        hints: [
          {
            id: 'hint-1-1-2-5',
            text: 'Beginnen Sie mit den abstrakten Voraussetzungen der Norm.',
            penaltyPoints: 4
          }
        ],
        feedback: {
          correct: 'Exzellent! Sie beherrschen auch komplexe Syllogismusketten.',
          incorrect: 'Die Reihenfolge stimmt noch nicht. Denken Sie an: Norm → Subsumtion → Ergebnis.',
          partial: ''
        }
      }
    ],
    estimatedMinutes: 480, // 8 Stunden
    requiredMastery: 85
  },

  // 1.1.3 Juristische Begriffe und Definitionen (7 Stunden)
  {
    id: 'ke1-1-3-begriffe',
    moduleId: 'propaedeutikum',
    order: 3,
    title: '1.1.3 Juristische Begriffe und Definitionen',
    objectives: [
      {
        id: 'obj-1-1-3-1',
        description: 'Juristische Begriffe präzise definieren',
        bloomLevel: 'understand'
      },
      {
        id: 'obj-1-1-3-2',
        description: 'Verschiedene Definitionstypen unterscheiden und anwenden',
        bloomLevel: 'apply'
      },
      {
        id: 'obj-1-1-3-3',
        description: 'Methodengerechte Begriffsbildung durchführen',
        bloomLevel: 'create'
      }
    ],
    content: {
      id: 'content-1-1-3',
      type: 'mixed',
      sections: [
        {
          id: 'section-1-1-3-1',
          title: 'Bedeutung der Rechtsbegriffe',
          content: `Die juristische Fachsprache unterscheidet sich erheblich von der Alltagssprache. Präzision ist das A und O.

**Fachsprache vs. Alltagssprache:**

Juristische Begriffe haben oft eine spezifische Bedeutung, die von der umgangssprachlichen abweicht:
- "Sache" (umgangssprachlich: alles Mögliche) vs. "Sache" (juristisch: nur körperliche Gegenstände, § 90 BGB)
- "böswillig" (umgangssprachlich: mit schlechter Absicht) vs. "böswillig" (juristisch: Kenntnis der Rechtslage, § 853 BGB)
- "Besitz" (umgangssprachlich: Eigentum haben) vs. "Besitz" (juristisch: tatsächliche Sachherrschaft, § 854 BGB)

**Präzision und Eindeutigkeit:**
Jeder juristische Begriff muss eindeutig definiert sein, um Rechtssicherheit zu gewährleisten. Mehrdeutigkeiten können zu unterschiedlichen Rechtsergebnissen führen.

**Begriffskern und Begriffshof:**
- Begriffskern: Zweifelsfrei erfasste Fälle
- Begriffshof: Grenzfälle, die der Auslegung bedürfen

Beispiel "Wohnung" in Art. 13 GG:
- Begriffskern: Privatwohnung
- Begriffshof: Büroräume, Hotelzimmer, Wohnwagen`,
          examples: [
            {
              id: 'ex-1-1-3-1',
              title: 'Fachsprache vs. Alltagssprache',
              content: 'Alltagssprache: "Ich besitze ein Auto."\nFachsprache: "Ich bin Eigentümer eines Kraftfahrzeugs und habe Besitz daran."',
              explanation: 'Die juristische Fachsprache unterscheidet zwischen Eigentum (Rechtsverhältnis) und Besitz (tatsächliche Herrschaft).'
            }
          ]
        },
        {
          id: 'section-1-1-3-2',
          title: 'Definitionstypen',
          content: `Es gibt verschiedene Arten, wie juristische Begriffe definiert werden können:

**1. Klassische Definition (Aristotelische Definition):**
Definiens = Gattungsbegriff (genus proximum) + artbildende Merkmale (differentia specifica)

Formel: X ist ein Y, das sich durch Z auszeichnet.

Beispiel: "Eine Sache ist ein körperlicher Gegenstand" (§ 90 BGB)
- Gattungsbegriff: Gegenstand
- Artbildendes Merkmal: körperlich

**2. Legaldefinitionen:**
Vom Gesetzgeber ausdrücklich festgelegte Begriffsbestimmungen.

Beispiele:
- § 90 BGB: "Sachen im Sinne des Gesetzes sind nur körperliche Gegenstände."
- § 194 Abs. 1 BGB: "Das Recht, von einem anderen ein Tun oder Unterlassen zu verlangen (Anspruch)..."

Vorteil: Bindende Wirkung, Rechtssicherheit
Nachteil: Können der Entwicklung hinterherhinken

**3. Funktionale Definitionen:**
Bestimmung eines Begriffs durch seine Funktion oder seinen Zweck.

Beispiel: "Geschäftsführung ohne Auftrag" - definiert durch die Funktion der Interessenwahrnehmung

**4. Definitionen durch Aufzählung (enumerative Definitionen):**
Auflistung aller denkbaren Fälle.

Beispiel: Art. 12 Abs. 1 GG (Berufsfreiheit) - was ein "Beruf" ist, wird durch Beispiele konkretisiert`,
          examples: [
            {
              id: 'ex-1-1-3-2',
              title: 'Verschiedene Definitionstypen',
              content: 'Klassisch: "Kaufvertrag ist ein Vertrag, durch den sich der Verkäufer zur Übereignung und Übergabe verpflichtet"\nLegal: "Anspruch ist das Recht, von einem anderen ein Tun oder Unterlassen zu verlangen" (§ 194 BGB)\nFunktional: "Stellvertretung dient der Erweiterung der Handlungsmöglichkeiten"\nEnumerativ: "Öffentliche Sachen sind z.B. Straßen, Plätze, Gewässer..."',
              explanation: 'Je nach Kontext und Zweck werden unterschiedliche Definitionsarten verwendet.'
            }
          ]
        }
      ],
      resources: [
        {
          id: 'res-1-1-3-1',
          title: 'Juristisches Wörterbuch online',
          type: 'website',
          url: 'https://www.rechtslexikon.net',
          description: 'Umfassendes Nachschlagewerk für juristische Begriffe'
        },
        {
          id: 'res-1-1-3-2',
          title: 'Begriffsmemory - Lernspiel',
          type: 'interactive',
          url: '/games/begriffsmemory',
          description: 'Spielerisches Lernen juristischer Grundbegriffe'
        }
      ],
      glossary: [
        {
          term: 'Definition',
          definition: 'Bestimmung des Inhalts eines Begriffs durch Angabe seiner wesentlichen Merkmale',
          relatedTerms: ['Legaldefinition', 'Begriffsmerkmal']
        },
        {
          term: 'Genus proximum',
          definition: 'Der nächsthöhere Gattungsbegriff in einer Definition',
          relatedTerms: ['Differentia specifica', 'Klassische Definition']
        },
        {
          term: 'Differentia specifica',
          definition: 'Die artbildenden Merkmale, die einen Begriff von anderen der gleichen Gattung unterscheiden',
          relatedTerms: ['Genus proximum', 'Klassische Definition']
        },
        {
          term: 'Legaldefinition',
          definition: 'Eine vom Gesetzgeber ausdrücklich gegebene Begriffsbestimmung',
          relatedTerms: ['Bindungswirkung', 'Gesetzesauslegung']
        }
      ]
    },
    exercises: [
      {
        id: 'ex-ke1-1-3-1',
        type: 'fillInBlanks',
        difficulty: 'beginner',
        points: 15,
        title: 'Klassische Definition ergänzen',
        description: 'Vervollständigen Sie die klassische Definition nach dem Schema: Gattung + artbildende Merkmale',
        content: {
          question: 'Eine Willenserklärung ist eine ___ [Gattung], die auf die Herbeiführung einer ___ [artbildendes Merkmal] gerichtet ist.',
          template: 'Eine Willenserklärung ist eine [BLANK1], die auf die Herbeiführung einer [BLANK2] gerichtet ist.'
        },
        solution: {
          correct: {
            BLANK1: 'Willensäußerung',
            BLANK2: 'Rechtsfolge'
          },
          explanation: 'Die Willenserklärung gehört zur Gattung der Willensäußerungen und zeichnet sich durch das Merkmal aus, dass sie auf eine Rechtsfolge gerichtet ist.',
          alternativeAnswers: {
            BLANK1: ['Erklärung', 'private Willensäußerung'],
            BLANK2: ['rechtlichen Wirkung', 'rechtlichen Folge']
          }
        },
        hints: [
          {
            id: 'hint-1-1-3-1',
            text: 'Was wird bei einer Willenserklärung geäußert?',
            penaltyPoints: 2
          },
          {
            id: 'hint-1-1-3-2',
            text: 'Auf welche Art von Wirkung zielt eine Willenserklärung ab?',
            penaltyPoints: 3
          }
        ],
        feedback: {
          correct: 'Sehr gut! Sie verstehen den Aufbau klassischer Definitionen.',
          incorrect: 'Denken Sie an die Struktur: Gattung + spezifisches Merkmal.',
          partial: 'Teilweise richtig. Überprüfen Sie beide Lücken nochmals.'
        }
      },
      {
        id: 'ex-ke1-1-3-2',
        type: 'multipleChoice',
        difficulty: 'intermediate',
        points: 20,
        title: 'Definitionstypen unterscheiden',
        description: 'Ordnen Sie die Definitionen dem richtigen Typ zu',
        content: {
          question: 'Welche Art von Definition liegt vor: "Sachen im Sinne des Gesetzes sind nur körperliche Gegenstände" (§ 90 BGB)?',
          options: [
            'Funktionale Definition',
            'Legaldefinition',
            'Enumerative Definition',
            'Nominaldefinition'
          ]
        },
        solution: {
          correct: 1,
          explanation: 'Es handelt sich um eine Legaldefinition, da sie vom Gesetzgeber in § 90 BGB ausdrücklich gegeben wurde und damit bindende Wirkung hat.'
        },
        hints: [
          {
            id: 'hint-1-1-3-3',
            text: 'Achten Sie auf die Quelle der Definition. Wo steht sie?',
            penaltyPoints: 3
          }
        ],
        feedback: {
          correct: 'Richtig! Definitionen im Gesetz sind Legaldefinitionen.',
          incorrect: 'Denken Sie daran: Wenn der Gesetzgeber selbst definiert, spricht man von Legaldefinitionen.',
          partial: ''
        }
      },
      {
        id: 'ex-ke1-1-3-3',
        type: 'caseAnalysis',
        difficulty: 'advanced',
        points: 30,
        title: 'Begriffsdefinition erstellen',
        description: 'Entwickeln Sie eine eigene juristische Definition nach wissenschaftlichen Standards',
        content: {
          question: 'Definieren Sie den Begriff "Vertrag" nach dem Schema der klassischen Definition (Gattung + artbildende Merkmale).',
          context: 'Berücksichtigen Sie dabei die Elemente Willenserklärungen, Übereinstimmung und Rechtsfolgen.'
        },
        solution: {
          correct: {
            definition: 'Ein Vertrag ist ein Rechtsgeschäft, das aus mindestens zwei übereinstimmenden Willenserklärungen besteht.',
            gattung: 'Rechtsgeschäft',
            merkmale: ['mindestens zwei Willenserklärungen', 'Übereinstimmung der Willenserklärungen']
          },
          explanation: 'Die Definition erfasst die wesentlichen Elemente: Vertrag als Unterfall des Rechtsgeschäfts (Gattung) mit den spezifischen Merkmalen der mehreren übereinstimmenden Willenserklärungen.',
          alternativeFormulations: [
            'Ein Vertrag ist ein zweiseitiges Rechtsgeschäft, das durch übereinstimmende Willenserklärungen zustande kommt.'
          ]
        },
        hints: [
          {
            id: 'hint-1-1-3-4',
            text: 'Zu welcher Obergruppe gehört der Vertrag? (Rechtsgeschäft, Willenserklärung, ...)',
            penaltyPoints: 4
          },
          {
            id: 'hint-1-1-3-5',
            text: 'Was ist das Besondere am Vertrag im Vergleich zu einseitigen Rechtsgeschäften?',
            penaltyPoints: 5
          }
        ],
        feedback: {
          correct: 'Ausgezeichnet! Sie können eigenständig juristische Definitionen entwickeln.',
          incorrect: 'Überdenken Sie die Struktur: Welche Obergruppe? Welche spezifischen Merkmale?',
          partial: 'Guter Ansatz! Verfeinern Sie die Merkmale zur besseren Abgrenzung.'
        }
      }
    ],
    estimatedMinutes: 420, // 7 Stunden
    requiredMastery: 80
  },

  // Lernblock 1.2: Der Sachverhalt (25 Stunden)
  // 1.2.1 Sachverhaltserfassung (10 Stunden)
  {
    id: 'ke1-2-1-sachverhaltserfassung',
    moduleId: 'propaedeutikum',
    order: 4,
    title: '1.2.1 Sachverhaltserfassung',
    objectives: [
      {
        id: 'obj-1-2-1-1',
        description: 'Sachverhalte systematisch erfassen und strukturieren',
        bloomLevel: 'apply'
      },
      {
        id: 'obj-1-2-1-2',
        description: 'Relevante Informationen erkennen und extrahieren',
        bloomLevel: 'analyze'
      },
      {
        id: 'obj-1-2-1-3',
        description: 'Effiziente Lesetechniken für juristische Texte anwenden',
        bloomLevel: 'apply'
      }
    ],
    content: {
      id: 'content-1-2-1',
      type: 'mixed',
      sections: [
        {
          id: 'section-1-2-1-1',
          title: 'Die Kunst des Lesens',
          content: `Ein Sachverhalt muss methodisch erfasst werden. Dabei ist ein systematisches Vorgehen entscheidend.

**Drei-Stufen-Methode:**

**1. Erstes Lesen: Gesamtüberblick**
- Langsam und aufmerksam lesen
- Groben Überblick über den Fall gewinnen
- Beteiligte Personen identifizieren
- Zeitlichen Rahmen erfassen
- Noch keine Markierungen!

**2. Zweites Lesen: Details erfassen**
- Markierungssystem anwenden
- Wichtige Informationen hervorheben
- Rechtlich relevante Sachverhalte identifizieren
- Unklare Stellen markieren

**3. Drittes Lesen: Rechtliche Würdigung**
- Rechtsprobleme identifizieren
- Anspruchsgrundlagen zuordnen
- Strukturierung vornehmen
- Lösungsweg entwickeln

**Besonderheiten juristischer Texte:**
- Präzise Formulierungen haben Bedeutung
- Jedes Detail kann rechtlich relevant sein
- Zeitangaben sind oft entscheidend
- Modalität beachten ("könnte", "soll", "muss")`,
          examples: [
            {
              id: 'ex-1-2-1-1',
              title: 'Beispiel einer systematischen Sachverhaltserfassung',
              content: 'Erstes Lesen: "A und B schließen Vertrag über Laptop, B zahlt nicht pünktlich"\nZweites Lesen: Details markieren - Vertragsdatum, Zahlungsfrist, Mahnung\nDrittes Lesen: Rechtsprobleme erkennen - Verzug, Schadensersatz, Rücktritt',
              explanation: 'Jeder Lesedurchgang hat einen spezifischen Zweck und baut auf dem vorherigen auf.'
            }
          ]
        },
        {
          id: 'section-1-2-1-2',
          title: 'Markierungstechniken',
          content: `Ein effektives Markierungssystem ist unerlässlich für die Sachverhaltsbearbeitung.

**Farbsystem entwickeln:**
- 🔴 **Rot**: Rechtsprobleme und Streitpunkte
- 🔵 **Blau**: Personen und deren Eigenschaften
- 🟢 **Grün**: Zeitangaben und Fristen
- 🟡 **Gelb**: Orte und räumliche Angaben
- 🟣 **Lila**: Geldbeträge und Werte
- 🟠 **Orange**: Handlungen und Erklärungen

**Randnotizen effektiv nutzen:**
- Kurze Stichworte am Rand
- Rechtliche Einordnungen
- Querverweise zwischen Textpassagen
- Fragezeichen bei Unklarheiten
- Ausrufezeichen bei wichtigen Punkten

**Digitale Markierungstools:**
- PDF-Annotationen
- Verschiedene Highlighter-Farben
- Kommentarfunktionen
- Lesezeichen für wichtige Stellen`,
          examples: [
            {
              id: 'ex-1-2-1-2',
              title: 'Beispiel für systematische Markierung',
              content: 'Text: "Am 15.01. (GRÜN) kauft A (BLAU) von B (BLAU) ein Laptop für 800 Euro (LILA). B liefert nicht (ROT)."',
              explanation: 'Durch konsequente Farbgebung wird der Sachverhalt strukturiert und wichtige Informationen hervorgehoben.'
            }
          ]
        },
        {
          id: 'section-1-2-1-3',
          title: 'Informationsextraktion',
          content: `Nach der Markierung müssen die relevanten Informationen systematisch extrahiert werden.

**W-Fragen-Methode:**
- **Wer?** Alle beteiligten Personen
- **Was?** Handlungen, Erklärungen, Ereignisse
- **Wann?** Zeitpunkt, Reihenfolge, Fristen
- **Wo?** Ort des Geschehens (bei Sachschäden wichtig)
- **Wie?** Art und Weise der Handlung
- **Warum?** Motive (bei Vorsatz/Fahrlässigkeit relevant)
- **Womit?** Verwendete Mittel, Gegenstände

**Relevanzprüfung:**
Nicht alle Informationen sind rechtlich relevant:
- Irrelevante Details aussortieren
- Rechtliche Schlüsselwörter identifizieren
- Tatbestandsmerkmale zuordnen

**Vollständigkeitskontrolle:**
- Checkliste abarbeiten
- Fehlende Informationen notieren
- Vermutungen kennzeichnen
- Auslegungsspielräume erkennen`,
          examples: [
            {
              id: 'ex-1-2-1-3',
              title: 'W-Fragen am Beispiel',
              content: 'Sachverhalt: "A schlägt B mit der Faust ins Gesicht"\n\nWer? A (Täter), B (Opfer)\nWas? Schlag\nWann? [nicht angegeben]\nWo? [nicht angegeben]\nWie? Mit der Faust ins Gesicht\nWarum? [nicht angegeben - Vorsatz zu prüfen]\nWomit? Faust',
              explanation: 'Die W-Fragen helfen, alle relevanten Tatbestandsmerkmale zu erfassen und Lücken zu identifizieren.'
            }
          ]
        }
      ],
      resources: [
        {
          id: 'res-1-2-1-1',
          title: 'Interaktiver Sachverhalts-Trainer',
          type: 'interactive',
          url: '/tools/sachverhalt-trainer',
          description: 'Üben Sie die systematische Erfassung von Sachverhalten'
        },
        {
          id: 'res-1-2-1-2',
          title: 'Video: Markierungstechniken für Juristen',
          type: 'video',
          url: '/videos/markierungstechniken.mp4',
          duration: 12,
          description: 'Praktische Demonstration effektiver Markierungsstrategien'
        }
      ],
      glossary: [
        {
          term: 'Sachverhalt',
          definition: 'Die Gesamtheit der tatsächlichen Umstände eines Rechtsfalles',
          relatedTerms: ['Lebenssachverhalt', 'Tatsachen']
        },
        {
          term: 'Subsumtion',
          definition: 'Die Zuordnung eines Sachverhalts zu einer Rechtsnorm',
          relatedTerms: ['Tatbestand', 'Rechtsfolge']
        },
        {
          term: 'Tatbestandsmerkmal',
          definition: 'Ein einzelnes Element, das für die Anwendung einer Rechtsnorm erforderlich ist',
          relatedTerms: ['Tatbestand', 'Rechtsnorm']
        }
      ]
    },
    exercises: [
      {
        id: 'ex-ke1-2-1-1',
        type: 'multipleChoice',
        difficulty: 'beginner',
        points: 15,
        title: 'Lesetechnik anwenden',
        description: 'Wählen Sie die richtige Reihenfolge beim systematischen Lesen',
        content: {
          question: 'In welcher Reihenfolge sollten Sie einen Sachverhalt lesen?',
          options: [
            'Details erfassen → Gesamtüberblick → Rechtliche Würdigung',
            'Gesamtüberblick → Details erfassen → Rechtliche Würdigung',
            'Rechtliche Würdigung → Gesamtüberblick → Details erfassen',
            'Details erfassen → Rechtliche Würdigung → Gesamtüberblick'
          ]
        },
        solution: {
          correct: 1,
          explanation: 'Die Drei-Stufen-Methode beginnt mit dem Gesamtüberblick, geht dann zu den Details und schließt mit der rechtlichen Würdigung ab.'
        },
        hints: [
          {
            id: 'hint-1-2-1-1',
            text: 'Vom Groben zum Feinen - so sollte das Vorgehen sein.',
            penaltyPoints: 3
          }
        ],
        feedback: {
          correct: 'Richtig! Diese systematische Herangehensweise ist am effektivsten.',
          incorrect: 'Denken Sie an die logische Reihenfolge: erst verstehen, dann analysieren.',
          partial: ''
        }
      },
      {
        id: 'ex-ke1-2-1-2',
        type: 'caseAnalysis',
        difficulty: 'intermediate',
        points: 25,
        title: 'Sachverhalt strukturieren',
        description: 'Wenden Sie die W-Fragen-Methode an',
        content: {
          question: 'Extrahieren Sie die relevanten Informationen mit der W-Fragen-Methode.',
          sachverhalt: 'Am Mittwoch, den 10. März 2023, um 14:30 Uhr, fährt der 25-jährige Student Klaus mit seinem Fahrrad durch die Münchener Innenstadt. An der Kreuzung Marienplatz/Dienerstraße übersieht er die rote Ampel und stößt mit dem Fußgänger Peter zusammen, der gerade die Straße überquert. Peter erleidet dabei einen Bruch des rechten Handgelenks.',
          context: 'Erfassen Sie alle rechtlich relevanten Tatsachen systematisch.'
        },
        solution: {
          correct: {
            wer: 'Klaus (25-jähriger Student), Peter (Fußgänger)',
            was: 'Zusammenstoß zwischen Fahrrad und Fußgänger',
            wann: 'Mittwoch, 10. März 2023, 14:30 Uhr',
            wo: 'Kreuzung Marienplatz/Dienerstraße, München',
            wie: 'Klaus übersieht rote Ampel, stößt mit Peter zusammen',
            warum: 'Unaufmerksamkeit/Fahrlässigkeit (rote Ampel übersehen)',
            folgen: 'Bruch des rechten Handgelenks bei Peter'
          },
          explanation: 'Die W-Fragen erfassen alle wesentlichen Elemente für eine mögliche Schadensersatzprüfung nach § 823 BGB.'
        },
        hints: [
          {
            id: 'hint-1-2-1-2',
            text: 'Achten Sie besonders auf die Umstände, die für eine Haftung relevant sein könnten.',
            penaltyPoints: 4
          }
        ],
        feedback: {
          correct: 'Sehr gut! Sie haben alle rechtlich relevanten Tatsachen erfasst.',
          incorrect: 'Überprüfen Sie, ob Sie alle W-Fragen beantwortet haben.',
          partial: 'Guter Ansatz! Ergänzen Sie noch die fehlenden Aspekte.'
        }
      },
      {
        id: 'ex-ke1-2-1-3',
        type: 'dragDrop',
        difficulty: 'beginner',
        points: 20,
        title: 'Markierungsfarben zuordnen',
        description: 'Ordnen Sie die Farben den richtigen Kategorien zu',
        content: {
          question: 'Welche Farbe sollte für welche Art von Information verwendet werden?',
          items: [
            { id: 'item-1', content: 'Zeitangaben', correctCategory: 'Grün' },
            { id: 'item-2', content: 'Rechtsprobleme', correctCategory: 'Rot' },
            { id: 'item-3', content: 'Personen', correctCategory: 'Blau' },
            { id: 'item-4', content: 'Geldbeträge', correctCategory: 'Lila' },
            { id: 'item-5', content: 'Orte', correctCategory: 'Gelb' },
            { id: 'item-6', content: 'Handlungen', correctCategory: 'Orange' }
          ],
          categories: ['Rot', 'Blau', 'Grün', 'Gelb', 'Lila', 'Orange']
        },
        solution: {
          correct: {
            'Rot': ['Rechtsprobleme'],
            'Blau': ['Personen'],
            'Grün': ['Zeitangaben'],
            'Gelb': ['Orte'],
            'Lila': ['Geldbeträge'],
            'Orange': ['Handlungen']
          },
          explanation: 'Ein konsistentes Farbsystem hilft bei der schnellen Orientierung im Sachverhalt.'
        },
        hints: [
          {
            id: 'hint-1-2-1-3',
            text: 'Denken Sie an Ampelfarben für Probleme und natürliche Assoziationen.',
            penaltyPoints: 3
          }
        ],
        feedback: {
          correct: 'Perfekt! Ein gutes Farbsystem ist die halbe Miete.',
          incorrect: 'Überlegen Sie, welche Farbassoziationen logisch sind.',
          partial: ''
        }
      }
    ],
    estimatedMinutes: 600, // 10 Stunden
    requiredMastery: 75
  },

  // 1.2.2 Lösungshinweise im Sachverhalt (5 Stunden)
  {
    id: 'ke1-2-2-loesungshinweise',
    moduleId: 'propaedeutikum',
    order: 5,
    title: '1.2.2 Lösungshinweise im Sachverhalt',
    objectives: [
      {
        id: 'obj-1-2-2-1',
        description: 'Offene und versteckte Hinweise im Sachverhalt erkennen',
        bloomLevel: 'analyze'
      },
      {
        id: 'obj-1-2-2-2',
        description: 'Signalwörter interpretieren und nutzen',
        bloomLevel: 'apply'
      },
      {
        id: 'obj-1-2-2-3',
        description: 'Strukturhinweise für den Lösungsweg verwenden',
        bloomLevel: 'evaluate'
      }
    ],
    content: {
      id: 'content-1-2-2',
      type: 'mixed',
      sections: [
        {
          id: 'section-1-2-2-1',
          title: 'Offene Hinweise',
          content: `Sachverhalte enthalten oft explizite Hinweise auf die zu prüfenden Rechtsprobleme.

**Explizite Fragestellungen:**
Der Sachverhalt endet häufig mit konkreten Fragen:
- "Prüfen Sie die Ansprüche des A gegen B."
- "Welche Rechte hat K gegen V?"
- "Ist die Willenserklarung des X wirksam?"

**Aufgabenstellungen:**
Klare Arbeitsanweisungen geben die Richtung vor:
- "Erstellen Sie ein Gutachten..."
- "Begründen Sie Ihre Antwort..."
- "Berücksichtigen Sie dabei..."

**Bearbeitungsvermerke:**
Methodische Vorgaben helfen bei der Strukturierung:
- "Gehen Sie chronologisch vor"
- "Trennen Sie zwischen Anspruchsgrundlagen"
- "Prüfen Sie alle Tatbestandsmerkmale"

**Rechtliche Bewertungshinweise:**
Direkte Hinweise auf Problembereiche:
- "Problematisch ist dabei..."
- "Streitig ist, ob..."
- "Nach h.M. / a.A. ..."`,
          examples: [
            {
              id: 'ex-1-2-2-1',
              title: 'Beispiel für offene Hinweise',
              content: 'Sachverhalt: "...A schlägt B. Fraglich ist, ob sich A strafbar gemacht hat. Prüfen Sie § 223 StGB."\nHinweise: Direkte Nennung der Prüfungsvorschrift (§ 223 StGB) und der Fragestellung (Strafbarkeit)',
              explanation: 'Solche direkten Hinweise zeigen klar den Prüfungsgegenstand und die anzuwendende Norm auf.'
            }
          ]
        },
        {
          id: 'section-1-2-2-2',
          title: 'Versteckte Hinweise',
          content: `Oft sind die wichtigsten Hinweise subtil im Sachverhalt versteckt und müssen erkannt werden.

**Juristische Fachbegriffe als Wegweiser:**
Fachbegriffe deuten auf bestimmte Rechtsbereiche hin:
- "Eigentümer" → Sachenrecht
- "Vertragspartner" → Schuldrecht
- "Vorsätzlich" → Strafrecht
- "Ermessen" → Verwaltungsrecht

**Ungewöhnliche Formulierungen:**
Auffallende Wendungen weisen auf Probleme hin:
- "Ohne es zu merken" → Fahrlässigkeit
- "In der Absicht zu..." → Vorsatz
- "Irrtümlich" → Irrtumsproblematik
- "Vermeintlich" → Putativprobleme

**Wiederholungen und Betonungen:**
Wichtige Sachverhaltsdetails werden oft wiederholt:
- Mehrfache Erwähnung von Zeitpunkten → Fristen
- Betonung von Eigenschaften → Tatbestandsmerkmale
- Hervorhebung von Absichten → Subjektive Elemente

**Modalverben als Signale:**
- "könnte" → Möglichkeit, die zu prüfen ist
- "soll" → Rechtspflicht
- "darf" → Berechtigung
- "muss" → Notwendigkeit`,
          examples: [
            {
              id: 'ex-1-2-2-2',
              title: 'Versteckte Hinweise erkennen',
              content: 'Sachverhalt: "A kauft von B ein Handy. B erwähnt beiläufig, dass das Display einen kleinen Kratzer hat."\nVersteckte Hinweise: "beiläufig" deutet auf unzureichende Aufklärung hin, "kleiner Kratzer" ist eine Mangelbeschreibung',
              explanation: 'Die Art der Formulierung gibt Hinweise auf rechtliche Probleme - hier Aufklärungspflichten und Mangelhaftigkeit.'
            }
          ]
        }
      ],
      resources: [
        {
          id: 'res-1-2-2-1',
          title: 'Signalwort-Lexikon',
          type: 'database',
          url: '/resources/signalwoerter',
          description: 'Sammlung juristischer Signalwörter und ihrer Bedeutung'
        }
      ],
      glossary: [
        {
          term: 'Signalwort',
          definition: 'Ein Wort oder Ausdruck im Sachverhalt, das auf ein bestimmtes Rechtsproblem hinweist',
          relatedTerms: ['Lösungshinweis', 'Sachverhaltsanalyse']
        },
        {
          term: 'Putativfall',
          definition: 'Fall eines Irrtums über tatsächliche Umstände',
          relatedTerms: ['Irrtum', 'Vorsatz']
        }
      ]
    },
    exercises: [
      {
        id: 'ex-ke1-2-2-1',
        type: 'multipleChoice',
        difficulty: 'intermediate',
        points: 20,
        title: 'Signalwörter erkennen',
        description: 'Identifizieren Sie das Signalwort und seine rechtliche Bedeutung',
        content: {
          question: 'Im Sachverhalt heißt es: "A handelt in der Absicht, B zu schädigen." Auf welches rechtliche Problem weist dies hin?',
          options: [
            'Fahrlässigkeit',
            'Vorsatz (dolus directus)',
            'Eventualvorsatz',
            'Rechtfertigungsgrund'
          ]
        },
        solution: {
          correct: 1,
          explanation: '"In der Absicht" ist ein klares Signalwort für direkten Vorsatz (dolus directus), da eine gezielte Schädigungsabsicht vorliegt.'
        },
        hints: [
          {
            id: 'hint-1-2-2-1',
            text: 'Achten Sie auf Wörter, die eine bewusste Willensrichtung ausdrücken.',
            penaltyPoints: 3
          }
        ],
        feedback: {
          correct: 'Richtig! "Absicht" deutet auf direkten Vorsatz hin.',
          incorrect: 'Denken Sie an die verschiedenen Vorsatzformen und deren Merkmale.'
        }
      }
    ],
    estimatedMinutes: 300, // 5 Stunden
    requiredMastery: 80
  },

  // 1.2.3 Sachverhaltsgliederung (10 Stunden)
  {
    id: 'ke1-2-3-gliederung',
    moduleId: 'propaedeutikum',
    order: 6,
    title: '1.2.3 Sachverhaltsgliederung',
    objectives: [
      {
        id: 'obj-1-2-3-1',
        description: 'Verschiedene Visualisierungstechniken beherrschen',
        bloomLevel: 'apply'
      },
      {
        id: 'obj-1-2-3-2',
        description: 'Komplexe Sachverhalte strukturiert aufbereiten',
        bloomLevel: 'create'
      },
      {
        id: 'obj-1-2-3-3',
        description: 'Effiziente Arbeitsweise für Klausuren entwickeln',
        bloomLevel: 'evaluate'
      }
    ],
    content: {
      id: 'content-1-2-3',
      type: 'mixed',
      sections: [
        {
          id: 'section-1-2-3-1',
          title: 'Zeitskizze (Chronologie)',
          content: `Eine systematische zeitliche Darstellung ist bei komplexen Fällen unentbehrlich.

**Lineare Zeitstrahlen:**
Für einfache chronologische Abläufe:

01.01. ────┬──── 15.01. ────┬──── 01.02. ────┬──── 15.02.
           │             │             │
     Vertragsschluss  Lieferung    Mangel      Rücktritt

**Parallele Zeitverläufe:**
Wenn mehrere Parteien gleichzeitig handeln:

A: 01.01. Angebot ────┌─── 05.01. Widerruf
B:                    └─── 03.01. Annahme

**Fristberechnungen:**
Wichtig für Verjährung, Gewährleistung, etc.:
- Fristbeginn markieren
- Fristende berechnen
- Hemmung/Unterbrechung vermerken

**Kausalketten:**
Ursache-Wirkungs-Verhältnisse darstellen:
Handlung A → Folge 1 → Folge 2 → Schaden`,
          examples: [
            {
              id: 'ex-1-2-3-1',
              title: 'Komplexe Zeitskizze',
              content: 'Kaufvertrag mit Lieferverzögerung:\n01.03. Vertragsschluss\n15.03. Vereinbarter Liefertermin\n20.03. 1. Mahnung\n25.03. 2. Mahnung mit Nachfrist bis 30.03.\n02.04. Rücktrittserklarung\n05.04. Endlich Lieferung',
              explanation: 'Die Zeitskizze zeigt den Verzug und die ordnungsgemäße Rücktrittserklarung nach Nachfristsetzung.'
            }
          ]
        },
        {
          id: 'section-1-2-3-2',
          title: 'Personenskizze',
          content: `Bei mehreren Beteiligten ist eine Übersicht der Beziehungen essentiell.

**Einfache Beziehungsdiagramme:**

A (Verkäufer) ←──── Kaufvertrag ────→ B (Käufer)
      │                                  │
      │                                  │
      ↓                                  ↓
C (Lieferant)                        D (Endkunde)

**Hierarchien:**
Bei Stellvertretung oder Organverhältnissen:

     Geschäftsführer A
           │
      (vertritt)
           │
        GmbH X
           │
    (Vertragspartner)
           │
      Kunde B

**Verflechtungen:**
Bei komplexen Mehrpersonenverhältnissen:
- Wer schuldet wem was?
- Wer haftet für wen?
- Welche Ansprüche bestehen?

**Fragenschema:**
- Wer will was von wem?
- Woraus (Anspruchsgrundlage)?
- Mit welchem Ergebnis?`,
          examples: [
            {
              id: 'ex-1-2-3-2',
              title: 'Mehrpersonenverhältnis',
              content: 'A verkauft B ein Auto. C bürgt für B. B zahlt nicht.\n\nPersonenskizze:\nA (Gläubiger) ←─ Kaufpreis ─→ B (Schuldner)\n     │                           ↓\n     ↓                        Bürgschaft\n  Ansprüche                      ↓\n     │                        C (Bürge)\n     └────────── gegen ──────────→',
              explanation: 'Die Skizze zeigt die verschiedenen Anspruchsrichtungen und Sicherungsbeziehungen.'
            }
          ]
        }
      ],
      resources: [
        {
          id: 'res-1-2-3-1',
          title: 'Gliederungsvorlagen',
          type: 'interactive',
          url: '/templates/sachverhaltsgliederung',
          description: 'Vorgefertigte Vorlagen für verschiedene Gliederungsarten'
        }
      ],
      glossary: [
        {
          term: 'Zeitskizze',
          definition: 'Grafische Darstellung des zeitlichen Ablaufs eines Sachverhalts',
          relatedTerms: ['Chronologie', 'Fristberechnung']
        },
        {
          term: 'Kausalkette',
          definition: 'Darstellung von Ursache-Wirkungs-Zusammenhängen',
          relatedTerms: ['Kausalität', 'Äquivalenztheorie']
        }
      ]
    },
    exercises: [
      {
        id: 'ex-ke1-2-3-1',
        type: 'caseAnalysis',
        difficulty: 'advanced',
        points: 40,
        title: 'Komplexe Sachverhaltsgliederung',
        description: 'Erstellen Sie eine vollständige Gliederung mit Zeit- und Personenskizze',
        content: {
          question: 'Gliedern Sie den folgenden Sachverhalt systematisch.',
          sachverhalt: 'Am 1.1. schließt A mit B einen Kaufvertrag über ein Auto für 10.000 €. C bürgt für B. Am 15.1. liefert A das Auto. Am 30.1. sollte B zahlen, tut es aber nicht. Am 5.2. mahnt A den B. Am 10.2. setzt A dem B eine Nachfrist bis 20.2. Am 25.2. verlangt A von C die Zahlung. Am 1.3. zahlt C an A. Am 5.3. verlangt C von B Ausgleich.',
          context: 'Erstellen Sie Zeitskizze, Personenskizze und Anspruchsübersicht.'
        },
        solution: {
          correct: {
            zeitskizze: '01.01. Kaufvertrag A-B\n15.01. Lieferung\n30.01. Fälligkeit (nicht bezahlt)\n05.02. Mahnung\n10.02. Nachfristsetzung bis 20.02.\n25.02. Inanspruchnahme Bürge C\n01.03. Zahlung C an A\n05.03. Regress C gegen B',
            personenskizze: 'A (Verkäufer/Gläubiger) ←─ 10.000€ ─→ B (Käufer/Schuldner)\n                          │                    ↓\n                          │                 Bürgschaft\n                       gezahlt                 ↓\n                          │                 C (Bürge)\n                          ↓                    ↓\n                       01.03.              Regress\n                                           05.03.',
            ansprueche: '1. A gg. B: Kaufpreis aus § 433 II BGB\n2. A gg. C: Bürgschaft aus § 765 BGB\n3. C gg. B: Regress aus § 774 BGB'
          },
          explanation: 'Die systematische Gliederung zeigt alle Rechtsbeziehungen und den zeitlichen Ablauf mit allen relevanten Fristen.'
        },
        hints: [
          {
            id: 'hint-1-2-3-1',
            text: 'Beginnen Sie mit der Zeitskizze, dann die Personen und zuletzt die Ansprüche.',
            penaltyPoints: 5
          }
        ],
        feedback: {
          correct: 'Ausgezeichnet! Sie haben alle Elemente systematisch erfasst.',
          incorrect: 'Überprüfen Sie Ihre Gliederung auf Vollständigkeit.'
        }
      }
    ],
    estimatedMinutes: 600, // 10 Stunden
    requiredMastery: 85
  },

  // 1.1.3 Juristische Begriffe und Definitionen (7 Stunden)  
  {
    id: 'ke1-1-3-begriffe',
    moduleId: 'propaedeutikum',
    order: 3,
    title: '1.1.3 Juristische Begriffe und Definitionen',
    objectives: [
      {
        id: 'obj-1-1-3-1',
        description: 'Juristische Begriffe präzise definieren',
        bloomLevel: 'understand'
      },
      {
        id: 'obj-1-1-3-2',
        description: 'Verschiedene Definitionstypen unterscheiden und anwenden',
        bloomLevel: 'apply'
      },
      {
        id: 'obj-1-1-3-3',
        description: 'Methodengerechte Begriffsbildung durchführen',
        bloomLevel: 'create'
      }
    ],
    content: {
      id: 'content-1-1-3',
      type: 'mixed',
      sections: [
        {
          id: 'section-1-1-3-1',
          title: 'Bedeutung der Rechtsbegriffe',
          content: `Die juristische Fachsprache unterscheidet sich erheblich von der Alltagssprache. Präzision ist das A und O.

**Fachsprache vs. Alltagssprache:**

Juristische Begriffe haben oft eine spezifische Bedeutung, die von der umgangssprachlichen abweicht:
- "Sache" (umgangssprachlich: alles Mögliche) vs. "Sache" (juristisch: nur körperliche Gegenstände, § 90 BGB)
- "böswillig" (umgangssprachlich: mit schlechter Absicht) vs. "böswillig" (juristisch: Kenntnis der Rechtslage, § 853 BGB)
- "Besitz" (umgangssprachlich: Eigentum haben) vs. "Besitz" (juristisch: tatsächliche Sachherrschaft, § 854 BGB)

**Präzision und Eindeutigkeit:**
Jeder juristische Begriff muss eindeutig definiert sein, um Rechtssicherheit zu gewährleisten. Mehrdeutigkeiten können zu unterschiedlichen Rechtsergebnissen führen.

**Begriffskern und Begriffshof:**
- Begriffskern: Zweifelsfrei erfasste Fälle
- Begriffshof: Grenzfälle, die der Auslegung bedürfen

Beispiel "Wohnung" in Art. 13 GG:
- Begriffskern: Privatwohnung
- Begriffshof: Büroräume, Hotelzimmer, Wohnwagen`,
          examples: [
            {
              id: 'ex-1-1-3-3',
              title: 'Klassische Definition "Willenserklärung"',
              content: 'Willenserklärung = Erklärung (Genus proximum) + die auf Herbeiführung einer Rechtsfolge gerichtet ist (Differentia specifica)',
              explanation: 'Die Willenserklärung unterscheidet sich von anderen Erklärungen durch ihren Rechtsfolgenwillen.'
            },
            {
              id: 'ex-1-1-3-4',
              title: 'Legaldefinition vs. Alltagssprache',
              content: 'Juristisch: Tiere sind keine Sachen (§ 90a BGB), werden aber wie Sachen behandelt\nAlltagssprache: "Die Sache mit dem Hund..."',
              explanation: 'Die juristische Definition weicht bewusst vom Alltagsverständnis ab.'
            }
          ]
        },
        {
          id: 'section-1-1-3-3',
          title: 'Begriffsbildung im Recht',
          content: `**Abstraktion und Konkretisierung:**
Rechtsbegriffe bewegen sich auf verschiedenen Abstraktionsebenen:

**Abstraktionspyramide:**

         Rechtsgeschäft
              ↑
        Verpflichtungsgeschäft
              ↑
           Vertrag
              ↑
      Schuldrechtlicher Vertrag
              ↑
         Kaufvertrag
              ↑
    Verbrauchsgüterkauf

**Ober- und Unterbegriffe:**
- Oberbegriff: Der allgemeinere Begriff (z.B. "Vertrag")
- Unterbegriff: Der speziellere Begriff (z.B. "Kaufvertrag")
- Nebenbegriffe: Begriffe auf gleicher Ebene (z.B. Kauf-, Miet-, Werkvertrag)

**Begriffsmerkmale:**
Jeder Begriff setzt sich aus einzelnen Merkmalen zusammen:
- Positive Merkmale: Was vorliegen muss
- Negative Merkmale: Was nicht vorliegen darf
- Alternative Merkmale: Von mehreren genügt eines

**Begriffssystematik:**
Das BGB arbeitet mit einem ausgefeilten Begriffssystem:
- Allgemeiner Teil: Grundbegriffe für alle Bücher
- Besondere Teile: Spezifische Begriffe
- Verweisungen vermeiden Wiederholungen`,
          examples: [
            {
              id: 'ex-1-1-3-5',
              title: 'Begriffspyramide Eigentumserwerb',
              content: 'Rechtsgeschäft → Verfügung → Übereignung → Übereignung beweglicher Sachen → Übereignung nach § 929 BGB → Handschenkung',
              explanation: 'Jede Stufe konkretisiert die vorherige weiter.'
            }
          ]
        }
      ],
      resources: [
        {
          id: 'res-1-1-3-1',
          title: 'Juristische Begriffsdatenbank',
          type: 'database',
          url: '/resources/begriffsdatenbank',
          description: 'Durchsuchbare Sammlung wichtiger Rechtsbegriffe mit Definitionen'
        },
        {
          id: 'res-1-1-3-2',
          title: 'Definitionstrainer',
          type: 'interactive',
          url: '/interactive/definitionstrainer',
          description: 'Interaktives Tool zum Üben von Begriffsdefinitionen'
        }
      ],
      glossary: [
        {
          term: 'Definition',
          definition: 'Bestimmung eines Begriffs durch Angabe seiner wesentlichen Merkmale',
          relatedTerms: ['Genus proximum', 'Differentia specifica']
        },
        {
          term: 'Legaldefinition',
          definition: 'Vom Gesetzgeber selbst vorgenommene verbindliche Begriffsbestimmung',
          relatedTerms: ['Bindungswirkung', 'Gesetzesauslegung']
        },
        {
          term: 'Genus proximum',
          definition: 'Die nächsthöhere Gattung bei einer klassischen Definition',
          relatedTerms: ['Definition', 'Differentia specifica']
        },
        {
          term: 'Differentia specifica',
          definition: 'Das artbildende, unterscheidende Merkmal bei einer Definition',
          relatedTerms: ['Definition', 'Genus proximum']
        }
      ]
    },
    exercises: [
      {
        id: 'ex-ke1-1-3-1',
        type: 'multipleChoice',
        difficulty: 'beginner',
        points: 10,
        title: 'Definitionstypen erkennen',
        description: 'Identifizieren Sie den Definitionstyp',
        content: {
          question: 'Um welchen Definitionstyp handelt es sich bei § 90 BGB: "Sachen im Sinne des Gesetzes sind nur körperliche Gegenstände"?',
          options: [
            'Klassische Definition nach Aristoteles',
            'Legaldefinition',
            'Funktionale Definition',
            'Definition durch Aufzählung'
          ]
        },
        solution: {
          correct: 1,
          explanation: 'Es handelt sich um eine Legaldefinition, da der Gesetzgeber selbst den Begriff "Sache" für das BGB verbindlich definiert.'
        },
        hints: [
          {
            id: 'hint-1-1-3-1',
            text: 'Wer nimmt hier die Definition vor?',
            penaltyPoints: 2
          }
        ],
        feedback: {
          correct: 'Richtig! Legaldefinitionen sind gesetzliche Begriffsbestimmungen.',
          incorrect: 'Denken Sie daran: Wenn im Gesetz selbst definiert wird, ist es eine Legaldefinition.',
          partial: ''
        }
      },
      {
        id: 'ex-ke1-1-3-2',
        type: 'fillInBlanks',
        difficulty: 'intermediate',
        points: 20,
        title: 'Klassische Definition bilden',
        description: 'Vervollständigen Sie die Definition nach dem klassischen Schema',
        content: {
          question: 'Bilden Sie eine klassische Definition für "Kaufvertrag":',
          template: 'Ein Kaufvertrag ist ein [BLANK1] (Genus proximum), durch den sich der Verkäufer zur [BLANK2] und Eigentumsverschaffung und der Käufer zur [BLANK3] verpflichtet (Differentia specifica).'
        },
        solution: {
          correct: {
            BLANK1: 'Vertrag',
            BLANK2: 'Übergabe',
            BLANK3: 'Kaufpreiszahlung'
          },
          explanation: 'Der Kaufvertrag ist eine spezielle Form des Vertrags (Genus) mit den besonderen Pflichten aus § 433 BGB (Differentia).',
          alternativeAnswers: {
            BLANK1: ['schuldrechtlicher Vertrag', 'Schuldvertrag'],
            BLANK2: ['Lieferung', 'Übereignung']
          }
        },
        hints: [
          {
            id: 'hint-1-1-3-2',
            text: 'Was ist die übergeordnete Kategorie des Kaufvertrags?',
            penaltyPoints: 3
          },
          {
            id: 'hint-1-1-3-3',
            text: 'Schauen Sie in § 433 BGB nach den Hauptpflichten.',
            penaltyPoints: 5
          }
        ],
        feedback: {
          correct: 'Ausgezeichnet! Sie beherrschen die klassische Definitionstechnik.',
          incorrect: 'Überprüfen Sie nochmal die Begriffe. Ein Kaufvertrag ist eine Art von...?',
          partial: 'Fast richtig! Achten Sie auf die präzisen Pflichten aus § 433 BGB.'
        }
      },
      {
        id: 'ex-ke1-1-3-3',
        type: 'caseAnalysis',
        difficulty: 'advanced',
        points: 30,
        title: 'Begriffsgrenzen bestimmen',
        description: 'Analysieren Sie Begriffskern und Begriffshof',
        content: {
          question: 'Bestimmen Sie für den Begriff "Waffe" i.S.d. § 224 Abs. 1 Nr. 2 StGB Begriffskern und Begriffshof. Ordnen Sie die folgenden Gegenstände zu.',
          sachverhalt: 'Zu beurteilen sind: Pistole, Küchenmesser, Baseballschläger, Eisenstange, zerbrochene Flasche, Pfefferspray, Stein, Gürtel',
          context: '§ 224 StGB spricht von gefährlicher Körperverletzung mittels einer "Waffe oder eines anderen gefährlichen Werkzeugs".'
        },
        solution: {
          correct: {
            begriffskern: ['Pistole', 'Küchenmesser'],
            begriffshof: ['Baseballschläger', 'Eisenstange', 'zerbrochene Flasche', 'Pfefferspray'],
            nicht_waffe: ['Stein', 'Gürtel']
          },
          explanation: 'Waffen sind zur Verletzung von Menschen bestimmt oder geeignet. Der Begriffskern umfasst eindeutige Waffen, der Begriffshof die Grenzfälle, die je nach Verwendung Waffen sein können.',
          commonMistakes: [
            'Verwechslung von "Waffe" und "gefährlichem Werkzeug"',
            'Zu enge Auslegung nur auf Schusswaffen',
            'Keine Berücksichtigung der konkreten Verwendung'
          ]
        },
        hints: [
          {
            id: 'hint-1-1-3-4',
            text: 'Waffen sind primär zur Verletzung bestimmt, Werkzeuge können dazu verwendet werden.',
            penaltyPoints: 5
          }
        ],
        feedback: {
          correct: 'Sehr gut! Sie verstehen die Abstufungen juristischer Begriffe.',
          incorrect: 'Überdenken Sie: Was macht einen Gegenstand zur Waffe?',
          partial: 'Teilweise richtig. Beachten Sie den Unterschied zwischen Bestimmung und Eignung.'
        }
      },
      {
        id: 'ex-ke1-1-3-4',
        type: 'dragDrop',
        difficulty: 'intermediate',
        points: 25,
        title: 'Begriffshierarchie ordnen',
        description: 'Ordnen Sie die Begriffe in der Abstraktionspyramide',
        content: {
          question: 'Ordnen Sie die Begriffe von abstrakt (oben) nach konkret (unten):',
          items: [
            { id: 'item-1', content: 'Handgeschäft', correctPosition: 5 },
            { id: 'item-2', content: 'Rechtsgeschäft', correctPosition: 0 },
            { id: 'item-3', content: 'Verpflichtungsgeschäft', correctPosition: 1 },
            { id: 'item-4', content: 'Kaufvertrag', correctPosition: 3 },
            { id: 'item-5', content: 'Vertrag', correctPosition: 2 },
            { id: 'item-6', content: 'Barkauf', correctPosition: 4 }
          ]
        },
        solution: {
          correct: [
            'Rechtsgeschäft',
            'Verpflichtungsgeschäft',
            'Vertrag',
            'Kaufvertrag',
            'Barkauf',
            'Handgeschäft'
          ],
          explanation: 'Die Hierarchie zeigt die zunehmende Konkretisierung vom allgemeinen Rechtsgeschäft zum speziellen Handgeschäft.'
        },
        hints: [
          {
            id: 'hint-1-1-3-5',
            text: 'Beginnen Sie mit dem allgemeinsten Begriff.',
            penaltyPoints: 3
          }
        ],
        feedback: {
          correct: 'Perfekt! Sie verstehen die Systematik der Begriffshierarchien.',
          incorrect: 'Die Reihenfolge stimmt noch nicht. Was ist allgemeiner, was spezieller?',
          partial: ''
        }
      },
      {
        id: 'ex-ke1-1-3-5',
        type: 'essay',
        difficulty: 'advanced',
        points: 40,
        title: 'Definition entwickeln',
        description: 'Entwickeln Sie eine eigene juristische Definition',
        content: {
          question: 'Definieren Sie den Begriff "Smart Contract" juristisch präzise. Verwenden Sie die klassische Definitionsmethode und grenzen Sie zu verwandten Begriffen ab.',
          requirements: [
            'Genus proximum und differentia specifica',
            'Abgrenzung zu herkömmlichen Verträgen',
            'Rechtliche Einordnung',
            'Mindestens 150 Wörter'
          ]
        },
        solution: {
          correct: 'Ein Smart Contract ist ein Vertrag, dessen Bedingungen in Computercode geschrieben sind und der sich bei Eintritt bestimmter Bedingungen automatisch selbst ausführt.',
          modelAnswer: 'Ein Smart Contract ist ein Vertrag (genus proximum), dessen Bedingungen in Computercode geschrieben sind und der sich bei Eintritt bestimmter Bedingungen automatisch selbst ausführt (differentia specifica). Im Unterschied zu herkömmlichen Verträgen bedarf es keiner manuellen Durchführung der Vertragspflichten. Die Besonderheit liegt in der Programmierung der Vertragslogik, wodurch bei Erfüllung vordefinierter Bedingungen automatisch die vereinbarten Rechtsfolgen eintreten. Rechtlich handelt es sich um eine besondere Form der Vertragsgestaltung, bei der die Willenserklärungen in Code übersetzt werden. Die automatische Ausführung ersetzt nicht die rechtliche Verbindlichkeit, sondern stellt lediglich eine technische Umsetzungsform dar.',
          explanation: 'Eine gute Definition muss den Begriff eindeutig bestimmen und von ähnlichen Begriffen abgrenzen.',
          evaluationCriteria: [
            'Verwendung der klassischen Definitionsmethode',
            'Präzise Abgrenzung',
            'Juristische Einordnung',
            'Verständlichkeit'
          ]
        },
        hints: [
          {
            id: 'hint-1-1-3-6',
            text: 'Überlegen Sie: Was ist die Oberkategorie eines Smart Contracts?',
            penaltyPoints: 5
          }
        ],
        feedback: {
          correct: 'Hervorragende Definition! Sie haben alle Elemente berücksichtigt.',
          incorrect: 'Ihre Definition benötigt noch mehr Struktur. Nutzen Sie genus proximum und differentia specifica.',
          partial: 'Guter Ansatz! Arbeiten Sie noch an der Abgrenzung zu verwandten Begriffen.'
        }
      }
    ],
    estimatedMinutes: 420, // 7 Stunden
    requiredMastery: 85
  },

  // Lernblock 1.3: Gutachtenstil (25 Stunden)
  // 1.3.1 Einführung in den Gutachtenstil (8 Stunden)
  {
    id: 'ke1-3-1-gutachtenstil-einfuehrung',
    moduleId: 'propaedeutikum',
    order: 7,
    title: '1.3.1 Einführung in den Gutachtenstil',
    objectives: [
      {
        id: 'obj-1-3-1-1',
        description: 'Die Struktur des Gutachtenstils verstehen und anwenden',
        bloomLevel: 'apply'
      },
      {
        id: 'obj-1-3-1-2',
        description: 'Gutachten nach der klassischen Fünf-Schritt-Methode erstellen',
        bloomLevel: 'create'
      },
      {
        id: 'obj-1-3-1-3',
        description: 'Ergebnisoffen prüfen und argumentieren',
        bloomLevel: 'evaluate'
      }
    ],
    content: {
      id: 'content-1-3-1',
      type: 'mixed',
      sections: [
        {
          id: 'section-1-3-1-1',
          title: 'Die Fünf-Schritt-Struktur',
          content: `Der Gutachtenstil ist die methodische Grundlage aller juristischen Fallbearbeitung.

**1. Obersatz (Rechtsfrage formulieren):**
- "Fraglich ist, ob..."
- "Zu prüfen ist, ob..."
- "A könnte gegen B einen Anspruch auf ... aus § ... haben."
- "X könnte sich wegen ... strafbar gemacht haben."

**2. Voraussetzungen (Tatbestandsmerkmale):**
- "Dies setzt voraus, dass..."
- "Dafür müssten folgende Voraussetzungen vorliegen:"
- "§ ... erfordert..."

**3. Definition (Begriffsbestimmung):**
- "Unter ... versteht man..."
- "... ist ..."
- "... liegt vor, wenn..."
- Bei Legaldefinitionen: Gesetzestext zitieren

**4. Subsumtion (Anwendung auf den Fall):**
- "Im vorliegenden Fall..."
- "Hier hat A..."
- "Nach dem Sachverhalt..."
- "Vorliegend..."

**5. Ergebnis (Zwischenergebnis):**
- "Somit..."
- "Folglich..."
- "Mithin..."
- "Daher..."

**Wichtige Grundsätze:**
- Ergebnisoffen prüfen
- Schritt für Schritt vorgehen
- Jeden Punkt vollständig abarbeiten
- Keine Vorwegnahme des Ergebnisses`,
          examples: [
            {
              id: 'ex-1-3-1-1',
              title: 'Vollständiges Grundschema',
              content: 'Obersatz: A könnte gegen B einen Anspruch auf Kaufpreiszahlung aus § 433 Abs. 2 BGB haben.\nVoraussetzungen: Dies setzt voraus, dass zwischen A und B ein wirksamer Kaufvertrag besteht.\nDefinition: Ein Kaufvertrag kommt durch zwei übereinstimmende Willenserklärungen zustande (§§ 433, 145 ff. BGB).\nSubsumtion: A und B haben sich über Kaufgegenstand (Laptop) und Kaufpreis (800 Euro) geeinigt.\nErgebnis: Somit liegt ein wirksamer Kaufvertrag vor.',
              explanation: 'Jeder Schritt baut logisch auf dem vorherigen auf und führt zum Zwischenergebnis.'
            }
          ]
        },
        {
          id: 'section-1-3-1-2',
          title: 'Formulierungstechniken',
          content: `Die richtige Formulierung ist entscheidend für ein gutes Gutachten.

**Obersatz-Formulierungen:**
- Anspruchsgrundlagen: "A könnte gegen B einen Anspruch auf ... aus § ... haben"
- Strafrecht: "A könnte sich wegen ... nach § ... strafbar gemacht haben"
- Öffentliches Recht: "Der Verwaltungsakt könnte rechtswidrig sein"

**Konjunktiv verwenden:**
- "könnte" statt "hat"
- "wäre" statt "ist"
- "läge vor" statt "liegt vor"
- Dadurch wird die Ergebnisoffenheit deutlich

**Präzise Definitionen:**
- Kurz und prägnant
- Alle wesentlichen Merkmale erfassen
- Bei Legaldefinitionen: Wortlaut verwenden
- Bei umstrittenen Begriffen: Meinungsstand darstellen

**Subsumtionstechnik:**
- Sachverhalt systematisch abarbeiten
- Jedes Tatbestandsmerkmal einzeln prüfen
- Problematische Punkte ausführlicher behandeln
- Unproblematische Punkte knapp abhandeln

**Ergebnisformulierung:**
- Eindeutig und bestimmt
- Bezug zum Obersatz
- Bei mehreren Voraussetzungen: Gesamtergebnis bilden`,
          examples: [
            {
              id: 'ex-1-3-1-2',
              title: 'Formulierungsvergleich',
              content: 'Schlecht: "A hat einen Anspruch, weil er einen Vertrag hat."\nBesser: "A könnte gegen B einen Anspruch haben, wenn ein Vertrag vorliegt. Ein Vertrag setzt übereinstimmende Willenserklärungen voraus. Hier haben A und B sich geeinigt. Somit liegt ein Vertrag vor."',
              explanation: 'Die bessere Formulierung ist ergebnisoffen, strukturiert und methodisch sauber.'
            }
          ]
        },
        {
          id: 'section-1-3-1-3',
          title: 'Häufige Fehler vermeiden',
          content: `Typische Anfängerfehler im Gutachtenstil:

**1. Ergebnis vorwegnehmen:**
Falsch: "Da A einen Anspruch hat, prüfen wir § 433 BGB."
Richtig: "A könnte einen Anspruch aus § 433 BGB haben."

**2. Unvollständige Prüfung:**
Falsch: "§ 433 BGB erfordert einen Vertrag. Hier liegt ein Vertrag vor."
Richtig: "§ 433 BGB erfordert einen Kaufvertrag. Ein Kaufvertrag kommt durch..."

**3. Fehlende Definitionen:**
Falsch: "A hat vorsätzlich gehandelt."
Richtig: "Vorsatz liegt vor bei Wissen und Wollen. A wusste... und wollte..."

**4. Sprunghafte Argumentation:**
Falsch: "A hat B geschlagen, also § 223 StGB."
Richtig: "Schritt-für-Schritt-Prüfung aller Tatbestandsmerkmale."

**5. Urteilsstil verwenden:**
Falsch: "A hat einen Anspruch, weil..."
Richtig: "A könnte einen Anspruch haben, wenn..."

**Qualitätskontrolle:**
- Ist jeder Schritt vollständig?
- Sind alle Definitionen korrekt?
- Ist die Subsumtion nachvollziehbar?
- Ist das Ergebnis eindeutig?`,
          examples: [
            {
              id: 'ex-1-3-1-3',
              title: 'Fehlerkorrektur',
              content: 'Fehlerhaft: "A hat B bestohlen, da er das Fahrrad genommen hat."\nKorrigiert: "A könnte sich wegen Diebstahls nach § 242 StGB strafbar gemacht haben. Diebstahl erfordert die Wegnahme einer fremden beweglichen Sache in Zueignungsabsicht. Wegnahme ist... Hier hat A das Fahrrad des B genommen..."',
              explanation: 'Die Korrektur zeigt die systematische Herangehensweise ohne Ergebnisvorwegnahme.'
            }
          ]
        }
      ],
      resources: [
        {
          id: 'res-1-3-1-1',
          title: 'Gutachten-Generator',
          type: 'interactive',
          url: '/tools/gutachten-generator',
          description: 'Interaktives Tool zur Erstellung von Gutachten mit Schritt-für-Schritt-Anleitung'
        },
        {
          id: 'res-1-3-1-2',
          title: 'Video: Gutachtenstil vs. Urteilsstil',
          type: 'video',
          url: '/videos/gutachten-urteilsstil.mp4',
          duration: 18,
          description: 'Vergleichende Darstellung der beiden Darstellungsformen'
        }
      ],
      glossary: [
        {
          term: 'Gutachtenstil',
          definition: 'Methodische, ergebnisoffene Prüfung rechtlicher Fragestellungen in fünf Schritten',
          relatedTerms: ['Obersatz', 'Subsumtion', 'Ergebnisoffenheit']
        },
        {
          term: 'Ergebnisoffenheit',
          definition: 'Das Prinzip, bei der Prüfung das Ergebnis nicht vorherzunehmen',
          relatedTerms: ['Konjunktiv', 'Gutachtenstil']
        },
        {
          term: 'Zwischenergebnis',
          definition: 'Das Ergebnis einer einzelnen Prüfung innerhalb des Gesamtgutachtens',
          relatedTerms: ['Obersatz', 'Schluss']
        }
      ]
    },
    exercises: [
      {
        id: 'ex-ke1-3-1-1',
        type: 'multipleChoice',
        difficulty: 'beginner',
        points: 15,
        title: 'Gutachtenschritte erkennen',
        description: 'Identifizieren Sie den Gutachtenschritt',
        content: {
          question: 'Welcher Gutachtenschritt liegt vor: "A könnte gegen B einen Anspruch auf Schadensersatz aus § 823 Abs. 1 BGB haben"?',
          options: [
            'Voraussetzungen',
            'Obersatz',
            'Definition',
            'Subsumtion'
          ]
        },
        solution: {
          correct: 1,
          explanation: 'Dies ist ein typischer Obersatz, der die zu prüfende Rechtsfrage formuliert und die mögliche Anspruchsgrundlage nennt.'
        },
        hints: [
          {
            id: 'hint-1-3-1-1',
            text: 'Der erste Schritt eines Gutachtens formuliert die Rechtsfrage.',
            penaltyPoints: 3
          }
        ],
        feedback: {
          correct: 'Richtig! Das ist ein klassischer Obersatz.',
          incorrect: 'Denken Sie an die Fünf-Schritt-Struktur des Gutachtenstils.'
        }
      },
      {
        id: 'ex-ke1-3-1-2',
        type: 'fillInBlanks',
        difficulty: 'intermediate',
        points: 25,
        title: 'Gutachten vervollständigen',
        description: 'Ergänzen Sie die fehlenden Gutachtenschritte',
        content: {
          question: 'Vervollständigen Sie das Gutachten:',
          template: '[BLANK1]: A könnte gegen B einen Anspruch auf Herausgabe des Fahrrads aus § 985 BGB haben.\n[BLANK2]: Dies setzt voraus, dass A Eigentümer des Fahrrads ist und B es besitzt.\n[BLANK3]: Eigentum ist die rechtliche Zugehörigkeit einer Sache zu einer Person.\n[BLANK4]: Nach dem Sachverhalt hat A das Fahrrad gekauft und übereignet bekommen.\n[BLANK5]: Somit ist A Eigentümer und hat einen Anspruch aus § 985 BGB.'
        },
        solution: {
          correct: {
            BLANK1: 'Obersatz',
            BLANK2: 'Voraussetzungen',
            BLANK3: 'Definition',
            BLANK4: 'Subsumtion',
            BLANK5: 'Ergebnis'
          },
          explanation: 'Die fünf Schritte des Gutachtenstils in ihrer klassischen Reihenfolge.',
          alternativeAnswers: {
            BLANK5: ['Schluss', 'Zwischenergebnis', 'Folgerung']
          }
        },
        hints: [
          {
            id: 'hint-1-3-1-2',
            text: 'Merken Sie sich: O-V-D-S-E (Obersatz-Voraussetzungen-Definition-Subsumtion-Ergebnis)',
            penaltyPoints: 4
          }
        ],
        feedback: {
          correct: 'Perfekt! Sie kennen die Gutachtenstruktur.',
          incorrect: 'Überprüfen Sie die Reihenfolge der Gutachtenschritte.'
        }
      },
      {
        id: 'ex-ke1-3-1-3',
        type: 'gutachten',
        difficulty: 'advanced',
        points: 50,
        title: 'Erstes eigenes Gutachten',
        description: 'Erstellen Sie ein vollständiges Gutachten im klassischen Stil',
        content: {
          question: 'Erstellen Sie ein Gutachten für folgenden Fall:',
          sachverhalt: 'A leiht sich von seinem Freund B dessen Laptop für eine Präsentation. Nach der Präsentation "vergisst" A, den Laptop zurückzugeben und benutzt ihn weiter für private Zwecke. B verlangt den Laptop zurück.',
          context: 'Prüfen Sie den Anspruch des B gegen A auf Herausgabe des Laptops aus § 985 BGB. Gehen Sie dabei nur auf das Merkmal "Besitz" ein.'
        },
        solution: {
          correct: {
            obersatz: 'B könnte gegen A einen Anspruch auf Herausgabe des Laptops aus § 985 BGB haben.',
            voraussetzungen: 'Dies setzt voraus, dass B Eigentümer des Laptops ist und A den Laptop besitzt.',
            definition: 'Besitz ist die tatsächliche Sachherrschaft über eine Sache (§ 854 Abs. 1 BGB).',
            subsumtion: 'A hat den Laptop von B erhalten und übt weiterhin tatsächliche Herrschaft über ihn aus, indem er ihn für private Zwecke nutzt. Dass A den Laptop ursprünglich nur leihen wollte und eigentlich zurückgeben sollte, ändert nichts an der tatsächlichen Sachherrschaft.',
            ergebnis: 'Mithin besitzt A den Laptop. Da B unstreitig Eigentümer ist, hat er einen Anspruch aus § 985 BGB.'
          },
          explanation: 'Das Gutachten folgt der klassischen Struktur und prüft methodisch sauber das Tatbestandsmerkmal "Besitz".'
        },
        hints: [
          {
            id: 'hint-1-3-1-3',
            text: 'Beginnen Sie mit der Rechtsfrage: Wer will was von wem woraus?',
            penaltyPoints: 5
          },
          {
            id: 'hint-1-3-1-4',
            text: 'Besitz ist nur die tatsächliche Herrschaft, nicht die rechtliche Berechtigung.',
            penaltyPoints: 7
          }
        ],
        feedback: {
          correct: 'Hervorragend! Sie beherrschen die Gutachtentechnik.',
          incorrect: 'Überprüfen Sie Ihr Gutachten auf Vollständigkeit aller fünf Schritte.'
        }
      }
    ],
    estimatedMinutes: 480, // 8 Stunden
    requiredMastery: 85
  },

  // 1.3.2 Gutachten vs. Urteilsstil (8 Stunden)
  {
    id: 'ke1-3-2-stile-vergleich',
    moduleId: 'propaedeutikum',
    order: 8,
    title: '1.3.2 Gutachten- vs. Urteilsstil',
    objectives: [
      {
        id: 'obj-1-3-2-1',
        description: 'Unterschiede zwischen Gutachten- und Urteilsstil verstehen',
        bloomLevel: 'understand'
      },
      {
        id: 'obj-1-3-2-2',
        description: 'Situationsgerecht den passenden Stil wählen',
        bloomLevel: 'evaluate'
      },
      {
        id: 'obj-1-3-2-3',
        description: 'Feststellungsstil für unproblematische Punkte anwenden',
        bloomLevel: 'apply'
      }
    ],
    content: {
      id: 'content-1-3-2',
      type: 'mixed',
      sections: [
        {
          id: 'section-1-3-2-1',
          title: 'Die drei Darstellungsstile',
          content: `Juristen haben drei grundlegende Darstellungsstile zur Verfügung:

**1. Gutachtenstil:**
- Ergebnisoffen ("könnte haben")
- Vollständige Prüfung aller Schritte
- Für Klausuren und unklare Rechtsfragen
- Ausführliche Begründung

**2. Urteilsstil:**
- Ergebnis vorangestellt ("hat einen Anspruch")
- Begründung folgt dem Ergebnis
- Für eindeutige Fälle und Urteile
- Kompakte Darstellung

**3. Feststellungsstil:**
- Einfache Feststellung ohne Prüfung
- Für völlig unproblematische Punkte
- Kurz und bündig
- Keine Begründung erforderlich

**Wann welcher Stil?**

**Gutachtenstil verwenden bei:**
- Klausuren und Hausarbeiten
- Streitigen Rechtsfragen
- Komplexen Tatbeständen
- Unklaren Subsumtionen

**Urteilsstil verwenden bei:**
- Urteilen und Beschlüssen
- Eindeutigen Rechtsfragen
- Zusammenfassungen
- Anwaltlichen Stellungnahmen

**Feststellungsstil verwenden bei:**
- Unstreitigen Tatsachen
- Offensichtlichen Rechtsfragen
- Bekannten Grundsätzen
- Zeitersparnis in Klausuren`,
          examples: [
            {
              id: 'ex-1-3-2-1',
              title: 'Stilvergleich am Beispiel',
              content: 'Gutachtenstil: "A könnte gegen B einen Anspruch haben, wenn ein Vertrag vorliegt. Ein Vertrag setzt... Hier haben A und B... Somit liegt ein Vertrag vor."\n\nUrteilsstil: "A hat gegen B einen Anspruch aus Vertrag. Zwischen A und B kam ein Vertrag zustande, da beide..."\n\nFeststellungsstil: "Zwischen A und B besteht ein Kaufvertrag."',
              explanation: 'Jeder Stil hat seine Berechtigung je nach Kontext und Zweck der Darstellung.'
            }
          ]
        },
        {
          id: 'section-1-3-2-2',
          title: 'Stilwechsel und Kombinationen',
          content: `In der Praxis werden die Stile oft kombiniert:

**Grundregel:**
- Problematische Punkte: Gutachtenstil
- Unproblematische Punkte: Feststellungsstil
- Ergebniszusammenfassung: Urteilsstil

**Beispiel einer Kombination:**
"A könnte gegen B einen Anspruch auf Kaufpreiszahlung aus § 433 Abs. 2 BGB haben.

I. Anspruch entstanden
Ein Kaufvertrag ist entstanden (unstreitig). [Feststellungsstil]

II. Anspruch nicht untergegangen
Fraglich ist, ob der Anspruch durch Erfüllung untergegangen ist. [Gutachtenstil]
Erfüllung liegt vor, wenn... [Definition]
Hier hat B nicht gezahlt... [Subsumtion]
Somit ist der Anspruch nicht untergegangen. [Ergebnis]

Ergebnis: A hat gegen B einen Anspruch auf Kaufpreiszahlung." [Urteilsstil]

**Stilwechsel-Signale:**
- "Unstreitig ist..." → Feststellungsstil
- "Fraglich ist..." → Gutachtenstil
- "Ergebnis:" → Urteilsstil
- "Problematisch ist..." → Gutachtenstil`,
          examples: [
            {
              id: 'ex-1-3-2-2',
              title: 'Geschickte Stilkombination',
              content: 'A und B schließen einen Kaufvertrag (unstreitig). Fraglich ist, ob A in Verzug ist. Verzug setzt Mahnung voraus. A wurde am 1.3. gemahnt. Somit ist A in Verzug. Ergebnis: B kann Schadensersatz verlangen.',
              explanation: 'Die Kombination spart Zeit bei unproblematischen Punkten und konzentriert sich auf die streitigen Fragen.'
            }
          ]
        }
      ],
      resources: [
        {
          id: 'res-1-3-2-1',
          title: 'Stil-Trainer',
          type: 'interactive',
          url: '/tools/stil-trainer',
          description: 'Interaktives Training zur Auswahl des richtigen Darstellungsstils'
        }
      ],
      glossary: [
        {
          term: 'Urteilsstil',
          definition: 'Darstellungsform mit vorangestelltem Ergebnis und nachfolgender Begründung',
          relatedTerms: ['Gutachtenstil', 'Feststellungsstil']
        },
        {
          term: 'Feststellungsstil',
          definition: 'Einfache Feststellung ohne ausführliche Prüfung für unproblematische Punkte',
          relatedTerms: ['Unstreitig', 'Offensichtlich']
        }
      ]
    },
    exercises: [
      {
        id: 'ex-ke1-3-2-1',
        type: 'multipleChoice',
        difficulty: 'intermediate',
        points: 20,
        title: 'Stilwahl treffen',
        description: 'Wählen Sie den angemessenen Darstellungsstil',
        content: {
          question: 'Für welche Situation ist der Gutachtenstil am besten geeignet?',
          options: [
            'Unstreitige Vertragsentstehung',
            'Komplexe Vorsatzprüfung',
            'Bekannte Definitionen',
            'Ergebniszusammenfassung'
          ]
        },
        solution: {
          correct: 1,
          explanation: 'Bei komplexen und streitigen Rechtsfragen ist der Gutachtenstil mit seiner ausführlichen, ergebnisoffenen Prüfung am besten geeignet.'
        },
        hints: [
          {
            id: 'hint-1-3-2-1',
            text: 'Gutachtenstil ist für problematische und strittige Fragen da.',
            penaltyPoints: 3
          }
        ],
        feedback: {
          correct: 'Richtig! Komplexe Prüfungen erfordern den Gutachtenstil.',
          incorrect: 'Denken Sie daran: Je problematischer, desto eher Gutachtenstil.'
        }
      }
    ],
    estimatedMinutes: 480, // 8 Stunden
    requiredMastery: 80
  },

  // 1.3.3 Praktische Gutachtenerstellung (9 Stunden)
  {
    id: 'ke1-3-3-gutachten-praxis',
    moduleId: 'propaedeutikum',
    order: 9,
    title: '1.3.3 Praktische Gutachtenerstellung',
    objectives: [
      {
        id: 'obj-1-3-3-1',
        description: 'Komplexe Gutachten selbstständig erstellen',
        bloomLevel: 'create'
      },
      {
        id: 'obj-1-3-3-2',
        description: 'Mehrgliedrige Prüfungen strukturieren',
        bloomLevel: 'analyze'
      },
      {
        id: 'obj-1-3-3-3',
        description: 'Zeiteffizient und methodensicher arbeiten',
        bloomLevel: 'apply'
      }
    ],
    content: {
      id: 'content-1-3-3',
      type: 'mixed',
      sections: [
        {
          id: 'section-1-3-3-1',
          title: 'Aufbau komplexer Gutachten',
          content: `Bei umfangreichen Rechtsprüfungen ist eine klare Gliederung essentiell.

**Grundstruktur:**
I. Hauptpunkt
  1. Unterpunkt
    a) Unter-Unterpunkt
      aa) Detail
      bb) Detail
    b) Unter-Unterpunkt
  2. Unterpunkt
II. Hauptpunkt

**Beispiel Anspruchsprüfung:**
A gegen B auf Schadensersatz aus § 823 Abs. 1 BGB

I. Anspruch entstanden
  1. Rechtsgutsverletzung
    a) Eigentum
      aa) A war Eigentümer
      bb) Verletzung durch Beschädigung
    b) Sonstiges Recht
  2. Handlung
  3. Kausalität
    a) Äquivalenz
    b) Adäquanz
  4. Rechtswidrigkeit
  5. Verschulden
    a) Vorsatz
    b) Fahrlässigkeit

II. Anspruch nicht untergegangen

III. Anspruch durchsetzbar

**Gliederungsregeln:**
- Logische Reihenfolge
- Jeder Punkt nur ein Problem
- Vollständigkeit vor Kürze
- Übersichtlichkeit bewahren`,
          examples: [
            {
              id: 'ex-1-3-3-1',
              title: 'Strukturierte Gliederung',
              content: 'Kaufrechtsgutachten:\nI. Anspruch entstanden (§ 433 II BGB)\n  1. Angebot\n  2. Annahme\n  3. Einigung über essentialia negotii\nII. Anspruch fällig\nIII. Anspruch nicht erloschen\nIV. Keine Einwendungen',
              explanation: 'Die systematische Gliederung führt durch alle relevanten Prüfungspunkte.'
            }
          ]
        },
        {
          id: 'section-1-3-3-2',
          title: 'Klausurtechnik und Zeitmanagement',
          content: `In Klausuren ist effizientes Arbeiten entscheidend.

**Zeitaufteilung (4-Stunden-Klausur):**
- 45 Min: Sachverhalt lesen und gliedern
- 3 Std: Gutachten schreiben
- 15 Min: Korrektur und Überarbeitung

**Schreibtechnik:**
- Erst denken, dann schreiben
- Jeden Satz zu Ende denken
- Absätze für neue Gedanken
- Randnummern für Übersicht

**Häufige Zeitfallen:**
- Zu langes Lesen
- Perfekte Formulierung
- Unwichtige Details
- Fehlende Gliederung

**Effizienz-Tipps:**
- Standardformulierungen verwenden
- Abkürzungen konsequent nutzen
- Unwichtiges weglassen
- Zeit für Korrektur einplanen

**Notizen-System:**
Am Rand:
- ✓ = erledigt
- ? = unklar
- ! = wichtig
- ➜ = Verweis

**Qualitätskontrolle:**
- Sind alle Obersätze beantwortet?
- Ist jede Definition vollständig?
- Sind alle Subsumtionen nachvollziehbar?
- Gibt es ein Endergebnis?`,
          examples: [
            {
              id: 'ex-1-3-3-2',
              title: 'Klausur-Checkliste',
              content: 'Vor Abgabe prüfen:\n□ Alle Obersätze beantwortet?\n□ Definitionen vollständig?\n□ Subsumtion nachvollziehbar?\n□ Ergebnis eindeutig?\n□ Gliederung erkennbar?\n□ Name und Matrikelnummer?\n□ Leserlich geschrieben?',
              explanation: 'Eine systematische Kontrolle verhindert typische Flüchtigkeitsfehler.'
            }
          ]
        }
      ],
      resources: [
        {
          id: 'res-1-3-3-1',
          title: 'Klausur-Simulator',
          type: 'interactive',
          url: '/tools/klausur-simulator',
          description: 'Realistische Klausurbedingungen mit Zeitbegrenzung'
        }
      ],
      glossary: [
        {
          term: 'Gliederung',
          definition: 'Systematische Struktur zur Ordnung der Gedanken in einem Gutachten',
          relatedTerms: ['Aufbau', 'Systematik']
        },
        {
          term: 'Klausurtechnik',
          definition: 'Methodisches Vorgehen zur effizienten Bearbeitung von Klausuren',
          relatedTerms: ['Zeitmanagement', 'Prüfungsstrategie']
        }
      ]
    },
    exercises: [
      {
        id: 'ex-ke1-3-3-1',
        type: 'gutachten',
        difficulty: 'advanced',
        points: 60,
        title: 'Komplexes Gutachten erstellen',
        description: 'Erstellen Sie ein vollständiges, strukturiertes Gutachten',
        content: {
          question: 'Bearbeiten Sie folgenden Fall vollständig:',
          sachverhalt: 'A verkauft an B sein Auto für 15.000 €. B zahlt sofort, aber A liefert nicht bis zum vereinbarten Termin 1.3. Am 5.3. mahnt B. Am 10.3. setzt B eine Nachfrist bis 15.3. Am 20.3. erklärt B den Rücktritt. A will das Auto nun doch noch liefern und verlangt den Kaufpreis.',
          context: 'Prüfen Sie alle Ansprüche. Gliedern Sie übersichtlich.'
        },
        solution: {
          correct: {
            gliederung: 'A gegen B auf Kaufpreis (§ 433 II BGB)\nI. Anspruch entstanden\nII. Anspruch erloschen durch Rücktritt?\n  1. Rücktrittsgrund (§ 323 BGB)\n    a) Schlechterfüllung\n    b) Nachfristsetzung\n    c) Erfolgloser Ablauf\n  2. Rücktrittserklärung\n  3. Kein Ausschluss\nIII. Ergebnis',
            subsumtion: 'Der Rücktritt ist wirksam, da B nach Verzug eine angemessene Nachfrist gesetzt hat und diese erfolglos abgelaufen ist. A hat daher keinen Anspruch mehr.',
            endergebnis: 'A hat gegen B keinen Anspruch auf Zahlung des Kaufpreises.'
          },
          explanation: 'Die strukturierte Prüfung zeigt systematisch alle Aspekte des Rücktrittsrechts auf.'
        },
        hints: [
          {
            id: 'hint-1-3-3-1',
            text: 'Beginnen Sie mit dem ursprünglichen Anspruch und prüfen Sie dann den Rücktritt.',
            penaltyPoints: 8
          }
        ],
        feedback: {
          correct: 'Hervorragend! Sie beherrschen komplexe Gutachten.',
          incorrect: 'Überprüfen Sie Ihre Gliederung und die Vollständigkeit der Prüfung.'
        }
      }
    ],
    estimatedMinutes: 540, // 9 Stunden
    requiredMastery: 90
  },
  
  // Zusammenfassung Kurseinheit 1
  {
    id: 'ke1-zusammenfassung',
    moduleId: 'propaedeutikum',
    order: 10,
    title: '📚 Zusammenfassung: Fallbearbeitung und Gutachtentechnik',
    objectives: [
      {
        id: 'obj-ke1-zusammen-1',
        description: 'Alle Kernkonzepte der Kurseinheit rekapitulieren',
        bloomLevel: 'remember'
      },
      {
        id: 'obj-ke1-zusammen-2',
        description: 'Verbindungen zwischen den Lerneinheiten herstellen',
        bloomLevel: 'understand'
      },
      {
        id: 'obj-ke1-zusammen-3',
        description: 'Vorbereitung auf die Modulprüfung',
        bloomLevel: 'apply'
      }
    ],
    content: {
      id: 'content-ke1-zusammen',
      type: 'mixed',
      sections: [
        {
          id: 'section-ke1-zusammen-1',
          title: '🎯 Die wichtigsten Erkenntnisse',
          content: `**Sie haben in dieser Kurseinheit gelernt:**

## 1️⃣ Der juristische Fall (Einheiten 1.1.1-1.1.2)
- **Transformation:** Vom sozialen Konflikt zum Rechtsfall
- **Sachverhaltserfassung:** W-Fragen, relevante Fakten identifizieren
- **Falltypen:** Zivil-, Straf- und Öffentliches Recht unterscheiden

💡 **Merksatz:** "Nicht jeder Streit ist ein Rechtsfall - aber jeder Rechtsfall war mal ein Streit!"

## 2️⃣ Die juristische Methodik (Einheiten 1.1.3-1.2.1)
- **Syllogismus:** Obersatz → Untersatz → Ergebnis
- **Gutachtenstil:** Hypothese → Begründung → Schlussfolgerung
- **Urteilsstil:** Nur bei eindeutigen Fällen
- **Definitionstechnik:** Genus proximum + differentia specifica

🔑 **Eselsbrücke GUFA:**
- **G**utachtenstil für
- **U**nklare
- **F**älle
- **A**nwenden

## 3️⃣ Praktische Gutachtenerstellung (Einheiten 1.2.2-1.3.3)
- **Struktur:** Anspruchsgrundlage → Tatbestandsmerkmale → Rechtsfolge
- **Schwerpunktsetzung:** Problematisches ausführlich, Eindeutiges kurz
- **Gliederung:** Römische und arabische Ziffern, Buchstaben
- **Klausurtechnik:** Zeitmanagement, Lösungsskizze, Reinschrift

⏰ **Zeitaufteilung in Klausuren:**
- 20% Sachverhaltserfassung
- 30% Lösungsskizze
- 40% Ausformulierung
- 10% Korrektur`
        },
        {
          id: 'section-ke1-zusammen-2',
          title: '🔗 Zusammenhänge der Lerneinheiten',
          content: `**Die Lerneinheiten bauen systematisch aufeinander auf:**

\`\`\`
1.1 Grundbegriffe
    ↓
1.2 Methodik (Gutachtenstil)
    ↓
1.3 Anwendung (Klausur)
\`\`\`

**Querverbindungen:**
- Der **Syllogismus** (1.2.1) strukturiert jede **Prüfung** (1.3.1)
- Die **Sachverhaltserfassung** (1.1.2) bestimmt die **Gliederung** (1.3.2)
- Die **Definitionstechnik** (1.1.3) prägt den **Gutachtenstil** (1.2.2)

**Praxisbezug:**
Alle Techniken werden Sie in jeder juristischen Arbeit brauchen:
- 📝 Hausarbeiten
- ⚖️ Klausuren
- 💼 Berufspraxis`,
          examples: [
            {
              id: 'ex-ke1-zusammen-1',
              title: 'Methodensynopse',
              content: `**Vergleich der erlernten Methoden:**

| Aspekt | Gutachtenstil | Urteilsstil |
|--------|--------------|-------------|
| **Anwendung** | Problematische Fragen | Eindeutige Fragen |
| **Struktur** | Frage → Prüfung → Ergebnis | Ergebnis → Begründung |
| **Umfang** | Ausführlich | Knapp |
| **Beispiel** | "Fraglich ist..." | "A schuldet B..." |`,
              explanation: 'Diese Übersicht zeigt, wann welche Methode anzuwenden ist.'
            }
          ]
        },
        {
          id: 'section-ke1-zusammen-3',
          title: '✅ Checkliste zur Prüfungsvorbereitung',
          content: `**Können Sie diese Fragen beantworten?**

☐ **Grundlagen:**
- Was unterscheidet einen Rechtsfall von einem sozialen Konflikt?
- Welche W-Fragen helfen bei der Sachverhaltserfassung?
- Was ist der Unterschied zwischen Tatfrage und Rechtsfrage?

☐ **Methodik:**
- Wie ist der juristische Syllogismus aufgebaut?
- Wann verwende ich Gutachtenstil, wann Urteilsstil?
- Wie definiere ich juristische Begriffe korrekt?

☐ **Anwendung:**
- Wie gliedere ich ein Gutachten richtig?
- Wie manage ich meine Zeit in der Klausur?
- Wie setze ich Schwerpunkte in der Bearbeitung?

**Selbsttest:** Wenn Sie alle Fragen mit "Ja" beantworten können, sind Sie gut vorbereitet!`
        },
        {
          id: 'section-ke1-zusammen-4',
          title: '📊 Lernkarten-Zusammenfassung',
          content: `**Die 10 wichtigsten Konzepte als Lernkarten:**

**Karte 1:** Rechtsfall
→ Lebenssachverhalt mit rechtlicher Relevanz

**Karte 2:** Sachverhalt
→ Tatsächliche Geschehensabläufe (W-Fragen!)

**Karte 3:** Syllogismus
→ Obersatz + Untersatz = Schluss

**Karte 4:** Gutachtenstil
→ "Fraglich ist..." → Prüfung → "Somit..."

**Karte 5:** Urteilsstil
→ Ergebnis zuerst, dann kurze Begründung

**Karte 6:** Definition
→ Oberbegriff + unterscheidende Merkmale

**Karte 7:** Subsumtion
→ Sachverhalt unter Tatbestandsmerkmale fassen

**Karte 8:** Anspruchsgrundlage
→ Rechtsnorm, die Rechtsfolge anordnet

**Karte 9:** Gliederung
→ I. → 1. → a) → aa) → (1) → (a)

**Karte 10:** Schwerpunktsetzung
→ Problematisches ausführlich, Eindeutiges kurz`
        },
        {
          id: 'section-ke1-zusammen-5',
          title: '🚀 Nächste Schritte',
          content: `**So geht es weiter:**

**1. Üben Sie mit echten Fällen:**
- Beginnen Sie mit einfachen Anspruchsprüfungen
- Steigern Sie die Komplexität schrittweise
- Nutzen Sie die Übungsklausuren im Modul

**2. Verbinden Sie mit Kurseinheit 2:**
- Die Auslegungsmethoden vertiefen Ihre Methodenkompetenz
- Sie lernen, wie Sie unklare Normen interpretieren
- Die Canones helfen bei der Gutachtenerstellung

**3. Praktische Anwendung:**
- Wenden Sie die Techniken in allen Rechtsgebieten an
- Die Methodik ist universal einsetzbar
- Sammeln Sie Erfahrung durch regelmäßiges Üben

💪 **Motivation:** Sie haben das Handwerkszeug erlernt - jetzt heißt es: Übung macht den Meister!`
        }
      ],
      resources: [
        {
          id: 'res-ke1-zusammen-1',
          title: '🎥 Video-Zusammenfassung: Die juristische Methodik in 10 Minuten',
          type: 'video',
          url: 'https://fernuni-hagen.de/videos/ke1-zusammenfassung',
          description: 'Kompakte Wiederholung aller wichtigen Konzepte'
        },
        {
          id: 'res-ke1-zusammen-2',
          title: '📱 Interaktive Lernkarten-App',
          type: 'interactive',
          url: 'https://jurafit.de/lernkarten/ke1',
          description: 'Alle Begriffe der Kurseinheit als digitale Karteikarten'
        },
        {
          id: 'res-ke1-zusammen-3',
          title: '📝 Muster-Klausur mit Lösung',
          type: 'website',
          url: 'https://fernuni-hagen.de/rewi/musterloesung-ke1',
          description: 'Komplette Probeklausur zum Selbsttest'
        }
      ],
      glossary: [
        {
          term: 'Kurseinheit 1',
          definition: 'Grundlagen der juristischen Fallbearbeitung und Gutachtentechnik',
          relatedTerms: ['Methodik', 'Syllogismus', 'Gutachtenstil']
        }
      ]
    },
    exercises: [
      {
        id: 'ex-ke1-zusammen-1',
        type: 'multipleChoice',
        difficulty: 'intermediate',
        points: 20,
        title: 'Methodenwahl',
        description: 'Wann verwenden Sie welche Darstellungsform?',
        content: {
          question: 'In welcher Situation verwenden Sie den Gutachtenstil?',
          options: [
            'Bei der Prüfung, ob ein wirksamer Kaufvertrag vorliegt',
            'Bei der Feststellung "A ist Eigentümer"',
            'Bei unstreitigen Tatsachen',
            'In der Einleitung eines Gutachtens'
          ]
        },
        solution: {
          correct: [0],
          explanation: 'Der Gutachtenstil wird bei problematischen Rechtsfragen verwendet, nicht bei evidenten Tatsachen.'
        },
        hints: [],
        feedback: {
          correct: 'Richtig! Sie verstehen die Anwendungsbereiche.',
          incorrect: 'Denken Sie daran: Gutachtenstil für Problematisches!'
        }
      }
    ],
    estimatedMinutes: 60, // 1 Stunde für Zusammenfassung
    requiredMastery: 80
  }
];

// Helper-Funktion für die Generierung weiterer Übungen
export function generateAdditionalExercises(unitId: string, count: number): Exercise[] {
  // Diese Funktion würde in der echten Implementierung weitere Übungen generieren
  // basierend auf dem Lernfortschritt und den Schwächen des Lernenden
  return [];
}

// Export der Gesamtstruktur für Kurseinheit 1
export const kurseinheit1 = {
  id: 'ke1',
  title: 'Kurseinheit 1: Fallbearbeitung und Gutachtentechnik',
  credits: 3,
  estimatedHours: 90,
  units: kurseinheit1Units,
  objectives: [
    'Juristische Methodik verstehen und anwenden',
    'Gutachtenstil sicher beherrschen', 
    'Sachverhalte systematisch erfassen',
    'Rechtsnormen korrekt anwenden'
  ],
  assessmentCriteria: [
    'Korrekte Anwendung des Syllogismus',
    'Präzise Begriffsverwendung',
    'Vollständige Sachverhaltserfassung',
    'Methodengerechte Gutachtenerstellung'
  ]
};