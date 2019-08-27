import React from 'react';
import axios from 'axios';

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    };
  }

  inputHandler = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  }

  submitHandler = (e) => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    axios.post('http://localhost:5000/api/users/register', newUser);
    
    console.log('User created!');
    this.props.history.push('/login');
  }

  render() {
    return(
      <form onSubmit={this.submitHandler}>
        <label>Name</label>
        <input id="name" type="text" onChange={this.inputHandler} />
        <label>Email</label>
        <input id="email" type="text" onChange={this.inputHandler} />
        <label>Password</label>
        <input id="password" type="password" onChange={this.inputHandler} />
        <label>Repeat Password</label>
        <input id="password2" type="password" onChange={this.inputHandler} />
        <button type="submit">Register</button>
      </form>
    );
  }
}

export default Register;