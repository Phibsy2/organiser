import React, { useState, useEffect } from 'react';
import LearningDashboard from './LearningDashboard';
import ModuleDashboard from './ModuleDashboard';
import LearningUnit from './LearningUnit';
import Probeklausuren from './Probeklausuren';
import useLearningStore from '../../store/learningStore';
import { propaedeutikumModule } from '../../data/propaedeutikumContent';
import { bgbATModule } from '../../data/bgb-at/bgbATModule';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

type LearningView = 'dashboard' | 'module' | 'unit' | 'probeklausuren';

const Learning: React.FC = () => {
  const [currentView, setCurrentView] = useState<LearningView>('dashboard');
  const [selectedUnitId, setSelectedUnitId] = useState<string | null>(null);
  
  const { currentModule, availableModules, initializeLearning } = useLearningStore();

  // Check for probeklausuren URL path
  useEffect(() => {
    if (window.location.pathname.includes('/probeklausuren')) {
      setCurrentView('probeklausuren');
    }
  }, []);

  // Ensure modules are available
  useEffect(() => {
    if (availableModules.length === 0) {
      // Initialize learning system and add modules
      initializeLearning();
      useLearningStore.setState({
        availableModules: [propaedeutikumModule, bgbATModule]
      });
    }
  }, [availableModules.length, initializeLearning]);

  const handleModuleSelect = (moduleId: string) => {
    // For now we only have one module, but this is extensible
    const module = availableModules.find(m => m.id === moduleId);
    if (module) {
      useLearningStore.setState({ currentModule: module });
      setCurrentView('module');
    }
  };

  const handleUnitSelect = (unitId: string, moduleId?: string) => {
    console.log('handleUnitSelect called with:', unitId, moduleId);
    console.log('Available modules:', availableModules);
    console.log('Current module:', currentModule);
    
    // If moduleId is provided, set the correct module first
    if (moduleId) {
      const module = availableModules.find(m => m.id === moduleId);
      if (module) {
        useLearningStore.setState({ currentModule: module });
      }
    }
    
    setSelectedUnitId(unitId);
    setCurrentView('unit');
    console.log('View changed to unit, selectedUnitId:', unitId);
  };

  const handleBackToDashboard = () => {
    setCurrentView('dashboard');
    setSelectedUnitId(null);
  };

  const handleBackToModule = () => {
    setCurrentView('module');
    setSelectedUnitId(null);
  };

  const handleViewChange = (view: LearningView) => {
    setCurrentView(view);
  };

  const getSelectedUnit = () => {
    console.log('getSelectedUnit called with selectedUnitId:', selectedUnitId);
    if (!selectedUnitId) {
      console.log('No selectedUnitId');
      return null;
    }
    
    // Search in all available modules
    let unit = propaedeutikumModule.units.find(u => u.id === selectedUnitId);
    if (!unit) {
      unit = bgbATModule.units.find(u => u.id === selectedUnitId);
    }
    console.log('Found unit:', unit ? unit.title : 'not found');
    
    if (!unit && currentModule) {
      console.log('Searching in currentModule...');
      return currentModule.units.find(u => u.id === selectedUnitId);
    }
    
    return unit;
  };

  const selectedUnit = getSelectedUnit();
  console.log('Current view:', currentView);
  console.log('Selected unit exists:', !!selectedUnit);

  if (currentView === 'unit' && selectedUnit) {
    console.log('Rendering LearningUnit with:', selectedUnit.title);
    return (
      <LearningUnit 
        unit={selectedUnit} 
        onBack={handleBackToModule}
        onNavigateToUnit={handleUnitSelect}
      />
    );
  }

  if (currentView === 'unit' && !selectedUnit) {
    console.log('Unit view requested but no unit found, returning to module view');
    // Reset to module view if unit not found
    setTimeout(() => {
      setCurrentView('module');
      setSelectedUnitId(null);
    }, 0);
  }

  if (currentView === 'module' && currentModule) {
    return (
      <ModuleDashboard
        module={currentModule}
        onUnitSelect={handleUnitSelect}
        onBack={handleBackToDashboard}
      />
    );
  }

  if (currentView === 'probeklausuren') {
    return (
      <div>
        <div className="bg-white shadow-sm border-b px-4 py-3 mb-6">
          <button
            onClick={handleBackToDashboard}
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Zurück zum Dashboard
          </button>
        </div>
        <Probeklausuren />
      </div>
    );
  }

  return (
    <LearningDashboard 
      onModuleSelect={handleModuleSelect}
      onUnitSelect={handleUnitSelect}
      onViewChange={handleViewChange}
    />
  );
};

export default Learning;