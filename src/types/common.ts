
export interface Student {
  id: string;
  name: string;
  email: string;
  studentId: string;
  grade: string;
  class: string;
  avatar?: string;
  gpa: number;
  attendance: number;
  enrollmentDate: string;
  guardianName: string;
  guardianContact: string;
}

export interface Teacher {
  id: string;
  name: string;
  email: string;
  teacherId: string;
  department: string;
  avatar?: string;
  subjects: string[];
  classesCount: number;
  studentsCount: number;
  experience: string;
}

export interface Course {
  id: string;
  name: string;
  code: string;
  description: string;
  teacher: string;
  teacherId: string;
  credits: number;
  duration: string;
  schedule: string;
  studentsEnrolled: number;
  maxStudents: number;
  status: 'active' | 'completed' | 'upcoming';
}

export interface Assignment {
  id: string;
  title: string;
  description: string;
  courseId: string;
  courseName: string;
  teacherId: string;
  dueDate: string;
  maxPoints: number;
  status: 'draft' | 'published' | 'closed';
  submissions: number;
  totalStudents: number;
  type: 'homework' | 'quiz' | 'project' | 'exam';
}

export interface Grade {
  id: string;
  studentId: string;
  studentName: string;
  courseId: string;
  courseName: string;
  assignmentId?: string;
  assignmentTitle?: string;
  points: number;
  maxPoints: number;
  percentage: number;
  letterGrade: string;
  date: string;
  feedback?: string;
}
