const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId
const moment = require('moment')

function booksController(models) {
  const Book = models.Book

  return {
    index,
    show,
    add,
    update,
    remove,
    like
  }

  function index(req, res, next) {
    Book
      .find({})
      .populate('author')
      .exec(function (err, books) {
        if (err) {
          throw err
        }

        res.json({error:false, books:books})
      })
  }

  function show(req, res, next) {
    const bookId = req.params.bookId

    Book
      .findById(bookId)
      .populate('author')
      .exec(function (err, book) {
        if (err) {
          console.log(err)
          return res.json({error: err})
        }

        res.json({error: false, book: book})
      })
  }

  function add(req, res, next) {
    const name = req.body.name
    const description = req.body.description
    const published = req.body.published
    const author = req.body.author

    const book = new Book
    book.name = name
    book.description = description
    book.published = moment(published, 'DD-MM-YYYY')
    book.author = ObjectId(author)

    book
      .save(function (err, book) {
        if (err) {
          console.log(err)
          return res.json({error: err})
        }

        res.json({error: false, book: book})
      })
  }

  function update(req, res, next) {
    const bookId = req.params.bookId
    const name = req.body.name
    const description = req.body.description
    const published = req.body.published
    const author = req.body.author

    Book
      .findById(bookId)
      .exec(function (err, book) {
        if (err) {
          console.log(err)
          return res.json({error: err})
        }

        if (name)
          book.name = name

        if (description)
          book.description = description

        if (published)
          book.published = moment(published, 'DD-MM-YYYY')

        if (author)
          book.author = ObjectId(author)

        book
          .save(function (err, book) {
            if (err) {
              console.log(err)
              res.json({error: err})
            }

            res.json({error: false, book: book})
          })
      })
  }

  function remove(req, res, next) {
    const bookId = req.params.bookId

    Book
      .findById(bookId)
      .remove(function (err) {
        if (err) {
          console.log(err)
          return res.json({error: err})
        }

        res.json({error: false, message: 'Book removed successfully!'})
      })
  }

  function like(req, res, next) {
    const bookId = req.params.bookId

    Book
      .findById(bookId)
      .exec(function (err, book) {
        if (err) {
          console.log(err)
          return res.json({error: err})
        }

        book.likes++
        book
          .save(function (err, book) {
            if (err) {
              console.log(err)
              res.json({error: err})
            }

            res.json({error: false, book: book})
          })
      })
  }
}

module.exports = booksController