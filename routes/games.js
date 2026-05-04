const express = require("express");
const router = express.Router();

// Require controller modules
const game_controller = require("../controllers/gamesController");

// GET request for list of all games.
router.get("/", game_controller.game_list);

// GET request for creating a Game. NOTE This must come before route that displays Game (uses id).
router.get("/create", game_controller.game_create_get);

// POST request for creating Game.
router.post("/create", game_controller.game_create_post);

// GET request for one Game.
router.get("/:id", game_controller.game_detail);

module.exports = router;
