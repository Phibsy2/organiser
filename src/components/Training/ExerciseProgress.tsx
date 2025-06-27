import React, { useState, useMemo } from 'react';
import useTrainingStore from '../../store/trainingStore';
import {
  ChartBarIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  MinusIcon,
  ScaleIcon,
  FireIcon,
  ArrowUpIcon
} from '@heroicons/react/24/outline';
import { format, subDays, startOfWeek, endOfWeek } from 'date-fns';
import { de } from 'date-fns/locale';

interface ExerciseStats {
  exerciseId: string;
  exerciseName: string;
  lastWeight: number;
  lastReps: number;
  personalBest: number;
  totalSets: number;
  totalReps: number;
  totalVolume: number;
  trend: 'up' | 'down' | 'stable';
  progressPercent: number;
  history: Array<{
    date: string;
    weight: number;
    reps: number;
    volume: number;
  }>;
}

const ExerciseProgress: React.FC = () => {
  const { sessionHistory, exercises } = useTrainingStore();
  const [selectedExercise, setSelectedExercise] = useState<string | null>(null);
  const [timeRange, setTimeRange] = useState<'week' | 'month' | 'all'>('month');

  // Calculate exercise statistics
  const exerciseStats = useMemo(() => {
    // Helper function to get exercise name
    const getExerciseName = (exerciseId: string): string => {
      const exercise = exercises.find(e => e.id === exerciseId);
      if (exercise) return exercise.name;
      
      // Fallback for predefined exercises
      const names: { [key: string]: string } = {
        'bench-press': 'Bankdrücken',
        'lat-pulldown': 'Latzug',
        'shoulder-press': 'Schulterdrücken',
        'rowing': 'Rudern',
        'squats': 'Kniebeugen',
        'deadlifts': 'Kreuzheben',
        'lunges': 'Ausfallschritte',
        'bicep-curls': 'Bizeps-Curls',
        'tricep-dips': 'Trizeps-Dips',
        'planks': 'Planks',
        'leg-press': 'Beinpresse',
        'leg-curls': 'Beinbeuger',
        'calf-raises': 'Wadenheben',
        'running': 'Laufen',
        'cycling': 'Radfahren',
        'elliptical': 'Crosstrainer'
      };
      return names[exerciseId] || exerciseId;
    };
    const stats = new Map<string, ExerciseStats>();
    
    // Filter sessions based on time range
    const cutoffDate = timeRange === 'week' 
      ? subDays(new Date(), 7)
      : timeRange === 'month'
      ? subDays(new Date(), 30)
      : new Date(0);

    const filteredSessions = sessionHistory.filter(session => {
      const sessionDate = session.date instanceof Date ? session.date : new Date(session.date);
      return sessionDate >= cutoffDate && session.completedExercises.length > 0;
    });

    // Process each session
    filteredSessions.forEach(session => {
      session.completedExercises.forEach(exercise => {
        if (!stats.has(exercise.exerciseId)) {
          stats.set(exercise.exerciseId, {
            exerciseId: exercise.exerciseId,
            exerciseName: getExerciseName(exercise.exerciseId),
            lastWeight: 0,
            lastReps: 0,
            personalBest: 0,
            totalSets: 0,
            totalReps: 0,
            totalVolume: 0,
            trend: 'stable',
            progressPercent: 0,
            history: []
          });
        }

        const stat = stats.get(exercise.exerciseId)!;
        
        // Calculate max weight and volume for this exercise in this session
        let sessionMaxWeight = 0;
        let sessionTotalReps = 0;
        let sessionTotalVolume = 0;

        exercise.sets.forEach(set => {
          if (set.weight && set.weight > sessionMaxWeight) {
            sessionMaxWeight = set.weight;
          }
          sessionTotalReps += set.reps;
          if (set.weight) {
            sessionTotalVolume += set.weight * set.reps;
          }
          stat.totalSets++;
        });

        // Update statistics
        stat.totalReps += sessionTotalReps;
        stat.totalVolume += sessionTotalVolume;
        
        if (sessionMaxWeight > stat.personalBest) {
          stat.personalBest = sessionMaxWeight;
        }

        // Add to history
        stat.history.push({
          date: session.date instanceof Date ? session.date.toISOString() : session.date,
          weight: sessionMaxWeight,
          reps: sessionTotalReps,
          volume: sessionTotalVolume
        });
      });
    });

    // Calculate trends and last values
    stats.forEach(stat => {
      if (stat.history.length > 0) {
        // Sort history by date
        stat.history.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        
        // Get last workout data
        const lastWorkout = stat.history[stat.history.length - 1];
        stat.lastWeight = lastWorkout.weight;
        stat.lastReps = lastWorkout.reps;

        // Calculate trend
        if (stat.history.length >= 2) {
          const firstWeight = stat.history[0].weight;
          const lastWeight = lastWorkout.weight;
          
          if (lastWeight > firstWeight) {
            stat.trend = 'up';
            stat.progressPercent = ((lastWeight - firstWeight) / firstWeight) * 100;
          } else if (lastWeight < firstWeight) {
            stat.trend = 'down';
            stat.progressPercent = ((firstWeight - lastWeight) / firstWeight) * -100;
          } else {
            stat.trend = 'stable';
            stat.progressPercent = 0;
          }
        }
      }
    });

    return Array.from(stats.values()).sort((a, b) => b.totalVolume - a.totalVolume);
  }, [sessionHistory, timeRange, exercises]);

  const selectedExerciseData = selectedExercise 
    ? exerciseStats.find(e => e.exerciseId === selectedExercise)
    : null;

  return (
    <div className="mt-6">
      <div className="bg-white rounded-xl shadow-sm p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-gray-900">Übungsfortschritt</h3>
          <div className="flex gap-2">
            <button
              onClick={() => setTimeRange('week')}
              className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                timeRange === 'week'
                  ? 'bg-red-100 text-red-700'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Woche
            </button>
            <button
              onClick={() => setTimeRange('month')}
              className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                timeRange === 'month'
                  ? 'bg-red-100 text-red-700'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Monat
            </button>
            <button
              onClick={() => setTimeRange('all')}
              className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                timeRange === 'all'
                  ? 'bg-red-100 text-red-700'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Gesamt
            </button>
          </div>
        </div>

        {exerciseStats.length === 0 ? (
          <p className="text-center py-8 text-gray-500">
            Noch keine Trainingsdaten vorhanden
          </p>
        ) : (
          <>
            {/* Exercise Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
              {exerciseStats.slice(0, 6).map(stat => (
                <button
                  key={stat.exerciseId}
                  onClick={() => setSelectedExercise(
                    selectedExercise === stat.exerciseId ? null : stat.exerciseId
                  )}
                  className={`p-3 rounded-lg border transition-all text-left ${
                    selectedExercise === stat.exerciseId
                      ? 'border-red-300 bg-red-50'
                      : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-gray-900">{stat.exerciseName}</h4>
                    <div className="flex items-center gap-1">
                      {stat.trend === 'up' && (
                        <ArrowTrendingUpIcon className="w-4 h-4 text-green-600" />
                      )}
                      {stat.trend === 'down' && (
                        <ArrowTrendingDownIcon className="w-4 h-4 text-red-600" />
                      )}
                      {stat.trend === 'stable' && (
                        <MinusIcon className="w-4 h-4 text-gray-400" />
                      )}
                      {stat.progressPercent !== 0 && (
                        <span className={`text-xs font-medium ${
                          stat.progressPercent > 0 ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {stat.progressPercent > 0 ? '+' : ''}{stat.progressPercent.toFixed(1)}%
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div>
                      <p className="text-gray-500">Letztes Gewicht</p>
                      <p className="font-semibold">{stat.lastWeight} kg</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Bestleistung</p>
                      <p className="font-semibold text-red-600">{stat.personalBest} kg</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Volumen</p>
                      <p className="font-semibold">{(stat.totalVolume / 1000).toFixed(1)} t</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Detailed View for Selected Exercise */}
            {selectedExerciseData && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">
                  {selectedExerciseData.exerciseName} - Detailansicht
                </h4>
                
                {/* Stats Summary */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                  <div className="bg-white p-3 rounded-lg">
                    <div className="flex items-center gap-2 text-gray-600 mb-1">
                      <ScaleIcon className="w-4 h-4" />
                      <span className="text-xs">Bestleistung</span>
                    </div>
                    <p className="text-lg font-bold text-red-600">
                      {selectedExerciseData.personalBest} kg
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <div className="flex items-center gap-2 text-gray-600 mb-1">
                      <ChartBarIcon className="w-4 h-4" />
                      <span className="text-xs">Gesamt Sätze</span>
                    </div>
                    <p className="text-lg font-bold">{selectedExerciseData.totalSets}</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <div className="flex items-center gap-2 text-gray-600 mb-1">
                      <FireIcon className="w-4 h-4" />
                      <span className="text-xs">Gesamt Wdh.</span>
                    </div>
                    <p className="text-lg font-bold">{selectedExerciseData.totalReps}</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <div className="flex items-center gap-2 text-gray-600 mb-1">
                      <ArrowUpIcon className="w-4 h-4" />
                      <span className="text-xs">Fortschritt</span>
                    </div>
                    <p className={`text-lg font-bold ${
                      selectedExerciseData.progressPercent > 0 
                        ? 'text-green-600' 
                        : selectedExerciseData.progressPercent < 0
                        ? 'text-red-600'
                        : 'text-gray-600'
                    }`}>
                      {selectedExerciseData.progressPercent > 0 ? '+' : ''}
                      {selectedExerciseData.progressPercent.toFixed(1)}%
                    </p>
                  </div>
                </div>

                {/* Progress Chart */}
                <div className="bg-white p-3 rounded-lg">
                  <h5 className="text-sm font-medium text-gray-700 mb-2">Gewichtsverlauf</h5>
                  <div className="h-40 flex items-end justify-between gap-1">
                    {selectedExerciseData.history.slice(-10).map((workout, idx) => {
                      const heightPercent = (workout.weight / selectedExerciseData.personalBest) * 100;
                      return (
                        <div key={idx} className="flex-1 flex flex-col items-center">
                          <div 
                            className="w-full bg-red-500 rounded-t"
                            style={{ height: `${heightPercent}%` }}
                            title={`${workout.weight} kg am ${format(new Date(workout.date), 'dd.MM.', { locale: de })}`}
                          />
                          <span className="text-xs text-gray-500 mt-1 rotate-45 origin-left">
                            {format(new Date(workout.date), 'dd.MM', { locale: de })}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ExerciseProgress;