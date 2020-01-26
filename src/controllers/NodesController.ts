import {Request, Response} from 'express';
// nodes model
import {Node, NodeInterface} from '../models/nodeModel';

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
}
