var mongoose = require('mongoose');
var Schema = mongoose.Schema;

function author() {
  var Author = new Schema({
    name: {
      type: String,
      required: true
    },
    bio: {
      type: String,
      required: true
    }
  });

  return Author;
}

module.exports = author;