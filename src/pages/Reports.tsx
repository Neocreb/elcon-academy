import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { BarChart3, PieChart, TrendingUp, Download, Users, BookOpen, DollarSign, Clock } from 'lucide-react';

const dummyReports = [
  {
    title: 'Student Performance Report',
    description: 'Academic performance across all grades',
    type: 'Academic',
    lastUpdated: '2024-01-15',
    status: 'ready'
  },
  {
    title: 'Attendance Summary',
    description: 'Monthly attendance statistics',
    type: 'Attendance', 
    lastUpdated: '2024-01-14',
    status: 'ready'
  },
  {
    title: 'Financial Overview',
    description: 'Fee collection and expenses report',
    type: 'Financial',
    lastUpdated: '2024-01-13',
    status: 'processing'
  },
  {
    title: 'Teacher Performance',
    description: 'Teaching effectiveness metrics',
    type: 'Staff',
    lastUpdated: '2024-01-12',
    status: 'ready'
  }
];

const academicStats = [
  { subject: 'Mathematics', avgGrade: 85, students: 120, trend: '+5%' },
  { subject: 'English', avgGrade: 88, students: 125, trend: '+2%' },
  { subject: 'Science', avgGrade: 82, students: 110, trend: '+8%' },
  { subject: 'History', avgGrade: 90, students: 95, trend: '+3%' },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'ready': return 'bg-green-100 text-green-800';
    case 'processing': return 'bg-yellow-100 text-yellow-800';
    case 'error': return 'bg-red-100 text-red-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case 'Academic': return 'bg-blue-100 text-blue-800';
    case 'Attendance': return 'bg-purple-100 text-purple-800';
    case 'Financial': return 'bg-green-100 text-green-800';
    case 'Staff': return 'bg-orange-100 text-orange-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

const Reports = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Reports & Analytics</h1>
          <p className="text-muted-foreground">Comprehensive insights and data analysis</p>
        </div>
        <Button className="btn-primary hover-scale">
          <BarChart3 className="w-4 h-4 mr-2" />
          Generate Custom Report
        </Button>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="stats-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Students</p>
                <p className="text-3xl font-bold text-foreground">1,245</p>
                <p className="text-sm text-success">+12% from last month</p>
              </div>
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="stats-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Average Attendance</p>
                <p className="text-3xl font-bold text-foreground">94.2%</p>
                <p className="text-sm text-success">+2.3% from last month</p>
              </div>
              <div className="h-12 w-12 bg-success/10 rounded-lg flex items-center justify-center">
                <Clock className="h-6 w-6 text-success" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="stats-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Revenue This Month</p>
                <p className="text-3xl font-bold text-foreground">$45,230</p>
                <p className="text-sm text-success">+8% from last month</p>
              </div>
              <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-accent" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="stats-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Courses</p>
                <p className="text-3xl font-bold text-foreground">28</p>
                <p className="text-sm text-success">+3 new courses</p>
              </div>
              <div className="h-12 w-12 bg-warning/10 rounded-lg flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-warning" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Academic Performance */}
      <Card className="card-gradient">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Academic Performance by Subject
          </CardTitle>
          <CardDescription>Average grades and performance trends</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {academicStats.map((subject, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-medium text-foreground">{subject.subject}</span>
                    <Badge variant="secondary">{subject.students} students</Badge>
                    <Badge className="bg-green-100 text-green-800">{subject.trend}</Badge>
                  </div>
                  <span className="text-2xl font-bold text-foreground">{subject.avgGrade}%</span>
                </div>
                <Progress value={subject.avgGrade} className="h-3" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Available Reports */}
      <Card className="card-gradient">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PieChart className="h-5 w-5" />
            Available Reports
          </CardTitle>
          <CardDescription>Generate and download detailed reports</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dummyReports.map((report, index) => (
              <div key={index} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="space-y-1">
                    <h3 className="font-semibold text-foreground">{report.title}</h3>
                    <p className="text-sm text-muted-foreground">{report.description}</p>
                  </div>
                  <div className="flex gap-2">
                    <Badge className={getTypeColor(report.type)}>{report.type}</Badge>
                    <Badge className={getStatusColor(report.status)}>{report.status}</Badge>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    Last updated: {report.lastUpdated}
                  </span>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="hover-scale"
                    disabled={report.status !== 'ready'}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    {report.status === 'ready' ? 'Download' : 'Processing...'}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reports;