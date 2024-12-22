import React, { useState } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, parseISO } from 'date-fns';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import type { DroneReport } from '../../types/report';
import { CalendarFilters } from '../calendar/CalendarFilters';
import { CalendarIncidentMarker } from '../calendar/CalendarIncidentMarker';

interface CalendarProps {
  reports: DroneReport[];
  onDateClick: (date: Date, reports: DroneReport[]) => void;
}

export function Calendar({ reports, onDateClick }: CalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [filters, setFilters] = useState({
    status: 'all',
    priority: 'all',
    dateRange: {
      start: '',
      end: ''
    }
  });

  const start = startOfMonth(currentMonth);
  const end = endOfMonth(currentMonth);
  const days = eachDayOfInterval({ start, end });

  const filteredReports = reports.filter(report => {
    if (filters.status !== 'all' && report.status !== filters.status) return false;
    if (filters.priority !== 'all' && report.emergencyStatus !== filters.priority) return false;
    if (filters.dateRange.start && filters.dateRange.end) {
      const reportDate = parseISO(report.dateTime);
      const startDate = parseISO(filters.dateRange.start);
      const endDate = parseISO(filters.dateRange.end);
      if (reportDate < startDate || reportDate > endDate) return false;
    }
    return true;
  });

  const getReportsForDate = (date: Date) => {
    return filteredReports.filter(report => 
      isSameDay(parseISO(report.dateTime), date)
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-yellow-50 rounded-lg">
              <CalendarIcon className="h-6 w-6 text-yellow-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Incident Calendar</h2>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)))}
              className="p-2 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>
            <span className="text-lg font-semibold text-gray-900 min-w-[140px] text-center">
              {format(currentMonth, 'MMMM yyyy')}
            </span>
            <button
              onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)))}
              className="p-2 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>

        <CalendarFilters filters={filters} onChange={setFilters} />
      </div>
      
      <div className="p-6">
        <div className="grid grid-cols-7 gap-px bg-gray-100 rounded-lg overflow-hidden">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="text-center py-3 bg-gray-50">
              <span className="text-sm font-medium text-gray-600">{day}</span>
            </div>
          ))}
          
          {days.map(day => {
            const dateReports = getReportsForDate(day);
            const hasReports = dateReports.length > 0;
            const isToday = isSameDay(day, new Date());
            const isCurrentMonth = isSameMonth(day, currentMonth);
            
            return (
              <button
                key={day.toString()}
                onClick={() => hasReports && onDateClick(day, dateReports)}
                className={`
                  relative p-3 bg-white transition-all duration-200
                  ${!isCurrentMonth ? 'text-gray-400' : 'text-gray-900'}
                  ${hasReports ? 'hover:bg-yellow-50 cursor-pointer' : 'cursor-default'}
                  ${isToday ? 'bg-blue-50' : ''}
                `}
              >
                <span className={`
                  inline-flex items-center justify-center w-8 h-8 rounded-full text-sm
                  ${isToday ? 'bg-blue-100 font-bold' : ''}
                  ${hasReports && !isToday ? 'font-semibold' : ''}
                `}>
                  {format(day, 'd')}
                </span>
                
                {hasReports && (
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex gap-1">
                    {dateReports.map((report, index) => (
                      <CalendarIncidentMarker key={index} incident={report} />
                    ))}
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <span className="text-sm text-gray-600">Emergency</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <span className="text-sm text-gray-600">Urgent</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span className="text-sm text-gray-600">Routine</span>
          </div>
        </div>
      </div>
    </div>
  );
}