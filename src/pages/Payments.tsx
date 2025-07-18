import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  CreditCard, 
  Calendar, 
  DollarSign, 
  FileText, 
  Download,
  CheckCircle,
  AlertCircle,
  Clock
} from 'lucide-react';

const dummyPayments = [
  {
    id: 1,
    description: 'Tuition Fee - Spring 2024',
    amount: 2500,
    dueDate: '2024-01-15',
    status: 'paid',
    paidDate: '2024-01-10',
    method: 'Credit Card'
  },
  {
    id: 2,
    description: 'Library Fee',
    amount: 50,
    dueDate: '2024-01-20',
    status: 'pending',
    paidDate: null,
    method: null
  },
  {
    id: 3,
    description: 'Lab Fee - Chemistry',
    amount: 150,
    dueDate: '2024-01-25',
    status: 'pending',
    paidDate: null,
    method: null
  },
  {
    id: 4,
    description: 'Activity Fee',
    amount: 100,
    dueDate: '2024-02-01',
    status: 'upcoming',
    paidDate: null,
    method: null
  },
  {
    id: 5,
    description: 'Parking Permit',
    amount: 75,
    dueDate: '2023-12-15',
    status: 'paid',
    paidDate: '2023-12-10',
    method: 'Bank Transfer'
  }
];

const paymentHistory = [
  { date: '2024-01-10', description: 'Tuition Fee - Spring 2024', amount: 2500, method: 'Credit Card' },
  { date: '2023-12-10', description: 'Parking Permit', amount: 75, method: 'Bank Transfer' },
  { date: '2023-11-15', description: 'Tuition Fee - Fall 2023', amount: 2500, method: 'Credit Card' },
  { date: '2023-10-05', description: 'Lab Fee - Physics', amount: 120, method: 'Debit Card' },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'paid': return 'grade-excellent';
    case 'pending': return 'grade-average';
    case 'upcoming': return 'grade-good';
    case 'overdue': return 'grade-poor';
    default: return 'grade-average';
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'paid': return <CheckCircle className="w-4 h-4 text-success" />;
    case 'pending': return <AlertCircle className="w-4 h-4 text-warning" />;
    case 'upcoming': return <Clock className="w-4 h-4 text-accent" />;
    case 'overdue': return <AlertCircle className="w-4 h-4 text-destructive" />;
    default: return <Clock className="w-4 h-4" />;
  }
};

const calculateTotals = () => {
  const totalPaid = dummyPayments
    .filter(p => p.status === 'paid')
    .reduce((sum, p) => sum + p.amount, 0);
  
  const totalPending = dummyPayments
    .filter(p => p.status === 'pending' || p.status === 'upcoming')
    .reduce((sum, p) => sum + p.amount, 0);
  
  return { totalPaid, totalPending };
};

const Payments = () => {
  const { totalPaid, totalPending } = calculateTotals();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Payments</h1>
          <p className="text-muted-foreground">Manage your school fees and payments</p>
        </div>
        <Button className="btn-primary">
          <CreditCard className="w-4 h-4 mr-2" />
          Make Payment
        </Button>
      </div>

      {/* Payment Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="stats-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Paid</p>
                <p className="text-3xl font-bold text-success">${totalPaid.toLocaleString()}</p>
              </div>
              <CheckCircle className="w-8 h-8 text-success" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="stats-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Outstanding</p>
                <p className="text-3xl font-bold text-warning">${totalPending.toLocaleString()}</p>
              </div>
              <AlertCircle className="w-8 h-8 text-warning" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="stats-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">This Semester</p>
                <p className="text-3xl font-bold text-primary">${(totalPaid + totalPending).toLocaleString()}</p>
              </div>
              <DollarSign className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Outstanding Payments */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5" />
            Outstanding Payments
          </CardTitle>
          <CardDescription>Fees that require payment</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {dummyPayments
              .filter(payment => payment.status !== 'paid')
              .map((payment) => (
              <div key={payment.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-3">
                  {getStatusIcon(payment.status)}
                  <div>
                    <h3 className="font-semibold">{payment.description}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>Due: {payment.dueDate}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-xl font-bold">${payment.amount}</p>
                    <Badge className={getStatusColor(payment.status)}>
                      {payment.status}
                    </Badge>
                  </div>
                  <Button size="sm" className="btn-primary">
                    Pay Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Payment History */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Payment History
          </CardTitle>
          <CardDescription>Your completed payments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {paymentHistory.map((payment, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <div>
                    <h4 className="font-medium">{payment.description}</h4>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>Paid: {payment.date}</span>
                      <span>Method: {payment.method}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <p className="font-semibold">${payment.amount}</p>
                    <Badge className="grade-excellent">Paid</Badge>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-1" />
                    Receipt
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Payment Options */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Payment Options</CardTitle>
          <CardDescription>Common payment methods</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button className="btn-primary h-auto p-4 flex flex-col items-center gap-2">
              <CreditCard className="w-6 h-6" />
              Credit/Debit Card
            </Button>
            <Button className="btn-secondary h-auto p-4 flex flex-col items-center gap-2">
              <DollarSign className="w-6 h-6" />
              Bank Transfer
            </Button>
            <Button className="btn-secondary h-auto p-4 flex flex-col items-center gap-2">
              <FileText className="w-6 h-6" />
              Payment Plan
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Payments;