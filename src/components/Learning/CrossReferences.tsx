import React from 'react';
import { LinkIcon, ArrowRightIcon, BookOpenIcon } from '@heroicons/react/24/outline';
import { LearningUnit } from '../../types/learning';
import { LearningCardButton } from './LearningButton';

interface CrossReference {
  fromUnitId: string;
  toUnitId: string;
  toModuleId: string;
  description: string;
  relevance: 'essential' | 'recommended' | 'optional';
}

interface CrossReferencesProps {
  currentUnitId: string;
  onNavigate: (unitId: string, moduleId: string) => void;
}

// Definiere Querverweise zwischen Lerneinheiten
const crossReferences: CrossReference[] = [
  // Propädeutikum Querverweise
  {
    fromUnitId: 'prop-ke1-1-rechtssystem',
    toUnitId: 'bgb-ke1-1-system',
    toModuleId: 'bgb-at',
    description: 'Vertiefung: Das BGB im Rechtssystem',
    relevance: 'recommended'
  },
  {
    fromUnitId: 'prop-ke1-2-rechtsquellen',
    toUnitId: 'prop-ke3-3-europarecht',
    toModuleId: 'propaedeutikum',
    description: 'Weiterführend: EU-Recht als Rechtsquelle',
    relevance: 'essential'
  },
  {
    fromUnitId: 'prop-ke1-3-methodik',
    toUnitId: 'bgb-ke2-2-auslegung',
    toModuleId: 'bgb-at',
    description: 'Anwendung: Auslegung von Willenserklärungen',
    relevance: 'recommended'
  },
  {
    fromUnitId: 'prop-ke2-1-zivilrecht',
    toUnitId: 'bgb-ke1-1-system',
    toModuleId: 'bgb-at',
    description: 'Vertiefung: BGB Allgemeiner Teil',
    relevance: 'essential'
  },
  {
    fromUnitId: 'prop-ke2-1-zivilrecht',
    toUnitId: 'bgb-ke7-1-agb-grundlagen',
    toModuleId: 'bgb-at',
    description: 'Spezialthema: AGB-Recht',
    relevance: 'optional'
  },
  
  // BGB AT Querverweise
  {
    fromUnitId: 'bgb-ke1-1-system',
    toUnitId: 'prop-ke1-1-rechtssystem',
    toModuleId: 'propaedeutikum',
    description: 'Grundlagen: Deutsches Rechtssystem',
    relevance: 'essential'
  },
  {
    fromUnitId: 'bgb-ke2-1-rechtsgeschaefte',
    toUnitId: 'bgb-ke3-1-stellvertretung-grundlagen',
    toModuleId: 'bgb-at',
    description: 'Weiterführend: Stellvertretung bei Rechtsgeschäften',
    relevance: 'recommended'
  },
  {
    fromUnitId: 'bgb-ke2-2-auslegung',
    toUnitId: 'prop-ke1-3-methodik',
    toModuleId: 'propaedeutikum',
    description: 'Grundlagen: Juristische Methodenlehre',
    relevance: 'recommended'
  },
  {
    fromUnitId: 'bgb-ke2-3-anfechtung',
    toUnitId: 'bgb-ke5-1-form-grundlagen',
    toModuleId: 'bgb-at',
    description: 'Verwandt: Formnichtigkeit vs. Anfechtbarkeit',
    relevance: 'optional'
  },
  {
    fromUnitId: 'bgb-ke3-1-stellvertretung-grundlagen',
    toUnitId: 'bgb-ke2-1-rechtsgeschaefte',
    toModuleId: 'bgb-at',
    description: 'Voraussetzung: Rechtsgeschäfte verstehen',
    relevance: 'essential'
  },
  {
    fromUnitId: 'bgb-ke4-1-bedingung-befristung',
    toUnitId: 'bgb-ke2-1-rechtsgeschaefte',
    toModuleId: 'bgb-at',
    description: 'Grundlage: Rechtsgeschäftslehre',
    relevance: 'essential'
  },
  {
    fromUnitId: 'bgb-ke5-1-form-grundlagen',
    toUnitId: 'bgb-ke5-2-nichtigkeit',
    toModuleId: 'bgb-at',
    description: 'Folge: Rechtsfolgen der Formnichtigkeit',
    relevance: 'essential'
  },
  {
    fromUnitId: 'bgb-ke6-1-verjaehrung-grundlagen',
    toUnitId: 'prop-ke3-1-gerichtsverfahren',
    toModuleId: 'propaedeutikum',
    description: 'Praxisbezug: Verjährung im Prozess',
    relevance: 'recommended'
  },
  {
    fromUnitId: 'bgb-ke7-1-agb-grundlagen',
    toUnitId: 'bgb-ke2-2-auslegung',
    toModuleId: 'bgb-at',
    description: 'Grundlage: Auslegung von Verträgen',
    relevance: 'recommended'
  },
  {
    fromUnitId: 'bgb-ke7-2-inhaltskontrolle',
    toUnitId: 'prop-ke3-4-berufsrecht',
    toModuleId: 'propaedeutikum',
    description: 'Praxis: AGB-Gestaltung für Anwälte',
    relevance: 'optional'
  },
  
  // Berufsrecht Querverweise
  {
    fromUnitId: 'prop-ke3-4-berufsrecht',
    toUnitId: 'bgb-ke7-1-agb-grundlagen',
    toModuleId: 'bgb-at',
    description: 'Anwendung: AGB in der Anwaltspraxis',
    relevance: 'recommended'
  },
  {
    fromUnitId: 'prop-ke3-4-berufsrecht',
    toUnitId: 'bgb-ke3-1-stellvertretung-grundlagen',
    toModuleId: 'bgb-at',
    description: 'Relevant: Anwaltsvollmacht',
    relevance: 'essential'
  }
];

