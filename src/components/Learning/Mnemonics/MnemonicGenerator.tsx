import React, { useState } from 'react';
import { 
  LightBulbIcon, 
  SparklesIcon, 
  BookmarkIcon,
  ArrowPathIcon,
  CheckCircleIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline';
import { LearningButton } from '../LearningButton';

interface Definition {
  term: string;
  definition: string;
  category?: string;
}

interface Mnemonic {
  type: 'acronym' | 'story' | 'rhyme' | 'visualization' | 'association';
  content: string;
  explanation?: string;
}

interface MnemonicGeneratorProps {
  definition: Definition;
  onSave?: (mnemonic: Mnemonic) => void;
}

const MnemonicGenerator: React.FC<MnemonicGeneratorProps> = ({ definition, onSave }) => {
  const [selectedType, setSelectedType] = useState<Mnemonic['type']>('acronym');
  const [generatedMnemonic, setGeneratedMnemonic] = useState<Mnemonic | null>(null);
  const [customMnemonic, setCustomMnemonic] = useState('');
  const [showTips, setShowTips] = useState(false);

  const mnemonicTypes = [
    {
      type: 'acronym' as const,
      name: 'Akronym',
      description: 'Anfangsbuchstaben zu einem Wort formen',
      icon: '🔤',
      example: 'StGB = Stets tolle Gesetze beachten'
    },
    {
      type: 'story' as const,
      name: 'Geschichte',
      description: 'Eine kleine Geschichte erfinden',
      icon: '📖',
      example: 'Der Vertrag ging spazieren und traf seine Willenserklärung...'
    },
    {
      type: 'rhyme' as const,
      name: 'Reimschema',
      description: 'Reime und Rhythmus nutzen',
      icon: '🎵',
      example: 'Wer Recht studiert mit Fleiß, der weiß...'
    },
    {
      type: 'visualization' as const,
      name: 'Visualisierung',
      description: 'Bildhafte Vorstellung erstellen',
      icon: '🎨',
      example: 'Stelle dir einen Vertrag als Handschlag vor...'
    },
    {
      type: 'association' as const,
      name: 'Assoziation',
      description: 'Mit bekannten Konzepten verknüpfen',
      icon: '🔗',
      example: 'Willenserklärung = wie eine WhatsApp-Nachricht'
    }
  ];

  const generateMnemonic = () => {
    // Hier würden normalerweise KI-basierte Vorschläge generiert
    // Für dieses Beispiel verwenden wir vorgefertigte Templates
    
    const suggestions: Record<Mnemonic['type'], () => Mnemonic> = {
      acronym: () => {
        const words = definition.definition.split(' ').filter(w => w.length > 3);
        const acronym = words.slice(0, 5).map(w => w[0].toUpperCase()).join('');
        return {
          type: 'acronym',
          content: acronym,
          explanation: `Merke dir: ${acronym} - ${words.slice(0, 5).join(' ')}`
        };
      },
      story: () => ({
        type: 'story',
        content: `Stell dir vor: ${definition.term} ist wie ein Charakter in einer Geschichte...`,
        explanation: 'Erstelle eine persönliche Geschichte mit dem Begriff als Hauptfigur'
      }),
      rhyme: () => ({
        type: 'rhyme',
        content: `${definition.term} ist fein, muss im Kopf verankert sein!`,
        explanation: 'Nutze den Rhythmus zum besseren Einprägen'
      }),
      visualization: () => ({
        type: 'visualization',
        content: `Visualisiere ${definition.term} als ein Gebäude mit verschiedenen Räumen für jeden Aspekt der Definition`,
        explanation: 'Je detaillierter das Bild, desto besser die Erinnerung'
      }),
      association: () => ({
        type: 'association',
        content: `${definition.term} ist wie ${definition.term.includes('vertrag') ? 'ein Versprechen zwischen Freunden' : 'eine Regel in einem Spiel'}`,
        explanation: 'Verknüpfe mit alltäglichen Situationen'
      })
    };

    const mnemonic = suggestions[selectedType]();
    setGeneratedMnemonic(mnemonic);
  };

  const saveMnemonic = () => {
    const mnemonicToSave = customMnemonic 
      ? { type: selectedType, content: customMnemonic }
      : generatedMnemonic;
    
    if (mnemonicToSave && onSave) {
      onSave(mnemonicToSave);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center gap-2 mb-4">
        <LightBulbIcon className="w-6 h-6 text-yellow-500" />
        <h3 className="text-lg font-semibold">Mnemotechnik erstellen</h3>
      </div>

      {/* Definition Display */}
      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <h4 className="font-medium text-gray-900 mb-1">{definition.term}</h4>
        <p className="text-sm text-gray-600">{definition.definition}</p>
      </div>

      {/* Mnemonic Type Selection */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-700 mb-3">Wähle eine Technik:</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {mnemonicTypes.map((type) => (
            <button
              key={type.type}
              onClick={() => setSelectedType(type.type)}
              className={`p-3 rounded-lg border-2 transition-all ${
                selectedType === type.type
                  ? 'border-indigo-500 bg-indigo-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="text-2xl mb-1">{type.icon}</div>
              <div className="text-sm font-medium">{type.name}</div>
              <div className="text-xs text-gray-500 mt-1">{type.description}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Tips Button */}
      <button
        onClick={() => setShowTips(!showTips)}
        className="flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-700 mb-4"
      >
        <InformationCircleIcon className="w-4 h-4" />
        {showTips ? 'Tipps ausblenden' : 'Tipps anzeigen'}
      </button>

      {/* Tips Section */}
      {showTips && (
        <div className="bg-blue-50 rounded-lg p-4 mb-6">
          <h5 className="font-medium text-blue-900 mb-2">
            Tipps für {mnemonicTypes.find(t => t.type === selectedType)?.name}:
          </h5>
          <p className="text-sm text-blue-700 mb-2">
            {mnemonicTypes.find(t => t.type === selectedType)?.example}
          </p>
          <ul className="text-sm text-blue-700 list-disc list-inside space-y-1">
            {selectedType === 'acronym' && (
              <>
                <li>Verwende die Anfangsbuchstaben wichtiger Wörter</li>
                <li>Bilde ein einprägsames Wort oder einen Satz</li>
                <li>Je verrückter, desto besser merkbar</li>
              </>
            )}
            {selectedType === 'story' && (
              <>
                <li>Mache den Begriff zum Helden deiner Geschichte</li>
                <li>Baue emotionale Elemente ein</li>
                <li>Nutze übertriebene Bilder</li>
              </>
            )}
            {selectedType === 'rhyme' && (
              <>
                <li>Nutze einfache Reimschemata (AABB)</li>
                <li>Halte es kurz und prägnant</li>
                <li>Wiederhole wichtige Begriffe</li>
              </>
            )}
            {selectedType === 'visualization' && (
              <>
                <li>Erstelle lebhafte, farbenfrohe Bilder</li>
                <li>Verbinde mit bekannten Orten</li>
                <li>Nutze die Loci-Methode</li>
              </>
            )}
            {selectedType === 'association' && (
              <>
                <li>Verknüpfe mit persönlichen Erfahrungen</li>
                <li>Nutze Ähnlichkeiten in Klang oder Bedeutung</li>
                <li>Erstelle logische Brücken</li>
              </>
            )}
          </ul>
        </div>
      )}

      {/* Generated Mnemonic */}
      {generatedMnemonic && (
        <div className="bg-indigo-50 rounded-lg p-4 mb-4">
          <div className="flex items-start gap-2">
            <SparklesIcon className="w-5 h-5 text-indigo-600 mt-0.5" />
            <div className="flex-1">
              <p className="font-medium text-indigo-900">{generatedMnemonic.content}</p>
              {generatedMnemonic.explanation && (
                <p className="text-sm text-indigo-700 mt-1">{generatedMnemonic.explanation}</p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Custom Mnemonic Input */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Eigene Eselsbrücke erstellen:
        </label>
        <textarea
          value={customMnemonic}
          onChange={(e) => setCustomMnemonic(e.target.value)}
          placeholder="Gib deine eigene Merkregel ein..."
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          rows={3}
        />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <LearningButton
          onClick={generateMnemonic}
          variant="secondary"
          icon={<ArrowPathIcon className="w-4 h-4" />}
          iconPosition="left"
        >
          Vorschlag generieren
        </LearningButton>
        
        <LearningButton
          onClick={saveMnemonic}
          disabled={!generatedMnemonic && !customMnemonic}
          icon={<CheckCircleIcon className="w-4 h-4" />}
          iconPosition="left"
        >
          Speichern
        </LearningButton>
      </div>
    </div>
  );
};

export default MnemonicGenerator;