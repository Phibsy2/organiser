import React, { useState, useEffect } from 'react';
import { WorkoutPlan, CompletedExercise } from '../../types';
import ExerciseLogger from './ExerciseLogger';
import useTrainingStore from '../../store/trainingStore';
import {
  PlayIcon,
  CheckIcon,
  ClockIcon,
  FireIcon,
  ArrowLeftIcon,
  ArrowRightIcon
} from '@heroicons/react/24/solid';

interface WorkoutSessionProps {
  workoutPlan: WorkoutPlan;
  onComplete: (completedExercises: CompletedExercise[]) => void;
  onCancel: () => void;
}

const WorkoutSession: React.FC<WorkoutSessionProps> = ({ workoutPlan, onComplete, onCancel }) => {
  const { getLastExercisePerformance, completeExercise: storeCompleteExercise, currentSession } = useTrainingStore();
  const [sessionStartTime, setSessionStartTime] = useState<Date | null>(null);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [completedExercisesCount, setCompletedExercisesCount] = useState(0);
  const [showExerciseLogger, setShowExerciseLogger] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  const currentExercise = workoutPlan.exercises[currentExerciseIndex];
  const totalExercises = workoutPlan.exercises.length;
  const progressPercentage = (completedExercisesCount / totalExercises) * 100;

  useEffect(() => {
    if (sessionStartTime && !showExerciseLogger) {
      const interval = setInterval(() => {
        setElapsedTime(Math.floor((Date.now() - sessionStartTime.getTime()) / 1000));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [sessionStartTime, showExerciseLogger]);

  const startSession = () => {
    setSessionStartTime(new Date());
    setShowExerciseLogger(true);
  };

  const completeExercise = (completedExercise: CompletedExercise) => {
    // Store the exercise in the store
    storeCompleteExercise(completedExercise);
    setCompletedExercisesCount(completedExercisesCount + 1);
    
    if (currentExerciseIndex < totalExercises - 1) {
      setCurrentExerciseIndex(currentExerciseIndex + 1);
      setShowExerciseLogger(false); // Show overview before next exercise
    } else {
      // Workout complete - pass empty array since exercises are in store
      onComplete([]);
    }
  };

  const skipExercise = () => {
    if (currentExerciseIndex < totalExercises - 1) {
      setCurrentExerciseIndex(currentExerciseIndex + 1);
      setShowExerciseLogger(false);
    } else {
      onComplete([]);
    }
  };

  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (hours > 0) {
      return `${hours}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getExerciseName = (exerciseId: string): string => {
    // In real app, this would look up the exercise from a database
    const exerciseNames: { [key: string]: string } = {
      'bench-press': 'Bankdrücken',
      'lat-pulldown': 'Latzug',
      'shoulder-press': 'Schulterdrücken',
      'rowing': 'Rudern',
      'bicep-curls': 'Bizeps Curls',
      'tricep-dips': 'Trizeps Dips',
      'planks': 'Planks',
      'squats': 'Kniebeugen',
      'deadlifts': 'Kreuzheben',
      'lunges': 'Ausfallschritte',
      'leg-press': 'Beinpresse',
      'calf-raises': 'Wadenheben'
    };
    return exerciseNames[exerciseId] || exerciseId;
  };

  if (!sessionStartTime) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-900">{workoutPlan.name}</h2>
          <button
            onClick={onCancel}
            className="text-gray-600 hover:text-gray-800"
          >
            <ArrowLeftIcon className="w-6 h-6" />
          </button>
        </div>
        <p className="text-gray-600 mb-6">
          Geschätzte Dauer: {workoutPlan.estimatedDuration} Minuten
        </p>
        
        <div className="space-y-4 mb-6">
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Aufwärmen:</h3>
            <ul className="list-disc list-inside text-gray-600">
              {workoutPlan.warmup.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Übungen:</h3>
            <ol className="list-decimal list-inside text-gray-600 space-y-2">
              {workoutPlan.exercises.map((exercise, index) => {
                const lastPerformance = getLastExercisePerformance(exercise.exerciseId);
                return (
                  <li key={index} className="flex items-center justify-between">
                    <span>
                      {getExerciseName(exercise.exerciseId)} - {exercise.sets} Sätze × {exercise.reps}
                    </span>
                    {lastPerformance && (
                      <span className="text-sm text-blue-600">
                        Letztes Mal: {lastPerformance.sets.map(s => 
                          `${s.reps}×${s.weight || 0}kg`
                        ).join(', ')}
                      </span>
                    )}
                  </li>
                );
              })}
            </ol>
          </div>
        </div>

        <button
          onClick={startSession}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center transition-colors duration-200"
        >
          <PlayIcon className="w-5 h-5 mr-2" />
          Training starten
        </button>
      </div>
    );
  }

  if (showExerciseLogger && currentExercise) {
    return (
      <ExerciseLogger
        exerciseId={currentExercise.exerciseId}
        exerciseName={getExerciseName(currentExercise.exerciseId)}
        plannedSets={currentExercise.sets}
        plannedReps={currentExercise.reps}
        restBetweenSets={currentExercise.restBetweenSets}
        onComplete={completeExercise}
        onCancel={() => setShowExerciseLogger(false)}
        onSkip={skipExercise}
      />
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Fortschritt</span>
          <span>{completedExercisesCount}/{totalExercises} Übungen</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-red-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {/* Exercise Overview */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Übungsübersicht</h3>
        <div className="space-y-2">
          {workoutPlan.exercises.map((exercise, index) => {
            const isCompleted = index < completedExercisesCount;
            const isCurrent = index === currentExerciseIndex;
            
            return (
              <div
                key={index}
                className={`p-3 rounded-lg flex items-center justify-between ${
                  isCompleted
                    ? 'bg-green-50 border border-green-200'
                    : isCurrent
                    ? 'bg-blue-50 border border-blue-200'
                    : 'bg-gray-50 border border-gray-200'
                }`}
              >
                <div className="flex items-center">
                  {isCompleted && <CheckIcon className="w-5 h-5 text-green-600 mr-2" />}
                  <span className={isCompleted ? 'text-green-800' : 'text-gray-700'}>
                    {getExerciseName(exercise.exerciseId)}
                  </span>
                </div>
                {isCurrent && (
                  <button
                    onClick={() => setShowExerciseLogger(true)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm"
                  >
                    Starten
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Session Stats */}
      <div className="pt-6 border-t border-gray-200 flex justify-around text-center">
        <div>
          <FireIcon className="w-6 h-6 text-orange-500 mx-auto mb-1" />
          <p className="text-sm text-gray-600">~{Math.round(completedExercisesCount * 50)} kcal</p>
        </div>
        <div>
          <ClockIcon className="w-6 h-6 text-blue-500 mx-auto mb-1" />
          <p className="text-sm text-gray-600">{formatTime(elapsedTime)}</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex space-x-3">
        <button
          onClick={skipExercise}
          className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg"
        >
          Übung überspringen
        </button>
        <button
          onClick={() => onComplete([])}
          className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg"
        >
          Training beenden
        </button>
      </div>
    </div>
  );
};

export default WorkoutSession;