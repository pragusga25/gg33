import { NextFunction, Request, Response, Router } from 'express';
import { createArtistService } from '../services';
import { bodyValidationMiddleware } from '../shared/middlewares';
import { CreateArtistBodyDto } from '../dtos';

const createArtistRouter = Router();

createArtistRouter.post(
  '/artists.create',
  bodyValidationMiddleware(CreateArtistBodyDto),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await createArtistService(req.body);

      res.status(201).send({
        ok: true,
      });
    } catch (err) {
      next(err);
    }
  }
);

export { createArtistRouter };
