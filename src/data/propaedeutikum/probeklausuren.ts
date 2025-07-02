import { Exercise } from '../../types/learning';

// Probeklausuren für das Propädeutikum Modul

export interface Probeklausur {
  id: string;
  moduleId: string;
  title: string;
  description: string;
  duration: number; // in Minuten
  points: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  topics: string[];
  exercises: Exercise[];
  solutionGuide?: string;
  evaluationCriteria?: string[];
}

export const probeklausurenPropaedeutikum: Probeklausur[] = [
  {
    id: 'klausur-prop-1',
    moduleId: 'propaedeutikum',
    title: 'Probeklausur 1: Grundlagen des Rechts',
    description: 'Diese Klausur prüft Ihr Verständnis der Rechtsgrundlagen, Methodenlehre und des wissenschaftlichen Arbeitens.',
    duration: 120,
    points: 100,
    difficulty: 'beginner',
    topics: ['Rechtssystem', 'Methodenlehre', 'Wissenschaftliches Arbeiten'],
    exercises: [
      {
        id: 'klausur-prop-1-1',
        type: 'essay',
        difficulty: 'intermediate',
        points: 25,
        content: {
          question: 'Erläutern Sie die Normenhierarchie im deutschen Rechtssystem und diskutieren Sie deren Bedeutung anhand eines selbstgewählten Beispiels aus dem Europarecht.',
          requirements: [
            'Vollständige Darstellung der Normenhierarchie',
            'Erklärung des Vorrangs des EU-Rechts',
            'Konkretes Beispiel mit Bezug zur Praxis',
            'Kritische Würdigung'
          ],
          estimatedTime: 30
        },
        solution: {
          correct: {
            outline: `1. Normenhierarchie in Deutschland
   - Europarecht (Vorrang)
   - Grundgesetz
   - Formelle Gesetze
   - Rechtsverordnungen
   - Satzungen

2. Vorrang des EU-Rechts
   - Anwendungsvorrang
   - Unmittelbare Wirkung
   - Costa/ENEL-Entscheidung

3. Beispiel: Datenschutz
   - DSGVO vs. nationales Recht
   - Direkter Anwendungsvorrang
   - Anpassung des BDSG

4. Kritische Würdigung
   - Souveränitätsverlust vs. Harmonisierung
   - Rechtssicherheit
   - Demokratische Legitimation`
          },
          explanation: 'Eine vollständige Antwort sollte alle Ebenen der Normenhierarchie erläutern und die Besonderheiten des EU-Rechts herausarbeiten.'
        }
      },
      {
        id: 'klausur-prop-1-2',
        type: 'caseAnalysis',
        difficulty: 'intermediate',
        points: 30,
        content: {
          question: 'Fallbearbeitung: Auslegungsmethoden',
          scenario: `Gemeinde G erlässt eine Satzung mit folgendem Wortlaut: "Hunde sind im Stadtpark an der Leine zu führen."
          
Sachverhalt: Frau M führt ihren Blindenführhund ohne Leine durch den Park. Ein Parkwächter verhängt ein Bußgeld von 50 €.

Frau M argumentiert:
1. Blindenführhunde seien keine "normalen" Hunde
2. Die Regelung sei für sie als Sehbehinderte diskriminierend
3. Der Zweck der Norm treffe auf Blindenführhunde nicht zu`,
          tasks: [
            'Prüfen Sie alle vier Auslegungsmethoden',
            'Berücksichtigen Sie verfassungsrechtliche Aspekte',
            'Kommen Sie zu einem begründeten Ergebnis'
          ]
        },
        solution: {
          correct: {
            structure: `I. Wortlautauslegung
   - "Hunde" umfasst grundsätzlich alle Hunde
   - Keine explizite Ausnahme
   - Ergebnis: Blindenführhunde erfasst

II. Systematische Auslegung
   - Stellung in der Satzung
   - Vergleich mit anderen Regelungen
   - Keine Ausnahmetatbestände vorgesehen

III. Historische Auslegung
   - Entstehungsgeschichte prüfen
   - Ratsprotokolle?
   - Frühere Regelungen?

IV. Teleologische Auslegung
   - Zweck: Sicherheit und Sauberkeit
   - Blindenführhunde speziell trainiert
   - Zweck greift nicht vollständig

V. Verfassungskonforme Auslegung
   - Art. 3 III GG (Behindertenbenachteiligung)
   - Verhältnismäßigkeit
   - Teleologische Reduktion geboten

VI. Ergebnis
   - Norm gilt nicht für Blindenführhunde
   - Verfassungskonforme Auslegung`,
            keyPoints: [
              'Alle Auslegungsmethoden systematisch prüfen',
              'Verfassungsrecht einbeziehen',
              'Teleologische Reduktion begründen'
            ]
          },
          explanation: 'Der Fall zeigt exemplarisch, wie die verschiedenen Auslegungsmethoden zu unterschiedlichen Ergebnissen führen können und wie diese zu gewichten sind.'
        }
      },
      {
        id: 'klausur-prop-1-3',
        type: 'multipleChoice',
        difficulty: 'beginner',
        points: 15,
        content: {
          question: 'Welche Aussagen zum juristischen Gutachtenstil sind korrekt? (Mehrfachauswahl möglich)',
          options: [
            'Der Obersatz enthält immer eine Hypothese',
            'Die Subsumtion erfolgt vor der Definition',
            'Bei unproblematischen Punkten kann der Urteilsstil verwendet werden',
            'Das Ergebnis wird am Anfang genannt',
            'Die Definition muss abstrakt formuliert sein'
          ],
        },
        solution: {
          correct: ['Der Obersatz enthält immer eine Hypothese', 'Bei unproblematischen Punkten kann der Urteilsstil verwendet werden', 'Die Definition muss abstrakt formuliert sein'],
          explanation: 'Im Gutachtenstil wird das Ergebnis am Ende präsentiert, die Subsumtion erfolgt nach der Definition.'
        }
      },
      {
        id: 'klausur-prop-1-4',
        type: 'fillInBlanks',
        difficulty: 'beginner',
        points: 10,
        content: {
          question: 'Ergänzen Sie die Lücken zur wissenschaftlichen Zitierweise:',
          text: 'Bei wörtlichen Zitaten verwendet man _____ und gibt die Quelle mit genauer _____ an. Sinngemäße Zitate werden mit "___" eingeleitet. Die Fußnote steht immer _____ dem Satzzeichen.',
          blanks: 4
        },
        solution: {
          correct: ['Anführungszeichen', 'Seitenzahl', 'vgl.', 'nach'],
          explanation: 'Die korrekte Zitierweise ist essentiell für wissenschaftliches Arbeiten im Jurastudium.'
        }
      },
      {
        id: 'klausur-prop-1-5',
        type: 'shortAnswer',
        difficulty: 'intermediate',
        points: 20,
        content: {
          question: 'Erklären Sie die Bedeutung des Verhältnismäßigkeitsprinzips im deutschen Recht und nennen Sie die vier Prüfungsschritte mit je einem Beispiel.',
          maxLength: 500
        },
        solution: {
          correct: {
            keyPoints: [
              'Verfassungsrang des Prinzips',
              'Legitimer Zweck',
              'Geeignetheit (Beispiel)',
              'Erforderlichkeit (Beispiel)',
              'Angemessenheit (Beispiel)',
              'Praktische Bedeutung'
            ]
          },
          explanation: 'Das Verhältnismäßigkeitsprinzip ist ein zentrales Verfassungsprinzip mit den Stufen: legitimer Zweck, Geeignetheit, Erforderlichkeit und Angemessenheit.'
        }
      }
    ],
    solutionGuide: `Bewertungsschlüssel:
- 90-100 Punkte: sehr gut (1,0-1,3)
- 80-89 Punkte: gut (1,7-2,3)
- 70-79 Punkte: befriedigend (2,7-3,3)
- 60-69 Punkte: ausreichend (3,7-4,0)
- unter 60 Punkte: nicht bestanden

Zeitaufteilung:
- Aufgabe 1: 30 Minuten
- Aufgabe 2: 40 Minuten
- Aufgabe 3-5: je 15-20 Minuten`,
    evaluationCriteria: [
      'Strukturierte Darstellung',
      'Vollständigkeit der Argumente',
      'Korrekte Anwendung der Methoden',
      'Sprachliche Präzision',
      'Eigenständige Gedankenführung'
    ]
  },
  {
    id: 'klausur-prop-2',
    moduleId: 'propaedeutikum',
    title: 'Probeklausur 2: Rechtsgebiete und Verfahren',
    description: 'Schwerpunkt auf Zivilrecht, Strafrecht, Öffentlichem Recht und deren Verfahrensarten.',
    duration: 180,
    points: 120,
    difficulty: 'advanced',
    topics: ['Zivilrecht', 'Strafrecht', 'Öffentliches Recht', 'Verfahrensrecht'],
    exercises: [
      {
        id: 'klausur-prop-2-1',
        type: 'caseAnalysis',
        difficulty: 'advanced',
        points: 40,
        content: {
          question: 'Komplexer Fall mit mehreren Rechtsgebieten',
          scenario: `A betreibt ohne Genehmigung einen Imbissstand auf öffentlichem Grund. Die Stadt B erlässt eine Verfügung zur sofortigen Schließung. A widersetzt sich und verletzt dabei den Ordnungsamtsmitarbeiter O leicht. Kunde K, der gerade bestellt hatte und bereits bezahlt hat, verlangt sein Geld zurück.

Rechtliche Würdigung aus allen drei Rechtsgebieten:`,
          tasks: [
            'Öffentlich-rechtliche Aspekte (Verfügung, Rechtsschutz)',
            'Strafrechtliche Würdigung (Widerstand, Körperverletzung)',
            'Zivilrechtliche Ansprüche (K gegen A)',
            'Verfahrensrechtliche Besonderheiten'
          ]
        },
        solution: {
          correct: {
            structure: `I. Öffentliches Recht
   1. Genehmigungspflicht
      - Sondernutzung öffentlicher Flächen
      - Formeller/materieller Fehler
   2. Schließungsverfügung
      - Rechtsgrundlage
      - Verhältnismäßigkeit
      - Sofortvollzug
   3. Rechtsschutz
      - Widerspruch
      - Aussetzende Wirkung
      - Eilrechtsschutz

II. Strafrecht
   1. Widerstand § 113 StGB
      - Vollstreckungsbeamter
      - Rechtmäßige Diensthandlung
      - Widerstand mit Gewalt
   2. Körperverletzung § 223 StGB
      - Tatbestand erfüllt
      - Konkurrenzen

III. Zivilrecht
   1. Rückzahlung Kaufpreis
      - § 326 BGB Unmöglichkeit
      - § 275 BGB Leistungshindernis
      - Verschulden des A
   2. Schadensersatz
      - § 280 BGB
      - Weitere Schäden?`,
            keyPoints: [
              'Trennung der Rechtsgebiete',
              'Verknüpfung der Sachverhalte',
              'Prozessuale Aspekte',
              'Vollständige Prüfung'
            ]
          },
          explanation: 'Dieser Fall zeigt die Vernetzung der Rechtsgebiete in der Praxis.'
        }
      },
      {
        id: 'klausur-prop-2-2',
        type: 'essay',
        difficulty: 'advanced',
        points: 30,
        content: {
          question: 'Vergleichen Sie die Beweislastverteilung im Zivil-, Straf- und Verwaltungsprozess. Erläutern Sie dabei die unterschiedlichen Beweismaße und deren Rechtfertigung.',
          requirements: [
            'Grundsätze der Beweislast in allen drei Verfahrensarten',
            'Beweismaß (Überzeugung, Wahrscheinlichkeit)',
            'Ausnahmen und Besonderheiten',
            'Verfassungsrechtliche Grundlagen'
          ],
          estimatedTime: 45
        },
        solution: {
          correct: {
            outline: `1. Zivilprozess
   - Beweislast: Günstigkeitsprinzip
   - Regelbeweismaß: Volle Überzeugung
   - Ausnahmen: Glaubhaftmachung
   - § 286 ZPO

2. Strafprozess
   - In dubio pro reo
   - Unschuldsvermutung
   - Amtsermittlung
   - Keine Beweislast des Angeklagten

3. Verwaltungsprozess
   - Untersuchungsgrundsatz
   - Objektive Beweislast
   - Volle Überzeugung
   - Mitwirkungspflichten

4. Rechtfertigung
   - Rechtsstaatsprinzip
   - Fair Trial
   - Waffengleichheit`
          },
          explanation: 'Die unterschiedlichen Beweislastregeln spiegeln die verschiedenen Schutzzwecke der Verfahrensarten wider.'
        }
      },
      {
        id: 'klausur-prop-2-3',
        type: 'matching',
        difficulty: 'intermediate',
        points: 20,
        content: {
          question: 'Ordnen Sie die Rechtsmittel den richtigen Verfahrensarten zu:',
          pairs: [
            { left: 'Berufung zum LG', right: 'Zivilprozess (Amtsgericht)' },
            { left: 'Revision zum BGH', right: 'Alle Verfahrensarten möglich' },
            { left: 'Beschwerde', right: 'Gegen Beschlüsse' },
            { left: 'Berufung zum OVG', right: 'Verwaltungsprozess' },
            { left: 'Sprungrevision', right: 'Überspringen einer Instanz' }
          ]
        },
        solution: {
          correct: {
            'Berufung zum LG': 'Zivilprozess (Amtsgericht)',
            'Revision zum BGH': 'Alle Verfahrensarten möglich',
            'Beschwerde': 'Gegen Beschlüsse',
            'Berufung zum OVG': 'Verwaltungsprozess',
            'Sprungrevision': 'Überspringen einer Instanz'
          },
          explanation: 'Die Kenntnis der Rechtsmittel und Instanzenzüge ist grundlegend für die Verfahrensführung.'
        }
      },
      {
        id: 'klausur-prop-2-4',
        type: 'trueFalse',
        difficulty: 'intermediate',
        points: 15,
        content: {
          question: 'Bewerten Sie folgende Aussagen zu Gerichtsverfassungen:',
          statements: [
            'Das BVerfG ist keine Superrevisionsinstanz',
            'Arbeitsgerichte sind Teil der ordentlichen Gerichtsbarkeit',
            'Das BVerwG hat seinen Sitz in Leipzig',
            'Schöffen wirken nur in Strafsachen mit',
            'Der EuGH kann deutsche Gesetze für nichtig erklären'
          ]
        },
        solution: {
          correct: [true, false, true, false, false],
          explanation: 'Arbeitsgerichte bilden eine eigene Gerichtsbarkeit. Schöffen gibt es auch im Jugendstrafrecht. Der EuGH stellt nur Unvereinbarkeit mit EU-Recht fest.'
        }
      },
      {
        id: 'klausur-prop-2-5',
        type: 'shortAnswer',
        difficulty: 'advanced',
        points: 15,
        content: {
          question: 'Erläutern Sie das Spannungsverhältnis zwischen nationalem Recht und Europarecht am Beispiel der "Solange"-Rechtsprechung des BVerfG.',
          maxLength: 400
        },
        solution: {
          correct: {
            keyPoints: [
              'Solange I (1974): Grundrechtsvorbehalt',
              'Solange II (1986): Vertrauensvorschuss',
              'Maastricht (1993): Ultra-vires-Kontrolle',
              'Lissabon (2009): Verfassungsidentität',
              'Aktueller Stand: Kooperationsverhältnis'
            ]
          },
          explanation: 'Die Solange-Rechtsprechung zeigt die Entwicklung des Verhältnisses zwischen BVerfG und EuGH.'
        }
      }
    ],
    solutionGuide: `Bewertungshinweise:
- Aufgabe 1 (40 P): Vollständige Prüfung aller Rechtsgebiete erforderlich
- Aufgabe 2 (30 P): Systematischer Vergleich mit Beispielen
- Aufgabe 3-5 (50 P): Detailwissen und Verständnis

Schwerpunkte:
- Verknüpfung der Rechtsgebiete
- Prozessuale Kenntnisse
- Europarechtsbezüge`,
    evaluationCriteria: [
      'Systematische Fallbearbeitung',
      'Kenntnis aller Rechtsgebiete',
      'Prozessrechtliches Verständnis',
      'Kritische Reflexion',
      'Praxisbezug'
    ]
  },
  {
    id: 'klausur-prop-3',
    moduleId: 'propaedeutikum',
    title: 'Abschlussklausur Propädeutikum',
    description: 'Umfassende Prüfung aller Themenbereiche des Propädeutikums auf Examensniveau.',
    duration: 240,
    points: 150,
    difficulty: 'advanced',
    topics: ['Alle Themen des Propädeutikums'],
    exercises: [
      {
        id: 'klausur-prop-3-1',
        type: 'essay',
        difficulty: 'advanced',
        points: 50,
        content: {
          question: `Verfassen Sie ein Gutachten zu folgendem Fall:

Die Stadt S plant den Bau einer neuen Müllverbrennungsanlage. Anwohner A erfährt davon aus der Zeitung und will sich wehren. Er recherchiert und findet heraus:
- Es liegt noch kein Bebauungsplan vor
- Eine UVP wurde noch nicht durchgeführt  
- Der Stadtrat hat aber bereits einen Grundsatzbeschluss gefasst
- Ein Investor I hat bereits ein Grundstück erworben

A möchte wissen:
1. Welche Rechtsschutzmöglichkeiten hat er jetzt?
2. Wie ist das weitere Verfahren?
3. Welche materiellen Einwendungen sind denkbar?`,
          requirements: [
            'Gutachterliche Prüfung aller Rechtsfragen',
            'Verfahrensrechtliche und materiell-rechtliche Aspekte',
            'Berücksichtigung des EU-Rechts (UVP-Richtlinie)',
            'Praktische Handlungsempfehlungen'
          ],
          estimatedTime: 90
        },
        solution: {
          correct: {
            outline: `I. Rechtsschutzmöglichkeiten im aktuellen Stadium
   1. Gegen Grundsatzbeschluss
      - Kein Außenrechtssatz
      - Keine Klagebefugnis
      - Kein Rechtsschutz
   
   2. Präventiver Rechtsschutz
      - Grundsätzlich nicht möglich
      - Ausnahmen sehr eng
   
   3. Akteneinsicht
      - IFG/UIG
      - Voraussetzungen

II. Weiteres Verfahren
   1. Bauleitplanung
      - Aufstellungsbeschluss
      - Bürgerbeteiligung § 3 BauGB
      - Umweltprüfung
   
   2. Genehmigungsverfahren
      - BImSchG
      - UVP-Pflicht
      - Öffentlichkeitsbeteiligung
   
   3. Rechtsschutz
      - Gegen B-Plan: Normenkontrolle
      - Gegen Genehmigung: Anfechtungsklage

III. Materielle Einwendungen
   1. Planungsrecht
      - Abwägungsfehler
      - Umweltbelange
   
   2. Immissionsschutzrecht
      - Grenzwerte
      - Stand der Technik
   
   3. EU-Recht
      - UVP-Richtlinie
      - Aarhus-Konvention

IV. Handlungsempfehlungen
   1. Jetzt: Akteneinsicht, Vorbereitung
   2. Bürgerbeteiligung nutzen
   3. Fachliche Unterstützung
   4. Ggf. Bürgerinitiative`
          },
          explanation: 'Das Gutachten muss alle Ebenen (Verfahren, materielles Recht, Taktik) abdecken.'
        }
      },
      {
        id: 'klausur-prop-3-2',
        type: 'complexAnalysis',
        difficulty: 'advanced',
        points: 40,
        content: {
          question: 'Methodenfall zur Gesetzesauslegung',
          scenario: `§ 23 der neuen "Digitalschutzverordnung" lautet: "Betreiber von Internetplattformen haben sicherzustellen, dass Minderjährige keinen Zugang zu entwicklungsbeeinträchtigenden Inhalten erhalten."

Fall: Die 17-jährige L nutzt mit Erlaubnis ihrer Eltern eine Lernplattform, die auch ein Forum für Studierende enthält. Dort wird kontrovers über politische Themen diskutiert. Die Plattform sperrt L den Zugang zum Forum.`,
          tasks: [
            'Legen Sie § 23 mit allen Methoden aus',
            'Berücksichtigen Sie Grundrechte (L, Betreiber, Eltern)',
            'Diskutieren Sie die Rolle der Eltern',
            'Entwickeln Sie eine verfassungskonforme Lösung'
          ]
        },
        solution: {
          correct: {
            structure: `I. Auslegung des § 23
   1. Wortlaut
      - "Minderjährige": unter 18
      - "entwicklungsbeeinträchtigend": unbestimmt
      - "sicherstellen": Garantenpflicht
   
   2. Systematik
      - Stellung in der VO
      - Verhältnis zu anderen Normen
      - JMStV als Vergleich
   
   3. Historie
      - Gesetzesbegründung
      - Entstehungsgeschichte
   
   4. Telos
      - Jugendschutz
      - Aber auch: Meinungsfreiheit
      - Interessenausgleich

II. Grundrechtliche Dimension
   1. L: Art. 5 I GG (Informationsfreiheit)
   2. Eltern: Art. 6 II GG (Erziehungsrecht)  
   3. Betreiber: Art. 12, 14 GG
   
III. Verfassungskonforme Auslegung
    - Differenzierung nach Alter
    - Elternrechte berücksichtigen
    - Verhältnismäßigkeit

IV. Ergebnis
    - Pauschale Sperrung unverhältnismäßig
    - Abgestufte Schutzkonzepte
    - Elterliche Einwilligung relevant`,
            keyPoints: [
              'Methodenvielfalt zeigen',
              'Grundrechtsabwägung',
              'Praktikable Lösung',
              'Digitale Besonderheiten'
            ]
          },
          explanation: 'Moderne Rechtsprobleme erfordern sensible Auslegung unter Beachtung aller Interessen.'
        }
      },
      {
        id: 'klausur-prop-3-3',
        type: 'comparative',
        difficulty: 'advanced',
        points: 30,
        content: {
          question: 'Vergleichen Sie die Gewaltenteilung auf nationaler und europäischer Ebene. Diskutieren Sie dabei insbesondere die demokratische Legitimation und aktuelle Herausforderungen.',
          requirements: [
            'Klassische Gewaltenteilung in Deutschland',
            'Institutionelles Gefüge der EU',
            'Legitimationsketten',
            'Demokratiedefizit-Debatte',
            'Reformvorschläge'
          ],
          estimatedTime: 45
        },
        solution: {
          correct: {
            outline: `I. Nationale Ebene (Deutschland)
   1. Horizontale Gewaltenteilung
      - Legislative: Bundestag/Bundesrat
      - Exekutive: Bundesregierung
      - Judikative: Gerichte
   
   2. Vertikale Gewaltenteilung
      - Bund-Länder-Kommunen
      - Föderalismus
   
   3. Legitimation
      - Volkswahl des Bundestags
      - Legitimationskette

II. Europäische Ebene
   1. Institutionen
      - Parlament: nur begrenzte Befugnisse
      - Kommission: Exekutive + Legislative
      - Rat: Legislative + Exekutive
      - EuGH: Judikative
   
   2. Besonderheiten
      - Keine klare Trennung
      - Initiativmonopol Kommission
      - Mehrebenensystem
   
   3. Legitimation
      - Direkt: nur Parlament
      - Indirekt: Rat, Kommission
      - Defizite erkennbar

III. Herausforderungen
    - Demokratiedefizit
    - Bürgerferne
    - Kompetenzabgrenzung
    - Brexit-Folgen

IV. Reformansätze
    - Stärkung des Parlaments
    - Direktwahl Kommissionspräsident
    - Transparenz
    - Bürgerbeteiligung`
          },
          explanation: 'Der Vergleich zeigt strukturelle Unterschiede und Legitimationsprobleme der EU.'
        }
      },
      {
        id: 'klausur-prop-3-4',
        type: 'practical',
        difficulty: 'advanced',
        points: 30,
        content: {
          question: 'Erstellen Sie eine juristische Stellungnahme (max. 2 Seiten) zu folgendem Mandantenbegehren:',
          scenario: `Ihr Mandant betreibt ein Start-up für KI-gestützte Rechtsberatung. Er möchte wissen:
1. Darf seine KI rechtliche Auskünfte geben?
2. Wie ist die Haftung bei Falschberatung?
3. Verstößt er gegen das RDG?
4. Welche Gestaltungsmöglichkeiten gibt es?`,
          requirements: [
            'Formelle Stellungnahme',
            'Rechtliche Würdigung',
            'Risikoanalyse',
            'Konkrete Empfehlungen',
            'Verständliche Sprache für Mandanten'
          ]
        },
        solution: {
          correct: {
            structure: `STELLUNGNAHME

An: [Mandant]
Von: [Bearbeiter]
Betreff: Rechtliche Zulässigkeit KI-Rechtsberatung

I. Sachverhalt
   [Zusammenfassung]

II. Rechtliche Würdigung
   
   A. Rechtsdienstleistungsgesetz (RDG)
      1. Rechtsdienstleistung § 2 RDG
         - Rechtliche Prüfung des Einzelfalls
         - KI-Ausgaben können erfasst sein
      
      2. Verbot § 3 RDG
         - Grundsätzlich nur mit Erlaubnis
         - Keine Ausnahme für KI
      
      3. Folgen bei Verstoß
         - Ordnungswidrigkeit
         - Unterlassungsansprüche
   
   B. Haftung
      1. Vertragliche Haftung
         - Beratungsvertrag?
         - Haftung für KI-Fehler
      
      2. Deliktische Haftung
         - § 823 II BGB i.V.m. RDG
         - Verschulden erforderlich
   
   C. Gestaltungsmöglichkeiten
      1. Reine Informationsvermittlung
         - Keine Einzelfallprüfung
         - Allgemeine Rechtsinformationen
      
      2. Kooperation mit Anwälten
         - KI als Hilfsmittel
         - Anwalt prüft und haftet
      
      3. Legal Tech Inkubator
         - § 6a RDG
         - Experimentierklausel

III. Empfehlung
    1. Klare Abgrenzung zur Rechtsberatung
    2. Disclaimer und AGB
    3. Ggf. Kooperationsmodell
    4. Versicherungsschutz

IV. Weiteres Vorgehen
    [Konkrete Schritte]`,
            keyPoints: [
              'Mandantengerechte Sprache',
              'Klare Struktur',
              'Praktische Lösungen',
              'Risiken benennen'
            ]
          },
          explanation: 'Die Stellungnahme muss rechtlich fundiert aber verständlich sein.'
        }
      }
    ],
    solutionGuide: `Gesamtbewertung:
- Diese Klausur prüft auf Examensniveau
- Erwartet wird selbständiges juristisches Denken
- Methodensicherheit und Praxisbezug essentiell
- Zeitmanagement entscheidend (240 Minuten!)

Punkteverteilung:
- Aufgabe 1: Umfassendes Gutachten (50 P)
- Aufgabe 2: Methodenkompetenz (40 P)  
- Aufgabe 3: Systemverständnis (30 P)
- Aufgabe 4: Praxistransfer (30 P)`,
    evaluationCriteria: [
      'Examensreife Darstellung',
      'Methodensicherheit',
      'Systemverständnis',
      'Problemlösungskompetenz',
      'Praxistauglichkeit',
      'Zeitmanagement'
    ]
  }
];

// Hilfsfunktion zum Abrufen von Klausuren nach Schwierigkeit
export function getKlausurenByDifficulty(difficulty: 'beginner' | 'intermediate' | 'advanced'): Probeklausur[] {
  return probeklausurenPropaedeutikum.filter(k => k.difficulty === difficulty);
}

// Hilfsfunktion zum Abrufen von Klausuren nach Themen
export function getKlausurenByTopics(topics: string[]): Probeklausur[] {
  return probeklausurenPropaedeutikum.filter(k => 
    topics.some(topic => k.topics.includes(topic))
  );
}