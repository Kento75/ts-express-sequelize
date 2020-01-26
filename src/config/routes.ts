import {Application} from 'express';
import {NodesController} from '../controllers/NodesController';

export class Routes {
  public nodesController: NodesController = new NodesController();

  public routes(app: Application): void {
    app.route('/').get(this.nodesController.index);
    app.route('/nodes').get(this.nodesController.index);
  }
}
