'use client';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import WebinarList from '../components/WebinarList';
import CourseList from '../components/CourseList';
import AssessmentList from '../components/AssessmentList';

const DashboardPage = () => {
  const router = useRouter();
  const [webinars, setWebinars] = useState([]);
  const [courses, setCourses] = useState([]);
  const [assessments, setAssessments] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      router.push('/login');
    } else {
      // Mock data
      setWebinars([{ id: 1, title: 'Web Development Basics', slots: ['2024-06-01T10:00:00', '2024-06-02T14:00:00', '2024-06-03T18:00:00'], status: 'pending' }]);
      setCourses([{ id: 1, title: 'Advanced JavaScript', modules: [{ id: 1, title: 'Introduction', videoUrl: 'https://www.youtube.com/watch?v=abc123' }, { id: 2, title: 'Closures', videoUrl: 'https://www.youtube.com/watch?v=def456' }], status: 'pending' }]);
      setAssessments([{ id: 1, courseId: 1, questions: [{ id: 1, question: 'What is closure in JavaScript?', options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'], correctOption: 3 }] }]);
    }
  }, []);

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h1 className="text-4xl mb-4">Dashboard</h1>
      <WebinarList webinars={webinars} />
      <CourseList courses={courses} />
      <AssessmentList assessments={assessments} />
    </div>
  );
};

export default DashboardPage;
