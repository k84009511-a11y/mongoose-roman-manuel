import { Schema } from "mongoose";

const sellerSchema = new Schema({
  nombreComercial: {
    type: String,
    required: true,
  },
  cuit: {
    type: String,
    required: true,
    unique: true,
  },
  deleted: {
    type: Boolean,
    default: false,
  },
});

export const sellerModel = model("Seller", sellerSchema);
