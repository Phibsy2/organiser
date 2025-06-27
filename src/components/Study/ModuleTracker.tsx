import React, { useState, useEffect } from 'react';
import { StudyModule } from '../../types';
import StudySession from './StudySession';
import ModuleEditor from './ModuleEditor';
import useStudyStore from '../../store/studyStore';
import {
  BookOpenIcon,
  ClockIcon,
  CalendarIcon,
  ChartBarIcon,
  PlayIcon,
  PlusIcon,
  PencilIcon,
  TrashIcon
} from '@heroicons/react/24/outline';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

interface ModuleCardProps {
  module: StudyModule;
  onStartStudying: (moduleId: string) => void;
  onEdit: (module: StudyModule) => void;
  onDelete: (moduleId: string) => void;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ module, onStartStudying, onEdit, onDelete }) => {
  const progressPercentage = (module.completedHours / module.totalHours) * 100;
  const weeklyProgress = (module.thisWeekCompleted / module.weeklyGoal) * 100;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-4">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="font-semibold text-lg text-gray-900">{module.name}</h3>
          <p className="text-sm text-gray-600 mt-1">{module.currentTopic}</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
            {module.ects} ECTS
          </span>
          <button
            onClick={() => onEdit(module)}
            className="p-1 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded transition-colors"
          >
            <PencilIcon className="w-4 h-4" />
          </button>
          <button
            onClick={() => onDelete(module.id)}
            className="p-1 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
          >
            <TrashIcon className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between text-sm text-gray-600 mb-1">
          <span>Gesamtfortschritt</span>
          <span>{progressPercentage.toFixed(0)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-purple-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>{module.completedHours}h abgeschlossen</span>
          <span>{module.totalHours}h gesamt</span>
        </div>
      </div>

      {/* Weekly Progress */}
      <div className="mb-4">
        <div className="flex justify-between text-sm text-gray-600 mb-1">
          <span>Wochenziel</span>
          <span>{module.thisWeekCompleted}/{module.weeklyGoal}h</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all duration-300 ${
              weeklyProgress >= 100 ? 'bg-green-600' : 'bg-orange-600'
            }`}
            style={{ width: `${Math.min(weeklyProgress, 100)}%` }}
          />
        </div>
      </div>

      {/* Module Info */}
      <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
        <div className="flex items-center text-gray-600">
          <CalendarIcon className="w-4 h-4 mr-1" />
          <span>Prüfung: {module.examType === 'klausur' ? 'Klausur' : 'Hausarbeit'}</span>
        </div>
        {module.examDate && (
          <div className="flex items-center text-gray-600">
            <ClockIcon className="w-4 h-4 mr-1" />
            <span>{new Date(module.examDate).toLocaleDateString('de-DE')}</span>
          </div>
        )}
      </div>

      {/* Action Button */}
      <button
        onClick={() => onStartStudying(module.id)}
        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg flex items-center justify-center transition-colors duration-200"
      >
        <PlayIcon className="w-5 h-5 mr-2" />
        Lerneinheit starten
      </button>
    </div>
  );
};

const ModuleTracker: React.FC = () => {
  const { modules, setModules, updateModule } = useStudyStore();
  const [activeSession, setActiveSession] = useState<StudyModule | null>(null);
  const [editingModule, setEditingModule] = useState<StudyModule | null>(null);
  const [showModuleEditor, setShowModuleEditor] = useState(false);

  const startStudySession = (moduleId: string) => {
    const module = modules.find(m => m.id === moduleId);
    if (module) {
      setActiveSession(module);
    }
  };

  const handleSaveModule = (module: StudyModule) => {
    if (editingModule) {
      // Update existing module
      updateModule(module.id, module);
    } else {
      // Add new module
      setModules([...modules, module]);
    }
    setEditingModule(null);
    setShowModuleEditor(false);
  };

  const handleEditModule = (module: StudyModule) => {
    setEditingModule(module);
    setShowModuleEditor(true);
  };

  const handleDeleteModule = (moduleId: string) => {
    if (window.confirm('Möchten Sie dieses Modul wirklich löschen?')) {
      setModules(modules.filter(m => m.id !== moduleId));
    }
  };

  const handleNewModule = () => {
    setEditingModule(null);
    setShowModuleEditor(true);
  };

  const totalWeeklyGoal = modules.reduce((sum, m) => sum + m.weeklyGoal, 0);
  const totalWeeklyCompleted = modules.reduce((sum, m) => sum + m.thisWeekCompleted, 0);

  if (activeSession) {
    return (
      <StudySession
        module={activeSession}
        onClose={() => setActiveSession(null)}
      />
    );
  }

  return (
    <div className="px-4 py-6">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-900">Meine Module</h2>
          <button
            onClick={handleNewModule}
            className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg flex items-center transition-colors duration-200"
          >
            <PlusIcon className="w-5 h-5 mr-2" />
            Neues Modul
          </button>
        </div>
        {modules.length > 0 && (
          <div className="bg-blue-50 rounded-lg p-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-blue-800 font-medium">Wochenziel Gesamt</span>
              <span className="text-sm text-blue-800">
                {totalWeeklyCompleted}/{totalWeeklyGoal}h ({totalWeeklyGoal > 0 ? ((totalWeeklyCompleted / totalWeeklyGoal) * 100).toFixed(0) : 0}%)
              </span>
            </div>
          </div>
        )}
      </div>

      {modules.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
          <BookOpenIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Keine Module vorhanden</h3>
          <p className="text-gray-600 mb-4">Erstellen Sie Ihr erstes Modul, um mit dem Lernen zu beginnen.</p>
          <button
            onClick={handleNewModule}
            className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg inline-flex items-center transition-colors duration-200"
          >
            <PlusIcon className="w-5 h-5 mr-2" />
            Erstes Modul anlegen
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {modules.map(module => (
            <ModuleCard
              key={module.id}
              module={module}
              onStartStudying={startStudySession}
              onEdit={handleEditModule}
              onDelete={handleDeleteModule}
            />
          ))}
        </div>
      )}

      {showModuleEditor && (
        <ModuleEditor
          module={editingModule || undefined}
          onSave={handleSaveModule}
          onClose={() => {
            setShowModuleEditor(false);
            setEditingModule(null);
          }}
        />
      )}
    </div>
  );
};

export default ModuleTracker;