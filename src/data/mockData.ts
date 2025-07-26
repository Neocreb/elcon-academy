
import { Student, Teacher, Course, Assignment, Grade } from '@/types/common';

export const mockStudents: Student[] = [
  {
    id: '1',
    name: 'Emma Johnson',
    email: 'emma.j@school.edu',
    studentId: 'STD2024001',
    grade: '11th',
    class: 'A',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612c32d?w=150&h=150&fit=crop&crop=face',
    gpa: 3.8,
    attendance: 95,
    enrollmentDate: '2023-09-01',
    guardianName: 'Robert Johnson',
    guardianContact: '+1 (555) 123-4567'
  },
  {
    id: '2',
    name: 'Michael Chen',
    email: 'michael.c@school.edu',
    studentId: 'STD2024002',
    grade: '12th',
    class: 'B',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    gpa: 3.9,
    attendance: 92,
    enrollmentDate: '2022-09-01',
    guardianName: 'Lisa Chen',
    guardianContact: '+1 (555) 234-5678'
  },
  {
    id: '3',
    name: 'Sarah Williams',
    email: 'sarah.w@school.edu',
    studentId: 'STD2024003',
    grade: '10th',
    class: 'A',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    gpa: 3.7,
    attendance: 98,
    enrollmentDate: '2024-09-01',
    guardianName: 'David Williams',
    guardianContact: '+1 (555) 345-6789'
  }
];

export const mockTeachers: Teacher[] = [
  {
    id: '1',
    name: 'Dr. James Smith',
    email: 'j.smith@school.edu',
    teacherId: 'TCH2024001',
    department: 'Mathematics',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    subjects: ['Advanced Mathematics', 'Calculus', 'Statistics'],
    classesCount: 5,
    studentsCount: 127,
    experience: '10 years'
  },
  {
    id: '2',
    name: 'Prof. Maria Garcia',
    email: 'm.garcia@school.edu',
    teacherId: 'TCH2024002',
    department: 'Science',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face',
    subjects: ['Physics', 'Chemistry', 'Biology'],
    classesCount: 4,
    studentsCount: 98,
    experience: '8 years'
  }
];

export const mockCourses: Course[] = [
  {
    id: '1',
    name: 'Advanced Mathematics',
    code: 'MATH401',
    description: 'Advanced mathematical concepts including calculus and differential equations',
    teacher: 'Dr. James Smith',
    teacherId: '1',
    credits: 4,
    duration: '1 Semester',
    schedule: 'Mon, Wed, Fri 9:00-10:00 AM',
    studentsEnrolled: 28,
    maxStudents: 30,
    status: 'active'
  },
  {
    id: '2',
    name: 'Physics Laboratory',
    code: 'PHYS301',
    description: 'Hands-on physics experiments and theoretical applications',
    teacher: 'Prof. Maria Garcia',
    teacherId: '2',
    credits: 3,
    duration: '1 Semester',
    schedule: 'Tue, Thu 2:00-4:00 PM',
    studentsEnrolled: 24,
    maxStudents: 25,
    status: 'active'
  }
];

export const mockAssignments: Assignment[] = [
  {
    id: '1',
    title: 'Calculus Problem Set #3',
    description: 'Integration techniques and applications',
    courseId: '1',
    courseName: 'Advanced Mathematics',
    teacherId: '1',
    dueDate: '2024-02-15',
    maxPoints: 100,
    status: 'published',
    submissions: 22,
    totalStudents: 28,
    type: 'homework'
  },
  {
    id: '2',
    title: 'Lab Report: Projectile Motion',
    description: 'Analysis of projectile motion experiment results',
    courseId: '2',
    courseName: 'Physics Laboratory',
    teacherId: '2',
    dueDate: '2024-02-18',
    maxPoints: 75,
    status: 'published',
    submissions: 18,
    totalStudents: 24,
    type: 'project'
  }
];

export const mockGrades: Grade[] = [
  {
    id: '1',
    studentId: '1',
    studentName: 'Emma Johnson',
    courseId: '1',
    courseName: 'Advanced Mathematics',
    assignmentId: '1',
    assignmentTitle: 'Calculus Problem Set #3',
    points: 92,
    maxPoints: 100,
    percentage: 92,
    letterGrade: 'A-',
    date: '2024-02-10',
    feedback: 'Excellent work on integration techniques!'
  },
  {
    id: '2',
    studentId: '2',
    studentName: 'Michael Chen',
    courseId: '2',
    courseName: 'Physics Laboratory',
    assignmentId: '2',
    assignmentTitle: 'Lab Report: Projectile Motion',
    points: 68,
    maxPoints: 75,
    percentage: 91,
    letterGrade: 'A-',
    date: '2024-02-12',
    feedback: 'Great analysis and clear methodology.'
  }
];
