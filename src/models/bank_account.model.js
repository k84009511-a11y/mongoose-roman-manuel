import { Schema } from "mongoose";

export const bankAccountSchema = new Schema({
  cbu: {
    type: String,
    required: true,
  },
  banco: {
    type: String,
    required: true,
  },
});
