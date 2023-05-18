/** @format */

import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="navbar navbar-light bg-light navbar-expand-lg fixed-top">
    <Link to="/" className="navbar-brand">
      <h5>| EMS |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h5>
    </Link>

    <div className="collpase navbar-collapse">
      <ul className="navbar-nav mr-auto">
        <li className="navbar-item">
          <Link to="/" className="nav-link">
            People&nbsp;&nbsp;
          </Link>
        </li>

        <li className="navbar-item">
          <Link to="/create" className="nav-link">
            Add People
          </Link>
        </li>
        
      </ul>
    </div>
  </nav>);

export default NavBar;
