import { model, Schema } from "mongoose";

export const specificationsSchema = new Schema(
  {
    marca: {
      type: String,
      required: true,
    },
    modelo: {
      type: String,
      required: true,
    },
    color: String,
    pesoGramos: Number,
  },
  { _id: false },
);
export const productSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
  especificaciones: specificationsSchema,
});
