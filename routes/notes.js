const router = require('express').Router();
let Note = require('../models/note.model');

router.route('/').get((req, res) => {
  Note.find()
    .then(notes => res.json(notes))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  // possible to make cleaner ? ES6
  const title = req.body.title;
  const user = req.body.user;
  const content = req.body.content;

  const newNote = new Note({
    title,
    user,
    content
  });

  newNote.save()
    .then(() => res.json('Note added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/delete/:id').delete((req, res) => {
  Note.findByAndDelete(req.params.id)
    .then(() => res.json('Note deleted'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req,res) => {
  Note.findById(req.params.id)
    .then(note => {
      note.user = req.body.user;
      note.title = req.body.title;
      note.content = req.body.content;

      note.save()
        .then(() => res.json('Note updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;