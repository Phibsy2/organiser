import React, { useState, useEffect } from 'react';
import useNutritionStore from '../../store/nutritionStore';
import useSettingsStore from '../../store/settingsStore';
import {
  ScaleIcon,
  FireIcon,
  ArrowTrendingDownIcon,
  ArrowTrendingUpIcon,
  InformationCircleIcon,
  CheckIcon,
  ChartBarIcon,
  BeakerIcon
} from '@heroicons/react/24/outline';

interface CalorieGoalCalculatorProps {
  onClose: () => void;
}

const CalorieGoalCalculator: React.FC<CalorieGoalCalculatorProps> = ({ onClose }) => {
  const { nutritionGoals, setNutritionGoals } = useNutritionStore();
  const { user, updateUser } = useSettingsStore();
  
  const [weightLossRate, setWeightLossRate] = useState(0.5); // kg per week
  const [tdee, setTdee] = useState(2000);
  const [targetCalories, setTargetCalories] = useState(nutritionGoals.dailyCalories);
  const [macros, setMacros] = useState({
    protein: 30,
    carbs: 40,
    fat: 30
  });
  
  // Calculate TDEE (Total Daily Energy Expenditure)
  useEffect(() => {
    if (!user) return;
    
    // Mifflin-St Jeor Equation for BMR
    let bmr: number;
    if (user.gender === 'male') {
      bmr = 10 * user.weight + 6.25 * user.height - 5 * user.age + 5;
    } else {
      bmr = 10 * user.weight + 6.25 * user.height - 5 * user.age - 161;
    }
    
    // Activity multipliers
    const activityMultipliers = {
      'sedentary': 1.2,      // Little or no exercise
      'light': 1.375,        // Light exercise/sports 1-3 days/week
      'moderate': 1.55,      // Moderate exercise/sports 3-5 days/week
      'active': 1.725,       // Hard exercise/sports 6-7 days a week
      'very-active': 1.9     // Very hard exercise/sports & physical job
    };
    
    const calculatedTdee = Math.round(bmr * activityMultipliers[nutritionGoals.activityLevel]);
    setTdee(calculatedTdee);
  }, [user, nutritionGoals.activityLevel]);
  
  // Calculate target calories based on weight loss rate
  useEffect(() => {
    // 1 kg of fat = approximately 7700 calories
    const weeklyCalorieDeficit = weightLossRate * 7700;
    const dailyCalorieDeficit = Math.round(weeklyCalorieDeficit / 7);
    
    let newTargetCalories = tdee - dailyCalorieDeficit;
    
    // Safety limits
    const minCalories = user?.gender === 'male' ? 1500 : 1200;
    const maxDeficit = tdee * 0.25; // Max 25% deficit for health
    
    if (dailyCalorieDeficit > maxDeficit) {
      newTargetCalories = tdee - maxDeficit;
    }
    
    if (newTargetCalories < minCalories) {
      newTargetCalories = minCalories;
    }
    
    setTargetCalories(Math.round(newTargetCalories));
  }, [weightLossRate, tdee, user]);
  
  // Calculate macros based on goals
  useEffect(() => {
    if (!user) return;
    
    let proteinPercentage = 30;
    let carbsPercentage = 40;
    let fatPercentage = 30;
    
    switch (user.goals.primaryGoal) {
      case 'lose_weight':
        // Higher protein to preserve muscle during weight loss
        proteinPercentage = 35;
        carbsPercentage = 35;
        fatPercentage = 30;
        break;
      case 'build_muscle':
        // Higher carbs for energy and muscle building
        proteinPercentage = 30;
        carbsPercentage = 45;
        fatPercentage = 25;
        break;
      case 'body_recomposition':
        // Balanced approach with higher protein
        proteinPercentage = 35;
        carbsPercentage = 35;
        fatPercentage = 30;
        break;
      case 'maintain':
        // Standard balanced macros
        proteinPercentage = 25;
        carbsPercentage = 45;
        fatPercentage = 30;
        break;
    }
    
    // Adjust protein based on muscle mass and activity
    const muscleMassRatio = user.muscleMass / user.weight;
    if (muscleMassRatio > 0.5) {
      proteinPercentage += 5;
      carbsPercentage -= 5;
    }
    
    setMacros({
      protein: proteinPercentage,
      carbs: carbsPercentage,
      fat: fatPercentage
    });
  }, [user]);
  
  const handleSave = () => {
    setNutritionGoals({
      ...nutritionGoals,
      dailyCalories: targetCalories,
      proteinPercentage: macros.protein,
      carbsPercentage: macros.carbs,
      fatPercentage: macros.fat,
      weightGoal: weightLossRate > 0 ? 'lose' : (weightLossRate < 0 ? 'gain' : 'maintain')
    });
    onClose();
  };
  
  const getWeightLossTimeEstimate = () => {
    if (!user || weightLossRate === 0) return null;
    
    const targetWeight = user.goals.targetWeight || user.weight - 5;
    const weightToLose = user.weight - targetWeight;
    
    if (weightToLose <= 0) return null;
    
    const weeksNeeded = Math.round(weightToLose / weightLossRate);
    const monthsNeeded = Math.round(weeksNeeded / 4.33);
    
    if (monthsNeeded > 1) {
      return `ca. ${monthsNeeded} Monate bis zum Zielgewicht`;
    } else {
      return `ca. ${weeksNeeded} Wochen bis zum Zielgewicht`;
    }
  };
  
  const getHealthWarning = () => {
    if (weightLossRate > 0.8) {
      return 'Eine Gewichtsabnahme von mehr als 0,8 kg pro Woche kann ungesund sein';
    }
    if (targetCalories < (user?.gender === 'male' ? 1500 : 1200)) {
      return 'Die Kalorienzufuhr wurde auf das gesunde Minimum begrenzt';
    }
    return null;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900">Kalorienziel berechnen</h2>
          <p className="text-gray-600 mt-1">
            Bestimmen Sie Ihr tägliches Kalorienziel basierend auf Ihrem Abnehmziel
          </p>
        </div>

        <div className="p-6">
          {/* Current Stats */}
          {user && (
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <h3 className="font-medium text-gray-900 mb-3">Ihre Daten</h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <span className="text-gray-600">Geschlecht:</span>
                  <span className="ml-2 font-medium">{user.gender === 'male' ? 'Männlich' : 'Weiblich'}</span>
                </div>
                <div>
                  <span className="text-gray-600">Alter:</span>
                  <span className="ml-2 font-medium">{user.age} Jahre</span>
                </div>
                <div>
                  <span className="text-gray-600">Größe:</span>
                  <span className="ml-2 font-medium">{user.height} cm</span>
                </div>
                <div>
                  <span className="text-gray-600">Gewicht:</span>
                  <span className="ml-2 font-medium">{user.weight} kg</span>
                </div>
                <div>
                  <span className="text-gray-600">Körperfett:</span>
                  <span className="ml-2 font-medium">{user.bodyFat}%</span>
                </div>
                <div>
                  <span className="text-gray-600">Muskelmasse:</span>
                  <span className="ml-2 font-medium">{user.muscleMass} kg</span>
                </div>
                <div>
                  <span className="text-gray-600">Ziel:</span>
                  <span className="ml-2 font-medium">
                    {user.goals.primaryGoal === 'lose_weight' && 'Gewicht verlieren'}
                    {user.goals.primaryGoal === 'build_muscle' && 'Muskeln aufbauen'}
                    {user.goals.primaryGoal === 'body_recomposition' && 'Körper umformen'}
                    {user.goals.primaryGoal === 'maintain' && 'Gewicht halten'}
                  </span>
                </div>
                <div>
                  <span className="text-gray-600">Aktivität:</span>
                  <span className="ml-2 font-medium">
                    {nutritionGoals.activityLevel === 'sedentary' && 'Sitzend'}
                    {nutritionGoals.activityLevel === 'light' && 'Leicht aktiv'}
                    {nutritionGoals.activityLevel === 'moderate' && 'Moderat aktiv'}
                    {nutritionGoals.activityLevel === 'active' && 'Aktiv'}
                    {nutritionGoals.activityLevel === 'very-active' && 'Sehr aktiv'}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* TDEE Display */}
          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <div className="flex items-center gap-3">
              <FireIcon className="w-6 h-6 text-blue-600" />
              <div>
                <h3 className="font-medium text-gray-900">Ihr Kalorienbedarf (TDEE)</h3>
                <p className="text-2xl font-bold text-blue-600">{tdee} kcal/Tag</p>
                <p className="text-sm text-gray-600">
                  Kalorien zum Gewicht halten
                </p>
              </div>
            </div>
          </div>

          {/* Weight Goal Slider */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-3">
              <label className="font-medium text-gray-900">
                Gewichtsziel pro Woche
              </label>
              <span className="text-lg font-semibold text-blue-600">
                {weightLossRate === 0 ? 'Gewicht halten' : 
                 weightLossRate > 0 ? `${(weightLossRate * 1000).toFixed(0)}g abnehmen` :
                 `${Math.abs(weightLossRate * 1000).toFixed(0)}g zunehmen`}
              </span>
            </div>
            
            <input
              type="range"
              min="-0.5"
              max="1"
              step="0.1"
              value={weightLossRate}
              onChange={(e) => setWeightLossRate(parseFloat(e.target.value))}
              className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              style={{
                background: `linear-gradient(to right, #10B981 0%, #10B981 ${((weightLossRate + 0.5) / 1.5) * 100}%, #E5E7EB ${((weightLossRate + 0.5) / 1.5) * 100}%, #E5E7EB 100%)`
              }}
            />
            
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>500g zunehmen</span>
              <span>Halten</span>
              <span>1kg abnehmen</span>
            </div>

            {/* Time estimate */}
            {getWeightLossTimeEstimate() && (
              <p className="text-sm text-gray-600 mt-3 flex items-center gap-1">
                <InformationCircleIcon className="w-4 h-4" />
                {getWeightLossTimeEstimate()}
              </p>
            )}
          </div>

          {/* Calorie Target */}
          <div className={`${tdee > targetCalories ? 'bg-green-50' : 'bg-blue-50'} rounded-lg p-4 mb-6`}>
            <div className="flex items-center gap-3">
              {tdee > targetCalories ? (
                <ArrowTrendingDownIcon className="w-6 h-6 text-green-600" />
              ) : (
                <ArrowTrendingUpIcon className="w-6 h-6 text-blue-600" />
              )}
              <div>
                <h3 className="font-medium text-gray-900">Ihr neues Kalorienziel</h3>
                <p className={`text-2xl font-bold ${tdee > targetCalories ? 'text-green-600' : 'text-blue-600'}`}>
                  {targetCalories} kcal/Tag
                </p>
                <p className="text-sm text-gray-600">
                  {tdee > targetCalories 
                    ? `Defizit: ${tdee - targetCalories} kcal/Tag`
                    : `Überschuss: ${targetCalories - tdee} kcal/Tag`}
                </p>
              </div>
            </div>
          </div>

          {/* Health Warning */}
          {getHealthWarning() && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-yellow-800 flex items-start gap-2">
                <InformationCircleIcon className="w-5 h-5 flex-shrink-0 mt-0.5" />
                {getHealthWarning()}
              </p>
            </div>
          )}

          {/* Macro Distribution */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-medium text-gray-900 flex items-center gap-2">
                <ChartBarIcon className="w-5 h-5" />
                Makronährstoff-Verteilung
              </h3>
              <span className="text-sm text-gray-600">
                Angepasst für: {user.goals.primaryGoal === 'lose_weight' && 'Gewichtsverlust'}
                {user.goals.primaryGoal === 'build_muscle' && 'Muskelaufbau'}
                {user.goals.primaryGoal === 'body_recomposition' && 'Körperkomposition'}
                {user.goals.primaryGoal === 'maintain' && 'Gewichtserhaltung'}
              </span>
            </div>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Protein ({macros.protein}%)</span>
                  <span className="font-medium">{Math.round((targetCalories * macros.protein / 100) / 4)}g</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500" style={{ width: `${macros.protein}%` }} />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {(Math.round((targetCalories * macros.protein / 100) / 4) / user.weight).toFixed(1)}g pro kg Körpergewicht
                </p>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Kohlenhydrate ({macros.carbs}%)</span>
                  <span className="font-medium">{Math.round((targetCalories * macros.carbs / 100) / 4)}g</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-yellow-500" style={{ width: `${macros.carbs}%` }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Fett ({macros.fat}%)</span>
                  <span className="font-medium">{Math.round((targetCalories * macros.fat / 100) / 9)}g</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500" style={{ width: `${macros.fat}%` }} />
                </div>
              </div>
            </div>
            
            {/* Macro info based on goal */}
            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                {user.goals.primaryGoal === 'lose_weight' && 
                  'Erhöhter Proteinanteil zum Muskelerhalt während der Diät. Moderate Kohlenhydrate für Energie.'}
                {user.goals.primaryGoal === 'build_muscle' && 
                  'Hoher Kohlenhydratanteil für optimale Trainingsleistung. Ausreichend Protein für Muskelwachstum.'}
                {user.goals.primaryGoal === 'body_recomposition' && 
                  'Ausgewogene Verteilung mit hohem Proteinanteil für gleichzeitigen Muskelaufbau und Fettabbau.'}
                {user.goals.primaryGoal === 'maintain' && 
                  'Ausgewogene Makroverteilung für nachhaltige Ernährung und Gewichtserhaltung.'}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={handleSave}
              className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center gap-2"
            >
              <CheckIcon className="w-5 h-5" />
              Kalorienziel speichern
            </button>
            <button
              onClick={onClose}
              className="flex-1 px-4 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
            >
              Abbrechen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalorieGoalCalculator;