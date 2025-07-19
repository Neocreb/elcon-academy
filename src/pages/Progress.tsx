import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TrendingUp, BookOpen, Award, Clock, User, Download, MessageSquare } from 'lucide-react';

const childrenData = [
  {
    id: 1,
    name: 'Emma Johnson',
    grade: '10th Grade',
    avatar: 'EJ',
    overallGrade: 'A-',
    attendance: 94.5,
    subjects: [
      { name: 'Mathematics', grade: 92, trend: '+5%', teacher: 'Dr. Smith' },
      { name: 'English', grade: 88, trend: '+2%', teacher: 'Ms. Brown' },
      { name: 'Science', grade: 85, trend: '-1%', teacher: 'Prof. Wilson' },
      { name: 'History', grade: 90, trend: '+8%', teacher: 'Mr. Davis' },
      { name: 'Art', grade: 95, trend: '+3%', teacher: 'Ms. Taylor' }
    ],
    recentActivities: [
      { type: 'assignment', title: 'Math Quiz Chapter 5', grade: '95%', date: '2024-01-15' },
      { type: 'test', title: 'English Literature Essay', grade: '88%', date: '2024-01-12' },
      { type: 'project', title: 'Science Fair Project', grade: 'Pending', date: '2024-01-10' }
    ]
  }
];

const getGradeColor = (grade: number) => {
  if (grade >= 90) return 'text-success';
  if (grade >= 80) return 'text-primary';
  if (grade >= 70) return 'text-warning';
  return 'text-destructive';
};

const getTrendColor = (trend: string) => {
  if (trend.startsWith('+')) return 'text-success';
  if (trend.startsWith('-')) return 'text-destructive';
  return 'text-muted-foreground';
};

const getActivityIcon = (type: string) => {
  switch (type) {
    case 'assignment': return <BookOpen className="h-4 w-4" />;
    case 'test': return <Award className="h-4 w-4" />;
    case 'project': return <TrendingUp className="h-4 w-4" />;
    default: return <BookOpen className="h-4 w-4" />;
  }
};

const ChildProgress = () => {
  const child = childrenData[0]; // For demo, showing one child

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Child Progress</h1>
          <p className="text-muted-foreground">Monitor your child's academic performance and growth</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="hover-scale">
            <MessageSquare className="w-4 h-4 mr-2" />
            Contact Teachers
          </Button>
          <Button className="btn-primary hover-scale">
            <Download className="w-4 h-4 mr-2" />
            Download Report
          </Button>
        </div>
      </div>

      {/* Child Overview */}
      <Card className="card-gradient">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-primary">{child.avatar}</span>
            </div>
            <div>
              <CardTitle className="text-2xl">{child.name}</CardTitle>
              <CardDescription className="text-lg">{child.grade}</CardDescription>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Performance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="stats-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Overall Grade</p>
                <p className="text-3xl font-bold text-foreground">{child.overallGrade}</p>
                <p className="text-sm text-success">Excellent Performance</p>
              </div>
              <div className="h-12 w-12 bg-success/10 rounded-lg flex items-center justify-center">
                <Award className="h-6 w-6 text-success" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="stats-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Attendance</p>
                <p className="text-3xl font-bold text-foreground">{child.attendance}%</p>
                <p className="text-sm text-success">Above Average</p>
              </div>
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Clock className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="stats-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Subjects</p>
                <p className="text-3xl font-bold text-foreground">{child.subjects.length}</p>
                <p className="text-sm text-muted-foreground">Active Courses</p>
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
                <p className="text-sm font-medium text-muted-foreground">Class Rank</p>
                <p className="text-3xl font-bold text-foreground">5th</p>
                <p className="text-sm text-success">Out of 120 students</p>
              </div>
              <div className="h-12 w-12 bg-warning/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-warning" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Subject Performance */}
      <Card className="card-gradient">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Subject Performance
          </CardTitle>
          <CardDescription>Detailed breakdown by subject</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {child.subjects.map((subject, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <h3 className="font-semibold text-foreground">{subject.name}</h3>
                      <Badge variant="secondary">{subject.teacher}</Badge>
                      <span className={`text-sm font-medium ${getTrendColor(subject.trend)}`}>
                        {subject.trend}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-2xl font-bold ${getGradeColor(subject.grade)}`}>
                      {subject.grade}%
                    </div>
                  </div>
                </div>
                <Progress value={subject.grade} className="h-3" />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Grade: {subject.grade >= 90 ? 'A' : subject.grade >= 80 ? 'B' : subject.grade >= 70 ? 'C' : 'D'}</span>
                  <span>Teacher: {subject.teacher}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Activities */}
      <Card className="card-gradient">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Recent Activities
          </CardTitle>
          <CardDescription>Latest assignments, tests, and projects</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {child.recentActivities.map((activity, index) => (
              <div key={index} className="flex items-center gap-4 p-4 border rounded-lg">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  {getActivityIcon(activity.type)}
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-foreground">{activity.title}</h4>
                    <Badge className={activity.type === 'assignment' ? 'bg-blue-100 text-blue-800' : 
                                   activity.type === 'test' ? 'bg-green-100 text-green-800' : 
                                   'bg-purple-100 text-purple-800'}>
                      {activity.type}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{activity.date}</p>
                </div>
                <div className="text-right">
                  <div className={`text-lg font-bold ${activity.grade === 'Pending' ? 'text-warning' : 'text-success'}`}>
                    {activity.grade}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Attendance Chart */}
      <Card className="card-gradient">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Attendance Overview
          </CardTitle>
          <CardDescription>Monthly attendance tracking</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Current Month Attendance</span>
              <span className="text-lg font-bold text-success">{child.attendance}%</span>
            </div>
            <Progress value={child.attendance} className="h-4" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="text-center">
                <div className="text-lg font-bold text-foreground">22</div>
                <div className="text-muted-foreground">Days Present</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-warning">1</div>
                <div className="text-muted-foreground">Days Absent</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-primary">0</div>
                <div className="text-muted-foreground">Late Arrivals</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-success">A+</div>
                <div className="text-muted-foreground">Attendance Grade</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChildProgress;