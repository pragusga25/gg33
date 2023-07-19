import { CreateArtistBodyDto } from '../dtos';
import { Artist, Genre } from '../models';
import { HttpError } from '../shared/errors';

export const createArtistService = async (data: CreateArtistBodyDto) => {
  const { genreIds, ...artistData } = data;

  const genres = await Genre.find({
    _id: { $in: genreIds },
  });

  const notFoundGenreIds = genreIds.filter(
    (genreId) => !genres.find((genre) => genre.id === genreId)
  );

  if (genres.length !== genreIds.length) {
    throw new HttpError(400, 'genres/not-found', [
      `Genres not found: ${notFoundGenreIds.join(', ')}`,
    ]);
  }

  const artist = Artist.build({
    ...artistData,
    genres,
  });

  await artist.save();
};
