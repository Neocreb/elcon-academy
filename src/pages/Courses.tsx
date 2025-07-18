import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, Clock, Users, Award } from 'lucide-react';

const dummyCourses = [
  {
    id: 1,
    name: 'Advanced Mathematics',
    code: 'MATH301',
    teacher: 'Dr. Smith',
    students: 28,
    schedule: 'Mon, Wed, Fri 9:00-10:30',
    room: 'Room 101',
    semester: 'Spring 2024',
    credits: 3,
    status: 'active'
  },
  {
    id: 2,
    name: 'Physics Laboratory',
    code: 'PHYS201',
    teacher: 'Prof. Johnson',
    students: 24,
    schedule: 'Tue, Thu 2:00-4:00',
    room: 'Lab 201',
    semester: 'Spring 2024',
    credits: 2,
    status: 'active'
  },
  {
    id: 3,
    name: 'English Literature',
    code: 'ENG150',
    teacher: 'Ms. Davis',
    students: 32,
    schedule: 'Mon, Wed 11:00-12:30',
    room: 'Room 205',
    semester: 'Spring 2024',
    credits: 3,
    status: 'active'
  },
  {
    id: 4,
    name: 'Chemistry Fundamentals',
    code: 'CHEM101',
    teacher: 'Dr. Brown',
    students: 30,
    schedule: 'Tue, Thu 10:00-11:30',
    room: 'Lab 301',
    semester: 'Spring 2024',
    credits: 4,
    status: 'active'
  }
];

const Courses = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Courses</h1>
          <p className="text-muted-foreground">Manage your course enrollment and information</p>
        </div>
        <Button className="btn-primary">
          <BookOpen className="w-4 h-4 mr-2" />
          Browse Courses
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyCourses.map((course) => (
          <Card key={course.id} className="card-gradient hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{course.name}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {course.code} • {course.credits} Credits
                  </CardDescription>
                </div>
                <Badge variant="outline" className="grade-excellent">
                  {course.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  <span>Instructor: {course.teacher}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span>{course.schedule}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <BookOpen className="w-4 h-4 text-muted-foreground" />
                  <span>{course.room}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  <span>{course.students} students enrolled</span>
                </div>
              </div>
              
              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1">
                  View Details
                </Button>
                <Button size="sm" className="flex-1 btn-primary">
                  Enter Course
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5" />
            Course Performance Summary
          </CardTitle>
          <CardDescription>Your overall performance across all courses</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-primary">3.7</div>
              <div className="text-sm text-muted-foreground">Overall GPA</div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-success">94%</div>
              <div className="text-sm text-muted-foreground">Average Attendance</div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-accent">12</div>
              <div className="text-sm text-muted-foreground">Total Credits</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Courses;