import React, { useState } from 'react';
import {
  BookOpenIcon,
  ArrowRightIcon,
  PlayIcon,
  ViewColumnsIcon,
  PuzzlePieceIcon,
  ChevronLeftIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';
import { LearningModule } from '../../types/learning';
import FlashcardSystem from './FlashcardSystem';
import PracticeMode from './PracticeMode';
import MnemonicTrainer from './Mnemonics/MnemonicTrainer';
import { LearningButton, LearningCardButton } from './LearningButton';

interface ModuleDashboardProps {
  module: LearningModule;
  onUnitSelect: (unitId: string) => void;
  onBack: () => void;
}

type ViewMode = 'overview' | 'flashcards' | 'units' | 'practice' | 'mnemonics';

const ModuleDashboard: React.FC<ModuleDashboardProps> = ({ module, onUnitSelect, onBack }) => {
  const [viewMode, setViewMode] = useState<ViewMode>('overview');
  const [expandedUnits, setExpandedUnits] = useState<Set<string>>(new Set());

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Module Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-6 text-white">
        <div className="flex items-center gap-2 mb-2">
          <LearningButton
            onClick={onBack}
            variant="ghost"
            size="small"
            icon={<ChevronLeftIcon className="w-5 h-5" />}
            iconPosition="left"
            className="!p-1 hover:bg-white/20 text-white"
          >
            
          </LearningButton>
          <h1 className="text-2xl font-bold">{module.title}</h1>
        </div>
        <p className="text-indigo-100 mb-4">{module.description}</p>
        <div className="flex gap-4 text-sm">
          <span>{module.credits} ECTS</span>
          <span>•</span>
          <span>{module.estimatedHours} Stunden</span>
          <span>•</span>
          <span>{module.units.length} Lerneinheiten</span>
        </div>
      </div>

      {/* Learning Options */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Flashcards */}
        <div
          onClick={() => setViewMode('flashcards')}
          className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
        >
          <div className="flex items-center justify-between mb-4">
            <ViewColumnsIcon className="w-8 h-8 text-purple-600" />
            <ArrowRightIcon className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Karteikarten</h3>
          <p className="text-gray-600 text-sm">
            Wiederholen Sie Begriffe und Konzepte mit dem Spaced-Repetition-System
          </p>
          <div className="mt-4 flex items-center gap-2">
            <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
              +5-15 XP pro Karte
            </span>
          </div>
        </div>

        {/* Learning Units */}
        <div
          onClick={() => setViewMode('units')}
          className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
        >
          <div className="flex items-center justify-between mb-4">
            <BookOpenIcon className="w-8 h-8 text-indigo-600" />
            <ArrowRightIcon className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition-colors" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Lerneinheiten</h3>
          <p className="text-gray-600 text-sm">
            Arbeiten Sie die Inhalte systematisch durch und lösen Sie Übungen
          </p>
          <div className="mt-4 flex items-center gap-2">
            <span className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full">
              {module.units.length} Einheiten
            </span>
          </div>
        </div>

        {/* Practice Mode */}
        <div
          onClick={() => setViewMode('practice')}
          className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
        >
          <div className="flex items-center justify-between mb-4">
            <PuzzlePieceIcon className="w-8 h-8 text-green-600" />
            <ArrowRightIcon className="w-5 h-5 text-gray-400 group-hover:text-green-600 transition-colors" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Übungsmodus</h3>
          <p className="text-gray-600 text-sm">
            Testen Sie Ihr Wissen mit zufälligen Übungen aus allen Einheiten
          </p>
          <div className="mt-4 flex items-center gap-2">
            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
              +10-30 XP pro Übung
            </span>
          </div>
        </div>
        
        {/* Mnemonics */}
        <div
          onClick={() => setViewMode('mnemonics')}
          className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
        >
          <div className="flex items-center justify-between mb-4">
            <LightBulbIcon className="w-8 h-8 text-yellow-600" />
            <ArrowRightIcon className="w-5 h-5 text-gray-400 group-hover:text-yellow-600 transition-colors" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Mnemotechniken</h3>
          <p className="text-gray-600 text-sm">
            Lernen Sie Definitionen mit cleveren Eselsbrücken
          </p>
          <div className="mt-4 flex items-center gap-2">
            <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">
              +20-40 XP pro Definition
            </span>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Modulinformationen</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-700 mb-2">Verantwortlich</h4>
            <p className="text-gray-600">{module.responsibleProfessor || 'Prof. Dr. Katharina Gräfin von Schlieffen'}</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-700 mb-2">Prüfungsform</h4>
            <p className="text-gray-600">{module.examType || 'Klausur (4 Stunden) oder Hausarbeit'}</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-700 mb-2">Modulcode</h4>
            <p className="text-gray-600">{module.moduleCode || '55100'}</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-700 mb-2">Schwierigkeitsgrad</h4>
            <p className="text-gray-600 capitalize">{module.difficulty}</p>
          </div>
        </div>
      </div>
    </div>
  );

  const toggleUnitExpansion = (unitKey: string) => {
    console.log('Toggle unit expansion:', unitKey);
    setExpandedUnits(prev => {
      const newSet = new Set(prev);
      if (newSet.has(unitKey)) {
        console.log('Collapsing:', unitKey);
        newSet.delete(unitKey);
      } else {
        console.log('Expanding:', unitKey);
        newSet.add(unitKey);
      }
      console.log('Expanded units:', Array.from(newSet));
      return newSet;
    });
  };

  const renderUnits = () => (
    <div className="space-y-4">
      {/* Back Button */}
      <LearningButton
        onClick={() => setViewMode('overview')}
        variant="ghost"
        size="small"
        icon={<ChevronLeftIcon className="w-5 h-5" />}
        iconPosition="left"
      >
        Zurück zur Übersicht
      </LearningButton>

      <h2 className="text-2xl font-bold mb-4">Lerneinheiten</h2>

      {/* Group units by course unit */}
      {(() => {
        // Define course units based on module type
        let courseUnits;
        if (module.id === 'bgb-at') {
          courseUnits = [
            { key: 'ke1', name: 'Kurseinheit 1: Einleitung und Methodologie', prefix: 'bgb-ke1-' },
            { key: 'ke2', name: 'Kurseinheit 2: Rechtsgeschäft und Willenserklärung', prefix: 'bgb-ke2-' },
            { key: 'ke3', name: 'Kurseinheit 3: Vertragsschluss (Angebot und Annahme)', prefix: 'bgb-ke3-' },
            { key: 'ke4', name: 'Kurseinheit 4: AGB und Internet-Verträge', prefix: 'bgb-ke4-' },
            { key: 'ke5', name: 'Kurseinheit 5: Geschäftsfähigkeit und Form', prefix: 'bgb-ke5-' },
            { key: 'ke6', name: 'Kurseinheit 6: Anfechtbarkeit von Willenserklärungen', prefix: 'bgb-ke6-' },
            { key: 'ke7', name: 'Kurseinheit 7: Stellvertretung', prefix: 'bgb-ke7-' },
            { key: 'ke8', name: 'Kurseinheit 8: Fristen, Verjährung und Personen', prefix: 'bgb-ke8-' }
          ];
        } else {
          // Default for Propädeutikum
          courseUnits = [
            { key: 'ke1', name: 'Kurseinheit 1', prefix: 'ke1-' },
            { key: 'ke2', name: 'Kurseinheit 2', prefix: 'ke2-' },
            { key: 'ke3', name: 'Kurseinheit 3', prefix: 'ke3-' },
            { key: 'zm1', name: 'Zusatzmaterial 1', prefix: 'zm1-' },
            { key: 'zm2', name: 'Zusatzmaterial 2', prefix: 'zm2-' }
          ];
        }

        return courseUnits.map(courseUnit => {
          const units = module.units.filter(unit => unit.id.startsWith(courseUnit.prefix));
          
          if (units.length === 0) return null;

        const isExpanded = expandedUnits.has(courseUnit.key);

          return (
            <div key={courseUnit.key} className="mb-4">
              {/* Course Unit Header - Collapsible */}
              <LearningCardButton
                onClick={() => toggleUnitExpansion(courseUnit.key)}
                title={courseUnit.name}
                description={`${units.length} Lerneinheiten`}
                icon={
                  <div className="flex items-center gap-2">
                    {isExpanded ? (
                      <ChevronDownIcon className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronRightIcon className="w-5 h-5 text-gray-500" />
                    )}
                    <BookOpenIcon className="w-5 h-5 text-gray-400" />
                  </div>
                }
              />

              {/* Learning Units - Collapsible Content */}
              {isExpanded && (
                <div className="mt-2 space-y-2 pl-4">
                  {units.map(unit => (
                    <LearningCardButton
                      key={unit.id}
                      onClick={() => onUnitSelect(unit.id)}
                      title={unit.title}
                      description={`${Math.floor(unit.estimatedMinutes / 60)} Stunden • ${unit.exercises.length} Übungen • ${unit.requiredMastery}% zum Bestehen`}
                      icon={<PlayIcon className="w-5 h-5" />}
                      className="bg-gray-50 hover:bg-gray-100"
                    />
                  ))}
                </div>
              )}
            </div>
          );
        });
      })()}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="max-w-4xl mx-auto p-4">
        {viewMode === 'overview' && renderOverview()}
        {viewMode === 'flashcards' && (
          <>
            <button
              onClick={() => setViewMode('overview')}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-4"
            >
              <ChevronLeftIcon className="w-5 h-5" />
              <span>Zurück zur Übersicht</span>
            </button>
            <FlashcardSystem />
          </>
        )}
        {viewMode === 'units' && renderUnits()}
        {viewMode === 'practice' && (
          <>
            <button
              onClick={() => setViewMode('overview')}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-4"
            >
              <ChevronLeftIcon className="w-5 h-5" />
              <span>Zurück zur Übersicht</span>
            </button>
            <PracticeMode module={module} />
          </>
        )}
        {viewMode === 'mnemonics' && (
          <>
            <LearningButton
              onClick={() => setViewMode('overview')}
              variant="ghost"
              size="small"
              icon={<ChevronLeftIcon className="w-5 h-5" />}
              iconPosition="left"
              className="mb-4"
            >
              Zurück zur Übersicht
            </LearningButton>
            <MnemonicTrainer 
              definitions={[
                // Mock-Definitionen für das Modul
                {
                  id: 'def1',
                  term: 'Willenserklärung',
                  definition: 'Eine private Willensäußerung, die auf die Herbeiführung einer Rechtsfolge gerichtet ist.',
                  category: 'BGB AT'
                },
                {
                  id: 'def2',
                  term: 'Rechtsgeschäft',
                  definition: 'Ein Tatbestand, der aus mindestens einer Willenserklärung besteht und an den die Rechtsordnung den Eintritt der gewollten Rechtsfolge knüpft.',
                  category: 'BGB AT'
                },
                {
                  id: 'def3',
                  term: 'Anfechtung',
                  definition: 'Die nachträgliche Beseitigung der Wirkungen einer Willenserklärung durch einseitige, empfangsbedürftige Willenserklärung.',
                  category: 'BGB AT'
                },
                {
                  id: 'def4',
                  term: 'Stellvertretung',
                  definition: 'Das Handeln im Namen eines anderen mit der Folge, dass die Rechtswirkungen unmittelbar in der Person des Vertretenen eintreten.',
                  category: 'BGB AT'
                }
              ]}
              onComplete={(results) => {
                console.log('Mnemonic training completed:', results);
              }}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default ModuleDashboard;