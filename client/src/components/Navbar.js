import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return(
    <nav>
      <h2><Link to="/">Digital Journal</Link></h2>
      <ul className="left">
        <li><Link to="/login">Sign In</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;