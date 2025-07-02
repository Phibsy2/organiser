import { LearningUnit, Exercise } from '../../types/learning';

// KURSEINHEIT 3: Vertragsschluss (Angebot und Annahme) (55101-03)
// Basierend auf FernUni Hagen PDF 55101-03-S#1-2001623.pdf
// Autoren: Prof. Dr. Sebastian Kubis, Prof. Dr. Ulrich Eisenhardt

export const kurseinheit3BGBUnits: LearningUnit[] = [
  // 3.1 Grundlagen des Vertragsschlusses (20 Stunden)
  {
    id: 'bgb-ke3-1-vertragsschluss',
    moduleId: 'bgb-at',
    order: 5,
    title: '3.1 Grundlagen des Vertragsschlusses',
    objectives: [
      {
        id: 'obj-bgb-3-1-1',
        description: 'Den Begriff und die Bedeutung des Vertrags verstehen und abgrenzen können',
        bloomLevel: 'understand'
      },
      {
        id: 'obj-bgb-3-1-2',
        description: 'Die Unterscheidung zwischen Angebot und Annahme systematisch anwenden',
        bloomLevel: 'apply'
      },
      {
        id: 'obj-bgb-3-1-3',
        description: 'Die Bindungswirkung von Angeboten und ihre Grenzen analysieren',
        bloomLevel: 'analyze'
      },
      {
        id: 'obj-bgb-3-1-4',
        description: 'Komplexe Vertragsschlusssituationen rechtlich bewerten',
        bloomLevel: 'evaluate'
      }
    ],
    content: {
      id: 'content-bgb-3-1',
      type: 'mixed',
      sections: [
        {
          id: 'section-bgb-3-1-1',
          title: '🤝 Das Zustandekommen eines Vertrages',
          content: `Der Vertrag ist das zentrale Instrument zur Regelung privatrechtlicher Beziehungen.

**🎯 Definition Vertrag:**
Ein Vertrag kommt durch zwei inhaltlich übereinstimmende, aufeinander bezogene Willenserklärungen zustande (Angebot und Annahme).

**🔑 Grundprinzipien des Vertragsschlusses:**

**1. Konsensprinzip:**
- Übereinstimmung der Willenserklärungen
- Essentialia negotii müssen bestimmt sein
- Bei Dissens: Kein wirksamer Vertrag

**2. Privatautonomie:**
- Abschlussfreiheit (ob Vertrag)
- Inhaltsfreiheit (welcher Inhalt)
- Formfreiheit (grundsätzlich)
- Partnerwahlfreiheit (mit wem)

**3. Abstraktheit:**
- Verpflichtungsgeschäft ≠ Verfügungsgeschäft
- Vertrag verpflichtet zur Leistung
- Erfüllung durch separaten Akt

**📊 Systematik der Vertragstypen:**

| Kriterium | Arten | Beispiele |
|-----------|--------|-----------|
| **Synallagma** | Einseitig verpflichtend / Zweiseitig verpflichtend | Schenkung / Kaufvertrag |
| **Entgeltlichkeit** | Entgeltlich / Unentgeltlich | Miete / Leihe |
| **Vertragspartner** | B2C / B2B / C2C | Verbrauchervertrag / Handelsgeschäft |
| **Entstehung** | Einmalgeschäft / Dauerschuldverhältnis | Kauf / Mietvertrag |

**⚖️ Abgrenzungen:**

**Vertrag vs. Einseitiges Rechtsgeschäft:**
- Vertrag: Mindestens zwei Willenserklärungen
- Einseitiges RG: Eine Willenserklärung (z.B. Testament)

**Rechtliches vs. Soziales Verhältnis:**
- Rechtsbindungswille erforderlich
- Abgrenzung bei Gefälligkeiten
- Verkehrsanschauung maßgebend`,
          examples: [
            {
              id: 'ex-bgb-3-1-1',
              title: '🚗 Beispiel: Mitfahrgelegenheit',
              content: `**Sachverhalt:** Student S bietet Kommilitonin K regelmäßig eine Mitfahrgelegenheit an. K gibt ihm dafür 15 € Benzingeld pro Fahrt. Bei einem Unfall wird K verletzt und verlangt Schadensersatz von S.

**Rechtsproblem:** Liegt ein Vertragsverhältnis vor?

**Lösung:**
1. **Willenserklärungen:** 
   - Angebot des S: Mitnahme anbieten
   - Annahme der K: Einsteigen + Bezahlung

2. **Rechtsbindungswille:**
   - Regelmäßigkeit spricht dafür
   - Geldleistung indiziert ernsten Willen
   - Nicht bloße Gefälligkeit

3. **Ergebnis:** Beförderungsvertrag (+)
   - Vertragliche Haftung des S möglich
   - Verkehrssicherungspflichten

**Abgrenzung:** Einmalige unentgeltliche Mitnahme = bloße Gefälligkeit`,
              explanation: 'Die Regelmäßigkeit und das Entgelt sprechen für einen Rechtsbindungswillen.'
            }
          ]
        },
        {
          id: 'section-bgb-3-1-2',
          title: '📝 Das Angebot (§ 145 BGB)',
          content: `Das Angebot ist eine empfangsbedürftige Willenserklärung, die alle essentialia negotii enthält und deren Annahme den Vertrag perfekt macht.

**📋 Voraussetzungen eines wirksamen Angebots:**

**1. Bestimmtheit (Essentialia negotii):**
- **Vertragsparteien:** Wer soll Vertragspartner werden?
- **Leistungsgegenstand:** Was ist geschuldet?
- **Gegenleistung:** Welche Vergütung wird verlangt?
- **Vertragstyp:** Kauf, Miete, Dienst etc.

**2. Rechtsbindungswille:**
- Ernstliche Absicht zum Vertragsschluss
- Nicht nur Verhandlungsbereitschaft
- Objektiv erkennbar

**3. Empfangsbedürftigkeit:**
- Zugang beim Empfänger erforderlich
- §§ 130, 131 BGB analog anwendbar

**🔗 Bindungswirkung des Angebots (§ 145 BGB):**

**Grundsatz:** Angebot bindet den Antragenden
- Kann nicht frei widerrufen werden
- Bis zum Ablauf der Annahmefrist
- Schutz des Empfängers

**Ausnahmen:**
- **Widerrufsvorbehalt:** "Freibleibend", "unverbindlich"
- **Angebote an Anwesende:** Sofortige Annahme erforderlich
- **Angebote an Abwesende:** Annahme in angemessener Frist

**💡 Freiklauseln und ihre Wirkung:**

**"Freibleibend":**
- Kein verbindliches Angebot
- Nur invitatio ad offerendum
- Bestellannahme erforderlich

**"Solange Vorrat reicht":**
- Bedingte Bindung
- Angebot erlischt mit Vorrat

**"Preise freibleibend":**
- Nur Preisbindung aufgehoben
- Sonstige Leistung bestimmt

**🏪 Abgrenzung: Angebot vs. Invitatio ad offerendum:**

| Angebot | Invitatio ad offerendum |
|---------|-------------------------|
| Alle essentialia negotii bestimmt | Wesentliche Punkte offen |
| Bindungswirkung | Keine Bindung |
| Annahme perfektioniert Vertrag | Nur Aufforderung zur Offerte |

**Beispiele:**
- **Angebot:** Preisschild "Buch 20 €"
- **Invitatio:** Schaufensterauslage ohne Preise`,
          examples: [
            {
              id: 'ex-bgb-3-1-2',
              title: '🛒 Beispiel: Supermarkt-Kasse',
              content: `**Sachverhalt:** K nimmt im Supermarkt S eine Flasche Wein (Preisschild: 15 €) und geht zur Kasse. Die Kassiererin verlangt 15 €. K sagt: "Ich zahle nur 12 €."

**Rechtsproblem:** Wer macht das Angebot?

**Meinungsstreit:**
1. **Angebot durch Preisauszeichnung:**
   - Preisschild = Angebot
   - Zur Kasse gehen = Annahme
   - Problem: Bindung an Fehler

2. **Angebot durch Kunde (h.M.):**
   - Preisschild = invitatio ad offerendum
   - Zur Kasse gehen = Angebot des K
   - Kassieren = Annahme des S

**Lösung nach h.M.:**
- K macht Angebot auf Kauf für 15 € (konkludent)
- S kann annehmen oder ablehnen
- Hier: S nimmt nicht an (verlangt ursprünglich 15 €)
- Gegenangebot des K: 12 €
- S kann ablehnen → kein Vertrag`,
              explanation: 'Die h.M. schützt den Händler vor irrtümlicher Bindung an falsche Preise.'
            }
          ]
        },
        {
          id: 'section-bgb-3-1-3',
          title: '✅ Die Annahme (§ 147 BGB)',
          content: `Die Annahme ist die vorbehaltlose Zustimmung zu einem Angebot, die den Vertrag perfekt macht.

**📋 Voraussetzungen wirksamer Annahme:**

**1. Rechtzeitigkeit (§ 147 BGB):**
- **Anwesende:** Sofort (§ 147 I BGB)
- **Abwesende:** Angemessene Frist (§ 147 II BGB)
- **Bestimmte Frist:** Einhaltung erforderlich
- **Verspätung:** Erlöschen des Angebots

**2. Vorbehaltlosigkeit:**
- Unbedingte Zustimmung
- Keine Änderungen oder Ergänzungen
- Sonst: Neues Angebot (§ 150 II BGB)

**3. Empfangsbedürftigkeit:**
- Zugang beim Antragenden
- §§ 130 ff. BGB anwendbar
- Auch konkludent möglich

**🔄 Arten der Annahme:**

**Ausdrückliche Annahme:**
- Mündlich: "Ich nehme an"
- Schriftlich: "Hiermit bestelle ich..."
- Digital: Online-Bestellung

**Konkludente Annahme:**
- Durch schlüssiges Verhalten
- Lieferung der Ware
- Zahlung des Kaufpreises
- Inanspruchnahme der Leistung

**⏰ Besonderheiten bei der Annahmefrist:**

**Angemessene Frist bei Abwesenden:**
- Abhängig von Umständen
- Branche und Verkehrssitte
- Art der Kommunikation
- Eilbedürftigkeit

**Fristverlängerung:**
- Durch neue Umstände
- Rückfragen und Verhandlungen
- Konkludente Verlängerung

**🚫 Verspätete Annahme (§ 150 I BGB):**
- Angebot bereits erloschen
- Verspätete Annahme = neues Angebot
- Ursprünglicher Antragende kann annehmen
- Aber: Unverzügliche Ablehnung bei Missverständnis

**💼 Modifizierte Annahme (§ 150 II BGB):**
- Änderung des Angebotsinhalts
- Rechtlich: Ablehnung + neues Angebot
- Auch bei unwesentlichen Änderungen!
- Ausnahme: Kaufmännisches Bestätigungsschreiben

**🔍 Prüfungsschema Vertragsschluss:**
\`\`\`
I. Angebot (§ 145 BGB)
   1. Bestimmtheit (essentialia negotii)
   2. Rechtsbindungswille  
   3. Zugang beim Empfänger
   4. Noch nicht erloschen

II. Annahme (§ 147 BGB)
    1. Rechtzeitig
    2. Vorbehaltlos
    3. Zugang beim Antragenden

III. Weitere Wirksamkeitshindernisse?
     (Geschäftsfähigkeit, Form, Sittenwidrigkeit etc.)
\`\`\``,
          examples: [
            {
              id: 'ex-bgb-3-1-3',
              title: '📧 Beispiel: E-Mail-Bestellung',
              content: `**Sachverhalt:** 
Unternehmer U sendet am Montag, 10:00 Uhr per E-Mail ein Angebot an Kunde K: "Lieferung von 100 Bürolampen zu je 50 € bis Freitag." 
K antwortet am Donnerstag, 14:00 Uhr: "Einverstanden, aber 60 Lampen genügen."

**Rechtliche Bewertung:**

1. **Angebot des U:**
   - Bestimmtheit: Ware, Preis, Menge (+)
   - Rechtsbindungswille: Geschäftlich (+)
   - Zugang: E-Mail angekommen (+)
   - Frist: "bis Freitag" = bestimmte Frist

2. **"Annahme" des K:**
   - Rechtzeitig: Donnerstag vor Freitag (+)
   - Aber: Änderung der Menge (100 → 60)
   - § 150 II BGB: Modifizierte Annahme

3. **Ergebnis:**
   - Keine wirksame Annahme
   - Ablehnung + neues Angebot des K
   - U kann 60 Lampen-Angebot annehmen oder ablehnen`,
              explanation: 'Jede Änderung des Angebots, auch vermeintlich unwesentliche, führt zu einem neuen Angebot.'
            }
          ]
        },
        {
          id: 'section-bgb-3-1-4',
          title: '💻 Vertragsschluss im elektronischen Geschäftsverkehr',
          content: `Der elektronische Geschäftsverkehr hat besondere Regelungen für den Vertragsschluss entwickelt.

**📱 Online-Shop als Angebot oder Invitatio?**

**Überwiegende Ansicht:**
- Produktdarstellung = invitatio ad offerendum
- Kundenbestellung = Angebot
- Bestellbestätigung = Annahme
- Schutz des Händlers vor Irrtümern

**🔄 Ablauf Online-Vertragsschluss:**

**1. Produktpräsentation:**
- Warenbeschreibung, Bilder, Preis
- Allgemeine Geschäftsbedingungen
- Rechtlich: Invitatio ad offerendum

**2. In-den-Warenkorb-Legen:**
- Noch kein Vertragsschluss
- Nur Vorbereitungshandlung
- Jederzeit widerrufbar

**3. Bestellvorgang:**
- Eingabe der Bestelldaten
- Bestätigung der Bestellung
- Rechtlich: Angebot des Kunden

**4. Bestellbestätigung:**
- E-Mail-Eingangsbestätigung
- Noch keine Annahme!
- Nur Empfangsbestätigung

**5. Annahme durch Händler:**
- Separate Annahmeerklärung oder
- Versendung der Ware oder
- Bereitstellung digitaler Inhalte

**⚖️ Verbraucherschutz im E-Commerce:**

**Informationspflichten (§ 312i BGB):**
- Wesentliche Eigenschaften der Ware
- Identität des Unternehmers
- Gesamtpreis inkl. aller Zusatzkosten
- Zahlungs-, Liefer- und Erfüllungsmodalitäten

**Button-Lösung (§ 312j BGB):**
- Eindeutige Kennzeichnung kostenpflichtiger Bestellungen
- "Kaufen", "Kostenpflichtig bestellen"
- Nicht: "Anmelden", "Weiter"
- Fehlende Kennzeichnung → Unwirksamkeit

**Widerrufsrecht (§§ 355 ff. BGB):**
- 14 Tage ab Erhalt der Ware
- Formfreier Widerruf möglich
- Rückgabe der Ware an Verbraucher

**📞 Besonderheiten bei verschiedenen Kommunikationsmitteln:**

**E-Mail-Verkehr:**
- Zugang bei Abrufbarkeit
- Normale Geschäftszeiten
- Lesebestätigung empfehlenswert

**Telefon/Videokonferenz:**
- Wie unter Anwesenden
- Sofortige Annahme erforderlich
- Aufzeichnung als Beweis

**Messenger/Chat:**
- Je nach Umständen anwesend/abwesend
- Push-Nachrichten = sofort
- "Gelesen"-Status beachten`,
          memoryAids: [
            {
              id: 'mem-bgb-3-1-1',
              title: '🧠 Merkhilfe Online-Shop',
              content: `**P**roduktseite = invitatio (Einladung)
**B**estellung = Angebot des Kunden
**B**estätigung = Annahme des Händlers
**V**ersand = Erfüllung`
            }
          ]
        }
      ],
      resources: [
        {
          id: 'res-bgb-3-1-1',
          title: 'Gesetz zur Regelung des elektronischen Geschäftsverkehrs',
          url: 'https://www.gesetze-im-internet.de/bgb/__312i.html',
          type: 'website',
          description: 'Gesetzliche Regelungen zu elektronischen Geschäften und Online-Vertragsschlüssen'
        }
      ],
      glossary: [
        {
          term: 'Angebot',
          definition: 'Empfangsbedürftige Willenserklärung, die alle wesentlichen Vertragsbestandteile enthält und deren Annahme den Vertrag perfekt macht'
        },
        {
          term: 'Annahme',
          definition: 'Vorbehaltlose und rechtzeitige Zustimmung zu einem Angebot'
        },
        {
          term: 'Essentialia negotii',
          definition: 'Wesentliche Vertragsbestandteile, die für den jeweiligen Vertragstyp unverzichtbar sind'
        },
        {
          term: 'Invitatio ad offerendum',
          definition: 'Aufforderung zur Abgabe eines Angebots, selbst noch kein bindendes Angebot'
        },
        {
          term: 'Freiklausel',
          definition: 'Vorbehalt, der die Bindungswirkung eines Angebots ausschließt oder einschränkt'
        }
      ]
    },
    requiredMastery: 85,
    estimatedMinutes: 1200,
    exercises: []
  },

  // 3.2 Die Bedeutung des Schweigens und kaufmännische Bestätigungsschreiben (15 Stunden)
  {
    id: 'bgb-ke3-2-schweigen',
    moduleId: 'bgb-at',
    order: 6,
    title: '3.2 Die Bedeutung des Schweigens und kaufmännische Bestätigungsschreiben',
    objectives: [
      {
        id: 'obj-bgb-3-2-1',
        description: 'Die rechtliche Bedeutung von Schweigen im Rechtsverkehr verstehen',
        bloomLevel: 'understand'
      },
      {
        id: 'obj-bgb-3-2-2',
        description: 'Die Wirkung kaufmännischer Bestätigungsschreiben anwenden können',
        bloomLevel: 'apply'
      },
      {
        id: 'obj-bgb-3-2-3',
        description: 'Verbraucherschutz bei unbestellten Leistungen bewerten',
        bloomLevel: 'evaluate'
      }
    ],
    content: {
      id: 'content-bgb-3-2',
      type: 'mixed',
      sections: [
        {
          id: 'section-bgb-3-2-1',
          title: '🤐 Die rechtliche Bedeutung des Schweigens',
          content: `Schweigen ist grundsätzlich keine Willenserklärung, kann aber unter besonderen Umständen rechtliche Bedeutung erlangen.

**⚖️ Grundsatz: "Qui tacet, non utique fatetur"**
- Wer schweigt, stimmt nicht automatisch zu
- Schweigen ist grundsätzlich rechtlich neutral
- Keine stillschweigende Willenserklärung

**🔍 Ausnahmen vom Schweigegebot:**

**1. Gesetzliche Anordnung:**
- § 416 HGB: Kaufmännisches Bestätigungsschreiben
- § 362 HGB: Kontokorrentanerkennung
- Insolvenzrecht: Schweigen auf Forderungsanmeldung

**2. Vereinbarung der Parteien:**
- "Schweigen gilt als Zustimmung"
- Nur zwischen den Vertragsparteien
- Nicht gegenüber Dritten

**3. Verkehrssitte:**
- Branchenübliche Gepflogenheiten
- Jahrelange Geschäftsbeziehung
- Konkludente Geschäftsführung

**4. Besondere Rechtspflicht zum Reden:**
- Aufklärungs- und Hinweispflichten
- Treuepflichten in Dauerschuldverhältnissen
- Schutzpflichten nach § 241 II BGB

**🏪 Schweigen auf Angebote:**

**Regel:** Schweigen = keine Annahme
- Auch bei längerer Dauer
- Auch bei Geschäftsbeziehung
- Schutz vor ungewollter Bindung

**Ausnahme: Sonderfälle:**
- Probeverhältnisse mit Widerspruchsvorbehalt
- Mitgliedschaften mit Kündigungsfristen
- Dauerschuldverhältnisse (Zeitschriften)

**📦 Unbestellte Leistungen (§ 241a BGB):**
- Grundsätzlich keine Zahlungspflicht
- Verbraucherschutz im Fernabsatz
- Bereicherungsanspruch nur bei Verwendung
- Rücksendungskosten beim Lieferer`,
          examples: [
            {
              id: 'ex-bgb-3-2-1',
              title: '📰 Beispiel: Zeitschriften-Abo',
              content: `**Sachverhalt:** Verlag V sendet Student S seit 2 Jahren monatlich das Magazin "Jurastudent" und die Rechnung über 15 €. S hat nie bestellt, zahlt aber regelmäßig und liest das Heft.

**Rechtsproblem:** Liegt ein Abonnement-Vertrag vor?

**Lösung:**
1. **Kein ursprünglicher Vertrag:**
   - Keine Bestellung durch S
   - Unbestellte Sendung durch V

2. **Schweigen auf Angebote:**
   - Grundsätzlich keine Annahme
   - Auch nicht durch Entgegennahme

3. **Aber: Konkludente Annahme:**
   - 2 Jahre regelmäßige Zahlung
   - Nutzung der Zeitschrift
   - Schlüssiges Verhalten = Annahme

4. **Ergebnis:** Abonnement-Vertrag (+)
   - Durch konkludentes Verhalten entstanden
   - Nicht durch Schweigen allein

**Abgrenzung:** Reine Entgegennahme ohne Zahlung ≠ Annahme`,
              explanation: 'Entscheidend ist das Gesamtverhalten, nicht das Schweigen allein.'
            }
          ]
        },
        {
          id: 'section-bgb-3-2-2',
          title: '📄 Kaufmännisches Bestätigungsschreiben (§ 416 HGB)',
          content: `Das kaufmännische Bestätigungsschreiben ist eine wichtige Ausnahme vom Schweigegebot im Handelsverkehr.

**📋 Voraussetzungen des § 416 HGB:**

**1. Kaufleute auf beiden Seiten:**
- Absender: Kaufmann i.S.d. HGB
- Empfänger: Kaufmann i.S.d. HGB
- Keine Anwendung bei Verbrauchern

**2. Handelsgeschäft:**
- Geschäft muss für beide Teile Handelsgeschäft sein
- § 343 HGB: Beidseitiges Handelsgeschäft

**3. Unverzügliche Absendung:**
- Ohne schuldhaftes Zögern
- In der Regel innerhalb weniger Tage
- Geschäftsübliche Bearbeitungszeit

**4. Keine unverzügliche Widerspruchserhebung:**
- Empfänger muss unverzüglich widersprechen
- Schweigen = Bestätigung des Inhalts
- Widerspruchsobliegenheit

**💼 Inhalt des Bestätigungsschreibens:**

**Kernfunktion:**
- Beweisfunktion für mündliche Absprachen
- Klarstellung strittiger Punkte
- Geschäftsbrief mit Bestätigungscharakter

**Grenzen:**
- Keine neuen Vertragspunkte
- Nur Bestätigung bereits Vereinbarten
- Auslegung der mündlichen Abrede

**🚫 Widerspruch des Empfängers:**

**Form des Widerspruchs:**
- Grundsätzlich formfrei
- Auch konkludent möglich
- Eindeutig erkennbar

**Rechtzeitigkeit:**
- Unverzüglich nach Erhalt
- Ohne schuldhaftes Zögern
- Geschäftsübliche Bearbeitungszeit

**Folgen des Widerspruchs:**
- Bestätigungsschreiben unwirksam
- Rückfall auf ursprüngliche Vereinbarung
- Eventuell Beweisprobleme

**⚖️ Rechtsfolgen bei fehlendem Widerspruch:**

**Beweiserleichterung:**
- Vermutung für Richtigkeit des Inhalts
- Umkehr der Beweislast
- Andere Partei muss Gegenbeweis führen

**Grenzen der Beweiserleichterung:**
- Nur bei vernünftigem Geschäftsinhalt
- Nicht bei offensichtlich falschen Angaben
- Nicht bei sittenwidrigen Klauseln`,
          examples: [
            {
              id: 'ex-bgb-3-2-2',
              title: '🏭 Beispiel: Maschinenverkauf',
              content: `**Sachverhalt:** 
Maschinenhändler H und Fabrikant F verhandeln mündlich über den Verkauf einer Produktionsmaschine. Einigkeit über Preis (100.000 €), aber Unklarheit über Liefertermin.

H sendet am nächsten Tag Bestätigungsschreiben: "Bestätige Verkauf Maschine XY für 100.000 €, Lieferung bis 30.6."

F reagiert nicht. Am 15.7. mahnt F die Lieferung an.

**Rechtliche Bewertung:**

1. **§ 416 HGB anwendbar:**
   - Beide Kaufleute (+)
   - Handelsgeschäft beidseitig (+)
   - Unverzügliche Absendung (+)

2. **Inhalt des Bestätigungsschreibens:**
   - Preis: Bereits vereinbart ✓
   - Liefertermin: Streitpunkt, aber konkretisiert

3. **Fehlender Widerspruch:**
   - F schwieg über 2 Wochen
   - Nicht unverzüglich widersprochen
   - § 416 HGB einschlägig

4. **Ergebnis:** Liefertermin 30.6. gilt als vereinbart
   - Beweiserleichterung für H
   - F hätte sofort widersprechen müssen`,
              explanation: 'Das kaufmännische Bestätigungsschreiben dient der Rechtssicherheit im Handelsverkehr.'
            }
          ]
        },
        {
          id: 'section-bgb-3-2-3',
          title: '🛡️ Verbraucherschutz bei unbestellten Leistungen',
          content: `Das Gesetz schützt Verbraucher besonders vor unerwünschten Geschäften durch Schweigen.

**📖 § 241a BGB - Unbestellte Leistungen:**

**Tatbestand:**
- Unternehmer erbringt Leistung
- Ohne vertragliche Verpflichtung
- Gegenüber Verbraucher
- Kenntnis der fehlenden Bestellung

**Rechtsfolge:**
- Keine Vergütungspflicht des Verbrauchers
- Auch nicht bei Verwendung/Verbrauch
- Schutz vor "Schweigen-als-Annahme"-Praktiken

**🚫 Praktische Fälle:**

**Klassische "Schweigen-Fallen":**
- Unbestellte Zeitschriften
- Branchenbuch-Einträge
- Software-Updates gegen Entgelt
- Ungewollte Premium-Services

**Moderne Varianten:**
- Handy-Abos durch versehentliche App-Nutzung
- Streaming-Services nach Probezeit
- Cloud-Speicher-Erweiterungen
- In-App-Käufe

**⚖️ Abgrenzung zu berechtigten Forderungen:**

**Bestellte Leistungen:**
- Auch bei vergessener Bestellung
- Auch bei indirekter Bestellung (AGB)
- Beweis der Bestellung beim Unternehmer

**Folgelieferungen:**
- Bei vereinbarten Dauerschuldverhältnissen
- Bei ordnungsgemäßer Kündigung
- Bei automatischen Verlängerungen (AGB)

**🛒 Besonderheiten im Online-Handel:**

**Kostenfallen-Verordnung:**
- Eindeutige Kennzeichnung von Kosten
- Button-Lösung bei Bestellvorgängen
- Widerrufsrecht bei unklaren Bestellungen

**Push-Nachrichten und Werbung:**
- Opt-in-Erfordernis für Marketing
- Schweigen ≠ Einwilligung in Werbung
- Beschwerde bei Datenschutzbehörden

**💰 Bereicherungsrecht bei unbestellten Leistungen:**

**Grundsätzlich kein Bereicherungsausgleich:**
- § 241a BGB als Spezialregelung
- Schutz vor ungewollter Bereicherung
- Auch bei objektiver Wertsteigerung

**Ausnahme: Bewusste Nutzung:**
- Kenntnisnahme der fehlenden Bestellung
- Trotzdem dauerhafte Nutzung
- Dann: Bereicherungsanspruch möglich`,
          selfTest: {
            questions: [
              {
                id: 'q-bgb-3-2-1',
                question: 'Welche Voraussetzungen müssen für ein kaufmännisches Bestätigungsschreiben nach § 416 HGB vorliegen?',
                correctAnswer: 'Beide Parteien müssen Kaufleute sein, es muss ein beidseitiges Handelsgeschäft vorliegen, das Schreiben muss unverzüglich abgesendet werden und der Empfänger darf nicht unverzüglich widersprechen.'
              },
              {
                id: 'q-bgb-3-2-2',
                question: 'Was regelt § 241a BGB und welche Rechtsfolge hat diese Norm?',
                correctAnswer: '§ 241a BGB regelt unbestellte Leistungen an Verbraucher. Die Rechtsfolge ist, dass keine Vergütungspflicht entsteht, auch wenn der Verbraucher die Leistung verwendet oder verbraucht.'
              }
            ]
          }
        }
      ],
      resources: [
        {
          id: 'res-bgb-3-2-1',
          title: '§ 241a BGB - Unbestellte Leistungen',
          url: 'https://www.gesetze-im-internet.de/bgb/__241a.html',
          type: 'website',
          description: 'Verbraucherschutz bei unbestellten Leistungen'
        },
        {
          id: 'res-bgb-3-2-2',
          title: '§ 416 HGB - Kaufmännisches Bestätigungsschreiben',
          url: 'https://www.gesetze-im-internet.de/hgb/__416.html',
          type: 'website',
          description: 'Regelung zu kaufmännischen Bestätigungsschreiben im Handelsverkehr'
        }
      ],
      glossary: [
        {
          term: 'Kaufmännisches Bestätigungsschreiben',
          definition: 'Schreiben eines Kaufmanns an einen anderen Kaufmann zur Bestätigung einer mündlich getroffenen Vereinbarung (§ 416 HGB)'
        },
        {
          term: 'Schweigen',
          definition: 'Unterlassen einer Erklärung, grundsätzlich rechtlich neutral, ausnahmsweise als Willenserklärung zu werten'
        },
        {
          term: 'Unbestellte Leistungen',
          definition: 'Leistungen eines Unternehmers an einen Verbraucher ohne vertragliche Grundlage (§ 241a BGB)'
        }
      ]
    },
    requiredMastery: 85,
    estimatedMinutes: 900,
    exercises: []
  },

  // 3.3 Dissens und vorvertragliche Schuldverhältnisse (15 Stunden)
  {
    id: 'bgb-ke3-3-dissens',
    moduleId: 'bgb-at',
    order: 7,
    title: '3.3 Dissens und vorvertragliche Schuldverhältnisse',
    objectives: [
      {
        id: 'obj-bgb-3-3-1',
        description: 'Offenen und versteckten Dissens unterscheiden und rechtlich bewerten',
        bloomLevel: 'analyze'
      },
      {
        id: 'obj-bgb-3-3-2',
        description: 'Culpa in contrahendo und ihre Voraussetzungen anwenden',
        bloomLevel: 'apply'
      },
      {
        id: 'obj-bgb-3-3-3',
        description: 'Schadensersatzansprüche aus vorvertraglichen Pflichtverletzungen prüfen',
        bloomLevel: 'evaluate'
      }
    ],
    content: {
      id: 'content-bgb-3-3',
      type: 'mixed',
      sections: [
        {
          id: 'section-bgb-3-3-1',
          title: '❌ Der Dissens (Einigungsmangel)',
          content: `Dissens liegt vor, wenn die Willenserklärungen der Parteien nicht übereinstimmen.

**🎯 Begriff des Dissens:**
Dissens = Mangel an Einigung zwischen den Vertragsparteien über wesentliche Vertragspunkte

**📊 Arten des Dissens:**

**1. Offener Dissens (§ 154 I BGB):**
- Parteien erkennen Uneinigkeit
- Bewusste Meinungsverschiedenheit
- Kein Vertrag zustande gekommen

**2. Versteckter Dissens (§ 155 BGB):**
- Parteien glauben, einig zu sein
- Tatsächlich verschiedene Vorstellungen
- Objektive Unvereinbarkeit

**⚖️ Offener Dissens (§ 154 BGB):**

**Tatbestand:**
- Erkannte Uneinigkeit über Vertragspunkt
- Vorbehalt weiterer Vereinbarung
- "Agreement to disagree"

**Rechtsfolge:**
- Grundsätzlich kein Vertrag
- Ausnahme: Nebenpunkte (§ 154 II BGB)
- Dispositives Recht als Lückenfüller

**§ 154 II BGB - Nebenpunkte:**
- Uneinigkeit über unwesentliche Punkte
- Vertrag im Übrigen wirksam
- Gesetzliche Regelung tritt ein

**🔍 Versteckter Dissens (§ 155 BGB):**

**Tatbestand:**
- Verschiedene Auslegung derselben Erklärung
- Beide Auslegungen vertretbar
- Keine objektiv richtige Auslegung

**Rechtsfolge:**
- Vertrag nicht zustande gekommen
- Falsa demonstratio non nocet greift nicht
- Auslegung nach §§ 133, 157 BGB erfolglos

**🔄 Lösungsansätze bei Dissens:**

**Nachverhandlung:**
- Beseitigung der Uneinigkeit
- Neue Willenserklärungen
- Rückwirkung möglich

**Vertragsergänzung:**
- Bei Regelungslücken
- Dispositives Recht
- Ergänzende Vertragsauslegung

**Vertragsanpassung:**
- Bei Äquivalenzstörung
- Wegfall der Geschäftsgrundlage
- § 313 BGB analog`,
          examples: [
            {
              id: 'ex-bgb-3-3-1',
              title: '🚗 Beispiel: Autokauf mit Motortyp-Dissens',
              content: `**Sachverhalt:** 
K möchte einen "BMW 3er" kaufen. V zeigt verschiedene Modelle. K sagt: "Ich nehme den BMW 3er für 25.000 €." V antwortet: "Einverstanden." 
K dachte an den Benziner, V an den günstigeren Diesel.

**Rechtsproblem:** Liegt versteckter Dissens vor?

**Lösung:**

1. **Vertragsschluss:**
   - Angebot: "BMW 3er für 25.000 €"
   - Annahme: "Einverstanden"
   - Scheinbar Einigung (+)

2. **Auslegung nach §§ 133, 157 BGB:**
   - K meinte: BMW 3er Benziner
   - V meinte: BMW 3er Diesel
   - Objektive Auslegung möglich?

3. **Objektive Auslegung:**
   - "BMW 3er" umfasst beide Motortypen
   - Preis 25.000 € könnte für beide passen
   - Verkehrsanschauung uneinheitlich

4. **Ergebnis: Versteckter Dissens (§ 155 BGB)**
   - Keine objektiv richtige Auslegung
   - Vertrag nicht zustande gekommen
   - Nachverhandlung erforderlich`,
              explanation: 'Bei verstecktem Dissens scheitert bereits der Vertragsschluss, nicht erst die Erfüllung.'
            }
          ]
        },
        {
          id: 'section-bgb-3-3-2',
          title: '⚖️ Culpa in contrahendo (c.i.c.)',
          content: `Die culpa in contrahendo regelt die Haftung für Verschulden bei Vertragsverhandlungen.

**📖 Rechtliche Grundlage:**
§§ 311 II, III, 241 II, 280 I BGB - Vorvertragliches Schuldverhältnis

**🎯 Entstehung vorvertraglicher Schuldverhältnisse:**

**§ 311 II BGB - Verhandlungen:**
- Aufnahme von Vertragsverhandlungen
- Anbahnung eines Vertrags
- Auch bei scheiternden Verhandlungen

**§ 311 III BGB - Drittschutz:**
- Einwirkung auf Vertragsverhandlungen
- Besonderes Vertrauen
- Schutz vertragsähnlicher Beziehungen

**🔍 Pflichten aus vorvertraglichem Schuldverhältnis:**

**Aufklärungs- und Hinweispflichten:**
- Über wesentliche Umstände
- Bei Wissensgefälle
- Schutz vor nachteiligen Entscheidungen

**Sorgfaltspflichten:**
- Bei Vertragsverhandlungen
- Bei Vertragsanbahnung
- Schutz von Person und Vermögen

**Rücksichtnahmepflichten:**
- § 241 II BGB analog
- Schutz der Rechtsgüter des anderen
- Vertrauensschutz

**💰 Schadensersatz bei c.i.c.:**

**Anspruchsgrundlage:**
§§ 280 I, 311 II BGB oder §§ 280 I, 311 III BGB

**Voraussetzungen:**
1. Vorvertragliches Schuldverhältnis
2. Pflichtverletzung
3. Vertretenmüssen (§ 276 BGB)
4. Schaden
5. Kausalität

**Schadensarten:**
- **Vertrauensschaden (negatives Interesse):**
  - Aufwendungen für Verhandlungen
  - Entgangene andere Geschäfte
  - Nutzloser Aufwand

- **Erfüllungsschaden (positives Interesse):**
  - Nur bei besonders schweren Pflichtverletzungen
  - Schutz wie bei erfülltem Vertrag

**🏪 Anwendungsfälle der c.i.c.:**

**1. Aufklärungspflichtverletzungen:**
- Verschweigen wesentlicher Mängel
- Falsche Auskünfte über Eigenschaften
- Unterlassen gebotener Hinweise

**2. Abbruch von Verhandlungen:**
- Grundsätzlich erlaubt (Abschlussfreiheit)
- Aber: Treuwidrig bei fortgeschrittenen Verhandlungen
- Erweckung berechtigten Vertrauens

**3. Verletzung von Sorgfaltspflichten:**
- Unzureichende Vorbereitung
- Fahrlässige Angaben
- Missachtung erkennbarer Interessen

**4. Eingriff Dritter:**
- § 311 III BGB
- Tortious interference
- Schutz vor Vertragsverhinderung`,
          examples: [
            {
              id: 'ex-bgb-3-3-2',
              title: '🏠 Beispiel: Hauskauf mit verschwiegenem Mangel',
              content: `**Sachverhalt:** 
V verkauft sein Haus an K für 300.000 €. V weiß, dass das Dach undicht ist (Reparaturkosten: 20.000 €), teilt dies K aber nicht mit. K entdeckt den Mangel nach Vertragsschluss.

**Rechtsproblem:** c.i.c.-Anspruch des K gegen V?

**Lösung:**

1. **Vorvertragliches Schuldverhältnis (§ 311 II BGB):**
   - Vertragsverhandlungen (+)
   - Entstehung von Nebenpflichten (+)

2. **Pflichtverletzung:**
   - Aufklärungspflicht über wesentliche Mängel
   - Verschwiegener Dachschaden
   - Erheblichkeit: 20.000 € von 300.000 € (+)

3. **Vertretenmüssen:**
   - V kannte den Mangel (Vorsatz) (+)

4. **Schaden des K:**
   - Vertrauensschaden: Nutzlose Aufwendungen
   - Oder: Erfüllungsschaden (Minderung des Hauswerts)

5. **Ergebnis:** Schadensersatzanspruch (+)
   - Höhe: Reparaturkosten oder Wertverlust
   - Wahlrecht des K bei Rücktritt`,
              explanation: 'Die c.i.c. schützt vor arglistigem Verschweigen wesentlicher Umstände.'
            }
          ]
        },
        {
          id: 'section-bgb-3-3-3',
          title: '🚫 Abbruch von Vertragsverhandlungen',
          content: `Der Abbruch von Vertragsverhandlungen ist grundsätzlich zulässig, kann aber unter Umständen schadensersatzpflichtig sein.

**⚖️ Grundsatz der Abschlussfreiheit:**
- Recht, Verhandlungen abzubrechen
- Auch in fortgeschrittenem Stadium
- Schutz der Privatautonomie
- Keine Kontrahierungspflicht

**🚫 Grenzen der Abschlussfreiheit:**

**Treuwidriger Verhandlungsabbruch:**
- Weckung berechtigten Vertrauens
- Besondere Investitionen des Partners
- Keine sachlichen Gründe für Abbruch
- Ausnutzung der Verhandlungsposition

**Rechtsmissbrauch (§ 242 BGB):**
- Nur "Scheinsondierung"
- Ausforschung von Geschäftsgeheimnissen
- Bewusstes Hinhalten ohne Abschlussabsicht

**💡 Maßstäbe für Treuwidrigkeit:**

**Objektive Faktoren:**
- Stadium der Verhandlungen
- Aufwendungen des Partners
- Öffentlichkeit der Verhandlungen
- Dauer der Gespräche

**Subjektive Faktoren:**
- Erwecktes Vertrauen
- Ernstlichkeit der Absichten
- Grund für Abbruch
- Umgang mit Vertrauenserwartung

**📊 Fallgruppen problematischer Abbrüche:**

**1. Letter of Intent:**
- Absichtserklärung ohne Bindung
- Aber: Verpflichtung zu ernsthaften Verhandlungen
- Treuwidriger Abbruch bei erkennbarer Aussichtslosigkeit

**2. Öffentliche Ausschreibungen:**
- Besonderes Vertrauen der Bieter
- Transparenz- und Gleichbehandlungsgebot
- Willkürverbot bei Zuschlagsentscheidung

**3. Exklusivverhandlungen:**
- Verzicht auf andere Geschäfte
- Besondere Abhängigkeit
- Erhöhte Sorgfaltspflichten

**💰 Schadensersatz bei treuwidrigem Abbruch:**

**Anspruchsgrundlage:**
§§ 280 I, 311 II BGB (c.i.c.)

**Schaden (negatives Interesse):**
- Verhandlungskosten
- Anwalts- und Gutachterkosten
- Reisekosten, Zeitaufwand
- Entgangene andere Geschäfte

**Grenzen:**
- Kein Anspruch auf Vertragsschluss
- Kein positives Interesse (umstritten)
- Mitverschulden des Geschädigten

**🔍 Prüfungsschema c.i.c.:**
\`\`\`
I. Vorvertragliches Schuldverhältnis (§ 311 II/III BGB)
   1. Vertragsverhandlungen/Anbahnung
   2. Besonderes Vertrauen/Einwirkung Dritter

II. Pflichtverletzung
    1. Aufklärungs-/Hinweispflicht
    2. Sorgfaltspflicht
    3. Rücksichtnahmepflicht

III. Vertretenmüssen (§ 276 BGB)
     Vorsatz oder Fahrlässigkeit

IV. Schaden
    1. Vertrauensschaden (Regelfall)
    2. Erfüllungsschaden (Ausnahme)

V. Kausalität
   Haftungsbegründende und -ausfüllende

VI. Mitverschulden (§ 254 BGB)
\`\`\``,
          selfTest: {
            questions: [
              {
                id: 'q-bgb-3-3-1',
                question: 'Was ist der Unterschied zwischen offenem und verstecktem Dissens?',
                correctAnswer: 'Beim offenen Dissens (§ 154 BGB) erkennen die Parteien ihre Uneinigkeit, beim versteckten Dissens (§ 155 BGB) glauben sie fälschlich, einig zu sein, obwohl objektiv keine Übereinstimmung vorliegt.'
              },
              {
                id: 'q-bgb-3-3-2',
                question: 'Welcher Schaden ist bei culpa in contrahendo grundsätzlich ersatzfähig?',
                correctAnswer: 'Grundsätzlich ist das negative Interesse (Vertrauensschaden) ersatzfähig, also der Schaden, der durch das Vertrauen auf den Vertragsschluss entstanden ist (Verhandlungskosten, entgangene andere Geschäfte).'
              }
            ]
          }
        }
      ],
      resources: [
        {
          id: 'res-bgb-3-3-1',
          title: '§ 311 BGB - Entstehung von Schuldverhältnissen',
          url: 'https://www.gesetze-im-internet.de/bgb/__311.html',
          type: 'website',
          description: 'Grundlagen zur Entstehung vertraglicher und vorvertraglicher Schuldverhältnisse'
        },
        {
          id: 'res-bgb-3-3-2',
          title: '§§ 154, 155 BGB - Dissens',
          url: 'https://www.gesetze-im-internet.de/bgb/__154.html',
          type: 'website',
          description: 'Regelungen zu offenem und verstecktem Dissens beim Vertragsschluss'
        }
      ],
      glossary: [
        {
          term: 'Dissens',
          definition: 'Mangel an Übereinstimmung der Willenserklärungen bezüglich wesentlicher Vertragspunkte'
        },
        {
          term: 'Culpa in contrahendo',
          definition: 'Verschulden bei Vertragsverhandlungen; Haftung für Pflichtverletzungen im vorvertraglichen Schuldverhältnis'
        },
        {
          term: 'Negatives Interesse',
          definition: 'Schaden, der durch das Vertrauen auf einen (wirksamen) Vertragsschluss entstanden ist (Vertrauensschaden)'
        },
        {
          term: 'Treuwidriger Verhandlungsabbruch',
          definition: 'Abbruch von Vertragsverhandlungen unter Umständen, die gegen Treu und Glauben verstoßen'
        }
      ]
    },
    requiredMastery: 85,
    estimatedMinutes: 900,
    exercises: []
  }
];

