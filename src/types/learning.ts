// Learning System Types

export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';
export type ExerciseType = 
  | 'multipleChoice'
  | 'trueFalse'
  | 'dragDrop'
  | 'fillInBlanks'
  | 'caseAnalysis'
  | 'gutachten'
  | 'timeline'
  | 'conceptMap'
  | 'essay'
  | 'shortAnswer'
  | 'problemSolving'
  | 'complexCase'
  | 'comparative'
  | 'practical'
  | 'matching'
  | 'complexAnalysis';

export type ModuleCategory = 'propaedeutikum' | 'zivilrecht' | 'strafrecht' | 'oeffentlichesRecht';
export type LearningStyle = 'visual' | 'auditory' | 'kinesthetic' | 'mixed';

// Mnemonic Types
export type MnemonicType = 'acronym' | 'story' | 'rhyme' | 'visualization' | 'association';

export interface Mnemonic {
  id: string;
  type: MnemonicType;
  content: string;
  explanation?: string;
  definitionId: string;
  createdAt: Date;
  lastUsed?: Date;
  effectiveness?: number; // 0-100
}

export interface DefinitionWithMnemonic {
  id: string;
  term: string;
  definition: string;
  category?: string;
  mnemonic?: Mnemonic;
  masteryLevel?: number; // 0-100
  lastReviewed?: Date;
}

// Core Learning Entities
export interface LearningModule {
  id: string;
  title: string;
  description: string;
  category: ModuleCategory;
  difficulty: DifficultyLevel;
  prerequisites: string[];
  estimatedHours: number;
  credits?: number; // ECTS
  moduleCode?: string;
  responsibleProfessor?: string;
  examType?: string;
  units: LearningUnit[];
  finalAssessment?: Assessment;
  certificateTemplate?: CertificateTemplate;
}

export interface LearningUnit {
  id: string;
  moduleId: string;
  order: number;
  title: string;
  objectives: LearningObjective[];
  content: LearningContent;
  exercises: Exercise[];
  estimatedMinutes: number;
  requiredMastery: number; // 0-100
}

export interface LearningObjective {
  id: string;
  description: string;
  bloomLevel: 'remember' | 'understand' | 'apply' | 'analyze' | 'evaluate' | 'create';
}

export interface LearningContent {
  id: string;
  type: 'text' | 'video' | 'interactive' | 'mixed';
  sections: ContentSection[];
  resources: Resource[];
  glossary: GlossaryTerm[];
}

export interface ContentSection {
  id: string;
  title: string;
  content: string;
  mediaItems?: MediaItem[];
  examples?: Example[];
  selfTest?: {
    questions: {
      id: string;
      question: string;
      correctAnswer: string;
    }[];
  };
  memoryAids?: {
    id: string;
    title: string;
    content: string;
  }[];
}

export interface Exercise {
  id: string;
  type: ExerciseType;
  difficulty: DifficultyLevel;
  points: number;
  timeLimit?: number;
  title?: string; // Made optional temporarily
  description?: string; // Made optional temporarily
  content: ExerciseContent;
  solution: ExerciseSolution;
  hints?: Hint[]; // Made optional temporarily
  feedback?: FeedbackTemplate; // Made optional temporarily
}

export interface ExerciseContent {
  question: string;
  context?: string;
  options?: string[]; // for multiple choice
  items?: (DragDropItem | string)[]; // for drag & drop - can be objects or strings
  categories?: string[]; // for drag & drop categories
  targets?: string[]; // for drag & drop targets
  template?: string; // for fill in blanks
  blanks?: number; // number of blanks for fill in blanks
  tasks?: string[]; // for case analysis
  scenario?: string; // for case analysis
  requirements?: string[]; // for essay exercises
  estimatedTime?: number; // for timed exercises
  maxLength?: number; // for text input exercises
  minWords?: number; // for essay exercises
  maxWords?: number; // for essay exercises
  keywords?: string[]; // for essay exercises
  centralConcept?: string; // for concept map exercises
  requiredConcepts?: string[]; // for concept map exercises
  minConnections?: number; // for concept map exercises
  statements?: string[]; // for true/false multiple statements
  text?: string; // for fill in blanks with text
  pairs?: { left: string; right: string; }[]; // for matching exercises
  sachverhalt?: string; // for case analysis
}

export interface ExerciseSolution {
  correct: any;
  explanation: string;
  commonMistakes?: string[];
  alternativeAnswers?: any;
  alternativeFormulations?: string[];
  modelAnswer?: string;
  evaluationCriteria?: string[];
  sampleAnswer?: string; // for essay exercises
  keyPoints?: string[]; // for grading criteria
}

export interface Hint {
  id: string;
  text: string;
  penaltyPoints: number;
  content?: string; // alternative to text
  cost?: number; // alternative to penaltyPoints
}

export interface FeedbackTemplate {
  correct: string;
  incorrect: string;
  partial?: string;
}

