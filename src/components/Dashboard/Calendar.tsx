import React, { useState, useMemo } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday, isSameDay, startOfWeek, endOfWeek } from 'date-fns';
import { de } from 'date-fns/locale';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import useCalendarStore from '../../store/calendarStore';

interface CalendarProps {
  onDateSelect?: (date: Date) => void;
  selectedDate?: Date;
}

const Calendar: React.FC<CalendarProps> = ({ onDateSelect, selectedDate }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const { events, getEventsForDateRange } = useCalendarStore();

  // Get all days to display in the calendar grid
  const calendarDays = useMemo(() => {
    const start = startOfWeek(startOfMonth(currentMonth), { locale: de });
    const end = endOfWeek(endOfMonth(currentMonth), { locale: de });
    return eachDayOfInterval({ start, end });
  }, [currentMonth]);

  // Get events for the current month view
  const monthEvents = useMemo(() => {
    const startDate = calendarDays[0].toISOString().split('T')[0];
    const endDate = calendarDays[calendarDays.length - 1].toISOString().split('T')[0];
    return getEventsForDateRange(startDate, endDate);
  }, [calendarDays, getEventsForDateRange]);

  // Group events by date
  const eventsByDate = useMemo(() => {
    const grouped: { [date: string]: typeof events } = {};
    monthEvents.forEach(event => {
      if (!grouped[event.date]) {
        grouped[event.date] = [];
      }
      grouped[event.date].push(event);
    });
    return grouped;
  }, [monthEvents]);

  const handlePreviousMonth = () => {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() + 1));
  };

  const handleDateClick = (date: Date) => {
    if (onDateSelect) {
      onDateSelect(date);
    }
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'training':
        return 'bg-red-400';
      case 'study':
        return 'bg-purple-400';
      case 'meal':
        return 'bg-green-400';
      case 'appointment':
        return 'bg-blue-400';
      default:
        return 'bg-gray-400';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-3">
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-3">
        <button
          onClick={handlePreviousMonth}
          className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ChevronLeftIcon className="w-4 h-4 text-gray-600" />
        </button>
        <h3 className="text-base font-semibold text-gray-900">
          {format(currentMonth, 'MMMM yyyy', { locale: de })}
        </h3>
        <button
          onClick={handleNextMonth}
          className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ChevronRightIcon className="w-4 h-4 text-gray-600" />
        </button>
      </div>

      {/* Weekday headers */}
      <div className="grid grid-cols-7 gap-0.5 mb-1">
        {['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'].map(day => (
          <div key={day} className="text-center text-xs font-medium text-gray-500">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-0.5">
        {calendarDays.map(day => {
          const dateStr = format(day, 'yyyy-MM-dd');
          const dayEvents = eventsByDate[dateStr] || [];
          const isSelected = selectedDate && isSameDay(day, selectedDate);
          const isCurrentMonth = isSameMonth(day, currentMonth);

          return (
            <button
              key={day.toISOString()}
              onClick={() => handleDateClick(day)}
              className={`
                relative p-1 text-xs rounded transition-all h-8 
                ${isToday(day) ? 'bg-blue-100 font-semibold' : ''}
                ${isSelected ? 'ring-2 ring-blue-500' : ''}
                ${isCurrentMonth ? 'text-gray-900' : 'text-gray-400'}
                ${!isToday(day) && !isSelected ? 'hover:bg-gray-50' : ''}
              `}
            >
              <div>{format(day, 'd')}</div>
              
              {/* Event indicators */}
              {dayEvents.length > 0 && (
                <div className="absolute bottom-0.5 left-1/2 transform -translate-x-1/2 flex gap-0.5">
                  {dayEvents.slice(0, 2).map((event, idx) => (
                    <div
                      key={`${event.id}-${idx}`}
                      className={`w-0.5 h-0.5 rounded-full ${getEventTypeColor(event.type)}`}
                    />
                  ))}
                  {dayEvents.length > 2 && (
                    <div className="w-0.5 h-0.5 rounded-full bg-gray-400" />
                  )}
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Legend */}
      <div className="mt-3 pt-3 border-t border-gray-200">
        <div className="flex flex-wrap gap-2 text-xs">
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
            <span className="text-gray-600">Training</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            <span className="text-gray-600">Studium</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
            <span className="text-gray-600">Mahlzeit</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span className="text-gray-600">Termin</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;