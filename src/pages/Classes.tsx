import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Clock, BookOpen, Calendar, MapPin, Plus } from 'lucide-react';

const dummyClasses = [
  {
    id: 1,
    name: 'Mathematics Grade 10',
    code: 'MATH10A',
    students: 28,
    schedule: 'Mon, Wed, Fri - 9:00 AM',
    room: 'Room 101',
    subject: 'Mathematics',
    color: 'bg-blue-100 text-blue-800'
  },
  {
    id: 2,
    name: 'Physics Grade 11',
    code: 'PHYS11B', 
    students: 24,
    schedule: 'Tue, Thu - 10:30 AM',
    room: 'Lab 201',
    subject: 'Physics',
    color: 'bg-green-100 text-green-800'
  },
  {
    id: 3,
    name: 'Chemistry Grade 12',
    code: 'CHEM12A',
    students: 22,
    schedule: 'Mon, Wed - 2:00 PM',
    room: 'Lab 301',
    subject: 'Chemistry',
    color: 'bg-purple-100 text-purple-800'
  },
  {
    id: 4,
    name: 'Mathematics Grade 11',
    code: 'MATH11C',
    students: 26,
    schedule: 'Tue, Thu, Fri - 11:00 AM',
    room: 'Room 102',
    subject: 'Mathematics',
    color: 'bg-blue-100 text-blue-800'
  }
];

const Classes = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">My Classes</h1>
          <p className="text-muted-foreground">Manage your classes and students</p>
        </div>
        <Button className="btn-primary hover-scale">
          <Plus className="w-4 h-4 mr-2" />
          Add New Class
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="stats-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Classes</p>
                <p className="text-3xl font-bold text-foreground">{dummyClasses.length}</p>
              </div>
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="stats-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Students</p>
                <p className="text-3xl font-bold text-foreground">
                  {dummyClasses.reduce((sum, cls) => sum + cls.students, 0)}
                </p>
              </div>
              <div className="h-12 w-12 bg-success/10 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-success" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="stats-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Subjects</p>
                <p className="text-3xl font-bold text-foreground">3</p>
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
                <p className="text-sm font-medium text-muted-foreground">Avg. Class Size</p>
                <p className="text-3xl font-bold text-foreground">
                  {Math.round(dummyClasses.reduce((sum, cls) => sum + cls.students, 0) / dummyClasses.length)}
                </p>
              </div>
              <div className="h-12 w-12 bg-warning/10 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-warning" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Classes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyClasses.map((classItem) => (
          <Card key={classItem.id} className="card-gradient hover-scale">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <CardTitle className="text-lg">{classItem.name}</CardTitle>
                  <CardDescription className="font-mono text-sm">{classItem.code}</CardDescription>
                </div>
                <Badge className={classItem.color}>{classItem.subject}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>{classItem.students} students</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{classItem.schedule}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{classItem.room}</span>
                </div>
              </div>
              
              <div className="flex gap-2 pt-4">
                <Button variant="outline" size="sm" className="flex-1 hover-scale">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule
                </Button>
                <Button variant="outline" size="sm" className="flex-1 hover-scale">
                  <Users className="h-4 w-4 mr-2" />
                  Students
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Classes;