import React, { useState } from 'react';
import QuickActions from './QuickActions';
import Calendar from './Calendar';
import DaySchedule from './DaySchedule';
import InitializeRoutine from './InitializeRoutine';
import CurrentEventBar from './CurrentEventBar';

interface DashboardProps {
  onNavigate?: (tab: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pb-20">
      <InitializeRoutine />
      <div className="px-4 py-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Übersicht</h1>
        
        {/* Current Event Bar */}
        <CurrentEventBar />
        
        {/* Calendar */}
        <div className="mb-6">
          <Calendar 
            selectedDate={selectedDate}
            onDateSelect={setSelectedDate}
          />
        </div>
        
        {/* Day Schedule */}
        <DaySchedule 
          date={selectedDate}
        />
      </div>
      
      <QuickActions onNavigate={onNavigate} />
    </div>
  );
};

export default Dashboard;