const mongoose = require('mongoose')
const Schema = mongoose.Schema

function author() {
  const Author = new Schema({
    name: {
      type: String,
      required: true
    },
    bio: {
      type: String,
      required: true
    }
  })

  return Author
}

module.exports = author