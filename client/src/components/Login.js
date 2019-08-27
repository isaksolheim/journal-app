import React from 'react';
import axios from 'axios';
import setAuthToken from './setAuthToken';
import jwt_decode from 'jwt-decode';


class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: null,
    };
  }

  inputHandler = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  }

  submitHandler = (e) => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    axios.post('http://localhost:5000/api/users/login', userData)
      .then(res => {
        // set token to localstorage
        const { token } = res.data;
        localStorage.setItem('jwtToken', token);
        // Set token to Auth header
        setAuthToken(token);
        // Decode token to get user data
        const decoded = jwt_decode(token);
        // Set current user
        //console.log(decoded);
        this.props.loginHandler(decoded.name)
      })
      .catch(err =>
        this.setState({
          error: err
        }, function() {
          console.log(this.state.error)
        })
      );
  };

  render() {
    return(
      <form onSubmit={this.submitHandler}>
        <label>Email</label>
        <input id="email" type="text" onChange={this.inputHandler} />
        <label>Password</label>
        <input id="password" type="password" onChange={this.inputHandler} />
        <button type="submit">Sign in</button>
      </form>
    );
  }
}

export default Login;