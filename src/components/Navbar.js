// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">MyCourseApp</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Courses</Link>
        </li>
        <li>
          <Link to="/student">My Dashboard</Link>
        </li>
        <li>
          <Link to="/dashboard">All Students</Link>
        </li>
        <li>
          {/* <Link to="/addCourses">Add Courses</Link> */}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
