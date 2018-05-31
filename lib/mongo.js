const mongoose = require('mongoose')
mongoose.Promise = Promise

function mongo() {
  mongoose.connect('mongodb://localhost/books')

  return mongoose
}

module.exports = mongo
