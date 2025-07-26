
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { DataTable } from '@/components/common/DataTable';
import { StatsGrid } from '@/components/common/StatsGrid';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { mockStudents, mockTeachers } from '@/data/mockData';
import { Users as UsersIcon, GraduationCap, UserCheck, UserX } from 'lucide-react';

const Users = () => {
  const { user } = useAuth();
  
  const allUsers = [
    ...mockStudents.map(student => ({
      ...student,
      role: 'Student',
      status: student.attendance > 90 ? 'active' : 'inactive'
    })),
    ...mockTeachers.map(teacher => ({
      ...teacher,
      role: 'Teacher',
      status: 'active',
      gpa: null,
      attendance: null
    }))
  ];

  const stats = [
    {
      title: 'Total Users',
      value: allUsers.length,
      icon: UsersIcon,
      color: 'primary' as const,
      trend: { value: 12, label: 'this month', isPositive: true }
    },
    {
      title: 'Students',
      value: mockStudents.length,
      icon: GraduationCap,
      color: 'success' as const,
      trend: { value: 8, label: 'new enrollments', isPositive: true }
    },
    {
      title: 'Teachers',
      value: mockTeachers.length,
      icon: UserCheck,
      color: 'accent' as const,
      subtitle: 'Active Staff'
    },
    {
      title: 'Active Users',
      value: allUsers.filter(u => u.status === 'active').length,
      icon: UserCheck,
      color: 'warning' as const,
      subtitle: 'Last 30 days'
    }
  ];

  const columns = [
    {
      key: 'avatar',
      label: '',
      render: (value: string, row: any) => (
        <Avatar className="h-10 w-10">
          <AvatarImage src={value} />
          <AvatarFallback>{row.name.split(' ').map((n: string) => n[0]).join('')}</AvatarFallback>
        </Avatar>
      )
    },
    {
      key: 'name',
      label: 'Name',
      render: (value: string, row: any) => (
        <div>
          <p className="font-medium">{value}</p>
          <p className="text-sm text-muted-foreground">{row.email}</p>
        </div>
      )
    },
    {
      key: 'role',
      label: 'Role',
      render: (value: string) => (
        <Badge variant={value === 'Teacher' ? 'default' : 'secondary'}>
          {value}
        </Badge>
      )
    },
    {
      key: 'id',
      label: 'ID',
      render: (value: string, row: any) => (
        <code className="text-sm bg-muted px-2 py-1 rounded">
          {row.studentId || row.teacherId}
        </code>
      )
    },
    {
      key: 'gpa',
      label: 'Performance',
      render: (value: number | null, row: any) => {
        if (row.role === 'Teacher') {
          return <span className="text-sm text-muted-foreground">{row.experience} exp</span>;
        }
        return value ? (
          <div className="text-sm">
            <div>GPA: {value}</div>
            <div className="text-muted-foreground">Attendance: {row.attendance}%</div>
          </div>
        ) : '-';
      }
    },
    {
      key: 'status',
      label: 'Status',
      render: (value: string) => (
        <Badge variant={value === 'active' ? 'default' : 'destructive'}>
          {value}
        </Badge>
      )
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="hero-gradient rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">User Management</h1>
        <p className="text-white/90 text-lg">Manage students, teachers, and staff members</p>
      </div>

      {/* Stats */}
      <StatsGrid stats={stats} />

      {/* Users Table */}
      <DataTable
        title="All Users"
        description="Complete list of students, teachers, and staff members"
        data={allUsers}
        columns={columns}
        searchPlaceholder="Search users..."
        onAdd={() => console.log('Add user')}
        addButtonText="Add User"
        onExport={() => console.log('Export users')}
      />
    </div>
  );
};

export default Users;
