import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Users, UserPlus, Search, Edit, Trash2, Mail, Phone, Shield } from 'lucide-react';

const dummyUsers = [
  {
    id: 1,
    name: 'John Smith',
    email: 'john.smith@school.com',
    role: 'teacher',
    phone: '+1 234-567-8901',
    status: 'active',
    joinDate: '2023-01-15'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    email: 'sarah.johnson@school.com',
    role: 'student',
    phone: '+1 234-567-8902',
    status: 'active',
    joinDate: '2023-09-01'
  },
  {
    id: 3,
    name: 'Mike Wilson',
    email: 'mike.wilson@school.com',
    role: 'parent',
    phone: '+1 234-567-8903',
    status: 'active',
    joinDate: '2023-09-01'
  },
  {
    id: 4,
    name: 'Emily Davis',
    email: 'emily.davis@school.com',
    role: 'teacher',
    phone: '+1 234-567-8904',
    status: 'inactive',
    joinDate: '2022-08-20'
  },
  {
    id: 5,
    name: 'Admin User',
    email: 'admin@school.com',
    role: 'admin',
    phone: '+1 234-567-8900',
    status: 'active',
    joinDate: '2020-01-01'
  }
];

const getRoleBadgeColor = (role: string) => {
  switch (role) {
    case 'admin': return 'bg-red-100 text-red-800';
    case 'teacher': return 'bg-blue-100 text-blue-800';
    case 'student': return 'bg-green-100 text-green-800';
    case 'parent': return 'bg-purple-100 text-purple-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

const getStatusBadgeColor = (status: string) => {
  return status === 'active' 
    ? 'bg-green-100 text-green-800' 
    : 'bg-gray-100 text-gray-800';
};

const UsersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredUsers = dummyUsers.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const roleStats = {
    admin: dummyUsers.filter(u => u.role === 'admin').length,
    teacher: dummyUsers.filter(u => u.role === 'teacher').length,
    student: dummyUsers.filter(u => u.role === 'student').length,
    parent: dummyUsers.filter(u => u.role === 'parent').length,
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">User Management</h1>
          <p className="text-muted-foreground">Manage all users in the system</p>
        </div>
        <Button className="btn-primary hover-scale">
          <UserPlus className="w-4 h-4 mr-2" />
          Add New User
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="stats-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Users</p>
                <p className="text-3xl font-bold text-foreground">{dummyUsers.length}</p>
              </div>
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        {Object.entries(roleStats).map(([role, count]) => (
          <Card key={role} className="stats-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground capitalize">{role}s</p>
                  <p className="text-3xl font-bold text-foreground">{count}</p>
                </div>
                <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Search and Filter */}
      <Card className="card-gradient">
        <CardHeader>
          <CardTitle>Search Users</CardTitle>
          <CardDescription>Find users by name, email, or role</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Users List */}
      <Card className="card-gradient">
        <CardHeader>
          <CardTitle>All Users</CardTitle>
          <CardDescription>Manage user accounts and permissions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredUsers.map((user) => (
              <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-lg font-semibold text-primary">
                      {user.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-foreground">{user.name}</h3>
                      <Badge className={getRoleBadgeColor(user.role)}>
                        {user.role}
                      </Badge>
                      <Badge className={getStatusBadgeColor(user.status)}>
                        {user.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Mail className="h-4 w-4" />
                        {user.email}
                      </div>
                      <div className="flex items-center gap-1">
                        <Phone className="h-4 w-4" />
                        {user.phone}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="hover-scale">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="hover-scale text-destructive hover:text-destructive">
                    <Trash2 className="h-4 w-4" />
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

export default UsersPage;