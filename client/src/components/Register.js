import React from 'react';

function Register() {
  return(
    <form>
      <label>Name</label>
      <input type="text" />
      <label>Email</label>
      <input type="text" />
      <label>Password</label>
      <input type="password" />
      <label>Repeat Password</label>
      <input type="password" />
    </form>
  );
}

export default Register;