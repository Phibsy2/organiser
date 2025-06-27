import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { de } from 'date-fns/locale';
import useNutritionStore from '../../store/nutritionStore';
import FoodSearch from './FoodSearch';
import CalorieGoalCalculator from './CalorieGoalCalculator';
import { Food, MealType, FoodEntry } from '../../types/nutrition';
import {
  PlusIcon,
  TrashIcon,
  ArrowPathIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  FireIcon,
  BeakerIcon,
  CakeIcon,
  SparklesIcon,
  CalculatorIcon
} from '@heroicons/react/24/outline';

const NutritionDashboard: React.FC = () => {
  const {
    getDailyNutrition,
    logFood,
    deleteFoodEntry,
    copyMeal,
    nutritionGoals,
    getWeeklyAverage
  } = useNutritionStore();

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showFoodSearch, setShowFoodSearch] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState<MealType>('breakfast');
  const [showCopyMenu, setShowCopyMenu] = useState<MealType | null>(null);
  const [showCalorieCalculator, setShowCalorieCalculator] = useState(false);

  const dateStr = format(selectedDate, 'yyyy-MM-dd');
  const dailyNutrition = getDailyNutrition(dateStr);
  const weeklyAverage = getWeeklyAverage();

  const handleAddFood = (food: Food, quantity: number) => {
    const factor = quantity / 100;
    const nutrition = {
      calories: Math.round(food.nutritionPer100g.calories * factor),
      protein: Math.round(food.nutritionPer100g.protein * factor * 10) / 10,
      carbs: Math.round(food.nutritionPer100g.carbs * factor * 10) / 10,
      fat: Math.round(food.nutritionPer100g.fat * factor * 10) / 10,
      fiber: food.nutritionPer100g.fiber ? Math.round(food.nutritionPer100g.fiber * factor * 10) / 10 : undefined,
      sugar: food.nutritionPer100g.sugar ? Math.round(food.nutritionPer100g.sugar * factor * 10) / 10 : undefined,
      sodium: food.nutritionPer100g.sodium ? Math.round(food.nutritionPer100g.sodium * factor) : undefined
    };

    logFood({
      foodId: food.id,
      foodName: food.name,
      date: dateStr,
      meal: selectedMeal,
      quantity,
      nutrition
    });

    setShowFoodSearch(false);
  };

  const handleCopyMeal = (fromMeal: MealType, toDate: string) => {
    copyMeal(dateStr, fromMeal, toDate, fromMeal);
    setShowCopyMenu(null);
  };

  const getMealIcon = (meal: MealType) => {
    switch (meal) {
      case 'breakfast':
        return '🌅';
      case 'lunch':
        return '🌞';
      case 'dinner':
        return '🌙';
      case 'snack':
        return '🍿';
    }
  };

  const getMealName = (meal: MealType) => {
    switch (meal) {
      case 'breakfast':
        return 'Frühstück';
      case 'lunch':
        return 'Mittagessen';
      case 'dinner':
        return 'Abendessen';
      case 'snack':
        return 'Snacks';
    }
  };

  const getMealCalories = (meal: MealType) => {
    return dailyNutrition.meals[meal].reduce((sum, entry) => sum + entry.nutrition.calories, 0);
  };

  const getProgressBarColor = (consumed: number, target: number) => {
    const percentage = (consumed / target) * 100;
    if (percentage < 90) return 'bg-green-500';
    if (percentage < 110) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 pb-20">
      <div className="px-4 py-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Ernährung</h1>

        {/* Date Navigation */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setSelectedDate(new Date(selectedDate.getTime() - 24 * 60 * 60 * 1000))}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </button>
            <div className="text-center">
              <h2 className="font-semibold text-lg">
                {format(selectedDate, 'EEEE', { locale: de })}
              </h2>
              <p className="text-sm text-gray-600">
                {format(selectedDate, 'd. MMMM yyyy', { locale: de })}
              </p>
            </div>
            <button
              onClick={() => setSelectedDate(new Date(selectedDate.getTime() + 24 * 60 * 60 * 1000))}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              disabled={selectedDate >= new Date()}
            >
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Daily Summary */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-gray-900">Tagesübersicht</h3>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowCalorieCalculator(true)}
                className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                title="Kalorienziel anpassen"
              >
                <CalculatorIcon className="w-5 h-5" />
              </button>
              <div className="text-right">
                <p className="text-2xl font-bold text-gray-900">
                  {dailyNutrition.consumed.calories}
                </p>
                <p className="text-sm text-gray-600">
                  von {nutritionGoals.dailyCalories} kcal
                </p>
              </div>
            </div>
          </div>

          {/* Calorie Progress Bar */}
          <div className="mb-4">
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`h-full transition-all duration-300 ${getProgressBarColor(
                  dailyNutrition.consumed.calories,
                  nutritionGoals.dailyCalories
                )}`}
                style={{
                  width: `${Math.min(
                    100,
                    (dailyNutrition.consumed.calories / nutritionGoals.dailyCalories) * 100
                  )}%`
                }}
              />
            </div>
            <p className="text-xs text-gray-600 mt-1">
              {dailyNutrition.remaining.calories > 0
                ? `Noch ${dailyNutrition.remaining.calories} kcal übrig`
                : `${Math.abs(dailyNutrition.remaining.calories)} kcal über dem Ziel`}
            </p>
          </div>

          {/* Macros */}
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center">
              <div className="flex items-center justify-center mb-1">
                <BeakerIcon className="w-5 h-5 text-blue-600" />
              </div>
              <p className="text-sm font-medium text-gray-900">
                {dailyNutrition.consumed.protein.toFixed(0)}g
              </p>
              <p className="text-xs text-gray-600">Protein</p>
              <div className="mt-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-500 transition-all duration-300"
                  style={{
                    width: `${Math.min(
                      100,
                      (dailyNutrition.consumed.protein / dailyNutrition.targetProtein) * 100
                    )}%`
                  }}
                />
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-1">
                <CakeIcon className="w-5 h-5 text-yellow-600" />
              </div>
              <p className="text-sm font-medium text-gray-900">
                {dailyNutrition.consumed.carbs.toFixed(0)}g
              </p>
              <p className="text-xs text-gray-600">Kohlenhydrate</p>
              <div className="mt-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-yellow-500 transition-all duration-300"
                  style={{
                    width: `${Math.min(
                      100,
                      (dailyNutrition.consumed.carbs / dailyNutrition.targetCarbs) * 100
                    )}%`
                  }}
                />
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-1">
                <SparklesIcon className="w-5 h-5 text-green-600" />
              </div>
              <p className="text-sm font-medium text-gray-900">
                {dailyNutrition.consumed.fat.toFixed(0)}g
              </p>
              <p className="text-xs text-gray-600">Fett</p>
              <div className="mt-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-500 transition-all duration-300"
                  style={{
                    width: `${Math.min(
                      100,
                      (dailyNutrition.consumed.fat / dailyNutrition.targetFat) * 100
                    )}%`
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Meals */}
        <div className="space-y-4">
          {(['breakfast', 'lunch', 'dinner', 'snack'] as MealType[]).map(meal => (
            <div key={meal} className="bg-white rounded-xl shadow-sm p-4">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{getMealIcon(meal)}</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">{getMealName(meal)}</h4>
                    <p className="text-sm text-gray-600">{getMealCalories(meal)} kcal</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setShowCopyMenu(showCopyMenu === meal ? null : meal)}
                    className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                    title="Mahlzeit kopieren"
                  >
                    <ArrowPathIcon className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => {
                      setSelectedMeal(meal);
                      setShowFoodSearch(true);
                    }}
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    <PlusIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Copy Menu */}
              {showCopyMenu === meal && (
                <div className="mb-3 p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm font-medium text-gray-700 mb-2">
                    Kopieren nach:
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleCopyMeal(meal, format(new Date(), 'yyyy-MM-dd'))}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors text-sm"
                    >
                      Heute
                    </button>
                    <button
                      onClick={() => {
                        const tomorrow = new Date();
                        tomorrow.setDate(tomorrow.getDate() + 1);
                        handleCopyMeal(meal, format(tomorrow, 'yyyy-MM-dd'));
                      }}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors text-sm"
                    >
                      Morgen
                    </button>
                  </div>
                </div>
              )}

              {/* Food Items */}
              <div className="space-y-2">
                {dailyNutrition.meals[meal].length === 0 ? (
                  <p className="text-center py-4 text-gray-500 text-sm">
                    Keine Einträge
                  </p>
                ) : (
                  dailyNutrition.meals[meal].map(entry => (
                    <div
                      key={entry.id}
                      className="flex justify-between items-center p-2 hover:bg-gray-50 rounded-lg"
                    >
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{entry.foodName}</p>
                        <p className="text-sm text-gray-600">
                          {entry.quantity}g • {entry.nutrition.calories} kcal
                        </p>
                      </div>
                      <button
                        onClick={() => deleteFoodEntry(entry.id)}
                        className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <TrashIcon className="w-4 h-4" />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Weekly Stats */}
        <div className="mt-6 bg-white rounded-xl shadow-sm p-4">
          <h3 className="font-semibold text-gray-900 mb-3">Wochendurchschnitt</h3>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <p className="text-sm text-gray-600">Kalorien</p>
              <p className="text-lg font-semibold">{weeklyAverage.calories} kcal</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Protein</p>
              <p className="text-lg font-semibold">{weeklyAverage.protein}g</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Kohlenhydrate</p>
              <p className="text-lg font-semibold">{weeklyAverage.carbs}g</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Fett</p>
              <p className="text-lg font-semibold">{weeklyAverage.fat}g</p>
            </div>
          </div>
        </div>
      </div>

      {/* Food Search Modal */}
      {showFoodSearch && (
        <FoodSearch
          onSelectFood={handleAddFood}
          onClose={() => setShowFoodSearch(false)}
        />
      )}

      {/* Calorie Goal Calculator Modal */}
      {showCalorieCalculator && (
        <CalorieGoalCalculator
          onClose={() => setShowCalorieCalculator(false)}
        />
      )}
    </div>
  );
};

export default NutritionDashboard;