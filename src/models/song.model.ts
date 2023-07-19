import mongoose from 'mongoose';
import { ArtistDoc } from './artist.model';
import { AlbumDoc } from './album.model';

interface SongAttrs {
  title: string;
  artists: ArtistDoc[];
  album: AlbumDoc;
}

export interface SongDoc extends mongoose.Document<string> {
  title: string;
  artists: ArtistDoc[];
  album: AlbumDoc;
  version: number;
}

interface SongModel extends mongoose.Model<SongDoc> {
  build(attrs: SongAttrs): SongDoc;
}

const songSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    album: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Album',
      required: true,
    },
    artists: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Artist',
        required: true,
      },
    ],
  },
  {
    toJSON: {
      transform(_doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);

songSchema.set('versionKey', 'version');
songSchema.statics.build = (attrs: SongAttrs) => new Song(attrs);

const Song = mongoose.model<SongDoc, SongModel>('Song', songSchema);

export { Song };
