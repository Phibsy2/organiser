import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { de } from 'date-fns/locale';
import useCalendarStore, { CalendarEvent } from '../../store/calendarStore';
import {
  ClockIcon,
  PlayIcon,
  ForwardIcon
} from '@heroicons/react/24/outline';

interface CurrentEventInfo {
  current: CalendarEvent | null;
  next: CalendarEvent | null;
  timeRemaining: number; // minutes
  timeUntilNext: number; // minutes
}

const CurrentEventBar: React.FC = () => {
  const { events } = useCalendarStore();
  const [currentEventInfo, setCurrentEventInfo] = useState<CurrentEventInfo>({
    current: null,
    next: null,
    timeRemaining: 0,
    timeUntilNext: 0
  });
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  // Calculate current and next events
  useEffect(() => {
    const now = currentTime;
    const todayStr = format(now, 'yyyy-MM-dd');
    const currentTimeStr = format(now, 'HH:mm');
    
    // Get today's events
    const todayEvents = events
      .filter(event => event.date === todayStr)
      .sort((a, b) => a.startTime.localeCompare(b.startTime));

    let current: CalendarEvent | null = null;
    let next: CalendarEvent | null = null;
    let timeRemaining = 0;
    let timeUntilNext = 0;

    // Find current event
    for (const event of todayEvents) {
      if (event.startTime <= currentTimeStr && event.endTime > currentTimeStr) {
        current = event;
        // Calculate remaining time
        const [endHour, endMin] = event.endTime.split(':').map(Number);
        const endMinutes = endHour * 60 + endMin;
        const nowMinutes = now.getHours() * 60 + now.getMinutes();
        timeRemaining = endMinutes - nowMinutes;
        break;
      }
    }

    // Find next event
    for (const event of todayEvents) {
      if (event.startTime > currentTimeStr) {
        next = event;
        // Calculate time until next
        const [startHour, startMin] = event.startTime.split(':').map(Number);
        const startMinutes = startHour * 60 + startMin;
        const nowMinutes = now.getHours() * 60 + now.getMinutes();
        timeUntilNext = startMinutes - nowMinutes;
        break;
      }
    }

    setCurrentEventInfo({ current, next, timeRemaining, timeUntilNext });
  }, [events, currentTime]);

  const formatTimeRemaining = (minutes: number) => {
    if (minutes < 60) {
      return `${minutes} Min`;
    }
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return mins > 0 ? `${hours}h ${mins}min` : `${hours}h`;
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

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'training':
        return 'bg-red-50 text-red-700 border-red-200';
      case 'study':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'meal':
        return 'bg-green-50 text-green-700 border-green-200';
      case 'appointment':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 mb-4">
      <div className="flex items-center justify-between">
        {/* Current Event */}
        {currentEventInfo.current ? (
          <div className={`flex-1 mr-4 p-3 rounded-lg border ${getEventTypeColor(currentEventInfo.current.type)}`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <PlayIcon className="w-5 h-5" />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{getEventTypeIcon(currentEventInfo.current.type)}</span>
                    <h3 className="font-semibold">{currentEventInfo.current.title}</h3>
                  </div>
                  <p className="text-sm opacity-80">
                    {currentEventInfo.current.startTime} - {currentEventInfo.current.endTime}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">Noch</p>
                <p className="text-lg font-bold">{formatTimeRemaining(currentEventInfo.timeRemaining)}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex-1 mr-4 p-3 rounded-lg border border-gray-200 bg-gray-50">
            <div className="flex items-center gap-3">
              <ClockIcon className="w-5 h-5 text-gray-500" />
              <div>
                <h3 className="font-semibold text-gray-700">Keine aktuelle Aktivität</h3>
                <p className="text-sm text-gray-500">Freie Zeit</p>
              </div>
            </div>
          </div>
        )}

        {/* Next Event */}
        {currentEventInfo.next && (
          <div className="flex-1 p-3 rounded-lg border border-gray-200 bg-gray-50">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ForwardIcon className="w-5 h-5 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-600">Als Nächstes</p>
                  <div className="flex items-center gap-2">
                    <span>{getEventTypeIcon(currentEventInfo.next.type)}</span>
                    <h3 className="font-semibold">{currentEventInfo.next.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    um {currentEventInfo.next.startTime} Uhr
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">In</p>
                <p className="font-semibold">{formatTimeRemaining(currentEventInfo.timeUntilNext)}</p>
              </div>
            </div>
          </div>
        )}

        {/* No upcoming events */}
        {!currentEventInfo.next && (
          <div className="flex-1 p-3 rounded-lg border border-gray-200 bg-gray-50">
            <div className="flex items-center gap-3">
              <ForwardIcon className="w-5 h-5 text-gray-400" />
              <div>
                <h3 className="font-semibold text-gray-600">Keine weiteren Termine</h3>
                <p className="text-sm text-gray-500">Rest des Tages frei</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Current Time Display */}
      <div className="mt-3 text-center">
        <p className="text-sm text-gray-500">
          {format(currentTime, 'EEEE, d. MMMM yyyy • HH:mm', { locale: de })} Uhr
        </p>
      </div>
    </div>
  );
};

export default CurrentEventBar;