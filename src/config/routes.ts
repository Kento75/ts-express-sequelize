import {Application} from 'express';
import {UsersController} from '../controllers/usersController';
import {BooksController} from '../controllers/booksController';
import {Book} from 'models/bookModel';

export class Routes {
  public usersController: UsersController = new UsersController();
  public booksController: BooksController = new BooksController();

  public routes(app: Application): void {
    app
      .route('/users')
      .get(this.usersController.index)
      .post(this.usersController.create);

    app
      .route('/users/:id')
      .get(this.usersController.show)
      .put(this.usersController.update)
      .delete(this.usersController.delete);

    app.route('/users/book/:id').get(this.usersController.findBookByUserId);

    app
      .route('/books')
      .get(this.booksController.index)
      .post(this.booksController.create);

    app
      .route('/books/:id')
      .get(this.booksController.show)
      .put(this.booksController.update)
      .delete(this.booksController.delete);
  }
}
