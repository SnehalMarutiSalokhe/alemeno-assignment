import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store.js';
import CourseList from './components/CourseList.js';
import CourseDetails from './components/CourseDetails.js';
import UserDashboard from './components/UserDashboard.js';
import StudentDashboard from './components/StudentDashboard.js';
import AddCourses from './components/AddCourses.js';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<CourseList />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route path="/dashboard" element={<StudentDashboard />} />
          <Route path="/dashboard" element={<StudentDashboard />} />
          <Route path="/student" element={<UserDashboard />} />
          
          <Route path="/addCourses" element={<AddCourses />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
