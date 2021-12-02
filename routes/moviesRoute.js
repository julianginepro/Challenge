// ************ Require's ************
const express = require("express");
const router = express.Router();

// ************ Controller Require ************

const movieController = require("../controllers/moviesController");

// Middelware
const validations = require("../middlewares/ValidateCreateAndEdit");
const admin = require("../middlewares/admRoute");
/* GET detail movie. */

router.get("/detailMovies/:id", movieController.detail);

/* create movie form. */

router.get("/createMovies", admin, movieController.add);

router.post("/createMovies", [admin, validations], movieController.create);

/* edit movie form. */

router.get("/editMovies/:id", admin, movieController.update);

router.put("/editMovies/:id", [admin, validations], movieController.edit);

/* DELETE one movie. */

router.get("/deleteMovies/:id", admin, movieController.delete);

router.delete("/deleteMovies/:id", admin, movieController.destroy);

module.exports = router;
