var Book = require('./book')();
var Author = require('./Author')();

function models(db) {
  return {
    Book: db.model('Book', Book),
    Author: db.model('Author', Author)
  }
}

module.exports = models;
