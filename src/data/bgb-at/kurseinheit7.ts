import { LearningUnit, Exercise } from '../../types/learning';

// KURSEINHEIT 7: Die Stellvertretung
// Basierend auf FernUni Hagen PDF 55101-07-S#1-2001627.pdf
// Autoren: Prof. Dr. Sebastian Kubis, Prof. Dr. Ulrich Eisenhardt
// 50 Stunden / 1.5 ECTS

export const kurseinheit7BGBUnits: LearningUnit[] = [
  // 7.1 Grundlagen der Stellvertretung (15 Stunden)
  {
    id: 'bgb-ke7-1-grundlagen-stellvertretung',
    moduleId: 'bgb-at',
    order: 19,
    title: '7.1 Grundlagen der Stellvertretung',
    objectives: [
      {
        id: 'obj-bgb-7-1-1',
        description: 'Das Prinzip der Stellvertretung und ihre rechtliche Bedeutung verstehen',
        bloomLevel: 'understand'
      },
      {
        id: 'obj-bgb-7-1-2',
        description: 'Arten der Stellvertretung unterscheiden können',
        bloomLevel: 'analyze'
      },
      {
        id: 'obj-bgb-7-1-3',
        description: 'Das Offenkundigkeitsprinzip anwenden',
        bloomLevel: 'apply'
      }
    ],
    content: {
      id: 'content-bgb-7-1',
      type: 'mixed',
      sections: [
        {
          id: 'section-bgb-7-1-1',
          title: '🎯 Überblick und Abgrenzung',
          content: `Die Stellvertretung ermöglicht es, durch eigenes Handeln unmittelbar für einen anderen Rechte zu erwerben und Pflichten zu begründen.

**📋 Begriff der Stellvertretung:**

**Definition:**
Bei der Stellvertretung handelt der Vertreter im Namen des Vertretenen mit der Folge, dass die Rechtswirkungen unmittelbar in der Person des Vertretenen eintreten.

**Voraussetzungen:**
1. **Eigene Willenserklärung** des Vertreters
2. **Im fremden Namen** (Offenkundigkeitsprinzip)
3. **Mit Vertretungsmacht**

**🔄 Abgrenzungen:**

**Bote (§ 120 BGB):**
- Überbringt nur fremde Willenserklärung
- Kein eigener Entscheidungsspielraum
- Empfangsbote / Erklärungsbote

**Stellvertreter:**
- Gibt eigene Willenserklärung ab
- Hat Entscheidungsspielraum
- Handelt im fremden Namen

**📊 Arten der Stellvertretung:**

| Art | Grundlage | Beispiele |
|-----|-----------|-----------|
| **Gesetzliche** | Kraft Gesetzes | Eltern, Betreuer, Vormund |
| **Organschaftliche** | Körperschaftsrecht | GmbH-Geschäftsführer, Vorstand |
| **Rechtsgeschäftliche** | Vollmacht | Prokura, Handlungsvollmacht |

**💡 Praktische Bedeutung:**
- Arbeitsteilung in der Wirtschaft
- Schutz Geschäftsunfähiger
- Rechtsverkehr ohne persönliche Anwesenheit`,
          examples: [
            {
              id: 'ex-bgb-7-1-1',
              title: '📝 Beispiel: Stellvertreter vs. Bote',
              content: `**Fall 1 - Stellvertreter:**
V beauftragt S: "Kaufen Sie für mich ein geeignetes Auto bis 20.000 €."
S wählt einen BMW für 18.000 € aus und kauft im Namen des V.

**Fall 2 - Bote:**
V sagt zu B: "Gehen Sie zu Händler H und richten Sie aus, dass ich sein Angebot über den Golf annehme."

**Unterschied:**
- S trifft eigene Kaufentscheidung → Stellvertreter
- B überbringt nur Erklärung des V → Bote`,
              explanation: 'Der Entscheidungsspielraum macht den Unterschied aus.'
            }
          ]
        },
        {
          id: 'section-bgb-7-1-2',
          title: '🔍 Unmittelbare und mittelbare Stellvertretung',
          content: `Die Unterscheidung hat erhebliche praktische Auswirkungen auf die Rechtsbeziehungen.

**📋 Unmittelbare Stellvertretung (§§ 164 ff. BGB):**

**Kennzeichen:**
- Handeln im fremden Namen
- Offenlegung der Vertretung
- Direktwirkung beim Vertretenen

**Rechtsfolgen:**
- Vertretener wird berechtigt/verpflichtet
- Vertreter bleibt außen vor
- Direktbeziehung Vertretener ↔ Dritter

**📦 Mittelbare Stellvertretung:**

**Kennzeichen:**
- Handeln im eigenen Namen
- Für fremde Rechnung
- Keine Offenlegung

**Beispiele:**
- Kommissionär (§ 383 HGB)
- Treuhänder
- Strohmann-Geschäfte

**Rechtsfolgen:**
- Vertreter wird selbst Vertragspartner
- Internes Rechtsverhältnis zum Vertretenen
- Herausgabepflicht der Vorteile

**⚖️ Praktische Konsequenzen:**

**Bei Insolvenz:**
- Unmittelbar: Dritter kann vom Vertretenen fordern
- Mittelbar: Nur Insolvenzforderung gegen Vertreter

**Bei Leistungsstörungen:**
- Unmittelbar: Direkter Durchgriff
- Mittelbar: Nur gegen Vertreter`,
          memoryAids: [
            {
              id: 'mem-bgb-7-1-1',
              title: '🧠 Merkhilfe Stellvertretung',
              content: `**U**nmittelbar = **U**nter fremdem Namen
**M**ittelbar = **M**ein Name, fremde Rechnung`
            }
          ]
        },
        {
          id: 'section-bgb-7-1-3',
          title: '📢 Das Offenkundigkeitsprinzip',
          content: `Für die unmittelbare Stellvertretung ist die Offenlegung essentiell.

**🎯 Regelfall (§ 164 I BGB):**

**Grundsatz:**
Der Vertreter muss im Namen des Vertretenen handeln.

**Ausreichend ist:**
- Ausdrückliche Nennung des Vertretenen
- Erkennbarkeit aus den Umständen
- "Für meinen Auftraggeber"
- Firmenstempel, Briefkopf

**Nicht erforderlich:**
- Wörtlich "im Namen von..."
- Nennung der Vertretungsmacht
- Vorlage der Vollmacht

**⚡ Sonderregelung (§ 164 II BGB):**

**Geschäft für den, den es angeht:**
- Wille zur Stellvertretung erkennbar
- Aber Vertretener nicht genannt
- Auslegung entscheidet

**Zweifelsregel:**
- Im Zweifel Eigengeschäft
- Vertreter selbst verpflichtet

**🚫 Ausnahmen vom Offenkundigkeitsprinzip:**

**Bargeschäfte des täglichen Lebens:**
- Brötchenkauf für Familie
- Tankstellengeschäfte
- Supermarkteinkäufe

**Geschäfte für Unternehmen:**
- Erkennbar aus Kontext
- Firmenwagen, Firmenkleidung
- Geschäftsräume

**Neutrale Geschäfte:**
- Inhaberpapiere
- Grundstückserwerb bei Zwangsversteigerung`,
          examples: [
            {
              id: 'ex-bgb-7-1-2',
              title: '💼 Beispiel: Offenkundigkeitsprinzip',
              content: `**Sachverhalt:**
Sekretärin S bestellt am Telefon:

**Variante 1:**
"Ich möchte für die Müller GmbH 100 Ordner bestellen."
→ Offenkundig im Namen der GmbH

**Variante 2:**
"Ich brauche 100 Ordner."
→ Unklar, im Zweifel Eigengeschäft

**Variante 3:**
"Schicken Sie 100 Ordner an die Müller GmbH, Rechnung dorthin."
→ Aus Umständen erkennbar: für GmbH`,
              explanation: 'Die Art der Kommunikation entscheidet über die Zurechnung.'
            }
          ],
          selfTest: {
            questions: [
              {
                id: 'q-bgb-7-1-1',
                question: 'Was ist der Hauptunterschied zwischen Stellvertreter und Bote?',
                correctAnswer: 'Der Stellvertreter gibt eine eigene Willenserklärung ab und hat Entscheidungsspielraum, der Bote überbringt nur eine fremde Erklärung.'
              },
              {
                id: 'q-bgb-7-1-2',
                question: 'Wann liegt ein "Geschäft für den, den es angeht" vor?',
                correctAnswer: 'Wenn erkennbar ist, dass für einen anderen gehandelt wird, aber der Vertretene nicht genannt wird (§ 164 II BGB).'
              }
            ]
          }
        }
      ],
      resources: [],
      glossary: [
        {
          term: 'Stellvertretung',
          definition: 'Handeln im Namen eines anderen mit unmittelbarer Wirkung für und gegen diesen'
        },
        {
          term: 'Offenkundigkeitsprinzip',
          definition: 'Erfordernis, dass die Stellvertretung für den Geschäftspartner erkennbar sein muss'
        },
        {
          term: 'Vertretungsmacht',
          definition: 'Befugnis, für einen anderen rechtsgeschäftlich zu handeln'
        }
      ]
    },
    requiredMastery: 85,
    estimatedMinutes: 900,
    exercises: []
  },

  // 7.2 Voraussetzungen wirksamer Stellvertretung (15 Stunden)
  {
    id: 'bgb-ke7-2-voraussetzungen',
    moduleId: 'bgb-at',
    order: 20,
    title: '7.2 Voraussetzungen wirksamer Stellvertretung',
    objectives: [
      {
        id: 'obj-bgb-7-2-1',
        description: 'Die Erteilung und Arten von Vollmachten verstehen',
        bloomLevel: 'understand'
      },
      {
        id: 'obj-bgb-7-2-2',
        description: 'Willensmängel bei der Stellvertretung beurteilen',
        bloomLevel: 'analyze'
      },
      {
        id: 'obj-bgb-7-2-3',
        description: 'Den Umfang von Vollmachten bestimmen können',
        bloomLevel: 'apply'
      }
    ],
    content: {
      id: 'content-bgb-7-2',
      type: 'mixed',
      sections: [
        {
          id: 'section-bgb-7-2-1',
          title: '📜 Die Erteilung der Vollmacht',
          content: `Die Vollmacht ist die durch Rechtsgeschäft erteilte Vertretungsmacht.

**📋 Rechtsnatur der Vollmacht:**

**Vollmacht als Willenserklärung:**
- Einseitiges Rechtsgeschäft
- Empfangsbedürftig oder nicht
- Widerruflich

**Erteilungsarten:**

**1. Innenvollmacht:**
- Erklärung gegenüber dem Vertreter
- Häufigster Fall
- Nicht empfangsbedürftig

**2. Außenvollmacht:**
- Erklärung gegenüber dem Dritten
- Kundmachung der Vertretungsmacht
- Empfangsbedürftig

**3. Öffentliche Vollmacht:**
- Bekanntmachung an unbestimmten Personenkreis
- Zeitungsanzeige, Aushang
- Registereintragung

**⚖️ Form der Vollmacht:**

**Grundsatz: Formfreiheit**
- Auch mündlich oder konkludent
- Unabhängig vom Grundgeschäft

**Ausnahmen:**
- Unwiderrufliche Vollmacht → Schriftform
- Verbraucherdarlehen → § 492 IV BGB
- Grundstücksgeschäfte → Streit

**📊 Abstraktionsprinzip:**

**Trennung:**
- Grundverhältnis (Auftrag, Arbeitsvertrag)
- Vollmacht (Außenverhältnis)

**Folgen:**
- Vollmacht besteht trotz nichtigem Auftrag
- Kündigung beseitigt nicht automatisch Vollmacht
- Separater Widerruf erforderlich`,
          examples: [
            {
              id: 'ex-bgb-7-2-1',
              title: '🏢 Beispiel: Vollmachtserteilung',
              content: `**Sachverhalt:**
Unternehmer U stellt Einkäufer E ein.

**Innenvollmacht:**
U zu E: "Sie dürfen Waren bis 10.000 € einkaufen."
→ Vollmacht wirksam erteilt

**Außenvollmacht:**
U an alle Lieferanten: "E ist bevollmächtigt, Waren bis 10.000 € zu bestellen."
→ Kundmachung an Dritte

**Abstraktheit:**
- Arbeitsvertrag mit E nichtig wegen Formfehler
- Vollmacht bleibt trotzdem bestehen!
- U muss separat widerrufen`,
              explanation: 'Die Abstraktheit schützt den Rechtsverkehr.'
            }
          ]
        },
        {
          id: 'section-bgb-7-2-2',
          title: '🎭 Willensmängel und Wissenszurechnung (§ 166)',
          content: `Bei der Stellvertretung stellt sich die Frage, auf wessen Willen und Wissen es ankommt.

**📋 Grundregel (§ 166 I BGB):**

**Maßgeblich ist der Vertreter:**
- Seine Willenserklärung
- Seine Kenntnis/Kennenmüssen
- Seine Willensmängel

**Beispiele:**
- Irrtum des Vertreters → Anfechtung möglich
- Arglistige Täuschung des Vertreters → Anfechtung
- Kenntnis des Vertreters von Mängeln → Zurechnung

**⚡ Ausnahme (§ 166 II BGB):**

**Bei bestimmten Weisungen:**
- Vertretener gibt genaue Anweisung
- Vertreter nur "verlängerter Arm"
- Dann kommt es auf Vertretenen an

**Voraussetzungen:**
- Detaillierte Weisung
- Kein Entscheidungsspielraum
- Vertreter wie Bote

**🔍 Problem: Wissensvertreter**

**Arbeitsteilung führt zu Wissenszersplitterung:**
- A-Abteilung weiß von Mangel
- B-Abteilung schließt Vertrag
- Zurechnung trotz fehlender Kenntnis?

**BGH-Rechtsprechung:**
- Wissensorganisationspflicht
- Informationsweitergabe sicherstellen
- Sonst Zurechnung wie bei Kenntnis

**📊 Prüfungsschema § 166:**

\`\`\`
1. Liegt Stellvertretung vor?
2. Allgemeine Vollmacht oder spezielle Weisung?
3. Bei allgemeiner Vollmacht → Vertreter maßgeblich
4. Bei spezieller Weisung → Vertretener maßgeblich
5. Wissensorganisation beachten
\`\`\``,
          memoryAids: [
            {
              id: 'mem-bgb-7-2-1',
              title: '🧠 Merkhilfe § 166',
              content: `**V**ollmacht allgemein → **V**ertreter zählt
**W**eisung speziell → Vertretener (**W**eisender) zählt`
            }
          ]
        },
        {
          id: 'section-bgb-7-2-3',
          title: '📏 Umfang der Vollmacht',
          content: `Die Reichweite der Vertretungsmacht bestimmt, welche Geschäfte wirksam sind.

**🎯 Arten von Vollmachten:**

**1. Spezialvollmacht:**
- Nur für einzelnes Geschäft
- Eng begrenzt
- Erlischt mit Ausführung

**2. Gattungsvollmacht:**
- Für bestimmte Art von Geschäften
- "Alle Mietverträge"
- "Wareneinkauf"

**3. Generalvollmacht:**
- Für alle Geschäfte
- Umfassende Vertretung
- Ausnahmen gesetzlich/gewillkürt

**📊 Auslegung der Vollmacht:**

**Grundsätze:**
- Objektiver Empfängerhorizont
- Verkehrsübliche Bedeutung
- Im Zweifel eng (Schutz des Vollmachtgebers)

**Typische Vollmachten:**

| Vollmacht | Umfasst | Umfasst nicht |
|-----------|---------|---------------|
| Prokura | Alle Handelsgeschäfte | Grundstücke, Aufgabe |
| Handlungsvollmacht | Branchenübliches | Außergewöhnliches |
| Verkaufsvollmacht | Verkauf, Übergabe | Stundung, Nachlass |

**🚫 Grenzen der Vollmacht:**

**Höchstpersönliche Geschäfte:**
- Eheschließung
- Testament
- Adoption

**Gesetzliche Beschränkungen:**
- § 181 BGB (Insichgeschäft)
- Schenkungen aus Vermögen des Vertretenen

**⚖️ Innenverhältnis vs. Außenverhältnis:**

**Innenverhältnis (Auftrag):**
- Weisungen des Vollmachtgebers
- Interne Beschränkungen
- Pflicht zur Beachtung

**Außenverhältnis (Vollmacht):**
- Maßgeblich für Wirksamkeit
- Interne Beschränkungen irrelevant
- Schutz des Rechtsverkehrs

**Überschreitung:**
- Geschäft trotzdem wirksam
- Aber Schadensersatz intern`,
          examples: [
            {
              id: 'ex-bgb-7-2-2',
              title: '💰 Beispiel: Vollmachtsüberschreitung',
              content: `**Sachverhalt:**
V erteilt P Prokura. Intern: "Keine Geschäfte über 50.000 €!"
P kauft Maschine für 80.000 €.

**Außenverhältnis:**
- Prokura umfasst alle Handelsgeschäfte
- Kauf wirksam
- V muss zahlen

**Innenverhältnis:**
- P hat Weisung verletzt
- Schadensersatzpflicht
- Ggf. Kündigung

**Merke:**
Interne Beschränkungen schützen nicht im Außenverhältnis!`,
              explanation: 'Das Abstraktionsprinzip gilt auch hier.'
            }
          ],
          selfTest: {
            questions: [
              {
                id: 'q-bgb-7-2-1',
                question: 'Auf wessen Willensmängel kommt es bei der Stellvertretung an?',
                correctAnswer: 'Grundsätzlich auf die des Vertreters (§ 166 I), außer bei bestimmten Weisungen ohne Spielraum (§ 166 II).'
              },
              {
                id: 'q-bgb-7-2-2',
                question: 'Was ist der Unterschied zwischen Innen- und Außenvollmacht?',
                correctAnswer: 'Innenvollmacht wird gegenüber dem Vertreter erteilt, Außenvollmacht gegenüber dem Geschäftspartner.'
              }
            ]
          }
        }
      ],
      resources: [],
      glossary: [
        {
          term: 'Vollmacht',
          definition: 'Durch Rechtsgeschäft erteilte Vertretungsmacht'
        },
        {
          term: 'Prokura',
          definition: 'Handelsrechtliche Vollmacht zu allen gewöhnlichen Geschäften (§ 49 HGB)'
        },
        {
          term: 'Wissensvertreter',
          definition: 'Person, deren Wissen dem Geschäftsherrn zugerechnet wird'
        }
      ]
    },
    requiredMastery: 85,
    estimatedMinutes: 900,
    exercises: []
  },

  // 7.3 Besondere Probleme und Rechtsscheinhaftung (10 Stunden)
  {
    id: 'bgb-ke7-3-besondere-probleme',
    moduleId: 'bgb-at',
    order: 21,
    title: '7.3 Besondere Probleme und Rechtsscheinhaftung',
    objectives: [
      {
        id: 'obj-bgb-7-3-1',
        description: 'Das Insichgeschäft und seine Problematik verstehen',
        bloomLevel: 'understand'
      },
      {
        id: 'obj-bgb-7-3-2',
        description: 'Duldungs- und Anscheinsvollmacht anwenden',
        bloomLevel: 'apply'
      },
      {
        id: 'obj-bgb-7-3-3',
        description: 'Die Vertretung ohne Vertretungsmacht beurteilen',
        bloomLevel: 'evaluate'
      }
    ],
    content: {
      id: 'content-bgb-7-3',
      type: 'mixed',
      sections: [
        {
          id: 'section-bgb-7-3-1',
          title: '🔄 Das Insichgeschäft (§ 181 BGB)',
          content: `Das Insichgeschäft birgt besondere Interessenkonflikte.

**📋 Begriff und Arten:**

**Selbstkontrahieren:**
- Vertreter auf beiden Seiten
- Als Vertreter und im eigenen Namen
- Beispiel: V verkauft an sich selbst

**Mehrvertretung:**
- Vertreter vertritt beide Parteien
- Zwei verschiedene Vertretene
- Beispiel: V vertritt Käufer und Verkäufer

**⚖️ Ratio des § 181 BGB:**

**Interessenkonflikt:**
- Gefahr der Bevorzugung eigener Interessen
- Keine neutrale Interessenwahrung
- Präventiver Schutz des Vertretenen

**🎯 Die Regel:**

**Grundsatz: Verbot**
- Insichgeschäfte unwirksam
- Schwebende Unwirksamkeit
- Genehmigung möglich

**Ausnahmen:**
1. **Gestattung** durch Vertretenen
2. **Erfüllung einer Verbindlichkeit**
3. **Keine Interessengefährdung** (umstritten)

**📊 Gestattung:**

**Formen:**
- Vorherige Erlaubnis (häufig)
- Nachträgliche Genehmigung
- Generell oder für Einzelfall

**Beispiele:**
- Bankvollmacht mit Befreiung
- Notarielle Vollmachten
- Unternehmenskauf-Vollmachten

**💰 Erfüllung einer Verbindlichkeit:**

**Voraussetzungen:**
- Bestehende Verpflichtung
- Inhalt eindeutig bestimmt
- Kein Ermessensspielraum

**Beispiele:**
- Zahlung fälliger Kaufpreisforderung
- Übergabe gekaufter Sache
- Aber nicht: Stundungsvereinbarung`,
          examples: [
            {
              id: 'ex-bgb-7-3-1',
              title: '🏠 Beispiel: Insichgeschäft',
              content: `**Fall 1 - Unwirksam:**
Vater V bevollmächtigt Sohn S, sein Haus zu verkaufen.
S verkauft an sich selbst für 200.000 € (Wert: 300.000 €).
→ § 181 BGB, ohne Befreiung unwirksam

**Fall 2 - Wirksam:**
V erteilt S Vollmacht "mit Befreiung von § 181 BGB".
S kann jetzt an sich selbst verkaufen.
→ Gestattung, daher wirksam

**Fall 3 - Erfüllung:**
S schuldet V 10.000 € aus Darlehen.
V bevollmächtigt S, Zahlungen entgegenzunehmen.
S zahlt an sich selbst (als Vertreter des V).
→ Erfüllung einer Verbindlichkeit, wirksam`,
              explanation: '§ 181 schützt vor Interessenkonflikten.'
            }
          ]
        },
        {
          id: 'section-bgb-7-3-2',
          title: '👻 Duldungs- und Anscheinsvollmacht',
          content: `Rechtsscheinhaftung schützt das Vertrauen des Rechtsverkehrs.

**📋 Duldungsvollmacht:**

**Voraussetzungen:**
1. **Rechtsschein** einer Vollmacht
2. **Kenntnis** des Vertretenen
3. **Dulden** ohne Einschreiten
4. **Zurechenbarkeit**
5. **Gutgläubigkeit** des Dritten

**Rechtsschein durch:**
- Wiederholtes Auftreten
- Geschäftsräume nutzen
- Firmenwagen, Visitenkarten
- Nicht widersprochene Auftritte

**Fallgruppen:**
- Ehegatte im Geschäft
- Angestellter überschreitet Befugnisse
- Ausgeschiedener Gesellschafter

**⚡ Anscheinsvollmacht:**

**Voraussetzungen:**
1. **Rechtsschein** einer Vollmacht
2. **Fahrlässiges Verursachen**
3. **Zurechenbarkeit**
4. **Vertrauen** des Dritten

**Unterschied zur Duldung:**
- Keine positive Kenntnis nötig
- Fahrlässigkeit genügt
- Organisationsverschulden

**Typische Fälle:**
- Blankounterschriften
- Ungesicherte Firmenstempel
- Nicht eingezogene Vollmachtsurkunden
- Täuschend echte Fälschungen

**🔍 Abgrenzung:**

| Kriterium | Duldungsvollmacht | Anscheinsvollmacht |
|-----------|-------------------|-------------------|
| Kenntnis | Positiv erforderlich | Nicht erforderlich |
| Verschulden | Unterlassen trotz Kenntnis | Fahrlässigkeit |
| Rechtsfolge | Wie Vollmacht | Wie Vollmacht |

**⚖️ Rechtsfolgen:**

**Wirkung:**
- Wie echte Vollmacht
- Geschäft wirksam
- Kein § 179 BGB

**Aber:**
- Keine "Kettenwirkung"
- Einzelfallbetrachtung
- Anfechtung möglich (str.)`,
          memoryAids: [
            {
              id: 'mem-bgb-7-3-1',
              title: '🧠 Merkhilfe Rechtsscheinvollmacht',
              content: `**D**uldung = **D**a weiß er's (positive Kenntnis)
**A**nschein = **A**chtlos war er (Fahrlässigkeit)`
            }
          ]
        },
        {
          id: 'section-bgb-7-3-3',
          title: '❌ Vertretung ohne Vertretungsmacht',
          content: `Der falsus procurator haftet nach § 179 BGB.

**📋 Voraussetzungen des § 179:**

**1. Handeln als Vertreter**
- Offenkundigkeitsprinzip
- Nicht bei Eigengeschäft

**2. Ohne Vertretungsmacht**
- Keine Vollmacht
- Überschreitung
- Erloschene Vollmacht

**3. Keine Genehmigung**
- § 177 BGB
- Vertretener lehnt ab
- Frist abgelaufen

**🎯 Die Haftung:**

**§ 179 I BGB - Erfüllung/Schadensersatz:**
- Wahlrecht des Geschäftspartners
- Erfüllungsinteresse
- Vertragsschluss fingiert

**§ 179 II BGB - Nur negativer Schaden:**
- Bei Unkenntnis der Vollmacht
- Vertrauensschaden
- Geringerer Umfang

**§ 179 III BGB - Keine Haftung:**
- Geschäftspartner kannte Mangel
- Kennen müssen genügt
- Beschränkt Geschäftsfähiger

**📊 Das schwebende Geschäft (§ 177):**

**Rechtslage:**
- Schwebend unwirksam
- Genehmigung möglich
- Rückwirkung (ex tunc)

**Genehmigung:**
- Formfrei
- Auch konkludent
- Gegenüber Vertreter oder Partner

**Verweigerung:**
- Endgültige Unwirksamkeit
- § 179 BGB greift ein
- Kein Widerruf mehr möglich

**⏰ Fristen:**
- Partner kann Frist setzen (§ 177 II)
- Sonst bis Verjährung
- Schweigen = Verweigerung`,
          examples: [
            {
              id: 'ex-bgb-7-3-2',
              title: '⚠️ Beispiel: Haftung nach § 179',
              content: `**Sachverhalt:**
V widerruft Vollmacht des A am 1.3.
A verkauft am 15.3. noch PKW des V an K für 10.000 €.
V verweigert Genehmigung.

**§ 179 I - Wahlrecht des K:**

**Option 1 - Erfüllung:**
K kann von A Übereignung des PKW verlangen
(A muss sich PKW beschaffen!)

**Option 2 - Schadensersatz:**
Positives Interesse = 10.000 € Wert des PKW
+ entgangener Gewinn
+ Aufwendungen

**Wenn A die Vollmacht nicht kannte:**
§ 179 II: Nur Vertrauensschaden
- Vertragskosten
- Entgangene andere Geschäfte
- Aber max. Erfüllungsinteresse`,
              explanation: '§ 179 schützt den gutgläubigen Geschäftspartner.'
            }
          ],
          selfTest: {
            questions: [
              {
                id: 'q-bgb-7-3-1',
                question: 'Wann ist ein Insichgeschäft trotz § 181 BGB wirksam?',
                correctAnswer: 'Bei Gestattung durch den Vertretenen oder wenn es sich um die Erfüllung einer bestehenden Verbindlichkeit handelt.'
              },
              {
                id: 'q-bgb-7-3-2',
                question: 'Was ist der Unterschied zwischen Duldungs- und Anscheinsvollmacht?',
                correctAnswer: 'Bei der Duldungsvollmacht kennt der Vertretene das Handeln und duldet es, bei der Anscheinsvollmacht hat er fahrlässig einen Rechtsschein gesetzt.'
              }
            ]
          }
        }
      ],
      resources: [],
      glossary: [
        {
          term: 'Insichgeschäft',
          definition: 'Rechtsgeschäft des Vertreters mit sich selbst oder als Vertreter beider Parteien'
        },
        {
          term: 'Falsus procurator',
          definition: 'Vertreter ohne Vertretungsmacht (vollmachtloser Vertreter)'
        },
        {
          term: 'Rechtsscheinhaftung',
          definition: 'Haftung aufgrund eines zurechenbaren Rechtsscheins'
        }
      ]
    },
    requiredMastery: 80,
    estimatedMinutes: 600,
    exercises: []
  },

  // 7.4 Zustimmungsbedürftige Rechtsgeschäfte und Bedingung (10 Stunden)
  {
    id: 'bgb-ke7-4-zustimmung-bedingung',
    moduleId: 'bgb-at',
    order: 22,
    title: '7.4 Zustimmungsbedürftige Rechtsgeschäfte und Bedingung',
    objectives: [
      {
        id: 'obj-bgb-7-4-1',
        description: 'Die Systematik zustimmungsbedürftiger Rechtsgeschäfte verstehen',
        bloomLevel: 'understand'
      },
      {
        id: 'obj-bgb-7-4-2',
        description: 'Bedingte Rechtsgeschäfte analysieren können',
        bloomLevel: 'analyze'
      },
      {
        id: 'obj-bgb-7-4-3',
        description: 'Veräußerungsverbote und ihre Wirkung beurteilen',
        bloomLevel: 'evaluate'
      }
    ],
    content: {
      id: 'content-bgb-7-4',
      type: 'mixed',
      sections: [
        {
          id: 'section-bgb-7-4-1',
          title: '✅ Zustimmungsbedürftige Rechtsgeschäfte',
          content: `Bestimmte Rechtsgeschäfte bedürfen zu ihrer Wirksamkeit der Zustimmung eines Dritten.

**📋 Begriff der Zustimmung (§ 183 BGB):**

**Einwilligung (§ 183 S. 1):**
- Vorherige Zustimmung
- Ex ante
- Ermöglicht sofortige Wirksamkeit

**Genehmigung (§ 184):**
- Nachträgliche Zustimmung
- Ex post
- Rückwirkung auf Vornahme (ex tunc)

**🎯 Wichtige Fälle:**

**Gesetzliche Zustimmungserfordernisse:**
- §§ 107 ff.: Minderjährige
- § 1365: Verfügung über Haushaltsgegenstände
- § 1369: Verpflichtung über Vermögen im Ganzen
- § 1643: Vormundschaftsgerichtliche Genehmigung

**Vertragliche Zustimmungsvorbehalte:**
- Gesellschaftsverträge
- Untervermietungsverbote
- Abtretungsverbote

**⚖️ Schwebende Unwirksamkeit:**

**Rechtslage vor Entscheidung:**
- Noch nicht endgültig unwirksam
- Bindung des Erklärenden
- Schutz durch §§ 178, 180 BGB

**Entscheidungsmöglichkeiten:**
- Genehmigung → wirksam ex tunc
- Verweigerung → endgültig unwirksam
- Fristablauf → wie Verweigerung

**📊 Form der Zustimmung:**

**Grundsatz:**
- Formfrei (§ 182 II)
- Auch wenn Hauptgeschäft formbedürftig
- Auch konkludent möglich

**Ausnahmen:**
- Spezialgesetzlich
- Bei höchstpersönlichen Geschäften`,
          examples: [
            {
              id: 'ex-bgb-7-4-1',
              title: '👨‍👩‍👧 Beispiel: Zustimmung Minderjähriger',
              content: `**Fall 1 - Einwilligung:**
17-jähriger M will Laptop für 800 € kaufen.
Eltern: "Ja, kauf dir einen."
→ Einwilligung, Kauf sofort wirksam

**Fall 2 - Genehmigung:**
M hat bereits gekauft, dann Eltern gefragt.
Eltern genehmigen nachträglich.
→ Rückwirkende Wirksamkeit

**Fall 3 - Verweigerung:**
Eltern verweigern Genehmigung.
→ Kauf endgültig unwirksam
→ Bereicherungsausgleich`,
              explanation: 'Die Zustimmung kann vor oder nach dem Geschäft erfolgen.'
            }
          ]
        },
        {
          id: 'section-bgb-7-4-2',
          title: '🎲 Die Bedingung (§§ 158 ff. BGB)',
          content: `Rechtsgeschäfte können von ungewissen zukünftigen Ereignissen abhängig gemacht werden.

**📋 Begriff und Arten:**

**Bedingung:**
- Bestimmung in einem Rechtsgeschäft
- Abhängigkeit von ungewissem Ereignis
- Parteivereinbarung

**Aufschiebende Bedingung (§ 158 I):**
- Wirksamkeit tritt erst ein
- Wenn Bedingung erfüllt
- Bis dahin schwebend

**Auflösende Bedingung (§ 158 II):**
- Geschäft zunächst wirksam
- Endet bei Bedingungseintritt
- Automatisches Erlöschen

**🎯 Zulässigkeit:**

**Bedingungsfeindliche Geschäfte:**
- Eheschließung
- Vaterschaftsanerkennung
- Aufrechnung
- Kündigung
- Anfechtung

**Unzulässige Bedingungen:**
- Sittenwidrige (§ 138)
- Unmögliche
- Widersprüchliche

**⚡ Rechtslage während Schwebezeit:**

**Bei aufschiebender Bedingung:**
- Anwartschaftsrecht
- Übertragbar und vererblich
- Schutz durch § 160 BGB

**Bei auflösender Bedingung:**
- Volles Recht
- Aber auflösend bedingt
- Unsicherheit der Rechtsstellung

**📊 Bedingungseintritt:**

**Fiktion (§ 162 BGB):**

**Treuwidrige Verhinderung:**
- Bedingung gilt als eingetreten
- Wenn Schuldner verhindert
- Wider Treu und Glauben

**Treuwidrige Herbeiführung:**
- Bedingung gilt als nicht eingetreten
- Wenn Begünstigter herbeiführt
- Wider Treu und Glauben`,
          memoryAids: [
            {
              id: 'mem-bgb-7-4-1',
              title: '🧠 Merkhilfe Bedingungsarten',
              content: `**A**ufschiebend = **A**bwarten (noch nicht wirksam)
**A**uflösend = **A**us bei Eintritt (schon wirksam)`
            }
          ]
        },
        {
          id: 'section-bgb-7-4-3',
          title: '🚫 Veräußerungsverbote',
          content: `Veräußerungsverbote sollen die Verfügungsfreiheit einschränken.

**📋 Arten von Veräußerungsverboten:**

**Rechtsgeschäftliche (§ 137 BGB):**
- Nur schuldrechtliche Wirkung
- Keine dingliche Wirkung
- Verfügung trotzdem wirksam

**Gesetzliche:**
- § 135 BGB: Behördliche/gerichtliche
- § 136 BGB: Vollstreckungsschutz
- Dingliche Wirkung → Unwirksamkeit

**🎯 § 137 BGB - Grundsatz:**

**Ratio:**
- Verkehrsschutz
- Verfügungsfreiheit
- Keine Belastung des Rechtsverkehrs

**Folgen:**
- Verfügung wirksam
- Aber Vertragsbruch
- Schadensersatzpflicht

**Ausnahme:**
- Gutgläubiger Erwerb ausgeschlossen
- Bei Kenntnis des Erwerbers
- Arglist/Kollusion

**⚖️ §§ 135, 136 BGB - Gesetzliche Verbote:**

**§ 135 - Behördliche Verbote:**
- Pfändungspfandrecht
- Arrest
- Insolvenzverfahren

**§ 136 - Schutz des Schuldners:**
- Unpfändbare Sachen
- Lohnpfändungsgrenzen
- Sozialrechtliche Ansprüche

**Rechtsfolge:**
- Verfügung unwirksam
- Absolute Wirkung
- Vindikation möglich

**📊 Übersicht Wirkungen:**

| Verbot | Wirkung | Verfügung | Folgen |
|--------|---------|-----------|---------|
| § 137 | Relativ | Wirksam | Schadensersatz |
| § 135 | Absolut | Unwirksam | Vindikation |
| § 136 | Absolut | Unwirksam | Schutz erhalten |`,
          examples: [
            {
              id: 'ex-bgb-7-4-2',
              title: '🏠 Beispiel: Veräußerungsverbot',
              content: `**Fall 1 - § 137 BGB:**
V verkauft Grundstück an K.
Vertrag: "K darf 5 Jahre nicht weiterverkaufen."
K verkauft nach 2 Jahren an D.

**Ergebnis:**
- Verkauf an D wirksam (§ 137)
- K verletzt Vertrag mit V
- V kann Schadensersatz fordern

**Fall 2 - § 135 BGB:**
Grundstück ist gepfändet.
E verkauft trotzdem an K.

**Ergebnis:**
- Verkauf unwirksam (§ 135)
- K wird nicht Eigentümer
- Gläubiger kann weiter vollstrecken`,
              explanation: 'Nur gesetzliche Verbote führen zur Unwirksamkeit.'
            }
          ],
          selfTest: {
            questions: [
              {
                id: 'q-bgb-7-4-1',
                question: 'Was ist der Unterschied zwischen Einwilligung und Genehmigung?',
                correctAnswer: 'Einwilligung ist die vorherige Zustimmung, Genehmigung die nachträgliche Zustimmung mit Rückwirkung.'
              },
              {
                id: 'q-bgb-7-4-2',
                question: 'Welche Wirkung haben rechtsgeschäftliche Veräußerungsverbote?',
                correctAnswer: 'Nur schuldrechtliche Wirkung - die Verfügung ist trotzdem wirksam, führt aber zu Schadensersatzpflichten.'
              }
            ]
          }
        }
      ],
      resources: [],
      glossary: [
        {
          term: 'Bedingung',
          definition: 'Bestimmung, die die Wirkung eines Rechtsgeschäfts von einem ungewissen Ereignis abhängig macht'
        },
        {
          term: 'Anwartschaftsrecht',
          definition: 'Wesensgleiches Minus zum Vollrecht während der Schwebezeit'
        },
        {
          term: 'Veräußerungsverbot',
          definition: 'Verbot, über einen Gegenstand zu verfügen'
        }
      ]
    },
    requiredMastery: 80,
    estimatedMinutes: 600,
    exercises: []
  }
];

