import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { DollarSign, TrendingUp, TrendingDown, Download, CreditCard, Receipt, Wallet, PieChart } from 'lucide-react';

const revenueData = [
  { month: 'Jan', tuition: 45000, fees: 8000, other: 2000 },
  { month: 'Feb', tuition: 47000, fees: 8500, other: 2200 },
  { month: 'Mar', tuition: 46000, fees: 8200, other: 1800 },
  { month: 'Apr', tuition: 48000, fees: 9000, other: 2500 },
];

const expenseCategories = [
  { category: 'Salaries', amount: 85000, percentage: 65, color: 'bg-blue-500' },
  { category: 'Facilities', amount: 15000, percentage: 11, color: 'bg-green-500' },
  { category: 'Equipment', amount: 12000, percentage: 9, color: 'bg-yellow-500' },
  { category: 'Utilities', amount: 8000, percentage: 6, color: 'bg-purple-500' },
  { category: 'Other', amount: 11000, percentage: 9, color: 'bg-red-500' },
];

const outstandingFees = [
  { studentId: 'STU001', name: 'John Smith', grade: '10th', amount: 1200, daysOverdue: 15 },
  { studentId: 'STU002', name: 'Sarah Johnson', grade: '11th', amount: 800, daysOverdue: 8 },
  { studentId: 'STU003', name: 'Mike Wilson', grade: '9th', amount: 1500, daysOverdue: 22 },
  { studentId: 'STU004', name: 'Emily Davis', grade: '12th', amount: 950, daysOverdue: 5 },
];

const Finance = () => {
  const totalRevenue = revenueData[revenueData.length - 1].tuition + revenueData[revenueData.length - 1].fees + revenueData[revenueData.length - 1].other;
  const totalExpenses = expenseCategories.reduce((sum, cat) => sum + cat.amount, 0);
  const netIncome = totalRevenue - totalExpenses;
  const totalOutstanding = outstandingFees.reduce((sum, fee) => sum + fee.amount, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Financial Management</h1>
          <p className="text-muted-foreground">Monitor revenue, expenses, and financial health</p>
        </div>
        <Button className="btn-primary hover-scale">
          <Download className="w-4 h-4 mr-2" />
          Export Financial Report
        </Button>
      </div>

      {/* Financial Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="stats-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Revenue</p>
                <p className="text-3xl font-bold text-foreground">${totalRevenue.toLocaleString()}</p>
                <p className="text-sm text-success flex items-center gap-1">
                  <TrendingUp className="h-4 w-4" />
                  +8.2% from last month
                </p>
              </div>
              <div className="h-12 w-12 bg-success/10 rounded-lg flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-success" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="stats-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Expenses</p>
                <p className="text-3xl font-bold text-foreground">${totalExpenses.toLocaleString()}</p>
                <p className="text-sm text-destructive flex items-center gap-1">
                  <TrendingUp className="h-4 w-4" />
                  +3.1% from last month
                </p>
              </div>
              <div className="h-12 w-12 bg-destructive/10 rounded-lg flex items-center justify-center">
                <CreditCard className="h-6 w-6 text-destructive" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="stats-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Net Income</p>
                <p className="text-3xl font-bold text-foreground">${netIncome.toLocaleString()}</p>
                <p className="text-sm text-success flex items-center gap-1">
                  <TrendingUp className="h-4 w-4" />
                  +12.5% from last month
                </p>
              </div>
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Wallet className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="stats-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Outstanding Fees</p>
                <p className="text-3xl font-bold text-foreground">${totalOutstanding.toLocaleString()}</p>
                <p className="text-sm text-warning flex items-center gap-1">
                  <TrendingDown className="h-4 w-4" />
                  {outstandingFees.length} accounts overdue
                </p>
              </div>
              <div className="h-12 w-12 bg-warning/10 rounded-lg flex items-center justify-center">
                <Receipt className="h-6 w-6 text-warning" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Revenue Chart */}
      <Card className="card-gradient">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Monthly Revenue Breakdown
          </CardTitle>
          <CardDescription>Revenue trends by category over the last 4 months</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {revenueData.map((month, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{month.month} 2024</span>
                  <span className="text-lg font-bold">${(month.tuition + month.fees + month.other).toLocaleString()}</span>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Tuition: ${month.tuition.toLocaleString()}</span>
                    <span>Fees: ${month.fees.toLocaleString()}</span>
                    <span>Other: ${month.other.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div className="h-full flex">
                      <div 
                        className="bg-primary" 
                        style={{ width: `${(month.tuition / (month.tuition + month.fees + month.other)) * 100}%` }}
                      />
                      <div 
                        className="bg-success" 
                        style={{ width: `${(month.fees / (month.tuition + month.fees + month.other)) * 100}%` }}
                      />
                      <div 
                        className="bg-accent" 
                        style={{ width: `${(month.other / (month.tuition + month.fees + month.other)) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Expense Breakdown */}
        <Card className="card-gradient">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="h-5 w-5" />
              Expense Breakdown
            </CardTitle>
            <CardDescription>Current month expense distribution</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {expenseCategories.map((category, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded ${category.color}`} />
                      <span className="font-medium">{category.category}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">${category.amount.toLocaleString()}</div>
                      <div className="text-sm text-muted-foreground">{category.percentage}%</div>
                    </div>
                  </div>
                  <Progress value={category.percentage} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Outstanding Fees */}
        <Card className="card-gradient">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Receipt className="h-5 w-5" />
              Outstanding Fee Payments
            </CardTitle>
            <CardDescription>Students with overdue fee payments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {outstandingFees.map((fee, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="space-y-1">
                    <div className="font-medium">{fee.name}</div>
                    <div className="text-sm text-muted-foreground flex items-center gap-4">
                      <span>ID: {fee.studentId}</span>
                      <span>Grade: {fee.grade}</span>
                    </div>
                  </div>
                  <div className="text-right space-y-1">
                    <div className="font-bold text-destructive">${fee.amount}</div>
                    <Badge variant="destructive">{fee.daysOverdue} days overdue</Badge>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4 hover-scale">
              Send Payment Reminders
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="card-gradient">
        <CardHeader>
          <CardTitle>Quick Financial Actions</CardTitle>
          <CardDescription>Common financial management tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex-col gap-2 hover-scale">
              <Receipt className="h-6 w-6" />
              Generate Invoice
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2 hover-scale">
              <Download className="h-6 w-6" />
              Export Reports
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2 hover-scale">
              <CreditCard className="h-6 w-6" />
              Payment Settings
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2 hover-scale">
              <DollarSign className="h-6 w-6" />
              Budget Planning
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Finance;