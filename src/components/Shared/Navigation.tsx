import React from 'react';
import {
  HomeIcon,
  BookOpenIcon,
  HeartIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  CakeIcon
} from '@heroicons/react/24/outline';
import {
  HomeIcon as HomeIconSolid,
  BookOpenIcon as BookOpenIconSolid,
  HeartIcon as HeartIconSolid,
  ChartBarIcon as ChartBarIconSolid,
  Cog6ToothIcon as Cog6ToothIconSolid,
  CakeIcon as CakeIconSolid
} from '@heroicons/react/24/solid';

export type NavigationTab = 'dashboard' | 'study' | 'training' | 'nutrition' | 'progress' | 'settings';

interface NavigationProps {
  activeTab: NavigationTab;
  onTabChange: (tab: NavigationTab) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    {
      id: 'dashboard' as NavigationTab,
      label: 'Home',
      icon: HomeIcon,
      iconActive: HomeIconSolid
    },
    {
      id: 'study' as NavigationTab,
      label: 'Studium',
      icon: BookOpenIcon,
      iconActive: BookOpenIconSolid
    },
    {
      id: 'training' as NavigationTab,
      label: 'Training',
      icon: HeartIcon,
      iconActive: HeartIconSolid
    },
    {
      id: 'nutrition' as NavigationTab,
      label: 'Ernährung',
      icon: CakeIcon,
      iconActive: CakeIconSolid
    },
    {
      id: 'progress' as NavigationTab,
      label: 'Fortschritt',
      icon: ChartBarIcon,
      iconActive: ChartBarIconSolid
    },
    {
      id: 'settings' as NavigationTab,
      label: 'Einstellungen',
      icon: Cog6ToothIcon,
      iconActive: Cog6ToothIconSolid
    }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-2 pb-safe">
      <div className="flex justify-around items-center h-16">
        {tabs.map(tab => {
          const isActive = activeTab === tab.id;
          const Icon = isActive ? tab.iconActive : tab.icon;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center justify-center flex-1 h-full transition-colors duration-200 ${
                isActive ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Icon className="w-6 h-6 mb-1" />
              <span className="text-xs font-medium">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;