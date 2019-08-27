import React from 'react';

function Notes(props) {
  let notes = props.notes;

  return(
    <section className="notes">
      {notes.map(note => {
        return(
          <div className="note" key={note._id}>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            <div className="actions">
              <div className="edit">Edit</div>
              <div className="delete">Delete</div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Notes;