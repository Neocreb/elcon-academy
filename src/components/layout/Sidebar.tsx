import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  BookOpen,
  Calendar,
  GraduationCap,
  Home,
  Users,
  ClipboardList,
  TrendingUp,
  CreditCard,
  MessageSquare,
  Settings,
  FileText,
  UserCheck,
  Award,
  PieChart
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const getMenuItems = (role: string) => {
  const baseItems = [
    { icon: Home, label: 'Dashboard', path: '/dashboard' },
  ];

  const roleSpecificItems = {
    student: [
      { icon: BookOpen, label: 'My Courses', path: '/courses' },
      { icon: ClipboardList, label: 'Assignments', path: '/assignments' },
      { icon: Award, label: 'Grades', path: '/grades' },
      { icon: Calendar, label: 'Timetable', path: '/timetable' },
      { icon: UserCheck, label: 'Attendance', path: '/attendance' },
      { icon: CreditCard, label: 'Payments', path: '/payments' },
    ],
    teacher: [
      { icon: Users, label: 'My Classes', path: '/classes' },
      { icon: ClipboardList, label: 'Assignments', path: '/assignments' },
      { icon: Award, label: 'Grade Book', path: '/grades' },
      { icon: UserCheck, label: 'Attendance', path: '/attendance' },
      { icon: Calendar, label: 'Schedule', path: '/timetable' },
      { icon: MessageSquare, label: 'Messages', path: '/messages' },
    ],
    admin: [
      { icon: Users, label: 'User Management', path: '/users' },
      { icon: BookOpen, label: 'Course Management', path: '/courses' },
      { icon: PieChart, label: 'Reports', path: '/reports' },
      { icon: FileText, label: 'Announcements', path: '/announcements' },
      { icon: CreditCard, label: 'Finance', path: '/finance' },
      { icon: Calendar, label: 'Academic Calendar', path: '/calendar' },
    ],
    parent: [
      { icon: TrendingUp, label: 'Child Progress', path: '/progress' },
      { icon: UserCheck, label: 'Attendance', path: '/attendance' },
      { icon: Award, label: 'Grades', path: '/grades' },
      { icon: CreditCard, label: 'Fee Payments', path: '/payments' },
      { icon: MessageSquare, label: 'Communication', path: '/messages' },
      { icon: Calendar, label: 'School Events', path: '/events' },
    ]
  };

  const commonItems = [
    { icon: MessageSquare, label: 'Support', path: '/support' },
    { icon: Settings, label: 'Profile', path: '/profile' },
  ];

  return [
    ...baseItems,
    ...(roleSpecificItems[role as keyof typeof roleSpecificItems] || []),
    ...commonItems
  ];
};

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const { user } = useAuth();
  const menuItems = getMenuItems(user?.role || 'student');

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed left-0 top-0 z-50 h-full w-64 bg-card border-r border-border transform transition-transform duration-300 ease-in-out",
          "md:relative md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-foreground">EduPortal</h1>
                <p className="text-xs text-muted-foreground capitalize">{user?.role} Portal</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "sidebar-item",
                    isActive && "active"
                  )
                }
                onClick={() => onClose()}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};