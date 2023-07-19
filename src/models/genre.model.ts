import mongoose from 'mongoose';

interface GenreAttrs {
  name: string;
}

export interface GenreDoc extends mongoose.Document<string> {
  name: string;
  version: number;
}

interface GenreModel extends mongoose.Model<GenreDoc> {
  build(attrs: GenreAttrs): GenreDoc;
}

const genreSchema = new mongoose.Schema(
  {
    name: {
      type: String,
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

genreSchema.set('versionKey', 'version');

genreSchema.statics.build = (attrs: GenreAttrs) => new Genre(attrs);

const Genre = mongoose.model<GenreDoc, GenreModel>('Genre', genreSchema);

export { Genre };
