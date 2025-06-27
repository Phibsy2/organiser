import React, { useState, useMemo } from 'react';
import { Exercise } from '../../types';
import useTrainingStore from '../../store/trainingStore';
import CustomExerciseForm from './CustomExerciseForm';
import {
  XMarkIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  CheckIcon,
  PlusIcon
} from '@heroicons/react/24/outline';

interface ExerciseSelectorProps {
  onSelect: (exerciseId: string) => void;
  onCancel: () => void;
  selectedExercises?: string[];
}

const ExerciseSelector: React.FC<ExerciseSelectorProps> = ({
  onSelect,
  onCancel,
  selectedExercises = []
}) => {
  const { exercises, createExercise } = useTrainingStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedMuscleGroup, setSelectedMuscleGroup] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [showCustomExerciseForm, setShowCustomExerciseForm] = useState(false);

  // Get unique values for filters
  const categories = useMemo(() => {
    const cats = new Set(exercises.map(e => e.category));
    return Array.from(cats).sort();
  }, [exercises]);

  const muscleGroups = useMemo(() => {
    const groups = new Set(exercises.flatMap(e => e.muscleGroups));
    return Array.from(groups).sort();
  }, [exercises]);

  const difficulties = ['beginner', 'intermediate', 'advanced'];

  // Filter exercises
  const filteredExercises = useMemo(() => {
    return exercises.filter(exercise => {
      // Search term filter
      if (searchTerm && !exercise.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }

      // Category filter
      if (selectedCategory !== 'all' && exercise.category !== selectedCategory) {
        return false;
      }

      // Muscle group filter
      if (selectedMuscleGroup !== 'all' && !exercise.muscleGroups.includes(selectedMuscleGroup)) {
        return false;
      }

      // Difficulty filter
      if (selectedDifficulty !== 'all' && exercise.difficulty !== selectedDifficulty) {
        return false;
      }

      return true;
    });
  }, [exercises, searchTerm, selectedCategory, selectedMuscleGroup, selectedDifficulty]);

  // Group exercises by category
  const exercisesByCategory = useMemo(() => {
    const grouped: { [key: string]: Exercise[] } = {};
    filteredExercises.forEach(exercise => {
      if (!grouped[exercise.category]) {
        grouped[exercise.category] = [];
      }
      grouped[exercise.category].push(exercise);
    });
    return grouped;
  }, [filteredExercises]);

  const getCategoryName = (category: string) => {
    const names: { [key: string]: string } = {
      strength: 'Krafttraining',
      cardio: 'Cardio',
      flexibility: 'Flexibilität',
      core: 'Core'
    };
    return names[category] || category;
  };

  const getMuscleGroupName = (group: string) => {
    const names: { [key: string]: string } = {
      chest: 'Brust',
      back: 'Rücken',
      shoulders: 'Schultern',
      biceps: 'Bizeps',
      triceps: 'Trizeps',
      abs: 'Bauch',
      core: 'Core',
      quadriceps: 'Quadrizeps',
      hamstrings: 'Beinbeuger',
      glutes: 'Gesäß',
      calves: 'Waden',
      'full-body': 'Ganzkörper',
      legs: 'Beine',
      obliques: 'Seitliche Bauchmuskeln'
    };
    return names[group] || group;
  };

  const getDifficultyName = (difficulty: string) => {
    const names: { [key: string]: string } = {
      beginner: 'Anfänger',
      intermediate: 'Fortgeschritten',
      advanced: 'Experte'
    };
    return names[difficulty] || difficulty;
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-100 text-green-700';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-700';
      case 'advanced':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const handleCreateExercise = (exercise: Omit<Exercise, 'id'>) => {
    createExercise(exercise);
    setShowCustomExerciseForm(false);
  };

  if (showCustomExerciseForm) {
    return (
      <CustomExerciseForm
        onSave={handleCreateExercise}
        onCancel={() => setShowCustomExerciseForm(false)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="px-4 py-3 flex items-center justify-between">
          <button
            onClick={onCancel}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <XMarkIcon className="w-5 h-5 text-gray-700" />
          </button>
          <h1 className="text-lg font-semibold text-gray-900">Übung auswählen</h1>
          <button
            onClick={() => setShowCustomExerciseForm(true)}
            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            title="Neue Übung erstellen"
          >
            <PlusIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Search bar */}
        <div className="px-4 pb-3">
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Übung suchen..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-t border-gray-200 px-4 py-3 space-y-3">
        <div className="flex items-center gap-2 text-sm">
          <FunnelIcon className="w-4 h-4 text-gray-500" />
          <span className="text-gray-600 font-medium">Filter:</span>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2">
          {/* Category filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-red-500 focus:border-transparent"
          >
            <option value="all">Alle Kategorien</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{getCategoryName(cat)}</option>
            ))}
          </select>

          {/* Muscle group filter */}
          <select
            value={selectedMuscleGroup}
            onChange={(e) => setSelectedMuscleGroup(e.target.value)}
            className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-red-500 focus:border-transparent"
          >
            <option value="all">Alle Muskelgruppen</option>
            {muscleGroups.map(group => (
              <option key={group} value={group}>{getMuscleGroupName(group)}</option>
            ))}
          </select>

          {/* Difficulty filter */}
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-red-500 focus:border-transparent"
          >
            <option value="all">Alle Schwierigkeiten</option>
            {difficulties.map(diff => (
              <option key={diff} value={diff}>{getDifficultyName(diff)}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Exercise list */}
      <div className="px-4 py-4">
        {Object.keys(exercisesByCategory).length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <p className="text-lg mb-2">Keine Übungen gefunden</p>
            <p className="text-sm mb-4">Versuchen Sie es mit anderen Filterkriterien</p>
            <button
              onClick={() => setShowCustomExerciseForm(true)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              <PlusIcon className="w-5 h-5" />
              Eigene Übung erstellen
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {Object.entries(exercisesByCategory).map(([category, exercises]) => (
              <div key={category}>
                <h3 className="text-sm font-medium text-gray-700 mb-3">
                  {getCategoryName(category)}
                </h3>
                <div className="space-y-2">
                  {exercises.map(exercise => (
                    <button
                      key={exercise.id}
                      onClick={() => onSelect(exercise.id)}
                      disabled={selectedExercises.includes(exercise.id)}
                      className={`w-full bg-white rounded-lg p-4 text-left hover:shadow-md transition-shadow ${
                        selectedExercises.includes(exercise.id) 
                          ? 'opacity-50 cursor-not-allowed' 
                          : 'cursor-pointer'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium text-gray-900">{exercise.name}</h4>
                        {selectedExercises.includes(exercise.id) && (
                          <CheckIcon className="w-5 h-5 text-green-600" />
                        )}
                      </div>
                      <div className="flex flex-wrap gap-2 text-xs">
                        <span className={`px-2 py-1 rounded-full ${getDifficultyColor(exercise.difficulty)}`}>
                          {getDifficultyName(exercise.difficulty)}
                        </span>
                        {exercise.muscleGroups.map(group => (
                          <span key={group} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
                            {getMuscleGroupName(group)}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        {exercise.equipment.length > 0 && (
                          <p className="text-xs text-gray-500">
                            Equipment: {exercise.equipment.join(', ')}
                          </p>
                        )}
                        {exercise.id.startsWith('custom-') && (
                          <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">
                            Eigene Übung
                          </span>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExerciseSelector;