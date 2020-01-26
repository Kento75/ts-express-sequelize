import {Response} from 'express';
import {CustomRequest} from '../interfaces/CustomRequest';

export class NodesController {
  public index(req: CustomRequest, res: Response) {
    res.json({
      message: 'Hello World',
    });
  }
}
