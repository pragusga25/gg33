import { createArtistRouter } from './create-artist.router';
import { listAlbumsRouter } from './list-albums.router';
import { listArtistsRouter } from './list-artists.router';
import { listGenresRouter } from './list-genres.router';
import { listPopularSongsRouter } from './list-popular-songs.router';
import { listSongsRouter } from './list-songs.router';

export const theRouters = [
  listSongsRouter,
  listPopularSongsRouter,
  listArtistsRouter,
  listAlbumsRouter,
  listGenresRouter,
  createArtistRouter,
];
