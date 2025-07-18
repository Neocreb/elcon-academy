import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, MapPin, User } from 'lucide-react';

const dummySchedule = {
  Monday: [
    { time: '09:00-10:30', subject: 'Advanced Mathematics', room: 'Room 101', teacher: 'Dr. Smith' },
    { time: '11:00-12:30', subject: 'English Literature', room: 'Room 205', teacher: 'Ms. Davis' },
    { time: '14:00-15:30', subject: 'Study Hall', room: 'Library', teacher: 'Self-Study' }
  ],
  Tuesday: [
    { time: '10:00-11:30', subject: 'Chemistry Fundamentals', room: 'Lab 301', teacher: 'Dr. Brown' },
    { time: '14:00-16:00', subject: 'Physics Laboratory', room: 'Lab 201', teacher: 'Prof. Johnson' }
  ],
  Wednesday: [
    { time: '09:00-10:30', subject: 'Advanced Mathematics', room: 'Room 101', teacher: 'Dr. Smith' },
    { time: '11:00-12:30', subject: 'English Literature', room: 'Room 205', teacher: 'Ms. Davis' },
    { time: '13:00-14:00', subject: 'Lunch Break', room: 'Cafeteria', teacher: '' }
  ],
  Thursday: [
    { time: '10:00-11:30', subject: 'Chemistry Fundamentals', room: 'Lab 301', teacher: 'Dr. Brown' },
    { time: '14:00-16:00', subject: 'Physics Laboratory', room: 'Lab 201', teacher: 'Prof. Johnson' }
  ],
  Friday: [
    { time: '09:00-10:30', subject: 'Advanced Mathematics', room: 'Room 101', teacher: 'Dr. Smith' },
    { time: '11:00-12:00', subject: 'Office Hours', room: 'Various', teacher: 'Various' },
    { time: '13:00-14:30', subject: 'Student Activities', room: 'Gym', teacher: 'Activities Coordinator' }
  ]
};

const timeSlots = [
  '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'
];

const Timetable = () => {
  const days = Object.keys(dummySchedule);
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Timetable</h1>
          <p className="text-muted-foreground">Your weekly class schedule</p>
        </div>
        <Badge variant="outline" className="grade-excellent">
          Current: {today}
        </Badge>
      </div>

      {/* Mobile View - Day by Day */}
      <div className="md:hidden space-y-4">
        {days.map((day) => (
          <Card key={day} className={`${day === today ? 'ring-2 ring-primary' : ''}`}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{day}</span>
                {day === today && <Badge className="grade-excellent">Today</Badge>}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {dummySchedule[day as keyof typeof dummySchedule].map((class_item, index) => (
                <div key={index} className="p-3 border rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="font-medium">{class_item.time}</span>
                  </div>
                  <h4 className="font-semibold text-lg">{class_item.subject}</h4>
                  {class_item.teacher && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <User className="w-4 h-4" />
                      <span>{class_item.teacher}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{class_item.room}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Desktop View - Grid */}
      <div className="hidden md:block">
        <Card>
          <CardHeader>
            <CardTitle>Weekly Schedule</CardTitle>
            <CardDescription>Your complete weekly timetable</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <div className="grid grid-cols-6 gap-2 min-w-[800px]">
                {/* Header */}
                <div className="p-3 font-semibold text-center bg-muted rounded-lg">Time</div>
                {days.map((day) => (
                  <div 
                    key={day} 
                    className={`p-3 font-semibold text-center rounded-lg ${
                      day === today ? 'bg-primary text-primary-foreground' : 'bg-muted'
                    }`}
                  >
                    {day}
                  </div>
                ))}

                {/* Time slots */}
                {timeSlots.map((time) => (
                  <React.Fragment key={time}>
                    <div className="p-3 text-sm text-muted-foreground text-center bg-muted/50 rounded-lg">
                      {time}
                    </div>
                    {days.map((day) => {
                      const dayClasses = dummySchedule[day as keyof typeof dummySchedule];
                      const classAtTime = dayClasses.find(c => c.time.startsWith(time));
                      
                      return (
                        <div key={`${day}-${time}`} className="p-2 min-h-[80px] border rounded-lg">
                          {classAtTime && (
                            <div className="h-full p-2 bg-primary/10 rounded border-l-4 border-primary">
                              <div className="text-sm font-medium text-primary">
                                {classAtTime.subject}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {classAtTime.room}
                              </div>
                              {classAtTime.teacher && (
                                <div className="text-xs text-muted-foreground">
                                  {classAtTime.teacher}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Today's Schedule */}
      {today in dummySchedule && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Today's Schedule - {today}
            </CardTitle>
            <CardDescription>Your classes for today</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {dummySchedule[today as keyof typeof dummySchedule].map((class_item, index) => (
                <div key={index} className="flex items-center gap-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="text-center min-w-[80px]">
                    <div className="font-medium text-primary">{class_item.time}</div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">{class_item.subject}</h4>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{class_item.room}</span>
                      </div>
                      {class_item.teacher && (
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{class_item.teacher}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Timetable;