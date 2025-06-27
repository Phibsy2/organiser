import React, { useState } from 'react';
import useTrainingStore from '../../store/trainingStore';
import {
  ClockIcon,
  FireIcon,
  CalendarIcon,
  ChartBarIcon,
  TrashIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';

const TrainingHistory: React.FC = () => {
  const { sessionHistory, workoutPlans, deleteTrainingSession } = useTrainingStore();
  const [expandedSession, setExpandedSession] = useState<string | null>(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null);

  const getWorkoutName = (workoutPlanId: string) => {
    const plan = workoutPlans.find(p => p.id === workoutPlanId);
    return plan?.name || 'Unbekanntes Training';
  };

  const getExerciseName = (exerciseId: string): string => {
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

  const formatDate = (date: Date): string => {
    return new Date(date).toLocaleDateString('de-DE', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const calculateTotalVolume = (session: any): number => {
    return session.completedExercises.reduce((total: number, exercise: any) => {
      return total + exercise.sets.reduce((exerciseTotal: number, set: any) => {
        return exerciseTotal + (set.reps * (set.weight || 0));
      }, 0);
    }, 0);
  };

  const sortedSessions = [...sessionHistory]
    .filter(session => session.status === 'completed')
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const toggleExpanded = (sessionId: string) => {
    setExpandedSession(expandedSession === sessionId ? null : sessionId);
  };

  const getFeelingEmoji = (feeling?: 1 | 2 | 3 | 4 | 5) => {
    switch (feeling) {
      case 1: return '😫';
      case 2: return '😕';
      case 3: return '😐';
      case 4: return '😊';
      case 5: return '💪';
      default: return null;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'upper': return 'border-blue-500 bg-blue-50';
      case 'lower': return 'border-green-500 bg-green-50';
      case 'cardio': return 'border-orange-500 bg-orange-50';
      default: return 'border-gray-500 bg-gray-50';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'upper': return 'Oberkörper';
      case 'lower': return 'Unterkörper';
      case 'cardio': return 'Cardio';
      default: return 'Training';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mt-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Trainingsverlauf</h3>
      
      {sortedSessions.length === 0 ? (
        <div className="text-center py-8">
          <ChartBarIcon className="w-12 h-12 text-gray-400 mx-auto mb-3" />
          <p className="text-gray-600">Noch keine abgeschlossenen Trainingseinheiten</p>
        </div>
      ) : (
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {sortedSessions.map((session) => {
            const totalVolume = calculateTotalVolume(session);
            const isExpanded = expandedSession === session.id;
            
            return (
              <div
                key={session.id}
                className={`border-l-4 ${getTypeColor(session.type).split(' ')[0]} rounded-r-lg overflow-hidden`}
              >
                <div className={`p-4 ${getTypeColor(session.type).split(' ')[1]} hover:bg-opacity-70 transition-colors`}>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-gray-900 flex items-center">
                            {getWorkoutName(session.workoutPlanId)}
                            {session.feeling && (
                              <span className="ml-2 text-lg">{getFeelingEmoji(session.feeling)}</span>
                            )}
                          </h4>
                          <p className="text-sm text-gray-600 mt-1">
                            <span className="inline-block px-2 py-1 text-xs bg-white bg-opacity-60 rounded">
                              {getTypeLabel(session.type)}
                            </span>
                          </p>
                        </div>
                        <button
                          onClick={() => setShowDeleteConfirm(session.id)}
                          className="ml-2 p-1 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                          title="Training löschen"
                        >
                          <TrashIcon className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-3 text-sm">
                        <div className="flex items-center text-gray-600">
                          <CalendarIcon className="w-4 h-4 mr-1" />
                          {formatDate(session.date)}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <ClockIcon className="w-4 h-4 mr-1" />
                          {session.timeBlock.duration} Min
                        </div>
                        <div className="flex items-center text-gray-600">
                          <FireIcon className="w-4 h-4 mr-1" />
                          {session.calories || 0} kcal
                        </div>
                        <div className="flex items-center text-gray-600">
                          <ChartBarIcon className="w-4 h-4 mr-1" />
                          {(totalVolume / 1000).toFixed(1)} t
                        </div>
                      </div>

                      {session.notes && (
                        <p className="mt-2 text-sm text-gray-700 italic">
                          "{session.notes}"
                        </p>
                      )}

                      <button
                        onClick={() => toggleExpanded(session.id)}
                        className="mt-3 flex items-center text-sm text-blue-600 hover:text-blue-800"
                      >
                        {isExpanded ? (
                          <>
                            <ChevronUpIcon className="w-4 h-4 mr-1" />
                            Weniger anzeigen
                          </>
                        ) : (
                          <>
                            <ChevronDownIcon className="w-4 h-4 mr-1" />
                            Übungen anzeigen ({session.completedExercises.length})
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Exercise Details */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <h5 className="font-medium text-gray-900 mb-2">Übungen:</h5>
                      <div className="space-y-2">
                        {session.completedExercises.map((exercise, index) => (
                          <div key={index} className="bg-white bg-opacity-60 rounded p-3">
                            <h6 className="font-medium text-gray-800">
                              {getExerciseName(exercise.exerciseId)}
                            </h6>
                            <div className="flex flex-wrap gap-2 mt-1">
                              {exercise.sets.map((set, setIndex) => (
                                <span
                                  key={setIndex}
                                  className="text-sm bg-gray-100 px-2 py-1 rounded"
                                >
                                  Satz {setIndex + 1}: {set.reps} × {set.weight || 0}kg
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Delete Confirmation */}
                  {showDeleteConfirm === session.id && (
                    <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-sm text-red-800 mb-2">
                        Möchten Sie dieses Training wirklich löschen?
                      </p>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => {
                            deleteTrainingSession(session.id);
                            setShowDeleteConfirm(null);
                          }}
                          className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded transition-colors"
                        >
                          Löschen
                        </button>
                        <button
                          onClick={() => setShowDeleteConfirm(null)}
                          className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-gray-700 text-sm font-medium rounded transition-colors"
                        >
                          Abbrechen
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TrainingHistory;