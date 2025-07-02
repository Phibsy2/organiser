import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
  LearningModule,
  LearningUnit,
  ModuleProgress,
  UnitProgress,
  LearningSession,
  UserLearningProfile,
  ExerciseAttempt,
  RecommendedContent,
  LearningStreak,
  UserAchievement,
  Achievement,
  DifficultyLevel,
  LearningStyle,
  Mnemonic,
  DefinitionWithMnemonic,
  MnemonicType
} from '../types/learning';

interface LearningState {
  // Module Management
  availableModules: LearningModule[];
  enrolledModules: string[];
  currentModule: LearningModule | null;
  currentUnit: LearningUnit | null;
  
  // Progress Tracking
  moduleProgress: Record<string, ModuleProgress>;
  unitProgress: Record<string, UnitProgress>;
  overallProgress: {
    totalXP: number;
    level: number;
    modulesCompleted: number;
    unitsCompleted: number;
    exercisesSolved: number;
    totalTimeSpent: number; // minutes
  };
  
  // Learning Session
  activeSession: LearningSession | null;
  sessionHistory: LearningSession[];
  
  // User Profile
  learningProfile: UserLearningProfile | null;
  recommendedContent: RecommendedContent[];
  
  // Gamification
  achievements: Achievement[];
  userAchievements: UserAchievement[];
  streak: LearningStreak;
  
  // Mnemonics
  mnemonics: Record<string, Mnemonic>;
  definitions: DefinitionWithMnemonic[];
  
  // Actions
  initializeLearning: () => void;
  enrollInModule: (moduleId: string) => Promise<void>;
  startLearningUnit: (unitId: string) => void;
  completeExercise: (exerciseId: string, answer: any) => Promise<ExerciseAttempt>;
  updateProgress: (unitId: string, progress: Partial<UnitProgress>) => void;
  endSession: () => void;
  generateRecommendations: () => void;
  checkAchievements: () => void;
  updateStreak: () => void;
  setLearningProfile: (profile: Partial<UserLearningProfile>) => void;
  calculateLevel: (xp: number) => number;
  getXPForNextLevel: (currentLevel: number) => { current: number; required: number; total: number };
  
  // Mnemonic Actions
  saveMnemonic: (definitionId: string, mnemonic: Omit<Mnemonic, 'id' | 'createdAt'>) => void;
  updateMnemonicEffectiveness: (mnemonicId: string, effectiveness: number) => void;
  getDefinitionsForUnit: (unitId: string) => DefinitionWithMnemonic[];
  getMnemonicStats: () => { total: number; byType: Record<MnemonicType, number>; avgEffectiveness: number };
}

