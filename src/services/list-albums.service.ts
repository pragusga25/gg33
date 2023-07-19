import { Album } from '../models';

export const listAlbumsService = async () => {
  const albums = await Album.find();

  return { data: albums };
};
