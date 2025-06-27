import React, { useState, useEffect, useCallback } from 'react';
import {
  PlayIcon,
  PauseIcon,
  ArrowPathIcon,
  Cog6ToothIcon,
  CheckIcon
} from '@heroicons/react/24/solid';
import { PomodoroSettings } from '../../types';

type TimerState = 'idle' | 'work' | 'shortBreak' | 'longBreak';

const PomodoroTimer: React.FC = () => {
  const [settings] = useState<PomodoroSettings>({
    workDuration: 25,
    shortBreakDuration: 5,
    longBreakDuration: 15,
    sessionsBeforeLongBreak: 4,
    autoStartBreaks: false,
    autoStartPomodoros: false
  });

  const [timerState, setTimerState] = useState<TimerState>('idle');
  const [timeRemaining, setTimeRemaining] = useState(settings.workDuration * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [completedSessions, setCompletedSessions] = useState(0);
  const [showSettings, setShowSettings] = useState(false);

  const getStateDuration = useCallback((state: TimerState): number => {
    switch (state) {
      case 'work':
        return settings.workDuration * 60;
      case 'shortBreak':
        return settings.shortBreakDuration * 60;
      case 'longBreak':
        return settings.longBreakDuration * 60;
      default:
        return settings.workDuration * 60;
    }
  }, [settings]);

  const getStateColor = (state: TimerState): string => {
    switch (state) {
      case 'work':
        return 'bg-red-500';
      case 'shortBreak':
        return 'bg-green-500';
      case 'longBreak':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStateLabel = (state: TimerState): string => {
    switch (state) {
      case 'work':
        return 'Arbeitszeit';
      case 'shortBreak':
        return 'Kurze Pause';
      case 'longBreak':
        return 'Lange Pause';
      default:
        return 'Bereit';
    }
  };

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const startTimer = () => {
    if (timerState === 'idle') {
      setTimerState('work');
      setTimeRemaining(settings.workDuration * 60);
    }
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimerState('idle');
    setTimeRemaining(settings.workDuration * 60);
    setCompletedSessions(0);
  };

  const skipSession = () => {
    setIsRunning(false);
    handleSessionComplete();
  };

  const handleSessionComplete = () => {
    if (timerState === 'work') {
      const newCompletedSessions = completedSessions + 1;
      setCompletedSessions(newCompletedSessions);

      if (newCompletedSessions % settings.sessionsBeforeLongBreak === 0) {
        setTimerState('longBreak');
        setTimeRemaining(settings.longBreakDuration * 60);
      } else {
        setTimerState('shortBreak');
        setTimeRemaining(settings.shortBreakDuration * 60);
      }

      if (settings.autoStartBreaks) {
        setIsRunning(true);
      }
    } else {
      setTimerState('work');
      setTimeRemaining(settings.workDuration * 60);

      if (settings.autoStartPomodoros) {
        setIsRunning(true);
      }
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isRunning && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((time) => {
          if (time <= 1) {
            handleSessionComplete();
            return 0;
          }
          return time - 1;
        });
      }, 1000);
    } else if (timeRemaining === 0) {
      // Play notification sound
      if ('Notification' in window && Notification.permission === 'granted') {
        new Notification('Pomodoro Timer', {
          body: `${getStateLabel(timerState)} abgeschlossen!`,
          icon: '/favicon.ico'
        });
      }
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, timeRemaining, timerState, handleSessionComplete]);

  // Event Listeners für Synchronisation mit StudySession
  useEffect(() => {
    const handleStartPomodoro = () => {
      startTimer();
    };
    
    const handlePausePomodoro = () => {
      pauseTimer();
    };
    
    const handleResumePomodoro = () => {
      if (timerState !== 'idle') {
        setIsRunning(true);
      }
    };
    
    const handleResetPomodoro = () => {
      resetTimer();
    };

    window.addEventListener('startPomodoro', handleStartPomodoro);
    window.addEventListener('pausePomodoro', handlePausePomodoro);
    window.addEventListener('resumePomodoro', handleResumePomodoro);
    window.addEventListener('resetPomodoro', handleResetPomodoro);

    return () => {
      window.removeEventListener('startPomodoro', handleStartPomodoro);
      window.removeEventListener('pausePomodoro', handlePausePomodoro);
      window.removeEventListener('resumePomodoro', handleResumePomodoro);
      window.removeEventListener('resetPomodoro', handleResetPomodoro);
    };
  }, [timerState]);

  const progressPercentage = timerState !== 'idle' 
    ? ((getStateDuration(timerState) - timeRemaining) / getStateDuration(timerState)) * 100
    : 0;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Pomodoro Timer</h2>
        <button
          onClick={() => setShowSettings(!showSettings)}
          className="p-2 text-gray-600 hover:text-gray-800 transition-colors"
        >
          <Cog6ToothIcon className="w-5 h-5" />
        </button>
      </div>

      {/* Timer Display */}
      <div className="text-center mb-6">
        <div className={`inline-block px-4 py-1 rounded-full text-sm font-medium text-white mb-4 ${getStateColor(timerState)}`}>
          {getStateLabel(timerState)}
        </div>
        <div className="text-6xl font-bold text-gray-900 mb-2">
          {formatTime(timeRemaining)}
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
          <div
            className={`h-2 rounded-full transition-all duration-300 ${getStateColor(timerState)}`}
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {/* Session Counter */}
      <div className="flex justify-center items-center mb-6">
        <div className="flex space-x-2">
          {[...Array(settings.sessionsBeforeLongBreak)].map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                index < (completedSessions % settings.sessionsBeforeLongBreak)
                  ? 'bg-green-500'
                  : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
        <span className="ml-3 text-sm text-gray-600">
          {completedSessions} Sitzungen abgeschlossen
        </span>
      </div>

      {/* Control Buttons */}
      <div className="flex justify-center space-x-3">
        {!isRunning ? (
          <button
            onClick={startTimer}
            className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-lg flex items-center transition-colors duration-200"
          >
            <PlayIcon className="w-5 h-5 mr-2" />
            {timerState === 'idle' ? 'Start' : 'Fortsetzen'}
          </button>
        ) : (
          <button
            onClick={pauseTimer}
            className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-6 rounded-lg flex items-center transition-colors duration-200"
          >
            <PauseIcon className="w-5 h-5 mr-2" />
            Pause
          </button>
        )}
        
        {timerState !== 'idle' && (
          <>
            <button
              onClick={skipSession}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg flex items-center transition-colors duration-200"
            >
              <CheckIcon className="w-5 h-5" />
            </button>
            <button
              onClick={resetTimer}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg flex items-center transition-colors duration-200"
            >
              <ArrowPathIcon className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {/* Settings Panel (simplified for now) */}
      {showSettings && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            Arbeitszeit: {settings.workDuration} Min | 
            Kurze Pause: {settings.shortBreakDuration} Min | 
            Lange Pause: {settings.longBreakDuration} Min
          </p>
        </div>
      )}
    </div>
  );
};

export default PomodoroTimer;