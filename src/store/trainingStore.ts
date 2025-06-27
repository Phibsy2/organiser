import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { 
  TrainingSession, 
  WorkoutPlan, 
  Exercise, 
  ProgressMeasurement,
  TrainingGoal,
  CompletedExercise
} from '../types';
import { exercisesDatabase } from '../data/exercises';

interface TrainingState {
  // Workout plans
  workoutPlans: WorkoutPlan[];
  activeWorkoutPlanId: string | null;
  
  // Exercises database
  exercises: Exercise[];
  
  // Sessions
  currentSession: TrainingSession | null;
  sessionHistory: TrainingSession[];
  
  // Progress tracking
  progressMeasurements: ProgressMeasurement[];
  trainingGoals: TrainingGoal[];
  
  // Stats
  weeklyStats: {
    sessionsCompleted: number;
    totalVolume: number; // kg
    caloriesBurned: number;
    trainingTime: number; // minutes
  };
  
  // Actions
  setWorkoutPlans: (plans: WorkoutPlan[]) => void;
  setActiveWorkoutPlan: (planId: string) => void;
  startTrainingSession: (workoutPlanId: string) => void;
  completeExercise: (completedExercise: CompletedExercise) => void;
  endTrainingSession: (feeling?: 1 | 2 | 3 | 4 | 5, notes?: string) => void;
  deleteTrainingSession: (sessionId: string) => void;
  addProgressMeasurement: (measurement: ProgressMeasurement) => void;
  addTrainingGoal: (goal: TrainingGoal) => void;
  updateTrainingGoal: (goalId: string, updates: Partial<TrainingGoal>) => void;
  getWeeklyTrainingSessions: () => number;
  getLastWorkoutForType: (type: string) => TrainingSession | undefined;
  getLastExercisePerformance: (exerciseId: string) => CompletedExercise | undefined;
  // CRUD for workout plans
  createWorkoutPlan: (plan: Omit<WorkoutPlan, 'id'>) => void;
  updateWorkoutPlan: (planId: string, updates: Partial<WorkoutPlan>) => void;
  deleteWorkoutPlan: (planId: string) => void;
  duplicateWorkoutPlan: (planId: string, newName: string) => void;
  // Exercise management
  createExercise: (exercise: Omit<Exercise, 'id'>) => void;
  deleteExercise: (exerciseId: string) => void;
}

