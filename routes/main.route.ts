import {Request, Response, Router} from 'express';
import {Thing, ThingModel} from '../models/thing.model';

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
  ThingModel.find().then((things: Thing[]) => {
    res.status(200).send(things);
  });
});

router.post('/', (req: Request, res: Response) => {
  ThingModel.create(req.body).then((thing: Thing) => {
    res.status(200).send(thing);
  });
});

router.put('/', (req: Request, res: Response) => {
  ThingModel.updateOne({_id: req.body._id}, req.body).then(x => {
    res.status(200).send(x);
  });
});

router.delete('/:id', (req: Request, res: Response) => {
  ThingModel.deleteOne({_id: req.params.id}).then(() => {
    res.status(200).send();
  });
});

export default router;
