import { Genre } from '../models';

export const listGenresService = async () => {
  const genres = await Genre.find();

  return { data: genres };
};
