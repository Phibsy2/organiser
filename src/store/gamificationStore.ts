import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { 
  GamificationProfile, 
  Achievement, 
  Badge, 
  DailyQuest,
  Leaderboard,
  LeaderboardEntry 
} from '../types';

interface GamificationStore {
  profile: GamificationProfile | null;
  dailyQuests: DailyQuest[];
  leaderboards: Record<string, Leaderboard>;
  
  // Actions
  initializeProfile: (userId: string) => void;
  addXP: (amount: number, source: string) => void;
  checkAchievements: () => void;
  updateStreak: () => void;
  completeDailyQuest: (questId: string) => void;
  unlockBadge: (badge: Badge) => void;
  fetchLeaderboard: (period: string) => Promise<void>;
  calculateLevel: (xp: number) => number;
  getXPForNextLevel: () => { current: number; required: number };
}

// Predefined achievements
const achievements: Achievement[] = [
  {
    id: 'first_card',
    name: 'Erste Karteikarte',
    description: 'Erstelle deine erste Karteikarte',
    icon: '🎴',
    xpReward: 50,
    progress: 0,
    requirement: { type: 'cards_reviewed', target: 1, timeframe: 'total' }
  },
  {
    id: 'week_streak',
    name: 'Wochensträhne',
    description: '7 Tage in Folge lernen',
    icon: '🔥',
    xpReward: 200,
    progress: 0,
    requirement: { type: 'streak_days', target: 7, timeframe: 'total' }
  },
  {
    id: 'quiz_master',
    name: 'Quiz-Meister',
    description: 'Erreiche 90% in 5 Quizzen',
    icon: '🏆',
    xpReward: 300,
    progress: 0,
    requirement: { type: 'quiz_score', target: 5, timeframe: 'total' }
  },
  {
    id: 'feynman_expert',
    name: 'Feynman-Experte',
    description: 'Erstelle 10 Erklärungen',
    icon: '👨‍🏫',
    xpReward: 250,
    progress: 0,
    requirement: { type: 'explanations_created', target: 10, timeframe: 'total' }
  }
];

// Daily quests generator
const generateDailyQuests = (): DailyQuest[] => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);

  return [
    {
      id: `quest-${Date.now()}-1`,
      name: 'Karteikarten-Champion',
      description: 'Wiederhole 20 Karteikarten',
      xpReward: 50,
      progress: 0,
      target: 20,
      completed: false,
      expiresAt: tomorrow
    },
    {
      id: `quest-${Date.now()}-2`,
      name: 'Lernmarathon',
      description: 'Lerne 60 Minuten',
      xpReward: 75,
      progress: 0,
      target: 60,
      completed: false,
      expiresAt: tomorrow
    },
    {
      id: `quest-${Date.now()}-3`,
      name: 'Quiz-Zeit',
      description: 'Schließe 2 Quizze ab',
      xpReward: 60,
      progress: 0,
      target: 2,
      completed: false,
      expiresAt: tomorrow
    }
  ];
};

