import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  BookOpen, 
  ClipboardList, 
  TrendingUp, 
  Calendar,
  Award,
  Clock,
  AlertCircle,
  CheckCircle
} from 'lucide-react';

const dummyCourses = [
  { id: 1, name: 'Mathematics', teacher: 'Dr. Smith', grade: 'A', progress: 85, color: 'bg-blue-500' },
  { id: 2, name: 'Physics', teacher: 'Prof. Johnson', grade: 'B+', progress: 78, color: 'bg-green-500' },
  { id: 3, name: 'Chemistry', teacher: 'Dr. Brown', grade: 'A-', progress: 92, color: 'bg-purple-500' },
  { id: 4, name: 'English Literature', teacher: 'Ms. Davis', grade: 'B', progress: 70, color: 'bg-orange-500' },
];

const dummyAssignments = [
  { id: 1, title: 'Calculus Problem Set', course: 'Mathematics', dueDate: '2024-01-15', status: 'pending' },
  { id: 2, title: 'Lab Report: Gravity', course: 'Physics', dueDate: '2024-01-18', status: 'submitted' },
  { id: 3, title: 'Essay: Shakespeare', course: 'English', dueDate: '2024-01-20', status: 'pending' },
];

const dummyUpcomingClasses = [
  { time: '09:00 AM', subject: 'Mathematics', room: 'Room 101', teacher: 'Dr. Smith' },
  { time: '11:00 AM', subject: 'Physics', room: 'Lab 201', teacher: 'Prof. Johnson' },
  { time: '02:00 PM', subject: 'Chemistry', room: 'Lab 301', teacher: 'Dr. Brown' },
];

export const StudentDashboard = () => {
  const { user } = useAuth();

  const getGradeColor = (grade: string) => {
    if (grade.startsWith('A')) return 'grade-excellent';
    if (grade.startsWith('B')) return 'grade-good';
    if (grade.startsWith('C')) return 'grade-average';
    return 'grade-poor';
  };

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="hero-gradient rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.name}!</h1>
        <p className="text-white/90 text-lg">Ready to continue your learning journey?</p>
        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <div className="bg-white/20 rounded-lg px-3 py-1">
            <span className="font-medium">Student ID: </span>{user?.studentId}
          </div>
          <div className="bg-white/20 rounded-lg px-3 py-1">
            <span className="font-medium">Semester: </span>Spring 2024
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="stats-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Overall GPA</p>
                <p className="text-3xl font-bold text-foreground">3.7</p>
              </div>
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="stats-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Courses</p>
                <p className="text-3xl font-bold text-foreground">{dummyCourses.length}</p>
              </div>
              <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-accent" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="stats-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Assignments</p>
                <p className="text-3xl font-bold text-foreground">
                  {dummyAssignments.filter(a => a.status === 'pending').length}
                </p>
                <p className="text-xs text-muted-foreground">Pending</p>
              </div>
              <div className="h-12 w-12 bg-warning/10 rounded-lg flex items-center justify-center">
                <ClipboardList className="h-6 w-6 text-warning" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="stats-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Attendance</p>
                <p className="text-3xl font-bold text-foreground">94%</p>
              </div>
              <div className="h-12 w-12 bg-success/10 rounded-lg flex items-center justify-center">
                <Award className="h-6 w-6 text-success" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* My Courses */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              My Courses
            </CardTitle>
            <CardDescription>Your enrolled courses and progress</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {dummyCourses.map((course) => (
              <div key={course.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className={`w-3 h-3 rounded-full ${course.color}`} />
                  <div>
                    <h4 className="font-medium">{course.name}</h4>
                    <p className="text-sm text-muted-foreground">{course.teacher}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <Badge className={getGradeColor(course.grade)}>{course.grade}</Badge>
                    <div className="mt-1 w-20">
                      <Progress value={course.progress} className="h-2" />
                      <p className="text-xs text-muted-foreground mt-1">{course.progress}%</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Today's Schedule */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Today's Classes
            </CardTitle>
            <CardDescription>Your schedule for today</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {dummyUpcomingClasses.map((class_item, index) => (
              <div key={index} className="flex items-center gap-3 p-3 border rounded-lg">
                <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-lg">
                  <Clock className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm">{class_item.subject}</p>
                  <p className="text-xs text-muted-foreground">{class_item.room}</p>
                  <p className="text-xs text-muted-foreground">{class_item.teacher}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">{class_item.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Assignments */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ClipboardList className="h-5 w-5" />
            Recent Assignments
          </CardTitle>
          <CardDescription>Keep track of your assignments and deadlines</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {dummyAssignments.map((assignment) => (
              <div key={assignment.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-3">
                  {assignment.status === 'submitted' ? (
                    <CheckCircle className="h-5 w-5 text-success" />
                  ) : (
                    <AlertCircle className="h-5 w-5 text-warning" />
                  )}
                  <div>
                    <h4 className="font-medium">{assignment.title}</h4>
                    <p className="text-sm text-muted-foreground">{assignment.course}</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant={assignment.status === 'submitted' ? 'default' : 'secondary'}>
                    {assignment.status}
                  </Badge>
                  <p className="text-sm text-muted-foreground mt-1">Due: {assignment.dueDate}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t">
            <Button className="w-full btn-secondary">View All Assignments</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};