import { NextFunction, Request, Response, Router } from 'express';
import { listPopularSongsService } from '../services';

const listPopularSongsRouter = Router();

listPopularSongsRouter.get(
  '/popular-songs.list',
  async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await listPopularSongsService();

      res.status(200).send({
        ok: true,
        ...result,
      });
    } catch (err) {
      next(err);
    }
  }
);

export { listPopularSongsRouter };
