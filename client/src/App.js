import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

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
      yourNotes: [],
    };
  }

  loginHandler = (name) => {
    this.setState({
      loggedIn: true,
      name 
    });

    this.getNotes();
  }

  signOut = () => {
    this.setState({
      loggedIn: false,
      name: null,
    });
  }

  getNotes = () => {
    let name = this.state.name;

    axios.get('http://localhost:5000')
      .then(res => {
        let notes = res.data;
        let yourNotes = [];
        for (var i = 0; i < notes.length; i++) {
          if (notes[i].name === name) {
            yourNotes.push(notes[i]);
          }
        }

        this.setState({ yourNotes }, function() {
          console.log(this.state.yourNotes);
        });
      });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Navbar data={this.state} signOut={this.signOut} />
          <Route exact path="/" render={() => (
            <div>
              {this.state.loggedIn ? 
                <div>
                  <NoteForm data={this.state} getNotes={this.getNotes} />
                  <Notes notes={this.state.yourNotes} />
                </div> 
                : 
                <div>
                  <p>Sign in to see your notes</p>
                </div>}
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
