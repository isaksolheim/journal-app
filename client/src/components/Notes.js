import React from 'react';

function Notes() {
  const notes = [
    {
      title: 'first note',
      content: 'This is my first note.'
    },
    {
      title: 'not first note',
      content: 'This is definitly not the first note'
    },
    {
      title: 'not first note',
      content: 'This is definitly not the first note'
    },
    {
      title: 'not first note',
      content: 'This is definitly not the first note'
    }
  ];
  return(
    <section className="notes">
      {notes.map(note => {
        return(
          <div className="note" key="note.title">
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