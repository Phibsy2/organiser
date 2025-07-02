import React, { useState, useEffect } from 'react';
import {
  TrophyIcon,
  XMarkIcon,
  CheckCircleIcon,
  XCircleIcon,
  ArrowRightIcon,
  ChartBarIcon,
  ClockIcon,
  FireIcon
} from '@heroicons/react/24/outline';
import { LearningModule, Exercise, ExerciseAttempt } from '../../types/learning';
import useLearningStore from '../../store/learningStore';
import useGamificationStore from '../../store/gamificationStore';
import ExerciseRenderer from './ExerciseRenderer';

interface PracticeModeProps {
  module: LearningModule;
}

interface PracticeSession {
  totalExercises: number;
  completedExercises: number;
  correctAnswers: number;
  totalXPEarned: number;
  startTime: Date;
  exercises: Exercise[];
}

const PracticeMode: React.FC<PracticeModeProps> = ({ module }) => {
  const [currentExercise, setCurrentExercise] = useState<Exercise | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [lastAttemptCorrect, setLastAttemptCorrect] = useState<boolean | null>(null);
  const [session, setSession] = useState<PracticeSession>({
    totalExercises: 0,
    completedExercises: 0,
    correctAnswers: 0,
    totalXPEarned: 0,
    startTime: new Date(),
    exercises: []
  });

  const completeExercise = useLearningStore(state => state.completeExercise);
  const addXP = useGamificationStore(state => state.addXP);

  // Helper function to check if answer is correct
  const checkAnswer = (answer: any, exercise: Exercise): boolean => {
    if (exercise.type === 'multipleChoice') {
      return answer === exercise.solution.correct;
    } else if (exercise.type === 'fillInBlanks') {
      const correctAnswers = exercise.solution.correct as string[];
      const userAnswers = answer as string[];
      return correctAnswers.every((correct, index) => 
        correct.toLowerCase().trim() === userAnswers[index]?.toLowerCase().trim()
      );
    } else if (exercise.type === 'dragDrop') {
      const correct = exercise.solution.correct as Record<string, string>;
      const userAnswer = answer as Record<string, string>;
      return Object.entries(correct).every(([key, value]) => 
        userAnswer[key] === value
      );
    }
    // For other types, implement appropriate logic
    return false;
  };

  // Initialize practice session with random exercises
  useEffect(() => {
    const allExercises: Exercise[] = [];
    module.units.forEach(unit => {
      allExercises.push(...unit.exercises);
    });

    // Shuffle exercises
    const shuffled = [...allExercises].sort(() => Math.random() - 0.5);
    
    setSession(prev => ({
      ...prev,
      exercises: shuffled,
      totalExercises: shuffled.length
    }));

    // Set first exercise
    if (shuffled.length > 0) {
      setCurrentExercise(shuffled[0]);
    }
  }, [module]);

  const handleExerciseComplete = async (answer: any): Promise<ExerciseAttempt> => {
    if (!currentExercise) {
      throw new Error('No current exercise');
    }
    
    // Check if answer is correct
    const correct = checkAnswer(answer, currentExercise);

    setLastAttemptCorrect(correct);

    // Calculate XP (only for correct answers)
    let xpEarned = 0;
    if (correct) {
      // Base XP based on difficulty
      const baseXP = {
        beginner: 10,
        intermediate: 20,
        advanced: 30
      }[currentExercise.difficulty];

      // Bonus for exercise type complexity
      const typeBonus = {
        multipleChoice: 0,
        trueFalse: 0,
        fillInBlanks: 5,
        dragDrop: 5,
        timeline: 10,
        conceptMap: 10,
        caseAnalysis: 15,
        gutachten: 20,
        essay: 15,
        shortAnswer: 10,
        problemSolving: 20,
        complexCase: 25,
        comparative: 20,
        practical: 15,
        matching: 5,
        complexAnalysis: 30
      }[currentExercise.type] || 0;

      xpEarned = baseXP + typeBonus;
      addXP(xpEarned, 'exercise_completed');
    }

    // Use the store's completeExercise method
    const attempt = await completeExercise(currentExercise.id, answer);
    
    // Update session stats
    setSession(prev => ({
      ...prev,
      completedExercises: prev.completedExercises + 1,
      correctAnswers: prev.correctAnswers + (correct ? 1 : 0),
      totalXPEarned: prev.totalXPEarned + xpEarned
    }));

    // Show feedback briefly before moving to next exercise
    setTimeout(() => {
      moveToNextExercise();
    }, 2000);
    
    return attempt;
  };

  const moveToNextExercise = () => {
    setLastAttemptCorrect(null);
    
    const nextIndex = session.completedExercises;
    if (nextIndex < session.exercises.length) {
      setCurrentExercise(session.exercises[nextIndex]);
    } else {
      // Session complete
      setShowResults(true);
    }
  };

  const calculateSessionDuration = () => {
    const duration = new Date().getTime() - session.startTime.getTime();
    const minutes = Math.floor(duration / 60000);
    const seconds = Math.floor((duration % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const calculateAccuracy = () => {
    if (session.completedExercises === 0) return 0;
    return Math.round((session.correctAnswers / session.completedExercises) * 100);
  };

  if (showResults) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <TrophyIcon className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-2">Übung abgeschlossen!</h2>
            <p className="text-gray-600">Hier ist Ihre Zusammenfassung</p>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center gap-2 text-gray-600 mb-2">
                <ChartBarIcon className="w-5 h-5" />
                <span className="text-sm">Genauigkeit</span>
              </div>
              <p className="text-2xl font-bold text-gray-900">{calculateAccuracy()}%</p>
              <p className="text-sm text-gray-500">
                {session.correctAnswers} von {session.completedExercises} richtig
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center gap-2 text-gray-600 mb-2">
                <FireIcon className="w-5 h-5" />
                <span className="text-sm">XP verdient</span>
              </div>
              <p className="text-2xl font-bold text-indigo-600">+{session.totalXPEarned} XP</p>
              <p className="text-sm text-gray-500">Tolle Leistung!</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center gap-2 text-gray-600 mb-2">
                <ClockIcon className="w-5 h-5" />
                <span className="text-sm">Dauer</span>
              </div>
              <p className="text-2xl font-bold text-gray-900">{calculateSessionDuration()}</p>
              <p className="text-sm text-gray-500">Gesamtzeit</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center gap-2 text-gray-600 mb-2">
                <CheckCircleIcon className="w-5 h-5" />
                <span className="text-sm">Übungen</span>
              </div>
              <p className="text-2xl font-bold text-gray-900">{session.completedExercises}</p>
              <p className="text-sm text-gray-500">abgeschlossen</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4">
              {calculateAccuracy() >= 80 
                ? "Ausgezeichnete Arbeit! Sie beherrschen das Material sehr gut."
                : calculateAccuracy() >= 60
                ? "Gute Arbeit! Mit etwas mehr Übung werden Sie noch besser."
                : "Weiter üben! Jede Übung macht Sie besser."}
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (!currentExercise) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Keine Übungen verfügbar</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Bar */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold">Übungsmodus</h3>
          <button
            onClick={() => setShowResults(true)}
            className="text-gray-500 hover:text-gray-700"
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
          <span>Übung {session.completedExercises + 1} von {session.totalExercises}</span>
          <span>•</span>
          <span>{session.correctAnswers} richtig</span>
          <span>•</span>
          <span className="text-indigo-600 font-medium">+{session.totalXPEarned} XP</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
            style={{ 
              width: `${(session.completedExercises / session.totalExercises) * 100}%` 
            }}
          />
        </div>
      </div>

      {/* Feedback Message */}
      {lastAttemptCorrect !== null && (
        <div className={`mb-4 p-4 rounded-lg flex items-center gap-3 ${
          lastAttemptCorrect 
            ? 'bg-green-50 text-green-800' 
            : 'bg-red-50 text-red-800'
        }`}>
          {lastAttemptCorrect ? (
            <>
              <CheckCircleIcon className="w-6 h-6" />
              <span className="font-medium">Richtig! Weiter so!</span>
            </>
          ) : (
            <>
              <XCircleIcon className="w-6 h-6" />
              <span className="font-medium">Nicht ganz richtig. Versuchen Sie es beim nächsten Mal!</span>
            </>
          )}
        </div>
      )}

      {/* Exercise */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="mb-4">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
            currentExercise.difficulty === 'beginner' 
              ? 'bg-green-100 text-green-700'
              : currentExercise.difficulty === 'intermediate'
              ? 'bg-yellow-100 text-yellow-700'
              : 'bg-red-100 text-red-700'
          }`}>
            {currentExercise.difficulty === 'beginner' ? 'Anfänger' : 
             currentExercise.difficulty === 'intermediate' ? 'Fortgeschritten' : 'Experte'}
          </span>
          <span className="ml-2 text-sm text-gray-500">
            {currentExercise.points} Punkte
          </span>
        </div>

        <ExerciseRenderer
          exercise={currentExercise}
          onComplete={handleExerciseComplete}
        />

        {/* Skip Button */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={() => handleExerciseComplete(null)}
            className="flex items-center gap-2 text-gray-500 hover:text-gray-700"
          >
            <span>Überspringen</span>
            <ArrowRightIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PracticeMode;