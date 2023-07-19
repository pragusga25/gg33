import mongoose from 'mongoose';
import { GenreDoc } from './genre.model';

interface ArtistAttrs {
  name: string;
  dob: Date;
  genres: GenreDoc[];
}

export interface ArtistDoc extends mongoose.Document<string> {
  name: string;
  dob: Date;
  genres: GenreDoc[];
  version: number;
}

interface ArtistModel extends mongoose.Model<ArtistDoc> {
  build(attrs: ArtistAttrs): ArtistDoc;
}

const artistSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    genres: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Genre',
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

artistSchema.set('versionKey', 'version');
artistSchema.statics.build = (attrs: ArtistAttrs) => new Artist(attrs);

const Artist = mongoose.model<ArtistDoc, ArtistModel>('Artist', artistSchema);

export { Artist };
