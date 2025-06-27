import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { de } from 'date-fns/locale';
import useCalendarStore, { CalendarEvent } from '../../store/calendarStore';
import {
  PlusIcon,
  ClockIcon,
  CheckCircleIcon,
  TrashIcon,
  PencilIcon
} from '@heroicons/react/24/outline';
import { cleanupDuplicateEvents } from '../../utils/cleanupDuplicateEvents';

interface DayScheduleProps {
  date: Date;
  onAddEvent?: () => void;
}

const DaySchedule: React.FC<DayScheduleProps> = ({ date, onAddEvent }) => {
  const { events, toggleEventCompletion, deleteEvent, deleteEventInstance, isRecurringEvent, updateEvent } = useCalendarStore();
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingEventId, setEditingEventId] = useState<string | null>(null);
  const [isRecurring, setIsRecurring] = useState(false);
  const [recurringFrequency, setRecurringFrequency] = useState<'daily' | 'weekly' | 'monthly'>('weekly');
  const [recurringEndDate, setRecurringEndDate] = useState('');
  const [newEvent, setNewEvent] = useState<Partial<CalendarEvent>>({
    title: '',
    type: 'other',
    startTime: '09:00',
    endTime: '10:00',
    date: format(date, 'yyyy-MM-dd')
  });

  // Run cleanup once on mount
  useEffect(() => {
    cleanupDuplicateEvents();
  }, []);

  const dayEvents = events
    .filter(event => event.date === format(date, 'yyyy-MM-dd'))
    .sort((a, b) => a.startTime.localeCompare(b.startTime));

  // Remove debug logging in production
  // console.log('Current editingEventId:', editingEventId);
  // console.log('Day events:', dayEvents.map(e => ({ id: e.id, title: e.title })));

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'training':
        return 'bg-red-100 text-red-700 border-red-300';
      case 'study':
        return 'bg-purple-100 text-purple-700 border-purple-300';
      case 'meal':
        return 'bg-green-100 text-green-700 border-green-300';
      case 'appointment':
        return 'bg-blue-100 text-blue-700 border-blue-300';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  const getEventTypeIcon = (type: string) => {
    switch (type) {
      case 'training':
        return '💪';
      case 'study':
        return '📚';
      case 'meal':
        return '🍽️';
      case 'appointment':
        return '📅';
      default:
        return '📌';
    }
  };

  const handleAddEvent = () => {
    const { addEvent } = useCalendarStore.getState();
    if (newEvent.title && newEvent.startTime && newEvent.endTime) {
      const eventData: Omit<CalendarEvent, 'id'> = {
        title: newEvent.title,
        description: newEvent.description,
        type: newEvent.type as CalendarEvent['type'],
        startTime: newEvent.startTime,
        endTime: newEvent.endTime,
        date: format(date, 'yyyy-MM-dd')
      };

      // Add recurring information if enabled
      if (isRecurring) {
        eventData.recurring = {
          frequency: recurringFrequency,
          endDate: recurringEndDate || undefined
        };
      }

      addEvent(eventData);
      
      // Reset form
      setNewEvent({
        title: '',
        type: 'other',
        startTime: '09:00',
        endTime: '10:00',
        date: format(date, 'yyyy-MM-dd')
      });
      setIsRecurring(false);
      setRecurringFrequency('weekly');
      setRecurringEndDate('');
      setShowAddForm(false);
    }
  };

  const handleDeleteEvent = (eventId: string) => {
    const isRecurring = isRecurringEvent(eventId);
    
    if (isRecurring) {
      // Custom dialog for recurring events
      const message = 'Dies ist ein wiederkehrender Termin. Was möchten Sie löschen?';
      const deleteAll = window.confirm(
        message + '\n\nOK = Alle wiederkehrenden Termine löschen\nAbbrechen = Nur diesen Termin löschen'
      );
      
      if (deleteAll) {
        deleteEvent(eventId);
      } else {
        deleteEventInstance(eventId);
      }
    } else {
      // Simple confirmation for single events
      if (window.confirm('Möchten Sie diesen Termin wirklich löschen?')) {
        deleteEvent(eventId);
      }
    }
  };

  const handleEditEvent = (event: CalendarEvent) => {
    setEditingEventId(event.id);
    setNewEvent({
      title: event.title,
      description: event.description,
      type: event.type,
      startTime: event.startTime,
      endTime: event.endTime,
      date: event.date
    });
    setShowAddForm(false);
  };

  const handleUpdateEvent = () => {
    if (editingEventId && newEvent.title && newEvent.startTime && newEvent.endTime) {
      updateEvent(editingEventId, {
        title: newEvent.title,
        description: newEvent.description,
        type: newEvent.type as CalendarEvent['type'],
        startTime: newEvent.startTime,
        endTime: newEvent.endTime
      });
      
      // Reset form
      setEditingEventId(null);
      setNewEvent({
        title: '',
        type: 'other',
        startTime: '09:00',
        endTime: '10:00',
        date: format(date, 'yyyy-MM-dd')
      });
    }
  };

  const cancelEdit = () => {
    setEditingEventId(null);
    setNewEvent({
      title: '',
      type: 'other',
      startTime: '09:00',
      endTime: '10:00',
      date: format(date, 'yyyy-MM-dd')
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">
          {format(date, 'EEEE, d. MMMM', { locale: de })}
        </h3>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
        >
          <PlusIcon className="w-5 h-5" />
        </button>
      </div>

      {/* Add Event Form */}
      {showAddForm && (
        <div className="mb-4 p-4 bg-gray-50 rounded-lg space-y-3">
          <input
            type="text"
            value={newEvent.title || ''}
            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
            placeholder="Titel"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          
          <div className="grid grid-cols-2 gap-2">
            <select
              value={newEvent.type}
              onChange={(e) => setNewEvent({ ...newEvent, type: e.target.value as CalendarEvent['type'] })}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="training">Training</option>
              <option value="study">Studium</option>
              <option value="meal">Mahlzeit</option>
              <option value="appointment">Termin</option>
              <option value="other">Sonstiges</option>
            </select>
            
            <div className="flex gap-2">
              <input
                type="time"
                value={newEvent.startTime}
                onChange={(e) => setNewEvent({ ...newEvent, startTime: e.target.value })}
                className="flex-1 px-2 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <span className="self-center text-gray-500">-</span>
              <input
                type="time"
                value={newEvent.endTime}
                onChange={(e) => setNewEvent({ ...newEvent, endTime: e.target.value })}
                className="flex-1 px-2 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <textarea
            value={newEvent.description || ''}
            onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
            placeholder="Beschreibung (optional)"
            rows={2}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          
          {/* Recurring options */}
          <div className="border-t pt-3">
            <label className="flex items-center gap-2 mb-2">
              <input
                type="checkbox"
                checked={isRecurring}
                onChange={(e) => setIsRecurring(e.target.checked)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-sm font-medium text-gray-700">Wiederkehrender Termin</span>
            </label>
            
            {isRecurring && (
              <div className="space-y-2 pl-6">
                <div className="flex gap-2">
                  <select
                    value={recurringFrequency}
                    onChange={(e) => setRecurringFrequency(e.target.value as 'daily' | 'weekly' | 'monthly')}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  >
                    <option value="daily">Täglich</option>
                    <option value="weekly">Wöchentlich</option>
                    <option value="monthly">Monatlich</option>
                  </select>
                  
                  <input
                    type="date"
                    value={recurringEndDate}
                    onChange={(e) => setRecurringEndDate(e.target.value)}
                    min={format(date, 'yyyy-MM-dd')}
                    placeholder="Enddatum"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                </div>
                <p className="text-xs text-gray-500">
                  {recurringFrequency === 'weekly' 
                    ? `Jeden ${format(date, 'EEEE', { locale: de })} wiederholen`
                    : recurringFrequency === 'daily'
                    ? 'Jeden Tag wiederholen'
                    : `Jeden ${format(date, 'd.')} des Monats wiederholen`
                  }
                  {recurringEndDate && ` bis ${format(new Date(recurringEndDate), 'dd.MM.yyyy', { locale: de })}`}
                </p>
              </div>
            )}
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={handleAddEvent}
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Hinzufügen
            </button>
            <button
              onClick={() => setShowAddForm(false)}
              className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Abbrechen
            </button>
          </div>
        </div>
      )}

      {/* Events List */}
      <div className="space-y-2">
        {dayEvents.length === 0 ? (
          <p className="text-center py-8 text-gray-500">
            Keine Termine für heute
          </p>
        ) : (
          dayEvents.map(event => {
            const isEditing = editingEventId !== null && editingEventId === event.id;
            // console.log(`Event ${event.id} (${event.title}): isEditing = ${isEditing}, editingEventId = ${editingEventId}`);
            return isEditing ? (
            // Edit form for the event
            <div key={event.id} className="p-4 bg-gray-50 rounded-lg space-y-3">
              <input
                type="text"
                value={newEvent.title || ''}
                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                placeholder="Titel"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              
              <div className="grid grid-cols-2 gap-2">
                <select
                  value={newEvent.type}
                  onChange={(e) => setNewEvent({ ...newEvent, type: e.target.value as CalendarEvent['type'] })}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="training">Training</option>
                  <option value="study">Studium</option>
                  <option value="meal">Mahlzeit</option>
                  <option value="appointment">Termin</option>
                  <option value="other">Sonstiges</option>
                </select>
                
                <div className="flex gap-2">
                  <input
                    type="time"
                    value={newEvent.startTime}
                    onChange={(e) => setNewEvent({ ...newEvent, startTime: e.target.value })}
                    className="flex-1 px-2 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <span className="self-center text-gray-500">-</span>
                  <input
                    type="time"
                    value={newEvent.endTime}
                    onChange={(e) => setNewEvent({ ...newEvent, endTime: e.target.value })}
                    className="flex-1 px-2 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <textarea
                value={newEvent.description || ''}
                onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                placeholder="Beschreibung (optional)"
                rows={2}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              
              <div className="flex gap-2">
                <button
                  onClick={handleUpdateEvent}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Speichern
                </button>
                <button
                  onClick={cancelEdit}
                  className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Abbrechen
                </button>
              </div>
            </div>
          ) : (
            <div
              key={event.id}
              className={`p-3 rounded-lg border transition-all ${getEventTypeColor(event.type)} ${
                event.completed ? 'opacity-60' : ''
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{getEventTypeIcon(event.type)}</span>
                    <h4 className={`font-medium ${event.completed ? 'line-through' : ''}`}>
                      {event.title}
                    </h4>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <ClockIcon className="w-4 h-4" />
                    <span className="text-sm">
                      {event.startTime} - {event.endTime}
                    </span>
                  </div>
                  {event.description && (
                    <p className="text-sm mt-2 opacity-80">{event.description}</p>
                  )}
                  {event.recurring && (
                    <p className="text-xs mt-1 opacity-70">
                      🔄 {event.recurring.frequency === 'daily' ? 'Täglich' : 
                          event.recurring.frequency === 'weekly' ? 'Wöchentlich' : 
                          'Monatlich'}
                    </p>
                  )}
                </div>
                
                <div className="flex items-center gap-1 ml-2">
                  <button
                    onClick={() => toggleEventCompletion(event.id)}
                    className={`p-1.5 rounded-lg transition-colors ${
                      event.completed
                        ? 'text-green-700 hover:bg-green-200'
                        : 'hover:bg-white hover:bg-opacity-50'
                    }`}
                  >
                    <CheckCircleIcon className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleEditEvent(event)}
                    className="p-1.5 hover:bg-white hover:bg-opacity-50 rounded-lg transition-colors"
                  >
                    <PencilIcon className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDeleteEvent(event.id)}
                    className="p-1.5 hover:bg-white hover:bg-opacity-50 rounded-lg transition-colors"
                  >
                    <TrashIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )})
        )}
      </div>

    </div>
  );
};

export default DaySchedule;