import { model, Schema } from "mongoose";

const specificationsSchema = new Schema(
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
  deleted: {
    type: Boolean,
    default: false,
  },
});

export const productModel = model("Product", productSchema);
