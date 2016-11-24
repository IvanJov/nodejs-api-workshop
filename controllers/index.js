function controllers(models) {
  return {
    bookController: require('./book')(models),
    authorController: require('./author')(models)
  }
}

module.exports  = controllers;