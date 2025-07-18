import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { User, TrendingUp, Calendar, CreditCard, MessageSquare, Award } from 'lucide-react';

export const ParentDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="hero-gradient rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Parent Portal</h1>
        <p className="text-white/90 text-lg">Welcome, {user?.name}! Track your child's progress</p>
        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <div className="bg-white/20 rounded-lg px-3 py-1">
            <span className="font-medium">Parent ID: </span>{user?.parentId}
          </div>
          <div className="bg-white/20 rounded-lg px-3 py-1">
            <span className="font-medium">Child: </span>Emma Brown
          </div>
        </div>
      </div>

      {/* Child's Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="stats-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Overall GPA</p>
                <p className="text-3xl font-bold text-foreground">3.8</p>
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
                <p className="text-sm font-medium text-muted-foreground">Attendance</p>
                <p className="text-3xl font-bold text-foreground">96%</p>
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
                <p className="text-sm font-medium text-muted-foreground">Fee Balance</p>
                <p className="text-3xl font-bold text-foreground">$450</p>
                <p className="text-xs text-muted-foreground">Due</p>
              </div>
              <div className="h-12 w-12 bg-warning/10 rounded-lg flex items-center justify-center">
                <CreditCard className="h-6 w-6 text-warning" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="stats-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Messages</p>
                <p className="text-3xl font-bold text-foreground">3</p>
                <p className="text-xs text-muted-foreground">Unread</p>
              </div>
              <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <MessageSquare className="h-6 w-6 text-accent" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Child's Progress */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Emma's Academic Progress
          </CardTitle>
          <CardDescription>Current semester performance overview</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { subject: 'Mathematics', grade: 'A-', progress: 88 },
              { subject: 'Science', grade: 'A', progress: 92 },
              { subject: 'English', grade: 'B+', progress: 85 },
              { subject: 'History', grade: 'A-', progress: 87 },
            ].map((subject) => (
              <div key={subject.subject} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{subject.subject}</span>
                    <Badge className="grade-excellent">{subject.grade}</Badge>
                  </div>
                  <Progress value={subject.progress} className="h-2" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common parent portal actions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Button className="btn-primary h-auto p-4 flex flex-col items-center gap-2">
              <CreditCard className="h-6 w-6" />
              Pay Fees
            </Button>
            <Button className="btn-secondary h-auto p-4 flex flex-col items-center gap-2">
              <MessageSquare className="h-6 w-6" />
              Message Teacher
            </Button>
            <Button className="btn-secondary h-auto p-4 flex flex-col items-center gap-2">
              <Calendar className="h-6 w-6" />
              View Schedule
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};