import React, { useState, useEffect } from 'react';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  BookOpenIcon,
  ClockIcon,
  CheckCircleIcon,
  AcademicCapIcon,
  PlayIcon,
  DocumentTextIcon,
  BeakerIcon
} from '@heroicons/react/24/outline';
import useLearningStore from '../../store/learningStore';
import { LearningUnit as LearningUnitType, Exercise, ExerciseAttempt } from '../../types/learning';
import ExerciseRenderer from './ExerciseRenderer';
import CrossReferences from './CrossReferences';

interface LearningUnitProps {
  unit: LearningUnitType;
  onBack: () => void;
  onNavigateToUnit?: (unitId: string, moduleId: string) => void;
}

const LearningUnit: React.FC<LearningUnitProps> = ({ unit, onBack, onNavigateToUnit }) => {
  const [currentView, setCurrentView] = useState<'content' | 'exercise'>('content');
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [sessionTime, setSessionTime] = useState(0);
  
  const {
    activeSession,
    unitProgress,
    startLearningUnit,
    endSession,
    completeExercise
  } = useLearningStore();

  const progress = unitProgress[unit.id];
  const currentSection = unit.content.sections[currentSectionIndex];
  const currentExercise = unit.exercises[currentExerciseIndex];

  useEffect(() => {
    // Start learning session if not already started
    if (!activeSession || activeSession.unitId !== unit.id) {
      startLearningUnit(unit.id);
    }

    // Timer for session duration
    const timer = setInterval(() => {
      setSessionTime(prev => prev + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [unit.id, activeSession, startLearningUnit]);

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleNextSection = () => {
    if (currentSectionIndex < unit.content.sections.length - 1) {
      setCurrentSectionIndex(prev => prev + 1);
    } else {
      // Move to exercises
      setCurrentView('exercise');
      setCurrentExerciseIndex(0);
    }
  };

  const handlePreviousSection = () => {
    if (currentSectionIndex > 0) {
      setCurrentSectionIndex(prev => prev - 1);
    }
  };

  const handleExerciseComplete = async (answer: any): Promise<ExerciseAttempt> => {
    if (!currentExercise) {
      throw new Error('No current exercise');
    }
    
    try {
      const result = await completeExercise(currentExercise.id, answer);
      
      // Move to next exercise or complete unit
      if (currentExerciseIndex < unit.exercises.length - 1) {
        setCurrentExerciseIndex(prev => prev + 1);
      } else {
        // All exercises completed
        handleUnitComplete();
      }
      
      return result;
    } catch (error) {
      console.error('Error completing exercise:', error);
      throw error;
    }
  };

  const handleUnitComplete = () => {
    endSession();
    // Show completion modal or redirect
    alert(`Glückwunsch! Sie haben "${unit.title}" abgeschlossen!`);
    onBack();
  };

  const renderObjectives = () => (
    <div className="bg-indigo-50 rounded-lg p-4 mb-6">
      <h3 className="font-semibold text-indigo-900 mb-3 flex items-center gap-2">
        <AcademicCapIcon className="w-5 h-5" />
        Lernziele
      </h3>
      <ul className="space-y-2">
        {unit.objectives.map((objective) => (
          <li key={objective.id} className="flex items-start gap-2">
            <CheckCircleIcon className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
            <span className="text-sm text-indigo-800">{objective.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  const renderContent = () => (
    <div className="space-y-6">
      {renderObjectives()}
      
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold mb-4">{currentSection.title}</h2>
        
        <div className="prose prose-indigo max-w-none">
          <div dangerouslySetInnerHTML={{ 
            __html: currentSection.content.replace(/\n/g, '<br />').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
          }} />
        </div>

        {/* Examples */}
        {currentSection.examples && currentSection.examples.length > 0 && (
          <div className="mt-6 space-y-4">
            {currentSection.examples.map((example) => (
              <div key={example.id} className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">{example.title}</h4>
                <p className="text-sm text-gray-700 whitespace-pre-wrap">{example.content}</p>
                {example.explanation && (
                  <p className="text-sm text-gray-600 mt-2 italic">{example.explanation}</p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8">
          <button
            onClick={handlePreviousSection}
            disabled={currentSectionIndex === 0}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              currentSectionIndex === 0
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            <ChevronLeftIcon className="w-5 h-5" />
            Zurück
          </button>

          <div className="flex items-center gap-2">
            {unit.content.sections.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSectionIndex ? 'bg-indigo-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNextSection}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            {currentSectionIndex === unit.content.sections.length - 1 ? 'Zu den Übungen' : 'Weiter'}
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Glossary */}
      {unit.content.glossary.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <DocumentTextIcon className="w-5 h-5" />
            Glossar
          </h3>
          <dl className="space-y-3">
            {unit.content.glossary.map((term) => (
              <div key={term.term} className="border-l-4 border-indigo-200 pl-4">
                <dt className="font-medium text-gray-900">{term.term}</dt>
                <dd className="text-sm text-gray-600 mt-1">{term.definition}</dd>
                {term.relatedTerms && term.relatedTerms.length > 0 && (
                  <dd className="text-xs text-gray-500 mt-1">
                    Siehe auch: {term.relatedTerms.join(', ')}
                  </dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      )}

      {/* Cross References */}
      {onNavigateToUnit && (
        <CrossReferences 
          currentUnitId={unit.id}
          onNavigate={onNavigateToUnit}
        />
      )}
    </div>
  );

  const renderExercises = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Übungen</h2>
          <span className="text-sm text-gray-600">
            {currentExerciseIndex + 1} von {unit.exercises.length}
          </span>
        </div>

        {currentExercise && (
          <ExerciseRenderer
            exercise={currentExercise}
            onComplete={handleExerciseComplete}
            onSkip={() => {
              if (currentExerciseIndex < unit.exercises.length - 1) {
                setCurrentExerciseIndex(prev => prev + 1);
              } else {
                handleUnitComplete();
              }
            }}
          />
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <button
              onClick={() => {
                endSession();
                onBack();
              }}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <ChevronLeftIcon className="w-5 h-5" />
              Zurück
            </button>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <ClockIcon className="w-4 h-4" />
                {formatTime(sessionTime)}
              </div>
              
              {progress && (
                <div className="flex items-center gap-2">
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${progress.masteryScore}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {Math.round(progress.masteryScore)}%
                  </span>
                </div>
              )}
            </div>
          </div>

          <h1 className="text-lg font-bold text-gray-900 mt-2">{unit.title}</h1>
          <p className="text-sm text-gray-600">
            {unit.estimatedMinutes} Min • {unit.exercises.length} Übungen
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex border-t">
          <button
            onClick={() => setCurrentView('content')}
            className={`flex-1 py-3 text-sm font-medium transition-colors flex items-center justify-center gap-2 ${
              currentView === 'content'
                ? 'text-indigo-600 border-b-2 border-indigo-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <BookOpenIcon className="w-4 h-4" />
            Lerninhalte
          </button>
          <button
            onClick={() => setCurrentView('exercise')}
            className={`flex-1 py-3 text-sm font-medium transition-colors flex items-center justify-center gap-2 ${
              currentView === 'exercise'
                ? 'text-indigo-600 border-b-2 border-indigo-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <BeakerIcon className="w-4 h-4" />
            Übungen
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-6">
        {currentView === 'content' ? renderContent() : renderExercises()}
      </div>
    </div>
  );
};

export default LearningUnit;