const useTrainingStore = create<TrainingState>()(
  persist(
    (set, get) => ({
      // Initial state
      workoutPlans: [
        {
          id: 'upper-body-1',
          name: 'Oberkörper Training',
          type: 'upper',
          exercises: [
            { exerciseId: 'bench-press', sets: 3, reps: '8-12', restBetweenSets: 120 },
            { exerciseId: 'lat-pulldown', sets: 3, reps: '8-12', restBetweenSets: 90 },
            { exerciseId: 'shoulder-press', sets: 3, reps: '10-12', restBetweenSets: 90 },
            { exerciseId: 'rowing', sets: 3, reps: '10-12', restBetweenSets: 90 },
            { exerciseId: 'bicep-curls', sets: 2, reps: '12-15', restBetweenSets: 60 },
            { exerciseId: 'tricep-dips', sets: 2, reps: '12-15', restBetweenSets: 60 },
            { exerciseId: 'planks', sets: 3, reps: '30-60 sec', restBetweenSets: 30 }
          ],
          estimatedDuration: 60,
          warmup: ['5 Min Cardio', 'Schulterkreisen', 'Armkreisen'],
          cooldown: ['Brust-Dehnung', 'Schulter-Dehnung', 'Trizeps-Dehnung']
        },
        {
          id: 'cardio-core-1',
          name: 'Cardio & Core',
          type: 'cardio',
          exercises: [],
          estimatedDuration: 60,
          warmup: ['Gelenksmobilisation', 'Dynamisches Dehnen'],
          cooldown: ['Statisches Dehnen', 'Entspannung']
        },
        {
          id: 'lower-body-1',
          name: 'Unterkörper Training',
          type: 'lower',
          exercises: [
            { exerciseId: 'squats', sets: 3, reps: '10-12', restBetweenSets: 180 },
            { exerciseId: 'deadlifts', sets: 3, reps: '8-10', restBetweenSets: 180 },
            { exerciseId: 'lunges', sets: 3, reps: '12 pro Bein', restBetweenSets: 90 },
            { exerciseId: 'leg-press', sets: 3, reps: '12-15', restBetweenSets: 90 },
            { exerciseId: 'calf-raises', sets: 3, reps: '15-20', restBetweenSets: 60 }
          ],
          estimatedDuration: 60,
          warmup: ['5 Min Cardio', 'Hüftkreisen', 'Kniehebeläufe'],
          cooldown: ['Quadrizeps-Dehnung', 'Hamstrings-Dehnung', 'Wadendehnung']
        }
      ],
      activeWorkoutPlanId: null,
      exercises: exercisesDatabase,
      currentSession: null,
      sessionHistory: [],
      progressMeasurements: [],
      trainingGoals: [
        {
          id: 'weight-loss',
          type: 'weight',
          target: 87,
          current: 92,
          unit: 'kg',
          deadline: new Date('2025-03-31'),
          status: 'pending'
        },
        {
          id: 'body-fat',
          type: 'body-composition',
          target: 20,
          current: 23,
          unit: '%',
          deadline: new Date('2025-03-31'),
          status: 'pending'
        }
      ],
      weeklyStats: {
        sessionsCompleted: 0,
        totalVolume: 0,
        caloriesBurned: 0,
        trainingTime: 0
      },

      // Actions
      setWorkoutPlans: (plans) => set({ workoutPlans: plans }),
      
      setActiveWorkoutPlan: (planId) => set({ activeWorkoutPlanId: planId }),
      
      startTrainingSession: (workoutPlanId) => {
        const plan = get().workoutPlans.find(p => p.id === workoutPlanId);
        if (!plan) return;
        
        const session: TrainingSession = {
          id: `session-${Date.now()}`,
          date: new Date(),
          type: plan.type,
          workoutPlanId,
          timeBlock: {
            start: new Date().toISOString().split('T')[1].slice(0, 5),
            end: '',
            duration: 0
          },
          status: 'active',
          completedExercises: []
        };
        
        set({ currentSession: session });
      },
      
      completeExercise: (completedExercise) => set((state) => {
        if (!state.currentSession) return state;
        
        const existingIndex = state.currentSession.completedExercises.findIndex(
          ex => ex.exerciseId === completedExercise.exerciseId
        );
        
        let updatedExercises;
        if (existingIndex >= 0) {
          updatedExercises = [...state.currentSession.completedExercises];
          updatedExercises[existingIndex] = completedExercise;
        } else {
          updatedExercises = [...state.currentSession.completedExercises, completedExercise];
        }
        
        return {
          currentSession: {
            ...state.currentSession,
            completedExercises: updatedExercises
          }
        };
      }),
      
      endTrainingSession: (feeling, notes) => set((state) => {
        if (!state.currentSession) return state;
        
        const endTime = new Date();
        const [startHour, startMin] = state.currentSession.timeBlock.start.split(':').map(Number);
        const duration = Math.floor(
          (endTime.getHours() * 60 + endTime.getMinutes()) - (startHour * 60 + startMin)
        );
        
        // Calculate calories (rough estimate)
        const calories = Math.round(duration * 7); // ~7 cal/min for strength training
        
        // Calculate total volume
        const totalVolume = state.currentSession.completedExercises.reduce((total, exercise) => {
          return total + exercise.sets.reduce((exerciseTotal, set) => {
            return exerciseTotal + (set.reps * (set.weight || 0));
          }, 0);
        }, 0);
        
        const completedSession: TrainingSession = {
          ...state.currentSession,
          timeBlock: {
            ...state.currentSession.timeBlock,
            end: endTime.toISOString().split('T')[1].slice(0, 5),
            duration
          },
          status: 'completed',
          feeling,
          notes,
          calories
        };
        
        // Update weekly stats
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
        
        const recentSessions = [...state.sessionHistory, completedSession]
          .filter(session => new Date(session.date) > oneWeekAgo);
        
        const weeklyStats = {
          sessionsCompleted: recentSessions.length,
          totalVolume: recentSessions.reduce((total, session) => {
            return total + session.completedExercises.reduce((sessionTotal, exercise) => {
              return sessionTotal + exercise.sets.reduce((exerciseTotal, set) => {
                return exerciseTotal + (set.reps * (set.weight || 0));
              }, 0);
            }, 0);
          }, 0),
          caloriesBurned: recentSessions.reduce((total, session) => total + (session.calories || 0), 0),
          trainingTime: recentSessions.reduce((total, session) => total + session.timeBlock.duration, 0)
        };
        
        return {
          currentSession: null,
          sessionHistory: [...state.sessionHistory, completedSession],
          weeklyStats
        };
      }),
      
      deleteTrainingSession: (sessionId) => set((state) => {
        const updatedHistory = state.sessionHistory.filter(s => s.id !== sessionId);
        
        // Recalculate weekly stats
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
        
        const recentSessions = updatedHistory
          .filter(session => new Date(session.date) > oneWeekAgo);
        
        const weeklyStats = {
          sessionsCompleted: recentSessions.length,
          totalVolume: recentSessions.reduce((total, session) => {
            return total + session.completedExercises.reduce((sessionTotal, exercise) => {
              return sessionTotal + exercise.sets.reduce((exerciseTotal, set) => {
                return exerciseTotal + (set.reps * (set.weight || 0));
              }, 0);
            }, 0);
          }, 0),
          caloriesBurned: recentSessions.reduce((total, session) => total + (session.calories || 0), 0),
          trainingTime: recentSessions.reduce((total, session) => total + session.timeBlock.duration, 0)
        };
        
        return {
          sessionHistory: updatedHistory,
          weeklyStats
        };
      }),
      
      addProgressMeasurement: (measurement) => set((state) => ({
        progressMeasurements: [...state.progressMeasurements, measurement]
      })),
      
      addTrainingGoal: (goal) => set((state) => ({
        trainingGoals: [...state.trainingGoals, goal]
      })),
      
      updateTrainingGoal: (goalId, updates) => set((state) => ({
        trainingGoals: state.trainingGoals.map(goal =>
          goal.id === goalId ? { ...goal, ...updates } : goal
        )
      })),
      
      getWeeklyTrainingSessions: () => {
        const state = get();
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
        
        return state.sessionHistory
          .filter(session => new Date(session.date) > oneWeekAgo)
          .length;
      },
      
      getLastWorkoutForType: (type) => {
        const state = get();
        return state.sessionHistory
          .filter(session => session.type === type)
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];
      },
      
      getLastExercisePerformance: (exerciseId) => {
        const state = get();
        // Go through session history from newest to oldest
        const sortedSessions = [...state.sessionHistory]
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        
        for (const session of sortedSessions) {
          const exercise = session.completedExercises.find(ex => ex.exerciseId === exerciseId);
          if (exercise) {
            return exercise;
          }
        }
        return undefined;
      },
      
      // CRUD operations for workout plans
      createWorkoutPlan: (plan) => set((state) => {
        const newPlan: WorkoutPlan = {
          ...plan,
          id: `plan-${Date.now()}`
        };
        return {
          workoutPlans: [...state.workoutPlans, newPlan]
        };
      }),
      
      updateWorkoutPlan: (planId, updates) => set((state) => ({
        workoutPlans: state.workoutPlans.map(plan =>
          plan.id === planId ? { ...plan, ...updates } : plan
        )
      })),
      
      deleteWorkoutPlan: (planId) => set((state) => ({
        workoutPlans: state.workoutPlans.filter(plan => plan.id !== planId),
        activeWorkoutPlanId: state.activeWorkoutPlanId === planId ? null : state.activeWorkoutPlanId
      })),
      
      duplicateWorkoutPlan: (planId, newName) => set((state) => {
        const originalPlan = state.workoutPlans.find(p => p.id === planId);
        if (!originalPlan) return state;
        
        const duplicatedPlan: WorkoutPlan = {
          ...originalPlan,
          id: `plan-${Date.now()}`,
          name: newName
        };
        
        return {
          workoutPlans: [...state.workoutPlans, duplicatedPlan]
        };
      }),
      
      // Exercise management
      createExercise: (exercise) => set((state) => {
        const newExercise: Exercise = {
          ...exercise,
          id: `custom-${Date.now()}`
        };
        return {
          exercises: [...state.exercises, newExercise]
        };
      }),
      
      deleteExercise: (exerciseId) => set((state) => ({
        exercises: state.exercises.filter(ex => ex.id !== exerciseId)
      }))
    }),
    {
      name: 'training-storage'
    }
  )
);

export default useTrainingStore;