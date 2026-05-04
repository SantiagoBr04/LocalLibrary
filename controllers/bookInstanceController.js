const BookInstance = require("../models/bookinstance");
const Book = require("../models/book");

// Display list of all book instances.
exports.bookinstance_list = async (req, res, next) => {
  try {
    const list_bookinstances = await BookInstance.find().populate("book");
    res.render("bookinstance_list", {
      title: "Book Instance List",
      bookinstance_list: list_bookinstances,
    });
  } catch (err) {
    next(err);
  }
};

// Display detail page for a specific book instance.
exports.bookinstance_detail = async (req, res, next) => {
  try {
    const bookinstance = await BookInstance.findById(req.params.id).populate(
      "book"
    );
    if (bookinstance == null) {
      const err = new Error("Book Instance not found");
      err.status = 404;
      return next(err);
    }
    res.render("bookinstance_detail", {
      title: "Copy:",
      bookinstance: bookinstance,
    });
  } catch (err) {
    next(err);
  }
};

// Display book instance create form on GET.
exports.bookinstance_create_get = (req, res) => {
  res.render("bookinstance_form", { title: "Create Book Instance" });
};

// Handle book instance create on POST.
exports.bookinstance_create_post = (req, res) => {
  res.send("Book Instance create POST");
};

// Display book instance delete form on GET.
exports.bookinstance_delete_get = (req, res) => {
  res.send("Book Instance delete GET");
};

// Handle book instance delete on POST.
exports.bookinstance_delete_post = (req, res) => {
  res.send("Book Instance delete POST");
};

// Display book instance update form on GET.
exports.bookinstance_update_get = (req, res) => {
  res.send("Book Instance update GET");
};

// Handle book instance update on POST.
exports.bookinstance_update_post = (req, res) => {
  res.send("Book Instance update POST");
};
