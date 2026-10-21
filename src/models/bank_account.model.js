import { Schema } from "mongoose";

const bankAccountSchema = new Schema({
  cbu: {
    type: String,
    required: true,
  },
  banco: {
    type: String,
    required: true,
  },
});

export const bankAccountModel = model("BankAccount", bankAccountSchema);
