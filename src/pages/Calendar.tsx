import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar as CalendarIcon, Plus, ChevronLeft, ChevronRight, Clock, MapPin } from 'lucide-react';

const currentMonth = new Date().getMonth();
const currentYear = new Date().getFullYear();
const currentDate = new Date().getDate();

const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const dummyEvents = [
  {
    id: 1,
    title: 'Parent-Teacher Conference',
    date: '2024-01-25',
    time: '9:00 AM - 5:00 PM',
    type: 'meeting',
    location: 'Main Hall',
    description: 'Annual parent-teacher conference meetings'
  },
  {
    id: 2,
    title: 'Science Fair',
    date: '2024-01-15',
    time: '10:00 AM - 3:00 PM',
    type: 'event',
    location: 'Science Labs',
    description: 'Student science project presentations'
  },
  {
    id: 3,
    title: 'Winter Break Begins',
    date: '2024-01-23',
    time: 'All Day',
    type: 'holiday',
    location: 'School-wide',
    description: 'Last day of classes before winter break'
  },
  {
    id: 4,
    title: 'Staff Meeting',
    date: '2024-01-18',
    time: '3:30 PM - 5:00 PM',
    type: 'meeting',
    location: 'Conference Room',
    description: 'Monthly staff development meeting'
  },
  {
    id: 5,
    title: 'Basketball Game',
    date: '2024-01-20',
    time: '6:00 PM - 8:00 PM',
    type: 'sports',
    location: 'Gymnasium',
    description: 'Home game vs. Riverside High'
  }
];

const getEventTypeColor = (type: string) => {
  switch (type) {
    case 'meeting': return 'bg-blue-100 text-blue-800';
    case 'event': return 'bg-green-100 text-green-800';
    case 'holiday': return 'bg-red-100 text-red-800';
    case 'sports': return 'bg-purple-100 text-purple-800';
    case 'exam': return 'bg-orange-100 text-orange-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

const getDaysInMonth = (month: number, year: number) => {
  return new Date(year, month + 1, 0).getDate();
};

const getFirstDayOfMonth = (month: number, year: number) => {
  return new Date(year, month, 1).getDay();
};

const AcademicCalendar = () => {
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);

  const daysInMonth = getDaysInMonth(selectedMonth, selectedYear);
  const firstDay = getFirstDayOfMonth(selectedMonth, selectedYear);
  
  const calendarDays = [];
  
  // Empty cells for days before the first day of the month
  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(null);
  }
  
  // Days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  const getEventsForDate = (day: number) => {
    const dateStr = `${selectedYear}-${String(selectedMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return dummyEvents.filter(event => event.date === dateStr);
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      if (selectedMonth === 0) {
        setSelectedMonth(11);
        setSelectedYear(selectedYear - 1);
      } else {
        setSelectedMonth(selectedMonth - 1);
      }
    } else {
      if (selectedMonth === 11) {
        setSelectedMonth(0);
        setSelectedYear(selectedYear + 1);
      } else {
        setSelectedMonth(selectedMonth + 1);
      }
    }
    setSelectedDate(null);
  };

  const selectedDateEvents = selectedDate ? getEventsForDate(selectedDate) : [];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Academic Calendar</h1>
          <p className="text-muted-foreground">Manage school events and important dates</p>
        </div>
        <Button className="btn-primary hover-scale">
          <Plus className="w-4 h-4 mr-2" />
          Add Event
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="stats-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Events</p>
                <p className="text-3xl font-bold text-foreground">{dummyEvents.length}</p>
              </div>
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <CalendarIcon className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="stats-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">This Month</p>
                <p className="text-3xl font-bold text-foreground">
                  {dummyEvents.filter(e => e.date.startsWith(`${selectedYear}-${String(selectedMonth + 1).padStart(2, '0')}`)).length}
                </p>
              </div>
              <div className="h-12 w-12 bg-success/10 rounded-lg flex items-center justify-center">
                <CalendarIcon className="h-6 w-6 text-success" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="stats-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Upcoming</p>
                <p className="text-3xl font-bold text-foreground">8</p>
              </div>
              <div className="h-12 w-12 bg-warning/10 rounded-lg flex items-center justify-center">
                <Clock className="h-6 w-6 text-warning" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="stats-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Holidays</p>
                <p className="text-3xl font-bold text-foreground">
                  {dummyEvents.filter(e => e.type === 'holiday').length}
                </p>
              </div>
              <div className="h-12 w-12 bg-destructive/10 rounded-lg flex items-center justify-center">
                <CalendarIcon className="h-6 w-6 text-destructive" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar */}
        <Card className="lg:col-span-2 card-gradient">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <CalendarIcon className="h-5 w-5" />
                {monthNames[selectedMonth]} {selectedYear}
              </CardTitle>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={() => navigateMonth('prev')} className="hover-scale">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" onClick={() => navigateMonth('next')} className="hover-scale">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-2 mb-4">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="text-center text-sm font-medium text-muted-foreground p-2">
                  {day}
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-7 gap-2">
              {calendarDays.map((day, index) => {
                if (!day) {
                  return <div key={index} className="p-2" />;
                }
                
                const eventsForDay = getEventsForDate(day);
                const isToday = selectedMonth === currentMonth && selectedYear === currentYear && day === currentDate;
                const isSelected = selectedDate === day;
                
                return (
                  <button
                    key={index}
                    onClick={() => setSelectedDate(day)}
                    className={`
                      p-2 text-sm rounded-lg transition-colors hover:bg-muted min-h-[40px] flex flex-col items-center justify-start
                      ${isToday ? 'bg-primary text-primary-foreground font-bold' : ''}
                      ${isSelected ? 'ring-2 ring-primary' : ''}
                      ${eventsForDay.length > 0 ? 'bg-accent/20' : ''}
                    `}
                  >
                    <span>{day}</span>
                    {eventsForDay.length > 0 && (
                      <div className="w-1 h-1 bg-primary rounded-full mt-1" />
                    )}
                  </button>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Event Details */}
        <Card className="card-gradient">
          <CardHeader>
            <CardTitle>
              {selectedDate ? `Events for ${monthNames[selectedMonth]} ${selectedDate}` : 'Select a Date'}
            </CardTitle>
            <CardDescription>
              {selectedDate ? `View events scheduled for this date` : 'Click on a date to see events'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {selectedDate ? (
              <div className="space-y-4">
                {selectedDateEvents.length > 0 ? (
                  selectedDateEvents.map(event => (
                    <div key={event.id} className="p-3 border rounded-lg space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold text-foreground">{event.title}</h4>
                        <Badge className={getEventTypeColor(event.type)}>{event.type}</Badge>
                      </div>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          {event.time}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          {event.location}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{event.description}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-muted-foreground text-center py-4">
                    No events scheduled for this date
                  </p>
                )}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground text-center py-8">
                Select a date on the calendar to view events
              </p>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Events */}
      <Card className="card-gradient">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Upcoming Events
          </CardTitle>
          <CardDescription>Next events on the academic calendar</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dummyEvents.slice(0, 4).map(event => (
              <div key={event.id} className="p-4 border rounded-lg space-y-3">
                <div className="flex items-start justify-between">
                  <h4 className="font-semibold text-foreground">{event.title}</h4>
                  <Badge className={getEventTypeColor(event.type)}>{event.type}</Badge>
                </div>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="h-4 w-4" />
                    {new Date(event.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {event.location}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{event.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AcademicCalendar;