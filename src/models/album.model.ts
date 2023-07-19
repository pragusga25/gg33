import mongoose from 'mongoose';
import { ArtistDoc } from './artist.model';

interface AlbumAttrs {
  name: string;
  owner: ArtistDoc;
}

export interface AlbumDoc extends mongoose.Document<string> {
  name: string;
  owner: ArtistDoc;
  version: number;
}

interface AlbumModel extends mongoose.Model<AlbumDoc> {
  build(attrs: AlbumAttrs): AlbumDoc;
}

const albumSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Artist',
      required: true,
    },
  },
  {
    toJSON: {
      transform(_doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
    timestamps: true,
  }
);

albumSchema.set('versionKey', 'version');

albumSchema.statics.build = (attrs: AlbumAttrs) => new Album(attrs);

const Album = mongoose.model<AlbumDoc, AlbumModel>('Album', albumSchema);

export { Album };
