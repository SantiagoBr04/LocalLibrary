const Author = require("../models/author");
const Book = require("../models/book");

// Display list of all authors.
exports.author_list = async (req, res, next) => {
  try {
    const list_authors = await Author.find().sort({
      family_name: 1,
    });
    res.render("author_list", {
      title: "Author List",
      author_list: list_authors,
    });
  } catch (err) {
    next(err);
  }
};

// Display detail page for a specific author.
exports.author_detail = async (req, res, next) => {
  try {
    const author = await Author.findById(req.params.id);
    if (author == null) {
      const err = new Error("Author not found");
      err.status = 404;
      return next(err);
    }
    const author_books = await Book.find({ author: req.params.id });
    res.render("author_detail", {
      title: "Author Detail",
      author: author,
      author_books: author_books,
    });
  } catch (err) {
    next(err);
  }
};

// Display author create form on GET.
exports.author_create_get = (req, res) => {
  res.render("author_form", { title: "Create Author" });
};

// Handle author create on POST.
exports.author_create_post = (req, res) => {
  res.send("Author create POST");
};

// Display author delete form on GET.
exports.author_delete_get = (req, res) => {
  res.send("Author delete GET");
};

// Handle author delete on POST.
exports.author_delete_post = (req, res) => {
  res.send("Author delete POST");
};

// Display author update form on GET.
exports.author_update_get = (req, res) => {
  res.send("Author update GET");
};

// Handle author update on POST.
exports.author_update_post = (req, res) => {
  res.send("Author update POST");
};
