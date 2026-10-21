import { Schema } from "mongoose";

export const sellerSchema = new Schema({
  nombreComercial: {
    type: String,
    required: true,
  },
  cuit: {
    type: String,
    required: true,
    unique: true,
  },
});
