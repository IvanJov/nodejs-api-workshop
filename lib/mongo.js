var mongoose = require('mongoose');

function mongo() {
  mongoose.connect('mongodb://localhost/books');

  return mongoose;
}

module.exports = mongo;
