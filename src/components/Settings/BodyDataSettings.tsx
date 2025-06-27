import React, { useState, useEffect } from 'react';
import useSettingsStore from '../../store/settingsStore';
import useNutritionStore from '../../store/nutritionStore';
import {
  UserIcon,
  ScaleIcon,
  ArrowsUpDownIcon,
  ChartBarIcon,
  BeakerIcon,
  CheckIcon
} from '@heroicons/react/24/outline';

const BodyDataSettings: React.FC = () => {
  const { user, updateUser } = useSettingsStore();
  const { nutritionGoals, setNutritionGoals } = useNutritionStore();
  const [formData, setFormData] = useState({
    weight: user.weight,
    height: user.height,
    age: user.age,
    gender: user.gender,
    bodyFat: user.bodyFat,
    muscleMass: user.muscleMass,
    targetWeight: user.goals.targetWeight,
    targetBodyFat: user.goals.targetBodyFat,
    targetMuscleMass: user.goals.targetMuscleMass,
    primaryGoal: user.goals.primaryGoal
  });
  const [saved, setSaved] = useState(false);

  // Calculate lean body mass
  const leanBodyMass = formData.weight - (formData.weight * formData.bodyFat / 100);
  
  // Calculate BMI
  const bmi = formData.weight / Math.pow(formData.height / 100, 2);

  const handleSave = () => {
    updateUser({
      weight: formData.weight,
      height: formData.height,
      age: formData.age,
      gender: formData.gender,
      bodyFat: formData.bodyFat,
      muscleMass: formData.muscleMass,
      goals: {
        ...user.goals,
        targetWeight: formData.targetWeight,
        targetBodyFat: formData.targetBodyFat,
        targetMuscleMass: formData.targetMuscleMass,
        primaryGoal: formData.primaryGoal
      }
    });

    // Update nutrition goals based on primary goal
    let proteinPercentage = 30;
    let carbsPercentage = 40;
    let fatPercentage = 30;
    let weightGoal: 'lose' | 'maintain' | 'gain' = 'maintain';

    switch (formData.primaryGoal) {
      case 'lose_weight':
        proteinPercentage = 35;
        carbsPercentage = 35;
        fatPercentage = 30;
        weightGoal = 'lose';
        break;
      case 'build_muscle':
        proteinPercentage = 30;
        carbsPercentage = 45;
        fatPercentage = 25;
        weightGoal = 'gain';
        break;
      case 'body_recomposition':
        proteinPercentage = 35;
        carbsPercentage = 35;
        fatPercentage = 30;
        weightGoal = 'maintain';
        break;
      case 'maintain':
        proteinPercentage = 25;
        carbsPercentage = 45;
        fatPercentage = 30;
        weightGoal = 'maintain';
        break;
    }

    setNutritionGoals({
      ...nutritionGoals,
      proteinPercentage,
      carbsPercentage,
      fatPercentage,
      weightGoal
    });

    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const getGoalLabel = (goal: string) => {
    switch (goal) {
      case 'lose_weight':
        return 'Gewicht verlieren';
      case 'build_muscle':
        return 'Muskeln aufbauen';
      case 'body_recomposition':
        return 'Körper umformen';
      case 'maintain':
        return 'Gewicht halten';
      default:
        return goal;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Körperdaten</h2>
        {saved && (
          <div className="flex items-center gap-2 text-green-600">
            <CheckIcon className="w-5 h-5" />
            <span className="text-sm">Gespeichert</span>
          </div>
        )}
      </div>

      <div className="space-y-6">
        {/* Basic Info */}
        <div>
          <h3 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
            <UserIcon className="w-5 h-5" />
            Basisdaten
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Geschlecht
              </label>
              <select
                value={formData.gender}
                onChange={(e) => setFormData({ ...formData, gender: e.target.value as 'male' | 'female' })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="male">Männlich</option>
                <option value="female">Weiblich</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Alter (Jahre)
              </label>
              <input
                type="number"
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: parseInt(e.target.value) || 0 })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                min="10"
                max="100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Größe (cm)
              </label>
              <input
                type="number"
                value={formData.height}
                onChange={(e) => setFormData({ ...formData, height: parseInt(e.target.value) || 0 })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                min="100"
                max="250"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Gewicht (kg)
              </label>
              <input
                type="number"
                step="0.1"
                value={formData.weight}
                onChange={(e) => setFormData({ ...formData, weight: parseFloat(e.target.value) || 0 })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                min="30"
                max="300"
              />
            </div>
          </div>
        </div>

        {/* Body Composition */}
        <div>
          <h3 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
            <ChartBarIcon className="w-5 h-5" />
            Körperzusammensetzung
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Körperfett (%)
              </label>
              <input
                type="number"
                step="0.1"
                value={formData.bodyFat}
                onChange={(e) => setFormData({ ...formData, bodyFat: parseFloat(e.target.value) || 0 })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                min="3"
                max="50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Muskelmasse (kg)
              </label>
              <input
                type="number"
                step="0.1"
                value={formData.muscleMass}
                onChange={(e) => setFormData({ ...formData, muscleMass: parseFloat(e.target.value) || 0 })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                min="10"
                max="100"
              />
            </div>
          </div>

          {/* Calculated Values */}
          <div className="mt-4 grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
            <div>
              <p className="text-sm text-gray-600">BMI</p>
              <p className="font-semibold">{bmi.toFixed(1)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Magere Körpermasse</p>
              <p className="font-semibold">{leanBodyMass.toFixed(1)} kg</p>
            </div>
          </div>
        </div>

        {/* Goals */}
        <div>
          <h3 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
            <BeakerIcon className="w-5 h-5" />
            Ziele
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Hauptziel
              </label>
              <select
                value={formData.primaryGoal}
                onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value as any })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="lose_weight">Gewicht verlieren</option>
                <option value="build_muscle">Muskeln aufbauen</option>
                <option value="body_recomposition">Körper umformen (Rekomposition)</option>
                <option value="maintain">Gewicht halten</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Zielgewicht (kg)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={formData.targetWeight}
                  onChange={(e) => setFormData({ ...formData, targetWeight: parseFloat(e.target.value) || 0 })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  min="30"
                  max="300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Ziel-Körperfett (%)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={formData.targetBodyFat}
                  onChange={(e) => setFormData({ ...formData, targetBodyFat: parseFloat(e.target.value) || 0 })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  min="3"
                  max="50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Ziel-Muskelmasse (kg)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={formData.targetMuscleMass}
                  onChange={(e) => setFormData({ ...formData, targetMuscleMass: parseFloat(e.target.value) || 0 })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  min="10"
                  max="100"
                />
              </div>
            </div>

            {/* Goal Progress */}
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-3">Fortschritt zum Ziel</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Gewicht</span>
                    <span>{formData.weight} kg → {formData.targetWeight} kg</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-500 transition-all duration-300"
                      style={{
                        width: `${Math.min(100, Math.max(0, 
                          formData.weight > formData.targetWeight
                            ? ((formData.weight - formData.targetWeight) / (formData.weight - formData.targetWeight + 5)) * 100
                            : ((formData.targetWeight - formData.weight) / (formData.targetWeight - formData.weight + 5)) * 100
                        ))}%`
                      }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Körperfett</span>
                    <span>{formData.bodyFat}% → {formData.targetBodyFat}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-green-500 transition-all duration-300"
                      style={{
                        width: `${Math.min(100, Math.max(0,
                          formData.bodyFat > formData.targetBodyFat
                            ? ((formData.bodyFat - formData.targetBodyFat) / (formData.bodyFat - formData.targetBodyFat + 5)) * 100
                            : ((formData.targetBodyFat - formData.bodyFat) / (formData.targetBodyFat - formData.bodyFat + 5)) * 100
                        ))}%`
                      }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Muskelmasse</span>
                    <span>{formData.muscleMass} kg → {formData.targetMuscleMass} kg</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-purple-500 transition-all duration-300"
                      style={{
                        width: `${Math.min(100, Math.max(0,
                          formData.targetMuscleMass > formData.muscleMass
                            ? ((formData.targetMuscleMass - formData.muscleMass) / (formData.targetMuscleMass - formData.muscleMass + 5)) * 100
                            : ((formData.muscleMass - formData.targetMuscleMass) / (formData.muscleMass - formData.targetMuscleMass + 5)) * 100
                        ))}%`
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center gap-2"
        >
          <CheckIcon className="w-5 h-5" />
          Speichern
        </button>
      </div>
    </div>
  );
};

export default BodyDataSettings;