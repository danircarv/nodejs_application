const { Router } = require("express");

const NotesController = require("../controllers/NotesController");

const notesRoutes = Router();

const notesController = new NotesController();

notesRoutes.post("/notes/:user_id", notesController.create);

module.exports = notesRoutes;