// Progress and Analytics
export interface ModuleProgress {
  moduleId: string;
  userId: string;
  enrolledAt: Date;
  completedUnits: string[];
  currentUnit?: string;
  overallProgress: number; // 0-100
  totalTimeSpent: number; // minutes
  lastAccessedAt: Date;
  certificateEarned?: boolean;
}

export interface UnitProgress {
  unitId: string;
  userId: string;
  startedAt: Date;
  completedAt?: Date;
  masteryScore: number; // 0-100
  exercisesCompleted: string[];
  attempts: number;
  timeSpent: number; // minutes
}

export interface LearningSession {
  id: string;
  userId: string;
  moduleId: string;
  unitId: string;
  startTime: Date;
  endTime?: Date;
  exercisesAttempted: ExerciseAttempt[];
  notesCreated: string[];
  score: number;
}

export interface ExerciseAttempt {
  exerciseId: string;
  attemptNumber: number;
  answer: any;
  isCorrect: boolean;
  score: number;
  timeSpent: number; // seconds
  hintsUsed: string[];
  timestamp: Date;
}

// User Learning Profile
export interface UserLearningProfile {
  userId: string;
  learningStyle: LearningStyle;
  knowledgeLevel: KnowledgeMap;
  preferences: LearningPreferences;
  progressHistory: ProgressRecord[];
  strengths: string[];
  weaknesses: string[];
}

export interface KnowledgeMap {
  [topic: string]: {
    mastery: number; // 0-100
    lastPracticed: Date;
    confidence: number; // 0-100
  };
}

export interface LearningPreferences {
  preferredSessionDuration: number; // minutes
  preferredDifficulty: DifficultyLevel;
  notificationSettings: NotificationPreferences;
  studySchedule: StudySchedule;
}

export interface StudySchedule {
  preferredDays: string[];
  preferredTimeSlots: TimeSlot[];
  examDate?: Date;
}

export interface TimeSlot {
  day: string;
  startTime: string;
  endTime: string;
}

// Spaced Repetition
export interface RepetitionCard {
  id: string;
  userId: string;
  contentType: 'concept' | 'definition' | 'case' | 'rule';
  contentId: string;
  front: string;
  back: string;
  interval: number; // days
  easeFactor: number;
  repetitions: number;
  nextReviewDate: Date;
  createdAt: Date;
  lastReviewedAt?: Date;
}

export interface ReviewRecord {
  cardId: string;
  reviewDate: Date;
  quality: number; // 0-5
  timeSpent: number; // seconds
}

// Gamification
export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  criteria: AchievementCriteria;
  xpReward: number;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

export interface AchievementCriteria {
  type: 'units_completed' | 'streak' | 'perfect_score' | 'time_spent' | 'exercises_solved';
  target: number;
  timeframe?: 'daily' | 'weekly' | 'total';
}

export interface UserAchievement {
  achievementId: string;
  earnedAt: Date;
  progress: number; // 0-100
}

export interface LearningStreak {
  current: number;
  longest: number;
  lastActiveDate: Date;
}

// Assessment Types
export interface Assessment {
  id: string;
  title: string;
  type: 'quiz' | 'exam' | 'practical';
  questions: AssessmentQuestion[];
  passingScore: number; // percentage
  timeLimit?: number; // minutes
  attempts: number;
}

export interface AssessmentQuestion {
  id: string;
  type: ExerciseType;
  question: string;
  points: number;
  options?: string[];
  correctAnswer: any;
}

export interface AssessmentResult {
  assessmentId: string;
  userId: string;
  attemptNumber: number;
  score: number;
  percentage: number;
  passed: boolean;
  answers: QuestionAnswer[];
  startTime: Date;
  endTime: Date;
}

export interface QuestionAnswer {
  questionId: string;
  answer: any;
  isCorrect: boolean;
  pointsEarned: number;
}

// Recommendations
export interface RecommendedContent {
  contentId: string;
  contentType: 'unit' | 'exercise' | 'resource';
  reason: string;
  priority: 'high' | 'medium' | 'low';
  estimatedBenefit: number; // 0-100
}

export interface ProgressRecord {
  date: Date;
  unitsCompleted: number;
  exercisesSolved: number;
  timeSpent: number;
  averageScore: number;
}

// Helper Types
export interface MediaItem {
  type: 'image' | 'video' | 'audio' | 'pdf';
  url: string;
  title: string;
  description?: string;
}

export interface Resource {
  id: string;
  title: string;
  type: 'book' | 'article' | 'video' | 'website' | 'interactive' | 'database';
  url: string;
  description: string;
  duration?: number; // For videos in minutes
}

export interface GlossaryTerm {
  term: string;
  definition: string;
  relatedTerms?: string[];
}

export interface Example {
  id: string;
  title: string;
  content: string;
  explanation?: string;
}

export interface DragDropItem {
  id: string;
  content: string;
  correctPosition?: number;
  correctCategory?: string;
}

export interface CertificateTemplate {
  id: string;
  name: string;
  description: string;
  requirements: string[];
}

export interface NotificationPreferences {
  dailyReminders: boolean;
  streakReminders: boolean;
  achievementNotifications: boolean;
  reminderTime?: string;
}