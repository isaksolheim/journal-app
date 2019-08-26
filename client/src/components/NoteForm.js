import React from 'react';

function NoteForm() {
  return(
    <form>
      <label>Title:</label>
      <input type="text" />
      <label>Body:</label>
      <textarea />
      <button type="submit">Add Note</button>
    </form>
  );
}

export default NoteForm;