// Exercises for all units in Kurseinheit 3
const exercisesKE3: Exercise[] = [
  // Exercises for 3.1 Grundlagen des Vertragsschlusses
  {
    id: 'ex-bgb-ke3-1-1',
    type: 'multipleChoice',
    difficulty: 'beginner',
    points: 10,
    content: {
      question: 'Welche Aussage zur Bindungswirkung von Angeboten ist richtig?',
      options: [
        'Angebote sind grundsätzlich unverbindlich und können jederzeit widerrufen werden',
        'Angebote binden den Antragesteller gemäß § 145 BGB, außer es ist etwas anderes bestimmt',
        'Angebote sind nur bei notarieller Form bindend',
        'Die Bindungswirkung hängt vom Wert des Angebots ab'
      ]
    },
    solution: {
      correct: 'Angebote binden den Antragesteller gemäß § 145 BGB, außer es ist etwas anderes bestimmt',
      explanation: '§ 145 BGB normiert die grundsätzliche Bindung des Antragenden an sein Angebot. Diese kann nur durch Freiklauseln oder andere gesetzliche Ausnahmen ausgeschlossen werden.'
    }
  },
  {
    id: 'ex-bgb-ke3-1-2',
    type: 'caseAnalysis',
    difficulty: 'intermediate',
    points: 20,
    content: {
      question: 'Analysieren Sie folgenden Online-Kauffall:',
      scenario: `Kunde K bestellt in Online-Shop S ein Smartphone für 299 €. Nach der Bestellung erhält K eine E-Mail: "Vielen Dank für Ihre Bestellung. Wir prüfen diese und melden uns binnen 24 Stunden."

Nach 3 Tagen sendet S eine E-Mail: "Leider ist das Gerät nicht mehr verfügbar. Wir stornieren Ihre Bestellung."

K besteht auf Lieferung, da der Kaufvertrag seiner Ansicht nach zustande gekommen ist.`,
      tasks: [
        'Prüfen Sie, ob ein Kaufvertrag zustande gekommen ist',
        'Wer macht das Angebot im Online-Shop?',
        'Welche Bedeutung hat die erste E-Mail?'
      ]
    },
    solution: {
      correct: {
        structure: `I. Vertragsschluss zwischen K und S?
1. Angebot
   a) Angebot durch Online-Präsentation?
      - h.M.: Nur invitatio ad offerendum
      - Schutz vor irrtümlicher Bindung
   b) Angebot durch Bestellung des K (+)
      - Alle essentialia negotii bestimmt
      - Rechtsbindungswille (+)

2. Annahme durch S
   a) Erste E-Mail: Nur Empfangsbestätigung
      - "Prüfung" spricht gegen Annahme
      - Noch kein Vertrag
   b) Zweite E-Mail: Ablehnung
      - "Stornierung" = Ablehnung des Angebots
      - Angebot des K erloschen

II. Ergebnis: Kein Kaufvertrag zustande gekommen
    - K machte Angebot durch Bestellung
    - S lehnte durch "Stornierung" ab
    - Keine Lieferpflicht`,
        keyPoints: [
          'Online-Shop-Präsentation ist grundsätzlich nur invitatio ad offerendum',
          'Kundenbestellung ist das Angebot',
          'Erste E-Mail meist nur Empfangsbestätigung, keine Annahme',
          'Ablehnung lässt Angebot erlöschen'
        ]
      },
      explanation: 'Dieser Fall zeigt die typische Rechtslage bei Online-Käufen und den Schutz der Händler vor ungewollter Bindung.'
    }
  },
  {
    id: 'ex-bgb-ke3-1-3',
    type: 'fillInBlanks',
    difficulty: 'beginner',
    points: 15,
    content: {
      question: 'Vervollständigen Sie die Aussagen zu Angebot und Annahme:',
      context: 'Ein Angebot muss alle _____ enthalten, um annahmefähig zu sein. Die Annahme muss _____ und _____ erfolgen. Eine modifizierte Annahme ist nach § _____ BGB rechtlich eine _____ verbunden mit einem neuen _____.',
      blanks: 6
    },
    solution: {
      correct: ['essentialia negotii', 'rechtzeitig', 'vorbehaltlos', '150 II', 'Ablehnung', 'Angebot'],
      explanation: 'Diese Grundbegriffe sind essentiell für das Verständnis des Vertragsschlusses.'
    }
  },
  {
    id: 'ex-bgb-ke3-1-4',
    type: 'dragDrop',
    difficulty: 'intermediate',
    points: 15,
    content: {
      question: 'Ordnen Sie die Begriffe den korrekten Definitionen zu:',
      items: [
        'Angebot',
        'Invitatio ad offerendum',
        'Annahme',
        'Freiklausel'
      ],
      targets: [
        'Empfangsbedürftige WE mit allen essentialia negotii',
        'Aufforderung zur Abgabe eines Angebots',
        'Vorbehaltlose Zustimmung zum Angebot',
        'Ausschluss der Bindungswirkung des Angebots'
      ]
    },
    solution: {
      correct: {
        'Angebot': 'Empfangsbedürftige WE mit allen essentialia negotii',
        'Invitatio ad offerendum': 'Aufforderung zur Abgabe eines Angebots',
        'Annahme': 'Vorbehaltlose Zustimmung zum Angebot',
        'Freiklausel': 'Ausschluss der Bindungswirkung des Angebots'
      },
      explanation: 'Diese Grundbegriffe müssen klar voneinander abgegrenzt werden können.'
    }
  },

  // Exercises for 3.2 Schweigen und kaufmännische Bestätigungsschreiben
  {
    id: 'ex-bgb-ke3-2-1',
    type: 'trueFalse',
    difficulty: 'beginner',
    points: 10,
    content: {
      question: 'Schweigen gilt grundsätzlich als Zustimmung zu einem Angebot.'
    },
    solution: {
      correct: false,
      explanation: 'Schweigen ist grundsätzlich rechtlich neutral und gilt nicht als Willenserklärung. Nur in besonderen Ausnahmefällen (z.B. § 416 HGB) kann Schweigen rechtliche Bedeutung haben.'
    }
  },
  {
    id: 'ex-bgb-ke3-2-2',
    type: 'multipleChoice',
    difficulty: 'intermediate',
    points: 15,
    content: {
      question: 'Welche Voraussetzung ist für § 416 HGB (kaufmännisches Bestätigungsschreiben) NICHT erforderlich?',
      options: [
        'Beide Parteien müssen Kaufleute sein',
        'Das Geschäft muss für beide ein Handelsgeschäft sein',
        'Das Schreiben muss notariell beglaubigt sein',
        'Der Empfänger darf nicht unverzüglich widersprechen'
      ]
    },
    solution: {
      correct: 'Das Schreiben muss notariell beglaubigt sein',
      explanation: 'Das kaufmännische Bestätigungsschreiben ist grundsätzlich formfrei. Eine notarielle Beglaubigung ist nicht erforderlich.'
    }
  },
  {
    id: 'ex-bgb-ke3-2-3',
    type: 'caseAnalysis',
    difficulty: 'advanced',
    points: 25,
    content: {
      question: 'Beurteilen Sie folgenden Fall zu § 241a BGB:',
      scenario: `Zeitschriftenverlag V sendet Rentner R monatlich das Magazin "Seniorenzeit" und eine Rechnung über 12 €. R hat die Zeitschrift nie bestellt. Im ersten Monat warf er sie ungelesen weg. Ab dem zweiten Monat liest er sie regelmäßig und freut sich darüber, zahlt aber nie.

Nach einem Jahr verlangt V Zahlung aller Rechnungen (144 €) und beruft sich darauf, dass R die Zeitschriften verwendet habe.`,
      tasks: [
        'Prüfen Sie die Anwendbarkeit von § 241a BGB',
        'Hat V einen Zahlungsanspruch gegen R?',
        'Welche Rolle spielt das Lesen der Zeitschriften?'
      ]
    },
    solution: {
      correct: {
        structure: `I. Anspruch des V gegen R auf Zahlung?
1. Vertraglicher Anspruch
   a) Vertragsschluss fraglich
      - Keine Bestellung durch R
      - Schweigen grundsätzlich keine Annahme
      - Auch Lesen = keine konkludente Annahme bei unbestellter Sendung
   b) Ergebnis: Kein Vertrag (-)

2. Bereicherungsanspruch (§ 812 I 1 Alt. 1 BGB)
   a) Etwas erlangt: Zeitschriften (+)
   b) Ohne Rechtsgrund (+)
   c) Auf Kosten des V (+)
   d) Aber: § 241a BGB als Spezialregelung

II. § 241a BGB - Unbestellte Leistungen
    1. Unternehmer V (+)
    2. Leistung an Verbraucher R (+)
    3. Ohne vertragliche Verpflichtung (+)
    4. Rechtsfolge: Keine Vergütungspflicht

III. Ergebnis: V hat keinen Zahlungsanspruch
     - § 241a BGB schützt vor "Schweigen-Fallen"
     - Auch bei tatsächlicher Nutzung keine Zahlungspflicht
     - Verbraucherschutz vor ungewollten Verträgen`,
        keyPoints: [
          '§ 241a BGB schützt Verbraucher vor unbestellten Leistungen',
          'Keine Zahlungspflicht auch bei Nutzung/Verwendung',
          'Spezialregelung verdrängt Bereicherungsrecht',
          'Schutz vor "Schweigen-als-Annahme"-Geschäften'
        ]
      },
      explanation: '§ 241a BGB ist eine wichtige Verbraucherschutznorm gegen unlautere Geschäftspraktiken.'
    }
  },

  // Exercises for 3.3 Dissens und c.i.c.
  {
    id: 'ex-bgb-ke3-3-1',
    type: 'multipleChoice',
    difficulty: 'intermediate',
    points: 15,
    content: {
      question: 'Was kennzeichnet einen versteckten Dissens nach § 155 BGB?',
      options: [
        'Die Parteien erkennen ihre Uneinigkeit und verschieben die Entscheidung',
        'Die Parteien glauben fälschlich, einig zu sein, obwohl objektiv keine Übereinstimmung vorliegt',
        'Eine Partei täuscht die andere über ihre wahren Absichten',
        'Die Parteien sind sich nur über Nebenpunkte uneinig'
      ]
    },
    solution: {
      correct: 'Die Parteien glauben fälschlich, einig zu sein, obwohl objektiv keine Übereinstimmung vorliegt',
      explanation: 'Beim versteckten Dissens besteht ein Irrtum über das Vorliegen einer Einigung. Die Parteien verwenden zwar dieselben Begriffe, verstehen aber etwas anderes darunter.'
    }
  },
  {
    id: 'ex-bgb-ke3-3-2',
    type: 'caseAnalysis',
    difficulty: 'advanced',
    points: 25,
    content: {
      question: 'Prüfen Sie folgenden c.i.c.-Fall:',
      scenario: `Autohaus A und Kunde K verhandeln wochenlang über den Kauf eines Gebrauchtwagens. A weiß, dass der Motor einen versteckten Schaden hat (Reparatur: 3.000 €), verschweigt dies aber. K beauftragt auf As Drängen bereits einen Gutachter (200 €) und nimmt einen Kredit auf.

Kurz vor Vertragsschluss erfährt K von einem Freund vom Motorschaden und bricht die Verhandlungen ab.`,
      tasks: [
        'Prüfen Sie einen c.i.c.-Anspruch des K gegen A',
        'Welche Pflichtverletzung liegt vor?',
        'Welcher Schaden ist ersatzfähig?'
      ]
    },
    solution: {
      correct: {
        structure: `I. Anspruch K gegen A auf Schadensersatz aus c.i.c. (§§ 280 I, 311 II BGB)

1. Vorvertragliches Schuldverhältnis (§ 311 II BGB)
   a) Vertragsverhandlungen (+) - wochenlange Gespräche
   b) Besonderes Vertrauen (+) - intensiver Kontakt

2. Pflichtverletzung
   a) Aufklärungspflicht über wesentliche Mängel
      - Versteckter Motorschaden erheblich
      - A kannte den Schaden
      - Verschweigen trotz Nachfrage/Vertrauen
   b) Pflichtverletzung (+)

3. Vertretenmüssen (§ 276 BGB)
   - Vorsätzliches Verschweigen (+)

4. Schaden des K
   a) Vertrauensschaden (negatives Interesse):
      - Gutachterkosten: 200 € (+)
      - Kreditkosten: Nur soweit nutzlos entstanden
   b) Schaden (+)

5. Kausalität: Ohne Pflichtverletzung keine Aufwendungen (+)

II. Ergebnis: Schadensersatzanspruch in Höhe von mindestens 200 €`,
        keyPoints: [
          'Aufklärungspflicht bei wesentlichen Mängeln',
          'Vorsätzliches Verschweigen = schwere Pflichtverletzung',
          'Vertrauensschaden umfasst nutzlose Aufwendungen',
          'C.i.c. schützt vor arglistigem Verhalten'
        ]
      },
      explanation: 'Die culpa in contrahendo schützt vor unredlichem Verhalten in Vertragsverhandlungen.'
    }
  },
  {
    id: 'ex-bgb-ke3-3-3',
    type: 'dragDrop',
    difficulty: 'intermediate',
    points: 20,
    content: {
      question: 'Ordnen Sie die Schadensarten den korrekten Beschreibungen zu:',
      items: [
        'Positives Interesse',
        'Negatives Interesse',
        'Vertrauensschaden',
        'Erfüllungsschaden'
      ],
      targets: [
        'Schaden bei ordnungsgemäßer Vertragserfüllung',
        'Schaden durch Vertrauen auf Vertragsschluss',
        'Nutzlose Aufwendungen für Verhandlungen',
        'Zustand wie bei erfülltem Vertrag'
      ]
    },
    solution: {
      correct: {
        'Positives Interesse': 'Zustand wie bei erfülltem Vertrag',
        'Negatives Interesse': 'Schaden durch Vertrauen auf Vertragsschluss',
        'Vertrauensschaden': 'Nutzlose Aufwendungen für Verhandlungen',
        'Erfüllungsschaden': 'Schaden bei ordnungsgemäßer Vertragserfüllung'
      },
      explanation: 'Bei c.i.c. ist grundsätzlich das negative Interesse (Vertrauensschaden) ersatzfähig.'
    }
  }
];

// Add exercises to units (distribute exercises across units)
kurseinheit3BGBUnits[0].exercises = exercisesKE3.slice(0, 4); // First 4 exercises for unit 1
kurseinheit3BGBUnits[1].exercises = exercisesKE3.slice(4, 7); // Next 3 exercises for unit 2  
kurseinheit3BGBUnits[2].exercises = exercisesKE3.slice(7); // Remaining 3 exercises for unit 3