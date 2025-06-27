import React, { useState, useEffect } from 'react';
import { CompletedExercise, CompletedSet } from '../../types';
import useTrainingStore from '../../store/trainingStore';
import {
  PlusIcon,
  MinusIcon,
  CheckIcon,
  XMarkIcon,
  ChartBarIcon,
  ClockIcon,
  ArrowRightIcon
} from '@heroicons/react/24/solid';

interface ExerciseLoggerProps {
  exerciseId: string;
  exerciseName: string;
  plannedSets: number;
  plannedReps: string;
  restBetweenSets?: number;
  onComplete: (completedExercise: CompletedExercise) => void;
  onCancel: () => void;
  onSkip?: () => void;
}

const ExerciseLogger: React.FC<ExerciseLoggerProps> = ({
  exerciseId,
  exerciseName,
  plannedSets,
  plannedReps,
  restBetweenSets = 90,
  onComplete,
  onCancel,
  onSkip
}) => {
  const { getLastExercisePerformance } = useTrainingStore();
  const [lastPerformance, setLastPerformance] = useState<CompletedExercise | undefined>();
  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [completedSets, setCompletedSets] = useState<CompletedSet[]>([]);
  const [currentReps, setCurrentReps] = useState(parseInt(plannedReps) || 10);
  const [currentWeight, setCurrentWeight] = useState(0);
  const [isResting, setIsResting] = useState(false);
  const [restTimeRemaining, setRestTimeRemaining] = useState(restBetweenSets);
  
  useEffect(() => {
    // Reset state when exercise changes
    setCurrentSetIndex(0);
    setCompletedSets([]);
    setIsResting(false);
    setRestTimeRemaining(restBetweenSets);
    
    const performance = getLastExercisePerformance(exerciseId);
    setLastPerformance(performance);
    
    // Pre-fill with last performance data if available
    if (performance && performance.sets[0]) {
      setCurrentReps(performance.sets[0].reps);
      setCurrentWeight(performance.sets[0].weight || 0);
    } else {
      setCurrentReps(parseInt(plannedReps) || 10);
      setCurrentWeight(0);
    }
  }, [exerciseId, getLastExercisePerformance, plannedReps, restBetweenSets]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isResting && restTimeRemaining > 0) {
      interval = setInterval(() => {
        setRestTimeRemaining((time) => {
          if (time <= 1) {
            setIsResting(false);
            return restBetweenSets; // Reset for next time
          }
          return time - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isResting, restTimeRemaining, restBetweenSets]);

  const completeSet = () => {
    const newSet: CompletedSet = {
      reps: currentReps,
      weight: currentWeight,
      restTaken: restBetweenSets
    };

    const newCompletedSets = [...completedSets, newSet];
    setCompletedSets(newCompletedSets);

    // Check if this was the last set
    if (currentSetIndex >= plannedSets - 1) {
      // Exercise complete
      onComplete({
        exerciseId,
        sets: newCompletedSets
      });
    } else {
      // Move to rest period
      setIsResting(true);
      setCurrentSetIndex(currentSetIndex + 1);
      
      // Pre-fill next set with previous performance if available
      const nextSetData = lastPerformance?.sets[currentSetIndex + 1];
      if (nextSetData) {
        setCurrentReps(nextSetData.reps);
        setCurrentWeight(nextSetData.weight || currentWeight);
      }
    }
  };

  const skipRest = () => {
    setIsResting(false);
    setRestTimeRemaining(restBetweenSets);
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-900">{exerciseName}</h3>
        <button
          onClick={onCancel}
          className="text-gray-400 hover:text-gray-600"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>
      </div>

      {/* Progress indicator */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Fortschritt</span>
          <span>Satz {Math.min(currentSetIndex + 1, plannedSets)} von {plannedSets}</span>
        </div>
        <div className="flex space-x-1">
          {Array.from({ length: plannedSets }).map((_, index) => (
            <div
              key={index}
              className={`flex-1 h-2 rounded ${
                index < completedSets.length
                  ? 'bg-green-600'
                  : index === currentSetIndex
                  ? 'bg-blue-600'
                  : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Last Performance Display */}
      {lastPerformance && !isResting && (
        <div className="mb-6 p-3 bg-blue-50 rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <ChartBarIcon className="w-4 h-4 text-blue-600 mr-2" />
              <span className="text-sm font-medium text-blue-900">
                Letztes Mal - Satz {currentSetIndex + 1}: 
              </span>
            </div>
            {lastPerformance.sets[currentSetIndex] && (
              <span className="text-sm font-semibold text-blue-800">
                {lastPerformance.sets[currentSetIndex].reps} × {lastPerformance.sets[currentSetIndex].weight || 0} kg
              </span>
            )}
          </div>
        </div>
      )}

      {/* Rest Timer */}
      {isResting ? (
        <div className="text-center py-8">
          <div className="mb-4">
            <ClockIcon className="w-16 h-16 text-blue-600 mx-auto mb-2" />
            <p className="text-4xl font-bold text-gray-900">{formatTime(restTimeRemaining)}</p>
            <p className="text-lg text-gray-600 mt-2">Pause</p>
          </div>
          
          <div className="space-y-3">
            <button
              onClick={skipRest}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center transition-colors duration-200"
            >
              <ArrowRightIcon className="w-5 h-5 mr-2" />
              Nächster Satz
            </button>
            
            <p className="text-sm text-gray-500">
              Bereite dich auf Satz {currentSetIndex + 1} vor
            </p>
          </div>

          {/* Completed sets summary */}
          <div className="mt-6 p-3 bg-gray-50 rounded-lg">
            <p className="text-sm font-medium text-gray-700 mb-2">Abgeschlossene Sätze:</p>
            <div className="flex justify-center space-x-3">
              {completedSets.map((set, index) => (
                <div key={index} className="text-sm text-gray-600">
                  <span className="font-medium">{index + 1}:</span> {set.reps}×{set.weight}kg
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* Current Set Input */}
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">
              Satz {currentSetIndex + 1}
            </h4>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Wiederholungen</label>
                <div className="flex items-center justify-center">
                  <button
                    onClick={() => setCurrentReps(Math.max(1, currentReps - 1))}
                    className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded"
                  >
                    <MinusIcon className="w-6 h-6" />
                  </button>
                  <input
                    type="number"
                    value={currentReps}
                    onChange={(e) => setCurrentReps(parseInt(e.target.value) || 0)}
                    className="w-20 text-center text-2xl font-bold border-0 bg-transparent mx-2"
                  />
                  <button
                    onClick={() => setCurrentReps(currentReps + 1)}
                    className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded"
                  >
                    <PlusIcon className="w-6 h-6" />
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Gewicht (kg)</label>
                <div className="flex items-center justify-center">
                  <button
                    onClick={() => setCurrentWeight(Math.max(0, currentWeight - 2.5))}
                    className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded"
                  >
                    <MinusIcon className="w-6 h-6" />
                  </button>
                  <input
                    type="number"
                    value={currentWeight}
                    onChange={(e) => setCurrentWeight(parseFloat(e.target.value) || 0)}
                    className="w-20 text-center text-2xl font-bold border-0 bg-transparent mx-2"
                    step="2.5"
                  />
                  <button
                    onClick={() => setCurrentWeight(currentWeight + 2.5)}
                    className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded"
                  >
                    <PlusIcon className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2">
            <button
              onClick={completeSet}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center transition-colors duration-200"
            >
              <CheckIcon className="w-5 h-5 mr-2" />
              {currentSetIndex >= plannedSets - 1 ? 'Übung abschließen' : 'Satz abgeschlossen'}
            </button>
            
            {onSkip && (
              <button
                onClick={onSkip}
                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors duration-200"
              >
                Übung überspringen
              </button>
            )}
          </div>

          {/* Quick weight buttons */}
          <div className="mt-4 flex justify-center space-x-2">
            <p className="text-sm text-gray-600 mr-2">Schnellauswahl:</p>
            {[0, 20, 40, 60, 80].map((weight) => (
              <button
                key={weight}
                onClick={() => setCurrentWeight(weight)}
                className="px-3 py-1 text-sm bg-gray-200 hover:bg-gray-300 rounded"
              >
                {weight}kg
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ExerciseLogger;