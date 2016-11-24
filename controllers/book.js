var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
var moment = require('moment');

function booksController(models) {
  var Book = models.Book;

  return {
    index: index,
    show: show,
    add: add,
    update: update,
    remove: remove,
    like: like
  };

  function index(req, res, next) {
    Book
      .find({})
      .exec(function (err, books) {
        if (err) {
          throw err;
        }

        res.json({error:false, books:books});
      });
  }

  function show(req, res, next) {
    var bookId = req.params.bookId;

    Book
      .findById(bookId)
      .exec(function (err, book) {
        if (err) {
          console.log(err);
          return res.json({error: err});
        }

        res.json({error: false, book: book});
      });
  }

  function add(req, res, next) {
    var name = req.body.name;
    var description = req.body.description;
    var published = req.body.published;
    var author = req.body.author;

    var book = new Book;
    book.name = name;
    book.description = description;
    book.published = moment(published, 'DD-MM-YYYY');
    book.author = ObjectId(author);

    book
      .save(function (err, book) {
        if (err) {
          console.log(err);
          return res.json({error: err});
        }

        res.json({error: false, book: book});
      });
  }

  function update(req, res, next) {
    var bookId = req.params.bookId;
    var name = req.body.name;
    var description = req.body.description;
    var published = req.body.published;
    var author = req.body.author;

    Book
      .findById(bookId)
      .exec(function (err, book) {
        if (err) {
          console.log(err);
          return res.json({error: err});
        }

        if (name)
          book.name = name;

        if (description)
          book.description = description;

        if (published)
          book.published = moment(published, 'DD-MM-YYYY');

        if (author)
          book.author = ObjectId(author);

        book
          .save(function (err, book) {
            if (err) {
              console.log(err);
              res.json({error: err});
            }

            res.json({error: false, book: book});
          });
      });
  }

  function remove(req, res, next) {
    var bookId = req.params.bookId;

    Book
      .findById(bookId)
      .remove(function (err) {
        if (err) {
          console.log(err);
          return res.json({error: err});
        }

        res.json({error: false, message: 'Book removed successfully!'});
      });
  }

  function like(req, res, next) {
    var bookId = req.params.bookId;

    Book
      .findById(bookId)
      .exec(function (err, book) {
        if (err) {
          console.log(err);
          return res.json({error: err});
        }

        book.likes++;
        book
          .save(function (err, book) {
            if (err) {
              console.log(err);
              res.json({error: err});
            }

            res.json({error: false, book: book});
          });
      });
  }
}

module.exports = booksController;