import React from 'react';
import './styles/main.scss';
import Navbar from './components/Navbar';
import NoteForm from './components/NoteForm';
import Notes from './components/Notes';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <NoteForm />
      <Notes />
      <Footer />
    </div>
  );
}

export default App;
