import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Award, TrendingUp, BarChart3, Target } from 'lucide-react';

const dummyGrades = [
  {
    id: 1,
    course: 'Advanced Mathematics',
    assignments: [
      { name: 'Midterm Exam', grade: 87, maxPoints: 100, weight: 30 },
      { name: 'Problem Set 1', grade: 95, maxPoints: 100, weight: 10 },
      { name: 'Problem Set 2', grade: 92, maxPoints: 100, weight: 10 },
      { name: 'Final Project', grade: null, maxPoints: 100, weight: 40 }
    ],
    currentGrade: 89.2,
    letterGrade: 'B+'
  },
  {
    id: 2,
    course: 'Physics Laboratory',
    assignments: [
      { name: 'Lab Report 1', grade: 98, maxPoints: 100, weight: 25 },
      { name: 'Lab Report 2', grade: 94, maxPoints: 100, weight: 25 },
      { name: 'Lab Report 3', grade: 92, maxPoints: 100, weight: 25 },
      { name: 'Final Presentation', grade: 96, maxPoints: 100, weight: 25 }
    ],
    currentGrade: 95.0,
    letterGrade: 'A'
  },
  {
    id: 3,
    course: 'English Literature',
    assignments: [
      { name: 'Essay 1', grade: 88, maxPoints: 100, weight: 20 },
      { name: 'Essay 2', grade: 92, maxPoints: 100, weight: 20 },
      { name: 'Midterm', grade: 85, maxPoints: 100, weight: 30 },
      { name: 'Final Essay', grade: null, maxPoints: 100, weight: 30 }
    ],
    currentGrade: 88.3,
    letterGrade: 'B+'
  },
  {
    id: 4,
    course: 'Chemistry Fundamentals',
    assignments: [
      { name: 'Quiz 1', grade: 92, maxPoints: 100, weight: 15 },
      { name: 'Quiz 2', grade: 89, maxPoints: 100, weight: 15 },
      { name: 'Lab Practical', grade: 94, maxPoints: 100, weight: 25 },
      { name: 'Midterm', grade: 87, maxPoints: 100, weight: 45 }
    ],
    currentGrade: 89.8,
    letterGrade: 'B+'
  }
];

const getGradeColor = (grade: string) => {
  if (grade.startsWith('A')) return 'grade-excellent';
  if (grade.startsWith('B')) return 'grade-good';
  if (grade.startsWith('C')) return 'grade-average';
  return 'grade-poor';
};

const calculateOverallGPA = () => {
  const totalPoints = dummyGrades.reduce((sum, course) => sum + course.currentGrade, 0);
  return (totalPoints / dummyGrades.length).toFixed(1);
};

const Grades = () => {
  const overallGPA = calculateOverallGPA();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Grades</h1>
          <p className="text-muted-foreground">Track your academic performance</p>
        </div>
      </div>

      {/* Overall Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="stats-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Overall GPA</p>
                <p className="text-3xl font-bold text-primary">{overallGPA}</p>
              </div>
              <Award className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="stats-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Courses</p>
                <p className="text-3xl font-bold">{dummyGrades.length}</p>
              </div>
              <BarChart3 className="w-8 h-8 text-accent" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="stats-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Highest Grade</p>
                <p className="text-3xl font-bold text-success">
                  {Math.max(...dummyGrades.map(g => g.currentGrade)).toFixed(1)}%
                </p>
              </div>
              <TrendingUp className="w-8 h-8 text-success" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="stats-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Target GPA</p>
                <p className="text-3xl font-bold text-warning">3.8</p>
              </div>
              <Target className="w-8 h-8 text-warning" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Course Grades */}
      <div className="space-y-6">
        {dummyGrades.map((course) => (
          <Card key={course.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">{course.course}</CardTitle>
                  <CardDescription>Current performance breakdown</CardDescription>
                </div>
                <div className="text-right">
                  <Badge className={getGradeColor(course.letterGrade)}>
                    {course.letterGrade}
                  </Badge>
                  <p className="text-lg font-semibold mt-1">{course.currentGrade.toFixed(1)}%</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {course.assignments.map((assignment, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">{assignment.name}</span>
                        <span className="text-sm text-muted-foreground">
                          Weight: {assignment.weight}%
                        </span>
                      </div>
                      {assignment.grade ? (
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Score: {assignment.grade}/{assignment.maxPoints}</span>
                            <span className="font-medium">
                              {((assignment.grade / assignment.maxPoints) * 100).toFixed(1)}%
                            </span>
                          </div>
                          <Progress 
                            value={(assignment.grade / assignment.maxPoints) * 100} 
                            className="h-2"
                          />
                        </div>
                      ) : (
                        <div className="text-sm text-muted-foreground">
                          Not yet graded
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 pt-4 border-t">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Course Average</span>
                  <div className="text-right">
                    <span className="text-lg font-bold">{course.currentGrade.toFixed(1)}%</span>
                    <Badge className={`ml-2 ${getGradeColor(course.letterGrade)}`}>
                      {course.letterGrade}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Grades;