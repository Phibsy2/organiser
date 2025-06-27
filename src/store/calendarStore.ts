import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CalendarEvent {
  id: string;
  title: string;
  description?: string;
  date: string; // ISO date string
  startTime: string; // HH:mm format
  endTime: string; // HH:mm format
  type: 'training' | 'study' | 'meal' | 'appointment' | 'other';
  color?: string;
  recurring?: {
    frequency: 'daily' | 'weekly' | 'monthly';
    endDate?: string;
  };
  completed?: boolean;
}

interface CalendarState {
  events: CalendarEvent[];
  
  // Actions
  addEvent: (event: Omit<CalendarEvent, 'id'>) => void;
  updateEvent: (id: string, updates: Partial<CalendarEvent>) => void;
  deleteEvent: (id: string) => void;
  deleteEventInstance: (id: string) => void;
  isRecurringEvent: (id: string) => boolean;
  toggleEventCompletion: (id: string) => void;
  getEventsForDate: (date: string) => CalendarEvent[];
  getEventsForDateRange: (startDate: string, endDate: string) => CalendarEvent[];
}

const useCalendarStore = create<CalendarState>()(
  persist(
    (set, get) => ({
      events: [],
      
      addEvent: (event) => set((state) => {
        const newEvent: CalendarEvent = {
          ...event,
          id: `event-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
        };
        
        // If it's a recurring event, generate occurrences
        if (event.recurring) {
          const events: CalendarEvent[] = [newEvent];
          const startDate = new Date(event.date);
          const endDate = event.recurring.endDate 
            ? new Date(event.recurring.endDate) 
            : new Date(startDate.getTime() + 90 * 24 * 60 * 60 * 1000); // 3 months default
          
          let currentDate = new Date(startDate);
          let counter = 1;
          
          while (currentDate <= endDate && counter < 52) { // Max 52 occurrences (1 year weekly)
            let nextDate = new Date(currentDate);
            
            switch (event.recurring.frequency) {
              case 'daily':
                nextDate.setDate(nextDate.getDate() + 1);
                break;
              case 'weekly':
                nextDate.setDate(nextDate.getDate() + 7);
                break;
              case 'monthly':
                nextDate.setMonth(nextDate.getMonth() + 1);
                break;
            }
            
            if (nextDate <= endDate) {
              events.push({
                ...newEvent,
                id: `${newEvent.id}-${counter}`,
                date: nextDate.toISOString().split('T')[0]
              });
              counter++;
            }
            
            currentDate = nextDate;
          }
          
          return {
            events: [...state.events, ...events]
          };
        }
        
        return {
          events: [...state.events, newEvent]
        };
      }),
      
      updateEvent: (id, updates) => set((state) => ({
        events: state.events.map(event =>
          event.id === id
            ? { ...event, ...updates }
            : event
        )
      })),
      
      deleteEvent: (id) => set((state) => {
        // Delete the event and all its recurring instances
        const baseId = id.includes('-') ? id.split('-')[0] : id;
        return {
          events: state.events.filter(event => {
            const eventBaseId = event.id.includes('-') ? event.id.split('-')[0] : event.id;
            return eventBaseId !== baseId;
          })
        };
      }),
      
      deleteEventInstance: (id) => set((state) => ({
        // Delete only this specific instance
        events: state.events.filter(event => event.id !== id)
      })),
      
      isRecurringEvent: (id) => {
        const state = get();
        const event = state.events.find(e => e.id === id);
        if (!event) return false;
        
        // Check if this event has recurring property or if there are other instances
        if (event.recurring) return true;
        
        const baseId = id.includes('-') ? id.split('-')[0] : id;
        const hasOtherInstances = state.events.some(e => {
          const eventBaseId = e.id.includes('-') ? e.id.split('-')[0] : e.id;
          return eventBaseId === baseId && e.id !== id;
        });
        
        return hasOtherInstances;
      },
      
      toggleEventCompletion: (id) => set((state) => ({
        events: state.events.map(event =>
          event.id === id
            ? { ...event, completed: !event.completed }
            : event
        )
      })),
      
      getEventsForDate: (date) => {
        const state = get();
        return state.events.filter(event => event.date === date)
          .sort((a, b) => a.startTime.localeCompare(b.startTime));
      },
      
      getEventsForDateRange: (startDate, endDate) => {
        const state = get();
        return state.events.filter(event => 
          event.date >= startDate && event.date <= endDate
        ).sort((a, b) => {
          const dateCompare = a.date.localeCompare(b.date);
          if (dateCompare !== 0) return dateCompare;
          return a.startTime.localeCompare(b.startTime);
        });
      }
    }),
    {
      name: 'calendar-storage'
    }
  )
);

export default useCalendarStore;