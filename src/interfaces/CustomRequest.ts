import {Request} from 'express';

export interface CustomRequest extends Request {
  // そのままだと any になってるので オーバーライド
  body: {[key: string]: string | undefined};
}
