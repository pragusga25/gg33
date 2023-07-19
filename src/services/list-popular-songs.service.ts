import { PopularSong } from '../models';

export const listPopularSongsService = async () => {
  const popularSongs = await PopularSong.find();

  return { data: popularSongs };
};
