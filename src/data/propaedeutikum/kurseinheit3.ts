import { LearningUnit, Exercise } from '../../types/learning';

// KURSEINHEIT 3: Basiskurs Rechtswissenschaft (30 Stunden / 1 ECTS)

export const kurseinheit3Units: LearningUnit[] = [
  // 3.1 Die drei großen Rechtsgebiete (10 Stunden)
  {
    id: 'ke3-1-rechtsgebiete',
    moduleId: 'propaedeutikum',
    order: 13,
    title: '3.1 Die drei großen Rechtsgebiete',
    objectives: [
      {
        id: 'obj-3-1-1',
        description: 'Abgrenzung zwischen Zivilrecht, öffentlichem Recht und Strafrecht verstehen',
        bloomLevel: 'understand'
      },
      {
        id: 'obj-3-1-2',
        description: 'Fälle den richtigen Rechtsgebieten zuordnen',
        bloomLevel: 'apply'
      },
      {
        id: 'obj-3-1-3',
        description: 'Grundprinzipien der Rechtsgebiete analysieren',
        bloomLevel: 'analyze'
      }
    ],
    content: {
      id: 'content-3-1',
      type: 'mixed',
      sections: [
        {
          id: 'section-3-1-1',
          title: 'Zivilrecht (Privatrecht)',
          content: `Das Zivilrecht regelt die Rechtsbeziehungen zwischen gleichgeordneten Rechtsträgern.

**Grundprinzipien des Zivilrechts:**

**1. Gleichordnung (Koordination):**
- Keine Über-/Unterordnung
- Rechtsfähige Personen auf gleicher Ebene
- Horizontale Rechtsbeziehungen
- Beispiel: Verträge zwischen Privatpersonen
- Auch juristische Personen (GmbH, AG, Vereine)
- Staat als Fiskus (nicht hoheitlich handelnd)

**2. Privatautonomie:**
- Selbstbestimmung in rechtlichen Angelegenheiten
- Vertragsfreiheit (§ 311 Abs. 1 BGB)
- Testierfreiheit, Eigentumsfreiheit
- Grenzen: Gesetz, Sittenwidrigkeit, Treu und Glauben
- Abschlussfreiheit: Ob und mit wem
- Gestaltungsfreiheit: Inhalt der Vereinbarung
- Formfreiheit: Grundsätzlich formlos möglich

**3. Dispositivität:**
- Grundsätzlich abdingbare Regeln
- Parteivereinbarungen haben Vorrang
- Ausnahmen: Zwingende Vorschriften
- Beispiel: AGB-Kontrolle, Verbraucherschutz
- Halbzwingende Normen: Nur zugunsten einer Partei abdingbar

**Wichtige Bereiche des Zivilrechts:**

**Bürgerliches Recht (BGB):**
- Buch 1: Allgemeiner Teil (§§ 1-240)
  * Rechtsfähigkeit, Geschäftsfähigkeit
  * Willenserklärungen, Verträge
  * Stellvertretung, Fristen, Verjährung
- Buch 2: Schuldrecht (§§ 241-853)
  * Allgemeines Schuldrecht: Leistungsstörungen
  * Besonderes Schuldrecht: Einzelne Vertragstypen
  * Gesetzliche Schuldverhältnisse: Deliktsrecht, Bereicherung
- Buch 3: Sachenrecht (§§ 854-1296)
  * Besitz und Eigentum
  * Grundsätze des Sachenrechts
  * Beschränkte dingliche Rechte
- Buch 4: Familienrecht (§§ 1297-1921)
  * Eheschließung und -scheidung
  * Verwandtschaft, Unterhalt
  * Vormundschaft, Betreuung
- Buch 5: Erbrecht (§§ 1922-2385)
  * Gesetzliche und gewählte Erbfolge
  * Testament und Erbvertrag
  * Pflichtteil, Erbschein

**Handelsrecht (HGB):**
- Kaufmannseigenschaft und -arten
- Handelsgeschäfte und Handelsbräuche
- Handelsregister und Publizität
- Handelsgesellschaften (OHG, KG)
- Handelskauf und besondere Geschäftstypen

**Arbeitsrecht:**
- Individualarbeitsrecht
  * Arbeitsvertrag, Kündigungsschutz
  * Arbeitnehmerschutz, Arbeitszeit
- Kollektives Arbeitsrecht
  * Betriebsverfassungsrecht
  * Tarifvertragsrecht
  * Arbeitskampfrecht

**Gesellschaftsrecht:**
- Personengesellschaften (GbR, OHG, KG, PartG)
- Kapitalgesellschaften (GmbH, AG, KGaA)
- Genossenschaftsrecht (eG)
- Vereinsrecht (e.V.)
- Umwandlungsrecht

**Zivilverfahrensrecht:**
- Zivilprozessordnung (ZPO)
  * Zuständigkeit, Verfahrensarten
  * Beweisrecht, Urteil
  * Rechtsmittel, Kosten
- Zwangsvollstreckung (8. Buch ZPO)
- Freiwillige Gerichtsbarkeit (FamFG)
- Alternative Streitbeilegung (Mediation, Schiedsverfahren)

**Internationale Bezüge:**
- Internationales Privatrecht (IPR)
- Europäisches Zivilrecht
- UN-Kaufrecht (CISG)
- Europäische Verordnungen (Rom I-III, Brüssel Ia)`,
          examples: [
            {
              id: 'ex-3-1-1-1',
              title: 'Typische zivilrechtliche Fälle',
              content: '• Kaufvertrag zwischen A und B über ein Auto\n• Mietvertrag zwischen Vermieter und Mieter\n• Schadensersatz nach Verkehrsunfall\n• Scheidung und Unterhaltszahlungen\n• Erbauseinandersetzung nach Todesfall\n• Gesellschafterstreit in GmbH',
              explanation: 'Alle Fälle betreffen Rechtsbeziehungen zwischen gleichgeordneten Personen ohne staatliche Machtausübung.'
            },
            {
              id: 'ex-3-1-1-2',
              title: 'Privatautonomie in der Praxis',
              content: 'Mietvertrag:\n- Abschlussfreiheit: Vermieter wählt Mieter aus\n- Gestaltungsfreiheit: Höhe der Miete (im Rahmen der Gesetze)\n- Formfreiheit: Grundsätzlich mündlich möglich\n- Grenzen: Mietpreisbremse, Kündigungsschutz\n- Zwingende Normen: Mindestkündigungsfristen',
              explanation: 'Die Privatautonomie wird durch Schutzvorschriften begrenzt, bleibt aber Grundprinzip.'
            },
            {
              id: 'ex-3-1-1-3',
              title: 'Zivilrecht vs. Öffentliches Recht',
              content: 'Grenzfälle:\n1. Stadt kauft Grundstück für Schulbau\n   → Zivilrecht (Kaufvertrag)\n2. Stadt enteignet Grundstück für Schulbau\n   → Öffentliches Recht (Hoheitsakt)\n3. Bürger mietet städtische Turnhalle\n   → Zivilrecht (Mietvertrag)\n4. Stadt erteilt Nutzungserlaubnis für Turnhalle\n   → Öffentliches Recht (Verwaltungsakt)',
              explanation: 'Die Art des Handelns (privatrechtlich oder hoheitlich) bestimmt das anwendbare Recht.'
            }
          ]
        },
        {
          id: 'section-3-1-2',
          title: 'Öffentliches Recht',
          content: `Das öffentliche Recht regelt Rechtsbeziehungen unter Beteiligung eines hoheitlich handelnden Trägers öffentlicher Gewalt.

**Grundprinzipien des öffentlichen Rechts:**

**1. Über-/Unterordnung (Subordination):**
- Staat vs. Bürger
- Hoheitsgewalt und Verwaltung
- Vertikale Rechtsbeziehungen
- Einseitige Machtausübung möglich

**2. Gesetzmäßigkeit der Verwaltung:**
- Art. 20 Abs. 3 GG: Bindung an Recht und Gesetz
- Vorrang des Gesetzes (keine contra legem-Handlung)
- Vorbehalt des Gesetzes (Ermächtigungsgrundlage)
- Verhältnismäßigkeitsprinzip

**3. Gemeinwohlbindung:**
- Aufgabenerfüllung im öffentlichen Interesse
- Keine Gewinnerzielung
- Daseinsvorsorge
- Schutz der Allgemeinheit

**Bereiche des öffentlichen Rechts:**

**Verfassungsrecht:**
- Grundgesetz (GG)
- Staatsorganisation
- Grundrechte
- Föderalismus

**Verwaltungsrecht:**
- Allgemeines Verwaltungsrecht (VwVfG, VwGO)
- Besonderes Verwaltungsrecht:
  * Polizei- und Ordnungsrecht
  * Baurecht
  * Steuerrecht
  * Sozialrecht
  * Umweltrecht

**Europarecht:**
- Primärrecht (Verträge)
- Sekundärrecht (Verordnungen, Richtlinien)
- Grundfreiheiten
- Unionsbürgerschaft

**Völkerrecht:**
- Internationale Verträge
- Völkergewohnheitsrecht
- Internationale Organisationen
- Menschenrechte

**Abgrenzungskriterien:**
- Modifizierte Subjektstheorie (herrschend)
- Interessentheorie
- Subordinationstheorie
- Rechtsnatur der Beziehung entscheidend`,
          examples: [
            {
              id: 'ex-3-1-2-1',
              title: 'Typische öffentlich-rechtliche Fälle',
              content: '• Erteilung einer Baugenehmigung\n• Führerscheinentzug durch Behörde\n• Steuerveranlagung durch Finanzamt\n• Polizeikontrolle im Straßenverkehr\n• Sozialhilfebescheid des Sozialamts\n• Asylverfahren vor dem BAMF\n• Kommunalwahlen und Wahlprüfung',
              explanation: 'In allen Fällen handelt der Staat hoheitlich und übt öffentliche Gewalt aus.'
            }
          ]
        },
        {
          id: 'section-3-1-3',
          title: 'Strafrecht',
          content: `Das Strafrecht regelt die Voraussetzungen staatlicher Strafgewalt und schützt besonders wichtige Rechtsgüter.

**Grundprinzipien des Strafrechts:**

**1. Gesetzlichkeitsprinzip (Art. 103 Abs. 2 GG):**
- "Nulla poena sine lege" - Keine Strafe ohne Gesetz
- Bestimmtheitsgrundsatz: Tatbestände müssen klar formuliert sein
- Rückwirkungsverbot: Keine nachträgliche Strafbarkeit
- Analogieverbot zu Lasten des Täters
- Ausnahme: Analogie zugunsten des Täters erlaubt

**2. Schuldprinzip:**
- Strafe setzt persönliche Schuld voraus
- "Keine Strafe ohne Schuld"
- Unschuldsvermutung (in dubio pro reo)
- Schuldangemessenheit der Strafe
- Schuldformen: Vorsatz und Fahrlässigkeit
- Schuldausschließungsgründe: Schuldunfähigkeit, Irrtum

**3. Subsidiarität (ultima ratio):**
- Strafrecht als letztes Mittel
- Nur bei besonders wichtigen Rechtsgütern
- Verhältnismäßigkeit der Mittel
- Alternative Sanktionen bevorzugen
- Entkriminalisierung bei Bagatellen
- Ordnungswidrigkeiten statt Straftaten

**4. Verhältnismäßigkeit:**
- Strafmaß muss zur Tat passen
- Berücksichtigung der Tatschwere
- Persönliche Verhältnisse des Täters
- Präventionsgesichtspunkte
- Strafrahmen und Strafzumessung

**Systematik des Strafrechts:**

**Materielles Strafrecht:**
- Strafgesetzbuch (StGB)
  * Allgemeiner Teil (§§ 1-79b): Grundsätze, Rechtsfolgen
  * Besonderer Teil (§§ 80-358): Einzelne Straftatbestände
- Nebenstrafrecht
  * Betäubungsmittelgesetz (BtMG)
  * Straßenverkehrsgesetz (StVG)
  * Waffengesetz (WaffG)
  * Wirtschaftsstrafrecht (StGB, UWG, GmbHG)
- Ordnungswidrigkeitenrecht (OWiG)
  * Keine Kriminalstrafe, sondern Bußgeld
  * Verwaltungsbehörden zuständig
- Jugendstrafrecht (JGG)
  * Erziehungsgedanke im Vordergrund
  * Besondere Rechtsfolgen

**Formelles Strafrecht (Strafverfahrensrecht):**
- Strafprozessordnung (StPO)
  * Ermittlungsverfahren: Polizei, Staatsanwaltschaft
  * Zwischenverfahren: Eröffnungsbeschluss
  * Hauptverfahren: Gerichtsverhandlung
  * Rechtsmittel: Berufung, Revision
- Grundsätze des Strafverfahrens
  * Offizialprinzip: Staatsanwaltschaft ermittelt
  * Akkusationsprinzip: Trennung Anklage/Urteil
  * Mündlichkeit und Öffentlichkeit
  * Unmittelbarkeit der Beweisaufnahme

**Strafzwecke (Straftheorien):**
- Absolute Straftheorien (Vergeltung)
  * Strafe als gerechter Ausgleich
  * Kant: "Punitur quia peccatum est"
- Relative Straftheorien (Prävention)
  * Spezialprävention: Täter bessern/sichern
  * Generalprävention: Allgemeinheit abschrecken
  * "Punitur ne peccetur"
- Vereinigungstheorien (herrschend)
  * Kombination von Vergeltung und Prävention
  * Schuldausgleich mit präventiven Zwecken

**Dreistufiger Deliktsaufbau:**
1. **Tatbestand**
   - Objektiver Tatbestand: äußere Merkmale
   - Subjektiver Tatbestand: Vorsatz/Fahrlässigkeit
2. **Rechtswidrigkeit**
   - Indiziert durch Tatbestandserfüllung
   - Rechtfertigungsgründe: Notwehr, Notstand
3. **Schuld**
   - Schuldausschließungsgründe
   - Entschuldigungsgründe

**Rechtsfolgen:**
- Hauptstrafen: Freiheitsstrafe, Geldstrafe
- Nebenstrafen: Fahrverbot
- Maßregeln: Sicherungsverwahrung, Entziehungsanstalt
- Verfall, Einziehung`,
          examples: [
            {
              id: 'ex-3-1-3-1',
              title: 'Typische strafrechtliche Fälle',
              content: '• Diebstahl eines Fahrrads (§ 242 StGB)\n• Körperverletzung nach Schlägerei (§ 223 StGB)\n• Betrug beim Online-Shopping (§ 263 StGB)\n• Beleidigung in sozialen Medien (§ 185 StGB)\n• Fahren ohne Führerschein (§ 21 StVG)\n• Verstoß gegen Betäubungsmittelgesetz\n• Steuerhinterziehung (§ 370 AO)',
              explanation: 'Strafrecht schützt die wichtigsten Rechtsgüter durch Androhung staatlicher Strafe.'
            }
          ]
        }
      ],
      resources: [
        {
          id: 'res-3-1-1',
          title: 'Rechtsgebiete-Navigator',
          type: 'interactive',
          url: '/tools/rechtsgebiete-navigator',
          description: 'Interaktive Zuordnung von Fällen zu den Rechtsgebieten'
        },
        {
          id: 'res-3-1-2',
          title: 'Gesetzestexte online',
          type: 'website',
          url: 'https://www.gesetze-im-internet.de',
          description: 'Offizielle Sammlung aller deutschen Gesetze'
        },
        {
          id: 'res-3-1-3',
          title: 'Video: Die drei Säulen des Rechts',
          type: 'video',
          url: '/videos/drei-saeulen-recht',
          duration: 30,
          description: 'Anschauliche Erklärung der Rechtsgebiete mit Praxisbeispielen'
        },
        {
          id: 'res-3-1-4',
          title: 'Fallsammlung Rechtsgebiete',
          type: 'article',
          url: '/articles/fallsammlung-rechtsgebiete',
          description: 'Über 100 Fälle zur Übung der Abgrenzung zwischen den Rechtsgebieten'
        },
        {
          id: 'res-3-1-5',
          title: 'Interaktives Gerichtsschema',
          type: 'interactive',
          url: '/tools/gerichtsbarkeiten',
          description: 'Welches Gericht ist zuständig? Interaktive Übersicht der Gerichtsbarkeiten'
        }
      ],
      glossary: [
        {
          term: 'Privatautonomie',
          definition: 'Grundprinzip des Zivilrechts: Selbstbestimmung in privaten Rechtsangelegenheiten',
          relatedTerms: ['Vertragsfreiheit', 'Dispositivität']
        },
        {
          term: 'Subsidiarität',
          definition: 'Grundsatz, dass das Strafrecht nur als letztes Mittel (ultima ratio) eingesetzt werden soll',
          relatedTerms: ['Verhältnismäßigkeit', 'Rechtsgüterschutz']
        },
        {
          term: 'Gesetzmäßigkeit der Verwaltung',
          definition: 'Bindung der Verwaltung an Recht und Gesetz (Art. 20 Abs. 3 GG)',
          relatedTerms: ['Rechtsstaatsprinzip', 'Gewaltenteilung']
        }
      ]
    },
    exercises: [
      {
        id: 'ex-ke3-1-1',
        type: 'dragDrop',
        difficulty: 'beginner',
        points: 30,
        title: 'Fälle den Rechtsgebieten zuordnen',
        description: 'Ordnen Sie die Rechtsfälle dem korrekten Rechtsgebiet zu',
        content: {
          question: 'Ziehen Sie jeden Fall in das richtige Rechtsgebiet:',
          items: [
            { id: 'fall-1', content: 'Erteilung einer Gewerberlaubnis', correctCategory: 'Öffentliches Recht' },
            { id: 'fall-2', content: 'Kaufvertrag über Smartphone', correctCategory: 'Zivilrecht' },
            { id: 'fall-3', content: 'Raub einer Handtasche', correctCategory: 'Strafrecht' },
            { id: 'fall-4', content: 'Kündigung des Arbeitsvertrags', correctCategory: 'Zivilrecht' },
            { id: 'fall-5', content: 'Bußgeld wegen Falschparkens', correctCategory: 'Öffentliches Recht' },
            { id: 'fall-6', content: 'Beleidigung des Nachbarn', correctCategory: 'Strafrecht' },
            { id: 'fall-7', content: 'Scheidung und Sorgerecht', correctCategory: 'Zivilrecht' },
            { id: 'fall-8', content: 'Asylantrag stellen', correctCategory: 'Öffentliches Recht' }
          ],
          categories: ['Zivilrecht', 'Öffentliches Recht', 'Strafrecht']
        },
        solution: {
          correct: {
            'Zivilrecht': ['Kaufvertrag über Smartphone', 'Kündigung des Arbeitsvertrags', 'Scheidung und Sorgerecht'],
            'Öffentliches Recht': ['Erteilung einer Gewerberlaubnis', 'Bußgeld wegen Falschparkens', 'Asylantrag stellen'],
            'Strafrecht': ['Raub einer Handtasche', 'Beleidigung des Nachbarn']
          },
          explanation: 'Die Zuordnung erfolgt nach den Beteiligten und der Art der Rechtsbeziehung: gleichgeordnet (Zivilrecht), Staat-Bürger (Öffentliches Recht), Straftat (Strafrecht).'
        },
        hints: [
          {
            id: 'hint-3-1-1',
            text: 'Fragen Sie sich: Wer sind die Beteiligten? Handelt der Staat hoheitlich? Droht eine Strafe?',
            penaltyPoints: 4
          }
        ],
        feedback: {
          correct: 'Sehr gut! Sie können die Rechtsgebiete sicher unterscheiden.',
          incorrect: 'Überprüfen Sie die Kriterien: Gleichordnung vs. Über-/Unterordnung vs. Strafgewalt.'
        }
      },
      {
        id: 'ex-ke3-1-2',
        type: 'multipleChoice',
        difficulty: 'intermediate',
        points: 20,
        title: 'Abgrenzungskriterien anwenden',
        description: 'Wenden Sie die Abgrenzungskriterien zwischen den Rechtsgebieten an',
        content: {
          question: 'Die Stadt verhängt gegen einen Falschparker ein Verwarnungsgeld. Welches Rechtsgebiet ist betroffen?',
          options: [
            'Zivilrecht, weil es um Geld geht',
            'Strafrecht, weil eine Sanktion verhängt wird',
            'Öffentliches Recht, weil die Stadt hoheitlich handelt',
            'Arbeitsrecht, weil Ordnungshüter tätig werden'
          ]
        },
        solution: {
          correct: 2,
          explanation: 'Die Stadt handelt als Träger öffentlicher Gewalt hoheitlich. Das Verwarnungsgeld ist eine öffentlich-rechtliche Sanktion, keine strafrechtliche.'
        },
        hints: [
          {
            id: 'hint-3-1-2',
            text: 'Achten Sie darauf, wer handelt und in welcher Eigenschaft.',
            penaltyPoints: 3
          }
        ],
        feedback: {
          correct: 'Richtig! Die Stadt übt Hoheitsgewalt aus.',
          incorrect: 'Denken Sie an die modifizierte Subjektstheorie: Wer handelt hoheitlich?'
        }
      },
      {
        id: 'ex-ke3-1-3',
        type: 'caseAnalysis',
        difficulty: 'advanced',
        points: 35,
        title: 'Komplexer Fall mit mehreren Rechtsgebieten',
        description: 'Analysieren Sie einen Fall, der mehrere Rechtsgebiete berührt',
        content: {
          question: 'Identifizieren Sie alle betroffenen Rechtsgebiete und erklären Sie Ihre Zuordnung.',
          sachverhalt: 'Beamter B des Bauamts genehmigt gegen Zahlung von 5.000 € an ihn persönlich den Bauantrag des Unternehmers U, obwohl die baurechtlichen Voraussetzungen nicht erfüllt sind. U baut daraufhin ein Mehrfamilienhaus. Nachbar N klagt gegen die Baugenehmigung und verlangt außerdem Schadensersatz für die Werminderung seines Grundstücks.',
          context: 'Prüfen Sie systematisch alle möglichen rechtlichen Aspekte.'
        },
        solution: {
          correct: {
            strafrecht: 'B: Bestechlichkeit (§ 332 StGB), U: Bestechung (§ 334 StGB)',
            oeffentlichesRecht: 'Rechtswidriger Verwaltungsakt (Baugenehmigung), Anfechtungsklage des N',
            zivilrecht: 'Schadensersatzanspruch des N gegen U (ggf. § 823 BGB), Amtshaftung gegen den Staat (§ 839 BGB, Art. 34 GG)',
            dienstrecht: 'Disziplinarverfahren gegen B'
          },
          explanation: 'Dieser Fall zeigt die Verflechtung der Rechtsgebiete: Die Bestechung ist strafrechtlich relevant, die Genehmigung öffentlich-rechtlich anfechtbar, und die Schäden werden zivilrechtlich abgewickelt.'
        },
        hints: [
          {
            id: 'hint-3-1-3',
            text: 'Prüfen Sie jede Handlung einzeln: Wer handelt wie gegenüber wem?',
            penaltyPoints: 5
          },
          {
            id: 'hint-3-1-4',
            text: 'Denken Sie auch an die Sekundärfolgen der primären Rechtsverletzungen.',
            penaltyPoints: 7
          }
        ],
        feedback: {
          correct: 'Ausgezeichnet! Sie haben alle Rechtsgebiete korrekt identifiziert.',
          incorrect: 'Überprüfen Sie systematisch: Strafbarkeit, Verwaltungsakt, Schäden.',
          partial: 'Guter Ansatz! Haben Sie alle Beteiligten und ihre Rechtsbeziehungen erfasst?'
        }
      },
      {
        id: 'ex-ke3-1-4',
        type: 'fillInBlanks',
        difficulty: 'beginner',
        points: 25,
        title: 'Grundprinzipien der Rechtsgebiete',
        description: 'Ergänzen Sie die charakteristischen Merkmale',
        content: {
          question: 'Vervollständigen Sie die Grundsätze der Rechtsgebiete:',
          template: 'Im Zivilrecht herrscht [BLANK1] zwischen den Parteien. Das öffentliche Recht ist geprägt von der [BLANK2] des Staates gegenüber dem Bürger. Im Strafrecht gilt der Grundsatz [BLANK3] - keine Strafe ohne Gesetz.'
        },
        solution: {
          correct: {
            BLANK1: 'Gleichordnung',
            BLANK2: 'Überordnung',
            BLANK3: 'nulla poena sine lege'
          },
          explanation: 'Diese Grundprinzipien prägen die unterschiedliche Natur der drei Rechtsgebiete.',
          alternativeAnswers: {
            BLANK1: ['Privatautonomie', 'Koordination'],
            BLANK2: ['Hoheitsgewalt', 'Subordination'],
            BLANK3: ['nullum crimen sine lege']
          }
        },
        hints: [
          {
            id: 'hint-3-1-5',
            text: 'Denken Sie an die Beziehung zwischen den Beteiligten in jedem Rechtsgebiet.',
            penaltyPoints: 3
          }
        ],
        feedback: {
          correct: 'Perfekt! Sie kennen die Grundcharakteristika der Rechtsgebiete.',
          incorrect: 'Überlegen Sie: Wie stehen die Parteien zueinander?',
          partial: 'Fast richtig! Überprüfen Sie Ihre Begriffe nochmals.'
        }
      },
      {
        id: 'ex-ke3-1-5',
        type: 'multipleChoice',
        difficulty: 'intermediate',
        points: 20,
        title: 'Rechtsweg bestimmen',
        description: 'Welcher Rechtsweg ist eröffnet?',
        content: {
          question: 'Ein Arbeitnehmer klagt gegen seine Kündigung. Welches Gericht ist zuständig?',
          options: [
            'Amtsgericht (Zivilgericht)',
            'Verwaltungsgericht',
            'Arbeitsgericht',
            'Sozialgericht'
          ]
        },
        solution: {
          correct: 2,
          explanation: 'Für arbeitsrechtliche Streitigkeiten sind die Arbeitsgerichte zuständig. Sie gehören zur Zivilgerichtsbarkeit, sind aber spezialisiert.'
        },
        hints: [
          {
            id: 'hint-3-1-6',
            text: 'Arbeitsrecht ist Zivilrecht, hat aber eine eigene Gerichtsbarkeit.',
            penaltyPoints: 3
          }
        ],
        feedback: {
          correct: 'Richtig! Die Arbeitsgerichtsbarkeit ist für Arbeitsstreitigkeiten zuständig.',
          incorrect: 'Denken Sie an die spezialisierten Gerichtsbarkeiten im Zivilrecht.',
          partial: ''
        }
      }
    ],
    estimatedMinutes: 600, // 10 Stunden
    requiredMastery: 80
  },

  // 3.2 Grundlagen des Rechtsstaats (10 Stunden)
  {
    id: 'ke3-2-rechtsstaat',
    moduleId: 'propaedeutikum',
    order: 14,
    title: '3.2 Grundlagen des Rechtsstaats',
    objectives: [
      {
        id: 'obj-3-2-1',
        description: 'Rechtsstaatsprinzip und seine Ausprägungen verstehen',
        bloomLevel: 'understand'
      },
      {
        id: 'obj-3-2-2',
        description: 'Gewaltenteilung und Grundrechte als Elemente des Rechtsstaats analysieren',
        bloomLevel: 'analyze'
      },
      {
        id: 'obj-3-2-3',
        description: 'Rechtsstaatliche Prinzipien in konkreten Fällen anwenden',
        bloomLevel: 'apply'
      }
    ],
    content: {
      id: 'content-3-2',
      type: 'mixed',
      sections: [
        {
          id: 'section-3-2-1',
          title: 'Das Rechtsstaatsprinzip',
          content: `Der Rechtsstaat ist ein zentrales Strukturprinzip des Grundgesetzes.

**Definition und Grundlagen:**
Der Rechtsstaat ist ein Staatswesen, in dem die staatliche Gewalt an das Recht gebunden ist und die Grundrechte der Bürger gewährleistet werden.

**Verfassungsrechtliche Verankerung:**
- Art. 20 Abs. 3 GG: "Die Gesetzgebung ist an die verfassungsmäßige Ordnung, die vollziehende Gewalt und die Rechtsprechung sind an Recht und Gesetz gebunden."
- Art. 28 Abs. 1 GG: Rechtsstaatsprinzip auch für Länder
- Ewigkeitsklausel (Art. 79 Abs. 3 GG): Unantastbarer Kern

**Formelle Rechtsstaatlichkeit:**

**1. Gesetzmäßigkeit der Verwaltung:**
- Vorrang des Gesetzes: Keine Handlung gegen das Gesetz
- Vorbehalt des Gesetzes: Ermächtigungsgrundlage erforderlich
- Bestimmtheitsgebot: Gesetze müssen klar und vorhersehbar sein
- Verhältnismäßigkeitsprinzip: Angemessenheit staatlicher Maßnahmen

**2. Gewaltenteilung:**
- Legislative (Gesetzgebung): Bundestag, Bundesrat
- Exekutive (Vollziehung): Regierung, Verwaltung
- Judikative (Rechtsprechung): Unabhängige Gerichte
- Checks and Balances: Gegenseitige Kontrolle

**3. Rechtsweggarantie:**
- Art. 19 Abs. 4 GG: "Wird jemand durch die öffentliche Gewalt in seinen Rechten verletzt, so steht ihm der Rechtsweg offen."
- Effektiver Rechtsschutz
- Gerichtliche Kontrolle staatlichen Handelns
- Unabhängige Rechtsprechung

**Materielle Rechtsstaatlichkeit:**

**1. Grundrechtsbindung:**
- Art. 1 Abs. 3 GG: Bindung aller Staatsgewalt
- Grundrechte als subjektive Abwehrrechte
- Objektive Wertordnung
- Schutzpflichten des Staates

**2. Verhältnismäßigkeitsprinzip:**
- Legitimer Zweck
- Geeignetheit der Mittel
- Erforderlichkeit (mildestes Mittel)
- Angemessenheit (Verhältnismäßigkeit i.e.S.)

**3. Rechtsklarheit und -sicherheit:**
- Bestimmtheit der Gesetze
- Vertrauensschutz
- Rückwirkungsverbot
- Rechtskontinuität`,
          examples: [
            {
              id: 'ex-3-2-1-1',
              title: 'Rechtsstaatlichkeit in der Praxis',
              content: 'Beispiel Polizeikontrolle:\n• Rechtsgrundlage: Polizeigesetz (Vorbehalt des Gesetzes)\n• Verhältnismäßigkeit: Anlass muss gegeben sein\n• Rechtsschutz: Beschwerde gegen unrechtmäßige Kontrolle\n• Grundrechtsbindung: Achtung der Menschenwürde\n• Gewaltenteilung: Gerichtliche Kontrolle möglich',
              explanation: 'Selbst einfache Polizeimaßnahmen müssen allen rechtsstaatlichen Anforderungen genügen.'
            }
          ]
        },
        {
          id: 'section-3-2-2',
          title: 'Gewaltenteilung',
          content: `Die Gewaltenteilung ist ein Kernelement des demokratischen Rechtsstaats.

**Historische Entwicklung:**
- Montesquieu: "De l'esprit des lois" (1748)
- Grundidee: Macht kontrolliert Macht
- Schutz vor Machtmissbrauch
- Sicherung der Freiheit

**Die drei Gewalten im Grundgesetz:**

**Legislative (Gesetzgebung):**
- Bundestag: Zentrale Legislativgewalt
- Bundesrat: Vertretung der Länder
- Landtage: Gesetzgebung der Länder
- Funktionen: Gesetze beschließen, Regierung kontrollieren, Haushalt bewilligen

**Exekutive (Vollziehung):**
- Bundeskanzler und Bundesminister
- Bundesbehörden und nachgeordnete Behörden
- Landesregierungen und Verwaltung
- Funktionen: Gesetze vollziehen, Politik gestalten, Verwaltung führen

**Judikative (Rechtsprechung):**
- Bundesverfassungsgericht
- Oberste Bundesgerichte (BGH, BVerwG, BAG, BSG, BFH)
- Instanzgerichte (Amts-, Land-, Oberlandesgerichte)
- Funktionen: Recht sprechen, Verfassung hüten, Rechtskontrolle

**Verschränkungen und Kontrollen:**

**Parlamentarisches Regierungssystem:**
- Regierung aus Parlamentsmehrheit
- Vertrauensfrage und Misstrauensvotum
- Bundestagsauflösung durch Bundespräsident

**Richterliche Normenkontrolle:**
- Verfassungsgerichtsbarkeit
- Verwerfung verfassungswidriger Gesetze
- Grundrechtsbindung des Gesetzgebers

**Verwaltungskontrolle:**
- Verwaltungsgerichtsbarkeit
- Parlamentarische Kontrolle
- Rechnungshöfe

**Bundesstaatliche Gewaltenteilung:**
- Vertikale Gewaltenteilung: Bund - Länder
- Kompetenzverteilung im Föderalismus
- Bundesrat als Vertretung der Länder`,
          examples: [
            {
              id: 'ex-3-2-2-1',
              title: 'Gewaltenteilung am Beispiel Gesetzgebung',
              content: 'Entstehung eines Bundesgesetzes:\n1. Entwurf (Regierung/Bundestag/Bundesrat)\n2. Erste Lesung im Bundestag\n3. Ausschussberatung\n4. Zweite/Dritte Lesung, Beschluss\n5. Bundesrat (Zustimmung/Einspruch)\n6. Ausfertigung durch Bundespräsident\n7. Verkündung im Bundesgesetzblatt\n8. Gerichtliche Kontrolle möglich',
              explanation: 'Alle drei Gewalten wirken beim Gesetzgebungsverfahren mit und kontrollieren sich gegenseitig.'
            }
          ]
        }
      ],
      resources: [
        {
          id: 'res-3-2-1',
          title: 'Grundgesetz online',
          type: 'website',
          url: 'https://www.bundestag.de/grundgesetz',
          description: 'Volltext des Grundgesetzes mit Kommentierungen'
        },
        {
          id: 'res-3-2-2',
          title: 'Gewaltenteilungs-Simulator',
          type: 'interactive',
          url: '/tools/gewaltenteilung',
          description: 'Interaktive Simulation der Gewaltenteilung'
        }
      ],
      glossary: [
        {
          term: 'Rechtsstaat',
          definition: 'Staatswesen, in dem staatliche Gewalt an das Recht gebunden ist',
          relatedTerms: ['Gewaltenteilung', 'Grundrechte', 'Rechtsschutz']
        },
        {
          term: 'Gewaltenteilung',
          definition: 'Aufteilung der Staatsgewalt in Legislative, Exekutive und Judikative',
          relatedTerms: ['Checks and Balances', 'Machtbegrenzung']
        },
        {
          term: 'Verhältnismäßigkeitsprinzip',
          definition: 'Staatliche Maßnahmen müssen geeignet, erforderlich und angemessen sein',
          relatedTerms: ['Übermaßverbot', 'Grundrechtsschranken']
        }
      ]
    },
    exercises: [
      {
        id: 'ex-ke3-2-1',
        type: 'fillInBlanks',
        difficulty: 'intermediate',
        points: 25,
        title: 'Gewaltenteilung vervollständigen',
        description: 'Ergänzen Sie die Lücken zur Gewaltenteilung',
        content: {
          question: 'Vervollständigen Sie den Text zur Gewaltenteilung:',
          template: 'Die [BLANK1] beschließt die Gesetze, die [BLANK2] vollzieht sie und die [BLANK3] spricht Recht. Diese Aufteilung der Staatsgewalt dient dem Schutz vor [BLANK4] und sichert die [BLANK5] der Bürger.'
        },
        solution: {
          correct: {
            BLANK1: 'Legislative',
            BLANK2: 'Exekutive', 
            BLANK3: 'Judikative',
            BLANK4: 'Machtmissbrauch',
            BLANK5: 'Freiheit'
          },
          explanation: 'Die drei Gewalten kontrollieren sich gegenseitig und verhindern so die Konzentration der Macht.',
          alternativeAnswers: {
            BLANK1: ['Gesetzgebung', 'Legislative Gewalt'],
            BLANK2: ['Vollziehende Gewalt', 'Verwaltung'],
            BLANK3: ['Rechtsprechung', 'Richter'],
            BLANK5: ['Grundrechte', 'Rechte']
          }
        },
        hints: [
          {
            id: 'hint-3-2-1',
            text: 'Denken Sie an die lateinischen Begriffe: Legislative, Exekutive, Judikative.',
            penaltyPoints: 4
          }
        ],
        feedback: {
          correct: 'Ausgezeichnet! Sie verstehen die Gewaltenteilung.',
          incorrect: 'Überprüfen Sie die Zuordnung der drei Staatsgewalten.'
        }
      }
    ],
    estimatedMinutes: 600, // 10 Stunden
    requiredMastery: 80
  },

  // 3.3 Einführung in die Grundrechte (10 Stunden)
  {
    id: 'ke3-3-grundrechte',
    moduleId: 'propaedeutikum',
    order: 15,
    title: '3.3 Einführung in die Grundrechte',
    objectives: [
      {
        id: 'obj-3-3-1',
        description: 'Grundrechte als Abwehrrechte und objektive Wertordnung verstehen',
        bloomLevel: 'understand'
      },
      {
        id: 'obj-3-3-2',
        description: 'Grundrechtsträger und -adressaten identifizieren',
        bloomLevel: 'apply'
      },
      {
        id: 'obj-3-3-3',
        description: 'Grundrechtsprüfung methodisch durchführen',
        bloomLevel: 'analyze'
      }
    ],
    content: {
      id: 'content-3-3',
      type: 'mixed',
      sections: [
        {
          id: 'section-3-3-1',
          title: 'Grundrechtsfunktionen',
          content: `Die Grundrechte haben verschiedene Funktionen im Verfassungssystem.

**1. Abwehrrechte (klassische Grundrechtsfunktion):**
- Schutz vor staatlichen Eingriffen
- "Status negativus" (Georg Jellinek)
- Unterlassungsansprüche gegen den Staat
- Beispiel: Keine Zensur der Meinungsäußerung

**2. Objektive Wertordnung:**
- Grundrechte als Verfassungswerte
- Ausstrahlungswirkung auf alle Rechtsgebiete
- Verfassungskonforme Auslegung
- Grundrechte zwischen Privaten (Drittwirkung)

**3. Leistungsrechte:**
- Ansprüche auf staatliche Leistungen
- Teilhaberechte (z.B. Bildung)
- Soziale Grundrechte
- Beispiel: Recht auf Bildung aus Art. 2 Abs. 1 GG

**4. Schutzpflichten:**
- Staat muss vor Grundrechtsverletzungen schützen
- Schutz vor Dritten
- Positive Handlungspflichten
- Beispiel: Schutz des Lebens vor Verbrechen

**5. Verfahrensrechte:**
- Anspruch auf faires Verfahren
- Rechtliches Gehör (Art. 103 Abs. 1 GG)
- Effektiver Rechtsschutz
- Beispiel: Anhörung vor Grundrechtseingriffen

**Grundrechtsarten:**

**Menschen- vs. Bürgerrechte:**
- Menschenrechte: Für alle Menschen (Art. 1-3, 4, 5 etc.)
- Bürgerrechte: Nur für Deutsche (Art. 8, 9, 11, 12 etc.)
- EU-Bürger: Teilweise gleichgestellt

**Jedermann-Grundrechte:**
- Für alle natürlichen Personen
- Auch für Ausländer
- Beispiel: Meinungsfreiheit, Religionsfreiheit

**Deutsche Grundrechte:**
- Nur für deutsche Staatsangehörige
- Politische Teilhaberechte
- Beispiel: Versammlungsfreiheit, Berufsfreiheit`,
          examples: [
            {
              id: 'ex-3-3-1-1',
              title: 'Grundrechtsfunktionen am Beispiel',
              content: 'Art. 5 Abs. 1 GG (Meinungsfreiheit):\n• Abwehrrecht: Staat darf Meinung nicht verbieten\n• Objektive Wertordnung: Freie Meinungsbildung als Verfassungswert\n• Leistungsrecht: Anspruch auf Zugang zu Informationen\n• Schutzpflicht: Schutz vor privater Zensur\n• Verfahrensrecht: Anhörung bei Demonstrationsverbot',
              explanation: 'Ein Grundrecht entfaltet verschiedene Wirkungen je nach Konstellation.'
            }
          ]
        },
        {
          id: 'section-3-3-2',
          title: 'Grundrechtsprüfung',
          content: `Die Grundrechtsprüfung folgt einem festen methodischen Schema.

**Prüfungsschema (Dreischritt):**

**1. Schutzbereich:**
- Sachlicher Schutzbereich: Was ist geschützt?
- Persönlicher Schutzbereich: Wer ist geschützt?
- Eröffnung des Grundrechts

**2. Eingriff:**
- Klassischer Eingriffsbegriff: unmittelbar, gezielt, mit Zwang
- Moderner Eingriffsbegriff: auch mittelbare Beeinträchtigungen
- Eingriffsintensität bestimmen

**3. Verfassungsrechtliche Rechtfertigung:**
- Schranken des Grundrechts prüfen
- Verhältnismäßigkeitsprüfung
- Wesensgehaltsgarantie (Art. 19 Abs. 2 GG)

**Schrankenarten:**

**Ausdrückliche Schranken:**
- Einfacher Gesetzesvorbehalt: "durch Gesetz"
- Qualifizierter Gesetzesvorbehalt: zusätzliche Anforderungen
- Verfassungsimmanente Schranken

**Schranken-Schranken:**
- Wesensgehaltsgarantie (Art. 19 Abs. 2 GG)
- Zitiergebot (Art. 19 Abs. 1 S. 2 GG)
- Verhältnismäßigkeitsprinzip
- Bestimmtheitsgebot

**Verhältnismäßigkeitsprüfung:**
1. **Legitimer Zweck:** Dient die Maßnahme einem verfassungsrechtlich anerkannten Ziel?
2. **Geeignetheit:** Ist die Maßnahme zur Zweckerreichung geeignet?
3. **Erforderlichkeit:** Ist kein milderes, gleich wirksames Mittel verfügbar?
4. **Angemessenheit:** Ist die Belastung im Verhältnis zum Nutzen angemessen?

**Praktische Tipps:**
- Systematisch alle Prüfungsschritte abarbeiten
- Bei mehreren Grundrechten: Alle prüfen
- Konkurrenzen zwischen Grundrechten beachten
- Abwägung bei kollidierenden Grundrechten`,
          examples: [
            {
              id: 'ex-3-3-2-1',
              title: 'Grundrechtsprüfung Schema',
              content: 'Demonstrationsverbot in der Innenstadt:\n\n1. Schutzbereich Art. 8 GG:\n• Sachlich: Friedliche Versammlung ✓\n• Persönlich: Deutsche ✓\n\n2. Eingriff:\n• Verbot = unmittelbarer Eingriff ✓\n\n3. Rechtfertigung:\n• Schranke: Art. 8 Abs. 2 GG\n• Verhältnismäßigkeit prüfen:\n  - Zweck: Verkehrssicherheit ✓\n  - Geeignet: Ja ✓\n  - Erforderlich: Alternative Orte? (?)\n  - Angemessen: Abwägung erforderlich',
              explanation: 'Die systematische Prüfung führt zu einer methodisch sauberen Grundrechtsanalyse.'
            }
          ]
        }
      ],
      resources: [
        {
          id: 'res-3-3-1',
          title: 'Grundrechte-Trainer',
          type: 'interactive',
          url: '/tools/grundrechte-trainer',
          description: 'Interaktives Training der Grundrechtsprüfung'
        },
        {
          id: 'res-3-3-2',
          title: 'BVerfG-Entscheidungen',
          type: 'database',
          url: '/resources/bverfg-sammlung',
          description: 'Sammlung wichtiger Verfassungsgerichtsentscheidungen'
        }
      ],
      glossary: [
        {
          term: 'Schutzbereich',
          definition: 'Der von einem Grundrecht erfasste Lebensbereich',
          relatedTerms: ['Sachlicher Schutzbereich', 'Persönlicher Schutzbereich']
        },
        {
          term: 'Eingriff',
          definition: 'Staatliche Maßnahme, die den Schutzbereich eines Grundrechts betrifft',
          relatedTerms: ['Klassischer Eingriff', 'Moderner Eingriff']
        },
        {
          term: 'Verhältnismäßigkeitsprinzip',
          definition: 'Grundsatz, dass staatliche Eingriffe geeignet, erforderlich und angemessen sein müssen',
          relatedTerms: ['Übermaßverbot', 'Schranken-Schranken']
        }
      ]
    },
    exercises: [
      {
        id: 'ex-ke3-3-1',
        type: 'caseAnalysis',
        difficulty: 'advanced',
        points: 40,
        title: 'Grundrechtsprüfung durchführen',
        description: 'Führen Sie eine vollständige Grundrechtsprüfung durch',
        content: {
          question: 'Prüfen Sie die Verfassungsmäßigkeit folgender Maßnahme:',
          sachverhalt: 'Die Stadt verbietet alle Demonstrationen in der Fußgängerzone, um die Geschäfte zu schützen. Demonstrant D will trotzdem demonstrieren.',
          context: 'Prüfen Sie Art. 8 GG (Versammlungsfreiheit) vollständig.'
        },
        solution: {
          correct: {
            schutzbereich: 'Art. 8 GG schützt das Recht, sich friedlich zu versammeln. Sachlich: Demonstration = Versammlung. Persönlich: D als Deutscher.',
            eingriff: 'Das Verbot ist ein unmittelbarer, gezielter Eingriff in die Versammlungsfreiheit.',
            rechtfertigung: 'Art. 8 Abs. 2 GG erlaubt Beschränkungen für friedliche Versammlungen. Verhältnismäßigkeitsprüfung: Zweck (Geschäftsschutz) fragwürdig, Totalverbot unverhältnismäßig.',
            ergebnis: 'Grundrechtsverstoß, da pauschales Verbot unverhältnismäßig.'
          },
          explanation: 'Die systematische Grundrechtsprüfung zeigt, dass der Eingriff nicht gerechtfertigt ist.'
        },
        hints: [
          {
            id: 'hint-3-3-1',
            text: 'Arbeiten Sie das Dreischritt-Schema ab: Schutzbereich - Eingriff - Rechtfertigung.',
            penaltyPoints: 6
          }
        ],
        feedback: {
          correct: 'Hervorragend! Sie beherrschen die Grundrechtsprüfung.',
          incorrect: 'Überprüfen Sie, ob Sie alle drei Prüfungsschritte vollständig bearbeitet haben.'
        }
      }
    ],
    estimatedMinutes: 600, // 10 Stunden
    requiredMastery: 85
  },

  // 3.4 Europäisches Recht und Verwaltungsverfahren (15 Stunden)
  {
    id: 'ke3-4-eu-verwaltung',
    moduleId: 'propaedeutikum',
    order: 16,
    title: '3.4 Europäisches Recht und Verwaltungsverfahren',
    objectives: [
      {
        id: 'obj-3-4-1',
        description: 'Grundlagen des EU-Rechts und seine Bedeutung für nationales Recht verstehen',
        bloomLevel: 'understand'
      },
      {
        id: 'obj-3-4-2',
        description: 'Verwaltungsverfahren und Verwaltungsakt analysieren',
        bloomLevel: 'analyze'
      },
      {
        id: 'obj-3-4-3',
        description: 'EU-Recht in praktischen Fällen anwenden',
        bloomLevel: 'apply'
      }
    ],
    content: {
      id: 'content-3-4',
      type: 'mixed',
      sections: [
        {
          id: 'section-3-4-1',
          title: 'Grundlagen des Europarechts',
          content: `Das Europarecht prägt zunehmend die nationale Rechtsordnung.

**🎯 Lernziel-Check:**
Nach diesem Abschnitt können Sie:
- Die Struktur der EU erklären
- Primär- und Sekundärrecht unterscheiden
- Den Anwendungsvorrang verstehen

**Die Europäische Union als Rechtsgemeinschaft:**

**Historische Entwicklung (Zeitleiste):**
\`\`\`
1951 → EGKS (Montanunion)
1957 → EWG und EURATOM (Römische Verträge)
1992 → EU-Gründung (Maastricht)
2007 → Reformvertrag (Lissabon)
2020 → Brexit (UK-Austritt)
\`\`\`

**📊 Die EU-Institutionen im Überblick:**

| Institution | Funktion | Zusammensetzung | Sitz |
|------------|----------|-----------------|------|
| **Europäischer Rat** | Politische Leitlinien | Staats-/Regierungschefs | Brüssel |
| **Rat der EU** | Legislative (mit EP) | Fachminister | Brüssel |
| **EU-Parlament** | Legislative & Kontrolle | 705 Abgeordnete | Straßburg/Brüssel |
| **EU-Kommission** | Exekutive | 27 Kommissare | Brüssel |
| **EuGH** | Judikative | 27 Richter | Luxemburg |

**Rechtsquellen des EU-Rechts:**

**1. Primärrecht (Verfassungsebene):**
- EU-Vertrag (EUV)
- Vertrag über die Arbeitsweise der EU (AEUV)
- Grundrechtecharta
- Allgemeine Rechtsgrundsätze

**2. Sekundärrecht (Gesetzesebene):**
- **Verordnung (Art. 288 AEUV):**
  * Unmittelbar anwendbar
  * In allen Mitgliedstaaten verbindlich
  * Beispiel: DSGVO
  
- **Richtlinie (Art. 288 AEUV):**
  * Ziel verbindlich, Form/Mittel frei
  * Umsetzung erforderlich
  * Beispiel: Verbraucherrechte-RL
  
- **Beschluss:**
  * Individuell verbindlich
  * Adressatenbezogen
  * Beispiel: Kartellentscheidungen

**💡 Merkhilfe - Die "VRB-Regel":**
- **V**erordnung = **V**oll verbindlich
- **R**ichtlinie = **R**esultat vorgegeben
- **B**eschluss = **B**estimmte Adressaten

**Der Anwendungsvorrang des EU-Rechts:**

**Grundsatz (EuGH, Rs. Costa/ENEL):**
"EU-Recht bricht nationales Recht"

**Aber Achtung - Grenzen:**
1. Ultra-vires-Kontrolle (BVerfG)
2. Verfassungsidentität
3. Grundrechtsschutz

**🔄 Zusammenspiel EU-Recht und nationales Recht:**
\`\`\`
EU-Recht
    ↓
Anwendungsvorrang
    ↓
Nationales Recht
(soweit vereinbar)
\`\`\``,
          examples: [
            {
              id: 'ex-3-4-1-1',
              title: '🎯 Praxisbeispiel: DSGVO im Alltag',
              content: 'Die Datenschutz-Grundverordnung (DSGVO) als EU-Verordnung:\n\n**Charakteristika:**\n- Gilt unmittelbar in allen EU-Staaten\n- Kein Umsetzungsgesetz nötig\n- Verdrängt nationales Datenschutzrecht\n\n**Praktische Auswirkungen:**\n- Cookie-Banner auf Websites\n- Auskunftsrecht über gespeicherte Daten\n- Recht auf Löschung ("Recht auf Vergessenwerden")\n- Hohe Bußgelder bei Verstößen (bis 4% des Jahresumsatzes)\n\n**Öffnungsklauseln:**\nTrotz Verordnung: Nationale Regelungen in bestimmten Bereichen möglich (z.B. Beschäftigtendatenschutz)',
              explanation: 'Die DSGVO zeigt, wie EU-Recht direkt in unseren Alltag wirkt.'
            },
            {
              id: 'ex-3-4-1-2',
              title: '📖 Lernkarte: Richtlinienumsetzung',
              content: '**Vorderseite:** Was passiert, wenn Deutschland eine EU-Richtlinie nicht fristgerecht umsetzt?\n\n**Rückseite:**\n1. **Vertragsverletzungsverfahren** (Art. 258 AEUV)\n2. **Unmittelbare Wirkung** (bei hinreichend bestimmten Regelungen)\n3. **Staatshaftung** (Francovich-Rechtsprechung)\n4. **Richtlinienkonforme Auslegung** des nationalen Rechts\n\n**Merksatz:** "Wer zu spät kommt, den bestraft die EU!"',
              explanation: 'Diese Lernkarte hilft, die Konsequenzen verspäteter Umsetzung zu merken.'
            }
          ]
        },
        {
          id: 'section-3-4-2',
          title: 'Verwaltungsverfahren und Verwaltungsakt',
          content: `Das Verwaltungsverfahren ist das "Wie" staatlichen Handelns.

**🎯 Lernziel-Check:**
Nach diesem Abschnitt können Sie:
- Ein Verwaltungsverfahren strukturieren
- Verwaltungsakte erkennen und prüfen
- Rechtsbehelfe einordnen

**Das Verwaltungsverfahren (VwVfG):**

**Definition (§ 9 VwVfG):**
"Die nach außen wirkende Tätigkeit der Behörden, die auf die Prüfung der Voraussetzungen, die Vorbereitung und den Erlass eines Verwaltungsaktes [...] gerichtet ist."

**📋 Verfahrensgrundsätze (Checkliste):**
- [ ] **Untersuchungsgrundsatz** (§ 24): Behörde ermittelt von Amts wegen
- [ ] **Anhörung** (§ 28): Betroffene können sich äußern
- [ ] **Akteneinsicht** (§ 29): Transparenz des Verfahrens
- [ ] **Begründungspflicht** (§ 39): Nachvollziehbare Entscheidungen
- [ ] **Belehrungspflicht** (§ 36): Über Rechtsbehelfe informieren

**Der Verwaltungsakt (§ 35 VwVfG):**

**📐 Die 5 Merkmale (BEHÖR-Formel):**
- **B**ehörde (Hoheitsträger)
- **E**inzelfall (konkret-individuell)
- **H**oheitliche Maßnahme (einseitig)
- **Ö**ffentliches Recht (Abgrenzung zum Privatrecht)
- **R**egelung (Rechtsfolge nach außen)

**💡 Eselsbrücke:** "BEHÖR den Verwaltungsakt!"

**Arten von Verwaltungsakten:**

\`\`\`mermaid
graph TD
    A[Verwaltungsakt] --> B[Belastend]
    A --> C[Begünstigend]
    B --> D[Gebot/Verbot]
    B --> E[Versagung]
    C --> F[Erlaubnis]
    C --> G[Leistung]
\`\`\`

**🔍 Prüfungsschema Verwaltungsakt:**

1. **Formelle Rechtmäßigkeit**
   - Zuständigkeit
   - Verfahren
   - Form
   
2. **Materielle Rechtmäßigkeit**
   - Ermächtigungsgrundlage
   - Tatbestandsvoraussetzungen
   - Rechtsfolge (Ermessen?)
   
3. **Nebenbestimmungen** (§ 36 VwVfG)
   - Befristung
   - Bedingung
   - Auflage
   - Widerrufsvorbehalt

**Rechtsbehelfe gegen Verwaltungsakte:**

**⏱️ Zeitschiene:**
\`\`\`
VA-Erlass → 1 Monat → Widerspruch → Widerspruchsbescheid → 1 Monat → Klage
\`\`\`

**Die wichtigsten Klagearten:**
1. **Anfechtungsklage** (§ 42 VwGO): Gegen belastende VA
2. **Verpflichtungsklage** (§ 42 VwGO): Auf Erlass eines VA
3. **Feststellungsklage** (§ 43 VwGO): Rechtsverhältnis klären
4. **Fortsetzungsfeststellungsklage**: Bei erledigtem VA`,
          examples: [
            {
              id: 'ex-3-4-2-1',
              title: '🏗️ Praxisfall: Baugenehmigung',
              content: 'Herr Müller beantragt eine Baugenehmigung für ein Einfamilienhaus.\n\n**Verwaltungsverfahren:**\n1. Antragstellung mit Bauunterlagen\n2. Prüfung durch Bauamt (Baurecht, Bebauungsplan)\n3. Anhörung der Nachbarn (§ 28 VwVfG)\n4. Stellungnahmen anderer Behörden\n5. Entscheidung\n\n**Mögliche Ausgänge:**\n- ✅ Genehmigung (begünstigender VA)\n- ✅ Genehmigung mit Auflagen (z.B. Firsthöhe)\n- ❌ Ablehnung (belastender VA)\n\n**Rechtsbehelf bei Ablehnung:**\n→ Widerspruch binnen 1 Monat\n→ Bei Misserfolg: Verpflichtungsklage',
              explanation: 'Das Baugenehmigungsverfahren zeigt typische Verwaltungsabläufe.'
            },
            {
              id: 'ex-3-4-2-2',
              title: '🎮 Interaktiv: VA oder nicht?',
              content: 'Entscheiden Sie - Verwaltungsakt ja oder nein?\n\n1. **Strafzettel ("Knöllchen")**\n   → ✅ VA (Bußgeldbescheid)\n\n2. **Mietvertrag mit der Stadt**\n   → ❌ Kein VA (privatrechtlich)\n\n3. **Schulzeugnis**\n   → ✅ VA (Bewertung mit Rechtsfolgen)\n\n4. **Ampel zeigt Rot**\n   → ❌ Kein VA (Allgemeinverfügung, aber kein Einzelfall)\n\n5. **Einbürgerungsurkunde**\n   → ✅ VA (statusbegründend)\n\n**Merke:** Nicht jedes behördliche Handeln ist ein VA!',
              explanation: 'Die Abgrenzung des VA von anderen Handlungsformen ist prüfungsrelevant.'
            }
          ]
        },
        {
          id: 'section-3-4-3',
          title: '🔄 Wiederholung und Vertiefung',
          content: `**Zusammenfassung der wichtigsten Punkte:**

**🎯 Die 5 wichtigsten Fakten zum EU-Recht:**
1. EU-Recht hat **Anwendungsvorrang** vor nationalem Recht
2. **Verordnungen** gelten unmittelbar, **Richtlinien** müssen umgesetzt werden
3. Der **EuGH** sichert einheitliche Auslegung
4. **Vier Grundfreiheiten**: Waren, Personen, Dienstleistungen, Kapital
5. **Subsidiaritätsprinzip**: EU nur tätig, wenn Ziele nicht national erreichbar

**🎯 Die 5 wichtigsten Fakten zum Verwaltungsrecht:**
1. **Verwaltungsakt** = hoheitliche Einzelfallregelung (§ 35 VwVfG)
2. **Anhörung** vor belastenden Entscheidungen (§ 28 VwVfG)
3. **Widerspruchsfrist**: 1 Monat ab Bekanntgabe
4. **Ermessen** = Entscheidungsspielraum der Behörde
5. **Verhältnismäßigkeit** als Grenze allen Verwaltungshandelns

**📝 Selbsttest-Fragen:**
1. Was ist der Unterschied zwischen einer EU-Verordnung und einer Richtlinie?
2. Nennen Sie die 5 Merkmale eines Verwaltungsakts!
3. Welche Rechtsbehelfe gibt es gegen einen belastenden VA?
4. Was bedeutet "Anwendungsvorrang" des EU-Rechts?
5. Wann muss eine Behörde den Betroffenen anhören?

**🔗 Querverbindungen zu anderen Lerneinheiten:**
- → Kurseinheit 1.1: Der juristische Fall (VA als Rechtsfall)
- → Kurseinheit 2.1: Auslegungsmethoden (bei EU-Recht)
- → Kurseinheit 3.1: Öffentliches Recht (Vertiefung)

**💡 Lerntipp:**
Erstellen Sie Karteikarten mit:
- Vorderseite: Begriff/Frage
- Rückseite: Definition/Antwort + Beispiel

Nutzen Sie die Spaced-Repetition-Methode!`,
          examples: [
            {
              id: 'ex-3-4-3-1',
              title: '📚 Lernkarten-Set: EU-Recht Basics',
              content: '**Karte 1:**\nV: Was sind die vier Grundfreiheiten der EU?\nR: Freier Verkehr von 1) Waren 2) Personen 3) Dienstleistungen 4) Kapital\n\n**Karte 2:**\nV: Vorabentscheidungsverfahren (Art. 267 AEUV)?\nR: Nationales Gericht fragt EuGH zur Auslegung von EU-Recht\n\n**Karte 3:**\nV: Unterschied Primär-/Sekundärrecht?\nR: Primär = Verträge ("Verfassung"), Sekundär = Rechtsakte der Organe\n\n**Karte 4:**\nV: Was ist eine Öffnungsklausel?\nR: Ermächtigung in EU-Verordnung für nationale Regelungen\n\n**Karte 5:**\nV: Vertragsverletzungsverfahren?\nR: EU-Kommission verklagt Mitgliedstaat vor EuGH (Art. 258 AEUV)',
              explanation: 'Lernkarten helfen beim Memorieren der Grundbegriffe.'
            }
          ]
        }
      ],
      resources: [
        {
          id: 'res-3-4-1',
          title: 'Europa.eu - Offizielles EU-Portal',
          type: 'website',
          url: 'https://europa.eu',
          description: 'Zugang zu allen EU-Institutionen und Rechtsquellen'
        },
        {
          id: 'res-3-4-2',
          title: 'EUR-Lex Rechtsdatenbank',
          type: 'database',
          url: 'https://eur-lex.europa.eu',
          description: 'Vollständige Sammlung des EU-Rechts'
        },
        {
          id: 'res-3-4-3',
          title: 'VwVfG Kommentar Online',
          type: 'article',
          url: '/kommentare/vwvfg',
          description: 'Praxiskommentar zum Verwaltungsverfahrensgesetz'
        },
        {
          id: 'res-3-4-4',
          title: 'EU-Recht Lernvideo',
          type: 'video',
          url: '/videos/eu-recht-basics',
          duration: 25,
          description: 'Einführung in die Grundlagen des Europarechts'
        },
        {
          id: 'res-3-4-5',
          title: 'Interaktiver VA-Prüfer',
          type: 'interactive',
          url: '/tools/va-pruefung',
          description: 'Üben Sie die Prüfung von Verwaltungsakten'
        }
      ],
      glossary: [
        {
          term: 'Anwendungsvorrang',
          definition: 'EU-Recht geht nationalem Recht vor, ohne es zu vernichten',
          relatedTerms: ['Geltungsvorrang', 'Normenhierarchie']
        },
        {
          term: 'Verwaltungsakt',
          definition: 'Hoheitliche Maßnahme einer Behörde zur Regelung eines Einzelfalls mit Außenwirkung',
          relatedTerms: ['Allgemeinverfügung', 'Bescheid']
        },
        {
          term: 'Subsidiaritätsprinzip',
          definition: 'EU wird nur tätig, wenn Ziele auf nationaler Ebene nicht ausreichend verwirklicht werden können',
          relatedTerms: ['Verhältnismäßigkeit', 'Kompetenzverteilung']
        },
        {
          term: 'Ermessen',
          definition: 'Entscheidungsspielraum der Verwaltung bei der Rechtsfolgenbestimmung',
          relatedTerms: ['Ermessensfehlgebrauch', 'Ermessensreduzierung auf Null']
        }
      ]
    },
    exercises: [
      {
        id: 'ex-ke3-4-1',
        type: 'multipleChoice',
        difficulty: 'beginner',
        points: 20,
        title: 'EU-Rechtsakte unterscheiden',
        description: 'Testen Sie Ihr Wissen über die verschiedenen EU-Rechtsakte',
        content: {
          question: 'Welche Aussage über EU-Verordnungen ist korrekt?',
          options: [
            'Sie müssen von den Mitgliedstaaten in nationales Recht umgesetzt werden',
            'Sie gelten unmittelbar in allen Mitgliedstaaten',
            'Sie richten sich nur an bestimmte Adressaten',
            'Sie sind unverbindliche Empfehlungen'
          ]
        },
        solution: {
          correct: 1,
          explanation: 'EU-Verordnungen gelten unmittelbar und sind in allen Teilen verbindlich. Sie bedürfen keiner Umsetzung durch die Mitgliedstaaten.'
        },
        hints: [
          {
            id: 'hint-3-4-1',
            text: 'Denken Sie an die DSGVO - wie wurde sie wirksam?',
            penaltyPoints: 3
          }
        ],
        feedback: {
          correct: 'Richtig! Verordnungen sind das "schärfste Schwert" der EU-Gesetzgebung.',
          incorrect: 'Denken Sie an den Unterschied zwischen Verordnung und Richtlinie.'
        }
      },
      {
        id: 'ex-ke3-4-2',
        type: 'caseAnalysis',
        difficulty: 'intermediate',
        points: 40,
        title: 'Verwaltungsakt analysieren',
        description: 'Prüfen Sie, ob ein Verwaltungsakt vorliegt',
        content: {
          question: 'Prüfen Sie anhand der BEHÖR-Formel, ob ein Verwaltungsakt vorliegt.',
          sachverhalt: 'Die Stadt München erlässt eine Allgemeinverfügung, die das Betreten des Marienplatzes während des Oktoberfests zwischen 20:00 und 6:00 Uhr untersagt. Herrn Schmidt wird von der Polizei der Zutritt verweigert und ein Platzverweis erteilt.',
          context: 'Unterscheiden Sie zwischen der Allgemeinverfügung und dem Platzverweis.'
        },
        solution: {
          correct: {
            allgemeinverfuegung: 'Die Allgemeinverfügung ist ein VA gem. § 35 S. 2 VwVfG - sie richtet sich an einen bestimmbaren Personenkreis',
            platzverweis: 'Der Platzverweis ist ein klassischer VA: B=Polizei, E=Einzelfall Schmidt, H=hoheitlich, Ö=öffentliches Recht (Polizeirecht), R=Regelung (Verbot des Aufenthalts)',
            ergebnis: 'Beide Maßnahmen sind Verwaltungsakte, aber unterschiedlicher Art'
          },
          explanation: 'Die Allgemeinverfügung ist ein VA besonderer Art, während der Platzverweis ein klassischer Einzel-VA ist.',
          commonMistakes: [
            'Allgemeinverfügung als "kein VA" einordnen',
            'BEHÖR-Formel nicht systematisch durchprüfen'
          ]
        },
        hints: [
          {
            id: 'hint-3-4-2',
            text: 'Prüfen Sie beide Maßnahmen getrennt!',
            penaltyPoints: 5
          },
          {
            id: 'hint-3-4-3',
            text: 'Denken Sie an § 35 Satz 2 VwVfG für die Allgemeinverfügung',
            penaltyPoints: 7
          }
        ],
        feedback: {
          correct: 'Ausgezeichnet! Sie haben beide VA-Arten korrekt identifiziert.',
          incorrect: 'Prüfen Sie die BEHÖR-Merkmale nochmals systematisch.',
          partial: 'Teilweise richtig. Haben Sie beide Maßnahmen analysiert?'
        }
      },
      {
        id: 'ex-ke3-4-3',
        type: 'dragDrop',
        difficulty: 'intermediate',
        points: 30,
        title: 'EU-Institutionen zuordnen',
        description: 'Ordnen Sie die Funktionen den richtigen EU-Institutionen zu',
        content: {
          question: 'Welche Institution hat welche Hauptfunktion?',
          items: [
            { id: 'item-1', content: 'Gesetzesinitiative', correctCategory: 'EU-Kommission' },
            { id: 'item-2', content: 'Klage wegen Vertragsverletzung', correctCategory: 'EU-Kommission' },
            { id: 'item-3', content: 'Haushaltskontrolle', correctCategory: 'EU-Parlament' },
            { id: 'item-4', content: 'Vorabentscheidung', correctCategory: 'EuGH' },
            { id: 'item-5', content: 'Politische Leitlinien', correctCategory: 'Europäischer Rat' },
            { id: 'item-6', content: 'Gesetzgebung mit EP', correctCategory: 'Rat der EU' }
          ],
          categories: ['EU-Kommission', 'EU-Parlament', 'Rat der EU', 'Europäischer Rat', 'EuGH']
        },
        solution: {
          correct: {
            'EU-Kommission': ['Gesetzesinitiative', 'Klage wegen Vertragsverletzung'],
            'EU-Parlament': ['Haushaltskontrolle'],
            'Rat der EU': ['Gesetzgebung mit EP'],
            'Europäischer Rat': ['Politische Leitlinien'],
            'EuGH': ['Vorabentscheidung']
          },
          explanation: 'Jede EU-Institution hat spezifische Aufgaben im institutionellen Gefüge.'
        },
        hints: [
          {
            id: 'hint-3-4-4',
            text: 'Die Kommission ist die "Hüterin der Verträge"',
            penaltyPoints: 4
          }
        ],
        feedback: {
          correct: 'Perfekt! Sie kennen die EU-Institutionen und ihre Aufgaben.',
          incorrect: 'Überprüfen Sie die Funktionen der einzelnen Institutionen nochmals.',
          partial: ''
        }
      },
      {
        id: 'ex-ke3-4-4',
        type: 'fillInBlanks',
        difficulty: 'beginner',
        points: 25,
        title: 'Verwaltungsverfahren Grundsätze',
        description: 'Ergänzen Sie die wichtigsten Verfahrensgrundsätze',
        content: {
          question: 'Vervollständigen Sie die Grundsätze des Verwaltungsverfahrens:',
          template: 'Die Behörde ermittelt den Sachverhalt von Amts wegen ([BLANK1]). Vor belastenden Entscheidungen ist der Betroffene anzuhören ([BLANK2]). Die Entscheidung muss begründet werden ([BLANK3]). Gegen Verwaltungsakte kann innerhalb von [BLANK4] Monat Widerspruch eingelegt werden.'
        },
        solution: {
          correct: {
            BLANK1: 'Untersuchungsgrundsatz',
            BLANK2: 'Anhörungspflicht',
            BLANK3: 'Begründungspflicht',
            BLANK4: 'einem'
          },
          explanation: 'Diese Grundsätze sichern ein faires und transparentes Verwaltungsverfahren.',
          alternativeAnswers: {
            BLANK1: ['Amtsermittlungsgrundsatz', '§ 24 VwVfG'],
            BLANK2: ['§ 28 VwVfG', 'Anhörung'],
            BLANK3: ['§ 39 VwVfG', 'Begründung'],
            BLANK4: ['1', 'ein']
          }
        },
        hints: [
          {
            id: 'hint-3-4-5',
            text: 'Die Paragraphen stehen im VwVfG',
            penaltyPoints: 3
          }
        ],
        feedback: {
          correct: 'Sehr gut! Sie kennen die wichtigsten Verfahrensgrundsätze.',
          incorrect: 'Schauen Sie sich die §§ 24, 28, 39 VwVfG nochmals an.',
          partial: 'Fast richtig! Überprüfen Sie einzelne Begriffe.'
        }
      }
    ],
    estimatedMinutes: 900, // 15 Stunden
    requiredMastery: 85
  },

  // 3.5 Berufsethik und anwaltliches Standesrecht (10 Stunden) 
  {
    id: 'ke3-5-berufsethik',
    moduleId: 'propaedeutikum',
    order: 17,
    title: '3.5 Berufsethik und anwaltliches Standesrecht',
    objectives: [
      {
        id: 'obj-3-5-1',
        description: 'Ethische Grundlagen juristischer Berufe verstehen',
        bloomLevel: 'understand'
      },
      {
        id: 'obj-3-5-2',
        description: 'Standesrechtliche Pflichten von Rechtsanwälten kennen',
        bloomLevel: 'remember'
      },
      {
        id: 'obj-3-5-3',
        description: 'Interessenkonflikte erkennen und lösen',
        bloomLevel: 'apply'
      }
    ],
    content: {
      id: 'content-3-5',
      type: 'mixed',
      sections: [
        {
          id: 'section-3-5-1',
          title: 'Ethische Grundlagen der Rechtspflege',
          content: `Die Rechtspflege basiert auf ethischen Grundwerten und Vertrauen.

**🎯 Lernziel-Check:**
Nach diesem Abschnitt können Sie:
- Die Rolle der Ethik im Recht erklären
- Berufspflichten ableiten
- Ethische Dilemmata erkennen

**Warum Berufsethik im Recht?**

**Das Vertrauensverhältnis:**
- Anwälte kennen intimste Details ihrer Mandanten
- Richter entscheiden über Freiheit und Vermögen
- Notare beurkunden lebenswichtige Geschäfte
- Staatsanwälte vertreten das Gemeinwohl

**⚖️ Die drei Säulen der Rechtsethik:**

\`\`\`
     Gerechtigkeit
          /\
         /  \
        /    \
       /      \
  Wahrheit--Integrität
\`\`\`

**Grundwerte juristischer Berufe:**

1. **Unabhängigkeit**
   - Frei von Weisungen
   - Keine Interessenkonflikte
   - Nur dem Recht verpflichtet

2. **Verschwiegenheit**
   - Absoluter Vertrauensschutz
   - Auch nach Mandatsende
   - Strafrechtlich geschützt (§ 203 StGB)

3. **Integrität**
   - Ehrlichkeit und Aufrichtigkeit
   - Keine Täuschung des Gerichts
   - Fairness gegenüber allen Beteiligten

4. **Kompetenz**
   - Fortbildungspflicht
   - Sorgfältige Bearbeitung
   - Grenzen der eigenen Fähigkeiten kennen

**🤔 Ethische Dilemmata in der Praxis:**

**Beispiel 1: Der schuldige Mandant**
- Mandant gesteht Straftat
- Pflicht zur Verteidigung vs. Wahrheitspflicht
- Lösung: Keine Lüge, aber bestmögliche Verteidigung

**Beispiel 2: Der zahlungsunfähige Mandant**
- Mittellose Person braucht dringend Rechtshilfe
- Wirtschaftlichkeit vs. Zugang zum Recht
- Lösung: Beratungshilfe, Pro Bono, PKH

**Beispiel 3: Der unsympathische Fall**
- Verteidigung eines Extremisten
- Persönliche Überzeugung vs. Berufspflicht
- Lösung: Jeder hat Recht auf Verteidigung`,
          examples: [
            {
              id: 'ex-3-5-1-1',
              title: '⚖️ Fallstudie: Mandatsgeheimnis',
              content: 'Anwältin A erfährt von Mandant M, dass dieser vor 10 Jahren einen ungeklärten Einbruch begangen hat. M stirbt überraschend. Die Polizei ermittelt noch immer.\n\n**Ethisches Dilemma:**\n- Verschwiegenheitspflicht überlebt den Mandanten\n- Gerechtigkeit für das Opfer?\n- Strafverfolgungsinteresse?\n\n**Lösung:**\nA muss schweigen! Die Verschwiegenheitspflicht gilt auch postmortal. Ausnahmen nur bei:\n- Entbindung durch Erben\n- Notwehr/Notstand\n- Eigene Strafverteidigung\n\n**Merksatz:** "Das Mandatsgeheimnis ist heilig!"',
              explanation: 'Die Verschwiegenheitspflicht ist Grundlage des Vertrauensverhältnisses.'
            },
            {
              id: 'ex-3-5-1-2',
              title: '🎭 Rollenspiel: Interessenkonflikt',
              content: '**Situation:** Sie sind Anwalt und werden angefragt:\n\n**Montag:** Frau A möchte sich scheiden lassen\n**Dienstag:** Herr A (ihr Ehemann) ruft an, will Sie auch beauftragen\n\n**Was tun Sie?**\n\n**Lösung:**\n1. ❌ Herrn A sofort ablehnen\n2. 📋 Interessenkonflikt dokumentieren\n3. 🤐 Keine Informationen preisgeben\n4. 👥 Kollegen empfehlen\n\n**Regel:** Niemals beide Seiten eines Konflikts vertreten!\n\n**Selbst wenn:** Beide einverstanden wären → trotzdem verboten!',
              explanation: 'Interessenkonflikte gefährden die Unabhängigkeit des Anwalts.'
            }
          ]
        },
        {
          id: 'section-3-5-2',
          title: 'Anwaltliches Berufsrecht',
          content: `Das anwaltliche Berufsrecht regelt Rechte und Pflichten von Rechtsanwälten.

**🎯 Lernziel-Check:**
Nach diesem Abschnitt können Sie:
- Die wichtigsten Berufspflichten nennen
- BRAO und BORA anwenden
- Verstöße und Sanktionen einordnen

**📚 Die Rechtsgrundlagen:**

| Regelwerk | Inhalt | Charakter |
|-----------|--------|----------|
| **BRAO** | Bundesrechtsanwaltsordnung | Gesetz |
| **BORA** | Berufsordnung | Satzung |
| **RVG** | Vergütungsrecht | Gesetz |
| **FAO** | Fachanwaltsordnung | Satzung |

**Die 10 wichtigsten Berufspflichten:**

**1. Verschwiegenheitspflicht (§ 43a Abs. 2 BRAO)**
\`\`\`
Alles, was der Anwalt erfährt
            ↓
     STRENG VERTRAULICH
            ↓
    Auch nach Mandatsende
\`\`\`

**2. Unabhängigkeit (§ 43a Abs. 1 BRAO)**
- Keine Weisungsgebundenheit
- Keine wirtschaftliche Abhängigkeit
- Freie Advokatur

**3. Sachlichkeitsgebot (§ 43a Abs. 3 BRAO)**
- Keine Beleidigungen
- Sachliche Argumentation
- Respekt vor Gericht

**4. Verbot der Vertretung widerstreitender Interessen**
- § 43a Abs. 4 BRAO
- Absolute Grenze
- Auch bei Einverständnis verboten

**5. Fortbildungspflicht (§ 43a Abs. 6 BRAO)**
- 15 Stunden/Jahr für Fachanwälte
- Aktuelle Rechtskenntnisse
- Dokumentationspflicht

**6. Berufshaftpflichtversicherung (§ 51 BRAO)**
- Mindestdeckung: 250.000 €
- Pflichtversicherung
- Schutz der Mandanten

**7. Handaktenführung**
- 5 Jahre Aufbewahrung
- Dokumentation aller Vorgänge
- Beweissicherung

**8. Treuhandpflichten**
- Fremdgelder auf Anderkonto
- Keine Vermischung
- Jährliche Prüfung

**9. Werbebeschränkungen**
- Sachliche Information erlaubt
- Keine Mandantenfang
- Keine Erfolgsversprechen

**10. Kanzleipflicht**
- Erreichbarkeit sicherstellen
- Ordnungsgemäße Büroführung
- Datenschutz gewährleisten

**🚨 Verstöße und Sanktionen:**

**Anwaltsgerichtliche Maßnahmen:**
1. **Warnung** (mildeste Form)
2. **Verweis** (förmliche Rüge)
3. **Geldbuße** (bis 25.000 €)
4. **Berufsverbot** (bis 5 Jahre)
5. **Ausschließung** (schwerste Sanktion)

**Strafrecht:**
- § 203 StGB: Verletzung von Privatgeheimnissen
- § 356 StGB: Parteiverrat
- § 266 StGB: Untreue (bei Fremdgeldern)

**💡 Praxistipp: Die 4-Augen-Regel**
Bei Unsicherheiten:
1. Kollegen fragen
2. Kammer kontaktieren
3. Haftpflichtversicherer informieren
4. Im Zweifel: ablehnen!`,
          examples: [
            {
              id: 'ex-3-5-2-1',
              title: '📋 Checkliste: Mandatsannahme',
              content: '**Vor jeder Mandatsannahme prüfen:**\n\n☐ **Identität des Mandanten**\n   - Personalausweis kopieren\n   - Bei Firmen: Handelsregisterauszug\n   - Geldwäscheprävention!\n\n☐ **Interessenkonflikt**\n   - Konfliktdatenbank checken\n   - Gegenseite bekannt?\n   - Frühere Mandate prüfen\n\n☐ **Kompetenz**\n   - Rechtsgebiet beherrscht?\n   - Zeitliche Kapazität?\n   - Ggf. Spezialist hinzuziehen\n\n☐ **Vergütung**\n   - Vergütungsvereinbarung\n   - Vorschuss vereinbaren?\n   - PKH/Beratungshilfe?\n\n☐ **Vollmacht**\n   - Schriftlich erteilen lassen\n   - Umfang definieren\n   - Original aufbewahren',
              explanation: 'Sorgfältige Mandatsannahme verhindert spätere Probleme.'
            },
            {
              id: 'ex-3-5-2-2',
              title: '⚠️ Fallbeispiel: Werberecht',
              content: '**Welche Werbung ist erlaubt?**\n\n✅ **Erlaubt:**\n- "Rechtsanwalt für Verkehrsrecht"\n- "20 Jahre Erfahrung im Familienrecht"\n- "Fachanwalt für Strafrecht"\n- "Kostenlose Erstberatung"\n\n❌ **Verboten:**\n- "Der beste Anwalt der Stadt"\n- "100% Erfolgsgarantie"\n- "Billiger als alle anderen"\n- Mandantenliste veröffentlichen\n\n⚠️ **Grauzone:**\n- "Führender Anwalt" (wenn nachweisbar)\n- Erfolgsquoten (wenn objektiv richtig)\n- Referenzen (nur mit Einwilligung)\n\n**Faustregel:** Sachlich, wahr, nicht irreführend!',
              explanation: 'Werbung muss dem Sachlichkeitsgebot entsprechen.'
            }
          ]
        },
        {
          id: 'section-3-5-3',
          title: '🎯 Zusammenfassung und Praxistransfer',
          content: `**Die wichtigsten Erkenntnisse im Überblick:**

**🔑 Die 5 Kernpflichten jedes Anwalts:**
1. **Verschwiegenheit** - Das höchste Gut
2. **Unabhängigkeit** - Nur dem Mandanten verpflichtet
3. **Integrität** - Ehrlich und aufrichtig
4. **Kompetenz** - Fortbildung und Sorgfalt
5. **Loyalität** - Mandanteninteressen wahren

**📊 Entscheidungsmatrix bei ethischen Konflikten:**

\`\`\`
                 Legal?
                Ja    Nein
         Ja  |  ✅  |  ⚠️  |
Ethisch?     +------+------+
         Nein|  ⚠️  |  ❌  |
\`\`\`

⚠️ = Sorgfältig abwägen
❌ = Klar ablehnen
✅ = Grundsätzlich möglich

**🔗 Verbindungen zu anderen Rechtsgebieten:**
- **Strafrecht:** § 203, § 356 StGB
- **Zivilrecht:** Anwaltshaftung (§ 280 BGB)
- **Öffentliches Recht:** Zulassung, Aufsicht

**💼 Praxistipps für den Berufsstart:**

1. **Netzwerk aufbauen**
   - Anwaltverein beitreten
   - Mentoren suchen
   - Fortbildungen besuchen

2. **Risikomanagement**
   - Ausreichende Versicherung
   - Dokumentation
   - Fristenkontrolle

3. **Work-Life-Balance**
   - Grenzen setzen
   - Delegation lernen
   - Gesundheit priorisieren

**📚 Weiterführende Schritte:**
- BRAO/BORA vollständig lesen
- Kammerveranstaltungen besuchen
- Ethik-Fortbildungen wahrnehmen
- Fallsammlungen studieren

**Abschlussgedanke:**
"Ein guter Jurist kennt das Gesetz. Ein exzellenter Jurist versteht auch die Ethik dahinter."`,
          examples: [
            {
              id: 'ex-3-5-3-1',
              title: '🎮 Selbsttest: Berufsrecht-Quiz',
              content: '**Testen Sie Ihr Wissen:**\n\n**1. Verschwiegenheitspflicht gilt:**\na) Nur während des Mandats ❌\nb) Auch nach Mandatsende ✅\nc) Nicht gegenüber Familie ❌\n\n**2. Mindestversicherung beträgt:**\na) 100.000 € ❌\nb) 250.000 € ✅\nc) 500.000 € ❌\n\n**3. Handakten aufbewahren:**\na) 3 Jahre ❌\nb) 5 Jahre ✅\nc) 10 Jahre ❌\n\n**4. Fortbildung Fachanwalt:**\na) 10 Std./Jahr ❌\nb) 15 Std./Jahr ✅\nc) 20 Std./Jahr ❌\n\n**5. Interessenkonflikt:**\na) Mit Einverständnis OK ❌\nb) Immer verboten ✅\nc) Nur bei Eheleuten OK ❌\n\n**Auswertung:**\n5 richtig = Experte!\n3-4 richtig = Solide Grundlagen\n<3 richtig = Nochmal wiederholen',
              explanation: 'Regelmäßige Selbsttests festigen das Wissen.'
            }
          ]
        }
      ],
      resources: [
        {
          id: 'res-3-5-1',
          title: 'BRAK - Bundesrechtsanwaltskammer',
          type: 'website',
          url: 'https://www.brak.de',
          description: 'Offizielle Seite mit allen Berufsregelungen'
        },
        {
          id: 'res-3-5-2',
          title: 'Anwaltsethik Lehrbuch',
          type: 'book',
          url: '/literatur/anwaltsethik',
          description: 'Umfassendes Lehrbuch zu Berufsrecht und Ethik'
        },
        {
          id: 'res-3-5-3',
          title: 'Berufsrecht kompakt - Video',
          type: 'video',
          url: '/videos/berufsrecht-basics',
          duration: 30,
          description: 'Die wichtigsten Berufspflichten im Überblick'
        },
        {
          id: 'res-3-5-4',
          title: 'Interessenkonflikt-Checker',
          type: 'interactive',
          url: '/tools/konflikt-check',
          description: 'Interaktives Tool zur Konfliktprüfung'
        }
      ],
      glossary: [
        {
          term: 'BRAO',
          definition: 'Bundesrechtsanwaltsordnung - gesetzliche Grundlage des Anwaltsberufs',
          relatedTerms: ['BORA', 'Standesrecht']
        },
        {
          term: 'Verschwiegenheitspflicht',
          definition: 'Absolute Pflicht zur Geheimhaltung aller Mandatsangelegenheiten',
          relatedTerms: ['§ 203 StGB', 'Mandatsgeheimnis']
        },
        {
          term: 'Interessenkonflikt',
          definition: 'Situation, in der ein Anwalt widerstreitende Interessen vertreten würde',
          relatedTerms: ['Unabhängigkeit', 'Parteiverrat']
        },
        {
          term: 'Fachanwalt',
          definition: 'Anwalt mit nachgewiesener besonderer Expertise in einem Rechtsgebiet',
          relatedTerms: ['FAO', 'Fortbildungspflicht']
        }
      ]
    },
    exercises: [
      {
        id: 'ex-ke3-5-1',
        type: 'multipleChoice',
        difficulty: 'beginner',
        points: 20,
        title: 'Berufspflichten erkennen',
        description: 'Welche Aussage über die Verschwiegenheitspflicht ist korrekt?',
        content: {
          question: 'Die anwaltliche Verschwiegenheitspflicht...',
          options: [
            'endet mit dem Tod des Mandanten',
            'gilt nicht gegenüber anderen Anwälten',
            'besteht auch nach Beendigung des Mandats fort',
            'kann durch Mandanteneinwilligung vollständig aufgehoben werden'
          ]
        },
        solution: {
          correct: 2,
          explanation: 'Die Verschwiegenheitspflicht ist eine der zentralen Berufspflichten und überdauert das Mandat. Sie gilt grundsätzlich unbegrenzt.'
        },
        hints: [
          {
            id: 'hint-3-5-1',
            text: 'Denken Sie an das Vertrauensverhältnis zwischen Anwalt und Mandant',
            penaltyPoints: 3
          }
        ],
        feedback: {
          correct: 'Richtig! Die Verschwiegenheitspflicht ist zeitlich unbegrenzt.',
          incorrect: 'Die Verschwiegenheitspflicht ist eine der strengsten Berufspflichten.'
        }
      },
      {
        id: 'ex-ke3-5-2',
        type: 'caseAnalysis',
        difficulty: 'advanced',
        points: 45,
        title: 'Ethisches Dilemma lösen',
        description: 'Analysieren Sie das folgende Szenario',
        content: {
          question: 'Wie verhalten Sie sich in dieser Situation korrekt?',
          sachverhalt: 'Sie sind Strafverteidiger. Ihr Mandant hat Ihnen gestanden, den Banküberfall begangen zu haben, für den er angeklagt ist. Er möchte aber auf "nicht schuldig" plädieren und behaupten, zur Tatzeit woanders gewesen zu sein. Er bittet Sie, einen falschen Alibizeugen zu präsentieren.',
          context: 'Beachten Sie Ihre Berufspflichten und strafrechtlichen Grenzen.'
        },
        solution: {
          correct: {
            analyse: 'Konflikt zwischen Verteidigerpflicht und Wahrheitspflicht',
            pflichten: 'Verschwiegenheitspflicht vs. Verbot der Täuschung des Gerichts',
            loesungsweg: '1. Geständnis ist durch Verschwiegenheit geschützt, 2. Aktive Lüge/falscher Zeuge ist verboten, 3. Schweigerecht des Angeklagten nutzen',
            ergebnis: 'Verteidigung ohne aktive Lüge: Beweislast der Staatsanwaltschaft betonen, Zweifel säen, aber keine falschen Tatsachen behaupten'
          },
          explanation: 'Der Verteidiger darf das Geständnis nicht offenbaren, aber auch nicht aktiv das Gericht täuschen. Die Lösung liegt in einer Verteidigung, die die Beweislast nutzt.',
          commonMistakes: [
            'Mandant zur Selbstanzeige raten',
            'Falschen Zeugen präsentieren',
            'Mandat niederlegen'
          ]
        },
        hints: [
          {
            id: 'hint-3-5-2',
            text: 'Unterscheiden Sie zwischen Schweigen und aktiver Täuschung',
            penaltyPoints: 5
          },
          {
            id: 'hint-3-5-3',
            text: 'Die Beweislast liegt bei der Staatsanwaltschaft',
            penaltyPoints: 7
          }
        ],
        feedback: {
          correct: 'Exzellent! Sie haben die Balance zwischen den Pflichten gefunden.',
          incorrect: 'Bedenken Sie beide Aspekte: Verschwiegenheit UND Redlichkeit.',
          partial: 'Guter Ansatz, aber prüfen Sie alle Handlungsoptionen.'
        }
      },
      {
        id: 'ex-ke3-5-3',
        type: 'dragDrop',
        difficulty: 'intermediate',
        points: 30,
        title: 'Sanktionen zuordnen',
        description: 'Ordnen Sie die Verstöße den möglichen Sanktionen zu',
        content: {
          question: 'Welche Sanktion droht bei welchem Verstoß?',
          items: [
            { id: 'item-1', content: 'Versehentlich Frist versäumt', correctCategory: 'Warnung' },
            { id: 'item-2', content: 'Mandantengelder veruntreut', correctCategory: 'Ausschließung' },
            { id: 'item-3', content: 'Unsachliche Äußerung vor Gericht', correctCategory: 'Verweis' },
            { id: 'item-4', content: 'Keine Fortbildung als Fachanwalt', correctCategory: 'Geldbuße' },
            { id: 'item-5', content: 'Parteiverrat begangen', correctCategory: 'Berufsverbot' },
            { id: 'item-6', content: 'Werbeverstoß', correctCategory: 'Warnung' }
          ],
          categories: ['Warnung', 'Verweis', 'Geldbuße', 'Berufsverbot', 'Ausschließung']
        },
        solution: {
          correct: {
            'Warnung': ['Versehentlich Frist versäumt', 'Werbeverstoß'],
            'Verweis': ['Unsachliche Äußerung vor Gericht'],
            'Geldbuße': ['Keine Fortbildung als Fachanwalt'],
            'Berufsverbot': ['Parteiverrat begangen'],
            'Ausschließung': ['Mandantengelder veruntreut']
          },
          explanation: 'Die Schwere der Sanktion richtet sich nach der Schwere des Verstoßes.'
        },
        hints: [
          {
            id: 'hint-3-5-4',
            text: 'Je schwerer der Verstoß, desto härter die Sanktion',
            penaltyPoints: 4
          }
        ],
        feedback: {
          correct: 'Sehr gut! Sie kennen das Sanktionssystem.',
          incorrect: 'Überlegen Sie, welche Verstöße besonders schwer wiegen.',
          partial: ''
        }
      }
    ],
    estimatedMinutes: 600, // 10 Stunden
    requiredMastery: 80
  },
  
  // Zusammenfassung Kurseinheit 3
  {
    id: 'ke3-zusammenfassung',
    moduleId: 'propaedeutikum',
    order: 16,
    title: '📚 Zusammenfassung: Basiskurs Rechtswissenschaft',
    objectives: [
      {
        id: 'obj-ke3-zusammen-1',
        description: 'Überblick über alle Rechtsgebiete behalten',
        bloomLevel: 'understand'
      },
      {
        id: 'obj-ke3-zusammen-2',
        description: 'Zusammenhänge zwischen den Rechtsgebieten erkennen',
        bloomLevel: 'analyze'
      },
      {
        id: 'obj-ke3-zusammen-3',
        description: 'Prüfungswissen strukturiert abrufen',
        bloomLevel: 'remember'
      }
    ],
    content: {
      id: 'content-ke3-zusammen',
      type: 'mixed',
      sections: [
        {
          id: 'section-ke3-zusammen-1',
          title: '🎯 Das deutsche Rechtssystem im Überblick',
          content: `**Sie haben die Grundstruktur des deutschen Rechts kennengelernt:**

## ⚖️ Die drei Säulen des Rechts

### 1. Zivilrecht (Privatrecht)
**Prinzip:** Gleichordnung (Koordination)
**Kern:** Privatautonomie - Freiheit der Rechtsgestaltung
**Hauptgesetze:** BGB, HGB, ArbG
**Typisch:** Verträge, Eigentum, Familie, Erbschaft
**Merksatz:** "Privat regelt privat"

### 2. Öffentliches Recht
**Prinzip:** Über-/Unterordnung (Subordination)
**Kern:** Gesetzmäßigkeit - Staat nur mit Rechtsgrundlage
**Hauptgesetze:** GG, VwVfG, VwGO, SGB
**Typisch:** Verwaltungsakte, Steuern, Sozialleistungen
**Merksatz:** "Staat braucht Erlaubnis"

### 3. Strafrecht
**Prinzip:** Staatliches Gewaltmonopol
**Kern:** Ultima Ratio - nur bei schweren Rechtsverletzungen
**Hauptgesetze:** StGB, StPO, JGG
**Typisch:** Verbrechen, Vergehen, Strafen
**Merksatz:** "Keine Strafe ohne Gesetz"

💡 **Eselsbrücke ZÖS:**
- **Z**ivilrecht = Zwischen Bürgern
- **Ö**ffentliches Recht = Über dem Bürger (Staat)
- **S**trafrecht = Sanktion für Unrecht`
        },
        {
          id: 'section-ke3-zusammen-2',
          title: '🏛️ Der Rechtsstaat und seine Prinzipien',
          content: `**Die tragenden Säulen unseres Rechtsstaats:**

## 1. Gewaltenteilung (Art. 20 Abs. 2 GG)
\`\`\`
Legislative     Exekutive      Judikative
(Parlament) → (Regierung) → (Gerichte)
    ↓              ↓             ↓
Gesetze       Vollzug      Rechtsprechung
\`\`\`

## 2. Gesetzmäßigkeit der Verwaltung
- **Vorrang des Gesetzes:** Kein Handeln gegen Gesetze
- **Vorbehalt des Gesetzes:** Eingriffe nur mit Gesetz
- **Bestimmtheit:** Klare, vorhersehbare Regeln

## 3. Grundrechtsbindung (Art. 1 Abs. 3 GG)
- Alle Staatsgewalt ist an Grundrechte gebunden
- Unmittelbar geltendes Recht
- Verfassungsbeschwerde als Rechtsschutz

## 4. Rechtsschutzgarantie (Art. 19 Abs. 4 GG)
- Zugang zu Gerichten
- Effektiver Rechtsschutz
- Unabhängige Richter

**Merksatz GGBR:**
- **G**ewaltenteilung
- **G**esetzmäßigkeit
- **B**indung an Grundrechte
- **R**echtsschutz`
        },
        {
          id: 'section-ke3-zusammen-3',
          title: '🇪🇺 Europäisches Recht im Mehrebenensystem',
          content: `**Das Zusammenspiel von EU-Recht und nationalem Recht:**

## Rechtsquellen der EU

### Primärrecht (Verfassungsebene)
- EU-Vertrag (EUV)
- Vertrag über die Arbeitsweise der EU (AEUV)
- Grundrechtecharta

### Sekundärrecht (Gesetzesebene)
1. **Verordnung:** Unmittelbar in allen Mitgliedstaaten gültig
2. **Richtlinie:** Ziel vorgegeben, Umsetzung national
3. **Beschluss:** Einzelfallregelung
4. **Empfehlung:** Unverbindlich

## Wichtige Prinzipien

### 🔺 Anwendungsvorrang
EU-Recht geht nationalem Recht vor (auch Verfassung!)

### 🎯 Unmittelbare Wirkung
- Verordnungen: Immer
- Richtlinien: Nach Ablauf der Umsetzungsfrist
- Primärrecht: Wenn hinreichend bestimmt

### 🤝 Loyalitätsprinzip (Art. 4 Abs. 3 EUV)
Mitgliedstaaten müssen EU-Recht umsetzen und beachten

**Merkformel VAUL:**
- **V**orrang des EU-Rechts
- **A**nwendung unmittelbar
- **U**msetzungspflicht bei Richtlinien
- **L**oyalität der Mitgliedstaaten`
        },
        {
          id: 'section-ke3-zusammen-4',
          title: '📋 Verwaltungsrecht - Der Staat als Akteur',
          content: `**Kernkonzepte des Verwaltungsrechts:**

## Der Verwaltungsakt (§ 35 VwVfG)

### Definition (5 Merkmale):
1. **Hoheitliche Maßnahme:** Staat handelt einseitig
2. **Behörde:** Zuständige Verwaltungsstelle
3. **Einzelfall:** Konkrete Situation/Person
4. **Öffentliches Recht:** Nicht privatrechtlich
5. **Außenwirkung:** Rechtsfolgen für Bürger

### Prüfungsschema:
\`\`\`
Rechtmäßigkeit des VA
├── Formell
│   ├── Zuständigkeit
│   ├── Verfahren
│   └── Form
└── Materiell
    ├── Ermächtigungsgrundlage
    ├── Tatbestand
    └── Rechtsfolge (+ Ermessen)
\`\`\`

### BEHÖR-Formel für Verwaltungsverfahren:
- **B**eteiligung der Betroffenen
- **E**rmittlung des Sachverhalts
- **H**ören vor belastenden Entscheidungen
- **Ö**ffentlichkeit (Ausnahme)
- **R**echtsmittelbelehrung

## Rechtsschutz im Verwaltungsrecht
1. **Widerspruch:** Behörde überprüft selbst
2. **Anfechtungsklage:** Aufhebung des VA
3. **Verpflichtungsklage:** Erlass eines VA
4. **Feststellungsklage:** Rechtsverhältnis klären`
        },
        {
          id: 'section-ke3-zusammen-5',
          title: '⚖️ Berufsethik und Standesrecht',
          content: `**Die ethischen Grundlagen juristischer Berufe:**

## Kernpflichten des Rechtsanwalts

### 1. Verschwiegenheitspflicht (§ 43a Abs. 2 BRAO)
- **Absolut:** Alles aus dem Mandatsverhältnis
- **Zeitlich unbegrenzt:** Auch nach Mandatsende
- **Strafbewehrt:** § 203 StGB
- **Zeugnisverweigerungsrecht:** § 53 StPO

### 2. Interessenkollision (§ 43a Abs. 4 BRAO)
- Keine Vertretung widerstreitender Interessen
- Prüfung bei jedem neuen Mandat
- Auch innerhalb der Kanzlei beachten

### 3. Unabhängigkeit (§ 1 BRAO)
- Organ der Rechtspflege
- Keine unsachlichen Einflüsse
- Wirtschaftliche Unabhängigkeit wahren

### 4. Sachlichkeit (§ 43a Abs. 3 BRAO)
- Keine unsachlichen Angriffe
- Respekt vor Gericht
- Kollegialität wahren

## Sanktionssystem
1. **Rüge:** Bei leichten Verstößen
2. **Geldbuße:** Bis 25.000 €
3. **Berufsverbot:** Zeitweise (bis 5 Jahre)
4. **Ausschluss:** Bei schwersten Verstößen

**VISU-Merkhilfe:**
- **V**erschwiegenheit wahren
- **I**nteressenkonflikte vermeiden
- **S**achlich bleiben
- **U**nabhängig handeln`
        },
        {
          id: 'section-ke3-zusammen-6',
          title: '📊 Lernkarten - Die wichtigsten Konzepte',
          content: `**10 Kernkonzepte zum Wiederholen:**

**Karte 1:** Privatautonomie
→ Freiheit zur Gestaltung eigener Rechtsverhältnisse

**Karte 2:** Über-/Unterordnung
→ Hierarchisches Verhältnis Staat-Bürger

**Karte 3:** Gewaltenteilung
→ Legislative, Exekutive, Judikative getrennt

**Karte 4:** Vorbehalt des Gesetzes
→ Eingriffe nur mit gesetzlicher Grundlage

**Karte 5:** Verhältnismäßigkeit
→ Geeignet, erforderlich, angemessen

**Karte 6:** Anwendungsvorrang
→ EU-Recht vor nationalem Recht

**Karte 7:** Verwaltungsakt
→ Hoheitliche Einzelfallregelung mit Außenwirkung

**Karte 8:** Widerspruchsverfahren
→ Verwaltungsinterne Überprüfung vor Klage

**Karte 9:** Verschwiegenheitspflicht
→ Absolutes Berufsgeheimnis des Anwalts

**Karte 10:** Organ der Rechtspflege
→ Anwalt zwischen Mandant und Justiz`
        },
        {
          id: 'section-ke3-zusammen-7',
          title: '✅ Checkliste zur Prüfungsvorbereitung',
          content: `**Können Sie diese Fragen sicher beantworten?**

## 📝 Rechtsgebiete
☐ Woran erkenne ich, ob ein Fall ins Zivilrecht gehört?
☐ Was sind typische Merkmale des öffentlichen Rechts?
☐ Wann greift das Strafrecht ein?

## 🏛️ Rechtsstaat
☐ Welche Bedeutung hat die Gewaltenteilung?
☐ Was besagt der Vorbehalt des Gesetzes?
☐ Wie sind Grundrechte durchsetzbar?

## 🇪🇺 EU-Recht
☐ Was ist der Unterschied zwischen Verordnung und Richtlinie?
☐ Wann gilt Anwendungsvorrang?
☐ Was bedeutet unmittelbare Wirkung?

## 📋 Verwaltungsrecht
☐ Wann liegt ein Verwaltungsakt vor?
☐ Wie prüfe ich die Rechtmäßigkeit?
☐ Welche Klagemöglichkeiten gibt es?

## ⚖️ Berufsrecht
☐ Was umfasst die Verschwiegenheitspflicht?
☐ Wann liegt eine Interessenkollision vor?
☐ Welche Sanktionen drohen bei Verstößen?

**Tipp:** Üben Sie mit den Fällen aus den Lerneinheiten!`
        },
        {
          id: 'section-ke3-zusammen-8',
          title: '🚀 Ausblick und Verknüpfungen',
          content: `**So nutzen Sie das Gelernte:**

## In der weiteren Ausbildung
- **Zivilrecht:** BGB AT, Schuldrecht, Sachenrecht vertiefen
- **Öffentliches Recht:** Staatsrecht, Verwaltungsrecht AT/BT
- **Strafrecht:** StGB AT, wichtige Delikte des BT
- **Europarecht:** Binnenmarkt, Grundfreiheiten
- **Prozessrecht:** ZPO, VwGO, StPO

## In der Praxis
1. **Falllösung:** Rechtsgebiet erkennen → richtige Methode wählen
2. **Mandatsberatung:** Alle Rechtsgebiete im Blick behalten
3. **Verfahren:** Prozessuale Besonderheiten beachten
4. **International:** EU-Recht-Bezüge prüfen

## Wichtige Querverbindungen
- Zivilrecht ↔ EU-Verbraucherschutz
- Öffentliches Recht ↔ Grundrechte
- Strafrecht ↔ Verfassungsrecht (nulla poena)
- Alle Gebiete ↔ Verfahrensrecht

💪 **Motivation:** 
Sie haben das Fundament gelegt! Mit diesem Überblick können Sie nun in die Vertiefung der einzelnen Rechtsgebiete einsteigen. Die Methodik aus KE1 und KE2 hilft Ihnen dabei, jeden Fall systematisch zu lösen.`
        }
      ],
      resources: [
        {
          id: 'res-ke3-zusammen-1',
          title: '🎥 Video: Das deutsche Rechtssystem in 20 Minuten',
          type: 'video',
          url: 'https://fernuni-hagen.de/videos/ke3-rechtssystem',
          description: 'Kompakter Überblick über alle Rechtsgebiete'
        },
        {
          id: 'res-ke3-zusammen-2',
          title: '📱 Rechtsgebiete-Quiz App',
          type: 'interactive',
          url: 'https://jurafit.de/rechtsgebiete-quiz',
          description: 'Trainieren Sie die Zuordnung von Fällen'
        },
        {
          id: 'res-ke3-zusammen-3',
          title: '📊 Mindmap Rechtssystem',
          type: 'website',
          url: 'https://fernuni-hagen.de/rewi/mindmap-rechtssystem.pdf',
          description: 'Visuelle Darstellung aller Zusammenhänge'
        },
        {
          id: 'res-ke3-zusammen-4',
          title: '📝 Probeklausur Basiskurs',
          type: 'website',
          url: 'https://fernuni-hagen.de/rewi/probeklausur-ke3.pdf',
          description: 'Testen Sie Ihr Wissen mit einer Musterklausur'
        }
      ],
      glossary: [
        {
          term: 'Rechtssystem',
          definition: 'Gesamtheit aller Rechtsnormen und ihrer Systematik',
          relatedTerms: ['Rechtsgebiete', 'Normenhierarchie', 'Rechtsquellen']
        }
      ]
    },
    exercises: [
      {
        id: 'ex-ke3-zusammen-1',
        type: 'multipleChoice',
        difficulty: 'intermediate',
        points: 30,
        title: 'Rechtsgebiet erkennen',
        description: 'Ordnen Sie den Fall dem richtigen Rechtsgebiet zu',
        content: {
          question: 'Herr M erhält vom Finanzamt einen Steuerbescheid über 5.000 € Nachzahlung. Er möchte dagegen vorgehen. Welches Rechtsgebiet ist betroffen?',
          options: [
            'Zivilrecht - es geht um eine Geldforderung',
            'Öffentliches Recht - Staat handelt hoheitlich',
            'Strafrecht - bei Nichtzahlung droht Strafe',
            'Europarecht - Steuerharmonisierung in der EU'
          ]
        },
        solution: {
          correct: [1],
          explanation: 'Das Finanzamt handelt hoheitlich durch Verwaltungsakt. Dies ist klassisches öffentliches Recht (Steuerrecht als Teil des besonderen Verwaltungsrechts).'
        },
        hints: [],
        feedback: {
          correct: 'Richtig! Sie erkennen hoheitliches Handeln.',
          incorrect: 'Denken Sie an das Über-/Unterordnungsverhältnis.'
        }
      },
      {
        id: 'ex-ke3-zusammen-2',
        type: 'multipleChoice',
        difficulty: 'beginner',
        points: 20,
        title: 'EU-Recht Grundlagen',
        description: 'Welche Aussagen zum EU-Recht sind korrekt?',
        content: {
          question: 'Wählen Sie alle korrekten Aussagen aus:',
          options: [
            'Eine EU-Verordnung muss erst in nationales Recht umgesetzt werden',
            'EU-Recht hat Vorrang vor deutschem Verfassungsrecht',
            'Richtlinien geben nur das Ziel vor, nicht die Mittel',
            'Das Subsidiaritätsprinzip begrenzt EU-Kompetenzen'
          ]
        },
        solution: {
          correct: [1, 2, 3],
          explanation: 'Verordnungen gelten unmittelbar (Aussage 1 ist falsch). EU-Recht hat Anwendungsvorrang, Richtlinien geben nur Ziele vor, und das Subsidiaritätsprinzip begrenzt EU-Kompetenzen.'
        },
        hints: [],
        feedback: {
          correct: 'Sehr gut! Sie verstehen die EU-Rechtsgrundlagen.',
          incorrect: 'Wiederholen Sie die Unterschiede der EU-Rechtsakte.'
        }
      }
    ],
    estimatedMinutes: 90, // 1,5 Stunden für Zusammenfassung
    requiredMastery: 75
  }
];

