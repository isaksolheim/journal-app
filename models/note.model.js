const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const noteSchema = new Schema({
  title: String,
  name: String,
  content: String
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;