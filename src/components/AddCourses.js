

import React, { useEffect, useState } from 'react';
import { doc, setDoc, collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase.js'; 

const AddCourses = () => {
  const [isAdding, setIsAdding] = useState(true);
  const [message, setMessage] = useState('');

  const courses = [
    {
      id: "course5",
      name: "Modern JavaScript",
      instructor: "Alice Johnson",
      description: "Learn the latest features of JavaScript and how to use them in modern web development.",
      enrollmentStatus: "Open",
      thumbnail: "your.image.here",
      duration: "8 weeks",
      schedule: "Mondays and Wednesdays, 6:00 PM - 8:00 PM",
      location: "Online",
      prerequisites: ["Basic programming knowledge"],
      syllabus: [
        {
          week: 1,
          topic: "ES6 Fundamentals",
          content: "Explore the new features introduced in ECMAScript 6 (ES6)."
        },
        {
          week: 2,
          topic: "Asynchronous JavaScript",
          content: "Understanding asynchronous programming with JavaScript promises and async/await."
        }
      ],
      students: [
        {
          id: 109,
          name: "Grace Anderson",
          email: "grace@example.com"
        },
        {
          id: 110,
          name: "Henry Clark",
          email: "henry@example.com"
        }
      ]
    },
    {
      id: "course6",
      name: "Advanced CSS Techniques",
      instructor: "Michael Johnson",
      description: "Master advanced CSS concepts and techniques for creating responsive and visually appealing web layouts.",
      enrollmentStatus: "Open",
      thumbnail: "your.image.here",
      duration: "6 weeks",
      schedule: "Thursdays, 6:00 PM - 9:00 PM",
      location: "Online",
      prerequisites: ["Basic HTML and CSS knowledge"],
      syllabus: [
        {
          week: 1,
          topic: "Flexbox Layouts",
          content: "Deep dive into CSS flexbox for creating flexible layouts."
        },
        {
          week: 2,
          topic: "Grid Layouts",
          content: "Exploring CSS grid for creating complex web layouts."
        }
      ],
      students: [
        {
          id: 111,
          name: "Isabella Harris",
          email: "isabella@example.com"
        },
        {
          id: 112,
          name: "Jack Turner",
          email: "jack@example.com"
        }
      ]
    },
    {
      id: "course7",
      name: "Node.js and Express",
      instructor: "Sarah Adams",
      description: "Learn to build backend web applications using Node.js and Express framework.",
      enrollmentStatus: "Open",
      thumbnail: "your.image.here",
      duration: "8 weeks",
      schedule: "Tuesdays and Thursdays, 7:00 PM - 9:00 PM",
      location: "Online",
      prerequisites: ["Basic JavaScript knowledge"],
      syllabus: [
        {
          week: 1,
          topic: "Node.js Fundamentals",
          content: "Introduction to Node.js and its core modules."
        },
        {
          week: 2,
          topic: "Express Basics",
          content: "Understanding routing, middleware, and templating with Express."
        }
      ],
      students: [
        {
          id: 113,
          name: "Kevin Scott",
          email: "kevin@example.com"
        },
        {
          id: 114,
          name: "Lily Robinson",
          email: "lily@example.com"
        }
      ]
    }
    // Add more courses as needed for further testing
  ];

  useEffect(() => {
    const addCoursesToFirestore = async () => {
      try {
        for (const course of courses) {
          // Add course with specific document ID
          await setDoc(doc(db, 'courses', course.id), course);

          // Add enrollments linked to the course
          const enrollmentsCollection = collection(db, 'enrollments');
          for (const student of course.students) {
            await addDoc(enrollmentsCollection, {
              courseId: course.id,
              studentId: student.id,
              studentName: student.name,
              studentEmail: student.email,
              progress: 0, 
              dueDate: "2024-12-31" 
            });
          }
        }
        setMessage("Courses and enrollments added successfully");
      } catch (error) {
        console.error("Error adding courses and enrollments: ", error);
        setMessage("Error adding courses and enrollments: " + error.message);
      } finally {
        setIsAdding(false);
      }
    };

    addCoursesToFirestore();
  }, []); 

  return (
    <div>
      <h2>Adding Courses and Enrollments</h2>
      {isAdding ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>{message}</p>
          <h3>Added Courses:</h3>
          <ul>
            {courses.map(course => (
              <li key={course.id}>
                <h4>{course.name}</h4>
                <p>{course.description}</p>
                <p>Instructor: {course.instructor}</p>
                <p>Duration: {course.duration}</p>
                <p>Schedule: {course.schedule}</p>
                <p>Location: {course.location}</p>
                <p>Prerequisites: {course.prerequisites.join(', ')}</p>
                <h5>Syllabus:</h5>
                <ul>
                  {course.syllabus.map(item => (
                    <li key={item.week}>
                      <strong>Week {item.week}:</strong> {item.topic} - {item.content}
                    </li>
                  ))}
                </ul>
                <h5>Enrolled Students:</h5>
                <ul>
                  {course.students.map(student => (
                    <li key={student.id}>
                      {student.name} ({student.email})
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AddCourses;
