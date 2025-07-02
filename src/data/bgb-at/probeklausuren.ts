import { Exercise } from '../../types/learning';

// Probeklausuren für das BGB Allgemeiner Teil Modul

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

export const probeklausurenBGBAT: Probeklausur[] = [
  {
    id: 'klausur-bgb-at-1',
    moduleId: 'bgb-at',
    title: 'Probeklausur 1: Rechtsgeschäfte und Willenserklärungen',
    description: 'Grundlegende Klausur zu Willenserklärungen, Vertragsschluss und Anfechtung.',
    duration: 120,
    points: 100,
    difficulty: 'beginner',
    topics: ['Willenserklärungen', 'Vertragsschluss', 'Anfechtung', 'Geschäftsfähigkeit'],
    exercises: [
      {
        id: 'klausur-bgb-at-1-1',
        type: 'caseAnalysis',
        difficulty: 'intermediate',
        points: 40,
        content: {
          question: 'Der Fahrradkauf',
          scenario: `Der 17-jährige Max möchte sich ein gebrauchtes Mountainbike für 800 € kaufen. Seine Eltern haben ihm erlaubt, sich "ein Fahrrad bis 500 €" zu kaufen. 

Im Fahrradladen findet Max ein besonders schönes Rad für 800 €. Er sagt zum Verkäufer V: "Das nehme ich!" V weiß, dass Max minderjährig ist, geht aber davon aus, dass die Eltern einverstanden sind.

Zu Hause sind die Eltern empört über den hohen Preis. Der Vater ruft bei V an und erklärt: "Der Kauf gilt nicht! Wir holen das Rad morgen zurück."

Max ist verzweifelt und bietet an, die 300 € Differenz von seinem Ersparten zu bezahlen.`,
          tasks: [
            'Prüfen Sie, ob ein wirksamer Kaufvertrag zustande gekommen ist',
            'Welche Bedeutung hat die elterliche Erlaubnis?',
            'Kann der Vertrag noch wirksam werden?',
            'Hat V Ansprüche gegen Max oder seine Eltern?'
          ]
        },
        solution: {
          correct: {
            structure: `I. Zustandekommen eines Kaufvertrags (§ 433 BGB)
   
   A. Einigung
      1. Angebot des V
         - Ausstellung mit Preisschild
         - Invitatio ad offerendum (+)
         
      2. Angebot des Max
         - "Das nehme ich!"
         - Konkludent auf Abschluss gerichtet (+)
         
      3. Annahme des V
         - Konkludent durch Übergabe (+)
         
      4. Zwischenergebnis: Einigung (+)
   
   B. Wirksamkeit
      1. Geschäftsfähigkeit des Max
         a) 17 Jahre = beschränkt geschäftsfähig (§ 106 BGB)
         b) Wirksamkeit gem. §§ 107 ff. BGB
         
      2. Einwilligung (§ 107 BGB)
         - Erlaubnis nur bis 500 €
         - Kauf über 800 €
         - Keine Einwilligung für diesen Vertrag (-)
         
      3. Lediglich rechtlicher Vorteil (§ 107 BGB)
         - Verpflichtung zur Zahlung
         - Nicht nur vorteilhaft (-)
         
      4. Taschengeldparagraph (§ 110 BGB)
         - Noch keine Bewirkung der Leistung
         - § 110 BGB nicht anwendbar (-)
         
      5. Zwischenergebnis: Schwebend unwirksam

II. Genehmigung (§ 108 BGB)
    1. Verweigerung durch Eltern
       - Ausdrückliche Verweigerung
       - Vertrag endgültig unwirksam
       
    2. Nachträgliche Zustimmung?
       - Auch bei Zahlung der Differenz
       - Bedarf Genehmigung der Eltern

III. Ansprüche des V
     A. Gegen Max
        - Kein wirksamer Vertrag
        - Keine vertraglichen Ansprüche
        - § 179 BGB nicht anwendbar (kein Vertreter)
        
     B. Gegen Eltern
        - Keine eigene Verpflichtung
        - Kein Vertrag mit Schutzwirkung
        
IV. Ergebnis
    - Kaufvertrag endgültig unwirksam
    - V muss Rad zurücknehmen
    - Keine Ansprüche gegen Max/Eltern`,
            keyPoints: [
              'Beschränkte Geschäftsfähigkeit beachten',
              'Reichweite der Einwilligung prüfen',
              'Schwebende Unwirksamkeit erkennen',
              'Genehmigung/Verweigerung als Gestaltungsrecht'
            ]
          },
          explanation: 'Der Fall zeigt die praktische Bedeutung der beschränkten Geschäftsfähigkeit und die Grenzen elterlicher Einwilligung.'
        }
      },
      {
        id: 'klausur-bgb-at-1-2',
        type: 'essay',
        difficulty: 'intermediate',
        points: 25,
        content: {
          question: 'Erläutern Sie den Unterschied zwischen Auslegung und Anfechtung von Willenserklärungen. Gehen Sie dabei auf die jeweiligen Voraussetzungen, das Verhältnis zueinander und praktische Beispiele ein.',
          requirements: [
            'Definition und Zweck der Auslegung',
            'Auslegungsmethoden (§§ 133, 157 BGB)',
            'Anfechtungsgründe (§§ 119, 120, 123 BGB)',
            'Vorrang der Auslegung',
            'Praktische Beispiele'
          ],
          estimatedTime: 30
        },
        solution: {
          correct: {
            outline: `I. Auslegung von Willenserklärungen
   1. Begriff und Zweck
      - Ermittlung des wirklichen Willens
      - § 133 BGB: Wirklicher Wille
      - § 157 BGB: Treu und Glauben
      
   2. Methoden
      - Natürliche Auslegung (§ 133)
      - Normative Auslegung (§ 157)
      - Empfängerhorizont
      
   3. Beispiele
      - "Haakjöringsköd"-Fall
      - Kalkulationsirrtum

II. Anfechtung
   1. Zweck
      - Beseitigung fehlerhafter WE
      - Schutz der Privatautonomie
      
   2. Gründe
      - § 119 I: Inhalts-/Erklärungsirrtum
      - § 119 II: Eigenschaftsirrtum
      - § 120: Übermittlungsfehler
      - § 123: Täuschung/Drohung
      
   3. Rechtsfolge
      - Ex tunc Nichtigkeit (§ 142)
      - Schadensersatz (§ 122)

III. Verhältnis
    1. Vorrang der Auslegung
       - Erst auslegen, dann anfechten
       - Kein Irrtum bei richtiger Auslegung
       
    2. Abgrenzung
       - Auslegung: Was wurde erklärt?
       - Anfechtung: Soll es gelten?
       
IV. Praktische Bedeutung
    - Auslegung erhält Vertrag
    - Anfechtung vernichtet
    - Wirtschaftliche Folgen`,
            keyPoints: [
              'Auslegung geht der Anfechtung vor',
              'Verschiedene Schutzzwecke',
              'Falsa demonstratio Grundsatz',
              'Praktische Konsequenzen'
            ]
          },
          explanation: 'Die Abgrenzung von Auslegung und Anfechtung ist klausurrelevant und praktisch bedeutsam.'
        }
      },
      {
        id: 'klausur-bgb-at-1-3',
        type: 'multipleChoice',
        difficulty: 'beginner',
        points: 15,
        content: {
          question: 'Welche Aussagen zum Zugang von Willenserklärungen (§ 130 BGB) sind korrekt?',
          options: [
            'Eine Willenserklärung unter Anwesenden wird sofort wirksam',
            'Der Zugang kann durch den Empfänger nicht verhindert werden',
            'Bei Einwurf in den Briefkasten erfolgt Zugang sofort',
            'Eine E-Mail geht zu, wenn sie im Postfach abrufbar ist',
            'Zugangsvereitelung führt zu fingiertem Zugang'
          ],
        },
        solution: {
          correct: [
            'Eine Willenserklärung unter Anwesenden wird sofort wirksam',
            'Eine E-Mail geht zu, wenn sie im Postfach abrufbar ist',
            'Zugangsvereitelung führt zu fingiertem Zugang'
          ],
          explanation: 'Unter Abwesenden erfolgt Zugang mit Möglichkeit der Kenntnisnahme unter gewöhnlichen Umständen. Briefkastenleerung erfolgt üblicherweise nicht sofort.'
        }
      },
      {
        id: 'klausur-bgb-at-1-4',
        type: 'shortAnswer',
        difficulty: 'intermediate',
        points: 20,
        content: {
          question: 'Erklären Sie die Abgrenzung zwischen Geschäftswille, Handlungswille und Erklärungsbewusstsein. Welche Folgen hat das Fehlen der jeweiligen Elemente?',
          maxLength: 400
        },
        solution: {
          correct: {
            keyPoints: [
              'Handlungswille: Bewusstes Handeln (Fehlen → keine WE)',
              'Erklärungsbewusstsein: Bewusstsein rechtsgeschäftlich zu handeln (str.)',
              'Geschäftswille: Wille zur konkreten Rechtsfolge (Fehlen → WE wirksam, aber anfechtbar)',
              'Trierer Weinversteigerung als Beispiel',
              'Praktische Abgrenzung wichtig'
            ]
          },
          explanation: 'Die drei Elemente des subjektiven Tatbestands haben unterschiedliche Rechtsfolgen bei ihrem Fehlen.'
        }
      }
    ],
    solutionGuide: `Bewertungsschlüssel:
- 90-100 Punkte: sehr gut
- 80-89 Punkte: gut  
- 70-79 Punkte: befriedigend
- 60-69 Punkte: ausreichend
- unter 60: nicht bestanden

Zeiteinteilung:
- Aufgabe 1: 50 Minuten (Hauptfall)
- Aufgabe 2: 30 Minuten
- Aufgabe 3: 20 Minuten
- Aufgabe 4: 20 Minuten`,
    evaluationCriteria: [
      'Gutachtenstil beherrschen',
      'Systematische Prüfung',
      'Alle Probleme erkennen',
      'Schwerpunkte richtig setzen',
      'Präzise Subsumtion'
    ]
  },
  {
    id: 'klausur-bgb-at-2',
    moduleId: 'bgb-at',
    title: 'Probeklausur 2: Stellvertretung und Formvorschriften',
    description: 'Schwerpunktklausur zu Stellvertretung, Vollmacht und Formerfordernissen.',
    duration: 150,
    points: 120,
    difficulty: 'intermediate',
    topics: ['Stellvertretung', 'Vollmacht', 'Form', 'Nichtigkeit'],
    exercises: [
      {
        id: 'klausur-bgb-at-2-1',
        type: 'caseAnalysis',
        difficulty: 'advanced',
        points: 50,
        content: {
          question: 'Der Grundstückskauf',
          scenario: `Unternehmer U beauftragt seinen Prokuristen P, ein Grundstück für eine neue Filiale zu erwerben. P findet ein geeignetes Grundstück des V für 500.000 €.

Beim Notartermin erscheint P mit einer schriftlichen Vollmacht des U, die ihn zum "Erwerb von Immobilien bis 400.000 €" ermächtigt. P erklärt dem Notar N, U habe ihm mündlich erlaubt, auch teurere Grundstücke zu kaufen. N beurkundet den Kaufvertrag, in dem P "in Vertretung des U" als Käufer auftritt.

Als U von dem Geschäft erfährt, ist er empört. Er teilt V mit: "P hatte keine Vollmacht für so teure Geschäfte! Ich genehmige das nicht!"

V verlangt Zahlung des Kaufpreises. P bietet an, das Grundstück selbst zu erwerben.`,
          tasks: [
            'Ist ein wirksamer Kaufvertrag zwischen U und V zustande gekommen?',
            'Welche Bedeutung hat die Formbedürftigkeit?',
            'Welche Ansprüche hat V?',
            'Kann P das Geschäft auf sich übernehmen?'
          ]
        },
        solution: {
          correct: {
            structure: `I. Kaufvertrag zwischen V und U (§ 433 BGB)

A. Zustandekommen
   1. Willenserklärungen
      a) Angebot und Annahme (+)
      b) Formgerecht beurkundet (+)
   
   2. Vertretung des U durch P
      a) Eigene WE des P (+)
      b) Im Namen des U (Offenkundigkeitsprinzip) (+)
      c) Vertretungsmacht?

B. Vertretungsmacht des P
   1. Prokura (§§ 48 ff. HGB)
      - Umfasst nicht Grundstücksgeschäfte (§ 49 I HGB)
      - Keine Vertretungsmacht aus Prokura (-)
   
   2. Vollmacht (§§ 164 ff. BGB)
      a) Schriftliche Vollmacht
         - Nur bis 400.000 €
         - Geschäft über 500.000 €
         - Überschreitung der Vollmacht (-)
      
      b) Mündliche Erweiterung?
         - Grundsatz: Formfreiheit (§ 167 I BGB)
         - Aber: § 311b I 2 BGB analog?
         - Str., wohl Formfreiheit der Vollmacht (+)
         - Beweisproblem des P
   
   3. Zwischenergebnis: Keine (nachweisbare) Vertretungsmacht

C. Genehmigung (§ 177 I BGB)
   - U verweigert ausdrücklich
   - Schwebende Unwirksamkeit beendet
   - Vertrag endgültig unwirksam

II. Ansprüche des V

A. Gegen U
   - Kein wirksamer Vertrag (-)
   - Keine Ansprüche aus § 433 BGB

B. Gegen P (§ 179 I BGB)
   1. Handeln als Vertreter (+)
   2. Ohne Vertretungsmacht (+)
   3. Keine Genehmigung (+)
   4. Rechtsfolge: Erfüllung oder Schadensersatz
   
   5. Kenntnis (§ 179 III BGB)?
      - V kannte Vollmachtsbeschränkung nicht
      - P muss haften

III. Form des Grundstückskaufs
    1. § 311b I 1 BGB: Notarielle Beurkundung
       - Erfüllt (+)
    
    2. Formmangel der Vollmacht?
       - Selbst wenn § 311b analog: Heilung durch Beurkundung
       - Form gewahrt

IV. Selbsteintritt des P
    - § 179 II BGB: Erfüllungswahlrecht des P
    - P kann Vertrag selbst erfüllen
    - V muss sich darauf einlassen`,
            keyPoints: [
              'Prokura umfasst keine Grundstücksgeschäfte',
              'Vollmacht formfrei, aber Beweisprobleme',
              'Vertreterhaftung nach § 179 BGB',
              'Selbsteintrittsrecht des Vertreters'
            ]
          },
          explanation: 'Der Fall kombiniert Stellvertretungsrecht mit Formvorschriften und zeigt typische Praxisprobleme.'
        }
      },
      {
        id: 'klausur-bgb-at-2-2',
        type: 'problemSolving',
        difficulty: 'intermediate',
        points: 30,
        content: {
          question: 'Rechtsschein und Duldungsvollmacht',
          scenario: `In der Boutique B arbeitet die Aushilfe A seit 2 Jahren regelmäßig samstags. Sie bedient Kunden, kassiert und gibt bei Reklamationen Rabatte bis 20%.

An einem Samstag, als die Inhaberin I im Urlaub ist, kommt Kundin K mit einem vor 3 Monaten gekauften Kleid (300 €), das einen Fehler aufweist. A bietet 50% Nachlass an. K ist einverstanden und zahlt 150 € nach.

Als I zurückkommt, erfährt sie davon und erklärt K: "A durfte maximal 20% geben. Sie schulden noch 90 €!"`,
          tasks: [
            'Prüfen Sie, ob die Vereinbarung zwischen A und K wirksam ist',
            'Welche Arten von Rechtsscheinvollmachten kennen Sie?',
            'Liegt hier ein Fall von Rechtsscheinshaftung vor?'
          ]
        },
        solution: {
          correct: {
            structure: `I. Vereinbarung zwischen K und A
   1. Vergleich über Nachlass
      - WE von A und K (+)
      - A handelt für B
   
   2. Vertretungsmacht der A?
      a) Ausdrückliche Vollmacht
         - Nur bis 20% Rabatt
         - 50% überschreitet Vollmacht (-)
      
      b) Duldungsvollmacht
         - Voraussetzungen:
           * Wiederholtes Handeln (+)
           * Kenntnis des Vertretenen (?)
           * Dulden ohne Einschreiten (?)
         - Aber: Nur im Rahmen des Üblichen
         - 50% unüblich hoch (-)
      
      c) Anscheinsvollmacht
         - Rechtsschein gesetzt
         - Fahrlässiges Verhalten der I
         - K durfte auf Vollmacht vertrauen
         - Schutzwürdigkeit der K (+)

II. Arten von Rechtsscheinvollmachten
   1. Duldungsvollmacht
      - Wissentliches Dulden
      - Unterlassen trotz Kenntnis
   
   2. Anscheinsvollmacht  
      - Fahrlässig gesetzter Rechtsschein
      - Ohne Kenntnis des Vertretenen
   
   3. Rechtsscheinhaftung
      - Allgemeiner Grundsatz
      - Vertrauensschutz

III. Ergebnis
    - Rechtsschein durch Position der A
    - K durfte vertrauen
    - I muss fahrlässigen Rechtsschein gegen sich gelten lassen
    - Vereinbarung wirksam`,
            keyPoints: [
              'Abgrenzung der Vollmachtsarten',
              'Rechtsscheintatbestände verstehen',
              'Vertrauensschutz im Handelsverkehr',
              'Grenzen bei ungewöhnlichen Geschäften'
            ]
          },
          explanation: 'Rechtsscheinvollmachten schützen den Geschäftsverkehr, haben aber Grenzen bei unüblichen Geschäften.'
        }
      },
      {
        id: 'klausur-bgb-at-2-3',
        type: 'trueFalse',
        difficulty: 'intermediate',
        points: 20,
        content: {
          question: 'Beurteilen Sie folgende Aussagen zu Formvorschriften:',
          statements: [
            'Die notarielle Beurkundung kann durch gerichtlichen Vergleich ersetzt werden',
            'Ein Formmangel wird durch Erfüllung stets geheilt',
            'Die Schriftform kann durch E-Mail mit einfacher Signatur gewahrt werden',
            'Formnichtigkeit führt zur Gesamtnichtigkeit des Vertrags',
            'Bei gesetzlicher Schriftform genügt Telefax'
          ]
        },
        solution: {
          correct: [true, false, false, true, true],
          explanation: 'Heilung nur bei bestimmten Formen (§ 311b). E-Mail wahrt nur elektronische Form. Fax genügt für § 126 BGB nach BGH.'
        }
      },
      {
        id: 'klausur-bgb-at-2-4',
        type: 'fillInBlanks',
        difficulty: 'intermediate',
        points: 20,
        content: {
          question: 'Ergänzen Sie die Lücken zur Stellvertretung:',
          text: 'Bei der Stellvertretung gibt der _____ eine _____ Willenserklärung im _____ des Vertretenen ab. Die Vertretungsmacht kann auf _____ oder _____ beruhen. Handelt der Vertreter ohne Vertretungsmacht, so haftet er nach § _____ BGB auf _____ oder _____.',
          blanks: 8
        },
        solution: {
          correct: [
            'Vertreter',
            'eigene',
            'Namen',
            'Gesetz',
            'Rechtsgeschäft',
            '179',
            'Erfüllung',
            'Schadensersatz'
          ],
          explanation: 'Die Grundbegriffe der Stellvertretung müssen sicher beherrscht werden.'
        }
      }
    ],
    solutionGuide: `Bewertung:
- Aufgabe 1 (50 P): Alle Probleme erkennen (Prokura, Vollmacht, Form, § 179)
- Aufgabe 2 (30 P): Rechtsscheinvollmachten differenziert prüfen
- Aufgabe 3-4 (40 P): Grundlagenwissen sicher anwenden

Zeiteinteilung:
- Aufgabe 1: 60 Minuten
- Aufgabe 2: 40 Minuten
- Aufgabe 3-4: 50 Minuten`,
    evaluationCriteria: [
      'Stellvertretungsrecht systematisch prüfen',
      'Formvorschriften beachten',
      'Rechtsscheintatbestände erkennen',
      'Praxisrelevante Lösung',
      'Klare Strukturierung'
    ]
  },
  {
    id: 'klausur-bgb-at-3',
    moduleId: 'bgb-at',
    title: 'Examensklausur BGB AT',
    description: 'Anspruchsvolle Examensklausur mit allen wichtigen Themen des Allgemeinen Teils.',
    duration: 300,
    points: 200,
    difficulty: 'advanced',
    topics: ['Alle Themen des BGB AT'],
    exercises: [
      {
        id: 'klausur-bgb-at-3-1',
        type: 'complexCase',
        difficulty: 'advanced',
        points: 100,
        content: {
          question: 'Der verhinderte Kunstkauf',
          scenario: `Kunsthändler K will seine Galerie vergrößern und beauftragt seine Assistentin A, "günstige Gelegenheiten" zum Erwerb von Kunstwerken wahrzunehmen. A hat eine auf 6 Monate befristete schriftliche Vollmacht für Geschäfte bis 50.000 €.

Im 7. Monat findet A bei einer Auktion ein Gemälde, das sie für stark unterbewertet hält. Der Auktionator Au ruft das Bild für 60.000 € auf. A bietet mit und erhält bei 75.000 € den Zuschlag. Sie erklärt dabei: "Ich biete für die Galerie K."

K ist zunächst wütend, als er erfährt, dass A die Vollmacht überschritten und trotz Befristung gehandelt hat. Als ein Gutachter G das Bild aber auf 150.000 € schätzt, will K es doch behalten. Er erklärt gegenüber Au: "Ich genehmige den Kauf nachträglich."

Au verlangt Zahlung. Dann stellt sich heraus:
- Das Bild ist eine Fälschung, wert: 5.000 €
- G hatte sich geirrt, weil er nur Fotos gesehen hatte
- Der Einlieferer E, der das Bild zur Auktion gab, wusste von der Fälschung

K erklärt: "Ich fechte alles an! Täuschung, Irrtum - der ganze Kauf gilt nicht!"

Au meint: "Sie haben doch genehmigt. Jetzt müssen Sie zahlen. Ihre Assistentin kannte sich offenbar nicht aus - Ihr Problem!"`,
          tasks: [
            'Prüfen Sie umfassend, ob K zur Zahlung verpflichtet ist',
            'Berücksichtigen Sie alle Wirksamkeitshindernisse',
            'Welche Ansprüche bestehen zwischen den Beteiligten?',
            'Hätte K das Geschäft anders angehen sollen?'
          ]
        },
        solution: {
          correct: {
            structure: `I. Zahlungsanspruch des Au gegen K aus § 433 II BGB

A. Zustandekommen eines Kaufvertrags
   
   1. Versteigerung als Kaufvertrag
      a) Angebot: Bieten der A für K
      b) Annahme: Zuschlag des Au (§ 156 BGB)
      c) Einigung (+)
   
   2. Wirksamkeit der Einigung
      
      a) Vertretung des K durch A
         aa) Eigene WE der A (+)
         bb) Offenkundigkeitsprinzip (+)
         cc) Vertretungsmacht?
             - Vollmacht bis 50.000 €
             - Geschäft über 75.000 €
             - Überschreitung (-)
             - Vollmacht abgelaufen (7. Monat)
             - Keine Vertretungsmacht (-)
      
      b) Genehmigung (§ 177 I BGB)
         - Nachträgliche Genehmigung durch K
         - Rückwirkung (§ 184 I BGB)
         - Zunächst wirksamer Vertrag (+)

B. Anfechtung durch K
   
   1. Anfechtung der Genehmigung
      
      a) § 119 II BGB (Eigenschaftsirrtum)
         - Echtheit als verkehrswesentliche Eigenschaft (+)
         - Irrtum bei Genehmigung (+)
         - Kausalität (+)
         - Anfechtungsgrund (+)
      
      b) § 123 I BGB (arglistige Täuschung)
         - Täuschung durch E
         - E nicht Vertragspartner
         - Au muss sich zurechnen lassen?
         - § 123 II BGB: Nur bei Kenntnis
         - Au wusste nichts (-)
      
      c) Anfechtungserklärung
         - "Ich fechte alles an"
         - Unverzüglich (§ 121 BGB)
         - Form frei
         - Wirksame Anfechtung (+)
      
      d) Rechtsfolge
         - Genehmigung nichtig (§ 142 I BGB)
         - Kaufvertrag mangels Genehmigung unwirksam
   
   2. Anfechtung des Hauptgeschäfts
      - Mangels wirksamer Genehmigung nicht nötig
      - Hilfsweise: Gleiche Gründe

C. Ergebnis: Kein Zahlungsanspruch des Au gegen K

II. Anspruch des Au gegen A aus § 179 I BGB
    
    1. Handeln als Vertreterin (+)
    2. Ohne Vertretungsmacht (+)
    3. Keine wirksame Genehmigung (+)
    4. Kenntnis (§ 179 III BGB)?
       - A kannte Vollmachtsmangel
       - Aber: Au kannte nicht
       - A haftet
    5. Wahlrecht: Erfüllung oder Schadensersatz

III. Anspruch des K gegen A
     
     1. Arbeitsvertragliche Pflichtverletzung
        - Überschreitung der Vollmacht
        - § 280 I BGB i.V.m. Arbeitsvertrag
        - Verschulden der A (+)
        - Aber: Kein Schaden (Anfechtung)
     
     2. Aufwendungsersatz der A?
        - Bei wirksamer Genehmigung
        - Jetzt durch Anfechtung entfallen

IV. Ansprüche gegen E
    
    1. Au gegen E
       - Vertragliche Beziehung (Einlieferung)
       - Gewährleistung/Schadensersatz
       - Arglistige Täuschung
    
    2. K/A gegen E
       - § 826 BGB (sittenwidrige Schädigung)
       - § 823 II BGB i.V.m. § 263 StGB
       - Aber: Schaden?

V. Vorgehen des K
   
   1. Rechtlich korrekt:
      - Anfechtung der Genehmigung ✓
      - Keine Haftung
   
   2. Alternativen:
      - Vorherige Prüfung
      - Bedingung in Genehmigung
      - Klarere Vollmachten
      - Controlling`,
            keyPoints: [
              'Versteigerung als Vertragsschluss (§ 156 BGB)',
              'Fehlende Vertretungsmacht (zeitlich und betragsmäßig)',
              'Genehmigung anfechtbar wegen Eigenschaftsirrtum',
              'Keine Zurechnung der Täuschung des E',
              'Vertreterhaftung nach § 179 BGB',
              'Praktische Gestaltungshinweise'
            ]
          },
          explanation: 'Die Klausur verbindet Stellvertretung, Anfechtung und Versteigerungsrecht. Die Anfechtung der Genehmigung ist der Schlüssel zur Lösung.'
        }
      },
      {
        id: 'klausur-bgb-at-3-2',
        type: 'comparative',
        difficulty: 'advanced',
        points: 40,
        content: {
          question: 'Abgrenzungsprobleme im BGB AT',
          requirements: [
            'Grenzen Sie ab: Geschäftsähnliche Handlungen vs. Willenserklärungen',
            'Erläutern Sie: Verpflichtung vs. Verfügung (mit Beispielen)',
            'Vergleichen Sie: § 119 I Alt. 1 vs. Alt. 2 BGB',
            'Diskutieren Sie: Verhältnis von § 134 und § 138 BGB'
          ],
          estimatedTime: 60
        },
        solution: {
          correct: {
            outline: `I. Geschäftsähnliche Handlungen vs. Willenserklärungen
   
   1. Willenserklärung
      - Auf Rechtsfolge gerichtet
      - Privatautonome Gestaltung
      - Beispiel: Kündigung
   
   2. Geschäftsähnliche Handlung
      - Rechtsfolge kraft Gesetzes
      - Mitteilung von Tatsachen
      - Beispiel: Mahnung, Fristsetzung
   
   3. Abgrenzung
      - Gewollte vs. gesetzliche Rechtsfolge
      - Anfechtbarkeit unterschiedlich
      - Analogie möglich

II. Verpflichtung vs. Verfügung
    
    1. Verpflichtungsgeschäft
       - Begründet Ansprüche
       - Schuldrechtliche Ebene
       - Beispiel: Kaufvertrag (§ 433)
    
    2. Verfügungsgeschäft
       - Unmittelbare Rechtsänderung
       - Dingliche Ebene
       - Beispiel: Übereignung (§ 929)
    
    3. Trennungs-/Abstraktionsprinzip
       - Unabhängige Wirksamkeit
       - Deutsche Besonderheit
       - Praktische Folgen

III. § 119 I Alt. 1 vs. Alt. 2 BGB
     
     1. Inhaltsirrtum (Alt. 1)
        - Bedeutung der Erklärung
        - Was erkläre ich?
        - Beispiel: 100 statt 1000
     
     2. Erklärungsirrtum (Alt. 2)
        - Erklärungshandlung selbst
        - Versprechen, Verschreiben
        - Beispiel: Falsche Taste
     
     3. Gemeinsamkeiten
        - Unbewusstes Auseinanderfallen
        - Gleiche Rechtsfolgen
        - Anfechtung möglich

IV. § 134 vs. § 138 BGB
    
    1. § 134 BGB
       - Verstoß gegen Verbotsgesetz
       - Formaler Verstoß
       - Beispiel: Schwarzarbeit
    
    2. § 138 BGB
       - Sittenwidrigkeit
       - Materieller Verstoß
       - Beispiel: Wucher
    
    3. Verhältnis
       - § 134 spezieller
       - Überschneidungen möglich
       - Beide = Nichtigkeitsgrund`,
            keyPoints: [
              'Klare Definitionen geben',
              'Abgrenzungskriterien nennen',
              'Beispiele zur Verdeutlichung',
              'Praktische Relevanz zeigen'
            ]
          },
          explanation: 'Abgrenzungsfragen sind examenstypisch und erfordern präzise Differenzierung.'
        }
      },
      {
        id: 'klausur-bgb-at-3-3',
        type: 'essay',
        difficulty: 'advanced',
        points: 30,
        content: {
          question: 'Die Bedeutung des Vertrauensschutzes im BGB AT',
          requirements: [
            'Erläutern Sie das Spannungsverhältnis zwischen Privatautonomie und Verkehrsschutz',
            'Analysieren Sie Vertrauensschutztatbestände im AT (mind. 4 Beispiele)',
            'Diskutieren Sie: Wann überwiegt Vertrauensschutz die Selbstbestimmung?',
            'Bewerten Sie die Lösung des BGB im internationalen Vergleich'
          ],
          estimatedTime: 45
        },
        solution: {
          correct: {
            outline: `I. Grundkonflikt
   1. Privatautonomie
      - Selbstbestimmung
      - Eigenverantwortung
      - Schutz des Erklärenden
   
   2. Verkehrsschutz
      - Rechtssicherheit
      - Vertrauen des Empfängers
      - Funktionsfähiger Rechtsverkehr

II. Vertrauensschutztatbestände
   1. Rechtsscheinvollmachten
      - Dulden/Anschein
      - Schutz des Geschäftspartners
   
   2. § 179 BGB
      - Haftung des Vertreters
      - Schutz vor falsus procurator
   
   3. Zugang (§ 130 BGB)
      - Empfängerhorizont
      - Objektive Auslegung
   
   4. Schweigen als WE
      - Kaufmännischer Verkehr
      - Treu und Glauben
   
   5. § 122 BGB
      - Vertrauensschaden
      - Ausgleich bei Anfechtung

III. Abwägungskriterien
    1. Risikosphären
    2. Verschulden
    3. Schutzbedürftigkeit
    4. Wirtschaftliche Folgen

IV. Internationaler Vergleich
    - Common Law: Stärkerer Verkehrsschutz
    - Romanische Länder: Konsensprinzip
    - BGB: Ausgewogener Mittelweg
    - Harmonisierungstendenzen`,
            keyPoints: [
              'Grundspannung verstehen',
              'Konkrete Beispiele nennen',
              'Systematik erkennen',
              'Kritische Würdigung'
            ]
          },
          explanation: 'Der Vertrauensschutz durchzieht das gesamte BGB AT als Leitprinzip.'
        }
      },
      {
        id: 'klausur-bgb-at-3-4',
        type: 'practical',
        difficulty: 'advanced',
        points: 30,
        content: {
          question: 'Praxisfall: Der Online-Vertragsschluss',
          scenario: `Entwickeln Sie ein rechtssicheres System für Online-Vertragsschlüsse unter Berücksichtigung folgender Aspekte:`,
          requirements: [
            'Wann kommt der Vertrag zustande? (Angebot/Annahme im Internet)',
            'Wie werden AGB wirksam einbezogen?',
            'Welche Rolle spielen Bestätigungs-E-Mails?',
            'Wie sichert man Beweisbarkeit?',
            'Besonderheiten bei Verbrauchern?',
            'Technische Störungen und ihre rechtlichen Folgen'
          ]
        },
        solution: {
          correct: {
            structure: `I. Vertragsschluss im Internet
   
   1. Webshop-Angebot
      - Regelmäßig invitatio ad offerendum
      - Kunde macht Angebot (Bestellung)
      - Shop nimmt an (Bestätigung)
   
   2. Zugang elektronischer WE
      - Eingang im Machtbereich
      - Abrufbarkeit genügt
      - Keine sofortige Kenntnisnahme nötig

II. AGB-Einbeziehung online
    
    1. Anforderungen § 305 II BGB
       - Deutlicher Hinweis (Checkbox)
       - Abrufbarkeit (Link)
       - Speicher-/Druckmöglichkeit
    
    2. Praktische Umsetzung
       - Pflicht-Checkbox
       - Verlinkung gut sichtbar
       - PDF-Download

III. Bestätigungs-E-Mails
     
     1. Funktionen
        - Empfangsbestätigung ≠ Annahme
        - Klarstellung erforderlich
        - Beweissicherung
     
     2. Gestaltung
        - "Bestellung eingegangen"
        - "Vertrag kommt zustande wenn..."
        - Eindeutige Formulierung

IV. Beweissicherheit
    
    1. Technische Maßnahmen
       - Server-Logs
       - Hashwerte
       - Zeitstempel
    
    2. Rechtliche Gestaltung
       - Dokumentation
       - Archivierung
       - Nachvollziehbarkeit

V. Verbraucherschutz
   
   1. Button-Lösung (§ 312j BGB)
      - "Zahlungspflichtig bestellen"
      - Sonst kein Vertrag
   
   2. Widerrufsrecht
      - 14 Tage
      - Belehrung erforderlich
   
   3. Informationspflichten
      - Vor Vertragsschluss
      - Übersichtlich

VI. Technische Störungen
    
    1. Systemausfall
       - Kein Zugang
       - Risiko beim Absender
    
    2. Fehlerhafte Anzeige
       - Anfechtung möglich
       - Haftungsfragen
    
    3. Vorsorge
       - Wartungsfenster ankündigen
       - Fehlerbehandlung
       - Notfallpläne`,
            keyPoints: [
              'Praxistaugliche Lösungen',
              'Rechtssicherheit schaffen',
              'Technik und Recht verbinden',
              'Verbraucherschutz beachten'
            ]
          },
          explanation: 'Online-Vertragsschlüsse erfordern besondere Sorgfalt bei der rechtlichen Gestaltung.'
        }
      }
    ],
    solutionGuide: `Examensklausur - Bewertung:
- Diese Klausur entspricht dem Niveau des 1. Staatsexamens
- Erwartet wird vertiefte Kenntnis des gesamten AT
- Systematisches Denken und Transferleistung essentiell
- Zeit gut einteilen - 5 Stunden!

Punkteverteilung:
- Fall (100 P): Alle Probleme erkennen und lösen
- Abgrenzungen (40 P): Präzise Definitionen
- Essay (30 P): Systematisches Verständnis zeigen
- Praxisfall (30 P): Anwendungsorientierung

Besondere Hinweise:
- Schwerpunkte setzen
- Nicht in Nebenproblemen verlieren
- Gutachtenstil wo nötig, Urteilsstil wo möglich
- Praktische Lösungen entwickeln`,
    evaluationCriteria: [
      'Examensniveau erreicht',
      'Systematisches Verständnis',
      'Problemerkennung',
      'Methodensicherheit',
      'Transferleistung',
      'Zeitmanagement',
      'Praxisbezug'
    ]
  }
];

// Hilfsfunktionen
export function getKlausurenByDifficulty(difficulty: 'beginner' | 'intermediate' | 'advanced'): Probeklausur[] {
  return probeklausurenBGBAT.filter(k => k.difficulty === difficulty);
}

export function getKlausurenByTopics(topics: string[]): Probeklausur[] {
  return probeklausurenBGBAT.filter(k => 
    topics.some(topic => k.topics.includes(topic))
  );
}

export function getAllKlausuren(): Probeklausur[] {
  return probeklausurenBGBAT;
}