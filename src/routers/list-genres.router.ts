import { NextFunction, Request, Response, Router } from 'express';
import { listGenresService } from '../services';

const listGenresRouter = Router();

listGenresRouter.get(
  '/genres.list',
  async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await listGenresService();

      res.status(200).send({
        ok: true,
        ...result,
      });
    } catch (err) {
      next(err);
    }
  }
);

export { listGenresRouter };
