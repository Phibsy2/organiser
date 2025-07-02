import React from 'react';
import {
  ChartBarIcon,
  TrophyIcon,
  ClockIcon,
  ScaleIcon
} from '@heroicons/react/24/outline';

interface ProgressItem {
  id: string;
  label: string;
  value: string | number;
  unit?: string;
  icon: React.ComponentType<any>;
  color: string;
  progress?: number; // percentage
}

const ProgressSummary: React.FC = () => {
  const progressItems: ProgressItem[] = [
    {
      id: 'weekly-training',
      label: 'Wochentraining',
      value: 2,
      unit: 'von 3',
      icon: TrophyIcon,
      color: 'text-red-600',
      progress: 66
    },
    {
      id: 'weight-progress',
      label: 'Gewicht',
      value: -1.2,
      unit: 'kg',
      icon: ScaleIcon,
      color: 'text-green-600',
      progress: 24
    },
    {
      id: 'calories',
      label: 'Kalorien heute',
      value: 1850,
      unit: 'kcal',
      icon: ChartBarIcon,
      color: 'text-blue-600',
      progress: 75
    },
    {
      id: 'weekly-activity',
      label: 'Aktivität',
      value: 5,
      unit: 'Tage',
      icon: ClockIcon,
      color: 'text-purple-600',
      progress: 71
    }
  ];

  return (
    <div className="px-4 py-6 bg-white rounded-t-3xl shadow-lg mt-auto">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Wochenübersicht</h3>
      <div className="space-y-4">
        {progressItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between">
            <div className="flex items-center flex-1">
              <div className={`p-2 rounded-lg bg-gray-50 ${item.color}`}>
                <item.icon className="w-5 h-5" />
              </div>
              <div className="ml-3 flex-1">
                <p className="text-sm text-gray-600">{item.label}</p>
                <p className="text-lg font-semibold text-gray-900">
                  {item.value} {item.unit && <span className="text-sm font-normal text-gray-600">{item.unit}</span>}
                </p>
                {item.progress !== undefined && (
                  <div className="mt-1 w-full bg-gray-200 rounded-full h-1.5">
                    <div
                      className={`${item.color.replace('text-', 'bg-')} h-1.5 rounded-full transition-all duration-300`}
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressSummary;