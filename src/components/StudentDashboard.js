
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEnrolledCourses, markCourseCompleted } from '../actions/enrollmentActions';
import './StudentDashboard.css';

const StudentDashboard = () => {
  const dispatch = useDispatch();
  const enrolledCourses = useSelector((state) => state.enrollments.enrolledCourses);

  useEffect(() => {
    dispatch(fetchEnrolledCourses());
  }, [dispatch]);

  const handleMarkAsCompleted = (enrollmentId) => {
    dispatch(markCourseCompleted(enrollmentId));
  };

  return (
    <div className="dashboard-container">
      <h1>Student Dashboard</h1>
      {enrolledCourses.length > 0 ? (
        <ul className="enrolled-courses-list">
          {enrolledCourses.map((enrollment) => (
            <li key={enrollment.id} className="enrolled-course-item">
              <img src={enrollment.course.thumbnail} alt={enrollment.course.name} className="course-thumbnail" />
              <div className="course-details">
                <h2>{enrollment.course.name}</h2>
                <p>Instructor: {enrollment.course.instructor}</p>
                <p>Student: {enrollment.studentName}</p>
                <p>Due Date: {enrollment.dueDate}</p>
                <progress value={enrollment.progress} max="100">{enrollment.progress}%</progress>
                <button onClick={() => handleMarkAsCompleted(enrollment.id)}>Mark as Completed</button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No enrolled courses found.</p>
      )}
    </div>
  );
};

export default StudentDashboard;
