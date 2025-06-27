import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import ModuleTracker from './components/Study/ModuleTracker';
import PomodoroTimer from './components/Study/PomodoroTimer';
import SessionHistory from './components/Study/SessionHistory';
import TrainingOverview from './components/Training/TrainingOverview';
import NutritionDashboard from './components/Nutrition/NutritionDashboard';
import Progress from './components/Progress/Progress';
import Settings from './components/Settings/Settings';
import Navigation, { NavigationTab } from './components/Shared/Navigation';

function App() {
  const [activeTab, setActiveTab] = useState<NavigationTab>('dashboard');

  const handleNavigate = (tab: string) => {
    setActiveTab(tab as NavigationTab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard onNavigate={handleNavigate} />;
      case 'study':
        return (
          <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 pb-20">
            <ModuleTracker />
            <div className="px-4 pb-6">
              <PomodoroTimer />
              <SessionHistory />
            </div>
          </div>
        );
      case 'training':
        return <TrainingOverview />;
      case 'nutrition':
        return <NutritionDashboard />;
      case 'progress':
        return <Progress />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="App">
      {renderContent()}
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}

export default App;
