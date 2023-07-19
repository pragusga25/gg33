import { Song } from '../models';

export const listSongsService = async () => {
  const songs = await Song.find().populate({
    path: 'artists album',
    select: 'name',
  });

  return { data: songs };
};
