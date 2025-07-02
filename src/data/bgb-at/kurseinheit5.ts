import { LearningUnit, Exercise } from '../../types/learning';

// KURSEINHEIT 5: Verpflichtungs-/Verfügungsgeschäfte, Geschäftsfähigkeit, Form und Nichtigkeit
// Basierend auf FernUni Hagen PDF 55101-05-S#1-2001625.pdf
// Autoren: Prof. Dr. Sebastian Kubis, Prof. Dr. Ulrich Eisenhardt
// 60 Stunden / 2 ECTS

export const kurseinheit5BGBUnits: LearningUnit[] = [
  // 5.1 Verpflichtungs- und Verfügungsgeschäfte (15 Stunden)
  {
    id: 'bgb-ke5-1-verpflichtung-verfuegung',
    moduleId: 'bgb-at',
    order: 13,
    title: '5.1 Verpflichtungs- und Verfügungsgeschäfte',
    objectives: [
      {
        id: 'obj-bgb-5-1-1',
        description: 'Unterschied zwischen Verpflichtungs- und Verfügungsgeschäften verstehen',
        bloomLevel: 'understand'
      },
      {
        id: 'obj-bgb-5-1-2',
        description: 'Das Trennungs- und Abstraktionsprinzip erklären können',
        bloomLevel: 'understand'
      },
      {
        id: 'obj-bgb-5-1-3',
        description: 'Konkrete Fälle nach Trennungs- und Abstraktionsprinzip lösen',
        bloomLevel: 'apply'
      },
      {
        id: 'obj-bgb-5-1-4',
        description: 'Die praktischen Konsequenzen der Prinzipien bewerten',
        bloomLevel: 'evaluate'
      }
    ],
    content: {
      id: 'content-bgb-5-1',
      type: 'mixed',
      sections: [
        {
          id: 'section-bgb-5-1-1',
          title: '🎯 Begriffe und Unterscheidung',
          content: `Die Unterscheidung zwischen Verpflichtungs- und Verfügungsgeschäften ist fundamental für das deutsche Zivilrecht.

**📋 Das Verpflichtungsgeschäft:**

**Definition:**
Ein Verpflichtungsgeschäft ist ein Rechtsgeschäft, das eine Verpflichtung zu einer Leistung begründet, ändert oder aufhebt.

**Merkmale:**
- Begründet schuldrechtliche Ansprüche
- Schafft die Pflicht zu einer Leistung
- Wirkt nur inter partes (zwischen den Parteien)
- Relative Wirkung

**Beispiele:**
- Kaufvertrag (§ 433 BGB)
- Mietvertrag (§ 535 BGB)
- Werkvertrag (§ 631 BGB)
- Darlehensvertrag (§ 488 BGB)

**📦 Das Verfügungsgeschäft:**

**Definition:**
Ein Verfügungsgeschäft ist ein Rechtsgeschäft, das unmittelbar auf ein bestehendes Recht einwirkt, indem es dieses überträgt, belastet, ändert oder aufhebt.

**Merkmale:**
- Wirkt unmittelbar auf Rechte ein
- Absolute Wirkung (gegenüber jedermann)
- Setzt bestehendes Recht voraus
- Ändert die Rechtslage direkt

**Beispiele:**
- Übereignung (§§ 929 ff. BGB)
- Abtretung (§ 398 BGB)
- Pfandrechtsbestellung (§§ 1204 ff. BGB)
- Aufhebung eines dinglichen Rechts

**📊 Vergleich:**

| Aspekt | Verpflichtungsgeschäft | Verfügungsgeschäft |
|--------|------------------------|---------------------|
| **Wirkung** | Schuldrechtlich | Dinglich/absolut |
| **Funktion** | Begründet Pflichten | Ändert Rechte |
| **Reichweite** | Inter partes | Erga omnes |
| **Beispiel** | Kaufvertrag | Übereignung |`,
          examples: [
            {
              id: 'ex-bgb-5-1-1',
              title: '🚗 Beispiel: Autokauf',
              content: `**Sachverhalt:**
K kauft von V einen gebrauchten PKW für 10.000 €.

**Analyse der Rechtsgeschäfte:**

**1. Verpflichtungsgeschäft (Kaufvertrag):**
- § 433 BGB
- V verpflichtet sich zur Übereignung
- K verpflichtet sich zur Zahlung
- Noch kein Eigentumsübergang!

**2. Verfügungsgeschäfte:**
- Übereignung des PKW (§ 929 S. 1 BGB)
  * Einigung über Eigentumsübergang
  * Übergabe des Fahrzeugs
- Übereignung des Geldes (§ 929 S. 1 BGB)
  * Bei Barübergabe
  * Oder Überweisung (Forderungsabtretung)`,
              explanation: 'Kaufvertrag und Übereignung sind zwei getrennte Rechtsgeschäfte!'
            }
          ]
        },
        {
          id: 'section-bgb-5-1-2',
          title: '🔀 Das Trennungs- und Abstraktionsprinzip',
          content: `Diese beiden Prinzipien prägen das deutsche Sachenrecht und unterscheiden es von anderen Rechtsordnungen.

**✂️ Das Trennungsprinzip:**

**Grundsatz:**
Verpflichtungs- und Verfügungsgeschäft sind rechtlich voneinander getrennte Rechtsgeschäfte.

**Bedeutung:**
- Zwei selbständige Rechtsgeschäfte
- Eigene Wirksamkeitsvoraussetzungen
- Getrennte Prüfung erforderlich
- Kaufvertrag ≠ Eigentumsübertragung

**Praktische Konsequenzen:**
1. Zeitliche Trennung möglich
2. Verschiedene Beteiligte möglich
3. Unterschiedliche Formerfordernisse
4. Getrennte Anfechtbarkeit

**🔗 Das Abstraktionsprinzip:**

**Grundsatz:**
Die Wirksamkeit des Verfügungsgeschäfts ist unabhängig von der Wirksamkeit des zugrundeliegenden Verpflichtungsgeschäfts.

**Bedeutung:**
- Verfügung wirksam trotz nichtigem Kaufvertrag
- Eigentumsübergang trotz Anfechtung
- Aber: Bereicherungsausgleich (§ 812 BGB)

**Beispiel:**
- Kaufvertrag nichtig (Geschäftsunfähigkeit)
- Übereignung trotzdem wirksam
- Rückabwicklung über § 812 BGB

**⚖️ Vor- und Nachteile:**

**Vorteile:**
- Rechtssicherheit im Rechtsverkehr
- Schutz des Erwerbers
- Klarheit der Eigentumslage

**Nachteile:**
- Komplexität
- Unverständlich für Laien
- Bereicherungsrecht kompliziert`,
          memoryAids: [
            {
              id: 'mem-bgb-5-1-1',
              title: '🧠 Merkhilfe Trennung & Abstraktion',
              content: `**Trennung:** Kauf und Übereignung = 2 Geschäfte
**Abstraktion:** Eines kann ohne das andere wirksam sein

Denke an: **"Getrennt marschieren, vereint schlagen"**
(Getrennte Geschäfte, aber gemeinsames Ziel)`
            }
          ]
        },
        {
          id: 'section-bgb-5-1-3',
          title: '📚 Praktische Anwendung',
          content: `Die Prinzipien haben erhebliche praktische Auswirkungen auf die Fallbearbeitung.

**🔍 Prüfungsaufbau:**

**1. Verpflichtungsebene prüfen:**
- Kaufvertrag wirksam?
- Anspruch aus § 433 I BGB?
- Einwendungen/Einreden?

**2. Verfügungsebene prüfen:**
- Übereignung erfolgt?
- § 929 BGB erfüllt?
- Berechtigung des Veräußerers?

**3. Bei Unwirksamkeit:**
- Bereicherungsausgleich
- § 812 I 1 Alt. 1 BGB
- Ohne Rechtsgrund

**📋 Fallkonstellationen:**

| Verpflichtung | Verfügung | Folge |
|---------------|-----------|--------|
| Wirksam | Wirksam | Alles OK |
| Nichtig | Wirksam | § 812 BGB |
| Wirksam | Nichtig | § 433 I bleibt |
| Nichtig | Nichtig | Keine Ansprüche |

**⚠️ Ausnahmen vom Abstraktionsprinzip:**

1. **Fehleridentität:**
   - Gleicher Mangel bei beiden Geschäften
   - Z.B. Geschäftsunfähigkeit

2. **Bedingungszusammenhang:**
   - Ausdrückliche Verknüpfung
   - Selten in der Praxis

3. **Bereicherungsrecht:**
   - Faktische Rückabwicklung
   - Wirtschaftliches Ergebnis ähnlich`,
          selfTest: {
            questions: [
              {
                id: 'q-bgb-5-1-1',
                question: 'V verkauft K sein Fahrrad. K erfährt später, dass V geschäftsunfähig war. Ist K Eigentümer geworden?',
                correctAnswer: 'Nein, bei Geschäftsunfähigkeit liegt Fehleridentität vor. Sowohl Kaufvertrag als auch Übereignung sind nichtig.'
              },
              {
                id: 'q-bgb-5-1-2',
                question: 'Was bedeutet das Abstraktionsprinzip?',
                correctAnswer: 'Die Wirksamkeit des Verfügungsgeschäfts ist unabhängig von der Wirksamkeit des Verpflichtungsgeschäfts.'
              }
            ]
          }
        }
      ],
      resources: [],
      glossary: [
        {
          term: 'Verpflichtungsgeschäft',
          definition: 'Rechtsgeschäft, das eine schuldrechtliche Verpflichtung begründet, ändert oder aufhebt'
        },
        {
          term: 'Verfügungsgeschäft',
          definition: 'Rechtsgeschäft, das unmittelbar auf ein Recht einwirkt (Übertragung, Belastung, Änderung, Aufhebung)'
        },
        {
          term: 'Trennungsprinzip',
          definition: 'Verpflichtungs- und Verfügungsgeschäft sind rechtlich selbständige Geschäfte'
        },
        {
          term: 'Abstraktionsprinzip',
          definition: 'Die Wirksamkeit des Verfügungsgeschäfts ist unabhängig vom Verpflichtungsgeschäft'
        }
      ]
    },
    requiredMastery: 85,
    estimatedMinutes: 900,
    exercises: []
  },

  // 5.2 Geschäftsfähigkeit (20 Stunden)
  {
    id: 'bgb-ke5-2-geschaeftsfaehigkeit',
    moduleId: 'bgb-at',
    order: 14,
    title: '5.2 Geschäftsfähigkeit',
    objectives: [
      {
        id: 'obj-bgb-5-2-1',
        description: 'Die Stufen der Geschäftsfähigkeit unterscheiden können',
        bloomLevel: 'understand'
      },
      {
        id: 'obj-bgb-5-2-2',
        description: 'Rechtsgeschäfte Minderjähriger rechtlich beurteilen',
        bloomLevel: 'apply'
      },
      {
        id: 'obj-bgb-5-2-3',
        description: 'Die Regelungen der §§ 107-110 BGB anwenden',
        bloomLevel: 'apply'
      },
      {
        id: 'obj-bgb-5-2-4',
        description: 'Komplexe Fälle mit beschränkt Geschäftsfähigen lösen',
        bloomLevel: 'analyze'
      }
    ],
    content: {
      id: 'content-bgb-5-2',
      type: 'mixed',
      sections: [
        {
          id: 'section-bgb-5-2-1',
          title: '👶 Die Geschäftsfähigkeit',
          content: `Die Geschäftsfähigkeit ist die Fähigkeit, Rechtsgeschäfte selbst wirksam vorzunehmen.

**📋 Begriff und Bedeutung:**

**Definition:**
Geschäftsfähigkeit ist die Fähigkeit, durch eigene Willenserklärungen Rechtsfolgen herbeizuführen.

**Abgrenzungen:**
- **Rechtsfähigkeit:** Fähigkeit, Träger von Rechten und Pflichten zu sein (§ 1 BGB)
- **Deliktsfähigkeit:** Fähigkeit, für unerlaubte Handlungen verantwortlich zu sein (§§ 827, 828 BGB)
- **Geschäftsfähigkeit:** Fähigkeit, wirksam Rechtsgeschäfte vorzunehmen

**📊 Die drei Stufen:**

**1. Geschäftsunfähigkeit (§§ 104, 105 BGB):**
- Kinder unter 7 Jahren (§ 104 Nr. 1)
- Dauernd Geisteskranke (§ 104 Nr. 2)
- Vorübergehende Störung (§ 105 II)

**2. Beschränkte Geschäftsfähigkeit (§§ 106 ff. BGB):**
- Minderjährige von 7 bis 18 Jahren
- Grundsatz: Einwilligung erforderlich
- Ausnahmen in §§ 107-110 BGB

**3. Volle Geschäftsfähigkeit:**
- Ab Vollendung des 18. Lebensjahres
- Uneingeschränkte Handlungsfähigkeit
- Ausnahme: Betreuung (§ 1896 BGB)

**⚖️ Schutzzweck:**
- Schutz vor Selbstschädigung
- Unerfahrenheit Minderjähriger
- Mangelnde Einsichtsfähigkeit
- Aber: Teilnahme am Rechtsverkehr ermöglichen`,
          examples: [
            {
              id: 'ex-bgb-5-2-1',
              title: '🎂 Beispiel: Altersstufen',
              content: `**Lisa wird 7 Jahre alt:**
- Bis gestern: geschäftsunfähig
- Ab heute: beschränkt geschäftsfähig
- Kann jetzt rechtlich vorteilhafte Geschäfte abschließen

**Max wird 18:**
- Bis gestern: beschränkt geschäftsfähig
- Ab heute: voll geschäftsfähig
- Keine Einwilligung der Eltern mehr nötig`,
              explanation: 'Die Altersgrenzen sind starr und gelten unabhängig von der individuellen Reife.'
            }
          ]
        },
        {
          id: 'section-bgb-5-2-2',
          title: '🛡️ Schutz Geschäftsunfähiger und beschränkt Geschäftsfähiger',
          content: `Das Gesetz schützt Minderjährige durch differenzierte Regelungen.

**🚫 Geschäftsunfähige (§§ 104, 105 BGB):**

**Willenserklärungen:**
- Grundsatz: Nichtig (§ 105 I)
- Keine Anfechtung erforderlich
- Schutz absolut

**Ausnahme § 105a BGB:**
- Geschäfte des täglichen Lebens
- Mit geringwertigen Mitteln bewirkt
- Wirksamkeit bei Bewirken der Leistung

**👦 Beschränkt Geschäftsfähige (§§ 106-113 BGB):**

**§ 107 BGB - Grundregel:**
- Einwilligung des gesetzlichen Vertreters erforderlich
- Ausnahme: Lediglich rechtlicher Vorteil

**Die Einwilligung:**
- **Einwilligung (§ 183):** Vorherige Zustimmung
- **Genehmigung (§ 184):** Nachträgliche Zustimmung
- Form: Grundsätzlich formfrei
- Adressat: Minderjähriger oder Geschäftsgegner

**§ 108 BGB - Schwebende Unwirksamkeit:**
1. Einseitige Rechtsgeschäfte: Unwirksam
2. Verträge: Schwebend unwirksam
3. Genehmigung: Ex tunc wirksam
4. Verweigerung: Endgültig unwirksam

**§ 109 BGB - Aufforderung zur Erklärung:**
- Geschäftsgegner kann Frist setzen
- An gesetzlichen Vertreter
- Schweigen = Verweigerung`,
          memoryAids: [
            {
              id: 'mem-bgb-5-2-1',
              title: '🧠 Merkhilfe Geschäftsfähigkeit',
              content: `**0-7 Jahre:** Geschäfts**UN**fähig (§ 104)
**7-18 Jahre:** **BESCHRÄNKT** geschäftsfähig (§ 106)
**Ab 18 Jahre:** **VOLL** geschäftsfähig

Merksatz: "**U**nter **7** **b**eschränkt **b**is **18**"`
            }
          ]
        },
        {
          id: 'section-bgb-5-2-3',
          title: '✅ Lediglich rechtlicher Vorteil und Taschengeldparagraph',
          content: `Minderjährige können in bestimmten Fällen auch ohne Zustimmung wirksam handeln.

**📈 Lediglich rechtlicher Vorteil (§ 107):**

**Begriff:**
Ein Rechtsgeschäft ist lediglich rechtlich vorteilhaft, wenn der Minderjährige dadurch ausschließlich einen rechtlichen Vorteil erlangt.

**Kriterien:**
- Rein rechtliche Betrachtung
- Keine wirtschaftliche Betrachtung
- Keine Verpflichtungen
- Keine Rechtsverluste

**Beispiele vorteilhaft:**
- Schenkungsannahme
- Eigentumserwerb
- Forderungserwerb
- Annahme einer Bürgschaft

**Beispiele NICHT vorteilhaft:**
- Kauf (Zahlungspflicht)
- Schenkung unter Auflage
- Übernahme von Eigentum mit Grundschuld
- Gesellschaftsbeitritt

**💰 Der Taschengeldparagraph (§ 110 BGB):**

**Voraussetzungen:**
1. Vertragliche Leistung bewirkt
2. Mit Mitteln, die ihm überlassen wurden
3. Zu diesem Zweck oder zur freien Verfügung
4. Von Vertreter oder mit dessen Zustimmung von Drittem

**"Bewirken" bedeutet:**
- Vollständige Erfüllung
- Nicht nur Anzahlung
- Bargeschäft oder sofortige Leistung

**Grenzen:**
- Keine Dauerschuldverhältnisse
- Keine Ratenzahlung
- Angemessenheit zum Taschengeld
- Keine sittenwidrigen Geschäfte`,
          selfTest: {
            questions: [
              {
                id: 'q-bgb-5-2-1',
                question: 'Der 16-jährige Max kauft sich von seinem Taschengeld ein Smartphone für 200 € auf Raten (10 x 20 €). Wirksam?',
                correctAnswer: 'Nein, § 110 BGB gilt nicht bei Ratenkauf. Das Geschäft ist schwebend unwirksam und bedarf der Genehmigung der Eltern.'
              },
              {
                id: 'q-bgb-5-2-2',
                question: 'Die 8-jährige Lisa erhält von ihrer Tante 50 € geschenkt. Ist die Schenkung wirksam?',
                correctAnswer: 'Ja, die Annahme einer Schenkung ist lediglich rechtlich vorteilhaft nach § 107 BGB.'
              }
            ]
          }
        }
      ],
      resources: [],
      glossary: [
        {
          term: 'Geschäftsfähigkeit',
          definition: 'Fähigkeit, durch eigene Willenserklärungen wirksam Rechtsgeschäfte vorzunehmen'
        },
        {
          term: 'Lediglich rechtlicher Vorteil',
          definition: 'Rechtsgeschäft, durch das ausschließlich Rechte erworben werden, ohne Pflichten oder Nachteile'
        },
        {
          term: 'Schwebende Unwirksamkeit',
          definition: 'Zustand eines Rechtsgeschäfts, dessen Wirksamkeit von der Genehmigung abhängt'
        },
        {
          term: 'Taschengeldparagraph',
          definition: '§ 110 BGB - Wirksamkeit bei Bewirken der Leistung mit überlassenen Mitteln'
        }
      ]
    },
    requiredMastery: 85,
    estimatedMinutes: 1200,
    exercises: []
  },

  // 5.3 Form (15 Stunden)
  {
    id: 'bgb-ke5-3-form',
    moduleId: 'bgb-at',
    order: 15,
    title: '5.3 Die Form',
    objectives: [
      {
        id: 'obj-bgb-5-3-1',
        description: 'Die verschiedenen Formarten und ihre Anforderungen kennen',
        bloomLevel: 'remember'
      },
      {
        id: 'obj-bgb-5-3-2',
        description: 'Den Zweck von Formvorschriften verstehen',
        bloomLevel: 'understand'
      },
      {
        id: 'obj-bgb-5-3-3',
        description: 'Formvorschriften auf konkrete Fälle anwenden',
        bloomLevel: 'apply'
      },
      {
        id: 'obj-bgb-5-3-4',
        description: 'Die Folgen von Formverstößen beurteilen',
        bloomLevel: 'evaluate'
      }
    ],
    content: {
      id: 'content-bgb-5-3',
      type: 'mixed',
      sections: [
        {
          id: 'section-bgb-5-3-1',
          title: '📝 Das Prinzip der Formfreiheit',
          content: `Im deutschen Recht gilt grundsätzlich Formfreiheit - Ausnahmen bedürfen besonderer Rechtfertigung.

**🎯 Grundsatz der Formfreiheit:**

**Bedeutung:**
- Rechtsgeschäfte sind grundsätzlich formfrei
- Mündlich, schriftlich, konkludent möglich
- Ausdruck der Privatautonomie
- Erleichtert Rechtsverkehr

**Ausnahmen:**
1. **Gesetzliche Formvorschriften**
2. **Vereinbarte Form (§ 125 S. 2 BGB)**
3. **Beweiszwecke (freiwillig)**

**📋 Zwecke von Formvorschriften:**

**1. Warnfunktion:**
- Schutz vor Übereilung
- Zeit zum Nachdenken
- Bei bedeutsamen Geschäften

**2. Beweisfunktion:**
- Klarheit über Inhalt
- Dokumentation für später
- Streitvermeidung

**3. Beratungsfunktion:**
- Fachkundige Hilfe
- Neutrale Aufklärung
- Interessenausgleich

**4. Klarstellungsfunktion:**
- Eindeutiger Inhalt
- Bestimmtheit der Erklärung
- Rechtssicherheit

**5. Kontrollfunktion:**
- Staatliche Überwachung
- Publizität
- Registereintragungen`,
          examples: [
            {
              id: 'ex-bgb-5-3-1',
              title: '⚖️ Beispiel: Formzwecke',
              content: `**Grundstückskauf (§ 311b I BGB):**
- **Warnfunktion:** Größte Investition im Leben
- **Beratung:** Notar klärt neutral auf
- **Beweis:** Notarielle Urkunde
- **Kontrolle:** Grundbuchamt prüft

**Bürgschaft (§ 766 BGB):**
- **Warnfunktion:** Erhebliches Haftungsrisiko
- **Beweis:** Schriftliche Erklärung
- **Klarstellung:** Umfang der Haftung`,
              explanation: 'Je bedeutsamer das Geschäft, desto strenger die Form.'
            }
          ]
        },
        {
          id: 'section-bgb-5-3-2',
          title: '📄 Die gesetzlichen Formarten',
          content: `Das BGB kennt verschiedene Formarten mit steigenden Anforderungen.

**📱 Textform (§ 126b BGB):**

**Anforderungen:**
- Lesbare Erklärung
- Auf dauerhaftem Datenträger
- Person des Erklärenden erkennbar
- KEINE Unterschrift erforderlich

**Beispiele:**
- E-Mail
- SMS/WhatsApp
- Fax
- PDF-Dokument

**✍️ Schriftform (§ 126 BGB):**

**Anforderungen:**
- Eigenhändige Namensunterschrift
- Oder notariell beglaubigtes Handzeichen
- Bei Verträgen: Urkunden austauschen
- Original (keine Kopie/Fax!)

**Unterschrift bedeutet:**
- Individueller Schriftzug
- Nicht nur Initialen
- Räumlicher Abschluss
- Erkennbare Identität

**💻 Elektronische Form (§ 126a BGB):**

**Anforderungen:**
- Qualifizierte elektronische Signatur
- Nach Signaturgesetz
- Ersetzt Schriftform
- Wenn nicht ausgeschlossen

**🏛️ Öffentliche Beglaubigung (§ 129 BGB):**

**Gegenstand:**
- Nur Unterschrift/Handzeichen
- Nicht der Inhalt!
- Durch Notar oder Behörde
- Echtheit der Unterschrift

**📜 Notarielle Beurkundung (§ 128 BGB):**

**Verfahren:**
1. Niederschrift erstellen
2. Vorlesen
3. Genehmigen
4. Unterschreiben
5. Notar unterschreibt

**Strengste Form!**`,
          memoryAids: [
            {
              id: 'mem-bgb-5-3-1',
              title: '🧠 Merkhilfe Formhierarchie',
              content: `Von schwach nach stark:
**T**extform (keine Unterschrift)
**S**chriftform (Unterschrift)
**E**lektronische Form (Signatur)
**B**eglaubigung (Unterschrift bestätigt)
**B**eurkundung (Inhalt + Unterschrift)

Merke: **"T-S-E-B-B"** (Täglich Sehr Eifrig Bücher Bearbeiten)`
            }
          ]
        },
        {
          id: 'section-bgb-5-3-3',
          title: '❌ Formmangel und seine Folgen',
          content: `Formverstöße haben grundsätzlich schwerwiegende Folgen, können aber teilweise geheilt werden.

**⚠️ Rechtsfolge des Formmangels:**

**§ 125 S. 1 BGB:**
- Nichtigkeit von Anfang an
- Ex tunc unwirksam
- Von Amts wegen zu beachten
- Keine Heilung durch Zeitablauf

**§ 125 S. 2 BGB:**
- Auch bei vereinbarter Form
- Es sei denn anderes gewollt
- Auslegung erforderlich

**✅ Heilungsmöglichkeiten:**

**1. Grundstücksgeschäfte (§ 311b I S. 2):**
- Auflassung und Eintragung
- Heilt Formmangel des Kaufvertrags
- Endgültige Heilung

**2. Schenkungsversprechen (§ 518 II):**
- Bewirken der versprochenen Leistung
- Vollzug heilt Formmangel
- Keine Rückforderung

**3. Bürgschaft (§ 766 S. 3):**
- Erfüllung der Hauptverbindlichkeit
- Durch den Bürgen
- Heilt Formmangel

**4. Miet-/Pachtvertrag (§§ 550, 578a):**
- Beidseitiger Vollzug für ein Jahr
- Gilt dann als unbefristet
- Teilweise Heilung

**📋 Umgehung und Ersatz:**

**Nicht möglich:**
- Keine "geltungserhaltende Reduktion"
- Kein Ersatz durch andere Form
- Keine analoge Anwendung

**Möglich:**
- Neuvornahme in richtiger Form
- Anderes Rechtsgeschäft
- Vergleich/Anerkenntnis`,
          selfTest: {
            questions: [
              {
                id: 'q-bgb-5-3-1',
                question: 'K und V einigen sich mündlich über den Kauf eines Grundstücks. Später verweigert V die Übertragung. Was kann K tun?',
                correctAnswer: 'Der Kaufvertrag ist nach § 311b I BGB formnichtig. K kann nur auf formgerechten Neuabschluss drängen oder Schadensersatz aus c.i.c. verlangen.'
              },
              {
                id: 'q-bgb-5-3-2',
                question: 'Genügt eine E-Mail für die Schriftform?',
                correctAnswer: 'Nein, die Schriftform erfordert eine eigenhändige Unterschrift. Eine E-Mail genügt nur für die Textform nach § 126b BGB.'
              }
            ]
          }
        }
      ],
      resources: [],
      glossary: [
        {
          term: 'Formfreiheit',
          definition: 'Grundsatz, dass Rechtsgeschäfte in beliebiger Form abgeschlossen werden können'
        },
        {
          term: 'Textform',
          definition: 'Lesbare Erklärung auf dauerhaftem Datenträger ohne Unterschrift (§ 126b BGB)'
        },
        {
          term: 'Schriftform',
          definition: 'Urkunde mit eigenhändiger Namensunterschrift (§ 126 BGB)'
        },
        {
          term: 'Notarielle Beurkundung',
          definition: 'Niederschrift durch Notar mit Vorlesen, Genehmigung und Unterschriften (§ 128 BGB)'
        }
      ]
    },
    requiredMastery: 85,
    estimatedMinutes: 900,
    exercises: []
  },

  // 5.4 Nichtigkeit (10 Stunden)
  {
    id: 'bgb-ke5-4-nichtigkeit',
    moduleId: 'bgb-at',
    order: 16,
    title: '5.4 Nichtigkeit',
    objectives: [
      {
        id: 'obj-bgb-5-4-1',
        description: 'Die Nichtigkeitsgründe des BGB systematisch erfassen',
        bloomLevel: 'understand'
      },
      {
        id: 'obj-bgb-5-4-2',
        description: 'Gesetzesverstoß und Sittenwidrigkeit voneinander abgrenzen',
        bloomLevel: 'analyze'
      },
      {
        id: 'obj-bgb-5-4-3',
        description: 'Die Rechtsfolgen der Nichtigkeit bestimmen',
        bloomLevel: 'apply'
      }
    ],
    content: {
      id: 'content-bgb-5-4',
      type: 'mixed',
      sections: [
        {
          id: 'section-bgb-5-4-1',
          title: '🚫 Gesetzesverstoß (§ 134 BGB)',
          content: `Ein Rechtsgeschäft, das gegen ein gesetzliches Verbot verstößt, ist nichtig.

**📋 Tatbestand des § 134 BGB:**

**"Gesetzliches Verbot":**
- Jede Rechtsnorm
- Nicht nur formelle Gesetze
- Auch Rechtsverordnungen, Satzungen
- EU-Recht

**"Verstoß":**
- Inhalt des Rechtsgeschäfts
- Oder Art des Abschlusses
- Unmittelbare Zuwiderhandlung

**"Wenn sich nicht ein anderes ergibt":**
- Schutzzweck der Norm entscheidend
- Differenzierte Betrachtung
- Nicht automatisch Nichtigkeit

**🎯 Fallgruppen:**

**1. Beiderseitige Verbotsgesetze:**
- Verbot richtet sich an beide
- Regelmäßig Nichtigkeit
- Beispiel: Schwarzarbeit

**2. Einseitige Verbotsgesetze:**
- Nur eine Partei betroffen
- Oft keine Nichtigkeit
- Schutz des anderen Teils

**3. Ordnungsvorschriften:**
- Nur Ordnungswidrigkeiten
- Meist keine Nichtigkeit
- Andere Sanktionen ausreichend`,
          examples: [
            {
              id: 'ex-bgb-5-4-1',
              title: '⚖️ Beispiel: Verbotsgesetze',
              content: `**Fall 1: Sonntagsverkauf**
Bäcker B verkauft sonntags Brötchen entgegen dem Ladenschlussgesetz.
- Verstoß gegen Verbotsgesetz (+)
- Aber: Nur Ordnungsvorschrift
- Kaufverträge wirksam
- Nur Bußgeld für B

**Fall 2: Schwarzarbeit**
Handwerker H renoviert ohne Rechnung.
- Verstoß gegen SchwarzArbG
- Beiderseitiges Verbot
- Vertrag nichtig
- Keine Vergütung für H`,
              explanation: 'Der Schutzzweck der Norm entscheidet über die Rechtsfolge.'
            }
          ]
        },
        {
          id: 'section-bgb-5-4-2',
          title: '⚠️ Sittenwidrigkeit (§ 138 BGB)',
          content: `Sittenwidrige Rechtsgeschäfte sind nichtig - aber was ist sittenwidrig?

**📋 § 138 I BGB - Allgemeine Sittenwidrigkeit:**

**Begriff:**
Verstoß gegen das Anstandsgefühl aller billig und gerecht Denkenden.

**Maßstab:**
- Objektive Sozialethik
- Nicht Einzelmeinungen
- Wandel möglich
- Grundwerte der Rechtsordnung

**Prüfung:**
1. Inhalt des Geschäfts
2. Beweggründe
3. Zweck
4. Gesamtwürdigung

**💰 § 138 II BGB - Wucher:**

**Objektive Voraussetzungen:**
1. Auffälliges Missverhältnis
   - Leistung und Gegenleistung
   - Etwa doppelter Wert
   - Marktübliche Preise maßgeblich

2. Ausbeutung einer Schwäche:
   - Zwangslage
   - Unerfahrenheit
   - Mangel an Urteilsvermögen
   - Erhebliche Willensschwäche

**Subjektive Voraussetzung:**
- Kenntnis der Umstände
- Bewusstes Ausnutzen
- Vorsatz erforderlich

**🔍 Typische Fallgruppen:**

1. **Existenzvernichtung**
2. **Knebelungsverträge**
3. **Übersicherung**
4. **Angehörigenbürgschaften**
5. **Spielschulden (teilweise)**`,
          memoryAids: [
            {
              id: 'mem-bgb-5-4-1',
              title: '🧠 Merkhilfe Wucher',
              content: `Die 4 Schwächen bei Wucher:
**Z**wangslage
**U**nerfahrenheit
**U**rteilsvermögen (Mangel)
**W**illensschwäche

Merke: **"ZUUW"** = "Zu viel!"`
            }
          ]
        },
        {
          id: 'section-bgb-5-4-3',
          title: '⚖️ Rechtsfolgen der Nichtigkeit',
          content: `Nichtigkeit bedeutet, dass das Rechtsgeschäft von Anfang an unwirksam ist.

**❌ Grundsätze:**

**1. Ex tunc Unwirksamkeit:**
- Von Anfang an
- Nicht erst ab Feststellung
- Rückwirkend

**2. Absolute Wirkung:**
- Gegenüber jedermann
- Von Amts wegen zu beachten
- Nicht nur inter partes

**3. Keine Heilung:**
- Kein Fristablauf
- Keine Bestätigung möglich
- Ausnahmen sehr selten

**🔄 Folgeprobleme:**

**Rückabwicklung:**
- § 812 ff. BGB (Bereicherungsrecht)
- Bei Sittenwidrigkeit: § 817 S. 2 BGB
- Condictio ob turpem causam

**Schadensersatz:**
- Culpa in contrahendo
- § 311 II, III BGB
- Vertrauensschaden

**Teilnichtigkeit:**
- § 139 BGB
- Im Zweifel Totalnichtigkeit
- Ausnahme: Restgeltungswille

**Umdeutung:**
- § 140 BGB
- In anderes wirksames Geschäft
- Wenn Parteiwille entspricht`,
          selfTest: {
            questions: [
              {
                id: 'q-bgb-5-4-1',
                question: 'Wann führt ein Verstoß gegen ein Verbotsgesetz zur Nichtigkeit?',
                correctAnswer: 'Nach § 134 BGB nur, wenn sich aus dem Gesetz nichts anderes ergibt. Entscheidend ist der Schutzzweck der verletzten Norm.'
              },
              {
                id: 'q-bgb-5-4-2',
                question: 'V verkauft dem mittellosen S ein Auto für den dreifachen Marktpreis. Sittenwidrig?',
                correctAnswer: 'Wucher nach § 138 II BGB liegt vor, wenn ein auffälliges Missverhältnis besteht UND eine Schwächesituation ausgebeutet wird. Hier könnte die Zwangslage des S ausgenutzt worden sein.'
              }
            ]
          }
        }
      ],
      resources: [],
      glossary: [
        {
          term: 'Verbotsgesetz',
          definition: 'Rechtsnorm, die ein bestimmtes Verhalten untersagt'
        },
        {
          term: 'Sittenwidrigkeit',
          definition: 'Verstoß gegen das Anstandsgefühl aller billig und gerecht Denkenden'
        },
        {
          term: 'Wucher',
          definition: 'Auffälliges Missverhältnis bei Ausbeutung einer Schwächesituation'
        },
        {
          term: 'Nichtigkeit',
          definition: 'Rechtsgeschäft ist von Anfang an ohne Rechtswirkung'
        }
      ]
    },
    requiredMastery: 85,
    estimatedMinutes: 600,
    exercises: []
  }
];

