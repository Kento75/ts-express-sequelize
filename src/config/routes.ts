import {Application} from 'express';
import {NodesController} from '../controllers/nodesController';

export class Routes {
  public nodesController: NodesController = new NodesController();

  public routes(app: Application): void {
    app
      .route('/nodes')
      .get(this.nodesController.index)
      .post(this.nodesController.create);

    app.route('/nodes/:id').get(this.nodesController.show);
  }
}
