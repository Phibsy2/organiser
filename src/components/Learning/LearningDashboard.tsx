import React, { useEffect } from 'react';
import {
  BookOpenIcon,
  AcademicCapIcon,
  TrophyIcon,
  FireIcon,
  ClockIcon,
  ChartBarIcon,
  SparklesIcon,
  ArrowRightIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';
import useLearningStore from '../../store/learningStore';
import { propaedeutikumModule } from '../../data/propaedeutikumContent';
import { bgbATModule } from '../../data/bgb-at/bgbATModule';
import { LearningButton, LearningCardButton } from './LearningButton';

interface LearningDashboardProps {
  onModuleSelect: (moduleId: string) => void;
  onUnitSelect: (unitId: string, moduleId?: string) => void;
  onViewChange?: (view: 'dashboard' | 'probeklausuren') => void;
}

const LearningDashboard: React.FC<LearningDashboardProps> = ({ onModuleSelect, onUnitSelect, onViewChange }) => {
  const {
    enrolledModules,
    moduleProgress,
    unitProgress,
    overallProgress,
    streak,
    recommendedContent,
    initializeLearning,
    enrollInModule,
    generateRecommendations,
    updateStreak,
    getXPForNextLevel
  } = useLearningStore();

  useEffect(() => {
    // Only initialize once on mount
    const hasInitialized = useLearningStore.getState().availableModules.length > 0;
    
    if (!hasInitialized) {
      // Initialize learning system
      initializeLearning();
      
      // Load available modules
      useLearningStore.setState({
        availableModules: [propaedeutikumModule, bgbATModule]
      });
      
      // Auto-enroll user in Propädeutikum for easier testing
      enrollInModule('propaedeutikum').then(() => {
        console.log('Auto-enrolled in propaedeutikum');
      });
      
      // Generate recommendations
      generateRecommendations();
      
      // Update streak
      updateStreak();
    }
  }, []); // Empty dependency array - only run on mount

  const levelInfo = React.useMemo(() => {
    const xpInfo = getXPForNextLevel(overallProgress.level);
    return {
      level: overallProgress.level,
      currentXP: xpInfo.current,
      requiredXP: xpInfo.required,
      percentage: (xpInfo.current / xpInfo.required) * 100
    };
  }, [overallProgress.level, getXPForNextLevel]);

  const isEnrolledProp = enrolledModules.includes('propaedeutikum');
  const progressProp = moduleProgress['propaedeutikum'];
  const isEnrolledBGB = enrolledModules.includes('bgb-at');
  const progressBGB = moduleProgress['bgb-at'];

  const handleEnroll = async (moduleId: string) => {
    console.log('handleEnroll called for:', moduleId);
    try {
      await enrollInModule(moduleId);
      console.log('Enrollment successful');
      // Don't auto-navigate to module
    } catch (error) {
      console.error('Enrollment failed:', error);
    }
  };

  const formatTime = (minutes: number): string => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours > 0) {
      return `${hours}h ${mins}min`;
    }
    return `${mins}min`;
  };

  const getLevelTitle = (level: number): string => {
    if (level <= 2) return 'Juristischer Novize';
    if (level <= 5) return 'Rechtsstudent';
    if (level <= 10) return 'Fortgeschrittener Student';
    if (level <= 15) return 'Jurist in Ausbildung';
    if (level <= 20) return 'Rechtsreferendar';
    return 'Meisterjurist';
  };

  return (
    <div className="space-y-6">
      {/* Header with Level Progress */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-6 text-white">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-2xl font-bold mb-1">Willkommen zurück!</h2>
            <p className="text-indigo-100">
              {getLevelTitle(overallProgress.level)} - Level {overallProgress.level}
            </p>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-2 mb-1">
              <FireIcon className="w-5 h-5" />
              <span className="text-2xl font-bold">{streak.current}</span>
            </div>
            <p className="text-sm text-indigo-100">Tage Streak</p>
          </div>
        </div>
        
        {/* XP Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>{levelInfo.currentXP} XP</span>
            <span>{levelInfo.requiredXP} XP</span>
          </div>
          <div className="w-full bg-indigo-400 bg-opacity-30 rounded-full h-3">
            <div
              className="bg-white h-3 rounded-full transition-all duration-500"
              style={{ width: `${levelInfo.percentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <BookOpenIcon className="w-5 h-5 text-blue-600" />
            <span className="text-xs text-gray-500">Module</span>
          </div>
          <p className="text-2xl font-bold">{overallProgress.modulesCompleted}</p>
          <p className="text-xs text-gray-600">abgeschlossen</p>
        </div>
        
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <AcademicCapIcon className="w-5 h-5 text-green-600" />
            <span className="text-xs text-gray-500">Einheiten</span>
          </div>
          <p className="text-2xl font-bold">{overallProgress.unitsCompleted}</p>
          <p className="text-xs text-gray-600">gemeistert</p>
        </div>
        
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <TrophyIcon className="w-5 h-5 text-yellow-600" />
            <span className="text-xs text-gray-500">XP</span>
          </div>
          <p className="text-2xl font-bold">{overallProgress.totalXP}</p>
          <p className="text-xs text-gray-600">gesammelt</p>
        </div>
        
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <ClockIcon className="w-5 h-5 text-purple-600" />
            <span className="text-xs text-gray-500">Zeit</span>
          </div>
          <p className="text-2xl font-bold">{formatTime(overallProgress.totalTimeSpent)}</p>
          <p className="text-xs text-gray-600">gelernt</p>
        </div>
      </div>

      {/* Available Modules */}
      <div className="space-y-6">
        {/* Propädeutikum Module */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">{propaedeutikumModule.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{propaedeutikumModule.description}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <ClockIcon className="w-4 h-4" />
                    {propaedeutikumModule.estimatedHours} Stunden
                  </span>
                  <span className="flex items-center gap-1">
                    <BookOpenIcon className="w-4 h-4" />
                    {propaedeutikumModule.units.length} Einheiten
                  </span>
                </div>
              </div>
              <div className="ml-4">
                {isEnrolledProp ? (
                  <div className="text-center">
                    <div className="relative w-20 h-20 mb-2">
                      <svg className="w-20 h-20 transform -rotate-90">
                        <circle
                          cx="40"
                          cy="40"
                          r="36"
                          stroke="#e5e7eb"
                          strokeWidth="8"
                          fill="none"
                        />
                        <circle
                          cx="40"
                          cy="40"
                          r="36"
                          stroke="#6366f1"
                          strokeWidth="8"
                          fill="none"
                          strokeDasharray={`${2 * Math.PI * 36}`}
                          strokeDashoffset={`${2 * Math.PI * 36 * (1 - (progressProp?.overallProgress || 0) / 100)}`}
                          className="transition-all duration-500"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg font-bold">{Math.round(progressProp?.overallProgress || 0)}%</span>
                      </div>
                    </div>
                    <LearningButton
                      onClick={() => onModuleSelect('propaedeutikum')}
                      size="medium"
                    >
                      Modul öffnen
                    </LearningButton>
                  </div>
                ) : (
                  <LearningButton
                    onClick={() => handleEnroll('propaedeutikum')}
                    size="medium"
                  >
                    Jetzt starten
                  </LearningButton>
                )}
              </div>
            </div>
            
            {/* Module Units Preview */}
            <div className="mt-6 space-y-3">
              <h4 className="font-semibold text-gray-900">Lerneinheiten:</h4>
              {propaedeutikumModule.units.slice(0, isEnrolledProp ? propaedeutikumModule.units.length : 5).map((unit) => {
                const unitProg = unitProgress[unit.id];
                const isCompleted = progressProp?.completedUnits.includes(unit.id);
                const masteryScore = unitProg?.masteryScore || 0;
                  
                  return (
                    <LearningCardButton
                      key={unit.id}
                      onClick={async () => {
                        console.log('Unit clicked:', unit.id);
                        console.log('Is enrolled:', isEnrolledProp);
                        try {
                          if (!isEnrolledProp) {
                            console.log('Enrolling first...');
                            await handleEnroll('propaedeutikum');
                            console.log('Enrollment complete, selecting unit');
                          }
                          console.log('Calling onUnitSelect with:', unit.id);
                          onUnitSelect(unit.id);
                        } catch (error) {
                          console.error('Error in unit selection:', error);
                        }
                      }}
                      title={`${unit.order}. ${unit.title}`}
                      description={`${unit.estimatedMinutes} Min • ${unit.exercises.length} Übungen`}
                      badge={
                        isCompleted ? (
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-green-600">
                              {Math.round(masteryScore)}%
                            </span>
                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                          </div>
                        ) : masteryScore > 0 ? (
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-indigo-600">
                              {Math.round(masteryScore)}%
                            </span>
                            <div className="w-24 bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-indigo-600 h-2 rounded-full"
                                style={{ width: `${masteryScore}%` }}
                              />
                            </div>
                          </div>
                        ) : null
                      }
                    />
                  );
                })}
                {!isEnrolledProp && propaedeutikumModule.units.length > 5 && (
                  <div className="p-4 border-2 border-dashed border-gray-300 rounded-lg text-center">
                    <p className="text-gray-500 mb-2">
                      +{propaedeutikumModule.units.length - 5} weitere Lerneinheiten
                    </p>
                    <LearningButton
                      onClick={() => handleEnroll('propaedeutikum')}
                      variant="ghost"
                      size="small"
                      icon={null}
                    >
                      Jetzt einschreiben, um alle zu sehen
                    </LearningButton>
                  </div>
                )}
              </div>
          </div>
        </div>

        {/* BGB AT Module */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold">{bgbATModule.title}</h3>
                  <span className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full font-medium">
                    {bgbATModule.credits} ECTS
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-3">{bgbATModule.description}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                  <span className="flex items-center gap-1">
                    <ClockIcon className="w-4 h-4" />
                    {bgbATModule.estimatedHours} Stunden
                  </span>
                  <span className="flex items-center gap-1">
                    <BookOpenIcon className="w-4 h-4" />
                    {bgbATModule.units.length} Einheiten
                  </span>
                </div>
                <p className="text-xs text-gray-500">
                  <strong>Prüfung:</strong> {bgbATModule.examType} • <strong>Verantwortlich:</strong> {bgbATModule.responsibleProfessor}
                </p>
              </div>
              <div className="ml-4">
                {isEnrolledBGB ? (
                  <div className="text-center">
                    <div className="relative w-20 h-20 mb-2">
                      <svg className="w-20 h-20 transform -rotate-90">
                        <circle
                          cx="40"
                          cy="40"
                          r="36"
                          stroke="#e5e7eb"
                          strokeWidth="8"
                          fill="none"
                        />
                        <circle
                          cx="40"
                          cy="40"
                          r="36"
                          stroke="#6366f1"
                          strokeWidth="8"
                          fill="none"
                          strokeDasharray={`${2 * Math.PI * 36}`}
                          strokeDashoffset={`${2 * Math.PI * 36 * (1 - (progressBGB?.overallProgress || 0) / 100)}`}
                          className="transition-all duration-500"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg font-bold">{Math.round(progressBGB?.overallProgress || 0)}%</span>
                      </div>
                    </div>
                    <LearningButton
                      onClick={() => onModuleSelect('bgb-at')}
                      size="medium"
                    >
                      Modul öffnen
                    </LearningButton>
                  </div>
                ) : (
                  <LearningButton
                    onClick={() => handleEnroll('bgb-at')}
                    size="medium"
                  >
                    Jetzt starten
                  </LearningButton>
                )}
              </div>
            </div>
            
            {/* Module Units Preview */}
            <div className="mt-6 space-y-3">
              <h4 className="font-semibold text-gray-900">Lerneinheiten:</h4>
              {bgbATModule.units.slice(0, isEnrolledBGB ? bgbATModule.units.length : 5).map((unit) => {
                const unitProg = unitProgress[unit.id];
                const isCompleted = progressBGB?.completedUnits.includes(unit.id);
                const masteryScore = unitProg?.masteryScore || 0;
                  
                  return (
                    <LearningCardButton
                      key={unit.id}
                      onClick={async () => {
                        console.log('Unit clicked:', unit.id);
                        console.log('Is enrolled:', isEnrolledBGB);
                        try {
                          if (!isEnrolledBGB) {
                            console.log('Enrolling first...');
                            await handleEnroll('bgb-at');
                            console.log('Enrollment complete, selecting unit');
                          }
                          console.log('Calling onUnitSelect with:', unit.id);
                          onUnitSelect(unit.id, 'bgb-at');
                        } catch (error) {
                          console.error('Error in unit selection:', error);
                        }
                      }}
                      title={`${unit.order}. ${unit.title}`}
                      description={`${unit.estimatedMinutes} Min • ${unit.exercises.length} Übungen`}
                      badge={
                        isCompleted ? (
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-green-600">
                              {Math.round(masteryScore)}%
                            </span>
                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                          </div>
                        ) : masteryScore > 0 ? (
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-indigo-600">
                              {Math.round(masteryScore)}%
                            </span>
                            <div className="w-24 bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-indigo-600 h-2 rounded-full"
                                style={{ width: `${masteryScore}%` }}
                              />
                            </div>
                          </div>
                        ) : null
                      }
                    />
                  );
                })}
                {!isEnrolledBGB && bgbATModule.units.length > 5 && (
                  <div className="p-4 border-2 border-dashed border-gray-300 rounded-lg text-center">
                    <p className="text-gray-500 mb-2">
                      +{bgbATModule.units.length - 5} weitere Lerneinheiten
                    </p>
                    <LearningButton
                      onClick={() => handleEnroll('bgb-at')}
                      variant="ghost"
                      size="small"
                      icon={null}
                    >
                      Jetzt einschreiben, um alle zu sehen
                    </LearningButton>
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Content */}
      {recommendedContent.length > 0 && (
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-2 mb-4">
            <SparklesIcon className="w-5 h-5 text-indigo-600" />
            <h3 className="text-lg font-semibold">Empfohlene Inhalte</h3>
          </div>
          <div className="space-y-3">
            {recommendedContent.slice(0, 3).map((content) => {
              // Try to find unit in both modules
              let unit = propaedeutikumModule.units.find(u => u.id === content.contentId);
              let moduleId = 'propaedeutikum';
              
              if (!unit) {
                unit = bgbATModule.units.find(u => u.id === content.contentId);
                moduleId = 'bgb-at';
              }
              
              if (!unit) return null;
              
              return (
                <LearningCardButton
                  key={content.contentId}
                  onClick={() => onUnitSelect(content.contentId, moduleId)}
                  title={unit.title}
                  description={content.reason}
                  badge={
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      content.priority === 'high' 
                        ? 'bg-red-100 text-red-700'
                        : content.priority === 'medium'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {content.priority === 'high' ? 'Hoch' : content.priority === 'medium' ? 'Mittel' : 'Niedrig'}
                    </span>
                  }
                  icon={null}
                />
              );
            })}
          </div>
        </div>
      )}

      {/* Probeklausuren Section */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <DocumentTextIcon className="w-5 h-5 text-indigo-600" />
            <h3 className="text-lg font-semibold">Probeklausuren</h3>
          </div>
          <LearningButton
            onClick={() => onViewChange && onViewChange('probeklausuren')}
            variant="ghost"
            size="small"
          >
            Alle ansehen
          </LearningButton>
        </div>
        <p className="text-gray-600 text-sm mb-4">
          Testen Sie Ihr Wissen mit realistischen Klausuren auf verschiedenen Schwierigkeitsstufen.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <LearningCardButton
            onClick={() => onViewChange && onViewChange('probeklausuren')}
            title="Anfänger"
            description="Grundlagen und erste Schritte"
            variant="success"
            icon={<div className="w-2 h-2 bg-green-500 rounded-full"></div>}
          />
          <LearningCardButton
            onClick={() => onViewChange && onViewChange('probeklausuren')}
            title="Fortgeschritten"
            description="Vertiefung und Anwendung"
            variant="warning"
            icon={<div className="w-2 h-2 bg-yellow-500 rounded-full"></div>}
          />
          <LearningCardButton
            onClick={() => onViewChange && onViewChange('probeklausuren')}
            title="Experte"
            description="Examensniveau"
            variant="danger"
            icon={<div className="w-2 h-2 bg-red-500 rounded-full"></div>}
          />
        </div>
      </div>

      {/* Coming Soon */}
      <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl p-6 border-2 border-gray-300">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Demnächst verfügbar</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-gradient-to-br from-red-100 to-red-50 rounded-lg mx-auto mb-3 flex items-center justify-center">
              <span className="text-2xl">🚔</span>
            </div>
            <p className="font-semibold text-gray-900">Strafrecht I</p>
            <p className="text-sm text-gray-600 mt-1">Allgemeiner Teil</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg mx-auto mb-3 flex items-center justify-center">
              <span className="text-2xl">🏛️</span>
            </div>
            <p className="font-semibold text-gray-900">Öffentliches Recht I</p>
            <p className="text-sm text-gray-600 mt-1">Staatsorganisationsrecht</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-green-50 rounded-lg mx-auto mb-3 flex items-center justify-center">
              <span className="text-2xl">📊</span>
            </div>
            <p className="font-semibold text-gray-900">Zivilrecht II</p>
            <p className="text-sm text-gray-600 mt-1">Schuldrecht</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningDashboard;