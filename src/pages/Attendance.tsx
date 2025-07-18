import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Calendar, CheckCircle, XCircle, Clock, TrendingUp } from 'lucide-react';

const dummyAttendance = [
  { date: '2024-01-15', course: 'Advanced Mathematics', status: 'present' },
  { date: '2024-01-15', course: 'English Literature', status: 'present' },
  { date: '2024-01-14', course: 'Physics Laboratory', status: 'present' },
  { date: '2024-01-14', course: 'Chemistry Fundamentals', status: 'absent' },
  { date: '2024-01-13', course: 'Advanced Mathematics', status: 'present' },
  { date: '2024-01-13', course: 'English Literature', status: 'present' },
  { date: '2024-01-12', course: 'Physics Laboratory', status: 'late' },
  { date: '2024-01-12', course: 'Chemistry Fundamentals', status: 'present' },
  { date: '2024-01-11', course: 'Advanced Mathematics', status: 'present' },
  { date: '2024-01-11', course: 'English Literature', status: 'present' },
];

const courseAttendance = [
  { course: 'Advanced Mathematics', present: 18, total: 20, percentage: 90 },
  { course: 'Physics Laboratory', present: 17, total: 18, percentage: 94.4 },
  { course: 'English Literature', present: 19, total: 20, percentage: 95 },
  { course: 'Chemistry Fundamentals', present: 16, total: 18, percentage: 88.9 },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'present': return 'grade-excellent';
    case 'late': return 'grade-average';
    case 'absent': return 'grade-poor';
    default: return 'grade-average';
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'present': return <CheckCircle className="w-4 h-4 text-success" />;
    case 'late': return <Clock className="w-4 h-4 text-warning" />;
    case 'absent': return <XCircle className="w-4 h-4 text-destructive" />;
    default: return <Clock className="w-4 h-4" />;
  }
};

const calculateOverallAttendance = () => {
  const totalPresent = courseAttendance.reduce((sum, course) => sum + course.present, 0);
  const totalClasses = courseAttendance.reduce((sum, course) => sum + course.total, 0);
  return ((totalPresent / totalClasses) * 100).toFixed(1);
};

const Attendance = () => {
  const overallAttendance = calculateOverallAttendance();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Attendance</h1>
          <p className="text-muted-foreground">Track your class attendance record</p>
        </div>
      </div>

      {/* Attendance Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="stats-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Overall</p>
                <p className="text-3xl font-bold text-primary">{overallAttendance}%</p>
              </div>
              <TrendingUp className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="stats-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Present</p>
                <p className="text-3xl font-bold text-success">
                  {dummyAttendance.filter(a => a.status === 'present').length}
                </p>
              </div>
              <CheckCircle className="w-8 h-8 text-success" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="stats-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Late</p>
                <p className="text-3xl font-bold text-warning">
                  {dummyAttendance.filter(a => a.status === 'late').length}
                </p>
              </div>
              <Clock className="w-8 h-8 text-warning" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="stats-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Absent</p>
                <p className="text-3xl font-bold text-destructive">
                  {dummyAttendance.filter(a => a.status === 'absent').length}
                </p>
              </div>
              <XCircle className="w-8 h-8 text-destructive" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Course-wise Attendance */}
      <Card>
        <CardHeader>
          <CardTitle>Course-wise Attendance</CardTitle>
          <CardDescription>Attendance breakdown by subject</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {courseAttendance.map((course, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold">{course.course}</h3>
                  <Badge className={course.percentage >= 95 ? 'grade-excellent' : course.percentage >= 90 ? 'grade-good' : course.percentage >= 80 ? 'grade-average' : 'grade-poor'}>
                    {course.percentage.toFixed(1)}%
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Classes Attended: {course.present}/{course.total}</span>
                    <span>{course.percentage.toFixed(1)}%</span>
                  </div>
                  <Progress value={course.percentage} className="h-3" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Attendance */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Recent Attendance
          </CardTitle>
          <CardDescription>Your latest attendance records</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {dummyAttendance.slice(0, 10).map((record, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-3">
                  {getStatusIcon(record.status)}
                  <div>
                    <p className="font-medium">{record.course}</p>
                    <p className="text-sm text-muted-foreground">{record.date}</p>
                  </div>
                </div>
                <Badge className={getStatusColor(record.status)}>
                  {record.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Attendance;