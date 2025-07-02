import { LearningUnit, Exercise } from '../../types/learning';

// KURSEINHEIT 6: Die Anfechtbarkeit von Willenserklärungen
// Basierend auf FernUni Hagen PDF 55101-06-S#1-2001626.pdf
// Autoren: Prof. Dr. Sebastian Kubis, Prof. Dr. Ulrich Eisenhardt
// 50 Stunden / 1.5 ECTS

export const kurseinheit6BGBUnits: LearningUnit[] = [
  // 6.1 Grundlagen der Anfechtung (10 Stunden)
  {
    id: 'bgb-ke6-1-grundlagen-anfechtung',
    moduleId: 'bgb-at',
    order: 17,
    title: '6.1 Grundlagen der Anfechtung',
    objectives: [
      {
        id: 'obj-bgb-6-1-1',
        description: 'Das Wesen der Anfechtung als Gestaltungsrecht verstehen',
        bloomLevel: 'understand'
      },
      {
        id: 'obj-bgb-6-1-2',
        description: 'Die Systematik der Anfechtungsgründe erfassen',
        bloomLevel: 'understand'
      },
      {
        id: 'obj-bgb-6-1-3',
        description: 'Den Interessenkonflikt bei der Anfechtung analysieren',
        bloomLevel: 'analyze'
      }
    ],
    content: {
      id: 'content-bgb-6-1',
      type: 'mixed',
      sections: [
        {
          id: 'section-bgb-6-1-1',
          title: '🎯 Überblick und Bedeutung',
          content: `Die Anfechtung ermöglicht es, ein wirksam zustandegekommenes Rechtsgeschäft nachträglich zu vernichten.

**📋 Ausgangslage:**
- Rechtsgeschäft ist wirksam zustande gekommen
- Nachträgliche Vernichtung erwünscht
- Einseitige Gestaltungsmöglichkeit

**Alternativen zur Anfechtung:**
1. **Einvernehmliche Aufhebung:** Vertrag durch Vertrag aufheben
2. **Anfechtung:** Einseitige Vernichtung bei Vorliegen gesetzlicher Gründe

**⚖️ Die Anfechtung als Gestaltungsrecht:**

**Begriff:**
Die Anfechtung ist ein Gestaltungsrecht, durch dessen Ausübung unmittelbar auf ein bestehendes Rechtsverhältnis eingewirkt wird.

**Merkmale:**
- Einseitige Ausübung
- Empfangsbedürftige Willenserklärung
- Unwiderruflich
- Bedingungsfeindlich (Ausnahme: Rechtsbedingung)

**📊 Wirkung der Anfechtung (§ 142 BGB):**

| Regelfall | Dauerschuldverhältnis |
|-----------|----------------------|
| Ex tunc (von Anfang an) | Ex nunc (ab jetzt) |
| Rückwirkende Vernichtung | Keine Rückabwicklung |
| Als nie geschehen | Vermeidung von Schwierigkeiten |

**🔑 Grundprinzip:**
Nicht die Anfechtungsmöglichkeit vernichtet das Geschäft, sondern erst die Anfechtungserklärung!`,
          examples: [
            {
              id: 'ex-bgb-6-1-1',
              title: '📝 Beispiel: Anfechtungserklärung',
              content: `**Sachverhalt:**
K hat bei V ein Auto gekauft, sich aber über den Kilometerstand geirrt.

**Anfechtungserklärung:**
"Hiermit fechte ich den mit Ihnen am 15.3. geschlossenen Kaufvertrag über den PKW wegen Irrtums an."

**Wirkung:**
- Kaufvertrag wird rückwirkend vernichtet
- Rückabwicklung nach Bereicherungsrecht
- Ggf. Schadensersatz nach § 122 BGB`,
              explanation: 'Die Anfechtung muss nicht begründet werden, sollte aber den Anfechtungsgrund nennen.'
            }
          ]
        },
        {
          id: 'section-bgb-6-1-2',
          title: '⚖️ Der Interessenkonflikt',
          content: `Bei der Anfechtung besteht ein fundamentaler Interessenkonflikt zwischen Willensschutz und Vertrauensschutz.

**🔄 Die widerstreitenden Interessen:**

**1. Willensschutz (Anfechtender):**
- Bindung nur an den wirklichen Willen
- Schutz vor Irrtümern
- Privatautonomie

**2. Vertrauensschutz (Anfechtungsgegner):**
- Rechtssicherheit
- Verbindlichkeit von Verträgen
- "Pacta sunt servanda"

**📋 Die gesetzliche Lösung:**

**Kompromiss des BGB:**
1. **Begrenzte Anfechtungsgründe:** Nur §§ 119, 120, 123
2. **Schadensersatzpflicht:** § 122 bei §§ 119, 120
3. **Kurze Fristen:** § 121 (unverzüglich)
4. **Keine Schadensersatzpflicht:** Bei § 123 (Täuschung/Drohung)

**🎯 Grundsatz:**
> "Würde die Rechtsordnung jeden Irrtum für beachtlich erklären, wäre eine bedenkliche Rechtsunsicherheit die Folge."

**Beispiel Unbeachtlicher Irrtum:**
Händler bestellt 10.000 schwarz-rot-goldene Gipseier in der Erwartung, sie gewinnbringend verkaufen zu können. Die Eier erweisen sich als unverkäuflich.
→ Kein Anfechtungsgrund! Bloßer Motivirrtum.`,
          memoryAids: [
            {
              id: 'mem-bgb-6-1-1',
              title: '🧠 Merkhilfe Anfechtungssystem',
              content: `**Anfechtungsgründe:**
§ 119: **I**rrtum
§ 120: **Ü**bermittlung
§ 123: **T**äuschung/**D**rohung

**Folgen:**
119/120 → § 122 (Schadensersatz)
123 → Kein Schadensersatz

Merke: "**I**mmer **Ü**berlegen, **T**rotz**D**em"`
            }
          ]
        }
      ],
      resources: [],
      glossary: [
        {
          term: 'Anfechtung',
          definition: 'Einseitige empfangsbedürftige Willenserklärung zur rückwirkenden Vernichtung eines Rechtsgeschäfts'
        },
        {
          term: 'Gestaltungsrecht',
          definition: 'Recht, durch einseitige Erklärung unmittelbar auf ein Rechtsverhältnis einzuwirken'
        },
        {
          term: 'Ex tunc',
          definition: 'Von Anfang an (rückwirkende Vernichtung)'
        },
        {
          term: 'Ex nunc',
          definition: 'Von jetzt an (nur für die Zukunft)'
        }
      ]
    },
    requiredMastery: 85,
    estimatedMinutes: 600,
    exercises: []
  },

  // 6.2 Anfechtung wegen Irrtums (§§ 119, 120 BGB) (20 Stunden)
  {
    id: 'bgb-ke6-2-irrtum',
    moduleId: 'bgb-at',
    order: 18,
    title: '6.2 Anfechtung wegen Irrtums',
    objectives: [
      {
        id: 'obj-bgb-6-2-1',
        description: 'Die verschiedenen Irrtumsarten unterscheiden können',
        bloomLevel: 'understand'
      },
      {
        id: 'obj-bgb-6-2-2',
        description: 'Erklärungs-, Inhalts- und Eigenschaftsirrtum abgrenzen',
        bloomLevel: 'analyze'
      },
      {
        id: 'obj-bgb-6-2-3',
        description: 'Die Anfechtungsvoraussetzungen prüfen können',
        bloomLevel: 'apply'
      },
      {
        id: 'obj-bgb-6-2-4',
        description: 'Problemfälle wie Kalkulationsirrtum lösen',
        bloomLevel: 'evaluate'
      }
    ],
    content: {
      id: 'content-bgb-6-2',
      type: 'mixed',
      sections: [
        {
          id: 'section-bgb-6-2-1',
          title: '📋 Der Irrtumsbegriff',
          content: `Irrtum ist das unbewusste Auseinanderfallen von Wille und Erklärung.

**🎯 Definition:**
> Irrtum = Unbewusste Nichtübereinstimmung von (subjektivem) Willen und (objektiver) Erklärung

**📊 Die Irrtumstatbestände im Überblick:**

\`\`\`
                    Irrtumsanfechtung
                          |
        ┌─────────────────┼─────────────────┐
        |                 |                 |
    § 119 I Alt. 1    § 119 I Alt. 2    § 119 II
   Inhaltsirrtum    Erklärungsirrtum  Eigenschaftsirrtum
        |                 |
        |                 └── § 120 Übermittlungsirrtum
        |
  ┌─────┴─────┐
  |           |
Identität  Bedeutung
\`\`\`

**⚖️ Grundsatz: Auslegung vor Anfechtung!**

Bevor eine Anfechtung in Betracht kommt, ist durch Auslegung zu ermitteln, ob Wille und Erklärung tatsächlich auseinanderfallen.`,
          examples: [
            {
              id: 'ex-bgb-6-2-1',
              title: '🔍 Beispiel: Auslegung statt Anfechtung',
              content: `**Fall:**
A sagt zu B: "Ich verkaufe dir mein Klavier für 1000 DM."
B: "Einverstanden, ich kaufe es für 1000 Euro."

**Lösung:**
- Objektiv verschiedene Erklärungen
- Aber: Auslegung nach §§ 133, 157
- DM existiert nicht mehr
- Gemeint waren offensichtlich Euro
→ Kein Irrtum, sondern Einigung über 1000 €`,
              explanation: 'Falsa demonstratio non nocet - eine falsche Bezeichnung schadet nicht, wenn der wahre Wille erkennbar ist.'
            }
          ]
        },
        {
          id: 'section-bgb-6-2-2',
          title: '✍️ Der Erklärungsirrtum (§ 119 I Alt. 2)',
          content: `Der Erklärende will eine Erklärung "dieses Inhalts überhaupt nicht abgeben".

**📋 Tatbestand:**
- Abweichung im Erklärungsakt selbst
- Versprechen, Verschreiben, Vergreifen
- Äußerer Tatbestand ≠ Gewolltes

**Voraussetzungen:**
1. **Objektiv:** Auseinanderfallen von Wille und Erklärung
2. **Subjektiv:** Bei Kenntnis und verständiger Würdigung nicht abgegeben
3. **Kausalität:** Irrtum war ursächlich

**📦 Übermittlungsirrtum (§ 120):**

**Besonderheit:**
- Unterfall des Erklärungsirrtums
- Fehler bei der Übermittlung
- Durch Bote oder Anstalt

**Gleichstellung:**
"Gleiche Anfechtbarkeit wie § 119"

**Beispiele:**
- Bote übermittelt falsch
- Telegramm falsch übertragen
- Übersetzungsfehler`,
          examples: [
            {
              id: 'ex-bgb-6-2-2',
              title: '✍️ Beispiel: Verschreiben',
              content: `**Fall:**
Winzerin B will Wein für 11 € anbieten, schreibt aber 10 €. Händler Z nimmt an.

**Prüfung:**
1. Erklärungsirrtum (+)
   - Wollte "11" schreiben
   - Hat "10" geschrieben
2. Erheblichkeit (+)
   - Hätte bei Kenntnis nicht so erklärt
3. Anfechtung möglich
4. Folge: § 142 - Vertrag nichtig ex tunc
5. Aber: § 122 - Schadensersatz an Z`,
              explanation: 'Klassischer Fall des Verschreibens - Anfechtung möglich, aber Schadensersatzpflicht!'
            }
          ]
        },
        {
          id: 'section-bgb-6-2-3',
          title: '💭 Der Inhaltsirrtum (§ 119 I Alt. 1)',
          content: `Der Erklärende irrt "über den Inhalt" seiner Erklärung.

**📋 Tatbestand:**
- Erklärungsakt gewollt
- Aber: Andere Bedeutung gemeint
- Fehlvorstellung über objektiven Inhalt

**Arten des Inhaltsirrtums:**

**1. Bedeutungsirrtum:**
- Falsche Vorstellung über Wortbedeutung
- "Halver Hahn" in Köln = Käsebrötchen

**2. Identitätsirrtum:**
- Verwechslung der Person/Sache
- A meint X, erklärt aber gegenüber Y

**3. Rechtsfolgenirrtum:**
- Grds. unbeachtlich!
- Ausnahme: Rechtsfolge = Geschäftsinhalt
- Beispiel: "Ich bürge selbstschuldnerisch"

**4. Kalkulationsirrtum:**
- Verdeckt: Völlig unbeachtlich
- Offen: Differenzierte Lösung
  * Auslegung
  * Perplexität (§ 155)
  * Geschäftsgrundlage (§ 313)
  * NIE Anfechtung!`,
          memoryAids: [
            {
              id: 'mem-bgb-6-2-1',
              title: '🧠 Merkhilfe Kalkulationsirrtum',
              content: `**Prüfungsreihenfolge bei offenem Kalkulationsirrtum:**

1. **A**uslegung (§§ 133, 157)
2. **P**erplexität prüfen (§ 155)
3. **G**eschäftsgrundlage (§ 313)
4. **N**iemals Anfechtung!

Merke: **"APGN"** = "Aber Prüfe Genau Nach"`
            }
          ]
        },
        {
          id: 'section-bgb-6-2-4',
          title: '🏷️ Der Eigenschaftsirrtum (§ 119 II)',
          content: `Irrtum über verkehrswesentliche Eigenschaften einer Person oder Sache.

**📋 Definition Eigenschaft:**
Alle tatsächlichen oder rechtlichen Verhältnisse, die infolge ihrer Beschaffenheit und Dauer auf Brauchbarkeit und Wert von Einfluss sind.

**🧑 Eigenschaften einer Person:**
- Gesundheitszustand (dauerhaft)
- Berufliche Qualifikation
- Vertrauenswürdigkeit
- Zahlungsfähigkeit (bei Kredit)

**NICHT:** 
- Vorübergehende Zustände
- Schwangerschaft
- Momentane Zahlungsunfähigkeit

**📦 Eigenschaften einer Sache:**
- Echtheit (Kunstwerk)
- Alter/Herkunft
- Bebaubarkeit (Grundstück)
- Baugenehmigung
- Denkmalschutz

**NICHT:**
- Preis/Wert als solcher
- Verwendungsmöglichkeiten
- Gewinnaussichten

**⚠️ Besonderheit:**
§ 119 II ist ein beachtlicher Motivirrtum - Ausnahme vom Grundsatz!

**Verkehrswesentlich bedeutet:**
1. Objektiv bedeutsam
2. Im konkreten Geschäft
3. Nach Verkehrsanschauung`,
          selfTest: {
            questions: [
              {
                id: 'q-bgb-6-2-1',
                question: 'K kauft ein "echtes Ölgemälde". Es stellt sich als Druck heraus. Anfechtungsgrund?',
                correctAnswer: 'Ja, Eigenschaftsirrtum nach § 119 II BGB. Die Echtheit ist eine verkehrswesentliche Eigenschaft eines Kunstwerks.'
              },
              {
                id: 'q-bgb-6-2-2',
                question: 'V kalkuliert intern mit 20% Gewinn, bietet aber nur den Endpreis an. Er verrechnet sich. Anfechtung?',
                correctAnswer: 'Nein, verdeckter Kalkulationsirrtum ist ein unbeachtlicher Motivirrtum. Keine Anfechtung möglich.'
              }
            ]
          }
        }
      ],
      resources: [],
      glossary: [
        {
          term: 'Erklärungsirrtum',
          definition: 'Irrtum im Erklärungsakt selbst - der Erklärende will eine Erklärung dieses Inhalts nicht abgeben'
        },
        {
          term: 'Inhaltsirrtum',
          definition: 'Irrtum über die Bedeutung der Erklärung - der Erklärende verbindet mit seiner Erklärung eine andere Vorstellung'
        },
        {
          term: 'Eigenschaftsirrtum',
          definition: 'Irrtum über verkehrswesentliche Eigenschaften einer Person oder Sache'
        },
        {
          term: 'Kalkulationsirrtum',
          definition: 'Rechenfehler bei der Preisbildung - berechtigt nie zur Anfechtung'
        }
      ]
    },
    requiredMastery: 85,
    estimatedMinutes: 1200,
    exercises: []
  },

  // 6.3 Anfechtung wegen Täuschung und Drohung (§ 123 BGB) (10 Stunden)
  {
    id: 'bgb-ke6-3-taeuschung-drohung',
    moduleId: 'bgb-at',
    order: 19,
    title: '6.3 Anfechtung wegen Täuschung und Drohung',
    objectives: [
      {
        id: 'obj-bgb-6-3-1',
        description: 'Die Tatbestände der arglistigen Täuschung und widerrechtlichen Drohung verstehen',
        bloomLevel: 'understand'
      },
      {
        id: 'obj-bgb-6-3-2',
        description: 'Die Besonderheiten gegenüber der Irrtumsanfechtung erkennen',
        bloomLevel: 'analyze'
      },
      {
        id: 'obj-bgb-6-3-3',
        description: 'Täuschung durch Dritte richtig einordnen',
        bloomLevel: 'apply'
      }
    ],
    content: {
      id: 'content-bgb-6-3',
      type: 'mixed',
      sections: [
        {
          id: 'section-bgb-6-3-1',
          title: '🎭 Arglistige Täuschung (§ 123 I Alt. 1)',
          content: `Die Anfechtung wegen arglistiger Täuschung schützt die Willensbildungsfreiheit.

**📋 Tatbestandsvoraussetzungen:**

**1. Täuschung:**
- Hervorrufen einer Fehlvorstellung
- Durch Vorspiegeln falscher Tatsachen
- Oder Entstellung/Unterdrückung wahrer Tatsachen

**Täuschung durch Unterlassen:**
- Nur bei Aufklärungspflicht
- Besondere Vertrauensstellung
- Gesetzliche Pflichten
- Erkennbar wesentliche Umstände

**2. Arglist:**
- Vorsatz bezüglich Täuschung
- Vorsatz bezüglich Irrtumserregung
- Bedingter Vorsatz genügt

**3. Kausalität:**
- Täuschung → Irrtum → Willenserklärung
- Mitursächlichkeit genügt

**4. Widerrechtlichkeit:**
- Grundsätzlich gegeben
- Ausnahme: Sozialadäquanz
- "Anpreisungen" im Handel

**🎯 Besonderheiten:**
- Kein § 122! (Kein Schadensersatz)
- Jahresfrist ab Entdeckung (§ 124)
- Motivirrtum ist beachtlich`,
          examples: [
            {
              id: 'ex-bgb-6-3-1',
              title: '🚗 Beispiel: Gebrauchtwagenkauf',
              content: `**Fall:**
V verkauft K ein Auto und behauptet wahrheitswidrig: "Unfallfreier Erstbesitz". Das Auto hatte einen erheblichen Vorschaden.

**Lösung:**
1. Täuschung (+): Falsche Tatsachenbehauptung
2. Arglist (+): V wusste vom Unfall
3. Kausalität (+): K hätte sonst nicht gekauft
4. Widerrechtlichkeit (+): Keine Ausnahme
→ Anfechtung nach § 123 I möglich
→ Kein Schadensersatz nach § 122!`,
              explanation: 'Bei arglistiger Täuschung trägt der Täuschende das volle Risiko.'
            }
          ]
        },
        {
          id: 'section-bgb-6-3-2',
          title: '⚔️ Widerrechtliche Drohung (§ 123 I Alt. 2)',
          content: `Die Anfechtung wegen Drohung schützt die Entschließungsfreiheit.

**📋 Tatbestandsvoraussetzungen:**

**1. Drohung:**
- Inaussichtstellen eines Übels
- Dessen Eintritt vom Drohenden abhängt
- Ernstgemeint und ernstzunehmen

**2. Widerrechtlichkeit:**

**Mittel-Zweck-Relation:**
Die Drohung ist widerrechtlich, wenn:
- Das Mittel (Übel) rechtswidrig ODER
- Der Zweck rechtswidrig ODER  
- Die Verbindung von Mittel und Zweck

**Beispiele widerrechtlich:**
- Drohung mit Strafanzeige für Vertragsschluss
- Drohung mit Kündigung für Verzicht
- Drohung mit wahrer Tatsache zur Erpressung

**Beispiele rechtmäßig:**
- Kündigungsdrohung bei Pflichtverletzung
- Klagedrohung bei berechtigter Forderung

**3. Kausalität:**
- Drohung muss (mit-)ursächlich sein
- Subjektive Zwangslage

**4. Vorsatz:**
- Bezüglich aller Tatbestandsmerkmale
- Bedingter Vorsatz genügt`,
          memoryAids: [
            {
              id: 'mem-bgb-6-3-1',
              title: '🧠 Merkhilfe § 123',
              content: `**Täuschung vs. Drohung:**

**T**äuschung = **T**atsachen (falsch darstellen)
**D**rohung = **D**ruck (Übel androhen)

**Gemeinsamkeiten:**
- Kein § 122 (kein Schadensersatz)
- § 124 (Jahresfrist)
- Willensbildung betroffen`
            }
          ]
        },
        {
          id: 'section-bgb-6-3-3',
          title: '👥 Täuschung durch Dritte (§ 123 II)',
          content: `Sonderregelung für Fälle, in denen nicht der Vertragspartner täuscht.

**📋 Die Regelung:**

**§ 123 II S. 1:**
"Hat ein Dritter die Täuschung verübt, so ist eine Erklärung, die einem anderen gegenüber abzugeben war, nur dann anfechtbar, wenn dieser die Täuschung kannte oder kennen musste."

**Voraussetzungen:**
1. Täuschung durch Dritten
2. Kenntnis/Kennenmüssen des Erklärungsempfängers

**Dritter ist:**
- Nicht Erklärungsempfänger
- Nicht Vertreter
- Nicht Verhandlungsgehilfe

**Kennen müssen:**
- Fahrlässige Unkenntnis
- Grobe Fahrlässigkeit genügt
- Untersuchungspflichten beachten

**§ 123 II S. 2:**
"Soweit ein anderer als derjenige, welchem gegenüber die Erklärung abzugeben war, aus der Erklärung ein Recht erworben hat, ist die Erklärung ihm gegenüber anfechtbar, wenn er die Täuschung kannte oder kennen musste."

**Beispiel:**
A verkauft B ein Grundstück. C (Makler) täuscht A über den Wert.
- B kennt Täuschung nicht → Keine Anfechtung
- B kennt Täuschung → Anfechtung möglich`,
          selfTest: {
            questions: [
              {
                id: 'q-bgb-6-3-1',
                question: 'Muss der Anfechtende bei arglistiger Täuschung Schadensersatz nach § 122 leisten?',
                correctAnswer: 'Nein! § 122 gilt nur bei §§ 119, 120. Bei § 123 keine Schadensersatzpflicht des Anfechtenden.'
              },
              {
                id: 'q-bgb-6-3-2',
                question: 'A droht B: "Wenn du nicht verkaufst, zeige ich dich wegen Steuerhinterziehung an." B hat tatsächlich Steuern hinterzogen. Widerrechtliche Drohung?',
                correctAnswer: 'Ja, die Verknüpfung von Strafanzeige und Vertragsschluss ist widerrechtlich (unzulässige Mittel-Zweck-Relation).'
              }
            ]
          }
        }
      ],
      resources: [],
      glossary: [
        {
          term: 'Arglist',
          definition: 'Vorsätzliches Handeln in Kenntnis der Täuschung und des dadurch hervorgerufenen Irrtums'
        },
        {
          term: 'Widerrechtliche Drohung',
          definition: 'Drohung, bei der Mittel, Zweck oder deren Verknüpfung rechtswidrig sind'
        },
        {
          term: 'Dritter',
          definition: 'Person, die weder Erklärungsempfänger noch dessen Vertreter oder Gehilfe ist'
        }
      ]
    },
    requiredMastery: 85,
    estimatedMinutes: 600,
    exercises: []
  },

  // 6.4 Rechtsfolgen und besondere Probleme (10 Stunden)
  {
    id: 'bgb-ke6-4-rechtsfolgen',
    moduleId: 'bgb-at',
    order: 20,
    title: '6.4 Rechtsfolgen und besondere Probleme',
    objectives: [
      {
        id: 'obj-bgb-6-4-1',
        description: 'Die Rechtsfolgen der Anfechtung vollständig erfassen',
        bloomLevel: 'understand'
      },
      {
        id: 'obj-bgb-6-4-2',
        description: 'Schadensersatz nach § 122 BGB berechnen können',
        bloomLevel: 'apply'
      },
      {
        id: 'obj-bgb-6-4-3',
        description: 'Teilnichtigkeit und Geschäftsgrundlage abgrenzen',
        bloomLevel: 'analyze'
      },
      {
        id: 'obj-bgb-6-4-4',
        description: 'Die Störung der Geschäftsgrundlage anwenden',
        bloomLevel: 'apply'
      }
    ],
    content: {
      id: 'content-bgb-6-4',
      type: 'mixed',
      sections: [
        {
          id: 'section-bgb-6-4-1',
          title: '⚖️ Rechtsfolgen der Anfechtung',
          content: `Die erfolgreiche Anfechtung führt zur Nichtigkeit ex tunc mit weiteren Folgen.

**📋 Hauptrechtsfolge (§ 142 BGB):**

**Nichtigkeit ex tunc:**
- Von Anfang an nichtig
- Rückwirkende Vernichtung
- Als nie geschehen

**Ausnahme:**
- Dauerschuldverhältnisse ex nunc
- Vermeidung von Rückabwicklungsproblemen

**💰 Schadensersatz (§ 122 BGB):**

**Voraussetzungen:**
1. Anfechtung nach §§ 119, 120
2. NICHT bei § 123!
3. Vertrauen des Gegners
4. Kein Kennen/Kennenmüssen

**Umfang:**
- Vertrauensschaden (negatives Interesse)
- Nicht Erfüllungsschaden!
- Grenze: Erfüllungsinteresse

**Berechnung:**
1. Vermögenslage mit Vertrag (hypothetisch)
2. Vermögenslage ohne Vertrag (real)
3. Differenz = Schaden

**Typische Posten:**
- Vertragskosten
- Gutachterkosten
- Entgangener Gewinn aus Alternativgeschäft
- Vergebliche Aufwendungen`,
          examples: [
            {
              id: 'ex-bgb-6-4-1',
              title: '💶 Beispiel: § 122 Berechnung',
              content: `**Fall:**
K ficht Autokauf (50.000 €) wegen Irrtums an.
V hatte bereits:
- Inserat: 500 €
- Überführung vorbereitet: 1.000 €
- Anderes Angebot abgelehnt: 52.000 €

**Schadensberechnung:**
- Inseratskosten: 500 €
- Überführungskosten: 1.000 €
- Entgangener Gewinn: 2.000 €
- Gesamt: 3.500 €

**Aber:** Grenze bei 50.000 € (Erfüllungsinteresse)`,
              explanation: 'Der Vertrauensschaden darf das Erfüllungsinteresse nicht übersteigen.'
            }
          ]
        },
        {
          id: 'section-bgb-6-4-2',
          title: '✂️ Teilnichtigkeit (§ 139 BGB)',
          content: `Ist nur ein Teil des Rechtsgeschäfts nichtig, stellt sich die Frage nach dem Schicksal des Restes.

**📋 Die Regelung des § 139:**

**Grundsatz:**
"Ist ein Teil eines Rechtsgeschäfts nichtig, so ist das ganze Rechtsgeschäft nichtig..."

**Ausnahme:**
"...wenn nicht anzunehmen ist, dass es auch ohne den nichtigen Teil vorgenommen sein würde."

**Prüfung:**
1. **Teilnichtigkeit vorhanden?**
2. **Objektive Teilbarkeit?**
3. **Hypothetischer Parteiwille?**

**Maßgeblicher Zeitpunkt:**
- Geschäftsabschluss
- Nicht Anfechtungszeitpunkt!

**🔄 Umdeutung (§ 140 BGB):**

**Voraussetzungen:**
1. Nichtiges Rechtsgeschäft
2. Erfüllt Voraussetzungen eines anderen
3. Anzunehmender Parteiwille
4. Kein Formverstoß

**Beispiele:**
- Nichtige Kündigung → Änderungskündigung
- Nichtiger Hauptvertrag → Vorvertrag
- Nichtige Schenkung → Leihe`,
          memoryAids: [
            {
              id: 'mem-bgb-6-4-1',
              title: '🧠 Merkhilfe § 139',
              content: `**T**eilnichtigkeit führt zur
**T**otalnichtigkeit, außer
**R**estwirksamkeit gewollt

Merke: **"TTR"** = "Teil-Total-Rest"`
            }
          ]
        },
        {
          id: 'section-bgb-6-4-3',
          title: '🏗️ Störung der Geschäftsgrundlage (§ 313)',
          content: `Der gemeinsame Motivirrtum und nachträgliche Änderungen können zur Vertragsanpassung führen.

**📋 Begriff der Geschäftsgrundlage:**

**Definition:**
Umstände, die zur Grundlage des Vertrags geworden sind, ohne Vertragsinhalt zu sein.

**Voraussetzungen § 313:**
1. **Wesentliche Umstände**
2. **Grundlage des Vertrags geworden**
3. **Veränderung/Nichtvorhandensein**
4. **Unzumutbarkeit der Bindung**

**Arten:**
- **Subjektive:** Gemeinsame Vorstellungen
- **Objektive:** Erwarteter Geschäftszweck

**Fallgruppen:**
1. **Äquivalenzstörung** (Leistung/Gegenleistung)
2. **Zweckstörung** (Verwendungszweck entfällt)
3. **Gemeinsamer Irrtum**

**📊 Rechtsfolgen:**

**1. Stufe: Vertragsanpassung**
- Vorrang vor Auflösung
- Interessengerechte Lösung
- Risikozuweisung beachten

**2. Stufe: Rücktritt/Kündigung**
- Nur wenn Anpassung unmöglich
- Oder unzumutbar
- Bei Dauerschuldverhältnis: Kündigung`,
          selfTest: {
            questions: [
              {
                id: 'q-bgb-6-4-1',
                question: 'V und K einigen sich auf einen Kaufpreis von "4x100=500 €". Anfechtung oder Geschäftsgrundlage?',
                correctAnswer: 'Geschäftsgrundlage (§ 313). Beide haben sich geirrt (gemeinsamer Motivirrtum). Vertragsanpassung auf 400 €.'
              },
              {
                id: 'q-bgb-6-4-2',
                question: 'Nach § 139 BGB führt Teilnichtigkeit im Zweifel zur...?',
                correctAnswer: 'Totalnichtigkeit. Nur wenn anzunehmen ist, dass das Geschäft auch ohne den nichtigen Teil vorgenommen worden wäre, bleibt der Rest wirksam.'
              }
            ]
          }
        }
      ],
      resources: [],
      glossary: [
        {
          term: 'Vertrauensschaden',
          definition: 'Schaden durch Vertrauen auf die Gültigkeit des Rechtsgeschäfts (negatives Interesse)'
        },
        {
          term: 'Teilnichtigkeit',
          definition: 'Nur ein Teil des Rechtsgeschäfts ist nichtig, Frage nach Gesamtnichtigkeit'
        },
        {
          term: 'Geschäftsgrundlage',
          definition: 'Umstände, die Grundlage des Vertrags geworden sind, ohne Vertragsinhalt zu sein'
        },
        {
          term: 'Umdeutung',
          definition: 'Nichtiges Rechtsgeschäft gilt als anderes wirksames Geschäft'
        }
      ]
    },
    requiredMastery: 85,
    estimatedMinutes: 600,
    exercises: []
  }
];

