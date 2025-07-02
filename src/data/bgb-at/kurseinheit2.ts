import { LearningUnit, Exercise } from '../../types/learning';

// KURSEINHEIT 2: Rechtsgeschäft und Willenserklärung (55101-02)
// Basierend auf FernUni Hagen PDF 55101-02-S#1-2001622.pdf
// Autoren: Prof. Dr. Sebastian Kubis, Prof. Dr. Ulrich Eisenhardt

export const kurseinheit2BGBUnits: LearningUnit[] = [
  // 2.1 Rechtsgeschäft und Willenserklärung - Grundlagen (20 Stunden)
  {
    id: 'bgb-ke2-1-rechtsgeschaeft',
    moduleId: 'bgb-at',
    order: 3,
    title: '2.1 Rechtsgeschäft und Willenserklärung - Grundlagen',
    objectives: [
      {
        id: 'obj-bgb-2-1-1',
        description: 'Den Begriff des Rechtsgeschäfts verstehen und definieren können',
        bloomLevel: 'understand'
      },
      {
        id: 'obj-bgb-2-1-2',
        description: 'Die Struktur von Willenserklärungen analysieren können',
        bloomLevel: 'analyze'
      },
      {
        id: 'obj-bgb-2-1-3',
        description: 'Objektiven und subjektiven Tatbestand unterscheiden',
        bloomLevel: 'analyze'
      },
      {
        id: 'obj-bgb-2-1-4',
        description: 'Bewusste Willensmängel erkennen und bewerten',
        bloomLevel: 'evaluate'
      }
    ],
    content: {
      id: 'content-bgb-2-1',
      type: 'mixed',
      sections: [
        {
          id: 'section-bgb-2-1-1',
          title: '🎯 Begriff und Bedeutung des Rechtsgeschäfts',
          content: `Das Rechtsgeschäft ist das zentrale Instrument zur Verwirklichung der Privatautonomie.

**🎯 Definition Rechtsgeschäft:**
Ein Rechtsgeschäft besteht aus einer oder mehreren Willenserklärungen, die allein oder in Verbindung mit anderen Tatbestandsmerkmalen eine Rechtsfolge herbeiführen, weil sie gewollt ist.

**🔑 Kernmerkmale des Rechtsgeschäfts:**

**1. Willenserklärung(en) als Grundbaustein**
- Mindestens eine Willenserklärung erforderlich
- Bei Verträgen: mindestens zwei korrespondierende WE
- Bei einseitigen RG: eine empfangsbedürftige/nicht empfangsbedürftige WE

**2. Gewollte Rechtsfolge**
- Unterscheidung zu gesetzlichen Rechtsfolgen
- Private Rechtsgestaltung durch Willensakt
- Rechtsbindungswille erforderlich

**3. Verwirklichung der Privatautonomie**
- Selbstbestimmung über eigene Rechtsverhältnisse
- Grenzen durch Gesetz und Sittenwidrigkeitsverbot

**📊 Systematik der Rechtsgeschäfte:**

| Kriterium | Arten | Beispiele |
|-----------|--------|-----------|
| **Beteiligungsgrad** | Einseitig / Mehrseitig | Testament / Kaufvertrag |
| **Empfangsbedürftigkeit** | Empfangsbedürftig / Nicht empfangsbedürftig | Kündigung / Testament |
| **Rechtswirkung** | Verpflichtend / Verfügend | Kaufvertrag / Übereignung |
| **Entgeltlichkeit** | Entgeltlich / Unentgeltlich | Kauf / Schenkung |

**⚖️ Abgrenzung zu anderen Rechtshandlungen:**

**Rechtsgeschäft vs. Realakt:**
- **Rechtsgeschäft:** Rechtsfolge tritt ein, weil sie gewollt ist
- **Realakt:** Rechtsfolge tritt kraft Gesetzes ein (z.B. Fund)

**Rechtsgeschäft vs. Geschäftsähnliche Handlung:**
- **Rechtsgeschäft:** Rechtsbindungswille erforderlich
- **Geschäftsähnliche Handlung:** Nur Handlungswille nötig (z.B. Mahnung)`,
          examples: [
            {
              id: 'ex-bgb-2-1-1',
              title: '🏪 Beispiel: Kaufvertrag als Rechtsgeschäft',
              content: `**Sachverhalt:** K betritt den Laden des V und sagt: "Ich kaufe diese Zeitung für 2 €." V antwortet: "Einverstanden."

**Analyse als Rechtsgeschäft:**
1. **Willenserklärungen:** 
   - Angebot des K: "Ich kaufe..."
   - Annahme des V: "Einverstanden"
   
2. **Gewollte Rechtsfolge:** 
   - Entstehung von Kaufvertragspflichten (§ 433 BGB)
   - V: Übergabe- und Übereignungspflicht
   - K: Kaufpreiszahlungspflicht

3. **Privatautonomie:** 
   - Beide Parteien gestalten bewusst ihre Rechtslage
   - Rechtsbindungswille bei beiden vorhanden

**Ergebnis:** Wirksamer Kaufvertrag als mehrseitiges Rechtsgeschäft`,
              explanation: 'Zeigt die praktische Anwendung der Rechtsgeschäftslehre im Alltag.'
            }
          ]
        },
        {
          id: 'section-bgb-2-1-2',
          title: '🧠 Die Willenserklärung - Struktur und Elemente',
          content: `Die Willenserklärung ist der Grundbaustein jeden Rechtsgeschäfts.

**🎯 Definition Willenserklärung:**
Eine Willenserklärung ist eine private Willensäußerung, die unmittelbar auf die Herbeiführung einer Rechtsfolge gerichtet ist.

**🏗️ Aufbau der Willenserklärung:**

**I. Objektiver Tatbestand (Erklärung)**
- **Äußerer Erklärungsakt:** Sichtbares Verhalten
- **Erklärungswert:** Objektive Deutbarkeit
- **Empfängerhorizont:** Verständnis des Erklärungsempfängers

**II. Subjektiver Tatbestand (Wille)**
- **Handlungswille:** Bewusstes Handeln
- **Erklärungsbewusstsein:** Wissen um Erklärungscharakter
- **Geschäftswille:** Wille zu bestimmter Rechtsfolge

**🔍 Die drei Willenselemente im Detail:**

**1. Handlungswille:**
- Bewusste Körperbewegung oder Unterlassen
- Fehlt bei: Reflexhandlungen, Bewusstlosigkeit, Schlaf
- Nicht erforderlich: Wissen um Rechtswirkungen

**2. Erklärungsbewusstsein:**
- Bewusstsein, eine rechtlich erhebliche Erklärung abzugeben
- **Streitig:** Erforderlichkeit im BGB
- **h.M.:** Potentielles Erklärungsbewusstsein genügt

**3. Geschäftswille:**
- Wille zur Herbeiführung einer bestimmten Rechtsfolge
- Spezielle Vorstellung über Rechtsgeschäftstyp
- **Wichtig:** Unterschied zu Rechtsbindungswille

**⚡ Besonderheiten:**

**Rechtsbindungswille:**
- Wille zur rechtlichen Bindung überhaupt
- Fehlt bei: Gefälligkeitsverhältnissen, sozialen Kontakten
- **Indizien:** Förmlichkeit, wirtschaftlicher Wert, Schriftform

**Konkludentes Verhalten:**
- Willenserklärung durch schlüssiges Verhalten
- Objektiv erkennbarer Erklärungswert
- Beispiele: Nicken, Handzeichen, faktisches Verhalten`,
          examples: [
            {
              id: 'ex-bgb-2-1-2',
              title: '🚌 Beispiel: Konkludente Willenserklärung',
              content: `**Sachverhalt:** F steigt in den Bus und setzt sich, ohne ein Wort zu sagen. Der Busfahrer fährt los.

**Analyse der Willenserklärung:**

**Objektiver Tatbestand:**
- **Erklärungsakt:** Einsteigen und Hinsetzen
- **Erklärungswert:** Im Rechtsverkehr übliche Beförderungsaufforderung
- **Empfängerhorizont:** Busfahrer versteht dies als Beförderungswunsch

**Subjektiver Tatbestand:**
- **Handlungswille:** (+) Bewusstes Einsteigen
- **Erklärungsbewusstsein:** (+) F weiß, dass sein Verhalten als rechtsgeschäftliche Erklärung verstanden wird
- **Geschäftswille:** (+) F will Beförderungsvertrag schließen

**Rechtsbindungswille:** (+) Vertraglicher Charakter bei ÖPNV

**Ergebnis:** Wirksame konkludente Willenserklärung zum Abschluss eines Beförderungsvertrags`,
              explanation: 'Zeigt, wie Willenserklärungen auch ohne Worte abgegeben werden können.'
            }
          ],
          memoryAids: [
            {
              id: 'mem-bgb-2-1-1',
              title: '🧠 Merkhilfe: Willenselemente',
              content: `**H**andlungswille (bewusst handeln)
**E**rklärungsbewusstsein (weiß um Erklärung)
**G**eschäftswille (will bestimmte Rechtsfolge)

= **HEG** (Hat Er Gewollt?)`
            }
          ]
        },
        {
          id: 'section-bgb-2-1-3',
          title: '🎭 Objektiver und subjektiver Tatbestand',
          content: `Die Unterscheidung zwischen objektivem und subjektivem Tatbestand ist fundamental.

**⚖️ Das Spannungsverhältnis:**
Was passiert, wenn objektiver und subjektiver Tatbestand auseinanderfallen?

**📊 Problemkonstellationen:**

**1. Objektiver Tatbestand (+), subjektiver Tatbestand (-)**
- **Beispiel:** Scherzerklärung, die ernst genommen wird
- **Regel:** Willenserklärung liegt vor
- **Rechtsfolge:** Anfechtung wegen Erklärungsirrtums möglich

**2. Objektiver Tatbestand (-), subjektiver Tatbestand (+)**
- **Beispiel:** Innerlich gewollte, aber missverständliche Äußerung
- **Regel:** Keine Willenserklärung
- **Grund:** Schutz des Rechtsverkehrs erfordert Erkennbarkeit

**🎯 Grundsatz der Verkehrstheorie:**
Die objektive Erklärung ist maßgeblich, da der Rechtsverkehr auf die Erkennbarkeit von Willenserklärungen angewiesen ist.

**🔍 Auslegung von Willenserklärungen:**

**Auslegungsmaßstab:**
- **Empfängerhorizont:** Wie versteht ein vernünftiger Empfänger?
- **Objektive Umstände:** Gesamtsituation berücksichtigen
- **Andeutungstheorie:** Auch versteckte Hinweise beachten

**Auslegungsreihenfolge:**
1. **Wortlaut** der Erklärung
2. **Begleitumstände** der Abgabe
3. **Üblicher Geschäftsverkehr**
4. **Interessenlage** der Beteiligten

**⚡ Besondere Fälle:**

**Falsa demonstratio non nocet:**
- Unrichtige Bezeichnung schadet nicht
- Wenn der wahre Wille erkennbar ist
- Beispiel: "Mein BMW" (meint aber seinen einzigen Mercedes)

**Schweigen:**
- Grundsätzlich keine Willenserklärung
- Ausnahmen bei besonderen Umständen
- Wichtig für kaufmännisches Bestätigungsschreiben`,
          examples: [
            {
              id: 'ex-bgb-2-1-3',
              title: '🃏 Beispiel: Scherzerklärung',
              content: `**Sachverhalt:** A sagt zu B im Scherz: "Ich verkaufe dir mein Auto für 1 €." B, der den Scherz nicht erkennt, sagt: "Einverstanden!"

**Rechtliche Bewertung:**

**Objektiver Tatbestand (A's Erklärung):**
- (+) Äußerung eines Verkaufsangebots
- (+) Für Empfänger B als ernst gemeint erkennbar
- (+) Alle wesentlichen Vertragsbestandteile enthalten

**Subjektiver Tatbestand (A's Wille):**
- (+) Handlungswille: Bewusste Äußerung
- (-) Geschäftswille: A will nicht wirklich verkaufen
- (±) Erklärungsbewusstsein: A weiß um Erklärungscharakter

**Rechtsfolge:**
1. **Willenserklärung liegt vor** (objektiver Tatbestand maßgeblich)
2. **Anfechtung möglich** nach § 119 I BGB (Erklärungsirrtum)
3. **Schadensersatz** nach § 122 BGB möglich

**Ergebnis:** Grundsätzlich wirksames Angebot, aber anfechtbar`,
              explanation: 'Zeigt das Primat des objektiven Tatbestands und Schutzwirkung der Anfechtung.'
            }
          ],
          selfTest: {
            questions: [
              {
                id: 'q-bgb-2-1-1',
                question: 'Was ist maßgeblich, wenn objektiver und subjektiver Tatbestand einer Willenserklärung auseinanderfallen?',
                correctAnswer: 'Der objektive Tatbestand ist maßgeblich. Die Willenserklärung ist wirksam, aber möglicherweise anfechtbar.'
              }
            ]
          }
        },
        {
          id: 'section-bgb-2-1-4',
          title: '⚠️ Bewusste Willensmängel',
          content: `Bewusste Willensmängel liegen vor, wenn der Erklärende weiß, dass seine Erklärung nicht seinem wahren Willen entspricht.

**📋 Kategorien bewusster Willensmängel:**

**1. Scherzerklärung:**
- Erklärung im Bewusstsein, nicht ernst genommen zu werden
- **Problem:** Was, wenn Erklärung doch ernst genommen wird?
- **Lösung:** Anfechtung nach § 118 BGB möglich

**2. Geheimvorbehalt (§ 116 BGB):**
- Erklärende behält sich innerlich vor, nicht zu wollen
- **Regel:** Erklärung bleibt wirksam
- **Ausnahme:** Empfänger kennt den Vorbehalt

**3. Zum Schein abgegebene Erklärung (§ 117 BGB):**
- Beide Parteien wissen um den Scheincharakter
- **Rechtsfolge:** Scheingeschäft nichtig
- **Verdecktes Geschäft:** Kann nach § 117 II BGB wirksam sein

**🎯 Systematik der Rechtsfolgen:**

| Willensmangl | Rechtsfolge | Besonderheit |
|--------------|-------------|--------------|
| **Scherzerklärung** | Anfechtbar (§ 118) | Nur wenn ernst genommen |
| **Geheimvorbehalt** | Wirksam (§ 116 I) | Außer bei Kenntnis |
| **Scheingeschäft** | Nichtig (§ 117 I) | Verdecktes RG prüfen |

**🔍 Praktische Abgrenzungen:**

**Scherz vs. Geheimvorbehalt:**
- **Scherz:** Soll nicht ernst genommen werden
- **Geheimvorbehalt:** Soll ernst genommen werden, aber innerlicher Vorbehalt

**Scheingeschäft vs. Simulation:**
- **Scheingeschäft:** Beide kennen wahre Sachlage
- **Simulation:** Bewusste Täuschung des Rechtsverkehrs

**⚡ Besondere Problemfälle:**

**Ironische Äußerungen:**
- Grenzbereich zwischen Scherz und Ernst
- Maßgeblich: Empfängerhorizont
- Kontext und Begleitumstände entscheidend

**Verhandlungstaktik:**
- Bewusst überhöhte Forderungen
- Meist als ernsthafte Verhandlungsgrundlage zu werten
- Ausnahme: Offensichtlich unseriöse Angebote`,
          examples: [
            {
              id: 'ex-bgb-2-1-4',
              title: '🎭 Beispiel: Scheingeschäft mit verdecktem Geschäft',
              content: `**Sachverhalt:** A "verkauft" seinem Sohn S das Familienhaus für 1 €, um es vor Gläubigern zu schützen. Beide wissen, dass S das Haus zurückübertragen soll, wenn die Gefahr vorbei ist.

**Rechtliche Bewertung:**

**Scheingeschäft (§ 117 I BGB):**
- (+) Beide Parteien wissen um Scheincharakter
- (+) Wollen nicht wirklich Kaufvertrag
- **Rechtsfolge:** Kaufvertrag nichtig

**Verdecktes Geschäft (§ 117 II BGB):**
- **Inhalt:** Treuhandvertrag/Verwahrungsvertrag
- **Prüfung:** Entspricht es den gesetzlichen Anforderungen?
- **Problem:** Eventuell sittenwidrig (§ 138 BGB)

**Gläubigerschutz:**
- **Anfechtung:** Nach AnfG möglich
- **Betrug:** Strafbares Verhalten denkbar

**Ergebnis:** Kaufvertrag nichtig, verdeckter Vertrag problematisch`,
              explanation: 'Zeigt die komplexe Rechtslage bei Umgehungsgeschäften.'
            }
          ]
        }
      ],
      resources: [
        {
          id: 'res-bgb-2-1-1',
          title: 'Brox/Walker: Allgemeiner Teil des BGB',
          type: 'book',
          url: 'https://beck-online.de',
          description: 'Standardwerk zum BGB AT mit ausführlicher Darstellung der Willenserklärung'
        }
      ],
      glossary: [
        {
          term: 'Rechtsgeschäft',
          definition: 'Tatbestand aus einer oder mehreren Willenserklärungen, der eine gewollte Rechtsfolge herbeiführt'
        },
        {
          term: 'Willenserklärung',
          definition: 'Private Willensäußerung, die unmittelbar auf Herbeiführung einer Rechtsfolge gerichtet ist'
        },
        {
          term: 'Rechtsbindungswille',
          definition: 'Wille zur rechtlichen Bindung; fehlt bei Gefälligkeitsverhältnissen'
        },
        {
          term: 'Konkludentes Verhalten',
          definition: 'Schlüssiges Verhalten, aus dem eine Willenserklärung zu entnehmen ist'
        }
      ]
    },
    estimatedMinutes: 1200, // 20 Stunden
    requiredMastery: 85,
    exercises: [] // Werden am Ende hinzugefügt
  },

  // 2.2 Das Wirksamwerden von Willenserklärungen (15 Stunden)
  {
    id: 'bgb-ke2-2-wirksamwerden',
    moduleId: 'bgb-at',
    order: 4,
    title: '2.2 Das Wirksamwerden von Willenserklärungen',
    objectives: [
      {
        id: 'obj-bgb-2-2-1',
        description: 'Empfangsbedürftige und nicht empfangsbedürftige Willenserklärungen unterscheiden',
        bloomLevel: 'analyze'
      },
      {
        id: 'obj-bgb-2-2-2',
        description: 'Den Zugang von Willenserklärungen nach § 130 BGB bestimmen können',
        bloomLevel: 'apply'
      },
      {
        id: 'obj-bgb-2-2-3',
        description: 'Widerruf und Zugangshindernisse rechtlich bewerten',
        bloomLevel: 'evaluate'
      },
      {
        id: 'obj-bgb-2-2-4',
        description: 'Besonderheiten bei modernen Kommunikationsmitteln anwenden',
        bloomLevel: 'apply'
      }
    ],
    content: {
      id: 'content-bgb-2-2',
      type: 'mixed',
      sections: [
        {
          id: 'section-bgb-2-2-1',
          title: '📮 Empfangsbedürftigkeit von Willenserklärungen',
          content: `Nicht alle Willenserklärungen müssen einem Empfänger zugehen, um wirksam zu werden.

**🎯 Grundunterscheidung:**

**Empfangsbedürftige Willenserklärungen:**
- Werden erst mit Zugang beim Empfänger wirksam
- Benötigen bestimmten Adressaten
- **Regel:** Die meisten Willenserklärungen

**Nicht empfangsbedürftige Willenserklärungen:**
- Werden bereits mit Abgabe wirksam
- Kein bestimmter Empfänger erforderlich
- **Beispiele:** Testament, Eigentumsaufgabe

**📊 Systematische Übersicht:**

| Typ | Wirksamkeit | Beispiele | Besonderheit |
|-----|-------------|-----------|--------------|
| **Empfangsbedürftig** | Mit Zugang | Angebot, Annahme, Kündigung | § 130 BGB |
| **Nicht empfangsbedürftig** | Mit Abgabe | Testament, Dereliktion | Keine Zugangserfordernisse |

**🔍 Abgrenzungskriterien:**

**Empfangsbedürftig wenn:**
- Bestimmter Empfänger erkennbar
- Rechtsgeschäft zwischen konkreten Personen
- Interessenlage erfordert Kenntnis des Empfängers

**Nicht empfangsbedürftig wenn:**
- Kein bestimmter Empfänger
- Einseitiges Rechtsgeschäft ohne Gegenpart
- Rechtsfolge tritt unabhängig von Kenntnisnahme ein

**⚡ Zweifelsfälle:**

**Auslobung (§ 657 BGB):**
- **Problem:** Empfangsbedürftig oder nicht?
- **h.M.:** Nicht empfangsbedürftig
- **Grund:** Bindung auch ohne Kenntnis der Ausgelobten

**Vollmachtserteilung:**
- **Außenvollmacht:** Empfangsbedürftig (gegenüber Drittem)
- **Innenvollmacht:** Empfangsbedürftig (gegenüber Vertreter)

**🎯 Praktische Bedeutung:**
Die Unterscheidung ist entscheidend für:
- Zeitpunkt der Wirksamkeit
- Widerrufs- und Anfechtungsmöglichkeiten
- Risikoverteilung bei Übermittlungsfehlern`,
          examples: [
            {
              id: 'ex-bgb-2-2-1',
              title: '📜 Beispiel: Testament vs. Vertragserklärung',
              content: `**Fall 1: Testament**
Erblasser E verfasst ein Testament und verstirbt. Die Erben erfahren erst nach Monaten vom Testament.
- **Bewertung:** Nicht empfangsbedürftig
- **Wirksamkeit:** Mit Abgabe (Niederschrift)
- **Grund:** Keine bestimmten Empfänger, einseitige Verfügung

**Fall 2: Kaufangebot**
A schreibt B einen Brief: "Ich biete Ihnen mein Auto für 5.000 € an."
- **Bewertung:** Empfangsbedürftig
- **Wirksamkeit:** Erst mit Zugang bei B
- **Grund:** Bestimmter Empfänger, Vertragsanbahnung

**Unterschied:** Testament wirkt unabhängig von Kenntnisnahme, Angebot nur bei Zugang`,
              explanation: 'Zeigt den fundamentalen Unterschied zwischen ein- und mehrseitigen Rechtsgeschäften.'
            }
          ]
        },
        {
          id: 'section-bgb-2-2-2',
          title: '📬 Der Zugang von Willenserklärungen (§ 130 BGB)',
          content: `§ 130 BGB regelt, wann eine empfangsbedürftige Willenserklärung wirksam wird.

**🎯 Grundregel des § 130 I BGB:**
Eine empfangsbedürftige Willenserklärung wird wirksam, wenn sie dem Empfänger zugeht.

**📊 Zugangstheorien:**

**1. Vernehmungstheorie (überholt):**
- Zugang erst bei tatsächlicher Kenntnisnahme
- **Problem:** Empfänger könnte Zugang verhindern

**2. Machtbereichstheorie (herrschend):**
- Zugang bei Gelangen in den Machtbereich
- Empfänger muss Kenntnis nehmen können
- **Maßgeblich:** Möglichkeit der Kenntnisnahme unter normalen Umständen

**🏠 Zugang bei verschiedenen Übermittlungsarten:**

**Mündliche Erklärungen:**
- **Unter Anwesenden:** Sofortiger Zugang
- **Fernmündlich:** Mit Verständigung
- **Besonderheit:** Keine Machtbereichsproblematik

**Schriftliche Erklärungen:**
- **Briefkasten:** Bei ordnungsgemäßem Einwurf
- **Geschäftsräume:** Während Geschäftszeiten
- **Wohnung:** Bei normalem Abholen der Post

**Elektronische Kommunikation:**
- **E-Mail:** Bei Abrufbarkeit im Postfach
- **Fax:** Bei ordnungsgemäßer Übertragung
- **SMS/WhatsApp:** Bei Zustellung an Gerät

**⏰ Zeitpunkt des Zugangs:**

**Geschäftszeiten:**
- Bei Geschäften: Während der üblichen Geschäftszeiten
- Bei Privaten: Zu verkehrsüblichen Zeiten
- **Faustregel:** Werktags 8-18 Uhr

**Besondere Zeiten:**
- **Urlaub:** Zugang während normaler Abwesenheit
- **Krankheit:** Möglichkeit der Kenntnisnahme maßgeblich
- **Wochenende:** Bei Privatpersonen problematisch

**🚫 Zugangshindernisse:**

**Natürliche Hindernisse:**
- Defekte Briefkästen
- Überfüllte Postfächer
- Technische Störungen

**Rechtliche Hindernisse:**
- Vollmachtserlöschen
- Geschäftsunfähigkeit des Empfängers
- Rechtswidrige Zugangsvereitelung

**⚡ Zugangsvereitelung:**
Wer den Zugang rechtswidrig vereitelt, muss sich so behandeln lassen, als sei die Erklärung zugegangen (§ 162 BGB analog)`,
          examples: [
            {
              id: 'ex-bgb-2-2-2',
              title: '📧 Beispiel: E-Mail-Zugang',
              content: `**Sachverhalt:** A sendet B am Montag um 14:00 Uhr eine E-Mail mit einem Vertragsangebot. B ist im Urlaub und liest die E-Mail erst am Freitag.

**Zugangsbestimmung:**

**Technischer Zugang:**
- (+) E-Mail korrekt in B's Postfach eingetroffen
- (+) Abrufbar und lesbar
- (+) Keine technischen Störungen

**Zeitlicher Zugang:**
- **Maßgeblich:** Montag 14:00 Uhr (Eintreffen im Postfach)
- **Unerheblich:** Tatsächliche Kenntnisnahme am Freitag
- **Grund:** Machtbereichstheorie

**Urlaub als Hindernis?**
- (-) Normaler Urlaub hindert Zugang nicht
- (-) B hätte E-Mails abrufen können
- **Ausnahme:** Nur bei längerem, angekündigtem Urlaub

**Ergebnis:** Zugang am Montag 14:00 Uhr`,
              explanation: 'Zeigt die praktische Anwendung der Machtbereichstheorie bei elektronischer Kommunikation.'
            }
          ],
          memoryAids: [
            {
              id: 'mem-bgb-2-2-1',
              title: '🧠 Merkhilfe: Zugangsvoraussetzungen',
              content: `**M**achtbereich erreicht
**K**enntnisnahme möglich
**Z**eitlich angemessen

= **MKZ** (Mit Kenntnis Zugegangen)`
            }
          ]
        },
        {
          id: 'section-bgb-2-2-3',
          title: '↩️ Widerruf von Willenserklärungen',
          content: `Willenserklärungen können unter bestimmten Umständen widerrufen werden.

**🎯 Grundregel § 130 I 2 BGB:**
Eine Willenserklärung kann widerrufen werden, wenn der Widerruf dem Empfänger vor der Willenserklärung oder gleichzeitig mit ihr zugeht.

**📊 Systematik des Widerrufs:**

**Widerruf vor Zugang:**
- **Zeitpunkt:** Widerruf muss vor WE zugehen
- **Rechtsfolge:** WE wird nicht wirksam
- **Grund:** Kein schutzwürdiges Vertrauen entstanden

**Gleichzeitiger Zugang:**
- **Beispiel:** Brief mit WE und Widerruf in einem Umschlag
- **Rechtsfolge:** WE wird nicht wirksam
- **Bewertung:** Sachgerechte Interessenabwägung

**Widerruf nach Zugang:**
- **Grundsatz:** Nicht möglich
- **Ausnahmen:** Gesetzliche Widerrufsrechte (z.B. § 355 BGB)

**🔍 Besondere Konstellationen:**

**Übermittlung durch Boten:**
- **§ 130 I 3 BGB:** Widerruf gegenüber Boten möglich
- **Voraussetzung:** Bevor Bote die WE übermittelt
- **Praktisch:** Rückruf des Boten

**Anfechtung vs. Widerruf:**
- **Widerruf:** Vor Zugang, vernichtet WE ex tunc
- **Anfechtung:** Nach Zugang, vernichtet WE ex tunc
- **Wichtig:** Verschiedene Voraussetzungen und Rechtsfolgen

**⚡ Moderne Kommunikationsmittel:**

**E-Mail-Widerruf:**
- Technisch oft schwer umsetzbar
- Separater Widerruf erforderlich
- Zeitfenster meist sehr kurz

**Fax-Widerruf:**
- Widerruf durch Anruf möglich
- Wenn vor Übertragung der ursprünglichen WE

**Messenger-Dienste:**
- "Nachrichten löschen" = Widerruf?
- Rechtlich noch ungeklärt
- Vorsicht bei geschäftlicher Kommunikation

**🎯 Praktische Bedeutung:**
Der Widerruf ist wichtig bei:
- Versehentlich abgesendeten Erklärungen
- Kurzfristigen Meinungsänderungen
- Fehlerhafter Übermittlung

**⚠️ Grenzen des Widerrufs:**
- Kein Widerruf bei bereits eingetretenen Rechtsfolgen
- Schadensersatzpflicht bei verschuldetem Widerruf möglich
- Treu und Glauben können Widerruf begrenzen`,
          examples: [
            {
              id: 'ex-bgb-2-2-3',
              title: '📞 Beispiel: Telefonischer Widerruf',
              content: `**Sachverhalt:** A sendet B um 10:00 Uhr ein schriftliches Kaufangebot per Post. Um 11:00 Uhr bereut A und ruft B an, um das Angebot zu widerrufen. Der Brief kommt um 12:00 Uhr an.

**Rechtliche Bewertung:**

**Zeitliche Reihenfolge:**
1. 10:00 Uhr: Absendung des Angebots
2. 11:00 Uhr: Telefonischer Widerruf
3. 12:00 Uhr: Zugang des Briefes

**Widerrufsvoraussetzungen (§ 130 I 2 BGB):**
- (+) Widerrufserklärung liegt vor
- (+) Widerruf geht vor ursprünglicher WE zu
- (+) Empfänger B wird vor Entstehung schutzwürdigen Vertrauens informiert

**Rechtsfolge:**
- Das Kaufangebot wird nicht wirksam
- B kann das Angebot nicht mehr annehmen
- Keine Bindungswirkung für A

**Ergebnis:** Wirksamer Widerruf, Angebot wird gegenstandslos`,
              explanation: 'Zeigt die praktische Anwendung des Widerrufsrechts bei verschiedenen Kommunikationsmitteln.'
            }
          ],
          selfTest: {
            questions: [
              {
                id: 'q-bgb-2-2-1',
                question: 'Wann ist ein Widerruf einer Willenserklärung nach § 130 I 2 BGB möglich?',
                correctAnswer: 'Ein Widerruf ist möglich, wenn er dem Empfänger vor der Willenserklärung oder gleichzeitig mit ihr zugeht.'
              },
              {
                id: 'q-bgb-2-2-2',
                question: 'Nach welcher Theorie bestimmt sich der Zugang einer schriftlichen Willenserklärung?',
                correctAnswer: 'Nach der herrschenden Machtbereichstheorie. Zugang liegt vor, wenn die Erklärung so in den Machtbereich des Empfängers gelangt, dass dieser unter normalen Umständen Kenntnis nehmen kann.'
              }
            ]
          }
        }
      ],
      resources: [
        {
          id: 'res-bgb-2-2-1',
          title: 'BGH-Rechtsprechung zum Zugang',
          type: 'website',
          url: 'https://beck-online.de',
          description: 'Aktuelle Rechtsprechung zu Zugangsproblemen bei modernen Kommunikationsmitteln'
        }
      ],
      glossary: [
        {
          term: 'Empfangsbedürftige Willenserklärung',
          definition: 'Willenserklärung, die erst mit Zugang beim Empfänger wirksam wird'
        },
        {
          term: 'Machtbereichstheorie',
          definition: 'Herrschende Theorie zur Bestimmung des Zugangs: WE geht zu, wenn Kenntnisnahme unter normalen Umständen möglich ist'
        },
        {
          term: 'Zugangsvereitelung',
          definition: 'Rechtswidrige Verhinderung des Zugangs einer Willenserklärung'
        }
      ]
    },
    estimatedMinutes: 900, // 15 Stunden
    requiredMastery: 80,
    exercises: [] // Werden am Ende hinzugefügt
  }
];

