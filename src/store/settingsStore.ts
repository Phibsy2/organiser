import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User, NotificationSettings } from '../types';

interface SettingsState {
  // User profile
  user: User;
  
  // App settings
  theme: 'light' | 'dark' | 'auto';
  language: 'de' | 'en';
  firstDayOfWeek: 'monday' | 'sunday';
  
  // Notification settings
  notifications: NotificationSettings;
  
  // Work schedule
  workSchedule: {
    monday: { start: string; end: string; type: 'office' | 'home' };
    tuesday: { start: string; end: string; type: 'office' | 'home' };
    wednesday: { start: string; end: string; type: 'office' | 'home' };
    thursday: { start: string; end: string; type: 'office' | 'home' };
    friday: { start: string; end: string; type: 'office' | 'home' };
    saturday?: { start: string; end: string; type: 'office' | 'home' };
    sunday?: { start: string; end: string; type: 'office' | 'home' };
  };
  
  // Training preferences
  trainingPreferences: {
    preferredDays: string[];
    preferredTime: 'morning' | 'afternoon' | 'evening';
    homeGymAvailable: boolean;
    equipment: string[];
  };
  
  
  // Actions
  updateUser: (updates: Partial<User>) => void;
  updateNotifications: (updates: Partial<NotificationSettings>) => void;
  updateWorkSchedule: (day: string, schedule: { start: string; end: string; type: 'office' | 'home' }) => void;
  updateTrainingPreferences: (updates: Partial<SettingsState['trainingPreferences']>) => void;
  setTheme: (theme: 'light' | 'dark' | 'auto') => void;
  setLanguage: (language: 'de' | 'en') => void;
  requestNotificationPermission: () => Promise<boolean>;
}

const useSettingsStore = create<SettingsState>()(
  persist(
    (set, get) => ({
      // Initial state
      user: {
        name: '',
        weight: 92,
        height: 180,
        age: 25,
        gender: 'male',
        bodyFat: 23,
        muscleMass: 45,
        goals: {
          targetWeight: 87,
          targetBodyFat: 20,
          targetMuscleMass: 47,
          primaryGoal: 'lose_weight',
          weeklyTrainingSessions: 3,
          weeklyStudyHours: 10,
          dailyCalories: 2500
        }
      },
      
      theme: 'light',
      language: 'de',
      firstDayOfWeek: 'monday',
      
      notifications: {
        enabled: false,
        studyReminders: true,
        trainingReminders: true,
        dailyGoalReminders: true,
        sound: true
      },
      
      workSchedule: {
        monday: { start: '06:30', end: '15:30', type: 'home' },
        tuesday: { start: '06:30', end: '15:30', type: 'home' },
        wednesday: { start: '06:30', end: '15:30', type: 'home' },
        thursday: { start: '06:30', end: '15:30', type: 'home' },
        friday: { start: '06:30', end: '13:30', type: 'home' }
      },
      
      trainingPreferences: {
        preferredDays: ['monday', 'wednesday', 'friday'],
        preferredTime: 'afternoon',
        homeGymAvailable: true,
        equipment: []
      },
      

      // Actions
      updateUser: (updates) => set((state) => ({
        user: { ...state.user, ...updates }
      })),
      
      updateNotifications: (updates) => set((state) => ({
        notifications: { ...state.notifications, ...updates }
      })),
      
      updateWorkSchedule: (day, schedule) => set((state) => ({
        workSchedule: {
          ...state.workSchedule,
          [day]: schedule
        }
      })),
      
      updateTrainingPreferences: (updates) => set((state) => ({
        trainingPreferences: { ...state.trainingPreferences, ...updates }
      })),
      
      
      setTheme: (theme) => {
        set({ theme });
        // Apply theme to document
        if (theme === 'dark' || (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      },
      
      setLanguage: (language) => set({ language }),
      
      requestNotificationPermission: async () => {
        if (!('Notification' in window)) {
          console.log('This browser does not support notifications');
          return false;
        }
        
        if (Notification.permission === 'granted') {
          set((state) => ({
            notifications: { ...state.notifications, enabled: true }
          }));
          return true;
        }
        
        if (Notification.permission !== 'denied') {
          const permission = await Notification.requestPermission();
          const granted = permission === 'granted';
          set((state) => ({
            notifications: { ...state.notifications, enabled: granted }
          }));
          return granted;
        }
        
        return false;
      }
    }),
    {
      name: 'settings-storage'
    }
  )
);

export default useSettingsStore;