import { Status, TimeBlock } from './common';

export type TrainingType = 'upper' | 'cardio' | 'lower' | 'express' | 'full-body';
export type ExerciseCategory = 'strength' | 'cardio' | 'flexibility' | 'core';
export type ExerciseDifficulty = 'beginner' | 'intermediate' | 'advanced';

export interface Exercise {
  id: string;
  name: string;
  category: ExerciseCategory;
  muscleGroups: string[];
  equipment: string[];
  difficulty: ExerciseDifficulty;
  instructions?: string[];
  tips?: string[];
}

export interface WorkoutPlan {
  id: string;
  name: string;
  type: 'upper' | 'lower' | 'cardio' | 'full-body';
  exercises: PlannedExercise[];
  estimatedDuration: number; // minutes
  warmup: string[];
  cooldown: string[];
}

export interface PlannedExercise {
  exerciseId: string;
  sets: number;
  reps: string; // e.g., "8-12" or "30 sec"
  restBetweenSets: number; // seconds
  notes?: string;
}

export interface TrainingSession {
  id: string;
  date: Date;
  type: 'upper' | 'lower' | 'cardio' | 'full-body';
  workoutPlanId: string;
  timeBlock: TimeBlock;
  status: Status;
  completedExercises: CompletedExercise[];
  notes?: string;
  feeling?: 1 | 2 | 3 | 4 | 5; // 1-5 scale
  calories?: number;
}

export interface CompletedExercise {
  exerciseId: string;
  sets: CompletedSet[];
  notes?: string;
}

export interface CompletedSet {
  reps: number;
  weight?: number; // kg
  duration?: number; // seconds for timed exercises
  restTaken: number; // seconds
}

export interface ProgressMeasurement {
  id: string;
  date: Date;
  weight: number;
  bodyFat?: number;
  measurements?: {
    chest?: number;
    waist?: number;
    hips?: number;
    biceps?: number;
    thighs?: number;
  };
  photos?: string[]; // URLs or base64
  notes?: string;
}

export interface TrainingGoal {
  id: string;
  type: 'strength' | 'weight' | 'endurance' | 'body-composition';
  target: number;
  current: number;
  unit: string;
  deadline?: Date;
  status: Status;
}