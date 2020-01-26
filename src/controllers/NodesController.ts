import {Response} from 'express';
import {CustomRequest} from '../interfaces/customRequest';

export class NodesController {
  public index(req: CustomRequest, res: Response) {
    res.json({
      message: 'Hello World',
    });
  }
}
