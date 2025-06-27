import React, { useState, useEffect } from 'react';
import { StudyModule } from '../../types';
import useStudyStore from '../../store/studyStore';
import useTimer from '../../hooks/useTimer';
import {
  PlayIcon,
  PauseIcon,
  StopIcon,
  ClockIcon,
  BookOpenIcon,
  CheckIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/solid';

interface StudySessionProps {
  module: StudyModule;
  onClose: () => void;
}

const StudySession: React.FC<StudySessionProps> = ({ module, onClose }) => {
  const [selectedTopic, setSelectedTopic] = useState('');
  const [notes, setNotes] = useState('');
  const [sessionStarted, setSessionStarted] = useState(false);
  
  const { 
    currentSession,
    startStudySession, 
    endStudySession, 
    pauseStudySession, 
    resumeStudySession,
    updateSessionNotes 
  } = useStudyStore();

  const {
    time,
    isRunning,
    isPaused,
    start: startTimer,
    pause: pauseTimer,
    resume: resumeTimer,
    reset: resetTimer
  } = useTimer({
    initialTime: 0,
    countdown: false,
    interval: 1000
  });

  useEffect(() => {
    if (sessionStarted && !currentSession) {
      startStudySession(module.id, selectedTopic || module.currentTopic);
      startTimer();
    }
  }, [sessionStarted, currentSession, module.id, selectedTopic, module.currentTopic, startStudySession, startTimer]);

  useEffect(() => {
    if (currentSession && notes !== currentSession.notes) {
      updateSessionNotes(notes);
    }
  }, [notes, currentSession, updateSessionNotes]);

  const handleStartSession = () => {
    if (!selectedTopic) {
      setSelectedTopic(module.currentTopic);
    }
    setSessionStarted(true);
    // Pomodoro Timer Event auslösen
    window.dispatchEvent(new CustomEvent('startPomodoro'));
  };

  const handlePauseResume = () => {
    if (isPaused) {
      resumeStudySession();
      resumeTimer();
      window.dispatchEvent(new CustomEvent('resumePomodoro'));
    } else {
      pauseStudySession();
      pauseTimer();
      window.dispatchEvent(new CustomEvent('pausePomodoro'));
    }
  };

  const handleEndSession = () => {
    if (currentSession) {
      endStudySession(notes);
      resetTimer();
      window.dispatchEvent(new CustomEvent('resetPomodoro'));
      onClose();
    }
  };

  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  };

  if (!sessionStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 pb-20">
        <div className="px-4 py-6">
          <button
            onClick={onClose}
            className="mb-4 flex items-center text-gray-600 hover:text-gray-800"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Zurück
          </button>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{module.name}</h2>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Thema für diese Lerneinheit
              </label>
              <select
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              >
                <option value="">
                  {module.currentTopic ? `Aktuelles Thema: ${module.currentTopic}` : 'Thema wählen'}
                </option>
                {module.topics && module.topics.length > 0 ? (
                  <>
                    <optgroup label="Modulthemen">
                      {module.topics.map((topic) => (
                        <option key={topic.id} value={topic.name}>
                          {topic.name}
                        </option>
                      ))}
                    </optgroup>
                  </>
                ) : (
                  <>
                    <optgroup label="Allgemeine Themen">
                      <option value="Einführung">Einführung</option>
                      <option value="Übungen">Übungen</option>
                      <option value="Wiederholung">Wiederholung</option>
                      <option value="Klausurvorbereitung">Klausurvorbereitung</option>
                    </optgroup>
                  </>
                )}
                <optgroup label="Sonstiges">
                  <option value="Freies Lernen">Freies Lernen</option>
                </optgroup>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Notizen (optional)
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                rows={3}
                placeholder="Was möchtest du heute lernen? Diese Notizen werden gespeichert."
              />
            </div>

            <div className="bg-purple-50 rounded-lg p-4 mb-6">
              <h3 className="font-medium text-purple-900 mb-2">Tipps für effektives Lernen:</h3>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• Nutze die Pomodoro-Technik (25 Min lernen, 5 Min Pause)</li>
                <li>• Mache dir aktiv Notizen während des Lernens</li>
                <li>• Wiederhole das Gelernte am Ende der Session</li>
                <li>• Formuliere eigene Beispiele zu den Konzepten</li>
              </ul>
            </div>

            <button
              onClick={handleStartSession}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center transition-colors duration-200"
            >
              <PlayIcon className="w-5 h-5 mr-2" />
              Lerneinheit starten
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 pb-20">
      <div className="px-4 py-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{module.name}</h2>
              <p className="text-gray-600 mt-1">{selectedTopic || module.currentTopic}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Lernzeit</p>
              <p className="text-3xl font-bold text-purple-600">{formatTime(time)}</p>
            </div>
          </div>

          {/* Session Info */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="flex items-center text-gray-600">
                <BookOpenIcon className="w-5 h-5 mr-2" />
                <span className="text-sm">Modul-Fortschritt</span>
              </div>
              <p className="text-lg font-semibold mt-1">
                {((module.completedHours / module.totalHours) * 100).toFixed(0)}%
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="flex items-center text-gray-600">
                <ClockIcon className="w-5 h-5 mr-2" />
                <span className="text-sm">Heute gelernt</span>
              </div>
              <p className="text-lg font-semibold mt-1">
                {Math.floor(time / 60)} Min
              </p>
            </div>
          </div>

          {/* Notes Section */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Notizen zu dieser Session
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              rows={6}
              placeholder="Wichtige Punkte, Fragen, Erkenntnisse..."
            />
          </div>

          {/* Control Buttons */}
          <div className="flex space-x-3">
            <button
              onClick={handlePauseResume}
              className={`flex-1 font-medium py-3 px-4 rounded-lg flex items-center justify-center transition-colors duration-200 ${
                isPaused
                  ? 'bg-green-600 hover:bg-green-700 text-white'
                  : 'bg-yellow-600 hover:bg-yellow-700 text-white'
              }`}
            >
              {isPaused ? (
                <>
                  <PlayIcon className="w-5 h-5 mr-2" />
                  Fortsetzen
                </>
              ) : (
                <>
                  <PauseIcon className="w-5 h-5 mr-2" />
                  Pausieren
                </>
              )}
            </button>
            
            <button
              onClick={handleEndSession}
              className="flex-1 bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center transition-colors duration-200"
            >
              <StopIcon className="w-5 h-5 mr-2" />
              Beenden
            </button>
          </div>

          {/* Study Tips */}
          <div className="mt-6 bg-purple-50 rounded-lg p-4">
            <h4 className="font-medium text-purple-900 mb-2">Aktuelle Lernphase:</h4>
            <p className="text-sm text-purple-700">
              {time < 1500 ? 'Konzentriere dich voll auf das Thema' :
               time < 3000 ? 'Zeit für eine kurze Pause?' :
               'Großartig! Du lernst schon über 50 Minuten!'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudySession;