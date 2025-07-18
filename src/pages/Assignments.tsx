import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ClipboardList, Calendar, Upload, Download, AlertCircle, CheckCircle } from 'lucide-react';

const dummyAssignments = [
  {
    id: 1,
    title: 'Calculus Problem Set #3',
    course: 'Advanced Mathematics',
    dueDate: '2024-01-15',
    submitted: false,
    grade: null,
    maxPoints: 100,
    description: 'Complete problems 1-15 from Chapter 7',
    status: 'pending'
  },
  {
    id: 2,
    title: 'Lab Report: Motion Analysis',
    course: 'Physics Laboratory',
    dueDate: '2024-01-12',
    submitted: true,
    grade: 92,
    maxPoints: 100,
    description: 'Analyze the motion data collected in Lab 3',
    status: 'graded'
  },
  {
    id: 3,
    title: 'Essay: Shakespeare Analysis',
    course: 'English Literature',
    dueDate: '2024-01-18',
    submitted: true,
    grade: null,
    maxPoints: 100,
    description: 'Analyze themes in Hamlet Act 1-3',
    status: 'submitted'
  },
  {
    id: 4,
    title: 'Chemical Reactions Lab',
    course: 'Chemistry Fundamentals',
    dueDate: '2024-01-20',
    submitted: false,
    grade: null,
    maxPoints: 50,
    description: 'Document observations from chemical reactions experiment',
    status: 'upcoming'
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'graded': return 'grade-excellent';
    case 'submitted': return 'grade-good';
    case 'pending': return 'grade-average';
    case 'upcoming': return 'grade-poor';
    default: return 'grade-average';
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'graded': return <CheckCircle className="w-4 h-4" />;
    case 'submitted': return <Upload className="w-4 h-4" />;
    case 'pending': return <AlertCircle className="w-4 h-4" />;
    case 'upcoming': return <Calendar className="w-4 h-4" />;
    default: return <ClipboardList className="w-4 h-4" />;
  }
};

const Assignments = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Assignments</h1>
          <p className="text-muted-foreground">Track your assignments and submissions</p>
        </div>
        <Button className="btn-primary">
          <Upload className="w-4 h-4 mr-2" />
          Submit Assignment
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="stats-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total</p>
                <p className="text-2xl font-bold">{dummyAssignments.length}</p>
              </div>
              <ClipboardList className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="stats-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Pending</p>
                <p className="text-2xl font-bold text-warning">
                  {dummyAssignments.filter(a => a.status === 'pending').length}
                </p>
              </div>
              <AlertCircle className="w-8 h-8 text-warning" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="stats-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Submitted</p>
                <p className="text-2xl font-bold text-success">
                  {dummyAssignments.filter(a => a.submitted).length}
                </p>
              </div>
              <CheckCircle className="w-8 h-8 text-success" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="stats-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg Grade</p>
                <p className="text-2xl font-bold text-primary">92%</p>
              </div>
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Assignments List */}
      <Card>
        <CardHeader>
          <CardTitle>All Assignments</CardTitle>
          <CardDescription>Complete list of your assignments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {dummyAssignments.map((assignment) => (
              <div key={assignment.id} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      {getStatusIcon(assignment.status)}
                      <h3 className="font-semibold">{assignment.title}</h3>
                      <Badge className={getStatusColor(assignment.status)}>
                        {assignment.status}
                      </Badge>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-2">{assignment.course}</p>
                    <p className="text-sm mb-3">{assignment.description}</p>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>Due: {assignment.dueDate}</span>
                      </div>
                      <div>Points: {assignment.maxPoints}</div>
                      {assignment.grade && (
                        <div className="text-success font-medium">
                          Grade: {assignment.grade}/{assignment.maxPoints}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex gap-2 ml-4">
                    {assignment.submitted ? (
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-1" />
                        View
                      </Button>
                    ) : (
                      <Button size="sm" className="btn-primary">
                        <Upload className="w-4 h-4 mr-1" />
                        Submit
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Assignments;