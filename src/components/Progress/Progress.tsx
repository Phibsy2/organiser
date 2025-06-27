import React, { useState } from 'react';
import ProgressCharts from '../Training/ProgressCharts';
import useStudyStore from '../../store/studyStore';
import useTrainingStore from '../../store/trainingStore';
import useSettingsStore from '../../store/settingsStore';
import {
  FireIcon,
  TrophyIcon,
  ClockIcon,
  BookOpenIcon,
  HeartIcon,
  ChartBarIcon,
  CalendarIcon,
  ArrowTrendingUpIcon
} from '@heroicons/react/24/outline';
import { format, startOfWeek, endOfWeek, eachDayOfInterval, subDays } from 'date-fns';
import { de } from 'date-fns/locale';

const Progress: React.FC = () => {
  const [timeRange, setTimeRange] = useState<'week' | 'month' | 'year'>('week');
  const { modules, sessionHistory, getWeeklyStudyHours } = useStudyStore();
  const { weeklyStats, trainingGoals, getWeeklyTrainingSessions } = useTrainingStore();
  const { user } = useSettingsStore();

  // Calculate streaks
  const calculateStreaks = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    let studyStreak = 0;
    let trainingStreak = 0;
    let currentDate = new Date(today);

    // Study streak
    while (true) {
      const dayStudySessions = sessionHistory.filter(session => {
        const sessionDate = new Date(session.startTime);
        sessionDate.setHours(0, 0, 0, 0);
        return sessionDate.getTime() === currentDate.getTime();
      });
      
      if (dayStudySessions.length > 0) {
        studyStreak++;
        currentDate.setDate(currentDate.getDate() - 1);
      } else {
        break;
      }
    }

    // Reset for training streak
    currentDate = new Date(today);
    const trainingSessions = useTrainingStore.getState().sessionHistory;
    
    while (true) {
      const dayTrainingSessions = trainingSessions.filter(session => {
        const sessionDate = new Date(session.date);
        sessionDate.setHours(0, 0, 0, 0);
        return sessionDate.getTime() === currentDate.getTime();
      });
      
      if (dayTrainingSessions.length > 0) {
        trainingStreak++;
        currentDate.setDate(currentDate.getDate() - 1);
      } else {
        break;
      }
    }

    return { studyStreak, trainingStreak };
  };

  const streaks = calculateStreaks();
  const weeklyStudyHours = getWeeklyStudyHours();
  const weeklyTrainingSessions = getWeeklyTrainingSessions();

  // Calculate weekly activity for heatmap
  const getWeekActivity = () => {
    const start = startOfWeek(new Date(), { locale: de });
    const end = endOfWeek(new Date(), { locale: de });
    const days = eachDayOfInterval({ start, end });

    return days.map(day => {
      const dayStart = new Date(day);
      dayStart.setHours(0, 0, 0, 0);
      const dayEnd = new Date(day);
      dayEnd.setHours(23, 59, 59, 999);

      const studySessions = sessionHistory.filter(session => {
        const sessionDate = new Date(session.startTime);
        return sessionDate >= dayStart && sessionDate <= dayEnd;
      });

      const trainingSessions = useTrainingStore.getState().sessionHistory.filter(session => {
        const sessionDate = new Date(session.date);
        return sessionDate >= dayStart && sessionDate <= dayEnd;
      });

      return {
        date: day,
        study: studySessions.length > 0,
        training: trainingSessions.length > 0,
        studyHours: studySessions.reduce((total, session) => total + (session.duration || 0) / 60, 0),
        trainingCount: trainingSessions.length
      };
    });
  };

  const weekActivity = getWeekActivity();

  // Calculate progress towards goals
  const studyGoalProgress = (weeklyStudyHours / user.goals.weeklyStudyHours) * 100;
  const trainingGoalProgress = (weeklyTrainingSessions / user.goals.weeklyTrainingSessions) * 100;
  const weightProgress = ((user.weight - user.goals.targetWeight) / (92 - user.goals.targetWeight)) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100 pb-20">
      <div className="px-4 py-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Gesamtfortschritt</h1>

        {/* Streak Cards */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-white rounded-xl shadow-sm p-4">
            <div className="flex items-center justify-between mb-2">
              <BookOpenIcon className="w-6 h-6 text-purple-600" />
              <FireIcon className="w-5 h-5 text-orange-500" />
            </div>
            <p className="text-2xl font-bold text-gray-900">{streaks.studyStreak}</p>
            <p className="text-sm text-gray-600">Tage Lern-Streak</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-4">
            <div className="flex items-center justify-between mb-2">
              <HeartIcon className="w-6 h-6 text-red-600" />
              <FireIcon className="w-5 h-5 text-orange-500" />
            </div>
            <p className="text-2xl font-bold text-gray-900">{streaks.trainingStreak}</p>
            <p className="text-sm text-gray-600">Tage Training-Streak</p>
          </div>
        </div>

        {/* Weekly Goals Progress */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <h3 className="font-semibold text-gray-900 mb-4">Wochenziele</h3>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Lernstunden</span>
                <span className="font-medium">{weeklyStudyHours.toFixed(1)} / {user.goals.weeklyStudyHours}h</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${Math.min(studyGoalProgress, 100)}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Trainingseinheiten</span>
                <span className="font-medium">{weeklyTrainingSessions} / {user.goals.weeklyTrainingSessions}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-red-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${Math.min(trainingGoalProgress, 100)}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Gewichtsziel</span>
                <span className="font-medium">{user.weight}kg → {user.goals.targetWeight}kg</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${Math.min(100 - weightProgress, 100)}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Activity Heatmap */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <h3 className="font-semibold text-gray-900 mb-4">Wochenaktivität</h3>
          <div className="grid grid-cols-7 gap-2">
            {weekActivity.map((day, index) => (
              <div key={index} className="text-center">
                <p className="text-xs text-gray-600 mb-1">
                  {format(day.date, 'EEE', { locale: de })}
                </p>
                <div
                  className={`h-12 rounded-lg flex flex-col items-center justify-center ${
                    day.study && day.training
                      ? 'bg-green-500 text-white'
                      : day.study
                      ? 'bg-purple-500 text-white'
                      : day.training
                      ? 'bg-red-500 text-white'
                      : 'bg-gray-100'
                  }`}
                >
                  {day.study && <BookOpenIcon className="w-4 h-4" />}
                  {day.training && <HeartIcon className="w-4 h-4" />}
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {format(day.date, 'd', { locale: de })}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Module Progress */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <h3 className="font-semibold text-gray-900 mb-4">Modulfortschritt</h3>
          <div className="space-y-3">
            {modules.map(module => {
              const progress = (module.completedHours / module.totalHours) * 100;
              return (
                <div key={module.id}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700">{module.name}</span>
                    <span className="text-gray-600">{progress.toFixed(0)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Training Goals */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <h3 className="font-semibold text-gray-900 mb-4">Trainingsziele</h3>
          <div className="space-y-3">
            {trainingGoals.map(goal => {
              const progress = goal.type === 'weight' 
                ? ((goal.current - goal.target) / (92 - goal.target)) * 100
                : (goal.current / goal.target) * 100;
              
              return (
                <div key={goal.id} className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-700">
                      {goal.type === 'weight' ? 'Gewicht' : 'Körperfett'}
                    </p>
                    <p className="text-xs text-gray-600">
                      {goal.current}{goal.unit} → {goal.target}{goal.unit}
                    </p>
                  </div>
                  <div className="flex items-center">
                    {goal.type === 'weight' && progress > 0 && (
                      <ArrowTrendingUpIcon className="w-4 h-4 text-green-600 mr-2" />
                    )}
                    <span className={`text-sm font-medium ${
                      progress >= 100 ? 'text-green-600' : 'text-gray-600'
                    }`}>
                      {Math.abs(100 - progress).toFixed(0)}%
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Detailed Charts */}
        <ProgressCharts />
      </div>
    </div>
  );
};

export default Progress;