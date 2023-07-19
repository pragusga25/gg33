import { NextFunction, Request, Response, Router } from 'express';
import { listSongsService } from '../services';

const listSongsRouter = Router();

listSongsRouter.get(
  '/songs.list',
  async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await listSongsService();

      res.status(200).send({
        ok: true,
        ...result,
      });
    } catch (err) {
      next(err);
    }
  }
);

export { listSongsRouter };