const useLearningStore = create<LearningState>()(
  persist(
    (set, get) => ({
      // Initial state
      availableModules: [],
      enrolledModules: [],
      currentModule: null,
      currentUnit: null,
      moduleProgress: {},
      unitProgress: {},
      overallProgress: {
        totalXP: 0,
        level: 1,
        modulesCompleted: 0,
        unitsCompleted: 0,
        exercisesSolved: 0,
        totalTimeSpent: 0
      },
      activeSession: null,
      sessionHistory: [],
      learningProfile: null,
      recommendedContent: [],
      achievements: [],
      userAchievements: [],
      streak: {
        current: 0,
        longest: 0,
        lastActiveDate: new Date()
      },
      mnemonics: {},
      definitions: [],

      // Initialize learning system
      initializeLearning: () => {
        // Initialize default learning profile if not exists
        if (!get().learningProfile) {
          set({
            learningProfile: {
              userId: 'user-1', // Would come from auth
              learningStyle: 'mixed',
              knowledgeLevel: {},
              preferences: {
                preferredSessionDuration: 25, // Pomodoro default
                preferredDifficulty: 'intermediate',
                notificationSettings: {
                  dailyReminders: true,
                  streakReminders: true,
                  achievementNotifications: true,
                  reminderTime: '19:00'
                },
                studySchedule: {
                  preferredDays: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
                  preferredTimeSlots: []
                }
              },
              progressHistory: [],
              strengths: [],
              weaknesses: []
            }
          });
        }

        // Load achievements
        set({
          achievements: getDefaultAchievements()
        });

        // Update streak
        get().updateStreak();
      },

      // Enroll in a module
      enrollInModule: async (moduleId: string) => {
        const { enrolledModules, availableModules } = get();
        
        if (!enrolledModules.includes(moduleId)) {
          const module = availableModules.find(m => m.id === moduleId);
          if (!module) return;

          // Create initial module progress
          const progress: ModuleProgress = {
            moduleId,
            userId: 'user-1',
            enrolledAt: new Date(),
            completedUnits: [],
            overallProgress: 0,
            totalTimeSpent: 0,
            lastAccessedAt: new Date()
          };

          set(state => ({
            enrolledModules: [...state.enrolledModules, moduleId],
            moduleProgress: {
              ...state.moduleProgress,
              [moduleId]: progress
            }
          }));

          // Award enrollment achievement
          get().checkAchievements();
        }
      },

      // Start a learning unit
      startLearningUnit: (unitId: string) => {
        const { availableModules, activeSession } = get();
        
        // End previous session if exists
        if (activeSession) {
          get().endSession();
        }

        // Find the unit
        let targetUnit: LearningUnit | null = null;
        let targetModule: LearningModule | null = null;
        
        for (const module of availableModules) {
          const unit = module.units.find(u => u.id === unitId);
          if (unit) {
            targetUnit = unit;
            targetModule = module;
            break;
          }
        }

        if (!targetUnit || !targetModule) return;

        // Create new session
        const session: LearningSession = {
          id: `session-${Date.now()}`,
          userId: 'user-1',
          moduleId: targetModule.id,
          unitId,
          startTime: new Date(),
          exercisesAttempted: [],
          notesCreated: [],
          score: 0
        };

        // Initialize unit progress if not exists
        if (!get().unitProgress[unitId]) {
          set(state => ({
            unitProgress: {
              ...state.unitProgress,
              [unitId]: {
                unitId,
                userId: 'user-1',
                startedAt: new Date(),
                masteryScore: 0,
                exercisesCompleted: [],
                attempts: 0,
                timeSpent: 0
              }
            }
          }));
        }

        set({
          currentModule: targetModule,
          currentUnit: targetUnit,
          activeSession: session
        });
      },

      // Complete an exercise
      completeExercise: async (exerciseId: string, answer: any) => {
        const { activeSession, currentUnit } = get();
        
        if (!activeSession || !currentUnit) {
          throw new Error('No active session');
        }

        const exercise = currentUnit.exercises.find(e => e.id === exerciseId);
        if (!exercise) {
          throw new Error('Exercise not found');
        }

        // Evaluate answer (simplified for now)
        const isCorrect = evaluateAnswer(exercise, answer);
        const score = isCorrect ? exercise.points : 0;

        const attempt: ExerciseAttempt = {
          exerciseId,
          attemptNumber: activeSession.exercisesAttempted.filter(a => a.exerciseId === exerciseId).length + 1,
          answer,
          isCorrect,
          score,
          timeSpent: 0, // Would be tracked by UI
          hintsUsed: [],
          timestamp: new Date()
        };

        // Update session
        set(state => {
          if (!state.activeSession) return state;
          
          return {
            activeSession: {
              ...state.activeSession,
              exercisesAttempted: [...state.activeSession.exercisesAttempted, attempt],
              score: state.activeSession.score + score
            }
          };
        });

        // Update unit progress
        const unitProgress = get().unitProgress[currentUnit.id];
        if (unitProgress && isCorrect && !unitProgress.exercisesCompleted.includes(exerciseId)) {
          const newCompletedExercises = [...unitProgress.exercisesCompleted, exerciseId];
          const newMasteryScore = (newCompletedExercises.length / currentUnit.exercises.length) * 100;
          
          get().updateProgress(currentUnit.id, {
            exercisesCompleted: newCompletedExercises,
            masteryScore: newMasteryScore
          });

          // Award XP
          set(state => ({
            overallProgress: {
              ...state.overallProgress,
              totalXP: state.overallProgress.totalXP + score,
              exercisesSolved: state.overallProgress.exercisesSolved + 1
            }
          }));

          // Check for level up
          const newLevel = get().calculateLevel(get().overallProgress.totalXP);
          if (newLevel > get().overallProgress.level) {
            set(state => ({
              overallProgress: {
                ...state.overallProgress,
                level: newLevel
              }
            }));
          }

          // Check achievements
          get().checkAchievements();
        }

        return attempt;
      },

      // Update progress
      updateProgress: (unitId: string, progress: Partial<UnitProgress>) => {
        set(state => ({
          unitProgress: {
            ...state.unitProgress,
            [unitId]: {
              ...state.unitProgress[unitId],
              ...progress
            }
          }
        }));

        // Check if unit is completed
        const unitProgress = get().unitProgress[unitId];
        const currentUnit = get().currentUnit;
        
        if (unitProgress && currentUnit && 
            unitProgress.masteryScore >= currentUnit.requiredMastery &&
            !unitProgress.completedAt) {
          
          // Mark unit as completed
          set(state => ({
            unitProgress: {
              ...state.unitProgress,
              [unitId]: {
                ...state.unitProgress[unitId],
                completedAt: new Date()
              }
            },
            overallProgress: {
              ...state.overallProgress,
              unitsCompleted: state.overallProgress.unitsCompleted + 1
            }
          }));

          // Update module progress
          const moduleId = currentUnit.moduleId;
          const moduleProgress = get().moduleProgress[moduleId];
          if (moduleProgress && !moduleProgress.completedUnits.includes(unitId)) {
            const module = get().availableModules.find(m => m.id === moduleId);
            if (module) {
              const newCompletedUnits = [...moduleProgress.completedUnits, unitId];
              const newOverallProgress = (newCompletedUnits.length / module.units.length) * 100;
              
              set(state => ({
                moduleProgress: {
                  ...state.moduleProgress,
                  [moduleId]: {
                    ...state.moduleProgress[moduleId],
                    completedUnits: newCompletedUnits,
                    overallProgress: newOverallProgress,
                    lastAccessedAt: new Date()
                  }
                }
              }));

              // Check if module is completed
              if (newCompletedUnits.length === module.units.length) {
                set(state => ({
                  overallProgress: {
                    ...state.overallProgress,
                    modulesCompleted: state.overallProgress.modulesCompleted + 1
                  },
                  moduleProgress: {
                    ...state.moduleProgress,
                    [moduleId]: {
                      ...state.moduleProgress[moduleId],
                      certificateEarned: true
                    }
                  }
                }));
              }
            }
          }
        }
      },

      // End current session
      endSession: () => {
        const { activeSession } = get();
        if (!activeSession) return;

        const endTime = new Date();
        const duration = Math.floor((endTime.getTime() - activeSession.startTime.getTime()) / 1000 / 60);

        // Update session
        const completedSession: LearningSession = {
          ...activeSession,
          endTime
        };

        // Update states
        set(state => ({
          activeSession: null,
          sessionHistory: [...state.sessionHistory, completedSession],
          overallProgress: {
            ...state.overallProgress,
            totalTimeSpent: state.overallProgress.totalTimeSpent + duration
          }
        }));

        // Update unit time spent
        if (activeSession.unitId) {
          const unitProgress = get().unitProgress[activeSession.unitId];
          if (unitProgress) {
            set(state => ({
              unitProgress: {
                ...state.unitProgress,
                [activeSession.unitId]: {
                  ...state.unitProgress[activeSession.unitId],
                  timeSpent: unitProgress.timeSpent + duration
                }
              }
            }));
          }
        }

        // Update module time spent
        if (activeSession.moduleId) {
          const moduleProgress = get().moduleProgress[activeSession.moduleId];
          if (moduleProgress) {
            set(state => ({
              moduleProgress: {
                ...state.moduleProgress,
                [activeSession.moduleId]: {
                  ...state.moduleProgress[activeSession.moduleId],
                  totalTimeSpent: moduleProgress.totalTimeSpent + duration,
                  lastAccessedAt: new Date()
                }
              }
            }));
          }
        }

        // Update streak
        get().updateStreak();
      },

      // Generate content recommendations
      generateRecommendations: () => {
        const { unitProgress, moduleProgress, learningProfile } = get();
        const recommendations: RecommendedContent[] = [];

        // Simple recommendation logic for MVP
        // 1. Recommend incomplete units from enrolled modules
        Object.values(moduleProgress).forEach(mp => {
          if (mp.overallProgress < 100) {
            const module = get().availableModules.find(m => m.id === mp.moduleId);
            if (module) {
              const incompleteUnit = module.units.find(u => 
                !mp.completedUnits.includes(u.id)
              );
              if (incompleteUnit) {
                recommendations.push({
                  contentId: incompleteUnit.id,
                  contentType: 'unit',
                  reason: 'Nächste Lerneinheit in Ihrem Modul',
                  priority: 'high',
                  estimatedBenefit: 90
                });
              }
            }
          }
        });

        // 2. Recommend practice for weak areas
        Object.entries(unitProgress).forEach(([unitId, up]) => {
          if (up.masteryScore < 70 && up.completedAt) {
            recommendations.push({
              contentId: unitId,
              contentType: 'exercise',
              reason: 'Verstärkung empfohlen',
              priority: 'medium',
              estimatedBenefit: 70
            });
          }
        });

        set({ recommendedContent: recommendations.slice(0, 5) }); // Top 5 recommendations
      },

      // Check and award achievements
      checkAchievements: () => {
        const { achievements, userAchievements, overallProgress, streak } = get();
        
        achievements.forEach(achievement => {
          // Skip if already earned
          if (userAchievements.find(ua => ua.achievementId === achievement.id)) {
            return;
          }

          let earned = false;
          let progress = 0;

          switch (achievement.criteria.type) {
            case 'units_completed':
              progress = (overallProgress.unitsCompleted / achievement.criteria.target) * 100;
              earned = overallProgress.unitsCompleted >= achievement.criteria.target;
              break;
              
            case 'streak':
              progress = (streak.current / achievement.criteria.target) * 100;
              earned = streak.current >= achievement.criteria.target;
              break;
              
            case 'exercises_solved':
              progress = (overallProgress.exercisesSolved / achievement.criteria.target) * 100;
              earned = overallProgress.exercisesSolved >= achievement.criteria.target;
              break;
              
            case 'time_spent':
              progress = (overallProgress.totalTimeSpent / achievement.criteria.target) * 100;
              earned = overallProgress.totalTimeSpent >= achievement.criteria.target;
              break;
          }

          if (earned) {
            set(state => ({
              userAchievements: [...state.userAchievements, {
                achievementId: achievement.id,
                earnedAt: new Date(),
                progress: 100
              }],
              overallProgress: {
                ...state.overallProgress,
                totalXP: state.overallProgress.totalXP + achievement.xpReward
              }
            }));
          }
        });
      },

      // Update learning streak
      updateStreak: () => {
        const { sessionHistory, streak } = get();
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        const lastActive = new Date(streak.lastActiveDate);
        lastActive.setHours(0, 0, 0, 0);
        
        const daysSinceLastActive = Math.floor((today.getTime() - lastActive.getTime()) / (1000 * 60 * 60 * 24));
        
        // Check if user was active today
        const wasActiveToday = sessionHistory.some(session => {
          const sessionDate = new Date(session.startTime);
          sessionDate.setHours(0, 0, 0, 0);
          return sessionDate.getTime() === today.getTime();
        });

        if (wasActiveToday) {
          if (daysSinceLastActive === 0) {
            // Already counted today
            return;
          } else if (daysSinceLastActive === 1) {
            // Consecutive day
            set(state => ({
              streak: {
                current: state.streak.current + 1,
                longest: Math.max(state.streak.longest, state.streak.current + 1),
                lastActiveDate: new Date()
              }
            }));
          } else {
            // Streak broken, start new
            set({
              streak: {
                current: 1,
                longest: streak.longest,
                lastActiveDate: new Date()
              }
            });
          }
        } else if (daysSinceLastActive > 1) {
          // Streak broken
          set(state => ({
            streak: {
              ...state.streak,
              current: 0
            }
          }));
        }
      },

      // Set learning profile
      setLearningProfile: (profile: Partial<UserLearningProfile>) => {
        set(state => ({
          learningProfile: state.learningProfile ? {
            ...state.learningProfile,
            ...profile
          } : null
        }));
      },

      // Calculate level from XP
      calculateLevel: (xp: number): number => {
        // Simple level calculation: each level requires progressively more XP
        let level = 1;
        let requiredXP = 100;
        let totalRequired = 0;
        
        while (xp >= totalRequired + requiredXP) {
          totalRequired += requiredXP;
          level++;
          requiredXP = Math.floor(requiredXP * 1.5); // 50% more XP needed each level
        }
        
        return level;
      },

      // Get XP for next level
      getXPForNextLevel: (currentLevel: number) => {
        let requiredXP = 100;
        let totalRequired = 0;
        
        for (let i = 1; i < currentLevel; i++) {
          totalRequired += requiredXP;
          requiredXP = Math.floor(requiredXP * 1.5);
        }
        
        const currentLevelXP = get().overallProgress.totalXP - totalRequired;
        
        return {
          current: currentLevelXP,
          required: requiredXP,
          total: requiredXP
        };
      },

      // Mnemonic Actions
      saveMnemonic: (definitionId: string, mnemonic: Omit<Mnemonic, 'id' | 'createdAt'>) => {
        const mnemonicId = `mnemonic_${Date.now()}`;
        const newMnemonic: Mnemonic = {
          ...mnemonic,
          id: mnemonicId,
          createdAt: new Date(),
          effectiveness: 50 // Start with neutral effectiveness
        };
        
        set(state => ({
          mnemonics: {
            ...state.mnemonics,
            [mnemonicId]: newMnemonic
          },
          definitions: state.definitions.map(def => 
            def.id === definitionId 
              ? { ...def, mnemonic: newMnemonic }
              : def
          )
        }));
      },

      updateMnemonicEffectiveness: (mnemonicId: string, effectiveness: number) => {
        set(state => ({
          mnemonics: {
            ...state.mnemonics,
            [mnemonicId]: {
              ...state.mnemonics[mnemonicId],
              effectiveness,
              lastUsed: new Date()
            }
          }
        }));
      },

      getDefinitionsForUnit: (unitId: string) => {
        // This would normally filter definitions by unit
        // For now, return mock data
        return get().definitions;
      },

      getMnemonicStats: () => {
        const mnemonics = Object.values(get().mnemonics);
        const byType = mnemonics.reduce((acc, m) => {
          acc[m.type] = (acc[m.type] || 0) + 1;
          return acc;
        }, {} as Record<MnemonicType, number>);
        
        const avgEffectiveness = mnemonics.length > 0
          ? mnemonics.reduce((sum, m) => sum + (m.effectiveness || 0), 0) / mnemonics.length
          : 0;
        
        return {
          total: mnemonics.length,
          byType,
          avgEffectiveness
        };
      }
    }),
    {
      name: 'learning-storage',
      partialize: (state) => ({
        enrolledModules: state.enrolledModules,
        moduleProgress: state.moduleProgress,
        unitProgress: state.unitProgress,
        overallProgress: state.overallProgress,
        sessionHistory: state.sessionHistory,
        learningProfile: state.learningProfile,
        userAchievements: state.userAchievements,
        streak: state.streak
      })
    }
  )
);

