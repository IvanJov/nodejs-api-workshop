const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId
const Author = require('./author')

function book() {
  const Book = new Schema({
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
  })

  return Book
}

module.exports = book