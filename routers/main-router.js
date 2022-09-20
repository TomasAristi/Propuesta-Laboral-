const path = require("path");
const express = require("express");

const mainController = require("../controllers/main-controller.js");
const router = express.Router();

// Navegador:
// localhost:3000/
router.get("/", mainController.home);

module.exports = router;