// Lernzusammenfassung für Kurseinheit 3
export const kurseinheit3Summary = {
  id: 'ke3-summary',
  title: 'Zusammenfassung Kurseinheit 3',
  keyPoints: [
    'Die drei Rechtsgebiete (Zivilrecht, Öffentliches Recht, Strafrecht) unterscheiden sich in Struktur und Prinzipien',
    'Der Rechtsstaat basiert auf Gewaltenteilung, Grundrechtsbindung und Rechtsschutz',
    'Grundrechte schützen den Einzelnen vor staatlicher Willkür',
    'EU-Recht hat Anwendungsvorrang vor nationalem Recht',
    'Verwaltungsakte sind die zentrale Handlungsform der Verwaltung',
    'Anwältliche Berufsethik sichert Vertrauen in die Rechtspflege'
  ],
  learningObjectives: [
    'Rechtsfälle den korrekten Rechtsgebieten zuordnen',
    'Rechtsstaatliche Prinzipien in konkreten Situationen anwenden',
    'Grundrechtsprüfungen durchführen',
    'EU-Recht und nationales Recht in Beziehung setzen',
    'Verwaltungsakte erkennen und prüfen',
    'Ethische Grundsätze im juristischen Handeln beachten'
  ],
  examRelevance: [
    'Abgrenzung der Rechtsgebiete ist Grundlage jeder Fallbearbeitung',
    'Verfassungsrechtliche Kenntnisse sind in allen Rechtsgebieten relevant',
    'EU-Recht durchdringt zunehmend alle Rechtsbereiche',
    'Verwaltungsrecht ist Pflichtfach im Staatsexamen',
    'Berufsrecht ist Teil der mündlichen Prüfung'
  ],
  connections: [
    'Zu KE1: Fallbearbeitung erfordert Zuordnung zu Rechtsgebieten',
    'Zu KE2: Auslegungsmethoden gelten rechtsgebietsübergreifend',
    'Zu ZM1: Digitalisierung betrifft alle Rechtsgebiete',
    'Zu ZM2: Wissenschaftliches Arbeiten in allen Bereichen'
  ]
};

// Export der Gesamtstruktur für Kurseinheit 3
export const kurseinheit3 = {
  id: 'ke3',
  title: 'Kurseinheit 3: Basiskurs Rechtswissenschaft',
  credits: 2, // Erhöht von 1 auf 2 ECTS
  estimatedHours: 55, // Erhöht von 30 auf 55 Stunden
  units: kurseinheit3Units,
  objectives: [
    'Die drei großen Rechtsgebiete unterscheiden und abgrenzen',
    'Grundlagen des Rechtsstaatsprinzips verstehen',
    'Grundrechte als Verfassungsrecht einordnen',
    'EU-Recht und seine Bedeutung erfassen',
    'Verwaltungsverfahren und Verwaltungsakt beherrschen',
    'Berufsethik und Standesrecht kennen'
  ],
  assessmentCriteria: [
    'Sichere Zuordnung zu Rechtsgebieten',
    'Verständnis rechtsstaatlicher Prinzipien',
    'Grundlegende Grundrechtskenntnisse',
    'EU-Rechtskenntnisse',
    'Verwaltungsrechtliche Grundlagen',
    'Ethisches Bewusstsein'
  ],
  summary: kurseinheit3Summary
};