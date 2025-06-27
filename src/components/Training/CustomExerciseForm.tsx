import React, { useState } from 'react';
import { Exercise, ExerciseCategory, ExerciseDifficulty } from '../../types';
import {
  XMarkIcon,
  CheckIcon,
  PlusIcon,
  MinusIcon
} from '@heroicons/react/24/outline';

interface CustomExerciseFormProps {
  onSave: (exercise: Omit<Exercise, 'id'>) => void;
  onCancel: () => void;
}

const CustomExerciseForm: React.FC<CustomExerciseFormProps> = ({ onSave, onCancel }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState<ExerciseCategory>('strength');
  const [muscleGroups, setMuscleGroups] = useState<string[]>([]);
  const [equipment, setEquipment] = useState<string[]>([]);
  const [difficulty, setDifficulty] = useState<ExerciseDifficulty>('beginner');
  const [newMuscleGroup, setNewMuscleGroup] = useState('');
  const [newEquipment, setNewEquipment] = useState('');

  const availableMuscleGroups = [
    { id: 'chest', name: 'Brust' },
    { id: 'back', name: 'Rücken' },
    { id: 'shoulders', name: 'Schultern' },
    { id: 'biceps', name: 'Bizeps' },
    { id: 'triceps', name: 'Trizeps' },
    { id: 'abs', name: 'Bauch' },
    { id: 'core', name: 'Core' },
    { id: 'quadriceps', name: 'Quadrizeps' },
    { id: 'hamstrings', name: 'Beinbeuger' },
    { id: 'glutes', name: 'Gesäß' },
    { id: 'calves', name: 'Waden' },
    { id: 'full-body', name: 'Ganzkörper' },
    { id: 'legs', name: 'Beine' },
    { id: 'obliques', name: 'Seitliche Bauchmuskeln' }
  ];

  const availableEquipment = [
    { id: 'none', name: 'Ohne Geräte' },
    { id: 'barbell', name: 'Langhantel' },
    { id: 'dumbbell', name: 'Kurzhantel' },
    { id: 'kettlebell', name: 'Kettlebell' },
    { id: 'cable-machine', name: 'Kabelzug' },
    { id: 'machine', name: 'Maschine' },
    { id: 'pull-up-bar', name: 'Klimmzugstange' },
    { id: 'dip-station', name: 'Dip-Station' },
    { id: 'bench', name: 'Bank' },
    { id: 'resistance-band', name: 'Widerstandsband' },
    { id: 'medicine-ball', name: 'Medizinball' },
    { id: 'foam-roller', name: 'Faszienrolle' },
    { id: 'yoga-mat', name: 'Yogamatte' }
  ];

  const handleAddMuscleGroup = (groupId: string) => {
    if (!muscleGroups.includes(groupId)) {
      setMuscleGroups([...muscleGroups, groupId]);
    }
  };

  const handleRemoveMuscleGroup = (groupId: string) => {
    setMuscleGroups(muscleGroups.filter(g => g !== groupId));
  };

  const handleAddEquipment = (equipmentId: string) => {
    if (!equipment.includes(equipmentId)) {
      setEquipment([...equipment, equipmentId]);
    }
  };

  const handleRemoveEquipment = (equipmentId: string) => {
    setEquipment(equipment.filter(e => e !== equipmentId));
  };

  const handleSave = () => {
    if (!name.trim()) {
      alert('Bitte geben Sie einen Namen für die Übung ein.');
      return;
    }

    if (muscleGroups.length === 0) {
      alert('Bitte wählen Sie mindestens eine Muskelgruppe aus.');
      return;
    }

    const newExercise: Omit<Exercise, 'id'> = {
      name: name.trim(),
      category,
      muscleGroups,
      equipment: equipment.length > 0 ? equipment : ['none'],
      difficulty
    };

    onSave(newExercise);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 pb-20">
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="px-4 py-3 flex items-center justify-between">
          <button
            onClick={onCancel}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <XMarkIcon className="w-5 h-5 text-gray-700" />
          </button>
          <h1 className="text-lg font-semibold text-gray-900">Neue Übung erstellen</h1>
          <button
            onClick={handleSave}
            className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
          >
            <CheckIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Übungsname *
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            placeholder="z.B. Bankdrücken mit Kurzhanteln"
          />
        </div>

        {/* Kategorie */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Kategorie
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as ExerciseCategory)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
          >
            <option value="strength">Krafttraining</option>
            <option value="cardio">Cardio</option>
            <option value="flexibility">Flexibilität</option>
            <option value="core">Core</option>
          </select>
        </div>

        {/* Schwierigkeit */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Schwierigkeitsgrad
          </label>
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value as ExerciseDifficulty)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
          >
            <option value="beginner">Anfänger</option>
            <option value="intermediate">Fortgeschritten</option>
            <option value="advanced">Experte</option>
          </select>
        </div>

        {/* Muskelgruppen */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Muskelgruppen * (mindestens eine)
          </label>
          
          {/* Ausgewählte Muskelgruppen */}
          <div className="flex flex-wrap gap-2 mb-3">
            {muscleGroups.map(groupId => {
              const group = availableMuscleGroups.find(g => g.id === groupId);
              return (
                <span
                  key={groupId}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm"
                >
                  {group?.name || groupId}
                  <button
                    onClick={() => handleRemoveMuscleGroup(groupId)}
                    className="hover:text-red-900"
                  >
                    <XMarkIcon className="w-3 h-3" />
                  </button>
                </span>
              );
            })}
          </div>

          {/* Verfügbare Muskelgruppen */}
          <div className="grid grid-cols-2 gap-2">
            {availableMuscleGroups.map(group => (
              <button
                key={group.id}
                onClick={() => handleAddMuscleGroup(group.id)}
                disabled={muscleGroups.includes(group.id)}
                className={`px-3 py-2 text-sm rounded-lg transition-colors ${
                  muscleGroups.includes(group.id)
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                }`}
              >
                {group.name}
              </button>
            ))}
          </div>
        </div>

        {/* Equipment */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Benötigte Geräte (optional)
          </label>
          
          {/* Ausgewählte Geräte */}
          <div className="flex flex-wrap gap-2 mb-3">
            {equipment.map(equipmentId => {
              const eq = availableEquipment.find(e => e.id === equipmentId);
              return (
                <span
                  key={equipmentId}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                >
                  {eq?.name || equipmentId}
                  <button
                    onClick={() => handleRemoveEquipment(equipmentId)}
                    className="hover:text-blue-900"
                  >
                    <XMarkIcon className="w-3 h-3" />
                  </button>
                </span>
              );
            })}
          </div>

          {/* Verfügbare Geräte */}
          <div className="grid grid-cols-2 gap-2">
            {availableEquipment.map(eq => (
              <button
                key={eq.id}
                onClick={() => handleAddEquipment(eq.id)}
                disabled={equipment.includes(eq.id)}
                className={`px-3 py-2 text-sm rounded-lg transition-colors ${
                  equipment.includes(eq.id)
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                }`}
              >
                {eq.name}
              </button>
            ))}
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
            Übung erstellen
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomExerciseForm;