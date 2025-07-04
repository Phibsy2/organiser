import React from 'react';
import {
  PlayIcon,
  BookOpenIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  PlusIcon,
  ClockIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';

interface QuickAction {
  id: string;
  label: string;
  icon: React.ComponentType<any>;
  color: string;
  onClick: () => void;
}

interface QuickActionsProps {
  onNavigate?: (tab: string) => void;
}

const QuickActions: React.FC<QuickActionsProps> = ({ onNavigate }) => {
  const actions: QuickAction[] = [
    {
      id: 'start-training',
      label: 'Training beginnen',
      icon: PlayIcon,
      color: 'bg-red-500 hover:bg-red-600',
      onClick: () => onNavigate?.('training')
    },
    {
      id: 'log-nutrition',
      label: 'Ernährung',
      icon: BookOpenIcon,
      color: 'bg-purple-500 hover:bg-purple-600',
      onClick: () => onNavigate?.('nutrition')
    },
    {
      id: 'learning',
      label: 'Jura lernen',
      icon: AcademicCapIcon,
      color: 'bg-indigo-500 hover:bg-indigo-600',
      onClick: () => onNavigate?.('learning')
    },
    {
      id: 'log-progress',
      label: 'Fortschritt',
      icon: ChartBarIcon,
      color: 'bg-green-500 hover:bg-green-600',
      onClick: () => onNavigate?.('progress')
    },
    {
      id: 'timer',
      label: 'Timer',
      icon: ClockIcon,
      color: 'bg-orange-500 hover:bg-orange-600',
      onClick: () => alert('Timer-Funktion kommt bald!')
    },
    {
      id: 'settings',
      label: 'Einstellungen',
      icon: Cog6ToothIcon,
      color: 'bg-gray-500 hover:bg-gray-600',
      onClick: () => onNavigate?.('settings')
    }
  ];

  return (
    <div className="px-4 py-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Schnellzugriff</h3>
      <div className="grid grid-cols-3 gap-3">
        {actions.map((action) => (
          <button
            key={action.id}
            onClick={action.onClick}
            className={`${action.color} text-white rounded-xl p-4 transition-colors duration-200 shadow-sm hover:shadow-md`}
          >
            <action.icon className="w-6 h-6 mx-auto mb-2" />
            <span className="text-xs font-medium">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;