// Exercises for all units in Kurseinheit 7
const exercisesKE7: Exercise[] = [
  // Exercises for 7.1 Grundlagen
  {
    id: 'ex-bgb-ke7-1-1',
    type: 'multipleChoice',
    difficulty: 'beginner',
    points: 10,
    content: {
      question: 'In welchem Fall liegt KEINE Stellvertretung vor?',
      options: [
        'Sekretärin bestellt Büromaterial "für die Firma"',
        'Bote überbringt Vertragsangebot des Chefs',
        'Prokurist schließt Liefervertrag ab',
        'Eltern kaufen für minderjähriges Kind'
      ]
    },
    hints: [
      {
        id: 'hint-1',
        text: 'Bei der Stellvertretung gibt der Vertreter eine eigene Willenserklärung ab.',
        penaltyPoints: 0
      }
    ],
    solution: {
      correct: 'Bote überbringt Vertragsangebot des Chefs',
      explanation: 'Der Bote überbringt nur eine fremde Willenserklärung, während der Stellvertreter eine eigene Erklärung abgibt.'
    }
  },
  {
    id: 'ex-bgb-ke7-1-2',
    type: 'caseAnalysis',
    difficulty: 'advanced',
    points: 25,
    content: {
      question: 'Prüfen Sie die Stellvertretung:',
      scenario: `Angestellter A der Müller GmbH bestellt bei Lieferant L telefonisch Waren:
"Ich brauche 100 Kartons Kopierpapier."
L fragt: "Für Sie privat?"
A: "Nein, geschäftlich."
L liefert an die Geschäftsadresse der Müller GmbH.
Die GmbH verweigert Zahlung: A sei nicht bevollmächtigt.`,
      tasks: [
        'Liegt eine Stellvertretung vor?',
        'Wurde das Offenkundigkeitsprinzip beachtet?',
        'Welche Ansprüche hat L?'
      ]
    },
    solution: {
      correct: {
        structure: `I. Stellvertretung
   1. Eigene Willenserklärung des A (+)
   2. Offenkundigkeitsprinzip
      a) Nicht ausdrücklich "im Namen der GmbH"
      b) Aber aus Umständen erkennbar:
         - "geschäftlich"
         - Lieferung an GmbH
         - Kontext Geschäftsbeziehung
      c) § 164 I BGB erfüllt (+)
   3. Vertretungsmacht fraglich

II. Ansprüche des L
    1. Gegen GmbH aus § 433 II
       - Wenn Vertretungsmacht (+)
       - Oder Rechtsschein
    2. Gegen A aus § 179
       - Falls keine Vertretungsmacht
       - Und keine Genehmigung`,
        keyPoints: [
          'Offenkundigkeitsprinzip aus Umständen erfüllt',
          'Geschäftlicher Kontext entscheidend',
          'Vertretungsmacht separat zu prüfen'
        ]
      },
      explanation: 'Das Offenkundigkeitsprinzip erfordert keine bestimmte Formulierung.'
    }
  },

  // Exercises for 7.2 Voraussetzungen
  {
    id: 'ex-bgb-ke7-2-1',
    type: 'dragDrop',
    difficulty: 'intermediate',
    points: 20,
    content: {
      question: 'Ordnen Sie die Willensmängel der richtigen Person zu (§ 166):',
      items: [
        'Irrtum bei allgemeiner Vollmacht',
        'Täuschung bei spezieller Weisung',
        'Kenntnis von Mängeln bei Vollmacht',
        'Geschäftsunfähigkeit des Vollmachtgebers'
      ],
      targets: [
        'Vertreter maßgeblich',
        'Vertretener maßgeblich',
        'Vertreter maßgeblich',
        'Vollmacht unwirksam'
      ]
    },
    solution: {
      correct: {
        'Irrtum bei allgemeiner Vollmacht': 'Vertreter maßgeblich',
        'Täuschung bei spezieller Weisung': 'Vertretener maßgeblich',
        'Kenntnis von Mängeln bei Vollmacht': 'Vertreter maßgeblich',
        'Geschäftsunfähigkeit des Vollmachtgebers': 'Vollmacht unwirksam'
      },
      explanation: '§ 166 differenziert nach Art der Vollmacht für die Zurechnung.'
    }
  },
  {
    id: 'ex-bgb-ke7-2-2',
    type: 'trueFalse',
    difficulty: 'intermediate',
    points: 10,
    content: {
      question: 'Die Vollmacht erlischt automatisch mit Beendigung des zugrundeliegenden Auftragsverhältnisses.'
    },
    hints: [
      {
        id: 'hint-1',
        text: 'Denken Sie an das Abstraktionsprinzip.',
        penaltyPoints: 0
      }
    ],
    solution: {
      correct: false,
      explanation: 'Die Vollmacht ist abstrakt vom Grundverhältnis. Sie erlischt nicht automatisch, sondern muss separat widerrufen werden.'
    }
  },

  // Exercises for 7.3 Besondere Probleme
  {
    id: 'ex-bgb-ke7-3-1',
    type: 'fillInBlanks',
    difficulty: 'intermediate',
    points: 15,
    content: {
      question: 'Ergänzen Sie die Voraussetzungen der Anscheinsvollmacht:',
      context: 'Für eine Anscheinsvollmacht muss ein _____ einer Vollmacht vorliegen, der vom Vertretenen _____ verursacht wurde. Der Dritte muss auf diesen Rechtsschein _____ haben. Eine positive _____ des Vertretenen ist nicht erforderlich.',
      blanks: 4
    },
    hints: [
      {
        id: 'hint-1',
        text: 'Die Anscheinsvollmacht setzt kein Wissen voraus.',
        penaltyPoints: 0
      }
    ],
    solution: {
      correct: ['Rechtsschein', 'fahrlässig', 'vertraut', 'Kenntnis'],
      explanation: 'Bei der Anscheinsvollmacht genügt Fahrlässigkeit, während die Duldungsvollmacht positive Kenntnis voraussetzt.'
    }
  },
  {
    id: 'ex-bgb-ke7-3-2',
    type: 'multipleChoice',
    difficulty: 'advanced',
    points: 15,
    content: {
      question: 'Wann haftet der Vertreter ohne Vertretungsmacht NICHT nach § 179 BGB?',
      options: [
        'Wenn er die fehlende Vollmacht nicht kannte',
        'Wenn der Geschäftspartner die fehlende Vollmacht kannte',
        'Wenn das Geschäft besonders vorteilhaft war',
        'Wenn er im Auftrag des Vertretenen handelte'
      ]
    },
    hints: [
      {
        id: 'hint-1',
        text: '§ 179 III BGB enthält Ausnahmen.',
        penaltyPoints: 0
      }
    ],
    solution: {
      correct: 'Wenn der Geschäftspartner die fehlende Vollmacht kannte',
      explanation: 'Nach § 179 III haftet der Vertreter nicht, wenn der andere Teil den Mangel kannte oder kennen musste.'
    }
  },

  // Exercises for 7.4 Zustimmung und Bedingung
  {
    id: 'ex-bgb-ke7-4-1',
    type: 'caseAnalysis',
    difficulty: 'intermediate',
    points: 20,
    content: {
      question: 'Analysieren Sie die Bedingung:',
      scenario: `V verkauft K sein Auto unter der Bedingung: "Der Kaufvertrag wird wirksam, wenn K bis zum 31.12. seine Fahrprüfung besteht."
K fällt absichtlich durch die Prüfung, weil er ein besseres Angebot gefunden hat.`,
      tasks: [
        'Welche Art von Bedingung liegt vor?',
        'Welche Rechtsfolgen hat Ks Verhalten?',
        'Welche Ansprüche hat V?'
      ]
    },
    solution: {
      correct: {
        structure: `I. Art der Bedingung
   - Aufschiebende Bedingung § 158 I
   - Kaufvertrag schwebend unwirksam
   - Anwartschaftsrecht des K

II. Rechtsfolgen nach § 162
    - K verhindert treuwidrig
    - Bedingung gilt als eingetreten
    - Kaufvertrag wird wirksam

III. Ansprüche des V
     - Kaufpreiszahlung § 433 II
     - Abnahme des Autos
     - Ggf. Schadensersatz`,
        keyPoints: [
          'Treuwidrige Verhinderung führt zur Fiktion',
          'Schutz des Bedingungsbegünstigten',
          'Vertrag wird wirksam'
        ]
      },
      explanation: '§ 162 BGB schützt vor treuwidrigem Verhalten bei bedingten Geschäften.'
    }
  },
  {
    id: 'ex-bgb-ke7-4-2',
    type: 'trueFalse',
    difficulty: 'beginner',
    points: 10,
    content: {
      question: 'Ein rechtsgeschäftliches Veräußerungsverbot macht die trotzdem erfolgte Veräußerung unwirksam.'
    },
    solution: {
      correct: false,
      explanation: 'Nach § 137 BGB haben rechtsgeschäftliche Veräußerungsverbote nur schuldrechtliche, keine dingliche Wirkung. Die Verfügung ist wirksam.'
    }
  }
];

// Add exercises to units
kurseinheit7BGBUnits[0].exercises = exercisesKE7.slice(0, 2);
kurseinheit7BGBUnits[1].exercises = exercisesKE7.slice(2, 4);
kurseinheit7BGBUnits[2].exercises = exercisesKE7.slice(4, 6);
kurseinheit7BGBUnits[3].exercises = exercisesKE7.slice(6, 8);