import React, { useState, useEffect } from 'react';
import { WorkoutPlan, PlannedExercise } from '../../types';
import useTrainingStore from '../../store/trainingStore';
import ExerciseSelector from './ExerciseSelector';
import {
  ArrowLeftIcon,
  PlusIcon,
  TrashIcon,
  ClockIcon,
  ArrowsUpDownIcon,
  CheckIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

interface WorkoutPlanEditorProps {
  workoutPlanId?: string;
  onSave: () => void;
  onCancel: () => void;
}

const WorkoutPlanEditor: React.FC<WorkoutPlanEditorProps> = ({ 
  workoutPlanId, 
  onSave, 
  onCancel 
}) => {
  const { workoutPlans, createWorkoutPlan, updateWorkoutPlan, exercises } = useTrainingStore();
  const existingPlan = workoutPlanId ? workoutPlans.find(p => p.id === workoutPlanId) : null;
  
  const [name, setName] = useState(existingPlan?.name || '');
  const [type, setType] = useState<'upper' | 'lower' | 'cardio' | 'full-body'>(
    existingPlan?.type || 'full-body'
  );
  const [plannedExercises, setPlannedExercises] = useState<PlannedExercise[]>(
    existingPlan?.exercises || []
  );
  const [estimatedDuration, setEstimatedDuration] = useState(
    existingPlan?.estimatedDuration || 60
  );
  const [warmup, setWarmup] = useState<string[]>(existingPlan?.warmup || []);
  const [cooldown, setCooldown] = useState<string[]>(existingPlan?.cooldown || []);
  const [showExerciseSelector, setShowExerciseSelector] = useState(false);
  const [editingExerciseIndex, setEditingExerciseIndex] = useState<number | null>(null);
  const [newWarmupItem, setNewWarmupItem] = useState('');
  const [newCooldownItem, setNewCooldownItem] = useState('');

  const handleAddExercise = (exerciseId: string) => {
    const newExercise: PlannedExercise = {
      exerciseId,
      sets: 3,
      reps: '10-12',
      restBetweenSets: 90
    };
    setPlannedExercises([...plannedExercises, newExercise]);
    setShowExerciseSelector(false);
  };

  const handleUpdateExercise = (index: number, updates: Partial<PlannedExercise>) => {
    const updated = [...plannedExercises];
    updated[index] = { ...updated[index], ...updates };
    setPlannedExercises(updated);
  };

  const handleRemoveExercise = (index: number) => {
    setPlannedExercises(plannedExercises.filter((_, i) => i !== index));
  };

  const handleMoveExercise = (index: number, direction: 'up' | 'down') => {
    if (
      (direction === 'up' && index === 0) ||
      (direction === 'down' && index === plannedExercises.length - 1)
    ) {
      return;
    }

    const newIndex = direction === 'up' ? index - 1 : index + 1;
    const updated = [...plannedExercises];
    [updated[index], updated[newIndex]] = [updated[newIndex], updated[index]];
    setPlannedExercises(updated);
  };

  const handleAddWarmupItem = () => {
    if (newWarmupItem.trim()) {
      setWarmup([...warmup, newWarmupItem.trim()]);
      setNewWarmupItem('');
    }
  };

  const handleAddCooldownItem = () => {
    if (newCooldownItem.trim()) {
      setCooldown([...cooldown, newCooldownItem.trim()]);
      setNewCooldownItem('');
    }
  };

  const handleSave = () => {
    if (!name.trim() || plannedExercises.length === 0) {
      alert('Bitte geben Sie einen Namen ein und fügen Sie mindestens eine Übung hinzu.');
      return;
    }

    const planData: Omit<WorkoutPlan, 'id'> = {
      name: name.trim(),
      type,
      exercises: plannedExercises,
      estimatedDuration,
      warmup,
      cooldown
    };

    if (workoutPlanId) {
      updateWorkoutPlan(workoutPlanId, planData);
    } else {
      createWorkoutPlan(planData);
    }
    
    onSave();
  };

  const getExerciseName = (exerciseId: string) => {
    const exercise = exercises.find(e => e.id === exerciseId);
    return exercise?.name || exerciseId;
  };

  if (showExerciseSelector) {
    return (
      <ExerciseSelector
        onSelect={handleAddExercise}
        onCancel={() => setShowExerciseSelector(false)}
        selectedExercises={plannedExercises.map(e => e.exerciseId)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 pb-20">
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="px-4 py-3 flex items-center justify-between">
          <button
            onClick={onCancel}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeftIcon className="w-5 h-5 text-gray-700" />
          </button>
          <h1 className="text-lg font-semibold text-gray-900">
            {workoutPlanId ? 'Plan bearbeiten' : 'Neuer Trainingsplan'}
          </h1>
          <button
            onClick={handleSave}
            className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
          >
            <CheckIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* Name und Typ */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Plan Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="z.B. Ganzkörper Workout"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Trainingstyp
            </label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value as any)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            >
              <option value="full-body">Ganzkörper</option>
              <option value="upper">Oberkörper</option>
              <option value="lower">Unterkörper</option>
              <option value="cardio">Cardio</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Geschätzte Dauer (Minuten)
            </label>
            <input
              type="number"
              value={estimatedDuration}
              onChange={(e) => setEstimatedDuration(parseInt(e.target.value) || 60)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              min="15"
              step="5"
            />
          </div>
        </div>

        {/* Aufwärmung */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-2">Aufwärmung</h3>
          <div className="space-y-2">
            {warmup.map((item, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-lg">
                <span className="text-sm text-gray-700">{item}</span>
                <button
                  onClick={() => setWarmup(warmup.filter((_, i) => i !== index))}
                  className="text-red-600 hover:text-red-700"
                >
                  <TrashIcon className="w-4 h-4" />
                </button>
              </div>
            ))}
            <div className="flex gap-2">
              <input
                type="text"
                value={newWarmupItem}
                onChange={(e) => setNewWarmupItem(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddWarmupItem()}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Aufwärmübung hinzufügen"
              />
              <button
                onClick={handleAddWarmupItem}
                className="px-3 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
              >
                <PlusIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Übungen */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-gray-700">Übungen</h3>
            <button
              onClick={() => setShowExerciseSelector(true)}
              className="flex items-center gap-2 px-3 py-1.5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm"
            >
              <PlusIcon className="w-4 h-4" />
              Übung hinzufügen
            </button>
          </div>

          <div className="space-y-3">
            {plannedExercises.map((exercise, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-medium text-gray-900">
                    {getExerciseName(exercise.exerciseId)}
                  </h4>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => handleMoveExercise(index, 'up')}
                      disabled={index === 0}
                      className="p-1 text-gray-400 hover:text-gray-600 disabled:opacity-30"
                    >
                      <ArrowsUpDownIcon className="w-4 h-4 rotate-180" />
                    </button>
                    <button
                      onClick={() => handleMoveExercise(index, 'down')}
                      disabled={index === plannedExercises.length - 1}
                      className="p-1 text-gray-400 hover:text-gray-600 disabled:opacity-30"
                    >
                      <ArrowsUpDownIcon className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleRemoveExercise(index)}
                      className="p-1 text-red-600 hover:text-red-700 ml-2"
                    >
                      <TrashIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-sm">
                  <div>
                    <label className="block text-gray-600 mb-1">Sätze</label>
                    <input
                      type="number"
                      value={exercise.sets}
                      onChange={(e) => handleUpdateExercise(index, { sets: parseInt(e.target.value) || 1 })}
                      className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-1 focus:ring-red-500 focus:border-transparent"
                      min="1"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600 mb-1">Wiederholungen</label>
                    <input
                      type="text"
                      value={exercise.reps}
                      onChange={(e) => handleUpdateExercise(index, { reps: e.target.value })}
                      className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-1 focus:ring-red-500 focus:border-transparent"
                      placeholder="8-12"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600 mb-1">Pause (s)</label>
                    <input
                      type="number"
                      value={exercise.restBetweenSets}
                      onChange={(e) => handleUpdateExercise(index, { restBetweenSets: parseInt(e.target.value) || 60 })}
                      className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-1 focus:ring-red-500 focus:border-transparent"
                      min="0"
                      step="30"
                    />
                  </div>
                </div>
              </div>
            ))}

            {plannedExercises.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                <p className="mb-2">Noch keine Übungen hinzugefügt</p>
                <p className="text-sm">Klicken Sie auf "Übung hinzufügen" um zu beginnen</p>
              </div>
            )}
          </div>
        </div>

        {/* Cool-down */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-2">Cool-down</h3>
          <div className="space-y-2">
            {cooldown.map((item, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-lg">
                <span className="text-sm text-gray-700">{item}</span>
                <button
                  onClick={() => setCooldown(cooldown.filter((_, i) => i !== index))}
                  className="text-red-600 hover:text-red-700"
                >
                  <TrashIcon className="w-4 h-4" />
                </button>
              </div>
            ))}
            <div className="flex gap-2">
              <input
                type="text"
                value={newCooldownItem}
                onChange={(e) => setNewCooldownItem(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddCooldownItem()}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Cool-down Übung hinzufügen"
              />
              <button
                onClick={handleAddCooldownItem}
                className="px-3 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
              >
                <PlusIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-6">
          <button
            onClick={onCancel}
            className="flex-1 py-3 px-4 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors"
          >
            Abbrechen
          </button>
          <button
            onClick={handleSave}
            className="flex-1 py-3 px-4 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors"
          >
            {workoutPlanId ? 'Speichern' : 'Erstellen'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkoutPlanEditor;