function authorController(models) {
  var Author = models.Author;

  return {
    index: index,
    show: show,
    add: add,
    update: update,
    remove: remove
  };

  function index(req, res, next) {
    Author
      .find({})
      .exec(function (err, authors) {
        if (err) {
          console.log(err);
          return res.json({error: err});
        }

        res.json({error: false, authors: authors});
      });
  }

  function show(req, res, next) {
    var authorId = req.params.authorId;

    Author
      .findById(authorId)
      .exec(function (err, author) {
        if (err) {
          console.log(err);
          return res.json({error: err});
        }

        res.json({error: false, author: author});
      });
  }

  function add(req, res, next) {
    var name = req.body.name;
    var bio = req.body.bio;

    var author = new Author;
    author.name = name;
    author.bio = bio;

    author
      .save(function (err, author) {
        if (err) {
          console.log(err);
          return res.json({error: err});
        }

        res.json({error: false, author: author});
      });
  }

  function update(req, res, next) {
    var authorId = req.params.authorId;
    var name = req.body.name;
    var bio = req.body.bio;

    Author
      .findById(authorId)
      .exec(function (err, author) {
        if (err) {
          console.log(err);
          return res.json({error: err});
        }

        if (name)
          author.name = name;

        if (bio)
          author.bio = bio;

        author
          .save(function (err, author) {
            if (err) {
              console.log(err);
              res.json({error: err});
            }

            res.json({error: false, author: author});
          });
      });
  }

  function remove(req, res, next) {
    var authorId = req.params.authorId;

    Author
      .findById(authorId)
      .remove(function (err) {
        if (err) {
          console.log(err);
          return res.json({error: err});
        }

        res.json({error: false, message: 'Author removed successfully!'});
      });
  }
}

module.exports = authorController;
