const express = require("express");
const router = express.Router();

const main = require("./../controllers/indexController");

router.get("/", main.home);

module.exports = router;
