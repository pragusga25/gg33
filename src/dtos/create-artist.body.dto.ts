import { JoiSchema } from 'joi-class-decorators';
import { Joi } from '../shared/libs';

export class CreateArtistBodyDto {
  @JoiSchema(Joi.string().min(3).required())
  readonly name: string;

  @JoiSchema(Joi.date().timestamp('unix').max('now').required())
  readonly dob: Date;

  @JoiSchema(Joi.array().items(Joi.string().required()).required().min(1))
  readonly genreIds: string[];
}
