import mongoose from 'mongoose';
import { SongDoc } from './song.model';

interface PopularSongAttrs {
  song: SongDoc;
  playedCount: number;
  period: Date;
}

export interface PopularSongDoc extends mongoose.Document<string> {
  song: SongDoc;
  playedCount: number;
  period: Date;
  version: number;
}

interface PopularSongModel extends mongoose.Model<PopularSongDoc> {
  build(attrs: PopularSongAttrs): PopularSongDoc;
}

const popularSongSchema = new mongoose.Schema(
  {
    playedCount: {
      type: Number,
      required: true,
    },
    period: {
      type: Date,
      required: true,
    },
    song: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Song',
      required: true,
    },
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

popularSongSchema.set('versionKey', 'version');
popularSongSchema.statics.build = (attrs: PopularSongAttrs) =>
  new PopularSong(attrs);

const PopularSong = mongoose.model<PopularSongDoc, PopularSongModel>(
  'PopularSong',
  popularSongSchema
);

export { PopularSong };
