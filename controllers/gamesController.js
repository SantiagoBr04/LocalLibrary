const Game = require("../models/games");

// Display list of all games.
exports.game_list = async (req, res, next) => {
  try {
    const list_games = await Game.find();
    res.render("game_list", { title: "Game List", game_list: list_games });
  } catch (err) {
    next(err);
  }
};

// Display detail page for a specific game.
exports.game_detail = async (req, res, next) => {
  try {
    const game = await Game.findById(req.params.id);
    if (game == null) {
      const err = new Error("Game not found");
      err.status = 404;
      return next(err);
    }
    res.render("game_detail", { title: game.title, game: game });
  } catch (err) {
    next(err);
  }
};

// Display game create form on GET.
exports.game_create_get = (req, res) => {
  res.render("game_form", { title: "Create Game" });
};

// Handle game create on POST.
exports.game_create_post = (req, res) => {
  res.send("Game create POST");
};
