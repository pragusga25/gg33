import { NextFunction, Request, Response, Router } from 'express';
import { listAlbumsService } from '../services';

const listAlbumsRouter = Router();

listAlbumsRouter.get(
  '/albums.list',
  async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await listAlbumsService();

      res.status(200).send({
        ok: true,
        ...result,
      });
    } catch (err) {
      next(err);
    }
  }
);

export { listAlbumsRouter };