// Exercises for all units in Kurseinheit 5
const exercisesKE5: Exercise[] = [
  // Exercises for 5.1 Verpflichtung und Verfügung
  {
    id: 'ex-bgb-ke5-1-1',
    type: 'multipleChoice',
    difficulty: 'beginner',
    points: 10,
    content: {
      question: 'Was ist der Hauptunterschied zwischen Verpflichtungs- und Verfügungsgeschäft?',
      options: [
        'Verpflichtungsgeschäfte sind immer formfrei, Verfügungsgeschäfte nicht',
        'Verpflichtungsgeschäfte begründen Pflichten, Verfügungsgeschäfte wirken auf Rechte ein',
        'Verpflichtungsgeschäfte sind unwirksam, Verfügungsgeschäfte wirksam',
        'Es gibt keinen Unterschied, beide sind identisch'
      ]
    },
    solution: {
      correct: 'Verpflichtungsgeschäfte begründen Pflichten, Verfügungsgeschäfte wirken auf Rechte ein',
      explanation: 'Verpflichtungsgeschäfte begründen schuldrechtliche Pflichten (z.B. Kaufvertrag), während Verfügungsgeschäfte unmittelbar auf bestehende Rechte einwirken (z.B. Übereignung).'
    }
  },
  {
    id: 'ex-bgb-ke5-1-2',
    type: 'caseAnalysis',
    difficulty: 'intermediate',
    points: 20,
    content: {
      question: 'Analysieren Sie die Rechtsgeschäfte nach Trennungs- und Abstraktionsprinzip:',
      scenario: `A kauft von B ein Fahrrad für 500 €. Bei der Übergabe stellt sich heraus, dass A erst 15 Jahre alt ist. Die Eltern verweigern die Genehmigung des Kaufvertrags.`,
      tasks: [
        'Welche Rechtsgeschäfte liegen vor?',
        'Wie wirkt sich die fehlende Genehmigung aus?',
        'Wer ist Eigentümer des Fahrrads?'
      ]
    },
    solution: {
      correct: {
        structure: `I. Rechtsgeschäfte
   1. Kaufvertrag (§ 433 BGB) - Verpflichtungsgeschäft
   2. Übereignung (§ 929 S. 1 BGB) - Verfügungsgeschäft

II. Auswirkung fehlender Genehmigung
   1. Kaufvertrag: § 108 I BGB - unwirksam
   2. Übereignung: Ebenfalls § 108 I BGB - unwirksam
   3. Fehleridentität bei Minderjährigkeit

III. Eigentumslage
    - B bleibt Eigentümer
    - Rückgabe nach § 985 BGB`,
        keyPoints: [
          'Trennung von Kauf und Übereignung',
          'Beide Geschäfte unwirksam wegen Minderjährigkeit',
          'Ausnahme vom Abstraktionsprinzip bei Fehleridentität'
        ]
      },
      explanation: 'Bei Geschäftsunfähigkeit oder beschränkter Geschäftsfähigkeit liegt regelmäßig Fehleridentität vor.'
    }
  },

  // Exercises for 5.2 Geschäftsfähigkeit
  {
    id: 'ex-bgb-ke5-2-1',
    type: 'fillInBlanks',
    difficulty: 'beginner',
    points: 15,
    content: {
      question: 'Ergänzen Sie die Altersstufen der Geschäftsfähigkeit:',
      context: 'Kinder unter _____ Jahren sind geschäftsunfähig. Minderjährige zwischen _____ und _____ Jahren sind beschränkt geschäftsfähig. Ab _____ Jahren ist man voll geschäftsfähig.',
      blanks: 4
    },
    solution: {
      correct: ['7', '7', '18', '18'],
      explanation: 'Die Altersgrenzen sind in §§ 104, 106 BGB fest geregelt und gelten unabhängig von der individuellen Reife.'
    }
  },
  {
    id: 'ex-bgb-ke5-2-2',
    type: 'trueFalse',
    difficulty: 'intermediate',
    points: 10,
    content: {
      question: 'Ein 16-Jähriger kann mit seinem Taschengeld wirksam ein Handy für 300 € kaufen, wenn er es sofort bar bezahlt.'
    },
    solution: {
      correct: true,
      explanation: 'Nach § 110 BGB (Taschengeldparagraph) ist das Geschäft wirksam, wenn die Leistung mit Mitteln bewirkt wird, die dem Minderjährigen zu diesem Zweck oder zur freien Verfügung überlassen wurden.'
    }
  },

  // Exercises for 5.3 Form
  {
    id: 'ex-bgb-ke5-3-1',
    type: 'multipleChoice',
    difficulty: 'intermediate',
    points: 15,
    content: {
      question: 'Welche Formvorschrift gilt für einen Grundstückskaufvertrag?',
      options: [
        'Textform genügt',
        'Schriftform erforderlich',
        'Notarielle Beurkundung',
        'Öffentliche Beglaubigung'
      ]
    },
    solution: {
      correct: 'Notarielle Beurkundung',
      explanation: 'Nach § 311b I BGB bedarf ein Vertrag, durch den sich jemand verpflichtet, das Eigentum an einem Grundstück zu übertragen, der notariellen Beurkundung.'
    }
  },
  {
    id: 'ex-bgb-ke5-3-2',
    type: 'problemSolving',
    difficulty: 'advanced',
    points: 25,
    content: {
      question: 'Prüfen Sie die Formwirksamkeit und mögliche Heilung:',
      scenario: `V und K schließen mündlich einen Mietvertrag über eine Wohnung für 10 Jahre ab. K zieht ein und zahlt zwei Jahre lang Miete.`,
      tasks: [
        'Welche Form ist erforderlich?',
        'Rechtsfolge des Formmangels?',
        'Ist eine Heilung eingetreten?'
      ]
    },
    solution: {
      correct: {
        analysis: `1. Erforderliche Form: § 550 BGB - Schriftform bei mehr als einem Jahr
2. Rechtsfolge: Nicht Nichtigkeit, sondern gilt als auf unbestimmte Zeit geschlossen
3. Nach zweijährigem Vollzug: Vertrag gilt als unbefristet, ordentliche Kündigung möglich`,
        conclusion: 'Der Vertrag ist nicht nichtig, sondern wird als unbefristeter Mietvertrag behandelt.'
      },
      explanation: '§ 550 BGB enthält eine Sonderregelung für langfristige Mietverträge mit abweichender Rechtsfolge.'
    }
  },

  // Exercises for 5.4 Nichtigkeit
  {
    id: 'ex-bgb-ke5-4-1',
    type: 'conceptMap',
    difficulty: 'intermediate',
    points: 20,
    content: {
      question: 'Ordnen Sie die Beispiele den Nichtigkeitsgründen zu:',
      centralConcept: 'Nichtigkeitsgründe',
      requiredConcepts: [
        '§ 134 BGB (Gesetzesverstoß)',
        '§ 138 I BGB (Sittenwidrigkeit)',
        '§ 138 II BGB (Wucher)',
        '§ 125 BGB (Formmangel)'
      ]
    },
    solution: {
      correct: {
        '§ 134 BGB (Gesetzesverstoß)': ['Schwarzarbeit'],
        '§ 138 I BGB (Sittenwidrigkeit)': ['Knebelungsvertrag'],
        '§ 138 II BGB (Wucher)': ['Darlehen mit 50% Jahreszins'],
        '§ 125 BGB (Formmangel)': ['Mündlicher Grundstückskauf']
      },
      explanation: 'Jeder Nichtigkeitsgrund hat spezifische Voraussetzungen und muss sorgfältig geprüft werden.'
    }
  },
  {
    id: 'ex-bgb-ke5-4-2',
    type: 'caseAnalysis',
    difficulty: 'advanced',
    points: 30,
    content: {
      question: 'Umfassende Nichtigkeitsprüfung:',
      scenario: `Die mittellose Studentin S benötigt dringend Geld. Der Kredithai K bietet ihr ein Darlehen über 1.000 € an, das sie in einem Monat mit 2.000 € zurückzahlen muss. S unterschreibt aus Verzweiflung.`,
      tasks: [
        'Prüfen Sie § 138 II BGB (Wucher)',
        'Prüfen Sie § 138 I BGB (allgemeine Sittenwidrigkeit)',
        'Rechtsfolgen?'
      ]
    },
    solution: {
      correct: {
        structure: `I. § 138 II BGB - Wucher
   1. Auffälliges Missverhältnis
      - 100% Zinsen in einem Monat
      - Weit über Marktzins (+)
   2. Ausbeutung einer Schwäche
      - Zwangslage der S (+)
      - Mittellosigkeit
   3. Subjektiv: Bewusstes Ausnutzen (+)
   => Wucher (+)

II. § 138 I BGB - Subsidiär
    - Bereits Wucher
    - Hilfsweise: Sittenwidrigkeit (+)

III. Rechtsfolgen
     - Darlehensvertrag nichtig
     - § 817 S. 2 BGB: K kann nichts zurückfordern
     - S behält die 1.000 €`,
        keyPoints: [
          'Eindeutiger Wucherfall',
          '100% Zinsen pro Monat sind sittenwidrig',
          'Kredithai geht leer aus'
        ]
      },
      explanation: 'Bei beiderseitiger Sittenwidrigkeit kann der Leistende nichts zurückfordern (§ 817 S. 2 BGB).'
    }
  }
];

// Add exercises to units (distribute exercises across units)
kurseinheit5BGBUnits[0].exercises = exercisesKE5.slice(0, 2); // First 2 exercises for unit 1
kurseinheit5BGBUnits[1].exercises = exercisesKE5.slice(2, 4); // Next 2 exercises for unit 2
kurseinheit5BGBUnits[2].exercises = exercisesKE5.slice(4, 6); // Next 2 exercises for unit 3
kurseinheit5BGBUnits[3].exercises = exercisesKE5.slice(6, 8); // Last 2 exercises for unit 4