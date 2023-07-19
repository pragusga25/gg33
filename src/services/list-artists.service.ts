import { Artist } from '../models';

export const listArtistsService = async () => {
  const artists = await Artist.find().populate({
    path: 'genres',
    select: 'name',
  });

  return { data: artists };
};
