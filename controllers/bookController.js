const Book = require("../models/book");
const Author = require("../models/author");
const Genre = require("../models/genre");

// Display list of all books.
exports.book_list = async (req, res, next) => {
  try {
    const list_books = await Book.find({}, "title author").populate("author");
    res.render("book_list", { title: "Book List", book_list: list_books });
  } catch (err) {
    next(err);
  }
};

// Display detail page for a specific book.
exports.book_detail = async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id)
      .populate("author")
      .populate("genre");
    if (book == null) {
      const err = new Error("Book not found");
      err.status = 404;
      return next(err);
    }
    res.render("book_detail", {
      title: book.title,
      book: book,
    });
  } catch (err) {
    next(err);
  }
};

// Display book create form on GET.
exports.book_create_get = (req, res) => {
  res.render("book_form", { title: "Create Book" });
};

// Handle book create on POST.
exports.book_create_post = (req, res) => {
  res.send("Book create POST");
};

// Display book delete form on GET.
exports.book_delete_get = (req, res) => {
  res.send("Book delete GET");
};

// Handle book delete on POST.
exports.book_delete_post = (req, res) => {
  res.send("Book delete POST");
};

// Display book update form on GET.
exports.book_update_get = (req, res) => {
  res.send("Book update GET");
};

// Handle book update on POST.
exports.book_update_post = (req, res) => {
  res.send("Book update POST");
};
