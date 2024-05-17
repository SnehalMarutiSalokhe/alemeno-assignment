import React, { useEffect, useState } from 'react';
import { collection, query, where, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase.js';
import './userDashboard.css'

const UserDashboard = () => {
  const studentId = 107; 
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    const fetchEnrolledCourses = async () => {
      try {
        const enrollmentCollection = collection(db, 'enrollments');
        const q = query(enrollmentCollection, where('studentId', '==', studentId));
        const querySnapshot = await getDocs(q);
        const courses = [];
        for (const docRef of querySnapshot.docs) {
          const enrollmentData = docRef.data();
          const courseDocRef = doc(db, 'courses', enrollmentData.courseId);
          const courseDocSnapshot = await getDoc(courseDocRef);
          if (courseDocSnapshot.exists()) {
            const courseData = courseDocSnapshot.data();
            const course = {
              courseId: enrollmentData.courseId,
              dueDate: enrollmentData.dueDate,
              progress: enrollmentData.progress,
              courseDetails: courseData
            };
            courses.push(course);
          } else {
            console.error(`Course document with ID ${enrollmentData.courseId} does not exist.`);
          }
        }
        setEnrolledCourses(courses);
      } catch (error) {
        console.error('Error fetching enrolled courses:', error);
      }
    };
    fetchEnrolledCourses();
  }, [studentId]);

  return (
    <div className="dashboard">
      <h1>User Dashboard</h1>
      <h2>Enrolled Courses</h2>
      <ul className=".dashboard-enrolled-courses-list">
        {enrolledCourses.map((course) => (
          <li key={course.courseId} className=".dashboard-enrolled-course-item">
            <h3>{course.courseDetails.name}</h3>
            <p>Instructor: {course.courseDetails.instructor}</p>
            <p>Due Date: {course.dueDate}</p>
            <progress value={course.progress} max="100">{course.progress}%</progress>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserDashboard;
