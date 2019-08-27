import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles/main.scss';
import Navbar from './components/Navbar';
import NoteForm from './components/NoteForm';
import Notes from './components/Notes';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      name: null,
    };
  }

  loginHandler = (name) => {
    this.setState({
      loggedIn: true,
      name 
    });
  }

  signOut = () => {
    this.setState({
      loggedIn: false,
      name: null,
    });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Navbar data={this.state} signOut={this.signOut} />
          <Route exact path="/" render={() => (
            <div>
              <NoteForm />
              <Notes />
            </div>
          )} /> 
          <Route exact path="/login" render={(props) => (
            <Login {...props}
              loginHandler={this.loginHandler} 
            />
          )} />
          <Route exact path="/register" component={Register} />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
