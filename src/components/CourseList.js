

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses } from '../actions/courseActions.js';
import { Link } from 'react-router-dom';
import { doc, updateDoc, getDoc } from 'firebase/firestore';
import { db } from '../firebase.js';
import './CourseList.css';

const CourseList = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.courses);
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  const filteredCourses = courses.filter(
    (course) =>
      course.name.toLowerCase().includes(search.toLowerCase()) ||
      course.instructor.toLowerCase().includes(search.toLowerCase())
  );

  const handleLike = async (courseId) => {
    try {
      const courseRef = doc(db, 'courses', courseId);
      const courseSnap = await getDoc(courseRef);
  
      if (courseSnap.exists()) {
        const courseData = courseSnap.data();
        
        // Check if likes field exists, if not set it to 0
        const likes = courseData.likes || 0;
  
        const updatedLikes = likes + 1;
        await updateDoc(courseRef, { likes: updatedLikes });
        
        alert(`Liked successfully! Current likes: ${updatedLikes}`);
      } else {
        console.error(`Course with ID ${courseId} does not exist`);
      }
    } catch (error) {
      console.error('Error updating liked status:', error);
    }
  };
  return (
    <div className="course-list-container">
      <h1>Course List</h1>
      <input
        type="text"
        placeholder="Search by name or instructor"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
      <ul className="course-list">
        {filteredCourses.map((course) => (
          <li key={course.id} className="course-item">
            <Link to={`/courses/${course.id}`}>{course.name} - {course.instructor}</Link>
            <button onClick={() => handleLike(course.id)}>Like</button>
            <span className="like-count">{course.likes || 0}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;


