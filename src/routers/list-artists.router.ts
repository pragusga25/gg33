import { NextFunction, Request, Response, Router } from 'express';
import { listArtistsService } from '../services';

const listArtistsRouter = Router();

listArtistsRouter.get(
  '/artists.list',
  async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await listArtistsService();

      res.status(200).send({
        ok: true,
        ...result,
      });
    } catch (err) {
      next(err);
    }
  }
);

export { listArtistsRouter };
