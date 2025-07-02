export interface GamificationProfile {
  userId: string;
  username: string;
  level: number;
  xp: number;
  achievements: Achievement[];
  streaks: {
    current: number;
    longest: number;
    lastActive: Date;
  };
  badges: Badge[];
  rank: number;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  xpReward: number;
  unlockedAt?: Date;
  progress: number; // 0-100
  requirement: AchievementRequirement;
}

export interface AchievementRequirement {
  type: 'cards_reviewed' | 'sessions_completed' | 'streak_days' | 'quiz_score' | 'explanations_created';
  target: number;
  timeframe?: 'daily' | 'weekly' | 'monthly' | 'total';
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  unlockedAt: Date;
}

export interface DailyQuest {
  id: string;
  name: string;
  description: string;
  xpReward: number;
  progress: number;
  target: number;
  completed: boolean;
  expiresAt: Date;
}

export interface Leaderboard {
  period: 'daily' | 'weekly' | 'monthly' | 'alltime';
  entries: LeaderboardEntry[];
  userPosition?: number;
}

export interface LeaderboardEntry {
  userId: string;
  username: string;
  xp: number;
  level: number;
  rank: number;
  change: number; // Position change
}