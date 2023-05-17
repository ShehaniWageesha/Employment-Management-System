/** @format */

import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
    <Link to="/" className="navbar-brand">
      Employee Info
    </Link>

    <div className="collpase navbar-collapse">
      <ul className="navbar-nav mr-auto">
        <li className="navbar-item">
          <Link to="/" className="nav-link">
            Employees
          </Link>
        </li>

        <li className="navbar-item">
          <Link to="/create" className="nav-link">
            Add Employee
          </Link>
        </li>
        
      </ul>
    </div>
  </nav>);

export default NavBar;
