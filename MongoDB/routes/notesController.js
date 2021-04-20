const express = require("express");
const router = express.Router();
const noteModel = require("../models/noteModel");

//get all notes
router.get("/notes", async (req, res) => {
  try {
    const notes = await noteModel.find();
    res.status(200).json(notes);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

//post a new note
router.post("/notes", async (req, res) => {
  const newNote = new noteModel({
   title: req.body.title,
   content: req.body.content
  });
  console.log(`Adding NEW NOTE: ${JSON.stringify(newNote)}`);

  try {
    const note = await newNote.save();
    return res.status(200).json(note);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

//delete a note by ID
router.delete("/notes/:id", async (req, res) => {
  try {
    const note = await noteModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, deletedNote: note });
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

//update note by ID
router.patch("/notes/:id", async (req, res) => {
  try {
    const note = await noteModel.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(note);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

//get a note by ID
router.get("/notes/:id", async (req, res) => {
  try {
    const note = await noteModel.findById(req.params.id);
    res.status(200).json(note);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});



module.exports = router;
