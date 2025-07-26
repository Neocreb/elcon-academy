
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { StatsGrid } from '@/components/common/StatsGrid';
import { 
  FileText, 
  TrendingUp, 
  Users, 
  GraduationCap,
  Download,
  Calendar,
  BarChart3,
  PieChart
} from 'lucide-react';

const Reports = () => {
  const stats = [
    {
      title: 'Total Reports',
      value: 24,
      icon: FileText,
      color: 'primary' as const,
      trend: { value: 8, label: 'this month', isPositive: true }
    },
    {
      title: 'Academic Reports',
      value: 15,
      icon: GraduationCap,
      color: 'success' as const,
      subtitle: 'Generated'
    },
    {
      title: 'Financial Reports',
      value: 6,
      icon: TrendingUp,
      color: 'warning' as const,
      subtitle: 'Monthly'
    },
    {
      title: 'Attendance Reports',
      value: 3,
      icon: Users,
      color: 'accent' as const,
      subtitle: 'Weekly'
    }
  ];

  const reportCategories = [
    {
      title: 'Academic Performance',
      description: 'Student grades, course completion rates, and academic analytics',
      icon: GraduationCap,
      color: 'bg-primary/10 text-primary',
      reports: [
        { name: 'Student Grade Report', lastGenerated: '2024-01-20', format: 'PDF' },
        { name: 'Course Analytics', lastGenerated: '2024-01-18', format: 'Excel' },
        { name: 'Semester Summary', lastGenerated: '2024-01-15', format: 'PDF' }
      ]
    },
    {
      title: 'Attendance & Enrollment',
      description: 'Student attendance tracking and enrollment statistics',
      icon: Users,
      color: 'bg-success/10 text-success',
      reports: [
        { name: 'Daily Attendance', lastGenerated: '2024-01-21', format: 'Excel' },
        { name: 'Enrollment Trends', lastGenerated: '2024-01-19', format: 'PDF' },
        { name: 'Absence Analysis', lastGenerated: '2024-01-17', format: 'PDF' }
      ]
    },
    {
      title: 'Financial Reports',
      description: 'Fee collection, expenses, and financial summaries',
      icon: TrendingUp,
      color: 'bg-warning/10 text-warning',
      reports: [
        { name: 'Fee Collection Report', lastGenerated: '2024-01-20', format: 'Excel' },
        { name: 'Monthly Revenue', lastGenerated: '2024-01-01', format: 'PDF' },
        { name: 'Outstanding Dues', lastGenerated: '2024-01-15', format: 'Excel' }
      ]
    },
    {
      title: 'Administrative Reports',
      description: 'Staff performance, resource utilization, and operational metrics',
      icon: FileText,
      color: 'bg-accent/10 text-accent',
      reports: [
        { name: 'Staff Performance', lastGenerated: '2024-01-18', format: 'PDF' },
        { name: 'Resource Utilization', lastGenerated: '2024-01-16', format: 'Excel' },
        { name: 'Operational Summary', lastGenerated: '2024-01-14', format: 'PDF' }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="hero-gradient rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Reports & Analytics</h1>
        <p className="text-white/90 text-lg">Generate comprehensive reports and view school analytics</p>
      </div>

      {/* Stats */}
      <StatsGrid stats={stats} />

      {/* Quick Report Generation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Quick Report Generation
          </CardTitle>
          <CardDescription>Generate commonly used reports instantly</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button className="btn-primary h-auto p-4 flex flex-col items-center gap-2">
              <FileText className="h-6 w-6" />
              Student Report
            </Button>
            <Button className="btn-secondary h-auto p-4 flex flex-col items-center gap-2">
              <TrendingUp className="h-6 w-6" />
              Financial Summary
            </Button>
            <Button className="btn-secondary h-auto p-4 flex flex-col items-center gap-2">
              <Users className="h-6 w-6" />
              Attendance Report
            </Button>
            <Button className="btn-secondary h-auto p-4 flex flex-col items-center gap-2">
              <PieChart className="h-6 w-6" />
              Analytics Dashboard
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Report Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {reportCategories.map((category, index) => (
          <Card key={index} className="hover-scale card-gradient group">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${category.color}`}>
                  <category.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {category.title}
                  </CardTitle>
                  <CardDescription className="mt-1">
                    {category.description}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-3">
                {category.reports.map((report, reportIndex) => (
                  <div key={reportIndex} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/25 transition-colors">
                    <div className="flex-1">
                      <p className="font-medium text-sm">{report.name}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <p className="text-xs text-muted-foreground">
                          Last generated: {report.lastGenerated}
                        </p>
                        <Badge variant="outline" className="text-xs">
                          {report.format}
                        </Badge>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
              
              <Button className="w-full mt-4 btn-secondary">
                View All {category.title} Reports
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Report Schedule */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Scheduled Reports
          </CardTitle>
          <CardDescription>Automatically generated reports and their schedules</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { name: 'Weekly Attendance Summary', schedule: 'Every Monday 9:00 AM', nextRun: '2024-01-29' },
              { name: 'Monthly Financial Report', schedule: '1st of every month', nextRun: '2024-02-01' },
              { name: 'Semester Grade Report', schedule: 'End of semester', nextRun: '2024-05-15' }
            ].map((scheduled, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-medium">{scheduled.name}</p>
                  <p className="text-sm text-muted-foreground">{scheduled.schedule}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">Next: {scheduled.nextRun}</p>
                  <Badge variant="secondary">Active</Badge>
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
