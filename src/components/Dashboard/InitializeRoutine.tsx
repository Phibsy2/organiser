import React, { useEffect, useState } from 'react';
import useCalendarStore from '../../store/calendarStore';
import { addDays, format } from 'date-fns';

const InitializeRoutine: React.FC = () => {
  const { addEvent, events } = useCalendarStore();

  useEffect(() => {
    // Check if routine is already initialized by looking for specific routine events
    const hasRoutineEvents = events.some(event => 
      event.recurring && (
        event.title.includes('Aufstehen') || 
        event.title.includes('ARBEITSZEIT') ||
        event.title.includes('KRAFTTRAINING')
      )
    );

    // Check localStorage to prevent re-initialization
    const routineInitialized = localStorage.getItem('jurafit-routine-initialized');

    if (!hasRoutineEvents && !routineInitialized) {
      console.log('Initializing weekly routine...');
      initializeWeeklyRoutine();
      localStorage.setItem('jurafit-routine-initialized', 'true');
    }
  }, []); // Empty dependency array - only run once on mount

  const initializeWeeklyRoutine = () => {
    const today = new Date();
    
    // Helper function to get next occurrence of a weekday
    const getNextWeekday = (dayOfWeek: number) => {
      const date = new Date(today);
      const currentDay = date.getDay();
      const distance = (dayOfWeek - currentDay + 7) % 7;
      date.setDate(date.getDate() + distance);
      return format(date, 'yyyy-MM-dd');
    };
    
    // Montag (1), Mittwoch (3), Donnerstag (4) gemeinsame Routine
    [1, 3, 4].forEach(dayOfWeek => {
      const dateString = getNextWeekday(dayOfWeek);
      
      // Aufstehen
      addEvent({
        title: '🌅 Aufstehen + Kaffee',
        type: 'other',
        startTime: '06:00',
        endTime: '06:30',
        date: dateString,
        recurring: { frequency: 'weekly' }
      });

      // Arbeitszeit
      addEvent({
        title: '💼 ARBEITSZEIT (Remote)',
        type: 'appointment',
        startTime: '06:30',
        endTime: '15:30',
        date: dateString,
        recurring: { frequency: 'weekly' }
      });

      // Pause
      addEvent({
        title: '⏸️ PAUSE',
        type: 'other',
        startTime: '15:30',
        endTime: '16:00',
        date: dateString,
        recurring: { frequency: 'weekly' }
      });
    });

    // Montag spezifisch
    const mondayDate = getNextWeekday(1);
    addEvent({
      title: '🏋️ KRAFTTRAINING Oberkörper',
      type: 'training',
      startTime: '16:00',
      endTime: '17:00',
      date: mondayDate,
      description: 'Fokus: Brust, Rücken, Schultern',
      recurring: { frequency: 'weekly' }
    });

    addEvent({
      title: '🚿 Duschen + Protein-Shake',
      type: 'other',
      startTime: '17:15',
      endTime: '18:00',
      date: mondayDate,
      recurring: { frequency: 'weekly' }
    });

    addEvent({
      title: '🍽️ ABENDESSEN',
      type: 'meal',
      startTime: '18:00',
      endTime: '19:30',
      date: mondayDate,
      recurring: { frequency: 'weekly' }
    });

    addEvent({
      title: '🎯 FREIZEIT',
      type: 'other',
      startTime: '19:30',
      endTime: '21:30',
      date: mondayDate,
      description: 'Persönliche Zeit',
      recurring: { frequency: 'weekly' }
    });

    // Mittwoch spezifisch
    const wednesdayDate = getNextWeekday(3);
    addEvent({
      title: '🏃 CARDIO + Core Training',
      type: 'training',
      startTime: '16:00',
      endTime: '17:00',
      date: wednesdayDate,
      description: '20-30 Min Cardio + Core',
      recurring: { frequency: 'weekly' }
    });

    // Donnerstag spezifisch
    const thursdayDate = getNextWeekday(4);
    addEvent({
      title: '🏋️ KRAFTTRAINING Unterkörper',
      type: 'training',
      startTime: '16:00',
      endTime: '17:00',
      date: thursdayDate,
      description: 'Fokus: Beine, Gesäß',
      recurring: { frequency: 'weekly' }
    });

    addEvent({
      title: '🎯 ENTSPANNUNG',
      type: 'other',
      startTime: '20:00',
      endTime: '21:00',
      date: thursdayDate,
      recurring: { frequency: 'weekly' }
    });

    // Freitag Routine
    const fridayDate = getNextWeekday(5);
    addEvent({
      title: '🌅 Aufstehen + Kaffee',
      type: 'other',
      startTime: '06:00',
      endTime: '06:30',
      date: fridayDate,
      recurring: { frequency: 'weekly' }
    });

    addEvent({
      title: '💼 ARBEITSZEIT (bis 13:30)',
      type: 'appointment',
      startTime: '06:30',
      endTime: '13:30',
      date: fridayDate,
      recurring: { frequency: 'weekly' }
    });

    addEvent({
      title: '🏋️ INTENSIVES TRAINING',
      type: 'training',
      startTime: '14:00',
      endTime: '15:00',
      date: fridayDate,
      description: 'Unterkörper oder Ganzkörper',
      recurring: { frequency: 'weekly' }
    });

    addEvent({
      title: '🍽️ MEAL PREP',
      type: 'meal',
      startTime: '16:00',
      endTime: '18:30',
      date: fridayDate,
      description: 'Vorbereitung für die Woche',
      recurring: { frequency: 'weekly' }
    });

    // Samstag
    const saturdayDate = getNextWeekday(6);
    addEvent({
      title: '🏃 AKTIVE ERHOLUNG',
      type: 'training',
      startTime: '09:00',
      endTime: '10:30',
      date: saturdayDate,
      description: 'Leichtes Training oder Yoga',
      recurring: { frequency: 'weekly' }
    });

    // Sonntag
    const sundayDate = getNextWeekday(0);
    addEvent({
      title: '📋 WOCHENPLANUNG',
      type: 'other',
      startTime: '10:00',
      endTime: '11:30',
      date: sundayDate,
      description: 'Planung für die neue Woche',
      recurring: { frequency: 'weekly' }
    });

    addEvent({
      title: '📝 Wochenreflexion',
      type: 'other',
      startTime: '15:00',
      endTime: '16:00',
      date: sundayDate,
      description: 'Reflexion der vergangenen Woche',
      recurring: { frequency: 'weekly' }
    });

    // Tägliche Events - ab heute
    const todayDate = format(today, 'yyyy-MM-dd');
    
    addEvent({
      title: '🛏️ Bettzeit',
      type: 'other',
      startTime: '22:30',
      endTime: '23:00',
      date: todayDate,
      description: '7,5h Schlaf einplanen',
      recurring: { frequency: 'daily' }
    });

    // Kaffee-Zeiten
    addEvent({
      title: '☕ 1. Kaffee',
      type: 'meal',
      startTime: '06:30',
      endTime: '06:45',
      date: todayDate,
      description: '100mg Koffein',
      recurring: { frequency: 'daily' }
    });

    addEvent({
      title: '☕ 2. Kaffee',
      type: 'meal',
      startTime: '10:00',
      endTime: '10:15',
      date: todayDate,
      description: '100mg Koffein - Arbeitsfokus',
      recurring: { frequency: 'daily' }
    });

    addEvent({
      title: '☕ Letzter Kaffee',
      type: 'meal',
      startTime: '13:00',
      endTime: '13:15',
      date: todayDate,
      description: '100mg Koffein - Spätestens 14:00!',
      recurring: { frequency: 'daily' }
    });
  };

  return null;
};

export default InitializeRoutine;