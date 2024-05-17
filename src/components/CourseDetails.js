import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourseDetails } from '../actions/courseActions.js';
import { useParams } from 'react-router-dom';
import './CourseDetails.css';

const CourseDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const courseDetails = useSelector((state) => state.courses.courseDetails);

  useEffect(() => {
    dispatch(fetchCourseDetails(id));
  }, [dispatch, id]);

  return (
    <div className="course-details">
      <h1>{courseDetails.name}</h1>
      <p><strong>Instructor:</strong> {courseDetails.instructor}</p>
      <p><strong>Description:</strong> {courseDetails.description}</p>
      <p><strong>Enrollment Status:</strong> {courseDetails.enrollmentStatus}</p>
      <p><strong>Duration:</strong> {courseDetails.duration}</p>
      <p><strong>Schedule:</strong> {courseDetails.schedule}</p>
      <p><strong>Location:</strong> {courseDetails.location}</p>
      <p><strong>Prerequisites:</strong> {courseDetails.prerequisites && courseDetails.prerequisites.join(', ')}</p>
      <details>
        <summary>Syllabus</summary>
        <ul>
          {courseDetails.syllabus && courseDetails.syllabus.map((item, index) => (
            <li key={index}>
              <strong>Week {item.week}:</strong> {item.topic}
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
};

export default CourseDetails;
