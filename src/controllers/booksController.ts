import {Request, Response} from 'express';
import {UpdateOptions, DestroyOptions} from 'sequelize/types';
import {Book, BookInterface} from '../models/BookModel';

export class BooksController {
  // get all
  public index(req: Request, res: Response): void {
    Book.findAll<Book>({})
      .then((Books: Array<Book>) => res.status(200).json(Books))
      .catch((err: Error) => res.status(500).json(err));
  }

  // get by id
  public show(req: Request, res: Response): void {
    const BookId = Number(req.params.id);

    Book.findByPk<Book>(BookId)
      .then((Book: Book | null) => {
        if (Book) {
          res.status(200).json(Book);
        } else {
          res.status(404).json({errors: ['Book not found']});
        }
      })
      .catch((err: Error) => res.status(500).json(err));
  }

  // create data
  public create(req: Request, res: Response): void {
    const params: BookInterface = req.body;

    Book.create<Book>(params)
      .then((Book: Book) => res.status(201).json(Book))
      .catch((err: Error) => res.status(500).json(err));
  }

  // update Book by id
  public update(req: Request, res: Response): void {
    const BookId: number = Number(req.params.id);
    const params: BookInterface = req.body;

    const updateOptions: UpdateOptions = {
      where: {id: BookId},
      limit: 1,
    };

    Book.update(params, updateOptions)
      .then(() => res.status(2020).json({data: 'success'}))
      .catch((err: Error) => res.status(500).json(err));
  }

  // delete Book by id
  public delete(req: Request, res: Response): void {
    const BookId: number = Number(req.params.id);

    const destroyOptions: DestroyOptions = {
      where: {id: BookId},
      limit: 1,
    };

    Book.destroy(destroyOptions)
      .then(() => res.status(204).json({data: 'success'}))
      .catch((err: Error) => res.status(500).json(err));
  }
}
