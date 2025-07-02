import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import TrainingOverview from './components/Training/TrainingOverview';
import NutritionDashboard from './components/Nutrition/NutritionDashboard';
import Learning from './components/Learning/Learning';
import Progress from './components/Progress/Progress';
import Settings from './components/Settings/Settings';
import Navigation, { NavigationTab } from './components/Shared/Navigation';
import useGamificationStore from './store/gamificationStore';

function App() {
  const [activeTab, setActiveTab] = useState<NavigationTab>('dashboard');
  const { profile, initializeProfile } = useGamificationStore();

  useEffect(() => {
    // Initialize gamification profile if not exists
    if (!profile) {
      initializeProfile('user-1'); // In a real app, this would be the actual user ID
    }
  }, [profile, initializeProfile]);

  const handleNavigate = (tab: string) => {
    setActiveTab(tab as NavigationTab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard onNavigate={handleNavigate} />;
      case 'training':
        return <TrainingOverview />;
      case 'nutrition':
        return <NutritionDashboard />;
      case 'learning':
        return <Learning />;
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