// Exercises for all units in Kurseinheit 6
const exercisesKE6: Exercise[] = [
  // Exercises for 6.1 Grundlagen
  {
    id: 'ex-bgb-ke6-1-1',
    type: 'multipleChoice',
    difficulty: 'beginner',
    points: 10,
    content: {
      question: 'Welche Wirkung hat die Anfechtung nach § 142 BGB?',
      options: [
        'Das Rechtsgeschäft wird für die Zukunft unwirksam',
        'Das Rechtsgeschäft ist von Anfang an nichtig',
        'Das Rechtsgeschäft bleibt wirksam',
        'Das Rechtsgeschäft ist schwebend unwirksam'
      ]
    },
    solution: {
      correct: 'Das Rechtsgeschäft ist von Anfang an nichtig',
      explanation: 'Die Anfechtung wirkt ex tunc (von Anfang an). Das Rechtsgeschäft wird so behandelt, als wäre es nie wirksam gewesen.'
    }
  },
  {
    id: 'ex-bgb-ke6-1-2',
    type: 'trueFalse',
    difficulty: 'intermediate',
    points: 10,
    content: {
      question: 'Die Anfechtungserklärung kann widerrufen werden, solange sie dem Anfechtungsgegner noch nicht zugegangen ist.'
    },
    solution: {
      correct: false,
      explanation: 'Die Anfechtungserklärung ist als Gestaltungsrecht unwiderruflich. Auch ein Widerruf vor Zugang ist nicht möglich.'
    }
  },

  // Exercises for 6.2 Irrtum
  {
    id: 'ex-bgb-ke6-2-1',
    type: 'caseAnalysis',
    difficulty: 'intermediate',
    points: 25,
    content: {
      question: 'Prüfen Sie die Anfechtungsmöglichkeiten:',
      scenario: `A bestellt bei B "100 Gros Bleistifte". A dachte, ein Gros seien 12 Stück. Tatsächlich ist ein Gros = 144 Stück. A wollte nur 1.200 Bleistifte, bestellt hat er aber 14.400.`,
      tasks: [
        'Welche Art von Irrtum liegt vor?',
        'Kann A anfechten?',
        'Welche Rechtsfolgen ergeben sich?'
      ]
    },
    solution: {
      correct: {
        structure: `I. Art des Irrtums
   - Inhaltsirrtum § 119 I Alt. 1
   - A irrt über Bedeutung von "Gros"
   - Erklärung gewollt, aber falsch verstanden

II. Anfechtbarkeit
   1. Irrtum über Inhalt (+)
   2. Bei Kenntnis nicht abgegeben (+)
   3. Anfechtung möglich

III. Rechtsfolgen
    - § 142: Vertrag nichtig ex tunc
    - § 122: Schadensersatz an B
    - Vertrauensschaden`,
        keyPoints: [
          'Klassischer Inhaltsirrtum',
          'Begriff "Gros" falsch verstanden',
          'Anfechtung möglich, aber Schadensersatz'
        ]
      },
      explanation: 'Dies ist ein typischer Fall eines Inhaltsirrtums über die Bedeutung eines Fachbegriffs.'
    }
  },
  {
    id: 'ex-bgb-ke6-2-2',
    type: 'problemSolving',
    difficulty: 'advanced',
    points: 30,
    content: {
      question: 'Lösen Sie den Kalkulationsirrtum-Fall:',
      scenario: `Dachdecker D kalkuliert für Kunde K eine Dachsanierung. Er rechnet K vor:
- Material: 5.000 €
- Arbeit: 3.000 €  
- Summe: 10.000 €
K nimmt das Angebot an. D bemerkt seinen Rechenfehler.`,
      tasks: [
        'Kann D wegen Irrtums anfechten?',
        'Welche anderen Lösungsmöglichkeiten bestehen?',
        'Wie ist der Fall zu lösen?'
      ]
    },
    solution: {
      correct: {
        analysis: `1. Anfechtung: NEIN
   - Offener Kalkulationsirrtum
   - Kein Fall des § 119 BGB
   - BGH: Keine Anfechtung

2. Andere Lösungen:
   a) Auslegung §§ 133, 157
      - Erkennbarer Rechenfehler?
      - Ggf. Einigung über 8.000 €
   
   b) Geschäftsgrundlage § 313
      - Gemeinsamer Irrtum
      - Beide gingen von richtiger Addition aus
      - Vertragsanpassung auf 8.000 €

3. Ergebnis: Vertragsanpassung auf 8.000 €`,
        conclusion: 'Der Fall ist über Auslegung oder § 313 BGB zu lösen, nicht über Anfechtung.'
      },
      explanation: 'Kalkulationsirrtümer berechtigen nie zur Anfechtung, auch nicht bei offener Kalkulation.'
    }
  },

  // Exercises for 6.3 Täuschung und Drohung
  {
    id: 'ex-bgb-ke6-3-1',
    type: 'multipleChoice',
    difficulty: 'intermediate',
    points: 15,
    content: {
      question: 'Bei welcher Konstellation muss der Anfechtende KEINEN Schadensersatz nach § 122 leisten?',
      options: [
        'Anfechtung wegen Erklärungsirrtums',
        'Anfechtung wegen Eigenschaftsirrtums',
        'Anfechtung wegen arglistiger Täuschung',
        'Anfechtung wegen Übermittlungsirrtums'
      ]
    },
    solution: {
      correct: 'Anfechtung wegen arglistiger Täuschung',
      explanation: '§ 122 gilt nur bei Anfechtung nach §§ 119, 120. Bei § 123 (Täuschung/Drohung) keine Schadensersatzpflicht.'
    }
  },
  {
    id: 'ex-bgb-ke6-3-2',
    type: 'dragDrop',
    difficulty: 'intermediate',
    points: 20,
    content: {
      question: 'Ordnen Sie die Fälle der richtigen Anfechtungsnorm zu:',
      items: [
        'Versprechen beim Vertragsschluss',
        'Drohung mit Strafanzeige',
        'Verwechslung der Person',
        'Falschangabe über Unfallfreiheit'
      ],
      targets: [
        '§ 119 I Alt. 1 (Inhaltsirrtum)',
        '§ 119 I Alt. 2 (Erklärungsirrtum)', 
        '§ 123 I Alt. 1 (Täuschung)',
        '§ 123 I Alt. 2 (Drohung)'
      ]
    },
    solution: {
      correct: {
        '§ 119 I Alt. 1 (Inhaltsirrtum)': ['Verwechslung der Person'],
        '§ 119 I Alt. 2 (Erklärungsirrtum)': ['Versprechen beim Vertragsschluss'],
        '§ 123 I Alt. 1 (Täuschung)': ['Falschangabe über Unfallfreiheit'],
        '§ 123 I Alt. 2 (Drohung)': ['Drohung mit Strafanzeige']
      },
      explanation: 'Jeder Anfechtungsgrund hat spezifische Voraussetzungen und muss genau geprüft werden.'
    }
  },

  // Exercises for 6.4 Rechtsfolgen
  {
    id: 'ex-bgb-ke6-4-1',
    type: 'fillInBlanks',
    difficulty: 'intermediate',
    points: 15,
    content: {
      question: 'Ergänzen Sie die Rechtsfolgen:',
      context: 'Bei erfolgreicher Anfechtung ist das Rechtsgeschäft nach § 142 von _____ an _____. Der Anfechtende muss bei §§ 119, 120 nach § 122 _____ leisten. Die Grenze ist das _____.',
      blanks: 4
    },
    solution: {
      correct: ['Anfang', 'nichtig', 'Schadensersatz', 'Erfüllungsinteresse'],
      explanation: 'Die Anfechtung wirkt ex tunc, löst aber bei Irrtum eine Schadensersatzpflicht aus.'
    }
  },
  {
    id: 'ex-bgb-ke6-4-2',
    type: 'caseAnalysis',
    difficulty: 'advanced',
    points: 30,
    content: {
      question: 'Prüfen Sie § 313 BGB:',
      scenario: `V verkauft K ein Grundstück für 500.000 €. Beide gehen davon aus, dass eine Baugenehmigung erteilt wird. Nach Vertragsschluss wird der Bebauungsplan geändert, Bauverbot.`,
      tasks: [
        'Liegt eine Störung der Geschäftsgrundlage vor?',
        'Welche Voraussetzungen sind zu prüfen?',
        'Welche Rechtsfolgen kommen in Betracht?'
      ]
    },
    solution: {
      correct: {
        structure: `I. Geschäftsgrundlage
   1. Bebaubarkeit = wesentlicher Umstand (+)
   2. Gemeinsame Vorstellung (+)
   3. Nachträglicher Wegfall (+)
   4. Unzumutbarkeit für K (+)

II. Rechtsfolgen
   1. Vorrang: Vertragsanpassung
      - Kaufpreisreduzierung
      - Angemessene Lösung
   
   2. Nachrang: Rücktritt
      - Nur wenn Anpassung unmöglich
      - Oder unzumutbar

III. Ergebnis
    - Primär Kaufpreisanpassung
    - Hilfsweise Rücktrittsrecht`,
        keyPoints: [
          'Bebaubarkeit war Geschäftsgrundlage',
          'Nachträgliche Zweckstörung',
          'Vorrang der Anpassung vor Auflösung'
        ]
      },
      explanation: 'Die Bebaubarkeit eines Grundstücks ist typischerweise Geschäftsgrundlage beim Grundstückskauf.'
    }
  }
];

// Add exercises to units (distribute evenly)
kurseinheit6BGBUnits[0].exercises = exercisesKE6.slice(0, 2); // First 2 for unit 1
kurseinheit6BGBUnits[1].exercises = exercisesKE6.slice(2, 4); // Next 2 for unit 2
kurseinheit6BGBUnits[2].exercises = exercisesKE6.slice(4, 6); // Next 2 for unit 3
kurseinheit6BGBUnits[3].exercises = exercisesKE6.slice(6, 8); // Last 2 for unit 4