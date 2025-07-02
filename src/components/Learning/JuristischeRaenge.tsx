import React from 'react';
import { TrophyIcon, AcademicCapIcon, ScaleIcon } from '@heroicons/react/24/outline';

interface JuristischeRaengeProps {
  currentLevel: number;
  currentXP: number;
  nextLevelXP: number;
}

const JuristischeRaenge: React.FC<JuristischeRaengeProps> = ({ currentLevel, currentXP, nextLevelXP }) => {
  const getRangInfo = (level: number) => {
    if (level <= 10) return { 
      title: 'Jurastudent (Erstes Semester)', 
      icon: '📚', 
      color: 'bg-blue-500',
      description: 'Du lernst die Grundlagen der Rechtswissenschaft'
    };
    if (level <= 20) return { 
      title: 'Fortgeschrittener Student', 
      icon: '📖', 
      color: 'bg-green-500',
      description: 'Du beherrschst die juristische Methodik'
    };
    if (level <= 30) return { 
      title: 'Examenskandidat', 
      icon: '🎓', 
      color: 'bg-purple-500',
      description: 'Du bereitest dich auf das Staatsexamen vor'
    };
    if (level <= 40) return { 
      title: 'Referendar', 
      icon: '⚖️', 
      color: 'bg-orange-500',
      description: 'Du sammelst praktische Erfahrungen'
    };
    if (level <= 50) return { 
      title: 'Assessor', 
      icon: '🏛️', 
      color: 'bg-red-500',
      description: 'Du hast beide Staatsexamen bestanden'
    };
    return { 
      title: 'Volljurist', 
      icon: '👨‍⚖️', 
      color: 'bg-gold-500',
      description: 'Du bist ein Meister des Rechts'
    };
  };

  const rangInfo = getRangInfo(currentLevel);
  const progress = (currentXP / nextLevelXP) * 100;

  // Berechne nächsten Meilenstein
  const nextMilestone = Math.ceil(currentLevel / 10) * 10;
  const milestoneLevels = [10, 20, 30, 40, 50];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Juristischer Rang</h3>
          <p className="text-sm text-gray-600">{rangInfo.description}</p>
        </div>
        <div className="text-4xl">{rangInfo.icon}</div>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-2xl font-bold text-gray-900">{rangInfo.title}</span>
          <span className="text-lg font-medium text-gray-600">Level {currentLevel}</span>
        </div>
        
        <div className="relative">
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div 
              className={`${rangInfo.color} h-4 rounded-full transition-all duration-500`}
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between mt-1">
            <span className="text-xs text-gray-600">{currentXP} XP</span>
            <span className="text-xs text-gray-600">{nextLevelXP} XP</span>
          </div>
        </div>
      </div>

      {/* Meilensteine */}
      <div className="border-t pt-4">
        <h4 className="text-sm font-medium text-gray-700 mb-3">Karriere-Meilensteine</h4>
        <div className="flex justify-between">
          {milestoneLevels.map((milestone) => {
            const achieved = currentLevel >= milestone;
            const milestoneInfo = getRangInfo(milestone);
            
            return (
              <div 
                key={milestone}
                className={`flex flex-col items-center ${achieved ? 'opacity-100' : 'opacity-40'}`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl ${
                  achieved ? milestoneInfo.color : 'bg-gray-300'
                }`}>
                  {achieved ? milestoneInfo.icon : '🔒'}
                </div>
                <span className="text-xs mt-1">Lvl {milestone}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Nächster Rang */}
      {currentLevel < 50 && (
        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">
            Noch <span className="font-semibold">{nextMilestone - currentLevel}</span> Level bis zum nächsten Rang!
          </p>
        </div>
      )}

      {/* Spezielle Achievements für Ränge */}
      <div className="mt-4 grid grid-cols-3 gap-2">
        <div className="text-center p-2 bg-indigo-50 rounded">
          <ScaleIcon className="w-6 h-6 mx-auto mb-1 text-indigo-600" />
          <p className="text-xs text-gray-700">Gutachten-meister</p>
        </div>
        <div className="text-center p-2 bg-green-50 rounded">
          <AcademicCapIcon className="w-6 h-6 mx-auto mb-1 text-green-600" />
          <p className="text-xs text-gray-700">Methoden-experte</p>
        </div>
        <div className="text-center p-2 bg-purple-50 rounded">
          <TrophyIcon className="w-6 h-6 mx-auto mb-1 text-purple-600" />
          <p className="text-xs text-gray-700">Fall-Champion</p>
        </div>
      </div>
    </div>
  );
};

export default JuristischeRaenge;