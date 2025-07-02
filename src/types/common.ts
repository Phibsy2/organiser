export type Priority = 'low' | 'medium' | 'high';
export type Status = 'pending' | 'active' | 'completed';

export interface TimeBlock {
  start: string;
  end: string;
  duration: number; // in minutes
}

export interface ProgressStats {
  total: number;
  completed: number;
  percentage: number;
}

export interface Streak {
  current: number;
  longest: number;
  lastActivity: Date;
}

export interface NotificationSettings {
  enabled: boolean;
  studyReminders: boolean;
  trainingReminders: boolean;
  dailyGoalReminders: boolean;
  sound: boolean;
}

export interface User {
  name: string;
  weight: number; // in kg
  height: number; // in cm
  age: number; // in years
  gender: 'male' | 'female';
  bodyFat: number; // percentage
  muscleMass: number; // in kg
  goals: {
    targetWeight: number;
    targetBodyFat: number;
    targetMuscleMass: number;
    primaryGoal: 'lose_weight' | 'build_muscle' | 'maintain' | 'body_recomposition';
    weeklyStudyHours: number;
    weeklyTrainingSessions: number;
    dailyCalories: number;
  };
}