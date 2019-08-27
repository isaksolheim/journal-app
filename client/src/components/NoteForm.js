import React from 'react';
import axios from 'axios';

class NoteForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.data.name,
      title: '',
      content: ''
    };
  }

  submitHandler = (e) => {
    e.preventDefault();

    // clearing input fields
    e.target.reset();

    console.log(this.state);

    // adding the note
    axios.post('http://localhost:5000/add', this.state)
      .then(res => console.log(res.data));

    this.props.getNotes();
  }

  inputHandler = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  }

  render() {
    return(
      <form onSubmit={this.submitHandler}>
        <label>Title:</label>
        <input id="title" type="text" onChange={this.inputHandler} />
        <label>Body:</label>
        <textarea id="content" onChange={this.inputHandler} />
        <button type="submit">Add Note</button>
      </form>
    );
  }
}

export default NoteForm;