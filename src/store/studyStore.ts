import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { StudyModule, StudySession, StudyBlock, PomodoroSettings, ModuleId } from '../types';

interface StudyState {
  // Modules
  modules: StudyModule[];
  activeModuleId: string | null;
  
  // Sessions
  currentSession: StudySession | null;
  sessionHistory: StudySession[];
  
  // Study blocks
  studyBlocks: StudyBlock[];
  
  // Pomodoro
  pomodoroSettings: PomodoroSettings;
  pomodoroStats: {
    completedToday: number;
    totalCompleted: number;
    currentStreak: number;
  };
  
  // Actions
  setModules: (modules: StudyModule[]) => void;
  updateModule: (moduleId: string, updates: Partial<StudyModule>) => void;
  startStudySession: (moduleId: string, topicId: string) => void;
  endStudySession: (notes?: string) => void;
  pauseStudySession: () => void;
  resumeStudySession: () => void;
  updateSessionNotes: (notes: string) => void;
  deleteSession: (sessionId: string) => void;
  addPomodoroCompleted: () => void;
  updatePomodoroSettings: (settings: Partial<PomodoroSettings>) => void;
  addStudyBlock: (block: StudyBlock) => void;
  updateStudyBlock: (blockId: string, updates: Partial<StudyBlock>) => void;
  getWeeklyStudyHours: () => number;
}

const useStudyStore = create<StudyState>()(
  persist(
    (set, get) => ({
      // Initial state
      modules: [],
      activeModuleId: null,
      currentSession: null,
      sessionHistory: [],
      studyBlocks: [],
      pomodoroSettings: {
        workDuration: 25,
        shortBreakDuration: 5,
        longBreakDuration: 15,
        sessionsBeforeLongBreak: 4,
        autoStartBreaks: false,
        autoStartPomodoros: false
      },
      pomodoroStats: {
        completedToday: 0,
        totalCompleted: 0,
        currentStreak: 0
      },

      // Actions
      setModules: (modules) => set({ modules }),
      
      updateModule: (moduleId, updates) => set((state) => ({
        modules: state.modules.map(module =>
          module.id === moduleId ? { ...module, ...updates } : module
        )
      })),
      
      startStudySession: (moduleId, topicId) => {
        const sessionId = `session-${Date.now()}`;
        const newSession: StudySession = {
          id: sessionId,
          moduleId: moduleId as ModuleId,
          topicId,
          startTime: new Date(),
          breaks: [],
          pomodoroCompleted: 0,
          notes: '',
          status: 'active'
        };
        
        set({
          currentSession: newSession,
          activeModuleId: moduleId
        });
      },
      
      endStudySession: (notes) => set((state) => {
        if (!state.currentSession) return state;
        
        const endTime = new Date();
        const duration = Math.floor(
          (endTime.getTime() - state.currentSession.startTime.getTime()) / 60000
        );
        
        const completedSession: StudySession = {
          ...state.currentSession,
          endTime,
          duration,
          notes: notes || state.currentSession.notes,
          status: 'completed'
        };
        
        // Update module hours
        const updatedModules = state.modules.map(module => {
          if (module.id === state.currentSession!.moduleId) {
            return {
              ...module,
              completedHours: module.completedHours + (duration / 60),
              thisWeekCompleted: module.thisWeekCompleted + (duration / 60)
            };
          }
          return module;
        });
        
        return {
          currentSession: null,
          activeModuleId: null,
          sessionHistory: [...state.sessionHistory, completedSession],
          modules: updatedModules
        };
      }),
      
      pauseStudySession: () => set((state) => {
        if (!state.currentSession || state.currentSession.status !== 'active') {
          return state;
        }
        
        return {
          currentSession: {
            ...state.currentSession,
            status: 'paused',
            breaks: [...state.currentSession.breaks, {
              start: new Date().toISOString().split('T')[1].slice(0, 5),
              end: '',
              duration: 0
            }]
          }
        };
      }),
      
      resumeStudySession: () => set((state) => {
        if (!state.currentSession || state.currentSession.status !== 'paused') {
          return state;
        }
        
        const breaks = [...state.currentSession.breaks];
        const lastBreak = breaks[breaks.length - 1];
        if (lastBreak && !lastBreak.end) {
          lastBreak.end = new Date().toISOString().split('T')[1].slice(0, 5);
          const [startHour, startMin] = lastBreak.start.split(':').map(Number);
          const [endHour, endMin] = lastBreak.end.split(':').map(Number);
          lastBreak.duration = (endHour * 60 + endMin) - (startHour * 60 + startMin);
        }
        
        return {
          currentSession: {
            ...state.currentSession,
            status: 'active',
            breaks
          }
        };
      }),
      
      updateSessionNotes: (notes) => set((state) => {
        if (!state.currentSession) return state;
        
        return {
          currentSession: {
            ...state.currentSession,
            notes
          }
        };
      }),
      
      deleteSession: (sessionId) => set((state) => {
        const session = state.sessionHistory.find(s => s.id === sessionId);
        if (!session) return state;
        
        // Recalculate module hours
        const updatedModules = state.modules.map(module => {
          if (module.id === session.moduleId && session.duration) {
            const hoursToRemove = session.duration / 60;
            return {
              ...module,
              completedHours: Math.max(0, module.completedHours - hoursToRemove),
              thisWeekCompleted: Math.max(0, module.thisWeekCompleted - hoursToRemove)
            };
          }
          return module;
        });
        
        return {
          sessionHistory: state.sessionHistory.filter(s => s.id !== sessionId),
          modules: updatedModules
        };
      }),
      
      addPomodoroCompleted: () => set((state) => {
        const today = new Date().toDateString();
        const lastCompleted = localStorage.getItem('lastPomodoroDate');
        const isNewDay = lastCompleted !== today;
        
        if (isNewDay) {
          localStorage.setItem('lastPomodoroDate', today);
        }
        
        return {
          pomodoroStats: {
            completedToday: isNewDay ? 1 : state.pomodoroStats.completedToday + 1,
            totalCompleted: state.pomodoroStats.totalCompleted + 1,
            currentStreak: isNewDay ? state.pomodoroStats.currentStreak + 1 : state.pomodoroStats.currentStreak
          },
          currentSession: state.currentSession ? {
            ...state.currentSession,
            pomodoroCompleted: state.currentSession.pomodoroCompleted + 1
          } : null
        };
      }),
      
      updatePomodoroSettings: (settings) => set((state) => ({
        pomodoroSettings: { ...state.pomodoroSettings, ...settings }
      })),
      
      addStudyBlock: (block) => set((state) => ({
        studyBlocks: [...state.studyBlocks, block]
      })),
      
      updateStudyBlock: (blockId, updates) => set((state) => ({
        studyBlocks: state.studyBlocks.map(block =>
          block.id === blockId ? { ...block, ...updates } : block
        )
      })),
      
      getWeeklyStudyHours: () => {
        const state = get();
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
        
        return state.sessionHistory
          .filter(session => new Date(session.startTime) > oneWeekAgo)
          .reduce((total, session) => total + (session.duration || 0) / 60, 0);
      }
    }),
    {
      name: 'study-storage'
    }
  )
);

export default useStudyStore;