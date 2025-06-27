import React, { useState } from 'react';
import useStudyStore from '../../store/studyStore';
import {
  ClockIcon,
  DocumentTextIcon,
  CalendarIcon,
  BookOpenIcon,
  TrashIcon
} from '@heroicons/react/24/outline';

const SessionHistory: React.FC = () => {
  const { sessionHistory, modules, deleteSession } = useStudyStore();
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null);

  const getModuleName = (moduleId: string) => {
    const module = modules.find(m => m.id === moduleId);
    return module?.name || 'Unbekanntes Modul';
  };

  const formatDuration = (minutes: number): string => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours > 0) {
      return `${hours}h ${mins}min`;
    }
    return `${mins} min`;
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

  const sortedSessions = [...sessionHistory].sort((a, b) => 
    new Date(b.startTime).getTime() - new Date(a.startTime).getTime()
  );

  const handleDeleteSession = (sessionId: string) => {
    deleteSession(sessionId);
    setShowDeleteConfirm(null);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mt-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Lernverlauf</h3>
      
      {sortedSessions.length === 0 ? (
        <div className="text-center py-8">
          <BookOpenIcon className="w-12 h-12 text-gray-400 mx-auto mb-3" />
          <p className="text-gray-600">Noch keine abgeschlossenen Lerneinheiten</p>
        </div>
      ) : (
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {sortedSessions.map((session) => (
            <div
              key={session.id}
              className="border-l-4 border-purple-500 pl-4 py-3 hover:bg-gray-50 transition-colors"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-gray-900">
                        {getModuleName(session.moduleId)}
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">{session.topicId}</p>
                    </div>
                    <button
                      onClick={() => setShowDeleteConfirm(session.id)}
                      className="ml-2 p-1 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                      title="Session löschen"
                    >
                      <TrashIcon className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                    <div className="flex items-center">
                      <CalendarIcon className="w-4 h-4 mr-1" />
                      {formatDate(session.startTime)}
                    </div>
                    <div className="flex items-center">
                      <ClockIcon className="w-4 h-4 mr-1" />
                      {session.duration ? formatDuration(session.duration) : 'Keine Dauer'}
                    </div>
                  </div>
                  
                  {session.notes && (
                    <div className="mt-3 p-3 bg-purple-50 rounded-lg">
                      <div className="flex items-start">
                        <DocumentTextIcon className="w-4 h-4 text-purple-600 mr-2 mt-0.5" />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-purple-900 mb-1">Notizen:</p>
                          <p className="text-sm text-purple-700 whitespace-pre-wrap">{session.notes}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                {session.pomodoroCompleted > 0 && (
                  <div className="ml-4 text-center">
                    <div className="bg-red-100 text-red-800 rounded-full w-12 h-12 flex items-center justify-center">
                      <span className="font-semibold">{session.pomodoroCompleted}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Pomodoros</p>
                  </div>
                )}
              </div>
              
              {/* Delete Confirmation Dialog */}
              {showDeleteConfirm === session.id && (
                <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm text-red-800 mb-2">
                    Möchten Sie diese Lerneinheit wirklich löschen? Die Lernzeit wird von Ihrem Fortschritt abgezogen.
                  </p>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleDeleteSession(session.id)}
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
          ))}
        </div>
      )}
    </div>
  );
};

export default SessionHistory;