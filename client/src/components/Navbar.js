import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  const loggedOut = (
    <ul className="left">
      <li><Link to="/login">Sign In</Link></li>
      <li><Link to="/register">Register</Link></li>
    </ul>
  );

  const loggedIn = (
    <ul className="left">
      <li>{props.data.name}</li>
      <li onClick={props.signOut}>Sign Out</li>
    </ul>
  );

  return(
    <nav>
      <h2><Link to="/">Digital Journal</Link></h2>
      {props.data.loggedIn ? loggedIn : loggedOut}
    </nav>
  );
}

export default Navbar;