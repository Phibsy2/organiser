import React, { useState } from 'react';
import ProgressCharts from '../Training/ProgressCharts';
import useTrainingStore from '../../store/trainingStore';
import useSettingsStore from '../../store/settingsStore';
import useNutritionStore from '../../store/nutritionStore';
import {
  FireIcon,
  TrophyIcon,
  ClockIcon,
  HeartIcon,
  ChartBarIcon,
  CalendarIcon,
  ArrowTrendingUpIcon,
  ScaleIcon
} from '@heroicons/react/24/outline';
import { format, startOfWeek, endOfWeek, eachDayOfInterval, subDays } from 'date-fns';
import { de } from 'date-fns/locale';

const Progress: React.FC = () => {
  const [timeRange, setTimeRange] = useState<'week' | 'month' | 'year'>('week');
  const { trainingGoals, getWeeklyTrainingSessions, sessionHistory } = useTrainingStore();
  const { user } = useSettingsStore();
  const { foodEntries } = useNutritionStore();

  // Calculate streaks
  const calculateStreaks = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    let trainingStreak = 0;
    let nutritionStreak = 0;
    let currentDate = new Date(today);

    // Training streak
    while (true) {
      const dayTrainingSessions = sessionHistory.filter(session => {
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

    // Reset for nutrition streak
    currentDate = new Date(today);
    
    while (true) {
      const dayNutritionEntries = foodEntries.filter(entry => {
        const entryDate = new Date(entry.date);
        entryDate.setHours(0, 0, 0, 0);
        return entryDate.getTime() === currentDate.getTime();
      });
      
      if (dayNutritionEntries.length > 0) {
        nutritionStreak++;
        currentDate.setDate(currentDate.getDate() - 1);
      } else {
        break;
      }
    }

    return { trainingStreak, nutritionStreak };
  };

  const streaks = calculateStreaks();
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

      const trainingSessions = sessionHistory.filter(session => {
        const sessionDate = new Date(session.date);
        return sessionDate >= dayStart && sessionDate <= dayEnd;
      });

      const nutritionEntries = foodEntries.filter(entry => {
        const entryDate = new Date(entry.date);
        return entryDate >= dayStart && entryDate <= dayEnd;
      });

      return {
        date: day,
        training: trainingSessions.length > 0,
        nutrition: nutritionEntries.length > 0,
        trainingCount: trainingSessions.length,
        caloriesLogged: nutritionEntries.reduce((total, entry) => total + entry.nutrition.calories, 0)
      };
    });
  };

  const weekActivity = getWeekActivity();

  // Calculate progress towards goals
  const trainingGoalProgress = (weeklyTrainingSessions / user.goals.weeklyTrainingSessions) * 100;
  const weightProgress = ((user.weight - user.goals.targetWeight) / (92 - user.goals.targetWeight)) * 100;

  // Calculate weekly calories average
  const weeklyCaloriesAvg = weekActivity.reduce((sum, day) => sum + day.caloriesLogged, 0) / 7;
  const calorieGoalProgress = (weeklyCaloriesAvg / user.goals.dailyCalories) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100 pb-20">
      <div className="px-4 py-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Gesamtfortschritt</h1>

        {/* Streak Cards */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-white rounded-xl shadow-sm p-4">
            <div className="flex items-center justify-between mb-2">
              <HeartIcon className="w-6 h-6 text-red-600" />
              <FireIcon className="w-5 h-5 text-orange-500" />
            </div>
            <p className="text-2xl font-bold text-gray-900">{streaks.trainingStreak}</p>
            <p className="text-sm text-gray-600">Tage Training-Streak</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-4">
            <div className="flex items-center justify-between mb-2">
              <ScaleIcon className="w-6 h-6 text-green-600" />
              <FireIcon className="w-5 h-5 text-orange-500" />
            </div>
            <p className="text-2xl font-bold text-gray-900">{streaks.nutritionStreak}</p>
            <p className="text-sm text-gray-600">Tage Ernährungs-Streak</p>
          </div>
        </div>

        {/* Weekly Goals Progress */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <h3 className="font-semibold text-gray-900 mb-4">Wochenziele</h3>
          
          <div className="space-y-4">
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

            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Kalorienziel (Ø)</span>
                <span className="font-medium">{Math.round(weeklyCaloriesAvg)} / {user.goals.dailyCalories} kcal</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${Math.min(calorieGoalProgress, 100)}%` }}
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
                    day.training && day.nutrition
                      ? 'bg-green-500 text-white'
                      : day.training
                      ? 'bg-red-500 text-white'
                      : day.nutrition
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100'
                  }`}
                >
                  {day.training && <HeartIcon className="w-4 h-4" />}
                  {day.nutrition && <ScaleIcon className="w-4 h-4" />}
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {format(day.date, 'd', { locale: de })}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Overview */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <h3 className="font-semibold text-gray-900 mb-4">Statistiken</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Gesamt Training</p>
              <p className="text-2xl font-bold text-gray-900">{sessionHistory.length}</p>
              <p className="text-xs text-gray-500">Sessions</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Ø Kalorien/Tag</p>
              <p className="text-2xl font-bold text-gray-900">{Math.round(weeklyCaloriesAvg)}</p>
              <p className="text-xs text-gray-500">kcal</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Gewichtsveränderung</p>
              <p className="text-2xl font-bold text-gray-900">-{(92 - user.weight).toFixed(1)}</p>
              <p className="text-xs text-gray-500">kg</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Wochenziel</p>
              <p className="text-2xl font-bold text-gray-900">{Math.round((trainingGoalProgress + calorieGoalProgress) / 2)}%</p>
              <p className="text-xs text-gray-500">erreicht</p>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <ProgressCharts />
      </div>
    </div>
  );
};

export default Progress;