const Genre = require("../models/genre");
const Book = require("../models/book");

// Display list of all genres.
exports.genre_list = async (req, res, next) => {
  try {
    const list_genres = await Genre.find().sort({ name: 1 });
    res.render("genre_list", {
      title: "Genre List",
      genre_list: list_genres,
    });
  } catch (err) {
    next(err);
  }
};

// Display detail page for a specific genre.
exports.genre_detail = async (req, res, next) => {
  try {
    const genre = await Genre.findById(req.params.id);
    if (genre == null) {
      const err = new Error("Genre not found");
      err.status = 404;
      return next(err);
    }
    const genre_books = await Book.find({ genre: req.params.id });
    res.render("genre_detail", {
      title: "Genre Detail",
      genre: genre,
      genre_books: genre_books,
    });
  } catch (err) {
    next(err);
  }
};

// Display genre create form on GET.
exports.genre_create_get = (req, res) => {
  res.render("genre_form", { title: "Create Genre" });
};

// Handle genre create on POST.
exports.genre_create_post = (req, res) => {
  res.send("Genre create POST");
};

// Display genre delete form on GET.
exports.genre_delete_get = (req, res) => {
  res.send("Genre delete GET");
};

// Handle genre delete on POST.
exports.genre_delete_post = (req, res) => {
  res.send("Genre delete POST");
};

// Display genre update form on GET.
exports.genre_update_get = (req, res) => {
  res.send("Genre update GET");
};

// Handle genre update on POST.
exports.genre_update_post = (req, res) => {
  res.send("Genre update POST");
};
