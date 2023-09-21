import {Schema, model} from 'mongoose';

export interface Thing {
  _id?: string;
  data: string;
}

export const ThingSchema: Schema<Thing> = new Schema({
  data: String
});

export const ThingModel = model('Thing', ThingSchema);
