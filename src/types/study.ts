import { Status, TimeBlock } from './common';

export type ModuleId = 'propaedeutikum' | 'bgb_at' | string;
export type ExamType = 'klausur' | 'hausarbeit';

export interface StudyModule {
  id: ModuleId;
  name: string;
  ects: number;
  totalHours: number;
  completedHours: number;
  currentTopic: string;
  nextDeadline?: Date;
  examType: ExamType;
  examDate?: Date;
  weeklyGoal: number; // hours
  thisWeekCompleted: number;
  topics: StudyTopic[];
}

export interface StudyTopic {
  id: string;
  name: string;
  description: string;
  estimatedHours: number;
  completedHours: number;
  status: Status;
  notes?: string;
}

export interface StudySession {
  id: string;
  moduleId: ModuleId;
  topicId: string;
  startTime: Date;
  endTime?: Date;
  duration?: number; // minutes
  breaks: TimeBlock[];
  pomodoroCompleted: number;
  notes?: string;
  status: 'active' | 'paused' | 'completed';
}

export interface StudyBlock {
  id: string;
  date: Date;
  moduleId: ModuleId;
  timeBlock: TimeBlock;
  planned: boolean;
  completed: boolean;
  topic?: string;
}

export interface PomodoroSettings {
  workDuration: number; // minutes
  shortBreakDuration: number;
  longBreakDuration: number;
  sessionsBeforeLongBreak: number;
  autoStartBreaks: boolean;
  autoStartPomodoros: boolean;
}

export interface GutachtenTemplate {
  id: string;
  name: string;
  structure: string[];
  examples: string[];
  tips: string[];
}