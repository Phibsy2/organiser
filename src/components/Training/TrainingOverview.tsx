import React, { useState } from 'react';
import WorkoutSession from './WorkoutSession';
import ExerciseLogger from './ExerciseLogger';
import TrainingHistory from './TrainingHistory';
import WorkoutPlanEditor from './WorkoutPlanEditor';
import ExerciseProgress from './ExerciseProgress';
import useTrainingStore from '../../store/trainingStore';
import useSettingsStore from '../../store/settingsStore';
import { CompletedExercise } from '../../types';
import {
  PlayIcon,
  CalendarIcon,
  ClockIcon,
  FireIcon,
  ChartBarIcon,
  PlusIcon,
  PencilIcon,
  TrashIcon,
  DocumentDuplicateIcon
} from '@heroicons/react/24/outline';
import { format } from 'date-fns';
import { de } from 'date-fns/locale';

type ViewMode = 'overview' | 'session' | 'quickLog' | 'editPlan' | 'createPlan';

const TrainingOverview: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('overview');
  const [selectedWorkoutId, setSelectedWorkoutId] = useState<string | null>(null);
  const [editingWorkoutId, setEditingWorkoutId] = useState<string | null>(null);
  const [selectedExercise, setSelectedExercise] = useState<{
    id: string;
    name: string;
    sets: number;
    reps: string;
  } | null>(null);

  const { 
    workoutPlans, 
    currentSession, 
    weeklyStats,
    startTrainingSession,
    completeExercise,
    endTrainingSession,
    getLastWorkoutForType,
    deleteWorkoutPlan,
    duplicateWorkoutPlan
  } = useTrainingStore();

  const handleStartWorkout = (workoutPlanId: string) => {
    startTrainingSession(workoutPlanId);
    setSelectedWorkoutId(workoutPlanId);
    setViewMode('session');
  };

  const handleCompleteSession = (completedExercises: CompletedExercise[]) => {
    // Prompt for feeling
    const feeling = window.confirm('War das Training gut?') ? 4 : 3;
    endTrainingSession(feeling);
    setViewMode('overview');
    setSelectedWorkoutId(null);
  };

  const handleQuickLog = (exercise: any) => {
    setSelectedExercise(exercise);
    setViewMode('quickLog');
  };

  const handleExerciseComplete = (completedExercise: any) => {
    if (currentSession) {
      completeExercise(completedExercise);
    }
    setViewMode('overview');
    setSelectedExercise(null);
  };

  const handleEditPlan = (planId: string) => {
    setEditingWorkoutId(planId);
    setViewMode('editPlan');
  };

  const handleDeletePlan = (planId: string) => {
    if (window.confirm('Möchten Sie diesen Trainingsplan wirklich löschen?')) {
      deleteWorkoutPlan(planId);
    }
  };

  const handleDuplicatePlan = (planId: string) => {
    const plan = workoutPlans.find(p => p.id === planId);
    if (plan) {
      const newName = window.prompt('Name für den duplizierten Plan:', `${plan.name} (Kopie)`);
      if (newName) {
        duplicateWorkoutPlan(planId, newName);
      }
    }
  };

  // Get today's recommended workout
  const getTodaysWorkout = () => {
    const today = new Date().getDay();
    const dayMap = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const todayName = dayMap[today];
    
    // Check preferred training days
    const settingsStore = useSettingsStore.getState();
    const preferredDays = settingsStore.trainingPreferences?.preferredDays || [];
    if (!preferredDays.includes(todayName)) {
      return null;
    }

    // Determine workout type based on last sessions
    const lastUpper = getLastWorkoutForType('upper');
    const lastLower = getLastWorkoutForType('lower');
    const lastCardio = getLastWorkoutForType('cardio');

    const daysSinceUpper = lastUpper ? Math.floor((Date.now() - new Date(lastUpper.date).getTime()) / (1000 * 60 * 60 * 24)) : 999;
    const daysSinceLower = lastLower ? Math.floor((Date.now() - new Date(lastLower.date).getTime()) / (1000 * 60 * 60 * 24)) : 999;
    const daysSinceCardio = lastCardio ? Math.floor((Date.now() - new Date(lastCardio.date).getTime()) / (1000 * 60 * 60 * 24)) : 999;

    // Simple rotation logic
    if (daysSinceLower >= daysSinceUpper && daysSinceLower >= daysSinceCardio) {
      return workoutPlans.find(plan => plan.type === 'lower');
    } else if (daysSinceCardio >= daysSinceUpper) {
      return workoutPlans.find(plan => plan.type === 'cardio');
    } else {
      return workoutPlans.find(plan => plan.type === 'upper');
    }
  };

  const todaysWorkout = getTodaysWorkout();

  if (viewMode === 'session' && selectedWorkoutId) {
    const workout = workoutPlans.find(p => p.id === selectedWorkoutId);
    if (workout) {
      return (
        <WorkoutSession 
          workoutPlan={workout}
          onComplete={handleCompleteSession}
          onCancel={() => {
            setViewMode('overview');
            setSelectedWorkoutId(null);
          }}
        />
      );
    }
  }

  if (viewMode === 'quickLog' && selectedExercise) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 pb-20 px-4 py-6">
        <ExerciseLogger
          exerciseId={selectedExercise.id}
          exerciseName={selectedExercise.name}
          plannedSets={selectedExercise.sets}
          plannedReps={selectedExercise.reps}
          onComplete={handleExerciseComplete}
          onCancel={() => {
            setViewMode('overview');
            setSelectedExercise(null);
          }}
        />
      </div>
    );
  }

  if (viewMode === 'editPlan' && editingWorkoutId) {
    return (
      <WorkoutPlanEditor
        workoutPlanId={editingWorkoutId}
        onSave={() => {
          setViewMode('overview');
          setEditingWorkoutId(null);
        }}
        onCancel={() => {
          setViewMode('overview');
          setEditingWorkoutId(null);
        }}
      />
    );
  }

  if (viewMode === 'createPlan') {
    return (
      <WorkoutPlanEditor
        onSave={() => setViewMode('overview')}
        onCancel={() => setViewMode('overview')}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 pb-20">
      <div className="px-4 py-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Training</h1>

        {/* Weekly Stats */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
          <h3 className="font-semibold text-gray-900 mb-3">Wochenstatistik</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="text-center">
              <CalendarIcon className="w-8 h-8 text-red-600 mx-auto mb-1" />
              <p className="text-2xl font-bold text-gray-900">{weeklyStats.sessionsCompleted}</p>
              <p className="text-xs text-gray-600">Trainings</p>
            </div>
            <div className="text-center">
              <ClockIcon className="w-8 h-8 text-blue-600 mx-auto mb-1" />
              <p className="text-2xl font-bold text-gray-900">{Math.round(weeklyStats.trainingTime / 60)}h</p>
              <p className="text-xs text-gray-600">Trainingszeit</p>
            </div>
            <div className="text-center">
              <FireIcon className="w-8 h-8 text-orange-600 mx-auto mb-1" />
              <p className="text-2xl font-bold text-gray-900">{weeklyStats.caloriesBurned}</p>
              <p className="text-xs text-gray-600">Kalorien</p>
            </div>
            <div className="text-center">
              <ChartBarIcon className="w-8 h-8 text-green-600 mx-auto mb-1" />
              <p className="text-2xl font-bold text-gray-900">{Math.round(weeklyStats.totalVolume / 1000)}t</p>
              <p className="text-xs text-gray-600">Volumen</p>
            </div>
          </div>
        </div>

        {/* Today's Recommendation */}
        {todaysWorkout && (
          <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-xl shadow-sm p-6 mb-6 text-white">
            <h3 className="font-semibold text-lg mb-2">Heutiges Training</h3>
            <p className="text-xl font-bold mb-3">{todaysWorkout.name}</p>
            <p className="text-sm opacity-90 mb-4">
              {todaysWorkout.estimatedDuration} Minuten • {todaysWorkout.exercises.length} Übungen
            </p>
            <button
              onClick={() => handleStartWorkout(todaysWorkout.id)}
              className="w-full bg-white text-red-600 font-medium py-3 px-4 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
            >
              <PlayIcon className="w-5 h-5 mr-2" />
              Training starten
            </button>
          </div>
        )}

        {/* Workout Plans */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-gray-900">Alle Trainingspläne</h3>
            <button
              onClick={() => setViewMode('createPlan')}
              className="px-3 py-1.5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm flex items-center gap-1"
            >
              <PlusIcon className="w-4 h-4" />
              Neuer Plan
            </button>
          </div>
          {workoutPlans.map(plan => {
            const lastSession = getLastWorkoutForType(plan.type);
            const daysSince = lastSession 
              ? Math.floor((Date.now() - new Date(lastSession.date).getTime()) / (1000 * 60 * 60 * 24))
              : null;

            return (
              <div key={plan.id} className="bg-white rounded-xl shadow-sm p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-semibold text-gray-900">{plan.name}</h4>
                    <p className="text-sm text-gray-600">
                      {plan.estimatedDuration} Min • {plan.exercises.length} Übungen
                    </p>
                    {daysSince !== null && (
                      <p className="text-xs text-gray-500 mt-1">
                        Zuletzt vor {daysSince} {daysSince === 1 ? 'Tag' : 'Tagen'}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => handleEditPlan(plan.id)}
                      className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                      title="Bearbeiten"
                    >
                      <PencilIcon className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDuplicatePlan(plan.id)}
                      className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                      title="Duplizieren"
                    >
                      <DocumentDuplicateIcon className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDeletePlan(plan.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      title="Löschen"
                    >
                      <TrashIcon className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleStartWorkout(plan.id)}
                      className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors ml-2"
                    >
                      <PlayIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Exercise Preview */}
                <div className="text-xs text-gray-600">
                  {plan.exercises.slice(0, 3).map((ex, idx) => (
                    <span key={idx}>
                      {getExerciseName(ex.exerciseId)}
                      {idx < 2 && idx < plan.exercises.length - 1 && ' • '}
                    </span>
                  ))}
                  {plan.exercises.length > 3 && ` • +${plan.exercises.length - 3} mehr`}
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Exercise Log */}
        <div className="mt-6">
          <h3 className="font-semibold text-gray-900 mb-3">Schnell-Erfassung</h3>
          <div className="grid grid-cols-2 gap-3">
            {popularExercises.map(exercise => (
              <button
                key={exercise.id}
                onClick={() => handleQuickLog(exercise)}
                className="bg-white rounded-lg p-3 text-left hover:shadow-md transition-shadow"
              >
                <p className="font-medium text-gray-900 text-sm">{exercise.name}</p>
                <p className="text-xs text-gray-600">{exercise.sets} × {exercise.reps}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Exercise Progress */}
        <ExerciseProgress />

        {/* Training History */}
        <TrainingHistory />
      </div>
    </div>
  );
};

// Helper function
const getExerciseName = (exerciseId: string): string => {
  const names: { [key: string]: string } = {
    'bench-press': 'Bankdrücken',
    'lat-pulldown': 'Latzug',
    'shoulder-press': 'Schulterdrücken',
    'rowing': 'Rudern',
    'squats': 'Kniebeugen',
    'deadlifts': 'Kreuzheben',
    'lunges': 'Ausfallschritte'
  };
  return names[exerciseId] || exerciseId;
};

const popularExercises = [
  { id: 'bench-press', name: 'Bankdrücken', sets: 3, reps: '8-12' },
  { id: 'squats', name: 'Kniebeugen', sets: 3, reps: '10-12' },
  { id: 'deadlifts', name: 'Kreuzheben', sets: 3, reps: '8-10' },
  { id: 'planks', name: 'Planks', sets: 3, reps: '60 sec' }
];

export default TrainingOverview;