// Exercises for Kurseinheit 2 - basierend auf FernUni Selbsttestaufgaben
const exercisesKE2: Exercise[] = [
  // Übungen zu 2.1 Rechtsgeschäft und Willenserklärung
  {
    id: 'ex-bgb-ke2-1-1',
    type: 'multipleChoice',
    difficulty: 'beginner',
    points: 10,
    title: 'Begriff des Rechtsgeschäfts',
    description: 'Grundlagen der Rechtsgeschäftslehre',
    content: {
      question: 'Was ist das wesentliche Merkmal eines Rechtsgeschäfts?',
      options: [
        'Die Rechtsfolge tritt ein, weil sie gewollt ist',
        'Die Rechtsfolge tritt kraft Gesetzes ein',
        'Es ist immer schriftlich zu erklären',
        'Es bedarf stets notarieller Beurkundung'
      ]
    },
    solution: {
      correct: 'Die Rechtsfolge tritt ein, weil sie gewollt ist',
      explanation: 'Das Rechtsgeschäft unterscheidet sich von anderen Rechtshandlungen dadurch, dass die Rechtsfolge eintritt, weil sie vom Handelnden gewollt ist. Dies ist Ausdruck der Privatautonomie.'
    },
    hints: [
      {
        id: 'hint-1',
        text: 'Denken Sie an den Unterschied zwischen Rechtsgeschäft und Realakt.',
        penaltyPoints: 2
      }
    ],
    feedback: {
      correct: 'Richtig! Das gewollte Eintreten der Rechtsfolge kennzeichnet das Rechtsgeschäft.',
      incorrect: 'Das ist nicht korrekt. Überlegen Sie, was ein Rechtsgeschäft von anderen Handlungen unterscheidet.'
    }
  },
  {
    id: 'ex-bgb-ke2-1-2',
    type: 'dragDrop',
    difficulty: 'intermediate',
    points: 15,
    title: 'Willenselemente',
    description: 'Ordnen Sie die Willenselemente den Definitionen zu',
    content: {
      question: 'Ordnen Sie die drei Willenselemente ihren Definitionen zu:',
      items: [
        'Handlungswille',
        'Erklärungsbewusstsein', 
        'Geschäftswille'
      ],
      targets: [
        'Bewusstes körperliches Verhalten',
        'Bewusstsein, eine rechtlich erhebliche Erklärung abzugeben',
        'Wille zur Herbeiführung einer bestimmten Rechtsfolge'
      ]
    },
    solution: {
      correct: {
        'Handlungswille': 'Bewusstes körperliches Verhalten',
        'Erklärungsbewusstsein': 'Bewusstsein, eine rechtlich erhebliche Erklärung abzugeben',
        'Geschäftswille': 'Wille zur Herbeiführung einer bestimmten Rechtsfolge'
      },
      explanation: 'Die drei Willenselemente bilden zusammen den subjektiven Tatbestand einer Willenserklärung.'
    }
  },
  {
    id: 'ex-bgb-ke2-1-3',
    type: 'caseAnalysis',
    difficulty: 'advanced',
    points: 20,
    title: 'Scherzerklärung analysieren',
    description: 'Bewerten Sie eine Scherzerklärung rechtlich',
    content: {
      question: 'Analysieren Sie den folgenden Fall:',
      scenario: `Studenten-WG: A sagt zu seinem Mitbewohner B beim gemeinsamen Essen: "Für das leckere Essen verkaufe ich dir mein Auto für 50 €!" B, der das Auto schon lange haben wollte, sagt sofort: "Klasse, das nehme ich!"`,
      tasks: [
        'Liegt eine Willenserklärung des A vor?',
        'Welche Rolle spielt der Scherz-Charakter?',
        'Welche Rechte hat B?',
        'Welche Rechte hat A?'
      ]
    },
    solution: {
      correct: {
        structure: `I. Willenserklärung des A

1. Objektiver Tatbestand (+)
   - Äußerung eines konkreten Verkaufsangebots
   - Für B als ernsthafte Erklärung erkennbar
   - Alle essentialia negotii enthalten

2. Subjektiver Tatbestand (problematisch)
   - Handlungswille (+): Bewusste Äußerung
   - Erklärungsbewusstsein (+): A weiß um Erklärungscharakter  
   - Geschäftswille (-): A will nicht wirklich verkaufen

3. Ergebnis: Willenserklärung liegt vor (objektiver Tatbestand maßgeblich)

II. Rechtsfolgen

A kann nach § 119 I BGB anfechten (Erklärungsirrtum)
B hat zunächst wirksames Angebot angenommen
Nach Anfechtung: Schadensersatz nach § 122 BGB möglich`,
        keyPoints: [
          'Objektiver Tatbestand ist maßgeblich',
          'Scherz-Charakter führt nicht zur Unwirksamkeit',
          'Anfechtung nach § 119 I BGB möglich',
          'Vertrauensschaden nach § 122 BGB'
        ]
      },
      explanation: 'Der Fall zeigt das Spannungsverhältnis zwischen Verkehrsschutz und Erklärerschutz.'
    }
  },
  {
    id: 'ex-bgb-ke2-1-4',
    type: 'trueFalse',
    difficulty: 'intermediate',
    points: 8,
    title: 'Rechtsbindungswille',
    description: 'Bewerten Sie Aussagen zum Rechtsbindungswillen',
    content: {
      question: 'Bei einer Einladung zum Kaffee fehlt regelmäßig der Rechtsbindungswille.'
    },
    solution: {
      correct: true,
      explanation: 'Richtig. Höflichkeitsbeziehungen und Gefälligkeitsverhältnisse sind nicht auf rechtliche Bindung gerichtet. Es fehlt der Rechtsbindungswille, weshalb kein Rechtsgeschäft vorliegt.'
    },
    hints: [
      {
        id: 'hint-1',
        text: 'Denken Sie an den Unterschied zwischen sozialen und rechtlichen Beziehungen.',
        penaltyPoints: 1
      }
    ]
  },

  // Übungen zu 2.2 Wirksamwerden
  {
    id: 'ex-bgb-ke2-2-1',
    type: 'multipleChoice',
    difficulty: 'intermediate',
    points: 12,
    title: 'Empfangsbedürftigkeit',
    description: 'Unterscheidung empfangsbedürftiger und nicht empfangsbedürftiger Willenserklärungen',
    content: {
      question: 'Welche der folgenden Willenserklärungen ist NICHT empfangsbedürftig?',
      options: [
        'Kündigung eines Mietvertrags',
        'Testament',
        'Kaufangebot',
        'Vollmachtserteilung'
      ]
    },
    solution: {
      correct: 'Testament',
      explanation: 'Das Testament ist eine nicht empfangsbedürftige Willenserklärung, da es bereits mit der Errichtung wirksam wird und keinen bestimmten Empfänger hat.'
    },
    hints: [
      {
        id: 'hint-1',
        text: 'Überlegen Sie, welche Erklärung keinen bestimmten Empfänger hat.',
        penaltyPoints: 2
      }
    ]
  },
  {
    id: 'ex-bgb-ke2-2-2',
    type: 'fillInBlanks',
    difficulty: 'intermediate',
    points: 15,
    title: 'Zugangsbestimmung',
    description: 'Vervollständigen Sie die Regel zum Zugang',
    content: {
      question: 'Vervollständigen Sie die Zugangsdefinition:',
      context: 'Nach der _____ geht eine Willenserklärung zu, wenn sie so in den _____ des Empfängers gelangt, dass dieser unter _____ Umständen _____ nehmen kann. Der Zugang tritt ein, auch wenn der Empfänger tatsächlich keine _____ erlangt.',
      blanks: 5
    },
    solution: {
      correct: ['Machtbereichstheorie', 'Machtbereich', 'normalen', 'Kenntnis', 'Kenntnis'],
      explanation: 'Die Machtbereichstheorie ist die herrschende Theorie zur Bestimmung des Zugangs und schützt sowohl Erklärer als auch Empfänger.'
    }
  },
  {
    id: 'ex-bgb-ke2-2-3',
    type: 'caseAnalysis',
    difficulty: 'advanced',
    points: 25,
    title: 'E-Mail-Zugang bestimmen',
    description: 'Bestimmen Sie den Zugang einer E-Mail-Willenserklärung',
    content: {
      question: 'Bestimmen Sie den Zugang:',
      scenario: `Unternehmer U sendet Geschäftspartner G am Freitag um 22:00 Uhr eine wichtige E-Mail mit einer Vertragskündigung. G's E-Mail-Server ist über das Wochenende wegen Wartungsarbeiten nicht erreichbar. Die E-Mail wird erst am Montag um 8:00 Uhr zugestellt. G liest sie am Montag um 10:00 Uhr.`,
      tasks: [
        'Wann geht die Kündigungserklärung zu?',
        'Welche Rolle spielen die Wartungsarbeiten?',
        'Ist der Zeitpunkt der Kenntnisnahme relevant?',
        'Wie wäre es bei einem defekten Briefkasten?'
      ]
    },
    solution: {
      correct: {
        structure: `I. Zugangsbestimmung der E-Mail-Kündigung

1. Anwendung der Machtbereichstheorie
   - Zugang bei Abrufbarkeit im E-Mail-Postfach
   - Nicht bei tatsächlicher Kenntnisnahme

2. Zeitpunkt des Zugangs
   - Nicht Freitag 22:00 Uhr (Server nicht erreichbar)
   - Montag 8:00 Uhr: Zustellung ins Postfach
   - Unerheblich: Kenntnisnahme um 10:00 Uhr

3. Bewertung der Wartungsarbeiten
   - Technisches Hindernis verhindert Zugang
   - Kein Zugang solange E-Mail nicht abrufbar
   - Vergleichbar mit defektem Briefkasten

4. Ergebnis: Zugang am Montag 8:00 Uhr`,
        keyPoints: [
          'Machtbereichstheorie bei E-Mails',
          'Technische Hindernisse verhindern Zugang',
          'Abrufbarkeit entscheidend, nicht Kenntnisnahme',
          'Vergleich mit herkömmlicher Post'
        ]
      },
      explanation: 'Der Fall zeigt die Anwendung klassischer Zugangsgrundsätze auf moderne Kommunikationsmittel.'
    }
  },
  {
    id: 'ex-bgb-ke2-2-4',
    type: 'multipleChoice',
    difficulty: 'advanced',
    points: 18,
    title: 'Widerruf von Willenserklärungen',
    description: 'Anwendung des § 130 I 2 BGB',
    content: {
      question: 'A schickt B am Montag einen Brief mit einem Kaufangebot ab. Am Dienstag bereut A und ruft B an, um zu widerrufen. Der Brief kommt am Mittwoch an. Wie ist die Rechtslage?',
      options: [
        'Der Widerruf ist unwirksam, da der Brief bereits abgeschickt war',
        'Der Widerruf ist wirksam, da er vor Zugang des Briefs erfolgte',
        'Der Widerruf ist nur wirksam, wenn B noch nicht auf den Brief vertraut hat',
        'Es kommt darauf an, ob A den Widerruf verschuldet hat'
      ]
    },
    solution: {
      correct: 'Der Widerruf ist wirksam, da er vor Zugang des Briefs erfolgte',
      explanation: 'Nach § 130 I 2 BGB kann eine Willenserklärung widerrufen werden, wenn der Widerruf vor der ursprünglichen Erklärung oder gleichzeitig mit ihr zugeht. Hier ging der Widerruf (Dienstag) vor dem Brief (Mittwoch) zu.'
    }
  }
];

// Add exercises to units
kurseinheit2BGBUnits[0].exercises = exercisesKE2.slice(0, 4); // Erste 4 Übungen für 2.1
kurseinheit2BGBUnits[1].exercises = exercisesKE2.slice(4); // Restliche Übungen für 2.2