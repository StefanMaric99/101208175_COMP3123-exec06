const { error } = require('console');
const express = require('express');
const router = express.Router();

const noteModel = require('../models/NotesModel.js');
const l = console.log
//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
router.post('/notes', (req, res) => {
  // Validate request
  if (!req.body.content) {
    return res.status(400).send({
      message: "Note content can not be empty"
    });
  }

  const note = new noteModel(req.body.content);
  note.save()
    .then(result => res.status(200).json(result))
    .catch(err => res.status(400).json(err))
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
router.get('/notes', (req, res) => {
  //TODO - Write your code here to returns all note
  noteModel.find()
    .then(result => res.status(200).json(result))
    .catch(err => res.status(400).json(err))
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
router.get('/notes/:noteId', (req, res) => {
  const { noteId } = req.params;
  //TODO - Write your code here to return onlt one note using noteid
  noteModel.findById(noteId)
    .then(result => res.status(200).json(result))
    .catch(err => res.status(400).json(err))
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
router.put('/notes/:noteId', (req, res) => {
  // Validate request
  if (!req.body.content) {
    return res.status(400).send({
      message: "Note content can not be empty"
    });
  }
  const { content } = req.body;
  const { noteId } = req.params;

  noteModel.findByIdAndUpdate(noteId, content)
    .then(result => res.status(200).json(result))
    .catch(err => res.status(400).json(err))
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
router.delete('/notes/:noteId', (req, res) => {
  const { noteId } = req.params;

  // Validate request
  if (!noteId) {
    return res.status(400).send({
      message: "Note content can not be empty"
    });
  }
  //TODO - Write your code here to delete the note using noteid
  noteModel.findByIdAndDelete(noteId)
    .then(result => res.status(200).json(result))
    .catch(err => res.status(400).json(err))
});

module.exports = router;