const CrossReferences: React.FC<CrossReferencesProps> = ({ currentUnitId, onNavigate }) => {
  // Finde alle Querverweise für die aktuelle Einheit
  const references = crossReferences.filter(ref => ref.fromUnitId === currentUnitId);
  
  if (references.length === 0) return null;

  const getRelevanceColor = (relevance: string) => {
    switch (relevance) {
      case 'essential': return 'border-red-200 bg-red-50 hover:bg-red-100';
      case 'recommended': return 'border-yellow-200 bg-yellow-50 hover:bg-yellow-100';
      case 'optional': return 'border-gray-200 bg-gray-50 hover:bg-gray-100';
      default: return 'border-gray-200 bg-gray-50';
    }
  };

  const getRelevanceLabel = (relevance: string) => {
    switch (relevance) {
      case 'essential': return 'Wichtig';
      case 'recommended': return 'Empfohlen';
      case 'optional': return 'Optional';
      default: return '';
    }
  };

  const getModuleLabel = (moduleId: string) => {
    switch (moduleId) {
      case 'propaedeutikum': return 'Propädeutikum';
      case 'bgb-at': return 'BGB AT';
      default: return moduleId;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
      <div className="flex items-center gap-2 mb-4">
        <LinkIcon className="w-5 h-5 text-indigo-600" />
        <h3 className="text-lg font-semibold">Verwandte Lerneinheiten</h3>
      </div>
      
      <div className="space-y-3">
        {references.map((ref, index) => (
          <LearningCardButton
            key={index}
            onClick={() => onNavigate(ref.toUnitId, ref.toModuleId)}
            title={ref.description}
            description={getModuleLabel(ref.toModuleId)}
            badge={
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                ref.relevance === 'essential' ? 'bg-red-200 text-red-700' :
                ref.relevance === 'recommended' ? 'bg-yellow-200 text-yellow-700' :
                'bg-gray-200 text-gray-700'
              }`}>
                {getRelevanceLabel(ref.relevance)}
              </span>
            }
            variant={
              ref.relevance === 'essential' ? 'danger' :
              ref.relevance === 'recommended' ? 'warning' :
              'default'
            }
          />
        ))}
      </div>

      <div className="mt-4 p-3 bg-blue-50 rounded-lg">
        <p className="text-sm text-blue-700">
          <strong>Tipp:</strong> Nutzen Sie die Querverweise, um Ihr Verständnis zu vertiefen und Zusammenhänge zwischen den Themen zu erkennen.
        </p>
      </div>
    </div>
  );
};

export default CrossReferences;

// Export für andere Komponenten
export { crossReferences };