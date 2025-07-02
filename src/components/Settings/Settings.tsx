import React, { useState } from 'react';
import useSettingsStore from '../../store/settingsStore';
import useNotifications from '../../hooks/useNotifications';
import BodyDataSettings from './BodyDataSettings';
import {
  UserIcon,
  BellIcon,
  BriefcaseIcon,
  HeartIcon,
  MoonIcon,
  CheckIcon,
  ScaleIcon
} from '@heroicons/react/24/outline';

const Settings: React.FC = () => {
  const { 
    user, 
    notifications, 
    workSchedule,
    trainingPreferences,
    theme,
    language,
    updateUser,
    updateNotifications,
    updateWorkSchedule,
    updateTrainingPreferences,
    setTheme,
    setLanguage
  } = useSettingsStore();

  const { requestPermission, permission } = useNotifications();
  const [activeSection, setActiveSection] = useState<string>('bodydata');

  const handleNotificationToggle = async () => {
    if (!notifications.enabled && permission !== 'granted') {
      const granted = await requestPermission();
      if (granted) {
        updateNotifications({ enabled: true });
      }
    } else {
      updateNotifications({ enabled: !notifications.enabled });
    }
  };

  const sections = [
    { id: 'bodydata', label: 'Körperdaten', icon: ScaleIcon },
    { id: 'profile', label: 'Profil', icon: UserIcon },
    { id: 'notifications', label: 'Benachrichtigungen', icon: BellIcon },
    { id: 'work', label: 'Arbeitszeiten', icon: BriefcaseIcon },
    { id: 'training', label: 'Training', icon: HeartIcon },
    { id: 'appearance', label: 'Darstellung', icon: MoonIcon },
  ];

  const renderSection = () => {
    switch (activeSection) {
      case 'bodydata':
        return <BodyDataSettings />;
        
      case 'profile':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                value={user.name}
                onChange={(e) => updateUser({ name: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Dein Name"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Gewicht (kg)</label>
                <input
                  type="number"
                  value={user.weight}
                  onChange={(e) => updateUser({ weight: parseFloat(e.target.value) || 0 })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  step="0.1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Körperfett (%)</label>
                <input
                  type="number"
                  value={user.bodyFat}
                  onChange={(e) => updateUser({ bodyFat: parseFloat(e.target.value) || 0 })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  step="0.1"
                />
              </div>
            </div>

            <div className="pt-4 border-t">
              <h4 className="font-medium text-gray-900 mb-3">Ziele</h4>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Zielgewicht (kg)</label>
                  <input
                    type="number"
                    value={user.goals.targetWeight}
                    onChange={(e) => updateUser({ 
                      goals: { ...user.goals, targetWeight: parseFloat(e.target.value) || 0 }
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    step="0.1"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Wöchentliche Lernstunden</label>
                  <input
                    type="number"
                    value={user.goals.weeklyStudyHours}
                    onChange={(e) => updateUser({ 
                      goals: { ...user.goals, weeklyStudyHours: parseInt(e.target.value) || 0 }
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 'notifications':
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <BellIcon className="w-5 h-5 text-gray-600 mr-3" />
                <div>
                  <p className="font-medium text-gray-900">Benachrichtigungen aktivieren</p>
                  <p className="text-sm text-gray-600">
                    {permission === 'granted' ? 'Berechtigung erteilt' : 'Berechtigung erforderlich'}
                  </p>
                </div>
              </div>
              <button
                onClick={handleNotificationToggle}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  notifications.enabled ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    notifications.enabled ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            <div className="space-y-3">
              <label className="flex items-center justify-between">
                <span className="text-gray-700">Lern-Erinnerungen</span>
                <input
                  type="checkbox"
                  checked={notifications.studyReminders}
                  onChange={(e) => updateNotifications({ studyReminders: e.target.checked })}
                  className="h-4 w-4 text-blue-600 rounded"
                  disabled={!notifications.enabled}
                />
              </label>
              <label className="flex items-center justify-between">
                <span className="text-gray-700">Training-Erinnerungen</span>
                <input
                  type="checkbox"
                  checked={notifications.trainingReminders}
                  onChange={(e) => updateNotifications({ trainingReminders: e.target.checked })}
                  className="h-4 w-4 text-blue-600 rounded"
                  disabled={!notifications.enabled}
                />
              </label>
              <label className="flex items-center justify-between">
                <span className="text-gray-700">Tagesziel-Erinnerungen</span>
                <input
                  type="checkbox"
                  checked={notifications.dailyGoalReminders}
                  onChange={(e) => updateNotifications({ dailyGoalReminders: e.target.checked })}
                  className="h-4 w-4 text-blue-600 rounded"
                  disabled={!notifications.enabled}
                />
              </label>
              <label className="flex items-center justify-between">
                <span className="text-gray-700">Ton bei Benachrichtigungen</span>
                <input
                  type="checkbox"
                  checked={notifications.sound}
                  onChange={(e) => updateNotifications({ sound: e.target.checked })}
                  className="h-4 w-4 text-blue-600 rounded"
                  disabled={!notifications.enabled}
                />
              </label>
            </div>
          </div>
        );

      case 'work':
        return (
          <div className="space-y-4">
            <h4 className="font-medium text-gray-900">Arbeitszeiten</h4>
            {Object.entries(workSchedule).map(([day, schedule]) => (
              <div key={day} className="border rounded-lg p-3">
                <p className="font-medium text-gray-700 mb-2 capitalize">{day}</p>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="time"
                    value={schedule.start}
                    onChange={(e) => updateWorkSchedule(day, { ...schedule, start: e.target.value })}
                    className="px-2 py-1 border rounded text-sm"
                  />
                  <input
                    type="time"
                    value={schedule.end}
                    onChange={(e) => updateWorkSchedule(day, { ...schedule, end: e.target.value })}
                    className="px-2 py-1 border rounded text-sm"
                  />
                </div>
                <select
                  value={schedule.type}
                  onChange={(e) => updateWorkSchedule(day, { ...schedule, type: e.target.value as 'office' | 'home' })}
                  className="mt-2 w-full px-2 py-1 border rounded text-sm"
                >
                  <option value="home">Homeoffice</option>
                  <option value="office">Büro</option>
                </select>
              </div>
            ))}
          </div>
        );

      case 'training':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Bevorzugte Trainingszeit</label>
              <select
                value={trainingPreferences.preferredTime}
                onChange={(e) => updateTrainingPreferences({ 
                  preferredTime: e.target.value as 'morning' | 'afternoon' | 'evening' 
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              >
                <option value="morning">Morgens</option>
                <option value="afternoon">Nachmittags</option>
                <option value="evening">Abends</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Trainingstage</label>
              <div className="space-y-2">
                {['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].map(day => (
                  <label key={day} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={trainingPreferences.preferredDays.includes(day)}
                      onChange={(e) => {
                        const days = e.target.checked
                          ? [...trainingPreferences.preferredDays, day]
                          : trainingPreferences.preferredDays.filter(d => d !== day);
                        updateTrainingPreferences({ preferredDays: days });
                      }}
                      className="h-4 w-4 text-blue-600 rounded mr-2"
                    />
                    <span className="text-gray-700 capitalize">{day}</span>
                  </label>
                ))}
              </div>
            </div>

            <label className="flex items-center">
              <input
                type="checkbox"
                checked={trainingPreferences.homeGymAvailable}
                onChange={(e) => updateTrainingPreferences({ homeGymAvailable: e.target.checked })}
                className="h-4 w-4 text-blue-600 rounded mr-2"
              />
              <span className="text-gray-700">Home Gym verfügbar</span>
            </label>
          </div>
        );

      case 'appearance':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Design</label>
              <select
                value={theme}
                onChange={(e) => setTheme(e.target.value as 'light' | 'dark' | 'auto')}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              >
                <option value="light">Hell</option>
                <option value="dark">Dunkel</option>
                <option value="auto">Automatisch</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Sprache</label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as 'de' | 'en')}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              >
                <option value="de">Deutsch</option>
                <option value="en">English</option>
              </select>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="px-4 py-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Einstellungen</h1>
        
        {/* Section Tabs */}
        <div className="grid grid-cols-3 gap-2 mb-6">
          {sections.map(section => {
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`p-3 rounded-lg flex flex-col items-center transition-colors ${
                  activeSection === section.id
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-5 h-5 mb-1" />
                <span className="text-xs font-medium">{section.label}</span>
              </button>
            );
          })}
        </div>

        {/* Section Content */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          {renderSection()}
        </div>

        {/* Save Button */}
        <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center transition-colors duration-200">
          <CheckIcon className="w-5 h-5 mr-2" />
          Änderungen gespeichert
        </button>
      </div>
    </div>
  );
};

export default Settings;