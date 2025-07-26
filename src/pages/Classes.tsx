
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { StatsGrid } from '@/components/common/StatsGrid';
import { mockCourses, mockStudents, mockTeachers } from '@/data/mockData';
import { 
  BookOpen, 
  Users, 
  Clock, 
  Calendar,
  MapPin,
  TrendingUp,
  GraduationCap
} from 'lucide-react';

const Classes = () => {
  const { user } = useAuth();

  const stats = [
    {
      title: 'Active Classes',
      value: mockCourses.filter(c => c.status === 'active').length,
      icon: BookOpen,
      color: 'primary' as const,
      trend: { value: 5, label: 'this semester', isPositive: true }
    },
    {
      title: 'Total Students',
      value: mockCourses.reduce((sum, course) => sum + course.studentsEnrolled, 0),
      icon: Users,
      color: 'success' as const,
      subtitle: 'Enrolled'
    },
    {
      title: 'Average Enrollment',
      value: '89%',
      icon: TrendingUp,
      color: 'accent' as const,
      trend: { value: 12, label: 'vs last semester', isPositive: true }
    },
    {
      title: 'Completion Rate',
      value: '94%',
      icon: GraduationCap,
      color: 'warning' as const,
      subtitle: 'This semester'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="hero-gradient rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Class Management</h1>
        <p className="text-white/90 text-lg">Manage courses, schedules, and enrollments</p>
      </div>

      {/* Stats */}
      <StatsGrid stats={stats} />

      {/* Classes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockCourses.map((course) => {
          const teacher = mockTeachers.find(t => t.id === course.teacherId);
          const enrollmentPercentage = (course.studentsEnrolled / course.maxStudents) * 100;
          
          return (
            <Card key={course.id} className="hover-scale card-gradient group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {course.name}
                    </CardTitle>
                    <CardDescription className="mt-1">
                      <code className="text-xs bg-muted px-2 py-1 rounded">{course.code}</code>
                    </CardDescription>
                  </div>
                  <Badge className={course.status === 'active' ? 'badge-success' : 'badge-secondary'}>
                    {course.status}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Teacher Info */}
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={teacher?.avatar} />
                    <AvatarFallback>
                      {teacher?.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm">{course.teacher}</p>
                    <p className="text-xs text-muted-foreground">{teacher?.department}</p>
                  </div>
                </div>

                {/* Course Details */}
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{course.schedule}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{course.duration} • {course.credits} credits</span>
                  </div>
                </div>

                {/* Enrollment Progress */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Enrollment</span>
                    <span className="font-medium">
                      {course.studentsEnrolled}/{course.maxStudents}
                    </span>
                  </div>
                  <Progress value={enrollmentPercentage} className="h-2" />
                  <p className="text-xs text-muted-foreground">
                    {enrollmentPercentage.toFixed(0)}% capacity
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  <Button size="sm" className="flex-1">
                    View Details
                  </Button>
                  <Button size="sm" variant="outline">
                    Manage
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common class management tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button className="btn-primary h-auto p-4 flex flex-col items-center gap-2">
              <BookOpen className="h-6 w-6" />
              Create New Class
            </Button>
            <Button className="btn-secondary h-auto p-4 flex flex-col items-center gap-2">
              <Users className="h-6 w-6" />
              Manage Enrollments
            </Button>
            <Button className="btn-secondary h-auto p-4 flex flex-col items-center gap-2">
              <Calendar className="h-6 w-6" />
              Schedule Classes
            </Button>
            <Button className="btn-secondary h-auto p-4 flex flex-col items-center gap-2">
              <TrendingUp className="h-6 w-6" />
              View Analytics
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Classes;
