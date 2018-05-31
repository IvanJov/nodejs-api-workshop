function authorController(models) {
  const Author = models.Author

  return {
    index,
    show,
    add,
    update,
    remove
  }

  function index(req, res, next) {
    Author
      .find({})
      .exec(function (err, authors) {
        if (err) {
          console.log(err)
          return res.json({ error: err })
        }

        res.json({ error: false, authors: authors })
      })
  }

  function show(req, res, next) {
    const authorId = req.params.authorId

    Author
      .findById(authorId)
      .exec(function (err, author) {
        if (err) {
          console.log(err)
          return res.json({ error: err })
        }

        res.json({ error: false, author: author })
      })
  }

  function add(req, res, next) {
    const name = req.body.name
    const bio = req.body.bio

    const author = new Author
    author.name = name
    author.bio = bio

    author
      .save(function (err, author) {
        if (err) {
          console.log(err)
          return res.json({ error: err })
        }

        res.json({ error: false, author: author })
      })
  }

  function update(req, res, next) {
    const authorId = req.params.authorId
    const name = req.body.name
    const bio = req.body.bio

    Author
      .findById(authorId)
      .exec(function (err, author) {
        if (err) {
          console.log(err)
          return res.json({ error: err })
        }

        if (name)
          author.name = name

        if (bio)
          author.bio = bio

        author
          .save(function (err, author) {
            if (err) {
              console.log(err)
              res.json({ error: err })
            }

            res.json({ error: false, author: author })
          })
      })
  }

  function remove(req, res, next) {
    const authorId = req.params.authorId

    Author
      .findById(authorId)
      .remove(function (err) {
        if (err) {
          console.log(err)
          return res.json({ error: err })
        }

        res.json({ error: false, message: 'Author removed successfully!' })
      })
  }
}

module.exports = authorController
