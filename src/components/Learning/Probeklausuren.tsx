import React, { useState } from 'react';
import { BookOpenIcon, ClockIcon, StarIcon, ExclamationTriangleIcon, ChevronRightIcon, DocumentTextIcon, CheckCircleIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import { probeklausurenPropaedeutikum } from '../../data/propaedeutikum/probeklausuren';
import { probeklausurenBGBAT } from '../../data/bgb-at/probeklausuren';
import { Exercise } from '../../types/learning';
import ExerciseRenderer from './ExerciseRenderer';
import useGamificationStore from '../../store/gamificationStore';
import { LearningButton, LearningCardButton } from './LearningButton';

interface Probeklausur {
  id: string;
  moduleId: string;
  title: string;
  description: string;
  duration: number;
  points: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  topics: string[];
  exercises: Exercise[];
  solutionGuide?: string;
  evaluationCriteria?: string[];
}

const Probeklausuren: React.FC = () => {
  const [selectedModule, setSelectedModule] = useState<'all' | 'propaedeutikum' | 'bgb-at'>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<'all' | 'beginner' | 'intermediate' | 'advanced'>('all');
  const [selectedKlausur, setSelectedKlausur] = useState<Probeklausur | null>(null);
  const [klausurStarted, setKlausurStarted] = useState(false);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [showResults, setShowResults] = useState(false);
  const [earnedPoints, setEarnedPoints] = useState(0);
  
  const { addXP } = useGamificationStore();

  // Alle Klausuren kombinieren
  const allKlausuren = [...probeklausurenPropaedeutikum, ...probeklausurenBGBAT];

  // Gefilterte Klausuren
  const filteredKlausuren = allKlausuren.filter(klausur => {
    const moduleMatch = selectedModule === 'all' || klausur.moduleId === selectedModule;
    const difficultyMatch = selectedDifficulty === 'all' || klausur.difficulty === selectedDifficulty;
    return moduleMatch && difficultyMatch;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'text-green-600 bg-green-100';
      case 'intermediate': return 'text-yellow-600 bg-yellow-100';
      case 'advanced': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'Anfänger';
      case 'intermediate': return 'Fortgeschritten';
      case 'advanced': return 'Experte';
      default: return difficulty;
    }
  };

  const getModuleLabel = (moduleId: string) => {
    switch (moduleId) {
      case 'propaedeutikum': return 'Propädeutikum';
      case 'bgb-at': return 'BGB AT';
      default: return moduleId;
    }
  };

  const handleStartKlausur = () => {
    setKlausurStarted(true);
    setCurrentExerciseIndex(0);
    setAnswers({});
    setShowResults(false);
    setEarnedPoints(0);
  };

  const handleExerciseComplete = (exerciseId: string, answer: any, isCorrect: boolean, points: number) => {
    setAnswers(prev => ({
      ...prev,
      [exerciseId]: { answer, isCorrect, points: isCorrect ? points : 0 }
    }));

    if (currentExerciseIndex < selectedKlausur!.exercises.length - 1) {
      setCurrentExerciseIndex(prev => prev + 1);
    } else {
      // Klausur beendet
      finishKlausur();
    }
  };

  const finishKlausur = () => {
    const totalPoints = Object.values(answers).reduce((sum: number, result: any) => sum + (result.points || 0), 0);
    setEarnedPoints(totalPoints);
    setShowResults(true);
    
    // XP basierend auf Leistung vergeben
    const percentage = (totalPoints / selectedKlausur!.points) * 100;
    let xpReward = 0;
    
    if (percentage >= 90) xpReward = 100;
    else if (percentage >= 80) xpReward = 75;
    else if (percentage >= 70) xpReward = 50;
    else if (percentage >= 60) xpReward = 30;
    else xpReward = 15;
    
    addXP(xpReward, 'klausur_completed');
  };

  const getGrade = (percentage: number) => {
    if (percentage >= 90) return { grade: 'Sehr gut', note: '1,0-1,3', color: 'text-green-600' };
    if (percentage >= 80) return { grade: 'Gut', note: '1,7-2,3', color: 'text-green-500' };
    if (percentage >= 70) return { grade: 'Befriedigend', note: '2,7-3,3', color: 'text-yellow-600' };
    if (percentage >= 60) return { grade: 'Ausreichend', note: '3,7-4,0', color: 'text-yellow-500' };
    return { grade: 'Nicht bestanden', note: '5,0', color: 'text-red-600' };
  };

  if (selectedKlausur && !klausurStarted) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <button
          onClick={() => setSelectedKlausur(null)}
          className="mb-6 text-blue-600 hover:text-blue-800 flex items-center"
        >
          ← Zurück zur Übersicht
        </button>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold mb-4">{selectedKlausur.title}</h2>
          
          <p className="text-gray-600 mb-6">{selectedKlausur.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="flex items-center">
              <ClockIcon className="w-5 h-5 text-gray-400 mr-2" />
              <span>{selectedKlausur.duration} Minuten</span>
            </div>
            <div className="flex items-center">
              <StarIcon className="w-5 h-5 text-gray-400 mr-2" />
              <span>{selectedKlausur.points} Punkte</span>
            </div>
            <div className="flex items-center">
              <ExclamationTriangleIcon className="w-5 h-5 text-gray-400 mr-2" />
              <span className={`px-2 py-1 rounded text-sm ${getDifficultyColor(selectedKlausur.difficulty)}`}>
                {getDifficultyLabel(selectedKlausur.difficulty)}
              </span>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-2">Themen:</h3>
            <div className="flex flex-wrap gap-2">
              {selectedKlausur.topics.map(topic => (
                <span key={topic} className="px-3 py-1 bg-gray-100 rounded text-sm">
                  {topic}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-2">Aufgaben:</h3>
            <ul className="space-y-2">
              {selectedKlausur.exercises.map((exercise, index) => (
                <li key={exercise.id} className="flex items-center">
                  <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm mr-3">
                    {index + 1}
                  </span>
                  <span className="flex-1">{exercise.content.question}</span>
                  <span className="text-gray-500">{exercise.points} Punkte</span>
                </li>
              ))}
            </ul>
          </div>

          {selectedKlausur.evaluationCriteria && (
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Bewertungskriterien:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                {selectedKlausur.evaluationCriteria.map((criterion, index) => (
                  <li key={index}>{criterion}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="bg-yellow-50 p-4 rounded mb-6">
            <div className="flex items-start">
              <ExclamationTriangleIcon className="w-5 h-5 text-yellow-600 mr-2 flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold text-yellow-800 mb-1">Hinweise:</p>
                <ul className="list-disc list-inside space-y-1 text-yellow-700">
                  <li>Sobald Sie beginnen, läuft die Zeit</li>
                  <li>Sie können nicht zu vorherigen Aufgaben zurückkehren</li>
                  <li>Speichern Sie Ihre Antworten vor dem Weitergehen</li>
                  <li>Die Klausur wird automatisch nach Ablauf der Zeit beendet</li>
                </ul>
              </div>
            </div>
          </div>

          <LearningButton
            onClick={handleStartKlausur}
            size="large"
            fullWidth
          >
            Klausur starten
          </LearningButton>
        </div>
      </div>
    );
  }

  if (selectedKlausur && klausurStarted && !showResults) {
    const currentExercise = selectedKlausur.exercises[currentExerciseIndex];
    
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">{selectedKlausur.title}</h2>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">
                  Aufgabe {currentExerciseIndex + 1} von {selectedKlausur.exercises.length}
                </span>
                <div className="flex items-center">
                  <ClockIcon className="w-4 h-4 text-gray-400 mr-1" />
                  <span className="text-sm">{selectedKlausur.duration} Min</span>
                </div>
              </div>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentExerciseIndex + 1) / selectedKlausur.exercises.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="p-6">
            <ExerciseRenderer
              exercise={currentExercise}
              onComplete={async (answer: any) => {
                const isCorrect = true; // For now, assuming correct - this should be validated
                handleExerciseComplete(currentExercise.id, answer, isCorrect, currentExercise.points);
                return {
                  id: Date.now().toString(),
                  exerciseId: currentExercise.id,
                  answer,
                  isCorrect,
                  timestamp: new Date(),
                  timeSpent: 60,
                  points: isCorrect ? currentExercise.points : 0,
                  attemptNumber: 1,
                  score: isCorrect ? 100 : 0,
                  hintsUsed: []
                };
              }}
              onSkip={() => {}}
            />
          </div>
        </div>
      </div>
    );
  }

  if (showResults && selectedKlausur) {
    const percentage = (earnedPoints / selectedKlausur.points) * 100;
    const gradeInfo = getGrade(percentage);
    
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-center mb-8">
            <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Klausur abgeschlossen!</h2>
            <p className="text-gray-600">{selectedKlausur.title}</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">
                {earnedPoints} / {selectedKlausur.points} Punkte
              </div>
              <div className={`text-2xl font-semibold ${gradeInfo.color}`}>
                {gradeInfo.grade} ({gradeInfo.note})
              </div>
              <div className="text-gray-600 mt-2">
                {percentage.toFixed(1)}% richtig
              </div>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <h3 className="font-semibold text-lg">Ihre Ergebnisse:</h3>
            {selectedKlausur.exercises.map((exercise, index) => {
              const result = answers[exercise.id];
              return (
                <div key={exercise.id} className="border rounded p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-start">
                      <span className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm mr-3">
                        {index + 1}
                      </span>
                      <div>
                        <p className="font-medium">{exercise.content.question}</p>
                        <p className="text-sm text-gray-600 mt-1">
                          {result?.isCorrect ? (
                            <span className="text-green-600">✓ Richtig</span>
                          ) : (
                            <span className="text-red-600">✗ Falsch</span>
                          )}
                        </p>
                      </div>
                    </div>
                    <span className="text-gray-500">
                      {result?.points || 0} / {exercise.points} Punkte
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {selectedKlausur.solutionGuide && (
            <div className="bg-blue-50 p-4 rounded mb-6">
              <h3 className="font-semibold mb-2">Lösungshinweise:</h3>
              <p className="text-sm whitespace-pre-line">{selectedKlausur.solutionGuide}</p>
            </div>
          )}

          <div className="flex space-x-4">
            <LearningButton
              onClick={() => {
                setSelectedKlausur(null);
                setKlausurStarted(false);
                setShowResults(false);
              }}
              variant="secondary"
              fullWidth
              icon={null}
            >
              Zur Übersicht
            </LearningButton>
            <LearningButton
              onClick={handleStartKlausur}
              fullWidth
            >
              Klausur wiederholen
            </LearningButton>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Probeklausuren</h1>
        <p className="text-gray-600">
          Testen Sie Ihr Wissen mit realistischen Klausuren auf verschiedenen Schwierigkeitsstufen.
        </p>
      </div>

      <div className="mb-6 flex flex-wrap gap-4">
        <select
          value={selectedModule}
          onChange={(e) => setSelectedModule(e.target.value as any)}
          className="px-4 py-2 border rounded-lg"
        >
          <option value="all">Alle Module</option>
          <option value="propaedeutikum">Propädeutikum</option>
          <option value="bgb-at">BGB AT</option>
        </select>

        <select
          value={selectedDifficulty}
          onChange={(e) => setSelectedDifficulty(e.target.value as any)}
          className="px-4 py-2 border rounded-lg"
        >
          <option value="all">Alle Schwierigkeiten</option>
          <option value="beginner">Anfänger</option>
          <option value="intermediate">Fortgeschritten</option>
          <option value="advanced">Experte</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredKlausuren.map(klausur => (
          <div key={klausur.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold">{klausur.title}</h3>
                <span className={`px-2 py-1 rounded text-sm ${getDifficultyColor(klausur.difficulty)}`}>
                  {getDifficultyLabel(klausur.difficulty)}
                </span>
              </div>

              <p className="text-gray-600 mb-4 line-clamp-2">{klausur.description}</p>

              <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                <div className="flex items-center">
                  <ClockIcon className="w-4 h-4 mr-1" />
                  <span>{klausur.duration} Min</span>
                </div>
                <div className="flex items-center">
                  <DocumentTextIcon className="w-4 h-4 mr-1" />
                  <span>{klausur.exercises.length} Aufgaben</span>
                </div>
                <div className="flex items-center">
                  <StarIcon className="w-4 h-4 mr-1" />
                  <span>{klausur.points} Punkte</span>
                </div>
              </div>

              <div className="mb-4">
                <span className="text-xs text-gray-500 uppercase tracking-wide">Modul</span>
                <p className="font-medium">{getModuleLabel(klausur.moduleId)}</p>
              </div>

              <LearningButton
                onClick={() => setSelectedKlausur(klausur)}
                fullWidth
              >
                Klausur starten
              </LearningButton>
            </div>
          </div>
        ))}
      </div>

      {filteredKlausuren.length === 0 && (
        <div className="text-center py-12">
          <BookOpenIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">Keine Klausuren für die gewählten Filter gefunden.</p>
        </div>
      )}
    </div>
  );
};

export default Probeklausuren;