// Helper function to evaluate answers
function evaluateAnswer(exercise: any, answer: any): boolean {
  // Simplified evaluation - in real implementation would be more sophisticated
  switch (exercise.type) {
    case 'multipleChoice':
      return answer === exercise.solution.correct;
    case 'trueFalse':
      return answer === exercise.solution.correct;
    case 'fillInBlanks':
      // For fill in blanks, check all blanks
      if (typeof answer === 'object' && exercise.solution.correct) {
        return Object.keys(exercise.solution.correct).every(key => 
          answer[key] && answer[key].toLowerCase().trim() === exercise.solution.correct[key].toLowerCase().trim()
        );
      }
      return false;
    case 'caseAnalysis':
      // For case analysis, just check if answer is provided (would need AI evaluation in real app)
      return answer && answer.length > 50;
    case 'gutachten':
      // For Gutachten, check if all required parts are filled
      if (typeof answer === 'object') {
        const requiredParts = ['obersatz', 'voraussetzung', 'definition', 'subsumtion', 'ergebnis'];
        return requiredParts.every(part => answer[part] && answer[part].length > 10);
      }
      return false;
    default:
      // For complex types, would need more sophisticated evaluation
      return false;
  }
}

// Default achievements
function getDefaultAchievements(): Achievement[] {
  return [
    {
      id: 'first-unit',
      name: 'Erste Schritte',
      description: 'Schließe deine erste Lerneinheit ab',
      icon: '🎯',
      criteria: { type: 'units_completed', target: 1 },
      xpReward: 50,
      rarity: 'common'
    },
    {
      id: 'week-streak',
      name: 'Wochensträhne',
      description: '7 Tage in Folge gelernt',
      icon: '🔥',
      criteria: { type: 'streak', target: 7 },
      xpReward: 200,
      rarity: 'rare'
    },
    {
      id: 'exercise-master',
      name: 'Übungsmeister',
      description: 'Löse 50 Übungen',
      icon: '⭐',
      criteria: { type: 'exercises_solved', target: 50 },
      xpReward: 300,
      rarity: 'rare'
    },
    {
      id: 'dedicated-learner',
      name: 'Fleißiger Student',
      description: 'Lerne insgesamt 10 Stunden',
      icon: '📚',
      criteria: { type: 'time_spent', target: 600 },
      xpReward: 500,
      rarity: 'epic'
    }
  ];
}

export default useLearningStore;