const useGamificationStore = create<GamificationStore>()(
  persist(
    (set, get) => ({
      profile: null,
      dailyQuests: [],
      leaderboards: {},

      initializeProfile: (userId) => {
        set({
          profile: {
            userId,
            username: `Student${userId}`, // Default username, can be customized later
            level: 1,
            xp: 0,
            achievements: achievements,
            streaks: {
              current: 0,
              longest: 0,
              lastActive: new Date()
            },
            badges: [],
            rank: 0
          },
          dailyQuests: generateDailyQuests()
        });
      },

      addXP: (amount, source) => {
        set((state) => {
          if (!state.profile) return state;

          const newXP = state.profile.xp + amount;
          const newLevel = get().calculateLevel(newXP);

          // Check for level up
          if (newLevel > state.profile.level) {
            // Award level up badge
            const levelBadge: Badge = {
              id: `level_${newLevel}`,
              name: `Level ${newLevel}`,
              description: `Erreiche Level ${newLevel}`,
              icon: '⭐',
              rarity: newLevel < 10 ? 'common' : newLevel < 25 ? 'rare' : newLevel < 50 ? 'epic' : 'legendary',
              unlockedAt: new Date()
            };

            return {
              profile: {
                ...state.profile,
                xp: newXP,
                level: newLevel,
                badges: [...state.profile.badges, levelBadge]
              }
            };
          }

          return {
            profile: {
              ...state.profile,
              xp: newXP
            }
          };
        });

        // Check achievements after XP update
        get().checkAchievements();
      },

      checkAchievements: () => {
        set((state) => {
          if (!state.profile) return state;

          const updatedAchievements = state.profile.achievements.map((achievement: Achievement) => {
            if (achievement.unlockedAt) return achievement;

            // Check if achievement requirement is met
            let progress = 0;
            switch (achievement.requirement.type) {
              case 'streak_days':
                progress = state.profile!.streaks.current;
                break;
              // Other achievement types would be checked based on actual data
              default:
                progress = achievement.progress;
            }

            const progressPercentage = Math.min(100, (progress / achievement.requirement.target) * 100);

            if (progressPercentage >= 100 && !achievement.unlockedAt) {
              // Achievement unlocked!
              get().addXP(achievement.xpReward, `achievement_${achievement.id}`);
              
              return {
                ...achievement,
                progress: 100,
                unlockedAt: new Date()
              };
            }

            return {
              ...achievement,
              progress: progressPercentage
            };
          });

          return {
            profile: {
              ...state.profile,
              achievements: updatedAchievements
            }
          };
        });
      },

      updateStreak: () => {
        set((state) => {
          if (!state.profile) return state;

          const lastActive = new Date(state.profile.streaks.lastActive);
          const today = new Date();
          const daysSinceLastActive = Math.floor((today.getTime() - lastActive.getTime()) / (1000 * 60 * 60 * 24));

          let newCurrent = state.profile.streaks.current;
          
          if (daysSinceLastActive === 0) {
            // Already active today
            return state;
          } else if (daysSinceLastActive === 1) {
            // Consecutive day
            newCurrent += 1;
          } else {
            // Streak broken
            newCurrent = 1;
          }

          const newLongest = Math.max(newCurrent, state.profile.streaks.longest);

          // Award streak XP
          if (newCurrent > state.profile.streaks.current) {
            get().addXP(10 * newCurrent, 'daily_streak');
          }

          return {
            profile: {
              ...state.profile,
              streaks: {
                current: newCurrent,
                longest: newLongest,
                lastActive: today
              }
            }
          };
        });
      },

      completeDailyQuest: (questId) => {
        set((state) => {
          const quest = state.dailyQuests.find(q => q.id === questId);
          if (!quest || quest.completed) return state;

          get().addXP(quest.xpReward, `daily_quest_${quest.id}`);

          return {
            dailyQuests: state.dailyQuests.map(q =>
              q.id === questId ? { ...q, completed: true, progress: q.target } : q
            )
          };
        });
      },

      unlockBadge: (badge) => {
        set((state) => {
          if (!state.profile) return state;

          // Check if badge already unlocked
          if (state.profile.badges.some((b: Badge) => b.id === badge.id)) return state;

          return {
            profile: {
              ...state.profile,
              badges: [...state.profile.badges, { ...badge, unlockedAt: new Date() }]
            }
          };
        });
      },

      fetchLeaderboard: async (period) => {
        // In a real app, this would fetch from an API
        // For now, we'll create mock data
        const mockEntries: LeaderboardEntry[] = [
          { userId: '1', username: 'JuraStudent1', xp: 2500, level: 15, rank: 1, change: 0 },
          { userId: '2', username: 'RechtsMeister', xp: 2300, level: 14, rank: 2, change: 1 },
          { userId: '3', username: 'LawExpert', xp: 2100, level: 13, rank: 3, change: -1 },
          // ... more entries
        ];

        const leaderboard: Leaderboard = {
          period: period as any,
          entries: mockEntries,
          userPosition: mockEntries.findIndex(e => e.userId === get().profile?.userId) + 1
        };

        set((state) => ({
          leaderboards: {
            ...state.leaderboards,
            [period]: leaderboard
          }
        }));
      },

      calculateLevel: (xp) => {
        // Level formula: each level requires 100 * level XP
        let level = 1;
        let totalRequired = 0;

        while (xp >= totalRequired + (100 * level)) {
          totalRequired += 100 * level;
          level++;
        }

        return level;
      },

      getXPForNextLevel: () => {
        const state = get();
        if (!state.profile) return { current: 0, required: 100 };

        const currentLevel = state.profile.level;
        const xpForCurrentLevel = (currentLevel - 1) * currentLevel * 50;
        const xpForNextLevel = currentLevel * (currentLevel + 1) * 50;
        
        return {
          current: state.profile.xp - xpForCurrentLevel,
          required: xpForNextLevel - xpForCurrentLevel
        };
      }
    }),
    {
      name: 'gamification-storage'
    }
  )
);

export default useGamificationStore;