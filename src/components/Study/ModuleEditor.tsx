import React, { useState } from 'react';
import { StudyModule, ModuleId, ExamType } from '../../types';
import {
  XMarkIcon,
  PlusIcon,
  TrashIcon,
  CheckIcon
} from '@heroicons/react/24/outline';
import { v4 as uuidv4 } from 'uuid';

interface ModuleEditorProps {
  module?: StudyModule;
  onSave: (module: StudyModule) => void;
  onClose: () => void;
}

const ModuleEditor: React.FC<ModuleEditorProps> = ({ module, onSave, onClose }) => {
  const generateModuleId = (): string => {
    // Generate a custom module ID that can be used as ModuleId type
    return `custom_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  };

  const [formData, setFormData] = useState<Partial<StudyModule>>({
    id: module?.id || generateModuleId(),
    name: module?.name || '',
    ects: module?.ects || 10,
    totalHours: module?.totalHours || 300,
    completedHours: module?.completedHours || 0,
    currentTopic: module?.currentTopic || '',
    examType: module?.examType || 'klausur',
    examDate: module?.examDate,
    weeklyGoal: module?.weeklyGoal || 10,
    thisWeekCompleted: module?.thisWeekCompleted || 0,
    topics: module?.topics || []
  });

  const [newTopic, setNewTopic] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.ects && formData.totalHours) {
      onSave({
        ...formData,
        id: formData.id as string as ModuleId, // Type assertion for custom module IDs
        name: formData.name,
        ects: formData.ects,
        totalHours: formData.totalHours,
        completedHours: formData.completedHours || 0,
        currentTopic: formData.currentTopic || '',
        examType: formData.examType as ExamType,
        weeklyGoal: formData.weeklyGoal || 10,
        thisWeekCompleted: formData.thisWeekCompleted || 0,
        topics: formData.topics || []
      } as StudyModule);
    }
  };

  const addTopic = () => {
    if (newTopic.trim()) {
      const topic = {
        id: `topic-${uuidv4()}`,
        name: newTopic.trim(),
        description: '',
        estimatedHours: 0,
        completedHours: 0,
        status: 'pending' as const
      };
      setFormData({
        ...formData,
        topics: [...(formData.topics || []), topic]
      });
      setNewTopic('');
    }
  };

  const removeTopic = (topicId: string) => {
    setFormData({
      ...formData,
      topics: formData.topics?.filter(t => t.id !== topicId) || []
    });
  };

  const updateTopic = (topicId: string, newName: string) => {
    setFormData({
      ...formData,
      topics: formData.topics?.map(t => 
        t.id === topicId ? { ...t, name: newName } : t
      ) || []
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-900">
            {module ? 'Modul bearbeiten' : 'Neues Modul anlegen'}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Basic Information */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Grundinformationen</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Modulname *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="z.B. Strafrecht AT"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  ECTS-Punkte *
                </label>
                <input
                  type="number"
                  value={formData.ects}
                  onChange={(e) => setFormData({ ...formData, ects: parseInt(e.target.value) || 0 })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  min="1"
                  max="30"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Gesamtstunden *
                </label>
                <input
                  type="number"
                  value={formData.totalHours}
                  onChange={(e) => setFormData({ ...formData, totalHours: parseInt(e.target.value) || 0 })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  min="1"
                  placeholder="z.B. 300"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Wochenziel (Stunden)
                </label>
                <input
                  type="number"
                  value={formData.weeklyGoal}
                  onChange={(e) => setFormData({ ...formData, weeklyGoal: parseInt(e.target.value) || 0 })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  min="1"
                  max="40"
                  placeholder="z.B. 10"
                />
              </div>
            </div>
          </div>

          {/* Current Status */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Aktueller Status</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Aktuelles Thema
                </label>
                {formData.topics && formData.topics.length > 0 ? (
                  <select
                    value={formData.currentTopic}
                    onChange={(e) => setFormData({ ...formData, currentTopic: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  >
                    <option value="">Kein aktuelles Thema</option>
                    {formData.topics.map((topic) => (
                      <option key={topic.id} value={topic.name}>
                        {topic.name}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type="text"
                    value={formData.currentTopic}
                    onChange={(e) => setFormData({ ...formData, currentTopic: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Erst Themen hinzufügen oder frei eingeben"
                  />
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Bereits gelernte Stunden
                </label>
                <input
                  type="number"
                  value={formData.completedHours}
                  onChange={(e) => setFormData({ ...formData, completedHours: parseFloat(e.target.value) || 0 })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  min="0"
                  step="0.5"
                  placeholder="0"
                />
              </div>
            </div>
          </div>

          {/* Exam Information */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Prüfungsinformationen</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Prüfungsform
                </label>
                <select
                  value={formData.examType}
                  onChange={(e) => setFormData({ ...formData, examType: e.target.value as ExamType })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                >
                  <option value="klausur">Klausur</option>
                  <option value="hausarbeit">Hausarbeit</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Prüfungsdatum (optional)
                </label>
                <input
                  type="date"
                  value={formData.examDate ? new Date(formData.examDate).toISOString().split('T')[0] : ''}
                  onChange={(e) => setFormData({ 
                    ...formData, 
                    examDate: e.target.value ? new Date(e.target.value) : undefined 
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
            </div>
          </div>

          {/* Topics */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Lernthemen</h3>
            <p className="text-sm text-gray-600 mb-4">
              Fügen Sie Themen hinzu, die Sie in diesem Modul lernen möchten. 
              Diese erscheinen dann beim Start einer Lerneinheit zur Auswahl.
            </p>
            
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                value={newTopic}
                onChange={(e) => setNewTopic(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTopic())}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                placeholder="Neues Thema hinzufügen (z.B. Willenserklärung)"
              />
              <button
                type="button"
                onClick={addTopic}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                <PlusIcon className="w-5 h-5" />
              </button>
            </div>

            {formData.topics && formData.topics.length > 0 && (
              <div className="space-y-2">
                {formData.topics.map((topic) => (
                  <div
                    key={topic.id}
                    className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg group"
                  >
                    <input
                      type="text"
                      value={topic.name}
                      onChange={(e) => updateTopic(topic.id, e.target.value)}
                      className="flex-1 px-2 py-1 bg-transparent border-b border-transparent hover:border-gray-300 focus:border-purple-500 focus:outline-none transition-colors"
                      placeholder="Thema name"
                    />
                    <button
                      type="button"
                      onClick={() => removeTopic(topic.id)}
                      className="p-1 text-red-600 hover:bg-red-50 rounded transition-colors opacity-0 group-hover:opacity-100"
                    >
                      <TrashIcon className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Submit Buttons */}
          <div className="flex justify-end space-x-3 pt-6 border-t">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Abbrechen
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center"
            >
              <CheckIcon className="w-5 h-5 mr-2" />
              {module ? 'Speichern' : 'Modul anlegen'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModuleEditor;