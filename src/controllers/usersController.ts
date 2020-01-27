import {Request, Response} from 'express';
// users model
import {User, UserInterface} from '../models/userModel';
import {Book} from '../models/bookModel';
import {UpdateOptions, DestroyOptions, FindOptions} from 'sequelize/types';

export class UsersController {
  public index(req: Request, res: Response): void {
    User.findAll<User>({})
      .then((users: Array<User>) => res.status(200).json(users))
      .catch((err: Error) => res.status(500).json(err));
  }
  public create(req: Request, res: Response): void {
    const params: UserInterface = req.body;
    User.create<User>(params)
      .then((user: User) => res.status(201).json(user))
      .catch((err: Error) => res.status(500).json(err));
  }

  public show(req: Request, res: Response): void {
    const userId: number = Number(req.params.id);

    User.findByPk<User>(userId)
      .then((user: User | null) => {
        if (user) {
          res.status(200).json(user);
        } else {
          res.status(404).json({errors: ['User not found']});
        }
      })
      .catch((err: Error) => res.status(500).json(err));
  }

  public update(req: Request, res: Response): void {
    const userId: number = Number(req.params.id);
    const params: UserInterface = req.body;

    // where句
    const updateOptions: UpdateOptions = {
      where: {id: userId},
      limit: 1,
    };

    User.update(params, updateOptions)
      .then(() => res.status(202).json({data: 'success'}))
      .catch((err: Error) => res.status(500).json(err));
  }

  public delete(req: Request, res: Response): void {
    const userId: number = Number(req.params.id);

    // where句
    const destroyOptions: DestroyOptions = {
      where: {id: userId},
      limit: 1,
    };

    User.destroy(destroyOptions)
      .then(() => res.status(204).json({data: 'success'}))
      .catch((err: Error) => res.status(500).json(err));
  }

  public findBookByUserId(req: Request, res: Response): void {
    const userId = Number(req.params.id);

    const findOneOptions: FindOptions = {
      where: {id: userId},
      include: [
        {
          model: Book,
          required: false,
        },
      ],
    };

    User.findOne(findOneOptions)
      .then(users => res.status(200).json(users))
      .catch((err: Error) => res.status(500).json(err));
  }
}
