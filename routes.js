function routes(app, models) {
  const controllers = require('./controllers')(models);
  const booksController = controllers.bookController;
  const authorController = controllers.authorController;

  app.get('/api/books', booksController.index);
  app.get('/api/books/:bookId', booksController.show);
  app.post('/api/books', booksController.add);
  app.put('/api/books/:bookId', booksController.update);
  app.delete('/api/books/:bookId', booksController.remove);
  app.post('/api/books/:bookId/like', booksController.like);

  app.get('/api/authors', authorController.index);
  app.get('/api/authors/:authorId', authorController.show);
  app.post('/api/authors', authorController.add);
  app.put('/api/authors/:authorId', authorController.update);
  app.delete('/api/authors/:authorId', authorController.remove);
}

module.exports = routes;