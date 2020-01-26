import {Request, Response} from 'express';
// nodes model
import {Node, NodeInterface} from '../models/nodeModel';
import {UpdateOptions, DestroyOptions} from 'sequelize/types';

export class NodesController {
  public index(req: Request, res: Response): void {
    Node.findAll<Node>({})
      .then((nodes: Array<Node>) => res.status(200).json(nodes))
      .catch((err: Error) => res.status(500).json(err));
  }
  public create(req: Request, res: Response): void {
    const params: NodeInterface = req.body;
    Node.create<Node>(params)
      .then((node: Node) => res.status(201).json(node))
      .catch((err: Error) => res.status(500).json(err));
  }

  public show(req: Request, res: Response): void {
    const nodeId: number = Number(req.params.id);

    Node.findByPk<Node>(nodeId)
      .then((node: Node | null) => {
        if (node) {
          res.status(200).json(node);
        } else {
          res.status(404).json({errors: ['Node not found']});
        }
      })
      .catch((err: Error) => res.status(500).json(err));
  }

  public update(req: Request, res: Response): void {
    const nodeId: number = Number(req.params.id);
    const params: NodeInterface = req.body;

    // where句
    const updateOptions: UpdateOptions = {
      where: {id: nodeId},
      limit: 1,
    };

    Node.update(params, updateOptions)
      .then(() => res.status(202).json({data: 'success'}))
      .catch((err: Error) => res.status(500).json(err));
  }

  public delete(req: Request, res: Response): void {
    const nodeId: number = Number(req.params.id);

    // where句
    const destroyOptions: DestroyOptions = {
      where: {id: nodeId},
      limit: 1,
    };

    Node.destroy(destroyOptions)
      .then(() => res.status(204).json({data: 'success'}))
      .catch((err: Error) => res.status(500).json(err));
  }
}
