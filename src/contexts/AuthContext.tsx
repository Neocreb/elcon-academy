import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User, UserRole, AuthState } from '@/types/auth';

const AuthContext = createContext<AuthState | null>(null);

// Demo users for different roles
const demoUsers: Record<string, User> = {
  'student@school.com': {
    id: '1',
    name: 'Mary Johnson',
    email: 'student@school.com',
    role: 'student',
    studentId: 'STD2024001',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612c32d?w=150&h=150&fit=crop&crop=face'
  },
  'teacher@school.com': {
    id: '2', 
    name: 'John Smith',
    email: 'teacher@school.com',
    role: 'teacher',
    teacherId: 'TCH2024001',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
  },
  'admin@school.com': {
    id: '3',
    name: 'Sarah Wilson',
    email: 'admin@school.com', 
    role: 'admin',
    adminId: 'ADM2024001',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
  },
  'parent@school.com': {
    id: '4',
    name: 'Robert Brown',
    email: 'parent@school.com',
    role: 'parent', 
    parentId: 'PAR2024001',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  }
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('eduportal_user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = async (email: string, password: string, role: UserRole) => {
    const demoUser = demoUsers[email.toLowerCase()];
    
    if (demoUser && demoUser.role === role) {
      setUser(demoUser);
      localStorage.setItem('eduportal_user', JSON.stringify(demoUser));
    } else {
      throw new Error('Invalid credentials or role mismatch');
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('eduportal_user');
  };

  const value: AuthState = {
    user,
    isAuthenticated: !!user,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};