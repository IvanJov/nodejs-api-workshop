var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;
var Author = require('./author');

function book() {
  var Book = new Schema({
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    author: {
      type: ObjectId,
      ref: 'Author',
      required: true
    },
    published: {
      type: Date,
      required: true
    },
    likes: {
      type: Number,
      default: 0
    }
  });

  return Book;
}

module.exports = book;