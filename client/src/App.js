import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles/main.scss';
import Navbar from './components/Navbar';
import NoteForm from './components/NoteForm';
import Notes from './components/Notes';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route exact path="/" render={() => (
          <div>
            <NoteForm />
            <Notes />
          </div>
        )} /> 
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
