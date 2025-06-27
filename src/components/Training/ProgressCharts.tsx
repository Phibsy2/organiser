import React, { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import { format, subDays } from 'date-fns';
import { de } from 'date-fns/locale';
import {
  ChartBarIcon,
  ScaleIcon,
  FireIcon,
  TrophyIcon
} from '@heroicons/react/24/outline';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type ChartType = 'weight' | 'strength' | 'volume' | 'calories';

const ProgressCharts: React.FC = () => {
  const [activeChart, setActiveChart] = useState<ChartType>('weight');

  // Generate sample data for the last 30 days
  const generateDates = (days: number) => {
    return Array.from({ length: days }, (_, i) => 
      format(subDays(new Date(), days - 1 - i), 'dd.MM', { locale: de })
    );
  };

  const dates = generateDates(30);

  // Weight progression data
  const weightData = {
    labels: dates,
    datasets: [
      {
        label: 'Gewicht (kg)',
        data: dates.map((_, i) => 92 - (i * 0.1) + Math.random() * 0.5),
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.3
      },
      {
        label: 'Körperfett (%)',
        data: dates.map((_, i) => 23 - (i * 0.05) + Math.random() * 0.3),
        borderColor: 'rgb(239, 68, 68)',
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        tension: 0.3,
        yAxisID: 'y1'
      }
    ]
  };

  // Strength progression data (example: bench press)
  const strengthData = {
    labels: dates.filter((_, i) => i % 3 === 0), // Every 3rd day
    datasets: [
      {
        label: 'Bankdrücken (kg)',
        data: [60, 62.5, 62.5, 65, 67.5, 67.5, 70, 72.5, 72.5, 75],
        borderColor: 'rgb(34, 197, 94)',
        backgroundColor: 'rgba(34, 197, 94, 0.1)',
        tension: 0.3
      },
      {
        label: 'Kniebeugen (kg)',
        data: [80, 82.5, 85, 85, 87.5, 90, 90, 92.5, 95, 95],
        borderColor: 'rgb(168, 85, 247)',
        backgroundColor: 'rgba(168, 85, 247, 0.1)',
        tension: 0.3
      }
    ]
  };

  // Training volume data
  const volumeData = {
    labels: ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'],
    datasets: [
      {
        label: 'Trainingsvolumen (kg)',
        data: [3200, 0, 2800, 0, 3500, 1500, 0],
        backgroundColor: 'rgba(251, 146, 60, 0.8)',
        borderColor: 'rgb(251, 146, 60)',
        borderWidth: 1
      }
    ]
  };

  // Calories burned data
  const caloriesData = {
    labels: ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'],
    datasets: [
      {
        label: 'Kalorien verbrannt',
        data: [450, 0, 380, 0, 520, 280, 0],
        backgroundColor: 'rgba(239, 68, 68, 0.8)',
        borderColor: 'rgb(239, 68, 68)',
        borderWidth: 1
      }
    ]
  };

  const weightOptions: ChartOptions<'line'> = {
    responsive: true,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        type: 'linear' as const,
        display: true,
        position: 'left' as const,
        title: {
          display: true,
          text: 'Gewicht (kg)'
        }
      },
      y1: {
        type: 'linear' as const,
        display: true,
        position: 'right' as const,
        title: {
          display: true,
          text: 'Körperfett (%)'
        },
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  const strengthOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        title: {
          display: true,
          text: 'Gewicht (kg)'
        }
      }
    }
  };

  const barOptions: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      }
    }
  };

  const chartButtons = [
    { type: 'weight' as ChartType, icon: ScaleIcon, label: 'Gewicht' },
    { type: 'strength' as ChartType, icon: TrophyIcon, label: 'Kraft' },
    { type: 'volume' as ChartType, icon: ChartBarIcon, label: 'Volumen' },
    { type: 'calories' as ChartType, icon: FireIcon, label: 'Kalorien' }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Trainingsfortschritt</h2>

      {/* Chart Type Selector */}
      <div className="grid grid-cols-4 gap-2 mb-6">
        {chartButtons.map(({ type, icon: Icon, label }) => (
          <button
            key={type}
            onClick={() => setActiveChart(type)}
            className={`p-3 rounded-lg flex flex-col items-center transition-colors duration-200 ${
              activeChart === type
                ? 'bg-purple-100 text-purple-700 border-2 border-purple-300'
                : 'bg-gray-50 text-gray-600 border-2 border-transparent hover:bg-gray-100'
            }`}
          >
            <Icon className="w-6 h-6 mb-1" />
            <span className="text-xs font-medium">{label}</span>
          </button>
        ))}
      </div>

      {/* Chart Display */}
      <div className="h-64">
        {activeChart === 'weight' && (
          <Line data={weightData} options={weightOptions} />
        )}
        {activeChart === 'strength' && (
          <Line data={strengthData} options={strengthOptions} />
        )}
        {activeChart === 'volume' && (
          <Bar data={volumeData} options={barOptions} />
        )}
        {activeChart === 'calories' && (
          <Bar data={caloriesData} options={barOptions} />
        )}
      </div>

      {/* Quick Stats */}
      <div className="mt-6 grid grid-cols-3 gap-4 text-center">
        <div className="bg-green-50 rounded-lg p-3">
          <p className="text-2xl font-bold text-green-700">-3.2kg</p>
          <p className="text-xs text-green-600">Letzter Monat</p>
        </div>
        <div className="bg-blue-50 rounded-lg p-3">
          <p className="text-2xl font-bold text-blue-700">+25%</p>
          <p className="text-xs text-blue-600">Kraftzuwachs</p>
        </div>
        <div className="bg-orange-50 rounded-lg p-3">
          <p className="text-2xl font-bold text-orange-700">8,420</p>
          <p className="text-xs text-orange-600">Kcal verbrannt</p>
        </div>
      </div>
    </div>
  );
};

export default ProgressCharts;